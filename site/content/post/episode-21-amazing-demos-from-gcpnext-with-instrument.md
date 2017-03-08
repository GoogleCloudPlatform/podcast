+++
audioDuration = "00:41:04"
audioFile = "Google.Cloud.Platform.Podcast.Episode.21.mp3"
audioSize = 59183956
categories = ["NEXT", "BigQuery", "Cloud Vision"]
date = "2016-04-13T01:07:49Z"
description = "In the twenty first episode of this podcast, your hosts Francesc and Mark interview three of the engineers at Instrument, responsible for some of the amazing demos at GCP Next."
draft = false
episodeNumber = 21
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Amazing Demos from GCP Next with Instrument"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/cdXrb9aj7Uj"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4em6kh/episode_21_amazing_demos_from_gcp_next_with/"
externalimage = "https://gist.githubusercontent.com/GCPEmotobooth/005126b19112c95e1842/raw/90883a1032c599c97eedcd514419603b777fc003/_photo3.png"
+++

In the twenty first episode of this podcast, your hosts
[Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic) interview
three of the engineers at Instrument, responsible for some
of the amazing demos at GCP Next.
<!--more-->

##### Cool thing of the week

- Monitor your application errors with Stackdriver Error Reporting [blog post](https://cloudplatform.googleblog.com/2016/04/monitor-your-application-errors-with-Stackdriver-Error-Reporting.html)
- Stackdriver Error Reporting [docs](https://cloud.google.com/error-reporting/)


##### Interviews

We interviewed three engineers working at [Instrument](http://instrument.com),
an independent digital creative agency in Portland, Oregon. They're on
[GitHub](https://github.com/Instrument).

Take a tour of GCP Next playground on [YouTube](https://www.youtube.com/watch?v=Lr0_ieJPkj4):

<iframe width="560" height="315" src="https://www.youtube.com/embed/Lr0_ieJPkj4" frameborder="0" allowfullscreen></iframe>

###### John Brown

- Technical Director at Instrument
- Overview of "Emotobooth", "360 datacenter tour", and "Query It"
- Emotobooth tweet for the GCPPodcast hosts [tweet](https://twitter.com/GCPemotobooth/status/712683828079276032)
- Emotobooth gist with all photos and JSON data [gist](https://gist.github.com/GCPEmotobooth/005126b19112c95e1842)

![Surprised hosts](https://gist.githubusercontent.com/GCPEmotobooth/005126b19112c95e1842/raw/90883a1032c599c97eedcd514419603b777fc003/_photo3.png "Surprised GCPPodcast hosts")


###### Violet Peña

- Engineer working on Emotobooth
- Cloud Vision API Face Detection [tutorial](https://cloud.google.com/vision/docs/face-tutorial)
- Landmark Detection Using Google Cloud Storage [docs](https://cloud.google.com/vision/docs/samples#landmark_detection_using_google_cloud_storage)

![Face detection in action](https://pbs.twimg.com/media/CeRuh5QUkAIsNoZ.jpg:medium "Face Detection in Action")


###### Nick Tzaperas

- Backend Developer at Instrument working on QueryIt!
- Query Plan Explanation [docs](https://cloud.google.com/bigquery/query-plan-explanation)
- Freebase: a community-curated database of well-known people, places, and things [docs](https://www.freebase.com/)

- Google Data Center 360° Tour [YouTube](https://www.youtube.com/watch?v=zDAYZU4A3w0)

<iframe width="560" height="315" src="https://www.youtube.com/embed/zDAYZU4A3w0" frameborder="0" allowfullscreen></iframe>

##### Question of the week

How do you use variables in Deployment Manager

- Cloud Deployment Manager [docs](https://cloud.google.com/deployment-manager/)
- Passing variables to templates [docs](https://cloud.google.com/deployment-manager/configuration/adding-templates)

{{< transcript "FRANCESC: Hi, and welcome to episode number 21 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague, Mark Mandel. Hey, Mark." >}}
MARK: Hey, Francesc, how you doing today? 
FRANCESC: Pretty good. A little bit tired after all these weeks of a lot of action, but yeah. I'm very excited about the interviews today.
MARK: Yeah, we're gonna have some conversations that were recorded back at GCP Next, a couple of weeks ago now, talking to the people from Instrument who did the demos at the event. 
FRANCESC: Yeah, so we interviewed three people from Instrument. We interviewed John Brown, which is the technical director, Violet Pena which is that worked on Vision API for a very cool demo, the Emote-O-Booth, and then Nick Tzaperas that worked on the Query It, which is a demo using BigQuery. 
MARK: Yeah, it was pretty awesome demos. I think it's gonna be really interesting to hear, like, how they explored the APIs and used the products and what they learned and what worked and what didn't.
FRANCESC: Yeah, those are all very beautiful demos. Like, I--You can tell that they're pros at this, but also they're really interesting on the way they use our product, so I think it's gonna be very interesting conversations. 
MARK: Yep, most definitely. 
FRANCESC: And after that, we'll have a "Question of the Week," and today it's about Deployment Manager. 
MARK: Yeah, we're gonna have a look at how you can use variables in Deployment Manager. 
FRANCESC: I think it's the fist time we ever say the words "Deployment Manager."
MARK: I think so.
FRANCESC: Yeah, so excited about that too.
MARK: Definitely. 
FRANCESC: But first let's go with the "Cool Thing of the Week." So we're gonna be talking about (stat) driver error reporting, so what's new in that?
MARK: So as of a blog post that came out yesterday, we're pretty excited to announce that, yeah, if you need a service to basically aggregate and collate the errors that are happening within your application, and you know, I guess there are probably some. I'm sure everyone else's in our audience's applications are completely perfect and never error out.
FRANCESC: Mine are perfect.
MARK: I believe so. So while we've had log aggregation for a really long time, you generally also want some kind of service to be like, "Hey, all these errors happen together. They're all happening at the same time," maybe only send you a notification when a new one pops up and handles those sort of things like "Where is it coming from?" All that sort of stuff. It's a lot easier to (set up powers) than be like, "Oh, you know, let's go through all the logs looking for key words," things like that. It's pretty cool, and right now it's in beta, so you know, it comes for free which is pretty sweet. If you're using App Engine though, you get it for free. You don't have to install any agents. You don't have to do anything special. It's just ready to go out of the box. If you're on Compute Engine, you just have to install a short agent, and there are some tools in there for sending errors through to it, but yeah, I think it's pretty cool. I'm pretty excited with how it works. 
FRANCESC: Yeah, the thing that I really like is whenever it actually finds new errors, and you can of course set this up to match to your preferences, but it can actually send you emails, so you can basically be, like, on call and enjoy your life until the moment when you get the email saying, "(Whilst enjoying your style), enjoying your life is done now. Go back to work." But yeah, no, I think it's a very useful--very useful feature that I hope people will use.
MARK: Yeah, I mean, it's not as sexy as some of the things that we've done in the past, not as shiny maybe, but it's sort of one of those glue pieces that holds every thing together. 
FRANCESC: I could say it's almost as sexy and shiny as probably messaging. 
MARK: (Derelict) logging. 
FRANCESC: Yeah, it's like, "Yeah, when it works, nobody cares."
MARK: Yeah, but when you need it, you really need it. 
FRANCESC: Yeah, exactly. Cool. So I think it's time to go talk with our friends from Instrument. 
MARK: Yep. 
FRANCESC: We're gonna have three interviews back to back, so enjoy them. We're gonna have first John Brown, then Violet Pena, and finally Nick Tzaperas, and then we'll be back to talk about the "Question of the week." 
MARK: Sounds like fun. We are joined today by somebody, I think, a little special to the conference. 
JOHN: Oh, thank you. 
MARK: A little special, a gentleman by the name of John Brown, I believe you're the Technical Director?
JOHN: Yes, I'm the technical director at Instrument. I'm from Portland, Oregon, and I oversaw the development of the playground experiences that all the attendees have been experiencing. 
FRANCESC: Cool. So the playground experience is--So there's the Emote-o-Booth?
JOHN: The Emote-o-Booth, right. 
FRANCESC: There's the 360 tour?
JOHN: There's the 360 data center tour. 
FRANCESC: There's the BigQuery--
JOHN: And there's the Query It. 
FRANCESC: The Query It. 
JOHN: It's the BigQuery trivia game. 
FRANCESC: So let's talk a little bit about them. Why don't we start with the Emote-o-booth?
MARK: The Emote-o-booth is awesome. 
FRANCESC: Tell us, what is this exactly and how did you make it? 
JOHN: Sure. So the Emote-o-booth is--It's deceptive. You think it's just gonna be a photo booth. You walk up, but all of a sudden the person who's taking your photo isn't just saying "smile," they're saying "Frown. Show me some surprise. Actually show me some anger. What do you got? You got some anger?" And you get through joy, sorrow--Emotion. Joy, sorrow, anger, and surprise, yeah.
FRANCESC: Isn't that the seven stages of grief or something?
JOHN: Those are the seven sins, the four sins. And then after you get your photos taken, you walk around the corner, and instead of just seeing a regular photo, you get to see a closeup of your face. It shows all the landmarks of where your eyebrows are, the corners of your eyes, your mouth, and then it shows you the sentiment. It gets sent through the Google Vision, the Cloud Vision API, the face-detection portion, and it'll show the likelihood of all of the four different sentiments that it already had you go through, so you get to see a cool aura surround your face. So if you had very likely joy, you're gonna see a really fun yellow halo burst around you, or if you really couldn't nail that frown when they asked you to frown, you can see a fun blue shade that goes up. 
MARK: I--I particularly am enamored with this. We may have possibly changed the title image on our Twitter account for GCP Podcast to both of us being surprised.
JOHN: You guys need a group shot. 
MARK: We did, the two of us. 
FRANCESC: Yeah, it was--
MARK: It's fantastic. 
FRANCESC: Let me show you right now. But this is our new--
JOHN: Yeah, that's a good one, yeah.
FRANCESC: So you can find it. You can find it if you go to Twitter.com/TCPPodcast. You will see both of us being incredibly surprised. 
JOHN: Yes.
MARK: One thing I love that you did as well is not only did you let you see people--let people see it on the images around the corner, but you also, when you Tweet it out, you've got a (gist) there with, like, all the data from the Cloud Vision API as well as all the images that you took in the photos as well. 
JOHN: Exactly. Yeah, so you can explore the photo and all the data that's related to it. It's all in one place. You can sort of compare, contrast, between the different pieces. 
FRANCESC: Yeah, very cool demo. I really liked it. The second one that a lot of people are very excited about is the 360 tour. 
JOHN: Yeah, so our company did the sort of planning of the actual 360 portion of it. We didn't actually do the video. The Google team did the internal data center video for it, but we sort of integrated it with the rest of the playground experience to be able to come in, look at it, get to see the behind-the-scenes of the server that Google's finally letting people see, you know, in a really cool way. You get to see it in--I don't know. It's probably about 30 feet wide. You can actually feel like you're standing inside of the server. 
FRANCESC: It is pretty amazing. I have personally been at data center, and this is probably the closest you can get without working at Google. 
JOHN: Yeah.
MARK: Yeah, I was pretty impressed with the amount of stuff that we're actually showing inside. It's really neat.
JOHN: It's really nice. 
FRANCESC: Yeah, very cool. One more question about the last--The demo that we have is the BigQuery they called Query It? 
JOHN: Query It. Query It! 
FRANCESC: I love the name. 
MARK: Yeah, I haven't had a chance to play with it, so tell me about what's the deal there?
JOHN: Yeah, so essentially what we did is we wrote 200 questions. They're sort of trivia questions, things like, "What state mentions Velveeta Cheese the most on Reddit? Or what musician's Wikipedia page was visited most in 2015?" And then what we've done is we have a ton of public data sets for Reddit, Wikipedia, GDelt, and a couple others that we have written queries for that when you type in your answer, it actually puts it in to the query, runs the query live. There's a really fun visualization that has a visualized model of what's happening behind the scenes in BigQuery, so it's--You know, it's not 100% accurate, but it's a really cool visual representation of what's happening. 
FRANCESC: It looks very cool, yeah. 
JOHN: And then you get points. Yeah, and then you get points based on the accuracy of your results. And there's two podiums, so you get to play a friend or a stranger. There's a little bit of competition. Maybe you can talk smack to each other back and forth, but it's a lot of fun. 
MARK: So you're, like, basically trying to guess what the big data computation is gonna end up being? 
JOHN: Exactly. Yeah. 
FRANCESC: I actually got to play twice. 
JOHN: How'd you do?
FRANCESC: So the first time I won, but it was kind of cheating because the first question that I got was--I think it was from Stack Overflow or maybe GitHub?
JOHN: Oh, yeah, GitHub. 
FRANCESC: It was "What is the language where--Yeah, what is the language where people mentioned more of Google?" 
JOHN: Mm-hmm.
FRANCESC: And I'm (inaudible) advocate for Go, so that was kind of easy. 
JOHN: Right, yeah.
FRANCESC: So I got 100% on that one. And even though I wanted to let the other person win because on the last question was, "What was the most popular kitchen utensil on Wikipedia last month?" I went with "spork." 
JOHN: How did you do? 
FRANCESC: Zero. 
JOHN: Aw
FRANCESC: Zero points. That was the point. I wanted to lose, and I still won, and the second time, yeah, I got destroyed by Sarah. Sarah Robinson from our team, she destroyed me at every single question. 
JOHN: Good. That's good. Lot's of fun.
FRANCESC: But yeah, that was an awesome demo. Tell us a little bit about your experience using the Cloud to build these demos. How was it? 
JOHN: Sure. So we got to use--One of the really interesting things is we got to use the Cloud Vision API when it was still in the alpha stage, so we got to see, you know, what it was gonna be, and we got to try all the different features early on. And as we were developing the Emote-o-booth, we got to try things like the object detection or the label detection. We got to try the OCR. We got to try the landmarks. We got to try all these different things, and we got to craft the experience that we ended up seeing based on being able to easily put all the images in, run through it, get a bunch of that data, and sort of, like, look at it and figure out what we wanted to do with it. And we ended up going with the sentiment analysis, but we had things--Like, we had giant cutouts of hotdogs, and we're like, "Can we detect the hotdog? Do we want to give people cowboy hats and put them into a scene, and it's gonna detect the cowboy hats." We tried a bunch of different things, but the Cloud Vision API was really great, even in the alpha stage. And then the only thing that--It only got better as it went. We got to run more queries on it. We got to run more hits on the API, and it was a lot of fun--It was a lot of fun to develop a physical experience around it. 
MARK: Excellent. And you found, I'm guessing, a relatively easy API to use? 
JOHN: Yeah, absolutely. We built a tool. We built a tool to just drag and drop images into a web browser in about half a day, and we were up and running, and we could see the output and zoom in on the faces where they were detected and get all the sentiment analysis. 
FRANCESC: Is that tool open source? 
JOHN: So all of the tools are gonna be open source probably about in mid April. We rushed to get every thing here. We had a little bit of technical (debt) we need to take care of.
MARK: I know the story well.
FRANCESC: I can imagine. We've been there. 
JOHN: But yeah, all the tools and the Emote-o-booth will be up. We're gonna be hopefully going to I/O, so if anybody didn't get to come and experience either the Emote-o-booth or Query It! here at the Next Conference, we may be at the I/O conference, so that'll be great. 
FRANCESC: We'll be there with you. 
MARK: That would be awesome.
FRANCESC: That is great. So tell us a little bit about what you thought about the conference. I know you were really busy building the demos, but were you able to follow a little bit of the keynote?
JOHN: So there are so many people wanting to go through the Emote-o-Booth, we didn't get to really see the keynote. But one thing that I will say about the conference that my team has gotten to experience firsthand is going through the Emote-o-Booth. As I said, you're trying to get people to do joy, anger, sorrow, and surprise, but essentially everybody's going through, and there's so much happiness and joy, and people are smiling, having a good time being around cool people and learning a lot of--learning about what's next, that our historical screen is skewed with a ton of joy even though we're, like, trying to get the emotions out of people for the other things. It's basically everybody's here having a great time, and I mean, that's exactly what you want to see. 
MARK: We have statistical representation of people having a good time today. 
JOHN: Yes, we have data. We have data on that now. 
FRANCESC: That is a good problem to have. That's good to have. 
MARK: Yeah, definitely. 
FRANCESC: That is awesome. Well, thank you so much, again, John, for taking the time to talk with us. We know you're very busy today.
JOHN: Yeah, I'm gonna go back over there. 
MARK: Wonderful. Thank you so much. 
JOHN: Yeah, thank you too.
FRANCESC: See you later. 
JOHN: Thanks. 
FRANCESC: So we're now with Violet Pena, one of the developers from Instrument, the company that created all of these cool demos that are surrounding us. Hi, Violet, how are you doing?
VIOLET: Hi, I'm great. How're you guys doing?
FRANCESC: Doing great. Very excited to have you here. Yesterday we got to interview John--John Brown. He told us a little bit about all the demos from a high point of view. What demos did you work on?
VIOLET: So I was focused just on the Emote-o-Booth--yeah.--using the Vision API. 
FRANCESC: Cool. Which was an amazing demo. 
MARK: We love this demo.
VIOLET: Great. 
FRANCESC: Yeah, lots of fun. Tell us a little bit. How was the experience? How did you come up with the idea, and how did it work?
VIOLET: Yeah, so we were looking for something to showcase the Google Cloud Vision API, and we were looking for something that we could fit into the conference experience as, like, a really fun, you know, break from more technical sessions and those kind of experiences. So we were trying to figure out how to highlight its different capabilities or you know, how to make that fun and interactive, and so we ended up landing on looking at facial recognition which is one of the attributes of the Vision API, and so we started getting really great results with facial recognition and sentiment analysis, and so then we ended up with this photo booth that you walk in. We help you make different faces, conjure up different emotions, and then we analyze the points on your face and your different anatomical features, and then we tell you about what emotions you're displaying in that photo. 
MARK: So was there a particular part of the demo that you specifically worked on? 
VIOLET: Yeah, so I was focused on the front end, so every thing that you see in the displays I had a large hand in, and then I have some coworkers who are more focused on the, like, back end and infrastructure sides of stuff, and so that's--You know, that was vital to actually kicking off all the analysis and experience after the photo is taken. So that was, you know, hooking up the camera to, you know, getting every thing to run properly and getting all the back end processing to happen so that we can, you know, get your beautiful photos to you.
MARK: So you did a lot of the, like, animation and like, the display up on the screen that you actually see as you walk around? 
VIOLET: Yeah. 
MARK: That's awesome. 
VIOLET: There was a lot of just cycling back and forth between me and the designers about, like, "Oh, well, what if we, you know, tweak this color and that opacity and you know, change those timings," and so it was really, really amazing. 
MARK: It looks great. It looks really, really great. 
VIOLET: It was so much fun to work on. 
FRANCESC: There's a couple things that I really liked. One of them is kind of subtle, but actually--So that that aura that surrounds you surrounds only the faces that you can actually see. 
VIOLET: Yeah.
FRANCESC: So the picture with you and three more people, I think you were in that picture. Maybe not, but there were four girls in the picture, and only one is looking forward. The others are looking backwards. 
VIOLET: Yeah. Oh, yeah. Uh-huh.
FRANCESC: And it kind of does the highlight of that single person looking at the camera. How does that work?
VIOLET: Yeah. So the way that we've had the experience work is that we want this--You know, we want this colorful visual achievement on the photo, but we didn't want to cover up people's faces, and so that's how we were also bringing in the hexagon motif into the whole thing, right? Draw a hexagon around the faces that you find, but then of course, if it only finds one face, it doesn't know if it's a person if it can't see your face, so that's how some times we ended up with--Like, you saw if three people are turned around and one person's facing forward, that's the only face it finds, so it only draws a hexagon around there, and it analyzes the emotions from that one face. So we actually also had some group shots where one person wouldn't be ready, and so just totally by accident they would be looking away, or in our testing, someone was sneezing while the photo was taken, and so her head was down, and so it drew a hexagon around, like, the other people in the picture, and then she was, like, covered up by the color. 
FRANCESC: "You're out."
VIOLET: Yeah. Yeah, so that happens. 
MARK: But no, I really like that as, like--Actually it's just a really cool idea for using Vision API for, like, being able to recognize, "Okay, these are the things that we want to, like, focus on, and so here are the faces, so we're gonna draw around that and frame that because we know where they are in the picture." 
VIOLET: Yeah, so something else really funny that happened with face detection though--And this wasn't a bug, kind of a bug, but it was just really, really funny to me. Some people here have security badges with photos of them on it, and so it didn't happen to all of them, but to maybe about half of them, I guess the light made it clear enough, like, the flash was bright enough. The badge was angled forwards, so it would actually detect the face on their badge. And like, these are really little, right?
MARK: Yeah. 
FRANCESC: That is very cool.
VIOLET: A little photo, yeah. And so most of the people--So it would map like there's another face in the photo, and then it would zoom in on that face, and it was, like, this little blurry picture on a card, and so someone was actually smiling really big in her photo on her badge, and it actually kept saying "joy very likely" for that badge, so it was even sentiment detecting in that teeny badge photo, so I think it's hilarious when stuff like that happens. 
FRANCESC: That is very awesome. 
MARK: Very cool.
FRANCESC: I really like it. Cool. John also mentioned that apparently there were hotdogs involved with this demo. 
VIOLET: Yeah. 
FRANCESC: Could you tell us a little bit more about what's going on?
VIOLET: Yeah, so you're not gonna see any hotdogs in the product today, but that was part of the journey as we were figuring out what the experience should be. So kind of close to the beginning, we were like, "Well, a photo booth would be great 'cause, you know, conferences have a photo booth, but like, we're analyzing photos, so let's do something with that," so we were trying to figure out what the photo booth should do, and so since--So the Vision API has so many, like, options of things that you can try to analyze, and so one of the options is label detection, and it can tell you what a photo is of in general, so like, you pass it a photo of a farm, and it'll give you, you know, labels about what it would classify the photo as and confidence scores. And so you're trying to leverage that, and so we were thinking like, "Well, what if we gave people props, and then we could get labels going." So like, if you're carrying around--If you have a hotdog for instance, then maybe--
MARK: Which is something I often do. I just have a hotdog. 
VIOLET: Yeah, just--Well, okay, so we were printing out foam core props. This was, like, a four-foot long hotdog or something. 
FRANCESC: Oh, there was no real hotdogs? 
VIOLET: No.
FRANCESC: I'm disappointed now. 
VIOLET: Because those would be a little bit small. But we were printing out, like, you know, a huge hotdog, a boom box. We were trying to do landmarks, so we were like--We had a sphinx this big, like, Eiffel Tower, stuff like that. 
FRANCESC: Oh.
MARK: Very cool.
VIOLET: So we were trying to do that, and maybe--So if you have a hotdog or like, a slice of pizza, maybe it'll change the background of the photo to, like, put you and your group in a restaurant or...
FRANCESC: Oh, that's cool. 
VIOLET: ...or something like that. So we were playing around with that, and it just got too hairy because it doesn't detect--As of right now anyway, it doesn't detect specific objects, and say, like, "Oh, I see a hotdog at, you know, this pixel by that pixel." 
MARK: Oh, yeah. 
VIOLET: You have to--It just tells you what the whole image in general is of, so if you send it the whole image of people, even if they're holding a hotdog, it'll say, you know, "Top guess is, you know, group setting or photo shoot" actually was the guess it was giving us a lot, and we were like, "Oh, that's not very interesting. Come on." So yeah, we were trying to, like, slice up the image and send through little parts, but it was taking--It was taking just a long time because we had to keep sending more small images and checking those results and--
MARK: Yeah.
FRANCESC: Yeah, to make sure it didn't happen again. 
VIOLET: Yeah, and so at some point we were just like, "Ooh, I don't know if this gonna work right now," but then we had such other amazing stuff to dig in to, that I think ended up being, like, really, really successful. 
FRANCESC: Yeah, this is a very cool demo. Is there any other ideas that you would like to share with, like, "Oh, yeah, we thought about this," other than the hotdogs, "and it did not work or something." 
VIOLET: Right. Yeah, so yeah, like I said, we also had landmarks, and so something that we were throwing around a little bit was--So if you have landmarks, we wanted to almost make postcard treatments, so like, yeah. If you're walking around with, like, the Eiffel Tower, right, and that's in your photo, then, like, the visual treatment we do, like, it puts you--the city of Paris behind you, and then we had, like, a "Greetings from Paris" across the front. 
MARK: Nice. I like that. 
VIOLET: So yeah, we were doing that, and we were trying to figure out like, "Okay, so if one person has, yeah, the Statue of Liberty, and one person has the Arc De Triomphe, like, what happens then? Like, where are we putting them? In, like, in what country, in what city?" 
MARK: Yeah.
VIOLET: So we were--
FRANCESC: Vegas?
VIOLET: We were like,--Yeah, no, that's actually--We never thought of that. That could've been our default for when you were, like, mixing really weird stuff. 
FRANCESC: It's just Vegas. 
VIOLET: Probably Vegas. So you know, that was really fun, and so that was another route that we kind of started going down, playing with that, or maybe like, "Oh, we lay our backgrounds together, or we combine city names like welcome to New Paris or something like that." So I mean, that would've been really fun. Maybe we'll do some other just, like, little fun side projects with that. 
FRANCESC: That'd be awesome. Let's see what you build for GCP Next next year. 
MARK: Yeah. 
VIOLET: Yeah.
FRANCESC: I'm very excited about that. 
MARK: This has been awesome. Thank you so much. 
VIOLET: Thank you.
FRANCESC: Yeah, thank you so much for taking the time to talk to us. 
VIOLET: Yeah, thanks for having me.
MARK: Cheers. 
FRANCESC: Thank you. 
VIOLET: Bye. 
FRANCESC: So we're here again with, again, someone working for Instrument, this amazing company that created the very cool demos that are surrounding us today at GCP Next. We have Nick Tzaperas. Tzaperas?
NICK: Yeah. 
FRANCESC: Yeah, cool. --that worked specifically on the Query It demo, right? 
NICK: Yeah.
FRANCESC: Hi, Nick, how are you doing?
NICK: Doing good. 
FRANCESC: Could you tell us a little bit about you, what you do at Instrument, and then how is it that someone came up with this cool idea?
NICK: Yeah, well, at Instrument I'm a back end developer and just kind of all over the place. We have a lot of front end talent at Instrument, a lot of graphic designers and front end developers, so any thing that's at all--dev ops or writing SQL for BigQuery, that kind of back end thing, I just hop on that. And I think the idea for BigQuery came from our creative talent at Instrument, and it's trying to mimic the "Family Feud" style, like, create a game for BigQuery. It's--The team that I work on, that's what we try to do is create interactive experiences with technology.
FRANCESC: Very cool. So you mentioned that you are a back end engineer. Have you ever written before SQL? Is that something that you put in your resume or--
NICK: Yeah. No, I've definitely written a lot of SQL. A few jobs ago I was actually somewhat of a DBA, a small company, and so there's a lot of things that needed to be done, and I was running backups for the database and running migrations and writing SQL to try to figure out why the database was running slow trying to do performance optimizations on it, so pretty familiar with SQL going into the BigQuery.
FRANCESC: Cool. Did you need to do any of those, like making sure that you had (inaudible) optimizing stuff with BigQuery? 
NICK: A little bit, yeah. We were trying to make an interactive game, and you know, any good interactive experience won't have you sitting there for a minute waiting for the query to finish, and so--And we're trying to support a lot of features, so some questions like, "What was the most talked about rapper on Our Music in the last year?" We wanted people to be able to type in "Kanye, or Kanye West, or Jay-Z, or Jay Z," and have it all work, and so the databases that we're using had aliases, and trying to pull in those, all the aliases, for every single, you know, musician and searching Reddit for it was taking, like, a minute. You know, and the game's slow and chugging along, so you type in your answer, and you're sitting there for a minute just waiting and waiting, and so there was a lot of--Yeah, the BigQuery interface actually had some--Like when you run your query, it has an explanation of where time was spent and shows you kind of portions of your query that took a long time, and it was able to use that to figure out what to kind of cut out of the query to make it run faster to make it more of a more--a faster paced--trivia game. 
MARK: Was this your first experience working with BigQuery? 
NICK: Oh, yeah, definitely. 
MARK: Yeah? But pretty easy to pick up? 
NICK: Oh, yeah.
MARK: It wasn't, like, difficult in any way? 
NICK: Yeah, I just jumped into the interface. I think almost the entire time I was just using the interface that was created. 
FRANCESC: Cool. 
NICK: A coworker of mine, eventually we wanted to--We were trying to create as many questions as possible 'cause that's something else is we want people to be able to stick around and play it a few times and not see the same questions over and over, so we were trying--We were shooting for 200 questions, and so eventually once we got up to that mini-vetted, just a huge database of questions, it became impractical to manage by hand, and so we're using the API more. But when I first started playing with BigQuery, it was for the interface, and Felipe, he is actually using some of his databases. He just sent me some links to his databases, and they showed up on my account and just started playing with them, yeah.
MARK: So--Sorry. Go on.
NICK: And then, yeah, just clicking on tables, and then you can click to see all the columns in the schema and just writing SQL and looking around at the data. 
MARK: Awesome. So I'm quite curious to know what the process was for coming up with those questions. Did, like, people pose--Like, I know you had the data sets. Did they, like, pose the question to you, and then you were like, "Okay, now I have to answer this question using BigQuery," and then you'd go off and answer it and just rinse and repeat, or what happened?
NICK: It was--Yeah, it was--That was the most challenging thing was coming up with the questions 'cause the data sets themselves aren't that exciting honestly. It's just Reddit comments and GitHub, commit pushes, and--So trying to create a question that would make you laugh but was also still possible to actually query was pretty challenging, and the process involved a lot. At first it was--We had a writer that was just coming up with fun questions, and a strategist, they were both working on just writing questions, and then I would go and see which one of the--which of the questions that they wrote were actually possible to search. And this is before I even really knew the data sets that well, and so I took the questions and have to actually go see, "Well, is this queriable? I'm not sure," and go try it out and realize, "Oh, no, there's actually kind of a limit of things that we can search," and so then we changed it up to where--We reversed it to where it's like, "Okay, I'm more familiar with the data sets. Here's what we can query. Try to make these interesting," and I think the one that we had the most fun with was pulling tags from Freebase, which is kind of like a--It's in BigQuery, but it's more of like a graph database. It's just a bunch of connected--It can go from, like, "Tom Cruise was an actor in this movie, and this movie was done in 1993, and then 1983 is the year that this happened," like, 'cause there's this is a big connected graph database, and there are certain tags in there, so you can pull out, like--We have one question about which '80s movie was talked about most on Our Movies last year?" 
FRANCESC: Nice. 
NICK: And so we were able to get, like, movies that were made in the '80s and musicians and food ingredients and breeds of dogs and things like that, and so that was--I think discovering that made a lot of fun questions 'cause then you're able to just search--A lot of these databases like Reddit is just text. It's just people typing in text. There's no structure, and so getting a structured data set and then being able to search for certain categories within Reddit, that, I think, created a lot of fun questions. 
MARK: So the combination of data sets really let you be able to do some interesting things. 
NICK: Yeah. Which was also tricky because that creates a huge query 'cause you're kind of pulling, like, all of these movies over here, searching all of these comments over here for them, and it just, like, multiplies. You know, you have, like, millions of comments in Reddit that you're searching for and thousands of movies you're searching for within each individual comment. 
FRANCESC: Yeah, 'cause something important to mention is the fact that you really don't know what people are gonna write as an answer, so you cannot even cache the solution or any thing, so it's like, every single time that someone answers something, you're actually processing the whole millions and millions of data. 
NICK: Yeah. No, that's exactly what we wanted to do with the experience. There was some talk about doing a multiple choice versus typing in an answer, and we definitely, definitely wanted to try having users type in an answer because then you get that feel of actually hitting BigQuery live, and you can type in whatever you want, and it'll go search for it versus multiple choice. If you, you know, have, like, five choices and you choose "E," you're kind of thinking, "Well, maybe they pulled those answers, you know, yesterday, and it took five hours to run the query, and they just--"
FRANCESC: Yeah, you can totally fake it. 
NICK: Yeah, you can kind of fake it, but I think it turned out great where people can actually tell--You know, they type in the answer, and they can type in absolutely whatever they want, and it shows the SQL in the thing that you typed in is there, and it goes and runs the query live. 
FRANCESC: I got to say, I actually got a question which was, "What was the most popular kitchen utensil during the last month on Wikipedia?" And I went with "spork," my favorite kitchen utensil, and the query actually worked. I got a zero. So yeah, I don't think I was prepared before. I don't think lots of people think about sporks very often. 
MARK: Apart from you, quite clearly. 
FRANCESC: I like sporks. 
NICK: I don't think I've ever cooked with--I've used a spork. I don't think I've cooked with one though. 
FRANCESC: Cool. So I have a couple questions about what is about your questions. The first one is, what is your favorite question that you've written?
NICK: I think it was the comic book character one. There was a lot--I mean, that one--There's so many of them. While pulling the database, like, finding a list of all comic book characters, there was, like, 6,000 or something, and so it's kind of fun to see random people come up and just type in some random comic book character that I've never heard of, go and look them up, and it's some, you know, side character in some Marvel comic or whatever. 
FRANCESC: Oh, that's cool.
NICK: And there was one guy specifically--You know, me and John, we were trying to get people to play, and "Hey, you want to play?" He's like, "No, no, no." He was like, "Okay, okay." And then we go up, and we play, and he sees the first question is the comic book character game, or the comic book character question, and he immediately is like, "Oh, no, no," and he runs up, and he's like, "Now I want to play." He thought it was gonna be, you know, like, maybe some kind of Trivial Pursuit kind type questions, and he saw the comic book one, and he immediately was like, "Oh, Batman." He was ready to go. 
FRANCESC: Very cool. And what about--What was the hardest query to write? What was the question that came with the hardest query?
NICK: No, I think it was the--I would say it's the ones that we dropped. There were a few questions that I was working really hard to get right, and it was just the data itself that wasn't quite working out. So there was a few top musician, which I think is in there, but we kind of tweaked it. That one, I was trying to do the thing where you could type in "Kanye or Kanye West or--" I could type in "Lennon, John Lennon." You know, there's a few aliases for certain musicians that I wanted people to be able to type in, and it was really slow trying to support all the aliases, and even some of the aliases in the database were wrong, so there was a lot of--There was many, many, many different occasions where we're trying to pull musicians or actors, and someone completely unexpected comes up. So like, pulling top musicians, John Cleese came up 'cause I think he was in a musical.
MARK: Yeah, he is. He's been in musicals. 
FRANCESC: Oh, yeah. 
NICK: And so technically he's a musician, and then he was the top answer for the question. He was the most talked about musician technically when we wrote this query in Our Music because his alias is "friend" in the database that we're using, and so whenever it saw the word "friend," it assumed--it thought that they were talking about John Cleese, and so he was, like, number one by far. It was like, "Number one, John Cleese. Number two, Kanye West." Oh, we're gonna have to figure out how to do this right. 
MARK: I'm sure John Cleese was very happy about that.
FRANCESC: Yeah, the biggest one then was really just like--Yeah, you need a data set that is clean and have it being readily available. 
NICK: Yeah, 'cause a lot of times we don't' actually know--I mean, we're not doing, you know, natural language processing on the Reddit comments, so it's trying to pull data out of the comments where you know what they're specifically talking about, so trying to come up with questions or write questions to where there's no ambiguity about what a user might be talking about on Reddit, that was the really challenging part. 
FRANCESC: Very cool. Well, is there any other question that you would like to share? Like something was like, "That was really cool," and you would like to share?
NICK: I think the speed of it. Like, a lot of the data sets for GitHub were doing all time, so some of the questions that got cut just 'cause I guess they weren't quite family friendly, was like, "What programming language cusses the most?" And that was--There was, like, a list of, like, maybe 20 different cuss words that were searching for with GitHub, and it was--I think that was the first one I went to 'cause it was just so fun. Everyone at the office was like--We were having fun with that one. And also the poop emoji one. 
FRANCESC: What was the language? Was it--I want to say it's C 'cause, you know, it's so hard to write it. 
NICK: C was surprisingly--I think they were surprisingly happy people. 
FRANCESC: Okay, nice. 
MARK: Java. I'm gonna go with Java. 
NICK: I think it was. Java was up there. 
FRANCESC: Very cool.
NICK: But it was the speed of it. Like, it went through every single event that happened in GitHub for the past, like, five years. Like, that just commits, pushes, issues comments, opening an issue, closing an issue, like, all of it. It went through all of it in, like, ten seconds. 
FRANCESC: Wow. Nice.
NICK: I mean, like, that's when I first starting using it. That was a big "wow" moment was just the speed of--that you have accessible to you. 'Cause, you know, doing a Google search is obviously super, super fast, and that's always been impressive. But now that it's been kind of turned around, and now you have the ability to use that infrastructure to search whatever you want within seconds, that moment was really, really cool. 
MARK: Cool.
FRANCESC: Very cool. Well, thanks so much for taking the time to talk to us. 
NICK: Yeah, no problem. Thank you.
FRANCESC: Thank you.
MARK: Thank you. 
FRANCESC: Thank you so much to John, Violet, and Nick for those amazing interviews. We have a bunch of links in the show, and it's so you can see pictures of the demos and videos and so on. They're totally worth having a look at, so just go there and enjoy. And now we're gonna go for the "Question of the Week." 
MARK: Yeah. 
FRANCESC: So the "Question of the Week" is about Deployment Manager, and as I said, it's the first time we talk about it at all, so I think it's probably worth mentioning a little bit what Deployment Manager is. 
MARK: So Deployment Manager is a way to programmatically and declaratively basically say what infrastructure you want to spin up on Google Cloud Platform. So maybe you want a whole bunch of machines. Maybe you want a Kubernetes Cluster. Maybe you want a Cloud SQL database. And so you can write these (inaudible) files, send them out through Deployment Manager, and it'll query that for you in an item pertinent way. 
FRANCESC: Cool. Cool. So it's kind of like Kubernetes Configuration files where you describe your architecture of your cluster, but it's a little bit--It's a higher level where you're describing the architecture of your Google Cloud Platform project in general. 
MARK: Yeah. Yeah, yeah.
FRANCESC: That is very cool. There is--There's actually for some people that may have used it before, there's also Terraform by HashiCorp. It's kind of the same idea. Terraform works across the different platforms, and Cloud Deployment Manager is just for Google Cloud Platform. So what was the question then?
MARK: So the question that got asked actually, was by one of our Google Cloud Platform users who was asking how you pass in variables to Deployment Manager. 
FRANCESC: Oh, interesting. 
MARK: So if you're writing your script, you've got, say, a (inaudible) file, but maybe you want three instances or something in, like, testing, but you want 20 instances in production. How can you do that? 
FRANCESC: So how do you do it?
MARK: How do you do that? So it's actually reasonably straightforward. One of the things that Deployment Manager supports is a thing called "Templates." And basically they're Jinja templates. If you've ever used Python, it's a standard templating thing for Python. 
FRANCESC: Yeah, I know those.
MARK: You know those? Yeah. Wonderful. And so rather than just writing a (inaudible) file, you write a Jinja template with these variable placeholders in them, and then you can populate them. Now, where it got a little confusing for the person in question was they figured, "Oh, maybe I can pass in the variables on the command line." But instead of doing that, actually what you do is you end up doing a (inaudible) file where you import the template, and then when you import the template, you use that import as a custom resource, and then when you do that, you can pass in variables inside that (inaudible) file, so they just become like child elements within that (inaudible). We'll have it in the show notes so you can see the examples, but the templates are super, super powerful because you have the full power of Jinja behind it, and then you can simply just pass in whatever variables you need within that configuration. So you might have a test configuration for your testing servers, and then maybe a prod version of that as well for when you want the 20 rather than the three, or four or five. 
FRANCESC: That is pretty cool. I'm looking at some of the configuration files now, and yeah, they actually remind me a lot of cube configs.
MARK: Yeah. If you look at the configuration files, they match up exactly with the APIs, the REST APIs that we have, to be able to create stuff and delete stuff. So it's directly in line with that. They're pretty straightforward to use once you get the hang of them. 
FRANCESC: Very cool. Well, I think that that's all for today, but before that, maybe it's time to first of all thank all--thank our listeners...
MARK: Yep. 
FRANCESC: ...and remind them how to contact us. 
MARK: Yeah, so if they want to reach us on email, it's Hello@GCPPodcast.com.
FRANCESC: If they want to reach us on our website, it's GCPPodcast.com.
MARK: If they want to reach us on Twitter, it's GCPPodcast.
FRANCESC: @GCPPodcast actually.
MARK: Sure. 
FRANCESC: If they want to reach us on Google+, it's +GCPPodcast.
MARK: If they want to reach us on Reddit, it's /R/GCPPodcast.
FRANCESC: And I think we're done, or--
MARK: If they want to reach us on Slack, it's #Podcast channel inside the Slack community.
FRANCESC: Always forget that one. 
MARK: You do. Are you gonna be anywhere special in the next couple of weeks? Any new speaking engagements coming up?
FRANCESC: Yeah, I'm actually very excited about going to CraftConf in Budapest at the end of the month. 
MARK: Very nice. 
FRANCESC: So yeah, I'm very, very excited about that. My first time in Hungary. So if any of our listeners somewhere around Hungary and Budapest, let us know. I'd be very happy to say "hi," and maybe I can bring you a t-shirt. 
MARK: Ooh. That sounds like fun. At the end of the month, I am heading to Kentucky here in USA. 
FRANCESC: Where bourbon comes from. 
MARK: I have never been there before, so I will be going to the Vector Conference. I'm hosting a gaming round table there talking about how Cloud changes the game. That is on the 30th of April. And then I will be heading over to Louisville on May 2nd to go to the local GDG and talk to them about Kubernetes. 
FRANCESC: Very cool. Sounds fun. 
MARK: Yeah, it's gonna be great. 
FRANCESC: Have you ever been there?
MARK: I have never been to Kentucky. I'm kind of excited. 
FRANCESC: New state. 
MARK: Yeah.
FRANCESC: Very cool. Well, thank you, Mark, for another amazing episode. 
MARK: Thank you very much for joining me yet again. 
FRANCESC: And talk to you next week.
MARK: See you next week.
{{< /transcript >}}
