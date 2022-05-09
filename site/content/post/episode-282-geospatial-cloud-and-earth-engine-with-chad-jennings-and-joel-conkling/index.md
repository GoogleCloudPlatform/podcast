+++
audioDuration = "00:42:12"
audioFile = "Google.Cloud.Platform.Podcast.Episode.282.mp3"
audioSize = 60689629
categories = ["Green", "Data Analytics", "Climate Change", "Machine Learning"]
date = "2021-10-27"
description = "On the podcast this week, Mark Mirchandani and Carter Morgan host guests Chad Jennings and Joel Conkling in a fascinating discussion about Earth Engine and performing geospatial processing to help companies become more environmentally conscious."
draft = false
episodeNumber = 282
hosts = ["Mark Mirchandani", "Carter Morgan"]
title = "Geospatial Cloud and Earth Engine with Chad Jennings and Joel Conkling"
image="/post/episode-282-geospatial-cloud-and-earth-engine-with-chad-jennings-and-joel-conkling/images/hero/hero-EP-282.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/qh0ywa/episode_282_geospatial_cloud_and_earth_engine/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

On the podcast this week, [Mark Mirchandani](https://twitter.com/markmirch) and [Carter Morgan](https://twitter.com/carterthecomic) host guests [Chad Jennings](https://twitter.com/cwj02) and Joel Conkling in a fascinating discussion about Earth Engine and performing geospatial processing to help companies become more environmentally conscious. 

Google's geospatial functionality is some of the most advanced in the world, and with the Next announcements, commercial companies can now take advantage of this with tools like Earth Engine and in Cloud analytics offerings like BigQuery. Together, these tools make the three pillars of geospatial cloud: analysis of vector data with tools like CloudSQL or BigQuery, analysis of image data with Earth Engine, and taking advantage of the data assets. This geospatial analysis helps us understand the world and how it's changing, then apply this information to make important, environmentally friendly decisions. 

As a key part of this system, Earth Engine is a geospatial data-processing platform specializing in the analysis of satellite images and other image data. It provides access to over 800 datasets and processing software that scales to planetary-scale analysis. At Next, Google announced Earth Engine availability for commercial use. Our guests talk about the applications of this in the real world, from the effect of climate risk on a financial portfolio to locations most susceptible to forest fire. 

Chad and Joel tell us about the sources of Earth Engine's data, the pre-processing work done to the images collected, and the ease of data sharing between platforms. By working with BigQuery, users have access to additional datasets and analytics tools as well. Google clients are taking this data and creatively using the information to make meaningful decisions. Insurance companies, for example, analyze data to assess flood risk, while the U.S. Forest Service uses the platform to advance their mission of sustainable forest management. Unilever uses Earth Engine in their commitment to zero additional deforestation in their supply chain, and our guests talk more about the Next presentation with Unilever. Additional BigQuery announcements at Next can be leveraged in Earth Engine as well, and new features such as Analytics Hub make accessing datasets even easier. 

Google works to meet users where they are and make tools easy to use from day one. Earth Engine's data processing, scalability, and more make it easy for users to focus on the analysis rather than the prep work. Our guests offer advice for getting started with Earth Engine and BigQuery and share a little about Climate Engine.

##### Chad Jennings

[Chad](https://twitter.com/cwj02) came to Google from the startup world doing big data navigation processing and research. Working at the intersection of geospatial and big data at Google Cloud is a marvelous place to work.

##### Joel Conkling

Joel is the Product Manager for both Earth Engine and Environmental Insights Explorer and has worked at Google since 2010. 

##### Cool things of the week

* BigQuery Omni now available for AWS and Azure, for cross cloud data analytics [blog](https://cloud.google.com/blog/products/data-analytics/analyze-data-across-clouds-with-bigquery-omni)
* How geospatial insights can help meet business goals [blog](https://cloud.google.com/blog/products/data-analytics/geospatial-analytics-and-insights-on-google-cloud)
* 9 things I freakin’ love about Google Cloud identity and environments [blog](https://cloud.google.com/blog/products/identity-security/identity-and-environment-in-google-cloud)

##### Interview

* Earth Engine [site](https://earthengine.google.com)
* Earth Engine Development Guides [site](https://developers.google.com/earth-engine/guides)
* Big Query [site](https://cloud.google.com/bigquery)
* CloudSQL [site](https://cloud.google.com/sql)
* Climate Engine [site](http://climateengine.org)
* Geospatial analytics and AI [site](https://cloud.google.com/solutions/geospatial)
* Analytics Hub [site](https://cloud.google.com/analytics-hub)
* Monitoring air quality with S5P TROPOMI data [blog](https://medium.com/google-earth/monitoring-air-quality-with-s5p-tropomi-data-4f6b0aebe1c0)
* Visualizing geospatial data with pydeck and Earth Engine [blog](https://medium.com/google-earth/visualizing-geospatial-data-with-pydeck-and-earth-engine-8f77ce1fc8bb)
* More accurate and flexible cloud masking for Sentinel-2 images [blog](https://medium.com/google-earth/more-accurate-and-flexible-cloud-masking-for-sentinel-2-images-766897a9ba5f)
* NICFI’s satellite imagery of the global tropics now available in Earth Engine for analysis [blog](https://medium.com/google-earth/nicfis-satellite-imagery-of-the-global-tropics-now-available-in-earth-engine-for-analysis-1016df52a63d)
* Earth Engine for Commercial Use: Now in Preview with Google Cloud [site](https://earthengine.google.com/commercial/)
* Next Session: Geospatial Innovation at Unilever [video](https://cloud.withgoogle.com/next/catalog?session=DA205#data-analytics)
* Next Developer Keynote: technology trends [video](https://cloud.withgoogle.com/next/catalog?session=DEVKEY1#featured)
* What is Google Earth Engine? [video](https://www.youtube.com/watch?v=5fQn_CMPwfU)
* Helping companies tackle climate change with Earth Engine [blog](https://blog.google/products/earth/earth-engine-preview-google-cloud/)
* Google has the cleanest cloud. Now it’s helping other companies go green [article](https://www.fastcompany.com/90685146/google-cloud-wants-to-help-your-company-go-green)

{{< transcript "[MUSIC PLAYING] MARK: Hey there, everybody, and welcome to episode 282 of the weekly Google Cloud Platform Podcast. I'm Mark Mirchandani, and today, I'm here with Carter Morgan! It's been a minute, Carter." >}} 

CARTER: It's been so long, Mark. 

MARK: [LAUGHS] It's been so many minutes. 

CARTER: I don't remember. 

[LAUGHTER] 

It's good to see you. It's good to be back. And especially like this episode, this is an exciting one. 

MARK: Oh, this is such a cool episode. 

CARTER: Yeah, I knew nothing about today's topic. Do you want to tell themc about it? 

MARK: Yeah, I mean, I think that we definitely wanted to capture some of the great announcements coming out of Next. We have some great guests. We have Joel and Chad who are both on the product teams here at Google to talk about Earth Engine, which yeah, I mean, I'd heard of it, but didn't really have any experience with it. And some of the announcements from Next, the data analytics announcements, and we really talk about this idea of geospatial cloud. 

CARTER: For me, I was excited because the word you use, geospatial, in Earth Engine-- I'm like, I use map apps in Google Maps or food delivery apps every day. And everyone in my family knows I'm this tech guy, supposedly. But then they're like, how does this work? And I'm like, I have no idea at all. So this episode, hopefully, I can talk to Joel on them, and then go back home to my family and explain things. And they'll go, oh, you are a smart person again. [LAUGHS] 

MARK: We definitely get a great overview of some of the cool things that this technology unlocks. I don't know that I could probably explain to my family how the satellite imaging works. I think we still need to do another episode on that. 

CARTER: 100. 

MARK: But super informative episode and such a great conversation. I can't wait to dive into it. 

CARTER: Yeah. 

MARK: But before we do that, maybe we should dive into our cool things of the week. 

[MUSIC PLAYING] 

CARTER: I'm going to kick this one off then. Because you said Next, and talking about Next, there was a lot of announcements, even last week on the podcast, Eric and Bruno came in. And they gave a quick rundown of the data announcements. But in light of today's article, I thought I would highlight something that was new to me. BigQuery Omni was announced at Next. There was a nice companion article on the blog. It was written by Joe and Vijay. And basically, the idea is that there are over 90% of the industry or around 90% of the industry is multi-cloud right now, which means they have their data in multiple places, which introduces a lot of problems. 

Like, you want to be able to see that data in one place. You might want to be able to move that data around in a seamless manner. You have to keep all of that secure with the complexity that comes with having data in different places and systems. So that's where BigQuery Omni comes in, where it's basically supposed to provide you with a single pane of glass or single dashboard across multiple clouds with a consistent governance model across those clouds and a simple way to move data. So I think that's really cool. I think that's going to be really important going forward. And if you want to know more about that, there's a very cool article on the blog about BigQuery Omni. 

MARK: I think it's a very cool technology that really shows it's just great to see when they take these challenges that businesses have and develop tools that are really-- I hate to use the word "innovative" because it's such a blanket term. But it's exactly what they are, right? They help you innovate because they break down some of the challenges that you might have. And one of those big challenges comes from being multi-cloud and not being able to take the data that's stored in all these clouds and access them. And BigQuery Omni is such a great solution for that. 

CARTER: 100%. 

MARK: So I have two cool things, because I can never narrow it down to just one, as always. But I'll keep it quick. One of them is this really, really quick blog post that actually ties in well with our conversation talking about how geospatial insights can meet business goals. And it's written by a couple of folks from the solutions team, probably not super obvious about the solutions team. But in Google, the solutions teams are really built to work with customers, understand their unique challenges, and then try and look at creating patterns that can apply to more than just that individual customer. 

And so it's always really great to see their insights. And one of the insights they put together in this blog post are just some of the different challenges that geospatial technology and geospatial tools like we'll talk about in a little bit can be used to kind of work with the business. So I recommend that as a quick rundown just to get some cool ideas. And then the second article is actually written by Forrest, who we had on the podcast about two weeks ago when we were talking about all the Next announcements at a high level. And he's talking about nine things he loves about identity and environments in Google Cloud. It's a fun read. And I think it's a fresh take. 

CARTER: Not just loves, freaking loves. 

MARK: Freaking loves. 

CARTER: That's how much he loves it. [LAUGHS] 

MARK: Absolutely, right? And I think he does a good job of kind of showcasing some of the things that are really cool about Google Cloud. And I think all of these are definitely worth a quick look. It's easy to think about the fact that we've been using Google Cloud for years, Carter, right? So we're a little bit more familiar with it. But when somebody comes to this fresh, they have to learn all the intricacies of the cloud. And it's going to be the same for every cloud, right? They're going to have their own unique pieces. So it's just cool to see Forrest walk through some of the things that he thinks makes Google Cloud really easy to use and fun, and freaking loves. 

CARTER: And freaking loves. Yeah, that is cool. I can't wait to check that article out. Well, yeah, without further ado, why don't we get to this very exciting conversation about Google Earth Engine and BigQuery and how they work together? 

[MUSIC PLAYING] 

So I'm very excited about today's episode for all the reasons you heard before. Let's kick it over to Chad and Joel. Can you tell our audience a little bit about who you are and what you do? 

CHAD: My name is Chad Jennings, product manager for data analytics at Google Cloud. And I'm also the geospatial lead for Google Cloud. So very excited to be here and talk about some of the new stuff that Joel and I have been working on for the last while. 

JOEL: My name is Joel Conkling. I'm a product manager on Google Earth Engine. I've been working closely with Chad on the Cloud work that he just mentioned, and likewise, really excited to share more about the Earth Engine news and where we're headed. 

MARK: And just like you said, we're coming off of Google Cloud Next 2021, where there was some really great announcements around geospatial cloud and around Earth Engine. But I think that begs the question, what is geospatial cloud? And what is Earth Engine? 

CHAD: I'll talk a little bit about geospatial cloud. Google has a lot of, call it, geospatial cred in the world. And at Cloud, we're leveraging that by bringing geospatial functionality into our cloud data analytics products. So things like BigQuery, Cloud SQL, Dataproc, all of these things support geospatial analytics, which is very, very cool. 

And by bringing these things together, including Earth Engine and including some of the, call it, very special data assets that Google has, we can bring these functionalities together into what Joel and I have been calling the three pillars of the geospatial cloud, which are being able to do analysis over vector data or tabular data using BigQuery or Cloud SQL, doing analysis over imagery and raster data using Earth Engine, and then taking advantage of these data assets. We'll get into more details on all of these things, but roughly, those are the three pillars that comprise the geospatial cloud that we're talking about. 

JOEL: And so if you want to understand the world and how it's changing, that's where this geospatial analysis comes in. That can be in a variety of applications. But for example, you might be wondering where traffic is increasing or where flood risk is increasing. You might be wondering where deforestation is happening. What are the risks to your supply chain? So geospatial cloud is super helpful in answering all of these questions. Chad gave a really good overview of what's the geospatial cloud umbrella? And Earth Engine, which we recently announced is in preview at Cloud Next, is a key part of that. 

So Earth Engine is a geospatial data processing platform which really specializes in what we call raster data or satellite imagery analysis and other sort of similar data sets. With Earth Engine, you have access to more than 800 different analysis-ready data sets, which adds up to more than 50 petabytes of data. And that's growing all the time as we update those data sets on a regular basis. That's located or co-located with a processing platform that seamlessly scales to planetary scale analysis. 

So you want to analyze something at the scale of a city or a zip code, Earth Engine can do that. You figure out that you have something that works and you want to run that globally, Earth Engine can help you there too. So Earth Engine really helps our users answer questions about the world, how it's changing, and connect that to the operations of their business, the operations of the work they're doing in a government agency, for example, and help them make decisions that are informed by up-to-date information about the state of the world. That's the journey that Earth Engine is on. And we really have seen high impact use cases that we'll talk more about in a minute that help us all make really substantial progress on global challenges for a variety of sectors. 

CHAD: Before we touch on that, we should also say that the big launch moment that we had just recently was about making Earth Engine available for commercial use. Earth Engine's been in the world for a decade, and it's being used by more than tens of thousands of users every month. And Joel, I forget how many papers it's been referenced in the last year. It's like thousands of papers a year. And so it's available for free use for researchers. That's going to continue. 

The thing that's new as of last Tuesday is that Earth Engine is going to be available for commercial use as well. And so to your question here, it opens up a whole variety of sectors, of industries, of customer use cases that just weren't possible before because of the restrictions that we put in place. And so that launch is the thing that Joel and I have been working on for like three years now. So it's really exciting to see it come in. 

CARTER: You said a variety of sectors are using this. And immediately where my brain jumps when I hear geospatial processing and data-driven, I would think of maps or food delivery. And it sounds like this has uses outside of that. So what kind of people do you see using these tools like Earth Engine or geospatial cloud? 

JOEL: Yeah, and just to hit a couple of specific examples in the brand that Chad just shared, you might be interested in a financial services company, interested in climate risk, what's the effect on your lending portfolio? Earth Engine has data sets and tools that can help with that analysis. We've got use cases where CPG companies are looking at their supply chains, trying to ensure that those supply chains are sustainable, in some cases deforestation-free. Earth Engine's really pivotal in those kinds of workflows. 

We also have a broad set of use cases around natural disasters. So where were floods happening? What was the extent of that forest fire? Where is forest fire risk the highest? Those come into play in a lot of different industries and use cases as well. Agriculture is another one where the data that's available on Earth Engine is being refreshed globally every five or six days. 

A data set called Sentinel 2-- so you've got a new image of the world every five or six days which you can then analyze to see the health of crops and understand whether there are interventions you should be making in the fields that you're managing or overseeing. So that's just a small smattering of the use cases that we see users really getting into Earth Engine and making progress on, but some of the ones that we think are the most exciting and some of the highest impact as well. 

CARTER: So this is really interesting when we talk about this. And just being good on its own, some things I'm really wondering about are like-- you said data gets refreshed every five or six days. And so it sounds like there's a lot of different sources that are pulling and then supplying Google Earth Engine with this data. Is it possible to talk about that at all? Where does this data come from? Or how is it populated so often? 

CHAD: By launching these two things in conjunction and together, like say BigQuery and Earth Engine, there's also the opportunity to extend all of those use cases that Joel just described by sharing data between the two platforms. So I'll use the agriculture one that you just described, right? If you've got crop health information and biomass from that Sentinel imagery for your various fields, you can make predictions about yield by pulling that data into BigQuery and then using machine learning combined with weather data to say, oh, look, the biomass in Argentina is really strong last year. 

The weather happens to be really great for soybeans. That means that Argentina's yield next year is going to be really, really strong. That information is helpful to commodities traders. That information is helpful to government food planners. That information is helpful to agriculture insurance companies. Insurance is another big use case. 

So by bringing these two things together, Earth Engine and BigQuery, we really do expand the use cases that Joel went into by giving Earth Engine users access to all these data analytics tools inside the Google Cloud. And vice versa, now all the Google Analytics folks are like, oh, I can use Earth Engine to get even wider and more diverse information to inform my analytics. So the intersection and the synergy is really fun to explore. 

MARK: And it sounds like that's a really kind of key point there to all of these Next announcements that did come out. It's more than just having large corporations have access to Earth Engine now. It's really about being able to take that data and transform it using all the other cloud tools that Google offers and really, whatever other business ideas they have. 

CHAD: Let me give you a yes and no to that one. If we just launched Earth Engine for commercial use, it's incredibly useful to customers. Our launch customer Unilever speaks at length about their use case. We'll probably touch on it later here. But then there's the "and"-- and exactly what you said. Once you have these two things together, it gets even more powerful. 

JOEL: Earth Engine, as I mentioned earlier, has about 800 data sets in that Earth Engine data catalog. And that's all analysis-already data. If you're in Earth Engine, you're a line of code away from being able to start analyzing it. So you don't have to do preprocessing. You don't have to download it from anywhere. It's just ready to go. A lot of these data sets, almost all of them in Earth Engine, are open free data sets that are provided by, in many cases, the US government, European government, or others. 

And those programs, they have satellites in space that are capturing imagery on a regular basis. The Sentinel program that Chad and I just mentioned, Sentinel 2, captures imagery every five days or maybe six days around the world. And they're doing that at 10-meter resolution. So there's always this trade of temporal resolution, how frequent, and spatial resolution, how fine-grained is the data that's being collected? There's other commercial platforms that go to much higher resolution, like 25-centimeter resolution. That's possible to bring into Earth Engine, too, although it's not available in the Earth Engine data catalog for free. 

And then other satellite programs have different characteristics. So there's others that are getting a daily capture of the world, but at a much coarser spatial resolution. So as soon as that data is made available from the satellite, Earth Engine's picking it up, ingesting it, preprocessing it, and again, making it ready for analysis. So with that one or two lines of code, you can start to explore that data, see what's new in the world in some cases. 

And we'll may go into this later a bit more, but if you've got a machine learning model that knows how to process this imagery, Earth Engine can then send that into a model for inference, turn that into some semantically structured information, then bring it back into Earth Engine for further analysis, or get it over into BigQuery for further analysis. It really is sort of a strong focus on enabling those operational decisions as soon as that data is available to update your understanding of the world. 

CHAD: I think Joel is actually being a little bit modest here, right. He explained, call it, that temporal resolution that essentially refreshes every few days. But Joel, once a new Sentinel image lands-- they create it, the satellite takes the picture-- how long does it take to land in Earth Engine? 

JOEL: So we usually have it available in Earth Engine six to 12 hours after the data is available from Sentinel's data hub, basically. And so that's pretty quick. It used to be days for Earth Engine. And we've made it a lot faster. At the same time, I want to manage expectations a little bit that that's not an SLA. It's our typical performances in that range. 

CHAD: Yeah, so not guaranteed, but compared to what the system used to be like-- satellite takes a picture, they download it to the government, and then it got distributed in actual hard medium-- like, that was weeks, right? 

JOEL: Yeah, if not more. If you go back about 15 years, the US has this program called Landsat, which ended up storing most of its satellite imagery data on tape in a secure facility. And if you wanted it, you had to send in an order form and then wait. And you might get that tape eventually. Earth Engine, starting about 10 years ago, went in and took all of that data off of tape. So now you've got data going back to the 1970s, which, again, with a line or two of code, you're able to start interrogating that data and accessing it. It's a lot faster than it used to be for sure. 

CHAD: And Joel's not kidding about the line or two. My background actually is in navigation processing from aerospace. I did aerospace before I came to Google. And when you take pictures from space, you've got the 2D surface of the camera in the satellite, but it's taking a picture of the 3D surface of the Earth. 

So to make that an image that's usable in the way Joel is talking about, you've got to go through something called orthorectification, which is to properly warp the image to reflect the curvature of the Earth. And then you've got to mosaic it with all the images that it took like the second before and the second later. Earth Engine does all of that automatically. So you're not messing with individual images. You just include a layer that spans the whole thing. It's so great. 

MARK: Yeah. Now I'm tempted to shift the entire focus for this episode, and just hear more about Chad telling us about how this actually works, because it's so amazing to hear. I mean, I want to talk about some of the customers, the use cases that came out of the announcements here. But it's really fascinating because we talk a lot about the idea of democratizing data. And this is such a great example of what that actually means. Because there's so much science, there's so much technology that actually goes into making this data available, and creating a great platform for users to use it. 

But that's only half of the story, because the next half of the story is the folks who are actually using it to, again, whatever their businesses need, whatever their enterprises are focused on. But they're actually taking this and saying, we don't need to worry about handling it. We don't need to worry about writing it. We're just going to take it and really transform it into meaningful results. So maybe, Chad, we might have a separate episode on the satellite stuff, because that sounds so cool. But I would love to ask about-- we talked a little bit about Unilever. What are some of the other folks that are using Earth Engine and the geospatial cloud? And what are the things they're doing with it? 

JOEL: We've got users who are analyzing satellite data to assess where floods have happened-- global understanding of flood locations, flood extents, flood severity, bringing together a bunch of different data sets into some pretty sophisticated analyses. That ends up being useful to organizations like the United Nations. It also ends up being useful to insurance companies who are assessing their underwriting criteria and making sure that they're not taking on undue risk and that they're pricing their insurance properly. So that's one example. 

The US Forest Service is another user of Earth Engine doing a lot of great work in the platform. Their mission is to sustainably manage the forests and the grasslands of the United States-- massive area having the understanding of where there are issues, where those resources are healthy, and where they need to take a closer look, because something looks like it's off. Earth Engine's really well attuned to be able to help with that. And they can track trends and patterns over decades using some of the catalog that we talked about going back to the 1970s. 

So that's another set of use cases that not only is it making the Forest Service job easier in the sense that it might have taken one of their data scientists or developers months to run a specific analysis. Now they can do it in the course of an afternoon. It just gives them a huge amount of leverage to get more done and to really achieve their mission in a more effective way. So flooding, natural resource management, we've alluded a little bit to the sustainable supply chain use cases. 

Unilever was one of the highlights of the preview announcement at Cloud Next. They've committed to a deforestation-free supply chain in palm oil in particular. So palm oil is often harvested in Indonesia and other sort of tropical rainforest areas like that. And palm oil ends up being one of the leading causes of deforestation in those areas. And so Unilever has taken really a leadership role in saying, we're not going to source palm oil from areas that have been deforested. 

There's a fairly complex supply chain, but Earth Engine helps them understand where the palm oil mills are, and what are the forested areas around that. Understand the risk that the source for that palm oil mill may have come from deforested land or not. And really give them insight into the risk of deforestation in their supply chain so that they can make sure they're buying palm oil from the places that are most sustainably managed and have not been associated with deforestation. 

CHAD: I'm buzzing about the Unilever one. So first, a shameless plug-- we did a session with Unilever at Next that's called "Geospatial Innovations for a Cloud-First World." Definitely check it out if what Joel just said makes you interested, because the folks from Unilever are A, up to great things, and B, expressed it really well in the session. The other thing I wanted to touch on-- so Joel explained a lot of the analysis that Unilever is doing to make sure that they're sourcing from areas that are not increasing deforestation. 

The other thing that they're doing is that they realize this is a very complicated geo and sociopolitical problem. And so they're using technology, specifically Earth Engine and Earth Engine apps, to communicate some of these geospatial findings. This mill is doing great over here. And so with the Earth Engine developer environment, you can create the analyses to do this work. With Earth Engine apps, you can disseminate these results to anybody with a cell phone and a web browser. 

So that's so critical and so huge, because it gets you scale that you can now get your results out to, like, millions of eyeballs. That doesn't happen on other platforms for free. That's incredible. And socially and politically, it's a critical step to bring all of the stakeholders, regardless of where they are, as long as they've got a cell phone access to the internet, they can be informed about what Unilever is up to. And by being transparent and leading through example in transparency is the only way you get, like, 17 different levels of government and communities on board with such an ambitious goal as having a deforestation-free supply chain that spans four continents. 

CARTER: Oh, wow. Yeah, there's so many different places to go here, because I hope everyone listening at home realizes just how impactful and how big of a deal this is. Basically, companies being able to analyze their supply chain and say, oh, we want to better for the environment, or in other areas. And so that's a lot of power that Google is giving away. One question I want to ask is, why? Why now? This is a product that existed for 10 years or so. What forces came together-- whether it was a technology or whether it's maybe the need to get something like this out there-- what forces came together to make Google want to release this now? 

JOEL: The sort of genesis of Earth Engine, as you mentioned, Carter, was about 10 years ago. And it really started off focused on serving the scientific, research, academic, and non-profit community. And that community has done amazing things with Earth Engine. And they've helped make Earth Engine itself better with all the feedback, all the new use cases they bring that Earth Engine didn't quite solve at the time. But if you just did this one new feature, that would really help. So really have built the Earth Engine platform with the help of that community. 

Then you've got people who started using Earth Engine in university, maybe in a master's or a PhD program. Go off to work at a company and they're like, wait, can I use Earth Engine for a problem that my employer's got, or the agency I'm working for has got? It's actually part of the story of Unilever, which we've already mentioned a little bit. That's-- part of how Unilever learned about Earth Engine was through a story like that. 

So as Earth Engine improved, and over time, over that decade, more and more companies and more and more government agencies started coming to us and saying, hey, can we use this for this use case or for that use case? We really weren't set up for that up until recently with this preview announcement. But we think that the impact that Earth Engine can have is multiplied and accelerated by having operational decision makers working in Earth Engine and making decisions based on the power of the tool. 

Just to be clear, we will continue to support the community that's been using Earth Engine for a decade now. That's not going away. That's really a symbiotic relationship of the best science is being created in Earth Engine. And then you've got folks like Unilever turning that science into practice and applying that to real operational decision making on the ground so that that science has the most impact that it possibly could. 

CHAD: There's a bit of the story from the Cloud side as well, in that we launched geospatial support inside of BigQuery in 2018. Because the Cloud folks didn't know much about geospatial, so we leveraged expertise from Google's geospatial side, which is Joel's team. That's kind of how Joel and I met. And when we had that support in BigQuery, after that 2018 launch, we saw the usage of geospatial analytics in Cloud go way, way up. So that indicated that there was some demand for this. 

And then as Joel said, he was seeing demand on his side. And so we decided to come together. Plus the appropriate primacy of sustainability and climate change in the national conversation right now, this is just absolutely the right time for Google to really lean in and bring more of our tech that exists in the nonprofit world into the commercial space, because companies are recognizing that if they don't understand the climate risk to their supply chain or their selection of SKUs or to their investment portfolio, then they don't understand the risk. And if you're not managing the risk, you're not managing your business well. So from all three of those different dimensions, the stars were aligning. And this is the right time for us. 

MARK: Yeah, it's super exciting to hear that journey that Earth Engine has taken and the ability it has now. We've talked a little bit about how it works. I think I'd want to ask a few more questions about the Cloud side, right? So geospatial support in BigQuery is a big part of this because, of course, BigQuery is a great tool for being able to analyze data, and being able to analyze geospatial data kind of makes sense. Were there any other announcements from Next or any other features that kind of help support this story? 

CHAD: Yes, we announced some new things inside of BigQuery Geospatial for Next. Launched a whole bunch of new functions and some new, very clever functions around ingesting data and automatically shaping things. So that's a little bit very specific. BigQuery also launched some other features, specifically Analytics Hub, which is essentially a data marketplace where folks can post their data sets and other people can consume them. That is a very relevant use case here. 

So if somebody does some awesome work in Earth Engine to calculate, say, deforestation again, they could present that as a data set for anybody in BigQuery to use. Again, when you start to bring these things together, like Earth Engine, BigQuery, it's 1 plus 1. But it equals like a million because BigQuery also has features and other things going on, other collaborations, other connections with other data analytics problems. So it gets very exciting very fast. It can also get super confusing, right? Because, oh, it's overwhelming how much stuff is out there. 

So each of these tools, you can use them on their own. It's pretty easy to get started with each of them. And then as your skill grows and your comfort grows, you can involve more things. But there's no statement that you have to combine 700 million things to get the first bit of value. That's just not the case. 

CARTER: Before Earth Engine, before this BigQuery integration, how would data like this typically be stored and worked on? That might set a little bit more of a frame for why this is so helpful now. 

CHAD: In some respects, it didn't get worked on. There are some other legacy tools who are now joining us as partners and moving to the Cloud. We'll talk about them another time, I think. But in a lot of cases, an analyst would have a table, say, Customers. And that might have some location information associated with it or aggregates of customers. And they just kind of didn't use that data. It's like, OK, let me focus on transactions, because all the databases know how to add numbers. They don't know how to deal with latitudes and longitudes. OK, so I just won't worry about that. 

And so now, analysts are realizing, oh, the functionality is in the tool that I already know how to use. I can now do geospatial analyses as well. Oh, I know SQL. Hey, that's the right language. Let's go ahead and do it. So we're seeing a lot of use cases that come from data analytics now adding geospatial to stuff they already do. So that's one dimension of it, but I think your question is really good also for Joel's side. 

JOEL: There's a scale element to it as well. So for a long time, there have been desktop-based software packages that do some similar things to what Earth Engine does. And you might be able to analyze a couple images from a satellite. Those are really bulky to download. Started overnight and then wait overnight and come back in the morning to start your analysis or whatever. That's one of the answers is, it was happening at smaller scale. And Earth Engine sort of turbocharges that at a much larger scale. 

Cloud in general is making that possible. And so other alternatives are to access data that may be stored in a cloud bucket. That's raw data-- you still have some work to do to unpack that and get it into the right format for analysis. And then you have some data that you can use, but you don't have the tooling or the analysis environment set up. So then you've got to set that up. You have to parallelize your virtual machines to do large jobs, et cetera, et cetera. 

Earth Engine takes all of that drudge work away. And what you might have spent 90% of your time doing-- getting the data ready, getting the infrastructure set up-- and then 10% of your time actually testing a hypothesis or building a new product, that 90% goes away with Earth Engine. And you can spend all of your time doing the work that's, like, this really high value add work of testing hypotheses, getting new prototypes and products out to your customers or to your constituents for feedback, and iterating really quickly. And that speed is an incredible advantage when you're building something new. 

CHAD: In the cloud world, we call that serverless processing, right? That's exactly the value proposition that BigQuery brings. Because it's a serverless product, you don't have to manage servers. We take care of that for you. So in some ways, launching BigQuery when we did, we were kind of copying Earth Engine's model. That's actually not the genesis of the products, but it'd be fun to spin that story. 

CARTER: [LAUGHS] I like that. It was really interesting because just trying to break this down into what I see as the different phases of working with this kind of data, you have to somehow gather or ingest that data. Then you need a tool to process that data, and then maybe visualize that data, and then people to analyze that. And looking at this, it seems like using these tools together takes care of most of that pipeline like you said so that people can really focus on analyzing data and making smart decisions with it. 

CHAD: In addition to dealing with the data, if you want to ingest another 100 terabytes, now I have to go buy 72 more virtual machines and spin them up. And then I have to manage and load-balance. All of that stuff goes away, in addition to the simplifications that you just went through. 

JOEL: Yeah, and just to sort of tie that to Earth Engine more tightly, we've talked a lot about the data. Earth Engine has a web-based developer environment that we call the Code Editor, which has all the docs. It's got your assets. It's got your scripts. You write a script, you hit Run, you see the results right away in the Results window. And then when you want to scale it up, there's APIs that allow for processing on massive scale. That tool I just described, the IDE, the Code Editor is a JavaScript tool. 

If you're more comfortable in Python Notebooks, you can use Earth Engine through those tools as well. So there's just a lot of different ways to interact with Earth Engine, meeting our users where they are, typically, and making it really easy for them to focus on the analysis, focus on the value add, and not worry about all the stuff that Earth Engine takes care of in this case. 

MARK: And I think that combines pretty well with Chad's earlier point that there's a lot of different tools here. You don't have to understand all of these tools at an expert level in order to start using this and start playing around with it. There's a lot of different angles-- there's a lot of different levels of expertise that people can have when they come into it. And so it's always exciting to hear about that for those folks who, they want to get hands-on, they want to try different things out. What advice can y'all offer to those people who want to just try it ahead and get started? 

JOEL: Go to the earthengine.google.com web page. There's a page that's labeled Commercial there, which is where we shared the news about preview and what we announced at Next. From there, you can register your interest in Earth Engine. And we'll get back to you with what the next steps are. 

There's also an option to evaluate Earth Engine. You can sign up to do that from that page as well so that you start kicking the tires, start to get a sense for whether Earth Engine's a good fit for some of the problems that you're trying to solve. And at that point, we can have a discussion about the preview program and what's coming after that. So a couple of different ways to understand more about what we're talking about here and take some tangible actions to get started. 

CHAD: And it's definitely worth checking out the Earth Engine catalog, because it's one of the most eye-pleasing, mind-blowing websites you'll come across. On the BigQuery side, you can just search in your favorite internet search tool-- I hope it's Google-- search for BigQuery sandbox. And that's an environment that you can sign up for in less than a minute that doesn't require credit cards, and you can play with BigQuery. There are a whole bunch of examples out there. If you search Twitter for BigQuery geospatial, folks are posting the work that they're doing there. Where should folks go to look at work that people have published in Earth Engine? 

JOEL: Similar as what you mentioned, you can search for Earth Engine on Twitter. There's a Stack Exchange community that's pretty active for Earth Engine as well. If you sign up for an Earth Engine account, which, again, like Chad mentioned for BigQuery, is a pretty quick and easy process, there's sample scripts that are available there too. So a bunch of ways to get started, see a few examples of what Earth Engine can do, and start building from there. Earth Engine also has pretty substantial set of documentation with lots of good code examples there. So that's another great place to learn more and to get started from a more technical perspective. 

CARTER: Oh, wow. OK, so I have resources to go and check out that I hadn't heard about before. So that's exciting. And then I had one last question as we near the end of this. Earlier in the conversation, Chad, you said there's other applications and ways to share a lot of this information and visualizations. And I was curious if Climate Engine was one of those. Basically, different, friendlier ways or different types of applications that people can use and bundle together to show off these visualizations to get them in front of people? 

CHAD: Yeah, Climate Engine is a marvelous example of people building a service on the infrastructure that is Earth Engine. We've got a bunch of examples with BigQuery, but let's keep the spotlight on Earth Engine here. So I definitely encourage people to go to that very same favorite internet search tool-- again, I hope it's Google-- and search for Climate Engine. And in just a few clicks, you can create a map. So no JavaScript, no coding whatsoever. I actually did this last week and made a map for Seattle of the areas in Seattle that have the highest temperature excursions over the last five years. Climate-related, based on Earth Engine-- put them together, you get Climate Engine. 

MARK: Yeah, I mean, I'm sure there's tons of ideas that our listeners probably have, hopefully, boiling in their heads about different things that they've been thinking about, but just haven't had the ability to do. And so the goal for this-- for individuals and for large corporations-- is really to unlock the ability to do those. 

We'll have probably no shortage of links in the show notes because we've mentioned so many things at this point. But as Carter mentioned, we are getting close to the end here. I'd love to ask if y'all can share just any more information about things that are coming up in the roadmap or things that are coming up soon that y'all are excited about, as well as any great resources for people who want to catch up on all the busyness that was Next this year? 

CHAD: I'll jump in with a couple. So first, shameless plug number 2, check out "Geospatial Innovations for a Cloud-First World." It's my session, so I'm biased, but I think the team did a really great job of pulling together a tight, cogent, interesting story. And we spend a lot of time talking about what Unilever is doing. 

In addition to that, a number of our partners have pulled together the top five announcements. So if you just search, again, for top five announcements from Google Cloud Next, you'll come up with a bunch of articles. And you'll see things like BigQuery Omni, Analytics Hub, all the geospatial work. That's in the top three of every assessment. So I'm super proud of that and super proud of the work that Joel and his team has done to make all of that happen as well. Those are the couple of places where I'd aim people. 

JOEL: There's a really nice article that came out in "Fast Company" that covered a bunch of different themes. Earth Engine's part of that and part of the broader sustainability offerings that Google Cloud is making available at this point. So that might be a nice one to look at for the big picture story. Beyond that, I think there are a bunch of videos on YouTube that will show use cases, training sessions that have been run. So a huge variety of ways to get started and to learn more about what's available on Earth Engine. 

CARTER: Wow, thank you all so much. I learned so much. So thank you for your time and sharing your knowledge. 

JOEL: It's been a pleasure. 

CHAD: Likewise. Thanks very much for the opportunity. 

CARTER: I learned a lot in this episode. And I'm just excited to hopefully learn more in the future, but I feel that just the possibilities of what's available, like being able to play with apps like Climate Engine, and just see what I can create for myself. I'm excited about that. Mark, what about you? How did you feel about that one? 

MARK: That's the part that I love to hear the most in this conversation and other conversations, where we get to really understand it's more than just a new feature or a new tool or a new announcement. It's really about, what can people do with this? And just like you were saying, it's so cool to see the tools like Climate Engine. I'm sure there's no shortage of other ones. We'll have a bunch of links in the show notes based on all of the things we went through in that conversation. But it's so cool to see what people can do with this. 

I'll put up myself on a soapbox here for a second, right? There's so many challenges we have on this planet right now. And it's really, really cool to see the folks who are using this technology to actually take action on working on some of those climate challenges that we're seeing. I'm really hopeful that in the next couple of years, we're going to see a little bit more attention than maybe has been paid to it. [LAUGHS] 

CARTER: Mm-hmm. I think if you're going to have a soapbox, the life of all people on the planet is a good soapbox to have. So I think what's cool, just to kind of recap-- Google Earth Engine. It's a geospatial processing service, right? And so what it can do is it lets you look at a bunch of data points from all over the world that are collected in other various places in not real time, but very close to it-- pretty close compared to what was available in the past. And from there, you can do operations on this data-- analyze it, make visualizations, share with people. Just wow. 

MARK: Yeah, and the fact that it ties in with all these existing tools like BigQuery, which I think we've had a lot of conversations about BigQuery in the past. It is a super great, very interesting data analytics tool. But then taking it to the next level and being able to actually work on geospatial data that is made available through Earth Engine just makes the whole world a little bit more seamless. 

CARTER: Yeah, and I thought that was a great point in the conversation. This wasn't possible 10, 15 years ago, whether it was the speed of collecting data. I don't remember the exact number. I think Chad said it used to take days, maybe weeks to get some of this information updated. Now it's six to 12 hours. And then even just the lat/long data inside of BigQuery and things like that, now you can actually operate on lat/long data the same way you would operate with other primitives. I was just really excited because it's really cool to me to see things that weren't possible not even a little less than half my life ago. That's crazy. 

MARK: It also makes you think about how impactful speed really is into thinking about these solutions, because maybe some of this was doable, like you said, a decade or more ago, but at 1,000 times longer. And when you have that type of effort that goes into collecting data and then analyzing it, you just can't really come up with the same level of insights as you can when things are on a couple of seconds or a minute basis. There's so much you can do with that type of speed. 

Again, we'll have those links in the show notes that show examples of people putting that to work. And what is that going to look like two years from now if they're going to continue to expand on that? It's so cool to see. 

CARTER: I would love to see even more. Can you take this and add it to AR in the future, things like that? But you're saying it'd be really cool to see, and that's one thing I really wanted to highlight. I think if there's one takeaway from this episode, I would want people to just go and see what's possible with some of the tools that are made possible by Earth Engine. 

So if you look at Climate Engine-- we mentioned that earlier-- there was an article that we'll link where someone was measuring air quality using Climate Engine. And then they were able to use a slider to show back and forth the differences in air quality in places. It was very visual, very intuitive. And I think it's only possible with tools like Google Earth Engine and BigQuery together. 

MARK: Yeah, I think Chad put it really well when he was like, oh, shoot, we're on a podcast. We can't show these graphics. But it's such a different experience to talk about it than it is to see it. So for our listeners, please do check out those links, because I do think they really help you visualize and then understand and put into concrete terms the type of things that's being enabled by this. And then hopefully, it kind of takes your mind to go to the next step and say, what's possible? 

CARTER: What's possible? Well, Mark, it's been an absolute pleasure getting to talk with you after so long. I'm glad we got to do this. 

MARK: Yeah, Carter. It's always great to work with you. I'm looking forward to doing more of these in the future. And of course, for all of our listeners, thank you all so much for tuning in. 

CARTER: Bam! 

MARK: [LAUGHS] Yes, bam! I like that. 

[MUSIC PLAYING]