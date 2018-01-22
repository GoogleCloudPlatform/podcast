+++
audioDuration = "00:26:02"
audioFile = "Google.Cloud.Platform.Podcast.Episode.109.mp3"
audioSize = 37722895
categories = ["Cloud AutoML Vision", "AutoML", "Transfer Learning", "Neural Architecture Search", "Machine Learning"]
date = "2018-01-17"
description = "Amy Unruh and Sara Robinson share about the launch of Cloud AutoML Vision."
draft = false
episodeNumber = 109
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Cloud AutoML Vision with Amy Unruh and Sara Robinson"
#image="images/post/iotcore.gif"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/9jB9Nr9jksR"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/7r1bcc/episode_109_cloud_automl_vision_with_amy_unruh/"
+++

[Amy Unruh](https://twitter.com/amygdala) and [Sara Robinson](http://twitter.com/SRobTweets) join the podcast this week to talk with [Mark](https://twitter.com/Neurotic) and [Melanie](https://twitter.com/nyghtowl) about the alpha launch of Cloud AutoML Vision. 

Cloud AutoML is a suite of products enabling developers with limited ML expertise to build high quality models using transfer learning and Neural Architecture Search techniques. AutoML Vision is the first product out the gate with a focus on making it easy to train customized vision models. 

<!--more-->

##### About Amy Unruh

Amy is a developer relations engineer for the Google Cloud Platform, where she focuses on machine learning and data analytics as well as other Cloud Platform technologies. Amy has an academic background in CS/AI and has also worked at several startups, done industrial R&D, and published a book on App Engine.

##### About Sara Robinson

Sara is a developer relations engineer on Google's Cloud Platform team, focusing on big data and machine learning. She worked on providing initial product feedback and building a demo for the AutoML Vision launch.

##### Cool things of the week

- Google Brain Looking Back on 2017 [blog](https://research.googleblog.com/2018/01/the-google-brain-team-looking-back-on.html) 
    - Shout-out to [Kaz Sato](https://twitter.com/kazunori_279) for his [TensorFlow Rock Paper Scissors example](https://www.blog.google/topics/machine-learning/tensorflow-lends-hand-build-rock-paper-scissors-machine/)
- Running dedicated game servers in Kubernetes Engine [blog](https://cloudplatform.googleblog.com/2018/01/running-dedicated-game-servers-in-Kubernetes-Engine-tutorial.html)
- Kaggle Learn [site](https://www.kaggle.com/learn/overview)

Honorable mention...
-  Scientists put a worm brain in a lego robot [blog](http://www.sciencealert.com/scientists-put-worm-brain-in-lego-robot-openworm-connectome)

##### Interview

- Cloud AutoML: Making AI accessible to every business [blog](https://www.blog.google/topics/google-cloud/cloud-automl-making-ai-accessible-every-business/)
- Cloud AutoML Vision [site](https://cloud.google.com/automl/)
- Cloud AutoML Vision Access Request | Whitelist Application [form](https://services.google.com/fb/forms/cloudautomlalphaprogram/)
- Cloud images example [video](https://www.blog.google/topics/google-cloud/cloud-automl-making-ai-accessible-every-business/) 
    - Shout-out thanks to [Rob Carver](https://twitter.com/wundersooner) for domain expertise in helping label cloud images. 
- Coastline images example [readme](https://storage.googleapis.com/aju-demos-coastline-images/metadata/README.txt) and filenames [csv](https://storage.googleapis.com/aju-vtests2-vcm/metadata/coastline_shuffled.csv) 
- Using Machine Learning to Explore Neural Network Architecture [blog](https://research.googleblog.com/2017/05/using-machine-learning-to-explore.html)
- Learning Transferable Architecture for Scalable Image Recognition [arXiv paper](https://arxiv.org/abs/1707.07012)
- Neural Architecture Search with Reinforcement Learning [arXiv paper](https://arxiv.org/abs/1611.01578)
- Progressive Neural Architecture Search [arXiv paper](https://arxiv.org/abs/1712.00559)
- Learning2learn [video](https://www.safaribooksonline.com/library/view/oreilly-artificial-intelligence/9781491985250/video314918.html)
- Cloud Vision [site](https://cloud.google.com/vision/) [docs](https://cloud.google.com/vision/docs/)
  

##### Question of the week

How does someone in academia get GCP credits?

- Google Cloud Platform Education Grants [site](https://cloud.google.com/edu/)


##### Where can you find us next?

Melanie is speaking at [AI Congress](https://theaicongress.com/) in London Jan 30th and she will be at [FOSDEM](https://fosdem.org/2018/) in Brussels in Feb.

Mark will be at the [Game Developer's Conference | GDC](http://www.gdconf.com/) in March.

{{< transcript "MARK: Hi, and welcome to episode number 109 of the weekly Google Cloud Platform podcast. I am Mark Mandel, and I'm here with my colleague, Melanie Warrick. How are you doing today, Melanie?" >}}

MELANIE: Morning, Mark. It's good to see you. 

MARK: Yeah, bright and early. 

MELANIE: Bright and early. Just after MLK Day. 

MARK: Indeed. We have some great content this week you helped organize, and it it's a really cool episode, talking about AutoML with Amy Unruh and Sara Robinson. 

MELANIE: Right. We are releasing the cloud AutoML Vision this week, and so we wanted to get them on the podcast, because they both have been working with the application, and they have some cool examples that we're going to put in our show notes. But before we get to the interview, as always, we're going to talk about the cool thing of the week. And stay tuned after where we're going to ask the question, if you are with an educational institution, how can you Google Cloud Credits? 

All right, first cool thing of the week. Google Brain actually posted out a looking back on 2017 and some really top of mind interests for them. And so AutoML is actually one of the subjects that's in their blog. But they also touch on things like speech understanding and generation, as well as TPUs, and they give some great links to different data sources that you can explore for machine learning. So it's a good blog post to check and see how they saw 2017. 

MARK: Nice. 

MELANIE: Mark, you got any other cool things of the week? 

MARK: Yeah, I'll interrupt your ML fest. 

MELANIE: I know, it's all about ML now with me. 

MARK: It's all about ML, I know. No, that's good. I'll bring it back to two of my passions, actually. So there's a new solution that's come out about running dedicated game servers for multiplayer games in Kubernetes engine. I know many people have probably seen my blog post series talking about doing the very similar thing, but there's now an official solution that has been released. There's a blog post we'll link in the show notes, and the solution itself, talking specifically about how you can do this on Kubernetes engine on Google Cloud Platform. So if you're building multiplayer games and work in the games industry, go have a look. 

MELANIE: Nice. And then the other cool thing of the week that we wanted to mention is that Kaggle has launched their data science education resources and tools, and I guess just actual program that's on their site. We'll have a link on our site as well as always, but this is being headed up by Dan Becker and Rachael Tatman. And they are covering subjects like machine learning, data visualization, and deep learning. And they're focusing most of the course content in Python. So you should check that out. 

Couple other honorable mentions, because we couldn't resist. We heard about-- apparently they've done all this research in terms of trying to map neurons in the brain a couple of years back now, or I guess-- I'm not sure actually how long ago they were able to accomplish this with a worm. Well apparently, recently scientists were able to take what they've mapped and put it into a Lego robot. So we'll put a link to that. It's got a video and everything associated to it. 

MARK: It's really weird. I'm watching this video of the thing, and like, there's a worm that's making this thing move around? 

MELANIE: I know. I know. It's kind of fun. And then the other thing I meant to mention with the Google Brain look back-- they actually referenced Kaz Sato, who's one of our colleagues. He did a rock paper scissors example with TensorFlow. And him and his son apparently put this together, and they actually have some video about how they make it work, which is kind of fun. So they play against this tool that they built. 

MARK: Very cool. 

MELANIE: So we'll list that as well. 

MARK: Awesome. Sounds good. 

MELANIE: So now let's go talk to Amy and Sara. 

MARK: Let's do that. 

MELANIE: This week's podcast, we are joined by two of our colleagues, Sara Robinson and Amy Unruh, who are our developer relations engineers. Hi, good morning. 

SARA: Morning. 

MELANIE: So can y'all all tell us a little bit more about yourselves and what you do? 

SARA: Sure. Amy, you want to start? 

AMY: Sure, yeah. So I'm a developer relations engineer for the Google Cloud Platform. And I have a background in AI and machine learning, and focusing on those areas right now. In previous lives, I've worked for startups and done industrial R&D, and even written a book about App Engine. 

MARK: Nice. 

MELANIE: Great. Sara. 

SARA: Awesome. I'm on the same team as Amy. We're focused on big data and machine learning. I come from more of a self-taught background, and before I was on the Cloud team, I was a developer relations engineer on the Firebase team at Google. 

MELANIE: Great. So the reason why we have both of you here today is because today we are releasing cloud AutoML Vision, and we wanted you both to help share a little bit more about what that's about. So can you tell us what that is? 

SARA: First I'll talk a little bit about the products that we currently have if you want to do image recognition on Google Cloud Platform. So right now your options are to use the Vision API, which is a pre-trained model that gives you access to this model with just one REST API request. So you can send your image to the API. You get back a bunch of data on what it thinks it's a picture of. 

If you want to do something more custom, so the vision API doesn't require any training data of your own. If you have a problem that is more specific to your use case, you can build and train a custom model with TensorFlow and use your own training data to train and tune the model. But there's kind of been a gap in our current product offerings, and that's why we're really excited about Cloud AutoML Vision. 

So what Cloud AutoML Vision lets you do is it lets developers that don't have too much machine learning expertise to build high quality models. So the way it works is you upload your images. They can be either a labeled or unlabeled data set to Cloud AutoML Vision UI. You just press a button to train your model. And then you can access your model with an easy to use REST API. 

AMY: So under the hood it's using both state of the art transfer learning and something called neural architecture search. Transfer learning-- essentially what that is is you leverage an already trained model-- it's already trained weights-- and it turns out that the so-called embeddings that are learned as part of the process of training this model incorporate really useful abstractions related to image classification that transfer to things that the original model wasn't actually trained on. 

So you can essentially take an already trained model and tap into it at the so-called bottleneck layer-- a layer of embedding just before the output of the model-- and use that to bootstrap training of new image classifications so you can take a neural net that's trained on a bunch of things like different animals and boats and cars and things like that. And you can train it on new data set, your own data, new classifications, very successfully, without needing very much data. So that's transfer learning. 

MELANIE: So with our previous Cloud Vision API, people were able to use it for problems. But a lot of times their image analysis. But they were limited to what's provided in that Cloud Vision API? There wasn't as much flexibility for their specific datasets? Is that what I'm understanding? 

AMY: Yeah, that's correct. So the Vision API has a fixed set of categories that it recognizes. A very large number of categories, but it's still fixed categories. So if you're in a specialized domain, it's not going to distinguish your own domain specific categories the way that you would like it to. 

MARK: I was going to ask, what sort of categories would you be talking about, then, that you think are quote unquote "specialized"? What does that mean. 

AMY: Well, one really good example-- one of the early customers is using AutoML Vision to try to do specialized training of large number of different wildlife categories. So this is something that AutoML vision is not going to be able to detect with the right level of specificity. 

SARA: Another possible example is, let's say you work in the manufacturing industry, and you've got very specific parts that you're using on some sort of assembly line, and you want to determine whether there's a faulty part in some sort of the process. So likely you have a lot of training data, images of different parts of this assembly line. You could train a custom model to identify a broken part. 

MELANIE: And that's with the AutoML vision that's been released as of today. 

SARA: Yeah, so when we would speak about the Vision API before, the first question we would always get is, how can I make this more customized? Until today, we didn't have an answer for that. So that's why we're super excited about AutoML Vision. 

MARK: So Sara, you said something a little earlier that I actually just wanted to come back to you said that people could provide both labeled and unlabeled images. Like, I can get what happens with labeled images, right, so there's pre-- but if I hand somebody unlabeled images, how does that work? Doesn't somebody have to provide the data about what something is? 

SARA: Yeah, so this is pretty cool. One feature of AutoML Vision is that you can have a team of in-house human labelers that will review your instructions and they'll classify your images for you. So often, people have already labeled their data sets. But there's some cases where you might just have a bunch of images that are unlabeled. 

So the way this works is you provide a few instructions. So for the image categories that you're hoping the labelers will use to label your images, you can provide a few what they call exemplar images, to say, this is a really good example of whatever specific label you're trying to provide, and the human labelers will work on labeling your images accordingly. And you'll get a set of labeled images back that you can fit into AutoML Vision for training. 

MELANIE: Oh, so there's human labelers who can help with this. 

AMY: And AutoML Vision also has a nice UI. It'll detect, if you give a data set, not all of the images in the dataset have to be already labeled. And it'll identify the ones for you that aren't labeled and, has a nice UI that lets you label them interactively if there aren't a huge number of them. 

MELANIE: Kind of touching further on this labeling, we were talking a little bit about this before, how is this different between AutoML Vision and the original Cloud Vision API-- for labeling? 

AMY: Cloud Vision API only exposes the prediction aspect. It doesn't let you provide your own labels at all. You give it images, and it tells you the classifications that it's detected. But you cannot treat it with your own images and your own labels. 

MARK: I was just curious as well for the developer point of view-- how does that look? Is there like a special API I need to push my images to? Do I push it to Google Cloud storage? What's that flow look like? 

SARA: Are you talking about generating the predictions? 

MARK: Yeah, so if I want to provide my own images and do my own labels, how do I get that in? 

SARA: Yeah, there's a couple of different ways to do that. So first, if you want to try out your model right away once it's been trained, you can actually upload images for prediction in the UI and see what predictions you get back. But then obviously after you do that, you'll want to build an app that probably queries your newly trained model. 

And to do that, you can either use the Cloud ML engine Prediction API or you can use the Cloud Vision API. So if you're already using the Vision API in production, and let's say you want to switch, you have a lot of training data, you want to train a model on AutoML, you actually just have to make a few small updates to the way your Vision API request looks. So instead of label detection, you would use custom model detection, and then you pass it the ID of the model that you just trained, and you're good to go generating predictions with the Vision API. 

MARK: Sweet, and if I have a whole bunch of data I want to upload, I'm guessing I'm not going to do that through the UI. There's some sort of automated pipeline for that? 

SARA: For training? 

MARK: Yeah. 

SARA: Yeah, so you can either upload images locally from your computer or you can put all of your images in Google Cloud Storage and then create a CSV file with the URL of your image and the associated label if you have one. 

MELANIE: And if I have any new images after I've got a trained model, what would that look like for this? 

AMY: You can iteratively add new images to your dataset, so that works well. And then you can just retrain once you've added the new image. 

MELANIE: Great. And then you're saying it's a graphical user interface that's going to be provided basically on the GCP website in the same areas they can find the other APIs? 

AMY: Currently it's a little more standalone in terms of the URL, 

MELANIE: OK. 

But it's a very nice UI that lets you inspect valuation results, run online predictions, the whole deal. 

SARA: Eventually it will be part of the cloud console, but the alpha version, as Amy mentioned, is a separate UI. 

MARK: OK, cool. Sara, you said something else in passing too, and I think it's probably worth going a little deeper on, where you're talking about, once you've got a trained model that works in Cloud Vision API, you're able to access it through the Cloud Vision API, which is really cool. But the second thing you said was, you're also able to export it through the Cloud ML Engine. Can you just talk a bit about what that product is and how that would work, for people who aren't familiar with Cloud ML Engine? 

SARA: Sure, yeah. Cloud ML Engine is a product that we provide that lets you build your own custom TensorFlow a model, and then you can use ML engine to run your model training in the cloud, and also to deploy your model for serving. And this is actually what auto m-l vision is using under the hood. So if you're already using Cloud ML Engine and you're more comfortable with that API for generating predictions, then this is just another way that you can generate predictions with AutoML. 

MELANIE: All right. Amy, you were touching before on the neural architecture search technology. There was some blog post that was released in November around some of the work that was done, analysis to scale that. Can you tell us a little bit more about what that is and how that's used? 

AMY: Yeah, so we'll point to some links in the show notes. What's typically meant by neural architecture search is performing some type of neural net based search of neural net architectures that are useful for a particular task. And there are different variants of this-- for example, there's an evolutionary approach, and there is a reinforcement learning based approach. 

In one type of neural architecture search framework, there is something called a controller part of the framework. It's a recurrent neural net, and what it does is it samples child networks with different architectures, tries at different architectures, and then the accuracy of a given child network is used to update the controller for its next round of architecture generation. 

One key insight is that for image classification problems for example, you often use convolutional neural nets-- they often have repeated motifs. Like, for example, different combinations of convolutional filter banks. And so sort of a key observation then is that you can build interesting new architectures in your search space of new architectures by stacking up these motifs, these different pieces of the neural net. So that's the technology behind what we're using here. 

AutoML is leveraging the results of some of this neural architecture search technology, and in particular kind of leveraging the ability to explore the search space by kind of stacking up generic cells. So it's very interesting stuff. And again, we'll put some links in the show notes. 

MELANIE: And that's great. And my understanding too is that the nice thing is that this type of approach is allowing us to then do AutoML, not require that people who are using the tool to really have a PhD in ML to have to know and be an expert in terms of building models and tuning models. 

AMY: Exactly, yeah. 

MELANIE: That's the whole intent behind it. 

AMY: And in fact, perhaps we should have mentioned this earlier when we were talking about transferor learning, those who are a little more familiar with neural nets might have tried, for example, to do transfer learning examples using TensorFlow. And so if you've tried that, you'll know that it takes a little bit of coding, and you have to kind of figure out how to plug things into each other. 

So with AutoML Vision, there's none of that. You don't need to do any coding yourself or figure out any of that. But you're leveraging state of the art approach kind of in the same manner. 

MELANIE: Great. In terms of AutoML, we've been talking about it as Cloud AutoML Vision. It's focused on vision. Is there intent, or what's the future look like for this? 

SARA: Yeah, so this is just the first of the AutoML products. We can't talk in too much detail about what's coming next. 

MARK: Aww. 

SARA: I know, it's a bummer. There are teams that are actively working on other products under this AutoML umbrella to accomplish other common machine learning tasks like we already provide in our Cloud ML APIs. 

MELANIE: So more's coming. I mean, this tool in particular is playing into this whole democratizing MLs, trying to make things easier for people to apply ML to their products and services. 

SARA: Yeah, definitely. So if you're coming from an app developer background, and you don't have any machine learning experience, this tool provides a really easy to use UI for you to be able to train a custom model and then just use one API call to generate predictions against it. 

MELANIE: So part of the reason why we got the two of you together was also because you guys have been doing some demos around this. Did you want to speak a little bit to what kind of demos and what it's been like using the API? 

SARA: So yeah, it's been great to be able to try out this product and provide feedback before the launch. And one demo that I worked on is I compiled a data set of cloud photos, because I thought it would be cool and kind of funny if I used the cloud to recognize clouds. 

MARK: Nice. 

SARA: So what I didn't know before I started doing this is that there's over 10 different types of clouds. And they all-- 

MELANIE: Only 10? 

MARK: Yeah, I would have expected more. 

SARA: There's definitely more. There's like 10 high level types. 

MELANIE: I was going to say, I thought clouds were like snowflakes. Go ahead. 

SARA: Yeah, if there's any meteorologists listening, they'll probably say that there's way, way more than 10. But I boiled it down to 10 categories, and all of these different types of clouds obviously reveal different things about upcoming weather patterns, so you can use images of clouds to predict weather patterns. And so I wanted to see if I could build a model that was able to detect different cloud types. 

While doing some research on this, I tried out the Vision API, so I got a couple different types of cloud images, sent them to the existing Vision API, and the Vision API was able to identify them as clouds, obviously, but it didn't really get more specific than that. Which is fine, we wouldn't expect it to be able to recognize different types of clouds. 

So what I did is I gathered training data. I got a bunch of different images of all of these 10 types, and I used that to train a model with AutoML, and it ended up working very well. So now I'm able to feed an image of a cloud to the model, and it can tell me what type of cloud it is, and using that I can predict maybe what type of weather is coming. 

And actually to do this, I worked with a meteorologist at Google. His name is Rob Carver. He was a huge help in making sure that I labeled these images correctly. Obviously I'm not a domain expert in identifying types of clouds. So he was able to help both in finding photos and labeling them correctly. So that was a huge help. 

MELANIE: Great, and Amy, what about your demo? 

AMY: So I've been experimenting with a dataset of coastline images taken by drones. And this is a data set courtesy of Texas A&M that they were nice enough to make public. So we'll release it in this show notes. So this is a data set full of images labeled with all sorts of esoteric labels-- and things like expose riprap structures, whatever those are. Sheltered scarps. 

MARK: I don't know what that is either. 

AMY: Salt brackish water marshes. Images labeled like that. And so I'm experimenting with how well can I use AutoML to be able to correctly label new such images. And I should add something we haven't really talked very much about, the AutoML UI has a really nice interface for inspecting what kind of results you got from your training, things like area under the curve, precision recall metrics, the so-called confusion matrix that lets you see how well your prediction did for each label. 

So this has been really helpful because I've been experimenting with this, and I'm finding that some of these different coastline types are predicted really easily, and some not so easily. And that would be an indication, maybe, of where you wanted to find more data and retrain your model. So it's been really fun to play with. Again, we'll put in the show notes links to this so you can experiment with it yourself if you want to. 

MARK: So basically, to sort of hit home that point some more, even if I don't have a PhD in machine learning, I can still work out how accurate my predictions are and see where my data set may be failing just through the web UI that's kind of just given to me. 

AMY: Yeah, or maybe not failing so much as just needing a little more data. There's really nice visuals on that, actually. You can pick a given label and you can see color coded little thumbnails, things like the false positives, the false negatives, the true positives, et cetera. So you can just scan for a given category, again, where the categories are things like sheltered scarps, and see how well it's doing. 

SARA: Yeah, one other thing that you reminded me about, Amy, is the UI provides what's called a confusion matrix, which shows you, for each of your labels, what percentage of your photos were correctly identified as that label. So in my case, I could see that maybe 80% of my cumulus clouds are being correctly identified as cumulus, but maybe 20% of them were being misclassified as cumulonimbus clouds, so then I could go back to my training data and see where I need to add more images and what images maybe aren't labeled correctly. 

MELANIE: Any things that you learned from working with the API that you feel like you want to make sure, when people start to experiment, that they keep in mind how they approach it? How they use it? 

SARA: One thing that is great is remember that we already touched on is that you can use the human labeling service. I haven't tried this out yet, but I'm really keen to try it out once I have a dataset that makes sense for it. 

MELANIE: So you haven't tried out the human labeling piece. Amy, was there anything else that you thought you wanted to make people aware of from your experience? 

AMY: Yeah, on the topic of labeling, one other thing we should mention is that AutoML Vision supports multi-labeled datasets. So that means that you can have a set of images that you've not given just one classification label to but multiple classification labels to. So it's a really nice feature. 

MARK: Sweet. 

SARA: Another thing to mention is that once you've trained your model, it's instantly ready in production to handle traffic. So it's available for serving right away on Google Cloud Platform. So you don't have to worry about provisioning any of this infrastructure on your own. And it will also scale to zero. So it's ready to handle lots and lots of prediction requests. If you're not getting any, it will scale down to zero. 

That's a really good point to make. 

MARK: Sweet. I was going to ask the question, so if people are listening to this and they're like, this sounds amazing, I want to play with this now, where should they go? What can they do to start playing with this thing? 

AMY: Good question, Mark. Well, in the show notes, we'll put a link to a form that you can fill out to get whitelisted. And we were told that the response to that should be very quick. 

SARA: We'll also provide a link to the product page. And there is a little intro video that's launching today to give you an overview of the product. So we'll link to that in the show notes as well. 

MELANIE: So people do need to be whitelisted in order to access it as a starting point. 

AMY: Yeah, during the alpha, that's correct. But again, we were told that the response would be very quick. 

MELANIE: Great. Well, anything else that you wanted to share with those listening about AutoML? 

SARA: Nothing for me. I think we covered it all. 

AMY: Nothing comes to mind. We're very excited about it. It's super useful and really easy to use. 

MELANIE: Great. 

MARK: Excellent. 

SARA: For people that try it out and have any feedback, we'd love to hear what you think. So we'll have our Twitter handles in the show notes. It's a great way to give us feedback on a product, and we'll make sure it gets back to the product team. 

MARK: Are either of you speaking about AutoML any time soon? Can people come find you? 

AMY: If your local to the Seattle area, and you're thinking to go to a conference called AI Next Con, I will be giving a talk about AutoML the day after we expect this podcast to come out. So please look me up and say hi if you're there. 

SARA: And I'm going to be speaking about AutoML at Dub Fest Minneapolis on February 10. So if you're going to be at that event, if you feel like braving the cold to come, it's a great event. I've been the past two years. Come and say hi and learn more about AutoML. 

MELANIE: Great, well thank you both again for joining us and telling us about Cloud AutoML Vision. And I hope you guys have a good rest of your day. 

SARA: Thanks for having us. 

AMY: Thank you. 

MARK: See ya. 

MELANIE: OK, well, that was great. Thanks, Amy and Sara. We appreciate the overview of AutoML. 

MARK: Yeah, that's really cool tech, especially as someone who is definitely not in the machine learning spectrum, being able to use these kind of tools to basically train and influence how models work without having to do all that research is really, really impressive. 

MELANIE: Agreed. It's where things are going. So it's nice to see where it is with Cloud Vision and then to think about where it's going to be going from there. So question of the week. 

MARK: Yeah, so question of this week, is if I am a student, or say I work for an academic institution such as a university, and I want to be able to use Google Cloud Platform, but ideally not pay for it, how do I go about getting some credits to enable me to basically learn how to use Google Cloud Platform? 

MELANIE: So we have education grants, and we are providing the link, of course, as always in our blog post. And so students and faculty can apply at this link, and actually I think it's more specifically for faculty to apply, and then they can give access for students. But apparently we have two different approaches for those who are in the US versus those who are international, and they provide the eligibility on the site. They're usually looking for universities that are regionally accredited or have some level of accreditation for those specifically teaching computer science or something related. So we'll definitely provide that information and you can apply, you can get credits, you can play around with this to do research at an academic level. 

MARK: Yeah, I'm just having a look. Last time I looked at this, there was an international support. So this is actually really cool. There's has a list of about 30-odd different countries that are available, but if you are a country or an institution that is not part of the countries that are currently listed, please do express interest. That is something that we look at, so that we can look to expand the program in the future. 

MELANIE: Great. Well, Mark, are you going to be anywhere in the next few weeks or next couple months? 

MARK: Really all I'm doing right now is preparing for Game Developers Conference in March, so everything is focused towards that. How about yourself, are you going anywhere? 

MELANIE: I am. I'm going to be in London at the end of the month speaking at AI Congress. 

MARK: Oh, fun. 

MELANIE: I'm looking forward to that. Yeah. 

MARK: Awesome. All right. Well, Melanie, thank you very much for joining me for yet another episode of the podcast. 

MELANIE: Episode 2 of 2018. 

MARK: Excellent. And we'll see you all next week. 

MELANIE: See you next week. 
{{< /transcript >}}