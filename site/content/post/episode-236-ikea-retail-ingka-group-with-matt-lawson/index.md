+++
audioDuration = "00:25:14"
audioFile = "Google.Cloud.Platform.Podcast.Episode.236.mp3"
audioSize = 36346706
categories = ["Moving to Cloud"]
date = "2020-09-16"
description = "Matthew Lawson of IKEA Retail (Ingka Group) joins Mark Mirchandani and Priyanka Vergadia today, telling us all about IKEA Retail (Ingka Group)'s move to the cloud."
draft = false
episodeNumber = 236
hosts = ["Mark Mirchandani", "Priyanka Vergadia"]
title = "IKEA Retail (Ingka Group) with Matthew Lawson"
image="/post/episode-236-ikea-retail-ingka-group-with-matt-lawson/images/hero/hero-EP-236.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/itzgav/episode_236_ikea_retail_ingka_group_with_matthew/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Matthew Lawson](https://twitter.com/kanthael) of IKEA Retail (Ingka Group) joins [Mark Mirchandani](https://twitter.com/markmirch) and [Priyanka Vergadia](https://twitter.com/pvergadia) today, telling us all about IKEA Retail (Ingka Group)'s move to the cloud. Engineering Manager Matt and his team primarily focus on the early stages of development at IKEA Retail (Ingka Group), helping the company with research and planning as well as development. Lately, they have been focused on incrementally moving IKEA Retail (Ingka Group)'s digital presence to the cloud. 

Matt explains the digital shift process for IKEA Retail (Ingka Group) and why they chose to modernize and move pieces to the cloud over time. By illustrating through examples, he details projects the team worked on during this digital transformation. Matt also talks about the changes to the IKEA Retail (Ingka Group) Digital DNA, emphasizing progress made in their digital culture to allow for the drastic change from on-prem to the cloud. Using managed services like Google Cloud Run, IKEA Retail (Ingka Group) has been able to adapt and grow in the cloud. Because IKEA Retail (Ingka Group)'s culture is developer-supportive, Matt and his team were able to research and convince the company that managed services in the cloud was the way to go, and developers were allowed some autonomy to choose things like GKE to create an effective cloud environment for IKEA Retail (Ingka Group).

Next year, Matt and his engineering team are hoping to run some online hackathons and other events. 

##### Matthew Lawson

