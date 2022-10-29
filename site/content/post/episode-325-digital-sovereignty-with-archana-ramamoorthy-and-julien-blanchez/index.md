+++
audioDuration = "00:36:03"
audioFile = "Google.Cloud.Platform.Podcast.Episode.325.mp3"
audioSize = 51913196
categories = ["Security", "Privacy", "Data Management"]
date = "2022-10-26"
description = "This week, Max Saltonstall and Chloe Condon welcome guests Archana Ramamoorthy and Julien Blanchez to talk about digital sovereignty and what goes into a technical strategy for dealing with this complicated facet of web projects."
draft = false
episodeNumber = 325
hosts = ["Max Saltonstall", "Chloe Condon"]
title = "Digital Sovereignty with Archana Ramamoorthy and Julien Blanchez"
image="/post/episode-325-digital-sovereignty-with-archana-ramamoorthy-and-julien-blanchez/images/hero/hero-EP-325.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/ye2z1f/episode_325_digital_sovereignty_with_archana/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week, [Max Saltonstall](https://twitter.com/maxsaltonstall) and [Chloe Condon](https://twitter.com/ChloeCondon) welcome guests Archana Ramamoorthy and [Julien Blanchez](https://twitter.com/julienblanchez) to talk about digital sovereignty and what goes into a technical strategy for dealing with this complicated facet of web projects.

Our guests start the show with a thorough explanation of digital sovereignty, explaining that it typically involves a state or regulatory agency exerting control over data and technology. As more and more data is taken into the cloud, countries are understandably concerned about a loss of control over this data, and nations are enacting laws and regulations to help manage security of data in the cloud. Standardization has been a human issue for a long time, from trains to international travel and more, Archana reminds us, and this challenge is now moving to the management of cloud data out in the world. As sovereign nations implement their own standards, cloud providers must adapt to help developers create projects that follow these laws. 

Julien talks about the discussions around digital sovereignty in Europe, especially as it affects data security. Lawmakers, cloud providers, and companies have been working together to think through effective laws and strategies for digital security around the world. Googlers across the globe are working locally to make sure Google's suite of products are compatible with government regulations and the needs of developers. Archana and Julien talk about the three important action segments Google employs to make sure tools allow for control over who has access to data when and how, and we hear the journey Google has trekked from the very beginning to now as the company has worked for strong security and versatile data management. Local partnerships are a big part of the advancements made in the sovereignty space, Julien tells us, increasing trust with developers in the area and leveraging local knowledge.

With offerings like Cloud Key Management, Google provides unique options for developers to control and secure data. To keep things easy, especially in the case of hybrid solutions, this portfolio of sovereignty products uses the same APIs, streamlined onboarding setups, and familiar interfaces Google product users are accustomed to. 
 
##### Archana Ramamoorthy

Archana is the Director of Cloud Security Product Management. She has spent a lot of her career building security products for enterprise organizations. 

##### Julien Blanchez

