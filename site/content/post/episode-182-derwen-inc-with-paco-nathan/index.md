+++
audioDuration = "00:42:49"
audioFile = "Google.Cloud.Platform.Podcast.Episode.182.mp3"
audioSize = 62039835
categories = ["Derwen", "Machine Learning", "AI"]
date = "2019-06-19"
description = "This week, Jon and Michelle bring you another fascinating interview from our time at Next!"
draft = false
episodeNumber = 182
hosts = ["Michelle Casbon", "Jon Foust"]
title = "Derwen, Inc. with Paco Nathan"
image="/post/episode-182-derwen-inc-with-paco-nathan/images/hero/hero-EP-182.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/c2mnrc/episode_182_derwen_inc_with_paco_nathan/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week, [Jon Foust](https://twitter.com/syntxerror1) and [Michelle Casbon](https://twitter.com/texasmichelle) bring you another fascinating interview from our time at Next! Michelle and special guest Amanda were able to catch up with Paco Nathan of Derwen AI to talk about his experience at Next and learn what Derwen is doing to advance AI.

Paco and Derwen have been working extensively on ways developer relations can be enhanced by machine learning. Along with O'Reilly Media, Derwen just completed three surveys, called ABC (AI, Big Data, and Cloud), to look at the adoption of AI and the cloud around the world. The particular interest in these studies is a comparison between countries who have been using AI, Big Data, and Cloud for years and countries who are just beginning to get involved. One of the most interesting things they learned is how much budget companies are allocating to machine learning projects. They also noticed that more and more large enterprises are moving, at least partially, to the cloud.

One of the challenges Paco noticed was the difference between machine learning projects in testing versus how they act once they go live. Here, developers come across bias, ethical, and safety issues. Good data governance polices can help minimize these problems. Developing good data governance policies is complex, especially with security issues, but it's an important conversation to have. In the process of computing the survey data, Paco discovered many big companies spend a lot of time with this issue and even employ checklists of requirements before projects can be made live.

In his research, Paco also discovered that about 54% of companies are non-starters. Usually, their problems stem from tech debt and issues with company personnel who do not recognize the need for machine learning. The companies working toward integrating machine learning tend to have issues finding good staff. Berkeley is working to solve this problem by requiring data science classes of all students. But as Paco says, data science is a team sport that works well with a team of people from different disciplines. Paco is an advocate of mentoring, to help the next generation of data scientists learn and grow, and of unbundling corporate decision making to help advance AI.

Amanda, Michelle, and Paco wrap up their discussion with a look toward how to change ML biases. People tend to blame ML for bias outcomes, but models are subject to data we feed in. Humans have to make decisions to work around that by looking at things from a different perspective and taking steps to avoid as much bias as we can. ML and humans can work together to find these biases and help remove them. 

<!--more-->

##### Paco Nathan

Paco Nathan is the Managing Parter at Derwen.  He has 35+ years tech industry experience, ranging from Bell Labs to early-stage start-ups. Paco is also the Co-chair Rev. Advisor for Amplify Partners, Recognai, Primer AI, and Data Spartan. He was formerly the Director of Community Evangelism for Databricks and Apache Spark.

##### Cool things of the week

