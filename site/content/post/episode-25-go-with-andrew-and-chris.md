+++
audioDuration = "00:36:01"
audioFile = "Google.Cloud.Platform.Podcast.Episode.25.mp3"
audioSize = 51914615
categories = ["Go", "App Engine", "Container Engine"]
date = "2016-05-11T01:07:49Z"
description = "Join us for a conversation with Andrew Gerrand and Chris Broadfoot from the Go team on why Go is so successful for all the things cloud and how you can use it with Google Cloud Platform."
draft = false
episodeNumber = 25
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Go on the Cloud with Andrew Gerrand and Chris Broadfoot"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/H1w7MQzPmNE"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4ivs2i/episode_25_go_on_the_cloud_with_andrew_gerrand/"
+++

Join us today for a conversation with [Andrew Gerrand](https://twitter.com/enneff)
and [Chris Broadfoot](https://twitter.com/broady) from the Go team. They will discuss
with your hosts [Francesc Campoy](https://twitter.com/francesc) and [Mark Mandel](https://twitter.com/neurotic)
why Go is so successful for all the things cloud and how you can use it with Google Cloud Platform.

<!--more-->

##### About Andrew

Andrew has worked on Go at Google since almost the beginning, and has written
tons of blog posts and talks on Go. He spends most of his time making Go easier to use.

##### About Chris

Chris joined the Go and Cloud teams last year to improve the experience of
writing Go applications for Google Cloud Platform. Before that, he worked
at Google on the Maps APIs for around five years.

##### Cool thing of the week

- EVE Fanfest 2016 - Kubernetes and Google Cloud [video](https://www.youtube.com/watch?v=cS1HlyNSjSo)

##### Interviews

- The Go programming language [web](https://golang.org)
- Go on Google App Engine [docs](https://cloud.google.com/appengine/docs/go/)
- Google Santa Tracker [web](https://santatracker.google.com/#village)
- Tweak The Turkey with a Go powered Doodle [doodle](http://www.google.com/logos/2011/thanksgiving.html)
- gofmt command [docs](https://golang.org/cmd/gofmt/)
- goimports command [docs](https://godoc.org/golang.org/x/tools/cmd/goimports)
- Rails Conf 2012 Keynote: Simplicity Matters by Rich Hickey [YouTube](https://www.youtube.com/watch?v=rI8tNMsozo0)
- Bookshelf tutorial for Go on App Engine [tutorial](https://cloud.google.com/go/getting-started/tutorial-app)
- [The Go Tour](https://tour.golang.org)
- Go Samples [repo](https://github.com/GoogleCloudPlatform/golang-samples)

##### Question of the week

- Google Cloud Dataflow [docs](https://cloud.google.com/dataflow/)
- Google BigQuery [docs](https://cloud.google.com/bigquery/)
- MapReduce [wikipedia](https://en.wikipedia.org/wiki/MapReduce)

##### Where can you find us next?

- We'll both be speaking at [Google I/O](https://events.google.com/io2016/?gclid=CjwKEAjwsMu5BRD7t57R1P2HwBgSJABrtj-RLdXJancAhPAnY5w1dvQSvdfStpL7MTr3Pf6pvdYlLRoCfS_w_wcB) next week!
- Mark will then be at [Change the Game SF](https://cloudplatformonline.com/ChangeTheGameSummit-SF_Registration.html) 
- Francesc will be riding the [AIDS/Lifecycle](http://www.aidslifecycle.org/) and if you want you can [donate](http://campoy.cat/alc).

<div style="text-align: center">
<img src="https://golang.org/doc/gopher/appenginegophercolor.jpg" width=250px alt="the Go gopher, by Renee French">
<p style="margin-top: 5px"><i>The Go gopher, by <a href="http://www.reneefrench.com/">Renee French</a></i></p>
</div>

{{< transcript "MARK: Hi, and welcome to episode number 25 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague, Mark Mandel. Hi, Mark. How're you doing?" >}}
FRANCESC: Hey, Francesc. How are you doing? 
MARK: I'm good. 
FRANCESC: So, we're gonna be interviewing someone that I really like. Actually, two people that work very closely with me. 
MARK: Yeah.
FRANCESC: About Go. 
MARK: Yeah, one person who actually sits very close to both of us.
FRANCESC: Yeah, actually. Yeah, we're gonna have two people that work in the developer relations team for Go and Go--Google Cloud Platform. 
MARK: Yep.
FRANCESC: And we're gonna be talking about why Go is cool for the Cloud and how you can use it, etcetera, etcetera.
MARK: Yeah, we'll be talking with Andrew Gerrand and Chris Broadfoot.
FRANCESC: Yep, both Australians.
MARK: But yeah, you are just gonna be surrounded by Australians.
FRANCESC: Can't [inaudible] about that.
MARK: Yeah. After that, though, we're gonna have a great question of the week. We're gonna talk about some tradeoffs with BigQuery versus Dataflow.
FRANCESC: Yep, that's a very interesting question that probably some people tried to, like, once you--once you start trying to decide where to go, well, you have both. Both can do similar things. Which one is the best one? So we'll discuss that at the end. But first, we're gonna talk about the cool thing of the week.
MARK: Absolutely. So this was a video that came past my desk earlier this week that I quite liked. If anyone's played the EVE online multiplayer game, Francesc, I know you're a big fan.
FRANCESC: Yeah. Again, I should play video games more often 'cause I did not know who Humble Bundle were, and I still don't know who EVE Fanfest. Look, it looks like a cool video game version of Star Wars.
MARK: Yeah, so if you're not familiar with EVE online, it's a, like, literally massively multiplayer online space exploration and conquest-type game. It's the sort of game where people set up, you know, like, betrayals from, like, a year or two years in advance and people lose thousands and thousands of dollars of real money based on, like, [inaudible] in-game currency. It's--there's stuff that's happened in that game that has hit, like, relative news. Like, it's pretty amazing.
FRANCESC: Like relative news.
MARK: Relative news, like, outside of gaming news where--yeah, it's a cool game. I don't personally play it but I know people that do, and it's pretty awesome. But we have a video where they have a presentation they gave about Kubernetes and how they run the company behind EVE. What I like about this presentation that I think is quite interesting, apart from the fact that it gives some background on Kubernetes and how that works, but they talk about how they, sort of, onboarded Kubernetes into their organization and the impetus behind it.
FRANCESC: Mm-hmm.
MARK: And, sort of, they break it down. They're like, "Okay, so we started building Kubernetes, like, on Prim, and we ran into some issues. And then we started playing with Google Cloud Platform, and that was a lot easier and, like, we started going that way. And then they--
FRANCESC: Do you know if they were using container engine directly?
MARK: They are using container engine. They do mention it. Basically, they don't want to manage their own [inaudible]. 
FRANCESC: Cool.
MARK: They basically went, "Like, yeah, we don't want to manage any of this stuff ourself." Which is a great story for us. But I think what's also particularly interesting is how they onboarded inside their organization and what services they use it for. So they, sort of, were like, "Okay, let's start with something least critical like, let's build a--use it for SEI systems or our build systems. And once they, sort of, did that, they were like, "This is amazing. Like, we want to do it more, and so maybe use it for our DevTools and our authoring tools." Like, sort of creeping up that critical list of stuff inside the company.
FRANCESC: Nice.
MARK: As they talk about, they haven't, like, fully permeated all the way though. But, you know, they're trying to drive that as much as possible and it's really interesting to see, like, how you take this sort of thing and say, "Okay, how can we, sort of, step by step, bring this into a company with the least amount of risk?" 
FRANCESC: Yeah, no. That sounds very interesting. I know that there's a lot of companies out there that are considering moving to Kubernetes. At least a part of it. 
MARK: Yeah. Yeah.
FRANCESC: So listening to success stories from others could be--could be very good.
MARK: Yeah, definitely. 
FRANCESC: Cool. So I guess it's time to go talk with our extra two Australian friends. 
MARK: Absolutely. Always, always appreciate some more Australians. Thank you so much to Andrew and Chris for joining us this late afternoon here in San Francisco. How are you both doing?
CHRIS: It's a pleasure to be here.
ANDREW: Yeah, I'm good. Answering his question. 
FRANCESC: Cool. So why don't we start by maybe you, Chris, telling us a little bit of who you are. What do you do at Google?
CHRIS: Who am I? So, I'm Chris Broadfoot. I joined the Cloud and Go teams at Google about a year ago, and I'm working on getting the Go to run on Cloud and get that experience to be as good as possible. 
FRANCESC: What about you?
ANDREW: Yeah. I'm Andrew Gerrand and I work on Go. I'm actually based in Sydney but I'm visiting San Francisco at the moment seeing you lovely people. And I basically am responsible for the Go user experience, I guess, from, you know, APIs to documentation to educational things and so on, and--
CHRIS: Tools. Tools.
ANDREW: Yes, can't forget tools. And yeah, I have some fingers in the Cloud pies, I guess, having done a bunch of library work and stuff and work with the Go Cloud team as well. 
CHRIS: The metaphorical Cloud pie.
ANDREW: It's delicious.
CHRIS: I hope so. 
FRANCESC: Cool. So since you've both worked in--with Go and the Go team for quite a while, could you tell us a little bit about, for the people that don't know what Go is, what is Go and why is it so important and amazing?
CHRIS: Well, so Go is a programming language that was developed here at Google, and we built it as a solution to problems that we have here at Google. So it's designed for--with building, sort of, distributed systems in mind. And so this is really important in the Cloud space because a lot of the design decisions we made in designing Go for use inside Google are also really applicable to people who build Cloud software. One of the most, sort of, prominent and obvious of those is Go's support for concurrency. It provides some--a lightweight threading model based around the notion of Go routines, and then it provides some other things for synchronizing and communicating between those Go routines and lightweight threads. And, you know, using those concurrency primitives, you can build really nice concurrent software. And pretty much most of the software that people build in the Cloud space is concurrent in some way. And so Go is a really nice, natural fit for people who want to build Cloud software. 
ANDREW: And it's nice because it's quite approachable. You know, if you've used any language which has a C-like syntax, you'll understand vaguely what Go code does if you see it for the first time. And so it's very easy for people to spin up on, and it's been--we've seen a lot of our Cloud customers choose to use Go, not knowing anything about Go, and then have a really good time doing it. That seems to be a story that we hear over and over again is that people, teams, will try writing some Go stuff and then they, sort of, fall in love with it. So--
CHRIS: Definitely matches my experience. I started using Go well before I joined the Go team just as my choice for App Engine, and I was surprised how quickly I was super productive and could write, you know, moderately correct concurrent programs with--compared to--
FRANCESC: Moderately correct. That is great. Could you tell us a little bit more about your experience writing Go on App Engine? Like, what are the, like, have you written something big that you could talk about? 
CHRIS: Yeah, so I worked for many consecutive years on the Santa Tracker project. I don't know how many people listening are familiar with it. But basically, every Christmas, a bunch of engineers from Google get together and write a fun web app that tracks Santa as he flies around the world. And at least for the last three or four years, the backend has run on App Engine. And writing services was relatively easy. Obviously, with something at a large scale, you want to do things like load testing. But it was relatively straightforward to get this app to scale to a very large number of queries. Obviously, you want to write your app with your particular use case in mind. And so in this case, we had a lot of very similar queries. SO things like caching, using meme-cache and data store were very simple to do. And yeah, we didn't have any problem--any production problems, really. 
FRANCESC: Cool.
CHRIS: And App Engine scaled to, you know, about 50 instances to serve many thousands of queries per second. So--and the throughput from Go was very good, you know, many hundreds of QPS per App Engine instance. And they're not--they're not particularly big instances, really.
ANDREW: And it's nice that since you wrote that in the first place, the actual Go runtime has seen a huge overhaul and it's now, actually, a lot faster and can handle a lot more concurrent load than it--than it used to.
CHRIS: Yeah, that's true. Yeah. It's been a while since I ran load tests against it and, you know, improvements to Go 1.6 probably would make a significant difference as well. 
FRANCESC: Very cool. There's another project that I also like a lot. If I remember it correctly, there was the Doodle that was powered by Go. 
ANDREW: Oh, yeah. So I guess a few years ago now, there was a Google Doodle which was for Thanksgiving where you could, like, tweak the turkey to--there was, like, a turkey illustration, and you could, like, change the feathers of the turkey and it's clothes and stuff like that--and a hat. And it was kind of ridiculous but people loved it. And you could hit, like, a random button and it would be, like, randomly composed these various things. So when you had a customized turkey, you could share it. And when you shared it, it had to be shared as an image. And so there was a--most of this--most of the Doodle took place in JavaScript, in the app. But then, when you did a share, you needed to actually share, like, a JPG of the turkey. So the Go app would compose the turkey image based on the various layers, over layers. So it just did some image processing and then spat out a generated JPG. And when you launch anything on the front page of Google.com, it, kind of, takes a huge, huge amount of load. And Go on App Engine scaled gracefully to meet the demand, and it was a--we actually had a member of the Doodle team, who had never used Go before, wrote the app from scratch. I wouldn't say it was perfect. I, you know, had a few review comments. But it was--it performed well, and it performed reliably and did the job and, you know. 
CHRIS: And I think it's still running. Things on App Engine, generally you can deploy it and still have it running. I visited an app I deployed maybe three or four years ago and it was still working. 
ANDREW: Yeah. I mean, I don't know if they still enable the share and stuff. I don't know how they archive the Doodles, in retrospect. But it was certainly nice for me because I'd been working on the original launch of Go on App Engine and, you know, this was, kind of, like, the first person that came along and said, "Oh, you know, I want to use it for something." And it worked as we expected it to. You know, you sort of spend all this time building things and you--it's not until you actually see it in the hands of a user that you really know that it's--you made the right choices.
FRANCESC: So I just wanted to show it actually still works. Even the share button still works. 
MARK: We should link to it in the--
FRANCESC: Yeah, we'll link to it on the--on the show notes.
CHRIS: Very nice.
ANDREW: Maybe people'll be tweaking...
FRANCESC: Go for [inaudible] turkeys.
ANDREW: After this podcast.
CHRIS: Yeah. Yeah.
MARK: So we talk a little about scale, obviously, in terms of load and whatnot. But I think one of the interesting things about Go particularly, is, kind of, like, "go-format", which I think is the correct way to say it. I know people say "go-fumpt."
CHRIS: "Go-fumpt."
ANDREW: "Go-fumpt." 
FRANCESC: "Go-fumpt."
ANDREW: It's spelled "G-O-F-M-T."
MARK: I know. I can't deal with that. But I think that it's really interesting, like, from the outset that was, like, this is the way to write code. This is the syntax format that it needs to come in. And that led to scale in terms of teams. You want to talk a little bit about that?
ANDREW: One of my--one of my things that I do in talks sometimes is that I say, "Raise your hand if you've ever had an argument with a colleague about formatting, like, code formatting." And it's always the entire room puts their hands up, and then it's like, "And keep your hand up if you thought that was a productive use of your time." And, you know, all the hands go down. And I think everyone's had this experience, where one person likes it one way and the other person likes it another way. And there's really no, like, everyone has an argument. But there's no really objective truth as to what the best styles are. And so gofmt just makes those decisions for you, and you just have the canonical Go style that everyone uses, and it's not anyone's favorite style. It's not, like, the Go team have this opinion about brace position or tabs versus spaces or whatever. We just made some decisions and that's it. And it's--yeah, I mean, it's a really nice thing. And we get a lot of good feedback from people who, you know, have engineering teams or--generally, the longer somebody's been in the software industry, the more they appreciate having gofmt. I think it kind of--what motivated us to was that at Google in other languages we have these very meticulous style guides. And so a lot of code reviews end up becoming these, sort of, really fixated on the minutia of the code rather than looking at the correctness or the API design or, you know, the things that are really important when you're writing software. 
CHRIS: It's just fewer things to think about.
ANDREW: Yeah, and there's actually a really nice, sort of, version of gofmt called goimports, which is functionally the same. It reformats code. But it also will look at the names that you've used inside the source code and update your import statements, like, the include or, you know, the equivalent of include in [inaudible].
MARK: Yeah. This may be a really stupid question. Does goimports do what gofmt does as well?
ANDREW: Yes. 
CHRIS: Yes. Yeah. 
MARK: Oh, I always use one after the other. 
CHRIS: Yeah.
FRANCESC: You don't need to. 
MARK: You don't need to. 
FRANCESC: Yeah, you don't need to.
ANDREW: You don't need to. 
CHRIS: You'll never see a import-not-used error ever again.
ANDREW: Yep. Yep. Or not found. 
CHRIS: Yeah. 
MARK: Now I like--I like that, sort of, philosophy, and I think that also goes to, like, I think when people start using Go, sometimes they sort of see it as a fairly verbose language. But I think to a degree, also, that's sort of its power. In that you can look at it and see what is happening as each step, you know, through the programming language. There's no--there's no real magic there. 
ANDREW: Mm-hmm.
MARK: What you see is what you get. And you can dig into the call libraries and be like, "Okay, what is this thing doing?" And it's--you're not like, "Oh, there's, like, some special flag that this magic compiler has that only the special libraries get to use." It's all pretty standard stuff. 
CHRIS: Yeah, I think that's also a--indicative of a greater trend in the software industry too. Like, the last time I used Java was maybe three or four years ago, and I think Java development has changed significantly since then although the language has also changed. I don't think that the way people approach programming is simply because of language changes. It's people--it's because people don't want to spend time figuring out why their application behavior changes because of configuration or, you know, some random file that's--it's unrelated. And I think the simplicity of Go kind of reflects a change in the way people are approaching things in general.
ANDREW: Yeah. I mean, I don't even think, like, Java cops a lot of crap for being, you know, factories of factories of factories and all that kind of stuff.
CHRIS: But someone typed the word factory, right? To create those. It's not the language at all. 
ANDREW: Yeah. Yeah. And, you know, it is possible to write nice Java programs. It's just the way it is used, the culture that grew around it in this, sort of, enterprise space or whatever, is unfortunately overly complicated.
CHRIS: Yeah, and we don't mean to disparage just Java, I guess. 
ANDREW: No, I mean it's true of JavaScript. It's true in--even in Python. There are lots and lots of different ways to do things in Python. And, you know, just generally in software a whole, I think, you know, it sort of started off nice and then it just keeps getting more and more complex. So Go and--Go's existence is kind of a reaction to this--they're sort of tired of complexity. But I don't think Go is the only project in the programming landscape that's focused on simplicity. I mean, predating Go is, say, Rich Hickey with Clojure, and he has a strong emphasis on simplicity. There's a great talk that he gave, simplicity made easy, which talks about all of these things. The core of it is that you actually have to try really hard to keep things simple. And I think complexity is just something that naturally arises in nature as well as in human endeavors. So, you know, we kind of--you got to put the brakes on a bit sometimes to try hard to keep things small and comprehensible and so on. 
CHRIS: Often you just have to, kind of, redo and just start again sometimes. Not necessarily talking about programming languages. But sometimes your code, like, sometimes it's just better to redo something. 
FRANCESC: So since we've covered--we've covered a little bit about the origins of Go and a little bit of the philosophy behind it. We could talk now a little bit about why do you think that Go is so successful in the Cloud nowadays? Like, there's Docker. There's Kubernetes. There's so many, like, basically, any company that has cloud somewhere in the name, they're using Go. Why do you think this is? 
CHRIS: I think it goes back to what we talked about at the very beginning of the podcast, about concurrency, and I don't think we mentioned networking. But I think Go is a fantastic language for dealing with networking, partly because it's great for concurrency. But particularly running web applications. I've found that it's, you know, just the standard net/http package, and all of the libraries around it, create a really nice working environment for creating web applications. And I think--I think everyone in the community recognizes that too. 
ANDREW: Yeah, I think it generally just gives you the tools that you need to write those kind of things. And also, you know, I guess one of the reasons it makes sense that Docker, for instance, is written in Go is that it spends a lot of time talking to the operating system, and Go makes it really easy to understand the interface between Go and the operating system. You know, it's--you can just walk through the standard library and see where the sys calls are being made and how that happens. And, you know, if you need to do more, it's pretty straightforward to understand how to make the raw sys calls or talk to LPC or, you know, any of those things. So it, kind of, just--it puts you a lot closer to the system than you would feel in, well, I guess any language that has, like, a runtime, like Python or Java or, you know. But if you're using C, you're kind of using LPC, and then LPC is a whole nother thing in itself. But also, you know, Go is a memory-safe language. So, you know, you could be using C but then you have to worry about all the security issues that come with that. And, you know, we continue to see so many exploits.
FRANCESC: Yeah.
ANDREW: The memory safety of Go is actually a really important feature and one that doesn't get spoken about much, simply because most--almost all modern languages are memory safe now.
FRANCESC: Yeah. As a previous C++ programmer, I know that one of my favorite things of Go is the fact that there's no memory corruption. 
ANDREW: Yeah.
FRANCESC: That is huge. 
MARK: No segfaults.
FRANCESC: Yeah. Like, that little thing that people forget about, that's amazing. So yeah.
MARK: Do you also feel, I mean, Go's not the only language that'll combine down a single library, but there seem to be the reaction against a lot of languages that have runtimes that are bundled. That east of deployment, and that sort of stuff, do you feel like that's also been a big factor?
ANDREW: Yeah, a lot of people talk about it, you know. Just build--you can--you can, you know, on my Mac, I can build a Linux AMD 64 binary and SCP it to a VM somewhere, and, you know, it just works. You don't need to worry about any of the dependencies or bundling or anything like that. I think definitely compared to any of the--what am I trying to say?
CHRIS: Like runtime--like things with runtime?
MARK: JVM?
ANDREW: Yeah, like Node or Python or even Java. I mean, you still have to have some story about bundling up your deps. 
CHRIS: Yeah, even also the runtime version, you know, you end up with things like IBNV, and tools like that, to figure out what version you're running under which is often very important. There's just a lot more code to link against, I guess. And having them at runtimes also just makes things a less predictable. 
ANDREW: Mm. Mm. And I guess in the Cloud sits in a Docker container. You can create a Docker container that just has the Go binary in it and nothing else, and that's it.
FRANCESC: Yeah.
ANDREW: And that's kind of nice. That's a very easy thing to understand in this world that's complicated and difficult to understand.
FRANCESC: Cool. So, for people that are already convinced on using Go and using Go in the Cloud, what are the different ways that they can run Go on Google Cloud Platform?
CHRIS: Yeah, so there are many ways that vary from very managed to not being managed at all. So some of my favorites are Google App Engine. I don't like messing with deployment scripts and things like that. I mostly write web applications. So they're a really great fit. We have two, sort of, flavors I guess. So there's App Engine's standard environment, and this is what we used to call a sandbox environment, has quite a few restrictions around how you program your application. So you're not likely to run an existing Go application directly on App Engine standard. But you can, basically, do that with App Engine flexible environment which has far fewer restrictions. Like, you have a main function and a main package. So you--basically, you run the same application outside of App Engine as you do on your desktop or on a different Cloud provider. We also have Kubernetes, which is a--essentially an open source version of the deployment system we use at Google which is called Borg. And this lets you run your application on many different nodes, on any compute provider, very easily. There's also Compute Engine which is basically just a bare VM, and, you know, this means you have to run your own deployment scripts and startup scripts and manage all of that yourself. However, we do provide things like kernel patches and things like that on the fly. So it's, you know, still very different to having a computer sitting under your stairs, right?
ANDREW: Yeah. Also, in the Compute Engine case, you basically just get nothing in terms of scaling and so on.
CHRIS: Yeah.
ANDREW: But then, in the App Engine cases, either the App Engine standard or flex, you can take care--you can take advantage of the auto-scaling infrastructure that we have. So if your app gets a lot of incoming requests suddenly, loads spike, it can quickly spin up various instances--more instances of your app and serve more request volume. The key advantage that standard has over flex is that it can spin up instances very, very quickly. The entire infrastructure is built around, kind of, keeping, like, hot spares of, like, blank-slate instances that can then just, basically, copy your app and launch it. Whereas with flex, you need to--each new instance has to spin up a new VM to serve that instance. So if you can work within the standard App Engine environment, it's actually a really nice way to build software. It doesn't let you do things like write to the file system, and you need to use our APIs to make, like, external network requests and so on. But it--we've done our best to just, kind of, make it feel really natural to do that from inside Go. And if you--generally, if you use the App Engine standard packages, you will write an app that will scale. That's kind of the whole premise of App Engine is that, you know, we give you the APIs to use. That if you use them, you know, you won't write an unscalable app. I mean, it's definitely still possible. But the way it's designed, kind of, makes it natural to do it--
CHRIS: It's also great for small apps. You know, as I said before, I have a multitude of toy apps that continue running without any oversight at all. And I think that's another--a real strength of the App Engine platform. It's very lightweight. 
ANDREW: Mm. Oh, and App Engine standard will run zero instances of your app if it's--if no one's using it. 
CHRIS: Yeah.
ANDREW: So you don't even pay for your app when people aren't using it which is a definite advantage over the VM-based.
FRANCESC: Yeah, we had a couple episodes ago interviewed Humble Bundle, and they run the whole infrastructure basically on App Engine. And they were talking about all of these benefits. Like, if they get a huge spike in traffic, they don't care. Everything just works. 
ANDREW: Mm.
CHRIS: Yeah, so I should mention, another thing we're working on is a set up packages and libraries that, sort of, bridge these gaps. So that, you know, if you start with App Engine standard and need to do something a little more special, you can move to the manage--the flexible environment, previously known as managed VMs. And, you know, to sort of move between these different deployment modes and not have to rewrite your application. Because, you know, applications should be agnostic of where they're deployed. You know? You should just write your application, be able to deploy it wherever you like and however you like. So that's another focus and real goal of the Google Cloud Platform right now. 
FRANCESC: Yeah, I got to say that one of my favorite things for--out of all the packages is the way authentication works with, basically Go, on any of the clouds. It is--it is super simple. It's basically two lines of code saying just get the default credentials, and everything just works. 
CHRIS: Yeah.
FRANCESC: That is super nice. Yeah. 
MARK: Definitely. So if people have been listening to the episode and they're particularly interested in learning Go or possibly going on Google Cloud Platform, what are your favorite ways of learning those things?
CHRIS: Well I think, first of all, you should learn Go, and the best way to do that is the Go tour which Andrew wrote.
ANDREW: Yeah. It's tour.golang.org, and yeah, you can just go through, use a web browser, and learn the features of the language. 
MARK: I've done that. 
ANDREW: Yeah, I think it's a pretty good way to get started. I definitely recommend, like, having a project in mind. Like, something simple that you can just, like, try and make. I think a lot of people try and absorb a lot of information in the abstract before trying to apply it.
MARK: Yeah. Hmm.
ANDREW: But that's just my personal style, is to actually have something in mind. And yeah, and then if you want to move into the Cloud space, we have cloud.google.com/go which has a great introductory app, a bookshelf app, for organizing books. 
MARK: Something we all need to do.
ANDREW: Something we all do, yes. I meticulously catalogue my book collection in this app. Not really, but it's a great demo of how it all--how all the pieces fit together and the deployment story and all that stuff.
CHRIS: There's also a couple other resources. If you go into the Cloud Console and, I think, if you press App Engine, there's some guided flows. So you don't even need to download the SDK to your local machine or anything like that. You use the Cloud shell which is, basically, a virtual machine that runs the Cloud tools. And so you do everything through a web interface, and that's a pretty great way to just get a feel for the--for Google Cloud Platform and App Engine. And then there's also another repository where we're adding a lot of samples to and sort of consolidating samples. And so that's github.com/googlecloudplatform/golangsamples. We'll put a link in. 
FRANCESC: Yeah. 
CHRIS: And yeah, so you can just take a look in there and see a bunch of different samples and how things fit together.
FRANCESC: Cool. So we're pretty much out of time, but is there anything else that you would like to add?
CHRIS: Check out the turkeys. 
ANDREW: I think that rabbits are the superior domestic pet. I just thought I'd throw that out there.
FRANCESC: Better than gophers?
ANDREW: I don't know anyone who keeps a gopher. If you keep a gopher, please write to me, ADG@golang.org, and tell me your experiences. 
FRANCESC: Great. Well, thank you very much.
ANDREW: Thank you.
CHRIS: Thanks, guys.
MARK: Thank you. Thanks so much to Andrew and Chris for joining us today. That was a really interesting conversation, and it was an absolute pleasure to talk to you both. But we have a really interesting question of the week. Francesc, would you like to head that off?
FRANCESC: Yeah, so it's a question that comes to us through the--I forgot the name.
MARK: Slack channel.
FRANCESC: Through the slack channel, exactly. We have a podcast slack channel in the Google Cloud Platform community, and the question is, "Okay, so when do you transform your data in BigQuery via queries versus Dataflow for ETL?"
MARK: That's an interesting question, right? 'Cause in theory, you could do it either way. 
FRANCESC: Yeah, so I think that the thing to keep in mind here is that BigQuery is a very specific tool with very specific use case which is basically log analysis. It will do more than that. It will do, basically, analysis of any kind of structured data where the analysis that you're trying to do matches, pretty much, what you'd consider a sequel query. 
MARK: Mm-hmm.
FRANCESC: And for those that don't know about what ETL is, basically, ETL is a--is a way of processing data. And it's about extract, transform, and load. So it's, like, you extract the data. You transform it in some way, and then you store it into your data warehouse. And BigQuery's more about once that data has been loaded into the--into the data warehouse you can extract information out of all that data. So if you're doing something, like, you have a lot of data and you want to do an average over all the values or you want to find some specific rows and stuff like that. That is basically what Big--what BigQuery was built for. But BigQuery doesn't do everything. There's things like, for instance, if you're trying to do things with images, or really anything that is not structured, that is not just text, it's not really going to work with BigQuery. So in that case, you should use Dataflow. And Dataflow, it's basically, if you've never heard about Dataflow but you've heard about MapReduce, Dataflow is like a generalization of what MapReduce does. So instead of having just a--so MapReduce--it's a--this is a interview question. How many phases does MapReduce have? 
MARK: How many faces? Like, eyes, nose, and ears and, like, mouth?
FRANCESC: No, phases.
MARK: Oh, phases.
FRANCESC: Making fun of my accent.
MARK: No, no. I didn't understand you. I promise. 
FRANCESC: So how many phases are there in MapReduce?
MARK: That's a great question, Francesc. How many phases are there in MapReduce?
FRANCESC: One could say map and reduce.
MARK: Yeah.
FRANCESC: No, there's map, shuffle, and reduce.
MARK: Oh.
FRANCESC: But you don't say map, shuffle, reduce 'cause it could be too long. But--so basically, it's--you get those three phases and you make them composable. So it's like a generalization. You can have as many phases as you want. So that allows you to do whatever you want. So it's really powerful. And so if you want to do something that matches the BigQuery use case, go with BigQuery. Otherwise, Dataflow will be there for you, and Dataflow is also very good for a specific use case which is real-time analysis and streaming.
MARK: Yep, that makes sense. So if you want to, like, window your data or, like, know exactly how many times something's happened in the last half hour or something like that. 
FRANCESC: Yeah. Exactly. There's also, I've seen, some of them was basically the [inaudible] how to implement the Twitter trending.
MARK: Hashtag trending?
FRANCESC: Yeah, the hashtags that are trending. That you can implement that with Dataflow quite easily, really.
MARK: Okay, cool. Excellent. All right, so it sounds like if I have structured data, it fits in BigQuery, and it's--you know, it hits that paradigm, I should just use BigQuery. 
FRANCESC: Absolutely.
MARK: But if it sits, sort of, outside of that paradigm. Then, I might as well use Dataflow 'cause it gives me more flexibility in what I need to do.
FRANCESC: Yeah. If you can use BigQuery, use BigQuery. You will not regret it. And if you cannot use it, then use Dataflow and you can write whatever you need.
MARK: Excellent. Well, that sounds like awesome stuff. But I think we're gonna be traveling around a little bit, Francesc, in the next couple of weeks. You gonna be anywhere special? Is there anything happening in the next few weeks that we should mention?
FRANCESC: I'm going to this incredible place, the happiest place on the earth--
MARK: Disneyland.
FRANCESC: No, Monteview.
MARK: Oh.
FRANCESC: Yeah. Yeah, we're gonna be in Monteview for Google I/O. That's gonna be pretty awesome. I'm working on my slides now, so--no, I'm just kidding. My slides are pretty much ready. We're gonna--I'm gonna be talking about Cloud Spin...
MARK: Yep.
FRANCESC: And you are talking about?
MARK: I'm doing a session on multiplayer games with Firebase.
FRANCESC: Cool. 
MARK: So that'll be lots of fun.
FRANCESC: That sounds--that sounds very interesting. You're doing a lot of videogames lately.
MARK: I like videogames. They're fun. 
FRANCESC: That is cool, and after that, I will go to GOTO Chicago. 
MARK: Nice.
FRANCESC: Yeah, first time there. I will be talking about Go tooling. Very excited about that one.
MARK: Excellent. I'm excited because I'll be getting--well, I'll be staying up 'til 1:00 a.m. to do a presentation for DDG Melbourne. That's gonna be lots of fun. And after that, I probably will be heading off to--yes, I'll be doing several stints off to Minneapolis, actually, in June, which will be lots of fun. But one event that I definitely want to bring up, that's going to be on June 3rd, is change the game development summit here in San Francisco on June 3rd, at the Google Headquarters here in San Francisco.
FRANCESC: Cool.
MARK: So if you're interested in game development on the Cloud, multiplayer games, analytics, big data with games, all that sort of good stuff, definitely come check us out. It's a free event. You can come down. We definitely still have seats available. I'll be presenting there with some people. Pocket Gems will be there. Kabam will be there. Some other fun people like that. So we'd love to see you.
FRANCESC: Cool. Maybe I should mention that right after that, I will be gone for a week. 
MARK: Oh.
FRANCESC: Yeah, so I will be biking from San Francisco to Los Angeles. Yeah, so I'm gonna be doing the Eight's Live Cycle, and I'm looking for donations. 
MARK: I've already donated. 
FRANCESC: Yeah, thank you so much. So yeah, I don't know if we--that month--that week maybe we'll do a podcast on the road or something.
MARK: Yeah, or we'll prerecord it. We'll sort things out.
FRANCESC: We'll try--we'll find something out.
MARK: Yeah. Wonderful. Well, Francesc, thank you so much for joining me, yet again, for another episode.
FRANCESC: Thank you so much, Mark, for being here and helping me understand two other Australians. Sometimes the accent gets hard, so. 
MARK: No problem, and definitely speak to you next week.
FRANCESC: Yep, talk to you next week. 
{{< /transcript >}}