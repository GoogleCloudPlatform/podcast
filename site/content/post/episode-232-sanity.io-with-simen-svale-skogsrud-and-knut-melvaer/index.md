+++
audioDuration = "00:37:53"
audioFile = "Google.Cloud.Platform.Podcast.Episode.232.mp3"
audioSize = 54569627
categories = ["CMS", "Content Management System"]
date = "2020-08-19"
description = "This week on the podcast, Mark and Max Saltonstall talk CMS with Simen Svale Skogsrud and Knut Melvær of Sanity.io."
draft = false
episodeNumber = 232
hosts = ["Mark Mirchandani", "Max Saltonstall"]
title = "Sanity.io with Simen Svale Skogsrud and Knut Melvær"
image="/post/episode-232-sanity.io-with-simen-svale-skogsrud-and-knut-melvaer/images/hero/hero-EP-232.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/icrwb9/episode_232_sanityio_with_simen_svale_skogsrud/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week on the podcast, [Mark](https://twitter.com/markmirch) and [Max Saltonstall](https://twitter.com/maxsaltonstall) talk with [Simen Svale Skogsrud](https://twitter.com/svale) and [Knut Melvær](https://twitter.com/kmelve) of [Sanity.io](https://twitter.com/sanity_io). Sanity.io started as a consulting company but organically morphed into a software company when they realized their content management solutions worked across many industries. By providing a managed system that includes search indexing and data hosting, Sanity.io allows customers to analyze and deliver content all over the world with ease. They also offer an open source kit that facilitates complete customization of the program to each client's particular needs.

Simen explains headless CMS as compared to the conventional systems and how it benefits Sanity.io clients. Data is separate and much more flexible, allowing it to be used in any way on any platform. Knut tells us about the developer experience using Sanity, describing the dashboard of useful APIs and other features that make using the program a breeze. We talk about how real clients have influenced and built on the product and why customer service is so important to Sanity. 

Later in the show, our guests go in-depth about specific features of Sanity, including how the system handles different types of data and data relationships. We get technical, talking about the importance of scaling and how Sanity is accomplishing this with Google Cloud and Kubernetes. Simen and Knut offer our listeners some valuable advice on product launching, time management, and more.

##### Knut Melvær

Knut Melvær is the Head of Developer Relations and Support at Sanity.io.

##### Simen Svale Skogsrud

 Simen Svale Skogsrud is Co-founder and CTO of Sanity.io.

##### Cool things of the week

