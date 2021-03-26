+++
audioDuration = "00:35:10"
audioFile = "Google.Cloud.Platform.Podcast.Episode.188.mp3"
audioSize = 50788120
categories = ["AI", "Conversation AI", "Dialogflow"]
date = "2019-07-31"
description = "The podcast today is all about conversational AI and Dialogflow with our Google guest, Priyanka Vergadia."
draft = false
episodeNumber = 188
hosts = ["Brian Dorsey", "Mark Mirchandani"]
title = "Conversation AI with Priyanka Vergadia"
image="/post/episode-188-conversation-ai-with-priyanka-vergadia/images/hero/hero-EP-188.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/ckcprz/episode_188_conversation_ai_with_priyanka_vergadia/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

The podcast today is all about conversational AI and Dialogflow with our Google guest, [Priyanka Vergadia](https://twitter.com/pvergadia). Priyanka explains to [Mark Mirchandani](https://twitter.com/markmirch) and [Brian Dorsey](https://twitter.com/briandorsey) that conversational AI includes anything with a conversational component, such as chatbots, in anything from apps, to websites, to messenger programs. If it uses natural language understanding and processing to help humans and machines communicate, it can be classified as conversational AI. These programs work as translators so humans and computers can chat seamlessly.

We discuss how people interact with conversational AI, maybe without even realizing it. From asking Google Home to set your alarm to getting customer service support at your favorite online store, AI is probably working behind the scenes to help. Priyanka also tells us all about Google's natural language understanding and processing program, Dialogflow. Designed to simplify the process, Dialogflow allows you to input a simple idea like asking for coffee, and watch as the program automatically includes many of the different ways people would naturally ask for coffee. Coffee would be great right now!

Listen in to find out the best (and worst) use cases and practices for this powerful tool!

<!--more-->

##### Priyanka Vergadia

Priyanka Vergadia is a Developer Advocate at Google. She worked directly with customers for 1.5 years prior to recently joining Google Cloud Developer Relations team. She loves architecting cloud solutions and enjoys building conversational experiences. Her interest in Conversational AI led to the Deconstructing Chatbots YouTube series. Priyanka is currently starring in a new show called "Get Cooking in Cloud" where she will be sharing recipes to cook various business solutions on Google Cloud.

##### Cool things of the week

* Least privilege for Cloud Functions using Cloud IAM [blog](https://cloud.google.com/blog/products/application-development/least-privilege-for-cloud-functions-using-cloud-iam)
* Containerizing in the real world . . . of Minecraft [blog](https://cloudplatform.googleblog.com/2015/11/containerizing-in-the-real-world-of-Minecraft.html)
* Introducing the What-If Tool for Cloud AI Platform models [blog](https://cloud.google.com/blog/products/ai-machine-learning/introducing-the-what-if-tool-for-cloud-ai-platform-models)

##### Interview

* Chatbot Fail [site](https://chatbot.fail)
* Dialogflow [site](https://dialogflow.com) and [docs](https://cloud.google.com/dialogflow/docs/)
* Deconstructing Chatbots [videos](https://www.youtube.com/watch?v=O00K10xP5MU&list=PLIivdWyY5sqK5SM34zbkitWLOV-b3V40B)
* Codelab: Build your first Chatbot with Dialogflow [site](https://codelabs.developers.google.com/codelabs/chatbots-dialogflow-appointment-scheduler/index.html)

##### Question of the week

[How do you run a recurring python script?](https://cloud.google.com/blog/products/application-development/how-to-schedule-a-recurring-python-script-on-gcp)

##### Where can you find us next?

Priyanka will be at [Codemotion Milan](https://events.codemotion.com/conferences/milan/2019/) in October and [GOTO Copenhagen](https://gotocph.com) in November.

Brian will be at the office in Seattle, thinking about Compute Engine.

Mark will be in Austin and the Bay Area working on new training content!

##### Sound Effect Attribution

* "Small Group Laugh Set.wav" by Tim Kahn of [Freesound.org](https://freesound.org)
* "Whip Crack 01.wav" by CGEffex of [Freesound.org](https://freesound.org)

{{< transcript "MARK: Hi, and welcome to episode number 188 of the weekly Google Cloud podcast. I'm Mark Mirchandani, and I'm here with my colleague Brian Dorsey. Hey, Brian." >}} 

BRIAN: Hello, and we've had a really good conversation here today with Priyanka about conversational AI, kind of meta. 

MARK: Oh, it's super, super cool. But before we get into that, we also have our question of the week, which talks a little bit more about running Python scripts, or really, any other script, in a very recurring manner. 

BRIAN: Awesome. 

MARK: But before even we get into that-- I like all these before's. It's very confusing about where we are in the show, as though people hadn't realized what the structure was. Well, before we do that, we do want to talk about our cool things of the week. 

[MUSIC PLAYING] 

BRIAN: So I work in serverless and compute for developers in general, and we mostly focus on trying to make it easy, and smooth, and reliable to run stuff. But we also need to keep it secure. And so there was an article on the [INAUDIBLE] recently on how to execute the principle of least privilege when building a system in Cloud Functions. So I just want to plug that a little bit. I think it's pretty interesting. And at the core, it's basically using a serverless account dedicated for each function, and then giving it specific permissions on your project. 

MARK: Yeah, I mean, these resources are easy to spin up and easy to manage. So it kind of makes sense that you might create an individual service account for each function and then be really, really granular about the permissions those accounts have. 

BRIAN: And this is a relatively new feature for functions, but it is definitely there now. So it used to be the case that all functions rendered one service account. And so now you can make much more granular controls, and we've got a link to introducing it and going into more detail in the notes. 

MARK: And speaking of using functions to do kind of cool things, there's a fantastic blog post that I just saw about spinning up a Minecraft server using functions to send the triggers, right, for starting and stopping the server, using Compute Engine to host the actual server and using some backups. But I think what makes this really, really cool is that this little blog post is targeted towards, like, having a child, start to understand some of these architecture pieces. And maybe as parent-child thing, you can both work on it and kind of spin up a Minecraft server, which I think is super fun. 

Because we've seen a lot of examples of previous architectures involving Minecraft in the past, but this is a fun way that you can kind of take something that most kids care a lot about, which is Minecraft, and try to get into showing them the architecture version. And it even has, like, a fun little child architecture diagram, which I completely adore. But it's a very cute and very fun way to showcase a simple architecture. 

And then it gives you a lot of ideas of what you might build on top of that. For example, a common one is how do you make sure that there's a sort of a curfew set up so that the server shuts down? Well, again, that's something you can do with functions. 

BRIAN: Oh, that's super interesting and I think applicable to a lot of, kind of, work environments as well. So that's a lot of fun. Actually, that reminds me. I think several years ago, a colleague of ours, Julia Ferraioli, wrote a series of posts about container rising Minecraft and running it on Google Kubernetes Engine. So let's include a link to that, too. 

MARK: So that might be the next step after a Compute Engine, is you teach your child containers, and then show the Minecraft in that. 

BRIAN: You can never start too early. 

MARK: I believe you can. 

[LAUGHTER] 

And I would not want to be the person teaching containers to a middle school group. But you know what? Actually, I think a lot of people on our team are doing that. And props to them. And I think maybe you know what? Maybe you're right. Maybe you can't start too early, and they get through these concepts a lot faster than I did. 

BRIAN: Well, that's super fun. OK, so another cool thing of the week that I think is keeping in tune with the overall theme for our main topic is around AI. And we just recently announced a What-If tool for Cloud AI Platform models. So there's this on running understanding that one of the challenges for working with ML is actually understanding what's going on under the covers and how the model's making decisions. 

So there's this tool What-If that has worked with TensorFlow, and now it works with a few other very common [INAUDIBLE] backends, and works with AI platforms, so running on GCP or on your own machines, to help you understand how the model is making its decisions. 

MARK: So it lets you kind of investigate, I guess, by the name, what if you were to change some certain aspects of m or how you can kind of look at it from a more holistic view, and kind of ask more intelligent questions. Is that right? 

BRIAN: Yeah, exactly that and for example, kind of give you a visualization of the distribution of where things land. And when you click there, you can see where the model made a different decision for similar cases. So you can really get down at the details of why something turns out a certain way or not and help the model from there. 

MARK: Well, I can definitely say that I would rather teach a large class about containers than I would about AI. 

BRIAN: As a person coming from a compute perspective, I would be a lot more successful that way as well. All of those words that I just said were from the blog post that is linked to the show notes. So with that, is it time to get into it? 

MARK: I think we should. Let's go ahead and jump into our interview with Priyanka. 

[MUSIC PLAYING] 

BRIAN: OK, here we are. I'm Brian Dorsey here today with Mark and Priyanka Vergadia. Go ahead. Could you introduce yourself and what do you do. 

PRIYANKA: Sure, yes. So I am a developer advocate at Google Cloud. And I've been working with customers and partners on conversational AI use cases for quite some time. So I'm really excited to be here. 

BRIAN: Wait, so conversational AI-- well, what is that? 

PRIYANKA: Conversational AI or conversational experiences, it's basically a comprehensive name for a newer class of solutions that include chat bots, whiteboards, experiences that are basically conversational based, so whether it's in apps, or messengers, and things like that. The common denominator is basically the use of natural language understanding and natural language processing, which is obviously a type of AI technology to power these interactions between humans and machines. 

MARK: So let's take it a step back there. Tell us what natural language understanding really means. 

PRIYANKA: Absolutely. So in very simplistic terms, natural language understanding is a technology that helps translate human language into computer language, and also vice versa. So let's think about this as an example. So when you and I, when two humans are talking to each other, and if we speak in the same language, we don't need a translator. But if I speak English and you speak, say, Spanish, and I don't understand Spanish and vice versa, then we need a translator in the middle to translate my English to Spanish and then your Spanish to English. 

Same way when humans are talking, that human language needs to be translated to a computer because computer speaks binary, 0's and 1's, right? So our English needs to translate into those 0's and 1's. And then computer responds back. Then that binary needs to be translated back into English as well. So that technology can be called natural language understanding. 

And then while we are at it, natural language processing is also worth mentioning, right? Because natural language processing is a superset of this realm, where natural language understanding falls in it. And natural language processing includes things like how do you paraphrase something, or how do you summarize a given story, or how do you understand sentiments off of a conversation, or was there a spelling mistake, or an error, or accent changes, and differences, and things like that. So that is what natural language understanding and processing means, and it's kind of the core of conversational AI technology. 

BRIAN: OK, so this is more than just speech to text then. 

PRIYANKA: Yes. It's absolutely much more than speech to text. Like I said, when you talk about natural language processing, speech to text is one part of it. There is natural language understanding, which is the other part. And then you'll hear things like to speech as another part of it. And then you'll also hear automatic speech recognition, which is ASR. So these are kind of different parts of the technology that fall under natural language processing. 

MARK: So we've got a way for people to talk and understand what they're saying. And that's kind of one side of it. But then you dive deeper into it, right, with things like sentiment and understanding what they're saying, even going so far as to summarize what they're saying. Because you're able to pull out these very abstract concepts, and then define them, and say, I think when this person mentions something about the Eiffel Tower, for instance, I know what that is. I know where it is. I know it's this landmark. And then I can use that information to pull together something else, whatever that workflow might be. 

Going back to what you were saying earlier about chat bots, right, I mean, on a website, usually there's a pop-up or something, and then you can kind of converse with, in this case, an AI. So this is something new or interesting. I mean, we've been talking about kind of robo chat for a while, but this is more about actual AI. Why is this big, and what's happening now that's making this more prevalent than it used to be? 

PRIYANKA: The world that we are living in now, with more and more devices that are coming online these days, whether it's IoT or just our preference of dealing with more devices and working with more devices-- take an example. When you wake up in the morning, starting from a smart coffee maker to when you end your day with asking Google to set your alarm, you deal with so many devices in the day. 

And it's going to be and it already is becoming really difficult to deal with all the devices and work with them on a SmartScreen. We are going to have to have conversations with our machines and devices as we progress in this era where we have more and more devices. 

Just an example, right? When you're having breakfast or cooking breakfast, and then you want to know what's the traffic like to the office, you don't want to look at a screen. You just want to know the answer to that. So that's just one example. But that goes to say that we are moving in the era where dealing with machines is becoming our everyday pattern and every minute pattern. And for those reasons, most people are interested in having their problems solved with [INAUDIBLE] and conversational interfaces. 

BRIAN: So this is showing up in a bunch of places. So you mentioned chat bots, and we've got these kind of like the boxes you see on support for websites that talk to maybe a home or other assistant thing in the morning for weather, and traffic, and such. Are these the most common use cases, or are there's other things? What are people actually doing with this today, and what do you see them doing next? 

PRIYANKA: Yeah. So I just gave the broad examples with the traffic pattern, and alarms and such, and smart coffee makers. But what companies or enterprises are using conversational AI for are use cases around customer experience and customer support. And it's very easy to start with that use case. It's because of the fact that you know a very specific pattern of questions that your customers would ask, or your users would ask. So it's the lowest barrier to entry into conversational AI. 

And examples could include, for example, if you talk about retail, that customer experience could be a personal shopper, where I want to know a specific type of outerwear I'm looking for. And then this personal shopper can give me recommendations on here are some of the different sizes, and colors, and party wares versus others, and things like that. And I actually built a demo around that a few weeks ago. 

And then the other example could be in banking or in financial institutions, where, really, when you go to a teller, you ask questions like, what's my balance? Or I want to withdraw an amount, or I want to transfer an amount from this account to this account. And you can do all of that through chat or a conversational experience. 

So those are some of the easy ways to kind of get into it, and also the best place to start. Because you know what the user is asking for, and you know how to respond to it because your back ends are already supporting that with your websites or in a more personalized manner. So you can put those two together into a conversational experience by using a natural language understanding or processing platform, like the one we're going to talk about, which is Dialogflow. 

MARK: Don't worry. We'll mention Dialogflow for you. But I wanted to pick up on some of the topics you were saying there. I mean, with customer support being probably one of the premier examples of this, and basically just taking that conversation piece and automating it, right? Because there's a huge subset of the users that call in, or they contact support. 

And I'm sure there's some percentage out there-- I'll make one up and say 98% can be solved through routing it through, like, three simple kind of formula questions that are FAQs or what have you. But then the people who do kind of get through that, and when they do get to usually a live human agent, they'll at least have a little bit more information on what the context is. So there's this great kind of balance between not having to be on hold as long because you don't have to wait for a person. Many people can interface with the machine at the same time and not have to overload it. 

But we've seen implementations of these things for a long time, right? I mean, the automated phone support system has been around for quite a while. And I speak for myself and maybe popular media when we say, like, oh, these are so frustrating sometimes. And they're so rigid, and you're just like, I want to check out. I need this piece of information, but the machine won't let me have it, or it needs these 80 things that are not related. 

It's very cool, it's very interesting, but it can also be incredibly frustrating. I would hope that a lot of this stuff is changing it. But I'm sure there's been lots of failure cases as well. Where do the challenges lie in this? Where do the problems happen? 

PRIYANKA: Yeah, I think so. So the biggest thing that needs to be thought about are why conversational interfaces have failed or do actually fail even today. There is a really good compiled list at chatbot.fail. And it's definitely worth checking out, but I'm going to highlight a few here. 

Some of the reasons why chat bots actually fail is the rigid structure, right? The flowchart. So they're really designed for how the machine responds and what the machine's looking for, not how a human would say something. And that is where the biggest problem is. So what we need to do in order to create a good natural experience is to use natural language, obviously. 

Natural language understanding and processing where you can have the machine understand what the user is saying and then decide what needs to be done, versus in the IVR examples that are frustrating that you mentioned, Mark. We went the other way around, right? We are basically designing an IVR by saying, OK, I will only take a customer account information. And if they don't give me the account information, I'm going to keep saying, can you say that again? Can you say that again? 

And that is what makes it frustrating because there is no understanding that the customer doesn't have that. So I can ask for these other things. I will give you a very simple example where if I say, would you like coffee, and the IVR is expecting yes or no. And if I said sure, it's gone. It's gone wild because it doesn't know that sure also means a yes. [LAUGHS] 

MARK: I got to be honest. In the mornings when I need coffee, even yes or no is asking a lot. 

PRIYANKA: Right? 

MARK: If I could just kind of unintelligently grunt towards it and it's like, yeah, he needs coffee, then that would be preferable. 

PRIYANKA: Exactly. So that's what I'm alluding to, and that's the advancement in technology that we are utilizing with natural language understanding and processing. So that's definitely one. And then some of the others are you need to make sure that your backend is actually properly integrated with your frontend. So you can have the very best natural language understanding experience, but if your backends and your databases cannot connect properly to respond to these questions, then again, that experience is not going to be useful. 

So in this case, let's take an example and say you connect to Salesforce backend where you create these tickets or questions that the user comes with. And you create a case in Salesforce. But the hook of the API that needs to make that connection is either not live, or you don't have the right way of making that connection. Then it's not going to be a really good and streamlined experience. So making sure that the backend can connect is another very big example. 

And then some others could be creating a chat bot that is a silo, right? And it only does this one thing and doesn't do the other five things that it should be doing. So if somebody asks a question about the other five things that are not handled, then how do you handle them in that bot? It's OK to not have them handled, but not have the answers to those questions. But it's not OK to leave the user thinking what they are supposed to do. So you need to provide them something to go off of. 

BRIAN: I have a related question around this exact thing. So if we think about GUI versus command line, we kind of think that the visual user interfaces that are kind of more discoverable, you can kind of figure out what's possible or not. But you have to do the same thing every time. And command lines, it's not as easy to figure out what's possible. But once you do, you kind of internalize that, and you can do things very quickly, or you can make scripts to do things in order. 

And I feel like we're almost missing, like, how to think about these things. And in particular, for voice, as a user, I find this question of not even knowing what's possible really challenging. Like, I don't know what I can say or not say to the thing I'm talking to. And it gets frustrating after a while. As people are interested in designing these, do you have recommendations for how to help with that challenge? 

PRIYANKA: Yes, so the first and the biggest recommendation that we offer when we help design these experiences is when the user ends up on your bot experience or on your chat experience, however they are ending up on that landing prompt, that prompt should be very specific in terms of what this bot can do. 

So when my bot responds back, saying, "Hi, welcome to XYZ. I can help you get your balance information and transfer funds from one account to another." And if it does only these two things, then mention those two things. If there's any other question that they have, at least the user now knows that the bot can do these two things. 

BRIAN: Is this like the rest of life? Like, setting expectations is everything. 

PRIYANKA: Exactly, right? So you just make sure that you're setting those expectations correctly. And obviously, they're going to ask questions that you didn't expect them to ask. And then for those, you have the fallback mechanism, where you say, OK, I didn't understand that, but a connection to a human being or a live agent is also very critical. 

There are going to be scenarios where your bot will not know what to do because it's not programmed to do that. In those cases, how do you connect to a live agent, whether it's chat or a call, is important. And you need to figure that out as well while you're building the bot. 

MARK: Yeah, I mean, for command lines, we've got like [INAUDIBLE] help, right? So usually you have this verbose list of all the things you can do. But in conversing with AI, it doesn't exist. Is that something that some people have tried, and it just didn't work? Is that something that just doesn't resonate with people? 

PRIYANKA: I had a conversation with one of our voice user interface designers at Google a few days ago, and she brought up a very interesting point. She said, we all assume that we know how to have a conversation. And that's why we start building a bot without creating any blueprints. 

And that is the biggest problem, and she kept mentioning and highlighting the fact that you need to build the design flows. They're not flowcharts. They are the flows where you say, here are the 1,000 ways in which people can ask for coffee. And understandable, right? That machine learning is going to handle all those 1,000 ways. But you still need to think how the flow would traverse when they're asking for coffee in different ways. And conceptualizing and visualizing that flow is really critical. 

So she recommended that anybody who starts designing a bot do not start designing it without having a blueprint of what you're designing for. Here are the four things I'm designing for, and then these four flows can look something like this. And that is very important to have, and I think that's the part we keep missing. Because we think that we know how to have a conversation, and this is what people are going to ask my bot. And we just end up developing. 

BRIAN: I'm super new to this. When you say, like, design these blueprints, I don't know what that actually is or looks like. Because I'm used to either code or scripts, or HTML or something. What's the format of these blueprints? Is it just drawing things out so you have a good sense your head? Or what does it look like? 

PRIYANKA: And I ask the same question, right? Because we are mostly developer centric people, so we think about codes, and scripts, and flowcharts, things like that. And she literally said it can be any format that you want it to be. And it can be just a simple script, where it's like the user's going to say this. And the bot is going to respond with this. And the bot can respond in these four ways if the user says this question in these different ways. 

So it can literally be any format you prefer. It can be an Excel sheet. It can be just a Word doc. It could be an animated format with pictures and stuff. But the idea is that you should have something to go off of and not just start coding. 

MARK: This is going to make it super awkward the next time I run into Brian in the hallway, and I'm going to be like, hold on. Let me bust out my spreadsheet because I need to map out this conversation. 

[LAUGHTER] 

BRIAN: Wait, you don't do that already? 

MARK: Well, yeah. Do you put that mental preparation in? Because I promise you, I am now self-conscious about being able to have a conversation. Priyanka's like most of us don't know how to have conversations. I'm like, yeah, of course. Why else would I host a podcast? I have no idea how to have a conversation. 

[LAUGHTER] 

But what you're saying is we need some sort of flow of dialogues, perhaps in the form of a Dialogflow. 

[DING] 

PRIYANKA: Exactly. 

MARK: Did you like that lead-in, by the way? I thought it was gold. 

PRIYANKA: Yes. 

MARK: Working on it for, like, three days. 

[APPLAUSE] 

BRIAN: So tell us a little bit more about what Dialogflow actually is. 

PRIYANKA: Dialogflow is Google's tool that is powered by natural language understanding and natural language processing to create rich and natural conversations. And what I mean by that is it makes this process simpler and easier. When I said I can ask for coffee in 1,000 different ways depending on the day, and the mood, and the time, and all of that, right? It's nearly impossible to gather all of those ways in which 1,000 people are going to ask for coffee. 

But in a broader term, it's easy to just lay it out. And what Dialogflow does is you put an intent in, saying, most common ways in which people ask for coffee. And then it would apply the natural language understanding and NLP on it and comprehend some of the other ways in which people can actually ask for coffee. 

So I can say I would like some coffee. And I can give, like, 10 examples in there and say, I would like some coffee. Can I get some coffee? It would be great to get some coffee right now. Amazing to get some coffee right now. Oh, coffee sounds amazing, right? These are some ways in which I ask for coffee depending on what the day is and what my mood is. I'm pretty sure Mark has some very interesting ways in which he can ask for coffee. 

MARK: I mean, you're very polite to your coffee maker. Now I feel bad. I usually just yell coffee at mine, and it's not voice enabled. I just am yelling coffee while also wanting it. 

BRIAN: And with deep apologies to everyone listening to this before they've had their coffee. 

MARK: Yeah, no, I mean, if you haven't had your coffee, please pause, go grab some, ideally while yelling the word coffee, and then come back to us. 

[APPLAUSE] 

PRIYANKA: Yes. So again, going back to it, right? The power of Dialogflow is you provide these intents, and then it would map some of the others on its own. Because it's powered with natural language processing and understanding, it would understand the other ways in which people are asking for coffee. So you don't have to provide those 1,000 examples. You can just provide a few, and it still understands the user's intent. So that's one. 

And then the other power of Dialogflow is you design your bot experience once, and you can enable it for multiple different interfaces. And that is the biggest thing because omnichannel is a huge requirement for enterprises because you want to make sure that the experience of the brand is similar on every channel that the user's interacting you with. So whether they're coming from Facebook Messenger, or Slack, or Google Home, or Assistant, or just a web chat, the experience should be seamless and similar across the board. So that's the other power that you get from Dialogflow. 

There's also languages, right? So it's not that you're only going to support English or one language in which you're doing business today. You have to think about global expansion and have multiple languages supported. So if you're doing it by yourself, it's going to be really hard to support all these different languages. Dialogflow comes already with 20 languages, and we keep adding the support based on our text to speech and speech to text offerings. So that is, again, very powerful. And then it comes with analytics, and that's always very useful. 

The other very important aspect is small talk and pre-built agents. So small talk is, as you can imagine, like, what's the weather like? It comes with pre-built small talk, so that you can just plug the small talk portions and intents into your bot experience. So you don't have to think about all the ways in which people do small talk. 

BRIAN: And have really chatty chat bots. 

PRIYANKA: Exactly, chatty chat bots. 

MARK: Do people respond well to the small talky for chat bots? 

PRIYANKA: It depends. It depends on what the persona of your bot is. And that is a huge topic around persona of the bot, and you kind of define that before you start building your bot, whether your bot is going to be geeky, or chatty, or serious. And once you define that persona, it might sometimes make sense to have small talk experience in there. It usually makes it a little bit more chatty, but more friendly. 

BRIAN: Can we make a bot that only small talk? 

[LAUGHTER] 

MAN: Welcome home. It's been a while, hasn't it? You've certainly changed. 

PRIYANKA: I don't know. [LAUGHS] 

BRIAN: OK, so I'm inspired to kind of play with this and see some sort of coffee experiments with bots. And I'm sure other folks listening are also kind of interested in digging in here. How would you recommend people get started, like learn more about this? 

PRIYANKA: Yeah, so multiple different ways and avenues to get started. The first is definitely some documentation that we have on www.dialogflow.com. But then if you don't like reading, I have a series-- 

MARK: Wait, I'm listening. Please, go on. 

PRIYANKA: --of videos. [LAUGHS] I have a series of videos that I've started from basically 101, called Deconstructing Chat Bots. It is on our YouTube channel, Google Cloud YouTube channel. There you can actually get started from what is a bot and how do I design one to actually building one by yourself. And then there are labs that are in there as well that you can follow along that point you to code labs. 

And then the series is ongoing, so you can catch up and get to a point where you can start to build not just basic conversations, but also interact with more Google Cloud Machine Learning content. So the episode that comes out I think in the next two weeks or so is actually building a bot to understand invoices when a user uploads their bill. It's interesting, and you can create these while you are working through videos along with me. And you get the [INAUDIBLE] and links as well. So I would say that's a good way to start. 

MARK: I foresee Brian in the next couple of weeks making small talk with his coffee pot. 

BRIAN: I'm just going to try to see if I can get it all the way to grunt equals coffee. But actually, in my case, if I'm honest, it's going to be hot tea. 

MARK: Oh, well, I mean, that usually serves a similar purp-- but no. 

BRIAN: Oh. 

MARK: I mean, if I get up and I'm just like, ugh, I want that cup of coffee right there ready for me. 

BRIAN: We may have discovered a deep, deep fundamental philosophical difference between us. 

MARK: Well, with the power of Dialogflow, I'm sure you can generalize it to say like, hey, I want my breakfast drink. And then the AI will know-- 

BRIAN: There we go. 

PRIYANKA: Yeah. 

MARK: So I think we're just about out of time. Priyanka, is there anything else you want to mention? We'll have a link to the Deconstructing Chat Bots playlist in the description below the show. But is there anything else you want to mention before we head out? 

PRIYANKA: I would just say that these are really easy to build experiences, so give it a shot, just like Brian is going to in the next few weeks. 

BRIAN: I was signed up. OK. Everyone, please give it a go. And thank you very much for your time, Priyanka. 

MARK: Thanks 

PRIYANKA: Thank you. 

MARK: OK. I think we're clear. Ugh, I need coffee. 

BOT: Why do you need a coffin? Is somebody dead? 

[LAUGHTER] 

MARK: OK, that was a great conversation with Priyanka. I've played around with a few of these things. Thankfully she's got that Deconstructing Chat Bots playlist. So I followed that, and there's some code labs on there as well that have kind of helped me play with it. But there's a lot of aspects to really thinking about how people engage with chat bots and what modeling that looks like. 

BRIAN: I keep going back to all the different places where you can interact with the same backend that you build once. So that just seems really powerful as somebody who's used to having to kind of write different versions for every new kind of frontend that might show up. 

MARK: Yeah, much more flexible and a cool way to think about creating a system, like you said, and then reaching all these different end points, which is great to meet users in a lot of different ways. 

BRIAN: Yep, meet people where they are. 

MARK: Speaking of meeting people where they are, we also have a really cool way that I think will help a lot of people run some more very common tasks in the cloud. 

[MUSIC PLAYING] 

And the question is if I have a script, for instance, a Python script, how do I run it in an automated fashion, right? Like a recurring script, whether it's every morning, three times a day, how do I do that in the cloud? 

BRIAN: Oh, right. So like, the kind of thing for on [INAUDIBLE] you might use the Cron Scheduler for like, hey, every third hour, call this thing. 

MARK: Right. I mean, you could spin up a Compute Engine, and then put Cron on there, but then you've got to worry about what happens if someone wants to shut the box down or you're wasting resources. I mean, that doesn't seem like a very scalable way to do it. 

BRIAN: Who schedules the schedulers? 

MARK: There's a terrible, terrible superhero out there that I'm sure-- I don't think Cron man is a very good-- but you know what? He's always on time. 

BRIAN: OK, let's move to the meat of this. What is the recommendation in this vlog? 

MARK: Well, I think that the question is you're using this Python script, how do I run it? And it looks like if we run this with Functions, we've got some options to use both Cloud Scheduler and Pub/Sub. But can you tell me a little bit more about how Cloud Scheduler works? 

BRIAN: Cool. OK, yeah. This article is written by Kaitlin Ardiff, who's one of our strategic cloud engineers. And it's really basically saying Cloud Scheduler handles the scheduling part of it, so that a task happens on a regular basis. And Functions is the thing we want to run. In this case, I'm using Pub/Sub, our messaging queue that's both high throughput and very durable, including retries and things like that, so it doesn't get lost if the function has an error or something like that. 

And so you use Pub/Sub as the kind of connection between the two, which is a really powerful model for distributed systems in general. You've got a thing that is in charge of policy, a thing that is in charge of making sure that it happens at least once, and then the thing that does it, which seems like a really great setup. So it's a very nice, succinct walkthrough of this pattern that is really common. 

MARK: Exactly, right. It gives this example using specifically a Python script that runs BigQuery. But at the same time, you've got your Manage Cron service. You've got a flexible events handling system. And then you can pretty much do whatever you want to do on the actual execution side. So this is a really starter architecture that can go out in a lot of different ways. In this case, they're using Pub/Sub, but you could also have used HTTP for the functions. But I think the authentication would be a lot harder for that, right? 

BRIAN: It is now supported in both Scheduler and Functions to use basically a service account, and then you get the token from the environment and kind of pass that through the HTTP. But I think that going through Pub/Sub is a much more general pattern, and I think it lets you plug other things in. Like in this case, maybe you're not going to necessarily do things off the same policy of every other hour, or twice a day, or something. Maybe you are. And then you can add additional things, kind of listening to that same Pub/Sub event. 

MARK: Yeah, very flexible and a good way to start working on something. And the first time you build it, you might be saying, well, I don't know if I need all these pieces, right? Why not just keep it very, very simple? But as you extend outwards, I think you're going to find that having built it in this flexible way is going to make it a lot easier down the road. 

BRIAN: I kind of alluded to it at the beginning. There's some non-obvious stuff that's great. If you have a direct call and for some reason, there's a time-out or something goes wrong that's a temporary error, if you're making the direct call, it will never happen again. If you're working off of a queuing system and actually kind of respond to those directly, it will make sure that it retries it after failure and the like. 

MARK: Very cool. So all those details are in the blog post. Well, before we wrap up here, Brian, what are you doing? Where you going? Doing any fun travels? 

BRIAN: So actually, I'm based in Seattle. And I'm going to be spending the next while kind of hanging out here in the office, thinking about Compute Engine. 

MARK: Is it just kind of sitting and meditating on Compute Engine? 

BRIAN: Om, om, om. Is it a slice of a computer or a slice of a data center? 

MARK: Oh, no. Wait. No, no, those are deep questions. Too much, too much. Oh, well, I'll be traveling to Austin next week to record with a customer. Hopefully this will be a podcast not too far from now. I'm sticking around the Bay Area to work on some up and coming training videos, which I think will be for the subject matter there will be super helpful. I know I can't say what it is until it's out. So I'm always like, oh, I want to talk about it, but I kind of can't, but looking forward to, as always, creating some really fun content. 

BRIAN: Awesome. Well, thanks for hanging out with us all the way to the end, everyone. 

MARK: Very, very cool, and we'll see you all next week. 

[MUSIC PLAYING]