+++
audioDuration = "00:32:48"
audioFile = "Google.Cloud.Platform.Podcast.Episode.275.mp3"
audioSize = 47174900
categories = ["Online Gaming", "Online Conference"]
date = "2021-09-08"
description = "Carter Morgan and Guillaume Laforge co-host this week's episode about what it took to develop the I/O Adventure Game."
draft = false
episodeNumber = 275
hosts = ["Carter Morgan", "Guillaume Laforge"]
title = "Building the I/O Adventure Game with Valentin Deleplace"
image="/post/episode-275-building-the-io-adventure-game-with-valentin-deleplace/images/hero/hero-EP-275.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/pkezs4/episode_275_building_the_io_adventure_game_with/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Carter Morgan](https://twitter.com/carterthecomic) and [Guillaume Laforge](https://twitter.com/glaforge) co-host this week's episode about what it took to develop the Google I/O Adventure Game. Our guest [Valentin Deleplace](https://twitter.com/val_deleplace) and Guillaume introduce us to the game designed to encourage interaction with I/O attendees at the virtual conference held this year.

Adventure takes the look of a 90s role-playing game. The online world facilitates the meeting of hundreds of conference attendees and presenters to mimic the in-person conference setting and facilitate meaningful conversations. With avatars, text chatting capabilities, and mini games, attendees' experiences go beyond simply watching online technical presentations.  

The development of Adventure Game required scalability to handle varying attendee numbers. It takes advantage of many GCP products, including Compute Engine and Cloud Run. Valentin describes why he and the team chose Cloud Run and how they used it to to stress test the game. He talks about challenges the team faced and how they overcame them to produce a smooth, enjoyable experience for conference-goers.  Being a game that's live for specific periods of time rather than indefinitely presented different challenges as well. Valentin explains that scaling down, for example, is treated differently for this type of game. 

Adventure will be available at future conferences.  

##### Valentin Deleplace

