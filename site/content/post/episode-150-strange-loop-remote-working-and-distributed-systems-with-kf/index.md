+++
audioDuration = "00:36:39"
audioFile = "Google.Cloud.Platform.Podcast.Episode.150.mp3"
audioSize = 53173201
categories = ["Remote Working", "Strange Loop", "Distributed Systems"]
date = "2018-10-10"
description = "Melanie and Mark celebrate their 150th episode this week with a high-energy interview of mutual friend, KF, at Strange Loop."
draft = false
episodeNumber = 150
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Strange Loop, Remote Working, & Distributed Systems with KF"
image="/post/episode-150-strange-loop-remote-working-and-distributed-systems-with-kf/images/hero/hero-EP-150.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/DiFTU1ombhT"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/9n0xzq/episode_150_strange_loop_remote_working/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Melanie](https://twitter.com/nyghtowl) and [Mark](https://twitter.com/Neurotic) celebrate their 150th episode this week with a high-energy interview of mutual friend, [KF](https://twitter.com/kf), at [Strange Loop](https://twitter.com/strangeloop_stl). KF gives her perspective on Strange Loop, working remotely, and distributed systems. She compliments Strange Loop for the diversity it has achieved as the conference has grown. She laments the lack of introductory material for distributed systems learners, saying it's not as complicated as everyone thinks but needs more educational material for beginners! In general, she believes everyone could benefit from some code study, especially if you can find a good mentor. KF also gives us some great tips for working remotely and staying effective and social.

<!--more-->

##### Katherine Fellows

[KF](https://twitter.com/kf) is a senior engineer focusing on backend, infrastructure, and data engineering. She has worked remotely for companies at all stages of growth in San Francisco, New York City, Portland, and Philadelphia. Most recently, she’s been a Senior Software Engineer at Turbine Labs, developing tools that leverage a service mesh to make collaboration more effective for engineering teams. KF currently lives with her cat in Portland, OR.


##### Cool things of the week

* Introducing PyTorch across Google Cloud [blog](https://cloud.google.com/blog/products/ai-machine-learning/introducing-pytorch-across-google-cloud)
* Is that a device driver, golf driver, or taxi driver? Building custom translation models with AutoML Translate [blog](https://cloud.google.com/blog/products/ai-machine-learning/is-that-a-device-driver-golf-driver-or-taxi-driver-building-custom-translation-models-with-automl-translate)
* A developer onramp to Kubernetes with GKE [blog](https://cloud.google.com/blog/products/containers-kubernetes/a-developer-onramp-to-kubernetes-with-gke)
* Network controls in GCP vs. on-premises: Not so different after all [blog](https://cloud.google.com/blog/products/networking/network-controls-in-gcp-vs-on-premises-not-so-different-after-all)

##### Interview

* Strange Loop [site](https://www.thestrangeloop.com/index.html)
* Kubernetes [site](https://kubernetes.io)
* Docker [site](https://www.docker.com)
* SRE [site](https://landing.google.com/sre/)
* GCP Podcast Episode 102: Smart Parking and IoT Core with Brian Granatir [podcast](https://www.gcppodcast.com/post/episode-102-smart-parking-and-iot-core-with-brian-granatir/)

##### Question of the week

How do I encrypt and decrypt data with Cloud KMS? 
[Symmetric](https://cloud.google.com/kms/docs/encrypt-decrypt) and [Asymmetric](https://cloud.google.com/kms/docs/encrypt-decrypt-rsa)

##### Where can you find us next?

Mark will definitely be at [Kubecon](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2018/) in December.
Mark streams on Twitch [streaming](https://www.twitch.tv/markmandel).

Melanie will be at [CAMLIS](https://www.camlis.org).

##### Get in touch!

* [Website](https://www.gcppodcast.com)
* [Email us!](mailto:hello@gcppodcast.com)
* [Ask us a question](https://docs.google.com/forms/d/e/1FAIpQLSfqHifj2vakWyY9KD0AIRCMf8LPo4a9925Ic5VzGEzFlM9YGw/viewform)
* [Reddit](https://www.reddit.com/r/gcppodcast/)
* [Google Plus](https://plus.google.com/+Gcppodcast)
* [Twitter](https://twitter.com/gcppodcast)

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 150 of the weekly Google Cloud Platform podcast. I'm Mark Mandel. And I'm here, as always, with my colleague Melanie. How you doing, Melanie?" >}}

MELANIE: Hi, Mark. I'm good. How are you? 

MARK: I'm very well. 

MELANIE: What episode-- 

MARK: It's good to see you again. 

MELANIE: --is this? 

MARK: This is 150. 

MELANIE: 150-- I know. It's amazing, right? 

[FIRECRACKER LAUNCHING] 

[FIRECRACKER EXPLODING] 

MARK: I know. I was actually trying to work out when you first came on the podcast, and I couldn't work it out. 

MELANIE: I started helping you at the beginning of November. So we're almost at a year. 

MARK: We're almost at a year. That's pretty good. 

MELANIE: Yeah. 

MARK: That's weird, you've put up with me for a year. 

MELANIE: I know. It's kind of amazing. 

MARK: Yeah. 

MELANIE: And it's been almost three years since you started the podcast. 

MARK: It's true. Your first episode you came on was 93-- "What's AI with Melanie Warrick." 

MELANIE: True. You all did interview me. But I actually started helping you in November when Francesc took off. Anyway, so Mark, what do we have for this week? 

MARK: So we have some cool stuff for this week. We have a very good mutual friend of ours, KF, who has a long history of working in the software engineering industry, doing distributed systems, and kind of all the things, I feel like, and is the reason we know each other in the first place as well. 

MELANIE: Exactly, she's definitely the reason we know each other. And it's an interview that I've been wanting us to do for a while now. So I'm really glad we finally got a chance to talk to her. And we were able to do that, actually, at a conference where we did meet also, which is Strange Loop, a great conference that's out of St. Louis. So we'll get into that in the interview. But yeah, I'm glad we finally got a chance to get her on here. 

MARK: Yeah, exactly. And so after we talk to her, we will have our question of the week, as we do always, which is, how do I encrypt and decrypt data with Cloud Key Management Services, which is something I've not looked at before. But it's actually kind of cool. 

MELANIE: Definitely. And as we always do, we're going to start out with cool things of the week. And for this week, we've got a lot of support and integration going on with PyTorch, which is a platform that's used for building out neural nets, similar to TensorFlow. It's just a different platform. And so PyTorch, we now have integrated-- so there's actually, on Google Cloud Platform, deep learning VM images that you can implement. It's also been integrated already in Kubeflow. But there's additional support, specifically because PyTorch has also launched 1.0. 

So you can use that on GSP, you can use it with Kubeflow, you can use it, actually, also with TensorBoard. And there's work in progress. They're piloting some stuff around the cloud TPUs and using PyTorch. So we'll post the article for that, and you can check it out. 

MARK: Nice. Since we're talking about Kubeflow and Kubernetes, we'll want to mention a wonderful little article called "A developer onramp to Kubernetes with GKE." I thought this was really nice in that it's a set of tools specifically for making it easier, more affordable to run small Kubernetes clusters, basically up to four nodes, or less than four nodes, if you want. So if you're trying to set up a small developer environment, we actually have some documentation and a developer template set up, as well as a new open-source utility called kubehost to get around some of the cost things that happen with Kubernetes. It can be a little bit more expensive if you want to run a big cluster. So this is just some nice tooling to get you started in a nice, low-cost way. 

MELANIE: And another cool thing of the week we want to mention is "Network controls in GCP versus on-premises." This is a blog post that our friend Grace has posted in-- 

MARK: Oh, it's Grace. 

MELANIE: --conjunction with Jens Kuelhers, which I'm probably botching the name. But this article, in particular, is sort of walking you through the fact that network controls in GCP are not that different, necessarily, from on-premises. So you wouldn't have to do a significant amount of additional understanding, I guess, or work, to understand the two. And they talk through subnets, and routes, and firewalls, and VPN. 

MARK: Yeah, and last, definitely not least, I feel like every time we turn around, there's a new article by our teammate Sara Robinson. I don't know if that's the way you feel. 

MELANIE: I do too. She's definitely producing a lot of good content on the AutoML. 

MARK: Yeah, it's really great, absolutely. So she has another great article talking about AutoML. But in this case, it's talking about AutoML translate, which is really kind of interesting. It talks about how and why you might need AutoML-power Translate capabilities. 

So the example that they use is like, for example, using the word "driver." If you're playing golf, "driver" means one thing, but if you need a taxi, "driver" means something else. But if you're in a software context, "driver" means yet another thing. And so you might need something like AutoML to be able to do translations that are domain-specific. 

MELANIE: Yes, and she steps you through an example that she spelt out specifically with AutoML Translate and also using something known as Welocalize, which is-- it's one of the largest localization providers in the US with a mission to help the customers localize content for global audiences. So you can check out her article and see how to use Google AutoML Translate. 

MARK: Awesome. Well, why don't we go have a chat with KF? 

MELANIE: Yes, we should definitely go talk with KF. 

MARK: It'll be fun. 

MELANIE: I'm very happy. We have with us, today, KF, who is a good friend of both of ours. And this is the reason why Mark and I actually know each other. 

MARK: Yes. 

MELANIE: So KF, thank you very much for coming on the podcast today. 

KF: Sure, hi. 

MELANIE: Hi. Hi. 

MARK: Hey. 

MELANIE: So KF, tell us a little bit about who you are. 

MARK: Yeah, what do you do? 

MELANIE: Yes, and why do we know you? 

KF: I do computers, vaguely. 

MARK: Excellent. 

KF: I do some combination of back end, and data, and infrastructure things, primarily at startups. 

MELANIE: And data science things. 

KF: I would not describe myself as a data scientist. 

MELANIE: That's fair. 

KF: I would describe myself as an engineer with a math degree. 

MARK: Nice. 

MELANIE: We were noting, before we start recording, you did hold the title, at one point, of data scientist. 

KF: I'm not sure that startup titles count. [LAUGHING] 

MELANIE: This Is a good way to get started. 

KF: [LAUGHING] 

MELANIE: So we're recording this at Strange Loop. Strange Loop is this conference. It's actually where I met Mark-- 

MARK: Yep. 

MELANIE: --because of KF. And I met KF because we both went through the same coding bootcamp-- not together, but we met because of it, which was really great. 

MARK: Oh, you went through at different times. I did not know that. 

MELANIE: Yeah. But anyway, so KF, how is the conference going for you? 

KF: It's good. It is mostly-- this is my sixth year coming. So every time I come back, it's like, fewer and fewer talks I go to the conference and more just walking around, attempting to go to a talk as people stop me on the way. 

MELANIE: And actually, what is Strange Loop. 

KF: I don't really know. I think when I started coming, it was mostly because there were talks on functional programming. And that is not necessarily the talks I go to now at all. 

MARK: I feel like it's like this weird mix of bleeding-edge-ish, computer science, wacky interesting tech stuff, philosophy, diversity, inclusion, social, political issues mushed into one big thing that seems like it's cool and interesting. 

MELANIE: Yeah, and it's been going on for 10 years. Alex, who's the original person who drove and developed all this, he's doing a little retrospective back on when it started. I think it was like 300 people at the first one. And now it's around 2,200 people for this one, yeah, based in St. Louis. So you don't know, but you love it. And you've got a good network here. What were some of the highlights from today and yesterday so far for you? 

KF: I spent most of the past day and a half going to talks about tech related to social good, which is not something that they had talks on whenever I first started coming. It was more in recent years, given the political atmosphere, that they started being introduced. So Bridget, who's one of the other organizers who I know from doing Clojure stuff, she put together a pre-conference day that was the whole day yesterday that was on people who work on tools related to nonprofits, and helping the government-- 

MARK: Oh, cool. 

KF: --and environmental issues, and things like that. 

MARK: Any cool stuff that we could take away and potentially tell our listeners? 

KF: I think the most actionable talk was probably the one from the guy who started Ruby for good. 

MARK: Oh, cool. 

KF: Gave a talk about how to get more involved with nonprofits and why you should do that-- 

MELANIE: Nice. 

KF: --in your spare time-- like, instead of just doing open source related to things that are technically interesting, doing open source related to things that are useful to people outside of the tech industry. 

MELANIE: You went to that talk. Oh, never mind. 

MARK: I did not go-- I wasn't here yesterday. 

KF: In spirit, not physically. 

MELANIE: You went to a different talk on open source. That was today. 

MARK: I did. Evan, who started Elm, whose last name I can never pronounce, did a really interesting talk on dealing with being an open source maintainer, and dealing with people coming up and being like, Elm is going to die, and how do you handle that as an open source maintainer, but also actions that can be taken to potentially turn that into a more positive statement and codify the sort of conversations that should happen inside that environment. And he tied it back to a whole bunch of philosophical and sociological stuff that came previously with books about that kind of stuff that come from the '60s and stuff. It was actually a really, really good talk. 

MELANIE: Nice. Mark, what got you starting to come to Strange Loop? 

MARK: I used to come here from Australia regularly, I think about six years ago. 

MELANIE: Wow. So you've been here for six years as well? 

MARK: Something like that. I think I missed a year somewhere in between. I'm trying to remember. I think I had a friend who was coming, or I saw it. And I was like, that just looks awesome, and I need to be at that conference. And so I started, I think, is the short answer. And then I was like, this is amazing. I need to come back. It's a conference that imposes imposter syndrome. 

[LAUGHTER] 

MELANIE: That sounds really inspiring for people to come. 

MARK: Yeah, I know. But I feel like it's true, because it is an environment in which you're always going to meet someone who knows stuff you don't know. Or you're just going to sit in a talk and just be like, I have no idea what that is. But I feel like, two years down the line, if you head in a certain direction, depending on what it is, you'll be like, oh, I remember that talk from Strange Loop two years ago that I saw about someone talking about something. Now I know how to make mathematical models that will tell me how to fold origami paper. Awesome, I can use that. 

[GONG] 

MELANIE: And did you make that? 

MARK: I have not needed that yet. But I assume, at some point, that I will. 

MELANIE: Someday you will. OK, well if it's imposing the imposter syndrome, why are you both coming back so often? 

KF: I don't know that I have imposter syndrome. 

[LAUGHTER] 

I think I just tend to see working in the tech industry as being like in many other jobs in which you just have to constantly pick up new skills because capitalism. 

MARK: Yep. I also love to-- I love to learn. That's a big, deep-seeded thing that I love, the passion. 

MELANIE: I know. I appreciate that this conference seems to be very driven to give conference talks on knowledge and sharing knowledge versus, like, we want to show you the new-fandangled-- 

MARK: Yeah, it's very much not a-- 

MELANIE: --shiny-- 

MARK: --beginner conference-- 

MELANIE: --thing. 

MARK: --but I think is still open to people who are beginners, either levels or mindsets. 

MELANIE: Yes. 

KF: Whenever I started coming, I had, like, no experience programming. 

MARK: Yeah. Wait, is that like realistically or functionally? 

KF: No, like realistically, I had no experience programming. I had like three months of experience programming or something ridiculous. 

MARK: Yeah, I'd never done functional programming before or touched anything that had been mentioned at Strange Loop before I came. 

KF: Yeah, and the first year I came, it was before they had opportunity grants and things. 

MELANIE: Which is one of the things I've always been very impressed with. With this conference in particular, there's been such a drive, specifically with opportunity grants, and just making sure that the diversity is being recognized and built out. And if anything, I've seen that evolve and change. It's such a small thing, but it's so true. Like, last year was the first time I saw a line at the women's bathroom. And it was the first time I've ever seen a line at the women's bathroom. And I was like, oh, that's awesome. 

Any other highlights from the conference this year, previous years? Like, did you all meet at this conference? 

MARK: How did we meet? 

KF: We met through our mutual friend Shawn, who you know from when you did ColdFusion. 

[LAUGHTER] 

MARK: That sounds about right. That sounds about right, actually. 

KF: And who I know through things unrelated to ColdFusion. 

MARK: You weren't a ColdFusion programmer too? Actually, to your point-- we were talking about why I was here-- I feel like-- and if we want to go back through my history, because I don't know why. That seems like a thing we're doing now-- I think it was around the time that I'd stopped doing ColdFusion as a thing, and was really trying to expand my horizons and learn a whole bunch of stuff. And Strange Loop looked like an amazing opportunity to do that, and honestly, continues to be so. 

MELANIE: Did Strange Loop inspire you to get more exposure to distributed systems, distributed computing? 

KF: I think it sort of came the other way around, which is, I got into programming because I was in grad school for math. And for some assignment my first semester of grad school, I ended up reading research papers from the Google research website, and was reading something about clustering algorithms at YouTube or something, and was like, oh, this is interesting, and then tried to learn to program and stuff, and then ended up going to code school. And then once I was there, people were like, you seem to be the kind of person who enjoys academic papers, which means, probably, functional programming and distributed systems are for you. 

MELANIE: And then you went with it? 

KF: Yeah-- not necessarily a normal start into programming. 

MELANIE: What is a normal start into programming? 

KF: I do know that when I started out doing programming and could cite a bunch of academic papers, but had no experience in industry, that was deeply unusual. And people did not know how to respond to it. I think it's less bizarre now, in part, I think, because they have things like Strange Loop that have opportunity grants. So it's not unheard of. 

MARK: Do you recommend it as a pathway? 

MELANIE: That's a great question. 

KF: "Recommend" is a strong word. I would say follow your bliss also though. I don't think it's harder, from a technical perspective, to pick up these things. 

MARK: Yep. 

KF: There's something inherent about this area of computer science or software engineering that I feel is harder than doing front end for example. I think that sometimes people make it artificially harder. Because they think it's harder, so they don't bother to learn how to talk about things in a way that's more approachable versus, like, does there exist something that teaches distributed systems to beginners in a systematic way like the way that there's Girls Who Code. And what are the nonprofit, like-- 

MELANIE: Yeah and-- 

KF: There are so many though, at this point, where they teach-- 

MELANIE: I know what you mean. 

KF: There are so many-- 

MARK: The variety. 

KF: --places where you can-- yes, the variety-- 

MELANIE: Where you can-- 

KF: --of all these workshop series. 

MELANIE: --you can learn how to build a website. You can learn how to build a machine learning application. You haven't seen anything yet that's been like introductory to-- 

KF: No, I don't think people see it as being introductory at all, in part because nobody writes introductory materials. 

MELANIE: Where does distributed computing typically sit within the structure of an engineering org from what you've seen and what you've experienced? 

KF: I tend to get bounced around between back-end infrastructure platform-type teams. And then I sort of fell into doing data things for a few years, like off and on. Because a lot of the languages that I was using to do platform-type stuff were also starting to get used for data stuff. So like Scala, originally, I picked up not for data stuff. I picked it up primarily because, like, functional programming and distributed systems. And then that started becoming a language, because of Spark, that people were using for data. So then people looked at my resume and were like, you do data things, because you have a math degree and know these languages, which is not necessarily accurate, though it is now. 

MELANIE: That's kind of how it works in general. But I remember, at one point, you also-- you've had a passion for Clojure-- Clojure in terms of the functional programming space. 

MARK: With a J. 

MELANIE: And that's-- yes. 

MARK: Just making sure that's clear. 

MELANIE: I appreciate that. 

KF: Yeah, so I fell into doing Clojure not for work, but because I was on a mailing list. And Bridget, who's now one of the co-organizers for Strange Loop, was putting together workshops to teach women Clojure-- or functional programming through Clojure. And before I worked in tech, I worked in teaching. So I was sort of like, if you needed any help with curriculum development, let me know. And then I got involved with it through that. And then eventually, despite the fact that I had not written almost any Clojure in earnest, I just became very strongly associated with it until it was actually a thing that I did. 

MARK: So I also want to know-- I'm very curious about this answer, actually-- we've said distributed computing. You like disputed systems. What does that mean to you? 

KF: I think that there is a meaning that it holds for me, and then there's the meeting that it holds in industry. 

MARK: And what's the-- yeah, what is that? 

KF: Because to me, if you're a front end developer, you have to have ideas about distributed computing at this point. I think when you talk to people in industry, most of the time, what they mean is you work on core platform infrastructure-type deals. 

MARK: Does that mean Kubernetes? 

KF: Amongst other things, sure. 

MELANIE: Mark really wants to bring up the Kubernetes perspective. Because I believe there was some stuff in the history between the two of you around Kubernetes. 

KF: When I met Mark, he was still living in Australia, and did not work for Google-- 

MARK: That's true. 

KF: --and had no reason to shill Kubernetes at the time. 

MARK: Right. 

KF: It wasn't even necessarily popular-- 

MARK: No. 

KF: --at the time. 

MELANIE: Oh. 

MARK: But I got-- 

KF: But he was deeply enthusiastic in a way where I was like, why don't you just go and sell people Kubernetes as your job. And then he became a developer relations person for Kubernetes things. 

MELANIE: And here we are. 

MARK: And here we are. But now you've actually used Kubernetes after giving me grief about it for a really long time. 

KF: Sure. 

MARK: Yeah. 

MELANIE: And what do you think of Kubernetes? 

KF: And now we've come full circle. 

MARK: Oh, yes. 

MELANIE: And what do you think of Kubernetes? 

KF: I think it's a tool, and it's a step in the right direction. And I think it helps build better abstractions in the long term. I tend to think about these things not necessarily from the perspective of running infrastructure for the sake of keeping things running, but more from the idea of infrastructure as a product. And I think that it becomes easier to build those kinds of tools when you have something like Kubernetes that becomes an abstraction over things. 

MELANIE: Are there any other tools that you've found are valuable in the work that you do? 

KF: I mean, there's Docker, which is just, at this point, also prolific after-- like, it wasn't when I started. And now after five years, it's just like, I can't imagine not using it at this point. 

MELANIE: So I know we've talked around about the different things that you've done. What do you enjoy doing in the computing space? 

KF: I don't know that I enjoy specific technical things at this point. I enjoy building things that are useful. 

MARK: That's valid. Because I think you've had kind of a history of building platforms that would then be on use by other areas of companies. Would that be vaguely right? 

KF: Yeah. I haven't done as much feature development for things that get used externally. I've done some of that. When I work on those kinds of services, it's usually more from an SRE perspective where I'm trying to make something more performant for the customer, not necessarily building the initial thing. 

MELANIE: So I know you've done the coding bootcamp. You've done some of your own self-study. What do you think are some good pathways now-- and we already talked about some of the new coding projects that are out there a little bit in terms of getting people in. But what do you think are some good ways for those who are trying to find their pathway into building out things, building things, whatever form that takes? 

KF: I think all of the options are hard. 

MELANIE: Ah. 

KF: I think there was a period of time where, if you already had a degree or you couldn't afford to go to college, then coding boot camps were potentially a really great option if you chose the right one. But now they've been around for so long and there are so many, I think it's hard to choose one. Because there are so many that are potentially bad. And there's no regulation on them. If you don't have experience with software engineering and you maybe don't know anyone who does offer engineering, which is the kind of person who I think would go to a coding bootcamp, it's kind of impossible to tell whether something is snake oil or not. 

So I say that coding bootcamps exist, and some of them are OK. And probably check Course Report, see if it's decent. There are more places that are starting to do apprenticeships, which I feel like are always the best option. If you can manage to go to school for computer science, that's always, I think, still the best option. But that's not really realistic for everyone. 

MELANIE: Yeah. 

KF: It wasn't realistic for me. 

MELANIE: Well actually, the keynote this morning at Strange Loop was talking about how important it is for all kids to be exposed to some type of computer science, or just basically something around-- 

MARK: Foundational computer science, yeah. 

MELANIE: Yeah, something along those lines, as well as trying to give ideas to think outside the box. But what do you think about that in terms of the education of kids? Do you think that that's a skill that definitely needs to be applied across the board? 

KF: I think that everyone should have exposure to computer science. 

MELANIE: Yeah. 

KF: I think some people take it to a larger degree and say everyone should have so many years of computer science classes or coding classes in school. I don't agree that that's reasonable. Having worked in schools, it's like, there's not enough time already to cover things. Like, what is the thing you're going to take out of the curriculum to put this in? I would struggle to think of something, like a core subject, if you're treating computer science as a core subject, that is less important than learning to code. I would struggle to think of something. 

MELANIE: And one of the points that we're making this morning too is how it's hard to find, also, teachers, specifically showing some numbers in terms of there's less teachers to be able to provide the education. 

MARK: And the incentives are aligned for people with computer science degrees to not be teachers. 

MELANIE: Right, and I was thinking-- at the time, I was like, you could line that up against those who have the expertise in the machine learning space. And I'm sure it's even less people. But I guess the question I'd ask is-- you've mentored a number of people coming into the space-- do you have any advice for those who might be thinking about being mentors who want to help others getting into the space? 

KF: I think the main thing is that you should try to, one, align yourself with some sort of nonprofit if you're doing it systematically. There are coding bootcamps that are for-profit that rely very heavily on mentors. And if the reason for mentoring people is to help get more people into the field, I don't understand the rationale for doing that at a for-profit school. In the same way that I will sometimes go give talks at universities to college students about computer science, if I'm going to sink a bunch of my time connecting with some sort of organization that's providing mentorship to people, I tend to go for something that's low-cost or free. Because that's usually people who need it most. 

A lot of people I have met through going to conferences, or being involved specifically with setting up opportunity grant systems, or volunteering around that, I don't know that this is advice for people mentoring so much as for people who need help with things, as you'd be surprised how willing people are to help you if you just ask them for it. Most of the time, people will say yes, not because I asked for help, but because people ask me for help. And most of the time I say yes. Or I introduce them to someone who's more able to help them. And most of the time, that person says yes. 

MARK: I was going to say, yeah, have you got any suggestions for people to find mentors? I know that's been-- that can be tricky sometimes. 

MELANIE: Yeah. 

MARK: Just ask the question? 

KF: I'd ask the question. But also, spend some amount of time upfront trying to figure out who the person is and what their specialty is. 

MARK: So you're not saying I should just hop on LinkedIn and spam everyone with email? 

KF: No, that's not-- 

MARK: That's not a thing? 

KF: --a good approach. It's more like, go to events in your area if you have them. If you don't-- every job I've gotten, I've gotten through Twitter. And most of the people who I know who have spent time with me teaching me things, a disproportionately large number of those people I met on Twitter. It's more like, go socialize with people. 

MARK: That seems reasonable. 

KF: I'm originally from Houston. So the advice of go to events doesn't apply as strongly in some cities as in others. Because there aren't as many tech events in Houston as there are even in, like, Portland, where I live now. 

MELANIE: Or start up your own event, and start up your own community if you can. 

MARK: That takes work-- but yeah, if you've got time. 

KF: Yeah. 

MELANIE: That's another way. I know-- I've met a number of people who have done that. And I know you and I have talked about this before, but just to be on the same page on this one, the people you've mentored especially, not everybody has a math degree. Not everybody who's come into this space necessarily had much experience with computer science. The people that I've come across-- and I know for myself, too-- would you say that's probably what you've seen as well? 

KF: Yeah, most of the time. 

MELANIE: Because I know that that can sometimes be an intimidating factor, talking about the imposture syndrome before. 

MARK: Yeah. And it's probably worth noting, I mean, amongst our peers and people I know, I know a variety people who have degrees, but not even remotely in computer science, in psychology, in philosophy. And I know people who are theater majors, right, who work in computer science. 

KF: My first degree was in English. And then I went back to school later and got a math degree. 

MARK: Technically, I have a bachelor in multimedia. I don't know what that's worth at all. 

SPEAKER 1: I have a film degree. 

MARK: Yeah. 

KF: It's for making podcasts. That's what it's for. 

MARK: That's what it's for. It's so I can use Macromedia Director. That's what it's for. 

MELANIE: That is the only reason why. Yeah, how did games come into the middle of this? Just because you play them. 

MARK: I play them. 

MELANIE: So on a different note, how do you get all your work done with your cat on your head? 

[MEOW] 

KF: I work from home. My cat usually leaves me alone unless I'm in meeting is the key thing. 

MARK: Sounds about right. 

MELANIE: How do you make sure you're successful in what you're doing working remotely? Because I know that's something that you typically do. 

KF: Yeah I have always worked remotely. For a while, I worked for a company that was in Portland while I lived in Portland, but just never went into the office. I think I started doing remote stuff from when I was entry-level on, which is unusual. Because most people aren't willing to hire people who are entry-level to work remotely. 

I think it was mostly a factor of finding support systems locally. Or even if not locally, now, all the time, I'll run into something, and I won't really know how to solve the problem. And I'll be the tech lead. So there's no one else to solve it for me at work. So I end up going and talking to people I just know from the internet-- 

MARK: Yep. 

KF: --or people I met in other cities when I was at conferences, or when I lived there, or when I worked for a company there, and be like-- 

MARK: In your network. 

KF: --have you run into this? Yeah, and then we do that for each other. 

MARK: That's a really good question too. And just talking about remote culture and something of-- like you said people don't like to hire people who are at entry-level for remote positions. What's a successful way of bringing in entry-level people for remote positions, do you think? 

KF: I don't think it's a requirement that people have previous professional experience to work remotely as part of their first job. Because I've worked with entry-level people who had never really had a job before and were remote in other timezones, other countries, and it worked out fine. I do think, though, that it is helpful to set them up with a specific person who can walk them through-- 

MARK: Like a one-on-one mentor. 

KF: --what that looks like. Yeah, like you should do that anyway when someone is starting a job, but even more so with remote stuff, especially if you can find someone who's been doing remote for a while. And it helps to be very explicit about what your day looks like and what other people's days look like. 

So when I started working remotely, I did not actually have industry experience. Before that, I'd only ever worked in schools. So I did not understand what it was like to work in an office. 

MARK: Right. 

KF: So I had this-- I didn't understand that there were times of the day when people went up to go get coffee or walk down the street to get coffee even. And that was, like, a 20-minute break right there. So I had this weird notion that I needed to be sitting at my computer all the time. 

MELANIE: Oh, wow. 

KF: Or like-- and I needed to put in eight hours a day. And I also worked freelance for a while-- like eight hours a day of earnest coding, not working, which-- 

MELANIE: And then a coffee break. 

KF: Yeah, now I understand that working involves many things, such as talking to people. When I started out, I didn't understand this. And I would just anchor myself to my computer for eight hours a day minimum and code things. And I remember coworkers would try to encourage me to get lunch. 

MARK: Right, which is a thing you should do. 

KF: You should do this. 

MARK: Yes. 

KF: But also, I was entry-level. And it was my first "office," quote, unquote "job." You can't look around and see other people modeling how to do things. So you have to be very explicit about, this is how I conduct my day. You could also do it these other ways, but this is how I do it. 

MELANIE: How do you conduct your day? 

KF: Uh-- 

[LAUGHTER] 

So I usually start working by 9:30, which means I get up at 9:00 at the earliest, sometimes. And then I shower and have breakfast or whatever. I usually work from home in the morning, because I don't like commuting during rush-hour times. So unless I'm biking, I will work from home in the morning. 

And then I'll take lunch at around noon to 1:00. So I'll eat lunch and then commute into a co-working space. And then I will work from the co-working space for the rest of the afternoon and then come home whenever about eight hours of working has been accomplished, or until-- sometimes I have a mindset that I'm in, and I just don't want to stop. So I'll keep working until I finish the thing I'm doing. 

MELANIE: Adjust later? 

KF: Yeah. 

MARK: We've kind of done this remote stuff, which I actually really enjoy, because it's something I used to do too. I'd love to also hear about, how do you find good communication patterns in remote teams? Things tend to be asynchronous. Not everyone's awake at the same time. Do you have thoughts on either technology, or patterns, or workplace standards? I don't know. 

KF: I try to look for people who enjoy talking. When I interview, I try to see if they're reasonably talkative. If they have an online presence, that's one way to tell if they tend to talk a lot online. Despite working remotely for the entire time I've worked in tech, I am not a very insular person. And I talk. 

MARK: Shocked 

KF: You're like-- 

MARK: Shocked. 

--shocking. Shocking, I know. 

MELANIE: You might have a few tweets out there, maybe just a couple. 

KF: So I try to find work places where people aren't completely siloed, and they still talk to each other all the time throughout the day. I comically refer to it as like, when I start a new job, I'm joining a new Slack. 

MARK: Yeah. And do you feel like you almost have to be more vocal in some ways, being remote? You kind of have to push your personality and your communication out more than you would, say, if you're in an office, because of the distance? 

KF: I have experienced this, especially with people who are starting out. And they're relatively junior. And they are working remotely for the first time or something. If you're at an office, and you have a junior dev who is struggling, you can usually tell that they're struggling. Because they look stressed and they haven't moved for hours, versus, if they're remote, you have no idea unless you constantly ping them, or unless they become very direct and tell you that this is happening, which is extremely unlikely that they will do this unless you set up that rapport in advance-- so yes. 

MARK: And a lot of GIFs, animated GIFs, I feel, help a lot. 

KF: I use more GIFs than are reasonable. 

MELANIE: On a more general note, what do you value most in the companies that you work for? 

KF: I try to find people who are different from me, who are sufficiently different from me that I'm not just stagnating as a person. I think a lot of people look for jobs where you're picking up a new tech stack and pushing yourself in that regard. I try to find companies where they're open to hiring junior devs, where not everyone is white, where not everyone is a man, where there are queer people, where there are people with disabilities, especially because, if you hire remote, I feel like a lot of companies miss the part about how that kind of environment can be-- when it's set up correctly, give people really great job opportunities. Because people who are disabled are generally deeply unemployed. 

MELANIE: Yeah. Well, so this is great. And I just wanted to say, is there anything else that you wanted to talk about around Strange Loop, around working remotely, around-- 

MARK: Kubernetes-- do you want to speak about Kubernetes? 

MELANIE: --Kubernetes, 

[LAUGHTER] 

--where you're going to be next? 

KF: Not particularly. 

MELANIE: That's a good answer. 

MARK: OK, thank you for spending time with us today. 

[LAUGHTER] 

As always, spending time with you is a pleasure. But it was lovely having you on recording this time. 

MELANIE: Yes, thank you for coming on the podcast. Actually, well, one last thing-- who would you recommend should consider coming to Strange Loop? 

KF: If you into functional programming, distributed systems, security-type things, this is probably a good conference to go to. Not necessarily like you've done them or you've been doing them, but if you were just interested in them, I think that's sufficient to come. Now let's get dinner. 

MELANIE: Yes. 

MARK: Let's get dinner. 

MELANIE: KF, thank you, again, for coming on the podcast. I'm so glad we were able to make that work. 

MARK: Yeah, me too. Really great to have you on. Actually, I went and had a look, Melanie. You started with us in episode 102, so two more episodes. And you're at 50 episodes. 

MELANIE: Sweet, two more and I'm done. 

MARK: You were-- 

MELANIE: I'm baked. 

MARK: You came on to do "Smart Parking and IoT Core with Brian Granatir." We did the wrappers together for that. 

MELANIE: Yeah, and the smart parking was a really interesting one too. I know we resurfaced that with some articles that he wrote a while back. But yes, good times, good times, Mark. Well, so let's get into the question of the week-- 

MARK: Yeah. 

MELANIE: --which is not about when did I start. We could have saved that for the [INAUDIBLE]. Anyway, so the question of the week-- how do I encrypt and decrypt data with Cloud Key Management Service? 

MARK: Yeah, I think this is actually really interesting. I was kind of just poking around, looking for a question of the week. And I've never really looked at Cloud Key Management Service. But basically, it's a cloud-hosted key management service that lets you manage cryptographic keys for your cloud. It's actually really cool. 

So there's a couple of posts that we'll link to about basically doing encryption and decryption. I am not a security expert, so I'm going to try and read this as much as possible. But-- 

MELANIE: It's like, I'm not a doctor. 

MARK: I'm not a doctor, exactly. 

[AUDIO PLAYBACK] 

[DING] 

- Dr. Mandel-- Dr. Mandel, please report to neurosurgery in OR 7. 

[END PLAYBACK] 

MARK: I'm not a lawyer. I'm none of those things. But the client APIs as well as the gcloud tools support both symmetric and asymmetric encryption. So if I get this right, symmetric algorithms use the same key for both encryption and decryption, whereas asymmetric algorithms use different keys for encryption and decryption. And there are different reasons for using one over the other. 

It's really quite straightforward to do the encryption and decryption. Basically, you're specifying your location, your key ring, your key. And then you specify the text you want to encrypt, and it spits it back. And then to decrypt it, it's basically doing the same thing all over again. And all of those keys are managed by Cloud Key Management Service, which is kind of neat. 

MELANIE: Yes. 

MARK: And very similarly, for-- yeah the RSA, the asynchronous one-- asymmetric. Words are hard-- 

MELANIE: Some days they are. 

MARK: --encryption. And there's also examples there for different languages as well-- Go, Java, Python for the asymmetric, and C#, Go, Java, Node.js, Python, Ruby, PHP. 

MELANIE: Or just from your command line. 

MARK: Yeah, you can do it too. It's actually really straightforward. I was super impressed. 

MELANIE: Great. Well, Mark, where are you going to be in the next couple weeks, next couple months? What are you excited about? 

MARK: That is a really good question. I don't think I'm going anywhere special for the next month, which is super nice. Really kind of happy. It looked liked I was going to go to [INAUDIBLE]. And then I wasn't. And then I wasn't. It doesn't look like I'm going, so it's a little sad. But I'm sure plenty of Google Cloud people there. They're going to have a great time. I think I'm just excited to be going to KubeCon in December. 

MELANIE: Great. 

MARK: What about yourself? 

MELANIE: This week I will be at CAMLIS in Washington, DC, which is a security and data conference. And I'm looking forward to that. 

MARK: Nice. Well yeah, actually, the thing that I will be doing as well is I will be getting back into doing some more Twitch streaming of various things. 

MELANIE: Oh yeah. 

MARK: It'll be lots of fun. 

MELANIE: Have you not been doing that? 

MARK: I took a break in September because I was traveling so much. 

MELANIE: I was going to say, clearly, I'm not watching. 

MARK: But yeah, I'll be good to get back to that. 

MELANIE: Well, good, I'm glad. When is that? 

MARK: Usually I do that at 9:00 AM Pacific on Tuesdays. But I'm going to try and slide in to doing some more streams in the middle of the week. Follow me on Twitter and Twitch for more details. 

MELANIE: And then, Mark, if people want to get in touch with us or subscribe to the podcast? 

MARK: Yes, that's good. We haven't done this in a while. So if you want to subscribe to the podcast, everything can be found at gcppodcast.com. You can find our RSS feeds, the iTunes links. You can find Stitcher, YouTube, all the stuff that's on there. 

MELANIE: Email us at hello@gcppodcast.com. 

MARK: Yeah, if you want to send us questions of the week, we actually have a form on the bottom of the new website. So if you want to check that out-- I mean, you can send us emails too. Love the emails. Or hit us up on G+, or hit us up on Reddit. Our G+ account is +Gcppodcast. Our Reddit is /r/gcppodcast. 

MELANIE: And we are GCPPodcast on Twitter. 

MARK: Yep, exactly. But yeah, if you go to the website and you go all the way down the bottom, on the bottom left-hand side in the Footer, there's a form. You can go there. And you can drop in questions of the week. And we check it out every week to see what questions people are giving us. 

MELANIE: What's on people's minds. Great, I think that's it for us for this week, Mark. 

MARK: Yeah, so Melanie, thanks for joining me for yet another week on the podcast. 

MELANIE: Thank you. 

MARK: Thank you all for listening. And we'll see you all next week. 

[MUSIC PLAYING] 

