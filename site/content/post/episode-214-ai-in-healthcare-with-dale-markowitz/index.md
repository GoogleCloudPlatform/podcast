+++
audioDuration = "00:29:21"
audioFile = "Google.Cloud.Platform.Podcast.Episode.214.mp3"
audioSize = 42275465
categories = ["AI", "Healthcare", "Machine Learning"]
date = "2020-04-01"
description = "Gabi Ferrara joins Mark today for an in-depth interview with Dale Markowitz about machine learning in the healthcare and medical fields."
draft = false
episodeNumber = 214
hosts = ["Gabi Ferrara", "Mark Mirchandani"]
title = "AI in Healthcare with Dale Markowitz"
image="/post/episode-214-ai-in-healthcare-with-dale-markowitz/images/hero/hero-EP-214.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/ft46dh/episode_214_ai_in_healthcare_with_dale_markowitz/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Gabi Ferrara](https://twitter.com/gabidavila) joins [Mark Mirchandani](https://twitter.com/markmirch) today for an in-depth interview with [Dale Markowitz](https://twitter.com/dalequark) about machine learning in the healthcare and medical fields. Dale talks about the coolest ways ML is transforming the healthcare field with advances in imaging and more accurate diagnoses of cancers.

Later, Dale talks about how the cloud is used in healthcare to make data collection and sharing more efficient. The Google For Healthcare API, for example, makes working with common medical data types such as FHIR easier and more consistent. It helps with things like anonymizing of data and works with BigQuery for data analyzation. When data is collected and stored in the right format, it can be used to track healing progress, make health predictions, and more.

<!--more-->

##### Dale Markowitz

Dale Markowitz is an Applied AI Engineer and Developer Advocate at Google.

##### Cool things of the week

