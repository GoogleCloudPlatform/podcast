+++
audioDuration = "00:34:47"
audioFile = "Google.Cloud.Platform.Podcast.Episode.154.mp3"
audioSize = 50492654
categories = ["G Suite", "Sheets"]
date = "2018-11-07"
description = "Joanna Smith and Alicia Williams talk G Suite with Mark and Melanie this week!"
draft = false
episodeNumber = 154
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "G Suite with Joanna Smith and Alicia Williams"
image="/post/episode-154-gsuite-with-joanna-smith-and-alicia-williams/images/hero/hero-EP-154.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/8BRDCgu1K9N"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/9v1g5d/episode_154_g_suite_with_joanna_smith_and_alicia/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Joanna Smith](https://twitter.com/dontmesswithjo) and [Alicia Williams](https://twitter.com/presactlyalicia) talk G Suite with [Mark](https://twitter.com/Neurotic) and [Melanie](https://twitter.com/nyghtowl) this week! G Suite is Google's collection of apps to help make working easier. It includes things like Gmail, Docs, Sheets, Calendar, and more and is designed to be collaborative. It's customizable, allowing users to adjust the programs to their needs and be more effective -- including integrating it with Google Cloud! G Suite has an active community of developers building add-ons to increase functionality as well.

<!--more-->

##### Joanna Smith
[Joanna](https://twitter.com/dontmesswithjo) is a Developer Advocate for G Suite, working to make sure that anyone can extend G Suite with clever solutions to make Google work for them.

##### Alicia Williams
[Alicia](https://twitter.com/presactlyalicia) is an advocate for Google Cloud, trying to help data analysts solve problems. She uses machine learning, SQL, and visualizations to help solve problems and tell stories.

##### Cool things of the week

* A dataset of congressional bills and built a text classification model with AutoML Natural Language by Sara Robinson [tweet](https://twitter.com/SRobTweets/status/1057995132933431301) and [blog](https://medium.com/@srobtweets/classifying-congressional-bills-with-machine-learning-d6d769d818fd)
* Serverless from the ground up: Connecting Cloud Functions with a database (Part 3) [blog](https://cloud.google.com/blog/products/serverless/serverless-from-the-ground-up-connecting-cloud-functions-with-a-database-part-3)
* How 20th Century Fox uses ML to predict a movie audience [blog](https://cloud.google.com/blog/products/ai-machine-learning/how-20th-century-fox-uses-ml-to-predict-a-movie-audience)
* Kick off developer projects with improved G Suite Developer Hub [blog](https://cloud.google.com/blog/products/g-suite/kick-off-developer-projects-with-improved-g-suite-developer-hub)
* This multiplayer game integrates Open Match, a highly-scalable, open source matchmaking framework from Google Cloud, Unity [tweet](https://twitter.com/googlecloud/status/1057795749822582784), and [Google Doodle](https://www.google.com/doodles/halloween-2018)
* Happy Anniversary, Melanie!

##### Interview

* G Suite [site](https://gsuite.google.com)
* Google Sheets [site](https://www.google.com/sheets/about/)
* G Suite on Google Plus [site](https://plus.google.com/+gsuite)
* G Suite Marketplace [site](https://gsuite.google.com/marketplace/)
* G Suite on Github [site](https://github.com/gsuitedevs)
* G Suite APIs [site](https://developers.google.com/gsuite/aspects/apis/overview)
* G Suite App Maker [site](https://developers.google.com/gsuite/aspects/appmaker/overview)
* Building IoT Applications on Google Cloud [video](https://www.youtube.com/watch?v=RYaprBSDy8A)
* Firestore Google Apps Script Library [site](https://github.com/grahamearley/FirestoreGoogleAppsScript)
* Build on G Suite [site](https://developers.google.com/gsuite/)
* Advanced Services Documentation [site](https://developers.google.com/apps-script/guides/services/advanced#enabling_advanced_services)
* BigQuery [site](https://cloud.google.com/bigquery/)
* New Google Sheets enterprise data integrations with BigQuery and SAP [blog](https://gsuiteupdates.googleblog.com/2018/07/google-sheets-bigquery-SAP-integrations.html)
* Analyze big data within Google Sheets [site](https://gsuite.google.com/campaigns/index__sheets-dataconnectors.html)
* Analyzing text in a Google Sheet using Cloud Natural Language API and Apps Script [blog](https://cloud.google.com/blog/products/gcp/analyzing-text-in-a-google-sheet-using-cloud-natural-language-api-and-apps-script)
* Entity sentiment analysis on text data in a Google sheet using Cloud Natural Language Github [site](https://gist.github.com/aliciawilliams/2f27bb592d16109c8c977dab5302af13)

##### Question of the week

[What if I want to write a code sample with a link that opens the Cloud Console and automatically clones a Git repository into Cloud Shell?](https://cloud.google.com/shell/docs/open-in-cloud-shell)

##### Where can you find us next?

Alicia will be at [DevFest](https://devfest.withgoogle.com).

Mark will be at [KubeCon](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2018/) in December.

Melanie will be at [SOCML](https://sites.google.com/view/socml-2018/home) this month.

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 154 of the weekly Google Cloud podcast. I'm Mark Mandel, and I'm here with my wonderful colleague, Melanie Warrick. Hello, Melanie." >}}

MELANIE: Then I forgot her name. Hi, Mark. How are you? 

MARK: I didn't expect so positive of a response. I'm good, how are you doing? 

MELANIE: I'm good, too. All right, well, Mark, this week we have G Suite-- 

MARK: Yes. 

MELANIE: --on our docket. We have Alicia and Joanna joining us this week, which is really great. And before we get into that, as always, we will start off with our cool things of the week, and we will end with our question of the week. And this question comes all the way from Mark, which is, what if I want to write a code sample with a link that opens the cloud console and automatically clones a Git repository into Cloud Shell? 

MARK: That was a lot of alliteration. I just realized that. 

MELANIE: I know. 

[LAUGHTER] 

Yeah, not a problem at all there. Anyway, so let's go ahead and start out with our cool things of the week. And I want to start out by giving a shout out to Sara Robinson, one of our colleagues, who posted up a great post last week. And she specifically talks about classifying congressional bills with machine learning. You know, she's always looking for good data sets, and she found this open source data set with 400,000 congressional bills. 

MARK: Oh, wow. 

MELANIE: And it had, like, 20 plus data points for each bill. So she worked with that on doing classifications. And some of the data points she lists. She also lists her process for training an AutoML natural language model. So she used that as her tool. And she talked about how she evaluated it, got predictions from it, and how you can use it and find the stuff that she put together and play around with it. Yeah, so she gives you all the great information you need, and you can look this up and play around with the code later if you'd like. So check it out. 

MARK: So we actually mentioned this during the podcast, but it's the third installment of the "Serverless From the Ground Up" series by Martin Omander, talking about how to integrate Google Cloud with G Suite. And this time, they actually are integrating Cloud Firestore into the mix with some Cloud Functions and Pub/Sub, with the Spreadsheet and all the other good things to kind of expand on the set of things that they were building previously to manage this document system. So well worth a read. And we also talk about it in the interview, as well. So it's definitely a cool thing. 

MELANIE: Agreed. Another cool thing of the week is we're going to include a link to this blog post on how 20th Century Fox is using machine learning to predict a movie audience. So this is very applicable for anybody who's actually trying to understand their core audience. And they specifically talk about the details on how they built out their data pipeline and established this model that helps them understand and predict what audiences will come out. And they explain how they did their validation of this model, as well, and just how valuable it's been for their data teams and their marketing teams to have greater insight to the audience. 

MARK: Excellent. 

MELANIE: Yeah. 

MARK: Cool. 

MELANIE: Look into that. 

MARK: Nice. Also relevant for today, there's a new and improved G Suite developer hub. So if you're looking to build integrations with G Suite, either with other G Suite products, or with Cloud, or all sorts of other fun stuff, there is a new hub that you can get access to, which allows you to get started quickly, you can view and manage your triggers, you can view and manage your App Maker apps, see executions in real time. And also, it's real pretty. 

MELANIE: And then we want to give a shout out for last week's Google Doodle, which included this really adorable game with ghosts. 

MARK: Yes. 

MELANIE: Mark was so excited about this. 

MARK: It was the very first multiplayer Google Doodle. 

MELANIE: Nice. 

MARK: Which was super cool. And it ran on top of Google Cloud. I think it ran really, really well. And also, integrated a good friend of mine, Joseph Holley's, open source project called Open Match for doing matchmaking. 

MELANIE: If you still want to play around with that, we've got the link, and you can check it out. 

MARK: Awesome. Before we run away to our interview, congratulations to Melanie. She has put up with me for a whole year at this point. 

MELANIE: Lots of therapy. 

MARK: And she hasn't left yet. So-- 

MELANIE: Lots and lots of therapy. 

MARK: --thank you. Thank you very much for not leaving. 

MELANIE: It's been fun. It's been a good year. We've done a lot this year. 

MARK: We've done a lot. 

MELANIE: And we will talk more about that at the end of the year, too. 

MARK: We will. 

MELANIE: OK, so Mark, I think it's time for us to go talk with Alicia and with Joanna. 

MARK: Let's do it. 

Well, I'm very excited today to have two delightful people joining us. We have Joanna Smith, developer advocate for G Suite, as well as Alicia Williams, teammate of ours and Cloud advocate, as well. How are you both doing? 

JOANNA: Good. I can't speak for Alicia, but I'm great. 

ALICIA: Doing great today. 

MARK: Excellent. Thank you so much for coming and hanging out with us today. We're going to talk to you all about G Suite and all the things involved in that. Before we do that, do you want to tell us a little bit about who you are and what you're doing? Alicia, you're sitting next to me. Why don't you go ahead? 

ALICIA: Yeah, well I'm an advocate really focused on data analysis, discovering how they can use both G Suite and GCP together to solve their problems. 

MARK: Joanna? 

JOANNA: So I'm the one who gets to be responsible for all of the online content for both G Suite developers and also the Power users, which is kind of like a new thing we're doing. Alicia and I are trying to make sure that anybody can build a custom or productive solution to make their day better, and not have to do that annoying thing that you have to do every Tuesday that, like, ruins your day for like three hours in a spreadsheet. 

MARK: What is the annoying thing that happens every Tuesday? 

JOANNA: Well, I don't know. Maybe for you it's like making all the links so that all the people who are remote, like me, and can't be in San Francisco to make a podcast, and you keep forgetting to make them links, and wouldn't it be great if you could just like have your spreadsheet of your calendar, and be like, Create Link for Remote Podcasting, and it would do it for you? 

MELANIE: Helping automate and simplify things for people. 

JOANNA: Simplify your day so you can get your job done. 

MELANIE: Well, if there's anyone out there who doesn't know, what is G Suite? 

ALICIA: Well, G Suite-- do you use Gmail, Melanie? 

MELANIE: Maybe. 

[LAUGHTER] 

MARK: I use Inbox. I use Inbox. I should be clear about that. 

MELANIE: Maybe that's all I use because Inbox might be going somewhere. 

ALICIA: You might be using it right now. No, so those apps actually-- 

MELANIE: So true. 

ALICIA: --that collection of apps is called G Suite. So thinking Gmail, also Sheets, Docs, Calendar. 

JOANNA: But it's not just like the Docs. The real thing that we like to stress to everybody is that G Suite is collaborative. So your whole suite of office and productivity applications are meant to be easy to use, but also easy for everyone else to use, so you don't have to download a file, attach it to an email, send it over to somebody so they can download it and then open it and then edit it and send it back to you, and you hope that you understand what's going on. Like, we're trying to make working easier through collaboration. And that's why it's so much fun for people like me all by myself in a remote office, not getting to hang out in the podcasting room. But also-- 

MELANIE: I feel like we're going to be talking about being remote a lot throughout this, yes. 

JOANNA: I'm from Texas, and I like people to know it. I'm very proud of my home. Really, it's collaboration on G Suite. And then the other thing that is my favorite about G Suite is how extensible it is. Like, they designed this product to be customizable so that anybody could build anything with it, partly because we designed it for ourselves first, and then we started selling it because people liked it, but also because it's just nice to be able to take something and tweak it and add something to it so that you can get your day to be a better day. 

MELANIE: Agreed. And so really, I mean, we're talking about all the products that really fall into Google Drive, what you're able to do, the Gmail and all these things, which people don't probably think about all that much anymore because they're using them, and they're just sort of part of their life. 

ALICIA: It's just expected. 

MELANIE: Right. 

ALICIA: You don't think about it. 

MELANIE: But it has to actually be supported and built, and established. 

ALICIA: And it does a lot more than you think it does. 

MARK: What else does it do that you don't know it doesn't think it does? 

ALICIA: I think that's what today's podcast is about. 

MELANIE: I think that is, yes. Well, OK, what are some of the favorite things you have about G Suite? What are some of the favorite products or favorite functionality? Why do you like G Suite? 

ALICIA: Well, I think everybody knows my favorite product is Sheets. So I worked many years as a program manager, and I kind of got to the point where I could do anything in a Google Sheet. So much to the dismay of my team-- 

MARK: Anything? 

ALICIA: --anything, Mark. I could track anything, you know, mail merge, send emails when things are overdue, a lot of different things you can do from a Sheet, even though it's not necessarily built to be-- I think Sheets is one of those products that was built to do one thing, and now it does thousands of things, because it is so flexible. So that's my favorite product. 

JOANNA: I've got to say, I'm voting for Gmail here. Not even Inbox, like just old-school classic Gmail, because one, I don't know if you remember, but way back when when we all signed up for Gmail-- a long time ago-- it was the first email that was ever threaded. So like, your reply to an email showed up next to the email that you originally got. And I remember that just changing the way that I viewed speaking to people on the internet, I guess. 

But the other thing is that Gmail has grown, and it's this like powerhouse of great features to help you keep your life in order. And the way that I can prove that is we all can't deny that Google runs on email, everything from our bug systems, our CLs, our code submissions, are, you know, is the build broken, this is all handled through email. And that's why we had to create our own email, like, service, because no others could keep up. And that's why it's been such a successful email provider for so many people, and also for so many companies. So it's my favorite because it's an oldie but a goodie. 

MARK: That sounds good. So Alicia, you were talking about how you could do, like, anything in Sheets. How did you do anything in Sheets? Like, you were talking about sending emails from Sheets. Like, there's no spreadsheet function for sending email, like, in a cell, is there? Or how does that work? 

ALICIA: Well, that's more of a recent addition to the types of things that I can do, but that's through Apps Script. So Apps Script is a JavaScript-based language I've been learning. So I spent many years just using the UI, doing everything you can do in Sheets and Docs and Gmail with the UI. And then I started discovering that behind a lot of the spreadsheets and docs at work were these scripts that other people had written. 

I started kind of dabbling in those, editing them when I needed to, and then finally decided it was time to learn to write my own to do things that no one else had written to do. Yeah, it's something that you can write standalone scripts that call multiple docs and spreadsheets together to get something done, or you can have, just behind one spreadsheet you can use Apps Script to automate many of the things that happen in your spreadsheet, or to call out to other services to bring those into your spreadsheet, as well. 

MELANIE: Is there like a public spot for people to share Apps Scripts that they like to write? 

JOANNA: So not as much [INAUDIBLE] like to write. We have a pretty active community across G Plus, also across Stack Overflow and GitHub, but there's also a marketplace where a lot of companies will create applications that they sell to other companies to make days better. And then you can also put them up for free, as well. 

Like, one of my favorite isn't actually available. I have to be clear about this, it was just written by someone on our team and then, like, shared internally. But you can make it yourself, as well, is we have a calendar, and it's a team vacation calendar. And the way we manage it is not by everyone putting their vacation on a second calendar that is hard to remember and you don't really want to think about, but we have an Apps Script that runs every night at midnight, and looks at everyone's calendar, and then copies any event called Out of Office or Vacation to the team vacation calendar programmatically and easily. 

MARK: How do I add those? Are those the add-ons? Is that a thing? 

JOANNA: It's actually different. It's not different, but it is different, and you're just going to have to trust me on this as I explain it. So anybody can add an Apps Script anywhere, pretty much. They're great for mainly the editors. So Docs, Sheets, Slides, Forms, but also in Drive themselves. And all App Scripts are ran from Drive, saved in Drive. And the editor you can access by going to script.google.com, but you can also create a script inside of a specific sheet by clicking on Tools and Script Editor in there. And that script will then be bound to that sheet. So when you share the sheet, the script goes with it to other people, as well. That has its own advantages versus standalone app scripts. 

And then add-ons are created with Apps Script. They're powered by Apps Script. But then add-ons can span over to Gmail, to Calendar. They're a little more robust. And then one of the great things about add-ons is you write it all up once, and then Google does the hard work of making it work for Gmail on web and Gmail on mobile. 

MARK: So Alicia, you were talking about learning, like, JavaScript and Apps Script, and playing with this stuff a lot more. How have you found the editor experience? Because, as Joanna touched on that little bit, like, how is that integrated ID type thing-- how does that work? 

ALICIA: So for me, it's basically the difference between even starting to look at it. I didn't want to have to, you know, install any packages on my computer, or decide on, you know, an IDE. I didn't even know what that stood for at the time. So having the editor in the browser is really what made it so accessible to me. 

And you talked a little bit about how to find kind of where people share these things. And we do have a lot of samples in our documentation and on GitHub, but you'll find that people share them all over the place. And just by using search, I tend to find-- I like to start out with something. So if I have nothing to start out from, I'll just take a random script and put it in there, and then just start editing away, because I think it's really helpful to have a place to start. 

And so there is a lot out there that you can get- you know, maybe it's only 5% of the way there, but it gives you a place to start. And I find those actually on Stack Overflow, as well. There's Apps Script community there. And then we have a lot of actually Google Developer experts that blog about it. And it's really helped me. 

I had to, for a demo, create a way to automatically submit to a Google Form as part of the demo, which is not something you would typically do. Typically, you would submit to the Form. But I wanted to submit a lot of Form responses all at once in front of an audience. And I was actually able, by using Search, to find somebody that had done something similar. And it was an area where just going to our documentation, because it wasn't a common use case, I was getting nowhere. So I was pretty excited and surprised to find it, and I was able to then build that functionality into my demo. So. 

MELANIE: That's great. You and I are definitely the same in terms of working with a blank page, just grabbing something, something to start out with. I definitely respect and understand that. I know there are APIs. Can you tell us a little bit about the APIs? 

ALICIA: Oh, the APIs. The APIs are actually something I haven't really delved into yet, but I think Joanna has. 

JOANNA: I can touch on this briefly. Basically, we have so many APIs for so many services. And as you would expect, we've got an API for Sheets. So that can basically provide all the functionality that Apps Script provides, as well. And these are all REST APIs. And we offer them through client libraries in so many languages, trying to make sure we can support any kind of use case you have as a developer. 

But the other cool thing about the APIs is we have a lot that are specifically really meant to be used by a domain administrator, or somebody who's trying to, like, manage their company, and uses G Suite, the enterprise side of it. You know, let's say you're hiring people. So you can put them in and out of your system with the People and the Contacts API. There's an admin SDK that actually lets you do all kinds of controls for your organization, but programmatically. So you don't have to do everything by, like, going into Chrome and, like, clicking and then adding and then typing. It's like, wouldn't it be great if you just had a list somewhere and it all uploaded for you? And so those are really, really cool. 

MARK: That sounds like a really great chance to discuss, like, the differences between G Suite as, like, the free consumer product and, like, G Suite for business. Like, what's the differences there? 

JOANNA: Well, so at the core, they're not different. Like, Gmail at Google, Gmail for somebody who buys G Suite, and Gmail for any user out there, they're the same Gmail, and all the features of Gmail are there all along. But there are some things that are less available. We were talking about this earlier today anyway. 

ALICIA: Yeah, I mean we both use Google, Gmail at work, and then we use personal Gmail accounts. And yeah, for the most part, I don't notice a huge difference. But I'm also not a domain admin. And I think some of the things Joanna mentioned are one of the biggest differences when you're running a company. You need those features to be able to, you know, manage email retention or manage Drive files across the company that you don't need to as a consumer. There's also some other products that are for our enterprise customers that we're really trying to put out there first with the enterprise. 

JOANNA: Yeah, like App Maker is a really good example. 

ALICIA: Yeah. It's not available to a consumer user of Gmail, but it is available to many of our enterprise customers. 

MARK: What's App Maker? 

JOANNA: Think of you had, like, a UI visual way to write an Apps Script, where you could, like, drag components and connect them, and the code would be generated behind the scenes for you. And that's what App Maker is. So it's a really great tool for a company that doesn't want to spend money hiring custom engineers to build solutions for them and doesn't have a strong engineering department, but has people who are smart and clever and can figure it out. So that's, like, a low code alternative to building these kinds of solutions for yourself. 

ALICIA: It's also a great way for people like me, maybe, that would have a Sheet and a Form as an app, and my Sheet is my database, to kind of scale beyond that. So App Maker, you can have web forms, and you have a database on the back end, but it's a Cloud SQL database. So it's kind of a different, you know, a V2 maybe of some sort of app I start to build just using Google Forms and Google Sheets. 

MELANIE: Nice. Well, so we've talked a little bit about the APIs, we've talked about the app scripts. Can you use some of these extensibility features to integrate between G Suite and GCP? 

ALICIA: Yeah. 

JOANNA: So I say yes, and I also say please, please do. Because the way I see it. G Suite is actually how people get their job done. And if you can make anyone's job easier, then the whole company becomes a lot more productive. And that's, like, my schtick. And that's what I'm out there and I'm, like, tweeting and I'm working on. 

MELANIE: And you're sticking to it. 

JOANNA: Yeah. But the other thing is, like, let's say several teams across your company all need to work with the data inside of one of your databases through GCP. You don't want to train them on how to interact with your database, especially if they don't have a lot of experience. It's too many teams. That's too much access, right? 

So you can imagine using a Sheet as a front end, where data can be pulled down based upon certain parameters or, like, what each team needs, and then it can be reuploaded from the Sheet, as well. But the Sheet, the collaborative and the protective features that are built in by default, becomes the interface for a lot of other teams to work with data you're responsible for. 

ALICIA: Yeah. And I was really excited at Next this year, one of my teammates, Gabe, kind of sent out an email saying, hey, I have this crazy idea, I want to build an end-to-end IoT app where we build a device on stage and we go through all the process to actually have a UI, a front end to show people what's happening with those devices. 

And he wanted to have both an Angular front end and a Sheets front end. And I was-- you know, because I love Sheets, I was intrigued. I said, oh, Sheets? I'm like the one person on this team thread that loves Sheets. So I started talking to him about it, and we ended up working together, and I was part of that talk. 

But what they did was build a device using a Raspberry Pi. So it was taking in heart rate and temperature information. And then they had this fancy Angular front end that was able to show all the different devices in real time, what was happening. But we also built this Sheets front end, and it was a place that anybody on the team could have pulled, like, time slice data from our database, from our Firestore database, pull it in, be able to analyze it, how your [INAUDIBLE] Sheets collaborate with others on that data, as well. 

But then it had a second function, which was to configure the devices. So Gabe had said, like, oh, you know, like, you can configure the devices in IoT Core, but I'm imagining, you know, if you were going to give a bunch of devices out to people at a company, you might have some staff do that that weren't working in IoT Core. So this was a way that those staff could actually configure the devices using Cloud Function. So a cell in the Sheet could be updated that could trigger a Cloud Function to be called, and then that would update IoT Core with new configuration. So. 

MELANIE: That's awesome. 

ALICIA: Yeah, and it was actually really easy to do. So I think I agreed to do it before I knew how hard it might be, and then I got-- 

MARK: Don't we all. 

ALICIA: --really lucky-- yes. I got really lucky because there's actually already a library that I found that connects Firestore to Apps Script. So this library, using a service account I could authenticate to Firestore, I could edit my Firestore database all with Apps Script. And so in the end, I had a few features in my front end so I could have-- the user could put in a certain time slice, and it would pull that device measurement data back and show a graph in my Sheet. 

I also had a way to update the device metadata in Firestore. So say, like, the name for the device. And then also, the device configuration. So the configuration is actually stored on the device, not just in Firestore. And this needs to be done through IoT Core. And so this is the part where I could call a Cloud Function just by, you know, I can have a trigger on my spreadsheet so, anytime someone edits this cell, I can check if that cell's edited, and then I can call this HTTP and trigger. 

So it was actually a pretty cool front end, and it exposed-- a lot of people in the room who had come just to hear about IoT, they got to hear a little bit about Sheets, too, and a few people commented on it. So I was excited to see that people saw the value in putting Sheets as being a layer in between, like, technical teams and, like, other teams at the company. 

MARK: I was actually going to ask that. It sounds like this could be a really, really probably handy, or possibly quick way of getting technical teams to talk to, like, their business users, and vice versa, and get that communication going. Is that something you're actively kind of looking to do? 

JOANNA: Not precisely. Like, I'm not here to restructure how Google gets its job done. But one thing that's really important to me is making it easier, like I said, this whole idea of increasing productivity with clever and useful solutions. And so if I can explain something to someone, or if I can go to your company, we can give a presentation for the whole day and, like, walk you through it, and show you how simple tools like this make it easier for knowledge to be exchanged. 

That's the thing I think is a huge value, just because being able to communicate with other teams who have a slightly different lingo is usually a barrier, right? Like, trying to see what you each need, or what you each call it. But then if you have an interface like this, where it's like, OK, the engineering side kind of set it up, and then the sales side can kind of ask for what they need, you actually learn a lot more about how each person works, which can help you make decisions for future growth or future databases or new projects or, you know, where to scale. 

ALICIA: Yeah. And like the immediate gratification aspect, teams, like IT teams or database admin teams, that are used to having to take in requests and constantly pull data in for, like, a sales team or business analysis team, you can build this tool that can still pull the data from a tool that they're used to. So they can ask Sheets for a time slice of data from a Firestore database. So it's a way to maybe reduce some of your own workload for repeated requests. 

MELANIE: That's cool. 

MARK: I can't remember who was talking about it with, like, a BigQuery connector, as well-- 

JOANNA: Oh, yeah. 

MARK: --so if you want to be able to get big data out, as well. 

JOANNA: So the BigQuery data connector to Sheets, several really cool things I want to make sure I say about this. One, Google recognizes that these kinds of connections are popular, and also not everyone has time to build their own. So there's an effort and a focus internally to make sure we provide some services that would be really, really advantageous for a large number of customers. 

That being said, the BigQuery data connector is an example of one that is, like, one of the differences between consumer and enterprise things, because it would be part of your G Suite package. But basically, consider it as, like, we did the work already for that exact exchange, so everything can be done completely from the UI, meaning nobody has to be trained up on it, nobody has to tweak it, no one in IT is stuck being the one person who knows how to maintain the tool from Sheets. 

You can do a couple of clicks, and you can be pulling data out of your BigQuery database, even though you don't really know how to explain to anybody what a database is. And that's the kind of ease and simplicity that we're going for because, without that, you spin up your own, and you have to either understand the BigQuery API or you have to understand advanced services and app scripts, and then that's just a lot. 

ALICIA: And I think-- I had used this before because we have our data at Google in BigQuery. And as a program manager, I was constantly trying to get Google Analytics data or that sort of thing to try to figure out effectiveness of our programs. And so I would use the button in BigQuery that's Export to Google Sheets. So you can, in the BigQuery UI, you can run a query. You see your results, and you can export that to Google Sheets, which I did all the time because I love analyzing data in a Sheet. 

But now, this basically takes like a step out of the process. I no longer have to familiarize myself with BigQuery UI. I don't have to export it to a Sheet. I can actually just, from my Sheet, connect to BigQuery, pull my results. My query results are in a tab that has a refresh button, so anytime I want to refresh that data, I can refresh it. And then I can, like, connect it to other data in that same spreadsheet, or across other spreadsheets. And so it really makes it possible to access BigQuery as somebody that's a Sheets user. 

MELANIE: Nice. Are there other Cloud integrations out there that you enjoy seeing, or you've seen that you're excited about? 

ALICIA: Not necessarily an integration, but an opportunity that I saw this year that I actually talked about, I blogged about, was using our machine learning APIs from a Google Sheet. So with Apps Script, I can call any REST API. And so, seeing that I had certain types of data in my Sheet that were hard to analyze just using Formula, I was able to use our Natural Language API from a Sheet using Apps Script to analyze text data in that Sheet. 

So a common use case is people use Google Forms to collect feedback. You end up with free Form feedback, perhaps, in a Google Sheet, which is backing that Form. And then normally, you would just manually read all of those reviews, get a sense of the data. You might get super fancy and make a word cloud, but that's about it. 

So that's not super useful. This way, I was able to take that feedback, send it over to our Natural Language API, have it extract out what people were saying, what they were talking about, and with what type of sentiment, so using our Entity Sentiment method of the Natural Language API, copy that data back into my spreadsheet, and then I could visualize the data in Google Charts, or even out in Data Studio. So it's not necessarily an integration, but it's a way to-- 

JOANNA: How is that not an integration, Alicia? Like, you integrated with the two to build this really cool demo. And I also like how you're like, I'm not excited about it. That's one of my favorite demos this year. I talk about that demo all the time. I'm excited about her demo. 

ALICIA: I plan to continue talking about that demo for as long as I can. 

[INTERPOSING VOICES] 

JOANNA: --I just did this thing with the ML APIs from Sheets, and it kind of counts. It's like, no, this is one of the coolest things I can think about. And how many people want that kind of analysis that goes beyond, like, a chart, right? 

MARK: Yeah, I do like some internal Google events with, like, a lot of people, and we get a lot of free form text for response. And like, being able to actually dig through that in an automatic way is fantastic. 

ALICIA: Well, the code's available on GitHub, Mark. Get started. 

MARK: I'm going to check it out. 

MELANIE: We'll have to include that link. What about other people that you've seen, the work that they've done? 

JOANNA: It's not exactly Cloud, but you could see how it could have been. One of the things that amuses me to no end is-- 

MELANIE: I love how you both are couching it. Well, it's not exactly, but it's close. 

ALICIA: Well, if we're going to talk Cloud, officially G Suite and GCP are both part-- 

JOANNA: --yeah, oh, that's true-- 

MELANIE: I was about to say, yeah. 

JOANNA: --that's true, I'm sorry. 

[INTERPOSING VOICES] 

My bad. One of my favorite co-workers, he will just write a script for anything. Like, if something bothers him twice, he's scripting up a solution to it that weekend. And so he has this all automated Apps Script that he has that, anytime he gets an email from his child's daycare-- because they email pictures, but the pictures are only, like, say for 24 hours or whatever-- so anytime he gets an email for his child daycare, it triggers the script, it takes the photo, it copies it and saves it locally into his drive, and then he has this album that's just like all of the photos of his kids in daycare from, like, daily update emails that were just meant to be like, hey, guess what, like they didn't choke on a Cheeto or whatever. I don't know what kids do. 

Then, like, you could see a natural extension of that is now you have years of school email updates. Like, how could you use some of our, like, visual photo recognition or image recognition kind of APIs, like, to make this something more useful, or to collate it, or to grab the best ones for, like, the holiday Christmas card. But like, this is just like one guy who's like, why do these emails keep deleting? And he just fixes it. And it didn't take him long at all. And that's the kind of thing I love about Apps Script, is just whatever idea you have, I bet you could probably get it going in, like, a hacky kind of way in about three hours. 

ALICIA: And I think another example that really I think brings into kind of the new exciting stuff about GCP and Cloud, that I haven't built, but one of my co-workers sent me an example of it, was with the Gmail API you can access all of your different Gmail messages, what you've labeled them. So this was about kind of training your own machine learning model-- 

MARK: Oh my gosh-- 

ALICIA: --to pre-label-- 

MARK: I want that. 

ALICIA: --all of your emails. So you can use your past email labels-- 

MARK: Yeah. 

ALICIA: --you can train that up. And so then anytime you get a new email, it can pre-label it for you. So I haven't built it, but it seems-- 

JOANNA: OK, I think we have your next hackathon idea. 

ALICIA: --possible, especially with the Gmail API. 

MELANIE: Yeah, I was going to say, why haven't you built this yes? 

ALICIA: Maybe even AutoML I feel like might be. So. 

JOANNA: Well, so it's funny-- 

MELANIE: All the buzzwords. 

JOANNA: --because this is a great example. Like, a pro tip would be use filters to apply labels based upon, like, the kind of thing coming in, but filters can take so long to set up if you haven't been using them. So then it's like, hey, Gmail make my filters for me. I'm going to write that down, Alicia. You're doing that at our next hackathon. 

MARK: That's fantastic. 

JOANNA: And by you, I mean we, because you know I'm going to help. 

ALICIA: This is why I don't come to meetings. 

MARK: Awesome. 

[LAUGHTER] 

ALICIA: More action items. 

MELANIE: The truth comes out. 

MARK: The truth comes out, exactly. Well, thank you so much to both you for coming. Before we wrap up, is there anything else you want to mention or plug? Are you going to be at any events or anything like that that you want to make sure that our listeners hear from you about? 

ALICIA: I'm planning on going to a few DevFest events. So I'm hoping-- I think a lot of the Google Developer Group community talks a lot about all of our different Google products, but I want to make sure G Suite is represented well. So I'll be speaking at a few of those. 

JOANNA: Well, I'm very proud of you. I intend to plant my feet in Texas and not leave it, so don't look for me at conferences. But I do-- 

ALICIA: I'll do twice. 

JOANNA: --manage a lot of our-- 

ALICIA: I'll do twice as many. 

JOANNA: --online content, and there is one other point I wanted to make sure I kind of touched on as we talk about all these integrations. I was helping edit a blog post for the GCP Friday series, and I had noticed in this really, really awesome demo that we had been putting together that, if you're working on an Apps Script, if you're working on something that's going to make something easier for your employees or for the people around you or that you're going to try to sell, you need to make sure it's actually easier, because if it's hard to get it going, no one's going to use it, right? 

And so this whole demo was this elaborate, awesome thing, and we were really proud of it. And it's a three-part blog series that-- I think the third part comes out this week. But it ended with, in order to run the whole thing, you copy a URL into the bar, and you hit the URL endpoint to trigger the function. And I was like, this is not simpler. This is, like, one more thing to remember, even though is does all this work for you. 

And so I wrapped that for Martin inside of a custom menu option. So now, in the Sheet for the demo, the fake people who totally exist or whatever, they can click the custom menu option, and then to hit the endpoint as easily as they can File, Print. And so when you're designing things and you're trying-- 

MARK: Oh, is this the series with Martin Omander? 

JOANNA: --yeah, this is with Martin, yeah. I was working with him on this. 

MARK: Yeah, we've been mentioning it. Sorry, please continue. 

JOANNA: But yeah, so if you are designing something to make someone's day easier, think about how it will actually be used. Try to think of it from the no experience, no context perspective. Because if somebody knows from the Sheet I can copy the URL saved in that one cell and go to it, versus I can do the equivalent of a File, Print, that's a much more successful integration. And so just always go that one step further. Like, how do I make this as simple as possible to get it going. And pro tip, it's usually make a custom menu option. 

ALICIA: Yeah. I always offer for my teammates, I'm like, if you need UX, I can be your sample user. 

JOANNA: It sounds like an offer for the whole world here. So just tweet her. 

ALICIA: Oh, yes. If you can find me. I have a very common name. 

MARK: We have it a link to your-- 

ALICIA: Uh-oh. 

MARK: --Twitter account-- 

MELANIE: Yeah, I know. 

MARK: --on the website. 

MELANIE: So everyone will be tweeting at you now. Well, great. Thank you, again, for both of you coming onto the podcast. 

JOANNA: Yeah, thanks for including me. 

ALICIA: Thanks for having us. 

MARK: Thanks again to Alicia and Joanna. I really liked this episode. I think it's a really good-- I'm going to say the word synergy, because it's bringing together business users and developers, and it feels like that's actually a fit. 

MELANIE: It does feel like it's a fit. No, it's good to talk about, especially G Suite. It's something we use, and it's so accessible, and we don't think about how much effort that really goes into building out these products and making them seamless, in a lot of ways. 

MARK: Yeah, and now I want to write a whole bunch of app script to automate a bunch of things. 

MELANIE: You should write a lot of app script. 

[TYPING] 

Good job. 

MARK: [INAUDIBLE]. 

MELANIE: All right, Mark, the question of the week. What if I want to write a code sample with a link that opens the Cloud console and automatically clones a Git repository into Cloud Shell? 

MARK: Yeah. So I'm actually really excited about this. I think it's really cool. I think, you know, the classic example is maybe you're writing a code lab, or you have an open source project that you want someone to just get started with quickly, and you want it to be able to open up an environment that has the G Cloud tools and all the other things that come available with Cloud Shell, and you just want it to be quick and easy. 

There is actually a link format that is described in the link that we'll put in here called Opening Cloud Shell is the feature, where you can set your own parameters for, like, the GitHub repo, what Git branch, working directory, whether you want it to be opened in Web Editor, as well. You can also send instructions to his Cloud Shell-- print values, Cloud Shell tutorial markdown file. Basically, if you want to build a really quick start, like hey, get this thing going, you can basically just write this link. And it's kind of awesome. 

MELANIE: That's great. 

MARK: It's just a link. It's basically the link to Cloud Console, Cloud Shell Editor, with some [INAUDIBLE] parameters. And boom, you're good to go. 

MELANIE: Good. 

MARK: Yeah. 

MELANIE: Mark, my understanding is you'll be at KubeCon in December, is that right? 

MARK: That is indeed correct. I'll be at KubeCon talking about [INAUDIBLE]. Hopefully I said that vaguely correctly. So I'm excited about that. First time going. 

MELANIE: And then I'll be at [INAUDIBLE] at the end of November. So that's where you'll find us next, other than in San Francisco or Australia. 

MARK: Australia. I'll be going home for a bit. 

MELANIE: Going for a break. All right, Mark, I think that gives us a nice regular wrap for the week. 

MARK: Sounds good. Well, Melanie, thank you for joining me for yet another week in this podcast. 

MELANIE: Thank you, Mark. 

MARK: And thank you all for listening. And we'll see you all next week. 

[MUSIC PLAYING]