* CERN recreated the Higgs discovery on GCP [video](https://www.youtube.com/watch?v=CTfp2woVEkA)
     * To discover the Higgs yourself, check out the CERN open data portal [site](http://opendata.cern.ch/)
* Fun facts from Michelle's visit:
     * Seven total, four main experiments
          * ATLAS (largest, general-purpose) [site](https://home.cern/science/experiments/atlas)
          * CMS (prettiest, general-purpose) [site](https://home.cern/science/experiments/cms)
          * ALICE (heavy-ion) [site](https://home.cern/science/experiments/alice)
          * LHCb (interactions of b-hadrons, matter/antimatter asymmetry) [site](https://home.cern/science/experiments/lhcb)
     * The French/Swiss border runs across the CERN property 
     * Streetview of CERN control center [site](https://home.cern/science/accelerators/accelerator-complex)
     * CERN is the birthplace of the web
     * Where the protons come from [site](https://www.lhc-closer.es/taking_a_closer_look_at_lhc/0.proton_source)
     * Watch Particle Fever [movie](https://play.google.com/store/movies/details/Particle_Fever?id=MDDyOFvU4Pg)

##### Interview

* Derwen, Inc. [site](https://derwen.ai)
* Derwen, Inc. Blog [blog](https://medium.com/derwen)
* Cloud Programming Simplified: A Berkeley View on Serverless Computing [paper](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2019/EECS-2019-3.pdf)
* Apache Spark [site](https://spark.apache.org)
* Google Cloud Storage [site](https://cloud.google.com/storage/)
* Datastore [site](https://cloud.google.com/datastore/)
* Kubeflow [site](https://www.kubeflow.org)
* Quicksilver [site](https://quicksilver.com/wp/)
* O'Reilly Media [site](https://www.oreilly.com)
* Google Knowledge Graph [site](https://developers.google.com/knowledge-graph/)
* Jupyter [site](https://jupyter.org)
* JupyterCon [site](https://conferences.oreilly.com/jupyter/jup-ny)
* The Economics of Artificial Intelligence [site](https://www.mckinsey.com/business-functions/mckinsey-analytics/our-insights/the-economics-of-artificial-intelligence)
* "Why Do Businesses Fail At Machine Learning?" by Cassie Kozyrkov [video](https://www.youtube.com/watch?v=dRJGyhS6gA0)
* The Gutenberg Galaxy [site](https://books.google.com/books/about/The_Gutenberg_Galaxy.html?id=y4C644zHCWgC)
* Programmed Inequality [site](https://mitpress.mit.edu/books/programmed-inequality)

##### Question of the week

[Stadia Connect occurred last Thursday. What are some of the biggest announcements that came out of it?](https://www.youtube.com/watch?v=k-BbW6zAjL0)

##### Where can you find us next?

Jon is in New York for [Games for Change](http://www.gamesforchange.org/).

Michelle and Mark Mirchandani are back in San Francisco.

Brian & Aja are at home in Seattle.

Gabi is in Brazil.

##### Sound Effect Attribution

* "Crowd laugh.wav" by tom_woysky of [Freesound.org](https://freesound.org)

{{< transcript "[MUSIC PLAYING] JON FOUST: Hi, and welcome to episode 182 of the weekly Google Cloud Podcast. I am Jonathan Foust, and I'm here with my colleague, Michelle Casbon. Hey, Michelle, how are you doing?" >}} 

MICHELLE CASBON: Hey, Jon. I'm great. How are you? 

JON FOUST: I'm doing pretty well. It's a really long week, but I'm real excited for a lot of things that are happening this week in E3. And I'm really excited to hear what you guys have to talk about today with Paco Nathan from Derwen AI. Paco will tell us a little bit about the work he's doing in AI, big data, and cloud, and a little bit about bias in ML. And we are joined by special guest Amanda Casari, so that seems exciting. 

MICHELLE CASBON: It is. It was a really great segment to do. I'm pretty excited to hear how it turned out. 

JON FOUST: Awesome. Well, you have a bunch of cool things for the week, but I will tease the question of the week, which is last week, we got to see StadiaConnect. And it answered a bunch of questions that developers have had at our gaming conferences that Mark and I have been attending. So I'll be going into a little bit of the detail that we got to hear there. 

MICHELLE CASBON: All right, but first, let's talk about the coolest things of the week. 

[MUSIC PLAYING] 

Jon, what was the coolest thing about this week? 

JON FOUST: CERN recreated the Higgs discovery on GCP. 

MICHELLE CASBON: That's right. 

JON FOUST: Yeah, you might have a little bit more detail on that. 

MICHELLE CASBON: Yeah, so this actually happened a couple of weeks ago. So I am just getting back from my trip to Europe where I got to visit CERN in person. And I was really blown away. 

I went to KubeCon Barcelona and there were a few engineers up on stage. They gave a keynote where they recreated the discovery of the Higgs boson on Google Cloud. So we'll link to a video. Check it out. It was really amazing. They essentially reproduced the entire discovery within I believe it was four to five minutes on stage, so you can see that happening. But what was really cool is being able to visit in person obviously, so after I got to see it on stage. 

CERN is such a good partner for Google Cloud because they've always had this open data policy. But before public clouds existed, they weren't really sure, so not many people could really do anything with the data sets that they uploaded because not many people had access to the types of data centers that they have access to. So if you are interested in discovering the Higgs yourself, they've uploaded that entire data set. Check out the CERN Open Data portal if you want to recreate their experiment on your own. 

But I wanted to share some really fun facts. I got to visit ATLAS, which was one of seven experiments. There are seven in total for main experiments. ATLAS is a general-purpose experiment. It's the largest. And I didn't get to see these other ones, but there's also CMS-- also general purpose-- ALICE, LHCb, and a few other ones. So it was really interesting to see it in person, to see what a collider looks like when it's a few feet in front of you. 

But some of the really cool things I learned-- the Large Hadron Collider was built on the French-Swiss border. And so the border actually runs right across the property, and the majority of the LHC is actually on the French side. And what's interesting about that when you go to visit, if you want to get money out of a Swiss ATM, you can only do that on one side of the property because Swiss banks can only exist within Switzerland. 

The other cool thing that I liked-- did you know that CERN was the birthplace of the web? 

JON FOUST: I did not actually know that. 

MICHELLE CASBON: So I got to visit the building where it all began. So I got to the data center. There are some very large transcontinental interconnects that essentially end at CERN. It was really neat to be there. So not only was it the site of the announcement of the Higgs particle, but also birth of the web. 

JON FOUST: Wow. 

MICHELLE CASBON: Yeah, it was a really interesting space to be in. But my sort of burning question for this physicist-- I could ask her anything, and the question that I ask is so the Large Hadron Collider takes protons and it sends them off into opposing directions so that they collide together. And my question was where do the protons come from that these beams are composed of? 

And her answer was it's a canister of hydrogen. And there's some really interesting math behind that. It's a really small canister, like, the size of maybe your forearm, so very small. You can actually see it in person if you go to visit. And that will essentially power the LHC in perpetuity. 

So I'll add a link to some of the math, but it's essentially just taking hydrogen atoms, splitting them up so that they're just a single proton, and sending them on a collision course. I thought that was really interesting. I expected some very complicated process for, like, yanking protons out, but it's actually very simple. 

JON FOUST: Nice. I can tell by the excitement in your voice that you had a really good time. And for our listeners, can you tell them what CERN actually stands for just in case none of them actually know? 

MICHELLE CASBON: Yeah, I believe it's the European Center for Nuclear Research. So they're doing high-energy physics, smashing protons together. So the Higgs discovery was so important because it helps us understand what happened after the Big Bang. It helps us to understand the world around us. And they're doing some really important research there. 

If you want to follow up, again, the Open Data portal, if you want to look at any of their data sets, that's a good place to start. Also they sent a Google Street View camera through there, so if you want to see what the CERN control center looks like, you can do that via Street View. It's a really cool perspective. 

But also one of the best ways to see it is to watch the documentary called "Particle Fever." That was one of my first introductions to CERN is watching the video. And that essentially, it's a documentary of the explanation of the announcement of the Higgs particle. So I thought that was really interesting. 

JON FOUST: That's cool. Do you happen to know which GCP products they were using when they recreated the discovery? 

MICHELLE CASBON: Yeah, they describe it all in the video. And I believe they were using Google Cloud Storage, Kubernetes Engine, and Memorystore is the other GCP product that they're using. And what I didn't know-- I figured this out at KubeCon when I spoke with them afterwards-- they're also using Kubeflow. Did you know that CERN has been using Kubeflow for over a year? They're one of our oldest users. 

JON FOUST: I actually didn't know that. Actually at Next, I staffed the Kubeflow booth and that's where I got my first introduction to Kubeflow. So it's kind of amazing to see that CERN is actually using Kubeflow for recreating this discovery. It's kind of awesome. 

MICHELLE CASBON: Yeah. And I'm very excited, so that's part of why I was there because I went and I talked to them about some of their newer Kubeflow uses. And they have some really, really exciting ideas. And I'm hoping to be able to work with them in the future to do even more with the platform. It's very exciting. 

JON FOUST: Well, Michelle, that was definitely awesome. So let's just jump right in with Paco and our surprise guest Amanda, and see what you guys talked about at Next a couple of months back. So let's hear what they have to say. 

[MUSIC PLAYING] 

MICHELLE CASBON: Huge welcome to a few of our guests today. We have Paco Nathan, managing partner for Derwen AI. And we also have Amanda Casari here. She's an engineer on Google Cloud. We work very closely together. These are two people that are very close to my heart. I've known them both for a few years, and I'm honored to have them both here today. Thank you for joining us. 

AMANDA CASARI: Thank you. Super excited. 

PACO NATHAN: [INAUDIBLE] 

MICHELLE CASBON: So you're here at Cloud Next. What are some of the most exciting GCP tools that you've been working with recently? 

PACO NATHAN: Oh, fantastic. Well, definitely, our company runs on GCP. And I would kind of roll back and reference there's a paper called the "Berkeley View" about serverless, so the Dave Patterson paper. Really, Eric Jonas-- shout out to Eric, and the whole team there, my former boss Ion Stoica, et cetera. 

They did a paper like 10 years ago trying to describe what they thought cloud was going to be after about three years of use cases. And I was invited to comment on the paper and did a guest lecture. And that led to tools like Apache Spark-- like the grad students who created Spark were in the audience and were talking about it. 

And so 10 years to the day, they have put together another paper. A lot, again, I mention Eric Jonas doing PyWren, NumPyWren, et cetera, all the work around Ray, and really trying to understand the fundamental economics of how does serverless change this landscape. 

And so they're using serverless as kind of a bigger umbrella term. You know, it's really thinking about the large-scale services-- like I use Cloud Storage a lot, I use Datastore. These are kind of things where I don't have to run a server, and so that complexity in state is just off of our operations list. 

And I would reference that paper. It's like drop what you're doing and go read that paper. And there's a really great blog post by Ion Stoica comparing the two of them. So that's what I'm excited about. 

MICHELLE CASBON: Yeah. I know the conference has just kicked off, but the highlight for me so far has been having you moderate our session. 

PACO NATHAN: Thank you very kindly. Thank you, Michelle. And you all did a fantastic session there. I loved the theme. I loved the big reveal and the outcome following up from the session too. Maybe we could talk about that some too. 

MICHELLE CASBON: Yeah, I would love to hear your favorite part of the session, why you think it's important. And let's tell people a little bit more about what that big reveal was. 

PACO NATHAN: So really, well, there were really two parts that really popped out at me. I mean, obviously, one is just the richness of what's going on in Kubeflow and what you can do, especially the autoscaling parts that you demoed. Really, really fantastic work there. I'm learning more and more about this every time I look, but just the amount of management of internal microservices and what's being exposed externally. 

I've been working a lot with workflow tooling, and so I was really happy to see what's going on with Kubeflow. But then in the context also of like Quicksilver and what John Bohannon and their team at Primer has been doing, the other part of this, of course, was understanding human bias at scale, and looking at new sources, comparing that with Wikipedia, and just the fantastic work in highlighting where are those bias, but also how to fix it. 

MICHELLE CASBON: Yeah, that's right. They're doing some really amazing things. It was one of my favorite projects to be able to take that amazing MLP work and put it into Kubeflow. It combined two things that I'm just super interested in. So you have been pretty busy recently. You're very well known in the data science space and have your own projects now. Tell us a little bit about what you've been working on. 

PACO NATHAN: Sure. I'm at a company called Derwen. And we do a lot of machine learning work. We haven't announced it. Maybe I could just make the big reveal on the podcast. 

MICHELLE CASBON: That'd be great. 

PACO NATHAN: Yeah, so you know, we're doing a lot of work, a lot of tooling for developer relations, and particularly ways that machine learning can be used. In use cases that are related to DevRel, certainly taking a look at the whole art of performance that's associated with going out and speaking at conferences, meetups, et cetera. And a lot more teaching tools, I guess, kind of go along with it, but with a focus toward the communities that are engaged. 

So we've been working on that. And we have a small team together now, and have been pulling together clients, and rolling out some products. So hopefully, you'll see more of that later. 

MICHELLE CASBON: Yeah, that's amazing. This is the best location for you to be right now. 

PACO NATHAN: I appreciate it. 

MICHELLE CASBON: We've been collecting data points of things that we can improve. And all of your hard work will pay off I'm sure. 

PACO NATHAN: Wonderful. You know, there's another project too I could mention. My colleague Ben Lorica at O'Reilly Media, we just got done doing three large surveys. So it was really interesting. It's what we're calling ABC, so AI, Big data, and Cloud. 

And we were looking at across-the-world adoption for ABC, and in particular, taking a contrast between companies that are more mature-- maybe they've been doing machine learning and production for like five years-- versus companies that are just they've been in it for a couple of years, they're figuring it out versus companies that really haven't started yet. It's like what's the contrast between those? What do companies learn once they start adopting cloud, and adopting a lot the tooling, and then deploying machine learning? 

MICHELLE CASBON: And what are some of the biggest surprises you found in that survey? 

PACO NATHAN: There was a couple things. I mean, one is we were struggling with how to understand investments and budget. And we had a multiple choice, like are you putting 5% of your IT budget toward machine learning, 10%, blah blah. And then we had this catch-all at the end, 20% or more. And we were like, OK, nobody's going to check that. 

And it turns out that when you look at the mature practices, they're really doubling down. So for 2019, 43% of enterprise said they're investing 20% or more of their total IT budget into machine learning projects. 

MICHELLE CASBON: Wow, that is a lot more than I expected. 

PACO NATHAN: Yeah, startling. And also just the range-- just the kinds of applications. Like 1/2 the organizations we surveyed were already using deep learning. And a 1/3 were using some form of human-in-the-loop active learning. 1/4 were already working with Knowledge Graph. That kind of shocked me. This study, I know there was a lot of people from finance, but we were surprised to see 1/5 saying that they're starting to work with reinforcement learning. And so portfolio management is coming in, but also customer support and other areas. 

And I think the biggest thing when you look at the gap between the mature companies in machine learning versus the ones that are still trying to figure it out, transfer learning is used at about 3x. So a really big bubble on transfer learning. 

MICHELLE CASBON: Wow. So as you see so many people adopting this-- I mean, 20% of IT budgets at large companies in 40% of-- 

PACO NATHAN: That's serious money. 

MICHELLE CASBON: That's serious money. And something like that can be quite dangerous if we don't have the right safeguards in place. 

PACO NATHAN: Exactly. To kind of roll back a little bit, I was co-chair for JupyterCon. And one of the real surprises last year was in Project Jupyter, a lot of the uptick was enterprise. And what we found is that large organizations are rolling out open source. They're running either on-prem, but more and more in the cloud or hybrid in some way. But they're using Jupyter for infrastructure, for data science so teams can work together and executives can see the results. 

So that kind of collaborative infrastructure based partly on Jupyter is also going back to Kubeflow. It's pretty much part and parcel there. We're seeing it across the board. And we're really surprised that it was in the regulated environments that there's more of an uptick. Capital One is really a good example. Two Sigma is another Wall Street firm. Inside DOD, PayPal, Netflix-- a lot of sort of digital infrastructure is relying more and more. 

And the thing that struck out is, like, once you deploy these kinds of collaborative tools and you start working with data science across the organization, the things that pop out are the business issues, the safety issues. And you're talking about it, it's like, how do we collaborate well as opposed to badly? What are the security issues? What's the data privacy issues? What are the ethical issues? And just the whole spectrum of compliance that comes in is like as soon as you can get that collaborative infrastructure out there, you come back to the human issues, the real business issues. 

MICHELLE CASBON: Yeah, and those are really structures that we need to put in place as humans to protect us from things going wild and computers taking over, right? 

PACO NATHAN: Yeah, one thing that I've seen over the past year or two in the field is there's a lot of sort of debate about friction or tension between data engineering and data science. 

MICHELLE CASBON: I'm very familiar with that tension. 

PACO NATHAN: I mean, it's a good topic. There's a lot of good issues there to explore. There are some companies that say you have to have five data engineers for every data scientist. And then you go to Stitch Fix and they're like, no, no, no, let's do it the other way around or even more. They have a lot of data scientists. 

So one thing there though that we find is once you deploy machine learning models in production, you get business issues that come back to the real human element. Models degrade once they hit live customer data. You have to figure that out. Trying to understand why they're acting differently than they did with the training set is often a very challenging statistical problem, probably more statistics than most data science teams will have. 

And it's also it's at that point where you start hitting the ethical issues, bias issues that will cause the regulators to come knocking. And the other thing too is I'm helping mentor someone over in London ICL-- a researcher working on attack vectors for deep learning. And you can inject a very tiny little bit of noise and throw off models. So the whole attack surface is just really not well understood yet. 

And you take all of those kind of safety factors into consideration. You have to have the right tooling. You have the right process, but you have to have the right culture too. 

MICHELLE CASBON: And one of the ways that you can help is to have good data governance policies. You've been doing some work in that space, right? 

PACO NATHAN: Definitely. I mean, that was something else that came out of those surveys was we asked, what are your priorities for investing in projects? Where are you really focusing your attention? And of course in enterprise, sort of what you would expect-- the devil you know-- data preparation, feature engineering. These are hard problems that are always going to be there, at least for the near future. 

But then you get down to like the fourth item in the list, and it was data governance followed by metadata management followed by lineage. It was a bunch of governance issues. And so companies are really taking this into account. One thing I didn't share, we were surprised by how many enterprise companies have checklists for ethics, and bias, and privacy before you deploy. So companies are really taking to heart that they have to do the right thing or they'll be in trouble. 

So governance is the larger issue there. And governance has been around since the '90s. And it was all sort of focused on data warehouses and SQL for a long time. But I guess about 2012, you start to see some of the first firms doing big data data governance. Like Alation, I think, was one of the early ones. And now, you've got a real healthy cohort of startups. A couple are public now. Private equity has taken over a few that are larger. 

But it's a really difficult thing to understand how do I have the governance in the cloud versus on-prem versus at the edge, the mobile apps, the data partnering that's going on. It's a super complex landscape and security issues are becoming more and more complex. Yeah, I don't think that there's a lot of clear answers yet, but there are a lot of good questions. 

MICHELLE CASBON: It's great to hear that companies have preflight checklists. I didn't realize so many people were doing that and that's definitely good to hear. 

PACO NATHAN: While we're talking, I can probably get some numbers on that. We would call it robust model building checklists. And definitely, there's this contrast where you see much more emphasis on this in the mature companies as opposed to the companies that are just starting to figure it out. 

And so I think that the industry is having a pretty healthy reaction to some of what's happened. But definitely, "Wall Street Journal" called 2018-- I don't have the exact language here, but it was basically a total meltdown globally as far as data governance. 

I mean, we had so many breaches, so many privacy problems that involved in some cases, hundreds of millions of people. In Asia, there was a very notable one. Also you know, things with Facebook, and elections, and all the rest-- it really brought to light how much we have to take into account that our governments forget. 

MICHELLE CASBON: Yeah, because as platforms like Kubeflow make it easier to spin up models, we really have to be careful about the types of models that we release out into the world, what we're doing with them, and how we're keeping track of where the data came from that went into those models. 

PACO NATHAN: Although I think that there's a natural pairing there. I mean, it sounds like the emphasis on developing checklists and developing culture around that could fit very well with a lot of the process that naturally comes out of Kubeflow and how you manage. There are open-source projects like Aeon and others that try to integrate some of this thinking into your development and deployment process. So I'm hopeful that these two kind of meet in the middle. 

AMANDA CASARI: As we're looking and you're talking about how people are spending budget, when you talk about checklists, that's processes. When you talk about people, and resources, and tooling, how do you think the most sophisticated, advanced companies are approaching splitting up that budget between people, processes, and tooling to be successful for all the challenges and risks that you're seeing approaching? 

PACO NATHAN: We tried to qualify and quantify some the answers to this. And I put together a diagram that's basically a survival analysis of that. So if you look at those three buckets that we're using for our dimensions, there's the companies that are the leaders that are more mature. They've been getting return on investment for machine learning for a period of years already. 

And then there's the companies that are just kind of evaluating. They're figuring it out. They've been in for a few years now, but they still struggle some. And then there's a companies, probably 50% or more, that are real nonstarters. They don't get past. 

So I think it's in the survival analysis, if you will, where you can see where the budgets are effective and where they aren't. And so for the laggard group that are nonstarters, they usually struggle with tech debt, and so that's one characteristic that is pervasive. Their data infrastructure has so much technical debt that it's hard to get accessibility to the data across divisions, so you still have a lot of silos. And that kind of goes back to the original problem of data science breaking down the silos. 

The other two points for the laggards are people problems. So one is a company culture that doesn't recognize the need for better data infrastructure, or data science, or machine learning. And that's generally from the top. 

Davos World Economic Forum recognized that as one of the crucial issues for Davos 2019 was looking across the board. Speaking of board, board members and executive staff-- they're where you run into problems where they don't recognize the need for machine learning. They know that their competitors are using it. They know that regulators are going to ask difficult questions. They don't know how to confront it directly. So yeah, it's the people problem of training and education-- what everyone say. 

And the third point is also a people problem. A lot of companies struggle with identifying business use cases, even if they're right in front of them. And so that's more a matter of awareness and learning about use cases, but it's kind of a product manager problem. So I would say that for the ones that are really fumbling in the 54%, it really does come down to tech debt versus culture. 

When you get in to the mainstream companies that are trying, what they find is talent gap, so hiring. And that's the big people problem. They also have a lot of data quality issues that they're still struggling with. That's always going to be there. But you know, there are priorities for where do you put your investment? Do you launch a new AI project? Do you do something else that's strategic? What are the concerns going to be for security, and other risks, and the kind of struggle with those? So those are kind of the three dimensions there. 

MICHELLE CASBON: So related to what you just talked about, hiring is hard, so the people problems of being able to find data scientists that are experienced enough to understand the full implications of the products that they're building. Do you have any ideas for ways we could put the proper safeguards in place, so like automated ways of maybe teaching younger data scientists and being able to be more conscious of that? 

PACO NATHAN: Very good question, and everybody struggling with it. McKinsey, and Deloitte, and the rest are publishing articles about how hard this is and how much everybody is struggling. I mean, there are definitely some excellent proofs, like Berkeley's program Data 101 where Berkeley now has data science programs that are required for all undergraduates that actually currently touch like 80% of the student population at Berkeley. 

MICHELLE CASBON: Wow. Is that any student or just computer science programs? 

PACO NATHAN: No, no, no. I mean across the board. The chancellor came in and said, thou shalt have data science as a requirement. And oh, by the way, build up conduits into social studies, into hard sciences, everywhere. 

MICHELLE CASBON: Wow. 

PACO NATHAN: So that's good. It's something that requires a lot of infrastructure at scale. It's not sure how that percolates down to Kansas State University. I don't mean to pick on them. I actually like Manhattan, Kansas. But there's a lot of other schools that maybe don't have 100 IT people on staff like Berkeley would. 

So that's a question of how do we level that playing field? Does the NSF get in and sort of cookie cutter successful programs across the board? There have been studies about the contrast of how Canada has tried to roll out pervasive data science education versus how the US has. And the story is in the US, it's really more concentrated in the big schools. Canada was a little bit more uniform about it. 

In general, I would lean more towards for the people who are working right now and need to be really conscious of the problems we have today about ethics, about bias, about how we're using data, about security, they can't really afford to stop everything and go get a bachelor's degree. 

So I would reference Amy Heineke, one of our friends who had the great phrase, data science is a team sport. And so I think that if you go through that lens where there's a lot of people who are going to be working with these kind of systems and problems-- and I don't even call myself a data scientist-- I think that a lot of people work in teams where these are the kinds of tooling and issues process that we have. And a lot more people need to be brought up to speed on how to participate in a team. 

But the thing that's been the real success out of data science is the diversity-- is the fact that it's inherently interdisciplinary and having people with radically different views of the workplace working side by side are how you knock down the hard problems that would have been siloed otherwise. 

So I think I would be in favor of how can people learn these skills. And I'm super excited to see the uptick in Python, the uptick in Jupyter, a lot of very accessible tooling to get very professional work done. 

MICHELLE CASBON: As part of my talk, I mentioned I showed Kubeflow running Jupyter. And I mentioned that the very first time I saw a Jupyter notebook was in Paco's workshop. 

PACO NATHAN: That was fun. 

MICHELLE CASBON: So everything I learned about notebooks, I have you to thank for that. 

PACO NATHAN: Thank you kindly. I'm very happy about what's been going on in the Jupyter community. And there's great mentoring programs that are adjacent to this. Some of what's happened out of what's now called the Carpentries, but basically mentoring programs for teaching people in research, and then teaching them how to teach other people in research. 

And I think that by and large, mentoring is a requirement for data science, especially in enterprise. The techniques go stale very quickly. You have to be doing continues learning. And part of the way you do that as professionals is to build up your network of people who can help you learn what's important. And the best way to do that is to mentor. 

So if you're out in the industry right now and you want to know how to build up this kind of capability in your organization, look at the mentoring programs because it's also a big win for diversity inclusion. It's a healthy thing for organizations. And I think it's really the only answer given the numbers when you talk about training for data science. 

MICHELLE CASBON: I agree there. I know my career has really been transformed once I found great female mentors, especially in the data science space. 

AMANDA CASARI: I love how you mention the team sport aspect and the cross-collaborative aspect for bringing people up to the next level. I think it's interesting how both of you are talking about training at the academic level and training at the beginning of people's careers are transition points for their careers. 

But as you addressed a lot of the risks and challenges people were facing, Paco, I think you were talking more about where companies have top-down management or have hierarchical organizations, and have teams that operate and do decision making that way. And for some organizations and verticals that works very well. 

How do we look at and give advice for people as they're thinking about transforming their organizations to be more reactive and proactive when issues come up as to how they shape their organizations to be able to work in this active learning and this leveling space where they're really facing the challenges head on rather than waiting for someone to come tell them they have a problem? 

MICHELLE CASBON: Yeah, and to support this mentoring model and really just proactively getting after these challenges. 

AMANDA CASARI: Yes, exactly. And across organizations, not just with a data science team, but with the entire business decision-making system that exists within a company. 

PACO NATHAN: So there's a kind of a catch phrase is being used in the industry now called the unbundling of decision making. And it's the idea that, OK, top-down worked in some places-- top-down decision making. But now, we're finding that enterprise organizations are large. They're very diverse. They're distributed. You can't rely on top-down control structures, so you have to have more collaborative ways of teams to arrive at decisions. 

And part of that is also just the influx of machine learning. Now, we have teams of people and machines. So how do we manage that? There's a really fantastic article about it from Ajay Agrawal. It was on McKinsey Quarterly. It's called "The Economics of Artificial Intelligence." But he really unpacks that notion of unbundling of decision making. 

And also, I believe somebody at Google-- the chief decision scientist for Google Cloud, Cassie Kozyrkov-- really fantastic work. Her lectures, I've gotten to catch a couple of those also about sort of decision engineering. And what Cassie was showing is Google is coming out and saying, hey, look, we've learned from some mistakes, and this is really a better way. 

I think that's an important thing to have because what better touchstone could you reference for using AI than Google, but yet organizations still have to learn. 

MICHELLE CASBON: Yeah Cassie is one of our favorite colleagues. We're very lucky to have her. She's part of our group. 

PACO NATHAN: Ah, fantastic. 

AMANDA CASARI: And I think it goes back to conversations. It's funny you were talking, Michelle, about your introduction to Paco. My introduction to Paco was a shared interest in control systems and complex systems. So we had a lot of conversations around how initial data site's pipelines were designed around DAGs-- Directed Acyclic Graphs-- which did not actually take into account feedback loops. 

And it sounds now like we're progressing to that point where we can get both systems design, as well as the computational design, to be able to incorporate decisive loops within there to be able to allow humans and machines to be able to question decision points along the way. I find that very encouraging and fascinating at the same time. 

PACO NATHAN: There's kind of three dimensions there. I think there are feedback loops that are inherently two-way streets if done right. And they involve the people in your organization who have a deep bench of the use cases, they have the institutional learning, and they train other people to come in. 

Again getting back to the team sport aspect, there's the models, which are being updated, but curated, and then there's also the customers. And so there's interaction between the customers and the models in your product, but also between your people and your customers. And also there's interaction between your people and the models. So how can you engineer or really facilitate those kind of feedback loops in a way that's very beneficial for all involved? 

AMANDA CASARI: And I think that was the point of your talk today, Michelle, was looking at where decisions happen inside of a very complex system, and then trying to make sure that you understand when your outcome is not reflective of a more holistic structure. How do you add something to that system, so that it can make better outcomes that is more representative of the people, and the population, and the customers that you want to serve? 

MICHELLE CASBON: Yeah, that's right. I mean, I think so many times, we sort of blame ML for coming up with these biased outcomes, but the models are subject to the data that we feed into them. And it takes human decisions to overcome that to build the type of model that can work around that bias, that can accommodate it. If we never make human decisions to do that, then we'll get the same outcomes every single time. 

And so it is very much a human problem. We can't blame the machines. Humans are creating the code that creates this. And all of that data is based on generations of human bias. And it's up to us to look at things from a different perspective and to take an active role in changing that. 

PACO NATHAN: Well, in your talk, you were discussing about structural bias and how some of this is so subtle and nuanced, you can't really point to here's rule 531 that causes the problem, but instead it's this interaction of a lot of complex rule systems that we just delegate to. And that in large quantities at scale, that's what leads to the really terrible cases of bias. 

MICHELLE CASBON: Yeah, that's right. These little, small things accumulate. When you're talking about just a small group of people, it's not always obvious, or maybe it is, but when you extrapolate out to millions of people, that's where it just becomes very glaring and it excludes whole groups of people. And you can use machine learning to identify that in a way that as a human, you couldn't. 

You can use machine learning to sort of tease out what those examples are, and then use it to help you build something that accommodates that, but these are all human decisions. It's very much a cop out to blame machine learning for being biased when we're the ones who are building these systems, who are coming up with the concepts, and using them to solve very specific problems. We're the ones defining those problems. 

AMANDA CASARI: And we're a part of that system then. So when we define ourselves as separate from it, we're trying to remove responsibility from the decisions we're making along the way. 

PACO NATHAN: Getting back to the control systems. 

AMANDA CASARI: Yes. But if we inject ourselves back as a node into that decision-making process, when we find that there are errors or problems, the solution to that may not always be more data, better data, different data. It may not be a different component in the algorithm. 

It may be that you have to allow trust for users, or customers, or yourself-- the people who are creating those systems-- and to place that back into a large distributed network, and being able to identify that, and identify what is the right problem that you're trying to solve. Is the answer a person? Is the answer an algorithm adjustment or is the answer a different computational structure? It's all very important. And I we're reaching a good stage where we can start to make those blended answers, as opposed to always looking for a different parameter value to fix. 

PACO NATHAN: Michelle, also I really liked what you're describing. I think it's important to think of machine learning and supervised machine learning not just as a way to predict, but as a lens. And so can we use it as a lens to understand contrast, and then begin to understand our own structural biases more? That's something that is probably not taught in courses about machine learning, but I think as we dig more into the real cultural problems that are coming to light, it will be. 

Well, Amanda you brought up a really good point about control systems. I think that Margaret Mead probably is one of the better authors in this area from like 60, 70 years ago. 

MICHELLE CASBON: Wait, can you say that name again? I didn't catch it. 

PACO NATHAN: Margaret Mead. 

MICHELLE CASBON: Oh, Margaret Mead. 

PACO NATHAN: Anthropology studies leading to second-order cybernetics, the Macy conferences. Really fantastic work back there. So I think that we need to look back into our own history-- intellectual history. Some of the bridges have already been crossed can really inform the social problems we're running into now. 

I mean, a lot of what we run into daily about bias and problems with machine learning-- you know, Marshall McLuhan set out this incredibly strange book called "The Gutenberg Galaxy" back in 1960. And it's actually kind of hard to read, but really, really fascinating to read. But I mean, just he just laid it out. He like, I could tell here's where it's all going to kind of go sideways. And you know, he didn't even live to see the internet, but he nailed it. So I think between Margaret Mead, and Marshall McLuhan, and Russell, and some of the others, there's a lot that we can draw. 

AMANDA CASARI: Yeah, I think that there's wonderful reading lists that we can have from historical technology. Marie Hicks-- the book she wrote on programming inequality and talking about looking at how women were systemically taken out of an entire industry in a country is very eye opening and wonderful for us to understand how do these decisions propagate. 

And then even should you change that initial decision point? How does it continue to move through these larger distribution systems that the effects are felt at a much larger time scale than you originally understood they would or could be? 

I think those are awesome use cases and historical examples for us to be able to look at to understand when we first started automating decision systems, when we first started creating things that we wanted to make a little bit quicker controls in order to be able to move us along with machines when we had human machine interactions, how did those first decisions get made? What were the implications of those? When we changed that initial decision that was made, how did it continue to move through the rest of our culture? And what should we be learning from that as we're looking at creating systems that scale? 

I love how you talked about that, Michelle, that we're giving the people tools to automatically scale and globally scale their systems, globally scale their products. And we want to be able to do that, but we also want to be able to make sure that we are keeping up with responsibility decision frameworks along the way and computational tools that will allow people to know when those systems are being used responsibly, when they are-- I think as you're talking about, Paco-- when the risk vectors are being examined appropriately, or if people are using them in a way they didn't originally intend that system to be used, and letting the creators know that as early as possible so that they can take action on what's happening with it. 

MICHELLE CASBON: And as much as possible, trying to bake that into the framework so that it's just by default, there for everyone as easily as the technologies that enable it. 

AMANDA CASARI: For everybody, right. I love how you say that because this is what Kubeflow is is an open source project. And we to make sure those frameworks are available to all and just not a few. 

MICHELLE CASBON: Wonderful. This has been amazing. Thank you both for sitting down with us. It has been amazing having you both here. Thank you for joining us. Paco Nathan from Derwen, is there any last things you'd like to plug? 

PACO NATHAN: No, just I'm really looking forward to wandering around here at Next. It's really fascinating. Maybe catch some more talks. 

MICHELLE CASBON: It's wonderful. Thank you again for taking so much time out of your schedule to join us here. And thank you again, Amanda, for joining us today. This has been one of the most fun podcast episodes I've ever done to have two of my friends altogether talking data science. I really appreciate it. What has been the best part of Next for you, Amanda? 

AMANDA CASARI: Well, this is my first Next. And so far, the best part for me has been seeing all of the amazing hard work that I've seen so many passionate people who really care about creating things for developers, and creating things for customers, and really creating tooling that will allow so many people to just create whatever is in their mind, to create their dreams, and to be able to carry that out in a way where they don't have to consider every small piece along the way they may not be expert in, but that they're happy to get expertise and help from other people. 

So really, identifying and seeing all of these individual pieces come together with people, and with hard work, and the releases, it's just been so lovely and fascinating. And also just the amount of, I think, culture and care for our conference, the intentionality that I've seen all the organizers put into making sure that it is an inclusive space for people to come, and ask questions, and talk to everybody that's here has been wonderful. 

MICHELLE CASBON: Thank you both for joining us. A huge thank you to Paco and Amanda for joining me at Next. I really enjoyed that conversation. I'm very happy to share it. So now to our question of the week. 

[MUSIC PLAYING] 

Jon, StadiaConnect happened last Thursday. What are some of the biggest announcements that came out of it? 

JON FOUST: I'm pretty excited about this because I've been sitting on a little bit of the information for a while, but we couldn't publicly release this information. But you know, it's always good to have that. Stadia-- the way I've always described it is being like the Netflix of video games. And you can imagine that your resolution scales based on your connection. And Stadia does the same thing. 

And one of the thing that developers always ask us at our gaming conferences is what is the speed necessary to render in 4K in the data centers? And you just need at least 35 megabytes per second, which I don't think is too bad because I think that's around the typical amount of down that you get on your ISPs, which is kind of awesome. And it only requires a minimum of 10 megabytes per second, which is awesome. So at 10 megabytes, you'll get 780p and you'll get, I believe, regular stereo sound. And at the highest, you'll get 5.1 surround sound. 

Also a bunch of games were announced as well. I'm pretty excited about a bunch of them. And a lot have been announced at E3 this week. So just some notable names, I'm excited about "Final Fantasy XV." "Assassin's Creed Odyssey" is what's been seen at our demos. "The Division 2" looked amazing when they showed it off. And one of the things that I think will be a really big hit in the home will be "Just Dance." So that'd be kind of cool. 

And the last thing is they kind of announced the Stadia Founder's Edition bundle. It comes with a 4K Chromecast and a Stadia controller. It's a special edition controller, so you can only get this as an exclusive when you get the founder's edition. And it comes in blue, which is kind of cool. But I'm personally more excited about the black one. 

And there actually was one more announcement. They talked about price. That was one of the big things that people wanted to know about. And for Stadia Pro, it will cost you $9.99 a month, which isn't too bad. That's around the same amount that you'll pay for your typical streaming service. And there also is a free tier, but that will be coming next year. And a lot of these features and a lot of these products will be coming out and launch in, I believe, November. So I'm really excited for that to come out. 

MICHELLE CASBON: That's a lot of announcements. Thanks for sharing. 

JON FOUST: I'm super excited about it. 

MICHELLE CASBON: All right, so I think that wraps us up for this week. So where are we all going to be this week? I know I'm back on my home turf in San Francisco after my long trip to Geneva and Barcelona. Where will you be, Jon? 

JON FOUST: Well, I'll be in New York. The next conference I'm actually attending is Games For Change. We talked about it a little bit in my last episode with Mark, but just to remind our listeners what that is, it's pretty much a conference where developers are creating games for change, as in the title. But it has a lot of social impact games, breaking down the barriers between diversity and being more inclusive in games. And developers who are really focused on that get to showcase those things. 

And I get to actually attend a couple talks to see the momentum shift to actually making these changes in games. So I'm pretty excited to be attending that. So that will be occurring for me next week. Yeah, the week of the 17th. So I'm pretty excited. 

MICHELLE CASBON: Sounds great. I think most of us are at home. I know Mark Mirchandani will be here in San Francisco. Brian and Aja will be in Seattle. And Gabi, I believe she'll be in Brazil this week. 

JON FOUST: I just saw her off last week, so she's really excited to go home and see not only her family, but she's attending a couple of conferences there as well. 

MICHELLE CASBON: Yeah, I've been to Brazil with Gabi. And she's in her element when she's down there. I'm very excited for her and jealous that I'm not in Brazil. 

JON FOUST: I've been to South America, but I'm really, really, really wanting to go to Brazil. So hopefully, Gabi will take me along one day. 

MICHELLE CASBON: I recommend it. It's a great place. 

JON FOUST: Well, thank you all for listening. And we'll hope to see you next week. 

MICHELLE CASBON: Sounds good. 

JON FOUST: Bye. 

MICHELLE CASBON: Thanks, Jon. 

[MUSIC PLAYING]