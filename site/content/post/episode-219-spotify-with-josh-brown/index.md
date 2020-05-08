+++
audioDuration = "00:29:15"
audioFile = "Google.Cloud.Platform.Podcast.Episode.219.mp3"
audioSize = 42124540
categories = ["Spotify", "Music", "API"]
date = "2020-05-06"
description = "Josh Brown, Developer Advocate at Spotify, is on the podcast this week with your hosts Mark and Brian."
draft = false
episodeNumber = 219
hosts = ["Brian Dorsey", "Mark Mirchandani"]
title = "Spotify with Josh Brown"
image="/post/episode-219-spotify-with-josh-brown/images/hero/hero-EP-219.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/gejmae/episode_219_spotify_with_josh_brown/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Josh Brown](https://twitter.com/joshubrown), Developer Advocate at Spotify, is on the podcast this week with your hosts [Mark](https://twitter.com/markmirch) and [Brian](https://twitter.com/briandorsey). Working in the Open Developer Platform department, Josh supports third-party developers as they create music experiences for users using the Spotify APIs and SDKs. The most popular of these, the Spotify Web API, lets developers access metadata about music and facilitates library management for users.

We talk later in the episode about the types of applications developers are creating using the Spotify Web API and how it's changing the way people listen.  Using developer feedback, Spotify has continued to improve on the API, now offering podcast support, for example. With the new podcast support, hobby developers especially are developing apps that make podcast listening easier and more social.

To create these open platform APIs, Josh tells us they relied heavily on Google Cloud products like GKE and Cloud Storage. To manage the GCP products they use, Spotify created an internal portal called Backstage. Independent developers are encouraged to make use of Backstage to help with their Spotify projects as well.

Josh wraps up the episode explaining the lessons learned in creating these APIs and how developer feedback became so important for them.

<!--more-->

##### Josh Brown 

