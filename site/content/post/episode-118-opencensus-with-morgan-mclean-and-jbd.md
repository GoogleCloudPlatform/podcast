+++
audioDuration = "00:30:03"
audioFile = "Google.Cloud.Platform.Podcast.Episode.118.mp3"
audioSize = 4326958
categories = ["Metrics", "Tracing", "Diagnostics"]
date = "2018-03-14"
description = "Product Manager Morgan McLean and Software Engineer JBD discuss the open source project OpenCensus: libraries for metrics and distributed tracing that allows you to export data to multiple backends." 
draft = false
episodeNumber = 118
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "OpenCensus with Morgan McLean and JBD"
linked = true
image="/images/post/opencensus.png"
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/XCpyBQzvAcw"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/84f1ta/episode_118_opencensus_with_morgan_mclean_and_jbd/"
+++

Product Manager Morgan McLean and Software Engineer [JBD](https://twitter.com/rakyll) join [Melanie](https://twitter.com/nyghtowl) and [Mark](https://twitter.com/Neurotic) this week 
to discuss the new open source project [OpenCensus](https://opencensus.io), a single distribution of libraries for metrics and distributed tracing
with minimal overhead that allows you to export data to multiple backends.

<!--more-->

##### Morgan McLean

Morgan McLean is the Product Manager for Tracing, Debugging, and Profiling at Google, including OpenCensus

##### JBD

[JBD](https://twitter.com/rakyll) leads the OpenCensus Go and our integrations with other projects.

##### Cool things of the week

- TensorFlow 1.6 [release](https://github.com/tensorflow/tensorflow/releases/tag/v1.6.0)
- TensorFlow Dev Summit [site](https://www.tensorflow.org/dev-summit/)
- TensorFlow Object Detection on iOS [youtube](https://www.youtube.com/watch?v=0uXMgLIlXoE&index=17&list=PLIivdWyY5sqJxnwJhe3etaK7utrBiPBQ2)
- Introducing Agones: Open-source, multiplayer, dedicated game-server hosting built on Kubernetes [blog](https://cloudplatform.googleblog.com/2018/03/introducing-Agones-open-source-multiplayer-dedicated-game-server-hosting-built-on-Kubernetes.html) [github](https://github.com/GoogleCloudPlatform/agones)
- Optimizing your Cloud Storage performance: Google Cloud Performance Atlas [blog](https://cloudplatform.googleblog.com/2018/03/optimizing-your-Cloud-Storage-performance-Google-Cloud-Performance-Atlas.html) 
- Introducing GCP’s new interactive CLI [blog](https://cloudplatform.googleblog.com/2018/03/introducing-GCPs-new-interactive-CLI.html) [docs](https://cloud.google.com/sdk/gcloud/reference/alpha/interactive)   

##### Interview

- OpenCensus [site](https://opencensus.io) [docs](https://opencensus.io/docs.html)
- Github Organisation [github](https://github.com/census-instrumentation)
- How Google uses Census internally [blog](https://opensource.googleblog.com/2018/03/how-google-uses-opencensus-internally.html)
- The value of OpenCensus [blog](http://opensource.googleblog.com/2018/03/the-value-of-opencensus.html)
- Tracing
  - Zipkin [site](https://zipkin.io)
  - Stackdriver [site](https://cloud.google.com/trace/) [docs](https://cloud.google.com/trace/docs/)
  - jaeger [github](https://github.com/jaegertracing/jaeger)
- Metrics
  - Stackdriver [docs](https://cloud.google.com/monitoring/api/metrics)
  - Prometheus [site](https://prometheus.io)
- Google Summer of Code [site](https://summerofcode.withgoogle.com/organizations/5240153879085056/)

<div style="text-align: center">
  <a href="https://opencensus.io"><img src="/images/post/opencensus.png" style="margin: auto; max-width: 30%;"></a>
   <p style="font-size:0.8em">OpenCensus<p>
</div>

##### Question of the week

I heard there are abilities to natively extend Kubernetes - what does that mean, and also how do I do that?

- Custom Resource Definitions [reference](https://kubernetes.io/docs/concepts/api-extension/custom-resources/) [guide](https://kubernetes.io/docs/tasks/access-kubernetes-api/extend-api-custom-resource-definitions/)
- Sample Controller [github](https://github.com/kubernetes/sample-controller)
- TGIK Custom Controller video series [github](https://github.com/jbeda/tgik-controller) [youtube](https://www.youtube.com/watch?v=8Xo_ghCIOSY)
  [youtube](https://www.youtube.com/watch?v=fWkK-zsFtlU) [youtube](https://www.youtube.com/watch?v=wqhKCiGsf1Y)
- An Introduction to Extending Kubernetes with CustomResourceDefinitions [blog](https://blog.heptio.com/an-introduction-to-extending-kubernetes-with-customresourcedefinitions-76deb675b27a)
- [memcached-operator](https://github.com/ianlewis/memcached-operator)
- [etcd-operator](https://github.com/coreos/etcd-operator)

##### Where can you find us next?

Mark will be at the [Game Developer's Conference | GDC](http://www.gdconf.com/) in March. You can find him via the Google at GDC 2108 [site](https://events.withgoogle.com/google-gdc-2018/).

{{< transcript "MARK: Hi. And welcome to episode number 117 of the weekly \"Google Cloud Platform Podcast.\" I'm Mark Mandel, and I'm here with my colleague, Melanie Warwick. Melanie, how are you doing today?" >}}

MELANIE: Hi, Mark. I'm here. 

MARK: You're here. 

MELANIE: That's the important part. 

MARK: You're not NSF, but you've been a little under the weather unfortunately. 

MELANIE: I know. I have been a little under the weather. 

MARK: But I'm glad to hear you're doing better. 

MELANIE: Thank you. 

MARK: So this week we have a really great episode with Morgan McLean and JBD from OpenCensus coming to talk to us all about this open source project, which is super, super exciting. 

MELANIE: Yes, definitely. As always, we like to kick off our podcast with Cool Things of the Week, and end with a question. And this week's question is, I heard there are abilities to natively extend Kubernetes-- what does that mean, and also, how do I do that? And you know, as always, God only knows where that question might have come from. 

MARK: Maybe me. It might have been from me. 

MELANIE: Maybe you. Maybe you. But maybe not. 

MARK: Maybe. Maybe not. 

MELANIE: So to kick off our Cool Things of the Week, for TensorFlow, they're already at release 1.6, which is impressive, considering I know they just released 1.5 not too long ago. 

MARK: Nice. 

MELANIE: They also have their Dev Summit coming up at the end of this month on March 30, and we'll provide a link in the show notes. And our colleagues, Yufeng and Sara, both came together and did a video recently. I know Yufeng has been doing a number of videos on AI. And they discuss how you can do TensorFlow object detection in iOS, and they basically build a custom object detection mobile app. And so we'll include a link to that video. 

MARK: Awesome. Cool. So this week I'm going to plug one of my own things, which is kind of cool and exciting. I've been working with Ubisoft, and a bunch of Googlers as well, and a bunch of other Ubisoft employees to work on a open source dedicated game server hosting open source project. 

It's called Agones. I will put a link to the GitHub in the show notes as well as the blog post announcing it all. But it is an open source project for running dedicated game servers for, like, real time multiplayer games at scale on top of Kubernetes. 

So some of you may have seen some of my blog posts talking about doing that kind of stuff. This is essentially a productization of that running as an open source project. So I'm pretty excited about it. And we want a lot of people to get involved. So if this sounds interesting to you, please come join us in the GitHub and the Google group and follow us on Twitter. 

MELANIE: You've been working very hard on this. This is definitely a wonderful achievement. 

MARK: I'm pretty excited. 

MELANIE: You should be. You should be. I can't wait to hear when it's applied to something, like what the first game it gets applied to. 

MARK: Yeah, we're doing stuff. We're doing stuff. But yeah, lots of details in the blog post for sure. 

Thirdly, we have a blog post by a fellow developer advocate, Colt McAnlis. He has a bunch of really nice tips and tricks for optimizing performance on Google Cloud Storage, specifically around uploading and downloading files. He has a bunch of best practices for, say, like, smaller files versus bigger files, different command line parameters you can try, all sorts of interesting tips and tricks. 

There's one I particularly like, which is avoiding the sequencing naming bottleneck. He talks actually about how the namings of your files can actually impact the performance of uploading files into Google Cloud Storage and why that actually is. So yeah, if you do a lot of stuff with Google Cloud Storage, you might want to check this out because it's particularly interesting to make sure you can get the biggest bang for your buck. 

MELANIE: Definitely. And last but not least, we also want to mention that GCP has a new interactive CLI. 

MARK: Yeah, this is super cool. I'm excited about this. 

MELANIE: It actually really is. The blog post itself shows the CLI in action and gives you a visual understanding of what it looks like. Pretty neat because, as you type, it does auto complete, and then it's also showing definitions and information on a screen below. It's basically kind of halfing the screen and as you type, you can see what's going on below that. It reminds me a little bit of Jupiter notebooks. 

MARK: Nice. I haven't played with Jupiter notebooks. 

MELANIE: No, I was going to say, it's not exactly the same, but it's similar. 

MARK: Interesting. No, and what I like about this is it works for G Cloud, gsutil, [INAUDIBLE]. And yeah, I'm actually really excited give this a shot. So dCloud alpha interactive is the command to start it. And I'm really, I really want to play with this. This looks really cool. 

MELANIE: Yeah, I know, agree with you. Anything that allows you to use the CLI more effectively makes me happy. All right, well, Mark, I think it might be time for us to go talk with our guests. 

MARK: Let's go do that then. Today I'm very happy to have two people from the OpenCensus team joining us today. We have Morgan McLean. Did I get that right? 

MORGAN MCLEAN: Yes, you did. 

MARK: Excellent. Product Manager for OpenCensus, as well as JBD, Software Engineer, joining us today. How are you both doing? 

JBD: Great. How are you? 

MORGAN MCLEAN: Doing well. 

MARK: Good. Super happy to have you both here. I've been wanting to talk about OpenCensus for ages. Melanie can attest to that. But before we get stuck into that, I'd love to hear more about who you both are and what you do at Google. Morgan, why don't we start with you? 

MORGAN MCLEAN: Sure. I've been at Google for about two years. I'm the Product Manager for Tracing, Debugging, and Profiling. Now this includes some of our internal tools as well as those under the Stackdriver brand. One of the biggest things that I've been PMing in the last few years is OpenCensus, which is why I'm here to talk to you about it. 

MARK: JBD? 

JBD: I'm an engineer working on OpenCensus. I'm actually pretty new in this field, but I have quite significant background in building developer platforms and tools. In the recent years, I was actually focused on diagnostic tools of the Go programming language, and I kind of like, you know, switched to this area, maybe became too passionate too easily because, you know, there are tons of potential and lots of gaps. 

MARK: And you used to sit next to me, but now you don't anymore. 

JBD: I'm sorry about that. 

MELANIE: We've escaped. 

MARK: So, this seems like a good program manager question, which is always fun, but I'll be interested to hear the difference in response. At a high level, what is OpenCensus? What is this project? 

MORGAN: Yeah. So OpenCensus is a single distribution of language-specific libraries that pull data-- so instrumentation and telemetry-- out of your application so you can analyze the app's performance later on. 

So to start with, we're focusing on distributed traces and metrics. So to put that even more succinctly, OpenCensus gives you a really easy way to pull traces and metrics out of your app. 

MELANIE: Who would be somebody that would use this? 

MORGAN: Primarily developers of distributed services. So OpenCensus stems from a lot of our learnings at Google when we wanted to build distributed tracing, distributed metrics in a big way at high scale. But really the sort of benefits of OpenCensus are applicable to anybody building services with some amount of scale. 

MARK: So you used two terms there, "metrics," "tracing." 

MORGAN: Yes. 

MARK: What are those things? What's "metrics?" What's "tracing?" What do those two words mean? 

MORGAN: So, I imagine a lot of listeners to the podcast are familiar with metrics. So traditionally you'll pull things like CPU consumption or memory consumption out of any of the nodes that are hosting your application. And it's a fairly well-solved problem. OpenCensus focuses on app-level metrics. So pulling out things like the number of requests made to your application or the latency of those requests, as well as any other metrics that you want to build into your code in a custom way. Which is a little more difficult to pull out these days. 

The other term, "distributed tracing," is probably one that people are less-familiar with. So for those who don't know, a distributed trace lets you watch a single request as it propagates across all of your services. So, for example, if you have an e-commerce application and a customer comes in and requests the cart service to add an item to their shopping cart, you might get calls to that shopping cart service that then propagate down to maybe a catalog service and others. And the single distributed trace shows you that entire chain of requests that was based off the single action made by the customer. 

And so its really useful for a couple reasons. First, to determine how your system operates, if you're not already familiar with it. And that's at a very basic level. But additionally, each hop along the way shows you the latency. And so when you want to reduce the latency of your application, which becomes really important as it grows, distributed tracing is a great way to do that. 

And finally, if you have an error during that request the trace effectively works like a really long and powerful call stack. Right? So you can actually see what happened that lead to that error. 

MELANIE: And my understanding is that OpenCensus is cloud agnostic. This is used for any kind of distributed system. Is that right? 

JBD: Yeah. Correct. We are not dependent on any cloud provider or metric collection or tracing back end. We collect data from your app or your services or frameworks in a vendor-agnostic way. And then export them to specific back ends so that it can run anywhere, and again, any of the supported back ends. 

MARK: What sort of back ends do you support? 

JBD: Currently the support is dependent on the language because lots of exporters are a work in progress. For Go we support Zipkin, Stackdriver, and [INAUDIBLE] for tracing. Prometheus and Stackdriver monitoring for metric collection. 

MELANIE: Can you also tell us a little more about the work that you do? 

JBD: Yeah. I was actually about to add a little bit to the question of, what do we do in terms of metric collection. As Morgan mentioned, that we are in a general purpose library, so you can collect metrics on the measures you define. It could be related to your business cases, such as the number of transactions if you are a payment provider. Or a number of videos you have processed if you are generating gifs from videos. 

But on top of that we have some canonical metrics for protocols such as HTTP and RPC framework such as latency distribution or requests or response size. And I think that's where OpenCensus is becoming more powerful, because all these frameworks can expose these canonical metrics and you just plug them to your exporter and get them out of the box without doing much. 

MARK: That sounds also like a good reason why you want to use something like OpenCensus rather than just pushing data straight to something like Stack Driver or Prometheus or something like that. Its giving you tools above and beyond what the back ends you provide also give you. 

JBD: They're, again, represented in the back end somehow. But it gives these frameworks to actually instrument without depending on any vendor. And its very powerful. No framework can be opinionated enough to say that I'm just going to be using the Prometheus instrumentation library, and this is the only exposition format I will support. Because, you know, we widely depend on different back ends, and that's where OpenCensus shines, because we're vendor-agnostic. 

MARK: Sweet. So actually, JBD, you're probably a great person to ask for this. As a developer, if I'm sitting down and I'm like, I want to use OpenCensus with maybe an HTTP or, I'm guessing, gRPC, how does that look? What does that process look like? 

JBD: Yeah. We currently support HTTP and gRPC both. And we usually expect users to start with our framework integrations. You pulled a library and you pulled a integration-- actually for Java, gRPC Java is coming with OpenCensus integration out of the box. So you don't have to do any additional thing in order to turn it on. 

And on top of that, you enable some exporters if you want to export the data to the back end. We expect users to start with these framework integrations. And on top of that, if they have any fine-grained measurements depending on their technical requirements or their business cases, we expect them to create custom traces or custom measures and collect more metrics. 

But we expect people to depend on the framework integrations. It gives organizations such an advantage to deploy this widely all across their stack very easily. And it's one of the key things that we want to achieve. OpenCensus or any instrumentation layer is just more useful if you can deploy it all across the stack without much effort. 

MARK: Nice. You mentioned Java and Go. Morgan, what languages are supported? 

MORGAN: Yeah. So right now we have really good support across Java, Go, and C++ for both tracing and stats. And I believe we have tracing support for Ruby, Python and PHP on top of that. Eventually our goal-- and we're already working towards this-- is to get tracing and stat support across Java, Go, C++, .NET, Node.js, Ruby, Python, PHP-- and I'm missing one. Yeah. Now, which one am I missing? 

JBD: Erlang, I think. 

MORGAN: Erlang-- uh, I might still be missing another one. But yeah. 

MELANIE: So since this is an open project, how can people contribute that are not necessarily at Google? Or how can people contribute in general? 

JBD: It's very straightforward. You go to our Github organization, pick the language implementation you want. So we actually have two big rep-- we have language implementations, but on top of that we also have a specs repo where we discuss the concepts and the overall design issues. If you want to contribute to the design issues and the concepts, you go to the specs repo, either start an issue or start a pull request if it's a trivial change that can be handled in the scope of a PR, and contribute it that way. 

If you want to contribute to the language implementations you need to go to the language implementation repo. And again we have contributing docs, so you just follow the steps in contribute. 

MELANIE: Similar to most open source projects, basically. 

JBD: Yeah. Exactly. Yeah. 

MARK: Nice. It also sounds like at Google-- or, at least coming out of Google, and in some other ways-- we've got a lot of projects that seem to be doing related sort of things. We were talking about gRPC just a little bit ago. SEO seem to come to mind as well. Is there overlap there? I mean, you said you support gRPC, but is there overlap from gRPC or SEO with OpenCensus or, like, hooks or anything special going on there? 

MORGAN: Yeah. It's kind of interesting, because-- just to give you a bit of history. OpenCensus is an open source version of something called "Census," which is our instrumentation framework that we use inside of Google. And in many ways gRPC and Envoy are equivalents of the systems that Census, inside of Google, hooks into. 

And so, interestingly, with these other products being open source at the same time, we have a big opportunity to integrate with them and to give external developers the same experience that we have inside of Google, for basically automatic tracing on all requests to propagate through our network. 

And so, to answer your question a little more succinctly than "yes"-- we've already built automatic integration for gRPC. We're building automatic integration for Envoy right now. So Envoy, of course, is the application sidecar component of the Istio project. And then for the Istio Mixer, which is another part of the Istio project, we have some designs that we'll start working on shortly for doing things like tracing aggregation so you can capture traces and configure your back end a little more efficiently. 

MELANIE: Morgan, you were talking a little bit about the history. But how did it go from being Census to OpenCensus? 

MORGAN: Yeah. It's actually a really good question. We have a blog post coming out on this soon. So there were a couple of factors at play. For one, the census team had simply been wanting to open source their work for quite some time. And Google has a long history of open-sourcing projects, even when there's no sort of ulterior motivate to doing it, just because teams inside are encouraged to do that and make things available to the community. 

Next on Stackdriver trace we were developing our own instrumentation libraries. Right? So this effort, in the long run, is going to be replaced with OpenCensus. And the cost of developing these libraries, as any vendor in the industry can attest to, is rather high. And on top of that, the cost of maintaining these libraries. Because you have to have these integrations into various web frameworks across so many languages just continuous to be high. And so you have these very large teams who are just ensuring that your tracing system can work with framework x on language y. And so we were hoping to find a more creative solution to addressing that both for us and our competitors. 

And then finally Google-- there was a need, particularly on the storage teams, to get more instrumentation into cloud client libraries. So particularly services like Bigtable and Spanner. You know, customers do sometimes have performance challenges, and we need a quicker way of determining if that's due to something happening on the customer's end-- maybe they're calling it API in a way that we don't really recommended, a way it's not designed for. Or maybe there's legitimately a problem on the service. 

And those teams in the past have lacked a lot of insight into that. And so resolving some customer performance issues would take days, or even just more hours than they would want. And so getting a way for them to get both trace requests going through from their client library source services and also just to ensure that they can give more instrumentation to customers regardless of whatever tracing or metrics back end that they're using. So not just Stackdriver. 

And so really the decision to release and so heavily fund the OpenCensus project was due to a culmination of these factors. Right? And it was sort of this perfect storm of wanting to open source things that our own tracing product needed better instrumentation, and then teams at Google wanted their customers to gain much more insight into their client libraries. And it worked out really well. 

MELANIE: I could definitely see the value of having that holistic picture and being able to sort of move from being specifically affiliated to a certain product or service, because that way you can drive after that holistic tracing. 

MORGAN: Yeah. Yeah. It would be a much more challenging conversation of our partners, in particular, if we just went to them and were like, yeah, the libraries were created for our own Stackdriver tracing products. You should use them too. Right? Like, a lot of partners wouldn't take that seriously. For very good reasons. Right? And they'd be somewhat suspicious of it. 

But it's interesting-- you know, when we meet with other vendors-- particularly other vendors in this space who are also cloud vendors like ourselves, or at least own large well-used APIs-- they have the exact same challenges. And so it becomes a very straightforward conversation because we say, hey, you can embed this into your client libraries as well. And it turns out-- I suspect, I don't know this for certain, but I suspect-- that the other cloud vendors also want this to work when people are using third-party tracing applications, not just their own. And so the fact that this is an open project and it's going to be gaining a lot more partners in the future is very appealing. 

JBD: As a maintainer of some of these client libraries, we finally realized that there is no point of having no vendor-agnostic solution. And I think within the Go programming language scope we were actually thinking about, maybe we should have some tracing and some sort of instrumentation library. Not just tracing, but metrics in a standard library. 

But it became quite a clear case that this is not just, like, one language. You know? Any organization you go today depend on three or four languages. So you need to be able to provide this all across different languages. And then I solved the actual clear benefit of OpenCensus and just decided-- joined this project rather than doing things in my own corner. 

MARK: Yeah. So it sounds actually like-- the whole vision of it sounds amazing in that, in theory if I set this up in OpenCensus inside my application I could have metrics in tracing that goes all the way through from my custom application code all the way through to the SDKs that I use to integrate with the cloud that I'm on. 

MORGAN: Yeah. 

MARK: And then potentially other clouds or other places around, as you mean, they also-- 

MORGAN: Yep. Or other APIs that you're calling. Yeah. 

MARK: That sounds kind of awesome. 

MELANIE: Yeah, it really does. 

JBD: And there is also additional wide-format standardization effort. So lots of vendors want to also standardize how we propagate the trace IDs around. So if a trace, for example, has been started in somewhere, in AWS X-ray, we will be able to understand it and keep adding more to that trace and so on. So there's a big effort all across the other vendors to finally create this agnostic view so we can actually gather the instrumentation data and utilize it. 

MELANIE: What are additional future enhancements or connections are you working on? 

MORGAN: Yeah. We've got a couple things when we look sort of longer-term, sort of through the end of 2018 for OpenCensus. One is something that we've called-- it's got several different names, but it's sort of retroactive tracing or delayed sampling. But effectively it's making a decision on whether you want to trace requests. Not at the beginning-- so not when the request comes and hits your load balance or your very first service, but later on. 

And what this would enable is selectively-sampling requests that had errors, for example, or requests that have higher latency. This is not a trivial thing to achieve, but we think we can do it. And we want to add it to OpenCensus for all vendors to take advantage of. 

If I look more at sort of the breadth for OpenCensus there is a couple sort of big rocks that we want to focus on. The biggest would be errors and logs. And so we haven't put a ton of thought into this yet, but one of the biggest advantages that we see in our telemetry systems internally inside of Google is being able to link traces to logs or traces to other signals. Basically being able to take the context of a request where something happened and include that on any other signals associated with that request. 

And we've also seen that being very effective with Stackdriver trace, our customers on Google app engine who get this built in. And it's sort of annoyingly-hard to pull this off today when you have separate tracing and logging and error reporting and profiling in other libraries. Right? Because most of them don't look for each other. You might be using libraries from different vendors. But if we bring this in through OpenCensus then it actually starts gaining traction and achieves some amount of popularity, everyone can benefit. 

Even vendors who only offer a single feature, like maybe logging or only tracing, can benefit from that correlation of signals. And their customers can benefit from being able to go from a trace that might be in Zipkin and tie that into some metrics that are in Prometheus or logs stored somewhere else. And that's really one of the big, big things that we want to drive long-term with OpenCensus, is that correlation between signals. 

MARK: That was going to lead into a question I was thinking about as you were saying it which was, you do both tracing and metrics. 

MORGAN: Yeah. 

MARK: Like, why do you put those two things together? 

MORGAN: Part of it's just that those are two areas in the market where we saw a need for some amount of-- perhaps "standardization" is the wrong word-- but some amount of convergence where-- the market, for a long time, hadn't been that well-served by projects that did that. 

But additionally, it's that our visions are much grander. Right? Like, tracing and metrics is just the start. We eventually want to bring in logs, errors, profiling software. You know, any other signals that we can bring in. 

JBD: I want to say that OpenCensus is a cross-stack instrumentation framework. What we mean by cross-stack is, we actually propagate some dimensions. We call them tags. So you can have multiple different perspectives to take a look at our instrumentation data. And these tags are arbitrary things. For example you can ask questions like, give me all the metrics originated at this particular service. Or, give me all the metrics that has been originated by this specific customer. 

So the goal is actually have the tag propagation in place. And then multiple other signal types can benefit from that. 

MARK: Have you had, like, a really good response from the community? 

JBD: I think people are generally extremely interested because the gap is very clear. For most frameworks and library authors there's absolutely no way to instrument. And they can clearly see that this project is filling that gap. So the response has been very positive because we are addressing that. 

MELANIE: Nice. Good to have the positive response already. And you said it was very new, so it was in the last month, right, that this was actually announced? 

JBD: Yeah. We announced it, I think, last month. It's been almost a month, or a couple of weeks. 

MORGAN: Yeah. It was a fairly quiet announcement on the Google Open Source Blog. We're having basically, like, a rolling watch. We're making more and more noise. We're going to more and more conferences, and we're making blog posts, and just sort of trying to ramp up the level of attention that the product gets. 

MARK: And, JBD, you did a talk at Coop Con, didn't you? 

JBD: Actually, we did it together. 

MARK: Oh, together? I saw your photo. 

JBD: That was the first talk we gave about this project. [LAUGHS] And I followed up with other talks. I think there's a lot of work in order to explain the concepts we have, why we solve the things the way we do, before giving them maybe the solution. So we were thinking about also spending some time educating about these concepts. 

And our library implementations are still kind of work in progress. And we sometimes break API, so we want to be in a very stable situation before we start widely talking about this project and recommending it for the general use. 

MELANIE: Great. Is there anything else that you would want to plug around actual talks or other efforts or community involvement that's coming up? 

JBD: We have a bunch of talks coming up. Morgan has a Velocity Conf talk in June. 

MORGAN: Yeah. I think we've got Velocity. We've also made applications for-- and of course we haven't heard back yet-- but I'm pretty confident we're to do most of these. Cube Con, SRE Con, Monitorama. And additionally some of the Google-specific conferences like GCP Next and Google I/O. 

MARK: Basically, wherever good presentations are found. 

[LAUGHTER] 

JBD: Yeah. 

MORGAN: I mean, we're trying to cast a wide net. I'm sure there are conferences that we should be at, but maybe haven't applied to. But we're trying to go to as many as we feasibly can. 

MARK: Wonderful. And if people are keen to either get involved or start playing with OpenCensus, where should they go? 

JBD: They should go on OpenCensus.io and take a look at our GitHub organization. I will put the links to our doc. So check out our specs and language implementations and give it a try. We have enough guidelines about getting started and can just try to use it and give us feedback. That will be very appreciated at this stage. 

MARK: And I'm seeing here as well there's a 2018 Google Summer of Code. 

JBD: That is also true. We have several ideas. So if you're interested, take a look at the list. Contact us. 

MELANIE: Should they also send you examples of how they're using it and things that they're finding with it? 

JBD: Oh yeah. That would be awesome. We actually have seen a bunch of blog posts already from several users. So it would be totally so nice if you can write any guidelines or any tips. If you can write conceptual documentation, that would be also nice. 

I'm also trying to spend some time this week, just so you know, like, write more documentation for the website. We will have soon more conceptual docs and so on. But, you know, any help would be highly-appreciated. 

MELANIE: Great. Well, we really appreciate you both taking your time to come and talk to us and share what OpenCensus is. Is there anything that you still wanted to mention before we close this out? 

MORGAN: Not on my end. 

JBD: Contribute. 

MARK: Contribute. 

MELANIE: Contribute. 

MORGAN: Yeah. Please contribute. 

[LAUGHTER] 

MELANIE: Please contribute. All right. Well, thank you again. And thank you, Mark, for getting this together for us. 

MARK: Yeah. Thank you so much for joining us. We really appreciate you taking the time. 

MORGAN: Yeah. Thanks for having us. 

JBD: Thank you so much. 

MELANIE: Thank you again, Morgan and JBD. It was great to talk to you about OpenCensus. It's always great to hear about what kind of open source projects are going on and how they're being supported. 

So Mark, I think now it's time to ask you the question of the week. I heard that there are abilities to natively extend Kubernetes. What does that mean? And also, how do I do that? 

MARK: Cool. So, yeah. I can now talk more openly about Agnoes and the work I've been doing in that space. I have a whole bunch of questions of the week around Kubernetes, which are really nice. 

MELANIE: It's very helpful. 

MARK: Yeah. I want to give the short answer here, but I'm going to put a lot of resources in the show notes because there's a bunch of stuff around. And some of this can be a little bit hard to find. But it's something I want to talk about. 

So, yeah. So what does it mean to natively extend Kubernetes? Essentially this means that Kubernetes has the ability to essentially add endpoints to the underlying API which then propagates out. So if you want to add your own nouns to Kubernetes, for example-- so, you know how we have deployments and pods and things like that. Kubernetes has these things called "custom resource definitions", which you can configure and install through YAML files or the API to add your own nouns. So if you want to add an Acme or a Foo or a widget or whatever that thing is, that you can then store configuration information against, you can do that inside Kupernetes. And I'm going to add some more links, but you can do that through custom resource definitions. 

And the second part is a set of things that-- probably heard of either controllers or operators. I tend to use the term "controllers" just because that's the one I prefer. But those are the things that are custom pieces of code you can put inside Kubernetes to react to when custom resource definitions or other things-- really anything-- happens inside Kubernetes. 

So you may have seen there's like a Memcached operator. I've seen Redis operators. I've seen a bunch of different ones around there. Agones itself has custom resource definitions for game servers and a controller for that. But that combination combined means that suddenly you can install this stuff into Kubernetes. I can then go Cube CTL, get game server for example with Agones, and it shows up natively inside Kubernetes. I even get code completion too, which is cool. 

If I look at the API points, I can see that extra stuff has been added. All that stuff is native inside Kubernetes. Like, you can take advantage of security. It's all really, really cool stuff, stuff I'm really excited about. But with those two things, those are the two key words that you're looking for there. But I'm going to put a bunch of stuff in the show notes with some video resources, links to articles, all the different Go libraries that usually you can use for all this kind of stuff, too. So if this is stuff that you're interested in, you'll have a nice little resource there. 

MELANIE: Great. Well, I think that about does it for this week, Mark. Is there anywhere where people are going to be able to find you in the near future? 

MARK: Absolutely. So I can talk now about all the things I'm doing at GDC because Agones is out, which is lovely. 

[CHUCKLES] 

MELANIE: Yay. 

MARK: Yeah. So at GDC I'll be at the booth. I'm doing a half-hour talk at the booth. We'll put links to where that is and when that is in the show notes. It's on Wednesday. I can't remember the exact time, unfortunately. I'll be talking at the booth about Agones. 

We'll be doing a sponsored talk as well. Same thing. We'll be doing a "What's New" in Firebase and Google Cloud, so I'll be talking about that. We're also sponsoring the Women in Games' national party, so I'll just be there hanging out. We're doing media expert sessions. I think that's probably about it. Yeah. 

But I'll be all around GDC. If anyone wants to find me, just hit me up on Twitter or email or LinkedIn. 

MELANIE: And that's all next week? 

MARK: That's all next week. Yes. 

MELANIE: Are you so excited? 

MARK: Yes. [LAUGHS] Part of me is really-- I love GDC. Part of me is very excited for it. Because there's so much going on, part of me is always really happy for it to be over. 

MELANIE: [CHUCKLING] Well, we'll talk about what you're going to do to relax once you're done, but I'm glad your big week is ahead of you. 

MARK: Yeah. Are you going anywhere or doing anything? 

MELANIE: No. I'm going to rest. 

MARK: Excellent. Take care of yourself. 

MELANIE: I will. All right. Well, I think that does it for us for this week. 

MARK: Yeah, Melanie, thank you for joining me for yet another episode of the podcast. 

MELANIE: Thank you. 

MARK: And thanks to everyone for listening. And we'll see you all next week. 

[MUSIC PLAYING] 