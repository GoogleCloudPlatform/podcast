+++
audioDuration = "00:26:48"
audioFile = "Google.Cloud.Platform.Podcast.Episode.53.mp3"
audioSize = 38622883
categories = ["Ruby", "App Engine"]
date = "2016-11-23T01:07:49Z"
description = "Today Aja Hammerly, Developer Advocate and fellow teammate at Google Cloud Platform, joins us to tell us about all the cool things you can do with Ruby on Google Cloud."
draft = false
episodeNumber = 53
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Ruby with Aja Hammerly"
image="/images/post/ruby.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/JJrzqNT6PFV"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/5ejsux/episode_53_ruby_with_aja_hammerly/"
+++

Today [Aja Hammerly](https://twitter.com/the_thagomizer), Developer Advocate and fellow teammate at Google Cloud Platform,
joins your cohosts [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/neurotic)
to tell us about all the cool things you can do with Ruby on Google Cloud.

<!--more-->

##### About Aja Hammerly

[Aja](https://twitter.com/the_thagomizer) lives in Seattle where she is a Developer Advocate at Google
and a member of the Seattle Ruby Brigade. Her favorite languages are Ruby and Prolog. She also
loves working with large piles of data. In her free time she enjoys skiing, cooking, knitting, and
long coding sessions on the beach.

##### Cool thing of the week

- Announcing GPUs for Google Cloud Platform [blog](https://cloudplatform.googleblog.com/2016/11/announcing-GPUs-for-Google-Cloud-Platform.html)
- Google Cloud to join .NET Foundation Technical Steering Group [blog](https://cloudplatform.googleblog.com/2016/11/Google-Cloud-to-join-NET-Foundation-Technical-Steering-Group.html)

##### Interview

- Ruby on Google Cloud Platform [docs](https://cloud.google.com/ruby/)
- APIs & Ruby Libraries [docs](https://cloud.google.com/ruby/apis)
- Google App Engine Ruby Flexible Environment Documentation [docs](https://cloud.google.com/appengine/docs/flexible/ruby/)
- Create a BigQuery table with Ruby: Cloud Minute [YouTube](https://www.youtube.com/watch?v=Mr1bFFugRYo)
- Create a VM with Fog & Ruby: Cloud Minute [YouTube](https://www.youtube.com/watch?v=09-OlnQ6fGs)
- Upload to Google Cloud Storage with Fog: Cloud Minute [YouTube](https://www.youtube.com/watch?v=lhWE6GTphXM)
- RubyConf 2016 [home page](http://rubyconf.org/)

<div style="text-align: center">
  <img src="/images/post/ruby.png" style="margin: auto; width: 50%; max-width:200px">
  <p><small>Official Ruby logo by Yukihiro Matsumoto, Ruby Visual Identity Team</small></p>
</div>


##### Question of the week

How can I add constraints on what hosts can run given pods?

- Constraining pods to run on particular nodes [docs](http://kubernetes.io/docs/user-guide/node-selection/)

{{< transcript "FRANCESC: Hi, and welcome to episode number 53 of the weekly \"Google Cloud Platform Podcast.\" I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark. How are you doing?" >}}
MARK: I'm doing all right. I'm getting over the flu a little bit. But otherwise, I seem to be doing reasonably well. How are you doing? 

FRANCESC: Pretty scared about sharing a small recording studio with someone with the flu, but other than that, pretty good. 

MARK: It's fine. You did it last week. I wouldn't worry about it. 

FRANCESC: Yeah, I should be fine. I'm very excited about holidays, to be honest, very excited about that, yes. 

MARK: Yeah, my indoctrination into the American culture continues, as I partake in Thanksgiving soon. 

FRANCESC: Thanksgiving, Friendsgiving, and all the kind of versions of turkey, yes. Lots of food. So today, we have someone from our team. We have Aja Hammerly. And we're going to be talking everything Ruby, the beautiful programming language, and how you can do cool things on the Cloud with it. 

MARK: Yeah, it's really cool. We're going to see some really awesome stuff that Google Cloud has been doing with Ruby. 

FRANCESC: Yeah, it is one of these episodes where I'm excited about it, because I don't know much about Ruby, really. Like, I've written some lines of code in Ruby and had fun, but never wrote anything real. So I'm very excited about Aja telling us a little bit more about it. 

MARK: It's been a while since I've written Ruby, actually. 

FRANCESC: And then, we have a question of the week, which is about one of our favorite, favorite all-time topics, Kubernetes. 

MARK: Yeah, we're going to talk about how you can manage things if you want certain pods or containers to run on particular nodes inside your cluster. 

FRANCESC: Yep, something that makes total sense in a couple cases, like you have one of the machines is bigger, or you have license constrictions-- constrictions, is that a word? 

MARK: Constraints. 

FRANCESC: Restrictions or constraints-- 

MARK: That works, too. 

FRANCESC: Not constrictions. I just created the word constrictions. You're welcome. 

MARK: I like it. We should use it form now on. 

FRANCESC: But before that, we have two cool things of the week. And one of them, I'm so excited about it, because it is actually something we've been waiting for quite a while. I know a lot of people that were asking for it, many customers. And we have it-- GPUs. 

MARK: Yeah, we're finally announcing that we're going to have GPUs in early 2017, available on Google Cloud. It's been a long time coming. 

FRANCESC: Yep, and it's going to be amazing, I mean, especially for you. You do a lot of video games and rendering, stuff like that. Like that, it's going to be huge. 

MARK: Yeah, I mean, we've had rendering pipelines on Google Cloud for a while. But GPUs are definitely going to help out, which is going to be really awesome. 

FRANCESC: I'm very excited about it, and to see basically all the cool things that people are going to be able to make with this. 

MARK: And all the math people who are going to be able to do very fast calculations. 

FRANCESC: I don't care about maths. 

MARK: Maths is fun. 

FRANCESC: Just kidding. It's very important, too. The second cool thing of the week is about Google Cloud joining the .NET Foundation. 

MARK: Yeah, I think this is super cool, as well. I feel like Google Cloud is really kind of-- I hate to use the phrase doubling down-- is really focusing on .NET and Windows as a really core platform for Google Cloud. I'm really excited about the things going on in this space. And I think this is just kind of another sign of that 

FRANCESC: Yeah, I mean, it was just a couple weeks ago that we had the episode about .NET and Windows on Google Cloud Platform. Maybe it's a good time to listen to it again. There's lots of work on that side of things, so go check it out. 

MARK: Definitely. Well, it sounds like it might be time to go have a chat with Aja about Ruby. 

FRANCESC: Sounds good. Let's do that. 

MARK: Sounds good. So I'm absolutely delighted to have Aja Hammerly back with us again in the podcast booth. How are you doing today, Aja? 

AJA: I'm having a good day. I'm excited to come talk to you guys. 

MARK: Excellent, excellent. In case people haven't talked to you, either at conferences or events, or listened to the podcast before, do you want to tell us a little bit about who you are and what you do? 

AJA: OK. I'm a developer advocate on the Google Cloud team. And my primary focus is on DevOps-- networking, security operations, monitoring, logging, all that kind of stuff. But my passion is Ruby. And I've been part of the Ruby community for ten-ish years at this point. And I'm really glad that I get to talk a little bit today about what Google's doing with Ruby, because that's what I'm spending some of my time on. 

FRANCESC: Cool. And for those that are interested in your other passion, we actually had you before. We had you-- I have it right in front of me-- July 13. So that was episode 34, talking about monitoring Stackdriver. So if you're interested about that, go check it out. And today. Instead, we're going to be talking just Ruby, 100%. 

AJA: I'm so excited. 

MARK: Cool. All right, so we're talking about Ruby, the language. I guess, then, why Ruby? Why are we talking about this? 

AJA: So the Ruby community is surprisingly big. A lot of people don't realize how big it is. It's being taught in a lot of boot camps. And there's a lot of relatively large websites that are running it. I think my favorite example is GitHub, which most of us use nearly every day, has got a fair amount of Ruby internally. 

MARK: Cool. 

AJA: And it's a huge market. There's a lot of stuff. And we're trying to figure out, as part of Cloud Platform, how can we support our developers better? And one of those ways is we can support the languages they're using and meeting them where they're at. And so I've been part of our Cloud Ruby effort over the last couple months, as we're trying to beef up our libraries, beef up our support for Ruby, and make it a place that Rubyists feel comfortable. 

FRANCESC: Cool. So why don't you tell us a little bit about what kind of things you've been working on? 

AJA: So our two big projects right now are we're writing our Google Cloud libraries, being released as RubyGems. And more and more are coming out nearly every day on a regular basis. All this is being done in the open. It's all on GitHub under our Google Cloud Platform project. 

And the other thing we've been working on is Ruby support and Rails support for App Engine flex. We also support Sinatra, the other big web framework for Ruby. And I'm really happy with where that's at. 

I actually got to participate in a hackathon with it last week. And I deployed a couple of my personal projects, my side projects, to the platform. And it was awesome. It was great that they came up real quickly. I got to see everything in place, hooked it into Cloud SQL with no issue at all. I just had to get the right IP address and the right files. 

And it was really awesome having something that was that seamless and that easy on our platform, because when I started two years ago, we didn't have a ton of Ruby support. And so seeing that transformation over the time, being able to talk to my community at events like RubyConf about the cool stuff we're doing, has been really exciting. And they're excited to hear it, too. 

MARK: Awesome. So I guess that means yeah, so you've got the support there for the frameworks and the tools that are common to the Ruby community to be able to deploy your stuff, as well as all the SDKs and tools and gems, I guess, to interact with all our back-end services, like storage and like all our other things. 

AJA: Yeah, I'm actually really excited. We're doing a bunch of examples work right now and flushing out the ML APIs. I did a cool talk at RailsConf using the Vision API to do kind of a where in the world is Carmen Sandiego. I think that might have been your idea, Mark, that I stole. 

FRANCESC: That is a pretty awesome idea, to be honest. 

AJA: And so we used the Vision API to recognize landmarks. And we used it to recognize-- we did text, speech-to-text with Translate with a sign that was in Japanese. We used it to recognize various other things. We did some geocoding based on where landmarks were. And we did it all in Ruby. And it was really fun. And the fact that I was able to do that all in Ruby was great. 

And the community's been great. We've been getting community contributions back to our examples repo, which I'm super excited about, because that means the community wants to help us. And poll requests welcome. So it's been fantastic. 

And we have support now also for-- Vision's out. We're working on Translate. We've got support for Speech coming out, or in flight, at least. And all this is happening on GitHub, so you can easily see what's working, what's being worked on at any given time. It's been fun. 

And Ruby doesn't have a ton of ML. The Ruby community and the ML community don't overlap a huge amount. And so being able to bring these tools in to these people in a way that is really simple to use has been great, because pulling in huge ML libraries, like C libraries and stuff, and then trying to link them into Ruby is kind of a pain, whereas the Cloud ML library is just an API call, something that we already know. And that's been great. 

FRANCESC: Cool. So I'm not-- as you know, I'm not a Rubyist. So can you tell us a little bit more about how is the experience of, like, if you were a Ruby developer that has done Ruby apps, let's say web apps, on other platforms or maybe locally, what is the experience of moving that to the Cloud? 

AJA: So this is the part I like the best. Once you figure out the database piece, If you're going to use Flex, you can run your database in Cloud SQL. You can run it as a separate instance. You can use Datastore. Once you figure out the database piece-- and doing that's actually pretty straightforward, you just go in and edit the standard file that you would edit to change to your production database configuration, or just edit your production database configuration-- you type gcloud app deploy. And it goes. 

FRANCESC: Nice. 

AJA: And it asks, is this a Ruby app? And you say yes, this is in fact a Ruby app. And it goes. And the defaults work for the vast, vast majority of applications. 

And the other nice thing is that a lot of our libraries have been written by hand. And so there's a lot of stuff that just feels natural. My favorite example is our BigQuery library. So BigQuery is the database product. And if you go in to cocreate a new table in BigQuery using the Ruby library, you use a syntax that is nearly identical to the syntax you use to write migrations in Rails. 

MARK: Nice. 

AJA: It's the same kind of block format. And the first time I did it, I'm like, wait, I know this. It was that moment from Jurassic Park again. 

But we do that in other places. The Vision API-- one of the things in Ruby is there's always more than one way to do things. It's kind of anti-Python that way, although the communities are largely overlapping, and syntax looks similar a lot of the time. 

And the Vision API has four or five different methods to send out a request, even though there's only actually one vision endpoint on the API on Google's side. And that just feels natural, because I can ask it for landmarks, or I can ask it for faces, or I can ask it for labels. And it's sending a request. It's the same request out, but I can actually get the data that I want in that situation. So it's been fun. 

FRANCESC: If I remember correctly, you made a video not that long ago about how to make BigQuery tables with Ruby. 

AJA: Yeah, I've been working on a new video series as part of our Cloud Minute that's using Ruby. We did making a BigQuery table. We did uploading a picture to Cloud Storage. I used a lovely picture of a mountain goat from a hike I took recently. It was fantastic. 

And we've also been doing some videos with some of the community libraries. Fog is the multi-cloud provisioning and deployment type library for Ruby. It supports AWS. It supports Rackspace. It supports a lot of stuff. And there's several folks at Google now who are working on improving fog Google and have been doing demos with fog Google showing how you can use the tools that you're probably already using to interact with our platform, in addition to the platforms you might be using or the stuff you might be more familiar with. 

FRANCESC: Cool. I think that there's a question-- we went over it real quick. You mentioned the Datastore or Cloud SQL. In case people don't know what is the difference, could we talk a little bit about, in terms of a Rubyist, what is Datastore? 

AJA: So Datastore is our NoSQL database at Google. And to be honest, I don't know a ton of folks who are using NoSQL with Rails. I'm sure there are some. In fact, we talked about that a couple minutes ago, before we started. And several of us have done that at various points. 

But Cloud SQL is our host at MySQL. And it's just a drop-in replacement. You can use the exact same MySQL gem that you use. And you just point it at the correct host IP that we give you. And it just works. It's great. 

And then if you want, a lot of Rubyists like Postgres. I like Postgres. And if you want to run Postgres, you can totally run Postgres on a Google Compute Engine instance and manage your own Postgres instance if you want. 

MARK: I know we also have Deployment Manager through the Cloud Launcher. You can deploy Postgres that way, and it works out quite nicely. 

FRANCESC: Cool, so you basically just click once, deploy, that's it. 

MARK: That's it. 

FRANCESC: Nice. 

MARK: So I know you do a lot of stuff on the monitoring side. Are there any hooks there for monitoring of Rails apps or Ruby apps, as well? 

AJA: So we've got a team. We've actually built a really fun Ruby team in Seattle. There's four or five of us who work on Ruby on a regular basis, including several devs who are working full-time now. And one of the things they're doing is they're making Stackdriver integration libraries for Rails and Ruby. I believe the logging library went out last week. And the rest of them are in progress. 

And this is all, again, on GitHub under the Google Cloud Platform gcloud Ruby project. So you can see our progress. You can see what issues have been entered. Obviously, we're going to have some integrations with other parts of the system, gRPC libraries and things like that. And so if there's particular issues you're running into, you can see if someone else has reported it and how close we are to fixing it. 

FRANCESC: So you've mentioned a little bit about the things that you've been working on and what's coming up real soon. What else is coming up? What are you excited about that other Rubyists might be excited about on Google Cloud Platform? 

AJA: So I'm actually really excited about the fact that we just recently had the App Engine Flex beta 2, and that App Engine Flex is getting very, very stable and starting to look really good. In Ruby, we have some platform as a service options, but always having more is great. As I say pretty frequently, when people ask me to compare various providers, they're all different, but competition helps everyone, because everyone's pushing the envelope, making the experience better, and setting a higher bar for how developers get to interact with these tools. So I'm really excited about App Engine Flex. 

I'm also excited that we're doing some automatic code generated libraries for some of the APIs that we haven't gotten around to yet, haven't gotten around to doing the hand-coding on. And I'm happy those are happening, because that means there's more and more stuff that I can just interact with from Ruby. I don't have to worry about creating my own HTTP request to hit the REST endpoints, for example. 

And I'm also just happy that we're coming out with more examples. The team here is working on lots of cool tutorials on how to hook pieces together. We're doing more videos. We're doing blog posts. We had a post on the "Open Source Blog" earlier this year. 

And we're just trying to get more stuff out there and to get part of the community. And I'm really excited that as a longtime Rubyist, that I can say, hey, check it out. We've got stuff for you. 

And there's stuff coming from the community. A couple months ago, there was an announcement that someone had done Ruby TensorFlow bindings. And that came completely from the community. And I was super excited about that. 

FRANCESC: That is really cool. 

AJA: And I love my community so much that I'm glad that there's stuff that they can use. I'm like, we have all these cool things. And you can use them. It's fantastic. 

MARK: That's great. You touched on, I think, an interesting point there. You were talking about comparing providers. I think the elephant in the room a little, the traditional-- I guess that might be the right word-- people tend to go towards Heroku. Why might they be interested in going to Google Cloud Platform instead? 

AJA: So yeah, I don't know if traditional's the right thing. But I work with a lot of boot camp students. And a lot of them learn Rails, because the convention over configuration thing makes it easier to learn for people who don't have a ton of experience, because there is a right way. And they often use Heroku for their early deployments. 

So Heroku's great. I've got a lot of friends who work there. It's got a lot of great things about it. I think that our App Engine Flex and Heroku are slightly different in some ways. 

App Engine Flex gives you a lot of options about database layer, for example. You have to pick a database layer. And it also is based on container image. So you can actually see the whole way down the container images available to the public. You can see the whole way down what we're doing. 

Now, Heroku's got a lot of integrations. They've been around for a long time. So there's a lot of people who like their integrations. But we also have integrations with things like Stackdriver to do the monitoring. And we have integrations with our ML APIs. We have integrations with Datastore, for example, if we want to know SQL solution. 

And so I always say this when people ask me to compare providers. I get asked a lot. It really depends on your use case and stuff. But you can generally figure it out. Also, our pricing model is different. And so that's another thing that people should consider, is looking at how the pricing differs based on what they think their use case is going to be. 

MARK: I know you were talking about, when we were talking before we started recording, about basically the flexibility that having everything running on Docker containers also gives you. 

AJA: Yeah, so that's the other thing is I like to talk about-- and I have a talk half-written but haven't gotten accepted anywhere-- it's growing your application on Google Cloud Platform. And you start with a bare minimum viable deployment. And you do it on Flex, because it's easy. And you can iterate as quickly as you need to. And you don't have to worry about the scaling, because we'll take care of that for you. 

But then you realize you want to move to a microservices architecture. Or perhaps you want to do something interesting with your database. And so you need to move part of it off. And so perhaps you move parts of it to Kubernetes, because you have the container image there. And you can take it, and you can strip out the stuff you don't want from our base container image and then build your own. Or you can look at how we did it and build your own based on that. 

And then eventually, maybe there's pieces that you just really need to do on a plain old VM. Maybe you're doing some crazy image processing or video transcoding or something else that's super compute intensive. And it just makes more sense cost-wise or performance-wise for you to do it straight up on Google Compute Engine. 

And since you're already on our platform, your data's already there, you've got the project set up, you've got the permissions set up, it's really easy to grow as your application grows on our platform in whatever way you need to. And I think that's a huge advantage of using a platform like ours, where there's so many products and so many ways to do things, is that we can meet you where you're at, wherever you are in your product lifecycle. 

FRANCESC: So we interviewed, some time ago, Russell Smith from Rainforest QA. And I think there was this interesting thing, where he was-- so Rainforest QA runs a lot of things on Heroku. But they also access BigQuery and other technologies that are on Google Cloud. I think that that's also pretty interesting things. Like, even if you're running on Heroku, can you use things like, I don't know, like Stackdriver? 

AJA: Stackdriver doesn't necessarily make as much sense, because Heroku's a manage solution. But you could definitely use our ML APIs very easily. You could use our-- BigQuery is actually really popular. It's one of the things that I think got the fastest adoption in the Ruby community. And I know a number of companies that run Rails that use BigQuery. 

And you can totally use that from anywhere. You just have to put your data in it. And streaming it, it's a gem. You install it like any other gem. You create the object, and you send stuff to it. It's fantastic. It's two or three lines of code. I love simple. I love easy. 

So yeah, even if you're running in another place, you can still use our tools where they make sense. If you're running on AWS, you can use all the Stackdriver tools, because Stackdriver's cross-Cloud. And use the pieces that make sense. We've got a huge platform. Find the pieces that make sense for you, based on your workload. 

FRANCESC: And where's the best place to find information about all of this? 

AJA: So from the Ruby side, cloud.google.com/ruby. We have a landing page. We've got tutorials, quick starts, links to the libraries, including links to our open source libraries, there. And that's a great place to go. You can also go to the general Cloud page just to find out about our products. 

And since I know the Ruby community and the DevOps community actually have a fairly large overlap, you can also go to some of our monitoring and logging pages to find out about DevOps community. And the reason for that overlap, for people who don't know, is that Puppet and Chef are written-- their DSL's on top of Ruby. And so there's a lot of folks who worked on those tools or have contributed to those tools who are also Rubyists. 

MARK: We do also have a Ruby channel in the Google Cloud Platform Slack community. 

AJA: Yes, we do. And some of the developers who work on our libraries monitor it. I was actually checking it today, and Mike was answering questions someone had. 

MARK: Excellent. Now, I know, also, you just came back from RubyConf. 

AJA: Yeah, I did. RubyConf this year was last week. And it was really good. It's one of my favorite conferences. And one of the most exciting parts was hearing Matt, the creator of Ruby, speak. And he was talking about how Ruby is becoming a mature language. 

I mean, I got involved back when it was I think Ruby 1.8. And I've been through 1.9. And we're on to 2.3 at this point. And the planning now is going on for Ruby 3. 

And there's a lot of talk about how to support concurrency well. There's a lot of talk about improving performance, making Ruby three times faster. And I'm glad that those conversations are happening. 

And they're raising some interesting questions about language design, because one of Ruby's guiding principles has always been it needs to be easy and delightful for the programmer. But that means that there's some stuff that maybe isn't so easy or delightful for the actual computer, for example, all the metaprogramming that's really easy to do in Ruby. I was talking to someone today about the fact that in Rails, you might be debugging methods that don't exist in the source, because they're dynamically created at runtime. And that makes some things very hard. And they're still talking about that. And I'm really excited where that's going. 

I was also excited to see just who was there. There was a lot of folks there talking about application monitoring, about hosting. A lot of interesting things happening. There was a great talk on logic programming in Ruby, some fantastic talks about nurturing open source communities. 

And I helped out with the Ruby and hardware track, which was just super cool. Lots of cool IoT stuff, including some stuff related to our Machine Learning Platform, where they were doing voice recognition and processing. And Vision, someone was trying to-- so a little girl and her dad, Cora Clark and Jason Clark, we did a presentation where they had created a chicken detector for their chicken coop using a variety of pieces. And it took a picture every two minutes, so they could figure out which of their chickens were laying eggs and which of their chickens were not. 

FRANCESC: That is awesome. 

AJA: Yeah. And all that stuff, all these places, all these IoT projects and stuff, are also places that some of our libraries could come into play, depending on what you need to do. 

MARK: OK, so we are wrapping up here. We're running out of time just a little bit. Is there anything we haven't mentioned, or anything you want to plug, or event you're going to be at, or anything really super cool and exciting you want to mention that we haven't had a chance to? 

AJA: I think I've mentioned all the really super cool and exciting stuff. But if there are any Rubyists out there listening to the podcast, if you're going to be at RailsConf, I promise we will be there. We were there last year. We had a great time. We're going to be coming back next year. And you should totally come up and say hi to us. And if you ever see me at an event, I will give you a dinosaur sticker. 

FRANCESC: Yes. 

MARK: I got dinosaur sticker. It is pretty awesome. 

FRANCESC: They're pretty awesome, I've got to say. 

MARK: All right, great. Aja, thank you so much for joining us. We really appreciate you coming and spending time with us in this wonderful gray room of podcastness. 

FRANCESC: Yep, thank you so much. 

AJA: Thank you guys for having me. This is always fun. 

FRANCESC: So thanks so much to Aja for taking the time to talk to us about Ruby and all the cool things that are happening about the language and the open source community on Google Cloud Platform. And now we are going to talk about Kubernetes. We have our question of the week, which is about-- OK, so imagine I have a heterogeneous cluster. So not all the machines are exactly the same. Not all the nodes are exactly the same. 

And let's say that, for instance, some of the nodes have SSD, and the others do not. And I want to run some of the containers that require-- or that run better, let's say, on SSDs. So you want to say, hey, my cluster is very big, and I have a lot of nodes. But whenever it is possible, run these kind of parts on these kind of nodes. 

MARK: So it's something that's very disk I/O heavy. Maybe it's doing some data processing. Maybe you're running a database, something like that. 

FRANCESC: Let's imagine that you have GPUs, for instance. 

MARK: That would work, too. 

FRANCESC: You have GPUs, and you want to do some rendering. So you want to make sure that the containers running rendering run on a node with a GPU. 

MARK: That makes sense. 

FRANCESC: How would you do that with Kubernetes. 

MARK: So it's pretty cool. So if anyone's done anything with Kubernetes, you're probably familiar with how pods have labels. And services are built on top of those to say, OK, give me a selector that I'm going to-- so with a service, I'm going to have a selector that says I want to expose all the pods that have these labels. So you've get these arbitrary key value pairs that you can attach. 

So Kubernetes kind of extends that whole idea of key value pairs with labels. But rather than having them on the pods, you're able to add labels to nodes. 

FRANCESC: Interesting. 

MARK: So you could have, like, type GPU or type SSD on nodes within your cluster. And you can add those as you see fit. What's neat, then, is you have this thing where you can have a node selector in part of your pod specification , when you do your deployment or your replica set. And you can add a node selector that says, hey, I want these only to run on these nodes that have these key value pairs, these labels. So you have a selector. 

FRANCESC: Cool. Yeah, I'm looking at the documentation now. It actually looks pretty simple. It's basically saying, you know, I just want these. So it's really in the metadata of the pod when you're describing it, where you're going to say something like, I want the node affinity's going to be something like run this on something that has these values. So in our case, it's in a node that has one of the labels is something like GPU. 

MARK: GPU, something like that. You said an interesting word, as well. The basic version of node selector is very simple. It's just this combination of labels. And it's very simple. It's just an and Boolean. 

But there is now a feature of affinity, which you said before, and also anti-affinity, which gives you a lot more control and a lot more complex label selection capabilities, as well. So you can do affinity, like I want this running on these machines. You can do preferred affinity, like it would be really great if it did, but if it doesn't, that's fine. And then you can do the anti version of that, too, so I don't want these running here. Don't put these on these machines. 

FRANCESC: Or I'd rather not have this on these machines. But if there's any other choice, whatever. 

MARK: Exactly. So that's an alpha feature. It's coming down the pipeline. But it looks like yeah, you've got a lot of control, especially if you're running heterogeneous clusters. 

FRANCESC: Very cool. Well, I think that answers the question. 

MARK: Cool. 

FRANCESC: So why don't we talk real quick about what are you going to be up to? 

MARK: I'm not going anywhere. So yeah, Thanksgiving, that's coming up. So we have some time off. We've got our team off-site. So yeah, things are ramping down for December, just writing some content and playing with some code and building some fun things that I'll probably talk about a little bit later. 

FRANCESC: Nice. 

MARK: And yourself? 

FRANCESC: Well, I was planning on working on "JustForFunc," but both of my laptops died yesterday. So trying to fix that, and in the meanwhile, enjoying some holidays. So yeah, very excited about our off-site in two weeks in Los Angeles. I don't know if we're going to-- maybe we should do an episode about that. 

MARK: Yeah. We'll do some recordings. We'll see how they come out. 

FRANCESC: Cool. 

MARK: Awesome. Well, thank you so much for joining me yet again for a wonderful episode, Francesc. 

FRANCESC: Thank you, Mark. And thank you all for listening. And see you all next week. 

MARK: See you next week.
{{< /transcript >}}