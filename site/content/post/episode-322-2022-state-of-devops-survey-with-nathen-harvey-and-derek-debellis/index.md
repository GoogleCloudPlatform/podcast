+++
audioDuration = "00:44:06"
audioFile = "Google.Cloud.Platform.Podcast.Episode.322.mp3"
audioSize = 63523476
categories = ["Security", "DORA"]
date = "2022-10-05"
description = "On the show this week, we're talking updated DevOps practices for 2022 with hosts Stephanie Wong and Chloe Condon and our guests Nathen Harvey and Derek DeBellis."
draft = false
episodeNumber = 322
hosts = ["Stephanie Wong", "Chloe Condon"]
title = "2022 State of DevOps Report with Nathen Harvey and Derek DeBellis"
image="/post/episode-322-2022-state-of-devops-survey-with-nathen-harvey-and-derek-debellis/images/hero/hero-EP-322.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/xwhud1/episode_322_2022_state_of_devops_survey_with/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

On the show this week, we're talking updated DevOps practices for 2022 with hosts [Stephanie Wong](https://twitter.com/stephr_wong) and [Chloe Condon](https://twitter.com/ChloeCondon) and our guests [Nathen Harvey](https://twitter.com/nathenharvey) and Derek DeBellis.

Nathen and Derek start the show with a thorough discussion of DORA, the research program dedicated to helping organizations improve software delivery and operations, and the state of DevOps report that Google publishes every year. This year, the DevOps research team strengthened their focus on security and discovered that one of the biggest predictors in security practice adoption is company culture. Open, communicative, and trustful company cultures are some of the best for accepting and implementing optimized security practices. Derek tells us how company cultures are measured and scored for this purpose and Nathen talks about team and individual burnout and its affects on culture. 

Low, medium, high, and elite teams are another indicator of culture, and Nathen explains how teams earn their label through four keys of software delivery performance.  Each year, they let the data show these four clusters of team performance. But this year there were only three, and Derek talks more about this phenomenon and why the elite cluster seems to have disappeared. When operational performance analysis was added, the four clusters reemerged and were renamed to better suit the new analysis metrics. Nathen details these four new clusters: starting, which performs neither well nor poorly and may be just starting out; flowing, teams that are performing well across throughput, stability, and operational performance; slowing teams, which don't have high throughput but excel in other areas; and retiring teams, which are reliable but not actively developing projects. We discuss how companies may shift from one cluster to another and how much context can affect this shift.

We talk about key findings in the 2022 DevOps report, especially in the security space. Some of the most notable include the adoption of DevOps security practices and the decreased incidence of burnout on teams who leverage security practices. Nathen and Derek elaborate on how this year's research changed from last year and what remained the same.
 
##### Nathen Harvey

