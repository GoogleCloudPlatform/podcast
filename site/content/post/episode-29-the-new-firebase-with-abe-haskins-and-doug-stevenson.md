+++
audioDuration = "00:39:16"
audioFile = "Google.Cloud.Platform.Podcast.Episode.29.mp3"
audioSize = 56590328
categories = ["Firebase"]
date = "2016-06-08T01:07:49Z"
description = "Fresh off the press from Google I/O 2016, Francesc and Mark talk to Abe Haskins and Doug Stevenson about all the new features and improvements that have recently been announced for Firebase!"
draft = false
episodeNumber = 29
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "The New Firebase with Abe Haskins and Doug Stevenson"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/ATAmruyarHQ"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4n5a3o/episode_29_the_new_firebase_with_abe_haskins_and/"
+++

Fresh off the press from [Google I/O 2016](https://events.google.com/io2016/), [Francesc](https://twitter.com/francesc) 
and [Mark](https://twitter.com/neurotic) talk to [Abe Haskins](https://twitter.com/abeisgreat) and 
[Doug Stevenson](https://twitter.com/CodingDoug) about all the new features and improvements that have recently been
announced for Firebase!

<!--more-->

##### About Abe

[Abe](https://twitter.com/abeisgreat) is a Developer Programs Engineer on the Firebase team who works closely with the 
Database team and contributes to many of Firebase’s open-source projects.

##### About Doug

[Doug](https://twitter.com/CodingDoug) is Developer Advocate on the Firebase team, 
Android development specialist, and works very closely with the Crash Reporting and Test Lab components of Firebase.

##### Cool thing of the week

- Introducing Google Container Engine (GKE) node pools [post](https://cloudplatform.googleblog.com/2016/05/introducing-Google-Container-Engine-GKE-node-pools.html)
 
##### Interviews

- Firebase [site](https://firebase.google.com/)
- Firebase Realtime Database [docs](https://firebase.google.com/docs/database/)
- Adding Firebase to your C++ Project [docs](https://firebase.google.com/docs/cpp/setup)
- Firebase Analytics [docs](https://firebase.google.com/docs/analytics/)
- Firebase Remote Config [docs](https://firebase.google.com/docs/remote-config/)
- Firebase Authentication [docs](https://firebase.google.com/docs/auth/)
- Firebase Cloud Messaging [docs](https://firebase.google.com/docs/cloud-messaging/)
- Firebase Notifications [docs](https://firebase.google.com/docs/notifications/)
- Firebase Test Lab for Android [docs](https://firebase.google.com/docs/test-lab/)
- Firebase Crash Reporting [docs](https://firebase.google.com/docs/crash/)
- Firebase Storage [docs](https://firebase.google.com/docs/storage/)
- Google Cloud Storage [docs](https://cloud.google.com/storage/docs/)
- Firebase YouTube Playlist [videos](https://www.youtube.com/user/Firebase)

##### Question of the week

- StackDriver Monitoring [docs](https://cloud.google.com/monitoring/docs/)
- StackDriver Logging [docs](https://cloud.google.com/logging/docs/)
- StackDriver Error Reporting [docs](https://cloud.google.com/error-reporting/docs/)
- StackDriver Debugging [docs](https://cloud.google.com/debugger/docs/)
- StackDriver Trace [docs](https://cloud.google.com/trace/docs/)
- Google Cloud Intellij Plugin (ALPHA!) [github](https://github.com/GoogleCloudPlatform/gcloud-intellij)
- Diagnostics - Spend less time diagnosing and more time developing [video](https://www.youtube.com/watch?v=AUW4ZEhhk_w)

{{< transcript "FRANCESC: Hi, and welcome to episode number 29 of the weekly Google Cloud Platform podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark." >}}
MARK: Hey, Francesc. How you doing today?
FRANCESC: Very good, very happy, very excited about a lot of Firebase and Firebase and Firebase today.
MARK: Yeah, it's gonna be more Firebase and then, some more Firebase.
FRANCESC: Yeah. So actually, the question of the week and the cool thing of the week are not related to Firebase...
MARK: No.
FRANCESC: But--which is not--not everything's gonna be Firebase, but we're gonna be talking with a bunch of people from Firebase. It's going to be really cool.
MARK: Yeah, we're gonna talk about all the new stuff they announced at I/O and all that cool stuff.
FRANCESC: Yeah. So if you had the opportunity to watch some of the talks on the Firebase truck at Google I/O, there will be some of the things that you may know. But I'm sure there's gonna be things that you did not know, that are new and all fresh, in Firebase.
MARK: Absolutely. 
FRANCESC: Then, at the end, we're gonna be talking about the question of the week which is an interesting one, which is basically, "Okay, so something's going wrong with my application on Google Cloud Platform. How do I figure out what is going wrong?" So we're gonna be talking a little bit about monitoring, debugging, all that cool stuff that you never want to do but you have to.
MARK: Yep.
FRANCESC: Yep. So yeah, that's gonna be fun. That's gonna be at the end of the episode. But before that, we're gonna do the cool thing of the week.
MARK: Yeah, so the cool thing of the week is introducing, on Google Container Engine, we have now gotten node pools...
FRANCESC: Yeah.
MARK: Which is really cool. So what that really means is you can now do heterogeneous clusters. So if you want to have different types of machines within your cluster, so they're not all the same, maybe you have some with more memory, some with more CPU, you're able to do that. And then have that all exist within the same cluster, and, basically, be able to turn around and say, like, "I want these containers to be running on these, sort of, like, highmem ones." Or, "I want these ones to be running on some highcpu ones." And so you can have a little bit more flexibility in terms of what sort of resources you have available to you in your GKE cluster. 
FRANCESC: Yeah, and I think that since--once you had more than two node pools--well, more than one node pool, actually, you're able to tag those pools--tag those nodes accordingly. And then, basically say, "I want this to be running on some of those nodes that have the tag highmem." Or whatever you want to do.
MARK: Yeah. Yeah. No, they actually get--they get defaultly tagged, which is really nice, with the new nodes and, like, what they are when you create them.
FRANCESC: Perfect.
MARK: I actually really like this [inaudible] here, and it's in the blog post we're talking about, but that you can create, like, if you want to do an upgrade from one version of Kubernetes to another. The new node pools have the new version. So you can actually try out your stuff on there before you upgrade the rest of your other nodes in your cluster...
FRANCESC: Oh.
MARK: And so you can do some really clever things that way too. So you--yeah, it's actually--yeah, it's pretty cool. It's a really nice little new feature. 
FRANCESC: That is very cool. I actually think that it's a very good match for Google Cloud Spin. Again, I keep on talking about it. 'Cause it's actually--when you need to extract something from frame, you need a specific amount of memory and so on. But then, when you are stitching stuff together, you actually need more CPU [inaudible].
MARK: Right.
FRANCESC: So that's actually--you could have different nodes. That is pretty cool.
MARK: Yeah. You could get, like, really efficient with your workload so you're, like, only paying for really the [inaudible] stuff that you need.
FRANCESC: Yep. Very cool. I consider doing that if I get time. Okay, so I think that it's time to go chat with our friends from Firebase.
MARK: Yeah, let's go talk about Firebase.
FRANCESC: So I'm very happy to have Abe Haskins and Doug Stevenson from the Firebase team here with us today. Hi, Abe and Doug. How are you doing?
ABE: Hello.
DOUG: Hey. Pretty good. How are you?
FRANCESC: And we're gonna be chatting a little bit about all the new things that Firebase announced during Google I/O. But before that, why don't you tell us a little bit about yourself? Why don't we start with you?
DOUG: Yeah, my name is Doug Stevenson. I'm a developer advocate on the Firebase team. I've been doing Android for a really long time, and I specifically work a lot with the Cloud Test Lab, or, actually, now it's called Firebase Test Lab and also crash reporting.
ABE: I'm Abe Haskins. I'm a developer programs engineer on the Firebase team. I've been working with or for Firebase for about 3 1/2 years now. I joined when it was about ten people, before the database had security rules. And yeah, I've been watching it grow, and now I focus mostly on the real-time database, but I do all sort of stuff.
MARK: Cool. So we've had an episode previously about Firebase. But if people didn't have a chance to catch it, what's, like, the high-level, what is Firebase? What is this thing?
ABE: So Firebase as a platform started as the database. We used to have this real-time database. We still have it too, but we used to have just this database. And it was this really cool way to interact with data and build real-time applications. But as we progressed with that, it started to become clear that we were solving a problem there but there was a lot of other problems people had. They had trouble authenticating users. They had trouble finding a place to put client-side applications, html, JavaScript, stuff like that. So it started becoming this whole platform. And today, it's expanded even more to be this platform of things that most people do that we can make easier, things that most people need. So it's just a suite of tools and different helpers to speed up development.
MARK: And specifically, like, what platforms does Firebase work on?
ABE: So we support a bunch of different platforms. We have iOS, Android. We have, historically, a huge presence on web, lots and lots of JavaScript development, [inaudible], all of those are our Firebase-specific integrations for frameworks. We also have the C++ SDK that is in development. I believe it's beta labeled now, but I'm not quite sure. But that's also out there. 
MARK: Also, you've got Unity integrations too. Don't you?
ABE: We do. We do have Unity integration, which is a wrap around our native SDKs so all the awesomeness of those come right into Unity. 
FRANCESC: Cool, and--so there's a little bit of the history of Firebase. What about the new Firebase that we all now--we all heard about during Google I/O. What are the new things that everybody should know about?
DOUG: Well, there's a--there's a bunch of new things. So, like Abe said, we have real-time database, which is still the real-time database that you--that you know and love. There are 15 total components, 13 of which were--which are core Firebase and 2 which we're calling integrations which are, like, standalone products which just work well with Firebase. So I'm gonna try to remember as many of them as I can.
FRANCESC: I actually--I actually have the list of the 15 components in front of me, and you don't see it. So please go for it. 
DOUG: This is a quiz. All right, so let's see. We have--
MARK: Don't get anything wrong, now.
DOUG: No. Let's see. We have real-time database. We have storage. We have hosting. We have authentication, remote config. There's Test Lab for Android, crash reporting, dynamic links. Oh, I'm breaking down, here. App indexing.
ABE: App indexing.
DOUG: Invites.
ABE: Invites. [inaudible].
FRANCESC: Okay, I'm gonna help. REST stuff. I'm gonna help you a little bit, there's--
DOUG: Well, the integrations are AdMob...
FRANCESC: Okay.
DOUG: And--
ABE: AdWords.
DOUG: AdWords, yeah.
FRANCESC: AdWords. And there's also notifications, and you missed--
DOUG: Cloud messaging.
ABE: And the big one. You missed Cloud Messaging. 
DOUG: Yeah. 
FRANCESC: And also something that--the one that you missed, I think it's analytics. 
ABE: Yeah.
DOUG: Oh, yeah. Yeah. 
FRANCESC: It's analytics.
DOUG: That's actually a really big one, because that supports a lot of the other components and very--all tightly, very integrated with analytics. 
FRANCESC: Yeah. So could you tell us a little bit more about analytics itself? 
DOUG: Yeah. Well, it's--
FRANCESC: What does it do? What it does analyzes. 
DOUG: Yeah. So it's an all new analytics component that is made for mobile devices. So it's Android and iOS. It will collect and report a lot of information about how users are using your app automatically. So you don't have to write anything. But you can track your own events on top of that. So you have, like, a quota of 500 custom events that you can log and parameterize yourself. And once you've started to collect all that information, you can then turn those events and user properties into audiences. Actually, audiences you can--you can define based off of events that have happened for a user. So you can say, "Everyone who's launched my app and gotten to, say, level three in a game." You can create an audience just for that. You can also use the audiences for notifications. Let's see. What else can you do? You can also do funnel analysis, and you can export your data to BigQuery for...
FRANCESC: Cool.
DOUG: For querying, sort of, ad hoc. 
MARK: Now, I believe this is free. 
DOUG: It is free, and it's unlimited. It's kind of hard to think about it like that. You know, there's so much data going into the system. 
MARK: Say it one more time, because there's a number of people who when they hear free don't believe it. So is it free?
DOUG: Okay, it's free, as in F-R-E-E, like--
ABE: Yep.
MARK: Like--
FRANCESC: As in beer. 
DOUG: As in beer, basically. Okay, yeah.
FRANCESC: Okay. And unlimited for real. 
DOUG: Unlimited. So you can send as much data into it as you want. Now--
FRANCESC: That's amazing.
DOUG: And crash reporting is like that too. Crash reporting is also free and unlimited, but it's worth noting, as a caveat, you can't just jam as much data as you--you can't just spin up as much data as you possibly can. You know, there's reasonable usage patterns which we can reasonably handle.
FRANCESC: Got it. Yep. 
DOUG: You know, you can't force anything beyond that. 
ABE: Yeah, we--there's use vectors in place, but for all practical uses, it is free and unlimited. 
MARK: Yeah.
FRANCESC: Nice. That is very impressive.
MARK: Yeah. What sort of use cases do you think you're gonna see people using analytics for? Have you seen anything already? Like.
ABE: I mean, you can--you can imagine that this is Google's version of Google Analytics for mobile. And you can, you know, we have a--more than a decade of people doing crazy things with Google Analytics. And we expect fully to see all of those times 100 with Firebase Analytics. The amount of flexibility we introduce with these custom events and the ability to do all these funnelings and notifications and things like that is just--it's huge. And it's very open ended. I haven't seen anything specifically that sticks out, because it's still very early. But I'm sure we're gonna see tons and tons of crazy things. Plus, it's free and that always brings out people who build crazy stuff on things. 
DOUG: Yeah. One of the things that people really want to do, is they want to identify who their big spenders are. So there's a concept of lifetime value of a user. And then you can, again, use that to target them with, say, notifications or put them in A/B testing with remote config, based on their prior behavior which is huge for a lot of apps.
MARK: That actually segues just into what I wanted to talk about. Do you want to talk a little about remote config and what that is and how that works?
DOUG: Yeah. So remote config, you can basically think of it as, like, a switchboard in the sky, right? So you can--I know it's kind of a goofy way of thinking about it.
FRANCESC: Trying to imagine that right now. 
DOUG: Yeah. So what you can do--I mean, there's a few things you can do with it. I think the most popular thing is A/B testings. So you can have two different experiences in your app, and you want to pit them against each other to see which one makes more money or which one has higher retention or has better, you know, play through for a game. So you can run that test. You can define percentages. You can say, "50/50 of people, you know, get one experience over the other." And then measure the outcome in analytics. The other thing that people can do is, say, roll out a new feature instantly. So a prior problem that app developers had is that you submit to the store, and then the store doesn't give you a guarantee about how long that, you know, the new feature gets out. Both Android and iOS have this problem. But with remote config, what you do is, you code up your feature early, publish it ahead of time, then, when you're confident that the app is actually on the user's devices, you can use remote config to flip a switch, and then everyone gets the new experience or the new feature instantly. So you can time that with, like, a television event or a tweet or something like that...
FRANCESC: Nice.
MARK: Mm-hmm.
DOUG: To make sure that everyone gets the experience at the time that you want them to have it.
ABE: Yeah, and it's not just flipping switches that you manually go in and set. Like, you can do that, where you say, "I'm gonna change this value." And then users get some different experience. But you can do things where you say, "People located in Australia are gonna get a different homepage than people located in the U.S. People running an older version of Android might get a warning saying, 'You need to upgrade otherwise, you know, we're not gonna support this.'" There's a bunch of these different categories and buckets that you can filter on. So just arbitrary percentage for A/B testing, that's there. But we have a whole bunch of different ways to send different values to different people.
DOUG: Yeah, the other thing you can do is have your strings in your app defined in remote config. So you can say, "In different parts of the world, change the experience." So it, like, for Android--I'm an Android developer. So you can put that in resources, but you can't, you know, once you've baked in those resources into the app, they're there forever, right? With remote config, then you--now you can make those say whatever you want at the time that you want in the part of the world that you want. 
MARK: I was gonna say this sounds particularly powerful. You're talking about, sort of, being able to build your own audiences with--inside analytics. Like, say, people who have gone past level three or something like that, and then being able to combine that with remote config as well. Being able to say, like, "These particular audiences are gonna see this particular thing which is different from people who, say, have just started or are less experienced in the game." Or whatever application you've got. That's--that sounds like really cool stuff.
FRANCESC: So, I have a question. So if I understand correctly, the main difference between using--so if you want to store some configuration that might change over time, you have the option between storing it in real time database directly or storing it in remote config. What is the big difference between doing one or the other?
ABE: I think there is--there's a handful of differences. The real time database is designed for small amounts of quickly-changing data. That's always been the focus of the real time database. So if you have huge strings that have, you know, descriptions in different languages, you could put those in the real time database. That would be fine. But if you're going and you're filtering them based on language or something, otherwise--like, once they get to the device, you might as well do that in a system that serves that up automatically. 
MARK: Okay. 
ABE: It's--there's few things that you couldn't do if you wanted to jam into the real time database and then, like, do this filtering on your own. But it makes more sense, and the interface is better, for this type of thing. It also connects better to analytics than just real time database would. So you'd have to be sending your own events to say people are doing this and that. But remote config just ties right in. 
FRANCESC: Nice.
DOUG: Yeah, I think the other thing to note is that real time database is good for storing modeled data. Whereas remote config is better for just, sort of, like, regular key value pairs and also--you also get, like, a nice dashboard to make the changes. Whereas with database, you have to go, you know, into the database viewer and drill down into the item that you want to change, and then change it. And it doesn't--it doesn't feel as right, you know.
ABE: And I think that's an interesting discussion with the new Firebase features that we announced at I/O. Some of them are targeted for more technical people, like the database or authentication. Some are targeted at more marketers or different business-level folks. And I think remote config is walking that line. Where, if I give you access to the database and you're, you know, my boss's boss, and you know nothing about our database structure, there's a really good chance you're gonna break something. But if I give you access to remote config, and there's only a few--a few different ways you can set things and, you know, configure audiences and whatnot, that's a marketing problem. Like, you guys can play with that and, like, get that right. And I'll deal with all the technical, structured things that if you break are gonna actually, you know, take stuff down or what have you. 
FRANCESC: I see. So since you mentioned it, could you talk a little bit about authentication? 'Cause that's actually probably my second-favorite feature of Firebase. The first one is clearly the database. But authentication, the fact that I don't have to manage auth too, on my side, that is amazing. Could you tell us a little bit more about that. 
ABE: Yeah, so have you--have you guys ever used, like OAuth to set up, like, Twitter login or Facebook login?
MARK: I've tried very hard not to.
ABE: Yeah, exactly.
FRANCESC: I've done it a couple of time. 
ABE: I think most people have had about, like, nine times of trying not to and then one time of, like, succeeding but really hating themselves for it. The Firebase authentication is just an attempt to make that the experience it should be. In that you, as a developer, if you just want to assign a new Twitter, you shouldn't have to have to deal with, like, these complicated OAuth handshakes that have, like, three or four steps in them. You should be able to say, "Sign in with Twitter." And then have the application, you know, pop out to the Twitter app, do whatever it has to do to get that authenticate--authentication flow complete, and get that back to your app. And that's what Firebase authentication does. In most cases, it's a couple of lines to do what this authentication. In the web version it's one line to pop up an OAuth window. We dramatically simplify the flow of integrating with third-party providers, specifically GitHub, Facebook, Google, and--
DOUG: And Twitter.
ABE: Twitter. Yeah, and with that authentication we also offer, if you don't like those providers, the ability to generate your own tokens and tie into your existing authentication back ends if you have them. 
MARK: And I do love the new feature now that you can do federated auth. So that if people want to login with separate accounts for different auth providers, you now provide the hook so that you can just join those together really nicely. 
ABE: That has been heavily requested. That's definitely on the sheet of things that have been said so many times. We're like, "We're working on it. We're working on it." And I don't think people believed us anymore. And then we came out with it, so.
MARK: Cool. So there are also several new features you have that you've, kind of, absorbed into Firebase from externally. The Cloud Messaging comes to mind, as well as Test Lab. Do you want to talk about those two as well, and how they got pulled in, and, like, are there differences now? Are they the same? Like, what changed there?
ABE: Yeah, I think I can probably speak about Cloud Messaging, and then Doug knows much more about Test Lab than I do. Cloud messaging, Firebase Cloud Messaging or Google Cloud Messaging, serve the same purpose. Like you said, we kind of absorbed it in, but we made it more Firebase-y at the same time. 
MARK: I want to know what that means.
FRANCESC: Firebase-y.
ABE: Yeah, what that means from our perspective is we made it easier to use. We made it integrate better with the rest of our suite of tools. It's not just GCM with a letter changed. We went through and we rethought a bunch of the APIs, and we thought, "All right, we have this existing Firebase SDK already importing. How much of this can we do for you? How can we simplify this? How can we make it tie into your analytics and Firebase notifications?" So we improved it in that way. It's much easier to get up and running with than GCM ever was. 
MARK: So take a back step for a sec. What exactly was Google Cloud Messaging? What, like, what does it do for people? In case people haven't seen that before.
ABE: So Cloud Messaging is a way of sending push notifications to devices.
MARK: Okay.
ABE: So some of those pop up and make noises.
MARK: That was great timing.
ABE: Yeah, so some of those you pop up and you see. It might say, "Hey, you know, you should come beat level three of this game." Some of them happen behind the scenes and trigger things in your app. But it's basically just a way of pushing notifications to devices.
MARK: Okay. So yeah, as you were saying, now it's a lot easier to use and a lot better and cleaner.
ABE: Yeah, exactly. It's never been a horribly difficult thing to use, but wherever we could, when we rolled products in, we improved the APIs, improved the experience, and integrated them as well as we possibly could. 
DOUG: And that's related to notifications too, which is now a different product.
ABE: Yeah.
DOUG: So--
ABE: So, yeah. This is--this probably requires, like, saying very explicitly, there's been confusion around Firebase Cloud Messaging versus Firebase notifications. This is fair. It's a little confusing which is which and how they relate. But you can think of Firebase Cloud Messaging as the API, the SDK, that's on your phone, that you send down to your clients, that lets you receive messages. You can also programmatically send messages through FCM from your existing server if you wanted to. Now FCM goes back to that split--I mean, sorry, not FCM. The notification console goes back to that split I was talking about between Firebase products for technical folks and Firebase products for more marketing, business folks. So if you have audiences set up. If you have your analytics configured or different groups that you want to filter and send notifications to. Historically, you would have to use a third-party tool or you'd have to go and rely on your analytics platform to give you the ability to send notifications to these people. And that's where Cloud--what Firebase notifications does for you. It's a nice interface. It's a UI for non-technical folks to go in and say, "I want to target this group. I want to send messages to these people, and people who speak these languages get this notification." Or whatever.
MARK: Hmm, so messaging is more for the technical, programmatic people, whereas the notification stuff's probably more for the less technical.
ABE: Yeah, exactly.
MARK: And if--
DOUG: Maybe, and an important distinguishing factor between them is Firebase Cloud Messaging is more for, like, event-driven messages. So you have something that, like, a notification that happens in response to something else that happened in your system, whereas notifications is more like, you know, user to--not user to user, but, you know, app manager to user. Like, I want to type a message in the console and send it to my users so they can see it. That's that case. 
FRANCESC: Nice. Yep.
ABE: Yeah, and they both come back to FCM. Like, you're never gonna import the F--the Firebase notifications into your SDK. Like, once you put Firebase Cloud Messaging in there, you have the ability to use notifications to send messages down to your devices.
MARK: Excellent, and test lab.
DOUG: Yeah, so it's formally called Firebase Test Lab for Android, because it only supports Android devices right now.
MARK: Yep.
DOUG: But this is--this is basically the same Cloud Test Lab product that's been moved over to Firebase. So now you can do the same things you could before. So there's a Robo test, which was, like, a fully automated test that--we have this software agent that basically works your app for you. It, sort of, discovers UI widgets and buttons, and pokes and prods, and, sort of, systematically crawls your app to find all of the features. Which is pretty cool because you don't write a line of code to do that. You get that--you get something, kind of, for nothing.
FRANCESC: Wow.
DOUG: Which is great because if you don't want to write test, and I know I don't want to write test. Test is not exactly, like, fun to write.
MARK: Hey, I like writing test. I really enjoy writing tests. 
FRANCESC: You also like writing Haskell.
DOUG: So for people like you, who enjoy writing tests--if you enjoy writings tests, you can do that. You can write Android instrumentation tests as well and execute that against your app. So you can upload both APKs, your app APK and your instrumentation test, and we'll run those as well. Let's see. What else can we do with Test Lab? There's--
MARK: I'm guessing you can run across various different devices as well, and sizes and shapes and stuff?
DOUG: Yeah. Yeah, so that's what we call the device test matrix. So what you do is you select the devices, the actual models of devices that you're interested in testing. You select the API levels, the Android API levels. So, you know, not every device supports every API level, but we'll find an intersecting, you know, combination that will fit. You can test in portrait. You can test in landscape. And so, you know, based on your selections, we'll create a series of tests that actually satisfies your requirements. 
MARK: That's cool. And do these run on real devices or is it all emulated? Or how does that work?
DOUG: Yeah, so these are actually devices sitting in a rack in the cloud. So you can think of it, like, as--
MARK: Terrible.
DOUG: Cloud hosted or managed devices. So you don't ever have to touch a device. You don't have to have tangled cables on your--on your computer or you know. Back when I did testing, at a startup a long time ago, it was, like, you had this stack of devices. You were constantly like, "Let's do this one now. Let's try this one. Let's try this one." And I only have one USB port, and I can't manage the whole thing. And so now you don't have to do that. You can run all--you're basically delegating all of your tests into the cloud, and then we'll send you test results when they're ready. And they're running, you know, in parallel. So for as many devices as you've selected, we will try to, you know, use them as fast as we possibly can. 
MARK: And did this platform change as it got, you know, absorbed by Firebase? Or is it still fairly much the same or?
DOUG: The platform itself is mostly the same. The big change was that we had a, like, a UI in the Cloud Developer Platform console. Now, that's been moved over into Firebase. So now you see Test Lab along with all your other products. You have--I think the UI is better. It's a little easier to use. But for the most part, the infrastructure is the same. Now, there is one new thing that goes along with this. It's not part of Test Lab proper. It's actually part of Android Studio, and this is coming with Android Studio 2.2. This is this product called Cassette, and what it lets you do is launch your app on a device. Then, you use it. You actually type in, push the buttons, enter the data for the test, the way you want to. And then what it will do is record everything you've done and create a Espresso test for you. 
FRANCESC: Oh, nice.
DOUG: So you don't actually have to write out all of the, like, "On view, click this button and that thing and check that text." Like, it's all done in the UI which is super handy. You can grind through a lot of test cases very quickly that way.
MARK: You say it was called Cassette?
DOUG: Cassette. 
MARK: As in, like, what I used to listen to music on when I was a teenager?
DOUG: Yes, what I used to save my programs on when I was a kid. Yes, I am that old.
FRANCESC: Wow, people are old. Cool, we're pretty much running out of time, but there was something that I wanted to discuss too was storage and how is it different to Google Cloud Storage, if any difference exists?
ABE: So it is different in the way you interact with it. Firebase Storage is backed by Google Cloud Storage. When you sign up for Firebase, you get a Firebase--I mean, a Google Cloud Bucket that you can interact with. You can even open it in the Cloud console. And if you have existing apps that use existing APIs to interact with a Google Cloud bucket, you can interact with it from your Firebase. I mean, your Firebase bucket can be interacted with in the same way. The benefit of using Firebase storage over Cloud storage is that Firebase storage is designed to be used from clients. Google Cloud storage never really had a good solution to, "I have a user. I want to upload an image. I want to upload directly to that bucket from my webpage or from my app." You'd have to bounce it through your own server. You'd have to do checks on the file type and the file size and things like that. And eventually, you could get it in the Cloud--the Cloud storage bucket, but it was--it was kind of wonky. Firebase storage introduces two really cool concepts. One is a client-side SDK for doing these types of uploads. So you can just say, "Hey, upload this securely and safely, directly to my Firebase storage and the underlying Google Cloud storage bucket." And the other is the security rules that allow you to say, "Okay, this person can only upload to this path inside my bucket. They can only overwrite their own profile image. They can only be." I'm not--I don't know if this is out currently or if we're working on this now, but the ability to restrict file sizes, image sizes, things like that. So you can say, "A profile image can only be this big." Or things like that. So there's a lot of benefits in that, like I said before, these are things you could do. They're like authentication. You could do the OAuth flow or you could do this and save yourself a bunch of time. Same with this. Using just Google Cloud storage, you could have sent everything through your own server, gotten to the same point. But we just save you a ton of time. 
DOUG: Now, those authentication rules. Those are just like--very similar to, if not exactly the same as Firebase Database, real time database.
ABE: Yeah, so they're definitely similar. They're not the same syntax. They are specifically used for storage. Like, there's very different requirements for the storage rules versus the Firebase security rules. But if you've ever written database security rules, you'll feel very at home using this, like, very descriptive, nicely typed thing to say, "Oh, this location. I'm logged in as this user. I can write here. I can't." It's very, very sane, and you have all your rules in one place. So it's easy to look at and the same way--the same benefits you get from the database security rules.
MARK: Yeah, I know when--I used it for my presentation that I gave at I/O, and it feels like interacting with storage is almost very similar to interacting with, like the real time database.
ABE: Yep.
MARK: You end up with the same abstractions, and it's super nice to use. And probably one of the nicest ways I've ever used an interaction with the Google Cloud Storage.
FRANCESC: So in the same way that if something in the database changes you can watch that change and receive a notification. Can you do the same thing for storage?
ABE: Not really.
FRANCESC: Aww.
ABE: What you can do is, you can say, "I'm gonna upload this." And then you'll have a location in the real time database. And when your--when your upload is complete, you, you know, flip a switch, say, "There's a new version." And everyone can update. So we don't have the ability to do that type of updating today.
FRANCESC: Okay, 'cause that's something--yeah, I could have [inaudible] thinking about that. 
DOUG: There's one cool thing you can do with Storage. So on the client SDK side, you can do--you can kick off an upload, and if it's gonna take a long time, or if you lose connectivity, it will automatically resume it. 'Cause it's meant for large files. It's meant for, like, user-generated content.
MARK: Nice.
FRANCESC: Yeah.
DOUG: So if a user's taking a bunch of photos, and you want to upload them all, you don't have to, like, sit there and make them wait for it. You can, like, go into the background, complete in the background, and be sure that, you know, if you go into a tunnel, lose connectivity, that's fine. We'll restart, and it's also, like, fully secure. So everything's over a secure connection.
ABE: Yeah. Cloud--the Firebase storage is definitely a product that just feels like classic Firebase, I think, the most. It's built with things like that. Like, that resilience that the real time database had was always a focus. The ability--you can go through a tunnel and your app keeps working. Storage we wanted to be the same way, and it very much is. It goes back to the thing, you're like, "You could do that yourself." But it would be a pain.
MARK: Yeah. Absolutely. Okay, we're definitely running out of time now, but is there anything that you want to mention that hasn't been mentioned, or something you want to, like, you want a highlight a particular feature that you think is really impressive, or anything along those sort of lines?
DOUG: I think the whole platform is impressive. I mean, like, I'm serious. And I'm not saying this just because I spoke on this topic at I/O, but I think--
FRANCESC: Developer advocate.
DOUG: Yeah, I know. Yeah, I'm paid to say this. No, but it really is very impressive. When you look at all the components and how they work really well together. I, you know, I look at it and I'm like, you know, as an Android developer going back to, like, 2009. I had none of this. And now there's all this stuff, and so I'm, kind of, jealous. Like, if I had then what I have now, it'd be a completely different thing. So I'm a little jealous of all the people who are starting up new projects, who have this platform to build on top of that, you know, they're just gonna have such great suite of tools. And, you know, I really want to see what people build with it.
ABE: Yeah, yeah. It's absolutely crazy what we're able to launch, and just how much I would like to be out there using this. Like, it's just such a great suite of tools, and you can see in so many places that it was just built by people who were passionate and wanted to help people. And, you know, after I/O, we did this big launch. And everyone was, I think, expected to, like, take time off and, like, go relax. And, like, it was a week after I/O and people were still putting in these crazy-long hours, still working on stuff. Not because things were breaking, like, the launch went fantastically. But because they were obsessed with building something awesome. And I think it shows in the product. I think it absolutely does. That passion comes through, and this is just the beginning. So it's--I'm excited for the future. It's gonna be great.
FRANCESC: Nice. I think that sentence is a great way to finish the interview.
MARK: Absolutely. That was great. Yep.
FRANCESC: Thank you so much.
DOUG: Thanks for having us. 
ABE: It was good.
DOUG: Thank you. 
MARK: Thank you very much to Abe and Doug for joining us today. That was a super interesting conversation about Firebase. I am particularly excited about all the new features. I think they're gonna be great. 
FRANCESC: Yeah, I'm very, very, very excited. I saw a lot of people at Google I/O that were very surprised with the huge push that Firebase got. All the new features. I'm very excited about using them too.
MARK: Yeah, yeah. It's super nice to see the investment that Google's putting into them.
FRANCESC: Yeah.
MARK: It's--and I think it's really gonna pay off. Excellent. So you wanted to have a little chat about how do we debug stuff. 
FRANCESC: Yeah.
MARK: That's a very broad statement. What do you--what do you mean there?
FRANCESC: It is a very broad statement, but basically, the question was something around, "Okay, so something's wrong with my application..."
MARK: Yep.
FRANCESC: "And I'm not very sure what it is. What are my options, like, what do I do?" 
MARK: Okay.
FRANCESC: And basically, the answer could be something like, "Well, write more unit tests." Right? But the problem is that what is--what if what is going wrong, it's only going wrong in production, you know?
MARK: That happens.
FRANCESC: That happens.
MARK: That happens.
FRANCESC: Sadly, happens very often, that it works on my machine. It's not a thing, really. So what I wanted to--like, basically, the answer I wanted to give to this was, "There's a lot of different things that you can do to, basically, investigate what is the problem in application production." And most of them are actually under this feature set that we call Stack Driver.
MARK: Yep. 
FRANCESC: So Stack Driver has a bunch of things that you can do. One of them, the first one, is--okay, so if it's going--if something is going wrong, there's two different kinds of wrong.
MARK: Yeah. I was gonna say, like, what does--what does wrong mean, right?
FRANCESC: So one of the wrongs is you actually getting errors.
MARK: Yep. 
FRANCESC: And in that case, you're gonna see that Stack Driver has a way of monitoring those errors...
MARK: Yep.
FRANCESC: And putting them together according to some template. So you can actually get say, "Hey, you know, like, during the last hour, 500 occurrences of this specific kind of error happened." You can create alerts on that and get alerted when those errors go higher than some threshold.
MARK: Yeah.
FRANCESC: So it's very useful.
MARK: Yeah, Stack Driver error reporting is quite nice.
FRANCESC: Yeah.
MARK: And you can also do stuff like, "Oh, this error just happens, and it doesn't matter. Who cares?"
FRANCESC: Yeah, and it's like, just, "Shut up." Yeah.
MARK: Yeah. 
FRANCESC: Basically.
MARK: But otherwise, like, yeah. This one's actually really important and we need to get people out of bed for this particular one.
FRANCESC: Yeah.
MARK: So, like, you need that sort of error reporting.
FRANCESC: And that--when that happens, something that you may consider is, like, "Well, I'm just gonna go there." And maybe you have, like, a Java application, and I'm just gonna read the exception stack.
MARK: Yeah. 
FRANCESC: Stack?
MARK: Yeah.
FRANCESC: Exception stack?
MARK: Yeah, you're good.
FRANCESC: I don't do--I don't do exceptions. So I don't remember the name. So yeah, you can check the exception stack and understand what's going on, but that's sometimes not enough. And in that case, there's this really cool thing, and it's basically a debugger in production. And debugger in production sounds like an awful idea, 'cause putting break points in your production is something that you should never even consider doing, and please don't do that at home. But what we have--rather than--rather than break points, we have snapshot points.
MARK: Yep.
FRANCESC: So what you say is, like, "Hey, I want to know what are the values of all the call stack and the local variables and all the--all that stuff."
MARK: At, like, this snapshot, this particular point in time.
FRANCESC: And you can even add conditions.
MARK: Nice.
FRANCESC: So it's like, "When X equals 10, give me all the values of the stuff." And then with that, basically, you'll be able to kind of debug in production, but without the cost of actually stopping any jobs in production, which is a really bad idea.
MARK: I'll actually put a little thing on here as well. It's super, super, super alpha...
FRANCESC: Yes.
MARK: But there is a plugin for Google Cloud Platform IntelliJ. And the integrated debugging stuff they've got for Java applications in that...
FRANCESC: Oh, yeah. That's true.
MARK: Is very, very slick. 
FRANCESC: Yeah.
MARK: Worth looking at. Probably not worth trying just yet, but worth keeping an eye on. 
FRANCESC: Yeah.
MARK: It's super interesting.
FRANCESC: Very cool. And yeah, on top of that, you also get the other kind of wrong which is things are just working but just very slow. And then, in that case, you have the performance insight analytics. So you're gonna be able to see what are the--all the calls generate from your request. So imagine that you get a request and rather than sending one datastore read operation, you send 1,000. Maybe there's something wrong in there. Maybe you send those 1,000s one after the other.
MARK: Yeah. 
FRANCESC: So concurrency, my friend. Those things are something that you can see very easily with the detailed performance insights and the analytics that Stack Driver provides.
MARK: Yeah, so Stack Driver Trace is also really cool, in that it can give you alerts when performance starts to degrade.
FRANCESC: Yeah.
MARK: It's not just a, like, a reactionary thing from, like, users sending you stuff. If you start to see--you can--that performance is happening. Like, you can set up alerts and say, like, "If performance on this website drops below a certain threshold." Or something like that. Then, you can be like, "Hey." You know, maybe you do need to get someone up in the middle of the night or at least send an email or do something.
FRANCESC: Yeah.
MARK: Super, super useful. 
FRANCESC: And there's actually a very good talk that if you're interested on this topic, you should definitely check it out. We're gonna have the link on the show notes, as usual. And it's called "Diagnostics: Spend less time diagnosing and more time developing."
MARK: Yep. I'll make one mention of one extra product, 'cause I think it's worth noting. 
FRANCESC: Sure.
MARK: It's the Stack Driver logging. Like--
FRANCESC: True.
MARK: Super basic, right? But it is a central place to send your logs. Like, for a lot of our platform as a service stuff, so App Engine, etcetera, that's just built in. Like, if I want to go see all my logs for any of my Kubernete apps or anything like that, I can just go right there. But I can also send, like, custom logs. There's API calls. I can do it over the REST. I can do it a whole bunch of different ways. And so, you know, like, log your applications. So if you really want to see what's going on inside your app, just old--good old classic text-based logs. You know, sometimes that just does the trick.
FRANCESC: Yeah, sometimes that just helps.
MARK: Yep.
FRANCESC: Cool. So I think that it's time to let us know what are you gonna be doing? Where are you right now? Like, let's travel into the future and say it's Wednesday.
MARK: Into the future. So right now I will be in Minneapolis. I will be between two events. So tomorrow I will be at Open Source North. After that, I will be at dev.Objective(). And then, yeah, later in the month I'll be in New York for another event, which I still don't have the details for. 
FRANCESC: Soon. One day.
MARK: Soon. One day that will come through. And yourself, where will you be?
FRANCESC: So right now, if I've been lucky enough not to crash my bike yet--
MARK: Yeah, don't do that. Please don't do that.
FRANCESC: No, I'll try not to. I'll be somewhere right around halfway from San Francisco to Los Angeles. Maybe in Pismo Beach eating some cinnamon rolls.
MARK: Ooh, very nice.
FRANCESC: Yeah, that's my hope. 
MARK: Really? Cinnamon rolls in the middle of, like, a massive bike ride?
FRANCESC: Exactly. I will not feel guilty for that.
MARK: Yeah, you know what? That's fair. You know what? That's totally fair. I totally--that sounds totally reasonable. 
FRANCESC: Yeah, but if, while I'm away, some of you miss my voice. I wanted to mention also, I just released a screencast of, basically, all the [inaudible] that I used today. And it's, like, 40 minutes, which is pretty long. But I think it's gonna be fun. There is 8-bit music in the middle to make it more--
MARK: It's really cute music, I have to admit.
FRANCESC: Yeah, so I'll add a link to the show notes too. So you can check it out and let me know what you think.
MARK: Yep. And now, we haven't mentioned it in a while. 
FRANCESC: Oh, yeah.
MARK: If people want to get in contact with us--
FRANCESC: Let's see if I am able to remember all of this.
MARK: All right, so if people want to reach us on email.
FRANCESC: Campoy--no, I was gonna say--
MARK: That's your email address.
FRANCESC: I was gonna say my email. gcppodcast--no, hello@gcppodcast.com.
MARK: There we go. 
FRANCESC: There you go. 
MARK: So, hello@gcppodcast.com. If they want to reach us on Reddit?
FRANCESC: That's /--no, /r/gcppodcast?
MARK: Yeah, if they want to reach us on Twitter?
FRANCESC: GCPPodcast--@GCPPodcast.
MARK: There we go. If they want to reach us on Google+?
FRANCESC: +GCPPodcast?
MARK: Nailed it. And we also have the Slack channel #podcast in the GCP community as well.
FRANCESC: Indeed. And I feel like I'm forgetting something.
MARK: I don't think so.
FRANCESC: No? Okay. 
MARK: No.
FRANCESC: Well, that's pretty much it.
MARK: That's pretty much all the avenues.
FRANCESC: Yeah. Oh, the webpage, gcppodcast.com. 
MARK: Oh, that's true. That's got everything on it as well, in case you need any of those resources.
FRANCESC: Great, well, thank you so much, again, this week for joining me on this amazing episode, Mark.
MARK: Yes, and thank you so much for joining me. Good luck with your biking next week. 
FRANCESC: Thank you, and talk to you next week. 
MARK: See you next week. 
{{< /transcript >}}