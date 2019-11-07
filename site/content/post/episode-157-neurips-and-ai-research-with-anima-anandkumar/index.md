+++
audioDuration = "00:45:05"
audioFile = "Google.Cloud.Platform.Podcast.Episode.157.mp3"
audioSize = 65301938
categories = ["NeurIPS", "AI", "Machine Learning"]
date = "2018-11-28"
description = "Melanie is solo this week as she welcomes Caltech researcher Anima Anandkumar to the show."
draft = false
episodeNumber = 157
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "NeurIPS and AI Research with Anima Anandkumar"
image="/post/episode-157-neurips-and-ai-research-with-anima-anandkumar/images/hero/hero-EP-157.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/YWnkJwD6y12"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/a19tyw/episode_157_neurips_and_ai_research_with_anima/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Melanie](https://twitter.com/nyghtowl) is solo this week talking with [Anima Anandkumar](https://twitter.com/AnimaAnandkumar), a Caltech Bren professor and director of ML research at NVIDIA.  We touch on tensors, their use, and how they relate to TensorFlow. Anima also details the work she does with NVIDIA and how they are helping to advance machine learning through hardware and software. Our main discussion centers around AI and machine learning research conferences, specifically the Neural Information Processing Systems conference (commonly referred to as NIPS) and the reason they have rebranded.

NIPS originally started as a small conference at Caltech. As deep learning became more and more popular, it grew exponentially. With the higher attendance and interest, the acronym became center stage. Sexual innuendos and harassing puns surrounded the conference, sparking a call for a name change. At first, conference organizers were reluctant to rebrand and they used recent survey results as a reason to keep NIPS. 

Anima discusses her personal experience protesting the acronym, opening up about the hate speech and threats of which she and others received. Despite the harassment, Anima and others continued to protest, petition, and share stories of mistreatment within the community which helped lead to the name/acronym change to NeurIPS. The rebranding hopes to reestablish an inclusive academic community and move the focus back to machine learning research and away from unprofessional attention.

<!--more-->

##### Anima Anandkumar

[Animashree (Anima) Anandkumar](https://twitter.com/AnimaAnandkumar) is a Bren professor at Caltech CMS department and a director of machine learning research at NVIDIA. Her research spans both theoretical and practical aspects of machine learning. In particular, she has spearheaded research in tensor-algebraic methods, large-scale learning, deep learning, probabilistic models, and non-convex optimization. 

Anima is the recipient of several awards such as the Alfred. P. Sloan Fellowship, NSF Career Award, Young investigator awards from the Air Force and Army research offices, Faculty fellowships from Microsoft, Google and Adobe, and several best paper awards. She is the youngest named professor at Caltech, the highest honor bestowed to an individual faculty. She is part of the World Economic Forum's Expert Network consisting of leading experts from academia, business, government, and the media. She has been featured in documentaries by PBS, KPCC, wired magazine, and in articles by MIT Technology review, Forbes, Yourstory, O’Reilly media, and so on. 

Anima received her B.Tech in Electrical Engineering from IIT Madras in 2004 and her PhD from Cornell University in 2009. She was a postdoctoral researcher at MIT from 2009 to 2010, visiting researcher at Microsoft Research New England in 2012 and 2014, assistant professor at U.C. Irvine between 2010 and 2016, associate professor at U.C. Irvine between 2016 and 2017, and principal scientist at Amazon Web Services between 2016 and 2018.


##### Cool things of the week

* Taking charge of your data: using Cloud DLP to de-identify and obfuscate sensitive information [blog](https://cloud.google.com/blog/products/identity-security/taking-charge-of-your-data-using-cloud-dlp-to-de-identify-and-obfuscate-sensitive-information)
* Unlocking what’s possible with medical imaging data in the cloud [blog](https://cloud.google.com/blog/topics/healthcare-life-sciences/unlocking-whats-possible-medical-imaging-data-cloud)
* Google makes dataset of 50 million drawings available on its cloud [blog](https://venturebeat.com/2018/11/15/google-makes-dataset-of-50-million-drawings-available-on-its-cloud/)
* Machine learning on machines: building a model to evaluate CPU performance [blog](https://medium.com/@srobtweets/machine-learning-on-machines-building-a-model-to-evaluate-cpu-performance-d43528f6075a)

##### Interview

* Anima at TensorLab [site](http://tensorlab.cms.caltech.edu/users/anima/)
* NeurIPS [site](https://neurips.cc)
* Petition [site](https://www.change.org/p/members-of-nips-board-protestnips-nips-acronym-encourages-sexism-and-is-a-slur-change-the-name)
* Name Change (results of the poll) [letter](https://nips.cc/Conferences/2018/News?article=2110)
* Johns Hopkins University letter [letter](https://hopkinscsw.files.wordpress.com/2018/03/hopkins-letter-to-nips.pdf)
* AI Researchers Fight Over Four Letters [article](https://www.wired.com/story/ai-researchers-fight-over-four-letters-nips/)
* From the Board: Changing our Acronym [letter](https://nips.cc/Conferences/2018/News?article=2118)
* TensorFlow [site](https://www.tensorflow.org)
* NVIDIA [site](https://www.nvidia.com/en-us/)

##### Question of the week

What are some actions I can take if I’m being trolled, harassed and/or bullied online or I want to be proactive about my safety?

* If you are experiencing harassment, tell someone who can support you, document it, and assess escalating to authorities depending on the severity.
* [Surveillence Self-Defense](https://ssd.eff.org/en)
* [Preventing Doxxing](https://onlinesafety.feministfrequency.com/en/#preventing-doxxing)

##### Where can you find us next?

Mark will be at [KubeCon](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2018/) in December.

Melanie will be at [SOCML](https://sites.google.com/view/socml-2018/home) this week and [NeurIPS](https://neurips.cc) next week. She'll be attending [WIML](https://wimlworkshop.org), [Black in AI](https://blackinai.github.io), and [LatinX](http://www.latinxinai.org).

{{< transcript "[MUSIC PLAYING] MELANIE: Hi, and welcome to episode number 157 of the weekly Google Cloud Podcast. I'm Melanie Warrick. And I am on my own this week because Mark is on vacation. But that's all right. He'll be back next week." >}} 

I have invited on Anima Anandkumar to join us this week to talk about an upcoming conference, a pretty well-established conference in the AI community. This conference will actually be taking place next week in particular. And we're going to talk about some controversy that played out around the name, and more specifically the acronym, of the conference. So that's what you're going to hear as a core component of our podcast this week. 

The name used to be NIPS, standing for Neural Information Processing System. But they've rebranded it to NeurIPS. And we'll get into that. 

As always, we start out with cool things of the week and we're going to end up with a question of the week. And because of the content of the podcast, I've chosen to go with the question of if you're being trolled or if you're being bullied online what are some things you can do about it. So we'll get to that later. But before that, as I mentioned, we'll get to our cool things of the week. 

And for this week there's a couple of cool things that I've unearthed for us, or at least pulled up. There's a blog post that's talking about how you can work with the Cloud DLP, the Data Loss Prevention API in particular, to help with deidentifying and obfuscating sensitive information. 

So if you work a lot with written content and you need to share it-- and in this day and age I know there's some sensitivity about making sure you can mask certain things, like phone numbers, social security numbers-- there is ways within this API that you can integrate it into whatever you're working with or into many other things you're working with to help more easily automate replacing, redacting, masking-- you name it. So information about that API and how you can use it will be provided at the blog post. 

Another cool thing of the week-- there's a nice blog post about how you can unlock what's possible with medical imaging data. So it's stepping through some additional tools and techniques that are being provided within the API that was released back in March, specifically the Cloud Health Care API, but outside of that as well. In the API itself it's also utilizing the deidentification techniques that I was mentioning from the Cloud DLP. 

And then there's some Codelabs that have been provided to help you understand how to use AI machine learning for health care as well as Kaggle is partnering and doing a competition with RSNA, which, for those who may not know, the RSNA is the Radiological Society of North America. And they're doing a competition specifically on pneumonia detection. So you can check out those types of activities and techniques and see how that might be applicable. 

Another cool thing is there is a data set that is being integrated into and being provided as an API through Google Cloud. The data set is something that Quick, Draw! has provided in open source in the last year. But more recently is when it was provided as integration into Google Cloud. And it's like 50 million drawings, actually. So if you want to experiment with images and experiment with drawn images, you should look into this. 

And the last cool thing of the week-- Sara Robinson, who is one of our colleagues, has written this great blog post which is known as "Machine Learning on Machines." So in essence, she's built a model that can evaluate CPU performance. 

And the idea behind this model is that she wanted to help people understand when you're asking that question of what type of CPU setup should I use for when I'm doing machine learning. Well, there's some great content out there that the SPEC has been building out or has been collecting-- the Standard Performance Evaluation Corporation. 

The kind of data they're collecting are benchmark results on computer performance and energy efficiency. And so they've looked at various setups. They've looked at their performance on different types of algorithms, on video, on audio. 

So she took this information. She then built a model that would help you to predict whatever your needs are for that CPU and whatever CPU you have available to you, how performant it would be. So yeah, look at the blog post. You'll get an understanding of what she did, why she did it, and how you can also either do it yourself or use what she's built. 

That's it for us for cool things of the week. So time to get into the interview. Let's go talk with Anima. 

So this week I'm thrilled that Anima Anandkumar has joined me on the podcast. I'm very happy to have you here. Thank you for coming on the podcast, Anima. 

ANIMA: Thank you, Melanie. It's a pleasure. 

MELANIE: So, Anima, I know that you are a Bren professor at Caltech, CMS department. You are also the director of machine learning research at NVIDIA. And we did a great podcast with Bryan earlier this year on NVIDIA and the work that he's doing there. 

And you've done a significant amount of research across the board, especially having significant impact in tensors-- tensor algebraic methods, I should say, in specifically-- large-scale learning, deep learning, probabilistic models-- which is always very hard to say quickly. You've had a significant impact on the space around machine learning, around AI. Can you tell us a little bit more, other than what I've already talked about, in terms of who you are, what your background is in the field. 

ANIMA: Absolutely, Melanie. I've had a diverse background and worked on a range of topics. In fact, I started out in electrical engineering working on signal processing and information theory. 

The first problem, I was looking at was sensor networks. If we have a huge number of sensors that are distributed that have to communicate over wireless networks and have limited battery, how can we do learning? And today we have come back to thinking about it, if we think of internet of things. But about 15 years ago that was still a conceptual problem. But there was a lot of questions of what mathematical formulations to use and how to think about information in a distributed setting. 

So I see this coming a full circle that I started out thinking of deeply theoretical concepts. But today we can realize a lot of those dreams. So we can see those network's devices out there happening and we can ask what we can realize into practical applications. 

And that's why it's such an exciting time to be in machine learning and artificial intelligence, but also have this background of multiple different areas and a foundational theory of information theory, machine learning theory that I can build upon to ask how to bridge that gap between theory and practice. 

MELANIE: Thank you. So I know whenever people talk about tensors they typically will talk about you. And I also know that many people will constantly ask the question when they hear about tensors, oh, do you mean TensorFlow? Do you want to touch on that briefly? Tensors are in TensorFlow, but that doesn't necessarily mean TensorFlow. 

ANIMA: I mean, the good thing about the deep learning revolution is now nobody is afraid of tensors. Everybody has heard of the word "tensors," whether it is TensorFlow as a deep learning framework or tensor cores to do the computations for deep learning in NVIDIA GPUs. 

But there to me it's not completely realizing the potential of tensor computations. We still do matrix algebra in these tensor cores or in our neural network layers when you write a neural network in TensorFlow. So whereas you can expand upon those operations and think much more broadly. 

So what does TensorFlow means? It really means you have a flow of tensors throughout these layers of processing. The input is a tensor. Output in general could be also a tensor. And you have these intermediate operations that transform it. 

And so right now we are doing these transformations in somewhat simple ways. Because designing these architectures are hard, they are going by intuitions. We are saying, let's do convolutions because there is the translation invariance. And this is a useful thing to have when we do computer vision. Let's then convert them to fully-connected layers because I have to change these three-dimensional activations of the convolutional layer into something I can process into a category, which is the output of a classification task. 

So these are going by simple intuitions, but we can ask what is the next step. Can we do a much more complex architectures but that can give us the benefit of multiple dimensions that could potentially compress our current networks by large amounts, that could help us generalize better because it captures higher order correlations in better and more meaningful ways? And that's where the tensor algebra has the potential. 

As a simple example, if you start with these convolutional networks, like I was mentioning before, you have these three-dimensional activations when you go through the convolutional layers. Because you're looking at how the filters are acting on the input. And you have so many channels that you accumulate when you process through all the filters. 

So you have these three-dimensional shapes. But when you come to fully-connected layers, you vectorize it-- you ignore all this three-dimensionality. You just treat it as a vector and you do matrix multiplication with the fully-connected layer. And you pass on the results through few such layers, and finally get the output, which is the classification. 

And so instead we asked what if you kept the three-dimensional information all the way through? Even in a fully-connected layer you maintain the three dimensionality. You contract the tensor, which means you're looking at three separate weight matrices for the three dimensions. And you're learning them. 

And when you're doing regression in the last layer, you're doing the low rank parameterized weights, that means you can have a much more compact set of parameters that can give you the same accuracy. In fact, we found more than 65% save savings in these fully-connected layers by incorporating the multi-dimensionality. 

And what I have ambitions for is to take it to the next level and ask suppose I can realize entirely new architectures by looking at these higher order tensor operations. What would they be? And what kind of an impact can it make, especially if we think of multi-modal information? It's not just images-- it's image, and text, and other information. We have this explosion of dimensionalities. As can we naturally encode them with tensors and carry it all the way throughout the network? 

MELANIE: And that's the next level of your research that you're currently involved in in terms of what you're going forward with. So one of the other questions I wanted to ask you before we dive into some of the meat of the additional things we were going to talk about during this podcast is can you tell us a little bit about what you do as the director of machine learning research at NVIDIA? 

ANIMA: Yeah. So I'm very excited to be at NVIDIA. It's been two months now. That's gone very fast because-- 

MELANIE: So you must have solved all the problems there. 

[LAUGHTER] 

Two months, no problem. 

ANIMA: I only wish, I only wish. I'm so happy to have amazing colleagues. Bill Dally is the chief scientist here, Bryan Catanzaro, Jan Kautz, And researchers from also the computer graphics side, architecture, hardware. It's this interdisciplinary nature of research here and also the engineering prowess and the scalability that NVIDIA offers. 

I'm very excited to think of research problems at the core of machine learning like the example of can we realize new neural network architectures but really realize them at scale. It's the full stack solution. Can we think of better hardware, better code of primitives, better frameworks that make it easy to design and realize the algorithms? 

And that's what makes NVIDIA media so exciting to me. Because I can translate that into practice. I can see the real gains. But I'm also given the freedom, and a team, and the expertise to ask how we can realize those new dreams. 

MELANIE: You have this expertise from the mathematical and theoretical side that you're also now able to translate into this hardware applied side of the world. It sounds pretty fantastic to be able to marry the two. 

ANIMA: Absolutely. And NVIDIA to me is the best place to do that. 

MELANIE: That's wonderful. Let me go ahead and shift gears and talk a little bit about from the AI and the machine learning space. I know you've been in the academic field clearly for years now. And the space is well-known for having some conferences that are pretty established for bringing together academics to be able to share research, to share knowledge. 

There's ones that stand out as the core ones, although there's a ton of them that allow people to come together for various specialties. Can you tell us a little bit about those conferences, why they matter so much in this field? 

ANIMA: Indeed. Back a few years ago, going back when the deep learning revolution hadn't yet happened, then it was these small academic conferences. For instance, having 700 or 800 was such a big number. And most of them were small workshops. 

And that was the only way to disseminate information. You'd go actually talk to the person and get the full understanding of the paper during the poster session. So you'd have these very deep conversations there. 

And so to me since I didn't start out my PhD in this field, I moved towards the end of my PhD to machine learning-- although the tools I was using was very relevant to solving machine learning problems-- I found the community so welcoming. I submitted the papers to NIPS-- now it's called NeurIPS. And ICML and other conferences, I felt instantly welcomed. 

Because there was deep reviews. There was pages of very deep technical discussions during the review process. And the community was small, it was well-knit. And we made a lot of progress in the conferences in terms of intellectual engagements. 

MELANIE: And those have evolved as neural nets, as machine learning have taken hold. I've seen these conferences. And as you mentioned, NIPS, which is now NeurIPS, has gone from-- I guess it was only a few hundred to, what was it, 8,000 not that long ago? I'm not sure what it is this year. 

ANIMA: It could be much more if there was no limit on the interest. 

MELANIE: Probably. So part of the reason why I set this podcast up was because I wanted us to specifically to dive into NIPS, the Neural Information Processing Systems conference. Some out there, especially those in the academic field, may have heard about the controversy that played out in this issue in particular in terms of renaming it. I think it sounds-- just by us saying the acronym, for many who have never heard of this conference it might make sense. But unfortunately, it did receive a lot of resistance. Can you talk to that a little bit about what transpired, the naming change, why this was an issue? 

ANIMA: So being in the community before the deep learning revolution, like I said, it was a small well-knit community then. And the name, you think for it for a minute. But then you go to the conference, you have these friendly discussions, and you have such an amazing experience, then that's not the primary focus. 

I'm very proud of the tradition that the conference has spawned. In fact, the conference started out here at Caltech. It was founded here at Caltech. Not many people know that. 

MELANIE: No. 

ANIMA: And I'm extremely proud of that tradition. And it was started by Professor Yaser Mostafa and Ed Posner here. And in fact it was forward thinking in the view of marrying neuroscience and machine learning together. And that's why there is "neural" and there is "processing." 

MELANIE: Right. 

ANIMA: And that was the goal of that conference. 

But once the community started exploding with deep learning taking off, which is great. But a side-effect was these conferences grew out of proportion. There's a lot of issues of how we are even enabling entrance into these events. And it's this first come first serve, which I have a lot of issues with. So there's, one, issues of how to manage the population entering the conferences. The other is the behavior. 

So when you have lots of newcomers into the community, there's so many people looking for attention. And for them it's this kind of quick attention because they have to hire talent. And so you have this hedge fund that no one had heard of printing t-shirts that say like "My NIPS are NP-hard," I think that's the very first time I saw the name-- 

MELANIE: Wow. 

ANIMA: --being used that way. And just this hedge fund giving out these t-shirts during the event. And they got their notoriety, they got people to pay attention. So I see why they had the incentive to do that. And that started increasing. 

So to me it's this infusion of bro culture. When people feel like it's a gold rush, it's been shown time and again there is a lot of people who want to enter to make a quick buck or to somehow quickly gain a profit. And that to me really has destroyed the academic fabric and the intellectual pursuit of the conference. 

And in a way, we are all still grappling with that change, how do we deal with it, how do we manage this. How do we keep it professional? We indeed want the community to grow. We indeed want democratization of AI. We want it to reach out to much bigger populations. And we want them to think about AI problems. But how do we do it in a way while still maintaining the intellectual exchange and while still maintaining professionalism? 

So to me these issues around the name and the way the name was used to harass women, to talk about women's body parts, is a reflection of the cultural change that's been coming into AI community. 

MELANIE: Why do you think that these conferences have gotten so big and are so important for people to attend now versus before? 

ANIMA: Now it's become a gold rush. It's really the rush. 

MELANIE: So the gold rush? 

ANIMA: In terms of hiring the talent, hiring the researchers. So the companies have done a lot, so a lot of amazing things of taking AI to the real world. But there is also the challenge of how do we still maintain the intellectual pursuit and have avenues for intellectual exchange and separate that from the aspects of hiring and recruiting. 

And I think there are many other fields that do these large conferences very well. There can be very well-established protocols. 

But we have seen this growth so fast. And I feel that the boards of these machine learning conferences haven't managed to adapt. I think there needs to be some new infusion of ideas there. 

MELANIE: That makes sense. So where we're at now, this year in particular, the conference took a step back and did an assessment of the name. Do you know what helped them take an assessment and consider changing the name? 

ANIMA: So like I was saying, last year was to me where it all topped off. A few years ago the deep learning revolution started. And we saw these new people, and huge crowds coming to the conferences, and the character of the conferences changing. 

And then there were so many corporate parties, and events, and other outside events, that became almost the central attraction compared to the main conference. And so when those started multiplying, there was no code of conduct, there were no standards established. And so people to get attention, again, were doing things that were outside the norms of professional conduct. 

The primary goal that most researchers have-- and especially a lot of women researchers have-- is to go talk about intellectual things, to talk about actual machine learning research, and not worry about being made fun of their body parts. 

MELANIE: Agreed. And outside of these parties and some additional content that was released and published around various harassment that folks have experienced at this conference and other conferences, I'd also read that there was an open letter in March from Johns Hopkins University, that the faculty there were asking the board specifically to change the name. That was something that I had come across as another component that played into all of this. 

ANIMA: Absolutely. Professor Elana Fertig was in touch with me. And she was telling me of all the efforts from Johns Hopkins. And that's when I even started plugging into this issue more. I was bothered by it, but I realized it bothered the eng women even much more than what I could feel. 

And to me, this is coming from an angle of not something affecting me personally as much. I was angry about it. But for others it was much more than that. They literally felt like they were not welcome in the event or even welcome to be an AI researcher. And that to me is catastrophic. 

MELANIE: Agreed. So the board did do a survey this year and they came out with the results. And that was a couple months back where they said we're not going to make the change. And they gave this statistical analysis on why they're not going to make the change. So you took a reaction to that. Can you talk to that a little bit about the results and what steps you took after you saw the results? 

ANIMA: I was first of all disturbed that there was a survey asking everybody that there should be a name change. 

MELANIE: Right. 

ANIMA: That to me was already a problematic starting point. Because on Twitter when I publicly supported the name change and other women were doing, there were already behaviors of trolling. There were men writing to me saying, oh, both men and women have nipples, what's the big deal. They don't even understand that's already a problem there. 

MELANIE: Right. 

ANIMA: So the survey was already an avenue for people to debate it in an unhealthy way. Because this is an issue that is not affecting the majority. The majority of men, especially senior men, have never had to worry about it. That's the privilege they have. 

And they may find it funny. They may laugh at it for a minute. But that's the end of it. That's the only effect it has on them. 

But on especially the junior women, the more and more I heard on how they felt so unwelcome and negative-- and that's combined with everything else, the parties, the bro culture, the aggressiveness in how some people push their research versus other voices are getting drowned. So to me the reflection of all this was being played out with the name change debate. The majority was being asked to make a decision on an issue that didn't affect them adversely. 

And on the other hand, a name change to me is something so simple to do, as we saw in the end. It's not that hard. It's literally go and change on the website and on social media. 

MELANIE: Right. 

ANIMA: It costs nothing. And people are arguing, oh, it's symbolic. But why don't we start with at least something symbolic. Let's start there. This shouldn't be the end point. But if you start there, you send a message. You send a message to all the young women that their voices are heard, their concerns are heard, and we will do anything to make them more comfortable and welcome. 

And it will also send a message to all these bros that are making fun of the name and really destroying the professional nature of the conference that this will not be taken lightly. And hopefully over time we can have a strong code of conduct that will actually make this behavior accountable. And so that's the path I'm hoping this will take. But this is where the name change-- the way the decisions were made, the way the survey was designed. 

And it was also a biased sample that was asked to take this survey. So it was all the attendees, I believe, over the last five years. But how about so many women who could not attend? 

Which again goes back to my issue of access to these conferences. If it's a first come first serve, if you're comparing this to the Burning Man, if you're comparing this to these hot tickets getting sold out-- think about young women who may, first of all, not be not so confident if they even want to go to conference or if they have challenges in getting the travel support. 

Both men and women in the junior positions were even thinking about it but haven't yet managed, they will be the ones who will lose out the most. And those in academia, because they may not have the same resources that they have in industry. So this has been an extremely biased sample of both men and women who were asked to take the survey. 

And my view is it was not affecting them. It was affecting more people who were about to enter the community, the more junior people. They are much more adversely affected than the senior people who are well-established in the community. 

MELANIE: I also think I've yet to meet someone who's never heard of the conference before that when you tell them the name they don't immediately think that it's an inappropriate acronym to be using. 

But when the results were given, you responded by starting a petition. You specifically started out with the #protestNIPS hashtag and then also created a petition on change.org. 

ANIMA: I should admit I was really late to the party. There was a lot of hard work done at the grassroots level, a lot of women speaking out on Twitter. And as I said, from Johns Hopkins University, Dr. Elana Fertig and so many others that coordinated with the Title IX office there, drafted this letter, got all these researchers to sign this. So they've done so much of groundwork to begin with. 

And when I came in, I was thinking, let's take this broader. Let's open up to not just machine learning people-- everybody on Twitter. Because the general population will be so shocked to see this acronym is a real thing. And that's where I tried to de-bias the samples. Because not just the people who have already been in the community and take this name for granted, but fresh voices that have a real issue with it. And I really wanted to see the board take notice. So I essentially repurposed the letter from Johns Hopkins and put that on change.org to reach out to the broader community. 

MELANIE: That's great. So then what happened after this petition? You've already talked to how people have rebelled against the name change, but what kind of reaction did you get when you started publicly speaking out against this? 

ANIMA: I got a lot of support that I'm so happy. And I find that very fulfilling how the community came behind me. And so many men and women retweeting. Jeff Dean immediately retweeted and he wanted to think of getting the companies to be accountable and supporting this name change. So that to me really amplified the voice. So there were so many amazing researchers who really helped amplify this. 

And that was the majority. So the majority are amazing, good-hearted people. 

And then there was a small section who were genuinely questioning. And they were really confused. Many of them were not native speakers. They didn't know the short form or they didn't really get this immediately. So that's why I had put the Google Image Search to even begin with that. 

MELANIE: It's great impact. Visuals are wonderful for these things. Yes. 

ANIMA: So that smaller section of people who were openly speaking out, that spoke with their real identities but had genuine questions, most of them came around. I would say most of them at least realized, yes-- it may not have affected them and that's OK, but it's affected so many others. So they saw all these voices that were saying that they were adversely affected. And then they realized they need to support this. 

And so that to me was the best part of it because how many people who are in this neutral or moderate position, who just not even be aware of the issues affecting the minorities, but when we bring this out into the open and have a dialogue that we can really get this information exchange and we can increase empathy. And that was the most fulfilling part of it. 

But there was also the negative side. There was a lot of trolling, no surprise. All of it was anonymous. 

And then there was the Reddit thread that personally was abusive to me in so many appallingly distasteful ways. I got a lot of the accounts that I now had to block. I really had to keep pushing Reddit to remove those, and it took extensive ones. And still, there is some that's still there. 

So this brings out the concern that anybody having a voice pushing for inclusivity or diversity is heavily trolled on the social media. And we have so little control on how to avoid this hateful speech. And that to me is really disturbing because it prevents so many women from speaking up. 

MELANIE: It's true. I'm hesitant to ask, but partially want to ask how bad was the trolling for you? Are you willing to talk a little bit about how bad it got? 

ANIMA: Sure. And in my Twitter thread I did post some of those screenshots because I wanted people to be aware of how bad it is. So many men were shocked because they've never seen anything like that happen to them. They've never been personally subjected to such kind of harassment and trolling. 

It was commenting on my looks. It was commenting on my professionalism. It was saying that I just got up to this position because I'm a woman and how can I be so not thankful to all of the men who have helped me. It was all this. They called me a radical feminist. 

And I know another woman who went on Reddit and tried to answer to these trolls. She was bullied. She was physically threatened with a gun. And this is a professor who is a public figure. And then you really start to wonder how dangerous this could all get. 

And then the worst thing was not just the personal trolling that I was receiving but how other eng women were bullied through all this. And I was receiving emails from so many eng women saying-- and also eng men-- saying that when they were discussing it with others that I was just being trolled, I was looked down upon. And sometimes the advisors would tell their students not to sign the petitions publicly or never to lend their voice to this even though they wanted to. 

So you could say, oh, this is a harmless name change. But it opened up this underbelly of harassment and bullying-- 

MELANIE: Viciousness. 

ANIMA: Yes. There's so much-- that's the word, "viciousness." If it was so simple and easy to do then why are people behaving so viciously about it? 

MELANIE: It's atrocious. And there's not really enough bright words. 

But something that's in my head right now that I need to say is thank you. Thank you for fighting for the change in addition to the others who have done that. Thank you for putting the energy to that. 

Because this isn't your job. This shouldn't be your job. This shouldn't be anyone's job. And thank you for continuing to be a leader in the field and not leaving because of the things that you've seen and experienced. So thank you. 

ANIMA: Thank you, Melanie. Thank you for amplifying the voice. And thank you for all the support when as all this was unfolding you were messaging me. You were being such a great source of support. And that's where I found all these amazing allies. We grew stronger that way. 

And we know next time to do more meaningful changes who the people are. Now I know my community. Now I know the allies. And that's so important. 

And yes, I'm here to stay, trolling or otherwise. 

MELANIE: Good. 

ANIMA: That's not going to-- that's only going to make me stronger. The days of trolling are numbered. I would really like to see big changes. And I would like to do everything that I can to not only limit trolling but to limit all these kinds of bad behavior in the community and in the wider space. 

MELANIE: Agreed. Transitioning back-- you had the petition. And between doing the petition and all the things that you've been through and the support that you've received, it seems like the board has reconsidered. Because just recently before the conference they released a change. 

And the change is somewhat of a compromise. Instead of changing the full name they're now changing-- they're keeping Neural Information Processing Systems but the acronym is going to be NeurIPS-- so like kind of like stirrups but not exactly. 

ANIMA: That's not the picture I would like in my mind. 

MELANIE: What's that? 

ANIMA: I said I don't want the picture of stirrups in my mind. 

MELANIE: I know. It's the word that keeps coming into my head every time I hear people say the new acronym. 

ANIMA: Maybe the [INAUDIBLE]. 

[LAUGHTER] 

MELANIE: Right. So what do you think of the new name? 

ANIMA: I think the new name is a nice compromise. I would have liked to start with a clean slate because that wouldn't have been any harder. But I'm happy that it came up to this point. 

And as I said, it's much more about the name. It's all the forces that came into the open when we were debating this name change. And that's the one we need to work a lot more on. 

So I'd really like to move to the next steps. I would really like to see a much more impactful code of conduct. The current one has been amazing. It was done in a short amount of time in a hall dorm. And Katherine Heller just did an amazing job to put that together. 

But now I want to ask, what are the repercussions if somebody does not meet that. There has to be real repercussions. And it should have teeth. So these are the things we need to ask ourselves as the next steps. 

MELANIE: Is there anything that you'd recommend for those who might want to help promote inclusively in the field? 

ANIMA: Have a professional interaction. And be very mindful if you're talking to people who are more junior to you. Even the actions you don't even think about me have a big impact on them. 

And communicate better. See if people are feeling comfortable when you're talking to them. 

So I would start with those basics. I think Jeff Dean had an amazing Twitter thread where he crowdsourced experiences of women researchers, and conferences, and negative experiences they had. And then he said, oh, these are the things you shouldn't do. 

For instance, in the very first conference I went to-- my advisor is great. He introduced me to another senior male researcher, a professor. And he left. So he introduced me. He had to go talk to somebody else. He left and he said, oh, go further, take over this conversation. 

And then that professor told me, oh, let me introduce you to my female graduate student. Because you both are women, you will get along better with her. That to me was just like-- I'm a starting researcher. I really would like to talk to the senior person that I looked up to. And for him it seems so natural, but had such a bad impact on me. 

And it's important for women to express all these kinds of behaviors that made them feel uncomfortable, unwelcome, diminished, and then for men to think about taking notice. And then to open this up even broader to other diversity groups. 

I know Black in AI has seen amazing effort into diversity. We had researchers coming from countries that never had anybody attend these conferences before. That to me shows there's so much work to be done there. But they also received heavy trolling undergoing a lot of issues. 

So to me, yes, we start with women now because I can mirror those experience. I understand them. But I want to understand how is it impacting the other groups. What are the issues the others are facing that I may never have? I have my own privileges. But others come from different backgrounds and are facing more issues. How can we address everybody's issues? 

MELANIE: I think that's a great point. And we are releasing this podcast the week before the conference, the NeurIPS conference. And the workshops, as you mentioned, like Black in AI, and LatinX, and WiML. 

So now that the name has been changed, there's been the compromise, what are you looking forward to in terms of the conference? What are some of the areas in which you're excited about, that you think are great to keep an eye on, outside of the diversity efforts that are going on to help bring in more researchers into this space? 

ANIMA: Absolutely. To me, going to these conferences has always been about the new innovations, like what are the new technical breakthroughs. And also, so much of what eng people are doing-- like eng researchers, how we can further nurture and encourage them? If they've come for the conference for the first time or presenting the paper, take that to the next level, how I can communicate with them on all the broader pictures. So that's where I get the most out of these conferences. 

And in the workshops a lot more exchange can happen because it's much more organic. It's much more work that has just started or is in preliminary stages. So there is a lot more room for brainstorming, for giving feedback, for receiving feedback. 

In the past I've had just so many results I've derived during the conference. I just sit, brainstorm with people, and come up with new ideas. Right now as the community has scale that has become harder. But I would like to still pursue some of this. 

And this is where we need to control the crowds and we need to find ways that makes this more manageable. In fact, I tend to do this more at WiML or Black in AI because they're smaller events and I can talk at a personal level and exchange ideas. 

MELANIE: That's great. Two last questions, one being you've done a lot of interviews-- any questions that nobody asks you that you wish somebody would ask? 

ANIMA: So people have asked me a lot about industry versus academia because I'm in both sides. And I see the good and bad in each of them. And so most of the questions typically are about how industry is snatching away the academic talent, how can we avoid it or change that. 

And for that I always say, look, there are lots of positive impacts. Because many professors like me are dividing time between both industry and academia and really helping in this transfer of information, not only from academia to industry but back. 

So the question that nobody has ever asked me before is how is industry impacting academia in a positive way and what are still unrealized dreams? Because there are also lots of frustrations to me and to other researchers with the current academic system. 

And that to me is the way research is so much focused on publications, but also so a little focused on creating software frameworks, creating a community effort where people can really build an ecosystem and think about modular softwares that will benefit others-- not only that they have done some research, done their own code, and they are writing this paper, and publishing this. 

And to me industry has changed this game. Because the impact is coming from having these open source frameworks. And the community is using it and contributing to this. And so what I really hope for and what I'm pushing for is how can we do this in other disciplines of sciences. 

The problem is in the other basic sciences there is no industry doing this. Now no industry is doing any research on this. So what about all of these other areas that are not disrupted by industry? 

I would like to see disruption, disruption in the sense of how the incentives are aligned in better ways, how we can really remove these barriers that are mostly sociological. Because there was this very old legacy cord that was used in some high energy physics where nobody even understands what's going on. It's still being used today even when we have billions of dollars of experiments being done. Right the experimental part takes so much resources, and that's where the grants go to funding them. 

But on the computational side, on ultimately to enable AI into those applications, there are basic barriers. They may seem sociological and more mundane. They're not a mathematical barrier. But they are important barriers. And I don't have a good answer on how to disrupt that. 

MELANIE: That's a good question, though. Anything else that you wanted to touch on before I let you go? 

ANIMA: I wanted to thank you again, Melanie. It's been wonderful that you have asked so many questions where I could really express the emotions. I was going through as I went through this protest NIPS and be engaged with the community. I really appreciate you amplifying this voice and lending support. I'm really thankful for this. And thank you for doing this podcast. 

MELANIE: Well, thank you for coming and sharing the story with us. Really appreciate it, Anima. 

OK, question of the week. If you are dealing with any type of bullying or trolling, or you're concerned about this, what are some things you can do? 

Well, I've included in here a couple of links that you can check out. There is great information from the Electronic Frontiers Foundation for surveillance, self-defense, tips and tools. I would not recommend reading it all in one sitting. I would say go in there, look around, pick and choose what makes sense. 

And also Feminist Frequency has provided some wonderful information to help step you through ways to better protect yourself online. This isn't a foolproof process. This is an imperfect process. But at least that's something you can do if you are interested in taking certain steps. And they're not the only ones out there who have provided content. So you can definitely do some searching to explore further. 

All right. So where are we all going to be? Well, as we've been talking about it, Mark will be at KubeCon in December. So if you're going to be there-- KubeCon, "kewb-con," however you pronounce it-- you should go and say hello to him. 

And then I will be at mall actually this week. And next week, as I mentioned, will be NeurIPS. 

If you're going to be in the area of Montreal, you should definitely check out some of the workshops. WiML is going to be on December 3rd. And Black in AI is going to be on December 7th. And LatinX will be on December 8th. So if you're there, go by, check out these different communities. They're good ones to be learning from, especially in the AI space. 

That's it for us for this week on the podcast. So thank you for joining us and we'll talk to you next week. 

[MUSIC PLAYING] 

