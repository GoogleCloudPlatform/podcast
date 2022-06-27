+++
audioDuration = "00:36:46"
audioFile = "Google.Cloud.Platform.Podcast.Episode.309.mp3"
audioSize = 52957036
categories = ["AI", "Artifical Intelligence", ""]
date = "2022-06-22"
description = "This week on the GCP Podcast, Carter Morgan and Max Saltonstall are joined by Amit Kumar and Vasili Triant. Our guests are here to talk about new features in Contact Center AI."
draft = false
episodeNumber = 309
hosts = ["Carter Morgan", "Max Saltonstall"]
title = "Contact Center AI with Amit Kumar and Vasili Triant"
image="/post/episode-309-contact-center-ai-with-amit-kumar-and-vasili-triant/images/hero/hero-EP-309.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/via240/episode_309_contact_center_ai_with_amit_kumar_and/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week on the GCP Podcast, [Carter Morgan](https://twitter.com/carterthecomic) and [Max Saltonstall](https://twitter.com/maxsaltonstall) are joined by Amit Kumar and [Vasili Triant](https://twitter.com/VasiliTriant). Our guests are here to talk about new features in Contact Center AI.

Amit starts the show helping us understand what Contact Center as a Service is and what makes this unified platform so useful for enterprise companies. The scalability helps keep costs down and overall satisfaction up while leveraging advances in cloud. UJET and Google Cloud have worked together to bring this AI advancement, and our guests describe the partnership and evolution CCAI. CCAI has streamlined the Contact Center as a Service space, helping businesses work efficiently and while putting an emphasis on positive experiences for the end customer.

CCAI users can use the platform straight out of the box or customize it to build specific experiences with tools like Dialogflow. Amit further describes the tools available like Interactive Voice Response and for which circumstances each tool would be most useful. The journey to CCAI can be easily managed by a team who knows the business well. We learn more about the onboarding experience and the skills required to transition.

Vasili talks about the past and future of Contact Center and how customer information is used not just for sales purposes but for bettering the customer service experience. Our guests share success stories from companies like FitBit and how CCAI is used to handle customer interactions through the app. Things like the call back feature save customers the time and frustration of waiting on hold and save businesses money.
 
##### Amit Kumar

Amit is responsible for bringing GCP's native CCaaS offering to market and helps enterprise customers modernize their contact centers. Previously, Amit worked as a Cloud AI Incubator lead where he helped customers in adopting Google's conversational AI technology.  He also has an extensive background in large scale cloud transformational efforts and have worked with enterprise software companies mainly Salesforce and TIBCO Software.

##### Vasili Triant

