+++
audioDuration = "00:45:04"
audioFile = "Google.Cloud.Platform.Podcast.Episode.130.mp3"
audioSize = 65268152
categories = ["Data Platform", "Data Science", "Machine Learning", "Kubeflow", "Data Engineering"]
date = "2018-06-06"
description = "This week we dive into data science methodology, applications, platforms and all the things with Juliet Hougland from Stitch Fix and Michelle Casbon from Google Cloud."
draft = false
episodeNumber = 130
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Data Science with Juliet Hougland and Michelle Casbon"
linked = true
googlePlusLink = "https://plus.google.com/u/0/b/117267610519909886476/+Gcppodcast/posts/cAW1HcMB6Xn"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/8p36u6/data_science_with_juliet_hougland_and_michelle/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Juliet Hougland](https://twitter.com/j_houg) and [Michelle Casbon](https://twitter.com/texasmichelle) are on the podcast this week to talk about data science with [Melanie](https://twitter.com/nyghtowl) and [Mark](https://twitter.com/Neurotic). We had a great discussion about methodology, applications, tools, pipelines, challenges and resources. Juliet shared insights into the unique data science ownership workflow from idea to deployment at Stitch Fix, and Michelle dove into how Kubeflow is playing a role to help drive reliability in model development and deployment. 

<!--more-->

##### Juliet Hougland

[Juliet Hougland](https://twitter.com/j_houg)  leads the Workflow, Environment, and Execution team at [Stichfix](https://www.stitchfix.com/). She is a data scientist and engineer with expertise in computational mathematics and years of hands-on machine learning and big data experience. She has built and deployed production ML models, advised Fortune 500 companies on infrastructure and worked on a variety of open source projects (Apache Spark, Scalding, and Kiji) at the intersection of big data and machine learning.

##### Michelle Casbon

[Michelle Casbon](https://twitter.com/texasmichelle) is a Senior Engineer on the Google Cloud Platform Developer Relations team, where she focuses on open source contributions and community engagement for machine learning and big data tools. Prior to joining Google, she was at several San Francisco-based startups as a Senior Engineer and Director of Data Science. Within these roles, she built and shipped machine learning products on distributed platforms using both AWS and GCP. Michelle’s development experience spans more than a decade and has primarily focused on multilingual natural language processing, system architecture and integration, and continuous delivery pipelines for machine learning applications. She especially loves working with open source projects and is an active contributor to Kubeflow. Michelle holds a masters degree from the University of Cambridge.

##### Cool things of the week

- Sandeep Dinesh: Kubernetes Best Practices [YouTube](https://www.youtube.com/watch?v=ajbC1yTW2x)
- CNCF TOC voted to accept Helm as an incubation-level hosted project to CNCF [site](https://www.cncf.io/blog/2018/06/01/cncf-to-host-helm/)
- Andriod P in Beta [blog](https://blog.google/products/android/android-p/) 
- Agones 0.2.0 [site](https://agones.dev)
- Securing cloud-connected devices with Cloud IoT and Microchip [blog](https://cloud.google.com/blog/big-data/2018/05/securing-cloud-connected-devices-with-cloud-iot-and-microchip)

##### Interview

- flotilla-os [repo](https://github.com/stitchfix/flotilla-os)
- Kubeflow [repo](https://github.com/kubeflow/kubeflow)
- Cloud Dataproc [site](https://cloud.google.com/dataproc/) & [docs](https://cloud.google.com/dataproc/docs/)
- Spark [site](http://spark.apache.org/) & [community site](https://spark.apache.org/community.html)
- scikit-learn [site](http://scikit-learn.org/stable/index.html)
- xgboost [repo](https://github.com/dmlc/xgboost)
- PyTorch [site](https://pytorch.org/)
- TensorFlow [site](https://www.tensorflow.org/) and [github](https://github.com/tensorflow)
- Kubernetes [site](https://kubernetes.io) [github](https://github.com/kubernetes/kubernetes)
- Introducing ultramem Google Compute Engine machine types [blog](https://cloudplatform.googleblog.com/2018/05/Introducing-ultramem-Google-Compute-Engine-machine-types.html)
- #114 Machine Learning Bias and Fairness with Timnit Gebru and Margaret Mitchell [podcast](https://www.gcppodcast.com/post/episode-114-machine-learning-bias-and-fairness-with-timnit-gebru-and-margaret-mitchell/)
- Machine Learning Flash Clards [site](https://machinelearningflashcards.com/)
- Open Source Data Science Masters [site](http://datasciencemasters.org/) 
- DockerCon SF [site](https://2018.dockercon.com/) 

##### Question of the week

If I have written a gRPC Service, but I’m using a language/platform that isn’t supported - is there any way I can access it as REST?

- [grpc-gateway](https://github.com/grpc-ecosystem/grpc-gateway)
- [Envoy proxy](https://www.envoyproxy.io/)
- [Transcoding](https://cloud.google.com/endpoints/docs/grpc/transcoding)

##### Where can you find us next?

Mark is speaking at the [San Francisco Kubernetes Meetup: Scaling Game Servers and the Conduit Service Mesh](https://www.meetup.com/San-Francisco-Kubernetes-Meetup/events/251242006) on June 14th.

Melanie is speaking at a joint [WiMLDS](http://wimlds.org) and [PyLadies](http://www.pyladies.com) event "Paths to Data Science" on June 26th and Stanford AI4ALL on June 28th.

{{< transcript "MARK: Hi. And welcome to episode number 130 of the weekly Google Cloud Platform Podcast. I'm Mark Mandel. And I'm here with my colleague, as always, Melanie Warrick. Melanie, how are you doing today?" >}}

MELANIE: Doing good, Mark. How are you? 

MARK: I'm very, very well. Yet another week, yet another podcast. 

MELANIE: Another podcast. 130. 

MARK: 130. That's a good, round number. 

MELANIE: Another 20 and we'll be at 150. 

MARK: Yes. Math is good. 

MELANIE: Math is good. I can do math. 

MARK: You can do math. 

MELANIE: All right, Mark. So this week we have two wonderful women who have joined us to talk about data science pipelines and tools. So Juliet and Michelle are both with us. And Juliet is actually the data platform lead over at Stitch Fix. And Michelle is one of our colleagues who works with us here at Google and does a lot of great things around machine learning and Google Cloud Platform. 

So before we get into that, as always, we are going to talk about cool things of the week. And our question of the week is that if I have written a gRPC service but I'm using a language platform that isn't supported, is there any way I can access it as rest? I wonder where this question came from. 

MARK: I don't know. Maybe me. 

MELANIE: Maybe someone who was heckling on it this weekend. Anyway, we'll get to that question in a minute. But before that, some of the cool things of the week. I'm going to start with the fact that Sandeep Dinesh, who is one of our colleagues on the team, he's been doing this great video series, I guess video logs, video blogs, video something. 

MARK: Sure. 

MELANIE: Sure. So he's been doing this series under the name of Kubernetes best practices. And he recently published the last episode in his seven part series. And so we will include that in the show notes. And the last episode is upgrading your cluster with zero downtime. So if you've got a cluster, how do you get that updated? And you don't have to really spend any effort. 

MARK: And there's a great photo of him in the video pointing at the camera. 

MELANIE: That's right. 

MARK: It's just a great photo. 

MELANIE: It's a good job. And all of the videos that he's done on the subject are really wonderful. So if you haven't seen it and you have questions about Kubernetes and work with containers, you should watch them. 

MARK: Yes. They're really good. I want to send a shout out and congratulations to the Helm Project. Helm is a package manager solution for Kubernetes. They recently have been voted to be accepted into the Cloud Native Compute Foundation as an incubation level hosted project. So congratulations CNCF. [PARTY HORN] 

MELANIE: Yay. 

MARK: Or congratulations to Helm, I should say. 

MELANIE: Golf clap. 

MARK: Helm and CNCF. Both of them. 

MELANIE: So the other thing we were going to mention for this week is that Android P is in beta. This is the next release of Android. And they've got some great new features that are going on that have to do with adaptive efficiencies within the Android operating system in general, like prioritizing battery power for the apps that you're using the most or in terms of the brightness and trying to adapt the brightness of your device so it's more efficient and works longer, works better. 

Some of the cool things that they mention are things like app actions, trying to determine what actual actions you're taking with the app and bringing up adaptively what you might want based on your previous, I don't know, whatever you just opened or whatever you just were looking at. 

MARK: Before I go to bed, for example, I set my alarm. So I'm guessing it's going to show me my alarm first thing. 

MELANIE: So it'll bring up your alarm quickly. Something they said was if you connect your headphones to the device and you typically bring up Spotify that it will more quickly identify your Spotify playlist for you, stuff like that. Which I think is great. Anything that makes it go faster and easier. Anyway, so that's available in beta. 

MARK: And somewhat self-serving, the Agones project that I work on is going to have a 0.2 release. It should be out today. The release candidate's out already. But literally I think as this thing gets released, either very shortly after or very quickly before one or the other, 0.2 should be out. So that will have, speaking of Helm, actually Helm packaging, which is lovely-- 

MELANIE: That's great. 

MARK: --and fleet management. And we're also moving to a six week release cycle as well. 

MELANIE: And one day we will do a podcast about Agones. 

MARK: I know. You've been bugging me about it. We have some plans. We're going to do it. 

MELANIE: We've got some plans. 

MARK: We have some plans. 

MELANIE: One day. One day. Last thing we're going to mention, and we'll include the show notes, is there is a nice blog post out about securing cloud connected devices with Cloud IoT and Microchip. And this goes a little bit to this idea of the UB keys. But it's a microchip that you can use in helping you to, in essence, secure the devices without taking up too much memory, without having to do any remote uploads or downloads. It's a better way to secure your IoTs from the various hacking that can happen. 

MARK: Fancy. 

MELANIE: Yeah. Great details in the article will include it. And you can check it out. Mark. 

MARK: Shall we go talk to Juliet and Michelle? 

MELANIE: I think we should. 

MARK: Let's do it. 

MELANIE: This week's podcast we are excited to have with us two wonderful data science experts. We have Michelle Casbon, who's one of our colleagues. And we have Juliette Hougland, who is from Stitch Fix. And thank you both for coming on the podcast. 

MICHELLE: It's great to be here. Thanks for having us. 

JULIET: Yeah. Thanks for having us. 

MELANIE: So, Michelle, can you start off by telling us a little about yourself and what you do at Google? 

MICHELLE: Sure. I'm fairly new to the team. I joined the GCP DevRel team as an engineer. And I split my time between advocating for the open source community of Kubeflow, that's machine learning on Kubernetes, as well as Dataproc, which is our managed YARN service. Manage Spark on YARN here. So my role is really to operate in the space between internal developers and external developers and try to make the experience better for people using our tools externally and also bringing that feedback into our internal product teams and making those better. 

MELANIE: Great. And Juliet, I know you're the data platform engineering manager over at Stitch Fix. Can you tell us a little bit about what you're doing and your background? 

JULIET: Sure. So I'm a data platform engineering manager at Stitch Fix. 

MELANIE: Ah, you're one of. 

JULIET: Yes. The team that I manage does workflow environment and execution. So what does it mean to run a job on our infrastructure? What does it mean to schedule it, run it reliably, build images that you're going to be running these things in? A lot of this infrastructure exists. But we're working towards now is having a more unified, easy to use interface for it and having it hang together. 

And so my background is a mixture of data science and engineering. Since grad school, I've switched between heavy engineering and heavy data science jobs. And I like being somewhere in that interface and building good tools for data scientists. So I'm pretty excited to be working Stitch Fix, building good tools for a data scientist. 

MELANIE: Great. And I know today we wanted to get into data science, what it is, what it means, as well as talk about some of the tooling around what you're using. So to kick us off, how do you define data science? 

JULIET: Sure. So Stitch Fix has a department called algorithms and analytics. And the algorithms and analytics department is vertically oriented, meaning we work with styling, we work with clients, we work with merchandising and operations, like our warehouse operations. And the data scientists on our team do a variety of things but try to enable and optimize the business through using data well. And we err on the side of trying to do that programmatically and automatically as opposed to having one of our business partners come to a data scientist and say, hey, I have this question. Build me a report. 

So a lot of what our data scientists do is try to build systems and levers into the business that help the business run more efficiently and optimize it. So a great example is warehouse routing optimization of how do people that are picking items, meaning clothing and off of racks, walk through the warehouse to minimize the distance. So it's not a definition. But that's how we practice it. 

MELANIE: Right. And I've seen different companies have different definitions for what that means for them. So, Michelle, how do you define data science? 

MICHELLE: I actually think this is one of the most loaded questions that I ever get. 

MARK: Good. 

MICHELLE: Like Juliet, my background has also been heavy engineering. I started out with computer science degrees and gone back and forth between official data science roles and official engineering roles. And there's been a lot of variability in those roles, but the same person and mostly the same skill for all the different titles and all the different responsibilities. 

So I feel like, exactly as you said, every company has their own definition of it. And it's kind of grown organically. It's still a fairly young field. And going through especially data science interviews are one of the most confusing things to prepare for because of those differing definitions and the different expectations. I feel like it's definitely blending more into there's less of a differentiation between engineering and data science. 

Mostly, I feel like it's just an umbrella term. And it's a way for people to describe, hey, there's this magical thing that I want to happen. And I need people with math skills, with engineering skills, people who can actually build something to solve a particular problem. But there are a lot of contenders in this area. And specifically I feel like it fuels the fire of data science versus engineering, which I think is counterproductive. So I'm going to decline from giving a specific definition. 

JULIET: And I think even within what you're describing, I've heard data science decomposed into three areas of data science, where you have inference and A/B testing. You have decision science, so how do you come to some business conclusion or decide what a business should do. And then you also have this machine learning engineering building automatic systems type of data science. 

And so I think those are three categories of what data scientists do that require different skill sets and experience. And you can get deep in any of them. And what you're describing with engineering, I think all of them benefit from engineering, but some have better tooling already and some don't. Decision science and inference I think have relatively good tooling in existence. Whereas the machine learning engineering, the tooling is kind of lacking and new. 

MICHELLE: Yeah, that's true. And it requires a lot more engineering in order to enable that area. 

JULIET: Yeah, definitely. 

MARK: You mentioned there's tooling. What sort of tooling does exist for those areas that you're particularly fond of? 

MICHELLE: I mean, it's getting better over the years, but it's been pretty lacking. I guess traditionally the decision science tools, things like Sas, MATLAB, things that are more heavy on the math side. But actually putting those into production systems, we've kind of seen a shift from traditional software engineering tools that have been adapted over the years to things that are more specific to data science. 

I guess in the past I've seen things like Informatica, just data fork lifting tools, back end systems like Teradata that try and solve the distributed compute problem. Up to today, the biggest shift I have seen in the space is with Kubernetes and being able to take a lot of those very specific problems and run them in a single environment. 

That's where I've seen a big shift from these very specific science tools solving one specific problem into a more general purpose, fitting more into that traditional software development role where you have all these pieces that can interact together in a repeatable way. And you can deploy it, and you can be confident that that code hasn't changed and that things haven't changed in between. And you can be a lot more robust and adopt those traditional software development practices into more of the data science machine learning space. 

JULIET: I think there's a ton of different tools out there at different levels of the data stack. There's a ton of new data processing libraries that run on people's machines. So scikit-learn has been around for a while. But a ton-- xgboost is getting huge amount of traction, things like PyTorch and TensorFlow, huge amount of traction. Those are booming. And they often require specialized hardware. 

But that brings up the question of once you have these programs running and a data scientist has built some sort of model that works on their laptop, that's not production. They need to be able to actually use the infrastructure that we have and put these things on some sort of schedule and know where these are going to get executed and in what environment. And so there's a huge amount of tooling around how do you take something that works on someone's laptop and make it robust, reliable, scheduled. 

And I think things like Kubernetes-- or at Stitch Fix, we have a system called Flotilla, which is used for defining a job and what that job might look like. And so a job has a Docker image, it has a run command, it has environment variables, things like that. And beyond this job definition, you also want scheduling. 

And once you have scheduling, you have to begin to think about, well, this is not one person scheduling something. This is actually a variety of teams that have a variety of needs. And they're all sharing a resource. And you begin to pretty quickly get into queues and scheduling and what it means for having some sort of fair share between different teams on cluster resources that we have. And so things that have been solved on supercomputers and solved in from resource managers, you end up beginning to think about your own systems. 

So I think there's lots of different places in the stack where new tools exist. Some of these can be data access, data processing tools. SQL has been around forever, at least in computer years. And beyond that, there's tons of larger scale data processing tools. At Stitch Fix, we don't frequently have to use them. We do have a Spark cluster. And we use it for a variety of things. But it's pretty rare for our data scientists to build models that are distributed. 

But we do have, if you count all of our data together, a large amount of data that people are moving all over the place. There's a lot of different tools that interlock. But I would say there's data access, client libraries, and then cluster resource scheduling tools so that people can actually use it in our cloud infrastructure. 

MELANIE: I know, Juliet, you were talking about how data science is seen at Stitch Fix. Would you also say that your data platform engineering, is that seen as more data engineering? Is that also classified under the data science umbrella? How do you guys partner? 

JULIET: The way that data science and data platform interact at Stitch Fix is that we expect data scientists to own their workflows end to end. And this is pretty unique. Because a lot of companies have data engineers that hook up the pipes and make sure the data is getting to the right place in the right format so data scientists can do their modeling. And we think that there's something that you trade in a system like that. 

What you're trading is the data will get there reliably in whatever format it gets there, but then there's this interaction and handoff where a data scientist will model something and they realize that the pipeline needs to be changed. And so they go back to the data engineer and say, hey, you need to go fix this thing. You need to change the format. And we don't want handoff like that. 

A lot of Stitch Fix data science is-- Stitch Fix algorithms in general is really focused on autonomy and ownership. And we design the organization for quick iteration on models. And that means not having handoff between data platform and data science. 

And so the reason that we're on the data platform and are not data engineers is that we build tools to allow data scientists to be self-service and independent in owning their workflows. And so its pretty different model than a lot of companies. And it's one of the reasons I think its pretty interesting to work there building tools. 

MICHELLE: I feel like that approach is really pioneering. I didn't really know a whole lot about that but independently arrived at something very similar at the previous company that I worked for. That enablement and empowering of all of your engineers and data scientists, to be able to deploy their own stuff from conception from the very beginning all the way through to production and then to iterate on that, that saves so much time. 

And not having that handoff, not having that human interaction, and having to ask for permission and being added to a pipeline or a queue managing that human resources side of things, I felt like that was very transformative in just being able to iterate on models so much more quickly and not having them get stale, not having them be out of date already by the time they make it production. That ownership and that empowerment is really critical. 

I feel like you guys have such a huge, custom, hand built architecture. You have your own system that manages all that, that supports that. But I also think that it's something-- for me, Kubernetes really enabled that. And it's also something that you don't need an entire team to do for you. I feel like the tools are there in order to enable that process. And you don't have to be a sophisticated data science institution in order to do that. 

MELANIE: What do you think are some of the bigger challenges in the space? 

JULIET: I think in our particular situation, the self-service model is good in a variety of ways. But there are obvious drawbacks and trade-offs. When experienced data engineers are the ones building the pipelines, then you're going to have more robust pipelines. And so trying to figure out systems and tooling to make it easier to build robust pipelines, in our case, is definitely a big challenge. 

How do we allow data scientists to be self-service and still push them in the direction of highest quality possible and highest reliability possible? And that's a problem that's specific to us. But when I think about problems in general that a lot of people are facing and thinking about, scheduling, complex workflows, and versioning complex workflows. I think having reproducibility of models is very related to being able to understand where data came from and where model artifacts or dashboards came from and what definitions are being used. 

And this is a pretty common problem that ends up being talked about in the hallway track of conferences. People at data engineering conferences will begin to discuss issues that they have. And often they'll be, oh, this open source project is always falling over. Or what is this data and where did it come from? And how do you go about providing that visibility to users? 

MICHELLE: I feel like the larger story is the sort of dirty secret of data science. Just because people really want to talk about the algorithms themselves and what cool techniques they're using. But I feel like the bigger problem and the place where people spend more time is just on the system as a whole and not that one machine learning component. 

I feel like that's a much smaller piece. And stitching all those pieces together is a non-trivial problem for reproducibility's sake, for interpretability's sake, for being able to actually trace back, here's a result that we got, but where did it come from and how did we arrive on that? There are a lot of reasons why you might want to know that. 

The other challenge I see is just getting things from that experimental phase into production without having a whole lot of things change in between. So being able to like work locally and then transform that into something running on a dump cluster and then into production and being able to make sure that it's the same model that was intended by the first person who first built it. And that whole empowerment and being able to deploy your own models I feel really helps to solve that. 

MELANIE: And is that where tools like using something like Kubernetes, Kubeflow, to be able to help with reproducibility as well as moving it from local to global would potentially come in? 

MICHELLE: Exactly. Yeah. That's a big idea behind Kubeflow. It supports the whole machine learning application. So as a single unit, instead of trying to deploy lots of different pieces in lots of different places, the idea behind it is essentially to take that entire application. 

So not just the ML but the logging, the monitoring, the front end, all of the auditing, all of the versioning, everything packaging up into one place and being able to run that locally for yourself, being able to access that through a JupyterHub. So having other people access it in a single Kubernetes' cluster, but then being able to take that exact same code, change a couple environment commands, and run it in the Cloud, in a different Cloud, on a completely different set of physical hardware or on-prem or any combination of that. It's meant to solve that problem. 

JULIET: So I think that gets at a large part of the reproducibility problem of the environment and the code that you're running. But one of the biggest challenges that I've seen in any type of statistical learned model is the data part. The thing that makes these systems challenging for reproducibility is the tight coupling between the data that you're using. 

What data did you use to build this model? Or what data is it expecting in? And what kind of statistical distribution is it good at producing predictions? There's a tight coupling there. And I think that systems that help with the environment and help with the software are a piece of it. 

But trying to understand the connection to the data that this is actually being used is a big, big challenge. And it's not something that is solved in a way that the industry in general can point to and be like, ah, yes, this is the industry best practice. This is something that everyone talks about and doesn't have a good solution to, as far as I've heard. 

MICHELLE: So I've seen a couple of tools come up pretty recently that I haven't tried out. Kubeflow supports one of them. One, I think, is Pachyderm. And then another is Quilt Data. And both of them, I've looked into them, but just haven't used them in a production capacity. And they're trying to solve that exact problem. 

JULIET: I've only looked at Pachyderm. And I really like the idea behind it. But it's version of data versioning is very heavyweight. From what I saw, what you do is you bring your data into a container and then you version it there. And so basically, Pachyderm works, but only if everything is inside this universe of Packyderm. 

MICHELLE: I see. 

JULIET: And I see that as very heavyweight and not something that people can easily adopt in systems that exist already. 

MICHELLE: Interesting. 

JULIET: And perhaps if you're building something brand new or you're willing to make that sacrifice and move entirely into that type of system. I see it as heavyweight. But I haven't dug deeper into actually using it. 

MICHELLE: I'd be interested to hear how Stitch Fix solves that problem in the future. 

MELANIE: Well, and I actually was going to ask that. I know you don't know exactly what the best practices are. This is something people are trying to go after. What are some best practices or ways that you guys are trying to approach these types of problems for reproducibility that you think would be good to see others attempt, or at least is useful for your group? 

JULIET: So we're thinking about it in terms of decomposing the problem first into data versioning and then artifact versioning. So what is this data? And how did it get here? What is this process it generated? And this ends up being very deeply linked to data lineage. 

And so data lineage I think of as this table and this partition was the input. Here is a process or a job that is the thing that used that input. And you maybe have a collection of inputs. And then the output is a table, columns, partitions that this thing gets written into. And so you need some sort of meta information that says this is the link between these tables and this is the version of the job that ran. 

So you version the job and you version the data. And so that's one way that we're beginning to look at this. That was actually a project I was working on before I started managing this team. And I decided to put it on the back burner until I feel more comfortable in my role, basically. 

MELANIE: Understandable. 

JULIET: But once that is in place, I think you need good data versioning before you get model versioning. And model versioning I think is a holy grail that many companies would like to have. You would think many companies could say that, oh, yes, I know what this model is and I know what went into it. And I think you would be wrong in almost all of them. 

I've definitely heard rumors of certain types of models that you would think would be very resilient and robust, not being reproducible and having no way of recreating them if a disk drive were to fail, for example. I'm sure they're replicating them. 

MELANIE: We actually had the folks who are working at Project Jupyter here a few weeks back. And we talked about reproducibility is one of the goals for some of the things that they're building out as well, that they know that that's a clear problem that's going on in general, but the effort to try to solve for that. 

JULIET: Well, I think this ends up being really related to why do people do data science? I'd say some people do data science to say that they are. There are some companies that are like, ooh, yeah. This is our AI strategy. And some people do data science because they want to deliver value to a business. 

And if what you're trying to do is deliver value to a business, you need to have credibility. You need to be able to clearly explain yourself to business partners and have them believe that what you've made is useful. And for that, you might not need the holy grail version of model visibility and versioning and reproducibility. But you need some level of reliability and clarity about what you've made. And I think it's very easy in data systems to end up with a mess that is unexplainable. 

MARK: Just so people who aren't as familiar with data science get an understanding, what do you mean by model versioning? What does that mean? 

JULIET: Let's say you have a linear regression model. You can build it once. You have some data, you fit it, and it knows how to predict things. And you're like great. I have my model. In a real production system, you have this code that generates the model. And you have the data that went into it. And what you need to do is apply that code that knows how to train a model and get the parameters to new data. 

And so there's maybe two types of versioning here. There's a model that gets trained again and you get a new collection of fit parameters. But the way that you've trained it hasn't changed. And so you probably want to version that and understand what data went in to create these parameters. 

And then let's say you want to add another feature. This is now different code and a different structure of a model and a different way you've done training. And even if you applied it to the same data, it's a different model. And so there's two types of versioning there. 

One is that the way you're producing the model and the structure of the model has stayed the same but the data is new. And the other is the structure of the model has changed, perhaps also the data. And those are two types of versioning that you probably want to track. 

And often, there are easy ways to not do model versioning and to not keep track of that, which will bite you later, especially when you end up trying to get into-- you make a model. Is it any better? You need to do A/B testing. How do you set up a system that can do A/B testing? How do you know what went into the two models that you're comparing, what the difference is? 

MELANIE: We were chatting offline a little bit about the tooling, Juliet, that I know your group is using. Can you explain a little bit about the type of set up, especially, for the data scientist types of tools that you're setting up for them to be able to do the work that they're doing? 

JULIET: So we have cloud infrastructure. And we allow data scientists to specify jobs. Jobs are defined as Docker containers running on a cluster. So this job will be submitted on a particular cluster. And these jobs are specified through an open source tool we have called Flotilla. 

MELANIE: Right. 

JULIET: So Flotilla is fantastic. It's super self-service. Our data scientists all really like it. And we actually just did a survey of the data platform tools and got information from the data scientists. And we asked what tool would you miss the most? 40% said Flotilla, which is great. 

And so Flotilla allows data scientists to use a UI to say I want to use this Docker image. This is the command I want to run. Here's some environment variables that often people will use to define a git-repo that they want to pull from and a branch they want to use. And then we have a scheduling system that integrates with that. 

And that scheduling system says make this DAG of jobs and run it every day at midnight. Or the first step of this DAG is wait for data to appear. And once this data appears, then run the rest of this workflow. And so that ends up being what our self-service ETL definition and scheduling system looks like. And data scientists are pretty happy with that workflow. 

We have tools that are somewhat custom for building Docker images. Because it came from a world where we needed to build RPMs, machine images, and Docker images. That is a little harder to use for our data scientists. So we're thinking of ways that we can make that simpler, use more open source tools, hopefully just give them Docker files to define. 

MELANIE: I like it. Michelle, from your work in the past, what have been some of the pipelines that you've seen or what are some ones that are successful from your perspective? 

MICHELLE: So I was working for a company called Cordoba previously. It's a startup based here in San Francisco. And it's essentially a B2B Sas platform with machine learning components. And so there was the normal back end web component of what you would normally consider typical microservices architecture. 

And then when we added the machine learning components to that, they looked very different. They didn't have that standard thousands of companies have already built an architecture that looks just like this. There are these weird machine learning components that we're trying to tack on to that. 

And the way we solve that problem is to take things from this very homogeneous platform and put it all into a managed Kubernetes environment where we can run everything together. Because it's essentially one application. It's one cohesive platform for users. And by putting that all in the same place, we were able to utilize these very different resource requirements but have everything in a self-contained, single, manageable space that you could wrap your head around. 

And then also enable the person writing the machine learning code to also deploy all the way through to production and iterate very easily. But even that still required specific Docker containers for each one of those components, for the ingress, for back end, for search, for the futurization components, for data, for all of that. And that took a while to build out. And it ran very smoothly once it was in place. 

But I took a lot of what I learned from that experience. And I don't want to underscore the fact that it just really transformed the DevOps experience at that company. It took what was a very onerous, just scattered thing-- things were in lots of different places-- and it just put it into this one, little neatly packaged collection, a place you could really operate on much more easily and standardize across all of the different pieces. 

But I took a lot of what I learned there. And I'm applying that now to building this Kubeflow project. And the idea is the same, where you have all of these different pieces of a machine learning application and you want them all in one place. Because you want to be able to version them. 

You want to be able to move them from one environment to the other and iterate through during the development process and do that in a way that scales-- and as new hardware comes out, I think you guys talked recently about new VMs that came out with just ridiculous amounts of RAM and CPU-- and being able to not have to change your code, but still be able to utilize those and basically just deploy it to a new cluster. 

A big piece of that was just using managed services instead of doing everything from scratch. Originally, I believe Cordoba was rolling their own open source frameworks on VMs and managing that independently. And that took a lot of people hours. It took a lot of babysitting. And by switching to managed Kubernetes, a lot of that went away. A lot of the network headaches, the hardcoded IP addresses, a lot of that just dissolved into some of the features that you get from a managed Kubernetes environment. 

So the aim of Kubeflow is to really take all of the benefits, everything that Kubernetes does really well, and apply that to a machine learning application. So that's where I see the future of machine learning heading, is into this declarative way of defining your application. And you just define the resources that you need for each piece. 

And then you're less tied to the physical hardware that it's running on. You can just say, hey, I want GPUs for this piece. You have all the different types of hardware all in the same cluster. And you don't really have to think about it. And Kubernetes and Kubeflow manages that for you. 

MELANIE: Nice. Coming back a little bit to when we were talking about the challenge of reproducibility. Do you have any perspective on what can make people feel confident in what is being used now for models? If it's hard to reproduce, is it just, well, we just have to believe that it's fine and move forward? 

MICHELLE: I find that most people just don't question it. There's this blind faith of, oh, this is mathematical. This is analytical. It must be correct. It must be true. And I-- 

MELANIE: You think they should question more. 

MICHELLE: Well-- 

MELANIE: They should consider questioning more. 

MICHELLE: I think that business partners that are coming from less of an analytical data science background have their own questions and are often too easily convinced by this is analytical, this is mathematical, it must be true. I similarly think the data science practitioners also get caught up in that mode of thinking, that this is analytical, this is mathematical, it must be true. 

And really effective data scientists that I have seen tend to question more and tend to work in a simpler mode so that they can circle back on that question of, am I building something valuable? Am I making something correct? Is this something believable? Because once you get into the technical nitty gritty and build a complex model, it's easy to convince yourself that, oh, the ROC is good and so I'm not going to worry about it. 

MELANIE: We did a podcast on machine learning bias unfairness awhile back, too. I think that definitely plays a role here, too. You don't want to just blindly follow that this model's fine. 

MICHELLE: There's not great automated tools for it. This is why data science practitioners with a lot of experience that are thoughtful about what they're building are really valuable. They'll take a step back and they'll think about have I made something good? Have I made something that this business will find viable for a long time, meaning is reproducible, is explainable? 

MARK: So to that point, if either you had a magic wand where you're like this is the tool that I would love to have right now and I could just make it with this magic wand, what would you make? 

JULIET: I mean, I would love something that just spits out the right model every time-- [LAUGHTER] --that does all of the developmental work for me. This is what your futurization pipeline should look like. These are all the hyperparameters you should have. That would be amazing. I mean, I think we're trying to provide that. A lot of the managed services, the point is give us your data and we'll try and fit the best model for you. I mean, that seems pretty magical. And that is not quite here yet. But I feel like we're making steps towards that. 

MICHELLE: I would say a listener in a data science environment that watches what steps a data scientist takes and automatically makes a lab notebook. Every good scientist has a lab notebook where they're making notes about the environment they're in, their experiments are set up, what happened that day. I think something that is automated that watches and generates a lab notebook for data scientists would be my dream. 

MELANIE: I actually was at a conference last week on disaster risk recovery. And I noticed one of the key things that was really a challenge for these organizations that are trying to understand and anticipate and plan and analyze for potential natural disasters is just asking the right question. What is the real problem you can try to solve with technology to be able to apply it? It would be great if you just had something that could spit out the model. What is the real question? And then what is the tech and the model that I should be using for that question? 

MICHELLE: So previously I had worked at Cloudera. And I did data science there. And I would occasionally go out to big customers and to talk with them about their data science problems. So once, I went out to a large customer. And they have call centers. And so what they had done was they had transcribed calls to their call centers. And so they now had text instead of voice. 

And so they brought me in and said, well, we have this small, five person analytics team. And we would like for them to build an NLP model, which will do entity identification, entity resolution, and from these call logs, pick out pieces of information that are valuable to us. Because they had resources. And customers were calling for these resources. And they were only tracking it if they had the resources they could give them. But they wanted to understand what the demand was that they're missing. 

And so I talk with them for a bit, and I realize that their team does not have the skills to build an NLP model like that, nor is usually building a model of that complex really the answer. And so I talked to them for a while, and I realized that what they wanted was to get the structured information that the call center representatives were already listening to and putting it into a form that was getting turned into a single query that hit their databases. 

And so hearing that, I suggested that instead of transcribing their voice to text and then building a very complex set of stacked NLP models, that perhaps what they could do is instead keep the database queries. And they had spent already a lot of money and many months on this project. And they were a little taken aback but also pretty excited that they weren't about to waste a ton more. 

[LAUGHTER] 

MELANIE: That's the key part. 

JULIET: I feel like at the beginning of every project, that is the number one most crucial thing you can do, is make sure that you're asking the right question. And then if you have the right question in mind, can you arrive at the answer with something that's very simple and mathematically straightforward? 

If the answer to that is no, then try machine learning. But if the answer is not machine learning, you certainly shouldn't start a company based on I'm going to do these stacked NLP models or start a project with that as the goal. You really don't want to let technology or techniques drive finding answers. 

MELANIE: One question I want to ask both of you, what do you enjoy most about data science and data in general, working with data? 

MICHELLE: I like that it's always a challenge. There's so much to learn. Using data effectively is a mixture of understanding the technology available to work with data, understanding the mathematical techniques available, and being able to communicate with people and understand what the problem is in general. And I think that third one is the most important step. Because if you just do the first two, you end up with things like transcribing voice into text and building unstacked NLP models. 

But knowing a little bit about web applications and databases and then understanding the problem is this person is transcribing it, that gives you a good cut off and short cut. And so I would say that the part that I like best about working with data is needing to constantly be improving your skills on all three fronts. And maybe that's a bad way to phrase it. 

I tend to focus on improving my skills on one of those fronts and then switching between them over longer periods of time. I'm not constantly trying to push myself in every direction. But always having ways to expand your skill, technologically and mathematically in terms of humans, I really enjoy that. And the people are great, mostly. 

MELANIE: Mostly. Got it. 

JULIET: I feel like one of my favorite things is just that there is an infinite number of directions to go in. I feel like data is something that seems so straightforward. It's pretty tangible. It's a thing that should be well understood. Because we've been working with it for decades. 

But every time I go to solve what seems like a straightforward problem, you just have so many avenues to go down. You can go down so many different rabbit holes and solve the problem in so many different ways that it is very challenging. And there's never a shortage of new things to learn, of new ways to tackle a problem. 

And that's also from a theoretical perspective, from a practical perspective. I never feel like there's a lack of things to learn and ways to be challenged. And the impact that you can have with that, going in any different direction just feels like you can change the world in so many different ways, big or small. That's most exciting to me. 

MELANIE: So any resources that you'd recommend for those out there interested in data science, data engineering, machine learning? 

MICHELLE: I really love the machine learning flashcards that Chris Albon puts out. Those are my favorite. They're just these little hand-drawn-- he'll have a formula that he'll just draw out literally like you would do in college. And I think he started out just making them for himself. But there are like 300 now. And he publishes them. You can purchase them for $10, $15. But they're really, really good. And just going through a few of those a day just refreshes, keeps the neurons firing. I really like those. It's not a place to start, but it is a good way to-- 

MELANIE: It's a good resource. 

JULIET: There's a lot of different things that you can develop and you can learn. And so one of the best resources I've seen that has a hierarchy and structure of the different types of things you could be developing and learning is a website called Open Source Data Science Masters. 

MICHELLE: Oh, is that Clare's website? 

JULIET: Mm-hmm. 

MICHELLE: That is a really good resource. 

JULIET: Yeah. And so there is a bunch of different topics in there. And I would say one of the most overlooked skills for people coming from a software background to data science is linear algebra. And so linear algebra is the best. [LAUGHTER] Start there. It will help you so much. 

MICHELLE: It's a really good foundational-- the stronger your linear algebra foundations are, the easier machine learning is. 

JULIET: Yeah. 

MELANIE: This has been great. I know we're pretty much out of time at this point, but was there anything else that you wanted to mention before we wrap up? Any places that you'll be speaking? 

JULIET: Stitch Fix is always hiring. Come work with us. 

MARK: Nice. 

MICHELLE: I hear it's a great place to work-- 

MELANIE: So do I. 

MICHELLE: --from many other people, not just Juliet. But it is one of the places that has been, really from the beginning, a data science driven organization. And it's one of the most respected places to work as a data scientist. And I hear it's awesome to work for so many wonderful women, just like Juliet. 

MELANIE: Yes, definitely. 

JULIET: Awesome. Thank you, Michelle. That's great. Come work at Stitch Fix. 

[LAUGHTER] 

MELANIE: Michelle is not getting paid for this. 

MARK: Michelle, did you want to add anything on your end? 

MICHELLE: I think our team is also hiring if you want to work in developer relations like Google. 

MELANIE: But are you going to be speaking anywhere anytime soon? 

MICHELLE: I will be at DockerCon here in SF in a few weeks. That is June 12th, 13th, somewhere around there. I'll be doing a community session with Jay Smith. We'll be talking about Kubeflow. And it's an unconference style. It's a three hour session where we tell you a little bit about Kubeflow. There are a couple of other open source projects there as well. And then we talk about what we want to work on next and some of the hot button issues in the community. 

Please join the community if you're interested in hearing more about Kubeflow. If you just Google Kubeflow, you'll find there's a GitHub repo, kubeflow/kubeflow. There's also a mailing list. I believe that's all on there. But if you go github.com/kubeflow/community, any of those links, those will lead you to our project. 

MARK: We'll put them in the show notes. Well, thank you to both of you for coming on the podcast today. This has been really great and a super interesting interview. 

MICHELLE: Thanks for having us. 

MELANIE: Thank you. 

MICHELLE: This was great. 

JULIET: Thanks. 

MARK: Thanks again to Juliet and Michelle for joining us today on the podcast. Super interesting conversation talking about data science pipelines and how all that stuff gets built out. 

MELANIE: Agreed. All right, Mark, so question of the week? 

MARK: Yeah. 

MELANIE: If I've written a gRPC service but I'm using a language or platform that isn't supported, is there any way I can access it as a REST? 

MARK: Yeah. So I really like gRPC. So if you're not familiar with gRPC, it stands for gRPC Remote Procedure Call. So it's recursive. 

MELANIE: Great. 

MARK: Always. 

MELANIE: Fantastic. 

MARK: It's a great way of building procedure call systems. It does a lot of really cool stuff. One of the things that's great about gRPC is it sends things like Proto Buff over the wire, uses HTTP/2. So it has some requirements. And there's a set of languages that are supported. So if you're using a language or a platform that isn't supported, say maybe JavaScript on the browser or maybe there's a particular language it hasn't been built for yet, something like that, you can actually expose it as a REST. 

And there's a couple of tools that will let you do that, each with its pros and cons. The one that came out first-- yeah, I'm going to say it came out first-- is an open source product that was in the gRPC ecosystem repository called gRPC Gateway. It's literally a tool and/or a library that you can either do one of two ways. 

If you've got a gRPC service written as Go, you can basically use it as a library to expose your endpoints as HTTP. You just put some extra configuration in your proto file. And you can do it that way. It will also generate Swagger, do some other nice stuff, too. 

But it can also be used as a proxy if you want to do it that way, too. So if you have a gRPC service in a different language or you just want to put a proxy in front without having to work in the same process, you can do that. And that works really nicely. 

The other thing that is also possible is you can use another proxy called Envoy. Envoy has got a lot of popularity recently. It came out of collaborations between Lyft and Google and probably a whole bunch of other people as well. It does a whole bunch of stuff. 

But one of the things it can also do is also do gRPC conversions to HTTP and JSON, so essentially REST very much. In exactly the same vein as gRPC Gateway does, actually, as well, which is kind of neat. It uses the same configuration. 

And finally, should also make mention of the fact that if you're running on Google Cloud, we have a product called Cloud Endpoints. It will actually do exactly the same thing as well. So you can also use that to convert from gRPC to HTTP endpoints. 

And the neat thing is all three of them use exactly the same configuration. So you can actually, I would say, pretty much switch between the others really relatively easily. We'll add some more documentation to the show notes as well. 

MELANIE: That's great. Well, thanks for that, Mark. So, Mark, where are you going to be-- 

MARK: What am I doing? What's going on? 

MELANIE: Yeah. Last week you did your talk. Actually, how did it go? 

MARK: That was fun. We had a good time, had a good chat about how you can't just add more servers. But on the 14th of June, I will actually be presenting on Agones, speaking of which, at the San Francisco Kubernetes meetup. 

MELANIE: Nice. 

MARK: So I'll be there chatting about that. What are you getting up to? 

MELANIE: I am slated to speak on June 26 at a joint event by PyLadies and Women in Machine Learning and Data Science. We're going to be talking about paths to data science. Once I have more details on that, I'll add that in the show notes. 

MARK: Awesome. Fantastic. Well, Melanie, thank you for once again joining me on the podcast. 

MELANIE: Thank you, Mark. 

MARK: And thank you all for listening. And we'll see you all next week. 

[MUSIC PLAYING] 

MELANIE: (SINGING ADDAMS FAMILY THEME) Dun-nu-nu-nuh. [SNAP] [SNAP] Dun-nu-nu-nuh. Dun-nu-nu-nuh. Dun-nu-nu-nuh. [SNAP] [SNAP] 

[LAUGHTER] 
{{< /transcript >}}