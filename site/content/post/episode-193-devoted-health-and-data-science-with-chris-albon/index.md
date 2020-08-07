+++
audioDuration = "00:56:51"
audioFile = "Google.Cloud.Platform.Podcast.Episode.193.mp3"
audioSize = 82145096
categories = ["Data Science", "Devoted Health", "Machine Learning"]
date = "2019-09-04"
description = "Michelle Casbon is back in the host seat with Mark Mirchandani this week as we talk data science with Devoted Health Director of Data Science, Chris Albon."
draft = false
episodeNumber = 193
hosts = ["Mark Mirchandani", "Michelle Casbon"]
title = "Devoted Health and Data Science with Chris Albon"
image="/post/episode-193-devoted-health-and-data-science-with-chris-albon/images/hero/hero-EP-193.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/czpbq2/episode_193_devoted_health_and_data_science_with/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Michelle Casbon](https://twitter.com/texasmichelle) is back in the host seat with [Mark Mirchandani](https://twitter.com/markmirch) this week as we talk data science with Devoted Health Director of Data Science, [Chris Albon](https://twitter.com/chrisalbon). Chris talks with us about what it takes to be a data scientist at Devoted Health and how Devoted Health and machine learning are advancing the healthcare field. Later, Chris talks about the future of Devoted Health and how they plan to grow. They're hiring!

At Devoted Health, they emphasize knowledge, supporting a culture of not just machine learning but people learning as well. Questions are encouraged and assumptions are discouraged in a field where a tiny mistake can change the care a person receives. Because of this, their team members not only have a strong data science background, they also learn the specific nuances of the healthcare system in America, combined with knowledge of the legal and privacy regulations in that space.

How did Chris go from Political Science Ph.D. to non-profit data science wizard? Listen in to find out his storied past.

<!--more-->

##### Chris Albon

