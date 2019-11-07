+++
audioDuration = "00:38:04"
audioFile = "Google.Cloud.Platform.Podcast.Episode.176.mp3"
audioSize = 55215184
categories = ["AI", "Human-Centered AI", "Machine Learning"]
date = "2019-05-08"
description = "Mark Mirchandani and Michelle Casbon take over the show this week to discuss AI and the advances Google is making with it."
draft = false
episodeNumber = 176
hosts = ["Mark Mirchandani", "Michelle Casbon", "Mark Mandel"]
title = "Human-Centered AI with Di Dang"
image="/post/episode-176-human-centered-ai/images/hero/hero-EP-176.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/bmaqji/episode_176_humancentered_ai_with_di_dang/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Mark Mirchandani](https://twitter.com/markmirch) and [Michelle Casbon](https://twitter.com/texasmichelle) take over the show this week to discuss AI and the PAIR Guidebook to Human-Centered AI. [Mark Mandel](https://twitter.com/Neurotic) pops in on the interview, and [Di Dang](https://twitter.com/dqpdang), Design Advocate at Google, talks about her role in designing and building the guidebook with the intent of helping others create quality AI projects.

Di describes human-centered AI as a practice of not only being conscious of the project being built, but also considering how this AI project will impact us as humans at the end of the day. We influence machine learning so much, both intentionally and unintentionally, and it's our job to look at the project and results as a whole.

In the guidebook, topics like data bias in machine learning, what design patterns work, how to establish trust with the user, and more are addressed. Di explains that the guidebook is a work in progress that will develop with input from users and advances in technology. 
 
<!--more-->

##### Di Dang


