+++
audioDuration = "00:45:38"
audioFile = "Google.Cloud.Platform.Podcast.Episode.294.mp3"
audioSize = 109537205
categories = ["Looker", "BigQuery", "Business Intelligence", "Data Analytics"]
date = "2022-02-23"
description = "Guests Leigha Jarett and Debi Cabrera from the Looker team join Mark Mirchandani this week to talk about what's new with this popular tool."
draft = false
episodeNumber = 294
hosts = ["Mark Mirchandani", "Debi Cabrera"]
title = "Looker with Leigha Jarett and Debi Cabrera"
image="/post/episode-294-looker-with-leigha-jarett-and-debi-cabrera/images/hero/hero-EP-294.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/sznvla/episode_294_looker_with_leigha_jarett_and_debi/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Guests [Leigha Jarett](https://twitter.com/leighajarett) and Debi Cabrera from the Looker team join [Mark Mirchandani](https://twitter.com/markmirch) this week to talk about this powerful tool. Looker, Google's data analytics platform, was built to provide enterprise companies with customizable analytics tools that allow anyone to get the data they need when they need it. This facilitates better business decisions.

Leigha talks about how Looker and LookML keep data consistent among data analysts no matter where they pull data from or what they do with it. Data is more trustworthy, fostering a positive data-driven business. She details how LookML works, from database connection to metric creation, and tells us how easy it is for non-data engineers to work with as well. 

Robust data analysis based on trusted data points used to drive decision making is how Looker builds an environment of business intelligence rather than simple reporting. By offering easy integration into other Google tools like Data Studio and BigQuery, Looker is easy to set up, learn, and use. Our guests help listeners navigate Looker's Explore From Here functionality and explain how it could help them answer important business questions. With advanced admin permissioning, Looker also helps limit the chaos that comes with multiple people accessing the same data. 

Later, we hear real-world examples of companies taking the Looker journey. Our guests offer advice based on these experiences with clients and talk about how client feedback has influenced new Looker tools, like the Looker Tableau Connector that's coming soon. We hear about the relationship between BigQuery and Looker and suggestions for companies newly embarking on their data journey. 

##### Leigha Jarett

