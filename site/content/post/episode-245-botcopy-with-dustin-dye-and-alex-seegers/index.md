+++
audioDuration = "00:39:06"
audioFile = "Google.Cloud.Platform.Podcast.Episode.245.mp3"
audioSize = 56241869
categories = ["Botcopy", "Dialogflow"]
date = "2021-02-03"
description = "Dustin Dye and Alex Seegers of Botcopy are on the show today, chatting with hosts Mark Mirchandani and Priyanka Vergadia."
draft = false
episodeNumber = 245
hosts = ["Mark Mirchandani", "Priyanka Vergadia"]
title = "Botcopy with Dustin Dye and Alex Seegers"
image="/post/episode-245-botcopy-with-dustin-dye-and-alex-seegers/images/hero/hero-EP-245.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/lbtf3i/episode_245_botcopy_with_dustin_dye_and_alex/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Dustin Dye and Alex Seegers of [Botcopy](https://www.botcopy.com) are on the show today, chatting with hosts [Mark Mirchandani](https://twitter.com/markmirch) and [Priyanka Vergadia](https://twitter.com/pvergadia). Botcopy uses advanced AI technology along with excellent copy writing to create better chat bots. The software works directly on a company website and doesn't require a login, allowing chats to stay anonymous.

 Our guests explain that their chat bots are treated like virtual employees, built and trained to function and speak appropriately for their specific job. Copy writing is an important part of this, as the conversational AI should continue to support the brand being represented and conversations should flow naturally. The bot personalities are developed through written copy and interactions with customers in instances like customer service, lead generation, and even some internal employee management needs.
 
 Later, we talk about how Dialogflow and Botcopy work together, including how Botcopy adds important user context to the conversation to facilitate more accurate bot responses. We hear more about Dialogflow CX and how the modular builder makes designing and controlling bot conversations easier. CX has also made managing multiple bots on a single account easier and team collaboration more efficient. The visual builder available in CX offers a better chatbot design experience, especially when multiple teams are working on the same bot. We hear examples of great use-cases for Botcopy, like restaurant menus, clinical trials, and more.
 
 Alex and Dustin give developers valuable advice about working with clients to build their bots. Test early and often to build a robust bot capable of handling many situations. It's important to have an analytics system in place to identify possible improvement areas as well.
 
##### Dustin Dye

Dustin Dye is co-founder and CEO of Botcopy. After developing branded character and dialogue content for the #1 business bots on Messenger and Slack, Dustin launched Botcopy in 2017. Before co-founding Botcopy, Dustin had co-founded Expert Dojo, one of Silicon Beach’s largest startup incubator, serving, mentoring, and securing funding for some of the most exciting businesses coming out of LA. Dustin is a frequent keynote speaker at leading Chatbot conferences in the US and abroad. 
 
##### Alexander Seegers

Alexander Seegers is a co-founder and COO of Botcopy and heads up the product team. He holds a Business degree from Northeastern and UX certification from General Assembly. Alex has consulted tech leaders at Fortune 500 companies worldwide, spearheading their forays into conversational AI for multiple use cases at the enterprise level. In addition to big-picture leadership and vision, Alex is adept at numerous coding languages and complex systems architecture. 

##### Cool things of the week

