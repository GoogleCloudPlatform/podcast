+++
audioDuration = "00:45:28"
audioFile = "Google.Cloud.Platform.Podcast.Episode.15.mp3"
audioSize = 65496290 
categories = ["gRPC", "Protocol Buffers", "Firebase", "Mobile"]
date = "2016-03-01T01:07:49Z"
description = "In the fifteenth episode of this podcast, your hosts Francesc and Mark interview Varun Talwar. Varun is a product manager in charge of gRPC, an open source project created at Google that helps you build distributed systems like we do internally at Google."
draft = false
episodeNumber = 15
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "gRPC with Varun Talwar"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/9LeAaEkGejR"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/48mvx6/episode_15_grpc_with_varun_tarwal/"
+++

In the fifteenth episode of this podcast, your hosts
[Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic) interview
[Varun Talwar](https://twitter.com/varungyan).
Varun is a product manager in charge of gRPC, an open source
project created at Google that helps you build distributed systems
like we do internally at Google.
<!--more-->

##### About Varun

Varun is a product manager in Google Cloud team and has recently taken on gRPC.
Prior to this he was responsible for
[Google Cloud Launcher](https://cloud.google.com/launcher/),
a launchpad to easily spin up popular software images on Google Compute Engine.
He is a long time Googler who has previously worked on YouTube, Maps and Adsense.

Follow Varun on Twitter [@varungyan](https://twitter.com/varungyan)
or contact him via [varuntalwar@google.com](mailto:varuntalwar@google.com).

##### Cool thing of the week

Spotify is now on Google Cloud Platform:

- Spotify chooses Google Cloud Platform to power data infrastructure [blog](http://googlecloudplatform.blogspot.com/2016/02/Spotify-chooses-Google-Cloud-Platform-to-power-data-infrastructure.html)
- Announcing Spotify Infrastructure’s Googley Future [blog](https://news.spotify.com/us/2016/02/23/announcing-spotify-infrastructures-googley-future/)
- Google’s BigQuery is *da bomb* - I can start with 2.2Billion ‘things’ and compute/summarize down to 20K in < 1 min. [tweet](https://twitter.com/plamere/status/702168809445134336)

##### Interview

Resources:

- [grpc.io](http://grpc.io)
- gRPC on [GitHub](https://github.com/grpc)
- Mailing list for gRPC: [grpc-io@googlegroups.com](https://groups.google.com/forum/#!forum/grpc-io)
- Take a REST with HTTP/2, Protobufs, and Swagger [blog](https://coreos.com/blog/gRPC-protobufs-swagger.html)
- Protocol Buffers [docs](https://developers.google.com/protocol-buffers/docs/encoding)
- etcd: distributed key-value store with grpc/http2 [blog](https://blog.gopheracademy.com/advent-2015/etcd-distributed-key-value-store-with-grpc-http2/)
- Flatbuffers [docs](https://google.github.io/flatbuffers/)
- Game on! Flatbuffers [video](https://www.youtube.com/watch?v=iQTxMkSJ1dQ)
- thrift [docs](https://thrift.apache.org/)

##### Question of the week

Special guests [Sara Robinson](https://twitter.com/SRobTweets) and [David East](https://twitter.com/_davideast).

- Firebase authentication with email and password [docs](https://www.firebase.com/docs/web/guide/login/password.html)
- Firebase `authData` for iOS [docs](https://www.firebase.com/docs/ios/api/#firebase_authData)
- Firebase UI for [Android](https://github.com/firebase/FirebaseUI-Android) and [iOS](https://github.com/firebase/FirebaseUI-iOS)

{{< transcript "FRANCESC: Hi, and welcome to episode number 15 of the weekly Google Cloud Platform podcast. I am Francesc Campoy, and I'm here with my very, very distinguished colleague Mark Mandel. Hey, Mark. How are you doing?" >}}
MARK: I'm good, Francesc. How are you doing today?
FRANCESC: Very happy, very happy about--actually, a very nice weekend that we spent at Launch Hackathon.
MARK: Yes, we did.
FRANCESC: And also very excited about the content. We're gonna be talking with Varun Talwar. Sorry, I did it for this time. Nobody's here. It's Varun Talwar, sorry, product manager for gRPC.
MARK: Yeah, very exciting interview, and gRPC is very interesting stuff.
FRANCESC: Yeah, I've been using it for a little bit with all the projects like demos and Kubernetes and stuff like that.
MARK: Me too.
FRANCESC: Very, very cool.
MARK: Yup.
FRANCESC: And after that we're gonna also be talking with Sara Robinson again.
MARK: Yeah, we've got a really interesting question of the week talking about Firebase and mobile application development.
FRANCESC: And since we don't know anything about it, we decided that Sara should be back.
MARK: Yeah.
FRANCESC: So at the end of the podcast we'll have Sara back to talk about Firebase and mobile phones.
MARK: Wonderful, but before we get into those things, I think we have a particularly special cool thing of the week.
FRANCESC: Yeah, it's a thing of the week that is so cool that I almost considered editing the podcast from last week to be able to talk about it.
MARK: Yeah.
FRANCESC: But we decided not to, but it's very exciting. It's about Spotify, of course.
MARK: Oh, yeah. Oh, oh, what's Spotify? I've never heard of it.
FRANCESC: Spotify--yeah, it's this little thing. They play music or something.
MARK: Yeah, something, yeah.
FRANCESC: Yeah, there a Swedish band? I don't know. Nah, they're really cool. I've actually been using Spotify for a very long time, even before they even considered start working with Google, and so I'm very excited that they're finally part of our customers.
MARK: Yeah.
FRANCESC: So they actually wrote a blog post.
MARK: Yeah, about how they moved their--basically, their entire infrastructure over to Google Cloud Platform so they could work--what is it, 75 million users? Like--
FRANCESC: It is pretty amazing.
MARK: That's pretty cool.
FRANCESC: Yeah, and it's not only the fact that they moved to Google Cloud Platform, it's pretty cool, but for me the coolest part is that not only it's--like, they did a little bit of shift and lift, like, whatever infrastructure they were already using, they moved it to the cloud, but also they started using a bunch of other Google Cloud Platform managed services.
MARK: Yeah.
FRANCESC: Which is pretty awesome, and I have the list here.
MARK: Yeah, the ones I quite like, like, on the big data side especially. We've talked, you know, about--with Felipe about BigQuery and stuff like that, but they were using, like, Hadoop, MapReduce, Hive, bunch of homegrown stuff, and they basically came across and started using all our stuff, so Google Pub/Sub, Cloud DataFlow, BigQuery, Cloud Dataproc, so they found, like, well, I can only assume better solutions within what we had for them and we'll manage from trying to manage their own stuff on their own end.
FRANCESC: Yeah, and apparently they were so happy that some engineer started tweeting about it, and there's--I have this tweet from--I'm gonna call him Paul Lamere 'cause I think he's French, and if he's not French, hey, Paul, this is an invitation for you to come to the podcast.
MARK: Yeah, yeah, tell us literally how your name is pronounced. We'd love to hear it.
FRANCESC: Yeah, and you can also tell us about your history, how did it go using Google Cloud Platform and so on, but there's actually one specific tweet where he tweeted, "Google's BigQuery is da bomb. I can start with 2.2 billion things and compute summarize down to 20k in less than one minute."
MARK: Which is pretty impressive.
FRANCESC: It is indeed pretty impressive, so yeah, we could love to have him, so if by any chance you are listening to it or if any of our listeners knows personally Paul Lamere or--
MARK: How many degrees of separation can we get from Paul Lamere?
FRANCESC: Yeah. I'm sure that someone that we know might know someone that knows him, so just let's make this happen.
MARK: Excellent.
FRANCESC: Yeah, so yeah, on top of that they're also using--they're basically using the whole Cloud Platform. They're also using Cloud Datastore and Cloud BigTable, and they're also using Cloud VPN and Cloud Router and so on.
MARK: Yup.
FRANCESC: So yeah, it's a bunch of things. I think it's a very cool--it's very cool thing that we finally have someone as big as Spotify and so public 'cause now I can go and tell to my mom that. She's definitely not technical, and she knows Spotify.
MARK: So your mum doesn't know Snapchat, is pretty much what you're saying.
FRANCESC: She--I don't think that--I don't think so.
MARK: I don't know Snapchat.
FRANCESC: Which is probably better for her.
MARK: Yeah, Spotify is probably a better one.
FRANCESC: Yeah.
MARK: Wonderful. Well, that sounds really cool. So why don't we have a chat with Varun? I really want to hear about gRPC.
FRANCESC: Great, let's go with that.
MARK: Let's do it. We are joined today by a very special man, a man by the name of Varun Talwar. Varun is the product manager for a lovely little project called gRPC. Varun, how are you doing today?
VARUN: Good, thank you so much, Mark.
MARK: Thank you very much for having us. We really like having you here.
FRANCESC: Yup. So we're gonna be talking about gRPC, which is a great project. I really love it 'cause open source and everything. It's, like, out there, and everybody can use it. Everybody's using it, actually. Lots of people are using it, but before that, can you tell us a little bit about yourself?
VARUN: Yeah, sure. Thank you, Francesc. So my name is Varun, as Mark said. I'm a product manager on a project called gRPC, Google Remote Procedure Call, as some people like to fill it.
FRANCESC: Wait, wait, wait, wait, wait, wait, wait, I heard that that was not--according to the FAQ, gRPC stands for gRPC Remote Procedure Call, which is amazing.
VARUN: Exactly, exactly.
FRANCESC: Okay, okay.
MARK: Okay, it's recursive. It's a recursive--it's a recursive--
FRANCESC: Recursive--like, yeah, we can [inaudible].
VARUN: We like recursion.
FRANCESC: Exactly. Okay, okay, okay. Sorry for interrupting.
VARUN: So I have actually recently taken on this role and--but, you know, it is born out of something called Stubby, which Google has been using for many, many years, and it's awesome that we've now open sourced it and the community is--can use all the great things that Google has built, so I'm super excited about the opportunities, about taking gRPC to enterprise companies, to the community, and to all the new use cases of microservices, Cloud, and IOT.
FRANCESC: Cool. So--okay, so we've seen that gRPC has use cases--like, one of the use cases is microservices, so makes it perfect for nowadays. Like, everybody's using microservices, but how could you describe gRPC in, like, two sentences? What is it exactly?
MARK: You can use three. It's okay.
FRANCESC: Oh, yeah, you get--
MARK: You--I mean, like, there's no limit.
FRANCESC: Yeah, you're allowed.
VARUN: Well, yeah, so if I had to say it in, like, one line, it would be gRPC is a high-performance and efficient now open-source RPC framework that puts mobile and HTTP/2 first, so it's really a general-purpose RPC framework that anybody can use to connect to systems, and, you know, it supports a whole ton of languages.
MARK: Cool, so let's maybe go a little higher up. Like, we say RPC. What does RPC stand for? What is--like, what is that and where do people use that?
VARUN: Right, so as many of you in this audience I suppose would know, RPC stands for remote procedure call. I'll take you back to CS 101 and our undergrad schools, which is, you know, basically, the way we were taught--all of us were taught RPCs was, you know, you have a process, but it's not running on the same machine. It's a remote process, so how do you call it? You basically--RPC is a technology where you define what that service is, you take all the arguments from the calling machine, you serialize, you do marshallings, send them over the wire. There's an unmarshalling happens, takes the arguments, does the processing, and sends back, right? So that's how, conventionally, we've all been taught RPC, and that's what, at the core of it, it is, you know, request-response, but these days RPC frameworks have become pretty sophisticated. They can do synchronous, asynchronous, streaming, and all those good things.
FRANCESC: Nice. So by the description you gave, if I gave that description to anyone, I'm sure that 99% of people could say, "Oh, REST." What is difference with it?
VARUN: Right, so REST is pretty much become a standard in how people expose their sort of services. You know, used to be the SOAPs and WSDLs, and sort of REST really took on with the growth of Internet and sort of browsers and mobile phones interacting with Internet services primarily because, you know, it--all it was was sort of HTTP methods, right? And they could float through proxies and firewalls and easy to call, easy to test, so REST is great. This is--you know, by no means gRPC is saying that REST is not good. REST continues to dominate, and it's great for a lot of use cases. As a lot of you know, REST is very resource-oriented. So it stands for representational state transfer. You know, you basically define the resources on the server side and, you know, HTTP GET, PUT, POST methods on top of each of those resources. Basically cloud operations on all your server-side resources is how REST works, which is great. What we have seen is when--you know, when people really, really care about performance and they care about what is being--what format is being carried on the wire, what--you know, and trying to squeeze out the best performance, that is where things like gRPC shine, where we serialize into binary over the wire as opposed to carrying JSON when we've seen in some cases, you know, even crazy improvements like 100x if you--by--just by changing that. The other thing is for a datacenter and cross-datacenter large-scale operations like, you know, the Internet companies of the world, one, performance is critical. Second, there are a lot of use cases where it's not just, you know, request-response these days. It's like, with push notifications and streaming data sources and, you know, streaming data from all kinds of connected devices. People really want bidirectional streaming, both client to server and server to client, and, you know, this is where, again, gRPC is great and--'cause it allows you to establish, you know, one TCP connection and send a ton of messages on both sides, right, with having efficiency on the wire, so I think these are some of the use cases where we're seeing adoption of gRPC. The other big difference, I would say, is in terms of the mental model is if I were to put it in, like, very, very, you know, simple terms, REST is very much nouns-oriented, and gRPC is kind of verbs-oriented, right? So the way you define your services is what your systems and services can do, and this is the service definition language, which is--Google's implementation is based on proto 'cause, you know, protobuf is what Google uses internally, but gRPC as a protocol is designed so that you can use any IDL, any interface definition language, in short, IDL, and basically define your services using any IDL, and we are just the transport which will carry your messages efficiently, right?
FRANCESC: Right. So you mentioned IDL. What does IDL stand for?
VARUN: Yeah, so IDL is interface definition language. The implementation at Google for gRPC uses protobuf, which is a way you define your services, so in--you know, to take it a step further, you define your methods in proto. We give you a compiler using which you--you know, which is called protoc. You compile using that. You get your client and server-side stubs, and then you communicate. At a high level, that's what it is.
FRANCESC: That sounds a little bit like Swagger, right? Like, the part that you're describing, methods and resources.
VARUN: Yeah, so yeah, Swagger is great. It's--so yes and no would be the short answer, right? So Swagger is--
FRANCESC: Lazy answer.
VARUN: Swagger is great in terms of its tooling around, you know, doc gen, testing, you know, sharing server specific--services specification and so on, and it's greatly adopted for REST services, but we don't think of--we think of Swagger as a great complementary technology that we want to actually lean in and adopt by having ways to, you know, convert some of these [inaudible] IDL files, proto files into Swagger and then allowing people to use all kinds of downstream Swagger tool chains, you know, tools that they are familiar with so they don't have to really change the way they're using things in terms of doc generation, testing, you know, things like API explorer and so on.
FRANCESC: So could that mean that at some point we might have some protocol buffer definitions and some tool to say, "Generate the Swagger specification that corresponds to that, and then use my Swagger explorer to do exactly--like, to go over my protocol offer definitions?"
VARUN: You've--you read my mind.
FRANCESC: That's awesome. I'm actually--is that actually coming? Can you say a little bit, or, like, is it something that people are working on?
VARUN: Yes, it's actually being worked on. I can go a step further and say it's av--like, it's being used internally.
FRANCESC: Nice, nice.
VARUN: So it's not, like, you know, just an idea. It's actually there.
MARK: Yeah.
FRANCESC: It kind of works.
VARUN: Yeah, yeah, it kind of works, yeah. So coming soon is what I can easily say, yeah.
FRANCESC: That's very good. I'm very excited about that.
MARK: That's awesome. Okay, so just to kind of put a bow around it a little bit, so development flow with gRPC, so we've got this IDL, the definition language, so I write my protobuf file. What does that kind of look like? What is that--I know it's kind of hard to say by voice, but what--like, sort of general concepts, how do we--how does that sort of look?
VARUN: Yeah, so a proto--and, you know, if you go to grpc.io, we have great hello, world examples to actually get you started on that, but essentially, you do--you say service, any method name. Let's say it's hello, world. You say service hello, world. You say it's an RPC input. You know, let's say I want to say "Hello, Mark," so string name and, you know, output string as well, so that's all you're defining. Then you say your message, which is the actual payload that will be used for the communication, so you basically define service and message. You can think of it in sort of conventional sort of terms as your methods and your sort of data schema, and you define those, and we give you a compiler to basically compile and get, you know, codes generated in ten languages, so--and, you know, it's--I don't say that wrong. It's actually ten languages.
FRANCESC: We're not gonna ask you to say it--all of those.
VARUN: All of them, pretty much any language.
MARK: I'm actually wondering if I can remember off the top of my head. How--I want to see if I get this right. There's C, C++, PHP, Java, Ruby--
FRANCESC: Are you gon--
MARK: Go.
FRANCESC: Okay, thank you. [inaudible].
VARUN: Francesc would be angry.
MARK: Python.
FRANCESC: Objective C.
MARK: Objective C.
VARUN: Node.
MARK: Node, that's [inaudible], there we go.
FRANCESC: Yeah. Okay, so basically what--at the end what we're doing is what you write in protocol buffer definition is basically, like, an interface, a Java interface or a Go interface, really. Like, it's just a interface with the method names and the inputs and the outputs, and then you're gonna auto-generate the code for the client and the server, and then the server's gonna be like, "Oh, you have to actually define whatever hello, world actually does," right?
VARUN: Right, right.
FRANCESC: Cool, sounds good.
MARK: That sounds good. All right, cool, and then so once you've generated that code, it gives you a server that you can run in that language, and you can start it, and then you got a client that you can interact with as well.
VARUN: Yup, so you call in from client stubs and then you test and apply it.
MARK: Excellent. So we touched a little bit on--before you said it, like, we've said a hundred times sort of thing, I know performance just depends, but, like, latency, performance, have you seen, like, like, any sort of benchmarks or something that you've seen that sort of gives people a bit of a--at least--at least a somewhat of a sense of, like, how fast this thing could really go?
VARUN: Yeah, so, you know, performance is a tough one to answer in--'cause--
MARK: It depends.
VARUN: Depends is the right answer always. It's universally the right answer for performance questions, but we have seen, you know, in all the--I would say three kinds of use cases. One is, you know, service to services in microservices world. We have seen an example from CoreOS who is, you know, using gRPC extensively in their distributed key-value store called etcd, which is also, actually, one of the underpinnings in Kubernetes, and they actually put out a blog post. I think it was the--yeah, end of last year, December 15, where they compare it with JSON RPC, and, you know, this is, you know, simple PUT requests on etcd, which for JSON RPC was taking anything in the order of about 250 to 300 milliseconds, was then taking about 6 milliseconds.
FRANCESC: That's a--wow.
VARUN: So you can--
MARK: That's nice.
VARUN: Yeah, and the log push is out there in the public and, you know, we--
FRANCESC: That's, like, 40 times faster.
VARUN: Yeah, so--
FRANCESC: Yeah, that's--that's decent.
MARK: Yeah.
FRANCESC: Yeah.
VARUN: So the other example I can give is, you know, all--a lot of Google Cloud services are exposing a gRPC interface as well in addition to REST, right? Some, like BigTable, are only gRPC, so--
FRANCESC: Which makes sense if you really care about the performance, yeah.
VARUN: Yeah, if you're such--you know, if you're somebody like BigTable and Pub/Sub, like, high performance, you know, throughput and QPS sort of heavy systems, then those are the services which are seeing huge advantages from having a gRPC interface, so--and the third one I would say is--which, you know, a lot of Google services themselves, including our core mobile apps, are actually in the process of, you know, switching to gRPC, which--you know, by the end of the year or so I think we will have some real numbers around what that does mean, but we're super excited with that, you know, journey and the prospects of that.
FRANCESC: Nice. So I wanted to ask one question because I keep on getting that question over and over, and if we don't ask it now, it will be the question of the week anyway.
MARK: It'll show up. It'll show up, yeah, that's right.
FRANCESC: Yeah, it'll show up, which is, okay, how do you manage multiple versions of an API? Like, that's something you have to do, and of course one of the options, like, well, never do breaking changes, of course, but in the real world you will have to do them. How do you manage that with gRPC?
VARUN: Right, so this is an area where, you know, proto has actually shined and done this well within Google as well as, you know, people who use protobuf outside would know that it sort of gives you backward compatibility, so for the--you know, if you've written protobuf files, you've seen that there's a unique sequence number attached with sort of every field, and the great thing with protobuf is that you can add new fields to your message formats without ever breaking backwards compatibility, so, you know, all binaries or services that don't know what those fields are or what they mean simply ignore it, right? So thereby you can basically serve multiple versions of your services to different clients at the same time without, you know, any--without a huge cost of change or without breaking changes to existing clients.
FRANCESC: I see.
VARUN: So with proto that's a great thing, right? Like, people--and this happens all the time at Google. People update the protos, you know, push them in, and the great thing is, you know, all existing clients continue to work. You know, those who don't understand or don't know what to do with the new fields just ignore them, right?
FRANCESC: Nice.
MARK: So you could do stuff where, like, if you added a field and then somebody sent a message, and you're like, "Oh, that's missing. Well, then I'm gonna take this code down this path, but if it is there, then I will do the new thing," whatever that happens to be, and you can kind of build in new cases as you need to.
VARUN: Right, right.
FRANCESC: That makes sense.
MARK: That makes a lot of sense. Okay, cool. 
FRANCESC: Cool, so you also mentioned that there was--we were actually trying to make gRPC something that is mobile first, and for mobile first there's a couple things which is, yeah, performance is important, but also data is expensive and slow, so can you talk a little bit about that? Like, what's the difference between gRPC and other things like, maybe, like, just a blob or maybe JSON or maybe Huge XML? Like, it's gonna be smaller than XML.
VARUN: Right.
FRANCESC: I expect.
MARK: Or a JSON XML, which is a standard.
VARUN: Oh, yeah?
MARK: Yes.
FRANCESC: Oh, I don’t want to--I really don't want to know what that is. Yeah, so could you discuss a little bit about that?
VARUN: Yeah, so from our initial--you know, from the get-go we wanted to have gRPC be designed in a way that puts mobile first, so there are a few answers, right? Like, one which is straightforward is, you know, basically both JSON and XML sort of do, you know, base 64 encoding as opposed to--instead of that with, you know, binary over the wire. That's like--that is where you get huge efficiencies and advantages from. What does it mean for mobile clients? It means less data usage. It means battery savings, which are, you know, critical in today's times, especially with--and especially if you're doing, you know, things like realtime events on your mobile apps, which are both client to server as well as server to client. This is where, again, I think bidirectional streaming from gRPC helps a lot, so in terms of, you know, actual differences with respect to JSON or XML, JSON XML if that exists…
MARK: [inaudible].
VARUN: Is something we--obviously it depends in terms of, you know, actual difference we get. It depends on the use case, but if you go look at our, you know, documentation around protobuf, just binary, you know, serialization, I think, is--it's three to ten times smaller than XML serialization of structured data and anywhere from 20 to 100 times faster in terms of, you know, time to process, so remember a lot of these--it's not just about the payload size. It's also about the time to parse, which--you know, and you remember your sort of good old days of SOAPs and WSDLs and XML parsing and--
FRANCESC: Oh, yeah.
VARUN: Right? So that is where a lot of the development costs, not just CPU, you know, cycles cost used to be spent, so I think huge efficiencies to sort of gain from that.
MARK: Nice. It seems like it'd be a really good fit for almost anywhere that--like, when we--we tend to think in sort of web applications as well, but anywhere that has--needs low latency. I'm thinking IOT. We sort of touched on that. Obviously mobile as well, gaming could potentially be another option, so there's a lot of places that could definitely fit.
VARUN: Yeah, I think for mobile and, you know, having--so we--you know, we--in R10 I think we said it, which is objective C for iOS and Android, Java. Both are something that natively are supported for gRPC, and, you know, we are seeing--in fact, the first kinds of use cases we are seeing for mobile apps are all around either bidirectional streaming or chat kind of use cases, and, you know, the--or, you know, wherever payload is heavily nested and, like, sort of complicated data structure and nested--DPA nested payloads is where you'll see sort of the biggest advantages of sort of binary serialization.
FRANCESC: Nice.
MARK: Very nice.
FRANCESC: Very cool. So I actually have a couple more questions.
MARK: Go on.
FRANCESC: Okay, so one of the questions is--it's actually a double-edged question, which is, okay, so why could I do this instead of just sending binary blobs? We're binary encoding, right?
VARUN: Right.
FRANCESC: So why don't I just, like, whatever, like, in Java serialize and just send that?
VARUN: Yeah, so it's a--and, you know, each of the languages have their own, you know, search framework. Like, Java has a good RMI library.
MARK: Oh, the nightmares.
VARUN: So, you know, it's--there's a whole lot of answers to that, but, you know, primarily being the ability to ha--it's not just serializing on the wire but, like, you know, a standard way to specify and share services, a standard way to upgrade and back--run backward compatible services, and a standard way where not just how services communicate but how services do interesting things like health checking, monitoring, tracing stacks around them. This is where, you know, one simplified approach for Google has given it a lot of benefits and has allowed it to, like, really do great amount of efficiency around reliability, security, operations management, analytics, which all become uniform, and suddenly no--you know, developers don't have to think, "Oh, how will I talk to that system?" right? They don’t' have to think, "Oh, which language is that written in?" You know, I can tell you my personal story out of my--you know, right out of college writing--you know, writing a C backend which was--talked to a Java-based frontend and trying to hook JNI libraries and always crashing and--
FRANCESC: Ouch.
MARK: Yeah.
VARUN: You know, so--and being very specific to, you know, how two languages communicate, so I think the--if you can take that worry out and make sure it works efficiently, that's a huge, huge plus, really, and you don't have to worry about, "Oh, is--the Java RMI library supports this kind of serialization and supports this structure, but the one I'm talking to actually does not, so how do I--?"
FRANCESC: Yeah, and I'm assuming that also versioning--like, when we're talking about versioning on binary blobs, just forget it.
VARUN: Right.
MARK: Yeah, not even try.
FRANCESC: Yeah, yeah.
VARUN: Yeah.
MARK: So you've got, like, this whole ecosystem around things, and then you can also sit back and be like, "Okay, I'm gonna use the language that's the right tool for this job, and I don't have to worry about any communication at all."
VARUN: Right, and any new services, you know, that keep coming up like a new mobile app or something new for IOT devices, they just don't have to worry about how I will talk to my existing and new services.
MARK: Excellent. You had two questions.
FRANCESC: I have? Oh, yeah, so my other question was--I was like, "Why is he--how is he looking at me now?"
VARUN: It was [inaudible].
MARK: Okay.
FRANCESC: Yeah, so there was--yeah, the other question is still, again, about something really similar, which is what--if I'm using protocol buffers, I heard about this little thing, flat buffers. What is the difference? Why can I use flat buffers, or can I use flat buffers with gRPC?
VARUN: You can. So in--
FRANCESC: Actually, could you explain also what flat buffers is for our listeners?
VARUN: So there are various sort of variations of protocol buffer out there for--one is actu--as Francesc mentioned, flat buffers, which is basically, you know, trying to have--at a concept level, you know, basically having data structure represented the same way in memory and in disk, so you kind of don't have to take on this conversion, serialization and de-serialization cost, and, you know, it's something that is picking up. There is also another version of protocol buffers called nano protocol buffers, which is for--you know, more for IOT kind of scenarios, making the payload even smaller and even lighter. So one great thing about gRPC in terms of its design, and, you know, kudos to all the--all the engineers who, you know, started with the design effort, is it is designed to be IDL agnostic, right? So in theory you can swap in an IDL of your choice. Instead of proto, you can use flat buffers or nano PB or thrift or other IDLs for that matter, and it is--you know, you can use--you can swap it out. There is some work on that, but you could, in concept, use it across IDLs, and while I'm giving kudos for design, the other thing is it's not just IDL agnostic but transport protocol agnostic, so you could, in theory, swap in HTTP/2 with QUIC and get--you know, do smart things like that, which, for those of you who don't know QUIC, is an implementation on top of your DP, and, you know, some high--high media payload use cases like YouTube are, you know, really trying to take advantages of those.
FRANCESC: Yeah, we had an episode with Ilya Grigorik, and he discussed HTTP/2 and QUIC a little bit.
MARK: Yeah.
FRANCESC: That was episode--
MARK: Yes.
FRANCESC: I don’t remember.
MARK: Definitely, yes.
FRANCESC: Yeah, it--for any listener that's listening to this, just find that Ilya Grigorik HTTP/2 if you want to learn more about QUIC and HTTP/2.
MARK: Yeah, definitely, definitely. Awesome. All right, I guess I'll--I have one more question, which is what has been your favorite project you've seen with gRPC?
VARUN: Ooh, that's a good one.
MARK: It's a very good one, clearly.
VARUN: Yeah. So--I'm trying to see which is a favorite one. So--
FRANCESC: And not confidential.
VARUN: And not confidential, yes. So I'll name one from yesterday, which the quote I got is one of--in the top up there, which was a big client of GCP was just trying, you know, Pub/Sub over gRPC, and this is something which is, you know, pretty much ready, like, ready to be released, and they were sort of our early testers, and they have--basically, they said, "Okay, we will try something like, you know, a million messages per second and just simple, you know, publish to our topic and subscribe sort of standard Pub/Sub," and, you know, they currently run across huge number of servers and datacenters, and they tested, and they--basically, the developer who was testing was just like, "Okay, let me start on my laptop, and then I'll move on to datacenters," and he pretty much managed to run out of his own laptop.
FRANCESC: Oh, wow.
VARUN: And, you know, his quote was, "I can serve half of my traffic from my laptop, it seems." I mean, of course it was a--it was--you know, it was meant as a joke and, you know, in terms of just--he was just trying to allude, like, surprise by the amount of load he could just serve off his standard laptop.
FRANCESC: Nice.
VARUN: But, you know, I asked him, "Can I quote you on that?" But, you know.
FRANCESC: It's like, "Return the datacenter. I have a laptop now."
MARK: Yeah. "I'm good." 
FRANCESC: Nice.
VARUN: But you know, that just speaks to--you know, in certain use cases, you just see humongous performance improvements, and, you know, so that's one of my recent up there ones. Other than that I think we are very excited about what CoreOS is doing with not just etcd but, you know, with--they're using it across in their new thing called RKT, their new thing called Tectonics, so it's widely being adopted within their technology stack, and yeah, we are--we're excited to see what, at Google and outside, we can do with mobile use cases and IOT as well.
MARK: Wonderful.
FRANCESC: Cool. So I think that we're pretty much out of time.
MARK: We are.
FRANCESC: We are, so is there anything else that you would like to mention before we finish this interview?
VARUN: We are--first, go to grpc.io. That's the first thing you should do after--
FRANCESC: Okay, yup.
MARK: Excellent. We will definitely have that in the show notes.
VARUN: That's--that is my call to action. But yeah, I mean, we are doing, actually--super excited to tell our listeners that we are doing our first gRPC meetup tomorrow, actually, it turns out.
MARK: It'll actually be yesterday, unfortunately, by the time this goes out.
VARUN: Oh.
FRANCESC: By the time--yeah.
VARUN: It'll--let me be clear--specific on the date. We are doing it on 3/1, 6:00 p.m. PDT, 'cause, you know, we have a global listener base. So yeah, from the time we are recording, you know, 24 hours from now, so excited about that. I think we are actively looking to talk to our community members, and if you're interested, you know, please join the mailing list on grpc-io@googlegroups.com. It's on grpc.io. Follow us on Twitter, @grpcio, and, you know, we'd love to talk more and not just get your feedback but hopefully even get contributions.
FRANCESC: Awesome.
MARK: Excellent.
FRANCESC: Well, thank you so much for coming. Thank you so much for helping us understand a little bit more what gRPC is and what to use it for.
MARK: Yup.
VARUN: Thank you for your time. Appreciate it.
MARK: Thank you very much. Thank you so much to Varun for joining us today. It was a pleasure and delight to speak to you, and as a big fan of gRPC, real exciting stuff.
FRANCESC: Yeah, very, very happy that he finally came, and also looking forward to the event tomorrow, gRPC community event down in Mountain View.
MARK: It'll actually be yesterday, but yes.
FRANCESC: That will be yesterday [inaudible], so--and I’m very happy to see him there, people from CoreOS, people from Square, Kelsey Hightower from our team, so I think it's gonna be a very cool event.
MARK: It's gonna be a really great event.
FRANCESC: Cool, so before we finish with this episode, we're gonna go through the question of the week, and as we mentioned at the beginning, today it's gonna be about how to use Firebase on mobile applications.
MARK: Yup.
FRANCESC: And this act--this question actually comes from one of the participants of the Launch Hackathon this last weekend in San Francisco, and he basically came to our table because he was considering using Google Cloud Platform. He was not very sure. He came with a bunch of questions, and one of the questions was, "Okay, how do I handle authentication? I want my users to use password--email and password," and I was like, "Oh, you should not do that." Like, the best way to manage passwords is not managing them, so Firebase, it provides authentication with a bunch of different methods like Twitter and Facebook and stuff like that, but it also provides a very nice way of doing email and password, so he used that, and then after that, of course, he put everything on Firebase 'cause he was very happy with it, super easy, so yay, and his question was, like, "Okay, so now I have a bunch of views, and every single view needs to access that data on Firebase. What should I do? Should I create one reference and pass it around, or should I create a bunch of references 'cause whatever, like, you can--it's easy to do."
MARK: It's just easy.
FRANCESC: "Why not go in and do it?" And my answer to him was, "No idea," so to answer that question we decided to just walk around the building, and we found two awesome people that decided to help us and just come upstairs and talk to us, so we're very happy to have Sara Robinson back. Hey, Sara.
SARA: It's good to be back.
FRANCESC: So, Sara, who is a developer advocate for Google Cloud Platform in our team, and also David East. Hey, David.
DAVID: Thanks for having me.
FRANCESC: Yeah, thank you for coming the whole four floors from the third floor to the seventh floor of the office.
DAVID: I actually went up three flights of stairs--actually went four flights of stairs, and then the door was locked, so I had to go down one flight of stairs and then walk across the building to the elevator and then walk back across again, so.
FRANCESC: Wow, we can you get you a sandwich or something.
DAVID: Yeah, it was quite intensive.
SARA: We're glad you made it.
MARK: We're glad you got your exercise for the week.
FRANCESC: So yeah, David is a developer advocate for the Firebase team, and I think that you had a pretty good answer to this question. Should I create references? Should I pass them around? What do I do?
DAVID: Well, like, a lot of people when they're first new to Firebase, they think, like, "All right, when I create this Firebase class, you know, initialize it, it's kind of like a database, so it's really resource-intensive, so I want to keep it around, and I want to make sure that I'm not just, like, creating these big objects that consume all this memory or, you know, suck up all this data," and that's not really the case with the, you know, Firebase reference because when your app first connects to, you know, your Firebase database, that creates a persistent web socket from your app to the Firebase servers, and when you, like, create another reference, it doesn't just go off and create another web socket. The Firebase SDK just shares on that, the original socket built, so there's only ever one socket connected to the server, so you don't have to worry about, like, oh, new reference, new socket, new problems. Like, no, it's--all shares through the one, so, you know, the Firebase SDK handles that for you.
FRANCESC: Nice.
DAVID: As far as creating them, you can, you know, create, really, as many as you want. You know, like, that's not going to be the memory, you know, intensive part. The memory-intensive part is actually observing, you know, the--like, the realtime listeners for the data, and that's really only as memory-intensive as how much data you're trying to sync back 'cause that's--you know, bandwidth is just bandwidth, and slow internet connections are slow internet connections, so there's not too much we can do about that, but otherwise you're totally fine with just creating a new reference inside another view controller or something like that and just synchronizing that data to your views. You shouldn't really be using, you know, Firebase inside a view 'cause that, like, messes up, you know, the sacred NVC of iOS, but still, like, you don't have to worry about, like, just keeping one around.
MARK: Yeah, so it's not like when you think about server applications where you have, like, a database connection with pooling, and it's very resource-intensive and has all these connections. It's much more lightweight than that.
DAVID: Yeah, exactly.
FRANCESC: So the answer for this participant could be when you sign in, you're gonna get a UID, and you create a reference. Rather than creating the reference and then just passing it around, just pass the UID, which is a simple [inaudible].
DAVID: Actually, it gets even easier than that. You don't actually have to pass the UID around because once you have an authenticated user in Firebase, you can actually--for iOS you can say whenever you create a new reference, the variable name's ref, so you say ref.authdata, and as long as that user--you have a currently authenticated user, that auth data property will be populated with the current user, so you can say ref.authdata.uid.
FRANCESC: Oh.
DAVID: And so I actually never have to carry around any of the user information because it's always available on any reference you create.
FRANCESC: Okay, that's pretty awesome indeed.
DAVID: Yeah.
FRANCESC: There was actually a second part of the question, which was like, "Okay, so I want to display a list of things," so here was a list of skills, actually, and he was like, "Oh, so I have to go through all the JSON then, getting the code you need and then adding it to a different list that will appear somewhere," and he was like, "This is kind of, like, yeah, you know, I can do it, but it's kind of annoying that I have to write it." Is there a better way of doing this?
SARA: Yeah, there's actually a fairly new library called Firebase UI that helps you bind your Firebase data to a table view in iOS or a list view in Android, so it makes it really easy to just listen for changes whenever that data's changed in Firebase, add the new item to the list view.
FRANCESC: Cool, so we'll add the link to those two repos. I'm assuming it's on GitHub?
SARA: Yeah, it's on GitHub, so we'll post the link.
FRANCESC: So on the show notes.
MARK: Excellent. Well, thank you very much for coming and helping us answer these questions today.
FRANCESC: Yup.
DAVID: No problem. Thanks for having us.
FRANCESC: Okay, so before we finish this episode, I wanted to talk about the alternative cool thing of the week. We talked about Spotify, which is a really cool thing. I'm very excited about it, but there's also a more personal, maybe, cool thing of the week, which is actually that our podcast was launched publicly on the Google Cloud Platform blog.
MARK: Yes.
FRANCESC: And we've got, actually, a lot of new listeners.
MARK: Yes, so if you're new to the podcast, welcome.
FRANCESC: Welcome, and it's amazing 'cause we actually created this podcast thinking about, like, you know, it was like, "Maybe someone will be interested on listening to this podcast. Who knows?" But we are actually getting f--listeners from everywhere in the world, which is pretty amazing.
MARK: Which is awesome.
FRANCESC: Yeah. I wanted to mention something specific, which is the second-biggest country for our listeners is Japan.
MARK: That's pretty cool.
FRANCESC: Which is pretty amazing, so.
MARK: Yeah.
FRANCESC: So yeah, if you're Japanese, hey, I'm very happy that you're actually enjoying our podcast or really like this.
MARK: Definitely.
FRANCESC: And send us your questions.
MARK: Yeah, most definitely, in English, please, though actually, if you send them to us in Japanese, we do have some Japanese speakers who could translate them.
FRANCESC: You know, I think there's actually four people that speak Japanese.
MARK: That's true, there is. There's four.
FRANCESC: Which is pretty crazy, and only one of them is Japanese.
MARK: Yeah.
FRANCESC: So yeah, that's pretty amazing. Cool, so before we finish, where are we gonna find you, Mark, next week?
MARK: So I'm not gonna be anywhere special in the next couple of weeks, unfortunately, but I did just get accepted for dev.Objective(). It's a web development conference in Minneapolis.
FRANCESC: Cool.
MARK: Which is in--where are we? 14th of June.
FRANCESC: Nice.
MARK: So that'll be good fun. I'll be there talking--probably about something about Kubernetes, I expect.
FRANCESC: Something about Kubernetes, who knows? Cool. I'm gonna be in San Francisco next week for most of the week, and then I'm gonna be on my way to Austin for South by Southwest.
MARK: Very cool.
FRANCESC: We're gonna have a bunch of parties. That's gonna be so much fun though.
MARK: You're gonna have a blast.
FRANCESC: Yeah, we're gonna have Cloud Spin. We're gonna have a bunch of talks and events and the Cloud Vision API robot and a bunch of really cool things. We have a Fiber space there in Austin, so yeah, a really great space, so if you're gonna be anywhere in Austin next week for South by Southwest, come say hi. We're gonna be at the Fiber space most of the time, and we're gonna have cool swag, cool demos, and probably drinks at some point, so come say hi.
MARK: Excellent. 
FRANCESC: So before we finish, I wanted to--since we didn't do it last episode--
MARK: And we have all these new listeners.
FRANCESC: And we have all these new listeners, I think we should do this, which is how do people contact us?
MARK: Yeah, if you want to send us questions of the week or things that are cool, we definitely want to hear it, so people can send us emails at--
FRANCESC: Emails at--you got me there, hello@gcppodcast.com.
MARK: Yup. Twitter?
FRANCESC: Gcppodcast.
MARK: Reddit?
FRANCESC: It's the subreddit r/gcppodcast.
MARK: Yeah. Google+?
FRANCESC: +gcppodcast or you can also search Google Cloud Platform podcast.
MARK: Definitely, and on the web?
FRANCESC: On the web, gcppodcast.com.
MARK: Pretty easy.
FRANCESC: Great, so thank you so much for this great episode. I had so much fun today.
MARK: Me too. I'll see you next week.
FRANCESC: See you.
{{< /transcript >}}