[Josh Brown](https://twitter.com/joshubrown) is a developer advocate for Spotify, focusing on APIs. In his spare time, Josh enjoys running and writing. 

##### Cool things of the week

* Google Cloud training available at no cost for 30 days [blog](https://cloud.google.com/blog/topics/training-certifications/google-cloud-training-available-at-no-cost-for-30-days)
* Cost optimization for serverless workloads [blog](https://cloud.google.com/blog/products/serverless/managing-cost-and-reliability-serverless-applications)
* Understanding forwarding, peering, and private zones in Cloud DNS [blog](https://cloud.google.com/blog/products/networking/cloud-forwarding-peering-and-zones)
     * Stephanie Wong's video series on networking [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqJ0oXcnZYqOnuNRsLF9H48u)
     * Stephanie Wong's blog on Medium [blog](https://medium.com/@swongra)

##### Interview

* Spotify [site](https://www.spotify.com/us/)
* Backstage [site](https://backstage.io/)
* Spotify for Developers [site](https://developer.spotify.com/)
* Spotify Community [site](https://community.spotify.com/)
* Spotify Web API [site](https://developer.spotify.com/documentation/web-api/)
* Search, browse and follow podcasts using the new Podcast APIs [news](https://developer.spotify.com/community/news/2020/03/20/introducing-podcasts-api/)
* Kubernetes [site](https://kubernetes.io)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* Cloud SQL [site](https://cloud.google.com/sql/)
* Google Cloud Storage [site](https://cloud.google.com/storage)
* Spotify Platform Documentation [site](https://developer.spotify.com/documentation/)
* Adopting Kubernetes with Spotify - Stack Chat [video](https://www.youtube.com/watch?v=eFE-X8FlyLQ&list=PLIivdWyY5sqJvwGd0PTzSx1j0cePX0INl)
* Updates on future Spotify events [twitter](https://twitter.com/spotifyplatform)

##### Question of the week

Podcasts and hosting static files: how does the GC Podcast do it? [Cloud Storage](https://cloud.google.com/storage) of course! GC Podcast on [GitHub](https://github.com/GoogleCloudPlatform/podcast).
     
##### What's something cool you're working on?

The Google Cloud [livestreams](https://www.youtube.com/channel/UCAkiVNZfRKgxerudxbVkHfg) we talked about a few weeks ago have expanded into a new [Meetup](https://www.meetup.com/Live-with-Google-Cloud-Developer-Relations/) group!

{{< transcript "[MUSIC PLAYING] MARK: Hello, everyone. Welcome to episode 219 of the weekly Google Cloud platform podcast. I'm Mark, and I'm here with my colleague, Brian. Hey, Brian. How you doing?" >}}

BRIAN: Hello, hello. 

MARK: Oh, wait. You know what, I did say, I would give you an adjective before your name. I think I did it a couple of episodes ago. I want to say I've already used illustrious, which I feel like is a fantastic word. 

BRIAN: It's very bright. 

MARK: Can we come up with anything better? 

BRIAN: The sleepy. Sleepy Brian Dorsey. 

MARK: All right. I will take some homework. I will come up with something. Sleepy just doesn't have that punch to it, you know, that illustrious has. I will figure something out. I promise for the next time you're on the podcast. We'll have a better word for it. 

BRIAN: I'm sure everybody's waiting, wondering what it's going to be. 

MARK: It's clearly the most important thing. It's not, because we have a great interview today. Brian, can you tell us who we're going to be talking to? 

BRIAN: Yeah, we're talking with Josh Brown from Spotify. He's a developer advocate. He's going to be telling us about the new API developments, and some things about how they built them for Spotify's API, and in particular, the new podcast portion of the API. 

MARK: Yeah. I'm super excited about that because A, we're on a podcast. B, I like podcast. And C, I listen to Spotify probably about like 100%. Well, that's it a little too high. All right, 98% of the time that I'm doing, I'm coding, or I'm hanging out, or playing video games, or whatever. Like, I always have Spotify going, but it's super awesome to hear that they're kind of building this cool API, and we'll get more into that with Josh. 

BRIAN: Awesome. 

MARK: But before we do that, why don't we jump into our cool things of the week. 

[MUSIC PLAYING] 

Technically, I have two cool things of the week, but one, I think, you know, I've talked about in the past couple of weeks about how Google is offering this free training up until the end of April. Well, if you check your calendar, we are after the end of April. But Google went ahead and extended it for Pluralsight and for a Qwiklabs up until the end of May. 

So now you have, in case you're just a procrastinator or in case you were just busy doesn't matter. The point is now you've got another 30 days to try and get some of that free training. So definitely highly recommend it. Still a great resource. I'll probably bring it out in two weeks because it's just that cool and important. 

And then for my second cool thing of the week, I wanted to share a blog that was written about cost optimization for serverless stuff. So App Engine, Cloud Run, Cloud Functions, these are some of the kind of serverless offerings where you don't, generally speaking, you just kind of grow your instances in the backyard without ever really having to look at it, right? I mean serverless. 

So it's interesting to think about, well, what happens if I get a huge amount of traffic, and then I just spit up a bunch of instances. I've got to pay for all of those. How do I put controls in place for that? 

So understanding the opportunities that are available to you for cost optimization, specifically around like setting up quotas or setting up limits, it's super important. So highly recommend checking that out if you're playing around with those because you definitely want to have some kind of controls in place. Otherwise, you might get a scary surprise bill at the end of the month. 

BRIAN: Yep. Money matters to all of us. So yeah, keep that focused, and hopefully, you can actually see where that is, and maybe even save some money and use it for other stuff. 

MARK: Absolutely. 

BRIAN: And this next one. My cool thing of the week might be a bit of a surprise. It's about DNS, which I'm not sure is on the cool list for most folks, but I like to think of keeping boring cool, or the stuff that has to run all the time is actually really cool. DNS is definitely at the core there. So, there's a recent kind of blog posts highlighting how Cloud DNS lets you connect multiple different zones, DNS Zones, and they show up all over the place. 

So when you have your own data center and you're trying to like use it together in a hybrid format with Cloud, or use a couple clouds together, it just shows up all the time as soon as you get even slightly complex in your architecture, and as much nuance to it. So there's a nice blog post kind of getting into the overview of that. 

And then I wanted to highlight going into more detail about networking and connecting all the bits. Stephanie Wong has a video series that we'll have the links to down below. All about networking and especially the hybrid networking, you might need to connect your various things together. So check it out. 

MARK: Yeah. I know that she's been working on that networking end-to-end series for a while, and she's also written a bunch of medium blog posts. So we'll make sure to add a link to that as well. There's lots of helpful resources there, and I'm sure she's talked a bit more about DNS as well. 

BRIAN: Sweet. Well, let's get to the interview. 

[MUSIC PLAYING] 

Thank you for joining us. Can you tell us a little bit about who you are and what you do? 

JOSH: Sure. So my name is Josh Brown, and I'm a developer advocate at Spotify. and at Spotify, my job is to work with and support the community of third party developers who are using Spotify as a developer platform to build amazing audio experiences for our users. 

MARK: I doubt there's that many people who haven't heard of Spotify, but just as the quick rundown, what is Spotify? 

JOSH: Sure. Yeah, so Spotify is an audio streaming service that allows people to listen to more than 50 million tracks made by thousands of creators all around the world. And the part that I work on in Spotify is open developer platform, which are our APIs and SDKs that allow third party developers to build audio experiences for Spotify users. 

BRIAN: What does that mean in terms of APIs? What kinds of things can you do as a developer? 

JOSH: Yeah, sure. So we have a variety of different developer products. The one that we'll be talking about the most today probably is our web API, which allows developers to fetch metadata about music, artists, and also now podcasts, shows, and episodes. So developers can search the Spotify catalog, fetch information about different pieces of content, and also help users manage their library. 

So adding shows to the library, removing shows from the library, subscribing to an artist, following an artist, and also developers can use our API to control playback on devices. So starting audio, pausing audio, skipping tracks, going back a track, those types of operations. 

MARK: Right. I mean, that would be the beginning, right? Is taking an audio file and listening to it. Starting and stopping it, fast forwarding it. 

Maybe getting a couple in there, but then it grows from there, and every audio file has metadata about it. People want to build playlists. What kind of applications are people building with this API? 

JOSH: Yeah, for sure. So one thing that's really exciting about the Spotify API is that it supports a broad range of developers. So we have everyone using the API from college students who are learning how to code or building a site up in their spare time, all the way up to large partners of Spotify who are building experiences that are used by thousands or hundreds of thousands of users. 

So we see developers building applications in the API that allow users to discover audio. So discovered music, or discover content that their friends are listening to, and then we've also seen folks, like the Discord team, build integrations to help users share audio they're listening to, and listen to the same audio that their friends are listening to at the same time. So lots of experiences that are social and lots of experiences that help users discover new audio to listen to. 

BRIAN: So this is the integration point to all of the different ways we get at things. I know I've seen it pop-up in a few places. From your perspective, how's the reception been? 

JOSH: Yeah, definitely. The web API has existed for a very long time. So one thing I really like about working at Spotify is that there is a huge community of developers building open source client libraries, tooling, and tutorials for the developer platform already. So there's a huge number of client libraries in almost every language you can think of. And we've gotten lots of really detailed feedback from developers that's helped us make the platform better, and that's led to innovations like the new podcast API endpoints. 

That was one area where we heard feedback from developers. Hey, we'd love to be able to access podcast data, along with music data. So that was one of the reasons we decided to open up these endpoints. 

MARK: So, yeah, let's talk more about the podcast API because that just launched recently, right? 

JOSH: Yeah, that's right. So we just launched the podcast API a few weeks ago, and those endpoints are an extension of the existing music API that previously allowed accessing only music data. 

MARK: So I guess one of the interesting questions that kind of comes up, just from a metadata perspective is, like, what's the difference between the music that you're playing on Spotify and a podcast that you're playing on Spotify? 

JOSH: Yeah, so podcast episodes and audio tracks have a lot of similarities in terms of metadata. So they both have a track and they both have a creator, both of which are exposed in the API. But there's a lot of differences too. So with our episode API, you can fetch the resume point of an episode, which is how far along in the episode that user's listened. And our podcast episode API also exposes the publisher of an episode. So, who created the episode. 

For example, in the case of the GCP Podcast, it might be Google who is the publisher. So there's a few differences there in types of metadata, but there's also a lot of similarities too. So both the podcasts and music expose, for example, the image. So if the podcast has a cover image, then that's exposed through the API, and the same is true for albums, for example, which are kind of a collection of tracks. If we have the album art in Spotify, then that album art is exposed through the API as well. 

BRIAN: That makes a ton of sense. My favorite thing, we're getting kind of meta here. We're talking about podcast, APIs on podcasts. You mentioned you know a lot of requests for this were happening from developers, and so who's kind of most excited about this? Who do you think ought to be most excited about it? And what are people going to be able to build with this thing? 

JOSH: Yeah, definitely. I mean, we've seen lots of excitement about the podcast API from hobby developers, many of whom are Spotify enthusiasts and use Spotify a lot, as a user, and have ideas for making the Spotify experience better. So for those folks, they're looking to our API to build add-ons for Spotify that they might use themselves and then potentially share with other users too. 

Some of the use cases that we're hoping to see developers use the new API for include, the ability to integrate with calendar apps, so to see, for example, in Google Calendar, when your favorite shows have released new episodes, social podcasting experiences to help Spotify users share what they're listening to with their friends and maybe even listen along to the same podcast at the same time, and also notifications. So updates, potentially push notifications, or other forms of updates, when your favorite show has released a new episode with maybe a topic that you're very interested in. Those are a few areas where we see valuable use cases that developers could build on. 

MARK: Yeah, I mean, we see time and time again, the large companies that kind of have a specific area of expertise opening up things with APIs because some of the people out there who want to build things just get so creative with these ideas that, you know, so few people were thought of, but then they come up with it and everybody loves it, right? Like the idea of multiple people listening to a podcast. It's kind of very cool and something that maybe doesn't make sense to build into the core functionality, but absolutely makes sense to build with an API. So all that being said, have you had any cool examples that you've seen? People build with it-- so I know it's pretty early, right? 

JOSH: Yeah, exactly. So the podcast API is pretty early, but what we've seen already are a lot of partners who are already using the music APIs reach out to us about extending their existing Spotify integration to podcasts. So for those developers they want to include episode data in their app in the same way that they were already including music data. And so when building the podcast API, one thing we try to make sure of was that integrating the podcast API would be easy both for existing developers who use our music APIs, but also new developers who are using the Spotify API for the first time. So that's definitely kind of guided our approach to building these APIs in the first place. 

BRIAN: OK. I'm going to jump a bit to something you said just a moment ago about integrating all this stuff. You have this big corpus of metadata, and you mentioned kind of like pulling a topic you might be interested in from a podcast you're already following. Since you have so much metadata, can we search across all the podcasts for topics I'm interested in? Or like are there additional features and functionality along those lines? 

JOSH: Yeah, exactly. I think that's one of the most trafficked APIs that we've recently improved. So Spotify search API has been improved to allow developers to search podcast episodes, or podcast shows for topics or by text to surface episodes or shows that a user might be interested in. And this is very similar to an existing app that we've seen on our music APIs called, Dewalt, which allows users to search for artists that they're already interested in and use that to build a new playlist of tracks and songs that they also might like. So we're hoping that developers might extend the search API to help users discover new podcasts and find other topics and podcast publishers that they might be interested in. 

BRIAN: That search is working across all the metadata, like titles, and like show notes, and things like that? 

JOSH: Yeah, exactly. 

MARK: So I mean, one of the cool possibilities here with this API is definitely to integrate it with third party databases or third party information. So if you run a music site or if you run some very specific podcast site, you know, like how many podcasts were released during which phases of the moon, you could integrate that with the Spotify. I don't know why anybody would have that data, but the point is, is that you could integrate it with Spotify's API, and then create an extra layer for users to interact with. 

JOSH: Yeah, absolutely. And I think it could also factor into discovery apps too. One interesting app that we saw with the music API is that I would be interested to see if someone tries to replicate with podcasts would be a discovery app that allows you to listen to artists on a road trip. So the way this app works is that it creates a playlist for you based on your Google Maps trip, and it will put in the playlist artists who are based along your route. So that as you drive you listen to musicians who are local and are based nearby to the pro trip where you're currently driving. 

BRIAN: That's so cool. 

MARK: It's amazing. 

JOSH: Yeah exactly. And it does combine Google Maps with the Spotify API as a mash up, so-- 

MARK: That's brilliant. 

BRIAN: I love where we're headed with that because if you're on a road trip podcast that we're about the area that you're driving through, that's like a pretty good timing. You kind of get a 1/2 hour, hour episode like of something nearby every time would be epically cool. 

MARK: So from the user standpoint, I mean, the possibilities are basically just limited by imagination. Anyone can come up with some cool ideas in integrating [INAUDIBLE]. Let's talk a little bit more about the technical side of things. So you already mentioned it kind of being authenticated and used by users, and I'm sure all these people have to build up these other things based on how the original music API work. Can you talk a little bit more about the tech side of actually implementing the podcast [? data. ?] 

JOSH: Yeah, for sure. I think one of the things that I really like about our web API in general is that it's an open platform. So anyone can visit developer.spotify.com, and sign up for a developer account, and create a client ID to begin building on these APIs. And so the API is secured by OAuth 2.0. 

We support three different OAuth flows, the authorization code flow, the implicit grant flow, and client credentials. And the API is restful, so it may be familiar to developers who are coming from other REST APIs. Maybe they've used a REST API in another project and Spotify is a mash up with that other API. We hope that it being restful will be really familiar for a large group of developers and make it easy for them to get started with. 

One thing that's really exciting about the podcast API and Spotify's web API in general is that we see lots of developers using our APIs as part of their journey in learning how to become a programmer. So lots of college students, lots of developers who are learning how to code are using our APIs to explore and to learn about OAuth, learn about connecting to an API, and learn about building web apps. So as a developer advocate, that's one of the most exciting parts of the platform for me. 

BRIAN: That's awesome. I used to teach Python, and I have a real sweet spot for learning about this stuff, and I think one of the hardest parts is him a tech feedback loop and feeling like something real happened when you're programming. And driving audio would be a very visceral thing. Oh, I made something happen in the world. That's exciting. 

JOSH: Yeah, exactly. And I think this is guided to our approach to giving the APIs as positive a developer experience as we can. When we're writing documentation or when we're designing the way the API works, we're trying to keep in mind all of those different personas. So users who are new to building apps, developers who are building apps for thousands of users, it's really tough and challenging to design documentation that works for both of those groups. So that's kind of one of the goals we have when we're designing how this API worked, and it was one thing we're keeping in mind when we launched it. 

MARK: So as you mentioned, it also, it involves a lot of design ahead of time to figure out what the kind of structure is, what makes sense, but it also takes the back end to host it as, you know, obviously, these calls have to live somewhere. And my understanding is you all built this on Google Cloud, right? 

JOSH: Yeah, of course. And so we used Google Cloud platform throughout our web API. I should start out by saying that I'm not a part of the team that built the web API. I work more on the side of helping users and developers learn how to use it. 

But the web API uses Google Kubernetes engine for running our service. And we use Cloud SQL for storing data about the apps and developers who are building on the platform. And even our developer website and our developer documentation is hosted on Google. We use Google Cloud Storage buckets for that. So it's kind of Google Cloud platform products throughout. 

Another really interesting part of the GCP functionality that we use is how we manage the GCP resources that are used when we build products at Spotify. So we have an internal developer portal called Backstage, which allows developers at Spotify, internal engineers, to manage the DHCP resources that each of our projects uses. And we recently open sourced that developer portal at backstage.io so that other teams of developers can kind of have the same tools to manage GCP resources that we use, and hopefully, make it easier for them to also build APIs in products like our web API. 

MARK: Yeah, that's super awesome. We'll definitely include a link to that in the show notes. Can you describe a little bit more about what it does? 

JOSH: Yeah, definitely. So Backstage is an internal website at Spotify that hosts a few different things that developers at Spotify need to build APIs and to build other services. So it hosts technical documentation so that a team in another part of the company can learn about how your API works, and then it also hosts an interface that each team can use to monitor their GCP usage, GCP costs, and manage the resources a project is using. 

MARK: I love that. It's something that you build technically, obviously, but it's also something you have to build into the culture of your team to be able to say, each team needs to be more responsible for, you know, what ends up being costs, but really what resources they're using. And having good visibility on that is so key to being able to say, here's what my team does, here's the offerings we have, and here's what we're actually using. 

JOSH: Exactly. Exactly. Yeah, so it's been key not only for managing resources, but like you said, it's also really important for sharing information about Spotify services across the company, and making it easy for other teams to learn about a service and a part of the company where maybe they don't normally work. 

BRIAN: That's awesome. So integrated kind of catalog and across the organization communication, and the actual management of the services, and all of that together. That's pretty cool. Something for me to check out afterwards, for sure. Did you have kind of any lessons learned in kind of building, you know, this is sort of a second generation app, API for you all, like, you're extending an existing thing you add, things you learned about that adoption, things you did right, things you would want to do different? 

JOSH: Yeah, definitely. I think we learned a lot during this process about the process of gathering feedback. So one thing we really learned was that open platforms are an awesome way to get feedback on our developer experience and our API design. So as soon as we launched the API, we received lots of valuable input from both novice developers and enterprise partners about the API that we'd launched. And developers gave us feedback on things like, bugs in our documentation, errors that we'd made, improvements that they thought we should make, some extra fields that they thought were missing from the metadata API, and also larger feature requests. 

So for example, some developers had requested information about the participants in a podcast and information about the different segments in a podcast. So certain analysis of a podcast. They asked us to expand our API to include that data too. So the feedback that we've gotten from the open ecosystem has been really valuable. 

And I think another thing we've learned is that launching an API can be a multidisciplinary process. We needed input, not only from engineers, but also from tech writers, UX specialists, product managers who worked closely with our user base and could give us information about the use cases that this API would unlock. All of those different disciplines were really required as part of the process of building and launching this API. It kind of takes a village to build an API, and to review it, and launch it successfully. So those two points I think were takeaways for me in the process of launching a podcast API. 

MARK: I think a lot of people maybe don't think about having UX involved with an API because you'd be like, oh, there's no experience. You don't need to worry about it. And there's plenty of APIs out there that are, time and time again, have proven to people, no, this API is really difficult to use. Clearly someone should've thought about the usability of it. So it's really nice to hear that that was kind of a great lesson learned from implementing this. 

JOSH: Right, yes. So I think there's usability lessons for the API. So the developer experience and the usability of the tech docs, but then also we thought a lot about the usability of the OAuth flow. So the process of installing and agreeing to permissions with an app, and then localizing those screens for each of Spotify's markets, we worked closely with our UX writing team on that. And so that was kind of another aspect of disciplines coming together to launch a developer product that I thought was really important. 

BRIAN: That's huge, and again, feedback loops everywhere, right? So we're talking about it in learning software, but also in building a larger thing. You've got a multidisciplinary group with feedback from the people using it and all the people building it. I love it. OK, so if people were inspired, or excited, or want to give this a go, how do you recommend people get started? 

JOSH: Yeah, well, one of the great things about this API that it's an open API. So anyone can visit developer.spotify.com, sign up for a developer account, and create a client ID to begin building on the API. We do have a tutorial on developer.spotify.com that walks you through the process of creating a web app that uses their web API, and that can be valuable for folks who are using API for the first time. 

We do also have reference documentation. So if you're already experienced with using web APIs and maybe you're looking to just jump to the reference docs, on developer.spotify.com we have reference docs that explain each of the nine new endpoints that this API supports, and how to call each one of them, different parameters that are supported, and what's possible with each of the endpoints. So all of those tech talks and details are on developer.spotify.com. And the great thing, again, is that anyone can use it to get started making it really valuable, I think, for folks who are learning to code, as well as folks who are looking for a hobby app to build in their spare time. 

BRIAN: In the spirit of feedback, if people have feedback as they're trying to learn it, what should they do with that? 

JOSH: Yeah, that's a great question. So the best place to give us feedback, and we absolutely welcome feedback, would be to visit community.spotify.com, and to visit the Spotify for developers sub-forum. That's where I spend a lot of my time. I mean, that's where developers can chime in with feature requests or also requests for help. So if you're stuck on something, or you need help with implementing an API call, the community forum is a great place to share that, and I or a member of the community will be along hopefully to help you out, and support you with your question, or to accept the feedback, and bring it back to our product team. 

And that's a big part of the work I do at Spotify is listening to feedback we're getting from developers, and bringing it back to the product team and the engineering team to help us determine next steps with the podcast API. One thing that's really important to know is that this is just the first step for us with podcasts. We're continuing to work on improving the podcast API, and we're going to keep working on making it better for developers based on the feedback that we hear from the community. And so sharing that feedback in the Community Forum is a great way to do that. 

MARK: Awesome. Well, Josh, thank you so much for coming in and talking about the podcast API. Spotify, like I said, most people have probably heard of it. I know I'll probably get about 80 to 90 hours a week on it. So it's super, super great to hear that there's such an active and bustling investment in the developer side of things and on the API. Is there anything else you want to mention before we wrap things up here? 

JOSH: I might have already mentioned this, but if not, I will mention just a few of the interesting use cases that we've highlighted as use cases we think users might get value from when they've used the podcast API. So we think that users would find it valuable to have apps that help them import shows to their Spotify library. So for users who are switching to Spotify from another platform or maybe they use more than one platform to listen to audio, those users would benefit from apps that help import shows to users' Spotify library, using your search API, and using our subscribe API for podcasts. And again, another experience that we think users would really benefit from will be social podcast listening experiences to help Spotify users share what they're listening to with their friends and listen to podcasts together. 

BRIAN: That's fantastic. So everybody out there, I hope you're inspired to build some stuff, connect some things, integrate, and bring all your music and audio together. Thank you for joining us, Josh. 

JOSH: Thank you for having me. 

MARK: Thanks again so much to Josh for talking about it. I mean, it was super, super cool to hear about the new podcast API, but it's also really interesting to hear about what you have to think about when you're building an API. And we actually get the chance to chat with Spotify a while back. We'll make sure to throw a link in the show notes, but we have a couple of Stackchat videos where Max Saltonstall interviewed Spotify, and talked to them a little bit about how they made their change to Kubernetes. 

Not really talking about the API so much, but it was really interesting to hear more about their philosophy for engineering, and how they brought that into their team. It was super, super good conversation. So I'm glad Spotify is doing so many cool technical things. 

BRIAN: Yeah, so there's a bunch about how it's built. And then the other thing, my takeaway was just kind of how much metadata they have and make available to you to integrate into your stuff. So awesome. 

MARK: It's super cool, and hopefully, it'll inspire some people to kick off some cool podcast projects, right? I mean, that example about the road trip one. Like, that's so awesome to think about. So we'd love to see what creative people can come up with using the API. 

[MUSIC PLAYING] 

BRIAN: OK, so podcasts has got me thinking, we're listening to a podcasts, all these podcast APIs, where do the files come from? How do you host them? That sort of thing. So it's a static file, but it's big. Let's use this one as an example. So how does the Google Cloud podcast host the actual music or audio files for the podcast? 

MARK: Absolutely. So first of all, I'm happy to call out that all the code for the Google Cloud podcast is actually out there on GitHub. So Mark Mandel when he wrote the website with Francesc, they both decided to do it all open source and throw it up on GitHub. So anybody can duplicate the same structure that the podcast uses. 

So with that being said, we actually, of course, free storing files, we use cloud storage. Kind of makes sense, it's in the name. So it's probably a good idea. And it's a really, really cheap and easy way to just throw a bunch of files up there, along with the ability to actually take the files and have a URL associated with them. So you can set up access controls. 

We don't, because obviously we want everyone to listen to the podcast without authenticating. And however, we do tracking for each of the episodes. And the way this was written is, you can, again, if you want to check out the open source code, it's over on GitHub, but we actually just put a quick little app engine app that is basically a proxy between the user and the file. And the only reason we have this proxy here is because when you hit it, it goes ahead and makes sure it's a request at the beginning of the file basically. And then it will send over a Google Analytics marker. 

So it's really, really simple. It's a very quick, easy way for us to track when somebody downloads an episode, and then it just redirects the user over. So it's very easy to build, but it's also a cool way that you can kind of extend what's sitting on Cloud Storage by putting a cloud function or an app engine app on top of it. All of that code, once again, available on GitHub. Put a link to it down there, but it's pretty straightforward. 

And then we've built the rest of the website around just another app engine app, and it's pretty straightforward. But I think that for people who are interested in maybe hosting their own podcast, you could really just use the Cloud storage for the files, and then, you know, maybe you could build your own API for how to interact with those. If you don't want the files to be immediately accessible, you can turn off the URL sharing, and instead write something very similar, like an app engine proxy, so that you're going through that to get it instead. 

BRIAN: Awesome. Thanks for that overview. Check out the link to the code. And if you're thinking about doing a podcast, do it. 

MARK: Yes. Just do it. Just start it. Don't worry so much about your quality to begin with. You know, just get a nice, hopefully, you have access to a good microphone, but all you really need is an idea and some enthusiasm to go for it. And I have seen all kinds of very, very niche podcasts, but for the people who love them, they love them. And that's the important part, right? 

That you enjoy making it, and that your listeners enjoy listening to it. So before we wrap things up. Brian, what are some cool projects that we're working on? 

BRIAN: Yeah, I'm going to take this wider in scope this time. You may remember from a previous episode, we mentioned Yufeng has been doing a series of live YouTube streams exploring Google Cloud. And he and many of the other folks on the cloud advocacy team have kind of expanded that, and lots of folks are experimenting with this and doing different things. So [INAUDIBLE] a meetup group that you can sign up for to find out when new things are coming, see what's going on, and it's really nice to be all that kind of see them all in one place. So go check that out. It'll be in the show notes, but it's meetup.com/Live-with-Google-Cloud-Developer-Relations/. 

MARK: Yeah, there's a lot of cool people in developer relations here at Google that are trying out new ways of communicating with people, right? Whether it's these live coding sessions, or you know, I've seen kind of a talk show aspect to it, or last week, we talked about Priyanka's 13 days at GCP. There's all kinds of cool different tools being come up with and experimented with right now. And much like starting your own podcast, right, just do it. Just take that initial step, have some fun with it, see what comes up, and be agile, and experiment with it. 

BRIAN: So please check those out, do your own experiments, and let us know which of the ones are useful to you. Ping us on Twitter or anywhere else. 

MARK: Absolutely. Well, thank you so much Brian for joining us. And of course, thank you to all the listeners for listening with us. We will be sure to see you all next week. 

BRIAN: See ya. 

[MUSIC PLAYING]