* Introducing WebSockets, HTTP/2 and gRPC bidirectional streams for Cloud Run [blog](https://cloud.google.com/blog/products/serverless/cloud-run-gets-websockets-http-2-and-grpc-bidirectional-streams)
* Take the first step toward SRE with Cloud Operations Sandbox [blog](https://cloud.google.com/blog/products/operations/on-the-road-to-sre-with-cloud-operations-sandbox)

##### Interview

* Botcopy [site](https://www.botcopy.com)
* Botcopy Blog [blog](https://blog.botcopy.com/)
* Contact Botcopy [email](mailto:hello@botcopy.com)
* Dialogflow [site](https://cloud.google.com/dialogflow)
* Miro [site](https://miro.com)


##### What's something cool you're working on?

Priyanka is working on Dialogflow CX episodes for the [Deconstructing Chatbots](https://www.youtube.com/watch?v=O00K10xP5MU&list=PLIivdWyY5sqK5SM34zbkitWLOV-b3V40B) series.

{{< transcript "[THEME MUSIC] MARK: Hi, and welcome to episode 245 of the weekly Google Cloud Platform Podcast. As always, I'm Mark. And today, we're here with Priyanka. Hey, Priyanka, how are you doing?" >}} 

PRIYANKA: Hi, I'm doing well. How are you? 

MARK: We are on a podcast. So obviously, that means it's audio. I think people have figured that out by now. But that means they can't see all of the flowers that are coming through your video right now. 

PRIYANKA: We should probably take a picture and put it up there. Or we should share this in our LinkedIn. 

MARK: Oh, that makes it really easy to choose what clip to show, because you just explicitly called, OK, well, yeah, I can do that. We can bring the power of video. I'm a big fan of that one. But beyond that just some flowery conversation, we also have some great guests today. 

[CRICKETS] 

Do you want to tell us who are we talking to, Priyanka. 

PRIYANKA: No. [LAUGHS] And we are inviting Dustin and Alex from Botcopy to talk to us about Dialogflow, and Dialogflow CX, and all things fun like that. 

MARK: Yeah, so we get into all kinds of great details about what actually Dialogflow CX actually is, what it brings to the table, and all the different ways that Botcopy has been building out solutions for their customers. So super great conversation, definitely excited to get into that one. But before we do that, why don't we go ahead and jump into our cool things of the week? 

[COOL MUSIC] 

PRIYANKA: My cool thing of the week is the new features in Cloud Run. So Cloud Run is now offering end-to-end HTTP/2 connections and websocket support. And GRPC bidirectional streaming. There are lots of applications which weren't able to deploy on Cloud Run, because of the support not being available, so it's very exciting to see that there are these new capabilities in the new year. 

MARK: In the new year. 

PRIYANKA: And you can deploy new kinds of applications to Cloud Run now, that you couldn't previously. So I'm very excited about this. Especially because if you're getting into the Solus infrastructure, and you want to support some of these bidirectional, websocket, end-to-end HTTP secure applications, it's important to have that kind of support. And it's in public review, so it's also important that however you are using these features, you should, maybe, share them with us as well, and how it's helping you or not helping you. We would love to hear that. 

MARK: Hopefully it helps. Obviously, it's always great to get the feedback in and understand what works for people and what doesn't. And I think this is just another great step in looking at all the different offerings that exist out there and saying, OK, well Cloud Run can now do so much more. It's just that much more flexibility to decide where am I going to run my stuff? Or where am I going to run all my things? Because it's more than likely you're probably going to end up with multiple services. 

But when you have multiple services, it can be really tricky to figure out where something might have gone wrong. So for my cool thing of the week, that was actually a really cool segue, I just thought of it now. 

PRIYANKA: That was really good. 

MARK: Yeah, your voice said it was really good. But your eye roll said it was pretty bad. 

PRIYANKA: People are not going to see my eye roll. So that's good. 

MARK: As we covered earlier, this is all audio. So for my cool thing of the week, I wanted to share this, and I just saw this, I haven't had a chance to play around with it. But it looks super, super cool. It's a sandboxed environment for cloud operations. Actually it's a way to set up a sandbox for cloud operations. 

So it's a one-click very simple process. And we saw a little bit of this with BigQuery sandbox, back in the day. Although, the BigQuery sandbox, you could jump in without an account, which was I thought really, really awesome. But this Cloud Operations Sandbox actually sets up a full environment for you, including GKS, so microservices on there, and then all the cloud operation tooling that not only follows the SRE best practices, but also gives you a chance to look through how all these different cloud operation tools work. 

So this used to be Stackdriver. And people, I think, were pretty familiar with it then. All these different tools, now, are called Cloud Operations. And then you can have your logging, and monitoring, and tracing, all that's available. 

But if you haven't had a chance to use them before, having a sandboxed environment is a super good way to learn about it, because you can kind of step through and actually use the tools, really use them. It's even better than a video, where you get to see someone using them. You can try it out for yourself. 

And it's created this entire environment for you. So you can debug. You can look through things. It's such a cool idea. And I love seeing little sandboxy stuff like this. So I definitely want to make sure I get a chance to try this out. And hopefully other people are excited about it, too, because it's just a great opportunity to be able to see some real-world data and interact with it. 

PRIYANKA: Yeah, yeah, this sounds really exciting, especially if you're building apps and you want to know what's going on behind the scenes. And operations is just so important for that, so very exciting announcement, 

MARK: So hopefully everyone gets a chance to check these out. I think they're super, super cool. But why don't we go ahead and jump into our conversation with Alex and Dustin? 

[MUSIC PLAYING] 

Dustin and Alex, thank you so much for joining us. To get things kicked off, can you tell us a little bit more about yourselves? 

DUSTIN: Yeah, Alex and I met three or four years ago. We're both-- Botcopy, and Alex, and I are located in Los Angeles. So we met in the start-up, kind of, venture tech scene here in LA. And we both had these ambitions to really look into AI and, in particular, copywriting. 

So we came together and decided that some chat bots that we've seen deploying with-- at the time, it was primarily Facebook Messenger, and a lot of entertaining experiences. But we found that a lot of the engineers that were developing the chat bots were the ones actually writing the copy as well. So we decided to form a small team with our other co-founder, Rob Lubow, who is an award winning copywriter himself. 

There's a pretty solid group of copywriters here in LA, especially in the entertainment field. So we were kind of trying to combine tech, good copywriting, and AI. And started this small little journey that's pivoted into a full SaaS company, Botcopy. So I'm the CEO and founder. And Alex is the COO. And that's a little bit about us. 

ALEX: And one thing to mention here is we got started and pivoted, actually, right around the Cambridge Analytica scandal with Facebook. So a lot of our clients were asking us, hey, these bots are working on Facebook Messenger. But we want to get it on our website. Can you do it for us? 

And there was no easy way to do it at the time. So we pivoted from that point in time. There was a lot of loss of trust in Facebook at that time. And bots, actually, were shut down or stopped from being deployed on Messenger. And so we pivoted into a piece of software, software as a service for bots on websites. 

That was really the turning point, because we saw, hey, why do customers or end users need to log in order to talk to a bot? When really, they're just trying to get a problem solved on the website. Why do they have to give away any information? 

That was really important to us, and still is, because we make all the conversations, by default, anonymous. And that's important, because we try and protect our users. It's something that we feel is a bit backwards a lot of the times, how do you maintain that privacy for end users? So that's a little bit more about how he came to where we are today. 

PRIYANKA: So I love the story of how it came into being, right? Because it's art and combined with technology and AI, which it's that dream combination of combining all of the passions and things together. What I'm curious a little bit more about, and I'm pretty sure our listeners would be as well, who are not very familiar with copywriting, can you talk a little bit about the copywriting and what that field is? So that as we develop this conversation, we have a little bit more background. 

DUSTIN: Yeah, copywriting is a huge piece of AI, especially conversational AI. It's in all aspects of it. And it's not just back-and-forth messages in Dialogflow. We fell in love with Dialogflow almost immediately, when we found out the potential. 

We'd meet a client. We'd hear out kind of their story, what they needed, what they initially wanted to hire the chatbot. We often look at a chatbot as an employee. And when you take on these new employees, you usually don't want them to handle all tasks at once. Usually, there's a specific problem. You look for someone to employ to fill that problem. And we like to take the same approach, with chatbot design. 

We would have maps that, if you printed them out, it would fill a massive room. And we would have fun looking at all the decision trees and ways they could go. And they would look at this kind of mind blown, oh, my gosh. You guys are putting so much thought behind not only personality cues, but the actual design and business decision making process and operations here. It's very cool. 

And we found a lot of limitations to most builders. They just weren't able to support these kind of fluid flows. Primarily, because you would get trapped and isolated in these little boxes, where if you went into this one branch, or this one section, you would get stuck. And you couldn't get stuck without answering that particular question. 

But in reality, that's really not how a conversation goes. They're more fluid. They're natural. And there are other NLU platforms. We found Dialogflow, we started using it, we fell in love with it. And we just continued there, and realized more and more of our clients wanted that web-based structure. And that's kind of how we came to moving over to the SaaS. 

But as far as the copywriting goes, every company is a little bit different. We can speak on what we know, and it's more of an enterprise level. And everyone wants to have their own brand. 

Geico has that gecko that's really cute and fun. And they sometimes want to replicate that same experience or feeling when talking to a chatbot. So similar to how you style a branding guide, or things like that, if you've gone through a branding strategy and things like that, you want to take the same experience with conversation as well. 

And in the beginning, we would even have-- let's say, you're going down in conversation and you have four suggestion chips that actually lead to the same intent. We're kind of jumping into Dialogflow terminology, but it's interesting. What we would do, as designers, is we would start to identify what type of personality they had by these suggestion chips. 

You could have four suggestion chips, all going to the same intent, but written a little bit differently. And you would find patterns and personality cues, along the way, of how they are. And then you could implement different styles on how to communicate with that customer. 

And that was our theory coming out of the gate, so that was going to be amazing. We're going to learn more about the user and have a more curated conversation. Because at the end of the day, a really good salesperson does that same technique. They mirror the user. And they understand, they try to relate, whatever is most appropriate to them. 

So it's fun. Everybody has a different approach with copywriting. I think Rob often mentions that the key thing you can do in any conversational design is be clear, concise, and upbeat. You get those three, and you've got 70% of a decent chatbot on the way. 

MARK: And I don't want to lose sight of Dialogflow, because I do want to make sure that we dive more into it. But as a more general sense, you're developing these chatbots, you're creating them, you mentioned a little bit of the history that came there from Facebook. What is the business case for these chatbots? Why are companies-- I think support is probably one of the more generic examples. But what are some other examples of people actually coming to say, hey, we want bots. And of course, we want bots that actually have this level of kind of personality to them. 

DUSTIN: A lot of it starts from trying to enhance their customer experience. So we've seen a few companies that are spending upwards of a couple of million a year on call centers, live chat volume, things like that, that they look into and say, OK, how can we automate a few of these? Maybe not every single thing, but here's where a few of the larger bottlenecks lie in our operations. Let's figure out chat flows and things that we can handle that. 

If that's satisfied, great. That takes off a big chunk of operational expenses. And if it's not, let's say, the bot isn't able to handle something, a default message is triggered and helps loop that in with, maybe, a human or a time schedule a call, or captures an email, to fulfill, maybe, a more complicated task, or maybe even ask that that's something they should look into training the bot to do next. That's the overall beginning approach is more customer service, some sales, lead generation, things like that. 

But last year, what really struck us as interesting, given the pandemic and lockdown situation, is we had more and more companies, larger companies, 10,000 plus employees, reach out with internal employee management chat needs. HR, how to work from home, how to check on corporate protocol documents, whether it's sales, which is fascinating. And I really like that use case. 

Because it seems like procurement and internal legal teams can get internal decision making processes done a little bit faster. So we have seen the AI and things like that scale a little bit quicker. Where there is, on the B2C side, we do see several security regulations and things like that that they need to get through, but primarily, customer service, ticketing, things like that. 

PRIYANKA: So you mentioned Dialogflow. And maybe this is the right time to kind of dive a little bit into it. What does Botcopy actually add to Dialogflow framework? 

ALEX: Botcopy is really a top of the funnel layer to your chat experience on your website. So Dialogflow is handling all the processing, all the understanding of what's coming in. But what we really focus on is where is the user actually coming from. Are they coming from a marketing campaign or from particular link? What content are they interacting with on your website? 

If they're looking at your pricing page versus, maybe, your blog, what the user cares about and what's at the top of their mind is very, very different. And so what we offer is the ability to connect these dots on your website, where they came from, what they're looking at, that content, are they in a particular section of your website? And allowing, then, the bot to be able to prompt the user. Or to understand where they are, and then take those variables into consideration and provide the correct response. 

So talking about customer support, if a user is looking for troubleshooting on signing in versus connectivity or internet issues, those are very different problems. And so depending on what they're looking at, the bot can actually respond appropriately. So being able to provide that connection is really what Botcopy offers in a host of features. 

And I don't want to dive into each specific feature. But we do see what we call as augmentation of websites. So you have the bot living on the website. And we connect those two layers between the two. So that, in a nutshell, is what Botcopy offers. 

DUSTIN: It's funny to kind of think about. Their first initial thing was OK, how do we solve the problem of these really good chatbots existing in a very customizable interface? That could sit in the corner, that could go full screen, we have a lot of clients that use our chat interface as landing pages, where they might scan a QR code. That's a pretty popular one these days, especially for restaurants. 

Where they scan, and just pops up full screen on their mobile as hey, welcome to this restaurant. I can help you with placing orders, tell you ingredients in the food. Those full-screen experiences we call CUI mode. But those are just one of the additional features and integrations that we continue to add to have that layer of customizability, and then also, that context and augmentation that Alex was talking about. 

ALEX: Yeah, and at a company level, it's really a build or buy decision. So a lot of times, our clients will come to us, they've either just got started on building out their agent, or they're ready for production with their agent. And they've come to the point where they really need to deploy it on their website, with the host of features they're looking at, like I mentioned. Where the user's coming from, they want to connect to their marketing emails, those campaigns. 

So it's really that build or buy decision. Hey, are we going to have this team build out these host of features and maintain it for web standards going forward into the future? Or should we just use a SaaS service to fill the gap? 

And what we're finding is a lot of companies, we don't see AI teams in most companies today. And I think that's really going to be something going forward, as a lot of companies change their internal processes is bots, for right now, are kind of solving simpler problems, repetitive or simpler problems, and aren't really the core basis of a company just yet. 

So I think, going forward, we're still pretty early where we're at. But I think, going forward, what we're going to see is a lot more bots being kind of the crux of these companies, just because it's just so much more automated across the board. And you're able to free up time. Time, especially because that's very costly to a business, and we see that with customer service right now. 

That's really the main use case that we're seeing is handling these incoming questions after sale or presale. These are the things, the necessary burdens of companies. And so I think we'll see a lot more of that, going forward, with how these bots are ingrained in these business processes. 

PRIYANKA: That's a great point, Alex, because there's lots of time when I talk to customers, and they're building Dialogflow experiences, conversational experiences. And then, when they are ready to deploy, or when they're trying to get into production. That's where all this anxiety comes in, right? 

And it seems like there's not just one place that they're going to interact with this bot. It's not just web. It's going to be phone. It's going to be all these other different channels, from social and all of that. So it seems like Botcopy kind of provides this cohesive environment where you can not worry about all of that distribution part of it, as well as get all the insights that you need, and make that process much easier for the customer, as well as for yourself. 

ALEX: The way that we went about it, in terms of designing the software, is we really don't require an overhaul of your systems. We really fit in another layer into your tech stack. So it's much easier to bring this interface on. Because a lot of times, there are legacy systems and enterprises, 10-year-old companies to 100-year-old companies. If you're going to augment that system with a bot, right, it's very hard to get away from that system, especially if it's legacy. 

So adding in new tech, right, how does that fit into the existing stack? That's something that we really took into account in designing out Botcopy. And that's why we don't handle processing or natural language understanding. That's what we leave up the Dialogflow and the experts, because we understand that it should fit into the existing stack. And you should be able to choose, as a company, as well, without requiring that overhaul. 

MARK: And so, yeah, let's dive a little bit deeper into Dialogflow. Because obviously, Dialogflow has been around for a while. But it's constantly being worked on. There's constantly new stuff being added. And then Dialogflow CX, as I understand, is a great example of it. So first things first, what is Dialogflow CX? 

ALEX: Yeah, so Dialogflow CX is the new version recently released from Google. And Priyanka, you can obviously talk a little bit more about this. From but from our side, at Botcopy, we were really avid users of Dialogflow ES, as it's now known, up until this point. 

So what we found with CX is it has that modular builder. Our customers are telling us this is something that they've been looking for. Moreso, it's much easier to use. And it allows state-based modules in conversations. So you can actually have a little bit more granular control rather than context, like you do with Dialogflow ES. 

But, I think, at the end of the day, it's just an easier way to manage your agents for that omnichannel experience. As I understand, it's more geared towards voice, as well. But from our end, users that have requesting access for Dialogflow CX, those are the main tidbits that they've been mentioning to us. 

PRIYANKA: Yeah, Alex, you pretty much covered all the main points there. It's really just an extension of the Essentials platform, where if the enterprise teams that had different bots that were in the company, and different teams are managing them, it's easier with Dialogflow CX, because you can have multiple flows that are managed by different teams. 

If you have orders team versus returns team versus exchange team, all of them can be handled by different teams. And you still have your own modular ways of creating the flows. And at the same time, the versions and environments, you control them all on your own. And then at the end, in the flow, they can just call each other wherever it's needed. 

So more of a developer is kept in mind in the design of Dialogflow CX, making it easier and simple to understand. Also the graphical user interface, so you can drag and drop and visually see what's happening. Those are kind of the main things. 

And the context, so given the state-based model, it's easier to find fine-grain or fine-tune the flows, in terms of where it should transition, and what should happen in that particular state. And what you can do with that state is also extended. So I went into a lot more details. I have this whole series coming up on Dialogflow CX episodes. 

If you need more details, we are going to put that in the description of this episode. But we can move on to other parts of this conversation. But I think touching on Dialogflow CX was important, given all the new developments in the enterprise space for conversational experiences happening. 

DUSTIN: Yeah, we've had a lot of our clients on the ES side. We deal with a lot of larger call centers. And call centers are interesting companies to work with, as far as how their GCP is structured, because they're dealing with their clients. And so you've kind of got a little bit of a client inception, basically, going on in the GCP project. 

Where they usually do one or two things. They add them to their own GCP account and create a separate project for that client. Or their client, for whatever reason, is mandating that they use their GCP and invite the agency as a rule. 

So it does become kind of complicated. And we saw a lot of them, on ES, reach their project quotas quickly. And what we've seen on CX is that you can add multiple bots to one project and operate pretty smoothly. So I think that's a great play for any companies that's listening to this podcast that has-- whether you're an agency or you're a larger enterprise that has several departments, and each department is probably going to build out their own chat experience, CX might be something you really want to look into. 

MARK: Yeah, and for a SaaS company, I have to imagine that the improved developer experience and the customization not only give you the power of those new features, but also let you work with multiple different clients in creating all these different things. And then, I think you brought up an interesting example earlier about having teams collaborate. So what is it about CX that really makes it much more team friendly? 

DUSTIN: I think creatives are, by nature, a little more visual. And the way ES is set up, intents are very organized and structured alphabetically. And once you get the hang of it, it's easy to understand and digest. But from a creative, if you hired a copywriter, if you have a copywriter in house, or a design team that wants to set up the initial flows, having that kind of GUI Visual Builder is going to be helpful for them they pick it up quickly. 

At least, that's what we've experienced from other builders. Even before CX's flow builder, we would use something called Miro Boards. And we would create these elaborate maps and decision trees and connect all the dots. Cool company, by the way, if anybody has project management stuff and team building online, Miro is a cool product. 

But it looks like the same concept in CX, where you can use those flow builders. It's quite helpful for getting one team in to design something, and then pass it over, maybe, to their developers. And then once it's finished, they can present it to upper management, get it approved, and then into production. 

PRIYANKA: And then the concept of versions and environments is great as well, because the team can just have their own versions. And one team can be on version one. The other one can be on version five. And they can work at their own speeds, but still be able to call each other's flows. I think that's super powerful, as well, in CX, which wasn't as easy to do in ES. 

DUSTIN: Definitely. 

MARK: So with all these new tools, I mean, it sounds like you all have had a great chance to work with a whole bunch of really cool customers. I'd love to hear some examples of some of the people that you've worked with to kind of build this. I really like that restaurant example from earlier. That was one I hadn't thought about. But what a great way to take the burden off of both the consumer and the staff working there, to say how can I get rid of most of these basic questions, just by asking this more intuitive system. 

DUSTIN: Yeah, so hotels and restaurants kind of go off that QR code scanning experience, which has picked up, especially since last year. For those of you who can go to restaurants right now, you're probably seen the QR code scanners. Most of the time, they're just jumping to a PDF experience, which is fine. 

But then the waiter or waitress comes out, takes your order. And a lot of that can actually be handled digitally if you build a chatbot out. That was one cool experience. I think, if we're looking at 2020, there was so much shift in companies and thinking of how to handle the pandemic, how to handle operations. 

We get pretty close to the clients that come in and use Botcopy. A lot of these teams are, as Alex mentioned earlier, their AI team is younger, smaller. They are building them quickly. But they still like to have a little extra support on how to build out these chat experiences. So we do kind of take pride in some of the NDAs that we have. I can speak on some of them. 

Genentech Roche company, dealing with clinical trials. They didn't do any clinical trials with the COVID vaccination. They were dealing with all sorts of other clinical trials at the time. But as a healthcare, and one of the biggest pharma companies in the world, you can only imagine, kind of, how operations and other medicine things like that-- it just a big shift. And they still need to get these trials done. 

And that was an internal use case that we had built with them. They have their own team building out the chatbot. How it works was their clinical trial team, if they had a question or wanted more information about specific protocols on any potential medicine that they were working on, they would reach out to a contact center or an internal support team that would go through some documentation, give them some information. 

So the chatbot was designed to speed that process up. It would, on average, take 24 to 48 hours to get back to someone, which pauses a clinical trial by 48 hours. So it really can be potential life and death situation. So it a really exciting client to work with and really understand their problem. 

The hardest part in chatbot development is really understand the initial problems that you're going to be solving. And this chatbot is already saving thousands of hours with some of the answers that they're able to provide. It reads their Google Sheets and Google Docs, so any time their team makes updates to them, and they go to the website, the chatbot pings them and says, hey, there is recent updates to a documentation that is in your department. Click here to read more information. 

And this is instead of the employee coming to work, maybe reaching out to their department saying, hey, what updates have taken place this week. The chatbot kind of notifies them and gets them up to speed very quickly. So that was a really cool one last year. 

And then we've also seen a lot of universities and education. They've been hit pretty hard last year, big shift there, these digital environments. Which, I think, at the end of the day, the ways that these universities or K through 12 have adapted and taking on, I think there's a lot of things that they're going to keep for the future, maybe not as rushed. But some of it will be good. 

We work closely with Calendly. A lot of the education sector was using Calendly as their portal for students and teachers to upload homework assignments, things like that. And they can now add Botcopy to their Calendly account. They can chat with it. It can answer questions about homework assignments and things like that. Thought that was a very compelling use case from the University of Birmingham in the UK. 

ALEX: Yeah, and Canvas, as well, that's also the system that they're integrating with. And I think what Dustin is hitting on right now are these use cases. But something I do want to mention here is it's quite difficult to nail down what is the exact use case in the very beginning. 

And something that we've typically seen, when clients come to us, is that when they first get started, it's 50% of their assumptions are right, and the other half, not so much. And so that really changes the plan going forward. So something I would mention that-- and from our learnings and our customers learnings, from these case studies, is that they got half of the things wrong in the beginning. And so changing and staying fluid for what you should build out next, that's your learning moment when users start asking. 

So our takeaway from this is really to test very, very early, because you're going to find that you're going to be able to cover most of the use cases. But you're going to miss some of the obvious ones, even though you might have thought you had covered them in the beginning. So just being able to stay on your feet and change the design of the agent, you don't want to get locked down into one particular use case. 

In terms of the education sector, just to bring it back home, it's something we found with one of our clients at NYU, was they were designing out for admissions. And most of the users that came and talked to their bot weren't American students or citizens. They were actually foreign students looking at prospective programs. But they were asking the bot during the night, because they're halfway across the world. 

So NYU's support team, they weren't there. They weren't available. And so they're potentially losing out on really connecting with the student, showing them the right resources, getting in the answers they need. I think, most of us have all been students at some point, trying to search for information. It's very hard to get in touch with somebody or to find that information quickly. 

So they actually tried to pivot a little bit with the use case, because you're talking to foreign students instead of American students. So are they looking at financial aid assistance, what's the differences there? And how are you going to deal with these nuances? So I did just want to throw that in there, because that is, really, something that we come across all the time with our customers. 

DUSTIN: And it's interesting, with that same example, where a chatbot or a chat experience, even if it gets it wrong, I always say that some of the best chatbots I've seen are the ones, with just a very compelling default message for if it goes wrong, understanding how to handle when things go wrong, what to do. There should be some kind of protocol there. 

But it's direct feedback. And you can't just get that from a website. I mean, even if they saw on the heat map or from Google Analytics that there was a lot of clients at this time coming to the website that just bounced or left, with the chat experience, you're getting direct feedback. It's them communicating. 

They'll write a message that you might not be able to respond to, but as long as you have-- this is important for any company that's looking to have a chat team, is have a system in place for your analytics to really understand, because this is some very crucial feedback that you're getting. That you can, with some small changes, capture these potential leads, or assist these customers, whether from overseas, or they're looking at a different product that you don't market that well or don't talk about too often. But here it is. And here's some proof that people are actually talking and wanting more information about it. So I just think it's fascinating to get that kind of information when it comes into the chat. 

PRIYANKA: Yeah, the things that you can learn just based on the questions that people are asking, just keeping an eye on analytics all the time is just that very important best practice when you're building conversational experience of any kind. And also, things like how many of your customers are coming from non-English speaking backgrounds or other languages that you should be supporting in the bot. All of those things, we can just learn by looking at the data and the analytics. So that's super powerful. So real quick, how does someone actually get started with Botcopy? 

ALEX: Super easy, you're able to create an account with your Gmail. So we have an OAuth with GCP. It's really just two clicks of a button. So you give us access with your Gmail. And then we're able to pull your Dialogflow agents and allow you to choose which agent to connect to your bot. 

There's already, the bot itself, the UI, is already set up. And then you can customize everything. It's white labeled to whatever type of branding or however you want to configure it. It's all modular. What we try and account for are all the different types of use cases that might come across. 

So like Dustin mentioned before, there's CUI mode, where you can take up the full website experience. And your website is only the bot. Or you can have it sitting in the bottom right-hand corner and being there as a little chat support for when the user needs it. You can customize it however you see fit. 

But it's really, really easy. You really just need to Gmail to get started with us. And that's really just the tip of the iceberg, I mean, we're getting started, though. It's what is the use case. So like I said before, companies are either at the very beginning of their agents, or they're about to deploy their agents on the website. And so understanding what that use case is is really, really the number one thing. 

That I always turn the question on its head and pose it back to the customer. Because I want to make sure that whatever they're building is worth their time, otherwise, it's not solving for the end user. And what I would like to see in the future is less time spent, on a global scale, because users have gotten their answers faster. That leaves so much more time for other problems to be solved or more time for your life. So that's what I would like to see. And that's what we try and push with our customers when we review their use cases or try and understand what their end users are asking for. 

MARK: We'll make sure to put the contact information for Botcopy in the show description, so people can reach out if they have questions. Or they want to give it a try. As Priyanka said, we are just about out of time. So before we wrap things up, is there anything else that we neglected to mention? 

DUSTIN: No, I think you guys covered it. So we rely on Dialogflow as the actual chatbot development. And we do offer sessions, once or twice a month, with, usually, it's close to about 20 accounts at a time, where we spend time reviewing Dialogflow. We often watch some of Priyanka's videos and just help with getting things set up. I know it's a little complicated in the beginning. So we're here to help any way we can. 

ALEX: Yeah, and I guess the only other thing I would mention is there's a lot of different integrations that we currently offer. So if you're using some existing systems, like we mentioned before, some legacy systems, you should be able to integrate those with the bot. Dialogflow is that core piece processor. Everything flowing in and out of there, you should be able to connect it with your web hooks. 

And like Dustin mentioned, we put sessions on every month to walk through, or provide tutorials, or provide troubleshooting help to our customers. Because we feel it's important in terms of how you set up, especially when bringing a legacy system up to date with the latest tech, understanding where the pieces fit and where they should go, rather than you think that they should go, right? So that's something we walk through with our customers on these sessions. 

And I guess that would be the only other thing I would mention. It's a few times a month. And a few different departments can run it. So if you're more focused on marketing bots versus internal operations, or you're a product manager, we have sessions for those different types of verticals. 

MARK: Awesome, we'll make sure to include that information in the description below for people who want to check it out. Well, Dustin and Alex, thank you so much for joining us. It's really exciting to hear about it. And I'm sure we'll have tons of great information about Dialogflow from Priyanka, as well, for people to learn from. 

PRIYANKA: Yeah, thank you so much for being here. 

DUSTIN: It was fun, guys. 

ALEX: Yeah, thanks Mark. Thanks, Priyanka. 

MARK: Once again, thank you so much to Dustin and Alex. It's always really exciting to hear how actual customers implement these things. But also, yeah, like I said before, I hadn't heard of Dialogflow CX. So it sounds like a really great update and a great tool for teams to work on Dialogflow. 

PRIYANKA: Yeah, it's a really cool announcement. And I look forward to seeing and hearing from our enterprise customers as to how they're using it. 

MARK: Yeah, but of course, one of the challenges that I think would, naturally, come to mind is OK, so maybe I've used Dialogflow, maybe I haven't. But maybe some of these features for Dialogflow CX would be really interesting. How, Priyanka, could you tell me to learn more about Dialogflow CX? I get the feeling that you may have a tip or two about that. 

PRIYANKA: You are right, because I've been working on a set of five or six video episodes for people to get started on Dialogflow CX. So they've started dropping starting last week. So now, every week, you're going to see an episode on Dialogflow CX on different features that we are covering in there. 

And you're also going to build an entire application for an enterprise use case, which is going to talk about how you can use different flows, and interactions, and transitions from one flow into another, which could belong to totally different teams that, maybe, don't talk to each other, but can interact in the flows within Dialogflow CX. So I'm very excited to share those assets with you. We'll drop the link to the first episode here. But follow along the series, because it'll continue on for about a month and a half. And let us know what you think. 

MARK: Awesome, well, it sounds like we've got a lot of links in the show notes for people who want to try things out. Which I'm always a huge fan of, because I think trying them out is definitely the best way to kind of get that hands-on experience with learning it. 

PRIYANKA: Yeah, I agree. 

MARK: Well, for all of our listeners, of course, thank you all for tuning in. And we're excited to see you all next week. 

PRIYANKA: Thank you. Bye. 

[THEME MUSIC] 

MARK: I don't know if breakfast is the most important meal of the day. I just don't. I'm not-- I don't have the research to back it up. But I do know that I like breakfast. And to me, that's important enough, right? 

PRIYANKA: Yeah, I want food. And I like to have breakfast. And that's what it is. It's important or not, that doesn't matter. 

MARK: Yeah, no, I don't need a doctor to tell me that I love starting my day off with some cereal, or some oatmeal, or some cold pizza. Oh yeah, those are the three most important breakfast foods. 

PRIYANKA: I like cold pizza actually. Let's do it. 

MARK: Let's do it. 