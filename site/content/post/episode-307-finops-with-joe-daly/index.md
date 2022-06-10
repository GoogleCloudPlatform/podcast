+++
audioDuration = "00:39:37"
audioFile = "Google.Cloud.Platform.Podcast.Episode.307.mp3"
audioSize = 57049034
categories = ["Finance", "DevOps", "Optimization"]
date = "2022-06-08"
description = "On the podcast this week, guest Joe Daly introduces Stephanie Wong, Mark Mirchandani, and our listeners all about FinOps principles and how they're helping companies take advantage of the cloud while saving their bottom lines."
draft = false
episodeNumber = 307
hosts = ["Stephanie Wong", "Mark Mirchandani"]
title = "FinOps with Joe Daly"
image="/post/episode-307-finops-with-joe-daly/images/hero/hero-EP-307.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/v7uanq/episode_307_finops_with_joe_daly/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

On the podcast this week, guest Joe Daly tells [Stephanie Wong](https://twitter.com/stephr_wong), [Mark "Money" Mirchandani](https://twitter.com/markmirch), and our listeners all about FinOps principles and how they're helping companies take advantage of the cloud while saving their bottom lines. He describes FinOps as financial DevOps, making financial decisions in an effective and optimized way. With his experience in finance and tax accounting, Joe has developed a special knack for navigating the sometimes confusing world of cloud finance policies, and his contributions to the FinOps Foundation have been many. 

For starters, collaboration with various business departments is important for developing a plan that leverages the benefits of the cloud but keeps the company using resources wisely, Joe explains. He talks about the FinOps Foundation and their focus on creating community for knowledge sharing. By fostering collaboration among different company roles and promoting financial education, companies are better able to determine financial goals while making sure each facet of the company reaps all the benefits of cloud participation.  

Following the FinOps cycle is the easiest way for community members to get started. The three steps, Joe tells us, are inform, optimize, and operate. The inform phase involves clarity in spending so teams understand how much money is being spent. In the optimize phase, benefits of spending are matched with expenditures to ensure resources are being used to their full potential. Finally, in the operate phase, engineers and finance managers come together to understand why solutions were chosen and understand if these tools are offering the right answers for the company. 

Every company is different but the sooner it's possible to start the FinOps journey the easier it will be to maintain in the future. Joe gives us examples of how companies are using the principles for successful strategies and the challenges that some of them have faced. The Foundation has monthly summits that offer perspectives from these companies as well as partner presentations. The FinOpsX conference is coming up soon as well. To wrap up, Joe offers other resources from the FinOps Foundation, including his podcast.
 
##### Joe Daly

Joe set up two FinOps teams at Fortune 100 companies. He joined the FinOps Foundation and has been setting up the ambassador program, supporting meetup groups, and producing FinOpsPod.

##### Cool things of the week

* AlloyDB for PostgreSQL under the hood: Columnar engine [blog](https://cloud.google.com/blog/products/databases/alloydb-for-postgresql-columnar-engine)
     * GCP Podcast Episode 304: AlloyDB with Sandy Ghai and Gurmeet "GG" Goindi [podcast](https://www.gcppodcast.com/post/episode-304-alloydb-with-sandy-ghai-and-gg-goindi/) 
* How Google Cloud is helping more startups build, grow, and scale their businesses [blog](https://cloud.google.com/blog/topics/startups/updates-and-announcements-startup-summit-2022)
* Automate identity document processing with Document AI [blog](https://cloud.google.com/blog/topics/developers-practitioners/automate-identity-document-processing-document-ai)
 
##### Interview

* FinOps Foundation [site](https://www.finops.org/)
* FinOpsX [site](https://events.linuxfoundation.org/finops-x/)
* FinOpsPod [podcast](https://finopspod.captivate.fm)
* Cloud FinOps: The Secret To Unlocking The Economic Potential Of Public Cloud [whitepaper](https://www.forbes.com/sites/googlecloud/2022/04/04/cloud-finops-the-secret-to-unlocking-the-economic-potential-of-public-cloud/?sh=1755a008222a)
* Maximize Business Value with Cloud FinOps [whitepaper](https://services.google.com/fh/files/blogs/cloud_finops_paper.pdf)
* Unlocking the value of cloud FinOps with a new operating model [whitepaper](https://services.google.com/fh/files/misc/unlocking_the_value_of_cloud_finops_with_a_new_operating_model_whitepaper.pdf)

{{< transcript "[MUSIC PLAYING] MARK: Hey there, everybody, and welcome to episode number 307 of the weekly Google Cloud Platform Podcast. I'm Mark \"Money\" Mirchandani, and I'm sorry. I couldn't even get it out with that. We got to make-- if I don't keep saying it, it's not going to stick, obviously." >}}

STEPHANIE: This is the perfect episode for it, you know? 

MARK: Yeah. Well this, is the one time I feel good about using it. 

STEPHANIE: You got to roll with it. You got to roll with it. 

MARK: And of course, I'm here with, as you just heard, Stephanie Wong. Hey, Steph. How are you doing? 

STEPHANIE: Hello. I'm actually really excited that you used that name today, Mark "Money" Mirchandani, because you've been pushing back every time I've used it. And finally, I knew, with persistence, you would accept the fact that that is now your name. 

MARK: I am run down. I have given up. I will accept the nickname of Money in a way that will probably confuse most people because-- but I mean, we do talk a lot about billing and money and FinOps and all those sorts of things, and that's exactly what we're talking about today. 

STEPHANIE: Exactly, yes. Today, we are talking to Joe Daly from the FinOps Foundation about everything FinOps, which I didn't know too much about until this conversation, and so it was really enlightening for me. And Joe is just a great, splendid person to talk to. I mean, he's hilarious, so you're in for a great episode. 

MARK: Yeah, Joe was an absolute delight. And like you just said, Steph, we get all into what is FinOps, what is the FinOps Foundation, and talk about Joe's role in that. I'm hopeful that a lot of people will find this a really enlightening conversation because I think what you just said is probably true for a lot of people, Steph, is not a lot of people have that background in understanding maybe what FinOps is, what the foundation is trying to do. 

But also-- and we get into this during the conversation-- this understanding and education towards people who have different backgrounds, engineering backgrounds and then financial backgrounds, and joining those together. The whole point is for information to be shared. And anyway, we'll get into it in the conversation, but I really, really like the idea of helping share this content with people who may not-- sometimes they don't even care about this content, honestly, because sometimes you don't think about the financial side of things. 

And it's really, really quite important to do that. And again, we get into all those reasons why. So I'm super excited to finally be able to do an episode entirely dedicated to FinOps. 

STEPHANIE: Yeah, with cloud spending, everybody has to care a little bit more about the financial implications of it these days. So Joe makes a great case for it, and he makes it more exciting. So stay tuned for that. But before we dive into all of that, let's go ahead and talk about our cool things of the week. 

[MUSIC PLAYING] 

MARK: OK. So as usual, I have two cool things of the week because everything is so cool. The first one is a quick blog post that goes into some details about AlloyDB. We actually had our great friend, Gabe Weiss, on a few weeks ago to talk about AlloydB. And we were talking about, well, it coming out and being announced at Google I/O and all the amazing things that it does. 

And this blog post goes into a lot more detail around how it actually has the performance benefits that we went into that detail. So I recommend listening to that episode if you're a Postgres fan or you just want to learn more about databases. But I also recommend this blog post because it really gets into the nitty gritty about how those performance benefits and all the cool ways that we really built AlloyDB to be an amazing place to run postscript databases. 

STEPHANIE: Yeah. Exciting. One of our biggest launches to date, and I think announced at I/O. So check it out. Gabe is all-around such an expert, and he was really involved in the product launch itself. So he's a great person to listen to about this. 

MARK: Definitely. And then my second cool thing of the week is a short blog post that talks a little bit about Google's Startup program. I've actually had the pleasure to work with the Startup program in a couple of different iterations over the past few years. And it's really a lot of fun, and it's really exciting to be able to sit down and talk to startups. And sometimes they're looking for advice on their architecture. Sometimes they're looking for general advice on being a startup, which is a very complex and hard to do thing. 

So we try to create as many programs and opportunities as we can to help them out. So this blog post goes into some of those details and gives a link to the application form if you want to look at getting some extra support from Google for Startups. And so if you're thinking about a startup or you work for a startup, I'd highly recommend checking this out. It has been such a great opportunity, obviously for the startups, but also for Googlers to get a chance to meet and help those startups. 

STEPHANIE: Yeah. I love being involved in the startup ecosystem in some way, shape, or form because I love just learning about not only the exciting use cases of their technology stacks, but also the founders and their stories of how they got started, what their values are, how their identity plays into it. So a huge supporter of this program. 

But with that, yeah, I also have one cool thing also from a colleague of ours over at DevRel here. It's about Document AI, which is one of our products. And so Laurent Picard is here to talk about how you're able to automate identity document processing using Document AI. And so this is for situations like financial accounts or identity gates, hotels, anything that has customer benefits. 

And so we have processor types automated in Google Cloud for driver's license, IDs, and passports, and so Lawrence walks through a full demo of how you're able to use Document AI to utilize these processors and automate away, extracting some of the information in your documents. And there's a lot of great walkthroughs here with code samples as well as cool GIFs showing you his demo live here. So go ahead and check out that blog post to see it all. 

MARK: I think Document AI is-- that is like the '90s version of magic technology finally brought to reality. It's so cool to see this just ability to take, and I had a great chat with some of the DA folks who were working on it a while back. And it's so amazing to see the ability to hey, here's a million images. And then Document AI is like, boop. I got all the information put in the Cloud. Don't worry about it. 

It's awesome. And actually, I think we did a podcast about it, at this point, probably a couple months ago. But yeah, it was such a cool technology. 

STEPHANIE: Yeah, I think it might have been with Anu or Dale, but they have also played around a lot with this product as well. And the cool thing is yes, it's magic technology that we've been excited about since the '80s at least, but now we have the ability to use machine learning to make it so much easier. And you can see in the blog post that the demo application that Lawrence created is even drag and drop, and so it's even much easier for business users to use as well. 

MARK: I love it. Well, with all of our cool things out of the way, why don't we go ahead and jump into our conversation with Joe about FinOps? 

[MUSIC PLAYING] 

If everyone's ready, I'll just kick it off with asking you for an introduction, Joe, and we'll take it from there. 

JOE: Sure. My name is Joe Daly. I'm the Director of Community at the FinOps Foundation. 

MARK: That's it. That's your entire biography? 

JOE: That's my bi-- oh. You wanted more? OK. 

MARK: I mean, if you were to tell us your story or how you got there or why FinOps-- 

STEPHANIE: Tell us your life story. 

MARK: Yeah. 

JOE: So how about I Benjamin Button my career? I started off as a director of community at the FinOps Foundation. Before that, I started two different FinOps teams at Fortune 100 companies, most recently Nationwide. And then before that, Cardinal Health, where I started the cloud optimization program there. 

And I'm not really a technology engineer. Before that, I was a finance engineer and a tax accountant is how I birthed my career, as a tax accountant, which is actually pretty good training for the cryptic expense policies in public cloud. So that's Benjamin Buttoning my career backwards. 

STEPHANIE: I love it. Well, FinOps. So we have DevOps, SecOps. We have all the Ops, so why not throw another one into the mix? But you've done this at these big companies that are clearly taking it very seriously now that you've started these practices. So tell us a little bit about what FinOps is. 

JOE: Well, I like how you framed it up in comparison to DevOps because there is a misconception that its financial operations. And there is a FinOps that is financial operations, but that's accounts receivable, accounts payable, transactions sort of thing. When a FinOps person walks into a FinOps meeting, there can be some confusion on what the topic is. However, when we talk about FinOps Foundation, it's just a portmanteau of finance and DevOps, financial accountability in the development of solutions for your business. 

Some people call it FinOps. I call it FinOps because it's two syllables. And I say it a lot, so it's very easy to say. When I was a practitioner, I called it cloud optimization. People call it cloud business office, cloud financial management. 

It's all basically the same thing about, how do you derive value out of your cloud spend? Because the beauty of the cloud is it's fast. A lot of the gates that slow down development or hold back development don't exist. And that's beauty. You could develop value really fast. 

The flip side of that is you can be completely financially unaccountable and sink your project or your solution in a bunch of red expense numbers and ruin everything. So it's really just about, what are the processes? How do you collaborate between the business, the engineers, and finance to make sure that we're all talking the same language and pushing towards the ultimate business value? 

MARK: Right. Because in some ways, this is all new stuff. And in some ways, this is the same thing that's been repeated over and over again. This is about those core principles of getting people communicating and getting them on the same page so that ultimately, everyone can figure things out because I feel like the underlying secret is that the cloud is really complicated. And the picture gets really muddy really fast when you're trying to figure out, what the heck am I spending on? 

Where is my money going? Is this the right use of resources? It's such a weird and complicated, but also beautiful world. And the speed and power of the cloud is also the dangerous part of it. I'd love to hear more about the FinOps Foundation as a whole and their idea of unifying people with this idea of this new FinOps. 

JOE: Right. So absolutely. What we found is that it's often there's one team in a company that's focused in on this. And I can talk from experience. It can be a lonely place inside that company. Depending on how well-accepted FinOps principles are in your company, you could be seen as the man pushing bureaucracy down people's throat and slowing down development, or you could be seen as someone who's constantly educating or constantly arguing. 

There could be friction. But there's a whole lot, and there's not a lot of connection there. So one of the big things that we like to do at the FinOps Foundation is create community for those folks because it's awesome having that connection moment of hey, you know exactly the type of problems that we face and being able to have that, that this is my tribe moment that you don't necessarily always feel inside your own company. 

And then once that happens, the knowledge starts sharing, the story start spreading, and we've come up with best practices that could be applied in your company. If, say, you're new into a certain technology, what's the best way to get to optimize that or to put in the right governance at your level for it? 

STEPHANIE: No, I mean, I agree. I think based on your background, you having finance in your career and also being really experienced in cloud now, having this intersection of experience has boded really well for you to be in this position. But do you think that folks wanting to wear these hats need to both be stewards of cloud development as well as finance, or what kind of roles and personas do you think take on this type of champion? 

JOE: It's an interesting question because when you're spanning engineering, finance, procurement, business strategy, there's so many skill sets that could be in play here. You need to be able to collaborate and almost be like a walking Rosetta Stone to be able to translate between engineering and finance. Contract language with your procurement team, super, super important because you can optimize technology all you want, but if the red lines in the contract state something completely different, it doesn't really matter. 

It's so important that you're able to collaborate and work together and translate what it means to be running a solution in the cloud and how it behaves and how the customers are interacting with it because that all drives what the financial accountability is at the end of the day. 

MARK: Yeah. I mean, those roles, especially those with a more traditional engineering background and those with a more traditional finance background, especially in the world of FinOps, feel like they're very opposed on this spectrum of, how do we measure and come up with a good solution, but also make it something that actually works for our bottom line? 

JOE: Right. 

MARK: There's a lot of complication in there. So I wonder if you could dive a bit deeper into those two roles especially and talk about why FinOps and some of the best practices are so I guess different from what they might typically we expect. 

JOE: Everyone comes to their role with their own experience and their own baggage. I remember when I was hired at Nationwide, I was one of the-- maybe I was an-- I don't know. My old boss called me employee number three, but I think it was more like number six, rounding errors. And I was introducing this concept to the IT organization, saying, hey, cloud. We're opening up cloud to you all, but here's how we're going to maintain it and manage it and make sure that we have accountability in it. 

And I was just going through the nuts and bolts, stay informed, find optimization opportunities, and then work with the teams to operate and iterate on those opportunities. And someone raised their hand. They were an enterprise architect, and they said, why do we need to care about the expenses? And I just looked at him. I was trying to figure out, was he approaching me, giving me an alley oop, like slam dunk answer, or did he really not know that revenue minus expenses equals profit or loss? 

I wasn't sure where it was coming from. And it turned out, he didn't understand the profit-loss equation. But his experience was in a world where they didn't have that visibility between the connection of what the architecture and operation of that solution was directly on the finances. So there wasn't that direct link there. 

And so some folks, it takes a while to grasp the concept of why it's important and why this is a whole new world. And buzzword is shift left. Bring financial accountability into the engineering. That's great. But there's a whole lot of responsibilities that you are throwing on engineers that may or may not be trained to take that because I know if they shifted right and put engineering on finance folks-- I mean, I once launched a WordPress site. 

But that was hard, and I didn't enjoy it. So I imagine the reverse is true. It takes a lot of effort. Now, that was one extreme example of someone not understanding why financial accountability is important. There are folks who are just like, whoa. 

All these cloud services are very hard to understand. The pricing on them is different for each and every one of them. How am I supposed to comprehend all of this? And then there are others who are just the ultimate in product owners. 

I remember I got on a plane. I was flying out to Des Moines, Iowa to visit a team out there. And I got there and started talking with them, and I realized, why did I fly out to Des Moines, Iowa? These folks were so far ahead. They had everything down. 

So it's the spectrum of who you're working with and being able to-- I'm from a finance background. It's important to be able to meet people where they're at and not just assume, hey, expenses can be bad if you have too many of them. 

STEPHANIE: Yeah. Yeah. I mean, I used to work at Oracle, and this was at the precipice of cloud exploding. And so our primary form of business was to sell licenses in unmetered fashions. And so these enterprise engineering teams are used to having expected costs at the end of the year, and they can plan out for a number of years into the future by buying seats and licenses. 

And suddenly, now you're shifting to a whole new model of metered services and the potential for a developer to spin up 18,000 VMs and blow the top off the roof, potentially. So it's a totally different world of operating. And like you said, Mark, a lot of it's the same in thinking, but much of it has changed. 

JOE: Absolutely. I used to tell people, you park your car, and wouldn't it be nice if the car was left running all day long so you could just pull off whenever you need it? But you're wasting your energy if you leave your car on, and that costs you money. That's more analogous to cloud computing than the former. 

MARK: Yeah, the cloud just sped things up and the ability and the speed of being able to not only incur significant cost, but also the related innovation benefits that come with that are all really, really new, and I think some companies are still going to find themselves adapting and trying to figure out what that means for them. 

STEPHANIE: So I'm curious, can you talk a little bit about the FinOps principles and how you advise your clients, generally speaking? 

JOE: Sure. So community members, we advise them-- the way I approach it is follow the FinOps cycle. And it's very easy. It's three steps. Inform, optimize, operate. 

So being informed, there's whole capabilities in order to be informed. What is your labeling strategy? How are you going to be able to attribute what the spend is, and what is it supporting? And a lot of folks leverage that to put in a chargeback or a showback model so that you can apply financial accountability that way, saying this team launched these resources, and it supports the solution, so this is the exact amount of expense that gets attributed to that. 

Then there's the optimized phase. This is making sure you have the right data and observability ingestion that you can match with your expense data, the cost data from all the resources. And so then the simple thing finance folks love to do is just match up what's the utilization on the resource? Compare it to the expense. 

If it's 75% underutilized, that's 75% expense you could probably reduce. But that's not always the case. And that's where it's really important you move on to that step three and operate, and you're collaborating with the engineers to understand, what is the solution? Why is it architected that way? And why does it operate that way? 

Does the business want extreme efficiency and cost for this solution, or do they want speed of delivery, high availability, reliability metrics with it? You don't want to be penny wise and pound foolish and create business risk just because something has some inefficient compute. So we have a whole number of capabilities that we collect community best practices, user stories. 

What are the pain points? People share pain points. Everyone loves reading other people's pain. And then also, sharing what are the steps that people took? How did they approach solving that problem? 

What works for one person doesn't always work for another because of context of business. What works for Netflix isn't going to work for a life insurance company. And it all depends, but having those resources available in a step-by-step model, it enables people to do their jobs. 

MARK: And I think that's the key part of it right there is it enables people to do their jobs because it seems like a lot of the attention being paid to things like efficiencies, those aren't necessarily productive conversations a lot of the time. You want things to be good. You want to pay for the things that you need. You don't want to pay for things that you don't need. And ultimately, everyone's happier if everything's running smoothly. 

I think it's a pretty broad strokes statement. But that, in reality, it feels like is a really big goal for having these best practices is helping people understand how they can get there and the steps they need to take. 

JOE: Right. And not everyone is an expert right out of the gate. I wasn't. I burned things down. That's how I learned back in the day. It's like, let me try this. Oh. You don't want to do this. 

So and you share that, and there are a lot of companies, they've been doing this a very long time. Some are born in the cloud, and they're able to just embrace a lot of different policies and a lot architectures and a lot of services that folks who are going through migrations are not going to be able to adopt right away. It's going to be years before they get there. 

So there's maturity models. Some folks, they're low maturity or they get the high maturity. And you may be an experienced company with low maturity processes, and that could be just fine because you only want to put in as much process that is valuable to you. You don't want to prove to those annoying engineers that are complaining about your labeling strategy that you are bureaucratic. You want just the right amount of policy to be able to solve the problems that you need to solve. 

STEPHANIE: Yeah, that's a good point, and it lends itself to the idea of crawl, walk, and run. And I'm curious about how proactive a company at a certain point in their migration journey-- or maybe they are cloud-native. How proactive can a company be during their journey to restrict the amount of spending or apply labeling or utilize whatever cloud systems they have in place versus being very reactionary in the beginning to collect enough data to understand their utilization? 

JOE: Stephanie, thank you so much for asking this question. This is my favorite question. I would ask any company who is wondering when they should invest in FinOps, pretend it's your own money. My wife listens to my call sometimes, and after I'm done, she's like, why are you teaching people life skills? 

It's like, look. You might not have a FinOps team, and you might not be purposely acknowledging FinOps. That does not mean you are not doing FinOps. It's just simply about implementing policies so that you can be financially accountable. And if you're ignoring that, you're just simply doing a bad job at it. 

I was able to start at Nationwide on day one with the cloud. So we were able to say, this is how it's going to work. We were able to put in those FinOps practices, those best practices at the beginning. And they have a great and mature process for them. And it works for them. 

And they have transparency in their cloud spend. They're able to make real-time decisions the entire time. I've talked with companies that are a little bit late on the game because they're like, oh, yeah. We thought everyone would just be financially accountable by default. 

That's like assuming everyone can engineer by default. It's a learned skill. And they have to go back, and there's a lot of retroactive work that you have to do. Applying labels and other attribution in retrospect is hard, if impossible to do, in some cases. 

If you can get yourself organized as early as possible, you will be so much faster and further ahead. You will have avoided so much unnecessary expense. And you will just be speeding ahead so that you can iterate and continue to grow as opposed to be spending a lot of time digging out of where you're at. 

STEPHANIE: Yeah, it's like the similar idea to technical debt, except in this case, it's like both tech and FinOps debt because I can imagine that if you try to apply labels that work really well for FinOps, they might be combative against what already exists in the engineering standards and the labels they're already using. 

JOE: Right. And that's where you need to work together to make sure that there's some sort of way to translate engineering policies and finance policies into what the business is showing. How is it structured like a business? So that you can go up and down and understand each level of hey, this is what the business does. These are the solutions that support it. These are the technologies underneath that solution, and these are the financial impacts of those things. 

It's really hard. It's not simple to do, unfortunately. It sounds like it would be really easy in practice. It's not. 

MARK: Well, I guess it makes sense then that we have an entire community around best practices for doing exactly that. 

JOE: It's great. 

MARK: There's a slow pitch, Joe, if you want it. 

JOE: Hold on, hold on. Let me tee it up. Yeah, and that's what's fantastic. We have thousands of practitioners along the globe, across the globe, because it's not flat. I don't know about your audience. Sorry. Made myself laugh. 

So we have thousands of practitioners across the globe that are sharing best practices and really interesting things. I was talking to folks in Brazil. They have to deal with currency exchange rates, which is something as, you know, I live in the United States. I pay in dollars, I have dollars. Not something I ever had to consider before. 

So then you learn what other countries and other practitioners are going through. Where are they having success? Where have you had success that you can trade information on? We have monthly summits where we have practitioner speakers, and we have partners. Google is one of our partners, one of our premier partners. 

And it's a great space where vendors can share their wares and thoughts and philosophies, and practitioners can support each other with community, training, best practices, and careerbuilding because FinOps is officially a career. People are doing multiple FinOps jobs. There are FinOps paths. I've had two bosses tell me that they thought the FinOps gig was going to be temporary, and I outlasted both of them. 

MARK: You bring up a great point in that this is-- not only is it already complicated, it's getting more complicated as time goes on. And the currency rate exchange is such a great example of one that a lot of people don't think about. But if you're a global business, you're going to have to figure out how to compare your costs across regions, across currencies, across time because all of those things are fluctuating. And then another huge variable is multicloud. That introduces so many exponential variables into the equation of, how do I calculate my spend? 

JOE: Right. And as I mentioned earlier, FinOps practitioners are like walking Rosetta Stones. If you have multicloud, not only are you trying to translate between finance and engineering, you're trying to translate between clouds because Amazon, Microsoft, and Google, you all didn't work together on your cloud platform. 

STEPHANIE: What? Did not? 

JOE: I know, it's kind of crazy maybe in retrospect. I don't know. But it's great. Each cloud has a different purpose and different services. However, there is a translation that needs to occur to be able to have a cohesive message for a business. So it's tricky. 

STEPHANIE: To say the least. 

JOE: To say the least. And the best way to do it is with a community that you can ask questions to, and they can answer based off their actual real-life experiences. 

STEPHANIE: Yeah, because as you said, there are so many permutations on how the industry you're a part of as well as your team structure as well as your resource hierarchy in the cloud as well as the actual personas that exist in your company as well as your leadership team. So all of these combinations affect how you operate across clouds and across teams and how you're going to manage your business overall. 

JOE: Absolutely. 

STEPHANIE: So we hear that you have an upcoming conference, FinOps X. 

JOE: We do. 

STEPHANIE: You want to talk a little bit about that? 

JOE: FinOps X coming June 20 through 21st. FinOps X in Austin, Texas. That's our first dedicated FinOps conference, and I am incredibly excited about it because, like I was talking about earlier about finding your tribe, we're going to sell out likely before this podcast is released, but hey, try. Try getting a ticket. Maybe we release some more tickets. I don't know. 

But imagine, if you are a FinOps practitioner, you're interested in FinOps, and you do not have a local tribe, imagine being around 400 people who do the exact same thing you do. We'll be able to have those conversations with you. Two days chock full of presentations, lightning talks, and chalk talk rooms where people are just working through things together. And it's all on FinOps topics. It's pretty exciting. 

I mean, as a foundation, we went to the UK back in March, and we had a meetup there. Around 150 people showed up. And I was just taken aback. I was like, I've never been in a conference that was dedicated to this topic. And everyone in it was related to this topic. 

Usually, even in team meetings, you get here's the 15 minutes on FinOps, and everyone starts surfing their phone. This is your people. So it's really exciting. I can't wait to be there and eat barbecue, which I might be a little-- don't tell my boss. I might be more excited about the barbecue. 

MARK: FinOps, barbecue. It's together. Two great tastes that taste great together. 

JOE: If you put FinOps and barbecue together-- 

STEPHANIE: That's going to be a new practice coming up. 

JOE: I may never leave. 

STEPHANIE: To your previous boss, though, having a FinOps X conference almost sold out, there's no better stamp of longevity and excitement about this space. 

JOE: There isn't. We didn't know how this would be received coming out of COVID and all that, but JR has put together a great show. If anyone has seen JR Storment present, he does not do boring. He is a showman, and this is not going to be a cookie cutter conference. None of us want to sit through that. So it's something we would want to sit through, and we're really excited. We're excited for it. 

MARK: And I think there's obviously going to be a ton of great content coming in out of FinOps X. But one of the interesting things is, like you said, this is a conference for FinOps practitioners and folks who are really in the industry and in this specific job, almost. But there's so much more to this job that actually influences everybody, like we were talking about earlier, from engineers to financial folks to really everybody working in a company that uses the cloud. 

There are lots of bits of pieces that are going to make your job easier. So I was wondering if you could talk a bit more about some of the-- I know that FinOps Foundation offers specific training. But also, any of the resources and other recommendations that you have for people who just want to learn more about the topic because they're going to be working with FinOps people. 

JOE: Absolutely. Let me-- Mark, Stephanie, I too have a podcast, and it's about FinOps, and it's called "FinOps Pod," where we go over-- we try to release twice a month because it's just me and my laptop. And your all setup is very impressive. But it's just me and my laptop, and we talk to FinOps practitioners who are sharing their stories, sharing their perspectives. We just had a really technical for FinOps episode on attributions. How do you label your resources and attribute it to the right solution? 

We've had episodes on careerbuilding and starting your FinOps career because people are now graduating college and getting jobs in FinOps, which a lot of us started in FinOps because someone needed to pay that bill. And so that's kind of mindblowing. We've done, how do you build FinOps culture in your company and education? And we do. 

We have two different levels of certification that we offer through the FinOps Foundation, the FinOps Certified Practitioner, which is a great, hey, I am new, I want to learn the baseline best practices when it comes to committed use discounts to resource utilization to who are the different personas, and how do you optimize? And all those different domains, capabilities, and FinOps cycle that we were talking about earlier. 

And then for those who have experience as a FinOps practitioner and in FinOps, we have the FinOps Professional Level Certification, which is a whole thing. It just released this January '22. And you go through. There's a cohort of folks. There are some live classes. There are some self-paced training classes. And basically, it's like a project you work through, and it is so real-life experience. I was getting flashbacks going through the beta course of it. 

Say you just established your FinOps practice at your company, but now your company's just acquired another company, and they have a completely different cloud, and how do you translate those FinOps practices across that? It's really in-depth and great training. We get a lot of great feedback from the folks who've gone through it. 

STEPHANIE: That is awesome. Well, as an introduction to FinOps and the FinOps Foundation, you have made this anything but cookie cutter yourself, Joe, so thank you so much for hopping on our podcast today. 

JOE: My pleasure. Thanks for having me. 

MARK: Joe, I do have one actual last question for you, which is, if you could add anything to the world that isn't committed use discounts for Cloud SQL because we already have those, what would you add that would make your life and other FinOps practitioners' lives easier? 

JOE: That's a sick burn. Wow. We have a very similar question on our podcast? How interesting. 

MARK: Hmmm. 

JOE: Hmmm. 

MARK: Where could I have gotten it? 

JOE: I always like to say, when I led my own FinOps team-- and you get pushback on, do we really need FinOps-- I would say, try paying this invoice. I want you to pay this invoice. It's really hard to pay invoices in the cloud. How are you going to check-- one, you got to check if it's right. You just assume vendors are going to send you everything right. 

They're humans. They make mistakes too. And then you've got to work. You got to make sure your purchase order is set up, so you're working with your procurement team. If you're going to send expenses to somebody, you better know what that is. So it's just a whole lot of effort. 

Anything to make invoicing of the cloud easier so it's more touch one button as opposed to here's an invoice you've received. Time to do research. And by the way, here's not just one invoice, here's 20. Here's your g-suite bill on top of that. 

Things like that. And uh-oh, someone in Kansas City hasn't paid their Gmail account. Things like that. It gets complicated. Anything that makes invoice payment, which should-- the other FinOps. And anything that makes the other FinOps easier in our FinOps is good. 

MARK: That's a good answer. That also speaks of the core principles of, how do we make this process easier for people? How does everybody get on the same page? And yeah, this stuff gets real complicated real fast for those who maybe thankfully haven't had the joys of trying to figure these problems out. 

JOE: Absolutely. 

MARK: But like Stephanie said, thank you so much for coming on and sharing all this wonderful not only information, but also resources for folks to check out. 

JOE: My pleasure. 

MARK: Once again, thank you so much to Joe. He is such a fun, fun person to work with. I absolutely loved this episode. And I was really happy to, like I said before, get a chance to really dive into FinOps and help share some of that information because the FinOps Foundation is pretty new. I think it's probably just about two years old, give or take, and they're doing some exciting things. That FinOps X conference is going to be a really-- I wish I could make it to that one. Unfortunately, I can't. 

But it's going to be a really cool event, and it's going to be really nice to see all those people coming together and sharing their stories because I think, as Joe mentioned in the interview, there's kind of a loneliness to FinOps in the sense of working in a company, and it's usually one person or a very small team that has to work with everybody, but is stuck doing their own thing. So anyway, I got a lot out of this conversation. It a ton of fun. 

STEPHANIE: Yeah, me too. As I said in the beginning, I didn't know too much about FinOps, but I do now, and I've learned that there are a lot of domains involved in even figuring out how to handle FinOps at your particular organization. I mean, there's understanding not only your cloud usage and costs, but there's performance tracking, there's cloud rate optimizations, how you can optimize your cloud usage and align with different parts of your organization. So as he said, it's a complicated problem, but they're doing some great work to align different teams that have similar situations and share knowledge across the industry. 

MARK: Yeah. I love the best practices they really bring to the table because a lot of this is new ground to be covered. This is a problem that's been worked on for a while, but the cloud does make everything a lot faster and a lot more complicated. And so I've always been really happy to work on content that surrounds Google Cloud billing and how to understand and track and analyze your costs. And that's great for Google Cloud. 

But a lot of times, you get to multicloud companies where everything gets really, really complicated, and then you have to, again, work with your different engineering and finance and other folks who are all working together, and they all want the same thing, but it's really hard to get there. So I love to see a foundation that's really practicing the idea of sharing information, getting out certificates and jobs that are based on those certificates to help people go into companies and help them also find their own FinOps solutions. 

STEPHANIE: Yeah, even another signal to showcase that this is an area to stay is that Google Cloud is investing in this area with our own FinOps team, and we just recently released a whitepaper as well as a few other articles around our principles for FinOps. So we're going to include those links in the show notes as well. And stay tuned for more content about FinOps from us too. 

MARK: Yeah. It's always a ton of fun to work on that, and I know people-- they need that content, and it's going to become more and more relevant as the cloud just grows and grows. 

STEPHANIE: Absolutely. Yeah, once again, everyone check out the FinOps X conference and more content from the FinOps Foundation, and thanks again to Joe Daly for joining us and to everyone else, and we'll see you all next week. 

MARK: Bye, everybody. Have a good time. It's OK. It's OK. It's all good. Just keep waving forever. 

[MUSIC PLAYING]