+++
audioDuration = "00:41:14"
audioFile = "Google.Cloud.Platform.Podcast.Episode.195.mp3"
audioSize = 59756190
categories = ["Conversational AI", "Natural Language Processing"]
date = "2019-09-18"
description = "Conversational AI is our topic this week as your hosts Mark Mirchandani and Priyanka Vergadia are joined by Cathy Pearl and Jessica Dene Earley-Cha."
draft = false
episodeNumber = 195
hosts = ["Mark Mirchandani", "Priyanka Vergadia"]
title = "Conversational AI Best Practices with Cathy Pearl and Jessica Dene Earley-Cha"
image="/post/episode-195-conversation-ai-best-practices/images/hero/hero-EP-195.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/d5xtxx/episode_195_conversational_ai_best_practices_with/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Conversational AI is our topic this week as your hosts [Mark Mirchandani](https://twitter.com/markmirch) and [Priyanka Vergadia](https://twitter.com/pvergadia) are joined by [Cathy Pearl](https://twitter.com/cpearl42) and [Jessica Dene Earley-Cha](https://twitter.com/chatasweetie). Cathy explains what conversation AI is, describing it as people teaching computers to communicate the way humans do, rather than forcing humans to communicate like computers. 

Later, we talk best practices in design and development, including how a good conversation design and sample dialogues before building can create a better product. This prep work helps anticipate the ways different users could respond to the same question and how the program should react. In multi-modal programming, planning is also important. Our guests suggest starting with the spoken portions of the design and then planning visual components that would augment the experience. Working together as a team is one of the most important parts of the planning process.

We also talk best use-cases for conversation AI. Does performing this task via voice make the experience better? Does it make the task easier or more accessible? If so, that could be a great application. In the future, the conversation may be a silent communication with the help of MIT's Alter Ego.

<!--more-->

##### Cathy Pearl

