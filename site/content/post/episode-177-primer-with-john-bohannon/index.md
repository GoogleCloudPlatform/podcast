+++
audioDuration = "00:52:02"
audioFile = "Google.Cloud.Platform.Podcast.Episode.177.mp3"
audioSize = 75301015
categories = ["Primer", "AI", "Automation", "Machine Learning"]
date = "2019-05-15"
description = "Michelle and Mark are together again this week to talk with John Bohannon about AI startup, Primer."
draft = false
episodeNumber = 177
hosts = ["Mark Mirchandani", "Michelle Casbon"]
title = "Primer with John Bohannon"
image="/post/episode-177-primer-with-john-bohannon/images/hero/hero-EP-177.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/bp3hli/episode_177_primer_with_john_bohannon/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Michelle](https://twitter.com/texasmichelle) and [Mark](https://twitter.com/markmirch) are together again this week to talk with John Bohannon about AI startup, Primer. His goal is to build systems that continuously read documents and write about what they discover. He discusses his recent work building a self-updating knowledge base and the research his team just published.

Perhaps most interesting is the circuitous path he took to get to Primer. Hear about his adventures along the way to becoming a data scientist specializing in natural language processing. How does a microbiologist who developed a pregnancy test for fish get distracted by Python? What does contemporary dance have to do with establishing AI policy? Join us as he weaves a common thread along his career path: encountering interesting problems and discovering creative ways to solve them.
 
<!--more-->

##### John Bohannon

John Bohannon is the Director of Science at Primer, an AI startup in San Francisco. Until 2017 he was an investigative journalist and data scientist writing mainly for Science magazine and Wired. He spent the first half of his career as a foreign correspondent, including as a Fulbright scholar in Berlin. His reporting from Gaza won the Reuters-IUCN Media Award for Excellence in Environmental Reporting from Europe. While embedded with military forces in Afghanistan he engineered the first voluntary release of civilian casualty data by NATO and the United Nations. As a visiting scholar in the Program in Ethics and Health at Harvard University he focused on the involvement of doctors and social scientists in the US government's torture program. He was also the scientific advisor to Isabella Rosselini for “Green Porno” (winner of 4 Webby awards) and “Animals Distract Me” (official selection, 2011 Sundance Film Festival). He is the author of a peer-reviewed study of people’s inability to distinguish pet food from paté, which inspired Stephen Colbert to eat cat food on television. He has a PhD in molecular biology from the University of Oxford.

##### Cool things of the week

