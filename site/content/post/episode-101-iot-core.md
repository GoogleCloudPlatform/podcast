+++
audioDuration = "00:35:05"
audioFile = "Google.Cloud.Platform.Podcast.Episode.101.mp3"
audioSize = 50813810
categories = ["IoT"]
date = "2017-11-01T01:07:49Z"
description = "It's time to learn everything about Cloud IoT Core from Indranial Chakraborty, Product Manager, and Gabe Weiss, Developer Advocate on IoT."
draft = false
episodeNumber = 101
hosts = ["Francesc Campoy Flores", "Mark Mandel", "Melanie Warrick"]
title = "Cloud IoT Core with Indranil Chakraborty and Gabe Weiss"
image="images/post/iotcore.gif"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/R9wRVMxQn7u"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/7a5fql/episode_101_cloud_iot_core_with_indranil/"
+++

It's time to learn everything about Cloud IoT Core from Indranil Chakraborty, Product Manager, and Gabe Weiss, Developer Advocate on IoT.

Listen to [Mark](https://twitter.com/Neurotic) and
[Francesc](https://twitter.com/francesc) ask all of the questions you had about IoT but didn't
dare to ask.

<!--more-->

##### About Indranil Chakraborty

Indranil is a product manager for Google Cloud Platform and leads product strategy and development for Cloud IoT Core. Previously, he held product management roles at Google Fiber and sales strategy roles for Google AdWords. Indranil holds an MBA from UCLA Anderson.

##### About Gabe Weiss

Gabe works on the Google Cloud Platform team ensuring that developers can make awesome things, both inside and outside of Google. Focused primarily on the Internet of Things, it's his job to be sure IoT devices can play nicely with the GCP ecosystem. That's everything from speaking at conferences, writing example code, running bootcamps, writing technical blogs or just doing some hand holding. Prior to Google he's worked in virtual reality production and distribution, source control, the games industry and professional acting.

##### Cool things of the week

- [Announcing Go 1.8 on App Engine Standard Environment](https://cloudplatform.googleblog.com/2017/10/announcing-Go-1-8-on-App-Engine-Standard-Environment.html)
- [GCP Podcast hits 100 episodes — here are the 10 most popular episodes](https://cloudplatform.googleblog.com/2017/10/GCP-podcast-hits-100-episodes-here-are-the-10-most-popular.html)
- [GCP products described in 4 words or less](https://medium.com/google-cloud/gcp-products-described-in-4-words-or-less-f3056550e595)

##### Interview

- [Cloud IoT Core](https://cloud.google.com/iot-core/)
- [Google Cloud IoT Solutions](https://cloud.google.com/solutions/iot/)
- [Announcing Cloud IoT Core public beta](https://cloudplatform.googleblog.com/2017/09/announcing-Cloud-IoT-Core-public-beta.html)

<div style="text-align: center">
  <img src="/images/post/iotcore.gif" style="margin: auto;">
</div>

##### Question of the week

Francesc says his goodbyes to Google and the Google Cloud Platform Podcast.

- [Thanks and goodbye, Google friends](https://medium.com/@francesc/thanks-and-goodbye-google-friends-3caf770a66dc)

{{< transcript "FRANCESC: Hi, and welcome to Episode Number 101 of the weekly Google Talk Platform Podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark. How are you doing?" >}}

MARK: I am good. I am hanging out in my parents' house in Melbourne, Australia. So it's really nice being back in my home. 

FRANCESC: Nice. Very good, very good. And I am here hanging out in my home here in San Francisco. 

MARK: Excellent. 

FRANCESC: Yeah, and very excited about a really cool episode. We've talked about IoT Core a couple times, but we have not done an episode yet. So, we got two people from-- one from the IoT Core team himself-- itself, Indranil Chakraborty. But, also, we got Gabe Weiss, which is a developer advocate in our team for Cloud that works specifically with IoT and IoT Cores. So, really, really excited about that. 

MARK: Yeah. And then after that, we'll have our question of the week. It's all about Francesc. He wrote a really interesting book. 

FRANCESC: Yes. 

MARK: And so we're going to talk about it. 

FRANCESC: It is about me, as it should always be. But before that, we have cool things of the week. And there's three of them. The first one, I'm going to say it, because it is really, really exciting. We finally got Go 1.8 on App Engine standard environment, which is awesome. And it is now generally available. It had been beta for a little bit. And now it is ready to default, which is awesome. 

If you have never used it, do not worry, because it's, as always, backwards-compatible. So if you wrote something with Go 1.5, you will see it on Go 1.8. But there's new things in Go 1.8 such as, well, context wasn't in Go 1.6, but Go 1.7. But there's many, many, many new things that happened since then that might make you happy, and a happier Gopher. So check it out. Also, everything is faster, as usual, we go. 

MARK: Yeah. Always faster. The second cool thing of the week is, basically, all about us, because we are the most important. 

FRANCESC: As it should be. 

MARK: As it should be. So we wrote a blog post celebrating the fact that we hit 100 episodes. You may have noticed we interviewed Vint Cerf. We may have got a little excited about it, and maybe my voice went up, like, three octaves, when I got excited about it. 

FRANCESC: Oh, my god. 

MARK: Yeah, I did get very excited. So, we wrote a blog post about it. And in that blog post, we, basically, also list the 10 most popular episodes that have been downloaded from the podcast. And there's some good ones in there. Some of my favorites-- Container Engine with Ken Colbert, Kubernetes 1.7. with Tim Hockin, Office of CTO with Clay-- 

FRANCESC: Klaus [INAUDIBLE] 

MARK: Yeah. 

FRANCESC: Klaus [INAUDIBLE] with [INAUDIBLE]. That was amazing. 

MARK: That was amazing. Yeah, so they were all good. So if you are maybe not as familiar with our stuff and you're just getting started with the podcast, you might want to go back and have a look. 

FRANCESC: And the last cool thing of the week is something that is really, really cool. Especially for those that do not know Google Platform that well, and they get confused between what is Cloud Data Lab and Data Prep and Data Studio and all of these things, there's a list done by our dear manager, Greg Wilson. He wrote a really cool cheat sheet, I want to call it. Because you have basically for every single product a description in four words or less. 

And I agree with most of them. Some of them are kind of cheating, but because what he does is just he uses the words that the product stands for. I mean, if you say IoT and you describe it as internet of things, I call that not describing much. But you know, other than that, it's actually really good. 

MARK: No, it is really good. So for example, like cloud IM is Resource Access Control, Virtual Private Cloud is Software Defined Networking. Ooh, he cheats a bit with hyphens. So Cloud Functions is Event-Driven Service Applications. 

But no, it totally is good. And it's also really nice in that not only does it do four-word descriptions, it also shows the three tiers for each of the products as well. So if you're like, what is this thing? And also what can I get for free? It has a column there that shows those for all the products that have free tiers, which is also really nice. 

FRANCESC: I think it'd be awesome thing to give to people at conferences or even to print it as something that you can have in your office if you're using Google Platform a lot. It might help you in conversation with coworkers. 

MARK: Yeah, I think it's going help me, actually. I'm going to read through it. 

FRANCESC: There's actually a very high-res image that you can definitely print into something quite big. It can be a fun thing to have. 

MARK: Put on the wall in your office. 

FRANCESC: Or not. 

MARK: Oh my god, yes. I kind of want to do that. 

FRANCESC: Yep. 

MARK: Excellent. All right. Why don't we go talk to Gabe and Indranil and chat all about cloud IoT Core. 

FRANCESC: I am very excited today to welcome two more people to our podcast to talk about IoT Core. And nonetheless, we've got Indranil Chakraborty, a product manager for IoT Core. Hello Indranil. How are you doing? 

INDRANIL: Hi Francesc. I am doing fine. Thanks for having me here today. 

FRANCESC: Thank you for joining us. And we also have Gabe Weiss. And he's a developer advocate, fellow developer advocate at Google Cloud Platform working also for IoT Core and IoT Stuffs. How are you doing? 

GABE: I'm doing well. How about you? 

FRANCESC: Doing great. Very excited. We're going to be talking about IoT Core. We've mentioned it a couple times during the podcast, but like mostly as a cool thing of the week. And really quick, without getting too much into details. 

So today we're going to have the opportunity to talk a lot about it. But before that, why don't we start a little bit by telling us who you are and what you do here at Google. We can start with you, Indranil. 

INDRANIL: Great. So I'm Indranil Chakraborty, and I'm the product manager for Google Cloud IoT Core. And my job really is to set overall strategy and the vision for all the product, work with customers closely, understand what the needs are, and then work with engineering so that we can build the right product which will add value to our customers. So my job really is to work with customers, engineering, dev rel, marketing, and other cross-functional team so that we're building the right product for the customers. 

FRANCESC: Cool. What about you, Gabe? 

INDRANIL: So I'm the developer advocate for Google Cloud Platform, kind of focusing on not just IoT Core but IoT platform. So I'm really serving the developers that are using the devices out in the world, the connected devices to do bigger better things. So IoT Core specifically is the entryway into the rest of GCP. So I'm here to make sure that the product that Indranil's building with the cross teams really does land with developers to make sure that it's successful with them. And that they can use it to do their things. 

MARK: Cool. All right. So Indranil, you're the PM. So I'm going to ask you the hard question. So 30,000-foot view. What is IoT CORE from a really basic standpoint? 

INDRANIL: Sure. So if you look at Google Cloud Platform, we have what we believe is a state-of-the-art, well-received data analytics and machine learning services today, available for our enterprise customers, our developers, and our partners as well. And what Cloud IoT Core does is it really makes it easy to onboard your IoT devices. Things that are in your factory, oil rig, oil and gas rigs, or other enterprise setting. To easily onboard these devices to Google Cloud so that you can start pushing data from the devices to Google Cloud, and start benefiting from our data analytics and machine learning services. So that's essentially what cloud IoT Core does. It is a fully managed service to securely connect and manage your IoT devices on Google Cloud Platform. 

FRANCESC: Cool. So when you say to securely connect, what I'm expecting is this some secure way to even start the communication. How do you make sure that those devices are those devices you expect? Do you need to install certificates in them? What do you mean by securely communicate? 

INDRANIL: So we deeply care about security of the devices, as well as a data that is being transmitted from the device to Cloud. So first, as you mentioned Francesc, it's really about secure connection of the device to the Cloud. So IoT core supports asymmetric key-based authentication in each individual device. So what that means is you will have a private key, which you will securely store in the device. 

And then you would register a public key from the device based on the private key onto Cloud IoT Core, so when the device makes a connection to Cloud IoT Core, we can verify based on the signature of the device that it sends to the public key to make sure that that device is really what it says it is. And we use a standard JWT token for authentication between the device and IoT Core. So the device will use a private key to sign a JWT token, and it will send a JWT token to IoT Core, and then reuse the JWT token to then verify the signature with our public key that has been registered. So that's in one aspect where we authenticate each device at an individual level. 

And second is, even for a connection we support tier S1.2 and above. So we expect that each device will use TLS 1.2 to make the initial connection to Google Cloud IoT Core over TCP. Anything outside, if it's not TLS, we reject that connection. That's the first step. 

And then further, as that data gets transmitted to Cloud IoT Core, whether it's addressed in the Cloud, or whether it's in transit, the data is always an encrypted form. That's the way we ensure security at the device level during connection, as well as at the data level as well. 

MARK: And also for the TLS connection on the other end, the device will also need to have a root certificate on it to verify on the other side that the device knows it's actually talking to Google. So you can either use Google provided root cert, or when you create your bucket in GCP for your devices-- we call it the registry-- when you create your registry you can specify a third party root certificate if you want to use something else. So that's the other on the device side, to make sure it knows it's talking to Google. 

FRANCESC: Cool. I have a bunch of questions, but the first one is you said JWT token many times. Is that JWT? 

INDRANIL: Yes it is JWT. It's essentially JSON Web Tool. 

MARK: So you covered the security side of it. What's the communication part of it? What does that actually mean? Are they just sending faxes to each other or something? What's the deal? 

GABE: Smoke signal. It's all smoke signal. 

INDRANIL: So as part of Cloud IoT Core we realized that MQTT is a protocol which is pretty standard in the industry. And so we started with a native support for MQTT on Cloud IoT Core. So now with MQTT devices scan, publish, telemetry, even other information on MPGD topic to IoT Core. And IoT Core then aggregates all the data across all the devices, and then pushes it downstream to pop subtopic from where you can zoom and then send it downstream to other services such as BigQuery or Bigtable and such. So really, the communication between device and IoT Core will depend on the protocols. 

If you use MQTT, then you can publish your telemetry on a certain topic, and then we take it from there. If you're using HTTP, we also have support for HTTP, as you know. If you use HTTP then you would do a request response protocol to send your data and telemetry to Cloud IoT Core. 

MARK: And MQTT, is that a bidirectional protocol? Or is it just sending data from the device down to Cloud? 

INDRANIL: I'm glad you brought it up. Yes, MQTT is a bi-directional protocol. It is based on TCP. And the way it works is your devices will publish certain data to a particular topic. 

And Cloud can also published data to a certain topic for the device you subscribe to and get that data. So it is bi-directional. And IoT Core supports bidirectional data between the device and the Cloud over MQTT. 

FRANCESC: Now that we understand a little bit what these product does and like the security part of it, I'm curious about what is the audience of this product? Meaning if I'm building smart bulbs, is this for me? Or if I'm building something like a home hack, where I have something like I have just one little device-- I'm actually trying to work on this, by the way-- something that allows me to open the garage door from my phone. Who is this for? 

INDRANIL: So Cloud IoT Core is really built for scale. So if you think about an enterprise company or a smart parking company, they have thousands and hundreds of thousands of devices installed in different parking lots and on the curbside. And all of these devices and sensors are sending data pretty frequently. So they're being able to connect all those devices to Cloud IoT Core in just a data at scale. 

So IoT Core is really designed to connect massive amount of devices and just a massive scale of data without the customer or the partner or even the developer needing to worry about the infrastructure and provisioning. You just connect your devices, whether you're connecting one or millions of devices or even billions, we will scale internally. We will [INAUDIBLE] data at scale without an issue. So that's what it is really designed and built for. 

Now having said that, we understand that a lot of developers, enterprise and even the commercial developers, they wanted to get their hands dirty. They want to build some quick prototype before they deploy at scale. So we made it easy and simple enough for even the developers who want to jump start their journey on IoT to be able to quickly build some prototype using IoT Core. So we do have a rich set of APIs. 

At the same time, we have a pretty simple user interface for any developer, or for even an operator for that matter, to quickly build some quick prototype to test out the product before they scale. So really, going back to your question, it is designed for scale, but at the same time, we expect a wide spectrum of customers and developers to use it. Developers who are building it for massive scale and for enterprise grade product, at the same time developers who are want to get their hands dirty. They want to build some quick prototype before they graduate to the next level where they deploy full scale devices. 

GABE: Nice. 

FRANCESC: Cool. So Gabe, I'm going to direct this to you, because I know you've been building stuff with IoT Core. What does the development experience look like? 

GABE: I'm pretty new to Google. I just started in May. So one of the hardest ramp-ups I've had is learning all the different pieces of GCP. Learning all the APIs, how to build stuff. 

IoT Core is by far the easiest I've worked with so far, hands down. It's a managed service. So you don't have to stand the thing up. You don't have to start at GCE. 

You don't have to do anything. It's an end point. So what that means is I'm free to sit on my device and implement the three pieces that I need to worry about. 

I need to worry about the JWT authentication. I need to worry about initializing the communication piece. And then I need my sensor data, my telemetry, whatever that ends up being. And that's it. 

I don't have to download any SDKs from Google Cloud. I don't have to implement any funky Cloud stuff. I can just put this message together in MQTT, publish it, and Google handles the rest of it. And I end up with data in my Cloud Pub/Sub topic. 

So from a development standpoint, I have to pick my library of choice. I've worked with Python OGS, there's some C libraries that work with just bare metal. And I just did this last week when I was at the conference in Barcelona. 

It was a 10-minute theater talk where it was bare device, nothing on it. And at the end of 10 minutes, you have your messages in Cloud they can do stuff with. So it's super easy. 

MARK: And you didn't have to install anything specific for IoT Core. I'm assuming you're just putting in some sort of MQTT client on the device that's very standard that you don't have to worry about all those. 

GABE: Yep. That's the three languages I mentioned. So they're just standard libraries for each of them. Paho MQTT is the kind of de facto MQTT library across all of them. 

JWT, there's a Pi JWT for Python. It's one that I was using. So those are the only things you need to install on the device. 

FRANCESC: And I suppose then also that means then that you're not tied to a particular hardware provider or a particular set of IoT device. You can basically run this on anything. 

GABE: On pretty much anything that can talk to the internet. So we've done everything from the lowest level of microcontrollers, the ESP8266 are these little nice Wi-Fi controllers that are super slim, don't do anything other than Wi-Fi. And we've got it to work on those up through Arduino, Pi. And then on some of the industrial-- we've worked with a couple of partners and their devices to get those talking to Core also. 

FRANCESC: Nice. So I'm curious about the developing experience. You say that you have basically Pub/Sub queue, and that you're receiving all the messages from there, which seems relatively easy. I'm imagining that when you receive that in the payload, there's some even identification of what is the origin? What is the device exactly that is sending the data? 

GABE: You don't necessarily, unless you put it in there. Again, you have a record of the device as it's registered in the system. And there's some ID in there, but there wouldn't be any way to like tie a Pub/Sub message back to your device necessarily, unless you added that to the payload, which is best practice. We recommend of course that you do that. 

But the bridge in IoT Core is just a passthrough. So as the messages come into IoT Core, it bundles it up with some metadata. Indranil, correct me if I'm wrong, but I don't think it actually identify the device. 

INDRANIL: So, Pub/Sub has this notion of message attributes, as you guys know. So as part of message attributes, we do put the device ID as part of the message attributes. So when you're consuming that data as a subscriber from Pub/Sub, every message you get, you can read the message that you will send. You can use that to know that this particular message had been sent by the thermostat in your living room, where it says thermostat in your bedroom, for example. So the Pub/Sub message attribute is where we add the device ID. 

FRANCESC: Nice. So once you have that ID, how do you reply to it? What if you want to send a message to a specific device? 

INDRANIL: So there's two things. So one is, for every time a device publishes a message, a telemetry could be a temperature measurement, or could be a pressure measurement to Cloud IoT Core. If IoT Core then could be bridged-- if it's able to publish that message successfully to Pub/Sub, it will send an ack back to the device. So the device that we know that the message that it had sent, the measurement that data that it has sent to IoT Core has been received and acknowledged. So that's one-way communication. 

And then the next is you may want to, as a developer, you may want to send some message back to the device, or some communication, some control command back to the device, or some configuration update back to the device. Part of IoT Core, their APIs, which will allow you to directly send a message to a specific device ID. So you can say, I want to change the temperature setting of the thermostat in the living room. You can specify the device area of the thermostat and send a specific configuration change to that device. 

And the good thing about IoT Core is, with IoT, the connectivity is sort of intimidating. Most of the time it's there, but sometimes because of bandwidth constraint or because of location or whatnot, it's always continuously connected. So IoT Core makes sure that when you send the latest configuration, if the device is not connected, when the device comes back up and connects, it will send the latest configuration to the device. So from application perspective, you build your application, and you're not worried about the upstream connection and data flow between the Cloud and device. IoT Core takes care of it. 

MARK: So serverless is the cool new buzzword. It's either going to be serverless or ML, one or other. I'm looking at diagrams here on the Cloud IoT Core web site, and I see that there's a way to hook in Cloud Functions. Or is Cloud Functions just really useful here? Where does that fit in? 

GABE: Cloud Functions is just super useful. Because with Cloud Functions, you have the hook for Pub/Sub message getting subscribed. So since IoT Core connects direct into Pub/Sub, so everything you published to IoT Core goes into Pub/Sub, your Cloud Functions now can hook into that and do stuff, based on whatever you want it to. So you can use Cloud Functions throughout the day, from Pub/Sub to anywhere you want, store it in a database, send it along to BigQuery or machine learning, all of the stuff that might be overkill for some of the other system GCP. Cloud Function's just a super nice lightweight way to do some of that stuff. 

INDRANIL: In fact, if you think about a simple use case where you're reading the temperature setting from your thermostat, well, then, you're consuming it to Pub/Sub, you can have a Cloud Function which reads the temperature setting. And when it goes above 80 degrees, it can send a message back to the same thermostat to say, turn off the air conditioning. So there's a Cloud Function in conjunction with like, Gabe mentioned, with Pub/Sub topic, can really be used to build a very simple business logic with IoT Core. So I think that that's one area where we do see developers trying out and building simple rules in business logics. 

FRANCESC: I just thought about if this then that. That's basically what you're saying. You're able to build a system that is basically just events and Cloud Functions as the glue. 

GABE: Yep, and stay completely serverless in that fashion. So you don't have to have any of these functions living somewhere. They just live in the Cloud. 

FRANCESC: That's cool. Since you were mentioning use cases, is there any other use case that you've seen lately that was really exciting or was something that you didn't expect when you were designing this product? 

INDRANIL: When we designed the product we always had sort of commercial and enterprise segment in mind. I was personally pretty amazed by some of the applications and use case which customers and partners have been using for. So one example is on ride sharing. This is something which is picking up a lot in UK, NHS, you know, the whole notion of bike sharing in cities. 

And we are seeing a couple of our partners and customers using it so that their bikes are connected to Cloud IoT Core. And they have a mobile app. So the user, as it gets closer to the bike they've sort of been assigned to, it automatically unlocks. And so you can take the bike and start using it. So that is a pretty interesting application, which we're seeing and we using the Cloud IoT Core. 

I talk about smart parking. That's another area where we have a reference customer who's been using this for notifying the drivers about the specific-- the particular parking lot that is open and available in real time. But also as they collect data, they're also using it to provide sort of more traffic information to the city, to, for example, Auckland transport in Sydney City. So we're seeing use case from sort of ride sharing to providing some real-time information. And then as they collect this data, then we're also seeing use cases where they use the data to provide more advanced analytics around traffic management, or even in some cases, predictive maintenance is another area where we're seeing a lot of these use cases in manufacturing, particularly. 

FRANCESC: Yeah, this reminds me a lot of this interview that we're preparing for next week with smart parking, where they talk about how they're using all of these technologies and Google Cloud with Cloud Functions, obviously, to basically make parking smarter. It's very, very exciting. 

MARK: Yeah, Gabe, have you seen anything else that's particularly interesting? 

GABE: There's a lot of stuff. I was talking to one of the partners last week about using IoT telemetry data off of drones to map really hard-to-reach places. And then using the GPS and altitude data off of the devices to help create maps. It was really cool. 

MARK: So plans for the future. I know probably the correct answer is always you know, we can't speak about road maps, but I have to ask. 

FRANCESC: The typical question, we don't speak about road maps, but what about your road map? 

MARK: Is there any new thing on the horizon that you can share with the audience about what they can expect from IoT Core? 

INDRANIL: So again, we can't speak to our road map. But there is one thing I can guarantee is we see the value in IoT Core, and how customers and partners and developers can use this to build really compelling application around smart cities, and oil and gas, and manufacturing. Let me sort of highlight and talk about three things which we are really looking into. 

One is we do want to make it really simple for board developers and our partners to build application on Google Platform, specifically on IoT. That's still our basic principle, and we want to continue doing that. So you would see a lot of features around how can you quickly jumpstart your journey with IoT on the UI side, on the API side. We started with the managed service. We started with MQTT. 

But we want to make it even more simpler. So your overall onboarding experience can become really frictionless for you to get started with any device and any sort of hardware you want to do. So that's one area where we want to continue investing. And we will invest more. And you will see some feature releases in subsequent couple of months. 

The second area really is our partner ecosystem is pretty strong. We have a good number of hardware partners around when you think about Intel, NXP, micro-chip, Marvel, CR Wireless, all these IoT device and hardware partners have agreed and they've built simple libraries so that once you buy those devices as a developer from these partners, you can easily and seamlessly connect to Cloud IoT Core and start building applications. So we're going to continue to build out our partner ecosystem [INAUDIBLE] device set as well as on the application side. So for developer, it makes it even simpler for them to build an end-to-end application. 

Third area is, as I mentioned, we do have a pretty rich set of services for data analytics, time series analysis, machine learning. And what we want to do is make it even more simpler, and sort of more integrated to our overall Google IoT Core and the rest of our IoT platform so that the developers can really start using it without needing to write hundreds of lines of code. So I think those are the three areas where you would see us sort of investing more in near future. 

MARK: Awesome. Gabe, I'll direct this to you. If people want to learn more about IoT Core, learn how to get set up and how to get going, where should they go? 

GABE: Cloud.Google.com/iot-core. 

MARK: That's it. 

GABE: That's it. So there's a beta page. You can view all the docs from there. There's a bunch of kind of quickstart guides and examples already up in a couple of different languages. So everything should be there to get you up and on your feet really quick. 

FRANCESC: And for those people that are lazy like me and like videos, the talk that you gave in Barcelona recently, was that recorded? Is there any video that we might want to check out? 

GABE: Not yet, but I'm planning on recording some soon. 

MARK: Well, if anything comes up in the meantime, we'll put it in the show notes. Before we wrap up today, we like to give everyone a last chance. Is there anything that you want to mention or plug or any events coming up or anything like that you want to make sure that our listeners know about, in case we have missed it on this episode so far? 

INDRANIL: I would just say that we were very excited with this beta release for Cloud IoT Core. We're seeing a tremendous amount of interest and traction. And we're really excited and we're really happy with that we've released this product. And so the developers and partners can really build compelling application. 

Our goal, really next step, is to get this to GA, so that developers and customers can really think about production deployment and have that as peace of mind with SLA as well. So we are excited. And I think in terms of the developer conference, I'll let Gabe speak to it. 

GABE: Yeah, from our perspective, like Indranil said, making sure that we make it to GA is our priority right now. So I know early in 2018 we've got a couple of conferences coming up where we're going to be really kind of diving deep, getting people on board with it, and exploring more. But nothing specific in the super near future. 

FRANCESC: Well, looking forward to that. And thank you so much, both Indranil and Gabe, for taking the time today to talk about IoT. 

INDRANIL: Thank you. 

GABE: Thanks for having us. 

FRANCESC: Thanks again to both Indranil and Gabe for telling us a little bit more about what IoT Core is, and what people can build on top of it. 

MARK: Yeah, it's a really cool platform. And if you're interested at all, the next episode that is coming up we are talking to a customer who is using it in production. And they have a really, really, really cool use case that I think is quite interesting. 

FRANCESC: Yeah, super interesting interview, so looking forward to that. 

MARK: Excellent. All right. Well, why don't we get stuck into the question of the week? So I fear we normally talk about GCP. But in this instance, Francesc, you posted up a really interesting blog post. I read it a lot. I found it quite fascinating. You're leaving Google. What about me? What am I going to do without you? What's going on here? 

FRANCESC: Why? Why? Why? Why? So yes, I am leaving Google. I wrote that little blog post that went a little bit viral. And I've got a lot of people asking me whether I'm moving to Microsoft or Heptio. 

I'm not moving to Microsoft. I'm not moving to Heptio. I'm joining a tiny, tiny startup that I will be talking more about it later on. But I will be still doing a lot of Go. 

I will be still going to all of the Go conferences. So if people want to see me there, I will be there. So do not worry. I will still be doing justforfunc. 

The only thing I will not be doing is talking to you, Mark, on this beautiful, beautiful podcast. And it is not because I really want to stop talking to you [INAUDIBLE] probably [INAUDIBLE]. It is because I am very excited. New experience, new opportunity, so I couldn't not say no. 

MARK: That's totally fair enough. So who do we have replacing you? 

FRANCESC: I am very excited about this. And I say all the time in this podcast I am very excited. But I am sincerely excited about this because I think it was episode 93-- correct me if I'm wrong-- episode 93 we had an episode on the difference between AI and machine learning. And basically, all of these came up because we were having our lunch conversation with Melanie Warrick. 

And as I'm sure everybody noticed, she is super cool. Yeah, so we decided that since she's so cool and so interesting, and also pretty good at doing podcasts, that maybe she'd be interested in replacing me. So we asked her. And she said yes. 

So super excited. And I'm super excited to introduce Melanie Warrick. How are you doing? 

MELANIE: I'm good. Thank you. I'm really looking forward to taking over, taking all the things and destroying Mark now. I'm looking forward to working with you. 

FRANCESC: Yes. 

MARK: There's a tradition on this podcast stays exactly the same. It's mine. 

MELANIE: That's right. 

FRANCESC: It's one guest against Mark. The guest changes. The host changes, but that's OK. It's still against Mark. Perfect. 

MARK: No, that's fine. Melanie, if people who didn't manage to catch our episode 93, you should totally listen to it. Do you want to tell the audience a little bit about yourself? 

MELANIE: Yes, I am basically senior developer advocate over at Google. And working on Google Cloud Platform, working on AI machine learning. And before that, I worked at Chain Shadower doing machine learning in production, as well as work at a startup building out an open source neural net platform in Java that was not TensorFlow. So those are my kind of tracks to get down the path into software engineering and data science. 

But yeah, I'm looking forward to this. This will be fun. Mark, you'll have a little bit of a different experience with me, for sure. But I think we can find some fun topics to dive into. 

MARK: I look forward to it. I've worked with Francesc for now, two years. It's fine. 

I need a change. it's fine. It's fine. 

FRANCESC: It's been 100-- 101 episodes of Francesc all the time. So I think it's time to change [INAUDIBLE]. 

MELANIE: It takes more than 24 hours to listen to all that. 

FRANCESC: Oh, yes. 

MARK: Oh my god, yeah. That's terrifying when I think about it. 

MELANIE: I know, right. So a lot of time. Francesc, you're going to be missed. And hopefully we'll get a chance to get you back and come visit and tell us about all the things. 

FRANCESC: You know, I would be very happy to come back as a guest anytime. Especially-- I've heard that the San Francisco office is still serving really good free lunch. So we can always organize it. There's absolutely no problem with me. 

MELANIE: Free lunch is very valuable, especially when you're working for a startup. 

FRANCESC: Yep. 

MARK: Absolutely. Oh, Francesc, thank you to you for, oh, man, 101 episodes of us doing this together. It has been a delight and a pleasure. You are definitely going to be missed. 

FRANCESC: Thank you so much. It was indeed an amazing experience. 101 episodes, and we've interviewed people like [INAUDIBLE], John Wilkes, basically all of my big heroes of computer science have been there. We have not interviewed all of them yet. 

So it's hopefully up to you and Melanie to convince them, and go get every single one of them. Notably, I know that Melanie is into AI and stuff. And I'd love to have an episode. I'm going to ask this as a departure present. I want as a gift an interview with [INAUDIBLE]. 

MELANIE: Nice. I am a fan of [INAUDIBLE] as well. So I like that you're making a request on your way out the door. Is this like my last wish? 

FRANCESC: My last wish is an episode with [INAUDIBLE]. Not myself as a host, but I will definitely listen to it. 

MELANIE: That's fair. That's totally fair. 

FRANCESC: But thank you, thank you, Mark for really, really fun times. Long times-- 101 episodes with around 30 to 45 minutes each. That's a long time of us speaking. But still, it was awesome and looking forward to the 100 next episodes and seeing what you and Melanie are able to build. 

MARK: Awesome. Well Francesc, for the last time, thank you so much for joining me on this episode this week. 

FRANCESC: Thank you, Mark and Melanie, for joining me on this episode today. And thank you all for listening. 

MARK: Wonderful. And we'll see you all next week. 

MELANIE: Have a good one. 

{{< /transcript >}}