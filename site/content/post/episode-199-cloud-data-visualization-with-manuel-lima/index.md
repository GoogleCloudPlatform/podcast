+++
audioDuration = "00:30:27"
audioFile = "Google.Cloud.Platform.Podcast.Episode.199.mp3"
audioSize = 44263945
categories = ["Data Visualization", "Design Principles"]
date = "2019-10-16"
description = "Gabi Ferrara and Jon Foust are back today and joined by fellow Googler Manuel Lima."
draft = false
episodeNumber = 199
hosts = ["Gabi Ferrara", "Jon Foust"]
title = "Data Visualization with Manuel Lima"
image="/post/episode-199-cloud-data-visualization-with-manuel-lima/images/hero/hero-EP-199.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/dirmpe/episode_199_data_visualization_with_manuel_lima/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Gabi Ferrara](https://twitter.com/gabidavila) and [Jon Foust](https://twitter.com/syntxerror1) are back today and joined by fellow Googler [Manuel Lima](https://twitter.com/mslima). In this episode, Manuel tells us all about data visualization, what it means, why it's important, and the best ways to do it effectively. 

For Google and its mission, data visualization is especially necessary in facilitating the accessibility of information. It "makes the invisible visible" because of the way it can decode meaningful data patterns. Working across multiple GCP products, Manuel and his team build advanced visualization models that go beyond graphs and bar charts to things like sophisticated time lines that aid in the progression from data to usable knowledge. They have also created guidelines for things like what kind of graphical language to use, what type of charts users might need, and more. These guidelines, originally used only internally, have now been adjusted and released for use by developers outside Google with the help of the Material.io team.

