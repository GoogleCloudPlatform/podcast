+++
audioDuration = "00:39:12"
audioFile = "Google.Cloud.Platform.Podcast.Episode.226.mp3"
audioSize = 56464670
categories = ["Best Practices", "DevOps"]
date = "2020-07-08"
description = "Mark Mirchandani and Priyanka Vergadia are here this week to talk about some cool things that are going on. Then, Mark brings us an interesting interview all about documentation in development with Technical Writing Manager Riona Macnamara."
draft = false
episodeNumber = 226
hosts = ["Mark Mirchandani", "Priyanka Vergadia"]
title = "Documentation in Developer Practices with Riona Macnamara"
image="/post/episode-226-documentation-in-developer-practices-with-riona-macnamara/images/hero/hero-EP-226.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/hnkqt2/episode_226_documentation_in_developer_practices/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Mark Mirchandani](https://twitter.com/markmirch) and [Priyanka Vergadia](https://twitter.com/pvergadia) are here this week to talk about some cool things that are going on. Then, Mark brings us an interesting interview all about documentation in development with Technical Writing Manager [Riona Macnamara](https://twitter.com/rionam). Riona specializes in technical documentation for DevOps at Google. 

Having written technical documentation for both external and internal audiences, Riona starts the show comparing the two, explaining how the process can be very different. In external writing,  she stresses the importance of engineers and technical writers working together. She details the challenges of documentation in code development culture and offers some solutions. Laying out goals can create better quality documents, while providing a simple documentation process for engineers can help bolster a culture of documenting. She talks about open source projects, stressing that documentation is possibly more necessary because of the diverse contributor base.

We wrap up the interview learning how to get started creating and maintaining useful documentation. Better trumps best with documentation; a lot of decent documentation is better than very few documents no one can find or use!

##### Riona Macnamara

Riona is a 13-year Google veteran, and a documentation manager in Google Cloud. Previously at Google, she drove Google's open source documentation strategy, led the team that developed Google's internal engineering doc platform used by more than 20,000 projects, and supported Google's Webmaster Tools (now Search Console). Before Google, she was a product manager at Amazon, and spent ten years at Microsoft as an editor on Encarta and mapping products, and a technical writer. She is a frequent speaker on documentation, open source, and diversity and inclusion, and is based in New York City.

##### Cool things of the week

