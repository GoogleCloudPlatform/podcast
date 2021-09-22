+++
audioDuration = "00:32:15"
audioFile = "Google.Cloud.Platform.Podcast.Episode.161.mp3"
audioSize = 46850607
categories = ["Go", "Google Cloud Functions", "Go Cloud Functions"]
date = "2019-02-06"
description = "First-time host, Aja, joins Mark today to talk Go Cloud Functions with two Google colleagues!"
draft = false
episodeNumber = 161
hosts = ["Mark Mandel", "Aja Hammerly"]
title = "Go Cloud Functions with Stewart Reichling and Tyler Bui-Palsulich"
image="/post/episode-161-go-cloud-functions-with-stewart-reichling-and-tyler-bui-palsulich/images/hero/hero-EP-161.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/TXjwrMAS4aB"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/ansay0/episode_161_go_cloud_functions_with_stewart/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

First-time host, [Aja](https://twitter.com/the_thagomizer), joins [Mark](https://twitter.com/Neurotic) today to talk Go Cloud Functions with two Google colleagues! [Stewart](https://twitter.com/stewblr), lead Product Manager on Google Cloud Functions, and [Tyler](https://www.twitter.com/tbpalsulich), Developer Programs Engineer at Google, start the show by explaining the purpose of Cloud Functions. It is a serverless compute product that supports many programming languages, scales automatically, and only charges for what you use. It works best as event-driven computing, in other words, when something happens, you want something else to happen in response. Cloud Functions also works well between clouds or even Google Cloud services, acting as the glue between them.

Go Cloud Functions works specifically for Go. Google makes a huge effort to make Cloud Functions easy to use for all developers, so that no matter what language you're familiar with, Cloud Functions works for you.

<!--more-->

##### Stewart Reichling

[Stewart Reichling](https://twitter.com/stewblr) is the lead Product Manager on Google Cloud Functions. He is a graduate of Georgia Institute of Technology and has worked across Strategy, Marketing, and Product Management at Google.

##### Tyler Bui-Palsulich

[Tyler](https://www.twitter.com/tbpalsulich) is a Developer Programs Engineer at Google. He graduated with his Master's in Computer Science from NYU and loves detailed documentation, random trivia, and homemade bread. You can find his blog at [buipalsulich.com](https://www.buipalsulich.com)

##### Cool things of the week

* Actually cool thing of the week [twitter](https://twitter.com/uhoelzle/status/1090805768729767936)
* NoSQL for the serverless age: Announcing Cloud Firestore general availability and updates [blog](https://cloud.google.com/blog/products/databases/announcing-cloud-firestore-general-availability-and-updates)
* Site Reliability Workbook now available in HTML [site](http://landing.google.com/sre/workbook/toc/)
* Building a serverless online game: Cloud Hero on Google Cloud [blog](https://cloud.google.com/blog/products/application-development/building-a-serverless-online-game-cloud-hero-on-google-cloud-platform)
* The tech industry is failing people with disabilities and chronic illnesses [article](https://medium.com/@racheltho/the-tech-industry-is-failing-people-with-disabilities-and-chronic-illnesses-8e8aa17937f3)

##### Interview

* GCP Podcast Episode 34: Stackdriver monitoring with Aja Hammerly [podcast](https://www.gcppodcast.com/post/episode-34-stackdriver-monitoring-with-aja-hammerly/)
* GCP Podcast Episode 53: Ruby with Aja Hammerly [podcast](https://www.gcppodcast.com/post/episode-53-ruby-with-aja-hammerly/)
* Cloud Functions [site](https://cloud.google.com/functions/)
* Cloud Scheduler [site](https://cloud.google.com/scheduler/)
* Firestore [site](https://firebase.google.com/docs/firestore/)
* Pub/Sub [site](https://cloud.google.com/pubsub/)
* Go Mod [site](https://github.com/golang/go/wiki/Modules)
* App Engine [site](https://cloud.google.com/appengine/)
* Open Census [site](https://opencensus.io)
* GCP Podcast Episode 118: OpenCensus with Morgan McLean and JBD [podcast](https://www.gcppodcast.com/post/episode-118-opencensus-with-morgan-mclean-and-jbd/)
* Google Stackdriver [site](https://cloud.google.com/stackdriver/)
* Launch/overview video [video](https://www.youtube.com/watch?v=RbnyUpVRq_4)
* The Go Runtime [site](https://cloud.google.com/functions/docs/concepts/go-runtime)
* Cloud Functions Quickstarts [site](https://cloud.google.com/functions/docs/quickstarts)

##### Question of the week

[How many ways can you run containers on GCP?](https://cloud.google.com/compute/docs/containers/deploying-containers)

##### Where can you find us next?

Mark will be at [GDC](https://gdconf.com) in March, [Cloud NEXT](https://cloud.withgoogle.com/next18/sf), and [ECG](http://ecgconf.com) in April. Agones has a new website [agones.dev](https://agones.dev)! And he's also back to [Twitch streaming](https://www.twitch.tv/markmandel)!

Aja will be at [Cloud NEXT](https://cloud.withgoogle.com/next18/sf) in April.

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 161 of the Weekly Google Cloud Podcast. I am Mark Mandel, and this time, I am joined by the wonderful Aja Hammerly. How you doing, Aja?" >}} 

AJA: Hi, Mark. It's kind of cool to be in the host's seat after having been a guest [INAUDIBLE]. 

MARK: You get to see the other side of things. So before we get stuck in today, we're going to be talking about a lot of cool stuff about Google Cloud Functions. We've got a question of the week talking about running containers on GCP. But before we get stuck into all of that, you want to tell people a little bit about yourself, since it's your first time in the host seat? 

AJA: So I'm Asa. I am one of the developer advocates on our Cloud Platform team, and I'm based out of Seattle. It is wonderful and beautiful and rainy all the time. And kind of my passion on Google Cloud the last 2 and 1/2-ish years has been figuring out the best ways to reach out to all of those wonderful language communities that we support, making sure that we're showing up as respectful and contributing members of the different languages that we use, supporting the language community to grow and feel welcome in our platform. 

And a lot of that's just been working on making sure that our products are idiomatic, that they solve the problems that people have, and that we're out there helping out and just being good citizens. That's something that's really important to me, and I'm really lucky to work here, because I get to do this all day, every day. 

MARK: Nice, nice, nice. Awesome. Well, as per always with the podcast, we start with our cool things of the week. I believe you have a cool thing of the week, Aja? 

AJA: Yeah. So in honor of my first time in the host seat, I have the world's worst joke. There is an actually cool thing of the week I saw on Twitter last night, that apparently, the paint is peeling off of our Iowa data center, because it is so cold at the polar vortex right now. So that is the actually cool thing of the week. 

[LAUGHTER] 

To all of our listeners who are currently affected by freezing cold temperatures, please stay warm. 

MARK: Yes, yes, definitely stay warm. That's good for people. That is a cool thing of the week. 

AJA: It is a very cool thing of the week. 

MARK: Very cool thing of the week. OK, awesome. So actually, as of, I think, today, which is the day we're recording, not the day you're listening, Cloud Firestore has gone generally available, which is really, really cool. So if you're not familiar with Cloud Firestore, it's our serverless NoSQL document database. It's fully managed for you, highly scalable, and we're making it available in 10 locations, as well at GA. So Hong Kong, Mumbai, Tokyo, Sydney, Los Angeles, Montreal, North Virginia, South Carolina, Sao Paulo, London, something else I can't read, and a couple more locations are coming up soon, too, as well. 

So pretty exciting that it's going to be available everywhere, and you can take advantage of it. And now it's, like, generally available, so it's ready for use. We have links in the show notes for the announcement blog post, so you can check out more stuff about it in there. 

AJA: Awesome. Other stuff from my cool things of the week list is that the site reliability workbook is now available in HTML. There'll be a link to the show notes. And this is a successor to the original SRE book, but this covers a lot of the stuff that people struggle with and helps you start to think about how to implement the practices of site reliability at your organization. 

And one of the things I've loved about the last year or so is that I've gotten to spend some time just having lunch with SREs at Google and learning about how they approach problems. And it's honestly made me a better person, in general. Things like blameless postmortems, setting clear expectations, those are just fantastic human skills in addition to being great skills for running an organization and keeping your websites up. So I recommend folks check it out. There's a lot to learn there. 

MARK: Fantastic. I like anything that has the word games in it. There's a wonderful article that's come out on the Google Cloud blog called "Building a Serverless Online Game-- Cloud Hero on Google Cloud." This is a in-event sort of party game for everyone who's sitting in a room, basically to test your knowledge of Google Cloud through the use of timed challenges. To date, over 1,000 people have played it. 

So in the article, they actually go through how it was built using Angular, Cloud Firestore, Cloud Functions, and all the bits and pieces on how it was put together. So if you're interested in how that was put together and you think, oh, that might apply to some of the things I'm building, you should check out the blog post, which we will have in the show notes. 

AJA: And my last thing is that I read a really great medium article this morning about chronic illness in tech called "The Tech Industry is Failing People with Disabilities and Chronic Illnesses." And this is something that we don't get to talk about a lot and doesn't come up in a lot of the inclusion discussions that are going on. We tend to focus on racial and gender diversity. But this is super important stuff, and I learned a lot from reading this post. 

So if folks have the time, I recommend you check it out. Just expand your knowledge of what inclusion needs to look like for us to have all the smartest people working on tech problems. 

MARK: Yeah. Nice, nice, nice. Well, fantastic. Thanks for sharing that, Aja. Why don't we go talk to Stewart and Tyler and talk to them all about Go Cloud Functions? 

AJA: Sounds awesome. I can't wait to learn it. 

MARK: Today, I am, as always, very excited to have some new friends on the podcast. We have Stewart Reichling and Tyler Bui-Palsulich. Did I get that even vaguely right? 

TYLER: Yeah, it's pretty close. 

MARK: I'll take it. Coming here to talk to us about Cloud Functions, but very specifically, Go Cloud Functions. So thank you very much for joining us. How are you doing today, Tyler? 

TYLER: Thank you for having me. I'm doing very well. 

MARK: Excellent. And how are you doing, Stewart? 

STEWART: Yes, yes, doing real good. 

MARK: Excellent. Excellent, excellent. Well, thank you so much for joining us on the podcast and talking to us about Go and Go Cloud Functions. Before we get stuck into things, why don't you tell us a little bit about yourselves and what do you do at Google and all that good stuff? Stewart, why don't you go first? 

STEWART: Hey, I'm Stewart. I'm the product manager for Cloud Functions. I work a lot on bringing new languages to the product, new features, working with customers, understanding their needs. Anything Cloud Functions pretty much runs through me on the product side. 

MARK: Tyler? 

TYLER: Hi, I'm Tyler. I am a developer programs engineer, which is part of developer relations. And my goal is to make it as easy as possible to run Go on Google Cloud. 

AJA: For those folks who aren't familiar with Cloud Functions, what exactly is Cloud Functions? 

MARK: Have either of you had a chance to use Cloud Functions? 

STEWART: I have. I write very bad JavaScript on it. 

MARK: Nice. 

AJA: I was I was playing with it yesterday afternoon, trying to transfer a distributed computing talk I did from a couple years ago into Cloud Functions. It was amazing. 

[ANGELIC CHOIR] 

MARK: Awesome so it sounds like some people have started to get used to the idea of Cloud Functions. But just for those who haven't really had a chance yet, Cloud Functions is one of our serverless compute products from Google. Now, serverless, what does that mean? That means that you give us your code and we run it for you. You don't have to think about infrastructure. It scales automatically. You only pay for what you use. 

And what we really focus on is having a very idiomatic developer experience. So making sure that if you're a Go developer, it looks, it feels, it smells like Go. It's something that's familiar to you. And so the idea with Cloud Functions is you give us that little bit of code. It runs in response to an event, and we handle all the hard stuff for you. 

TYLER: One way I like to explain it is kind of in the spectrum of ways you can run your code is you come up with some application, and you're running it on your laptop. And you say, hey, look at this. This is so cool. Then, you say, all right, maybe I'm going to put this on a server, and I'm going to stick that in the closet. And I'm going to keep the power on and the air conditioning on. And then once that's a little bit too cumbersome, maybe you put a VM on some on-premise or maybe some cloud provider. 

And that gets too cumbersome. So then you have some automatically scaling application service, say Google's App Engine. And if that's a little bit overweight for what you are working on, then Functions can be the next step, where instead of writing an entire application for what you need to do, maybe it's just a single function that resizes images or does some small concrete task that doesn't require an entire application to be running somewhere. 

AJA: So that sounds super cool. I like the imagery sizing example. Can you give us some other examples of stuff that does really well on Cloud Functions? 

STEWART: Sure. I've got some examples of use cases of things that we've seen. And all of these kind of fall within the bucket of event-driven computing. So something happens. You want something else to happen in response. A sort of programmable computing layer when an event happens. 

So, for example, imagine you have a Cron job right now that's running on your machine, and it runs you once a day. Well, does it really make sense for that machine to be the thing where your code lives? And if that machine goes down, you have to maintain it and figure out what's happening. So one example use case is you have a product like Cloud Scheduler. Cloud Scheduler sends an event to Cloud Functions on a schedule everyday, for example. And then you run code. 

It might be something that goes and looks through your database and cleans up stale files. It might be something that does a data transformation on a regular schedule. So that's one example. Another very common use case I see is gluing together either different clouds or even, within Google Cloud, different services. So you might have events coming off of a message bus using Pub/Sub, for example, and you want to move that data from that message bus into a more persistent data store. 

So a Cloud function is very easy way to say, OK, I get that message. Maybe I do a very small transformation on it. And now I load it into my Cloud SQL or into my Cloud Firestore. 

MARK: Awesome. So we're here to talk about Go Cloud Functions. What's special about Go Cloud Functions, other than, I mean, I can write Go, which is kind of cool. 

STEWART: Yeah, so as I mentioned earlier, one of the things that we really try to focus on is having a very idiomatic developer experience. So that means if you write Node, if you write Python, if you like Go, when you touch the product and you use the product, it should feel very familiar to you. And to help us achieve that goal, I actually lean very heavily on our developer programs engineers like Tyler, because Tyler is a Go expert. I know these languages reasonably well, but I really look to someone like Tyler to bring his expertise when we design this product so that, as someone who's been working on Go for a long time, it should feel very familiar. Tyler, you want to talk a little bit about why we think this is special? 

TYLER: Yeah. So one of the important things for me is that writing your application should not be specific to where you are running that code. So for Cloud Functions, in particular, for HTTP functions, a Go HTTP Cloud function is an HTTP handler func. So you don't need a third party import. You don't need anything special. It's just all of the handlers that you've written in the past can be run directly on Cloud Functions with minimal modification. 

STEWART: Just for people who aren't completely familiar with the product yet, with Cloud Functions, we basically provide two ways of invoking your function. One is via an HTTP web hook. That's the classic use case. We give you HTTP signature. We let you interact directly with the HTTP object. And so in order to implement that, we used Go's idiomatic standard HTTP handler func. You send a request to the URL that we give you, and your code runs in response to that. 

The other way that you can run Cloud Functions is background functions or functions that are triggered by events emitted by Google Cloud infrastructure. So things like Pub/Sub, Google Cloud Storage, Cloud Firestore. 

MARK: And does the interface for that look slightly different, I assume? 

TYLER: It is a little bit different. So we try to make it a little bit easier to interact with those different event types, rather than direct HTTP. And so the hope is that you still aren't writing code that does too much heavy lifting, where you have to parse exactly what's in every single request. And so what those look like is it's a function. It takes a standard Go context object, which carries information like request scoped values, deadlines, and so on. And you have one more argument that is event type that you care about. 

And so our runtime unmarshals what comes in as JSON into the event type that you provide. And then the function returns an error, which indicates, basically, was this a success or not. And then based on that return value, you can optionally enable retrials for your function. 

STEWART: Yeah. And so when we say idiomatic-- 

SPEAKER 5: What did you just call me? 

STEWART: --a lot of people say, what does that actually mean? The goal here is that we want to minimize the amount of new stuff that you have to learn and the cognitive overhead when you're developing something. We want to make it super easy and super quick, as a Go developer, for you to be able to write a function, not learn anything new, deploy it, and start seeing events come in immediately. 

MARK: So I'm guessing that also translates to, like, local development experience? If it's just a standard HTTP handler, I can just use standard stuff. Is that right? 

TYLER: Yeah, exactly. So the way that's usually set up is having a command subdirectory, which is a common pattern for Go projects in general. And so you create that directory, put a package main with HTTP server in there, listen for the functions that you care about, and run it. And I think that might provide some friction around connecting, say, Pub/Sub, where you're using the real Pub/Sub service to run your functions. But for HTTP, it works really well. And testing is also really nice. 

STEWART: One of the other things that we support with this runtime is that Go 1.11 introduces this concept of Go.mod, which allows you to specify your dependencies in a Go.mod file. It supports Go 1.11's modules functionality. And that basically brings to the language behavior that is very familiar to someone who's been using Node with package.json or Python with requirements.txt. 

And so basically, this allows you to just write your dependencies in a file. You don't have to worry about vendoring. You don't have to worry about managing the actual source code. You deploy our infrastructure in specs.go.mod, and it will install the dependencies and resolve those for you in your container. So we feel that that's a very easy way for us to show that we're incorporating new Go language features, staying up-to-date with what the community is doing, and also providing a very simple developer experience that is new to the language. But we feel pretty good about how that's going to find a bigger following in the future. 

AJA: So Google has a lot of serverless products. How exactly is Cloud Functions different than, say, App Engine? When would I want to choose one or the other? 

STEWART: Sure. So there are a lot of similarities between the two products. I talked earlier about not having to manage infrastructure, really paying for the resources that you're using, scaling up and down to zero. So if you're getting no traffic, you're not paying. But there are also some pretty key differences. And the way I like to think about it is you want to use the right tool for the right job. 

So App Engine is really well-suited for web apps. You're setting up a store that has multiple different routes, and you want to make sure that when you get a request to a certain route, you render a certain page back to your user. Cloud Functions is really all about the event-based use case. So you're not necessarily setting up multiple routes. You are writing single-purpose code that scales automatically and responds to the incoming event load. 

And we try to make that clear, also, through the feature sets that are provided with the different product. So, for example, App Engine, very well integrated with custom domains. You want to put your store front behind a domain that's yourstore.com. Cloud Functions, very good integration with events. You issue one command to deploy. It gets wired up to Pub/Sub. And now, all of a sudden, you're already getting that event stream. You don't have to handle a bunch of additional wiring. 

Tyler alluded to automatic retries, and that's also a pretty big feature for us. So if you're getting events, occasionally you're handling those events, and your function might fail, for whatever reason. Maybe you have a flaky back end that that function's interacting with. You want to make sure that you have a very easy way for you to recover from those failures, and you can potentially retry that event. Cloud Functions comes with retries sort of built in as a first class primitive because it's important to the events use case. 

TYLER: Another advantage is that with Cloud Functions, these separate parts of your applications can scale independently. So if you have one resource or endpoint that's being used heavily by your users, or maybe you get a large amount of events posted on Pub/Sub or files stored in Cloud Storage, all of those functions can run independent from the rest of your application. So if you have resources that your app uses on App Engine, you don't necessarily need all of those to, say, resize an image. 

STEWART: Yeah, and so I've seen customers who actually end up doing things like deploying a function and building all kinds of complicated routing into it, and so their function kind of grows into this really big thing that can do many different things. But that's actually a bit of an anti-pattern when it comes to functions. What we really recommend is trying to keep your code isolated to a specific use case, making sure that it does one thing really well. Because that simplicity actually comes with a lot of benefits. 

You know, Tyler mentioned the scaling. Another one is if you look at the logs for your function, you know exactly, for each execution, for each function, what was happening if you're printing stuff out to standard.out as you're going. And so that simplicity gives you a very easy way to reason about where are my failure points, where's my scaling, what's my usage for specific tasks. That isolation, I think, is a very big benefit of Cloud Functions. 

MARK: That sounds great. Actually, speaking of App Engine, and having done a lot of work with App Engine, if I'm writing Go code in App Engine, I write my code, and I run, like, gcloud app deploy, and it bundles it all up, and it sends it up somewhere to build it all. Is that experience similar to what happens on Functions? Like do you build the actual thing for me, or do I have to build a binary and, like, ship it somewhere? 

STEWART: Yes. So we follow the same model as for App Engine. You give us source code, we run that for you. You don't really have to think about the build step, but since you're asking, GCloud functions deploy, pass a couple command line flags. Everything in your directory gets uploaded via that CLI. We then build that function according to what you've given us. So if you've given us a Go.mod file, we're going to install those dependencies. It's all going to be built into a container that then runs on our infrastructure. 

You don't typically have to think about these details, but it's good to know. If you give us a vendor directory, we're going to build that for you. And so we really want to handle all kinds of different shapes and sizes of Go code that people want to give us, and we want to make sure that you don't actually have to think about the build step. All of that is handled for you. 

TYLER: The two other common ways that you can deploy functions are with, one, in the Cloud Console. So there is an editor there, which might work for very small functions or limited changes. But it does work, and it's nice for getting started. And then, the other option is you can upload a zip file. So if, for whatever reason, you would prefer not to deploy from, say, the GCloud command line tool, you can upload a zip file and, say, build the function from there. 

STEWART: Yeah. And so the UI-based use case, we actually see a lot of people using that as their entry point to the product. You go to console.google.com/functions. You click Create function. You click Deploy. It's literally two clicks, and you've got a function running. It's a great way to get your first sort of step into the product. But once you graduate beyond that, as Tyler mentioned, you can deploy with the GCloud CLI. We also have an API that you can deploy against. You can also do integrations to, like, the zip file upload. 

MARK: So one thing I love asking. I think this is going to be fun. So why would people choose Go Cloud Functions over other languages' Cloud Functions that we support? 

STEWART: Yeah, so that's a great question, and a question that I also have to think about often, which is, like, why do we even support these new languages? We already have Node. Can't everyone just write Node? Well, the fact of the matter is that not everybody wants to write Node. People want to write in the language that's most familiar to them. It makes it very easy to get started. 

And alluding to that earlier when I said, we don't want you to have to learn a whole bunch of new stuff. Well, if I tell you, hey, use Cloud Functions. Before you do, learn Node. That's a pretty big hurdle. 

MARK: That's literally what I went through. 

STEWART: Yeah, and so that's not great. I mean, Node's a great language. It's got a great community around it. But we want to make sure that this is as easy and intuitive to you as possible. The other thing that, actually, I think there's that familiarity. The other piece is just as I mentioned earlier picking the right tool for the job, different languages have different characteristics. So what we've seen with Go is often you can find optimizations in terms of speed, in terms of execution performance. 

And so you might want to pick the right language for the job based on its performance characteristics, the ecosystem of packages that exists around it, the types of people that work at your company and their familiarity and their desire to work with that language. 

MARK: I was hoping for way more flame war stuff, but that's cool. That's good, too. 

AJA: So, basically, they're trying to meet folks where they are with the problems they have and the tools they're familiar with and make it an easy on ramp for everyone. I approve. I think that's amazing. 

STEWART: Yeah, exactly. And I think the best thing we can do, then, is we come to you and we say, hey, you write Go? Well, you can write Go on this thing. And by the way, it looks and feels like Go. It's idiomatic. 

TYLER: Yeah. I think that's the same principle that goes into, say, for HTTP functions, where it's just a handler func. And it's the same guiding principle for you shouldn't need to learn Cloud Functions Go. It's just you know Go or you like Go or you're learning Go or none of the above. And you shouldn't have to do something special just for this. 

STEWART: Yeah, and just to throw a little teaser out there, because I know some people aren't as interested in Go as they might be in other languages, we're working on other languages, as well. You should expect to see more language support in the future. Google Cloud supports a broad range of languages, and we want to conform to that. 

AJA: So that's a lovely segue into asking, so what comes next for Go Cloud Functions? 

STEWART: So Go 1.11 is in beta right now. That means we still have polish work to do, both on the reliability side, on the performance side. Faster deployment times, for example, is one of the pieces of feedback we've received. We want to give better error messages. One of the nice things about being in a serverless environment is that you don't have to think about the infrastructure that's underneath. But one of the downsides is that you can't really just SSH into a machine and necessarily figure out what's going on. 

And because you don't have that control, giving back meaningful error messages is super important. Because the worst thing is something breaks and you have no way of figuring out what happened. So for us, there's a lot of work on the polish side. 

TYLER: With serverless, it is a bit of a black box of what that machine is, and you don't know what's happening. And you make whatever API calls and you don't know how long they're taking. And so a good way to debug that, and a general just development piece of advice, is to use tracing and logging in general. And so tracing, as a quick primer, is you can trace the function calls and API calls that you're making from your code and say, this translation API took 150 milliseconds to compute or to respond. So it's not worth really looking into this if my user code only added 10 milliseconds to this. There isn't much optimization to add. 

STEWART: And there's a library for that, right? 

TYLER: Yeah. So there's something called OpenCensus, which is an open source library. It's mainly sponsored by Google and Microsoft, where you can export to whatever tracing, visualization, and debugging provider that you prefer. So for Google, that's Stackdriver, but there are many other offerings that do the same thing. 

MARK: And we even have a podcast on it, episode 118. 

STEWART: Nice. 

MARK: Favorite question I also like to ask. What's the most interesting thing you've seen so far people build with Go Cloud Functions, or wacky or just plain strange? 

STEWART: So there's a very interesting company out of Europe in the farming space that I spoke with recently, and they do something really cool where they have a bunch of different IoT devices sitting in their farms, each with variable degrees of high-speed internet. And those are emitting events about the state of the farms, so temperature readings, humidity. And all of that data gets fed to a message bus, which feeds into Pub/Sub and then triggers Cloud Functions that run in response to those readings. 

And so Cloud Functions is a very useful piece of glue there, where you can take that data, put it somewhere where it's more persistent, and now you have a pretty reliable way of seeing, in one state, OK, what is the state of my farm? What does everything look like? And so you get Cloud Functions as glue code, but also handling data and making those use cases very easy through very simple bits of code. You know, you're talking about less than 100 lines of code to set this whole thing up. 

MARK: Tyler, you got anything, as well? 

TYLER: I don't think anything's specific, but just commenting on Pub/Sub and just the things that people can push through it. And the amount of execution that can go through it and be triggered and scaled automatically with, as Stewart said, very little code that you've actually written. It's just really cool to see. 

STEWART: Yeah, it's pretty mind-blowing when you see the types of things people are able to build when you give them these simple primitives and good integrations. Things like, hey, every time something happens to my Firestore, I want to run some code in response to that. People can come up with some pretty amazing things when you just give them those pieces. Hey, can I shout out some more stuff that's coming up for Go? 

We're working on Go 1.12, so expect that sometime in the near future. It'll be pretty similar to Go 1.11. There will be some improvements. We're putting in all this work to make sure that we are respecting the language communities and really supporting the language. We want to make sure that we also stay current with the language versions. 

MARK: So that sounds really great. If people are like, this sounds awesome, and they want to learn stuff about Go Cloud Functions, where should people go? Is there some good resources that people can take advantage of? 

STEWART: Three things. The first is we had a pretty cool launch video for this runtime. You can see it on YouTube right now. Search Go Cloud Functions. Should pop right up. 

MARK: We'll put it in the links, too. 

STEWART: It walks you through the basic types of functions, how to deploy what the experience looks like from GCloud. It's about five minutes long. It's a great way to get started. I'd also recommend the quick starts. So go to the docs page. We'll have a link to that below. That will basically walk you through if I'm a Go developer, how do I go from having no code to using GCloud to deploying my first go function? 

And the last thing I'd shout out is if you only have a couple of minutes, the quickest way to get started, go to the Cloud Console, go to the Functions page, click Create Function. Select the Go Runtime. It will give you a pre-populated snippet of code that you can deploy. Click Deploy. You're going to get a URL. You can invoke it. I'd say that's the easiest way to go from nothing to actually trying the product out, having your first experience with it, in less than five minutes. 

MARK: Fantastic. Well, Tyler, Stewart, thank you so much for joining us on the podcast today and telling us all about Go Cloud Functions. 

STEWART: Yeah, thanks for having us. 

TYLER: Yeah, thank you. 

AJA: So thanks again to Stewart and Tyler for joining us on the podcast today and teaching us all about Go Cloud Functions. There's a lot of exciting stuff going on there. 

MARK: Awesome. So we have a question of the week, as always, and I get to ask you a question of the week. Ha, ha, ha. So the question of the week is, how many ways can you run containers on Google Cloud? 

AJA: I believe the answer is 4. 

[BELL DINGING] 

MARK: OK. 

AJA: This is something that I discovered a couple of years ago and I have found that most people actually haven't figured out. Everyone knows about Kubernetes, because Kubernetes is awesome. A fair number of people know about App Engine Flexible, where you can run containers, which is how you can run languages that we don't support fully. But maybe you really want to run a COBOL container or something for your application. So that's one and two. 

What a lot of people don't know is that you can actually run containers straight up on Google Compute Engine. So you can run them either as part of a managed instance group, or you can actually just deploy a VM based on a container image. It's really handy if you just need to speed up a single instance of a container. And we're going to have a link in the show notes to more information about this on a document that's actually been updated relatively recently. Because this is still a really common use case that people have. And if you don't need all of the really cool orchestration abilities and discoverabilities of Kubernetes, this is another way to run containers that is absolutely 100% supported. 

MARK: Nice. 

AJA: The other super cool thing is the managed instance groups support both health tracking and auto scaling. 

MARK: Nice. 

AJA: So you get some of the benefits of an orchestration tool, but not all of them. But it's a lot lighter weight. So it's a good choice for some folks. Not for everyone. 

MARK: So I think you said four. 

AJA: Yes. So we have Kubernetes. 

MARK: Kubernetes, App Engine Flexible. 

AJA: App Engine Flexible, as a standalone VM, and as part of a managed instance. 

MARK: Ah, fantastic. One, two, three, four. 

AJA: Sorry, I'm counting compute engine twice, because it's that awesome. 

MARK: That's all right. One, two, three, four. Ha, ha, ha. 

[MUSIC PLAYING] 

Sorry, I had to get that in there. Awesome. Well, Aja. What are you up to? What have you been doing that's cool and interesting or things that people can look forward to? 

AJA: Oh, I've been on my winter hibernation phase. I don't actually have any conferences planned until Google Cloud Next in April. 

MARK: Yeah? What are you doing at Next? 

AJA: Right now? Nothing. My actual contribution at Next this year is I'm helping represent our developer attendees as part of our sessions curation process. So I'm making sure that our story has all the stuff that everyone who listens this podcast wants to learn. 

MARK: Excellent. 

AJA: Make sure we're having really good stories for all of our wonderful technical practitioners who come to join us every year for our big party in San Francisco. 

MARK: Well, that sounds good. Well, I'll be speaking in Cloud Next, as well, which will be great. I'm looking forward to that. Two weeks before Next, I will be at a rather small conference called Game Developers Conference. It's just 30,000 people. It'll be fine. We'll be doing some cloud sessions there. It'll be a mobile dev day. There'll be a cloud dev day. All sorts of good stuff. We'll have a link to that in the show notes, as well. 

And just after all of that, actually, I'll be also presenting at East Coast Game Conference talking about Agones and talking about open source, in general, particularly how it relates to the games industry. One thing I do want to shout out that's really cool that I get really excited about, because I work on Agones and that project. We just released our new website. If you go to Agones.dev, it's all pretty and stuff. 

It uses a theme that actually came out of Google called Docsy, so huge thanks to that team, as well. So if you're looking for a good way to do open source docs for your next open source project, it's really, really nice and takes away a lot of the pain points of trying to build a site that's very particular for open source and documentation and all that good stuff. Oh, yeah, I started Twitch streaming a bit, too. 

AJA: Awesome. That is so cool. 

MARK: Yeah. I'm going to try and keep that up while I'm in Australia in a few weeks. 

AJA: Hey, everyone can watch you review poll requests and make stuff better and write code and solve problems. It's always fantastic to watch everyone else's process and realize that I'm not the only one who occasionally bangs my head against the wall. 

MARK: Oh, yeah, I mess things up all the time. 

[GLASS SHATTERING] 

That's literally my entire Twitch stream. 

AJA: Sounds awesome. 

MARK: Fantastic. Well, Aja, thank you for joining me on the podcast this week. 

AJA: Thank you for letting me co-host, Mark. This was a lot of fun. I hope to be back soon. 

MARK: Awesome, and thank you, everyone, for listening. And we'll see you all next week. 

[MUSIC PLAYING]