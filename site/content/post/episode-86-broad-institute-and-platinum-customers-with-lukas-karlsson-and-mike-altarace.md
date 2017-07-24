+++
audioDuration = "00:00:00"
audioFile = "Google.Cloud.Platform.Podcast.Episode.86.mp3"
audioSize = 0
categories = ["Customer", "Big Data"]
date = "2017-07-19T01:07:49Z"
description = ""
draft = false
image="/images/post/BroadInstLogo.png"
episodeNumber = 86
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Broad Institute and Platinum Customers with Lukas Karlsson and Mike Altarace"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/gbxZTNCr7QY"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/6o9cc4/episode_86_broad_institute_and_platinum_customers/"
+++

[Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic) are joined this week by [Lukas Karlsson](https://twitter.com/lukwam) from Broad Institute
and Mike Altarace from Google Cloud Platform to discuss the Platinum Customer relationship with Google Cloud Platform.

<!--more-->

##### About Lukas Karlsson

[Lukas](https://twitter.com/lukwam) has been working at the Broad in various roles over the last fourteen years or so. 
He now run our cloud architecture and strategy and works in developer relations, advocating for the software developers who consume our services. 

##### About Mike Altarace

Mike has been a Strategic Customer Engineer (SCE, pronounced Ski) assigned to the Broad Institute for over a year. 
He's been working with Broad on all manners of operating their GCP environment. All is on the table, technical issues, billing, shared events, certifications.

##### Cool things of the week

- Google Cloud Platform now open in London [blog](https://cloudplatform.googleblog.com/2017/07/Google-Cloud-Platform-now-open-in-London.html) [gdpr](https://www.blog.google/topics/google-cloud/google-cloud-our-commitment-general-data-protection-regulation-gdpr/)
- Container Engine now runs Kubernetes 1.7 to drive enterprise-ready secure hybrid workloads [blog](https://cloudplatform.googleblog.com/2017/07/Container-Engine-now-runs-Kubernetes-1-7-to-drive-enterprise-ready-secure-hybrid-workloads.html)
- Marvin is a go-kit server for Google App Engine [github](https://github.com/NYTimes/marvin)
- Google Container Builder Part 1 (Cloud Rolling Update) [youtube](https://www.youtube.com/watch?v=iXvFhwpgitM&feature=youtu.be) [podcast](https://www.gcppodcast.com/post/episode-79-container-builder-with-christopher-sanson-and-david-bendory/)

##### Interview

- Broad Institute [site](https://www.broadinstitute.org/)
- Google Cloud Storages [home](https://cloud.google.com/storage/) [docs](https://cloud.google.com/storage/docs/)
- Pre-emptible Virtual Machines [site](https://cloud.google.com/preemptible-vms/) [docs](https://cloud.google.com/compute/docs/instances/preemptible)
- Google Cloud Platinum Support [support](https://cloud.google.com/support/)
- Customer Reliability Engineers [podcast](https://www.gcppodcast.com/post/episode-72-customer-reliability-engineering-with-luke-stone/)
- Gaining full control over your organization's cloud resources (Google Cloud Next '17) [youtube](https://www.youtube.com/watch?v=gE_8zDoCY84)

<div style="text-align: center">
  <a href="https://www.broadinstitute.org/"><img src="/images/post/BroadInstLogo.png" style="margin: auto;"></a>
</div>


##### Question of the week

If I want to run a single node development Kubernetes cluster, and I don’t want to pay for a Network LoadBalancer as well - how do I expose services?

- NodePort Services [docs](https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport)
- Configure a static IP for a Ingress Service [docs](https://cloud.google.com/container-engine/docs/tutorials/http-balancer#step_5_optional_configuring_a_static_ip_address)

##### Where can you find us next?

Francesc will be at the July [GoSF Meetup](https://www.meetup.com/golangsf/events/240173664/). 

Mark will be speaking at [Pax Dev](http://dev.paxsite.com/) and then attending [Pax West](http://west.paxsite.com/) right after.

{{< transcript "FRANCESC: Hi, and welcome to episode number 86 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy and I'm here with my colleague, Mark Mandel. Hey Mark, how are you doing?" >}}

MARK: I am good. How are you doing? 

FRANCESC: Very good. Back from Denver for GopherCon, enjoying the beautiful weather in San Francisco while you are in-- 

MARK: Very warm weather in New York. It's lovely here. 

FRANCESC: Very, very, very, very warm weather in New York, I'm sure. 

MARK: I feel like it's appropriately warm. I really like warm weather. San Francisco is never quite warm enough. 

FRANCESC: Yeah, yeah, yeah, I disagree. 

[LAUGHTER] 

But anyway, today we're going to have a really interesting conversation with actually two people from two very different areas. One is a Googler and manages Platinum customer account. And the other one is an Engineer from Broad Institute, which happens to be a Platinum customer. 

And they're going to be telling us all about what does it mean to be a Platinum customer, what are the benefits, what kind of things they do. It is really interesting. We've been having a couple episodes on SRE and CRE, and how customers and Googlers partner into their ventures. So we're going to keep on talking about that, basically. 

MARK: Yeah, yeah. No, it's a really interesting conversation about the multitude of ways that Google Cloud Platform and Google itself can help customers of ours to help be successful, which is quite cool. 

FRANCESC: Yeah. And some cool stories at the end of the episode. And at the end, after those cool stories, we'll have the question of the week, as usual. And this time comes from GopherCon. Actually, someone came up to booth, the Google Cloud Platform booth that we had. 

And they asked a question about how to do it, to basically expose a Kubernetes service without having to pay for a load balancer. Which makes sense only for very tiny clusters, for like QA and stuff like that. But it is definitely a cool idea and good to know how to do it. So we'll cover that at the end. 

MARK: Cool, all right. Well, why don't we get stuck into our cool things of the week? 

FRANCESC: Sounds good. The first one, even though it's about Europe and I am definitely European, it is about something that I do not know that much. So I'm going to let you go and explain to us what this really means. 

MARK: Cool. All right, the top of the story is that we now have a new region opened in London. So another region in urban Europe, which is pretty cool. We have a few more still coming in Finland, Netherlands, and Frankfurt. 

FRANCESC: Nice. 

MARK: And we've got a variety of products from there, from Autoscalers to Container Engine to App Engine to Data Lab, et cetera. I think the interesting part here-- and I am definitely not a lawyer, so I would redirect you to the show notes so you can read the article properly-- we did write a blog post recently announcing, basically, our commitment to the General Data Protection Regulation, which takes effect in May, 2018. For those of you who aren't familiar, it's basically privacy legislation that goes into effect across Europe. And so we want to make sure that that's good for all our European customers. 

Again, I'm not a lawyer. So I'm going to redirect you to the blog post to read through it all. It will be in the show notes. But this is just one more step in that direction, just to say, hey, we take this really seriously. So we're opening our region in London, and we're also making sure we're compliant. 

FRANCESC: Our second cool thing of the week, and this one, I tweeted about it. Because as soon as I saw it, I thought it was really, really cool. It is our friends on "The New York Times." And they were talking about how to continued deployment for App Engine and Container Engine. And they open sourced all of the code, which is really cool. 

MARK: We'll link to it in the Show Notes. We'll find it. 

FRANCESC: Yeah. And now they open-sourced something else. This time, about Go. And it's about how to use Go Kits on a page in standard environment. So with Go 1.6 or Go 1.8 in beta, currently. 

MARK: So for those who don't know what Go Kit is, I have a vague idea, I'm not entirely sure. Why is Go Kit so cool? And why is it cool that it's on App Engine? 

FRANCESC: Go Kit, basically, it allows you to make your services more robust. It is a micro service framework for Go. And it manages things like making sure that you have monitor and you're able to instrument all your endpoints and security, and even things like, well, if a server is down, you should not keep on trying to send requests all of the time. So like, financial back-off and all of these things that you need to take care when you're writing for past architecture with micro services. 

All of those things are available in Go Kit. Now, the problem is that App Engine has some limitations on what you can do. And one of them is actually how you get an HTTP connection to the outside. 

MARK: Got it. 

FRANCESC: So basically, they adapted it so you can use App Engine and Go Kit together, which is really cool. So if you're interested, if you're running Go on App Engine, I'll definitely ask you to go have a look. Because there's actually really interesting stuff. 

MARK: Well, we talked last week about how Kubernetes 1.7 was released. So this week we're talking about how you now use it on Container Engine, which is super, super cool. 

FRANCESC: And super, super fast. 

MARK: And super, super fast. Yeah, it's amazing how quickly these come through. As well as there's a couple of other interesting things in here, just for GKE releases, so we've got like an order repair beta for if nodes have any issues. We have new regions, and they all have Container Engine, which is great as well. 

And we've also allowed us to have internal load balancing as beta as well, for Kubernetes and GKE inside Google Cloud Platform. So there's a bunch of new features that are also available. Not just Kubernetes ones, but GKE ones that have come along with this release as well. 

FRANCESC: Really cool. And the last cool thing of the week before the interview is about Container Builder. And we did an episode on Container Builder. It was episode 79. 

And this time we have a video by one of our teammates, [INAUDIBLE]. I think it's going to be a long series because it's called "Builder, Part One." But it's the first episode of a series. And this one covers how to do rolling updates with Container Builder. And it's only five minutes. So if you use any of these or you're curious, go check it out. 

MARK: Awesome. Well, I think that's plenty of cool things. 

FRANCESC: Yeah. 

MARK: Why don't we go chat with our friends Lukas and Mike, and talk all about Platinum customers and Broad Institute? 

FRANCESC: Sounds good. Let's do that. 

MARK: Today I am delighted and overjoyed to have two fine Fellows joining us today. We have Lukas Karlsson, Cloud Architect and Developer Advocate at Broad Institute. And as well, we also have Mike Alterace, who is a Strategic Customer Engineer here at Google Cloud Platform as well. Thank you so much for joining us. How are you both doing today? Lukas? 

LUKAS: Great, thank you for having us. 

MARK: Excellent. Mike, you're doing well as well? 

MIKE: Hey, guys. Doing fantastic, thanks for asking. 

MARK: Wonderful. 

FRANCESC: Yeah, thank you for coming. 

MARK: Yeah, excellent. So super excited to have you on the podcast to talk about both Broad Institute and also being a Platinum customer, and what does that actually mean? But before we do that, why don't we just hear about both of you? Lukas, why don't you tell us a little bit about yourself and what you do at the Broad Institute? 

LUKAS: Well, I've been at the Broad for about 14 years or so. So I've had quite a few different roles over that time. But right now I'm responsible for our cloud architecture and strategy. And I also am filling a role as Developer Advocate, where I try and improve the success of all of the developers within the Broad, and some external who try to consume our services. 

FRANCESC: Cool. And for those that do not know what it is, in like, a very short sentence, what is the Broad Institute? 

LUKAS: The Broad is a genomics research institute funded primarily by government grants that focuses on the analytical side of biology and chemistry. So we were one of the major contributors responsible for the Human Genome Project. And now we are focused on proving the value of the genome by discovering therapies and tools that improve health and science. 

FRANCESC: That sounds pretty awesome. 

MARK: That sounds pretty awesome. And Mike, what do you do? 

MIKE: Yes, hi. I'm the Strategic Customer Engineer that actually is assigned to the Broad Institute. That's part of our Platinum Support Service that we offer for a Strategic customer, someone like myself, that is assigned specifically to a large customer such as the Broad. 

FRANCESC: So you are a Googler? 

MIKE: I am a Googler. 

FRANCESC: Good. 

MIKE: I'm actually based out of Reston, Virginia. We are a worldwide team. We have a presence across the globe. And I am here, and luckily in the same time zone as Lukas, on the East Coast. 

MARK: Excellent. All right, so why don't we start on the Broad Institute side and then we'll come back to the Platinum customer side of things. I am sure we will find time to switch in between. But OK, so it sounds like Lukas, you do a lot with very large amounts of data. Do you just run on GCP? What does this pipeline look like as you do these large-- it sounds like-- data calculations of some kind? 

LUKAS: Well, we have a really wide variety of projects going on at the Broad. So anything I say about what we're doing for one project is likely different for some other project. We have users in most of the major public clouds right now, including Amazon and Google. 

And certainly, data is probably the biggest thing for us. So when I look at our consumption of services in the cloud, more than 50% of what we consume is data storage. And probably a little over a third of it is for Compute. And everything else is things like monitoring and SQL services, and that sort of thing. 

MARK: Cool. So what products do you use on GCP? 

LUKAS: So on GCP we are, as I said, a big storage customer. We're using some of the global and multi-regional and regional buckets primarily. Although we're sort of moving towards some of the Nearline and Coldline storage as well. We do a massive amount of Compute, Parallel Compute. 

So we run jobs that, at times, use, let's say, tens of thousands of CPUs simultaneously. And so we're a big customer of the preemptable VM service. In fact, we were, I believe, Google's blog announcement customer for that service. 

MARK: And so just as an example, what would you be using these things for? You said you have a wide variety of products. But I'm quite curious at a concrete level, what you'd be doing? 

LUKAS: So the most common thing that we do with computing is we do data analysis. So we have all these instruments that are sequencing DNA and generating various kinds of raw data from images to other sorts of data files. And we run these pipelines against them, which basically looks like potentially a Python script or something. That reads in some raw data runs some Unix tools against that data, and then takes the output from that first step and makes that the input of the next step. And then flowing through a pipeline of steps to generate some certain kind of output that helps answer some particular genetic question about the data. 

FRANCESC: Nice. So I guess since we have-- I was going to say-- broad idea-- 

[LAUGHTER] 

Jokes. Maybe we can talk a little bit about the fact that you mentioned that you are a Platinum customer. What does this mean? Maybe we can get Mike to answer this question. 

MIKE: Sure, yeah. So a Platinum customer is a Strategic Customer for Google Cloud Platform. We deem those customers to be of high important to us as a cloud provider. And we want to make sure they get the utmost experience when it comes to using Google Cloud Services. 

And as part of that, to make sure that that's really happening, a SCE, a Strategic Customer Engineer, like myself, is dedicatedly assigned to those customers. And in a way, we are the constant from the technical perspective that they have in Google. I'm like their technical ambassador, bridging all the different groups within Google Cloud, the PMs, the engineering, the operationals, the TAM, the sales support itself. 

And through those providing technical advisory, product influence, and assistance with operations. So for example, as Lukas mentioned, there is a massive amount of usage when they kick up those workloads. As well, we have teams be behind that are kind of watching it and looking and making sure everything works properly and as it should be. And through our relationship with Lukas, myself, and Engineering, we are always making sure that these things are ticking away like they should be. That's one example. 

FRANCESC: So now I'm curious about, how are you different or similar to CRE's, Customer Reliability Engineer? 

MIKE: Yeah, that's a fair question, a very good one. I guess the main difference is that we have an account-wide relationship that is continuous and constant. I'm always going to be there, even there's going to be one or more CRE engaged, there's always going to be a SCE that oversees a technical aspect of the relationship between Broad Institute and Google. So no matter what, anything that has to be a technical aspect of those relationship, the SCE's going to be involved and make sure everything is moving in the right direction and doesn't go orthogonal. 

So there are going to be multiple engagement that are in technical nature, through CRE's, through professional services organizations. But as a SCE, buck stops here when it comes to the technical aspect of the relationship. And I'm always going to be there to make sure it's working out the way it should. 

MARK: So actually for two things. One, when you say SCE, you mean an S-C-E? That's just like-- 

[LAUGHTER] 

MIKE: Exactly. Carl, my manager, is the one responsible for coming up with the SCE acronym. So we actually have a ski lodge in the Mountain View office with skis and fake snow and we try to name all of our services and offerings to be kind of ski related. So our weekly report is called the Snowboard. 

MARK: There's a whole theme. That's fantastic. 

MIKE: Ours is SCE Camp. 

LUKAS: Ours is called the Broad-cast. 

FRANCESC: The Broad-cast, that's really good. 

MARK: Oh wow, nice. 

[LAUGHTER] 

FRANCESC: I like puns. I like it. 

MARK: Yeah, pun-tastic. But OK, so Mike, you were talking about having a continuous engagement. What does that look like? Do you have weekly meetings? Are you are in touch every day? How does that work? 

MIKE: Totally. We have scheduled weekly cadences across multiple teams within the Broad. Lukas, of course, is a major part of it. But it also means Hangouts and just a [INAUDIBLE] and ad hoc situation, where we just get on a Hangout and chat and discuss things. 

So if something needs to be addressed, either from operation, product guidance, connecting to a PM, I get hit by the Broad or I hit the Broad. And we just have an impromptu conversation about it. So the personal and the trust aspect of the relationship is key fact to what we consider being a success, and making sure everything works and reducing their anxiety about using the platform. 

MARK: So Lukas, I was going to ask you and I think you were about to jump in, what does this look like from your side? 

LUKAS: Mike has open office hours that he provides via Hangout, so that anyone at the Broad who is using GCP has access to Mike. And in addition, we have an internal Google group of all of our GCP users, and an internal Slack channel of the same users. And Mike is involved in both of those. 

So many times a user will ask something in the chat room or on the mailing list. And their response is oh, Mike can help with that. Just reach out to Mike. Or Mike will even see these things because he's periodically active on these channels with us. So he's very much integrated as a member of our team, an extended member of the Broad's Google support team. 

FRANCESC: Nice. So that sounds awesome. And I guess that many of our customers that are out there wondering, how does this happen? How did it start? 

LUKAS: The way we got onto GCP in the first place is because we were already a GCP customer. And as we began moving into the cloud and exploring the multiple offerings out there, the G Suite integration with GCP, in that it's using the same identities. And we've already dealt with the whole onboarding and offboarding process of our users. 

So that since someone leaves the company and their G Suite account is disabled, that means they also lose access to all of the GCP resources that they would have had. So that's been compelling for us. And that sort of is one of the contributing factors to us using GCP. 

And certainly over the last four or five years that we have been a GCP customer, our usage has grown drastically over that time. And sort of the level of relationship that we need to have in order to be able to support that has grown over that time. So I actually can't imagine using the services at the scale that we use them today without having Mike involved at this point. And it's hard for me to remember what it was like before we had him. I don't really like to think about it. 

MARK: So from your side, Mike, how did that look for you? How did you get involved? What was the onboarding process for you? 

MIKE: Yeah, the tight relationship between myself as a SCE and the customer means that the onboarding process is almost like me doing a full research about the customer, their usage, reading up all the internal documentation that we had relating to the history that we had with Broad before me joining, and just going and drilling as deep as possible around their usage, their issues, their support cases, their meeting notes. Everything I could find around the background of Broad and Google interaction, I consumed it for a period of time before I got engaged. 

And of course, from that point on, I was introduced to Lukas. And slowly, as time went by, got introduced to other members of Broad Institute. And as issues came up, that was another opportunity to learn even more and dig even deeper about things that they do. In particular, for example, Broad is a big usage of our genomics API. 

So through the Broad, I actually got a lot of opportunity to learn and understand how our genomics API works. I got some data samples. Then I ran some of the same workloads that the Broad is running by myself on our genomics API, so I can get a better understanding of how the things that they do operate on our side, all the kind of pain points they're experiencing so I can provide better assistance and better understanding when things happen too how to quickly make it solve as quickly as possible. 

LUKAS: Then another thing that Mike does that's really helpful is he sees all of the activity on all of our tickets. So even if it's like, in the middle of the night and I go and submit a ticket about some issue I just discovered, when I chat with Mike in the morning, he's certainly aware of that. And it's not like I have to bring him up to speed on something that just happened. 

He has full visibility into everything. So even times when users within the Broad submit tickets that I don't know about, Mike has visibility into that. So he can sometimes make me aware of issues that I was not aware of previously. 

MIKE: And having that additional context on the, I guess, almost like the metadata, on the fact that Broad is a large customer in what they're doing and what are the typical issues that they have. The ability to overlay that when issue comes up and communicate that to our back end, to engineering, to support, to PMs, whoever, makes the resolution and the experience for the Broad much better and much more fluid than if it has to be rediscovered every time there's an issue. 

FRANCESC: So I'm curious about you mentioning that you're able to file issues and that you might get them, basically, directly. Are those issues filed the same way as any other customer? Is there a special relationship that you have? How does this work? 

MIKE: Yeah, from the back end it's the same support mechanism as all of our other customers. It's just the fact that I'm tapped in right to the vein of the Broad activity. So I see that in real time, as it happened. And if I find a place that I can grease the skids, so to speak, and make things work a little bit more smoother by providing additional context, I immediately get on that. 

LUKAS: Mike, should we talk at all about the issue tracker here? Like, and how we have additional visibility there? 

MIKE: Oh yeah. That's actually a very good point. Right. So in addition to just a general support ticketing system, we actually also provision Broad as partner to our internal Buganizer system. So Broad a unique component within Google's internal bug-tracking system, which is a way to get even deeper penetration and understanding of technical issues that are pertaining to both sides. 

So Broad can talk directly to, for example, Google Genomics API engineers on specific issues through the additional system of the Buganizer. 

MARK: So I'm putting on my hey-I'm-a-GCP-customer hat. And I'm thinking to myself, this sounds amazing. I want what you all have. How does that happen? Is it a second tier of usage? Do we select based on certain internal criteria? What's the deal there, Mike? 

MIKE: Yeah, great question. So the SCE engagement is actually part of the professional service organization of Google Cloud. So any customer can actually reach out to their Google Cloud representative and ask them about the option of getting a technical account manager, a SCE. We're making that available as a service, yep. 

MARK: Cool. Well, is there a URL that people can go to if they want to find that? Or is that specific to you if you have already hit up a sales agent? 

MIKE: Yeah, absolutely. So you can definitely go to our website and go to cloud.google.com/support. And you should be able to continue from there. 

MARK: Awesome. And we'll just hand out your phone number, Mike, if people can't find that. Is that fine? 

MIKE: Totally. 

MARK: All right, cool. 

MIKE: I'm used to that. 

[LAUGHTER] 

FRANCESC: Cool, so I'm curious about is there any story that you can share of how this actually works? Like a concrete use case where being a Platinum customer has solved a big problem? Like, I don't know if there was some big technical problem on your side, or I don't know, like any kind of those issues where being a Platinum customer really made a difference? 

LUKAS: Yeah, the ones I like to talk about are where we have mistakenly exposed the lack of infinite capacity that Google has. So there was that first time where I got the call, where they were like, what are you doing in the Central Region right now? And I was like, oh my gosh, we just showed up on Google's radar. That's amazing. And we realized that there actually are a limited amount of resources, and it's possible to consume them all at some point. 

FRANCESC: Cool. So now I'm wondering is there any interesting story you can share that really shows a big difference? Like oh, luckily we're a Platinum customer, that we were able to solve this issue. Is there something like that, that you can share that is not top-secret or something? 

[LAUGHS] 

LUKAS: Yeah. So one of the things, one of the reasons we are a Platinum customer is the scale at which we run is such that we periodically are able to expose the fact that the cloud is not actually unlimited. So in one example, we were using too many CPUs in a particular region. And we had to be very strategic with Google about where to move those workloads. 

There was another situation last year where we, in using all of those preemptable VMs that we were using, we managed to consume most of the IP address resources in a particular region. And so we went down a very strategic route with Google. Not only tactically, trying to solve the immediate problem, but basically, trying to redesign our application with Google, to make it so that we didn't need to use so many external IP addresses. And Mike was integral-- 

MARK: And I assume it wasn't like, 5 or 10 like CPUs or IP addresses. 

LUKAS: No. 

MARK: It was a little bit more than that? 

LUKAS: Tens of thousands. And you know, one of our applications needs to speak to the internet. So while many of Google's resources, like storage, are available using internal IP addresses, if that same machine needs to talk to Docker Hub, for example, then it or something near it needs to have a public IP. 

So we exposed this limitation in both Google's infrastructure, as well as in the design of our application. And then Mike and his team rallied around. This was actually during DockerCon last year. And so there was a few Googlers. 

Like, Mike's boss, Carl, was at DockerCon. And he and I were able to get together in a little room and just sort of hack through the issue with a bunch of brodies who were back on site in Cambridge, and with Mike and others who were online at Google. And it was a real collaborative urgent effort to try and resolve this issue. 

MIKE: And just from that point of view, I mean, the back end services and team owners are intimately aware of Broad Institute because of issues like that. And it actually helped us make the platform better. We change a lot of our internal processes, and also general processes as a cloud provider, as a result of this type of interaction we had, with the Broad Institute being a Platinum customer and really pushing us to the limit. And at the end of the day, it really helps all of our customers. 

LUKAS: Another example, I think, is Mike is able to help me interact with many of the PMs of some of the products that we rely on very heavily. And through those relationships, we're often able to get on Early Access or alpha programs for certain products. 

And for example, earlier this year, we were one of the first, if not the first customer to begin using a feature. And within the first day or two of experimenting with it, we found two major bugs. And so Google was able to pull that feature, resolve those bugs, and get that redeployed before any other customers experienced it. So in the end, we were able to get access to a feature that was critical to us. And we were able to help Google make that feature more reliable for everybody. 

MIKE: And at the end, taking that to the next level as a result of all that tight interaction we had around that feature and function, Lukas was actually on Next 2017, on stage, presenting some of the code that he wrote related to that functionality and features. 

MARK: Ooh, nice. 

MIKE: The fact that they're building up their content and requirement for GCP Next, Lukas immediately came to mind. And through the relationship, we were able to reach out and work out a way where Lukas ends up on stage, talking about the solution. 

FRANCESC: Awesome. Well, we'll find that talk And we will have a link from the show notes, that's for sure. 

MARK: OK, so we're running out of time. And so I like to ask my favorite question, which is, does anyone have anything extra to add, or anything we haven't managed to ask in our interview process so far? Mike, I think you might have something. 

MIKE: Yeah, thanks. So last point, I do actually have the URL where you can go and get in touch with the Professional Services. And it's cloud.google.com/solutions. 

MARK: Awesome. All right, Lukas, Mike, thank you so much for joining us. We really appreciate you taking the time and talking to us about Broad Institute and also what it means to be a Platinum customer. 

LUKAS: Thanks for having us. 

MIKE: Thank you, guys. Pleasure to be here. 

FRANCESC: So thanks again to both Lukas and Mike for taking the time today to explain a little bit about what it is to be a Platinum customer, what does it entail, and what is the kind of relationship and how basically, helping each other all the time. Pretty amazing that Platinum customers, they get such a level of support. Like, they basically can call someone, a Googler, on their mobile phone directly. It's pretty amazing. 

MARK: Yeah. And make sure if you have a company that's large enough, or have enough needs that you think you need to be a Platinum customers, check out the links in the show notes so that you can get involved as quickly as possible. 

FRANCESC: So I guess that it's going time to go with the Question of the Week. And as I was saying at the beginning of the episode, this one comes from someone, someone that came to see me at the Google Cloud Platform booth at GopherCon last week, in Denver. 

And his question was OK, so I have a development cluster for Kubernetes. So basically, I'm running Kubernetes on GKE. And it's a development QA thing. So I want it to be as cheap as possible. Because there's no production traffic going on in there. So I don't really care about reliability or anything like that. 

So I can run it with one single instance. And I can even run it with f1-small, which is actually very, very affordable. But then when I want to expose service, if I expose it with the default way of doing it, which is by saying type is the load balancer, then all of a sudden, you getting a load balancer. 

And then you need to pay for the load balancer, which is more than what they would like to pay, specifically for this test environment. So how can you expose service without a load balancer? And I think that you have a way to do it. So I guess you can go with one and I'll go with the other one. 

MARK: OK. I have one way that I think should work. So the way that I was going to say it, we were saying, that we're going to have one instance in our Kubernetes cluster. 

FRANCESC: Yeah. 

MARK: So often, what happens if you're not running Kubernetes in the cloud, rather than using a service with a type load balancer, you often do what's called type node port. Which actually opens up the port directly on the machine. And it opens up the same port for all the services across all the machines that are inside your cluster. So then you could put your own load balancer over the front. Just point it to those ports across those machines, and you're good to go. But there's nothing that stops you from saying, hey, why don't we just connect directly to that node port for that individual service? 

So you could do a service with a node port, specify the port that you want to open, and have that available. The only caveat I would put there is just to make sure that there is a firewall rule on that Compute Engine instance that GKE provisions for you, to ensure that the traffic will go through to that port. But in theory, it should work. 

FRANCESC: I guess there's a second caveat to that, which leads us to the other solution, which is what happens if that instance is restarted? You might get a different IP. 

MARK: That's true. 

FRANCESC: So all of a sudden, what IP should you target? So that's why there's a different solution, which is by using static IPs. So you can get a static IP for your service. And then that static IP, it is completely free of charge, as long as it's assigned to something. So if you're running it for an instance, then you're good. You don't need to pay for anything for that one, which is cool. 

And then you can actually set, on your ingress service, that specific IP. The Details to set this up are actually part of a little [INAUDIBLE] that Kelsey Hightower [INAUDIBLE] open source. So we will have a link to that specific place. Basically, takes you through how to reserve a static IP, and then how to add it to your Kubernetes configuration files in order to use that one for your services by them allocating a new load balancer. 

MARK: If you wanted to get super fancy, you might be able to make it preemptable as well. 

FRANCESC: So I tried, and you can. I don't know, it will be more affordable. But at the same time, I wonder if you're running tests on it-- 

MARK: But it's only going to go down maybe once every 24 hours or so. 

FRANCESC: Or more. 

MARK: So it's not going to happen that often. 

FRANCESC: It's going to make your tests flaky. So then you need rerun them again. 

MARK: You have to rerun them. 

FRANCESC: But at the same time, it's integration tests. So probably flakiness is OK. 

MARK: I'm just saying, it's an option. It's just there. 

FRANCESC: It is definitely an option. The one that is not an option that I thought about was well, if I want to make it as affordable as possible, maybe it can run on f1-micro. Because you get one for free per month. So that'd be perfect. 

But it is not enough to run Kubernetes, unfortunately. So you need to run at least f1-small. Which is also very, very, very affordable, to be honest. 

MARK: You can run Kubernetes, but no parts. 

FRANCESC: Basically, yeah. You can run Kubernetes, but nothing will run inside. So yeah, not big enough, yeah. 

MARK: Wonderful. All right, before we ramble on even further, Francesc, what are you up to? Are you going anywhere special? I know you just got back from GopherCon. 

FRANCESC: Yeah, I just got back from GopherCon, so I'm taking a couple days off. I might go camping somewhere in the forest, far away from computers. 

MARK: Nice. 

FRANCESC: Yeah. And after that, basically, enjoying San Francisco. I'll be here for the Go SF meetup on July 26. And after that, some holidays again. What about you? 

MARK: What am I up to? Let me think. So I will be attending-- actually, so I will be speaking at PAX Dev at the end of August, in Seattle. And then attending PAX after that. So that will be lots and lots of fun. Before that, I think, just getting ready for PAX. I'm pretty excited about it, actually. 

FRANCESC: Nice I guess that I will also mention that I keep on releasing "Just for Funk" episodes. 

MARK: "Just for Funk." 

FRANCESC: So by the time this episode comes out, I will be working on the next one. And there's some surprises coming up, like guest stars and stuff like that. 

MARK: Ooh. 

FRANCESC: It's going to be exciting. Yep. 

[LAUGHS] 

MARK: Ooh, I'm excited. Wonderful. Well, Francesc, thank you so much for joining me for yet another episode. 

FRANCESC: Thank you, Mark. And enjoy the amazing weather in New York, as you love it so much. And thank you all for listening. And we'll see you all next week. 
{{< /transcript >}}