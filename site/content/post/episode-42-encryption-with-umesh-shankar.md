+++
audioDuration = "00:37:52"
audioFile = "Google.Cloud.Platform.Podcast.Episode.42.mp3"
audioSize = 54560349
categories = ["Security", "Encryption"]
date = "2016-09-07T01:07:49Z"
description = "Umesh Shankar has been working on making Google secure for many years and he’s come to tell us how encryption helps keep Google Cloud Platform users safe."
draft = false
episodeNumber = 42
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Encryption with Umesh Shankar"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/PWUE8ZDu7o2"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/51lsbw/episode_42_encryption_with_umesh_shankar/"
+++

[Umesh Shankar](http://research.google.com/pubs/author14566.html) has been
working on making Google secure for many years and he's come to tell you
and your cohosts [Francesc](https://twitter.com/francesc) and
[Mark](https://twitter.com/neurotic) how encryption helps
keep Google Cloud Platform users safe.

<!--more-->

##### About Umesh

Umesh Shankar is a Principal Engineer based in New York, focusing on security
and privacy. He created and continues to lead the Data Protection effort at
Google, working to keep users' data safe in Google apps and on Google Cloud
Platform. He routinely works with teams across the company on security and
privacy design, and is actively involved in trying to improve security on
the web.

Umesh has an M.S. and Ph.D. in Computer Science from UC Berkeley and an AB
in Computer Science from Harvard University.

He is an avid soccer player, clarinetist, and mixologist.

##### Cool things of the week

- Google Cloud Endpoints [announcement](https://cloudplatform.googleblog.com/2016/09/manage-your-APIs-with-Google-Cloud-Endpoints.html)
- How a Japanese cucumber farmer is using deep learning and TensorFlow [blog post](https://cloud.google.com/blog/big-data/2016/08/how-a-japanese-cucumber-farmer-is-using-deep-learning-and-tensorflow)

##### Interview

- Google Cloud Platform Security [homepage](https://cloud.google.com/security)
- Google Security Whitepaper [whitepaper](https://cloud.google.com/security/whitepaper)
- Encryption at Rest in Google Cloud Platform [whitepaper](https://cloud.google.com/security/encryption-at-rest/)
- Google Cloud Storage User Provided Keys [docs](https://cloud.google.com/storage/docs/gsutil/addlhelp/SupplyingYourOwnEncryptionKeys)
- Encrypting Disks with Customer-Supplied Encryption Keys [docs](https://cloud.google.com/compute/docs/disks/customer-supplied-encryption)
- Homomorphic Encryption [wikipedia](https://en.wikipedia.org/wiki/Homomorphic_encryption)
- Homomorphic Encryption with BigQuery [docs](https://github.com/google/encrypted-bigquery-client/blob/master/tutorial.md)
- Cloud Data Protection for the Masses [research paper](http://research.google.com/pubs/pub37672.html)

##### Question of the week

- Web serving on Google Cloud Platform: an overview [blog post](https://cloudplatform.googleblog.com/2016/09/web-serving-on-Google-Cloud-Platform-an-overview.html)
- Web Serving Overview [solution](https://cloud.google.com/solutions/web-serving-overview)

{{< transcript "FRANCESC: Hi, and welcome to episode number 42 of the weekly Google Cloud Platform podcast. I am Francesc Campoy, and I'm here with my colleague, Mark Mandel. Hello, Mark. How are you doing?" >}}
MARK: I'm good. How are you doing, Francesc? 

FRANCESC: I'm, as always, very happy. 

MARK: Very happy. You are always very happy. You're a very chipper person. 

FRANCESC: Yeah, especially after a long weekend, extra happy. And also happy because we have someone, actually a principle engineer at Google that is going to tell us about security and specifically about encryption. 

MARK: Yeah. It's a really interesting topic. 

FRANCESC: Yeah. I think that the most important thing about encryption, my most important thing that I learned during the interview, was basically you don't need to know what you're doing because we do it for you, which is good. 

MARK: Which is good, and that's basically how I like to do things. 

FRANCESC: Yeah, because otherwise, like, what? Private? No, I don't want to handle private things, thanks. Yeah, so a very interesting interview. I'm sure you will like it. And at the end? 

MARK: Yeah, we have our usual question of the week. We go back to something pretty normal, pretty basic. What options are available for serving static content on Google Cloud Platform? 

FRANCESC: Yeah. I want to run-- I have just HTML, CSS, JavaScript. I want to serve that. How do I do that? So yeah, and that will be at the end. But now, we're going to start with the cool things of the week. I decided we'd-- 

MARK: Yes, just rename it. It's already renamed. It's done. 

FRANCESC: So yeah. The first thing is something that I've been pretty involved with, and I'm very excited that we have a public beta, finally, and it is Google Cloud Endpoints. 

MARK: Yeah, do you want to tell us about what that does, since you've been so involved? 

FRANCESC: Sure. So Google Cloud Endpoints-- there was actually already a thing called Google Cloud Endpoints that allowed you to serve REST APIs, REST endpoint from App Engine, just that, and just for Java and Python. Now what we're doing is actually making it a full fledged feature of Google Cloud Platform. So your back end could still be Java or Python on App Engine, but it could be also anything else, basically. 

You can run it on Compute Engine or Container Engine, and with any language you want. So yeah, the only requirement is that you need to use Swagger, and that is something that we might add more languages to describe your API. But to start with, we have Swagger, which if you have not checked-- basically, it allows you to describe your API from a pretty high point of view, but with enough detail that then you can generate the client servers, the client libraries, very easily, which is something very useful, and that is actually why the Google Cloud Endpoints, the original one on App Engine, was created. 

On top of that, it makes authentication easier. It makes managing API keys-- so if you want to give access to people to your APIs but add to some quotas and stuff like that, all of those things become much easier because again, you don't really have to manage them. We allow you to use Firebase authentication, Auth0 authentication. So basically, it makes managing REST endpoints much easier. 

MARK: So I don't have to do nearly as much work for just doing regular REST or endpoints. 

FRANCESC: Yeah, it's much easier to manage different versions to see what's going on. You got some monitoring. And so yeah, it makes it much, much easier for anyone that is serving REST APIs to third parties. And I feel like this deserves maybe an episode. 

MARK: I think it does. 

FRANCESC: Yeah, so we should definitely do an episode, and let's do it soon. But in the meanwhile, there is a second cool thing of the week. 

MARK: Oh, my god. This is so exciting because it involves cucumbers. 

FRANCESC: I really didn't think that I could end up talking about cucumbers in this podcast, but you know-- 

MARK: I like you cucumbers. But it's all about how a Japanese cucumber farmer is using deep learning and TensorFlow to basically sort the good cucumbers from the bad cucumbers, which I think is fantastic. 

FRANCESC: It is amazing. And the really cool thing is that you can actually see it on the blog post. You can see pictures of the different classes of cucumbers and how there is the small ones, the large ones, but also, depending on the curvature and the shape-- 

MARK: The color, yeah. 

FRANCESC: So there's a lot of different qualities. And it is really cool because it reminds me of the classification problem where you basically just try recognize handwritten numbers, but with cucumbers, and it's pretty amazing. 

MARK: It is really cool. I think my favorite part is actually that he took the, what is it, MNIST? 

FRANCESC: Yeah, MNIST. 

MARK: Yeah, which I believe is kind of like the "hello world" for these kind of problems, and just kind of tweaked it. I mean, I don't want to say a little bit, but he tweaked it and he modified it from the example that he was originally given to be able to do this thing with cucumbers, which I think is super, super cool. 

FRANCESC: Yeah, and the end result is this machine where you put cucumbers inside and then it classifies them in different buckets according to the shapes, size, and quality of the cucumbers, which is amazing, really. 

MARK: Yeah. That's super, super cool. Awesome. Well, why don't we go have a chat with Umesh and talk about encryption and security? 

FRANCESC: Sounds good. Glad to that. 

MARK: Sounds good. 

FRANCESC: So I'm very happy to introduce Umesh Chakkar. Hi, Umesh. How are you doing? 

UMESH: Good, good. I was actually looking at my bucket list this morning and I only have two items left. So now I've crossed off the GCP podcast. All I have to do is climb Kilimanjaro and I'm done. 

FRANCESC: Is it? That sounds-- 

MARK: Yeah, it should be fine. 

FRANCESC: [INAUDIBLE] 

MARK: No worries. Excellent. 

FRANCESC: So before we start talking about the main topic of the interview, why don't you tell us a little bit about you? What do you do at Google? 

UMESH: Sure. Yeah, I've been at Google for just over 10 years now. Just hit my 10-year anniversary back in August. And I've been working in the area of security and privacy engineering pretty much that whole time. I worked on a bunch of products over that period. I worked on Google Health early on-- rest in peace. 

And since then, I've spent a lot of time building infrastructure for protecting user data. So that's things around crypto key management, something we're going to talk a little bit about today, I guess, around authorizing and authenticating requests, both for external access to user data and actually also how we protect user data against Googlers themselves, and more technologies around protecting binaries that run in our production network, all of which actually play a part in how we secure Google Cloud Platform. So I'm really excited to talk about that stuff with you guys today. 

MARK: Sweet. That all sounds, like, super, super interesting. Well, why don't we take sort of a practical viewpoint. Like say, OK, let's look at it like I'm a classic developer. Maybe I run, I don't know, a GC instance, like a virtual machine instance that has a web server on it, and I'm going to go access some data. How does GCP security and encryption, how does that help me from the requests coming in through to accessing the data. Start at the top, like what happens. 

UMESH: Yeah, that's a great, great question because I think what's different about some of what we're talking about today than some of the previous podcast topics is that we're talking about a little bit more of what goes on under the hood versus kind of like the external developer-facing part of GCP. So one of the things that GCP offers is the ability to store data, and we want to make it safe for you to store even sensitive data. So in your hypothetical scenario where you have a web server, some of the content you might be serving could be private-- might not be all public content-- and you really want to be careful that that data is protected at rest, meaning when it's stored in some system. And we offer a variety of storage products in GCP that let you do that. So Cloud Storage is a classic example. 

Now, the way that systems Cloud Storage are actually implemented tends to be these big software stacks. It's not just one process in a disk somewhere, right? It tends to be a whole set of different pieces of software. 

So you send your request to an API like the GCS API, and you make a request to say read or write, you know, a piece of content in a bucket, and that goes through a lot of different processing. So we decide, like, OK, well, who are you? Are you allowed to do this operation? What's your quota like? We have to do billing, we have to figure out where that data is located. We probably have it replicated in a bunch of different places. 

And so all that happens through a sequence of servers that the request touches. A lot of it's built on our own internal infrastructure, and even that tends to have layers. So we'll have our own internal storage API. And below that we'll have a low level thingy that manages the disks, right? And so in the course of this request being served, a lot of different things happen. 

And we actually use different kinds of security technologies at every level of that stack. So at each hop, as one service talks to another, we transmit information on who's making the request. And we try to use strong forms of authentication to make sure we know really who that was and that we're not just guessing. 

We also use, extensively, access controls. So we say, all right, you're trying to make a request to GCS. We check your IAM policy, for example, to say, OK, yeah, were you allowed to do that? But even internally to Google, when that service talks to another service, we make sure that data only flows along correct paths for specific kinds of requests. 

At various points in the stack, we use encryption. And encryption is something that we throw around a lot because it's this really important tool in our toolbox for security, but it is still just a tool. And one of the most important things that encryption lets us do is it lets us reason about what parts of the stack we trust to do what things. 

So if you think about this deep software stack where data is flowing down and data is flowing up, ideally, you don't want to fully have to trust all layers of the stack with access to all the data. And so what you can do at some layer is say, OK, I'm going to encrypt the data before I put it in the lower layer, and that way, I don't have to fully trust that lower layer of the stack because all I can see is the encrypted data. I don't have to worry as much about exposure via administrative controls or via bugs or hacks or whatever it might be. 

And so this is one way that we employ what we call defense in depth. We have multiple layers of encryption that we do, whether it's at the storage API level. We also do it again at the physical disk level so that even if there is a bug or a problem at one level of the stack, we tend to have more layers of defense so that the chance that your data will ever be in the clear or actually be exposed is reduced as much as possible. 

FRANCESC: Cool. So basically what that means is that the lower levels don't get to see your actual data. Does that mean that as a Google Cloud Storage user, should I encrypt my data, or does that happen automatically? 

UMESH: Yeah, that's a great question. I think it really depends on your use case. And I think some amount of history is probably useful to talk about at this point. About 2007-2008, we really embarked on this big project, which we called our data protection effort. And one of the first things we built is what we call a key management system, so that lets you provision cryptographic keys and use them to do things like encrypt data at rest among lots of other applications you might do. 

And so we built this thing, and we said, hey, we have some applications that have really, really sensitive data. Let's use this key management system to access encryption keys, encrypt some data, and just how we talked about, reduce the amount of trust we have in other parts of our system and our platform. And so we did that, and it turns out that managing keys is really a lot of work. 

For the average application developer, having to think about stuff like what kind of keys should I use? What encryption mode should I use? When should I rotate keys? When should I re-encrypt data? All these kind of questions that come up on an ongoing basis is just really, really painful, and they'd rather just focus on application logic, right? 

I mean, that's kind of a philosophy that we bring to all of Cloud Platform, right? We want you not to have to worry about a lot of routine maintenance, reliability kind of tasks, and let you focus on the things that you really want to do, right? What's the really differentiating thing about your app? 

So after trying this kind of everyone-for-themselves kind of strategy, we realized we needed to have a more integrated solution. And so what we did is we did a really big project to build in encryption at rest, and at the same time, a bunch of other strong operational security controls to all our core storage offerings. So a lot of these have now made their way into GCP-- things like Big Table and Spanner, and things that are behind GCS, as well. 

And by integrating those deep security features like encryption, like we have verified binary, so we know exactly what code and configuration is running in our production network that's ever allowed to touch keys. That's really important because then we can trace that all the way back to our source code system. We have auditing controls in the rare instances where a person ever needs to touch the sensitive material for debugging, for example. We have audit logs of all that stuff. 

So that kind of stuff we built all of a piece, and what that let us do is say, OK, if you're a regular application developer, which is to say most application developers, right? Google has a wide variety of teams making a wide variety of applications. A lot of that work is not something you need to actively worry about anymore. You just use the core storage and you get all those features for free. 

That said, there are still some cases we'll want to do more, or they have somewhat different needs. So examples would be things like you need to send data externally, right? So you need to send a piece of encrypted content out to a user or to a partner or something else. Cases like that, just having exception at rest that's hidden by storage isn't good enough, right? You need to agree on what kind of keys you're using, what the encrypted data formats look like, and you can transmit it to somebody else or send it out there and then get it back and interpret the data. So that would be one example of a case where you'd want to do it yourself. 

In some other examples, just the nature of your infrastructure is different. Like, it doesn't look like regular storage. You want to do something with a custom kind of index, for example. And those are also cases where you might need to manage your own encryption, but those cases we found are relatively few and far between, and they do have really large teams that are actively staffed to manage that stuff. 

So my expectation would be that people using Cloud Platform are going to follow a similar distribution-- that most people should be able to just rely on the very strong security guarantees that we give you, but that there is going to be people who have particular requirements, or maybe they have things driven by compliance or external compatibility, for example, and in those cases, people may want to manage their own keys. Or in the most extreme cases, people might want to say, look, you guys at Google are great and everything, but, you know, my stuff is super, super sensitive. I'm willing to invest a lot of effort. I don't want Google to ever see the plaintext data. 

And that's fine, too. There are people that use Cloud Platform in that way. And it's something that we want to do, is give people a spectrum of options. So another option between those two extremes is actually a feature that we launched with Compute Engine and Cloud Storage called customer-supplied encryption keys where you can actually generate the key on your own and supply it along with your API call, but Google will take care of the actual mechanics of doing the encryption for you. 

MARK: Basically encryption is a continuum. 

UMESH: Yeah. 

FRANCESC: Maybe this is the name of the episode. Who knows? Yeah, so OK. So in a nutshell, basically what we have is we can go from I don't do anything, and I get protected because there is all of those mechanisms implemented behind the curtains. But at the same time, if I need more protection or I want to have something more specific because I have my own needs, there's also the flexibility to have implemented that. Cool. 

MARK: OK, so that's really cool. It sounds like we have a variety of options. So if I have, like, I don't know, I just want to put my photos up there and I don't really care who sees them, I can do that really easily, but if I've got something that I don't want the world to see, I can do that, as well. 

But I suppose it's worth sort of digging into it, as well. So it's great that GCP does the encryption, and encryption standards are there for you, and you're able to kind of pull and push them in the ways you want, but how does that really kind of fit into the whole security big picture? Like, is this just all I need to do or do I need to worry about more things other than that? We talked a little bit about authentication. Where does that fit in? 

UMESH: You know, that's a really good question. So as we talked about earlier, encryption is not a silver bullet. It is a tool. And it's a tool that if you use it properly can really improve your security story. 

So it might be worth just kind of stepping back for a second and saying, all right, what do you actually get from using cryptography in the sense that we care about for GCP? The two properties that people most look to crypto for are called confidentiality and integrity. Confidentiality is what people mostly think of, which is if something is encrypted, then unless you have the key, you can't figure out what it is. There are actually very strict, rigorous definitions of exactly what that means, but more or less, that's the intuition. 

The other thing that you want to get is integrity. And integrity is about making sure that the data can't be changed unless you have a particular key. And those two things-- actually, sometimes you might think they're the same, but they're not. There actually are crypto systems where you can have great confidentiality, like under certain reasonable assumptions, no one can know what the encrypted data actually relates to as far as the clear data. 

But it is also possible to change that in such a way that it has a predictable result. So if I encrypted a number, someone could change it in a way that when I decrypted it, I actually got twice the original number, even though they didn't know what that number was. So it is important to do things in a careful way that you get both confidentiality and integrity. And that's the best practice, and that's something that we strive to do. And people who are really interested in the very particulars of the details of how GCP does these things, by the way, should definitely check out the white paper that we recently released. I'm talking in quite a bit of detail about exactly where we employ what types of encryption and what modes and what kind of data is covered and all that kind of stuff, so please do check that out. 

So anyway, to come back to the basic purpose of crypto and how it relates to overall security, one way that I like to think about using encryption of data at rest is it gives you a long lever for access control. What I mean by that is a lot of times, you're managing a really large amount of data. And there are certain things you can do with a small amount of data that are not as easy or practical or efficient to do with a lot of data. 

And what you get with crypto is you can say, all right, none of this data is accessible unless I have this key. So if I'm able to protect the key, which I could do lots of special or sophisticated things to protect that key, that's actually equivalent to protecting this much larger amount of data that it may not be as practical to do those same techniques with it. So examples of the kind of things you can do are things like keep keys only in RAM, right? So you don't ever persist them. And that gives you a certain measure of protection. So, like, power goes off, keys are gone, right? That's kind of a nice property you might want to have. 

You can use very special machines that are really, really locked down, and they're only for this special purpose of doing high-security operations and managing keys. You can't really do that for all your data because at that point, you're not really locking it down at all if everything's within that same boundary, right? You can have a dedicated team of security specialists that manage just the key infrastructure and just the libraries, and you can really focus a lot of your effort on making those really good, which, again, is hard to scale to pay that much attention, that amount of care, to every single thing that you do. So we you can think of crypto as a lever. And if you really are careful about who can access the keys, that gives you a certain measure of confidence around who can access that much larger amount of data. 

But it doesn't solve all your problems, right? It doesn't solve the problems of, for example, auditing is another tool that we like to use. So it is the case that a person may need to access a piece of data for administrative or debugging purposes. That's part of what you need to do to keep a platform running. And that means that that person in certain limited circumstances has legitimate access. 

So indirectly, you generally don't give them the key directly, you give them access to a system which itself has access to the key. But the point is they're able to use it. And so just relying on the crypto doesn't give you everything you need. You oftentimes want to go back and look at, OK, well, what did that person do with that special access? You know, did they use their access properly and correctly for the purpose that it was intended? So that doesn't magically solve that problem for you. 

A related problem is processing that goes on with data happens in the background, or it happens in batch. So for example, let's say you store a lot of data in a database, and we want to build an index on that data so when you search, you get really, really quick results. That needs to operate on the data in the background, and therefore needs access. So again, indirectly, it may be able to use data that is normally encrypted. 

So the crypto doesn't, kind of, protect you intrinsically from that code being the wrong code or code that does something inappropriate, right? So you need other security mechanisms. So as I was saying before, we've actually built stuff which makes sure that for things that touch sensitive data in context like that, it's possible to tie it all the way back to the pillar source code that that binary came from, like the indexing code in this case, and it uses actually a secure build and release pipeline so we can actually say, yeah, only that indexing code ever touched this piece of data. 

And there's a variety of other mechanisms that we use. We actually have a hardened platform that goes all the way from, like, we do supply chain management and we build our bios. We do all kinds of stuff, which hopefully we can talk about in a future episode in a lot more detail, but just want to give a little bit of context on well, what does encryption buy you? 

And coming back to the point of what's the deal with key management and why is this hard? Well, a lot of crypto boils down to not just to is the crypto strong, but who can access the key? And I think an interesting like physical analogy is let's say that you made a car with an unbreakable lock. So unless you had a key that fit that lock, there's just no way to get in that car, right? So that's the equivalent of really strong crypto. 

So if you were to use something like that, you were really, really sure you never locked your key in the car. Because if you did, you would just have to send the car to be crushed, right? Like, that would be it for the car. You would lose it. 

And so that's the same kind of thing that you do if you manage your own keys is you need to make sure you never lose it. And you also need to make sure if you make a copy because someone else needs to get in there once in a while that that copy doesn't hang around. And that's challenging, too. 

And so in the case of cars, of course, we make a different security usability trade-off, right? We make sure it's not too hard to get in so you can still call AAA if your car breaks down. In the case of sensitive data, what you really want is strong access controls. You want to make sure that only the appropriate [INAUDIBLE] systems can access data at the appropriate times. And crypto is one tool we use to do this, and we try to make it as easy as possible for people by taking care of all those details around well, who gets the keys when, and how do we pull them back, and so forth, so that you don't have to do it yourself. 

MARK: So as a Googler, I guess, then, it means I can't just go into the Cloud Platform stuff and be like, oh, I'm just going to grab your data because I've got no access to any of those [INAUDIBLE] even if I could somehow get into that stuff 

UMESH: We do try to maintain really tight access controls on the data. And we have audit logging for when people ever need to access the data, which, again, is not common. And we also maintain a separation of administrative domains between the people that maintain the key management service, which maintains the encryption keys, and the people that maintain the application code or the other infrastructure. So that kind of helps mitigate our risk, as well. 

FRANCESC: Very interesting. That really sounds like managing keys is such a complicated thing that the fact that Google is doing it instead of having you as an application developer to take care of that-- 

UMESH: Yeah, no one should want to do that. 

FRANCESC: [INAUDIBLE] very happy I don't have to do that. 

UMESH: Like, I've had to work on applications that did stuff, and it is really, really hard to get it right. And this is what I spend my time doing. So I think that should definitely be kind of like your second option, let's say. 

FRANCESC: Nice. So we're kind of running out of time, but there was one more topic that I would like to mention just because it's so fancy, and it especially has a very fancy name, which is homomorphic encryption. Could you tell us a little bit about it? Why is it cool? Why do people care about it? 

UMESH: Sure. Homomorphic encryption is one of the more amazing theoretical advances in the history of cryptography. One of the things that's challenging about working with encrypted data is that if you use what's called symmetric encryption, it's really like, if you have the key you can see the data, and if you don't have the key, you can't see the data. And that makes it really difficult to do computations between multiple parties which don't fully trust each other. Because if you both have the key, then you kind of do have to fully trust each other because you can see all the data. And if neither of you has the key, then you can't really do anything interesting, right? 

So people, for a long time, have wanted this ability to do what's called secure multiparty computation, or kind of like private computation that can be done across different parties. And basically what homomorphic encryption is about is saying, actually, there is a way to encrypt data that allows you to compute functions on the encrypted data. So actually, in an interesting way, it kind of calls back something I mentioned earlier, which is it's possible to encrypt stuff, which you can't tell what it is, but still manipulate it in a way that the result is predictable with respect to the original. 

Fully homomorphic encryption, the big advance there was it lets you compute any function, in principle, on the encrypted data. Which means you could in theory do any computation at all just on the encrypted data. Now, all that said, despite the amazingness of the theoretical advance, we're still-- I think it's fair to say-- quite a ways from it being really practical and useful for most applications. Part of the reason for that is that it's really slow. 

This is as of at least, maybe, 4 years ago or so when we looked at a very rough estimate of how much slower would Google search be if we had to do it using this fully homomorphic thing? I think the answer was roughly a billion times slower. 

FRANCESC: That's OK. 

MARK: I'd wait. I'd wait. It'd be fine. 

UMESH: So it's slightly slower than normal. 

FRANCESC: Slightly slower. 

UMESH: So that's not necessarily going to be the first application. However, there are some specialized scenarios where there's not a ton of data, where you're not really latency-sensitive, and where you do have this scenario where you want two parties who-- they want to be able to compute something together, but they don't fully trust each other to actually be able to use this technology. And we actually do have some experimental projects which do stuff like that. 

A good example of the kind of thing with this is what's called secure set intersection. That's where let's say that you have a bunch of users and I have a bunch of users that are doing something, and we want to know which of them are in common? But neither of us wants to reveal our full user list to the other one, right? So this would allow us to compute something like that, for example. And maybe we're OK if it takes a little while. It's not really a big deal it takes a while. 

So along those lines, actually, BigQuery has built some experimental support for doing queries on encrypted data, which basically lets you upload encrypted data so that BigQuery itself can't see it, yet BigQuery is able to run some queries for you to give you back some answers that will actually answer your query in a way that BigQuery never saw either the actual question in some cases with some caveats or the data itself, which is pretty cool. It's not super scalable, but it is something that is out there. And you can actually play with it on GitHub. 

FRANCESC: Cool. That sounds like the future. That sounds very interesting. 

MARK: Well, we're definitely running out of time, but just very quickly, is there anything else we might have missed or you need to plug, or resources people should go look at? 

UMESH: I think probably the best thing to do if you're really interested in this topic is to check out the encryption white paper that we recently put out. It has a ton of detail on how this stuff works. We can also put up a link to the encrypted BigQuery client if you're interested to play around with homomorphic encryption. And also, stay tuned for future episodes where we talk about a whole bunch of other security topics. 

FRANCESC: Cool. We'll have all of those links on the show notes, and we'll be waiting for you to come back to the next episodes. 

UMESH: All right, thanks a lot, guys. It's been a pleasure. 

MARK: Thank you so much. Thanks again to Umesh for joining us today. That was a great conversation about security-- something I am very glad that I don't have to worry about as much. 

FRANCESC: Yeah. 

MARK: Because that sounds super complicated. 

FRANCESC: Yeah. It is very complicated, and it's one of those things where it is cool to try to understand that and everything, but knowing that the responsibility of the system is in your hands, that is, like, no, no, no. 

MARK: Yeah. It's totally the double whammy. It's, like, super complicated, but you do not want to get it wrong. 

FRANCESC: So yeah, very happy with the all the content of the interview. I learned a lot. And I'm actually looking forward to next episodes on security. 

MARK: Yeah. I want to hear more. 

FRANCESC: Yeah. OK, so I think it's time to go to the question of the week. And as we said before, the question of the week is quite simple. OK, so I have static content. Let's say HTML, CSS to have a script. And I want to serve it. 

MARK: What do I do? 

FRANCESC: What do we do? 

MARK: Yeah. So I actually brought this one up because we recently released a whole solution around this, which I think is highly extensive and really, really cool. So let's go through the layers, which are really, really cool. So say you have nothing, don't need to worry about anything dynamic. Everything's fine. You can serve static content right out through Google Cloud Storage. 

FRANCESC: Cool. 

MARK: Which is cool. So you get edge caching. You don't need to worry about running up servers, nothing like that. Very, very simple to use. You push it up, it stays there. Beautiful. But it is worth noting that if you have content that you want served over HTTPS, unfortunately, Google Cloud Storage won't help you with that, so you're going to have to look at one of the other options. 

FRANCESC: Not yet. Maybe-- I'm sure that this is something that we will have at some point, but it is important to take into account that if you want HTTPS, Google Cloud Storage is probably not the best place to put it. 

MARK: Absolutely. So next-- OK, down the list we go. So we can also do stuff on virtual machines. So Google Compute Engine-- you want to install Apache, NGINX, something like that. What's cool about the solution, as well, is it shows you how to do that, but then also how to load balance it, autoscale it, make sure you can handle as much load as is coming in at that given point in time. And it's got guides all the way through that, as well. 

On top of that, there is a whole, obviously, container solution because we talk about containers all the time. So again, the guide takes you through that, as well-- scaling that, load balancing that, setting up monitoring and logging within Container Engine, how to do that within that sort of static serving capability. So that works really well, as well. 

And finally, if you don't want to manage it at all, but you need maybe HTTPS, or maybe you have some dynamic content, we have some managed platforms, such as Google App Engine. 

FRANCESC: Yeah, and the good thing about Google App Engine is, as we have said before, you basically just give us the code and forget about it. Everything will just scale, handle the traffic, however big or small the traffic is. And that's what we heard from the podcast, really. 

MARK: Yeah, I mean, if you want to go back to episode number one, we talk a lot about how we use App Engine to host all the static content for this site, and it works fantastically. 

FRANCESC: Episode number one. 

MARK: Episode number one. 

FRANCESC: That was a long time ago. So yeah, let us know if you have any questions about how to serve static web content, and we'll have a link on the show notes to the article with all the solution and all the different options and how to do every single one of them. 

MARK: Absolutely. So Francesc, what are you up to? You running around anywhere in particular? 

FRANCESC: So I'm actually planning. My next trip is going to be in November. And I'm going to Brazil. Yeah, I'm very excited. I'm going to be doing the opening keynote at GopherCon, Brazil. 

MARK: Nice. 

FRANCESC: And I even know what I'm going to be talking about, which is kind of new. And then on top of that, I'm going to be attending a DevFest somewhere there in Brazil, and there's going to be some other events. So I'm very excited about that. Never been to Brazil, so excited. 

MARK: Cool. 

FRANCESC: What about you? 

MARK: Next week, or, actually, when this comes out-- yeah, next week-- I will be at Strange Loop, one of my favorite conferences. 

FRANCESC: So jealous. 

MARK: Yeah. I'm so happy about that. And I'll be doing a couple little things around there. I've got an UnSession in. I'm hoping it gets accepted. Hopefully we'll find out soon, as well. So it should be lots and lots of fun. 

FRANCESC: Cool. 

MARK: So thank you, Francesc, for joining me for yet another week and yet another episode. 

FRANCESC: Thank you, Mark. It was a pleasure, as usual. 

MARK: Yeah, and thanks to everyone who was listening. And we'll see you all next week. 

FRANCESC: Yeah. See you all next week. 
{{< /transcript >}}