[Cathy Pearl](https://twitter.com/cpearl42) is head of conversation design outreach and author of the O'Reilly book, "Designing Voice User Interfaces". She's been creating Voice User Interfaces for 20 years and has worked on everything from programming NASA helicopter pilot simulators to a conversational app in which Esquire’s style columnist advises what to wear on a first date. She earned an MS in Computer Science from Indiana University and a BS in Cognitive Science from UC San Diego.  You can find Cathy on Twitter, or check out her latest Medium article [“A Conversation With My 35-year-old Chatbot”](https://chatbotslife.com/a-conversation-with-my-35-year-old-chatbot-part-1-21f0b3ecfcc).

##### Jessica Dene Earley-Cha

[Jessica Dene Earley-Cha](https://twitter.com/chatasweetie) is a Developer Advocate for Actions on Google. She loves to connect with developers and explore VUI (voice user interface) to add another dimension to how users interact with technology. Jessica is part of the leadership team for @WomenInVoice. You’ll find her either spending time with her dog, collecting strawberry knick knack or biking around town. Stay up-to-date on her ventures on Twitter.

##### Cool things of the week

* How Google and Mayo Clinic will transform the future of healthcare [blog](https://cloud.google.com/blog/topics/customers/how-google-and-mayo-clinic-will-transform-the-future-of-healthcare)
* Announcing the general availability of 6 and 12 TB VMs for SAP HANA instances on Google Cloud [blog](https://cloud.google.com/blog/products/sap-google-cloud/announcing-the-general-availability-of-6-and-12tb-vms-for-sap-hana-instances-on-gcp)
* Understanding your GCP Costs [site](https://www.qwiklabs.com/quests/90) and [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqKJx6FwJMRcsnFIkkNFtsX9)
     * Coupon code for qwiklabs is: `1q-costs-626`

##### Interview

* GCP Podcast Episode 188: Conversation AI with Priyanka Vergadia [podcast](https://www.gcppodcast.com/post/episode-188-conversation-ai-with-priyanka-vergadia/)
* Google’s Conversation Design Best Practices [site](https://designguidelines.withgoogle.com/conversation/)
* Actions on Google [site](https://developers.google.com/actions/)
* Interactive Canvas [docs](https://developers.google.com/actions/interactivecanvas/)
* Dialogflow [site](https://dialogflow.com)
* Deconstructing Chatbots [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqK5SM34zbkitWLOV-b3V40B)
* Behind the Actions [videos](https://www.youtube.com/playlist?list=PLOU2XLYxmsIKP4Hh9gQO54naZ8V7mDEQi)
* Assistant On Air [videos](https://www.youtube.com/playlist?list=PLOU2XLYxmsILU6mHf5ERbUBpvKX6GL4rn)
* MIT’s Alter Ego [site](https://www.media.mit.edu/projects/alterego/overview/)
* Google Developers on Medium [site](https://medium.com/google-developers)
* Actions Codelabs [site](https://codelabs.developers.google.com/?cat=Assistant)
* Actions Code Samples [site](https://github.com/actions-on-google)
* Actions on Google Twitter [site](https://twitter.com/ActionsOnGoogle)
* Google Assistant Dev on Reddit [site](https://www.reddit.com/r/GoogleAssistantDev/)
* Cathy's Book: Designing Voice User Interfaces [site](https://www.amazon.com/Designing-Voice-User-Interfaces-Conversational/dp/1491955414/)
* How We Talk: The Inner Workings of Conversation [site](https://www.amazon.com/How-We-Talk-Workings-Conversation/dp/0465059945)
* Talk: The Science of Conversation [site](https://www.amazon.com/Talk-The-Science-of-Conversation/dp/1472140842/)

##### Question of the week

[How to integrate Dialogflow with BigQuery](https://medium.com/google-cloud/deconstructing-chatbots-how-to-integrate-dialogflow-with-bigquery-267b68f4e795)

##### Where can you find us next?

Cathy will be at [Project Voice](https://www.projectvoice.ai).

Mark will be on vacation soon!

Priyanka will be at [GOTO Berlin](https://gotober.com), [Codemotion Milan](https://events.codemotion.com/conferences/milan/2019/), and [GOTO Copenhagen](https://gotocph.com)

{{< transcript "[TECHNO MUSIC] MARK: Hi, and welcome to Episode 195 of the weekly Google Cloud podcast. I'm Mark, and I'm here with my colleague and new host, Priyanka. Hey, Priyanka." >}}

PRIYANKA: Hi. 

MARK: How are you doing? 

PRIYANKA: I am super excited to be a part of Google Cloud podcast from now on. 

MARK: Absolutely. And I know you have been not just a host but also a guest on an episode previously, but now you'll be joining us as a host, as well. 

PRIYANKA: Yes. Yes. I'm super excited about that. 

MARK: It's super awesome. And of course, in our interview today, you and I got a chance to sit down with Cathy and Jessica about some best practices for conversation AI. They're both Googlers here, and they work on different teams. But it's really cool to hear the different perspectives on what's important and how do you design good conversation systems. 

PRIYANKA: Yeah, and the more exciting part is Jessica brings the developer perspective, and then Cathy brings her conversational design experience from over the years of building IVRs and then moving into building conversational design. So I'm super excited for them to be here. 

MARK: So it's a lot of fun. But we also have a cool question of the week. I saw that you put out a blog post about, "how do you integrate Dialogflow and BigQuery?" Those are two very different tools. 

PRIYANKA: Yeah. Yeah. 

MARK: So we're going to be getting into what that looks like a little bit later. But before we do that, let's talk about our cool things of the week. 

[TECHNO MUSIC] 

PRIYANKA: Yeah. So I have something cool. I read this blog post that Thomas Kurian himself had published out on Google and Mayo Clinic's new revolutionary partnership, in terms of AI in health care. And it's really exciting to see how we are able to take the AI innovations that we do at Google and apply them to some of the practical applications-- like the patient experience, clinical experience, and then diagnostic and even research. So there's going to be some more stuff as a part of this partnership coming up, which will be a combination of the security and the compliance that Google Cloud offers in the platform, combining with the infrastructure. So check out the blog post. But in general, it seems to be a very exciting venture where we're going to explore possibilities in health with the Google Cloud. 

MARK: Yeah, it's always super cool to hear about different companies that are using GCP. But I think a lot of it, like you mentioned, is really based on what the technologies are enabling them to do and then kind of all the cool research and future potential that comes out of that. 

PRIYANKA: Yeah, very exciting. 

MARK: Super, super cool. Well, I actually have two cool things of the week. The first one is some really, really big Memory Optimized Virtual Machines. And when I say big, I mean big. Because apparently, and this is news, these are 6 and 12 terabyte Memory Virtual Machines. 

PRIYANKA: Wow. 

MARK: Which just blows my mind in every possible way. Because I remember the day of trying to get my hands on, like, 256 meg chips and putting them into an old desktop computer, probably cutting myself on the RAM one too many times. So to think about the scale of how it's changed from back in the day all the way to these 12 terabytes of memory, I mean, it's astonishing. 

PRIYANKA: Yeah. 

MARK: The blog post is talking a little bit about how these are certified for SAP Hana and using it for those types of workloads. But I guess you can probably just use them for any other application that might need 12 terabytes of memory to run. 

[LAUGH TRACK] 

PRIYANKA: Yeah. This is some cool, exciting stuff. 

MARK: That's the kind of stuff that I think that when customers come up and they see, oh, look. We have either this technology or these tools available. That's when they can say, well, we're really good at our subject matter, what can we do with these new tools? What can we find out? And just like Mayo Clinic, I think there are some cool opportunities there. 

PRIYANKA: Yeah. What was your second cool thing of the week? 

MARK: My second cool thing of the week is a great little educational hands-on lab. Actually, it's a quest. So it's a full set of videos and labs, and then a little quiz the end, all called Understanding Your GCP Costs. So I've been working on this for a while. I've talked about it in a couple of the previous podcast episodes. And you can also see these videos on the Google Cloud YouTube channel. 

But it's kind of a good starting place to look at understanding your GCP costs, right? I mean, it's incredibly important to understand what tools are available for you to measure your costs. And then starting with this quest, and then the next content that will be coming out, it gives you a little bit more hands-on guidance for how to actually control your costs. So things you can put into place, there's a bunch of different discount tools, like sustained use discounts, committed use discounts, but then also identifying resources that you're not using, and then putting budgets and quotas into place so you can control it. 

It's actually really super cool because when you think about it-- I think a lot of people just use the cloud, they use the machines, they go for it. And then they're like, OK, I have to pay x amount. Well, as you get to be a big business, that doesn't make as much sense. You need to plan. You need to control your costs effectively. So this is a really cool way to start with that. 

And I wanted to tease out that there is a code-- I don't know how long it'll last for. So if it doesn't work, ping me or something, and we'll figure something out. But there's a code-- 1Q-COSTS-626. So I'm sure that'll be in the description the show notes. But if you use that, you can get the labs part for free. So Qwiklabs I think normally has credits that you need to do the labs, and this will let you bypass that. 

You know, I really, really recommend it, especially people who are in finance, to get a better grasp on what the cost controls are. But I think this is introductory level enough that everyone maybe should look at getting a baseline understanding of where those costs are coming from and how to analyze them so that they can, kind of, tackle the cloud a lot more responsibly. 

PRIYANKA: Talk a little bit about, like, how do I set up my organizations so the costs are properly limited and stuff in that video series that you talked about earlier. 

MARK: Absolutely. So there's a video or two on resource hierarchy and organizations. And again, these are things that the average individual user, someone who's not either using it as part of a business or as part of a small business, may not run into. But especially for large businesses and enterprises and so forth, the organization is a very, very important part of how you structure your Google Cloud resources. And learning about that can be really, really handy for scaling out. 

PRIYANKA: Yeah, I remember those questions coming up a lot with enterprise customers that I spoke with. So I think it's amazing to have that resource, and we'll make sure that the link for the videos go in the description. 

MARK: Absolutely. Well, with all that cool stuff out of the way, let's get right into our interview with Cathy and Jessica. 

[TECHNO MUSIC] 

Cathy, Jessica, thanks so much for joining us today. First things first, tell us who you are and what you do. 

CATHY: Yeah, so I am head of conversation design outreach here at Google. And basically, that means I talk a lot about conversation design, what it is, and try to bring awareness. 

JESSICA: So thank you so much. I'm a developer advocate for actions on Google, which means I get to built a lot of voice applications. And through that, I build a lot of content from the learnings that I get so we could teach other third-party developers how to build for Google Assistant. And then with that, I also get all the feedback from developers on what goes great and what goes not so great and bring that back to the product team so we can make it better. 

MARK: Gotcha. So first things first, Cathy, what is conversation design, right? You mentioned that you kind of focus on that. I don't know what that is. 

CATHY: That is an excellent question that I'm asked many times. Basically, you can think of it as we are trying to teach computers to communicate like humans and not the other way around. So basically, rather than have you learn some complex way of either speaking or typing or tapping or swiping, we'd rather leverage how humans have been speaking-- for what, 150,000 years-- and make it that much easier to get things done, get the information you need just the way you're naturally used to doing. And so we want to work in the world where we're thinking about how humans communicate, and then applying that within the technical constraints that exist today. 

PRIYANKA: So I have a question about that. So I think we got the definition of how to work with conversation design. But, Jessica, I have this question for you. Is this any different than how we interact with maybe, say, apps or websites, and do developers have to do something specific when they develop for voice? 

JESSICA: Oh, definitely. Developing for voice is very different than something with GUI, because there's a lot of control as a developer when you have a GUI. There's only so many buttons a user could push. Versus a conversation, at any point, someone could say anything, and you're supposed to support the user through that. And it's not just necessarily that they could say anything at any time, because most people-- what I've learned from Cathy-- they're cooperative. They want to support you and be able to talk through things. They're not going to be just bringing something crazy into the conversation. 

It's more on how people explain things or how they communicate could be slightly different, and our voice applications, or actions that we call them in Google Assistant-- we call those actions instead of apps. We have to figure out how to capture those different types of utterances that users can say and give them the appropriate response. So it's definitely a different mental shift when it comes to thinking about how you build. 

And something that I've seen, and I actually experienced when I made my first application, was I built it, and as I was going to the docs, it said Design. And I was like, that's cool. I'll do that later. Because as a web developer, that's what I would do. I would kind of build all the scaffolding, then I'd bring in all the design after. And it turns out, nope. Can't do that this time. You have to have the conversation design first, and then you build after. 

MARK: So are there like a list of best practices? Are there a bunch of like design docs on how to do conversation design? 

CATHY: Yeah, we actually have established a lot of best practices and principles. You can go to, for example, actions.google.com/design-- get a whole ton of information of even what is it, how to get started. The first thing we always recommend to people, whether you're a developer or a marketer or whoever, whatever role you have, is to start with something called Sample Dialogues. And what that means is, basically, you're creating a conversation. It's like a movie script. It's a back and forth between the user and the action. 

And that just really helps you sort out the complexities of what this is going to look like. Because a lot of times, like Jessica mentioned, people think, oh, yeah. The words-- we'll just fix those later. But in fact, the words are the structure, and it's going to impact the flow and the wording and everything throughout your whole development cycle. So you might as well start with design in the beginning and really save yourself a lot of headaches. 

PRIYANKA: So can anyone write these conversation design practices? Or when we start to develop, is it just the developer? Who are the stakeholders involved when somebody is thinking about designing something like a conversation? 

CATHY: I think in the ideal world, a team will have a conversation designer as part of it. And that person can really help steer the direction of how things should sound, what things we need to keep in mind, what are we going to need from the back end-- all that kind of stuff. Now, I understand in the real world, not everybody is going to have a conversation designer to work with. So instead, in those cases, I definitely encourage the developer or the project manager, whoever it is, to really study up on best practices and then write sample dialogues. 

And then what you do is, just like in Hollywood with a movie script, you do a table read. You read them out loud. Because sometimes we write formally, and when we actually hear those things out loud, they sound kind of stiff and awkward. So you really want to read out loud with other people, and you'll quickly get a feel for where things are going well and where things are going wrong. And that can really help anybody really get started and do a better job. 

MARK: Yeah, I think the last time we chatted with Priyanka a little bit about some of the other chat options. Specifically built into Google, we kind of brought up the idea of people being frustrated by being very locked into, kind of, an older school version of a Voice System where it wants you to say something very exactly. Like, "I want one small cup of coffee that is dark brew, please." And it adds a lot more effort into it, as opposed to how people might more naturally speak. You mentioned earlier, Jessica, that you thought about the code part of it first and the design part of it later, and that can lead to a lot of challenges using these best practices. How do you kind of convince somebody to actually take them into account and actually spend the time upfront working with them before just, kind of, trotting off and doing the code part? 

JESSICA: Oh, yeah. That's something that I constantly see whenever I go out, especially when I do a one-day workshop. It's really unrealistic to have a great design, a great voice application built in one day-- it takes a lot of time. And so I definitely try to do my little soapbox speech of like, oh, my gosh. I spent hours thinking these are technical issues when I was building prior to having a design. It turns out it was a design issue. I didn't know where I was going in regards to the conversation flow. 

So I think that's kind of my mantra. That's what I'm constantly trying to figure out. I don't think I have a great, kind of, convincing argument besides sharing my story and sharing the statistics on, like, it takes more time, and you're going to end up spending more developer time in the long run trying to fix those mistakes. And because voice is still fairly new, I think it's more people are going to be experiencing that. And then they realize and they go, cool, Jessica and Cathy, they were right. 

MARK: So is there an example you can share of where someone might have run into that or an example that you've run into specifically? 

JESSICA: Oh, yeah. My very first voice application that I built. The point of the application was to mock or mimic technical interviews. Because the hard part, when it comes to interviewing, is not so much being able to solve the technical problems. It's hearing the problems and practicing it, and hearing it from someone else. I'll say, cool. I'll build this thing. And it's a really cool tool. I would have loved to have had this when I was going through my process of looking for a job. 

And I would get into these weird, kind of, scuffles where I would start, but how would I bring the user from giving them the information, bringing them back, and letting them know how to come back. And I knew how to do that technically, but when I sent it out and had people try it out, it wasn't natural. It felt weird. 

And I was like, well, how can I be clever and, like, put in little flags and try to bring them back? And it's like, oh, my gosh. Why am I doing all this overhead to solve our problem when I could have just stopped and went, OK. Let me talk to other people. Let me figure out and build the actual conversation design by using sample dialogues. 

And I think something that could be really challenging or something that-- I know when I mention to folks, especially developers, build some sample dialogues. I get the, but what is that? And it's literally writing down-- pretend you're the action and pretend someone else is the user and having that conversation. So I usually like telling people, just grab two friends. Tell one of the friends, you are the action. This is what you do. The other friend, you are the user. Now talk. And just let them naturally talk and write that down. And how they're doing it is the best free way to do that. 

CATHY: Yeah, just to give you a really basic example, I think a lot about yes/no questions and how often we fail the user on those. Because a lot of times people will say, well, I asked them a yes/no question. So let's say, I asked you, do you like candy? And you might say, yes-- 

MARK: Yes. 

CATHY: --and you might say no. 

MARK: I do like candy. 

CATHY: Yes? So you said, yes, I do like candy. You didn't say, yes. 

MARK: I just broke the chatbot. 

JESSICA: Well, that's the point. You shouldn't have broken it if somebody designed it well. Or I might even say, like, well, do you count chocolate? Which is neither a yes or a no, but it's a very natural thing for someone to say. And so someone who's really thinking things through and following best practices is not just going to be like, oh, I told them to say yes or no. That's all I'm going to accept. 

They're going to say, hmm, what are related things they might say? Or if maybe you're booking a table at a restaurant and you say, how many people in your party? And maybe I say, well, do you have outdoor seating? Now, that's a related question, but it's not a number like you asked me for. That being said, I'm not going to suddenly say, how tall is Barack Obama, when you asked me, how many people in your party? 

So that's what we call adjacent topics. So you might not answer the exact question, but the user will say something related. And you need to anticipate those or things are going to fail very quickly. 

MARK: Yeah, I think this is something. Priyanka, you brought up the last time we chatted about people don't know exactly how to have a conversation. 

PRIYANKA: Yeah. 

MARK: Which is, first of all, a fascinating subject. I mean, Jessica, you were mentioning earlier, if you tell two people to have a conversation, boy, they get really awkward really quickly, don't they? 

JESSICA: Oh, yeah. 

MARK: Because they think about everything they say. But people don't normally think about everything they say. They just kind of keep talking, and eventually their brain might catch up. But for people like me, no. Words are way faster than thought. So you can just keep on talking. 

But it's an interesting thing. Because when you actually call it out, I don't think a lot of people do think about how much we use, especially contextually, right? Which is one of the hardest things to grab, but one of the most important pieces of a conversation. Because you can ask a question like exactly that-- do you have outdoor seating? It's like, oh, well, you're talking about this restaurant. You're talking about this. How do you handle that kind of idea that people don't know how to have a conversation? 

PRIYANKA: Yeah, I think it goes back to the point where you don't just start coding, right? You start to think about how it's going to have interaction with, not just one person, but different people, right? Because I could talk about things in a different way. And I think we talked about this last time when we were like, if I want coffee, depending on the time of the day and the day and the frustration amount, I would ask for coffee in different ways. But I'm happy to be like, wow. Coffee-- this is amazing. Oh, my gosh. Can I just get a coffee right now. I'm so frustrated. 

Like, things like that I think we have to incorporate how a user could react in different situations and ask for the same thing in different ways. And then, I guess, people coming from different places with different accents could ask for certain things in different ways. So things like that. But, Cathy, I would like to ask you, what are the things that are hard to deal with when we are working with conversation? 

CATHY: I think one of the things that's difficult, and Jessica was talking about the difference between something like a GUI versus a VUI, as we call it-- Voice User Interface. Is the fact that, with a GUI, you know what they did. They pressed a button, they swiped, they chose a menu item. With voice and natural language understanding, it's a little bit more of an educated guess. Speech recognition accuracy has improved dramatically in the time I've been working in this field, but it's not perfect. And human speech-- we don't get it right all the time either. 

But when humans have a misunderstanding, we are really good at what we call conversational repair. If you say something like, oh, I went to the such and such restaurant last night, and I didn't hear that. I'd say, what restaurant? And you'd say, oh, this one. And we'd move on. And we're very good at that kind of repair. And that's something you really have to anticipate when you're developing these conversations, which is, no matter how good your design is, no matter how good your prompts are, people are going to say things that you did not expect, and you will get an error. 

And you need to spend actual time thinking through, what is my strategy for handling when things go off the rails? How do I get somebody back on track? And just doing the default of like, sorry, I didn't understand. Please, say that again. It's terrible. It won't work. But we see it all the time. 

MARK: It's a great way to get your blood pressure up real quick. 

CATHY: Exactly. And so we were able to think more like, well, what's the user doing? What did we just ask them? Let's rephrase the question a bit. Oh, we have another error. OK, let's give them more information. Maybe they can't find their account number, and we need to tell them more. You have to know upfront you're going to spend time on error handling or repair, and that is going to be the make it or break it difference between your users having a successful experience or not. 

MARK: Yeah, it was kind of mentioned earlier that sometimes people will say something completely unrelated to what you were asking about. Is that handled in the same way? Do you try to handle it in a context shifting way and you say, now we're talking about this. So the AI just has to keep up? Or do you try to keep them in line with what the original conversation was? 

CATHY: It kind of depends on the goal. It's like, if you're trying to book a table, then you do want to get them through those questions. But you should be flexible. You don't have to answer the questions in the exact same order. On the other hand, if they're saying something completely out of context, you may not be able to help. But another thing I want to mention is, basically, if somebody says something that you can't do, acknowledgment is really important. 

So for example, if I go to a concierge at a hotel and I say, hey, can you rent a car for me? And let's say they can't. Let's say they only do dinner reservations. If the person just said, I don't understand. Do you want dinner reservations? I'd be like, no, I want to rent a car. What the human will actually say is, I'm sorry, I can't rent a car. Would you like dinner reservations? So if you look in the logs, and a lot of people are requesting a feature that you do not have, don't just say, I don't understand. You should do this other thing. Say, oh, sorry. We don't do that feature yet. I can do this or that. 

People like to be acknowledged. When you have a frustrating day and you're talking about it with somebody, you don't want them to say, well, I don't know how to help you. You want them to say, wow. I hear you're saying that you had a difficult talk with your co-worker. People want to be acknowledged. And this is true even for a voice user interface. 

MARK: So it's incredibly important to make sure that the conversation system is very clear about what it can and can't handle, but also that it still tries to keep users down that path while matching all of the kind of requests of that. I mean, I'm assuming this is kind of covered in those best practices of things to keep in mind when you're designing a system. 

CATHY: Yeah, for sure. Like you said, you want to further them towards the goal, while at the same time keeping them from having a frustrating experience, and, sort of, gently guiding them back on track 

JESSICA: Yeah, and most third party voice applications don't do everything. They don't necessarily and shouldn't replicate the Google Assistant, because Google Assistant can do all the things. Generally, a lot of what developers are building are specific to a niche or to a certain topic. And so that's where, I know, I've built several applications, and there are times where users are not as knowledgeable, that I can't tell a joke because that's not what the action's about. 

But most likely the user is thinking that they're talking to Google Assistant. And so I have an intent in several of my actions going, hey, you might be wanting Google Assistant. Just say goodbye, and it'll get you out. And when you want to chat about x, say, hey, Google, talk to blah. And that way it can get the user to what they want to do, and it's not foreseeing me as a developer trying to solve all the problems because that's not the purpose of individual actions. 

PRIYANKA: Yeah. And so what are some of the common pitfalls that developers actually come across when they're trying to develop? I think we talked a little bit with Cathy about, how do you actually repair conversation with the conversation design aspect of it? But we did touch a little bit on the developer aspects, and what do they see as challenges? 

JESSICA: I would say the biggest challenge is not choosing the right use case. Doing things through voice is great, but it's not helpful when you're searching for something particular. And there's lots of options, and you're trying to narrow it down. 

It might be helpful to narrow it down using Voice. But then maybe at the end, the user might want to be able to see the last three options because they want to get into the details. And that's where you could use multi-modal. 

Having a smart display or being able to show it on a smartphone might be a helpful setup instead of just depending all on Voice because that might not be necessarily the best use case for that. And so I think the best use case-- and I usually tell folks, if it's something you're already doing with your voice, that's a great thing to make into an Action. If it's something like you're using, let's say, spreadsheets, that might be a little more challenging to go, OK, if I want to get column 4 and row B, and trying to figure that out. If your spreadsheet is smart, and you have actual labels on things, and it could make sense, then that would make a lot more sense. 

PRIYANKA: You brought up a great point there about multi-modality. And with the new devices out there, we are getting into that world. So Cathy, would you mind touching a little bit on how do you design properly for those multi-modal devices. 

MARK: And just for anyone who may not be sure what multi-modal means, a definition would be fantastic. Not for me, but you know, for everyone else. 

PRIYANKA: [LAUGHS] 

CATHY: So with multi-modal, we're generally referring to the case where there are different ways you can interact with the technology. So, for example, Jessica mentioned smart displays, like the Google Home Hub. So that is what we call a Voice forward device. 

So you can do a lot of things with your voice, but there is the addition of a screen. And so you can see things like-- if you're shopping for a blue shirt, you can see the pictures on there. And something like a phone, of course, is also multi-modal because you can type, you can speak, you can tap, you can swipe. 

So when we were thinking about designing for these new surfaces, it's exciting because something like the smart display is very new. And we haven't quite all figured out exactly what all the best use cases are yet. But generally, our guidelines are that when you are thinking about this, the first thing you need to understand is that although it would be great, unfortunately, you can't just design once and be done for all surfaces. Obviously, there are things that are in common across all of them. But there will be some differences as well. 

So our advice is to start with the "voice first" experience, like the smart speaker. Because believe it or not, that is often the most complex or maybe most constrained case. And if you get the conversation done right for the smart speaker, then what you do is you go to something like the smart display, and you say, OK, now we have the option for visual elements. Where would it benefit the conversation to add visual components at this point? And then you can do the same for the phone as well. 

So start with the voice-only experience and expand from there. A lot of times, people go with, oh, we're going to have the pretty pictures first, and then they get back to smart speaking, and like, I don't know what to do. So definitely start with voice. 

MARK: What also adds a tremendous level of complexity when you're talking about mixing and matching all these different interfaces-- not only is it now you're doing conversation design, you're also doing all the actual interface design. And then, I have to imagine, it's exponential in terms of difficulty because you're trying to mix them. 

And there's enough '80s sci-fi shows out there that showed people interacting with computers, and then talking to the computers, and maybe even using some kind of third-party tool, all of these things mixing together to create one single experience. That's going to be hell for UI designers, whether it's graphical, visual, or a combination. What does that look like right now? 

CATHY: [LAUGHS] I loved how you used the words that it's hell. 

MARK: It's a significant challenge. 

CATHY: No, you're right. And I think it's important to acknowledge that. And if you are, for example, running a business, or you're the person who's the decision maker about we're going to do this conversation Action, you just have to keep in mind that it's going to take some time. And you have to have these different skill sets. 

So you have to have a visual designer. You have to have these different folks who are going to work together. And we have established some of these nice processes where there's handoffs. 

And so we really are establishing these best practices to deal with these new multi-modal services. Because, as you say, it does add complexity when you've got to be thinking about all these things. But again, if you go through the process in the right order, you'll save yourself a lot of headaches and hassles, and it'll be a little smoother. 

JESSICA: Definitely. And I would say, even just building a Voice conversation application, it's not where you could just work in the silo all by yourself. It's really working with the different parties and working together. So I definitely think meeting with the "voice first," building that experience first lays out a lot of great groundwork. And then adding the visuals, they complement the support. 

And even the visuals-- we do have a new tool called Canvas, where you can bring in HTML, CSS, and JavaScript into play, which is a toy, completely new experience. And you can play games and do lots of fun interactive simulations too to really make the experience more rich. But definitely you want to start with voice. And then you can add in those fun features later. 

But I want to bring up the Canvas because even with Canvas you don't necessarily have it set up where there's buttons because it's a surface. You could just use your voice. And so you don't need like a green button to go. You just say, go, and just make that more part of the visual elements. 

And so an example would be-- let's say you have a game where there's a little character. Instead of pushing a button that says Attack, or Go Home, or XYZ, you just push on the monster you want to attack and push on the Home icon thing in the background. So you could go and tune it that way instead, or, of course, use your voice to control your characters. So it's a different type of UI experience as well. 

PRIYANKA: So if you were to pinpoint some of the use cases for the listeners today, what would be some of the best use cases to handle or tackle as the beginners who are starting to think about creating something for Voice? 

CATHY: Yeah, as Jessica mentioned, one of the good indicators is, do you have conversations with other humans about this thing? Because that's often a good indicator. Also, of course, the context-- where is the person? 

Are they in the kitchen and their hands are busy? Or they're a new parent, and they're always holding their babies, so they don't have use of their hands. Or they're in the car, and you really need to reduce the cognitive load. 

But you really have to ask yourself, what is better about someone doing this task through something like a smart speaker than on an app? You know, maybe it's not. And I think a lot of companies get excited and are like, we're going to build for Voice, it's going to be awesome. And then it fails, and they're like, I don't understand why didn't it work. And it's, well, because it's faster for me to do it on my phone. 

So you need to think through some of these things like, what's the value-add truly for doing something on a smart speaker? The other thing I was going to say is that a wonderful place to be thinking about conversation design is really through the idea of inclusive design. Which is we want to make sure that whatever your product, your feature is, or the information you have available, can everyone access it? 

And Voice technology is really reaching the point finally where it's getting mature enough to help really the people who need it the most-- maybe somebody who is visually impaired, somebody who has muscular dystrophy and can't use their hands to do things, but they can use their voice. And that's really one of the places, I think, right now Voice is the most powerful. 

But to me, this idea of inclusive design isn't just about this one group or that one group. It's really about all of us. Because all of us throughout our lives have situational impairments where maybe you're walking in the door, and you're holding your groceries, and you briefly don't have use of your hands. Or I can't find my reading glasses, and I can't read this important text message. Or I broke my arm, all of these things. So really, it's about building for everybody. 

PRIYANKA: And do I need to be a machine learning expert? And do I need to know natural language processing in order to start building for Voice? 

CATHY: No, which is fantastic. I know when I first started in this field, I was really intimidated and scared that I would have to learn all these really interesting concepts and really challenging concepts. And the time to get up to speed on that would take a while. 

And what's great is we provide a tool called Dialogflow that does the NLU for you. And so what's great is that you as a developer identify the different intents or functionalities that the user could potentially have within your Voice application and just provide training phrases to specify for each of those possible interactions. And it handles a machine learning for you. 

So what's really great is you don't need to do that. But if you're interested in that, you can also connect Google Assistant to your own NLU as well. So you don't have to use Dialogflow. So if you do have that background and that knowledge, great. Connect it to any other NLU that you have. But if you don't, don't worry about it. 

MARK: So it sounds like there's a bunch of cool tools out there people want to get started, including Dialogflow. And, of course, Priyanka, you've got the Deconstructing Chatbot series that goes into a little bit of this and links out to a bunch of other useful resources. 

PRIYANKA: Yeah. We also have a bunch of code labs to refer to while you do the Deconstructing Chatbot videos. 

MARK: So if people are really interested in that, that sounds like a good starting point. If people want to learn more about the best practices, you mentioned the link earlier. Are there other good resources for those best practices if you're thinking about conversation design? 

CATHY: We've also got some videos out there on things like conversation repair. Also persona, we didn't really touch on that. But when you are designing, you want to be thinking about the personality and the characteristics of your Action or your conversational experience. So persona is another important thing. So we have some videos, resources for that as well. 

MARK: So what's in the future for a conversation design? Because I saw this little thing about Alter Ego. 

CATHY: There's some pretty interesting prototyping work going on right now. Alter Ego is one example, which is out of MIT Media Lab. And it's all around the idea of a lot of us might be comfortable talking to our smart speakers in our own home, but maybe not when we're on the bus or out about on the street. Or even in our office, it could be a little annoying to hear everybody talking to their computer. 

So there's this idea of silent speech or subvocalization, which sounds very sci-fi. Where essentially, you are wearing something along your jaw line. And what it's doing is it's picking up pre-speech signals. So as you start to form words, before the words actually come out of your mouth, you're doing these tiny little signals that are actually indicating what it is that you're about to speak. 

And so this technology is picking up on those pre-speech signals and translating them silently into words, which could then be passed along to a voice assistant. And, of course, the responses could be done in your headphones, so no one would actually hear it. And I encourage people to look at Alter Ego video that MIT Media Lab put out. Check it out. 

MARK: So that's like an example of someone taking this conversation design and just shortcutting the actual meeting-to-talk part. 

CATHY: Well, you're still talking. It's just that the words are not audible. 

MARK: Which, to me, is what I would define talking as, but-- 

CATHY: Speaking, maybe I should say, or conversing. I don't know what the right verb is. But you're still having a conversation. But you can think of it just like when you're typing to somebody, you're talking to somebody. But the words are not spoken out loud. 

MARK: I mean, it could open up a lot of avenues. It sounds almost like an additional interface to communicate with these things. But I'm guessing it would still follow a lot of the same conversation best practices and guidelines. 

CATHY: For sure. And even if you're talking to, say, a chatbot that's typing-only, you're still following the same best practices. And when you type to a chatbot, it's much more like spoken words than it is like if you're writing a formal essay or something like that. So even though it's a different modality, you're still following conversational principles. 

MARK: And what about cool tools coming up or any other future products that are really cool for people to check out? 

CATHY: Yeah, we recently just announced Canvas. And that's like the cool new thing right now, where, again, you're bringing in web technologies into Voice and making that Voice forward. So that is really exciting. And I believe that just got announced for GA this month. So that's like hot off the presses, the newest thing right now. 

PRIYANKA: Awesome. Well, I guess we did talk a little bit about who you are and what you do initially. But if people want to find you, what would you like to share, where you're going to be in the next few days, or your Twitter handles? 

CATHY: So I am cpearl42 on Twitter. I also log on Medium from time to time. And I'll be speaking in January at Project Voice. 

MARK: And what is Project Voice? 

CATHY: Project Voice is going to get together a whole lot of Voice developer, and designer, and bizdev folks too for a week of talking about all things voice and conversation, how to build the products, use cases, everybody together to really talk through those things. 

JESSICA: You can definitely follow me on Twitter. My handle is chatasweetie, all one word. And I also blog a lot off Medium as well. So you can definitely check that out on the Google Developers Media page. 

Right now, I'm really seeing season 2 of Assistant on Air, which is a video series where we have conversations with folks who built for Google Assistant. So season 1 was all about talking to Googlers internally, how they build and why they build Google Assistant or Actions on Google in that particular way, or how they could use the tools. And season 2 is all about our GDEs, which are Google Developer Experts. So there are folks globally around the world who are experts within building for Google Assistant. And I sit down and chat with them. 

MARK: Awesome. Well, thank you all so much for coming in. I think we had some really cool understanding. I definitely walked in here without knowing what conversation design was. And now I know a slightly bit more. So thank you all for coming in. 

CATHY: Thanks very much. 

JESSICA: Awesome. Thanks for having us. 

MARK: Thanks so much to Cathy and Jessica for coming in and talking about, like I said before, the best practices around conversation AI. I really like that note you said, Priyanka, about how it's a good balance between the design of conversation AI and the experience there, but also the development aspect of it, and how do you combine those two to make a good system. 

PRIYANKA: Yeah, it was very enlightening to hear, not just from the Google Assistant perspective but the general aspect of designing any experience from the conversational point of view. 

MARK: And speaking of which I think, it's about time to get into our Question of the Week. 

[MUSIC PLAYING] 

For this, you published a blog post. I wanted to ask you more about it. You have a solution here to combine Dialogflow and BigQuery. And my first question, of course, is, why would you do that? What tools are available in there that make that useful? But then, also, how do you do it? 

PRIYANKA: So when I've been speaking with customers and users of Dialogflow, one of the cool questions that always comes up is, I want to take some of the data that I'm getting from the users-- like, I take an example of an appointment schedule-- and the time, and the date, and why people want to set an appointment for coming to whatever it is that I serve as a service. And I just wrote this cool little tool to understand-- there is the reporting side of things that Dialogflow offers. But there's always an analysis that you may want to do as a business in terms of what you want to make decisions off of. 

So I take these appointment things from the users-- date, time, and why they want to come in. And then I want to do my own analysis to understand when do people come in more, or what are the different requests that I'm getting more versus less. And all of that is very easily available as variables. 

And I can pass them into BigQuery, and I can run SQL commands on it. So it's a very good way to find out how can I provide a better customer experience, and what are some of the questions I should even automate or not automate is an indication that you can get with an integration like this. So that's the why aspect of why I came to think that this could be a good tool. 

And how do you do it is actually pretty simple. In Dialogflow, you have the fulfillment, where you can write Node.js code to make a connection to any API. So in this case, I'm using the BigQuery API to take those variables that I'm capturing as a part of Dialogflow-- the dates, and the times, and why people want to come in for this appointment-- and then just pass those variables into a table by calling my BigQuery API from the Cloud function that is inside a fulfillment from Dialogflow. 

So it's pretty simple integration. If you want to look at a sample or want to do it yourself, I have linked some of the code into GitHub. And you can download that from the repository as well. 

MARK: So like you still get to use the dialog aspect of Dialogflow in creating the chatbot. But then you're easily able to take a question that somebody asks or some information that somebody provides and then basically query against BigQuery, which is really good at, well, big queries, and then take that, get an answer back, and then use that back in your Dialogflow application. 

PRIYANKA: You could either use that back in your Dialogflow application, or you could take that information and create your business strategy off of it and be like, OK, now I should change my bot, or I should add these questions because people are asking for these more, that type of stuff. So you can decide where to focus more of your energy on. But as you said, you can also process it and send the response back to the Dialogflow to have further conversation. So both ways. 

MARK: Yeah, would you recommend that people generally take the conversations that users are having with their Dialogflow apps and record all that information in BigQuery so they can make decisions? 

PRIYANKA: It is a good practice to do that if they are thinking about ML and AI aspects of taking this huge amount of data and making sense of it, and then utilizing it to either better improve the conversational experience or to provide more experiences that they may not be thinking of providing today, just based on what the users are asking for. 

MARK: Super cool. So we've got that article down there. And it sounds like the codes are on GitHub as well. 

PRIYANKA: Yeah. 

MARK: So it'll be a great opportunity for people to actually pretty easily try it out. 

PRIYANKA: Yeah. 

MARK: Awesome. Well, I think we're just about out of time. But before we go, Priyanka, do you have any cool fun trips coming up, any big events? 

PRIYANKA: Yeah, I have a lot of travel coming up. In October, I will be in Europe. I'll be in GOTO Berlin, doing a talk on natural language processing and conversational AI, and then similar in Milan. And then later in November, I'll be in Copenhagen doing NLP and conversational AI talks again. 

MARK: Cool, that's a lot of travel coming up for you. 

PRIYANKA: Yeah, and then after that, I am going to be on vacation in December. So I'm looking forward to that. [LAUGHS] 

MARK: It sounds like you might need it. Maybe a staycation would be better. 

PRIYANKA: Exactly, yeah, with family. 

MARK: Yeah, I think I'll have a vacation coming up as well. So definitely looking forward to unplug for a little bit. And maybe I won't even bring my laptop with me. I've been juggling that idea. We'll see if it actually happens or not. 

PRIYANKA: You should definitely try to do that. Because without laptop, life can be good. 

[LAUGHTER] 

MARK: Well, thanks, everyone, so much for tuning in. Whether you're tuning in from your phone or from your laptop, hopefully life can still be good while listening to a podcast. So we'll see you all next week. 

[MUSIC PLAYING] 

PRIYANKA: I can't even find my window, sorry. 

MARK: Too many tabs? 

PRIYANKA: Too many tabs. 

MARK: Somehow the world has gotten into a scenario where having 150 tabs open is acceptable. 

PRIYANKA: I know. [LAUGHS] 

MARK: I don't get it. I don't understand how people stay organized with so many [MUTED] tabs open.