[Chris Albon](https://twitter.com/chrisalbon) is the Director of Data Science at Devoted Health, using data science and machine learning to help fix America’s health care system. Previously, he was Chief Data Scientist at the Kenyan startup BRCK, cofounded the anti-fake news company New Knowledge, created the data science podcast Partially Derivative, led the data team at the humanitarian non-profit Ushahidi’s, and was the director of the low-resource technology governance project at FrontlineSMS. Chris also wrote Machine Learning For Python Cookbook (O’Reilly 2018) and created Machine Learning Flashcards.

He earned a Ph.D. in Political Science from the University of California, Davis researching the quantitative impact of civil wars on health care systems. Chris earned a B.A. from the University of Miami, where he triple majored in political science, international studies, and religious studies.

##### Cool things of the week

* How Itaú Unibanco built a CI/CD pipeline for ML using Kubeflow [blog](https://cloud.google.com/blog/products/ai-machine-learning/itau-unibanco-how-we-built-a-cicd-pipeline-for-machine-learning-with-online-training-in-kubeflow)
* Why TPUs are so high-performance
     * BFloat16: The secret to high performance on Cloud TPUs [blog](https://cloud.google.com/blog/products/ai-machine-learning/bfloat16-the-secret-to-high-performance-on-cloud-tpus)
     * TPU Codelabs [site](https://codelabs.developers.google.com/codelabs/keras-flowers-data/#0)
     * Benchmarking TPU, GPU, and CPU Platforms for Deep Learning [paper](https://arxiv.org/abs/1907.10701)
* Machine Learning Flashcards [site](https://machinelearningflashcards.com)

##### Interview

* Devoted Health [site](https://www.devoted.com)
* Devoted Health is hiring! [site](https://jobs.lever.co/devoted/d0758ba1-3bde-42c6-9981-b28f2041e461)
* Ushahidi [site](https://www.ushahidi.com)
* FrontlineSMS [site](http://www.frontlinesms.com)
* New Knowledge [site](http://www.newknowledge.io)
* Joel Grus: Fizz Buzz in TensorFlow [site](https://joelgrus.com/2016/05/23/fizz-buzz-in-tensorflow/)
* Snowflake [site](https://www.snowflake.com)
* Periscope Data [site](https://www.periscopedata.com)
* Airflow [site](https://airflow.apache.org/#)
* Kubernetes [site](https://kubernetes.io)
* Chris Albon's Website [site](https://chrisalbon.com)
* Partially Derivative [podcast](http://partiallyderivative.com)
* Partially Derivative Back Episodes [podcast](http://partiallyderivative.com/podcast/)

##### Question of the week

<div style="text-align: center">
  <img src="/post/episode-193-devoted-health-and-data-science-with-chris-albon/images/learn-in-machine-learning.png" style="margin: auto; max-width: 90%;">
   <p style="font-size:0.8em">Chris Albon<p>
</div>

To paraphrase: A computer program is said to learn if its performance at specific tasks improves with experience.

To find out more, including the definition of a partial derivative, buy a pack of Chris's flashcards. Who knows, they might help you land your next job.

##### Where can you find us next?

Michelle is planning the [ML for Developers track](https://qconsf.com/sf2019/track/machine-learning-without-phd) for [QCon SF](https://qconsf.com) on Nov. 13.

Mark is staying in San Francisco and just launched two Beyond Your Bill videos: [Organizing your GCP resources](https://www.youtube.com/watch?v=NOOhDq1JyIM&t=24s) and [Managing billing permissions](https://www.youtube.com/watch?v=TDHTcS2V4wI).

##### Sound Effect Attribution

* "Small Group Laugh 5" by Tim.Kahn of [Freesound.org](https://freesound.org)
* "Crowd Laugh" by Tom_Woysky of [Freesound.org](https://freesound.org)
* "Transformers Type SFX 2" by HykenFreak of [Freesound.org](https://freesound.org)
* "Approx 800 Laugh" by LoneMonk of [Freesound.org](https://freesound.org)
* "Bad Beep" by RicherLandTV of [Freesound.org](https://freesound.org)
* "C-ClassicalSuspense" by DuckSingle of [Freesound.org](https://freesound.org)

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to Episode 193 of the weekly Google Cloud Platform podcast. I'm Mark Mirchandani, and I'm here with my colleague Michelle. Hey, Michelle." >}}

MICHELLE: Hey, Mark. 

MARK: How are you today? 

MICHELLE: I'm great. How are you? 

MARK: I'm super excited about our upcoming interview. Today is a very data science-focused day, wouldn't you say? 

MICHELLE: That's right. Today we have Chris Albon with us. He's a podcast veteran. He is one of the co-founders and co-hosts of my personal favorite podcast, Partially Derivative. This was my favorite show from way back when. This was the original data science podcast. It is no longer running, and so I've been sort of teasing Chris, like, hey, you could revisit your podcast days and join us in the studio. And we finally got him in today. We're very excited. 

He's here to share with us many important nuggets. One of my favorite is what is the most important predictor of success in a data scientist? 

MARK: And I would think that the most important predictor of success for data science would be able to science all the data. 

MICHELLE: Of course. However, Chris has a different take, and it's not what you think. 

MARK: Apparently not because sciencing all the data may not be an easy thing to measure. Well, super excited to get into that. But before that, we also have our question of the week. What does the learn part of machine learning actually mean? 

MICHELLE: Are you asking me how machines learn? 

MARK: I mean, right, they're machines, right? And when I think of learning, I think of, like, studying and books-- and maybe textbooks are kind of out of date now, but I'm sure that people still use them, right? Like there are all these different concepts that I have from my education background. You can't take a book and smash it against a machine until it knows the stuff in there, right? 

[BANGING SOUND] 

That's not how machines learn. So how do they learn? 

MICHELLE: It's not by osmosis. This is actually a pretty difficult thing to describe, but we'll go over it during our question of the week. 

MARK: Before that, though, we have some really, really cool things. I know you've outlined some very fun data science-related stories here, so let's jump into it. 

MICHELLE: All right. So I have a couple of things that I want to share with our audience. The first one, I do a lot of talking about Kubeflow, and one of the most common questions I get is, but how, Michelle? How can you use Kubeflow to set up a CI/CD pipeline for your ML application? 

So we have a really cool article this week on our blog, and it talks about how Itau Unibanco in Brazil-- so they're one of the large banks in Brazil-- they give us a ton of details about how they built a CI/CD pipeline for ML using Kubeflow. So if you check out the blog post, they don't just talk about why they did it, but they give you architecture diagrams, and they talk about exactly which tools they used. So there's Jenkins in there somewhere. They're doing a lot of this in a hybrid cloud, multi-cloud setup. So if you want to see details, check that out. 

MARK: So it sounds like a fun way for people to not only see what they're doing, but also then to say, well, you know, I can use this to inspire my own CI/CD pipeline for whatever ML/Kubeflow projects I'm working on. 

MICHELLE: Yeah, that's right. I really like this example because there's nothing really specific to being part of a bank. I believe it's one of their virtual assistant tools that they use to speak with their customers. So all of these principles apply to pretty much any ML application. 

One other thing that I really liked is also from our blog. And this is an article about why TPUs are so high performance. So we've talked about-- I think I've shared a link to some code labs before that detail exactly why TPUs are so interesting and some of the math behind what makes them so powerful for very specific applications. 

And so this article, it's an explanation of bfloat16, which is kind of the secret of the high performance that you see with Cloud TPUs. So it goes into some of the math behind it and how TPUs take advantage of that. What I like about the article is the bfloat16 approach uses mixed precision, and that's suitable for certain types of machine learning algorithms, and it's not very well-suited to other ones. So this article details the performance that they saw using different approaches. 

And I also came across a paper that some researchers from Harvard published, and they did some benchmarks. So they looked at the type of problems that work best on CPUs versus GPUs versus TPUs. And they have a ton of details on which type of problem works best on TPUs utilizing the bfloat16 approach versus regular hardware accelerators, GPUs, something you'd see, maybe, from Nvidia versus regular CPUs, something that you can just get on Google Compute Engine. 

MARK: So it's a good way to highlight why, when you're thinking about machine learning, you know, there's certainly the aspect of building your code and having it run. And you know, of course you need to train these models. And a lot of that tends to be computationally expensive. And so when you use GPUs to kind of speed that up, you're also making a sacrifice because GPUs are really good at doing some things, but not necessarily all the things that a CPU can do. 

And it sounds like TPUs, or tensor processing units, are very much even further down that line of they're really, really good at a certain narrow set of things, and less good at other things. So I think some clarity on when to use which ones, and how you might focus on it and say, well, this is a great example of something we can kind of fine tune for a TPU, or maybe this is something we want to stay general and keep it just to TPUs, you can kind of make those decisions with more information about where the pros and cons are. 

MICHELLE: That's right. Yeah. And just like in any field, you want to make sure that you're using the right tool for the job. And this is one way to help you. How do you know if you're using the right algorithm? Let's take a step back. And if I know that for TPUs, I should be using a certain class of algorithms. But if I want to start writing those algorithms, where do I go to figure out what my options are? 

MARK: I don't know, but by the way you're looking at me, I feel like you have an answer to the question you just asked. 

MICHELLE: So my last cool thing of the week is machine learning flashcards. This is something that I came across a few years ago. And they are a set of just hundreds of popular algorithms, really sort of classic approaches in statistics. And this is a set of cards that explains each one of them. And they're really beautifully handwritten, hand-created by our special guests today, Chris Albon. 

And what I really like about them is that they give you very clear and concise definitions. So some of them explain the difference between supervised and unsupervised learning. There's also over fitting versus under fitting, linear versus logistic regression. So pretty common topics in machine learning. It gives you the statistical background for it and just a little refresher. It's not going to explain the whole concept for you, but if you've learned it before, it's a really good way to just refresh things. 

So some of the other cards that I really like, you get definitions for things like receiver operating characteristic. If you've ever wondered what the rock curve is, that's the acronym. That's what it stands for. He tells us all about Occam's Razor, Simpson's Paradox, explain softmax normalization, even the ReLU activation function, the rectified linear unit. So you've ever wondered about those, his flashcards can give you all the details. 

And I want to talk about my very favorite flash card. If you download this set from him, make sure you check out the Random Forest flash card because it's the most beautifully illustrated and best explanation of my favorite type of classification. 

MARK: Yeah. I understand very, very little of this world. So I'm thinking that you know, I need to brush up on it. And it sounds like the flashcards are a great way to do that. But they're really meant more as supplemental material to helping learn. And I think we kind of talked a little bit about how people are using these to brush up for interviews, and they're just a great way to kind of practice your knowledge of these different terms, different methods, different algorithms all throughout machine learning as a whole. 

MICHELLE: That's right. 

MARK: Well, I think that's super exciting. I'm probably going to go order some right after we finish this because I definitely do not know what Random Forest classifier means or even have a concept of it. But I'm hoping the picture is of a pretty forest. 

MICHELLE: The pictures will help. You'll be an expert in no time. 

MARK: That remains to be seen. Well, speaking of experts, I think we are really excited to talk to Chris. So let's dive right into it. 

[MUSIC PLAYING] 

MICHELLE: Welcome. Today we have an amazing guest that I've been trying to get here into the studio for months, if not years. It's been a while. I'm glad we can finally get this scheduled. Chris, it is fantastic to have you here. This is your first time in a podcast studio ever? 

CHRIS: I think this is the first time I've been in an actual podcast studio. It's pretty cobbled together. 

MARK: Whoah, whoah. 

MICHELLE: What are you talking about? This is a pro setup. 

CHRIS: No, no, no, don't get me wrong. This is way better than everything I've ever used before. But I recognize everything in this room. So like, I don't know. I feel like if you go on some radio show, they should have all these fancy things. But this is all the same setup. It was just in my closet. 

MARK: So what you're saying is this is all the good stuff, but also, it's efficient. Well, thank you. 

CHRIS: Yeah. That's where you get the efficiency as opposed to setting your own setup up, like, oh, OK, like my wife is gone for an hour, and you start unfurling all these egg crate sound things like a crazy person. No, this is definitely faster than what we used to do. 

MARK: Well, I'm glad that you enjoy the setup. I think we've got a lot to talk about. But to kick things off, Chris, why don't you tell us a little bit about yourself and what you do. 

CHRIS: Sure. I am the Director of Data Science for Devoted Health, which is a Medicare Advantage startup. So it is a health insurance company. That's what everyone asks me. Everyone's like, oh, yeah, you're a health startup. You should probably use AI to connect people to health insurance companies. Like no, no, no. This is like a regular health insurance company that we started from scratch. So it's like actual cards from the health insurance company, like the full setup. 

And it's a really interesting experience from a data science perspective because you come in with very little knowledge of how health insurance actually works in America. And then you sit down, and then you actually talk to a bunch of experts who work at Devoted, and you go, oh wow, this is complicated. This is super complicated. 

MARK: I don't think anyone's dealt with American insurance and been like, no, that was easy. No, this is all straightforward. You'll figure it out in a day or two. 

CHRIS: Yeah. Well, that was the thing. When I joined, or before I joined, I did a bunch of reading of these general audience books on insurance, and I was thinking I was pretty smart. And then DJ Patil, my boss, was like, imagine how much you think you know. You know nothing. And now I realize, oh, this is crazy complicated. 

MICHELLE: So are you saying that that was actually a harder thing to learn than the data science side? 

CHRIS: Oh, yeah. No, I mean, actually think the specialty on our team is taking folks who are very, very strong at data science, and then teaching them about Medicare and teaching about health insurance because there's a whole nother realm of information in there. And it's something that we take very seriously because if you do the analysis wrong, you can actually affect people's care, right, in a real way. This is how people get their health insurance. This is how they pay for the doctor. This is how they get their prescription drugs. 

And if you do something wrong, we have to know immediately, and we have to fix it. And so bringing people on and saying, hey, let's teach you about Medicare, let's teach you about Medicare Advantage, that kind of stuff is actually a lot of what we do. We have a lot of educational sessions. We have a lot of-- we actually have a channel in our Slack. We use Slack for our company communication. We actually have a channel where people are allowed to ask any question. You can ask any, any, any question that you want. You can ask as many times as you want. You can ask for clarification. 

And the idea behind the whole thing is to say, no, don't assume that you know it. Just ask someone. Just ask someone, and that's how we'll work this thing out because there have been cases of startups who come into the health insurance space that they made some assumption, and that some shit ended up hurting people's care because they decided that a high number was good, and in fact, a high number is bad. And then that affects people's ability to go to the doctor. 

MARK: So it's kind of like three-parted in the approach that people need to take because there's this classic data science background full of best practices and tips, and there's kind of a general understanding of what that is. But you can't really work in this industry without also knowing the second part, which is going to be all the health care-specific data, the nuances, the people you're working with. 

And then the third part, I'm guessing, is going to be a lot of regulation around that. So I mean, if you're coming in and you've been a data scientist for 20 years, you know a lot of this stuff, you're not fully prepared to take this on without additional training, additional understanding. You can't just dive in. 

CHRIS: Yeah. No, it's this amazing thing where obviously, Medicare is for people who are 65 and older. We basically have no one on staff who's 65 years or older. So we can't dog food our own thing. Like my health insurance from the company is not my own health insurance, despite the fact we are a health insurance company. 

And one of the most important things that we do, which was actually started by DJ, was that we have data science folks actually go to the field. So for example, I flew down to Florida, actually visited doctors' offices. Actually, we have our own doctors, so I actually went on a patient visit and sat in one of our members' houses while one of our doctors actually did after hospitalization. 

And the idea is to make it real, right? Like this isn't just a data point. This isn't something where you think you know what you're talking about. Like go and sit down and see it on the ground and see the reality, and then go back and work from that point, do the analyses from that point, build the models from that point. And in health insurance, if you don't have that, I don't think you could do the job. I don't know how it would work. 

MICHELLE: So what was your motivation for joining Devoted? I know you may be new to health insurance, but you're not new to health care, right? 

CHRIS: No. So my background is in humanitarian tech. So I worked with a number of Kenyan nonprofits like Ushahidi and Frontline SMS and did things like election monitoring and global health projects. And actually, after that I spun out a company with a few of my friends who I used to work with with Ushahidi that now works on fake news stuff called New Knowledge. 

And then I went back after my startup, and went back and worked for a Kenyan social good program. And so my whole background is in doing some things that have some kind of social impact. That's the thing that I have had the privilege of doing for a very long time. And there was just this one day where DJ called me up, and he was like, hey, I really need you help me fix Medicare. And I was like, [BLEEP]. Can I swear on this podcast? Because that was basically my reaction. 

MARK: Of course. I mean, that's no-- as we just talked about, that's not an easy thing to do. I mean, there's plenty of issues with it currently. There's a lot of concerns there. But it's also an incredibly complex field. 

CHRIS: And that was my big thing coming in was like, I'm not trying to improve everything. I'm not trying to fix everything. I'm not trying to do-- but if I could take one step and make it a little bit better. Like if we could build something that we would want, as Devoted says in their slogan, that you'd want your own family members to be on, then you're good. Like that's it. Just one step forward that's a little bit better, that's a little bit nicer, that has a little bit more, you know, like a health insurance company with a bit of a soul. Great. We've pushed the bar forward. People's lives are better. The grand sweeping change is far beyond my ability to fix. 

MICHELLE: So you're not taking your global health care perspective and applying that to the American health insurance system? 

CHRIS: Yeah. No, no. This is-- I mean, I think the thing that I take from it is a really, really, really strong humility towards my own assumptions. When you work at a Kenyan company, or what I was doing, flying down to Mozambique and doing some project, you have to trust the people on the ground. They know what it's like to work in those environments. They know what it's like, like how far they can push the government before the government retaliates. They know all that stuff. 

And so you have to come in as someone who knows a lot about data and can manipulate data and can work with them, but basing that on their knowledge. And that's what I've really tried to instill with my team at Devoted is hey, we have all these people who've been working in this industry for a long time. We have a bunch of providers in the field who know what it's like to be in there. Trust the person in the field. Trust their knowledge. Help them and support them, but don't walk in and say, there's some logistic regression that's going to solve all of this. Let me just figure out which one it is. 

MARK: I think that's the ultimate form of advocacy, is that true-- not only that level of empathy, but also that level of just connecting with your audience and working with them to say, look, you know your area, I know my area. Let's combine that. Let's make something happen. 

CHRIS: Yeah. The really fun thing about data science is you have the ability to work in a whole bunch of areas and work with data. And you can, in a bad way, come to the assumption that you could fix everything. But you understand how the data is generated, so you understand how the data model works, and thus you can figure out every single thing, and you can come up with these grand theories, and then write a model and it fits them. And then you say, hey, I'm done. We're good. 

And that's not true in a lot of cases. Your assumptions for how the world works is not true unless you've gone and seen it, unless you've talked to a lot of people, unless you've sort of done the legwork to figure it out. And we try to do that a lot. 

I think one of the greatest things of working at Devoted is the large number of people that we have who have worked in Medicare Advantage for a long time, which means that I can go to them and be like, I don't understand how this thing happens. I'm constantly asking the really stupid questions because otherwise, I'm terrified of not getting it right. 

MICHELLE: During your time at Devoted, you came in pretty early on and you built things up from scratch. Tell us a little bit about what it was like to come in not knowing a whole lot about the space and asking the right questions and making sure that you stayed on track. What was that building up a data science team like? How did you go from zero to something? 

CHRIS: Yeah. So when I came in, there was I think three data scientists all under DJ. And then DJ moved to the Head of Technology, and so then I took over the data science team. And we had to sit down, me and DJ, and say, hey, what's the kind of team we want to build? 

There's a variety of ways that you can implement data science in any kind of company from scratch. Do you have the data scientist sort of sit in the corner as a research lab? Do you make the team that just takes tickets and just processes the tickets, and then sends out the dashboard that makes it work? Those were both valid and very common ways. 

We decided to go for the fully integrated approach. So every single data scientist at Devoted works in at least one other team, like actual teams that are working on specific things, say, processing claims or talking to our doctors. They sit in those meetings, and they are the data science resource in those meetings. And that means that no one has to submit a ticket when they want to get something done in data science. They just tap the person on the shoulder who's sitting in their meeting and say, hey, Jason, fix this for me. 

That is super powerful. And I think that fits our model of making sure that the people who are working in data science actually know the subject matter that they're working on. That kind of stuff, plus 1,000 other decisions, those were decisions that you make when you start a team. How do you want to structure it? How do you want to build out this thing? How many people do you want? What's the seniority of people? And walking through that slowly is my job all the time now. 

MICHELLE: And did you organize things that way? So are people reporting to the subject area teams, or do you still have the data scientists under you, and then everyone just sort of belongs to another team? 

CHRIS: Yeah. So everyone is under me, and then we lend them out to the other teams, and they'll jump around a few times. But the goal is that if someone is working on something that needs data science, they don't need to come to me and say, hey, can I get a resource for this, or I submitted a Jira ticket to make this thing work? 

They can actually say no, no, no, they've been sitting in our meeting for weeks and weeks and weeks. They can totally understand what's happening. They understand the nuances of this. Let's just have them do it. 

MICHELLE: And based on your description, it sounds like it's a pretty successful model, like that's something that works really well for getting those teams not only access to the data science resource they need, but also getting those data science resources more ingrained with what the solution looks like, or actually the different pieces that they're working on. Are there some challenges to this that other people aren't picking up the same structure, or is that the same reason why? 

CHRIS: Yeah. No, I think there is definitely some challenges. One of the ones that we deal with is that I think we have nine data scientists now under me. We're everywhere in Devoted, all over the organization. And it means a lot of times, there's only a single data scientist sitting in a meeting. So sometimes those data scientists can actually be the lone resource for something. And that means that it can be a situation where they don't feel like they get support, and we need to make sure that we actively encourage that. 

That is a real problem. I mean, the other one, of course, is that managing a group of people, nine people who are across 15 different projects across the company means that I jump around all over the place. I am in all aspects of what the company does only for like five-minute segments before I move on to the next part. 

It is-- you know, like anything else with cost of benefits, I wouldn't do it another way at a company like Devoted. But I completely see the value if you were more of a product company, like a straight technology product company, to actually have everyone sit in one room, and then bust out the Jira board and say, OK, cool, I'm going to manage what every single person does [INAUDIBLE], where in fact, I am doing a lot more coordinating. I'm doing a lot more guidance. I'm doing a lot more hey, if you need to pull the emergency ejection handle, call me in and I'll help you out with this kind of stuff. 

That is like a new structure, and I think we do it pretty well. But we are learning all the time about how we can do it better. We do retros, so we do retrospectives of the last two weeks every two weeks. So we're constantly [INAUDIBLE] how well are we doing this thing? Because there isn't a lot of guidebooks at that. There's no standard structure for this. We're still figuring stuff out. 

MICHELLE: Number one, how do you scale that approach? Do you see that changing? Like Devoted is pretty hyper growth, and having nine people under you, you can still manage that as a single person, but very quickly you'll need to have other people. So number one, how do you scale? And then also, as an IC, how do I not get overwhelmed? How do I actually get work done instead of getting sort of dragged into a lot of the business details? 

CHRIS: Yeah. I mean, that's the interesting thing about being in a company that is hyper growth-- I really feel like that is a very, like, tech bro saying or something like that. But I mean, it's true at Devoted. When I joined Devoted, there was something like 60 people. And our last incoming class of folks was 50 people. So just massive growth. 

MICHELLE: Those are large numbers. 

CHRIS: Those large numbers. There's a lot more people who are joining every single day. And as we grow there has to be more structure in place. And the thing that I really am fighting for a lot, and trying to restructure it in a way that works for that, is to allow us to cover everything, but also to allow data scientists to sit down and work on something for a long period of time. 

It almost feels like zone defense. You're just covering everything. Then someone comes over and taps you on the shoulder and says, hey, could you just do this for me? And you stop what you're doing and you help them out for three hours. And then someone else taps you on the shoulder, as opposed to saying, hey, this is a big, long, difficult project that I'm going to work on for four months. Don't bother me. 

We're trying to split up a team a little bit so we actually have folks that are doing more-- able to be distracted by anything. Anybody wants to come and ask a question, they can come and help, while other folks are sitting down and actually working on stuff for long wins, big, longer wins. 

And we'll probably build that out more and more as time goes on because you do want to make sure that we are covering [INAUDIBLE] for everything. Also, there are some larger wins, things like ML and that kind of stuff, that we're just starting to build into, which require a lot longer process before you actually see value from it. You have to build out this whole infrastructure of how you train the models and manage the models, and then apply them to our system. That takes time. 

MICHELLE: Yes. I have so many questions about that, in fact. So but before we get on to the infrastructure that you're using and what your stack looks like, I am curious in hearing more about how you've grown your team. So with all of these people that are coming in, some of those are data scientists. How have you been purposeful about who you hire, who you bring onto the team? What have been your driving factors in building out your team? 

CHRIS: Yeah. So when you do the fully integrated model, one of the things that I had a hypothesis of of the start, which has played out very well, is that your data scientists need to have really high emotional intelligence. They need to be able to sit on other teams. Other teams need to want them to come in and say, hey, come sit in my meeting. If you walk in and you're a detriment to their meeting, they're not going to invite you to come in again. They're not going to want you to join the team, sit in with them while they are trying to get work done. 

MICHELLE: I think that's my favorite quote of the last year is that your people need to have high emotional intelligence. You don't hear people talking about that. So you've taken a purposeful approach to that. How have you done that? Have you substantiated that? 

CHRIS: Yeah. So it's part of our interview process, so we do a number of things. But the one that actually works really well is that for us, anyone who interviews someone or talks to someone who does any kind of thing with any candidate has full veto right to say, I don't want to work with this person. This person probably wouldn't be good for, me and I'll nix them. remove the, right away. 

And that offer-- when people are talking to him, when one of my folks is actually talking to a candidate-- that offer for me to say, hey, if you have any-- you don't even need to do some elaborate explanation as to why. If you don't feel like you can work with that person, let's just get rid of him and find someone else. 

It is incredibly important because the fully integrated model that we do doesn't work if you're the brilliant [BLEEP]. It's not something that works really well because if you come in, and someone is a very good coder-- which I'm not sure the brilliant [BLEEP] actually exists in reality. But if someone comes in and they are very, very smart, but no one wants to work with them, it harms the team internally because people don't want to ask those stupid questions, which is so critical when you're learning a new field like Medicare Advantage. 

And other people at the company don't want to work with them. Thus they don't invite them in, they don't ask me to send someone onto their team to help him out with a problem. And so we are very, very careful with that, and I don't have, obviously, my team sitting in this room with me. But if you actually looked at the team, you'd see that people are very kind and very honest and very open. And that's something that we've selected for explicitly. 

MICHELLE: How do you give advice to people to avoid that specific problem, or to avoid becoming that problem, because I think it's the stereotype that we all have heard of, like the rock star developer or the rock star data scientist, whatever it is. Like this idea that someone knows enough that they can just go off and do their own thing, and they don't need other people to help them. 

I think it's common enough that people know about it. And it can be a really difficult trap for people to fall into. What advice do you give to people to say, like, hey, don't become this person? 

CHRIS: I think the easiest way that people fall in it is when the data science team is actually isolated from the rest of the organization. If they're a research shop off in the corner, it is so easy to fall into that because you're not selecting that. On an everyday basis, you don't need people with lots and lots of emotional intelligence if there's just four engineers sitting in the room. I think in reality, you do, but that's the common perception. You could just find for great coders and put them in the room and call it a day. 

That's not actually the case. But when it becomes a fully integrated model, and people are actually working with non-technical folks throughout the organization and have to respect those people's knowledge-- they've been working in this space for 20 years-- you can't really be condescending to them in any way. They know what they're doing. You're there to support them. And you can be an equal partner in that and challenge some of the ideas, but you do have to respect their knowledge. Being technical is not the advantage in this space. 

And when you have that, it becomes very, very obvious, very, very quickly that not having emotional intelligence, and not being able to work with folks in that way is a detriment, is very, very quickly you realize that that doesn't work. I get it that there's another scenario where it's harder to see because some of the engineers just don't work as well because there's some brilliant [BLEEP] in the room or something like that. 

It's harder as the manager to normally see that is the case because the other engineers basically close their mouth. They don't really talk about it. They just kind of work in a certain way that's not optimal, but they don't really express it. When technical folks are working with non-technical folks throughout the organization, it becomes really obvious. 

And so I get it that people fall into this trap. It's totally reasonable. I think being in any kind of technology organization, there's the technical side. There's the code and the servers and the config files and all that stuff. And then there's the social machine. There's this other part of people's goals and desires and emotions and all that kind of stuff. And if you don't address that, you're not going to be everywhere in the company. You're not going to be doing the best that you could do. 

And that part of it, If I had some lasting lesson from this whole thing as it go forward, is that focusing on the social machine explicitly, making sure that all your folks can work with everyone, is a game changer that's completely unappreciated. 

MICHELLE: Yeah, I totally agree with that. It's not something that people talk about much, but in my experience as well, if you can't get along, if you don't have kindness and respect in the workplace, people who would otherwise be very brilliant just get sort of quieted, and they're afraid to ask the right questions. And that means that the business case doesn't get addressed. So thank you for talking about that, for bringing that up. 

What are some ways that you can support your team? So if you have a group of people in a room that have respect for each other and are kind to each other and are brilliant, can address the business problems, how do you support them in that and make sure that they continue to be comfortable, that they can continue to grow? What are some things that you do for your team? 

CHRIS: Yeah. So two of them I do very clearly. One, I'm the first person to ask the dumbest question. I'm very, very explicit. I do not know everything about Medicare Advantage. I know a lot. I know way more than the average person. I work in this every single day. I've spent a lot of time learning this stuff. And I'm still learning stuff and I'm very open to something I don't know. 

I'm not pretending I know every single fact that comes in. I will ask it if I don't know it. And being the senior person in the room who is open and available to ask that question, of which some of my team actually know the answer, and they can actually answer to me-- that is a big deal, being the first person who comes in. 

And when we did this Slack channel that actually allowed everyone to answer every question, I was the first people to ask the question. I'm happy to go in and say, I don't know something. That your senior folks are asking those questions is a big deal. 

The other one is to be very explicit about it. You don't need to be coy about the fact that you value emotional intelligence or some kind of social game. Just say it explicitly. We value emotional intelligence on this company because you need to do your job. In order to do your job the best way possible, you need to do that. You need to go and relate to people. You need to be able to work with people. People need to like you and want to work with you. 

That is an explicit thing that we value, and I say it explicitly to my folks. If you don't do that, I don't understand how that works. 

MICHELLE: Yeah. That's amazing. You're looking at hiring a few people. And I looked at your job ad, and I've never seen so many instances of the word love and care in a tech job ad. I was really blown away. It's clear-- not just having this conversation-- but it's clear how the company is run. Like this is a thing that we care about, that we're explicit about it. I'm glad that's working for you. Keep doing it. 

MARK: And it sounds like a lot of these things you may have practiced and learned before you came to Devoted because you have quite a kind of a storied history, as it were. 

CHRIS: Storied history. OK, yeah. 

MARK: Yeah. I mean, well, that's the best term I could come-- I don't know if you have a preferred term. 

CHRIS: No. I just never-- I've never been storied, I guess. 

MARK: Well, I'd love to hear a little bit more about how you became a data scientist or how you decided that this was the right route for you. And you had mentioned earlier all the different organizations you had worked with, so I'm sure there's a tremendous amount of cool background there. 

CHRIS: Yeah. So I did my PhD in Political Science at UC Davis. 

MARK: Wait a second. Poly Sci isn't data science. 

CHRIS: Uh-huh. See, so I dragged this in here. UC Davis is a quantitative political science program. So I don't know-- honestly, I have no idea who Kant is. I have the vaguest idea who Kant is. Like Rousseau is a name that I've heard. 

But everything else, I did statistics. Statistics was everything. Applied statistics was my whole education for six years. When I was doing that PhD, I got to know some folks who were working at LinkedIn, and this includes DJ and this includes a few other folks. And they were doing such cool applied stuff that I knew I wanted to leave academia and do it. They were doing so many interesting things, a lot of it with [INAUDIBLE] at the time. But a lot of really interesting stuff. 

And when I saw that, I knew that I wanted to leave academia and work on that kind of stuff. And so when I got out, I talked to a friend of mine who was working at a US-UK Kenyan nonprofit called Frontline SMS that did low resource SMS messaging for election monitoring, that kind of stuff. And I was like, I want a job. Give me a job. 

And that was an incredibly humbling experience, as someone who thought of themselves as like, I have a PhD. I'm amazing. And then you fly over to Morocco, and then you're like, oh-- 

MICHELLE: I have no idea. 

CHRIS: I have no idea what's happening. And you know, the most humbling experience of that by far was that we would do trainings with folks and teach them how to use-- our software was free and open source. And so we'd teach them how to use it, and we'd give them some physical pieces of hardware to help them do it. 

And doing those trainings, it became very explicit over the years in my mind-- this and at Ushahidi, which was the next place I worked-- if the cops kind of burst down the room, if the cops sort of swarmed in and do it, and really arrested everyone, I was going to get on a plane. They were just going to put me on a plane and fly back home, and that was going to be the end of everything. And that wouldn't we really be a big deal. 

But for the other local folks in the room, the folks who were living in that country and can't leave, and were on the radar of the government for the whole time, and didn't have the protection of the US Embassy, it was going to be a very, very big deal. And taking their security concerns into account, we would use all this training material. And then we'd burn it in a bonfire. So there was like physically nothing there that someone else could do. 

But having that respect for the other person, saying, hey, I know a lot. I know a lot about data science. I get there's lots of hype around it. AI is super cool, all that kind of stuff. And yet the person in the field, the person in the room, they're putting a lot on the line to work with you. And having respect for that and understanding that, and respecting their knowledge of these things is by far the greatest lesson that I learned, doing that for a good number of years. 

MICHELLE: Because it doesn't necessarily matter what the application is, being able to respect the user experience and understand what they're going through and where they're vulnerable. And you're really being entrusted with access to parts of their lives that could endanger them. And it sounds like every data scientist should have an experience that really helps them connect with their users and really respect the access that they have. 

CHRIS: Yeah. And I think it applies well beyond-- I mean, these are very serious cases like election monitoring and health programs. But in my mind, it applies everywhere. If you work at a food delivery company, you really need to understand how people are using it. 

You might think that it's a 22-year-old who's using it to get beer after work. But in fact, it's like someone on maternity leave and they have two kids, and they're trying to-- they're just struggling, and they just really, really want it. And try to understand their perspective and their wants. I can't think of doing it another way that would work. It seems arrogant. 

MARK: Well, it's kind of clear that-- especially from that experience, why you brought that into Devoted. And it sounds like it's a big part of the culture there. 

CHRIS: Yeah. No, and that was something that DJ and I were very explicit about, that we need to-- don't assume that you understand our members' lives. So you know, Medicare Advantage and Medicare are provided to every single American over 65. So people who are rich and people who are poor. And so don't understand what you know significance of a $5.00 copay is. That might be nothing for someone, and it might be a lot for someone. And so don't build models that assume that you know the value of that. 

That kind of stuff happens every single day, making sure that we know that. And sometimes I think we stumble a bit, and sometimes I think we crush it. But just making sure we do it better every single day, that is what we are selecting on. The technical stuff we can train out. There's tons of people who are super technical and super awesome. We are trying to get people who can come in and really make sure that they understand the user. 

MICHELLE: Mm-hmm. So what advice would you give to someone who's looking for a role on a team like yours, someone who cares about their users, who places more value on the impact that they're have rather than just the technology that they're using? 

CHRIS: Yeah. You know, it's an interesting thing because we get a lot of applicants to our jobs. And a good number of them are really trying to probably-- I mean, it seems weird saying this at Google-- but trying to please Google with a very, very, very technical analysis. Like you know, we're going straight to like some kind of computer vision, adversarial network kind of example, or something like that. 

And that might totally get people jobs in different places. It doesn't get people jobs at Devoted. that's not something-- I much, much, much prefer to have people coming in and can demonstrate really good consciousness of what the project they're working on. So say if you're analyzing crime data in San Francisco or something like that, just like running the analysis and then showing me a chart isn't really-- who cares? I can do that. Everyone can do that. 

But going the next step and say, hey, no, I implemented something. I did something. I went out and took this data and I gave it to some reporter and they got an article published, or some kind of thing to actually have some kind of-- I'm not even saying you need to make some massive difference for it. But everyone can run some analysis on some kind of publicly available data set and demonstrate some basic skill. 

Right now, there's-- maybe like five or six years ago, that was a great way of getting a job. Now everyone's doing that. But something where I can actually say, hey, no, this person clearly understands this difficult phenomenon, whether social or physical or whatever. 

That's incredibly valuable for me because I can then take that person and say, hey, I'm going to put you in an environment that you don't know anything about. You don't really know about the lives of people who are over 65 and really poor in Florida. I will help you learn it. But you need to be an active participant in that learning, and to sit and actually think that this is an important thing to learn. And we'll walk our way through it. 

MICHELLE: So it's about having a full story. So starting out on a project, being intentional about what you're doing and why you're doing it, and then following through with-- the technical piece is only one part of it. And it's important, but what's more important is the larger frame for that story. 

CHRIS: Yeah, and you had something-- like, say, to take the crime example, if you analyzed crime data. If you did some ground truthing, like you went to the police station and checked to make sure things were-- like you pulled a few records or something like that to see if it actually matched, something where you can actually say, no, no, no, I'm digging a little bit deeper into this. 

And everything-- again, I'm not saying, hey, you have to some massive social good project for you to work at Devoted. But I am saying that the value of running an analysis is no longer straight that you just did some simple machine learning thing because everyone's done that at this point. Every single person that applies to Devoted has an example of that but that part where you've gone a little bit farther, and you've kind of done some ground truthing, or you've looked into something, or you've really tried to understand the situation, that stands out so quickly to me. 

MICHELLE: So you're saying that FizzBuzz and TensorFlow is not going to get you a job at Devoted. 

CHRIS: It will not get you a job at Devoted. Although I did like Joel Gress's FizzBuzz using deep learning. 

MICHELLE: Oh, he has so many more. Have you seen his-- yeah, he doesn't like notebooks. He has so much more where that came from. 

CHRIS: Yeah. I do like Joel. That was the example where I was like, no way. Like if someone came in using deep learning to do a very, very simple program example, I mean, it's funny. But it's not what I'm looking for. 

MICHELLE: It's very Joel. 

MARK: So it's more than about just the technology. It's really about applying it and making-- hopefully inciting change because of it, but also doing kind of the active participation in what you're trying to do the technology around. 

But let's talk a little bit more about the technology, too, because that part is also important. And that is a good chunk of needing to understand data science and being able to execute on it. 

CHRIS: That's the baseline. If you don't have that, there's no real discussion. 

MARK: Right. So what does that stack look like at Devoted, and what technologies do you find to be the most interesting or useful? 

CHRIS: Yeah. So one of the most interesting things at Devoted that you wouldn't realize if you saw it on the outside is that we have built our own system for running an insurance company. So we actually have an application that we call Orinoco that actually runs the whole insurance company, everything from processing claims to managing member calls, all that kind of stuff. 

And the plus side of that is that we control that whole system. So if one of our members calls, we have very easy access to all the information that we have on them because they're not in 10 different systems. They're in one system. 

The downside of that is that that system is very complex. 

MICHELLE: That's a lot to support. 

CHRIS: It's a very, very, very complex system. It's also a very new system because we're a young company. And so there isn't 20 years of documentation sending. Under those, for us on the data science team, that data comes down and actually gets replicated down to Snowflake, and then we're mostly working on the Snowflake layer. That kind of stack, that's a very standard sack. 

It works very well. I think it's difficult for folks to actually come in and try to work in that Orinoco app and understand the data that comes out because I think we have something like 1,000 tables or something like that that comes out of this piece of software. And it's so powerful if you learn that whole data model. But learning that data model is not easy. It's not obvious how everything works. You really have to sit down and look at other people's queries and look at other people's code, like, oh, I get it. That's how that works. 

And that's not an unusual problem compared to everyone else. There was this great article a few months ago that was like some other large company, and they tried to do a basic like a sum, like that the ages of all of our members or something like that. It turns out that even that calculation was incredibly difficult to actually do because the data is all over the place, and to get historic data, and the data models change over time and all that kind of stuff. 

But yeah, at Devoted we use Snowflake for our stack, and then we use Periscope for analytics, which is super nice if you know SQL because you can just grind out a lot of charts really fast, and a lot of Airflow is thrown in there, Kubernetes, that kind of stuff. Pretty typical startup stack, I feel like. 

MICHELLE: OK. And as you were building that out, did you spend more time on the actual building of the stack or figuring out what to build? 

CHRIS: We were lucky enough that we hired a lot of senior folks. So a lot of our folks, for example, like Carla Goodreau, who's my partner in data engineering, so my peer in data engineering, she built out a lot of stuff at Runkeeper. She was like really high up at Runkeeper and built out the whole system. So when she came in to run data engineering at Devoted, she really knew what she was going for. 

And that's the same thing we did with data science. I've sort of seen these things before. It's not my first rodeo in these being one of the early data science hires. And so we kind of knew what we wanted to build, and we'd seen these patterns before and we can apply them. That part isn't super useful. It means that you have a lot of folks with a lot of experience, and you can ask them how the best way to do it. They've tried all the wrong ways previously, and they can decide on the right way. 

But it is part of the Devoted way, that our folks are very, very independent. And it comes from that background, that we started with a lot of senior hires. And now we're moving into more like mid and junior hires. But you know for a while there, we had something like 30 or 40 data science folks and engineers. And we had like two junior folks, or some really, really small number of folks that were more junior. 

And now, obviously, we're kind of rebalancing it because you need to grow. But when you have so many senior folks, you can really forget to put in guardrails for stuff because no one needs any guardrails. Well, seemingly nobody needs any guardrails, and then Chris breaks something. But that kind of perch of having a very powerful stack, and a stack with very little guardrails, is something where you can only have very senior folks. And then as you have more junior folks, you need to sit down and be like, OK, cool, we actually need to document this stuff. 

MARK: It works when you're in startup mode. It works out pretty well. But then someone comes on, and they're like, oh, oops, I deleted everything. And you're like, why didn't you deleted everything? It's not like we didn't document it. 

MICHELLE: That pesky hyper growth stage. 

CHRIS: Go figure. 

MARK: So were there any major decisions you made down the road that you ended up reversing on, or anything that you discovered that kind of said, oh, we need to swap something out? 

MICHELLE: Or that you would like to reverse? Anything that you regret? 

CHRIS: Oh, anything that I regret. I think we've done pretty well. I think we've explored some technologies. So I mean, I'll give you an example of something I was going to regret, and turned out very well. We compile our whole application, so the whole application that runs Devoted runs in Go. And we compile that all the time, which means that the engineers can actually rename table names and recompile, and those table names percolate to the whole system. 

The problem with something like an analytics tool like Periscope, it's hard wired. It's hard coded the table names. And so we needed a system for the engineers to be able to change the table names and that to percolate in. And right as we had that problem, Periscope actually changed their system where all the charts are actually backed up on GitHub. So we could actually just like grep replace all this stuff in GitHub and then load it back in and everything worked. 

But there was a moment there where I was like, wait, you want to change all the table names like multiple times a day? That's going to destroy everything. Why did I buy Periscope? And then it was like a week later they introduced it, and I was like, whew, that was lucky. 

But the thing is, I mean, the lesson for me is that you just don't know. We've explored technologies that just didn't work out. We haven't explored it so far. We've been very good, or very lucky, one of those two, where we haven't implemented something and sat down and said, oh, that was terrible. Why did we do that? But I mean, we're a young company. I'm sure that'll happen. 

MICHELLE: It's inevitable. 

MARK: Yeah. It's a scenario that comes up. Now I know we're running a little bit out of time-- 

MICHELLE: Wait, wait, wait. I really want to ask about your machine learning flashcards. OK. So that's one of my favorite things that you've done. I know it has helped me personally. I would even go so far as to say that part of the reason why I have this job at Google now is because I used your flash cards. 

CHRIS: That makes me blush. 

MICHELLE: So like rewind to the point where you see my name show up in your purchase history, and that was when I was interviewing here. I'm not kidding. But I really love them, and I found them extremely useful building out my TensorFlow model whenever they asked me about FizzBuzz. 

So what prompted you to do that? I know you were just doing it for yourself for a while, but what made you decide to share that with people? It's kind of a vulnerable thing. So they're all hand drawn, and they're beautiful. But I can see, if I had started to do that, I may not have wanted to publicize that. What made you decide to share? 

CHRIS: I think that being honest and open about stuff has always been my best strategy. And you can see my personal home page has something like 600 little tutorials around how I did stuff. And I wrote those when I was learning. So some of them are not the best way to do things. And people actually go into GitHub and sit down and say, hey, this is a better way of doing it now and that kind of stuff. 

But I've always been totally honest about what I know and don't know. I don't feel any kind of need to pretend that I'm not something. And I can do that from a position of privilege, that when you're the Director of Science at a hyper growth unicorn company, you can kind of be like, hey, I don't care if you think I'm not good. Clearly other people do. 

MICHELLE: But you weren't always that. 

CHRIS: I wasn't always that, yeah. It's always worked out to me just to say I don't know. And when I made those flashcards, I mean, I made them because I knew in interviews that some of the stuff you just need to memorize. Like what's a Breyer score? Just you just have to know it. And it's-- frankly, if you walk in to an interview, and you can write it on the board just from memory, it looks freaking impressive. 

was my thing is just to learn it. Some of these things, you have to sit down and you just memorize. Like what is a t-test? What is exactly happening with everything? You can read it in a book once. The best way is just to extract those pieces of information and just review it over and over again, and then you know it, and you have it down. And you can just pull it out whenever you need to. 

I used those with all of my job interviews. That's why I made them. It was a very good experience. And you know, I mean, over the years, sure, I think there's been some people who've said they've been wrong in various ways. And I've double checked them and then fixed them and that kind of stuff. I don't mind being wrong. It's OK. 

MICHELLE: I think that's good advice in general, that it's OK to be wrong. And that's where the learning comes from. That's how we all grow. 

CHRIS: I would be so surprised if, these days, that people actually sat down and thought someone who didn't ask questions clearly knew everything that was happening. 

MICHELLE: Good point. 

CHRIS: We all know, at this point, that everyone doesn't know everything, particularly in data science, where people come in from so many different perspectives. I've had some folks who knew tons about deep learning, and they were awesome. And then they didn't know basic statistics because that was just not part of the training. It didn't come up. And it was embarrassing to them, that like, what's a t test? I don't know, but I can do this incredibly complicated adversarial network thing. 

MICHELLE: I call these libraries, and it works. 

CHRIS: And you know, or people who come in from statistics, and they're like, oh, what's a feature? And it's like, that's a column. That kind of stuff, it's just always worked out to me just to be honest and just open. You know, I started out because it was useful for me to grow and learn. And at this point, it's just, I guess, a personal philosophy that I just do. 

MICHELLE: Can you share, maybe, one of your favorite stories of someone who's used them and shared with you, like, this is how it impacted my life. Thank you for providing this. What's your favorite story? 

CHRIS: Yeah, so there's been a few cases of this. So I sell the cards. But if anybody can't afford them, they can just ask me and I'll give them because it's a digital product. And I've given out thousands and thousands of cards at this point. And every so often-- maybe like once every six months-- someone has come back to me and said, hey, you gave me the cards for free. The cards made me get a job. I have now bought the cards. 

Like that right there, that's impact. Someone who couldn't afford it before because they were a student and they were too poor. I gave it to them for free, they ended up studying it, getting a job in machine learning, and then coming back and saying, hey, I was able to accomplish this because of you. Let me buy a card for someone else. Let me move this thing forward. 

That is awesome. There's no other way to say you have an impact other than that. 

MICHELLE: That's a great way to scale your personal impact. I like that. OK. So I think we're running low on time. Is there any last thing you'd like to share with us, maybe anything you'd like to plug or? 

CHRIS: Sure. We at Devoted are hiring two folks onto my team focusing on analytics. You know, if you Google Devoted Health Jobs, pretty sure the job comes up. You can go to my Twitter to actually learn where I actually talk about the job, and I'm really open about what it is and what it isn't. It would be a perfect job for a few folks. 

MICHELLE: And we'll add that link to the show notes. And again, I've seen it. There's a lot of love and care in it. It's a great description. 

MARK: And some great flashcards to help you prepare. 

CHRIS: Exactly right. 

MICHELLE: Yeah, we'll have that link in the show notes as well. But I can't imagine anything better to prepare for an interview with Chris than his own flashcards. 

CHRIS: His own flashcards, yeah. 

MARK: Yeah, does someone ever like bring in a printed out version of the flashcards to your own interview? 

MICHELLE: And ask you to autograph it? 

CHRIS: I've never seen a printed one in person. But a lot of people do print them out and then send me photos of them. This one institute actually pasted them on the wall like wallpaper. 

MARK: That's really pretty cool. 

CHRIS: Yeah, that was pretty sweet. I was like, what? 

MICHELLE: Why didn't I print them out to get your autograph? What was I thinking? 

MARK: We can fix that later. 

MICHELLE: I'll run upstairs. All right, Chris, thank you so much for joining us today. It was great to have you here. 

CHRIS: Great to be on. 

MARK: Thank you so much to Chris for coming in. I mean, it was a super cool chance for us to chat with him. You know, he's got some very interesting things that I would never have thought about when talking especially about hiring and managing data science, because I think of data science-- I think of a very technical, very heavy skill set in terms of needing to have a lot of background there. 

But there's so much more empathy and understanding in how to kind of work within a team and really understand why you are doing data science, that it seems like he takes in as a big factor to being successful. 

MICHELLE: That's right. And in many ways, it's fairly straightforward to evaluate a piece of code or something that's very tangible and very well-defined. But emotional intelligence is something that's a lot harder to define, especially in the limited amount of time you have for interviews. To hear how he tries to figure that out in advance before bringing someone onto the team, I think that in and of itself is a skill because it's such a difficult predictor to tease out. 

MARK: So go tweet Chris if you want a reunion of Partially Derivative because it sounds like that will be-- if there's some serious [INAUDIBLE] there, he sounds like he could be convinced into doing some more. 

MICHELLE: That's right I've already seen a lot of people asking for reunions. So not just Chris, but Nvidia and Jonathan as well. It sounds like there's a lot of demand for that. 

MARK: So yeah, go express that, and maybe we'll all get to come together and have a really cool reunion podcast. 

MICHELLE: Yeah that would be great. 

MARK: Absolutely. So it was a great conversation with Chris. But I do have kind of a follow-up question here, which we'll just call our question of the week. 

[MUSIC PLAYING] 

So what does it mean to learn in machine learning, because machines can't-- I don't think they can. They can't study like we do. They don't cram before a test. They don't stay up till 4:00 AM, not that I ever did like that. But that learning part of it is not as easy, and people talk about all these networks. And what does it mean? What does it mean? 

MICHELLE: So we're going back to the basics. This may seem very obvious, especially if you've been in the field for a while, but expressing it in words is surprisingly difficult. This is a definition that I got from Chris. This is one of his flashcards. This is something that I came across. 

MARK: What's the picture on the flash card? 

MICHELLE: The picture. There is no picture on this one, but the words are decorated very nicely. Also, he includes a quote from Tom Mitchell, who said this back in 1997. I'm going to paraphrase it. If you want the full definition, you can look at the card. But this is a great definition for what the learn means in machine learning. 

To paraphrase Tom Mitchell, a computer program is said to learn if its performance at specific tasks improves with experience. Well, that's not all that different from the way we learn. We read books, we gain experience, we do tasks, and we improve them. 

And with computers, machine learning, you're defining a very narrow set of tasks. You're defining that in a way that gives you a performance indicator. So you have a task, a concrete outcome, and then you give that computer access to experience. So you give it examples of that task with success predictors and failure predictors, and it can take that information, ingest it, do something with it, and then get better at those tasks. 

MARK: So if it has a way to, more or less, like you said, with experience, in kind of improve or change its algorithm to figure out what it's doing differently, that would be considered machine learning. But if someone were to come in and modify the program manually, that's not considered machine learning. 

MICHELLE: That's correct. So without changing the fundamental algorithm-- so you can change parameters and hyper parameters. By the way, if you want to know the difference between parameters and hyper parameters, Chris has a flash card for that. 

MARK: Of course. 

MICHELLE: But as long as you're just changing parameters and not the fundamental algorithm for the program, so the program has the ability to change those parameters. And it does that based on getting access to more experience. So through experience, if it can update itself in order to get better at these tasks so that its performance indicators get better and better and better, that's machine learning. 

MARK: I have to buy these flashcards because if all that is on one card-- and there's a lot of cards. There's no shortage of them. 

MICHELLE: There are hundreds of cards, yeah. 

MARK: I mean, this is stuff that I really just don't have a good background in. So it's super cool to hear that. And I think-- I like that definition. It's very simple. Like if it can learn from its experience to make changes, and usually in a positive way, hopefully, it's the learning part of machine learning. 

MICHELLE: It's straightforward. So if you want to find out more, including the definition of a partial derivative, buy a pack of Chris's flashcards because who knows, they might even help you land your next job. 

MARK: Absolutely. So definitely some very cool resources in there. We'll make sure we have links to the flashcards in the show notes. I think we're almost out of time here. 

Michelle, before we go, anything cool coming up? Any traveling? Any new cards you're going to pitch to Chris did the flash card deck? 

MICHELLE: Yeah, so I'll be in San Francisco for the near future. I'm working on an event. I'm curating the ML for Developers Track for QCon. That's in San Francisco on November 13. But other than that, I'll be right here in town. 

MARK: Sounds very exciting. So what's QCon all about? 

MICHELLE: QCon is-- I believe it's InfoQ that puts this on. And I've spoken at a few of them, but this is the first time I'm curating a track. And they're deep dives. They're almost hour long talks. They're a bit different from other conferences. But I have very much enjoyed them in the past, and I'm very much looking forward to being part of this event. It's the first time that I've been part of it as an organizer. 

MARK: So if you're around San Francisco on November 13, it sounds like your plans have already been made for you. We'll make sure to have a link to that in the show notes. 

I'll be hanging around San Francisco. I'm super excited because I just launched the Beyond Your Bill series which, you know, we've been talking to a lot of people about helping them understand how their GCP billing and cost management tool-- there's a bunch of tools in there, but what are they? How do they work? How do I know what I'm actually spending my money on? All these really, really important things. 

So I'm super excited to launch that, and we're working on a bunch of other content surrounding that to help people, again, get that understanding of how do I measure my costs? What tools are available to me? And then really, how do I actually use those tools? 

MICHELLE: Because in addition to using the right tool for the job, you also need to understand how much each of those tools costs. 

MARK: Absolutely. I mean, it's such a bare metal kind of thing. Maybe bare metal wasn't the right word there. It's such a basic concept that you need to understand. Like, look, I have all these tools available to me. But if I'm going to use all of them, I'm also going to pay for them. It's something to be aware of when you're working on all these things. It's like yes, the power of Google and the power of all these computers around the globe are at your fingertips. But they all have different costs associated with them, too. 

MICHELLE: And with great power comes great responsibility. 

MARK: And on that note, I think we'll call it. Thanks to everyone for tuning into our data science episode. And we'll see you all next week. 

MICHELLE: See you next week. 

[MUSIC PLAYING] 

MARK: It turns out, with machine learning, you can still write infinite for loops. And we don't have to worry about Skynet because some programmers just make mistakes. 

You know, with every piece of software, we can just write infinite for loops. 

[APPLAUSE]