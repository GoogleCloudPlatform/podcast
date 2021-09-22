+++
audioDuration = "00:32:48"
audioFile = "Google.Cloud.Platform.Podcast.Episode.162.mp3"
audioSize = 47645590
categories = ["Voicea", "AI", "Audio", "Machine Learning"]
date = "2019-02-13"
description = "Today, Mohamed El-Geish joins us to talk about the voice AI technology powering Voicea."
draft = false
episodeNumber = 162
hosts = ["Mark Mandel", "Gabriela Ferrara"]
title = "Voicea with Mohamed El-Geish"
image="/post/episode-162-voicea-with-mohamed-el-geish/images/hero/hero-EP-162.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/JmTC3MfLY5k"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/aq8qkh/episode_162_voicea_with_mohamed_elgeish/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Today, [Mohamed El-Geish](https://twitter.com/elgeish) joins us to talk about the voice AI technology powering [Voicea](https://twitter.com/VoiceaCorp). [Gabi](https://twitter.com/gabidavila) is back on the host bench with [Mark](https://twitter.com/Neurotic) as we learn how Voicea can improve productivity. EVA, the voice assistant, will record important information for you so you can focus on your meeting and will create tasks lists to help you stay organized. Voicea integrates well with multiple platforms to help accomplish your goals as well. You can send messages to Slack, add tasks to your Basecamp list, and more.

Mohamed explains the process of building Voicea and how machine learning techniques and user feedback have helped make it such a useful tool. Now, Voicea is working to incorporate video, allowing users to play back things like important meeting slides.

<!--more-->

##### Mohamed El-Geish

[Mohamed El-Geish](https://twitter.com/elgeish) is the Chief Architect and co-founder at Voicea (formerly Voicera), a voice AI technology company based in Menlo Park, Calif.  Voicea leverages AI technology to harness voice in the workplace to increase productivity through EVA, Voicea’s Enterprise Voice Assistant.  EVA listens, takes notes, and automatically provides highlights, actions, and recaps so your meetings can be activated.  Voicea can turn talk into action from any conversation with in-person chats, meetings, conference calls, or video conferences.

##### Cool things of the week

* Query without a credit card: introducing BigQuery sandbox [blog](https://cloud.google.com/blog/products/data-analytics/query-without-a-credit-card-introducing-bigquery-sandbox)
* Exploring container security: Encrypting Kubernetes secrets with Cloud KMS [blog](https://cloud.google.com/blog/products/containers-kubernetes/exploring-container-security-encrypting-kubernetes-secrets-with-cloud-kms)
* Golden State Warriors power data analytics and fan experiences with Google Cloud [blog](https://cloud.google.com/blog/topics/customers/golden-state-warriors-power-data-analytics-and-fan-experiences-with-google-cloud)
* Seven steps to making DevOps a reality [blog](https://cloud.google.com/blog/topics/perspectives/seven-steps-to-making-devops-a-reality)
     * GCP Podcast Episode 158: VP of Engineering - Melody Meckfessel [podcast](https://www.gcppodcast.com/post/episode-158-vp-of-engineering-melody-meckfessel/)
* The Telegraph UK: Reimagining media with the help of Google Cloud [blog](https://cloud.google.com/blog/topics/customers/the-telegraph-uk-reimagining-media-with-the-help-of-google-cloud)

##### Interview

* Voicea [site](http://www.voicea.com)
* Voicea Integrations [site](https://www.voicea.com/integrations/)
* Kubernetes [site](https://kubernetes.io)
* GKE [site](https://cloud.google.com/kubernetes-engine/)
* Stackdriver [site](https://cloud.google.com/stackdriver/)
* Docker [site](https://www.docker.com)
* Voicea on LinkedIn [site](https://www.linkedin.com/company/voicea)
* Mohamed El-Geish [site](https://elgeish.com)

##### Question of the week

[What if I’m working in a terminal in Cloud shell, and I want to move to another computer? How can I continue my work?](https://cloud.google.com/shell/docs/features)

##### Where can you find us next?

Mark will be at [GDC](https://gdconf.com) in March, [Cloud NEXT](https://cloud.withgoogle.com/next18/sf), and [ECG](http://ecgconf.com) in April.

Gabi will be at the [Museum of Natural History](https://www.amnh.org/) for their [Brown Scholars](https://www.amnh.org/learn-teach/teens/brown-scholars) program giving a workshop on ML APIs and Cloud Functions. She'll also be at [Cloud NEXT](https://cloud.withgoogle.com/next18/sf).

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 162 of the weekly Google Cloud podcast. I'm Mark Mandel and I'm very excited to be joined yet again by Gabi Ferrara. How are you doing today, Gabi?" >}} 

GABRIELA: I am very good. Thank you, Mark, for asking. How are you? 

MARK: I'm doing OK. Good to be joined by you yet again on the podcast. 

GABRIELA: Yeah, I love being here. It's nice. 

MARK: [LAUGHS] 

That's great. So today, we are going to be talking to Mohamed El-Geish, talking about Voicea and voice applications, which I'm pretty excited by. 

GABRIELA: Yes, he will show us different ways how they're approaching ML to solve their problems. That's going to be fun. 

MARK: Yeah, it's really awesome. And then afterwards, we have a question of the week that I think you're going to ask me. 

GABRIELA: Yeah. So, Mark, what if I'm working in the terminal in Cloud Shell and I want to move to another computer? How can I continue my work? 

MARK: That's a great question. So we'll answer that later. 

[LAUGHTER] 

GABRIELA: OK. 

MARK: So why don't we get stuck into the cool things of the week. I think you had to something right up first. 

GABRIELA: So we announced this week we will be able to query inside BigQuery without having a credit card. 

MARK: Oh, nice. 

GABRIELA: So that means that people, like students and other types of organization, can learn how to use BigQuery without having to provide financial information, and it provides up to one terabyte a month of querying capacity, which is a lot for a free tier. So that's exciting for me. 

MARK: That's very, very cool. Awesome. And my cool thing of the week is a great article talking about exploring container security, encrypting Kubernetes secrets with Cloud KMS. This is actually really, really cool. So if you've used Kubernetes, Kubernetes has a thing called secrets where you can store data in it, especially things like passwords and whatnot. But by default, the Kubernetes secrets are stored in plain text, which if you want to put really secret stuff in there, is not ideal. 

But there is a new thing in GKE, which is application layer secret encryption that is in beta right now that you can take advantage of. It's pretty straightforward to set up. All you really need to do is specify the key that you want to use inside Cloud KMS to manage your secrets, and pretty much, you're good to go. If you have a look at the article, it shows you a little Getting Started guide, as well as links to some documentation to get you going. 

GABRIELA: Cool. Also this week, using data analytics, the Golden State Warriors announced they're going to be improving their fan experience by using App Engine and Firebase together with Map. So you have the blog post there explaining how it's going to be done. And I have to confess, Mark, I did not know what Golden State Warriors were. 

[LAUGHTER] 

MARK: Admittedly, we had to look it up. We had to go online. We're like, oh, it's basketball in Oakland, close to where I live. 

GABRIELA: I thought it was baseball for some reason. 

MARK: I feel like that's something I should know. 

GABRIELA: Yeah, I'm sorry, people. 

MARK: That's all right. There's a really great article by our VP of engineering, Melody Meckfessel, who we are huge fans of, and you can actually listen to her more in episode number 158 from the podcast as well. Melody works very deeply in DevOps land, and she wrote an article talking about a recent survey sponsored by Google Cloud by Harvard Business Review Analytics Services talking about DevOps and basically the road to DevOps. 

And in the blog post, they outlined seven steps for DevOps, as well as a link to the survey for more information. But in there, there's piloting a small project, being an open source player, embedding security with a software development process, high DevOps best practices, provide a massive training, establish a no blame culture, build a culture that supports DevOps, et cetera, et cetera. So check out the blog post for all the details, as well as links to the survey as well. 

GABRIELA: And to finish our list, "The Telegraph" in the UK announced a partnership with Google Cloud to help them to manage their media. They're going to be using cool things, like AutoML to classify content. So imagine all of those contents that they have from way, way back, being able to classify AutoML and be more searchable, more easy to access now. 

MARK: That's very cool. And I think we're trying to get them on the podcast, too, aren't we? 

GABRIELA: Yes, they're going to be on the podcast and they're going to be able to talk more about that. I'll be interviewing them. 

MARK: So stay tuned. Well, why don't we go have a chat with our friend Mohamed over at Voicea. 

GABRIELA: Yeah, let's go. 

MARK: I am exceptionally delighted to be joined by Mohamed El-Geish, Chief Architect at Voicea, coming to chat with us today on the podcast about everything they do. How are you doing today, Mohamed? 

MOHAMED: Good. How are you? 

MARK: Doing pretty well. Thanks so much for joining us today and talking to us all about Voicea. 

MOHAMED: Oh, thanks for having me. 

GABRIELA: So, Mohamed, what do you do at Voicea and who are you? Tell us. 

MOHAMED: All right. So my name is Mohamed El-Geish. I'm chief architect and co-founder of Voicea. I'm responsible for design and other architecture tasks here, and I write code, I do some other tasks that co-founders do, like changing the light bulbs and all that. So almost everything you can imagine at a startup-- true story. 

[LAUGHTER] 

MARK: Feel like that's the thing, yeah, co-founders always have to do. That's awesome. So tell us about Voicea. At a high level, what does this company do? 

MOHAMED: Yeah, so as you can imagine from the name, we're all about voice, and enterprise specifically. So if you think really about how we use voice in our day to day, especially at work, there are almost three big categories. One of them is actions that you take. So imagine, for example, if you have an assistant, like Alexa or Google Assistant, and then you talk to the assistant and it executes the actions for you, like turn on the lights and so on. 

The big category for us is that workflow integrations that you actually want to automate a lot of actions and enterprise. You can imagine, you walk to a meeting and you're lost, you don't know what the agenda is, what is going to happen after the meeting is done. And we want to automate the process of distilling other outcomes of the meeting in a very concise way, and converting those into actions. 

So you can say-- our assistant is Eva, what's the stock price of Google today? Create a task for me to follow up with IT regarding security policies. And this becomes an actual action or task in your task management system, like Trello or your system of choice. And then the other big category is information. So you are in a meeting and you want to capture or query some information from another system. So, for example, you can ask Eva, OK, Eva-- [INAUDIBLE] networks or social media? 

MARK: I'm not doing that now, I promise. 

GABRIELA: No, nobody does that. 

MOHAMED: So focusing on the conversations and focusing on the people there. So that's the biggest value add, I think. When you're in a meeting, you're very focused, you're present, and you have really high attention-- AQ, so attention quotient, I think. That's the word I was looking for. And you want to be focused on the conversation and the people around you, and Eva would basically take care of that, taking notes when you tell the assistant that this is an important moment and this is an action I want to be following up with. 

MARK: That sounds really cool. You've also got integrations with a bunch of different systems. You mentioned action items and actually doing things. Can you tell us, what does that actually look like in my day to day? Am I sending notifications via email or what are the cool things I can do? 

MOHAMED: Right. So a lot of these systems actually allow you to send them emails to create something in them. You can, for example, create a card in Trello or create a task in Jira or a ticket. And we plug into a lot of them, so you can actually go to our website and explore with other systems we plug into. And you configure it easily with a single email address, and Eva will send anything that you want to capture into these systems and basically starting that workflow or kicking off that action, which is maybe creating a note or creating a task and so on and so forth. 

If you imagine that you have your note pad and your pen and you walk to a meeting, you can actually talk and you can tell Eva that this is important and this is what I wanted to capture. Instead of scribbling and maybe losing a few minutes here and there of that meeting, you could have spent focusing more on the people around you and the conversation, for sure. 

MARK: Awesome. So yeah, you're the chief architect and this is the "GC" podcast. I want to get into the technology side of things. What technologies do you use to make it reality? I'm guessing there's two parts to it. I know there's probably the transcription, but then there's also pulling out the highlights and the action items, and actually doing the actions. So what are the bits and pieces that you're using here? 

MOHAMED: Right. So we're really big on Kubernetes. It's something I have very deep appreciation for, coming from a background where I actually built something very similar at Microsoft. It was really hard, it was very complex. And we understand how life right now for startups and companies that are growing is much easier than it used to be a decade ago. So you can actually just walk into your terminal and type in a few commands, and voila, you have a cluster running in GCP, which is amazing, and you don't have to worry about a lot of things, like provisioning and scale and so on and so forth. 

So this is one of the biggest items we have that we don't worry about. So we let Google manage the Kubernetes installation for us, and we worry about the application and growing the business, and basically the infrastructure is well-taken care of in the GKE world, which is the Google Kubernetes Engine. So our biggest focus now is just how to understand the business and growing the integrations and growing the machine learning systems we have, and we don't worry about autoscaling or these things. 

Of course we understand how GKE works and we know how to tweak it. Our systems are very complex as well, but it takes all of complexity away, for sure. So Compute Engine, GKE, Stackdriver, all of these tools-- also, the storage systems and whatnot-- are really great for any startup to go to GCP and start working on growing their business and not worrying about managing services like that. 

GABRIELA: So with all of this tooling that you use, sometimes you face off challenges because you have a learning curve-- you need to learn how to use Stackdriver, you need to learn how to use this and how to use that. How does that effect the development and the challenges that you ended up facing for your product and Voicea? 

MOHAMED: That's a good question. So there are layers of abstractions that might isolate you from the underlying problems that a lot of distributed systems face. So back in the day when you were building your own set up, your own cluster, you had to worry about where I'm going to get my machines. So if I have to buy or provision hardware, I have to put it in a data center, I actually have to worry about the correct space, I have to worry about networking, I have to worry about security-- physical security, I have to worry about a lot of things. 

And then after all this, you still have to worry about the actual systems that are running, like databases and file storage and backing up systems redundancy, high availability. And on top of all this, your application has to be up and running and available and performant and all these nice characteristics. So if you think about the balance between doing all of the above versus learning a framework or learning something that's, I think, relatively simpler, like how to work with Kubernetes or how to work with Stackdriver, I think we're in a much, much better place today. 

It, of course, can improve, meaning that there are actually some startups and some other companies whose entire business model is basically simplifying this even more. But I think it's the right balance for what I would call understanding the complexity underneath or basically peeling the layers of the onion. If you're working on an operating system, you need to understand a little bit of the foundations of this operating system-- how it schedules tasks, how it manages files, and so on and so forth. In the world we live in, you have to understand the data center operating system, which is, in our case, Kubernetes-- how it's schedules Docker containers and what happens when some conditions are met and you might be in the risk of losing your data or not. 

So there are, of course, some constructs you have to understand, but for the most part, I think we're in a much, much, much better place than before and that allows us to move faster and focus on our own application concerns versus learning way deeper things in the stack. And, of course, the thing I will emphasize in this is the more you know, the better you are. Knowledge is power, and if you understand Kubernetes very well and if you understand how Stackdriver works, you're going to be able to perform faster and move faster. 

MARK: Nice. I'd love to hear more about the flow of information, too, in this system. Because I'm guessing there's more to it than just Kubernetes, right? I'm guessing there's some audio coming in there through some processing, maybe. And then are you running custom ML models? Are you putting other tools in it? What's that flow of information? How's that all getting processed? 

MOHAMED: Yeah, it's a great question. So our basic input is audio, and there's some metadata that are associated with such audio recordings. So we join a meeting and we record what's happening. We also respond to commands, and that's a technology in machine learning known as keyword spotting. So we run this in a very real time fashion that you want to respond right away to the user's commands and execute them. So there's a really good separation here between what we can classify as real time versus nearline versus offline processing of audio and other metadata we consume, and we depend heavily on Kubernetes to actually schedule all this workload for us. 

So the flow of the data is basically the audio is being captured real time and we're responding to commands using machine learning algorithms in real time, and we do one pass on the transcript, and then we capture the audio in storage, and then we do another multi-passes on that and we produce the transcript for the user at the end. So as you can see, the biggest focus for us is actually how to be always available, capture the audio, and not drop it. And also, always be performant with really low latency to respond to these commands, so that when you're having this experience, which is fairly unique, you have a very powerful computer or personal assistant on the phone with you on the conference line. 

So we're talking now on this line and we can actually invite Eva, and Eva will be capturing this and responding to my commands-- I'm telling Eva highlight this, or this is an important note, or take an action as an action item, and so on and so forth. So all of these have to be very performant and have very low latency. So we understand the complexities of how to route audio and RTP, or Real Time Protocol, on top of Kubernetes. And we have certain requirements around CPU utilization and memory utilization for these systems that are processing audio in real time, which is very important to understand the constraints of the system when you're using one scheduler versus the other. 

And we're really happy with the bands we have today in terms of how to separate these workloads in different node pools and how to schedule them autoscaling so that we are not always over-provisioning the machines. So our workload varies according to business hours and different locations, so we can actually get an idea of when we're going to need more machines versus we're going to need fewer machines, and so on and so forth for each system. So it's a very challenging problem, but Kubernetes is helping us manage that very well. 

MARK: Yeah, that's fun. What are you building your ML models in? 

MOHAMED: Oh, so that's a great question about machine learning in general and the philosophy we're taking in building systems. So as a very fresh or early startup, when we started a couple of years ago, we had this list of principles about software engineering in general, and specifically about AI and machine learning, in which we a set a set of guiding principles for basically coming up with this decision-making framework. So when you ask somebody in the team, hey, what are you going to use to build this model, there should be a very easy list of criteria to make a decision. 

So, for example, as a company that's centered around voice, and the voice of our users is very important to us to protect, security is always a top priority for us. So a lot of these systems in machine learning are really good about security. We're serving them through Kubernetes, so the training part of machine learning happens, of course, offline, but if you're serving something online, we're protecting the data, we're making sure that everything is secure, encrypted. Then you talk about other frameworks, characteristics that meet the other set of priorities for us, or guiding principles, so you talk about speed of iteration. And speed of iteration or velocity of iteration is extremely important in machine learning. 

Machine learning, by definition, or the way it's done, it's very iterative. It's extremely iterative, meaning that you start with some idea and you build some hypotheses, and then you say, this would work on paper. And you actually go and deploy it in the wild and you get some feedback, and you say, OK, I'm going to have to improve this. And now you collect more data and you keep iterating on it. So there are a lot of frameworks today, like TensorFlow and others, that make this process extremely easy. 

We have also some flexibility around what framework you use thanks to a new framework called Onyx that allows you to build models using multiple frameworks, and at the end, you can serve them using one of them or a single engine that you choose and you can serve from that. So we have some flexibility and freedom that we allow folks on the team to actually use multiple frameworks, including on the cloud if they wish. But at the end of the day, we try to standardize the serving mechanism so that you always serve on Kubernetes. 

MARK: Nice. 

GABRIELA: So with all this machine learning that you do with different models, how do you see you serving the enterprise world, where everyone has different demands, everyone wants a piece of you in a different way? How do you see serving the enterprise world? 

MOHAMED: Yeah. So there is this concept of well-polled machine learning problems in the sense that these kind of problems, when you're trying to solve them, you build up something and you put it out there, and users have some experiences with them. And then they use the data that come from the users or the results of their output as feedback so that they can learn more. And this is where we are, actually. 

It's a virtuous data network effect, meaning that if you are using Voicea today and let's say you're in a meeting, and then Eva transcribes something or creates a task for you and there is a very jargon-y word that you use that Eva did not recognize, you can go to our interface, you can fix it there, and then we will learn from that so that the next time we will actually make our best to mitigate that or fix it for you. 

And then the more users we have from the same industry, we can have a more explicit effort to actually prepare the words that are pertaining to that industry or that domain first before you actually use a system. Or as you can see the data effect, the more you use it, the more clearance from you, and then it becomes even more accurate. So that's really a good place to be at, when your problems is well posed. 

MARK: Oh. But what happens if you have the same term being used across different industries in different ways? 

MOHAMED: Yeah, that's when, actually, you have to collect some metadata about who's talking and it's more personalized, and then you can disambiguate between the two. 

MARK: Oh, cool. 

MOHAMED: So they might sound the same, but they actually might be spelled differently. But because you know who's talking first-- I know your email address, I know some data about the speaker, so it's more personalized towards you. 

MARK: So you basically need the contextual information, right? 

MOHAMED: Right. And we get that because you actually sign up with us, we know who you are, and we let Eva learn from your idiosyncrasies, basically. 

GABRIELA: So that's how you learning accents, too? Because I have problems with some assistants, because when I say some words, they don't get it, what I'm saying. And accent is really hard. 

MOHAMED: Yeah, that's part of the solution. Yep. 

GABRIELA: Nice. 

MARK: That's pretty cool. So obviously, you're doing a lot of voice stuff. Is this is just the beginning? Do you plan on doing more? Where do you see the voice interaction experience going? 

MOHAMED: I would really love if I could have demoed our system, because we are also introducing some video elements. Specifically when it's a presentation or slides that you're showing inside the context of a meeting, it's actually very interesting to see the interaction between the voice and the playback of the slides and the highlights of the meeting, the minutes that we captured. It's a very rich experience, and we're also looking for something that we can capture, whether it's audio or video, to get more context about the meeting and give it to you in a consumable format that is easy to integrate with the workflow. 

So today, we actually also would have some playback of the slides or the video you had. 

GABRIELA: What is the most interesting voice application you created at Voicea-- the most challenging and interesting thing you did with that technology? 

MOHAMED: I have to think a little bit about this. There are a lot of challenges in building a startup from scratch, and definitely when it deals with non-deterministic input, like speech. So we have a lot of machine learning domains that are easier than speech or perceptual knowledge acquisition. So, for example, if you're thinking of recommendation systems, which is something I used to do at my very first life at LinkedIn, I think you have more leeway or you have more freedom in showing the user recommendations and so on, for example, the news feed. 

But when you're dealing with human perceptual tasks, like, I heard something and I need to make sure that this is the transcript for it, it's a bit more challenging. I want to say for sure one of the most challenging ones is keyword spotting and responding to commands. It's almost a magical moment when you walk to a meeting and then can talk to the conference line and you get stuff done. That's for sure a very challenging process and changing problem, because you need to understand the intent of what the user is saying, you need to understand where this information should flow, and you need to convert that data into an actionable outcome. 

The combination of these problems, I think, is the most challenging and most interesting, for sure. 

MARK: Fantastic. On the customer side, though, what's been the most interesting integration you've seen? 

MOHAMED: Oh, definitely integrations with task management systems. Because a lot of people like to keep track of what they're doing and they think of meetings as a place where they get work done and a place where they can coordinate and discuss ideas. And then they come out with maybe handwritten notes or maybe some cryptic notes that you captured during the meeting, because they really want to be engaged and they just type a few words here and there. But then now they can just get of the experience with a very nicely, fleshed out list of outcomes that they just input using their voice. 

I think this is actually where voice shines. It's the natural way of communicating with computers. So anybody who's interested in Human Computer Interaction, or HCI. We can tell you that in the beginning, we had the terminal, we had just words and the command line and a very dull way of interfacing, because that was the limitation of that era. And then we advanced a little bit to the graphical user interface, or GUI. And also, because we couldn't do better than that, if you maybe saw some of the early systems that used voice or other natural UI methods of input, they weren't that good back in the day. So we had to resort to the mouse or the pointer and then some icons and whatnot. 

But now with the richness of machine learning techniques and deep learning and all the advances we had in the past, I would say, five to six years, it became possible to actually walk to a room and have a $20 device that talks to you and you can do things with it, which is, in my opinion, it's just a revolution of the UI and the way we interact with computers overall. 

GABRIELA: Does that meeting should have been an email? You probably are answering that question with Voicea right now, right? Because all the meetings, you'll get all of those keywords, what is important, you send to the integration systems for task management. So in the end, you have everything that you need just by having your device or Eva helping you. 

MOHAMED: I think it's actually a very fair point. In the future, I wouldn't exclude us from doing something similar to tell you, maybe you shouldn't attend this meeting. 

MARK: [LAUGHING] 

MOHAMED: As a matter of fact, we are working on a lot of things that will help you make that decision. One of it is that we have as humans an intrinsic fear of missing out, or FOMO. But you don't actually have to sit there for an hour and listen to the meeting if you can send Eva on your behalf, and Eva will come back reporting to you, here are the important minutes. You can just spend one minute or a couple of minutes to listen to the important minutes or read them. And we worked on this very amazing concept in collaboration, which is teams and channels. 

So let's say I manage a team and we have a meeting with a client and they want to share this meeting with me. So we can just create that channel and then I have access to the channel that has all of these clients meetings. And then I can coach them through it or I can follow up with the customers if I need to be in that meeting and I couldn't make it, for example, or I'm double booked or triple booked. So FOMO is very important, and we want to satisfy that itch by giving you, here's what's really happening with this series of meetings in a very succinct way, like, here are the highlights. 

And I think you can get a really good high value from just reading those or following up on those instead of attending all of these meetings. And I wouldn't be surprised if we end up answering the question, should this meeting be an email instead? 

GABRIELA: [LAUGHING] 

MARK: Right. Or is it going to be like, don't have meetings with John. John tends to waffle. 

MOHAMED: [LAUGHING] 

MARK: No, that sounds great. If people want to learn more about Voicea, where should they go to learn about this stuff? 

MOHAMED: So definitely www.Voicea.com. We're also on LinkedIn, on Twitter. Google Voicea and interact with us. I would love to hear your feedback. Sign up today. It's free and you get a trial for our premium solution. And I hope you enjoy it. 

MARK: Cool. And if anyone wants to learn about any of this stuff you've talked about today-- it sounds like you're working on some really interesting problems-- do you have any resources that you recommend? 

MOHAMED: Yeah. So definitely feel free to reach out to us. We can get you a demo. And if you want to reach out personally, I can also add my contact information here. And anybody on the team-- we have an About page and Contact Us page on Voicea.com. 

MARK: Fantastic. Before we run away, is there any other things that we haven't managed to touch on that you want to make sure that people know about? 

MOHAMED: I think as a parting note, this is a very exciting era and I think folks-- we've heard a lot of things about AI taking over the world and AI being this fourth revolution after the Industrial Revolution, how it's going to change the shape and form of how we do work. I want to emphasize the way we're doing things and thinking about AI, more often augmented intelligence. So it's not here to replace your job. 

Some jobs, over time, will evolve and change and some of them are going to disappear. But I would send the message to everybody to say, think of AI as your friend and make sure that you know more about what's happening, because it's going to affect how we do work in the future. It's definitely on an accelerated path right now. 

GABRIELA: Of course it's here to improve your job, not take your job. 

MOHAMED: But befriend AI. 

GABRIELA: Thank you, Mohamed. 

MARK: Awesome. All right. Well, Mohamed, thank you so much for hanging out with us today and chatting to us all about Voicea. 

MOHAMED: Thank you so much. Thanks for having me. 

GABRIELA: Thank you, Mohamed El-Geish, for helping us understand more about what Voicea is doing and all the insights that you gave on machine learning on this episode. 

MARK: Yeah, super cool episode. Thank you so much for joining us. 

GABRIELA: So, Mark, the moment that you're waiting for. 

MARK: Yeah. 

GABRIELA: The question of the week. What if I'm working in a terminal in Cloud Shell and I want to move to another computer? How can I continue my work? 

MARK: So that's a really good question. And I found this out the other day, I was really excited. So if you haven't used Cloud Shell, it's awesome. It's basically an integrated terminal that's built into Cloud Console. It also has a matching editor and a whole bunch of other fun things. So it means that if you just want to get something done with GCloud or maybe Cube CTL or something like that, and a bunch of other tools that come with it as well. It's just a really handy way of bringing up a terminal and getting things done. 

What's super cool about it is not only do you get persistent disk storage for a certain amount of time as well so you can leave stuff in there, and if you move from computer to computer, as long as you're accessing that on a regular basis, it stays there, which is really great. What I didn't realize and the implications of which is it actually uses a piece of software called tmux in the background. If you haven't used that locally, it's basically a terminal session management. It keeps those terminals alive and persistent. 

So what happens is, say you're working on one computer and you're like, that was cool, and then you go to the office and you're working on your workstation, for example, and you're like, oh, I wonder if there's still a running process running or I want to check what's going on. You open up your terminal and Cloud Shell will be like, oh, hey, I transferred your processes over from the old computer to this one so you can still see what's going on, and it's all the same. 

So, for example, I was doing a bunch of cleanup, I had a slew of App Engine versions lying around. And so I'd written a script to just delete a whole bunch them because it was going to take about half an hour. And I basically started it at home and then got a bus and gone to work. Got to work and then fired up Cloud Shell on my workstation, which was on my laptop, and it was like, oh, I wonder if it's finished yet, and I popped it up, and I could see it was still processing. I was in a completely different browser on a completely different computer, and I was like, that is awesome. 

GABRIELA: Mind blowing. There's this untold joke that Cloud Shell is the best product that we don't advertise. 

MARK: [LAUGHING] I think that's fair. 

GABRIELA: So there is a link on the podcast post with the features. So take a look there. 

MARK: Absolutely. Fantastic. All right, Gabi, what are you doing? What have you been up to? Are you going anywhere cool? 

GABRIELA: So I'm going to the Museum of Natural History. I've never been there before. 

MARK: Oh. 

GABRIELA: But I'll be giving a workshop on ML APIs in cloud functions for their Brown Scholars program, which is for high school girls. So that's going to be nice, because it's going to be in Python, and they know more Python than I do, probably. So-- 

MARK: OK. So you'll teach each other things. 

GABRIELA: Yeah, probably. 

MARK: That sounds good. That sounds great. Fantastic. 

GABRIELA: And you, Mark? What are you going to be doing? 

MARK: What am I going to be doing? I think the thing that's coming up most in March, Game Developers Conference. We will be there-- all of Google will be there in all its glory. If you're into cloud stuff, though, make sure to check out all the sponsor sessions that we're running on Wednesday. We've basically blocked out the day. 

So if you want to learn about Agones or Open Match or machine learning or all sorts of other cool stuff that we're applying to games, definitely swing by. And then there's Cloud Next that is coming two weeks after that. I assume, Gabi, you will be there as well at Cloud Next with me. 

GABRIELA: Yes. 

MARK: Excellent. So I'll be presenting there as well. And I'm sure you'll be there doing other fun stuff as well. 

GABRIELA: I hope so. 

[LAUGHTER] 

MARK: Excellent. And then way later down the line in April, I'll be at the East Coast Games Conference as well. So lots of fun things. 

GABRIELA: Lots of fun things and travel to do. 

MARK: Yeah, exactly. I probably won't be streaming this week, just because I need to get on a plane and go back to Australia for a bit. But otherwise, I'm sure I'll hop on there at some point again soon. 

GABRIELA: OK. I hope you solve your problems. 

MARK: [LAUGHING] 

There are always more problems to solve. The never-ending list of problems. 

GABRIELA: OK, Mark. Thank you. 

MARK: All right, Gabi. Thank you very much for joining me this week again. And thank you, everyone, for listening, and we'll see you all next week. 

GABRIELA: See you all later. 

[MUSIC PLAYING]