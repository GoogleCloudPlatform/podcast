+++
audioDuration = "00:47:37"
audioFile = "Google.Cloud.Platform.Podcast.Episode.230.mp3"
audioSize = 68575067
categories = ["Distributed Systems", "Microservices", "Proxy", "Service Mesh"]
date = "2020-08-05"
description = "Oh the podcast this week, Mark Mirchandani and Brian Dorsey talk with fellow Googlers John Laham and Stewart Reichling about Traffic Director, a managed control plane for service mesh."
draft = false
episodeNumber = 230
hosts = ["Mark Mirchandani", "Brian Dorsey"]
title = "Traffic Director and Microservices with Stewart Reichling and John Laham"
image="/post/episode-230-traffic-director-with-stewart-reichling-and-john-laham/images/hero/hero-EP-230.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/i494po/episode_230_traffic_director_and_microservices/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

On the podcast this week, [Mark Mirchandani](https://twitter.com/markmirch) and [Brian Dorsey](https://twitter.com/briandorsey) talk with fellow Googlers John Laham and Stewart Reichling about Traffic Director, a managed control plane for service mesh. Traffic Director solves many common networking problems developers face when breaking apart monoliths into multiple, manageable microservices. We start the conversation with some helpful definitions of terms like data plane (the plane that data passes through when one service calls on another) and service mesh (the art of helping these microservices speak with each other) and how Traffic Director and the Envoy Proxy use these concepts to streamline distributed services.

Envoy Proxy can handle all sorts of networking solutions, from policy enforcement to routing, without adding hundreds of lines of code to each project piece. The proxy can receive a request, process it, and pass it on to the next correct piece, speeding up your distributed system processes. But Envoy can do more than the regular proxy. With its xDS APIs, services can configure proxies automatically, making the process much more efficient. In some instances, the same benefits developers see with a distributed system can be gained from distributed proxies as well. To make distributed proxy configuration easy and manageable, a managed control plane system like Traffic Director is the solution. Traffic Director not only helps you facilitate communication between microservices, it also syncs distributed states across regions, monitors your infrastructure, and more. 

##### Stewart Reichling

Stewart is a Product Manager on Google Cloud Platform (GCP), based out of Cambridge, Massachusetts. Stewart leads Product Management for Traffic Director (Google's managed control plane for open service mesh) and Internal HTTP(S) Load Balancing (Google's managed, Envoy-based Layer 7 load balancer). He is a graduate of Georgia Institute of Technology and has worked across strategy, Marketing and Product Management at Google.

##### John Laham

John is an infrastructure architect and cloud solutions architect that works with customers to help them build their applications and platforms on Google Cloud. Currently, he leads a team of consultants and engineers as part of the Google Cloud Professional Services organization, aligned to the telco, media, entertainment and gaming verticals.

##### Cool things of the week

* Week four sessions of Cloud Next: Security [site](https://cloud.withgoogle.com/next/sf/sessions#security)
* Weekly Cloud Talks by DevRel Week 2 [site](https://cloudonair.withgoogle.com/events/talks-by-devrel)
* Weekly Cloud Talks by DevRel Week 3 [site](https://cloudonair.withgoogle.com/events/talks-by-devrel?talk=infrastructure-weekly-recap&utm_source=google&utm_medium=blog&utm_content=next-devrel-wk3-recap)
* Cost optimization on Google Cloud for developers and operators [site](https://cloud.google.com/solutions/cost-efficiency-on-google-cloud)
     * GCP Podcast Episode 217: Cost Optimization with Justin Lerma and Pathik Sharma [podcast](https://www.gcppodcast.com/post/episode-217-cost-optimization-with-justin-lerma-and-pathik-sharma/)

##### Interview

* Traffic Director [site](https://cloud.google.com/traffic-director)
* Envoy Proxy [site](https://www.envoyproxy.io)
* NGINX [site](https://www.nginx.com)
* HAProxy [site](https://www.haproxy.com)
* Kubernetes [site](https://kubernetes.io)
* Cloud Run [site](https://cloud.google.com/run)
* Service Mesh with Traffic Director [site](https://cloud.withgoogle.com/next/sf/sessions?session=NET206&gate=true#infrastructure)
* Traffic Director Documentation [site](https://cloud.google.com/traffic-director/docs/traffic-director-concepts)
* gRPC [site](https://grpc.io)
* Traffic Director and gRPC—proxyless services for your service mesh [blog](https://cloud.google.com/blog/products/networking/traffic-director-supports-proxyless-grpc)

##### Tip of the week

[This week, we're talking about IAM Policy Troubleshooter](https://www.youtube.com/watch?v=CbU2NKX6Dxc).
     
##### What's something cool you're working on?

Brian is working on the Weekly Cloud Talks by DevRel we mentioned in the cool things this week and continuing his Terraform studies.

Check out the [Immutable Infrastructure](https://www.youtube.com/watch?v=78pkMNXDAjk) video we talked about last week.

##### Sound Effect Attribution

* "Jingle Romantic" by Jay_You of [Freesound.org](https://Freesound.org)

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode 230 of the weekly Google Cloud platform podcast. I'm Mark, and I'm here with my colleague Brian. Hey, Brian. How are you doing?" >}}

BRIAN: OK. Hello, everybody. 

MARK: OK. 

[LAUGHTER] 

OK. I mean, look, sometimes that's the best we can do. But I love how enthusiastically you are OK. 

BRIAN: I embody enthusiastic OK-ness. 

[LAUGHTER] 

MARK: I hope someday to get there. We are obviously all in a very strange time. But it really is the most exciting time of my week when I get to chat with my colleagues and put together this podcast. 

[SENTIMENTAL MUSIC] 

It means a lot to me. So super, super happy to be able to work with you all. And, of course, super happy to have the listeners here joining us. A little bit of a sappy intro, but that's all right. I'm OK with being a little sappy. 

So, Brian, can you tell us who we're going to be talking to today? 

BRIAN: Yeah. We had a great conversation with Stewart and John from the Traffic Director team. And they're going to go into a lot of detail about what that is and a whole bunch of words in the Traffic space around Kubernetes and containers. So get ready for a deep dive. It's fun. 

MARK: It's a lot of fun. And it's-- as you purposefully said, words-- we do a lot of defining in this conversation, because I think there's a lot of different areas to this space of what, ultimately, is a big microservices architecture. And it was such a great conversation to really break down what those concepts are, what they mean, obviously what Traffic Director is, but how they all fit together. 

BRIAN: Yeah. 

MARK: It's a super exciting conversation. And I'm super excited to get to that. But before we get into that, why don't we go ahead and jump into our cool things of the week? 

BRIAN: Silent intro music. 

MARK: Well, if it was silent intro music, it would just be silent. 

BRIAN: So that was, this space is intentionally left blank for audio. 

MARK: This space is left for you to reflect on what you think is important. 

[DING] 

[MUSIC PLAYING] 

All right, Brian, what's your cool thing of this week? 

BRIAN: I have to highlight something I was involved in, so apologies. But I think it's really cool. And there's one of these every week for the next month and a half. So basically, there's this series that we're calling "Weekly Cloud Talks by DevRel" that are running in parallel to each week of Next. So Next is online this year. And every week, Tuesday morning, there's a big drop of a bunch of videos that you can watch on demand. And in addition to that, we're doing a live streamed summary and Q&A session each week, and different DevRel folks who are comfortable in that space and then some guests that we manage to find and bring in. 

So last week-- and we'll put some links in the thread here-- I participated in two of these. So one of them was more on APAC friendly time zones with Katie and Yoshi from the developer operations team. And so we basically picked various talks that we were-- thought were particularly important and then discussed those together a little bit and then did a live Q&A session. And then I did another one of those with two of the PMs on our infrastructure pieces. So one person who's Ari Lieberman, who's deeply connected in Compute Engine, and Monica Sharma, who's a PM representing reliability and the SRP space in Google Cloud. So it was a really in-depth, fun conversation. And I encourage you to check those out. 

But also, just keep an eye out-- and there'll be a link in the notes-- for signing up for alerts to each of these. And you can watch them either live or on demand later. They've been going up really quickly. So far, the ones I've seen have gone up within minutes of the live session finishing. So that's amazing. 

It's a really good opportunity, I think, to get some of the reaction to what's going on, because it's a little bit tricky in an online forum to know-- there's a lot. And to know what really jumped out at people, what they think about it, how can you actually use it-- and I think these are a good space to get some of that. I'm excited about it. So check those out if you have the time. 

MARK: Yeah, no, it's awesome. And of course, this is a week 4 of Next, which is security week. Like you said, there's a ton of content out there. But I really like the "Talks by DevRel," because like you said, it gives you a different perspective on it. It gives you some live time reactions. And then there's that live Q&A. And I think for all of the sessions there's also an ability to do some sort of a pseudo live Q&A where you can put questions into a voting system and then people will come and answer those questions. So tons of content, tons of ways to interact. And, of course, it's really exciting to have Next shifted to this more online format. It's really cool. And we're going to see how well it works. 

So my cool thing actually has nothing to do with Next this week. It's actually a new solution that's been released for cost optimization on Google Cloud. And I talk about cost a lot. But this is a really developer-focused resource. And it's a solution guide. And we had some previous episodes where we talked to the solution architect team at Google to understand what they do. And I think if I could summarize that in one sentence, they look at a bunch of patterns from the customers they meet with and then try to find a way to generalize it. And obviously, there's a lot of work involved in that. But when they put out solution guides, it's based on those tips that everyone can learn from. 

So this is a collection of developer-focused resources specifically targeted towards saving some costs for you. We talk about a lot of concepts there, but I highly recommend this one as a great way to go look at, for my actual resources, like Kubernetes, what am I doing? How can I save costs on those? It's a really cool tip. So definitely recommend checking that one out if you all are interested in that. 

BRIAN: That sounds awesome. And I think everybody is interested in saving money. And if I pull one of the comments that Monica made out of the discussion we had, there's also an opportunity, sometimes, if you can save money in one area, to reinvest that in other areas that are important to your app, so like reliability. And sometimes there's a tension, a little bit, between wanting to run more instances of something for liability. And so if you can save some money, you can maybe make your entire experience better for your users. 

MARK: Yeah. I could probably ramble on about cost optimization as a topic, because it's a lot more than just saving money. There's a bunch of stuff. But I'm sure we'll get into that. Obviously, we had that cost optimization podcast not too long ago that talked a lot about that. So let's move on with this episode instead of reminiscing about the past and go ahead and jump into our conversation with John and Stewart. 

[MUSIC PLAYING] 

Stewart and John, thank you so much for joining us. To kick things off, can you tell us who you are and what you do? 

STEWART: So I'm Stewart. I'm a product manager. I work on a product called Traffic Director in Google Cloud. It's a product that some of you may have heard about and I'm here to demystify today. 

JOHN: Hey, guys. I'm John Laham. I'm a consultant in professional services for Google Cloud-- was a consultant, recently became a manager. And I lead the consulting and engineering team for solutions in telecomedia and entertainment as well as gaming and some of our internal teams. 

BRIAN: Well, you just set it up. You're going to demystify Traffic Director. So what is Traffic Director in simple terms? And we'll judge how mystical that is. 

STEWART: I'll start with all of the jargon, and then we can try to unpack that, because I feel like that's a great way to help you go from unhelpful terms that you may have heard to, what are the actual problems that we're trying to solve? So Traffic Director is a managed control plane for service mesh. It's a GCP-managed product. We run it for you. It helps you run your service mesh. Your service mesh consists of on-VOIP proxies, your data plane. That data plane talks to your control plane so that you can do all kinds of really cool things and solve problems that are core problems to having a distributed system. 

MARK: So in that, I got four words that we need to unpack, I think. And the first one was control plane. What is a control plane? 

JOHN: Let's decide on service much first, and then we can get into-- so for anyone that's worked in this field over the past five to 10 years plus, they're-- should be pretty comfortable with the term data plane and what a data plane is. Generally speaking, it's the plane that data passes through. So as you're moving information, or bits and bytes, from one place to another, whether you're talking about good old networking routers and switches or you're talking about service layer communications, the data plane is pretty much that layer, I guess you could say, where meaningful traffic, application-specific or workload-specific traffic, is actually traversing through your system. 

BRIAN: So let's talk for a second about why that traffic would be passing through your system. I think if you go back-- even today, actually, you see a lot of people who are building these things called monoliths. Monoliths are large code bases, an application that's basically fully self-contained. And we see this pattern among a lot of customers. Even within GCP, there are monoliths. Let's not lie to ourselves. And it's nice because this whole thing is just a giant code base where everything is well understood. It's just one big piece that everyone works on. And so this is the classical way that software has been designed. Over the last few years, you've seen this pattern towards breaking apart the monolith into microservices. So rather than just one gigantic thing that exists, a monolith, you have multiple smaller services that work together to provide the same functionality of this monolith. You go from monolith to microservices. 

JOHN: The monolith-- initially it wasn't even called a monolith. It was just called an application. You had an application. You wanted to do something. You'd write some code. It would do that thing. And as time passed, you want to add features. And you just keep adding more and more to that code base. It was pretty expensive to split up your application, to say that, oh, I want to take this part of my application and put it on another server. And then that means I have to go in provision networking, talk to the networking team, provision a new server, storage, justify the cost because all of a sudden I'm running two servers instead of one. I'm talking back in the physical server days. 

And if you look at the time frame since then-- and as we start getting into virtualization and cloud and all that, that process got a lot cheaper. So the idea of actually splitting something up into multiple entities started to make a lot more sense. I'm talking mostly pre-cloud years, but if you just look at cloud and all the way back to the '80s and '90s, you can actually see that that was one very big factor to not being able to actually split something up. Nowadays everything is software defined so you just say, yeah, I want to run this code here, that code there. And it's just to a few API calls and you're up and running. 

MARK: Let me try to echo this back a little bit. So data plane is the communication that would have been inside of a monolith between the parts that are talking to each other. 

STEWART: Yeah. That's exactly right. So in this world of application which gets bigger and becomes a monolith, you have lots of calls between different parts of your code. One function calls on another function. And all of that happens locally, on the same machine, in the same memory space. And it's all just self-contained. 

In this newer world where you have multiple different smaller services communicating with each other, you don't do calls on the same machine, necessarily. You don't do calls within the same space. These are actually now network calls. And so one part of code needs to call another part of the code using the network. It's no longer self-contained. And that's what we talk about when we say the words data plane. Those calls that happen between your services are passing through a plane-- it's an abstract concept-- where your data is traveling. So service A calls on service B with some arguments. It gets some response. All of that happens over the data plane. 

BRIAN: And whether that's ethernet, TCP/IP, REST-- you get all sorts different networking stuff. Doesn't really matter. You're making calls back and forth. What's next up the stack? 

STEWART: So I think one part to talk about, also, when we talk about data plane is, how do those communications actually happen? So imagine you've got a service, service A. It wants to call on service B. One way to do that would be, in the code for service A I write some networking code. I write some code that goes, oh, here's the IP address for service B. Let's call that IP address when we send a request. We're going to use a specific protocol. Maybe it's an encrypted request that we're sending. We're going to maybe record some stuff about the call that we're making so that we can figure out where things went wrong, if they go wrong. We would call that observability in fancy, jargon-y terms. But all of this stuff is stuff that you could fundamentally put into your application code. 

Or another pattern that we see is, rather than stuff and all of that entry application code and potentially having it in a library or living all over the place in lots of different services, what if we put something in between those two services? And that thing in between knows how to do all that complicated networking stuff. Now service A only needs to know about that thing in between. That thing in between handles all of the complicated stuff. It's still part of the data plane, but that thing that sits in between? It's now responsible for doing the complicated networking stuff for you. 

JOHN: So if we take that to an actual, practical perspective, what does that mean? You would have seen, over the years, people would start to write that code that controls those specific calls to the other service and, with good software engineering practices, start to abstract that code out and put it as a library and then start to reuse it in different places. And the better you could write that, the closer you get to this concept of starting to abstract this code out. But end of the day, you still have to manage this code, because it's still part of your code base, regardless. 

And then you have one team that owns service A, one team that owns service B. And you think to yourself, they're not necessarily using the same library. They could have each run their own library. And then you have no uniformity. So now you're starting to get fragmentation between the different services because each one is doing things their own way. And when you start talking about multiple services-- it's called a distributed system, or at least multi-service system-- you start to lose that ability to have an end-to-end view, which in the years of the monolith wasn't a problem because it was all right there. 

But now you have to consider that everyone has to start following a similar policy. So what do you do? Do you get more specific in the way you define your rules about software engineering in your teams? And then that starts to become overhead for all of your teams. Does that really begin to make sense? So you start seeing, we're going down this path of, we do need this network logic. We do need communication logic. But like Stewart said, if you take it out and make it this thing and just say, let that thing take care of all that communication, I can effectively take that thing and say, this doesn't have to be part of my code. It can be something that sits next to my code. And I'll leave a cliffhanger there. 

MARK: Well, we've been calling it a "thing" for some time, but I'd love to resolve that cliffhanger and give that a name. 

STEWART: Sure. So what is that thing? There are lots of examples of what this thing is. One very popular example is a proxy. Particular example is the Envoy proxy. For people who don't understand what a proxy is, it's a thing that receives a request from somewhere, handles that request, and then passes it on on behalf of the sender. 

So imagine it's a piece of code that's running on a machine. It's the Envoy proxy. It receives a request via the data plane from service A. It looks at the request and it goes, oh, that needs to go to service B. And it needs to be encrypted. And it needs to have all of these other parameters attached to it. The proxy handles that for you so you don't need to think about putting that code in service A or in service B. It just handles all of those data plane functions for you. 

MARK: Right. So now we've got a centralized area that-- like you said, the proxy that handles basically all the routing for where the services are able to communicate to other services. And that gives us the ability to not need to worry so much about configuring individual networking logic into each service. That sounds good. And it sounds like something that everyone would want for a microservices architecture, right? 

JOHN: Yeah. So just to touch on one word-- I'm going to be a little pedantic here, but you said it pretty much handles routing. 

BRIAN: Yes. 

JOHN: That's one of the things. But like Stewart was saying earlier, we start to have more and more complex requirements. We need to have something like tracing. We need to understand how long these requests to the other service are taking. Routing is a big one when you start to think not just routing in terms of, oh, I need to send it to that service, but that service might consist of multiple end points. And then those end points have different characteristics. One is more loaded than the other. One is closer than the other. One just got unhealthy, and I need to make sure I don't send traffic to it. 

And then you start to think about other things, such as security. And I need to encrypt traffic that's going. Or, I want to trust traffic that is going between these two services. So then you start to get into the idea of mutual TLS, or just TLS. I need to be able to set policies on which services are even allowed to call each other. Service A isn't even allowed to call service B. And then how far into the stack do I want to make my networking layer so aware of the actual application that I say, I don't want service A to call this specific path on service B? 

Now, consider all that logic and imagine it didn't exist in that thing and had to live in your code. Eventually, if your code was 100 lines, you'd be giving it another 500 just for this little piece of logic. Yeah, routing is a big one, but there's also policy enforcement. There's automation. There's being able to just handle all that logic in one place versus trying to inject it into all these different places in your code. 

BRIAN: Cool. And so this is an existing pattern that's working well for a lot of folks that are running distributed systems that are fairly microservice oriented. You mentioned there's multiples of these. So why not just use those? 

STEWART: Yeah. So there's plenty of different proxies out there that you could use. The Envoy proxy is just one example. It's an example of a proxy that works really well with Traffic Director, which is primarily why I mention it here. But there's plenty of other proxies. You might have heard of Nginx or HA Proxy. All of these are fundamentally doing the same thing that John described, which is receiving requests, processing them, passing them on to the right thing. I'm just talking about Envoy because there's something really special about Envoy, too. 

And what Envoy introduced-- and we'll touch on this very lightly, and I think we'll come back to it-- is not only is it a really well written and designed proxy, but it also introduced something that I think is even more powerful, which is something called the xDS APIs. And X is just a variable. And we won't go into the details of what these APIs do. But they're basically a collection of APIs that a service can use to configure a proxy. 

So think of it like this. I've got an Envoy proxy. It needs to do all kinds of things. Well, I need to tell it how to do those things. One way to do that might be I write a configuration file, a YAML, and I send it to the proxy. And that works when you have one proxy. But imagine having dozens, or hundreds, or thousands of these proxies. And imagine having an environment that is dynamic. 

What I mean by that is-- we talked about service A and service B, service B as this abstract thing. But service B is actually-- there's a machine sitting behind it at an IP address in a port. Maybe you have 10 machines that all represent service B. Maybe you have hundreds or thousands or you're in Kubernetes land, where these are just spinning up and down dynamically. Well, your proxy needs to know about that. And there's no way that you can possibly write up configuration fast enough to keep up with a Kubernetes cluster that's spinning up and down so that that proxy knows about all of those new pods and all of those IP addresses. 

And so the collection of APIs makes it significantly easier for an external service to talk to the proxy and tell the proxy, hey, here's an update that you need to be aware of. Here's a change in the health status. Here's a new rule that John wants to have enforced in that proxy. These xDS APIs are really what I think make Envoy special. 

BRIAN: This is amazing. So let me just try to process this a bit. So this is, let your proxy just talk to the end point that it's responsible for connecting to and figure out how to configure itself to do that correctly. And normally-- when you hear about proxy a while ago, or in my head, still, you think of it as a centralizing factor. But when you say thousands of proxies, why do we have thousands of proxies? 

JOHN: It was always available doing client-side load balancing, or what we call client-side load balancing. It just wasn't very popular back in the day. Again, think about it. If you wanted to do client-side load balancing, you had to push these load balancers all the way so all your clients are going to speak with your service. And that's why we had the concept of the reverse proxy, which is, let's not put it on the client side. Let's put it on the server side. And then everyone will have to speak to it. It can actually speak to whatever application sits behind them. 

BRIAN: So is it fair to say that that architecture was always going to be more efficient, less centralizing? Well, you don't have a single point of failure. But it was harder to configure. And that complexity kind of goes away because they can all be configured easily. 

JOHN: Just like distributed systems, I wouldn't say it's that simple. There's a lot of factors that went into it. I don't know if you want to call it a natural progression or just the way things played out, but at some point these proxies, when they were centralized-- even if you were able to make them dynamic to the extent that they're sitting in managed instance groups or just dynamic servers that are being spun up and down, they still are a central entity that has to handle all of these requests. And then that means you have to build all that logic into them and make sure that they effectively become a single point of failure. 

Now, let's make things simpler. Let's not try to have everyone go through that same path. Let's take those proxies and distribute them and push them out to the actual client side. And because we have this ability, like Stewart was saying, I don't need to necessarily worry about configuring every single one of them anymore. Now I can actually push these dynamic types of configs. It doesn't really matter where they sit. But because I can push them out, I don't have to dedicate hardware to them. And the miniscule overhead that they add to every client is relatively cheaper than having to dedicate a team to manage just them centrally and to have them maintained centrally and worry about them centrally. So I wouldn't say it's a better approach, it just fits this model better. It's very hard to take a stand on what's better and worse. But in this specific case, say, yeah, it makes more sense to push them out, because then that distributed nature of communications becomes a lot cleaner. 

MARK: So you've got these distributed proxies that are also extremely dynamic because they need to be able to be kept up to date at all times with the new information. You mentioned the APIs earlier. But how are you actually going to send the new configuration to these proxies? 

STEWART: That's the thing I left wide open. And that's where something like Traffic Director comes into the picture. So I want to recap where we are, because we went from a world in which you had one massive application that became bigger and bigger over time to lots and lots of smaller applications, microservices. Those all needed to talk to each other. You had maybe a proxy that sits in between multiple different services. They all use it. You move that proxy, actually, much closer to the client. 

So you have this thing called a sidecar, for example, where you have each of your different client instances. So service A has a bunch of different client instances. They each get their own proxy. Service B-- each of those instances get their own proxies. Service C-- et cetera, et cetera, et cetera. You make that model sufficiently big to, now, where you have hundreds or thousands of different instances for all kinds of different services talking to each other over the network, each with their own private proxy doing client-side load balancing, applying configuration. Those all need to be configured. 

Well, how do you configure that, then? You have the Envoy proxy. The Envoy proxy brings these great configuration APIs so that it looks like this-- a new instance of service A spins up. It's a new client instance. It's got its own Envoy proxy. That Envoy proxy, when it comes to life, it connects to an external service like Traffic Director and says, hey, I'm a proxy. Please send me some configuration. Traffic Director looks at that proxy, looks at the request, and says, oh, here's what you need to know about the world. Here is what I know about all of the different back ends. Here are the policies that you should enforce. Here is how you handle your service-to-service communications. 

And now Traffic Director is this thing that just sits within GCP. It's a managed product, so you don't need to worry about installing it, updating it, any of that stuff. You tell Traffic Director, hey, here's the world the way I want my services to see it. Here are the different services that you want to keep track of and do health checking on and the different machines that need to be up so that my clients can call on them. Traffic Director then takes all of that information in that you've provided or that GCP provides or that your infrastructure provides, merges that configuration, sends it out to all of your proxies. 

And now your proxies can go and make the magic happen. Your distributed system that consists of hundreds or thousands of different services now talk to each other using this centrally managed information and policies that Traffic Director pushes and keeps in sync on all of your proxies. That's Traffic Director at it's most stripped down, mechanical-- how does it actually work? 

MARK: Now, one of the things we talked about earlier was, of course, the data plane. And so one of the terms we didn't define was control plane. Where does that fit into this whole picture that we've been painting? 

STEWART: Yeah. I'm so used to trying not to go too heavy on the jargon that I didn't even mentioned the jargon there. So in this case, the Envoy proxies would be your data plane. They're responsible for carrying out your data plane functions. They connect to a thing using the xDS APIs. That thing is a control plane. The control plane generates configuration, sends it to your data plane. Your data plane then acts on behalf of your various services. 

MARK: And I think you've done a great job of explaining the breakdown of how we got from monolith to this distributed system and how it works. And so it's clear that Traffic Director sounds like a pretty cool tool. And it being a managed service, of course, is just a nice way of making sure that Google is responsible for keeping it up and those kind of things. But ultimately, whoever is configuring it-- they're responsible for actually putting in the configuration there, outlining that, and understanding what's right for their services. Right? 

STEWART: Yeah. At the end of the day, you're responsible for telling Traffic Director which services exist, which things to monitor, what to health check. All of those things are things that you want a lot of control over, because your application responds to health checks in a very specific way. And so these are things that you do configure. 

But the things that Traffic Director solves for you are things that are much further from just the core outlining of what your services are and how they should talk to each other, what the policies are. What Traffic Director actually does for you, which is really special, is it's a global product, meaning if you're in 10 different regions or multiple regions, it is making sure that all of the state is synced across all of those different regions. That's a really hard problem to actually solve yourself. And that's something that if you are in retail, in banking, in pharmaceuticals, the types of industries that our customers are in, it's not the place where you want to be investing your time-- focusing on how you keep distributed state synced up between different instances of a control plane, just as an example. 

Other similar examples of things that Traffic Director does-- monitoring your infrastructure, having these deep integrations with GCP so that you can see, hey, if your service is on Kubernetes, Traffic Director is just automatically tracking as new pods spin up and down for you. That's something that you could write some logic to figure out yourself, but there's very little value in doing that. 

MARK: And we've been talking about this from a very Kubernetes-centric point of view because, well, it's Kubernetes. But this isn't limited to just Kubernetes services, right? 

STEWART: That's right. 

JOHN: So maybe we can demystify service mesh before we get into Kubernetes and get things even more complex. So service mesh-- if we just take it down to bare bones, just the actual words, what do they mean? It's a mesh of services. Given everything we've been talking about, if you've done any networking in your career you know that a mesh-- usually a full mesh or a partial mesh-- is the ability for different nodes to communicate with each other almost holistically. So every node has a connection to every single other node. 

The beauty of service mesh, or the concept of service mesh, is that we're no longer talking about physical nodes. We're also working at a layer that's a little higher than that, a little more abstract, more virtual, if you would. So when we say service A to service B or X replicas of service A speaking to X replicas of service B, and consider that they can all speak to each other, you start to see that same diagram, that same topology of all these nodes having a mesh between each other. But all the service mesh really is is the ability for these services to communicate with each other. 

Now, the value of the service mesh, considering what we said about Envoy and then Envoy's ability to bring xDS and such, is you're literally creating this layer, this abstracted layer where all of your application logic is becoming more and more oblivious to what that actually looks like. As far as it's concerned, I need to speak to service B, C, and D. I need to make these three calls. That's all it needs to know. 

But under the hood, you realize that we have this underling to the application but overlay to the network, because all the network needs to know is, which IP do you want to talk to? Which port do you want to talk to? This is your protocol. And I'm done. But then these guys come and sit in the middle. And they say, we're going to add this whole level of intelligence right there. We're going to call it a service mesh, because it's the ability to make very smart routing, networking decisions on how these services will actually speak to each other. 

Now, to touch on the point of Traffic Director being global-- and I think this is where it really does-- and to your question, Mark, about not just Kubernetes, I think this is where the value really shines. Imagine you have a service that consists of pods running on Kubernetes and a binary running on a VM, containers running on other VMs. And then imagine that all of these actually live in different places. One's on Google Cloud. One's on prem. One's in your house. Assuming you actually have all the proper plumbing in place so those different areas know how to speak to each other or some other cloud, as well-- as long as you have the interconnectivity there and there's reachability between these different environments, you're effectively creating one overlay network across all of that complex, extremely complex physical, logical network that you've built. And you're abstracting all of that out from the application. 

So I could be speaking to service B or a replica of service B that lives in another cloud, but my code is absolutely oblivious to that. What's amazing about Traffic Director is that it comes in and says, I'm going to tell you exactly which endpoints are the best ones for you to call at this specific time, because it has that global view of your whole network, that whole overlay network. It knows that this specific endpoint's in another cloud. There's high latency there. It might not be healthy. Send it to the other place. Or it might know that this one's in a zone that's a lot closer than the other zone, so send it to this one. All that logic and that global view, and the detachment from needing to be on a specific infrastructure, whether it's Kubernetes or VMs or physical servers or what have you, or maybe even just edge locations-- you now effectively have one network across the board, which simplifies operations, simplifies debugging, simplifies your overall application code and your logic. So you get this-- I hate to say-- single pane of glass view of your environment end to end. 

MARK: I'm loving this part of the conversation. To pull a couple problems out that you're helping solve here-- so one is this ubiquitous service connectivity regardless of where things actually live. And then Stewart mentioned this global replication and distribution of that configuration and state, how this thing works-- it's managed. Those are two key things. What other problems does this help people who are trying to hook up microservices and run them with? 

STEWART: I think it's helpful to think about some of the things that people are trying to do when one service talks to another. I really like what John said about what's actually happening even further under the hood, which is-- at the end of the day, you just have a bunch of boxes sitting around that look at packets and know how to send those packets to different locations. That is the bare bones substrate of this whole thing. 

On top of that, you need to figure out how you actually configure those things and how you make those things work together to actually solve problems and do things that are maybe really hard to do. And so very fundamental things, even like-- imagine a client needs to talk to a service. Let's say it's a service. And it's got multiple different potential servers that are distributed across the world. Why do you distribute them across the world? Well, because sometimes your client might be in a different location, and you want to make sure that the request is handled very quickly. If I have a request that needs to go to a server in Europe, that's going to take me a little bit longer here, from Massachusetts, than if I went to a server that's in New York. So figuring out where that request should go to is one of those things that, yeah, you could write some logic to try and figure that out. But even that's a really non-trivial problem if you think about, your clients can be anywhere. Your servers can be anywhere. 

And so something like Traffic Director looks at, what's the location of the client? What's the location of the server? The client gets the information about all of the different servers, where those servers are located. And based on that, the Envoy proxy can just figure out, oh, that request is coming from here. We're going to send that to this end point, this server, so that we minimize the latency, minimize the costs that-- both from a time perspective and from a monetary perspective-- that you're going to incur when you're sending that request around. 

So one client talks to another server in a globally load balanced way with health checking, with capacity knowledge. All of these things sound really complicated. But you can make them really easy with the type of deployment that we're talking about where you've got your client going through an Envoy proxy that's connected to Traffic Director. That's one example of the types of things that people are trying to solve with Traffic Director. There's plenty more. Things like, based on the parameters of the requests, I want to maybe modify that request. Look at the headers. Based on a specific path that's in that header, I want to send the request to a different service. Traffic management, routing. 

And then there's a whole bunch of additional stuff that we're also working on-- things like security. John mentioned mutual TLS. Well, that's a core use case for service mesh, in which a client proves to the server who the client is. The server proves to the client who the server is. Now the request happens, and it's encrypted. 

Under the hood, a whole bunch of complicated stuff going on-- things that, again, if you're a retailer you don't really want to spend your time and effort trying to figure out. That's why you go for managed offerings. That's why you pick up these solutions. Something like Traffic Director with an Envoy proxy can make that a whole lot easier. 

One of the things that you mentioned, also, about having this focus on Kubernetes-- I think Kubernetes is a great platform. And it actually brought a whole lot of innovations to the industry. One of those, I think, is-- the service mesh pattern is really something that grew up with Kubernetes, because you suddenly had all of these clients and servers, lots and lots of instances that need to talk to each other. And so it was this really obvious breeding ground for this concept. 

But if you remember, when I was talking about the Envoy proxy and how it introduced these xDS APIs and how those are really special-- I think if we talk about those APIs for a second and the Envoy proxy for a second, you start to realize that it doesn't just need to be a Kubernetes thing. That Envoy proxy could live next to a Kubernetes pod. It could live on a virtual machine. It could live-- I don't know. Think of some other place you could run an Envoy proxy. Like, imagine you could run this proxy on something like Cloud Run or a much more restricted environment. As long as it connects to Traffic Director and it connects using these xDS APIs, Traffic Director can send it configuration. 

And so this breaks that idea that service mesh is fundamentally a Kubernetes thing. All of these pieces work in different environments, too. And so you could have a service mesh, or you could even do something that's much simpler than a service mesh like a client-side load balancing. You don't have proxies all over the place. You just have them in a few places. Maybe you have it sitting as a standalone proxy between a client and a server. All of these different deployment patterns are supported in Traffic Director. One way I like to think about it is, Traffic Director literally doesn't care. As long as you connect to it with the xDS APIs, present the right credentials, Traffic Director can start to send you configuration, which enables this whole magical experience of services talking to each other. 

JOHN: Going past just, like you're saying, what else can Traffic Director do, I want to touch a bit on what we've been able to do and help our customers do over the past year or two, thinking of more like around solutions of what we've been able to do for our customers and with our customers. This dynamic world that we're starting to get into, you start to think of buzzwords, new buzzwords coming down the line of, hey, what about self-configuring clouds or self-driving clouds or self-driving networks and automation in my infrastructure? This is one of the enablers that Traffic Director brought to the table, because all of a sudden-- if you've been through any kind of migration from one infrastructure to another, there's always going to be this question of, how am I going to flip the switch? And that's always one of the very big questions, because that's where you expect downtime. 

We've been able to have migrations where you actually use Traffic Director as a smart routing mechanism to say that, hey, my back end is living on prem? Let me start to shift some of that traffic over onto the new deployment that's on GCP. Again, like Stewart said, I can make decisions on what that routing looks like to say, hey, I want to canary it to users that are on Android or users that have signed up for a specific dog food or whatever mailing list. So by having this visibility, I can start to make some much smarter decisions about how I'm actually serving my clients for them to not just operate, migrate, as well as adapt to change in their own infrastructure. 

One customer had a lot of traffic coming in from one specific georegion. Spinning up a cluster with all that knowledge just built into it and bootstrapped into it due to this dynamic configuration became that much easier. And the customer last year that went from a single region deployment to a dual region deployment-- they were in Americas. They moved to Europe and APAC. And they were able to just take this stack, the way it was designed and developed and managed-- all the networking is managed by Traffic Director, configured by Traffic Director. And they just take these pods of deployment, or collections of deployment of infrastructure, and they spin them up in different geos, and their system just works. And now they're able to get closer to their client in a matter of minutes or hours at most. 

So that brought a lot of value for them, because they invested in building this once and then spreading it out. It's not just-- the features are great. But then, let's take these features and actually see how customers can benefit from them. And this is-- this might be something that customers would also be very interested in learning about. How does this help me beyond just service mesh? And this is one of the reasons why-- we've had this discussion so many times-- service mesh is great. And it's a buzz word. And we can demystify that. But there are much bigger solutions around that Traffic Director really has enabled, that-- had I wanted to do the same thing with that same customer without Traffic Director, I'd probably be still working on the solution until today. 

MARK: That's amazing. I love the practical, pragmatic "what we get out of it" stuff. So if somebody is inspired about this, where do they go next to learn more about it or to get started? 

STEWART: So there's a couple of things I would point people to. One of them is, I just did, with Kelsey Hightower, a Next talk-- we switched to a more virtual Next On Air format this year. So if you go on the Next On Air website, look for NET-- N-E-T-- 206, "Build an Enterprise-Grade Service Mesh with Traffic Director." That's going to talk you through a lot of the stuff that we just went through, but with some more visuals, with a couple more examples, with some real-world examples of what customers are actually doing, and some new and upcoming stuff that even right now is not fully released just yet. So it will give you a nice peek into what's actually going on. 

But then, beyond that, the docs for Traffic Director on the cloud.google.com site will have set up guides for how you set this up with Compute Engine, with virtual machines, Kubernetes Engine, even for a new thing that we just released called proxy list gRPC. And what I mean here-- I'm not going to get into in too much depth, but those xDS APIs? gRPC now can also understand those xDS APIs. And so you could have a gRPC client that just calls into Traffic Director, gets configuration, again, knows about your network, and can deliver a lot of those exact same capabilities as an Envoy proxy you could. Just hammering home the idea that Traffic Director really does not care who you are, what you are, where you are as long as you're connecting with those APIs. 

So check out the Next talk. Check out of the set up guides. And thanks so much again for having us on the talk. 

MARK: Absolutely. We'll make sure to include all those links in the show notes, as well, for people who want to check them out. And we'll probably need to have a follow-up episode with gRPC and xDS. I feel like we did a good job at describing a lot of things, and then maybe we added more. So maybe it'll be a good chance to come back. But John, Stewart, thank you so much for joining us today. 

STEWART: Thanks, guys. 

JOHN: Oh, it's an absolute pleasure. Thanks, guys. 

MARK: We were talking about, before the interview, there's a lot there. There's a lot to unpack. There's a lot to understand and define. And so I was really grateful to have this conversation and help understand those individual pieces and, once again, how they fit together-- because that's the most important part of this. And when you think about building a new system from scratch, especially when you're migrating a monolithic structure, it's really important to understand what these different pieces are. 

BRIAN: And it's really interesting to see this stuff extending both directions from a container-focused workload up to serverless and then down into VMs, as well. So that's pretty exciting. 

MARK: Yeah. It was absolutely a great conversation. So always excited to bring on Googlers and hear more about what they're working on. So with that being said, for our question of the week, I figured we could talk a little bit more about IAM. And of course, I think that leads to the question, what is IAM? 

BRIAN: This sounds like a plant, but I'm in, because-- 

[LAUGHTER] 

--this gets really confusing. 

MARK: I will admit, this is a plant. 

[LAUGHTER] 

[MUSIC PLAYING] 

No hiding that. So IAM stands for Identity and Access Management. And if you use Google Cloud, it's that primary interface for you to basically assign different permissions to users. And the way that's broken down is, you have users who have roles. And roles are made up of a set of permissions. So there's custom roles that you can make, that you can put different permissions in. Or there's built-in roles for the things like, I don't know, Compute Engine admin-- someone who has the administrative privileges on all the Compute Engine resources. 

And of course, we always talk about least privilege. And this is an idea that you don't want to give people too much access, for a variety of reasons-- right in case their account gets compromised or in case they just make a mistake. You want to make sure people only have permissions to what they need. 

BRIAN: Good. I'm glad you're hitting this, because that least permissions thing-- it kind of feels like eating your vegetables or getting enough exercise, where everybody knows this is the right thing to do but in practice-- you look at a project, it's pretty likely that somebody's just got project-level admin on it for a dev project, or something like that. 

MARK: Yeah. It can be tempting to just say, OK, you're project owner, so you can just do this one thing. But they only really need to do that one thing. And then if they do that one thing and you just leave them as project owner, you've got a big security gap there. And so one of the parts that's been cool about this is that there's recommendations built into Google Cloud now to tell you when these permissions are not following least privilege. And so you'll see those right on the IAM page. You'll see a little thing that says, hey, this user has 8,700 permissions, and they've used four recently. And then you're like, well, maybe I need to go back and take a look at that. 

And I believe those same security recommendations are also going to the Recommender Hub, which is on the home page, now. Part of Active Assist, which is currently in beta. But there's a lot of cool stuff there. And you'll see more recommendations around security, networking, and cost stuff. But being able to say, hey, you've got these users. They have these rules. They don't need them. And maybe you should think about changing them up-- I think that's a really important part about it. 

BRIAN: That's really cool, because I think in a lot of organizations we respond to permissions by ticket or demand. Somebody asked for a thing and you just give it, and you move on. So having some way to by default see what the state of things is and look at where things are over permissioned can go a long way to making things better. 

MARK: And with that actually in mind, one of the things I wanted to talk about-- because I planted this topic-- is the IAM policy troubleshooter. Now, I just learned about this. It's a very cool thing. And we'll link to a video in the show notes that walks through it really quickly. But it basically is a tool in the console where you could enter in the resource you want to look at, the user, and the permission. And it'll break down that information and show you why or why not that user has that permission. And it's super, super helpful. It's such a cool tool that I hadn't really played around with until I worked on this video. But I thought it was super important and worth talking about. 

BRIAN: So this tells you which role and what scope they inherited it from, like why, in practice, they actually have the permission to do the thing? That's huge. 

MARK: Or why they don't have that permission. So you were to say, hey, I have this user who wants to be able to delete, maybe, a compute instance-- do they have the permission to do that? Why do they have the permission? What group are they in that's causing that? And you need a lot of permissions to use the IAM policy troubleshooter effectively. But if you have those permissions, it's such a cool resource to be able to look that up. And I think it helps you really define those boundaries of least privilege, because now you can actually say, well, this person has this permission or doesn't have it. This is why. And these are the things I can change. 

BRIAN: That's super cool. And then I imagine that helps you really build and evolve the custom roles that match how your organization sees access and which lines it splits it. 

MARK: Yeah. All of these tools really come together to give you a really good idea of your security in the cloud and all the different things you can configure to make sure that only the right people have access to only the right things. So, yeah, obvious plant, but hopefully a good tip for people who are looking into, how do I manage my security? 

So Brian, obviously you've done a lot of work with the "Talks at DevRel" stuff, and there's a bunch of links in the description for that. What else are you working on? 

BRIAN: Yeah. So that's been the main thing last week. And this week, I'm hoping to get back into digging into Terraform and Compute Engine and using them together. 

MARK: Super exciting. I love Terraform. And I think the last time we talked about this we had teased that there was a video upcoming. So maybe we'll go and find it and put it in the show notes-- the immutable infrastructure one. 

Well, of course, thank you all for listening. And Brian, thank you for joining. Hope you all learned something cool. And we'll see you next week. 

BRIAN: Silent outro music. 

[MUSIC PLAYING] 

STEWART: Do I have some way to opportunistically mute myself in case I need to clear my throat? 

MARK: Yeah. It depends on what kind of clear throat thing you have, because some people have the [EXTENSIVE THROAT CLEARING] kind of interrupting clear throat. Or you can be very polite and just do the [BRIEF THROAT CLEARING] kind of a clear throat. So. 

[LAUGHTER]