* Braving the Wilderness: The Quest for True Belonging and the Courage to Stand Alone [book](https://www.amazon.com/Braving-Wilderness-Quest-Belonging-Courage/dp/0812995848)
* Next '19 Recap [video](https://www.youtube.com/user/googlecloudplatform/playlists?view=50&sort=dd&shelf_id=26)
* I/O '19 Recap [video](https://www.youtube.com/playlist?list=PLIivdWyY5sqJa8q_WL4efzUqNkNuacImb)
* All I/O Sessions [videos](https://www.youtube.com/playlist?list=PLOU2XLYxmsILVTiOlMJdo7RQS55jYhsMi)
* Michelle's Favorites:
     * Session: Taylor Wilson interviewing Michio Kaku on the future of humanity [video](https://www.youtube.com/watch?v=zsnc0vkwWRk&list=PLOU2XLYxmsILVTiOlMJdo7RQS55jYhsMi&index=7&t=0s)
     * Sandbox: AI on the Edge by Gabe Weiss, Noah Negrey, Yu-Han Liu, and Luiz Gustavo Martins 
          * TensorFlow Lite [site](https://www.tensorflow.org/lite)
          * OSS [site](https://github.com/GabeWeiss/google-sorting-demo)
     * Codelab: AI on a microcontroller with TFLite and SparkFun Edge [site](https://codelabs.developers.google.com/codelabs/sparkfun-tensorflow/index.html)

##### Interview

* Primer [site](https://primer.ai)
* Primer Blog [blog](https://primer.ai/blog)
* Headline Generation: Learning from Decomposable Document Titles [paper](https://arxiv.org/abs/1904.08455)
* BERT [site](https://github.com/google-research/bert)
* Ngram Viewer [site](https://books.google.com/ngrams)
* Google Books [site](https://www.google.com/googlebooks/about/)
* Dance Your PhD 2018 WINNER - Superconductivity: The Musical! [video](https://www.youtube.com/watch?v=wZvUNIHxWic)
* Kinetech Arts [site](http://kinetecharts.org)
* John Bohannon's Website [site](http://www.johnbohannon.org)

##### Question of the week

[How can we be like John?](https://cloud.google.com/blog/products/ai-machine-learning/no-deep-learning-experience-needed-build-a-text-classification-model-with-google-cloud-automl-natural-language)

##### Where can you find us next?

Michelle will be at [Kubecon Europe](https://sched.co/MPgr) and CERN.
Mark Mirchandani will be hanging around the bay area.
Mark Mandel is in Tokyo.
Gabi is in France.
John is in NYC.
Brian will be in Boulder, Colorado.

{{< transcript "[MUSIC PLAYING] MICHELLE: Hi, and welcome to episode number 177 of the weekly Google Cloud Platform podcast. I'm Michelle, and I'm here with my colleague, Mark Mirchandani. Hi. Mark." >}} 

MARK: Hi, Michelle. How are you today? 

MICHELLE: I'm doing well. How about you? 

MARK: I'm doing very, very good. And I'd like to take this chance to call out that May, which is the month that we're currently in, is Mental Health Awareness Month. 

MICHELLE: Mental Health Awareness Month-- what exactly does that mean? 

MARK: So I have a vague idea of what it means, and through some readings, and a lot of tweet conversations, and people just kind of promoting this idea that, hey, it's important to take some time and recognize that sometimes you need to take a step back. Sometimes you need to take some time for yourself. I think there's a lot of negative stereotypes about going to therapy and there's a lot of ideas out there that people just need to talk about them more. 

And I think it's important to raise awareness of it. And that's why I think that having a month dedicated to helping people understand mental health awareness is and why it's so important for people to kind of focus in on not overloading themselves with work, taking time for themselves, setting up an environment where they feel good-- all of these kind of things are really important to focus on. And so that's why it's kind of cool that there's a month dedicated to it. 

MICHELLE: Yeah. So I really like the fact that we are talking about it, that we're sort of normalizing it, and making it clear that there's no shame in it. It's a way of taking care of ourselves in the same way we take care of our physical health. One of the best phrasing for this is from a book by Brené Brown, one of my favorite authors. So she describes it as if we are exhaling all the time, we need to be inhaling. And Mental Health Awareness Month is a time for us to inhale so that we can exhale. 

MARK: Oh, very interesting. I'm going to have to check that book out. 

MICHELLE: It was a good one. I believe that one was from "Braving the Wilderness," which was one of the most recent ones that I read. 

MARK: Gotcha. Maybe we'll put a link down in the show notes. 

MICHELLE: Great idea. 

MARK: Perfect. Well, onto the main content. Today, we have a very, very, very, very, very-- I said six very-- seven very cool interview with-- well, why don't you introduce him? 

MICHELLE: That was a lot of verys. So I agree that it was a fascinating interview with our friend John Bohannon. So he co-presented a session with me at Next, and so we ask him a little bit about his work, his path into data science, and how he got to where he is now, which is a director of science at Primer, a startup here in the Bay Area. 

MARK: Which as a teaser, this interview was wild. We heard so many cool stories. I'm just remembering all the fun things that we talked about. It's a really, really good interview. Sorry-- really, really, really, really, really, really, really, really, good interview. 

MICHELLE: It was one of my favorites, for sure. He's just a fascinating person. But before we get to that, we have a really exciting question of the week that follows up from our conversation with John. 

MARK: We do, but even before we get to the question of the week, we're going to do our cool thing of the week. 

[MUSIC PLAYING] 

MICHELLE: Cool thing of the week. There are so many. This is the week right after Google I/O. We were both there last week. We had so much to do. It was an action-packed week. So how do we condense that into cool things of the week? 

MARK: Well, I'm glad you asked, because as it turns out, all of the sessions that happened at I/O, and actually all the sessions that happened at Next, which wasn't that long ago-- all of those are available on YouTube for people to rewatch. Now, there's a ton of sessions at both. And as you can imagine, Google Cloud Next had a ton of cloud content. I/O had some cloud content, but there was a lot of other talks there, especially focusing on other Google things like Android, and Chrome, and so on. 

So all of those talks are available on YouTube. If you go to the GCP Cloud YouTube channel, as well as the links we'll probably put down in the show notes, you can check out all these different sessions. You can kind of read through them and see what they're about, and see who was talking, and kind of catch up on the topics that you think were interesting. But I know that while we were there, I was hanging out mostly at the community booth talking with people, looking at some of the new announcements. 

But you had a chance to actually go to some sessions. So what was your favorite session? What was your favorite Code Lab? And what was your favorite Sandbox? 

MICHELLE: Oh, so many great questions. So if you don't want to go through all of the videos from I/O, if you just want to shortcut to what was my favorite session by far, that would have to be the session where Taylor Wilson interviewed Michio Kaku. So he is one of my favorite scientists. I've been reading his books for years. He's been on so many PBS programs. He's a very public-facing scientist, and there's not that many of them out there. 

So he's been pretty transformational for me. And what I really enjoyed about the session-- it was sort of a fireside chat format. So Taylor has a lot in common with him, and you could tell that this scientist, in particular, was very formative for Taylor's early years. And so he was just so excited to be interviewing him, and there was so much energy in the room, and he asked such intelligent questions. 

And there was so much overlap in their backgrounds that it was just really fascinating to watch. It was not only a fascinating interview, but the interviewer was also just really on point. So I recommend that session. It was, by far, my favorite. 

MARK: So that would definitely be one of the great videos to check out on YouTube. So what about the sandboxes? I mean, there are a lot of really cool demos out there that people could actually get hands-on and play around with from, again, a wide variety of Google products. Which one did you kind of like the best? 

MICHELLE: My favorite would be the one called AI on the Edge. This was created by a few of our co-workers. Gabe Weiss, Noah Negrey, and Yu-Han Liu, who are both on my team, and Gus, or Luis Gustavo Martins-- they all put this together. And the cool thing about that is the sandboxes are physical instantiations of these projects. And so it was like a living-- do you remember on "The Price is Right" the Plinko boards? 

MARK: Oh, absolutely. Everyone remembers the Plinko boards, right? It was the best game. 

MICHELLE: So you have that round token that sort of makes its way down and drops into a slot. So the cool thing about this is that it used TensorFlow Lite to identify the number that was on the token, and then it would drop it down into the right slot according to the number that was written on the token. It was super cool. So there were a couple parts to this. There was image recognition for recognizing the number, and I believe that was an on-device edge TPU. 

And then there was also the object recognition, which was an Android app. All of that was using TensorFlow Lite. So different types of hardware. And the models that they used, digit detection was taken from AutoML, and then the object detection was using Mobilenet. And the cool thing about that is that all the code that ran that will be open sourced. 

Gabe is essentially opening it this week. So by the time the show comes out, it should be out. And you'll be able to see all the code that went into it, everything that went behind it. And he is also in the process of writing a blog post or several, so stay tuned on the GCP blog for a written description of everything that he put together. So you, too, can feel like you were at I/O to view the "AI on the Edge" sandbox. 

MARK: That's the best part about it, right? Because if you didn't get a chance to come, the sessions are out on YouTube. A lot of the code-- hopefully not just Gabe's demo-- are going open source. There's still a lot of hands-on stuff that you probably can't replicate, which is why you should probably come to the next year's I/O. But if you weren't able to make it, there are lots and lots of cool ways to catch up with that. Not only that, but Code Labs are another great way, right? 

MICHELLE: Yeah. So that's where I spent most of my time, in the Code Lab section. And my favorite Lab was the one that uses a SparkFun edge board. So this one also uses TF Lite, which is what was powering Gabe's demo. So it's AI on a microcontroller with TF Lite. And I had seen this a few weeks before by one of the lead researchers on the project, but at I/O was the first time where users could come together, and they had all the written instructions, and they got to do this themselves. 

So it walked them through, on the board, creating these models, putting it onto the board, and then you could yell at the board. It was a speech recognizer. And then the right colored light would go off, and so you had throughout the Code Labs people just randomly screaming, yes, yes, no, yes, no, no. 

MARK: I think I saw something very similar with animals, and people had to scream out the animal noises, which was an interesting demo, as well. 

[ELEPHANT TRUMPETING] 

MICHELLE: That was the highlight of the Code Labs for me was that one lab. 

MARK: Oh, that's awesome. And one of the other cool things that was at I/O was the Detox Zone, and which we were just talking about mental health awareness and how important it is. 

MICHELLE: Absolutely. So that was probably my favorite miscellaneous zone. I really appreciated that there was a place for people to sort of retreat. What I loved about I/O-- and it was so different from Next-- it was more of a developer festival atmosphere. It was all outdoors, and it was much different from Next. So Next is in Moscone. I/O was outdoors. And you were part of nature, which I appreciated. 

And this digital detox zone was kind of off to the side in a corner. And I think my favorite part about it is that there was a woman at a booth with a typewriter offering poems. So you could just walk up and get a poem, and she didn't even use a laptop. And it was literally just a piece of paper that she handed to you. It was lovely. So in the middle of this detox garden, it was a fantastic contrast to the rest of the overwhelming festival atmosphere. 

MARK: So it's a really great experience. Obviously for people who do get a chance, it's super, super awesome. If you don't, we do our best to try and get as much of that experience out there. But there probably just isn't quite any way to replicate it, other than showing up. 

MICHELLE: That's right, so come next year. It was my first I/O, and I am definitely going back next year. It was fantastic. 

MARK: Awesome to hear. Well, I don't want to delay our conversation with John any longer. So should we dive into that? 

MICHELLE: Let's get started. 

[MUSIC PLAYING] 

All right. Welcome, everyone. We're very happy to have our special guest today, John Bohannon, here from Primer. He's the director of science there. 

JOHN: Hi. 

MICHELLE: I'm your host, Michelle Casbon. I'm a developer programs engineer here at Google Cloud. 

MARK: And co-host Mark Mirchandani, developer advocate here at Google Cloud. 

MICHELLE: And we're very excited about today's episode. So John and I-- we did a session last week at Google Next, and I was fascinated. So meeting John and preparing for our session, I just learned so many things about him. And I had to invite him onto the show to tell us more because there are so many rabbit holes-- 

MARK: And you've been telling me-- 

MICHELLE: --to go down. 

MARK: --about this before this recording. 

MICHELLE: That's right. 

MARK: So it's super exciting for me to kind of understand. And we were talking before the recording, and I think John has a lot of cool content to share. But before we get into that, John, can you tell us who you are and what you do? 

JOHN: Hey. So I'm John Bohannon, and these days, I'm designing artificial intelligence to essentially read and write so that humans don't have to. 

MICHELLE: That sounds very exciting. Is this because humans are lazy, or because maybe their results are better? 

JOHN: No, humans work very hard. And in fact, the things we're building are most useful for the humans who work really hard whose job involves reading and writing. So broadly speaking, if your job is an analyst, you could be in government, or banking, or corporate, or even a journalist, which is something that I've done in my life, it kind of boils down to the same thing. You spend the first half your day reading way more than you can possibly read, second half writing, make sense of what you read, and help someone make a decision, or inform the public, or inform the decision-maker. We try and automate as much as possible of that stack of tasks. 

MARK: So what does that mean, when you say automate something like reading? How do you do that? 

JOHN: So for example, when I first joined Primer, when we were very small, I was leading an effort to build a product called Primer Science that reads papers for you. And so it was a really weird situation, kind of like a snake eating its own tail, I soon discovered, because I found myself using this thing in order to more efficiently find scientific papers that describe the latest techniques that I needed to build the thing. [LAUGHS] 

So I was basically making something that would help me make it. And we've come a long way. 

MARK: Well, it's been a good chat. Thanks for joining, everybody. 

[LAUGHTER] 

No, I mean it's very confusing. But the idea that you're trying to write something to help power itself is kind of a scary concept in a lot of ways. 

JOHN: I think it's actually less scary. So this is not singularity stuff. This is honestly human augmentation stuff. Even in a dream scenario where technologies that augment humans go way beyond what we think is possible currently, at the end of the day, this thing is not aimed towards becoming a terminator robot. 

[OMINOUS MUSIC] 

It's aimed at making humans that are much better at whatever they care about. 

MICHELLE: Right. So give us an example of a way that your system has helped humans. How has it made their jobs easier or made them more productive? 

JOHN: Yeah. So for example, we have a customer who is a health insurance company-- one of the biggest in the world. And they have hundreds of medical policies, and there is a team of humans whose job it is to constantly-- and I mean 'round the clock-- do scientific review to make sure that those policies are up-to-date. And it's a legal requirement, but also like a functional requirement. 

If you're going to have policies that cover the latest techniques and diseases as we learn about them, someone has to actually keep up with the science. And that is an impossible task. Like even for that team, which is a big team who are really good at this, there are on order of at least 10 times too many papers to read-- at least. So what they do is they take shortcuts, like we all do as humans. 

They rely on advice from people. They read review papers, then hopefully that review paper kind of covered enough that I don't have to read all the things that went into it. And also just random sampling. I think that is actually the main technique humans use when there's too much for them to do, is they just kind of random sample and hope that they're more or less covering whatever it is. 

So anyway, we have this system set up to just read all PubMed papers for them constantly, and there are classifiers that are working in the background to help them find the things that are actually relevant to any given policy. They still have to read papers. They still make sense of stuff. But they get a huge compression of that information. So everything is topic-modeled, and binned, and summarized, and the most impactful papers as described in the news or even on Twitter are all being kind of sequenced together and compressed. 

MICHELLE: Nice. So you're saving people time. You're helping them do their jobs. Where did you come up with this idea? Where did the idea for this system come from? 

JOHN: Oh, originally, this was the first thing I built at Primer, and it was just a prototype. We know we're onto something with automating reading and writing if we can do it on a really hard document type-- a scientific paper. So it was really just a prototype. 

MARK: And it kind of reminds me of the college days, when I'm sure a lot of the college people have kind of come up with these shortcuts naturally, because that's how the human brain worked. Especially where-- I don't about y'all in college, but I was maybe not exactly an exemplary student. But the idea was you had a tremendous amount of resources that you needed to kind of consume in order to usually turn out a paper or something like that. 

And so there are all kinds of-- you get the short versions, you get these summaries. It sounds like that is probably something that is pretty instilled into what humans naturally kind of tend to do, especially when you get more and more complex things like scientific papers. 

JOHN: Yeah. And it's not just the reading side. So we also try and write the first draft of things for you. The requirement here is not to make it perfect, ready to publish. The goal is do better than a blank page. Get something together that you can work with quickly. 

MARK: And how is that process, going from blank page to what I assume the first couple renditions were maybe not necessarily the most readable of papers? 

JOHN: Oh, well, the cool thing is just over the past two years of building technology at Primer, I've covered the whole arc of approaches. So in the beginning, you start with rule-based systems-- heuristics. You just write exactly what will be written with substitutions. If you get this as data, then say it this way. Insert thing. It's like Madlibbing, but it can get really, really complicated. 

And in fact, that's why people ultimately turn away from these systems is if you have a problem that is sufficiently complex, no amount of rule writing is going to get you there. It's just too brittle. You can't capture the complexity of the world. Beyond that, what you can do is use extractive techniques. So you have input documents and you have a system that finds the bits of those documents that are most relevant to whatever the need is, and then assembles them together, Frankenstein-style. 

And it mostly works. One thing that's really nice is you're guaranteed that any given sentence that the system says will at least be a reasonable sentence, because it was written by a human. What you're not guaranteed is that the whole thing actually works at the paragraph or document level. And then the dream is abstractive, where you give the system access to the English language, or even just the English alphanumeric character system, and it goes sequence to sequence. 

Basically, things come in. It decides what to say, word by word or character by character, and spits out text. The problem with that is it runs off the rails very quickly and becomes incoherent. No one has solved that problem. In fact, people right here at Google have done some of the most groundbreaking work in this and still haven't cracked it. 

So the big news that came out like a month or two ago was that OpenAI had made a universal language model, which is sort of the new hotness in NLP, that was capable of generating totally coherent text paragraphs at a time. And it is true that often, not always, it can do that. But it's basically just like sleepwalking. You can't tell it what to say. It won't say anything actually useful. But it will spit out locally coherent text. That's where we are with state of the art. 

And there's actually another chapter to this saga that's going to be starting soon, and we're playing a small part in that. We've got a paper coming out in "Archive" tomorrow, which is we are going to be introducing a new way to do text generation that reframes the problem as what's called question answering. So in that case, it's kind of like blurring the line between the extractive and abstractive techniques. 

So in extractive, you're only allowed to grab what humans have said and stick it in front, one after the other. In abstractive, you just read and then you grab whatever you want from a dictionary. We've blurred the line between the two by reframing this as, you're asking a question, and then looking into the text as a dictionary for the answer. So the whole text becomes, essentially, the vocabulary on offer, which can range from a single comma-- you could grab that and say, yep, that's what I want to say-- or you can grab an entire sentence and say, oh that says exactly what I need to say right now. Boom. 

And so you have a more limited expressivity, but we're finding that actually, it's starting to pass the Turing test with text generation. So the problem that we are publishing about tomorrow is on headline generation. You can imagine a headline as the shortest summary possible of a document. A news headline is essentially trying to tell you what this article is about. But if you get anything wrong, it's totally useless. 

You can get away with a bunch of fudges if you have to generate a paragraph long summary. It's still functional. You know what the document's about. You change one word-- x bombs y versus y bombs x-- they have totally different meanings. And of course, if you replace one those words with the word wagon, then it's also just totally meaningless. So by making the system concentrate on the vocabulary of the text, we just happily discovered that it does amazingly well. 

So humans, the vast majority of the time, can't tell which headline is actually machine or human-generated. And in the majority of cases, they judge not knowing which is which. We have them score these headlines. And they, more often than not, say that the machine-generated headline was as good or better than the original. And by the way, this was all built on Google's Bert, so thank you Google Research for that. 

MICHELLE: Nice. Yeah, I hear a lot of positive things about Bert. And it's really fascinating to see how you've made this progression. So I've seen the Quicksilver codebase, and it's just fascinating to see some of those rules that you generated, like there are literal functions that just generate very specific things. But then that's combined with, I can see how you've progressed as you've been there and come up with these new ideas. So I'm really excited to see how the research that's in your paper-- how that's reflected in your codebase. 

JOHN: Yeah. And also, I think everyone's going to start using this technique now. It'll find applications far beyond what we're using it for. 

MICHELLE: By the time this episode is published, we'll have a link for you and everyone can read it. And what's fascinating is that it's not your typical sequence to sequence generator. It's this totally new way of looking at the problem, reframing it, and it's fascinating. 

JOHN: And it's made possible by these big, beautiful, universal language models that Google released that from an AI engineering point of view is just a dream. All the hard work has been done, and you just like pop off the head and put on a different thing. It's like LEGO. It's beautiful. So we literally just took a standard question-answer head and stuck it on top of Bert. And then of course, we had to do the training and all that stuff, but it works. 

MICHELLE: The other thing I think is fascinating about that is having seen your code, I was very surprised to learn that you don't have a classical computer science background. So how did you get into building something like Quicksilver? 

JOHN: Long and windy path. So I started off as a molecular biologist, studying the evolution of bacteria. And fun fact. I designed a pregnancy test for codfish that worked. But then my party was on a soil bacterium and trying to reconstruct essentially Darwinian laws using experimental evolution. And then-- 

MICHELLE: Wait. Can go back to the pregnancy test? What was that useful for? 

JOHN: Oh. Well, the National Marine Fisheries Service needs to survey the cod population. And at the time, what you had to do was pull up net loads of fish, cut them open, and weigh organs and see if the females were gravid-- having lots of eggs. And not only is it really inefficient as a sampling technique, but of course, you can't throw the fish back after you've cut them open. 

And so that, among other reasons, was motivation to get a more sophisticated approach to population surveys. 

MICHELLE: So you saved cod lives-- 

JOHN: [LAUGHS] 

MICHELLE: --by developing this test. 

JOHN: I did. I am responsible for some number of cod lives. 

MICHELLE: Excellent. OK, continue. 

JOHN: And so then I wanted to do something different, instead of diving into the next lab job for my postdoc. And so I sent a letter to the editor of "Science" saying, I hear that you might have some kind of interesting opportunities for someone like me. I'm a molecular biologist and a playwright. 

MICHELLE: Who has saved all these cod lives. 

JOHN: No, I didn't even bring that up. I think it was literally as weird as, I'm a molecular biologist playwright. Because I was-- 

MARK: Well, the playwright stuff, you haven't even talked about it. 

JOHN: Well, so during my PhD, I was spending way too much my time doing extracurriculars, among which was a lot of stagewriting and acting. And what I later found out was that my letter circulated as a joke at "Science." 

MARK: Well, I mean, it's good to be known for something, but-- 

JOHN: Well, that's the beauty of this approach. So that was one of n spores that I sent out on the winds trying to find out what my next life chapter should be. And so when I got a response, I was kind of surprised and had forgotten it, mostly, that I had even sent that one. And I got a response from the news editor of "Science" who, in a former life, was a novelist. He's now at the New York Academy of Sciences. 

And he said, well, you have an interesting background. I think we have a news internship. Would that be a fit? And I was in England and doing my PhD, and not far away at Cambridge, they had just set up the first international office for "Science." And the news editor there was just setting up shop and kind of wanted to have a news intern, but no one knew about it. 

And so I just like snuck in, not a single piece of writing to my name. 

MICHELLE: Wow. What year was that? Because I was Cambridge, as well. 

JOHN: 2002. 

MICHELLE: 2002. I was not at Cambridge yet. So you started out as a news intern in Cambridge in England. 

JOHN: Yeah. 

MARK: With a PhD. 

JOHN: Yes. And within like a couple months of doing that, I found myself in an obscure city in China investigating a body factory where human cadavers are turned into artwork. 

[CREEPY MUSIC] 

MICHELLE: What? 

JOHN: Where my-- yes. Where my mission was to get proof, if it existed, that this body factory was sourcing its human cadavers from the Chinese government. It is the number one executed of prisoners in the world, so it seems like a great source of bodies. And I got confirmation they were getting bodies from the Chinese state. 

MICHELLE: Wow. 

JOHN: So when I had that experience, I basically never looked back. I was like, oh, this is what I'm supposed to be doing. And I then did that for more than a decade. 

MICHELLE: And you investigated many more exciting topics. 

JOHN: Yes. 

MICHELLE: What was your favorite topic that you ever covered? 

JOHN: It depends on the flavor of favor. 

MICHELLE: OK, so-- 

JOHN: It depends on what you mean by favorite. 

MICHELLE: What was the most interesting story you wrote about? 

JOHN: So interesting to the audience was probably some of the weirder stories that I've done, like I organized and ran the first scientific conference within a virtual game world, "World of Warcraft," with the director of human-centered computing at the NSF. 

MARK: The real question is what level was he? 

JOHN: 70, which at the time was-- 

MARK: Of course. That was the max then. I don't know if it still is now. 

JOHN: I don't either. 

MARK: But I mean that actually is now not incredibly uncommon. They've started to have a lot of event-led meet-ups inside of virtual worlds, whether that is popular video games, or whether they've had all this in this "Fortnite" stuff and all those. It's been tremendously interesting to see the intersection between real life and where people want to bring their interests into that, even though they're not related to the game. So maybe you kind of pioneered a little bit of that effort? 

JOHN: Yeah. I think I was part of that first wave. And it does make things possible that are just not practical in the real world. For example, like for entertainment during this big scientific conference, we went out on a raid and absolutely everyone got killed in horrible ways, and then we've got to laugh about it over virtual beers. 

MARK: The most amazing thing I've heard. 

JOHN: Yeah, it was pretty great. 

MARK: That's awesome. 

JOHN: But yeah, I think interesting to me was embedding with NATO forces in Kandahar during the surge in Afghanistan. And I was there to try and convince the military to release a data set. They didn't realize it, but that was my actual secret mission. And I succeeded, and so I engineered the first ever honest public release of civilian casualty data from the United Nations and NATO forces. 

And I say honest because they actually used to do that routinely during the Vietnam War. The US military would actually publish casualty numbers in the newspaper. This was during the period of the war of attrition, the idea being that if we were killing 10 communists for every one US soldier, we were winning. And so it was actually my stats professor-- when he was a grad student, he started analyzing those numbers and proved that they were being cooked because the distribution of the final digit was not following a random distribution at all. Can you guess which numbers were abnormally infrequent? 

MARK: Infrequent? 

MICHELLE: 0. 

JOHN: You got it. If you're going to publish fake numbers, you better make it feel real by saying that 27 communists were killed. 

MARK: So if you have one takeaway from this episode-- 

[LAUGHTER] 

--it's to make sure you correctly falsify numbers by using an actual random distribution. 

JOHN: Exactly. If you're going to cook the books, do it right. 

MICHELLE: So how were you able to convince them to release this honest data? 

JOHN: So first of all, it was just like a lot of face time with officers in Kandahar, and visiting hospitals, and just sort of being there with the teams. 

MICHELLE: And you were there as press, as a journalist? 

JOHN: Mhm. And so I learned a lot about the US military-- well NATO, as well, but I was mostly around a lot of US military officers. But I really did not realize until I spent a lot time with them how much it is like a face-to-face culture. It's such a vast and inefficient bureaucracy that think that everything is just sort of-- we even have a term for it. Oh, that was done with military precision. 

And that does mean something, but actually how things move in such a huge organization is not precise. It's very efficient. And basically, when things get done it's because people are really invested in it and they make it happen. And so I feel like a lot of what I did in Afghanistan was just convincing the right people that this is the kind of thing you should do. This data is not going to do any harm to release. It will do a lot of good. 

And so I basically asked for a little bit, and I got a little bit. And I was like, oh, this is really-- no one's ever seen this, and this really helps. I make the case that you were describing about how, for example, this new approach to roadblocks has started to reduce civilian casualties. If you give me a little bit more data, I could probably show that has made a difference in regions where you stood up that new technique. 

Release a little bit more. It's like, oh, that's really interesting. You know what else? This other thing that you really care about-- if you've got the data to show it. And slowly but surely, I had everything but some patches, and I was like, well, why not just release the whole thing? And it just became a lot easier. But there's no way I could've done that from a distance. Just no way at all. 

MICHELLE: And what did you do with that data set once you released it, once you had it? 

JOHN: Published it in "Science," released it publicly. 

MICHELLE: What did other people do with that data set? Do you know? 

JOHN: A lot of analysis, a lot of advocating. There was a more than two-fold gap in the number of casualties reported by the military compared to the UN observers, and we could see that for the first time. And that had to be accounted for. So it just basically turned on the discourse. Everyone suddenly had something to talk about. I think it just planted a flag in history, that if you are going to be a huge occupying force, for better or worse, you better be transparent. 

But we now have conflicts in Syria where there's no one, essentially, to hold accountable. So it's not a fix for our bigger problems, but it was important at the time 

MICHELLE: OK. So at this point, you're a journalist. You've been traveling around the world, following these really exciting stories. So how do you get from that kind of lifestyle to AI? 

JOHN: Python. 

MICHELLE: Python? 

JOHN: Of course it was Python. 

MICHELLE: Like the snake, because you're a biologist? 

JOHN: No, the-- 

MARK: Wow, good callback. 

JOHN: Pretty good. No, the coding language. I had a project involving the Google Ngrams data set. So the team at Harvard that built the data set, as well as the Ngram Viewer, which is alive and well today and really cool-- it grew out of the Google Books project. Those two people, grad students at Harvard, were just friends of mine. I was basically like moonlighting as a researcher in that group. 

And so when that paper came out on the cover of "Science," along with it was a story that I did about the history of science as seen through the lens of that data set. And it was a really frustrating experience for me because I was beholden to this undergrad at Harvard who had to do the very basic data manipulations for me, because the data sets were far too large to deal with in spreadsheets, and I didn't know how to code yet. 

And I knew exactly what I wanted to do, like I could write it down. Do this. But I couldn't express it in code. And so the day after that got published, I was like, enough is enough. I've got to learn how to solve these problems for myself. And well, I got obsessed. Once you have a hammer, everything looks like a coding problem. 

MICHELLE: I don't know what you're talking about. Using Python to solve every single problem you encounter? No one in this room has ever done that before. 

MARK: That wouldn't be a realistic scenario. 

[LAUGHTER] 

JOHN: So I got obsessed about coding, and then slowly but surely, I went from being a foreign correspondent who runs around to places like China and Afghanistan to find stories, to someone who tries to get data sets and pull out stories worth telling from data. And then it became building things that read data, and then it became wow, maybe I could actually contribute to open source coding and share some of these solutions. 

And then I moved to the Bay Area to do a visiting postdoc thing at Berkeley in their new Data Science Institute, and my friend Sean Gourley, just across the water in San Francisco, had a new startup called Primer. And he tried this trick on me before when he had a startup before this. He's like, just come over. We have really cool resources and data. You should just come play. 

And now that I lived in the same city, I was like, ugh. All right, all right, all right. And after like one day at Primer-- there were only 10 people, so it was a big room with a bunch of empty desks. And I was sitting there working on the problem at the time, which was I wanted to make a quote extractor. So this was 2015, and I wanted to get all the quotes of Donald Trump. 

My journalist colleagues were chasing their own tails trying to like catch him contradicting himself in any of his copious publicly quoted statements. And I was surprised to learn there is no database of quotes from him, nor is there a database of quotes from anyone. And so I started to look into it, got on GitHub, found that someone had made a good first attempt at a quote extractor, and then the project kind of petered out. 

And I actually tracked down that person, and I was like, what happened to this? I'd love to take this further. Why'd you stop? And he was like, 'cause it's hard and I need to get paid or something. 

MARK: What about it makes it hard? 

JOHN: So you'd think that you could just make a regular expression that would find anything between quotation marks. But-- 

MICHELLE: Famous last words. 

JOHN: Well, you're also going to capture anything that's in quotation marks, like scare quotes. Here's the review of the movie "Titanic" where "Titanic" is in quotes. Now you've essentially got a huge source of junk in things that are supposed to be quotes. Then you've got an even harder problem. Let's say you did have clean quotes. You've just got the perfect data set of truly quoted human statements. How do you figure out who said it? So that's the problem of attribution. 

So you could imagine making a regular expression that will capture human names downstream. You know, "said so-and-so," or "so-and-so says," and you might be able to capture those spans, but it's a lot trickier than you think. People basically have a near infinite way of expressing that someone said something and attributing it to them. And that didn't even touch like the he said-she said. 

Now you have a problem that's a really classic hard problem in NLP called entity co-reference resolution where, given a text that mentions multiple people that uses an anaphora, like he and she, him and her, his and hers, you have to figure out who corresponds, which entity actually corresponds to what bit of text. Now you're in uncharted territory. So it's just really hard. 

So day one at Primer, I sat next to this crazy Ukrainian named Leonard that Michelle has met. He's an absolute dear. 

MICHELLE: He is hilarious and wonderful. 

JOHN: Yeah, he's really great. 

MICHELLE: And very skilled at NLP. 

JOHN: Yes. He is, as we call it, a mensch worth mentioning. 

MICHELLE: Yes. Great description. 

JOHN: On day one, I said, oh, what are you working on? And I was digging into this quote stuff. And he's like, oh, yeah, we already solved that. You know, the harder problem is this one. And he tries to show me what he was working on, and by the end of the day, I was like, OK. I'll join. 

MICHELLE: These are my people. 

JOHN: OK, fine. I could probably spend the next six months of my life doing unpaid work to try and fix quote extraction for everyone else, or I could join a startup that's like trying to pull all that together into true automated reading and writing. 

MICHELLE: And how can you say no to Leonard? 

JOHN: He's a dear. 

MICHELLE: He is wonderful. OK. So your common thread up to this point has been interesting problems to solve, data, and finding new ways of doing things that other people haven't seen before, haven't applied to those types of problems. 

JOHN: Yeah. 

MICHELLE: OK. So how does a dance tie in to your interest in AI? 

JOHN: Oh, yeah. That's a weird cul-de-sac in my life. Well-- 

MICHELLE: You were already a playwright. You're already used to being on stage. 

JOHN: So OK, I was living in Vienna, Austria, as a foreign correspondent in 2006 and 2007 when I had this party that I was helping organize. It was a New Year's Eve party that didn't actually happen on New Year's Eve, but whatever. It was round about New Year's Eve. And I wanted it to be a dance party. Like I just always feel disappointed at a nice big party when no dancing occurs. I just feel it's a crime against humanity. And so-- that's too strong. 

MARK: We've heard about some different stories today. I feel like the dance party might not be at the top of the list. 

JOHN: It's hard to get people to dance in general, and it's actually surprisingly hard to get a group of frustrated scientists, grad students to dance. I don't know why that is. It's just like it's a pretty tough crowd to get to loosen up. 

MICHELLE: I know exactly why that is. 

JOHN: Yeah, but is it is it nature or nurture? Are people who don't want to dance becoming grad students, or is there something about the grad life experience that makes you not want to dance? Unsolved problems. 

MARK: I'm sure there's a machine learning algorithm out there that could probably figure this out for us. 

JOHN: For all you listening at home, if you've got an idea about this, post it on Twitter at #ReasonsForDance. 

MARK: The reasons for dance movement. I could get into this. 

JOHN: So I proposed a dance contest to motivate the audience, that we're all scientist grad students. So I was like, you have to dance your PhD. So in a short dance, you must express the basic idea, the essence of your PhD, but with no words, no jargon, no PowerPoint slides. You have to just dance it. 

MICHELLE: Which honestly, to me, sounds harder than doing a PhD. 

JOHN: Well, there are some people that feel the opposite. And this contest is basically-- it's become a huge filter on the world to find that population. We almost do-- we being me and "Science," the journal, who hosts this contest every year for 11 years and running-- we do minimal marketing. Really, it's just like a post on Facebook. And we put out a little story online. People just come out of the woodwork from all over the world, from countries all over the world, and take part. 

But the reason it turned into a contest at all was because after that party so long ago in Vienna, we shot some good video of the actual contest, the dances, and put it online. And I wrote a story for "Science" about it just for fun. And then the emails started coming in from scientists all over the world saying, I'm ready. 

MARK: People were excited. 

JOHN: When does next year's contest kick off? 

MICHELLE: You filled a gap. There was a need. 

JOHN: There was, and I-- 

MARK: Nobody knew it existed. 

JOHN: -- had no plans for this, but then I was like, I guess we do have to do it. And because people were asking from all over the world-- I had no money for this. Can't do a live event. So I was like, well, we could do it as an online video contest. And YouTube, 'round about 2007, 2008 was working pretty well. So I was like, OK. Put your dances on YouTube, send me the link, and I'll assemble a judge of experts, like I did the first time around, from the worlds of science and dance and they'll determine the winners. 

And the prize when we started was a one-year subscription to "Science." 

MICHELLE: That's perfect. 

JOHN: And it hasn't gotten much grander than that. It's like, you get $1,000 is as fancy as we've gotten. 

MARK: Well, I think it's because people aren't doing it for the prize. 

JOHN: No. 

MARK: They're doing it for the passion of it. 

JOHN: Yeah. Honestly-- 

MICHELLE: They just need an excuse. 

MARK: Which is exciting. 

JOHN: That is exactly it. They would have been doing this, anyway. They probably already were doing it in the shower, and-- 

MICHELLE: They needed an audience. 

JOHN: They just needed the audience. That's what this provides. 

MICHELLE: OK. So all of a sudden, you have all these people around the world describing scientific topics through dance. 

JOHN: Yeah. Oh by the way-- 

MICHELLE: Expressing themselves. 

JOHN: --this past year's winner was a PhD student in Canada who studies quantum properties of materials. And he not only organized this awesome dance video, but he wrote and performed a song for that video. It's so over the top. 

MARK: I mean, if you're going to go any portion of the way, you may as well go all the way and get your own original composition, as well. 

JOHN: Yeah. It's pretty amazing. 

MICHELLE: I mean, he was already doing it in the shower. 

MARK: Exactly. 

MICHELLE: So you may as well go for it. 

JOHN: It's pretty amazing. 

MICHELLE: OK. So people are describing scientific topics through dance. Of course, that's a natural leap through like applying AI to that. 

MARK: Yeah. Is it? Is it, though? Could you maybe clarify that point a little bit? 

JOHN: How do you mean, exactly? 

MICHELLE: So I'm trying to make the connection between the workshop I went to-- there was this AI and dance workshop. There's this group here in San Francisco that meets weekly and it's amazing. 

JOHN: Yeah. 

MICHELLE: And I was baffled at how AI and dance came together. And so I'm curious to hear what the bridge was for you. How did you get from dancer-PhD to AI and dance. 

JOHN: So yeah, that thing that happens every Wednesday is called Kinetech Arts. And by the way, it's a public event. So all you Bay Area people who are listening, you are very welcome to join. You can find it on meetup.com. And it's essentially like a bunch of technologists who get together with a bunch of mostly dancers, but art people, and we do experiments together. 

So we'll wire up dancers with motion capture suits and then run an experiment where we generate music based on their movement. For example, one time we brought in the research group from Berkeley who had that paper out last year in which you learn how to dance on a human skeleton model by having the system just watch video of someone dancing, and then apply that movement to a model of someone else's body. 

So if you, Michelle, were to take part, what would happen is you would just be walking around manipulating your limbs for a while in a pretty random way so that it gets all the angles of you and makes a model of your skeleton. And then it can apply any dance it's ever learned to you and generate a video of you doing that dance. So you can make videos of people dancing ballet at the level of the Bolshoi, break dancing. 

MARK: The important part is that's not deeply terrifying. 

[LAUGHTER] 

Because now we're kind of getting into that, what is it from the past couple of months slash year? 

JOHN: Deepfakes. 

MARK: It's this whole deepfake concept. 

JOHN: Yeah. 

MARK: This idea that you can now basically say, oh, video footage is no longer reliable because it's too easy to simulate. The master level that we have now, you've got all these intense AI and ML properties that are being put together to say anyone can be caught doing anything or saying anything because we have all the technology required to simulate it. 

JOHN: Yep. And while applying dance movement to someone's body, it's hard to imagine how that could go terribly wrong-- 

MARK: Oh, I have many, many instant ideas of how it could go terribly. 

JOHN: But it's only a few steps away from a lot of terrible things. 

MARK: Yeah. 

JOHN: Yeah. I wish I could say that we have enough time to carefully think through and make policies around this, but it's already here, and we don't have those policies. 

MARK: And even then, without those policies, people are going to play around with it. This whole community is driven on open source in general. People are encouraged to experiment and play around with things. 

JOHN: Absolutely. 

MARK: You naturally get people who are like, oh, I wonder if I can do this, and then they do. And then they're like, hey, I'm going to go talk to my friends about this. And then you kind of just build this entire boulder that's rolling down a hill of like, wow, these are things that are completely unchecked. And there's a lot of scary practice. I know we're being really vague about what those details are, but I think people can use their imaginations. There's a lot of really scary stuff out there. I don't even know how you would put organization around it. 

JOHN: Yeah, that's a whole policy discussion. But essentially, the best idea I've heard is that you need to have laws on the books that make real consequences for hurting people by reputation, or however it has that negative impact. You have to have laws on the books that have consequences. 

MICHELLE: And what I really liked about that group is they weren't just getting together in a room experimenting. We started out the workshop with a discussion, and they asked some really intriguing questions. It was people who maybe don't understand the technology very well trying to understand it more, and asking important questions that people who use technology haven't thought of. 

It was that coming together of those two domains that I found just fascinating, that there was so much crossover and interests and what can we achieve. That's where innovation has happened traditionally is when you got these two intersecting fields that come together and like, oh, we haven't looked at this problem from that perspective before. 

JOHN: Yep. And what I love about the event, especially, is that it's not just one-sided. It's not just like naive people from outside of science ask hard questions that inspire scientists to better explain and think about their own stuff. It also goes the other way. So we had one night not too long ago where we were playing with a new piece of technology that senses your heartbeat and transmits it via router to whatever you want it to go to. 

And so we sent it to essentially the sound system of the room. Very straightforward. So you basically strapped this thing onto someone, and suddenly the entire room is engulfed in their heartbeat. And so as they become calm or excited, essentially everyone experienced it. So it's kind of like, very simple concept, well executed. And then we just like switched over to dance mode, where we have some of the most amazing people from the dance community in San Francisco just there helping to run this thing. 

And they know how to take a room of people-- even non-movers, people who aren't used to being movers-- and make it safe for them to start moving. Suddenly the entire room was basically this spontaneous dance event, and it was really beautiful. And people just came out to me afterwards, like who have never experienced that, were like, that's amazing. Is this every Wednesday? 

And yeah, it's that easy. You just get people in the room with good intentions, and you could do some really cool stuff. 

MICHELLE: Yeah, that's fascinating. I love that there are so many aspects to your journey that you're not just someone who's working on AI now, but you're a person with these very rich experiences, this very rich background. Is there anything else you'd like to share about your background? What was your-- 

MARK: You've got the really big history of all the cool things. And I know that we've probably gone a little long. It would definitely be useful to ask, is there anywhere you're going here soon? Or is there anywhere you're going to be? Are there any cool dance competitions coming up that people should find you at? 

JOHN: Well, let's see. The big thing in my life right now is that the "Archive" paper that we've been working on for a while is coming out tomorrow. And let's see. Beyond that-- 

MICHELLE: I did want to ask you what your favorite job was. 

JOHN: Oh. 

MARK: Was it the saving the fish, was it working with the military and getting the numbers, was it being a-- there are a lot of jobs you've had, clearly. 

MICHELLE: And I don't think that's the full list. What haven't you told us about? 

MARK: No, I'm sure it's the truncated. 

JOHN: I think there's a special place in my heart still for the year after graduating from undergrad, before grad school, where I was a nude model for art classes at Hammersmith and Mount Holyoke, simply because it was pretty well-paying at the time for me, and they didn't have enough males. And I did it just for like life experience, but actually, now that I've done yoga, I actually know what I was tapping into. 

But it was my first experience with meditation and in a very unusual setting. And I got paid to meditate, basically. 

MICHELLE: So you were meditating while people painted you? 

JOHN: The best time in that period was working for one sculptor. So I had to hold the same pose for week, after week, after week. And so it just whittles away your awareness of your body. At the same time, it hyperconcentrates your awareness of the body. It's very hard to explain. But I really have a very sentimental recollection of that job. 

MICHELLE: Of all the lessons I expected to hear from someone who has experience as a nude model, that was probably the last one I expected to hear. And I think it's amazing. 

JOHN: What did you expect to hear? 

MARK: I'll cut it off right there because I'm not sure where that's going to go there. But in talking to some people, some people have-- they've kind of said, look, in some ways, it's boring. They're kind of sitting around. They're like, you got to do something to occupy your mind because you have to hold still. So actually, I think that kind of concept of yeah, you end up meditating is a really poignant one, but also probably a really real one for a lot of those people out there who are just like, I can't move for 45 minutes. What am I going to do? 

JOHN: Yeah. And I discovered it accidentally. 

MARK: That's the most beautiful part. 

MICHELLE: And it's an important life skill that serves you well today, I'm sure. 

JOHN: I wish I was better at it, but yeah. 

MARK: With the modeling-- you know what? Never mind. 

MICHELLE: There's still time. 

[LAUGHTER] 

MARK: Yeah, I think we're just about out of time. 

MICHELLE: All right. Thank you, John. It was awesome having you here. I appreciate you taking us through that journey of your history- 

JOHN: My pleasure. 

MICHELLE: --and sharing your experience. 

JOHN: And for all you listening, nice to meet you. 

MARK: Thank you so much, John. 

MICHELLE: And now, what we've all been waiting for, the question of the week. 

[MUSIC PLAYING] 

MARK: Well, so we had a really, really awesome conversation with John, so I get a feeling it might be tied to that. 

MICHELLE: So the big question that everyone's wanting to know, how can we be like John? 

MARK: Well, that's a very tall order. For everyone who just listened, it was a great conversation. We learned a lot about how John took a really unique path, I think, through life and did a lot of very, very cool things. But on top of that, is also now currently building out really complex models. And I think we've had a recurring theme in the past couple of episodes, whenever we do talk about machine learning, and saying like, hey, it's a really high barrier. 

So how do we be more like John? But really, in this case, is how do we kind of get started with machine learning, or build out some of the stuff he's learning without the many, many years of experience and life challenges that he worked through? Well, in this case, we've actually just pushed out a great blog post, which is also a Code Lab that really looks at a walkthrough of how to build an AutoML natural language classifier. 

And the beautiful part about AutoML, if you're not familiar with it, is it lets you build machine learning models without really writing any code. So you kind of send the data, you classify what that data looks like, and then it trains a machine learning model for you. That, in itself, is magic. But this walks through how do you actually put the magic in your hands? How do you build that out? How do you go from here's a set of data, to here's a working machine learning prediction model in actually a pretty short period of time. 

I walked through it, and I was shocked at how quick you could just build this entire thing out. I think it's always surprising to see all of the machine learning in action. And I don't know a lot about machine learning, so it's fascinating to see how easy it is to dive in there. 

MICHELLE: Yeah. AutoML, in particular, it's really interesting the way they've built the service. So it uses something called transfer learning. So the service trains a bunch of models behind the scenes, and then you come in with your data, and it sort of adds your specific use case on top of the models that have already been built, and it gives you a much more personalized model. 

But it's still a very accurate because of how they built it. And it's a great way to get started if you don't really know much about deep learning, because it's a UI, and you don't need a whole lot of data, and you can leverage a lot of the hard work by people who know a lot more about deep learning than I do. 

MARK: Which is absolutely the bucket that I fall in. So I am more than happy to take advantage of the cool resources that have been built, and this guide that people can, again, just go right now and step through. So we'll make sure to have a link to that in the show notes. 

MICHELLE: Excellent. 

MARK: OK, great. So before we wrap up, where are we all going to be? Anything cool coming up? 

MICHELLE: Yeah, so I'm headed out in a few days. I'll be heading to Barcelona for KubeCon EU. 

MARK: Ooh, fancy. 

MICHELLE: I'll be there for a few weeks. So I'm giving a workshop on Kubeflow. If you want an introduction to Kubeflow pipelines, my workshop is the place to be. There will be a video of it if you're not physically in Barcelona for the event. It's a publicly-available Code Lab, and there will be videos you can follow along, so if you're not there, you won't have to miss out. We'll add it to a future show notes. 

MARK: I think the idea-- this is a big convention for Kubernetes in general, right? 

MICHELLE: It is. 

MARK: And I think that a lot of people who can't make it out there, similar to I/O and Next, the best efforts go into try and making this content consumable. But sometimes, it can be hard to replicate that conference experience. 

MICHELLE: Where are you headed this week? 

MARK: Well, as per usual, I'm going to bunker down and stay here in the Bay Area. I think we spent a lot of energy going around Next and I/O, but I don't tend to travel that often, which is also a big part of my mental health awareness, because I'm sure that that might be challenging if I traveled as much as everyone else did. Speaking of which, Mark is over in Japan, right? 

MICHELLE: He is. He's in Japan this week. 

MARK: And Gabby is in France. So we have a lot of traveling going on. For people who are kind of based here in the States, these are some far distances to go. So I would definitely be exhausted. I know John's out on the East Coast here in New York, and then Brian's traveling over to, I think, Colorado soon. 

MICHELLE: I believe so. 

MARK: So there's a lot of events going on. I think some people are still recovering from I/O and taking that time back and saying, OK, well, let's put a pause in some of the conferencing and see where maybe hopefully some personal travel, or maybe some quieter times, lay. 

MICHELLE: I'm definitely looking forward to being in Europe this week. I lived there a few years ago. I lived in Germany. And I haven't been back in a decade. And so I'm really looking forward to connecting with some old friends, and having a little bit of personal travel in between a few work-related things. 

MARK: I think that's the right way to do it. 

MICHELLE: Yeah. Oh, one other really exciting part of my Europe trip-- guess where I get to go? 

MARK: More than Barcelona and Germany? I have no idea. 

MICHELLE: So this is something I've been wanting to do for almost my entire life, but I finally, finally, finally get to go take a tour of CERN. 

MARK: Oh, that's right. 

MICHELLE: So I get to see everything that Michio Kaku was talking about in his session. I get to see much of it in person. Atom smashers, particle accelerators, all kinds of things. I'm so excited-- in person for the first time. 

MARK: I mean, this is a dream come true for you, it sounds like, and probably for a lot of other people. 

MICHELLE: It is fantastic, and I have a few friends coming along with me, so we all get to experience it together. It'll be magical. 

MARK: Well, then we will definitely have you come back on afterwards and talk a little bit about how it was, and all the cool, super secret science stuff that none of us have access to. 

MICHELLE: I'll tell you all about it. Very excited. 

MARK: All right. Well, perfect. 

[MUSIC PLAYING] 

Thanks, everyone, for checking in, and we'll see you all next week. 

MICHELLE: All right. See you then. 