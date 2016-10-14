+++
audioDuration = "00:37:40"
audioFile = "Google.Cloud.Platform.Podcast.Episode.44.mp3"
audioSize = 54278237
categories = ["Cloud Endpoints", "REST", "gRPC", "Open API"]
date = "2016-09-21T01:07:49Z"
description = "Google Cloud Endpoints has recently been rereleased and Dan Ciruli and Sep Ebrahimzadeh join us this episode to tell us everything there is to know about it."
draft = false
episodeNumber = 44
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Cloud Endpoints with Dan Ciruli and Sepehr Ebrahimzadeh"
image="/images/post/endpoints-architecture.png"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/PxUAGoHTzRV"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/53tsl9/episode_44_cloud_endpoints_with_dan_ciruli_and/"
+++

[Google Cloud Endpoints](https://cloud.google.com/endpoints) has recently been
rereleased and [Dan Ciruli](https://twitter.com/danciruli) and
[Sep Ebrahimzadeh](https://twitter.com/sepehreb) join us this episode to tell
your cohosts [Mark](https://twitter.com/neurotic) and [Francesc](https://twitter.com/francesc)
everything there is to know about it.

<!--more-->

##### About Dan

Dan Ciruli is a product manager at Google who works on Cloud Endpoints and
API infrastructure. He used to play a lot of ultimate when he had knees and
write a lot of software when he had time. He’ll try to speak Spanish to you
if you give him a chance.

##### About Sepehr

Sepehr (Sep) Ebrahimzadeh is a Technical Lead software engineer at Google
who works on Cloud Endpoints and API infrastructure. Jack of all trades,
master of none! Sepehr is passionate about APIs and Cloud Computing. He has
previously contributed to Google's Compute Engine and Deployment Manager
products as well as Amazon's EC2.

##### Cool things of the week

- Apache Kafka for GCP users: connectors for Pub/Sub, Dataflow and BigQuery [Big Data blog](https://cloud.google.com/blog/big-data/2016/09/apache-kafka-for-gcp-users-connectors-for-pubsub-dataflow-and-bigquery)

##### Interview

- Google Cloud Endpoints [homepage](https://cloud.google.com/endpoints)
- Google Cloud Endpoints [docs](https://cloud.google.com/endpoints/docs/about-cloud-endpoints)
- Open API Initiative [openapis.org](https://openapis.org/)
- Google Service Management [docs](https://cloud.google.com/service-management/overview)
- Google Service Control [docs](https://cloud.google.com/service-control/overview)

<div style="text-align: center">
  <img src="/images/post/endpoints-architecture.png">
</div>

- gRPC gateway: gRPC to JSON proxy generator [GitHub](https://github.com/grpc-ecosystem/grpc-gateway)
- Authentication with [GitKit](https://developers.google.com/identity/toolkit/), [Firebase Auth](https://firebase.google.com/docs/auth/), [Auth0](https://auth0.com/)
- [NGINX](https://nginx.org/en/)

##### Question of the week

Access the Google Cloud Metadata service from App Engine with the Google Compute API

- [REST](https://cloud.google.com/compute/docs/reference/latest/projects/get)
- [Go](https://godoc.org/cloud.google.com/go/compute/metadata)
- [Java](http://googlecloudplatform.github.io/google-cloud-java/0.3.0/apidocs/com/google/cloud/compute/Metadata.html)
- [Python](https://developers.google.com/resources/api-libraries/documentation/compute/v1/python/latest/compute_v1.projects.html)

{{< transcript "FRANCESC: Hello, and welcome to episode number 44 of the weekly "Google Cloud Platform" podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark." >}}
MARK: Hey, Francesc. How are you doing today? 

FRANCESC: Very happy to have you back. How was Strange Loop? 

MARK: Strange Loop was fantastic. That is definitely one of my favorite conferences of the year. 

FRANCESC: I'm very jealous of the T-shirt you're wearing right now. I think we should tweet a picture of that because that's pretty amazing. 

MARK: Yeah, they have a great "Stranger Things" themed Strange Loop T-shirt. It's very well done. 

FRANCESC: Yeah, it is very cool. I kind of want one now. But anyway, so today we're going to be talking with two of our coworkers, Dan Ciruli and Sep Ebrahimzadeh, both working in Google Cloud Endpoints. 

MARK: Yeah, we have a really interesting conversation about what Endpoints is, what it does, why you'd want to use it, how you can use it, not just within Google Cloud, but also across Cloud. It's not really, really cool. 

FRANCESC: Yeah, it is very interesting, especially if you are serving any kind of API, I think that it is worth for you listening to this interview. You're going to learn some stuff and maybe make your life easier. 

MARK: Yeah, I think I actually want to integrate it into some demos that I have now. 

FRANCESC: I'm going to integrate it with some demos that I have. I'm already working on it. And it is actually incredibly nice, especially not having to deal with OAuth2. 

MARK: Yes. 

FRANCESC: Because it is not my thing. Anyway, but then after that, we'll have the Question of the Week. And today we do not have the Cool Things of the Week. We have the Questions of the Week. 

MARK: Yeah. 

FRANCESC: We're going to have two Questions of the Week. One is related to a topic that we covered before in a Question of the Week, so how to access metadata from App Engine. The second one is more about, OK, so I have a bunch of different front ends to my back end. How do I manage this thing make it usable and as simple as possible? But before that, we're going to have the Cool Thing of the Week, which is about a German philosopher? 

MARK: Kafka? 

FRANCESC: I don't know if he's German now, actually. 

MARK: I have no idea. 

FRANCESC: Actually, I think so. Let me check because I'm almost sure-- philosopher. 

MARK: Francesc is looking in the air. So if you're not familiar with Apache Kafka, while Francesc is looking things up, it's a messaging system that is very popular for a lot of people open source. We have Pub/Sub as a managed messaging system here on Google Cloud Platform. But a lot of people do use Kafka in and outside of Google Cloud Platform. 

FRANCESC: And he wrote in German, but he was actually from the Czech Republic, from the Austro-Hungarian Empire. 

MARK: Important information for everyone. 

FRANCESC: Very, very important information. I like important formation. But, yeah, basically, what we are announcing, which I think is really cool, is the fact that if you are a Kafka user, you're going to be able to integrate very well with a bunch of our technologies. So one of the ones that I'm most excited about is the fact that can integrate with Cloud Sub/Pub both ways. So you can send from Sub/Pub to Kafka and back. 

But then, since you have that, there's a bunch of the things that also work. One of them is you can use it as a source for BigQuery. So you can stream into BigQuery using Cloud Pub/Sub. You can also do it now with Kafka. And finally, there's also the possibility of doing the same thing streaming to Apache Beam or Dataflow. Actually, Dataflow and Apache Beam are pretty much the same thing. 

MARK: Yeah, no, I really like this because if you want to put Sub/Pub in your workflow, you can. So you can go Kafka to Pub/Sub and then Sub/Pub to a number of different things, like BigQuery or Dataflow. But if you don't want to have another messaging system within your system, maybe for complexity sake or to make your life easier, you can go straight from Kafka to Dataflow or straight from Kafka to BigQuery, which I think that's really, really cool. 

FRANCESC: Yeah, it is. It is very interesting, especially for those that are already using Kafka and were considering using things like BigQuery for big data analysis and understanding better their business. I think it's a great opportunity. 

MARK: Absolutely. I really, really like it. 

FRANCESC: Yeah. And we'll have links to both the blog post and also all the code, which is on GitHub. So you can go check it out. 

MARK: Absolutely. Cool, well, why don't we go talk to Dan and Sep about Endpoints. 

FRANCESC: Sounds good. Let's do that. 

MARK: Cool. 

FRANCESC: So I'm very excited to welcome Dan Ciruli and Sep Ebrahimzadeh, a product manager and a software engineer to the "Google Cloud Platform" podcast. Hello. How are you doing? 

DAN: Hello. Doing great. 

SEP: I'm doing very well, thank you. 

FRANCESC: Hello. So we're here today to talk a little bit about Cloud Endpoints. But before that, I'd like to know a little bit more about who you are. So could you tell the audience who are you and what do you do at Google? Well, we can start with you, Dan. 

DAN: My name is Dan Ciruli. I'm a product manager on Google Cloud Endpoints and Google's API's infrastructure. I've been here for about three years, and my team not only builds endpoints but builds all the infrastructure that serves all of Google's APIs-- virtually all of Google's APIs. 

FRANCESC: Nice. What about you, Sep? 

SEP: Great. So, I'm Sep Ebrahimzadeh, and I'm a tech lead software engineer. I've been at Google for about 3 and 1/2 years. And I work on Endpoints and the API infrastructure. I previously worked on Compute Engine other Cloud products. I'm very excited to be here chatting with you guys. 

MARK: OK, cool. So Cloud Endpoints recently got re-released or released again or enhanced. It's different. It's new. Tell us what Cloud Endpoints is now. What does it do? 

DAN: Endpoints is-- Cloud Endpoints is Google's API management product. And you're right. There was a previous incarnation. I'm sure we'll get into it a little bit. It used to be a feature of App Engine, and it's now a product on its own right. And Endpoints lets you manage your APIs. And by manage I mean you want to get information from them, know who is using them, how much they're using them. You want to be able to control, authorize, things like that. Google Cloud Endpoints is what lets customers do that on Google Cloud. 

FRANCESC: Cool. So basically, it's going to allow me to provide REST APIs? 

DAN: Well, there's a lot of ways for you to provide REST APIs, right? 

FRANCESC: Yeah. 

DAN: I don't know what your favorite language is. 

FRANCESC: Python, obviously. 

[LAUGHTER] 

DAN: Let's say it was Python. You might want to use a Flask or Django to make a REST API. You might like a language where people don't use frameworks so much to make APIs, and that's OK. What we want to do with Endpoints is control who has access to that API and give you really good monitoring information about who's using that API and how. Is it healthy? 

FRANCESC: OK, so it is not much about serving an API as much as giving like a layer of protection and authentication and stuff like that on top of the REST API. 

DAN: Right, and we do we do have a couple of API frameworks, one in Java, one in Python. Those started as App Engine features. They've now been open sourced and can run anywhere. 

FRANCESC: Nice. 

DAN: Those actually are lightweight frameworks that can help you serve an API. But most people already have a favorite framework that they're using, already have a language of choice. We know that we want to be able to work with anybody, regardless of language and framework. 

MARK: So if I got this right, so if I'm building a REST endpoint and I want like common features, say, like logging or authentication or some other things along those lines, that's the sort of stuff that I'm looking at. So what then are the-- like if you had to give like, I don't know, four or five bullet points for that tooling that I wanted with Endpoints, is it logging? You mentioned authorization. What are those points? 

DAN: So we did a bunch of surveys before we got going with this to find out what our customers needed. And people use APIs in a big variety of situations. Sometimes it's to power their mobile apps. Sometimes it's between micro services. Sometimes it's for their partners to use it. 

But there is a certain core set of features that everybody seemed to need. First of all, it's authentication, right? Whether it's a service that's making a call or it's a user that's holding your mobile app or logged into your website, you need to know on behalf of whom that API call is being made. Second is logging and monitoring. Ops are very important. Status is very important. And you want to be able to know is the API working? Is it working well? And what are latencies? 

Scalability always comes in really huge. Even customers who aren't running at large scale, it actually comes in number one on a their list of requirements. They want to know that if it takes off, if I become the next "Pokemon Go," if I even need 1,000 requests a second, can this do it? And then the last thing is they want to know who's making the call, which developer's making the call. 

Every API call actually represents two entities, right? There's that developer who wrote that code. You want to know that. And you want to know the user who's holding that mobile device. 

FRANCESC: Interesting. So could you talk a little bit more about that? So you talked about authentication and who is doing it. How do you explain that? What are the ways I can do that? 

SEP: Right. So some of the ways that Google's own APIs provide authentication to their consumers are with Google's API keys and OAuth tokens and service-to-service auth. And all of those ways are actually available for Endpoints service producers as well. So if you have your own API and want to put your own mobile app in front of it, you can use the same authentication mechanisms that you would use if that mobile app was calling one of Google's API. 

MARK: Nice. Well, you mentioned previously, Dan, that there was a previous version of Endpoints that works with App Engine. So are there any limitations technologically in terms of how I can do my REST endpoints now, or is that just like a free-for-all? Can I put it anywhere? 

DAN: It's a free-for-all. You can put it anywhere. As you may or may not know, we are members, and we're founding members of the Open API Initiative. And the Open API Initiative is a bunch of people, organizations from around the internet-- SmartBear, who owns the Swagger Project, Apogee, Microsoft, IBM, Capital One. A bunch of different providers came together and said we should all agree on a specification format for an API. And there's a bunch of reasons for that, and maybe I'll get into some of those. 

But this speC-- that used to be called the Swagger spec is now called the OpenAPI speC-- is how you tell us about your API. So I don't care how you develop it. I don't care what language you use. I don't care what framework you use. As long as you can give endpoints, an OpenAPI specification for that API, then Endpoints can manage the API for you. 

MARK: Cool. Well, I'm going to redirect TO Sep because you're being really quiet over there. 

FRANCESC: Sure. 

MARK: But there are frameworks that you said have come out. There's a Java framework and a Python framework. What does that give me, above and beyond the tooling, that sort of like the infrastructure tooling that I have available? 

SEP: Yeah, I want to turn your question around a little bit. I think what you're trying to ask is, why should I use Endpoints? These solutions and the problems that we talked about are not new, and there are many other products in this space that provide logging and monitoring and authentication. Why should I do Endpoints? And we talked about the customer who suddenly has a lot of success with their app and has a lot of users. 

Well, it turns out that need for logging and monitoring and authentication happens very quickly. As soon as you get a couple hundred, a few thousand users, it turns out your users will care a lot about whether your app is up and running or not on and whether your APIs are up and running or not. And at that point, it's a little too late to go spend a couple of weeks learning about a logging service and a monitoring service and then a separate authentication framework. 

What Endpoints does is it packages all of those API management features into one solution. And it tries to reduce the amount of work that the developer has to do in order to integrate with each one of these features one-by-one by aggregating all of them and say, you focus on your core competency. Pick any framework you like. Pick any language you like. And build your back end APIs. 

What we will do is we will provide you all of these features. And all you have to do in order to take advantage of them is provide an OpenAPI specification for your API, right? So what is it that you get from the framework specifically? The frameworks allow you to annotate your code and generate that API specification from it. And then you can choose to use the API management features or just use that OpenAPI specification to generate clients in different languages that can call your API or take advantage of other features, like web UIs that let you explore your API. Does that answer your question? 

MARK: Yeah, I think so. It sounds like basically the frameworks make it easier to come up with that Swagger or OpenAPI spec rather than trying to write it by hand, for example. Would that be correct? 

SEP: Yes. 

FRANCESC: Cool. So the way you explained it I think it's very interesting because it really sounds like there's basically a bundle of features that are opinionated. And it makes your life easier as a developer. It really sounds like App Engine to me. And App Engine also comes with some constraints, right? What are the constraints other than the fact that you need to use an OpenAPI or a  Swagger spec for Endpoints? Is there anything else that we should know? 

SEP: I would redirect that to Dan, I think. 

DAN: Yeah, no, I don't think so. In some ways, our frameworks are opinionated. But I would say that the use of the OpenAPI spec is in a sense to avoid opinionation if that's a word. We want you to be able to choose your back end. And by the way, Cloud Endpoints-- I'm surprised we got this far into the podcast before I mentioned it, bad product manager-- runs on App Engine. 

But you can also use it from Compute Engine. You can use it from Container Engine. You can use it from wherever. The proxy that performs the API management features is designed to be containerized and deployed anywhere. So one of the big requests we had from existing people who were using our frameworks was they wanted to move to App Engine flexible environments. They wanted to move to Container Engine. Now they can do that. 

FRANCESC: Very nice. So could it work also on App Engine with other frameworks other then Java and Python? 

DAN: That's a fantastic question. And the answer is not yet, but we're working on that. We're working with-- we need some work from the App Engine team. We need some work from our networking team as well. But we would love you to be able to pick your own favorite framework and run that on App Engine. But that's going to take a coordinated effort. But we'd love for that to happen. 

MARK: Is that a restriction that's specific to App Engine Standard or App Engine Standard and Flexible? 

DAN: Flexible, you can do anything in Flexible. 

MARK: OK, so Flexible's fine. Cool. 

FRANCESC: So it is just like. For instance, if you have an App Engine app running Go on Standard environment, for now it could not work. But you could use Flexible, and it could good work. 

DAN: That's absolutely right. In fact, that's why they call it Flexible because it's indeed-- 

FRANCESC: It's more flexible. That is actually-- 

SEP: Among other reasons. 

DAN: That's a little known fact. 

FRANCESC: Great naming right there. 

MARK: So we've talked a lot about REST APIs here. But as many people who listen to the podcast know, we're huge fans of gRPC. Can I use this with gRPC, Sep? 

SEP: Yes, you can, actually. Our gRPC support is coming very shortly. It is currently in the alpha stages. And our customers can sign up to use that. And there are advantages to using gRPC, and there are advantages to using JSON REST. So you'll have to see which one is the right fit for your application. 

DAN: I was actually really pleasantly surprised at how quickly we got that question from our alpha participants and how readily they adopted it. It's sometimes a little bit hard to gauge the success of an open source project, gRPC in particular. We don't know how many people are using gRPC. 

It's more than I had thought. And, yeah, we want that same feature set because whether your API's talking REST or not, you still want logging and monitoring. You still need authentication. You still need API keys. So you want that same dashboard regardless of what that protocol is, right? 

MARK: That's really cool. Now I'm actually quite curious since gRPC is kind of an HTTP/2 binary spec like [? Protos ?] come in and out. Do you get any introspection into like the data going in and out or anything like that? Do you get any cool tools that way? 

DAN: You don't right now. In fact, in either, whether your using REST JSON or gRPC, we're not introspecting your payload. So we're not looking at that payload in either case. But we can tell you what percentage of your calls are errors per method, what your latencies are like at median, again, per method, which client is making the call. And maybe you realize, hey, our errors went up, but it's all in a particular method, and it's all from only the iOS client. So that lets you tell very quickly, OK, this is probably a client problem with a new release we did. 

FRANCESC: So how do you manage exposing a Swagger and OpenAPI spec when what you are using is gRPC? How does that work? gRPC has a design language. 

DAN: You want to take that, Sep? 

SEP: Sure. So our gRPC customers, inside and outside of Google, are currently using [? Proto ?] to define their API specification. We're currently working on integration with OpenAPI for gRPC services using Swagger extensions, for example, and other options. But internally what we do is we convert the API specifications to the same common format. And the APIs we use for that conversion and exposing the API specification have also been published. So if you're curious, you can take a look at them, and these would be under our Service Management API set. 

DAN: Yeah, and we can also make a-- we'll put in the Resources section a link to the GitHub project. So we have this thing called the Google API Compiler that can take an OpenAPI specification or a [? Proto ?] and a YAML that together describe how to manage a gRPC API. They compile them to this thing we call a normalized service config, and that's actually the format that all our downstream tools take. 

FRANCESC: Nice. 

DAN: So one thing we would like to see, and as members of the Open API Initiative, we are working with, could there be a single canonical representation of an API, regardless of whether it's HTTP, JSON, and HTTP11 or [? Proto ?] and HTTP/2. 

So as we work with that committee, the OpenAPI technical committee, we'd like to see if there could be a single representation. But for now, it's either an OpenAPI spec or a [? Proto ?] and  a YAML. 

MARK: That's really cool. Now, I'm just thinking about how we were talking about the gRPC gateway that'll switch a gRPC call into an HTTP call. So then you can put Endpoints on top of both. 

DAN: Right. 

MARK: And that's pretty powerful. That's pretty cool. 

DAN: And then certainly, we're doing that internally at Google. A lot of our APIs now are serving both a gRPC surface as well as a JSON surface. And we'll have that for sure. 

FRANCESC: Yeah, we had Brandon Philips last week talking about how they use gRPC at CoreOS. And they also mentioned that they were using the gRPC gateway, which was very nice to hear. 

DAN: Obviously, I know that because I listen every week. 

FRANCESC: As you should. 

[LAUGHTER] 

SEP: Yeah, the nice thing, as you mentioned, is that you write your back end, and it typically handles either gRPC or REST. But once you use Endpoints and have that extensible server proxy in front of your back end, you can transport back and forth. And so your clients are free to use whichever suits their needs better. 

DAN: And we do want to work with the standards committee on making sure that it's a canonical transformation, that you are describing completely with either one of those documents what your API surface is. 

FRANCESC: Cool. I had a question regarding one of my least favorite topics, which is OAuth2. What other kind of authentications do you have? You talked about one of my favorite ones, which is API keys, because they're super easy to use. Do you have any other options? 

SEP: Yeah, so we do support gitkits, or Firebase Auth, as it's called now. We support other third-party authentication providers, like Auth0. Am I missing any others, Dan? 

DAN: No, I think those are the important ones. And both those, Firebase Auth and Auth0, are used by mobile developers, especially who want their users to log in, say, with Facebook or with username and password or your Twitter login or your GitHub login. It doesn't matter. They have integrations with those. 

So your end user, maybe they just log in with Facebook. Both those solutions will generate a token, a JSON web token, that is passed across. Endpoints can validate it and say, yes, this really was generated by your client. It's an auth token. It's valid, and here's your user ID out of it. 

MARK: So you've got options there. So if you've got something like mobile clients, and you want like that particular user to be logging in, and then also if you're doing maybe like service-to-service, you've got those options, too. 

DAN: Right. And that's one of the interesting things we saw that many of our customers are actually doing two types of auth. They've got an external-facing service that is validating a user-generated auth token, say, the user logged in with Facebook. But then that's, in turn, calling microservices. And so they're using Endpoints on those microservices as well, and those are taking service-to-service. So they're validating an auth token that was created in one of their other services. 

FRANCESC: Yeah, and at least from the point of view of the client calling the server, having things like Firebase Auth is so much better just because you don't need to handle the Auth2 dance by yourself, and that is a huge thing. I don't know a single developer that is happy to write that part of the code, ever. 

DAN: Right. No one wants to do that. That's right. 

FRANCESC: [CHUCKLING] Yeah. 

MARK: So both of you have actually mentioned this thing called an extensible server proxy or something along those lines. Does one of you want to tell us what that is? And why is it extensible, and why is it a proxy? Like what does it do? 

SEP: [CHUCKLING]. Sure. I can tackle that. So as I mentioned, we want the developers to be free to choose any language, any framework that they want and build and host their APIs anywhere. So what we're providing is this extensible server proxy, which is an Nginx-based web server that sits in front of their applications. 

It's extensible because currently it provides features like authentication, monitoring, and logging. In the future, we will be adding other features to it that our API management customers are looking for. And it's also extensible in the sense that, as you know, Nginx is an open source project. And we are working towards open sourcing the proxy as well in order to have the open source community be able to take it and add other features that they want. 

DAN: One interesting thing about the way Endpoints is architected that's different than virtually everybody, certainly every other cloud provider's solution, is that our proxy is designed to be containerized. It's not what we think of as a fat shared proxy, where every customer's API calls are going through the same one and then being routed to your back end. Rather this is a thin container that gets deployed alongside with your back end. 

Internally, at Google, we made a switch from a shared proxy to what we call a distributed or server local proxy about two years ago. We did it for performance reasons. It reduces by an order of magnitude the amount of latency introduced at the proxy. It reduces a network hop. And it's and it's much more scalable. 

SEP: Yeah, the other nice thing about it is that decoupling. If you have multiple APIs or multiple micro services talking to each other, you can update the proxy sitting in front of one of them without affecting the others. 

FRANCESC: That's a very good point. So just to make sure I'm understanding this, that means that rather than having that exposing Cloud Endpoint IP or people go always there and then be handed-- there may be a load balancer, and then be handed a bunch of machines, what you're saying is that you could still have basically the same architecture, where you're exposing an IP from your load balancer. And then when it gets to every single machine, those machines are running a proxy. 

DAN: That's right. Think of it as just another container running on those machines. And if you're using, say, GKE or App Engine Flex, we make it trivial. With App Engine Flex, that container just pops up. 

FRANCESC: Yeah, it's just there. 

DAN: We see that there's an API as part of your app, and so we spin it up. We wire the traffic through it. And so you really don't have to do anything. If you're using GKE, you just say, throw this container here. And as your app scales, and, say, you go from serving 10 requests a second to serving 1,000 requests a second, and you scale at that back end, each one that comes up, a server local proxy comes up with it. 

FRANCESC: Nice. 

SEP: I just want to clarify, though,  that even though we're big fans of containers and use them widely within Google, and we're big fans of the Docker project, you don't actually have to use containers. They make your life a lot easier. But if you want to just deploy your code on a raw [? GCEVM ?] or a virtual machine somewhere else, you can definitely do that, too. 

DAN: I like that. They make your life easier. I mean, if you like pain, sure, we got pain. 

[LAUGHTER] 

MARK: So Sep, you said something kind of really interesting. But you kind of glanced past it, which is that proxy's open source. 

SEP: Nginx Project, which the proxy is based on, is open source. So we're working on open sourcing this. But there are a lot of challenges open sourcing a very large project. 

DAN: And I would say that the challenges, where there are some teams we're aligning with internally at Google, it's a very interesting area as well as outside. One of the reasons that the projects like gRPC and Kubernetes have done very well is that we actually got partners in there and working with the code before it went to open source, and it makes sure you're in a certain state. And so we're kind of in that process right now. 

There's a lot of people very interested in this project. And we want to make sure that we don't have to make too big of changes after going out with it. so we hope to do something soon. 

MARK: All right. Sweet. 

SEP: And, as Dan mentioned, our tooling and the implementation of the APIs that I mentioned are basically open source right now. It's very important to us to not lock our customers in, to say you have to use Google Cloud, or you have to use Endpoints. We would like these components to be able to stand alone and for the APIs that expose the infrastructure, which is really doing the heavy lifting. 

It's the same infrastructure that's running Google's APIs. You could leverage it to host your APIs and take advantage of the same API management features. So that's what we are really putting out there. And we would like people to be able to look at the proxy code, look at the tooling code that converts and analyzes the OpenAPI specification, and also to be able to extend it, maybe contribute features. 

FRANCESC: So does this mean that since we can run Endpoints basically anywhere? I could run the back end for Google Cloud Endpoints outside of the Google Cloud? 

DAN: Yes. 

FRANCESC: Nice. 

SEP: That is correct. We are not providing documentation and support for doing so yet. But it is work in progress. 

FRANCESC: [CHUCKLING] Yet. Nice. I think that can be very interesting, especially for people considering multi-cloud, the fact that you can-- with the Stackdriver, you can have monitoring in multi-cloud. And now with Cloud Endpoints, you can actually have also that in multi-cloud. That is very cool. 

MARK: Very cool indeed. So we're slowly running out of time, not too bad yet. I'll ask the standard question that we always ask. Is there anything we haven't talked about yet that you want to mention or plug or talk about? Dan, why don't you go first. 

DAN: Well, there is one thing . And I think, because your listeners are really going to wonder why we didn't mention it, if-- 

FRANCESC: I actually heard the name once. 

[LAUGHTER] 

DAN: Yeah, I did say it once. We mentioned it. We did go on a little shopping spree last week and bought a company called Apogee. They are one of the leaders in the API management space. And of course, the reason we haven't spent much time on it, as we told you going in, because the deal has been announced but not yet closed. Regulators on this continent and others prevent us from talking about the roadmap. 

So those of you who are listening and hoping to get the inside scoop here, I can't say anything other than this should make it clear that APIs are a big deal at Google. And we are really excited about our product line. We're excited about the acquisition and excited about the possibilities. 

MARK: So basically what I'm hearing is you're going to come back again, once everything is closed-- 

DAN: 45 days from now. Put it on the calendar. 

MARK: Yeah, we can have a longer discussion. 

FRANCESC: Awesome. That's a deal. 

MARK: Done. Sep, anything from you? 

DAN: I would just like to send a message to myself a few years ago when I was building a couple mobile apps that had a few thousand users. And I suddenly overnight had to overnight start Googling for monitoring services and logging services, and how do I do authentication, and say that if you are building a mobile app, if you are hosting APIs, definitely give Google Cloud Endpoints a try. I think you'll be pleasantly surprised about how easy it is to set it up, and that you set it up once, and you get all the logging, monitoring, authentication features with more features to be added in the future. So, yeah, give it a try. 

DAN: And you get the benefit of the OpenAPI toolchain as well, right? 

SEP: Yeah. 

DAN: So that's documentation generation. It's explorers to play with your API in a web browser. It's client library generation. So there's a whole host of stuff that the open source community is producing that we're helping to produce now that you get as well. 

FRANCESC: Yeah, all the cool things that you've ever heard about Swagger are there. 

DAN: Yeah. 

FRANCESC: That is very nice indeed. 

MARK: Excellent. Well, thank you to both of you for coming on. Really appreciate you taking the time. It's been a really interesting conversation. 

FRANCESC: Yeah, and see you again in 45 days, apparently. 

SEP: Of course. 

DAN: We'll see you then. 

SEP: Thank  you very much, guys. 

MARK: We'lll book you in right now. 

DAN: Thank you. 

MARK: That was a delightful conversation with both Dan and Sep. I really enjoyed learning about Endpoints. I actually hadn't had a chance to look at them too much yet. So it's really nice to come here and do the podcast and hear about stuff that is new and interesting on GCP that I may not know about. 

FRANCESC: Yeah, we get to learn a lot. I had been involved with Google Cloud Endpoints project a little bit from the beginning. But still, I actually did not know that running in multi-cloud was an option and stuff like that. I think it's very interesting. 

MARK: Yeah. I super hope they end up open sourcing some of that stuff. I think that would be really, really awesome. 

FRANCESC: I'm sure they will. 

MARK: Cool. So why don't we get stuck into our Questions of the Week. We have a couple of them. I'm probably going to butcher people's names, but I will try my very best. We had two questions. The first one's from [? Rashan ?] [? Darani? ?] 

FRANCESC: I would say so, [? Rashan Darani. ?] 

MARK: Yeah, OK. Cool. Hey, Rashan. He has a question about project level custom data, or metadata, being able to access it from App Engine. he doesn't seem to be able to do it. And he was like hey, Francesc, can you help me because this doesn't seem to work for me. 

FRANCESC: So, yeah, we answered a question regarding where to store information like variables, environment variables and stuff like that a couple episodes ago. And we mentioned that one of the places was the metadata service that has the benefit that you can actually access it from both Compute Engine, but also a Container Engine, and even App Engine. And so to use it from App Engine, though, the important thing is that rather than targeting the metadata.google.internal URL, that is indeed internal. And it is not accessible from App Engine, unfortunately. 

What you need to do is you need to use the Compute API. So the Compute API is a REST API. And you can use it from anywhere as long as you have the authentication. And the default authentication for App Engine provides that as long as you ask for the Compute scope. And basically what you're going to ask is you're going to ask for the information about the project. 

It is not a metadata thing. It is actually inside of the project resource. You're going to have a bunch of things. And one them is all the metadata variables attached to that project, not only to the instance. So it is something that you can definitely do. It may be a little bit confusing at the beginning if you don't know where to look at it. So I think it was a question that was worth answering here. 

MARK: So basically, rather than trying to access it like you were running a Compute Engine, access it like you're an external service coming in. 

FRANCESC: Yeah. Basically, if it was a mobile or something like that, that's how you could access it, exactly the same way. The good thing is you don't need to really care about authentication because the default authentication from App Engine, it is good enough to access that. 

MARK: Yeah. That makes sense. Cool. 

FRANCESC: And then, yeah, we had another questions from Leonard [? Benoit, ?] or [? Bennett. ?] I don't know. 

MARK: Sounds good. I like it. 

FRANCESC: Everybody that sends emails has-- 

MARK: An interesting name. 

FRANCESC: --names that are hard to pronounce, which is awesome. Mine is not easy either, so yeah. So Leonard asks, OK, so we love Google Cloud Platform. That is good [INAUDIBLE] feature. And they have an application which they're running the back end on Google Cloud Platform. 

But then they have front ends which are an Android app and iOS app and then a browser web interface. And the problem is like, OK, we don't want to write the code for those applications over and over for every single time we have a little change, have to update all our clients. So how can we make this better to reuse more code, basically? And I think that you may know about this. 

MARK: So we might talk about it a little bit today, which I think is really cool. So, yeah, if you want to look at Cloud Endpoints, I think that's a really good way to go, particularly because it conforms to the Swagger or the API spec. 

FRANCESC: Yeah, the OpenAPI spec, yeah. 

MARK: And what's cool about that is then you can generate clients for it. And that's where I think you're going to get a lot of benefit from things. 

FRANCESC: Yeah, that is actually basically what Google Cloud Endpoints used to do for App Engine for Java and Python. That was exactly what it did, right? Like it could generate some specification, which was not OpenAPI spec. It was a different one. But from there, you could autogenerate JavaScript code, Objective C code, and Java code. With Swagger or OpenAPI spec you can do the same thing, but with many other languages, which is pretty amazing. 

MARK: Yeah. I'd be interested-- depending on what it is you're doing, you could also go down the gRPC route. But you may have some troubles there on the web front. 

FRANCESC: Yeah. And depending on what you're doing-- actually, no. I was going to say you could use Go, because Go can run both on Android and iOS, but not web. 

MARK: Yeah. 

FRANCESC: Yeah, so. Yeah, probably not a good idea. 

MARK: There is a Go to JavaScript trans compiler. 

FRANCESC: I know. [? GoJS ?] and it is pretty amazing. But still, I think there may be a little too many moving pieces. 

MARK: [CHUCKLING]. You're trying to go too far? 

FRANCESC: Yeah, a little bit too many moving pieces. But, yeah, basically, once you have one OpenAPI spec or a gRPC spec, as you're saying, basically you're going to get the possibility of autogenerating the client libraries you could call. They will be specific for each platform, and that will make your life much easier. 

MARK: Yeah, and definitely listen to the beginning part of this podcast, if you haven't already. 

FRANCESC: Oh, yeah, absolutely. 

MARK: Cool. Well, thank you very much, Francesc, for joining me once again. Are you up to any interesting things lately? 

FRANCESC: Not really. [CHUCKLING]. No, I'm still planning my trip to Brazil. That is my next big trip. I'm also going to be-- at the beginning of October, I will be in New York. And I'm organizing a couple of Go events. And I might be able to run a Google Cloud Platform specific event. But we're still planning on that. 

MARK: Ooh, nice. I'm going to be wandering around. Google's having a Google Play Indie Festival. So if indie game developers on the Saturday after this podcast will come out, so I'll be wandering about that, just chatting to people and saying hello. 

FRANCESC: That sounds fun. Where is that? 

MARK: That's here in San Francisco. 

FRANCESC: Cool. 

MARK: Yeah, I think there's a wait list now. So if you're already registered, yay. And if you're not, you might want to get on the wait list. And then in a couple of weeks-- 

FRANCESC: We'll have a link in the show notes to that. 

MARK: Absolutely. And a couple weeks after that, I'll be at another gaming conference called Siege, where I'll be presenting. 

FRANCESC: Awesome. Sounds like a fun week. 

MARK: Absolutely. 

FRANCESC: Well, yeah, thank you again. Talk to you. And talk to you all next week. 

MARK: See you then. 
{{< /transcript >}}