The guidelines are based around the six data visualization principles that help users get started. They can be employed to plan and inspire an entire project or to evaluate a specific data visualization chart. Some of the most important principles are to be honest and to lend a helping hand. You can read more in their Medium article, [Six Principles for Designing Any Chart](https://medium.com/google-design/redefining-data-visualization-at-google-9bdcf2e447c6).

<!--more-->

##### Manuel Lima

A Fellow of the Royal Society of Arts and nominated by Creativity magazine as “one of the 50 most creative and influential minds of 2009,” [Manuel Lima](https://twitter.com/mslima) is the founder of VisualComplexity.com, Design Lead at Google, and a regular teacher of data visualization at Parsons School of Design. 

Manuel is a leading voice on information visualization and has spoken at numerous conferences, universities, and festivals around the world, including TED, Lift, OFFF, Eyeo, Ars Electronica, IxDA Interaction, Harvard, Yale, MIT, Columbia, the Royal College of Art, NYU Tisch School of the Arts, ENSAD Paris, the University of Amsterdam, and MediaLab-Prado Madrid. He has also been featured in various publications and media outlets, such as Wired, the New York Times, Science, Nature, Businessweek, Fast Company, Forbes, The Guardian, BBC, CNN, Design Observer, Creative Review, Eye, Grafik, étapes, and El País. His first book, Visual Complexity: Mapping Patterns of Information, has been translated into French, Chinese, and Japanese. His latest, The Book of Circles: Visualizing Spheres of Knowledge, covers 1,000 hundred years of humanity's long-lasting obsession with all things circular.

With more than twelve years of experience designing digital products, Manuel has worked for Codecademy, Microsoft, Nokia, R/GA, and Kontrapunkt. He holds a BFA in Industrial Design and a MFA in Design & Technology from Parsons School of Design. During the course of his MFA program, Manuel worked for Siemens Corporate Research Center, the American Museum of Moving Image, and Parsons Institute for Information Mapping in research projects for the National Geospatial-Intelligence Agency.

##### Cool things of the week

* Compute Engine or Kubernetes Engine? New trainings teach you the basics of architecting on Google Cloud [blog](https://cloud.google.com/blog/topics/training-certifications/new-trainings-teach-you-the-basics-of-architecting-on-google-cloud)
*  Stadia comes next month [site](https://store.google.com/us/product/stadia_learn?hl=en-US)
*  Google Cloud named a Leader in the 2019 Gartner Magic Quadrant for Full Life Cycle API Management for the fourth consecutive time [blog](https://cloud.google.com/blog/products/apigee/google-cloud-named-a-leader-in-2019-gartner-magic-quadrant-full-life-cycle-api-management-for-fourth-consecutive-time)
*  Google Hardware Event
   *   Pixel 4 is here to help [blog](https://www.blog.google/products/pixel/pixel-4/)
   *   Meet the new Google Pixel Buds [blog](https://www.blog.google/products/pixel/new-pixel-buds/)
   *   Nest Mini brings twice the bass and an upgraded Assistant [blog](https://www.blog.google/products/google-nest/nest-mini/)
   *   More affordable and portable: let’s Pixelbook Go [blog](https://www.blog.google/products/pixelbook/pixelbook-go/)

##### Interview

* Material.io [site](https://material.io)
* Data Visualization Guides [site](https://material.io/design/communication/data-visualization.html) 
* Six Principles for Designing Any Chart [article](https://medium.com/google-design/redefining-data-visualization-at-google-9bdcf2e447c6)
* Google’s six rules for great data design [article](https://www.fastcompany.com/90369607/googles-six-rules-for-great-data-design)
* BigQuery [site](https://cloud.google.com/bigquery/)
* Stackdriver [site](https://cloud.google.com/stackdriver/)
* Google Analytics [site](https://marketingplatform.google.com/about/analytics/)

##### Question of the week

What are the most common products used in cloud gaming?

* Cloud Spanner for storing player authentication and inventory or long-term state storage [site](https://cloud.google.com/solutions/best-practices-cloud-spanner-gaming-database)
* Redis is used in [Open Match](https://github.com/googleforgames/open-match)
* VM’s have been the most commonly used product for game servers but there has been a shift to [Kubernetes](https://kubernetes.io)
* [Pub/Sub](https://cloud.google.com/pubsub/) 

##### Where can you find us next?

Gabi will be at [Full Stack Europe](https://fullstackeurope.com/speakers/gabi-davila/).

Jon will be at [Kubecon](https://events19.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2019/) in November to run a workshop on [Open Match](https://github.com/googleforgames/open-match/blob/master/docs/development.md).

##### Sound Effect Attribution

* "Small Group Laugh 6" by Tim.Kahn of [Freesound.org](https://Freesound.org)
* "Jingle Romantic" by Jay_You of [Freesound.org](https://Freesound.org)

{{< transcript "[MUSIC PLAYING] GABI: Hi, and welcome to episode number 199 of the weekly Google Cloud Platform Podcast. I am Gabi, and I'm here with my colleague, Jon Foust. Hello, Jon." >}} 

JON: Hey, Gabi. How's it going? 

GABI: Good, how are you? 

JON: I'm pretty good. Just came back from my brother's wedding. It was amazing. My sister-in-law, she hid the fact that she was pregnant to all of her guests. 

[MUSIC PLAYING] 

GABI: Ah. 

JON: So it was pretty awesome. And then we ended up doing the gender reveal at the wedding. And they really wanted a boy, and that's exactly what they're getting. 

GABI: Congratulations on that. 

JON: It was great. 

GABI: Yeah. 

JON: How about you? How have you been? 

GABI: Puppy sitting. 

[BARKING] 

[LAUGHTER] 

Yeah, for those that don't know, my puppy was really sick, but she's nice now. She's OK now. 

JON: Yeah, I'm going to make sure to come visit. 

GABI: Yeah. So the subject today is super cool. We have a peek on what Google does to make data visualization consistent across multiple areas within Google. We're going to be talking with Manuel Lima. He's the lead designer at Google Cloud for data visualization team. 

JON: And for a sneak peek at what our question of the week is-- 

GABI: What are the most common products using in cloud gaming? And he's going to reply after everything. 

JON: Yeah, yeah. I got asked this by a fellow Googler and I went on a rant for a while. And they were kind of interested to see how many products are actually used in cloud gaming. So I will give you a few that I've worked with and a few that I've seen most commonly used in a lot of our gaming products. 

GABI: Now to our cool things of the week. 

[MUSIC PLAYING] 

We have some two new trainings with GC. There are five courses for introduction to advanced topics, and four ones in GKE, Google Kubernetes Engine, with four courses on networking, persistent storage, and other concepts that you use in Kubernetes, reminding you that Kubernetes is, by default, stateless. So if you want to do a stateful thing, you need to see the course or read the docs because it's a bit different. 

JON: My cool thing of the week is that Stadia is coming next month. 

[LAUGHTER] 

Of course, I'm going to be very excited about it. I've got to use it hands on, both at I/O, and they had an internal event at the Game Summit where we got to play with it for a bit. So it's kind of amazing. I can't wait. Feel free to check out the show notes for more information. But it should release on November 19 of this year. And the one thing I'm really excited for is I'm looking forward to playing in 4K, but I don't need a 4K gaming monitor. 

You can use a standard monitor, because the resolution is up to 4K at 60 frames per second. So that's what most 4K monitors that you will see, like most recent monitors will output if it's not specific 4K gaming monitor. So I'm real excited about that. And a lot of the games that got announced that I've been playing as a kid, when they announced those games, I was jumping out of my seat. So I'm just way too overexcited for it. 

GABI: I will send you the link of my TV model. It's 4K. I don't if it works. You're going to have to tell me later. 

JON: The great thing is that most TVs will probably output at 60 frames, but there are some older models that will do 4K at 30 frames. So it's just a small change. When you're an avid gamer like myself, you'll notice the big difference between the response time and refresh rate of monitors. 

GABI: OK. My second cool thing of the week-- Apigee was elected by Gartner Magic Quadrant on the fourth time in a row as a leader for the full cycle API management in this year's report. So if you look at the quadrant there-- you need to read the full report. You cannot just see the graphic of the quadrant. You should look at everything. But it puts us on highest ability to execute for our APIs enterprise. And most things have APIs, including games, Jon. 

[LAUGHTER] 

So yeah, give it a look. It's on the show notes, the links for all we said in here. 

JON: And I just thought of something new that just happened today. So there was a Google hardware event that I'm not sure if many of our listeners have seen. But we announced a bunch of new products, such as the Pixel 4, new Pixel Buds, as well as a couple of new Nest services-- so if you're really interested in those things, or you want to have Connect at home, probably a new phone. 

And also they announced a new Pixelbook, which is kind of amazing, which I will be looking forward to possibly using in my classroom. Feel free to check out the event. And the link to the event will be posted in the show notes. 

GABI: So now we're going to be talking with Manuel Lima about data visualization. And I hope you will enjoy. 

[MUSIC PLAYING] 

We're here today with Manuel Lima. So Manuel, who are you, and what do you do? 

MANUEL: I am a designer by training. I'm also a researcher and a writer. And I work as a design lead for Google, managing data visualization team as part of the Google Cloud. 

GABI: You mentioned that you work for GCP specifically. So why is visualization important to GCP and to Google, in general? 

MANUEL: Well, Google, in general, because if you look at Google's mission to organize the world's information and make it universally accessible and useful, data visualization plays a huge role, specifically in making information accessible and useful. We tend to say that data visualization makes the invisible visible in the sense we are able to decode meaningful patterns in data. And that's super critical for Google's mission overall. It can also be a huge differentiator for GCP specifically, since we have a lot of really complex challenges dealing with data analytics and data analysis across GCP. 

GABI: Do you work together with the BigQuery team or stuff like that? 

MANUEL: Yeah. We act as an horizontal team-- that's how we frame it-- horizontal team being that we are not part of one specific product, we work across multiple products. So we tend to partner with multiple teams within GCP and even across Google. 

JON: I have a question. How was your team actually formed? If you work with almost every single team, I can imagine that there has [INAUDIBLE] for you to be formed and to be aligned with so many different teams there has to be [INAUDIBLE] importance. 

MANUEL: Absolutely. Many of the original founders of this team, we call ourselves the Four Musketeers, the sort of the core four person team that created this group in the first place. We were actually working on Stackdriver. We were part of the original Cloud DevOps group. 

So Stackdriver was a Google acquisition, I would say, maybe five or six years ago. And they do a lot of monitoring, so monitoring different services, servers. So you can imagine there's a lot of data visualization elements to it, many complex different dashboards using line charts, bar charts, and so on to visualize, again, services, infrastructures, and so on. 

So we, being part of that original team were already very compelled to be in that space. We are all very passionate about data visualization. But at some moment in time, we felt there was a huge demand for more complex, sophisticated visualizations. And not just by [INAUDIBLE] alone, but many other teams. 

So what I did is that I went across Google and talked to various teams that were doing related work. And there was, again, a lot of demand for this type of thinking, this really sophisticated, more advanced visualization models. And you can think about this not as your typical bar chart or your pie chart. But something like a natural visualization, something like a really sophisticated timeline. 

These are not the things that are available at the simplest data visualization toolkits available out there. So the demand was definitely there. However, there was not a lot of teams able to build it as we wanted, as we needed for GCP. So I was able to convince our leadership that this was a huge sort of opportunity. 

So I was able to build that team from scratch. And I think now we are around 14 people and a mix of UX designers, researchers, UX engineers, essentially prototypers, and software engineers actually building some of the components that we are creating. 

JON: Awesome. So you said something very interesting. You had to convince the leadership that this was very important. So can you tell our listeners why data visualization is so important? 

MANUEL: I like to think about this-- one way is called the understanding spectrum. This is how data converts into information, information converts into knowledge, and knowledge converts into wisdom. This is the understanding spectrum, normally. 

Now, data visualization really comes in in building a bridge between information and knowledge, which is also the hardest part. Information surrounds us every single day. And our ability to actually generate data and information has by far outpaced our ability to actually make sense of that data. And that's where data visualization can come in. 

It's almost a lens for understanding. It allows us to understand, in a graphical way, a lot of the hidden patterns in the data and in information that you wouldn't see otherwise. So that's the metaphor of making the invisible visible is so powerful. 

GABI: So if you can tell us what your team has been up to lately? 

MANUEL: Yeah. That's a great question. So we've been pretty busy. Our team is kind of operating in various fronts. 

We, of course, act as consultants internally. We have a lot of teams, again, mostly In cloud and GCP, but even in other areas. Teams that are dealing with complex issues pertaining to data visualization, maybe they are building another chart, they are building this sophisticated dashboard. 

Some of these challenges are external facing, that are customers outside-- let's say, Google Analytics, for example-- but other are internal. We have a lot of internal dashboards, a lot of internal tools that deal with really sophisticated ways of visualizing data and information. 

And we can then, as consultants, we support them. We help them achieve a better product overall. And also, of course, we provide a lot of UX expertise. So we help with usability, with accessibility, and things of that nature. 

We are also very passionate about data vis and teaching data vis. So we organize things like an internal speaker series where people come in and talk about their work. We teach data visualization in this internal, almost university that we have at Google. We teach other Googlers on data visualization. 

But the core of what we do is really building Cloud charts, which is a set of data visualization components so that other teams can actually reuse them in an easy way. That's the core of our business. That's where most of us are really working hard on. 

And a secondary pillar that we are trying to build is related to design ops, design operations. And we are building some tools and apps, data visualization related to help other teams be more effective, collaborate better, and just raise the quality of their output. 

GABI: You said, sorry-- 

MANUEL: Yes. 

GABI: --just to go back, you said, like teach a lot of people about data visualization? 

MANUEL: Correct. Yes. 

GABI: How much math do you need? 

[LAUGHTER] 

I don't do math for a long time. 

MANUEL: That's a common misunderstanding, I have to say it. It was kind of like that, maybe, I would say, 10, 15 years ago. If you wanted to do any type of substantial work in data visualization, you would have to be good at math and also have a good understanding of a programming language. These days, there was this democratization of visualization tools. So it's pretty easy for many other people without that expertise, without that knowledge to do some really substantial work in this domain. And I think that that's been really productive because it has allowed the field to grow immensely and include many different people from many different disciplines. 

JON: Awesome. So you've mentioned that you worked on a bunch of tooling, you work with a bunch of teams, and you do a lot of courses. So I'm curious, since the team was founded by the four of you, what has really come out of the data visualization team that you can puff your chest out about? 

[LAUGHTER] 

MANUEL: That's good. I mean, starting the team was really fun. I'm, of course, a UX manager, so I love growing teams, finding the right culture, growing them in a balanced way, making sure that we have the right cross-discipline ratios, and making sure we are building the right talent in part of that group of people. So I love that. That is one of the things that I feel most proud of, just building our team from scratch, with the right capability. everyone being so passionate for this domain just definitely helps. 

And I feel this is also something that I carried around with my career. I believe that passion is a magnet. It contaminates others and it allows you to do a lot more. And I feel like we have done so much with a small group of people because we have that drive, because we have that huge passion for data visualization. 

But one of the things that I feel, again, is staffing the team, but also reaching out. A lot of times we do amazing work internally at Google, but we don't actually go outside and actually talk to other people and teach them, as well, what we're doing. So a few months back, we partnered with the material team, and we actually launched externally for everyone to use, so everyone that's listening to us can actually go and see a set of data visualization guidelines that we did in partnership with material, detailing things like the graphical language that you should use, what type of charts you need for a given situation, a lot of really interesting principles. 

And this has been extremely successful. I think, right now, that material section has been seen by around 100,000 unique users, and the principles that we published on Medium has been seen by roughly, like, 60,000 people. So there's definitely a lot of appetite, a lot of interest for this type of material. And I'm really proud for us to be reaching out to our users outside of Google. 

JON: Awesome. So I'm going to circle back to about the tooling that you've mentioned and a lot of the teams that you work with. For your team, you're all very passionate about data visualization. But curious, does everybody need to be an expert on data, or just be passionate about it to actually get into this? 

MANUEL: That's a good point. I think passion helps. But we have had people joining the team that didn't have a solid sort of background or expertise in this space, right? They were just tremendous researchers or tremendous designers, and they just had that appetite for it. 

So I think you can definitely excel. But again, in my view, passion goes a long way. It allows you to [INAUDIBLE] that extra 10% of dedication. 

[LAUGHTER] 

GABI: So what you build is basically a set of guidelines for data visualization that people will use across different teams. How hard was it to build something like that? Because the fact you said you are a horizontal team, there is a kind of uniformity to everything that you're doing, and so it's more common across the product. And how do you work to maintain that kind of identity? 

MANUEL: I think that's one of the challenges. And I'm sure the audience is probably familiar with the material team. The material team is this internal group that really strives to build consistency in terms of the UI and UX across our various products, Google products, which is a huge challenge on its own right. So we, in some ways, are a smaller material team, but just focused on data visualization. So we have the same challenge, albeit a much smaller team. 

But you're right. I think it comes in two ways. One is the guidelines and then the other one is providing the specific components that others can use. And they kind of go hand-in-hand. On the guidelines, the work that we did kind of started earlier on. I would say maybe 18 months ago or so, or even two years ago. 

The first time is when a group of us across Google got together. I think we did a couple of sprints on this. And this was a really wide effort. This was, I think, 12 different product areas across Google, from Google Analytics, Search, Google Cloud, all these PAs that we call internally. 

So all these designers from all these groups getting together and thinking about what would the right set of guidelines that we could provide in a unified way so that everyone else on the team could build the right type of chart. At the time, we were not even thinking about providing a specific component that you could actually use. It was just a set of guidelines. 

And that became our internal Google database spec. This is, again, available all internally. And the one that we ended up publishing by the material team externally is just a subset of that. So internally, it's a bit heavier. 

We cover almost everything, from motion design to interaction. We cover aspects of this on the external one, as well, but the internal is by far more comprehensive. 

That was a really fun project. That was a really fun sort of initiative to be part of that. And that has been immensely helpful for again many different designers, engineers, and researchers across the entire company. So that was only the guidelines aspect of it. 

And then, part of that that we are doing right now is releasing specific components. We are building a library, a toolkit, so that other engineers across multiple different product areas, as well, and of course, most importantly, Cloud and GCP can leverage those components, right? 

And consistency, to your point, Gabrielle, is critical. Because that's one of the reasons why we are doing this, why we are building this library in the first place, is that users don't get to see a different bar chart, a different pie chart in every single product that they navigate through within GCP. That wouldn't make sense. Consistency builds familiarity. And it's pretty important that people and users recognize the same type of experience, the same type of charting mechanism, across the different products that they use and navigate to achieve a given task. 

JON: So you brought up this component library. And I'm curious. Of course, it's used widely across Google internally. 

But what would you say is the biggest advantage of actually building this out internally? Of course, things that happen internally have extreme external benefits for our users. So I'm just curious. What would you say is the biggest advantage for us internally? 

MANUEL: One is definitely building some internal expertise on this domain, which is again still fairly new to people. They understand maybe the benefit, but they don't understand how critical it can be for even product, even an internal product. So I think it's kind of raising the awareness and education across the company is a really good effort. 

The benefits of building a library, per se, is multifold. You can increase velocity, because you don't have to reinvent the wheel every time. You can just pick up the component and kind of plug and play. You can also minimize a lot of the UI sort of complexity, because you end up creating auxiliary type of UI components that are not productive at times. 

I think you can really increase quality, optimize UI quality, consistency, and effectiveness. We talk about consistency. It helps build familiarity. It helps that you find the same type of chart every time you navigate to a different product. And I think it can be a huge driver for innovation, impressing our customers and be really a differentiator for GCP, as well. 

GABI: You said that you have a set of guidelines and that you built first internally. So it's kind of, like, the Formula 1, like, cutting edge internally. And then you put it outside, if it is OK and safe and that kind of stuff. So how is the process to publishing those guidelines for the outside world? 

MANUEL: It was easier in the sense that we had a body of content already to rely on. We didn't invent everything from scratch, even though we ended up creating a bunch of new content just for that external publishing alone. But the process was really a strong partnership with the material team. 

We have been very close since the beginning, since the inception of our group-- working very closely with them, reviewing content several times. And they are very, of course, familiar with the process. And again, we actually published under the material.io website. So they are very familiar with the whole process of iterating on content, publishing, and so on. So that was usually helpful, right? 

And then also we published under the Google design on Medium. And that's also co-owned by the material team, so that partnership was fundamental, I would say. And in case you might be wondering about what those guidelines can be. 

So we kind of started off with principles. Principles are things that can be fundamental for users to understand. How do they actually get started with the data visualization. Principles might be used for you to either evaluate a specific data visualization work or chart that you're working on, or even before you even start doing anything, just to start sort of inspiring and sort of scaffolding the whole project. 

So one of the principles we have, for example, is be honest. Data accuracy and integrity come first. Don't destroy or confuse information for embellishment or partiality. As with any form of communication charts, data visualization can be used for good or bad. So being honest, being accurate, is really critical for us, what we do as Google. Right? 

Another principle, just as an example, is lend a helping hand. A lot of the charts that we do, a lot of the components we do can be fairly complex to understand. They require a substantial learning curve. So finding ways of lending a helping hand, providing the context and help, users navigating the data is really important, building the right visual [INAUDIBLE] that you can comfort users that this is something that's doable, that they can learn in a fast way. 

JON: These principles, they sound very, very similar to a lot of our core values at Google. So I'm just curious. How did these come about? 

MANUEL: So the principles were a really interesting project. A lot of that work was from that original team of designers across Google, those 12 different product areas that we got together in a few sprints. That was a genesis event. 

We then iterated a few times. We also talked to a lot of different areas, even the hardware team at Google. They have their own set of principles. We have our own brand principles. 

There's multiple instances within Google that have their own sort of specific principles, but there are a few ones that are really common and shared across the company. So we talked to a bunch of those people. 

We also used research. Research has been really critical for us. Very recently, we just published internally a report on data visualization needs of 383 different product teams within GCP, by far the most comprehensive research study we ever conducted. And through a lot of that research, we kind of had a really solid understanding of what users actually wanted, what our customers needed pertaining to data visualization, what was really important to them. 

And all of those things put together, we just mix it up. And we generate a final list of six guiding principles that you can find on our Medium post. And I believe we can actually surface a link to that article on the GCP podcast on the show, yeah. 

JON: On the show notes, yeah-- so you've written this article and it's been amplified outside. Apparently-- this is something new to me-- Fast Company actually wrote an article about the work. So I'm curious. How has this been received? 

MANUEL: Yeah. I mean, my understanding-- it has been pretty well-received. Again, we have had close to 100,000 unique views on the material section that you can find on material.io under Communication and then a whole section on data visualization. And then, I've been following on social media, especially after Fast Company and a few other media outlets talked about it, I think it's been pretty well-received. People are really interested in what Google has to say pertaining to data visualization. 

And there was also the Medium post, which got a lot of buzz on the principles. And I think that people tend to gravitate towards the principles, because they are not highly specific. They are just more generative than prescriptive. And I think that resonates with people a lot more. 

And we are thinking about doing [INAUDIBLE] also, by the way, to those guidelines on the material I/O side. Right now, there's a lot of content on the types of charts that you might pick. Sometimes you have a given data set, but you don't really know what chart you should be using. So we provide a lot of guidance on that. 

We also provide guidance on the graphical language that you need to build, so how to use color, how to use typography, how to use shape to convey a given sort of concept. So we provide a lot of guidance. And I think people have found that to be extremely useful. That level of specificity that we also provide, not just the principles, the high level principles, but also the dos and don'ts, what to do and what not to do, on specific areas of building a chart and building a data visualization. 

GABI: Based on those guidelines, opposed to those principles that you mentioned, is there any outside company or anyone else outside Google that you see successfully implementing this or in a way that you didn't thought, even, that was possible to be able to do it? 

MANUEL: Unfortunately, I haven't actually been contacted or seen anything of that nature. It's more, like, the kind of people reaching out to me and saying, hey, this was very useful. We are using it in a given way. But I don't think I've actually seen tangible output influenced by our guidelines. But maybe it's just a matter of time. 

[LAUGHTER] 

JON: We would like to think Manuel Lima for joining us. It's been a pleasure. With him right now, currently recording, you can see how very passionate he is about data visualization. So it's great to see how you've really tried to impact internally with Google and also sharing those guidelines and principles with our external audiences. So that's perfect. So we'll be sure to share all of these blog posts, as well as the principles, in the show notes so that all of our listeners will be able to follow along. And hopefully, we'll see some adaption of the principles and guidelines, along with a general interest in general data visualization and how we go about it. 

GABI: That was a really nice conversation. Yeah. 

MANUEL: Thank you so much. 

GABI: Obrigado. 

MANUEL: Obrigado. 

[LAUGHTER] 

GABI: So back to the question of the week, Jon. 

[MUSIC PLAYING] 

What are the most common products used in Cloud gaming? 

JON: I'll probably go over a couple. But one product that I've seen a big shift to was Cloud Spanner. Customers have been using Cloud Spanner to store player authentication data and inventories or pretty much any long-term state storage. So the great thing about it, it's relatively quick, scalable, and highly available. So there's definitely been a big shift to Cloud Spanner. 

Another product that's been used quite often is Redis. One of the open source projects that we work on, Open Match comes default with Redis. And it's used for data storage or caching player data, which allows the framework to actually access that data relatively quickly and creates very competitive matches very quickly. So that's also another part that we're seeing a big shift towards. 

And it's widely known that VMs have been used as a product for game servers, but there's been a big shift to Kubernetes. Big shout out to Mark and the Agones Project. I plug them every week I can. 

But there's been a big shift to using Kubernetes because it's highly scalable and highly available. And the great thing about it is that it autoscales. And I think that whenever one of your [? pods ?] goes down, it always spins right back up. The product in itself just speaks to the power that it would have in gaming. 

And the last product that I've been using personally quite a bit for my personal project is Pub/Sub. I've been using it a lot for messaging, as well as sending data relatively quickly between two clients. So Pub/Sub up is great because, if done right, you should have real time messaging between two clients. So if you're interested, feel free to check out all of the links for all of these products in our show notes. 

GABI: OK. Just reminding people that we do have a [? called ?] memory store, which is Redis compatible. So you can be using that, too. 

JON: And the great thing about Open Match is that Redis just comes default. But pretty much any component can be swapped out. So if you want to use Memorystore, if you want to use Firestore, pretty much anything that you want to use for storing or caching your play data, you can easily just swap out. And that also goes for pretty much any other component of the project as well. So feel free to check out the notes. And if I can grab a couple of presentations on it, I'll add it along as well. What are you going to be doing? What are you going to be up to? 

GABI: I'm going to be doing, actually, not a database talk, but a serverless talk at Full Stack Europe in Antwerp, Belgium next week. I think I'm going to be speaking on the 24th or 25th. The link will be in the show notes. 

And I'm excited about that because I know a bit of Cloud Run, I know a bit of App Engine and functions. But it's fun to be showing people what those products can do, even with databases connected to them. 

JON: It's pretty good that you're pretty versatile. 

[LAUGHTER] 

GABI: We try to be, right? 

JON: Right. Yeah. And for me, I will be at Q-Comm in November. And then I'm going to be doing quite a bit of personal travel. I'll be in Kirkland to meet with some engineering teams. And then I'll be hanging out in New York, possibly going to some distant location just for vacation. I'm going to probably roll a large-sided dice to determine where I'm going to land, looking forward to just taking a spontaneous vacation. 

GABI: You should go to Brazil. 

JON: No. I can't go to Brazil without you. Remember, you're going to host me. 

GABI: Oh, but I'm going there in December, so you can come. 

JON: Hopefully our timelines align. 

GABI: OK. OK, everybody. Thank you so much for listening to the podcast today and have a good week. 

JON: Thanks for listening. 

[MUSIC PLAYING]