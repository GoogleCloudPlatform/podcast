+++
audioDuration = "00:34:19"
audioFile = "Google.Cloud.Platform.Podcast.Episode.292.mp3"
audioSize = 82361505
categories = ["Kubernetes", "Pulumi", "Update", "Infrastructure"]
date = "2022-02-09"
description = "Brian Dorsey and Kaslin Fields welcome Kat Cosgrove of Pulumi this week to talk about what's new with Kubernetes 1.24."
draft = false
episodeNumber = 292
hosts = ["Brian Dorsey", "Kaslin Fields"]
title = "Pulumi and Kubernetes Releases with Kat Cosgrove"
image="/post/episode-292-pulumi-and-kubernetes-releases-with-kat-cosgrove/images/hero/hero-EP-292.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/sojnt1/episode_292_pulumi_and_kubernetes_releases_with/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Brian Dorsey](https://twitter.com/briandorsey) and [Kaslin Fields](https://twitter.com/kaslinfields) welcome [Kat Cosgrove](https://twitter.com/Dixie3Flatline) of [Pulumi](https://twitter.com/PulumiCorp) this week to talk about what's new with Kubernetes 1.24. Pulumi is infrastructure as code, allowing developers to use whatever language they are comfortable with to create and test infrastructure. Kat walks us through typical Pulumi infrastructure test scenarios to demonstrate the benefits of this software, especially with GCP. 

In the new Kubernetes release, one of the biggest updates is the removal of Dockershim. If you're using a managed Kubernetes service through GCP, this update should not affect you, Kat tells us. She clears up some common Docker misconceptions and tells us how Kubernetes and Docker still work together. Kat describes the situations where this update might affect certain projects and how to tell if you're one of the unlucky few. 

Later, we talk about the future of tech conferences. Kat is excited to get back to some in-person learning and networking, but at the same time, is hopeful that conferences will continue a hybrid model and allow some online interaction. Pulumi will be at KubeCon, Devlopsdays, and Jfokus in the next few months with some cool new free merchandise.

##### Kat Cosgrove

