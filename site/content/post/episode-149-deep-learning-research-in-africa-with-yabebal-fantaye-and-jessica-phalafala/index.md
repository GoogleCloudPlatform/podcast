+++
audioDuration = "00:49:17"
audioFile = "Google.Cloud.Platform.Podcast.Episode.149.mp3"
audioSize = 71345369
categories = ["Deep Learning", "Africa", "Machine Learning", "AI"]
date = "2018-10-03"
description = "Today we bring you another great interview from Melanie's time at Deep Learning Indaba in South Africa."
draft = false
episodeNumber = 149
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Deep Learning Research in Africa with Yabebal Fantaye & Jessica Phalafala"
image="/post/episode-149-deep-learning-research-in-africa-with-yabebal-fantaye-and-jessica-phalafala/images/hero/hero-EP-149.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/6JRTGcN33cm"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/9l3nm3/episode_149_deep_learning_research_in_africa_with/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Today, [Melanie](https://twitter.com/nyghtowl) brings you another great interview from her time at [Deep Learning Indaba](https://twitter.com/deepindaba) in South Africa. She was joined by Yabebal Fantaye and Jessica Phalafala for an in-depth look at the deep learning research that's going on in the continent. 

At the African Institute for Mathematical Sciences, the aim is to gather together minds from all over Africa and the world to not only learn but to use their distinct perspectives to contribute to research that furthers the sciences. Our guests are both part of this initiative, using their specialized skills to expand the abilities of the group and stretch the boundaries of machine learning, mathematics, and other sciences. 

Yabebal elaborates on the importance of AIMS and Deep Learning Indaba, noting that the more people can connect with each other, the more confidence they will gain. Jessica points out how this research in Africa can do more than just advance science. By focusing on African problems and solutions, machine learning research can help increase the GDP and economic standards of a continent thought to be "behind".

<!--more-->

##### Jessica Phalafala

[Jessica Phalafala](https://twitter.com/rjphalafala) is a PhD Applied Mathematics student at Stellenbosch University and currently affiliated with the African Institute for Mathematical Sciences. In her mid-twenties, she finds herself with four qualifications all obtained with distinction, including a Master of Science in Pure Mathematics degree from the University of the Witwatersrand. Jessica is interested in using her functional analysis background together with a number of newly developed skills to contribute towards developing rigorous mathematical theory to support some existing deep learning methods and algorithms for her PhD research. Outside of research she takes great interest in fast-tracking the level of accessibility of higher education in South Africa as co-founder of the Sego Sa Lesedi Foundation, a platform created to inform underprivileged high school learners of career and funding opportunities in science as well as provide them with mentorship as they transition into undergraduate studies.

##### Yabebal Fantaye

[Dr. Fantaye](https://twitter.com/yabebalf) is an AIMS-ARETE Research Chair based in South Africa. His research is in applying artificial intelligence and advanced statistical methods to cosmological data sets in order to understand the nature of the universe and to satellite images of the Earth in order to find alternative ways to monitor African development progress. Dr. Fantaye is a fellow of the World Economic Forum Young Scientists community, and a fellow and a Chair of the Next Einstein Forum Community of Scientists.

##### Cool things of the week

* A Kubernetes FAQ for the C-suite [blog](https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-faq-for-the-c-suite)
* BigQuery and surrogate keys: a practical approach [blog](https://cloud.google.com/blog/products/data-analytics/bigquery-and-surrogate-keys-practical-approach)
* Adding custom intelligence to Gmail with serverless on GCP [blog](https://cloud.google.com/blog/products/application-development/adding-custom-intelligence-to-gmail-with-serverless-on-gcp)
* Announcing Cloud Tasks, a task queue service for App Engine flex and second generation runtimes [blog](https://cloud.google.com/blog/products/application-development/announcing-cloud-tasks-a-task-queue-service-for-app-engine-flex-and-second-generation-runtimes)
* Unity and DeepMind partner to advance AI research [blog](https://blogs.unity3d.com/2018/09/26/unity-and-deepmind-partner-to-advance-ai-research/)

##### Interview

* African Institute for Mathematical Sciences [site](https://aims.ac.za)
* Provable approximation properties for deep neural networks [research](https://www.sciencedirect.com/science/article/pii/S1063520316300033)
* Next Einstein Initiative [site](https://www.nexteinstein.org)
* Square Kilometer Array (SKA) [site](https://www.skatelescope.org)
* University of the Witwatersrand [site](http://www.wits.ac.za)
* Council of Scientific and Industrial Research (CSIR) [site](https://www.csir.co.za)
* South African National Space Agency (SANSA) [site](https://www.sansa.org.za)
* National Astrophysics and Space Science Programme (NASSP)[site](https://www.star.ac.za)
* IndabaX [site](http://www.deeplearningindaba.com/indabax.html)
* Coursera [site](https://www.coursera.org/)
* Andrej Karpathy [research](https://cs.stanford.edu/people/karpathy/)
* Andrej Karpathy Blog [blog](http://karpathy.github.io)

##### Question of the week

If I’m using the Cluster Autoscaler for Kubernetes (or GKE), how can I prevent it from removing specific nodes from the cluster when scaling down?

* How can I prevent Cluster Autoscaler from scaling down a particular node? [github](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#how-can-i-prevent-cluster-autoscaler-from-scaling-down-a-particular-node) 
* What types of pods can prevent CA from removing a node? [github](https://github.com/kubernetes/autoscaler/blob/master/cluster-autoscaler/FAQ.md#what-types-of-pods-can-prevent-ca-from-removing-a-node)


##### Where can you find us next?

Mark will definitely be at [Kubecon](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2018/) in December and will probably be at [Unite L.A.](https://unite.unity.com/2018/los-angeles) this month.

Melanie is speaking at [Monktoberfest](https://monktoberfest.com/) Oct 4th in Portland, Maine and will be at [CAMLIS](https://www.camlis.org) the following week.

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 149 of the weekly \"Google Cloud Platform Podcast.\" I'm Mark Mandel. And I'm here with my colleague-- almost always-- Melanie Warrick. How are you doing, Melanie?" >}}

MELANIE: Hi, Mark. I'm good. How are you? 

MARK: I'm doing all right. 

MELANIE: Yes, we are back from Strange Loop this week. At least for a minute, we're together in San Francisco, which is good. 

MARK: Lovely. 

MELANIE: And this week, we're going to be sharing another episode from some of the episodes I gathered while I was in South Africa a couple of weeks back. And-- 

MARK: Thank you. 

MELANIE: --specifically for episode 149, we have with us this week Yabebal and Jessica, who are both researchers from the AIMS Research Group based in South Africa. 

MARK: Awesome. 

MELANIE: So looking forward to hearing from them and talking to them about some of the research they're doing, and other organizations that are in the area. But before we get into that, we will always do like we do, the cool things of the week, and we will end with the question of the week. 

And so for this week, our question, as always, coming from Mark, "If I'm using the cluster autoscaler for Kubernetes or GKE, how can I prevent it from removing specific nodes from the cluster when scaling down?" 

MARK: I have an answer. 

MELANIE: I'm glad you have any answer. 

MARK: I do. 

MELANIE: You always-- you have all the answers. 

MARK: Not all the answers. 

MELANIE: Some of the answers. 

MARK: I have some of the Kubernetes answers. 

MELANIE: Or you make it sound like you have-- it's good. It's all good. All right, well, Mark, let's talk about cool things of the week. And we've got one at the top that's, of course, down your-- 

MARK: It's about Kubernetes. 

MELANIE: --expertise alley. 

MARK: It is, it's true. Actually, I really like this blog post on the Google Cloud blog called "A Kubernetes FAQ for the C-Suite." So basically for CXO top-level, or, I think, even people who aren't necessarily technically oriented, maybe, like, not engineers, that kind of stuff, but want to understand what Kubernetes is and what benefits it gives. It has a really nice breakdown of, like, what is Kubernetes, why does Kubernetes matter, why does IT like Kubernetes so much, what are the main benefits, et cetera, et cetera, how do I get started, that kind of stuff. 

And it has some technical as well as non-technical answers, as well as different perspectives that may help you explain it to people who sit maybe at a C-level or, like, a business level, or that kind of stuff. I actually really like it. 

MELANIE: Do we have any C-suites out there listening to us? 

MARK: I hope so. 

MELANIE: I know that's not our target, but yes, we probably have a mixture of people out there. Anyway, so let me go ahead and talk about a blog post about BigQuery and surrogate keys. So this is a "How to set up a surrogate key in your BigQuery." And this is a nice practical approach that Marco Tranquilin had put together. 

And he talks about how you can generate it. You could do something where you're, like, hashing the row number. There are some alternative approaches he has around, like, actually hash of the record, fields and using the result as a surrogate key. So he gives you a step through on how you can do that. And we'll include that link in the show notes. 

MARK: Nice. Coming up next, there's also a great article from the serverless computing, talking about adding custom intelligence to Gmail with serverless on GCP. Basically, it's a really nice how-to on how to build your own intelligence into your own Gmail capabilities. 

So if you've ever wanted to do your own custom actions based on, say, a particular email coming in, or sending an email, or content inside an email, or basically anything really, it gives you basically pretty much all the code that you need to do to do that and set that up for yourself. 

So if you ever wanted to automate yourself out of a job, or maybe into a job, this might be for you. 

MELANIE: I know you want to take it to the next level. I actually did try automating something way back in the day with my Gmail, so it's nice to see that there's some more established tools that you can use versus trying to write it from scratch. I should try that. I should check it out. 

All right, well, the other thing we wanted to mention is they are announcing Google Cloud Tasks. It's a Task Queue service for App Engine Flex and second-generation runtime. So this is basically a centralized Cloud Task API that's fully-managed. Asynchronous allows you to, in essence, do task execution service for any application running anywhere using a standard API. 

So it's great for task queues. And they talk through that a little bit and help you understand what that means, what that looks like for App Engine, especially considering if you were using Task Queues in the past. Apparently, this is really-- all the stuff you would do with Task Queue, you will do with Cloud Tasks. So you can check that out. 

MARK: Yeah, worth noting, existing App Engine customers can continue to manage their tasks via the App Engine SDK. It's also going to work. 

MELANIE: That's good. All right, I think we want to give one last mention, which is sort of related to something we touched on back when we talked to Jeff Dean a couple of weeks back ago. 

MARK: Yeah. So Unity and DeepMind have announced a partnership to advance AI research. It'll basically enable DeepMind to develop a lot of virtual environments and tasks, basically for doing a lot of AI research. 

MELANIE: Yeah, so the whole virtual environments-- we had touched on that with him a little bit, about how that's one of the values coming out of the AI space, is seeing these virtual environments for being able to experiment in. So you should check this out and see what they're up to. 

MARK: Absolutely. Awesome. Melanie, why don't we go have a chat with your friends over in South Africa? 

MELANIE: Sounds good. I'm happy to have with us today, Yabebal Fantaye and Jessica Phalafala. Thank you both for joining. 

JESSICA: Thank you for having us. 

MELANIE: So Yabebal, why don't we start with you. Can you tell us about who you are and your background? 

YABEBAL: So yeah, I am Yabebal Fantaye, and I grew up in Ethiopia at Addis Ababa. I did my undergraduate studies in Addis Ababa. And I went to Cape Town for my Master's, and then I went to Italy for my PhD. And then did some post-docs in Europe, then came back now to Africa with something called the Robert Bosch Foundation. They funded this research here called ARETÉ AIMS Chair, which is really unusual funding because it allows you to work anywhere in Africa. 

And so I am really enjoying being now Pan-African practically, not just talking about it. So yeah, I am doing research in areas of cosmology, which is my main specialty, and also using satellite images to try to understand-- is Africa going in the right direction, and can we get that not only in the official statistics but also through some mining the data, which is available free, satellite image? So that is our kind of background, I would say. 

MELANIE: That's great. And I know we were talking before, you were telling me about some of the travels that you do for work, which is wonderful, that you call yourself Pan-African. 

YABEBAL: I think now I can call it like that, and it's really different. When you're really doing it, it's actually much different, because you really start seeing the similarities. And I think I'm now not just philosophically only, but practically, it is, you know, Africa just as one makes sense. 

That was probably the reason why people in the 1960s, when they were talking about Pan-Africanism, they actually probably felt similar in a way. We share a lot more similarities than our differences. And our differences, just within Ethiopia, we have so much difference within different tribes than probably I have with other African countries. 

So in a way, you know, it's just natural, that difference. It's our beauty. And we should just celebrate it. But at the same time, our similarities are a lot, so we just-- we can capitalize on that. 

MELANIE: That's great. And then Jessica, can you tell us a little bit about you? 

JESSICA: OK, thank you, Melanie. I was born in Polokwane in South Africa. And in terms of my studies, I did my undergraduate at Wits University. And that was in Economics and Mathematics. I went on to do my post-grad to Master's level at Wits as well. And my specialization was in Functional Analysis. So I'm actually a pure mathematician. 

MELANIE: Oh, wow. 

JESSICA: Yeah, and so during my master's, I realized that I'd like to use the skills that I attained to work towards a PhD that's a little bit more applied. And that's when I explored data science. And then I moved to the African Institute for Mathematical Sciences. And now I'm doing my PhD in Applied Mathematics. 

And the area of my research is Manifold Learning and Approximation Theory. So it does allow me to use those function analysis and harmonic analysis skills together with some new skills like information theory and coding. So it's been really a wonderful experience. 

MELANIE: That's great. And so the Africa Institute for Mathematical Science, I know both of you are there. Can you tell me a little bit more, tell us a little bit more, about what the institution focuses on in terms of the research that it does? 

YABEBAL: Yeah, it's like so the Africa Institute of Mathematical Science, usually just AIMS, was founded in 2003 by Neil Turok. And I think the main idea was, of course, Neil Turok got those ideas when he was traveling, that he was inspired by how people think differently in Africa. And he believed that the way of thinking, the mathematical sciences, should be the core. 

And that's where he-- I think his vision was like, OK, let's have everywhere in Africa, not just in South Africa or localized, but just everywhere in Africa, let's have, like, these examples that could do in any of the mathematics, physics, or mathematics or economics, any of them which involve some mathematical thinking, to be leaders, and to try and to be the first kind of-- an example for others to follow. 

So I think it worked, I mean, phenomenally, and that's why we're still here. And since even-- like it was in South Africa only, but then it expanded out to six other countries in Africa. And it's graduating, I think, more than 1,500 people, and from all over Africa. According to the map that is everywhere in Africa that is green, which means we have graduates from everywhere in Africa. 

And that is really great. And then the research aspect came in around 2007. It was started in South Africa, the AIMS, South Africa. So that one involved lots of researchers coming. Some of them just are temporarily. Some of them are research scientists there just but maybe affiliated to other universities. For example, Stellenbosch and also the University of Cape Town. 

So the kind of work we do, I would say, like, there are financial mathematics researchers, there are biomathematics, and there is cosmology, which I am part of, but which also now evolves into the machine learning group. And also now the data science group that Jessica is in. There are a lot more coming and going also, which I probably may not cover. But every of the mathematical science, I would say, is covered. 

And what makes AIMS special is that actually there are no lectures per se. It's not like it's a very different intensive one year, but a lot more introducing, like, people from everywhere in the world who are really doing amazing research. 

They come and teach there willingly, voluntarily. And they basically leave with the students and this three-week module. And they instruct. And basically just, like, the students learn not only the subject but the way of thinking, which makes AIMS, I would say, very special. 

And yeah, and then AIMS evolved into the whole Next Einstein Initiative, which is now centered in Rwanda, and which is managing not only AIMS but also there is, like, the Next Einstein Forum, which every two years brings together scientists, business people, politicians in one. 

And this is the first of its kind. I mean, there was no such big gathering in Africa. And that's really where you see I am a Next Einstein fellow. And it highlights young people doing something in research. And if they are excellent in their research, they bring them together, and then they highlight, they give them that opportunity to expose through media and other. So AIMS and the Next Einstein Initiative is doing really amazing. 

MELANIE: Yeah, oh, please. 

JESSICA: Maybe-- I don't know if you would also like a student's perspective as well. 

MELANIE: Yes, I would like a student's perspective. 

JESSICA: I would say the one thing that really stands out about AIMS is that it's research and learning intensive. I was at a university for seven years. And the moment I stepped into AIMS, I can just feel the difference. It's a collaborative environment. Like you said, you have researchers coming from across the world. And it gives you an opportunity to network and interact with people who are like minded, who have-- can maybe share ideas on the work that you're doing. 

And also it exposes you to people outside of the country that are working in your area. And especially when you are exploring a new area like I am, AIMS has given me the opportunity to do research visits in Berlin and visit a team that's working-- that has experts in this field, so that I'm exposed to that, and I'm able to bring back those skills. 

I think that's just the one thing that really stands out for me is that it's a collaborative environment. It's an intensive-- research-intensive environment. And I think that makes it different to the universities thereof. 

MELANIE: That's wonderful. And you mentioned about in Berlin. What other additional collaborations are done between AIMS and other groups that you haven't already touched on? How does AIMS participate with other groups that are within Africa as well as outside? 

YABEBAL: Again, AIMS is not-- so it gives degrees, but it's actually affiliated to Stellenbosch University. So most of the students do projects in Stellenbosch University, University of Cape Town, Wits, other places. So it's basically-- it is not like-- it's an academic institute but with wide-open door for every collaboration with different universities within South Africa. And that is AIMS South Africa. 

If it's AIMS Ghana, it would be like with all the other universities locally, as well as internationally people would come to have some research visits, grants-- that people come and just stay there for months to do some of their research, and, as Jessica was saying, to collaborate. 

And that's where you meet a lot of people. Not only just people from outside Africa, but also from inside Africa. They come to teach. They come to research visit. And so those pursue those affiliations to get those networks. So there's a lot of this networking being done within Africa as well as also outside Africa. 

MELANIE: Externally. And it's based on each person's-- the work that they're doing and how that relates to other groups as well. What additional groups do you work with in terms of the research that you're doing, Yabebal? 

YABEBAL: So for example, like, the cosmology group at AIMS, they have collaboration with SKA, which is the Square Kilometre Array. This is the biggest radio telescope being built. And we have the data science group there and the data science group and cosmology group at AIMS are collaborating. We work on different similar projects. 

And also every group has also their own collaboration that they bring together. For example, I have collaboration in Munich, and I have collaboration in Rome and Oslo, which I, basically, through that I bring visitors, and I also-- just I go and visit. So it's the same, I think as Jessica was saying, there is a lot of this collaboration going on. 

MELANIE: Sharing of knowledge, yeah. This is great. And Jessica, you had mentioned you were at Wits. What is Wits? 

JESSICA: OK, so the full name is the University of the Witwatersrand. It's in Johannesburg. And it's one of our oldest universities in South Africa and ranked the top in South Africa. Yeah, I did my undergrad through to my master's. 

MELANIE: That's good to know. I mean, I know most universities do research. Do they have a very established research program as well, affiliations with other groups as well? Because it sounds like there's work that's being done with AIMS between Wits. And I've heard of it many times now. 

JESSICA: Yes, so I think this is-- I don't know about in other fields. I think data science are more informed because that's where it directly affects me. We have a German research chair at AIMS who's actually working with some of the supervisors at Wits. 

And they're trying to also create a community of data scientists who can collaborate together. So one example of this is there is a full-year course called the "Theoretical Foundations of Data Science" that was started by the former vise chancellor of Wits, and Bubacarr Bah, who's at AIMS. 

And what they are doing is taking staff members who have master's degrees and introducing them to data science so that they can explore it for their PhD. So just initiatives like that are taking place. So I do think that Wits is taking part in creating programs for data science and other research areas. That's just one example. I'm sure there are many. 

MELANIE: Oh, I'm sure. 

YABEBAL: And physics sector as well. They have very strong particle physics research group, string theory. They are very well known. So there are many of these research groups that are strong at Wits. 

MELANIE: And is very well established. I know another group that I've heard of, talking a little bit about this, is CSIR. Can you tell us a little bit about CSIR, that you know of? 

YABEBAL: Yes, the only thing I know is that they are involved in many sectors of research, so include, for example, I know them through-- that they manage, as far as I know, the Center for High Performance Computing, which is based in Cape Town. 

This is going to be also the one machine that SKA is going to be using, because they have experience as well as just the machines to do it. And my master's student has been, for example, using that just for his own research. 

So they provide the high-performance computing platform. And so they are involved in many, many other research. For example, we got our satellite data from the SANSA, which is the National Space Agency here. And they are also affiliated to CSIR in some way. In every branch I go, I actually-- 

[INTERPOSING VOICES] 

MELANIE: --I was going to say. 

YABEBAL: Yeah, so it's kind of, I think, one of the main groups. I think it incorporates many research groups. 

MELANIE: It sounds like it's based in multiple locations, similar to AIMS. 

YABEBAL: Yes, I think so, Because there is one in Cape Town I know. 

JESSICA: And Pretoria as well. 

MELANIE: What about some of the smaller affiliated groups that you work with? What are some of the examples of those that are, you know, they might not be located in multiple locations, but they do specific and very deep research? I know you've talked a little bit about some of them. 

YABEBAL: Yeah, I mean there are many such initiatives. For example, I came out from a program called the National Astrophysics and Space Science, NASS, the National Astrophysics Space Science Program. 

And when I came to do my Honours and Master's through that program, it has trained in the space science in astrophysics sector a lot. I would say, like, it has really influenced the landscape in Africa in terms of, like, graduates now, you would find also graduates from many countries in that field. 

And that is a collaboration, again, between almost every university in South Africa. So it's like we were collaborating, like, with [INAUDIBLE] Observatory, the Observatory in Cape Town, [INAUDIBLE], so all this collaboration. But every university, for example, the Western Cape, they have very strong cosmology group. They are doing research, and they are one of the main science drivers now in terms of research, I would say for the SK. They have lots of stuff doing in SKA. 

And as I said, in Wits, UCT has many groups. The cosmology group at UCT was the strongest at telling time. I don't know now, but it's like they had the string theory, the cosmology, which was laid by George Ellis, who was a very prominent cosmologist who worked also with other very prominent scientists in the field. 

So there are a lot. And in the astronomy department, if you go, like, they have research, big research group. Even those that I'm aware that I have given a talk there, or I have worked with people, it's, you know, there are a lot of research groups. 

MELANIE: I want to touch on this. So we're recording this. And I didn't start out the conversation with this point, but we are recording this at Deep Learning Indaba. I've been emphasizing that a lot when I talk about this on our podcast. We just were actually, before we recorded this, at a session where we were listening to a couple of people talk about democratizing AI in Africa. 

One of the points that Nando de Freitas made was that we need to have AI academic conferences, like, in Africa, like AI academic conferences, a large one that's established here. And from everything you're telling me, there's a significant amount of research. 

Now, we haven't touched specifically around the data science and the AI space, but there's a significant amount of research that's going on. But what are your thoughts on his perspective? 

JESSICA: I definitely agree with him. I have to agree with him. Especially as someone who's just moved into data science, I see the importance of events like this. Research can sometimes be an isolating thing to do and to take on. But when you are brought into a space like this one, you get an opportunity to really put your ideas out there and have people share their opinions and give you feedback. 

And I think feedback is really important, especially in a field that is still developing. At the rate that data science and machine learning is developing, you really want to be in a space where you're producing work that's relevant. And you will only know if your work is relevant if you interact with other people in that area. So this is really something I wish would take place, just not that Deep Learning endeavor. I wish there would be more conferences of this nature. 

Yeah, it really-- it's an opportunity to put your name out there as a researcher. It's an opportunity to interact with others. It's an opportunity to get feedback to collaborate with others. And we need to be at a stage where we can collaborate across countries in Africa. And I think this is the best place to meet those people in other countries that are working on something similar to what you're working on. 

YABEBAL: I think it's-- I mean, to add on that also, I think it's the most important aspect is that these are signs that people are taking it serious and people are paying attention. Governments then will respond to it and policies will. So this is just like a sign that also shows you, like, OK, people have understood the significance. 

And the bigger it is, it also tells you, you, like, people are active in the field, right? They're trying to work on that and creating that platform. Basically, I mean, I have seen lots of research come out from Sudan and other places where there is not actually staff doing it, but the students are interested, right? So therefore, they kind of, like, have this supervisor but who's also probably not in the field, but they go and do it, the ones that observe. It's such a nice, amazing research, or the idea is nice. 

For example, the one that impressed me was this Sudanese girl, she showed me the statistics. Like, OK, there is depression in the Arabic world. Many people die out of suicidal depression. 

MELANIE: From the mental health standpoint, yeah. 

YABEBAL: Yes, in Sudan. And so she thought, like, oh, you know, why not can we help them? And then also, of course, she showed me also some of the statistics she got from, I think, the UN organization, where it shows young people who are depressed actually go to social media to say something about their depression. And so her idea was like, oh, can we then discover that early on such that they can actually get help? 

And of course, the method that she implied, she collected by hand. Because she said, in Sudan, many of the social media are not working. So she collected by hand from Facebook. You know, she went to join the groups and then just collected this data by hand, labeled by hand. She got about 3,000 from Twitter and stuff. 

Of course there were some flaws, I mean, in her derivations, but that's it. The point is that she has got everything, but there was no one probably to guide her through, like, all the technical difficulties. 

And coming here into the Deep Learning Indaba, and just me being there and actually saying, like, OK, you know, this is an amazing thing, but you have, like, these sampling issues. These things just will give her, like, that insight, right? And then she can form collaborations. 

So all these things wouldn't have happened if you don't have such a exposure and venues to present your work, however small it is. But putting your effort out such that people can then give you the edge to just go over and be what you can be. 

And so I think this Deep Learning Indaba-- and similar, there is also IndabaX-- but it is really a great start, and there should be more. And you know, for me, what really was a depressing statistics recently that came out from McKenzie that it's going to be this revolution, the AI revolution is going to be changing the GDP as more or less in the same level as the one which is the first Industrial Revolution, which we know the affect is like. It just created a massive shift. 

But there are simulations that show that actually Africa and other developing countries may not get the benefit, because already the landscape has been so much shifted to mostly US and China and other countries who are already strong. So you really need some kind of intervention to make this prediction wrong, because we want to be participating. We want to benefit from it. We want to change. 

And other, like, the WEF studies, for example, the World Economic Forum, they actually put the full Industrial Revolution to be maximal-- Africa to be maximally benefiting from those. So there are these predictions where Africa has all the challenges that can be addressed, most of them can be addressed through systematization, resource management, and all that. And at the same time, here you have the economic, the GDP thing. So if you max them, there is-- if these platforms are becoming more and more, I definitely think such simulations can be wrong. 

MELANIE: What do you think could be done from a research-institution standpoint to help this GDP issue, the fact that there is this expectation that you're already behind the times, I guess? 

JESSICA: I think what is important is for us to focus on African problems in terms of research and not try and produce research that is not related to solving African problems, whether it be the trout in Cape Town, et cetera. That would keep our research relevant to the African climate, and also allow the results of our research to benefit us. And maybe that's when we will see the developments in AI also benefit our GDP, and maybe as a country or as African states. 

Another thing I think is research institutes need to do their very best to keep their students and not lose them to universities in North America and the UK and Europe, as the case has been for many years. This causes us to fall behind in terms of research. This also causes us to not have ownership of African research. 

For me, these are the kind of things that are just hindering the progress with respect to researching AI and machine learning-- holding on to researchers and also working on African problems. 

YABEBAL: I think another aspect, which, I would say, is like, for example, another research that I really greatly enjoyed in the post-doc session was Jessica's, who was working actually on the foundations of the planning. I believe that it's just not only you have to-- and you have to build the confidence, not just only to do something, but also to follow your curiosity, right? 

So I think what they are doing, for example, in this Manifold learning, trying to find, ascertain aspects such that they can then improve and understand how the actual-- 

JESSICA: The mathematical foundations of-- 

YABEBAL: Yes, of how the black box is working, and trying to then get the-- you know, so competing at the global, at the cutting edge. And that's also you need that kind of confidence, and you need to build it, right? 

Because without that confidence, it's basically going to be like we're just going to be, like, happy to be sitting nearby in somebody, right? And I think that mentality-- and that's why I really like also Neil Turok's way of thinking sometimes, and why there is the Quantum Leap Africa Institute, which we just started recently. 

And the whole idea was like, yeah, like, let's be bold because, you know, this world, I think they say it again and again, it's only for those who really can dream big and just are not afraid to-- 

MELANIE: And take the risks. 

YABEBAL: --just go and do it. 

JESSICA: Take the risks. 

YABEBAL: So and that's, like, in the Quantum, like, we know, OK, right now, it's still-- the game is not decided in data science and AI. We have a lot to contribute. So but we also have to plan the future to lead, for example, some of the expected innovations or revolutions that may be coming of quantum computing. 

So the Quantum Leap Africa is that-- OK, let's gear our mind that we will be the leaders in that field. Right now we have data science. Let's build because it requires the computer-- like, the quantum machine will require algorithms, will require, like, sensors and stuff. Let's build on to what we have now to that. Let's have all the expertise. Let's not be worrying about whether it's this or that. It's like let's build our confidence. Let's have that kind of ambition. 

Because it's only the ambition-- and I think I can share so many times-- that the people in West Africa brought when they play football, it is that ambition that drives them, that makes them play. And in Europe, and people in Kenya and in East Africa in general, when they run, which is just also partially-- it influences me. 

I just think about winning, right? It's like I just even don't think about that confidence was built by a few people who broke just that kind of sphere where it was blocking. And suddenly, someone just got gold, or they were just the best players, and then people were like, it was me. It was just-- you know, I can relate to my life, there was nothing special. 

And so it's just, you know, you build that confidence. And so, like, all these ambitious projects as well, as I'm also leading the community of scientists in Africa, which incorporates the Next Einstein Fellows and Next Einstein Ambassadors from all over Africa. 

And we are trying also exactly to do, like, we are doing something, we are close to the research and the knowledge. And the politicians are very close to the decision they have to do every day. It's a hard job the business people have to deal, and they have to survive. 

So that dialogue we can form. I mean-- or have the time to think, and we have the time to reflect. We are easy to the data. We can analyze and get the insights. And then we have to share that one. So we have like in this policy advising. So we have objectives, like, to try to be, like, advising a youth or someone. Because these fellows and ambassadors are working on every field, from medical to climate to economics to computer science, data science. 

So it's everywhere. We have all those fields. And we are increasing. We are not just like fellow and ambassador. It's all about let's build the community and let this community contribute in all forms. Just let it not to be dormant. I mean the whole point is let us not be passive. And in this transformation, all the work, the fundamental work, the pure mathematician, has a lot to contribute as well as the one who's doing just basically in the clinical testing in some remote places. 

So there is a lot more to do. So I think those would, I would say, contribute in making sure if we keep doing them in the right way, I think it will make this predictions wrong, I would say. 

MELANIE: And I noticed when I've been talking to people at the conference that there's a common fear that I don't know enough, I'm afraid to jump in. But yet I'm here, because I'm interested. And I'm bringing this up because I've talked to a lot of people who are in this space or who want to be in this space, in many locations. 

I've been very lucky in that regard to be able to talk to so many people who are trying to get into AI from all over the world. And there's that common fear and common intimidation. It's everywhere. And it's here. And I've heard people talking about this here as well. 

So you're talking about the confidence. I think the question becomes, like, how to encourage people who don't feel like they know. I think that's also the key too. They don't feel like they know enough, and they're afraid. How to encourage them. And what do you think could be done to help make sure that the barriers to entry don't feel as intimidating? 

JESSICA: OK, firstly, I think one of your first questions was, why do people feel intimidated by this area of study? And I think from what I've seen thus far is that machine learning or data science is a multi-disciplinary area. And I think that's the intimidating part, that mathematics alone is not enough. You know, it's a combination of statistics, mathematics, and computer science. 

And that requires-- if you're coming from any of those angles, you're going to be required to broaden your knowledge on the other topics. So I think that's the first thing. And I don't think it's something that should be seen as a barrier, because the support is there, especially in universities, especially because this is an upcoming field. So supervisors, institutes, are aware that people who are doing research in this area require a little bit more support in that regard. 

I think conferences such as this one do help provide you with that confidence, like Yabebal was saying. I'm working on a problem and being able to present to my peers and present to people who are more experienced in this field also allows me to gain more knowledge and allows them to also nudge me in the right direction, provide me with the resources that I need. 

So these kind of conferences are really-- it's really important to have these kind of engagements where, when you present, someone might be a little bit more experienced in that field, and just take on something that, for them, is just a quick, hey, here's a resource. Once you've taken a look at this, it will push you in the right direction. Or, hey, here's my email address. Let's meet up, and we'll take this further. 

So I think that's a good starting point. I mean, there are many other things that can be done. But this, for me, is, in the year that I've been studying, this has been one of those moments where I've learned so much in a period of four days that hasn't even come to an end yet. I think that that really does get the job done. 

YABEBAL: And just to add on that, I think it's-- I think she said most of the things also I would have liked to say in terms of these kind of platforms-- definitely puts you in that context. Like, the people who are doing great out there, and you, the differences are, like, not that big as you think. 

So it just gives you the proof to yourself to check that you are in the right direction, or the things you miss or the things you told-- it's big, it's not big. It kind of gives you the laboratory to check for yourself. And usually those, I believe, are the only ways that you will get confident, right? 

So another aspect that I'm working on that, because that's, for me, the most important thing that happened to my life, so I relate directly to it, is that because you could be planning-- I mean, I was ambitious. 

You know, Abebe Bikila for me was like, yeah, like what did he do? Abebe Bikila is one of the runners in Ethiopia who got the first Olympic gold medal in the 1960s. He was the first African to actually do that. And it inspired a generation of runners from then on. 

And there were a couple of things he did, which I don't know how that relates, that fits, but for me, you know, I like the narratives because it really helps me. He was running barefoot. And he was training in Ethiopia barefoot. Then he went to Japan in the Tokyo Marathon. Then he was given a shoe to run to. And he was like-- and he had to decide. I mean, that's my knowledge, how I like to put it. 

And he had to decide to run on this thing that he hasn't got used to, and everyone is doing it, or just do his way, the way he knows, right? And I think for me, the most spectacular event was he decided to just run barefoot, just his own way. And then he ran, just completely made history. 

So I think one thing I draw from that experience, and the same can be said, I think, in the Western Africa for the football, probably, is that people, to achieve greatness, they didn't just have to pretend. They had to do their own way. And they had to be taking the consequences, right? 

So for us, I took that inspiration for me. And then we have this project which is, I would say, a significant fraction of my three years in the last three years I spent thinking about it, because that's what's important, is, like, checking every detail and how you moved in this space. 

And what we do is that it actually it influenced whom you knew when you were a child. Like, did you know a mathematician? And if not, when you become a mathematician, you won't be confident, right? It's like because you feel like you may not be understanding it the right way. If you didn't know a physicist, when you got into physics, you're not sure. 

But it just-- it seems so naturally so nice, is that even just one handshake when you were, like, probably four years old with a physicist could have changed that thing a lot. Because then that propagates in time. Like yeah, like when you talk with your peers, you probably would say, like, yeah, I know a mathematician, you know, they do this. 

But then you think, and every time you say those statements, you're actually thinking, right? So it just doesn't even need sometimes maybe a lot. It just needs people everywhere in remote areas, they need to see the real people doing that, so role modeling. So what we are doing, we have this project, which is really, as I said, a significant part of my thinking in the last three years spent on that is that we have Astrobus Ethiopia. 

So what we do is that we take on the bus, we get all the people, and we don't distinguish because abstraction and composition is, like, an idea. You abstract it. And then use those abstractions to compose. That is mathematics. That is physics. That is art. That is fashion design. That is painting. That is a poem. 

That is everything. You get to some abstract level. Use that abstract level to create some symphonies, right? It's just like music. Notes to symphonies. 

And so we take that one. So we bring everyone-- all those people who believed in it but who are also doing things, like, real fashion designers. If it's scientists, scientists who really have that ambition to do, inventors. So we have, like, art, science, and innovation. We put together. We put in the bus, and we just drive across the whole country. 

And we just get off. And we just-- you know, what we do is mostly not teaching. It's not about teaching. It's about belongingness. You belong to me. I belong to you. We are in the same family. So when you know me, and when you see me now in a TV, you will say, I know that guy! I met him! 

And that confidence, we take that inspiration, and we are doing it. And we are trying to expand it also in other parts. We wanted, for example, in Rwanda, I want the Rwandese this to do it. In Senegal, I want the Senegalese to do it. Because that relation cuts that barrier, which is like you may have a different opportunity. 

So in Ethiopia, we want to do it with Ethiopians. We're doing in IBM. We're doing in Silicon Valley. We're doing research in cosmology and fashion. We want them to be there, and just shake, because then the kids don't have any more reasoning to say, like, they are different-- 

JESSICA: That they are not capable. 

YABEBAL: Yeah, because they are them. 

MELANIE: Well, I love the fact that there are many people here who've come to this conference, who are very much junior, very much just entering this space, who have taken the risk, have overcome their intimidation. And also I've seen so many people who welcomed them in, and have been very inclusive. And that's been really impressive. 

Before we wrap up, I just want to touch on a couple of things. Any other things that you've seen that you were really excited about by this conference, that you wanted to touch on, that you wanted to mention? 

YABEBAL: I think there are. As I say, I mentioned some of them. I really was, even if Jessica is at AIMS, and we talked, and I know her supervisor. It was very good to see what they are doing. And so I went to her poster, and I was like, I asked her to tell me in detail, like, what's going on, you know? 

So it was really impressive to see that confidence of, like, really working on just the foundation of Deep Learning, especially this black box that we still don't understand, trying to find-- and their method is different and clever. And you know, I'm not qualified to say anything. 

But it's really impressive that people are thinking and pushing in the boundary. Not only just in application style, but also just in the pure math, science. 

And another aspect is just, you know, those people, that is one example. But I have seen other people doing really clever but more of, like, concerned from their own-- like, what they think is a problem. So then they are trying to use the methods available, and trying to improve life, right? 

So I think, yeah, that those are the moments I was very much happy that I am here. And even if I'm not a big believer of in this big-- big conference, are like, we draw ourselves, like, and we just look, and we meet. Networking is the biggest thing for me in these kind of things. 

And as I say, me talking to that person, the other person talking and just guiding the here and there, and the other person guiding me on the problems they have. And so these things are what I really value from big conference. Not that the content would change, you know? 

So I think, yeah, those are the kind of movements it makes me feel like, yeah, like we need to do more. I think this has to be not just one Indaba. There should be more in such a way that-- because, you know, for such a billion population and the huge size, one conference does not do justice. 

So definitely, as Nando is saying, is really we need to increase, and we have to bring also the global competitors so that they can see this talent, such that there is fair collaboration, that people could do here something amazing that could be highlighted. I mean, not only just change the lives of people in Africa, but also the lives in the world. 

Because we have a lot of different insights. And I think that's what also Neil Turok believes is that if we really have the chance to really grow, it's because we see problems differently. That's our gift. So we can compete with that thing. That's our real resource. So yeah, that's-- 

MELANIE: Thank you. OK, Jessica, what about you? 

JESSICA: Yeah, maybe I can just say three things. One of the first things is the coding lab sessions have been very useful. I think for those, like you said, who are new in the field, it gives you exposure to different topics, across from CNN's RNN's, to just deep feedforward models. It just gives you that exposure you need, so if you're still in the process of identifying your problem and developing your problem. 

Secondly, for those who are more established in the industry. I think it's also great for them to just see what students are getting up to, and other researchers are getting up to. I think it's been a great time for students to also almost make new relationships. And I know a couple of people who actually found co-supervisors during the conference, which was great, and some who have identified potential supervisors. So that's just wonderful. 

And then within the students as well, we are coming up with ideas of how to bring small-scale endeavors into the real areas going back to-- like I said, I was born in Polokwane. And this is something of great interest and a part of a foundation called [NON-ENGLISH]. And we do this at a low scale. So something like this motivates us and gives us inspiration of how to change the current sort of method that we are using when we go back into community. In one week, the conference is able to achieve so much. 

So this is the time for us to also be inspired as students who want to give back to the community on what is the best way to do so. To learn from the best. How to run a lab session. Because in the rural areas, there aren't a lot of laboratories. In fact, the rural areas that I've been to, students are not exposed to computers. So it teaches how to efficiently give back to the community. This conference can do this in one week. It's inspiring us to go back into a community. It can take one week to also change students' lives and give them that representation that he was talking about. 

MELANIE: That's great. All right, last question for you both. In a couple of words, can you tell me if there's any key resources that you recommend based on what your experience has been? And anything else that I might not have covered that you wanted to make sure you touched on before we wrap up? Jessica, why don't I start with you? 

JESSICA: OK, case one thing that's been very useful for me is Coursera. If you are someone who's moving from pure mathematics or pure statistical background, I think Coursera is a great place to start. Because you really get to learn in your private space, and there are no limitations to your learning. 

I went through a number of courses. Some are 11 weeks. You can really cut down that time if you're really focused. And they will give you exposure to-- the machine learning course just gives you exposure to an array of different algorithms. So if you're new to the field, Coursera-- go onto the website, explore the different options that are available. And it will just give you far more exposure than maybe a semester course would. So definitely that. 

And yeah, and obviously just always go through papers in the fields that most interest you. That's a good starting point. That's always a good starting point. 

MELANIE: Thank you. 

YABEBAL: Yeah, I think I would say I think those are great resources. And there are many online courses that are very, very, very good, like, that people don't have excuse. A main issue could be language, and I think that's what's-- the Google AI in Ghana and others are trying to-- and, IBM, I know, they are also working-- so they are trying to fill that gap between people who don't understand. 

But another thing, just if I mention one other resource, is the [INAUDIBLE] page, which is very good in sometimes bringing some complicated concepts in a very easy way. So I think those are-- I mean, I think I would put those links there. And yeah. 

MELANIE: Those are great ones. And last words of advice being take risks? 

YABEBAL: Yes, I think we need to go in the direction that hasn't been tried before. 

MELANIE: I like that. 

YABEBAL: Yeah, because otherwise we know the ones that didn't work, so-- 

MELANIE: Try new directions. 

JESSICA: Try new directions. 

MELANIE: Thank you, both of you, very much for joining me today. I really appreciate it. 

YABEBAL: Thank you so much. 

JESSICA: Thank you, Melanie, for having us. 

MELANIE: Thank you again, Yabebal and Jessica, for coming onto the podcast and sharing your insights around AI research that you're doing in the area, and other groups and what's going on. So we appreciate you coming on the podcast. 

MARK: Yeah, thank you very much. 

MELANIE: Mark? 

MARK: Yes? 

MELANIE: If I'm using the cluster autoscaler for Kubernetes or GKE, how can I prevent it from removing specific nodes from the cluster when scaling down? 

MARK: So cluster autoscaler for Kubernetes is something I've been digging into lately. It's actually a really cool technology in that, what it does is that, as you create more and more pods through essentially any mechanism-- deployments or other such things-- if it finds that there isn't enough room for those pods to exist, it will add nodes up into a specified limit that you add. 

So it'll be like, oh you've now got 1,000, so let's make sure there's room for that. And then it will add nodes in a timely manner. And vise versa, or if you were like, oh I only need now 100 now, or I had 1,000, it will sort of scale it back down again. All very cool. 

But there are some scenarios where you might want to be like, don't remove that node. Like, right now, it's fairly arbitrary in terms of what it removes. Just make sure that there's still room for things you need and things like that. It will kill, like, empty ones. But there is actually some control that the cluster autoscaler gives you as well. 

If there's particular nodes, maybe you're running a DaemonSet on, or if you have specific hardware on a particular thing, you want to make sure it doesn't get brought down. And there's a couple of interesting ways you can do this, and I think this is actually really cool. 

So at the node level there is a annotation you can add, basically a "scale-down disabled is true." So if you add that to a particular node, it's just going to go, nope, I'm not going to touch that one. It's fine. I don't care. 

But the other thing worth noting is sometimes you might not know what node you want to prevent being able to get rid of. What you actually might also want to be able to do is say, hey, if there's this particular pod running on a particular node, don't kill that node. 

And so you can actually do that too. I didn't realize this up until recently, and I thought this was really cool. If you add the annotation "safe to evict false" on the pod, whatever node that is on, the cluster autoscaler will not remove that, which is also cool, too. 

There's a bunch of other restrictions as well, too. We'll link to the FAQ in the show notes, old talks, things about-- stuff about pod disruption budgets and a few other things. But I thought it was also just really nice that the cluster autoscaler gave that kind of control, both of the node level and at a pod level, to be able to control what it does when it scales down. Because usually, scaling down, that's the trickier problem. 

MELANIE: Nice. Thanks for that insight. OK Mark, where are you going to be next week? 

MARK: Where am I going to be next week? 

MELANIE: Where are you going to be this month? 

MARK: This month, I may be at Unite at LA. I still need to make a decision on that. I'll see what's happening there in October. But I know you said this month, but I'm really excited because I'm going to my first KubeCon in December, and I got accepted as a speaker. So I'm really excited to see a whole bunch of people at KubeCon. 

MELANIE: Good. That's awesome. 

MARK: What are you up to? 

MELANIE: I am going to be speaking this week at Monktoberfest over in Maine. And then I will be at CAMLIS, which is a security data conference that's in Washington DC the following week. 

MARK: Awesome. 

MELANIE: That's the plan. 

MARK: Fantastic. Well, Melanie, thank you so much for joining me for yet another podcast. 

MELANIE: Thank you, Mark. 

MARK: Thank you all for listening. And we'll see you all next week. 

[MUSIC PLAYING]