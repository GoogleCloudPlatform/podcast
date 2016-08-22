+++
audioDuration = "00:33:59"
audioFile = "Google.Cloud.Platform.Podcast.Episode.5.mp3"
audioSize = 48943905
categories = ["Compute Engine","Tools", "Kubernetes"]
date = "2015-11-25T15:54:26Z"
title = "Google Cloud Developer Experience with Chris Sells"
episodeNumber = 5
description = "In the fifth episode of this podcast, your hosts Francesc and Mark interview Chris Sells, Product Manager at Google."
draft = false
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/ZethzodjGW5"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/3u8ayq/episode_5_google_cloud_developer_experience_with/"

+++
In the fifth episode of this podcast, your hosts
[Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic) interview
[Chris
Sells](http://www.twitter.com/csells),
Product Manager at Google.
<!--more-->
About Chris:

Chris Sells has been a software engineer of one kind or another since he
was 14 years old. He's worked at Intel and Microsoft, has started his
own companies, has written a dozen books, given countless conference
talks and has done everything from QA to developer, consultant to VP,
technical support to CTO, chief architect to conference organizer.
Currently, Chris is a Product Manager at Google focused on tools for
cloud developers.

You can contact Chris at:

-   Email: [csells@google.com](mailto:csells@google.com)
-   LinkedIn:
    [http://www.linkedin.com/in/csells](http://www.linkedin.com/in/csells)
-   Twitter:
    [@csells](http://twitter.com/csells)
-   Blog:
    [http://sellsbrothers.com](http://sellsbrothers.com)

Links:

-   Custom Machine Types
    [documentation](http://googlecloudplatform.blogspot.com/2015/11/introducing-Custom-Machine-Types-the-freedom-to-configure-the-best-VM-shape-for-your-workload.html)
-   [Cloud Source
    Repositories](https://cloud.google.com/tools/cloud-repositories/)
-   [Deploy a sample application using
    Node.js](https://console.developers.google.com/start)
-   [gcloud-intellij on
    GitHub](https://github.com/GoogleCloudPlatform/gcloud-intellij)
-   Language-specific getting started pages for
    [Node.js](http://cloud.google.com/nodejs),
    [Python](http://cloud.google.com/python),
    [Ruby](http://cloud.google.com/ruby) and
    [Go](http://cloud.google.com/go).
-   Horizontal podcast autoscaling for Kubernetes
    [documentation](http://kubernetes.io/v1.1/docs/user-guide/horizontal-pod-autoscaler.html)


{{< transcript "FRANCESC: Hi, and welcome to the fifth episode of the weekly Google Cloud Platform podcast. I'm Francesc Campoy, and I'm here with my co-host, Mark." >}}
MARK: Hey, Francesc, how are you doing?
FRANCESC: Pretty good, pretty good. So today we're gonna be talking with someone from Google.
MARK: Yeah.
FRANCESC: A product manager that is responsible for developer experience?
MARK: Yes, Chris Sells.
FRANCESC: Yup.
MARK: Also very excited, as per usual for all our interviews. I think it's gonna be an interesting podcast that's gonna sort look into the hows and whys we make the decisions that we do and sort of give you some opportunities to provide feedback so you can help direct things as well, so that's pretty awesome.
FRANCESC: Yeah, I think it's gonna be quite interesting to interview someone that has such an interesting view of the tech industry in general. He's been working so many cool companies that I just--his opinion by itself is amazing. The fact that he has the power of changing Google Cloud Platform podcast and--Google Cloud Platform, sorry, and the way we use it, even more interesting.
MARK: Even more interesting. But let's talk about cool things of the week. There's been a really nice launch recently that I think's quite interesting and exciting, custom machine types.
FRANCESC: Yeah, so custom machine types, what is that? So so far we've talked during one of our first episodes, actually, about Google Compute Engine and how you can create instances, so basically those are VMs, and they have--we used to have--or we still have them, actually, a list of types of machines that you can get, so you can get, for instance, the standard one, which is--what's the name, again?
MARK: N1 Standard 1.
FRANCESC: N1 Standard 1, or Standard 1 N1, where basically what you're saying is, "I want one core and a decent amount of memory, not too much, not too little," and then we also have--so with 2 cores, 4, 8, 16, up to 32, and then you can choose if you want the more CPU or more memory, but that was pretty much it, so if you wanted, for instance, to get a machine that had 32 CPUs but you didn't really want that much memory 'cause you were doing something that was really, really computation-heavy but not that much memory, you didn't really have an option, so--
MARK: It kind of--it kind of was cookie cutter, you know? Like, you got, like, one size fits all, so [inaudible]. I mean, more than one size, but--
FRANCESC: Yeah, so many--many different sizes but not enough.
MARK: Yeah.
FRANCESC: So we basically fixed that glitch, so we added--now when you create a new instance, you actually have in the menu a way to choose between either the default types or you can create your own type.
MARK: Wow, that sounds cool. So I can basically say, "This is how much CPU I want. This is how much memory I want," and I can custom fit it, basically, to whatever my needs are?
FRANCESC: Yeah, exactly, so you're gonna have two sliders. One is gonna be for the number of CPUs. The other one is gonna be for the size of the memory. That's it, and you choose whatever you need.
MARK: That sounds really awesome, so--
FRANCESC: And the best part is the price adapts to that, so if you're gonna use less memory, you pay less, so that's great.
MARK: Yeah, so, like, also if I was running my own machines, maybe, like, on-prem or something like that and I want to try and sort of match those in some way, I can be like, "Oh, no, I can build my machine spec to match that exactly," or [inaudible].
FRANCESC: Yeah, and also what I was thinking is that you can also u--do tests on it and see, for instance, what is the minimum amount of memory that you need to actually run your app, so you can do that. Just start your instance, do some tests, and see how it behaves, and do it on different kinds of machines to actually be sure that the instances that you're using are the best-suited for what you want to do.
MARK: Wow, okay, that sounds super, super powerful. Well, we've got a link in the show notes to the blog post that describes this and, obviously, the documentation as well, so that sounds really great. So why don't we get into our interview with Chris? It sounds like it's gonna be great too.
FRANCESC: Okay, let's go for that.
MARK: Brilliant. 
FRANCESC: So we're here with Chris Sells. Hi, Chris.
CHRIS: Hey, guys.
FRANCESC: And you are a product manager here at Google Cloud Platform for development experience. So tell us a little bit about what does that mean?
CHRIS: Sure. So what that means, fundamentally, is, you know--well, let's see. Let me say it this way. The old CEO at Microsoft, he would say--he would leap up on stage and say, "Developers, developers, developers." That's what I do. I care deeply about making sure that developers on the Google Cloud Platform have the tools that they need to be happy and successful.
FRANCESC: Cool. So developers, developers, developers, and tools? What are tools for you? What are those tools for developers?
CHRIS: Sure. So--and in fact, that's actually kind of an ongoing issue 'cause pretty much anything that you can talk to on our platform is a tool, from the APIs to the command lines to the web to the IDE extensions, right? I mean, you can think of anything as a tool, but fundamentally, what I care mostly about is making sure that you have a good way to write your code to target our platform, so that's bring your own editor, that's use Eclipse, use Android Studio, use other IDEs that we either plug in directly or work with partners like JetBrains to make sure work well, that's bring in libraries that work really well for your particular language and program against not just the Cloud APIs but all of the Google APIs. That's being able to test your code locally, make sure it runs the way you would expect. That means being able to check in your code. That means being able to package your code and deploy it to our platform, and then once it's there being able to debug problems, being able to look at logs, being able to just find issues and fix them and, you know, the cycle goes on and on, right? That range of tools through the whole set of developer lifecycle for a piece of software, that's the set of things that I push on.
MARK: So not much, not much at all, really. It's very little.
FRANCESC: It's a couple things.
MARK: Couple things, very--not a very busy fellow, really.
CHRIS: Well, it's funny you say that, but I feel pretty busy.
MARK: Yeah, that's--I'm not surprised by that in the slightest.
FRANCESC: Shocking. So there's a lot of different things going on in there. Could you talk a little bit about what are the last pro--the latest projects you've been working on?
CHRIS: Sure, so very proud, in the last few months we have released kind of language-specific getting started pages for the Google Cloud Platform across four languages. Up until now we've been really good about, "Hey, you want to learn about GCS or DataStore or CloudSQL or App Engine or Compute Engine?" right, kind of from a product point of view, but a lot of developers kind of consider themselves by language first, right? For example, they go to Google, and they type, "Node, how do I?" "Python, how do I?" right? I mean, that's how they think of themselves, right? I'm a Java developer. I'm a Ruby developer. And so we weren't doing a very good job of kind of thinking about the end-to-end development story from how developers identify themselves, from a specific language, so what we've been doing is thinking about the set of server-side languages that we really want to push on and then making sure that developers have a place to go, a home for that particular language on our platform, and we've launched four of those so far, so if you go to cloud.google.com/nodejs, /python, /go, and /ruby, you will get our first four language starting pages, right, entry points into our platform for those languages.
FRANCESC: Nice. So I'm assuming that includes the how to use the APIs idiomatically and so on?
CHRIS: It does. It does, yes.
FRANCESC: Does it--does it also include things like, for instance, if you're a Python programmer, you might be using Flask--on how to use those very popular libraries on our platform?
CHRIS: Sorry. That wasn't surprising. I just had a cough. So the answer is for our initial landing page we've got--for all four of these languages, we've got two samples, kind of a hello, world, what's the minimum you need to do to bundle up some code in that language and get it running on our platform, and then we've got a bigger sample which takes you through a tour of some of the technologies around our platform, and that's what we have right now, and what we've done for each one of these languages is we've picked a single framework. For example, for Ruby we picked Rails. Of course, Node is built right in, right? That's the framework we use there, and we've started there. Over time we have all kinds of plans to make sure we cover, you know, the set of popular frameworks and the set of popular tools and, you know, "I'm a Rubyist. How do I do this and that thing that I as a Rubyist want to do?" and et cetera, and we have big plans for expanding that to cover those, and then what I'd really love to hear from your listeners is what they would like us to do, right? On, you know, what does a Ruby developer want us to cover, make sure that we have instructions on how to do, or Python or et cetera? So that's part of why I'm here, to kind of let folks know that there's somebody at Google watching their backs as a developer from all of this set of languages, and if there's something that you need from a tooling point of view, I'm the person you can reach out to, and if I can't get your question answered or tell you where we are on a feature, then, you know, I can hook you up with who can.
FRANCESC: Nice.
MARK: Nice. So you mentioned that four languages got released on the platform. Of course, now I have to ask which one's your favorite?
CHRIS: Actually, it's funny you ask that. I, like every developer that's ever picked up JavaScript, have gone through my five stages of grief, right? Right, I started at denial, "Oh, my lord, I can't believe somebody thinks this is a real programming language," and went through, you know, anger and bargaining, and I went through the whole thing, and I eventually ended up at acceptance. I--for--both from a client programming point of view and a server programming point of view, of that set of languages, I would have to say that Node is my favorite. JavaScript is my favorite, which you have no idea how hard it is for me to admit that in public. Hello, my name is Chris Sells, and I like JavaScript, right? That's just--
MARK: Oof, [inaudible] people.
FRANCESC: Yeah.
CHRIS: Yeah. And this is after--I mean, to be clear, my language history, I spent probably ten years in C, ten years in C++. There was an overlap there, of course, and then I gave all of that up for C#, and I did C# for more than a decade, probably. I've done a bunch of C# work in the Windows world, and then right before I kind of came over to Google, there was a period of a few years where I did a bunch of JavaScript work as part of the Windows 8 kind of developer experience for JavaScript, and that's where I kind of picked it up, and at one point--you know, I don't know how you guys are, but I dream in code sometimes, and I woke up, and I had to think, "Wait, what language was that?" Because it was so natural, I didn't know was it JavaScript? Was it C#? And I knew that I had been infected with JavaScript, right? That's when I knew the process was complete.
FRANCESC: I like the idea of talking about JavaScript from an infective point of view. So you mentioned that you try to get feedback directly from developers. So one way of getting that, of course, is developers going to us and talking to you, sending emails or opening bugs, and so on.
CHRIS: Yes, yes, yes.
FRANCESC: What are the other ways you find out what kind of features to add or what kind of documentation to improve and so on?
CHRIS: Actually, that's a really good question 'cause the fundamental job of a PM here at Google is to understand the customer needs and in many cases to be the customer proxy, right? To bring in customer requirements and represent them to the engineering team and convince them that this is a good way to go 'cause none of the engineers work for me at Google, right? It's not like at Microsoft, right, where, you know, the PM got to say, "Jump," and the engineers said, "How high?" That's not how it works at Google at all. It's very much engineering-centric, so it's my job to have data, and that data comes in the form of--we do surveys a lot. We do something we call critical user journeys where we kind of lay out an end-to-end scenario and have our customers with our user experience researchers work their way through these scenarios and see how well they do, and we take, you know, both completion metrics, which is quantitative, and comments, verbatims along the way, which is qualitative, so we lean on that kind of data a lot, and then we lean on customer sentiment as well, right? We get to see what people are doing on Stack Overflow. We get to see what people are doing on Twitter. We get to see what people are doing on our Google Groups, and all of that kind of forms the basis of, really, a ton of data that we've got that we use to inform our decisions about what to build and when to build it and how important it is and how to focus our product planning.
FRANCESC: Very nice.
MARK: Very nice indeed. You mentioned previously, you talked about sort of IDEs and some integration there and some partnerships. Personally, I'm a huge IntelliJ fan. I know that, but can you tell us some more about what's happening in the sort of the IDE space, maybe specifically IntelliJ 'cause I'm watching that a little bit, but I'd love to hear more. I'm sure there's a broader spectrum of people other than just what I specifically want to hear about.
CHRIS: Well, absolutely. So we have--we shipped, at the beginning of this year, an extension to Android Studio called Cloud Tools for Android Studio, although it's bundled right into Android Studio. You don’t' have to install it separately. It just comes out of the box, but essentially, what it enables is you to be a full stack developer inside of Android Studio. You can build your Android client. You can build your Java-based GCP backend, and we'll even build a client library, and as you change your backend, we'll update the client library and make sure that, you know, if there's a change, then you don't get a compiler error, and you get intelli--or statement completion and things like that, right? So we built that into Android Studio, and that's been shipping all of this year, and we found that to be very popular, but as you know, or maybe you don't, the Android Studio is, in fact, a fork of IntelliJ Community Edition, right? The open source--
MARK: I know this, yeah.
CHRIS: Yeah, so--I figured you would, yes. And so as you might imagine, it's not very far for us to go from, "Hey, let's extend Android Studio," to, "Let's extend IntelliJ altogether," right? And so in fact, we have a GitHub repository with our--the source code of a Cloud Tools for IntelliJ that's in the works. It's not as full-featured yet as the Cloud Tools for Android Studio, but we're working on it, and we hope to have that not only updated in the repository but to have a binary distribution by the end of the year so you can actually deploy from inside of IntelliJ to our platform.
MARK: Nice.
CHRIS: And right now what the IntelliJ plug-in does, it actually attaches to Cloud debugger, so I don't know if you guys know how Cloud debugger works, but for your listeners, the way Cloud debugger works is you have your running Java application, for example. We're talking about Java now, but you have your running Java application on our platform, and, you know, there's some hard-to-find bug that only happens in production, right? You can't reproduce it on your development machine. You can't reproduce it internally. These are the ones that kill you, right? That now you're adding--you're inserting log--printf statements every other line, right, to figure out what's going on, and so what we do in the Cloud debugger is you can actually pull up the source code for the application in production and set what is the equivalent of a break point except we don't actually break. We never stop the process. We don't--in fact, the user can't even tell. We make sure that we don’t spend more than 10 milliseconds grabbing the data, and that's the call stack, and that's the locals so that you can take that data and dig into it as much as you want to without harming the user experience, and you can track it down, what the problem is that only happens in production. Now, that works all great on the Cloud, but for that to happen, of course, you need to give us your source code, so in a lot cases we find that our customers are enterprise customers, and they don't have permission to give us our source code, right--their source code, so the nice thing about the IntelliJ plug-in is it works against the source code you've got on your local machine, but it never makes it to the Google Cloud, right? So you can do all of your debugging for the Cloud debugger inside of IntelliJ without giving us your source code.
FRANCESC: Nice.
MARK: Yeah, that's very cool. That's a f--that's a really fine point I didn't actually realize. That's--wow, okay, cool.
FRANCESC: That's very interesting. So I have another question regarding IDEs. I'm a Go developer. Like, I do Go most of the time, and I was pretty excited to hear that there was for--and actually, you used to work at Microsoft, so you might know a lot about this. So Visual Studio, Visual Studio code has been open sourced, which is a very interesting project, and I know that, for instance, they added support for Go with debuggers and so on. Like, probably they announced it, like, last week, something like that. Is there any effort that we are working--like, we are working to have support for Google Cloud Platform on VS code? And if not, is that something that our community could do? Or how does that work?
CHRIS: So it's interesting. So let's back up and think about the technology involved. One piece of technology is, of course, you know, if we talk--if we think about that end-to-end developer's set of scenarios that I care about, right, one of them is having a set of idiomatic client libraries, right? Client libraries that really work well, and we already have--there's something like 267 Google APIs. We already have Nougat libraries to cover the APIs, and we have a great deal, a very nontrivial amount of usage through .net clients today using Google APIs and Google Cloud APIs, so that's already one part of the story. You can go to Nougat. You can grab those libraries. You can bring them into your project today, 'kay? We also have, you know, the fact that we have the Compute Engine that runs Windows Server. Of course, you could imagine deploying, you know, your asp.net app to that Windows Server, right? It's built right into Windows Server. There's nothing that stop you from doing that kind of thing, and of course, we also have the Cloud SDK that in addition to working on Linux and Mac, of course we have a Windows installer, and you can install and use that today, so we already do quite a bit for the .net developer on Windows. So getting back to your question, you know, are we going to dig into VS code? That's actually--let me ask that as a question to the audience 'cause VS code is interesting because it is essentially kind of Microsoft's lightweight IDE-less IDE, right? It's kind of like Sublime text with debugging and built-in support for C#, right? I mean, that's a good way to think about it, and it's not at all like the heavyweight kind of IDE that Visual Studio is on Windows, and the question is how important is that integration to our audience, right? Is that something that they think is high on their list? Do they want to do kind of C# .net-based development on a Mac, on Linux, or do they want to fire it up on Windows using the full Visual Studio Desktop? And, you know, right now it seems pretty clear that the usage is Visual Studio Desktop, but I’m curious what the adoption will be, and, of course, based on that, then how quickly we should think about supporting it.
FRANCESC: Yeah, that's a very good question that I cannot really answer.
MARK: No, and then again, like you were saying, like, you want to sort of reach out to the audience, and we'll definitely put all your contact details in the show notes so that you can have those conversations and we can find those things out because that's important information to have.
CHRIS: Absolutely, and this is part of how I gather that data to be able to make product decisions.
MARK: So that sounds really cool. So now I’m curious whether--so I know there's new and interesting stuff coming up in the roadmap. I'm wondering if you're able to share anything or at least tease a little on what sort of cool things might be coming?
CHRIS: Sure.
MARK: I know we all work at Google. I feel terrible asking.
FRANCESC: Cool but not confidential. That's--
MARK: Yeah, cool but not confidential things we're gonna get in trouble for, but yeah, I'm sure our listeners would love to see what's sort of coming.
CHRIS: Sure. So on the language pages, I already mentioned that we want to do a lot more, right? Essentially, we have a kind of a minimal getting started. We want to do a lot more there in terms of content and tools and just being--making that for a--a place where that programmer can go and get all the information they need about our platform or at least references to the right resources. We also--this--these aren't the only languages we want to do. Java's coming, of course. That's a very important language for our platform, as well as PHP. PHP is also in the pipeline there. So those are coming down from us. You can also expect--I mentioned Cloud debugging for Java. We've got more languages coming there, right? So that's coming down the pipeline. I'm trying to think of what else I can tell you. As it turns out, right now and, you know, probably the last two weeks of my life and probably the next two weeks has all been consumed with 2016 planning, right? And at Google, essentially what that means is we throw everything up in the air, and we think about, really, what we want to do, what kind of impact did we do? What kind--did we move the needle in 2015? How did we move the needle? Did we move it as much as we thought we were gonna? And then in 2016, what do we want to do? How do we take that set of, you know, engineering and PM and user experience resources and figure out what we should do in the next year to make sure that our customer gets the absolute most from that limited set--unfortunately limited set of resources that they possibly can, and so now I'm thinking there are a lot of possibilities of things that are coming in 2016, and I'm trying to think if I have any certainty of any of them. I think I'm--I think I might have been as certain already in terms of what I know is coming, which is debugging and, you know, the two new languages and, you know, deployment support from IntelliJ and--you know, so yeah, I've told you probably more than I should already, to be frank.
MARK: Good for our listeners. They appreciate that. Wonderful, okay, well, as you said, you want to get in cont--have people get in contact with you. Do you want to just give us a little rundown on sort of where these people can get in contact with you? We'll obviously put that in the show notes, but I'd like to sort of have it here as well so that people know.
CHRIS: Sure. So first and foremost, my Google email, csells, C as in Charlie, S as in Sam, E-L-L-S as in Sam @google.com, and in fact, it's interesting. I knew that Google was a good place for me to come because that alias was available. Every single Internet email at every single company I've worked with, I was csells@, right? So csells@microsoft.com, csells@intel.com, csells@google.com, right? I knew there was a home for me because that alias was available, so that was  a good news. I'm also @csells on Twitter. I'm a big Twitter fan. I guess I’m on Facebook, but I haven't been to Facebook in so long I couldn't actually tell you. Maybe they expire you. I don't know.
MARK: Ha.
CHRIS: And then my--you know, my vanity website. I had--I've had a blog since before we called it blogging, since '95, actually, at sellsbrothers.com, and it started as a single static webpage with a bunch of links to Windows developer tools and resources when I used to teach, right? And I couldn't remember all this stuff, so I would just have it on a webpage that I could give to my students, and it is now a blog that I have written three, four times over based on whatever the current set of technologies was that I was working with.
FRANCESC: What language is it written in now?
CHRIS: As of right now, I've actually moved it over to a hosted service, which is--it's called Blot, and it's awesome 'cause essentially, I add a file to Dropbox and press the save button, and my blog is updated immediately, and it's awesome. I'm a huge fan.
FRANCESC: Nice.
MARK: Okay.
CHRIS: But to answer your question, I had all of that in asp.net and SQL Server, and so I wrote, like, a ton of data transformation software, right, to pull it all out of that and drop it into nice, neat files on my hard drive so that Dropbox could pick it up.
FRANCESC: Nice. Is there any forum where people can discuss the kind of features they want and all of these things? Is that--like, maybe Google Groups or something like that that they could join?
CHRIS: So we have one of those in the works, and we have some kind of plans for that, and so if people are interested in being on that group, they can drop me a line, and I can make sure that they're in the initial seed list. As part of--as we grow out these language-specific sites, we want to have a discussion group where people can just drop in and have those conversations, so I'm maintaining that list of kind of initial people to go into those--that new discussion group we're setting up, so people can drop me a line there, yeah.
FRANCESC: Great.
MARK: Wonderful. Well, before we wrap up, Chris, is there anything else you want to mention or talk about or plug that we haven't covered so far?
CHRIS: I'm trying to think. Yeah, the--well, yes. There is one thing, which is where have you guys been for the last year that I was at Google?
MARK: I only joined in May. I--you know, I've got no other excuse than that.
CHRIS: So--
FRANCESC: Yeah, and I was basically waiting for someone to help me with this.
CHRIS: So when I joined Google--whenever I pick up a new technology--like JavaScript, when I picked up JavaScript, right, I went and I subscribed to--you know, I figured out the right web pages, and I figured out the right RSS feeds, and I figured out the right podcasts, and I would spend my free, you know, minutes during my commute listening to the podcast as a way to get up to speed on whatever the new technology was, right? And honestly, listening to the JQuery podcast, right, helped me get over the hump for JavaScript, right? And so when I came to this platform a year ago, right, of course I was familiar with cloud computing in general and had built distributed software for years and years, but this whole new world of the Google Cloud Platform and--you know, I gave up my Windows machine and came over to a Mac, and, you know, I had a Linux desktop, and where were you guys to help me kind of make it over that hump as I was learning all that stuff? You're late, but better late than never. I'm very happy to have you here. I've been listening to you guys on my commute. It's been super useful, and so from the community, thank you guys very much. I know how hard this is, how much work it is, so thank you very much for this work.
FRANCESC: Well, thank you for helping us with this episode today.
MARK: Yes, thank you very much.
FRANCESC: And we will let you know any questions that we get from our listeners. We'll send them directly to you. Well, thank you, Chris. That was an awesome interview.
MARK: That was great. I really enjoyed that.
FRANCESC: Yeah, I learned a lot. I'm very happy to have him finally in this podcast and very happy that he liked us so much, really, like--
MARK: Yes, yes, super happy about that.
FRANCESC: That's an honor. So let's go for the last part of the episode with the question of the week. The question of the week today, it's related to Kubernetes. So we talked about it with--in the episode number two with Brian Dorsey, and one of the things that we discussed was replica on trawlers, which basically allows you to say how many instances or how many replicas of a given pod or set of containers you want to have, and the question that we received was, "Well, yeah, that's fine, but does it also auto-scale? Like, will it create more instances if I have more traffic or any other requirements?" So do you know that?
MARK: I do know this. This is a question I get quite regularly whenever I present about Kubernetes. So the really cool thing is, is several weeks ago, not too long ago now, Kubernetes 1.1 was released, and one of the great new features about that is horizontal pod order scaling, which is, like, awesome. So it does literally exactly what you would describe. You're able to configure it such that to create and decrease the number of pods that are running or the number of containers that are running. The way it works is through CPU order scaling.
FRANCESC: Okay.
MARK: So the number--I'm gonna make sure I read this right because it's mathematical. It's, "CPU utilization is the recent CPU usage of a pod divided by the sum of CPU requested by the pod's containers."
FRANCESC: Wow.
MARK: Yeah, I made sure I read that right. So basically, the short gist of it is you say things like, "I want a minimum number of replicas," say, like, one. "I want a maximum number of replicas," so, like, ten, and then you say, "Okay, the target percentage is, say, 50," right? And so you want to make sure that the per--that the CPU usage stays under that 50%, and so if you start going over, it'll start creating pods to make sure that CPU usage comes down.
FRANCESC: I see.
MARK: So you're able to do cool stuff so that you can, like, load test your application, make sure that CPU usage is right. You can create up the number of pods that you need, and then you can say, "Okay, you know, can we handle a million requests per second?" or whatever it is you might actually have to need, and it's--yeah, it's pretty straightforward. And again, it's through a YAML file, very standard stuff as per Kubernetes.
FRANCESC: That's very interesting. So that's something quite new, you said?
MARK: It is. It came in the 1.1 release. It's part of the extensions beta type stuff which is still in beta in Kubernetes, but definitely worth playing with. It's gonna be a very powerful new feature.
FRANCESC: Very interesting. I can totally see that, being Kubernetes is such an active community, not only this will be included soon but also I'm hoping will have something sooner for memory usage and all the metrics like that.
MARK: Yeah, there's so many options there for--in Kubernetes for auto-scaling, but so glad to--seeing this come out.
FRANCESC: Very exciting.
MARK: That's great. Well, all right, Francesc. Where are you gonna be in the next few months? Are you traveling anywhere?
FRANCESC: So I'm gonna be home. I'm actually going--
MARK: It's the end of the year.
FRANCESC: I know. I'm actually going to be in San Francisco enjoying this beautiful city for a change.
MARK: Nice.
FRANCESC: Yeah, my next trip other than holidays, which will be--I'm gonna spend my holidays somewhere really far away and really far away from a computer. After that I will go to FOSDEM, so it's this really cool conference, like, January in Brussels.
MARK: Wonderful. Well, I--
FRANCESC: What about you?
MARK: I'm gonna be in Canada, I mentioned it a few times, DevFest in Vancouver. After that I'm not going anywhere for a while. Maybe I'll plan a trip back to Australia for a bit.
FRANCESC: Nice. When is Vancouver? When are you going there?
MARK: That's the 12th of December.
FRANCESC: That's gonna be so cold.
MARK: It's gonna be really cold. I don't know what I was thinking.
FRANCESC: Yeah. Well, enjoy your time there.
MARK: I will. I will.
FRANCESC: Don't freeze, and talk to you next week.
MARK: See you next week.
{{< /transcript  >}}
