+++
audioDuration = "00:46:16"
audioFile = "Google.Cloud.Platform.Podcast.Episode.235.mp3"
audioSize = 66659296
categories = ["Cyber Security", "Cost Savings", "Machine Learning"]
date = "2020-09-09"
description = "Max Saltonstall is back in the co-host seat, joining Mark for a fun chat about Active Assist."
draft = false
episodeNumber = 235
hosts = ["Mark Mirchandani", "Max Saltonstall"]
title = "Active Assist with Chris Law + MariaDB SkySQL with Robert Hedgepeth"
image="/post/episode-235-active-assist-with-chris-law-and-skysql-with-robert-hedgepeth/images/hero/hero-EP-235.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/ipk0wc/episode_235_active_assist_with_chris_law_skysql/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Max Saltonstall](https://twitter.com/maxsaltonstall) is back in the co-host seat, joining [Mark](https://twitter.com/markmirch) for a fun chat about Active Assist. Chris Law is our guest this week, and he starts with the story of his arrival at Google and his path to the Active Assist team. Active Assist is Google's way of helping clients learn about and take advantage of all the cloud features available. 

Chris describes the main ways Active Assist helps customers in the real world, from troubleshooting tools that identify problems to analysis software that helps clients determine how changes will effect the project. Active Assist also provides recommendations for cost savings, better security, and performance boosters to help clients proactively build better projects. As companies scale, these features become even more important, Chris tells us, citing examples from real users.

Later, we talk about how machine learning is employed to create these recommendations. We talk transparency and learn how Chris and his team keep open communication with clients as they design and improve client security structures. In the future, the Active Assist team will continue to work with departments across Google Cloud and build more recommendations tools for customers. DataFlow and BigQuery are some of the recommendations projects coming soon. More automation will be introduced as well, helping clients do things like scale automatically based on machine learning analysis done behind the scenes. 

##### Chris Law

Chris has helped to start several companies in the past, everything from Social Networking (Tribe.net) to Aggregate Knowledge, which started out as a Recommendations company and moved into Data Management Platform in the Ads space. He joined Google to see what it’s like to build things at scale.

##### Cool things of the week

