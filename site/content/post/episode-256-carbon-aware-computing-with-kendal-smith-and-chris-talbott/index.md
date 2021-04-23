+++
audioDuration = "00:31:39"
audioFile = "Google.Cloud.Platform.Podcast.Episode.256.mp3"
audioSize = 45509743
categories = ["Green Computing", "Sustainability", "Carbon Free"]
date = "2021-04-21"
description = "This week on the podcast, Stephanie Wong and Alexandrina Garcia-Verdin are diving into an important topic for our global community: sustainability and carbon aware computing."
draft = false
episodeNumber = 256
hosts = ["Alexandrina Garcia-Verdin", "Stephanie Wong"]
title = "Carbon Aware Computing with Kendal Smith and Chris Talbott"
image="/post/episode-256-carbon-aware-computing-with-kendal-smith-and-chris-talbott/images/hero/hero-EP-256.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/mvkl1y/episode_256_carbon_aware_computing_with_kendal/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week on the podcast, [Stephanie Wong](https://twitter.com/stephr_wong) and Alexandrina Garcia-Verdin are diving into an important topic for our global community:  sustainability and carbon aware computing. Kendal Smith, program manager for Carbon Intelligent Computing, and Chris Talbott, leader of the sustainability product marketing efforts at Google Cloud, start the show telling us why sustainability is so important in the tech world. 

Environmentally conscious data centers are an important part of Google Cloud sustainability efforts. Using computing in the smartest way possible, Kendall tells us,  is the root of green computing. Wind, solar, and other low or carbon-free energy sources are employed at Google Cloud data centers to accomplish this goal. Kendall  and Chris detail the green goals Google has met or exceeded, including carbon neutrality in 2007, and future goals for Google.

Chris explains how Google Cloud customers have taken advantage of Google's sustainability practices and been inspired in their own businesses. Kendall details the Carbon Intelligent Computing Platform and how they adjust compute times to align with available carbon-free energy. We hear about Google's sustainability metrics, including the Carbon Free Energy Percentage, and how these measurements can help Google and its customers run environmentally friendly applications. Chris describes the process he and his team go through when helping Google clients design their carbon aware strategy.

To wrap up the show, our guests talk about the future of de-carbonized computing at Google.

##### Kendal Smith

Kendal is the Program Manager for Carbon Intelligent Computing at Google, which reduces the carbon footprint of Data Centers by exploiting flexibility in compute workloads. She also helps Google engineers build products efficiently, as well as advise other Bets on carbon measurement and tracking. 

##### Chris Talbott

Chris leads sustainability product marketing and customer engagement efforts for Google Cloud, and works on opening new Google Cloud data centers throughout the globe. He helps customers improve the environmental impact of their IT operations and identify new opportunities to tackle climate change challenges with cloud technology.

##### Cool things of the week

