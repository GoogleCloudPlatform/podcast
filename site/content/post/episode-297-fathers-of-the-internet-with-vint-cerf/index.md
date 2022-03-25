+++
audioDuration = "00:41:03"
audioFile = "Google.Cloud.Platform.Podcast.Episode.297.mp3"
audioSize = 59036957
categories = ["Internet", "ARPA", "Security"]
date = "2022-03-23"
description = ""
draft = false
episodeNumber = 297
hosts = ["Stephanie Wong", "Anthony Bushong"]
title = "Fathers of the Internet with Vint Cerf"
image="/post/episode-297-fathers-of-the-internet-with-vint-cerf/images/hero/hero-EP-297.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/tl2owa/episode_297_fathers_of_the_internet_with_vint_cerf/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week, [Stephanie Wong](https://twitter.com/stephr_wong) and [Anthony Bushong](https://twitter.com/agmsbusho) introduce a special podcast of the Gtalk at Airbus speaker series where prestigious Googlers have been invited to talk with Airbus. In this episode, [Vint Cerf](https://twitter.com/vgcerf), who is widely regarded as one of the fathers of the Internet, talks with Rhys Phillips of Airbus and fellow Googler [Rafael Lami Dozo](https://twitter.com/lamidozo).

Vint tells us about his journey to Google, including his interest in science which stemmed from a chemistry set he received as a child. After high school, he got a job  writing data analyzation software on the Apollo project. His graduate work at UCLA led him to the ARPANet project where he developed host protocols, and eventually to his work on the original Internet with Bob Kahn. Vint tells us about the security surrounding this project and the importance of internet security still today. 

The open architecture of the internet then and now excites Vint because it allows new, interesting projects to contribute without barriers. Vint is also passionate about accessibility. At Google, he and his team continue to make systems more accessible by listening to clients and adapting software to make it usable. He sees an opportunity to train developers to optimize software to work with common accessibility tools like screen readers to ensure better usability. 

Later, Vint tells us about the Interplanetary Internet, describing how this system is being built to provide fast, effective Internet to every part of the planet. Along with groups like the Internet Engineering Task Force, this new Internet is being deployed and tested now to ensure it works as expected. He talks about his work with NASA and other space agencies to grow the Interplanetary Internet.

Digital obsolescence is another type of accessibility that concerns Vint. Over time, the loads of data we store and their various storage devices could become unreadable. Software needed to use or see this media could no longer be supported as well, making the data inaccessible. Vint hopes we will begin practicing ways to perpetuate the existence of this data through copying and making software more backward compatible. He addresses the issues with this, including funding. 

##### Vint Cerf

