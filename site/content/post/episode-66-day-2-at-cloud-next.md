+++
audioDuration = "00:19:57"
audioFile = "Google.Cloud.Platform.Podcast.Episode.66.mp3"
audioSize = 28701048
categories = ["Next" , "Machine Learning"]
date = "2017-03-10T01:07:49Z"
description = "One more day, Francesc and Mark are back with a daily episode from Google Cloud Next! Today we interview some of the many Google Cloud Partners attending the conference."
draft = false
episodeNumber = 66
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Day 2 at Cloud Next"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/JJ7hKid8fjD"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/5ypctc/episode_66_day_2_at_cloud_next/"
image="/images/post/next17day2.png"
+++

One more day, [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic)
are back with a daily episode from [Google Cloud Next](https://cloudnext.withgoogle.com/)! 
Today we interview some of the many Google Cloud Partners attending the conference.

<!--more-->

##### Video Highlights

- [Keynote Highlights in under 5 minutes!](https://www.youtube.com/watch?v=nvYmHNwutx0&feature=youtu.be)
- [Full Day 2 Keynote](https://www.youtube.com/watch?v=kwnWfHq2EfQ)

##### Our favorite announcements

- Free usage limits for Google Cloud Platform products [cloud.google.com/free](https://cloud.google.com/free/)
- PostgreSQL now available on Google Cloud SQL [docs](https://cloud.google.com/sql/docs/postgres/)

##### Interviews

###### Martin Sleeman from Tableau

[Martin Sleeman](https://www.linkedin.com/in/martin-sleeman-b0ab493)
tells us about [Tableau](https://www.tableau.com/) and the amazing demo
they built for his talk that you can watch here:

[Visualizing big data on Google Cloud](https://www.youtube.com/watch?v=t95-3Mwi328).

###### Ed Bender from Fastly

[Ed Bender](https://www.linkedin.com/in/edwardmbender) joined us to talk about [Fastly](https://www.fastly.com/), an amazing edge network, and told us about
their partnership and the history of their relationship with Google.

They also had a session and you can find all the details here
[Selecting the right storage class for your use-case: from content delivery and big data analytics to cold storage](https://cloudnext.withgoogle.com/schedule#target=selecting-the-right-storage-class-for-your-use-case-from-content-delivery-and-big-data-analytics-to-cold-storage-8bd6506a-ada1-44e6-89cd-13cee87a273f).

###### Jonathan Lieberman from Itopia

[Itpopia](https://itopia.com/) is "The Fastest Way to Deploy Desktops in The Google Cloud" and its CEO and co-founder [Jonathan Lieberman](https://www.linkedin.com/in/jonathanlieberman1) joined us to tell us all about
it.

###### James Williams from Udacity

[James Williams](https://twitter.com/ecspike) is an Android Curriculum Lead
at [Udacity](https://www.udacity.com/). Udacity is an online educiation platform
with some amazing Google courses ([more here](https://www.udacity.com/google)).

We also highlighted the [Scalable Microservices with Kubernetes](https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615) course, and you should definitely go check it out!

##### More about Cloud Next
 
- You can watch the [live stream](https://cloudnext.withgoogle.com/)!
- Francesc's talk is already online: [Google Cloud Endpoints: serving your API to the world](https://www.youtube.com/watch?v=bR9hEyZ9774)
- Mark's talk is also online here: [Building massive online worlds with SpatialOS and Google Cloud Platform](https://www.youtube.com/watch?v=DwxmlbX1HbI)
- More daily episodes to come - stay tuned!
- Come find us on the ground floor at Moscone!

<div style="text-align: center">
  <img src="/images/post/next17day2.png" style="margin: auto;">
</div>

{{< transcript "FRANCESC: Hello and welcome to episode number 66 of the weekly Google Cloud Platform podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark. How are you doing?" >}}

MARK: I'm good. Thanks, Francesc. I realize we still have the same intro, where we say it's the weekly Google Cloud Platform progress, but it is the daily. 

FRANCESC: The daily, weekly. The daily Google Cloud Platform podcast, indeed. 

MARK: Indeed. But soon we'll be back to weekly. Thank god. 

FRANCESC: Oh yes. This is the third episode in a row. We've released one on Day 1 of Google Next. Then Day 2. This is on Day 3. But we're going to be covering everything that happened during Day 2, which was a lot. 

MARK: Which was a lot. 

FRANCESC: Pretty intense day. We are about to finish. We're here on the ground floor. So if you listen to these episode, come say hi later. And we have actually a bunch of interviews with some of Google partners. 

MARK: So we're going to talk to a variety of partners that we've, literally, plucked from the show floor to come to talk to us about what they provide-- on top of our services, but also how they use our services. And what they're excited about for here at Next. 

FRANCESC: Most of them came to be interviewed voluntarily. 

MARK: Yes. 

FRANCESC: Some of them. 

MARK: Some of them. 

FRANCESC: But yeah, we're going to have a bunch of them. But before that, there's been so many announcements that I think we should mention our favorite favorites. 

MARK: I'll go first. Why not? So if you remember back in a previous episode, we had a question of the week where we actually went through and said all the things that you could use for free on Google Cloud Platform. So now, there's actually, first of all, a dedicated page you can go to. Cloud.google/free. 

FRANCESC: Nice. 

MARK: And it lists out all the free tiers that we have that are available. Some of them are new, some of them are old. So that you can see what it is you're able to use for free on the platform. Now, that's not the only thing, which is cool. So before, if you go in for free trial, it was $300 or 60 days. And quite often, you would normally hit the 60 days before you hit the $300. 

FRANCESC: Unless you're doing really cool stuff. Which is fun. 

MARK: Which is fine too. But now, it's $300 for 12 months. 

FRANCESC: Nice. That is very good. 

MARK: So you have a whole year to basically use Google Cloud Platform with that $300. If you're doing smaller stuff or dev stuff, right? You've got a whole bunch of time there to get started and have a play. 

FRANCESC: That's pretty amazing. 

MARK: What about you? What's your favorite thing? 

FRANCESC: I'm going to say that my favorite thing, also non-necessary for me-- because I've never used Postgres. But for so many people that have asked these questions before is that we do and now support Postgres QL as a managed database on Cloud SQL. 

MARK: Cool. 

FRANCESC: Which is amazing. It is simple. But, basically, now you can create a managed instance. You get all the cool things about being managed. It will not go down. We manage updates, we manage security, we managed patches, we manage all the things. So you just need to take care about your data, really. So that is pretty amazing. Lots of people have been asking for it for quite a while. So we finally have it and very happy with that. 

MARK: Cool. So why don't we go off and chat with our friends at Tableau and get started? 

FRANCESC: Yeah, let's go with that. 

MARK: Joining us on the Moscone floor, we are joined today by Martin Schliemann from Tableau. Martin, how are you doing? 

MARTIN: Great, thanks. How are you guys doing? 

MARK: Excellent. Before we talk about what Tableau and partners and all that good stuff, tell us a little bit about who you are. What do you do at Tableau? 

MARTIN: Sure. My name's Martin, and I'm a Tableau product manager for Tableau. I worry about connectivity, so I'm really interested in all different types of data sources, especially Google ones. 

FRANCESC: So the only thing I know is that one of the data sources is BigQuery, and that Philip Hoffman, one of our teammates, does really cool stuff with it. But could you tell us a little bit more what can you do with the Tableau, given a BigQuery data source, for instance? 

MARTIN: Oh sure. Absolutely. We do a lot with Google BigQuery. We've even integrated with it for a long time. It allows you to really see and understand your data. So you can do all sorts of great stuff. We have a demo that we're going to show this week using some of that public New York taxi data, which we show people about what time are people getting picked up the most? Where are they being picked up? How many of these disputes are happening? And where are those disputes occurring? Or when are those disputes occurring? So it's really kind of cool to be able to see this huge data set. Actually be able to understand and get some insights into it just by looking at some great visualizations that we can do. 

FRANCESC: Nice. And you have a booth here today. That demo-- is it going to be there? Or are you actually having a session? Are you speaking at the conference here? 

MARTIN: Yeah, great question. We both have a booth. And at the booth you can actually see the NYC taxi demo. Which should be great. Lots of fun. Also on Thursday, [? Vetty, ?] one of my comrades, will be actually giving a presentation with Tim Swast from Google itself. It's called "Visualizing Big Data on Google Cloud." So we'll be part of that, which is great. 

MARK: Sweet. So if you're not physically here, check out that recording. That should be really good. Are you demoing BigQuery and Tableau? Or Tableau and other things? What are you actually showing there? 

MARTIN: We'll be showing just the general integration, but we'll be focused on Google BigQuery. 

FRANCESC: Nice. And other than that session, what other sessions are you excited about? 

MARTIN: I'm actually excited about some of the other big data sessions. And immersing one about migrating data into Google BigQuery, which I was really excited about. And I'm also interested about the machine learning stuff. Because I know you guys have been investing a lot into machine learning. And we'd love to see how that's going to work out. 

FRANCESC: Curious about it. Today we had Day 1 keynote. And there was, at the end, a lot of machine learning going on. Could you have a comment on it? Did you watch the keynote? 

MARTIN: Yeah, I saw the keynote. It's was really cool. The best part of that, I thought, was when she showed the ability for them to understand video now. And so she put in a search term, basically saying beaches, right? And so it searched through all of the video, and it found you just the clips of beaches, which I thought was fantastic. 

MARK: So that was Sarah, and she's one of our teammates. And she's amazing. 

[INTERPOSING VOICES] 

MARTIN: That was great. 

FRANCESC: That was a great demo, yeah. 

MARK: Awesome. Well, Martin, thanks so much for coming and joining us. And doing a little interview with us. And I hope you have a really great Cloud Next. 

MARTIN: Thanks very much. It's been great. 

MARK: Thanks again, Martin, for joining us from Tableau. Super interesting conversation. Visualizations are always hugely, hugely important. 

FRANCESC: They are really cool. Big data without visualizations is not really big data. You want to be able to extract things and show them to people. So they can understand them very easily. So Tableau, perfect tool for that. 

MARK: So next up we have Ed from Fastly talking about really cool stuff around CD ends. And basically trying to get information to people as fast as possible. 

FRANCESC: Very fastly. 

MARK: Very fastly. Nice I like it. 

FRANCESC: So next, in Cloud Next, we have Ed Bender from Fastly. Hi, Ed. How are you doing? 

ED: I'm doing great. How are you doing? 

FRANCESC: Very good. Very excited about everything that is going on. And also I want to learn more about Fastly. But why don't you tell us first about what do you do at Fastly, and then we'll talk about what Fastly does. 

ED: Sounds great. So I'm on our strategic partnerships team. We work with a lot of Cloud companies, as well as infrastructure as a service. Ecosystem members. We work globally. We've got customers all over the world. And it's kind of our job to make sure that we're doing the right things with the major origin Cloud providers in the world. 

FRANCESC: Nice. 

MARK: Cool, so you work for Fastly. What does Fastly do? 

ED: Fastly is an edge network. It does edge delivery, edge defense, edge data streaming, edge compute. Traditionally, these were known as CD ends, and the space has evolved quite a bit to be handling a lot of more interesting workloads at the edge. So we run the gamut of streaming media, protecting sites, and delivering dynamic assets. 

FRANCESC: Cool. And I know that Fastly and Google Cloud Platform are pretty related. Could you tell us a little bit more about that relationship? 

ED: Sure. We've been a part of the Google Next conference series for three years, since the first one. And we've taken that globally, from Tokyo to Paris, New York, and so on. Our relationship with Google originated when we had a large customer leaving a legacy CDN, who needed a place to store their assets. We quickly identified Google as being the Preferred Partner for storage solution. And since then it's evolved into handling a number of integrations, both from a network standpoint, a product standpoint, and go to market. 

FRANCESC: And I think you're talking about, specifically, about those topics during one of the sessions tomorrow, right? 

ED: That's right. Our CEO is speaking tomorrow morning, as part of the storage track. It's at 11:20 AM in room 2010. His name's Arthur Bergman. And it's alongside the wonderful product manager [INAUDIBLE]. 

FRANCESC: Nice. 

MARK: Cool. If you're not here, obviously you can get the recording. But while you're here, are you excited about any announcements that have come today, or maybe any sessions that are coming up in the next few days? 

ED: I've got to say, I am most excited, at least at first glance, by the sheer volume of this Next. There's so many people here. And it's been amazing to ride alongside Google for this whole past few years as Cloud has become a larger and larger part of the business. 

FRANCESC: We're definitely growing. That's for sure. 

MARK: It's Moscone, right? We're not messing around. It's good. 

FRANCESC: Great. Well thanks so much, Ed, for taking the time to talk with us. And have a great Next. 

ED: Thank you so much. Take care guys. 

MARK: Thanks. 

FRANCESC: So yeah. Thanks, Ed, for such an interesting conversation. Lots of cool stuff going on at Fastly. And next up we have Jonathan Lieberman from Itopia. And I get to say that, when we started talking to him, I had no idea what they did. And it is a very cool thing. 

MARK: It is a very cool thing. 

FRANCESC: So they basically manage workspaces, like Windows workspaces. So you can imagine office space. So you can imagine all of those workspaces being migrated to the Cloud. And they run on Google Cloud Platform. So let's talk to Jonathan Lieberman. 

MARK: So we're joined today by Jonathan Lieberman from Itopia, a technology partner with Google Cloud Platform. Before we get into Itopia and what it's all about, Jonathan why don't you tell us a little bit about what you do at Itopia? 

JONATHAN: Great, thank you. So thank you for having me. And I'm the CEO and co-founder of Itopia. And we're really excited to be here at Google Next 17. Where we just rolled out and announced our partnership with Google, and we're really excited to be here. 

MARK: So why don't you tell us a little about what Itopia does? What's the whole thing with Itopia? 

JONATHAN: So we built a technology stack for IT service providers to make it super easy for them to move Windows workspaces into the Google Cloud. 

MARK: OK. So I'm a company. Maybe I have a million desktops or something like that, right? And then I want to consolidate my resources somehow. Is that the deal? 

JONATHAN: Right. That's a great use case. And essentially what happens is that you're facing end-of-life on your server infrastructure. You're evaluating your options. Are you going to buy and build something new or are you going to move into a cloud? And we're here to help you move into the Google Cloud. And, essentially, lift and shift everything that you have into the cloud, including your servers, your desktop, applications, data. Everything that you have right now running your company. 

FRANCESC: Cool. So when you're saying that you're moving the desktops and the workspaces, does that mean that once you're an employee of a company using Itopia-- whenever you log in, you're actually using some remote desktop that is running on our cloud? Or how does that exactly work? 

JONATHAN: That's exactly how it happens. So once we've migrated the user into the cloud, they'll access their desktop from any device-- anywhere, any time-- through an icon. It might be a remote desktop. Services could be something else, and it's a remote user experience. The user clicks on the icon, and they're now on their desktop, running their software and processing and storage through the Google Cloud. 

MARK: So, OK. I'll ask the question. Why did you choose Google Cloud? 

JONATHAN: For us it came down to three choices. First of all, we looked at everything in the market. And at the end of the day, Google stood tallest when it came to performance, price, and your technology. You know from a performance standpoint, we recognize and understand that your Google Cloud is the same thing that runs G Suite. That runs your search, that runs your Maps, everything. The lowest latency in the market. And for our service, you need a low latency. And so having data centers throughout the world is a very key differentiator that we looked at. From a price point of view, you bill down to the minute, compared with the others that bill on an hourly basis. 

And then from a technology point of view, everything that you're doing from machine learning, to AI, to everything else was also very important to us. As we want to deliver the most innovative services to our customers. 

FRANCESC: So what does it entail to be a partner with Google Cloud? 

JONATHAN: So we went through a very extreme vetting process. And you all looked at our technology. We connected with the team that handles the types of use cases and the types of things that we do. We worked with your engineers. They kicked the tires. And at the end of the day, they came back with thumbs up and invited us to be part of your program. 

FRANCESC: So what does it mean now? What are the advantages that you get as a partner? 

JONATHAN: So we get to join your ecosystem. Partners from G Suite ecosystem, to Chromebooks and education. And in some cases, even large enterprises that need help, and a technology stack to move their clients into the cloud. And that's why we're so excited. Because they can partner with us to do that. 

MARK: Fantastic. All right, so we're here at Cloud Next, though. What are you excited about? What are you hearing about? Are there sessions you are going to that you think are going to be really cool? What's awesome for you? 

JONATHAN: A little bit of everything. I enjoyed the keynotes this morning. The Diane Green. I just sat through the Fireside chat with Vince Cerf and Mark Andreesen. And that was super interesting. And then also walking the showfloor. We've been able to connect with some of your premier partners. We intend to be one of them next year, so I got to hear some anecdotes about how to do that. And really just being here able to network with people that can use our technologies, man. Super. 

MARK: Awesome. Well thank you so much for taking your time out of, I'm guessing, a very busy schedule here at Next. It's been really great having you come and join us in the podcast booth, and I hope you have a great Next. 

JONATHAN: Thank you. Appreciate that. 

MARK: So cool. I know you and I don't do a lot with Windows, but huge numbers of people clearly do. So thanks to Jonathan for coming on the podcast and having a quick chat about Itopia. 

And finally last, but definitely not least, we have James Williams from Udacity. Talking Udacity, Google Cloud. We've talked it about a bunch of times, but it's still really interesting. Especially if you want to learn more about Google Cloud. 

FRANCESC: And I'm very happy to have James on the podcast for two reasons. One is, I love Udacity. They're really, really good. And second, he's a good friend of mine. So let's talk to James. 

MARK: Sounds good. 

FRANCESC: So I'm very happy to welcome to the podcast one of my dear friends, James Williams from Udacity. Hello, James, how are you doing? 

JAMES: Hello, I'm doing good. 

MARK: You got dear friend, I don't get dear friend. 

FRANCESC: You're just colleague. 

[LAUGHTER] 

FRANCESC: You should be happy with colleague at this point. Why don't you tell us a little bit about what you do at Udacity? 

JAMES: All right, I am a Android curriculum lead at Udacity, so I shape and guide the decisions about what we should cover, and how we should cover. And stuff like that. But I've also done some web courses with Udacity. There was a web-tooling course that I did with Paul [? Backas. ?] 

MARK: So if people don't know what Udacity is, what is Udacity? 

JAMES: Udacity is an online education company. We have lots of free and awesome courses. We have a credential called a Nano degree that allows people to take courses, get project reviews, mentor feedback, and things like that. And we have lots of free courses with Google. 

FRANCESC: Do you have some courses that you'd like to highlight, especially related to Cloud? 

JAMES: There is a Kubernetes course with two dudes who I cannot remember. 

FRANCESC: Kelsey Hightower and Catter Morgan. There you go. 

JAMES: The really dapper dressing dudes. 

FRANCESC: Yeah, that's them. 

JAMES: So yeah, that's probably the most related to Cloud. 

FRANCESC: Cool. So since you're here visiting Cloud Next, what is the most exciting session for you out of the next three days? 

JAMES: So do I have to say your session? 

MARK: No you don't. Because everyone has been saying Francesc's session. You say my session. [INAUDIBLE] 

JAMES: So I would say-- it's always fun to see your friends present. So I'm going to check out Francesc's session. Probably also Groovy product lead Guillaume Laforge. I'm going to check on his session as well and try and get to some of the stuff on App Engine and Google Cloud Engine. 

FRANCESC: Great. 

MARK: Cool. All right, well thank you so much for joining us here in our little podcast space on the floor of Moscone. 

FRANCESC: Cloud Next, Moscone West. 

MARK: Thank you for taking the time. 

FRANCESC: Have a good Cloud Next. 

JAMES: No worries, thanks. You guys too. 

FRANCESC: So thanks again to James Williams from Udacity for taking the time to talk a little bit about what they're up to at Udacity. A lot of things to check out from Udacity. As we said, there is a very, very good Kubernetes course with our friends Kelsey Hightower and Catter Morgan. But on top of that, there's so many other things to check out. 

MARK: Oh my god, so many things to check out on Udacity. 

FRANCESC: Yesterday we had an episode where we interviewed a bunch of really cool people. One of them, Claire. She calls herself the czar of Code Labs. And she mentioned all of those Code Labs are online. So go check yesterday's episode for a link to those Code Labs. And on top of that, there's so many announcements. 

MARK: Yeah. To make sure, hop online. A lot of the videos are on YouTube right now. 

FRANCESC: Actually, yeah, by the time this episode comes out, which will be some sometime tomorrow morning-- 

MARK: --Friday morning. 

FRANCESC: Yeah, probably our talk is already online. So go check it out. 

MARK: Yeah, so absolutely. There will be a link the show notes to the YouTube channel. I know there will be at least around 70 videos that are available. 

FRANCESC: Everything from Day 1 is there, for sure. From Day 2, most of it will be by then. So go check it out. There's a lot of things to learn. And if you're around, come say hi. 

MARK: Come say hi. Yeah. If you're here, come say hi. We have stickers, we have t-shirts. Love talking to everyone involved in the podcast. So that's it. Check out the podcast. We got daily episodes. There's blog posts on the Google Cloud blog. There's YouTube videos. The Udacity courses. There's Code Labs. 

FRANCESC: You cannot be bored. 

MARK: There's so much stuff to do. 

FRANCESC: So for all of those that are here, come say hi. For all of those that are far away from San Francisco, go check all of those resources out. A bunch of things in the show notes. And no matter where you are, talk to you all tomorrow. 

MARK: See you tomorrow. 
{{< /transcript >}}