+++
audioDuration = "00:33:59"
audioFile = "Google.Cloud.Platform.Podcast.Episode.183.mp3"
audioSize = 49345200
categories = ["UX", "Design Systems", "Product Design"]
date = "2019-06-26"
description = "On this episode, our hosts Mark Mirchandani and Gabi Ferrara dive into Google Cloud Platform UX with guest Michael Kleinerman."
draft = false
episodeNumber = 183
hosts = ["Mark Mirchandani", "Gabi Ferrara"]
title = "Google Cloud Platform UX with Michael Kleinerman"
image="/post/episode-183-google-cloud-platform-ux-with-michael-kleinerman/images/hero/hero-EP-183.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/c5sw8u/episode_183_google_cloud_platform_ux_with_michael/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

On this episode, our hosts [Mark Mirchandani](https://twitter.com/markmirch) and [Gabi Ferrara](https://twitter.com/gabidavila) dive into Google Cloud Platform UX with guest and Google Product Designer [Michael Kleinerman](https://twitter.com/m_kleinerman). Michael's path to Product Designer started with "ancient" tech designing with Flash and 3D motion graphics and progressed from there through interaction designer to his place now with Google. His experience has helped him appreciate the many different kinds of designers needed for projects and how they have to work together for a good product.

At Google, Michael's team builds design systems that create a balance between what Google uses and what the products built on Google use. He adopted Material Design, which offers guidelines for patterns and components of design, to Google Cloud. Material Design spans across multiple devices and screen sizes to help simplify design across devices. When Cloud reached the enterprise space, where components can be more complex, Michael's team worked to adjust Cloud using Material Design so that features like tables would work correctly.

Accessibility is also a top priority for Cloud and the design team. To begin the process of designing for accessibility, the team finds the top three or so reasons that a user would come to their product and ensures those are accessible to all. The next step is to create easier usability in the second tier features of the product, and then all features beyond. Using a screen reader, they go through the product to see if it's usable, and really try to make the experience better.  The team also makes sure there are a lot of guidance pages as well. 

The goal in product design is to make things simple and consistent for everyone.

<!--more-->

##### Michael Kleinerman

Michael is a Product Designer at Google. He worked on Android and YouTube in the Bay Area before joining Cloud in NYC, where he started by leading the UX for Firestore until it launched in both Firebase and GCP. This work evolved into his current role on the core platform team, responsible for the design direction of the main design system used by producer teams to build and launch products on GCP.

##### Cool things of the week

* Committed use discounts at a glance [blog](https://cloud.google.com/blog/products/compute/new-report-shows-your-compute-engine-usage-and-commitments)
* Networking in depth [blog](https://cloud.google.com/blog/products/networking/google-cloud-networking-in-depth-three-defense-in-depth-principles-for-securing-your-environment)
* Chatbots with Dialog Flow [blog](https://cloud.google.com/blog/products/g-suite/keep-the-dialog-flowing-create-conversational-chatbots-in-hangouts-chat-with-dialogflow) and [video](https://www.youtube.com/watch?v=O00K10xP5MU&list=PLIivdWyY5sqK5SM34zbkitWLOV-b3V40B)
* Turn it up to eleven: Java 11 runtime comes to App Engine [blog](https://cloud.google.com/blog/products/application-development/turn-it-up-to-eleven-java-11-runtime-comes-to-app-engine)
* App Engine second generation runtimes now get double the memory; plus Go 1.12 and PHP 7.3 now generally available [blog](https://cloud.google.com/blog/products/application-development/app-engine-second-generation-runtimes-now-get-double-the-memory-plus-go-112-and-php-73-now-generally-available)

##### Interview

* Material.io [site](https://material.io)
* Material Design [site](https://material.io/design/)
* Firebase [site](https://firebase.google.com)
* Cloud Firestore [site](https://firebase.google.com/products/firestore)

##### Question of the week

[How do I work with my containers locally and then get them into the cloud?](https://cloud.google.com/run/docs/quickstarts/build-and-deploy)

##### Where can you find us next?

Gabi is done traveling.

Mark Mirch' is filming for customers in the Bay area.

Everyone else is just laying low for now!

##### Sound Effect Attribution

* "alert.wav" by danielnieto7 of [Freesound.org](https://freesound.org)
* "cell phone vibraion.wav"  by MrAuralization of [Freesound.org](https://freesound.org)
* "laugh crowd 2.wav" by  MrAuralizationFunWithSound of [Freesound.org](https://freesound.org)

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 183 of the weekly Google Cloud Platform podcast. I'm Mark Mirchandani, and I'm here with my colleague, Gabi Ferrara. Hey, Gabi. " >}}

GABI: Hello, Mark. How are you? 

MARK: I'm doing well. How are you doing? 

GABI: Good. I've been away, but I'm good. 

MARK: I feel like we haven't chatted since the last time we did a podcast. And it feels like it's been at least a month. 

GABI: No, it was at Next, so I think it was like two months ago, three months ago, almost. 

MARK: Oh, and that feels like years ago. So it has been quite a while. 

GABI: Yeah. Well, today, we're going to be talking about Google Cloud Platform UX. 

MARK: Very exciting. Looking forward to that. But before we get into that content, we do want to tease our little question of the week here. And I think this is one you know a lot about, because I'm really not certain of it, which is there's been a lot of cool stuff about Cloud Build and Cloud Run. But what is the simplest way for me in Google to work with these containers and then actually push them up to the cloud? 

GABI: Well, I'll tell you all about later how you can make your job easier with the containers to deploy on your Kubernetes in Cloud Run installation, so. 

MARK: I'm looking forward to that. But I do know that before we even get to our main content, we also want to talk about our cool things of the week. 

[MUSIC PLAYING] 

GABI: OK, you can start. 

MARK: OK, perfect. Don't worry. I've got plenty lined up here. The favorite cool thing I've had for this week is a recent blog post that was talking a little bit more about committed use discounts. So if you're not familiar with what they are they're basically a way of setting up a reservation and saying I'm going to use a certain amount of cores, or memory, or local SSD, or even GPUs over the next one year or three years. And when you do that, you end up getting those resources for a little bit cheaper. 

So if you've got these large static workloads, then it might make a lot of sense to say, OK, well, I know I'm going to be running a medium CPU, maybe two CPUs over the next year. So why don't I go ahead and pay a little bit less for them? 

And then there's also now a report that you can actually look at, an interactive dashboard that kind of shows you where your commits are being used. And you can look at it per project per region and say, OK, well, this is a good candidate for me to set up a committed use discount here because I've got all these cores that I'm statically using. So I find that report really exciting. And I think a lot of people can use that, along with just the general ability to save money. I think people are going to like it. 

GABI: Cool. Saving money-- nobody complains about that, actually, so. 

MARK: Yeah, it's kind of a universal, like everybody likes to save money. 

GABI: Yeah. So what I have to talk about, it's part of what we were talking before in the podcast on the network part. So it's a blog post that came out on the main blog post that we have on Google Cloud, talking about how Google, as a named leader, from the data security portfolio vendors from 2019 report increases your network security in the cloud by using three main ways. Of course, there are many other ways to do so. 

But those are the three main ways they go in depth on the blog post, which are secure your internet facing services, secure VPC for private deployments, and microsegment access to your application and services. I think the latter one is like what we call IAM. So take a look and see how you can make more secure your deployments on the cloud. 

MARK: Yeah, I think this is another post in that same line of blog posts that you just mentioned, the networking in depth series that just kind of deep dives on some of these cloud networking principles, especially for people who may not be as familiar with the cloud. They can be tremendously helpful. 

GABI: I don't know anything about that. 

MARK: Well, then, perfect. This is a great place to start. 

One other thing that I recently didn't know anything about and now still only know, just scratching the surface, we also have a cool little article about building chatbots using Dialogflow. So Dialogflow is kind of-- if I describe this correctly-- it's really like the way to build a chat interaction system, right? So you can understand what people are saying and then kind of create responses. And you can use some of the machine learning aspects. 

There's actually another really, really cool playlist called Deconstructing Chatbots that I highly recommend on the Google Cloud Platform YouTube channel that goes into a little bit more detail about Dialogflow and some of the other tools around it. But we've also got a team-based chat tool called Hangouts Chat, which is what a lot of us use here internally. And then people who use G Suite have that, so they can kind of communicate between their teams, share messages, and information. 

Well, you can actually build a chatbot with Dialogflow and easily integrate it into Hangouts Chat. So now if you've got repetitive work systems or things that you need to do on a regular basis-- I mean, I think the most common one that we probably use here is searching for hilarious animated GIFs and then inserting them into chat, a very common use case. 

But I built one or two test ones. It's very cool to think about how can I automate certain things, whether that's going to be setting up a meeting or even aggregating votes on things. I think there's some cool possibilities there. So it's super, super cool to see. 

GABI: Yeah, like alerts. Oh, the system's going down. 

[ALARM GOING OFF] 

MARK: Yeah, notifications and alerts. 

GABI: Yeah. So you don't actually wake up people at 3:00 AM in the morning. 

[VIBRATING] 

If people are already awake on the chat, you don't need to worry about that. 

[LAUGHTER AND APPLAUSE EFFECT] 

OK, and the other cool thing of the week that we have, it's in regards to App Engine. We updated the runtimes for several languages. And one of them is Java. It's running now the latest long term support version, which it is 11, although it's in beta yet. And also updated the versions for Go for 1.12 and PHP now the latest one, which is 7.3, which will give you more performance. And don't forget, you can all use all of those new runtimes on your free tier on App Engine. So just click on the link and give it a look. 

MARK: So lots of new options for people who are using App Engine or people who haven't started using it yet. They keep adding. I feel like every couple of weeks, we see more and more runtimes and more and more support added. So hopefully, that'll kind of catch a wider audience of people who are able to use App Engine. 

GABI: Yeah. Because there are languages that have LTS versions like every month. So hard to keep it up. 

MARK: Exactly. So the more support, the better. I think another thing that people like, besides saving money, is support for their favorite languages and staying on top of those versions. 

GABI: Yeah, because also, there is the part of security. If you're running an older version, probably there is known bugs, and that's not cool. 

MARK: Absolutely. Well, that's some very, very cool things of the week. But I think we should get right into our main contact with Michael, product designer. I think this will be a really fun one. 

GABI: Yeah, yeah. I'm really interested to know how we do things on UX on Google Cloud. 

MARK: Let's do it. 

[MUSIC PLAYING] 

GABI: So we are here today with Michael Kleinerman. He's product designer on Google Cloud Platform for UX. Michael, tell us more about you. What do you do? 

MICHAEL: Hi, thank you for having me. Like you said, I'm a product designer on the Google Cloud Platform team. Before joining Cloud, I worked on the Android and also the YouTube team in the Bay Area. And I moved to New York two years ago. So that's the time that I started working on Cloud, first leading the UX for Cloud Firestore, which was touching a little bit on Google Cloud console, but also the Firebase console. And after that product launched, I moved to the centralized design system team for Cloud, team that supports all the system components for the UI on the Cloud console. 

MARK: And if I understand correctly, you've also actually been doing this for a couple of different years from before you joined Google, right? 

MICHAEL: Yes, I had the opportunity to touch design systems since 2010 or 2011. And prior to Google, when I was working on Microsoft Xbox, it was like the initial work that was happening with Connect, if you remember. And so we had to-- 

GABI: I do. 

MICHAEL: --do the whole design system for this new input, which was like body gestures, and everything had to work quite differently. It was same for Android because I was part of the team that worked on Android TV. It was the first time that we were kind of like forking the OS to work on different platforms and different device form factors. So we had to also rethink what is the new design system? How do all the components and UI widgets now work for the TV? Kind of very familiar when I started working on that in the Cloud Platform. 

GABI: How does one become a product designer? What did you do in college? What attracted you to this field? 

MICHAEL: Yeah, so that's a good question because I did so many things before landing in UX. I think my background is in 3D motion graphics and new media, so everything that was happening back in the day with Flash interactive websites. I was doing CD ROMs with Macromedia Director, all the ancient stuff. 

And I worked on an agency where our job was-- yeah, just like an agency. We took care of all the clients' needs, including branding, logo design, motion graphics, web designs, all sorts of things. It was really good for me to just get a breath of work in graphic design and just design in general. And at that time, it was starting to become a more defined role, like interaction designer. 

And so I moved at that point to Seattle and started working for Microsoft. And there were like actual interaction designers there. And so I thought, wow, this is falling from heaven almost. Everything that I've liked in the design world so far, so [INAUDIBLE] up into this amazing role of becoming interaction designer, thinking about everything end to end from visuals to audio, to flows, and mental models, and psychology, and research. And I just fell in love with it, and so ended up following that path to what I do today. 

MARK: So this is a question mostly born of my own ignorance. But how come nobody appreciates interaction design? And is that correct? Because I kind of get the feeling that a lot of people don't think about it first and foremost and in fact, don't think about it at all sometimes. 

GABI: But isn't that a result of good design if you don't think about it as a user? 

MICHAEL: Yeah. I think that's right. If it becomes-- the interface is invisible and the interaction designer has worked on that so hard to just really get out of the way, then yeah, you should strive for that. But yeah, I guess that's the other angle of that question. For example-- I don't know-- if you have a startup, you're thinking, oh, we need designers because it's the trend, right? We just see it everywhere. And you just happen to hire visual designers because you think that's all it's encompassing, right? 

I've seen a lot of scenarios like that. Yeah, you end up having some gaps. I've known a lot of visual designers that end up understanding so much of everything. And they know how to prototype, and their skills are just amazing. But some are just kind of like coming out of a background that is just very focused on that. And so you can't really expect to have a visual designer think about all the other aspects of all the other design disciplines. 

So I agree with you. Sometimes it's easy to think that, yeah, the disciplines are all the same, right? But nah, this is why you have a specialized motion designer, a sound designer, an interaction designer, a visual designer, and so forth. 

GABI: So how designing systems at Google works for you? How is this process? 

MICHAEL: So I guess there's two audiences, right? For me who I'm trying to build a design system on top of material design, I'm having to sort of build a context between what Google uses and then what products that are built on top of Google are using, right? And there's a designer like that, actually consumes what we currently have under Google material. 

And they just go to like, a website like material IO, which is you know, where you just find guidelines for all the patterns and all the components. But so in my case, when I joined Cloud Firestore, what I had to do was adopt material design for the first time. Nobody in cloud had any parts of the UI in the material design language. It was still I think called Kennedy like, before they launched the material design. 

So it was really tough, because it was like, the very first product that was trying to do that and it was still catching up, because at that point, they were launching already, the second generation of material design. And we were just like, trying to start with the first one. 

MARK: And to take a step back here, could you define material design? 

MICHAEL: Yeah, sure. So material design is kind of like, the first design system that it was like, driven by Google to understand how the components and patterns work across different types of devices for different screen sizes. So there were other design systems out there like Bootstrap, things like that where you have a library of widgets or a library of components where like, a designer a developer can just like, start using as boilerplate to create any website. 

But nobody had really like, thought, OK, now we're looking at watches and phones and TVs and everything. And how would design a system that spans across multi-device platforms would work? And I think that's how it started. 

MARK: Gotcha. So you were talking about how you were working with the Cloud team in helping them implement design, but they hadn't really caught up to material design. 

MICHAEL: That's right. We're specifically talking about the Google Cloud console. Firestore-- I don't know if you guys were familiar with Firestore-- but it lives in both consoles, Firebase and Cloud. So there's a completely different design languages there. 

Firebase, I think they were a little bit ahead. They were already adopting the material design and like, the roundness of the buttons. They already looked like material design and the negative space and the white space that you would see on every single page was like, already like, speaking that design language. And on Google Cloud, we just hadn't got there. And so like, that was kind of like, the first thing that I did as I was like, building the UX for Firestore, I was also trying to figure out how do we just like, start implementing all these new components that are coming from material design? 

GABI: So all of these creative ways you do to make UX design for the user, how do you reach those conclusions? Is that a design process? Is there research? What do you do? 

MICHAEL: So you mean for implementing the design system? 

GABI: Yeah. Like, you do a decision. Like, let's say, oh, this menu should not be this size because x, y, and z and the research shows that these would be worse. I don't know. Decisions needs to be made. And what do you base those decisions on? 

MICHAEL: Yeah. So I think at the like, foundational level, which is what we get from material design team, they had to go through a lot of that. Like, they had to go through a lot of testing and research to figure out what is the right size for a button or like, the tap target for making it work on all different devices, contrast for accessibility. I guess that's all the requirements that have to go for that design systems to be published for everyone to start using it. 

The same goes for cloud. So what's been happening is that the initial design system that was composed under material design was almost focused on consumer products. And cloud starts reaching this new space, which is called Enterprise, where you are thinking about components that are a little bit more complex, like tables that need to account for millions and millions of columns with raw data coming in like, super fast and things like that. 

And that was not kind of like, part of the library of components. So we do the same sort of process, like we test the functionality of every single element in that table, the accessibility of it until it reaches all the requirements. And then we can say this is ready for people to use it. 

MARK: You mentioned a little bit just earlier about accessibility. You know, Google has some pretty tremendous accessibility guidelines built into everything we do. How does that kind of play together with the visual design-- not just the visual design, but the instructional design-- all of the design? Right? Like, everything you're building, you also need to keep accessibility in mind. How do those kind of interplay together? 

MICHAEL: Yeah. So it's like, a super top priority for cloud. And Google has different sort of like, requirement levels that you also might need to decide as a team like, which one are we shooting for, at least this year or this quarter? And basically, I think they fall into primary use case. Like, in your product, you always know like, what are the top three sort of like, flows or tasks that a user comes to your product to solve or to do? And so focusing on those main ones could get you to like, I don't know, like, the first or the second level of accessibility requirements. 

Now if you keep fixing accessibility issues for the secondary use cases, then you can get to the next level. And we're actually now thinking what happens beyond that last level, which is really going through a screen reader for example, experience where you can actually accomplish everything you do. But it's not a nice experience. Not as delightful as I don't know, what you would see on YouTube when you upload a video or something like that. So really focusing on how do you really make the experience better for people with any disability? 

And I guess the other aspect is from the design system point of view, how do you make sure that there's a lot of guidance also for people that are consuming the components and the patterns that you have in the design system like, website? So not only at the component level, but at the page level. We already know like, people come to the cloud design system to create some sort of page that lists all the resources, like, the resources being like, all your virtual machines or all your buckets from storage or databases or data sets from machine learning models. It doesn't matter what it is. We kind of know that that's a pattern. And we provide guidance for accessibility, how to traverse through the whole page. 

MARK: So that's really interesting, because you were just mentioning that cloud-- even inside of cloud Firebase had already kind of adopted a lot of these guidelines and was at a different place, even though Firebase is under Cloud. And you were also mentioning earlier that you worked on the YouTube team and the Android team. So these are all different guidelines and they're at different places in terms of the material design. 

What do they do the same? And what are they doing differently? And why aren't they all kind of at the same place? 

MICHAEL: Yeah. So with Firebase, it's like, a very unique case. And I think it does have like, a similarity to YouTube in the sense that it's all part of Google, but they have their own brand. So they're not really consuming material design or Google material design exactly as a Google product, a product is branded by Google. So YouTube and Firebase are like, these two snowflakes. And what they've done is basically, they break a little bit of the style of the entire design system to fit their brand. And it works. 

Like, in the case of Firebase, their audience has always been almost like, entry level developers or even startups. What they want is just to make it like, super easy to just get started with an app, an idea, even if it's a prototype or something. And they give you all the stuff that you need in there to get started very quick. If you scale, then you can almost graduate cross that big bridge to the Google Cloud Platform to then start using all the other bells and whistles, analytics, and machine learning, and all that stuff. 

The difference that I've seen, for example, on cloud and all the other products specifically, Android and YouTube where you draw this difference between the consumer world and then the enterprise world. And I think we all empathize with consumer. Like, it's all the apps that we use, Google Maps, everything we use today. 

And so it's kind of like, I think, easier to, as a cross-functional team, you know, like, design something that is easy to use when you have PMs and engineers and designers and researchers, and the entire team is all like really focusing on making it super easy. With the Enterprise world, it's a little harder, right? Because not everyone's going to be using machine learning model and Google Cloud. Like, I don't know how to do that. So it starts getting kind of tough. 

So there's a lot of like, preconceptions I feel like. How much information do you need in the screen? Or like is this you know, OK for data scientists? Like, there are things that we don't know. 

It's still very, very early for us to start figuring out how the consumer and Enterprise products should merge, and should start thinking the data scientist is no different than my mom that is using YouTube. Like, we're just humans. Like, how do we make it simple and consistent for anyone? 

MARK: In my knowledge of enterprises, most of them have people in them, right? And people tend to be the same. Maybe that's a bad assumption? I would have thought that the design principles would apply equally, but I guess it sounds like, as you're saying, there are a lot of different factors to take into consideration when designing these systems for almost different personas. 

MICHAEL: That's right. 

GABI: Is there any resource you would like to share about the job you do if people want to get much in-depth in the subject? You mentioned material design. I think it's one of the sources. 

But what people should be looking for to make their products more accessible and more efficient? Like, here, we have the guidelines as you mentioned, for cloud, for YouTube, for Firebase. But in your opinion, where can they get more in depth and like, adopt best practices-- would be best practices I think, for product design? 

MICHAEL: I think the material.IO website is like a really good place to select stay up to date. They're updating that website frequently. And yeah, just adding like, all the new hotness that my designers or even teams that don't have designers should be like, learning from. So I think that's like, a really good resource. I know other accessibilities like centralized websites within Google, but not entirely sure outside of Google. 

MARK: Yeah. I think it's interesting, because there's no Universal, this works for everybody design. There's no universal, this kind of works for everybody accessibility. You said you worked with a couple of companies, including Microsoft, and then maybe a smaller agency before working at Google. What does that look when you go from one place to another? And how does that kind of influence your thought about the design systems that you're building? 

MICHAEL: Yeah. It's crazy how like, moving to big corporations, you feel the difference. Also at that point, you're not just designing something and trying to make it fit your needs, but you have to start with trying to understand how to consume the already in place design system. So that's one of the goals of designing systems. You're supposed to build new things that are coherent with the rest of the design language or family of components. 

That's definitely like, a big difference that you would feel from like, a startup or like, a place where you're still not there in terms of clear plan to reuse components as much as possible. But you're just like, everyday faces of building. And I think building reusable components come much after. So it does feel quite different when you join a big company and then all those reusable components are already in place. 

MARK: What you were talking about with kind of going to a new company and joining all their assets, what we've seen-- and this hearkens back to you working at Microsoft-- you're talking about the Kinect, because it was very interesting when the Kinect was out. To people who don't know, the Kinect was-- I'm not sure if it's actually still around or if they're still working on it as a separate tool-- but it was a peripheral that you could attach to your Xbox. And it would read you with multiple cameras. And you could basically interact with your Xbox through hand motions and gestures and a microphone as well. So it was a brand new paradigm for interacting with your TV at that time, because most people were playing games with controllers. 

And we saw a really interesting kind of almost two interfaces mixing together when you had your controller level interface and then you had the Kinect interface. And I think after the Kinect was out for a little while, they almost merged those together. Or they tried to create an interface that worked for both. And I had a Kinect and I had an Xbox. And I play a decent amount of Xbox. 

I thought it was really interesting because some of the design decisions, in my opinion, were actually worse on the controller side, because they had tried to fold in the Kinect one. So that's a very concrete example. But I guess you know, in terms of the long story there, the question is, is how do you make those kind of decisions, especially when you're talking about adding a new redesign? 

MICHAEL: Yeah. That's an interesting story where we were just dealing with an unknown. No one had ever done hand-body gesture UIs. And there was like, nowhere else to go and find references or inspiration or research that was applicable to what we're trying to do. So I think what was happening also, was hypotheses that it was like, the best way for you to start using the UI, pick the game or pick the movie or whatever you were trying to do. 

And that way you wouldn't have to pick up the controller. And I think even the tagline was like, you are the controller or something like that. And it turned out that, yeah, it was not nice to use your hands to get to the content you were looking for. So it was better to use the smarts of Connect to play games, because it was challenging. 

Like, if you were playing like, I don't know, a tennis game, you're using your hands and you were missing or losing, it was fun. It didn't matter, because like, you were just like, excited to just continue playing. But that same mental model doesn't apply for you trying to find a movie or a game in the UI. It's frustrating. So I think that's when they deviated. 

I really don't know what the answer is today, because I haven't played in a long time. But they deviated. And when do you use each controller for what? 

Or each input is good for certain things. And how do we make sure that we teach people when to use each? And what are the strengths of each of the we're offering people? 

MARK: I would love to see a follow up conversation. I mean, I'm assuming you still have some contacts, but can we just get someone from Microsoft, someone from Sony, someone from Nintendo? Can we all just sit down in a room and like, hyper-analyze their video game platforms and talk about the design? 

[APPLAUSE] 

All right. B2, we're going to leave that one to you. Awesome. Well, thanks so much for joining us Michael, and teaching us a lot about kind of the thought process that goes into design. 

MICHAEL: My pleasure, thank you. 

GABI: Thank you, Michael. 

MARK: Very cool talk with Michael. Super, super glad that he had a chance to sit down with us and tell us a little bit more. I wouldn't have really known-- I mean, product designer, it's such a important part of what literally, everyone uses when they have to use a platform. So I think it's really fascinating to see, look, there's a lot of thought that goes into these decisions. 

GABI: And responsibility and implications too of decisions that people do. So that was very enlightening. 

MARK: So in another form of enlightenment, I'd love to ask the question of the week. 

[MUSIC PLAYING] 

So my question was really about how to work with containers locally and then kind of put them in the cloud? So we know that you can build a container using Docker. And then you have to submit it. And then you have to put it up. And then you use a built system. 

And then you have to put it in the cloud. That seems pretty complicated. Could you kind of walk us through one of those steps are necessary? And what makes sense? 

GABI: So when I first started with Kubernetes, for instance, and I did not know much about Docker, and in fact, used to be a thing that I love to hate, because I didn't understand how it worked. And now I do. I think other setup with how it works. And a lot of the menial tasks I discovered, can be really simple if you're using the cloud. For instance, if you're running a code locally, and let's say, you are in a place. You don't have good internet, and you cannot do those Docker pulls to download all those images, neither to push your image to the cloud so you can deploy into Cloud Run or Kubernetes, for instance, or even a compute engine. 

So what you can do-- and it saves a lot of time-- from your terminal, you can use the build commands from G Cloud. And say to submit the code that's on that root folder. And once you do that, it's going to do for you the Docker build, the Docker tag, the Docker push, and in the end, send it to Container Registry. It's going to be available for all your projects on GCP. So you win-win situation, you know? You don't use your internet. 

You just use Google's internet to do for you. And everything else is just fun. Then you can deploy into Kubernetes on Compute Engine, or even on Cloud Run just with simple command lines. So I think using Cloud Build, it's going to save a lot of development time on your day to day task. 

MARK: Yeah. I mean, it sounds like a one line command that replaces probably five or six different processes, all of which had their own little nuances when you had to run them. So super happy to see that it's a lot simpler than hopefully it used to be. 

GABI: Yeah. And you don't need to have that much knowledge of Cloud Build. You don't need to create fancy things. If you just want the basics, and usually when you're creating proof of concepts, that's just enough. And that helps a lot. If you want more, you can dig into Build on the documentation that's on the blog post. 

MARK: Yeah. I think we've seen some pretty cool customization to it that you can set up really complex build pipelines. But it sounds like even without setting anything up, just the ability to speed up container building and deploying is awesome. 

GABI: I agree. Because nobody wants to stay there pushing an image to the internet over 3G or airplane internet. 

MARK: That is some universal truths this episode, right? Everyone likes money, nobody likes to spend time, wasting it doing nothing. I think everyone can relate to this episode. It'll be very relatable. 

[APPLAUSE] 

GABI: Yeah, I think so. It's a nice one. 

MARK: So I know we're almost out of time here. So where are we going to be? Gabi, you have any traveling coming up? 

GABI: Not for a few months. I'm going to be staying here in New York just doing my stuff. 

MARK: You know, I've been looking at a couple of calendars. And I think that is going to be the reoccurring theme of our entire team here. Yeah, I mean I'll pretty much be staying in the Bay Area. I'll be filming with some more customers. 

But in this case, it'll be down in South Bay, which is thankfully, pretty close to San Francisco. So I'd still call that pretty local. And then Brian, Ajah, Michelle, John. Mark, everyone seems to be staying pretty close to their home offices. 

GABI: I don't know, Mark just announced some conference. Don't know when is the travel though. 

MARK: Yeah, I have no idea. So relatively quiet. And then hopefully the next time Mark Mandel is on, he can tell us a little bit more about where he was going. 

GABI: Yeah, yeah. Curious to know more about it. 

MARK: Awesome. All right, well, thanks everyone for listening. And we'll talk to you all next week. 

GABI: Talk to you next week. 

[MUSIC PLAYING]