+++
audioDuration = "00:39:15"
audioFile = "Google.Cloud.Platform.Podcast.Episode.107.mp3"
audioSize = 56743429
categories = ["Podcast"]
date = "2017-12-13"
description = "Francesc Campoy Flores rejoins the show along with Director of Google Cloud Developer Relations Greg Wilson to talk all about 2017 and Google Cloud with Mark and Melanie"
draft = false
episodeNumber = 107
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "A Year in Review with Francesc Campoy Flores and Greg Wilson"
#image="images/post/iotcore.gif"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/MAmxVDazUvj"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/7jjqgl/episode_107_a_year_in_review_with_francesc_campoy/"
+++

This week we get the band back together! [Francesc Campoy Flores](https://www.twitter.com/francesc) rejoins the show
along with Director of Google Cloud Developer Relations [Greg Wilson](https://twitter.com/gregsramblings) to talk all about
2017 and Google Cloud with [Mark](https://twitter.com/Neurotic) and [Melanie](https://twitter.com/nyghtowl)

<!--more-->

##### About Francesc Campoy Flores
[Francesc Campoy Flores](https://www.twitter.com/francesc) is the VP of Developer Relations at [source{d}](https://sourced.tech), 
He's also a Gopher, Catalan, LGBTQIA advocate, previous Google employee (and Podcast host), and creator of the [Just For Func](https://www.youtube.com/c/justforfunc/) YouTube series!

##### About Greg Wilson

[Greg Wilson](https://twitter.com/gregsramblings) is the Director of Google Cloud Developer Relations, overseeing
developer relations work across both G Suite and Google Cloud Platform.

##### Cool things of the week
- Jeff Dean’s talk at NIPS on ML for Systems and Systems for ML [sides](http://learningsys.org/nips17/assets/slides/dean-nips17.pdf)
- The Case for Learned Index Structures [paper](https://www.arxiv-vanity.com/papers/1712.01208v1/)
- KubeFlow [github](https://github.com/google/kubeflow) [hackernews](https://news.ycombinator.com/item?id=15873659)
- Manage Google Kubernetes Engine from Cloud Console dashboard, now generally available [blog](https://cloudplatform.googleblog.com/2017/12/Manage-Google-Kubernetes-Engine-from-Cloud-Console-dashboard-now-generally-available.html)

##### Interview

- Top 5 Downloaded Episode of 2017
 - [#88 Kubernetes 1.7 with Tim Hockin](https://www.gcppodcast.com/post/episode-88-kubernetes-1-7-with-tim-hockin/)
 - [#91 The Future of Media with Machine Learning with Amit Pande](https://www.gcppodcast.com/post/episode-91-the-future-of-media-with-machine-learning-with-amit-pande/)
 - [#93 What's AI with Melanie Warrick](https://www.gcppodcast.com/post/episode-93-whats-ai-with-melanie-warrick/)
 - [#75 Container Engine with Chen Goldberg](https://www.gcppodcast.com/post/episode-75-container-engine-with-chen-goldberg/)
 - [#100 Vint Cerf: past, present, and future of the internet](https://www.gcppodcast.com/post/episode-100-vint-cerf/) 
- Greg's Favourites
 - [#57 Pokémon GO with Edward Wu, Director of Software Engineering at Niantic](https://www.gcppodcast.com/post/episode-57-pokemon-go-with-edward-wu/)
 - [#68 The Home Depot with William Bonnell](https://www.gcppodcast.com/post/episode-68-the-home-depot-with-william-bonnell/)
 - [#86 Broad Institute and Platinum Customers with Lukas Karlsson and Mike Altarace](https://www.gcppodcast.com/post/episode-86-broad-institute-and-platinum-customers-with-lukas-karlsson-and-mike-altarace/)
- Francesc's Favourites
 - [#62 Cloud Spanner with Deepti Srivastava](https://www.gcppodcast.com/post/episode-62-cloud-spanner-with-deepti-srivastava/)
- Mark's Favourites
 - [The SRE Category on GCP Podcast](https://www.gcppodcast.com/categories/sre/)
- Melanie's Favourites
 - [#57 Pokémon GO with Edward Wu, Director of Software Engineering at Niantic](https://www.gcppodcast.com/post/episode-57-pokemon-go-with-edward-wu/)
- Favourite announcements, products and more at Google Cloud Platform
 - [Cloud Spanner](https://cloud.google.com/spanner/)
 - [Cloud Machine Learning Engine](https://cloud.google.com/ml-engine/)
 - [TensorFlow](https://www.tensorflow.org)
 - [GCE Virtual Machines](https://cloud.google.com/compute/), e.g. [Pre-emptible VMs](https://cloud.google.com/preemptible-vms/)
 - [Go 1.8 on App Engine](https://cloudplatform.googleblog.com/2017/10/announcing-Go-1-8-on-App-Engine-Standard-Environment.html)
 - [Cheaper GPUs](https://cloudplatform.googleblog.com/2017/11/new-lower-prices-for-GPUs-and-preemptible-Local-SSDs.html)
 - [Kubernetes](https://www.kubernetes.io)

##### Question of the week

 What were your personal highlights for 2017?

- Mark
 - Getting involved with [SIG API Machinery](https://github.com/kubernetes/community/tree/master/sig-api-machinery) with Kubernetes
- Melanie
 - Watching [Haben Girma](https://twitter.com/HabenGirma), the first Deafblind Graduate of Harvard Law School, speak about accessibility in tech.
 
##### Where can you find us next?

It's the end of the year! So we'll be taking a break, and returning in January 2018!

{{< transcript "MARK: Hi, and welcome to episode 107 of the weekly Google Cloud Platform podcast. I'm Mark Mandel, and I'm here with my colleague, Melanie Warrick. How are you doing this morning, Melanie?" >}}

MELANIE: Good morning, Mark. It's nice and early where I am. But where are you? 

MARK: How early is it where you are? 

MELANIE: It's uh-- what's it-- well, it's actually almost 7:00 AM. It just feels really early when it's still dark. 

MARK: That's pretty early. 

MELANIE: Where are you at today? 

MARK: I am currently in the Google Montreal office. It's almost 10:00 here, in the morning. So it's not as early for me as it is for you. 

MELANIE: Yeah. Exactly. I'm back in San Francisco. 

MARK: So, yeah, this week we have the band back together, so to speak. 

MELANIE: We did. We got the band back together just in time for the end of the year to do a wrap up of all the things. It was a really good interview, actually, to get Francesc back into the recording studio, and we also got our director, Greg Wilson, to join us as well, to give his insights. 

MARK: Yeah. And to follow up from that, this week, we're going to have a question of the week is, what have been your highlights for 2017? What have been your favorite things? 

MELANIE: Yes. We'll give a nice little highlight for our year went. And before all of that, of course, we need to jump into what are the cool things of the week. And these are the last cool things of the week that we'll have for the year, which we were just chatting about when we were pulling them together, because we have all the things we want to talk about. 

MARK: Cool. So I tell you what-- you just came back from NIPS and you have a bunch of stuff around machine learning. Why don't you get stuck into that? 

MELANIE: OK. I just wanted to highlight a few things in terms of the fact that there were a number of really great speakers, most of the content-- I've actually posted this on my Twitter account-- that most of the content was actually recorded and is online. And there's links for that, which we can also share on our blog. 

But there was a talk that was given by Jeff Dean, and his talk was titled, "machine Learning for Systems and Systems for Machine Learning." And part of it references some of the work that's been done and the success stories that they've had around the TPUs version 2, as well as how they're applying things, like reinforcement learning to help with device placement. 

And they recently released a paper that actually shows how they're using indexes, and, specifically, machine learn indexes that can replace things like B-trees and hash indexes and Bloom filters. I believe that may have been recorded and posted, and if we can find it, we will definitely share it. Otherwise, we'll definitely share the link for the paper. 

And one other thing I want to give a shout out to the fact that Fei-Fei Li, who's the chief scientist of cloud AI and ML spoke. And she gave some insights, in terms of some of her recent work, around machine learning as it applies to health. Also something that if we can locate any kind of slides from that, we'll definitely share it. 

MARK: Excellent. Continuing on the machine learning path, there's a new open-source project called KubeFlow. I can talk about the Kubernetes part. You can talk about the machine learning part. I think that probably works well. 

It's a project dedicated to making machine learning on Kubernetes easy, portable, and scalable, which I think is kind of cool. It's basically based on Kubernetes and does machine learning things. I don't know about the machine learning part. Do you know anything about it Melanie? 

MELANIE: I know that it helps make machine learning easier. That's pretty much what I know right now. But, people should definitely check that out. 

MARK: Yes, definitely check that out if you're looking for a good portable way to do Kubernetes and machine learning. 

MELANIE: And we have a link to the GitHub repo for KubeFlow, as well as we are going share a link for Y Combinator where there is some good content and sharing of information around that. 

MARK: Nice. Since we are on the Kubernetes train, I will bring up, as well, there's a new tool. 

MELANIE: We never get off the train, do we? 

MARK: I never get off the train. Someone was making fun of me on Twitter about it, the other day. 

MELANIE: Now and never. 

MARK: And it was pretty funny. About how much I like to talk about Kubernetes, because I do. 

MELANIE: Of course you do. 

MARK: If you're using Kubernetes on us, so GKE, we just released a new dashboard on cloud.Google.com on the Cloud Console that gives you better introspection of what's happening inside your cluster. It's actually fairly reminiscent, if you've ever used the dashboard UI that comes built with Kubernetes. 

But as we were talking about last week, you may necessarily want to turn that off for security reasons. But this still gives you a nice visualization access to see things, like what pods are running, how much CPU they're using, what services are available, things like that-- access to logs directly, all that kind of stuff. 

So if you haven't had a look at cloud.Google.com, and you've been running a GKE cluster, have another look. You might find the new features kind of cool. 

MELANIE: Great. Well, I think that covers it for what we wanted to share for cool things of the week. And I think it's time to go ahead and get started with what our interview-overview of the year looks like. 

MARK: Sounds good. Let's go do it. 

MELANIE: All right. So today, on today's podcast, I'm here to welcome Greg Wilson, who is our leader in charge. And I've got Mark Mandel, of course, who's my co-host, and Francesc Campoy Flores-- 

FRANCESC: Hello. 

MELANIE: --who is our ex-Googler, who has return from the dead of going off to another company. 

FRANCESC: Yeah. 

MELANIE: Just for today. 

FRANCESC: Holidays in Brazil and Mexico. So, yeah, yeah-- really hard life. 

MELANIE: Hard life, hard life. 

GREG: What's it feel like wearing a guest badge, today? 

FRANCESC: It is weird. It-- yeah. Yeah. But, you know, still access to food-- so good. 

GREG: Yeah. 

MELANIE: So on today's podcast, we want to basically do an overview of the year. We're going to go back and look back over time from the 2017, and see what was our favorites and what was-- well actually, we should talk about what maybe are some of the funny moments, too. But, yeah-- 

FRANCESC: Yeah. 

MELANIE: Mark, you should definitely lead this off with what are some of the top five downloads, because you guys have been here longer than I have. 

MARK: Oh, yeah. So first of all, thank you very much to Greg and Francesc for coming back. 

FRANCESC: Thank you. 

MARK: It's lovely to have you back. We have the new people. We have Melanie. We have Francesc-- the history. 

FRANCESC: I thought you were going to say, old people. I was like, dude-- 

MARK: No, that sounds-- 

[INTERPOSING VOICES] 

MARK: Well that's great. Actually, first of all, people who haven't met you, Greg, why don't you tell us a little bit about yourself and what you do here at Google, as well. You have a new title now, as well. 

GREG: That's right. So I'm Director Developer Relations for Cloud Platform. 

FRANCESC: Nice. 

MARK: What does that mean? 

GREG: What does that mean? I'm still figuring that out after 3 and 1/2 years. So developer advocacy, multiple developer programs, develop programs engineering-- All the things to make developers happy reports up through our org. So we-- 

MARK: We're the receptacle for [INTERPOSING VOICES] 

MELANIE: Are we happy? Is this successful? Apparently it's successful if you were promoted. 

GREG: So we do things like get the word out at events. This year, I think this team has done over 600 events, going out and meeting developers where they are and let them know what we're doing here. We also do a lot of content. We do a lot of driving better developer experience with the products. 

We not only advocate to the outside world on behalf of Google, we advocate to the product teams on behalf of the outside world, which actually, I think we all take that part of the job even more seriously. So we have folks that participate in open-source projects with Google, work with the product teams to improve the overall developer experience of the platform. 

MARK: What are you up to these days Francesc? 

FRANCESC: So you're Director and I'm VP-- 

GREG: That's right. 

MARK: Oooh! 

FRANCESC: And-- 

GREG: Double promo. 

FRANCESC: Yeah. But I'm the only person in Developer Relations here, so-- 

[LAUGHTER] 

GREG: You are your own boss. 

FRANCESC: Yeah. And also my own team. I left Google, as you all know, about a month ago. November 1st was my last day, and also my first day at the new company. And I'm working for a company called source{d}. And basically, what we're trying to do is apply machine learning to source code to build tools on top of that. 

To do that, there's a lot of infrastructure going on, and there's a lot of tooling that needs to exist. And we're working on [INAUDIBLE] those. But then also, we're working with researchers and people that are really, really good on machine learning, which I'm not, to build really interesting tools, like-- there's a demo I'm working on, which is like do not [INAUDIBLE] that tells you that the good you're writing actually looks a lot like something from this on the library. Use that function instead-- things like that, which are not really doable without machine learning. So it's really interesting. 

MELANIE: Nice. That's a good problem to be solving. 

FRANCESC: Yeah. It is very interesting. And the good thing is that it's also a platform, like Google Cloud platform. So my job is still kind of similar on the way. It's like building cool things to show the power of a platform, which means that you end up building cool things. So I've been having lots of fun. 

MELANIE: I'm glad you're having a good time. And how's it feel to be back? 

FRANCESC: It is really good. It is weirdly familiar. 

MELANIE: Does it feel like you ever left? 

FRANCESC: Yeah. I mean, I've been on every episode until now, too, right? 

GREG: Well that's kind of sad. 

MARK: People actually, now that I think about it-- listeners will not have missed you, because you haven't been gone. 

FRANCESC: Yeah. Maybe we should [INAUDIBLE] these. 

GREG: Are you still doing a lot with Go? Are you still close to Go? 

FRANCESC: Yes, I'm still doing Go. I'm still doing [INAUDIBLE] All of the infrastructure on the company is written in Go. And there's packages that they've open sourced that, that's actually how I discovered the company. Like GoGet, which is the most used get package created in go-- it's ran by them. 

GREG: Awesome. 

FRANCESC: So it's still a lot of Go going on, which is-- I'm happy about. 

MARK: Well since we have you here, again, Francesc and Greg, why don't we go back in time. 

MELANIE: Back in time. 

[MUSIC PLAYING] 

GREG: Do we put in sound effects right here? The harp? Where's our harp? 

MARK: We go back in time. (ECHO) Back in time. And talk a little bit about the inception of the podcast. It's been two years. We passed 100 episodes together, which was fantastic. Greg was there in the beginning. Why don't we-- let's hear it from Greg's perspective. I'm kind of curious, because-- 

FRANCESC: We know the story, but what does he know? 

MARK: Francesc, you and I, we sat down over coffee one day, and were like, we should do a podcast. And then we came to Greg and said, hey Greg, we think we might want to do a podcast. What do you reckon? 

GREG: Well, what's funny is I found some slides from an off-site that we did as a team, in 2015. And one of the slides in that was we need to find new ways to reach our audiences. And I gave examples, and the second example was podcasts. So, because of that, I'm taking full credit for the entire podcast. 

But anyway, the two of you came to me and proposed a podcast, which I was super excited about. But I distinctly remember having a huge amount of concern over your proposal to do it weekly. And I thought that was absolutely insane. 

FRANCESC: It was. 

GREG: And I tried to talk you out of it, I remember. I said, weekly is never going to work. You guys will do like 12 episodes, and that'll be fun, and then it'll turn into work, and then by episode 20 you're going to be out of ideas, and telling me you want to go monthly or quarterly. But I was absolutely wrong on that, I realized when you hit episode 50, and now episode 100, and whatever. 

It's really incredibly impressive how absolutely regular you've kept it, and kept it exciting and fun. So that's hats off to you guys. It's pretty awesome. 

MARK: I'm pretty excited also, I just want to say Melanie's got some pretty cool stuff lined up for next year. 

MELANIE: I'm excited about that too. I'm looking forward to it, especially the first episode. 

GREG: It's going to be awesome. I'm super excited with Melanie joining. When I first heard Melanie was getting involved with the podcast, Mark and Francesc were telling me a story of how, I guess, y'all were having lunch together, and just having regular Google work conversation around various technical things and talking about AI and you were so fascinated in Melanie's description of it and her passion for it-- said, hey, let's go up and record a podcast episode. 

And so a few weeks later, when Francesc made the decision he was going to go try a new adventure, it was like the obvious choice, because she was so good on it. 

[INTERPOSING VOICES] 

MELANIE: That's right. I was born to do this. 

MARK: That's right. 

GREG: I mean, it really just felt completely natural. Well, yeah, of course, she should be the co-host. 

FRANCESC: I think it was Mark that said, maybe, Melanie, and my reaction was like, oh yeah, of course, yeah absolutely. And when we told you, it was like oh yeah, of course, absolutely. 

GREG: It was like it was a no-brainer-- duh. 

MARK: Just so we're clear, there was no maybe there. I was definitely Melanie. Definitely. 

MELANIE: Of course you were. I know. We're going to really have a good time together. 

GREG: So I'm super excited about where that's headed. 

MELANIE: I'm super excited about where that's headed, as well. And Greg, is this your first time on the podcast? 

GREG: Yeah, I don't know how I was not able to get myself in the podcast, even though I stood outside the door and knocked and begged, but-- 

FRANCESC: Please? 

MELANIE: We had to get rid of Francesc so that you could come in the door. 

GREG: That's right. So now I know who was blocking me. 

MELANIE: Yeah. 

MARK: Yeah. 

GREG: So yeah, this is my first time, but I was excited to be part of it. I wanted to wait till there was a certain traffic level before I entered. 

MELANIE: Before you were-- you found it acceptable. And now you're like-- after Vint Cerf-- you're like, yeah, I think it's time for me to get on there. 

GREG: OK. It's good enough for Vint-- good enough for me. 

[LAUGHTER] 

MELANIE: Well with that said, why don't we go ahead and dive into the top five that we found that were very popular within the community. So actually, Mark? 

MARK: Yes. 

MELANIE: You guys want to jump into that? 

MARK: Sure. So number five, speaking of which-- 

GREG: Where's the drum roll button? 

[DRUMROLL] 

MARK: Number five its Vint Cerf. 

FRANCESC: That was an amazing episode. 

MARK: If you're going to listen to any episode, I feel, from the podcast, you should listen to that episode. 

FRANCESC: Yeah. I also have a recording of our faces without the audio-- 

MARK: Oh that's hilarious. 

FRANCESC: --during that Hangout. The conversation was amazing, but the subtext of the conversation was even better. At some point, Vint Cerf-- Mark asks a question, and Vint Cerf goes, that's a very good question. And you can see that Mark was incredibly happy. 

[LAUGHTER] 

It was highlight of his career getting, very good question, from Vint Cerf. 

[LAUGHTER] 

MARK: That was amazing. 

MELANIE: Your life has been perfect now. You have nothing else you need to achieve. 

MARK: Yeah. Vint Cerf thinks I ask good questions, so yeah, totally-- If you aren't familiar with Vint, he's one of the founders of the internet. Basically, the thing that allows us to do this. And still, my favorite response of all time from him is when asking him, hey, you know, you're building this brand new distributed network-- were you, at the time, did you think that you were going to change the world with whatever this thing was and how it was going to come about. And he was just like, oh yeah, totally. 

FRANCESC: Yeah. 

MARK: Yeah, absolutely. He was very aware of that. 

MELANIE: How did you guys get him? 

FRANCESC: I send him an email going like, hey, Vint Cerf, so we met a long time ago at a cafe at Google. Here's a selfie of the two of us. And so, I thought that we're doing the Google Cloud Platform Podcast-- without the internet that you invented Google would not exist, the cloud will not exist, and podcast would not exist, so it kind of makes sense that you're a guest for episode 100. What do you think? And he was like, OK. 

MELANIE: Nice. 

FRANCESC: Yeah. I was like-- 

MELANIE: Who knew how valuable a selfie would be? 

FRANCESC: Oh, yeah. 

MARK: Keep all selfies. 

FRANCESC: You should always take selfies. 

MELANIE: Keep all the selfies. So what did you like most about the episode, outside of the fact that you were both extremely excited and you have these great videos of you watching it? 

FRANCESC: I think that the most amazing thing was that we were asking questions about what we thought the future was, and he was mentioning this like-- like for instance, we were talking about like, well, have you thought about in the future we will need interplanetary communications and things like that. Will TCPAP be enough? And he was like, oh, no, no, it will not, because the ping is too big. But we already solved this with a JPL protocol that we invented while working with NASA. I'm like-- OK. 

The future for us, is something that he has already considered and mostly solved, which was amazing. Its the power of predicting and actually even adapting before anything happens, to the future is just amazing. 

MELANIE: All right. What's number four? 

MARK: Number four was "Container Engine," with Chen Goldberg. I've done a couple of episodes with her, and she's pretty amazing. 

FRANCESC: She's really, really, really good. And that episode was really good because it actually helped us understand not only the-- what is Container Engine, but what is the difference between Container Engine, Kubernetes, what is a community, and things like that. 

MARK: You know it's now Kubernetes engine, right? 

FRANCESC: Now it's Kubernetes engine that's true. Yes. Well, the title of the episode was Container Engine, and so-- 

MARK: It's true. 

FRANCESC: Which is good, because now GKE actually makes sense. 

MELANIE: That's what we were saying. 

FRANCESC: But yeah, it was a really good episode, especially because she was also talking about the community and things like that. It was, from a technical point of view, really interesting, but also, I mean, she's a really good speaker. 

MARK: Actually, it was-- one thing I really enjoyed about that interview was talking about Google's involvement in the open-source process of building this project that involves multiple parties, and how all that flows together. 

[INTERPOSING VOICES] 

FRANCESC: Really, really cool. 

MELANIE: And what's number three? 

FRANCESC: Number three is-- 

MARK: Oh, that's all right. We can skip that one. 

MELANIE: Yeah, we can skip that. 

FRANCESC: It was episode 93, "What's AI with Melanie Warrick." Yeah, I've not heard about her. Have you heard about her? 

MELANIE: I haven't heard about her. 

MARK: Melanie, what was that episode about? 

MELANIE: I don't know. I'm not really sure. I didn't listen to it. 

FRANCESC: That's actually the episode that Greg was mentioning where we were having lunch at Google and decided that this conversation is really interesting-- should be a pod cast episode. And we just made it happen the same day. 

MELANIE: We did. We were like, when can we schedule this? And I was like, now. Let's do this now. 

MARK: So what is the difference between AI and ML? 

MELANIE: There's no difference now. Listen to the podcast. Yeah. No, the difference between AI and ML, just for the record-- yes, ML is a set of algorithms that are used to help with AI. 

FRANCESC: What is the buzzword one? Is it ML, AI, or is there something else? Is it deep learning? 

MELANIE: Oh, the buzzwords are all the buzzwords-- deep learning, AI, ML, big data. All of it's-- there's a lot of buzzwords, and it's used to make people understand really quickly what they're trying to talk about without necessarily having to dive too deep. The reality is you need to dive a little deeper. 

FRANCESC: If you want more of this, episode number 93. 

MELANIE: I know-- exactly. Check out episode 93. All right. So number two? 

FRANCESC: Episode 91, "The Future of Media with Machine Learning, with Amite Pande. And this was really interesting because I really didn't know what we were going into. It was you, Mark, that proposed the episode. 

MARK: Yeah. Yeah, I saw Amit speak-- it was actually at the New York summit. He did a presentation on, basically, practical applications for machine learning for the broadcast industries, so film and television, in a variety of circumstances, especially including sports. So this episode was a really practical-- like, this is how we can use this thing now to help people out when they do broadcast television. So like, automatic highlights for sports games, cameras that follow interesting action that happen-- things like that. It was really-- it was really, really, really interesting. 

MELANIE: And they also, I believe, talked about generating content, too, which is an interesting-- applications, in general, is a constant question in this space. How are these algorithms actually being used in real-world problems? So it's valuable. 

All right, last but not least, number one? 

FRANCESC: Number one-- of course, episode 88 with Tim Hockin talking about Kubernetes 1.7. 

MARK: It's also-- I want to point out one thing here that I think is kind of interesting-- that Kubernetes shows up twice in our top five, essentially. 

FRANCESC: Kubernetes was basically 50% of our content. In every episode we've talked about Kubernetes in one way or the other-- 

MARK: It's probably my fault. 

FRANCESC: Questions of the week. Also, it's-- people use it. 

MARK: Yes. I think it does show the impact of that project, which is interesting. I think there's two factors at play here with this episode. One, Kubernetes are super cool and interesting. People love it. Two, everyone loves Tim Hockin. 

FRANCESC: Oh yes. It was really amazing how it went onto "Hacker News." Someone put it on "Hacker News," and it was the first time that I've seen people commenting on "Hacker News." I mean, commenting not really about the content, happens often. But talking actually about Tim, saying I just wanted to comment that I know Tim Hockin from school and he's an amazing guy. People like that just saying that he's an amazing guy in general. And he is, really. 

And the episode is amazing because he talks a little bit about what is coming up and everything, but also his involvement the project from the beginning, and stuff like that. His point of view is-- 

MARK: He was one of the founders. 

FRANCESC: --really, really important. 

MARK: So congratulations, Tim. Well done. 

MELANIE: Nice job. 

FRANCESC: You won the year. 

MELANIE: You won the year. 

GREG: Do we send him a new t-shirt or something? 

MARK: We probably should. 

FRANCESC: I think you said a new t-shirt-- I don't think we sent him a t-shirt. 

GREG: Sorry about that, 

FRANCESC: We should have sent him a t-shirt. 

MARK: Or at least some stickers. I've got a lot of stickers. 

MELANIE: I was going to say, do you guys ever send out t-shirts? I don't think I got a t-shirt. 

FRANCESC: There's a box downstairs, I think. 

MARK: I think it's empty. I think we finished it all. 

FRANCESC: Oh. 

MELANIE: Well, all right. Now that we've talked about the popular ones based on downloads, what are some of the ones you enjoyed the most in terms of this year? Greg? 

GREG: I always enjoy the ones that bring real customers into reaching outside of Google. The customers-- so at Niantic-- that episode, I thought, was fantastic. Plus, I had a lot of interest in how they were using our platform and how you scale something of that magnitude-- Home Depot, Broad Institute, all those were fascinating to me. 

MELANIE: Real world applications are crucial. 

GREG: One thing that's always fun about being part of a software platform is you think you imagined everything that people can do with it, and then you find someone outside that looks at it completely differently, and they show you new ways to use your platform. And I always loved that. 

MELANIE: Yeah. And I agree, especially with that podcast that you guys did at beginning of the year covering Pokemon GO, and just hearing some of the numbers, in terms of what they'd achieved so far. And in terms of-- at the time that people had walked about 8.7 billion kilometers, and that was-- what was it? You could walk 200 times around the Earth is the equivalent? 

FRANCESC: Yeah. For me, the coolest part of that episode was when Edward Wu was talking about the impact that Pokemon GO had in the world, and specifically on his family. 

MARK: Yes. 

FRANCESC: And he was talking about how his dad had, if I'm not mistaken, it was his diabetes. So he had to take some drugs and walk around and everything. And he didn't really want to walk around that much. And since Pokemon GO, he has walking so much, that he was actually taking less drugs. 

MELANIE: Nice. 

FRANCESC: And that kind of impact is-- thinking that your work in Google Cloud Platform enables Pokemon GO to help someone with their diabetes. I'm very happy about that. 

MARK: One of my favorite stories is that story. 

MELANIE: Nice. What about you guys? What are some of your favorites? 

FRANCESC: For me, I'm going to go with something completely selfish. We've launched many, many products during the year, and it is hard to keep up. So when we had product managers coming and explaining what their product was, it is really useful for us and for our audience, but specifically for me, because then I can tell people about it. 

And one of my favorite episodes on this was the one on Cloud Spanner. To start with, because we had the PM, Deepti Srivastava, and she did an amazing job. Also, especially, she was about to have a baby, which was amazing. And we're like, really, if you don't want-- and she's like, yeah, I'm going to make it. OK. Perfect. 

So she did an amazing job. And also, she was able to tie it back to, well, Spanner was an internal thing at Google, and how it went from a project to something like Spanner as a service, internally. And then, how we make that into something public on Google Cloud Spanner. And that perspective of the project that allows you to see not only the features, but why it got to be the way it is, is something that only really product managers or engineers that have been working in the project for a long time can give. So that was an amazing episode for me. 

MELANIE: Yeah. I thought that episode was pretty great, too. And she's so clear in the way she explains it, especially when she covers things like the CAP theorem and how that's related to Spanner. It was great. 

FRANCESC: Yeah. That was really, really good. 

MELANIE: Mark what about you? 

MARK: Cool. So I'll take a different tack, as well. So we technically started this back in 2016, but we did three or four episodes on SRE and SRE culture, here at Google and outside. So we had Paul Newson back again, our SRE advocate. He came back to talk about SRE after he'd finished his rotation. But then, we also went to CRE, so the Customer Reliability Engineering, which is the more public facing, or the customer facing side, of the SRE culture that we have here at Google. 

So we had Luke Stern on who the director of customer reliability engineering, to talk about the CRE platform. We had William Bonnell come from Home Depot, who is the customer side. Basically, they are a company that uses our CRE and their experience. We got both sides of that. 

I personally, found it really interesting to learn more about how we do site reliability engineering. What does that actually mean for our products when we start talking about service level objectives and service level agreements? 

And from a customer perspective, if I'm building a product, I need to think about how much uptime do I have to have for this thing, and does it correlate with the uptime that I'm getting from the products that I'm using, and how do those things interrelate? How do I deal with failure knowing that failure is just something that is always going to happen? And how do I deal with that, and postmortems, and all the cool stuff that I think comes along with that. I found that really interesting-- like almost philosophical, technical discussion. 

MELANIE: Nice. Any honorable mentions? 

MARK: Well Melanie, what's your favorite? You're-- 

GREG: Yeah. 

MELANIE: I talked about the Pokemon Go. That was one of mine. 

FRANCESC: Oh, interesting. 

MELANIE: Yeah. That was definitely-- 

FRANCESC: I'm going to go with an honorable mention to Paul [? Newson, ?] because we have a category on him, so we should. 

[LAUGHTER] 

He's the only person that has a category. 

MARK: He's been on three or four times? Three times? Four times? 

FRANCESC: I think-- I don't know if it's three or four times, but there's a category-- Paul Newson on the podcast. 

MELANIE: We got to make some coats, like they do with SNL, when you've been on it for eight times, or something like that. 

GREG: Yeah, a blazer. 

MELANIE: Like the Steve Martin club, or something. So one question I have for the two of you-- I'm going to throw out there. We didn't really plan on this one, but what's one of your favorite episodes doing together? Like what's one of those good memories back in the day or funny moments or funny experiences when you were doing these podcasts? 

MARK: The messages we were sending each other when we were interviewing Vint Cerf were hilarious. 

FRANCESC: That was pretty amazing, especially because I was staying up late for this interview. I was in Paris after doing Cloud Next Paris, so I was destroyed-- Cloud Summit parties-- I was destroyed. He was waking up really early because he was in Australia. 

MARK: It was like 6:00 AM. 

FRANCESC: And still we were able to keep the energy, and just sincerely have a great time. And that's the kind of energy that I'm missing now. But there's also from previous years when we interviewed John Wilkes. 

MARK: Oh yes. 

FRANCESC: That was a great interview. So John Wilkes-- he's one of the guys that wrote the paper on Borg, which is the system that we use internally. It's kind of like Kubernetes, the internal Google Kubernetes. That interview was amazing, partly because Mark was incredibly excited. And it was kind like taking Mark to Disneyland. 

MARK: Yeah. 

FRANCESC: It's was very similar to that. It was really, really good. Yeah. 

MELANIE: Do you remember what you were thinking when you first started, like your very first episode, and did you have any sense of where you were going to take this, or that this was going to really hang in there? How did-- do you remember any of that? 

MARK: We thought this was going to be amazing. We were very sure about that. 

MELANIE: You knew it? 

MARK: Absolutely. 

[LAUGHTER] 

Sorry, I was channeling my internal Vint Cerf, is what I was doing. 

FRANCESC: Yes, absolutely. It was really interesting, because it really felt like a personal project more than-- it was really Mark and I-- we're going to make this happen. And we started from scratch. We basically just like, the OK from Greg, but that was pretty much it. We didn't have the OK from marketing. We didn't have the OK from anyone else. 

GREG: We forgot to ask. 

FRANCESC: We forgot to ask. We just made it happen. 

GREG: Let's just do it. 

FRANCESC: And then, at some point, people were like, wait, you know you need to go through processes, right? And we're like, oh, yeah. Oh, yeah. Sure. So from very early on, it felt like a very, very personal thing that we were both really into make happening. But at the same time, I was slightly concerned about how are we going to make this happen every single week. And by the end, I really feel like we ended up like-- it just happens. 

GREG: Well, the one thing I want to bring up, that a lot of people may not know, this is not your full-time job. All three of you are very full-time developer advocates, out on the road, creating content, doing all the things. And you happen to do a podcast, that we could easily say is a full-time job, that you all somehow do it-- I don't know how you make it happen, to be honest. 

MARK: I don't think we should tell Greg. I don't think-- 

GREG: I don't know how you do it. 

MARK: No. We won't tell you the secret sauce. It's fine. 

GREG: OK. That's fine. 

FRANCESC: I think that one of the secret sauces is we have-- now we have editors and that takes a lot of time off our hands, which is very nice. 

GREG: Yeah. 

MARK: Actually, that's an interesting point, you go back to the beginning-- we started this. We did everything. We did the editing. We wrote the site. We did all that stuff, all ourselves. And what's been great is working here and with the team-- Greg and-- As it's grown in it's success, and it's done really well, more and more people have come on board to help us grow it further. So the support has been excellent. I think that's probably been the biggest indicator. 

Actually, funny story-- You were talking about how when you were like, oh, maybe don't do it weekly. Like that's a concern and stuff. And in the beginning, we were like, let's try this out and see how it goes and that kind of stuff. And so, at one point, I remember-- do you remember when you and I, Francesc, we said, oh, maybe we'll take August off. We'll just take some time off. Greg will be fine with that. It will be fine. 

FRANCESC: That was fun. 

MARK: I will never forget the look on your face. 

GREG: Yeah A tear rolled down my cheek. 

MARK: I was like, hey Greg, do you mind if we just took a month off? We were probably six months to a year into the podcast, something like that, and I was like, do you mind if we just took a month off, and just had some time off? And the color just drained from your face. And you're like, so is there any way you could not do that. That would be great, thanks. 

GREG: I used words like, momentum. But I really appreciate you guys stuck in there. 

FRANCESC: That was when we realized that all of sudden it was not our personal project anymore. People depended on this to happen. And it was like, oh, oh. Now we need to make it happen. 

GREG: Well you get addicted to seeing those charts go up and to the right, and not to share too many stats, but I think it's super impressive. I think total downloads is approaching a million, at this point. And that's going to be-- we might have to have you back for that milestone. 

FRANCESC: I'm totally happy with that. 

MELANIE: Any time for a free lunch, right? 

FRANCESC: Exactly. 

MARK: Exactly. 

FRANCESC: A side note-- 

MELANIE: Yeah? 

FRANCESC: It is Saturday morning, and I didn't have neither a free breakfast nor a free lunch. I'm just saying. I'm just saying. 

GREG: There's still time. 

MELANIE: We're slave drivers. That's how it works. 

MARK: So, normally we also do cool things of the week on the podcast. I think this is probably a wonderful opportunity to just take a retrospective on GCP, and talk about what have been your favorite announcements or new products or just things we've been up to, here at GCP. Greg, I'll put you on the spot. Go on. 

GREG: Ugh-- 

MARK: Maybe even one or two things. What have been your favorites? 

GREG: I've been here 3 and 1/2 years-- I don't know. There's so many launches that have happened. Spanner's one I'm especially excited about. I have a pretty extensive background in databases and I've lived in the world of sharded MySQL and trying to do things like that. And Spanner is an amazing easier path for those type of worlds. 

All of the EML stuff is super exciting to me. I didn't have a lot of knowledge in it. I love that we have the story from TensorFlow, the very vibrant open-source community, to the EMLAPIs with pretrained models, the ML engine to go do your own. I think there's a ton of potential there, and I'm very excited about it. 

Even some of the things that are sometimes not the shiny objects, but things that we're doing with virtual machines continues to excite me. Preemptable VMs are amazing. You can get an incredible amount of computing power at a very low price, as long as you account for the preemptability of it, which is not that hard. Start times-- all that. I don't know. I continue to be excited about all of it. 

MARK: Yeah. [INAUDIBLE] Francesc? 

FRANCESC: I'm going to go with Go 1.8 on App Engine, just because now that I don't work at Google, I can say, it took so long that finally when it happened, I was like, yes, finally. I know why it took so long, and it totally makes sense. There was a lot of engineering effort going behind. So in the future, it will be much easier to go-- well, go on the [INAUDIBLE] go on the [INAUDIBLE]. But it took long time. And I feel like that was a moment where it was like, OK, yes, finally I'm happy. 

And the whole Go community all of the time was like, oh, so Google actually cares about our pension for real. So I was very, very happy. But being able to say it publicly-- 

MARK: What's been your favorite Melanie? 

MELANIE: Well, more recently the fact that the GPUs are cheaper. That was definitely a nice announcement to see. For the research community, in particular, GPUs are extremely popular and that's a big deal. 

MARK: Yeah. I don't think anyone's going to be surprised by my answer. It's basically, the continual improvement and the community-- and basically, everything that's happening around Kubernetes. For a project that's been around two-three years, this year has seen a huge skyrocket in the amount of involvement from outside sources, the amount of investment Google's put in, the new features that have come out. That's just very exciting. And this year I've started to get way more involved in the project too. More out of necessity, than anything else. 

GREG: I mean, just the overall health of that community and the tone of it, it's just a fun project to be part of. 

MARK: Yes. It's a super-- like, I just-- oh my god. Yeah. 

MELANIE: Well, I think we're getting close to time. I know we want to usually wrap up with giving everybody an opportunity to do a little plugging, so Francesc, anything you want to share before we close you out? 

FRANCESC: I keep on doing "Just For Func." So if you want to keep on listening my voice regularly, I keep on doing "Just for Func." I just recently created a patron, which is a new experience for me. And people are now giving me money. 

MELANIE: Hey. 

MARK: Nice. 

FRANCESC: I know. It's weird. Other than that, if you're really curious about what I'm doing, just find me on Twitter and I've been tweeting about-- on "Medium," too-- what I'm going to be doing in the future and stuff. And if you're curious about machine learning and source code, read and come talk to me, because I'm interested in talking to you. 

GREG: What's your Twitter handle? 

FRANCESC: Francesc-- F-R-A-N-C-E-S-C. There you go. 

MELANIE: Greg, you got anything you want to plug? 

GREG: Just this team-- super proud of this team. It's fun to be part of. Appreciate you all inviting me to be part of this today, even though I had to set an alarm for a Saturday morning, which felt very wrong. But it was well worth it. This was a lot of fun. Do I get to come on other ones, or do I have to wait two more years? 

MELANIE: You have to wait two more years. We've got a wait-list. We got a bouncer at the door. 

GREG: I understand. I understand. 

FRANCESC: Not with those shoes. 

[LAUGHTER] 

I actually want to add the fact that on all of the episodes that we had, there was a lot of the episodes that were colleagues from our team, and that was really amazing. It really felt good to have every single developer advocate from the team, or almost-- 

MELANIE: Almost. 

MARK: Almost. 

FRANCESC: Almost all of them. 

GREG: We've been adding a lot lately. 

MARK: It's been hard to keep up. 

GREG: There's been quite a few, for sure. 

MELANIE: We got to get a couple more in. Mark, what about you? 

MARK: I have nothing to plug. 

MELANIE: Nothing? 

MARK: Everything's been great. I'm just-- actually, you know what? You know what I have to plug? Melanie, thank you so much for joining me on the podcast. 

GREG: Yes, absolutely. 

MARK: Francesc, I'm definitely going to miss you. And I do miss you. But Melanie, it's a delight and a pleasure to have you on with me now. So I'm super excited to see what 2018 has in store for us. 

MELANIE: Me too. I'm definitely excited about what we've got coming up. There's a lot of content that I want us to cover. And we will definitely cover GCP, but we'll also push in to some other things that are around machine learning. 

FRANCESC: I know some things that are coming, and I'm very, very excited, too. 

MELANIE: Me too. All right, well, thanks, guys. I know it was an early morning, but now I think it's time for us to wrap up and get some food. 

MARK: Yes. 

GREG: Awesome. 

MARK: Cool. 

GREG: I brought the credit card. 

MELANIE: Awesome. 

GREG: Thank you all. 

MARK: And that's it. That's our wrap up for the year. I was-- it was fun to do that. And we had to do that on a Saturday morning because of all the conflicts that were going on with everybody's schedule. 

MARK: Yeah, it was a really good chat. And a good chance to get together the old band and reminisce about what's been happening in 2017. 

MELANIE: Completely agree. All right, so question of the week-- Mark, what's one of your highlights of 2017? 

MARK: So many good moments-- Melanie joining me on the podcast, clearly, that is a highlight. While, I'll definitely miss Francesc, it's wonderful to have you on board now. Another highlight for me, though, I want to mention, is that I started actively getting involved with the Kubernetes ecosystem. That, for me, was a particular highlight. I've got a pull request. It's been merged into Kubernetes. 

It happened sort of late this year, so I had to do some more work in there. I've been talking about Kubernetes for a long time, but I wanted to help get the experience better around CKPI machineries, the special interest group, basically around extending Kubernetes. And so, I have some PRs and some friction logs that I've submitted to that for, basically, just like documentation, getting started experiences, how do I get the developer experience to be better. 

And it's been a really lovely way to get involved in the community. My PRs right now are not necessarily code, it's like read-mes and putting extra docs on things in the Go code. Really light touch sort of stuff, but it definitely seems to be making a difference, which is lovely. So really getting involved with that project and getting started on it. 

MELANIE: Good. 

MARK: Yeah. It's been-- open source, man. It's so cool. 

MELANIE: Open source is really good. I'm a big fan. 

MARK: What about you? What fun stuff do you think has been particularly special for you in 2017? 

MELANIE: In terms of have 2017, for me, definitely a highlight is the fact that I started with Google. And the other highlight is the fact that I'm working with you on the podcast, although I know we've talked about that so many times. I'm feeling like maybe we are forcing ourselves into being-- that, that's a highlight, and this is a good thing. Maybe this is reverse psychology? No. It's a good thing. It's a good thing. 

MARK: As long as we keep saying, then it must be true. 

MELANIE: We'll just keep saying it, and eventually we'll feel that way. No, it's good. And I'd say the other highlight was end of last week at NIPS at one of the workshops I was in. The best speaker for me was having Haben Girma-- I hope I'm saying her name right. She is the first deaf blind graduate of Harvard Law School. And she is out there fighting for disability rights. 

And she gave the most eloquent speech on thinking about accessibility in tech. And one of the things in particular that she really wanted to stress was when you were thinking about designing technology, think about it from this inclusion standpoint. Don't think about having different tech for different types of people-- one tool for everybody. 

And I really appreciated her sharing her perspective and getting that point across. So if you haven't heard of her, I would highly recommend looking her up, and looking at talks that she's given. And that is my highlight for the 2017. 

MARK: Well Melanie, thank you again for joining me on the podcast today, and for the end part of 2017. I'm looking forward to what 2018 is going to bring for both of us. 

MELANIE: Yeah, we've already got a lot of ideas of things we want to talk about in the new year, which I'm really looking forward to. But before we get to that, of course, I want to wish everybody a good holiday. 

MARK: Yes. Have a good break. Hope everyone gets a nice rest, eats lots of food. 

MELANIE: We'll be back after the new year, for sure. We'll be back, I think, within the first week or two. But have a good holiday for you, Mark. I hope you have a good time with the family. 

MARK: Thank you. And thanks to all our listeners for enjoying our podcast in 2017 and listening to it. We love having you listen. And send us comments and e-mails. It's always appreciative when we run into you in places and also just to hear from you as well. 

MELANIE: All right. That's all we got. We'll hear and talk to everybody in 2018. 

MARK: See you all next year. 
{{< /transcript >}}