While at UCLA, [Vint Cerf](https://twitter.com/vgcerf) worked on ARPANet - the very beginnings of what we know as the internet today and is now, fittingly, Chief Internet Evangelist & VP at Google. He is an American Internet pioneer and is recognized as one of "the fathers of the Internet", sharing this title with TCP/IP co-developer Bob Kahn.

##### Rhys Phillips

Rhys Phillips is Change and Adoption Leader, Digital Workplace at Airbus.

##### Rafael Lami Dozo

Rafael Lami Dozo is Customer Success Manager, Google Cloud Workspace for Airbus.

##### Cool things of the week

* Celebrating Pi Day with Cloud Functions [blog](https://cloud.google.com/blog/topics/developers-practitioners/celebrating-pi-day-cloud-functions)
* Apollo Scales GraphQL Platform using GKE [blog](https://cloud.google.com/blog/topics/developers-practitioners/apollo-scales-graphql-platform-using-gke)
 
##### Interview

* Vinton G. Cerf Profile [site](https://research.google/people/author32412/)
* ARPANet on Wikipedia [site](https://en.wikipedia.org/wiki/ARPANET#:~:text=The%20Advanced%20Research%20Projects%20Agency,technical%20foundation%20of%20the%20Internet)
* To Boldly Go Where No Internet Protocol Has Gone Before [article](https://www.quantamagazine.org/vint-cerfs-plan-for-building-an-internet-in-space-20201021/)
* Building the backbone of an interplanetary internet [video](https://www.youtube.com/watch?v=wEXsz6pK9XQ)
* IETF [site](https://www.ietf.org)
* CCSDS [site](https://public.ccsds.org/default.aspx)
* IPNSIG [site](https://ipnsig.org)
* The Internet Society [site](https://www.internetsociety.org)
* NASA [site](https://www.nasa.gov)

##### What's something cool you're working on?

Stephanie is working on new [Discovering Data Centers videos](https://www.youtube.com/watch?v=2R-UVdw6thI&list=PLIivdWyY5sqI7lzvVHfp4zbwp3Xaub2jm).

Anthony is working on content for building scalable GKE clusters.

{{< transcript "[UPBEAT MUSIC] STEPHANIE: Hey, everyone, and welcome to episode number 297 of the weekly Google Cloud Platform Podcast. This is Stephanie Wong, and I am here with my old time friend, Anthony Bushong." >}}

ANTHONY: Thanks, Steph. Really excited to be here and thank you for having me not just on the podcast but also, for those who don't know, I have recently joined Stephanie's team as a developer advocate. So excited to hopefully, if y'all will let me back on, on another podcast and also working on plenty of other video, blog posts, and other types of content. 

STEPHANIE: Let you back on? We need you on this podcast. We want you on this podcast. No, but I'm so thrilled to have you on our team. I've honestly been just kind of waiting for this to happen and trying to manifest it myself. But for everyone who doesn't know, we go way back. We went to UCLA together. We took classes together. We did our minor together in digital humanities. We even were in lock step for basically most of our careers starting at Oracle, then becoming customer engineers, going to Google, and now here in DevRel. 

ANTHONY: And speaking of UCLA connections, that brings us to our main guest for the episode, Vint Cerf, who most folks probably already recognize the name. But for those who don't know, Vint Cerf was also a graduate student at UCLA where he worked on ARPANET, the very beginnings of what we now know as the Internet. And so he is now fittingly the chief internet evangelist and a Vice President at Google. And you probably recognize him as one of the fathers of the internet, having co-developed TCP/IP, receiving numerous honorary degrees, awards, and the likes. It's really awesome to have a UCLA connection, especially for someone who is so foundational to everything we work on at Google Cloud today. 

STEPHANIE: Yeah. It speaks to, again, how full circle we've come, because we were taking classes about Vint Cerf. And even I remember visiting a room at UCLA with a mainframe and we learned about the birth of the internet. And I even have a photo with him at Google. And little did I know that I would ever expect to be working at the same company as, again, one of the fathers of the internet. 

So we're going to talk a little bit more about that in just a second. But just to explain the episode for today, we are republishing this interview between Vint Cerf and a couple of folks, one from Airbus and one from Google Cloud. They have a G Talk podcast series in which they invite prestigious Googlers to talk to Airbus and Google, including Vint Cerf, Melonie Parker, Geoffrey Hinton. And this is all to challenge the status quo, share experiences, and celebrate innovation. And the two voices you're going to hear on this episode are Rhys Phillips, change and adoption leader for digital workplace at Airbus, and Rafael Lami Dozo, who's a customer success manager for Google Cloud Workspace for Airbus. 

Now, before we get into all that, we first want to cover the cool things of the week. 

[UPBEAT MUSIC] 

All right. So my cool thing of the week I think is the sweetest one, because last week was Pi Day. Yeah, 3/14, March 14th, is Pi Day. And we always celebrate it here at Google Cloud, especially since we have Emma Iwao, who's our teammate here who has actually broken records calculating the highest number of records of pi in the past through running it on Google Cloud. And this year was no exception. 

She was able to run a few experiments with pi using the new Google Cloud functions second gen, in which they were able to leverage our larger instances and longer function execution duration and they were able to calculate 64 million digits of pi and save about 95% of compute and storage costs and also serve an API for the digits of pi so that you could see a cool live demo by listening to music created by the digits of pi. So definitely check that out. 

ANTHONY: Yeah. I think that is really cool, especially the fact that we think of these high intensive computations to be something for the largest VM instances. But we're actually able to do this on a serverless platform where before I used to think of these as just small snippets of code that react to an event. But now it can actually with the larger instances and longer execution times can handle some pretty complex processing, like calculating millions of digits of pi. So very cool. 

It is a tough act to follow up, Pi Day is, but I'll try. So my cool thing of the week is actually a video in the architecting with Google Cloud series as well as a blog post detailing how Apollo, a company who runs a graphical platform used by many developers and enterprises, architected their platform to run on Google Cloud and GKE. So this comes from our peer in Developer Relations, [INAUDIBLE]. And she captures how the majority of the platform that Apollo runs is actually hosted on a single large multitenant GKE cluster. 

And this is always interesting, because it's an age old debate, at least in the Kubernetes world, about whether or not you should be running multiple workloads on multiple clusters or on a single cluster. And recently at Google, we've launched a ton of multi-cluster functionality from fleets within Anthos to multi-cluster services in GKE. It's actually pretty cool to see a company using a single large GKE cluster for multi-tenancy. And so it's pretty impressive. The blog post and the video detail how they are actually running a ton of complex workloads, of course, with the right guardrails within GKE and how you can actually ensure that they don't disrupt one another. And I think it's an especially interesting perspective to see their success with sharing a GKE cluster with many teams at their company. 

STEPHANIE: Yeah, super impressive to see how much GKE has evolved thanks to the flexibility of GKE's node pools and namespaces and all of that. So really, really great customer story here. 

Now I know everyone's waiting to hear from Vint Cerf to hear his story. So without further ado, let's go ahead and jump into our conversation with him. 

[UPBEAT MUSIC] 

SPEAKER 1: And I'm very delighted to say that Vint is joining us on the podcast today. Vint, thanks very much for taking the time out to talk to us. 

VINT: It's always a pleasure to chat with you. 

SPEAKER 2: Great. So can we start with the job title and your role here at Google? When I joined Google in 2013 and I saw you there, TGIF, our Friday celebrations, I almost fell out of my chair because I was like, what he's doing here? So I was so surprised. And I think we were very excited. So why did you decide to join us back in 2005 and what do you do in your role as VP and Chief Internet Evangelist? 

VINT: Well, to be honest with you, we're making it up as we go along. When they asked me what title I wanted, I said how about Archduke? And they actually came back and said, look, the previous Archduke was Ferdinand and he was assassinated in 1914 and it started World War I. Maybe that's a bad title to have. Why don't you be our Chief Internet Evangelist? And I said, OK, I can do that. 

So really part of the job is to try to get more internet built all around the world. Because it's my belief that getting access to internet is important for everyone, and it's certainly important for Google, because we're so dependent on that system to reach our customers and our users. So part of my job has been on the technical side and part of it has been on the policy side, because a lot of the impedance to getting internet built is related to policy and not technology. 

So in fact, I spent most of my time at Google initially in the research group and then moved over into the policy group, global affairs and public policy. And most recently now into the cloud group, looking at the public sector, in particular global public sector, again, believing that the public sector can benefit from improved access to and use of the internet. So that's how I spend my time. Plus a bunch of other things, as you know, that are extracurricular, including the interplanetary internet work. 

SPEAKER 1: Let's maybe go back a little bit to just a couple of years before you joined Google, so back to your childhood, in fact. Do you remember what it was that kind of triggered your interest in science and technology? Because you are clearly interested in it from a very young age. 

VINT: And I continue to be as interested as I ever have been. In fact, there's an old saying that growing old is inevitable, but growing up is a choice that you can have. And I hope I never grow up. 

So my recollection is that my deep interest in science and technology came when I was 10 years old, because I got a chemistry set. And this is 1953, which I know some people will think was in the 19th century but is really the 20th. And there were some really great chemicals in those chemistry sets back then which you probably can't get today. They were hyperglic, like potassium permanganate and glycerin, which burst into flame when you mix them together. So I got fascinated by chemistry. 

And that same year, I was in fifth grade and I was complaining to my teacher that math seemed boring. Multiplication, division, fractions. Isn't there more to math than that? And they said, yes, and handed me a seventh grade algebra book, which I worked my way through that summer and became totally fascinated by mathematics. I especially enjoyed the word problems in algebra. So I would mark from age 10 a really deep and growing interest in science and technology and mathematics. 

SPEAKER 2: So that's primary school. And then you went onto your high school. And I was surprised that you started working on the Apollo program while you're still in high school. So how did you came about doing that? 

VINT: This was incredibly good fortune. While I was in high school, my father was working for a company called Rocketdyne, which made the F-1 engines for the Apollo program. And I was a contestant to get a four year scholarship and I won a four year scholarship to Stanford University. But there was a six month gap between my completion at high school and going to college. And so I went to work at Rocketdyne and my job was to write software that would evaluate the data coming from the tests of the F-1 engines in a fixed test frame in the Santa Susana mountains north of Los Angeles. 

So I was getting the data back, and we were fitting it to a [INAUDIBLE] probability distribution. Our whole idea was to make sure that the engines would not fall apart until after they ran out of fuel. And after that, we didn't care anymore. Unlike Elon Musk and others who are reusing their first stages, the first stage of the Apollo rockets, the Saturn V rocket, was discarded after use. So we didn't care what happened after the rockets ran out of fuel. But I can tell you it was very exciting to have this tiny little role in the Apollo program. 

SPEAKER 2: So you were working with an IBM machine at the time? 

VINT: Yes, that's correct. 

SPEAKER 2: And it was COBOL, I guess? 

VINT: Well, it was an IDM 3-- let's see. It wasn't a 360, because this was 1962. So it was a 7090 machine. 

SPEAKER 2: OK, well, that's fascinating. That's fascinating. 

SPEAKER 1: I mean in the introduction, and we talked about it there and it's what you're famous, you're known for co-developing TCP/IP. What led you to getting involved in that kind of protocol topic? 

VINT: Well, it turns out that when I went-- I worked at IBM from '65 to '67 and then I returned to graduate school at UCLA. And while I was there, I got involved in the ARPANET project in Leonard Kleinrock's laboratory as the principal programmer for the Network Measurement Center. And so I got involved in the development of the host protocols for the ARPANET, which that project was led by Steve Crocker, who was a fellow graduate student in Len Kleinrock lab and who later went on to work at ARPA, just as I did after Steve Crocker. So I had exposure to the host to host protocol development. 

And then when I went up to Stanford in 1972, joined the faculty, one of my colleagues who had worked on the ARPANET project and was a key architect, Robert Kahn, had gone from Bolt Beranek and Newman, which built the ARPANET packet switches, to ARPA. And so he showed up in my laboratory at Stanford in the spring of '73 and described a multi-network idea that he was pursuing because he wanted to be able to use the computer communication capability for command and control. But that meant putting computers and ships at sea and aircraft and mobile vehicles. That meant we needed to use satellite and mobile radio in addition to the wireline system on top of which we had built the ARPANET. 

And so Bob drew me into this internet project. We called it interneting at the time. And by the end of the fall of 1973, we had come up with an idea for a multiple network system. And it depended very heavily on a protocol we called the Transmission Control Protocol, which later was split into two parts, TCP and the internet protocol. So I mean, I attribute all of my involvement to Bob Kahn's invitation to participate in this interneting project which he had started at ARPA. 

SPEAKER 2: So because of these military use cases and the involvement at the beginning, and I don't know how many of the Soviets were doing anything, what were their security involve around this project and the packet of security technology in those days? 

VINT: So two things were happening at the same time. The internet development took place primarily in universities that were doing research on artificial intelligence and computer science and which were involved in connecting their computers to what became the internet. And so there was a lot of civilian applications that we were building on this basic internet backbone that we were just using as researchers. Concurrent with that, of course, is the work aimed at command and control. 

And so by 1975 while I was still at Stanford, I began working with the National Security Agency on the design and implementation of the secure version of the system using cryptographic methods that were classified at the time. So I wasn't able to share with the other parties who were working on the general internet the details of that. 

And then around that same time frame, 1975, '76, '77, the revelation of public key cryptography comes along from Stanford from Marty Hellman and Whitfield Diffie, who published a paper on new directions in cryptography in 1976. And by that time, by 1976, I was at ARPA running this program. And my problem was that I could not use the classified capabilities which were not based on public key crypto and there were no public key crypto algorithms yet available to use in the system. But I was confident that we could retrofit these capabilities into the nascent internet when the time came. 

And so there was serious consideration for security at the very beginning. There continues to be serious consideration for security, especially for the military versions of the internet that are in operation today. And I think you can tell from the headlines that we need to do a lot more work for the civilian internet in order to secure it further. And of course, at Google we know that very well and we are using cryptographic methods in a variety of places in order to build a much more safe and secure system for everyone. 

SPEAKER 1: When you think back to what you've just described to us to this kind of the way that you've got involved in this topic and the original kind of purpose and vision you have and then you look at what it's become and what it's enabled in the world now, which of course, has also led to your role at Google and what you're trying to do there, how does that feel? It must be kind of an incredible feeling to see this thing that you couldn't have really foreseen happening to have now become such a big part of everyone's daily lives. 

VINT: Well, I would say that some of this is not a surprise and some of it is. The part that's not a surprise, is that the basic architecture of the internet, which drew very heavily on our ARPANET experience. For example, the layered architecture of protocols is central to the internet design. That particular philosophy accommodated expansion both horizontally and vertically. So you could add new protocols at any given layer. You could add protocol by putting in a new layer. 

And the reason that that's important here is that it meant that anyone wanted to and had an idea had the technical opportunity to contribute in both those dimensions, vertically and horizontally. So this was an extremely open architecture. And that is what I am most happy about, because it meant that people with new ideas could come along and contribute. They didn't have to get validated and we didn't have to pass an exam or something. 

Now, having said that, a very important point is that when Tim Berners-Lee released the world wide web idea, which he started working on I guess in 1989 and released in December of '91, he had added a new layer of protocol on top of TCP/IP called the hypertext transport protocol. And of course, that plus the hypertext markup language is what enabled the world wide web concept to propagate. 

And he chose to do what Bob and I did, which was to give away the protocols. And he chose to put them on a by that time now growing internet. In fact, it had become commercially available in the US on three different internet service providers by the time he started working on the world wide web. And by the time 1991 comes along, we're already underway in commercial private sector internet services. So I think what I like the most about this whole story is the freedom and openness with which we embraced other people's ideas and gave them a platform in which to try them out. 

SPEAKER 1: Yeah, which of course, is all about accessibility and ensuring that everyone has a connection. And you kind of alluded to that when you talked about your work with Google right now. But it brings me to the topic of accessibility and inclusion, which is something that at Airbus is also a very big topic. It's something that we're working very hard at and we know is something that can be challenging to solve. It's something that you're also an advocate for. And I was wondering whether you could tell us about your personal experience and the reasons that you're such an advocate when it comes to accessibility topics. 

VINT: Oh, that's such a great question. Thank you for asking. First of all, let me say that I am super pleased to know that Airbus is attentive to questions of accessibility, not just in the context of online services and so on. But let's imagine all the airplanes that you build that we all fly around the world in being increasingly accessible for people with disabilities is hugely satisfying to hear. 

In my case, I was born six weeks early and so they put me in an oxygen tent because my lungs hadn't fully developed. And the side effect of that was an initiation of a progressive hearing loss. So over the years, I've lost my hearing. I'm probably about 75 or 80 decibels down from normal hearing. But I've been wearing hearing aids since I was 13. 

So I'm more sensitive, perhaps, than many to accessibility problems not just for people with hearing problems but for anyone with a disability who needs some kind of accommodation. Of course, my accommodation has been hearing aids. But people who have motor disabilities may need wheelchairs, for example, or people with visual disabilities may need things like screen readers in order to make use of the worldwide web or they may need other kinds of assistive technology. 

So I've always felt that computers are probably the most flexible technology ever invented. I mean, there's no limit to what you can do as long as you can figure out how to program it. But the question is, how do we make these technologies adapt better to people who need some kind of assistance in their use? So at Google, we've spent a lot of time dealing with screen reader capabilities, dealing with automatic transcription for people who are deaf, and a variety of other kinds of accommodations. 

And of course, in my role at Google as the Chief Internet Evangelist, I would be derelict if I were not attentive to the need to make these systems more accessible in every possible dimension. So a lot of my motivation for my work is driven exactly by that, for inclusion so that everyone can make use of these capabilities. 

SPEAKER 2: This is great, because I remember at the beginning when I worked in a past life in an organization in Brazil who will provide software readers, et cetera. And one of the challenges they had was with the first wave of web mail solutions, web based solutions that made that it was impossible to read, it was impossible for the reader to figure out where to start and where to stop. And I see solutions like Gmail have progress and it is getting better. But what do you think, what other things that the industry can do to be more accessible and inclusive? 

VINT: Well, without getting too far down into specific details, let me just say that the programmers who are building applications for web based services absolutely have to understand and have insight into how to design software which is accessible or can be made accessible. And that means you really have to listen to people who use various assistive tools, like [INAUDIBLE] for screen readers or for that matter automatic transcription. We need for our programmers to recognize how to do this well, how to make things accessible. 

There's a real art to this. And I don't think we've codified it completely. So there's opportunity, I think, to train our developers to be more attentive to designing software that will work well with the other assistive technologies that are commonly in use. And I hope that-- Google, of course, we have regular training programs for helping our application developers be aware of what techniques they can use in order to assure that the result is more accessible than otherwise. But there's still plenty of work to be done there. 

SPEAKER 1: We have to talk just for a moment about the subject of your talk that you gave to us, the interplanetary internet. For people who are perhaps listening to the podcast now and weren't at the event haven't had a chance to catch up on the replay yet, can you just summarize what we mean by the interplanetary internet? What is it? 

VINT: It's basically an extension of the terrestrial internet except that it runs across the solar system. We expect to put relays, which you can think of as routers, in orbit around planets, on the surface of planets, on moons, and in the asteroids or maybe even in orbit around the sun. We've discovered that the TCP/IP protocols which work well on Earth in a low latency, high connectivity environment do not work very well in a high latency, high variable latency and frequently disrupted environment. So we've developed a new suite of protocols we call the bundle protocols that accommodate these variations in latency and connectivity. 

And we're anticipating using these standardized protocols, which have reached the point where IETF, the Internet Engineering Task Force, and the consultative committee and space data systems have standardized the basic protocols. So we're implementing those. We're testing them terrestrially. We have them on board the International Space Station. And we anticipate that they'll be used for the missions back to the moon, Artemis and Gateway, in the mid to late 2020s. So for our team at NASA and the other space agencies and the interplanetary networking special interest group at the Internet Society are all focused on maturing these protocols, testing them at scale in order to be assured that when they are deployed on an interplanetary basis they will work as expected. 

SPEAKER 2: Maybe this is going to sound like a silly question, but how did you end up getting involved with this topic with NASA? 

VINT: Well, it turned out that when the first successful mission to land on Mars in 1997, the Pathfinder mission, which was the first to succeed after 20 years of failure. I mean, we had the Viking mission landed in 1976. Two Viking landers. And then nothing worked for 20 years. And then the Pathfinder mission arrived with its little Sojourner robot vehicle. 

I went out to the Jet Propulsion Lab and met with the team that was working on the communication side of things. And we concluded in 1998 that what we should be doing is designing an interplanetary backbone network. So I became a visiting scientist at JPL and began work with that team on the bundled protocol designs. And since that time, I've become a member of the network or the NASA advisory committee in addition to my role with JPL. And all of the various parts of NASA or the various labs are participating, as are the European Space Agency and the Japanese Space Agency and the Korean Space Agency and the CCSDS group. So this has grown over the 22 year period into a very significant effort, all of which is beginning to come to fruition, which for me, of course, is extremely exciting. 

SPEAKER 1: Look, Vint, let's finish by talking about another topic of passion of yours. And it's a really important one, one that I guess becomes increasingly important and very relevant to some of the work that Airbus and Google are doing together in terms of transforming our ways of working digitally. And that's the subject of digital obsolescence. It's a real challenge. What are your thoughts here? What can we do about it? Or what should we be doing about it? 

VINT: So I wish I had a perfect prescription for this. Let me describe the problem. My big worry is essentially that digital content may become inaccessible over time, even if you've kept the bits somewhere. Let's just see, let's count the ways in which it could become inaccessible. Think of all the various media on which we store things. 5 and 1/4 inch floppy disks, 3 and 1/2 inch floppy disks, CD-ROMs, DVDs, Blu-rays, and whatever else comes. 

It's hard to find readers for some of those media, even assuming that the bits are still present in their magnetic form. So the problem is the medium could deteriorate or you couldn't find readers for it anymore. To make things worse, over time the software that might be needed to correctly render or interact with the digital objects may no longer run on operating systems and hardware of the day. So 100 years from now, will you still be able to correctly interpret a PDF file? And I know that Adobe, of course, wants that to be true. They have PDF/A, which is intended to be archival. But it still means that the software has to run. 

So over time, I think we're going to have to start practicing techniques to preserve digital content. And in particular, we need to copy information from one medium to another to make sure that we preserve the bits. And then we may have to either make our software more backward compatible as we have new versions of material for interacting with digital objects or we're going to have to document the hardware and the operating systems that are needed to run the old applications in order to interact with the old digital objects. And that means running, essentially, hardware emulation and running old operating systems. 

And you can imagine there are intellectual property issues, patents and copyright issues, associated with getting access to and using some of the older technologies which might still be under constraint, intellectual property constraint. So now we have to think our way through how we empower archives to have access to and use of and can share the use of older applications in order to make these older objects accessible. 

It's a very big challenge. It's not going to be perfect. And I'm not arguing we should save every digital thing. But I think if someone like you or me said, this is important to me. I want to preserve it. I want it to be available years from now. Then there should be means for us to do that. And that means getting the right technology and getting the right, let's say, legal frameworks in place to allow us to achieve that objective. 

Then there's one other little problem. Who pays for all that? How can we make this kind of long term archiving affordable? We have to build business models that will support that as well. So it's a very significant problem. But if we don't do something, the people in the 22nd century are going to be wondering what the hell happened in the 21st century when we can't read any of your email, your tweets, or any of your digital objects and documents because we don't have the software or the bits have disappeared. 

SPEAKER 1: I think they'll be pretty thankful if they can't read my mundane tweets, because there's a lot of them. But yes, the point is noted and it's an interesting challenge, I think, for the future. 

SPEAKER 2: It will be interesting to have digital museums in the future which mission will be to keep and to share with others the digital past. It's an interesting concept. 

VINT: Well just to interject, one other point here. When we use the world wide web, it feels like everything is there. You do a search and you find things that you're looking for. So it feels like everything you're looking for is persisting. But the honest fact is it is not persisting and that there are things falling out of the internet. You see this when you see 404 page not found, for example. 

So we should recognize that there is a real need to preserve this digital content for use if we can afford to do it. And we need to be able to introduce the methods that will make the older digital objects still accessible. So this is a very important problem, and Google really needs to be part of that solution as I see it. 

SPEAKER 2: Well, Vint, thank you very much. I think that's all for today. And once again, it's been a real pleasure to chat to you and thank you. Thank you very much for joining us on this podcast today. 

VINT: Let me thank you. It's an opportunity for me to engage with a lot of people that I don't know and perhaps someday we'll get to meet. And if I can't meet them face to face, maybe we'll meet on the net. 

SPEAKER 1: It's been fantastic. Thanks so much, Vint. 

VINT: Not at all. Take care, everybody. 

STEPHANIE: Wow, that was such an insightful conversation, because we rarely have the chance to hear from someone who's made such an incredible impact on the world as we know it today. What I loved about the conversation was he started off by talking about how his mission is to get the internet all around the world. Since day one he's done that, especially at Google. 

It's inspiring because I know that Google is very much the place where we are trying to do that. Between our work advancing the internet through everything from building open source protocols like gRPC, which is a high performance remote procedure call framework that can run in any environment, all the way to our work in the fiber optics space, advancing the efficiency of light travel, and literally bending the laws of physics. 

And then we're already extending Sub-C cables to parts of the world with less access to internet. And lastly, I have to mention our partnership with Elon Musk's Starlink, which is now being put right into Google's existing data centers to facilitate network connections for those on the edges of existing footprint. So it's pretty cool to see. I'm sure he is strategically influencing these spaces. I don't know if he has his hands in all of them, but he's definitely left an imprint. 

And the second thing that generally pleasantly surprised me was how he talked about the openness of the contributions to the early internet design back in the early days, how anyone could add a new protocol at any given layer. Anyone who had the technical opportunity to contribute vertically and horizontally could. And so it's really great to see that open architecture instilled by him and Tim Berners-Lee. It's kind of like the spirit of the foundation of open source software today and what the internet had provided since day one. 

ANTHONY: Yeah, absolutely. And we're still using TCP/IP. We're still using HTTP. Incredibly strong foundations. And I think it really is kind of the spirit of the development of the internet today. And I think that open kind of collaboration that they had back then is still alive today in a lot of the technologies that we provide in Google Cloud. From the data processing and analytics, a lot of open source technologies that provides managed services there. And of course, Kubernetes has an incredibly strong open source community that honestly is one of the main reasons for its success. So it's awesome to still see a lot of that collaboration and spirit that was there early on in a lot of today's software development. Those are a couple of great standouts. 

Another thing that I loved about the conversation was the talk about accessibility, both from Airbus and from Vint Cerf. And specifically with Vint Cerf, I think it was really awesome that he was vulnerable to share his own experience with his own accessibility needs around his hearing and just bringing that into software. Computers outside of all of the technology that we've developed as humankind, computers are probably some of the most flexible tech that we have. And so his mission as Chief Internet Evangelist was being able to take advantage of that flexibility and enabling developers to use that flexibility to make software more adaptable. 

And I think the most critical thing that he talked about, and Airbus was also thinking about this heavily, is how do you actually teach programmers to know how to make things accessible? Because as programmers, you may have differing needs from someone else who has other accessibility needs. So how do we commoditize or share that information so programmers do know how to make things that they could use but also how folks who have other different accessibility needs from their own, how they can also build stuff that they can use as well. So I think they talked a little bit about how Google has some training programs that we're working on. But of course, I mean, that's something we have to push forward not just as Google or Airbus or Vint Cerf but as the entire industry. 

And I think another thing, we were talking about this interplanetary internet. That was an incredible concept. And to see Vint sort of just pivot accessibility is one thing, very important, and then shift gears and talk about interplanetary connectivity. 

STEPHANIE: Yeah. 

ANTHONY: I'm still trying to digest that. I think it was funny that he worked on TCP/IP and then he's like, yeah, this probably won't work for space communication and space networking. So I was amazed by just trying to come up with new protocols that can accommodate the whole everything of space. 

STEPHANIE: Talk about shooting for the moon when you come up with your goals. I mean, it's taking them 22 years. 

ANTHONY: I mean, that's probably literally what they're doing is figuring out how to send these packets and all the things that would happen in between Earth and the moon. Just lots of network connectivity and stuff like that. So that was pretty cool. 

And I think one last thing that I wanted to call out is just digital obsolescence. I mean, just think back when you and I were kids, Steph, the type of technology we were kind of recording not just content but our memories, precious moments with family and loved ones, and how far that's changed. I don't think I could access most of that stuff anymore today, which was interesting to hear them talk about digital obsolescence and how important it is to preserve older forms of technology. 

STEPHANIE: Yeah, that's exactly what I was thinking of. I was trying to think of the last time I watched my baby videos on VHS. I don't even know if I have a player to do it anymore or anything compatible. I'd have to try to find one at a vintage shop and record it with my phone. So talk about lack of backwards compatibility. 

ANTHONY: Yeah. Imagine trying to do all that work just to get a VCR playing and then holding up your phone to a TV screen and then recording it that way. So I think it would be pretty cool to get to a place where Vint was sort of talking about where we have hardware emulation where we could actually maybe take some of those older forms and then be able to directly put that into modern day video formats and stuff like that. I mean, that technology does exist. But making that accessible, especially to archives and folks trying to document the most important things for humans. 

STEPHANIE: Yeah, it's just totally thinking outside the box and thinking 10x even in the '80s and the '70s, which is really impressive. 

ANTHONY: Yeah, absolutely. 

STEPHANIE: Yeah. Super fascinating conversation. So I don't know if we can top that next week, but we'll see. We always have a surprise in store. So stay tuned. But to wrap things up, Anthony, are you working on anything cool these days? 

ANTHONY: I guess one thing that I'm working on is some content for building scalable GKE clusters. And we already have a great amount of content out there, guides that will help folks build, again, some of the large clusters that I talked about with Apollo and what they're using earlier in this episode. But of course, Kubernetes is always changing. So looking to provide more updates and new content around that. 

STEPHANIE: Awesome. Already getting into it on the team. Yeah, I have a Discovering Data Centers episode about how networking works across and within our data centers. And it's a fully animated episode. So check that out on our YouTube channel. And I'm always releasing a bunch of content that I'm collaborating with others on, including Anthony, on my Twitter. So follow me @stephr_wong to stay up to date. And with that, thank you so much, Anthony, and thanks to the Gtalk Airbus and Google Customer Success Team. See everyone next week. 

ANTHONY: Yeah, it was awesome being here. Awesome episode, and definitely excited to see you all week to week. 

[UPBEAT MUSIC]