[Julien](https://twitter.com/julienblanchez) looks after the coordination of Google's local digital sovereignty partnerships and how to position them in the market, after many years helping regulators and highly regulated customers in EMEA on their Google Cloud adoption journey worldwide.

##### Cool things of the week

* Google Cloud Podcasts [site](https://cloud.google.com/podcasts)
     * Cloud Security Podcast [podcast](https://cloud.google.com/podcasts/cloud-security)
     * Google Cloud SRE Podcast [podcast](https://cloud.google.com/podcasts/cloud-sre)
* Developer Community Keynote: The thing about burnout [video](https://youtu.be/FeDks5BJCQQ)
 
##### Interview

* Google Cloud Next '22: Meet digital sovereignty requirements [site](https://cloud.withgoogle.com/next/catalog?session=SEC102#secure)
* Announcing Sovereign Controls for Google Workspace [blog](https://cloud.google.com/blog/products/workspace/announcing-sovereign-controls-for-google-workspace)
* Cloud Key Management [site](https://cloud.google.com/security-key-management)
* Confidential Computing [site](https://cloud.google.com/confidential-computing)

##### What's something cool you're working on?

Max is working on expanding Google's podcast platform, giving it some more visibility. He's also working on Halloween and LARP costumes and teaching new board games.

Chloe is working on her Halloween costume, too, and working on Google Cloud Reader.

{{< transcript "[MUSIC PLAYING] CHLOE: Hi. And welcome to episode number 325 of the weekly Google Cloud Platform Podcast. I'm Chloe Condon. And I'm here with my colleague Max Saltonstall. Hello, Max." >}}

MAX: Hey, Chloe. Good to be here. 

CHLOE: I am very excited for this episode. We learned about something that I have a really difficult time spelling, digital sovereignty. 

MAX: What is it? Why does it matter? And how the heck do I spell it? 

CHLOE: It's one of those words like together where I have to be like, to get her. Sovereignty. 

MAX: Yeah. 

CHLOE: I learned a lot this episode. I knew a little bit about digital sovereignty but there's really truly no one size fits all solution so talking to our experts on this episode was very enlightening. 

MAX: Yeah. I'd heard about data residency requirements and stuff because that's come up in the past but this made me realize that there's a whole lot more to it and that different countries or states have to have the capability to have some control of their digital data, know where it is, know why it's in a specific location, or be able to understand who can and can't see it. 

CHLOE: And it can be super overwhelming, because how do you know what you not have or do have, or how do you get that information? And I really, really enjoyed this deep discussion because I think up until this point when I thought about digital sovereignty, I really thought about GDPR or maybe compliant issues with [? chords, ?] but it really goes beyond that. 

Well, before we get into our interview, let's talk about our cool things of the week. 

[MUSIC PLAYING] 

MAX: My cool thing of the week is that we have added a couple new podcasts to the Cloud Podcast page. If you go to cloud.google.com/podcast, you can also, in addition to this podcast, "Google Cloud Reader," and the "Kubernetes Podcast," you can check out the "Cloud Security Podcast" and hear new stories about security across the cloud as well as this week's had a really cool interview with one of the folks at Google who is on the ground responding to Operation Aurora, one of the biggest security incidents in our history back in 2009. 

I thought it was a fascinating interview. You can also go check out the "SRE" podcast and learn about how Google approaches reliability, how reliability engineers keep our production services up and running all the time, how we look at DevOps, because it's not a word that we use but it more or less is synonymous with "SRE," and a little bit about how those teams do incident response and post-mortems, which I thought was really fascinating. 

CHLOE: I love to get a peek behind the curtain. I love to see how we respond when things don't go the way that we think they should go. 

MAX: Yeah. 

CHLOE: Let's see. Cool thing of the week for me would be I was catching up on some of the Next talks. And I'm a big mental health advocate. I'm all about keeping things with your brain healthy. 

And my good friend Ashley Willis did a talk about burnout, which is one of the keynotes. And I really enjoyed all of it. And she made little animations of herself, and her family, and like her soul leaving her body during burnout. So it's a visual talk as well. I highly recommend checking it out. It was a highlight of Next for me. 

MAX: It's such a great video and a really relevant topic I think I was pleasantly surprised that the developer keynote was not about this new API or this new integration. It's like, no, let's talk about are we able to keep doing our job sustainably or what do we do to get there. 

CHLOE: Yeah. And I think some of the best talks are when you have those moments where you go, oh, it's not just me. And I think that talk really made it OK for me to feel like, oh yeah, it is OK to take a little nap, and to have a little snack, and make sure that I'm setting boundaries, and talking to my manager about taking on too many things. So everyone check out that talk. I think it should be a mandatory talk for everyone from Next. 

MAX: For sure. And now here's our interview with Archana and Julian about digital sovereignty. 

CHLOE: So I'm so excited to have you all on the podcast today. I would love to hear a little bit about who you are and what you do. 

ARCHANA: Thanks, Chloe. I'm Archana Ramamoorthy. And I lead up the compliance and sovereignty product management organization for cloud security. And I have a long past building security products for enterprise organizations to support global digital transformation. And it's great to be here. 

JULIEN: Right. And I'm Julian, Julian Blanchez. As my accent betrays, I'm from across the ocean. So I'm based out of Brussels. And I've been with Google for more than 10 years now as a security and compliance specialist. And I'm now the solution lead for digital sovereignty [INAUDIBLE] so my role is about keeping in touch with the different sovereignty partnerships that we are working on in Europe and keeping them in sync. 

MAX: Cool. Thank you. I'm pretty sure we all know digital and how to define that. Sovereignty though, that one's a little fuzzier to me. When I read about it in the dictionary, it's just power or authority. But what is digital sovereignty in this context and why does it matter? 

ARCHANA: You know, Max, that's a very good question. And it actually depends on who you ask. There's actually no consensus definition. But typically, we define it as the ability of a state or an entity to regulate or exert control over data and technology that's operating within their jurisdiction. 

So this is all a lot of words. A simpler way to put it is it's the rightful concern by non-US technology consumers to not be overly dependent on foreign providers, US, subject to different legal regimes. And as more and more critical workloads move to the cloud, it's becoming a very, very important topic. 

We're seeing policymakers, business leaders, technology leaders have a vested interest in defining what sovereign policies need to be defined for their countries as they're worried about this data actually migrating from on prem solutions to the cloud where they have this feeling of losing control a little bit. We're predicting that, in the next few years, about 30% of workloads might actually expect some sort of sovereign guarantees with cloud providers. 

It's not new in any way. I feel like when technologies arise in times of mistrust, it often materializes in different ways and situations. An example is when people were laying out railroads, there was obviously the gauging issues that came up. Different countries have different gauges. And that led to problems with respect to standardization. We all know about the issues when we travel internationally. 

We kind of take our own little plug point adapters. So as countries think about digital sovereignty, one of the things that we worry about is the fact that solutions might differ. And sometimes it might be difficult as we think about how data within the cloud infrastructure is going to now operate in this fuzzy world. So let's just not try to make mistakes again. 

MAX: And just to clarify for me, this is less about compatibility, because the cloud works wherever you are in the world, but more about the legal either needs or wants of these other sovereign states, these other nations or cities who don't know exactly what to expect from a company like Google that's beholden to US law. Is that right? 

ARCHANA: Yeah. And there's this need for having individuality as they're defining these policies. 

CHLOE: So I've noticed there's a lot happening in Europe. And I say this as a dual citizen of the UK. I saw a meme yesterday actually about changing to USB-C on devices. And I thought, yes, I can get rid of all these micro USB cords that I have. But Europe really seems to be leading the way for pushing digital sovereignty specifically. What's going on with that? 

JULIEN: We see it as a global phenomenon at the moment. Right. It's really happening all over the world in all regions. But indeed, in Europe, there are specific discussions ongoing. The first discussion revolves around security and privacy of the data and the whole data protection worry or concern. 

And it's a very public and very necessary discussion. And the good thing is that we see we are making good progress collaboratively on this. Both technology providers, regulators, and lawmakers are progressing in the thought process. Most recently though, we have perceived in Europe but is probably also existent elsewhere is the traction around the economic angle, so the fact that some parts of the world really are missing important pieces of the technology stack of their own. 

And they are becoming highly dependent on other parts of the world. And surely, in these days, it is a concern and triggers worries of lock in or economic imbalances. So I think I like the way Archana was thinking about it. It's not necessarily new either. 

If you think about it in Europe specifically, we had the same questions about nuclear energy in the '60s or commercial airliners in the '70s. We were able to solve this collaboratively. I'm actually quite optimistic. And we're very confident that on both sides these kinds of solutions can be found again to correct these imbalances. 

There is a third narrative though, a third discussion, which is quite challenging but unavoidable these days. Any technology decision maker today needs to factor in the highly disruptive geopolitical event that could happen. And these could prevent some services, including computer services or cloud services, to be delivered in some regions. So that concern is very understandable but it is not easy to solve. However, it's a problem that we must factor in into our vision, into our roadmaps, because this is something that we'll need to address to fix the trust issues there is at the root of this. 

MAX: That sounds like some very big topics to worry about. When we think about folks listening in at home, m on their bike, or on their commute, what is the reason that someone needs to really focus on this problem, care about this, and take some action today? 

JULIEN: Every day, we see technical decision makers consider less secure, less scalable, less innovative, and even less sustainable technology than the world class or world scale technology that is available at their fingertips. So we need to fix this. Right. It's really sad to see this happen just because the technology is there, the security is there, but because of a lack of trust we are seeing this decision being made. So we believe it's really important both as providers but also as customers that we bridge the trust gap and we make this world class technology accessible to all. 

ARCHANA: And we're also seeing regulators becoming more specific about compliance expectations. And if we have to distill this down to what this matters or why this matters for you and me, ultimately, it's our data we're talking about. It's our data that's going into the cloud. It's the data of people who are running their everyday lives that's going into the cloud, their personal information, the most critical data that they care about every day. And these regulations are being written as policies. 

So we as companies like cloud providers, SaaS providers, almost all of us are trying to adapt our offers and match and engage in making sure that the products that we're building are compatible with the regulations that are coming up. And people should care because customers should be aware of this evolution and what's actually happening within each of their countries with respect to how their digital data and their assets are being managed everyday. 

CHLOE: And with Google Cloud being such a big player in that space, how do they react to this growing expectation with so much change in policy updates and trying to keep up to date? 

ARCHANA: I'll just start by saying we take this very seriously. We constantly work with our counterparts in different parts of the world to actually understand these changing regulations because it's happening everywhere. It's not in one part of the world. Europe is leading the charge. We're seeing this in different parts of the world. And so it's important for us to first keep up to date and truly understand what's going on in different parts of the world in order to be able to meet those expectations with the products and solutions that we actually deliver. 

There's no silver bullet for this. There are thousands of engineers across the organization that are working to make sure that our products are compatible with what the industry actually wants, what people actually want. And we want to make sure that it's not just one solution that's solving this problem. It never can be the case, given that these requirements are going to be very varied. 

So we're looking at a portfolio of options that cater to these different requirements that we see in different parts of the world. So one way we're thinking about this overall is making sure that we gain the confidence and trust of all of the people that we actually work with and deliver to them the solutions that will truly match the expectations or needs that they see within their countries. 

JULIEN: We have broken this down into three distinct segments of action. We believe it's important indeed to cater to the data protection concern, really answer these questions. So there is a whole set of efforts that needs to happen on what we call the data sovereignty side, so provide the control over the location and the access to the customer data. 

So that is the first one. Then there is what we call the operational sovereignty, which is the capability to offer the visibility and the control over the providers on all the operations undertaken by the trusted partners or the partners themselves. We believe this is really going to be critical that we find the way to transfer or delegate part of the operations to local partners to really create that trust. And then finally, we have this bold goal or bold challenge to deliver some sort of sustainability or autonomy, and we call this software sovereignty, through which we want to provide the autonomy to run workloads with less reliance on software providers. 

ARCHANA: And we're just cutting the clutter here. Right. We started with digital sovereignty. That's a very vague, high level problem. Now we're actually getting into the details and specifics to say, look, we want to provide mechanisms through which we protect your data. We want to make sure that you're comfortable with how your data is being operated, who operates on that data. 

And lastly, we understand that there are situations where you might want mechanisms through which you can disconnect those operations from us as a software provider so let's build the right solutions in order to make that happen. And when we look at the solution portfolio, it maps to these three areas that we just talked about. We have sovereign controls, which is built on top of the GCP platform and that actually provides capabilities and functionality on top of our core GCP platform in order to provide data sovereignty and some level of operational control. 

We have supervised cloud, which is our second offering. And this offering actually provides that disconnected or isolated operation of an infrastructure stack which is fully managed and operated by a partner. And lastly, there's hosted cloud, which also helped manage these disconnected operations that we talked about that might be required for some highly sensitive workloads. 

MAX: That sounds awesome. And it sounds like there's a lot of work over the years that's been going into this solution. So how did we get to where we are now knowing that this is not the first time this has come up for governments around the world? 

ARCHANA: Yeah. We actually started on this very early on. And we started with Europe, as Julian mentioned. We partnered very closely with government officials in Europe, with policymakers, to truly understand the local environment, the fears, the concerns, and using some of our core technologies and the foundations of what Google is built on, which is privacy and security, and figured out mechanisms through which we can start building on top of those core fundamental platform capabilities in order to deliver what the organizations around the world are actually looking for. 

And we were able to use some of our learnings working with large regulated customers and also our industry knowledge in working with the US government, US public sector customers, our financial sector customers, health care customers that are mostly regulated customers that we've worked with in the past. So all of these experiences culminated in delivering cloud in Europe's terms. And we're now expanding that more broadly to think about how we tackle this in other parts of the world. 

JULIEN: Yeah. I think it's worth underlining actually that really this partnering attitude is really if not the most or at least a very interesting angle to this effort. So the depth of the partnership in which we engage with these local partners is really impressive. 

Being a long time Googler, I would not have thought of this in the early days. I think this is really a transformation literally for Google. And maybe a bit provocatively, I like to think of it now as ultimately the trust and the transparency that we create by working side by side between Google engineers, and French engineers, and German engineers, and Spanish or Italian engineers. Working side by side together is ultimately creating this trust beyond the technology that we are seeking to build together. This trust is just being created by the collaboration. And that is actually quite beautiful to watch or to be part of. 

CHLOE: And why is this such a tough problem for developers? I imagine it's difficult to keep up with everyone's different rules and regulations. 

ARCHANA: Yeah. There's that problem of keeping up with rules and regulations. But if we go back to what we're all ultimately trying to solve-- developers, Google, everybody else, the policy makers, the government-- the goal is to be able to bring more workloads to the cloud because that established norm now that cloud is the way to go. And then that's going to help with digital transformation in several countries. But we want to do it in a thoughtful way. And we want to do it in a way where we all feel comfortable about the outcome we're trying to achieve. 

And the way I think about this is there's always been this compliance wave. Right. We've seen this in the financial sector. We see this in health care. We see this with government workloads because that was considered the most strategic workloads that carried a lot of information that was important for a given country. And compliance was a way to have a checkbox feel of saying, OK, the system you use satisfied the set of criteria required to be able to host those set of workloads. 

Then there is the emerging trend of cybersecurity incidents that we are seeing around the world, whether it's nation state actors, cyber criminals acting on financial data, national critical infrastructure data. And that continues to be a trend. 

Now adding on top of those too, we see a third wave, which is sovereignty. It's starting out to be fuzzy. It's not well-defined. It's not going to be a checkbox. But nevertheless, it's the conversation that's rooted in trust, to Julian's point. It's rooted in trust and transparency. And it's going to become fundamental to more workloads moving into the cloud, especially when dealing with foreign cloud providers. 

And that's something that's going to cause a lot of I wouldn't say concern but it means it's a tough problem for developers because developers now not only need to keep up with the regulations. They also need to figure out how, in their everyday job, they're looking at these regulations and then translating them into technical requirements that then go into building these systems that host this digital data. 

MAX: And developers in my experience love fuzzy and changing requirements as they're trying to make software. That's usually the thing they ask for most. 

ARCHANA: Yeah. The more ambiguous the problem, the better it is. 

JULIEN: For some of us that are so old that they can remember the first wave of the internet, the innovation was supposed to come from these large platforms. And the name Google was triggering some ideas about what would be the cool thing coming in. But this has changed now. Innovation is really expected to be local. And the innovation comes from developers all around the world that might or might not use the tools that we provide. 

We see now the platforms as really the enablers for this innovation that needs to happen locally. And it's such a waste if this technology that we still believe could still be very useful to them is disregarded or not used because of trust issues. And the question is real. Why would they trust a foreign supplier? How can we fix that? 

The way we're engaging into this, as Archana was saying, is that first we want to make it simple for them. Sovereignty does not necessarily mean simplicity so we want to obfuscate the complexity of that problem, typical Google attitude I would say. We don't deny the complexity but we try to obfuscate the complexity for our user. And also we bring in the local partners. We can't fix the trust issues just by ourselves. So we really need to find the right partners in the local countries, create this collaborative, huge project, and then deliver these services together. Just to paraphrase [? Urs, ?] who once said, to be truly global, we must be local. There is no shortcut. 

ARCHANA: Yeah. Ultimately, our solutions need to be an extension of something familiar for developers, whether it's the Google Cloud environment that they've known for a long period of time. When we're developing something for sovereignty, it can't be a separate thing that need to learn. So the goal is that it doesn't matter the number of solutions we come up with. All those solutions need to be familiar. They need to be easy to set up, easy to configure. And as Julian said, we want to abstract as much of the complexity as possible and make it simple for people to operate in this highly complex environment. 

MAX: This sounds like a pretty important set of projects and new offerings. We can't possibly be the only people who recognize that this is a big deal. How is the solution or set of solutions that Google is making different from what other people are doing to try to answer these sovereignty questions? 

JULIEN: What is certain is that, for everybody, privacy and security is central. And also at Google, privacy and security is central to everything we do at Google. We can't repeat that enough. And for sure, on the other hand, the place where the data resides and where the services are being executed, the residency, it is absolutely a necessary requirement or cornerstone for sovereignty. 

And we are all, all cloud providers are realizing this and also engaging into this development. But what is also important and probably even more important than residency is the access control to the data and to the services. So a strong cryptographic mechanism that truly gives the customer or the developers the control over who accesses data through the control of the encryption keys, kept completely out of reach of the cloud provider. 

This is quite unique coming from Google. And this really enables us to develop a solution that is much more effective than simply guaranteeing the residency, I would say. So at Google, we really handle this trust through the cryptographic keys that we delegate. We delegate the handing of these keys to partners. And once you get a chance to dive into the technical documentation, and you understand how external key management works, and to what level of depth you can go into the control of the services, you will certainly understand very quickly how GCP's approach is quite unique. 

ARCHANA: And I'll just add that too this is a very key fundamental differentiator for us because a lot of the conversations sometimes revolve around residency when indeed it's actually the control to who can access the data that is the most critical problem that countries should think about. 

So this factor that Julian mentioned is highly critical when we basically say, look, you own the access to the keys. You control the access to the keys. Either you as a customer can do this or you can delegate this to a partner that you trust in your local environment to do this on your behalf. It actually changes the equation in the game for them substantially. And added on top of that, we have confidential compute. And that provides encryption in transit. 

So the confidential VMs basically allow customers to encrypt their most sensitive data in the cloud while it's being processed. So that's, again, an added advantage on top of customers being able to keep the access to their keys. And in scenarios where this might not be enough, as I said before, we have a portfolio of solutions versus having one solution that solves the problem. Right. 

For example, working with France and Germany, we're building supervised cloud. And this is actually aligning with one of the most stringent requirements in Europe with France with [INAUDIBLE] cloud. And again, we have the hosted cloud options for the requirements that might stem up with respect to disconnected workloads. So there's very highly sensitive national critical infrastructure workloads that come in that might need to be disconnected from Google and needs to operate on its own. We actually have solutions that provide that kind of setup as well. 

MAX: I really like how you pointed out that the residence of the data is actually much less important than the control. It doesn't matter if I have some storage or some computation happening on my land. If I can't get to it or start it and stop it the way I want to, it's pretty useless for it to be just sitting over here in my backyard. 

ARCHANA: Yeah. Absolutely. 

JULIEN: So Max, to be clear, you still need to deliver residency because the laws require it. And this is the state in which the lawmakers are at at the moment. But we expect the debate to evolve very quickly and the lawmakers and regulators to understand that this is a necessary condition but not a sufficient condition for sovereignty. 

MAX: Just a starting point. 

JULIEN: Yeah. Exactly. You need more. A good illustration is what happened in any country that faces an invasion. And we have a very recent example. The first laws that need to be passed in emergency are laws that allow for the data to be exported out of the country because you cannot keep your sovereign data into your country under invasion. Even the recent developments are clarifying this, that residency is necessary but not sufficient. 

I wanted to add one thing to what Archana said about the portfolio of options that we are delivering. And indeed, developers and customers, small and large, will have several options to choose from depending on the level of sovereignty that they want to comply with or that they want to offer to their own customers. 

But what is important to understand is that we make sure that, throughout the portfolio, developers will have access to the same APIs, and familiar onboarding setups, and usual interfaces to keep it easy for the developers. So we really expect architectures to become sort of hybrid. You will build architectures composed of non-sovereign services. Others will be sovereign. Others will be extremely isolated. 

And we will see a lot of value brought by a new type of architects who will create these hybrid solutions. So in that sense, we also think that our proximity to the open source world will be a differentiator for the Google option. Developers have many options. But because of our historic proximity to the open source world, it will be easier to choose from a broader set of options as an architect. 

CHLOE: It sounds like a lot of moving pieces, a lot of things to keep up with. So I'm thankful that we're not relying on developers exclusively to just keep track of all of these things, that we have tools to take care of this. Is there anything else that you'd like to mention before we wrap up? 

ARCHANA: Chloe, I think you said it right. This is a moving topic. This is a fuzzy topic. Things change all the time. And when there is so much change, the one thing we see from our side is people gravitate towards the Ferraris. They gravitate towards having the most stringent option available for them without actually thinking about what their core requirements are. 

So this is one of the areas where I would say the one thing if people want to take away is to truly understand the requirements and truly understand what they're building for, because otherwise they'll end up working with highly complex solutions and asking for a Ferrari when they don't need a Ferrari. So I would truly say that's one area that developers and everybody should focus on is figuring out the data taxonomy of what kind of data they're handling, and what kind of data they're looking at, and the kind of setup that's required to protect that data. 

And second, I would say there are solutions that are available today. Go explore those solutions. Google has solutions available in the market that are available with our local partners in these different countries that we talked about. People should start making use of those, testing those, figuring out how they actually meet the requirements that they're trying to deal with on a daily basis. And that actually sort of helps with the digital transformation journey that we see a lot of developers grappling with and working with on a day to day basis. 

JULIEN: I would say let's not perpetuate the reason why we have these economic imbalances. Right. One of the reasons many of these countries or regions are left without technical components is because they delayed too long the decision to move. So now that there is a strong will, both from regulators and technology providers to really solve for this, let's not delay action and engage into that technology. 

That is not to say that we underestimate the long term goal. And it's very clear that we understand that this is an important demand from the whole of humanity wherever they reside. Right. They all want more control. That's absolutely understandable. We are engaging into this direction. 

And we are ready to face the strangest regulation and make sure that the best technology becomes available to all. We want to support the whole world with this world class technology. There shouldn't be differentiation between the countries. So it is really our goal to make sure that we deliver this technology on the local terms. 

MAX: Thank you. That's awesome. And I hope that you also have some resources maybe for listeners who want to dig into this a little bit more or we can put some links in the show notes so that folks can follow up if they want to find out what they can learn next or what they can do next to tackle some of these. 

ARCHANA: Thanks, Chloe and Max, for having us. 

JULIEN: Thank you very much. 

MAX: I was really glad to hear during that conversation that we have tools to solve these problems today. This is something that we can help people with but also there's no single magic bullet. There's no easy solution. It's a really tricky challenge. And it's going to be contextual and really take a lot of thought in terms of what are your goals, what are your needs, what are your regulations. 

CHLOE: Yeah. There's a lot of what ifs with development. And I think it makes me sleep a lot easier at night knowing that there are experts in this field who are looking out for these things and can make a template and notify me and other people. There's a lot to keep track of as a developer. And I'm so happy there's people looking out for us in these areas. 

MAX: I also thought it was fascinating to hear how solving this problem really requires the Google teams to partner with local companies in all these different jurisdictions in other countries or other continents so that the solution to a digital sovereignty challenge is coming from inside that country because sometimes that's required by the laws that they've passed. 

CHLOE: There's one thing we didn't learn though, Max, which is how to spell sovereignty so I'm going to have to work on that. 

MAX: I'm pretty sure it's in the show notes, Chloe. I believe in you. 

CHLOE: Oh, it's in the title. 

MAX: It's still hard. I'm going to have to say it's still hard. Chrysanthemum. So what cool stuff have you been working on recently? 

CHLOE: Ooh. Well, I've been living my audible narrator fantasy over on "Google Cloud Reader." And I've really been enjoying it. If folks aren't familiar, "Google Cloud Reader's" one of our podcasts that we basically just read stories from the blog. And for me who does not have the time to sit down and read each one, it gives me an excuse to listen to them. And so yeah. You can hear my voice over on "Google Cloud Reader." 

And then Halloween's coming up. 

MAX: Woohoo. 

CHLOE: My favorite holiday, the spookiest time of year. I also love to craft so every year I craft a Halloween costume for my boyfriend. His name is Ty, T-Y, so he's been a Beanie Baby in the past with a little Beanie Baby thing. 

But this year, I'm getting a little digital with my crafting. And I'm trying to make a light up headband of the Sims green beacon icon so when he walks around at work, he'll look like a SIM. So yeah. I've been going to Michaels, and Target, and finding all kinds of cool light up LED things, and sticks, and, yeah, crafting it up. What about you? 

MAX: I'm also thinking about Halloween costumes. I've got two kids so sometimes it involves a lot of figuring out if I can get them to actually stick to an idea for more than like a day or two because I'll order some stuff, or I'll find some stuff, or we'll make some stuff, and then like actually, instead of a cat, I'm going to be a Jedi. I'm like, well, can we do like cat Jedi or something just so I cannot have to throw away the cat? 

But I'm also planning to attend an upcoming weekend long LARP. And so I'm trying to figure out if I can define that LARP character in time and then practice my costuming, I can kind of get two for the price of one where I can figure out the costume components I'll use for the weekend and make that my Halloween costume. And that's mostly because I'm lazy. 

CHLOE: I love that. 

MAX: I've also been having a lot of fun teaching people new board games. The local public library near us in New York has a great kids section where you can be noisy because it's kids. And so I've been just recruiting other families from my kids' school. And every Saturday morning, we get together and play some board games. And this weekend I'm also going to play a big old game of Spirit Island, which is probably the most complex and cooperative game that I have and one that I'm very excited to teach. 

CHLOE: Yeah. It's funny. We have a Google board game group here at the SF office. And I got an email about this new game called Fast Food Chain Mogul or something. It's a very elaborate, large game that requires a lot of people. And there's a big email thread about it. I went down a rabbit hole of how intricate this game was. And I'm very impressed. The board game world is thriving. 

MAX: It's pretty awesome. I was chatting with a friend about kickstarting board games and how there's new Kickstarter type websites coming out just for board games or games in general. And there's this proliferation not only of the titles and the projects but of the platforms that they reach their audiences on. 

CHLOE: I think we need a digital sovereignty board game where you have to be compliant to all of the different countries on the map. 

MAX: Chloe. Chloe. 

CHLOE: Maybe a little too close to home. 

MAX: Chloe, I think you need to leave now. 

CHLOE: Bye. This has been my time. 

MAX: Thanks you all for listening. We've kicked Chloe off the podcast. And we'll see you all next week. 

[MUSIC PLAYING] 

Hey, if we've entertained somebody in this room, I think we've done our jobs. 

CHLOE: Yeah. 