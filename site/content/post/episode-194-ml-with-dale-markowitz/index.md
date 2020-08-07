+++
audioDuration = "00:30:11"
audioFile = "Google.Cloud.Platform.Podcast.Episode.194.mp3"
audioSize = 43869552
categories = ["Machine Learning", "Natural Language Processing"]
date = "2019-09-11"
description = "On the podcast this week, we have a great interview with Google Developer Advocate, Dale Markowitz."
draft = false
episodeNumber = 194
hosts = ["Aja Hammerly", "Jon Foust"]
title = "ML with Dale Markowitz"
image="/post/episode-194-ml-with-dale-markowitz/images/hero/hero-EP-194.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/d2wh1d/episode_194_ml_with_dale_markowitz/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

On the podcast this week, we have a great interview with Google Developer Advocate, [Dale Markowitz](https://twitter.com/dalequark). [Aja Hammerly](https://twitter.com/the_thagomizer) and [Jon Foust](https://twitter.com/syntxerror1) are your hosts, as we talk about machine learning, its best use cases, and how developers can break into machine learning and data science. Dale talks about natural language processing as well, explaining that it's basically the intersection of machine learning and text processing. It can be used for anything from aggregating and sorting Twitter posts about your company to sentiment analysis.

For developers looking to enter the machine learning space, Dale suggests starting with non life-threatening applications, such as labeling pictures. Next, consider the possible mistakes the application can make ahead of time to help mitigate issues. To help prevent the introduction of bias into the model, Dale suggests introducing it to as many different types of project-appropriate data sets as possible. It's also important to continually monitor your model.

Later in the show, we talk Google shop, learning about all the new features in Google Translate and AutoML.

<!--more-->

##### Dale Markowitz

[Dale Markowitz](https://twitter.com/dalequark) is an Applied AI Engineer and Developer Advocate for ML on Google Cloud. Before that she was a software engineer in Google Research and an engineer at the online dating site OkCupid.

##### Cool things of the week

* Build a dev workflow with Cloud Code on a Pixelbook [blog](https://cloud.google.com/blog/products/application-development/build-a-dev-workflow-with-cloud-code-on-a-pixelbook)
* Feminism & Agile [blog](https://medium.com/@Hanna.Thomas/why-dont-we-just-call-agile-what-it-is-feminist-8bdd9193edba)
* New homepage and improved collaboration features for AI Hub [blog](https://cloud.google.com/blog/products/ai-machine-learning/new-homepage-and-improved-collaboration-features-for-ai-hub)

##### Interview

* TensorFlow [site](https://www.tensorflow.org)
* Natural Language API [site](https://cloud.google.com/natural-language/)
* AutoML Natural Language [site](https://cloud.google.com/natural-language/#how-automl-natural-language-works)
* Content Classification [site](https://cloud.google.com/natural-language/docs/classifying-text)
* Sentiment Analysis [site](https://cloud.google.com/natural-language/docs/analyzing-sentiment)
* Analyzing Entities [site](https://cloud.google.com/natural-language/docs/analyzing-entities)
* Translation API [site](https://cloud.google.com/translate/)
* AutoML Translate [site](https://cloud.google.com/translate/#automl-translation)
* Google Translate Glossary Documentation [docs](https://cloud.google.com/translate/docs/glossary)
* Google News Lab [site](https://newsinitiative.withgoogle.com/google-news-lab)
* AI Platform's Data Labeling Service [docs](https://cloud.google.com/data-labeling/docs/)

##### Question of the week

How many different ways can you run a container on GCP?

 * [GKE](https://cloud.google.com/kubernetes-engine/)
 * [Cloud Run](https://cloud.google.com/run/)
 * [App Engine Flexible Environment](https://cloud.google.com/appengine/docs/flexible/)
 * [Compute Engine](https://cloud.google.com/compute/)
 * VM as a computer

##### Where can you find us next?

Dale will be at [DevFest Minneapolis](https://devfest.mn), [DevFest Madison](https://devfestwi.com), and [London NEXT](https://cloud.withgoogle.com/next/uk).

Jon will be at the internal Google Game Summit and visiting Montreal.

Aja will be holding down the fort at home.

##### Sound Effect Attribution

* "Mystery Peak2" by FoolBoyMedia of [Freesound.org](https://freesound.org)
* "Collect Point 00" by LittleRobotSoundFactory of [Freesound.org](https://freesound.org)
* "Cinematic Piano" by Ellary of [Freesound.org](https://freesound.org)

{{< transcript "[MUSIC PLAYING] AJA: Hi, and welcome to episode number 194 of the weekly Google Cloud podcast. I'm Aja and I'm here with my colleague Jon. Hey, Jon. " >}}

JON: Hey, Aja, how's it going? 

AJA: Pretty good. Yourself? 

JON: Pretty good. I'm pretty happy to finally be done at PAX. It was a really great experience, and I got to see you. 

AJA: Yeah, we did get to hang out here in Seattle, and enjoy a brief Seattle summer day together. 

JON: And the new office is pretty nice. 

AJA: Yeah, our new Google Cloud office in Seattle is A-plus. It is amazing. So this week on the podcast, we're going to be talking to one of our fellow developer advocates working on Cloud, Dale. And we're going to be talking more about ML. 

JON: Sounds cool. Dale's a really, really great friend of mine. Sad to see her go, because she's moved on from the New York office to another office. But we did share one last moment, and it was pretty good. 

AJA: Yay. And then, later, after our interview with Dale, we will have a question of the week about containers, because everyone's excited about containers. But first, cool thing of the week. 

[MUSIC PLAYING] 

You've actually got more cool things this week than I do, Jon. So why don't you start? 

JON: The first thing's a blog post written by Simon Zeltser, a DPE on the Cloud team, and it is about building a development workflow for a Cloud Code on a Pixelbook. And I'd found this blog post really well, because when I'm teaching my students and they are working with Pixelbooks, it's very hard to set up an environment for software development on a Pixelbook. But this blog post goes into depth about how to set up the environment, get started with visual code, get started with Cloud Code, and, also, he also takes a step into setting up containers and working with a docker and everything. So it's pretty cool and pretty awesome. 

AJA: That sounds cool. I've been meaning to spend more time with Cloud Codes. I will totally check that out. My cool thing of the week is an article I ran across yesterday on Twitter. The article itself is on Medium, and it will be linked in our show notes. But it's about how the ideas of Agile are actually ideas that feminism and the Civil Rights movement and the progressive movement, and other movements have been pushing for years and years, around iterating, failing fast, cooperation, seeking to hear all voices. 

And I found it really educational because it tied together some stuff that had been banging around in my head, apparently, for the last year. Because when I woke up this morning, the social medias reminded me that I actually wrote a social media post about this exact same issue, exactly one year ago today. So clearly this has been on my mind for a while. But the author of this blog post does it much better than I ever will, and so I'd recommend checking out the show notes, and going and giving it a read. 

JON: That sounds awesome. It's very interesting to see the similarities between Agile and feminism, some I'm kind of curious what that really is about. So I'll probably give it a really good read. 

AJA: I recommend it. Do you have any more cool things for us this week? 

JON: I do. So considering that this is an ML episode with Dale, I decided to pick up something about the AI hub. And they have a new web page and improve collaboration features, which is really awesome because it allows you to- as soon as you land on a page, you get to see a lot of commonly used models and things that you can share with people on social media. They can be publicly accessible to everyone. So the AI hub is doing really, really great things. So if you are really big into ML, then give it a look. 

AJA: That sounds awesome. And it is a lovely segue into our interview with Dale, where we're going to talk about MLP translate, practicing AI, and kind of how AI fits into the bigger world. Looking forward to sharing all that with y'all. 

JON: All right, so let's give Dale the spotlight, and let's go to our episode. 

[MUSIC PLAYING] 

So in this episode of the Google Cloud podcast, we are hanging out with Dale Markowitz, who is an awesome, awesome teammate of ours in developer relations. So, Dale, would you like to introduce yourself? 

DALE: Hi, I'm Dale. I'm an applied AI engineer and developer advocate, and I work on all of the tools in Google Cloud that have to do with machine learning and words, like natural language processing, translation, and speech. Stuff like that. 

JON: Awesome. And can tell us a little bit about what you do? 

DALE: Let's see, I do lots of things. So I work with engineers internal and external to Google, to help them understand how they can use machine learning, how they can use natural language processing. I also spend a lot of time with engineers that don't have a background in data science to help them understand how they can use machine learning and how they can understand how well a model's performing and what's an applicable use case. 

JON: So, yeah, that sounds pretty interesting, that you work with people with no background on data science. Because, well, a lot of people probably have known that our job as developer advocates are to communicate for our developers externally and internally. Meaning that we talk to our internal teams, and we speak externally to developers about cool new features. But you speak with people that have no background data science, so that's kind of interesting. Because you're technically advocating for ML, as opposed to our product. So it's kind of interesting. So can you tell us how someone who doesn't have a background in ML would probably get started, in your opinion? Or go about getting into learning about ML? 

DALE: Yeah, it's kind of interesting because- I don't know that my job could have existed five years ago, because back then, like, for example, when I first started learning about machine learning, there was a pretty high barrier to entry, in you had to be a programmer to get started, but you also had to have a good understanding of data science. And just the tools that were available to you five years ago, I think, were pretty rough for new developers. 

Like, for example, I think TensorFlow came out in 2015. So this is a tool for building neural networks. It's a really popular tool for building neural own networks today, but back when it came out, it was really tough to get started with because you had to understand how to program, you had to understand how neural networks worked at a pretty low level, but you also had to understand distributed computing. Because TensorFlow itself has this complicated distributed graph architecture. 

Anyway, what I'm trying to say is, it was kind of hard to get started in machine learning a couple of years ago. But there has been so much progress today, like, for example, TensorFlow getting a lot easier to use and more user-friendly, And a lot of tools that I work with here at Google, really make it so that you can even build a neural network if you don't have a data science background. So now we have to start thinking about how, OK. Well, now, software developers that don't have all the data science training start building neural nets, like, what are their concerns? What do they have to be wary of? 

AJA: So that's so call. The top of the show, actually, you said something about natural language processing. Can you give me the 5,000- foot view of what that is? 

DALE: Sure. Natural language processing is the study of algorithms that deal with processing text. And, usually, today, that means basically the intersection of machine learning and text processing. 

AJA: So what kind of things are natural language processing used for in the real world? 

DALE: So in the world, people use natural language processing for lots of things. So one really common use case is, you have lots of texts from your customers posting about your company on Twitter or filling out a feedback form about your product, or maybe you have a call center where people are calling in to ask questions and you use something like Speech-to-Text to transcribe those call center transcripts. And then you want to analyze to see what people were talking about. 

So one common Natural Language Processing problem is you have a lot of text and we want to see what topics are being talked about, like topic modeling. Or sort a bunch of pieces of text into categories. Another common task you might imagine is something called Sentiment Analysis. So this is about what emotions people are expressing when they write. So are people saying positive things or negative things about your product on Twitter? 

AJA: That sounds super cool and super powerful. 

JON: I want to talk a little bit more about those people that don't have degrees a little bit. And I was kind of curious, we have people who have degrees in ML, and their job is to work with models. But those people without degrees and they work on our models, creating models is a very wishy-washy subject because you can create a model that can be completely biased. How does someone without a degree create a model that is deemed unbiased, in your opinion? 

DALE: That's a good question, because it is true that if you are doing a normal software engineering task, then-- not all the time, but a lot of time --you can immediately tell if it's broken, because your program crashes in a really horrendous way. Unfortunately, with machine learning you can be working on something for months, and then you put it into production and you don't even realize it's broken for a while. And it's broken in a way that is surprising, that it was hard for you to anticipate. 

Like, for example, a lot times we want to label things. So we have pictures of dogs and cats, and we want to build a model that automatically labels them as dogs or cats. So you might think that a really good model just automates this process, but actually a really good model only correctly labels these things most of the time. But all models make mistakes, so this is just a natural thing. 

And when you're developing, first of all, you have to expect this to happen and you have to make sure that the consequences of your model-making mistake are not that bad. This is why I hope that most of the people that I'm talking to that are trying out machine learning for the first time, are planning on deploying their models in non-crucial settings. Like, that they're not building navigation systems for airplanes or analyzing medical scans, and then making life or death decisions. 

So the first thing, I think, is to not choose applications where the consequences of making a mistake are really deadly. Then the next thing that we would tell people is to consider the different types of errors that a model can make, because there are different ways a model can be wrong. For example, with the cats and dogs case, you could label a cat as a dog or a dog as a cat. Let's say that we're looking at scans of lungs and we want to see if we can detect pneumonia automatically. 

Machine learning is very good at understanding medical scans. Actually, a lot of models we have today can even beat human practitioners. But let's say we're doing this task. So the first thing that a model can do is that it can give you a false positive. So this would mean it looks at a scan of lungs and it thinks that you have pneumonia, when you really don't. That error is definitely horrifying, but maybe it's not that bad because it means that you-- I don't know --spend more money on scans and doctors, only to find out that you didn't really have a problem. 

But then there's another type of error called a false negative, where you really did had pneumonia, but the model says that you didn't. And that's much more costly, because now you've just overlooked a potentially life-threatening or very serious disease. So the next thing for practitioners is to think about all these different types of errors, and understand what you would do in each of these different cases. 

So another way that models can be wrong is that they can somehow introduce bias, and there are many ways that this can happen, but usually it happens because the examples that you've shown your model, the training data, is in some way biased. So, for example, in my opinion, one of the worst ways that machine learning has been applied is to something like predictive policing. So you want to somehow collect data about people and predict who's likely to commit a crime or who's likely to recommit a crime. The problem here is that the people that get pulled over for crimes in the first place is biased. 

And, in fact, years and years of policing has innate human bias. So if you train a model on that data, you're just going to reflect those biases. The right solution here is to choose your data sets carefully, so that they reflect all of the different groups that you can think of that there might be a difference in performance. So let's say you are training a vision model to identify people's faces. You want to make sure that your data set has people of all different races, all different ages, sexes, outfits, et cetera. 

And if you're really concerned about this, then you want to look at how well the model does specifically on these groups. So break your data into these different groups, and make sure the performance is pretty similar across all of them. This is something we're really interested in at Google. It's something that we're really spending a lot of time thinking about, how we can make this more clear to the user and how we can integrate it into our products. 

AJA: So do you have any guidelines? I mean, you mentioned looking at all the ways that it could go wrong. Do you have any guidelines for folks who are just getting into machine learning or aren't necessarily data scientists by trade, but are using some of the products that make machine learning easier? What kinds of stuff should they be thinking about when they're working on their models? 

DALE: Sure. So when you first learn machine learning, you'll have to learn how to parse a bunch of different metrics to just baseline evaluate how well the model is doing, precision and recall. I won't talk about that, because you probably have to read a blog post and spend a couple of minutes thinking about it, before it really sinks in. But the strongest advice that I have, probably, is if you have this data that you use to train a model, and then you try to somehow deploy it into production to make predictions on the fly. 

And a lot of times people get caught up on the data set that they use to train the model doesn't actually reflect the data that they're making predictions on. So maybe I use a bunch of stock photos to train a clothing classifier, but then when I actually use my clothing app and people are taking pictures of themselves. Well, suddenly, those photos look a lot different than stock photos. So that's a major source of error. And, also, sometimes the distribution of data can shift. So in the beginning your model works really well, and then style trends change. And suddenly it doesn't recognize that, like, tutus are in or something. 

I would really advise that when you deploy a model, before you let it go into the wild, you watch how it performs on data. You don't let it make predictions, but you sort of simulate what predictions it would make and make sure that you're OK with those. And, also, understand that you do have to be continually monitoring your model because of the fact that the real world could change. 

AJA: So it sounds like when you're using machine learning, you need to constantly be on top of it to make sure that it's telling you what you think it's telling you? 

DALE: To make sure it's telling you what you want it to be telling you. 

AJA: OK. 

JON: So I'm kind of curious. Since you have to continue monitoring it, you can't anticipate how your users are actually going to use your models. How long do you think it actually takes for you to-- the word perfect is going to be in air quotes right now, but how long do you think it takes to create an accepted fully functioning model? 

DALE: It depends on the task. It depends on your standards for how good. It should be working. Like, for example, there's also a lot of thought around designing interfaces, so that users that are interacting with machine learning models are aware that there's going to be some probabilistic component. 

JON: So I'm kind of curious. When do you think it is actually acceptable to use ML? Because you can use ML for a bunch of things, to solve a bunch of issues, and you can probably use ML to do things that probably aren't ethical. But when do you find it acceptable to use ML? 

DALE: Like I said, I think that there are lots of cases. Like, I wouldn't use machine learning for anything life-threatening. I wouldn't use machine learning for anything that determines the fate of people's lives. There are sort of lots of, I think, low-hanging tasks that-- well, one of my colleagues described machine learning as being like kind of a little bit of a dumb intern. 

[LAUGH TRACK WITH APPLAUSE] 

It takes a lot of training and it can only do very menial tasks, but there are lots of little tasks like that in the world that have yet to be automated, that it would be great if they were. Like, just for example, journalists. They interview people for stories and they collect hours and hours of transcripts, and they sit down and they transcribe them. So journalists, a lot of their time is spent just literally copying an audio file to text. That's something that we could do with machine learning and it's something that I don't think anyone would complain about as an application. 

AJA: That makes a lot of sense. So you mentioned that you're into natural language. What kind of natural language tools are available on GCP? Because I've played a little bit with some of the tools, trying to detect if one of my friends was making a pun or not because he has a very punny human being. But I feel like there's a lot of tools that I don't even know about. So what kinds of tools do we have around natural language on GCP? 

DALE: So glad you asked. With machine learning it goes sort of like on the spectrum of easy to get started to advanced. So the easiest tools that you could use would be something like the Natural Language API. So this is an API used like any other-- The input is text --and it can do things like detect sentiment, detect entities like people's names, places, prices, dates, addresses, and so on. Can also detect the subject of text. So if you uploaded a "New York Times" article about politics, it could detect that from an article about sports, and so on. So that's like the easiest entry way into natural language processing. 

Then at a step-- I wouldn't say it's harder, but maybe more sophisticated, is a tool like AutoML Natural Language. It's a tool that allows you to train your own model on your own data from scratch, and you do this with a GUI and it's quite easy to use. And there are a bunch of different models that we can build for text. So the first one is the classification model. We worked with a recipe company and they wanted to be able to categorize their recipes into-- I don't know --categories, like Southern food, Mexican food. But you could upload a bunch of recipes, have humans labeled them, and then train a model to do this automatically. So that's classification. 

You can also build a custom sentiment model. So, again, this is about emotions. Is this piece of text expressing positive or negative feelings? And within AutoML, you can sort of fine tune this model to your own specific data. So, for example, the Natural Language API can tell that if I say I hate oranges, that I'm expressing negative sentiment. But if I said instead there's no legroom in coach, then a model might not know that that is a bad thing. Because legroom is such a specific niche thing, to flying on an airplane. So you might train a custom model that's more aware of your specific industry terminology. 

Also a new AutoML feature that was released recently was Custom Entity Extraction. So this is kind of like classification, but you can use it to identify words within text. So, for example, you could upload a W-4 and train a model to extract all of the form fields that you'd filled out. I built a model to classify patents. So you have a bunch of patent applications as PDFs, and you identify different fields in the patent. So that's AutoML. And then, there are lots of options for people that are more sort of savvy with data science. So if you're willing to get dirty with TensorFlow, then the types of natural language models you could build out are endless. And we have lots of infrastructure for helping you train and deploy those models. 

AJA: Cool. 

JON: So, Dale, you also mentioned that you work in translation. So is there anything new that's come about with the Translation API? 

DALE: Yeah, actually. We just recently released some updates. So if you've never used the Translation API, it's sort of like Google Translate but in API format. So you can use our models within your app. So the Translate API works, I think, very well. However, there are some cases where it doesn't do as great of a job. For example, Google Cloud has lots of documentation online and lots of really specific terminology, like Kubernetes or Cloud Run or TensorFlow or all of this stuff that maybe a generic translation model wouldn't have seen before. So we have a couple of features that can help you improve your translations for this sort of custom domain. 

One thing, if you want to build a really high quality model is AutoML Translate. So I just talked about AutoML Natural Language, but AutoML Translate allows you to upload lots of translations that you've done on whatever your data set is. So, for example, with the GCP documentation, I might upload English documentation and Japanese documentation, and then AutoML will train a model that automatically does those translations that includes this knowledge it learns from your own specific data set. So this builds very accurate models, but takes a lot of data to train a model like this. 

But we also just released a new feature to allow you to customize your translations just by using the API, and that's this feature called Glossary. So the idea is, let's say that I'm going to translate lots of things that also mention Google, but there are some words that I know exactly how I want them to be translated. So I want Kubernetes to be translated into Japanese in this very specific way that is not the default way that the Translation API does it. The new feature is called Glossary, so it allows us to upload a list of word pairs in one language then the one you're translating to, so that the API will before it does any translation, just make these one-for-one replacements using your preferred translation. And then it will translate the rest of the sentence. 

AJA: That's actually super powerful, because I don't know any domain that doesn't have domain specific vocabulary or uses words in ways that normal people don't use words. And sometimes, you have terms that need to be translated in very specific ways. So that's super cool. I can imagine a lot of people would get use out of that. 

DALE: Yeah, we actually think about it a lot for translating our own documentation. 

AJA: Best use cases are the ones that we experience, too. Sometimes. 

[LAUGHTER] 

That's cool. 

JON: So, Dale, you and I have been really good friends in the office, and we've been talking about a couple of things that you've been working on. So you mentioned that you work on this project called Google News Lab. So I'm curious to learn a little bit more about it, and I'm pretty sure our listeners are, too. So? 

DALE: Yeah, sure. So ever since I joined Google, I knew about the Google News Lab and thought it sounded really awesome. It's this team here that works with newsrooms to help them advance journalism through technology. So they'll work with different newsrooms and help them build out technology that helps with investigative reporting. And what I do with them is, I'm sort of like a machine learning consultant. So I'll talk to newsrooms about how they might use machine learning in a project or something like this. 

AJA: Do you have any examples you can tell us about? Because I'm not sure I can imagine what that looks like. 

DALE: Yeah, sure. I can tell you about a project that we just worked on. So I recently finished up working on a project with a newspaper in Mexico called "El Universal." They wanted to tackle a really complicated issue, which is that in Mexico there is a lot of homicides. And, unfortunately, some areas are so dangerous that reporters can't even cover homicides because they are at risk in doing so. These we call news deserts. They're areas that are sort of too dangerous to report on. So we worked with this newspaper to build a system that could identify these places where stories weren't written on crimes. 

So to do that Google News has this comprehensive stream of news stories written all around the world. So we looked at all of the news stories written in Mexico, and we whittled it down two stories that were written about homicides. And then we sort of used machine learning, and we used AutoML actually, to figure out which of those stories would be relevant for coverage. So they were talking about a crime committed on a specific day in a specific region. We were able to use this to build this map of places where crimes were being committed, but they weren't being reported about. So it's a pretty heavy sobering subject, but it was neat to be able to help out with this reporting. 

JON: This seems really interesting. You've mentioned that you used AutoML, but specifically what product in AutoML? NLP? Translation? 

DALE: Yeah, we use Natural Language Processing API and AutoML, so we use the API to do things like extract locations mentioned in news stories. And then we used AutoML to build a classifier that figured out which articles were relevant for our reporting verses which weren't. 

AJA: You said that it's heavy, but crime reporting is super, super valuable. People need to know what's going on in their neighborhoods. And I wish that this wasn't a product that was needed but, at the same time, it sounds like it's solving a real problem to ensure that people can get news relevant to them, in spite of what may be going on around. And that's super cool. 

DALE: I hope so. 

AJA: So we're almost running out of time, but is there anything that we haven't asked you about that you want to talk about? Or do you think our listeners would be interested in? 

DALE: Oh, yeah, actually, there is one thing. I want to talk about my favorite service on GCP, that I feel like is kind of hidden and people don't know exists, but if you are in machine learning, it's a super useful tool. It's probably the biggest un-blocker. It's our new data labeling service. So the hardest part of machine learning, in my opinion, is not learning what a neural network is or accuracy or all of this stuff. 

It's actually finding a labeled data set that's appropriate for your task. So you can go on [? Kaggle ?] and try to find one that's suitable. But if you want to, for example, classify your own company's internal documents, then for training in machine learning models, you need to label those documents. And sometimes you need to create hundreds or thousands of labeled examples, which means that you need to employ a lot of interns probably. 

Except, until now. Because now you can use Google's Data Labeling Service. You basically write up a description of how you want your data labeled, you send it to the service. And then, in a couple of days, the data set comes back labeled by human beings. And it is designed to work easily with all of our AutoMLs, so you can create a data set and then, immediately plug the output into AutoML to build a model. So that's my favorite new thing. 

AJA: That's awesome. Really powerful for folks who may not have the expertise or experience to go find that data sets that they need or maybe their data set is proprietary, for some reason or another. That's cool. 

DALE: Yeah. 

JON: So, Dale, really quick. We like to ask our guests to tell us something really interesting or cool that was built using Machine Learning or Natural Language Processing. And I'm just curious, do you have anything that you've seen developed, built, or something that you've built, that you would like to share with our listeners? 

DALE: I have built lots of little hacks myself. Like, for example, I used AutoML to predict which posts would be top posts on Reddit. That's a really hard task, as you might imagine, but it did a pretty good job. Or predict, for example, like whether a comment that somebody writes on a forum is toxic. I think my favorite thing is that once you have a data set, it's very easy to build a model. So I'm always sort of trying to see if I can predict things with AutoML. 

JON: That's awesome. Because you can imagine a lot of people go on forums or they read comments on like YouTube, and you can imagine a lot of them are probably deemed offensive or something. So if you can use NLP to actually scour the millions of comments, possibly, like, either censor or even completely erase those type of comments, it builds for a better community. 

DALE: Yeah. Also, one of my favorite things that somebody built is something that you built, Jon. Can I talk about it? 

JON: Yeah, sure. 

DALE: So, Jon, built something for gamers, where they can speak like they would to other people in the games, and then their comments will be translated in real time so that people in lots of different languages can insult each other over the internet. 

JON: (SOFTLY) Collaborate. 

DALE: I mean, collaborate. I mean, collaborate. 

AJA: Yeah, I don't think insulting each other is the intended purpose of that. 

[LAUGHTER] 

JON: It's been a real fun project and, thanks to your help, hopefully, it'll be a very big success. When I give a talk about it. 

DALE: Yeah, it's super cool. 

AJA: Thank you so much for coming to chat with us today, Dale. If folks want to find out more or follow the work you're doing, is there a good way that they can find out more about your work or follow you on the internet? 

DALE: Sure. I'm always willing to give people my Twitter handle. It's Dale Quark, like the subatomic particle. Yeah, and I try to keep a lot of things on medium, so I'll be there too. 

AJA: Awesome. 

JON: And will you be making any appearances anywhere? 

DALE: The next thing that I'm doing that's reasonably close is I'm going to the Minnesota and Madison Dev Fests. They're at the end of September, so if anyone's there make sure you say hi. 

JON: Well, thanks for joining us, Dale. It's been a pleasure, and I can't wait to see what other cool things you build with ML. 

DALE: Thanks. See you, Jon' and Aja. 

JON: Thanks, Dale, for the very, very, very in-depth conversation about ML. And now, that we're wrapping up, we're going to get into our question of the week. 

[MUSIC PLAYING] 

How many different ways can you run a container on GCP? 

AJA: Yeah, I love this question, Jon. I think we did it a previous time that I was on the podcast, a year-- probably, more than a year ago. But the answer has changed. 

[MYSTERIOUS CHIMING] 

So, by my count, there are at least five ways to run a container on GCP. The obvious one, Google Kubernetes Engine, GKE. 

[BELL] 

Also, now, we have Cloud Run-- 

[BELL] 

--which is another way of running containers. But there are a couple ways that most people don't know about. First of all, App Engine Flexible environment can actually run a container. 

[BELL] 

It's based around containers, and so, if you have a container that is an option. And Compute Engine. 

[BELL] 

And this is the one that even a lot of Googlers don't know about. Can actually start a Compute Engine VM from a container image. And then the fifth one is you can always use a VM as a computer and set up your own either Kubernetes environment or Docker environment to run a container. That way not using any of the managed services. 

[BELL] 

So at my best count, there are at least five ways to run a container on GCP. 

JON: That's awesome. It's kind of interesting to see the evolution of GCP and how it supports containers, because how many ways were there about a year ago, would you say? 

AJA: My entire time at Google, pretty much, we've had four. Cloud Run is the new one. And Cloud Run is cool and awesome, and folks should go check it out. 

JON: Awesome. So, Aja, I guess the next thing is where you're going to be? Where you're traveling to? Or if you're doing anything? 

AJA: I'm going to be at home, and I am so very excited to be at home, curled up with my cats. 

[TRANQUIL MUSIC PLAYING] 

[IMITATES SNORING] 

Hanging out. 

[LAUGHTER] 

Travel schedule's pretty light for the next couple weeks. How about you, Jon? 

JON: Well, next week, I will be at the Internal Google Game Summit, which should be a lot of fun. And after that, I will be traveling to Montreal for three or four days, to spend time with some really close friends from school and celebrate my brother's wedding, which is happening next month. 

AJA: Awesome! I have been really enjoying watching how the work at Google around gaming has become more centralized and becoming a thing. It makes me happy, because gaming is awesome. 

[VIDEO GAME SOUND EFFECTS] 

JON: Definitely. It's really good to connect with everybody, just talk about gaming as one cohesive group. So it's going to be really great to catch up with a lot of folks. 

AJA: Yeah. Hope y'all have a good time. I think that's it for our episode. 

JON: Well, thank you all for listening this week, and we hope to see you next week. See you, Aja. 

AJA: Bye, Jon. 

[MUSIC PLAYING] 