+++
audioDuration = "00:30:50"
audioFile = "Google.Cloud.Platform.Podcast.Episode.324.mp3"
audioSize = 44418158
categories = ["Conference", "Announcements", "Releases", "What's New", "BigQuery", "Looker"]
date = "2022-10-19"
description = "Debi Cabrera and Stephanie Wong have more great Next content this week as we focus on launches specifically related to data and analytics with guests Bruno Aziza and Maire Newton."
draft = false
episodeNumber = 324
hosts = ["Stephanie Wong", "Debi Cabrera"]
title = "Top 5 Data & Analytics Launches from Next 2022 with Bruno Aziza and Maire Newton"
image="/post/episode-324-top-5-data-analytics-launches-next-2022-bruno-aziza-maire-newton/images/hero/hero-EP-324.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/y87xo5/episode_324_top_5_data_analytics_launches_from/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Debi Cabrera and [Stephanie Wong](https://twitter.com/stephr_wong) have more great Next content this week as we focus on launches specifically related to data and analytics with guests [Bruno Aziza](https://twitter.com/brunoaziza) and [Maire Newton](https://twitter.com/MaireNewton).

We start the episode with a look at current customer trends in data, including tools for increasing efficiency when working with many different types of data. Data governance and security is another area where Bruno sees advances in satisfying customer needs. Maire talks about the steps Google is taking to help customers implement knowledge gained with data, including Looker and new integrations with tools like Looker Studio to easily connect tools for better data access and use. Strategic partnerships with companies like Tableau help accomplish these goals as well. 

With 21 data and analytics launches at Next, exciting solutions are out there for customers. Bruno and Maire highlight their five favorites, like BigQuery support for unstructured data, allowing analysts working with SQL to do more with more data. To simplify workflows, BigQuery integration with Spark is a new feature that Maire tells us about, and we hear more about BigLake and it's increased format support. Data reaches more people easier now with Connected Sheets available for anyone using Google Workspace, and finally we talk more about Looker. Bruno details the four use cases of business intelligence customers and how Google's suite of data products satisfy their needs for a reasonable price.
 
##### Bruno Aziza

