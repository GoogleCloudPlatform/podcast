+++
audioDuration = "00:43:49"
audioFile = "Google.Cloud.Platform.Podcast.Episode.293.mp3"
audioSize = 105160115
categories = ["Data Analytics", "BigQuery"]
date = "2022-02-16"
description = "On the show this week, Mark Mirchandani and Stephanie Wong share two popular episodes of Bruno Aziza's YouTube series Data Journeys."
draft = false
episodeNumber = 293
hosts = ["Mark Mirchandani", "Stephanie Wong"]
title = "Data Journeys with Bruno Aziza"
image="/post/episode-293-data-journeys-with-bruno-aziza/images/hero/hero-EP-293.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/su27yo/episode_293_data_journeys_with_bruno_aziza/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

On the show this week, [Mark Mirchandani](https://twitter.com/markmirch) and [Stephanie Wong](https://twitter.com/stephr_wong) share two popular episodes of [Bruno Aziza](https://twitter.com/brunoaziza)'s YouTube series Data Journeys. 

First up, Bruno talks with Aaron Biller of Postmates about their triangle of complex data that includes customer, courier, and merchant. He details their data storage and analytics structure, describing it as a reverse pyramid of tons of data with few engineers to manage and analyze it. To handle this, Postmates takes a stay-out-of-the-way approach by providing good data and letting the analysts do what they do best without micromanaging. Aaron talks about this data architecture, including the use of BigQuery as data lakes to keep data storage simple, and how Google collaboration tools streamline access and authorization tasks. Communication and flexibility are important, Aaron tells us, and he offers other advice for companies designing data systems. Feedback loops, dedicated training, and an open environment with no silos also help foster a productive, healthy data workplace.

Matteo of Delivery Hero speaks to Bruno next. With the goal of increasing their global reach and offerings, it's important that Delivery Hero has a smooth data system. Matteo outlines the new data structure they've built to ease onboarding of new companies and territories and describes different use cases for their data. From determining the number of delivery people necessary in each area to offering personalized customer recommendations, Delivery Hero uses Google offerings like Google Analytics and BigQuery to interpret collected data. Matteo details how they tailor data infrastructures for each use case and offers tips to help companies think through their data infrastructure design. Don't work in a bubble, Matteo stresses, and focus on thorough onboarding of team members and clear communication with colleagues and customers.

##### Bruno Aziza

[Bruno](https://twitter.com/brunoaziza) is the Head of Data & Analytics at Google Cloud. He specializes in everything data, from data analytics, to business intelligence, data science, and artificial intelligence. Before working at Google, he worked at companies like Business Objects when it went IPO and Oracle, where his team led a big turnarounds in the business analytics industry. Bruno also had the opportunity to help launch startups like Alpine Data (now part of Tibco). Sisense and AtScale and helped Microsoft grow its Data unit into a $1B business. He has been educated in the US, France, the UK, and Germany and has written two books on Data Analytics and Performance Management. In his spare time, Bruno writes a monthly column on Forbes.com on everything Data, AI and Analytics.

##### Aaron Biller

Aaron is the Manager of Data Engineering at Postmates.

##### Matteo Fava

Matteo is Senior Director of Global Data Products and Analytics at Delivery Hero.

##### Cool things of the week

* Celebrating National Muffin Day with machine learning [blog](https://cloud.google.com/blog/topics/developers-practitioners/celebrating-national-muffin-day-machine-learning)
* Managed Istio-based service mesh on our managed GKE clusters: Anthos Service Mesh comes to GKE Autopilot [blog](https://cloud.google.com/blog/products/containers-kubernetes/managed-anthos-service-mesh-on-gke-autopilot-clusters)
 
##### Interview

* Data Journeys [videos](https://g.co/cloud/datajourneys)
* Episode 12: How Postmates delivers on data needs with just six data engineers [video](https://www.youtube.com/watch?v=OpWBgqeoBNE)
* Episode 5: How Delivery Hero uses data to deliver meals [video](https://www.youtube.com/watch?v=aoN8z2YoOMw)
* BigQuery [site](https://cloud.google.com/bigquery)
* Google Workspace [site](https://workspace.google.com)
* Dataproc [site](https://cloud.google.com/dataproc)
* Pub/Sub [site](https://cloud.google.com/pubsub)
* Google Analytics [site](https://analytics.google.com/analytics/web/provision/#/provision)
* Looker [site](https://looker.com)
* Tableau [site](https://www.tableau.com)
* Data Studio [site](https://datastudio.google.com)
* GCP Podcast Episode 266: Data Analytics Launches with Bruno Aziza and Eric Schmidt [podcast](https://www.gcppodcast.com/post/episode-266-data-analytics-launches-with-bruno-aziza-and-eric-schmidt/)
* GCP Podcast Episode 281: Google Cloud Next Data, Analytics, and AI Launches with Eric Schmidt and Bruno Aziza [podcast](https://www.gcppodcast.com/post/episode-281-google-cloud-next-data-analytics-and-ai-launches-with-eric-schmidt-bruno-aziza/)

##### What's something cool you're working on?

Steph is working on the next Ask Google Cloud event and she wants your Kubernetes questions!

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, everyone, and welcome to episode number 293 of the Weekly Google Cloud Platform Podcast. This is Stephanie Wong, and I am here with Mr. Mark \"Money\" Mirchandani." >}}

MARK: [LAUGHS] The "Money" nickname has not caught on yet, but let's just keep drilling it in until it does. 

STEPHANIE: You keep resisting, and I just-- I'm going to make this happen. 

MARK: I guess I'm just not money enough for this nickname. Or I don't feel like I'm money enough for this nickname yet. 

STEPHANIE: It's happening. It's happening slowly. So, Mark, what are we talking about today? 

MARK: Well, today is not a normal episode. It is an extra special episode because we have a great guest. Well, I guess he's a guest. But in this case, he's actually the one doing the interviewing. 

We have Bruno Aziza who has been on the podcast a little bit last year when we were talking about all kinds of data and analytics launches, which makes sense because he's the head of data analytics. And he actually has his own show on YouTube called Data Journeys. We're going to make sure we put a link into the description. 

But this episode is extra special because we are going to be featuring two of his conversations with different folks from-- in this case, we're talking to Postmates, and we're talking to Delivery Hero, which are two of his guests who come on to talk about their data journeys. So Bruno does a great job of interviewing them, and we'll get into it. But this is going to be super cool because I don't think we've done this too often, and it's always amazing to hear conversations from folks about how they actually thought through, planned out, and then created their cloud architectures. 

STEPHANIE: Yeah, yeah. And Bruno is fantastic. I've worked with him many times in the past. He just truly understands how to uncover the key themes at companies that are really facing their own challenges and triumphs with data analytics. He's previously worked at some pretty well-known companies in data analytics, as well. 

So he's been a great host, and I've also been able to interview him. So yeah, get pumped for the next two little tidbits that he's hosting here. But before we jump into that, why don't we go ahead and talk about some of the cool things of the week? 

[MUSIC PLAYING] 

MARK: Today, I have an amazing cool thing, quite possibly my favorite cool thing, because I learned that there is a National Muffin Day. Which in itself is super cool. 

STEPHANIE: Muffins! 

MARK: However, I'm sure there's people out there who don't love muffins. I respect your opinion and disagree with you. Muffins are fantastic, and we have a great little article put together by, of course, one of our favorite people. And I'm actually pretty sure the lead global expert in baking machine learning-- that's probably not official-- but Sara Robinson, who is an awesome, amazing person and has done quite a bit of work in baking and machine learning, has put together an article celebrating National Muffin Day, which is coming up on February 20. Not too far, so get your muffin tins ready. 

But basically, Sara and Jacob walk through an example of creating a machine learning model for baking muffins. And this is something that Sara has talked about before on Twitter and on various mediums, actually, that works through how do you actually create this model and how do you get it to predict and then kind of serve up these different recipes for different ingredient amounts, and then the steps to put a muffin together. 

So the article goes through that, and then it gives you a muffin recipe. So it's kind of my favorite article that I've ever seen, and I'm super excited to hopefully get baking with some muffins later this month. 

STEPHANIE: Yeah. I mean, if it's not her official title yet, I definitely think when it comes to baking and AI, she understands the assignment and she just executes. Because Sara has also partnered with Mars Wrigley, the confectionery that we all love. And last year, she created the world's first maltesers AI cake with them. So she has plenty of experience in this area. So go ahead and check out that article with Sara for Muffin Day. 

Now, my cool thing of the week isn't quite as sweet, but it is still equally as exciting because now we have a managed Istio-based service mesh on managed GKE clusters, which we know is called GKE Autopilot. So just to give some background, microservices, as we know, bring numerous benefits, but also can introduce complexity and fragmentation. So managed ASM simplifies service delivery by providing traffic management, telemetry, and secure communications between services. 

So now you get this all with GKE Autopilot for this fully managed end-to-end solution. So you can focus more on your applications and, again, less on the infrastructure. So that means that Google manages the upgrade and lifecycle tasks for cluster and service mesh. So that means that you can also take advantage of more advanced capabilities, like security and layer 7 network policies provided by the mesh. 

MARK: It's always exciting to see stuff like this because it's really true that Kubernetes is amazing, and it's super complicated. And I love to see all the kind of things that I never would have thought about even being possible. But then GKE Autopilot came out and lets you still capture all of that configuration and so much of the cool stuff you can do, but really reduces the complexity. 

So this just seems like another step in the right direction to bring Anthos, which is just all the different pieces of Anthos. It's very complicated, but it's very powerful. And so how do you bring that into more people's hands? And it's stuff like this, bringing the service mesh onto GKE Autopilot. I'm sure we're going to see tons of great stuff down the road where they just keep bringing in these features, but really making it a lot more easy to access. 

STEPHANIE: Yeah. Again, moving it towards higher levels of abstraction when it comes to things related to infrastructure. GKE Autopilot was a major milestone in that direction. And so it's only expected that we're going to see more of the ecosystem, including at Anthos Service Mesh, being added on to the feature set for GKE Autopilot. 

Now, switching gears a bit, we want to get started with the conversation with Bruno. This is more about data analytics and some great customer examples with Google Cloud. The first conversation is-- I mean, I would say, becoming a household name, especially during the pandemic. 

MARK: Yeah. So first up, Bruno brings on Aaron, who's the manager of data engineering from Postmates. Certainly a company that has, I'm sure, grown a tremendous amount. And really, this conversation-- we'll talk about it after the conversation as well, but this conversation is really helping us understand what did Postmates think about-- what are some of the decisions they made when they look at how do we take our team, how do we take our data, how do we take the products inside of our team, and how do we get all those groups working together nicely. I think we should probably just go into the conversation, right? 

STEPHANIE: Let's do it. 

[MUSIC PLAYING] 

BRUNO: Today, I'm excited for you to meet Aaron. Aaron is from Postmates. Has been there for almost six years. And he's learned a ton from the way the business has grown, as well as from the way they have used the data. So he's going to tell us a little bit about its secrets. 

Aaron, thank you so much for taking the time to talk to us today. In case people don't know, tell us first, what is Postmates? 

AARON: Yeah, of course. Great to be here, thanks. So Postmates is an on-demand delivery platform. It's recently become a part of the Uber family. So from a data and analytics perspective, all the deliveries that happen on Postmates happen in what's kind of called a three-sided marketplace. 

So every delivery has a customer, a courier, a merchant. So then all of our analytics is also going to be three times as complex. So we've had to approach data analytics at Postmates in a flexible way because things are changing so quickly. And like you said, because of the growth, we've had to react to that internally, which is a good problem to have. But it's a problem nonetheless. 

BRUNO: So your team has a big job to accomplish. You've got 1,000 employees. You've got 40 product analysts. You only have an engineering team of about six people. So talk to us about the use cases that you drive and the amazing service that you're driving to the rest of the organization. 

AARON: I don't think this is unique for us. I've heard a lot of other companies mentioned that inverse pyramid model where you have a broad company, tons and tons of data, a big analytics org, and just this tiny, little group of people that are maintaining the data pipelines and keeping everything afloat. So we have that same experience. 

And the way that we've accomplished that is by kind of getting out of the way. So we understand that our analytics team is full of really intelligent people who are doing their best to produce interesting analyses from the data that we have available. So if we can get it to them in a reasonable way, in a reasonable time frame, they can kind of take it from there. 

So we maintain an air flow instance internally that runs about 200 or more data pipelines in transformation pipelines that all feeds into our data warehouse in Google BigQuery. And that is heavily contributed to by our analytics and engineering machine learning data science groups at the company. They use that to maintain their data pipelines. And the data engineering team supports the infrastructure itself that keeps things running. 

And we're able to support this kind of organization by not being a single point of failure, by not being that bottleneck to progress. We keep the data flowing. We keep the infrastructure running. And everybody else can kind of do what they need to do to get their work done without us having to get in the way. 

BRUNO: So you have, you said, 200 data pipelines. You've got 35 or so external and internal data source and database coming into the mix as well. And over 650 event streams running through Kafka. So tell us a little bit more about the type of analysis that's enabled and how you think about your data pipelines. Are you are you staging this in a data lake? Or are you using BigQuery as your data lake? How do you think about your architecture? 

AARON: We use BigQuery as our data lakes. This is one of the things that we really like about that product, is that it allows us to avoid that kind of extra layer of complexity by having to store the raw data in a separate place and then query externally. So we keep all of our raw data, for the most part, that we just bring in from our internal databases, primary data sources from within the company that powers all of our applications and microservices to all of the external data sources and third party vendors that we use across sales and customer support and marketing and that kind of stuff. 

All of that gets pulled into this primary project that we run in BigQuery. And for the most part, everyone kind of gets read access to that by default. So one of the things that's been really great about doing this in the Google infrastructure is we don't have to maintain a separate authentication flow. 

If you're a part of the Postmates organization, which is done through G Suite, you get access to your data. We can give access to data through Google Groups, so it's all hands off. Everything happens automatically. 

So when someone joins the company, they can get in right away and start digging around in the data and exploring things. To make it easier for folks to get started, we have a separate project that has all of our primary reporting tables and data sets that lives there. Some of those are maintained by the core data engineering team, and some of those are maintained by the various teams. 

At the end of the day, there's far too much in a company like Postmates for any one person or one group of people to keep track of. So again, we've used that model of providing the infrastructure and allowing those who have the closest kind of institutional knowledge of their product area to build data sets that can be used and seen by everyone else. 

So we put some kind of lightweight processes in there as well of just validation and testing. And we use the self-describing tables with column descriptions and table definitions. So again, it's easy to kind of come in, whether you're brand new or you've been here for five years and you're exploring a new area, you can see kind of what people are querying from and what they're using. So yeah, it's nice having everything there in one place. 

BRUNO: This is quite amazing. So you've built a system that not only is bringing in a lot of data, but it's accessible to a lot more people as your company is growing, and it's all integrated. It's of the secure self-service system you've created. 

Now, across these six years you've been there, you have learned a lot about what people should do and people should not do. Share with us some of your-- maybe let's start with the positive. Share with us some of your best practices. 

AARON: I would say, nothing here is going to be rocket science. This is all basic stuff. But when you're in the mix day to day, it can be easy things to forget. So the biggest one that I have seen play out time and time again is that communication is the most important thing. 

Having a unified vision of what you're trying to accomplish and making sure individuals understand that. Smart people given not very many tools to work with, they'll MacGyver their way to a solution. So if you aren't communicating about where to go and what to do, folks will tend to reinvent the wheel unintentionally. So communicating not only externally, but allowing channels for folks to communicate with you about what they need and doing those kind of listening tours, in a sense, whether it's office hours or one-on-one with analytics leads and engineering leads around the company. That's the easiest way to stay in tune with how you're doing it. 

So one of the things that we've done recently that I wish we would have done sooner. We've gone to a distributed data engineering model. So we've split our six-person team in half. We have three people who are on core data engineering, and three that have been vetted out into product teams across the company. So they are right there, close up with the products and features that are being shipped and the applications that are producing and consuming data. 

So they can not only advise those teams, hey, here's what's available and how to use it. But they can come back and advise the core team, hey, here's what's needed. Here's what we should be building. Here's some use cases that we could really solve and unlock potential. So that's been huge, and that all kind of goes back into that communication side. 

The other two pieces, I would say, are flexibility. Don't lock yourself into a solution where you can't get out of it. Needs will change. Things will scale. And migrations are very expensive, both technically and from an organizational perspective. 

And the final one, I would say, is just start small and prove it out. You need to have a test case. No matter how great your solution is in your head, it may not meet the demands of what your users are trying to get out of it. So all of those play together. I think having a healthy feedback loop, both for yourselves and for your users, goes a long way. 

BRUNO: I like how you have your both distributed and embedded data engineering teams. And you split them right in the middle. There's also one thing you told me about earlier, is this idea that your data engineers actually used to be data analyst. So you've been able to mature them into that profession. 

Would you think that's a best practice? And if so, what did you do? Did you get them into training? How would an organization do that? Take an analyst and then help them become a data engineer. 

AARON: Yeah, that's a good question. I mean, so I found this to be the case when I've been working in a recruiting capacity. Someone can be called a data engineer. And depending on the company that they're coming from, they may be a data engineer because they're the one person at their company who happens to write some Python. So they've done it all, right? They keep swapping hats between being an analyst and writing some code and that kind of thing. 

So that was sort of what happened for us, right? Postmates grew very organically in a business sense, and we did the same thing internally. I used to be an analyst at Postmates. I think everybody on my team, for those who moved into data engineering and those who we hired into data engineering, were all analysts at some point. 

This is not the only way to do it. There are certainly cons to having a uniform group of talent in any particular team. Variety always comes with some benefits. But I would say one of the biggest things that's been valuable for us is understanding what it looks like to use data, and how that process feels when you have what you need and when you don't have what you need. 

It also gains you a lot of credibility with the customers, the internal customers that we're working with, because they know that we've been in their shoes. And when they say, hey, I'm running into this issue with this query and whatever it is, we know SQL and we can fix it for them. We can help them out with it. And we can kind of hear what their feedback is, I think, in a more specific way. So that's been huge. 

I mean, growing a team like that, growing an analyst into an engineer, the biggest challenge is getting them to stop thinking like an analyst and start thinking like an engineer. That may seem to contradict what I just said, but an engineering problem that's very different than an analytics problem. Putting folks-- 

BRUNO: How do you teach them how to do that? Do you have the Postmate data engineering school? Or is it something that you learn by making you guys work together? 

AARON: It's the School of Hard Knocks. You learn by doing. So one thing that I will say that's been really valuable is everybody at Postmates has been really, really open to sharing knowledge. We don't really operate in silos. I mean, this is a comment for just the broad engineering org at Postmates and the leadership there, is that it's a very open environment to say, hey, I'm trying to do this thing and I don't know how to do that. Can I look over your shoulder? Can you help me out? 

So somebody who has been an engineer for two weeks can go to one of our core infrastructure tech leads who's been running Bash scripts and Perl scripts for 15 years, and they can sit down together and code out a problem together. And that is invaluable to expanding the worldview of someone who's trying to become an engineer. Yeah, I mean, putting two people together in a room and having them kind of talk through an idea is always a beneficial thing. And I think it's true too when you're trying to grow somebody regardless of their starting point and the ending goal. 

BRUNO: So pairing people. So we've talked a good bunch about best practices. Let's now flip that and let's talk about what people should avoid. Things you would have told people-- or told yourself when you started-- to not go out and do. What would those things be? 

AARON: I mean, I think the world of data is a little bit different here from just a purely product engineering universe in that everything is gray area. There's no real, single source of truth when it comes to data. I remember years ago, someone say, hey, how many deliveries did we do yesterday? We'd be like, OK, what do you mean by delivery? What do you mean by yesterday? Because that can change. 

Do you mean complete? Do you mean to include other things? Do you mean UTC or local time zone, or is it all in Pacific time? All of that can change. All of those answers are correct, but none of them will be the same. So you'll run into issues if you aren't understanding exactly what problem you're trying to solve. So that plays out again and again. 

BRUNO: Being precise about the context. 

AARON: Yeah, exactly. So a lot of these are going to be the opposite of what the best practices are, right? If communication is key, working in a vacuum or working in your own head or working on a project alone is going to be the easiest way to reach failure at a massive scale. So don't release the thing that you're trying to do before it's actually ready, before it's actually vetted. 

We've run a couple migrations internally at Postmates. At one point, we moved our entire data warehouse, our entire reporting pipelines and all of that, and we ran into some issues where we tried to get feedback from someone on a data product that just wasn't ready to be released yet. So all of the feedback was just, I don't know how to query this, or this table doesn't have anything in it, that kind of stuff, which just isn't useful. Now you're wasting everybody's time. 

So the easiest way to gain credibility is time. The only way to gain credibility is time when it comes to data. The easiest way to lose credibility is by having some silent issue creep in, but then you realize what you've been working on this whole time has been wrong by just some degree. So making sure that you've vetted what you're doing not just within your own team from a technical perspective, but with your end users. That's going to set you up for success. 

And the final thing I would say is just don't be clever. People have thought of all the smart stuff that's out there. When you're building data pipelines, keep it simple. It's very rare that you will need to go out and invent something new as a solution to accomplish something that's relatively simple. 

Now, data is complex enough on its own. And getting useful data that's self-documenting, that's easy to validate, that's widely used and respected, there's enough hurdles to jump over right there. And trying to come up with clever technical solutions to produce some of that is just one hurdle too many. 

BRUNO: That's excellent. Aaron, thank you so much for spending the time with us today. You have taught us a lot. There's at least two that I'm taking away this idea of distributed and centralized the engineering. And the way you're maturing internal data analysts to become data engineers, I think that's really pretty exceptional. And for the speed at which you guys grew, it's really quite unique. 

And then, finally, this last comment here on don't be clever, keep things simple, I think, is very useful to our community. I hope you also find that you got a lot of value out of this. Aaron, thank you so much for your time. We'll see you soon. 

MARK: Yeah, I thought that was a great conversation. I really learned a lot from Aaron. Obviously, it's fascinating to hear about how these different companies think about their data. But my favorite part about the whole conversation was really-- the part that stuck with me it was definitely their talking about data silos, which is something we talk about a lot and I feel like sometimes it can be a little bit more markety-ing than it should be. But it's really meaningful. 

And I think Aaron did a great job of talking about how Postmates really thought about avoiding the problem of data silos, and what that unlocks when you do architect around opening that up. 

STEPHANIE: Yeah. And, of course, throughout the last several years, the company has grown tremendously. I think they were saying that they had now 300-plus data pipelines in 650 event streams through Kafka. So they're doing a lot of work to combat the common issue of data silos. 

Again, once you have that done by the infrastructure team it's up to the rest of the teams to utilize that data. And Aaron did a really great job explaining how they were able to support more of a hub-and-spoke model, not just for the data, but also for the teams accessing the data. 

MARK: Yeah, it's really important to think about because-- and this is very similar messaging to stuff like DevOps, where you're talking about getting teams to work together more. Data is a way that a lot of teams work together. And when you're a huge company or when you're a growing company-- heck, even when you're a small company-- you're going to have teams that are naturally going to sometimes separate themselves a little bit because they have stuff that they need to work on. 

But to be successful, you want to have everyone working together. You want to have standards in place, and you want to have a good, clean way for everyone to share data. And Aaron talked about that, and how, in this example, bringing things into BigQuery is a great way to give everyone access to all the data. And then people who are like, oh, I need this piece of data, can start to come up with their own insights and say, oh, what if I join this with this? And that's really only possible when you have centralized data access. 

STEPHANIE: Yeah. And you know, Postmates being, I would say, a relatively newer company that's more born in the cloud, it's a little bit different than, I'd say, companies who may be facing more technical debt. But he still did a great job at explaining how they're able to leverage some of the things in terms of documentation and best practices so that the people who are jumping into the company can get started right away. 

For example, having columns with key definitions and table definitions already spelled out. Other models like using Google Groups and having direct IAM access that's much easier to manage at a central layer. 

MARK: It was a lot of interesting stuff to see. And it's always great-- we talk about all these kind of things in theory. But then taking a company and putting it into practice, I just love those stories. 

STEPHANIE: Yeah. So, for the next conversation now, we have a similar style company. But who is Bruno talking to in this conversation? 

MARK: Yeah, absolutely. So Bruno brings in Matteo, who's the senior director of global data products and analytics from Delivery Hero. And I hadn't heard of Delivery Hero before seeing this interview, but I guess they work out of a lot of different countries across the globe. 

And they have sort of a similar business model. But when they're talking about looking at the actual data side, they're sharing their whole journey of how do we make sure that we also architect to create data in a meaningful and responsible way so that not only can our team generate and actually start working with that data, but that folks in our team have equal access to it, and that they don't run into any data quality issues. 

STEPHANIE: Yeah. And just for the audience, Delivery Hero is actually operating in 50 countries across four continents. And just in the third quarter of 2021, they processed 791 million orders. So it's a lot of data that they're grappling with and trying to make use of. So let's go ahead and dive into it and find out more about how they're operating. 

BRUNO: Welcome to another episode of the Data Journeys. This is the place that we come to learn from data leaders, people that have experienced amazing growth and have great experience to share with us their dos and their don'ts. And today I have the pleasure of talking with Matteo. He's the senior Director of Global data products and analytics at Delivery Hero. Matteo, thank you so much for taking the time to talk to us today. 

MATTEO: So Delivery Hero is it's a European-based company. We are the largest global food network outside China. Actually, we are running the business in over 700 cities across the world, in 45 countries. And we are running more than 5 million orders a day, is more or less as informations. 

The company has been founded in 2011. And part of our strategy is also to keep adding and increasing our global footprints. Also, we have acquisitions, and we expanded here recently not only on food, but we also we start expanded in other verticals, like groceries or Q-commerce. Q-commerce is this hyperlocal delivery of any kind of goods in maximum 15 minutes from the place where you are ordering from. 

BRUNO: So what's amazing about your business is you've got a lot of data. You've got speed that's required. A lot of real-time analysis. I was looking at one of the case studies. 174 data sets, 5,000 tables, 2.7 petabytes of accessible data, 7 million queries a month. So take us through the use cases that you're solving for with data analytics today at Delivery Hero. 

MATTEO: So the number that you just mentioned is part of this project that we just kicked off recently. We started rebuilding a completely new data infrastructure. Because obviously, when you start having also a lot of acquisitions and you're running multi verticals, you face sometimes-- one of the biggest problems is how to access data. And we try to solve it just building a new infrastructure. 

We try to build in this concept of data mesh, where we start adding and onboarding more and more business units, we call it internally. But in general, our domains that are really clear boundaries between each other. And we start just to providing access and granting access to all the organization and really leveraging all this power of data. And we just started recently, and the number that you just shared is just the first small pieces of the data that we start to put and give access to everybody in the organization. 

BRUNO: And you're also streaming over 50 terabytes of data a day. So what are the use cases where you use this data? What are you doing with this data today? 

MATTEO: So, obviously, these data are used for, for example, to knowing how many people are visiting our platform in order to understanding how many riders we need to have on the street in a specific area, or how to keeping defining what is the delivery zones based on the demand and based on the offers that we have. The same is understanding what is the best type of recommendation we can have for the customers, or really understanding how to support a customer into ordering the best food that they can find in this area. 

These are some of the use cases that we try to solve in. And obviously, this is a combination of data coming from restaurants, from how the application are used, but also our riders are moving across on the streets. 

BRUNO: So how did the journey with Google get started? 

MATTEO: So we started with Google just in a kind of small project where we start to shape the product analytics function, and we start using Google Analytics as a solution, and we start rolling out Google Analytics across the group. And obviously, in 2014, we wanted to use the raw data of Google Analytics, and we started using Google BigQuery also to really make sure that we can standardize in some level of access in terms of user behavioral data. So this is what's one of the first use case. And this use case obviously start to expand and growing. We have also the needs of the company and the needs of getting more and more data in the same place for different type of use cases. 

BRUNO: And then, of course, this now started to expand to other types of scenarios. You've got time of arrival prediction. You've got routing services. You've got dynamic inventory. What else? Behavioral predictions. What are some of the interesting use cases that you've been kind of building over the years? You've been there over seven years now. 

MATTEO: The main goal is always on our central [INAUDIBLE]. Our point of view is really solving these really unique challenges that can be from fraud detection, or understanding what is the difference between markets. For example, how the riders or how the customers or how the addresses are built in countries like Singapore or Hong Kong versus in Finland. 

And, as you can imagine, the customers and different riders need to have a completely different type of journey as well to delivering the food the distances between-- a country in Dubai is different than a country in Hong Kong, where, for example, we can add [INAUDIBLE] or the delivery can be done-- a lot of pick-up orders, for example next to a station. Or one in Dubai, for example, that we have really long distances that we need to cover. These are some of the examples that the algorithm are trying to solve. 

BRUNO: And of course, in some of these cities that have high density, you're saying people will spend more time in the elevator than actually going to locations. So how do you track for that? How do you handle that? 

MATTEO: As I mentioned, every single country or every single kind of geographics obviously need to customize some component. And obviously, in some markets-- like, as you mentioned, Hong Kong, or country where there is a lot of verticality-- we need to obviously make sure that we can optimizing also take into consideration the timing of inactivity of the riders. Or how it's complex, for example, to deliver food in big condos, for example, and big condominiums or in big houses where it's not so straightforward to delivering the food to the end customers. 

We've been putting all this data in this big infrastructure to make sure that we can provide access to all the different producers and consumers to make sure they can combine and keep optimizing the algorithm of the different functions. 

BRUNO: What is part of the infrastructure? What are the various components of the Google Cloud that you're using today? 

MATTEO: So we are using a different part of Google Cloud. It depends, obviously, on the use case and use case. For every single use case, we try to make sure we have the right technology and the right pieces of the puzzle that can help us to delivering everything needed in the right moment, and we make sure that we follow the stakeholders' needs. 

But we are using-- for example, we're leveraging a lot of data proc, or we are using a lot of pops-up, for example, for queuing to make sure we can subscribe-- that our different consumers and different producers can communicate each other as well via some of the Google Cloud solutions. 

BRUNO: That's excellent. So now we've talked about your scale. We've talked about the stack. Let's talk about the dos and don'ts. Throughout this seven years you've been at the company, you've learned a lot through how to deploy real-time services, like what you're doing today, and this concept of the data mesh. 

And what are the positive lessons you've learned? What are the three things that everybody needs to do in order to be as successful as you are? 

MATTEO: The main three dos. I think a lot about it. And I think the first one, especially for our ecosystem, is how to find what is the right key to drive adoption and really make sure that you can empower team, especially if you're running a business with multi verticals. It's how to driving empowerment. 

The second one is really make sure that you can measure the kind of activity that you're doing on data side to make sure that everybody in the organization understands the initiatives itself and how to measure the impact. And obviously, the last one is really how to make sure we have the right way of communicating in terms of incident management, data quality, SLA, and make sure that we can really build in global frameworks that everybody can speak the same languages. 

BRUNO: What did you do to drive adoption? 

MATTEO: To drive adoption there is always-- normally, there are some kind of key, right? So one is obviously make sure that, for example, quality is a really nice way to make sure that-- that is driving adoption. For example, we tried with this data mesh concept as well. We tried to really giving to the producer to make sure the producer is accountable for data quality. And we try to make sure the producer is the first person that it's also the first consumer of the data that he's producing. 

So we try to make sure that he's also like always really understanding and is on top of the data quality of his products or data that he's sharing it in order to make sure he can also be the first one person that can-- accountable, but also fixing it. So we try to make sure we can provide to a lot of the different platforms that we are running at some global solutions. And in order to using these global solutions that are supposedly to be really on the state-of-art of technology, in order to using these solutions, you need to obviously implementing or having some level of quality of the data that you are providing to these global services teams. 

So this is a little bit some of the key that we are using in order to really driving the adoption. 

BRUNO: But I guess what I'm trying to understand is the producer then is the source of information. So is it someone who's providing inventory information? What's the profile of a data producer? 

MATTEO: You know, it's really similar-- with this concept, we try to kind of replicate on the data world what happened a few years ago in terms of product development where you start to moving away from this monolithic solution, and you build a lot of microservices. And in this way, if you think about on the data side, you kind of really decompose the data that the company is creating across different domains. And in every single domains, you create boundaries. 

For example, all the data that the producer can be-- the checkout team, for example, is taking care of all the payment informations, and in this case is accountable for the quality of the payment information that other teams across the organization will use and leverage it. And what we are doing on our side with these concepts-- we try to make sure we're providing the right tooling and the umbrella of solutions to really leveraging-- the teams can really leverage in order to having less things to bother about. 

BRUNO: So if I'm, for instance, the provider of checkout information back to the central infrastructure, what are the tactics that you're using to make sure I'm accountable for data quality? 

MATTEO: The key to make sure the platform or the teams, the producers, is also accountable, it is because it should also using this data directly from this interface and this new infrastructure. So if the producers is also the first consumer of his own data, obviously there is a higher interest in terms of quality. And what we try to do on our side is try to make sure that we can have multiple consumer as well that can keep adding and keep informing and leveraging it, all this portfolio of solutions. 

This is one part. So who is producing is also consuming. And what we try to do-- on our side, we try to build the tooling that can help the different teams to understand if they are producing also is a high quality, and it's really reliable, and it's really feeding all the needs on all these framework requirements. 

BRUNO: Are you using Data Studio? Or are you using any BI tool or anything like that you're reporting on the quality of the data? 

MATTEO: For quality, we're using different solutions from in-house to not in-house. But obviously we do a lot of reporting. For reporting, we're using also kind of a couple of different solutions. Depends on the use case. 

Mainly for core reporting, we're using Lookers and Tableau. I don't know if it's-- but also, we have a lot of internal Data Studio reports that are helping us really quick to understanding and understanding what's happening, or allowing, really, the analysts or even the engineering just to put the data together and understanding who is the consumers, or who are the users, or what is the quality of the data. So it really depends most on use case. 

It's not really trivial, what are you using for what, and it's really depending from team to team. And that's why probably it's a little bit hard to understanding it. 

BRUNO: Curious about that. Are you letting people decide what BI tool to use? If you have Data Studio, Looker, and Tableau, are you-- they decide for themselves? Or how is it done? 

MATTEO: So I think this is exactly what I mentioned a little bit before what are the best do, right? So it's one is empowering them, and make sure that you have the same kind of processes and the same kind of frameworking. This is one part. 

And obviously, what is one of the don't do, if you think about it, it's like, we should not just providing access to the data. But I think it's an organization point of view, we really need to spend time into onboarding teams, educating teams, understanding what is the best practices. What is the best practice in terms of tooling. What is the best-- what is a common practice in terms of leveraging BigQuery on the maximum of its potential, for example. How to defining the right balance between on-demand or slots, for example. 

So this is what we are providing as a central team when I talk about the tooling or this umbrella of solutions. It's also educations. And obviously make sure that we can really-- every kind of repeatable processes can be streamlined, and we can really build in collaboration models across the organization. 

BRUNO: So we've talked about the dos, now let's look at the opposite. Let's talk about the things that people need to avoid. 

MATTEO: I think also if you get to a list of three, I think one is, obviously, not start to working in a bubble and start to creating a project in a bubble. But really make sure that there is communication, really clear, and we can provide continually visibility. And another point can be make sure we don't only provide accesses to the data. But as an organization, we should really try to spend time to onboarding every single team. Educating the customers-- our data customers, internal customers-- on how to using tools, what are the best practices, and really how to onboarding and empowering the full organization. 

And obviously the goal as a central team is really how can we ensure that every kind of repeatable processes or standards can be streamlined, and increasing the speed of collaborations, and building these new collaboration models. 

BRUNO: Well, Matteo, thank you so much for the learnings today. We talked about how to drive adoption, how to drive accountability around data quality with producers and consumers of information. And, of course, the concept of data mesh. 

I hope a lot of people are going to reach out to you to learn directly from you. Until next time, I'm being Bruno Aziza. 

MARK: Yeah, I mean, another great conversation to hear about how they actually architect. I feel like we've heard stories-- and you kind of talked about this a little bit earlier, Steph, when you were talking about companies that have a lot of technical debt or have been built up over a long period of time. And things change. That's a constant, right? Things always change. 

And when you're kind of born in the cloud, you can take advantage of maybe starting from scratch. But there's just a tremendous amount of data. Like you said, 750 million orders. That's mind-boggling. It's just so much data. 

And so if you think about the types of activities that need to happen if someone's like, OK, well, how do we actually look at grabbing some of this data and analyzing it? Let's look at this many orders for this country for this time frame, that's such a huge amount of data to grapple with. So ensuring that the quality of data is there, ensuring that the people who are producing this data are held to kind of guidelines to make sure that the data is usable and that the data is clean, that's critical for being able to work with it. 

STEPHANIE: It's kind of two parts of the equation. Not just setting up the infrastructure and a distributed data system to do big data processing along with things like Pub/Sub to do asynchronous messaging, but how do you actually ensure that there's integrity of that data once people have their hands on it? And then on top of that, there are other challenges that a company like this faces. 

They were talking about distances in each country being very different. Hong Kong being a very high density place and people spending more time in elevators. So it's a lot of competing variables and factors playing into it. And so I think one key takeaway for me was that Matteo is really trying to empower each team to be accountable in their own data integrity. 

MARK: Kind of talking about the Postmates conversation as well. talking about data silos, breaking down those silos, and getting people working with these different groups, different teams, different sets of data, different product areas for large companies. All of that requires a lot of intention and a lot of making sure that things are architected and the processes are put in place in order to make that possible. That's what it really means to break down data silos. 

Because if you just kind of give access to everybody but you don't do that type of cleanliness of data or that equal height of access, then you're not really helping. You're just kind of adding access to it. That doesn't solve any problems. 

So it takes a lot of work to make this happen. So it's really cool to hear about these companies that have done that and have learned the experience by it. 

STEPHANIE: Absolutely. So there we have it. Those are two fantastic episodes with Bruno Aziza, again, head of data analytics. We talked to Postmates and Delivery Hero, who are doing some really intricate things with data analytics and on Google Cloud. 

If you're interested in checking out more of the Data Journey episodes, we have a link in our show notes to go watch the video forms of them too. So go ahead and check those out. 

MARK: Yeah, he's got a whole series on YouTube. I think he's almost at 20 episodes, if I remember correctly. So we'll make sure we put that link in. And then, of course, we had Bruno and Eric Schmidt on last year to talk about all those data analytics launches I think around next as well. So we'll make sure to put the links for those episodes in in case you want to hear more. 

Awesome. Well, Steph, I know you've been super busy. What have you been working on? 

STEPHANIE: So, we have our next Ask Google Cloud content coming up again. It's not going to be for a little while, but we want to source questions from you all. So our next topic is going to be about Kubernetes. OK, that's a very broad topic. But if you have any questions that you have been itching to get an answer for from our experts and other DAs here at Google Cloud, shoot them over my way via social media or on YouTube videos about Kubernetes on our channel. And we will collect the best ones and answer them through our video and the live chat. 

MARK: I feel like we were just talking earlier about how complex Kubernetes is. So I'm sure there will be no shortage of questions for you all to pick from. 

STEPHANIE: Yes, everybody knows. It's a great topic to dive into, but then you just uncover so much complexity with it too. So, yes, check it out. And for everyone else, we're going to be back next week on the GCP podcast, so we'll see you all in a week. 

MARK: Bye, everybody. Have a great time. 

[MUSIC PLAYING]