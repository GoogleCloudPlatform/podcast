+++
audioDuration = "00:44:48"
audioFile = "Google.Cloud.Platform.Podcast.Episode.317.mp3"
audioSize = 64529724
categories = ["BigQuery", "AlloyDB", "I/O", "Behind the Scenes"]
date = "2022-08-24"
description = "This week, Max Saltonstall and Stephanie Wong talk with Gabe Weiss and Anita Kibunguchy-Grant about the exciting new launches at Google Cloud."
draft = false
episodeNumber = 317
hosts = ["Stephanie Wong", "Max Saltonstall"]
title = "Launching Products at Google Cloud with Anita Kibunguchy-Grant and Gabe Weiss"
image="/post/episode-317-launching-products-at-google-cloud-with-anita-kibunguchy-grant-and-gabe-weiss/images/hero/hero-EP-317.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/wwomkk/episode_317_launching_products_at_google_cloud/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week, [Max Saltonstall](https://twitter.com/maxsaltonstall) and [Stephanie Wong](https://twitter.com/stephr_wong) go behind the scenes at Google Cloud with [Gabe Weiss](https://twitter.com/gabeweiss_) and [Anita Kibunguchy-Grant](https://twitter.com/kibuanita) to learn how new products move from idea to market.

To start, our guests walk us through a typical end-to-end life cycle as Google creates new and exciting products for users. Starting with a problem sometimes brought to light by users, a solution is workshopped, and a team is brought together to tackle the issue. Once the product is workable, Gabe and his team step in to evaluate and pass it on to Anita for market launch. With examples like BigQuery Omni and AlloyDB, Anita and Gabe walk us through a real launch scenario, from naming the product to promotion and observing the satisfying impacts of a product solving real-world problems.

Anita details the three phases of a product launch and which teams are involved. The phases are pre-launch, during launch, and post-launch. In pre-launch, things like naming and messaging are crafted, priority is assigned via tier assignment, and plans are made to interact with various promotional and other teams who may need to be involved with the launch. Launch day activities are coordinated next as various marketing avenues are leveraged for maximum visibility and development teams work together to make the technical side successful. Post-Launch involves some debriefing on the success of the marketing as well as analysis of use, press coverage, page views, revenue, sentiment among users, and enabling sales teams for success.

Gabe talks about the importance of his team in the process as they test products for customer usability and QA before launch as well. He and Anita elaborate on the differences with Google launches versus other companies, including the stages involved in launch and the naming of these stages. Many launches are done at big Google Cloud events, like Google I/O, Anita points out as a unique feature of Google, which can be a gift and a curse. Challenges are addressed as our guests talk us through possible problems and the ways launch teams address them. Anita and Gabe emphasize empathy and communication in product launching and the importance of clear, productive feedback.
 
##### Anita Kibunguchy-Grant