[Bruno](https://twitter.com/brunoaziza) is head of data and analytics for Google Cloud and leads the outbound product management team. He has more than two decades' of Silicon Valley experience, specializing in scaling businesses, and has written two books on Data Analytics and Enterprise Performance Management.

##### Maire Newton

[Maire](https://twitter.com/MaireNewton) is an Outbound Product Manager at Google Cloud with almost 15 years of experience partnering with organizations to develop data solutions and drive digital transformation. She’s passionate about helping customers develop data-driven cultures by using technology to meet users where they are.

##### Cool things of the week

* Google Cloud Next for data professionals: analytics, databases and business intelligence [blog](https://cloud.google.com/blog/products/data-analytics/data-breakout-sessions-at-google-cloud-next22)
     * ANA104 How Boeing overcame their on-premises implementation challenges with data & AI [site](https://cloud.withgoogle.com/next/google-playlists?session=ANA104#partner%20summit)
     * ANA100 What's new in Looker and Data Studio [site](https://cloud.withgoogle.com/next/google-playlists?session=ANA100)
     * ANA101 What's new in BigQuery [site](https://cloud.withgoogle.com/next/google-playlists?session=ANA101)
     * ANA106 How leading organizations are making open source their super power [site](https://cloud.withgoogle.com/next/google-playlists?session=ANA106)
* Google Cloud Next: top AI and ML sessions [blog](https://cloud.google.com/blog/products/ai-machine-learning/top-google-next22-ai-and-machine-learning-sessions)
 
##### Interview

* Unifying data across multiple sources and platforms [blog](https://cloud.google.com/blog/products/data-analytics/building-most-open-data-cloud-all-data-all-source-any-platform)
* Data Journeys [videos](https://www.youtube.com/watch?v=ExKKBbu1ZMA&list=PLBgogxgQVM9u7erehI-fs6ENAPv9xnqwU)
* Google Cloud Next '22 [site](https://cloud.withgoogle.com/next)
* Looker [site](https://www.looker.com)
* Looker Studio [site](https://cloud.google.com/looker-studio)
* Tableau [site](https://www.tableau.com)
* BigLake [ste](https://cloud.google.com/biglake)
* BigQuery [site](https://cloud.google.com/bigquery)
* Use the BigQuery connector with Spark [docs](https://cloud.google.com/dataproc/docs/tutorials/bigquery-connector-spark-example)
* Connected Sheets [docs](https://cloud.google.com/bigquery/docs/connected-sheets)

##### What's something cool you're working on?

Debi is getting married and working on [Dataflow Prime](https://cloud.google.com/dataflow/docs/guides/enable-dataflow-prime).

{{< transcript "[MUSIC PLAYING] STEPHANIE WONG: Hey, everyone. And welcome to episode number 324 of the weekly Google Cloud Platform Podcast. This is Stephanie Wong. And today, I'm here with Debi." >}}

DEBI CABRERA: Hi, Steph. Hello, everyone. 

STEPHANIE WONG: Where are you calling in from? 

DEBI CABRERA: I'm calling in from Buenos Aires, Argentina, right now. I'm getting married here next week-- so came a little bit early to finish some prep. 

STEPHANIE WONG: I'm so jealous. That sounds amazing. And congratulations. 

DEBI CABRERA: Thank you. Yeah, I'm pretty excited. So everybody, please cross your fingers that it doesn't rain. 

STEPHANIE WONG: Well, I think they say that if it does rain, it's good luck or something. So anyway, I know it'll be a beautiful, beautiful wedding. But thanks for jumping on last minute to join our very exciting podcast because this is all related to Google Cloud Next still. So I'm going to go ahead and let you introduce what we just talked about today. 

DEBI CABRERA: We had a great chat today. We had two very special guests, Bruno Aziza, the head of data analytics, and Maire Newton, an outbound product manager who I've also worked with before at Looker. And they were here to talk to us, like you said, all about Next, what's going on with data analytics, key trends, what you can't afford to miss, and they broke down the major data analytics launches at Next-- what they are, why they matter, et cetera, et cetera. So we had a really interesting conversation with them. 

STEPHANIE WONG: We did. We did. I feel like every year so far, at least since I've been a part of the podcast, we have had a dedicated episode not only for the general announcements from Next, which we had last week with Forrest, but we also have one for data and analytics. And it seems to be Bruno each year, as well, and now joined by Maire. So it just shows we have so much coming out in data and analytics alone. So you're going to hear all about everything you missed if you didn't get a chance to watch Next. But let's go ahead and dive into the cool things of the week first. 

[MUSIC PLAYING] 

DEBI CABRERA: The cool thing of the week for me is some data breakout sessions at Next. So there are a few that I found really interesting, two that we actually talked about today, but there's more detail on. So what's new in Looker and Data Studio and what's new in BigQuery, and then a few others, like how Boeing overcame on-premises implementation challenges with data and AI and how leading organizations are making open source their new power. And there are so many more. 

STEPHANIE WONG: Yes. So we will talk about some of the key announcements and themes today in our conversation. But if you actually want to get more technical information, demos, walkthroughs, and more from the PMs and engineers, go ahead and check out these sessions that are listed in this blog post. And then for my cool thing of the week, it's related blog post, but more focused on the top AI and ML sessions. So if you are a data scientist or someone who is hands-on with AI and ML, there are a ton of sessions related to moving raw data to ML faster with BigQuery and Vertex AI or maximizing content relevance at scale with large language models or applying AI to core business processes. So check this article out if you want to watch the top breakout sessions related to AI and ML. And with that, let's go ahead and hop over to our conversation with Bruno and Maire. 

[MUSIC PLAYING] 

Maire, and Bruno, thanks so much for joining the podcast. Maire. I know this is the first time that we are meeting you. So do you mind giving us a quick intro? 

MAIRE NEWTON: Absolutely. Hi, everyone. I'm Maire Newton. I am an outbound product manager at Google Cloud. And I've been in the data and analytics industry for almost 15 years now. Prior to Google Cloud, I actually worked at Looker and joined as an early member of our professional services team here in New York, where I'm based, and worked very closely with Debi, one of our lovely hosts on this podcast. And then prior to that, I was a consultant focused on BI and analytics at Thorogood Associates, where I partnered with, really, a lot of enterprise organizations, helping them to develop data solutions and drive digital transformation. 

STEPHANIE WONG: Amazing. And I did notice that your last name is "Newton." So I'm guessing you might be distantly related to Isaac Newton, the English mathematician who's best known for his law of gravity. So I know you're about to drop some big knowledge and insights with us today, right? 

MAIRE NEWTON: Absolutely, very distantly related. 

STEPHANIE WONG: Well, speaking of catchy last names, Bruno Aziza, we've had you on this podcast before. But for some reason, I never realized that your last name is a palindrome. So as an alumni and return guest, this is your second time here. Do you mind giving another quick intro? 

BRUNO AZIZA: Yeah, for sure. And it took me, actually, 20 years to realize that myself. So don't feel bad. A customer told me about that. So that's not a big deal. But actually, so Maire and I are on the same team. It's actually interesting. I worked with her company when I was at Microsoft. So an interesting fact in this field is that we all know each other in the data world. So you'll hear, hopefully, a lot of great stuff about our history. 

So I have been now at Google over two years. I host this-- the "Data Journey" customer series that everyone should follow if they want to learn about our community. I also do this weekly podcast that I run on LinkedIn, which we bring customers into it. Last week, I had L'Oreal, actually. It was pretty cool. 

I'm the head of data analytics here at Google Cloud. And we're going to talk a lot about BI, as well, here because BI is part of my portfolio. I have been in this space my entire life. That's really the only thing I've done-- is work in data, back-end business objects, Microsoft-- when the business went up a billion dollars And I helped launch three startups that people in your community might know-- SiSense, AtScale, and Alpine Data Labs. Alpine Labs was bought a few years ago by Tibco. So that's my history here. 

DEBI CABRERA: Wow. So we have two heavy hitters in the world of data today. Let's dive right in. So Bruno, your team spends a lot of time with customers. I know you recently keynoted LATAM's largest data conference and presented in front of more than 5,000 people about the latest data customer trends. So can you share with us what are you hearing? 

BRUNO AZIZA: Thank you. There are lots and lots of trends that your audience is probably getting hit with with data because it's very buzzy environment. If I were to break it down into three big innovations that we're hearing, the first one that's really an important one is this idea of convergence of data and workloads. The number one barrier to digital transformation is data fragmentation and the complexity of getting people to work with data effectively. Almost 80% of companies use more than 100 data sources. 30% of them use more than 1,000 sources. This is recent CDO data. 

And the idea is that-- how do we make it easier for people to come together and work with data in a more efficient manner? And that's why the term, the lakehouse, has been very popular-- is people trying to bring data of all types-- structured, unstructured, semi-structured-- in the same environment because it creates the opportunity for data practitioners to have all the data they need in one place. So now you have data engineers, scientists, analysts that can interface with the data however they like to interface with it. We'll talk about launches here around how we're making SQL really reach out to a lot more workloads. 

We'll talk about Spark, and so forth. But that's really the idea-- is that how do we converge. And what's hiding behind this trend of convergence of data and workloads is really breaking down the silos of data because once you're now coming with all the data in the same, similar environments, analysts, scientists, and engineers can work better together. So this trend of convergence is something we're hearing loud and clear from customers. And it aligns to a lot of the launches that we are announcing primarily because it's big feedback from our customers. 

STEPHANIE WONG: So before we get to talking about BI unification, I want to zone in and talk about trend number two. So what's happening there? 

BRUNO AZIZA: To be fair-- and when I talked about data unification, it's not just data, the data platform itself. It's also the tooling on top of that data. So we'll talk about BI today. You're right. That's a gigantic trend. 

The second trend that is probably less sexy, if you will, but is really-- it's super important for the data leaders that we talk to-- is governance, security, data quality, and lineage. We have some great launches around that. But the idea is that now that I can bring all my data into one place, is it going to be better data? And what qualifies as better data is data people can trust, data that's complete, data that's fresh. And so I call that Governance with a big G because it's a really expensive business today. I think Gartner said that poor data quality can cost the average organization $12.9-- almost $13 million a year. So it's an expensive business if you're not effective in creating a data environment that everybody can trust. So lineage, data quality are important topics. And we have some new functionality there around data planks that people are going to be really excited about. 

DEBI CABRERA: That makes sense, of course, that we want to make sure the quality of our data is top-notch so we get the best insights possible. So there's more data, better data. And now what? 

BRUNO AZIZA: It's a good question because if you think about the adoption in the market today of BI tools and BI applications, it's really tough. And a big part of that is not just the interfaces and metaphors people use, but it's also the data quality itself, the ability to activate this data. And so Maire, do you want to talk a little bit about what we're doing there, because there's a lot of exciting news as well? 

MAIRE NEWTON: Absolutely. And there really is so much happening in this space. When you think about data, the whole purpose of having it at all is to be able to have people use it, to be able to take action based on the data. 

Let's put this in tangible terms. Think about a bank account. Its goal is to keep your money safe. You have it in a trusted location. But imagine that you didn't have a debit card or a checkbook or any way of actually accessing and using this money when you want to go to the store and buy something. It doesn't really help, right? 

And with data, we're seeing the same thing. Its value is really based on how it can be used. According to a study done by Accenture, 68% of companies are unable to realize measurable value from data. So this inability to activate data-- that's a real issue that people are facing and a problem that they're looking to solve. 

So on top of that, there's also this idea that dashboards-- they're not cutting it anymore. Activating data and getting value from data means activating people to use data. And that really means moving beyond this concept of traditional BI and, instead, starting to think about building data products and workflows that really take your data and put it where people are and where they need it to get their job done. 

So obviously, with data continuing to get bigger and more complex, things like governance that Bruno was just talking about, concepts around centralized data modeling, the need for on-demand data delivery and self-service, sometimes across thousands, maybe even millions of users-- that's really becoming front and center. And for us, this means aligning our BI solutions around those trends that we're seeing. So we have Looker, which is providing a trusted platform, semantic modeling capability. And now what we're focused on is really opening up that connectivity to Looker's semantic model by providing tight integration with our own BI tools, like Looker Studio, for self-service data discovery and dashboarding, Connected Sheets for analytics and tabular reporting. 

And we're not stopping there, either. We're building integrations with partners in the ecosystem, like Tableau and Power BI. And we're, of course, continuing to invest in developer tools for embedding data in applications, for building data products, even integrating data, really, into a limitless number of workflows and processes using the API. So a lot of activity here because we see such a huge need here across our customers-- 

STEPHANIE WONG: Wow. So a ton happening with unification of BI, along with data governance and data analysis. So that's it for our trends that we just talked about. But I also know that you said we had over 21 launches this year at Next. So we're definitely not going to be able to talk about all 21. But why don't you highlight your top five? 

BRUNO AZIZA: Yeah. 

DEBI CABRERA: Do you mind starting, Bruno? 

BRUNO AZIZA: Yeah. I want to talk about all 21. But I think you have to keep me honest on timing. So lots of great launches, high velocity, lots of great new products really aligned to these ideas, these three ideas-- more data, better data, and data that you can activate. 

And so in the more data area, what I'm really excited about is the BigQuery support for unstructured data. Historically, you think about BigQuery as this analytical machine or analytical system that you can throw just about any data at. And our workloads have really been focused on structured data and semi-structured that were introduced. And now we have unstructured data. And so what that creates is, essentially, the ability for business analysts, data engineers that are working with SQL today to get access to now new category of data so they could do more with their data. 

I love Maire's analogy of the bank. I'll give you another-- a similar scenario of real estate. Imagine that you want to do some prediction on which house is going to sell best. And typically, you might do this on attributes that is typically structured data. Well, now with the ability to run SQL on unstructured data right from within BigQuery, you can imagine having these pictures of these houses, if you will, and then run your prediction model right from within BigQuery and now decide, based on the pictures, which is the one that has the highest propensity to be sold, to be rented at a particular price, and so forth. 

So really cool innovation-- lots of people are going to be excited. And it reinforces the investment we've made in BigQuery where it's this limitless system where you can just throw anything at it and start working with just about any data you want 

DEBI CABRERA: Awesome. So continuously expanding the possibilities with BigQuery-- Maire, you get the second one. What are you excited about? 

MAIRE NEWTON: There are so many. I think jumping off the back of that, thinking about BigQuery, something I'm always a big fan of are things that simplify workflows and really make things easier for our users. So in the name of continuing to expand the capability of BigQuery, I think one thing that is a big deal, especially for our data scientists and our data engineers out there, is Spark inside of BigQuery. 

So the short version of this is that we're adding native Spark support right into the BigQuery SQL console so data engineers and data scientists will be able to analyze their data in BigQuery using Spark without leaving BigQuery and without managing the overhead of having separate Spark infrastructure. So things like integrating with notebooks, like running Spark jobs directly in BigQuery, and creating and publishing new BigQuery functions and stored procedures with Spark code that can then be used elsewhere-- it's really going to enable customers to do more and get a lot more from the data science investments that they're already making. 

And then layer in on top of that that Spark execution is now consuming BigQuery slots, just like any other BigQuery SQL queries. So now you're simplifying financial operations around this. You're making it easier to manage. You're layering in BigQuery security policies and streamlining data access. This is just a huge win. And really, bringing these two things together, BigQuery and Spark-- it's just creating this much more rich, powerful, scalable ecosystem for data science workloads that-- it enables people to flexibly run whatever Spark code they want, whatever Spark code they need, to get their job done. And it's all built right into BigQuery. That's really powerful, in my mind. 

STEPHANIE WONG: Wow. That's super impressive. I just see this huge trend of continuing to expand BigQuery as this home to do everything, including with unstructured data and data living in other places, like running Spark jobs. So it's really impressive. So that's two. Bruno, how about our third favorite top launch? 

BRUNO AZIZA: The third one is related to what Maire just talked about-- is BigLake. So people have heard about BigLake. It launched in Preview just a few months ago. And again, this-- because this is innovation built on top of BigQuery, it's easier for us to continue evolving quickly with customers' feedback because so many customers use BigQuery today. And so BigLake allows us to now have reach on different types of data. We're covering more formats. We're announcing, of course, the support of more formats. Iceberg is the first one we're going to start with. And then soon, we'll go with Delta and then Hudi. 

But what's also important here, and Maire just really did a great job here putting the full picture around it-- it's not just supporting more data or not just bringing more workloads. It's also the integration with the infrastructure and security and financial operations related to it. We want people to have access to an environment where they can do more, but they can also do more easily. 

Today, running a Spark workload, you got to think about the infrastructure. You've got to think about, if I run this job, is that going to cost me the entire environment or am I going to be charged for the job? And so the idea around BigLake is very related to that, which is it's not just access to more formats. It's also fine-grained access control, query acceleration. And so we're really thinking holistically of-- when we're bringing these workloads together, we're also making it more efficient and simpler for people to manage. 

DEBI CABRERA: Great. So making things more efficient and easier for customers to use. Maire, what's your next one? 

MAIRE NEWTON: So we've talked a little bit about the bank where we keep all of our data, all the things that we can do with our data there. But I want to shift gears and talk about something that I'm really excited about around data access and activation, how we're getting data to more people to be able to make use and get value out of it. 

So in that vein, something that I think is a real game-changer in this area is the new widespread availability of Connected Sheets. If you're not familiar, Connected Sheets, basically, provides direct connectivity between Google Sheets and BigQuery. So that enables users to analyze billions of rows of data through the Google Sheets interface with no additional specialized skills or knowledge to do that. And what we're announcing and what I'm really excited about is that this feature is now going to be available to absolutely anyone with a Google Workspace license, including free personal users. And that means that me, with my Gmail account and my other profile in Chrome, can go in and start using it right now without actually purchasing a license from the business at all. So this is a really great opportunity for any type of user to start experimenting with Sheets and this live connectivity and to start working with BigQuery. 

And why is this important? When we think about BI tools, we're typically thinking about visualizations. We're thinking about dashboards. But actually, the original BI tool and the one that is still the most popular today is the humble spreadsheet. I've worked with so many users-- users of Looker, users of other visualization tools-- that, at the end of the day, what they really want to do is just download data and put it into a spreadsheet so that they can do whatever they want with it from there. And that's fine. But once you download that data, it very quickly gets stale. It's out-of-date. So this capability really means that anyone using Google Sheets can connect live to fresh data, massive data sets in BigQuery. And they can do the spreadsheet-based analytics that they love with it from there. 

And then, of course, to further the goodness, later this year, we're also-- be launching Connected Sheets connectivity with Looker so people that are using both Looker and Workspace will be able to connect not only to that massive data sets in BigQuery, but also to model data in Looker that could be coming from any of the 60-plus databases that Looker also connects to. So we're making Connected Sheets much more available. And then on top of that, we're in the process of making it more powerful as well. And this is really just the sort of feature that-- it's so helpful when it comes to data activation to be able to put this data in front of people in a tool that they're already using and already love. And that's why I'm just so excited about it. 

STEPHANIE WONG: Exactly. I think this goes along with a similar theme across the board for all product launches at Google Cloud Next this year, like ease of use, but also meeting developers and users where they are. Sheets, obviously, is a staple for everyone. So knowing that you can further your analysis by utilizing the massive and incredible infrastructure and analyses that BigQuery provides-- it's almost like a superpower that's being extended to you. 

So that's incredible. That's our fourth. So Bruno, let's bring it home. What is the fifth one? 

BRUNO AZIZA: Oh, no. Does that mean I got to stop talking after this one? 

DEBI CABRERA: Yeah, we're cutting you off from there. 

BRUNO AZIZA: Fine. I will add, even, to what Maire just said. I think this is really going to be a game-changer for a lot of people because been someone that's worked in data my entire life-- I remember when I was BusinessObjects's number one feature-- export to Excel. So this idea of a spreadsheet is often a data source. And it's often an output. Sheets is, really, a next-generation spreadsheet. And it has intelligence in it. And now the fact that it's really connected with our analytics limitless infrastructure is really going to bring home the power of data democratization to a lot of people. And so this is a big deal. I think people should really take a look at that. 

It connects with what we're doing on the business intelligence side as well. So we're introducing, of course, the Looker family. And people might not be aware. But across our portfolio of business intelligence, we have over 10 million monthly active users. And so we have been in this space in a big, big way. And we've understood a lot of what people want to do with BI workloads. 

And we're starting to see four types of use cases. The first one really is the traditional self-service and govern use case of I want to have my dashboards, I want people to be able to build their dashboards, and I also want people to be able to govern dashboard infrastructure, essentially. 

The second one is what we just talked about, this idea of integration within my information worker workflow. And so an example of being integrated with Sheets is a great one as well. And we expect a lot of people to really take advantage of that, not just the people in finance, but everyone that's a business user. I'll tell you, I do most of my thinking in Sheets. I know this might sound weird. But this is how I think. And I know a lot of people build projects in Sheets and-- gives them a lot of flexibility. So having that connected to this limitless infrastructure is really a big deal. 

The other scenario, and we touched a little bit on that, is this idea of data products and embedded products. The world, I think, of organizations that are working with data is moving to this idea that you are now building a product for a vast audience. And so what that means is that you need to have the tooling to think about data as a product in the context of everything's got to be real-time. There is no data extract. And when I build a product that is using BI as an API, now I can start thinking about deploying it to millions of people, not just tens or thousands of people, which has been traditionally where the world of BI has been. 

And so that's really what we're focused on-- is really opening the aperture, if you will, for being able to work with data. And BI is much broader, is much bigger. It's beyond dashboards-- is how we're thinking about it. 

DEBI CABRERA: Thank you for sharing that fifth one, Bruno. That one is close to my heart as a Looker alum. It's a special place for me. So I'm really excited to see what comes from this BI unification. 

So I know how hard this must have been, to narrow this down to five. So thank you for doing that so we can keep this podcast at an appropriate length. Before we close, is there anything either of you want to add? 

BRUNO AZIZA: Yeah. I definitely want to invite everyone to go to the Next site, register, watch it live if you can. If you missed it live, by registering, you'll get access to the recording. So you can watch it yourself. You can share it with your friends, colleagues, partners, whoever needs to see about this innovation. 

Be sure to sign up to the "Data Journey" playlist. This is the interviews of customers that we publish every Tuesday. The reason for why they matter is they're not marketing videos. They are just customer videos. And you'll hear from customers what company they're with, what use case they have, their dos and don'ts. They're typically 10, 12 minutes. 

Connect with the customer directly. The idea here is that we're building a platform. So customers can talk to each other and learn from each other. So really take full advantage of "Data Journey" because we do this throughout the year. 

And then the third thing is try the products. We just talked about Connected Sheets here-- is available. But we have more trials. We have a trial for Spanner. We have a trial for BigQuery Omni. And so these are, I think, a big deal in making sure that we're not just talking about the theory, we're enabling you to just work with the products. 

The ideal here is-- Maire said at the beginning 68% of organizations are not getting value because it's hard to work with data today. It's hard to get your hands on it. And the cost of innovation, the cost of experimentation is very high right now. So what we want to do is lower the cost of experimentation as much as we can. And the best way that we could do that is make all these products available to you in a massive, scalable way. So hopefully, you'll like them. But we want to hear from you. 

So the last thing I would leave people with is let us know. We are all on LinkedIn here. If there's anything, you need to know something that we're not doing, let us know because we're building these products for you 

STEPHANIE WONG: Amazing. Well, thanks so much for joining our-- what is it-- annual podcast about data and analytics-- maybe more than-- I think you come on a few times a year. So we'll keep this trend going. 

BRUNO AZIZA: Yeah. We have the summits. We have the Data Engineering Summit. And now we have Next. So we'll talk to you as often as you'll let us talk to you. 

STEPHANIE WONG: It just shows that you have so much coming out throughout the year. So let's keep this trend going. Maire, thanks so much for joining us as well. And we'll see you all next week. 

MAIRE NEWTON: Thank you. 

BRUNO AZIZA: Thank you for having us. 

DEBI CABRERA: That was a great podcast. I learned a lot on that one. It was really great to be able to hear about the key trends and the top launches from Bruno and Maire's point of view since they're so ingrained in that every day. 

I think I had a few favorites. The continuing to expand the capabilities of BigQuery piece was really interesting to me. BigQuery now supporting unstructured data, plus now being able to have Connected Sheets with BigQuery and Looker, basically allowing you to use Google Sheets with those products-- I think that's huge and really exciting. And I feel like they're always trying to continue expanding BigQuery and what you can do with it. 

And then the BI unification with Looker and Data Studio-- as I've said before, near and dear to my heart since I worked at Looker. So I really love the large focus on the quality and trustworthiness of the data itself, the governance piece there. It's so important because the insights you have are only as good as the data you have. So you need to make sure that you can trust that data so everyone is getting the same answers, plus Bruno did highlight that there is that cost associated with that low-quality data, that "bad data"-- so really excited to see what comes out of that in this coming year. 

STEPHANIE WONG: I think that all of these launches tie into the general theme of Open Data Cloud, which we also touched on in last week's episode. But there are a lot of big steps happening to provide this open, extensible, powerful Data Cloud so that customers can utilize all of their forms of sources and all storage formats and style of analysis across all cloud providers of choice. And as you said, it seems to be that BigQuery is continuing to grow in their features. But it also seems to act as this home, this powerful engine, or maybe it's a combination of both. It's like a powerhouse. We're allowing you to have native support like, for example-- Maire said adding native Spark support right into BigQuery SQL without having to leave the BigQuery console or manage the overhead of Spark infrastructure. And then we also have these launches with unifying data warehouses and data lakes with BigLake. And this is built off years of investment in BigQuery. 

So again, we're just continuing to see this circling ecosystem of features and releases around BigQuery, as well as Connected Sheets, and Looker. So all exciting stuff-- but this is a perfect episode for you again, Debi. What else are you working on these days? 

DEBI CABRERA: Well, as I mentioned, I'm getting married. So I've been working away on making sure that all of that looks good to go. And actually, I've also been working on this Dataflow Prime video. Dataflow Prime recently launched. It's the new, next generation of data flow. And they have a few really cool and different features that they expanded. So make sure to be on the lookout for that video coming out in the next few weeks. 

STEPHANIE WONG: So Dataflow is our batch and streaming service, correct? 

DEBI CABRERA: Yes, that's correct. And so they've just improved it even more with these prime features that are coming out. 

STEPHANIE WONG: Awesome. Well-- looking forward to that video series coming out. Congratulations on the wedding. You have a lot going on. So I guess I'll let you off the hook for now. But thanks so much for joining, Debi. And to everyone else, we'll see you all next week. 

DEBI CABRERA: Thanks! 

[MUSIC PLAYING]