* Google Game Developer Summit on Youtube [videos](https://www.youtube.com/user/GoogleDevelopers/playlists?view=50&sort=dd&shelf_id=88)
* Simplifying Google Drive's folder structure and sharing models [blog](https://cloud.google.com/blog/products/g-suite/simplifying-google-drives-folder-structure-and-sharing-models)
* PostgreSQL 12 is in Beta on Google Cloud [docs](https://cloud.google.com/sql/docs/release-notes)
     * New 96-core machine types for MySQL, PostgreSQL and SQL Server

##### Interview

* Google's lung cancer detection AI outperforms 6 human radiologists [article](https://venturebeat.com/2019/05/20/googles-lung-cancer-detection-ai-outperforms-6-human-radiologists/)
* BigQuery [site](https://cloud.google.com/bigquery)
* Cloud Healthcare API [site](https://cloud.google.com/healthcare)
* Google FHIR [docs](https://cloud.google.com/healthcare/docs/concepts/fhir)
* Google Games Dev Summit Playlist [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqI4HG9PQc1mplzlAFPvBh_3)
* Building Contact Center AI Solutions with Quantiphi - Stack Chat [video](https://www.youtube.com/watch?v=cTZArDgbIWw&t=4s)
* Verily [site](https://verily.com)
* DeepMind [site](https://deepmind.com)
* AlphaFold: Improved protein structure prediction using potentials from deep learning [research](https://deepmind.com/research/publications/AlphaFold-Improved-protein-structure-prediction-using-potentials-from-deep-learning)
* Computational predictions of protein structures associated with COVID-19 [research](https://deepmind.com/research/open-source/computational-predictions-of-protein-structures-associated-with-COVID-19)
* How Machine Learning is Transforming Healthcare at Google and Beyond [blog](https://towardsdatascience.com/how-machine-learning-is-transforming-healthcare-at-google-and-beyond-d4f664b7e27c)
* How to develop machine learning models for healthcare [article](https://www.nature.com/articles/s41563-019-0345-0)

##### Question of the week

Where do I get started debugging performance for my MySQL database?

* [Diagnose](https://cloud.google.com/sql/docs/mysql/diagnose-issues) and [Slow-Query Log](https://cloud.google.com/community/tutorials/stackdriver-monitor-slow-query-mysql)
     
##### Where can you find us next?

Gabi will be working [Office Hours](https://gabi.tips/office-hours).

Mark will be making more videos like [KubeFlow 101 Series](https://www.youtube.com/watch?v=cTZArDgbIWw&t=4s) and [Stack Chat](https://www.youtube.com/watch?v=Bu2uEX2nB9A&list=PLIivdWyY5sqJvwGd0PTzSx1j0cePX0INl).

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to Episode 214 of the weekly Google Cloud Platform podcast. As always, I'm Mark, and I'm here with my colleague, Gabi. Hey, Gabi. How are you doing?" >}}

GABI: I'm good, Mark. How are you? 

MARK: I'm doing very well. You know, we've been keeping very busy, doing a lot of interesting projects. But it's always exciting to get another chance to chat with you. 

GABI: Yeah, long time, but now I'm here back. 

MARK: It's awesome to have you back, and I'm always glad to get your perspective on some cool things, including our really great conversation today. So who are we talking to? 

GABI: Today, we'll be talking to Dale Markowitz. She's our colleague and developer advocate at Google Cloud. She works with applied AI. And she'll be talking about machine learning in medicine. 

MARK: Yeah. It's super, super cool to hear about. And I think the applied side is also very interesting. Remember, we've talked a lot about what AI can do. So it's always really interesting to see the actual application of that. 

GABI: Yeah, it does actually impact a lot of people. So it's going to be a very interesting conversation. 

MARK: Looking forward to that. And then after that, I've got a question for Gabi about how to optimize my MySQL databases, a subject I have tried to do many times, but still need very, very much more information on. 

GABI: Well, it's a bit holistic, you know? You'll learn with experience, like most things in life, you know? But I have tips for people. So keep an eye for that. 

MARK: OK, well, that'll be great. But before we do any of that, why don't we get into our cool things of the week? 

[MUSIC PLAYING] 

Well, I've got one cool thing for this week, but I do want to make a shout-out to-- you know, last week, we asked John a little bit more about the game servers on Google Cloud. There's a bunch of great content about the Google Game Developer Summit out on the Google Cloud Platform YouTube channel. So we talked a little bit about that last week. But I wanted to make sure that people knew that there are some really, really cool talks out there, and to go check those out. 

For my other cool thing of the week, there's a great little article that we'll link to in the show notes talking about shortcuts in Drive. And this is a weird one, I know. But one of the things that really confused me when I started working more with Drive was how a file could exist in multiple locations. And I think for some people, it got kind of confusing to understand where exactly a file is located and who has access to it, those sorts of things. 

So it sounds like, with this new article, they're actually doing away with that. And they're going to go ahead and give every file a single place to exist, and then shortcuts to link into it. And I think that's actually really cool, because it helps make Google Drive, especially when you have a ton of files and a ton of sharing, it makes it really, really complicated. So it's super exciting to see this new ability to maybe hopefully track down some of these files that I've lost over the years. 

GABI: Yeah, that's a single source of truth, as we say. 

MARK: Yeah, I think it's a great way to approach it, so super looking forward to that. 

GABI: My cool thing of the week also has a shout-out, as Mark did. We have Postgres 12 in beta. And most people know that I am more of a MySQL, MySQL, whatever you want to say, person. But one of the things that Postgres 12 brings to the table is the ability of having generated columns, which means you can create virtual columns that actually doesn't physically exist on the table, and have, for instance, total quantity times unit price, for instance, without having to have to store that physically. So you have on-the-fly computational values. And that actually comes from order databases. But MySQL actually did it first, Mark. Did you know that? 

MARK: I did not. 

GABI: For the open-source databases, although Firebird is old, also has it. I don't know anymore. But the shout-out would be we have now 96 core machine types for all of Cloud SQL databases. So you can have 96 cores to do whatever the queries you want to do on your database. 

MARK: And if you're using Postgres, to use the new generated columns. 

GABI: Yes, yes. 

MARK: And we had a great conversation a few weeks ago talking about SQL Server on Cloud SQL. So if Cloud SQL is something that's interesting to you, I definitely recommend checking that out. And we mostly talk about SQL Server, but a little bit of an overview about Cloud SQL and how it works. 

GABI: Yes, Cloud SQL has some great features that makes you managing your database easier. So let's now talk to Dale, shall we? 

[MUSIC PLAYING] 

Hi, Dale. Who are you, and what do you do? Tell us a bit about yourself. 

DALE: Hey, Gabi. So I am an applied AI engineer and developer advocate here at Google. So I spend a lot of time talking to people across all different industries about how machine learning can help their businesses. 

MARK: OK, now you said "applied." What does that mean in your case? 

DALE: Well, there are lots of different things that you can do in machine learning. You can be working on core algorithms and thinking of new ways to build models. You can be really focused on building those models. But I tend to think mostly about how different industries who maybe aren't familiar with machine learning can start thinking about AI. A lot of times, it's not obvious to the developers working on machine learning how other industries will use their tools, and vice versa. 

GABI: Dale, we see here you work at Google. And we see that sometimes you work with health care, as you mentioned. Can you elaborate a bit more on that? 

DALE: Yeah, I mean, health care has lots of challenges that machine learning can help with. And there are lots of problems within the health care medicine space that machine learning is particularly well-suited for. And in fact, a lot of the more exciting discoveries that you hear about algorithms doing things that are good for humanity are in the space of health care. 

MARK: One of the more common examples of ML that I can think of is usually around identifying different facets or different assets inside of a picture. Is that something that comes up often in the medical space? 

DALE: Yeah, sure. It sounds like you're talking about a vision algorithm. So maybe an algorithm looks at a picture of a street and identifies the street signs. But of course, you can imagine tons of data in the medical field that's also images, like maybe I had an X-ray of my lungs taken, or maybe you have a picture of my skin, and you want to see if there are any abnormalities there. So yeah, the same techniques that we can use to analyze typical photos or Google Photos can also be adapted to the medical field. 

GABI: So Dale, first of all, I have a question about, in the medical field, what you use most ML for. But I was going to AI, ML and AI, people get confused a lot because it's trendy right now. So can you explain to us, is ML inside of AI? Is AI inside of ML? How do I refer one thing and differentiate one thing from the other? 

DALE: It's funny that you ask that, Gabi, because I'm sure that you, as well as I, have heard there's just a lot of debate between us and our colleagues that work in this space about what word you should really be talking about. Usually, I would say a majority of the people that we work in Google prefer "machine learning" because it's more a precise description of what we do. Artificial intelligence, I guess you could call it a superset of ML, so some techniques can be ML. 

But for example, a lot of algorithms that describe how robots move, they've traditionally been called AI, but they don't use the ML techniques that we use today. So I'd say let's stick with ML for now. 

GABI: OK. 

MARK: So going back to Gabi's question, what's the most common type of application that you have seen ML used for in the medical field? 

DALE: There are so many uses all over the place. And I guess to be fair to people, I should say within health care and medicine-- because I know, a lot of times, people think of these as different-- everything from looking at medical scans to actually making data easier to work with to helping doctors and clinicians enter data more easily, all of this stuff can be improved, or we can gain insights from machine learning. 

GABI: Where in the medical field ML is more successful in your opinion? 

DALE: Well, some of the cases where I think it's been-- I don't know most successful, but the most flashy and just really impressive has been in interpreting medical scans. So earlier, we talked about how image data, like the same way that we have algorithms to analyze photos, we can use them on image medical data. And there have just been so many studies recently that really are mind-boggling, where an algorithm looks at a scan and diagnoses an abnormality or identifies cancer. And a lot of times, when these scans are put up to human beings and experts, the algorithm often does better at spotting them than trained clinicians. 

Let me give you a specific example. In May of last year, there was an interesting paper that came out of Google and in collaboration with others that was using deep-learning models to analyze CT scans for the presence of lung cancer. And they trained their algorithm, and then they compared it with board-certified radiologists. And the model is actually more accurate. Lung cancer happens to be both extremely deadly-- it's the leading deadly cancer. Part of the reason it's so deadly is because it's really hard to catch in screenings, and it's really hard to catch early. A lot of cases are subtle. So it's a potentially very impactful algorithm. 

MARK: And I think we've talked about this before, but of course, the goal of being able to analyze these things with machine learning is to kind of assist with the medical professionals, right, not to, obviously, replace them. 

DALE: Oh, yeah, definitely not. I don't think anyone would be very comfortable with that. Pretty much whenever we design algorithms that we imagine to help with this sort of thing, we think about how they would be used with a human in the loop, so how they could assist your doctor. 

So one obvious case is, if it's true that things like lung cancer are really hard to detect. And in fact, in that case, there's a really high false-negative rate, which means there is cancer, but they don't detect it. These algorithms can basically be used as something like a red flag, like an anomaly detection. It can just alert the doctor to maybe there's something weird about this scan that you should take a second look at. 

The other thing is that all of these algorithms today are, for the most part, designed with some component of what's called explainability in AI. And machine learning has a bad rap. People think that it makes models that are black boxes or that we don't totally understand. But we're more and more focusing on making that not the case. So building an algorithm that not only says, you know, 90% cancer, but that also says, and these are the pixels in the image. This is the part of the lung that is leading me to make that decision. And that's especially useful to doctors, and you can imagine how it would enable them to speed up their diagnosis. 

GABI: Is there any other examples for diagnose purposes that ML has been used to? 

DALE: Yeah, totally. In a way, it's sort of like you know that expression, "When you have a hammer, everything is a nail?" But I think in this case, it's really true. From my perspective, it's just a matter of getting the right data to build models. And these techniques seem to be really effective. For example, in addition to the lung cancer detection, we've seen the same types of algorithms able to identify skin conditions from pictures of your skin, detecting things like melanoma or psoriasis or eczema, et cetera, detecting breast cancer. 

One of the most successful engagements that Google's been involved with in this space is detecting diabetic retinopathy. If you've never heard of that, it's a type of disease that you can get in your eye that can lead to blindness. And it's an extremely treatable disease if you recognize it and catch it early. So a lot of people in this world become blind, but if the diabetic retinopathy had been detected, it could have been avoided. This was actually done by Google back in 2016 with others. 

And what makes it so impressive is that actually, today, we're seeing it being used in the field. There are actually some examples of programs-- for example, hospital in India and Thailand that are using this alongside doctors. And just like I mentioned before, the model, in addition to saying if it's likely that you have this condition, it also says where in the picture of the eyeball does it look like there's signs of this condition. 

MARK: So I think that's a great example of what you said earlier about explainable AI, being able to actually have the AI explain why it made this prediction-- or rather, how it made this prediction, and what it's thinking the different pieces are. And that kind of plays into what you mentioned just a little while ago about human in the loop, right? The ML does the work, and then it goes to a human so a human can kind of figure out why the ML thinks it's that way and then ultimately, hopefully, get these kind of things detected in people much earlier. 

DALE: Yeah, definitely. Actually, it's funny that you bring up human in the loop, because in the case of medical diagnosis, I think, to be fair, it's really algorithm in the loop, human being doctor driving the process. But often we talk about human in the loop for machine learning. A lot of people don't maybe understand this if they're not familiar with the field. But machine learning models make predictions that are always just predictions. They're probabilistic guesses. 

So even if you have a really, really high-quality model that's right most of the time, it wouldn't be an error or a bug if it sometimes made mistakes. That's just the nature of probability, right? So sometimes we want to use machine learning in a setting where it's really critical that we have no errors, or at least we don't have any performance that could be possibly worse than a human being. 

Like, for example, let's say that you have a form that somebody has filled out with their medical history. We can use an algorithm to look at that form and scan it to put it in a database, sort of like the same way you might scan your credit card to put it into an app. But if you take a picture of your credit card, and you know it goes into Venmo or whatever, and there are some mistakes, it's not a big deal. You try to submit the credit card. It says there's an error. And then you, the person, go back and correct it, right? 

But with something like health care data entry, it's really critical that the algorithm doesn't make a mistake that anybody passes over. So the idea of human in the loop is you have this pipeline where a lot of the process is automated, but there's always a human being there to check for errors and make sure that the quality is really high. The AI, in a way, is just speeding up the process for the human being. 

GABI: With all these medical applications of ML in the field, how Cloud help transform it? 

DALE: Well, one of the biggest problems that health care hospitals and doctors and clinicians face is dealing with their data. For a long time, the majority of medical data was sent through things like faxes on physical pieces of data. And it's only over the past 10 years that most of this data has become digital. But even though a lot of medical data is now digital, that doesn't mean it's in a format that is easy to share. It's this problem of interoperability, one which, if we can solve, promises we could do lots of things, from simply making sure all of your doctors are up to date on all of the tests and the diagnoses is that you've received, to more sophisticated stuff like training models. 

GABI: I see that one of the ways that people are using, it's normalizing the data to be able to train models, to be able to exchange with other doctors. Do you have more information about that? 

DALE: Yeah, so one of the main things that we'd like to do-- so this data is across different hospitals and doctors' offices in all these different formats. One thing that we would like to do, even if we can't make all the data completely in the same format, is just some sort of way of holding the data so that we can build applications around it, right? Sort of like it doesn't matter if you're using Internet Explorer or Chrome, we can both view HTML the same way. Is there something like that that can at least let us program better for medical data? 

The most popular protocol is called FHIR, the Fast Health care Interoperability Resource, or F-H-I-R. So it's a data model that's designed for being used on the web. So that's really helped with our processing. For example, at Google, open sourced a protocol buffer version of FHIR so that you can develop-- you know, wherever you would use a proto, you can use the Google FHIR proto. 

MARK: And of course, I mean, one of the biggest benefits to everybody kind of getting on the same platform is that it lets people worry a lot less about the interoperability or really trying to translate from one side to another, and instead, everybody just being able to build on that framework, right? 

DALE: Yeah. And I would say FHIR is not perfect. It doesn't force everybody to encode data exactly the same way. It just is maybe the first step in getting there. 

MARK: So can you talk a little bit more about the Google Health care API? 

DALE: Sure. So first off, I should say, wanting support for FHIR is something that lots of companies besides Google and throughout the industry are trying to rally behind to make popular. The Google Health care API is a set of tools that makes working with the FHIR data type and other common medical data types easier. So for example, another data type that's natively supported by Health care API is DICOM. That's the dominant standard for radiology and different types of medical images. And the Health care API lets you use this data. It does things that are specific to the health care industry, like help with anonymization. And it integrates with BigQuery, so you can use BigQuery to analyze these formats. 

GABI: So beyond the fact that having a nice format for everybody to see-- having interoperability, what else the consistent data can do for ML? What else can we achieve from that? 

DALE: Yeah, that's a good question. It feels like there are so many things that relatively simple machinery and techniques could help with if we only had the data. And we just don't, or at least we just don't have it in the right format. So one really cool example of what can happen when you do have the data in the right format was some interesting research that came out in May the year before last. So there was a hospital that was able to put all of its data into the FHIR format, which allowed researchers at Google-- and it was a collaboration with UCSF and Stanford and the University of Chicago. They were able to actually plot out a timeline of the care that patients received. 

So for example, over their whole time at the hospital, lower all of their vital readings or all of the results of their labs. If they spoke to the doctor and said that they were having certain symptoms, when did they say that, and what was the actual free-form words that were spoken? So it was able to align all these different types of readings and data points on a timeline. And using this, they were able to build a machine learning model that could weigh the importance of these different features and sort of deal with the unstructured text. 

And the model was actually able to predict some pretty incredible things, like how long were patients predicted to stay in the hospital. Would they die? And if they left the hospital, what was the probability that they would be readmitted? And this model, as the other ones, was also able to show what parts of that data it was using to make those predictions. It's just sort of incredible to see what you can do when all the data is together in the right place and the right format. 

MARK: Being that this is mainly data-driven-- I mean, it sounds like most ML AI applications are probably reliant on the data in order to actually make accurate predictions. So there's obviously a big challenge here, where all of this data needs to be stored in some way-- like you said, in an operable way that people can communicate with it more easily. Do you have tips for people that are kind of handling these types of issues right now, where they just don't have the right data, or at least the right amount of data in the right format? 

DALE: I suppose it depends on who you are. Are you a health care provider that has a lot of data but doesn't know what to do to make it useful? Unfortunately, one of the biggest problems if you're a researcher, for example, is getting the right permissions to see patients' data, right? A lot of this data is private. So it can be hard as a researcher to do work in this field. 

MARK: So what other examples are out there? 

DALE: Man, there is so much, it's hard to just distill into a single podcast. But within Google, for example, if you're interested in this sort of stuff, it might make sense to look into Verily. That's one branch of Alphabet that deals with health care and medical data. 

And the other one is DeepMind, which is another Alphabet company that focuses on deep learning and has done lots of really neat research in AI and health care and medicine. So for example, one of the most interesting pieces of research that they put out recently-- so you may know DeepMind from AlphaGo. It was a machine learning powered bot that played Go really effectively. It's a board game, and it beat the world champion. And using that same sort of technology, DeepMind came up with this other system called AlphaFold. AlphaFold tries to solve the protein folding problem. 

MARK: So I've heard the protein folding problem before. But can you break it down, what that actually is? 

DALE: When it comes to biology, when you're looking at things like viruses or different structures in a cell, they're largely made of proteins. And if you want to know what a protein does, you have to know what it looks like, what its 3D structure looks like. So the protein folding problem is the problem of taking a sequence of genes of a protein, then figuring out what its shape should look like. And from that, you can figure out what does it do. 

GABI: So why is this important? 

DALE: Well, once you understand how a protein works, you can start to do things like think about-- like, for example, a lot of times by understanding protein structure of a virus, you can understand how you might design a drug that might bind to certain receptors that makes the virus less infectious. So basically, drug development is a really important consequence of understanding how proteins fold. 

One of the more interesting things that came out of DeepMind really recently was that they used AlphaFold to analyze coronavirus proteins. The genome of the coronavirus was published, and from that, AlphaFold file was able to look at it and predict what it looks like some of the proteins should look like. 

MARK: And then, I imagine, from there, based on their research, like you said, they can start to understand the virus a lot better and hopefully work on finding some sort of vaccine. 

DALE: Yeah. And they're not claiming that this is absolutely what the proteins look like. They actually published this without peer review because of, obviously, the speed and importance of responding to the crisis. But certainly, hopefully in the future, it can be used for quick drug responses. 

MARK: Well, thank you so much, Dale, for giving us kind of a whirlwind tour of what's going on right now. We've all talked about machine learning and heard of it in pretty much every industry. But it's great to hear a little bit more about how it can interact with health care and medical research. Super, super awesome to hear. 

Before we wrap up, do you have any kind of advice to people or anything else about people who are kind of just getting started with machine learning? 

DALE: Hm, well, machine learning is getting easier by the day. And it seems every week, a new Coursera course or something like that comes out. I've written my own blog posts. You can find them on my Medium blog. And actually, I've linked one below that I wrote about machine learning specifically in health care. So if you want to learn more about what we talked about, you can check out that post. 

If you're specifically interested about AI in medicine, Google and others published this sort of guide in "Nature" that also, hopefully, we can link below, and that just gives, like, an overview of how you should approach these complicated problems, how you should deal with handling people's data and providing results and understanding uncertainty and stuff like that. So that is a really fascinating read. 

GABI: OK, now. Thank you, and then we'll talk to you soon. 

DALE: Thanks, Gabi. Thanks, Mark. 

MARK: Thank you so much, Dale, for coming in and giving us some really cool information about how applied AI and ML kind of work in the medicine space. 

GABI: Yes, I did not know that you could do those things with x-rays and have the term "human in the loop." 

MARK: Yeah, that was really interesting. I hadn't heard of that. But it makes so much more sense, and I think it's a great way to explain the interaction between AI and between humans, what that responsibility, every problem is going to have human input, and it's going to have AI input. And that concept of explainable AI makes a lot more sense when you kind of have this human-in-the-loop model. And it's really used to speed things up in order to make kind of those second checks pretty quick. I think that's a great example of it. And so I'll definitely try to learn a little bit more about that, and hopefully use that to explain to people kind of the responsibility of ML in any process. 

GABI: Yeah, she clearly showed it's not just the machine making the decisions. So that's very important. 

MARK: Yeah, so definitely, definitely, an awesome chat. But now, I think it's time for our question of the week. 

[MUSIC PLAYING] 

So, Gabi, you know I've worked with MySQL for a very long time. But one of the things that always really kind of I spent a lot more time on probably than I should have was trying to figure out how to actually optimize it, because sometimes I'd write a bad query or a bad table or something of that nature. And it would end up getting a lot slower, and I didn't know how to actually start the debugging process. So do you have any tips for how we could actually start looking at performance in MySQL? 

GABI: Yes, I have several tips. But I'll try to keep it short. We have some links on the footnotes, so people, please follow up later. One of the things that you need to know is, what do you need to optimize for. So you need to figure out what your problem is. And one of the things that can help you, it's like the Control Alt Delete from the database. It's the show process list command. It shows you everything that's running right now on the database. It's like your task manager. 

And if you see a query that's taking forever, you can kill the query like you do on Linux command. You just say "kill" and the number of the process, and that's going to kill the query for you. And it usually tells you if it is sorting or disc allocation. And from there, you can get into, but it's a bit lacking on information. 

So there is also a thing called the performance schema, C schema, which it is available in Cloud SQL for you. And I think, though, you need to have 8 gigabytes of memory to be running it, at least. And it shows you, Mark, through the MySQL Workbench, which it is application, top 95 slower queries, the 95th percentile, or the top 5% slow queries, or the queries that are not using the access, because people say, oh, we're going to create an index to make my query faster. But sometimes you don't use it in the end. It just makes the database slower. So that's a way to figure out what you're using, what resources you're using. 

And based on that-- there is a link also in the show notes-- you can turn up some flags to make the performance faster, buffer faster, or memory faster. So it's, as I said, a problem with a lot of variables, because it all depends on the server configuration, too. But those places tells you what is wrong and then how you can start to fix it. It's when you discover what is wrong. 

MARK: Yeah. I mean, for me, the dreaded MySQL has gone away. The catalyst for like, oh, no, I've done something wrong. I need to figure out what it was. 

GABI: Usually, that one, it's like one of those cases when you have a error that doesn't describe everything well. So you use the same error message for everything. It could be actually the connection, the server died. It could be that. Or it could be you don't have any more connections available, so everybody's using the connections. So it decides the server's gone away. But it didn't, you know. It's still there. 

MARK: Yeah, it's probably one of the least descriptive error messages. Or actually, it's probably perfectly descriptive, but it's not terribly helpful when it does happen. 

GABI: Yeah, yeah, you're right. So what are you going to be working on? 

MARK: Well, I am probably going to be working mostly on, as usual, a variety of video content. We just launched some more customer interviews. Those are up on the YouTube Stack Chat playlist. So it's always great to talk to those customers and get a good feel for the work they're doing. Otherwise, you know, we've got the podcast. I'm working on a couple of new videos. So I'll be excited to talk more about those. 

Oh, and you know what? We just launched the Kubeflow 101 series on the Google Cloud Platform channel as well. So that is looking at Kubeflow, which I talked about a couple of weeks ago. But it's a really cool way to-- well, I suggest watching the video, because it gives a much better overview than what I can do now. But it's a pretty cool kind of framework/ecosystem for building large-scale ML applications in. So definitely check out the Kubeflow 101 video. How about you, Gabi? What are you working on? 

GABI: So I came up with this thing I copied from someone, which I don't remember who. But it doesn't matter. It's office hours, so for those who doesn't know, you get to have a slot with me. There is a link for my calendar on the show notes. And we talk about databases called SQL, performance issues, how to optimize your application for the database reading if you're using the right database, Mark. A lot of times, you're using the wrong database. And that's the things that I'll be talking with people in the office hours. So feel free to go there and grab a time for you. 

And I tried to make a bit Europe- and US-friendly. I have times in the afternoon for Europe and afternoon in the US. And I also, I am coming with a Twitch stream, Mark. But I don't know when. 

MARK: Oh. 

GABI: Yeah. 

[LAUGHTER] 

MARK: It's still in the planning phase. 

GABI: Yeah. I'm a bit scared. That one, I'm a little bit scared. 

MARK: Oh, no. Why for? 

GABI: I don't want people trolling me. 

MARK: Ah, well, the internet is always full of trolls. But we are seeing some really cool, cool experiments with people going out there. And when I think of Twitch, I usually think of gaming. And so they've kind of transformed themselves into a platform where a lot more people can do live engagement. I think it's a pretty cool idea. 

GABI: Yeah, I'll be doing live-- let's say you have a bug on a software, and nobody fix the bug. But you need to use the software. How you're going to do it, you know? So my idea is like, try to find workarounds, those kind of bugs, you know? Mostly helping people to figure out how to work with problems. That's the idea. 

MARK: Well, it sounds pretty useful. And if you want to follow those links up in the show notes, you can kind of get some information about debugging MySQL. And if that's not enough, you can sign up for office hours with Gabi, so she can help you walk through the more detailed steps. 

GABI: Yeah, that's right. 

MARK: Awesome. Well, Gabi, always good to work with you. And for all our listeners, we're very excited to see you next week. 

GABI: See you next week, or the next one. Bye-bye. 

[MUSIC PLAYING]