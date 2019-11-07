+++
audioDuration = "00:34:48"
audioFile = "Google.Cloud.Platform.Podcast.Episode.131.mp3"
audioSize = 50523948 
categories = ["Voice Actions", "SSML", "Open Source"]
date = "2018-06-11"
description = "This week is all about Voices! 🎶🎤🔊 Mandy Chan joins Melanie and Mark to discuss building user Voice user interfaces with Actions on Google, SSML and more!"
draft = false
episodeNumber = 131
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Actions on Google with Mandy Chan"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/6k3TaXD6yQG"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/8qt9fz/episode_131_actions_on_google_with_mandy_chan/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week is all about Voices! 🎶🎤🔊 [Mandy Chan](https://twitter.com/mandychannyc) joins 
[Melanie](https://twitter.com/nyghtowl) and [Mark](https://twitter.com/Neurotic) to discuss the intricacies of 
building user Voice user interfaces with Actions on Google, developing with SSML and more!

<!--more-->

##### Mandy Chan

[Mandy Chan](https://twitter.com/mandychannyc) is the developer community manager for the Actions On Google team. Her role is to help expand the funnel of the Actions on Google developer community by creating practical tools and content like [http://bit.ly/aog-codelab-1](http://bit.ly/aog-codelab-1) and  [http://bit.ly/aog-codelab-2](http://bit.ly/aog-codelab-2) 

Mandy began to build voice applications back in early 2016, and since then, she has built more than a dozen Voice Applications on Actions On Google and other platforms. One of her most frequently downloaded open source projects is called the SSML-Builder which creates well-formed Speech Synthesis Markup Language without worrying about string concatenation. You can learn more about her open source project on [http://bit.ly/ssml-build](http://bit.ly/ssml-build)

When she is not pondering about how to improve the developer experience, you can find her hiking at mountains or learning new magic tricks. You can also learn more about  Mandy by following [@MandyChanNYC](https://twitter.com/mandychannyc?lang=en)

##### Cool things of the week

* AI at Google: our principles [blog](https://blog.google/topics/ai/ai-principles/)
* Incorporating Google's AI Principles into Google Cloud [blog](https://www.blog.google/topics/google-cloud/incorporating-googles-ai-principles-google-cloud/)
* Deploying to Google Kubernetes Engine [blog](https://codeascraft.com/2018/06/05/deploying-to-google-kubernetes-engine/)
* Fighting fire with machine learning: two students use TensorFlow to predict wildfires [blog](https://blog.google/topics/machine-learning/fighting-fire-machine-learning-two-students-use-tensorflow-predict-wildfires/)
* Together, we can help Puerto Rico recover [donation match](https://www.google.org/crisis/puertorico-relief/)
* Introducing sole-tenant nodes for Google Compute Engine — when sharing isn't an option [blog](https://cloudplatform.googleblog.com/2018/06/Introducing-sole-tenant-nodes-for-Google-Compute-Engine.html) [docs](https://cloud.google.com/compute/docs/nodes/)

##### Interview

* Actions on Google [site](https://developers.google.com/actions/) [docs](https://developers.google.com/actions/extending-the-assistant) [github](https://github.com/actions-on-google/) [console](https://developers.google.com/actions/) [g+ community](https://plus.google.com/communities/105684267327487893574)
* ssml-builder [site](http://ssmlbuilder.com/) [npm](https://www.npmjs.com/package/ssml-builder)
* Advanced SSML by Leon [blog](https://medium.com/google-developers/advanced-ssml-for-actions-on-google-5cea45d868c9)
* Actions on Google: SSML [docs](https://developers.google.com/actions/reference/ssml)
* Actions on Google Codelabs [level one](http://bit.ly/aog-codelab-1) [level two](http://bit.ly/aog-codelab-2)
* Dialogflow [site](https://dialogflow.com) [docs](https://dialogflow.com/docs/getting-started/basics) [console](https://console.dialogflow.com/api-client/)
* Google Assistant SDK for devices [site](https://developers.google.com/assistant/sdk/)
* Cloud Functions for Firebase [docs](https://firebase.google.com/docs/functions/)
* Google Action Firebase Services [docs](https://developers.google.com/actions/console/firebase-services)
* To get inspired by some interesting voice applications [voice experiment](https://experiments.withgoogle.com/collection/voice)
* Mandy Chan [medium](https://medium.com/@MandyChanNYC) [github](https://github.com/mandnyc)
* Systers &lt;TechTalks/&gt; on June 21st 9AM PST -- Getting started with Actions on Google Workshop [site](https://www.cvent.com/c/express/603ae3c6-e101-4a0d-81b4-c8d66cd68a35)

##### Question of the week

I want to push a Docker image to Google Container Registry via `docker push`. How can I set things up so that I don't have to use `gcloud docker -- push` every time?

- Pushing and Pulling Images [docs](https://cloud.google.com/container-registry/docs/pushing-and-pulling) 
- Authentication Methods [docs](https://cloud.google.com/container-registry/docs/advanced-authentication) 

##### Where can you find us next?

Mark is speaking at the [San Francisco Kubernetes Meetup: Scaling Game Servers and the Conduit Service Mesh](https://www.meetup.com/San-Francisco-Kubernetes-Meetup/events/251242006) on June 14th,
and also speaking at the [Online Kubernetes Community Meeting](https://docs.google.com/document/d/1VQDIAB0OqiSjIHI8AWMvSdceWhnz56jNpZrLs6o7NJY/) on the 21st of June, at 10am Pacific.

Melanie is speaking at a joint [WiMLDS](http://wimlds.org) and [PyLadies](http://www.pyladies.com) event ["Paths to Data Science"](https://www.meetup.com/Bay-Area-Women-in-Machine-Learning-and-Data-Science/events/250456485/) on June 26th and Stanford AI4ALL on June 28th.

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 131 of the weekly Google Cloud podcast. I'm Mark Mandel, and I'm here with my colleague as always, Melanie Warrick. How are you doing, Melanie?" >}}

MELANIE: I'm doing good, Mark. How are you? 

MARK: I'm all right. But we're not physically in the same place, which makes me sad. 

MELANIE: Not today. But we are both still in San Francisco. 

MARK: That is true. That is true. So we have some cool stuff happening today. 

MELANIE: We do. So who are we speaking with? 

MARK: Yeah, we're speaking with fellow Googler, Mandy Chan. Super excited. I wanted to have them on the podcast for ages. She is a fellow Googler who works on the Actions on Google team. So lots of sounds and voice stuff today. Should be really good. 

MELANIE: It's very applicable for a podcast. Well, before we get into our interview, as always, we have our cool things of the week. And we also have our question of the week. And this week's question is, I want to push a Docker image to Google Container Registry via Docker Push. So how can I set things up so that I don't have to use GCloud Docker dash, dash, Push every time? 

And that will be a question you'll find out at the end. But as always, we're going to start out with the cool things of the week. And this week, we want to kick it off by mentioning that Google just published AI ethics. And specifically, it's got a blog out about AI at Google and our principles. 

And so these principles in particular, you can read them at the link that we'll include in our show, as always. But I'm just going to highlight the seven key ones. 

And they are be socially beneficial, avoid creating or reinforcing unfair bias, be built and tested for safety, be accountable to people, incorporate privacy design principles, uphold high standards of scientific excellence, and be made available for uses that accord with these principles. 

And one little note is that that second one, avoid creating or reinforcing unfair bias, that was actually specifically developed by a team that Margaret Mitchell was working with. And Margaret Mitchell, of course, is somebody we interviewed back in February in regards to machine learning bias and fairness. 

MARK: Yeah. No, that's great. And it's worth noting as well, there's a follow-on article from Diane Greene, CEO of Google, put also in the show notes. It's talking about, specifically, how Google's AI principles will be effecting in Google Cloud, and how we'll be using those in Google Cloud. 

MELANIE: Great. Mark, you got anything else? 

MARK: Yeah. I want to talk about a great article that has come out of the Etsy engineering team. I'm probably going to massacre this name. It says it's posted by Toria. I'm going to say Toria Gibbs. 

They have an article that talks about basically how they have their deployment continuous integration system deploying to a Google Kubernetes engine instance, as well as their on-prem insistence. 

So they basically take you all the way through setting up the Jenkins infrastructure, and the whole deployment pipeline, the bill pipeline, so it's definitely worth reading. It's a really cool article. 

MELANIE: Agreed. 

MARK: Also, call out to the Etsy crew. If you ever want to come on the podcast, give us a holler. 

MELANIE: Yes. It would be nice to actually get Etsy on and talk through this, too. Well, another cool thing of the week, and this is actually referenced in the AI ethics list, there's a couple of students who are here in California who've decided to build out a machine learning tool so they can help predict wildfires. 

Last year, not even, just the summer, in California alone, we had what was it? 9,000 fires burning, approximately-- 

MARK: It was pretty bad. 

MELANIE: --2,200 square miles of forest. Yeah, it was really bad. So they basically designed a device using TensorFlow machine learning to visually assess where there might be potential fire hazards and specifically brush that may be so dry that it would lead to the start of a fire. 

So they've implemented these devices in the forest and have shown above 89% accuracy rate. And we'll include the link in the show notes. It's really cool. They have a nice video on this as well. 

Another cool thing of the week that we wanted to mention-- it's not as much of a cool thing but it's an important thing. Google.org right now is actually matching donations. They are collecting money and distributing it to charities that are helping with Puerto Rico's continued recovery. This, of course, being the continued recovery from September 2017's hurricane that hit Puerto Rico and has severely impacted the island. 

So if you are still looking to have a further impact in terms of helping the recovery efforts, if you donate money before the 20th, Google is matching up to $2 million of the donation. And 100% of what you donate is actually going to the different charities that Google is distributing this funds to for the recovery efforts. 

The only fees that potentially could happen is if you're out of the country and there's some kind of fee for conversion of currency. But outside of that, everything's going to recovery effort. So if you wanted to donate, you still want to donate, please check it out. We'll include the link in the show notes. 

MARK: Yes. That's really, really cool. 

MELANIE: Yeah. 

MARK: Excellent. Got announced very recently, actually. I'm really excited about this. So we're introducing Sole-Tenant Nodes for Google Compute Engine. So basically, this is kind of cool because generally, when you're using Compute Engine-- we're essentially multi-tenant. So there's a lovely visualization that sits on the blog post that we'll link to about how, basically, you could have multiple VMs on a single, physical machine. And we manage that for you with live migrations, and all that kind of stuff. 

Sometimes, though, that's not a ideal scenario for whatever it is you're building. Maybe there are certain compliance and regulation that you're required to comply with, that means that you have to be on a physical machine that's only and solely operated by you, or solely tenanted by you. And that may be a thing. 

Or maybe you run a workload that is super fine-grained. So any kind of noisy neighbor type situation, like at a very, very low level, could be potentially a problem for you. I'm thinking particularly in the gaming space, if you run a dedicated game servers. I'm looking at all of you folks. So yeah. 

But we're excited to announce the beta availability of Sole-Tenant Nodes. So basically, you're the only one on the hardware. 

MELANIE: Yes. They include in the notes how easy it is to start it up, as well as link to pricing. 

MARK: Yeah. So that's all available and ready for you to play with now. 

MELANIE: All right. Mark, I think it's time for us to go talk with Mandy. 

MARK: So super excited to have someone in the studio that I met a long time ago, actually, Mandy Chan, who is the Development Community Manager for Actions on Google. Mandy, thank you so much for joining us today. 

MANDY: Happy to be here. 

MARK: Thank you, thank you, thank you. Super excited to have you here. I know you've had a long and varied history with voice, and working with this platform. But before we stuck into that, can you tell us a little bit about who you are? What do you do here at Google? What's your background? 

MANDY: Sure. So I like to say that I'm voice-aholic. I love this space. So when this thing's first came out, I would open a bank account just to try the voice application from a bank. I would get a Domino Pizza to order pizza, also get a FitBit, to just try the voice applications. So that's how obsessed I am with this space. 

MELANIE: You're very passionate about the space. 

MANDY: Yeah. And I've built many voice applications. And doing the process of building those voice applications, I got frustrated with SSML. And if you don't know what SSML is, SSML is Speech Synthesis Markup Language. I create a open source project for SSML Bureau to help the voice developers, to make building SSML easier. 

So that's who I am. And now that I'm at Google, I am the Developer Community Manager for the Action Google team. And my role is to engage with the developers by creating practical tools and content, basically improving the developer experience is my goal. 

Recently, I worked with my team to build two Codelabs, level 1 and level 2. So feel free to try that and give us feedback. 

MELANIE: So for those who've never worked with SSML, what exactly is speech synthesis-- I can't say the word. But I'm close. Anyway, speech synth-- bleh. Yeah, this is going to be a fun one. Markup language. What exactly does that mean? What does SSML actually mean, specifically for somebody who's never used it before? 

MANDY: A metaphor that I like to give to people who are technical or people who might not be technical is basically-- for people who are technical, it is a markup XML, expansible markup language. And if you are web developers and you know HTML, HTML is a markup language for the browser. You markup the tests. 

And for SSML, it is the markup language to give style to the voice. And I like to say that the synthesizer is like the browser for HTML. 

MELANIE: That's great. That's very helpful. 

MARK: So what kind of things can you do with SSML? 

MANDY: You can do a lot of things with SSML. So when we speak, sometime we pause. So if you want a smart system to take a break and pause, sometime pause can mean hesitations, suspensions. So you can put a brake tech to pause. And you can also, for number 625, it can be June 25 as a date, or it can be fraction. There's many different way to express number. 

Also, one of my favorite SSML tag is called Prosody. And you can change your voice by manipulating, adjusting the pitch, the volume, and the speed. So I know that in this space, we emphasize on giving a persona for your voice application. And this is how SSML can help you create a persona. 

MARK: I think you have a demo, don't you? 

MANDY: Yes, I do. I do. So let me show you guys how we can create a persona by adjusting the Prosody tab. 

MELANIE: And this is Action on Google, right? 

MANDY: Yes. I'm actually just playing the SSML tech in our Action on Google Console Simulator. So this Action on Google is the platform that we provide for the third party developers to build Action for the Google Assistant. And what is Action? 

Action is-- I like to use another metaphor. It's the verb that help people get things done. Turn on the lights, you turn on the TV, all of these are verbs. And Action make our lives more productive, and just make your everyday life easier. 

And let me now demo SSML in the Action on Google Simulator. How powerful that is. 

VOICE: Hello. With SSML, you can make speech fast, or make it slow. You can make it high, or you can make it low. You can make it loud, or you can make it quiet, or all three things at once. 

But first, you can make me spell colors like blue. B-L-U-E. Edit this to try yourself. 

MANDY: So this is just a very basic demo of how SSML can give your voice application a personality. And if we, as an audio tech, for Action on Google Platform, we have a sound library that have all kinds of fun sounds like animal sounds, or windows cracking sounds, different sounds that you can add to your voice applications. 

And for movie, if you don't have background music, it won't be the same. And same thing for the voice application. You want to add the atmosphere, the mood, and give the app some personality. 

MELANIE: So you can do this with, you said, with Actions on Google, and this can be used for any voice application. So anything, it could be used with Assistant, it could be used with any-- 

MANDY: Other platforms, too. 

MELANIE: --platform. 

MANDY: Yes. 

MARK: So what sort of things are you seeing people do with these voice Actions? 

MANDY: Many developers have built Actions for games. That's a pretty popular categories. And they also build for the home automations. I'm still looking forward to what's possible that other developers can build. But right now, games and smart home are the big two categories. 

And one of the game that I can also demo and show you is called Mix Lab. And let me demo this from Action. So this Action basically allows you to mix different musical instruments together just using your voice command. So give me a dreamy guitar. 

[GUITAR PLAYING] 

And I can add layer to it. 

MARK: Cool. 

MANDY: So this is just one of the many way that creativity and imagination is unlimited. It's all up to developers. And I'm really looking forward to the crazy amazing stuff that the developers can do with our platform. 

MELANIE: What's a thing you've built with it? 

MANDY: Good questions. So the first voice application I built is called Doctor Speech. And I'm a strong believer to build applications that help people. And Doctor Speech is a voice application that help people who speak English as a second language to improve their pronunciation. 

Because I was born and raised in Hong Kong, and English is my second language. And growing up, I have this electronic dictionary to learn how to speak English. And when I discover Smart System, it's like entire new world to me. 

I have the environments here every day. I'm forced to speak English. For people overseas, they don't have the environments. So think about how much we can do for people overseas if we have more educational Actions. 

They can use this to help the children, or help people who have autism, different ways that people can use Smart System to learn different things. 

MELANIE: I like that point just because-- I remember when I was trying to learn another language. And when you don't have someone to engage with who also-- and even if you did, if they make you feel small when you're trying to engage with them, it makes you less interested in continuing to pursue that language. You need-- that's why they keep saying children can learn more easily another language just because people are more patient, typically. 

Technology or a computer is going to be-- it doesn't have emotions in the game. That's so great that that's what you worked on. 

MANDY: Yes. I still want to see more Actions that focus on this area. Google focus on the system, get things done, helping people, make their life more productive. I believe that education is the untapped area for this space. 

MARK: That's amazing. So if, from a developer perspective, if somebody is like, oh, this sounds really cool and I want to build an Action, what tools, what stuff have we got available for them to do that? 

MANDY: So we have Action on Google Cloud. That's the place that you should go first. And also, as I mentioned earlier, our team recently just published two Codelabs, level 1 and level 2. It's absolutely beginner level. You can quickly start building Action on Google from scratch. 

And Dialogue Flow is another platform that help people who might not even know how to code, that you can build Action quickly. So let me explain how Dialogue Flow and Action on Google work together. 

MARK: Sounds great. 

MANDY: So Dialogue Flow provides intuitive, graphical user interface to create conversational experience. You program in few example sentences of things that a user may speak, and then you can also specify what values you need to get from the user. It then use machine learnings to understand the sentences and manage the conversation. 

The key part here is that you no longer need to process the raw strings. Dialogue Flow handle that for you. Basically, all the heavy lifting, Dialogue Flow does it all for you. So that's how Action on Google and Dialogue Flow works together. 

And other than that, our team also creates some amazing templates for people to build Action on Google with dial coding experience. In fact, at I/O, when I gave demo at the sandbox, I met a couple of teachers. They stopped by the booth, and they were so excited that I can create tools for my students to learn interactively by using Action on Google and Dialogue Flow. 

MELANIE: Nice. 

MARK: Say I'm a programmer and I want to create an Action. I assume I'm going to code something to make that happen. And then how do I make that code do a thing, like turn on my lights, or open my garage? 

MANDY: So for devices, we have this Google Assistant, SDK. But for voice application, that we can use with the Google Home, the speaker alone, as well as the phone. We have this Action on Google client library. 

So I recommend developers go to our documentations page to learn all these new terminologies and concepts and how to create your own fulfillment. The fulfillment, basically, is the business logic that your Actions can do, can get things done. 

MARK: There are some connections, I think, to Firebase functions, or something like that? 

MANDY: Yes. Yes, great questions. So our team highly recommend developers use Firebase. Basically, you just run the command line Firebase init, and then you can use the function, the Firestore, the database, and hosting, everything in one place. You can create your Action very quickly. 

MARK: OK, and there's integration there between Actions and-- 

MANDY: And Firebase, yes. 

MARK: --the Firebase. Yes, lovely. 

MELANIE: Where do you see SSML going? 

MANDY: SSML is a standard. And it means that there's multiple communities or companies. They have to agree on the standard. And I think the direction right now is really going to where the synthesized voice will become as good as professional actors. 

At Google I/O, we announced that there are six voices coming out for Google Assistant. And Google, we have [INAUDIBLE] that can create almost human-like voices. So this is where I see that maybe soon, we will replace the actor and actress, and the computer can just speak like us. 

And another thing I really like to think of is emotion. I mentioned earlier, this is a new way we can create software. And this is also the time that we can give software personality, by using SSML. And this is where I see that the direction is going that way. 

MELANIE: So having the emotion to make it seem more authentic and more real, and closer to human-like, in a way? 

MANDY: Yeah. Oh, and one more thing I want to highlight is-- so I mentioned SSML is standard. And at Google, we really think outside the box, that standards are just common text that different platform can use, such as break [INAUDIBLE]. 

But we think outside of the box to create some customized SSML such as Media and Powertech. This is unique to Action on Google Platform. And nobody else has that. And the media tech allow you to compose sounds parallelly or sequentially. 

I think I gave a presentation back in December 2017 in New York that I'm not a musician myself. I would love to be. So SSML and this whole voice application space allow me to think like I'm a composer, I'm a sound designer, that I can make something really fun, and people are using that. 

MELANIE: Sound designer with voice, sound designer with music, with different types of various sounds that you have in the background. 

MANDY: Yes, yes. 

MELANIE: So I know one of the pushbacks from I/O was that there was concerns about people having Assistant call up and talk to them, and whether they'd be able to recognize that it's a person or not. And there was-- I saw some feedback that was saying, we'll make sure it identifies itself as a computer. Do you have an opinion on this realistic voice being used from the computer? 

MANDY: Like any new technologies, it takes time for people to get used to it. I think, personally, I'm very open minded and creative. So I understand why people are concerned, the ethical about turning a robot into a human. For me, I'm a big fan for sci-fi. I watched the movie "Her," and "Star Trek" is my favorite TV show. 

MELANIE: Me too. 

MANDY: So I'm not against that, but I can also understand why people have those concern. And this is really a big moment, because in the past, I like to use this example. When you were young and you have to go up to the TV and turn-- 

MARK: How old do you think I am? 

MANDY: I am really bad at telling. 

MELANIE: I was going to say, if you're talking about the days when we didn't have remotes, yeah, I remember those days. 

MANDY: Yeah, those day without the remotes. You have to go up to the TV and turn on the knob. And then we have remotes. 

MELANIE: And that was a luxury. 

MANDY: Yes. And now we don't even need to have any physical bottom and remote. We can use our voice. So this is really a big, big time for us. 

MELANIE: Agreed. Agreed. 

MARK: So when am I going to be able to walk into my house and be like, turn on lights, and everything will work. And I'll be like, start dinner. 

MANDY: You can do it now with the lights part. The dinner part, I'm not quite sure. 

MELANIE: We're not there yet. But you might be able to talk to your Assistant like they're your buddy. 

MARK: Yeah. 

MELANIE: I think there's some examples of that out there, actually. 

MARK: That can talk back to me? 

MELANIE: Yeah. 

MARK: So you mentioned this, actually, a little bit before, when you were talking about Google Assistant, and then also the fact that you could do voice Actions on the phone. Do you see any difference between those two, at least even how they're used, or that whole environment? 

MANDY: Yes. So building application for Action on Google Home, specifically, there's no screen. And when we build voice applications, we really have to think about the dialogue, the conversation. It's like you are a script writer. But when you build for mobile apps or web developments, you don't need to think about all this storytelling, how you interact with another Assistant, smart assistant. 

And another thing is SSML, of course. And basically the UX and UI, I like to think that the conversation flow is like the user interface. But SSML is like the user experience because who are you talking to? The personality that you're creating for your voice applications. 

And one additional point about uprooting voice application, why is that so different? Everything is top level. At any point of the dialogue you have with the Assistant, you don't need to click the mobile or the browser, the next page, or going back to previous page. You can ask anything, say anything at any point of the time. 

MELANIE: That's great. We talked a little bit already about resources and where people can learn more, but do you have any other favorite resources or recommendations, especially people who are interested in working with SSML? 

MANDY: Definitely play around with the Action on Google Console, the Simulator, and use my library, of course. 

MARK: Of course. We'll put a link to that in the show notes. 

MELANIE: But of course. Are you going to be speaking anywhere soon? Doing any demos soon, somewhere else, outside of I/O? 

MANDY: I was a speaker at Grace Hopper last year, talking about my open source. And this year, I am continuing the partnership with Sisters. 

So Sisters is a branch under Anita Borg. And Anita Borg and Sister are the organization who create, once a year, the largest woman engineer conference, Grace Hopper. So on June 21 and July 31, I am partnering with the Sister community to do two online workshops to teach more women how to build Action on Google. 

So we will share the link on the website again. And all this resource about how to build your first Action on Google, everything will be shared on the website, right? 

MARK: Absolutely. Absolutely. 

MELANIE: Yes. 

MARK: Oh, I thought of just one thing I wanted to ask you, too. We've seen really cool examples, I'm just thinking around I/O and stuff, where people do voice actions where there's context. So a follow-up question, I might be like, so tell me more about this particular sports game. And then I'll say something like, who was the top player? And it knows that the context is the original, that sports game. You like how I used sports game? 

Is there anything inside Actions in Google or that ecosystem that handles that kind of thing, to make that a bit easier, maybe? 

MANDY: Yes. There's a game with Dialogue Flow sharing. So they have a lot of interesting and powerful concepts when it comes to building a conversational experience. And in fact, the concept is called context. 

MARK: Oh, cool. 

MANDY: Yes. So you're right, that when we use a voice application, it will be nice that they don't have to keep asking you, what are the artists? You just play the music. If you listen to one song and you want to say, more, the Assistant know that you already chose John Legend. And when you say, play more, it will just play more of John Legend's music. And that concept is called context. 

And another interesting concept is called lifespan that Dialogue Flow provides. And I like to describe lifespan like us. We have short term memory. In a conversation, there's multiple turns, back and forth for five lifespan, in five turns. 

If we keep talking about some random things, then the lifespan will expire like our short term memory. We can't keep talking about something random and just lose focus. So this concept is really powerful in voice applications to give Assistant short term memory. 

MARK: That's super cool. 

MELANIE: I like that. 

MARK: There's so many layers to just voice conversations that I've never even thought about. You're talking about tone, and intonation, and that stuff, and basically how the UI can affect how your conversation happens. It's super fascinating. 

MELANIE: Communication's complex, and thus, this is why this problem is not an easy one to solve. But we've made a lot of progress. 

MANDY: We've definitely made lots of progress. And with the developers, I think that's why we opened up the platforms. And we really want developers play around with our platform and innovate together with Google. 

MELANIE: How progressive. 

MANDY: It's like an open source concept. The more people contribute, the better the technology becomes. Same thing for voice space. 

MELANIE: What languages do we work with right now in terms of Action on Google? 

MANDY: We have many, many languages. I can't even recall. I think we have 16 languages. 

MARK: And by language, do you mean programming language, or do you mean voice language? Just to be clear. 

MELANIE: Good question. 

MANDY: So in terms of programming language, right now our client library is written in Node.js. But in term of common knowledge that the Google Assistant is available, I need to go back and look at how many countries. I think it's available-- there are 16 languages. 

MELANIE: That's great. 

MARK: We'll have a link to double check that. 

MANDY: OK. 

MARK: That's OK. 

MELANIE: We don't have to know right this minute. But that's great. That's good to know. Well, cool. 

MARK: Before we wrap up, we are running out of time just a smidge. This has been great. Is there anything else you want to make sure gets mentioned, or plug, or-- 

MANDY: Wait, wait. I think I need to show this. This is really maximizing the use of SSML and all this sound library. 

VOICE: Two brothers in a van. And then a meteor hit. And ran as fast as they could from giant cat monsters. And then a giant tornado came. And that's when things got knocked into twelfth gear. 

MANDY: So this is how you can use SSML to create a story. It's great for building Actions for kids, for games, for party ga-- anything like that. SSML is powerful. And the demo that I just showed you is really maximizing the usage of SSML, and our team actually wrote a blog post. It's called Events, SSML for Action on Google or Medium. So feel free to look that up. 

Definitely go to Action on Google documentation page. And also, we recently have a new conversation design page. So I think I mentioned earlier that this space is different. You need to write before you even code. You need to write the dialogue before you code. 

So it's good practice that if you have a conversation designer, great. If you don't, you can still go to our conversation new design website to learn about the best practice. Many things can go wrong in voice applications. And in voice, there's no errors. So go to the website and learn about how you can create the best possible experience for your users. 

MELANIE: That's great. Well, thank you. We really appreciate you coming on, Mandy, and telling us all about Actions on Google. Thank you so much. 

MARK: Yeah, thanks so much. 

MANDY: I had fun. I had fun demo-ing the applications. And this is really the space I enjoy so much. I don't consider myself I'm working. I'm considering myself having fun right now, and share my passions, and inspire more developers to build on Action on Google. 

MELANIE: That's wonderful. 

MANDY: And join me on June 21 if you ever want to learn how to build Action on Google. It's online virtual workshop. You can sit at home and learn how to build Action. 

MARK: Ah, fantastic. 

MANDY: Yeah. 

MARK: Awesome. 

MELANIE: Nice. Thank you. 

MARK: Well, thank you very much. 

MANDY: Thank you. 

MELANIE: Thank you again, Mandy. Really appreciate you coming on the podcast and telling us all about Actions on Google and getting to play around with sounds. I like playing around with sounds. 

MARK: Yeah, sounds are great. 

MELANIE: They are. So does our editors. Our editors like sounds as well. 

[SOUND EFFECT] 

MELANIE: Well, OK. Mark, I want to push a Docker image to Google Container Registry via Docker Push. So how can I do that so I don't have to use GCloud Docker dash, dash, Push every time? 

MARK: Well, that's an excellent question, Mandy. Mandy. 

MELANIE: That's right. I'm Mandy. 

MARK: You're Mandy. Well, that's an excellent question, Melanie. I'm so glad that you asked the question that I asked you to ask. 

MELANIE: It's very convenient how we work that out. 

MARK: Yeah, exactly. So I wanted to talk about this for a couple of reasons. One of which is, sometimes it's just easier or more ideal to simply say, hey, Docker Push, rather than using GCloud command to do some stuff, maybe CI pipelines, that kind of stuff. But the other side of this is actually also some things around deprecation as well. 

We'll start at the top level. So if you want to simply be able to say Docker Push or Docker Pull from a Container Registry using your GCloud authentication, there's a command you can run called GCloud Auth Configure Docker. And what that will do is that'll set up some handlers, some credential helpers, within your Docker credentials, and set things up basically, so it's essentially a seamless process. 

This is the preferred way. We strongly recommend that you use this method whenever possible. It provides secure, short-lived access to your project resources, if I read the documentation. And so basically, that is the way. So if you ever find that you're having issues with a GCloud Docker for any reason, use this instead. It's definitely much better. 

But it's worth noting, for this very reason, that GCloud Docker is currently only recommended for Docker client versions older than 1.13, which don't support the use of credential helpers or anything like that. So it's worth noting that I've seen people try and use GCloud Docker with newer versions of Docker. And sometimes it didn't work, and people got confused, and that kind of stuff. So if you're on a new version of Docker, use the credential helpers, GCloud Auth Configure Docker, and that'll make your lives a lot easier. 

It's worth noting if you really, really, really, really, really, really, really, really don't want to use that for some weird reason, or you want to set up individual short-lived tokens just for a very short period. You can do that as well. There is a link to it in the documentation. There's an advanced authentication thing. You can still do that yourself if you need to. But generally speaking, use a GCloud Auth Configure Docker, and you are good to go. 

MELANIE: Great. All right. Mark, going anywhere, speaking anywhere anytime soon? 

MARK: Yes. So yes, I am speaking. So I'll be speaking at the Kubernetes San Francisco Meetup on the 14th of June. Giving a little demo of Agones and talking about that. 

I'll also be talking at the Kubernetes community meeting on the 21st. That's an online meeting. I'll put some details for that also in the show notes. So I'll also talking about Agones as well. What are you up to? 

MELANIE: I am speaking at a joint Women in Machine Learning and Data Science and PyLadies event that's titled Past Two Data Science on June 26. And I will also be speaking at AI For All on June 28. 

MARK: Nice. 

MELANIE: Yeah. 

MARK: Awesome. 

MELANIE: Looking forward to it. Mark, I think that's it for us for this week. 

MARK: I think it is. 

MELANIE: That was fun. 

MARK: It was good. 

MELANIE: That was really fun with Mandy. I'm glad we got a chance to finally do that because I know you've been wanting to do that for a while. 

MARK: Yeah. I agree. There were some really great little sound bites and fun sound things that happened. 

MELANIE: Sound bits and bytes and all the things. 

MARK: Exactly. 

MELANIE: Yeah, we got some fun stuff out of that. 

MARK: Awesome. Thanks, Melanie, for joining me for yet another week on the podcast. 

MELANIE: Thank you. 

MARK: And thanks everyone for listening, and we'll see you all next week. 

MANDY: Add a synthesizer. 

[MUSIC PLAYING] 

And I can add more layer. Add a relaxing guitar. 

[MUSIC PLAYING] 

And a drum machine. 

[MUSIC PLAYING] 

Play it under water. 

[MUSIC PLAYING] 

Yeah, there's all kind of fun songs. You can add many, many layers. That's why I feel like I'm a musician or a composer, just by playing with voice applications. 