[Valentin Deleplace](https://twitter.com/val_deleplace) is a developer advocate at Google. He's also a senior cloud backend engineer, interested in performance and UX, and an enthusiast Gopher.

##### Cool things of the week

* New Cloud Functions min instances reduces serverless cold starts [blog](https://cloud.google.com/blog/products/serverless/cloud-functions-supports-min-instances)
* What's the key to a more secure Cloud Function? It's a secret! [blog](https://cloud.google.com/blog/products/serverless/cloud-functions-integrates-with-google-secret-manager)
* Shift security left with on-demand vulnerability scanning [blog](https://cloud.google.com/blog/products/identity-security/scan-for-vulnerabilities-early-to-shift-security-left-in-cicd)
* All you need to know about Cloud Storage [blog](https://cloud.google.com/blog/topics/developers-practitioners/all-you-need-know-about-cloud-storage)

##### Interview

* Google I/O [site](https://events.google.com/io/?lng=en)
* Chrome Dev Summit [site](https://developer.chrome.com/devsummit/)
* Join the Adventure at Google I/O [video](https://www.youtube.com/watch?v=hMjtFRqaTsI)
* Google’s I/O Adventure was almost as good as being there [article](https://arstechnica.com/gadgets/2021/05/googles-i-o-adventure-was-almost-as-good-as-being-there/)
* Set Snail [site](https://www.setsnail.com)
* Compute Engine [site](https://cloud.google.com/compute)
* Cloud Run [site](https://cloud.google.com/run)
* Using WebSockets [docs](https://cloud.google.com/run/docs/triggering/websockets)
* App Engine [site](https://cloud.google.com/appengine)
* Agones [site](https://agones.dev/site/)

##### What's something cool you're working on?

Carter is working [VM End to End](https://www.youtube.com/watch?v=AGa6fUTtCgE).

Guillaume is working on new features for [Cloud Workflows](https://cloud.google.com/workflows) and helping with the [Serverless Expeditions](https://www.youtube.com/watch?v=s2TIWIzCftM&list=PLIivdWyY5sqJwq_pgOxcHzusWjXDVCEiX) videos.

{{< transcript "[MUSIC PLAYING] CARTER: Hi, and welcome to the weekly Google Cloud Platform Podcast. I'm developer advocate Carter Morgan, and I'm here with my fellow developer advocate, Guillaume Laforge. Hello, Guillaume." >}} 

GUILLAUME: Hello, everyone. Hello, Carter. I'm glad to be here with you again. 

CARTER: Yeah, you're very excited about this episode. And before we get into why, I just want to give the audience a little background about you. You've been working with serverless technologies and even App Engine, if I'm correct, right? 

GUILLAUME: Oh yeah, I've been an early adopter of App Engine, 10 years ago when they launched the Java version. I wasn't working for Google then, but since then, I've been a big fan of serverless technologies. 

CARTER: Yeah, way back in the game. So serverless, I think that's a good segue into why you're so excited about today's episode. Can you talk a little bit about that? 

GUILLAUME: Yeah. So we're going to have an interesting story today. We're going to speak about an adventure, kind of an online adventure. And based in France, in the Paris office and in the office, I've got a colleague called Valentin Deleplace who's with us today. Valentin's a senior cloud backend engineer, and he's interested in performance, UX, and more, and is also an enthusiastic golfer. And he literally worked on an online adventure. 

CARTER: Oh wow. Well, and I love adventures, too. I love Paris. So this episode is full of good things. Can you tease a little bit more about it? It was an online adventure for what? 

GUILLAUME: For some conferences. You know today, because of the pandemic situation, we cannot go to conferences. I mean, in real life, you cannot attend conference. So instead, you're watching conferences through your computer cameras, whatever, tablets, et cetera. 

But you're kind of missing something like, you know, the interactions you have with the audience, with the other attendees, with the speakers, et cetera. So how can you recreate that feeling of being among the crowd with other fellow developers? And that's how the adventure came to life at a couple of events, the Chrome Web Summit and the Google I/O. 

CARTER: Oh wow. 

GUILLAUME: Yeah, so there's an online adventure. 

CARTER: Before we get into this, what if we teased some of the cool things around Google? We won't go too far in depth, but just a brief mentioning of some of the things that are going on. 

[MUSIC PLAYING] 

GUILLAUME: So, as I'm focusing on serverless technologies, I'm particularly interested in two news tidbits that appeared very recently focusing on Cloud Functions. So if you don't know Cloud Functions, that's a lightweight platform for creating your microservices standalone functions. So it's really great to split your big monolith into smaller services. It's a great fit for that. 

And there's a newly launched ability, which is the ability to specify a minimum number of instances that run your code. So you can say, OK, I want to have at least three functions ready to serve incoming requests. So I don't need to worry anymore about cold starts, waiting for the function to be ready to serve a request. I know that I have a function that is already ready to serve incoming requests. So that's pretty cool. 

And we have a link for you, if you want to follow a little tutorial to try that out yourself. 

CARTER: Oh man, that does sound really cool. 

GUILLAUME: Still speaking about Cloud Functions, we also have another cool product which is called Secret Manager. Sometimes in your code, you need to store some secret, like, user passwords to connect to a database or something like this. So we've got a great service called Secret Manager. It's a fully managed system that stores and keeps your secrets safe, and you've got an API that you can call to retrieve those keys and passwords and search. 

In Cloud Functions, you could use the API to do that, but there's a super nice integration. It's as if you were using environment variables. Let's say, if you were doing some Node.js, you'd just say a process and et cetera to fetch an environment variable. But instead, it's just like an environment variable, but you're picking the information from Secret Manager. So it's safely retrieved, safely stored in Secret Manager, and it's really a breeze to use from Cloud Functions. So nice integration. 

CARTER: Yeah, and I love just hearing how excited you are about all things serverless. I love this. 

GUILLAUME: [LAUGHS] Yeah. 

CARTER: You know, I've always been about DevOps, so CI/CDs has been a big thing, automating processes. And that's something that's really cool about what's happening around Google Cloud right now. I don't know if you saw it, but there was an article that Brian Russell and Nikhil Kaul put out about on-demand vulnerability scanning for GCP registries. 

GUILLAUME: Right. 

CARTER: And so-- yeah. And this-- I think this is really cool because it lets you check for vulnerabilities if they're stored in the container images or if they're stored in the registry. And so that's going to help make things a little more secure and help people to be able to early detect, before hopefully these images are out and running in the wild, if there's any vulnerabilities. And so there's definitely an article to go check out in the show notes. I would recommend that article. I really liked it. 

GUILLAUME: All the features that enable your developers, your teams, all the CI/CD processes that you have and to make things more secure, more safe, yeah, that's a big, big bonus for everyone. 

CARTER: You said "big" and I thought, Cloud Storage! 

[LAUGHTER] 

My teammate Priyanka wrote an article about Cloud Storage, and she has an ongoing series about a lot of storage and other type of things. But Cloud Storage is just global. It's secure, it's scalable object store for immutable data, so images, text, videos, things that aren't going to change or constantly be updated. And so this article goes into depth about how to use it, how to secure it, and different types of storage buckets you might use and why. 

GUILLAUME: Yeah. And Priyanka is really awesome with her videos and also all the sketch notes she does to illustrate everything that make things super clear. 

CARTER: That's a great point. This article is one of the ones where she has a comic with it. So I think it's called "GCP Sketch Note-- The Series." And you can search that on Twitter-- you know, the hashtag #GCPSketchNote. So I think, without further ado, what if we get into this episode with Valentin? 

[MUSIC PLAYING] 

Valentin, would you introduce yourself? Like, who are you and what have you been working on? 

VALENTIN: Sure. So I am Valentin Deleplace. I'm a developer advocate at Google Cloud and I love everything backend, performance, UX, and also Go and serverless. 

CARTER: Amazing. And what is this I/O Adventure? 

VALENTIN: It's a serious game that looks a little bit like old school roleplaying games from the '90s. I say serious game, but it's a technical term here. But playing adventure is actually a lot of fun. It's a multiplayer world where you can meet with hundreds of other attendees. You can chat with them and learn new stuff with dozens of gamified schematic experiences. 

CARTER: Oh, wow. So Valentin, why did you develop this serious game for an online conference? That seems kind of at odds with going and attending and being very serious and learning a bunch of information. How did these two things come together? 

VALENTIN: Adventure is an original creation, started in 2020 by our Google coworker Tom Greenaway and the gaming company Set Snail as a way to connect people, even if the event couldn't take place on site and in person, obviously because of the pandemic. So you're not physically at the same place, but you have an avatar and you're together in the same virtual space. This experience of being together is great and it goes beyond the experience of just watching the same TikToks at the same time. 

GUILLAUME: And what are the features of this game, exactly? 

VALENTIN: What we have is some text chat capabilities to let the attendees communicate in real time with each other, with attendees in the immediate vicinity. There are also a lot of solo mini games that you can also find in other offline RPGs like fishing, playing mini golf, et cetera. 

And we needed to have some autoscaling capabilities in order to start more servers in case of high traffic, so GCP-- Google Cloud Platform-- has many built-in scaling capabilities, but we actually used some custom strategy for autoscaling and load balancing. 

CARTER: Wow. And so what levels are you trying to scale to, or what type of load was this system under? 

VALENTIN: So far, we've used Adventure in two distinct online events. One in December was Chrome Dev Summit, with a couple of thousand of attendees, and most of them did play the game. So we had to scale for up to 10,000 simultaneous players. And then later, we deployed it for Google I/O, but Google I/O is larger, so we stress tested for up to 160,000 players successfully. 

CARTER: Wow. 

VALENTIN: Unfortunately, the actual load at any given time was way below that threshold, but it was still a success. 

GUILLAUME: And how many players were there at the peak traffic? 

VALENTIN: I think we had a peak of 6,000 simultaneous, something like that. But the total number of attendees over the three days of Google I/O was much higher. 

CARTER: Oh, wow. And then what technology? Was this all done on GCP? 

VALENTIN: Yes. All the server components are deployed and hosted in Google Cloud Platform, in GCP. The game server, it runs in Google Compute Engine, GCE, with container optimized instances, because we deploy Docker containers. The server and the browser client communicate with each other with WebSockets. The frontend uses React and the PixiJS engine. And for load testing and stress testings, we used Cloud Run. 

GUILLAUME: Perhaps we can dive a little bit into how you use Cloud Run for stress testing. 

VALENTIN: Sure. So what we had to test was a few server components written in Node.js and some client code that was also written in Node.js and TypeScript. So we have a stress test script that initiates a new WebSocket connection, then makes random movements. It's just jumping around and we can monitor that at a screen for several minutes. And then it disconnects and we launch thousands of those scripts simultaneously. 

So this script is also written in Node.js, but it could have been written in any technology that has a WebSocket client. We wrap it in a container, deploy it on Cloud Run with the command line gcloud run deploy, and now we can even deploy the script from source, which means that we don't even need to care about explicitly dealing with containers when deploying to Cloud Run. That's for the stress testing part. 

CARTER: Oh, wow. 

VALENTIN: In order to achieve up to 160,000 simultaneous simulated players in the stress test, we used two layers of concurrency in Cloud Run. Each Cloud Run instance-- so that is a virtual machine-- was configured to handle up to 1,000 concurrent clients, long-running stories of simulated players jumping around. And many Cloud Run instances were automatically started and shut down, thanks to the serverless autoscaling capabilities of Cloud Run to handle all of the heavy load. 

GUILLAUME: I'm curious why you chose Cloud Run. Perhaps it's because of this WebSocket feature in particular, or could you have done that with App Engine, Cloud Functions, or other serverless technologies? 

VALENTIN: That is a great question, and you know me very well, Guillaume, so you know that I'm a big fan of everything serverless. So WebSockets were not the reason. So first I was like, I need to simulate a very high number of requests, so what do I use? And I love many of our serverless products for that. App Engine is able to autoscale, Cloud Function, Cloud Run also. 

And we chose Cloud Run because you can basically wrap anything you need inside a container, including WebSocket client, WebSocket servers if you need them. And I was like, I'm not very familiar with WebSocket. Will it work well inside the same container and inside the same Cloud Run instance to have many, many concurrent WebSockets running? 

So we just tried and it turned out that yes, it can handle that kind of load very smoothly. And we knew beforehand that it could scale very high-- maybe not infinity, but pretty close. 

GUILLAUME: [CHUCKLES] 

CARTER: And so you were instrumental in designing a lot of the test and test coverage, yes? 

VALENTIN: Yes. 

CARTER: Like, when you got this application at first, was it mostly complete and then you had to make tests around it, or did you get to work with the developers almost hand in hand while designing the test? What was that process like? 

VALENTIN: So like every good software project and every good video game project, we were in a hurry. We were late all the time, which meant that I had to work hand in hand with the developers to test the project in a state where it was every day in an ever-changing environment. I mean, the little details of the game were changing all the time, so it was natural that I had to adjust the stress test from time to time. So that was not a problem. 

What I wanted to emphasize with the team was that it's kind of dangerous to do some quality insurance and stress testing on a development environment that's not exactly the same as the production environment. So what I wanted to make sure is that we had the production environment, even if it's not in the final state that it exists, it's created and deployed way before the date of the event, and that the production environment is used for the stress testing so we can test things as close as possible to the real thing. I really wanted to emphasize that. 

And even with that advice in mind, we did experience a couple of unexpected and tricky differences between the testing environment and the production environment. So that was an interesting challenge. 

GUILLAUME: And the differences were between the actual environment or, for example, between the behavior that you had scripted and the real behavior of the actual real users? 

VALENTIN: So that's, again, a great question. We did not experience too many bugs due to differences between the dumb player simulation that just does boring stuff like jumping around and the actual human behaviors. 

GUILLAUME: OK. 

VALENTIN: The point of the dumb simulated players was really to stress test the scaling capabilities of the infrastructure, like will the CPU cores be enough, will we run out of memory, will we properly scale up when more servers are needed-- all those kind of questions. But it was not designed as a comprehensive test suite of all of the features of the game. And fortunately, we did not experience many problems due to the fact that the stress test script was not comprehensive enough. So that part was fine. 

However, we must know the limits of what we are testing, and in the stress test campaign, we are actually not testing the client part at all. We are testing only the server components and the cloud infrastructure in general that we are using-- that is endpoints, load balancers, et cetera. 

But if there is any blocking bug inside the TypeScript code running in the browser client, then we will not catch it. And indeed, there was one bug that made the performance very poor on the client side, and that was not fixed before the launch of Google I/O Adventure, which resulted in a suboptimal experience the first day. And there was kind of a kerfuffle of, what do we do with this? We had to fix that in a hurry. It took a couple of hours. 

And so the game was way better on the second and third day of Google I/O. And then everything was smooth and it received mostly praises and a general overwhelmingly positive reception on social media. 

GUILLAUME: The players were seeing things like frozen screen or things like that, or? 

VALENTIN: From what I witnessed, the screen looked frozen as soon as you had a few dozens of other attendees, other players on the same screen. So it was not a super smooth experience, and it was kind of sluggish even when you had only three or four other players on the same screen. 

And also, combined to that, some attendees had some difficulty joining because you could join the game only if you were a registered attendee, and there was a delay of synchronization between the list of registered attendees and the list of registered players. So it was not obvious to everyone why they couldn't join on day one. 

CARTER: Yeah, I was going to say while researching this, I saw that come up in the notes. And it's so interesting how different the user can see something versus the designers. So designers are like, no, we put in a delay on purpose to stop bad behavior. And a lot of the users who maybe weren't aware were like yo, it's not working correctly. It's like, no, no, no, that's how it was designed. 

VALENTIN: Yes, I am painfully aware of this kind of difference of point of view. And personally, that's my job. I'm a developer advocate. I always advocate for developers, but for end users in general, and so I can feel the pain of confusing user interfaces and error messages that are not saying the exact thing. So yes, I can totally relate to users being sometimes confused or disappointed. 

And I was so relieved after day one, when everything worked better, that thousands of I/O attendees could actually go fishing and mini golfing and chatting with each other and posting selfies and group selfies on Twitter. That was amazing. 

CARTER: Yeah. One thing I was really curious about is-- because this app seemed like it was kind of developed like a traditional application would be outside of Google. And so I was curious if you ran into problems that maybe non-Googlers might run into, like quotas or having to use APIs and limit rates or anything like that. Was there any learning experience navigating, like, quotas and whatnot? 

VALENTIN: We did unexpectedly hit several quotas. So it's true that it wasn't exactly usual for us to be running that many VMs, virtual machines, with that many WebSockets open. So like any customers, we had to reach Google Cloud to request an increase of some of the quota limits. Fortunately, we discovered which quota limits needed to be increased during the stress test campaign. 

So once again, I cannot overemphasize this. It's important to do the stress testing-- not just bug squashing testing, but really stress testing with a lot of load to discover this kind of unexpected limits and to do that in the actual final production environment. 

CARTER: So the other thing that seemed really interesting to me was some of the operating conditions that you had to run under. My understanding was this had to be up almost continuously throughout I/O. 

VALENTIN: First the two conferences where we've been deploying Adventure were limited in time. The Chrome Dev Summit in December lasted for three days, then Google I/O in May also lasted for three days. So our main challenge, from the infrastructure point of view, was making sure that we could accommodate thousands of simultaneous players without crashing. 

We could and we did purposely overprovision-- that is, we started and prewarmed more servers than we actually expected to use in order to reduce autoscaling related latencies, the infamous cold starts, and the probability of a server failing to start. And the same strategy, it would not work as well, maybe, with a game that stays constantly online. I mean, it would work, but overprovisioning would be very expensive in that case. 

CARTER: So then what would you do if you were developing a traditional game? Like, would the testing approach change too much, or is it mostly the game itself that would change and the approach to testing it would stay really similar? 

VALENTIN: I think most things would be similar. Maybe the question of scaling down would be handled differently because in an online conference, everybody joins just before the developer keynote and then plays for a couple of hours and then leaves. And so we need to care more about being able to scale up than about the question of scaling down. 

CARTER: Mm-hmm. 

VALENTIN: But if the game stays up for weeks or months, then we need to put more effort in the strategy of scaling down. If you have two shots of the game, each of them contains only seven players, maybe it's time to smoothly merge the two instances and shut down one of them. And we did not need, for these conferences, to have such fancy strategies for scaling down, but definitely that would be the right thing to do for a traditional game. 

GUILLAUME: The game is now offline, but what's coming up with this Adventure? 

VALENTIN: Well, we are currently working on using Adventure again in a couple of online events this fall in 2021. 

GUILLAUME: Cool. 

VALENTIN: We plan to integrate Agones, a great gaming framework for orchestrating game features in a Kubernetes environment. And we are also trying to switch the server code from Node.js to Go for performance reasons. It would simplify the concurrency to take advantage of all of the Compute Engine CPU cores. 

GUILLAUME: It rings a bell to me in my mind about all the stuff we're seeing and hearing about the metaverse-- you know, this cyber space kind of science fiction universe where we are all in. Do you think that without the current pandemic situation, we would have developed something like I/O Adventure, or would we have done something else or something different? 

VALENTIN: I have a very personal alternative theory. I think what you and I usually call "reality" is just something only rigged that is not exactly a dream that is actually a video game played by actual entities, and the actual existing entities are the Adventure players, you see, and they are playing us. 

GUILLAUME: OK [CHUCKLES]. But are they among us? 

CARTER: I'm over here just thinking about that right now. I'm like, I don't even have another question. I love this idea of a shared reality, almost like you're saying the reality is what you're doing in that moment more so than where you're at. 

VALENTIN: Wow. 

GUILLAUME: What's interesting, at least to put that back into the reality of the current situation, is the fact that it's a way to work around the fact that we cannot meet each other in real life. And I thought that Adventure was really a great idea in order to be able to have some more real world like interactions between attendees, between all the people that participated-- speakers, facilitators for the various online workshops and such. So I really like this idea, and I'm really happy that you did something like this for those events. 

VALENTIN: Oh, if I may interject, in my opinion, it's not that much about real life than about being together. If you look at the avatars and the game app, it's all a little bit cartoonish. It's cute like "Zelda 3" or the other RPGs. And it's not designed to mimic real life-- just about enabling interaction and this sense of togetherness at the same event. And that is great. 

GUILLAUME: Yeah, true. And are there some lessons for developers, if developers want to do something similar, perhaps, for another conference or events? 

VALENTIN: I think it's great to experiment with online concepts and technical stacks. This is something I'd like to encourage in general. And I may repeat myself here, but no big deal. To validate the technical components, my advice is really to deploy a production environment very early, preferably weeks before the launch, and use it to do most of the quality assurance testing and the stress testing campaigns in conditions that are as close as possible to the real thing. 

CARTER: That makes a lot of sense. And then a question I would have about that type of testing-- a lot of times people can't afford to have a full production environment that they test in. With Cloud Run or maybe like GCE or something like that, is it easy to make one-offs or things like that that you can run in production, but not keep the test in production forever? 

VALENTIN: Yes, totally. That's one of the reasons that I fell in love with serverless and the App Engine almost 10 years ago-- it's because it's a really great path from development to production. I mean, there's technically no differences between deploying for testing or deploying for using in production. It's the same action. 

And also, this whole pay as you go philosophy, where it will cost a lot only when there is a lot of traffic and then cost you nothing even if it's still deployed when there is no traffic, that's a really great selling point of serverless for little projects or projects that are moonshots that might have a great success, in which case we want to pay big bucks to have it handle millions of requests, and otherwise no success at all, in which case it's great to pay $0 for zero request. 

All of these features of serverless combined, that's a great selling point, in my opinion, for many applications-- almost all of those I can think of, even if Adventure itself is currently not running on serverless, but that's another story. To your point, yes, Cloud Run, App Engine, Cloud Function, they're really great to start experimenting. And maybe in case of success, keep the same code and the same deployed environment for production. 

CARTER: Yeah. So are there any resources or anything-- if people wanted to find out more about I/O Adventure or hear more about its deployment, are there any resources I could link listeners to? 

VALENTIN: Yes, sure. There are a couple of videos about the past Google I/O Adventure experience that I will provide the links for. And also, if you're interested in Agones, the open source framework for orchestrating games in Kubernetes, we'll give a link. And Cloud Run has now evolved with so many amazing serverless capabilities that we must provide a link to Cloud Run. 

CARTER: Yes. And then do you know if the code for I/O Adventure is ever going to be released? Is that something that we're ever going to be able to see? 

VALENTIN: So I might be revealing something top secret here, but yes, we intend to open source the code. It's not open source yet, but stay tuned. 

CARTER: Oh, wow. OK, very cool. Well, thank you so much for coming in and just sharing information about this very cool project that Google did for I/O. 

VALENTIN: Thank you so much, Carter and Guillaume. 

GUILLAUME: Thank you, Valentin. 

CARTER: Wow, Guillaume, you weren't wrong. That was an adventure. 

GUILLAUME: Yeah, I really like the way that we're recreating links and bonds between developers, even if it's online. You know, there's always a way to communicate, exchange, chat, meet other people, even if it's still virtual today because of the pandemic situation. But that's cool, and I'm sure we'll reconnect live at some point. 

CARTER: Oh, I hope so. But in the meantime, it was very cool seeing the technology that went behind something like this and how it compared to what you would do for different constraints. Like if you had a video game that was running for a long time, you might have handled this process differently. Through stress testing, Valentin was able to figure out how to make a program that was going to suit the specific needs of I/O in this case. That blew my mind. 

GUILLAUME: And it was nice to see the use of serverless technologies again with Cloud Run to be able to replicate the way users would actually react and interact with the application, with the game. 

CARTER: Mm-hmm. Serverless for the win here. 

GUILLAUME: Yeah! 

CARTER: And then the other thing I thought was exciting, and we threw it in at the very end there-- the potential for an open source version or a Go version of this. That's got me excited. I would love to just see the code behind the scenes-- how does it work, how does it run-- and be able to make my own version of it, you know, just branching off of what Google already made. 

GUILLAUME: Yeah, exactly. Potentially for your own events, your own communities, et cetera. Till we meet for real, that's a good way to interact with people. 

CARTER: Yeah. All right, we heard about everything else going around Google, we went on an adventure. I want to know what you're working on. Is there anything you've got going on or anything our listeners should check out? 

GUILLAUME: Yeah, so I'm still working and focusing on Workflows, and there's quite a few things coming up. You know, the Cloud Functions tidbits that we mentioned, I like how the team-- the engineers, et cetera-- are iterating over the products and adding new little features to each. 

And well, I can't tell you everything, but in a few weeks, there will be a couple of new features coming in Cloud Workflows that should be interesting to check out, and I'll be sure to share with you some of the videos and articles that I'll write about this. But be sure to follow what's coming up with Workflows. There are some cool new things. 

And without revealing any secrets, at least some of the new features are a simpler way to handle data structures in your workflow definitions and such, but there are some really cool features coming up down the road. 

CARTER: Oh, wow, that is amazing. I got to be honest, I haven't used serverless much, and then after your enthusiasm for it and after just seeing the power in what it's capable to do with the I/O Adventure Game, it's something I want to go play and experiment with a little bit more. 

GUILLAUME: So we've got several serverless products. On the compute side, you've got App Engine, Cloud Functions, Cloud Run. So be sure to check out these. And besides that, there are various tools that are useful when you're writing or creating architectures with those serverless technologies. 

So Workflows is a great tool in your toolbelt to bind things together. For example, if you want to call several APIs as if it were one single business process, you could orchestrate those APIs with something like Workflows. So there's Workflows. There's Eventarc to create sources and things to react to events in your cloud infrastructure and launch some serverless processes in a nice offering when you combine all those things together. So that's why I'm really excited about all the serverless stuff that we're releasing one after the other. 

CARTER: Oh man, I see that. And it's funny because I just made a series called "VM End to End" and it's about basically a VM enthusiast and a VM skeptic-- myself, in this case-- having discussions about VMs and are they relevant, do they still matter, why does Google invest so much into them. We just wrapped that season up, so the first episode is going to go out before the listeners can hear this podcast. So they can find that "VM End to End" on YouTube. 

GUILLAUME: Cool. 

CARTER: But I would love to maybe do a season where you talk to me about serverless. 

GUILLAUME: Yeah. 

CARTER: What is it? Why is it so important or amazing? Does it matter in a cloud-native future? Because again, I have no idea. I think that'd be a lot of fun. 

GUILLAUME: Why not? And there's also another series from our colleague Martin Omander, "The Serverless Expeditions." So if you search for "serverless expeditions"-- and there's actually one video with me. But it is covering quite a few topics around the serverless area, so be sure to check that out as well. 

CARTER: Amazing. Well, thank you so much, Guillaume. Thank you, everyone, for listening at home. We'll see you all next week with another episode of the podcast. 

GUILLAUME: Thank you. See you, everybody. Bye bye. 

[THEME MUSIC]