[Kat](https://twitter.com/Dixie3Flatline) is Staff Developer Advocate at Pulumi. 

##### Cool things of the week

* Find products faster with the new All products page [blog](https://cloud.google.com/blog/topics/developers-practitioners/find-products-faster-new-all-products-page)
* Introducing Ephemeral Containers [blog](https://opensource.googleblog.com/2022/01/Introducing%20Ephemeral%20Containers.html)
* Open sourcing the App Engine Standard Java runtime [blog](https://cloud.google.com/blog/topics/developers-practitioners/open-sourcing-app-engine-standard-java-runtime)
 
##### Interview

* Pulumi [site](https://www.pulumi.com)
* Kubernetes [site](https://kubernetes.io)
* Docker [site](https://www.docker.com)
* Kubernetes 1.24 Release Notes [site](https://www.kubernetes.dev/resources/release/)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* We Didn’t Start the Fire: Communication Breakdowns and How to Prevent Them - Ian Coldwater, Twilio & Kat Cosgrove, JFrog [video](https://www.youtube.com/watch?v=a03Hh1kd6KE)
* Jfokus [site](https://www.jfokus.se)
* Devopsdays Chicago [site](https://devopsdays.org/events/2022-chicago/welcome/)
* KubeCon EU Valencia [site](https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/)

##### What's something cool you're working on?

Brian just started releasing the next [six episodes of VMs End-to-end](https://www.youtube.com/playlist?list=PLIivdWyY5sqIteZONy-rTwyf3w3OddFQ1). It's a video series all about Compute Engine, starting with a discussion of building reliable systems from unreliable components. 

Kaslin is working on the GKE/OSS K8s Events.

- [Cloud OnAir Webinar](https://cloudonair.withgoogle.com/events/build-optimize-secure-google-kubernetes) - February 24th
- Innovators Hive - March 29-30
  - [Google Cloud Innovators Program](https://cloud.google.com/innovators)
- OSPO Panel on Dockershim Deprecation - March 31st

{{< transcript "[MUSIC PLAYING] BRIAN: Hello, and welcome to episode 292 of the weekly Google Cloud Platform Podcast. I'm Brian Dorsey, and I'm here with my colleague Kaslin Fields. Welcome and hello, Kaslin." >}}

KASLIN: Hello, Brian, and hello, everyone out there. 

BRIAN: So we've got a great main talk interview today. 

KASLIN: Yeah. We have a really exciting guest today, Kat Cosgrove, who you may know from Twitter fame. She is a member of the Kubernetes contributor community, and she posts both very interesting and occasionally technical stuff on Twitter. And she is a staff developer advocate at Pulumi. So she's here to talk about Pulumi GCP, and her work on the release committee for Kubernetes release 1.24. Which is very interesting and exciting, because it will involve the removal of the dockershim. And if you don't know what that is, stay tuned and you're about to find out. 

BRIAN: And before that, the cool things of the week. 

[MUSIC PLAYING] 

OK. So the first thing I wanted to share is this new All Products page. And I just like it, because, honestly, at some level, I think the biggest challenge in cloud nowadays is figuring out the names-- like, the proper names of things. You've got all these different new words that sometimes are a completely new service to learn about. And sometimes it's hosted PostgreSQL, or something like that if you just knew what it was it's a really super clear. And some folks may have seen a kind of a guide to Google Cloud in four words for each service that has been around for a while-- it's kind of a pamphlet-- and that has evolved into a whole website. 

The key part of it for me is this kind of mapping of names to "what is it" in just a few words. And I think that's really valuable as we get into this world with more and more services all the time and more and more viewing pieces. And you know something from one world, but you may not know how to apply it to another. So I'm super excited about that. We've got a link to it in the notes for the podcast. 

KASLIN: Another exciting bit of content that we've released recently-- there was a blog post that we released on our "Open Source" blog about ephemeral containers. And that may sound a bit interesting, like, why are you talking about ephemeral containers-- shouldn't containers be ephemeral in general? 

BRIAN: Maybe I'm too Kubernetes-minded, but I thought all containers were essentially ephemeral. 

KASLIN: I mean, not always. Stateful applications on Kubernetes is one of my favorite topics, but I won't go into that. But this new blog post goes over a concept of ephemeral containers that is really important to Kubernetes. And let me read you this excerpt from the blog post so that you understand what we're talking about here. 

So ephemeral containers are a new type of container that are part of the Kubernetes core API. An ephemeral container may be added to an existing pod for administrative actions like debugging. It runs until it exits, and it won't be restarted. So an ephemeral container runs within the pods existing resource allocation and shares common container name spaces. So this is something new to the Kubernetes core API, a concept of ephemeral containers that's really meant for doing administrative actions on pods. So definitely check that out. Like I said, there's a blog post on the Google "Open Source" blog, which we'll have a link to in the description. Learn more about it. 

BRIAN: Quite cool, and not what I imagined from the name. That's great. Looking forward to that. And the last kind of cool thing that I just noticed go across our blog is that we are open sourcing the App Engine standard runtime for Java-- the full infrastructure for running Java apps on App Engine-- which I think is pretty cool. They mentioned in the blog post that this is a first step towards letting you run the whole App Engine environment almost wherever you would like-- local, different clouds, different know back ends at Google, that sort of thing. So I'm excited about that. 

KASLIN: Awesome. So that's our cool stuff of the week. Now, we're going to hop into our interview with Kat. And be sure to stick around for the end, where we'll go over a few more things that Google Cloud is doing related to the technologies we're going to be discussing with Kat. 

[MUSIC PLAYING] 

BRIAN: Here we are everyone with Kat Cosgrove. Please, introduce yourself. Who are you, and what would you like to share? 

KAT: Hello, my name is Kat. I am a staff developer advocate at Pulumi, which means that my job is to teach people about infrastructure as code and if Pulumi is the right fit for them, specifically about Pulumi. But you may know me more from Twitter, which is, unfortunately slash fortunately, a pretty large portion of my job, most of which is not actually tech posting-- I kind of just [BLEEP]-post a lot and post pictures of my cats. But every once in a while it's a tech post, and sometimes it's a banger. But people seem into it, so now I spend most of my day on Twitter. 

BRIAN: This is more like classic Twitter usage, right? Like, wasn't it originally all about cat pictures, and food, and-- 

KAT: Yeah, pretty much. When I got started doing developer relations, my Twitter was very like tech and very serious, and I tried not to be too much of myself on the internet, because I thought I needed to be professional to work in developer relations. It turns out that doing that is really hard. It's also really boring-- mind-numbingly boring. And also, it's not actually that effective. 

If you are obviously a shill for a company, people don't pay as much attention to you. So I actually try to keep tweeting about my employer to a minimum, unless it's something I actually really do want to tweet. Otherwise, it's just whatever I feel tweeting about, software related or not. 

BRIAN: It's so tempting to go off into an essence of developer relations conversation. 

KASLIN: I know. It's very tempting. 

BRIAN: Let's skip that for now. 

KASLIN: So you mentioned that you are a staff developer advocate at Pulumi, and a lot of folks out there might not be familiar with what Pulumi does. So can you tell us a little bit about it? 

KAT: Happily. Pulumi is infrastructure as code. And when I say code, I do mean "code." Sometimes we also like to say it's infrastructure as software. Because, unlike some of are options out there, you are standing up your infrastructure using a programming language you're probably already familiar with. You can do it with Python, you can do it with TypeScript, Go, any of the .NET languages, whatever floats your boat, whatever your engineering team is familiar with. 

Sometimes this exists as a standalone repo of infrastructure for your entire organization. What I like to do is have an infradirectory alongside my application code, so everything just exists right there. The cool thing is this means that you can now test your infrastructure. You can unit test your infra, and that's pretty rad. Also, you don't have to learn a domain-specific lang or write YAML. 

KASLIN: I like to say that infrastructure as code is exemplary of the DevOps concept. It's combining the skill set of developers with the tasks of ops. So I always use it as an example. 

KAT: I hard agree with that. Sometimes in DevOps, I think, even though we crow nonstop about how silos are bad, and DevOps is the union of the developers and the operations team to deliver software faster, better, or whatever, sometimes we do still silo people, and a lot of that is in making tools that are typically more opsy, like your infrastructure. Still complex enough that it's not really friendly for developers to touch. Kubernetes is actually a pretty good example of that, still being pretty hostile to people who don't have an ops background. But infrastructure as code kind of abstracts enough of that away that it is easier to understand for developers. And ultimately, they do bear some of the responsibility for keeping this stuff alive, so it's good that they understand it. 

BRIAN: I'm going to poke a little deeper here if that's OK. I'm curious, when you say infrastructure, that could mean a lot of different things. So one, I'm curious like what the scope of things you can actually control with this are. And then, two, I was wondering if you could maybe use that as an excuse to talk through scenario on testing. Because testing is not something we usually associate with infra. 

KAT: We have native providers for all three of the major clouds-- so GCP, Azure, and AWS. Which means that within 24 hours, we have parity when a new feature rolls out, which is pretty rad. So anything that you can currently do on GCP, you can also do through Pulumi, right there in your application code. 

There are providers for all kinds of things. There are providers for Postgres or Kubernetes. It's far reaching. There is a whole registry of providers Pulumi has, and it's a little bit long-winded to rattle them all off, because it's literally dozens at this point. 

But as for testing your infrastructure, if, say, you forget to tag an instance of something, or you forget to set a region, or you forget to define a VPC-- 

BRIAN: It's always networking, isn't it? 

KAT: It's always networking. 

BRIAN: You can't connect, and, like, why? 

KAT: Networking is magic to me. I used to be an embedded Linux developer, and I have no problem finding a creative solution for a situation where I have like serious constraints in hardware, or memory, or whatever. But as soon as networking gets involved, it's like everything I know falls out of my brain, and I need an adult. I have to get somebody else who specializes in that, because it just doesn't work with my brain. 

But if you forget to set a VPC or tag an instance of something, you can run a test on that now. 

BRIAN: Oh, cool. 

KAT: Because it's handled in your infra code. And when Pulumi tries to stand it up, it will barf, because it doesn't have that VPC or it doesn't have that tag you need or something isn't named. And it'll barf in the test. So your CI will fail, and it won't get merged. 

BRIAN: So concretely, do these look like assertions? You know, like, assert blah, blah, blah, tag on instance? 

KAT: Yeah, you can do that. Or you can just try to let Pulumi stand it up. And if it fails to attempt to stand it up, it fails the test. But yeah, because it's written in code, you can also assert equals on things-- pretty convenient. 

I am lazy. I don't like jumping around through a bunch of tools. I don't like jumping around through a bunch of directories. I don't use a full-featured IDE, because I find all of the stuff on screen very distracting. So this is very convenient for developers like me. 

BRIAN: I feel like that's one aspect of boring tech that-- I'm a fan of boring tech, so when I say boring tech, I mean that in a good way. But like, well, any problem you can solve that you get stuck on with software, you can just always add another layer of abstraction 

KAT: Oh, yeah. Yeah, yeah. Put some abstraction on it. 

BRIAN: I feel like that happens everywhere, and from an opsy perspective, you want to minimize the number of layers you have going on when you start troubleshooting. 

KAT: It's just more points of failure, and it's more things that you have to dig through and understand deeply when something goes wrong. So something goes wrong with the abstraction layer, you have to look underneath it. And then if there's just another abstraction layer under there, then that is going to become a rabbit hole really fast. And at that point, was it worth it? 

KASLIN: Speaking of layers upon layers of abstraction-- 

[LAUGHTER] 

--we got to know each other through the Kubernetes space. 

KAT: Mm-hmm. 

KASLIN: That's my primary area. And you have quite the claim to fame coming up here in Kubernetes 1.24, as part of the release team. You want to tell us a little bit about what's going on? 

KAT: Yeah. So I'm never going to live this down. For listeners who didn't see this happen, a couple of Kubernetes release cycles ago, the deprecation of the dockershim was announced. If you don't know what the dockershim is, it is a software shim that exists in Kubernetes specifically to allow Kubernetes to use the entire Docker tech stack as your container runtime, instead of just using something like containerd directly. 

And we announced that this was going to be deprecated, because maintaining it as kind of a pain. It was becoming kind of troublesome. And unfortunately, it became a little bit of a tire fire on Twitter. Ian Coldwater tweeted about it, and it started to create some problems. 

Ian had to go to work. They didn't have time to be answering questions on Twitter all day. But, Lord, I thought I did. 

[LAUGHTER] 

I had-- 

KASLIN: Figured that out fast. 

KAT: [INAUDIBLE] more time than I expected. Yeah, that got out of hand fast. 

BRIAN: Is the root of that people hearing Docker and deprecation in the same sentence and just like jumping? 

KAT: Yes. That's what happened. So I tweeted a 10-tweet thread, 12 tweets, something, explaining what the dockershim was and why it was being removed. And unfortunately, a bunch of people conflated dockershim with Docker, and there was already a lot of pre-existing confusion around what Docker means when we say Docker. Do we mean the Docker Engine? Do we mean just a container image, a company? 

And which half of the company, you know? Because it was Docker, and now it's Docker and Mirantis. And it got very confusing, very fast, just because we use this one word to refer to five different things. And-- 

KASLIN: Abstractions upon abstraction. 

KAT: Abstractions upon abstractions and poor naming conventions. Naming things is hard. And unfortunately, we may have flubbed it there. But yeah-- so I tweeted about it, and it blew up, and it became my full-time job for, like, three days to manage the communication around the deprecation of the dockershim. Fast-forward a year-ish, and we are at release cycle 1.24, where we are now finally removing the dockershim after initially deprecating it. 

We are in the middle of that release cycle now. The alpha has been cut. I believe the beta will be cut soon. And the actual release is in mid-April. So what this means is that if you are using a managed Kubernetes service through, for instance, GCP, it is unlikely that you need to worry about this, because GCP has defaulted to containerd for how long, Kaslin? 

KASLIN: Since late 2020, I think, is what I found in the release notes. 

KAT: Yeah. So this is not something you should have to worry about. 

BRIAN: Let me interrupt for just a quick second. When you say running containerd-- I'm multiple years out of date on my Kubernetes knowledge. 

KAT: Sure. 

BRIAN: So to be clear, containerd will still run Docker images, right? 

KAT: Totally. So that's where part of the confusion comes from. People think that "Docker image"-- I'm doing air quotes right now that you can't see. You know, podcasting it's a famously visual medium. 

[LAUGHTER] 

That's where a lot of the confusion comes from. People think they're a Docker image is a thing, and it isn't. 

KASLIN: People think Docker is a container runtime. They hear container runtime, they think, oh, it's a container. Oh, it's Docker. That's not quite the case. 

KAT: You're right. That's not really the case. Docker itself is an entire tech stack, and it has a container runtime within it. And the container runtime within the Docker tech stack is in fact containerd. 

KASLIN: Dun-dun-dah-dah! Surprise! 

KAT: Yeah, I know. It's ridiculous. So the whole point of the dockershim is to get into the Docker tech stack and access the containerd that's running inside of Docker, rather than just accessing containerd directly. 

BRIAN: Here's our theme again of removing layer of abstraction. Is that what's going on here? 

KAT: Yeah, pretty much. We're removing an abstraction layer. That is what's happening. 

So Docker images are not real. What Docker creates is an OCI-compliant container image. 

KASLIN: And that's Open Container Initiative. 

KAT: Yeah. But it creates an OCI-compliant container image. You can still create an image with Docker, and Kubernetes will run that. It doesn't care. It's the same as an image created by, like, Podman. It doesn't matter. This is only dramatic, in most cases, if you are rolling your own cluster and you are explicitly setting your container runtime to Docker. So if you are a Kubernetes administrator, if you're a cluster admin, you need to be reading the release notes and the forthcoming blogs on how to upgrade and whether or not this affects you. 

But regular developers, you do not need to worry. And regular developers were, by far, the most panicked group, because they thought this meant that they had to learn-- 

KASLIN: Something not Docker. Yeah. 

KAT: Yeah. And they don't. It doesn't matter. Docker still exists. This does not affect the usability of Docker. 

KASLIN: Docker still uses containerd. 

KAT: Yeah. 

BRIAN: I just spent a couple of years learning this tech, you can't take it away from me. 

KAT: Part of that is our fault for not controlling the messaging around the deprecation very well, for not predicting that people would freak out, for overestimating how well people understood the different contextual uses of the word Docker. That's something we should have been able to see coming, frankly. 

BRIAN: This is the key challenge in tech communication. 

KASLIN: Exactly. 

KAT: It's hard. That's why it's people's entire jobs. 

KASLIN: When you're deep in the tech, and you understand it really deeply, deeply enough to be able to explain it well, you also have kind of blinders on, and you miss some things. So. 

KAT: Yeah. The more of an expert we are with a particular piece of technology, the easier it is to forget what it's like to not be an expert. We absolutely all make that mistake, so this wasn't any one person's fault, and we shouldn't feel bad about it. But it does mean that now we are better informed in how to prevent the removal from being a trash fire as well. 

So if you're listening to this and you're using Kubernetes, please go read the release notes. I know they're boring, but please read the release notes. 

KASLIN: Or if you're using a managed Kubernetes service, like GCP, check out what your managed Kubernetes provider is telling you about what's going on, because they should be talking about what versions they're at. What container runtime they use in their implementation of Kubernetes should be available information for you. So you should be able to go find that out. 

BRIAN: And just to reiterate, Kaslin, like you said, this has actually been in place for like a year on GKE cluster or something like that. 

KASLIN: Yeah. GKE clusters have been using containerd by default since 2020. So. 

KAT: Which is excellent. 

KASLIN: So hopefully this is a big no op for the vast majority of people. 

KAT: Yeah, yeah. For the vast majority of people it should be. 

KASLIN: And as it approaches, we'll have more communications, of course, coming out about if you have clusters older than 2020, what do you need to think about, if anything, moving forward. And we'll have all sorts of information. There's already quite a bit in the documentation. So be sure to check that out. 

KAT: Yeah. So abstractions are sometimes a blessing and sometimes a curse. 

KASLIN: Also, something else I want to plug in here, if anyone out there is listening to this like, wow, I really don't want to go through that problem of trying to communicate something technical and then having everyone freak out about it because they thought it meant something different from what it means, there's a KubeCon session that Kat and Ian did about that topic, in case you want to learn from the best about how things can go wrong and how we fix it. 

KAT: Yeah. So the name of the talk, it was at KubeCon EU, the previous one that was supposed to be in Amsterdam? 

KASLIN: Yeah. 

KAT: Amsterdam. And the name of the talk was "We Didn't Start the Fire." We maintain that we did not start the fire. Other people may disagree, but we maintain that we did not. You should watch that talk. It's very entertaining. It's useful even outside of Kubernetes. It does have some valuable lessons that are applicable to project management and communications around open source, regardless of the size of the project you're working on. But also, it's pretty funny at the end. I won't spoil it, but you should definitely watch. 

BRIAN: Sweet. OK, I'm looking forward-- I missed this when it happened, so I will-- 

KAT: There's wigs involved. 

BRIAN: I'm guessing that's online somewhere. We'll grab a URL and add it to the notes as well. 

KAT: Oh, rad. That's convenient. Yeah, there's wigs involved. So just strap in. 

[LAUGHTER] 

BRIAN: I'm imagining taking things a few steps too far in some direction. 

KAT: Ian and I can both always be relied upon to take things too far. That's what they pay us for. That's why they pay us the medium bucks. 

BRIAN: [LAUGHS] Excellent. I'm going to blindside you with a question here. So this sounds kind of either no op or big deal communications wise or something like that-- it was a little heavy. What's something you're excited about recently in this space in general? 

KAT: I am excited for conferences to be back, because it's my job and I miss people really badly. 

KASLIN: Yes. 

KAT: But I'm hoping, desperately hoping, that as conferences kind of return to being part of my normal daily job, organizers keep doing hybrid events. These are super important for accessibility, both for people who actually need accommodations and for general comfort. I travel a lot. It is my job to go to conferences. And, for instance, in May I will be at Jfokus, which is in Stockholm, then I will be at DevOps Day Chicago, which is in Chicago obviously, and then I will be in Valencia for KubeCon EU. I will be gone for almost a whole month, and I'm still missing events that month. 

But if your event is hybrid, I can still go. And that's pretty cool. And I could maybe even still speak, if you will let you submit a recorded talk. I love doing pre-recorded talks. 

BRIAN: And that's true for attendees as well, right? 

KAT: Yes. 

BRIAN: Way more people can be there. 

KAT: Traveling is expensive. A lot of people flat-out cannot afford to go to a conference unless their employer is paying for it. I can't afford to go to some conferences unless my employer is paying for it, you know? So it's good for attendees who wouldn't otherwise be able to afford it or wouldn't be able to take the time off-- whatever. It's just better all around. Sometimes I want to go to a conference, but I also want to lay on my couch in my pajamas, you know? And if I can do both, that would be sick. 

BRIAN: OK. Yeah, I definitely hope we keep some of these things we've learned over the last couple of years the hard way. 

KAT: Yeah. It's unfortunate that we had to learn them the hard way, but we have learned them. So yes, I'm very excited for conferences to come back and see people. I did see Kaslin at KubeCon LA, which is, I think, the first time we'd met in person. 

KASLIN: I think it was actually. It feels like we've known each other for a much longer time. 

KAT: Time doesn't exist on the internet. But yeah, it feels like we've known each other for years. But, I mean, we have, we just have been trapped in our homes for years at this point. So-- 

KASLIN: Such an interesting experience meeting all the folks that you've met over the pandemic over the internet in person. So I'm excited for more people to have that experience. 

KAT: Oh yeah. It's weird finding out how tall everyone is. 

BRIAN: I was going to say, do you have that moment of just, like, adjust-- oh, wow. 

KAT: I'm very tall. I'm 5' foot 10". 

KASLIN: And I'm very short, 5' foot 2". 

KAT: You're very small. You're very small. Ian is like 5' foot flat. People that I look up to on the internet but physically look down on in real life, it's such a weird adjustment. 

BRIAN: You know, Kaslin and I are on the same team, in the same city, and we actually have never met in person. 

KAT: Oh, my God. Really? 

KASLIN: [LAUGHS] Yes. We have regular meetings together, where we just hang out and chat. And every now and then, we're like, oh yeah, I've never actually met you. 

BRIAN: So there's our communal wish for everyone of this year-- hopefully you're able to get to meet your new online friends in some places. 

KAT: Yeah. 

KASLIN: Speaking of events and things that are coming up this year, I've been seeing so much awesome stuff going on around Pulumi. I just wanted to ask if there's anything in particular that Pulumi is doing this year that we'll be seeing around at events and we should watch out for. Because I know I want to watch out for it. 

KAT: Because I am on their DevRel team, and I like to travel, I look for excuses to sponsor conferences and show up. I always have a fistful of Pulumi hair ties or stickers, and I'm happy to hand them out like candy. Oh, you have long hair, Brian. Do you want some hair ties? 

BRIAN: I do. 

KAT: They're the good ribbon kind too, so they don't leave a dent in your hair. This is one of those like swag hills I die on as a DevRel. I want branded hair ties. 

BRIAN: Also, they're not sized, unlike t-shirts and other stuff. 

KAT: Yeah, and they take up like almost no space. They are great. But you can find us at a variety of events. We will be at KubeCon EU. We will have a booth there, I believe. 

A lot of us are also at DevOps Days. In general, we sponsor DevOps Days-- well, a few of them. I'm supposed to be at DevOps Days LA, I believe, as well as Scale, which has now been pushed to the end of July. It was supposed to be March. They pushed it to the end of July. 

But Pulumi does usually hold a conference in Q3. So we haven't announced anything about that yet, but when we do it will be all over both my Twitter and Pulumi's Twitter. We had a community event last year called Cloud Engineering Summit. I would like to do that again this year, but I don't know if we are yet. It was a really fun community event, just talking about cloud engineering concepts in general. Didn't have to be Pulumi-specific. I think we only had like one Pulumi talk. We had a couple of HashiCorp talks too. 

But yes, that one is strictly community. We're not trying to hustle anybody. That's just all of our DevRel team is really loud and pushy. And-- 

KASLIN: And a lot of fun, honestly. 

KAT: We try to be very fun. We do try. I did get budget to purchase a fur suit. 

BRIAN: OK. What was the justification for that? 

KASLIN: These event appearances are going to be an adventure, clearly. 

BRIAN: What line-item ended up on the expense report there? 

KAT: So a fur suit-- just fur suit. Yeah. I was not subtle about this. I did not try to hide it. It was-- so we have a mild beef with Corey Quinn's company's mascot, who is Billy the platypus. Pulumi's mascot is also a platypus, and Billy keeps picking on our platypus. He's super mean on Twitter. So I, as a joke, in a team meeting, suggested that we buy a platypus fur suit which I then wear to AWS Reinvent and pick a fight with Corey dressed as the platypus. 

KASLIN: That sounds fantastic. 

KAT: I was just joking, but then it turned into it the whole thing. 

BRIAN: Is this one of those, like, if you offer up something in the meeting, suddenly you're responsible for it? 

KAT: Yeah. Except, now, it's I have to commission a fur suit for myself, you know? But I did get budget for it, so we're doing that, I guess. Another example of me just saying [BLEEP] in meetings and it turning into a thing is trying to get Pulumi-branded cat ears to give out at KubeCon. Surprisingly difficult to track down-- did find some. They light up. 

BRIAN: There you go. 

KAT: Keep an eye out for the possibility of Pulumi cat ears at KubeCon. I may also try to get some cooler-looking socks or something. I don't know. 

KASLIN: I was wondering where the rivalry with Corey Quinn's company came from, so now I know. 

KAT: He started it too, and like out of nowhere. I refuse to engage with it. I am strictly nice to his platypus-- 

[LAUGHTER] 

--but not necessarily to Corey himself. But to the platypus, yes. I'm trying to kill Billy with kindness. 

BRIAN: Let's see how he responds. So if people wanted to keep up with the ongoing rivalry between-- platypi-- how would they keep track of you and Pulumi me on the internets and such? 

KAT: So you can find Pulumi's website at pulumi.com. Our Twitter is at @pulumicorp. 

BRIAN: How you spell Pulumi. 

KAT: P-u-l-u-m-i. You can also find me personally on Twitter @Dixe3faltline. But you might show up when I'm just tweeting about "Neon Genesis Evangelion" or whatever, instead of tech. So stick around. Eventually, I do do a tech tweet. 

KASLIN: And they're great. And also, the other ones are great. 

KAT: Thank you, Kaslin. You're so sweet. We should work together more often. 

KASLIN: We should. It's true. 

BRIAN: Awesome, I love the big hugs. Is there anything we missed or you'd like to mention before we wrap things up? 

KAT: Read release notes for your critical infrastructure, please. It is astounding to me how many people like teams or entire companies like heavily rely on a piece of infrastructure for their actual whole core business needs and then do not read the release notes. Please, read the release notes. Also, hire technical writers and pay them more. Level them like your engineers and pay them like they're your engineers. Technical writers are engineers who write words good. 

BRIAN: And are almost always the very first users of APIs before there's any documentation of them. 

KAT: Yeah. So [INAUDIBLE]. 

KASLIN: And the ones to then explain those APIs to [LAUGHS] users. So you want them to be happy. 

KAT: You do. You do. Also, they all talk to each other. 

[LAUGHTER] 

And a lot of them talk to DevRel, and everybody in DevRel talks to the rest of DevRel. So if one of us hears about something, the rest of us are going to hear about it. It's not a threat, but, you know. 

BRIAN: And if you are, you'll get really good tech writers. 

KAT: You will. 

BRIAN: Thank you so much for coming on. We learned a ton about Kubernetes, Pulumi. Check it out. We'll have some notes in the bottom. And thanks again for spending time with us. 

KAT: Yeah. Thanks for having me. And I'm glad Kaslin could come, because she's so cool. 

KASLIN: Yay. I'm glad both of you could come, because you're both so cool! 

KAT: Oh, my God, this is so wholesome. I wish we had a group hug. 

BRIAN: Oh, that was fun. Kat is a joy to talk to you. And thank you for joining me on this. I guess the key takeaways for Pulumi is this kind of code-first way to script your infrastructure. I was intrigued by the testing side of things, because that's always tricky for infrastructure. And she mentioned how they're always up to date. But I think that's worth kind of highlighting again, that the GCP provider is built from our API descriptions directly. So as new features come out, you can use them right away in Pulumi, which I think is a really powerful thing. 

KASLIN: Yeah, and that you get to use coding languages that you're already using in order to manage your infrastructure I think is a really cool thing about what they do. And another very important technical topic that we covered in this interview is the removal of dockershim. So as you learned, this is more about the running of Kubernetes clusters, how Kubernetes looks at your containers, not about how you make the containers. 

It's not a removal of Docker. Docker uses containerd as its container runtime, which is compatible with Kubernetes and will continue to be, and has been the default in GKE since late 2020. So no major changes, hopefully, from most end-user sides. If you're using GKE, you should be good to go for the most part. We'll be having a lot more communication coming up around that, and we'll talk about that in a second. But be sure that you're aware, especially if you run your own clusters, that dockershim is being removed. And understand, if that is part of your existing clusters that you've run yourself, if you're doing upgrades to those clusters, you need to be aware of that and take any important precautions to make sure that that dockershim removal isn't going to affect your workloads. 

And another thing that we talked about related to the dockershim, Kat and Ian's talk from KubeCon titled "We Didn't Start the Fire." The dockershim removal has been a very scary thing for the community, mainly because the communication of it wasn't handled as well as we would have liked. And the community is very aware of that and even had this talk at KubeCon about the fire that it started. So definitely check out that talk. The link is in the description if you are interested in learning more about how to communicate sensitive information to your technical communities effectively without starting a fire. 

BRIAN: That's awesome. I feel like-- we're all in DevRel, so we kind focus on this-- it's really important for everyone in tech to be able to communicate clearly about the changes they're making and hopefully minimize the inadvertent fires and scares that can happen. Kaslin, you mentioned there was some new things about dockershim coming? 

KASLIN: Yes. I want to go ahead and mention some events. If you're still listening at this point, thanks for staying with us. And be sure to check out these events for more technical information from Google Cloud about what's going on with GKE and open source Kubernetes. So we have a Cloud On Air webinar that's going on February 24. We'll include a link to that in the description. And that's going to be a lot of information about what's new and what's going on in GKE. 

Then there is the Innovators Hive event in late March, March 29 to 30. And that is part of our new Google Cloud Innovators program. If you haven't heard about this, is a new community that we're starting up, and we're working on supporting, and doing lots of awesome things with. And if you are interested in joining it, you can just go check out their website, which is in the link below, cloud.google.com/innovators, and there's a link there to sign up to be part of that community. 

And basically, we're going to be running a variety of events to help support that group, telling you about what's going on in Google Cloud, getting you access to some of the awesome technical leaders that we have. We've been doing some "ask me anything" events with that group already, with some of our technical leaders. And then this Innovators Hive event is going to be kind of a big virtual conference, where we go for a lot of the stuff that's going on in Google Cloud that we think might be useful for folks who care a lot about Google Cloud and want to talk about it with their communities. 

And then, one more thing I want to mention is our Open Source group is going to be running a panel in late March. I'll try to get the information for that and put it in the description below. But it's still kind of being worked out, so keep an eye out for an announcement from our Open Source group that they're going to be having this panel in late March on the dockershim deprecation. So that's going to be really relevant to what we were talking about today. Definitely keep an eye out for that. 

BRIAN: Very on theme for Kubernetes and dockershim for the whole thing here. And then, I wanted to mention, folks who may have run into me online or on this podcast before know that I'm really into VMs, and Carter and I have just started releasing a second series of six videos all about using Cloud VMs, Google Compute Engine. So those are just coming out. I've got a link to the playlist there, starting with topics around reliability and kind of building reliable systems from unreliable components or kind of cloud native with just VMs if you will. 

KASLIN: An intriguing topic, sir. I would like to learn more. 

BRIAN: Indeed. Fantastic. We know where to go now. So thank you all very much for listening and joining us on the podcast, and we will see you and hear you next week. 

[MUSIC PLAYING]