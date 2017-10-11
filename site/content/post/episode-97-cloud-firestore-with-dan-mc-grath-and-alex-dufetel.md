+++
audioDuration = "00:33:52"
audioFile = "Google.Cloud.Platform.Podcast.Episode.97.mp3"
audioSize = 49009812
categories = ["Firebase", "Firestore"]
date = "2017-10-04T01:07:49Z"
description = "Dan McGrath and Alex Dufetel join Francesc and Mark in the studio this week to discuss Cloud Firestore, the brand new, fully-managed NoSQL document database for mobile and web app development."
draft = false
episodeNumber = 97
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Cloud Firestore with Dan McGrath and Alex Dufetel"
image="/images/icons/firestore.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/S7SBzjYgaad"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/7490tq/episode97_cloud_firestore_with_dan_mcgrath_and/"
+++

[Dan McGrath](https://twitter.com/itcmcgrath) and
[Alex Dufetel](https://twitter.com/AlexDufetel) join [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic) in the studio this week to discuss 
Cloud Firestore, the brand new, fully-managed NoSQL document database for mobile and web app development.

<!--more-->

##### About Dan McGrath

[Dan McGrath](https://twitter.com/itcmcgrath) is the Product Manager for Cloud working on databases such as Cloud Firestore. Dan has spent the last decade working in product & engineering for large scale database systems. He has a background in banking software, databases, and information security.

##### About Alex Dufetel

[Alex Dufetel](https://twitter.com/AlexDufetel) is a Product Manager for the Firebase team at Google, working on Backend-as-Service products such as the Realtime Database and Cloud Firestore. Alex was previously Director of Products at Fuze, a video conferencing and enterprise communications provider and, before that, a co-founder of LiveMinutes, a real-time team collaboration app. 

##### Cool things of the week

- Extending per second billing in Google Cloud [blog](https://cloudplatform.googleblog.com/2017/09/extending-per-second-billing-in-google.html)
- PHP 7.1 for Google App Engine is generally available [blog](https://cloudplatform.googleblog.com/2017/09/php-71-for-google-app-engine-is.html)
- Java 8 on App Engine standard environment is now generally available [blog](https://cloudplatform.googleblog.com/2017/09/Java-8-on-App-Engine-Standard-environment-is-now-generally-available.html) [migration](https://cloud.google.com/appengine/docs/standard/java/migrating-to-java8)
- Kubernetes 1.8: Security, Workloads and Feature Depth [blog](http://blog.kubernetes.io/2017/09/kubernetes-18-security-workloads-and.html)
- Google Container Engine - Kubernetes 1.8 takes advantage of the cloud built for containers [blog](https://cloudplatform.googleblog.com/2017/09/google-container-engine-kubernetes-18.html)
- Announcing Cloud IoT Core public beta [blog](https://cloudplatform.googleblog.com/2017/09/announcing-Cloud-IoT-Core-public-beta.html)

##### Interview

- Cloud Firestore [announcement](https://firebase.googleblog.com/2017/10/introducing-cloud-firestore.html) [site](https://firebase.google.com/products/firestore/) [docs](https://firebase.google.com/docs/firestore/)
- Cloud Firestore server sdks [docs](https://cloud.google.com/firestore/docs/)
- Extend Cloud Firestore with Cloud Functions [docs](https://firebase.google.com/docs/firestore/extend-with-functions)
- Cloud Firestore for Realtime Database Developers [blog](https://firebase.googleblog.com/2017/10/cloud-firestore-for-rtdb-developers.html)
- Firestore Discuss [google-group](https://groups.google.com/forum/#!forum/google-cloud-firestore-discuss)
- Firestore Realtime Database [site](https://firebase.google.com/products/realtime-database/) [docs](https://firebase.google.com/docs/database/)

<div style="text-align: center">
  <a href="https://firebase.google.com/products/firestore/"><img src="/images/icons/firestore.png" style="margin: auto;"></a>
</div>

##### Question of the week

How do I import/export data from my Cloud Datastore?

- Exporting and Importing Entities [docs](https://cloud.google.com/datastore/docs/export-import-entities)
- Scheduling an Export [docs](https://cloud.google.com/datastore/docs/schedule-export)

##### Where can you find us next?

Francesc just released a new [#justforfunc](http://justforfunc.com) and he'll be presenting at [Go Meetup London](https://www.meetup.com/Go-London-User-Group/events/243800263/), [Velocity London](https://conferences.oreilly.com/velocity/vl-eu), [Google Cloud Summit Paris](https://cloudplatformonline.com/Summit-Paris-2017.html) and [Devfest Nantes](https://devfest.gdgnantes.com/)

He is heading to Australia for [GDG Devfest Melbourne](http://gdgmelbourne.com/) and [Game Connect Asia Pacific](http://gcap.com.au/) and will be hanging out at [Unite Melbourne](https://unite.unity.com/2017/melbourne) and [PAX Australia](http://aus.paxsite.com/).

{{< transcript "FRANCESC: Hello, and welcome to episode number 97 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hello, Mike. How are you doing?" >}}

MARK: I am very well. How are you doing today? 

FRANCESC: Pretty happy. Back from Chicago. You're back from your favorite conference of all time. 

MARK: Strange Loop. 

FRANCESC: Yes. 

MARK: Yes. And we're in the same place at the same time. 

FRANCESC: Yes. I don't see new Strange Loop t-shirt. 

MARK: I was wearing it yesterday. 

FRANCESC: OK. That's why. 

MARK: That's why. 

FRANCESC: Good. Good. Not using the same t-shirt over many days. 

MARK: Yes! 

FRANCESC: Anyway, so today we're going to have something really special because two managers from the Firebase team are here to talk about something that was announced yesterday. 

MARK: Yes, we're pretty quick. Cloud Firestore. Dun dun dun! 

FRANCESC: Which is an amazing thing. It's basically if you love Firebase Realtime Database, it is basically something similar but even more powerful. So if you have huge scaling needs or you need to do a really cool filtering-- stuff like that-- Cloud Firestore is for you. 

MARK: Yes, and if you want that Realtime Database goodness as well, it's pretty awesome. 

FRANCESC: It is really, really cool. And we're going to have both Dan McGrath and Alex Dufetel. They're going to tell us all about it, and after that, we'll have our question of the week, which is not about Cloud Firestore but about Cloud Datastore. 

MARK: Yes, we're going to have a quick chat about-- I've got stuff in Datastore, but I'd really like to be able to export it maybe so I can use it locally or in other things. How do I do that? 

FRANCESC: Yes. Backup, stuff like that. Maybe you can-- you want to export it into BigQuery or whatever. Many ways of doing it, and we have something new that we're going to discuss on that. But before all of this, we have our cool things of the week. And the first one is something that I think is really cool that we announced and like, oh, by the way, we are announcing per second billing Google Cloud Platform. That was like, OK, we've done that. Good. I find it's a very nice blog post. Go read it, and let us know what you think. I think it's very well-written. 

MARK: Yes, I agree. I like it. I like it a lot. Actually it's cool the one thing I like about it is it does talk about the difference between per minute and per second billing. Going from per hour to per minute, the amount of money that you're going to save is quite large whereas going per minute to per second, nah. 

FRANCESC: Yes, it feels just like with one you can buy coffee. With the other one, you can buy a coffee machine. 

MARK: Yes, I love that. I love that. 

FRANCESC: So, yes, it was really cool. Previously, the only things that were built per second were actually persistent disks and think there's also the use discounts on GP use. But now it is basically all of the things. So you have Compute Engine, Container Engine, Cloud Data Prog, App Engine Flexible. And the cool thing is that this was announced as something that is going to be implemented but not really. It was September 26 was like, oh, by the way, this is effective now. So you're already saving money you don't need to do anything. It's just there. 

MARK: It's there. 

FRANCESC: Which is cool. Let's go to the second two cool things of the week actually. Two new languages are general availability on App Engine. So we have PHP 7.1, and I'm not a PHP expert by any way. But one of the things that is cool is that it is-- it has now support for Insight Driver logging and error reporting, which is really important because if you have an application running on production, being able to see what is going on and when it fails understand how it failed. It is really important Insight Driver helps you with that. 

MARK: Yes. 

FRANCESC: And then we also have Java 8. 

MARK: Yes, Java 8, very simple and obviously something people wanted for a very long time. 

FRANCESC: Lamb does. 

MARK: Yes, but now that means if you want to use Java 8 basically, just add Java 8 line your App Engine dash web dot xml file, redeploy your application, and you're pretty much good to go. It was pretty cool during the beta release, they continued to enhance the performance of the runtime such that so many customers were able to see benefits going all the way through on that platform. But now you can use Java 8 

FRANCESC: Yes, and something that is mentioned quite quick, but it I think is really, really important is the fact that during-- with Java 7, there was a lot of limitations among other things on security on the classloader. And that limited the number of classes that you could load. So there was that whitelist of classes or Java classes that were supported. That has been removed, and the same thing for the usual threat execution, which I wonder how unusual that was. 

MARK: I wonder what that means. There's a story there. 

FRANCESC: But, yes, those two things have been completely removed so App Engine with Java 8 is basically just Java 8 on App Engine. 

MARK: Yes, so you can use JV 9 fully outbound GRCP connections. You can do all sorts of cool stuff. 

FRANCESC: Yes, very, very cool, very excited about that really. 

MARK: Awesome. So, of course, one of my favorite topics, Kubernetes. Kubernetes 1.8 is now been released. This time it's more-- it looks like spotlight on security, workload support. See some new features in the r back. I'm pretty excited. Crun jobs finally have come out of alpha and now beta. That makes me super happy. 

FRANCESC: It is good that it makes you happy, but it feels like something so obvious and simple. But if you need it-- 

MARK: It's useful. It's a thing that you need to do across a cluster machine once. It's now in beta. That's great. So there's a lot of work there being done for actual data storage, things like that, if you want to do e-value stores or some kind of storage engine, stuff like that, that's the stuff that's really been solidified. So, yes. Another great release from the Kubernetes team rolling that out, really doesn't have to be big and splashy. Just another good thing. 

FRANCESC: And congratulations to the Kubernetes community because the pace at which they released new features is amazing, so congratulations to them. 

MARK: Now, one thing that is cool if you run on GK and you run on OS, there is some new stuff on OS. The one thing I will mention-- we'll link to the blog post-- it's a bunch of stuff. But now if you go into the Cloud console, we have a bunch more of like doohickeys that you can basically look at. So there's a lot more information that you can see about what's running inside containers. And you can basically start doing development tasks inside the UI. There's improved integration with Stackdriver and Cloud Shell. You can have a look in the blog post, but there's some pretty sweet stuff in there. 

FRANCESC: Cool. And for the last cool thing of the week that we're going to mention really quick, it is the fact that we are announcing Cloud IOT Core public beta. And we will have an episode on Cloud IOT. So we'll not get too much into detail but basically if you are managing a fleet of devices, IOT devices, and you need to manage them, manage the certificates, make sure that the connection is safe, and all of these things and that you are able to connect with all of them and gather metrics from them, IOT Core is exactly for this use case. And check it out. It is now public beta, so it's definitely the moment to go play with it and let us know what you think. 

MARK: IOT all the things. 

FRANCESC: IOT all the cores-- things. 

MARK: Yes. 

FRANCESC: Cool. 

MARK: Sweet. So why don't we go have a chat with Dan and Alex and talk all about Cloud Firestore. 

FRANCESC: Sounds good. Let's do that. So I am very excited to welcome two product managers from Firebase, both of them working in the Cloud Firestore team, Dan McGrath and Alex Dufetel. How are you both doing? 

ALEX: Excellent. 

DAN: Good morning. 

MARK: Hello, 

FRANCESC: Good morning. 

ALEX: Doing well. Good morning. 

FRANCESC: So we're going to be talking about the latest product that was launched yesterday for Firebase, which is Cloud Firestore. But before we get into all of the cool details about this new product, what don't you tell us a little bit about yourselves, what you do at Google. Let's start with you, Dan. 

DAN: OK. I'm a product manager on the Cloud Firestore team also working on Cloud Datastore, and before that I was on Google Drive. 

ALEX: So I'm up here. I'm on the Cloud Firestore team as well. I also work on the Firebase Realtime Database. And prior to joining Firebase, I actually ran and sold a company that was powered by Firebase products, which I'll probably touch a little bit on later. 

MARK: Cool. All right, so we're here to talk about Firestore. Clearly Firebase didn't have enough cool things. So we're just going to add one more extra cool thing. Who wants to tell us an overview level what is Cloud Firestore? 

ALEX: So Cloud Firestore is a fully managed NoSQL database. It comes as a second database offering in the Firebase portfolio. So the users will now have two databases that they can choose from-- the Realtime Database and Cloud Firestore. 

FRANCESC: So you mentioned is that non-relational database, which makes me think about Bigtable. But I'm also assuming that it is-- it has all the goodness from the Realtime Database, so it's still that Realtime nature of it? 

DAN: Right. So stepping back a little bit, Cloud Firestore addresses many of the limitations of the Realtime Database. The Realtime Database has long been the flagship product of Firebase. It was among its first offering of products. And it solved many, many hard problems that developers have. One, it makes it very easy to imagine scale your back end. And it powers-- allows developers the power of Realtime features, which are without proper tooling very difficult to build. And it also allows for it to build offline ready apps. 

The problems with the Realtime Database is that as we scaled-- and the Realtime Database is really been is-- is a very successful product with hundreds of thousands developers using it. But as the database scaled and as we've started having more usage, usage patterns evolved. And what we saw is people using the database for across all their app needs, not just the Realtime bits. 

And as they are doing so, they really hit two different types of limits. The first is around data structuring and querying. And the other is around scalability. What happens with the Realtime database is that if you want to build very sophisticated apps and access your data in very sophisticated ways, you sometimes have to structure it in convoluted ways. And the other thing is beyond a certain limit, it scales very well. But beyond a certain limit, you need to start creating shards. And those are the problems-- the core problems that Cloud Firestore solves. 

FRANCESC: Cool. So could you tell us a little bit more about where those limits are more or less so our audience can have an idea of whether they should be using the Realtime Database or Cloud Firestore? 

ALEX: The scalability limits of the Realtime Database is most often expressed as the number of concurrent users that you can have. And those are approximately 100,000. It's not really-- we put this is a hard limit. You may actually hit some scalability issues before that. But most of the time this is where you can reach. 

FRANCESC: 100,000 concurrent users. 

ALEX: That is a lot. 

FRANCESC: That is a lot. 

[INTERPOSING VOICES] 

Yes, That is-- yes, that's a big party. Let's talk a little bit more about what people were doing with the Realtime Database and how that motivated this Cloud Firestore story. You mentioned that the way you were modeling data before was sometimes awkward. Could you talk a little bit more about that and how Cloud Firestore is different? 

ALEX: Right. So first I'd like to start with some of the things that are similar with the Realtime Database. 

FRANCESC: Good idea. 

ALEX: So first, like the Realtime Database, Cloud Firestore features rich client SDKs that allow you to build directly from web, iOS, and Android. And that's really a big deal because it allows you to access your data directly from your clients, and it basically allows you to not have to build a proxy layer to do all the access control, the data validation, and the delivery of your data to your app. So it saves you a lot of time. This is made possible in the back end by a set of security rules that developers can define that basically allow you to define who and how your data can be accessed. So along the way, this model of client SDKs with rules also makes it much easier to build more secure apps. 

The second thing that is similar with the Realtime Database is that Cloud Firestore allows you to fetch your data in real time. Now, this is actually a very, very big deal. On the surface, you may think that is great because it allows you to build Realtime functionality. Typically you want to build a collaborative whiteboard or you want to build a messaging app and having a Realtime Database for that is really cool. 

DAN: It's more-- that's true. The advantages of having a Realtime Database extend way beyond that. In particular, one of the things that allows you to do is to have-- just build much more reactive apps. The other thing is nowadays you-- very often you need to sync your data across potentially multiple devices. And you get that out of the box with the Realtime Database. 

MARK: Does this also work, say, offline and online at a Realtime Database had that as an option as well. 

DAN: Right. So actually that is one of the features that I think our group of developers testing the Cloud Firestore so far has been most excited about because it's something that's very complicated to build as a developer, because you need to build all the sync logic, the conflict resolution logic, and Firestore does this completely behind the scenes. It does this for Android, for iOS, and now it does this for web as well, which is unique and wasn't available for-- or the Realtime device. 

ALEX: For those listening, one of the things that is really powerful with this is there's really two things to offline. One is the vanilla use case, which is I want to use my app offline purely. Say I'm going on the plane. I have no Wi-Fi. I want to use my app for a couple of hours. And then when I reconnect, all my data gets synched back. But there's another aspect, which is just as important, is what we call latency compensation. 

And what that is is basically we switch between offline and online behind the scenes for you so that we can compensate for network flakiness. So say you're in the airport. You're out-- you have poor Wi-Fi. What typically happens with the normal app is your app slows down as your requests slow down. With Cloud Firestore, what happens is that we automatically serve you what's in the cache or we cache your writes so that to wait for your network to be back to sync those changes. So as a user, your app continues working beautifully. 

MARK: And that's a new feature? 

ALEX: No latency compensation was available for the Realtime Database. But now it's available for web as well. 

FRANCESC: Cool. So now is available for web as well with Cloud Firestore or with-- 

ALEX: With Cloud Firestore 

FRANCESC: Cool. 

MARK: So just back to the data model question. 

ALEX: Yes. So Cloud Firestore features a familiar collection and document model. And this model is architected with-- it has a little bit of a twist over typical question documents because it allows you to very easily structure data hierarchically. And the reason why this is important is that it allows you to tie related data together. And as we've seen, this is like the most intuitive way to store your data. And what we've learned with the Realtime Database is that it is extremely important that the intuitive design patterns are also the right ones. This has two effects. 

One it considerably accelerates the learning curve when you're trying to use the product. But even more importantly, it prevents you from having to re-architect your data as your app grows. So it's something that we're very excited about. 

The second thing that we're very excited about is that this data model comes with very expressive queries, which is really new compared to the Realtime Database, which had a very, very basic querying language. And last but not least this-- these queries are extremely performance. So we've actually architected the database in our queries in a way that all queries scale with the result set in all the dataset. So that means that if you're querying-- fetching one result out of 100 or out of 100 million, you'll get the same performance. 

FRANCESC: Nice. 

MARK: That's really nice. 

FRANCESC: So could you talk a little bit about the query capabilities of both the Realtime Database and Firebase and Cloud Firestore? What kind of things can you do? 

ALEX: So typically with the Realtime Database, you were limited to a filter on a single property. 

MARK: OK. 

ALEX: With Cloud Firestore, you can filter on multiple properties. You can mix equalities and inequality filters. You can do offsets. You can do cursor positions. You can do quite a bit of fancy things. 

MARK: Can you do aggregations if you use this report or it's not really that kind of tool? 

DAN: No, you cannot do aggregations. 

ALEX: You can do small aggregations on the client side, taking into account the scalability factor of returning result sets rather than dataset sides latency. 

FRANCESC: Cool. So you mentioned that when you're doing filters, you're doing filters on properties among other things. Those properties are-- is there a schema for the people that don't know them much about-- there's NoSQL, so I'd say no. But is there somewhere a list of all the properties? 

DAN: So like you mentioned it's really a schemaless database. So that means every document can have its own independent schema. You can get a list of fields back from each document and query against them, but it makes it really easy to continually evolve your app as you add new fields to what you don't need to go back and alter tables and wait for things to rebuild. 

FRANCESC: Cool. 

MARK: Awesome. All right, so this sounds super cool. I'm going to ask the question as well. Is there, apart from the client side, is there ways of interacting with that on the back end? Is there a server integration part? 

DAN: Yes. Absolutely. We actually have a set of server SDKs you can use whether it's compute VMs or a Kubernetes cluster or even take you running locally on your machine. So we have got Java, Python, No JS, and Go Server client libraries available. 

MARK: Cool. So what are those server-- or back end is that case useful for? What kind of use case have you seen people using them for? 

DAN: Many different ones. Two quick examples. Integrating with the existing system. So you're writing a new mobile app and you want data updates to be reflected out into your mobile app or website, you can do that via the server SDKs. The other big one is offline big batch processing. You want to update something or add new data into it. That's very easy to do. Just spin up a compute VM and off you go. 

MARK: And since Server List is the new hotness, is there some sort of Cloud Function type thing going on? 

ALEX: Sure So Cloud Firestore allows you to integrate with Cloud Functions, allowing you to trigger code on writes and deletes. 

MARK: And edits? 

DAN: And edits. 

[LAUGHS] 

MARK: Excellent. All right, cool. So what does the development experience look like? Is this integrated in the usual Firebase tooling? How do I-- if I want to play with this thing, what am I writing? 

ALEX: So first if you want to play with this, head to Firebase, create a project, and then download-- so you can either use it from the client SDKs, iOS, Android, or web or the server SDKs we were talking about. Just download the SDKs, load your config, and you're ready to go. 

MARK: That's it. 

ALEX: That's it. 

DAN: Pretty much, yes. 

FRANCESC: Cool. 

ALEX: Very easy. 

FRANCESC: One of the things that I love about Firebase Realtime Database is that dashboard where you can see the data in real time and do-- if your program changes something, it just changes colors and stuff. That's amazing. It's-- for demos, the best thing ever. Does Cloud Firestore also support these kind of things? 

DAN: Yes, it does. It is something that we're also very excited about. I think when I first discovered Firebase many years ago, it was actually my co-founder had discovered it over the weekend, and he showed me his laptop with that dashboard and things changing in real time. He had created a whiteboard, so we were in collaboration. He had created a whiteboard. He showed me how you could move a square around the whiteboard, and those coordinates would update in real time through the data viewer. And then we were hooked. And it was funny. It was very funny. 

And this was really core to the experience of the Firebase Database, and so it really mattered to us that we'd be able to provide a similar experience with Cloud Firestore. So we did our best to do something as cool, and we look forward to having feedback on what we did. 

MARK: Awesome. So all of this sounds really great, and you talked about some comparisons between the Realtime Database and the new Cloud Firestore. Does this mean if I'm sitting down, I've got a Greenfield project and I'm going to build a thing, should I use Realtime Database? Should I use Cloud Firestore? Which one should I use? 

DAN: So we're recommending for new apps to use Cloud Firestore for developers who are comfortable using a beta product. That's the short answer. The long answer is you can use both products together. For most use cases, Cloud Firestore will be the best solution. For certain edge cases, the Realtime Database might be more-- make more sense to use from a cost-efficiency perspective. 

And the reason for this is that-- so first of all, the cost of operating Cloud Firestore and the Realtime Database are not the same because one is a replicated database and the other is not. So typically with the Realtime Database, one thing that-- something that is very, very efficient and cost efficient is to update small bits of data very fast. So say you're building a collaborative whiteboard, and you want to move a cursor around using that position, and you'll see that several times a second, this is something that the Realtime Database is well built for because you're only charged for outgoing bandwidth. So even if you're doing many, many document writes, it's still OK. 

This model, with Cloud Firestore, doesn't make as much sense because first of all, we're replicating your data for additional reliability, and that type of data doesn't make sense to be replicated in that use case. And Cloud Firestore charges per operation. So you're charged for every write and delete and edit, which is actually more intuitive for most use cases. But for this use case, for example, is less performance. So in this type of scenario, what we're telling users is it's perfectly fine to use both databases together. 

The other thing is both databases will live alongside in the Firebase console. And if you're using the Realtime Database today, it is totally fine to continue using it. We'll be supporting and developing both products going forward. 

FRANCESC: Cool. So when you say that you can use both of them at the same time, that doesn't mean that the data is replicating to both. It's that you can-- you have two different databases and you should choose either one? 

DAN: That's it. And you can also use Cloud Functions to replicate data from one place to another very easily. 

FRANCESC: So you mentioned real quick something that is actually really important for our audience, which is data replication. Could you tell us a little bit more about it? 

DAN: Yes, I'll take that one. Alex mentioned it's a replicated database. I'll tell you a little bit about how it works under the covers. It's what we call a multi-region replicated database. And that means whenever you write data, we're committing it not just to one or two data centers. We're committing it to multiple data centers across distinct geographical regions. So when you commit data, it actually is durable, even in the face of disasters. 

FRANCESC: Does that mean that those replicas also can take the reads. So if your audience is or your user base is distributed geographically, they will get the fastest? 

DAN: Yes, I think probably the most important thing to note first off is Cloud Firestore goes across Google's internal network. So that means we're going to in-bound your request from the closest point of presence, regardless of what country you're in, and use fiber optics to get you to the right data center to serve data. Each data center that we replicate to can serve data out of it. 

FRANCESC: OK, what about writes? Basically, my question is is it like master-- active like all of them are active and can take the reads and writes, or do you always need to go to one and the other one just reads replicas? 

ALEX: Yes, so we are in an active-active configuration. Our system will automatically route to where we think the quickest is going to be to start with though. 

FRANCESC: Nice. Do you get to configure how many replicas you get, or is that a fixed number that is the safe bet and that's it? 

DAN: So this is a fully-managed solution by Google. That means Google engineering takes care of everything for you-- node count, ram allocation, cluster management. It's all handled by us, us, so you just need to think about how you use the SDK. 

FRANCESC: He was mentioning before-- Mark was mentioning before, even to build something from scratch, which one should I be using, why you're not already using-- I'm already using Realtime Database-- Firebase Realtime Database. Under what conditions would you say that Cloud Firestore is something I should consider moving to? 

ALEX: So there's a couple of scenarios where it makes sense. One is if you want to implement new functionality that will require some complex querying, then definitely give Cloud Firestore a try. Also, I think if you're really interested in getting the benefits of the multi-regional data sync, then definitely use Cloud Firestore. And, again, you can use both together. So what we've been seeing with our testers so far, especially those who are using the Realtime Database, is that you can typically just implement a new feature, have some of that data live in Cloud Firestore, and use Cloud Firestore for that. 

MARK: And it also sounds like there are some web capabilities that you wouldn't necessarily be able to get inside Realtime Database. So that may be a-- 

ALEX: Yes, exactly. So if you want to power an offline ready web app, then, yes, definitely use Cloud Firestorm. 

MARK: So I'm going to ask the question because I do stuff in gaming community stuff. I would like to see Unity and C++ SDKs. Can we have some please? 

ALEX: So this has been an important request. It's definitely something that we would love to build. We don't have that in our immediate roadmap, but we care very much about that as well. 

MARK: Can people hassle you for it? 

DAN: They can. 

MARK: How? 

DAN: If there's something missing-- so we're going to have-- well, there is a discussion group you can join on Google Groups. Just look for Google Cloud Firestore discuss and just tell us, not just Unity and C++ SDKs that you might be looking for, but anything else that you think will really flesh out the experience for you. 

FRANCESC: And also we're going to be sharing both of your Twitter handles, so there you go. 

MARK: The people can bug you directly. 

ALEX: All right. 

FRANCESC: Just saying. Cool so we're running out of time, but we always like to give the opportunity to our guests to plug whatever you want to add, or is there anything that we left unsaid that you think is important our audience knows? 

DAN: So one thing I want to say. Get out there and play with it. You don't need a credit card. It's got a pretty awesome free tier, so you can use the SDKs today. See what it's like. See how it's going to work for your app without having to commit anything. 

FRANCESC: Nice, that's a really, really good point. 

MARK: That's a good point. Yes. 

ALEX: Yes, just echoing what Dan says. Our purpose is to make developers efficient and happy, so tell us what you think of the product and how we can improve it. 

MARK: That sounds great. If there are other any YouTube videos or blog posts or documentation, particular places people should go to learn about this stuff? 

ALEX: So there's a blog post on the Firebase blog, definitely read that. There's actually two blog posts. One generally talking about the product, one more specifically going into the differences with the Realtime Database. I'd recommend reading both. And then the product with an extensive set of documents. So definitely read up there. 

FRANCESC: Cool. We'll have links to all of those from the show notes. 

MARK: Fantastic. Well, thank you to both of you for joining us today on the podcast to talk to us all about Firestore. I think our listeners will greatly appreciate it. 

ALEX: Thank you. 

DAN: All right, thank you. 

MARK: Thanks again to Dan and Alex for spending such delightful time with us. Talk all about Cloud Firestore, a really, really cool project. I'm actually quite excited to sit down and play with it and see what I can build. 

FRANCESC: Yes, I'm also very excited about that last mention of, oh, by the way, you can try it for free. No credit card needed. 

MARK: Yes. 

FRANCESC: That makes it even easier to try, so I'm definitely going to play a little bit with it and see how he can help me build even better Realtime stuffs. 

MARK: Yes, I know and I love the-- there is a focus there I think more on the web side of things. 

FRANCESC: Yes. 

MARK: I definitely don't do that much mobile programming, so I think I'm really curious to see what I can do on the web side. 

FRANCESC: Yes, really, really exciting. 

MARK: Awesome, well, why don't we get stuck into our question of the week. I think this is an interesting one. So we're talking about datastore this time. Datastore's been around for a really long time. I've wanted to always be able to do imports and exports of data out of datastore. Datastore's proprietary. We built it. It's a thing. It's quite powerful. But maybe I want to pull data down for backups, or I want to put it in BigQuery or something like that. What tools-- what things do I have available to me there? 

FRANCESC: So this is an interesting one because it's been changing over the time and at some point. So datastore's beginning was just the way you store data from a pension. It was available only from a pension. And back then, in order to do backup or to export all of the data, what you had to do was to go into some console and run MapReduce, that would actually run MapReduce and you would see the process and you would end up storing all of this into some files in a Cloud Storage bucket. 

Now, the thing is that there was no API for this at all. So you had to go and do it manually. Now, that thing has been replaced with something that we call the manage, export, and import service. 

MARK: Ooh, sounds fancy. 

FRANCESC: Which-- it's fancy, but it's beta just so you know. 

MARK: OK, cool. 

FRANCESC: It's an important thing to know. And basically, it allows you to export and import data in a very, very simple way. And it's very exciting because this time rather than being only part of the console, it's more like what we do nowadays. So it's part of the API, which you can also use from GCloud directly. So super simple and you end up being able to download all the contents of your datastore, So then you can upload it to other places like-- let's say you want to upload it to BigQuery or whatever. Very simple do from there. You can also upload into Datastore . And they know that some people want to do these kind of things for QA. 

So you have a golden image or something like that where you get that far, upload it to Datastore, and then you start writing from there. This is nice I'm actually having a look through as well. And I'm seeing that there is-- looks it looks like IAM permissions as well to hook in here so that you can dictate who or even what services could then be able to import and export. So people who shouldn't be able to just go, oh, look I can import into production. That's fine. You'd have a lot of control over this. This looks actually really nice. 

FRANCESC: The only warning that I would give to anyone doing this is when you are doing a backup, you will be charged the price of reading those entities. So it's something to keep in mind. It is-- it makes sense because you're actually reading those entities. But keep in mind that if you have a huge database and you're taking backups every hour, that might be expensive. So take that into account, and be careful with that. 

MARK: Awesome. Well, Francesc, before we wrap up today, what are you up to? Where are you going? Is there a Just the funk? 

FRANCESC: There was first part of Just the Funk that I released last week, and next week I'll release the second part of the same Just the Funk, which is code review of some cool package, which I already forgot what it did. It was cool. 

MARK: OK, cool. We'll check it out. 

FRANCESC: No, it was a url shortener and how to do it-- yes it is a cool thing I remember. And, yes, after that, so I will be going to London. So in the week of the 17th through the 20th, it's going to be fun. On the 17th, I'm going to be speaking at the Go meet up in London. On the 18th, I'll be speaking in Velocity, London. On the 19th, I'll be speaking at Google Cloud Summit in Paris. 

DAN: Cool. 

FRANCESC: What about you? 

MARK: So I'm not going anywhere for about two or three weeks, which is wonderful. Then I'm off to Australia, Dev Fest Melbourne. I'll be there on the 21st of October, hanging out at United Melbourne. I'll be speaking at Game Connector Asia Pacific. And then I'll be at Pax Australia after that. 

FRANCESC: Cool. So, yes, if you see us around say, hello. 

DAN: Yes. 

FRANCESC: Let know. It was really cool to meet a bunch of people last week in Chicago that love the podcast. So thanks so much for all of you to say hello. Also please review our podcast on iTunes. We were told to say that so-- 

[LAUGHS] 

MARK: Are you going to tell them we had to say that. Yes, please review our thing on iTunes and give it stars. 

FRANCESC: Five stars. 

MARK: All the stars. 

FRANCESC: Or more. And also please get in touch with us if you have questions. We love questions of the week. Let us know if you have interest on having some specific topic that you'd like us to cover. Do you want us to talk talk more about server less or Kubernetes-- more about Kubernetes, I don't think that's possible any more. But whatever topic you're interested in, and in order to do that, you can get in touch with us on Twitter-- 

MARK: @GCPPodcast. 

FRANCESC: On Reddit? 

MARK: /r/GCPpodcast. 

FRANCESC: On Google Plus? 

MARK: Plus@GCP Podcast. 

FRANCESC: On Myspace? 

MARK: We don't have one of those, but maybe should. 

FRANCESC: We should have on MySpace-- wait. What else? We're on Slack. 

MARK: Slack at the Hash Podcast Channel on bit.ly/gcp/slack. 

FRANCESC: And then finally we have a webpage. 

MARK: GCPpodcast.com. 

FRANCESC: And then email. 

MARK: Hello! At GCPpodcast. 

FRANCESC: Perfect 

MARK: Sweet. Well, Francesc, thank you so much for joining me for yet another episode. 

FRANCESC: Thank you, Mark. And thank you all for listening. 

MARK: And we'll see you all next week. 
{{< /transcript >}}