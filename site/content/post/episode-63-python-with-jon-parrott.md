+++
audioDuration = "00:32:15"
audioFile = "Google.Cloud.Platform.Podcast.Episode.63.mp3"
audioSize = 46379590 
categories = ["Python"]
date = "2017-03-01T01:07:49Z"
description = "Following our saga of episodes on programming languages today we have the honor to talk to Jon Wayne Parrott, a Developer Programs Engineer at Google Cloud Platform, about Python on the cloud."
draft = false
episodeNumber = 63
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Python with Jon Wayne Parrott"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/?pageId=117267610519909886476"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/5wyhov/episode_63_python_with_jon_wayne_parrott/"
image="/images/post/python.png"
+++

Following the saga of episodes on programming languages today your co-hosts,
[Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic),
have the honor to talk to [Jon Wayne Parrott](https://twitter.com/jonparrott),
a Developer Programs Engineer at Google Cloud Platform, about Python on the cloud.

<!--more-->

##### About Jon Wayne

[Jon Wayne](https://twitter.com/jonparrott) focuses on the Python developer experience
for Google Cloud Platform. He’s an active contributor to multiple open-source Python
projects.

##### Cool things of the week

- Google Cloud Platform is the first cloud provider to offer Intel Skylake [blog](https://cloudplatform.googleblog.com/2017/02/Google-Cloud-Platform-is-the-first-cloud-provider-to-offer-Intel-Skylake.html)
- GPUs are now available for Google Compute Engine and Cloud Machine Learning [blog](https://cloudplatform.googleblog.com/2017/02/GPUs-are-now-available-for-Google-Compute-Engine-and-Cloud-Machine-Learning.html)
- Developer Advocates offer up their favorite Google Cloud NEXT 17 sessions [blog](https://cloudplatform.googleblog.com/2017/02/developer-advocates-offer-up-their-favorite-Google-Cloud-NEXT-17-sessions.html)

##### Interviews

- Python on Google Cloud Platform [cloud.google.com/python](https://cloud.google.com/python)
- Python on App Engine Standard Environment [docs](https://cloud.google.com/appengine/docs/standard/python)
- Python on App Engine Flexible Environment [docs](https://cloud.google.com/appengine/docs/flexible/python)
- A skeleton for creating Python applications using the Flask framework on App Engine [GitHub](https://github.com/GoogleCloudPlatform/appengine-flask-skeleton)

##### Question of the week

- Can I send emails as part of a Cloud Datastore transaction?
No, but you can use Task Queues [docs](https://cloud.google.com/appengine/docs/standard/go/datastore/transactions)

##### Where can you find us next?

Mark is today at [GDC](http://www.gdconf.com/) and afterwards he'll be speaking at
[Cloud NEXT](https://cloudnext.withgoogle.com/schedule#target=building-massive-online-worlds-with-spatialos-and-google-cloud-platform-0cb0ec52-b735-4403-9fc5-071f1759dd1c), both in San Francisco.

Francesc is coming back from [Gophercon India](http://www.gophercon.in) and on his way to
[Cloud NEXT](https://cloudnext.withgoogle.com/schedule#target=google-cloud-endpoints-serving-your-api-to-the-world-8eaeb271-f0ea-4638-af94-16c0b2b80bf6).

{{< transcript "FRANCESC: Hi, and welcome to episode number 63 of the weekly Google Cloud Platform podcast. I am Francesc Campoy and I'm here with my colleague, Mark Mandel. Hey, Mark. How are you doing?" >}}

MARK: I'm good, thanks, Francesc. How are you doing? 

FRANCESC: Pretty good, waking up early for this today. [LAUGHS] Joining from Pune in India for GopherCon. And going soon to Mumbai. 

MARK: Fun. All right. You're bouncing around a lot. 

FRANCESC: Where in the world are you? 

MARK: I am sitting next to my kitchen in my living room. Yes. Definitely jet setting. It's fantastic. 

FRANCESC: The jetlag between the couch and the kitchen is crazy. 

MARK: Indeed. 

FRANCESC: So we have a very, very cool episode today following the saga of episodes about what you can do with a [INAUDIBLE] language on the cloud. And today, we have developer firms engineer. So one of the roles that are part of our relation-- our division, developer relations-- John Wayne Parrott. And he's going to be talking about Python. 

MARK: Yeah, he's joining us today to talk about Python. I think that kind of just rounds out the set of languages that we have available and generally supported on our platform. 

FRANCESC: I guess so. Yeah, we've done we've done Ruby, Java, Go-- 

MARK: Node. 

FRANCESC: Have we done JavaScript? 

MARK: We've done node.js. 

FRANCESC: Yeah-- no-- yeah-- OK. 

MARK: And we've done PHP. Yeah. 

FRANCESC: Next, we can go with Haskell. 

MARK: Nice. I'm down. We should totally do that. 

FRANCESC: I know. Could be fun. 

MARK: There's a GRPC library for Haskell. I'm just saying. 

FRANCESC: It is a GRPC library for basically any language. That is the whole point. 

MARK: All right. So enough of that meandering. Before we get into our main content, however, why don't we talk about-- there are a lot of cool things this week, actually. There are a lot of cool things. 

FRANCESC: Yeah, this is way too many. So we actually had to filter out some of them. And we'll let them for next week. But we chose the three most important ones, in our humble opinion. 

MARK: In our humble opinion, yeah. So the first two like are all about hardware. So the first time around, Google Cloud Platform is the first cloud provider to offer Intel Skylink chips, which is pretty cool. The next generation of Intel Xeon processors. 

FRANCESC: So I'm going to have to ask, because I know that you are like more into hardware than I am. Because video games and stuff. Why is this cool? What is-- like-- what kind of use cases do you think that these kind of processors could help with? 

MARK: So this is kind of cool-- I'm actually just reading about it now. But it is cool because it has certain implications around floating point performance. And that's really useful for like genomics research, data rendering, data analytics, stuff like that. So it's pretty great if you're doing heavy CPU computation type things. This sort of processor can cut down your workload time by quite a lot. 

FRANCESC: So yeah, I guess that may have basically any kind of heavy simulation that might not benefit as much as they could from our second cool thing of the week. Which is GPUs. 

MARK: Yay. 

FRANCESC: Yay. So we have these [INAUDIBLE] GPUs are now available for Google Compute Engine. And cloud machine learning. 

MARK: Currently we have Nvidia GPUs that are available in three GCP regions-- US East, Asia East One, and Europe East One as well. I believe eventually we're going to have both AMD and GPU. But right now in open beta, we have Nvidia GPUs available that you can connect to Google Compute Engine instances. 

FRANCESC: So the cool thing is that you can adapt to eight GPUs in a single [INAUDIBLE] VM. Which is pretty amazing, especially if you're running things like TensorFlow, or basically any other software that is GPU accelerated. If you add eight GPUs, you're going to see a huge, huge increase in performance. So definitely worth trying. 

MARK: Yeah, definitely. Cloud GPUs are tightly integrated with our machine learning platform. So you're going to see some big improvements there. 

FRANCESC: On top of GCU, you also have it on Cloud Machine Learning. So again, all these things like TensorFlow specifically, they benefit a lot from GPUs. So if you're already running something on PC or Cloud Machine Learning that you think that might benefit from it, go give it a try. 

MARK: Cool. So outside of hardware, there's actually a really great blog post that I would love to highlight. Especially since I have some content in it. 

FRANCESC: I was going to say, it's a really great blog post that I partly wrote. So hey. 

MARK: I didn't write this one. It just links to the one that I wrote. So if you are coming to Next, or possibly, actually, if you're just going to end up after Next, looking at some of the YouTube videos that are available, it can be a little hard to work out which sessions that you might want to watch. Because there's-- well, there's over 200. So there's a lot of content. 

So what we've done is we have a slew of articles that have been written by developer advocates such as myself and Francesc and teammates of ours, all about, like, which sessions would you like to go to if you belong to a particular community. Such as if you do a lot of Windows development, a lot of Ruby, if you're a game developer, if you're really into GSuite and app scripting type stuff, there's a lot of blog posts here that you can take advantage of to give you a curated list of exactly which sessions you really should be going to go see. 

FRANCESC: Yeah. It is very cool. I know that there's a bunch of different sessions that I had no idea they existed, because there are so many of them. So definitely reading these like curated lists of these are the kind of things you might like is definitely worth it. Especially if you're coming. And if you're not coming, still, you should definitely read it. Because all of the sessions are going to be online later on. So it can be a nice reference material to go and watch a bunch of talks. You can basically binge watch cloud mix later on. 

MARK: Yeah. It's totally-- it's binge watch time. You just curl up on a couch and watch a whole bunch of videos. 

FRANCESC: There you go. OK. So I guess it's time to go talk to our friend John Wayne Parrott about Python. 

MARK: Let's go do that. 

FRANCESC: So I'm very happy to welcome to the [INAUDIBLE] Podcast to one of our colleagues, developer programs engineer, by the name of John Wayne Parrott. Hey, John Wayne Parrott. How are you doing? 

JOHN: I'm doing all right, man. How about yourself? 

FRANCESC: Very good. Very, very happy and very excited about getting you to the podcast, finally. After we mentioned your name first time, that was actually almost a year ago. It was on February 24, episode 14, where we mention one of the cool things you've built. That kind of a [INAUDIBLE] like platform on Kubernetes. 

JOHN: Yeah, Yeah. It was a fun side project. 

FRANCESC: Yeah. It's been a long time. But today, you're here to talk about Python. But before we do that, why don't you tell us a little bit about you and what you do on Google? 

JOHN: Yeah, for sure. So just like you guys, I'm in developer relations. But developer programs engineering doesn't really tell you a lot about what I do just off the cuff. So I focus more on sort of our developer experience. So like documentation tutorials, sample code, and things like that. And also just kind of like taking a holistic view of the platform. And making sure that developers who identify as Python developers feel at home on Google Cloud Platform. 

MARK: Cool. So I don't do very much Python, if any at all. So like why Python? What makes Python great? 

JOHN: So Python is one of those languages that you can absolutely start your programming career with Python. It's a great language for newcomers, right? Because it's very approachable. But at the same time, it's also an insanely powerful language. It's general purpose. It's used almost everywhere. Like, it's hard to find places where you don't see somebody using Python, right? 

And it's just it's an incredible thing, because it's so approachable, but at the same time you can do so much with it. And it can really take you a long way. 

So for me personally, I think Python is really appealing, because I came from sort of a C++ game development background. And programming was always this thing that I imagined like it's always going to be difficult. Right? It's never going to be easy. 

And then when I discovered Python, I'm like, wow, this can be easy. You know, like, I can actually express programs in a way that makes sense. And I don't have to struggle with this all day long just to do something simple. Right? So I think there's a lot of appeal in Python. And I think especially for web applications and the sort of data analysis applications, it's really approachable and easy to use. 

FRANCESC: Since we're already talking about the kind of things you can do with Python, why don't you tell us a little bit about the things you can do with Python on Google Cloud Platform? Like what is the involvement of Google Cloud Platform with Python? 

JOHN: So, I mean-- there's essentially like-- I guess you could think of it like it's two buckets, right? There's people who are writing web applications in Python. And of course Google Cloud Platform has multiple hosting options. You have Container Engine, Compute Engine, App Engine. And Python works on all of those. So you can run your Python web application on Google Cloud Platform. We will host it for you. 

And then on the other side of things, like all of our services, such as data store, storage, and, newly, spanner, you can talk to those using Python. Right? So you can use our services with our Python client libraries. 

And even more than that, things like Data Flow, you can use Python to program your Data Flow pipelines and things like that. So Python is-- pretty much everything that you can do on Cloud Platform, you can do with Python. 

MARK: Cool. Now the amount that I know about Python, I know there was like the time the crystal cracked. Like the great schism. So what version of Python do we generally support? I don't even know what the ecosystem really looks like. What's the deal with-- like, is it 2 versus 3? Is that what's going on there? 

JOHN: So yeah, 2 versus 3 has been the debate for many years. So 3 came out several years ago. I say several-- it was a long time ago now, when 3.0 came out. And it was-- there were a lot of-- like it was non-trivial to upgrade a project from 2.7 to 3. Well, 2.6 at the time to 3. 

So a lot of people just stayed with 2. Because if it's not broke, don't mess with it. You know. So that caused a little bit of trouble. And a lot of libraries, you know, such as Django, didn't port right away. And that made it a lot harder for people to adopt Python. Because not only do they have to change their application, but the libraries they depend on don't support Python 3. 

Now the story is completely different today. Almost every major Python package supports both Python 2 and 3, with the exception of, like, maybe one or two. And there's replacements for those. And in general, the community is very focused on Python 3 as the future. Well, not the future. It's the present. And you know, we need to get there as fast as we can. 

The other thing that's sort of driving this adoption of Python 3 is that the Python Software Foundation is going to stop supporting Python 2 in 2020. So they've been given a doomsday, essentially. There's actually a Python doomsday clock you can pull up that gives you a countdown to 2020 when we can stop worrying about Python 2. So it's pretty interesting stuff. 

So in terms of sort of where we focus-- we as in Google Cloud Platform-- focus, we definitely want to support Python 3. Right? While not leaving behind the people who are still using Python 2. Because there is still a lot of people who are using Python 2. 

So when you look at our client libraries and you look at Container Engine and Compute Engine and App Engine, flexible environment, Python 3 is available and supported. We support Python 3.5 right now with our container runtime that runs on App Engine flexible and Container Engine. And we were about to add 3.6 very shortly. 

App Engine standard is a special case. It's still on 2.7 because most of the applications that run on App Engine standard are pretty much using 2.7 and have no need to update. But we are investing in standard. So I would expect that that might change soon. So keep your eyes open, eyes peeled there. 

FRANCESC: Cool. So we can use App Engine with Python 2. What is the frameworks that people normally use for these kind of things. Like I know that Flask, I think, is one of them? Or might be Bottle? Or maybe both, actually. I'm not very sure. Can you talk a little bit about frameworks that we support? 

JOHN: Sure, absolutely. So we don't really make the framework choice for you in any of our hosting platforms. Of course we try to follow the community. 

And if you look at the Python community, a lot of people, when they think about Python and web, they sort of immediately jump to Django, right? Django is one of the largest open source projects within the Python community. And has a huge user base. And there's lots of plug-ins and things like that for Django that make it a lot easier to accomplish tasks quickly with Django. 

So we definitely want to give more attention to Django users. Because it's just a huge community base. And it's actually something we've been working on over the last year, is making sure that there's tutorials that fit in to a lot of what Django users are looking for. 

That said, the Python community is actually about split, about an even split, between Django and Flask, right? Whereas Django is more this larger sort of framework, it's very opinionated, it tells you sort of how to structure your app, and it gives you a lot of batteries included sort of thing, Flask is more like a Spartan, minimalist framework. I think it actually started as an April Fools' joke. And people just sort of liked the idea of it, and it just kept going from there. 

So I personally am a Flask user. And all of our tutorials for App Engine flexible environment are written in Flask. Because it's just a lot easier to write a sample application with Flask. Because there's a lot less code involved, a lot less files. And a lower barrier of entry, essentially, than trying to have a Django app for every tiny sample that we write. 

FRANCESC: Cool. So what about other domains other than web servers? Is there any kind of support for numPy related to Google Cloud Platform? Like I could imagine something like that for, I don't know, Dataflow or Data Lab or whatever? Do you know anything about this? 

JOHN: Like with Dataflow and Data Lab, you kind of have access to this other domain of data scientist stuff. And in general, our platform will let you use whatever you want, and just kind of get out of your way. 

So if you're using our container runtime and running your data analysis pipelines on Kubernetes, our container runtime contains everything that you need to install NumPy out of the box. Right? That is to say you just drop it in your requirements dot text file, right-- which is how you declare dependencies in Python, by the way, guys. You just drop NumPy into your requirements.txt. And then it works. It should just work. 

And so we really just-- a lot of Python is like-- you know, the community has a lot of opinionated ideas about how to handle dependencies, how to deal with installing things. And we just kind of want to support that and get out of the way. So that we don't block that sort of thing. 

I think Data Lab has NumPy and SciPy pre-installed. So you don't even have to install those on that one. I could be wrong so don't quote me. But if it's not, I know it should be pretty straightforward to install in Data Lab. Dataflow, I think, that's sort of a special purpose built for data processing. So I imagine you wouldn't have any problem using your normal Python data scientist related libraries. 

MARK: Excellent. All right, cool. So that sounds like we have at least a pretty decent coverage across Python. But are there any sort of new releases or things that are being actively worked on that Python developers can look forward to? 

JOHN: Yeah. I mean so I mentioned this-- I sort of hinted at this earlier-- one of the things that we're definitely doing-- at least in my team-- is trying to make sure there's plenty of tutorials for Django users. Right? We definitely want Django users to fill at home on Google Cloud Platform. 

And that means highlighting products such as Cloud SQL, which is our hosted mySQL solution. Because Django developers are a lot more familiar with a relational database management system than something like data store, for instance. So we're focusing a bit on Django over the coming months and things like that. 

But there's also always new products being release for Cloud Platform. Like just the other day, we released Spanner. And, of course, that has a Python client library on day one. And you can use Spanner from Python if you want. Incredibly high-scale database that can do SQL queries. 

MARK: No, that sounds cool. Now, I'm actually just curious-- we talked a couple of times about Django. Are there particular challenges around running it on Google Cloud? Are there particular platforms that it's better on? Does it work better on Kubernetes than it does App Engine or something like that? 

JOHN: Yeah, I mean, like-- so I think it just depends on your workload, right? So, I mean, Python, I think-- if you're doing like some heavy data processing, like, clearly you don't want to use App Engine, right? Because it's more-- App Engine's built for stateless workloads, right? But if you're writing a web front end, then App Engine absolutely makes sense. Right? 

So I think it just all comes down to your use case. I think all of our platforms are pretty well suited for running Python. I think it's just a case of what execution model is going to best match-- 

MARK: We were just talking specifically about Django. 

JOHN: Oh, Django. 

MARK: Yeah. Is there a particular one that's better for that? I would say App Engine Flex is going to give you the absolute best just out-of-the-box experience with Django. We sort of purpose built the developer experience for App Engine flexible to sort of meet Python developers where they are. Right? 

So for the most part, if you have a Python web application that has a requirements dot text file, you can drop in a really simple app dot YAML and deploy it to App Engine flexible without any changes, typically. You may have to change the [INAUDIBLE] that it's listening on. But that is our goal. Our goal is to just be able to take any Django app, and just run it on App Engine flexible. 

FRANCESC: So I'm assuming-- what you were saying about the port is you will need to read the port from an environment variables, something like that? 

JOHN: Yeah, Yeah. We expose the port environment variable, which is always 80-80. 

FRANCESC: That's [INAUDIBLE] Go best. That for Go, we're basically working on exactly the same thing. So you can just drop it and it just works, which is pretty nice. As a Go developer, something that I'm slightly jealous about for App Engine is your amazing NDB library. I wonder if you could talk a little bit about it. 

JOHN: Everybody loves NDB. Fun fact-- it was actually written by Guido van Rossum. The inventor of Python himself wrote the NDB library. So there's a lot of interesting things in that library. Our App Engine standard users absolutely love it. 

However, it's not currently available outside of App Engine standard. But we know that users love it. And we are definitely looking into bringing that library and making it available to use everywhere. So we want to sort of rebase it on top of the cloud platform-- Google Datastore API, instead of the App Engine Data Store API. So that you can use it wherever. 

FRANCESC: So for those that do not know what NDB is-- and actually, I don't even know what NDB stands for-- could you describe it a little bit, please? 

JOHN: Sure. So NDB is our ORM, are Object Relational Mapper for data store, for App Engine standard. It is named NDB because it means New DB. Because there was a previous library for App Engine standard just called DB. 

FRANCESC: That's slightly disappointing name. 

JOHN: It's a great name, I think. So yeah, it's just an ORM. So like for Python developers, if you're familiar with SQL alchemy or Django's ORM, then it's somewhat similar to that. You sort of define your data models as classes. And then you can define the property types on that. And then of course the library handles querying and serialization and stuff like that. 

FRANCESC: And it also puts a Memcache [? shim ?] in front of it too? 

JOHN: Oh yeah, that's one of the really cool features about NDB is that because App Engine includes a Memcache service. NDB does right through caching for all of your entities. So it's pretty neat. But it works about 95% of the time for everybody, which is great. 

That's also one of the difficulties with porting it outside of App Engine, because you either have to provide some sort of plug-in interface to be able to add different caching layers. Because imagine if you're running on Compute Engine, you may not have Memcache available to you. You may have Redis or something like that. So you want to be able to plug in a different caching back end. Or not have a caching back end, if you don't have anything available. 

MARK: I'm curious-- is there anything new and exciting in the Python community that you're particularly excited about? New frameworks or releases or anything interesting like that? 

JOHN: Oh, man, where do I start? The Python community is always growing and always evolving. With the release of 3.6, we got some really neat stuff. We have this thing called asyncio. And in 3.6, it's no longer experimental. It's actually sort of a supported core part of the Python standard library. 

So asyncio gives us something similar to Go's go routines in Python. So it allows us to do this really cool co-routine asynchronous code. And people have done all sorts of really cool things with this. 

I feel like maybe late last year-- I may be getting my timelines wrong here-- somebody released a plug-in for Python asyncio that uses uv.loop underneath the covers. Which is I think the same invented I/O that node.js uses. So it's blazingly fast. It's pretty cool. 

And then somebody else built a web framework on top of uv.loop called Sanic. Because you have to go fast. So Sanic is one of the fastest web frameworks ever. And it's just super cool stuff. So like with asyncio, you can do a lot more with one process. And you can do things like use different event loops, like uv.loop, and get insane network performance out of your Python programs. 

So one of the things I have on my list to do is actually write an application using Sanic that runs on App Engine flexible. So that we can be part of this crazy awesome movement of async stuff going on in Python. 

FRANCESC: That was actually what I was going to ask you. Does this work on App Engine like-- so perfect. 

JOHN: I just haven't finished polishing the thing. So it works out of the box in App Engline flex. There's no worries there. Because it just works on Linux. And if it works on Linux, it probably works in the container. And if it works in the container, it will run on App Engine flex. So yeah, it's exciting stuff. And I just need to publish that sample, because it's super awesome. 

FRANCESC: So Google is pretty involved with open source communities. Last time we had someone from node.js, we talked about node.js-- the node-- what is-- the node-- what is the name of community? 

JOHN: Node.js community? 

FRANCESC: The Node Foundation, there you go. So is there something similar for the Python community? And if so, how is Google involved with it? 

JOHN: Yes, I mean, we're so involved, I don't know if I can mention everything. Google is one of-- we've been using Python forever at Google. So outside of Cloud Platform, just inside of Google proper, we have a couple of core maintainers of Python. 

We sponsor PyCon every year, I think. I would say every year. At least the last two years, we sponsored PyCon, to my knowledge. That's the most authoritatively I can speak on that. So we sponsor PyCon. Typically Googlers talk there. I mean, Googlers are really heavily involved in the open source community around Python. 

I mean in cloud, specifically, I know that we are working with a lot of open source libraries like Apache Cloud to help integrate with Google Cloud Platform services and things like that. Myself, I've helped out with [INAUDIBLE] 3, which is a very popular Python open source package for HTP requests. 

And in general, we try to be as open as we can. Which I think is really positive for the Python community. In my opinion, there's nothing more important than open source. And I'm happy that I'm in a spot where I can do a lot of contributing to open source. 

MARK: You mentioned PyCon. Is PyCon the only event we tend to go to? Or should people expect to see Googlers at other Python events as well? 

JOHN: Well, what's great about PyCon is that there's not just one. There's like PyCon in Canada, there's like PyCon in Japan, I think. So there's a bunch of them. And we tend to be involved in quite a few of those, I think. I think our colleague Ian Lewis tends to do the ones that are over in Japan and stuff like that. 

So I think we're really involved in those sort of PyCon type events. I don't know if there's any other huge PyCon level events. I mean, that is really the community likes to be sort of centralized in that way. It's the big one for everybody. And we're super involved in that. I don't know. I don't know. I don't know the answer to that question, essentially. 

FRANCESC: That's all right. That's good. That's good. We're kind of running out of time. But is there any other topics or announcements or whatever that you'd like to mention before we finish? 

JOHN: Not at the moment. 

FRANCESC: That's totally fair. 

JOHN: If I told you, I'd have to kill you. 

MARK: Ooh, so something cool is coming, but we don't know what it is. 

FRANCESC: You should kill us is coming. And the whole audience. OK. That's a lot of people, but whatever. OK, well, then, thank you so much for taking the time to talk to us about Python. And let's see when you come back and tell us what secrets you're hiding today. 

JOHN: All right. Looking forward to it. 

FRANCESC: Thank you. Well, thanks again to John Wayne Parrott for such an interesting interview. I personally have written lots of Python. But I have been out of the community for quite a while. So it's always nice to see what's going on, and learning a little bit, what are the plans with like Python 2 versus Python 3. The kind of support we have at Google Cloud Platform. So very cool interview. 

MARK: Yeah, thanks so much for joining us, John. There's a lot of friends of mine who are at Python. So I'm sure they're going to appreciate it. 

So moving on to our question of the week, Francesc, you were telling me earlier of a question that came from one of the members of your workshop while you were having your travels in India. He was talking about transactions. And being able to transactionally store data, say, in some sort of storage system. And then also being able to send an email such that say the email failed, then the transaction on the data storage would drawback. Or if the data storage didn't go through properly, then the email wouldn't go out. How can I do that transactionally in that sort of situation on Google Cloud? 

FRANCESC: Yeah. So to be more specific, this was in the context of App Engine. I have this Go web workshop that is basically writing Go web applications on App Engine. And we're already using Data Store. And I mentioned that you can use the mail API, mail service API, from App Engine to send e-mails very easily. 

And the question was exactly that. So imagine that I want to store something in the data store after sending an email. Or that I want the email only to be sent when the data store thing has worked. So I want to basically have the sending of an email as part of a transaction. 

This is something that you can not really do. But there's actually ways of mitigating that issue. Which is one of the best ways to do it is actually by using task queues. So task queues, I think we've talked about it a long time ago. But task queues is a little thing that allows you to schedule something to be done later on at some point. 

So in this case, you could say oh, I want to store something in the Data Store. And then I want to schedule sending the email at some point. Now the cool thing is that storing something in the task queue can be done instead of a transaction, instead of a Data Store transaction. 

So you can atomically decide if you should be sending that email or not according to the success status of a transaction in Data Store. Which is actually pretty powerful. Because then you can use the same principle to apply to whatever you want. 

MARK: Oh, so that's cool. So if I'm doing something in Data Store with a transaction, I can then transactionally also send off task queues to fire something in the background. But if any part in that chain fails, then those task queues and that data storage will all roll back atomically. 

FRANCESC: Exactly. So you need to go and be like oh, add something to the task queue. And then it's like oh, let me get it back. There's no need of doing that. You can just use a transaction as you would do in a Data Store. 

MARK: Awesome. So I could send an email or an SMS, or just do something even totally crazy like compute a whole new thing if I wanted to. 

FRANCESC: Or you can lock some metrics or whatever cool thing you want to do. It is quite simple. 

MARK: Awesome. Well, thank you so much for explaining that to us, Francesc. 

FRANCESC: It's a pleasure. 

MARK: Wonderful. So I believe, I know you are off to Mumbai next. What are you doing there? 

FRANCESC: Yeah, so I am today while we are recording in Pune. But I'm going to Mumbai tomorrow to run a workshop. But by the time this episode will be out, I will be flying over somewhere in between India and San Francisco, coming back to the United States, and getting ready for Cloud Next. 

MARK: Excellent. Yeah. So pretty much when this comes out, I'll be at the Game Developers Conference. Like right in the middle of it. But I think I will be at Next as well. We're going to have a pretty fancy booth set up. I think I'm pretty excited about it. We've been in talks about doing daily episodes. So hopefully that all comes together as well. I'm not going to promise anything just in case that-- 

FRANCESC: We'll see how that works. 

MARK: It's a big challenge right there. But we're definitely going to be looking for people to come by the booth, do short interviews, come hang out with us, get some t-shirts, some stickers. We're really looking forward to seeing people at Next. 

FRANCESC: Yeah. And I guess if you're going to come, I'd be a very nice thing to do to warn us. And to get in touch with us. The best ways to do this is we have Twitter-- 

MARK: @GCPPodcast. 

FRANCESC: We have Google Plus. 

MARK: +GCPPodcast. 

FRANCESC: We have a subreddit. 

MARK: /R/GCPpodcast. 

FRANCESC: We do have a web page. 

MARK: GCPpodcast.com . 

FRANCESC: An email. 

MARK: Hello@GCPpodcast.com 

FRANCESC: And finally, we're also on Slack. And that is the one that is a mouthful. 

MARK: Slack is hash podcast on the Google Cloud Platform community Slack, that you can reach at bit.ly/GCP-. 

FRANCESC: Wow, amazing. Good job. So send us your questions. We got a bunch of questions during the last week. And we'll be using some of those for our next episode. So do not think that we do not read those questions. We read every single one of your e-mails, and we love them. So keep them going. 

MARK: Yes, thank you very much. Well, Francesc, thank you for joining me yet again for another episode. 

FRANCESC: Thank you, Mark. And thank you all for listening. 

MARK: See you all next week. 
{{< /transcript >}}