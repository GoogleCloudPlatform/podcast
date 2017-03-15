+++
audioDuration = "00:23:46"
audioFile = "Google.Cloud.Platform.Podcast.Episode.65.mp3"
audioSize = 34490964
categories = ["Next" , "Machine Learning", "Code Labs"]
date = "2017-03-09T01:07:49Z"
description = "Francesc and Mark are back again with our DAILY EPISODES from Cloud Next! Today we are bringing you interviews for a wide variety of speakers and attendees!"
draft = false
episodeNumber = 65
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Day 1 at Cloud Next"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/HYBXVXNA7tp"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/5ygu8v/episode_65_day_1_at_cloud_next/"
image="/images/post/next17day1.jpg"
+++

[Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic) are back again with our
*DAILY EPISODES* from [Cloud Next](https://cloudnext.withgoogle.com/)! 
Today we are bringing you interviews for a wide variety of speakers and attendees!

<!--more-->

##### Video Highlights

- [Keynote Highlights in under 4 minutes!](https://www.youtube.com/watch?v=MW9VCYgSxlQ)
- [Full Day 1 Keynote](https://www.youtube.com/watch?v=j_K1YoMHpbk)

##### Interviews

###### Sara Robinson

[Sara Robinson](https://twitter.com/SRobTweets) is a Developer Advocate for [Google Cloud Platform](https://cloud.google.com/), and came 
to talk to us about her [*amazing* keynote demo](https://youtu.be/j_K1YoMHpbk?list=PLIivdWyY5sqI8RuUibiH8sMb1ExIw0lAR&t=5328)
on The [Google Cloud Video Intelligence API](https://cloud.google.com/blog/big-data/2017/03/announcing-google-cloud-video-intelligence-api-and-more-cloud-machine-learning-updates).

Francesc also references this [Total Eclipse of the Heart Literal Video](https://www.youtube.com/watch?v=fsgWUq0fdKk).

###### Sowmya Subramanian

[Sowmya Subramanian](https://www.linkedin.com/in/sowmya-subramanian-237750/) came to talk to us about her experience
being Director of Engineering at YouTube, and the panel she was on 
[Driving Success through Diversity & Inclusion: Lessons from Leaders in Technology](https://cloudnext.withgoogle.com/schedule#target=driving-success-through-diversity-inclusion-lessons-from-leaders-in-technology-00c22854-bdf5-49cd-a85c-3e740b269bcc).

###### Tammy Bütow

[Tammy Bütow](https://twitter.com/tammybutow), SRE Manager at [Dropbox](https://www.dropbox.com) visited our booth to 
talk about SRE culture at Dropbox, and to talk about all the exciting things she had seen at Cloud Next!

###### Clare Bayley

[Clare Bayley](https://www.linkedin.com/in/clarebayley/), Global Codelabs Lead gave us the inside scoop on how you can Codelabs both at Next, and at home - 
without the need for a Google Cloud Platform account. Check it out at [https://google.qwiklabs.com/catalog](https://google.qwiklabs.com/catalog).

##### More about Cloud Next
 
- You can watch the [live stream](https://cloudnext.withgoogle.com/)!
- More daily episodes to come - stay tuned!
- Come find us on the ground floor at Moscone!

<div style="text-align: center">
  <img src="/images/post/next17day1.jpg" style="margin: auto;">
    <p><small><a href="https://twitter.com/tammybutow/status/839604540282290176">https://twitter.com/tammybutow/status/839604540282290176</a></small></p>
</div>

{{< transcript "FRANCESC: Hi, and welcome to episode numbers 65 of the weekly \"Google Cloud Platform Podcast.\" I am Francesc Campoy, and I'm here with my colleague, Mark Mandel. Hey, Mark. How are you doing?" >}}
MARK: I'm good. It feels like we did an episode just yesterday.

FRANCESC: It is crazy. It's been so long without recording an episode. And, yeah, we are, today, at Moscone West here in San Francisco for Google Cloud next 2017.

MARK: Yeah, it's been pretty crazy. It is a huge, huge, huge event, and we've had some fantastic people coming by at the booth to come do some short interviews with us.

FRANCESC: It's been an amazing day. There's so many people there we interviewed, all of them amazing. There's so many of them, that we will not be able to show all of the people that we talked to, which is OK. There's also a bunch of things that we'll not be able to discuss. But you should definitely check out the news because there's so many cool announcements.

MARK: Yeah. No, you should totally tune in. The keynote should be available for watching.

FRANCESC: The keynote's already online. We'll a show note. We'll have a link on the show notes. So go check it out. There's the keynote. There's all the announcements.

MARK: --plenty of press.

FRANCESC: There's much, much, much, much stuff, so, yeah, go check those out. And instead what we're going to try to give to you today is an inside view of what's going on here at Next.

MARK: Yeah, so speaking of keynote, first person we interviewed today, Sara Robinson, Developer Advocate, part of our team.

FRANCESC: --the amazing Sara Robinson.

MARK: The amazing Sara Robinson did an amazing demo. And so why don't we go chat to her and talk to her about all the things she was involved with in the keynote.

FRANCESC: Sounds good. Let's do that.

MARK: Fresh off the stage from the keynote, I'm just delighted to be joined by Sara Robinson, a member of our DA team, did an amazing job at the keynote this morning. How are you doing today?

SARA: Thank you. It's great to be here. It was fun-- a little scary, but super fun.

FRANCESC: That was amazing. It went out really well.

MARK: Yeah, absolutely.

SARA: Thank you.

MARK: So if anyone, for whatever reason, doesn't know who you are, can you tell us a little bit about yourself.

SARA: Sure. My name is Sara Robinson. I'm a Developer Advocate on the Cloud team with Mark and Francesc. So as DAs, we get to build demos, give talks about them, write blog posts. And I'm focused on big data and machine learning.

FRANCESC: Nice. And can you tell us a little bit about the demo you gave today?

SARA: Sure. So the demo was of a new API that we launched at the keynote this morning called the Video Intelligence API, which lets you basically get granular data on what's in your video. So you send in a video, and it gives you back high-level data, some labels on what's this video about. And then it also returns labels for each scene in the video.

It'll tell you different entities that it finds. So it could say, oh, there's a dog in this scene from second 1 to 3. And it gives you that data throughout your entire video.

MARK: So was this kind of similar to like Vision API, but for basically video?

SARA: Exactly. Yeah, so if you're familiar with the Vision API, which gives metadata on images, this does that for video, which makes it easy to search a large library of video content, pretty easily, to find the exact scenes you were looking for.

MARK: So what was the actual demo you did on stage?

SARA: So that demo was an app that I built with another developer, and it's actually a Node.js app that runs on Google App Engine. And it uses cloud functions under the hood, lots of Google cloud technology coming into play. So the way it works is there is a Google Cloud Storage bucket with all the videos.

When you add a video to that bucket, there's a cloud function listening that sends a video to the video API and then writes the JSON response back to a separate cloud storage bucket. So the app is not calling the video API directly. It just calls just the front end that retrieves the video metadata from the cloud storage bucket and then the associated annotations and displays them. And it makes it super easy to implement search because you have all that annotation data in your JSON response. So you can search your video library, find the exact clips you're looking for. It was definitely a fun demo to build.

MARK: It looked really, really great.

FRANCESC: Yeah, I was actually thinking about-- I don't know if you know the literal video version, what a literal video version is? It's like basically you show video clips, but instead of having the song, you have the song description of what the video is showing instead of what the music is normally.

SARA: Oh, that's cool.

FRANCESC: So I always think that would be an amazing demo for this feature.

SARA: Yeah, something we thought about doing, but thought it might be too much for the keynote was as the video plays, kind of have the labels bubble up that are showing at that point in time.

MARK: Oh, yeah.

FRANCESC: That'd be so cool.

SARA: --might add that later. We'll definitely continue to use this demo, tweak it, take it on the road.

FRANCESC: Very cool. So other than your amazing demo and the keynote in general, what are you excited about for the rest of the conference?

SARA: Yeah, so I'm actually doing a session tomorrow which will cover the video API in more detail. But it's focused on all the machine learning APIs that we have. So there'll be five in total-- video, vision, speech, natural language, and translation.

FRANCESC: And that is tomorrow at 11:20?

SARA: Yeah, 11:20, I believe. Other sessions-- there's lots of great sessions on big data. I know Felipe's doing one on public data sets and BigQuery, some other machine learning ones, some deep dives into Cloud ML Engine.

FRANCESC: And also Mark's session, right?

SARA: Yeah, Mark's session.

[LAUGHTER]

MARK: You don't even know what my session is, do you?

[LAUGHTER]

SARA: I know it's with a customer.

MARK: There we go-- a little bit. That's fine. That's fine.

SARA: When is your session, Mark?

MARK: It's tomorrow afternoon at 4:00.

SARA: OK, and what's it on?

MARK: I'm talking about building large-scale persistent worlds with one of our partners, Improbable.

SARA: Wow, OK. Cool.

FRANCESC: That sounds really fun. I'm actually going to be there to watch the demo because I think it's going to be pretty cool.

SARA: That's awesome.

FRANCESC: Well, Sara, thank you so much for taking the time in such a busy day for you to talk about all the cool things that you've seen today.

SARA: Thanks for having me.

MARK: Thanks.

FRANCESC: Thank you.

MARK: So thanks again to Sara for taking some time today and coming to chat with us, her demo, the keynote, the whole thing about everything she did was fantastic.

FRANCESC: That was an amazing, amazing demo. I mean, the product itself--

MARK: Is cool.

FRANCESC: --is an amazing thing. But the demo was so well done. So congratulations, Sara, you rock.

MARK: Yeah. And speaking of amazing things and amazing people, we also had the absolute pleasure of having the Director of Engineering at YouTube come and visit us as well.

FRANCESC: Yeah, Sowmya Subrama decided to join us after a panel she was doing. And she's here to talk to us about the content of the panel, but also a little bit about what is it to be an engineering director at Google.

MARK: Yeah. No, she did a panel about diversity in tech and how to succeed with diversity in tech and why it's actually so important. Apparently, it was amazing as well. You should definitely check out the recording for that.

FRANCESC: Oh, yeah.

MARK: So why don't we go talk to Sowmya?

FRANCESC: Sounds good. Let's do that.

And we're very happy now to welcome Sowmya Subrama, engineer at Google, to the "Google Cloud Platform" podcast. How are you doing, Sowmya?

SOWMYA: I'm doing good. Thank you.

FRANCESC: We're very happy to have you. You just finished a pretty cool session. But before we talk about that session you were on, why don't you tell us a little bit about what you do at Google?

SOWMYA: Sure. I'm a Director of Engineering at Google, and I lead the engineering efforts for YouTube music.

FRANCESC: That is pretty amazing.

MARK: That's pretty amazing. That's not a small project, obviously.

SOWMYA: No, it's not.

MARK: [INAUDIBLE].

SOWMYA: Yes.

FRANCESC: Cool. Could you tell us a little bit about what it does entail to be Director of Engineering?

SOWMYA: Yeah. So at YouTube, being a Director-- I mean at Google, when you're leading up an engineering team, that entails a lot of different things, starting from figuring out what is the team doing, what is the mission of your team, to really figuring out your kind of architecture and design-- technicals, architecture and design, as well as what your org design looks like, like making sure you have the right people on the team and you're scaling your resources, your people, your technology in the right way. And really, it's pretty cross-functional. You're working very closely with your product management team and your UX and the business partners.

MARK: Awesome. Now, I know you were part of a session today, or leading a session today? What were you doing here?

SOWMYA: Yeah. The reason I'm here at that conference is I was on a panel. I was a panelist at a session around diversity and the impact of diversity to companies.

FRANCESC: Great. And even more than that, we had one of your colleagues a minute ago. And she was telling us about how it was basically about how to guide women to increase their success. What was the whole idea behind the panel? What was the main message?

SOWMYA: Yeah. I think the main message of the panel was about how having more diverse and inclusive thinking, diverse and inclusive teams, really affects the bottom line for companies. And how you can go about looking at both your business models, as well as the people that you work with, in ways where you're shifting the thinking to be more inclusive to drive change.

MARK: Were there any really good techniques or sort of like ideas or behavioral practices for getting more diverse teams that came up in the panel?

SOWMYA: Yeah. I think one that was kind of interesting that was called out is whether you're a startup or a big company, there are challenges to making that shift happen of different kinds, right? And the only way you start addressing that problem about having a more diverse team is not just to believe that a diverse team is impactful, but to actually see that happen and make that change. So I think that's one big thing, which is it's not just a number you're trying to fill out or make up. But it really does drive change and impact on growth. That was one big kind of theme.

FRANCESC: Cool, very interesting. So how many people were they at the panel?

SOWMYA: On the panel?

FRANCESC: Yeah, on the panel today.

SOWMYA: There were like, I think, six of us.

FRANCESC: Six of you? Nice! And all of this was recorded. So the name of the panel, do you remember the actual name of the panel?

MARK: It's OK. We'll find it.

FRANCESC: We'll find it. We'll put a link on the show notes. I think it's a very interesting topic. And it is recorded so it will be posted on YouTube, which you manage--

MARK: There we go.

FRANCESC: --sometime soon. Is there anything else that you'd like to mention, something you've seen there in the conference that got you excited or got you happy or something of that?

SOWMYA: Yeah. I mean, I was amazed at how many people are here at this conference. I think this is the first time for Google Cloud to host a conference of this kind.

FRANCESC: Of this size, yes.

SOWMYA: And it's pretty amazing to see the number of attendees here. It's really, really exciting. We use the cloud and the infrastructure because all of our stuff is built on Google tree infrastructure. But seeing this be made available for other companies and other businesses to build on, it's really amazing.

MARK: All right, well, thank you so much for taking some time out of your busy schedule to come and join us here at our booth. And if you're going to hang around, I hope you have a great Next. And thank you, again. Thank you so much.

SOWMYA: Thank you.

FRANCESC: So we go from an amazing woman tech to another amazing woman tech, this time not at Google. She's a SRE manager, so Site Reliability Engineering manager, at Dropbox.

MARK: Yeah, honestly, I actually really love when we talk about site reliability engineering. It's a fascinating topic.

FRANCESC: It is very cool, and especially, she has really interesting views because she's an SRE manager at Dropbox, where they use the same name as Google. So they're pretty similar, but, at the same time, not exactly the same. So she's coming to talk a little bit about what are all the sessions that she saw that were cool and what she's excited about talking about cloud and all the sessions that are coming.

MARK: Awesome. Well, let's go talk to her.

FRANCESC: So we are now joined by Tammy Butow, an amazing human being that works for Dropbox. How are you doing?

TAMMY: Great, thanks. Thanks for having me. I'm very excited to be here.

FRANCESC: Thank you for coming. We're very excited to have you. Why don't you tell us a little but about what you do at Dropbox?

TAMMY: Yeah, I'm a Site Reliability Engineering Manager at Dropbox, where I lead the databases team and also our magic pocket team, which is our block storage-- yeah, so very busy. I do two on-call shifts. But we're pretty good at Dropbox at doing a lot of automation and making sure that everything is up and running all the time-- yeah, a really great team of engineers. But you know it's challenging to do that.

FRANCESC: Cool. So it sounds like you know very well about SRE and stuff like that. You actually use the same name, which is interesting. Why don't you tell us a little bit the kind of things, the kind of sessions that you're interested about here at Cloud Next? What it's like for an SRE. What gets you excited here?

TAMMY: Yeah, so there's some really good sessions this morning about the history of SRE. So yeah, SRE started at Google with Brent Traynor. He was upstairs doing a talk, which was really cool. It's always good to get to hear him speak. He's amazing.

FRANCESC: Yeah, he's pretty good. (LAUGHING)

TAMMY: Yeah, and the reason that SRE was created at Dropbox was because Andrew Fong came from Google. He was at YouTube originally. And then he has been at Dropbox now for over four years. But, yeah, he took a lot of the ideas from when he was there.

And next what I'm really excited to see this afternoon is to learn more about how Google SRE and also the CRE, the Customer Reliability Engineers, are helping people use Google Cloud. It's pretty exciting to me because it is hard. Like, even this morning, I was actually experiencing a web site. It was very slow. I tweeted the company, like, your website is very slow.

[LAUGHTER]

And then they wrote back and said, do you want a job? I was like, no, I have a job. But I understand that it's very hard to do. It is really tough to make your website work well and work all the time. So, yeah, I'm excited about where the industry's heading and that there's more ways for people to be supported when they're trying to build their own company.

FRANCESC: Yeah, think that CRE is exactly about that. Like, growing an SRE team is not easy, as I'm sure you know.

TAMMY: No. Yes.

FRANCESC: So having the possibility of basically getting like SRE as a service, that is pretty cool, yeah.

TAMMY: Yeah, I think it makes sense.

MARK: We've had one of my teammates, Paul, who did a rotation with the internal SRE team on the podcast. And he talks a lot especially around like SLOs and SLAs, like basically how up does your thing have to be in terms of how much change you want to do? Can you talk about that as well, and how that worked in your org?

TAMMY: Yeah it's really well done at Dropbox. I mean, we've got a lot of ideas. You can also read the SRE book from Google.

FRANCESC: Oh, yeah, and it's free now.

TAMMY: Yeah, that book is awesome. And there's a lot of tips in there. And it's similar to what we do at Dropbox. But one of the things that I really loved when I first started at Dropbox-- I've been there for a year and a half-- is we actually send daily SLA email reports, which is actually super handy.

It, sounds so simple. But if you just get that in your inbox every day and you can see the history-- today, yesterday, last week, the last four weeks-- to actually keep track of your SLAs and where you're hitting-- and then it changes color based on if where maybe it could get bad or something like that-- so then we can be more proactive. That's quite handy. And then we also set up alerts to alert on SLA.

I think that's actually super important. A lot of people don't do that. They don't actually track where am I at for my SLA. Like, warning, you're getting close. You better actually do something. I think that's pretty good.

FRANCESC: Cool. So have you read the SRE book, then?

TAMMY: Yeah, it's awesome.

FRANCESC: OK. Is there anything that is substantially different from SRE at Google and SRE at Dropbox?

TAMMY: One of the big differences is just the number of people,

FRANCESC: (LAUGHING) Oh, yeah.

TAMMY: So there's, like, so many SREs at Google. Our team's quite small. We only have under 40 SREs at Dropbox. So we're pretty little. And also, we're not distributed around the world. We're more San Francisco and Dublin.

So, yeah, we're doing a lot. We have 600 million customers at Dropbox. So there's a lot of people to support. We have 500 petabytes of data-- more now maybe, perhaps.

FRANCESC: (LAUGHING) Not bad.

TAMMY: Yeah, so pretty exciting, what we do. But, yeah, we do have very small teams. But we take a lot of inspiration from what's happening at Google around automation. So you know we do a lot of self-healing. If something breaks, we don't have to manually do something.

It automatically heals itself. And so for us, it's more about looking after the automation and continuing to build new features and making it even better over time. So yeah, we just don't want to be doing, like, manual work, which you can have human error there anyway. So it's not a good idea.

MARK: So just out of curiosity, you've obviously got a lot of experience with this, if someone's at a company and they're thinking we should really start an SRE team, is the Google book the best place to start? Is there somewhere else? What's the best resources to get you started?

TAMMY: Yeah, I really like the book. I think is very good. You could also look up some of the videos that Ben's done in the past. Those are really great. And I've also done a video, too, that you can watch.

I spoke at LinuxCon in Australia. And I did a talk on site reliability engineering at Dropbox. And it goes through what we actually do there. And, yeah, quite a few people have watched that and learned a lot from it. And I think, for us, we're always just trying to improve. We're always getting better.

Things change so fast. There's like new hardware all the time. You're building new services. You're deprecating services. You're always trying to move forward. So I think look for the newest, most relevant content that comes out, and then look for some of the wise talks from the past that were just really great, yeah.

FRANCESC: Nice. Cool. So thank you so much for taking the time out of your, I'm sure, super busy schedule at Next and have a great continuation at Next, and see you at GopherCon for your amazing opening keynote.

TAMMY: Yeah, I can't wait. I'm so excited!

FRANCESC: Congratulations on that.

MARK: Oh, that sounds fantastic.

TAMMY: Thank you very much.

FRANCESC: Thank you.

MARK: Thank you.

TAMMY: Bye.

MARK: So I'm very happy that we have another Australian coming to grace our podcast. There can never, ever be enough Australians. She's fantastic.

FRANCESC: Sure. Yeah.

MARK: She's absolutely fantastic.

FRANCESC: I don't know about Australians, but definitely Tammy was an amazing person to have on the podcast.

MARK: (LAUGHING).

FRANCESC: So thanks again, Tammy, for coming and sharing your knowledge.

MARK: Yeah. For the final interview, though, we have Claire Bailey. This is really cool because it talks about our code labs. And it really kind of, also, explores, like, not only can you see all the videos at home, but there's also take-home activities you can do at home as well.

FRANCESC: I think that one of the favorite things for attendees here at Cloud Next is the fact that you can learn so much. You have all the people surrounding you. You have the meet-the-experts. You have all the talks. But you also have the code labs. Important thing-- you can also do those at home. So Claire is here to tell us everything about that.

MARK: Hot off the conference floor, we have Claire Bailey, the Global Code Labs Lead, who is running code labs right now at Cloud Next. Well, actually, not right now. Right now she's with us.

FRANCESC: (LAUGHING) Right now she's with us, but--

MARK: --but generally, yes. Claire, how are you doing?

CLAIRE: I'm great. Code Labs kicked off about an hour and a half ago. The tables are pretty full. Other than being dragged away to do this podcast, I'm having a good time.

[LAUGHTER]

FRANCESC: Well, you're welcome. So why don't you tell us a little bit about what it does entail to be the Global Code Labs Lead.

CLAIRE: Pretty much anything that touches code labs comes through me at some point. A lot of it is stuff like this, where there's on-the-ground events-- Next, I/O. We have a lot of smaller developer summits as well. And code labs are hands-on technical training exercises.

The way we run them are they're self-paced, and you just kind of show up. And we've got a computer. You can bring your own. And we've got step-by-step instructions on, kind of, anything you might want to learn. And you can run through it and learn something new. And we're there to help you.

MARK: So is this something just a Cloud Next, or can they do it on their own elsewhere? How does that work?

CLAIRE: They can definitely do it on their own elsewhere. We have them-- we have computers provided at Cloud Next to do them here. We have Googlers on hand to answer questions and get stuff. But they are also online.

So the code labs from Next can be found at google.qwiklabs.com. That's "qwiklabs" with a W-- Q-W-I-K-L-A-B-S dot com. (LAUGHING)

FRANCESC: We'll have a link on the show notes, as usual.

CLAIRE: Excellent. Yeah, google.qwiklabs.com, for all the code labs that are at this conference.

FRANCESC: That is awesome. Could you tell us a little bit more about what should people expect to learn from those code labs? Is it like all about specific topics, or what is your favorite one?

CLAIRE: Oh, I'm a fan of machine learning. So some of those and the big data ones are probably my favorites. They really run the range, though. Like, there's some very beginner ones. There's one that's just how to set up a virtual machine, right, which is like some pretty basic level entry level for cloud, all the way through to machine learning and complicated language-specific, like platform-specific-- running this language on this platform and deploying it to this type of server. They get pretty complex to give you an idea of how to do cloud operations.

FRANCESC: That is pretty awesome.

MARK: Yeah. So a lot of our listeners, obviously, I'm guessing, aren't going to be here, unfortunately, which is a shame. So if they're doing this at home, do they need to set up a free trial? How does that kind of thing work-- just to set expectations, really.

CLAIRE: They don't. As of this conference, this is the first time we've used this new infrastructure, this Qwiklabs infrastructure. It's a company we acquired a couple months ago. With the Qwiklabs setup, you don't have to enter your own account or your own credit card at any point. They generate accounts for you that last for between half an hour, an hour and a half, depending on how hard the code lab is.

FRANCESC: Nice.

CLAIRE: Yeah. And then you just run through it with that. So it really is a simple easy trial with zero commitment.

FRANCESC: Cool. So for the people that are actually here, are we going to have the code labs all day? Is it 24-hour service? How does that work?

[LAUGHTER]

CLAIRE: Luckily for me, they're not going 24 hours. They are going from just after the keynote every day to basically when the sessions end. So all three days, there'll be code labs ready for you to stop by and try out.

FRANCESC: Sounds awesome.

MARK: That's really, really cool. Awesome. So if you're here or you're elsewhere and you're really keen to basically get your hands on with the Google Cloud, check out the URL or come to the code labs at the event. Awesome.

Well, Claire, thank you so much for taking time out of your very busy schedule to come talk with us. We really appreciate it.

CLAIRE: Thank you for having me. It's been fun.

FRANCESC: That was an amazing conversation. And I'm actually very excited about being able myself to go through those code labs.

MARK: Yeah, I want to do them too!

FRANCESC: Yeah, because they're really cool. And we do not really have the time here at Cloud Next, because we're busy interviewing people.

MARK: But, no, we should make a mention, too, if you want to learn more and you're not here at Next, you can do the code labs yourself. But there are also extended events all around the world.

FRANCESC: Yeah, I think there are like 350. So there's-- I don't know if there's one per country or more than that. Like, I know that there's many countries with plenty of them. There was, like, I think, 80 of them in the United States.

So even if you are not able to travel physically here, thanks to the podcast, I hope you're having a little bit of an inside view. And you can also do all the code labs. You can go watch the keynote extended events. And the extended events are not necessarily at the same dates, which means that you should definitely check it out, because maybe it's next week or in a couple of weeks. And you still have the chance to join them.

MARK: Yeah. Just go check out-- it says Extended on the Cloud Next URL. You can go there, type in your city, see what events are happening in your hometown.

FRANCESC: That is great. Well, I think that this is enough for today. (LAUGHING)

MARK: Yes.

FRANCESC: This is a great, great day-- lots of really cool things. But there's so much more coming tomorrow.

MARK: Yeah, well, we'll see you all tomorrow.

FRANCESC: See you all tomorrow.
{{< /transcript >}}