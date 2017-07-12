+++
audioDuration = "00:34:36"
audioFile = "Google.Cloud.Platform.Podcast.Episode.84.mp3"
audioSize = 50053185
categories = ["Machine Learning", "Kaggle"]
date = "2017-07-05T01:07:49Z"
description = "Wendy Kan joins us today to talk about Kaggle, their competitions, and the cool data sets available on their platform."
draft = false
image="/images/post/kaggle.png"
episodeNumber = 84
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Kaggle with Wendy Kan"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/gk3ao2PRad9"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/6lfqxx/episode_84_kaggle_with_wendy_kan/"
+++

[Wendy Kan](https://twitter.com/wendykan) joins your co-hosts
[Francesc](https://twitter.com/francesc) and
[Mark](https://twitter.com/Neurotic) today to talk about Kaggle, their competitions,
and the cool data sets available on their platform.

Kaggle joined the Google family a few months ago, so it's a great opportunity to know more about
the platform and the amazing community behind it.

<!--more-->

##### About Wendy Kan

Wendy is a data scientist at Kaggle, the largest global data science community.
Wendy works with companies and organizations to transform their data into machine
learning competitions and had launched over 50 competitions on various topics such
as image classification, revenue prediction, GIS and satellite data, click through
rate, customer categorization, and real estate prediction. She was a software
engineer and researcher before joining Kaggle. She holds BS and MS degrees in
Electrical Engineering from National Tsing Hua University and PhD in Biomedical
Engineering from The University of Texas at Austin.

##### Cool things of the week

- Google App Engine standard now supports Java 8 [announcement](https://cloudplatform.googleblog.com/2017/06/Google-App-Engine-standard-now-supports-Java-8.html)
- How SREs find the landmines in a service - CRE life lessons [blog post](https://cloudplatform.googleblog.com/2017/06/how-SREs-find-the-landmines-in-a-service-CRE-life-lessons.html)
- How HBO’s Silicon Valley built “Not Hotdog” with mobile TensorFlow, Keras & React Native [Hackernoon](https://hackernoon.com/how-hbos-silicon-valley-built-not-hotdog-with-mobile-tensorflow-keras-react-native-ef03260747f3)

##### Interview

- Kaggle [home page](https://www.kaggle.com/)
- Kaggle Competitions [list](https://www.kaggle.com/competitions)
- Kaggle Datasets [list](https://www.kaggle.com/datasets)
- Tensorflow: An open-source software library for Machine Intelligence [tensorflow.org](https://www.tensorflow.org/)
- Keras: The Python Deep Learning library [keras.io](https://keras.io/)

<div style="text-align: center">
  <a href="https://www.kaggle.com/"><img src="/images/post/kaggle.png" style="margin: auto;"></a>
</div>

##### Question of the week

How do you do client side load balancing with gRPC and Kubernetes?

- Ray Tsang answers with a [GitHub repo](https://github.com/saturnism/grpc-java-demos/tree/master/kubernetes-lb-example)

##### Where can you find us next?

Francesc will be at [GopherCon](https://www.gophercon.com/) in Denver!

Mark will be speaking at [Google Cloud Summit, New York](https://cloudplatformonline.com/summit-NewYork-2017.html) with Phoenix One Games in July.

{{< transcript "FRANSESC: Hi, and welcome to episode number 84 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark, how are you doing?" >}}

MARK: I am very well. How are you doing? 

FRANSESC: Very good, enjoying amazing weather here in New York. 

MARK: Yeah, good for you. 

FRANSESC: I'm here for QCon. You are in San Francisco? 

MARK: I am in San Francisco, yes. 

FRANSESC: And I'm very excited about today's episode. We're going to be talking about-- so we had the episode on big data-- on data sets last week. 

MARK: Yep. 

FRANSESC: And one of the cool things that you can do with data sets is you could organize things like competitions, right? And that's what Kaggle does. And we have Wendy Kan, a solve engineer from Kaggle, that's going to tell us everything about it, which is very exciting. 

MARK: Yeah, they do some really awesome big data competition, so super glad to have them on so we can talk all about them. 

FRANSESC: Yeah, and they do have also some awesome, awesome data sets that are available for competitions, but also to anyone to play with, so really, really cool. And then at the end, we'll have a question about-- I think it was last week or the week before-- we mentioned headless Kubernetes services. And we said that, if you don't know what they mean, you should go read that article that we linked to. So today, we have a question about them partly. It's about Kubernetes and gRPC and services and stuffs. But that will be at the end of the episode. 

MARK: Yep. 

FRANSESC: But before we start, we have the cool things of the week. And we have a bunch of them today. Yeah, one of them is kind of related to an episode that we did a long time ago-- episode 72, which is like three months ago already or something like that-- it's crazy-- on the CRE-- customer reliability engineering. We had Luke Stone that came to tell us about it. Well, they wrote an article, which is really cool. It's how SRE find the landlines in a service-- CRE life lessons, which is basically what we're talking about. If you become a customer of CRE-- or more than a customer, it's almost like a partner with CRE-- there's going to be some analysis of what you're doing, your services, what are the things that might cause problems? And that's exactly what they cover in this article. It's a very, very interesting. 

MARK: Yeah, I really like this article. The particular part I enjoy is like what happens when something needs to be supported by SRE or CRE? Do I just throw it over the wall and be like, here you go, it's yours now? Or is there some kind of-- 

FRANSESC: Good luck. 

MARK: Well, yeah, exactly. Or is there some kind of onboarding process or review or how that gets taken in as a company that is then supported by CRE or SRE. 

FRANSESC: Yeah, I really like it. If you have not read the SRE book, I definitely recommend it. This is kind of like a small tiny chapter of what could be part of SRE book. It is not part of it because we're talking about CRE, which was not a thing back then when the SRE book was written, but still super interesting and really we like life lessons and what we actually do a Google, so you know, actual work experience in there. 

MARK: Cool. So for another cool thing of the week, finally-- it took a while coming-- but we do support Java 8 on Google Earth Engine. 

FRANSESC: Yay! 

MARK: This is like round of applause kind of moment. It's kind of been something. A few people have asked for it-- just a couple of here or there. No, it's been a long time coming, and I'm very happy to see it there. The other thing I kind of want to-- I feel like it's burying the lead a little bit-- but we're talking about basically fully supporting off the shelf framework such a Spring Boot but also alternative languages like Kotlin, Apache Groovy, basically anything you can turn into a wire through Maven or Gradle. So that's actually pretty exciting too. I've played a lot with alternative JVM languages, and I like them a lot. So I'm super happy to see that support getting baked in. 

FRANSESC: Yeah, and as my job is to be a little bit of a troll against Java, I will say that, finally, Java is getting Lambdas for some definition of Lambda. Anyway, also, we have something else, which is related to App Engine. We finally have [INAUDIBLE] on App Engine as beta for now, but will be available. So it is available with Go App now. If you use Go App, you know what it is. G Cloud will be supported very soon, probably by the time this episode comes out will be supported, but maybe takes a couple days more. So check it out. And it will be beta for a little bit. You can try it. Give it a try. It should work because Go is backwards compatible, but it's definitely worth trying and filing any issues if you find any. 

MARK: Cool, and last, I think, but definitely not least is a-- 

FRANSESC: Definitely not. 

MARK: --wonderfully hilarious thing. So if anyone is a fan or a viewer of Silicon Valley, you may recognize the Not Hotdog application that was made by one of its characters on the show. There's an article that talks about how this was built with TensorFlow, Keras, and React Native. 

FRANSESC: Yeah, it is an actual thing. I think it's pretty amazing that Silicon Valley-- not only they take actual people from Silicon Valley to give them advice, but also they used the same products, and they actually develop the prototype of the apps they show. It's kind of amazing. I really, really like it. It makes me want to watch the show more. 

MARK: Yeah, no, it's super, super cool. And you can see basically everything they learn about how they could make it so that you could either recognize that something is a hot dog or not a hot dog. 

FRANSESC: Yeah, it is. And the thing is that, yeah, you could write that up if you want to. If you are a huge fan of Silicon Valley, and you want to be part of a thing, yeah, I'd write the code and try it. It is actually not that hard with TensorFlow. 

MARK: And I pointed out, if you want, you can download the app from either iOS or Android. It is available. So if you ever need to know what's not a hot dog or is a hot dog, you can do that now. 

FRANSESC: Yeah, I really like-- there's someone that actually downloaded the app and took a picture of his forearm with some ketchup on top, and the app says it is a hot dog. Also a banana with ketchup on top-- it is also a hot dog, and even an apple with ketchup on top. So finally, it had been optimized for detecting ketchup. If there's ketchup, it's a hot dog. You know, you need to maybe retrain a little bit better model to make sure it recognizes better than this case. It's pretty amazing. 

MARK: Well, speaking of deep learning, why don't we go have a chat with Wendy from Kaggle? 

FRANSESC: Sounds good. Let's do that. So I am very, very happy to have today Wendy Kan, a data scientist from Kaggle. They joined Google not that long ago, and we are very happy to welcome you. How are you doing? 

WENDY: Good. Thanks for inviting me here. 

FRANSESC: Thank you for taking the time to talk a little bit about Kaggle and all the cool things you can do with it. Before we start talking about Kaggle, tell us a little bit about who you are and what you do at Google. 

WENDY: Sounds good. I'm a data scientist at Kaggle. I work with companies or organizations or research groups on the machine learning problems that they want to solve. I give them advice of what they should do to their data and how to form that into a suitable competition design, present them to our Kaggle community and for people to solve the problem. 

FRANSESC: Cool. So you mentioned competition design, which bridges really well to what Kaggle does. Tell us a little bit-- what is Kaggle, and why do people like it so much? 

WENDY: Yeah, Kaggle is a community of data scientists. We're a platform, and we're a community. And we have all sorts of things that surround the community. We're best known for our competitions, and most people know us from the competitions. We also have a very strong product that's Kaggle Kernels that people love to use. We also have a data set platform that people share open data set on Kaggle. We're really, really close to a million users now. 

MARK: Cool. So you mentioned, sort of, three things there-- data sets, Kernels, and competitions. Why don't we kind of break those down? 

FRANSESC: Actually, competitions-- I think that the first time I heard about Kaggle was when we did that announcement about the YouTube contest. 

MARK: Oh, yeah. 

FRANSESC: That was on Kaggle, right? 

WENDY: Yeah, that's my project. 

FRANSESC: Oh, nice. That is awesome. Yeah, we used it as a cool thing of the week. I don't know if anyone from the podcast participated, but it sounded like a really good opportunity to try cool things with data sets. 

WENDY: Definitely. 

FRANSESC: So, yeah, let's talk a little bit about competition, for instance. What is a competition? How does that work? 

WENDY: We run all sorts of competitions. We're a very small team, so the benefit of that is I get to touch all sorts of projects. 

FRANSESC: How small is small? 

WENDY: When we were acquired, I think we were 15 people. 

FRANSESC: Oh, wow. OK, that's small, yeah. 

MARK: OK, yeah, yeah. 

WENDY: Yeah, we have two data scientists doing competition design. So there's not really like what kind of competitions I run. We run everything. 

FRANSESC: Yeah, you do all of the things. 

WENDY: Yep. 

FRANSESC: Cool. 

MARK: So yeah, what's an example of a competition? I know we've mentioned the YouTube one, but-- 

WENDY: So I just launched one this week. It's a million dollar prize Zillow competition. It's going to be predicting house prices. That's very exciting. Everybody has a lot of ideas about how to improve their house prediction. And Zestimate has been a big thing that people talk about and use a lot. And we want to have a competition for people to basically just see how hard the problem is. And maybe it's easy and somebody can solve it better than Zestimate, and that would be great. 

FRANSESC: I was laughing about it because I'm going through the Coursera course on machine learning, and actually the first example ever is how to predict house prices. 

WENDY: Exactly. 

FRANSESC: And that is very interesting that that still goes on even when you become a professional and you're doing competitions-- still the same problem. 

MARK: Still the same problem. 

WENDY: It is very exciting because it is kind of the machine learning 101 or stats 101 problem that people want to solve. We actually had to jump through a lot of hoops in terms of getting the data and having the license to release the data. So it's not that easy to get it running, but it's very exciting. And we feel like our community will love it a lot. 

FRANSESC: Nice. 

MARK: Cool. So from a developer perspective, I want to go do this competition. What's my process for doing that, and then what's my end result? How do you determine whether I win or I lose? 

WENDY: For a normal Kaggle competition-- the Zillow one is kind of a particular example, and I'll go into that later. But for a normal Kaggle competition, you download the data from a Kaggle site or you don't download the data and use Kaggle Kernels and just do online analysis and user browser, and everything is run on the cloud. And then you can basically read through the documentation that we provide or just have fun and explore the data itself on the cloud. 

For the competitions, there's always a column or a property that you are going to project, and there's always going to be a metric that calculates how well you're predicting against ground truth-- the answer. And you basically submit a bunch of predictions in a CSV file, and we'll give you a score. And that score puts you on the leaderboard, and you can see that there are a lot of people ahead of you. You will want to improve your score and beat these people in front of you. 

One thing to note is that to do good machine learning practice, we have a public and private leaderboard to prevent people from overfitting because, when you keep predicting, you're going to overfit your model. Even if you're not trying to just cheat, your model will overfit to the ground truth. So we ask people to predict a bunch of predictions, and only some of that go into the public leader board that people can get feedback on and instantly improve their models. But the final results are determined from a private leaderboard, where people don't get the score right away. And that's revealed at the end of a competition. 

FRANSESC: Cool. So that's kind of like, when you're doing machine learning, you have like the training set and then the test set and the validation set. 

WENDY: That's exactly it. 

FRANSESC: You're actually exposing the training and the test, but not validation. 

WENDY: Exactly. We give people the training, and the validation is equivalent to the public leaderboard, and the hold out set is equivalent to the private leaderboard. 

FRANSESC: OK, cool. 

MARK: And for those people who don't know what overfitting is, what's overfitting? 

WENDY: That's when your model is learning things that it's not supposed to know-- so basically, if there's particular things and this data set that is not representative of the population, and your model basically overfits to the characteristics of this particular sample of the data. And that's an overfit. 

FRANSESC: The way I learned it, which I think is pretty cool, is you imagine that you have a bunch of points. If you have more parameters than points, you can actually draw a line that goes over every single one of the points, which doesn't make any sense, but has 100% accuracy for the data. 

MARK: For exactly that data set. 

FRANSESC: But if you give any other data, you will be completely wrong. 

MARK: Got it. 

FRANSESC: Yeah. 

WENDY: If you use the house price prediction example, it'll be like, oh, this house is $3 million, and it has-- I don't know-- a door that's broken. And so your model learns that and then predicts, if you have a broken door-- 

FRANSESC: It's $3 million. 

WENDY: --then it's $3 million. And it's not the case for all the houses, but that's, unfortunately, the sample that you pick. 

MARK: All right, and outside of competitions, you also host data sets. Is that together or separate, or what's the relationship there? 

WENDY: It is a separate offering, and that part is relatively new on Kaggle. So we host open data sets on Kaggle because we feel like Kaggle Kernels is a very strong tool for people to use. And hosting these public data sets lets people explore these data sets and share their findings on Kaggle, and also it's just for a public good. We've all been there to look for a data set, and you're just randomly searching on the internet, and then you feel like that's available. And it's a good place to find all sorts of data sets. And now it's pretty organic. So far, we published some, and the community will publish some. And a lot of times, we're surprised that this data set is here, and it's great. 

FRANSESC: So does that mean that I can use it for whatever I want to do? Like, let's say, I'm learning machine learning, right? Can I go and play with any of those data sets? 

WENDY: Yep, correct. You can do that. It's not just for machine learning, right? You can do anything. You could do exploratory analysis that's not predicting anything on those data sets. So it's a wide range. It ranges from how ISIS uses Twitter or like the Pokemon statistics data set or like we found the "Bachelorette" and the "Bachelor" data set on it. So yeah, it's pretty cool. And now, even if I just want to find some example, if I want to make a demo to somebody very quickly, I'll go and look for some new data sets to show off. 

MARK: And these are data sets that can be submitted by anybody, or-- 

WENDY: Yes. 

MARK: So they are community powered. That's really cool. So we keep mentioning Kernels, but we should probably talk about exactly what that is because I think it's actually super, super cool when I had a look at it. 

WENDY: So Kaggle Kernels has-- I think we launched it, maybe, like two years ago. You go to kaggle.com/kernels. It's very simple. It takes care of basically everything that a data scientist needs for very quickly run some code to analyze data. So you click open a notebook or open a code, and it pops up in your browser, and you start editing your code. And the data is there, depending on if you're in a competition, then the competition's data is all in there. If you're in a data set, the data set's data is all there. 

So as a data scientist, before, a lot of times, you go in, and you receive a new data set, and you want to explore it. If you don't have a computer that you have already set up spending hours and hours of installing packages, then you're going to spend hours doing that. But for this one-- also, ours uses a Docker image, and that's community maintained. So most of the packages that people want to use are already in there. So it's pretty convenient. It's also a great place to show off your work and to benefit from other people's work. 

Usually, when you run it, it already becomes public, so people can see it. So if you want to say, I have this new text data set, and I want to see what other people do with it, and then you read other people's notebook, and they really did this amazing analysis. And you can be like, oh, I have this new idea that they can expand from, then it's just like GitHub where you can fork it, and then you can make a new version. With that, you still don't have to download any code on your computer. It just all stays on the cloud, and you only need the browser to do that. 

FRANSESC: Cool. So you have all of these big data sets, and people can provide data sets. Then you also have these analyses like the Kernels, where people can provide code that you run on that data set. And all of this runs in the cloud. Who pays for this? Do you need to pay for it, or how does this work? 

WENDY: So right now, Kaggle pays for all of that. 

FRANSESC: OK. 

WENDY: Of course, because it's a free product, we have a limit on people, like how long you can run the code for, and there is a memory limit. In the future, we definitely-- probably after the integration with GCP is complete, we'll see if there is a way to let people to customize what they want to try to run in. For example, there is a lot of network stuff that needs to be run on GPA for it to be fast. Right now, we don't have that capability. We know that GCP has it, but we'll need to enable that and then see where it goes. So that part is kind of an unknown, but so far, we have a pretty widely used interface for a community that's using it very actively. 

FRANSESC: Yeah, I'd love to actually interview the team again once you have finished the migration to GCP. And say, if you're using TPUs or GPUs and all that stuff, that would be a very interesting episode. 

WENDY: Definitely. 

MARK: So yeah, that's a really great segue into-- so recently-- well, recently-- a few weeks, months, something like that, you were acquired by Google Cloud. What does that mean for Kaggle? I mean, you talked a little bit about moving over to our infrastructure. Is there anything else you can discuss? 

WENDY: The acquisition definitely is a big change for our life. We moved over to Google offices and are using Google computers. We are still operating as an independent brand. We kept our Kaggle emails. We have our site, and we are still mainly focused on growing the Kaggle community. And we want to bring the best content and best product to our users. So that still doesn't change. That's still always our goal, and we want to bring the best to our community. 

The change for Kaggle and GCP integration is upcoming, and it's probably not going to be very obvious to our users because it's going to be in the back end. Right now, the community knows that Kaggle is run on Azure. Lot of codebases are based on C#, so that's kind of a big challenge to move over to GCP. And we're definitely investigating on what can be done and what needs to be done. So it's going to be a slow process. It's not going to be anything fast. And of course, the main focus is we want to grow our community, so the integration is second. And we believe that it will be the best for our community because of Google's infrastructure and the powerful computers. 

FRANSESC: Cool. So I guess that, since you mentioned C#, now I'm curious about-- so most people that do machine learning, nowadays they do use Python and some libraries. One of those libraries is TensorFlow. Is TensorFlow something that you can use on top of Kaggle? Is that the only thing you can use? I'm assuming not since you were mentioning C#. Well, how does that work? What libraries is going to use on a Kernel? 

WENDY: Yeah, just a clarification-- the C# is kind of what the site is run on. So the site doesn't have-- can't really say it doesn't have Python, but majority is in C#. There's maybe-- 

FRANSESC: Just Python hiding everywhere. 

WENDY: Right, but our Kaggle Kernels-- what the data scientists would use and what I use are Python. And so in Kaggle Kernels, there's no C# obviously. So yeah, talking about TensorFlow in the frameworks-- it's a good question. TensorFlow is available on Kaggle Kernels not because of the acquisition. It's just because it's a popular framework for people to use, network on, and now a lot of other things. It's a great framework, and it's getting a really great momentum for people, especially that Keras has always been a community favorite for deep learning framework, and now Keras has switched to using TensorFlow as back end. So it's becoming more powerful, and that has been a favorite for Kaggle. 

FRANSESC: You mentioned Keras. What is Keras? 

WENDY: Keras is kind of a higher level framework for using deep learning. It's great that people love to use it because you don't have to worry about a lot of the detailed setup. You could say I want to layer this, and I want a model of this shape, and it's very easy to use. And what's great about it is that it can connect to different frameworks on the lower level too. 

FRANSESC: I see. 

WENDY: So it's very heavily used by Kaggle communities, and you'll see a lot of Keras usage on Kaggle Kernels, and just generally, people use it a lot. And I know the-- 

FRANSESC: How do you write Keras? 

WENDY: How do you write it? 

FRANSESC: How do you write it if I want to search it because I would say C-A-R-R-O-S, Carros? 

WENDY: Oh, it's K-E-R-A-S. 

FRANSESC: Cool, OK, Just in case someone wants to search it. 

WENDY: The author actually is now at Google. 

FRANSESC: Sorry? 

WENDY: The author is now at Google. 

FRANSESC: Oh, nice. 

WENDY: Yeah, so that's the TensorFlow integration. 

FRANSESC: Cool. So on top of TensorFlow, then, you can also use other libraries like if you want to use-- I actually don't know of any other library other than TensorFlow for machine leaning, but I'm sure there is. 

WENDY: Yeah, there are. Kaggle wants to remain very neutral on these tools, and we want people to use whatever tools that they prefer. So we don't specify. We don't push for people to use anything because people should feel free to use whatever they want to use. And I mentioned Keras. There's also great frameworks like Caffe that people use a lot, and these days, a lot of people start to use PyTorch-- definitely a lot of different frameworks that people prefer to use. 

And generally, we just love to have a diversity of different frameworks on our site, and I know our community was concerned when we got acquired that's we're going to heavily push TensorFlow or stuff like that. And it's definitely not our position to do that because we feel like we're just a platform. We want people to use the best tools that suit their needs. And we give content, and people choose their tools, and we'll support them. 

MARK: So really, it's about just providing the underlying infrastructure to them as they need it, so like GPUs or bigger memory sizes or anything else they can take advantage of. 

WENDY: Exactly. I do feel very excited about TensorFlow for my own use. Kaggle has always been-- we have these competition sponsors, and they're looking for a solution. And the community would provide them with a great solution. But for over the years, it's always been kind of a disconnect between the prototype that the Kaggle community provides and what they can actually put in production. So a lot of times, first, it's like heavily ensembled, which means just like a lot of different models are put together, averaged, and it's not very production friendly. And I'm hoping that, with TensorFlow-- I know how Google is investing a lot of infrastructure on making these things production-ready, and hopefully, these would make the transition between the prototyping and the production work easier. And that would be a great benefit for our customers and for the community too because you're doing all these fun work on Kaggle, and then if it's not another tough project to put it in production then, it would be awesome. 

FRANSESC: Cool. So just to go a little bit over all the things we went over-- so Kaggle has data sets, and those data sets are allowed for-- anyone can contribute new data sets, and you can use them for whatever you want. You can download them and train them by yourself if you want to. 

WENDY: That's correct. 

FRANSESC: You also have Kernels, which is basically like scripts that you're going to be using to train some models. 

WENDY: Correct. 

FRANSESC: And again, anyone can go and see them, and you can participate into it like forking them and improving them and whatever. 

WENDY: Yes. 

FRANSESC: And then on top of that, you have competitions. 

WENDY: Yes. 

FRANSESC: Can you also contribute competitions? 

WENDY: Yeah, definitely. So we have been working with-- this competition is almost coming to an end that you guys have announced-- it's the YouTube competition. Anyone can propose a competition to us, and we'll definitely talk to people. You'll have to have the data. You have to have a problem in mind. A lot of my work is talking to people and understand what they want to solve. They have an idea, and then they have a data set. And a lot of times, the data set really doesn't solve the problem. 

So I could brainstorm with them. Well, your data set is about-- I don't know-- people's bank activities, and you want to predict climate change, and it's not really related. But you could probably predict if this person's going to go to a bank and open a checking account-- you know, things like that. We provide that service, and then we select things that are helpful and are interesting and are meaningful to our users. And hopefully, it lets people to touch data and problems that they normally don't have the opportunity to touch in their normal daily lives and to try new things. So that's very exciting. 

The other thing that's exciting about-- I was talking about the YouTube competition-- is that, normally, in the past, for Kaggle users, we have smaller data sets and smaller computing power. And this one, we're using Google Cloud, and it's a large data set that people normally don't have access to. I think it's like 7 million videos or something. 

MARK: I remember that. 

FRANSESC: Yeah, I remember there was like 8 million-- the contest is YouTube 8 million, but then there's 8 million videos. 

MARK: There are 7 million videos. 

WENDY: Yes. 

FRANSESC: Yeah, which is OK. 

MARK: Because there's 1 million in like training data. 

FRANSESC: Yeah, 7 million is a training data, and I think that 1 million is the validation or something. 

MARK: You would know. It's your competition. 

WENDY: I think the story is actually they released the first version of YouTube 8 million, and oh, that's one thing that is special about Kaggle competitions is that, if it's publicly available data, then people know the answer to the competition, then we can't run that competition if it's already public-- can't ask people not to cheat. 

FRANSESC: What do you mean if they know the answer? 

WENDY: So for example, if we asked people to predict like the presidential election of 2016-- 

FRANSESC: Oh. 

MARK: Oh, I see. 

FRANSESC: OK, yeah. OK. 

WENDY: Yeah. 

FRANSESC: Predicting things in the past tends to be easier. 

WENDY: Right, exactly. So they had to analyze new videos and release these kind of with Kaggle and then hide some of the labels for us in order to make the competition fair. So that's the 7 million. 

MARK: Got it. 

FRANSESC: Nice. Well, we are running out of time. I am super excited. Ad I said, I'm learning a little bit of machine learning, and it feels like Kaggle is the perfect place to keep on learning more and play with a bunch of data. Is there anything else that you like to mention, something that we might have missed? 

WENDY: Yeah, join our Zillow competition. It's the biggest prize ever. It's a very-- 

FRANSESC: That's a lot of money. 

WENDY: Yeah, it's enough money for you to buy a house. 

MARK: Maybe not in San Francisco. 

WENDY: Right. Maybe a studio. 

FRANSESC: Small house with a broken door. 

WENDY: Join that competition. And we're also very excited that we're going to welcome our million user very soon. So yeah, so Kaggle is doing well. And we definitely hope more people will join Kaggle and start exploring and learn data science with us, with the big community. 

FRANSESC: So thank you so much to Wendy Kan for spending her time explaining a little bit about what Kaggle is and all the cool data sets that they have, the amazing competitions, and how you can make money by being a data scientist-- pretty good experience. 

MARK: Yeah, it looks like a really great way for people to sort of get together and collaboratively work on machine learning projects using big data, which is super cool. 

FRANSESC: Yeah, I don't know-- it really feels like it's the kind of thing that, if you're a student, you should definitely try because, at worst, you're learning, and at best, you're making money. So I'd say go for it. And I think it's time to go for our question of the week. The question of the week-- I'm going to ask it because the answer is, I think, you're going to probably give it better than me. But it's OK. 

I want to do client side load balancing with gRPC and Kubernetes. So if you have the Kubernetes service, what you get from the service normally is 1 IP, which is virtual IP, that you send your request there, and somehow it gets load balanced to a bunch of pods that are behind. But the problem is that, as long as you keep one connection with gRPC, you will send all of your requests all the time to the same pod until that pod restarts, and then you will send it to someone else. But what if I want to actually distribute that load across all of the pods that are available? How do I do that from the client? 

MARK: So yeah, this is kind of a fun problem and something that's been talked about a lot in gRPC. I'm sure you can find lots of threads on it. The basic answer for gRPC is what you often do is what's called client side load balancing. So basically, you feed a series of IP addresses to your gRPC client, then you tell it how you want to load balance it, so like round robin, right? It does one then the other then the other and the other, and it goes back around again. So the fun question becomes how do I get all those IP addresses? How do I tell it the 4, 5, 15 IP addresses and ports that it needs to know to connect to and then can then subsequently send and distribute those requests across those IP addresses? 

So inside Kubernetes, there's a couple of nice ways of doing it. We'll link in the Show Notes to a GitHup repository that one of our other teammates, Ray Tsang, started as a Java example because I know Francesc is all about that all the time. 

FRANSESC: I love Java. 

MARK: Exactly. We chose two different ways. So one way is using DNS service discovery, which is a built in tool kit that comes with gRPC. So last week, I want to say, or several weeks ago-- can't remember now-- we talked about headless services in Kubernetes. So what those end up being is, rather than having a single DNS entry does a load balance itself like a service head load balancer that points out to all these pods behind it, what it actually has is a DNS entry but with multiple A records, each with an A record the points to the IP address of the various running instances behind it. So basically, you can hit that DNS and be like, hey, give me your A records, and that gives you the catalog of all the pods behind so you can get access to all of those running instances and know their IP addresses and connect to them. 

FRANSESC: So then if I'm the client, then I get the list, and I can go over all of the IP addresses in that list. But what if I have many clients? 

MARK: Do you have many clients? That's fine. You can do that for every client that ends up connecting. That's totally cool. 

FRANSESC: Yeah. 

MARK: And what's great is gRPC comes with a DNS name resolver middleware that you can drop in that understands, oh, if you have multiple A records on this DNS record, then I know that I should be round robining around those, I should be load balancing across those, given a certain strategy. 

FRANSESC: Yeah, and on top of that also, Kubernetes will rotate the order of IPs every single time you get the DNS. So if you get a bunch of different clients connecting to the-- 

MARK: Oh, nice. 

FRANSESC: --DNS, you will actually end up hitting, by default, to some kind of round robining, at least on kind of load balancing automatically on top of the load balancing that you might want to do, which is pretty cool. 

MARK: That is really cool. Now, there's another way you can also do it, which is kind of neat as well. And Ray gives us another example for that wherein you can query the Kubernetes API service discovery, so it's got a whole API in there where it's like, hey, would you like to tell me all the IP addresses? So rather than going through DNS, you can do it through that way as well. So there's a couple of different ways you can do it as you need to, depending on your wants and/or needs. 

FRANSESC: Yeah, I wrote a little code doing exactly that, using the Kubernetes API. But rather than coding the Kubernetes API every time, what I did was I had a little side guard that actually got notifications from the Kubernetes API because you can watch something. So you watch the list of IPs, and every single time there's a new pod or a pod that disappears, you're automatically notified. So whenever you want to send a request, you already have the list, which makes it faster. So yeah, lots of really cool ways to do the same thing. Really go with the one that works better for your workflow. 

MARK: Absolutely. All right, well, before we finish up, I know you're at QCon right now, but what have you got going on, Francesc? 

FRANSESC: So yes, I am at QCon right now. By the time this episode will be out, I'll be back to San Francisco hopefully. And right after that, I will be out to GopherCon in Denver-- very excited about that. I'm going to be running a couple of workshops. So it's going to be pretty intense, looking forward to meeting all of my dear Gophers from all around the world. What about you? 

MARK: Well, I'm not going anywhere for a little bit, but in July, I will be in New York for the Google Cloud Summit. I'll be there presenting with Phoenix1 Games. 

FRANSESC: Nice. That sounds really fun. What day is it? 

MARK: It is the 18th of July. 

FRANSESC: Perfect. I will not be there. I'm actually taking that week off completely, so while you enjoy New York, I will be enjoying some holidays. 

MARK: Very nice, very nice. Well, Francesc, thank you again for joining me for yet another episode. 

FRANSESC: Thank you, Mark. And thank you all for listening. 

MARK: And we'll see you all next week. 
{{< /transcript >}}