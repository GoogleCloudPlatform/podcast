+++
audioDuration = "00:37:17"
audioFile = "Google.Cloud.Platform.Podcast.Episode.181.mp3"
audioSize = 54070235
categories = ["Maps", "Treks", "Places", "Routes"]
date = "2019-06-12"
description = "Your favorite Marks Mirchandani and Mandel are back hosting this week to touch base with Angela Yu about recent updates in Google Maps!"
draft = false
episodeNumber = 181
hosts = ["Mark Mirchandani", "Mark Mandel"]
title = "Google Maps Platform with Angela Yu"
image="/post/episode-181-google-maps-platform-with-angela-yu/images/hero/hero-EP-181.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/bztmor/episode_181_google_maps_platform_with_angela_yu/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Your favorite Marks [Mirchandani](https://twitter.com/markmirch) and [Mandel](https://twitter.com/Neurotic) are back hosting this week to touch base with [Angela Yu](https://twitter.com/wangela) about recent updates in Google Maps. As Angela describes Google Maps at a high level, it is your window into the real world, with coverage of Earth's land and oceans. Google works hard to keep that information updated with satellite pictures, street view Google vehicles, and even backpacks for hikers to record hard to reach areas.

The Google Maps API makes it easy for developers to use Maps data in their own projects. It can be used for something as simple as showing location to something more complicated, for example showing the user specific things around them to help them make decisions. Game developers can create rich experiences by building real-world gaming situations with Maps and augmented reality. Using the Places API can display parks, government buildings, and other interesting places beyond streets. And the Routes API can expand the user experience by providing directions, tracking drivers in real time, etc. Maps and Google Cloud together work well with BigQuery to search huge amounts of data and visualize them on a map. 

In the future, Angela is particularly excited about how ridesharing apps will continue to use Maps and Routes to optimize their businesses. She also looks forward to more augmented reality projects beyond gaming, where data, directions, and more are overlaid on the physical world.

<!--more-->

##### Angela Yu