* Google Cloud VMware Engine is now generally available [blog](https://cloud.google.com/blog/topics/hybrid-cloud/google-cloud-vmware-engine-is-generally-available)
* I built an AI-powered moderation bot for Discord [video](https://www.youtube.com/watch?v=ABr_HkO0eGk)

##### Interview

* Berlin Buzzwords 2019: Aizhamal Nurmamat Kyzy & Riona MacNamara - From User to Contributor [video](https://www.youtube.com/watch?v=wGy25DYarLY&t=663s)
* Documentation for Good: Knowledge as a tool for equity and inclusion [video](https://www.youtube.com/watch?v=HBEvHvv3YV4&t=1086s)
* SREcon18 Asia/Australia - Do Docs Better: Practical Tips on Delivering Value to your Business [video](https://www.youtube.com/watch?v=17f8elHd6aM&t=149s)
* DevOps Days Galway [videos](https://www.youtube.com/channel/UCs3qTYCBoVQRDwpBPjBNWFQ)
* Write the Docs Portland 2019 [videos](https://www.youtube.com/playlist?list=PLZAeFn6dfHpmuHCu5qsIkmp9H5jFD-xq-)
* Write the Docs Austrailia 2019 [videos](https://www.youtube.com/playlist?list=PLy70RNJ7dYrJPuUTAIOS7vWGw6poKDHtH)
* Technical Writing Courses at Google [site](https://developers.google.com/tech-writing)
* Docs Like Code on Amazon [site](https://www.amazon.com/gp/product/B0784ZJWSR/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i0)

##### Tip of the week

This week, we learn [how to authenticate a REST API](https://www.youtube.com/watch?v=1qG4BabzoXo).
     
##### What's something cool you're working on?

Riona will be the Keynote speaker for [TCWorld India](https://tcworld-india.com/program-2020/program-detail/?tx_news_pi1%5Bnews%5D=99&cHash=0d9bfe570ba25b9ae513189d579f9c32)

Priyanka's been working on new episodes of Cloud Bytes. [App Engine in a Minute](https://www.youtube.com/watch?v=Xuf3J6SKVV0) is now up! She's also working on her series [GCP Comics](https://medium.com/google-cloud/gcpcomics/home).

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 226 of the weekly Google Cloud Platform Podcast. If you are paying attention last week was 225. And this week is one higher at 226. I'm Mark, and I'm joined by Priyanka. Hey, Priyanka, how are you doing?" >}} 

PRIYANKA: I'm good. I'm so excited to be here again-- third time in a row. 

MARK: Always exciting to have you here. And I'm always looking forward to our great conversations, as well as our great guests today. So today we're talking to Riona who's a technical writer. And we got into a great conversation about documentation. She made just a bunch of fantastic points throughout our conversation. But I think one of the most interesting points she made was that documentation is really the responsibility of everybody. 

When you're making a product, you're making an API, it doesn't matter. This is how people learn what you've done. It's really everyone's responsibility to make sure it's successful. But it's nobody's job to do it. In a lot of cases, that can lead to some weird imbalances. And we talk about what that looks like, the quality of documentation, what's important there. It's a really great conversation, so I obviously recommend that you stay tuned. But before we get into that conversation, why don't we go over our cool things of the week? 

[MUSIC PLAYING] 

PRIYANKA: OK, so I have one here around migration. So if you are watching a lot of the stuff that we are doing around just making migrations easier to do in Cloud because a lot of people are thinking about migrating, or if not migrating, just having their workloads in different environments. So if not migrating, it's hybrid or multi-cloud and that type of stuff. So this is around that. 

And I thought it's exciting if you have huge VMware environments and are VMware users, then we have just [INAUDIBLE]. So it's generally available now, a VMware engines service. It's a fully-managed VMware environment, where you can take your VMware environment from on premise and move it into Google Cloud easily. So it gives you those abilities so you don't have to restructure and can just lift and move it into Google Cloud. So I thought that's exciting. 

MARK: It makes the integration point between your VMware environment and your Google Cloud Services really easy as well. So it's a really cool way to combine, like you said, migration without having to overhaul everything. 

PRIYANKA: Yeah, because the last thing you want is, you have your company moving towards Cloud, or a portion of it moving towards Cloud, and then, you have to overhaul or change a lot of it in order to do that. And it takes a year to do it, and all of that. So I think tools like these are really something that helps expedite that process. So Mark, what is your cool thing of the week? 

MARK: You know our friend Dale, who was on here a couple of episodes ago has a another making with machine-learning video, where she actually makes a toxicity bot. And I thought this is really interesting. Working with a lot of different online communities, toxicity is a big problem. And so she just shows using Discord and teaming that up with some APIs to get a read on what the statement was, and if it's a negative statement, and the problems around there. 

And I think it's a really interesting and cool, very short case study. I think the idea is to build on it and say, well, if I can do this, how can I maybe look at influencing my moderators or making their job a lot easier by giving them tools like this? I think it's a really, really great idea. And I think, as the internet continues to grow and these communities tend to grow, you certainly see a lot more different kinds of people. So having tools like this to make moderation a little bit easier, it's such a great idea. And I think this is a cool, concrete starting place. 

PRIYANKA: Yeah, I think that every single website or anything you do today has some sort of a common feature in there. So if you have something where users are contributing to in any way, shape, or form, then a moderation tool like that would be super amazing to look at. 

MARK: Yeah, so make sure to watch that video. I think it's great. And I think Dale will be putting out more content too. So that's awesome to see. 

PRIYANKA: Yeah. 

MARK: Well, with our cool things out of the way, why don't we go ahead and dive right into our conversation with Riona? 

[MUSIC PLAYING] 

Riona, I want to thank you so much for joining me today. But I think the question we always start with-- can you tell us a little bit more about who you are and what you do? 

RIONA: Sure. I'm Riona Macnamara. I'm a technical writing manager on Google's Cloud team. I manage the teams that provide documentation for Serverless, CICD, all the DevOps areas' monitoring. I have been at Google for about 13 years. When I joined, I was working on SEO products and Google Webmaster Tools. 

After a while, I ended up working in Internal Engineering Documentation. It is a totally different set of constraints and requirements than writing for external audiences. In some ways, it's easier. In some ways, it's a lot harder. And I did that for about four years. And then, I came to Cloud, which is where I am now. 

MARK: You said it was very different to write from internal audiences and external audiences. What was the biggest difference? 

RIONA: There's a lot of differences really. Some of it is around what we think about as perceived quality. Like generally, external docs need to be fairly polished. You want them to look good. They actually are often a user's first encounter with the product. And so it's important that they are polished, that they're well done. Internal docs are different. 

At Google, for example, we have thousands and thousands of engineers documenting thousands and thousands of interconnected ever-changing pieces of software. It never changes. Most engineering teams do not have technical writers on internal documentation. Very, very few do. So the reality is that most engineers have to or should be documenting their code. 

And the role of a technical writer often working in internal documentation is not about writing docs, or creation docs, or typing the words. It's about enabling other people to do that. It's about setting them up with templates and best practices about making it easy, maybe providing editing or consulting services. But if you have one technical writer supporting 500 engineers, you can't tell them type faster, write more. It's not going to scale. So the challenges are different there. 

MARK: Absolutely. And today, we're talking about documentation. So I definitely want to dive more into that. And of course, you pretty much led up the project that created Google's current way of doing documentation. So we'll definitely dive maybe a little into what that looked like. 

RIONA: Sure. 

MARK: But you brought up a great point about having a technical writer work with a team of engineers and making sure that-- sometimes, a technical writer can create the documentation. But a lot of times, it just doesn't scale. 

RIONA: Right. 

MARK: It's not possible. The demand for documentation is so high. And something you said was that you wanted the engineers to work on documentation. But I think many engineers will probably agree, documentations can be a very challenging thing to work on. It can be very scary to work on. And everybody wants more of it. But nobody necessarily wants to write it as much. Why is that the case? Why is the ecosystem around documentation such a difficult thing for a lot of people to really own and organize? 

RIONA: I believe there are a few reasons around this. One is that there's definitely mismatched expectations. When an engineer needs information, she wants it now. At the time when there's an outage, or something's breaking, she needs that information now. And if the documentation doesn't exist, that's the problem. That same engineer, when she's looking to submit her code and ship her feature or something, the documentation is the last thing to create. It's the last thing on her mind and usually, the first thing to go. 

So it feels like sometimes, documentation is everybody's problem. But it's nobody's job. And I can't fault the engineers for that. That's something I want to make really clear-- is when we were researching the documentation challenges at Google before we developed tools and things to address it, one of the things that was really clear is when we talked to as many engineers as we could, that none of them thought that documentation was unimportant. None of them thought it was dumb. Everyone felt they should be doing it. They all felt bad about not doing it. 

But when it comes to the crunch, almost always, engineers are working in an environment where they are rewarded for shipping code. And documentation is not built into the process. And actually, when documentation is not budgeted for, when it's not scheduled for-- and maybe when it's not recognized in performance review or promo process, it's not part of your job description-- I say for engineers to drop it on the floor is entirely rational behavior. 

MARK: And it's surprising to hear that. But it does seem very obvious maybe in retrospect once you understand that fact. But I don't think there are a lot of cases-- and hopefully, I'm wrong-- where the upper management side of a company is talking about how docs are their priority. They're always looking at either shipping features, or hitting deadlines, or whatever it is. And I don't see very often that documentation comes up on that list. But just like you said, it's the number one go-to resource for a developer. So it does seem very disjointed that decision-making would be happening. And you said, you noticed some of that maybe even in Google. 

RIONA: Oh, yes. 

MARK: Can you speak more about the studies that you did? 

RIONA: That's a really great point. There's some very interesting studies-- Stack Overflow study in 2018, the GitHub study. They all point to documentation being the biggest productivity blocker that there is. And the truth is that documentation is critical. It is a core part of engineering work. It is critical for product awareness and adoption. It is critical for development velocity, for code quality, and the reliability of services running in production. So why doesn't everybody see this or fund it? Because we have this culture of valuing code. We value it by what you ship. This is what you're rated on. 

And sometimes, this can seem very bleak for the future of documentation. But I actually think we can draw really strong inspiration and from the world of software testing. 10 years ago, 12 years ago, software testing was kind of a mess. It was done ad hoc or not at all. And it resulted in huge costs and outages. But you fast-forward to today, and software testing is a highly-professionalized discipline. And it is completely integrated into engineering culture and engineering workflow. It is, I hope, pretty much impossible for people to push untested code into production. 

I think that is a model in many ways that we can aspire to. Bad documentation is bad. It is going to hamper the adoption of your product. It is going to reduce the quality of your code. It is going to cause problems in production. And it's going to make outages harder to recover from. We need to move to a culture, where it is integrated both into software tooling and also into software culture-- into an area where leadership is convinced that this is something that is a core part of the product. It is core engineering work, and it is worthy of funding recognition and support. It is. 

MARK: And that's the difficult part it sounds like Because with testing maybe-- and you mentioned the shift over the past 10 years or so-- it became probably very obvious what impact testing had on code quality because you can look at these general ideas of what the problems that came up without testing. And you're like, oh, well, look testing fixes them. But it's much harder to measure the impact that documentation has on the experience of code. And I think that comes down to developer experience is really hard to measure. 

RIONA: That's completely right. And we hear a lot, the docs are bad. We hear all of this all the time. But I think before we can move to making the docs better, we actually need to have some kind of understanding of what quality looks like. I think this is somewhere where, again, we can draw inspiration from the discipline software testing. And there's a concept in software testing of-- we have structural quality, and we have functional quality. 

And structural quality, when we think about documentation, it often is around what do the docs look like? Do they follow a style guide? Is the spelling correct? Do the links work? Is it well organized? All of this. These are all great things to have. But I think also here be dragons. First of all, when we emphasize this kind of quality, sometimes, technical writers, I think, can make it seem almost intimidating for engineers to go and write documentation. And I think that's one of the challenges. You're writing for an internal audience. If you can explain it to your co-worker sitting beside you, you can write documentation. 

Engineering documentation, especially internal engineering documentation, doesn't have to be perfect. It doesn't even have to be great. It has to be good enough. And it's figuring out what good enough is. And the other dragging around structural quality is that generally, it's super easy to measure. It's like, it's spelled right, or it's not. The links work, or they don't. It's like page views-- easy to measure, doesn't tell you an awful lot. 

But the other type of quality, which is much more important, is functional quality. You can just say, does this document do what it was supposed to do? And most documentation should have a goal. It's to lower the time to Hello World. It is maybe to lower the cost to support. Maybe it's to raise awareness. Those things, once you can think about what the purpose of the document is, then it becomes easier to measure it. You can say, we had this problem with our Foo. People were not able to enable the Foo API. We wrote this documentation. A number of calls went down. 

Structural quality, it's easy to get measurements. But the data is really uncompelling to leadership. I wrote five documents that followed the style guide and were all completely correctly spelled. It was like, so what? But I wrote this document that lowered the cost to support, that diverted things from the funnel. After reading our documentation, onboarding went up. 

All of these things provide a really much more compelling picture of the value that documentation gives. And if we want to bring value to our business, if we want to not just create docs but actually demonstrate that those docs create value, functional quality needs to be our goal. 

You can have great structural quality, beautiful documents, and low functional quality. And your overall doc are poor. You can have OK structural quality, and great functional quality, and your docs are great. That's what matters. To deliver value and to report on value, functional quality should be our goal. And luckily, the data that we can get is far more compelling. It actually does paint a picture of the value of documentation. 

MARK: And so structural quality, it sounds like, is a great bar to meet because you want it to be readable. You want it to be understandable. You want it to be well organized. And those are super important. But the key is really the functional aspect of it. So when an engineer is maybe not thinking about documentation immediately-- because it's, again, not something that you put in the forefront of I have all these things to code. I have these features that I need to do. I need to do this kind of integration. 

There's so many things that need to happen there. I do think it's very funny, you mentioned earlier about-- yeah, of course, they're going to depend on documentation to get their work done. So you'd think it would be more important to get documentation. But when everyone around them maybe isn't pushing for them to do the documentation, isn't rewarding them for it, it can be a really big challenge. 

I really liked what you said about finding the functional aspect of, why am I writing this documentation? So for engineers who may be working in a place that documentation isn't at that forefront, what are some good ways for them to think about the functional aspect-- finding those metrics-- and then hopefully using that to instigate some change in their org? 

RIONA: What is the problem your organization has faced? What is the problem your engineering team is facing most? And what is costing you time away from your coding? Because documentation time is time away from coding. Is it that particular tasks are failing? Is it that people are spending too much time supporting internal customers? Is it that people don't know that your product exists or what it's for? Or that your team keeps fielding questions that have been answered elsewhere? Find the problem. Take some kind of baseline so you can estimate how much time you're spending. And write doc. Put it out there. 

One of the things is as well, documentation-- better trumps best is what we used to say. Have a lightweight review process. Don't require docs to be perfect. Just get them out there. And once you start doing that, you can start creating and gathering metrics that you can report on the success of this. Report to your teammates. Cherish with your teammates. I spend less time answering stupid questions because I wrote this document. I'm a more effective engineer because I wrote this document. 

I think a couple of things that are really important also-- it's not been the case that people fund these things from the top down. We have found in our case that creating a culture of documentation, it involves changes to tooling. But it also involves changes to culture. And we couldn't force things on teams. When we started working with engineering teams, we made a decision we weren't going to try and sell them a documentation solution. We were just going to make it easy for them to do it and let them come to us. Let them like it. And then, tell their friends about it. 

And part of this was creating tooling that made it simpler for them to create documentation. But also, it was by showing them that it was easy and valuable, and they now spent less time supporting people because they had docs, we turned them into evangelists. 

And once you have people on your team who are evangelists, this is where you can start effecting change. You can start using your power. You can have a culture in your team that you won't accept a change unless somebody can say, it doesn't need documentation, but explicitly say that. Or it doesn't need documentation, and here it is. Push back, and do that. Require documentation for changes. 

Again, just like documentation doesn't have to be perfect, it also doesn't have to be huge. Most changes, the small fix of a couple of lines, might only require a change to a command line, a prompt, or something. Even significant things are likely to need more than a page. The burden needn't be that huge. Part of it is around just creating a culture, demonstrating the value of it. And at first, maybe just within your pod, within the small group of people that you're working with-- but then with management, and then with leadership. And this is where collecting data about quality is so compelling and is so important. 

MARK: So I think one of the key aspects there-- and you mentioned this a few times-- but it's really around some documentation is better than none documentation. Maybe getting perfect documentation isn't really worth the time, as compared to getting some documentation. 

RIONA: Absolutely. And first of all, we need to acknowledge that we're asking people to do documentation who often don't want to. And we want to make sure that documentation is a part of your job. It is a part of the engineering workflow. But it is not the main one. What we want to do is lower the bar to creating this document, so you can do it and get back to coding. So some documentation is better than no documentation. Some OK documentation is better than a lot of ambitious documentation that is not available to anyone because it's still sitting on your machine. 

And it is not about having a low standard. It's not about having a low bar and saying any old crap will do. It's actually about setting an appropriate standard. And remember, if we're talking about internal engineering documentation, these are things that are in constant flux. It's going to be different a week from now, two weeks from now. 

Time spent polishing this till it's perfect is time you are actually taking away from working on your code or from writing another good enough document about something else. I do think if you want to polish words and make things perfect, you should be writing haiku, but not internal engineering documentation. 

MARK: Well, and if you can do both, that's great too. I'm sure. 

RIONA: Both would be ideal. 

MARK: But you don't want to wait to try and figure out how to formulate your documentation into the haiku before you release it because otherwise, people need that documentation. 

RIONA: Yeah. 

MARK: It's so funny that you mentioned these are engineers who necessarily sometimes don't want to write the documentation. We talked earlier about why the structure may not be there to reward them for working on it. But at the same time, documentation is a key part of how any code gets built. 

When you're writing anything-- I don't know what this function does. I don't know how to write this-- documentation is such an important way to establish that. It's kind of surprising to hear that engineers wouldn't want to write documentation because my thought is that any engineer who writes something, they want to have people have a good experience on using it. 

RIONA: Right. And they want people to use their code. So we talked a little bit about some of the cultural reasons why people didn't want to do it. It's not recognized. It's not rewarded. The other reason, I think-- and this comes down to the tooling area-- is that often, it's just really difficult to do it. We all aspire when we're doing deep work to get into the state of flow. And what we discovered certainly at Google was we have the Google 3, the world's largest code base. It's an incredible thing of beauty. All our code is available in here. And it's all in one place. 

The documentation for that code could be absolutely anywhere. It could be in a document. It could be on a wiki. It could be on a Google site. It could on a Post-it on somebody's desk. It could be an email. And first of all, that's bad because it just makes it impossible for somebody to find. There's no predictable location. 

The other reason it's bad is that even if engineers created documentation for that, if somebody had to leave their work environment, and then, OK, should I put it in a site? Should I put it in a wiki? Should I put it there? Then, they would go and write the documentation. Even when they did a good job writing documentation, what you find is the rule of the inevitable. Code changes. Ducks decay. You can create documentation, but the real thing is, are you going to maintain it? It takes half an hour to get back into flow once you break it. 

If you make a change in your code, and it requires a two- or three-line update to your documentation, but that requires you to leave your IDE, try and figure out where that documentation lives, then try and figure out maybe the HTML formatting on the site, and try and do that, and make this change-- and it's too much. I believe engineers will create documentation when you remove every possible piece of friction that you can from doing it. And I think that's really important. 

MARK: And that goes back to what you were saying about building that culture around it as well. Getting a measurable impact is obviously a key way to sell your upper stakeholders on giving you that time, and effort, and energy, and that investment. I think it's part of it too. But then, just getting the culture of all the engineers you're working with, especially in a collaborative basis-- no one wants to have to tell each person individually, this is how my code works. This is how my code works. That's not scalable. And many engineers would probably find it very annoying. 

RIONA: Right. 

MARK: So having that built in your culture seems like a really valuable way to be able to obviously make your code more useful. 

RIONA: Having it built into the culture is really great. Having it built into the tooling-- before we built this product, I'd been working in internal engineering for a couple of years. And we had tried several approaches to fix this problem. We spent a long time researching or designing a process. It was very top down. It would have to be adopted straight out by all organizations. That didn't work because it was too expensive or it would require a lot of engineering to do. 

We also tried an effort where we would send a writer to work with an engineering team for a little while. They would build out a site. And it would look lovely. And the hope was that it would serve as an example for this team. And it would start seeding this culture. But it never did. The writer would go away, and the code would change. And the docs would decay. We had tried to change the culture, and it didn't work because the tooling wasn't there to support it. 

We'd tried to change the tooling, and it didn't work because it would require a massive top-down culture change. To fix the challenges around documentation and to integrate it into engineering culture, it requires changes to both culture and tooling. Neither alone is sufficient. 

MARK: Absolutely. And so when people are looking at documentation inside their organization, hopefully those are some really helpful things to think about, especially for giving documentation its time. One of the other things I really wanted to make sure we had time to talk about was the impact documentation has on people adopting your code. From an internal audience, again, maybe you don't need to worry so much about the structural side. You just need people to use your code. 

And it can be a little sloppy or a little messy because it's internal. You have some facilities to fix that. But it's a whole different scenario when you're looking at open-source code for instance. Documentation for open-source code, I have to imagine, is very, very valuable to people trying to learn that code because it's pretty much the only resource they have. But now, you've got a whole separate set of rules for the people who are developing the open-source code. And some of that tooling, some of that culture, isn't easy. Can you talk a little bit more about what that looks like? 

RIONA: Absolutely. When you talk about open-source projects, open-source projects need good documentation for all the reasons that proprietary one does to support development, velocity, product awareness, code quality. But they generally need it even more because very few people working in open source have a colleague sitting next to them that they can just go and ask for questions. Of course, none of us have colleagues sitting next to us right now. So it's another case for documentation. 

But in addition, we also need to provide documentation that clearly outlines how the community and the code actually operate because we want as many contributors as possible. It is this diversity of the contributor base that gives open source its strength. But to do that, you need to enable as many people to contribute as possible. And to make that happen, we really need clear documentation that outlines the code in its architecture, but also the norms and the processes of your community. 

There was an interesting survey done by GitHub that particularly called out that documentation is especially appreciated by underrepresented folks who sometimes have had more difficult experiences on the internet, more negative interactions on the internet. Quite often, women have not always had the best time contributing to open source. 

And in fact, the number of women contributing to open source is far, far smaller in doing that. So code is obviously at the core of open source. But the value of non-code contributions, like product management, like community management, and like documentation, that's what gives open source its value and its strength and supports it. 

MARK: That's a fascinating point too because it is a very different world. And like you said, the accessibility sometimes isn't there. And that looks very different when you're looking at the cubicles inside an office building versus just global usage of a product. 

And so with that being said, so many of the things you talk about, I think, have been very actionable for teams to think about how they can maybe bring documentation a little bit more to the forefront for what they're working on. But I'd love to hear if you have any tips or concrete suggestions of both how to do exactly that-- make your documentation a bigger part of your work-- but also just, in general, of how to make it successful. 

RIONA: Yup. 

MARK: Like how do you make sure it sticks? You gave those great points earlier about what didn't work. 

RIONA: If you want to drive change around this, I would say, there are four main things that we need to look at. And the first one is focus on functional requirements and functional quality. What do you need your docs to do? And focus on meeting that, identifying the needs. The second one is around reducing the cultural and tooling barriers that exist creating and maintaining documentation. 

So we talked a lot about cultural changes, and reporting, and metrics. But I think when we're talking about tooling, the most important thing we can do is to reduce the friction as possible. In an ideal world, this is what we do at Google. And I know other companies do something similar. Documentation should live alongside its associated code in source control. In Google, our files are in simple marked down right next to the code that they support. This makes it really, really easy for developers to write the service handles, all the rendering. It means you can actually read it in the browser. 

But the most important thing about it is that engineers can write, and create, and maintain their docs using the exact same tool used to write and maintain their code. So it means that instead of having to context switch, to lose that flow, to go off to your wiki or something, you can actually just-- in your IDE, without losing flow-- go up and create your doc updates in the same change that you're creating your code change. That kind of thing stocks as code approach. It might not be practical for everybody. 

Not everybody has [INAUDIBLE]. It just may not be practical for anybody. But one thing you can do if it is not possible is to really establish one canonical place for your documentation. It's predictable for people to find. It's either always in a set of Google Docs or wiki with predictable naming structure. But people know where to look for it-- both the people who need to consume the docs and the engineers who need to maintain it. It reduces that cognitive load. And it reduces the work. And it removes some of the friction. Ideally, docs should be part of code. But if they can't, there should be one area. 

Another area where you can get a lot of traction and remove a lot of friction is to see if it's possible to automate any of your content generation. For example, error message documentation-- in Google, we automatically create pages for alerts for our SRE playbooks. And that reduces a lot of the churn. If automation is possible, that's really great. Better trumps best. A small set of good documents is better. 

Another area, which is kind of counterintuitive, but I think is really important is to remember that like code, every line of doc should serve a purpose. If you have a small set of fresh and accurate docs, that's a lot better than a large assembly of documentation and various states of disrepair. I would actually plead with you-- stale docs are a form of tech debt. One of the very best things you can do for your docs is to delete them when they're gone. You have source control. You can always get them back. 

But if they are no longer serving a purpose, the best possible case for stale documentation is that it obscures good information in your search results. That's the best case. The worst case is that it's misleading. It's wrong. It's contradictory. It's expensive. So I think that's another. Delete your docs. Recognize and reward docs because it's core engineering work. And recognize your coworkers when they do it. Shout it out. Focus on functional quality and gather data that can demonstrate. We talked about, can you show that it'll lower the cost of support? 

Can you show that you decreased the time for a new engineer to go on call because you created a playbook around that? This kind of data can be very compelling. And it is great to share it with other developers on your team, with managers, at promo, and at perf, and with partner teams-- who all may be interested in your learning. And then, once you have that data, you can use it to advocate for documentation. And that's what you can use to build a case that documentation is core engineering work, that it's worthy of support, funding, and recognition, and reward because it is. 

MARK: Because it is. Exactly. And I think, to summarize everything, I think an engineer will tell you how important documentation is. 

RIONA: Yeah. 

MARK: Flat out. Every time you want to do something, the documentation is vital to getting that done. Thank you so much for coming on here. That was a super exciting conversation to talk about this. I do want to make sure that we call out to any great references or any links for people to follow up with. And we'll put them in the show notes. 

RIONA: Sure. 

MARK: But I know, at the very least, you've gotten some YouTube videos as well. Or you've given talks. 

RIONA: There are a few of those. There's SRE Con Asia, and SRE Con Europe, and DevOps Days in Galway. And there's a technical writing conference called Write the Docs, where there's a few-- also about open source actually, where documentation as a tool for equity and inclusion in open source, something I'm very passionate about. 

There's a couple of other resources that might be useful as well. Google actually externalized some of the training that we give engineers internally on technical writing. And you can see that at developers.google.com/tech-writing. And there's two training courses on that that are really useful to engineers and have been done externally. There's also a book I would recommend that dives into the idea of docs as code. 

If you treat documentation as part of your code, and it lives alongside your code, the benefits to this approach that go way beyond making your documentation easier to create and maintain. When your docs live beside your code, some very interesting things are made possible. The relationship between a doc and a piece of code becomes obvious. And those relationships can be determined. And they could be mapped. And they can be made available to other services. 

So for example, you can build alerts. Mark changed this code, but he didn't update the docs. Log them a bug to update the docs. A lot becomes possible when the docs live alongside the codes. So that book is "Docs as Code," by Ann Gentle. And super useful. 

MARK: We'll make sure to include links to all these in the show notes for people who are interested in following up. And again, thank you so much for coming on to talk. We are probably just about at a time. So before you wrap things up, is there anything else you want to mention? 

RIONA: Documentation is core engineering work. It is as fundamental to the discipline of software engineering as testing. But you know something? It is not rocket science. If you can explain something to your coworkers, if you can write an email, you can write documentation. And your life will be the better for it. 

MARK: I love it. Well, once again, thank you so much for coming in. And hopefully, we'll get a chance to chat again real soon. 

RIONA: That'd be awesome. Thank you. 

MARK: Like I said, it was such a great conversation. And I think it really helped me understand a little bit more about the world of documentation. There's so much more than just writing a doc and putting it out there. You really have to understand how people are using it. And so I love that conversation. Hopefully, everyone else should enjoy it as well. 

PRIYANKA: Yeah, documentation is always the first place where everybody goes to to learn more about anything. So having Riona on the show and just talking more about it, just enlightening us about the process was definitely great. 

MARK: Well, with that out of the way, and actually speaking of the earlier cool thing about content moderation, we put out a lot of YouTube videos. And we actually get a lot of comments as well. And one of the comments that came in was asking a question that was so good. Brenton Martin decided to make a video on it. So for our question of the week. 

[MUSIC PLAYING] 

It's how do we build authentication into a REST API? I'll just link that to the video because they did such a great job. And they actually stepped through serverless to a box-- really, really great. YouTube show where they do a bunch of different episodes. But on this episode, they walk you through adding authentication. And I remember trying to build something very similar with authentication. And it was hard. I definitely didn't know where to look for resources. And so having a video like this, again, it just goes over the basics. You go to the authentication page. You add a credential. You get that. 

And then, they walk through it. And they show you how it all works. It's such a great resource for it. And I think authentication on top of an API is very, very common case. So it was super exciting to see this video directly created as a response to a question. 

PRIYANKA: Yeah, that is awesome. I'll go check it out. 

MARK: Awesome. Well, before we wrap things up, Priyanka, what cool new series and other things are you working on? 

PRIYANKA: Ooh, there's lots to talk about here. We just put out a video on Cloud Bite series, which is the second episode. It came out on Sunday-- "App Engine In a Minute." We're seeing a lot of love and comments on these videos. So it's very encouraging and exciting to hear all your feedback. Please keep them coming. And the second great thing that is going to launch this week is the second issue of GCP comics. It is all about security, and I know we've been talking a lot about security in the past few episodes of our podcast. So be sure to check it out. It's going to be out sometime this week. 

MARK: Awesome. Yeah, it's always great to see all the different kinds of video or these comics. I think there's so many opportunities for people to learn concepts. And I love the "In a Minute" series because it's such a great way of breaking it down and giving quick overviews, which is very, very common. So absolutely love it. Well, thank you once again for joining me, Priyanka, on another great podcast episode. And for all our listeners, thank you for listening. And we'll see you all next week. 

PRIYANKA: Thank you. Bye. 

[MUSIC PLAYING] 

MARK: On this episode, we'll be interviewing a garbage truck to understand how it uses the Cloud. 

PRIYANKA: This whole process of collecting trash. 

MARK: A problem that many people don't think about nowadays is that they're using interpreted languages. And interpreted languages tend not to have too much of a garbage collection issue. 

[LAUGHTER]