As UJET’s Chief Operating Officer, [Vasili Triant](https://twitter.com/VasiliTriant) oversees all Go To Market activities including Sales, Channel, Alliances, and Customer Success. Triant brings more than 20 years of experience in Telecoms, Unified Communications (UC), and Contact Center industries, having previously served as VP/GM of Contact Center at Cisco, where he achieved the fastest growth in over a decade through a focus on global alliances and enterprise cloud-readiness.

##### Cool things of the week

* DALL-E mini [site](https://huggingface.co/spaces/dalle-mini/dalle-mini)
* EbSynth [site](https://ebsynth.com)
* Announcing general availability of Confidential GKE Nodes [blog](https://cloud.google.com/blog/products/identity-security/announcing-general-availability-of-confidential-gke-nodes)
 
##### Interview

* Contact Center AI Platform [site](https://cloud.google.com/solutions/contact-center-ai-platform)
* Contact Center AI reimagines the customer experience through full end-to-end platform expansion [blog](https://cloud.google.com/blog/products/ai-machine-learning/google-announces-new-cloud-contact-center-ai-platform)
* UJET [site](https://ujet.cx)
* Dialogflow [site](https://cloud.google.com/dialogflow)
* Google Assistant [site](https://assistant.google.com)
* One United Bank [site](https://www.oneunited.com/about-us/why-oneunited/)
* FitBit [site](https://www.fitbit.com/global/us/home?utm_medium=sem&utm_source=google&utm_campaign=US_PF_ROAS&gclid=Cj0KCQjwz7uRBhDRARIsAFqjulmXadSohE7T19aD5NFzfNhLff1Qz1u3v4FuucGRoMQYqlkOqQAYR7kaAs5lEALw_wcB&gclsrc=aw.ds)

##### What's something cool you're working on?

Max is working on expanding the [podcast platform](https://cloud.google.com/podcasts) by collecting and adding more content.

Carter is working on his [Google Project Management: Professional Certificate](https://www.coursera.org/professional-certificates/google-project-management).

Kelci has been working on [Google Cloud Skills Boost](https://www.cloudskillsboost.google).

{{< transcript "[MUSIC PLAYING] CARTER: Hello, world, and welcome to episode number 309 of the weekly Google Cloud Platform Podcast. I'm Carter Morgan, and I'm happy to be here with my colleague none other than Max Saltonstall." >}}

MAX: Thank you. 

CARTER: Hi, Max. How are you doing? 

MAX: Yeah, I'm doing great. Happy to be making some more content with you and having these cool conversations with some really informative and expert guests. 

CARTER: Yeah, this is one of my favorite parts about my job. Like if, you know, listeners at home, if you don't know, I make a lot of videos. I do blogs. Max does a lot of the same and manages people. But this is one of my favorite parts of what we do, getting to talk to so many interesting people with interesting stories, working on interesting technologies. It's a treat. 

MAX: Yeah, and they're working on stuff that really is going to change a whole host of not just the technology world, but the way we interact with lots of different businesses day to day in our lives. And that's one of the really exciting things about this topic of Contact Center AI and the way Google's AI tools are really changing customer support, customer service, and all those annoying 96-minute phone trees that you have to press buttons through and listen to recordings of and then you just go in circles. 

CARTER: Uh-huh. That is definitely something that was exciting about this episode is seeing new technology or very recent technology apply to what seems like a legacy industry. So without further ado, let me introduce the guest. Today, we're going to be talking with Amit Kumar, and he's responsible for bringing GCP's native Contact Center as a service offering to the market and helping enterprise customers modernize their contact centers. 

And then also Vasili Triant, and he's UJET's chief operating officer. So he oversees all of the go-to-market activities like sales, channel, alliances, customer success. So this episode is really going to be focusing on how Contact Center AI can basically modernize legacy contact centers and make it better all around for customers, the agents that are doing the calls, cost, and then the people that are paying for all of this. 

MAX: Yeah, just answer your questions faster too. 

CARTER: 100. So before we get into this episode, what do we talk about? What's interesting? What's cool what's new around Google Cloud? 

MAX: I'm afraid it's not directly Google Cloud-related, but I have been too amused this week by all of the text to image systems that have been floating around Twitter and Discord and everywhere. And Google's got one, but it's not publicly shared yet, and so there's some research on this thing called Imagen. 

But DALL-E mini is one that people can just play around with online, and I've seen some frightening and hilarious and very, very creative, odd hybrid I'm going to call it art generated by these algorithms that have tons of bias and tons of flaws because they're really just consuming images on the internet. But you can come up with the strangest oddball portmanteau descriptions of something, and it will turn it into a picture no matter what you type in. 

CARTER: Yo. This is exciting. You've got to give me the link because I will check this out. 

MAX: Sounds good. 

CARTER: Immediately. 

MAX: How about you? 

CARTER: Yeah, well, OK, I want to talk a little more on that because that's really cool. I've been using AI, like I heard about this program called EbSynth. And basically what happens is you can take a video, export it into a PNG sequence-- so just an image for every frame. And then you can make some key frames where you say, draw over or add elements based on that image, and then EbSynth will use AI to map it. 

MAX: Sort of like automated rotoscoping like for lightsaber battles. 

CARTER: Yes, I think. I'm not 100% sure what rotoscoping is. 

MAX: Oh, it's where you draw over frames on a film. So like in "Star Wars," the lightsaber battles, they weren't using sticks that had light coming out of them. They were just using props, and then somebody actually drew the glowy red and blue for all of the fighting. 

CARTER: Yes, so similar like that, where I'm not sure if it's using AI to recreate the frame or draw over, but I do think it's a draw over. And so this technology, we're seeing AI being used. We're talking about the Contact Center today for a very important business purpose. And here, it's like for something artistic or something entertaining, it excites me. 

MAX: Totally. 

CARTER: You know what, I'm going to see if I can make a cool segue here into my cool thing. 

[MUSIC PLAYING] 

Sometimes you've got to keep your excitement secret. You've got to keep compartmentalized. You've got to-- it's a tough one. I want to talk about confidential workloads in GKE, which is something I just saw announced for general availability. I'm a huge lover of GKE. Kubernetes was the first Cloud technology I was introduced to, and so I love seeing all the advances in how it's growing. 

And what confidential GKE nodes can do, my understanding is that it encrypts all your data in memory. So this way, you can run your workloads and be confident that your code is going to be stored safely, and your data is going to be stored safely, whatever it is that you're doing, and that's exciting. I think that's very important for security. 

MAX: Yeah, and it's an important addition because for a long time, all the big cloud providers have done encryption at rest and encryption in transit. We're storing your information, it's encrypted. We're moving it from place to place, it's encrypted. 

What this confidential computing technology lets you do is also keep it encrypted in use. So even when that stuff is being loaded and processed and manipulated, it's still going to stay encrypted so it would be way harder for some attacker or even some insider to get access to that important data. 

CARTER: Yo. Well, props to the team that made that happen. If you want to know more, you can check out the cloud.google.com blog, and there's a post about confidential GKE nodes or confident workloads in GKE. We'll link that in the description though. So Max, are you ready for this episode? 

MAX: Let's do it. 

[MUSIC PLAYING] 

CARTER: Without further ado, let's see who we're talking to. Vasili and Amit, can you introduce yourselves and tell our listeners at home who's here. 

AMIT: Hi, everyone. My name is Amit. I'm a product manager, and I work within our conversational AI team. I'm specifically responsible for bringing our CCAI platform, which is our CCaaS, to the market for our enterprise customers. 

VASILI: And I'm basically Vasili Triant. I'm the chief operating officer at UJET. I own all the go-to-market operations here, including sales, customer success, marketing, and strategic alliances. 

CARTER: Amazing. Thanks for being in. My first question is, what's a CCaaS? 

AMIT: CCaaS is our Contact Center as a Service. So essentially it is really a unified platform for our enterprise customers that they can really use and migrate their existing systems and applications and all the things that agents and everyone else is using to support conversations with customers so they can take that and migrate over to the cloud. So CCaaS is really the contact center as a platform in the cloud. 

MAX: And folks want to shift or update their contact center technology and service for a bunch of different reasons. So it sounds like this is going to help with cost because you're moving things to a more scalable platform, but it also can help with customer satisfaction and the contact center agent satisfaction? 

AMIT: Definitely, yeah, for sure. Like everything else, as you see, there are a lot of other workloads being moved over to the cloud. So Contact Center is pretty similar, where there's a lot of advancement has happened with customer engagement technology. So by moving to the cloud, customers are able to really utilize some of these newer platform and technology and to really support a lot of these other operational efficiencies and really the customer engagement. 

CARTER: I want to go more into that. But first, I want to know about the teams and the companies that are involved in making this happen. So this is a partnership between Google Cloud and UJET? 

AMIT: That's right, yes. So UJET is really helping us bring our CCAI platform to market, and we have licensed the UJET technology and really bringing this to the market. 

CARTER: Wow, and I guess my question then is, why UJET? Like, I would love to hear more. 

AMIT: Definitely, yeah. So there's actually quite a few reasons. I would like to highlight a few here. But I think primarily UJET has a cloud native architecture, so it is actually built on GCP infrastructure, so it was really easier for us to take UJET and really integrate and innovate on the top of it and really bring this to market faster for our customers. 

The other key differentiator is really the immersive experience that UJET provides. So UJET has taken a pretty innovative approach with respect to the end customer conversion experience. It can tap into device capability and really provide this immersive experience for the end users, so that sort of really aligns with the way we do user experience within Google, so that was another key area. 

And then there are other specific flexible deployment options. So for example, we can support our enterprise customers that have very specific security and compliance requirements. So we can design and deploy the software in a single tenant architecture or in a multi-tenant architecture. So these were some of the key functionality and specific reasons. And I think on the top of that, I think we really love the UJET engineering culture, which is sort of very similar to what we have at Google. 

CARTER: Oh, wow. Well, Vasili, then a question for you. I'm curious actually, even the before this partnership and the launch, what was the space the Contact Center like before CCAI came out? 

VASILI: Well, when you look at the Cloud Contact Center space, it has been an emerging and quickly growing space. It's one of the fastest growing software as a service segments globally. The pandemic accelerated a lot of the transition that was already going on. We have a lot of on premise contact centers that exist out there that are 5 to 20 years old, technologies that we all deal with in our daily activities when we're calling into airlines and hotels and otherwise. And COVID really accelerated that companies needed to finally make that transition to Cloud. 

However, there were a lot of companies that are really those legacy contact centers that are just transitioning the business model and the economics so that you pay on a subscription basis, but you're not really getting all the benefits of Cloud Contact Center. And at the same time, there's been new entrants to the market. But when I say "new entrants," It's new entrants of large companies. These are big companies that see this space and want to be a part of it and bringing more kind of all technologies together. 

Whereas Contact Center has been a lot of niche technologies that have been integrated through third-party connectors, now what's happened is you've seen Amazon get into the space, Microsoft has gotten into this space. And so Google really was kind of that dark horse coming through that wasn't in this turnkey enterprise business application space that everybody was waiting to see is Google going to get in. Because, one, they provide the cloud infrastructure. Two, they have the AI assets. Three, this huge ecosystem of voice technologies, voice network through Google Meet and Workspace and a lot of other pieces. Obviously you've seen Google Chrome kind of come about as well in really we're enabling all these technologies through browsers. 

And so Google kind of wraps this all in one picture into play for customers and answers the call of where the industry has been going. So this transition over the last kind of two years, three years that a lot of these big players coming in, Google's kind of come in playing at a whole different level than where the industry traditionally has been. 

CARTER: Uh-huh. Thank you for that, yeah. And I can imagine, you focused a lot on the customer just then and actually making it better for the customer. I don't think I've had very many enjoyable experiences calling into call centers. So anything that makes that better, definitely happy for. Something I'm interested in is it seems like there would be a bunch of tools that go into this-- AI processing tools, maybe dialog flow, things like that. Is this a series of tools, or has it traditionally been a series of tools that companies had to put together and try and figure out how to tape together and make everything work? And does CCAI kind of simplify that? 

AMIT: Definitely, yes. So with CCAI, in the past, we had Dialogflow, which is our NLP-- NLU engine. So really understanding what customers are saying and really taking actions from the top of it. And then we had few other technologies with Agent Assist, which is our helpful AI for the agents. So essentially when they are having a conversation with the end customer, what are the helpful things that AI can do for them so that they can do their job better and faster? 

And then finally, we had a product called Insight, which is more our conversation cloud. So really all the conversation, sitting and stored in a single place where you can do a lot of other insight and analysis and then modeling. And you can really figure out things like what are the top five reasons your customers are calling you. 

So we have these different tools. And in previous model, our go-to-market strategy was to really work with our existing partners like Genesis and Avaya, and really help our customers to utilize this technology and drive these operational efficiencies. With CCAI platform, we are really giving a choice to our customers. So if customer wants, they can really buy this end-to-end unified platform from us, where we are really giving them a best-in-class integration and really bringing this unified platform. 

MAX: So it sounds like there's both many different tools that can make the whole process easier, but also a consolidation of those tools to this platform that you're explaining so that someone could just grab something off the shelf and cover many different needs that any kind of customer-facing business is going to have. 

AMIT: Yeah, definitely. So it really depends on the customer journey. This is really a turnkey solution from a CCAI platform point of view. They can literally install this and get up and running very quickly. And then once they have the agents and the platform in, then they can take a next step, where they are, for example, installing and building these conversational experiences with Dialogflow. So really depends on the journey that they want to take, and really it could be a phase approach-- crawl, walk, run. So get this installation, get this platform and working for the agents, and then slowly add on more capabilities and technologies. 

CARTER: Interesting. OK, let's piece this apart a little bit because you said there were some options. So if I just want a specific services, what are some of these individual services I might pick out? 

AMIT: The CCAI platform would be the first one. So this is the platform which gives you the telephony capabilities. It has the IVR capabilities. 

MAX: What's IVR? 

AMIT: IVR is an Interactive Voice Response. So that's the voice tree when you are calling a customer care center when it responds with press one for this, press two for that, press three for that. So this is really the interactive voice response that engine is giving you. So we provide all of those capabilities. 

So that will be the first one. This is where the customers would be calling you. This is where the agent would be really taking these conversations and helping the customers. So our CCAI platform would be the first one. 

And then on the top of that, you have a number of other AI services. So Dialogflow being one, which is where you're going to deploy your chat bot sort of voice bots. In a growing industry, you don't have to continue to add more and more agents. You can actually have AI to handle these conversations for you. 

So Dialogflow would be the first one, and then you have the Agent Assist, which is the helpful AI for the agents. So when the conversations are being handed off to the live agents gracefully, then you can use these AI services so that agents can do their job better and faster. So things like smart reply, smart compose automatically summarizing the notes and the conversations for them. So these are the helpful AI features that we provide as our Agent Assist. 

And then finally the insight that we were talking about, which is more about storing all of your conversation at a single place. So these are the four main products that we have, and customers can really pick and choose what they want to install and really have that in configuring their environment. 

MAX: This sounds super cool. What does a customer need in terms of engineering skills or background to take advantage of this? Because I might not have a team of AI-proficient engineers. Yet, I want all of those things you just explained. 

AMIT: The cool thing here is that Google has done the most work already for customers. So we have already built the NLP, NLU engines so customers get the access to the same technology as Google Assistant, for example. We provide the same speech engine that customers have used. So we have already built a lot of these AI services and features so you don't really need to know AI as such. 

So these are some of the turnkey features that we have in the overall CCAI platform and in general in CCAI. We, however, do need dialog designer the conversational architect. So the people that the customer would need who understand the business process, who understand how exactly the customer conversation is going to flow, what is the business process? How exactly when you are trying to, for example, return a product? What are the different things, different systems that return product customer journey is going to take, and what are the system it's going to impact? 

So you would definitely require team members who can understand the business process, who understand the conversation and the dialogue. And then depending on what sort of integration work is needed-- so we may be needing some integration capabilities as well as a part of the team. 

CARTER: This is one of those questions I don't know how easy it's going to be to answer, but I'm going throw it out there. So say I'm a medium to large-sized business. I have a call center. I want to transition over. What's that process? What can I expect when, say, like I don't know, is it like a 30-day, 60-day, 90-day transition? What is the onboarding experience like for this? 

AMIT: Yeah, so definitely for a medium-size customer with a medium-sized complexity, 60 to 90 days is a pretty good timeline. And as we were talking about this earlier, we tend to take this crawl, walk, run approach. So typically we would work with our customers to identify some of the simpler use cases and really onboard the pilot users. And our key intention there is to de-risk the overall approach and the migration process so that we can bring the technology in a specific environment, understand, and really the integrations and train the users with these pilot use cases. And once we have those pilot use cases in, then we can work with our customers to roll that out with the broader user base. 

MAX: And is that something where folks from Google are working with each of those customers, or is that where UJET comes in? Or how do we make sure that this is going to scale to potentially many, many businesses who want to take advantage of these features? 

AMIT: Great question. Like everything else we do within Google, this is also a partner-supported product. So UJET and Google, we are selling this as like any other Google product. It is sold and supported by Google. And for all the implementation and services work-- we work with our partners, so we work with all of our GSIs, like Accenture, Deloitte, IBM, and then we have a lot of other regional service partners as well like Quantify and CDWN and many others. So this is a fully supported product, and really we work with our partners to help our customers. 

CARTER: Thank you for saying that. It's really interesting to hear because it seems like this technology is modernizing an already established business model that maybe could do for an update. What I'm curious about is the future and where things are going. Like Vasili, like where do you see tools like this, Contact Center AI, going in the future? Do you see more businesses having to adopt this in the future? 

VASILI: By the way, your question, I think you could have even said, it's a legacy industry. When we think about when we're calling call centers, and call centers can be lots of things. It could be a sales ordering line. It could be customer service, support, all these different things. It's the same stuff we've been dealing with for decades. 

I can age myself by saying this and saying like, I mean, I've been listening to the same stuff for almost 30 years. Some of the bits and bytes behind the scenes have changed. We've gone from servers to virtual images to cloud infrastructure. 

But you call in, you press one for English, two for Spanish. You get routed somewhere, you put on hold for a long time, and it's all the same stuff we've been dealing with. And like you said earlier, it hasn't been a very positive experience. 

What's shifting as companies with more intelligent assets and more engineering superpower I'll call it have come to play in the advent of artificial intelligence into this space is that we're getting more information about users. And instead of using it for sales and marketing purposes, now we use it for customer service purposes. 

If you go search something online, I know tons of stuff about you, and I tee up ads and all kinds of stuff. And you go on Facebook and next thing you know, you're like, oh my gosh, how did they know that I was looking for a pair of those Y-3 sneakers, and it's because you were searching it and they grabbed it. But when you call in, they don't know if your name's Joe, Lisa, or John, right? 

So these are the things that are starting to change. And eventually what's going to happen is we're going to get into proactive customer service. Proactive meaning we're looking at intent and signals out there on web or in mobile apps, and we're proactively reaching out to somebody. It's like if you saw somebody trying to walk across the street and they were having trouble, you would go over and say, hey, do you want me to you get a cross street, grab their arm, and walk them across. 

But we wait when someone's having a problem with something, you see them searching knowledge base articles and all these things, and we wait to see, are they going to get ticked off enough to call us? Hey, when they call us or they chat with us, can I'll throw enough stuff in front of them to where they just hang up and they don't call because I want to save some money? 

And what we're going to do is instead, we're going to say, we're going to use AI to grab the information, and we're going to reach out and say, hey, Carter, I notice you've been having a problem. Kind of in lines with like, hey, you're trying to walk across the street. How about we help you? That could be automated. It can be like a natural language processing virtual agent that literally walks you through, because it's amazing how advanced that technology has become. Or it could be a live agent, and then you feel personalized and feel taken care of and now you're stuck to that brand because you're like, I love how they take care of me. 

AMIT: That's a great point, Vasili. I think at Google, we really believe that when a customer is calling you, that is a really great opportunity for brands to connect with that customer at that point. So I think it's very critical to have those customers a very, very delightful experience so that leaves a long lasting impact and they become a customer for life. And I think that's where the Contact Center is going. That's where the overall customer engagement is going. And really taking those experiences and then driving the cross-sell, upsell opportunity, that's another area. 

Multimodal conversation is another one where, for example, as a customer, end customer I start my interaction with, for example, on a chat channel, and then I'm using some other device in a different form of communication. So as I'm switching these experiences, how do I maintain that state, and how do I maintain and continue my journey from the same place? So really having that very, very multimodal omnichannel sort of experiences where this overall industry is moving. 

CARTER: That makes a lot of sense. And using the tooling and the technology we have today to simplify things for businesses and the customers of the business. That leads me to my next question then, which I would love to hear about customers that have successfully implemented or used CCAI. Like do you have any customer success stories to share? 

AMIT: Oh yeah, definitely. One of the customer actually, which is such an amazing story is Fitbit. So Fitbit is live on the platform today. And every time you have an issue with the Fitbit device and you are reaching out to the contact center from your app, your conversation, whether it's a chat or a voice, is being handled by this platform. 

One of the key highlights of this interaction is around the personalized and the contextual conversation that a customer can have with the agent. When a customer is reaching out, the Fitbit device can use our platform SDKs, very specific APIs, tap into some of the device diagnostic tooling, and really provide that contextual information to the agent. And rather than agent having to speak with the customer and exchange all of that information over voice or a chat channel, the platform behind the scene is doing that automatically. 

And by using this platform, not only the customer and the agent were able to have better experience and then increase satisfaction, but in general, the Fitbit has been able to reduce their average handled time for each conversation drastically. It's over in a 50% to 60% reduction in average handle time for each conversation. So it has been a really, really great success story. 

CARTER: Yeah. Are there stats on like-- because that time that's being saved-- one for the customer is great, but for the business side, that's man hours that you don't have to put into hiring someone to do this. Are there any stats about cost savings for CCAI? 

AMIT: Definitely. So as the Fitbit is continue to grow, the Fitbit team doesn't have to continue to add more and more contact center agents, live agents to support those conversations. And then average handle time reduction is a pretty standard metric that contact centers use today. So if you can measure that, the average handle time in each conversation that that's how you sort of really calculate the overall saving. So yes, there's a great efficiency and the saving that team has been able to gain from this product. 

CARTER: Yeah. Vasili, if you have any customer stories that stand out to you that you want to share, definitely I want to hear it. And if not, I'll just ask about something totally different. 

VASILI: Well, I think there's efficiencies that come from putting in automation, but there's also as you deploy CCAI platform, there's other efficiencies you gain around better-- so we have collaboration features that are embedded in the platform between the agent and the customer on the other end that allow you to get to another statistic, which is FCR, stands for First Contact Resolution. 

So if we can actually solve the problem the first time, you actually save money and you drive better lifetime value for the customer, instead of like you have to call back or you have to send an email afterwards. And it creates kind of this multi-connection situation that drags out. So FCR definitely improves the cost picture, as well as drives lifetime value because then you buy more products from that company or services, whatever that may be. 

So another thing is call back in queue. This is kind of an unknown benefit and also expense to customers. When you sit there and wait on hold-- actually a few weeks ago, I guess it was about a month ago now, I was on hold at the call center-- you're going to laugh at this-- an hour and 36 minutes. My total time-- 

MAX: But this is your job. 

VASILI: This is my job, yeah. But I called in for my own personal issue with something, and I'll call it the state of Missouri, and I waited an hour and 36 minutes on hold. Took me nine minutes then to talk to the person to find out that I had to do an email them what my problem was. 

Now part of it, yeah, I'm frustrated, but the other part of it is an hour and 36 minutes, what most people don't understand, you pay per minute holding there, you pay telecommunication charges as a company buying the technology. And so you wasted all that time. So a simple feature like callback-- not even callback in queue, like it could be scheduled callback, which is a cool feature we have with CCAI platform. 

It allows you to say, hey, I'm going to pick the time when I want you to call me back. I want you to call me back at 1:00 PM because I know I have a break in my schedule. You save all that callback time, and as the customer, you're not having to sit there waiting and hold to the repeating music over and over and over again like winds in your head for two days afterwards. And so you save time and you say frustration. 

Super simple feature. Save a bunch of money. And we're all spending a lot of time on hold when we're calling in their call centers lately. 

CARTER: Yeah. Oh, I love that because I understand that frustration so, so much, and it's funny that you went through that even though it's your job. 

MAX: So these features sound amazing. What is coming down the pipeline that you too are excited about? What new things will this platform offer customers in the coming months or years? 

AMIT: So I think in general, conversation, the language understanding, the voice, I mean, these are some of the most important things that we do at Google. So I think I'm really excited to see all the innovation happening in each of these areas because CCAI platform really helps us bring those innovations to our enterprise customers. So I think I'm really excited having this unified platform and then bringing these helpful AI services with regard to the speech, NLP, translation, and then really having these available to our enterprise customers. 

MAX: Vasili, stuff that you're excited about coming in the future? Stuff you wish that the team made that you want to put in a plug for. 

VASILI: What drives me and my passion in this space is actually to change our experiences as end users. It's less about the business side and more about the effect on the other side. And what the whole partnership and the ability for all the assets that Google has to bring to bear on enterprise customers, we can finally start to see the changes happen on a broader scale. 

99% of what's happening out there today in this cloud contact center growth is replacing what you had before was something that's in the cloud today but the same process. This is the same trees and menus and everything else. This is really the time where we're going to be able to affect the market and actually affect our own experiences, which is what drives me and drives a lot of us in this project. 

CARTER: 100. So throughout this conversation, we talked about CCAI and what it does and how it doesn't just improve things for the business and the agents that are manning the phones, but also for the customers that are waiting, hopefully not for an hour and a half like you were earlier, Vasili. And we also talked about cutting down the cost too and how a business can scale without having to scale up all the agents that it has. If people, if listeners at home are very excited about this and want to go and explore more, where should they go? 

AMIT: We do have resources here. So you can certainly reach out and visit our website, cloud.google.com/solution/contactcenteraiplatform. 

CARTER: And we'll link that in the description below so that everyone can see that. So if you're listening at home, go to the description and see that link. That's everything I have. Max, is there any other questions you want to-- 

MAX: Can you make sure that I'm not on hold for 90 minutes next time, because that will be awesome. 

VASILI: We'll work on that. We'll work on that. 

[LAUGHTER] 

MAX: Thanks. I got some phone calls this afternoon. 

CARTER: Hey, thank you all so much. 

AMIT: Thank you. 

VASILI: Thank you. 

CARTER: Wow, and that's that. That's the episode on Contact Center AI. Max, how was it? 

MAX: I love it. I love the idea that we can use one set of tools and this understanding of conversations and this understanding of subject-specific domain and the problems and solutions that pair up. We can use all of that to answer customers' questions faster, save companies money, and give the call center agents themselves maybe an easier time or a smoother workflow so they're not jumping back and forth so much. Or we can even automatically suggest, here's an article that might help the person who's calling in. And we've seen some of the benefits of that inside Google too when we have tech problems. It's lovely. 

CARTER: Uh-huh. And I think it's funny because no one ever thinks about the call center agent. I think about myself. That's something I think about-- what's going to make my life easier. 

MAX: Yeah. 

CARTER: But I do think that getting the right data to the call center agents in time is going to make everything better for everyone. There was some talk about how this allows businesses to scale. 

MAX: Yeah. 

CARTER: Because you don't need to ramp up a bunch of new agents when you can have an AI doing some of the menial work for you, some of the labor. 

MAX: Yeah, answering the easy questions that come up again and again and again and don't really take much human understanding to get to a solution. 

CARTER: So this was amazing. We talked about it at the very beginning, but all the different uses of AI, whether it's from entertainment or artistry, all the way down to modernizing contact centers and making the experience hopefully smoother so none of us have to have an hour and a half waits to get our problems resolved. 

MAX: Maybe one day I'll write some jokes and help with some comedy. 

CARTER: Yeah, I will do anything I can to get some jokes written. I've got two big shows coming up. I'm starting to stress. But enough about that, Max, what are you working on? 

MAX: I've been working with a bunch of different podcast content creators at Google to help bring a lot of that content together into our new podcast platform. So cloud.google.com/podcasts is where we're highlighting the many different kinds of podcast material and stories that we make, but we've got a lot of other teams that want to be part of that network. So we're expanding there, and we're going to be adding a handful of new podcasts and new content to that site real soon. 

CARTER: Oh, OK. I'll be sure to check that out. I have been working on getting organized. So it's something I've been really struggling with. I've never had to organize myself. I always had PMs take care of that, and now I'm having to kind of play a PM role. 

And what I realized was, it's a skill. It's like people go and get training for this. People go to school for it. And I was getting really down on myself like, how come I can't do this thing? And I'm like, wait a minute. Why don't I go and get training on it? Why don't I go and really study this. And so I found-- and I heard a lot of good things about Google's Project Management Certificate through Coursera. 

MAX: Cool. 

CARTER: And I've been doing some other things too that I'm really excited about. Yeah, instead of getting mad at myself for not knowing these skills, I'm like, you know what, I'm going to go and take some time and dedicate some time to learning. I think this is a low-cost option to do it, so I'm excited. 

MAX: That sounds great. Yeah, I'm a huge fan of always learning and growing and expanding our skills. And one of the newest folks on our team, Kelci, is here, who's also been doing a lot of learning and growing as she's ramping up on all of the cloud stuff with our developer relations team. Kelci, what have you been working on? 

Kelci: Hi, guys. So I just wanted to tag on to what Carter was talking about with certificates and badges and things like that. As a new person on the team, I have taken a lot of advantage of Google's Cloud Skills Boost. It helps a lot with just learning the platform, learning the products and materials that Google Cloud platform offers. It's really great for beginners, and it's really interactive, so I think all of you should check it out if you want to get started with Google Cloud platform. 

MAX: That's great. And we'll put the link in the show notes, and I love that it just says what it does on the label. It's going to boost your cloud skills. There you go. 

Kelci: That sounds good. 

CARTER: Simple, direct. Yeah, thank you all, Max and Kelci, thank you for coming in. Thank you for listening, especially if you listen all the way here. I appreciate you. We appreciate you. Hopefully you learned a lot from this episode, and we'll see you all next week. 

MAX: All right, stay safe. 

Kelci: Bye, guys. 

[MUSIC PLAYING]