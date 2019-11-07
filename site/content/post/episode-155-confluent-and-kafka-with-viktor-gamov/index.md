+++
audioDuration = "00:37:46"
audioFile = "Google.Cloud.Platform.Podcast.Episode.155.mp3"
audioSize = 54778243
categories = ["Confluent", "Kafka", "Confluent Cloud"]
date = "2018-11-14"
description = "Viktor Gamov is on the podcast today to discuss Confluent and Kafka with your hosts, Mark and Melanie, and special first-time guest host, Michelle."
draft = false
episodeNumber = 155
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Confluent and Kafka with Viktor Gamov"
image="/post/episode-155-confluent-and-kafka-with-viktor-gamov/images/hero/hero-EP-155.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/E6vs4LbpAmH"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/9x2082/episode_155_confluent_and_kafka_with_viktor_gamov/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Viktor Gamov](https://twitter.com/gamussa) is on the podcast today to discuss Confluent and Kafka with [Mark](https://twitter.com/Neurotic) and special first-time guest host, [Michelle](https://twitter.com/texasmichelle). Viktor spends time with Mark and [Melanie](https://twitter.com/nyghtowl) explaining how Kafka allows you to stream and process data in real-time, and how Kafka helps Confluent with its advanced streaming capabilities. Confluent Cloud helps connect Confluent and cloud platforms such as Google Cloud so customers don't have to manage anything - Confluent takes care of it for you! 

To wrap up the show, Michelle answers our question of the week about Next 2019.

<!--more-->

##### Viktor Gamov

[Viktor Gamov](https://twitter.com/gamussa) is a Developer Advocate at Confluent, the company that makes a streaming platform based on Apache Kafka.
Working in the field, Viktor developed comprehensive expertise in building enterprise application architectures using open source technologies. He enjoys helping different organizations design and develop low latency, scalable, and highly available distributed systems.

Back in his consultancy days, he co-authored O’Reilly’s «Enterprise Web Development».

He is a professional conference speaker on distributed systems, Java, and JavaScript topics, and is a regular at events, including JavaOne, Devoxx, OSCON, QCon, and [others](http://lanyrd.com/gamussa). He [blogs](http://gamov.io) and produces the podcasts Razbor Poletov (in Russian) and co-hosts DevRelRad.io.

Follow Viktor on [Twitter](https://twitter.com/gamussa), where he posts about gym life, food, open source, and, of course, Kafka and Confluent!


##### Cool things of the week

* Kubeflow published a leadership guide to inclusivity [site](https://github.com/kubeflow/community/blob/master/INCLUSIVITY.md)
* Picture what the cloud can do: How the New York Times is using Google Cloud to find untold stories in millions of archived photos [blog](https://cloud.google.com/blog/products/ai-machine-learning/how-the-new-york-times-is-using-google-cloud-to-find-untold-stories-in-millions-of-archived-photos)
* Click-to-deploy on Kubeflow [site](https://deploy.kubeflow.cloud/#/)
* Containerd available for beta testing in Google Kubernetes Engine [blog](https://cloud.google.com/blog/products/containers-kubernetes/containerd-available-for-beta-testing-in-google-kubernetes-engine)
* Introducing AI Hub and Kubeflow Pipelines: Making AI simpler, faster, and more useful for businesses [blog](https://cloud.google.com/blog/products/ai-machine-learning/introducing-ai-hub-and-kubeflow-pipelines-making-ai-simpler-faster-and-more-useful-for-businesses)
* Announcing Cloud Scheduler: a modern, managed cron service for automated batch jobs [blog](https://cloud.google.com/blog/products/application-development/announcing-cloud-scheduler-a-modern-managed-cron-service-for-automated-batch-jobs)

##### Interview

* Kafka [site](https://kafka.apache.org)
* Kafka Connect [site](https://docs.confluent.io/current/connect/index.html)
* Kafka Streams [site](https://kafka.apache.org/documentation/streams/)
* KSQL [site](https://www.confluent.io/product/ksql/)
* Confluent [site](https://www.confluent.io)
* Confluent Hub [site](https://www.confluent.io/hub/)
* Confluent Schema Registry [site](https://www.confluent.io/confluent-schema-registry/)
* Confluent Cloud on Google Cloud Marketplace [site](https://console.cloud.google.com/marketplace/details/confluent-saas/confluent-cloud?%20%3Futm_source=cloud.google.com&utm_medium=site-link&utm_campaign=gcp&utm_term=term&utm_content=content&pli=1)
* Confluent Enterprise [site](https://www.confluent.io/product/confluent-enterprise/)
* Confluent Cloud [site](https://www.confluent.io/confluent-cloud/)
* Confluent on Github [site](https://github.com/confluentinc/)
* Confluent Blog [blog](https://www.confluent.io/blog/)
* How to choose the number of topics/partitions in a Kafka cluster? [blog](https://confluentinc.wordpress.com/2015/03/12/how-to-choose-the-number-of-topicspartitions-in-a-kafka-cluster/)
* Publishing with Apache Kafka at The New York Times [blog](https://www.confluent.io/blog/publishing-apache-kafka-new-york-times/)
* Google Cloud and Confluent partner to deliver a managed Apache Kafka service [blog](https://cloud.google.com/blog/products/gcp/google-cloud-platform-and-confluent-partner-to-deliver-a-managed-apache-kafka-service?utm_source=cloud.google.com&utm_medium=site-link&utm_campaign=gcp&utm_term=term&utm_content=content)
* Viktor's Presentations [site](Speaking.gamov.io)
* Confluent Community [site](https://slackpass.io/confluentcommunity)

##### Question of the week

[If I wanted to submit a CFP for Next 2019, how would I do it?](https://cloud.withgoogle.com/next18/sf/cfp)

##### Where can you find us next?

Mark and Michelle will be at [KubeCon](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2018/) in December.

Michelle will be at [Scale by the Bay](https://scalebythebay2018.sched.com/event/Fndz) on Friday. She'll also be at YOW! [Sydney](https://sydney.yowconference.com.au/proposal/?id=6860), [Brisbane](https://brisbane.yowconference.com.au/proposal/?id=6859), & [Melbourne](https://melbourne.yowconference.com.au/proposal/?id=6858) in Nov & December.

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 155 of the weekly Google Cloud Podcast. My name is Mark Mandel. And I'm here with my colleague. This week, I'm joined by a very special guest, Michelle Casbon. How you doing, Michelle?" >}} 

MICHELLE: I'm doing great. How are you, Mark? 

MARK: I'm very well. Thank you very much for standing in for Melanie this week, and joining me on the podcast. 

MICHELLE: It's fantastic to be here. My first time co-hosting. 

MARK: Excellent. Well, just like every week, this week we're going to be talking about an interview with Confluent. We're going to be talking to them about Kafka and message processing systems. After that, we'll be doing our question of the week, where we'll be asking, if I wanted to submit a CFP, or a Call For Papers, for next 2019, how would I do it? 

MICHELLE: How would you do it? 

MARK: I don't know. I don't know how I would do it. But I believe you have the answer. 

MICHELLE: There are a lot of answers to that question. It's well-documented on our website. 

MARK: Excellent. And we'll talk about that. Before we do that, we're going to get stuck into cool things of the week. And I know you have some Kubeflow stuff. 

MICHELLE: Yes, I have lots of really good Kubeflow news. So it has been a very big year for Kubeflow. It is coming up on its one-year anniversary. The project was launched just under a year ago. This was an action-packed week. 

One of my favorite things, last week we published a guide to inclusivity. 

MARK: Nice. 

MICHELLE: This is a guide for leaders of the Kubeflow project. And it's really pretty generic. I think it applies to any open-source project, really any tech-related project. It's open source. It's on the GitHub repo at github.com/kubeflow/community. 

MARK: Yes. 

MICHELLE: It's inclusivity.markdown. And it's just a few examples of things that we do within the Kubeflow community to make sure that everyone feels welcome. And it's really beneficial to not just underrepresented groups, but really for everyone. 

MARK: Oh, I think I'll steal that. That sounds really good. 

MICHELLE: Please do. That's why it's there and open source. 

MARK: Excellent. We'll have a link in show notes. 

We also have a really great article talking about how "New York Times" is using Google Cloud to find untold stories in millions of archived photos. So they have a huge swath of images from a variety of sources, and a huge amount of history. And they're building out an asset management system that uses Cloud Storage, Pub/Sub, machine learning through the Vision API, basically, to take all these images and catalog them and find out all sorts of interesting stuff in there. It's actually a really cool article. You should check it out. 

MICHELLE: Yeah, sounds great. And didn't they call this the morgue? Wasn't this like a basement full of images that they're digitizing? 

MARK: Oh, really? I didn't think I caught that. That's a delightfully dark name. 

MICHELLE: Yes, and it's like improving access to things inside the morgue, which everyone gets excited about. 

MARK: That's wonderful. 

MICHELLE: All right, so the other cool thing, more Kubeflow news, we just released something called click-to-deploy, which gives you everything you need to get started with Kubeflow. It helps you to deploy your whole infrastructure and install all of the Kubeflow files on to a GKE cluster. 

MARK: Nice. 

MICHELLE: And it's just a pretty simple website, deploy.kubeflow.cloud. And type in your project name. Add your OAuth credentials. Boom, you're done. Takes about 15 minutes to spin up. It'll give you a domain name to access everything inside the cluster. Much simpler than-- 

MARK: Fancy. 

MICHELLE: --all of the very detailed steps you used to have to go through. So again, big news for Kubeflow. 

MARK: Very nice. Excellent. Another cool thing-- it would be remiss if I didn't talk about Kubernetes. So Containerd, which is an industry standard container runtime, and basically the core part of Docker's core runtime process, if you want to try containerd on Google Kubernetes Engine, it's available for beta testing now. 

Basically, if you want to just test your workflows, make sure everything works the way it should do, you can do that basically by saying like there's a particular container operating system, image type, that you can use inside your GKE startup scripts. And that will start up the beta version that uses containerd rather than the full Docker stack. So it's got some nice things about it, basically great fit. It's meant to be embedded, smaller resource footprint, that kind of stuff. So if you want to take it for a spin and see how it works, it's available for you now. 

MICHELLE: Sounds great. I promise this is the last Kubeflow news. So this is the biggest news of the week. And this was an announcement, a few new things. One of them is the AI Hub and the other is Pipelines. These are important because it's a way to interact with Kubeflow that doesn't involve getting down to the Kubernetes level and using kubectl and worrying about pods. 

So Pipelines provides a Python SDK. It give you a way to from within a notebook to define an entire machine learning workflow. And then there's a really nice fancy UI. So you can see things running and see the status. You can view your pod logs from within this really nice UI. 

And then the AI Hub is where you can find sort of generic components to bring into your pipeline to make it easier to start from scratch with a few prebaked things. And those are both public objects and private. So if you're within an organization, you can have things just for you and your group. So lots of room for growth there. It's brand new. It just opened up. I believe it's in alpha release. So if you want to get started, I believe there's a link to sign up for that. 

MARK: Awesome. And finally, this is something that I've actually really wanted for a really, really long time. And I'm so glad to see it. Cloud Scheduler is available. So basically, if you've ever wanted to run anything on Google Cloud on a regular basis without having to start up, like, a VM with Cron or just to create a simple App Engine app just to do Cron scripting, we now have a thing that does this. And it's really good. It's a job scheduler. You set it up. It actually uses the same Crontab type format. 

But basically, if you want to push an event to an HTTP endpoint or to Pub/Sub and you want to do it on a regular basis, you can now do it through Cloud Scheduler. And you can go play with it now. And it works. And does cool stuff. So no more having to build these little App Engine apps just to do Cron stuff. 

MICHELLE: Nice. So you can upload your like asterisk commands directly to the Cloud Scheduler, and not have to worry about building a whole app around it. 

MARK: You have to build a whole app. It's just a little thing that does the thing it's supposed to do. 

MICHELLE: Nice. Is there a good GUI for it? Or do I have to still speak in asterisk language? 

MARK: There is a GUI for it. So you can do that in there, as well. The frequency is still an asterisk language in like Crontab. But we have guides for that, as well. 

MICHELLE: Wonderful. 

MARK: Yeah, it's not too bad. Awesome. So why don't we go chat with Viktor about Confluent and Kafka? 

MICHELLE: Sounds great. 

MARK: Let's do it. 

Thanks so much to Viktor Gamov for coming to join us today, developer advocate for Confluent. Viktor, how are you doing? 

VIKTOR: Hi, guys. Very excited to be here. Long time listener, first time caller. 

MARK: I think actually you're the first one to make that joke. Excellent. Well, thanks so much for coming down to talk to us about Confluent and Kafka. Before we get stuck into that, tell us about who you are. And what do you do? 

VIKTOR: I'm a developer advocate at Confluent. What I do, I like to talk to developers, engineers, administrators, architects about Kafka and streaming platform. It's, like, very short. But we can, you know, dive deeper if needed. 

MELANIE: So can you tell us, what is Kafka? 

VIKTOR: Prepared question, right? 

MELANIE: No, not at all. None of this ever is prepared. 

VIKTOR: Yeah, essentially, Kafka is what we call a streaming platform. And interesting enough that when you talk to people, depends on who you're talking to-- if you're talking to people who has a messaging background, they can feel that, oh, it looks like new messaging solution. If you talk to people who has databases background, they might say, oh, it looks like distributed database, because of the nature of the data that we're putting there. So Kafka is a very unique beast in the world of distributed systems. 

But essentially what we call it is a streaming platform that allows you to not only consume results in real time, but also do processing. Because usually, Kafka as a project is a patch project, it includes multiple things. It brokers itself stream processing library called Kafka streams, and the library that allows to easy integration with data sources called Kafka Connect. So this is a very short version. But again, we can go as deep as you want, and as deep as your listeners want to. 

MARK: Absolutely. So what sort of things do people tend to use Kafka for? I mean, you mentioned that some people think of it in one way, and other people think of it another. What are some typical use cases? 

VIKTOR: When the Kafka was developed back in the day on LinkedIn, they tried to solve one of the problems to increase speed of data ingestion into Hadoop. And they start to move from the batch oriented pipelines, where they need to wait until all data will arrive into some like landing area where they can start processing, to the more like, OK, do we really need to wait for all this data? Because our algorithms not necessarily need to have it in one place. So we can do this and process this data as it comes. 

So this is where idea of stream processing and essentially, like, infinite stream of data that comes into the system, where we can process this data as it comes, instead of having this buffer it, or after that we can process at the end of the day. So this is one of the use cases, where the people start using this in the very limited third capacity. They started, OK, so if we will stream our logs there because usually logs, it's important data, but it's not that important. It's actual transactional data, and so far and so on. So the log processing was one of the use cases where people starting to look into Kafka. 

Over time, people start realizing that, hey actually we can use it to solve some of the real-time use cases, where we have data that comes in big amounts and high velocity. So the Kafka helps to absorb this. So Kafka behaves as an actual buffer. Plus libraries allows to process data as it arrives. 

Now, use cases around Kafka pretty much are limitless. Kafka even used for a backbone for microservices, when you need to establish communication between different microservices components, without actually tightly coupling them. 

MELANIE: How does it buffer? Can you give us just a conceptual idea of what that really means? 

VIKTOR: So Kafka itself represents data structure that called append only log, or distributed append only log. Meaning that data always will be reading to the end of the file, which allows to very fast write capabilities and a also can be read sequentially, so all consumers read the data from beginning of the file. And they read this sequentially. That also allows very fast speed in terms of consumption. 

This is why Kafka looks like or sounds like a messaging queue for many people. Because in messaging queue, your message comes from one place and reading from another. So it's like a first in, first out type of data structure. This is why it's also suitable for messaging use cases. 

Kafka provides the ways how this data can be replicated in case of one of the brokers will go down. It provides the way how these topics, what we call topics. The data structure where everyone is reading and writing. And the topics allows us to-- topic is partition. So this is why when I was talking about data structures that lies inside the Kafka, they remind some NoSQL type of database, where you can have a horizontal scalability. And you can scale your topics by just adding more workers. And essentially, it provides also replicas, in case of failures. 

MARK: Are there any kinds of limits on the type of information that can go into Kafka? Or is it kind of just like throw whatever you want in there to get processed? 

VIKTOR: Essentially, there is no limit. But conceptually, there is. So as a streaming platform, Kafka is designed to be handling large number of messages. But the size of messages should be relatively small. So this is why if you're trying to stream files, like 100 megabytes of file as one message, maybe it's not very suitable. 

So this is why people come up with different workarounds if they still can use this use case or want to implement this use case. So you can chunk this file and send this in different chunks. Probably, if we're talking about streaming, people usually talking about streaming video or streaming audio. So Kafka is not specifically a good case for that kind of payload. 

So I would say a large number of messages, high velocity, this is the perfect type of payload. But inside the message, it really doesn't matter what you put in there. 

MELANIE: So data is, of course, key nowadays. And being able to manage it, of course, is very important. Where does Kafka plug in in terms of the various data, tooling, and products that exist out there? What are all the things it integrates into? 

VIKTOR: The major use case what I see right now-- I used to work in the professional services with Confluent. So I was talking many customers about their use cases and how they want to use it. And specifically, when we're talking about data integration, change data capture use case is on the high demand. 

So imagine you have things like Oracle database, where you want to extract the changes and make them real time. So when we're talking about usual traditional databases, it's kind of like a solid source of data. But we want to provide a little bit of fluidity. We need to start moving data out. So having these connectors that were written using Kafka Connect framework can extract this or listen to the changes that happen in Oracle database, and push these changes into Kafka. 

So once you kind of broke this silo of your Oracle database, your data becomes available for many sources. So Kafka designed to be really heavy on reads. This is why you have this kind of literature allusion to Franz Kafka, a famous writer. Someone wrote this once. And many people can read this. So same thing with Kafka. So once you extract this data from this data silo as a traditional relational database and start moving data out. And in this case, you open up multiple different possibilities for integration. 

You know connectors can be two types. One can bring data in. Another can take data out. So once you extracted this from Oracle, you can do processing in Kafka using Kafka streams or T-SQL. And after that, offload this data to Mongo, to Elastic, or even to any Cloud Storage. 

One of the use cases that we see right now is kind of making Kafka as a-- I don't want to sound too marketing. But it's kind of like a bridge to cloud. Sorry about that. But essentially, one of the company that I was working, instead of paying vendors to provide them ways how they can do replication-- and it's going to be very expensive-- they use Kafka CDC to change the capture of their on-prem database and replicate it to their Google Cloud instance. 

MARK: So if someone needs to build a connector, or they want to build their own custom integration, is there like APIs, or client libraries for different languages? How does that work? 

VIKTOR: Usually, what I try to say, before you start building something-- and short answer to your question, yes-- but before you start building something, you need to check if there is a connector already available. Because the framework itself, it's quite popular for building connectors. 

There is one common place where everyone can go and publish their connectors called Confluent Hub. So if you go to confluent.io/hub you will find all possible connectors. 

MARK: Very cool. 

VIKTOR: If you want to build this, it will require some other skills, specifically Java skills. So if you want to build a connector, there is a framework, Kafka Connect. There's documentation around this. There's some examples of how to build connector. 

I would say it's fairly simple. I build connector myself. I can say that I'm not the brightest engineer, or smartest engineer. I can build connector. So everyone can build connector. So API is quite straightforward. You just need to figure out how you want to read data out of Kafka or write data to Kafka. And that's pretty much it. 

However, if you don't want to for some reason learn Java, or like API for your data source is not available for Java, you can still stick to traditional producer consumer clients. There are plenty native integration for any possible language, so Java, dot Net, Node.js, C#, C++. Just tell me when I need to stop. 

MELANIE: All the things. OK, so I understand that there is an open-source version of Kafka. And there's also an enterprise version. So what makes them different? And what makes them the same? 

VIKTOR: So I would say this is not a very precisely accurate statement because Kafka itself is open source. There's no enterprise version of Kafka. So what we do in Confluent, we actually building streaming platform that augments basic things that provides by Kafka, brokers, clients, Kafka Connect, and Kafka streams, with some additional capabilities that enterprises need. 

So this is why we build two things. We build the Confluent platform open source and the Confluent enterprise. So for open-source platform, we include things for managing schema for data, managing metadata around this data called schema registry, that allows you to have a centralized place where we can store all of these schemas of the data and provide different versions. So one microservice can not have this data, like some built-in application. They can always request this from schema registry. 

We provide a REST proxy, which is in very rare occasion where you cannot use native clients, you can use a REST proxy. So for example, you're writing Kafka client in Bash and using cURL to interact with Kafka. So it can use a REST proxy to do that. 

And the third one I guess is a very cool thing is the KSQL, which is stream processing tool that allows you to use SQL to write your stream processing applications. 

MICHELLE: How do you write SQL to do stream processing? How does that work? 

VIKTOR: So we were thinking that, OK, how can we liberate the stream processing and open it up to a wider audience? And we figured out that the most used language, or most used technology, in data world is SQL. So we decide, OK, let's see how we can use a SQL language as a DSL for stream processing. 

So essentially, we took some of the concepts that people already know, do your select, and do filtering by in particular fields. And we built a tool called KSQL. So you have an infinite stream of credit card transactions. But you're only interested in data that happened with one account within five second intervals, so you have multiple swipes. So you can potentially say, OK, so maybe it's a fraudulent account within five second interval. 

So KSQL allows you to write simple SQL statement on infinite stream of data that will produce another stream that will include all the data that you're interested in. For example, from the stream of credit card transactions, we can produce stream that will have potential fraudulent transactions. That will include all messages where credit card number ID will be swiped three times or five times within five-minute intervals. 

So it is kind of a powerful thing. Because it includes what we call stateful stream processing. Because in order to do like a count, how many times you swiped a credit card, you need to have a result from the previous message, right? So you need to have it stored somewhere. You need to have a state. And also, you need to have a state that will be applicable to a particular time window. Window is essentially a concept that allows you to build finite data chunks on infinite stream of data. 

And everything was done thanks to Kafka Stream. So KSQL is built on top of Kafka Streams, which is Java library. But as a developer, you don't need to learn Java or any other language, just use SQL to write your application. 

I'm not sure if I answered this fully. But essentially, there's a couple extensions that you need to know, because in standard SQL, there is no stream concept. There's no window concept. However, if you want to do joins, for example, you have data that comes with the stream. And you have some data that you extracted from your database. And there's data inside the Kafka. You can join those two streams in order to produce an enriched stream. 

You have a stream that only includes credit card number information. And you have another stream that has credit card number and all fields that is required to know who the owner of the credit card, what's the balance, and things like that. So you're joining two streams in order to produce third stream, which would be augmented stream. 

And to quickly return to the question about enterprise platform, so enterprise platform includes some of the monitoring tools, some advanced tools for data replication. And essentially, it's also built on top of open-source Kafka, on top of open-source platform, and provides some of the enterprise tools for monitoring, for example, Control Center, and some of the connectors for enterprise systems. 

But Kafka itself is fully open source. And there's no difference between enterprise platform and open-source Kafka. 

MELANIE: Great. So what is the relationship between Confluent and the Kafka project? 

VIKTOR: So Confluent was founded by three people that came from LinkedIn. And those people were active contributors to Apache Kafka project. So Jake [INAUDIBLE] was one of the masterminds behind some of the distributed systems in LinkedIn. And the Kafka was included. And one of the most popular project is Kafka. 

So he helped to bring this to Apache Software Foundation. And after that, when the project was very popular in the Apache, they decide to start a company to provide streaming platform on top of Apache Kafka that will have all features of open-source thing, but also will have advanced features and tools that a modern enterprise might require, for example, for data governance a schema registry, or for providing simplicity of stream processing providing KSQL. 

Right now, I don't remember exact number, but Confluent is the largest contributor to open-source Apache Kafka. So we have engineers who work on pushing the bits and bytes to Apache Kafka. 

MARK: So this is the "Google Cloud Podcast." What's the relationship between Confluent and Google Cloud at the moment? 

VIKTOR: I would say maybe two years ago, we start getting like a lot of requests from customers saying, hey, it would be great if there would be a managed Kafka. I'm sorry. I'm starting from a little bit of history to put some of the context in place. So the customer were saying, yeah, it would be great to have managed Kafka, because we as enterprises want to focus on getting fast into cloud and getting fast into solving our business problems, rather than building infrastructure. So we start building what we call the Confluent Cloud, which is essentially, a fully managed solution for running not only Apache Kafka, but full Confluent platform. 

So one of the things that we had in mind is that we don't want people manage anything. You don't need to give us your account information if you want us to run on your hardware. So we can say, yes, we can run Kafka and the Confluent platform in any public cloud provider, so pick and choose. So we released everything in AWS. And last year, was huge success of launch, a long-awaited launch of Confluent Cloud in the Google Cloud. 

Some of the things that we initially built for this platform was architected to support running into multiple cloud environments. So essentially, we run everything in Kubernetes. 

MARK: Oh. 

VIKTOR: Kubernetes is our weapon of choice. 

MELANIE: Mark's doing a happy dance about Kubernetes. 

VIKTOR: Keep the Kubernetes thing on the back burner. We have some news around this, as well. When we move to another cloud from AWS, we actually had to re-architect all the other things because a lot of things were easy to do in AWS. Some of the things were easy to do in Google Cloud. For example, like to spin up the Kubernetes cluster, it's much easier in the Google Cloud. Or like to configure some of the things-- because simply, it was more popular. AWS has some certain API to do load balancing. 

But right now, it's a parity. So when you go to Confluent Cloud and you want to spin up your Kafka, you can say, hey, I want to run this in my Google Cloud. You can just select region. And after that, you're good to go. So you don't need to think where this will be running. You just have a connection string to Kafka and that's pretty much it. 

Another thing that I mentioned about Kubernetes is that we internally gain a lot of experience by running this at scale. And some of the customers, like more conservative customers, are saying, yeah, the cloud is cool. But how I would have these same things that cloud provides, but also internally? So we have internal tasks. For example, we're running something like open-source Kubernetes or when it will be available publicly, we can run like a GCP on-prem. How we can run a Kafka the same way as you do? 

So that's why we also invested in a product called Confluent Operator that allows you to just deal with your requirements about Kafka. You don't need to think about this. What's the stateful set? What's your service? What's the [INAUDIBLE] service? How to expose your Kafka to outside world, how to build load balancer so operator inside Kubernetes will do same thing as it does in our cloud-- but it allows the customers to run this in their data center on-prem, or in cloud. 

MARK: I literally just looked up the website. It says here available soon. Is that all you can say? 

VIKTOR: Yeah, it will be available hopefully in the beginning of the year, 2019. So right now, we onboard a few customers. We run very rigorous early access program. We're running some of the edge cases to make sure that product will meet all expectations. I already kind of like started playing with this myself. I also presented this in a few conferences. It looks pretty awesome. 

In order to provide like the best experience, we just need to have a little more testing with some of our partners, and some of the customers. 

MARK: Nice. 

VIKTOR: Personally, again, no one paid me for this. But I personally used GCP for all my tests. Because again, right now it's the best experience if you want to have Kubernetes in public cloud is GCP. 

MARK: Thank you. 

VIKTOR: So I love it, use it personally. 

MARK: Awesome. It sounds like you're building some amazing stuff. What can we sort of expect from Kafka and Confluent in the future? I mean, you mentioned the operators. But is there any other neat stuff coming in the pipeline that people might want to know about? 

VIKTOR: Oh, that's a very good question. So we still continue to pushing boundaries of what the KSQL can do, some advanced semantics supporting some advanced schema. So right now, KSQL allows you to-- without any interference, KSQL allows to deal with JSON, AVRO. And playing to some of the comma separated data, we're thinking to have more schemas coming. For example, gRPC and the Google Protocol buffers is very popular format between services. We're thinking to support this. And we have a lot of requests from the customers. 

In terms of cloud, we keep pushing some of the observability elements in the Confluent Cloud providing metrics you can see how fast this data is going through, what's all possible metrics that your application can depend on. We planning to have full managed Confluent platform. All bits and bytes of Confluent platform will be in our cloud. And most importantly, we're planning to have free tier for our Kafka as a service. 

So when you want to start learning things, you don't need to have data center to spin up this. You just go there. Run your Kafka. Grab some of the libraries. My team is responsible for helping developers to have enough examples, to have enough documentation, in order to start with Kafka. And we're actually pretty excited when we will release free version of Cloud, so we can talk more about libraries, languages. 

I'm pretty excited to talk about Go clients myself. I started Go development recently. 

MARK: Yay. 

MELANIE: That's great. If I wanted to contribute to actually building out Kafka since it's open source, how can I do that? 

VIKTOR: So if you want to contribute to Apache Kafka, it's great that the products like Kafka and Hadoop they placed in well-established software foundation that has certain rules about how you do things. And there's actually like very clear ways how you can contribute. 

You start by finding some issues in JIRA. JIRA is public. You can go-- it's got Kafka JIRA in Apache. You start looking for some issues. You can go their comment say, hey, I'm interested to fix this problem. So you start working on the thing. You either providing patch or you're creating pull request because development also happened in GitHub. So there is Apache mirror of repository. So you can also do development in GitHub. 

So you're providing your patch. You discuss through code review. You discuss with contributors. One of the contributors, or committers, if they can be your guide, so they can explain like what you're doing, if everything is OK, everyone is OK, so your pull request will be merged. So over time, you will gain more power as a [INAUDIBLE]. You can become a committer and can start sending more patches. 

And over time, you can even start your own. If you want to introduce some new feature, introduce some new piece of functionality, you can start your own [INAUDIBLE] Kafka Improvement Proposal, or KIP, where you can discuss some of the design decision or some new features. And a cool thing about-- usually people are also asking me if I want to learn some internals, if I want to learn how different functionality works, how I can learn this? And you can go and read certain KIPs. Because KIP is essentially your blueprint for certain functionality, like very cool way how you can learn from the source and the thought process. 

There's also some of the design decisions that were rejected, also mentioned. It's also pretty cool. If you want to contribute to the Confluent open-source platform or like KSQL, it's less strict. So essentially, go there, fork a KSQL, send your pull request. You will discuss with engineers and just need to sign contributed agreements. And pretty much it. 

MARK: Sweet. If people want to learn more about Kafka or Confluent, where should they go? 

VIKTOR: So I would say they need to go to confluent.io. And we're working right now. We probably should expect this in 2019 somewhere. We're working on some landing page for developers, the architects, and administrators. But right now, confluent.io is a great landing page. 

I would highly recommend to subscribe to our blog. Trying to share not only our success stories, but also some of the customers. They contribute to our blog. Some of the individual contributors, they also write for us. So our blog is considered a very good source of all sorts of information, starting from some internals about Kafka. 

So Jun Rao is one of the co-founders of Confluent and one of the core committers to Kafka. He has a very famous blog about how to choose a number of partitions. And even like Google, when you do a Google search, you will find this blog faster, that you will find actual end documentation. So it's a very popular and highly regarded blog post. 

We have interesting use cases from some customers. One popular blog posts is from "New York Times" and how they use Kafka to store all the data, or all the published materials that they have on their website, they stored inside a Kafka topic, so also pretty cool. And you look in Google some of the use cases. And most likely, you will end up on the Confluent blog. I would say it's the best place to start. 

MELANIE: Great. Viktor, thank you so much for coming on. Is there anything else that you wanted to cover before we let you go? 

VIKTOR: Oh, thank you so much for having me here. It was super excited from my side. Thanks to you. You came well-prepared with all the questions. Hopefully, I answered those. 

One of the things that I want to mention is that we do run a community Slack channel. So inside this, you can go there. You have multiple rooms in different topics. If you want to talk about Kubernetes, if you want to talk about containers, if you want to talk about stream processing, we do have dedicated rooms there, where not only our engineers can go sometimes, but also, you have a power of community. We have over a couple thousand people there, maybe not like at the same time. But at least there is a place where you can browse some history, find some answers, ask questions, and things like that. I think this is a great place. 

And specifically, if you want to have some in-person presence, we also have this chat room called Events, where we publish all meet ups that happen around Kafka, around streaming, all different events. 

MARK: Fantastic. Well, Viktor, yeah, thank you so much for joining us and talking to us about Kafka and Confluent. 

VIKTOR: Thank you very much. 

MELANIE: Thank you. 

MARK: So thank you very much to Viktor joining us today to talk to us about Kafka. 

MICHELLE: About Kafka or Kafka? 

MARK: What is the correct pronunciation? I don't-- 

MICHELLE: I always say Kafka. That's what my friend, Gwen Shapira, always tells me. 

MARK: OK. 

MICHELLE: I trust Gwen's pronunciation of her own company's product. 

SPEAKER: Pronounced Kafka, like cough drops or coffee. 

MARK: That seems pretty reasonable. This is what happens when you only see things on the internet and you don't know whether or not they're real things in real life. 

MICHELLE: You should meet Gwen if you ever have a chance. She's lovely. 

MARK: I would be delighted. Would they like to come on the podcast? 

MICHELLE: Oh, perhaps I could convince her. 

MARK: Excellent. Anyway, moving along. We talked about Kafka. And thank you so much to Viktor for joining us. 

MICHELLE: Much better. 

MARK: There we go. Well, let's get [INAUDIBLE] into our question of the week. So I do hear that Cloud Next 2019 is coming up. And I would really like to submit something so that I can present. So is there a call for papers? Can I submit? How do I do this? 

MICHELLE: There is. There's a whole website. You can find the link in the show notes. There's a ton of information on this page. So this will be my first Next CFP. And so I, just this weekend, was looking over all of the guidelines, tips, and tricks. So I will share some of the, I think, most useful advice. 

So the first thing you want to keep in mind is that it's not really about just describing some cool project that you've done. You want to focus on what people can get out of your talk. So what are the main things that they will learn after they've visited your session? This is how you draw people in. This is how you make it compelling. And you want to focus on either a beginner level, intermediate, or advanced. But be very clear about what you'll be covering and how many prerequisites are involved. 

So the word counts are actually pretty short on this, which I appreciate, especially as someone who-- 

MARK: It drives me nuts. I can't stop and write long things. 

MICHELLE: Yes, you are pretty bad about following word count limits. But this one, it's like 250 words for your abstract. 

MARK: Oh my. 

MICHELLE: It's really short. But that makes it a lot easier and harder to submit your abstract. 

MARK: I'm terrified. 

MICHELLE: So you want to be very efficient with your words, like high impact, heavy hitting. What are you going to teach? What are the big takeaways? 

MARK: When I write abstracts, I have a formula that I like to use that I think has worked reasonably well, which is what is the problem, what is the solution, and then in this talk, what are you going to show? And I find that works reasonably well. 

So like in some planets, you can't pat dogs. So today we're going to talk about how we can bring dogs to your planet. In this talk, we'll talk about bringing dogs to planets and the problems you may run into. Like, that is literally what my abstracts look like. 

MICHELLE: Nice. So you're hoping to draw on people who live on planets with no dogs. 

MARK: Exactly. 

MICHELLE: And it's there in the abstract. It's very clear. They know exactly that they belong in that session. 

MARK: And they know exactly what they're going to get out of it. I find that-- that's a formula I've used a lot over the years. 

MICHELLE: Yeah, that's a good model. And if you want to see examples of abstracts that have been accepted, there's a whole PDF with about a dozen examples for you to use as a guide. And so whatever subject area you think is most interesting-- preferably it has a Google product in it. It is a Google conference. 

MARK: Sweet. 

MICHELLE: Yes, so you have about a month to submit this. Deadline is December 7. So get your ideas together and make sure you get it in time. But again, it's only 250 words. So there's not a whole lot of effort involved in submitting. And who knows? Maybe it'll get accepted. And we'll see you there in April. 

MARK: That would be lovely. Awesome. Well, where are you going to be? What are you up to? What events are you up to, Michelle? 

MICHELLE: Let's see. This week, Friday is-- I think Wednesday, Thursday, and Friday is Scale by the Bay. On Friday, I will be at a panel, an AI and data engineering panel. So you can find me there. I'll be there with a couple of my good friends, Pete Skomoroch, and Lukas Biewald, couple of other people. 

So if you're at Scale by the Bay, come find me. I'll be talking, what else, Kubeflow. 

MARK: Excellent. And I believe you're also traveling down to Australia. 

MICHELLE: That's right. So just after Thanksgiving, I'll be leaving for Sydney. And I'll be involved in a conference called YOW! I'll be giving a talk on, what else, Kubeflow. And so I'll be in Sydney. And then a few days later, I'll be traveling to Brisbane and then Melbourne. So if you're in any of those three cities, please come find me. It would be great to say hello. 

MARK: Shout out to all my Australian friends. You should totally listen to Michelle. 

MICHELLE: Absolutely. Everyone, Kubeflow is a very interesting topic. And I make it very intriguing because I talk about how it's like a paper airplane. 

MARK: Oh, that sounds good. Now I want to hear. 

MICHELLE: You should. 

MARK: So I know you're also going to be at KubeCon with me. What are you going to be talking about? 

MICHELLE: What else? I will be giving a workshop on Kubeflow, end-to-end Kubeflow-- so pretty beginner, take you through the installation process and a basic sort of training, serving, UI, prediction, and giving you a code lab. So a full workshop, giving you environment to run it in, hands on. Our colleague Amy and I will both be doing that together at KubeCon. 

MARK: Excellent. Well, I will also be there talking about Agones and game servers and that kind of fun stuff, as well. 

MICHELLE: Nice. 

MARK: Awesome. Well, Michelle, thank you for joining me this week on today's podcast. 

MICHELLE: It was great to be here. I look forward to many more with you. 

MARK: Excellent. And thank you all for listening. And we'll see you all next week. 

[MUSIC PLAYING]