+++
audioDuration = "00:34:03"
audioFile = "Google.Cloud.Platform.Podcast.Episode.198.mp3"
audioSize = 49421556
categories = ["Weaviate", "Knowledge Graph", "Natural Language"]
date = "2019-10-09"
description = "Today on the podcast, Gabi Ferrara and Jon Foust share a great interview with Laura Ham, Community Solution Engineer at SeMI Technologies."
draft = false
episodeNumber = 198
hosts = ["Gabi Ferrara", "Jon Foust"]
title = "SeMI Technologies with Laura Ham"
image="/post/episode-198-semi-technologies-with-laura-ham/images/hero/hero-EP-198.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/dfl17i/episode_198_semi_technologies_with_laura_ham/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Today on the podcast, [Gabi Ferrara](https://twitter.com/gabidavila) and [Jon Foust](https://twitter.com/syntxerror1) share a great interview with [Laura Ham](https://twitter.com/laura_hamham), Community Solution Engineer at [SeMI Technologies](https://twitter.com/SeMI_tech). At SeMI Technologies, Laura works with their project Weaviate, an open-source knowledge graph program that allows users to do a contextualized search based on inputted data. However, unlike traditional databases, Weaviate attaches meanings and links within the data.
   
Laura details what knowledge graphs are and how they can be useful for both small and large projects. Explaining that ontology is the meaning of words, she tells us how Weaviate is able to use this concept to make more specific data entries and links, allowing users to perform better and more informative searches. Weaviate is able to do this with the help of Kubernetes. Later, Laura tells Gabi and Jon the ways Weaviate helps developers and users with thorough documentation, assistance with troubleshooting, and support from solution engineers.

<!--more-->

##### Laura Ham
Laura is the Community Solution Engineer at SeMI Technologies, where she takes care of building and supporting a community around their open source software product, Weaviate. She also takes care of the developer and user experience within the business, which means she writes documentation to support both developers and users, as well as researches and evaluates new software implementations on user experience. She has a user-centered approach in the work that she develops and designs.  Laura is a full-time graduate student in Human Computer Interaction and Design with a special focus on Innovation and Entrepreneurship at EIT Digital Master School. Here, she learns about how to develop and design technology from a user perspective, and how to apply this with an entrepreneurial mindset.

##### Cool things of the week