[Anita Kibunguchy-Grant](https://twitter.com/kibuanita) is a Product Marketing Lead at Google with extensive experience across Data Analytics and Databases products and solutions. Before Google, she led awareness and go-to-market programs at VMware.

She has an MBA from MIT Sloan School of Management and is passionate about helping customers use data and technology to transform their businesses.

##### Gabe Weiss

Gabe leads the database advocacy team for the Google Cloud Platform team ensuring that developers can make awesome things, both inside and outside of Google. Prior to Google he's worked in virtual reality production and distribution, source control, the games industry, and professional acting.

##### Cool things of the week

* Leveling up your data analysis skills as a student [blog](https://cloud.google.com/blog/topics/developers-practitioners/leveling-your-data-analysis-skills-student)
* Catalog of Unabashed Gratitude [site](https://g.co/kgs/gT13Uj)
* How Google Cloud blocked the largest Layer 7 DDoS attack at 46 million rps [blog](https://cloud.google.com/blog/products/identity-security/how-google-cloud-blocked-largest-layer-7-ddos-attack-at-46-million-rps)
 
##### Interview

* BigQuery [site](https://cloud.google.com/bigquery)
* Datastream [site](https://cloud.google.com/datastream)
* Database Migration Services [site](https://cloud.google.com/database-migration)
* Cloud SQL [site](https://cloud.google.com/sql)
* AlloyDB [site](https://cloud.google.com/alloydb)
* PostgreSQL [site](https://www.postgresql.org)
* Google I/O [site](https://io.google/2022/)
* Qwiklabs [site](https://go.qwiklabs.com/qwiklabs-free)
* Agones [site](https://agones.dev/site/)
* Databases [blog](https://cloud.google.com/blog/products/databases)

##### What's something cool you're working on?

Max is wrapping up his hosting of summer interns and getting ready for vacation! He plans to play a lot of board games and video games!

Steph also enjoyed hosting interns this summer!

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, everyone. Welcome to episode number 317 of the weekly Google Cloud Platform Podcast. This is Stephanie Wong, and today, I'm here with Max. What's up, Max?" >}}

MAX: Hey, I'm doing great. Good to work with you and talk about all these cool things. 

STEPHANIE: All the cool things, yeah. I know we were just together last week in New York, and now, we're on opposite sides of the coast. But I'll be back soon. It was great hanging out. 

MAX: Yeah, it was a lot of fun to walk around and to get to spend some in-person time when, usually, we're just sort of screen mediated. 

STEPHANIE: Yeah, exactly. I know. But we did get to chat with some folks today here at Google that we commonly work virtually with. So hopefully, we get to see them in person, but it was nice catching up. What are we talking about today? 

MAX: We talked a lot about how do new products actually go live within Google Cloud, what does it take, and how does all that coordination and execution happen for some new feature or some brand new product to actually make it to market. And this is, obviously, a big engineering effort, but there's so many other pieces of enabling the sales teams and writing the documentation and getting the messaging ready and working with analysts and public relations. So we dig into that to get a little bit of inside insight into how the magic happens. 

STEPHANIE: Yeah, and it's funny because Anita, who's on the episode, was saying, hey, isn't this just common knowledge? Everybody knows the process. And I'm like not everyone really knows, and I think people would be interested in how it works at Google and what your personal experiences are. So stay tuned for that because we're going to learn a lot about all the nitty gritty that goes into it. But first, let's cover some of the cool things of the week. 

MAX: Cool thing of the week! 

[MUSIC PLAYING] 

STEPHANIE: All right. 

MAX: Well, I'm cheating. I have two. The first one is a blog post that just recently went live on the Cloud Blog about how to learn to use BigQuery for students. A lot of folks in their computer science or technical learning paths don't always get a chance to learn how to do some of this data analysis stuff. So this blog post, which we'll link down below, talks about doing some data analysis for the first time and utilizing public data sets like, I don't know, every single taxi ride that was taken in New York City, which is pretty cool that you get to just play with and chart and graph and search and all that stuff. 

STEPHANIE: Awesome. Yeah, that ties in really well with last week's episode, talking about Google Cloud for students and higher education so, again, more resources that are just available. 

MAX: And then the other thing that I just have found really cool is a book of poetry that I have found, bringing a lot of brightness in sometimes otherwise dark moments. It's called the "Catalog of Unabashed Gratitude" by Ross Gay, and I highly recommend checking out in any of Ross Gay's poems because they will probably make you smile. 

STEPHANIE: Oh, I love that, bring some sunshine to our lives, right? We definitely need that with all the things that are happening right now. So thanks for that. 

MAX: Yeah. 

STEPHANIE: So something really exciting happened-- Google Cloud was actually able to block the largest layer 7 DDoS attack at 46 million requests per second. Yeah, 46 million. This is the largest layer 7 DDos reported to date, and it's at least 76% larger than the previously recorded record. 

So just to give you a scale of the attack, it's like receiving all the daily requests to Wikipedia in just 10 seconds. Yeah, wrap your mind around that. So Cloud Armor Adaptive Protection was able to detect and analyze the traffic early in the attack lifecycle and then alerted the customer with a recommended protective role, which was then deployed before the attack ramped up. 

So read the story. It goes through all the details of how the attack was analyzed and how we stopped the attack. Check it out on the Cloud Blog. 

MAX: That's so cool. That's really impressive scale. 

STEPHANIE: Yes, I know. It's like hard to even understand the scale at which that happened, right? Super exciting, but again, we're going to circle back now and talk to Anita and Gabe about their experiences launching products at Google Cloud. 

[MUSIC PLAYING] 

I am so excited to bring you both on because I've worked with you both so many times already, and I don't know how we haven't gotten you both into the same room here. But can you start off by telling us a little bit about who you are and what you do here at Google? Gabe. 

GABE: I'm Gabe Weiss. I am a developer advocacy manager, so I run a team that advocates for the Cloud databases on GCP. 

STEPHANIE: Perfect. And Anita? 

ANITA: Hi, everyone. Anita Kibunguchy-Grant, and I lead the product marketing team here for the Databases Business. So Gabe and I get to work really closely together, and you, Stephanie, too, we've worked closely together. And a lot of my work is around, how do we think about building awareness and go to market programs across Google Cloud? 

MAX: So when you're thinking about a product, especially a new one, what does that lifecycle look like, start to finish? I know there's a lot of different steps, but you have to start thinking about the end, f at the very beginning, right? 

GABE: For sure. There's so many steps that go into making a product. The first, you, obviously, start with a problem, like there is some problem that needs to be solved in the world. And then someone says, I have an idea to solve the problem. And that then kicks off a whole mess of product design docs and approvals and business-market fit and all of the kind of nuts and bolts of, how do you then get a product off the ground? 

Eventually, someone decides that, yeah, it seems like a pretty good idea. Let's throw some money at it. And they throw a team together, and they start building the team. 

All of that is not the parts, generally, that Anita and I get to work on. At some point, someone says this product is good enough to show somebody. That's the exciting part, and that's often where-- I'll hop in before that and they'll say, we don't know if it's ready to show somebody. 

Then I get brought in to look at what the product layout is and how is it looking, what problems does it solve. And I'll see what's my take on it, what's my gut check. 

And that-- I love that part. And then, of course, we move through that part. And then Anita, if you want to chime in, because this is where you get to hop in and have fun with it. 

ANITA: Exactly. Part of it is that the teams have thought through-- and this is the product teams, right? Product and engineering has thought through all the customer problems that they're looking to solve, and so they tag in my team and, I would say, Gabe's team when we're now starting to think about, how do we truly bring this product to market? 

How do we think about some of the launches? What are they going to look like? What's going to be the key messages that we land with the customers? What pain points are we solving for? I would say we come in a little bit further down the line, and that's where I think we're most helpful to think through that lifecycle all the way to when we launch the product. 

STEPHANIE: Yeah, yeah, and I've been involved in some of them as well, especially in the last year. But out of curiosity, you've both touched many product launches here at Google Cloud. Can you give us some examples of it and maybe some examples from past positions you've been in or companies you've been a part of? 

ANITA: Yeah, for sure. I would say, I think, within Google Cloud-- because I've been here for a little over four years at Google Cloud, and so when I think about big product launches, I'll probably test about 20 or more product launches, just being a part of it. So if you think about products like BigQuery Omni, that was an interesting one. It was thinking through like, what was the name we were going to put out there? 

So there's a lot of naming decisions we had to think through. When we think about products like Data Stream, the most recent one, AlloyDB, that Gabe and I got to work on. There's been a lot, I would say. 

GABE: It's funny you mentioned naming. Naming feels like it's one of the worst parts about this whole process. I don't know if Google is particularly bad at it. 

Naming is hard. Don't get me wrong. Naming anything is hard. But AlloyDB felt like months. It was like months and months and months of going back and forth and doing due diligence and checking all of these things. Finally, decide-- AlloyDB, I love that name. 

I think that's a great name because-- 

STEPHANIE: Yes. 

GABE: --the whole postgres and Cloud melding and merging, and [INAUDIBLE] it's like that's what an alloy is. So I'm glad we land on it. Anyway, so I'm trying to think of the launches that I've been part of. 

I've been here just a little bit longer than-- five years is my bar, and of the big launch, AlloyDB is, by far, the biggest. At Google, we talk about them as tiered launches. What's the tier launch? 

Tier 1 are our big super bomb-dropping change-the-industry kind of-- 

ANITA: Exactly. Revenue changing, right? 

GABE: Yeah. 

ANITA: Lots of impact to the market and the business, yeah. 

GABE: AlloyDB is definitely one of the biggest. Database Migration Services was another big one that I was part of that it's funny. That one, I don't feel like it was treated as big of a launch as AlloyDB has been, but as far as transformative and genuine impact on our customers and the developers working on our stuff, making it easy to move your data was huge. 

And we're seeing that. The adoption of that product has been fantastic. And it's really-- it's just a nice simple, easy way to get your data up into Cloud SQL right now. We're working on some other stuff. But that, to me, is one of the most impactful things that I've gotten to work on. 

ANITA: And it's incredible to be able to see how we are in this fortunate position, where you're able to put a product into the market and you get to see the impact of it with your customers. And that's huge. 

GABE: Yeah. 

ANITA: And I think that's probably one of the most satisfying things about my job. It's the we launch something, and you start to see customers use it. And we keep amplifying and making it better. And DMS is that example, a database migration service. 

GABE: Plus 100. Something that has always fed me in my career has been working on stuff that other people do awesome stuff with. It's fun working on the awesome thing myself, and I've done some of that in my past. But most of my career was actually at a source control company, and it's not sexy. 

Working on source control is not a sexy thing. But seeing what people did with it and what they built using the tool was so gratifying to me. And that's one of the things I love as being a dev rel'er is I get to help people out in the world use our stuff to build this awesome whatever it is that they're building. 

I love that. And so being part of these launches and getting to be right alongside, watching people start to see the product, understand what the value add to their stuff is, and start to adopt it is the best. That is absolutely the best part of this job. 

STEPHANIE: Yeah, it's funny that you mentioned some of the parts of launching products, like naming being one aspect of it that ends up being one of the hardest steps, ironically. And I'm sure Twitter has a lot of opinions about names of different Cloud products in the market, but. 

MAX: Why is it Twitter, anyway? That's such a weird name. 

STEPHANIE: Yeah, that's a good point, right? So that's one part that spans across all companies, of course. Do you have any commentary about your past experience launching products? What is the general lifecycle of launching products? And then I want to move in to talking about at Google. 

ANITA: I think from a product marketing perspective, again, when you think about launching products, I consider them in three key phases. Think of as, what are the activities you do prelaunch? What are the activities you do during the launch itself? And then what are the activities you do post launch? 

Then all of those activities are absolutely important. When you're thinking about prelaunch activities, naming is one, for example, thinking about what are the key messages and how do you understand, what is the product solving for from a customer perspective? What are the pain points? 

Then you can craft a messaging that resonates with our audience. What does the competitive landscape look like? And then part of it is even-- I think Gabe touched a little bit on this, but it's tiering. At Google, we call them tiers, but I think for other companies, they might call them party 1, 2, 3. 

The whole point is that not all launches are created equal. You're going to have big impactful launches like AlloyDB. But you're also going to just have incremental features. And how you take them to launch just looks very different, and the bill of materials looks different, too. 

And so once you've determined how big this launch is, then it will drive the plans of, do you need to get social involved? What about analyst relations teams? What about press? What about blogs and everything else that goes into building that plan and thinking through what the launch is? 

And then on launch day, think of it as like, you're turning a switch on. With AlloyDB, for example, we had an embargo time. And so it means that only at a certain time do you turn everything on. The website goes live. Social posts go out. Your blogs go live. Press goes out. 

And that's all during launch activities, and a lot of things happen on that day because you want to make sure that everything is working that day. Even the product goes live, too. 

MAX: And as much buzz as you can get. 

ANITA: Yeah, exactly. And then post launch, you're thinking a lot about, did we do what we said we're going to do? What do the metrics look like? In this case, customer adoption. What's the sentiment in the market? 

Doing a postmortem, what worked, what didn't work, so you can be better at it. That's how I think about a launch from a product marketing perspective. I'm sure from Gabe-- Gabe thinks about it maybe a little bit different but probably similar, too. 

GABE: It's funny. There's parts of it that are super similar. You talk about, on a tiered launch, how you treat one of our tier 1 versus our tier 2, 3 launches and thinking about the kind of efforts that you want to revolve around how it lands in the market. There's a lot of discussion that ends up happening. 

Tier 1 launch, you can just market the product or talk about the product or write blogs about the thing because it's a big enough chunk on its own. [INAUDIBLE] the wrong word. 

MAX: In that case, that's usually like a new product or a huge new expansion of a product's feature set would be a tier 1 launch, right? 

GABE: Exactly, exactly, it's like some kind of paradigm shift at that level. But for the other ones, a lot of the times, we'll end up looking for themes. For example, something like with BigQuery, we've got the Vertex AI integration so you can call machine learning and AI from inside BigQuery. 

Well, AlloyDB has that feature as well. So now, it's like, OK, these are now subset features that we're launching within these things. So now, do we want to just highlight AlloyDB's Vertex AI solution? Or do we want to start talking about databases and AI as a general topic? Do we want to start covering these themes across-- we've got this stuff going about like data platform now. 

OK, well, does this fit into a data platform story? How do we want to tell those things? So all these little launches that you end up doing, there's all this work behind the scenes to be like, all right, what other teams do we want to pull in to help tell the story? How can we craft a larger narrative about Google Cloud as a platform on the whole? 

So the launch consideration stops being just about whatever it is we're launching, and now, all of a sudden, it opens this can of worms of all this complexity behind the scenes of how we want to talk about motions the platform is doing as well. So there's a microstory of whatever it is that you're launching and then this awesome macrostory of the platform that kind of wraps whatever is that's happening. 

All of that's happening all the time because something like Google Cloud is so big, there's so much going on that we're trying to kind of keep all the plates spinning and then like, OK, which plates should spin together? OK, last one needs to come over here, and oh, that one can cross-pollinate with this thing over here. 

It's a fun jigsaw puzzle, and as DevRel, we talked about-- Anita mentioned on day 1, we want to make sure the thing works. Part of our core job, as DevRels, to be what we call customer zero, developer zero, where we want to try the thing before anyone else tries the thing to make sure that we, as a nonproduct-focused person because we're not on the engineering team that's building the product. We're not part of the product management team that's kind of pitching the product. 

We're a supportive team to that, where we want to be sure-- we take all of our experience of talking to developers out in the communities and all of that experience as a practitioner, and then try the product. And does the product work? And this is what I view as a key part of that launch cycle, where before anyone outside hits the rough edges, we want to hit them first. 

And we want to raise that awareness back to the product teams so that they can, even if they don't address it, make an informed decision about whether or not they want to address it. So they know about it. So for example, maybe we want to change the marketing message slightly. If we know there's a rough edge, but it's like, OK, let's avoid that rough edge. 

We want to create support playbooks for our support engineers so that when it comes up-- because it will. If we find it, someone else finds it, too. So that they have good messaging about how to talk about it so that they can be like, yep, we know. Here's what we're either doing to address it, or here's a workaround, whatever it is. That's how I end up thinking about a lot of the preoutward-facing parts of a launch is that's a big part where I hop in. 

STEPHANIE: Yeah, and I think it's easy to think about it like a funnel. OK, you think of the idea. You implement it. You build it. And then you finally launch it. 

But in reality, like what you're saying, is we're spending all these plates, especially at the scale of Google, where it's more of-- like, to me, I'm thinking about it like a really good show. Some of the best plots in shows have all this planning in the beginning, and you don't even realize that they're doing callbacks and forward-looking statements in the beginning to give you signals of what crazy, suspenseful moment is going to come in the end and things all kind of tie together in the last season, right? 

GABE: Totally. 

MAX: Note, for any lawyers listening, there are no forward-looking statements in [INAUDIBLE] 

[LAUGHTER] 

STEPHANIE: Let's be clear, no forward-looking statements in this episode. 

ANITA: Nope. 

STEPHANIE: But it's like, we want to make sure that what we're building now makes sense for our plans in the future. And so for talking about Vertex AI capabilities in these different products, that they all form a cohesive narrative, and this is really hard, especially at Google. It's not easy, and I'm sure you can attest to that, Anita. 

ANITA: Oh, absolutely. And you know what's interesting, Stephanie? I think you and I see each other a lot on Twitter, right? And someone made a comment the other day-- and it's not so much a comment. It's something that people know. 

When something looks simple, most of the time it's not simple. It's because you've done it so many times and you've improved the thing so many times that, to outsiders, it looks simple. But there's a lot of work that goes into making something look simple. 

GABE: It's the duck on the water, right? It's a duck on the water. It looks like it's just smooth and trekking along, and those feet are like, eurgh. 

ANITA: Yes, exactly. 

GABE: Absolutely. 

ANITA: Yes. 

GABE: Absolutely. 

STEPHANIE: So we talked about the experience at Google just a bit in terms of tiering and how difficult it is to achieve at a scale of Google. But what else is different about launching products at Google? 

GABE: We call it Preview NGA, and not-- [GIGGLING] I love this. 

[STEPHANIE LAUGHS] 

At some point, we changed. Because when I started at Google, we still called it alpha, beta, and release. That was still the terminology we used. 

ANITA: NGA, I think, right? 

GABE: NGA-- 

ANITA: Yeah. 

GABE: Yeah, yeah, yeah. 

ANITA: NGA. 

GABE: At some point-- when you started, Anita, were we still calling it alpha, beta, NGA. 

ANITA: It was alpha, beta, GA, mm-hmm. 

GABE: OK, so we've at least time boxed it. Now, some time in the last three-ish years, we changed to this-- I think the original intent is we're just going to call it Preview NGA. 

ANITA: Correct. 

GABE: So we're going to have these two things-- 

ANITA: NGA, yes. 

GABE: --right? And then it was like, well, OK, but maybe we don't want an open preview. Maybe we want to just have an invite-only preview. So then we had this private preview. Then we had public preview, and then NGA. And then, at some point, [INAUDIBLE] like, well, but we kind of need a private GA. And I'm like, huh? So that's different about Google. We have all of these weirdness about phases that a release is in that I think most companies don't have. And there's reasons. 

MAX: Anita, what about the products you've launched in previous companies? How would you contrast the way we launch products to the way you've done it in the past? 

ANITA: A couple of things come to mind. There's a philosophy you'll hear us say. [LAUGHS] We actually call it YOLO, so, you only launch once-- 

[LAUGHTER] 

--right? 

STEPHANIE: Hopefully we're not launching with that mentality of like, screw it. [LAUGHS] 

ANITA: Exactly, yeah. [LAUGHS] No, you only live once, but you only launch once, right? And I think the whole point is that part of us being good citizens to our customers is making sure that we're putting out products that feel like they're ready, and that they can touch, and that there's a strong message, especially for those big tier one announcements. And those are the ones you'll hear us say, you only launch once. And we launch once into the market with a big bang, across the analyst relations team, the PR team, social, big events, and all that goodness. 

I think something else that I see us do well, or at least you'll notice a lot of it, is that we tend to align a lot of our big launches with our big events. I wouldn't call them tier one events, but Google Cloud events, or Google events, in this case. So if you think about it, when you wait for Google Cloud Next, which is actually happening in a little over a month, you'll see a lot of launches land around that time, right? 

If you were to think about Google I/O, like, for example, with AlloyDB, you will notice we had a lot of launches land around that time, from being part of the Data Cloud team, so part of the Data Cloud Summit, which is also a virtual event. We also had a lot of launches. So that, I think, is unique to at least what I've seen on Google. 

MAX: Is it risky to pile so many launches in such a short time, such that you finish Cloud Next, you're like, OK, well, what happened? Oh, you know, just 112 product announcements. 

ANITA: 100%. I don't want to call it the blessing and a curse, but I think it's the-- you have the most eyeballs during these events. So, in some ways, it is a good time for you to choose to launch the products around that time because there's just a lot of momentum around the event. And so, a launch landing at that time is not necessarily a bad thing. That said, you're right, Max, it means that it could be a lot of noise, too, for customers. So how do you balance the noise? And I'm not sure if we really know how yet. 

MAX: So, Anita, after you have had done one of those launches, whether it's tier one or one of the other numbers, what are you looking for to measure success or to validate that you and your team did the right thing to help that launch? 

ANITA: That's a good question, Max. Part of my team's job is putting out content, right? That's how we are showing up at launch. And so some of the things I'm looking at are, how many press articles were we able to land for the specific key messages? but not just land them, were the press and analysts saying the messages we want them to say? Because part of it is truly making sure that the messages you developed are landing in the market. So we're looking at that. 

Something else we're measuring is page views, page views for all our content. And so, if you think about the blogs that we landed, what are the views to those blogs? If you're looking at videos, what are video views? And this is where Gabe's team plays a critical role, especially with video content. When we're thinking about social media, how many engagements are we getting, Likes, Reshare, Tweets. 

And then also share a voice, for a big, big launch, especially, that's a tier one. You're thinking through like, how much chatter is in the internet about your product? And these are usually good signals on did you do well, or did we do what we said we're going to do? 

MAX: Because from the product marketing perspective, it seems like it's a lot about awareness. But then, from the product management and engineering perspective, what they're really looking for is for that awareness to turn into usage and adoption. 

ANITA: Exactly. 

MAX: But that takes longer. 

ANITA: It does. 

MAX: Are you also tracking on a longer time scale? 

ANITA: I would say, maybe, yes and no. And when I say yes and no, it's because we work so closely with the product teams, we're absolutely also in sync with, what does product usage look like? But is it a metric, from a product marketing perspective, am I truly looking at on a day-to-day basis? Probably not. But they are tracking it closely. And we're sort of a part of it. [LAUGHS] Yeah. 

MAX: That makes sense. 

GABE: We're having major discussions right now about how we track what DevRel, what metrics does DevRel kind of care about? And the concept of an active developer is what we really want to try and capture. An active developer plays a big part on these early days of how many people are touching the product? And what is their pattern once they start to touch it? For a database product, how many instances are they touching? Do they start something up and shut it down right away, or does it live on? Are they touching the database product with other products? And what does that look like? What kind of interactions across multiple products are they playing with? 

So a lot of those are very similar to what the product teams are tracking. So, specifically, for databases, I'm working pretty tightly with our product teams to trace out which of those metrics convert to active development? That's what I care about, right? I care about who's trying new stuff? That's what I want to know. And can I track patterns there? And then map that to the kinds of stuff that we do, like content we put out. 

If we put out a lab, a quick lab, that's out in the world that's a hands-on workshop. And we do a public workshop for that for N number of people. Does that convert? And can we see do those people take it back and have more people try it? Can we see shifts in that usage trend? And so that's kind of like piling on to what Anita and her folks track, as far as how we're landing in the market. 

And then we track the follow on from that is, how are people using it? And then the product teams take care of the long tail pieces of that, the long term consumption, and revenue, and all those pieces. I try not to track revenue because I don't want to care. I care more about developers using the product. They get to care about the money part. So I care about developers being successful, which, hopefully, translates to money. But, yeah. 

ANITA: +1, Gabe, and you know what's something interesting, too, is that-- and we haven't talked much about thiss-- but when I'm thinking about audiences, who should care about a launch? Of course, there's external audiences, in this case, customers, developers, et cetera. It could be partners and everyone else. But also, if you think about it, we also have an internal audience, right? Sales teams, they also need to know what's being launched. What are the key messages? Because, guess what, they're having conversations with customers. 

And so imagine being in a situation where you've launched a product, and if your sales team is not enabled to talk about it, and then they get questions from their customers, we look like we don't have our ducks in a row, right? 

GABE: Yep. 

ANITA: Going back to that duck metaphor. [GIGGLING] Those are some of the things we care about. So part of our plans as we're. Thinking about the launch is enablement. How do we make sure that we've enabled our sales teams to be successful with this new thing that we're putting out into the market? 

GABE: And I think part of that, too, is, particularly-- to take example, AlloyDB, since we just launched it-- a lot of the work that we did before the launch-- you talked about messaging and stuff-- is positioning within our own portfolio. Because AlloyDB is a database engine that's based off Postgres. It's Postgres-compatible. Well, we've got other products that are Postgres-compatible. So how do we talk about, both from an external understanding standpoint and sales, when they're talking to customers about what products they recommend for the customer, they have to really tightly understand how our products fit. What's the target for these products? 

It's on us to define that and to help educate them and enable them so that they understand it. We don't expect our salespeople to go and just know everything about everything GCP. There's too much. It is too broad for them to just know everything. So we try and make it easy for them, not quite at the script level. Like we don't write scripts out. But we have a very detailed positioning doc, internally, that's like, hey, you want to talk Postgres? Here's your options. Here's-- 

ANITA: Here's your options. 

GABE: --how we-- Exactly, how do we view that? And we spent a huge amount of time iterating over this document to make sure that it was crystal clear so that we had a very clear way, both internal and external, for people to talk about our products. So there's no ambiguity. So that when a customer comes asking, they get a very crisp answer about what goes where. And that's so important. It's so important to land these products that that part is clear. 

STEPHANIE: Yeah. I mean, even in the content I create that's related to a launch, I'm usually waiting to make sure that we have those things set in stone, before we go out, with our messaging even, externally or internally. And I think each of us has dipped our toes or gone head first into this giant pool of launching products here at Google and have experienced this on our own. 

But I do want to talk a little bit about each of the stages of the launch, pre, during, and post launch. You mentioned sales as one of the consumers of the materials that we create for launch. But who's actually involved in each of these stages? Like, for example, when do product managers come into the play, engineering, PMMs, DevRel, et cetera? 

ANITA: I would say, if I'm thinking about the product team, so product, engineering, they're involved from the get go, way, way even before pre-- [LAUGHS] right? Because, of course, they were thinking about what is the product? What's the feature they're building? They have to, probably, put together PRD for this thing. What is it going to be solving for? And so they get involved much early on. 

I think, from a product marketing perspective, we start to get involved when, I would say, probably, T-minus, maybe, six months before we land something. Because there are many considerations that come into play. There's question's around, when do we launch it? How big is this launch, given, again, from a tiering perspective? Do we need to be thinking about naming? And those things need to be done much, much earlier on. 

And then I would say, maybe, at T-minus 2 months is when we're really all hands on deck on pre activities, defining the core messages, doing some message testing, thinking through what is the bill of materials we need to build? What is that timeline we're leading towards? Are we launching at an event, or not, depending on what it is? I would say T-minus, maybe, two to three months is when, at least from a product marketing perspective, we're deep involved in a launch. 

GABE: Yeah, and DevRel varies wildly at Google, product to product. There are some product areas where DevRel is involved with the engineering and the product managers at the beginning, at the very beginning when you're talking about products. There's even some advocates at Google that have created whole products, like Agonists, the open-source game server stuff that Mark Mandel created. He wrote that. He was the one that came up with the idea and did it. So sometimes, DevRel is the beginning. 

Other times, we get involved once the product teams start to be like, well, we're getting close to an MVP of our product. And then DevRel's like, cool, let's hop in and kick the tires and see what's broken. Other times, they don't get involved until kind of the GTM motions, then with product marketing, figuring out, OK, this bill of materials, great. How can advocates provide some of the more technical in-depth stuff to support this launch? 

It really varies wildly. I prefer to be involved at all steps, which unfortunately, doesn't scale well for me. I just sleep less. But I love each step of the whole process. I love being in at the beginning and ideating a product, and what problems it's going to solve, and be like, well, is that really a problem? I love that stuff. I love being developer zero. I love that part. I started my tech career as a QA tester. So I like breaking stuff. 

I view that customer zero as, can I find those edges, can I find the rough points, to be absolutely sure that we have a story for them, whether it's fix them or just have a story for them for the outside? So that I take it for the team so that outside developers and outside customers, if they hit it, either I've got content out there to address whatever it would be that they would hit so they can immediately find out-- they go and do a search and find like, oh, hey, there's already a blog post about this thing, cool. Or preempt that entirely, and bring it to the product team, and say, this will be a problem. And they go, OK, we'll fix that problem before we let anyone else see it. That part is key for where I like to be embedded. 

The content stuff, it's funny, early on in my career of DevRel, I loved the content stuff. As I've kind of matured as DevRel and advocacy at Google, I'm doing less and less of that, particularly now that I'm a manager. I don't get to do nearly as much of that stuff as I did. So now I'm much more embedded with the strategic side of things and that kind of higher level discussions earlier on. But the content's fun too. 

ANITA: Yeah. 

GABE: Yeah, I like doing that too. 

ANITA: Content is fun. 

STEPHANIE: Yeah, I feel like that leads into how you work with customer testing or user testing, once that starts in each of those stages, like preview and whatever we call it now, GA, before GA. So how does that play into it with what you're doing, Gabe? 

GABE: A lot of the times, as part of the preview, even if it's a private preview, there's customers involved at that point, right? The product team has identified target customers they go, hey, this is probably a great fit for this product. Let's get their eyeballs on it. And they'll invite them in. So then what I get to do is sit in on the meetings between the product teams and those customers, and just listen, and be like, OK, what are you all doing with the product? How are you using it? 

MAX: What's painful, what's hard? 

ANITA: Exactly. 

GABE: Exactly right. And that's a fantastic data point for me to then do planning for that content. And it's like, oh, they're having a hard time doing it, great. Maybe it's a blog post to address that. Or maybe it's, I want to try it to see if I can experience the same pain. And if I can, then it's, can I help crystallize what exactly the problem is, between what the customer's experiencing and what I experience, can I crystallize that down for the product team? 

Since I work with the product team so much, I tend to be able to speak their language. So I know how to kind of translate a problem into something that would be actionable or make sense in the context of what they're currently doing to try and have a higher likelihood that we come to a good outcome for whatever that. So that's great. I offer it myself to UXR to our user experience folks that are designing frontends to our products. I've been a Guinea pig a lot of the times. They'll be like, all right, I want to do some testing with you. 

[GIGGLING] 

OK. So they'll throw me in a lab with a ton of cameras and be like, OK, try and do this thing. OK. So I get to be the pin cushion some of the time for that stuff, too. 

MAX: The electric shocks do get a little bit old, eventually. 

They do, but they pay you for it-- 

[LAUGHTER] 

--so it's OK. 

STEPHANIE: And cookies, it'll be great. I think one thing that tends to happen at all companies, as things come up that you didn't expect. And you might have delays. So what are some challenges that exist? And how do you deal with them? 

ANITA: Any plans you put together, things change, right? Anytime you're building any type of system-- it could be a product, it could be just a system in itself-- most of the time, they tend to go over budget, (LAUGHING) And they also deliver it late. So it's sort of like just the nature of the beast. And so, I think, honestly, a big part of what we do in product marketing is being lockstep in with the product teams and truly understanding, when are things coming? What should we be anticipating for? Should we be making a plan B for whether this thing will drop on this date or not? 

And I think because we do a lot of launches during events, sometimes the events actually become a forcing function, as well. Because there's no way you can move an entire company's event for a launch, right? And so, that also helps with making sure we're staying to our timeline. But I'll be honest, things happen. And when those things happen, then we just go back and we think through what the impact is to the business, to the customer. And then we make the best decisions possible. And sometimes it does mean moving a launch out to a different time. And then that's a decision we all make as an organization. But will I say it doesn't happ-- it happens. 

GABE: All the time. 

ANITA: I think it's expected for anyone, all the time. Yes. 

GABE: And I would say, shifting a launch date out is one of the-- it's just annoying for the rest of us that are kind of following along. Because a lot of the times, Anita, like you said, T-minus two, three months is when marketing super gets engaged, and then same with us with building content. Well, you've spun up all these wheels, and you're going, the duck feet are going furiously under the water. Well, then all of a sudden they're like, well, OK, we're going to shift the data out by three months. 

And it's this roller coaster of like, ugh, OK, well, we just did all this stuff. We're going to halt all that stuff, knowing that in a few weeks, we're just going to pick it back up-- [STEPHANIE LAUGHS] --because we're going to hit that T-minus two or three months again. And we're going to go 

ANITA: Exactly, yeah. 

GABE: So that part's kind of obnoxious, I have to say. And it's happened to me a couple of times with products across Google where, like [? Amy ?] says, stuff happens and things get delayed. But that's pretty annoying. You've gone through all of these-- 

ANITA: It is, yeah, it's a roller coaster of emotions, too. 

GABE: It is, it is. 

ANITA: Imagine being-- [LAUGHS] imagine being invested in putting out this incredible feature and then having to move it out. And it's almost like you have to go back and say, OK, fine, we did all this work. I guess we'll put a pause. I guess we'll let our AR and PR team know we're not going to do this. I guess we'll let the sales teams know this isn't coming. Oh, it can be disruptive. So I feel you, Gabe. 

GABE: And for me-- I don't know if you do this-- but when that happens and I realize, OK, I've got, now, a chunk of time that I didn't know I had, I got to go find something else to work on. I don't want to go work on something else. I was all excited about this thing. 

[ANITA LAUGHS] 

And now I've got to, like, all right, I guess I'll suck it up and go work on this other thing. It's like, no. 

STEPHANIE: Don't go on vacation just yet. [LAUGHS] 

GABE: It is. It's like, ah, but the other thing. OK, well, I guess I'll do this other thing. 

[LAUGHTER] 

STEPHANIE: That's honestly just a beauty and a curse, in a sense. But it's also something that you both love doing and you got to remain adaptive and flexible. And it's a fast-paced environment. It's exciting. 

GABE: True. 

MAX: Got to thrive in that ambiguity as hard as you can. 

GABE: That's right. 

ANITA: 100%. I think thriving is such a great word because it's part of-- you know what, it is the job, right? It is the job. I don't think that anyone out there that's launching products will say anything different. It's just part of the job and so you got to roll with the punches, you know? 

STEPHANIE: Exactly. Well, I know that we're running out of time. So I've learned a lot about your perspective on launching products, having worked with both of you on different launches here and there. It's an exciting space, and y'all have done such a good job with, especially, the AlloyDB. and the hundreds of other feature launches that have come out in between. So while we wrap up, is there anything that you want to leave the audience with? 

GABE: The thing that I hope that folks leave with is there's a thing we talk about in the market called hug ops. Something horrible goes wrong with a company, they have a major outage, or whatever it is, we all kind of, as a tech industry, band together. It's like, oh, hug ops. That company's having a rough time. Just remember how much goes into these launches, how many people are involved. And no matter how you might feel about the product, just have some empathy. It's a tough world out there. And I know I've had this, too, where it's like, you have this thought of like, why would a company launch a product like that? That's ridiculous. 

[GIGGLING] 

Just remember how many people and how much effort goes into this stuff, and just think before you react about this stuff. I would love a kinder, gentler social world. And I know it's a pipe dream, but that's what I would like to leave folks with is when a new launch happens, just be mindful and think about what we've talked about today and how much goes into each of these launches. It's pretty cool. 

STEPHANIE: That's a good shout out for everyone on Twitter, right? [GIGGLING] 

ANITA: 100%, yes, exactly. I think, for me, probably a big takeaway is it's probably exactly what Gabe said, just knowing that there is a big engine that is in the back end-- [LAUGHS] working to bring you the goodness of what the product and engineering teams are building. . And I think part of it is just being part of the conversation too, to knowing that there are humans behind these products. They're not just a product, but they are actual individual humans and they've been working hard at these things, and so, I think having a little bit of that empathy. 

And I think for me, too, something else is, and not so much learning, but I think what makes my job so exciting in product marketing is, honestly, being in the middle of touching things that I could see customers and folks use. For me, I think it's the biggest satisfaction. A lot of people probably don't have a good sense of what entails or what is included in product marketing. But I love being in the middle of working with my product and engineering teams, working with the front end of my customers, right? 

I even tell folks that if you were to go to the website right now, cloud.google.com/databaseproducts. I've probably touched every single one of the things on there, on those pages. But the ability to be able to see your work being used. And being impacted. And getting into the hands of customers. I think that's probably the biggest thing about being in product marketing. 

STEPHANIE: I love it. 

GABE: And tell us and tell us That's the other message I'd love to reach out to people is if you have a good experience, a bad experience, a sideways experience, whatever it is, reach out. We're active on Twitter and stuff. So reach out and tell us. 

MAX: And well-structured feedback will get to people and will change things for the better. 

GABE: Absolutely. 

MAX: And I think a lot of folks-- 

ANITA: Oh, yes. 

MAX: --forget that there's somebody listening. There's somebody consolidating, and classifying, and passing on that feedback. And if it's clear and productive, it actually can make things a bit better for you and for everyone else. 

GABE: If you hit a problem, other people have hit the problem. Talk about the problem. Because the more people that talk about a problem, the better a chance that it reaches the right ears at the right critical mass to have something happen. 

STEPHANIE: Yeah, absolutely. I've been hosting Twitter Spaces where we get feedback live from folks. And that's been super helpful for product, too. So I encourage y'all to stay tuned and keep in touch with me for our future launches for those things. But I want to thank you both, Gabe and Anita, for coming to join. And I think it took too long to get you all here. So-- 

[GABE LAUGHS] 

--thank you for joining and telling us about your journey. 

GABE: Thanks for having us. 

MAX: Thank you. 

ANITA: Absolutely, thanks for having us. This was fun. 

MAX: That was an awesome conversation. And I think it really helped me see how much work goes in ahead of time to coordinate on a launch. Because a lot of different moving parts have align and get to the finish line all at once in order to have a successful launch. 

STEPHANIE: Yeah. I mean, even if you have this master plan in the beginning, it's never going to go as planned, right? You have so many different working groups operating concurrently, with their own requirements and positions on things. And that all has to land cohesively on a single day, right? Like YOLO, you only launch once. And then it doesn't stop there. You got more launches, features, updates, fixes. And so it's just a constant iterative process. So very impressive that they feel that they're so involved in the space and that they're so extremely passionate about it. 

Now, Max, I know that you are working on a whole slew of things. But what's going on with you? 

MAX: So, recently, I have been working, with two summer interns that joined our team and helping close out the final bits of work, giving them some feedback, working on the whole conversion process, and mostly just sending out a whole lot of thank yous. It's been super fun to write all these amazing things about what our team has done, what our interns have done, and show a lot of gratitude for the people who've made it a successful summer. And once I finish with all that, I'm going on vacation! 

STEPHANIE: Woo! Yeah. 

MAX: So I'm going to take a little bit of time off and probably play a lot of board games and video games that have been piling up in my real and virtual backlog. How about you? 

STEPHANIE: Yeah, I honestly don't remember the last time I was able to sit and actually watch TV or just relax, to be honest. But, yeah, that's awesome. I also had a great time hosting our interns, who just really impressed me the entire time. And they deployed applications, they actually were able to host the podcast, as you might have noticed last week, and were on set with us. It was so much fun. So congrats to the intern class of 2022 so far at Google. And we're looking forward to welcoming our next ones. But, yeah, have a great vacation, Max. 

MAX: Thank you. 

STEPHANIE: Thanks, everyone, for listening, and we'll see you all next week. 

MAX: All right, take care. 

[MUSIC PLAYING]