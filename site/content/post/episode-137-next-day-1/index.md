+++
audioDuration = "00:18:08"
audioFile = "Google.Cloud.Platform.Podcast.Episode.137.mp3"
audioSize = 26538104 
categories = ["NEXT", "Intel", "Open Service Broker", "SAP", ]
date = "2018-07-25"
description = "On this very special episode of the Google Cloud Platform Podcast, we have live interviews from the first day of NEXT!"
draft = false
episodeNumber = 137
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Next Day 1"
image="/images/post/Hero-Next-Day-1.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/PeRax8LQJvd"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/91v3rh/episode_137_next_day_1/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

On this very special episode of the Google Cloud Platform Podcast, we have live interviews from the first day of NEXT! [Melanie](https://twitter.com/nyghtowl) and [Mark](https://twitter.com/Neurotic) had the chance to chat with Melody MeckFessel, VP of Engineering at Google Cloud and Pravan Srivastava of Deloitte. Next we spoke with Sandeep Dinesh about Open Service Broker and Raejeanne Skillern of Intel.

<!--more-->

##### Melody Meckfessel

[Melody Meckfessel](https://twitter.com/mmeckf) is a hands-on technology leader with more than 20 years experience building and maintaining large-scale distributed systems and solving problems at scale. As VP of Engineering, she leads the team building DevOps tools and sharing DevOps best practices across Google and with software development and operations teams around the world. Her team powers the world’s most advanced continuously delivered software, enabling development teams to turn ideas into reliable, scalable production systems. After graduating from UC Berkeley, Melody programmed for startups and enterprise companies. Since joining Google in 2004, Melody has led teams in Google’s core search systems, search quality and cluster management. Melody is passionate about making software development fast, scalable and fun.

##### Pravan Srivastava 
Pravan Srivastava is an analyst at Deloitte covering power, with a particular expertise in the global nuclear power industry. His work involves analyzing and evaluating the impact of key events in major markets such as Japan, China, India, Russia, France and the US. 

##### Sandeep Dinesh

[Sandeep Dinesh](https://twitter.com/SandeepDinesh) is a Developer Advocate for Google Cloud. He blends and creates new opportunities for businesses and people by leveraging the best technology possible.

##### Raejeanne Skillern

[Raejeanne Skillern](https://twitter.com/RaejeanneS) is the VP of Data Center and General Manager of Intel’s cloud service provider (CSP) business. Her goal is to make it easier, more cost-effective and more efficient for CSPs to build new infrastructure and services. She is privileged to lead an exceptional team that manages Intel's business, products and technologies for cloud infrastructure deployments and works closely with the world’s largest cloud providers to ensure Intel’s data center products are optimized for their unique needs.

##### Interviews

* Cloud AutoML [site](https://cloud.google.com/automl/)
* GKE On-Prem [site](https://cloud.google.com/gke-on-prem/)
* Melody Meckfessel's Speaking Schedule at NEXT [site](https://cloud.withgoogle.com/next18/sf/speakers/speaker/A99D9E27052457AD)
* DevOps [site](https://cloud.google.com/solutions/devops/)
* Google Open Source [site](https://opensource.google.com)
* Cloud Build [site](https://cloud.google.com/cloud-build/)
* Spinnaker [site](https://www.spinnaker.io)
* Kubernetes [site](https://kubernetes.io)
* Stackdriver [site](https://cloud.google.com/stackdriver)
* Application Performance Management [site](https://cloud.google.com/apm/)
* OpenCensus [site](https://opencensus.io)
* Deloitte [site](https://www.deloitte.com/)
* SAP [site](https://www.sap.com/index.html)
* Deloitte and Google Cloud [blog](https://www2.deloitte.com/us/en/pages/about-deloitte/solutions/google-cloud.html)
* Google Cloud Platform Service Broker [site](https://cloud.google.com/kubernetes-engine/docs/concepts/google-cloud-platform-service-broker)
* Open Service Broker [site](https://www.openservicebrokerapi.org)
* Pub/Sub [site](https://cloud.google.com/pubsub/)
* Cloud Spanner [site](https://cloud.google.com/spanner/)
* Intel Cloud Computing [site](https://www.intel.com/content/www/us/en/cloud-computing/overview.html)
* Intel Xeon [site](https://www.intel.com/content/www/us/en/products/processors/xeon.html)
* Intel Optane DC Persistent Memory [site](https://www.intel.com/content/www/us/en/big-data/partners/sap/persistent-memory-sap-hana-brief.html)
* Partnering with Intel and SAP on Intel Optane DC Persistent Memory for SAP HANA [blog](https://cloudplatform.googleblog.com/2018/07/intel-and-sap-partnership-brings-persistent-memory-to-gcp-vms.html)

##### Where can you find us next?

We'll both be at [Cloud NEXT](https://cloud.withgoogle.com/next18/sf/) in Moscone West on the first floor! Come by and say hi!

{{< transcript "[ARPEGGIATED SYNTHESIZER THEME PLAYING] MARK: Hi, and welcome to episode number 137 of the weekly-- no, wait-- daily--" >}}

MELANIE: Daily. 

MARK: --daily episode of the Google Cloud Platform podcast. We are here live on floor 1 of Moscone West 

MELANIE: Pseudo-live, but yes. We're recording as we speak, but we're also putting this out the day after. 

MARK: Yeah. 

MELANIE: 

MARK: Yes. 

But as always, my name is Mark Mandel, and I'm here with my colleague, Melanie Warrick. How are you doing, Melanie? 

MELANIE: Hi, Mark. I'm good. It's good to be here. And if you're here, if you're at Next, you should definitely come by and say hi to us, because we are here at Moscone West on the first floor in the midst of all the various booths that are in the space. 

MARK: So we're going to be putting out daily episodes, so look forward to those, talking about some of the keynotes, and chatting with people on the floor, and doing interviews and all sorts of good stuff. 

MELANIE: Definitely. 

MARK: So what's been your favorite stuff, Melanie, so far? 

MELANIE: So far, day one, a couple of the things that I liked that stand out are around AI and around security, especially seeing that AutoML is now going to be part of Translation, as well as Natural Language. That's pretty exciting. 

MARK: That is pretty cool. 

MELANIE: Yeah. What about you, Mark? 

MARK: Yeah, I'm really excited for GKE On-Prem, Google-configured Kubernetes that can be deployed anywhere. So we know I'm a huge Kubernetes fan, but I think this is really going to expose and expand the abilities of Kubernetes to be run a lot of places, especially as we're providing some nice multi-cluster management solutions. 

MELANIE: Sounds good. 

Well, I think it's time for us to go chat with a couple of the folks we've got lined up for today. 

MARK: Let's go do it. 

MELANIE: So we're kicking this off, day one at Next, with our wonderful Melody Meckfessel, who's the VP of engineering at Cloud. Thank you so much for joining us. 

MELODY: Thank you so much for having me. I'm really happy to be here. 

MARK: So lovely to have you here. 

MELANIE: Wonderful to have you here. 

So Melody, I know you are doing the keynote on day three, but to kick us off, what have you been enjoying the most about Next so far? 

MELODY: Wow, yesterday I spoke at the community event, and started talking about what we're launching this week around DevOps tooling for developers using Google's Cloud platform. And it was just awesome to get questions from the community around the things that were on their mind. They gave some great feedback for me and my team to take action on, and you can just tell people are really open, and curious, and wanting to learn what's Google doing for developers and operators, but also how they can contribute. And I think that's a big part of what inspires me with the work that we're doing today on GCP. 

MARK: How can they contribute? 

[LAUGHTER] 

MELODY: Well you know, we talk a lot about Google Cloud Platform being an open cloud. And so from a developer-- there's a platform aspect of that, which means open APIs and open protocols, but there's a developer and operator, or human-centered, perspective on what it means to be an open cloud, and that means having the freedom to choose what makes you most productive. 

And I think about it in kind of three aspects. From a tooling perspective, the things that need to scale and work well on the platform, they're going to be GCP products, and we have several that we're announcing this week. 

Beyond that, open source tooling. This is a direct way that developers and operators can contribute, and we have some great open source tools that we work on with partners and other enterprise companies. 

And then the final thing is partners. So developers and operators working with partners, we want to make sure they work well on the platform. 

So it's kind of this combination of GCP tools, open source tools that developers and operators contribute to, and then our partner products that work really well. 

MELANIE: Why do you believe in an open cloud? 

MELODY: You know, it's fascinating, but when you come back to the humans-- the developers and operators that are using the cloud, we've done some research on this topic around both productivity and kind of what's happening in the ecosystem. 65% of developers we've surveyed say that they have freedom to choose what makes them productive. So think about that. If the developers and operators are choosing, that means that they have autonomy, and they have freedom, and they have a voice. And so our job within GCP, and specifically in DevOps tools, is to enable them to be productive, and maybe just a little bit happy. As developers and operators, we keep raising the bar, right? 

MELANIE: What? Happiness when you're developing? I didn't know that's a thing. 

[LAUGHTER] 

So what is Cloud Build, and what is Stackdriver? 

MELODY: Great question. Cloud Build is a continuous integration and delivery platform. It's a way to automate, build, and test. So once you have your code written, this is a way to build and test, and make sure that you're sending something out to your users that's high quality. It includes things like security baked in. We have vulnerability scanning features to check and see if there's any issues with the images that you're releasing. We contribute with Netflix to something called Spinnaker, which is part of Cloud Build's open source deployment platform. So it's just, again, if I come back to the humans, I want to get features out to my users. I want to get them out safely and securely, and I want to move as fast as I possibly can. 

MARK: Awesome. And are these just general, like these sort of continuous integration tools, these tools that aren't specifically container-based, they can be used with any Google Cloud Platform tooling? 

MELODY: Yeah, we support most aspects of the Google Cloud Platform, and integrate well with Kubernetes. All you essentially have is, you can set up your cloud build, and be good to go. 

You mentioned Stackdriver, Melanie. I wanted to come back to that. So there's the build and test and release aspect, but there's also, once your service is running on Google Cloud Platform, how do you monitor, and get alerts, and understand what's happening with the service through logging and features like error reporting. So we are continuing to evolve Stackdriver to be the set of products which allow operators to move at the speed of Google SREs. And I'm really excited, on day three, I'm going to be talking through some features around our APM suite, and this really gives both developers and operators insight into how to debug their service, tracing, and profiling their application to do optimizations. 

MELANIE: All very vital for performance, for sure. 

MARK: And make sure you check out the day three keynote for that very reason. 

MELODY: That's right. 

MELANIE: Well, any other resources that you recommend for those that are interested in learning more about contributing? 

MELODY: You can go to Cloud.Google.com. Under the DevOps tooling, we've got docs, we've got ways to contribute, we've got thriving open source communities with Go, and we've contributed significantly to Open Census. So there's so many ways to contribute and have a voice in what we're building. 

And just one final thing I'd like to say-- a key part of what we've learned at Google is about how to have a healthy culture to support developers and operators. So on day three I'm going to talk and share some of the things that we've learned that really-- not just with the tools, but with the culture and the tools combined, it's really magic for operating at scale in a safe and secure way. 

MELANIE: I'm looking forward to that. 

MARK: Awesome. Before we run away, favorite thing you've seen at Next so far. 

MELODY: I don't know. Just a lot of tweeting and a lot of community engagement. I can't keep up with my Twitter feed right now. 

[LAUGHTER] 

MARK: A good problem to have. 

MELANIE: It is a good problem. Well, Melody, thank you so much for joining us and helping us kick off our day one of Next. Thank you. 

MARK: Thanks. 

MELODY: Thank you so much for having me. Have a great Next. 

MARK: So I want to say a quick thank you to Praveen Srivastava, coming to join us today from Deloitte here at Good Cloud Next. Thank you so much for joining us today. 

PRAVEEN: Thanks for having us. 

MARK: All right, fantastic. 

First of all, before we get started and talk about Deloitte, tell us a bit about who you are, what do you do at Deloitte. 

PRAVEEN: Yeah, so Praveen Srivastava. I'm a managing director in our technology practice. I've been doing technology consulting for the last 20 years, and predominantly focused around any of the emerging technologies, and how do we deploy technology to our top 500 clients, leveraging our industry experience and challenges that are clients are facing everyday. 

MELANIE: Nice. So what is the partnership that we currently have between Deloitte and Google? 

PRAVEEN: At a very broad scale today, we do all sorts of co-innovation, all sort of go to the market together, mostly focused around implementing technology solutions for our clients. Definitely Deloitte goes into market by industry by sector, and we leverage Google Cloud technology to implement those technology at our client to solve those challenges. But more importantly, I'm focused around our enterprise client, and predominantly SAP as an enterprise solution at the core, and how best we can leverage Google Cloud Platform and other technology, as well as SAP RPA in the core, to help solve client problems. 

MARK: Awesome. I think we just saw Diana on stage, too, just mentioning how important it was relationships like this exist. 

PRAVEEN: Yeah, absolutely. And it was really exciting, I was hearing keynote, and two things that came out of the keynote which I was really super, super excited about-- one is [INAUDIBLE] coming on and talking about how he's excited about SAP and Google partnership. And that really means a lot for us, because our clients are also expecting us to play in this ecosystem with SAP and the leading cloud providers such as Google Cloud Platform. So having SAP's commitment to Google really means a lot to us, right, and that's why we are all so excited about it. 

And the second thing Diane Greene mentioning about system integrators playing a major role in helping Google and the client to adopt these technologies. And Deloitte is one of the leading system integrators in that space, so definitely excited about taking this to the next level. 

MELANIE: Nice. Well anything else at Next that you've seen so far that you're excited about or that you're looking forward to? 

PRAVEEN: Absolutely. The cloud is a long journey. It just started. Our clients are getting used to enabling their businesses using their ID in Cloud. This is just the beginning from our enterprise client. But the art of possibility around digital transformation that we are going through with SAP, and leveraging things like AI and machine learning, would be very important. Our clients are expanding their businesses, more automation, more staying closer to their customers is important, understanding how their customers buy, understanding how their businesses is performing. Analytics platform, BigQuery, all of those things are really exciting, and all of those exciting announcements for us. 

MARK: If people want to learn more about Deloitte and Google Cloud, where can they go? 

PRAVEEN: Well I think, first of all, this last week there was a major press release where we have announced an alliance with Google and SAP to help our enterprise client to adopt Google technology through their digital transformation journey. Definitely look out for a future announcement around that area. 

This week at the Google Next conference in our booth you can go and see a lot of new innovative solutions that we have built. One of those was invoice management solution that was also displayed in Google booth and Deloitte booth at Sapphire, but they're also being displayed here again. There are other solutions around BigQuery that we are presenting at our booth. So you should definitely be able to go and take a look at it. We have experts at the booth who can talk and tell about what we are doing together with SAP and Google around this enterprise-- intelligent enterprise. 

MELANIE: That's great. 

MARK: Fantastic. Well thank you so much for joining us today on the podcast. 

MELANIE: Yes, thank you. 

PRAVEEN: My pleasure. 

MELANIE: So we're joined by Sandeep Dinesh. He's one of our colleagues, and we're going to talk about Open Service Broker. 

Hi, Sandeep. How are you doing? 

SANDEEP: I'm good. How are you? 

MELANIE: Good. 

MARK: Good. 

MELANIE: How's Next going for you? 

SANDEEP: Next is going great. It's a lot of fun. 

MELANIE: Yeah? 

MARK: Excellent. 

MELANIE: Well tell us about what is Open Service Broker? 

SANDEEP: So Open Service Broker is an idea of using services outside of a cloud native cluster natively in that cluster. So let's say you're in a Kubernetes world, and you want to consume a service from your cloud provider, just like Google Cloud, and maybe it's Pub/Sub or Spanner, you can connect to it without having to go to the Google Cloud page or something like that, and provision it. You can connect to it natively in your Kubernetes cluster. 

MELANIE: Great. 

MARK: How does that work? 

SANDEEP: Yeah, so basically there's a service catalog and the broker itself, and the catalog will have a list of all the different services that are available to you. So let's say you want to browse the catalog, you see, oh, this Pub/Sub thing looks really cool, great. And then with the broker you can actually provision a Pub/Sub instance, and then connect to it without having to actually run any G Cloud commands or anything like that. 

MELANIE: And we were talking a little bit before we started recording about how this is relevant in relation to the On-Prem with GKE. 

SANDEEP: Definitely. 

MELANIE: How does that relate? 

SANDEEP: Yeah, so with the GKE On-Prem stuff, you can also use the service broker to connect to this Google Cloud Services natively. So let's say you want to use Scanner with your On-Prem cluster, with the Service Broker, you can actually go ahead and provision a Spanner instance, get the credentials and things like that natively, ask Kubernetes secrets, mount them in, and then start using Spanner in your On-Prem app without having to, again, touch Google Cloud. As a operations person, I can just use the Service Broker 100% to provision my Google Cloud Services. And even better, because it's an Open Service Broker, you can actually provision services from other providers as well, all natively, which is great. 

MARK: That's pretty cool. All right. Well before you run off, favorite thing you've seen so far at Next. 

SANDEEP: Ooh, the bunch of clocks that don't tell the right time. I love that. 

[LAUGHTER] 

MELANIE: That's always very helpful. All right, well Sandeep, thanks so much for coming by. 

SANDEEP: Yeah, thank you all so much. 

MARK: Super happy to have Raejeanne Skillern here from Intel-- one of our favorite people and favorite groups. Thank you so much for joining us. 

RAEJEANNE: Thank you. It's great to be here. 

MELANIE: Well, so tell us a little bit about who you are and what you do. 

RAEJEANNE: So I run the Cloud Platform group in Intel, and that's within our Data Center Group. And basically all the products and technologies that we create that go into the world's largest cloud providers, like Google, I run that business. So from developing new technologies, to creating solutions, and going to market with our partners, that's what I focus on-- growing and accelerating the public cloud. 

MELANIE: Nice. 

MARK: Fantastic. 

So what are you talking to developers and operators here at Google Cloud Next? 

RAEJEANNE: Well we have a lot of announcements that we've been working on, and actually we're really just trying to highlight the results of our 15-year engineering partnership with Google. It started way back in 2003 when we did the first performance optimization of our processor, and we've been doing a lot of customization since. And two years ago, we announced [? alliance, ?] so this is really an opportunity for us to show people what we can do when we put our engineering power together. 

So from custom [? skews ?] that they use in their data center, to new services that they've created that take advantage of our latest and greatest Intel Xeon scalable processor, Code Name Skylake, they did a lot of optimization around that product, as well as we announced a three-way partnership with SAP. We are releasing a new data center technology called Intel Optane data center persistent memory. It's a brand new revolution in memory technology. It's not just DRAM. It can perform like DRAM, but it's got persistence in it. So you're putting a persistent memory technology in the DIMM slot, which means you have faster access to that data in perpetuity, so faster restarts, you can also do larger in-memory databases, and it's perfect for the SAP platform, and that's why we've partnered together. So when we release those technologies, Google will also release new services that are built on this technology. 

MARK: That sounds pretty amazing. 

MELANIE: It does. Is there any specific services right now that are on the roadmap? 

RAEJEANNE: Well, they're going to be releasing it. They're going to announce it-- by the end of the year they'll go into alpha on this service, but because it is a little-- we haven't announced the technology, and it is a little bit out in time. The details we're kind of saving for the big release, the big reveal later this year. 

MELANIE: That makes sense. 

MARK: That's totally fair enough. 

MELANIE: Any resources or places that people could find more information? 

RAEJEANNE: Yeah, so in the blog that Google released yesterday talking about this new service, there's a link that you can register, and they'll give you more information about the service and availability when it's ready. 

MELANIE: Great. 

MARK: Awesome. We'll put a link in the show notes. 

MELANIE: We will. 

MARK: OK, cool. 

Before we run away, what's been the most amazing thing that you've seen so far? What's got your interest piqued? 

RAEJEANNE: I think just the growth of this conference. It's just amazing to come back and just see-- I think there's over 25,000 people here. I feel like it's taking over San Francisco. And the reason I keep hearing it-- I keep hearing it in conversations or seeing it in tweets, it's because it's a geeky conference. They get really into the details of what the technology is, the change they're driving. They have incredible demonstrations of-- I mean I was just watching Google mail self-compose and re-check grammar. I need that now. 

MELANIE: So do I. 

RAEJEANNE: Those kind of simple things that aren't very simple to create to the power of the AI, and Diane Greene talking about how it's the number one platform in health care, and just the wins that they're getting. So it's just that growth. Everybody knows Google globally as search, but really watching the power of the G Suite and the Google Cloud Platform take off is impressive. 

MELANIE: Great. Well, thank you for joining us today. We really appreciate it. 

RAEJEANNE: Yeah, it was a lot of fun. 

MARK: Thanks so much. 

MELANIE: Thanks to everybody for coming out and chatting with us. This is a good start to Next, our first day out, and yeah, we're looking forward to Next day two. 

MARK: Day two, yes. So make sure to tune in tomorrow, and we'll have more interviews with people on the floor. 

MELANIE: Sounds good. See you then. 

MARK: All right. See you then. 

[ARPEGGIATED SYNTHESIZER THEME PLAYING]