[Nathen](https://twitter.com/nathenharvey) works with teams helping them learn about and apply the findings of our research into high performing teams.  He's been involved in the DevOps community for more than a decade.  

##### Derek DeBellis

Derek is a Quantitative User Experience Researcher at Google, where Derek focuses on survey research, logs analysis, and figuring out ways to measure concepts central to product development. Derek has published on Human-AI interaction, the impact of Covid-19’s onset on smoking cessation, designing for NLP errors and the role of UX in ensuring privacy.

##### Cool things of the week

* Try out Cloud Spanner databases at no cost with new free trial instances [blog](https://cloud.google.com/blog/products/spanner/try-cloud-spanner-databases)
* Chipotle Is Testing More Artificial Intelligence Solutions To Improve Operations [article](https://www.forbes.com/sites/aliciakelso/2022/09/27/chipotle-is-testing-more-artificial-intelligence-solutions-to-improve-operations/?sh=25485e8851f9)
* Gyfted uses Google Cloud AI/ML tools to match tech workers with the best jobs [blog](https://cloud.google.com/blog/topics/startups/how-gyfted-uses-google-cloud-aiml-tools)
 
##### Interview

* 2022 Accelerate State of DevOps Report [blog](https://cloud.google.com/blog/products/devops-sre/dora-2022-accelerate-state-of-devops-report-now-out)
* DevOps [site](https://cloud.google.com/devops)
* 2022 State of the DevOps Report Report [site](https://cloud.google.com/devops/state-of-devops/)
* DORA [site](https://goto.google.com/dora-sodr-2021)
* DORA Community [site](https://sites.google.com/view/doracommunity)
* SLSA [site](https://slsa.dev)
* Security Software Development Framework [site](https://goo.gle/ssdf)
* Westrum organizational culture [site](https://cloud.google.com/architecture/devops/devops-culture-westrum-organizational-culture)
* Google finds culture, not tech, is the biggest predictor of DevOps security outcomes [article](https://siliconangle.com/2022/09/28/google-finds-culture-not-tech-biggest-predictor-devsec-outcomes/)
* GCP Podcast Episode 205: DevOps with Nathen Harvey and Jez Humble [podcast](https://www.gcppodcast.com/post/episode-205-devops-with-nathen-harvey-and-jez-humble/)
* GCP Podcast Episode 284: State of DevOps Report 2021 with Nathen Harvey and Dustin Smith [podcast](https://www.gcppodcast.com/post/episode-284-state-of-devops-report-2021-with-nathen-harvey-and-dustin-smith/)
* GCP Podcast Episode 290: Resiliency at Shopify with Camilo Lopez and Tai Dickerson [podcast](https://www.gcppodcast.com/post/episode-290-resiliency-at-shopify-with-camilo-lopez-and-tai-dickerson/)

##### What's something cool you're working on?

Steph is working on talks for [DevFest Nantes](https://devfest.gdgnantes.com/en/) and a Google Cloud dev conference in London. She'll be talking about subsea fiber optics and Google Cloud networking products.

Chloe is a Noogler, so she's been working on learning as much as she can! She is excited to make her podcast debut this week!

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hello, everyone, and welcome to episode number 322 of the weekly Google Cloud Platform Podcast. This is Stephanie Wong. And today, I'm here with one of my latest and greatest colleagues, Chloe Condon. I'm so excited you're here." >}}

CHLOE: I'm so excited to be here. Thanks for having me. 

STEPHANIE: I feel like I've known you-- 

CHLOE: Yes. 

STEPHANIE: --on Twitter, and to have you on our team has been just thrilling because you're just a great part of this culture already. And I hope that the team has been a good home for you so far. 

CHLOE: It has. And most importantly, now I can send you work-related memes. Like, we can just send each other-- that's, like, what real coworkership is, is sharing memes. 

STEPHANIE: Yeah. You're not real coworkers until that happens, right? 

CHLOE: No way. 

STEPHANIE: Well, I know we've already gotten a good start to doing that. So I'm really excited that you're now part of the podcast. So can you walk us a little bit through what we're about to hear in this conversation? 

CHLOE: Ooh, yes. I'm so excited. I got to do a little research for this episode because I listened back to some of our previous episodes covering this topic. But we're talking all about the DevOps report, DORA specifically, with two really amazing guests. And yeah, data is so fascinating and interesting. 

STEPHANIE: Yeah. Yeah, I'm excited to have Nathen back on. And today, we have a UX researcher, Derek, here to talk about his findings and how he was able to dig through the data to uncover some new categories and new findings for the state of DevOps for various teams. So before we dive into that, of course, we're going to just quickly go into our cool things of the week. 

[MUSIC PLAYING] 

So my cool thing of the week is something that a lot of people have wanted for quite some time. So you asked, and we delivered. And we are proud to announce free trial Spanner database instances, which means that you get the bang without the buck. And developers have really enjoyed Spanner's ease of use and its ability to automatically scale reads and writes and deliver consistent transactions at global scale. 

It's one of our most fascinating and exciting database products. And so now you get to try it for 90 days at no cost. With this free trial instance, you can use it for prototyping an entire application for free, and then also use other free tiers offered by products like Compute Engine and BigQuery. So go ahead and dig into that. Just note that they are limited to 10 gigabytes of storage and 90-day trial, of course. So yeah, go ahead and try it. 

CHLOE: That's really cool. I've heard of Spanner before, and I know people are probably really excited about getting a free trial. So woo-hoo. So I don't know if you know this about me, but I love AI and ML, but specifically I love really weird, unique, quirky instances of it. 

And I was just reading up about how Chipotle is using a chip robot named Chippy to help them make chips at certain locations, and being able to predict-- using separate ML services to predict different ingredients and how much needs to be made at certain points of the day. But on that similar note, thinking about how we can apply AI and ML to predicting other things, remember those job surveys that they used to do back in the day, where you'd fill it out, and it would tell you, like, here's the best suited job based on your likes and your skills? 

STEPHANIE: Yeah. 

CHLOE: Well, there's a company called Gyfted, G-Y-F-T-E-D, that uses Google Cloud AI and ML to match tech workers with the best jobs. And I know this is something I would have maybe wanted when I was first starting out in tech, like, hey, I really enjoy making content and talking to developers. So I just think that that's a really cool use case, especially for folks who are maybe newer to the industry or looking for a different way to be a part of it. 

STEPHANIE: Yeah, I really wish I had this back in the day, as well. And I'm definitely going to send this to some of my mentees that are just getting started because they don't know what they want yet. And it's also they're not aware of what's out there, so this is a great way to discover what might be right for you and where you want to develop your skills. Going back to your story about Chipotle, I feel like this is really on brand because it sounds mildly similar to Clippy. 

CHLOE: Right? 

STEPHANIE: I know you're excited about. 

CHLOE: Oh my gosh, right? I was like Chippy? Hm, sounds very similar to a friend of mine, Clippy. Yeah, I love when we make what seem like weird, niche use cases for robots or AI and ML, but people need chips, right? 

STEPHANIE: People need chips. And you heard Chippy, and you're like, I'm listening. 

[LAUGHTER] 

Well, now that we got the cool things of the week squared away, let's go ahead and dive into our conversation with Nathen and Derek to talk about the 2022 State of the DevOps survey results. 

[MUSIC PLAYING] 

Nathen and Derek, welcome, and welcome back to the podcast. First off, I have to give you a shout out for wearing your DORA t-shirt today, Nathen. 

NATHEN: I'm glad that all of our listeners can see it. 

STEPHANIE: Yeah, it's perfect for a podcast, right? Why don't you go ahead and start off by giving us an intro? I know that some of us have met you before, but some of us haven't. So what do you do here at Google? 

NATHEN: Thanks so much. My name is Nathen Harvey. I'm a developer advocate here at Google. 

Just what does a developer advocate do, you might ask? Well, we help developers be successful. And of course, when you talk about developers, we really oftentimes talk about technical practitioners. So it's not exclusively application developers, if you will. But I work a lot with teams, helping them understand and put into practice better capabilities to help them deliver and operate software and services. 

STEPHANIE: And Derek, what about you? 

DEREK: Well, what I tell my parents, at least, is that I look for patterns in data, and I try to find patterns that suggest the user experience isn't necessarily where we want it to be. And then I try to advocate to my team to make it better. This year, I got to use some of that skillset to help out with this State of DevOps. 

STEPHANIE: That's great. I know that, when I think of UX researchers, I always have a lot of curiosity about it, thinking about what the day-to-day looks like. And so it's-- very excited to hear about how you were able to apply your skills to this report in a new way. 

CHLOE: We have kind of a prequel to this, right? We did an episode covering DORA before. But for those who don't know what DORA is or only know Dora the Explorer, tell us a little bit about what the State of DevOps Report is. Who is DORA? Who is she? 

NATHEN: So DORA is an ongoing research program that seeks to answer the question of, how does technology help organizations succeed and how do we get better at software delivery and operations? And so the research program has been running for about eight years now. And over its time, DORA, the research program, has lived in a number of different entities, if you will. So the entire research program was initially founded and started out of a company called Puppet. 

Eventually, the research program became its own organization, DORA, which was founded by Dr. Nicole Forsgren, Jez Humble, and Gene Kim. And then about four years ago, Google Cloud acquired that organization. And what we've done within Google Cloud is we've kept the research going. 

And importantly-- and I'm sure we'll cover this-- one of the most important things, I think, about the research is that it is platform and program agnostic. So it's not researching, how do you get better at Google Cloud? It's researching, how do you get better as a team when it comes to software delivery and operations performance? 

STEPHANIE: And how did you both end up working as a part of DORA, and specifically this report? 

DEREK: For me, I was doing a lot of survey work on the various product teams around Google Cloud. And I was well aware of this report, and often tried to emulate it in the work that I did. And I guess I emulated it enough that some of the people that were working on DORA said, hey, do you want to come help out with the analysis of this report? That's how I got involved with this. 

NATHEN: And the way that I got involved, it was-- well, we'll go back in the time machine. It was about 2014. I was working on a team that was building, delivering, and operating software. And there was a State of DevOps survey that was sent out around the world. 

So the way I got involved with DORA, at first, I was a respondent to the very first survey that happened. And then over the years, I got to meet and work with, in a number of different capacities, Nicole Forsgren and Jez Humble. And so I've, over the years, just gotten closer and closer to the research itself. And then for the past three and a half or four years, I've been deeply involved in the research program and the writing of each year's report. 

STEPHANIE: Wow. That's a great trajectory for both of you. As Chloe said, we had you on last year to talk about the 2021 report. And there were a lot of key themes that happened previously, from learning about how the different groups were identified and what the thresholds were, criteria and culture. But I remember security being a small part of the conversation that we had. So are there any new findings from the report this year, and anything that kind of surprised you? 

DEREK: I can say, this year, we decided, based off the earlier findings on security from years previous, that we were going to really just double down on security and try to, A, create better constructs, constructs that covered sort of a little bit more how people usually talk about security, and also really just make it an integral part of our model for how we understand all these various pathways. And this year, for security, I think the team's big takeaway, something that we're really trying to highlight in the report, is the biggest predictor of whether a team adopts certain security practices is not necessarily whether or not they have a particular technical capability, or a certain tool, or anything like that available to them. It's the culture of an organization seems to be the biggest predictor. 

CHLOE: I'd like to say I'm surprised, but also I'm not, right? One of the very first books my very first manager gave me in my first engineering role was "The Phoenix Project." And I think that helped me define and understand a lot deeper how important culture is, especially blameless culture and figuring out security-wise how all these things get put together. 

NATHEN: I'm glad you mentioned blameless there, Chloe, because when we talk about culture, there's always this question of, yeah, culture, of course, we should all be better with the touchy-feely pieces, and we should do that better, and sit around a campfire, and sing kumbaya, and then everything will get better. That's not really, necessarily, what we mean by culture. And in fact, because we are in this research program, we're so academically rigorous. We have to have ways to actually measure culture and define, what does that mean? 

You can't go and say, hey, Stephanie, is there a good culture on your team? Because, yes or no, it doesn't give us any insights. And so what we actually do, we're kind of like-- maybe I'll equate Derek to an open source developer. An open source developer doesn't write all of their own code. We borrow or liberate code from other people. 

And so we went to a sociologist whose name is Dr. Ron Westrum. He's done a ton of work in this space around culture, and how do you measure and define culture? And he actually created this topology of organizational cultures. And what we found-- when Derek says culture is the thing that matters, we find that culture is where information flows freely, where there's lots of trust across the different teams and across individuals, and where there is this idea of blamelessness within the culture. 

And blamelessness, also, is a weird thing to talk about. I really like to think about it as, when there is a failure, when something goes wrong, the thing that we do is we look for what can we learn from that. How can we learn and improve the overall system so that, in the future, we can be better? And we found, as Derek mentioned, that when you have high trust, when you have that blameless culture, when you have that learning from incidents and failures, those are the types of teams that tend to have a better opportunity to take advantage of those security practices and capabilities. 

STEPHANIE: I'm curious, actually, because you just mentioned that culture is difficult to measure. So Derek, from your perspective, what are the data points or signals that you're looking for that would indicate culture? 

DEREK: Thankfully, as Nathen mentioned, we were able to build upon previous scoring methods for understanding culture. And the added benefit with that is a lot of other people have done research on this method of understanding culture. And so you get all that context that you didn't necessarily need to work for. 

It almost comes for free. It's like, well, people have been doing research on this for a very long time, and there's all these other patterns that people have found. There's all these other relationships that we know this has. So then when we bring in that factor into our work, we're able to just run with the history that it's already amassed. 

NATHEN: Yeah, and some of the specific questions we ask as part of this survey-- what we really do is we put a scale in front of our survey respondents and say, on a scale of end to end, do you strongly disagree or do you strongly agree with the following statements? And then as we talk about culture, we make statements like, on my team, information is actively sought. 

On my team, responsibilities are shared. On my team, new ideas are welcomed. And we use the answers that we gather from those respondents to help us measure culture. 

And culture, of course, also speaks a lot to how do you experience work. And in particular, one of the outcomes that we measure is burnout on teams. And we measure burnout, in part, as a way of how well or how poorly are you, as an individual, able to disconnect from work. When you leave the building-- well, let's be honest, when you leave the virtual building, are you able to stop thinking about work, or are you just constantly tied up in work in your head all the time? And so that's another good signal that we can look at to help us identify whether or not you might be experiencing burnout. 

CHLOE: So what you're saying is science and data shows us that avoiding burnout is important. 

DEREK: Believe it or not. 

CHLOE: Good. Everyone can share this with their boss, if they're feeling burned out. 

STEPHANIE: Exactly. 

NATHEN: But I think, while we're on this culture subject, I think it's important to remember that culture and technology, neither one of these live in a vacuum. They reinforce and amplify one another. And in fact, while culture was a big determining factor for those security practices, we also found that there was a key integration point. 

In fact, teams that are better at securing their supply chain for software typically are using practices, technical practices and capabilities like continuous integration and continuous delivery, where they're constantly integrating changes in with one another, and they've automated the delivery of those features. These things really matter. And so when you combine those technical capabilities with those cultural capabilities, that's where the magic is. 

STEPHANIE: Yeah, absolutely. I think that's important to remember in any conversation we have about tech, whether it's our products or even within engineering teams themselves that are building the products. Now, since 2018, I know last year we discussed that there are different clusters that you've been able to label each group of engineering teams low, medium, high, and elite teams. Can you tell us a little bit more about if that's changed and what that means for the 2022 report? 

NATHEN: Maybe I'll start with, how do we come up with these low, medium, high, and elite teams? And then I'll hand it over to Derek for the surprising results that we found this year. So the way that we look at that is we use what we call the four keys. These are the four key metrics for software delivery performance. And when you think about software delivery performance, we actually break those four keys into two top-level sort of categories. 

The first is throughput. So when we think about delivering software, we think about throughput, we think about two key metrics there. The first is deployment frequency. How frequently are you pushing changes into the production environment or making them available to your users? 

And the second is how long does it take those changes from the time they're committed to the version control system until the time they land in production? So we talk about that as your change lead time. So as you can imagine, if you want to increase your throughput, what you should do is increase your deployment frequency and decrease the amount of time it takes for a change to go from committed to deployed. 

But here's the thing. Just running faster into brick walls, not a very fun activity. So we can't look at just throughput. We also have to look at the stability of those changes. 

And the way that we measure stability is, again, two more factors here, or two more measurements. The first is your change fail rate. A change fail rate is something that we measure-- well, frankly, Derek calls it the change fail rate. I like to call it the oh-expletive rate, because it's what happens when you push something to production, and then you shout out an expletive. 

And unfortunately, we've all been there before, where you push a change to production. It doesn't work quite the way you expected. Maybe it causes an outage or a degradation of service. So we want to minimize those, but we want to monitor for them. We want to know when they happen. 

And then our final stability measure is around the time to restore service. Look, our systems are so complex, they're probably broken all the time, at least a little bit. What we want to do is look at, when there is something that's broken that's impacting our users, we want to make sure that we can restore that service as quickly as possible. And just like everything we talked about with security, restoring service is a mix of technology, and culture, and teamwork, and how do we come together to do that. 

So each year, as part of our survey, we ask respondents, how are you doing across those four key metrics? We throw their answers down onto a plot, and these clusters emerge. And this is where Derek's data science really comes in, but these beautiful clusters. We can just look at the data and see, oh, here's a group over here. Here's a cluster over there. 

And so for the past four years or so, there have been four distinct clusters. The people in the cluster look the same. People in other clusters look different than each other. And so we've labeled them as low, medium, high, and elite performers. 

Now, two quick things before I hand it over to Derek. First, what we found consistently, throughput and stability are not tradeoffs. In fact, they move together. So the teams that are lowest performing are bad at-- well, bad, that sounds like I've just judged them. They aren't so good at throughput or stability. 

And the teams that are great are great at throughput and stability. And so each year, we kind of let these clusters emerge. We don't say in advance what's good and what's bad. We just look at the data. And so four years or so, we've had four different clusters. But this year, Derek, what did we find? 

DEREK: Well, three. And for me, being new, I had no strong priors, no prior beliefs about how many clusters there should be, how many clusters there ought to be, and if it's true for the whole team. But for me, I remember taking this to the team and saying, yeah, we found these three clusters that have emerged in the data. And that's when I realized, since 2018, it had been four. 

So then, once you find these clusters, it really comes down to understanding what constitutes each cluster. And then when we start looking at these clusters, at the way the data is distributed, we realized that there wasn't really an elite cluster, at least in the way that we had previously defined or understood the elite cluster. So this year, we have low, medium, and high. 

STEPHANIE: So you're coming in and breaking things right away. 

DEREK: I was worried about that, definitely. 

STEPHANIE: No, it's good to have a good fresh set of eyes, as you said. No prior knowledge, no biases coming in, looking at the data. So if that's what it takes to really just take the data as is and move forward from there with your analysis, it seems to be the right approach. 

NATHEN: And that's the approach that DORA has taken from the very beginning in our research. We really let those clusters emerge each year. And that's what drives our reporting. And it really is up to the respondents. 

That said, those four metrics that I talked about, those are software delivery metrics. And we know that delivering software is important, but your users are going to use the software. So everything goes beyond just delivering software and into operations. How do you run reliable systems? And so the other really exciting thing, I find, in this year's report is that Derek was able to bring in this idea of throughput and stability plus reliability or operational performance, and, through that, do some additional clustering analysis. And Derek, I'd love to hear about that. 

DEREK: The impulse for this was just finding that reliability or operational performance had such a major role when we were looking at what causes organizational performance and what even enables software delivery performance to have a strong positive impact on organizational performance. And so we just kept seeing reliability having this pivotal role. And we thought, well, maybe this should be something we include as a dimension to understand teams across the industry. 

So instead of just looking at throughput and stability, we decided to do another cluster analysis that added operational performance in. We thought this might be, given how important operational performance is, a nice way to sort of break down the space or the industry and to understand various teams. And when we did that, we were able to find-- well, we weren't-- the data just said there are four clusters. 

And yeah, we found four clusters. We've named them since. We can talk a little bit more about the definitions for each of these and everything, but we've named them the starting, flowing, slowing, and retiring clusters. I'm guessing each one of those deserves a little bit of a definition. Nathen, do you want to go ahead? 

NATHEN: Yeah. So remember, we're looking at, at a high level, three different facets-- throughput, stability, and operational performance. And as Derek mentioned, we found these four clusters in the data. The cluster that we named starting, these teams tend to perform, well, OK across all three of those characteristics. They aren't performing poorly. They're not performing great. 

But we called them starting with the understanding that maybe the story we tell about these teams is that they're just getting started with this new application or service. Maybe they're trying to find the right product market fit. Maybe they're trying to gather a lot of feedback from their customers. We're not really sure. But they're performing neither well nor poorly across those three dimensions. 

The flowing teams are performing really well across throughput, stability, and operational performance. They perform well across all three dimensions. The slowing teams, they don't deploy very often, so their throughput isn't very high. But when they do, they're likely to succeed. So their stability is good, and they tend to meet their operational goals. 

And then finally, you have the retiring cluster. They have a reliable service. Their operational performance, their ability to serve their customers and meet their expectations, really good. But they're not maybe under active development. There's not a whole lot of throughput or stability that goes along with that throughput because their throughput is just relatively low. 

Now, when we think about these four different clusters, it's important that, one-- it was important to us that we tried to name them in a way that was descriptive and maybe not so judgmental as low, medium, and high. Much more descriptive. And then second, when you look at a particular team, they may fit into one of those clusters at this point in time, but over the lifecycle of a team, they may move between various clusters. 

And by team, I really mean application or service, this team that comes together to build this application or service. They may shift from one of these clusters or phases to another. And that's completely acceptable, and expected, I should say. The thing that I think is really interesting is this gives us a new level of nuance when we talk about, how are teams doing when it comes to software delivery and operations performance? 

STEPHANIE: Yeah. This is actually so fascinating because it made me realize that something that struck me was suddenly thinking about the past episodes we've had on this podcast, including Shopify, who came on to bring on some folks who are part of their resiliency team, this newly minted, last couple of years cross-functional team to help support events like Black Friday and Cyber Monday. So now I'm thinking about it, they are probably part of the flowing category, because they have proactively created various approaches to managing things based on challenges they've had in the past. 

So they now do enforced pacing so that people don't rush out with features before or after a code freeze. They codify their failures. They have an incident manager on call, and they have various priority groups. So I'm sure they're in that category. But are you finding that the teams that you're serving or speaking with, there are certain maybe unmeasurable things, like-- or maybe that is measured in your report, but are they proactively creating their own approaches to doing these things? 

NATHEN: In my experience, every team is-- and I think we found this in the data, too, that context really matters. And in fact, as you described that team from Shopify, what I found fascinating was, yes, they are likely flowing most of the year, but maybe around Black Friday and Cyber Monday, they intentionally decide what we're going to do is slow down on our release frequency. We're going to heighten our focus on operational performance. 

So even from month to month, a team might move from one of these clusters to the next. And the idea that they're doing that intentionally and that they're putting a lot of emphasis in the place that matters at this time for their customers, I think that's a brilliant insight that you've just uncovered there, Stephanie. And I think it fits really well to this model. 

STEPHANIE: Thank you. Yeah, I'm thinking about it totally differently now. 

CHLOE: It's fascinating because it's very mathematical, like how you were explaining, if this, then that. But then at the same time, just like you're saying, having a culture where you're going to assume that something is going to break or something is going to need more support and need help, I'm sure, opens the door to a lot of opportunity to be more prepared or even overprepared for a situation. 

STEPHANIE: I mentioned this in the beginning, something we touched on last year. And it sounds like it's been much more of a focus in the report this year. So can you walk us through some of the key findings as it relates to security? 

DEREK: One we've touched on, the culture component, how important culture is in fostering these emerging security practices. Some other findings we have there is that, one, we've already noticed that there's some adoption. We weren't sure how these were going-- what the distribution was going to look like, in the sense of, were there going to be 2% of people that follow these practices, or is everybody going to say I have no idea what you're even talking about when we ask these questions? 

What we found is, pretty much across the board for some of these security practices that we were exploring this year, is that there was a relatively high proportion of people that were already practicing them, that had already established them, to some extent or another. It's modest adoption. There's definitely ample room for more, but some of the people that were focusing on the security section were definitely pleasantly surprised to see the level of adoption that we saw. 

One thing we noticed, and we talked about this a little bit, is that we're looking for "if this, then that" kind of things, which is new to this model. We've always had the belief that it really depends on the team's broader context, the environment. So we looked at that for security, too. 

When does security have a really big impact, or when do these technical capabilities really enhance a team's ability to use some of these security practices? And it looks that adoption of the technical aspects of the software supply chain security hinges on CI and CD. It tends to really be contingent upon whether that these practices are already in place. 

NATHEN: Hey, Derek, just before you go on, some of those security practices that you're talking about, just like we took the cultural questions from Westrum, we've liberated some of our security practice questions from other frameworks, specifically the Supply Chain Levels for Software Artifacts, or SLSA, and NIST's-- well, NIST is the National Institute of Standards and Technology. They've published a paper that is the Secure Software Development Framework, SSDF. So our security capabilities come largely from SLSA and the SSDF. 

DEREK: And the last thing I'll say, in terms of what we noticed for security, is that there were some unexpected benefits. So besides hopefully the reduction in security risks, they have additional advantages in that these teams tend to have less burnout. We touched on this a little bit earlier, but that was a really big surprise to us. And also, they tend to have higher organizational performance. 

The teams that practice these security practices have higher organizational performance, which is something that we're really excited to explore more. But it's not simply that these security practices are going to hopefully prevent a lot of challenges that come to the company, but it's just going to overall make the employees less burnt out. And maybe through that, but not entirely through that in the analysis, just an overall higher level of performance at the organizational level. 

NATHEN: And I think when it comes to some of those technical practices and how security matters, I think we can all think back to-- I don't know-- December of 2021, when there was this huge vulnerability that was exposed, the Log4j or Log4Shell vulnerability. And I know many, many teams first had to spend maybe even a weekend trying to figure out, where is Log4j even deployed in my running systems? Right? 

So they didn't really have the automation or the bill of materials around what's running in which services. Where am I potentially exposed? And so they may have spent an entire weekend just answering that seemingly simple question. 

But then, once they understood the answer to that question, the upgrade path was clear. You replace this library with this newer version of the library, and now you've patched your vulnerability. But the challenge is, as we all know, when I swap out one component for the next, or even one version for the next, what's that going to do to my service? 

Is it going to continue to run? And so when you have practices in place like continuous integration, wherein you are continuously integrating changes, and building, and running automated tests on your service, that is continuous integration. So if I upgrade this library, I'm going to get immediate feedback from my testing suite as to whether or not this artifact that I just built works the way that I expect it to. 

And then continuous delivery goes beyond that and says that our software should always be in a deployable state. And we should be able to deliver it to production at any point in time. And so continuous integration coupled with continuous delivery gave those teams that had exposure to Log4j a much better chance of resolving and patching that vulnerability very quickly because they had the feedback systems in place, both from a technology perspective and just from a human capacity perspective. 

And now imagine that. The teams that had a solid bill of materials knew what was running where, could upgrade a thing in their version control system and get immediate feedback on whether or not that works. Of course those teams have less burnout than the teams that spent an entire weekend trying to answer the question of, where am I exposed? 

So I think that's a really good way to think about how all of these things come together. None of them, none of the capabilities live in a vacuum. None of them stand alone. They all come together. And as we embrace and improve each one of them as a team, we're going to be better off. 

CHLOE: And now that you've done a bunch of these, did you have any different approaches to how you did research this year compared to other years? 

DEREK: Well, it's a balancing act in the sense that, since 2014, there's all this great research that's been done. So you don't want to break anything, and you want to build on that research. The replication side of this is so central to how this report works. It's that we are amassing this evidence year after year, and you get to see all these wonderful patterns. So to go ahead and shift too much would be to throw some of that out, or at least make it harder to make the connection because you've changed the nature of the survey. 

That said, we want to remain topical, right? Things are always emerging. Security, for example. And you hear the hypotheses that are coming from the team, and you think to yourself, well, if we made this slight adjustment in this, we would be able to statistically explore this hypothesis. 

One thing this year that we did was look at the conditionality of these effects, how things depend on other things to happen, how, yes, there might be an effect between x and y, but it really depends on what is the overall situation? What are the circumstances? 

So I would say that is something that we explicitly changed this year. By change, I mean added. It was sort of a yes/and, as opposed to but. 

And I think, besides adding a few items, taking a few items out, we also spent some time just-- and this is also another dangerous balancing act, but highlighting some things we weren't expecting, some of the unexpected findings. It's really vital to us to follow the data. And when you find something that's a little aberrant from your expectations, you get stuck in a tough position, where you're trying to figure out, is this just a spurious finding? Was this just something that the random time you flipped a fair coin and it landed 97 times on heads kind of thing? And it was just weird. You just ended up on the weird side of things. 

Or did something change in the industry? For example, did we lose that fourth cluster? Is that something that's shifted completely in the industry? What's behind that? 

We've been trying to call that out. We've been trying to say, hey, we're not throwing something in the filing cabinet. We want to make sure everybody's aware of this. We can't wait, and one of the benefits we have is we can test this again next year. And we're not going to make a huge deal about it because we believe that repeated findings and replications are central to the way this works, but we're at least going to make sure it's available for everybody to know. 

NATHEN: I think the other thing I'd say on that is that the researchers like Derek come together with the people in the field, the subject matter experts like myself, working with customers all the time. And together, we come up with new hypotheses each year. So one thing that we explored, I think, for the first time this year was I observe all the time working with customers, working with my own teams that reorgs happen a lot. People are always shifting from one team to the next. 

And so we asked this question, well, how does that impact software delivery and operations performance? And our teams that stick together, consistent, coherent teams, are they better off? Are they performing better than teams that are consistently or continually, it seems, changing out the makeup of their team, whether through attrition, or reorganizations, or what have you? 

And so subject matter experts, together with the researchers, come up with great survey design questions to make sure that we're only asking one thing with each question, that we have a couple of questions that kind of ask the same thing in different ways so we can really trust the data that we have. And this might not surprise you, but one of the findings was that the teams that stick together, that are consistent and coherent, they tend to perform a little bit better across most of the metrics. 

STEPHANIE: Absolutely. I think that makes sense for any team, really. 

NATHEN: Intuitively, it makes sense. And the beauty of DORA is we now have data that can demonstrate that it's actually what happens. 

STEPHANIE: Exactly. And I think that, in part, really helps to influence the industry at large so that teams can utilize that and, if they need to make larger decisions, they have the data to back it up. This has been great at finding out more about what we can see in the 2022 State of the DevOps Report. I guess to wrap it all up, is there anything that we missed that you'd like to mention? Or kind of talk about the key takeaways and what people can look forward to in the report. 

NATHEN: I think Derek alluded to a bunch of surprises that we found in some of the data and analysis this year. And I love this podcast, but I'm not going to reveal any of the surprises. I want you to go and read the report yourself and check out some of those surprises. They're kind of sprinkled throughout, but there were enough that we have a section in the report that's dedicated to some of those surprises. They're surprises because they were either unexpected, or they're contradictory to some of the findings that we found before, or, in some cases, both. 

STEPHANIE: Yeah, we're not that kind of podcast where we have spoilers. So you're right on that. 

CHLOE: I love data, especially surprise data. My favorite. Where can people come and learn more about DORA and find all of these teasers? Or spoilers, I should say. 

NATHEN: Well, the easiest place to find all of the information about the State of DevOps Report is just to go to cloud.google.com/devops. And from there, you'll be able to follow a link to directly download the 2022 report. You'll also find links to the previous years' reports, as well. I should point out that just because the report was published in 2018 doesn't mean that all of the findings are useless now because we've moved on as an industry. I think that you'll still find really valuable insights there. 

But speaking of surprises, one of the things that we're really trying to do in the next year, or as we move forward as a community, is continue this conversation. And so as part of launching the State of DevOps Report this year, we're also launching dora.community. Dora.community. This is a community of practice where we want to bring together researchers in the space, practitioners in this space to continue this conversation, keep the conversation going continually so that we can continue to learn from and share with one another. 

STEPHANIE: Amazing. Well, congrats on the report and dora.community. Nathen and Derek, thanks so much for jumping on the podcast, and hope to have you back on for the next report. 

DEREK: It was such a pleasure. Thank you. 

NATHEN: Thank you so much for having us. 

STEPHANIE: All right, well, I found it fascinating, as always, compared to last year. They continue to let the data guide their results, which I think is really important. And I think what was more obvious this year was that it really departed from their previous results of having four individual groups of types of teams. There weren't any elite groups this year. But that's completely fine. 

I also enjoy the fact that this is a platform-agnostic report and that they are providing the results so that teams across the industry can improve. And they're also giving some guidance in how to do that, along with the data to prove their points. And the last thing I'll mention is how they really let security be a centerpiece of the report this year, given that we've had some major breaches in the last several years, and it's been such an important topic, so that we can find things like how CI/CD is super influential on both the tech side and the cultural side to better enforce security practices and also help reduce burnout. 

CHLOE: I agree. I love data, and I love how this is such a unique combination of a very mathematical process, but also a cultural side of things that really has an effect on one another. And I'm really excited to hear what these super surprise findings are. I'm very excited to dive more into the data and see what else they discovered. 

STEPHANIE: Yeah. There are some great charts and graphs in the blog post that talks about this report that we'll link in the show notes, as well, if you don't have time to check out the full report. So we'll have all of that. But of course, now I want to ask you, Chloe, what you've been working on. I know you just started recently, but curious how it's been going. 

CHLOE: Oh, man. I've been learning all the things. For folks who don't know, I am a Noogler. I'm very new. 

I've actually been reading our coworker Priyanka's visual guide to cloud computing to kind of get caught up to all of the many, many pieces that are cloud. But yeah, learning all the things. And this is my Google podcast debut. So thanks for having me. 

STEPHANIE: Woo. Yeah. You've done a great job already. And agreed that learning about products visually and in context, just like Nathen said today, is important. Context really matters, and learning about products in relation to others is how I've been able to learn, too. 

So yeah, I mean, everybody on this podcast already knows that I've been talking about Next. So go ahead and register for that. But I'm also preparing to speak at Devfest Nantes, which is in France, along with a Google Cloud developer conference in London that's happening in October, as well. So lots of preparation happening. I'm going to be talking about subsea fiber optics and how that relates to our Google Cloud networking products. So-- 

CHLOE: Ooh. 

STEPHANIE: Yeah. But thanks so much, Chloe, for co-hosting with me. I know you're going to be back on again. So for everyone else, get used to it. She's going to be back. And thank you all for listening, and we'll see you all next week. 

CHLOE: See y'all soon. 

[MUSIC PLAYING]