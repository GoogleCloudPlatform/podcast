+++
audioDuration = "00:45:40"
audioFile = "Google.Cloud.Platform.Podcast.Episode.284.mp3"
audioSize = 65761645
categories = ["SRE", "DORA", "Security"]
date = "2021-11-10"
description = "This week, Stephanie Wong and Carter Morgan are talking about the recently released State of DevOps Report."
draft = false
episodeNumber = 284
hosts = ["Stephanie Wong", "Carter Morgan"]
title = "State of DevOps Report 2021 with Nathen Harvey and Dustin Smith"
image="/post/episode-284-state-of-devops-report-2021-with-nathen-harvey-and-dustin-smith/images/hero/hero-EP-284.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/qr00fd/episode_284_state_of_devops_report_2021_with/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week, [Stephanie Wong](https://twitter.com/stephr_wong) and [Carter Morgan](https://twitter.com/carterthecomic) are talking about the recently released State of DevOps Report. Guests Dustin Smith and [Nathen Harvey](https://twitter.com/nathenharvey) tell us all about DORA, the research group working to study DevOps, and the findings of their years-long study aimed at improving workplace environments, fostering sustainable increased productivity, and ensuring quality output across industries.

During their years of research, the DORA team has developed ways to measure team results and workplace culture. Our guests tell us about the five measures they use, including deployment frequency and reliability. The shared responsibility and collaboration of teams at a company to optimize these five metrics is what makes good DevOps performance. Through a real-life example, we hear how the coordination of goals and incentives across departments can improve results of the DevOps metrics, thus improving the speed and stability of finished products.

Once businesses identify problems, they need realistic expectations of the time and energy required to solve these issues. Learning from each change made and growing during the process is an important part of optimization, and our guests talk about the best practices their research has identified for facilitating smoother transitions. High quality documentation is a vital part of optimizing DevOps, and this year's report examined internal documentation for the first time. Nathan describes what makes good documentation, like clear ownership of the documents and docs that are regularly updated for easy sharing and scaling of up-to-date material across the company. Dustin elaborates, explaining other factors that make quality, reliable documents. 

Later, we talk SRE and how companies can measure and optimize Site Reliability Engineering. A supportive team culture and ensuring a secure product and supply chain are some important factors in optimal SRE, the DORA study found. Our guests offer advice for companies looking to get started with DevOps practices.

##### Nathen Harvey

