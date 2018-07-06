+++
audioDuration = "00:27:48"
audioFile = "Google.Cloud.Platform.Podcast.Episode.134.mp3"
audioSize = 45734306 
categories = ["Unity", "Gaming", "Hackweek", "Connected Games"]
date = "2018-07-04"
description = "Today, Melanie and Mark go in depth with Brett Bibby and Micah Baker to learn more about Unity and its new strategic alliance with Google Cloud."
draft = false
episodeNumber = 134
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Connected Games with Unity and Google Cloud with Brett Bibby and Micah Baker"
image="/images/post/Brett-Bibby.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/9BkykbptMjj"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/8w2mf4/episode_134_connected_games_with_unity_and_google/"
+++

Happy 4th of July! Today, [Melanie](https://twitter.com/nyghtowl) and [Mark](https://twitter.com/Neurotic) go in depth with [Brett Bibby](https://twitter.com/bibbinator) and Micah Baker to learn more about Unity and its new strategic alliance with Google Cloud. We explore how an alliance between Google Cloud and Unity means easier development for game creators and better gaming for fans. 

<!--more-->

##### Brett Bibby

[Brett Bibby](https://twitter.com/bibbinator) is Unity’s Vice President, Engineering. Prior to his current role, Brett served as a Field Engineering and Evangelist at Unity consulting with developers throughout Southeast Asia, Australia, India, and greater Asia. Before Unity, Brett founded and ran a game studio developing console titles, and has more than 30 years of experience developing games and game engine technology. 

##### Micah Baker

 As Product Manager leading the strategy for Gaming on the Google Cloud Platform, Micah is committed to enabling  developers to realize their vision for great games. An avid gamer on all major platforms, he never hesitates to get involved in games that were built with a passion for immersive storytelling, innovative multiplayer experiences, and breathtaking artwork.

##### Cool things of the week

* The 2018 World Cup Visualized: All the Goals So Far [site](https://medium.freecodecamp.org/world-cup-all-the-goals-in-2018-b52e5ef53e0a)
* Why we believe in an open cloud [blog](https://cloudplatform.googleblog.com/2018/06/why-google-believes-in-open-cloud.html)
* Kubernetes 1.11: a look from inside Google [blog](https://cloudplatform.googleblog.com/2018/07/kubernetes-1-11-a-look-from-inside-Google.html)
* Understanding error budget overspend - part one - CRE life lessons [blog](https://cloudplatform.googleblog.com/2018/06/understanding-error-budget-overspend-cre-life-lessons.html) 
* Good housekeeping for error budgets - part two - CRE life lessons [blog](https://cloudplatform.googleblog.com/2018/06/cre-life-lessons-good-housekeeping-for-error-budgets.html)
* New GitHub repo: Using Firebase to add cloud-based features to games built on Unity [blog](https://cloudplatform.googleblog.com/2018/06/new-gitHub-repo-using-firebase-to-add-cloud-based-features-to-games-built-on-unity.html)

##### Interview

* Unity [site](https://unity3d.com)
* Google Cloud Spanner [site](https://cloud.google.com/spanner/)
* Unity Hackweek [site](https://blogs.unity3d.com/2018/06/22/hackweek-2018-the-unity-way/)
* Unity Connected Games [site](https://unity3d.com/connectedgames)
* Bringing connected games within reach with Google Cloud [blog](https://blogs.unity3d.com/2018/06/21/bringing-connected-games-within-reach-with-google-cloud/)
* Unity Hackweek 2018: Creating X Together [blog](https://blogs.unity3d.com/2018/07/04/unity-hackweek-2018-creating-x-together/)

<div style="text-align: center">
  <a href="https://twitter.com/bibbinator"><img src="/images/post/Brett-Bibby.jpg" style="margin: auto; max-width: 30%;"></a>
  <p style="font-size:0.8em">Brett Bibby<p>
</div>

##### Question of the week

[How do I report errors to Stackdriver from a cloud function?](https://cloud.google.com/functions/docs/monitoring/error-reporting) 


##### Where can you find us next?

We’ll both be at [Cloud NEXT!](https://cloud.withgoogle.com/next18/sf/) 

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 134 of the weekly Google Cloud Platform Podcast. I'm Mark Mandel, and I'm here with my colleague, Melanie Warrick. Hello, Melanie." >}}

MELANIE: Hi, Mark. 

MARK: How you doing? 

MELANIE: How are you doing? 

MARK: I'm vaguely awake, but I'm getting there. 

MELANIE: Why are you vaguely awake? 

MARK: So I just come back from Unity Hack Week in Denmark. I had a really great time with the Unity team over there. And possibly not-so-strangely enough, today's episode is talking about the new strategic alliance between Unity and Google Cloud. So we'll be talking about connected games with Unity and Google Cloud. 

MELANIE: Well, that's awesome. It's convenient that you were over there, and that we're now also talking about it. So Mark, also, Happy 4th. 

MARK: Oh yeah, 4th of July. 

[FIREWORKS POPPING] 

MELANIE: Which I know you don't celebrate. 

MARK: No, being Australian. But good for everyone who's in America and is listening. 

MELANIE: For all the other people who might be celebrating today, and seeing fireworks as usual tonight, and maybe eating dogs. So yeah, that's why you're releasing this episode this week, Mark, because you don't celebrate 4th. 

MARK: Yeah, that's fine. 

MELANIE: That's fine. Well, so this week, Mark, who are we talking to? 

MARK: Yeah, so this week, we're going to be talking to Brett Bibby, VP of engineering at Unity Technologies. And we'll also be talking to Micah Baker, who is the product manager at Google Cloud for Games. 

MELANIE: Awesome. As always, we start out with the Cool Things of the Week, and we end with the Question of the Week. And this week's question is, how do I report errors to Stackdriver from a Cloud Function? 

MARK: That's an excellent question, Melanie. I'm glad you asked. 

MELANIE: I think it's a great question. I didn't even come up with it. It's amazing. All right, so the Cool Things of the Week. So, for all of the listeners out there who might be watching, I don't know, the World Cup right now, we have a blog post to start off our Cool Things of the Week from Felipe Hoffa, who's one of our colleagues, and hopefully one day soon we will have him back on the podcast. 

But he did a blog post that is basically doing a World Cup visualization. He shows all the goals so far. And so he literally has on here, and he explains how he uses some of the different Google Cloud Platform tools to build the visualization, his data acquisition, how he extracted the goal data. He's got code in here. And using Data Studio to create the sheet. 

MARK: Awesome. 

MELANIE: Yeah. So you should check it out. 

MARK: We should check it out. So after that, I want to bring up a blog post that came out on the Google Cloud Platform blog called "Why We Believe in an Open Cloud," if you want to be accurate. I think it's a really important article. It's by-- 

MELANIE: Melody Meckfessel. 

MARK: Melody Meckfessel, Eric Brewer, so vice presidents of Google Cloud. Miles Ward, director of solution architects, Google Cloud. Sarah Novotny, open-source strategy lead, Google Cloud. 

MELANIE: Which all of these people we've actually spoken to, with the exception of Melody. And we actually are going to be interviewing at Next, so that's coming. 

MARK: That is coming. It's essentially an outline of why we believe in an open cloud, what do we mean by an open cloud. Sort of open is the power to pick up an app and move it. "Open-source software permits a richness of thought and continuous feedback loop with users." We talk about some of the open-source projects we work, why are these things important to us. 

It's worth reading and just being aware of exactly how Google Cloud is trying to position itself with the open cloud. I think it's really worth a good purview. 

MELANIE: I agree, it's definitely worth a good purview. So we also this week have Kubernetes 1.11, "A Look from Inside Google." So Mark, are you excited about this? 

MARK: So this is also a really great article. It's a perspective of the most recent Kubernetes release that's come out about what parts of Kubernetes 1.10-- or 1.11, I should say-- had influence from Google, and what parts of Kubernetes is Google working on and they're committed to. So there's some things in here for our changes to custom resource definitions, cloud provider plugins. 

There's also a really interesting bit in this where it's sort of talking about new features not built in 1.11, which I think is kind of amusing. But they're also talking about some of the governance things they're doing, and some of the software engineering orchestration, if you want, and how they're helping to find that process internally as well. They took a little about customize as well, a few other things like that. So if you've ever sat back and been like, I wonder what specifically Google works on on Kubernetes, this can actually be quite enlightening. 

There's another really great article as well from the CRE team. Actually, there's two of them, but I'll mention them together, part one and a part two. The CRE articles are always fantastic. They're talking about understanding error budget overspend. 

So basically, it's a discussion about what happens-- if you have an error budget, so you have the amount of stuff that basically you can mess up during a given time period. And what happens when you actually run out of your error budget, and then you end up going over. What happens, and what are the reasons why that might happen, and what to do when that happens. 

Because maybe there is a reason. Maybe there is just something you have to get in there, and it ends up breaking more things, or that kind of stuff. It's a pretty interesting read. I really like the SRE and the CRE articles. I think they're always super, super interesting. 

And there's a part two that is good housekeeping for error budgets. So basically, error budgets aren't something you just fire and forget. They're are an ongoing, living document, if you will. So you can talk about how to adjust as you need to as time goes on. 

MELANIE: Great. And I think the last thing we were going to mention for this week is that there's a new GitHub repo using Firebase to add cloud-based features to games built on Unity. 

MARK: Yeah, this is also great. Shout-out to [? Dean ?] [? Lagarde. ?] He's also done some work on the [INAUDIBLE] project as well. He's a DPE at Cloud. All around nice person. 

He's been working on a project for Firebase Unity Solutions. And the first one coming out on that is basically a Firebase-based leaderboard. I'm talking about showing you and giving you code about how you can set up a leaderboard on Unity using Firebase. And it has a really cute little flaming icon driving in a car. 

MELANIE: Yeah, it is actually really cute. It's a nice little image. Mark, I think it's time to go and talk to the folks from Unity. 

MARK: Let's go do that. 

MELANIE: All right. 

MARK: So I'm here in Denmark with two wonderful people. I'm here with Brett Bibby, VP of engineering, Unity Technologies, and Micah Baker, product manager at Google Cloud Games, all to talk about Unity and Google Cloud. How are you both doing today? 

BRETT: Doing great. Thanks for having us. 

MARK: Awesome. We had a recent announcement talking about Unity and Google Cloud that I'm very excited about. Possibly not unsurprisingly. But before we do that, why don't we have a chat with both of you about who you are, and what do you do? 

BRETT: Sure. I'm Brett Bibby. I'm Head of R&D at Unity, leading the team of more than 500 talented women and men, where the core Unity engine is and platform is built. 

MICAH: Sure. I'm a product manager with Google Cloud, and so I have the opportunity to help drive the strategy for how the cloud can actually support the gaming developers, which is something I'm quite passionate about, because the more I can help them, the better the games will be that I can play that they make. So we're excited about all the opportunities between Google Cloud and Unity. 

MARK: For those people who may not be familiar with Unity, Brett, do you want to tell us a little bit about what Unity is? 

BRETT: Well, the easiest description is Unity as the world's leading game engine. But it's really a platform for building real-time interactive experiences that run on more than 30 platforms. Its success, though, I think is the key. Like, why does it exist. And it's just Unity allows rapid development using an extensible editor, and gets you onto the platforms that you need to be successful. 

And that's really the secret sauce. Been that way for a decade. And with the diversity and explosion in devices and OSes and the complicated things around that, it just turns out that it's a useful way to do that. And we help make people be successful at that. 

MELANIE: So Mark, you alluded to the fact that there was an announcement. What was the announcement? 

MARK: Oh, I can take that. So we got to announce a strategic alliance between Unity Technologies and Google Cloud to work on making the development of connected games faster and easier for our developers. 

BRETT: For Unity, it means that we can enable a whole new generation of games and experiences that don't exist today. Unity has many creators on its platforms. And this new alliance will unlock a variety of new innovative experiences. We're only successful when our users are successful, so this opens up a huge, brand new blue ocean frontier of possibilities. 

MICAH: I get this question a lot, though-- what is a connected game. It might be good for us to-- for our audience-- define what we mean by connected game. It might be straightforward some people. But just to be clear, what we mean by connected game is games that are kind of dynamic and living, where the developer can update the content. It could be a single-person game, or it could be a multi-person game. And in the case of the multiplayer-type games, it could be connected by the developer and also by other players. 

MELANIE: So you were talking about the developer tools that we are working as an alliance together with, and how we're doing connected games. What are some of the tools that are being used? 

BRETT: The way I think of it is I kind of think of it in three parts. I mean, first, at the core level, you've got to have some sort of networking. And this doesn't matter whatever you're trying to build. If it's connected in some way, eventually you're going to have to send some information over some sort of network. 

And what's interesting in games is we actually identified three critical core architectures that are used in games. So for example, you have some things that are like multiplayer, LAN-based experiences, where a group of players are running around and interacting with each other. And that needs one set of things. Those might be server authoritative, for example. 

You have other kinds of games, like RTSes, where you need lockstep. In this frame, this is what I'm doing, and this is what you're doing. And you have others that are twitch, like fighting games, where I'm going to punch you, you're going to punch me. But then we're going to have to figure out a few frames later what actually happened, roll back, roll forward, this kind of thing. 

Now, most networking solutions try to solve this all in one. And what we've decided is that's actually not the right way to do it. Instead of being jack-of-all-trades when you split up. So just at the core level, it's really about implementing these three networking architectures that really, out of the box, not only perform well, but they're set up in a way that makes these kinds of experiences easy to build. Which means the code, everything else on top of that is easy to build. 

Now, that's just the foundational piece. And the next thing you need is you actually need to build an experience on top of this. And Unity and Google are going to make that super seamless to not only build but deploy your game. And we demonstrated this last week at Unite Berlin. And I almost think it got a little lost in the fanfare. People didn't really know what they saw. 

But what we showed was the strategic alliance between Google and Unity is going to make that super seamless to go from developing on my local machine, working and playtesting in a small group, and then spilling over into the cloud. And then, when I'm actually ready to launch and live operate this game, that's going to be a huge change in the number of players that are going to come in. 

And what we demonstrated at Unite Berlin was there's no difference between these. We can seamlessly scale from a local machine to a small cloud experience connecting our testers together, to then a huge number of players. And we showed 1.5 million player capacity, more than 60,000 servers being spun up in less than three minutes. 

So that's crazy. That's something that hasn't been possible before. And Google plus Unity are uniquely positioned to actually solve that. 

MARK: So this sounds pretty amazing. Micah, what does this mean for Google Cloud Platform now? 

MICAH: Well, so one of the great things about the strategic alliance is that Unity already provides a leading solution for developers to work on their game vision. They have a big dream of what they want to build, but they don't have to mess with all the complexity of the tooling, and worrying about all the platforms, and so forth. So Unity does this great job of democratizing game development. 

And what Google Cloud is bringing to this picture is democratizing access to the cloud infrastructure. So while Unity could develop a whole bunch of things on their own, they're going to be able to do it faster by collaborating with Google Cloud to do the infrastructure work, which is our core expertise. And so, combined, we're going to produce managed services for these same developers to do these one-click deployments of multiplayer games straight into the cloud. 

So all these things will run on Google Cloud, but the developers won't have to know what that means. They won't have to know what is that product I'm using. They just need to know I got this scaled up globally, and it runs my game, and I'm not going to be a victim of my success, which is a danger. Maybe it's very popular when your game launches and your infrastructure crumbles because it wasn't actually planned well. We'll make sure that that's always planned well. 

BRETT: And this is a super-- I mean, just building on that, that's a super hard problem to solve. I mean, I don't know that it's actually been solved before. I mean, people have solved individual pieces and optimized for themselves on it. 

Even the most experienced game developers in the world have suffered from day-one outages or peak issues. And so I think Google's ability to seamlessly scale, and Unity's ability to build the front-end experience, it is a pretty interesting combination when you put it together. 

MARK: Micah, does this mean that Unity developers are going to get access to specific Google Cloud products? Or do you have any plans on what that might look like? 

MICAH: Yeah, it's an interesting question, because we really want to walk this line of not adding complexity to the development environment and process. But we do want to provide access to innovative cloud technologies that could actually enable new types of gameplay. 

For example, we have a product called Cloud Spanner, which enables a global relational database for any developer. But if I just said, hey, developer, here's Cloud Spanner, they wouldn't necessarily know what that even means. But if I said, hey, do you want a global relational database for game save data, or game state data, or player data, they're going to know what that means. 

So what we will be doing is offering these kind of prepackaged solutions to the developers through the Unity Package Manager, and they're going to be able to access the solution that they want without having to worry about which product or products are actually doing the work behind the scenes. 

MELANIE: Can you talk more about the plans for the future of the strategic alliance? You were talking a little bit about the infrastructure of the core tools that you're sharing, what the next steps look like. 

BRETT: Well, the next steps are obviously getting our two groups together. And we're doing that here at a Hack Week, already starting the steps on that. I think, Mark, you've got a project that's starting as early steps you can talk about. We're munging some stuff together and just really understanding and coming together the sets of problems we solve, the sets of problems Google solves, and how we can do that effectively together. 

But I think we do have a long-range vision of it's just seamless. It's stepwise. It's easy for people to adopt. They know what they're going to get. They can put those blocks together and focus on actually building great experiences and not worrying about the other bits and pieces. 

So I'd say in the short term it's understanding the landscape of all the things that we need to do. And the long-term vision is that it's just dead simple to start, build, deploy, and run your experiences. And that's what we're committed to. And we're going to do whatever it takes between here and there to get there. 

MARK: And Brett, it's also worth noting, I think, you're moving all your core infrastructure to Google Cloud Platform as well? 

BRETT: That's right. You know, it's funny. I mean, Unity is founded by people from three different countries here in Denmark. And our first employee was located in Iceland. Our second was in Germany, our third was in Lithuania. So from day one, we've been sort of a connected company. And we built all of that, just as many others have, on just the G Suite-- the Google Platform. 

And we've been using all of your applications for more than a decade. And along the way, we've also started-- been using it for various other cloud services that you offer. And we're super excited to move all of our infrastructure over to the Google tech, because we've had nothing but success, and it's what we know. And it's sort of, I think-- when we look at the stuff, it implements things and approaches things in a way that we get, and that is, I think, accessible. 

We have this saying at Unity-- accessible, yet uncompromising. It's really easy to get into, but then when you need to go deep, it's there. 

MARK: Awesome. And the question I keep getting as well while I'm here at Hack Week, which is lovely-- if I'm a Unity developer, what does this migration mean for me? What am I getting out of this? 

MICAH: So if you're a Unity developer, and you want to think about the infrastructure migration, you really should think about your infrastructure that you use in Unity will perform as well or better than it did before. But it should be kind of transparent to the Unity developer. But it also means that the future services that Unity launches will be launching on Google Cloud, and will help with the architecting of that and getting those optimized to run on Google Cloud. 

That also includes things like our recently announced open-source matchmaking project, which will be not only launched as an open-source project but also become a managed service on the Unity platform so that the developer could easily integrate a matchmaker into their game without having to know how to build an entire matchmaker from scratch. We're just getting started with these multiplayer technologies, and there will be more services to come. And they'll all be built on Google Cloud. 

MELANIE: Mark, you were talking about how you guys were at Hack Week. What are some of the particularly awesome things you've been seeing hacked on at Hack Week? 

MARK: So it's been pretty good. I've been working on a project with a group of Unity employees. There's a bunch of us working on taking an existing demo and turning it into a multiplayer demo. So I've been working with the teams that are working on some of the multiplayer stuff. We're hacking and some new things, some things that are coming, and just trying to mung all the things together, it's been really exciting. 

But I've seen people with VR helmets on, and I've seen people with-- I don't know, it looks like network gear floating around. Brett, I'm sure you've seen a whole bunch of stuff here. You've been practically running this thing, haven't you? 

BRETT: Yes, and what's funny is that I'm always surprised. I mean, this will be our 13th or 14th Hack Week. I saw one of our senior graphics engineers with a sewing machine late into the night the other night. So obviously there's some surprise waiting for us. But they've built some sort of AR experience that uses clothing, props, and every other thing you can imagine. 

MARK: Tell us a bit of the background on Hack Week. What's this all about? 

BRETT: We have more than 500 talented women and men building the core Unity product, and we're distributed across the globe. We're actually located at more than 30 cities, about 19 countries. And functionally, it's a chance for us to gather in one place once a year. But it's actually much more than that. 

Most of the innovations and breakthroughs we have brought to the Unity product have actually come out of Hack Weeks. Why? Well, it's actually because you mix a diverse set of people, diverse set of skills, domain knowledge, all collaborating in one place. And you simmer it on high for a week, and magic happens. So this is great. 

And this year, we have a special guest. We have Google with us this year, which is fantastic. And we're also joined by almost 50 women engineers from around the world as part of our women in gaming initiative. And they're hacking alongside of this as well. So it's just great, the crazy mix of people and the diversity that we're getting. It's actually magical. 

MARK: Well, thank you very much for inviting us. I've been having a really good time. 

BRETT: I guess we should ask you. I mean, we kind of reversed the question, I guess, but what do you think of Hack Week? I mean, I've only actually ever been at a Unity-internal Hack Week. I mean, what do you make of it? 

MARK: Yeah, I've been having a ball. It's been really fun. I've had some experience previously a little bit with Unity. But it's been really great to get-- I mean, I only know a little part of it. And so it's been really great to get the different perspectives and see how, basically, the people who live in the trenches with this stuff, how they build things. 

And also just everyone's really lovely, which is great. It's been an absolute pleasure hanging out here. I mean, where we are physically is gorgeous, so can't complain too much. 

MICAH: Yeah, it's a fantastic setting. I'm also really impressed at the ambitions of the people here at Hack Week. And so when you look at the different projects they're taking on, people are not going for just something I could do in my sleep. They're going for hard problems, and it's things that they're not currently working on. So I think it's really focused on the right things to generate those innovations that only come from getting away from your normal routines, and getting with new people, and you get a whole different dynamic. 

MARK: Yeah. I love the fact as well we got told, if you're here, and I know you're here with all your teams, but meetings are optional. I wish I had meetings-are-optional weeks. That would be great. 

BRETT: Well, the irony there is, of course, I'm the one that said that, right? And then I had a meeting, and everybody showed up just to say, I'm not coming to this meeting, because it was optional. So it's fantastic. 

MELANIE: It sounds like a good time. And I like how you just turned the tables on Mark with the question. So, anything else that you guys wanted to cover around our strategic alliance in terms of where things are at with Unity, with GCP, with the Hack Week? 

MICAH: I mean, there's a lot of feedback coming in. There's lots of resources, I guess, we could talk about. 

MELANIE: Great. Let's talk about resources. 

MICAH: There's currently a blog posting that you can look at on blogs.unity3d.com, which is currently taking questions and responding to things. So if people are interested, definitely suggest heading over to unity3d.com and looking around at the connected games information. 

BRETT: So we have the privilege, actually, of-- because of our success, we are also early in the labs with people. We have pretty good view of what's happening in the next year, two years, three years. You take where you are today, where you think you're going to be in two years, and then you also look out 10, 15, 20 years. And you can kind of get a pretty good bearing on what's what. 

And if you think about it, could you imagine, 20 years from now or 30 years from now, not having some form of connectivity when experiencing content? I mean, it doesn't mean that everything's going to be a massive multiplayer game or anything like that. But it's just it's a certainty that everything is becoming more and more connected, and that there's value in that. 

And from a gameplay perspective, we know that content is the most expensive way to build value. And in the old days, it was kind of like, well, we're just going to throw 30 levels, 50 levels, 100 levels. And if you wanted to, say, do a bunch of different minigames, there's a huge amount of engineering cost in doing that. So what we had to do is make that content. 

But as we move from standard definition, high definition, ultra high definition, the scene complexity is growing, we need something else. And we need some way to augment that gameplay. And fortunately for us, human beings make pretty good artificial intelligence for games. 

And so when you mix humans together, collaborating or competing in online environments, when you do bring dynamic elements to stuff, you're able to create a very live, dynamic experience that is super engaging. So connected games is so crucial. Getting out and going to learn about this stuff is really critical for people's success going forward. 

MELANIE: Brett, I'm glad you mentioned about content, because I've noticed more and more the media is becoming more merged. Media like film, television, and concepts are getting more and more merged in gaming. Do you see that continuing to be these spaces that really merge together, especially as the technology continues to advance? 

BRETT: Right. Well, in terms of merging together, there's a lot of different viewpoints on this. I think that when I imagine playing a game in my living room in augmented reality, yeah, that's pretty cool. Do I like the idea of walking down the street in augmented reality, and living in something that's marked up by other people? You know, it sounds kind of interesting. But I think that I'm not sure that the world is ready for complete immersion. 

I think that's what's driving it towards the content itself. I think making the content more alive, the behavior behind the content is really-- it's really critical. But I don't know that the mixing, the mash-up of content is something that's ready for prime time out in the world today. 

MARK: Micah, if people want to hear more about the open-source matchmaker or things like that, are there places they could go as well? 

MICAH: Yeah, actually I'd love to give a shout out for one of the great sources for keeping up with this kind of content and getting more information about what we talked about. Unity3d.com/connectedgames is the landing page for Unity to explain what do we mean by connected games with a lot more detail, what's coming with the managed version of the open-source matchmaker, and more. 

MARK: And if people want to learn about all the open-source side of things? 

MICAH: We'll be making that open-source project public this summer. It's actually very soon now. Trademark. And we're really excited to get that out there for people to download, test, and hopefully contribute code back. 

MARK: All right. Is there anything else? We manage to miss anything, other than saying we're having a lovely time, and thank you for having us here? 

BRETT: We're having a lovely time. The weather's amazing. In Denmark, the weather can change at a moment's notice. So we should end here and get outside while we can. 

MARK: I think I'm going to go to the beach, actually. 

MICAH: It's just right over there. 

MELANIE: That sounds lovely. Well, you guys have fun. 

MARK: All right, awesome. Well, Brett, Micah, thank you so much for joining us on the podcast today. 

BRETT: Thanks, Mark. 

MICAH: Thanks for having us. 

MARK: Well, Micah, Brett, thank you so much for joining us today. It's great to hang out with you in person, and this was a great to chat with both of you about Unity and Google Cloud. But why don't we get stuck into our question of the week? 

MELANIE: Yes, and this week's question is, how do I report errors to Stackdriver from a Cloud Function? 

MARK: So this is pretty straightforward, which is kind of nice. You're just going to need to know where it is. You can essentially omit an error from a Cloud Function to Stackdriver error reporting by simply-- I love things that say "simply"-- by simply logging an error object to a console. So basically console.error, and then parsing in the error message. 

It's really that simple. It may not necessarily be something that's immediately picked up if you want to get the specific details of an error. So doing it this way is important inside your track hashes, and basically how you handle your errors inside of your Node.js-type applications. Well, inside your cloud functions, at least. 

It's worth noting that the following will not omit a Stackdriver error. Throwing something that's not an error object, for example. Logging an error object at the info level. Logging something that's not an error, per se, either. And that kind of stuff. So make sure you use console.error, and then parse in your error message, and you should be good to go. 

MELANIE: Yeah, and they have a nice little bit here, too, that talks about how if you're not sure it's an error object, that they show you basically how you can check it. 

MARK: Oh, nice. 

MELANIE: Mark, now that you're back, where are you going next? 

MARK: Where am I going next? I think I'm going to Next next. 

MELANIE: Nice. 

MARK: You like what I did there? 

MELANIE: I did. I did set that up for you. 

MARK: Yeah, jokes are better when you explain them. 

MELANIE: So you're speaking at Next. And we will be at Next as well doing a number of interviews. We'll be talking to a number of folks that are there. You should come by and see us. 

Prior to that, I'm actually going to be doing a couple of talks, which I will share next week. And yeah, we'll share some links on that as well. 

MARK: Sweet. I think you're bouncing around a lot. 

MELANIE: Potentially. 

MARK: Potentially. 

MELANIE: Potentially. 

MARK: Potentially, Nice. Nice, nice, nice. 

MELANIE: Yeah. 

MARK: Awesome. Well, Melanie, thank you for joining me for yet another episode of the podcast. 

MELANIE: Thank you, Mark. 

MARK: Thank you all for listening, and we'll see you all next week. 

[MUSIC PLAYING]