* Use G Suite to make documents (and other tools) more accessible to people with disabilities [blog](https://cloud.google.com/blog/products/g-suite/use-g-suite-to-make-documents-and-other-tools-more-accessible-to-people-with-disabilities)
* 4 steps to stop data exfiltration with Google Cloud [blog](https://cloud.google.com/blog/products/identity-security/4-steps-to-stop-data-exfiltration-with-google-cloud)
* Using Colab to get more out of BigQuery [blog](https://cloud.google.com/blog/products/data-analytics/whats-the-weather-like-using-colab-to-get-more-out-of-bigquery)
* Updates to AutoML Vision Edge, Auto ML Video, & AutoML Intelligence API [blog](https://cloud.google.com/blog/products/ai-machine-learning/announcing-updates-to-automl-vision-edge-automl-video-and-video-intelligence-api)

##### Interview

* SeMI Technologies [site](https://www.semi.technology)
* Weaviate [site](https://www.semi.technology/products/weaviate.html)
* Weaviate GitHub [github](https://github.com/semi-technologies/weaviate)
* Weaviate documentation [site](https://www.semi.technology/documentation/weaviate/current/)
* GraphQL API [github](https://github.com/semi-technologies/weaviate-graphql-prototype)
* Kubernetes [site](https://kubernetes.io)
* GKE [site](https://cloud.google.com/kubernetes-engine/)
* Cloud BigTable [site](https://cloud.google.com/bigtable/)
* SeMI Technologies Meetups [site](https://www.semi.technology/news/meetups.html)

##### Question of the week

When will Python 2 reach the end of its life, and what does that mean for GCP?

* Python Google Cloud Client Libraries only support Python 3 [github](https://github.com/googleapis/google-cloud-python)
* Countdown to end of life [site](https://pythonclock.org/)

##### Where can you find us next?

Gabi will be at [Full Stack Europe](https://fullstackeurope.com/speakers/gabi-davila/).

Jon will be at his twin's wedding! Then [Kubecon](https://events19.linuxfoundation.org/events/kubecon-cloudnativecon-north-america-2019/) in November to run a workshop on [Open Match](https://github.com/googleforgames/open-match/blob/master/docs/development.md).

SeMI Technologies will be hosting meetups in [NYC on October 24th](https://www.meetup.com/Knowledge-Graphs-NYC/events/265353956/), the [Bay Area on October 25th](https://www.meetup.com/Knowledge-Graphs-San-Francisco/events/265353949/), and [Amsterdam on November 7th](https://www.meetup.com/Knowledge-Graphs-Amsterdam/events/265353942/).

##### Sound Effect Attribution

* "Small Group Laugh 6" by Tim.Kahn of [Freesound.org](https://Freesound.org)
* "Small Group Laugh 2" by Tim.Kahn of [Freesound.org](https://Freesound.org)
* "02 Storm Orage" by ArnaudCoutancier of [Freesound.org](https://Freesound.org)
* "Harry Potter Theme", a clunky midi file rendition of music originally composed by John Williams. Purchase the soundtrack on [Amazon](https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Williams/dp/B00005OWIU/)

{{< transcript "[THEME MUSIC] JON: Hi and welcome to Episode 198 of the weekly Google Cloud Platform Podcast. I am Jon, and I'm here with my colleague, Gabi. Hey, Gabi. How's it going?" >}}

GABI: Hello, Jon. How are you? 

JON: I'm doing great. How about yourself? 

GABI: I'm good. 

JON: So this week, our guest is Laura Ham. She's a solution community engineer at SeMI Technologies. And she's working on a project called Weaviate, which is going to be very amazing. They deal with knowledge graphs. And we're going to have a very interesting conversation, because both Gabi and I are both interested in knowledge graphs. 

GABI: Yeah. Database things, also. It's nice. So it's not a database, but stories-- relationships and data and how they relate to each other. So it's nice. I'm going to learn about that. 

JON: Yeah. I think we talked about it a Cloud Next with one of our guests who stopped by in the booth. 

GABI: Yeah. 

JON: And we were talking about how we can use it in games, if I remember. 

GABI: Yeah. It was David Allen from Neo4j. It's nice. 

JON: And we will also get into our Question of the Week. Is when will Python be reaching its end of life? So sad. And what does it mean for GCP? But before that, let's get into our Cool Things of the Week. 

[THEME MUSIC] 

GABI: OK. We're going to see on the show notes now one example of how to use G Suite to make documents and other tools more accessible to people with disabilities. Not just for people with visual impairment or other kinds of physical impairments, but the also stuff like I learned today about visual crowding, which means you can't see phones in a certain way. 

So they are the different kind of phones and typography, so you can be able to do that. And one of the things also is the visual screen reader technology that they improved. So check out on the show notes to see more about that. 

JON: That's awesome. Going through college, I was a computer engineering major, so I was building circuits and building actual physical devices. And it was pretty fun to do that, but my focus was mainly on helping those with disabilities. And it was really great to see the shift towards using technology to do so. 

GABI: Oh, yeah. As an able person, as they say, they usually distinct us like that, we should be OK [INAUDIBLE] accessibility. Not just on this, but on everything that we do. 

JON: Right. The next thing we have on our agenda is, there's a blog post that's written on the Google Cloud Blog about four steps to stop data exfiltration with Google Cloud. So if you're not familiar with Cloud DLP, or Data Loss Prevention, it's a way to understand and manage your sensitive data and PII. 

And what it does is it allows you to pretty much redact information like credit cards, names, Social Security numbers, and all other personal information. And it's very fast and very scalable. And when you deal with that and it stores all this information in Cloud Buckets-- or it scans Cloud Buckets, actually, it helps you stay in compliance with regulations and keeping PII safe. And you can then use Cloud SCC, or Cloud Security Command Center, to actually then manage and store all of this information. So if you're really interested in keeping your data safe, I suggest you check it out. 

GABI: Scanning the buckets is important. 

JON: [LAUGHS] 

GABI: I don't want my credit card numbers out there. 

[LAUGHTER] 

OK. Talking about Python, there is a Colab notebook. Tough to know how the weather is. Using Colab and BigQuery, you do a weather analysis, and there is this cool thing on Colab which are interactive tables. 

So you don't need to list all results at once. You can scroll through the tables, for instance. And it mixes Python and SQL, of course. 

[LAUGHTER] 

And check it out so you can do weather line analysis. I think it's from the past years in there, so you can predict what's coming, which is nice. 

JON: I was just out this weekend, and there was no forecasted rain. But sure enough-- 

[THUNDER AND RAIN] 

--as soon as I stepped out of the train station, it just started having a little drizzle, and I did not prepare for that. So hopefully, we can really get weather down to an exact science. 

GABI: [LAUGHS] 

JON: And hopefully, I won't be wet on my way home. And to round things off for our Cool Things of the Week, there are updates to AutoML Vision Edge, AutoML Video, and AutoML Intelligence APIs. So in April, AutoML Vision Edge was announced. And it was pretty much created to help businesses train and deploy ML models on the Edge. And now we have AutoML Video and AutoML Intelligence to join the party. 

So just to give you an idea of what AutoML Edge does, is if you check out the blog post, there's a really interesting video on one of our customers who, you can take a picture of a engagement ring and actually use AR to try it on, which is really, really cool. So the actual updates are being able to detect objects and logos, videos and images. It allows you to then train your models to handle that. So it's pretty interesting-- pretty awesome. And it's going to make things a lot more fun. 

GABI: And without having to code everything on TensorFlow-- 

[LAUGHTER] 

--which is nice. Not complaining about TensorFlow. I just don't have the knowledge to do that. [LAUGHS] 

JON: Right. Whatever makes things easier. [LAUGHS] 

GABI: Yeah. 

JON: All right, so now that we're wrapped up with our Cool Things of the Week, let's go chat with our great friend, Laura, who is going to be telling us more about knowledge graphs. 

GABI: Let's go. 

[MUSIC PLAYING] 

We are here today with Laura Ham. She's Solution Community Engineer at SeMI Technologies. And welcome, Laura. Tell us what you do, and what's your company do. 

LAURA: Thanks for the introduction. So I'm Laura. I'm from the Netherlands, but currently living in Helsinki. So yes, community solution engineer at SeMI technologies. I build and support the community around our open-source software, Weaviate. And I also take care of the developer and user experience within the business. 

This means that I, for example, write documentation to support both developers and the users. And I also research and evaluate new use cases or new implementations in the software regarding user experience. Yeah, that's what I do within SeMI. 

JON: Nice. It sounds like you wear quite a bit of hats. You're a community solution engineer, so we're almost in similar roles where we interact with developer communities, and we build solutions and documentation. 

But you also mentioned that you are a UX researcher. So can you tell us a little bit how you got into that? Like your background? And just give our listeners a little insight on how to get into something like being a community solution engineer. 

LAURA: Yeah, sure. So I actually started from the beginning. So SeMI was a small startup. I joined in the beginning as mainly researching possibilities how to build a knowledge graph. 

More specifically, I was the bridge between UX designers who are in direct contact with potential users of such an interface, and core developers of our software. Which means that I was not really officially UX designing, but more designing a good experience for other developers. And then as we went on, our products got bigger. 

We got more people on board, and we decided that our products will always be open source. So we said we'll always be open source. And we want to build a community around this, because we want to spread these products, and also to help other people and other people to help us with developing this. 

JON: Awesome. We really enjoy people who are interacting with communities. Especially in open source, because it allows developers to help build out the product that they truly desire. And it's always just great to have people from all different backgrounds and all different experiences come together to actually build something that's amazing. So thank you, SeMI Technologies, for contributing to the open-source community. 

[LAUGHTER] 

LAURA: Cool. Of course. I agree. 

GABI: And you mentioned Weaviate, right? 

LAURA: That's correct. 

GABI: So for us, what it is-- Weaviate? 

LAURA: Yeah. So Weaviate is a knowledge graph-- open-source knowledge graph which enables you to do contextualized search based on your data you put in. More specifically, we have-- instead of a traditional database where data in a database has no meaning at all, so the database doesn't know what kind of knowledge is in there, we create meanings. 

We attach meanings to the data which you put in the knowledge graph. It all goes automatically. And this enables you to do search based on this knowledge you put in, to gain more knowledge. You can get more knowledge out of it, let's say. 

GABI: How do you query the data? You put the data there. It's a knowledge graph. But how do you retrieve the data from there? It's almost like a graph, as you said? So I know some graph databases, but I don't think it's a graph database, per se. Or is it? 

LAURA: It is not a graph database, per se. That's right. The structure is based on a graph, though. And we want to have a big variety of users being able to use and query this graph, which is why I designed a GraphQL API, which is a way you can almost use natural language to query the API, which is designed by ourselves. [LAUGHS] 

JON: That sounds amazing. I'm going to circle back on the natural language part, because that's very interesting. But can you give me an example of a knowledge graph? Because I don't particularly work in data. Like a sneak peek of someone who is using Weaviate would use to actually build out. 

LAURA: Yeah, sure. So we can take as an example, countries and cities. So if we have the country, Netherlands, where I'm from, with the capital, Amsterdam, we have a clear link between Amsterdam and the Netherlands, because Amsterdam is the capital of the Netherlands. 

The knowledge graph stores this data. It has a link between the Netherlands and Amsterdam. And if we then have, for example, a second country in there, which is Germany, and we have a second city in there, which is Berlin, but we didn't make the link yet between Berlin, which is the capital of Germany, we can automatically classify this and make the link to the capital. 

JON: Sounds like what knowledge graphs do is they-- it starts off with, I would say, a node, like many graphs do. And it seems like once you want to populate new data, it just starts to bridge off into different directions, almost like building a map, like in this particular example. And you're starting to populate different nodes with more and more information. 

And then from each node, it seems to continue to spread-- to gather more information. So-- but it obviously can be user-defined, or it can be automatically done. Right? 

LAURA: Yeah, that's right. So data is stored based on this meaning, instead of based on nothing or based on a number, which is in a relational or traditional database. And that's the most important difference for us. And then based on this meaning, you can make new links and extract new knowledge. 

JON: Awesome. 

GABI: That's great. 

LAURA: And it all starts with the nodes, as you say, which we define as classes. So we have a class country or a class city which has certain properties. Country has property has capital. 

JON: And just to circle back on the natural language that you've been using, can you tell us a little bit more about that? 

LAURA: Yeah. So for the GraphQL API, you mean? 

JON: Yes. 

LAURA: Yeah. For our query language at GraphQL, we wanted to make it usable for as many people as possible. So yeah, for example query languages like Cypher or Neo4j. 

But those are hard to understand. They're not really intuitive if you see them for the first time. So what I've done with GraphQL is start with how you would ask a database, or how you would add something with data in it to get back what you actually are looking for. 

So I started from these bases. And from there, I found that some keywords were coming back all the time. I can give an example. 

So if you know what you're looking for, you very often use the word "get." So, "Can I get this specific thing?" So that is why a very key function in the GraphQL API is the get function. So you start with get and then you go on. 

GABI: You mention the example of countries and capitals. So what is the most common use case for a business? That people use it for that? That example is abstract, but a real-world example that people are using this? 

LAURA: So for example, if we are going out this context-based search, then we can look into scientific articles, for example. If you have a database of articles and you want to look for a specific topic, then you might start looking at some words which are not actually present in this article. So you might start looking for some kind of specific disease, but this disease is named differently in an article. 

And you still want to find this article. And if we have all this data in our knowledge graph, then you could actually find articles like this. So you search based on the context instead of search based on the exact keywords. 

JON: OK. And that is pretty much defined by each node in your graph's actual data that is either supplied by a user or built automatically? 

LAURA: Yeah. Correct. And the nice thing is is that you give a structure to your data yourself. So that's what we call an ontology or a schema. You define your own ontology. 

But what happens is if you put in data, factors are generated automatically to represent the meaning of these words. And that is not only depending your own ontology, but it is based on what we call confectionery, which is a vector representation of a machine learning model which it has learned on a whole Wikipedia and Wiktionary. So it gives a meaning so that others can also understand it. 

JON: Awesome. I'm going to pretend I know what ontology is. But for our listeners, can you give us a hardcore definition of what ontology is? 

LAURA: Yeah, sure. So an ontology is a description of-- well, the meaning of the words, basically. So how we use ontology is we define classes and properties. So as I said earlier, we have a class, which can be a country. And you describe what country means. 

And a country can have properties. So it can have a capital. It has a population-- might be in a certain region. Whatever you want to give to that. And then you can-- when you populate your knowledge graph, your database, and you want to add a country, you give the country, Netherlands, the label "country." 

GABI: Can a class reference another class in the property? I'm going to give you an example. Let's say the UK sends off countries out of Commonwealth, right? So let's say you have a property which it is entire countries-- whatever. Because the UK has the Great Britain and I think Scotland and Wales. So it's a country with side-- other countries. Could it do that, too? 

LAURA: Yeah. Yeah, sure. So we have two types of properties a class can have. One is just some data. So if you have the population of a country, it's just a number. 

But the example of city that I gave-- the city is another class. So you refer to this other node in the database. And you can do the same with other countries. You can refer to the same class again. Yeah. 

JON: I'm really interested in ontology. I didn't know what it was. I'm just pretending for our viewers. I really enjoyed that definition. The meaning of words, I believe that's what you said. 

So I guess as a follow up, can you give us a good example of a pretty basic example of the meaning of words? Meaning when you said that, I immediately went back to my college days when I took logical classes. And everything was pretty much quantitative. 

It's universal or pretty much like all things that are cute are dogs. Or all dogs are cute. Or cats are boring, for example. 

[LAUGHTER] 

[CAT YOWLS] 

LAURA: Yeah, that's a very good example, what you just mentioned, because it is. An ontology is something everyone defines for itself. So if we have a bank, for example-- the word "bank." If I say "bank," you might think of a financial institution. But another might think of a riverbank. 

JON: Oh, OK. 

LAURA: So that's why we define the word "bank" in ontology with a description, and that's where it gets effective representation, which represents its meaning. So we have two banks. And in a traditional database, they would mean the same thing. But for us, we have two different things. 

And then another good point is what you said, is that everyone defines it differently. We can use bank again. Some people might say it's a bank, but some people might say it's a financial institution. So people don't speak the same language. 

So that is why in our knowledge graph, a bank is the same like the financial institution. Bank is the same thing. And then we have the other-- the riverbank as a separate thing. So the knowledge graph does make a difference between those two words. 

JON: Awesome. Ontology is based on many different things, like people may define banks different ways. So I have another question. For ontology, it seems like it's based on-- I won't say only environment, but pretty much everybody's way of living. So for example, if I were in the Harry Potter universe-- 

[MUSIC PLAYING] 

--then my ontology of some things might be different. For example, like medicine might be different in the Harry Potter universe, and they might have different terminology. But we might share the same technology in our non-fantasy world, where medicine is just a little bit more practical and scientific. 

People are measuring and testing and everything. Where with Harry Potter, it's I'm going to throw this together and if it works, it works, because I've tested it once, separately, and together. I believe that this is the result it will have. It seems like ontology is based solely on the actual surroundings in the environment, as well as people's definitions and way of living. Is that correct? 

LAURA: Yeah, that's correct. 

[DING] 

And that is why everyone has their own ontology. I don't know if you noticed, but people have been trying to make a formal ontology for, for example, the web in the past. And people just cannot agree on a formal ontology, because everyone's meaning is different, because it's based on their own environment, as you say. 

And that's exactly one of the key points we want to avoid. So everyone can define their own ontology here, so that they can query and ask the knowledge graph in their own language. And we solved this whole problem with the machine learning model we built within the knowledge graph, to still be able to make the links between the thing you mean and the thing I mean, which is actually the same, but we just name it differently. 

JON: Got it. That sounds awesome. 

GABI: So to steer back a bit that conversation-- your product helps solve a lot of different problems that people have, because usually a common relational database may not be what they're looking for. Although I still like them. And-- 

[LAUGHTER] 

LAURA: Awesome. 

GABI: Can you explain to us how the portfolio of Google Cloud helps SeMI to develop their technology or to help bridge the gap that people see that you're trying to help people with? 

LAURA: Yeah. So first of all, the core of our knowledge graph is built on Kubernetes, which is a further Google Cloud product. And then we have, for example, Google Weaviate Clusters. Yeah. They act as 10 boxes which anyone can request, and they can try out the Weaviate for some time. And we run these clusters on Google Cloud, as well. 

And then also, as we are still highly developing our software, our whole development pipeline goes through Google Cloud. Which is really nice, for example, is that we use Travis. And as soon as we commit a new updated version to GitHub, Travis will start a test which all goes through a Google Cloud. So it starts a cluster there, and it also runs a test over there and shuts it down. So all in all, it really helps us in the whole development process. 

GABI: Does it help on the machine learning part, too? Do you use TensorFlow or something like that that you mentioned? 

LAURA: We didn't use Google machine learning, yeah. Not TensorFlow or the other machine learning. 

GABI: Yeah. We have speech-to-text and-- 

LAURA: ML? 

GABI: ML engine and other stuff. 

LAURA: Yeah. 

GABI: I was just curious, because you mentioned machine learning. And the first thing that we both think about Google Cloud, oh, machine learning. [LAUGHS] No, no, no. We're not using it. 

[LAUGHTER] 

LAURA: No. And in addition, it's not only Google Cloud which is helping us a lot, but also Google in general, because we're still in the startup phase of the business, and Google is really helpful. For example, I went to I/O one year ago. I met a lot of people there. It was through community tickets. And also, with podcasts like this. We are organizing talks, so that's also a pro for Google. 

JON: You mentioned that you're still in the start-up phase, but I would imagine that there have probably been some bumps and hurdles along in your development process. How would you say Google has helped you specifically on that? What I mean is, do we have support that either comes to you or is able to help you out? Or I know that Weaviate is open source, so I'm sure that you have a open-source community that you interact with when you get stuck in development. What is your go-to method of fixing that? 

LAURA: The only thing that I can think is I am not one of the, let's say, core developers anymore. If we get stuck, it's that we have some community backups acquired through Google. So although they might not be direct relations to Google, the network gained through Google Meetups, for example. 

GABI: And that's a curiosity. Do you do Weaviate-- you're a startup. You do open source. But you still have to pay the bills. 

LAURA: Right. 

GABI: So do you offer Weaviate as a SaaS product, too? Like for instance, I don't want to have to manage this. I want you to manage that for me. 

Do you do this kind of work, too? Or no, it's like you need to install your own cluster and do everything. How does it work? 

LAURA: Yeah. So Weaviate is indeed open source and It always stay open source. But what we are doing at SeMI Technologies is that we offer our consulting help for getting started with building a whole Weaviate for companies. 

And secondly, because Weaviate it open source, it comes with an open-source license. And for bigger businesses, we offer Weaviate Enterprise, which comes with, the liability would go to us. And that's what we are building the business about, basically. 

JON: Awesome. We know, based on, for example, like the success of Kubernetes being open source and then becoming managed as GKE-- we've seen the success. So it's great to see that we are contributing both to open source as well as offering some liability and some support for our users. So it seems like Weaviate is really making a lot of strides in that area. 

LAURA: If you look at really popular applications nowadays, like Uber and Netflix, it's built on maybe 100 products, among which Google, Bigtable, MySQL-- all these services, everyone knows. And our goal as an open-source product is to get in this list-- to get people working with knowledge graphs. And that is why one of our key points is to remain open source. 

JON: So you just said something very interesting. You want to enter into this space where Weaviate is a go-to for knowledge graphs. But I'm curious. For your enterprise solution, what are these companies using Weaviate for, specifically? 

Because you mentioned Uber and I immediately thought, oh, that's a good use of potential knowledge graphs in Uber. Or something else. So I'm just curious. In your Enterprise Edition, what are you seeing a lot of use cases for Weaviate? 

LAURA: There are different possibilities, because one of the things we offer due to our machine learning model is justification. So what we can, for example, do is in the area of cybersecurity, is classifying emails if they are potential threats or contains phishing or not, based on the context of the email and the knowledge which is already in your graph. And secondly, as an enterprise, you can gain knowledge out of the data that you already have. 

So if you have a lot of customer data, for example, the knowledge graph may be able to make new links between things you hadn't thought about. And then you're like, aha. Maybe this is a new business case for us. 

JON: OK. So the machine learning aspect of Weaviate is actually like a churn model where it's pretty much identifying different and new potential business aspects. So Weaviate essentially is just trying to connect your customers to more areas of your business. And I'm assuming that in other use cases or other companies, it seems like it would be bring users to your product a lot better. 

LAURA: [CHUCKLES] Yeah. At Weaviate, we stop also because of this at the API level. So we will never build something like a real application on top of that. It's just the API level so that people can build their own interfaces or products or whatever so they can connect it in however they want. 

JON: Awesome. 

GABI: You mentioned that everything-- it's API based and people create their applications on top of it. How does that work on the perspective of developer experience on that? Because everything's an API, and we know APIs, if they don't have documentation, they don't help much. You rely a lot on that. And what helps developers beyond your documentation around tooling to help work with Weaviate? 

LAURA: Yeah. So documentation is a great thing. And also, a really big thing to work on, I would say. I'm currently writing it. 

But in our documentation, we have really straightforward examples which you could directly try out in your own Weaviate cluster if you signed up for one on our website. And then we make the API as straightforward as possible. So we have API as a RESTful API. And if you want to populate or fill the database, you use RESTful API calls. 

So all these are listed on our website and explain how you can post data and update some data. And if you want to query the data-- so either get something you're specifically looking for or explore the data because you're looking for something you don't know about, or looking for new relations, then you're doing this all via the GraphQL API, which is designed from more human perspective, so it's based on natural language. And all of this is, of course, also documented with examples. 

GABI: How do you deal with questions that comes from the developers? You mentioned that you do a lot of open-source communities. So meetups, conferences, probably-- Stack Overflow, Slack. But when you deal with Enterprise, what is your channel to help them achieve their goals? 

LAURA: Yeah. So for enterprises which are usually big businesses, we have solution engineers. And these solution engineers can help you from the start. 

So they can help you defining use cases, and then building in an ontology together, because as also Jon mentioned, not everyone knows what an ontology is from the beginning. We really help with that. 

And then also, setting up the whole environment. We can provide help with that. And if they have any questions, they can always come back to the solution engineers. 

So right now, it's really flexible. We have no set way of working in terms of, we do this and this and not this and this. But we are really flexible in contact with our customers. 

JON: Awesome. It seems like for each customer, there's a dedicated solution engineer that you can rely on. 

LAURA: As an enterprise, you can always rely on one solution engineer, which is always available for you. Yes. 

JON: Is there anything that we missed or anything that you would like to mention before we wrap things up? Possibly, where can we see Weaviate in the future? Will you be at any conferences? Will you be at any meetups? Are there going to be any new online content that you're going to be posting pretty soon? 

LAURA: So we're soon releasing our new website with new documentation, because we also released a new version of Weaviate itself. This will be, by the release of this podcast, already online. By the end of October, we will have meetups organized in Amsterdam, New York, and San Francisco. The dates are not set yet, but we can communicate this via newsletters or our website. 

JON: Awesome. And we'll also post those dates if we get them before this episode airs. It's been a pleasure having you, Laura. It's been amazing. When you come out New York, make sure you give me and Gabi a ring. You'll probably go out for lunch or something. [CHUCKLES] 

GABI: Oh, yeah. Yeah. And if we go to Amsterdam, I'd like to let you know. 

JON: Oh, yeah. That's also a very good option. 

LAURA: Well, if you go to Helsinki, also, because I'm currently living in Helsinki-- [LAUGHS] 

JON: Aha. So I guess we're gaining business justification to go to Helsinki, it seems. 

[LAUGHTER] 

LAURA: Oh, yeah. You're always welcome. 

JON: Well, thanks again, Laura, for joining us on this episode. And thank you, Gabi, for joining me as well. And we look forward to seeing the great things that Weaviate's going to produce. 

GABI: See you later, Laura. And come to New York, too. 

LAURA: Thanks for inviting me. 

JON: [LAUGHS] 

GABI: Thank you, Laura, for talking to us about Weaviate and knowledge graphs. That was really insightful. 

JON: Yeah. It was pretty amazing. And as you can tell from this episode, I was really interested in ontology and how it's being used to build on knowledge graphs. So it was very insightful and very cool. And I will probably end up taking a big peek at what they're doing. So it's awesome. 

GABI: There are links on the show notes for you to see their repository and see a bit more about their product. 

JON: So Gabi, let's get into our Question of the Week. 

[THEME MUSIC] 

So let's get into our Question of the Week, which is when will Python 2 reach end of life? And what does it mean for GCP? Gabi, hopefully you have some insight on that. 

GABI: So from what I could see on our GitHub repository, our client libraries already are only guaranteed to work on Python 3. Like for instance, on App Engine, it's not working on Python 2. We don't do that guarantee anymore. 

But officially, Python 2 end of life is January 1, 2020. So it's time to look at your code, see if you're doing anything with Python 2, and upgrade it. Because a lot of things changed, and I see people going headache about that. 

JON: [LAUGHS] 

GABI: So I recommend you getting a look now. 

[LAUGHTER] 

And on GCP, that's the thing. We are not going to support Python 2 anymore. So just take a look at the client libraries, GitHub, and see what you are using so you can upgrade your code. 

JON: Awesome. And I think you mentioned to me earlier that there's a countdown clock for it as well? 

GABI: Oh, yeah. There is this website that I found. It's a countdown clock, so if you keep an eye when the end of life is happening. It's just a page, but it's-- it's the link in there, so take a look. Put it on a favorites and bookmarks and just keep a look at that. 

JON: Right. We'll include it in the show notes. And maybe someone who's really brave will design some external countdown clock, like the kind they have for New Year's. And then people who are working with Python on GCP, or just Python in general, will be able to monitor as soon as the clock hits 12:00 for New Year's, that Python 2 will no longer be supported. So it would be funny to see someone actually build that out. 

GABI: It reminds me of the-- remember when the clocks were all going to change and everybody was worried about that it would not work? I think you call it the Millennium Bug? 

[BUZZER] 

SPEAKER: The inevitable approaching doom of Y2K. 

JON: Yeah. 

GABI: So it's kind of like that, I think. 

[LAUGHTER] 

JON: Gabi, where are you going to be in the upcoming months? 

GABI: Next week, I actually am going to Belgium for Full Stack Europe. I'm going to put a link on the show notes so you can check it out. 

JON: That's awesome. 

GABI: You? 

JON: For me, my twin brother is getting married this week, so I'm going to be the best man at the wedding. I'm super excited. I know that they're excited, and I just can't wait to be surrounded by friends and family to celebrate this moment. 

Outside of that personal thing, I will be going to KubeCon in November. So if you're going to be there, be sure to stop by. And we're running a workshop on Open Match, which is our matchmaking framework. Feel free to stop by if you want to get interested in open source project for games and connecting millions and millions of players together. 

GABI: Cool. And good luck on the wedding. [LAUGHS] 

JON: Oh, thank you. 

GABI: Have fun. 

[LAUGHTER] 

JON: Definitely will. Well, Gabi, it's been a pleasure. And we want to thank all of our listeners for listening. And we will see you all next week. 

GABI: See you all next week. I hope so. [LAUGHS] 

[THEME MUSIC]