[Leigha](https://twitter.com/leighajarett) is a Product Manager for Looker’s application platform. She focuses on making Looker both simple and powerful for developers.

##### Debi Cabrera

Debi recently became a Developer Advocate after being at Looker for three years as an Engagement Manager and StratOps PgM. You can find her on [Linkedin](https://www.linkedin.com/in/debi-cabrera-22320789/)

##### Cool things of the week

* Introducing a Google Cloud architecture diagramming tool [blog](https://cloud.google.com/blog/topics/developers-practitioners/introducing-google-cloud-architecture-diagramming-tool)
* Black History Month: Celebrating the success of Black founders with Google Cloud: DOSS [blog](https://cloud.google.com/blog/topics/startups/doss-makes-home-buying-and-selling-smarter-with-digital-real-estate-marketplace)
 
##### Interview

* Looker [site](https://looker.com)
* LookML [site](https://looker.com/platform/data-modeling?_ga=2.230191580.1933206989.1645551224-1891715171.1643135076&_gac=1.191282648.1644976819.Cj0KCQiAu62QBhC7ARIsALXijXQFlW7W9j5jBRJXD02QjlRRt8TAz7lTroun96PB5kKBz5UPLmdBjMIaAtgQEALw_wcB)
* Data Studio [site](https://datastudio.google.com)
* Looker Connect [site](https://connect.looker.com)
* Looker Documentation [docs](https://docs.looker.com)
* Looker Products Page [site](https://cloud.google.com/looker)
* Tableau [site](https://www.tableau.com)
* Google Cloud Training [site](https://cloud.google.com/training/class-schedule#/title=Analyzing_and_Visualizing_Data_in_Looker,Developing_Data_Models_with_LookML)
* Google Cloud Skills Boost [site](https://www.cloudskillsboost.google/catalog?keywords=Looker&locale=&format%5B%5D=any&level%5B%5D=any&duration%5B%5D=any&modality%5B%5D=any&language%5B%5D=any)
* Looker and BigQuery Important Considerations [whitepaper](https://info.looker.com/google-bigquery/looker-and-bigquery-important-considerations-google-cloud-whitepaper)
* BigQuery Playlist [videos](https://www.youtube.com/hashtag/bigqueryspotlight)
* Data Analytics Playlist [videos](https://www.youtube.com/hashtag/datascienceandanalyticsaccelerators)
* Looker Channel [videos](https://www.youtube.com/channel/UC1AIN4pUKbLzzMg8RKprtgQ)
* Contact Google Cloud Support [site](https://cloud.google.com/contact/)
* Request a Free Trial [site](https://cloud.google.com/resources/looker-free-trial)

##### What's something cool you're working on?

Debi is planning her wedding!

{{< transcript "[THEME MUSIC] DEBI: Hello, and welcome to episode number 294 of the weekly Google Cloud Platform Podcast. I'm Debi Cabrera and I'm here with my colleague Mark Mirchandani. How's it going, Mark?" >}}

MARK: It's going well, Debi. I'm excited to have you on the podcast. This is your first time here, right? 

DEBI: Yes, my first time. I am very, very excited. 

MARK: And it's a ton of fun having you here. It's been a ton of fun having join our team. And of course, it's been a ton of fun recording this episode. 

DEBI: I couldn't agree more. I'm really personally pumped about this episode because today we're talking about Looker. I am a recent Looker transplant, as you know, and Looker is really what started my passion for data some years ago. I remember when I started using Looker, one day I actually said out loud, "Wow, data is cool." 

MARK: [LAUGHS] That's a real thing that you said. 

DEBI: That's a real thing that I said. Four words I never thought I'd say when I was studying environmental science. So it was just super eye-opening to me and so exciting. So like I said, personally pumped. And I'm also really excited because we have Leigha Jarett joining us today. She's a PM at Looker. She's previously also a colleague of mine. 

Some of you listening may already know her from some super awesome content she's created on our other Google Cloud channels. She's really knowledgeable about Looker and data analytics in general, so she'll share some great info with us today as well. 

MARK: Yeah, it's always a delight to work with Leigha. And yeah, this episode's fantastic because I haven't had a lot of background in working with Looker, so I definitely got the chance to learn a lot from you and Leigha about what Looker is, kind of some of the things that go into thinking about it. And I guess we'll get into it in that conversation, but it's a really cool one. 

DEBI: Yeah, absolutely. Great. So one more thing before we get into that main episode-- let's talk about some of the Cool Things of the Week. 

[MUSIC PLAYING] 

MARK: So my Cool Thing of the Week is, of course, from one of our great friends of the show, Priyanka, who is always working on really, really cool things. I think she really puts the "cool" in Cool Thing of the Week. And this time around, Priyanka is coming to us with a blog post about a Google Cloud Architecture diagramming tool. 

We talk a lot about architecture. Obviously, it's a complicated thing and there's a lot of different ways to represent it. Well, this is a new diagramming tool that Priyanka's been working on. I think the coolest thing about this architecture tool is the fact that you can draw your architecture, like you've probably seen before in different tools, but then you can click a button to deploy that architecture. Which is like [IMITATES EXPLOSION], right? Like, that's mindboggling that you can do that. 

And so this blog post goes through it, introduces a tool, and it kind of gives you a couple of starter architectures to work for. I think this is amazing, right? This is kind of like such a great evolution of how these tools can work together, and truly bringing new ways to work with technology in a way that I haven't seen before. I love it. 

DEBI: As a plus 100 to that, I actually used the tool the other day for the first time, and I was very impressed with it. So definitely check that out. My Cool Thing of the Week is a blog post about celebrating the success of Black founders with Google Cloud. This specific feature highlights DOSS and its co-founder Bobby Bryant. He is a "Forbes" contributor and a real estate expert who's transforming the industry through powerful analytics and conversational AI. 

As we all know, it's super important to create visibility for Black, Indigenous, and people of color. So I'm really happy that we're celebrating Black founders with this Google Cloud blog post. 

MARK: I don't think we can get enough of these types of posts that really celebrate these stories. I think they're all-- not only like a great story, because you can kind of hear what a person's journey is like as they work through what is obviously a very complicated system, but also it kind of gives you a little bit of inspiration to see how people are thinking about solving problems and creating cool business opportunities. The more of these, the better. 

DEBI: Great, OK. So make sure to check out those two blog posts. So now let's go ahead and get started with our episode. 

[MUSIC PLAYING] 

MARK: Debi and Leigha, thank you so much for joining us today. To get things started, can you give us a little bit of background on yourselves? 

LEIGHA: So my name's Leigha Jarett. I'm a product manager for Looker. I've been working at Looker/Google Cloud for almost four years now. So I'm excited to talk about Looker today. 

DEBI: Great. And I am Debi Cabrera and I'm a developer advocate and recent Looker transplant, where I was an engagement manager and then a program manager on the Strategy and Ops team. I've been at Looker/Google for also almost four years now. And I'm also really excited to be here today. 

MARK: And of course, as you both just mentioned, we're here to talk about Looker, which is something that some people may not have heard of, but was acquired by Google Cloud not too, too long ago. So let's get things started by just saying, what is Looker? 

LEIGHA: So Looker is our data analytics platform. Looker was really built to give these enterprise companies self-service data analytics. So the goal of Looker is to make it so that all the people in your organization are able to get data where and when they need it so that they're using this information to make better decisions for the business. 

MARK: And of course, this is not a uncommon space. There's a lot of different visualization, sometimes they're called business intelligence tools, and those are actually two different things, right, business intelligence and visualization? And you know, I want to definitely get into that. So you were just talking about, Leigha, unlocking the ability for basically companies to use data in a meaningful way. What does it actually mean, right? Like, why is it hard to use data and where does the business intelligence part come in? 

LEIGHA: Yeah, I can talk a little bit about my experience. Before I started working at Looker, I was a data scientist for Pepsi. One of the things I did was build out these dashboards for all of our different business stakeholders. And one of the big problems we had was that sometimes, one dashboard would give us one number-- you know, we made x dollars in sales this month-- and another dashboard would say a completely different number. 

And then you'd get to your quarterly business reviews and everyone's sitting in a meeting, and Diane is like, wait, I thought we made this much money, and Fred is like, no, wait. And then everyone just loses trust in all the data and no one uses data to make any decisions. So Looker really was kind of built to try to solve this exact problem. 

So Looker's secret sauce, which we call LookML, is like the heart of our platform. And the goal of LookML is really to allow these analysts to encode their business metrics and encode this logic in a single source of truth so that everyone is using the same calculations, no matter where they're trying to get that data or where they're asking the questions of the data. 

So this way, everyone is able to jump in, self-service, iterate on the different types of data questions they have, with this governed trust in the metrics that they're seeing. So I would say in the data analytics space, Looker really shines in that governed semantic model and giving people trust in their data. 

DEBI: Yeah, and to add on to that, when people trust their data, you can help better create a data-driven culture, and that's also something that we at Looker as a company push, but also wanted for all of our customers. Because we find that if you don't really have a central data strategy and you have a lot of legacy tools or tools that are giving you different answers, or you're making a lot of one-off SQL queries, it's a lot harder to make those data-driven decisions and trust those decisions. 

So when you're able to make a centralized enterprise or even team-wide BI platform that really serves as a source of truth, this allows companies to really be data-driven and make better decisions. And that's on the tech side and on the business side, so you're able to make business decisions every day that really are able to help you move your business forward in a way that you trust and know is a good decision. 

MARK: Yeah, I mean, it goes beyond just being able to visualize things. It actually goes into the intelligence side. And you mentioned LookML. Can you talk a little bit more about what that is and what kind of makes it unique? 

LEIGHA: Yeah, sure. So LookML, like I mentioned, this is a semantic layer. And I always talk to Looker customers and I refer to it as your data dictionary. So when you get started with Looker, you'll connect Looker to your database and Looker will talk to your database and actually try to auto generate most of the LookML based on your database schemas. And it will create different metrics for the different columns that you have in your tables. 

But then what it allows you to also do is create other metrics that are basically like calculated columns that are calculated at the query's runtime, and it allows you to do this just using raw SQL. So it's super easy to get started if you're already used to writing SQL queries against your database. So putting this all together, you the data analyst, you're using SQL to create this data dictionary, and Looker uses those definitions and those relationships to compile SQL queries on behalf of those non-technical users. 

So you can imagine folks from your marketing team, from your sales team, everyone jumping into Looker, clicking a bunch of buttons, and on the backend, Looker's using all that knowledge that you put into LookML to compile the SQL queries and send them back to your database. So I already mentioned how that's really great for, like, data governance and giving people trust. 

But it's also really cool because Looker's just doing the part of compiling your SQL query, but the computational power and your data is all coming from your database, which means that Looker works really well with modern database technologies like BigQuery-- shameless plug-- because they can handle huge amounts of data and process data super quick. So you get real-time access to all the data that you already have stored in a central location. 

DEBI: And I can totally vouch, as a previously non-technical person, to what Leigha is saying-- that having those capabilities at your fingertips, either when I was managing my projects or even when I'm looking at forecasting information internally, it is a game changer, just having that information available to you whenever you need it. 

MARK: Yeah it feels like one of the kind of more classic stories about visualization and business intelligence came from this idea of the, quote unquote, old school way of doing things was very much to generate these reports. They would be weeks behind or months behind, and then you weren't really able to do real-time decision making. And as technology has grown ever more prevalent, right, that becomes a big game changer for people to be able to see that. And so I'm hearing that that's a big part of what makes Looker such a great tool. 

LEIGHA: Yeah. I love that you're differentiating between, like, business intelligence and just regular reporting. And one thing I think that's really key with Looker is aside from just having self-service capabilities or the ability to look at a dashboard, is we're also just trying to infuse data into places that decision makers are already used to going. You know, like Looker integrates now with G Suite. You're able to consume your data in a spreadsheet environment, if that's where you're already used to doing your day to day work. 

Or you can send data automatically to a Slack channel or even just automate entire workflows, like automate a new marketing audience to be created in Google Analytics or in Google Ads. So it's not just about looking at these vanity metrics, but it's also about making sure people have access to data where they need it and also taking action on that information. So it's not just consuming data, but it's actually driving real business decision making. 

DEBI: Yeah, and I would even add that in a specific use case, like if your capability to be real time and have that be really up to date, especially if you're doing something where you're embedding or you're repackaging and monetizing that data with other customers, that is also super important for a lot of folks in those use cases. So also just a really great thing about Looker. 

MARK: Yeah, I want to touch more on this idea of how this integrates into the rest of the Google Cloud environment, because that's a really important part of hey, if I'm kind of working with a cloud vendor or multiple cloud vendors, having tools that work well together turns out makes things easier. 

But before we jump into that, there is an important kind of concept here, which is Data Studio is a Google tool that's been around for a while that's always been growing. It's a really cool way to do visualization. But I've heard from a couple of people that they're a little bit confused when it comes to, OK, there's Looker, there's Data Studio. How do I make some of the decisions between using one or the other, or maybe both? Can you talk a little bit more about what some of the thoughts that people might want to have when they're trying to decide? 

DEBI: Yeah. I mean, the way that I kind of look at the two tools is that they're great to use in different situations, right? So Data Studio is great for when you need some quick and easy to set up charts to demonstrate something, especially if it's understanding something that went on in the past and reporting it on that way and showing it. It also has a lot of interesting visualizations that can be used. 

And Looker is definitely a more involved setup and therefore more curated experience. So it's helpful for shaping the future with data-driven decisions because of the availability of that information. There's more ability to kind of create admin functions so you can control more who can see what. So that's really great, especially if you're dealing with really large volumes or sensitive data. And I'm sure Leigha can talk a little bit more to this, but just having that explore from here functionality, where you can ask that question right away. 

LEIGHA: Yeah. I mean, like right now, I talk to a lot of customers that are actively using both Looker and Data Studio in their organization because, like Debi said, they solve kind of different needs. Data Studio is super scrappy. I was looking at their website the other day and they have like 500 different connectors to different data pieces. Like, it's crazy. So I think it was really built with this idea that anyone could jump in and really quickly build a dashboard off of any data source and get those quick visualizations or quick answers. 

But where a Looker comes into play, like we talked about before, are those real govern, like enterprise-wide metrics. So someone might be able to create a quick chart, but you probably don't want to present that chart back to your CEO in the board meeting because maybe your calculation was slightly different than someone else. So Looker's modeling layer and having those governed business intelligence reports are really important for those verified reports that maybe you want to use for really important decision making. 

MARK: Yeah, I mean, it sounds like a big difference between, obviously, also making sure that everyone has the same form of data is also that same point you made earlier about the difference between visualization and intelligence. And then Debi, you mentioned an Explore. Can you talk a little bit more about what that looks like in Looker? 

DEBI: Yeah, absolutely. So the Explore from Here functionality is essentially you create your report, there's dimensions and measures that are pre-coded in by a developer or an analyst in your org, and as a user, you can select those, find your answer or the table or the visualization, and then you can actually drill into that visualization. 

So if you see revenue went down month over month, you can click in and say, Explore from Here, and you can actually look into why that happened, or start exploring some of the variables and understand maybe where that came from. Was it in a specific area of the country or of the world or of a city? Even I think down to zip codes, right? So it really gives you the ability to ask those next questions and understand where the root of changes are coming from. 

LEIGHA: I always talk to customers about how the dashboard is the starting place. So think about Explore from Here as exactly like Debi said. That's where the real magic happens, where you're asking those iterative questions. 

MARK: All right, last week episode was talking about data, data analytics, and looking at a couple of companies that were going through their data analytics journey. And a big quote that came up a couple of times was "breaking down data silos." I kind of feel like it's almost an overloaded term because it gets thrown around a lot, but not necessarily what that actually means. So with maybe excusing the marketing cheese a little bit, is it fair to say that Looker helps break down data silos? 

LEIGHA: I think it definitely does, but it really piggybacks off of the work that's already being done by these data warehouse and these data lakes. So one really cool thing about Looker is it started right when MPP, like data warehouses, just started to become a thing. So if you think about the evolution of databases, everyone had these transactional databases that were really good for, like, reading and writing one row of data at a time. But they weren't good for huge queries on tons and tons of rows. 

But then you saw databases like Redshift, BigQuery, Snowflake really start to come about, and that's where Looker really shines, because it sends these queries back off to your data warehouse. So what we encourage our customers at Looker to do is centralize that data-- break down your data silos by centralizing your data in that data warehouse. 

And I think we see this becoming easier over time because you see things like BigQuery offers federated query capabilities with other databases. Or you can store your data in a Cloud Storage bucket but still query it from BigQuery. So because Looker speaks SQL, we can just take advantage of all the other work that's being done under the hood to break down those data silos. So you've got a unified view of your entire customer when you log in to Looker. 

DEBI: Yeah, and I would add to that that not only does it help eliminate those data silos, but since it also has that admin functionality and permissioning, it also helps eliminate data chaos that might sometimes come when everyone has access to the same data. If it's not permissioned in the right way, it can create some data chaos. So it's also really good at eliminating that data chaos. 

MARK: Yeah, can you talk a little bit more about, because I haven't heard that term before, "data chaos." I think I have a good idea of what it might mean. I'm really curious to hear. 

DEBI: When there's chaos that's created because maybe everyone has access to the same data or everyone doesn't have access to the same data, right? So it can create chaos in two ways. But since we encourage people to centralize their data and you all have one source of truth with Looker-- everyone's looking at the same data-- then when you have an admin functionality, an editor functionality, or an explorer functionality versus just a viewer, everyone has different capabilities to do different things, right? 

Viewers can view the data and play around, explorers can create additional dashboards and things like that and really drill into the data, and admins obviously have more of those permissions to change and edit things. So everyone kind of has their permissions, and that means that everyone can use the data, but that there isn't chaos happening because of that as well. 

LEIGHA: I think just to summarize, a lot of customers get worried about combining all these data sources into one place for fear of it becoming this jumbled mess. But Looker tries to give everyone access to look at this data, but going back to LookML, only a few people at the organization likely have access to edit those definitions. 

So instead of everyone just writing their own queries and maybe having different definitions, you have this single source of truth so it doesn't become this crazy, chaotic environment, and you can actually get meaningful insights from all this data. 

MARK: Which I think naturally kind of leads into the topic that we were talking about before, which is how it integrates with the rest of Google Cloud or even just the cloud as a whole, because data comes from a lot of places and it goes to a lot of places, and it involves a lot of transformation. So what does Looker do that integrates well with the cloud? 

LEIGHA: So Looker has always been this API-driven, cloud native application. So for years, we've given our customers the ability to access their governed data through the API. And that's for use cases where maybe you don't want a Looker visualization or you don't need a dashboard, or we don't have something out of the box in our UI that meets what you're looking for. So you've always been able to use the API to create these custom workflows that bring governed data from Looker into other applications. 

But now, if you went to our user conference back in November, we talked a lot about the future of Looker and investing in this universal semantic model. So we've always known that LookML was our bread and butter, but now we're really focusing on making data that's governed through LookML accessible in other tools within Google Cloud and outside of the Google Cloud world, too, natively. So instead of you having to build your own connectors to other business intelligence tools, we're building it for you. 

We announced our connector with Tableau a couple of months ago, so you'll be able to create visualizations in Tableau. And instead of Tableau querying your database, it's just sending an API request back to Looker. And then on the Google Cloud side, like I mentioned before, we're investing a lot in integrating with Google Workspace. And we're still seeing what that integration with Data Studio will look like, too. 

MARK: Yeah, I mean, that's a really interesting way of looking at it. You know, it seemed weird to me that you could use Looker and Tableau at the same time, but they're actually building off of each other to create a really cool experience. 

LEIGHA: Exactly. Like, the thing about Tableau-- and I used Tableau for years. I still actually use it outside of work for things-- they have really, really awesome data visualization capabilities. Like, probably can't be beat by any other tool. You can make some really beautiful reports. And a lot of people just have deep experience using the Tableau interface, so they can iterate much faster than they might in Looker's UI. 

But we don't want to devalue LookML or have an organization feel like they can only have some reports in Looker and some data in Tableau. We want people to be empowered to still use LookML as their single source of truth, but get best in breed visualizations from whatever tool they feel best using. 

MARK: Yeah, I mean, this is kind of an interesting aside to think about, but when you have a company, especially one that's growing tremendously, or you do have one that's kind of being introduced to some of these new tools like Looker, like Tableau, and they really haven't standardized before, there's certainly a world out there where they're going to end up using multiple intelligence tools and multiple visualization tools. 

So you know, I'm really curious to hear if you all have any thoughts or stories about companies that have kind of gone through that journey, and what some learnings might be from that. 

LEIGHA: Well, I feel like every company that has more than, I would say, like 1,000 employees has more than one business intelligence tool. [LAUGHS] It's just inevitable. A lot of times what I'll see at these enterprise companies is they have their centralized data team, and maybe they have their best practice way of doing that. And those are usually the people that are actually investing in the data warehouse and maybe building out that Looker semantic model. 

But then you have product analysts or business analysts that report into those individual business teams, and they kind of just do whatever they want. They need to get answers for their business, so they may or may not go through the data team, depending on what that timeline or resources looks like. If we think of a hub and spoke model, the data team might be the hub, but then you have all these individual product analysts spokes that might be using a ton of different tools. 

So that's why it'll be really interesting, I think-- like I said, the Tableau connector is still being built, so I'm sure we have some people who are working on testing it. I don't know off the top of my head. But I think it'll be super interesting to see how those connections influence the relationship between that core data team and those spoke teams. 

DEBI: Adding onto that, I actually did work with one or two customers at the time that were using Tableau as the visualization layer and Looker as the semantic layer. And I'll say, it's so exciting, after a few of those projects, that this connector is being built because when you put the two together, there is really a lot of power and people really enjoy it. At the time, obviously we were doing kind of a workaround, because it was one of the few times that we were doing it. 

So some learnings. You know, Leigha talked about best practices, and I think in general, best practices for BI tools is really kind of creating some kind of data dictionary or a place where people know what each metric or dimension, or what each piece of data refers to and what it means. Because a lot of what we ran into was, oh, we're building this in the Looker semantic layer in LookML, but it's called something maybe completely different in the Tableau visualization, right? 

So when we were bringing it together, it was doing a lot of cleanup for that reason because when you have clean code, obviously you have a much more successful use of the BI tool. And also then the people that are using it-- right, the end users, whoever that might be-- enjoys using it a lot more. Like Leigha said, TBD on what exactly the connector will look like, but that was one of the big learnings when using those together. So I'm sure that that will help with that. 

MARK: Yeah, I'm sure that as time goes on, companies and especially large enterprises are always going to find more and more ways to make things more complicated. But it's because they need to actually have access to really powerful tools. And so I'm really excited to see what this connector looks like. It sounds like obviously it's still being worked on and people can probably find out more information as it gets worked on. 

But let's take a step back and talk about BigQuery, right, because you had mentioned that before, Leigha, as a great tool for hooking up to Looker. Do you have any high level advice on, OK, I'm working with BigQuery. How do I now start working with Looker? 

LEIGHA: Well, I actually wrote an entire 20-page white paper on it. So I'm happy to send it to you to put in the notes. But I think the nice thing is that Looker was built off of having these scalable super performant data warehouses, which I imagine that's one of the reasons why Google Cloud acquired Looker is because Looker and BigQuery work so well together. 

But a couple of things that I think are really exciting. First off, just in general, because we're part of the same team, our engineering teams collaborate really closely on ensuring that queries generated from Looker are optimized to work well on BigQuery. BigQuery computes things different than any other database would because it's built on different technology. 

So we've worked really closely, especially with teams like BI Engine, which is a BigQuery feature that allows for basically like in-memory caching of certain queries or encoding of your data to make your queries run faster. So our team worked really closely with the BI Engine team to make sure that queries from Looker could be really well optimized by BI Engine. So that's one thing. 

The next thing is because this SQL-based modeling layer, LookML, speaks the same SQL dialect as your data warehouse, you can take advantage of any SQL functions that your database offers. And we're lucky enough to have a database that has the best machine learning capabilities in the industry with BQ ML. 

And it's all written in regular SQL, which means that in LookML, you can create machine learning models. You can run predictions. You can analyze the efficacy of your machine learning models without ever needing to leave your BI tool, which is something that you really can't find anywhere else. 

And the third thing, I think, is really just taking advantage of some BigQuery specific features like partitioning and clustering. BigQuery customers love them. Materialized views-- people use them all the time. So we've built in specific functionality in Looker so that when you're writing derived tables or aggregate tables back to BigQuery, you can take full advantage of optimized partitioning, clustering, materialized views. So that's just another way that we're really focused on making sure that Looker and BigQuery speak well to each other. 

The last thing I'll mention is that we also have the ability to connect to BigQuery using OAuth, which means that your user identity is passed back to BigQuery. So that's really useful for enterprise companies who maybe have lots of BI tools, like we talked about before. They want to set their positioning for data warehouse objects at the database layer because they don't want to set Tableau permissions, Looker permissions, Power BI permissions. So it's really nice that Looker can pass through your user identity so that BigQuery can decide whether or not you should be able to query this data. 

MARK: And I think a natural kind of follow-up to that is-- we've talked a little bit about it, but what would be some of the top tips that you can share for people who are just getting started with Looker as a whole? 

DEBI: I can kick that off, more like on the value side, right? And this is for Looker, but also for BI in general is-- and maybe life-- what's the value that this is really going to bring you? What's the why? And the thing that we really try to focus on is, is it going to help you cut costs, is it going to help you increase revenue, or is it going to help you decrease risk? 

Because when you look at all the issues that you're solving for when you're getting a BI tool, it usually comes back to one of those three, because that's what helps businesses improves and that's what help you move. So when you're tying your use of a BI tool back to a positive business outcome, that really helps you be successful. 

And in addition to that, it helps a lot of the time integrate the views of the tech side and the business sides of companies. Because at the end of the day, a lot of the time, the business side pays for the tech side. So you want everyone to kind of have the same goal to really be successful so you're all going towards the same vision. 

LEIGHA: Yeah, I couldn't agree more. Whenever I talk to customers, I'm like, OK, so you're going to build this dashboard. Now what are you going to do with that? Is it just going to sit here? Like, who's going to be accessing it? If they see that this number went up, what are they going to do with that information? And if the answer is nothing, then it's probably not worth the time and resources to build it. 

But another piece of advice that I'll offer for people getting started-- I was just speaking with a senior vice president of engineering at this late stage startup the other day, and they bought Looker when they had a one-person data team. And I was asking him about his evolution with Looker and what advice he would give to a startup just starting to invest in their data stack. And he was like, you just need to get started. 

A lot of people I think hear, OK, we need to centralize our data, and then they're like, all right, we need to set up 20 different pipelines from all of our data sources, and we can't do anything else until we have every single one of our data sources centralized. But realistically, start small. Prioritize based on what Debi was saying, like the business value. 

And you can just start with adding one source to your database and building a dashboard off of that, and now add the second one and then add the third one. So people often feel like It's going to be this huge, huge project, but you can start small and learn from those experiences. 

DEBI: I completely agree, and that's so cool that you asked that SVP that. Because we're watching the growth, right, of someone who's used Looker from the beginning. Maybe on a more kind of tactical side, I'd say something that we've seen really helps customers be successful is dedicating at least one person, ideally maybe 50% of their time, to Looker to really understand it and then ensure that the platform succeeds in the company. 

Because LookML is great, but you do have to learn it. It's a foundation that you have to learn, and then once you learn it, I know that analysts really love it because of its flexibility and all the stuff that you can do with it. But really dedicating that time for someone to really understand it, and then also dedicating enablement and maintenance to it. You know, whether that be office hours once a week or training sessions or we have a lot of great partners that we work with at Looker that can really help you get started or give you and your team enablement sessions. 

If you have maybe an enterprise-wise use case or you're a much larger company and it's really complex or something like that, we also have a professional services team on the Looker side that can help you with that. So just making sure you dedicate that time to nurture your new BI tool, your baby, because that's how you'll help it succeed, is really taking care of it and nourishing it. 

LEIGHA: I just think that's awesome advice. 

MARK: I love that, and I feel like that was way even more than I was asking for because it's such a tremendous value in making sure that you have a reason for doing this. Because if you don't have a good reason for it, you might buy a tool and then there's no purpose to it, and you end up just kind of calling it a failure but you never really thought through those plans ahead of time. 

Second, this idea-- we've seen it coming up a little bit more and more in recent times-- this kind of crawl, walk, run idea, where you're not trying to dive into the deep end or you're not trying to just hit the ground with every single thing all captured into your business intelligence. You have to start somewhere and work your way up. But that also takes that proper investment, right? You can't just buy this tool, give someone like, hey, you got four hours to get this tool up and running and expect that to be successful. 

DEBI: Amazing summary. That was great. 

MARK: I wanted to make sure I captured that because that's really good advice. And I mean, obviously that advice is important not only for Looker, but also for a lot of things. Like you were saying earlier, Debi, just in general in life, right? Like, you should really have the intentionality to understand why you're doing these things and then to follow through with them. Otherwise, they're naturally going to be a failure or could be a failure in a way that you weren't planning for. 

So unfortunately, we're just about out of time. But before we wrap up, are there any places that y'all would recommend to look for more information, for training, where can they go to learn more-- those kinds of things? 

LEIGHA: Well, so if you're interested in trialing out Looker, we'll send over our request, a trial, a request a demo form, where you'll be able to speak with someone from our sales team who can tell you all about Looker. And if you already have access to a Looker environment and you're interested in getting ramped up on different skills, we'll also send along some skill boost and training courses. And you'll probably see my face in a lot of them because I recorded them all a couple of months ago. So if you have feedback, let me know. 

DEBI: Yeah. And I would say there's also our Looker product page on cloud.google.com. There's Google Cloud Training. We have Skills Boost Training. And we have a lot of docs, so we'll provide all those links. 

MARK: A whole list of links in the show notes for people who are interested in learning more. And I think, kind of like you just said, the best way to get started is to get started and try playing out with it and kind of figuring out from there. 

LEIGHA: Exactly. 

MARK: So before we wrap things up, is there anything else that we didn't get a chance to mention that y'all would like to call out? 

LEIGHA: I would just say that I'm always looking for feedback on the Looker product. So if you do have feedback, suggestions, feature requests, please find me on LinkedIn or Twitter and send me a message. I'm always eager to hear that. 

DEBI: I'll plus one that. Reach out to me on LinkedIn. TBD on the Twitter-- it's coming one day. But I just say always back to that value. Mark summarized it so well, but just think of whoever the customer is, even if it's just you, how would they be better off with this? How is this going to add value? And just to reiterate, the idea of the data-driven culture. At Looker, we would always say we eat our own dog food, because we would really push people to use Looker to make the decisions for their everyday job. 

Like I said, I used it to track my projects, to understand how much revenue I was affecting, to understand maybe even how much time was left in my projects, what could I do to help my customer depending on where they were? And thinking about how the business is going to use this, so if it's the store manager that needs to figure out staffing, they can look at how many customers did I have in my last rush? Or if it's a franchisee who's trying to figure out how many tomatoes are being wasted, they can really see all that information. 

And that creates a culture based off of data, right, where you can make data-driven decisions. And really, in my opinion, and I think maybe all of us here, that's kind of the best way to make business decisions, right? It's making business decisions every day and it's really just an incredible tool to have at your fingertips. 

LEIGHA: When you're thinking about how to make your company data-driven, I would say the biggest thing is lowering the barrier to entry. So going back to what I mentioned before, that's why we really focus on trying to make data accessible in other tools or in workflows. It's unreasonable to expect that an account manager it's going to log into Looker and look at this dashboard every day. So how do you deliver data to where they're already spending their day or spending their time? And then I think you'll see a lot more success. 

DEBI: Yeah, and it's really cool, actually, all of the different data experiences that you can create with Looker and using other tools-- apps, using APIs to do really cool stuff. We have some customers that have even surprised us by what they've done. So plus 1,000 to what Leigha said. 

MARK: Well, I love that, right, because that's kind of the key message here is that data is powerful, and used correctly, it really is transformative. I don't like that word because it's very blah, blah, blah. But it is truly a key part of making a business successful, and the more you can lean into a data-driven culture, it sounds like the better off you'll be. 

Well, Leigha and Debi, thank you so much for coming in. I learned a ton about Looker and of course, like we said before, there's going to be a whole bunch of links in the show notes for people who want to learn more about Looker or get started using it. So make sure to check those out. 

LEIGHA: Awesome. Thank you. 

DEBI: Thank you. 

OK, that was a great episode. I know I've been re-reminded and inspired of all the cool possibilities with Looker and BI in general. What would you say is the most interesting thing you learned or heard today, Mark? 

MARK: You know, I learned a lot about Looker, because I've had a little bit of experience with it. Leigha and I worked on a dashboard in Looker that represents Google Cloud costs and being able to analyze it. I think the core message of that entire interview was data is good, right? Data is cool. 

But really, I loved the point you made about making sure that you're bringing a lot of intentionality to why you're experimenting with a new tool. I thought that was a really fascinating thing that we don't talk about too much. There's always cool technology out there. There's always fun things that people can do. And they may be novel or interesting, but unless you're really bringing a purpose with them, then it's just a cool thing. Then it's not really a reason to actually invest and spend the time in it. 

And I thought the points that you made and that Leigha made about how do you follow that up and how do you be successful when bringing these tools into your business, I think that was kind of my favorite part, because we really get to hear, how do you think about bringing Looker in and how is it actually going to help you solve real problems? 

DEBI: Yeah, definitely. I mean, I would say it 100 times if I could, so I'm glad that you enjoyed that. It's great. It's really one of the foundations, you know? I did at the time a lot of enablement for our sales team. I would enable and help my own team when I was an engagement manager, and worked with the Value and Insights team a lot, actually, to kind of get this through in all of our messaging and enablement of value, right? Like what you're saying-- what are you really getting out of this? So that was great. 

I think I mentioned in the episode, but I will reiterate, I'm really excited about those connectors that are coming out. Not just the Tableau one, but a lot of the other ones, because it's just going to integrate Looker so much better with a lot of things. In particular, we can talk about Tableau because originally seen as a competitor a lot of the time. 

And we had a few kind of pioneers, if you will, at Looker that said, well, can we do both? And that also really pushes the product and makes us kind of see what it can do. So really interesting ways to use it. And just as the product continues to develop, it just becomes cooler and cooler and more useful and brings more value. So that was a really exciting moment for me. 

MARK: I mean, it's such an interesting concept because I don't feel like we talk too, too much about it out loud, but I think everyone kind of knows that when you're developing a product or a solution, it's one thing to develop it and kind of say, this is what we think it's going to do, but it's a whole separate thing to see how people use it and what they come up with. 

Because that can really-- and obviously, that's a big part of being a product manager is understanding your customers' feedback, not only from like, oh, where is there some friction or where is there some difficult parts, but also like oh, we actually are just going to use Looker for the actual LookML part, but we still want to use this other visualization tool. And I'm sure Leigha and all the other PMs there were like, oh, that's a really cool idea. How can we make that more successful? 

DEBI: Yeah, I remember even when you talk to the people that were in Looker when it was five, 10 people, they would say, oh yeah, I remember when Looker didn't even have visualizations, where it was just the semantic layer and the LookML. And even then we had people really excited about using Looker. So just seeing how the product has progressed over seven years, something like that at this point, and what our customers have pushed us to do with the product is really, really just interesting and cool. 

MARK: I love to see it. And of course, there's all these great resources that we're going to have in the show notes for people who want to learn more and get started with Looker. Because we talked about that a lot in the interview, too, but what's the best way to get started with a product like this? And it's just to get hands-on and try it out. 

DEBI: Yeah, absolutely. And I will say from personal experience, sometimes it can take one or two minutes to get it. But once you get it, oh, it's magical. I mean, SpongeBob with rainbow hands magical-- 

MARK: Wow. 

DEBI: --right? Like, it really was life-changing to have all that capability at your fingertips. So really encourage people to check it out if they can, and not just from a biased point of view. 

MARK: Not just because you worked there, but because it's actually cool. 

DEBI: Right, exactly. Exactly. 

MARK: Well, Debi, it's your first time on the podcast, so I am obligated to ask, what have you been working on? I mean, I'm sure you've got tons of exciting stuff. 

DEBI: Oh yeah. I'm definitely working on some work stuff that is kind of in the early stages, so I don't want to give it away just yet. But something that has actually been soaking up a lot of my time-- after work, of course-- is planning my wedding. So I got engaged in October. Yeah, woo-hoo. Mark is doing a little dance in the back here, so that's exciting. 

I keep reminding myself that I should treat it like play, and it's something that I am fortunate enough to get to do, you know? So any time when I get down and I was, oh, I have to do this thing, well, you know what? I'm fortunate because I get to do it. And I treat it like fun, and then it's not as bad. 

MARK: That's a really cool perspective that I hadn't really thought of before. Right? Like, it is thankfully a luxury to be able to go through and plan a wedding. So that's kind of a cool thing. I like that. 

DEBI: You know, if we could look at more things in life as play-- I think you and I have talked about this before, how our job as developer advocates is so fun. And of course, there will always be parts of things that we do, especially of jobs, that we don't enjoy, right? A lot of administrative stuff sometimes. But doing something that is so fun and treating it as such really helps get through those parts that maybe aren't as fun. 

MARK: That's pretty much it, right? Being a developer advocate is a lot like being married. 

DEBI: [LAUGHS] 

MARK: But the reality is, it is a ton of fun, and of course, I think it's important to say that we wouldn't be able to do this job without, of course, the support of our developers and technical practitioners and people listening to this podcast as we speak. 

DEBI: That is so true. At the risk of sounding corny, I always say, you know, it's because of you all that we get to do this. So thank you. Thank you a million times in 10 different languages. 

MARK: [LAUGHS] Yes, of course. Thank you to all of our listeners, and we'll catch you all next week. 

DEBI: Have a good one. 

[THEME MUSIC]