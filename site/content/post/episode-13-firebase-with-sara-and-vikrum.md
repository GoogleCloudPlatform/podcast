+++
audioDuration = "00:30:59"
audioFile = "Google.Cloud.Platform.Podcast.Episode.13.mp3"
audioSize = 44629933 
categories = ["Firebase"]
date = "2016-02-17T01:07:49Z"
description = "In the thirteenth episode of this podcast, your hosts Francesc and Mark interview Sara Robinson and Vikrum Nijjar about Firebase. Sara is now a Developer Advocate for Google Cloud Platform but was part of Firebase until recently, and Vikrum - Firebase employee #1 - works as a Site Reliance Engineer for Firebase."
draft = false
episodeNumber = 13
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Firebase with Sara Robinson and Vikrum Nijjar"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/QawegRJhnkw"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/469if6/episode_13_firebase_with_sara_robinson_and_vikrum/"
+++

In the thirteenth episode of this podcast, your hosts
[Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic) interview
[Sara Robinson](https://twitter.com/SRobTweets) and [Vikrum Nijjar](https://twitter.com/Vikrum5000).
Sara is now a Developer Advocate for Google Cloud Platform but was part of Firebase until recently,
and Vikrum - Firebase employee #1 - works as a Site Reliance Engineer (SRE) for Firebase.
Together they discuss the origins, features, and future of Firebase.
<!--more-->

##### About Sara

Sara is a Developer Advocate on Google's Cloud Platform team, where she helps with
developer relations through online content, outreach and events. She has a
bachelor’s degree in Business and International Studies from Brandeis University.
When she's not programming, she can be found running, listening to country music,
or finding the best ice cream in SF.

Follow Sara on Twitter [@SRobTweets](https://twitter.com/SRobTweets).

##### About Vikrum

Vikrum is a Bay Area native and SWE-SRE on the Firebase team. He started out with
startups in the 90s with Speedera and has been with Firebase as employee #1 as
they were going through YCombinator during the summer of 2011. He has a degree in
CS from UC San Diego and enjoys a deep conspiracy with his boba tea.

Follow Vikrum on Twitter at [@Vikrum5000](https://twitter.com/@Vikrum5000).

##### Cool thing of the week

- CP100A: Google Cloud Platform Foundations [courses](https://cloud.google.com/training/courses).
   
##### Interview

- [Firebase](https://firebase.com).
- [Firebase Documentation](https://www.firebase.com/docs/).
- Warby Parker Pneumatic Tubes [blog](https://blog.warbyparker.com/pneumatic-tubes-lexington-avenue-store/).
- [Roll 20](https://roll20.net) and their [case study](https://www.firebase.com/customers/roll20-case-study.html).
- [Netty.io](http://netty.io/).
- Firebase plugin for Unity [blog](https://www.firebase.com/blog/2015-12-18-firebase-unity.html) and [github](https://github.com/firebase/Firebase-Unity).
- Firebase pricing [doc](https://www.firebase.com/pricing.html).
- Parse moving on [blog](http://blog.parse.com/announcements/moving-on/).
- Use Firebase and Google App Engine in an Android App [tutorial](https://cloud.google.com/solutions/mobile/firebase-app-engine-android-studio).
- Firebase - Almost 1.5 years with Google [blog](https://www.firebase.com/blog/2016-02-08-firebase-google.html).

##### Question of the week

- Google Cloud Console on [Android](https://play.google.com/store/apps/details?id=com.google.android.apps.cloudconsole&hl=en) and [iOS](https://itunes.apple.com/us/app/google-cloud-console/id1005120814?mt=8).

{{< transcript "FRANCESC: Hi, and welcome to episode number 13 of the weekly Google Cloud Platform podcast. I'm Francesc Campoy, and I'm joined today by my colleague, Mark Mandel. Hey, Mark." >}}
MARK: Hey, Francesc. How you doing today?
FRANCESC: Pretty good, very excited about this amazing episode. We're gonna be talking about Firebase finally.
MARK: Yeah, it's gonna be really good, great way to come back from my vacation, talk about a wonderful topic.
FRANCESC: Exactly. Well, for you--yeah, you had vacation, yeah.
MARK: Yeah.
FRANCESC: But before that, we have a cool thing of the week, and it's actually related to one of the things that we talked about last episode, which is about training.
MARK: Nice.
FRANCESC: So it's a--we have a bunch of trainings coming on, and they're gonna be happening very soon, actually, so today's Wednesday, 17th, so it's actually tomorrow. Some of them are tomorrow.
MARK: Better get on that quickly.
FRANCESC: Yeah, and they're really cool, so you can go to cloud.google.com/training, and you'll find a bunch of courses. Some of them are in New York in the Google office. Some of them are in Sunnyvale next to Mountain View.
MARK: So these are actually, like, classes. You can actually go to them.
FRANCESC: Yeah.
MARK: There's a trainer, all that sort of stuff.
FRANCESC: Yeah, and they're, like, one whole day of going around Google Cloud Platform, so it's actually CP100, which is the Google Cloud Platform fundamentals.
MARK: Nice, nice. If you're looking to get started with Google Cloud Platform, this could be a really great way to get up to speed quickly.
FRANCESC: I know that I've attended, as a student, these classes, and I thought it was amazing. You get to play with all the little pieces of the Google Cloud Platform. You don't go too deep into those, but you just get an idea of what is the power, what can you do with it, and so on.
MARK: Yeah, so if you're looking to build something, you kind of go away, and you're like, "Oh, now I know a little bit about everything, so I can sort of build together a picture of exactly how I want to build something."
FRANCESC: Yeah, and even cooler than that, so not everybody lives in New York, or especially not everybody lives in Sunnyvale.
MARK: That's true.
FRANCESC: So we also have online classes, and they're online classes that are actually happening live, so you will be able to ask questions and so on.
MARK: Yup.
FRANCESC: So trying to bring the class experience to the--to people all around the world, and they're also happening February 18th and 19th, so just go there. You will have to register, but it's gonna be really cool. You're gonna have--basically go through the same concepts. It's also CP100A, so Google Cloud Platform fundamentals, but from the comfort--comfortable couch in your house if you want to.
MARK: Yeah, you could sit in your own bed. You could be in a couch.
FRANCESC: Yeah, I mean--
MARK: You could even do it in a Jacuzzi. Like, we don't judge.
FRANCESC: That's really fancy.
MARK: Yeah.
FRANCESC: That gives me the--I should try to do that next time.
MARK: Now, don't drop your laptop into the Jacuzzi. That would be bad.
FRANCESC: Yeah, good point.
MARK: Yeah.
FRANCESC: Okay, so as we said, we're gonna be interviewing two awesome people.
MARK: Yes, we are.
FRANCESC: Sara Robinson and--
MARK: Vikrum Nijjar.
FRANCESC: Vikrum Nijjar from--both from Firebase, Sara now working with us in our team.
MARK: Yup.
FRANCESC: And we're gonna be talking about Firebase, so let's go with that.
MARK: Let's do it. Today we are joined by two wonderful guests that are here today to talk to us about Firebase. We've been talking about it for a little while, but it's great to have two people to come talk to us about it directly. We have both Sara Robinson and Vikrum Nijjar. Thank you very much for joining us today.
SARA: Thanks for having us.
VIKRUM: Thanks for having us.
MARK: Now, I did manage to mess up your last names. I'm very well known for doing that.
VIKRUM: No, it was spot-on.
MARK: Spot-on? Great, great, great. All right, wonderful. So before we get stuck into things, do you want to give us a bit of background on yourselves so people know who you are? Sara, why don't we start with you?
SARA: Sure. My name is Sara Robinson. I'm currently a developer advocate on the Google Cloud Platform team with Mark and Francesc, and before that I was a developer advocate on the Firebase team with Vikrum.
VIKRUM: Cool. So Sarah and I have worked together for a few years now. I'm Vikrum. I'm on the SRE team at Firebase. So SRE in Google parlance is sort of like the DevOps, operations, engineering for uptime for Firebase the service.
FRANCESC: Cool. So we've been talking about Firebase many episodes.
MARK: Yeah.
FRANCESC: We talked on IOT, on Cloud Spin. Basically, every single episode we say, "Oh, there is Firebase. We should talk a little bit more about on that in detail at some point," and today's the day, so why don't you, Vikrum, tell me a little bit, what is Firebase?
VIKRUM: So Firebase's mission statement is to help developers build extraordinary experiences, so we, in a nutshell, provide a service that lets you spin up your app and get started with the least amount of work, and we make it easy for iOS, Android, and the web.
SARA: Yeah.
FRANCESC: So it's mostly for mobile?
SARA: It's web and mobile, so we've got three client libraries, a JavaScript client for the web and then iOS and Android clients for mobile, and then it's also a REST API.
FRANCESC: Cool, so what can you do with it?
SARA: So essentially, there's three core features that are part of Firebase. The first is the realtime database, which is also my favorite, so it's a NoSQL JSON database, and every piece of data in Firebase is referenced by a URL, so it makes it really easy to write data directly from the client, and the really cool thing is that all the updates happen in real time, so any client that's connected to a Firebase application will see changes to that data right as it happens. They don't have to refresh the page or pull to refresh on mobile, so there's a big wow factor there.
FRANCESC: Yeah, it's really nice. That's one of the things that I really like, and the cool thing for me is that you don't need to do it with one of the libraries. You can also use the REST API, so you can use it with Go, which is always nice.
SARA: Exactly.
VIKRUM: And then the second product that we have is static hosting, so this is essentially a website, but it gives you a bare domain, CDN, and SSL at the push of a button, so it's really magical in how easy it is to get set up.
SARA: Yeah, just one command, Firebase deploy, and then your app is live on its own firebase.com URL, which is pretty cool.
FRANCESC: That's very nice. So you've gone through with HTTPS directly.
SARA: Mm-hmm.
VIKRUM: Yeah.
FRANCESC: [inaudible].
SARA: Yeah, you don't have to worry about acquiring the cert.
VIKRUM: Right.
FRANCESC: Yeah, that's--
SARA: Through [inaudible].
FRANCESC: Yeah, that's really cool.
MARK: That is really cool.
SARA: And then the third feature is authentication, so if you've ever implemented OAuth, it's not a very fun procedure, but Firebase, luckily, takes care of all that for you, so we support a number of different providers, so you can authenticate users with Facebook, Twitter, GitHub, Google, or email password login for authentication or anonymous authentication, and you just need to, if you're using one of the third-party providers, just enter your API key and secret into your Firebase dashboard, and then you can start authenticating users directly from the client.
FRANCESC: Very cool. That actually makes writing applications much easier 'cause I know that when I'm writing an application, the worst part is when you're like, "Okay, now I need to add authentication 'cause I want to be safe," and yeah, it's always fun, the--
MARK: Yeah.
FRANCESC: The auth2 dance, and, like, the--yeah, no, I don't like it.
SARA: Yeah, with Firebase it's just one method call in JavaScript, auth with OAuth pop-up, and boom, you've got a user authentication in your app.
VIKRUM: Yeah, so the theme among, like, all of those three main, you know, offerings that we have is to try to move people as fast as possible for their app without having to worry about servers and, like, sort of getting wrapped around [inaudible] with getting those set up and provisioned and scaling them, and we try to handle all that for you.
FRANCESC: Very nice. So for a little bit of context, how old is Firebase? How many years has been in Firebase?
MARK: What's its history, yeah?
FRANCESC: Yeah, what's the history?
VIKRUM: So we've been at--so Google acquired Firebase in October 2014, and Firebase got its start during the summer of 2011 while James and Andrew, the co-founders, were going through Y Combinator, and it's a little-known fact--I don't know, I guess it is a large-known fact that--so the same batch that we went through, Meteor also went through that batch.
FRANCESC: Nice.
VIKRUM: Parse also went through the batch, and then we were also in that batch, so there was three sort of client backend as a service sort of offerings all through YC during the summer of 2011.
FRANCESC: Cool, and how did--how did the company evolve? Like, how did you start? Why did you start building this, and why do you have those three features? How did you decide what to add to Firebase?
VIKRUM: So they were actually going through YC with a completely different company.
MARK: That happens.
VIKRUM: Yeah, so it was a company called Involve, actually, that was a chat service, so this was sort of a business where you can add chat to your website without having to worry about servers.
FRANCESC: Okay.
VIKRUM: And the common drum beat that we got from our paying customers at that time was, "Well, can we add, like, game data on top of this chat blast? Can we add comments?" and so there was this recurring theme that people wanted to have realtime features without having to architect it or build it, and it was around that time that we decided to sort of generalize that offering into a realtime database, so we started out with just the database that summer and sort of focused just on that part of it. The hosting and authentication came a couple years later, but we just focused on the database at that time.
SARA: And one way that Firebase grew its user base really early on, I think, was talking directly to the developers that were using it from the start, so I know even before I joined you guys went to a ton of hackathons and would try to get feedback and see how people were using the API and then iterate on the product from there.
VIKRUM: Yeah, yeah, so we actually wrote no lines of code before we started doing feedback, so Andrew had mocked out documentation for a hypothetical API and told people, "Hey, if you were to write an application with this set of APIs, what would it look like?" so we got a lot of feedback around the ergonomics of the API before we even wrote any code just to flesh out, like, is this something that can be readily consumed, and so we did hundreds of hours of video interviews with developers, like, once the API did get fleshed out, once an SDK did exist, and that was one of the core tenets of how we kept the developers' interest so tightly in focus, because if, you know, you're sort of in a vacuum, and you're hacking away, and you think this is cool, well, it doesn't really matter if it's cool if it's not solving your developers' problems, and we had a very regimented approach to doing developer feedbacks which included, actually, like, videos and, like, reviewing the videos and not having to worry about taking notes, like, when we're doing developer feedbacks.
SARA: Yeah, I was always really surprised. When we were almost ready to launch a new feature, we would go through a round of developer feedbacks and find that there was a lot of things that we just didn't even think about that we--that were revealed through the feedback sessions and we were able to improve before we launched.
FRANCESC: That's so nice. Yeah, that's interesting 'cause I know that a lot of companies do that kind of product management and, like, market studies and so on for non-software stuff. Like, before you design something that is hardware, you let people play with it and see how they do it, but I've--have not heard about that same technique for APIs, which is actually a very good idea. I really like it.
MARK: Makes a lot of sense.
FRANCESC: Yeah.
MARK: Makes a lot of sense. Sara, you were talking about talking directly with customers. What are some of the cool things you saw people building with Firebase or have seen people building with Firebase? What sort of cool examples can we find?
SARA: So one of my favorites to talk about is Warby Parker. They're a glasses company. They let you order your glasses online, and then they send you a couple. You choose which ones you like and then send back the rest. They have a physical store in New York, and that store has pneumatic tubes, so when you order your glasses at the register, they're shot down to you via pneumatic tubes, and the tubes' notifications are actually powered by Firebase.
MARK: I have Warby gl--I have Warby Parker glasses.
FRANCESC: Yeah, those glasses are powered by Firebase.
MARK: They are--I knew there was a reason I loved them. [inaudible] my eyes. I bought them in the San Francisco store.
FRANCESC: Oh, okay.
MARK: [inaudible] have pneumatic tubes. I feel bad.
FRANCESC: That is very, very cool. What about you? Do you have one?
VIKRUM: Yeah, so my favorite Firebase app is an app called Roll20. So this is a tabletop gaming app that--Riley, the founder, has been with us, essentially, since the beginning, and I love gaming. It's a platform built on Firebase for gaming. It connects people with one another to not only build games for themselves but also play with others, and it's one of the use cases where with a very small team he was able to leverage our technology to build his product, so yeah, roll20.net.
FRANCESC: Yeah, I was looking at that right now. Looks really cool. Looks like a very cool game.
VIKRUM: and of course it has a chat, yeah.
MARK: Yeah, and there's a case study on the Firebase site.
VIKRUM: Oh, yeah.
MARK: Yeah, yeah, yeah, no, I've read that before, and it's really cool. I really--stuff like this, especially in the gaming space, I especially like 'cause of the fact that you've got the realtime updates across web, iOS, Android, so you can have that sort of cross-platform approach which is really, really powerful.
VIKRUM: Yeah. I think the thing that we--as developers and engineers, we sort of lose sight of how ubiquitous technologies like realtime--there's a lot hidden behind the details, right? Just because we see it in Google Docs and spreadsheets all the time or we see it in Hangouts doesn't mean it's very accessible to every developer, right? Like, we have huge teams of people that are, you know, building out Hangouts and Google Docs, and so by having this feature set in Firebase we give developers the ability to build those sorts of features in their products.
SARA: Yeah, it makes that realtime accessible to maybe just a single developer or a small startup.
FRANCESC: Yeah, that's actually a very, very, very interesting point, the fact that it looks easy, but it is not, so how--how is it done? Can you talk a little bit about the secret sauce? What's going on in the Firebase servers?
VIKRUM: Yeah, so at a very high level, we fan out this JSON, as Sara mentioned, to developer SDKs that are plugged into their applications, right? So at a very high level, that's sort of what we're doing. Nuts and bolts of it are whether it's a browser that's connected or an iOS device, we have, in the wide majority of cases, a persistent socket that's connected to our servers, and then we handle the fan out of JSON between all of those connected sockets. Even lower, we have written--so the core Firebase server is written in Scala. We use the awesome Netty networking pipeline to handle web sockets, to handle REST, like Sara mentioned. We have a long pulling implementation where, for browsers that don't support web sockets, we fall back to. It's all custom implemented Scala that's backed by disk elsewhere, but for most part, all of the magic happens in our JVM process.
FRANCESC: Cool. I think that that might be the first time I hear about something running Scala at Google.
VIKRUM: Hmm.
FRANCESC: I don't think--yeah, I don't know about anyone else that does Scala. So you have Scala on the JVM, and you're an SRE for that?
VIKRUM: Yeah, yeah, that's right.
FRANCESC: That's pretty unique.
VIKRUM: Yeah.
MARK: Interesting, very interesting. That's very cool. All right, so I--we were talking a little bit previously about sort of gaming in Firebase. I got particularly excited. I saw there was a recent Unity, Unity 3D plug-in, so if people aren't aware, Unity's an engine for doing games in both 3D and 2D, so there's a Unity plug-in for Firebase to do realtime event synchronization stuff. Can you tell us more about that? That's pretty exciting.
VIKRUM: Yeah, so it's in early preview, so you can find access to it in our Google Group, so if you go to the Firebase Google Group, the public one, and search for Unity, you'll see one of our engineers made a callout to be able to be able to, you know, take a look at one of the early examples. We've had a steady drum beat of requests for Unity essentially since the beginning.
MARK: Not surprised.
VIKRUM: Yeah, and like Sara mentioned earlier, our first SDK was JavaScript. The second and third ones were iOS and Android, and Unity, you know, for the most part runs on C#, and the way that the architecture there is we didn't have, like, a simple plug-in that we could have added without a lot of heavy lifting, and so even though it remained a priority, we didn't have the bandwidth to execute on that early on, and it was once we joined Google that, you know, we had the engineering resources to be able to build something to allow people to use Firebase on Unity. It's still early days, so I don't have any examples off the top of my head of people that have built games on it yet.
MARK: That was my next question, so.
VIKRUM: But soon. Unity's huge across all platforms, and giving both, like, indie developers and big shops the ability to add those sorts of features to their games, we realize, is extremely important.
FRANCESC: Now that you mention indie developers, there's something that I really like about Firebase, which is it's actually free for many cases. Like, what is the pricing? I know that the free tier is very nice.
SARA: Yeah, it's essentially free forever up to 100 concurrent connections, so that means, like, 100 simultaneous people on your website or mobile app at the same time, which is actually a lot, so it's a pr--it's a good problem to have if you've got 100 people in your app at the same time.
FRANCESC: Yeah, that's very nice. That basically takes you already to the point where, "Well, maybe I should start making money off this."
MARK: Yeah.
FRANCESC: That's very nice.
MARK: Yeah, if you've got 100 concurrent people and you're not making money--
FRANCESC: I don't think my web page has got 100 [inaudible].
MARK: No.
SARA: And then on the free tier you also get access to Firebase hosting, so you can deploy to your own Firebaseapp.com domain, and then the self-service paid plans start at $49 a month, and then the concurrent limits kind of go up from there.
FRANCESC: Nice.
VIKRUM: There is also a Spark plan, which is $5 a month.
FRANCESC: Okay.
VIKRUM: Yeah, to give you the custom domain. We heard a lot of feedback where $49 was too high for the indie developers. Whereas the free gives you some things, the $5 plan gives you your own white labeling and some of the features of the higher plans, so we heard that feedback from the indie devs, and so we have a $5 plan as well.
MARK: Nice, nice.
FRANCESC: That's [inaudible] on coffee here in San Francisco. Cool, so you mentioned that--so some time ago you worked together with Parse as--in the same batch for YC Comb--Y Combinator. Later on you got acquired by Google. Parse got acquired by Facebook. We all know Parse ended up being shut down, well, at some point, and the migration was great but still some developers felt like, oh, yeah, like, this was a problem. What can you say to those that might be a little bit concerned about this happening to Firebase?
VIKRUM: So in general--it was very sad, right? The shutdown of Parse, and, you know, we know that team. It's just bad for the ecosystem at large, let alone for the developers and the Parse team, which we know and, you know--and there are many apps that were built on Parse and Firebase, and Firebase and Meteor, and so it's not--you know, they're not completely siloed. [pause] I think the thing to keep in mind is what these sorts of offerings provide, whether it's Firebase or Parse, is leverage for developers to build their products and build their visions, and as long as there's a need for that, I think this ecosystem will continue to exist and flourish. Whether the particular circumstances around Parse can be dissected, I think it's pretty unambiguous that Google supports cloud in general and developers in particular.
SARA: Yeah, and I know there's lots of exciting Firebase features that the team is working on.
VIKRUM: Right.
SARA: And Google's definitely 100% behind Firebase, so.
VIKRUM: Yeah, so it's--yeah, so stay tuned. We have a lot to announce at Google I/O.
FRANCESC: Ooh.
MARK: Any--all right, well, I have to ask. You might as well [inaudible] no, but, like, is there anything you can maybe, like, hint at or any new features that we could possibly get a little scoop on just here?
FRANCESC: The only stuff I know is confidential, so. What about you?
VIKRUM: The same. I just say that I think it'll just reaffirm Google's commitment to Firebase. Once you see what gets announced and released at I/O, I think there will be no doubt as to the commitment and longevity which is sort of envisioned for Firebase.
MARK: Great.
SARA: Stay tuned.
FRANCESC: Yeah, I know that at least in our team, developer advocacy for Cloud, we are not forced to talk about Firebase. Like, it's something that is there, but we choose to use it just 'cause it's awesome, so I don't think--yeah, I don't think it's gonna be going away anytime soon. 
MARK: So all right, we've covered, it seems like, a lot of things about Firebase. Is there anything that you wanted to mention about Firebase that hasn't been mentioned already or anything that's particularly amazing about it that you want to kind of highlight?
SARA: Actually, the integration between Firebase and Cloud, just recently there was an Android Studio update release that makes it really easy to integrate Firebase into your Android app. You can just do it directly through the Android Studio interface, and we've got a tutorial on how to do that. You can actually add App Engine back into your Firebase app, so we'll put that in the show notes.
FRANCESC: Nice.
MARK: Nice.
FRANCESC: What about you, Vikrum?
VIKRUM: So one of the questions I always get, you know, whether it's related with Parse or Firebase and, you know, how much we love using it is--so I have a lot of, like, friends and family who I've evangelized Firebase to, and so, like, I'm on the SRE team and, like, you know, when things aren't working, like, I'll get, like, personal calls to my personal phone saying, like, "What's wrong with the servers? Like, get them back up," so, like, I just wanted to, you know, let people know that, you know, service availability and uptime and the areas around a magical Cloud service being up are first and foremost on, you know, our team's priorities, and I hear from those from my brother and my close friends who are also using Firebase.
FRANCESC: I really like the fact that it's, like, SRE, but it's not all about OKRs and keeping it safe. It's like, otherwise your family will shut up.
VIKRUM: Yeah, family and friends, yeah.
FRANCESC: It's that you have an outage [inaudible]. Nice.
MARK: Otherwise your mum's not gonna talk to you for, like, a week.
VIKRUM: Yeah, her app is down.
FRANCESC: That's good.
MARK: That's good. Well, thank you very much, Sara and Vikrum, for joining us. We really appreciate you taking the time to talk to us about Firebase today.
SARA: Thanks for having us.
VIKRUM: Yeah, it's been a pleasure. Thank you so much.
FRANCESC: Thank you.
MARK: Thank you.
FRANCESC: So thank you very much again to Sara and Vikrum for being here with us today.
MARK: Yup.
FRANCESC: I really loved the conversation. I learned a lot about Firebase and also the way they do things. Very interesting the way they do their product management.
MARK: Definitely, definitely.
FRANCESC: I really liked it. So we actually asked a question which was a delicate question of the week.
MARK: A delicate question of the week, I like that. I like that a lot.
FRANCESC: Which was about--yeah, so Parse was shut down. What about Firebase? What are the plans and so on? And we actually found out right after finishing the interview with them that James Tamplin, one of the co-founders of Firebase, wrote a blog post on the Firebase blog about the shutdown of Parse and the future plans of Firebase at Google, so if you're interested on that, I think it's a very great read. It gives a bunch of links to other things, what they're working on. They actually also mention the Unity plug-in that you were so interested about, so I think it's a great read if you want to know more about it.
MARK: Yeah, definitely, and if you're interested to see, like, just sort of a snapshot glance of what they've been up to with Firebase and what sort of ideas they've got coming up in the future, it's a good read, so.
FRANCESC: Yup.
MARK: Definitely have a look in the show notes, obviously.
FRANCESC: Of course. Cool, and before we finish with this amazing episode, I think we should go for the question of the week.
MARK: Question of the week, okay, great. So we were talking about this before, actually, amongst ourselves. We were talking about--so obviously you've got the Cloud Console. You know, if you have a laptop, you sit down, you can have a look at everything that's going on inside your Google Cloud Platform project, but what do you do if, say, you're traveling or just generally more mobile, you know, you don't have access to a laptop. What do you do in that instance?
FRANCESC: So there's a couple options. The first one is trying to access the console with your browser on a mobile phone, and you will see that it's actually not a great, great option.
MARK: Doesn't work so good?
FRANCESC: Doesn't--it's not incredibly responsive. Let's go with that.
MARK: Okay.
FRANCESC: But that's actually not a big problem 'cause there's a much better option, which his we have native apps for both iOS and Android which, actually, they're just called Google Cloud Console on both the Play Store and the App Store.
MARK: Yeah, we'll have links to both of those in the show notes, but no, we were both sort of playing with them and having a look at them, and they're really nice. Say you have an incident like something goes down. You're using Cloud Monitoring, which you should be, obviously.
FRANCESC: Yup.
MARK: And you want to see what's going on. You've got direct access to that incident, see what it is. You've got access to your logs. You can see charts and reports of what your resources are doing. It's really nice.
FRANCESC: Yeah, and even if everything is going on normally and everything is perfect, I personally like to go and see the graphs. Like, "Oh, yeah, everything is up." You can see if your machine crashed for any reason. You have access to all the logs, and so it's very nice to have, and then there's this thing that we were watching this, like, a minute ago, and it just blew my mind. 
MARK: It's really cool.
FRANCESC: It's--basically, I was on my Android app. I'm assuming the iOS app also does it, but I'm not really sure, but on the Android app I went to one of my machines, and then I clicked on the little program menu, and I saw one of the options was, "SSH into this machine," which is pretty freaking amazing.
MARK: Yeah. Yeah, suddenly we had an SSH terminal on our mobile phone connecting to our Compute Engine instance. We were like, "Oh, now we can just SSH around. That's pretty awesome."
FRANCESC: Yeah, so next step, you need a keyboard or you really--or maybe you're just really good at typing commands on--but yeah, really amazing. I'm very excited about this, and actually, I'm gonna be using it much more now that I know I can SSH into my Cloud instances from anywhere in the world.
MARK: Yeah, no, really love it, really, really love it.
FRANCESC: Yeah, very, very cool. So yeah, we'll have a bunch of links to both apps, and I'm actually gonna be tweeting about this 'cause I have the snapshot, and it's just amazing.
MARK: It's really cool.
FRANCESC: Yeah, very excited.
MARK: Wonderful. All right, well, I've been away for a little while. Francesc, why don't you update me on where you're gonna be in the next couple coming weeks?
FRANCESC: So I'm actually gonna be in a bunch of places. So Friday I'm flying to Dubai. I'm going to Dubai for GopherCon.
MARK: See ya.
FRANCESC: Yeah, there's GopherCon Dubai, so it's the newest Go conference in the world. Right now there is GopherCon India that is happening right now. GopherCon Dubai is right after, and I'll be there for two days, and after that what else? I actually am planning not on traveling too much other than in March will be South by Southwest and then back to San Francisco for GCP Next.
MARK: Very, very nice. I think my travel stuff is still pretty much the same. I'll be at the Launch Hackathon on the 26th of February. From there--everything's pretty much in California. It's nice. I'll be at Game Developer Conference. I'll be helping out at the booth. I'll definitely be there, so if you're there, please come say hello. I will be at GCP Next as well, which I'm super excited about, and also be at Strata as well doing some fun stuff there.
FRANCESC: Nice, very, very cool. So I think that before we leave, I think it's always a good thing to do, which is going through all the ways people can contact us.
MARK: Yes, 'cause we love questions. We love comments. We love everything.
FRANCESC: So okay, I'm gonna be the one asking the questions.
MARK: All right.
FRANCESC: So Twitter?
MARK: @gcppodcast.
FRANCESC: Google+?
MARK: +gcppodcast.
FRANCESC: +gcppodcast. We have a subreddit.
MARK: /r/gcppodcast.
FRANCESC: And then our email?
MARK: Hello@gcppodcast.com.
FRANCESC: And our web page?
MARK: Gcppodcast.com, very easy to remember.
FRANCESC: There you go.
MARK: There you go, so please send us stuff. We love to hear from you.
FRANCESC: Yeah, there is nothing better than coming up to the office on Monday morning and re--seeing some emails from people saying, "Hey, your podcast is awesome, and I have questions," or saying, like, "Hey, your podcast is not that good. These are ideas to--how to improve it." We're open to both.
MARK: Yes, most definitely. Instructive criticism is always welcome, but yeah, we love the interaction.
FRANCESC: Yup. Well, so thank you so much for coming back from Australia and being here again with me today, Mark.
MARK: Well, thank you very much for joining me as well, Francesc.
FRANCESC: And talk to you next week.
MARK: See you next week.
{{< /transcript >}}