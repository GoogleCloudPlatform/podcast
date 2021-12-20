+++
audioDuration = "00:35:39"
audioFile = "Google.Cloud.Platform.Podcast.Episode.243.mp3"
audioSize = 51260768
categories = ["Wrap Up"]
date = "2020-11-02"
description = "This week, four of the podcast's greatest hosts come together to celebrate all of the fun and informative episodes we've been privileged to do this year!"
draft = false
episodeNumber = 243
hosts = ["Mark Mirchandani", "Jon Foust", "Priyanka Vergadia", "Brian Dorsey"]
title = "2020 Year End Wrap Up"
image="/post/episode-243-2020-year-end-wrap-up/images/hero/hero-EP-243.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/jmskuc/episode_243_2020_year_end_wrap_up/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week, four of the podcast's greatest hosts come together to celebrate all of the fun and informative episodes we've been privileged to do this year! Join [Mark Mirchandani](https://twitter.com/markmirch), [Jon Foust](https://twitter.com/syntxerror1), [Priyanka Vergadia](https://twitter.com/pvergadia), and [Brian Dorsey](https://twitter.com/briandorsey) as we talk about our favorite guests and shows, some cool things that happened this year, and what we're looking forward to in 2021! 

##### Cool things of the week

* A Giant List of Google Cloud Resources [blog](https://cloud.google.com/blog/topics/developers-practitioners/giant-list-google-cloud-resources)
* Google Cloud 4 Words [site](https://github.com/gregsramblings/google-cloud-4-words)

##### Our favorite episodes

* Jon's Favorites
     * GCP Podcast Episode 212: Data Management with Amy Krishnamohan [podcast](https://www.gcppodcast.com/post/episode-212-data-management-with-amy-krishnamohan/)
     * GCP Podcast Episode 237: NVIDIA with Bryan Catanzaro [podcast](https://gcppodcast.com/post/episode-237-nvidia-with-bryan-catanzaro/)

* Priyanka's Favorite
     * GCP Podcast Episode 240: reCAPTCHA Enterprise with Kelly Anderson + Spring ML Potholes with Eric Clark [podcast](https://www.gcppodcast.com/post/episode-240-recaptcha-enterprise-kelly-anderson-springml-potholes-eric-clark/)

* Mark's Favorites
     * GCP Podcast Episode 242: NASA and FDL with James Parr and Madhulika Guhathakurta [podcast](https://gcppodcast.com/post/episode-242-nasa-and-fdl-with-james-parr-and-madhulika-guhathakurta/)
     * GCP Podcast Episode 217: Cost Optimization with Justin Lerma and Pathik Sharma [podcast](https://gcppodcast.com/post/episode-217-cost-optimization-with-justin-lerma-and-pathik-sharma/)
     * GCP Podcast Episode 228: Fastly with Tyler McMullen [podcast](https://gcppodcast.com/post/episode-228-fastly-with-tyler-mcmullen/)

* Brian's Favorites
     * GCP Podcast Episode 223: Voice Coding with Emily Shea and Ryan Hileman [podcast](https://gcppodcast.com/post/episode-223-voice-coding-with-emily-shea-and-ryan-hileman/)
     * GCP Podcast Episode 233: Bare Metal Solution with James Harding and Gurmeet Goindi [podcast](https://www.gcppodcast.com/post/episode-233-bare-metal-solution-with-james-harding-and-gurmeet-goindi/)
     * GCP Podcast Episode 212: Data Management with Amy Krishnamohan [podcast](https://www.gcppodcast.com/post/episode-212-data-management-with-amy-krishnamohan/)

##### Sound Effects Attribution

* "Bad Beep" by RicherLandTV of [Freesound.org](https://Freesound.org)
* "Small Group Laugh 6" by Tim.Kahn of [Freesound.org](https://Freesound.org)
* "It’s Always Night in Space" by JamesSilvera of [HDInteractive.com](https://hdinteractive.com)
* "Easy Cheesy" by LoboLoco of [FreeMusicArchive.org](https://FreeMusicArchive.org)

{{< transcript "[MUSIC PLAYING] MARK: Hey there, everybody, and welcome to episode 243 of the weekly Google Cloud Platform podcast. I am so happy to be here with Brian, and Priyanka, and Jon. This is a four-person episode. I don't think we've done this in a very long time." >}}

BRIAN: We can all talk over each other. 

PRIYANKA: Yay. 

JON: Yeah. Everybody say loud noises right now. Go, go, go. Do it. 

PRIYANKA: Whoa, whoa, whoa. 

[INTERPOSING VOICES] 

MARK: Every conversation we have will be four people talking at exactly the same time, and that's why we record isolated audio. But of course, we do have all of our great friends here, because I am sorry to say that this will be the final episode of 2020. So we are doing a 2020 wrap up, because we have had some really, really awesome conversations this year. I'm super excited to dive into that, and I know Brian, Priyanka, and Jon are as well. 

PRIYANKA: Very sad about the fact that it's the last episode. But, oh yay, 2020 is over. 

[LAUGHTER] 

MARK: Unfortunately [INAUDIBLE] 

[LAUGHTER] 

Unfortunately, the year still has some time left before it is over. 

PRIYANKA: Oh, God. 

MARK: But it has been a period of time in which many things have happened. I think a lot of us have obviously been affected in a lot of different ways, and we have had a tremendous amount of fun and opportunity to create this podcast. And thankfully, it really does support this remote structure that we're all in now. So I'm really grateful to have had that and still to be able to bring these awesome episodes and conversations, and again just have fun with our friends. 

JON: I don't know about you, but I never liked recording in the office, because just like New York streets, it is extremely noisy. I could never find an isolated room in order to record in the office. But my previous place where I was living did not really offer me an isolated space. But now that I'm in my new space, this definitely works out a lot better for me. So I definitely plus 1,000 your words. 

BRIAN: Yeah, we'll take the small, good things where we can find them. 

MARK: That's really what it's about. We've had to make a lot of changes. And so with this opportunity, and, of course, we're really excited to continue bringing conversations on, we'll probably stick to this structure. Because like Jon said, it's actually a little easier to record like this. We've actually been able to bring on a lot of people that may have been a little bit harder to bring into those studios like we were doing before. 

BRIAN: OK, so what is this week? 

MARK: So this week is a wrap up of all of our favorite episodes. We're going to try some stuff out. We're going to see if we enjoy it. We're going to talk about our favorite episodes and why we enjoyed them. But before we do jump into that, I have one final 2020 cool thing of the week. 

JON: Intro music. 

[MUSIC PLAYING] 

MARK: So I did want to bring up this one, and I thought it was fitting, because this is a wrap-up episode. And I wanted to share this link that was posted to the Google Cloud Blog by, obviously, our good friend Greg, who has put together just a huge-- is it-- should I not call him our friend since he technically our boss? 

JON: The boss's boss. 

BRIAN: How many generations of boss? And totally has no connection to highlighting this particular post. 

MARK: No. I mean, this post could have been done by anyone, and it still would have been great. Because it's just a collection of resources that, obviously, as we've all been looking to kind of put content online to help people, we've started to reach out to a bunch of places. And there are so many. This one just lists out some details. 

I mean, a lot of these-- Priyanka, you've been creating a ton of content that's been going out to a lot of these places. And that's kind of what we want to do, right? We want to reach people no matter where they are and kind of help them create the content, obviously to support them, and kind of understand what their feelings are, and have those conversations. 

PRIYANKA: Yeah. And I think it not just gives you a list of where you can find more stuff, but it also is a place where you can get yourself familiar with some of the things that you might not know at all about. So for example, if you're too much into all of our cloud-related things, our mobile friends know less about Firebase. But having it in that list, and the blogs, and the channels, it just helps to know more about those things that we tend to forget about if they're not in our day-to-day lives. 

One more thing I'll add, because we are talking about our great friend Greg, (LAUGHS) the four words or less he has on GitHub, we are going to be doing a revamp of that pretty soon. So be on the lookout for that, because that has been due since the Next announcements, so we are going to do some updates to that. 

BRIAN: It's one of my favorite things. If anybody out there is listening and you're trying to figure out, when you come to a new service, there's all of these new names and words for all the things. It's really hard to figure out what. And that dock tries to basically describe every Google Cloud Service in four words or less. So it's really crisp. It's super handy. 

JON: So, interestingly enough, I did a hackathon early at the beginning of this year, and I had that in pamphlet form, and I got to hand it out to a bunch of students. And when I tell you I must have had over 400 of these pamphlets, I think I left with three, and I kept those for myself. But we even had other sponsors look at it, and it was like, oh, this is amazing-- we should probably do something like this. 

And I was like, yeah, sure. Feel free to steal the great, fearless Greg's idea. But it definitely just shows the impact that it has had. 

MARK: Yeah. It's super cool to hear that there's going to be an update to it too. And I feel like with the sheer amount of probably products that are coming out, there's always going to be room to update that. But thankfully it's on GitHub, so it's really easy to just do some pull requests and update. 

BRIAN: And if you're the person on your team that people go to for Google Cloud stuff, keep that handy, and you will look really, really smart. 

MARK: That's good advice. All right. So check out that list. Stay tuned for-- and we'll put the link in for the four words, obviously, too. They'll always be updated. So it's super, super good to see. And then, of course, just so many other places that we do content on. 

So thank you, Greg, for putting all this stuff together, but also for making all this possible. Because since he is our boss's boss's boss, it's very nice to have his support in doing these great technical stories. 

BRIAN: With our cool things out of the way, why don't we jump into our interview? Just kidding, we're not doing an interview today. I did want to interview all of you all on what your favorite episodes were, because we have had some amazing episodes this year. I know I've got my list of favorites. I know y'all have your list of favorites. I don't know where to start. So I say whoever wants to go first, let's go first. 

JON: Sure, I'll go first. I thought it'd be kind of fun to share a couple of facts about my favorite episode and then just have you three wonderful people guess which one of these episodes I'm speaking about. And then I'll tell our listeners why these are my favorite episodes. So just to get right into it, my first episode, this is now offered on Google Cloud. 

Very vague. Purposely done so. But trust me, the last clue will help you out the most. 

BRIAN: Everything. 

[BUZZER SOUND] 

[LAUGHTER] 

MARK: Yeah. 

JON: The second clue is, it grows with your needs. 

BRIAN: Wait, it's Cloud, man. 

[LAUGHTER] 

PRIYANKA: Everything does fit your needs on Cloud. OK, not helping. Next hint. 

JON: All right. All right, next hint-- and this one will give it away-- the most actively used version reached end of life last year. OK. So how about this, I'll give you three choices. And these are episode titles-- choice A is Humanitech, choice B is Sanity.io, and choice C is Data Management. So going off those episode titles. 

PRIYANKA: Most actively used version reached end of life last year-- Sanity.io. 

[BUZZER SOUND] 

I'm just guessing. 

[LAUGHTER] 

Obviously. 

BRIAN: That sounds like Insanity.Io. 

[BUZZER SOUND] 

[LAUGHTER] 

I actually know the answer here, but only because of the research that I did for one of my questions, which will lead to some interesting "learn about the test from the other multiple choice questions problems." But with that in mind, I'm going to say Data Management. 

[JINGLE SOUND] 

JON: Yes, and that is the answer. And the reason why that episode was SO great for me is because, in a past life that also Brian mentioned in the episode, I worked with a bunch of data. So I was working with digital health data in my previous life. And I had to follow HIPAA standards, but a lot of this stuff would be stored in a SQL server instance. And now that it's coming to GCP, it was just great to hear not only that it's actually coming to GCP-- all of my academic studies, all of my prior work experience was all in SQL server-- but just to know that you had additional features on top of it, which was that your data actually grows with your needs. It was super high available, which was also something that anybody using any type of data instance in cloud needs. 

It was just really good to know that we traditionally only supported MySQL and Postgres at the time. So it was really great to hear the announcement and actually sit down with Amy Christian [INAUDIBLE]. It was really great to have her come sit down with us and really tell us about the new features as they rolled out. 

PRIYANKA: What would have helped here, like in the hints maybe-- 

[LAUGHTER] 

Yeah, you could have said, grow with your needs not infrastructure. 

[JINGLE SOUND] 

[LAUGHTER] 

JON: OK. So I can see Priyanka wants the easy way out of these questions. 

PRIYANKA: Yes. 

BRIAN: No, no we're just-- 

PRIYANKA: (LAUGHING) Priyanka always wants the easy way. 

BRIAN: This is just pure feedback. You know, we're iterating on the things together. The peer review. 

PRIYANKA: This is awesome. 

[LAUGHTER] 

My favorite episode was actually a pretty recent one with Kelly Anderson on reCAPTCHA. Mark and I did that episode, where we talked a little bit about how the evolution of reCAPTCHA has been and how the whole automated bot space-- how do you [? thwart ?] them, not have them get into the websites, and how do you actually also make the humans safe and secure to log into whichever website they are trying to do so? I really enjoyed the conversation, mainly because Kelly is awesome. 

[LAUGHTER] 

Of course I like reCAPTCHA and all the security concepts. And even my second favorite talk is also around security and those lines, but Kelly is just awesome. She helped us understand how to set up passwords. 

MARK: Where Priyanka's password advice may not have been the best password advice. 

BRIAN: Are we talking like 12345? 

MARK: Two digits more secure. 

PRIYANKA: Two digits more secure. I just said 1234. 

[LAUGHTER] 

MARK: But that was a really fun conversation. And obviously, many thanks to Kelly for coming in for that one. And it was cool to hear about reCAPTCHA, because I think everyone pretty much at this point is probably run into reCAPTCHA somewhere on the web. And I really loved hearing about how version 3 of reCAPTCHA doesn't have that interface anymore, you know? And that was super, super cool to hear about and how they use the kind of ML to predict the behaviors of malicious actors, rather than asking them to click on squares. 

BRIAN: So did she answer the question of how the "I'm not a robot" checkbox actually works? Because that seems like magic. 

PRIYANKA: Yeah, yeah. It is kind of like magic, right? Because she did talk a lot about the backend behavioral patterns of what people do and which types of users end up being the real users and the machine learning behind it. 

BRIAN: Yeah. 

PRIYANKA: So she did talk about that. But to me it seemed just like magic. And I've always wondered, when they ask you to do traffic lights-- pick all the squares with traffic lights-- I get two wrong every time. I don't know. 

BRIAN: But you get the same too wrong that other humans do. 

Just take a screencap and run it through Vision AI-- works every time. 

PRIYANKA: Right. So anyway, I am just glad that there's lots of improvements and enhancements coming in the technology itself that'll help make the web more secure. So very exciting. That's why that was my favorite one. 

JON: This is my personal message to online retailers-- please implement reCAPTCHA so that I don't have to fight against bots when I'm trying to give you my money for products that are on sale for preorder. Please. 

MARK: Boy, that seems awfully specific, Jon. 

JON: It's super specific. 

[LAUGHTER] 

PRIYANKA: Is there a hint there? 

[LAUGHTER] 

JON: Oh yeah, it's actually a hint for my second favorite episode. So just remember that. 

BRIAN: OK. So I'm going to follow that up then with a separate question and favorite. My question is around the episode sowed about Cloud SQL for Microsoft SQL Server. So there's now a hosted version of Microsoft SQL Server-- so go back to Jon's theory here-- and this was the research that helped me out with his question. It runs on VMs, and does backups, and all the good stuff for you around SQL server. 

Well, with that-- and here's the question-- we announced an auto migrate feature. And what is the earliest version of SQL Server that this supports? Is it-- and they name them in years-- 2008, 2012, or 2017? 

JON: I actually know the answer to this one. 

PRIYANKA: I can just start guessing. But there are only three, so, you know. 

BRIAN: There's only three you've got a 33% chance just right off the bat to go ahead and hit it. And I do feel obligated to let you know that there is zero penalty if you don't get the question right. So it's totally OK to guess. 

So I'm just going to-- yeah, go ahead and guess. 

MARK: I have a pretty good idea. 

PRIYANKA: OK. Well, I have no idea, so let me go first then. 2008. 

MARK: I'm going to say 2008 as well. 

JON: And I am also going to agree. 

[JINGLE SOUND] 

BRIAN: Wow, this group is so clever. It is indeed SQL Server 2008. Which is, as of earlier this year at least, the most widely deployed version of SQL Server, because it's just good and keeps working. But time marches on. So if you're ready to move on, there's automatic tools to help you with that. 

But as cool as that is, I think my favoritest favoritest episode that I was in I guess was with the Talon Voice folks, which was describing the system that they've built for talking to your computer and making it do stuff. So it started with an RSI wrist injury, and that's one of the main groups of users, but it's kind of extended beyond that. And you can program, you can move the mouse around, you can open different windows, and we should just use this as an excuse to insert the clip of him reciting the custom alphabet that you can spell words out with your voice. 

[AUDIO PLAYBACK] 

- Air bat cap drum each find gust harp sit jury crunch look made near odd pit quench red sun trap urge vest whale plex yank sip. 

[END PLAYBACK] 

BRIAN: Super cool. I'd really recommend listening to that episode, it's a lot of fun. 

MARK: Yeah, it was really great to hear from them about how they built it. Ryan obviously gave us a lot of insight on some of the challenges he ran into and why he built it. And then the one part that really stuck with me was how he used Talon to build Talon. And I thought that was super, super cool. 

And of course, we also got to hear from Emily about how much of a difference it made for both of them. And then, actually, since that episode, I've heard from a couple of people talking about how valuable they found Talon and how much they enjoyed it. So it was so exciting to have that conversation. 

JON: Hold on, I got to make a comment. I'm sorry, I was drinking water, and I almost spit it all across my screen. Because he said, it's interesting he used Talon to build Talon, and I just immediately thought about the saying that everybody has in the maker space, where they're like, don't buy a 3D printer to build a 3D printer. 

[LAUGHTER] 

MARK: Buy the 3D printer, print your 3D printer, return the original 3D printer-- there's absolutely no downside to this. And I don't see how it doesn't work. 

JON: Yeah. But that's kind of awesome that you actually use the product that you built in order to build a better product. So it's very interesting to hear that. So I'm definitely going to give that episode a listen. 

MARK: Oh yeah, it was a lot of fun. I mean, I definitely had a lot of favorite episodes since I was in a lot of the conversations this year. And so it was really hard to choose. I have one favorite episode of my favorite favoritest favorite, and I'll come back to that one a little bit later. But one of my other favorite episodes was, if you can believe this or not, around cost optimization, when we had Justin-- 

[LAUGHTER] 

PRIYANKA: What? 

MARK: I know, I know, I know. It was a good conversation. I think we covered a lot of topic areas. But I'm sure people don't want to hear me talk more about cost optimization. So instead of that one, I'll talk about another really cool one we had, when we got to sit down with Tyler McMullen, who's the CTO of Fastly. It was such a great conversation, because we were talking about what Edge Cloud was and Tyler really did a great job of explaining why Edge Cloud, what that actually means, what's different about that versus the more standard CDNs and Content Delivery Networks. 

It was such a cool conversation. And I really, obviously, appreciate Tyler's time coming in here. And I highly recommend people give it a listen, because I think he did a very good job of explaining the value of it there. And then talking about how Fastly actually approaches that, it was super interesting to hear. 

PRIYANKA: If you're looking to make any sort of website, or a web application, or a mobile app, you've got to look at CDN in general. So understanding the concept of how to approach it and how to reach larger audience by not spinning up more resources, versus utilizing and maximizing the resources that you already have, definitely, definitely give a listen to that episode. I was not in the episode, but I have listened to that one. I really do enjoy the concept of CDN and just knowing more about that. So that was a very enlightening conversation. 

MARK: And right off of the back of that episode, we actually asked Stephanie to come in and give us a tip on some networking content. And so my question here is actually going to be around Stephanie's tip. Which is, she came in to explain this awesome new feature that Google Cloud just launched around that time, I believe in general availability, and its initials are NIC. So my question for y'all is, what does it actually stand for? 

All right, here are your three options-- Network Infrastructure Control, Network Insights Center, or Network Intelligence Center. Hopefully it's not too, too hard, but which one of these NIC stand for? 

PRIYANKA: It's hard because all of them are NIC. Like, you should have given at least one that was not-- 

MARK: I'm sorry, you're-- I absolutely could have done that. I just didn't feel "good network stuff" would have been obvious. 

[LAUGHTER] 

PRIYANKA: OK, who wants to go first? 

BRIAN: I better get this right, because I focus on infrastructure stuff. But I'm worried, so I'm going to go last. 

JON: I'm going to take a shot in the dark as well. So you can go first. I'll go second. 

PRIYANKA: I guess we're both doing that. So I'm going to say Network Intelligence Center. 

JON: So I'm going to say Insights, because I don't think putting the word Intelligence in a name is good for a product. I don't want to assume things, but I just think if you're looking for network traffic or anything like that, I think Insights will probably be-- 

BRIAN: Insights sounds really useful. I think my answer, though, is Network Intelligence Center. 

MARK: It's a good point, because Insights is really what this product is about. But it is Network Intelligence Center. 

JON: Ah. 

MARK: But it gives you insights on your network. 

PRIYANKA: Yay. 

MARK: So I say we're still all right. 

[JINGLE SOUND] 

JON: I just got the participation trophy. 

PRIYANKA: Yay. 

MARK: But yeah, thankfully Steph was able to join us and give us a little bit of "insight-- 

[LAUGHTER] --ba-dum-bump-- on what the Network Intelligence Center does, and it actually does do a lot of cool stuff. So if you do get a chance to check out the Fastly conversation with Tyler, first of all, it's awesome, and, second of all, you can hear Steph talk about the NIC. 

JON: So, hey, do you guys want to rejoin the Jon Show, where I give two really horrible clues, and one really good clue, and no one still gets it? 

MARK: We're in. 

BRIAN: Ooh, ooh, yes! 

JON: All right. So this second episode was actually my favorite favorite episode. The clues are a little bit better this time around, I promise. The first clue is, our guest returned after a little over 100 episodes. The second clue is, the number of transistors-- it's over 54 billion. 

Optimus Prime. 

[BUZZER SOUND] 

JON: That one, if you're big anime fan, you know I was gesturing towards that meme. 

PRIYANKA: OK, let me try and guess-- guess meaning, I don't think I'll be able to guess the episode, but guess where we are going with it maybe. 

JON: OK. 

PRIYANKA: Something related to chips, because there's transistors. 

[JINGLE SOUND] 

JON: Sure. 

PRIYANKA: You're not going to say-- OK. Oh wow, hardball. 

BRIAN: Yeah, that's totally on the right track. 

JON: It is. 

BRIAN: Absolutely. 

JON: I'll give you the last clue. Which is, the new architecture has found its way into data centers, powering AI and ML workloads. So you were spot on, Priyanka, with your assumption. 

PRIYANKA: GPUs kind of thing. OK. Now, what are the options? 

JON: Yeah. So the options are SpringML, NVIDIA, or AI in health care. 

PRIYANKA: Well, I hope this is right-- NVIDIA. 

MARK: I mean, as soon as you said the 100 episodes, I remember very distinctly that we had our awesome guests from specifically NVIDIA back on to talk to us. 

JON: Yes. So that is the answer. And that episode was a lot of fun for me not only because I enjoy NVIDIA, but I've been a very big fan of a lot of the applications they've been doing. Because nowadays they're kicking up and dedicating their time, and resources, and efforts, towards solving a lot of the issues that are going on currently in the world, such as genome sequencing, or trying to figure out how to use AI to possibly come up with a vaccine, or anything. So you see a lot of companies relying on AI and ML also training neural networks in order to solve a lot of the issues going on in the world at the moment. And also, because at the end of the episode I get to talk about gaming, and you know I love gaming. So I didn't want to make that too easy and say that it's also found its way inside of your personal computers for graphical intensive enjoyment. 

MARK: I feel like I could have walked into this and been like, oh, Jon's two favorite episodes where both the NVIDIA episode. 

JON: Right. 

[LAUGHTER] 

BRIAN: Would that be cost optimization for you? 

MARK: Both costs. No, I mean, we've gotten plenty of cost optimization, but I still do have an episode that I think even tops that. 

BRIAN: What? 

MARK: OK. 

PRIYANKA: So my question should be super easy. (LAUGHING) There won't be any hints. VMware Engine-- what do you guys think the service is for? 

MARK: All right. Well, Brian can't answer, because I feel like that's unfair. 

PRIYANKA: That's unfair. No, you can't go. Jon has to take an attempt at it and then Mark. 

JON: I've only used VMware once in my entire career. 

PRIYANKA: Yeah. 

JON: So this should be fun. And I also did not listen to this episode, so I'm already shooting myself in the foot. So the two choices are VMware infrastructure and Migrating your VM Workloads Natively to Google Cloud. I'm going to go with migration. 

[JINGLE SOUND] 

MARK: The big problem I think with some VMware installations is that they really don't have enough horsepower. So I believe VMware Engine is the expanded engine that you can put into the hood of VMware to make it go faster. 

[BUZZER SOUND] 

PRIYANKA: That's a great take on it. 

MARK: I don't believe that one was listed, which is why I'm extra certain that it's correct. 

PRIYANKA: Oh. Now, I'm going to just have Brian actually give the answer for what is VMware Engine. 

BRIAN: I would like to phone a PM. 

[LAUGHTER] 

Yeah. So VMware Engine is basically hosted VMware on Google Cloud. So you can use the VMware tooling and you can migrate VMs back and forth. You can have it basically show up as another site in the same views that you would normally see. So if you're comfortable with VMware and already running a bunch of it, and you want something more for burst, it's a great way to do that or to use it as a really smooth migration path, because you get to keep all the same tooling. 

[JINGLE SOUND] 

PRIYANKA: A great guess. I think that was very close. And Mark's was way too far out there. 

MARK: Whoa, whoa. Somehow, some way, I'm sure I could spin my answer into a technically correct answer. But it probably would take a lot of work. 

[LAUGHTER] 

JON: So we need a horsepower equivalent for each of our offerings-- is that what you're saying? 

BRIAN: Well, it would be useful to measure against them. Now that I think about it, that's actually not the worst idea. But as we know, it's really hard to measure the performance of these things without knowing more about the application side or what it costs. 

MARK: You just want me to go back and be like, oh yeah, all of my favorite episodes were cost optimization. Although we do talk about some great tips in that episode for cost optimizing your VMs, so-- 

BRIAN: Stay tuned. 

[LAUGHTER] 

JON: Shameless plug. 

BRIAN: OK. So this leads to my next episode, which is not going to be about cost optimization, because that would give Mark too much of an advantage. But the episode is Bare Metal Solution. 

MARK: Which is absolutely going to be the name for my next rock band. 

[ROCK MUSIC PLAYING] 

I mean, there's just no question. And we know what the logo is going to be-- it's going to be a giant metal bear. 

[ROARING SOUND WHILE ROCK MUSIC PLAYS] 

BRIAN: That's my question. Basically, what do you think THE service is-- sole-tenant VMs, dedicated physical instances, or artificial intelligent guitar riffs to accompany music? 

JON: C is not wrong, let's just state that. 

BRIAN: Let's just say-- 

MARK: Well, I mean, C is a great option if I do start that rock band, because I have no musical talent. So being able to use AI to improve my musical talent to make me sound good, I totally want that out of my bare metal solution. 

[BUZZER SOUND] 

I guess it's not the actual one, but it's the one I want. 

JON: So the solution you want most is C. 

BRIAN: OK. 

PRIYANKA: I'll go with dedicated physical instances, only because I don't know what sole-tenant VMs are. 

[LAUGHTER] 

MARK: Wait, there's only two answers, right? Can we do the 50-50? 

PRIYANKA: Let's do 50-50. 

MARK: I feel like, huh, narrow it down immediately. 

BRIAN: You're just totally not including C? Like, the AI guitar riffs? I see how this is. OK Jon, what's your final answer? 

JON: I think I'm going to agree with Priyanka on this one, solely because I look at the word bare metal, and I just immediately think about the physicality of running instances. 

[JINGLE SOUND] 

BRIAN: That means the naming is done well here, because it is in fact dedicated physical instances. So you can kind of use the APIs and the billing but get someone to actually install a certified physical machine in a particular data center. And so if you've got really particular certification or workload needs, that's a use case that sometimes comes up. 

Sole-tenant VMs are another thing that we have. I put that there solely to mess with you all. 

MARK: And, of course, as we know, the AI supported guitar riffs are in beta now. So we look forward to releasing that publicly. 

[ROCK MUSIC PLAYING] 

All of our conversations are great. I cannot express how much gratitude I have, not only for all of us as the Google side coming in and having these conversations, but also for our guests to come in and spend this time with us. Obviously, we get to learn a lot. We get to have a lot of fun. 

JON: But this seems like it's sounding like one of your grandchildren is more special than the other. 

MARK: They are-- no, I mean, I truly do have so much fun in all of these episodes that it really was hard to pick a favorite. But maybe it's recency bias or maybe it was just because it was about space, but there's no question that I was completely blown away by the fact that we get to talk to NASA. It was by far just such an amazing experience to sit down chat with not only NASA, but also FDL, which is a group that works with NASA, and Google, and a bunch of other people. 

It was so amazing. And, I mean, it's space. The whole scope of what we talked-- we could have talked about anything, and we talked about a lot of stuff. But it was so cool-- and we also got to bring in Sarah Ford, one of our new Googlers actually, to join us in that conversation. And it was just so cool to be able to hear about what that looks like, because both Lika and James did such a great job. 

And one of the quotes that Lika gave to us, I put it on Twitter and LinkedIn. And I highly recommend. If people have the option to listen to that one. It blew me away, because the way she kind of describes what she calls augmented intelligence was so astounding. It is my favorite episode. I think we had a lot of fun with it. 

And I have not only one, but two questions from that episode for all of y'all. So I'm going to go ahead and jump right into those and see what y'all think. But these are a little bit different than our other ones. 

So my first question is, what is the difference between asteroids and comets? Because this actually came up in that episode, and I'm pretty sure none of y'all have had a chance to listen to it. So is it the speed they're going, the material they're made of, or the spelling. 

JON: Spelling. 

PRIYANKA: The spelling. 

BRIAN: I mean, at least the spelling, right? So can we choose multiple answers here? 

MARK: Yes, I believe this is probably a good example of where you could choose multiple answers. Because the spelling is technically correct. 

[JINGLE SOUND] 

The best kind of correct. 

PRIYANKA: I guess-- 

JON: I will-- yeah. 

PRIYANKA: No, go ahead. 

JON: Actually, I have a long-winded answer, so Priyanka, feel free to go first. 

PRIYANKA: You assumed that my answer is short. 

JON: I don't know. 

[LAUGHTER] 

PRIYANKA: I'm just going to take a guess and move on. I'm going to say the material they're made of. 

BRIAN: Yeah, I'm definitely not an expert here, but I'm going to go with the same. I have to admit, my first thought was something that didn't make sense once I thought of it. I thought it was whether or not they were orbiting. 

MARK: Oh, that would be a really good answer too. Yeah. 

BRIAN: That last part might have made more sense. But with this I'm going to go with spelling plus material they're made of. Spelling plus. 

JON: For me, as an avid fantasy RPG playing person who's also seen the movie "Armageddon"-- I have it hanging on my wall in case you didn't notice-- I will go also with the material that they're made of. Now, I naturally thought it was just a speed that they go, because normally when you say you can see a comet going by, and you think it has the tail, you would think that because of the speed it's the tail. But I think, for me, I'm just going to go with material they're made of, because it seemed like in these movies they had to really dig into these actual asteroids, and I don't think comets have that same type of material. So I'm just going to go with the material they're made of. 

[JINGLE SOUND] 

MARK: Well, as you all have deducted, that is absolutely correct. As we learned in that episode, asteroids are a little bit more made of rocks and other hard materials, while comets also are made of ice and dust as well as hard materials. So that seems to be the big difference. We had a lot of fun talking about comets, and space weather, and all sorts of things. 

And so I was happy to throw that all at you, even though it wasn't a technical question. But then I kind of felt like it was cheating, because it wasn't a technical question. So I do have one other question for you. 

We did talk a lot about data science and data in ML in that conversation. And of course, one of our favorite things to talk about here is BigQuery. So I wanted to get you an actual technical question, which is, of course, which of these BigQuery features went generally available in October of this year? As you know, a lot of stuff comes out with BigQuery. 

So first of all, is it Dynamic SQL, where you can dynamically create and execute SQL commands? Is it BigQuery reservations, where you can set up dedicated capacity for running queries? Or is it custom event ordering, where you can sort columns by giving it generic information, like show me all of the events after my hiking trip? 

JON: So my certificate on the wall that helped me in the previous answer will not help me in this one. 

MARK: I don't think they talked about this in "Armageddon," I'm going to be honest with you. 

JON: Yeah. 

[LAUGHTER] 

So I'll take a small guess. And I'm just going to go with BigQuery reservations. 

BRIAN: OK. And for me, I was thinking this was a trick question, that it might have been all of them. But I'm not sure about that. I'm just going to stick with that answer, even though it seems unpossible. 

PRIYANKA: I think that too actually. That's why I was thinking I'm going to go last maybe. I feel like it's all of them. 

MARK: Well, as Brian said, this probably does qualify as a trick question. The official official official answer is that in October we had the Dynamic SQL introduced. And that is a very, very cool way to build queries right into BigQuery, where you can actually take results from a query, make another query that uses those results, and then query based on that, all inside of one kind of action. It is amazing to see, and it's been something that just went generally available in October. 

Now, of course, BigQuery reservations are also a thing. 

[COMMERCIAL MUSIC PLAYING] 

And if you're thinking about cost optimization for BigQuery, BigQuery reservation-- 

[LAUGHTER] 

BigQuery reservations are a great way to save costs. But they actually went generally available quite a while ago. 

[RECORD SCRATCH] 

So i won't go into the details. And of course, on the third option, there is no "current" feature that lets you decide on arbitrary dates and times. But you could build a feature like that using BQ, ML, and probably some kind of integration with maybe Photos, right? And then you say, oh, I did this hiking trip to the Grand Canyon, now get the date from my photos, inject it into it using a Dynamic SQL query, and then figure out all of the events that happen after it. It's not a feature, but it basically could be done. Yeah. I think they're all correct-- roughly speaking. 

Well, I'm glad that you all got a chance to play some games with us-- tech detective as our good friend James calls it, who helps out with the podcast. It was very interesting. I think there's a lot of cool stuff that can be taken away from every episode. But, of course, I think all the episodes are great, and I had a lot of fun doing them. 

JON: I'm definitely looking forward to our future guests, and possibly playing tech Detective next year, and hopefully coming up with some better clues. 

PRIYANKA: No, your clues where OK, Jon. They can use some work. 

[LAUGHTER] 

MARK: How generous of you, Priyanka. 

BRIAN: We can set up some review flow and a little continuous integration. Coming soon in 2021 to Google Cloud, Tech Detective the product, the offering. 

PRIYANKA: Yeah. Yeah. No, it's so much fun to just have you guys on the team to have this fun with, plus all our guests who graciously agreed to talk to us about their projects, take out time from their busy lives, and also all of our backend internal team that actually helps us put this together for the entire year, including James and some others who project manage this stuff. So thanks to all of them and the team. 

BRIAN: And then I think the logical follow up is everybody who spends the time actually listening to this thing. Thank you so much, and hopefully you heard about some episode you might have missed to go back and listen to while we take a breather. 

MARK: Absolutely. And I think that, we all said it, there are so many people that come together to make this podcast happen, and it definitely would not be possible without not only a bunch of people from the Google side, but from the people we talk to, and, as Brian said, our listeners. So for this year that has been very bizarre and very interesting, we obviously wish you very well. We want you to stay safe out there, and we're super excited to have you back next year. 

PRIYANKA: Bye. 

[MUSIC PLAYING]