[Nathen Harvey](https://twitter.com/nathenharvey) is a developer relations engineer at Google who has built a career on helping teams realize their potential while aligning technology to business outcomes. Nathen has had the privilege of working with some of the best teams and open source communities, helping them apply the principles and practices of DevOps and SRE. 

##### Dustin Smith

Dustin Smith is a UX Research Manager and the DORA research lead. He studies the factors that influence a team's ability to deliver software quickly and reliably. 

##### Cool things of the week

* Email is 50 years old, and still where it’s @ [blog](https://blog.google/products/gmail/email-is-50-years-old-and-still-where-its/)
* Make the most of hybrid work with Google Workspace [blog](https://blog.google/products/workspace/make-most-hybrid-work-google-workspace/)
* We analyzed 80 million ransomware samples – here’s what we learned [blog](https://blog.google/technology/safety-security/we-analyzed-80-million-ransomware-samples-heres-what-we-learned/)

##### Interview

* DevOps [site](https://cloud.google.com/devops)
* DORA [site](https://www.devops-research.com/research.html)
* SRE [site](https://sre.google)
* 2021 Accelerate State of DevOps report addresses burnout, team performance [report](https://cloud.google.com/blog/products/devops-sre/announcing-dora-2021-accelerate-state-of-devops-report)

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, everyone, and welcome to episode number 284 of the weekly Google Cloud Platform Podcast. This is Stephanie Wong. And I am here with Carter Morgan." >}}

CARTER: Hey, Stephanie. Thanks for having me. 

STEPHANIE: Yeah, it's been a minute. I missed doing podcasts more frequently with you. 

CARTER: Yeah, I had so much fun on the last one. And honestly, this episode, it was a fun one. It brought back some memories. 

STEPHANIE: I know. So OK, for everyone, y'all are in for a great episode. What are we talking about today, Carter? 

CARTER: Today's episode is the State of DevOps Report that just came out and released. It has a bunch of insights into how to improve your team, and how it's functioning, what the rest of the industry is doing, and what to watch out for in your own. 

STEPHANIE: Yes. And we are talking to Nathan Harvey, who's a fellow developer advocate on our team, who's been working a lot on this report. And Dustin Smith, who is a UX research manager, and also the DORA research lead. And yeah, they just dive into so many details about the report. I mean, wow, I had no idea that it covered that much. 

CARTER: No. And a lot of it was very counterintuitive. Like I'ma tease something. I don't know if we're allowed to do this. I'm going to do it. Turns out docs are important. So before we get into that, though, why don't we talk about some of the cool things of the week. 

STEPHANIE: Let's do it. 

[MUSIC PLAYING] 

CARTER: Like I just recently saw this blog post that said it's been 50 years since email was created. So email is not as old as my mom. I did not know this. 

STEPHANIE: She's probably going to get mad that you mentioned this on air. 

CARTER: I would be shocked if she listened to this. So one thing I noticed about this was in this post they talk about how email was developed, and then about some of the cool things and features that you can do in email now. So I was excited to find out that there's going to be a confidential mode in email. 

So Stephanie, whenever you get an email from me, it's going to disappear in like three days, and you have to do some password to sign into it. I just thought that was a cool feature, and you can find out more on the blog about new features in Gmail. 

STEPHANIE: Wow. Yeah, that is really awesome. I mean, it's really nice to see the influx of more fine grained security controls, for even just commonly used tools like email, which is so prominent throughout everyday life, right? We need this for everything, and security is such an important part of that. So check out that one. 

My cool thing is actually very related to this, in the security realm. And it's that we have analyzed 80 million ransomware samples. Here's what we learned. So we actually looked through one of the reports from VirusTotal, which is called the Ransomware Activity Report, which provides a holistic view of ransomware attacks by combining those 80 million potential ransomware related samples submitted over the last year and a half. 

Some of these findings are pretty jarring and interesting, like peaks of activity in the first two quarters of 2020, due to these attacks by certain groups. Another peak in July of 2021. And then they dive into how we are keeping organizations safe from this threat, including five pillars of [? NIS ?] cybersecurity framework, and things like Chronicle, which is Google Cloud's threat detection platform. So another report that's similar to what we're going to talk about today in DevOps, but you'd be surprised how many interesting findings you'd see. 

CARTER: 100%. That is cool. I'm going to have to check out that report, just because I want to see what's happening with security and how attackers are being thwarted. So that's it for the cool things of the week. Let's get into this episode. 

[MUSIC PLAYING] 

So without further ado, we've got a really exciting episode for today. Hello, Dustin and Nathan. Can you tell our audience a little bit about yourself and what you do. 

DUSTIN: Yeah. Hi I'm Dustin. I'm a research manager at Google. That means I manage a team of really great user experience researchers in the cloud org, focusing on developer tooling. And I'm also the DORA research lead. 

NATHAN: Awesome, and hi, everyone. My name is Nathan Harvey. I'm a developer advocate here with Google Cloud. One of the things that I get to do every week is work with Google Cloud customers to help them understand and put into practice the principles and practices around DevOps and [INAUDIBLE]. 

And as doing that, I'm also part of the DORA research team, so I'm really excited to be here today and share with you some of the findings of this year's State of DevOps Report. 

STEPHANIE: That's super exciting. I know that we've had a little bit of hype leading up to this release of the DevOps report this year, at least internally. And so for the audience, what is the State of DevOps Report? 

DUSTIN: Sure. So it's a seven year research program. And what we really try to do is look at what are the various factors that make teams effective. So how can they deliver software faster, but with stability, and with also hitting their reliability targets? 

And then we also look at things like culture. So if they're doing all of these things really fast, with stability, how do they feel, and how does that feeling affect their ability to do that? So really comprehensive research program. It's one of the longest running of its kind. 

STEPHANIE: It's interesting that you touch on the feeling and how teams operate, because it goes hand in hand. You can't really measure the speed and the execution without really thinking about the culture of the team, and how people are operating. 

NATHAN: I think another important thing there on that is, as we talk about moving faster, we all want to move faster, of course. But we need to do that in a way that is humane to the people in our system, and sustainable for those people. Talk about sustainable. I think we've all learned a little bit about sustainability over the last 20 months. 

CARTER: Yeah. I can totally see that, and the importance of that, again, focusing on the people that are creating the software. It's hard to deny the importance of that after the last few years. But that leads me to a question. So we said it's important. But how do you measure that? So much of it seems, to me at least, like very indirect or abstract. Is that true? 

DUSTIN: Sure. So the way that we measure a team's performance is with five different measures. Broadly, they focus on speed, stability, and reliability. For how we measure speed, we look at something called lead time for change. So from commit, what's then the clock starts running, and then how long does it take to get that change into production? 

And we also look at deployment frequency. So how often are you making those changes? And ideally, you're keeping those changes small, and you're doing it very often. And it keeps things really simple. We also look at stability, and so things like change failure rate. Whenever you do one of these changes, how often do you experience something that you need to roll back. 

And then hopefully the rare case that you did have a failure, how quickly can you recover? So we also look at time to recover, so that if inevitably something does go wrong, you're able to get right back on your feet real quickly. And then finally, once something is in production, we also look at reliability. So how able are you to meet those promises you've made to your end user? 

STEPHANIE: Yeah, that's really interesting, because it seems like you are identifying the levers and the tweaks that teams can leverage so that if there is a higher change failure rate or something to be improved upon, we can actually fine tune, so that teams can be more productive and happier doing it. 

Now, I want to dive into these five measures a little bit more deeply. But to back up just a little bit, you're figuring out what makes good DevOps. So what is DevOps? 

NATHAN: This is a great question, Stephanie, and I think that the DevOps movement is really a cultural and professional movement that started over a decade ago. And as a community, DevOps has always kind of shunned a canonical definition. There is no canonical definition for DevOps. 

And I think that this actually presents some challenges for the research program. If we want to measure DevOps, how do we do that when there is no shared common definition? In fact, there are four of us here on the podcast today. I bet we could come up with five definitions for the word DevOps pretty easily. 

So in the research program, we really try to look at those five key measurements that Dustin was talking about. And it's important to realize that when we talk about those key metrics, we're not saying that this team owns the lead time to change metric, and that team owns the reliability metric. 

What we're really doing is taking a systemic view and looking at all of the players in the system, all of the teams that come together to deliver and operate that software. And as a collective, we need to take joint ownership and accountability for all of those key measures. And to me, that collaboration, that shared responsibility, that's really what's at the heart of good DevOps performance. 

CARTER: Wow. I've learned it. Like you said, I'm sure we all would have different definitions of DevOps. But something you said that I wanted to touch on there is you focus on teams and how teams can use this to improve performance, and not just one team owning an individual metric. So who are the people that would use this report? Is it just team managers? Is it like CTOs? Or is this something an individual would care about too? 

DUSTIN: So really, just about anyone can leverage this report. But an important distinction to make is that when we do these changes, it doesn't really fall on one person ever. And so whenever you do this assessment and you're thinking, OK, how fast are we? How stable are we? You're looking at it from a team's perspective, and not from the org chart either. 

You have to think about what are all of the teams working together to help realize your application or service that you're working on. And when you do that, then what is your lead time for change? What's your deployment frequency? What's your change failure rate? What's your time to recover? 

And through that, you're going to be able to identify what are all those levers, as you put, Stephanie, and where are the bottlenecks, and where are the challenges across that cross-functional team that are really making it difficult to ship faster with more stability. And then you can work on improving that, and work together. 

And that's, again, where the culture piece comes into play. If you have an organization that's really supportive of identifying faults in your system without putting blame on people, you're able to adapt and get better as a group, and no blame on any one particular person. 

STEPHANIE: Yeah. It's this theme of a blameless culture, which we've talked about many times in various aspects here. But I'm curious, because it sounds like what you're saying is organizationally, there is a separation of duties. There's functions. There's a way that teams generally are modeled to work after or work as. 

But in reality, it could be very cross-functional, and very different than what you're planned to make it. So do you see any difference in, through your research, in how teams are actually operating to deliver software between product, designers, engineers, SREs, et cetera? 

NATHAN: I'll say that when I work with customers, I often find those exact departments that you've just talked about, right? You have the software engineering department. You have the platform team. Maybe the cloud engineering team. And all too often, when we find struggles or friction with these five metrics, it's because there were clear distinct handoffs, and a lot of like, that's not my job being said around the building, if you will. 

And it's really when those teams work together and recognize that we only succeed when we work together collaboratively. I'll share a really quick example from outside of the software realm that I think really helps illustrate this. So in my past, I've worked with a number of different organizations, one of which, from a long time ago, was a consumer packaged goods manufacturer. 

And a particular consumer good that they were packaging was breakfast cereal. All right? So we're going to talk about breakfast. So when we went and talked to the inventory manager for this breakfast cereal, we said, how do you get your bonus? What are you incentivized to do? And then the cereal inventory manager said, I get my bonus when we deliver cereal just in time to the stores. 

So if you go to the grocery store and take a box of cereal off of the shelf, we're putting one on the back of that shelf. So it's just in time delivery, right? So they are focused on flow through that supply chain. 

We then went to the plant floor manager, the person that was responsible for creating, producing the cereal, and said, how do you get your bonus every quarter? And they said, that's easy. We get our bonus by the tonnage of cereal that we produce. 

So now, think about this for a minute. This particular cereal manufacturer made cereal that was puffed rice, and they made another cereal that was bran flakes with raisins in it. So which thing do you think that plant manager is going to make at the end of every quarter? They're going to make the heavy cereal, right? 

And so this is-- like the parallels here are identical. In Agile software development, we say build those features faster, build those features faster. But then we turn to the operators, and we say, make sure nothing ever breaks. So the operators are incentivized to say, well, nothing can change. If nothing changes, nothing will break. 

And so we set up these perverse incentives where they're fighting against each other. But if we instead say, operators, you're responsible for both speed and stability. And developers, you the same. Now we can work together to deliver what matters to the customer, those features that they want in a way that is stable and operable, and that they can come to rely on. 

CARTER: I'm never going to look at puffed or crisped rice the same way again. I know behind the scenes now. So looking at the State of DevOps Report, we're seeing that some of the best teams don't do this siloing that we just pointed out. Is that a consistent trend throughout the theme? Is this something that other teams should be modeling, based on what we see in the report? 

DUSTIN: I would say absolutely. And to also set expectations that it's not going to happen immediately. And even if you've identified that we have a chronic problem there, we're very siloed, it's going to take iterations. You're going to have to break down each wall one at a time, and sometimes you're going to make mistakes. But working together and being iterative and learning from each change is exactly the kind of message that we want to send. 

STEPHANIE: How are you seeing the reception and adoption from leaders? Is it something that comes top down, or really has to change organically? 

DUSTIN: This is something that we actually covered in the 2019 report as well. And we looked at what were some of the best strategies for making change in an organization. And we actually looked at that exact thing, Stephanie. We looked at what would the effect of a top down mandate be for something like this. 

And we found that that really wasn't one of the best ways to do it. We found that that was really a strategy that low and medium performers were attempting. And where high performers were most successful was when they built these communities of practice in more of a bottoms up approach, where people could share information between each other, and learn from each other's mistakes, and really rally around each other, all of the individual teams trying to make this change. 

So less about just someone in the organization deciding, hey, today's the day we are now a DevOps organization. It really has to start from those individual teams that are really going to be the ones that benefit. And I think that really changes the approach that we recommend leaders take. As a leader, it's not your job to go and tell Carter exactly what to do and tell Stephanie exactly what to do. 

Instead, it's to paint the vision, and give Carter and Stephanie the autonomy and the time and space and resources that they need to iterate towards the thing that is the right practice for their particular goals, and for their particular customers. 

CARTER: That is so interesting. And there's a lot to think about there. Something Dustin just said that piqued my curiosity. You said there was a difference between low, medium, and maybe high teams. So how do you analyze like which of these teams is high, medium, and low? And are there other classifications for teams? 

DUSTIN: Yeah, it's a great question. So how we determine performance categories is every year we look at those key metrics that we talked about earlier. Speed, stability, and reliability. And then, we do a cluster analysis on the data. And we look at, OK, what teams are performing the best? Which are performing the worst? 

And we'll essentially see, OK, how many categories are there? And how many of them are uniquely different from one another in a statistical manner? And that's really how we determine those categories. And every year, they change, and we see differences between the group definitions, and maybe we need to form a new category. 

And a great example of that was in 2018, where historically, we saw three categories. Low, medium, and high. But in 2018, we saw a new category emerge out of the high performers. So we gave them the name elite performers. They're delivering software much faster, and with far more stability. 

And over the years, what we've seen is that the elite performance category has grown significantly. So in 2018, they were just this tiny percentage of the sample, and really, just a subset of the high performers. So if you were to do the cluster analysis, you would see, hey, they're just a minority of that high performance category that's just performing a lot better than the rest of that group already. 

In 2019, they broke out into their own category, being statistically different from the rest. And they made up 20% of the entire sample. And then, this past year in the 2021 report, we saw that they made up 26% of the sample, and they even raised the bar in terms of their lead time for change, where now they're able to get software out and less than an hour. 

STEPHANIE: Wow. That's super impressive. And I'd love to say that DORA episode helping encourage and illuminate some of these learnings for other teams too. But I'm really curious about what makes these elite teams stand out, and how you're really measuring through this report. What are some of the key topics? 

I see in the report, one of them is documentation. So let's start there. And I want to read a quick quote from it, which is good documentation is foundational for successfully implementing DevOps capabilities. For the first time, we measure the quality of internal documentation and practices that contribute to this quality. Teams with high quality documentation are better able to implement technical practices and perform better as a whole. So any commentary on why documentation matters? 

DUSTIN: Yeah, absolutely. And like you said, Stephanie, this is the first time we've looked at this factor. But historically, we've looked at many factors and many technical practices. This year is no exception. So we look at things like version control, historically. Or continuous integration, continuous testing, security, et cetera. 

And what we found with documentation quality is that it is kind of a forcing function for being able to implement all of those other practices. So teams that were able to have high quality documentation, and if you'd like, I can get into what does that mean for a team to have high quality documentation. But if they did, they are 3.8 times more likely to implement security best practices as well. 

And another example might be 1.8 times more likely to have a loosely coupled architecture, for example. One way that we're trying to frame this for ourselves is that the teams that have that high quality documentation are very good at sharing with each other through docs how are teams successfully implementing these practices, and that helps it scale really well across an organization, because everything's written and documented and updated, and that information is easily transferred throughout an organization. 

CARTER: Oh, wow. I'm surprised that documentation is this important. And I may have to go back and apologize to a few old managers, because I never always valued it that way. Nathan, I had a question for you. When you're seeing teams and talking to teams, do you see documentation as an area that a lot of teams can improve on? And if so, how? 

NATHAN: Yeah, it absolutely is. And it's one of those things where we all know good docs matter. We all know good documentation is important. It's easy to agree to that. But to actually put that into practice, that's harder work, right? And so, actually, some of the things that we look at, we can't just in a survey, we can't just go and say, is your internal documentation good? Yes or no? 

Well, what does it mean? What does it mean to have good internal documentation? I think Dustin kind of touched on this a little bit. But some of the things that we test for are things like is there clear ownership? Who's responsible for managing these documents? Who's responsible for keeping them up to date? And other measures like that. 

And I think that that is really important. And what we find when we start talking about that with teams, there are some clear areas where they can invest. And maybe Dustin can share those specific questions or some of the specific topics outside of clear ownership. That's the first one that pops to my mind. Who owns the documentation? Dustin, what were the other ones? 

DUSTIN: Well, in terms of measuring quality, there are some really interesting ways that we framed this. And we built this based on a lot of the academic literature that's out there for what is a quality doc. But also, a lot of the lessons learned internally in terms of what's working well where we're writing docs. 

And so one of the main things that's really important is the ability to rely on the doc. So we call this is it functional. So if I know I'm going to have to reference a doc soon when I'm working on something, am I comfortable and do I know that I'm going to open that doc and it's going to give me the answer? 

For some people, the answer's no. You think, well, it's going to lead to a giant chain of browser tabs that who knows where I'm going to get out of it. Other things we look at are the accuracy, and is it up to date. Is it comprehensive? Does it have good coverage across the service I'm working on? And can I find it? 

And when I do, is it easily scannable? Is it well organized? So we try to look at things like through a lens of user experience of docs, but also just what is the overall sentiment toward it. And then, in terms of practices, things that actually help teams do that, so report higher quality docs. Clear guidelines for updating and editing the docs are really important. 

If everyone's operating off of the same assumptions for how they're going to update a doc, that makes better docs across the board. Other key factors where is it maintained as you make changes to your service or application. So if you're going to change something about how your service works, are you also updating the docs? Sometimes the answer's no. And for the people that do that at a regular basis, their documentation quality is higher. 

STEPHANIE: Wow. Yeah, I mean, what I love about this also is that you're providing a very compelling argument for teams, because you have data backed evidence to say something. Like you're almost four times more likely to have better security. 

And then not only leave it at that, but you provide these actionable questions and exercises that teams can go through to really evaluate their own operations here. And I'm sure, Dustin, with your background, you have a lot to contribute in terms of how you go about researching for this type of experience, even when it comes to developing your own software for teams, right? 

So I want to move on to talk a little bit about SRE and DevOps, since this is, of course, the State of DevOps Report. Another quote that we picked up from the report is that SRE and DevOps are complementary philosophies. Teams that leverage modern operational practices outlined by our site reliability engineering friends report higher operational performance. Teams that prioritize both delivery and operational excellence report the highest organizational performance. So now, I'm really curious what kind of questions and follow up that you have for teams curious to really develop this area. 

NATHAN: Yeah, this was something, again, that we looked into this year, specifically based on our own personal experience. So what we do is we design the report. We try to bring our own collective experience to the report, but then good academic rigor to the questions that we're asking as well. 

So just like we can't say, do you have good docs? We can't say, do you practice SRE? Because what does it mean to practice SRE? And from one organization to the next, that might be different. So the specific practices that we dug into and asked about are things like do you define reliability in terms of user facing behavior? 

So in other words, do you measure your reliability by looking at your CPU utilization? Or whether or not your customers can check out on their shopping cart? As it turns out, the shopping cart checkout, that's more important to your customers than how utilized or underutilized your CPUs are. Also, do you employ this type of framework, like service level indicators and service level objectives, to help prioritize some of the work that you're doing? Are you using automation to reduce toil, and trying to cut down on those disruptive alerts that are basically meaningless? 

And so it's these types of practices that we investigated. And to give you some hard numbers, what the report found, that teams that are practicing these operational practices, these SRE practices, they're 1.4 times more likely to report greater software delivery and operations performance. But beyond that, 1.8 times more likely to report better business outcomes. 

We also found that about 52% of the teams that we talked to are embracing some portion of these reliability practices, and that basically all teams, whether they're low, medium, high, or elite performers could improve and lift up their performance by putting even more focus on this concept of reliability. 

CARTER: Again, this is so mind blowing to me, like how there's actionable numbers for all of these different factors that go into making software. And part of me still wonders about the difference between causation and correlation, you know, always. But something that I hear keep coming up throughout is teams and team culture. And that was another big trend in the report. 

And so to follow Stephanie's lead, I'll read out one of the quotes. And it says, a positive team culture mitigates burnout during challenging circumstances. Team culture makes a large difference to a team's ability to deliver software and meet or exceed their organizational goals. Inclusive teams with a generative culture experienced less burnout during the COVID-19 pandemic. 

And so it sounds like, from the report, that team culture has an effect on how productive workers are, like whether it's burnout, and then also ability to actually meet or exceed goals. So to have business returns. Can you talk a little bit more about that and what was found in the report? 

DUSTIN: Yeah, absolutely. We look at team culture consistently across this research program. And earlier in this conversation, I brought up team culture as really a primary factor for a team's ability to operate. And we do that because we try to look at what are the other factors, beyond the technical side of what someone's trying to build, and beyond the strategies for building something, what's that environment that they're working in? Because that really matters. 

And we all know that we also talked about the siloing, right? And a team's culture an organization's culture, it really needs to be open to communication across those boundaries. So you can already see how culture is going to play a big role. If you've got teams that don't communicate, are resistant to communicating or resistant to helping, want to put blame on other groups, it can be catastrophic. 

And so we've done this for several years. And consistently, we find that culture matters. But given the last two years and the pandemic, which has had a large effect on many people, we also wanted to stay in our lane, so we wanted to focus on the outcomes that we typically look at, and leave effects of a pandemic to other scientists who look at that exclusively, and they do a great job of it. 

We found, like we said earlier, that teams are getting more productive. Elite performers are growing. They're raising the bar. But it's not always true that as you get faster, your team culture is there for you. And that can lead to a lot of burnout, where you just keep delivering, keep delivering, but you don't have that sense of community around. You don't feel like you belong on your team. You don't feel included. 

Sure, you're getting a lot done, but you're not a part of that group. And often, I think about the people that onboarded to new teams during the pandemic. There's still plenty of people that have never met the people that they work with physically. And so if you don't have that culture of inclusion, and the ability to help people feel like they belong in your group, even though they've never been with that group before, it could be really challenging. It can result in burnout. 

So teams that have that inclusive culture and that generative culture, they're open to failures, and they learn from failures. They're half as likely to experience burnout over the last year. 

STEPHANIE: I can definitely say the same. Luckily enough, Carter and I have had such a fantastic team culture. But even then, with the pandemic, it's just the length of it, the pure length of it that, I think, causes a lot of just default burnout that happens. So it's even more important than ever. 

Now, I want to also touch a bit on one of the things that you brought up earlier in the conversation, which is secure software. Now, another quote from the report in the segment states that a secure software supply chain is both essential and drives performance. Given the significant increase in malicious attacks in recent years, organizations must shift from reactive practices to proactive and diagnostic measures. Teams that integrate security practices throughout their software supply chain deliver software quickly, reliably and safely. 

So this is just so, so hugely important. And I'm really glad that it's getting more attention these days. So what can teams do to really build that secure practice in mind? 

DUSTIN: I think the first thing is to recognize the benefits of doing so. So one, you're delivering a service or an application that is safer for both your team, you know, the people that are working on it, and the people that are relying on it or using it. So that's one of the best incentives for doing so. It's huge. 

Another great reason is that teams that shift left are 1.6 times more likely to meet their business goals. So there's another incentive there as well, is that it benefits your business for doing it. And I think the first one should be incentive enough. But hey, there's this bonus that it's really going to bring some value to your company if you focus on this. 

And then the question is, OK, we're bought in. We totally want to have a secure software supply chain. We recognize the value. We want to benefit our end user. What do we do? And so we try to map this out in the report, but things that we map out. And this is really just a set of principles that you can use to break down one of those silos that we talked about earlier. 

And that's really what shifting left is all about, is pulling in that security team into your software supply chain. So the first thing is testing for security. And so is that built into your automated testing process? For some teams, the answer is no, and almost half of them, the answer is no. 

And then integrating security review into every phase of development. So do you have your infosec team provide input during the design phase of a new feature? Are you getting them in there that early? And then are you including them often as well? 

So not just treating them as a checkpoint, but are they a part of the discussion across that entire journey? And then having pre-approved code that's already built. So does your infosec team have a library of easy to consume dependencies, packages that are approved by the security team? And then as an application team, do you have the confidence that, OK, that's security approved, I can just pull that in to my project without concern? Having that there as a key benefit. And finally, having just security reviews for all major features. 

CARTER: This is so interesting, because again, Google invests so much in a security. And now I'm starting to see a little bit about why. And obviously, this is Google is a huge giant corporation, and so maybe they have different needs than other people. Nathan, have you seen with people that you talk to that these trends seem to bear out for teams of different sizes? 

NATHAN: Yeah, they absolutely do. And I think this is, again, one of the important bits of the research itself. The research itself is this is Nathan and Dustin's opinion on how to get better. This is research that goes out across every industry, whether it's financial services, government, technology companies, retail companies, companies of all shapes and sizes. 

And we use the data from all of those companies to help drive and identify these practices and the capabilities that are really driving that overall performance. And I think when it comes to something like security, what you really see here, and I think security sums this up really nicely, is it's a summary of everything that we've talked about, from practices to culture. 

How do we make sure that the security teams feel like they're included and have responsibility, joint ownership over those top level goals? As a security professional, it's my job to increase the speed and stability of the software delivery pipeline. 

That is a mind shift for many security professionals who focus so tightly on the security, they end up doing a lot of like what you might call local optimization. I make it better for me. But that's not making it better for the entire system. And so we need to all kind of step back and take that systems level view. 

And I think that the research gives us an indicator of the capabilities that really drive that performance, and again, it's research. It's research across organizations of every shape and size. 

STEPHANIE: Yeah. This is evidence backed, and it's gathered from lots of data. So it's something that I think provides a lot more substance and concreteness for companies that are looking to learn. Now this, as Carter just brought up, applies to many company sizes, but at Google, I know we've been adopting some of these practices as well. And it must be very difficult to do it at scale. So I'm just curious how we've been able to master these key areas. 

NATHAN: Frankly, we master them the same way that I see other organizations mastering them, one team at a time. Each team really finding what's holding them back, what's constraining that team, and making the right investments in that. You don't change by changing the entire organization. Like Dustin said earlier, right? 

An organization doesn't wake up one day and say, now we're a DevOps organization. We get there through practice and by taking an approach that is team based, because each team is going to be working in a unique context with unique constraints. And at a team level, we need to identify which constraints can we unlock, which constraints can we improve on. 

And then I think organizationally, it's really important that those teams then share the lessons that they've learned with other teams within the organization. So I think within an organization, you will find high, low, and medium performers. It is almost the responsibility of those high and elite performers to reach out to the lower performers in their organization, and help them along this journey. 

CARTER: That is so interesting. And I'm wondering what this would look like. But even before then, I want to ask a question. Because my understanding is Google actually acquired DORA in 2018. And so this research was that important to them that they were willing to do that, and that's what they're basing this on. 

So if there was a high performing team within an organization, what would be like a way to approach another team and say, hey, hey, here's some information I've learned that might increase your reliability. Maybe you should adopt it. You know, I'm curious how that would go. 

NATHAN: Well, one thing that I can tell you that I've seen work really successfully, and maybe I'll start with the cautionary tale. You don't get better by talking about getting better. You get better by practicing new things, by doing work in a different way. So sometimes, if your organization is large enough, you can take a practitioner from a lower performing team and have them do a rotation on a higher performing team. 

Now I can feel what it's like to move faster, feel what it's like to be safer. And I can take those lessons back to my team. And so, in the same way that you can take someone from a high performing team and move them to a lower performing team, and they will build better empathy for the constraints that that team is working under. And so by sharing not only that knowledge, but more importantly, sharing those experiences, making them real for the practitioners, that's a really powerful way to help improve. 

STEPHANIE: I completely agree. There's no better lesson than experiencing it yourself. That goes for so many things in life, right? So what does this report mean going forward in the five years? 

NATHAN: Yeah. So the report doesn't really take a view into the future of where is the industry going. But what it does do, I think, that's important, is it helps you identify where should our team go over the next year, over the next 18 months, over the next five years. 

If we assess ourselves right now and we come out as a low performing team, we know that we've got work to do. Of course, the report also shows us that even those elite performers have to be continually improving in order to keep up and maintain that elite status. 

And so it really is more about what is the future of your team, than it is necessarily about what's the future of the industry. Because the future of the industry, well, yes it's great. It provides a really good vision. What can I do today or tomorrow to actually make a step in that direction. And that's really where the research works best. 

CARTER: And Dustin, do you agree? Like do you feel that the same kind of thing about the report in the future? 

DUSTIN: Yeah, I think so. And I think that likely in the future, there will be more factors that emerge. Priorities shift. You know, the world will change. But I think one thing will always be true, which is what Nathan is speaking to, is that this is more of a framework for how do you just continuously improve as a group. And how do you look within and understand, what are our constraints, and what are those key things we can do in order to improve as a team. 

And I think as long as you're coming at it from that perspective or that philosophy, there's a lot of value here. And looking even back at older reports, you can still see some of the great capabilities we highlighted then. And if you're looking for other capabilities that you can improve on, those are a great resource to this day. I mean, not everyone has implemented every single capability that we've ever looked. at. We've looked at over 30 so far. 

CARTER: I'd like to go back to the wise words of William Gibson. "The future is already here. It's just not evenly distributed." 

NATHAN: I love that quote. All right, that is cool one. 

STEPHANIE: I mean, there is so much goodness in the report, and we've only given people a sneak peek on it. And I'm sure a lot of teams want to get their hands on this so they can walk away with some actionable next steps. So where can people go to learn more? 

DUSTIN: Cloud.google.com/DevOps is a great resource for the entire research program. And we've also done a lot of work of mapping out all of the capabilities and various docs through that channel. You can see the full report there. And you can also see a report that we published in 2020 about the ROI of DevOps. 

So if you're curious more about how can I justify this investment, there's another white paper there that you can look at. So Cloud.google.com/DevOps has a ton of resources here. 

CARTER: Amazing. Wow. OK, I've learned so much in this episode. And so much of it was counterintuitive, like the importance of docs and whatnot. Is there anything that we missed, or anything that you're like users at home, listeners at home, you need to hear this and know this. Or did we pretty much give it a good overview to let people go and check it out online? 

NATHAN: I think the one thing I just want to encourage everyone to do is really think about your team. And in order to help you with that, at cloud.google.com/DevOps, we have a DevOps quick check that will help you quickly assess how is your team doing. 

So try to be as objective as possible when thinking about your team. Answer those questions. And in fact, when you answer the first four questions, it will help you assess if you're low, medium, high or elite. But beyond that, it then makes recommendations about three of the capabilities that are most likely to help your team improve. 

So there are questions to help you prioritize those three capabilities. Again, as dispassionately as possible, objectively evaluate how is your team doing today. And I think you'll get a lot of great insights into where you should make your next investments. 

STEPHANIE: Nice. Nathan, that was like a golden nugget of information that you left till the end for everyone who's still listening. Nice. Well, that's amazing. I encourage everyone to check that out at the resources that they just mentioned. And Nathan and Dustin, thank you so much for coming on today. 

DUSTIN: Thanks for having us. 

NATHAN: Yeah, it's been a real pleasure. Thanks very much. 

CARTER: Wow. So that was an amazing episode, where we went over the State of DevOps Report, and we saw ways that teams can improve and become more efficient, deliver more reliable, more secure software, and make a culture that makes people feel happy to go to work. 

Again, the importance of docs, and how docs were an indicator of performance. Like you said it in the episode. So did Dustin. Roughly four times more likely to have better security if you had good internal documentation. That, to me, was a jarring, jarring statistic. I really want to look into that more and see how I can become a better documenter. Because it has an effect on the rest of the team as a whole. 

STEPHANIE: Yeah. And they also underline how it's a challenging thing to approach, because it's not just one size fits all answer to how to improve or make change within many teams. Not just one individual function, right? So it's difficult. 

But at the same time, they did provide some really good starting points for teams to start to evaluate both their culture, their SRE and DevOps, their security, their documentation, and even that tool that you mentioned at the end is a great way for you to quickly get a bird's eye view on, hey, where do I stand compared to some of these elite teams. And what can I do to actually start on the right pathway. 

CARTER: Yes. And then there was something else that Nathan pointed out. Nathan said that if there is some high performing teams within your organization and some lower performing teams, a good tool to start spreading the love and sharing the knowledge would be to have rotations. 

And so someone from a higher performing team could go to the lower performing team, or vice versa. And what this would do is give the higher performer empathy for the concerns and struggles of lower performing teams, and give the person from the lower performing team, I guess, get them acclimated to what it's like to operate at that level. Do you think that's a tool that would be successful for helping people out? 

STEPHANIE: 100%. I mean, I know, personally, having the opportunity to do rotations not only helps with learning, but it gives you that feeling of having internal mobility too. So it's just good overall for a career growth and excitement to be at the company. So I see it as 100% positive. 

But yeah. This was an excellent report. I'm really glad that we got Dustin and Nathan on. Hope to get them on for next year along the way, and for the 2022 report. 

CARTER: Thank you all for listening. 

STEPHANIE: Thanks, everyone. See you next week. 

[MUSIC PLAYING]