* Active Assist’s new feature, predictive autoscaling, helps improve response times for your applications [site](https://cloud.google.com/solutions/active-assist)
* Maximizing developer productivity [video](https://www.youtube.com/watch?v=JypfRNRmaXk)

##### Interview

* Google Carbon Aware Computing Workshop 2021 [site](https://docs.google.com/forms/d/e/1FAIpQLSeo6O4-RNGex3k0Ci1qiDw1vgUOedbTbKii7-YZ2cqJCgvW3g/viewform?resourcekey=0-OWLZFWcuUjH5N2lzDa12dw)
* Our data centers now work harder when the sun shines and wind blows [blog](https://blog.google/inside-google/infrastructure/data-centers-work-harder-sun-shines-wind-blows/)
* How carbon-free is your cloud? New data lets you know [blog](https://cloud.google.com/blog/topics/sustainability/sharing-carbon-free-energy-percentage-for-google-cloud-regions)
* Google Cloud Region Picker [site](https://googlecloudplatform.github.io/region-picker/)

##### What's something cool you're working on?

Alexandrina is working on a new series called People & Planet AI. The first episode, [Recovering global wildlife populations using ML](https://www.youtube.com/watch?v=hUzODH3uGg0) is out now. She's also been working on internal websites to share climate information.

Stephanie has been working on a blog post about AppSheet Automation, which we talked about in-depth [last week on the podcast](https://www.gcppodcast.com/post/episode-255-appsheet-automation-with-jennifer-cadence-and-prithpal-bhogill/). 

{{< transcript "[MUSIC PLAYING] STEPHANIE WONG: Hi, everyone, and welcome to episode number 256 of the weekly Google Cloud Platform Podcast. I am Stephanie Wong, back again. And today, I am here with Alexandrina Garcia or also known as AGV. What's up, how are you?" >}} 

ALEXANDRINA GARCIA: Howdy. 

STEPHANIE WONG: I'm super excited to have you, AGV. I feel like we have been on the same team in different spots throughout our time at Google. And today's episode is all centered around a topic that I know you're very passionate about. 

We're actually talking to Kendal Smith who is a program manager for a Carbon Intelligent Computing and fleet optimization for Google. And also Chris Talbott, who is a product and solutions marketing lead for Google Cloud. I brought them in and I brought you in because I know how passionate all of you are around carbon aware computing and sustainability. 

ALEXANDRINA GARCIA: Yes, I really enjoy the space between tech and sustainability and how we can use tech for good, especially in helping all of us share data and apply machine learning to gain insights on where we are negatively impacting natural systems. And then really take measurable action. So yeah, you get a lot of really cool things like the topics that we're going to talk about today, which is being able to measure carbon emissions using technology. 

STEPHANIE WONG: Yes, and you've always been very involved in this space since when we met in 2017, when we were on the same team, right. 

ALEXANDRINA GARCIA: Yeah, it's really pretty cool to be able to be working with you again, lady. And in the more creative and techie team and we get to jump on this podcast and I also get to work on passion projects on our team which is a climate ML video series called People on Planet AI. The intention there is to share real stories and actionable steps for building apps that assist with complex social and environmental challenges. 

And this first episode that we just launched last week that I believe you mentioned in a prior podcast, is about a real Google project called wildlifeinsights.org. And they help measure how healthy our ecosystems based on how much wildlife or lack thereof there is, using motion sensor cameras and machine learning for image classification. 

STEPHANIE WONG: Wow, that's super powerful and we'll be sure to add the link to that video series in the description. And also I just want to say this is a perfect example of being able to merge your passions together, whether it be storytelling, sustainability, technology, all in one place and encourage other people to take action based off of it. So we're going to talk more about that in the episode today. But first, let's get into the cool thing of the week. 

[MUSIC PLAYING] 

So my cool thing of the week is a new feature. It's under Active Assist, if you haven't heard of that. It is a tool that can help you do predictive autoscaling, which helps improve response times for your applications. When you enable predictive autoscaling, compute engine forecasts future load based on your manage instance group's history and scales it out in advance of predicted load, so that new instances are ready to serve when the load arrives. 

If you don't have it enabled, an autoscaler can only scale a group reactively based on observed changes in load in real time, but now we have predictive autoscaling, which enables the autoscaler to work with real time data as well as historical data to cover both current and forecasted load. So this all makes predictive autoscaling ideal for apps with long initialization times and whose workloads vary predictably with daily or weekly cycles. So very cool stuff. 

ALEXANDRINA GARCIA: Yes, ma'am. Well a cool thing I found this week is this 11 minute video on the Google Cloud tech YouTube channel that we typically post stuff on by a fellow DA, Abby Carey. It's on developer productivity using two tools. One is Cloud Run, which is a serverless infrastructure you can program in any language and yes, it autoscales for you. 

And the other tool is Cloud Code, which like its name says, you can plug it into your favorite [? IDE ?] code and it helps you write, debug, and deploy cloud apps faster and without the need of config files. 

STEPHANIE WONG: Awesome. I watched the video and she did a great job. Went into demo, it's a place that you can build and deploy all in one place to Google Cloud and debug from your favorite IDE. So go ahead and check that out. And let's go ahead and jump into our interview with Kendal and Chris. 

[MUSIC PLAYING] 

Kendal and Chris, thank you so much for being on the podcast today. We're so excited about Earth Day and very honored to have you both here. Why don't you start off by telling us a little about who you are, what your role is, and what you enjoy about working at Google. 

KENDAL SMITH: Hey, I'm Kendal Smith. I am the program manager for Carbon Intelligent Computing. Been at Google for about six years now in a couple different areas of the sustainability space. And I'm really excited to talk about this technology today. 

CHRIS TALBOTT: And I'm Chris Talbott, also part of Google Cloud. I focus on a lot of our cloud sustainability efforts, particularly working with customers, want to help them take advantage of all the things that Google is doing from a sustainability perspective for their own business as well as kind of learn from them what are the sustainability challenges that they want to solve with cloud technology. Been at Google for the past four years or so. Used to help launch our data centers throughout the globe, then moved into sustainability as more and more customers wanted to focus on this area as part of their business and their cloud usage. 

STEPHANIE WONG: So this is a cloud podcast, why are we talking about sustainability? 

KENDAL SMITH: Well, sustainability is the core of what we do at cloud and data centers are really what we're talking about here. So when you're thinking about cloud computing there is a physical data center at the end of that and those data centers use energy. So we think a lot about sustainability in the world of data centers. 

CHRIS TALBOTT: It's probably no surprise that the next 10 years are really critical in solving the climate change challenges. And there's sort of a great opportunity in sort of matching up the adoption of cloud technology and its kind of transformative capabilities when it comes to digital transformations for companies. And making sure those digital transformations are also sustainable ones. 

We've seen the amount of companies across all sorts of industries in setting really strong targets really accelerate over the past few years. With those targets being set by boards and executives to actually tackle climate change challenges for their business, I think the cloud and data centers are a great enabler in helping them do that. So it's really important that we kind of integrate sustainability into all of the transformative efforts that our customers and that Google is trying to undertake, particularly with the next 10 years in mind. 

STEPHANIE WONG: Yeah, I see this really great parallel alignment of both the digital transformation push as well as this prioritization of sustainability from top down. These important decision makers at companies are now building this into their strategies moving forward. So just to step back a little bit, we're talking about sustainability today. So can you help us define what that means, especially in the context of data centers. 

KENDAL SMITH: Yeah, so there's a lot of terms that you might hear with sustainability, carbon footprints, carbon neutrality, really what we're trying to do is make sure that we use our computing in the smartest way we possibly can, so that we are good players on the electrical grid essentially. When you use energy, obviously something has to match it on the back end. So we want to try to use as much carbon free sources as we can, such as wind or solar, et cetera. 

ALEXANDRINA GARCIA: And just to kind of dig a little deeper, within the sustainability space, there is now this nomenclature or wording, we hear a lot about carbon neutrality and being carbon free. Can you talk a little bit more about these terms. 

KENDAL SMITH: Yeah, so Google first achieved carbon neutrality in 2007. And when you're talking about a carbon neutrality claim, you're often talking about carbon offsets. So you measure how much carbon due to your actions and then you purchase things on the other side. In 2017 we were the first company to achieve 100% renewable energy in the data center space, which is a really amazing achievement and that's another matching type term. So we count up all of the energy that we used over the year and then we matched it with renewable energy purchases of net new wind farms and solar plants. 

Well we wanted to take that even further. And so the newest goal that we have is by 2030 we want to operate on carbon free energy every hour of the day and in every location. So we're really honing in to the most granular we can be of making sure that all of our consumption is matched with renewable or carbon free energy. 

CHRIS TALBOTT: It's really important to point out that these things are sort of additive, whereas kind of Google sort of led the way in each of these kind of thresholds that we've hit on our carbon journey. And our work with cloud customers and a lot of the sustainability teams that I talk to on a daily basis, they kind of see these thresholds as sort of the targets that they're setting for their own businesses. And kind of the first step is to compensate for carbon emissions. 

The second step is to sort of reduce carbon emissions anywhere you can. And the third step is to try to fully decarbonize and not have to emit carbon in the first place. And I think it's really important that while we believe that we definitely need to decarbonize in order to hit our climate goals and avert the worst consequences of climate change, going to neutrality first is a really positive outcome. Then hitting the 100% renewable energy another great positive outcome is sort of a step further and then this decarbonization target with carbon free energy 24/7 is kind of that final step that we need to take in order to achieve the goals moving forward. 

ALEXANDRINA GARCIA: That's beautifully said. Based on our understanding of sustainability and the whole understanding of our carbon impact, what are some of the things that Google is doing specifically in this space? 

KENDAL SMITH: Yes, what I'm really excited to be working on is our Carbon Intelligent Computing platform. And what we're trying to do is align our compute to times of day when there's more carbon free energy available, so the sun is shining and the wind is blowing. And we do this by looking at batch or best effort type jobs, that have flexibility so they don't need to happen right away, maybe they can happen a couple hours later, sometimes even the next day. And we forecast when the cleanest time of day is going to be and run those jobs then. 

STEPHANIE WONG: Yeah. And that is just very impressive because I feel like it's one of those things that companies with warehouse scale data centers and exposure across the world can do. And I think it is one big advantage of being able to leverage that from a cloud provider. And I know it's also part of these three distinct goals that we have under sustainability for Google. So can you just help us again outline those three goals one more time. 

KENDAL SMITH: Yeah. So in 2007 Google first achieved its first carbon goal of hitting carbon neutrality. After that our goal was 100% renewable energy match, which we achieved in 2017 and have every year since. And then our last iteration of these carbon targets is that we want to operate on carbon free energy every hour of the day in every location by 2030. 

ALEXANDRINA GARCIA: There's a lot of talk in this space too about creating carbon intelligent computing. Kendal, you share a little bit more about what this actually means and how it actually works. 

KENDAL SMITH: Sure. So the technology works by looking at our best effort or batch jobs which have flexibility. There's a lot of actions that you can use on a Google product that has to happen right away. Such as when you hit Enter in a search bar, that's something that has to happen very quickly. 

But there is also a lot of workloads that might be flexible. They don't have to happen right away or they could happen in a different location. And what we do is use that flexibility to reduce our carbon footprint by forecasting when it's going to be cleanest and running our loads then. 

ALEXANDRINA GARCIA: Could you elaborate a little bit more on what you mean by clean energy? 

KENDAL SMITH: Yeah, so we want to be using electricity that's coming from carbon free sources. So aka energy that doesn't emit carbon. This is wind and solar and hydro power, maybe it's coming from a battery. We want to be really thoughtful about trying to use those megawatts, those units of energy on the electrical grid that are clean. And then that in turn reduces Google's carbon footprint and allows us to expand usage of carbon free energy. 

STEPHANIE WONG: Yeah, and we're talking about reducing Google's carbon footprint and just going back to the idea of how to translate this to cloud users, we recently published our first carbon free energy percents for cloud regions last month, which was a huge, huge announcement and win. And so I'd love Chris for you to touch a little bit on this exciting announcement. 

CHRIS TALBOTT: Yeah, absolutely. It honestly is kind of an extension of a lot of the amazing work that Kendal was describing in Carbon Intelligent Computing. I think one thing that the Carbon Intelligent Computing told us is that there is real opportunity to better match the compute load that we have, either ours in Google or potentially our customers, [? obviously ?] they're a big part of the electricity that we use as a company, with carbon free times of day. It showed us that the better we get at matching our demand with carbon free energy supply, the lower our gross emissions are going to be from running workloads on our infrastructure, our cloud workloads on our infrastructure. 

So it showed a lot of promise and I think that's kind of what built into the momentum to eventually launch what we called our carbon free energy percentage. Which honestly is effectively a score, it's applied to each one of our Google Cloud regions, and it's calculated every hour. And it tells us basically what percentage of the energy that we consumed in that place, in that data center, that cloud region, was carbon free. 

So if you're a Cloud customer who is thinking about placing a workload somewhere across our infrastructure, this is a score that you could use to kind of guide yourself to a place where you will know that there's a higher percentage of carbon free energy supplying that app as it runs over time. And ultimately at kind of the macro level of the different choices across our infrastructure, if you choose to prioritize this metric the outcome is that you'll likely lower the gross emissions of running that application in that location because we're maximizing the carbon free energy that's supplying that workload or that application. 

STEPHANIE WONG: Yeah, and this has been a long journey. Being able to empower people, especially cloud users to be able to have an impact on reducing their own carbon emissions through cloud computing. And there are a lot more exciting things coming down the pipeline this year that Google is doing. So I'm really excited about that. But just in terms of the metrics that we're using to enable our users outside of CFE percents, what are some other important metrics and why are they important here? 

CHRIS TALBOTT: I think it's worth kind of returning back to the neutrality, the renewable energy, the carbon free kind of conversation. First things first, most of our customers, they set net zero targets. So I think it's important to keep that in mind, that by moving to a carbon neutral cloud, that's another metric that's really important to a lot of organizations and developers out there who might be trying to pursue a net zero app or a net zero infrastructure or a net zero kind of digital strategy if you will. So since 2007 we've been maintaining that neutrality for all of our infrastructure, largely due in part to the renewable energy efforts. So I think that's a really important metric that we know is generally applicable to thousands of organizations that are setting targets around sustainability. 

One of the other metrics kind of beyond carbon free energy percentage that we launched as part of that release of data, was the carbon intensity of the grid. Basically, depending on what sources of energy are in a particular location, the electricity that you can consume in that location will have a different carbon intensity. If it has lots of hydro power, like in the Northwest of the US, that's a relatively low carbon intensity factor. Conversely, if you're using a lot of coal and fossil fuels to generate electricity on a grid, that would have a high carbon intensity factor. 

We wanted to give that to our customers so they could have another metric when they're comparing two regions that might be pretty similar from a carbon free energy percentage. The examples that we have out there is Frankfurt and the Netherlands have really similar scores when it comes to carbon free energy percentage, but the mix of electricity on both of those grids are very different. And one of them has a much higher carbon intensity. So that could be another factor that users could take into consideration when they are choosing between regions to run their application. 

ALEXANDRINA GARCIA: So we know that carbon is something that's used to measure greenhouse gas emissions and it's kind of a quantifiable, pretty accurate thing that we can basically use to benchmark where we're at and where we want to go. Now it can get pretty complicated. The bigger you are as an organization to kind of track down your entire footprint, but what's really nice is when you're thinking about your cloud strategy and you're thinking through what partners can I use that already kind of taken care of these calculations or are taking care of that side of how much I'm emitting even from a technology standpoint, it's really nice to rely on Google because we are thinking about a lot of these aspects. Now what should people think about in your opinion about their own workloads? 

CHRIS TALBOTT: In conversations with customers, there's kind of a pretty typical decision tree that we like to walk through when we're thinking about I have a net new application that I want to build or an application that I want to modernize as I move it to the cloud. What's the decision tree on where that should land and what we should consider in where we move it. First things first, data residency is critically important to all organizations now and the privacy around their data. So there's sort of a binary decision whether or not something has to land for data residency reasons in a particular country for example. So that's kind of the first step that we see customers considering. 

The second criteria is often around performance or latency to your end users. You want applications, you want them to be fast for the users who are accessing them and sometimes it's not going to make sense to put an application really far away on a different part of the globe if your users are on the other side. That application is going to be much slower. So depending on the performance requirements, you might have a subset of regions that you could prioritize in building your application. 

And then honestly, in our conversations the third criteria that most customers are considering is the carbon impact. When they have this flexibility within maybe a subset of our regions, actually trying to reduce the gross emissions of that application has been prioritized. And then of course, price is always a factor in anything you're building and that's something else that our customers are going to want to consider is the price of the services in each one of our locations. 

STEPHANIE WONG: This is indicative of just how many branches exist in that decision tree and how many considerations there are when it comes to a cloud strategy, along with technical requirements or existing technical debt. So the way that I see it is that this is just another consideration that you have to account for outside of these strict requirements like data privacy and residence, et cetera. 

Now when it comes to actual strategies for utilizing CFE percents, I know there are a couple of things that you can do on Google Cloud right now to take advantage of CFE percents and start to build that into your strategy. Can you talk a little bit about some of those examples? 

CHRIS TALBOTT: A good place to start is kind of what are the types of workloads that would fit into prioritizing this type of data. As Kendal mentioned, kind of the first place that we started with Carbon Intelligent Compute and finding that flexibility was on batch or best effort workloads. Because they tend to have a lot of flexibility in where they can run, not only from a time perspective but in the context of our cloud customers in space, right, from region to region. 

So I think it's worth just thinking about what are the types of workloads in an enterprise or an organization that has similar flexibility, batch compute jobs are a really great example that often can be planned ahead of time and those could be workloads where you could prioritize the highest carbon free energy score for where you want to run those batch compute jobs. 

Another great workload might be kind of backups or archives, your second site type deployments. Making sure that that second site is in a place that maybe prioritizes the carbon free energy percentage would be a good place to start. We know that applications, they tend not to move around once they land in the cloud. You do all this work to build a new application in a place, it's difficult to move the data and move it across the globe to another region. So honestly, the number one thing that everyone could do is just consider this when you're building a net new application and try to land it in the highest CFE percentage place that you can. 

It's functionality that's becoming more and more important as data residency and privacy regulations grow, is the ability to restrict your overall estate on Google Cloud to a subset of our infrastructure. So you can actually go in and set an organizational policy that uses a number of our regions, not all 24, but perhaps the four that you want to use as an organization, and maybe prioritize the ones that have above 50% carbon free energy score. And that way you're kind of setting an eco mode or basically an eco policy for your organization to prioritize lower carbon emissions in your application. 

STEPHANIE WONG: Yeah, and I think one key thing to remember is that the cleanest energy is the energy that you didn't use in the first place. So I think increasing the efficiency of your applications will translate into using less energy and less carbon emissions. And we also have serverless products that automatically scale your workloads up and down. And then also rightsizing recommendations for compute instances too. So there are a lot of things that already exist and has existed on Google Cloud for quite some time and I think it's a mind shift setting that people are now starting to really put at the forefront. 

KENDAL SMITH: That's such a great point, Steph. I think we've often thought about efficiencies in pure dollars, but there is a carbon impact to that and going to the CFE region picker, different regions have very different carbon footprints. And so we're starting to think about how do we prioritize efficiency work in those dirtier regions and be a little bit more thoughtful than just pure dollars sometimes. Obviously dollars are important too, but it's a really another important lens when thinking about what work you want to take on or what type of efficiency adoptions you want to turn on. 

STEPHANIE WONG: Yeah, absolutely. And outside of these I know there are a lot of exciting things that are coming up that you've been working on at Google. So I'd love to hear a little bit more about what you're working on. 

KENDAL SMITH: So our ultimate goal is to help the world decarbonize. And we as Google are one piece of that puzzle. But we want to work with everyone else. We can only achieve this when we all work together in decarbonization. 

So we are hosting a conference on June 17th. I believe there will be a form in the notes for people to sign up if they're interested. We want to start sharing more and talking to people about how to design flexible workloads at the beginning of product design and how to integrate CFE into product decisions and business strategy so that we all are flexible and using our energy as wisely as we can. Again, with the ultimate goal is if we all work together, that's how we decarbonize the grid. 

ALEXANDRINA GARCIA: I love that because I have learned that a lot of the consequences that we're trying to kind of clean up has a lot to do with things that can be fixed in the early design, not at the end of a supply chain. So the early design is perfect to get that kind of guidance and that kind of strategy set up. 

KENDAL SMITH: And we're all still figuring it out. I don't think anyone really has the answer for how to decarbonize. 

ALEXANDRINA GARCIA: Totally. 

KENDAL SMITH: By sharing information between people we can work together to figure out how to design things from the very beginning with an environmental focus. 

STEPHANIE WONG: And Chris, is there anything else that you're working on that you can talk about right now too? 

CHRIS TALBOTT: We plan to work together with our cloud customers to help them decarbonize as well. I think as cloud computing continues to grow and be a part of the transformation of businesses across every industry, there's a lot of opportunity to use cloud technology as an enabler for reducing the impact of not only digital infrastructure, which is kind of an obvious use case, an obvious opportunity that we can really lower the carbon emissions of running apps and infrastructure. But how do you use some of our technology to actually solve more operational challenges unique to your business. 

You mentioned supply chains, like where can machine learning and analytics actually influence how we're sourcing materials and how we're getting better at manufacturing products. And I think there's a lot of opportunity to bring the best of the cloud technologies like machine learning, analytics, compute power, all of these amazing things that we have in sort of our tool belt, and apply them to sustainability challenges. We'll have to do that across the different industries if we want to fully decarbonize. 

STEPHANIE WONG: Yeah, it sounds like there's a lot of entry points for people to actually feel empowered to take action, whether it is using cloud for good in the sustainability space or building it into the product strategy from the get go, or even for existing workloads and seeing how you can actually optimize resource usage by not wasting energy and cost along with org policies and some of our other CFE percent opportunities that we're now giving all of our customers. We're going to be including the links to the upcoming conference that Kendal, you're going to be a part of and a little bit more information about sustainability and our CFE percents. So please keep a lookout for those in the description. 

And I just want to say thank you so much Kendal and Chris. I admire you both for the work that you're doing in this space. And it's not something that we're going to have all the answers for now. But I think given this conversation, organizations can mirror a lot of the things that Google has been doing, for example with batch workloads. And we're now publishing these CFE percents as just this first step to enable people to make more informed decisions moving forward, and down the line this year, next year, and for the next 10 years that we're going to be achieving these goals of ours, more and more things will be actionable things that people can build into their strategies. So I just want to thank you so much for this informative and super exciting conversation for Earth Day. 

ALEXANDRINA GARCIA: Yeah. 

KENDAL SMITH: Thanks so much for having us. 

CHRIS TALBOTT: Thank you very much. This is great. 

ALEXANDRINA GARCIA: What I really enjoyed about the conversation was seeing that we now have a scoring mechanism to help our minds and machines measure what part of our energy consumption is carbon free. 

STEPHANIE WONG: Yes it's that connection between the people who are using technology and our impact on the world. And data centers are the core of cloud, right and it's important to translate our impact from the immense cloud computing that happens on the environment as well. Google clearly has very lofty and big goals around this and they are making real progress. We have one year of Carbon Intelligent Computing, where we are using best effort or batch computing and using cleanest times of the day to process these jobs. 

And now there are things that you can do to reach your own sustainability targets by either picking lower carbon regions, running batch jobs in those regions, or even setting org policies in those regions as well. And it's not just good for the environment, but it's really great for cost efficiency and just overall efficiency and performance of your workloads as well. Serverless, rightsizing recommendations, there's a lot you can do today. So I just really enjoyed that conversation with Kendal. I've known her for years, it's been an honor to have her tell her story over here on the podcast. Before we jump off are there any cool things that you're working on, AGV? 

ALEXANDRINA GARCIA: Internally, I have been helping out with creating a lot of internal websites, free websites using Google sites to kind of aggregate climate information and share it around the org. That's been kind of cool. 

STEPHANIE WONG: That does sound cool. 

ALEXANDRINA GARCIA: What about you, Stephanie, what are you working on? 

STEPHANIE WONG: I am working on AppSheet Automation blog posts for developers. We had a couple of people on from that team last week on the podcast and so this blog post is to explain how AppSheet is a no code dev platform to enable technical and citizen developers to create applications super quickly, to do things like document processing, third party integrations, and employee onboarding. Check out our last podcast episode to learn more there and keep a lookout for the blog post. 

And outside of that, I'm working on some more material talking about Google Cloud for AWS professionals, et cetera. And so keep a lookout for more interesting articles that I'm coming out with there. Other than that, happy Earth Day. Thank you, AGV, for jumping on, and see everyone next week. 

[MUSIC PLAYING] 

ALEXANDRINA GARCIA: My pleasure. Thanks for having me, Stephanie.