+++
audioDuration = "00:42:00"
audioFile = "Google.Cloud.Platform.Podcast.Episode.258.mp3"
audioSize = 60392269
categories = ["Serverless"]
date = "2021-05-05"
description = "On the show this week, Mark Mirchandani joins Stephanie Wong to talk about serverless computing and the Cloud OnAir Serverless event with our guests."
draft = false
episodeNumber = 258
hosts = ["Mark Mirchandani", "Stephanie Wong"]
title = "The Power of Serverless with Aparna Sinha and Philip Beevers"
image="/post/episode-258-the-power-of-serverless-with-aparna-sinha-and-philip-beevers/images/hero/hero-EP-258.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/n5ms72/episode_258_the_power_of_serverless_with_aparna/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

On the show this week, [Mark Mirchandani](https://twitter.com/markmirch) joins [Stephanie Wong](https://twitter.com/stephr_wong) to talk about serverless computing and the Cloud OnAir Serverless event with our guests. Aparna Sinha and Philip Beevers start the show giving us a thorough definition of serverless infrastructures and how this setup can help clients run efficient and cost-effective projects with easy scalability and observability.

Serverless has grown exponentially over the last decade, and Aparna talks about how that trajectory will continue in the future. At its core, the serverless structure allows large enterprise companies to do what they need to do, from analyzing real time information to ensuring dinner is delivered piping hot. Aparna describes the three aspects of next generation serverless, developer centricity, versatility, and built-in best practices, and how Google is using these to empower developers and company employees to create robust projects efficiently and economically. Phil tells us about the experience of using serverless products and the success of the three pillars in Google serverless offerings.

Enterprise customers like MediaMarktSaturn and Ikea are taking advantage of the serverless system for e-commerce, data processing, machine learning, and more. Our guests describe client experiences and how customer feedback is used to help improve Google serverless tools. With so many serverless tools available, our guests offer advice on choosing the right products for your project.

We also hear all about the upcoming Cloud On Air event and what participants can expect, from product announcements and live demos to thorough reviews of recently added serverless features. 

##### Aparna Sinha

Aparna Sinha is Director of Product at Google Cloud and the product leader for Serverless Application Development and DevOps. She is passionate about transforming businesses through faster, safer software delivery. Previously, Aparna helped grow Kubernetes into a widely adopted platform across industries. Aparna holds a PhD in Electrical Engineering from Stanford. She is Chair of the Governing Board of the Cloud Native Computing Foundation (CNCF). She lives in Palo Alto with her husband and two kids.

##### Philip Beevers

Phil has been at Google for seven years. He currently leads the Serverless Engineering teams and previously ran the Site Reliability Engineering team for Google Cloud and Google's internal Technical Infrastructure. Phil holds a BA in Mathematics from Oxford University.

##### Cool things of the week

* The evolution of Kubernetes networking with the GKE Gateway controller [blog](https://cloud.google.com/blog/products/containers-kubernetes/new-gke-gateway-controller-implements-kubernetes-gateway-api)
* Network Performance for all of Google Cloud in Performance Dashboard [site](https://console.cloud.google.com/net-intelligence/performance/global-dashboard/packet-loss?_ga=2.122314059.-1117472498.1619726471&pli=1)
* Go from Database to Dashboard with BigQuery and Looker [blog](https://cloud.google.com/blog/topics/developers-practitioners/go-database-dashboard-bigquery-and-looker)
* Introducing Open Saves: Open-source cloud-native storage for games [blog](https://cloud.google.com/blog/products/media-entertainment/introducing-open-saves)

##### Interview

* Cloud Run [site](https://cloud.google.com/run/)
* Cloud Functions [site](https://cloud.google.com/functions)
* Serverless Computing [site](https://cloud.google.com/serverless/)
* The power of Serverless: Get more done easily [site](https://cloudonair.withgoogle.com/events/serverless-may2021)
* App Engine [site](https://cloud.google.com/appengine)
* Building Serverless Applications with Google Cloud Run [book](https://www.oreilly.com/library/view/building-serverless-applications/9781492057086/)
* MediaMarktSaturn [site](https://www.mediamarktsaturn.com/en)
* Ikea [site](https://www.ikea.com)
* Airbus [site](https://www.airbus.com)
* Veolia [site](https://www.veolia.com/en)

##### Sound Effects Attribution

* "Fanfare1" by N2P5 of [Freesound.org](https://Freesound.org)
* "Banjo Opener" by Simanays of [Freesound.org](https://Freesound.org)

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, everyone, and welcome to episode number 258 of the weekly Google Cloud Platform podcast. I am Stephanie Wong, here again and back with-- ba ba ba ba-- Mark Mirchandani." >}}

MARK: What a fanfare. I kind of wish every time I walked into a room I could just record that, and that every time I open the door-- ba ba ba ba-- it's Mark! And it's like, you didn't need that fanfare, he just went to the bathroom. It's like, no, I have to do it every time I change a room. 

STEPHANIE: You know, you can always go on one of those apps like TaskRabbit or whatever. Just hire someone. It's a thing. Do it in the beginning, and then slowly you'll grow your fan base. 

MARK: Yeah, I can use machine learning to figure out every time I transition through a doorway. That sounds like a solution some of our friendly DevRel folks would come up with. I love it. 

STEPHANIE: Yeah, automation, hey. Well, today, in that theme, we are going to actually be talking about the power of serverless. We have an event coming up, and we've invited on Aparna Sinha, our director of product management, and Philip Beever, who is the engineering director of serverless. 

And this event is on May 13, and they'll be covering sessions from product, engineering, DevRel, and many more groups to learn about our serverless product offerings and show you how we're expanding serverless and how you can run apps quicker and more cost efficiently. So yeah, stay tuned. We're going to hear from the creators of the event, and they're going to dive into the future of serverless. 

MARK: Yeah, it's a really great conversation with Aparna and Phil, and we get a little bit more insight on the event. But also what Google is thinking about when it comes to serverless. What some of the customers are using with serverless, what are some of the thought processes. And then of course, we have a number of different serverless options. So talking a little bit more about what they do, what their direction is. It's just a great conversation. 

STEPHANIE: It is. And I know we have some Cool Things of the Week first, So let's go ahead and dive into those. 

[MUSIC PLAYING] 

so both of my Cool Things of the Week are around networking, the first being around our new launch in preview called the GKE Gateway controller. Now, the Kubernetes community announced the Gateway API recently. It's part of the evolution of Kubernetes networking APIs, and it unifies networking under a core set of standard resources based on some lessons learned from Ingress and Service Mesh. 

Now we have this gateway controller in preview, and this is our implementation of the Gateway API, which manages external and internal HTTPS load balancing for GKE cluster, or a fleet of clusters, and provides things like multitenant sharing of load balancer infrastructure, and you also get things like advanced routing and traffic management. So that's a little bit more specific to GKE, but another awesome tool that I just found out about was a very, very useful dashboard. It's part of the Network Intelligence Center, and you can see network performance for all of Google Cloud in a Performance Dashboard. 

Now, if you haven't seen Performance Dashboard before-- I actually talked about all of this in a previous episode-- but it provides packet loss and latency metrics for traffic on Google Cloud. That way, you get a bird's eye view on all of it, and you can plan your deployment, you can figure out if network issues are because of Google Cloud infrastructure or perhaps your own application implementation. So check out both of these. 

MARK: Yeah, I was about to say the Gateway API sounds super cool because better integration between the rest of Google Cloud and Kubernetes can make it a lot easier, especially if there's an automated want you to spin up those load balances. But the network dashboard sounds really awesome, just being able to see an overview of all that. So I'm definitely going to go check that out after this recording. I really love that. 

Well, I also went ahead and had two Cool Things of the Week. I'll try to keep it quick, but these are from some of our friends in DevRel. First up, we have a webinar, which is tomorrow. So if you're checking this out on the day it launched, you've got one whole day to prepare. But if not, I'm sure the content will still be available from our good friend Leah, who's talking a little bit more about how to use BigQuery and Looker together. 

So we all know BigQuery's super, super cool. Lots of great features there. But one of the things that always comes up is the next step, visualization. And there's so many cool things you can do with Data Studio, but Looker has just tons of amazing features, and we're definitely going to see more upcoming talks and conversations about how to integrate BigQuery and Looker. So if that's something you've been looking into, definitely recommend this webinar to get a quick overview from Leah about how to do more of that. 

And then the second announcement is this great little blog post from our friend Emma talking about Open Saves. So this is an open source interface that's been written between a few folks at Google and a few folks over at 2K that's really a great way to look at games and how to manage the save. 

And so game saves can be a very complicated thing because you can have potentially multiple kinds of saves, and so Open Saves is this interface that actually allows you to run it on GKE or Cloud Run, and then it uses a couple of different products on the Google Cloud side, like Memorystore or Datastore or cloud storage, and it just lets you abstract that away. So it's a really, really simple way to actually read and write saves for your gaming stuff. 

Highly, highly recommend checking it out. There's a link to the GitHub repo in the blog post as well, and it's just super cool to see. So for all the folks out there who are thinking about cloud gaming, this is a cool tool to try, and I'm really excited to see how it progresses. 

STEPHANIE: Yeah, it sounds really interesting to look into. And I mean, we just talked about a few things there. We have gaming, BigQuery, Looker, and then we have GKE and networking. So lots of different topics under the cloud umbrella that we just brought up. But one of the main topics of today that we're super excited about is, of course, serverless. We hear this term all the time, and so when we invited Aparna and Philip to come on, we were more than excited to learn about the event. So let's go ahead and jump into the main content. 

MARK: Let's do it. 

[MUSIC PLAYING] 

STEPHANIE: Aparna and Philip, thank you so much for joining us on the podcast. You both have done a tremendous amount at Google in the last seven to eight years. So why don't you go ahead and start by introducing yourself. 

PHILIP: Hi, everybody. I'm Phil. I lead the serverless engineering teams for GCP. I've been at Google for seven years, and for most of that time, I led various different teams of different shapes and sizes in our site reliability engineering group, our SRE group. That work was primarily focused on cloud. Before I came to Google, I spent most of my career designing and building infrastructure for high performance trading systems for a software vendor. I'm really, really passionate about serverless and about cloud generally and how it can really help our customers meet their business goals. 

APARNA: Yay. Hi, everyone, and thanks for having us, Stephanie and Mark. I'm Aparna Sinha. I lead product for serverless and developer products in Google Cloud. I joined Google eight years ago, actually on the consumer side of Google. And actually, that's when I first started hosting web apps on App Engine. Ultimately discovered containers and ultimately ended up joining Cloud to run product for Kubernetes. 

But then about a year ago, I realized that we really have to give developers something much simpler. And that's where Cloud Run and Cloud Functions really changed the game with serverless containers. And so I'm working in this space, and I'm so excited that we're finally able to bring the best of both worlds to developers. 

MARK: And I think we've already mentioned a couple of examples here of what serverless is and what it does and what it covers, but it's kind of a loaded term, too. So I think it'd be helpful to get started by saying what is serverless. 

APARNA: And I think a little bit of historical context is in order here as well. From the Google perspective, Google, as you know, is a completely developer-centric company. Everything is optimized for innovation in software. That's the kind of company that we are. And so naturally, when we talk about serverless, our serverless portfolio comes from that ethos. Developers at Google build world class applications. And there's no set up involved, they don't really need to know about infrastructure. It's completely out of their way, and we really prize that autonomy and that independence for our developers. 

So when we talk about serverless, we're the pioneers in this space. The first serverless product was App Engine, and that was born in 2008, and it basically introduced the core concepts of serverless, which are around source-based deployment, scaling to zero, paying as you go. And App Engine does that really nicely for web apps. 

But the big question is really, how do you provide that experience for all types of applications, especially for enterprise applications. And I think this is where the definition of serverless is being tested and redefined. And that's a lot of what we are going to talk about today and at our event, is the holy grail has really been that for the last decade, how do we bring these benefits to everything. 

So fast forward to today. Of course, we have an amazing offering in Cloud Functions that's really differentiated in terms of its rapid scaling, in terms of built-in observability, and again, that seamless developer experience that's at the heart of everything that we do. And it also uses Open Source. Again, one of these key pillars of the way Google works, bringing portability to everything we do. 

Functions are great, and they are fully serverless, and they adhere to that definition. They're perfect for lightweight processing. But it's still not the holy grail. We haven't accomplished that. And I think what's really unique about GCP today is that we've actually hit on that holy grail because we've expanded this developer ease of use in a way that no one else has with Cloud Run. And that's where serverless containers come in. 

Like Functions, it has that ease of use, but it's for heavyweight applications, for multipurpose web apps and large spec APIs, and really in the fullness of time, any containerized app. And that's where everyone's trying to get to. That's ultimately the definition of serverless. 

And the timing couldn't be better. If you look at the market, it's expected that 50% of global enterprises will adopt serverless by 2025. And it's a huge market. $20 billion by 2025, really accelerated by the pandemic and the need for application agility, the need for business impact. So the time could not be better. 

And we just see tremendous traction for serverless, with huge customers like Airbus and retailers, and even public sector. These vaccinations were getting, a lot of those websites and mobile apps are built on serverless as well. 

STEPHANIE: Yeah. And we've also just seen the serverless space and community mature so much over the last decade, even, going from 2007 and 2008 with App Engine, and then came Cloud Functions, and now we have serverless containers with Cloud Run. We've also had related developer tools and frameworks, like the Functions framework, which lets you write lightweight functions that run in many different environments, including Cloud Functions and Cloud Run. 

And so continuing with this trajectory and looking ahead, what do you envision as the future of serverless? 

APARNA: The power of serverless is if it can span not just digital native and cloud native, but also large enterprise use cases. And the power of it, at the end of the day, is the ability to bring your technical talent closer to the business value. And so there's a lot of technology behind it, and we talked about some of it, Stephanie, but at the end of the day, I think the vision that we have is really about enabling enterprises to do things that they needed to do. 

Like if you're a retailer, enabling curbside delivery. If you're a payment company, really bringing in real time information into that payments product that you have. And doing that requires that built in best practice, the security capabilities built in, and that developer-centricity. At the end of the day, what that does is really enable your developers to maximize the output and ROI for your business. And even more than that, it allows people that aren't developers to become developers. And so it up levels your talent pool. 

So I think that is really the power of serverless. And we talk about the technology, of course, that underlies this, and to signify this shift really from what it used to be. What it used to be is this narrow definition of kind of maybe event-based applications or simple web serving applications. Only greenfield applications. But there's a huge shift with what we've done with serverless containers. And so we're calling that next generation serverless. 

And there's really three technical aspects to it. One is, of course, that developer-centricity. That's a hallmark of Google, just the great developer experience. If you don't have that, I would argue you don't really have serverless. Second, which is the next generation piece, is the versatility. So expanding to beyond the limitations that serverless has had in the past. So not just functions, not just certain run times, not just web apps, but anything that can be containerized. And so I talk about that as versatility, and I think that's a hallmark of the next generation of serverless. 

And then third is really building in all the best practices from a security and DevOps perspective. And I think in our case, there's a very set methodology that we know works really well, and call it the Google Way from a SRE perspective. And Phil is actually one of the foremost experts in this area. And so we're building that into our next generation serverless product. 

So those are the three things. Great developer experience, versatility to cater to any apps, and then built in DevSecOps. That's the future, Stephanie. I think you asked me what the future of serverless is. So that's the next generation. 

STEPHANIE: Yes. 

MARK: So let's dive a little bit deeper into what those look like. And Phil, I'd love to get your opinion here because you've spent some of this time in the SRE world as well. Like, why are each of these-- the developer experience, kind of the versatility that comes with containerization, and the Google Way-- how are these really key pillars into, I guess, the future of serverless? 

PHILIP: I think there's a bunch of things that we've done in each of these pillars that both contribute to the overall offering, and also contribute to that serverless theme of allowing developers to concentrate on the things that they really want to do. And obviously the experience for how the developers interface with the platform and are able to use it easily is a really big part of that. And we've obviously put a ton of effort into it, but also we have really good evidence that it's working well. 

So in our usage stats, we find that 98% of new Cloud Run users are able to code and build and deploy an app on their first try, sometimes in even less than five minutes. Independently, our fantastic colleague Wietse Venema wrote a book published by O'Reilly about Cloud Run, and that happened independently of us doing it. 

Wietse's book-- if you haven't read it, you should go read it. Read it over my holidays this year and had lots of fun with it. It's a great book. And that happened independently, and it shows the kind of ecosystem that we're building and the enthusiasm that there is out there in community for this. 

We obviously do a lot of work to actually study and benchmark our developer experience, and the feedback that we get from that is really good. We have very high net promoter scores around that developer experience for Cloud Run. And also we're using Cloud Run both internally and externally to write applications ourselves. So just recently, we obviously did a lot of work with Apple to jointly create an exposure notification system, and some of the great engineers at Google worked on that in conjunction with our colleagues at Apple. 

There was a sort of shared sense of responsibility there to do something around the pandemic at around COVID and to provide a contact tracing solution for the world. And Cloud Run-- a really important thing about Cloud Run is it gave us the agility to actually create something really quickly without having to worry about the infrastructure or any of the underlying bits and pieces, and create a reference implementation that we could open source and share with the world. Super, super successful projects, and very exciting leveraging in the power that we've built. 

I think the second pillar we have is around versatility. And as Aparna mentioned, what we're looking to do as serverless evolves is really redefine it in terms of its versatility and add to that versatility over time. So we've seen that shift from a kind of source-centric world into the container-centric world with Cloud Run. We think Cloud Run is a tremendous place to run containers of any kind in a serverless way. 

I guess we envision in the future being able to run essentially any workload, no limitations. As Aparna mentioned, these serverless platforms have been good for greenfield apps that are new. Maybe not so great for the stuff that you're bringing with you or for brownfield work. We actually want to remove those restrictions so we can support those workloads, too. 

You'll see we have, for example, a program we're running at the moment with BigQuery, which is focusing on capabilities we've got across the products to leverage some of the great stuff we've got in Cloud Run and Cloud Functions to do things like ETL before you actually load your data up into BigQuery and how you can actually get those products working together. We actually think we're going to have a bunch of things that we learn from our customers through doing that that will feed into the roadmap for the future. 

Now, I mentioned greenfield and brownfield. Obviously, with that versatility, when people first think of serverless, immediately you think, this is a new exciting thing in the world of cloud, so it's for me building my new thing. Well, of course, if you're going to be building from scratch, we think serverless is the best place to do that. 

But more and more, we see brownfield applications coming to the serverless platforms. We see more and more customers doing lifts and shifts or wanting to do lifts and shifts of apps and databases that are hosting on prem, and starting to move them little by little to the cloud. And as they do, we learn more and more about it and more and more about the capabilities that we need to add into the platform. 

We've seen that as well with folks maybe moving from platform as a service products, like maybe Heroku or like Cloud Foundry, moving them into a platform like Cloud Run that gives the opportunity to scale to a much larger magnitude and to future proof and take advantage of all of those other benefits of running in GCP. 

And then obviously, as you mentioned, Mark, the whole building the Google Way thing. And this is something that I'm kind of passionate about, having spent a bunch of time in SRE. I'm super interested in making this platform as easy to operate-- or making the applications built on this platform as easy to operate as possible. And that's the real differentiator for serverless, really. 

And there's a lot of different ways in which how we do things at Google has really influenced what we are offering as a serverless product set. You could obviously start with a container. That's an abstraction that we've been using here at Google to package and run our applications for 15, 16, 17 years now. And obviously we've seen the entire industry get on that kind of bandwagon, if you like, and really adopt that primitive. 

But actually when we think about SRE-type practices and features, we have things like concept of services and revisions and how you can actually cut traffic over between them in the Cloud Run product, which really directly stemmed from the way that we do those things at Google and the way that we build reliable systems at Google and can tolerate failure in newly rolled out software as well. 

Obviously, if you use Cloud Run or you use Cloud Functions, you get to take advantage of Google's fantastic network. If you use our network load balancing as part of those products, you're actually using the same network load balancing infrastructure that we use to serve first party Google as well. So all of the stuff there around proximity to the user, around low latency, around the quality of the network service, around the security and the protections you come from that is just the same quality as you would get from first party Google. So there's a huge amount of mindshare and engineering that you can leverage there. 

And also as I mentioned, the whole Zero Ops thing. Things like auto scaling, fast scale back down to zero that allows you to get out of these cycles of very rigidly capacity planning and having to think about how much throughput is there on each individual instances and how many VMs of what size do I need to deploy and all of that stuff. Don't really need to think so hard about that stuff before. 

And obviously, the big thing here, as somebody who's spent some time running large scale systems at Google, is the fact that these platforms are automatically handling machine failure, zone failure for you, so you actually don't have to think too much about what the application is going to do when those things happen because the infrastructure that we used to Build Cloud and Cloud Functions is actually doing that for you. 

STEPHANIE: I find it very fascinating because there has always been this concept of a heavy lift and shift, or difficulty, or friction to move to the cloud, let alone adopt more of these containerized environments and serverless. But with these three pillars that we focused on, developer-centricity, versatility, and the Google Way, we're sort of opening the space up to, like you said, these brownfield applications. 

And then at the same time, I'm seeing not just the serverless space bourgeoning, but rapidly accelerating in the offerings that we're able to develop. Not just Cloud Run and Cloud Functions, App Engine, but there is Cloud Composer, Workflows, Eventarc. There's so much happening in the space these days to meet the needs of all of these different use cases, including data processing, et cetera. 

So when it comes to some of the customer use cases or the developers that have been using these products, what advantages are they seeing with our approach here? What are some of the examples of people using serverless? 

APARNA: When a customer is writing a solution to their problem, they're writing an application, there are many different services involved. And the pattern of using a set of services that complement each other but are very nicely integrated together so that the off carries over, the connection between services is easy to set up. That is an important part of operating in a serverless way. 

And so a lot of the services you mentioned are used very frequently along with our serverless Compute platform. Many, many customers are using it for data processing, batch processing. They're using it to build real time applications. I can give you a couple of examples, and a lot of them are very impactful, particularly in the time of the pandemic, as we were talking about. 

MediaMarktSaturn is a really great example of a global retailer based in EMEA which encountered a number of issues with their business model as a result of the pandemic. And so they had to move much more towards curbside pickup and so forth. And so they use serverless extensively as part of their thousand-plus stores, and they've seen a lot of customer spending shift to e-commerce, obviously, as many retailers have. 

And that has forced them to temporarily close their physical store fronts and push customers to shop online. And so this is a huge trend just overall in retail, not just for MediaMarktSaturn, but they're an extremely successful retailer because they are on the serverless platform. And they've derived tremendous benefit from being on a platform that is automated in this way and very cost effective when you see these huge demand spikes. 

So in April and June of last year, they saw 145% traffic increase across all their digital channels. And it's not something that you would normally be prepared for, but if you do have this architecture where you're serverless, actually it scales essentially to infinity. And your costs are very much a reaction to your demand. So if your demand goes down, you don't have to pay for things because you're not serving traffic at that point. 

So this is a really great responsive platform that is responsive to demand. But in addition, because we have that security and that DevOps capability built in, it's really easy to respond to changes in the market. So if a particular product's not doing well and you need to move to a different type of inventory system, that's something that you can shift your services rather quickly and reliably. 

And so MediaMarktSaturn has shifted by modernizing their applications and their website shop using Google Cloud, and it's really given them a very strong momentum for their online business, allowed them to scale. And that, in turn, has made them the third largest e-commerce player in Germany, which is a great testament to the type of result you can achieve, even in a very uncertain market. 

Thanks to Cloud Run in particular, they were able to bring new features and new applications in the hands of their customers eight times faster than before. And also, the reduced setup management and maintenance that was required actually helped them scale with their people and their costs-- and we hear this over and over again-- they achieved a 40% cost reduction. So great value for the business, both on the top line and the bottom line. 

Similarly, we have something going really with the retailers, I think, especially in EMEA. IKEA is a great example as well. Very similar. As they moved from on prem to cloud, they said, we're going to move to a totally different model, we don't want to be managing operations, we don't want to be having servers and building things up from scratch, let's have a really modern architecture. And so they went all in with serverless containers. 

In their case, they had a system which had significant inventory refresh rate. So their inventory about what furniture or what items were in stock in their stores was actually fairly stale. It would take three-plus hours to update. And so a customer would purchase something and then go to the curbside for pickup, and it would turn out that, actually, whatever that item was not in stock because the inventory was incorrect. 

As a sort of side effect, they were getting a lot of calls to their call center, and their call center volume was going up and their support costs were going up. And so with the combination of Cloud Functions, BigQuery and Cloud Run, they were able to cut their inventory refresh rate from three hours to less than three minutes, which is what I mean by having real time insights and having real time data. 

It's so important to reducing your support costs, to customer satisfaction, to actually making more sales. And this is what this platform enabled IKEA to do. And so it's a really great story, and I think it nicely illustrates the ability to use different services together, like BigQuery and Functions and Cloud Run. It's very, very common to do that, and it's a really nice pattern, where it has all of those common capabilities, that you can scale with the demand, both up and down, you can cut your costs as a result, you can really deliver real time applications that have current data and information baked into them. 

Another customer is Mabl, and they use Cloud Run for its machine learning, test automation service, and that enables them to create reliable, repeatable tests in seconds. A big customer is Airbus. We talked a little bit about that at the beginning. Airbus basically processes a lot of images using the serverless platform. And so that's another one that's a kind of data processing example and serves large amounts of imagery data using Cloud Run. 

One of the ones that I'm very close to is Veolia. Again, a European company. This is kind of a climate change and utilities company. So something that's very top of mind for all of us these days. They're really an exemplary customer in terms of what they do. It's a French company, and they use Cloud Run to remove basically all the burden of managing a platform. And so they're all in so that they can focus on the impact they want to have on the Earth, as opposed to worrying about the infrastructure. 

And the list goes on and on. There's obviously a lot of digital native companies, gaming companies, media companies. That's a very common type of industry for serverless. 

MARK: Absolutely. It's always great to hear how these different customers are kind of continuing to innovate. I loved what you said about IKEA as a great example of being able to really, really improve the way that not only their business runs, but also the consumer experience of what that looks like and how serverless really enables that. 

And so of course, it makes sense that we're talking about serverless here and there's an upcoming event, The Power of Serverless. So I would love to hear a little bit more about what the event is, what's going on, and then can we get a sneak peek at some of the things that people are going to be talking about at this event. 

PHILIP: We have a whole load of things going on. So really, we wanted to talk a little bit about this redefinition of serverless that we've already talked about in the podcast here. We want to keep the surprise up for the day in terms of the things we actually announce there. What I can do is talk a little bit about the themes and maybe some of the stuff that we've launched over the last few months and how that plays into those various different themes. 

As you've heard us say time and time again, the strategy that we're pursuing here is one that is all about bringing more and more workloads to serverless as the platform, and continuing to double down on those best in class experiences for developers and all kinds of practitioners on the platform, too. So over the last few months, you've seen us ease the path for developers by launching things like really tight integration between Cloud Run and the Cloud Code products. 

You've seen us launch build packs across a number of different programming languages. The environments that make it really super simple for folks to actually get started with building containers that they can then deploy extremely easily onto Cloud Run. So you're going to see more of those kind of developer experience features and those things that just make it simpler for folks to adopt Cloud Run and Cloud Functions and do that kind of quick innovation that Aparna just talked about in many of those customer success stories. 

Versatility-wise, we're adding capabilities across Compute, across networking, across the orchestration products that we have. So on the Compute side of things, we've recently launched this feature called min instances. It's actually a really popular feature. It's one where customers can actually take advantage of serverless, but also specify a kind of minimum amount of compute that they want to keep warm in the background, which can reduce the kind of initial latency of actually serving a request. 

We've also had a bigger instance types. So again, extending the types of workloads that you can support for more memory or more CPUs in a particular container. We've also now got Cloud Run deployed in all of the regions where GCP is available. So anywhere you find a GCP region, you'll now find Cloud Run. And again, that's all about availability of the products and proximity to the users and everything else. 

On the networking side, we've been working pretty hard to add support for streaming workloads on the web. So we've added support for WebSockets, we've added support for gRPC and server-side streaming there. And that really unlocks a whole bunch of applications that folks can now build on Cloud Run that would have been more difficult to build in the past. Anything that requires a real time linkage, so any sort of social feed, collaborative editing, multiplayer games. Any of those kind of streaming things, streaming APIs, even, or chats or something like that, those are all things that this capability around WebSockets or gRPC streaming opens up for us. 

On the orchestration side of things, we've actually had some pretty big launches in the last few months around the next generation orchestration products. Those things are all about providing really flexible, really debuggable NoOps kind of ways of integrating existing building blocks you've got elsewhere into really meaningful applications. So the product launches there have been things like our Workflows product, which is about composing different functions or different endpoints that you already have into a kind of higher level function, if you like. 

And also our Eventarc, our event architecture, which is a sort of loosely coupled, strongly typed events platform which currently has integration with over 50 different services on GCP for providing events. On the Cloud Function side of things, we've added a bunch of language support. So we added Ruby, we added Java 11. This is all about reaching a larger community of developers and being able to support more and more stuff coming to the platform. 

And we also have a bunch of networking integration features that we've added to Functions, too. So we've added support for our VPCSC features, which is obviously strong, enterprise-grade security there for when you're building those Cloud Functions products and integrating them with other bits of your cloud infrastructure. 

That's the kind of brief tour of what we've done in the last few months, but I think the important thing to note there is the themes that I'm talking about are the ones that we're going to keep carrying forward. So the ones around the versatility, compute capabilities, networking capabilities that we add to the platform, that ease of use around the developer experience, and that kind of higher level of value add in that orchestration and function space. Those are the kind of things where you're going to see us continuing to bring stuff to the market over the next months and years. 

APARNA: We will have some exciting announcements, obviously, to make on the day. So please do tune in for that. And on a big area of focus is this built-in security, and so there'll be a number of live demos as well as part of that day, where we'll showcase security, the built-in ease of use with networking. We'll demonstrate all of that as well, so I hope folks tune in for that event. 

STEPHANIE: Yeah, that was a brief overview, as you said, Philip, but there is so much happening around the space. So it's really exciting to hear about all of these upcoming launches and themes. I'm just very impressed with how we are strengthening all of our products through security networking, making it more available and accessible to developers of various languages. The regional support across all of our regions is very exciting just to showcase and reflect the community support and the excitement around the serverless space. 

But one question that we inevitably get about serverless is how to choose the right product when it comes to this. You just listed a bunch, like Eventarc and Workflows, which are newer, but even at its core for some of our Compute products, when should developers choose App Engine over a newer product like Cloud Run, or vice versa? 

APARNA: In reality, what I find is that this doesn't end up being a problem for customers. I think it's something that when you learn about the products, there's quite a bit of, well, what is this for and what is that for. And so that's a place where we definitely want to help customers choose the right thing. But when they end up building their applications, actually, all of these, it's different tools in your toolkit, and you end up using the right one for the right pieces. 

So Workflows and Eventarc, they fit really, really nicely with Functions. So events trigger functions, or events can trigger Cloud Run. And Workflows are a way to customize some of the logic that your application has by pulling in many different services from GCP. So it's a very natural way in which customers use these things together. 

And similar things apply also to Cloud Run and Cloud Functions in App Engine. These are sort of different ways of doing things. App Engine is a source-centric, turnkey, PaaS approach with pretty much a fully batteries-included model. And as I said in my early days in Google, I'm one of the users of App Engine, and it does what it does really well, which is a more fully integrated batteries-included experience for building web apps. It's actually really, really great. 

And as we talked about, we are working on expanding serverless to cover many more applications. And this is where Cloud Run comes in. And so for customers that have a heavyweight application that requires that full versatility, it's something that you might otherwise consider running in a VM, or maybe you're moving it from on prem, or like I said, it's a heavyweight API or multi-microservice type of application. That's perfect for Cloud Run. A lot of it is also data processing. 

And so it allows customers to have much broader support for workloads, much more versatility. You don't have to worry about what language, what runtime. It's basically a container. So if you were to say, what's the catch-all? That would be the best place to start, is with Cloud Run. And we've seen tremendous growth as a result. 250% growth in deployments on Cloud Run just over the past year. 

So at the end of the day, I don't think you can go wrong in choosing to run your application on App Engine or Cloud Run. But if you want to get a little bit more technical, App Engine is really ideally suited for developing websites. And that's what I've used it for because it's got built-in static file hosting as a part of that. Any other use case that could be deployed that's broader than that, the best place to start is Cloud Run. 

And many customers can use both of these together, and of course, the other integration products in the serverless suite. And of course, the other services, like BigQuery and Analytics. They go very well together. 

MARK: And it really sounds like that's the key to the whole thing, is that there's always going to be a wide variety of solutions that you can use to build whatever it is you need to build. And some pieces might be better aligned with others, but you don't necessarily need to buy all into one piece. You can use these different tools, and in fact, they integrate really nicely, right? 

APARNA: That's right. 

MARK: There's a ton of different resources out there. Obviously, this event is going to be pretty exciting, The Power of Serverless, because we're going to talk a little bit about what some of these tools are, what some of their specialties are, and how to learn more about them. When is the event, and where should people go to figure out more about it? 

APARNA: Yeah, so the event is on May 13 at 9:00 AM Pacific time, and it will have live Q&A. Visit our Cloud on Air site to register for the event. And we really look forward to interacting with you. We'll have lots of our serverless experts on hand. Many of the product managers, the engineering leads, and of course, our developer advocates. And as I mentioned, there will be hands-on demos, new launch announcements, a lot of focus on security and networking, some of the new integrations we've got. 

We'll be demonstrating, as Phil mentioned, some of the features that we've recently launched as well. So on the security side, Secrets Manager, Binary Authorization, IP. We'll have a huge focus on our Cloud Functions audience with all the new run times. And of course we'll do some demos showing the breadth of Cloud Run. So all of that. 

It's not actually a very long event, so should be very consumable. There are a couple of different tracks. You can pick one or more because again, it'll be available online to watch this event later as well. So we really look forward to interacting with folks. 

STEPHANIE: Yeah, if everyone wants to be the first in line to learn about these exciting launches, then be sure to register. We are definitely going to be including the link in our description on the show notes. So take a look at that. We have covered a lot of ground today, and we have talked about some of the most exciting things happening in serverless at Google Cloud. Is there anything that we've missed that you'd like to mention before we wrap up? 

PHILIP: I think we've covered it really well. It's a really exciting space, and I think we've got some really exciting offerings coming soon. Hope to see some folks there. 

STEPHANIE: Yes. Come be a part of the event to redefine serverless. And once again, I want to thank Aparna, Philip for being here on the podcast. We're so thrilled to see the event go live, and hope to have you back on the podcast soon. 

APARNA: Thank you, Stephanie. Thank you, Mark. 

PHILIP: Of course. It's been a pleasure. Thank you. 

STEPHANIE: So we've been talking about serverless for years now, and it's become somewhat of a buzz word, but I do think that's why this conversation was great and very needed. Aparna mentioned redefining serverless now. It's not just for greenfield applications anymore. More and more companies are adopting it to scale to larger magnitudes and have more productive engineering teams. 

MARK: I think that's one of the coolest points about Cloud Run, is it brings the ability to run on serverless to something that you don't have to necessarily architect heavily for. So App Engine and Cloud Functions and many other solutions out there are really, really great because they're serverless and they let you kind of completely abstract away the infrastructure, but then you're usually playing in a specific kind of sandbox environment or you have, obviously, a framework that you have to adapt to. And those kind of things can be a little bit challenging, especially when you're talking about migrating older applications. 

So Cloud Run being able to just run containers is super, super amazing. And I think already that Cloud Run is the future of serverless, so when they're talking more about all the great features that come to Cloud Run in the future-- and they'll talk a bit more about that at the event as well-- it's so cool. I love to see it, and I think Cloud Run is just super amazing. 

STEPHANIE: Yeah, and I think it's key to note that serverless can be defined in many different ways, but in this case, we're targeting application developers and those who do want to be able to deploy their code quickly, in particular if they're running on containers or interested in moving towards that model. Then we've provided a very streamlined path for developers to start having a better experience on products like Cloud Run. 

And to be honest, when I was listening to the conversation, I was a little surprised by the data that most of our users are using the UI versus CLI, which hammers down the idea that the developer experience is becoming very important and varied in some ways, and there's also a need to expand beyond just our typical application hosting use case. But now we're seeing the prominence of needing to support batch and ETL workloads for data processing, or even doing things like connecting APIs through Workflows and some of our other newer products, like Eventarc. 

MARK: Yeah, I mean, I think we've talked a couple of times on here about how Google Cloud does everything in the UI you can do with the API. I feel like we take it for granted sometimes because I do like using the UI. I spend a lot of time in there and doing things, and while sometimes it can be very convenient to use the APIs and the client libraries to automate things, sometimes it's just nice to use the UI. 

And when you're working at a company with hundreds or even thousands of developers and other technical practitioners who are working with the cloud, it's really nice to be able to have both. So I really definitely appreciate that ability in order to kind of manage all the things from the UI and the CLI. Really just comes down to preference. But then seeing all the cool things that are coming up is just that much more exciting, too. 

STEPHANIE: Yeah, exactly. And the event, The Power of Serverless is going to be where you are going to find out about what's coming up on our roadmap and what we're doing currently at Google Cloud for serverless. So it's on May 13, 9:00 AM Pacific. We're going to have the link for the registration in the show notes below. And you're going to be hearing from Aparna, our other PMs, and our VP of product, Pali Bhat, for our keynote. 

There's also going to be sessions on building internal serverless enterprise apps, real time data processing, lifecycle of an application, how to develop cost efficient apps, and take part in a serverless Q&A. 

MARK: Sounds like a lot of great content, and a lot of great speakers, too. Definitely looking forward to check out the event. So if you all can make it, definitely recommend checking it out. 

STEPHANIE: Yeah, please do. And thank you, everyone, for listening to this episode of our podcast once again. And we are going to see you all again next week. 

MARK: Bye, everybody. 

[MUSIC PLAYING] 

Bye, everybody. So good to see y'all. 

STEPHANIE: Can you imagine if that was your podcast voice and you did the entire episode in that voice? "Hey guys, it's Mark. Welcome to the GCP." 

MARK: Super excited talk here about BigQuery and Looker. 

STEPHANIE: So it's a Southern one, too? 

MARK: I can't tell where it was going. Was it high pitched, was it Southern, or was it both? 

STEPHANIE: It was both, and we didn't discover this until this very important moment that we just had.