* Cloud Next Week 9: Business Application Platform [site](https://cloud.withgoogle.com/next/sf/sessions#business-application-platform)
* From One to More: Why Sharing Our Narrative Matters [site](https://cloud.withgoogle.com/next/sf/sessions?session=DEI108#business-application-platform)
* The 2020 Doodle for Google national finalists are here [blog](https://blog.google/inside-google/doodles/doodle-for-google-2020-finalists/)
* Explore Kids Space: A way to nurture your kid's curiosity [blog](https://blog.google/technology/families/kids-space)

##### Interview

* Active Assist [site](https://cloud.google.com/solutions/active-assist)
* IAM Recommender Documentation [site](https://cloud.google.com/iam/docs/recommender-overview#how-recommender-works)
* IAM Recommender Service Account Insights [site](https://cloud.google.com/recommender/docs/insights/iam-service-account-insights)
* Committed Use Discounts [site](https://cloud.google.com/docs/cuds)

##### Stack Chat at Home

This week, we talk to Rob Hedgepeth about [SkySQL](https://mariadb.com/products/skysql/).

##### What's something cool you're working on?

Max is working on quite a few things, from fixing his dishwasher and teaching his family new board games to a new animated Google series with Jen Person.

{{< transcript "[MUSIC PLAYING] MARK MIRCHANDANI: Hi, and welcome to episode 235 of the weekly Google Cloud Platform Podcast. I'm Mark Mirchandani. And today, I'm here with Max Saltonstall. Hey, Max, how you doing?" >}}

MAX SALTONSTALL: Good, good. It's another week of weirdness. But I'm glad to be here with you. 

MARK MIRCHANDANI: Every week is a week of weirdness. But of course, you were on, what, three, four weeks ago. It's been a little while. 

MAX SALTONSTALL: Time is relative. 

MARK MIRCHANDANI: If it's been a week, if it's been a month, if it's been 10 years, it's all going forward. That's what matters. 

MAX SALTONSTALL: It's true. 

MARK MIRCHANDANI: Speaking of time going forward, we actually have a jam-packed episode today with not one, but two different interviews. I mean, that's twice as many as normal. 

MAX SALTONSTALL: Whoa! 

MARK MIRCHANDANI: I'm super-excited for it. Max, can you tell us what the first one is going to be? 

MAX SALTONSTALL: Sure. We got to talk with Chris Law about Active Assist and how we're helping Google Cloud customers better fix issues with the size of VMs or the permissions that IAM roles give out. Finding ways to distill some of this intense complexity into really common best practices that we can proactively suggest and bubble up and say, hey, you might want to think about shifting this to be a little bit safer, or shifting this way to be saving more money each month. 

MARK MIRCHANDANI: Yeah, and of course, there's also my favorite, cost recommendations. So we'll have a little more information about that. And of course, it's a feature coming out for pretty much everybody. 

I mean, it's going to be-- I think it's in beta now, and it's going GA. But there's a bunch of different pieces. So Chris breaks down the details there. And then, after that, we have a second interview. I mean-- 

MAX SALTONSTALL: How did you fit two interviews into one podcast? I don't understand. 

MARK MIRCHANDANI: You know how I did it, Max? I took the audio from one and appended it to the other one. And I can't believe no one's ever thought of this before. 

MAX SALTONSTALL: Concatenation is a wonderful thing. 

MARK MIRCHANDANI: But we actually do have a pretty awesome episode, because, of course, the last time we were on, we were talking about bringing some of the Stack Chat style interviews to our podcast. So with the second interview, can you also tell us who this is? 

MAX SALTONSTALL: Sure, so Rob Hedgepeth from SkySQL got to chat with me a little bit. And we talked about the way they're solving a pretty tricky database problem. Because a lot of companies, especially that are generating a ton of data-- logs data, transactional data-- they have their transactional database where you need to do quick reads and writes, like selling tickets or inventory. And they have their analytical database, where you might be gathering a lot of logs and running some analysis over days, weeks, or months. 

And the technology underlying these two isn't really compatible. You can have a backend that's good at one or good at the other. And that means that engineers have to think about which database they're hitting or how to move data and keep them in sync. And it just gets really complicated. 

So what they have is an open source managed hybrid transactional analytical processing database, which is a mouthful. But it basically means we're going to abstract away the kind of database backend so that you can just write your query, even if it's one query using both kinds of needs. And they will magically make it work in a super fast and efficient-- 

MARK MIRCHANDANI: Yeah, It's always super awesome to see solutions like that and, of course, talk about how they built that. So we're going to have both of those awesome interviews coming up. But before we do either of those, why don't we jump into our Cool Things of the Week? 

MAX SALTONSTALL: Cool. 

[MUSIC PLAYING] 

Things. 

MARK MIRCHANDANI: They are cool things. Well, I could always change it up, right, and be like, Cool Topics of the Week. And then I guess they'd still be things, wouldn't they? No, let's stick with Cool Things. I think it's pretty well-refined at this point. 

So for those who have been following, this is now week 9 of Google Cloud Next. And it's also the final week. So this week is all about Business Application Platform. And I'm not really 100% certain what that means. But when I looked at the topics, it looks like it's a lot around APIs and applications, and how you can think about adding applications to your business. 

So one of the talks I really want to call out, although it's probably not directly related to that, is this talk called From One to More, Why Sharing Our Narrative Matters. And it's a diversity and inclusion talk. I really highly recommend this. It's such a great talk. 

And I can't do it justice by talking about it, but I think it's a really important talk. We'll have the link in the show note. Make sure to check that out. 

MAX SALTONSTALL: Awesome. I'm really excited to see the Google for Doodle statewide contest winners, because I feel like this is just a heartwarming moment every year. And this is sometimes a time when I need a little bit of eye bleach, a little bit of pick-me-up. 

And so this is an annual contest, where Google invites students from around the US to make their own version of a Google Doodle. Take the Google logo and turn it into a painting, a drawing, a story. And this year's theme was showing kindness, which is, I think, awesome. There is a great blog post on some of the finalists broken down by age level. And I think there's just some really great and inspiring perspectives on the world from students from New Jersey to Oklahoma to Hawaii. 

MARK MIRCHANDANI: Yeah, I mean, Max, do you think that I'd maybe be a little too old to submit my own? 

MAX SALTONSTALL: Yeah. This one is limited to students, sadly, K through 12. There's actually a separate contest I think they've run for Google employees and the kids of Google employees. But I think you'd still age out of that one, Mark. Sorry. 

MARK MIRCHANDANI: That makes sense. Well, you know what? It's probably for the best. 

MAX SALTONSTALL: But keep submitting, and I'm sure you'll get the recognition you deserve. 

MARK MIRCHANDANI: One of these days when I'm younger, I'll be able to be young enough to submit for the Google Doodle for Kids. 

MAX SALTONSTALL: Yeah, that's how it works. That's totally how time works. I'm also thinking about back to school for my kids, and some of the technology hoop jumping that a lot of parents are doing right now as they're trying to figure out how to make this hybrid or remote school option work all over the place. 

And so there's a lot of new updates for families and for managing, giving access to the right kinds of content to kids without a lot of direct oversight or fine-grained filtering for the parents. The Google Play team has launched this KidSpace thing on Android to help parents find books, videos, apps that are going to be kid-safe and teacher-approved. And so it's a good way to help kids consume useful content without worrying about what kind of random stuff on the internet they might be running into. 

MARK MIRCHANDANI: Yeah, it's probably always a good thing to have. And of course, it sounds like-- like you said, the timing is pretty important for people who do have kids, and trying to figure out what to do. So I'm sure the more resources, the better. Well, with all those cool things out of the way, why don't we go ahead and jump right into our conversation with Chris? This is the part, Max, where you play the part of both Max and Chris, and you just do the entire interview from memory. 

MAX SALTONSTALL: [FAST-FORWARDED SPEECH] Thank you. I did it faster, just to save us time. 

MARK MIRCHANDANI: Of course, right. No, I was totally there with you on that one. 

[MUSIC PLAYING] 

Hey, Chris. Thanks so much for joining us today. Can you get started by telling us a little bit more about yourself? 

CHRIS LAW: Sure. So I'm Chris Law. I'm our product management lead on our Active Assist product. I've been at Google for about four years now. It's been just a great ride. 

MARK MIRCHANDANI: And of course, you didn't start out an Active Assist, right? 

CHRIS LAW: No. So when I first got to Google, I started on our identity and access management system. And coming in from the outside, I thought, hey, Cloud is this thing that's taking off. Security is going to be a really interesting thing. Let's go in there and figure it out. And so IAM, or Identity Access Management, was where I got my start. 

MAX SALTONSTALL: And you figured it out? 

CHRIS LAW: You know, I did. But, boy, it took a while. When I first started, it was bewildering. 

I got in, I was like, hey, how complicated could this be? Like, who has access to what? Like, this should be pretty simple. 

And I got in, and I was like, wow. Why can I not figure this out? And it's a really common thing at Google around imposter syndrome, where you're like everybody else knows what they're doing except me. 

It took me a little while to figure out that, actually, not everybody knows what they're doing around this. And in fact, our customers are super-confused around this. And so I thought, hey, I'm running around racing to try to create new features to help them make IAM more secure. 

But what I realized was they didn't necessarily need just more features around this and more controls, and knobs, and dials. They needed to know how to actually run this thing and manage this thing so they could be successful with it. And so that's really what got me started with Active Assist. 

MARK MIRCHANDANI: Yeah. So, I mean, I think the natural question that comes out of that is, what is Active Assist? 

CHRIS LAW: Yeah, so Active Assist is Google's push to help make managing complexity on Cloud simpler for customers. So we have a lot of features on Google Cloud. And we launch more new ones constantly, which is awesome for our customers, except what they need to do every time this new feature comes out is they've got to figure out, OK, how do I use it? How do I set it up, right, in the first place? 

And then it's like, six months later, hey, how did that get set up that way? And is that still running the way I wanted it to? And it's three bosses and two employees later, and I'm afraid to touch this now. And so what we want to do is take some of that mystery away. We want to make it easy for people to actually figure out how to run and manage their Cloud. 

MAX SALTONSTALL: So that sounds like it's a bit of simplifying the interface, plus some automation and an ability to maybe even delegate and saying, hey, Google, I want you to help me manage this complexity, rather than me going through and ticking all the checkboxes? 

CHRIS LAW: Yeah, so there's three core scenarios that we think customers really run into problems with around this. The first one is, when something goes wrong, it's really hard to figure out what it is that went wrong. And so part of the Active Assist umbrella includes a bunch of troubleshooting tools that people are working on, whether that's policy troubleshooting to help you understand your IAM policies and why someone doesn't have access to something, network configuration testing to help you understand, hey, which of my firewall rules is blocking this request? Things that are pretty hard, actually, for a lot of customers to figure out and take a lot of manual time. 

The second category of things that we're working on are really around analysis tools to help customers understand, hey, am I going to break something when I make this change? And so we have a policy simulator that's in alpha right now that really is cool. It lets you understand, hey, if I make this change for my IAM policies, and I run through the last, say, I don't know, 90 days where the logs to see if this change would have broken something that somebody needed access to over the last 90 days. So that gives you that sense of comfort and security that I'm actually doing the right thing when I make this change. 

And finally, there's the third category, which is, hey, how can we help our customers figure out how to make their clouds better proactively? So we have a series of recommendations that we've developed-- we have a bunch more in the pipeline-- that help customers understand how they can make their cloud more cost efficient, more secure, and more performant. 

MARK MIRCHANDANI: Yeah, I love that. I mean, you've got the idea of being able to better understand the security, the idea to predict, if I'm going to change something, what's going to break, and then, of course, these automatically generated recommendations that go in and say, hey, this is what you could be doing to fix security, or like you said, cost. So tell me a little bit more about the recommendations. 

CHRIS LAW: Yeah, so the recommendations really build on Google's heritage around data analysis, machine learning. We want to be able to look at all of the things that are happening inside of our customers' environment and be able to say, hey, these ones are ones that we don't think quite look right. We think there is there's room to make this better. And we will [INAUDIBLE] surface that to our customers. 

So being able to say things like, hey, this VM that you're running over here, we think you don't need quite as much horsepower there as you've provisioned it with. Let's save you some money by giving you a recommendation for actually a VM that's more suitable to that. And we have a number of these across the platform that we provide to our customers. 

MAX SALTONSTALL: Do you think this complexity is inevitable, or is it just a result of the many, many incremental changes? I mean, if you could tear it all down and rebuild it, could you rebuild it in a way that you wouldn't need something to automate the recommendations? 

CHRIS LAW: You know, I think when you're first starting out with any new thing, you're in this race to get customers the features, the functionality that they need in order to run their business and get that going. And at first, customers are just so hungry for all the new stuff. I think it's now that you're starting to see Cloud maturing, where customers are in the phase of not just, hey, I'm trying out Cloud and kicking the tires for the first time. 

But they're really adopting this stuff at scale now. And at that point, when you're adopting at scale, you've got to say like, whoa, I've got to step back and I've got to manage all this. How do I do this not only in a race to take advantage of the latest features that cloud has? But I've got to figure how to manage this thing over time, because now my business really depends on this. And that's really where these controls and Active Activist really comes in. 

MARK MIRCHANDANI: Yeah, I mean, I can imagine that if you're running one virtual machine, you can probably manually optimize it pretty easily. But as you run tens of thousands, and use all these other services, it's going to get really complicated to be able to figure that out programmatically. 

CHRIS LAW: Totally. 

MAX SALTONSTALL: Chris, are there any specific customers that have used this to really great effect that have benefited a lot from Active Assist? 

CHRIS LAW: We have a number of them. I'll give you an example of a cloud-native customer who had an issue with trying to make their organization more secure by helping lock down the permissions that they were giving away. So one of the things that we've seen as a common security gap that customers have is they give too many permissions to people that don't need them. And that's an issue, because if you give permissions to somebody who doesn't need them, and their account gets compromised, well, now all of a sudden, whoever got in there has the keys to the kingdom. And they can do all kinds of nasty stuff. 

And so what we want to do is have our customers adhere to the principle of least privilege. Only give people permissions for the things they need, and don't give them any more permissions than they need on top of that. But doing that, again, at scale, you've got thousands of developers at this cloud-native company. 

They've got tens of thousands of service accounts that are running their workloads. And all of those permissions have got to get optimized. Doing that manually is impossible. 

And so what we did was we developed this thing called the IAM Role Recommender. What it does is it automatically looks at the permissions that have been used by users. And it actually uses some interesting machine learning to understand, hey, what are the permissions that this person should have? So what we don't want to do is just remove permissions that the person doesn't use, because they might need to use them later. And if you take away those permissions, you actually generate a support ticket. 

The support tickets, when we talk to customers, they're going up and to the right. Especially as customers are moving more and more onto Cloud, they're really trying to adapt to this new environment. And they've got to learn how to do it. So customers are really afraid to actually take away those permissions. 

What IAM Recommender does, because of the machine learning model that it runs, is it makes sure that only the right permissions get taken away. And so what this cloud-native customer did was, they had this issue. They knew that it was a gap. They had done some work manually around this by letting their users know, hey, please try to not give away quite so many permissions, and done some work to broadcast and create a culture out of this. 

But as you can imagine, it just wasn't that effective. They got some usage out of that, but it was really hard to see. So the first they did when they saw the IAM Recommender was they said, hey, let's just take the data from this that says, hey, here are the permissions that aren't being used and the ones we can take away. 

And let's not apply it yet. Let's just tell people about it. Let's let our developers know that they're doing something that could be better to educate people. And as they start to do that, the awareness level is up. And there's actually real data now backing that up. So now I feel more comfortable around this. 

And so they then said, OK, you know what? We're going to start by applying some of these recommendations to make the permissions go away on a select number of service accounts. We'll try it over the course of a couple of weeks and see, did we break stuff? Does this stuff from Google work? 

And as they started to get success with that, they then said, OK, cool. We now have some operational experience with this thing, and we feel confident that we can now roll this out more and more broadly. And so they just have this job now, a couple quarters later, where they're just running this on a regular basis. And they're making sure that their permissions are optimized across all of their service accounts. And it's really made thousands of service accounts safer for them. 

MARK MIRCHANDANI: And I think that's a really important point. You mentioned earlier about accounts potentially getting compromised. But service accounts are actually a really interesting security challenge, because people tend maybe not to look at the permissions as much. 

And then you're storing it in a key. And if that key gets compromised, it's just as damaging as someone's account. So it's really important to have those service accounts secure. 

CHRIS LAW: Absolutely. And I think, beyond just the recommendations piece of this, one of the other things that we've been looking at is, how do we actually help people understand what's happening with these service accounts better? And so one of the other things that we've developed are service account insights that allow you to understand, hey, you have a service account that hasn't been used in the last six months. Maybe you want to take a look at that and see if you still need that service account kicking around, because a lot of times what happens is people spin those things up. 

They were running them on a job, and then they don't need them anymore. But they're still hanging around. And that is, exactly as you said, Mark, it's a security risk to have that there. 

MARK MIRCHANDANI: And one of the interesting things you said earlier was this is all ML-based. And so I can imagine that, for service accounts and user accounts, you could say, OK, they haven't used this permission in the past 90 days. But that's a really simplistic way of looking at it. So can you talk a little bit more about the ML aspect of how these recommendations are generated? 

CHRIS LAW: Different recommendations need different types of data analysis ML to make them work well. In the IAM recommendations world, we use some look-alike modeling to understand, hey, what is this account? What kind of permission pattern do they have? And what we want to do is not just look at what they're doing, but look at, what are the other accounts that look like this? And if those other accounts are likely to use permissions that this account would use, we'll suggest that we add those in, which gives them a little bit of a bump over just the ones that they've used. 

But it also gives you that cushion so that you don't generate that support ticket, because what's really important is that you can create a system that is supportable. Because if you were to just roll these things out, and you just went straight to the lowest common denominator on those permissions, but you generate all these support tickets, nobody would use the product. But there's some other really interesting data analysis that we do around things like shattered firewall rules. 

So being able to say things like, hey, you've got this mess of firewall rules. And this is a very common problem with our customers. They have a lot of firewall rules that are in place. A lot of them have been there for a long time. And they're not sure what all these are doing anymore. 

And so being able to do things like data analysis to pick out, hey, this is a shadowed firewall rule, it won't really have any effect because there's another firewall rule higher up in the hierarchy that actually takes effect before this one does and negates this. You could probably remove this one to help simplify your firewall configuration. In that case, we're not using ML. But we're using some pretty interesting data analysis to go figure that out 

MAX SALTONSTALL: Are any of the customers worried about Google getting into their trust structure or looking at some of this data and what Google could learn about it? 

CHRIS LAW: Totally. So it's really important to us that customers trust Google. I think [? it's a ?] philosophy or principle that we have around these. The first is we need to be transparent about what we're doing. And so we actually sent out a notice to all of our customers, as soon as we were rolling these features out, letting them know that, hey, we're doing this. 

The second is we want to be really aware that customers have different levels of comfort with this kind of technology, meaning there are customers who are-- just like a self-driving car. Some people are like, that's awesome. I want to get in that car and ride around the city and check it out. 

And there are some customers who are like, I'm not so sure about that. I would still like to have my foot on the brake and my hand on the wheel. I want a real driver there so that if something goes wrong or doesn't do it the way I want it to do, I have control. And so we always want to show customers what we're proposing, that we're asking them to do. And then we let them decide whether or not they want to actually accept that recommendation 

And then finally, we do want to make sure that customers have the ability to say, hey, I don't want to do any of this at all. They can opt out, and we have transparency control center within the Cloud Console that allows them to say, hey, you know what? This isn't for me. I'm taking my organization out of this. 

MAX SALTONSTALL: For customers that are using it, do they have ways of quantifying the improvements in their risk posture? Because this is a preventive problem, which means it's hard to measure. But it sounds like the ones who are adopting are very enthusiastically adopting. 

CHRIS LAW: I think security measurement of risk is a tricky thing overall. So I'll talk specifically about the IAM Recommender. What people have done-- it was this cloud-native company that did it-- was to create these dashboards that show them, based on the data that we're providing, how much over-permissioning of IAM privileges is happening inside their organization. And what they can show us, here is how many accounts we have that are in that over-permission state. And so you can see a dashboard that allows them to see that number going down over time as they are adopting these recommendations. 

Now, we were inspired by that on the Google side. We were like, wow, we really need to do more to help our customers understand that as well, not just for the IAM permissions, but really overall. So helping customers understand, hey, how close am I to an optimal state around these things, it's a pretty tough problem to help sort of show that. 

There's a lot of things that are tricky around corner cases like, well, it's OK for this to be over-permissioned because it's a dev environment. And I don't really care what happens in my dev environment, but I really care what happens in my production environment. And so there are a lot of nuances around that that we're working through. And we love talking to customers about that kind of stuff to help figure it out. 

MARK MIRCHANDANI: Yeah, and I'm sure that, like you mentioned, security is a hard to measure thing, because you do need to figure out who has which access and who's supposed to have which access. But on the other side of these recommendations, those cost recommendations, which are extremely easy to quantify, right? 

CHRIS LAW: Yeah, those ones are a lot easier to quantify. And so you're definitely seeing us partnering with our billing and cost teams inside of GCP to help figure out, how do we expose that data to customers? And also, how do we actually help them understand the implications of some of these things? So it's, how can we help you understand, what was the benefit of applying this recommendation? 

But I want to think a little farther ahead around, any time they make a change on something, we want to be able to tell them, hey, here's what the cost implication of this is going to be. So if I'm going to spin up this new project that's got set of things, what's it going to cost me? Can we provide any kind of estimate? 

MARK MIRCHANDANI: Or if they're running existing projects, maybe they should be using committed use discounts. 

CHRIS LAW: Yeah, so we actually just rolled out our committed use discount recommendations. And it's one of those things-- the committed use discounts are awesome. They're really great for some customers to help save them money on workloads that fit that profile. 

But, boy, oh boy, they were hard to figure out. It was not trivial to do this manually-- to say, hey, am I going to save money by doing this? And so we thought that was really a prime area to help customers figure out, hey, yes. And here's what you could actually save by doing this. 

MARK MIRCHANDANI: Yeah, I love the committed use discount recommendations, because it can be complex to figure out. But committed use discount, especially for larger customers, is usually free money. 

CHRIS LAW: Right. 

MARK MIRCHANDANI: So I'm super, super-excited to see their recommendations to just make it easier. 

MAX SALTONSTALL: How does somebody get started with the recommender if they've never looked at it before. 

CHRIS LAW: From a philosophy perspective, we think that recommendations should show up where you're doing your work. So if you are on the VM page, you will see VM rightsizing recommendations. If you're in the IAM permissions page, you will see IAM recommendations. The regulations will come to you, so wherever you're doing your work, whether firewalls, IAM. 

The other place that we're doing things is in the Recommendations Hub, which is inside the Cloud Console. So when you first land there, there's a Recommendations Hub. And we're aggregating all the recommendations that you have inside that spot, too, so that if you're thinking about, hey, where should I go to optimize things, you can go click on that and you can see all of the different recommendations. 

But you don't have to. They're going to write to you where you're working. And for some of our customers who are like, great, I love this, I need to script it, automate this, we are providing, obviously, APIs that enable people to pull those recommendations down, but also a BigQuery export that lets people pull it out through BQ, and then be able to do slicing and dicing and analysis. 

We've heard of some customers who are taking the BQ export, being able to provide their own filters around it, because the dev versus production pieces. Some people are like, OK, I really want to optimize production. I don't want to look at development right now. And within production, I want look at these specific projects. So BQ gives you the ability, especially for some of our larger customers, to take that overwhelming mass of data and then really cut it down to what it is that I want I go tackle today. 

MAX SALTONSTALL: If you look at the Recommendations Hub, you can get recommendation recommendations? 

[LAUGHTER] 

MARK MIRCHANDANI: In the reasonable sense of recommendations, what other kinds of recommendations are coming up? 

CHRIS LAW: So what we're trying to do is actually work with teams all across Google Cloud to create these. So you're going to see things like BigQuery slot recommendations come up. You're going to see things like dataflow recommendations, where you could use dataflow to help you make things more performant or to save money. Really, across GCP, we're thinking about areas that can help this. Those are just a couple of examples. 

The other thing that I think is interesting that we're working on is, when we say recommendations right now, we're thinking about these as, how do we provide recommendations for humans to consume? Click this button to save money on these things. We're also thinking about, how do we automate these kinds of things in the future? So recommendations not just for humans, but for machines, things like predictive auto scaling that we're working on that will help understand, hey, when should we help you spin up VMs ahead of workload demand so that you can automatically be at the right provisioning level for the workloads that are likely to come? 

Some other cool things around some of these automations are things like being able to look at things like auto-tiering for your Google Cloud Storage buckets. It's another area we're investigating, is, hey, how can we help you figure out which tier your data should be [INAUDIBLE], based on the usage patterns? And how can we help you do that automatically? Like, the holy grail for us is to help make sure that we can see issues coming before a normal human could, right? Because we have all the data coming in, how can we react quickly in real time to really give our customers the best experience? 

MAX SALTONSTALL: Did you start this, or did you join this and it was in-flight? What's the origin story? 

CHRIS LAW: Yeah, so one of our VPs had written a doc internally called Self-driving Cloud Vision. 

MARK MIRCHANDANI: I remember the Self-driving Cloud thing, yeah. 

CHRIS LAW: Yeah, so how do we get our cloud to be self-driving for customers? So they can say, I want to go from point A to point B, and just take me there. And so he had a small team looking at problem areas around this. 

And when I was in the Identity and Access Management team, and I saw the problem that our customers had around getting to least privilege, I was like, man, it would be awesome if we could just tell our customers how to make this better. So I got connected with that vision. I was like, I think I have a small slice of the problem that fits into this bigger vision. I'd like to go do that. 

And so once we were able to make that successful, we then were like, OK, how can we scale this out across Google Cloud? And so that's actually been really fun. By background, I'm an entrepreneur. I'm used to making something from nothing, but doing it in a very different context than Google. For me, that was, I think, the thing that I was looking for when I came to Google. Hey, how do I make something that's really valuable from nothing, but do it in the context of this giant corporation? 

MAX SALTONSTALL: Is it tricky to get sales teams on board if they're looking at reducing revenue because someone uses the recommender? 

CHRIS LAW: No. I mean, our sales teams are really supportive, because they know that their customers get really excited about this. So I think everybody buys into the fact that, hey, we're trying to sell you the best possible thing. And if we make you more efficient as a customer, you're going to want to use our stuff more. We've actually gotten some pretty great field reception from this. 

MARK MIRCHANDANI: So of course, for the people who try out Recommender Hub, you can thank Chris directly for coming up with this idea. And when eventually Recommendation Recommendations roll out, you can thank Max for that idea. 

CHRIS LAW: There you go. 

MAX SALTONSTALL: I would highly recommend you look at the Recommendation Recommendations in the Recommender Recommendation Hub. 

[LAUGHTER] 

MARK MIRCHANDANI: It's recommendations all the way down. 

MAX SALTONSTALL: All the way down. 

MARK MIRCHANDANI: Well, Chris, thank you so much for joining us. We learned a lot today. So I really appreciate you coming in. 

CHRIS LAW: Awesome. Thanks, guys. 

MARK MIRCHANDANI: Thank you. Again, thanks to Chris so much for coming in. Of course, we'll have a link in the show notes for people who want to learn a little bit more about it. But right now, you should be able to go to the Google Cloud Console and see that in action with both the Recommender Hub, and then the recommendations in the individual pages. 

MAX SALTONSTALL: That's a really great tool to just simplify some of the management overhead that comes along with moving a public cloud. 

MARK MIRCHANDANI: Absolutely. So with that out of the way, we're going to jump in for our second interview with Rob talking about SkySQL. 

[MUSIC PLAYING] 

MAX SALTONSTALL: Hi. I'm Max Saltonstall. And today, I'm here with Rob Hedgepeth, head of developer relations at MariaDB. Welcome. 

ROBERT HEDGEPETH: Thanks for having me, Max. 

MAX SALTONSTALL: So today, we get a really exciting topic. We are going to talk about databases. Please tell me, though-- it's been awhile-- why are databases exciting? 

ROBERT HEDGEPETH: Traditionally, databases have been seen as pretty mundane. But within the past several years, we've seen several movements and innovations within databases really to keep pace with the modernization and innovation within applications. And so databases have actually become quite a bit more exciting. 

MAX SALTONSTALL: Your specific offering is a managed database as a service that runs on top of Google Cloud and makes things a lot simpler for application developers. What is special about SkySQL? Why don't I just use, like, MySQL or Postgres? 

ROBERT HEDGEPETH: You know, to really think about that, for those that may not necessarily know, MariaDB started as, and is still, a database company, so providing a relational database solution. And there's a lot of options out there, as you mentioned. And I won't get as much into the product side of that. But from a database as a service-- which, for those not familiar with a database as a service, it's essentially just abstracting away a lot of the minutia, you could say, about provisioning machines for a database, configuring the database, and even going as far as setting up security. And so SkySQL is a service offering from MariaDB that provides the MariaDB database solutions and database platform within a service available for any kind of user to tie into. 

MAX SALTONSTALL: And is this a database that's good for analytics or good for streaming data? Why would I use SkySQL instead of something else? 

ROBERT HEDGEPETH: Yeah. And the answer to that question is yes, I guess. And yes is [INAUDIBLE]. Obviously, as I mentioned before, MariaDB has what you would think of as the traditional transactional approach, which is the very traditional, even relational, or row-based storage, that you would expect for a single database or a structured query language database. 

But we also provide an analytics option. And what that means is simply just pivoting the storage that, instead of being row-based, it's column-based. And that provides us with a certain amount of advantages, or certain benefits, that you would get from being able to inspect data or read data at a columnar level, such as aggregations. You can think of sums and counts and averages. And so then you can be able to combine those two pieces of information, both on the analytical side and the transactional side, within MariaDB solutions. 

MAX SALTONSTALL: And that sounds like it translates to both cheaper queries and faster queries for the applications that need to do that database access. 

ROBERT HEDGEPETH: Yeah, exactly. You know, traditionally, whenever you would think about being able to combine transactional information and analytical information, you may have to have distributed systems, where you have a database that handles the transactional information. And then you may have a data warehouse that actually handles the analytical information. Within MariaDB, and then provided through the service of SkySQL, you actually can take advantage of both transactional and analytical data within a single database server. And that allows you then to be able to use SQL, or the structured query language, to be able to write queries, or single queries, to be able to take advantage of both row-based and column-based information. 

MAX SALTONSTALL: So what are the unique capabilities that SkySQL can bring? Why am I not just going to use an open source database for example? 

ROBERT HEDGEPETH: If you use an open source database, there's really no problem with that. That's been a great solution up until this point. But again, you're going to have to worry about how you provision machines and configure the database. 

And so if you're not using a database as a service, then you're going to be wondering, OK, how am I going to expose this so that applications can use it? And that can be done in a variety of ways of setting it up on-prem. You can set it up within a private cloud. You can use a hybrid cloud setup, and even a public cloud. 

For a database as a service, it allows you to set it up in an external resource in a service that's made available within the applications. The benefits of using SkySQL, as opposed to using other databases as a service, is that SkySQL will actually be running an enterprise version of MariaDB. And what that means is that you get all the latest features, bug fixes, patches, hot fixes. All the capabilities you expect with a premium product will be available within SkySQL. 

MAX SALTONSTALL: That's awesome. So can you tell me a little bit more about how you built this database as a service? 

ROBERT HEDGEPETH: Yeah, and that's a great question. And it really is ultimately rooted within Kubernetes. So as I mentioned before, whenever you're thinking about setting up a database, there's a lot of the activities that are involved in that, from provisioning machines. 

It's not a single database instance, a lot of times, that you'll need within a production environment. You may need multiple instances of a database. And so thinking about how you're going to cluster those database instances, and then be able to handle things like automatic failover, when an instance goes down, and then being able to configure those things, we needed a way to be able to handle all of this with inside of the cloud. 

So we went with Kubernetes because it's so ubiquitous. And the fact that everybody is really using it, and it's something that, from an API perspective, allows us to be able to do things like managing the cluster, being able to set configuration values on databases. And so starting with Kubernetes, it made sense then to be able to use Kubernetes when we were backed by the creators of Kubernetes, which is Google. And so ultimately, we knew that Google Cloud was going to be our cloud provider of choice to start using SkySQL. And so backed by Google Cloud, we were able to take advantage of several different services underneath MariaDB to take advantage of things like Google Persistent Disk, Google Cloud Storage, and a variety of other services that really gave us an advantage when creating SkySQL. 

MAX SALTONSTALL: So you mentioned Kubernetes as your execution-- as your compute resource. Both Persistent Disk and Cloud Storage, why did you choose those two? 

ROBERT HEDGEPETH: Yeah, that's a great question. So originally, when you look at transactional-based informational or row-based storage, and you've got this need to be able to write and read information, and you need that to persist, it makes sense to be able to store that in a persistent disk volume. And so we used Google Persistent Disk for that. And for each of our database servers on the transactional side, we want to be able to store in a Google Persistent Disk. 

But if you look at the analytical side, analytical information, or it sometimes can be historical information, is going to grow and grow and grow-- a lot of times, extremely large volumes of information. And so we decided to go with Google Cloud Storage, because it gave us that flexibility to be able to scale in a way that we needed to for the information and the way that the information would grow within Analytics. But it's also much, much cheaper to be able to store information that way. 

MAX SALTONSTALL: Cool, so you built this manage database as a service on top of Google Cloud. What led you to choose Google as that platform? 

ROBERT HEDGEPETH: Yeah, I mean, a variety of reasons. But ultimately, it came down to our choice of using Kubernetes in order to be able to manage the database instances. Now, that can be a fairly in-depth topic. But as I mentioned before, whenever you're provisioning database instances, a lot of times, you need to worry about how you handle things like high availability or high scalability. And in order to do that, you end up having to manage multiple database instances that maybe you could failover to if something goes wrong. 

But Kubernetes really solves that problem for us, because with the combination of a product inside of MariaDB called MacScale, which is simply just a database proxy that handles things like database failover, but really rooted in using Kubernetes, which allows us to be able to have that auto-healing capability that's provided by Kubernetes, it made it a no-brainer for us to use that combination in order to be able to build SkySQL. And of course, Kubernetes is the brainchild of Google. And so we wanted to make sure that, when we created SkySQL, we were not only using the best solution in Kubernetes. But we were backed by the company that created Kubernetes to give us the best chance to create a successful product. 

MAX SALTONSTALL: You talked about what led you to Kubernetes. Tell me about the storage side of supporting SkySQL. 

ROBERT HEDGEPETH: One of the things that we wanted to make sure that we did whenever we architected SkySQL-- and especially being able to take advantage of all the capabilities within Google, was to look at the underlying storage mechanisms. And it makes sense. If you think about it from a transactional side, you want that to be really fast, not only from a read and a write perspective. And of course, you're going to lead yourself into thinking, well, I want to store this as block storage or Persistent Disk Storage. So we took a look at the analytical side of things. 

And we needed to look at storage mechanisms or storage strategies that would allow us to scale dynamically-- theoretically infinitely. But also, we wanted to help reduce the cost on the end user side. And so we came to the idea of using Google Cloud Storage or object storage, because the advantages for using analytical within object storage is just like I said. 

You're able to dynamically scale the information, theoretically infinitely. But it's also much, much cheaper than storing it on Persistent Disk. And we could actually share a single instance of Google Cloud Storage among the different analytical database instances that we have within SkySQL. 

MAX SALTONSTALL: So do you have a story of how a certain developer, or a certain company or use case, was able to use this to make a process either faster or cheaper or simpler? 

ROBERT HEDGEPETH: Yeah, so a use case that you could think of, it's something that we all probably have some familiarity with, not exactly right now, but this idea of booking a flight. 

MAX SALTONSTALL: If only. 

ROBERT HEDGEPETH: If only, right. And someday soon-- someday soon. But this idea of booking a flight, when you go in to search for a flight, a lot of times you may be wondering, how often is this flight at this time delayed? How much does this flight cost in comparison to other flights at this time across different airlines and across different carriers, at different airports, even, if you have multiple airports within your city? 

And so a use case is that being able to use the default or, I guess, standard transactional approach, you're going to get a listing for flights, and you're going to get a listing for tickets. But combining the analytical portion of this, you can look at millions of records spanning back 10, 20, 30 years of flight information to be able to create statistics on how often a flight is delayed, how often a flight is impacted by weather at a particular airport flying to another airport. And so you really start to break into this idea of combining the functional aspect of booking a flight with the statistical analysis portion of looking at analytics. And that's where you can really start to take advantage, from the very beginning, of being able to use both transactional and analytical information 

MAX SALTONSTALL: All right. So, Rob, I have a very special gift for you. I'm going to give you the capability to send one email back in time 10 years. What do you email yourself to make your life so much better-- preferably related to MariaDB? 

ROBERT HEDGEPETH: OK, it's like there's a variety of things that I could certainly email myself 10 years. But for MariaDB, I think that, because our focus for so long has been on creating a really solid, usable product in a variety of products within the MariaDB solution set, my email would really be more specialized on producing a service. And there's a lot of complexities that are involved with producing a service versus producing a product. For instance, when you're creating a database as a product, a lot of the user interaction is happening through things like CLI or a database client of some sort. But when you produce a service, there were certain things that we had to expose, like a web interface, for allowing users to be able to integrate, or allowing users to be able to configure and set up workflows and inventory for their databases and their database instances. 

My email would really be more focused on the attention that you have to pay to setting up a service, such as how users are going to expect to use things like the web interface, how they're going to expect to be able to connect to your service and communicate and integrate with the underlying products within that service. And so there would be a lot of tips on testing, because the testing has changed significantly. And granted, we've got very solid testing on the product side. But it's just very different whenever you consider all the nuances within the service side. 

MAX SALTONSTALL: Sounds good. I'll let you know when that time traveling email service is ready. 

ROBERT HEDGEPETH: Thank you. I'll appreciate it, for sure. 

MAX SALTONSTALL: Thank you so much for joining me today, Rob, and talking about MariaDB and SkySQL. I really appreciate it. 

ROBERT HEDGEPETH: Thanks, Max. The pleasure's been all mine. 

MAX SALTONSTALL: If you want to learn more about SkySQL, head to skysql.com. 

MARK MIRCHANDANI: So thank you, Max and Rob, for having that conversation. Again, it's always so awesome to hear how people actually built these things. And of course, it sounds like SkySQL's pretty cool. 

MAX SALTONSTALL: Yeah, and they're building these great solutions to just simplify developers' lives, adding that abstraction layer so that folks who are making software I can just focus on the making of the software, instead of how to tweak the infrastructure to make sure that their queries run in a reasonable amount of time. 

MARK MIRCHANDANI: That's the tagline to serverless in general. How do you exactly abstract an infrastructure and just focus on the code? 

MAX SALTONSTALL: I love it. 

MARK MIRCHANDANI: Well, Max, like I said, it's been a little while since you've been on the podcast. So what have you been working on? 

MAX SALTONSTALL: Well, fixing my dishwasher, because we had a little bit of a plumbing issue in our building. And it's been out of commission, which meant piles and piles of gross all over the house. But I think it's better now, which frees me up to do things like make a cool animated video series with our colleague, Jen Person, about identity, access control, and beyond corp remote access, which has been super fun, and finding time to teach my family some more cooperative board games. I'm a big fan of Letter Jam and Spirit Island these days inside. And so I'm looking for more opportunities to play them. 

MARK MIRCHANDANI: Oh, that's so awesome. Yeah, I mean, board games have been a little tough to come by. I've been a big fan of the virtual board games, of course, that make it a lot easier. But there's just nothing that quite replicates right now that old sitting around the table, playing until 1:00 AM. It's a classic moment. 

MAX SALTONSTALL: I think some of the best are also the games that have a really satisfying tactile component. And it can be quite simple. But even just the right heft for the pieces that represent things in the game makes it so much fun to play physically. That's something I really appreciate about Letter Jam, but also about Spirit Island-- all the little houses and little explorers. 

MARK MIRCHANDANI: I think it's been many, many years. But I can definitely say that shaking the Yahtzee cup is a very satisfying action. The game itself, pretty much just luck. But there's nothing quite like just rolling and just praying for that Yahtzee. 

MAX SALTONSTALL: Did you ever have the travel Yahtzee as a kid, which had the five dice in this rectangular container, and each one had its own almost blister pack so you could pop it one way and shuffle it around? Then you pop it the other way, and it fixed the die in the location. It was the most underwhelming way to play Yahtzee ever. You never got to roll a die, because it was meant to be played in a car or on a plane or something. It was so sad. 

MARK MIRCHANDANI: But that's the whole point of the game, is to feel that shaking dice. I guess I can see why that didn't translate very well. Well, for all of our listeners out there, make sure you try and pick up some of these board games. They're just good, old, clean fun. 

MAX SALTONSTALL: Thank you all for listening. We look forward to talking with you again next week. 

[MUSIC PLAYING] 

Week next all you see, we'll and listening for all you thank. 

MARK MIRCHANDANI: Ship it. We're done.