[Matthew Lawson](https://twitter.com/kanthael) is responsible for leading a small innovation team at IKEA Retail (Ingka Group) in southern Sweden. He has worked within the IT/Digital  industry for 13 years and has deep experience and knowledge in application development, automation, DevOps and cloud technologies - especially serverless. He has a deep passion for enabling teams to quickly provide business value across the entire digital and physical customer journey.

##### Cool things of the week

* Next OnAir as it happens: All the announcements in one place [blog](https://cloud.google.com/blog/topics/google-cloud-next/complete-list-of-announcements-from-google-cloud-next20-onair)
* A developer’s take: Get the most out of Cloud AI Week at Next OnAir [blog](https://cloud.google.com/blog/products/ai-machine-learning/next20-onair-cloud-ai-week-session-guide)
* BANDAI NAMCO Entertainment Inc. brings PAC-MAN to the real world in PAC-MAN GEO [blog](https://cloud.google.com/blog/products/maps-platform/bandai-namco-entertainment-inc-brings-pac-man-real-world-pac-man-geo)

##### Interview

* IKEA Retail (Ingka Group) [site](https://about.ikea.com)
* Matt's Next Session: Serverless Functions (FaaS): Secure, Scalable, Resilient, Anywhere [site](https://cloud.withgoogle.com/next/sf/sessions?session=SVR201)
* ML Kit [site](https://developers.google.com/ml-kit)
* Compute Engine [site](https://cloud.google.com/compute/)
* Cloud Run [site](https://cloud.google.com/run)
* Google Cloud Functions [site](https://cloud.google.com/functions)
* Pub/Sub [site](https://cloud.google.com/pubsub)
* BigQuery [site](https://cloud.google.com/bigquery)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* Firestore [site](https://cloud.google.com/firestore)
* IKEA Retail (Ingka Group) is hiring!  [site](https://join.ingka.com)

##### Tip of the week

This week, we get a great tip from our friend Grant on using Google Cloud Functions! [github](https://github.com/GoogleCloudPlatform/functions-framework)

##### What's something cool you're working on?

Priyanka is working on sketches like [this summary of Google Cloud Next](https://www.youtube.com/watch?v=7OBTwoBZ404&feature=youtu.be) and more [GCP Comics](https://gcpcomics.com)!

{{< transcript "[MUSIC PLAYING] MARK: Hey there, everybody, and welcome to episode 236 of the weekly Google Cloud Platform podcast. As always, I'm Mark Mirchandani. And today, we're here with Priyanka. Hey, Priyanka. How're you doing?" >}} 

PRIYANKA: Hi, I'm good. It's been long, Mark. How are you? 

MARK: It feels like it's been years. But every week this year feels like it's been years. 

PRIYANKA: [LAUGHS] Yeah, I agree. 

MARK: It is a strange time. It will continue to be strange times. The best we can do is just move forward. 

PRIYANKA: Yep. 

MARK: Speaking of moving forward, of course, we have a great episode today. So Priyanka, can you tell us who's going to be joining us today? 

PRIYANKA: Well, we will have Matt Lawson from IKEA joining us today. And he's going to talk to us about how IKEA is starting to build solutions in cloud from bottom up, and also, a team within IKEA that works on all of these cool projects. 

MARK: Yeah, it was a super awesome conversation. And I really liked, A, teams that do experimental stuff, right? Because I still feel like that's where the coolest stuff comes out. 

But that, B, it was super interesting how he told us about it was a bottom-up kind of decision and how the developers and other team members who were working with code were able to straight-up just play around with the cloud, and then said, look, this is a good value. 

PRIYANKA: And that's where the best ideas come in, right? When you have the developers experiment, and then they come up with things. And then, depending on that, you make decisions how to run huge businesses, which is such a cool story. 

MARK: And then after that, we're going to have a great tip about using Google Cloud functions from our friend Grant. But before we do either of those, why don't we get into our cool things of the week? 

[MUSIC PLAYING] 

So if you've been paying attention for the past nine weeks, which, as we discussed earlier, is approximately 65 years, Google Cloud Next has been going on. And there has been a ton of content. I mean, it is just ridiculous how much content there is. 

So for people who have been watching, it's all up there, and they can continue to watch it. But thankfully, someone put together a blog post that really summarizes all the key points and all the announcements that were made. So I think that's super exciting. And we'll have that link in the show notes. 

But if that's even too much, we actually got an even more curated list from our friend Anu, who is really looking at it from a developer perspective. So she's recommended a couple of great stories. So we'll have both of those links in the show notes for people who want to kind of catch up and maybe weren't able to keep up with all nine weeks of content. 

PRIYANKA: So check the Next content out. But I have one more cool thing of the week, which I'm excited about. So if you're into games and if you're into PAC-MAN, we've brought basically PAC-MAN on the streets of your favorite real-world neighborhood. So you can now play PAC-MAN in the streets. So there's an integration between Maps and PAC-MAN, which is really cool and exciting. 

MARK: We've seen a lot of cool games that are kind of doing augmented world stuff, right? Because they're able to overlay it on the real world. 

And obviously, Pokémon GO is probably the biggest example that people are familiar with. But there's been a lot of other games out there. And I think it does add to kind of a cool, virtual reality, future simulator type feel to the gaming world. 

PRIYANKA: Yep, so do check that out. 

MARK: All right, well, with our cool things out of the way, why don't we go ahead and jump into our main content with Matt? 

[MUSIC PLAYING] 

Hey, Matt, thank you so much for joining us. To get things started, can you tell us a little bit more about yourself? 

MATT: Yeah, sure. Matthew Lawson. I work at IKEA Retail as an engineering manager with our incubation and innovation team, which we call Edge Engineering. And we describe ourselves as a team that works with the early phases of development in areas where an internal team is required, but it doesn't currently sit in the existing digital organization or have a natural place to execute. 

I've been with IKEA for 19 years. 13 years of those, I've been within the digital/IT space. Before that, I actually was working in carts and carryouts in the Calgary store in Canada. But now I'm living in southern Sweden and having the time of my life. 

MARK: That's quite a move. And IKEA, it's a big company, right? They're doing a lot of different things. And they've got a lot of work going on in the digital space. And you've got this Edge Engineering space. Can you tell us a little bit more about some of the things that IKEA is working on and how that's different from the Edge Engineering? 

MATT: So as most retail companies are going through right now, and also, actually, all companies, I think, across the globe right now, we're doing a big digital transformation. Within that, we're pretty much changing everything. Our retail operations manager said once, we're flying a plane and changing the engine at the same time. 

So we are actually changing pretty much everything from what we have in the data centers on-premise today, moving things to the cloud. We're doing this as not a big lift and shift, but as an increment over time, piece by piece. So we kind of wanted to focus on the few and make mistakes, of course, which we're doing a lot of those right now. It's been a lot of fun. 

But my team was set up about a year ago. Our first use case we did was working with the ML kit teams within Google to create the visual search stuff that we presented last year at Google Cloud Next. And we had a booth set up, and it was a great time. And ever since then, we've been working on small projects. 

And fortunately, we've had some great success. And a couple of those things have actually turned into real product teams within the organization today. 

PRIYANKA: So Matt, digital transformation has been a term, especially in retail vertical, that we hear a lot these days. And IKEA being this huge, ginormous retail company, it would be great to hear from you what does it actually mean. Because it could mean different things to different companies. So what does it mean for IKEA? 

MATT: Yeah, like you said, it means a lot of things. Sometimes people are treating it kind of like as a buzzword these days. But from an engineering aspect to where I sit-- I think it's almost two years ago now-- we started looking at changing our complete organization and all of the solutions into a digital product or organization kind of all at the same time. 

And we kind of took four aspects of that. Obviously, our customers and our co-workers are our main-- who we provide IT to, right? We create digital journeys for customers. Or we're empowering the co-workers to be able to do their jobs. 

But around that, we're also looking at changing the digital foundation that we're sitting on. We have data centers today. We still have them today. But as we move to the cloud, our officer has stated [INAUDIBLE] the data center, right, we have hundreds of solutions that are all communicating to each other. And we need to simplify that in order to be quicker. 

But I think where a lot of the time and the changes happened, and actually, where we have the largest opportunity still today, is what we call our digital DNA. And that's the ways of working. That's the culture. That's the mindset. It's changing competencies. Instead of working in the waterfall ways, you're moving to more agile ways of working. 

And it's that culture shift that I hear people today say things that make me cringe, where it's like, we should wait until everything is in place before we do anything. Let's just do it, see what happens, fail fast. And we started doing these things quite fast quite a lot lately. And I'm hoping a lot of people who are IKEA customers today are seeing this, as we go here, so. 

MARK: Yeah, and you mentioned earlier that rather than going down to the lift and shift model, you moved more of the modernized in place almost, right? So you take a service, you kind of break it down, you rewrite it, you move it to the cloud. Why did you choose that strategy? 

MATT: Well, we had large investments in the data center [INAUDIBLE]. And we didn't want to just move everything over. Today, we're using VMware today on-premise. And we just didn't want to move all our VMs over to, let's say, Compute Engine. 

We wanted to keep the lights on without having any downtime in terms of that happening. There could be no downtime when doing that kind of thing. But our kind of initiative at first was to say, let's just take one piece, whatever that is. And then we'll break it, like you said, into smaller pieces. And as we go, we turn things off in the data center. 

Whereas other companies that we've spoken to that are kind of going through the same thing have done the complete lift and shift. They shut down the data centers. And they're living natively in the cloud today. Whereas what we're doing is kind of moving over to managed services, platform as a service, software as a service, of course. 

And one of the things that I don't like seeing is when people just take that VM that they have today, create a Compute Engine VM, and just say it's migrated now. I would prefer that they reengineer it from the ground up, using Cloud Run or Google Cloud functions. 

PRIYANKA: Can you give us some examples of those managed services that you might have used in improving or making some systems better for your operations? 

MATT: Yeah, so one large example, actually, especially with everything that's going on the world today with COVID, when we kind of closed our offices at the end of March, I think it was, we started noticing that co-workers were complaining about ergonomics at their home. People were working in their kitchens. 

And I've been on many meetings where someone's laying in bed or sitting on a sofa. And one of the things that we knew that was needed right away was a way that co-workers from our office locations could be able to borrow furniture from those sites. 

What we did is we went to the site administrators who take care of those locations. And they were talking about using Sheets or Excel or something to, oh, this person has checked out this monitor or this mouse or whatever. We didn't like that. We knew we could easily create a solution that was using the proper authentication mechanism using Firestore as a database. 

And we started using Google Cloud functions, but we quickly moved to Google Cloud Run for it. And we created a solution in three days. We talked about it Thursday night, and it was up and running on Monday morning. I think we had it rolled out to all of our Swedish digital offices that we have here within a week. 

And now we're seeing adoption from it in other places like Serbia, Australia, and Canada. And a lot of people think that serverless, that's great now. But we still have that mindset change where people think that if you spend a lot of money on a solution, that's going to be the best business value. Whereas our team kind of works on the quote from our founder. We don't respect a solution until we know what it costs. And simplicity, that's the sort of thing that we kind of strive towards, right? 

PRIYANKA: Yeah. 

MATT: And I think that the solution that we've been up and running now since the beginning of April has cost us under 20 bucks US in order to run. And we have over 1,000 users of it. We've given out 2,000 items from our offices, borrowing. 

And when hopefully things come back to normal, or whatever the new normal may be, we can handle that solution in terms of getting the items back as well, so. 

PRIYANKA: Can you give me concrete examples of what digital transformation actually means? And what are some of the projects that you might have done? 

MATT: One of the use cases that we have been working on-- and actually, it's been my colleague Michael who's pretty much done it from the ground up, and we've been helping them here and there-- is before we started working on that one, the stores were getting weekly or monthly reports on what items are being sold in their location. 

And that was great for the past, but now at the time where time is of an essence, right, when customers online are searching for this one piece of furniture, and we know that they live in that city, we can already tell the store, hey, look, probably within the next 24 to 72 hours, there's going to be a lot of sales on this item, just from what we're seeing online. 

And what we've done is we've taken all of the Google Analytics data and we're also combining it now at our location sales as well. And we're creating these live reports of what we've done. And how that works is, we still have a very archaic system that sits on premise of each IKEA location that takes care of all our stock and sales. And all of those events are being pushed to Google Cloud Storage. 

And from there, we're automatic kicking up those messages into Pub/Sub. And we're talking 40,000 messages a minute here for across the board. And Google Cloud Functions was set up there to pull in those messages in batches. Let's just say, 1,000 at a time to be processed into BigQuery or to be pushed to other Pub/Sub topics to be further processed down the pipeline. 

And this actually gives our stores kind of a real-time dashboard, as one use case of this. But of course, this can go into many different things with system events and other events that happen within that system that sits on premise today. And we can act on it. 

But that was really fun to work with. And it's just been amazing to see. And I know that this was just kind of one step. I can already foresee what other steps will happen after that. 

MARK: Yeah, I mean, that's the really cool part about what you're describing, is that there's different pieces that you say, OK, let me look at this. Let me see how I can improve it by moving it to the cloud and, like you said, rewriting it, taking advantage of cool things like functions and Pub/Sub. 

And that makes a lot of sense because it's easy to show this is what it looked like before, this is what it looks like after. But when it comes to an entire organization, you can't rewrite everything all at once. You've got to break it down into pieces. 

So what does that look like from the culture perspective that you mentioned earlier, right? You've got to get the whole organization to kind of agree that cloud is good and that you can start using it. 

MATT: Yeah, what we always see in our team is, there is no such thing as one big problem. They're just the combination of smaller ones. Break it down. And as we're taking our steps-- and we still have a long way to go-- we need to start small and look at one piece of the puzzle or one spaghetti strand, as we call it. And then we just break that down. 

And moving to serverless, we're re-engineering as we go. It kind of has the benefit of also helping with the cloud consumption costs, right? We're looking at 10x savings of operational costs by moving to Google Cloud Run or Cloud Functions or anything like that. 

And another thing I keep on saying is Cloud consumption does not always equal business value provided by the solution. So it's inexpensive, right? 

PRIYANKA: It's more developer-led initiatives and not coming from top down, which helps you prove the benefits of some of these products and also the application. 

MATT: Yeah, correct. So we have our product organization today. And they're obviously setting some direction on terms of which way that product will go. But how the engineering teams do it with inside of those products, that's completely autonomous to them, right? 

Of course, there are some frames that we set in terms of what technical solutions we have already purchased at a large scale that we should use, Cloud Platform as being one of them, right? 

When we had our cloud strategy document created a couple of years ago, at that time, we were using pretty much almost all of the cloud providers in some way or form-- the big three in North America and Europe and also a few in China as well, since we have over 30 stores now in China. 

When it came down to say, hey, look, we need to put our focus somewhere, where should we go? That wasn't a top-down decision, which surprised a lot of people. A lot of people thought, we're already with this partner. Well, let's just continue doing that, where the developers were already building components for the IKEA retail website in Google Cloud Kubernetes Engine. 

It just made sense. Let's just go where the developers want to go. Let's not be a salmon trying to swim upstream here. That was a nice culture shift. And it's good to still see that sometimes. 

Of course, there are some things that still go off the trail. And we need to pull it back in to put focus on certain areas. But that's a learning opportunity, as we have here. 

MARK: Yeah, I mean, it's really awesome to hear how the developers get to say a big influence, right? Because ultimately, some deals get made at the top. And like you said, they're kind of made without that context of what the developers are doing. 

But when you give the developers the chance to work on all these different clouds, every cloud has its advantages, has its disadvantages, right? Given the tools to be able to say, OK, here's a small problem, let's solve it on the cloud that makes the most sense to solve it on, and then what you end up with is a whole bunch of solved problems, which is fantastic. 

But I have to imagine that's also kind of hard to manage, right? Because now you are really looking at a bunch of different pieces. 

MATT: Yeah, exactly. But it doesn't get that complicated, because when you have all of your, let's say, data, right, the brains of your applications-- and then that, today, sits all on Google Cloud-- most developers know that instead of using shared VPCs between cloud providers or back on premise and stuff, in order to do this quick or to be able to be working effectively and efficiently, most solutions do end up on Google Cloud. But we are a multi-cloud user here. So yeah, we don't have everything into one. 

MARK: So Matt, I'd love to hear more about the Edge Engineering group. Because I feel like programs like that inside of companies is where you get the best ideas, right? 

MATT: Or sometimes not. We are the most creative bunch across the team, but we do have a lot of stakeholders that we do meet outside of digital, right? So within retail and finance and other areas of the organization. 

But one of the cool projects we're working on now is every year, we have a digital festival, we call it, where we have-- it's like an internal IKEA event. We do invite externals to do presentations. And coinciding with that, we run a hackathon. So what we're looking at doing now is kind of streamlining the whole hackathon setup and process of how we're running it. With everything going on today, it's probably going to be a virtual event. We're planning this year, next calendar year, early on. 

So we don't know what it will look like yet. But we're building a fun little website that's, yeah, running on, like I said, Google Cloud Run. You'll see a little trend here that we love Google Cloud Run. And PMs over there are fantastic to speak to about changes in things that are going on. We're hoping that all of our hundreds and thousands of our co-workers will participate in that, coming up. 

But that one's running on Firestore. It's running on Google Cloud Run. And then we're baked into our authentication mechanism that we're already using across the thing, so it's completely seamless with single sign-on and everything. 

And it's just so easy to do. Once you've done it once, taking that template and doing it over and over again for different solutions, it's so fantastic. And it's so nice to see leaderships look at these kind of things and say, oh, yeah, we can do that in a few days, and then get it up and running. 

And one of the things that we always say is, a prototype is worth a thousand meetings. And being able to show something quick, even if it looks horrible-- we are the worst designers in the world in our team-- at least, they can get the vision of what we're trying to do. 

MARK: I think I should start using that more often. I mean, a prototype is worth a thousand meetings. Because I think, in general, we have about 1,000 meetings a week. So it's like, no, I'll cancel all these. Let me just build something, and that'll prove that I did good stuff this week. I love that idea. 

MATT: That quote actually came from one of our offices in Almhult, Sweden, where IKEA was born. So we have this room that we call the Pattern Shop. They have 3D printers the size of refrigerators. They do test and learn for actual-- the physical products, right? 

And they have that motto printed on vinyl on one of their walls-- a prototype is worth a thousand meetings. And I love it. There is the thing that we also use in digital, saying, no method is more effective than a good example. It's just an easy way of just explaining that to somebody, so. 

PRIYANKA: Well, this was very insightful for both Mark and I, and I'm pretty sure for our listeners today as well. Is there anything else that we have missed that you would like to mention before we wrap things up here? 

MATT: Yeah, so I joined for Node one of the PMs on Google Cloud Run and Google Cloud Functions and one of the talks called Serverless Functions at the Google Cloud Next OnAir that happened a few weeks ago. So I recommend that you can watch that one. 

It's SVR 201 on the website. And I go into depth of one of these cases. And I showed the architecture. Actually, the one I talked about was how we're doing messages from our legacy systems on-premise to what we're doing in the Google Cloud with it. 

And also, too, we're doing a lot of hiring within the digital space. So if you're interested in joining IKEA, we have a website called join.ingka.com. join.ingka.com. 

MARK: Yeah, no worries, we'll have those links in the show notes as well. Well, Matt, thank you so much. I love to hear these concrete examples. And I think that IKEA-- I mean, that's the best mantra. 

And it sounds like they're really investing in this idea of taking small pieces, solving it, moving into the cloud, get the value where it is, instead of trying to say, OK, let's plan out a 10-year strategy. Moving little pieces, it sounds like, has been really successful. And it's super exciting to hear about. Of course, we want to thank you for coming in and telling us a little bit more about it. 

MATT: Yeah, thanks for having me. And thanks for listening, everybody. 

MARK: Once again, thank you so much, Matt, for coming in. Again, it was such a cool story. And I love hearing these real-world case studies. And I mean, it's IKEA, right? So I mean, that's super cool. I was so excited when we were able to record this one. 

PRIYANKA: Well, I love IKEA, so it was absolutely amazing to hear how the internal things and technology at IKEA is set up to bring all the experiences that we experience in the stores. 

MARK: Absolutely. And of course, putting together their different products was probably a lot like putting together IKEA furniture, but hopefully with a little bit less swearing. 

Speaking of which, Matt told us that great story about how they were able to build that Pub/Sub and Google Cloud Function solution over a couple of days. And so I thought to myself, oh, you know what? We actually know somebody who knows a lot about Google Cloud Functions. So for this week's tip of the week-- 

[MUSIC PLAYING] 

--we're joined by Grant, a Google engineer advocate and, apparently, an amateur saxophonist who works on Serverless. Hey, Grant, how are you doing? 

[SAXOPHONE] 

GRANT: Hey, Mark, I'm pretty good. Been practicing my alto sax recently. 

MARK: Right on. So I heard that you have a tip to share with us about using and debugging Google Cloud Functions. Can you enlighten us? 

GRANT: Yeah, so Google Cloud Functions allows you to run your code with no server management. That's the simplest way to run code on GDP. Choose a runtime like Node 12, Python 3.8, Ruby T6, or Java 11, write your function, and apply. You can [INAUDIBLE] scaling web server with an HTTPS URL. 

MARK: All right, that makes sense. But what actually happens when you take a Google Cloud Function and deploy it to the cloud? 

GRANT: Great question, Mark. Let me tell you exactly what happens under the covers when you deploy a function on Google Cloud. So most of us use GCloud Functions Deploy to deploy a function source code to Google Cloud. 

So what does this command actually do? Technically speaking, well, it zips up your local source code up to 200 megabytes and uploads it to the Cloud Functions API. We then build a container with your function. This contains your functions and source code and dependencies and this thing called the Functions framework, the open source wrapper library that sets up an HTTP server and invokes your function when receiving a request. 

How is the container built? Well, it's built with what's called GCP buildpacks. Buildpacks are open source on GitHub, so you know exactly what your function contains, like environment variables and such. It's also great for testing and portability across clouds. 

The container is then hosted on Google Cloud, which internally runs the container on gVisor, managed by Google's [INAUDIBLE] system, managing thousands of applications in Google's data centers. So boom, that's what happens when you deploy a Cloud Function. 

Now, here's a 300-level tip. Did you know that you can provide a custom functions framework dependency when deploying your function? This can be useful for debugging the raw HTTP requests seen by your Cloud Function or perhaps suggesting a new feature to the Google Cloud Functions runtime. 

I'll add a link to learning more in the description. And that's your Cloud Functions tip of the week. Thanks for having me, Mark. 

MARK: Awesome. Thanks, Grant. We'll make sure to put those links in the show notes for people who want to learn more about the functions framework. So Priyanka, like you said earlier, it's been quite a while. What have you been working on? 

PRIYANKA: I just released the third episode of the Security Comics that's on my Twitter. And we also set up a website for it now. So it's gcpcomics.com. So now that we have three, I thought it would be great to create a home for all of these. So yeah, check that out. 

And that's what I've been working on in the last few days. There's some sketch notes I'm working on. There was a GKE sketch note that I released last week. We'll put the link in the description for that one. 

And Google Cloud Next over the past few weeks was kind of overwhelming for me. You have to read so much to figure out what's going on. I thought it would be great to curate all of that into, basically, all the announcements that we did over the period of these few weeks. 

So we just released a summary GCP sketch note for the Google Cloud Next 2020, where you can find all the different announcements that we did over the last few weeks. And yeah, let us know what you think. I know it was hard to navigate all of the different things that were happening over the past few weeks. So hopefully, this will help demystify some of that. 

And if you have any other questions, finding something interesting that you would like us to maybe act on or create something, do reach out to the Twitter handles. We'll include them in the description as well. 

MARK: Yeah, I mean, people have loved the sketch notes, the comics. I mean, it's just cool to see those stories told in a very different way from what we traditionally have. 

And, like you mentioned, if people have had trouble keeping up with Next, you can go check out the videos. We've got the link in the description for all of them. We've got Anu's link in the description. And now we have a sketch note in the description. You have no excuse, listeners, to not at least check one of those out and be like, yes, I understand everything that happened at Next. It's OK, I have no idea what all the things that happened at Next were. It's so much. 

All right, well, thank you for joining me, Priyanka. As always, it's been a ton of fun. And for all of our listeners, stay safe out there. And we'll see you next week. 

PRIYANKA: Thank you. 

[MUSIC PLAYING]