[Di Dang](https://twitter.com/dqpdang) recently joined Google’s Design Relations team as a Design Advocate supporting emerging technologies such as augmented reality and machine learning. Previously, she worked as a Senior UX Designer and led the Emerging Tech group at Seattle-based digital agency POP, advising clients on how VR/AR, web/mobile, conversational UI, and machine learning could benefit their end users. With a degree in Philosophy and Religion, she considers herself an optimistic realist who is passionate about ethical design. You can find Di onstage doing improv or on Twitter [@dqpdang](https://twitter.com/dqpdang). 

##### Cool things of the week

* Bringing the best of open source to Google Cloud customers [blog](https://cloud.google.com/blog/products/open-source/bringing-the-best-of-open-source-to-google-cloud-customers)
* James Ward's Cloud Run button [site](https://github.com/jamesward/cloud-run-button)
* Michelle's favorite codelabs from I/O
     * TPU-speed data pipelines [site](https://codelabs.developers.google.com/codelabs/keras-flowers-data/#0)
     * Your first Keras model [site](https://codelabs.developers.google.com/codelabs/keras-flowers-transfer-learning/#0)
     * Convolutional neural networks [site](https://codelabs.developers.google.com/codelabs/keras-flowers-convnets/#0)
     * Modern convnets, squeezenet, with Keras with TPUs [site](https://codelabs.developers.google.com/codelabs/keras-flowers-squeezenet/#0)

##### Interview

* People + AI Guidebook [site](https://pair.withgoogle.com)
* PAIR [site](https://ai.google/research/teams/brain/pair)
* GCP Podcast Episode 114: Machine Learning Bias and Fairness with Timnit Gebru and Margaret Mitchell [podcast](https://www.gcppodcast.com/post/episode-114-machine-learning-bias-and-fairness-with-timnit-gebru-and-margaret-mitchell/)
* Machine Learning Crash Course [site](https://developers.google.com/machine-learning/crash-course/)
* Google Clips [site](https://store.google.com/us/product/google_clips?hl=en-US)
* Google Brain Team [site](https://ai.google/research/teams/brain/)

##### Question of the week

* [How do I get started with practical AI?](https://developers.google.com/actions/codelabs/)
* [Build an Appointment Scheduler Chatbot with Dialogflow](https://codelabs.developers.google.com/codelabs/chatbots-dialogflow-appointment-scheduler/index.html)

##### Where can you find us next?

Michelle will be at [Google I/O](https://events.google.com/io/) and [Kubecon Europe](https://kccnceu19.sched.com/event/MPgr).

- No I/O event in your area? You can [host one!](https://docs.google.com/presentation/d/e/2PACX-1vReWDtj-yASOho5q7XC6lYY8af9wRa13-81mPaoSRodiRoCw4MKJnQExQ8GxyNyCQiPZpBprznPG4ex/pub?slide=id.g62811f3b0_18)

{{< transcript "[MUSIC PLAYING] MICHELLE: Hi, and welcome to episode number 176 of the Weekly Google Cloud Podcast. I'm your host, Michelle Casbon, and I'm here with my colleague, Mark Mirchandani. Hello, Mark." >}} 

MARK MIRCHANDANI: Hello, Michelle. You know, all this time I've been saying Casbin as opposed to Casbon. 

MICHELLE: There are many pronunciations of the name, and I am not very particular about it. 

MARK MIRCHANDANI: OK, that's good. I'll have to come up with some other ones and then see which ones I can test. And then, eventually, you'll be like, no, it needs to be Casbon. 

MICHELLE: Yeah. Eventually, you'll hit a spot where I'll be like, OK, no, it's definitely not that, but otherwise you can be flexible. 

MARK MIRCHANDANI: Cashbun. 

[CASH REGISTER SOUND] 

No, too much. 

MICHELLE: That's probably not it. 

[BUZZING] 

MARK MIRCHANDANI: All right. I've nailed this entire thing in just 20 seconds. Good to know. Good to know. 

MICHELLE: All right. So who do you have on the show today? 

MARK MIRCHANDANI: So today we're talking with Di Dang. She is a design advocate, which is also a very fancy title. And she works with inside of Google to publish out a guidebook on some of the interactions driving the human-centered AI movement right now, talking about, like, what is the responsible way to build an AI system? What are the things that you should take into consideration? We had a really, really great chat about what went into that and how are people using this guidebook. But before we get into that, we should probably talk about the cool thing of the week. 

[MUSIC PLAYING] 

MICHELLE: Oh. Like usual, we have a few cool things of the week. 

MARK MIRCHANDANI: Many, many cool things. 

MICHELLE: OK, so the theme for our first cool thing is open source. This is something that GCP just strongly believes in. You can see that with TensorFlow, with Go, Kubernetes, and even Kubeflow, the project that I've been involved in. And we recently announced some big partnerships with leading open source providers for data management and analytics. These are people like Confluent, DataStax, Elastic, InfluxData, MongoDB, Neo4j, and Redis Labs. Now, that's a really long list of really big players in the open source space. 

And what that means is that you can look forward to seeing managed services from these providers, and that's really great because it means that it's tightly integrated into GCP. So instead of having to roll your own open source all the time like I have done with much pain over the years, you can expect to see some easier solutions with a little bit less friction and less of having to manage them yourself. 

MARK MIRCHANDANI: Yeah. I think we're seeing a lot of people who are super interested in, like, we don't want to solve a lot of these problems that have already been solved. Let's lean on the open source community who have built out these tools, then validated them. And they can help improve them. And then for when we're building our projects, let us focus on the actual problems that we're trying to solve, and whether it's a database or whether it's a framework or whether it's something like Kubeflow, let me get to what I want to do and use those cool open source communities to drive the hard work behind the tooling. 

MICHELLE: Yeah. Let's not reinvent the wheel. Before you build anything, just check to see if there's a project that already does it, and leverage all their hard work. 

MARK MIRCHANDANI: And speaking of making open source a lot easier, we just saw James Ward, a developer advocate at Google here, push out a really cool button. So Cloud Run is something that people have been talking about just recently because it was announced at Next, and it really makes it super, super easy to take a container, which I think most people are using by now, or at least want to use by now, and throw it up in Cloud Run, and bam, it works. And that's magical in and of itself. 

But now, James is like, by the way, put this little button in your GitHub read me, and then now people can just click on that and, bam, your code is now running in Google Cloud Run for anybody who wants to try it out. So now, when people go to a GitHub repo and they're like, oh, I wonder what this looks like, but instead of having to download it, run it, build it, set it up, and manually deploy it all yourself, you can just click a little button-- click-- and then, bam, you've got it running in your project. So I think that's super cool. 

MICHELLE: It is amazing, super cool, and also a little bit scary. We're not necessarily condoning clicking on random Run Me buttons in GitHub repos. 

MARK MIRCHANDANI: That is a great point. There's something really cool about being able to take some of these open source projects and just have them up and running so you can test them, but you should be aware of what you're running. You should take a look into the code, at least understanding, hey, this code could be doing things, like most code does. 

MICHELLE: But that's the beauty of open source, is that it's open and you can check it, perhaps before you click on the button, maybe afterwards. But that's also the beauty of the cloud, that if you run something, at least it's not on your local machine. 

MARK MIRCHANDANI: Right. I just learned about this ephemeral Cloud Shell that spins up so everybody who has a Google Cloud account and gets a little Cloud Shell, which is a nice little environment where you can kind of play with some things, but also where you can use the Google Cloud tools. Well, when you click this button, it also spins up a ephemeral version of that. So it's like an isolated sandbox, again protecting you, limiting out what access that code might have. 

And you can choose-- I believe when it pops up you get that little pop-up that says, hey, are you trusting this application or not? So it's no excuse not to do your research. I think that's a very fair point. But at the same time, it's a super cool way to take out any open source libraries or quick GitHub repos that you were like, oh, I want to try this out, and make that process so much easier. 

MICHELLE: Yeah. It is a great way to take things out for a test drive. So the last cool thing that I wanted to talk about is some of my favorite code labs from Io this week. They involved hardware accelerators. So they'll take you through how to use TPUs, which are Tensor Processing Units. They're Google's own version of hardware accelerators. 

They were designed and built specifically to run most efficiently in Google data centers. There is a series of four labs that were created by our colleague Martin Gorner. You can run them independently or in sequence. They're a way to run through some deep learning exercises. And you don't have to know anything about deep learning. Martin is very well known for doing Deep Learning Without a PhD series, and these labs are a great introduction into that. 

But they run on Colab Notebooks, which give you all of the hardware that you need to give you access to everything. And he gives you the code. So he explains everything, he explains deep learning concepts, and he teaches you how to access TPUs. And you can watch them running, and you can see what they're good for. Some really great examples. So learning both about deep learning and about TPUs simultaneously, which is generally what people use TPUs for. 

MARK MIRCHANDANI: Yeah, I think it's very cool. Again, anything that lowers that barrier to entry for machine learning, which is right now pretty high. There's a lot of very complex things. And I think we're seeing a lot of people moving towards, well, how do I make the most of this without, like you said, having a PhD, and getting access to cool things like TPUs, which just make it all that much faster. 

MICHELLE: That's right. So that's it for our cool things of the week. Let's go into our main contact and talk to Di. 

MARK MIRCHANDANI: Let's do it. 

[MUSIC PLAYING] 

MARK MANDEL: So today, I think we have a particularly interesting interview. Di Dang, design advocate here at Google, here to join us to talk about the People + AI Guidebook. OK, that was more words than I expected. Before we do that, though, Di, do you want to tell us a little about yourself? What do you do here at Google? 

DI: Yeah, sure. So as you mentioned, my title is design advocate. And I've been a Google now for a little under a year. And what my role means, what my north star is, is that it means that I go out in the community, I work with third-party partners on different emerging technologies such as VR/AR, machine learning AI, conversation voice UI. What are technologies they're considering to solve their unique user problem? And I help bridge their gaps or pain points when it comes to working in these new technologies, because best practices or design patterns may be less established than working with, say, pure web and mobile by comparison. 

MARK MIRCHANDANI: These aren't just policies that apply to working with Google. There are policies that apply to working with anything, like you just said-- web, mobile, AI, VR, all those things. Those are guidelines that aren't set by Google. They're set by the world. 

DI: Yeah. They're set by the world. I'd say they're things that we're figuring out and learning as we go through it together. So part of my work when it comes to supporting the design advocacy for these emerging technologies means working closely with different product area teams. One key one for me is working closely with PAIR, which stands for People + AI Research. 

It's a team that's been around for a couple of years now composed of cross-disciplinary roles all across Google, actually-- research scientists, engineers, designers, UXers, and so forth-- who are all dedicated to creating tools and content around how can we create human-centered AI, or how can we create AI partnerships that are beneficial, ethical, fair, and inclusive for us as people. 

MARK MANDEL: So you said four words there that I think probably hold a lot of interesting stuff in there-- human-centered AI. 

DI: Yes. 

MARK MANDEL: What is that? 

[LAUGHTER] 

DI: That is a great question. Let's break that down a little bit. So the first question, AI. So AI as a superset of technologies that include machine learning. When I say human-centered AI, it means how are we being cognizant of our role as product creators when it comes to creating AI systems or AI-driven products, or even working with machine learning? 

Because the truth of it is that there's a lot that we as designers and developers intentionally and unintentionally influence through all the phases of machine learning, whether that's in the kind of training data that we collect and label to how we actually build and train and evaluate our machine learning models to, ultimately, the kind of output and predictions that come from these models. We as people are affected by those predictions, by those results. So human-centered AI means how can we make sure that we're not just focused on the technology of AI, but we're asking questions around how it impacts us as people at the end of the day? 

MARK MIRCHANDANI: Yeah. I think we've seen a little bit coming up recently, a greater understanding of data bias. And this is a big part of-- because obviously, when you train any form of machine learning or AI or whatever it is, it's based on the data you give it. And I think a lot of people now are starting to understand a little bit more about what data bias is and how easy it is to skew what an AI system will generate. 

DI: Yeah. Oh, yeah. Absolutely. So one of the things that we talk about in the guidebook is looking at greater UI. So raters refer to teams with individuals who are often doing the labeling of the training data sets themselves. And when we say, like, give a simple task to a rater to, say, label a set of images as "is this a running shoe or not a running shoe?" what are their connotations around what that means? 

So for instance, if we showed them a data set that includes sneakers, high heels, stilettos, fancier sneakers, et cetera, what are they labeling accordingly and what are they not? That's a lower stakes example. If I were to give a higher stake example of, say, an image data set of "label who identifies as a woman here," or, "what is female," that's where it gets really complicated around data bias and the own cultural implications that these raters may be bringing to that task. 

Because if you say, for instance, you have in that photo set an image of, like, RuPaul, who's a drag queen, or Jonathan Van Ness from "Queer Eye," individuals who identify as male but may dress in more androgynous ways or more non-binary ways, if you give that set of images to a rater who's based in another country, another culture, what kind of connotations are they going to be bringing to that? And then that can skew the kind of results that you have in the end if you had, say, an image classifier model around male and female for whatever reason. 

MARK MANDEL: And just a quick shout-out as well. Episode 114 of the podcast, we did a machine learning bias and fairness episode where we dig into this a whole lot more too. Not to say that we shouldn't talk about it now, of course. 

MARK MIRCHANDANI: Although one point for talking about it now is you mentioned a couple of times a guidebook. So what-- 

DI: Yes. Maybe we should have started that, seeing as how that's one of the main reasons. 

MARK MIRCHANDANI: I think it's interesting to talk about the deep stuff, but what is the guidebook? What does it do? 

DI: Yeah. Yeah, yeah. Right. So backing up a little bit, the People + AI Guidebook, we'll be releasing that at I/O. I'm guessing this will be live by then. But we'll be launching it at I/O. And this is an effort that teams across Google have been developing over the past year, chiefly spearheaded by PAIR-- so again, the People + AI Research Team. 

And essentially, it came out of this question, as different product teams were wrestling with what are the best practices for designing with AI? What design patterns work, don't work? How do you establish trust with the user? How do you convey the importance of a confidence interval? And how the user should act on that or not act on that? 

All these different questions that arose around creating AI products at Google took a step back and thought, well, why not synthesize that in a set of guidance or best practices that we can share with everyone? And that, again, going back to our earlier point around these nascent technologies where the patterns or the best practices are still in development, how can we share this resource out there, get feedback from everyone in the world who's wrestling with these same problems, and eventually work towards a healthier, more beneficial, inclusive set of design principles? 

MARK MANDEL: So you solved it. You solved it. It's fine now. 

[LAUGHTER] 

MARK MIRCHANDANI: Once it's published. 

MARK MANDEL: So it's done? Nobody needs to do any more work? 

DI: I wish. It's a continual work in progress. And that's one of the reasons why I-- that's why I came here, because it's a project that I believe very strongly in. But it's not like we just release it and that's the end of that. One of the things that I'm working on as a design advocate is, how can we keep an open channel of communication between the PAIR team that's developing this content and the rest of the world? And what best practices or patterns may need to be localized for certain cultures? Are there specific needs that we're seeing in different communities? Or are folks more interested in, say, health care, fintech, whatever guidance? 

So that's why I'm-- that's a big reason why I'm here, is not just to share the news about this great resource that developers and product creators can utilize when it comes to creating AI-driven products, but also to hear from everyone out there. What's useful about the guide book? What's not? What's missing? What's an accurate? And how can we make it better to better serve you? 

MARK MANDEL: So who's your main target audience for this? If you had to pick the ideal person-- you're like, I wish they would read this-- who are those people? 

DI: I'd say the target audience is anyone who's considering working with AI-driven products. To put a finer point on that, the guidebook is written so that it's very accessible, and it has a low barrier to entry. It's written primarily for UXers and product managers, because the truth of it is there aren't a lot of resources out there around AI-driven product decisions for UXs and PMs. You have a lot of great stuff like TensorFlow. You have MLCC from Google. But those are more engine-developer-focused. 

And so we wanted to make sure that we were offering a variety of resources that everyone could use, that your cross-functional product team could use to help answer these questions together. Another way of thinking about the guidebook is that it's not a crash course in machine learning. It's not intended to be technical by any means. But it's intended to help you make decisions around AI-driven products. 

MARK MANDEL: So correct me if I'm wrong. It sounds almost like before you had this, unless you were technical, it was probably very hard to understand what's happening. And that's a risk. If you've got people who are building products who don't really understand how the technology works because the resources don't exist, there's potential for things to go wrong. 

DI: Yeah. Oh yeah, absolutely. And a lot of it's also because the field of machine learning has-- it's been around for decades now. And in the last decade or so, it's been continually advanced by developers, by folks who are more engineering focused, data scientists, et cetera. And it's only recently that product managers, UXers, designers are realizing that we need to be a part of these conversations too so that we can make decisions about the product for our users as a team. 

After all, you have a cross-functional team that's composed of PM engine designer for any other application or product. Why not also for machine learning or AI-driven products? Because that's not something that we see as much right now. 

MARK MIRCHANDANI: So it sounds like it'll be changing over time, especially as you work with these different people. Ideally, anyone who's hopefully using it is also able to help contribute towards it and say, like, these are the thoughts that I have. But for people who don't know it, this is a great way to get started, or at least start to get some considerations. What exactly is the guidebook? So is it a big O'Reilly book? Are we talking about a couple of-- is it a white paper? 

MARK MANDEL: Is it a story book? Does it have lots of pictures? 

MARK MIRCHANDANI: That would be great. 

DI: I wish. Oh, man. Maybe that could be the next iteration. 

MARK MIRCHANDANI: Guidebook V2, pop-up version. 

DI: If we keep getting enough feedback on our feedback form on the site, then surely I can advocate for it to become a pop-up story book. 

MARK MANDEL: You heard it here first. Make sure you put in there "pop-up story book for the next version." 

DI: And what I see that feedback come, it's like, oh, that's how I know you listen to the GCP podcast. Thank you for calling. 

So the form factor, it's a microsite, and it's composed of six chapters. Let me see if I can rattle this off from memory right now. The first chapter is User Needs and Defining Success. And so that chapter helps you answer earlier questions around should we AI this? Should we ML this? What are good uses cases for AI? What are not? When will the user or even your product team benefit from using AI? When would you not? Et cetera. 

The next is data collection and evaluation. So again, Mark, to your earlier point about how can we be cognizant of implicit and explicit biases that we may be bringing into the collection, labeling, evaluation of our data, the next chapter is Mental Models. And that looks at what is the mental model that your user is bringing to this application, to this experience? 

The general public, there's a lot of wildly varying opinions around what is AI, and confusion with that and robots or whatever other things. So how can you better understand the assumptions, expectations, that your user is bringing to your product, and then adjust the design or the experience of your product accordingly to match those expectations? 

The first chapter looks at explainability and trust. Given that you may have varying degrees of transparency into the predictions that your AI system is making, how can you then convey that level of transparency to the user as a result-- what is useful to them, what is not. Also takes a look at, as we mentioned earlier confidence levels, in terms of sometimes you need to be more transparent of the user in terms of the degree of confidence they should be investing in this application. 

The next chapter looks at feedback and controls. So this is a key aspect to any kind of application creation in terms of how can the user tweak their settings? How can they provide feedback into the system to then train the model to better suit their needs and be better personalized to their desires? 

And the last chapter is Errors and Graceful Failure, acknowledging the simple truth that your model will fail. There will be some error at some point. So how do you move the user forward in spite of that? 

MARK MANDEL: Nice. So how do people use this guidebook? Obviously, there's a pop-up story that they have to read. 

[LAUGHTER] 

But outside of that, what should they be doing with it? 

DI: Yeah. So it's intended as a reference guide. So if you find that you are struggling with issues in any of those chapters, you can pull it up, read through certain sections to answer any questions that may be cropping up on your team. In the guidebook, there are also vignettes or mockups of a fake app called Run. These mockups, these vignettes, capture patterns to aim for or patterns to avoid. And these are all based on real insights from product teams across Google. We've just genericized it for the purposes of the guidebook. 

So you can take a look at that. Learn from those example patterns. And also, in the guidebook there is a worksheet that is attached to every single chapter. I know that makes it sound like homework, a little less fun, but the idea of the worksheets, it's kind of a shorter reference guide, includes a couple of checklists, pointers, different questions and exercises that you can pose to your team to come to these decisions together. 

MARK MIRCHANDANI: So you mentioned a big part of your role specifically is going around and communicating with these people, getting their feedback, and then, of course, I hope folding that back into the guidebook. Who has really been providing a lot of feedback? And are people maybe even using this guidebook or at least concepts from this guidebook without ever exceeding it? 

DI: Well, we started development on the guidebook almost a full year ago, and there's over 30 or 40 individuals from different product teams across Alphabet, across Google, who have contributed their insights or learnings to this. And we've also been internally testing the guidebook with a few different product teams across Google in the last couple of months. Like I said, we'll be launching the guidebook at I/O. We have a 40-minute session talk dedicated to the guidebook. And to help bring these concepts to life, we'll be illustrating it through a case study from the Google Flights team. So that's one of the key teams that we've been piloting this content with. 

MARK MANDEL: So I'm sure that our listeners would love to hear more about the particular best practices that have come out of the guide. Is there maybe one or two that particularly are your favorites? 

DI: One of the concepts that's been most interesting to me, and also in sharing this out with people both in and outside of Google, is looking at the cost of optimizing for precision or recall. And this is something that I'm still-- each time I talk about it, I want to make sure I get the terminology right. Because I believe precision is optimizing for false positives, and recall is optimizing for false negatives, or it's the other way around. Each time-- I have to I actually sketch out the quadrants and look at it to make sure I'm getting it right. 

But the short of it is that we need to design that the reward function in a way that optimizes for one or the other, but we need to strike a fine balance. And I think an interesting case study of this is with the Google Clips team, which is that little wearable camera that you could wear on your shirt and that would automatically capture little clips of your day that you could then sort through at the end. And that way, it frees you up to live your life. You don't have to be behind a lens. But you have something that's capturing these special moments for you that later I can decide to keep or dispense with. 

And so an interesting example of this concept of optimizing for precision or recall come to life is with the Google Clips team. They realized through the process of user research that, actually, users didn't want the camera technology to optimize too much for precision in terms of what the camera deemed as the most interesting or the most unique as a photo. Users prefer the Google Clips camera to optimize more for recall in terms of a wider diversity of pictures, even if it's something that they don't deem inherently interesting, because it gave them a sense of control to be able to sift through their gallery and choose what was actually special to them. 

And again, they felt like they could have greater trust in the Google Clips camera because it allowed them to define what was actually special to them and make sure that no special moment was being left out. 

MARK MIRCHANDANI: Well, in that case, there's such a low cost, because at the end of the day, the user basically says, no, I don't want this picture. But in a more complex scenario that might have that, there's got to be other balancers that take effect, right? 

DI: Yeah. So another interesting case study to me comes from the Google Brain team when they built a deep learning model that could diagnose diabetic retinopathy in patients. And I can't remember why now, but for some reason, there's a variety of confounding factors that make it difficult for physicians who are highly trained and experienced in this to diagnose this. 

And so they actually found that, through the course of creating this model, instead of automating away the human physician diagnosis, the model working in tandem with physicians could actually result in higher accuracy of diagnosis than either the model or the physician by themselves. And so that's an interesting example to me of how we think about using AI for automation or for augmenting the human ability to do something, striking that fine balance between both. And that's something else that we also cover in the User Needs and Defining Success chapter. 

MARK MANDEL: That sounds like a really core component of literally what you call human-centered AI. You want to make sure that it's an augmenting experience in some way, shape, or form. 

DI: Yeah, exactly. When we are making a decision-- if we as product creators are making a decision to automate away a task, are we crystal-clear that we're meeting the ideal criteria for automating it away? So for instance, it makes less sense to automate a task that humans find pleasurable or enjoyable or even higher stakes. It makes less sense to automate away a task that people can't agree on. Because then, if we can't agree on the way to do a task, then it means that we don't have a clear set of criteria to then train the model on. 

There's also an interesting-- so going deeper here, Mark, to your point earlier, there's an interesting question around cultural bias or value here, where some of the early feedback that I've heard is, when we make assumptions about tasks that are onerous or tedious to automate away, that maybe that's a more Western way of looking at doing something. We're in a greater level of privilege to be able to say, like, actually, I don't feel like, I don't know, opening my mail or scanning for spam, or what have you. 

But that's a decision that we can make due to our relative level of privilege. So what are the implications of when we do agree to automate something? What does it say about our value as a society? What is a decision that we're making or imposing on another culture that we should be aware of? 

MARK MIRCHANDANI: Well, I'm not sure if anybody enjoys opening junk mail. But that's-- 

DI: Yeah, that was a more-- 

MARK MANDEL: But some people might. Find your joy. 

MARK MIRCHANDANI: It should be the-- 

[BELL RINGING] 

Besides the meditative experience of finding out what sparks joy in you, does this guidebook also address that, the cultural segmentation almost that comes up from some of these things? Because it seems to me like it'd be really hard to make exactly what you said, a blanket statement that says, look, everyone agrees on no one wants to screw-- 

DI: If it's tedious, no one's to do it. Yeah. But there's monetary value in doing certain tasks. Those are some people's jobs. So being cognizant of that. 

MARK MIRCHANDANI: Well, that's probably the biggest kind of global reaction to a lot of AI, is that, hey, it's stealing jobs. And we just talked about how augmentation is really a little bit more of the goal there. What's the response to those people who are exactly saying that, like, hey-- 

DI: Man, yeah. I honestly don't know. I don't have-- I wish I had an answer for you on that, but I don't know. I think it's something that we're all still figuring out together. And for me in launching this guidebook, I want to make sure that we are launching this in events around the world, that we're reaching out to developer and design communities around the world. Because I think it's very, very easy to speak to exclusively West Coast audiences or even Western audiences. 

And we need to understand, from designing developer communities as far away as, say, Russia, Brazil, Slovakia, et cetera, does this resonate with you? Does this capture how you think about AI or machine learning? And if not, what is missing? What is inaccurate? How does it need to grow in order to better serve you? 

MARK MANDEL: I'm assuming the same thing applies again, like socioeconomic status, gender, a whole bunch of different diversity aspects that make up, basically, society as a whole really affect how you're going to make these AI models work. 

DI: Yeah. Again, it's not just about the technology. It's about the impact the technology has on us as people. 

MARK MIRCHANDANI: So is it possible to make an unbiased model? 

[LAUGHTER] 

MARK MANDEL: Whoa. 

DI: I don't think so. 

MARK MIRCHANDANI: Welcome to the deep room-- 

DI: Yeah. Oh, my gosh. 

MARK MIRCHANDANI: --where we go deep into questions. 

DI: I feel I need a-- I feel like we all need drinks for this right now, even the listeners right now. 

MARK MIRCHANDANI: This might be a beers conversation. 

[LAUGHTER] 

DI: I don't think so. Speaking personally here, bias is a natural part of what makes us human. But when I say natural, there's not a value judgment there of it being good natural or bad natural. It's something that we need to be cognizant of and aware of. And we're not just having reflexive, knee-jerk reactions. 

This is a big part of my overall design and product philosophy, is that we need to be very conscientious of the decisions that we make as product creators, because the decisions we make around, say, accessibility or where this particular element of UI is located, or even who our target audience is, to the training data set that we curate, all of those decisions, then cascade and radiate down to circumscribe the set of decisions that an end user is able to make. 

Because of that, and because we are all human at the end of the day, we will always sustain some amount of bias for or against something or whatever. And so it's on us to continually be vigilant about that and ask questions about how can we be more mindful about those decisions we're making that then radiate down to the end user? 

MARK MIRCHANDANI: If only there were some kind of guidebook to help people decide. 

MARK MANDEL: Yeah, if only there was. 

DI: If only there were some kind of-- 

MARK MANDEL: So naturally seguing, if people want to learn more, where can they go? 

DI: Yes. I'm very glad that you asked. We just finalized our URL. So if people want to check out the guidebook, they can go to design.google/ai-guidebook. You'll see the six chapters there along with the worksheets and interactive exercises that help you dig into the material in a more actionable way. You also see across the site a Feedback button that allows you to fill out a form of any thoughts or concerns that you have to share it with us so that we can continue improving this document, improving this set of best practices. 

The reality of it is that the field of AI is quickly advancing and quickly changing, and so should the way that we design our products as a result. And as a result of that, so should this set of best practices and this guidance itself. And so I want to hear from you. We want to hear from you. I'll also say that my DMs are open on Twitter. I'm at DQPDang. Feel free to reach out any time if you feel the need to outside of the feedback form itself. And hopefully, I'll see you at an event or something otherwise. 

MARK MIRCHANDANI: I do want to ask one question-- 

MARK MANDEL: Uh-oh. 

DI: Uh-oh. 

MARK MIRCHANDANI: --that's very interesting. I think it's fascinating that Google dedicates a lot of resources-- and you said design advocacy. Developer advocacy is something that Mark and I are in. There's a lot of very cool stuff that we get to do because we're basically saying, this is how we recommend working with Google, or in your case with AI, and all these different platforms. Why is Google creating this guidebook? And why is Google the one that people are OK with creating this guidebook? 

DI: Oh. Well, there's an assumption there that people are OK with Google creating this guidebook. 

MARK MIRCHANDANI: Here's a spoiler for my question. Uh, they may not be OK with that. 

DI: Yeah, they may not be. Yeah. Yeah, I know. I know they might not be OK with that. I know that Microsoft earlier this year also recently released a similar set of principles or best practices around human-centered AI. We are not the first to do so, and hopefully we won't be the last to do so. For me, I see this as a conversation that we're having with people everywhere who are considering or actively working on AI-driven products. 

And this is just another resource that they can refer to. And hopefully, they find it useful. Hopefully, they find it relevant. If they don't, then hopefully they let me know and let us know so we can continue evolving it. But to your question about are people OK with Google creating it, I think that's a very good question. And we're about to find out when we release. 

MARK MANDEL: Fantastic. Before we wrap up, though-- we are running out of time, fortunately-- is there anything you want to mention or plug or just make sure that people know about before we finish up? 

DI: Yes. So as I mentioned earlier, the guidebook is developed by the PAIR team. And in addition to the guidebook, check out more tools, content, guidance, and case studies from the PAIR team at google.ai/pair. 

MARK MANDEL: We'll have a link on the show notes. 

MARK MIRCHANDANI: Personally, I'm looking forward to that quadrant as a page in the story book so I can follow it through and understand exactly which one was used-- the false positives and the false negatives. 

DI: Oh, yeah. We have a GIF on there. 

MARK MIRCHANDANI: Oh, well that's-- 

MARK MANDEL: Perfect. 

MARK MIRCHANDANI: But this is a pop-up book? 

MARK MANDEL: It's not a pop-up. 

DI: It's not a-- what's a pop-up GIF? 

MARK MIRCHANDANI: Well, no, it's a book. 

DI: Oh, OK. 

MARK MIRCHANDANI: For the actual guidebook. 

DI: Yeah, that would work. That would work really nicely. I agree. 

MARK MANDEL: Excellent. Well, Di, thank you so much for joining us on the podcast. 

DI: Thank you, Mark, and thank you, Mark 

MICHELLE: That was a great interview. Thank you, Mark, for bringing Di onto the show. And now it's time for our question of the week. 

[MUSIC PLAYING] 

Mark, I have a question for you. 

MARK MIRCHANDANI: OK. 

MICHELLE: Since you just spent so much time talking to Di, if someone wanted to get started with practical AI, how would they go about doing that? 

MARK MIRCHANDANI: Well, that's an interesting point. As we were just talking about in our cool things, there's a lot of machine/AI you can build at the very, very hands-on level when you're getting into the details of building on machine learning models and those sorts of things. But at a much simpler level, there are some cool tools that Google has that you can just get started with now. 

I think one of the ones that some people have been talking me recently is Dialogflow. There's been a lot of movement about chat bots and creating these customer experiences. And you certainly don't want to sit there and generate a complete list of rules for what a conversation might have for people. You don't want to say, if they say A, do this, B do this. And Dialogflow is a very cool mix of AI and the ability to communicate with systems and different APIs to create a very, very flexible but still fluent and easy to understand AI communication. 

So I think it's super cool that we have Dialogflow, and we've just recently pushed out some code labs that really easily step through-- how do I actually get started with it? How do I build my first chat bot? How do I build these different rules? What do these different things mean? And then, by the end of a couple of different code labs, you've got a functioning chat bot that communicates out. In these examples, it sets up calendar invites and those sorts of things. 

It's super, super cool to see, and it's a great way to get started with what AI starts. So I think Priyanka put out a lot of those code labs, so we'll definitely include things in the description. I went through them last week, and it was just awesome to see how quickly I went from knowing nothing, which is a common state for me, all the way up to having a working chat bot that scheduled out calendar invites. And I'm like, oh, what kind of cool things can I do with it? 

I think it plays really well into the great conversation we had with Di and understanding how do I build AI responsibly? So I think for all the listeners out there, give it a try. And keep in mind all the different facets that you do have to consider when building an AI system. 

MICHELLE: Yeah. There's a few different approaches to AI. You have Martin's code labs that take you through just raw deep learning. And then you have Di's approach, which is very human-centric and let's be conscious, let's think about the models that we're building and how they impact humans, how they interact with humans. And so using the Dialogflow example is a great way to get both sides of the theory as well as, practically, how do you actually implement that when humans are involved? 

MARK MIRCHANDANI: Yeah. And no matter which kind of route you go down, you're going to need to consider how you're building that. I think Di did a great job of explaining some of the thought process. And I think by the time this episode airs, that guidebook will be available. So it's definitely worth a read. 

MICHELLE: Excellent. I can't wait to see it. 

MARK MIRCHANDANI: So now that we've gone through that, where is everyone going to be, speaking of when this episode airs? I think it's going to be during Google I/O. 

MICHELLE: It will be at Google I/O, and we will be deeply embedded in that event. 

MARK MIRCHANDANI: This feels so similar to our next conversation, where we were like, oh, yeah, what happened after Next? Well, we all took a nap for a while. 

MICHELLE: That's right. I expect for Google I/O to be just as intense for our team. So it's a developer festival. It's outdoors, versus Next, which was a lot of indoor events. And this will be my first Google I/O. I've never actually been to one before. So I'm very excited. And if you're there this week, come visit me in the Code Lab section. So I'll be there every single day Tuesday, Wednesday, and Thursday. 

And if you're interested in going to I/O next year, how would you go about getting a ticket? 

MARK MIRCHANDANI: That is an excellent question, but I feel like you already know the answer, because I do not. 

MICHELLE: Well, if you come to visit me in the Code Labs section, the more Code Labs you complete, we'll be having a raffle for passes for 2020. 

MARK MIRCHANDANI: Oh. Maybe I should sit down and try out some Code Labs to make sure I get in next year. 

MICHELLE: Maybe so. So the labs will take you about 30 to 45 minutes apiece. And the more you complete, the more entries you get in the raffle. But you could also, if you're not in the Mountain View area, you could also join an I/O extended event. Last year, we had 525 of these in 100 different countries. 

MARK MIRCHANDANI: Holy moly. 

MICHELLE: They're all over the globe. So either go to one in your local area, or if you're interested in organizing one next year, we're always looking for people to host those. And we'll help you get it organized. We have a ton of resources for you. And the idea behind these I/O extended events are that it's part viewing party and then part community building. So you can set your own agenda. You can have hackathons, code labs, run the Livestream, and just bring your community together. So either find one, or if you want to host one next year, we'll have a link to those resources. And get involved in I/O. It should be great. I'm very excited about it. 

MARK MIRCHANDANI: I think that's very cool. And it's also a really cool way to still continue that community tradition without necessarily having to be right here in the Bay Area. So after I/O, I'm pretty sure I'm going back into hibernation mode until the next I/O. 

[SNORING] 

MICHELLE: Yes. I wish I could take a nap after I/O, but I will be prepping for KubeCon Europe. So I'll be giving a workshop there. And I'm putting together that with a few of our other colleagues. There will be quite a few people from the Kubeflow team over in Barcelona. So if you are there on site, please stop by and say hello. Ping me on Twitter or reach out. I'd love to meet you in person. Or come to the workshop. And we'll be providing all the resources that you need to run through some Kubeflow tutorials. We'll be showing off pipelines and how you can run things from within a notebook. So very exciting. 

MARK MIRCHANDANI: Very, very cool. And lots of ways for people to interact with the teams here who are building it. But then I'm sure there'll be tons of people there as well who are like, look, we're using it. This is how we use it. And there's great stuff to learn from that. 

MICHELLE: Yeah I really enjoyed KubeCon last year. I also did a workshop over in Seattle, and this will be another iteration of that, the continuation with all of the newest features. And I really enjoyed the people that I met, the Kubeflow users and people who were just learning it for the first time. It was a really great experience for me. 

MARK MIRCHANDANI: Very, very cool. Well, it sounds like it will be a busy week, and then followed up by many more busy weeks. So obviously, for anyone who can come, great. And if not, it sounds like there's great ways to catch up otherwise. 

MICHELLE: Yeah. It'll be on video. And the cobe lab will be public, so we'll post a link to that. 

MARK MIRCHANDANI: Awesome. Well, thanks, everyone, for listening, and we'll see you all next week. 

[MUSIC PLAYING] 