Angela Yu is a developer advocate for Google Maps Platform.  Throughout her career, she has geeked out on voice recognition, mobile app development, and IoT. You can find her trapped in escape rooms or on [Twitter](https://twitter.com/wangela).

##### Cool things of the week

* Google to acquire Looker [blog](https://cloud.google.com/blog/topics/inside-google-cloud/expanding-our-platform-for-business-intelligence-and-embedded-analytics)
* New Translate API capabilities can help localization experts and global enterprises [blog](https://cloud.google.com/blog/products/ai-machine-learning/new-translate-api-capabilities-can-help-localization-experts-and-global-enterprises)
* Google Cloud networking in depth: Cloud CDN [blog](https://cloud.google.com/blog/products/networking/google-cloud-networking-in-depth-cloud-cdn)
* Save money by stopping and starting Compute Engine instances on schedule [blog](https://cloud.google.com/blog/products/storage-data-transfer/save-money-by-stopping-and-starting-compute-engine-instances-on-schedule)
* An update on Sunday’s service disruption [blog](https://cloud.google.com/blog/topics/inside-google-cloud/an-update-on-sundays-service-disruption)

##### Interview

* Google Maps Platform [site](https://goo.gle/mapsplatform) [blog](https://goo.gle/gmp-blog) [docs](https://goo.gle/gmp-docs)
* Google Maps Places [site](https://cloud.google.com/maps-platform/places/)
* Google Maps Routes [site](https://cloud.google.com/maps-platform/routes/)
* Google Maps Treks [site](https://www.google.com/maps/about/treks)
* Visualizing data from Firebase on a Google Map [site](https://www.hackster.io/PaulTR/bike-route-data-gatherer-12a831#toc-visualizing-data-14)
* Google Maps Platform Codelabs [site](https://goo.gle/maps-labs)
* BigQuery [site](https://cloud.google.com/bigquery/)
* BigQuery Public Datasets [docs](https://cloud.google.com/bigquery/public-data/)
* Deck.GL [site](https://deck.gl/#/)
* Google Maps SDK for Android Beta [site](https://developers.google.com/maps/documentation/android-sdk/v3-client-migration)
* Popular Antipodes on Google Maps [site](https://www.google.com/maps/d/u/0/embed?mid=1VxP6QegT4W3UGybiKXj3ZSq3vPE&ie=UTF8&hl=en&msa=0&ll=-3.81666561775622e-14%2C-132.890625&spn=152.979774%2C351.5625&z=1&output=embed)
* The True Size of countries [site](https://thetruesize.com/)
* Google Maps on Github [site](https://goo.gle/maps-libraries)
* Google Maps Client Libraries [site](https://developers.google.com/maps/web-services/client-library)
* StreetView Gallery [site](https://www.google.com/streetview/gallery/)
* Earth Engine [site](https://earthengine.google.com/)
* xkcd: Map Projections [site](https://xkcd.com/977/)
* Beautiful data visualizations using [deck.gl](http://deck.gl/) on Google Maps [demo](https://goo.gle/deckgl-maps-announcement) and [docs](https://goo.gle/deckgl-docs)

##### Question of the week

[What is helm, and how do I use it?](https://helm.sh/)

- GCP Podcast Episode 50: Helm with Michelle Noorali and Matthew Butcher [podcast](https://www.gcppodcast.com/post/episode-50-helm-with-michelle-noorali-and-matthew-butcher/)

    * Kubernetes Podcast [podcast](https://kubernetespodcast.com) and  [twitter](https://twitter.com/kubernetespod)
    * Kuberenetes [twitter](https://twitter.com/kubernetesio)

##### Where can you find us next?

Angela will be at the [Chrome Dev Summit](https://developer.chrome.com/devsummit/).

Mark Man will be at [Tokyo Next](https://cloud.withgoogle.com/next/tokyo/).

Mark Mirch will be customer filming for [Stack Chat](https://www.youtube.com/playlist?list=PLIivdWyY5sqJvwGd0PTzSx1j0cePX0INl) in NYC.

##### Sound Effect Attribution

* "Striking a Match" by Nebulousflynn of [Freesound.org](https://freesound.org/)
* "Bad Beep" by RICHERIandTV of [Freesound.org](https://freesound.org/)
* "Correct" by Tristan_Lohengrin of [Freesound.org](https://freesound.org/)
* "Spaceship Atmosphere 02" by RICHERIandTV of [Freesound.org](https://freesound.org/)
* "At the jazz concert Crowd laugh.wav" by Ftom_woysky of [Freesound.org](https://freesound.org/)

{{< transcript "[MUSIC PLAYING] MARK MANDEL: Hi, and welcome to episode number 181 of the weekly Google Cloud Platform podcast. I am Mark, and I'm here with my colleague, Mark." >}} 

MARK MIRCHANDANI: Hi, Mark. 

MARK MANDEL: Yeah, are you Mark Mandel or Mark Mirchianiani? 

[BUZZER] 

MARK MIRCHANDANI: Mirchandani. That's a good way to stumble through the fact that you don't know how to pronounce-- you know, I feel like I've done a lot of last name jokes here, though. But so I'm not going to hold it against you. 

MARK MANDEL: Yeah, you should. You should. You should give me grief for that for a long time. 

MARK MIRCHANDANI: It's a long last name, so Mark Mandyel, right? 

[BUZZER] 

MARK MANDEL: Sure, that would-- 

MARK MIRCHANDANI: With the y's in it and everything? 

MARK MANDEL: Yeah, that's fine. That's fine. That sounds good. Excellent. Who do we have joining us this week? 

MARK MIRCHANDANI: So this week-- 

MARK MANDEL: As I change the topic. 

MARK MIRCHANDANI: Yeah. So this week-- and I hope I pronounce her name correctly-- but it should be Angela Yu. 

[DING] 

MARK MANDEL: Yeah, I believe so. 

MARK MIRCHANDANI: Who we chatted with about the Google Maps platform, which I think a lot of people are familiar with Maps in general. But in this case, we're talking a little bit more about some of the recent updates that have been done there and how you can actually build some really, really cool ideas with Maps, right? Like it's more than just an API. It's actually a new way to approach thinking about building your app, or your website, or whatever it is. 

MARK MANDEL: Yeah, being able to use that local data and any information that they have in Google Maps within your own application is pretty awesome. 

MARK MIRCHANDANI: But before we get to that, we've also got to talk about our question of the week, which in this time will be a little bit about Kubernetes and what is Helm, the packet manager for Kubernetes. 

MARK MANDEL: So yeah, I think, Mark, you were just like, I don't know who this is, Mark. Can you tell me? So I was like, all right, cool. 

MARK MIRCHANDANI: I feel, yeah, I've talked about it before. And I've understood it at a high level. But then it kind of came up. And we'll talk a little bit more about this later. But it's like what is Helm, and why Helm? 

MARK MANDEL: Why is a thing? Cool. But yes, before we get into all of that, we do have our cool things of the week. 

[MUSIC PLAYING] 

Looks like I'm going first this week. Haha, excellent. So this week, we got several cool things. I'm particularly excited by this. We have announced that Google has entered in to a definitive agreement to acquire Looker. It's a unified platform for business intelligence data applications and embedded analytics. Basically, they make really pretty graphs that are really easy to understand. It's really nice. 

MARK MIRCHANDANI: Which a lot of people highly desire because I forget who it was saying it earlier. But they were basically saying, there's a lot of solutions out there for doing the actual analytics, the calculations. And that's all fine and dandy, but at the end of the day, someone's got to look at those and make decisions based off of it. And you can't do that without basically being able to visualize it or summarize it in a meaningful way. 

MARK MANDEL: Yeah, so very excited about this upcoming acquisition, so keep you updated on how it all goes. But yeah, it's going to be neat. 

MARK MIRCHANDANI: I think it'd be really cool. 

MARK MANDEL: Yeah, absolutely. 

MARK MIRCHANDANI: Speaking of new tools that people can get their hands on here at Google, we've just kind of launched out-- I saw a blog post earlier about the version 3 of the Translation API-- 

MARK MANDEL: Oh. 

MARK MIRCHANDANI: --that a lot of people are familiar with, right? You send it some text. You kind of send it some information, and it translates it. Well, now with the new version, it's actually super cool because you can kind of create your own glossaries. So that's really helpful for business-- 

MARK MANDEL: Fancy. 

MARK MIRCHANDANI: --specific logic and any terms that are tied into what you're trying to do. And you can actually specify which model you want to use. So whether it's Google's built-in models or if you want to provide custom ones, they're making it easier and easier to train your own models like AutoML, those kind of things. 

It's super awesome to kind of bring more customization. I think a lot of people have always wanted translation. And it's always been a little tricky because you have like deep, technical talks. And everyone's kind of mentioned all these products and translations. I don't know what those are. Well, now you can kind of specify those and really get some really cool results. 

MARK MANDEL: That would be cool. I can a lot of uses cases for that-- games, but. 

MARK MIRCHANDANI: Not that we make up a lot of words, when you have to go fight the space alien. I want to throw in brand names here because I know them. But I don't want to get in trouble for it. 

MARK MANDEL: Yes. But there's anywhere that you have a custom vocabulary I think is always useful. 

[ALIEN SPEECH] 

Well, in last week's episode, we talked about a Google Cloud networking in depth article. This week, there's a whole new one. It's Google Cloud networking in depth Cloud CDN. 

MARK MIRCHANDANI: Ooh. 

MARK MANDEL: So if you wanted to see basically how Google Cloud uses its points of presence and its edge locations to be able to cache and load balance your information at the edge, so that people can get faster access to it. And also how you can use the cloud CDM product and what features it has, so that you can take advantage of that as well explicitly within your applications. 

This is actually a really good little article. So it gives you some background and also tells you a little bit about how you can use the thing using Google Cloud's HTTPS load balancer and how to configure it, and sort of patents that you can use as well for that. 

MARK MIRCHANDANI: I mean, it's just like a great place, especially to start understanding, like if you're going to throw up something as simple as a website or if you want to do something much more advanced, like huge asset repos. Understanding a little bit more about CDNs is great. And I think there'll be more articles in that same vein about deep dives for networking. 

MARK MANDEL: Well, at least if we've said so in the podcast, they have to do it. 

MARK MIRCHANDANI: I mean, now they're obligated. 

MARK MANDEL: Now they're obligated. 

MARK MIRCHANDANI: Once this goes live. 

MARK MANDEL: That's it. 

MARK MIRCHANDANI: We might get in trouble for that. Speaking of last week, actually, we were also talking about ways to save money on Google Cloud. And one that just kind of came up again is very similar to the talk we had last week. So if you haven't seen that, go back and check it out. It's really cool. YouTube talked about how to save money. In this case, there's a really, really quick write up on how to turn on and off compute instances with functions. 

MARK MANDEL: Oh, nice. 

MARK MIRCHANDANI: So maybe if Kubernetes is too complicated for you, like it is for me, then it might make a lot of sense to do something a lot simpler, depending on your workload. Where you can basically just say Cloud Scheduler, which is basically managed cron, and you just say, OK, well, at 9 o'clock, turn my machine on. And at 5 o'clock, turn it off. 

MARK MANDEL: Oh, nice. 

MARK MIRCHANDANI: Super simple, maybe four lines of code. I mean, it just basically has Cloud Scheduler calling Cloud Functions, and that's about it. Super great to have, and the blog post kind of checks out the details there. So definitely a cool, cool simple way. 

MARK MANDEL: Nice, especially if there's just something you want to run once a day, for example. 

MARK MIRCHANDANI: Yeah, definitely extensible, too, right? Because the business logic might say start it up early, whatever it is. 

MARK MANDEL: Also some neat stuff. Finally, I just wanted to make mention-- unfortunately, last Sunday, we had an outage. There is an article that we have posted up on the Google Cloud blog talking about the outage and incident that occurred, including an apology from our team as well on that. It has some details of what happened around networking and network capacity. I will defer to the blog post for specifics. 

There is a post-mortem that has been said that we will be going through. And we will be looking into it further. But for those people who were affected, we deeply apologize. And we will be working on that further to make sure it never happens again. 

MARK MIRCHANDANI: Always a good thing to kind of read up on and kind of understand this is the real world. Things are hard. Problems happen. And so our team, obviously, is going to learn a lot from it. And hopefully, people out there can kind of read the details and see why it happened. 

MARK MANDEL: Exactly. 

MARK MIRCHANDANI: Well, enough cool things of the week. I think we've gone through a lot there. Let's get right into our interview, right? 

MARK MANDEL: Let's do it. 

[MUSIC PLAYING] 

So this week, very happy to have Angela Yu here on the podcast joining us, a developer advocate for Google Maps Platform. How are you doing, Angela? 

ANGELA: Hi, I'm well. Thank you for having me. 

MARK MANDEL: Thank you so much for joining us today. Joining both Mark and Mark. 

MARK MIRCHANDANI: Oh, don't worry. Mark's here. 

MARK MANDEL: Yeah. Yeah, you're here, too. It's OK. To talk to us all about Google Maps and the Google Maps Platform. So before we get stuck in, do you want to tell us a little about yourself and what you do here at Google? 

ANGELA: Yeah, absolutely. I'm a developer advocate. I think we've had developer advocates on the podcast before. 

MARK MANDEL: A couple. 

ANGELA: But really, what that means for me is I care a lot about how the developers experience our APIs. And as I'm out there talking with developers and learning how they use our APIs, I bring that back to the product teams. And I tell the teams what is important to developers, so that we can improve our APIs. 

MARK MIRCHANDANI: So that makes sense. But let's take just a high level step back here, just in case. Tell us what Google Maps is. 

ANGELA: I feel like that Virgin America video, the safety videos, like for the 0.1% that haven't used Google Maps. Google Maps is really your window into the real world. We have made a lot of investment in collecting all the data of what exists in our physical world all over the planet. We've tried to be as complete as possible, covering the oceans and the land masses. 

And we invest a lot in keeping that data fresh. So we're doing 25 million updates to our data a day. And that's updating what business is at what location or what's changed in the roads, or there's been some flooding-- all of that from just very tabular textual data about listings, but also visual data imagery. 

We've seen that we have satellite imagery for overhead. We have aerial imagery for more of the low altitude, like 45 degree angles of buildings. And we have Street View. You've seen the famous Street View cars driving around on the streets, capturing, really at that address level and at that building level, what you see on the streets. 

And something I didn't know before I joined Google Maps was not only are there Street View vehicles, but there are Street View backpacks for hikers to take. You can see this site called Street View Treks that you can see really amazing views of the world of areas that are really hard to get to, like the front face in Yosemite of-- what's that big rock? 

MARK MANDEL: There's a big rock? I don't know. 

MARK MIRCHANDANI: There's a lot of big rocks. 

MARK MANDEL: There are. 

ANGELA: Yeah. Yeah, like that, and the Himalayas. And basically, you can take a backpack. You can take a tricycle. We've-- 

MARK MIRCHANDANI: Is it El Capitan? 

ANGELA: El Capitan. 

[DING] 

MARK MIRCHANDANI: There we go. I just looked it up. 

MAN: Soaring over 3,590 feet, El Capitan is a bucket list destination overlooking Yosemite National Park. 

ANGELA: Clearly, I'm not a hiker. But we've enabled bringing that Street View 360 degree imagery experience out to the most remote corners of the world in order to give you any kind of window you want to see. 

MARK MANDEL: Nice. Well, as someone who grew up with a physically bound paper map that made me drive around-- 

ANGELA: The paper maps, yeah. 

MARK MANDEL: We had one called the Melways, because I lived in Melbourne, Australia. It's called the Melways. Thank you so much for getting rid of that for us. 

MARK MIRCHANDANI: Yeah, I think a lot of people have used Google Maps, I mean, hopefully to kind of replace some of the older mapping stuff. We have this live. I mean, like you were saying, you're pulling in a tremendous amount of data. But there's also a Google Maps API for other people who want to kind of pull in their own data, right? 

ANGELA: That's true. Yes, so the API allows you to bring all of that data that we've collected into your own apps. Because everybody has their own view of the world. It's not just what is out there and what is public. But you might care about where are you and where are the things that you care about, whether that's from a personal level, like the people in your life, or if you track your personal property if it's moving around. Or if you're a business and organization, and you want to track your physical assets out there in the world. 

MARK MANDEL: So what sort of things are people doing with the Google Maps API? What are some good examples? 

ANGELA: The really cool thing about working on the Google Maps API is it spans everyone, from the individual hobbyist developer to the largest enterprises. Because everybody has some reason to be interested in location. Google Maps API is kind of often the first Google API that a developer will use, just because as we're experimenting, we're learning new apps, it's really satisfying to pull in a map and have that show up on your app, whether it's on the web or mobile. And it's one of the simplest APIs to use. 

So in the beginning, individual developers can start using location data, just to show things like where is my user and show you that geolocation. And then you can broaden that, too. If you are an app that wants to show the user certain things around them that is not generally what the regular Google Maps app would show-- which would be a lot of businesses-- you might want to show them specific things, like EV charging stations or things that are specific to what the purpose of your app is. That is really useful to both tap into our database and/or maybe you have a custom database of your own of where things are geolocated that you want to show around the user. 

And also for all different kinds of users, you can use the information of what is around the environment or where things are located to help users make decisions. So if you're trying to decide, have some resources, and where should I concentrate those resources-- I want to find out where are they needed-- you want to be able to look at a map to find out where the most action is in order to deploy your resources to that location. 

MARK MIRCHANDANI: Like a ride share company, for example. 

ANGELA: Exactly, yeah. 

MARK MANDEL: Is this limited to if I saw it-- I know I've seen Google Maps embedded on a web page. Is it limited to that kind of view, or could I use the data in other formats? How does this end up being a user experience? 

ANGELA: Displaying a map is kind of the most popular way to use our API. But we also have a very rich database of places, so that includes businesses, but also just general places, like parks or government buildings. And all of that rich database is available through the Places API. 

And then there's also the Routes API that gives you access to things like the directions, whether through driving or walking or biking, and transit and roads. So you are that ride sharing company. And you're seeing a geolocation of one of your drivers, and they're nebulously off of a road. You can snap it to a real road that they must be on. And so all of those APIs are available through the Maps Platform. 

MARK MIRCHANDANI: So there's location. There's kind of like how you actually do routing, and then moving some things around. I think we've actually seen some pretty interesting use cases recently of games implementing this to create kind of an augmented reality experience as well. 

ANGELA: Mm-hmm. Yeah, real world gaming is a big trend. It was really popularized by "Pokémon GO." And from that, we have expanded our API to game developers to enable real world gaming, where there is a Playable Locations API, where game developers can identify where are good places for people to have real world interactions with things in the game. And last year, there were five games released using that API. And there will be a lot more this year. 

But one of the most successful ones is like "Walking Dead." So wherever you are, you can see zombie attacks coming. And you might have to collaborate with other players in order to defeat the zombies. So these are really fun things that you can do to bring that digital experience and the real world experience together. 

MARK MIRCHANDANI: Can we make sure there's a real zombie API just in case? Just in case that does happen. 

MARK MANDEL: Just in case. 

MARK MIRCHANDANI: It'd be nice to have a map saying, hey, go here. Don't go here. 

MARK MANDEL: Yeah. You want your zombie API as part of the Maps API that tracks all the zombies. 

ANGELA: Yes. Yes. I will definitely prioritize that feature. 

MARK MIRCHANDANI: Thank you. Appreciate that. Thank you so much. 

MARK MANDEL: And it sounds there's-- so there's a couple of games that have been using it. What other kind of trends have you been seeing of people trying to adopt this and maybe create some new experiences? 

ANGELA: Yeah. We say the problem of showing a map and dropping a pin on it has been solved for 10 years. So we're really looking at what are the new things that people are doing with it. Obviously, mobile has been bringing a lot of interesting use cases to how people use the Maps Platform. Because geolocation around mobile device is kind of critical information for anyone that's moving around. 

Beyond that, I come from, actually, an IoT background, Internet of Things. And this is the idea of connected things, not just phones and computers, but any asset could be connected to the internet. And especially when those things are out in the physical world, they all have location. And it's very important to whoever cares to connect to that thing to know where that is. 

So we've seen a lot of organizations, both from the enterprise to consumer realm, be interested in collecting data off of these things, mapping them so that they can show the status of things out in the world. And maybe many things in one area are all showing the same state or trending one way. And then they can make better decisions based on that. 

One example that I saw recently was one of our Google Developer experts. These are external developers that have used our APIs extensively. He has built a prototype of tracking bike-sharing bikes and where they're moving around. And he's feeding it to a Firebase database and then pulling that database information, displaying it on a Google Map. And that really shows the hotspots of where these bikes are actually being used. 

So then a bike-sharing company could use that data and better deploy where their bikes should be available. Because the worst thing is if they were to put them off in where they think the biking locations are, and nobody actually is trying to use it from there. That's a really interesting project that he open sourced it. And it's out there on Hackster. We can put a link to it in the show notes. But I think that's a really great example of using IoT data, displaying it on a map and being able to make a lot better decisions based on that data. 

MARK MANDEL: I think you brought up something interesting there, too, where you were talking about Firebase and the Maps API. Given that we're the "Google Cloud Platform" podcast, are you seeing interesting interactions or grouping of technology with Google Cloud with the Maps API mishmashing together? How does that look to you? 

ANGELA: Yeah. One of the biggest trends that we see is the big data visualization. And we have a really great Code Lab that shows you how to query big data from the query and bring that into a Google Map. So then any data that you have that has a location aspect to it can then be put on a map. And you can process really huge data sets, and be able to visualize them, and really communicate and tell stories about what is important in that data, that you just couldn't really surface before. 

One of the really interesting things in big data, there's the BigQuery public data sets. If you don't have your own data set, you can play with these public data sets and do really interesting things, just to practice that muscle and see what you can do in terms of data visualizations of location based data. But there is also an open source library called deck.gl that lets you build really beautiful data visualizations. They have all these layers that you can put over a Google Map-- 

MARK MANDEL: Oh, interesting. 

ANGELA: --that are specialized for different kinds of data. If you had the routes of-- one of the public data sets is the New York City taxi and limousine services. And all of the trips that the taxis have been taking, you can use their trips layer to actually draw on a map the kind of time lapse view of the trips that all of these taxis were taking in the time period. It just works really well, and it handles huge data sets really well. So that's one of the things that we announced at I/O, was integration with deck.gl that we're really excited for our developers to try. 

MARK MANDEL: Neat. 

MARK MIRCHANDANI: Very cool. Were there any other kind of cool announcements from I/O? 

ANGELA: From the Maps Platform side, we have a new SDK for Android that we've put out for beta. And so we're really looking for developers to try it out, give us feedback before we release the GA version. 

MARK MANDEL: What makes this particular version for Android particularly special? 

ANGELA: We have actually brought it out standalone from the Google mobile core, so that we can release more frequently. Basically, that takes us out of their release cycle and puts us on a more frequent release cycle. And there are a lot of rendering improvements for performance. 

MARK MIRCHANDANI: So with all those kind of use cases you were just talking about and how a lot of people can get their hands on it, what would you say is the coolest experience you've seen built with Google Maps, right? The visualization sounds pretty awesome. But think about what's the next step. 

MARK MANDEL: I mean, we had zombies. What's better than zombies? 

MARK MIRCHANDANI: I don't know if we can top zombies. 

ANGELA: Yeah. I think there are a lot of really complex things that are coming up in the world. And now it's possible to process these really complex decisions. So I'm really excited to see what's possible with-- ridesharing companies are really doing very complex routing with us. Because they not only have to go from point A to point B, but consider all these other stops in between and optimizations. 

And what I am most passionate about is augmented reality and seeing that go beyond just the gaming applications about augmented reality, but also how we see the data on the world around us overlaid. So one of the big things in the Android Google Maps app is the augmented reality walking directions, which really helps people navigate, especially in big cities, when they're trying to orient themselves. And augmented reality arrows that kind of show you exactly where to walk, those are very helpful. 

And I see a lot of more applications coming out for making those kinds of experiences, of showing you what you're looking for actually overlaid on your physical world. If you wanted to know kind of the weird stuff that we see, really whimsical things. And one of the most whimsical things that has kind of stood the test of time is this idea of making an earth sandwich. 

MARK MIRCHANDANI: What is an earth sandwich? Besides delicious, I'm sure. 

ANGELA: So it's kind of like the idea that every kid has of if I dig a tunnel all the way to the other side of the world, where will I end up? 

MARK MANDEL: Burnt alive. 

[SIZZLING] 

ANGELA: That idea of you being on one side of the world and what is on the other side of this sphere, this globe-- 

MARK MANDEL: Oh yeah. Got it. 

ANGELA: Those two points on the globe are called antipodes. And there are map tools that let you find antipodes of like from where you are. 

MARK MANDEL: Oh, cool. 

ANGELA: And most of the landmass, actually, the antipode is in the water. So there is actually only, I think, 4% the world that you could have a land to land sandwich. And so these maps were created to help people find antipodes-- New Zealand has an antipode in Spain-- for people to partner up and try to synchronize, so that they can put a piece of bread on one side, and a piece of bread on the other side. 

MARK MIRCHANDANI: Oh, and that's where the sandwich comes in. 

MARK MANDEL: Oh, that's fantastic. 

MARK MIRCHANDANI: Oh, that's brilliant. 

ANGELA: Yeah, and so there are videos where people document themselves putting a piece of bread on this specific latitude and longitude and their partner doing it on the other side. And they have successfully created an earth sandwich. 

MARK MIRCHANDANI: Oh, which probably would be-- there's going to be a lot of disappointed six-year-olds out there that hear that they can't-- they'll probably end up with water, though. 

ANGELA: Yeah. 

MARK MANDEL: Some galactic entity is just like, mm, good. 

ANGELA: Yeah, actually, with students, one of the most popular tools in the classroom is this website called The True Size. Because if you are a math nerd, you know that the maps we're used to seeing are very distorted to how the countries actually lay out on the globe surface. And so we are so used to seeing these flat maps that our ideas of the size of countries gets really distorted. And there's this interactive web page called The True Size, where you can drag a country to the equator or overlay it on any other country to compare their sizes and see how actually large or small they are. 

MARK MIRCHANDANI: What was your biggest surprise when you tried this? 

ANGELA: One of my biggest surprises was I didn't realize that Mexico is actually as tall as the contiguous US. And Canada and Russia look really huge. But actually when you bring them down to the equator, they're much smaller. I think Russia is still really big compared to other countries, but it's not as humongous as it looks on the flat map. 

MARK MIRCHANDANI: Yeah, I mean, there was an update. I don't remember when it was. But there was an update to Google Maps, the interface, where if you zoom out far enough, it's switched from that kind of standard Mercator projection into the globe one, right? 

ANGELA: Mm-hmm, yeah. That is just like it just switches to that satellite view. And it just goes to that really true representation of the world. It's funny that you mentioned Mercator projection. Because there's an xkcd comic that actually types you based on your favorite map projection. And if Mercator is your favorite, then you're kind of just like a lemming that goes along with whatever's fed to you in the world. 

MARK MIRCHANDANI: Well, I was going to say I love the Mercator projection for its nice, flat, and even distribution. But I guess I'm not-- I'm just wrong. 

MARK MANDEL: I'm impressed you know what the word Mercator is because I have no idea. 

MARK MIRCHANDANI: I took a geology class 15 years ago. I know things. 

ANGELA: You've paid attention. 

MARK MANDEL: Oh, actually, interesting question then. So we were having an actually conversation before we started about all the different latitude and longitude standards or how you track maps and stuff. If I'm using the Maps API, do I need to go take a geology class or something? [INAUDIBLE] geography or whatever it is that I need to be doing. 

MARK MIRCHANDANI: I do not recommend it. 

MARK MANDEL: Yeah, do I need to do that? Or does it make it simpler? Or how does that work? 

ANGELA: I think we've tried to make it as simple as possible. The latitude and longitude, I think you might be used to seeing it expressed in minutes and seconds in this [INAUDIBLE] 

[GUITAR CHORDS] 

--way. But when you actually use Google Maps on your computer or on your phone, you'll see latitude and longitude expressed in a decimal way. So it's still going to be the same first two or three numbers, like 122 degrees West. And then instead of having to convert in your mind to minutes and seconds, it's actually just decimal. 

MARK MANDEL: I just do that conversion in my mind all the time. It's just what I do for fun. 

MARK MIRCHANDANI: The formula's written on the back of your hand. It's fine. 

MARK MANDEL: Oh no, it's in my head. Yeah. No, that makes sense. And then, too, if I'm like, all this sounds awesome and I want to get started, where do I begin? Where should I go? 

ANGELA: One of the things that I have been really happy about since I've started is every time I talk to an external developer, they tell me the documentation is great. So I'd start with our documentation. We have a ton of tutorials on there. We have from the most simple just show a map to actually call a complex distance matrix to figure out all of the different times and distances of multiple routes to get from point A to point B. And all of that is provided in tutorials. We have code samples. We have code labs to teach you some of the most common tasks. And all of that is out there. 

On GitHub, we have a Google Maps organization that has a bunch of repos for client libraries and utility libraries. So on the regular Maps Platform, we have the JavaScript API, Android SDK, and iOS SDK. And we have a bunch of REST APIs. But in our GitHub organization, we have client libraries for Java, for Node, and Go, Python, and kind of almost anything that you might want to program in. 

MARK MIRCHANDANI: And so the process for someone to get started, just like any other API, they can just go to the GCP console, enable the Maps API, get the key, and then start with any of those tutorials, right? 

ANGELA: Yeah, and one of the great things about us is that we, on top of any credits that you've already gotten through Google Cloud Platform, you also get a $200 monthly credit recurring for the Maps APIs. So your first $200 of Maps API spend is free every month. And so that covers any kind of experimentation or development that you want to do, to just try things out before you actually go into production and get a lot of users. So with that, we try to encourage and enable more of that experimentation and playing around before it starts to cost you anything. 

MARK MANDEL: That sounds great. And it sounds like so that's being charged as a separate product. Is that billing unified with the cloud? Do I need to set up a separate account or anything like that? 

ANGELA: No, it's all built into your Google Cloud account. For any project that you set up, you just want to go into the API libraries or marketplace and enable the Maps APIs that you want to use. 

MARK MIRCHANDANI: So is there nothing else that a developer would need to know to get started? 

ANGELA: It's really self-explanatory. 

MARK MIRCHANDANI: That's a good claim to make. 

MARK MANDEL: Yeah. 

ANGELA: Yeah, we have a really great technical writing team. We invest a lot in keeping our documentation up to date. And I personally am really invested in keeping our samples updated. And all of our libraries and samples on GitHub are open source, so we really encourage the community to submit pull requests, open issues, let us know if things are not working for them. Or if they have ideas for ways that our libraries could perform better, have at it. 

MARK MANDEL: What's a demo you wish someone would build? 

ANGELA: Hm. One of my pet projects is with augmented reality, showing names and ratings on buildings overlaid right around you. Because whenever I travel to a foreign country, and it might be harder for me to understand or it's a very dense place, it can be really hard to match up an address to a building that has no numbers on it. 

MARK MANDEL: Right. 

ANGELA: So having that kind of translation and overlay to help me kind of figure out where to eat or where is this place that I was told to go to that I can't figure out. I think that's kind of like my next big use case that I'd really love to see. 

MARK MANDEL: Yeah. So you're standing on a street, and you're like, that place is 3 stars. That place is 5 stars. That is where I'll eat. 

ANGELA: Exactly. 

MARK MIRCHANDANI: It sounds like we're not far, right? I mean, you were just mentioning earlier the AR and kind of the things that people have built with it. The I/O app for people who went to I/O, you actually had augmented reality to tell you where the stages were and those kind of things. So hopefully, someone who hears this is like, I can do this, and just builds that kind of restaurant finder or place finder. 

ANGELA: Yeah, especially if you're using Android, combining our Maps API with AR Core, that could be really powerful. And yeah, just anything where data is overlaid on the physical world around you, I love that. 

MARK MANDEL: Awesome. Well, before we finish up here, is there anything that we haven't managed to mention, or anything you want to make sure you plug, or anything you just want the audience to know about before we wrap up? 

ANGELA: Our developer advocate team, we're always looking for events where we should be at. So I am wangela on Twitter. So if you have an event that you want us to go and talk about Google Maps or what you can do, we'd be happy to present at your event meetup, conference, anything. So just hit me up on Twitter. 

MARK MANDEL: Fantastic. Are you going to be anywhere in particular in the near future you want people to know about? 

ANGELA: We're still planning out the rest of the year. So I think the usual suspects, like the Chrome Dev Summit, things like that. 

MARK MIRCHANDANI: Wait, we're here in San Francisco. Where's the earth sandwich side of San Francisco? 

ANGELA: Unfortunately, I think it's in the water. 

MARK MIRCHANDANI: Oh, it's going to be a soggy sandwich. 

ANGELA: It would be. 

MARK MANDEL: Yeah. It's an open sandwich. 

MARK MIRCHANDANI: Oh, open face. 

ANGELA: Mm. 

MARK MIRCHANDANI: That seems cheap. You could just put bread on anything and call it an open face sandwich. 

MARK MANDEL: I'm just saying it's a thing. 

MARK MIRCHANDANI: That's true. You can't argue that. 

ANGELA: We're generous with terms here. 

MARK MANDEL: Well, Angela, thank you so much for joining us on the podcast today and telling us all about Maps. 

ANGELA: Thank you, Mark and Mark. It was good to be here. 

MARK MIRCHANDANI: Thanks, Angela. 

MARK MANDEL: Thanks. 

Thanks to you, Angela, for joining us this week on the podcast to talk about Google Maps. Really interesting topic hearing about real world locations and how people can incorporate those in our applications and their games, of course. So yeah, thanks so much for joining us. 

MARK MIRCHANDANI: And other creative ideas like a sandwich around the Earth. 

MARK MANDEL: Yes, and sandwiches. Sandwiches are great. I do like a good sandwich. 

MARK MIRCHANDANI: It's just-- I think everyone can-- maybe not everyone can relate to maps, but everyone can relate to sandwiches. 

MARK MANDEL: Excellent. Now I believe you have a question of the week. 

MARK MIRCHANDANI: I do. 

[MUSIC PLAYING] 

Speaking not of sandwiches, but instead back to Kubernetes, so we're recently coming off of Kubernetes' five year anniversary-- holiday of creating. They've been around for five years. 

MARK MANDEL: It's good time. 

MARK MIRCHANDANI: They've been doing some good stuff. 

MARK MANDEL: Yeah. 

MARK MIRCHANDANI: It turns out it's pretty popular. 

MARK MANDEL: A little bit. 

MARK MIRCHANDANI: So if you get a chance, check out the Kubernetes Twitter and the Kubernetes Podcast Twitter, which have a lot of cool content over the past few weeks about the fifth anniversary. One of the interesting tweets I saw was, what's the biggest concern for Kubernetes that people have? And it's pretty clear that the number one answer is like understanding how to use Kubernetes. 

And as I was thinking about that, I said, OK, well, I've done some work with Kubernetes. But a lot of people have talked about Helm, and I've only really, really been at the highest level of Helm. 

MARK MANDEL: OK. 

MARK MIRCHANDANI: So what the Helm? 

[BOOING] 

Like, what is it? 

MARK MANDEL: I'm sure that's a joke no one else has ever made. 

MARK MIRCHANDANI: It has to be the first time. I'll take credit for it, thank you. So what is Helm? Why is that important? 

MARK MANDEL: OK, so yes. So Helm is an open source project. It's been around for quite a while, actually. We're going to talk primarily about Helm 2, and we'll talk a little bit about that later. But it is worth noting, we do have an episode way back in the day, episode 50, talking about Helm with Michelle Noorali and Matthew Butcher, talking about Helm in depth. But at its base level, it's a package manager for Kubernetes. 

OK, so what does that mean? So the thing I like to talk about when I talk about Helm is like if you've ever used APT on Linux, or yum or Homebrew or anything like that on a Mac device, or a Chocolatey on Windows, basically it's like, how do I install x thing, plus all the dependencies that it has as well? Because sometimes things are complicated, and they have lots of stuff. 

And so Helm's really nice in that first of all, it has a series of what they call stable charts and the chart is the package, basically. So if you're like, I want to install multi cluster Redis, for example, I can go look for the Redis Helm chart. There are some configurable values that I can push through there. And it's going to go and create all the YAML that needs to be created to basically specify, OK, this is how the Redis configuration should see set up. You've specified that you want this many nodes in it. And we can set it all up. And all the dependencies are all set up, and it's good to go. So like, sweet, awesome. And that works well. 

The next level of that is also, how do I either delete that, say I don't want it anymore, and make sure it cleans everything up? But also, how do I upgrade it? So maybe there's a new version of the chart. There's a new version of Redis coming out. I want to do something like that. Now suddenly I can do a Helm upgrade. And it'll do all the nice dependency changes and all the things I need to change that way, so that I can change that platform as I need to change it, which is really nice. 

The third version of that is that you might have an application yourself. And you might be like, oh, cool I have this application. And it's dependent on maybe Redis and maybe several other things. So I can set up a chart with sub charts and have dependencies set up that way as well. Maybe there's some configurable values, that kind of stuff. So then I can create a chart specific for my application. I could even publish that publicly if I wanted to as well, so other people could take advantage. 

You can actually have multiple repositories within Helm, so if you want a publisher in charts, you can, either internally or publicly. And so it handles that sort of create, install, upgrade, delete lifecycle of complex Kubernetes applications. It's pretty nice. I quite like it. We have one for the project I work on, which it works on Agones. It tracks when did new versions come up, what version is kind of live, what version is available in the repo-- pretty comprehensive. 

I should make note-- Helm 3 is coming up. So Helm 3 is actually a full rewrite of Helm. You can still use Helm 2. Helm 2 is great, and stable, and wonderful. They're getting rid of some dependencies inside the Kubernetes cluster itself. They have a thing called Tiller usually that they used to run in there. They're actually taking full advantage of CRDs. 

If I don't get any of this wrong, you can actually check all this out on the blog post. It's going to be a much more lightweight installation. It's going to be really nice. But that's been developed fully in the open. You can check it all out at GitHub. They were like writing design docs before they write any code. It's actually super, super cool. But the 3.0.0 alpha-1 is available if you want to muck around with it. 

But yeah, Helm's really nice. So just checking it out, it's worth having a look at if you have a complex Kubernetes application you want to deploy, and you're looking for a way to package that up nicely. Does that answer your question, Mark? 

MARK MIRCHANDANI: I think so. So let me read that back to you if that's all right. I mean, basically, you're able to kind of pull down a chart if you want to take some kind of a service, for instance. Like for instance, you gave an example of Redis. And say I want this in memory database, so you pull down the chart, and you kind of deploy it. And of course, if updates get rolled out of that, like a normal package manager, you can say, oh, there's updates available. So I'm going to go grab those. Helm takes care of all the work there and helps deploy it out. 

But of course, applications are usually more than one service. Right? They might be really complex. They might have dependencies. And so you kind of build all that out. Plus, you're able to kind of take your own application, maybe build it up with a chart that has sub charts, and then push that out there, if, for instance, like Agones, you kind of have this complex tree that you need in order to deploy the app. 

MARK MANDEL: Yeah. Agones is probably a good example as well. I mean, we have a variety of services, some deployments, a whole bunch of RBAC controls in there as well, and a whole bunch of CRDs. Yeah, there's those and things like that. And so that becomes super nice. And Helm does a really nice job, as well, of templating. So if you want to have includes, or you want to do loops around stuff, basically being able to generate that YAML file sort of on the fly, there's a lot of nice tooling in there that allows you to do that, too. 

MARK MIRCHANDANI: So it sounds like a super cool concept. If people are getting started with Kubernetes, it might be a great way to get an application, or set of services, or a set of deployments, or a combination of all those kind of up and running pretty quickly. And it sounds like people can go check out the episode 50 in order to see more of a deep dive about Helm and the direction they're going. 

MARK MANDEL: Absolutely. 

MARK MIRCHANDANI: Very cool. Yeah, I think that handles it. 

MARK MANDEL: Yeah. Cool. All right, well, before we wrap up, Mark, what are you up to? Are you going anywhere cool, doing any neat content? 

MARK MIRCHANDANI: So I just came back from a long road trip, in which I got to listen to lots of podcasts. 

MARK MANDEL: Oh, good. 

MARK MIRCHANDANI: So that was a lot of fun, including our previous episodes. It's always fun to go back and listen to hear the questions that we're talking about. But we do interview some great people. So it's actually super cool to kind of listen on those and be like, oh, wow, this is awesome. And then, yeah, I'm headed to New York pretty quickly, actually-- I think maybe even as early as tomorrow-- 

MARK MANDEL: Oh, very cool. 

MARK MIRCHANDANI: --to talk to a couple of customers and chat with them about their usage of GCP for a little show I do on YouTube called Stack Chat, where we kind of interview them about what their architecture looks like, some of the decisions that get made. So it's super cool to kind of go into these customer areas, and talk to them, and be like, hey, well, why is this important? What did you find along the way? Super, super cool stuff. 

MARK MANDEL: Well, I'll definitely check out your YouTube channel. 

MARK MIRCHANDANI: Awesome. It's all on the Google Cloud Platform YouTube channel. 

MARK MANDEL: I'll check that out. That sounds good. 

MARK MIRCHANDANI: So what about you? 

MARK MANDEL: I think next on my radar will be Tokyo Next. That'll be in, strangely enough, Tokyo. 

MARK MIRCHANDANI: Oh, it's aptly named. 

MARK MANDEL: Yeah, aptly named. We do name things what they are, generally speaking. 

MARK MIRCHANDANI: So what does Agones do? 

[LAUGHTER AND APPLAUSE EFFECT] 

MARK MANDEL: Yeah, not our open source projects-- very different. So yeah, Tokyo Next in July. So yeah, if you're going to be around Tokyo, make sure to say hello. I will be at the inside event, talking about game stuff. 

MARK MIRCHANDANI: As always. 

MARK MANDEL: Pretty much. Fantastic. Well, Mark, thank you so much for joining me on the podcast this week. 

MARK MIRCHANDANI: Thank you for having me, Mark. 

MARK MANDEL: Always a pleasure. And thank you all for listening. And we'll see you all next week. 

MARK MIRCHANDANI: See you. 

[MUSIC PLAYING]