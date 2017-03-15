+++
audioDuration = "00:19:12"
audioFile = "Google.Cloud.Platform.Podcast.Episode.64.mp3"
audioSize = 27925475 
categories = ["Next", "Big Data"]
date = "2017-03-08T01:07:49Z"
description = "This week brings your hosts Francesc and Mark doing DAILY EPISODES from Cloud Next! Today’s episode brings interviews straight from the Cloud Next Community Summit!"
draft = false
episodeNumber = 64
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Day 0 at Cloud Next"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/9QkrLdTNiCJ"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/5y98lk/episode_64_day_0_at_cloud_next/"
image="/images/post/next17booth.jpg"
+++

This week brings your hosts [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic) doing
*DAILY EPISODES* from [Cloud Next](https://cloudnext.withgoogle.com/)! Today's episode brings interviews straight from the Cloud Next Community Summit!

<!--more-->

##### Interviews

###### Kalev Leetaru

[Kalev Leetaru](http://gdeltproject.org/) is the creator of the GDELT project, a global database of society,
powered by Google Bigquery, Machine Learning APIs, and many other Google Cloud products.

###### Tim Kelton

[Tim Kelton](https://twitter.com/timbuktuu) works at Descartes Labs and is here to show off his [demo](https://search.descarteslabs.com).
Learn more about it on the [blog post](https://medium.com/descartestech/geovisual-search-using-computer-vision-to-explore-the-earth-275d970c60cf#.3anxgb8po).

###### Verónica López

[Verónica López](https://twitter.com/maria_fibonacci) joins us to talk about all the cool things she saw during the Community Summit and all the sessions she's excited about day 1.

##### More about Cloud Next
 
- You can watch the [live stream](https://cloudnext.withgoogle.com/)!
- More daily episodes to come - stay tuned!
- Come find us on the ground floor at Moscone!

<div style="text-align: center">
  <img src="/images/post/next17booth.jpg" style="margin: auto;">
</div>

{{< transcript "FRANCESC: Hello, and welcome to episode number 64 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey Mark. How are you doing." >}}

MARK: I'm good, Francesc. How are you doing today? 

FRANCESC: Very, very happy, very excited about everything that is going on right now. 

MARK: It's pretty crazy. We are just getting into Cloud Next. And we're here at the Cloud Next Community Summit. 

FRANCESC: Yeah. So we're recording this the day before. So we're recording this, it's Tuesday. Tomorrow when this will be released, it's day number one of Cloud Next. 

So we thought we would join the community summit, talk to some people about what they've been learning today, and what they're excited about for Cloud Next. So yourself, if you're going to be at Cloud Next attending, you can watch it or later on watch the recording on YouTube. 

MARK: Yeah. And just so you're aware, this episode will be a little bit short. But don't fret. Everything's OK. 

What we're going to be doing is doing daily episodes with interviews-- 

FRANCESC: For the rest of our lives. 

MARK: No, not for the rest of our lives. Oh, my god, no. We're going to be doing daily interviews on the floor with people at Next-- speakers, people we find, interesting people. I'm sure you'll all love it-- so that you can actually hear about Next if you're unable to attend. Or if you're at Next, and you want some possible real-time information about sessions coming up, you can also listen in as well. 

FRANCESC: And if you are at Next, we are on the ground floor. We have a Google Cloud Platform Podcast booth. 

MARK: Yep. 

FRANCESC: And it looks pretty cool. So come say, "hi." We have t-shirts. 

MARK: We have t-shirts, and we have stickers. 

FRANCESC: Oh, yeah, cool stickers. And we have many colors, too-- green and red. 

MARK: So why don't we get started with the interviews we have today? We're going to start with Kalev Leetaru. 

FRANCESC: Yeah. Kalev Leetaru, a good friend of the podcast, because we talked already about his project, GDELT with Felipe Hoffa. So let's go talk to him. 

MARK: Sounds good. Let's do that. 

FRANCESC: So we're here today with Kalev Leetaru. Hi, Kalev. How are you doing? 

KALEV: It's great to be here with you guys. 

FRANCESC: We're going to be talking today about the Cloud Summit. But before we do that, why don't you tell us in two sentences who are you, what do you do? 

KALEV: So I run an open data project called the GDELT project which looks at open data around the world, especially news media, and uses a whole range of Google Cloud technologies to process this to really try to understand what's happening around the world each day and to really connect us more together as a world. Very few of us have visited, say, Burundi recently. To be able to bring the world together, see what's happening in Burundi or in Syria or over here in this corner of the world-- to bring the world together, so we really see what's happening around us and can build empathy and understand the world around us. 

MARK: Cool. 

FRANCESC: I know you are a very good friend of Felipe Hoffa from our team. So you use a lot of Big Query. What other products do you use? 

KALEV: Oh, and I love Big Query. Big Query is amazing to be able to-- you think about the amounts of data that I generate. The ability to look through billions of records, to be able to fold that data-- so Big Query is a huge piece of this. 

Google Compute Engine, obviously-- I make immense use of that. Google Cloud Storage-- it's amazing to be able to generate a data file, shove it out to storage, and it's just infinite. If a million people start downloading that file, you don't worry about it. 

Most recently, I actually started using the Cloud ML tool, so Cloud Vision-- so actually processing global news imagery through Cloud Vision to look, what's the visual narrative? Because today, most of what we do, we do with text usually when we process the world. But we forget the fact that visual is so important. And so much of the news is imagery. 

So using Cloud Vision, actually applying Cloud Natural Language-- so we're starting to really explore, what can we use with that to really understand the news in ways we've never been able to before? Did a number of experiments at Cloud Speech and found just incredible, being able to transcribe across the world's languages-- and so really starting to leverage all these tools that are out there. 

And that's what I love is really, within the Google environment, A, it's infinitely scalable. But B, the plug and play-- the fact that I could literally make an API call and say, here's an image. Tell me what's in this image. Give me everything you know about that. 

And I don't have to worry about learning TensorFlow or learning all this stuff, but knowing that in the future, the pathway is there so that if I decide, I want to build a custom model to do this, I know the infrastructure's data, drop that in, and deploy at those same scales. 

MARK: Awesome. All right. Well, we're here at the Community Summit for GCP Next or for Cloud Next. What has been exciting? What have you been seeing today? 

KALEV: Oh, I've loved it. Meeting all these Google folks-- especially it's a different community of folks than I typically interact with. So it's been great seeing these other sides, hearing especially things like security and how Google has invested so much in allowing to create a secure Cloud, a scalable Cloud. Seeing all these different sights has been really exciting to me, to actually hear from Google itself. 

And it's been fantastic here. And looking to the rest of the week, it's so exciting to just-- as someone who has lived in the supercomputing world for a number of years, it's just amazing being out here. And seeing the scale that Google operates at, it's really like time traveling to the future. And especially being from the Washington area, it's amazing coming out here and spending a couple of days. 

It's almost like you're time traveling. You spend a couple of days in the future where it's like, here is things that you've never been able to dream of before. And they're actually reality, available today. It's just incredibly exciting. 

FRANCESC: That's amazing. So before we finish, what are the single thing or announcement that you know about that you're looking the most forward to? 

KALEV: There's no single thing. And I think that's actually what excites me so much about Google is it's really easy to-- most companies fall into that single thing where you say, oh, yeah, they do this. 

To me, I'm excited. Looking over the next couple of days, the talks that I'm most excited about range from scalability and infrastructure of doing things that, quote unquote, "Google scale"-- and the fact that that's actually a term-- "Google scale"-- is amazing. But I'm really particularly excited about the big data side-- what are the things like Big Query and the things of being able to deal with data where you don't have to-- long story short, things like Big Query where historically, people like me, we had to limit the questions we ask to our abilities or the tools that we could bring together where Big Query, I don't even think about, is this question tractable anymore? I just do it. 

I just get that answer. So to quote Han Solo from "Star Wars" where he says, I never ask that question till I've done it. And I love that with things like Big Query. So that's really exciting to me and then the Cloud Machine learning stuff to see the future of bringing to bear some of the greatest machine learning or deep learning tools that are out there and where is Google pushing that needle, because it's exciting to see how fast it's evolving. And that's evolving as an API that people like me can access and do incredible things, without understanding any of that math behind the scenes. 

MARK: Awesome. Well, Kalev, thank you so much for taking five minutes of your time and your day to come here. And I hope you have a great Cloud Next experience. 

KALEV: Thanks so much. It's great to be here. And I'm excited about the coming week. 

FRANCESC: Thanks, Kalev, for such an amazing interview-- a bunch of very, very good sound bites the marketing will appreciate. Such an exciting guy. 

Next, we have a continuation of what Kalev was talking about. He mentioned that you can use many of our products as simple APIs, like Cloud Vision. But if you want to, you can actually dig deeper and basically go down the text stack and change things down there. 

And we're going to be talking now to Tim Kelton from Descartes labs. They were showing us that really cool-- 

MARK: It's pretty amazing, yeah. 

FRANCESC: And it involves using Vision API, but not Vision API. Instead, what they did is they train a new TensorFlow model for the specific [INAUDIBLE] that they want to do. So I think that that was a very interesting topic. So let's talk to him. 

MARK: Sounds great. Let's do it. 

FRANCESC: We're now joined by Tim Kelton from-- I always doubt how to pronounce it-- "Des-cat" or "Des-carts" labs. How are you doing, Tim? 

TIM K.: I'm doing really good. 

FRANCESC: So it is the second time we have you here in the podcast. But for those people that have not listened to the previous episode, why don't you tell us a little bit about who are you, what do you do? 

TIM K.: Sure. I'm one of the co-founders of Descartes Labs. And we're a startup focused on machine learning applied to aerial and satellite imagery and then using that to see how the earth changes every day. 

MARK: Awesome. So I know you're here for the Community Summit. But you actually just showed us something super, super awesome. 

TIM K.: Our cool thing of the week. We're super excited. 

MARK: Yeah. Can you tell us a little about what it is and what it does? 

TIM K.: Yes. So this is just launching right now. It's at Search@DescartesLabs.com. And we have many petabytes of satellite imagery that we've pulled into Google Cloud. And then we basically run machine learning algorithms over them to do a similarity search. 

So you can think of dividing the earth up into really, really small little squares and then looking for something interesting, like a wind turbine. And you might say, well, where else in all of this imagery are there wind turbines? And then what we'll do is we run that back through our models and run all the satellite imagery through. And it will return back the top 500 most similar images to what we just clicked on. 

FRANCESC: So I think it is pretty interesting, because we were previously talking with Kalev. And he was mentioning how for his project GDELT, he uses Cloud Vision. But Cloud Vision is just like a REST API. And you can very easily use it. 

If you want to dig deeper, you can definitely change basically the engine of how it works. Is that what you're doing? Are you running Cloud ML? Are you running TensorFlow? Tell us a little bit about it. 

TIM K.: Yeah. These are TensorFlow models. And basically, we extract a feature vector for each of those little, tiny scenes that we see all over the earth. And that has a unique signature. 

And then we rank them and we do a similarity in which other features anywhere else on the earth are similar. So it's something you could never scale. You could never hire 1,000 people to just rank every single pixel all over the world and say, how similar is this to this? You have to automate it enough to use something like TensorFlow. 

MARK: And I saw on the actual app that you can scale in and out visually from America or China or basically other nations, I believe are using Google Cloud Storage for that? What's happening there? 

TIM K.: Yeah. Under the hood, we could never attach enough PD disks to a single VM to store all of that imagery. So we had to have another solution. 

So we're actually storing all of the compressed and tiled imagery in Google Cloud Storage. And then we have a layer on top of that called Festivus. And that's a file system layer on top of Object Storage. And that allows us system level access, just as if it was native disk. And that's really, we can only do that because Cloud Storage is just so fast returning back the objects. 

FRANCESC: Cool. I'm actually curious about two things. First, is Festivus-- I don't know how to pronounce it correctly-- but Festivus, is that open source, by any chance? 

TIM K.: No, it's just something we built. Actually, our CTO wrote all the code over a weekend pretty much and got it all to run really well. And it's just been this really core part of our infrastructure, getting it to scale. And we're still a pretty small company focused on building products right now. 

FRANCESC: Cool. And the second one was, how are you actually managing-- you said there was petabytes of data and [INAUDIBLE]. And it just works. Is there some magic going on? Or it just appears Cloud Storage is fast? 

TIM K.: Well, under the hood, we're storing lots of-- we have a fairly sophisticated processing pipeline to get all the images in and have them all correct and be really uniform and have a real nice API in front of it. But then in front of that, to serve it, we have GKE clusters and managed instance group clusters that we horizontally scale. And then you have front end load balancers that are in front of those instance groups and GKE clusters. 

MARK: Sounds like something we might want to do a full episode on at some point soon. 

FRANCESC: Yeah, why not? 

MARK: I think so. So if people are attending Next or possibly looking out for recordings later on, I believe Descartes Labs has two sessions at Next this year? 

TIM K.: Sure. If you want to learn more about Festivus and how we're using Google Cloud Storage at large scale, there's a session. And it's I/O 242. That's on Thursday at, I think, 5:30. 

And then my session is talking about Postgres and how we use Postgres. And that's on-- I think that's I/O 235 on Thursday at 1:20 or 1:30-- something like that. 

FRANCESC: Perfect. We have links to the demos and your sessions on the show notes. And those sessions will be recorded. So if you're not attending Next, don't worry, because you can watch them later on on YouTube. 

TIM K.: Yep. 

MARK: All right. Well, thanks so much for joining us here in our little area at the Community Summit. And thanks for joining us at Next. 

TIM K.: Thanks, guys. 

MARK: Next up, we are talking to Veronica Lopez, a good friend of Francesc, especially because she writes a lot of Go. 

FRANCESC: Yeah she writes a lot of Go. And also, she's awesome. So we're going to be talking to her about all the cool things that she's excited for Cloud Next and cool things that she saw today at the Community Summit. 

MARK: Excellent. Let's go do that. 

FRANCESC: I'm very happy to welcome Veronica Lopez to the podcast. How are you doing, Veronica? 

VERONICA L.: I'm fine. 

FRANCESC: Why don't you tell us-- it is weird, but there's people that do not know who you are. 

MARK: Crazy. 

FRANCESC: Why don't you tell us a little bit about who you are and what you do? 

VERONICA L.: I'm Veronica Lopez-- Veronica Lopez-- 

FRANCESC: Veronica Lopez. 

VERONICA L.: And I'm a software engineer. I used to be a physicist. And I want to be a physicist again at some point. 

But for now, I'm a software engineer. And I used to write mobile apps with Android. And now I write Go, and I'm trying to learn Elixir. 

MARK: Nice. 

FRANCESC: Nice. So we are today at the Community Summit for Cloud Next. And we just finished basically with most of the meetings. Why don't you tell us a little bit about it? What was the best part for you? 

VERONICA L.: Oh, the best part for me was the conference part where we got to go to different rooms and talk to experts about different stuff. And in my case, I chose the machine learning room where people, even though they have lots of experiences and backgrounds, were taking baby steps in the subject. 

And everyone had a lot of questions. And I honestly thought that I was the only ignorant person in the room. But it wasn't the case. But it was a positive thing, because everyone started talking and asking genuine questions. And I didn't ask anything, because they had my very same questions. So it was interesting. 

And they were concerned about how machine learning-- how not to lie to people with machine learning, how it is very easy to do that. And that started dancing in my mind. And now I'm very worried about it. 

FRANCESC: That sounds very interesting. Who was the expert managing the session? Do you remember? 

VERONICA L.: I don't remember his name. 

FRANCESC: OK, that's fine. 

MARK: He was good. If you had to get one take-away, for anyone who's listening who wasn't obviously able to attend, what would that one take-away be about that you got from that session? 

VERONICA L.: Well, in general, the knowledge that I got from it, but how Google makes it-- well, TensorFlow and makes it super-- not easy, but approachable for people to get into machine learning stuff. 

And another thing was regarding this issue of how not to lie to people with machine learning and big data stuff. Our conclusion was that you have to use as many tools as possible, not use only TensorFlow-- sorry-- and not just math, models, and not just algorithms, but all of them together to get to reliable completion. 

FRANCESC: Cool. So tomorrow is the first actual day of Google Cloud Next. Are you excited about any specific session? 

VERONICA L.: Yeah, yours. 

FRANCESC: Thank you. 

MARK: Did we pay her for that? Is that how that happens? 

FRANCESC: I don't know. I'm going to buy her a beer later. 

MARK: What are you excited about Francesc's session for? 

VERONICA L.: I am excited about learning how to use the Google tools. I know that that sounds very general, as if you paid me. But it's genuine, because I've had the chance to work with Google Cloud Platform in so many ways-- for the continuous integration stuff, for the storage stuff, and many, many things. And TensorFlow, I was trying to play with it. 

But a lot of times, you have so many things to do with it that you-- well, at least in my case-- I didn't know how to proceed. I didn't know what to do. And most important of all, how to really take advantage of just tools, so I am really looking forward to getting to know from the experts how to really take advantage of all of this resources. 

FRANCESC: Yeah. We're going to have the Meet the Experts booths, I think, there all around Next. And also, on top of that, there's a bunch of code labs that people can go and play with. So I hope that you will enjoy those. 

VERONICA L.: Yes. 

MARK: Excellent. Well, Veronica, thank you so much for joining us. And I hope you enjoy Cloud Next. 

VERONICA L.: Yay. 

FRANCESC: Thank you. 

VERONICA L.: Thank you. 

MARK: Thanks to everyone who joined us today inside our little podcast booth here at the Community Summit. It was so nice that you could join us. Really excited to be doing daily episodes. It's going to be really cool doing those on the floor. 

So rather than seeing you all next week, we'll see you all tomorrow. 

FRANCESC: Yep. Talk to you all tomorrow. 
{{< /transcript >}}