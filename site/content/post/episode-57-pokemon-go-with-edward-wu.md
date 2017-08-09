+++
audioDuration = "00:43:10"
audioFile = "Google.Cloud.Platform.Podcast.Episode.57.mp3"
audioSize = 62188890
categories = ["Customer", "Gaming", "Kubernetes", "Container Engine", "Datastore", "Bigtable"]
date = "2017-01-18T01:07:49Z"
description = "We're back! And we're bringing a seriously cool interview about Pokémon Go with Edward Wu, Director of Software Engineering at Niantic."
draft = false
episodeNumber = 57
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Pokémon GO with Edward Wu, Director of Software Engineering at Niantic"
image="/images/post/pgo_logo.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/D6Hb4KJ4WVW"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/5oquvc/episode_57_pok%C3%A9mon_go_with_edward_wu_director_of/"
+++

We're back! And we're bringing a seriously cool interview about Pokémon GO with Edward Wu,
Director of Software Engineering at [Niantic](https://twitter.com/nianticlabs).

In this interview your co-hosts [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic)
chat with Ed about the whole history of [Pokémon GO](https://twitter.com/PokemonGoApp),
from the inception of Niantic to the amazing success and the scaling challenges they faced.

<!--more-->

##### About Ed

Ed Wu is a Director, Software Engineering at [Niantic](https://twitter.com/nianticlabs) who leads the
engineering team of Pokémon GO as well as the Niantic Seattle site.
Before helping to lead Niantic from its successful spin-out from Google, Dr. Wu was a Staff Software
Engineer at Google where he developed machine learning models in ads quality.

He received his PhD from Stanford in Physics in 2009 applying Bayesian parameter estimation models to cosmological data
he collected from three visits to Antarctica and the South Pole.

##### Cool thing of the week

- How we secure our infrastructure: a white paper [blog post](https://cloudplatform.googleblog.com/2017/01/how-we-secure-our-infrastructure.html)
- Google Infrastructure Security Design Overview [docs](https://cloud.google.com/security/security-design/)
- Google Cloud Platform icons and sample architectural diagrams, for your designing pleasure [blog post](https://cloudplatform.googleblog.com/2016/12/Google-Cloud-Platform-icons-and-sample-architectural-diagrams-for-your-designing-pleasure.html)
- Solution Icons for Architectural Diagrams [link](https://cloud.google.com/icons/)
- Continuous Deployment to Google Cloud Platform with Drone [NYTimes](https://open.blogs.nytimes.com/2017/01/12/continuous-deployment-to-google-cloud-platform-with-drone/?_r=1)
- You can read all the source code in:
    - [Drone](https://github.com/drone/drone)
    - [Drone GKE](https://github.com/nytimes/drone-gke)
    - [Drone GAE](https://github.com/nytimes/drone-gae)

##### Interview

- Pokémon GO [homepage](http://www.pokemongo.com/)
- Bringing Pokémon GO to life on Google Cloud [blog post](https://cloudplatform.googleblog.com/2016/09/bringing-Pokemon-GO-to-life-on-Google-Cloud.html)
- Leveraging the Google Cloud Platform [niantic](https://nianticlabs.com/blog/googlecloud/)
- Ingress [homepage](https://www.ingress.com/)
- Introducing Google Customer Reliability Engineering [blog post](https://cloudplatform.googleblog.com/2016/10/introducing-a-new-era-of-customer-support-Google-Customer-Reliability-Engineering.html)
- 'Pokémon GO' Is About To Surpass Twitter In Daily Active Users On Android [Forbes](http://www.forbes.com/sites/jasonevangelho/2016/07/10/pokemon-go-about-to-surpass-twitter-in-daily-active-users/#192ba1a85174)

<div style="text-align: center">
  <img src="/images/post/pgo_logo.png">
  <p><small>Pokémon GO logo owned by The Pokémon Company (from <a href="https://en.wikipedia.org/wiki/Pok%C3%A9mon_Go#/media/File:Pokemon_Go.png">Wikipedia</a>)</small></p>
</div>


Pokémon GO stack:

- Java on Container Engine [docs](https://cloud.google.com/gke)
- Cloud Datastore [docs](https://cloud.google.com/datastore)
- Cloud Bigtable [docs](https://cloud.google.com/bigtable)
- (and more)

##### Question of the week

I have these keys that I want to use for encrypting my data at rest.

- Managing encryption keys in the cloud: introducing Google Cloud Key Management Service [blog post](https://cloudplatform.googleblog.com/2017/01/managing-encryption-keys-in-the-cloud-introducing-Google-Cloud-Key-Management-Service.html)
- Google Cloud Key Management [docs](https://cloud.google.com/kms/)

<div style="text-align: center">
  <img src="/images/post/kms.png">
  <p><small>Different solutions for different security needs</small></p>
</div>

{{< transcript "FRANCESC: Hi, and welcome to episode number 57 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark. How are you doing?" >}}
MARK: I'm good. Happy new year! 

FRANCESC: Happy new year to you and to you all people listening everywhere around the world. 

MARK: Yeah. And we're back again for 2017. 

FRANCESC: And we're back again with some incredibly amazing episode. I know that you're very excited about this one. 

[LAUGHTER] 

MARK: It's pretty cool. We're talking to Edward Wu from Niantic about Pokemon Go in this episode. 

FRANCESC: Yeah. 

MARK: It's pretty exciting. 

FRANCESC: Quick question-- are you more excited about this episode or the episode with John Wilkes? 

MARK: So, I feel like you can't compare two beautiful sunsets. 

FRANCESC: Do you love more Mom or Dad? 

[LAUGHTER] 

MARK: How do you compare two beautiful sunsets? 

FRANCESC: Yeah. 

MARK: I don't think you can. They are both unique and wonderful in their own ways. 

FRANCESC: Yeah, I know. I'm very, very excited about this episode, too. There's so much to learn about the whole experience that they went through. So yeah. And we're going to discuss all the interesting things that they went through, all the Pokemons that were cut, and stuff like that. 

MARK: Yup. And then once we're done with that, we have a Question of the Week about encryption keys. 

FRANCESC: Yeah. And which is pretty cool, because actually, the answer is related to something new, too. So a very interesting question and answer. 

But before that, we have the Cool Things of the Week. The first Cool Thing of the Week. And we had to choose only three out of the many, many, many things that happened during the holidays. But we will spend our time in the future weeks, basically, going over all the cool things that happened. 

MARK: I don't understand. You figure that people shut down over that period. But no, apparently, everybody's like, let's release a whole bunch of stuff. 

FRANCESC: They work harder. It's like please, people, chill. Anyways, so the first one is this blog post that is part of the Google Cloud Platform blog post on how we secure our infrastructure. As in, how we secure our own Google Cloud Platform infrastructure. 

So the blog post is a pretty short blog post, but it actually points to a security design white paper that is definitely worth reading. It has I really like that it starts with a CIO-level summary. So there's basically four points that you care about, what they are going to be talking about. But you can go into it in more details and see how we protect you against DOS attacks. Or how encryption at rest works and how deletion of data happens. 

This is like, so much stuff. There's all of those security layers, and it goes into detail on every single one of them. So it's definitely worth as a curiosity, really. But if you are interested in security, it's definitely a good paper to read. 

MARK: Actually, it's worth noting. Really, this is like the beginning of a series of stuff around security and identity that are going to be happening on the blog. So definitely stay tuned if that's your thing, and you're really concerned about security and identity. 

FRANCESC: Yeah. And if you're not concerned about security, you should. 

[LAUGHTER] 

No, but it's a very interesting white paper nonetheless. 

MARK: Absolutely. So the next one is-- I don't know why, this just makes me really happy. I know a lot of people have wanted this for a while. 

We now have actual icons and sample architectural diagrams for designing stuff like when you're building out your architecture on Google Cloud Platform, and you want to design it out using either, say, Google Slides, or Lucidchart, or PowerPoint. Or you just need PNGs or SVGs to put inside your favorite diagramming software. Yeah, we have those now available to you so you can use them! Which I think is actually really handy. 

FRANCESC: I'm incredibly excited about it, because I, like-- it is sad to say, but very often, I would Google-- I would search on Google for our own products to find that-- 

MARK: Exactly! 

FRANCESC: --in our own presentations. So I'm very happy that we finally got a repository. And it is open, so anyone can use it. So if you think about talking about how you use Google Cloud Platform on a presentation, feel free to go and use them. 

MARK: Definitely. Yeah, we have one more. 

FRANCESC: Yeah, one more Cool Thing of the Week. And this one is really cool to start with, because, of course, it's written in Go. But also because it is about something that many people have asked me about how to do it, which is how do we do continuous deployment to Google Cloud Platform? Specifically, how do you do continuous deployment to App Engine and Container Engine? 

And turns out that "New York Times"-- they have been using Google Cloud Platform for quite a while. They had this issue, and they solved it. And they open-sourced the project. 

MARK: Yeah. It's super cool. There's new-- sorry, there's an open-source continuous integration, continuous deployment platform called Drone that's written in Go. And they built plugins for it for GKE and GAE so you can do continuous delivery and deployment to those two platforms. 

FRANCESC: Yeah. 

MARK: It's pretty cool. It's all built around containers. Yay containers-- we all love containers. And it's pretty neat. So super happy to see, like, the community and the ecosystem around Google Cloud Platform continue to grow. 

FRANCESC: Yeah. It is definitely worth it. So check it out. We have a link on the show notes to the blog post, but also to the GitHub repost. You can go and read the code directly, which is very nice. 

MARK: Cool. Well, why don't we go talk to-- hee, hee, hee-- why don't we go talk to Ed about Pokemon Go? 

FRANCESC: Sounds good. Let's do that. 

MARK: So today, I am very excited to have Edward Wu here from Niantic joining us on the podcast. Ed, how are you doing today? 

EDWARD: Very good. Thank you very much for having me here. Really excited to be able to talk about how the past few months have gone. 

MARK: Yeah, it's not like you've been up to anything special, or exciting, or anything like that, that anyone would have ever heard of, or anything. 

FRANCESC: Nothing big. 

MARK: Nothing big. Nothing at all. 

[LAUGHTER] 

EDWARD: Getting-- yeah, getting plenty of sleep, of course, yes. 

MARK: Of course, excellent. Cool. So before we go into the magic of Pokemon Go, do you want to tell us a little bit about you, and who you are, and what you do? 

EDWARD: Sure. I'm director of software engineering here at Niantic. I actually lead the Pokemon Go engineering team. Done so since we spun out of Google in October of 2015 and all the way through the launch of Pokemon Go last summer all the way through today. And in addition to managing the engineering implementation of Pokemon Go, I also product manage portions of our technology platform, which I'd be happy to speak about later. 

FRANCESC: Cool. So I heard something that surprised me listening to one of my favorite podcasts, which is not this one. [LAUGHS] 99% invisible. I heard about this ship below the Embarcadero here in San Francisco called "The Niantic?" Is there any relationship? 

EDWARD: Yeah, that's kind of what our company is named after, and what our autonomous unit while we were inside Google was named after. There was a ship that actually ran aground-- they ran aground during the Gold Rush era of San Francisco. People were so excited to get on shore that they decided just to run it aground and turn it into a hotel rather than continuing to sail it back and forth. And I think the sense of adventure and discovery is part of what our CEO and founder John was trying to evoke there. 

MARK: So you mentioned just a bit there, like Niantic spun out of Google. Do you want to give us a little background of Niantic the company? I think it's got kind of a little unique history. 

EDWARD: Yeah. It's got a really unique history. So our CEO and CTO-- our CEO John Hanke and our CTO Phil Keslin are actually veterans of a previous startup that was acquired by Google called Keyhole. Keyhole made a product which turned into what most people know as Google Earth today. 

And so while they were in Google, this was the age when, you know, the very first set of smartphones began to get into the market, so things like Google's Nexus One phone. And they looked at these things, and they saw that the majority of kind of entertainment and experiences on them were things like Angry Birds-- which, while it was novel from an input perspective, was not particularly making full use of the insane capabilities that having a computer to carry around in your pocket could provide, right? These things are loaded with location sensors, and network capabilities, and advanced processing power. They really thought there was something that they could do to make unique experiences with these devices that, since they were portable, actually got people outside, got people to meet each other, got people to explore their world, got people more engaged with the communities. 

They started investigating a variety of product ideas which could actually go towards that goal. And they came up with two, which are-- both were quite informative both from a product and technology perspective for what eventually would become Pokemon Go. So while we were in Google, we launched two products. One is called Field Trip, which uses the location sensors on your phone to make local recommendations of really interesting sites that might be around you that you might want to check out. 

The other one was a game called Ingress, which is something that if you play Pokemon Go and then go back to, you'll recognize large elements there. There's a resource collection, a mechanic on the move, there are points of interest in the game that the game tries to drive you towards. So interesting local historical monuments, or art, or small, interesting local businesses. And this game, just like Pokemon Go, is a location-based game that tries to actually get people to interact out in the real world together using a single consistent game board. 

And so we were actually quite successful in getting a lot of attention on Ingress. And one of that bits of attention was actually the folks at the Pokemon Company, who saw that this game that was actually getting people out into the real world, that was actually getting them to meet others and explore their local communities, was actually kind of a perfect fit thematically for the way that Pokemon has been throughout its entire IP lifetime. And so we decided to spin out of Google as an independent company with partnering with Nintendo and the Pokemon Company to create Pokemon Go. 

FRANCESC: Yeah, so you said that with Niantic, you got a little bit of attention. I'd say that with Pokemon Go, you got a little bit of attention, too? It was kind of a big deal. 

Could you give us a little bit an idea of how big of a deal it was? Like, we've heard everyone saying it was huge. How huge was it? 

EDWARD: Yeah. So as of December-- I crunch these statistics every so often with the help of the engineering team here. We take a look at not only the kind of more technical numbers, but some product-driven ones. 

So we've actually had people walk more than 8.7 billion kilometers, which, for a sense of scale, is past Pluto. And I think it's about 200,000 times around the Earth. And we've had more than 88 billion Pokemon caught by our players collectively. 

So just to give you the sheer sense of scale-- I mean, it's almost beyond comprehension, you know, the collective effort that people have put into not only playing this game. But actually when you think about all that walking, is the exercise and exploration, and meeting of new people that they've done in the midst of it. From a more technical perspective, to give you an idea of how much bigger this was than what we expected, it was roughly 50 times greater than the capacity that we actually had planned for at launch. And that's actually a story I'd be happy to go into, because it goes to the heart of why the Google Cloud team was such an instrumental part of our success. 

FRANCESC: So before we go into more details, I had a quick question about those 88 billion Pokemon caught. How many of them were Pidgeys? 

[LAUGHTER] 

EDWARD: I think a significant fraction. But actually, people play the game for different reasons, right? I think some people go and they try to catch every Pidgey in sight, because it gets them some Stardust, which will allow them to power up their other Pokemon. Other people try to pick and choose. So I don't think the distribution that you see on the screen is not necessarily the distribution that people actually end up catching. 

FRANCESC: Oh, OK. Interesting. 

MARK: Excellent. All right, so yeah, let's get stuck into the technical side of things, because I think this is absolutely fascinating. 

You mentioned as well, obviously, if you've played Ingress before, you can see elements of that in Pokemon Go. Did you end up using the same stuff that you used, the same products that you used in Ingress? Or did you take lessons learned from Ingress and changed certain things? What was different between the two products, and what lessons did you learn between them? 

EDWARD: From a technical architectural standpoint, the major transition that we made was from App Engine, which was a previous generation of Google's Cloud computing products, to Google Container Engine, which was something that only came out a few years after Ingress had started. And so we did take the opportunity to modernize some of our technical infrastructure. I'd be happy to go a bit into that later. But many of the core algorithms and many of the key both engineering learnings that we took away from how Ingress operated, as well as product lessons that we took away, greatly informed how we implemented Pokemon Go. 

MARK: So you mentioned sort of you modernized stuff. I believe you were using Kubernetes behind the scenes rather than the App Engine? 

EDWARD: Yes. 

MARK: What sort of drove that decision? 

EDWARD: So App Engine came from a different era of Google's Cloud services where things ran in a sandbox. And App Engine as a product is actually quite good for getting something out the door really, really quickly. Not having to worry about whether your front ends will scale. Not having to worry about exactly, you know, having full control of your server loop. It's kind of a plug-and-play for web services. 

And so initially, we implemented Ingress on that, because that was what Google had available five years back or so. And it worked quite well for us to begin to understand how does running a game where everybody in the world actually has to share a single, consistent view of that world-- what kind of technical tradeoffs do you need to make in order to make that happen in near real-time, delivered through the latency of a mobile connection? So App Engine was great for the time that Ingress was launched. 

Now, as we moved on to Pokemon Go, we wanted to modernize our architecture a bit. And the major difference between Kubernetes and App Engine is that Kubernetes gives you something that's much closer to a raw machine in a sense, right? You can run your own-- I mean, you can literally run Java Main and start up your own server there. And take inbound network traffic and configure it to your liking. 

In fact, we spun out of Google-- many of us are Google engineers. And Kubernetes actually resembles very, very strongly the kind of internal infrastructure that we were used to as Google engineers, of the ability to define services that ran very close to bare metal. It had all the flexibility of being able to interact very closely with the operating system and the network stack, but still was abstracted enough away from the bare metal such that we could rapidly scale the number of instances, if necessary. So what Kubernetes eventually, and Google Container Engine gave us, was all that flexibility of scaling and deployment that App Engine did, plus much more technical flexibility for us to define our own binaries. 

FRANCESC: Cool. So keeping on the topic of your stack, you mentioned Java Main, which kind of made me sad. Because I was wondering if Pokemon Go was actually running Go in any piece of it. 

[LAUGHTER] 

EDWARD: Just for the name of the product. 

FRANCESC: Yeah. Could you tell us, is everything written in Java? What languages are you using? 

EDWARD: So the server stack is more or less Java. And as former Google engineers and being part of the industry standard, Java really, I think, was the right decision for us to make. It allowed us to iterate very, very quickly on gameplay concepts, as well as bring in existing code that we had from Ingress and port it over from App Engine to Container Engine, since Java was one of the supported languages on App Engine. So the other thing that Java allowed us to do was, because it was an industry standard language, was allow us to bring the best and brightest of server engineers who wanted to work on a product like Pokemon Go into Niantic. 

FRANCESC: Cool. So one of the things that kind of surprised me was I saw that you were using Datastore. And at the same time, you have the biggest Kubernetes cluster in the world-- or at least when we announced it, it was the biggest one. 

MARK: As far we were aware, anyway. 

FRANCESC: So I was wondering-- I mean, you definitely had space to run the database on the Kubernetes cluster, since it's so big. Why didn't you do it? Why did you go with Datastore? 

EDWARD: So there's some prior experience that we had with Datastore, but that was not determinative. So Datastore was pretty much our only option for Ingress. Because, again, App Engine is a script framework which allows you to not have to worry about implementing a database. Doesn't make you worry about standing above your own web servlet binary, et cetera. But the price that you pay is that you have to go with the chosen storage technology, which in that case, was Datastore. 

Now, that being said, Datastore is an awesome technology, and that's why we actually, when we made the transition from App Engine to Container Engine, we evaluated a variety of different options, you know, being able to stand up our own relational database or using some other cloud-based NoSQL provider was definitely other options that we looked at. But we kept coming back to Datastore. 

And the reason that we stuck with Datastore was because it scales almost indefinitely from doing individual development as an individual developer on a test instance all the way up to games at the scale of Pokemon Go, right? And it scales seamlessly. You don't need to do any configuration changes-- at least on our side, on the developer side, we didn't need to do any configuration changes. We didn't need to do any kind of futzing with routing, or futzing with scaling the database back ends, or anything, right? All we had to do was program against a set of transactional APIs. 

And what we got in return was multi-entity transactions that were consistent and distributed that we didn't have to worry about making sure were backed up or replicated. And advanced indexing capabilities, which we use at both the heart of both Ingress and Pokemon Go. And so after taking a look at a lot of options, maybe using like a sharded mySQL instance, or using a different third-party NoSQL provider, we really thought that Datastore had the most advanced combination of the scale of the multi-entity transactions for a NoSQL data store as well as advanced indexing capabilities and ease of use and maintenance that were just unparalleled and frankly, were a key part of our success. 

MARK: Excellent. No, that's super cool. So I know we've talked about GKE and Datastore. Are those are the only products you're using? Are you able to talk about anything else that you've used that's on Google Cloud Platform or across Google? 

EDWARD: Yes, absolutely. So one of the benefits of having worked at Google and being former Google engineers is that we've actually seen the progression of tools that Google created for its own internal engineering progressively propagated out as Google Cloud Platform products. And one of the ones I really want to highlight is Google Cloud Bigtable. You know, we loved working with Bigtable as engineers within Google. 

It's a key part of many, many, many Google systems. And its debut as an external service is for a completely different use case than for Datastore, right? Datastore we use for transactions, whereas Bigtable is more for book storage and book data processing. And it's been an incredible product to actually have on the outside, and I hope that Google continues to push more and more of the awesome internal tools that we loved as engineers in Google out to the Cloud Platform. 

FRANCESC: Yeah. We cannot confirm nor deny, but yeah. I think that that's-- there's more coming, yeah. 

EDWARD: Awesome. 

MARK: OK, cool. So this probably segue actually quite nicely, too. You talked about how with Datastore, you didn't have to do any changes to handle the amount of throughput that was coming through. 

FRANCESC: Yeah, that was a very subtle way of putting it. 

[LAUGHTER] 

MARK: No, I thought that was quite-- I thought that was quite cute. But I know we have-- I mean, we've announced the Customer Reliability Engineering team, the CRE team. And they basically started interacting with you as a customer. 

How is that experience? Like, how did that go? What was that like? 

EDWARD: So I think here is actually a good time to go through the whole story of the launch, because it's directly relevant to how that interaction was so, so helpful. So we did our homework before we launched Pokemon Go-- I swear we did, right? We went and we looked at the launches for other mobile games, top tier mobile games, right? 

Ones with established IPs, ones that were sequels of, like, really popular games in the past couple years. And we looked at, you know, from publicly available business intelligence what the number of-- what the growth curves would look like, what the number of users that they would have-- would look like. And we used those numbers and our experience on Ingress to extrapolate from kind of the product-driven numbers, like monthly and daily active users to what we thought would be the load on our servers and on Cloud Datastore at any given time. 

And the Cloud Datastore team, leading up to our launch, was great. They were constantly in touch with us, helping us with upgrades to the APIs or fixes for things that we didn't understand when we encountered them. And they also asked, quite reasonably, so what do you think your capacity for launch will be? 

So we extrapolated from all of those numbers to what we thought was a reasonable number, right? And then we multiplied the reasonable number by, like, five times, and said, this is ludicrous. Nobody will ever-- 

[LAUGHTER] 

They'll never go, like, five times bigger than anything else that's out there. And we'll ask Datastore to set that aside for us. 

So we launched the game on the evening of July 5th. So July 4th is, of course, a holiday in the United States. We were lucky enough to actually get everything squared away before the holiday weekend. And so I had everybody go and have barbecues, and watch fireworks with their families. We came in rearing on July 5th, ready to launch. 

And the way that we were going to launch was that we started out with Australia and New Zealand, these markets that we could watch that were in another time zone and that we could see through the evening as to how they progressed, before we moved onto more populated areas of the world like the United States. And what ended up happening was we immediately-- like, it looks like a sharp delta function spike, right? Like, we immediately blew past the 1x number, you know, the kind of baseline estimate for the whole world, that we thought we were going to-- [LAUGHS] we were going to need, right? 

Just in Australia and New Zealand. And we were well on our way to that ludicrous 5x number just from Australia and New Zealand. Mind you, Australia and New Zealand-- we expected, from other product launches of other business intelligence in the mobile market to be single-digit percentages at most of the entire worldwide active user base. 

At this point, we called up our friends at Google and said, well, you know those estimates that we gave you? That was great! We might need to go a little bit higher. 

MARK: Right. 

[LAUGHTER] 

EDWARD: And it turned out that over the course of the next few weeks, as we launched across all of-- first, the United States the day after Australia and New Zealand. And then progressively around the rest of the world, that we ended up eventually needing something on order of 50 times the initial capacity estimates that we gave to Cloud Datastore. 

MARK: Just a little bit. 

EDWARD: So just a little bit. So that team was instrumental in working with us to make sure that that could happen. I know that pulling that off basically within two weeks between our initial launches to launch in Japan, and then further on into the rest of the month throughout Southeast Asia and Latin America-- pulling that off required a lot of work on the Google side, you know? I don't think that they'd ever seen anything of this magnitude come through a single customer service. And so I know that they did a lot of work to rearrange internal resources and move things around in the data centers to make sure that they could support us all along the way. 

And during all of that, we didn't have to-- like I said, we didn't have to change anything in our APIs, right? We didn't have to reconfigure, you know, any kind of routing system. Or we didn't have to change the types of transactions. We just kept on plugging on, doing what we were doing. Fixing our bugs and fixing anything that we had in our own servers that we had had to work out to get to scale. 

And the Datastore team did everything they could to support us. And so one of the things I'm really proud of is that in fact, I think the separation was actually full and complete. Google engineers never took a look into our code base. We never invited them to, they never needed to, right? The layer of the API abstraction was complete and perfect. 

And I'm very proud of how we actually ended up scaling. I know the first few days, it was obviously a little difficult to get into the servers. But it turns out that our fundamental technical architecture was sound. 

And what our scaling bugs were were the kinds of things that you'd normally run across as you scale up any web service. So a typical debugging loop looks like to us like, OK, well, let's take a dump of all the stack traces that were running in the server right now. And oh, like maybe 75% of them are caught up on some silly mutex somewhere. So you go and you do a four-line code change to fix the mutex. 

And then throughput shoots up on the server, and then you look for the next bottleneck, right? These are things that are very, very routine for people who deploy webservices at scale. The only difference between them and us is that we had to do so on the back of a rocketship. 

[LAUGHTER] 

You know, I think other folks get a little bit of a gentler growth curve. 

FRANCESC: Yeah, I have an article right now next to me saying that after day 2, you basically reached the daily users of Twitter, which is crazy. The amount of users that you got so fast, and scaling that fast without having to rewrite all your code-- I'm pretty sure that if I have any of my demos to have to scale that much, I have to rewrite the whole thing. So that is pretty amazing. 

EDWARD: Well, yeah. I can't talk about daily users in particular, unfortunately. But obviously, if I may, one of the other key points of the way that we scaled that I'm very, very proud of is that these aren't just isolated users working in their own instance, right? I think-- we'll get to the key of why this is so important later, but ultimately, Pokemon Go is a single, consistent world for everybody who plays on it. 

If somebody manipulates a Pokestop and puts a lure on there, everybody within about a kilometer has to see those petals dropping from the Pokestop. If a set of a few dozen people are in the same park together, and there's a Squirtle on one end of the park and they're all within range of it, they all have to be able to see that Squirtle at the same time. Maintaining that consistent world state means that we have a variety of not just n scaling problems, but n-squared-like scaling problems, right? 

I'm very proud that not only our algorithms, but Google's Cloud Platform were able to accommodate those algorithms to scale in such a fashion, which I think is really a non-trivial feat of engineering. And it is entirely empowered by the fact that we were running on Container Engine and Datastore and were able to basically turn the knobs as necessary with our binaries on those platforms in order to make the n-squared scaling work. 

MARK: Excellent. I'm sure I'm going to get deflected, but I feel like I should ask anyway. So what can we expect for the future of Pokemon Go? 

[LAUGHTER] 

EDWARD: So unfortunately, I can't talk about any particular future product launches. But we are working very, very heavily on really a set of features that frankly, as a player, I'm insanely excited about. 

And I will say that Ingress is about four years old. And during that time, we have improved substantially. I think vast swathes of the game, actually, were not there at launch, right? So things like the Ingress mission system, or the regionals scoring system, or player profile, and badges-- all this stuff was not there when we initially launched Ingress. And we are committed to these games for years, because we know from Ingress-- we know that people actually play them for years. And so I'm very, very excited to follow a similar trajectory on Pokemon Go to continue to support and build out major features in this game and really bring a lot more joy to people as time goes on. 

MARK: So you've obviously got a history of building sort of mobile, location-based experiences. Is there plans to expand upon that? More products, that sort of thing? 

EDWARD: Absolutely. So one of the great things about moving to Container Engine was that we took the opportunity while we did so to also separate our game logic from what I would call our core geospatial inquiry logic. Our core geospatial inquiry logic and the way that we interact with Google's Cloud Platforms are segregated into a separate codebase. Literally, we run two repos-- a platform repo and then a game-specific repo. 

MARK: Interesting. 

EDWARD: We very much want to make sure that the way that we interact with the Cloud Platform is nicely encapsulated so that we can very quickly scale out our own internal teams to try a variety of really interesting new product ideas. And we really believe that this is a genre, an entire genre, of games that actually is the future of mobile and AR gaming is going to look like. And there are a lot of great ideas out there, and in order for us to be able to rapidly iterate and try to winnow them down into our next product, we absolutely need to be able to abstract away the way that we interact with platform technologies. And so in the creation of Pokemon Go, we already took on the vast majority of the work necessary to do so, and I'm really excited to see what we're going to come up with next. 

FRANCESC: So in a more personal note, I know that for me, Pokemon Go-- it actually changed a little bit the way that, like, I would take the bus less often. Because, you know, when the bus goes too fast, you cannot really catch the Pokemon that easy. So I would walk a little bit more. 

What about you? I'm curious about you, since you lived it from the inside. What did Pokemon Go change in your life? 

EDWARD: Yeah. So I will say on a personal note, my father plays this game religiously, right? And he's actually a Level 31 trainer. 

Which is amazing to me, because, you know, he hardly ever played video games ever in the past. And this is incredibly gratifying for me personally, because for the last, I'd say, dozen or so years, he's been managing his blood sugar intake because of adult onset diabetes. And this game has gotten him out walking daily, exploring his neighborhood, keeping up his exercise. 

And he's gotten his blood sugar to be as rock solid and stable as ever! I mean, it's incredible to be able to have that kind of effect. And if you think about-- you know, that's my father, of course. Like, that's incredibly near and dear and personal to me. 

But it's incredibly gratifying as an engineer to realize that there must be millions of people like him out there who are playing this game, who are improving their health, who are finding out more about their communities, all because of code. Not only that we wrote, but that Google's Cloud Platform empowers, right? Ultimately, Google making these services available is a paradigm shift in the way that single, consistent world gaming can actually be engineered and can actually be deployed, and delivered to mobile phones. And it's amazing to think that we live in an era where we can actually drive substantial changes in personal behavior for the better, based on what people might think of as dry, technological concepts like Container Engine. When, in fact, it's actually quite exciting. 

MARK: Excellent. No, that makes a lot of sense. And I can totally see why that is very exciting, 100%. 

So we are running out of time, unfortunately. I mean, we could talk for hours. Is there anything we haven't touched on, or something you want to mention? 

I know Niantic is hiring. I do want to talk about that. Like, what can we wrap up with you? 

EDWARD: Yeah, absolutely. Niantic is hiring. I think we really have a lot of really great positions open not only if you have experience in large-scale server architecture both in, you know, C# and Java, but also on the mobile client and device side. You asked earlier about what languages we program in. We also program in Unity and C# because ultimately, we have a mobile client that's beautiful, that's performant, and that requires a lot of not only Unity code, but also mobile native code. So C++ Java, Objective-C in order to make happen. 

I also want to plug one other bit of where we're going as a company, because I think every part of the company will feed into this. So one of the things that we've invested a lot into in the past as part of Pokemon Go is the Pokemon Go Plus, which is this device that you can actually wear and that will help you play the game alongside you, so that you can actually have an experience playing the game that doesn't involve your mobile phone. It can be a hands-off experience while you're still exploring the world and playing the game simultaneously. 

We really think that even though the Pokemon Go Plus is right now just a vibrating button with some lights, that it is a harbinger of what hardware's going to look like in the future. And you can see from our very first concept trailers for this game that we really, really believe that there's going to be, from all of these augmented reality hardware products that people are trying out right now, things like Microsoft HoloLens or Google's Tango-- all these different technologies that people are trying to put out there to overlay things on top of the real world. That there will be mobile technology that integrates, seamlessly integrates the real world with a virtual one. And we are very excited to be at the forefront of that. 

I think we really demonstrated that augmented reality technology is not solely about the hardware experience. Although we are very excited about integrating those hardware experiences and that tehy come online. But we really believe that augmented reality is just as much about being able to have a shared state with all the people around you so that everybody who participates in this reality really believes it at a fundamental level. 

You know, there's something really magical about the idea that when 10 people open up their mobile phones and see a Charizard further down the block together, that they all orient that in their mind and they all believe that together, right? And we really believe that shared social experience is actually as much a part of augmented reality as the hardware experiences will be. And at its core, those shared social experiences are an n squared problem can only be solved by operating on a platform like Google Cloud. 

MARK: Excellent. Well, Ed, thank you so much for joining today. That was fascinating. And I think our listeners are going to really appreciate it. 

EDWARD: Thank you very much for the opportunity. I really appreciate the chance to talk to your listeners, and I hope that they get something out of this as well. 

FRANCESC: Yeah, and hopefully-- you said that you cannot share any of your future plans, but hopefully, we'll have you back once all of those secret future plans are public. 

EDWARD: I'd be very excited to come back. 

FRANCESC: Thank you. 

EDWARD: Thank you. 

FRANCESC: So thanks again, Ed, for such an interesting interview. There is so much knowledge. And I really feel like this episode could have been, like, one hour long, no problem. 

MARK: Yup. 

FRANCESC: There was so much to say. We had to stop it, but hopefully, he'll be back soon. Who knows? 

MARK: Hopefully, hopefully. 

FRANCESC: But yeah, I hope you enjoyed the interview. Let us know if you have any extra questions, so we can ask them directly if you want to. But it's time to go with the Question of the Week. 

MARK: Cool. So the Question of the Week we talked about around encryption and data encryption of data at rest. The idea being, so say I have these keys, right? 

I have these encryption keys that I want to use for encrypting my data at rest. I know Google encrypts data at rest generally, but I want to use my own keys. How can I do that? 

FRANCESC: Yeah, so that is actually something that happens often, is sometimes some companies-- they need to have their own keys. And they need to be able to access them. If you're using Google Cloud Storage, by default, it will be encrypted. But you don't have the choice of, this is the key I want to use. 

MARK: Yup. And that's the same for disks as well. 

FRANCESC: Yeah. It's actually basically, for every data stored at rest, is actually encrypted. So that is pretty cool. So now, what we have is there's two options. Either you manage completely your keys, and that is hard, because you know-- 

MARK: Security is hard. 

FRANCESC: Your keys are kind of an important thing to keep-- I keep on losing my keys, like my house keys, all the time. But if you lose your encryption keys, you know, drama. 

MARK: Yup. And you can't just keep your encryption keys in a bowl. That doesn't-- 

FRANCESC: Yeah, that's what I do, and I still lose them. But anyway-- the cool thing is that we actually announced recently a new service which is called Google Cloud Key Management Service. And what it allows you is to have your own keys that then you can use for the encryption at rest of your data on Google Cloud platform. 

But also, you're the one managing them. You can create them, you can rotate them, you can delete them if you need to. And something that I really like is that they're also-- this services is linked directly to IAM, which makes it really easy to manage who has access to what keys. 

And also, it is also linked to [INAUDIBLE] login, which means that you not only can control who accesses what, but you can also see who did access what. Which is something that internally at Google we use, and we know that many other companies need to use. So it's very nice to have. 

MARK: Cool. So actually, that's a really interesting point. So I might be-- I definitely have to have my own keys. 

And I have to manage them myself, because of some requirement or some sort of audit thing. But maybe my requirements are more just oh, you need to make sure you rotate them this often, or something like that. In which case, I could come to Google Cloud, use the Key Management Service, have them manage that, and make that really easy for me. 

FRANCESC: Yeah. Basically, we understand that some people, some companies have very strict requirements. That means that they will need to manage them themselves, and that is cool. But most of the time, the requirements that they're going to have will be met already by Google Cloud Key Management Service. And it makes things just easier. 

MARK: Totally fair enough. All right, cool. Well, I think that wraps up our episode, though. But I know you're about to do some crazy travel. 

FRANCESC: Yes. 

MARK: Do you want to tell us where you're going to be and what you're up to? 

FRANCESC: So by the time this episode comes online, I will be somewhere in Italy. I'm going to be in Florence speaking at GoLab.io. After that, I will go to Barcelona, hopefully speak at the Barcelona Go meetup. 

After that, I'll go to Brussels for FOSDEM. So if you're going to be around in FOSDEM, there's going to be a Go dev room. Go there, come say hi. It's going to be lots of fun. 

And after that, I'm off to India for GopherCon India in Pune. I'm almost sure I'm mispronouncing it. But I'm going to keep on saying "Pun-eh" until someone says, no, it's actually "Pewn" or something. 

MARK: I don't know. 

FRANCESC: I have no idea. What about you? Are you traveling around? 

MARK: I am staying in San Francisco, but still just as busy. Will be here in San Francisco. We're hosting a Global Game Jam location at our Launchpad space. 

FRANCESC: Sounds fun. 

MARK: You can sign up for that. We still have some room available. Then it's basically all just run up until the game developer conference here in San Francisco. I'm taking part in the Game Developer Day. 

I'm going to do a [INAUDIBLE] talk there for the Game Developer Day for that. We have a sponsored session where I'm going to be talking about hosting basically Unity servers inside containers and how to do that in the Cloud. And of course, we're going to be talking about some big data stuff. 

There's a bunch of stuff going on at GDC-- even more I can talk about. And then finally, yeah, Next is coming up after that. I know you will be there as well. 

FRANCESC: Cloud Next. It's going to be pretty awesome. We will both be speaking about different topics. And on top of that, we might be doing something special with the podcast. 

MARK: Yeah. Well, we'll definitely have a podcast space, so we'll be there with the podcast. So definitely come up and say hello. We will absolutely be there. Cloud Next is going to be huge. 

FRANCESC: Yeah. I'm very in between excited and scared. 

MARK: I'm terrified! 

[LAUGHTER] 

FRANCESC: But yeah, lots of fun. Lots of people. And hopefully, many of you are going to be visiting. So let us know if you're around. And it's always a pleasure to meet you. 

MARK: Absolutely. 

FRANCESC: So I think that this episode was long enough to be the first episode of the year. So thank you all for listening to us, and talk to you, Mark, and to you all next week! 

MARK: See you all next week! 
{{< /transcript >}}
