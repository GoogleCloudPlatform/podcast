+++
audioDuration = "00:30:04"
audioFile = "Google.Cloud.Platform.Podcast.Episode.190.mp3"
audioSize = 43702414
categories = ["ML", "AI", "Machine Learning", "Deep Learning"]
date = "2019-08-14"
description = "On the show today, we speak with Developer Advocate and fellow Googler, Sherol Chen about machine learning and AI."
draft = false
episodeNumber = 190
hosts = ["Jon Foust", "Aja Hammerly"]
title = "ML and AI with Sherol Chen"
image="/post/episode-190-ml-ai-with-sherol-chen/images/hero/hero-EP-190.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/cqe8lt/episode_190_ml_and_ai_with_sherol_chen/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

On the show today, we speak with Developer Advocate and fellow Googler, [Sherol Chen](https://twitter.com/ffpaladin) about machine learning and AI. [Jon Foust](https://twitter.com/syntxerror1) and [Aja Hammerly](https://twitter.com/the_thagomizer) learn about the history and impact of AI and ML on technology and gaming. What does it mean to be human? What can machines do better than humans, and what can humans do better than machines? These are the large questions that we aim to solve in order to understand and use AI. Sherol goes on to explain the types of deep learning machines can achieve, from neural networks to decision trees.

Sherol also went into depth about the potential social impact of AI as it assists doctors parsing through medical records and plans agricultural endeavors to maximize food production and safety. Sherol also elaborates on the ethical responsibilities we must realize when developing AI projects. 

For developers looking to build a new AI project, Sherol outlines the pros and cons of using existing tools like Cloud Speech-to-Text, AutoML and AutoML Tables.

<!--more-->

##### Sherol Chen

[Sherol](https://twitter.com/ffpaladin) advocates for Machine Learning for Google Cloud, and works in Research at Google Brain for Machine Learning in Music and Creativity for the Magenta team. She's taught Artificial Intelligence at Stanford and around the world in six different countries. Her PhD work is in Computer Science, researching storytelling and Artificial Intelligence at the Expressive Intelligence Studio.

##### Cool things of the week

* AMD EPYC processors come to Google—and to Google Cloud [blog](https://cloud.google.com/blog/products/compute/amd-epyc-processors-come-to-google-and-to-google-cloud)
* Kaggle Petfinder Dataset [site](https://www.kaggle.com/c/petfinder-adoption-prediction/data)
* Streaming data from Cloud Storage into BigQuery using Cloud Functions [blog](https://cloud.google.com/blog/products/storage-data-transfer/streaming-data-from-cloud-storage-into-bigquery-using-cloud-functions)
* App Engine Standard Ruby [site](https://cloud.google.com/appengine/docs/standard/)
     * Thagomizer [blog](http://thagomizer.com)

##### Interview

* AutoML Tables [site](https://cloud.google.com/automl-tables/)
* AutoML Tables Promo Video [video](https://www.youtube.com/watch?v=yPVc797kMyM&t=2s)
* Can Machines Think? [article](https://www.aaai.org/ojs/index.php/aimagazine/article/view/993/911)
* AI Impact Challenge [site](https://ai.google/social-good/impact-challenge/)
* NeurIPS [site](https://neurips.cc)
* ICLR [site](https://iclr.cc)
* ICML [site](https://icml.cc)
* Machine Learning Crash Course [site](https://developers.google.com/machine-learning/crash-course/)
* TensorFlow [site](https://www.tensorflow.org)
* Project Magenta [site](https://ai.google/research/teams/brain/magenta/)
* Cloud Speech-to-Text [site](https://cloud.google.com/speech-to-text/)
* Cloud AutoML [site](https://cloud.google.com/automl/)
* Sherol's Blog [blog](http://elizaeffect.com)

##### Question of the week

[You mentioned that you can run App Engine + Rails, how do you handle migrations?](https://github.com/GoogleCloudPlatform/appengine-ruby)

##### Where can you find us next?

Jon will be at [PAX Dev](https://dev.paxsite.com) and [PAX West](https://west.paxsite.com), the internal game summit at Google in Sunnyvale, and taking some personal time to travel to Montreal.

Aja will be hanging around at home, on the internet, and at [Seattle.rb](http://www.seattlerb.org).


##### Sound Effect Attribution

* "Coins 1.wav" by ProjectsU012 of [Freesound.org](https://Freesound.org)
* "Wedding Bells.wav" by Maurice_J_K of [Freesound.org](https://Freesound.org)
* "Small Group Laugh.wav" by Tim.Kahn of [Freesound.org](https://Freesound.org)

{{< transcript "[MUSIC PLAYING] AJA HAMMERLY: Hi, and welcome to episode number 190 of the weekly Google Cloud Podcast. I'm Aja, and I'm here with my colleague Jon. Hey, Jon." >}}

JON: How's it going? 

AJA HAMMERLY: Pretty good. So what do we have in store this week? 

JON: So this week, we get to sit down with Sherol Chen to talk about ML and AI and what it means to her, and really, really amazing ML and AI trends. 

AJA HAMMERLY: That sounds awesome. And if I remember from the notes correctly, we've got a question of the week about one of my personal passions, Ruby. 

But first, let's spend some time on Cool Thing of the Week. 

[MUSIC PLAYING] 

What do you have for us this week, Jon? 

JON: There are new AMD processes coming to Google and Google Cloud. And there are a lot of general purpose workloads that will see a pretty good performance improvement. Around the same price point, you're going to have a higher base frequency, which is really great, better compute workloads for memory bandwidth. And they're going to be roughly around a 60% platform memory bandwidth increase, which is kind of amazing. 

AJA HAMMERLY: That sounds super cool. So one of my cool things for the week is that Sara Robinson, on our team, turned me onto this Kaggle data set that pulls data from Pet Finder, the adoption website. And I don't know what she's doing with it, but I found the data set and I thought it was super cool. And it looks like there's a Kaggle competition around predicting how long pets are going to stay in the shelter, if I remember reading it correctly. 

But it has pictures of adorable animals that were looking for homes at some point in the last couple years. So that's awesome, because adorable animals are always awesome. So that is my cool thing of the week number one. 

JON: Awesome. I'm pretty sure everybody's happy to see cute animals. And I know Sara's been really, really having a lot of fun with that data set. 

AJA HAMMERLY: That's awesome. So do you have any more cool things for us this week, Jon? 

JON: Yes. So one thing is, now you can stream data from Cloud Storage into BigQuery using Cloud Functions. And this is really amazing because you get really high availability in auto scaling. And this creates almost real time access to your data using Cloud Storage, which is really amazing because you get your information faster, and it responds more quickly to events because of Cloud Function. So it's kind of cool. 

AJA HAMMERLY: Yay, Cloud Functions. I was a big skeptic on Functions as a service for quite a while. But I have definitely come to see the value and how useful it is. So that's awesome. 

JON: And do you have anything else for the cool things of the week? 

AJA HAMMERLY: Yeah, I actually have one more thing. And this is, again, hitting my passion project [INAUDIBLE] Ruby. We now have App Engine Standard for Ruby. I believe by the time this episode goes out, it will be GA. But it might still be beta. We're still trying to sort out when the GA date will be. 

But App Engine Standard-- we've had App Engine Flex for a while. App Engine Standard gives us faster deploy times, and it gives us scale to zero and a bunch of other stuff. I'm going to have a blog post on my blog, thagomizer.com, coming out later this week, hopefully-- maybe early next week-- talking about how to use it. 

But this is a huge, huge thing for my Ruby friends, so that they can try something on GCP that really works and handles a lot of the hosting and stuff for you. I've tested it out with an app I have that involves file uploads to Cloud Storage, uses Cloud SQL. And it works really, really well out of the box as long as you understand a couple of the weirdnesses-- we'll go with weirdnesses-- about using GCP. And I'll get to one of those later, in the Question of the Week. 

[LAUGHTER] 

But I think it's time to go talk to Sherol now. 

JON: Sounds good. 

AJA HAMMERLY: Let's hear what Sherol has to say about machine learning and AI. 

[MUSIC PLAYING] 

Hi, it's Aja. And I'm here with Jon today. And our guest today is Sherol. Hey, Sherol. Can you introduce yourself? 

SHEROL CHEN: Hey, everybody. I'm Sherol. I work at Google with all of you. 

[LAUGHTER] 

JON: That's awesome. So can you tell us what you do at Google? 

SHEROL CHEN: Yeah. So I'm an advocate. I work in machine learning. Specifically, I'm working on an awesome product called AutoML Tables. And what it really does is, it takes the concept of machine learning and really breaks it down to what data you have and what kind of predictions you want to make. And these are just really interesting tools that keep emerging, it seems like, month after month. So I've been in machine learning and AI for quite some time and served on a bunch of different teams and roles in my time at Google. 

JON: That's awesome. And you've done some really, really interesting things, like I see that you've taught a class. So you want to talk about that a little bit and more about your background a little bit? 

SHEROL CHEN: Yeah. So I would say that I was born on a cold winter night, or something like that. 

[LAUGHTER] 

I think a really defining moment for me was when I first started playing video games. And I had this hero's journey experience that really got me through the ups and downs of life and led me into pursuing technology. Like, it really stirred a curiosity in me as to, how do we utilize these tools? 

And so my background really took off, I think, in undergrad, where you were around all of these professors and researchers. And I took a particular interest in artificial intelligence, specifically because I felt like games had improved so much in graphics but not so much in the logic behind the game. And then I went on and did my PhD with leading expert in AI for storytelling, Michael Mateas. 

And from there, I thought I would be in academia for a good chunk of my life. And I did a lot of teaching in the midst of going through grad school. But then I also had an opportunity to work at Google as a software engineer and saw like a whole new world opened up and decided to come to Google. 

And I ended up in the right place at the right time. Like, I was at Google Brain when Sundar announced that we were going AI first. When I was at Stanford teaching, it was a time when a lot of people were interested in AI. So I was putting together the curriculum that was going to get used around the world. It just is something that I've always felt an affinity for. 

AJA HAMMERLY: Wow. That is super cool. Did I hear right? You got-- partly got into AI because you thought that NPCs in video games should be smarter? 

SHEROL CHEN: Yes. Absolutely. If you just looked at "Final Fantasy I" and then like "Final Fantasy XV," you'd see this huge difference in the feel and the environment and the sound and scene. But when you interact-- I just remember, I think for me it was "Final Fantasy X," and you would look at the maps of the world, and it's like a tube. You're just going down a pipe of point to point to point to point. I mean, on your way there, you're-- it's fantastical and amazing. But what about the actual universe itself? You know? 

JON: Awesome. 

AJA HAMMERLY: I think a lot of our listeners probably know about AI and have a good idea what it is. But a lot of people define it differently. So what do you consider AI, Sherol, so we can all be working from the same set of definitions today? 

SHEROL CHEN: That is definitely a question that comes up a lot. I've been interested and studying and working AI for the last 10 years, so I've seen the shift in how people think about AI. I would say that it really stems from the '50s and '60s. That definition is the one that I feel like is historical and has meaning. 

And there was a-- that Dartmouth summer school where the term AI was even coined. So I think that there's definitely historical meaning that I think is valuable to consider. I also feel like Alan Turing's paper he wrote in the early '50s about can machines think was also posing these really important thought experiments as to what we're-- what do we mean when we say intelligence? 

Now, I think when I've taught, whether it's an 11-year-old or a grad student AI, the real question that you can really relate anybody to is, what does it mean to be human? Or a more specific question is, what are things that machines do better than humans, and what are the things that humans do better than machines? And that has always been a standard of how we develop and measure artificial intelligence. 

So then when you think about things that humans do, we can see, smell, hear, think. We have language. We're creative. We're visual. All of these things being captured by technology creates these different areas of research, whether we're talking robotics or natural language or machine learning. 

And machine learning has really taken center stage in the last couple years. I think it's really the move that made Sundar announce that we were going AI first, because of all the advancements that we were able to do. And that happened as a result of all of the increased ability to compute the amount of data that we had and just the algorithms working better. 

So AI has a historical meaningfulness. It also has different depending on the context that you're looking at. For me, my interest for AI was believability and expressivity-- so how we use AI to extend humans' ability to communicate and express themselves in story. And I think machine learning and deep learning has been, in the last couple years, the big emphasis of what has shown to be more effective than it ever had been before. 

So if you're talking about AI, I think it's worth reading the history and understanding where it comes from. I think it's really important to not just think AI as being something really cool, but really understand the problems that AI is trying to solve, in which case you'll get a different angle of what AI is. And finally, if you're thinking about AI and what the buzz is about today, it's about deep learning and machine learning, because of the efficacy of these new advancements in technology. 

AJA HAMMERLY: So I think I know the answer to this, but I'm not confident. So can you tell me what deep learning is? 

SHEROL CHEN: Yes. So machine learning is something-- Alan Turing, back in the 1950s, he said machine learning-- can machines think? Can machines actually acquire knowledge on their own? That's some of the earliest published concepts around machine learning. 

I think one of the earliest programs that was actually made was actually-- a lot of these early AI programmers were like psychologists, or they were in these interdisciplinary roles of technology and psychology. And I believe that the first machine learning program was actually a checkers program, where somebody was wondering, how could I build a checkers program that could beat me at checkers? 

And so it would apply some sort of reinforcement learning to be able to figure out how to win at checkers. That actually happened not that much-- it must have been a decade later or something which that happened. So it wasn't something that was in our recent last five to 10 years. 

Now, the problem is that there's been a lot of randomness and inpredictability of having the machine just process information on its own without the guidance and the formalities that we lay out, like the rule-based systems that we typically use. I think hand-in-hand, there's the intuition of, oh, we can guide the logic of how the machine's going to break down what's the best decision given a particular situation. Like, there's all these different states, and this clearly is the more ideal state, and feed all the information for that. 

So that's machine learning. And again, not everybody agrees this is the way it works. But there's AI, and then within AI, a part of intelligence is ability to learn, for which machine learning is just the computer acquiring its own understanding of some sort of process or decision. 

So with deep learning and machine learning, there is this concept of neural networks. And neural networks are not the only way-- this idea of a computational neuron is not the only way machines can learn. There's other ways-- decision tree learning, for example. But with neural networks, you're basically balancing a bunch of weights. You're given information, and it goes through these mathematical calculations in neurons that balance a bunch of weights to create this model or this mathematical representation of how given input A, you get output B. 

How it gets deep is that it's very limited if you stick to these purely [? arithmetic ?] or linear operations. Deep learning really introduces the ability for the computer to remove and hide some of that information and pick and choose what it's going to do. And it introduces an even bigger layer of obscurity. But it gives the machine more power. What it does come at the cost of is understandability of what's actually happening when it makes that decision. 

There's AI, there's machine learning, and then there's deep learning. And then within that is neural networks. And then the hidden layers are the ones that make it a deep learning system. 

JON: Awesome. You said something really interesting that I wanted to ask about. You mentioned that early on, AI was pretty much psychiatrists and someone in computer science, like the intermediary track. But I'm curious, for AI and ML, where is that line drawn between what decisions a human makes and the type of models that you have to actually build and what the machine actually does? 

SHEROL CHEN: I think that humans are imperfect. So when I ask the question in a classroom, what are things that humans do better than machines? What are the things that machines do better than humans? And then a common debate is driving. 

JON: Hm. 

SHEROL CHEN: So who's going to be a better driver, or what is going to be a better driver? Or is it going to be the human or is it going to be the computer? And you're kind of torn. There's a lot of things that humans can do that we take for granted. But there are also just clear weaknesses that we have, like when we're tired, when we're inebriated. 

There's different things that prevent us from functioning at full capacity. And so a lot of our traffic laws are built around this idea that you'd have all your correct sensory functions in order. When we think about how we create policies for traffic laws, for example, they exist-- you need to be able to see, for example, to be able to drive a car. 

But there is some margin of, well, you don't have to have exact, perfect, immaculate, 20/20 vision. You could have a little bit less than that, let's say. And then there's some amount less than that. And all of that needs to be researched and considered to be able to protect the safety of society as a whole. 

But I don't think that's an easy question to answer. Because when I talk about self-driving cars-- if we talk about it in Silicon Valley or the Bay Area, we're thinking highway 280 routes, like wide and open and the lines are very clear. But I've taught in India before. And when I show them the video of a self-driving car in California-- yeah, I mean, that does seem like terrain that a machine can navigate. If you show them the streets of some of the places in India, I just don't even know what kind of input-- you'd just have to have a very fast reactionary state of processing. 

It's a complicated system. But I don't think that it's anything new. I don't think that how society has functioned up to now-- we've always had new technologies. Like, how did we introduce the car? How did we introduce the printing press? All of these things have required us to adjust the way we understand and see the world. 

JON: That's super insightful. I have another question. You mentioned self-driving cars. And we started talking about robotics. But what about the rest of technology, such as education and medicine, potentially? What impact would AI and ML have on that? 

SHEROL CHEN: So I think that that word, "impact," is very appropriate. I was recently asked to be a judge for the Google's AI Impact Challenge, where a lot of grant money was awarded to 20 recipients. And they all came up with proposals on what kind of impact AI could have, social good impact, in the world. 

And one of the things you'd brought up, medical-- a lot of these grants were awarded to medical use cases, looking at being able to parse through medical records, which has also evolved. We have all of this data. How do we use it? How do we use it to do preventative things? How do we use it to help not just humans, but animals, like agriculture technology. A lot of people in areas where they're focusing on food and plant livelihood are able to now use technology to be able to figure out how to best cultivate resource for maximizing food and health and safety and things like that. 

And the other thing is that now that we have Android phones, we have the ability to do a lot of things with the camera. And we have on-device. We can build models and train them on device. We can take this relatively inexpensive medical device through the phone and go to areas in the world where you can diagnose infections and be able to prescribe the right antibiotics or medicines. 

So these are things that you would be able to multiply the abilities of these high in-demand skill sets like medical, but also other things like the environment or agriculture or social services like education-- and the ability to have coverage in areas that we didn't have before. 

JON: So you mentioned the AI Impact Challenge. I happened to see-- I'm not sure which year this challenge has been going on, but they announced the winners at Google I/O, which was really awesome. I think you mentioned that you had something to do with that-- you were a judge. 

But I'm curious, when you think about impact and AI, what about the ethical parts of AI and ML? Because I would imagine that some of these contestants or participants in the challenge would have to think about these things when they're actually building out any of their solutions to real world problems. So I'm just curious, what do you have to say about using AI and ML ethically? 

SHEROL CHEN: That was definitely one of the considerations when reviewing. And it's like, often you get asked, whether you're speaking at a conference or at an event-- that people will ask, how can I use AI? We work with enterprise customers a lot, and they're using AI to help better their business or to help make better choices in directions that they'd like to take. So definitely, AI is a powerful tool to be used in these processes. 

When I was looking at these applicants, a lot of the stuff came to mind-- I think especially when you're dealing with something medically related, yeah, it would great to get an awesome medical data set. But how do we protect the people that are being represented in this data? And then say you're using Google Assistant to check out how someone's mental state of being is. How do you make sure that that is not infringing on that person's privacy? 

So these are things that really do need to be not reactively thought about, but proactively thought about. And so that's something that-- I think it's arguable that we're kind of keeping up with the move of technology. But I also feel like there's always more that can be done in those regards. 

AJA HAMMERLY: So what kind of tools are available to people who want to start learning about AI or start trying to train models? And what kinds of tools do you work on at Google? 

SHEROL CHEN: Of course, there's buzz around AI and people are like, oh, it's just the hype of the moment or something. But I think it's true that this technology is going to continue to improve and it's going to be a big part of society. And I think similar-- maybe not the exact same way as how the printing press changed baseline skill sets that people needed. 

I think if you look at reading literacy 100 years ago, it was probably like 90% of the world couldn't read. And now it's flipped. Now it's like, 90% of the world can read. So I think that if we could stay on top of what's going on in the world in technology, I think that's very important. 

So for me personally, I try to read about what's going on, what other businesses are doing, what other research groups are working on. You try to keep track of the big conferences like NeurIPS and ICLR and ICML. I tweet a lot, just a lot of the current interesting highlights of the moment in machine learning and AI. 

But outside of just keeping up as to what is being presented through conferences and media, I think a really good resource for learning the basics of it and just understanding it from a technical standpoint is the machine learning crash course. I've gone through it twice. One time I went through it in a guided classroom. And then I just went through it by myself and just looked at every unit and worked through a lot of the basics and fundamentals through that crash course. 

And it uses TensorFlow in Python. So you kind of have to have a baseline in that. But I thought it was one of the best, most up-to-date representation of what AI is being most used right now. 

Now, there's other things. Like, if you're more interested in exploring open source projects, there's a variety of open-source machine learning projects. TensorFlow is open source. Project Magenta, which is the team I was on at Brain, has a lot of creativity based-- so music, art, generation-based models. And so you could provide your own data sets. You can try to build your own front end for these tools. And, yeah, I think that would be in general type of tools that you would use. 

Now, if you're a developer and you're just like, how can I use machine learning, I think the-- it's a matter of what you're trying to do with it. But there's a whole range of types of tools, let's say. So you could have pretrained models. So as you would get from talking to Google Assistant or Siri or Alexa, a lot of the speech to text is ongoingly being worked on. 

And so that would be a use case that you wouldn't need to build from scratch. You could use Google's pretrained speech-to-text API, for example, to be able to parse that, or things like natural language, or things that-- general image recognition type use cases, like maybe sentiments, like whether someone's happy or sad in a photo. Those are things that are general enough that can be continually worked on by these bigger companies. 

And if you want something more custom-- so if you say you have your own data and you have a list of customers or you have a bunch of retail data, you want to be able to train your own custom model. That's where you use auto machine learning, which still lets you customize a lot more than you would with some of the pretrained APIs. But at the same time, you're not really doing much of the machine learning algorithms yourself. 

Finally would be just, you could also always code it up from scratch. So I think that there's a whole range of different tools that you can use to get a better understanding of machine learning. And I do think that, as we've seen-- as we've discussed and explaining with the AI Impact Challenge, I think having the right problem also really matters if you're getting serious into using machine learning for real world use cases. 

JON: So Sherol, we like to do this thing on our podcast where we ask our guests, what is something cool or awesome you've seen done with AI or ML that you've seen done recently? So you want to share that with us? 

SHEROL CHEN: So, yeah. That's a really good question. I would definitely say one of the biggest things to pay attention to is AutoML. So for auto machine learning, it's really a step in between having the API or having the model already pretrained and ready to go. You just give it inputs and it gives you outputs. It's kind of the middle ground between that and building everything from scratch. And so what you do with auto machine learning is, it's the ability to be able to take data that you have and create a custom prediction model that suits your needs specifically. 

Now, I definitely think, as we talked about earlier with ethics, that it is, in a sense, democratization. But I don't think it replaces really understanding how machine learning works. So while I think it's a great tool and it's going to give a lot of developers access to be able to use machine learning in their applications or tools that they want to build, I do think it's still important to understand how you would do it by yourself if you needed to. Because as much as we want it to be easy to use, at the end of the day, some of it is still being maintained by a third party. 

So I do think it's magical. I think it's great. I think that there's a lot of science behind that magic, and it's great to cultivate a curiosity to understand how it all works. 

But, yeah, I would say that the coolest thing right now is this ability to just see something like AutoML Tables. I worked on the promo video for it, and I showed some of my developer friends after it was out. And they were just like, on one hand, it's like, yeah, of course this should be a thing. Of course you should be able to just select a column in your spreadsheet and be able to predict the values based off of the other columns. On the other hand, it's like, wow, I can't believe this is really happening. Like, we're actually at this point where we can see this stuff. 

So, yeah, I think that-- I mean, there's so many other things going on right now. I think the AI Impact Challenge-- I would check out the 20 projects that got funded just to see what the latest-- and these are vetted by, like, Jeff Dean and a huge team of experts, as well. So there's so much. 

JON: So thanks, Sherol, for joining us today. And we're running out of time. But I wanted to know if there's anything that we missed or if you want to let our listeners know where you're going to be in the upcoming months. 

SHEROL CHEN: So, yeah, it was a great, great pleasure talking to you both. I love talking about artificial intelligence. It's a great passion of mine. And I think it's great to hear and discuss technology and the potential for where it's headed. 

If you want to follow me on Twitter, you can find me @ffpaladin. Twitter is-- FF Paladin is my Twitter handle. I also blog occasionally on ElizaEffect.com. So you can find me on that blog. 

If you want to check out that promo video for AutoML Tables, that was a project that I worked on, as well. So other than that, everything's basically on Twitter these days. So I would just use that. 

AJA HAMMERLY: Yeah. That is [? def-- ?] 

JON: Awesome. And is your Twitter handle, @ffpaladin, for Final Fantasy paladin, by any chance? 

SHEROL CHEN: Yeah. I'm going to date myself, but that was from the AIM days. That was my AIM name. And I just kept it. It became my Twitter handle. And it's been me ever since. 

JON: Well, that's going to do it for us today. Thank you for joining us, again, Sherol. And we'll see you on the next episode. Thanks, Aja. 

AJA HAMMERLY: Awesome talking to Sherol. 

JON: Sherol has a really big passion for ML and AI, which is something that we really, really love to see at Google. 

AJA HAMMERLY: Yeah. It's always great when we get to talk to folks about AI. It makes me happy. 

JON: Let's talk about our question of the week, Aja. 

[MUSIC PLAYING] 

You mentioned that you can run App Engine Standard and Rails. So how do you handle migrations? 

AJA HAMMERLY: So this is one of those things that comes up every time we deal with Ruby, because Ruby has a web framework-- there's multiple, but a lot of folks use Rails or use Rails like frameworks based on Rack. And we had to handle this when we originally did App Engine Flex. But you also run into similar stuff with Django. And someone on our team is [? working ?] how to solve that issue. 

But the answer to how you run migrations is with a gem we have called the App Engine gem. There'll be a link to it in the show notes. You install it like any other gem. And it basically gives you the ability to run rake tasks. Rake, for those who aren't familiar with the Ruby ecosystem, is like make, but for Ruby, so it starts with an R. 

And this allows you to run your arbitrary rake commands-- things like a rake db:migrate, rake db:create-- against your production environment. And it does it using Cloud Build. And it's really awesome, because it lets you use most of the same workflow that you're used to, but it does things in a secure and safe way. And it's fantastic. And it's pretty seamless. I've had really, really good luck with it when I've been using App Engine for applications and production. 

So that exists. And that answers the question. Probably the most common question we get about Rails plus GCP is, how do I handle migrations? And the answer is, the App Engine gem. And I want to thank my colleague Daniel Azuma for doing most of the development work on that. We wouldn't have it without his passion for Ruby and Rails. 

So that is our question of the week and my somewhat wandering answer about it. Now for my favorite part. Where's everyone going to be? Jon, I hear you have some stuff coming up. Want to tell us about that? 

JON: Yeah, sure. So I'll be flying to Seattle. Maybe I get to stop by in the office and hang out with you for a bit. But I'll be in Seattle for PAX. And it should be really fun-- PAX Dev and PAX West. I'll be talking at PAX Dev with Mark Mandel. And I'm really excited, because we've been working pretty hard on the demo for that talk. And it's going to be really fun. 

AJA HAMMERLY: Yay. 

JON: Fun being the keyword, considering that this is going to be a game demo. 

[VIDEO GAME DING] 

AJA HAMMERLY: Games. 

JON: I'll also be at the internal Google Games Summit, which is coming up in September. Pretty excited about it, because we get to hang out with a bunch of people who are really passionate about games and seeing if we can really make this games thing really happen at Google. After that, I will be traveling to Canada to hang out with my twin brother and celebrate his marriage before it happens. 

[WEDDING BELLS] 

AJA HAMMERLY: This sounds interesting and strategic and awesome. Are you going to have poutine? Get yourself some massively awesome fries while you're in Canada? 

JON: I've never had it, but a lot of people [INAUDIBLE] telling me about the food in Canada. So I'm going to check everything out as much as possible, because we have quite the itinerary planned. 

AJA HAMMERLY: Oh, I'm sure you do. 

JON: And Aja, where are you going to be? 

AJA HAMMERLY: I'm boring. I'm actually not boring, I just don't have a lot of travel planned right now. I'm focusing on spending some time at home and getting stuff sorted at work. 

So the best place to catch me if you want to see what I'm up to is catching me on the internets. If you happen to be local here in Seattle, I am usually at Seattle.rb every Tuesday, which is our local Ruby Brigade meetup. And I will probably be popping into various other meetups over the next couple weeks. And I will be sure to tweet about that. 

And if you want to catch me on the internets, I am @the_thagomizer on Twitter. And thagomizer.com on the internets is my blog. So, yeah, that's where I'm going to be. 

JON: Sounds fun. Well, I think that's going to wrap it up for this episode. And we would like to thank you all for listening. And we'd like to see you next week. 

AJA HAMMERLY: See you, Jon. 

JON: See you, Aja. 

[MUSIC PLAYING] 

SPEAKER 1: Pronoun is usually defined as used to indicate a person, thing, idea, state-- 

SHEROL CHEN: Oh my gosh. I don't know how to shut that off. AI's interfering with our interview right now. 

AJA HAMMERLY: Yeah. The meta level of having AI interfere with the AI interview. 

JON: That's a great tidbit right at the end of our episode. 

AJA HAMMERLY: It's apparently giving a grammar lesson today. 

SHEROL CHEN: I don't even know what it's-- 

SPEAKER 1: The adverb that is usually defined as-- 

[SLOW MOTION POWERING DOWN] 

SHEROL CHEN: All right. It has been disabled.