* The Anywhere School: 50+ Google for Education updates [blog](https://blog.google/outreach-initiatives/education/the-anywhere-school-product-launches/)
* It's Week 6 of Next [site](https://cloud.withgoogle.com/next/sf/sessions#data-management-databases)
* Google Cloud and Spotify Demo at Next [site](https://showcase.withgoogle.com/spotify)
* Bare Metal Solution talk from GG [site](https://cloud.withgoogle.com/next/sf/sessions?session=DBS213#data-management-databases)

##### Interview

* Sanity.io [site](https://www.sanity.io)
* Get Started with Sanity.io [site](https://www.sanity.io/create)
* Get Started with Sanity CLI [site](https://www.sanity.io/docs/getting-started-with-sanity-cli)
* Sanity.io Careers [site](https://www.sanity.io/careers)
* Sanity.io Docs [site](https://www.sanity.io/docs)
* OMA [site](https://oma.eu)
* Bengler [site]( https://bengler.no)
* Kubernetes [site](https://kubernetes.io)

##### Tip of the week

Roger gives us a tip about [Google Cloud's Data Loss Prevention](https://cloud.google.com/dlp). Check out the demo [here](https://cloud.google.com/dlp/demo)!

##### What's something cool you're working on?

Max is blogging about identity and security and access control. Here's his latest post with Jen Person, [Zero Trust for Enterprise : Cooking up some access controls](https://medium.com/@ThatJenPerson/zero-trust-for-enterprise-cooking-up-some-access-controls-cfd05ba54d12).
Mark and Max have been working on turning their popular YouTube Series, [Stack Chat](https://www.youtube.com/watch?v=Bu2uEX2nB9A&list=PLIivdWyY5sqJvwGd0PTzSx1j0cePX0INl), into a new addition to the podcast! Join us next week to hear the first installment!

{{< transcript "[MUSIC PLAYING] MARK: Hey, there, everybody, and welcome to episode 232 of the Weekly Google Cloud Platform podcast. As always, I'm Mark Mirchandani, and I'm here with Max Saltonstall. Hey, Max. How you doing?" >}} 

MAX: I'm really happy to be here with you on the podcast and talk about some of the things we've been working on and some of the big news of the week. 

MARK: Yeah, we've got some really, really cool stuff. But, to kick things off, Max, can you tell us who we're going to be talking to later today? 

MAX: We are going to be talking to Simen and Knut at Sanity.io. Originally, they were consulting for a lot of companies, including some major architecture firms, companies that needed content management solutions that didn't quite fit out-of-the-box CMS software. And so they found themselves building custom solutions for some of these needs and realized they, more or less, kept solving the same problem again and again. 

And so they pivoted to being a software company instead of a consulting company or maybe they started a software company out of their consulting work to make this CMS Sanity.io, which is giving a lot more control and a lot more flexibility and rich feature set to a really broad set of use cases and clients. So it was really fun to talk to them and hear about how they're approaching some of this problem solving. 

MARK: Yeah, we heard the same story about kind of the "consultant goes to products" space when we talked to Lucidworks a few weeks ago. But it's a really fascinating conversation. And we get into some good conversation about how to structure content. 

It's really great, so stay tuned for that. And, after that, we have a great tip from Roger about DLP. But, before we do any of that, why don't we go ahead and talk about our cool things of the week? 

[MUSIC PLAYING] 

MAX: So, as a parent of two school-aged kids, I have been thinking a lot about what is going to be up with school this fall. New York hasn't started yet, but some states in the US have started getting kids either back to physical school or back to online school. And it kind of looks like a mess. 

There's a lot of scrambling, which was why I was really happy to see an announcement from a bunch of the Google education teams on how they're helping make education, especially online education, a lot smoother. Some new features to Google Meet, like having 49 people that you can view at once or having an integrated whiteboard, which I've been having a lot of fun dogfooding, as well as some improvements to classroom, which I know my kids and their teachers are going to benefit from because we were in a very regular ritual in the springtime of just, all right, what are the to-dos in classroom? Let's tick through each of the classes. And so anything that's going to smooth that over is going to be a welcome addition to our routine of online school. And there's a big blog post that goes into a lot more details and a lot more exciting things that they're going to be rolling out in the fall. 

It's really interesting for the education teams, because many teams at Google, they can launch every day, every week, maybe every month when they have new features. The education team, basically, gets one big opportunity a year to launch. And that's July and maybe into August, because once a semester is underway, they really don't want to do any changes to the features that the teachers and the students are relying on. So it's interesting to see how they're managing it now, when all of a sudden, way more people are using their products for online education. And it does look like they're going to roll some stuff out throughout the fall, which I would expect teachers wouldn't adopt until, say, the spring semester starts, because they just don't want to do anything midstream during a semester. 

MARK: Yeah, I mean, there's a lot going on right now. So it's cool to see these new technologies. And it's also, of course, a great ability for us to be able to dogfood them or try them before they get released so that we can give the product teams cool feedback. 

And, of course, it is week 6 of Next. So I want to make sure that we mentioned that. It's all about databases and data management. So, if that's your shtick, there's a whole bunch of cool videos out there. 

There's one really cool demo from Spotify. So we'll put the link out there. I think it's just something you got to put your headphones on and check out because it is pretty cool. 

But there's also a talk from [? GG ?] about Bare Metal Solution. So, if you're interested in that, check out that video. But the reason especially I bring it up is because, next week, we'll be talking to [? GG ?] a little bit more about exactly what Bare Metal Solution is. 

So you've got a lot of ways to learn about it. But it's a pretty cool thing. We'll get into those details later. But, of course, we have our own great content for today. So why don't we go ahead and jump into Sanity.io with Simen and Knut? 

[MUSIC PLAYING] 

Thank you so much for joining us. To get things started, can you tell us a little bit more about yourselves? 

SIMEN: Yes, so I'm Simen. I'm the CTO at Sanity.io, Content Management Platform, that was running for a little over two years. 

KNUT: And I'm Knut. I'm head of Developer Relations [INAUDIBLE] Support. I have been at Sanity for two years as well. 

MARK: And, of course, developer relations is something very close to our hearts because it's a complex role. And there's a lot to go on there. But I'm sure we'll get into that a little bit later. 

Let's talk about Sanity.io. So you said a content management platform. What does that mean? 

SIMEN: There is several ways that we used to explain this. The most common way people approach us is as a headless CMS. It's a content platform where we host your data. We have all the APIs, so the search indexing, all the powerful, nice stuff that gets you going with your content and delivering it all over the world without thinking about all that boring stuff about storing it, and transporting it, formatting it and stuff. 

And then we have an open source kit people use to then build their CMS, their [INAUDIBLE] experience, so they can completely tailor workflows on how you work with complex to the specific organization and how they think. That's kind of the crux of the whole platform. 

MARK: There's a lot there, obviously. And one of the key terms I want to dive into there is headless CMS because, obviously, that's becoming more and more popular these days. But I think it's worth defining. 

So we know CMS is Content Management System. And people probably have experience with those. Wordpress, I think, is a very commonly known one. 

But CMSes have grown a lot in the past 10 years. And, certainly, I'm sure they're constantly changing now. So what is a headless CMS? 

SIMEN: Yeah, so, as you said, that's exactly right. So in the current typical CMS, currently, is an integrated system. You have one system that you use to alter your content but also to deliver your content to give it shape and render it as web pages. That's one integrated system, which is awesome because, now, you have one system which is simple to adapt. 

If you use Wordpress, you can adapt the authoring system. You can also then change how it's presented. And you can change all of these things as one package. It's very neat. I mean was, of course, perfect in the olden days when web was all we did. 

So the problem that's headless systems are trying to solve or, let's say, they are data driven in terms of the fact that we now, very often, need our content in different forms. We need it in our web page. But we very often experience like, we need them in our set-top box or our mobile app, or we just need it on a different website, someone else's website. It's syndicated. 

And then you get into trouble, because your data is shaped to be used for a specific website designed in a specific way. And, usually in the kinds of all systems, when you redesign your website, you also redesign all your content. 

So a headless CMS is a system that only deals with the actual content and then serves that as data over an API. And then you can connect different systems-- for example, a website or an app-- and then render that content and make it usable to your end users. 

KNUT: I want to be the developer's advocate and bring some tension in here because I would propose that the CMSes, they haven't changed that much in the last 10 years, actually. And that's where we come in. I think they're doing something different, actually. 

MAX: What's the core difference with Sanity.io? 

SIMEN: We didn't actually want to make a CMS. Initially, we just wanted to make a solution for one of our customers. We used to be consultants. 

So what we set out to do was we have an incredible architecture agency called the OMA, which is the Rem Koolhaas Agency, which we are great fans of as individuals. They have been making awesome stuff since 1979. If you study architecture, you need to study all of these monumental buildings that they have done. 

And we got the assignment to redo their website. And then we realized that, for them, the website is not very important because their clients are like countries like China and Portugal. They don't browse the web to buy a building. 

So we ask them like, how do you sell buildings? No, that's lobster dinners, and books, custom books. So they were making all these custom books all the time. 

So we realized, OK, let's make a system so you can make your content once. It powers the website, but we can also then generate books. And then we realized there was two people in this company that just their whole job is remembering the history of the company. 

They are, basically, the database that you go to. If you get like some emir asking, like, what have you done with retail, and bridges, and parks? OK, you go to these two people, and they will remember. Then rather make an awesome search, like a super powerful data-driven search, where you can find these things, and those two people can make even more valuable specialized work instead of this generic search work. So we solved this whole solution. We expected this to be off-the-shelf in terms of technologies to drive it. 

And then we realized that CMSes, like Knut said, hadn't changed much since last time we were using them around the-- it had been 15 years, to be fair. We were more like doing bespoke development and not websites, per se. 

So we realized, OK, these systems, even the ones that are headless, are about content, specifically, for one use case. They are not principled in terms of being databases that are good at storing text, images, and data intermingle in the form where data structures are clear and defined. 

The content is easy to render. So we just expect that to be obvious at that point. So that's what we set out to do, initially, just for them. And then we did it again for [INAUDIBLE] in New York. And then we did it again for MIT. 

And then we realized that we should rather be the people who make the system and not the people who use it. And then we inverted the company. This is now Sanity. 

MARK: Many companies start out as consultants. And then they find a problem that their customers constantly have. And then you just build a solution around that. And it totally makes sense to build the market around that solution. 

And we talk a lot about architecture. But that's a very different type of architecture that you all started with. So, of course, like you said, you've created this as a platform that people can use. What does the developer experience look like? 

KNUT: So imagine that you come to this full suite of awesome APIs. So what we give you is a realtime data store that you can just put your JSON documents in. And you can even have references between them that we index. 

So you can query in relationships in your noSQL data store, which is kind of cool. And then we give you this React single-page application that you can configure pretty quickly with simple JavaScript and then customize however you want within the limits of React and the limits we are setting. But we're trying to set those broad limits, I guess. 

That makes it pretty-- well, you should never say effortless in the developer relations scene. But it's kind of effortless to make something pretty quickly because we had done the hard parts and left you some sweet APIs. And that's what we go for. We are making stuff that we would want to use ourselves because we are also constantly using this system ourselves for internal stuff. So yeah. 

SIMEN: Yeah, and also as consultants. It's almost like a moral thing, I feel like. When you sell someone a solution, you want everything common to be easy. And then anything they ask for should be possible. 

You sell them something that has [INAUDIBLE] limits. You don't want to talk about that. As a consultant, you want to say, that's cheap. That's expensive. But it's always possible. 

And that's one of-- our goals with this, was that we want a system where it should almost feel like cheating when you start. But then you shouldn't be punished for that. Many systems [INAUDIBLE]. Let's say you use Squarespace, it's awesome for what it is. If you use it, you are kind of hemmed in by what it's for. If you then need something very specific, you can't do it. That's fine. That's kind of the premise of that service. 

But we would like to be a system that at the different level, for developers, you describe your data model. We generate a user interface. It's actually useful. [INAUDIBLE] editors love it. Then they come with their kind of custom requirements. Let's say, go back to the OMA example. They wanted an autocomplete that was sorted by how often one specific architect was credited that says the most [? credited ?] architect should be on top. 

And mainly because they were usually the ones you wanted. This would be impossible in most systems. But of course, in the olden days, with WordPress, it would be easy because you can get the whole source code. And you can program that. So that's the one thing we wanted. We wanted the benefit of a headless system, meaning it's hosted. 

We have the data for you. We do all of that boring stuff. Or we do at least half of it. And then we give the rest of that work to Google Cloud. And then we give you everything that your client touches or kind of the editors touches. We give you the source code. And you can absolutely, like Knut says, you can actually do anything. Lots of things are super hard. 

But the common things are easy. And we work tirelessly to make everything that's reasonable very, very easy. 

KNUT: When we ask users and developers, what would you use instead if Sanity hasn't been a thing? The first time we ask that, we kind of expected them to say sort of the obvious competitors in headless space and so on. But they actually ended up mostly saying that, well, I would have to build this thing myself. And I'm rather happy that I don't need to. 

That gives also some credibility that this is kind of a different thing, in a way, even though it solved some of the same use cases. 

MAX: What are some of the coolest things you've seen users of Sanity.io build on top of the platform you're providing them? 

KNUT: Pretty cool thing? Powers the official voice assistant for the city of Las Vegas. 

MARK: I had no idea that Las Vegas had a voice assistant. 

KNUT: I think it's even on Google Assistant, actually. So you can ask Google Assistant about stuff that happens in Las Vegas. 

SIMEN: I thought it stayed in Las Vegas. 

KNUT: Or yeah. [LAUGHS] 

MARK: Or in this case, it doesn't. 

KNUT: We have also seen people building systems for microbreweries and stuff like that. So it's pretty versatile. I think also the OMA example is actually pretty cool in terms of the book publishing pipeline and so on. 

SIMEN: Pretty early in our story, we was contacted by this huge [INAUDIBLE] conglomerate, which had a very specific problem that was an incredibly good fit with our kind of design choices because they needed a way to design their menu structures, power [INAUDIBLE], the in-store displays, the printed menus. They have a multimodal publishing system that needs to be just in time. They have special orders tied in with movie marketing or with kind of current events or just reacting to competition. There is chicken sandwich wars, what have you. 

MARK: It's my favorite trilogy. 

SIMEN: The thing that was so inspiring about that was that it turns out when we tried to kind of look into that with them, it's like, everything, when you really, really go into it, it's super hard. The coffee ordering model of these organizations is just so complex. It's like quantum physics. 

The moment I get it, it starts kind of pouring out the other ear. It's like, you want the customers to be able to kind of customize anything, build anything. And then still it always needs to end up with the same SKU. If you add the bacon and then remove the meat, then that's actually a different dish. 

We ended up calling it the burger graph. And you can actually traverse it by customizing your meals. They built using Sanity this system that can kind of validate your combos and menu options as you design them. So the marketers, they go in there and make sure that they create valid orderable items that can be built or [INAUDIBLE] made in the restaurants. And they actually integrate that. 

That's one of the reasons why we think about this is a kind of content platform, not just another CMS, just because they actually then sync data from their resource management system. So they actually know the prices, the availability of raw materials, so anything in that system. 

So they can actually know beforehand that this specific burger can't be made at this specific branch right now because they are low on tomatoes. Seeing them build that in Sanity and then ending up with something that empowered marketing people to do what used to be done by the ERP specialists, it's exactly why we made this. 

MARK: Again, this is kind of going back to the old school perspective of you had text. You were in a website. And it was going to be displayed on a website. And then they wanted a mobile app. And you'd have to display that on a mobile app. And then anyone who's dealt with a WYSIWYG editor probably knows the nightmare that that becomes when you're trying to integrate HTML, like you said, in a format that doesn't make any sense. 

So it's very cool to hear about how this is kind of abstracted. But it's also very confusing, right? I mean, how do you possibly get this much data usable and then actually exportable to, like you said, to books, to menus, to custom systems, to search, to pretty much everything? 

SIMEN: The core of this is, for us, is that we need to think principled about content. What is the actual thing that is the content? And what is the presentation? So for example, in Sanity, there is a system to crop images. But our system says, is this the part I want to preserve? This is the part I want you to avoid. And the rest, you can do whatever you like. 

So then later, if your designer specifies, I want the square crop, Sanity will solve that on behalf of the designer. So you just say your constraints. So the content editor can kind of set their specifications. And then the designers set their specifications. And we solve that kind of intermediary. 

So this is a specific example of some kind of a design principle. Let's say you want to have sidebar with the product. Let's say you are making a magazine about wines. And then sometimes you mention a specific project. We want sidebars with those wines, wanting to show the price and current [INAUDIBLE] data about those wines. 

OK, then make a data type that is kind of a block that actually links to your product database. And actually, the only thing that's in that sidebar is maybe an editorialized title and the actual SKU of that wine. And then later, you generate that sidebar. But then on mobile, of course, it's not a sidebar. 

It's getting inlined. And maybe in your voice assistant, you just omit the whole thing. And then you present the end as options for things you can order. So that's the whole point. Maybe you didn't even know about that voice assistant when you made the content. And one of our goals is you should then be able to reappropriate content without actually kind of revisiting any of the content. Something we have been part of doing many times now, so we can have a proven track record. 

And part of that, as you said, is how we encode text, because one of the pet peeves we had when we tried to not make a CMS was that they had all these kind of specialized models of text. You have your data. Maybe have some data type, some kind of database, like structures, that you could maybe search or kind of SQL somehow process. But the text was suddenly kind of completely divorced from that. It was just Markdown with HTML or something that's completely different. Where often do you want your data inside your text. 

Let's say, for example, the link is terrible. It would be a reference to another document. Or it should be an object describing a product you want to kind of pitch. So one of our goals was the text should be modeled the same way as the rest of the data. The only difference is it's edited as a kind of [INAUDIBLE]. But it's actually an array of objects. 

KNUT: And I think this is also important part of being a platform, because one thing is the APIs and the framework and so on. But we are also making specifications. So what Simen was talking about, now we call that portable text. So it's a specification for how to store which text in a JSON syntax that can be serialized into whatever. 

So it can be serialized into HTML, to Markdown, to Speech Synthesis Markup Language, or in a front-end environment to Native React or Vue components. So it marries very well with the design systems and design components thinking that is in vogue nowadays. So making those recipes and specifications is also important part of this product, I think. 

SIMEN: And so one of the kind of goals here is that we want people to be able to know what each piece of content means in a kind of semantic way, meaning if there is a kind of long-lat somewhere, we should probably know that it's a location of a building. So that's like a part of a schema. You should encode whatever is legal. 

And then, of course, we enforce that nothing surprising is in those documents. So when you then code your front end, you can know these are the seven different kind of markups, and these are eight different objects that can be [INAUDIBLE] in this text. And I cannot be surprised by something else. 

And one of the things that kind of empowered us to do in the first product, which is the OMA sites, we realized that this architecture agency made a book called "Post Occupancy." It was about how it's interesting for architects to revisit what they had built in the past. Usually they kind of just build it, take some glamour shots, and leave. But they were kind of revisiting those buildings and saw how they had developed. A way to embody that value in a website would be to have current images of their buildings at any given time. 

Their buildings are really striking, so we discovered that Instagram was always fresh images, like awesome pictures, maybe not of the building, but like of some beautiful young man in front of this building in the rain, just showing that building even better than their own glamour shots. 

Because we had the locations of all the buildings, we were able to make an automated search that fetched fresh Instagram images from around those buildings every day. And then because Sanity was then customizable, we built this curation tool, which was in the workflow of the PR people. So they would see it every day. 

And I could just rate these images. And they would become an integrated part of the book [INAUDIBLE] also of the actual kind of front page. I think now since the Instagram APIs have been closed, so this is not functioning anymore. But it was a beautiful time. 

MAX: It sounds like you've got a flexible back end to really allow any kind of use of the content that you're storing for a client and this front-end framework. Are you seeing anybody using just one-half of that equation? Or does everybody really consume it as a whole? 

SIMEN: No, we recently was approached by a huge German media conglomerate. They had basically needed that exact kind of way of storing their content. But they didn't care about our editing interface. So they basically just wanted this ready-made content delivery and search [INAUDIBLE] mechanism that they had made. 

And they are planning to move all of their assets into Sanity and not use half of our stuff. This is kind of sad but also kind of beautiful, yeah. 

KNUT: It's interesting when we make this open-source editing environment, because you can't hide APIs. You have to use the same APIs that everyone else can use. So that means that someone else could make a whole separate other editor experience if they wanted to. 

SIMEN: That would be total buy-in. Yeah, yeah, we would love that. Please do that. 

KNUT: Yeah, yeah, please do that in Vue or Svelte or something. 

SIMEN: Yeah, there is absolutely no secret APIs. That's true. We have documented everything that we can think of. And we don't use anything that's a secret. The editing experience, it's real time. Anything you do, it's kind of sent as patches. So we use the Google-developed diff-match-patch algorithm to kind of integrate those changes. 

And then either you can query your data or you can sort the listeners. And they use the same syntax. So you can make a query. And then it's live. And you just get updates. But I think all of those APIs that we use to power our real-time editing experience is also open to anyone to use for whatever they need in their content delivery pipelines. 

MARK: Yeah, and I'm curious. Of course, we've talked a lot about the system you built. This is all built on Google Cloud. So how did you actually build this system? Obviously, it's going to need to scale as more and more users do it. But it also sounds like it's mostly APIs and storage. 

SIMEN: So I think actually, let's say, 80% of our work goes into the open source offering. It's actually JavaScript user interface and stuff that we just give away in terms of human hours. But clearly, the work we put into the data store and designing the query languages and the real-time system, that was super hard. 

We didn't know about that we would go with GCP at that time when we picked Go, an awesome language of the Google culture. It's just been awesome for us. So we built this [INAUDIBLE] internal system that is the kind of document store and the core of all the APIs in Go. 

And then as we were realizing that this is not an internal tool, this isn't product, then back-end developers/SRE asked, how do we host this? I'm guessing Amazon, right? Because that's like your default. And they would go, no, I'm not so sure about that. Because there is this thing called Kubernetes. And we are definitely using that. 

Really, when I saw it, I was like, of course. Kubernetes solves so many things for us. This really will help us scale and respond to kind of customer demands. And we can either go with Google Cloud Platform or I quit. GCP was so far ahead in terms of the support for Kubernetes and the kind of practicalities. 

[INAUDIBLE] I still think you are really kind of doubling down on all of that. That's kind of where we are really invested in the platform. We entered this market in a time where the readiness for enterprises to really embrace cloud was developing so fast that I could do almost not keep track because when we started, it was a hard sell. 

We struggled with investors not believing that you could do one offering that is the same for individual developers that make a blog but also for a huge multinational enterprise. We were pretty sure about that. [INAUDIBLE] that's awesome. It works. Lots of products don't do that now. 

And then we expected like, OK, now that we got the money, we can start. But then how do we convince the enterprises to trust this system? And then it turned out we had solved the problem that's actually trumped that. We need these things solved more than we worry about cloud risk. 

So we got these kind of huge brands very early that we weren't ready for. But we just had to be. That's, again, the magic of being on Kubernetes and then being Google Cloud and then being able to just kind of, OK, we are not ready for this. But we just kind of throw hardware at this for now. 

We just got through ramped this up to 1,000. And then we go and fix the actual code. And we can go back to just 200. So this is what we have been doing now for two years, just going overprovisioning, fixing, scaling, refactoring, going back. Then that allows us to survive within this kind of insane [INAUDIBLE] growth period. We [INAUDIBLE] the whole marketplace [INAUDIBLE]. 

KNUT: We're also advocates of caching. Caching is awesome. 

MAX: So I brought with me to this virtual meeting a magic wand. And I was going to offer it to let you use it. And go back in time maybe to three years. And give past you a message that you wish you knew earlier in this journey. What would you say? 

SIMEN: I think I would say just release. Don't spend that extra year making it perfect. It was really great already three years ago. Why do we spent another year publishing it? 

MAX: A very wise mentor once told me, if you're not embarrassed, you're not shipping fast enough. I really like that advice. How about you, Knut? 

KNUT: The boring answer would be sort of embrace structured work and time management and so on. But also don't be modest. Don't excuse yourself. In this space, there are so many people who are shouting for attention. So to get out there and be noticed, you kind of have join that choir. 

SIMEN: Just being honest, we are really proud of what we make. And it's a very Scandinavian thing to be too modest. We like what we made. It's fantastic. Nobody has it. It's incredible. [LAUGHS] 

MAX: Do you think you would have connected to a bigger client audience earlier on if you had been more clear about why you thought Sanity was so strong? What's the missing piece that you are seeing in retrospect? 

SIMEN: Yeah, yeah, it's been really a journey for us to accept the fact that we have the best product. [LAUGHS] We thought it, but we couldn't admit it even to ourselves. This is our offering. Take it, and see if you can use it. And nobody has anything like this. Of course, other people have other products that has their strengths. 

But within our kind of parameters, the thing we designed this for, nobody comes close. And being honest and upfront about that from an earlier time would really have benefited us, absolutely. 

KNUT: Since some of the premises of how to get the most out of the system are different than what you would usually expect. You can totally express your common website thing with pages and posts and whatnot within Sanity. And many people are doing that. 

But the real power comes if you take a bit of time and think about your content model and align them with how your team, or organization, or company, whatever actually think about the content and what is actually content in that reality. You sort of go from there and try to express that. 

You can end up with something much more versatile and much easier to build interesting stuff around than if you tried to force it into a collection of web pages with sort of these sections downwards thing. I would say that try to create that narrative. Try to create those examples. And show them to people. And get them enthusiastic about it. I would tell that to my past self, if I could. 

SIMEN: But it's an interesting challenge, because when you create something like this, embodying some new and challenging ideas, and you need people to understand them to fully utilize their system and also to fully kind of grasp the value of your system. And I remember in the '80s, when I got my first Commodore 64, at that time, of course, we sold computers to kids like me. 

You just show it to them. It's awesome. It has colors, and it makes sounds. What else do you want? But if you wanted to show it to adults, you'd say, it's a typewriter. It's just better. And this is the reason we say a headless CMS and JAMstack. It's an easy way in. It's just scratching the surface, but it's an easy way to conceptualize what we can do. And then hopefully you discover the full power of the ideas. 

MARK: Yeah, I love that idea. But speaking of which, so if someone wants to kind of play around with Sanity, how do they get started? 

KNUT: There are two ways to get started. The easiest way is to go to sanity.io/create. From there, you can deploy a template [INAUDIBLE], or a blog, or event site, or what have you in your popular front-end framework. And we will set up the code in GitHub and deploy the studio and the front-end part of this for you. 

And the other slightly more nerdy way maybe is to install a package from NPM in your command line at Sanity/CLI and run Sanity in it. It will guide you through a wizard to set it up locally. And then you go to the docs and read the awesome docs and go from there, yeah. 

SIMEN: Yeah, basically you can just go to sanity.io, and we'll take you from there. You can see both of those options on the front page. And also we have a very generous free tier. So even though it's kind of hosted, individual users, experimental developers to just kind of play with the stuff. So we try to be as generous as humanly possible without giving it away to the enterprises. 

KNUT: If you just need some JSON [INAUDIBLE], you should be able to just fire this up and get that. And if you want to build the next thing, you should be able to do that as well. 

MARK: So Sanity is growing a lot. What kind of skills are you looking for as you expand your team further? 

SIMEN: So we are hiring. We really want excellent SREs, preferably in the American time zones, because we are now both in Norway. We are hiring basically everything right now. Knut has a great devrel coming online now, just joined. We are definitely hiring one or two code developers. 

There's super interesting challenge is in terms of the [INAUDIBLE] engine. It's not very easy. If you can't get work in CockroachDB, we have the same kind of interesting challenges, just not so famous. Maybe you would like to work with us. We have some really interesting people working on that. But they are just very thinly stretched right now. 

KNUT: I can also add that in terms of the content editor and the user interface, there are a bunch of interesting challenges there as well. Its real time. It's a real-time user interface. And you wouldn't believe how many problems you can run into when you design for that. But ends up being really awesome user experience. So if you find those things interesting, contact us. 

MARK: We'll make sure to put some links in the show notes for people who are interested. And of course, we can link out to the hiring URL as well. Well, Simen and Knut, thank you so much for joining us. We really appreciate it. It was a great conversation. 

SIMEN: Thank you, Mark and Max. This was awesome. 

KNUT: Thanks for having us. 

MAX: If you do have any strange flashbacks to two or three years ago, it's probably just a short-term byproduct of the time travel. I don't think you need to worry about anything. 

SIMEN: [LAUGHS] 

MARK: It was really cool to hear the story about A, how they kind of went from consultant to product, which is always an interesting story. But then B, what do you actually have to think about when you're making a content management platform, what they were talking about? 

MAX: I liked also that Knut, being what seems like one of their main developer relations people, was formerly a client, who then was brought on to help show other people how to use their platform, because there's a lot of open source elements in APIs so that they can encourage partners and clients to build on top of what they have developed, if they have that capability. 

MARK: There's no better advocate than a happy client. It's great to hear. And of course, it was such a great conversation. Super happy to have that. But of course, as we know, they're talking about building a platform that manages content. One of the dangerous things about content is that sometimes there is information in there that could be sensitive. So for our tip of the week-- 

[MUSIC PLAYING] 

I wanted to ask Roger, one of our fellow devrelers, to talk a little bit more about what Cloud DLP is. 

ROGER: Thanks for having me, Mark. So the principle of least privilege-- that's the idea that individuals in your organization should only have access to the minimum data required to do their job. This kind of policy is largely enforced by access control and permissions. But Google Cloud Data Loss Prevention, or DLP for short, throws an additional layer of data security and privacy on your systems and data workflows. 

Cloud DLP is a fully managed service that's designed to help you keep any sensitive data that might exist on your system secure and private. We're talking names, addresses, credit card information, anything that could personally identify an individual, whether it's customers or employees. 

There are actually more than 120 built-in info types. And if that's not enough, you could define your own using dictionaries or regular expressions. When Cloud DLP does an inspection, for each discovery, it'll return a matching string, the info type, and a likelihood score. The likelihood score will tell you how certain the API is that the string matches the info type, ranging from very unlikely to very likely. 

That score is based on a combination of pattern matching, context, and, for some info types, like credit card numbers, a checksum. Running a DLP inspection job against a large-scale data source could potentially highlight opportunities to strengthen your security and audit data collection policies to mitigate your risks. 

You can imagine how valuable this is for large storage systems or archives that contain things, like transcripts, that may inadvertently capture sensitive information. DLP can do more than just inspect and discover. The API offers a bunch of deidentification techniques that can totally remove or otherwise obscure sensitive information so that it never enters your systems to begin with. 

There are a few different techniques, each with its own advantages over the other. You can straight up remove the value of redaction or replace a value with its matching info type with replacement. Meanwhile, bucketing can be configured to replace values with bucket value based on a high-low range or a string match. 

If you're looking to deidentify dates, there's a deidentification technique called date shifting that will shift dates by a random number of days and one called time extraction that will extract or preserve parts of a date or time value. But some of the more powerful methods of deidentification are crypto-based tokenization transformations, where DLP will replace the original data values with encrypted values. 

Some of these transformations even support reidentification, so the encryption can be reverse given the original encryption key. By using one of these crypto-based tokenization transformations, you even retain the data's referential integrity. This way, data analytic teams can still keep connections between records without accessing the original values. 

So that's a really quick overview of Cloud DLP. And there's way more you can do with it by connecting it into existing pipelines and processes. And I think that as systems continue processing more and more data and as organizations look for more ways to analyze and make intelligent decisions from that data, it's really important to make sure that sensitive information is handled responsibly and securely. 

If you want to check out Cloud DLP, you'll find it in the Cloud Console menu under Security and then Data Loss Prevention. Or you could jump into the API at cloud.google.com/dlp. 

MAX: And it's great for helping to also stop data exfiltration, which is a big problem with a lot of clients I end up talking to, who are shifting work to the cloud and sensitive to that new avenues of data loss or data compromise that that can introduce. And they're really happy to start using DLP. 

MARK: Yeah, and one of the cool ways-- we'll actually have a link in the show notes-- it's a cool little demo-- very easy. You put in some information. And you see exactly how it works. So it's a fantastic way to get started with that. 

MAX: Don't put your actual social security number into that demo, just as general rule of thumb. 

MARK: Yeah, I think that's good advice. Just keep your social security number very, very secret, right? You can test with fake social security numbers. You don't need to use your own. It still works the same way. 

Well, with all that being said, Max, what have you been working on? It's been a while since we last chatted. 

MAX: Yeah, I've been having a lot of fun working with one of my teammates, Jen Person, on some more stories around security, BeyondCorp, remote access, and Identity-Aware Proxy. So we've been exploring in some blog posts and some videos to come how can you integrate other identity providers if you're not, say, using Google Identity into a BeyondCorp model of zero-trust access for cloud applications? 

So we've got a couple blog posts out. You can check them out on the show notes. But we walk through integrating an app engine app with Firebase hosting an identity platform to use a Facebook login, instead of a Google login, to control access. 

MARK: Yeah, I think we should bring Jen back on the podcast, because she was on-- oh, boy-- it must've been about a year ago when she was talking about some Firebase stuff. So I'd love to have her back on, talk a little bit more, even more, about Firebase or security, like you mentioned. 

And one of the other cool projects that you and I worked on, of course, last year was Stackchat, where we went out to interview customers and look at how they built their cloud architecture. It's a little harder now to go and film with customers. So what we decided to do, of course, was turn it into a podcast. 

MAX: We've been having a lot of fun getting together with clients, partners, customers, and talking about what they've built, how they built it, and, really, what drove those decisions. And one of my favorite parts of these conversations is digging into the aha moments along the way, because nothing ever goes as smoothly as the retrospective or the book report makes it look like. And so we really enjoy talking about the missteps, or the hiccups, because that's also what's going to save other developers some time and stress as they're going about solving some of these scalable, interesting, tough problems on top of public cloud infrastructure. 

MARK: Yeah, I absolutely love hearing those stories. So next week, we're going to try it out. We're going to have a Stackchat story in the podcast. And of course, we'll have our normal interview, too. So it's going to be a jam-packed episode. So make sure to tune in next week. 

But for this week, I want to thank all your listeners for coming in, spending some time with us. And of course, we'll see you next week. 

MAX: See you all later. 

[MUSIC PLAYING] 

You've got to make sure you put on your bare-metal pants for that bare-metal segment. 

MARK: I feel like if I were to wear bare-metal pants, I would get a lot less stuff done in the day because everything now is like a huge chore. Me to the fridge, 45 minutes.