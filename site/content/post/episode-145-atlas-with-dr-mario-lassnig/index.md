+++
audioDuration = "00:25:50"
audioFile = "Google.Cloud.Platform.Podcast.Episode.145.mp3"
audioSize =  37628964
categories = ["ATLAS", "CERN", "Rucio", "Data Mangement"]
date = "2018-09-05"
description = "Our guest today is Dr. Mario Lassnig, a software engineer working on the ATLAS Experiment at CERN!"
draft = false
episodeNumber = 145
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "ATLAS with Dr. Mario Lassnig"
image="/post/episode-145-atlas-with-dr-mario-lassnig/images/hero/hero-EP-145.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/UhvAnrTNazG"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/9d87am/episode_145_atlas_with_dr_mario_lassnig/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Our guest today is [Dr. Mario Lassnig](https://twitter.com/mlassnig), a software engineer working on the ATLAS Experiment at CERN! [Melanie](https://twitter.com/nyghtowl) and [Mark](https://twitter.com/Neurotic) put on their physics hats as they learn all about what it takes to manage the petabytes of data involved in such a large research project.

<!--more-->

##### Dr. Mario Lassnig

[Dr. Mario Lassnig](https://twitter.com/mlassnig) has been working as a Software Engineer at the European Organisation for Nuclear Research (CERN) since 2006. Within the ATLAS Experiment, he is responsible for all aspects of its large-scale distributed data, including management, storage, network, and access. He is also one of the principal developers of the Rucio system for scientific data management. In his previous life, he developed mobile navigation software for multi-modal transportation in Vienna at Seibersdorf Research, as well as cryptographic smart-card applications for access control at the University of Klagenfurt. He holds a Master's degree in Computer Science from the University of Klagenfurt, and a doctoral degree in Computer Science from the University of Innsbruck.

##### Cool things of the week

* The Machines Can Do the Work, a Story of Kubernetes Testing, CI, and Automating the Contributor Experience [blog](https://kubernetes.io/blog/2018/08/29/the-machines-can-do-the-work-a-story-of-kubernetes-testing-ci-and-automating-the-contributor-experience/)
     * Google Cloud grants $9M in credits for the operation of the Kubernetes project [blog](https://cloud.google.com/blog/products/gcp/google-cloud-grants-9m-in-credits-for-the-operation-of-the-kubernetes-project)
* Improving job searches for veterans with Google Cloud's Talent Solution [blog](https://cloud.google.com/blog/topics/inside-google-cloud/improving-job-search-for-veterans-with-google-clouds-talent-solution)
* Unity For Beginners… From a Beginner [blog](https://medium.com/@jonfoust/unity-for-beginners-from-a-beginner-9e2eaef57873)
     * GCP Podcast Episode 134: Connected Games with Unity and Google Cloud with Brett Bibby and Micah Baker [podcast](https://www.gcppodcast.com/post/episode-134-connected-games-with-unity-and-google-cloud/)
* Neural Information Processing Systems Conference [site](https://nips.cc/)

##### Interview

* Rucio - Scientific Data Management [site](https://rucio.cern.ch/)
* CERN [site](https://home.cern)
* ATLAS [site](https://atlas.cern)
* Google Cloud Storage [site](https://cloud.google.com/storage/)
* Google Compute Engine [site](https://cloud.google.com/compute/)
* G Suite [site](https://gsuite.google.com)
* GKE On-Prem [site](https://cloud.google.com/gke-on-prem/)
* Rucio on GitHub [site](https://github.com/rucio)
* University of Oslo [site](https://www.uio.no/english/)
* University of Innsbruck [site](https://www.uibk.ac.at/index.html.en)
* Brookhaven National Laboratory [site](https://www.bnl.gov/world/)
* University of Texas at Arlington [site](https://www.uta.edu/uta/)
* Square Kilometer Array [site](https://www.skatelescope.org)
* DUNE [site](http://www.dunescience.org)
* LIGO Lab [site](https://www.ligo.caltech.edu)
* Scientific Computing with Google Cloud Platform: Experiences from the Trenches in Particle Physics and Earth Sciences [video](https://youtu.be/N4eT9Lfvuro)
* GCP Podcast Episode 122: Project Jupyter with Jessica Forde, Yuvi Panda and Chris Holdgraf [podcast](https://www.gcppodcast.com/post/episode-122-project-jupyter-with-jessica-forde-yuvi-panda-and-chris-holdgraf/)
* Rucio Workshop [site](https://indico.cern.ch/event/676472/)
* ACM/IEEE Supercomputing 2018 [site](https://sc18.supercomputing.org)

##### Question of the week

I am not familiar with Docker or Kubernetes - where can I get started?

* Docker
     * [Docker's official "Getting Started" guide](https://docs.docker.com/get-started/)
     * [Katacoda's free, interactive Docker course](https://www.katacoda.com/courses/docker)

* Kubernetes
     * [You should totally read this comic and interactive tutorial](https://cloud.google.com/kubernetes-engine/kubernetes-comic/)
     * [Katacoda's free, interactive Kubernetes course](https://www.katacoda.com/courses/kubernetes)

##### Where can you find us next?

Melanie will be at [Deep Learning Indaba](http://www.deeplearningindaba.com).

Mark will be at [Tokyo NEXT](https://cloud.withgoogle.com/next18/tokyo). 

We'll both be at [Strange Loop](https://www.thestrangeloop.com).

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 145 of the weekly Google Cloud Platform podcast. I'm Mark Mandel. And as always, I'm here with my colleague, Melanie Warwick. How are you doing, Melanie?" >}}

MELANIE: I'm good, Mark. Good to talk to you again this week. How was PAX? 

MARK: PAX was great. PAX was wonderful. PAX Dev was lovely. PAX itself was great. Got to catch up with loads of friends. It was really good. 

MELANIE: All the gaming things last week. 

MARK: All the gaming things. 

MELANIE: And last week was a busy week. There was GopherCon. There was Burning Man. It was a pretty busy week and then long weekend. 

MARK: Yeah, which was good. 

MELANIE: This week, we are going to be speaking with Dr. Mario Lassnig, who is out of CERN. He's joined us on the podcast at one of our wonderful recordings that we were able to capture at Next. And he joined us to talk to us about Atlas and how Atlas is using GCP. So we're going to have that as our interview for this week. 

MARK: Yeah, really exciting stuff. Thank you for setting that up, Melanie. 

MELANIE: Yeah, I'm glad we were able to connect with him. But as always, we will start off with our cool things of the week. And this week's question is, I'm not familiar with Docker or Kubernetes. How can I get started with them ? 

MARK: How can you get started? 

MELANIE: I know. We were having a good conversation about how sometimes it's good to revisit where to go, how to get started with some of these topics. Because a lot of people are still new coming into the space. 

MARK: Foundational stuff is always important. 

MELANIE: Very much so. 

MARK: Cool. So why don't we get stuck into our cool things of the week. It wouldn't be an episode of the podcast if I didn't talk about Kubernetes. So why don't we do that. Couple of topics on that one which I thought were really cool. 

Kubernetes released a blog post recently talking about how they use machines, basically, to do all their testing, their CI, to automate their contributor experience. I think is really cool if you've ever been involved with a Kubernetes project or even any open source project. You can tell that pull requests and continuous integration and anything like that can get really complicated. 

And Kubernetes is a big project. So they go through all the different projects that they've either written or used just to basically manage this anarchistic duocracy of open source that makes things happen, which is pretty exciting. The good follow-up from that, though, is that up until recently, all this infrastructure has been run by Google Cloud. 

But what we want to do is hand that over to the cloud native compute foundation. So that's actually happened. And what we've also done is provided $9 million in credits to allow that infrastructure to run on Google Cloud. So it's going back over to the foundation, which is really good. 

Kubernetes is obviously a mature, open source project. So they should have ownership of that kind of stuff. So I'm pretty excited to see what that's going to continue doing. 

MELANIE: Yeah, it looks like they're using 9 million in credits for over three years. Part of that grant will be dedicated to funding scalability testing with regular runs of, like, 150,000 containers across 5,000 virtual machines. Efforts like that that are very much needed in the space. But yes, this is a good move in regards to helping to make the CNCF more capable of supporting the larger community. 

So another thing we wanted to mention in terms of cool things of the week is that the product that we provide called Cloud Talent Solution helps with job search, as well as for recruiters to be able to find talent. There's been an additional functionality that was added to it. For veterans who are transitioning out of military service into civilian life and are looking for jobs, it helps translate their terminology and what they're used to from a military perspective into a civilian resume skill set perspective without them having to do it themselves. 

So they don't have to think about what those words need to be from a civilian side of the world. They can just put in their actual terminology that they use regularly, and the product itself will do the translation for them and help them surface jobs that they're looking for in the civilian market. 

MARK: Yeah. This looks really impressive. It's being used currently across FedEx and Compass, health, Siemens, as well as through powering better and job sites, like Getting Hired and other job boards, like CareerBuilder and Mid-America Careers. So I'm really happy to see this initiative. 

MELANIE: Agreed. And then another cool thing of the week that we want to mention is John Foust, who's one of our team members, has posted his first blog. And it's specifically on Unity for beginners from a beginner. And I know, Mark, we did that great podcast not too long ago on Unity. 

So you've got a lot of knowledge in this space. And it was good to see John participate and share what his experience has been. 

MARK: Yeah, it's really good. He goes through several different game engines. Why he particularly chose Unity over the other ones. And then sort of gave a bit of a general overview as well. And he's going to continue the series. This is one of just a beginning. 

MELANIE: It is. It's a nice assessment, and then sort of the next steps of what that's going to look like. Last cool thing of the week that we want to mention is that for many of you who are researchers in the AI machine learning space, you are aware of the neural information processing systems conference also known as NIPS. This conference is something that is regularly attended by those researchers and others in the community. 

And it always happens in December. And we're actually going to do a podcast about that later this year. Something to note is that the registration for that finally opened this week. 

And within-- what I understand-- about 15 minutes of it opening, it sold out, which a new record for them. Last year, it sold out in two days. So it's one of the more established conferences and well-attended from the community's perspective. So it's impressive that it sold out maybe not that surprising as quickly as it did. 

Something I wanted to give a shout out, though, to it is that they're providing child care, which I think is wonderful. I know they did that at [INAUDIBLE] which is another regularly-attended conference. So anyways, if you wanted to go to this conference, if you want to learn more about it, there's great information online. There's a lot of information around the papers that are going to be there. 

In regards to registration, if you wanted to attend, my understanding is they may be releasing more tickets later on in the fall. And you can always put yourself on the list. 

MARK: AI-- so hot right now. 

MELANIE: It is all the things, all the things. 

MARK: So hot right now. 

MELANIE: Anyways, Mark, I think it's time for us to go speak with Dr. Mario Lassnig. On this week's podcast, we're excited that we have Dr. Mario Lassnig, who has joined us from CERN and specifically the Atlas project over at CERN. 

And we're recording this podcast out of Next as we speak. So you might hear some fun, ambient noise in the background. But yes, Mario, thank you so much for joining. 

MARIO: Oh, I'm excited to be here. Thanks for having me. 

MELANIE: Great. Can you tell us a little bit about who you are and what you do over at CERN? 

MARIO: I've joined CERN roughly 12 years ago as a PhD student back then. I'm a software engineer, and I've been working on the data management part of the Atlas experiment. And right now, I'm kind of coordinating the whole data management activity for the experiment, which means the management of the namespace, access to the files, transferring orchestrated activities with a team of roughly 10 to 15 persons distributed from institutes in the United States, like Stanford Linear Accelerator Laboratory, Brookhaven National Lab, Rutherford Appleton Laboratory in the UK, also people at CERN, and then from some other institutes that contribute a lot. 

MARK: So for those people who aren't familiar with CERN and what CERN does, can you give us a high level, like, what does CERN do? 

MARIO: CERN is a particle physics laboratory. It was founded in 1954, if I'm not mistaken. 

MARK: Something around there. 

MARIO: Yeah. The buildings look like that. I can tell you. So what we have is a accelerator complex, where we try to figure out what the constituent processes are that make up our universe. It's kind of like where astronomy looks back in the history of time, we drill down like a microscope. 

It's kind of two aspects of the same thing. So we have four large experiments attached at the Large Hadron Collider, and one of them is Atlas. That's what I'm working on. 

MELANIE: What you're working on. Can you tell us a little bit more about what Atlas is? 

MARIO: Yes, so Atlas is a general purpose particle detector. You have to imagine that the accelerator people are making sure that the protons collide in the center of the detector. And then you have the decaying particles going through all the layers of the detector. 

We get hits in the detector. Those are read out by the electronics, and then we try to figure out from these hits what the decaying particles actually were. So they deposit energy in the detector in varying amounts and those kinds of things. 

MARK: So what kind of technology do you need for this? What do you do with this stuff? 

MARIO: The actual technology is all custom built. So those are built upon the experiences from the previous detectors that came. So the original particle detectors were completely analog. And now, we moved to a more digital way of reading out these electronics. 

You have to imagine the readout from all the electronics on the detector is roughly-- if I'm not mistaken-- 1.5 petabytes per second. And then this is then triggered down in hardware and, later on, through software. And then we get event sizes roughly 2 to 8 megabytes in size, depending on what's going on, if it's a proton or lead event. 

MELANIE: So my understanding is you're using some of the GCP products with the data that you're managing. What are some of the products that you're using? 

MARIO: We completely integrated the Google Cloud Storage and the Google Compute Engine. And the one thing that's always missing in this picture is that we also do heavy use of the G Suite. 

MARK: Good. 

MELANIE: That's great. 

MARIO: Because it's really a collaborative effort. And by making sure that everybody has access to all the documents, slides, and everything, this is a well-missed part in the whole thing. 

MARK: So you said there was 400 petabytes of data per second? Is that all going into Google Cloud Storage? 

MARIO: No. We couldn't afford that. 400 petabytes of data is what we have in total. And from the detector, roughly 20% of that is detected data. The rest is simulated data. 

So you have theoretical physicists coming up with formulas. They go to the experimental physicists. They make physics simulations. And then, we try to figure out from the simulated data, we compare it with the real data from the detector to figure out if we have any excess in the histograms to see if a particular property works out or not. 

MELANIE: Nice. So in terms of Google Cloud Storage, in particular, how are you using that? 

MARIO: So we have our internal data management system that is basically tailored to the way we have our computing infrastructure built. We have 170 data centers. Those are all nationally-funded data centers. So it's completely heterogeneous. 

So our system was built to make sure that all these data centers can talk to each other. And now, we added the Google Cloud Platform as an extension to that. So for the whole infrastructure, it looks like the Google Storage is just another data center for us. 

And we started out with the S3 Compatibility layer of GCS. But then gradually, due to authorization, we moved to the signed URLs. And now, we can use it just like a regular web dev storage, which is pretty cool. 

MARK: That is super cool. Are you just using us for storage? Are you computing stuff on us as well? I think you said you are using GCE. 

MARIO: Yes. So from the workflow management point of view, we are operating on a slightly different scale. We have fewer users. We have roughly 2,000 users. 

But if one user pushes a button and launches a job, that job potentially has to work through 50, 60 petabytes of data. And it is all split up into smaller sub-jobs across all these data centers. And especially before physics conferences, you have contention. 

So they would try to get their histograms done for the papers. And that is where we then spillover compute to GCE. So we can fire up VMs on GCE, ship the data that is needed from our internal data centers into GCS. Do the computation and then shut it down when we're done. 

MELANIE: Nice. And you're using Kubernetes too as well? 

MARIO: Yes, so the CERN data center is Kubernetes enabled now. And in fact, one of the things I saw at Next now that was announced was the Kubernetes on premise. So we're getting in touch with-- 

MELANIE: A lot of people are excited about that. 

MARIO: Yes. It's super cool. 

MARK: What specifically are you excited about in regards to that for you? 

MARIO: From the application point of view, this means that we can scale out on a much easier level. Because procurement is very much hardwired. So we have to make resource requests like that. But if we can scale out when we need it, then this gives us much more flexibility. 

MELANIE: When you were making decisions on the tools to use, what were some of the reasons for why you decided on GCP or the products that you specifically chose? 

MARIO: For us, the most important part was the openness and the flexibility that we get from that. When we tried to do this internally, we came up with our own homegrown solutions. And then suddenly, you start to have this second order effect, which means you don't have any developers coming in new into the collaboration or leaving the collaboration that actually know how to operate this. 

But when you focus on tools that are basically industry standard, you open up your development an engineering pool to a lot of people who can help you out. And this is very much understated problem that we can solve with that. So from the technology itself, it's straightforward for us. 

MARK: That's nice. And when you built this integrated solution, do your scientists need to know that they're running on GCP, or they're running on your data centers? 

MARIO: Yeah. We actually don't want them to know. For the user, what they do is to make selections on physics properties. So eventually, they say, give me this region with this and that property. 

And then, it comes out, OK, you need to run across this one million files. They're all over the place. And then you end up with a selection of these files on contented data centers. And then, we just take that part, ship it to GCS, and do the computation in GCP. 

MELANIE: Nice. Any lessons learned along the way from building out with these tools? 

MARIO: So the most important thing for me personally was to have the authorization. Because the scientists are all integrated in the US, Europe, Asia in a single, unified federated authorization namespace. And to get the credentials from a single scientist into the controlled, budgeted environment on the Google Cloud Platform, that was a bit tricky to figure out. So we're happy with it. 

For example, when we were still using the S3 layer, we had to give out the S3 access keys to the people. And suddenly, there could be a single scientist saying, OK, I need to run this data. And by accident, it starts to run on GCE. 

And suddenly, you rack up a bill of things that you can't pay. So that was one of the reasons we had to really make sure that the authorization and authentication works well. 

MARK: How did you solve that then? 

MARIO: We have a authorization layer built into our data management system. 

MELANIE: OK. In terms of the research that you're doing with Atlas, how is that research used by the broader community? 

MARIO: So we've always tried to build our data management products on top of the computer science literature. So it's not like we went ahead and just did something radically different. And this also shows, because we managed to get quite a lot of PhDs out of it. We have master's students working that were regularly publishing papers just on the way we do our data management. And this is much appreciated in the community. 

On the other hand, this is not only about research. This is also of making the product generally available. So if you go to GitHub, you can grab a copy of [INAUDIBLE] and try it out for yourself if you have a data center. 

MELANIE: Any specific groups that you collaborate with that you'd be able to share? I know you collaborate with a lot of groups, but some that come to mind? 

MARIO: From the universities, we work with very closely is the University of Oslo in Norway. [INAUDIBLE] in Germany and Innsbruck in Austria. And then from the larger research laboratories, it's mostly Brookhaven National Lab in New York and the University of Texas at Arlington. 

MELANIE: Oh, OK. Great. 

MARK: I'd love to hear more about the GitHub side of things. How open is this data, or how open is this process? Is there stuff that people can play with? 

MARIO: Yeah. Even though this is essentially principally CERN-led project, we have a completely open Apache licensed product. So you can just go there. If you want to try it out, you grab the Docker images. 

If you find something that you want to fix or you want to improve, just file a ticket on GitHub, and either prod the developers or do it yourself. And you just submit. 

MARK: And is this for general data processing, or is this specific for CERN data sets? I'm guessing people don't have access to CERN's data sets. 

MARIO: So this is really the software itself. If you have a data management problem, this is most likely a useful solution for you. If you want to get access to the experiment data itself, you have to be a member of the collaboration. 

Because what we don't want is that people start to get access to intermediary data, and suddenly, you get an excited journalist proclaiming some discovery that was not confirmed by the collaboration. So we have to be very careful also with data privacy. 

MELANIE: How does somebody become a member? 

MARIO: You have to join an institute that is a collaboration member. 

MELANIE: Makes sense. Well, what are some of the future plans you have for development of your platform? 

MARIO: So our platform is currently being evaluated by a couple of experiments, namely the Square Kilometer Array-- so it's a really big radio astronomy project-- the Deep Underground Neutrino Experiment, DUNE at Fermilab. LIGO is also evaluating and a couple of other high energy particle physics experiments, CMS. 

So what we're are trying to do is we're trying to branch out essentially from Atlas into all these communities. We're trying to offer them a service, a product, and support community where everybody can contribute. This means, now, we have to make sure that the product itself can tie into all the intricacies and problems that these communities have and try to solve them in a generic way. 

The way the system was built is very modular. So it's really not specific to Atlas itself. So that's why we had very good success in the early evaluation stages with the other experiments. 

MELANIE: That's great. 

MARIO: I'm really happy about that. 

MARK: Are other teams inside CERN also using the same platform? 

MARIO: It's essentially a single instance that hosts the whole thing. 

MARK: The whole thing? 

MARIO: Yeah. 

MARK: Awesome. 

MELANIE: What are the quirks of the science committee with regards to their data when compared to a regular business enterprise? 

MARIO: They start to get very cautious when you mention the word commercial platform. Because for a scientist, if they don't have full control over their data, they start to get very, very anxious. So it was our job to ensure that when they want to process data, when they want to store data, to ensure that even if it's moved to a commercial platform, that their data is secure. But also that they still retain full ownership and control of the data. 

It's more of a sociological than a technological problem. But you have to make sure that you break this mindset a bit and tell them, you can trust us. The technology is secure. And we're there for the scientists and not for the commercial company. That's our mantra. 

MELANIE: I know we're doing this interview at Next. And you were here to speak at Next. What did you talk about? 

MARIO: Yeah, exactly about this topic. It was a shared session of scientific computing with Google Cloud Platform. The first half was from the Pangeo project that the earth and ocean and atmospheric sciences modeling on interactive notebooks. And then the second half, I spoke about the way we integrated GCP into our Atlas computing infrastructure. 

MELANIE: Cool. Was the interactive notebooks Jupyter, by any chance? 

MARIO: Yes. 

MELANIE: Nice. We did a podcast on the Project Jupyter. 

MARK: Awhile ago. 

MELANIE: Yeah, I think it was, like, 122. Anyways, any exciting things that you've seen at Next while you've been here outside of the on-prem? 

MARIO: Yeah, I've been speaking to a lot of people. So in fact, I've actually spent most of my time talking to people personally, getting in touch with the network people. Because one of the things that's very important for us is to get the data as quickly as possible from our data centers into GCS, which meant we have to jump from the National Research and Education networks through the purine points into the Google network. 

MELANIE: Oh, wow. 

MARIO: If we do that, actually, we can saturate our data center output. 

MARK: Oh, fun. Actually, so that's an interesting point. You peer with Google Cloud Platform as well? 

MARIO: Yes. There are a couple of peering points in the US. And the ones we tried out was-- if I'm not mistaken-- South Carolina and [INAUDIBLE]. 

MARK: For those people who may not know what peering is, can you talk a little about that? 

MARIO: It's essentially a private network that is directly connected to the Google network. 

MARK: Now that makes a lot of sense given the amount of data that you're shifting around. 

MARIO: We don't want to get limited by public networks. So if we get throughputs that our 150 megabytes per second, we're going to wait a long time. 

MELANIE: That's cool and understandable, like you said. Well, great. Anything else that you wanted to share with us before we let you go? 

MARIO: There will be a ruscio community workshop sometime in autumn. We still have to define the time and place. We had a pretty successful one in March this year. But due to the uptake of the community, we thought maybe we'll make a second one. 

And now, we'll invite again all the developers from the other experiments. We'll open it up even more. We're trying to branch out of our single experiment installation and try to get even more people on board. 

MARK: Are you actively looking for contributors and people to get involved? 

MARIO: Yes. 

MARK: Cool. Where can they go if they want to get involved? 

MARIO: Github.com/rucio. 

MELANIE: Hey, there you go. 

MARK: Excellent. 

MELANIE: Well, great. Well, Mario, thank you so much for joining us today. 

MARIO: It was my pleasure. Thank you. 

MARK: Thanks. 

MELANIE: Thank you again, Mario. We really appreciate you coming on to the podcast and talking to us about Atlas. 

MARK: Yes, super cool. Super cool stuff. 

MELANIE: So Mark, I'm not familiar with Docker or Kubernetes. Where can I start to learn about them? 

MARK: Yeah, I want to talk about this a little bit more too. Because I think, as people who work in technology, we have a tendency to want to talk about the new shiny thing all the time. Sometimes I think it's actually very important to go back to the foundational aspects of what we're building on top of. 

Because sometimes people haven't got to the new shiny things yet. And that's totally fair enough. So if people are like, oh, Docker and Kubernetes, maybe this seems really complicated, or where do I get started? The ecosystem has grown so much, I don't know where to go. I just wanted to provide some guidance and some resources that are available. 

So if you're thinking about getting involved with Docker and Kubernetes, I would definitely say get started feeling comfortable with Docker. So there's Docker's official Getting Started Guide on their website, which will link to an [INAUDIBLE], which is great. Gives you great step-by-step instructions on how to get started building containers, pushing things to registries, that kind of stuff. Just getting familiar with that vocabulary and that toolchain. I think that's a really great start. 

There's a website as well called Katacoda. They also have a free interactive Docker course that I also really like. So if you don't want to install any tools or just want to just try it in the browser basically, they have a series of all kinds of stuff. They have-- oh, wow, there's a lot. There is-- I'm going to say-- at least about 15 different things just there waiting for you to play with. 

MELANIE: It's nice that it's inside the browser too. 

MARK: Yeah, if you're like, OK, cool, I'm feeling more comfortable with Docker. I want to get started with Kubernetes, my favorite place, honestly, to start is there's a comic from the GKE team. I think it's both amazing, gorgeous, and just hilarious. 

MELANIE: You are a fan of that comic. 

MARK: I love this comic. 

MELANIE: You do. 

MARK: It's so well done. And I think the wonderful thing is you can read the comic, and it can give you some ideas of the reasons and the basic philosophies behind Kubernetes. And then it just runs straight into an interactive tutorial that you can just pick up and run with, which I think is great too. 

And speaking of interactive tutorials, also one of my favorite sites-- Katacoda-- has a free interactive Kubernetes course as well, which is just another lovely place to get started. So it's got stuff in there even around launching clusters, if that's a you might want to do. But even just things like starting to deploy containers, doing simple web apps, getting started with really simple stuff just to get going, and even more complicated things as well. 

So it's a really nice way of getting going. Again, a nice safe environment. It's online. It's in a browser. You don't have to install anything or do anything special that way either. 

MELANIE: When you started out on this, what were some of the resources that you used? 

MARK: That's a really good question. So I started three years ago before Kubernetes was 1.0. It was a very different landscape. So I kind of grew up with the project. So I have certain history. So people who are new to it, I feel things like this, I think, are really good. Because I had a very different upbringing in this ecosystem. 

MELANIE: Lowers the barriers a little bit on the resources that you're recommending. 

MARK: Yeah. 

MELANIE: Cool. Mark, where are you going to be? Where are you going this month? 

MARK: Where am I going this month? Where aren't I going this month? 

MELANIE: What haven't we talked about already? 

MARK: I think we've talked about it. But just as a reminder, I'll be at Tokyo next week basically. So pretty excited about that. Going to be doing the inside event, which is the game event. They're talking about that. And then both of us will also be at Strange Loop shortly thereafter as well. 

MELANIE: Agreed. And you're speaking at Tokyo Next, is that right? 

MARK: Yeah, I'm doing the inside event, which is the game-specific event. So I'll be speaking at that, and I'll be hanging around as well. I might be doing some other couple of things. What are you doing? You're traveling too. 

MELANIE: I am traveling. I'm going to be in South Africa near Cape Town at Deep Learning Indaba, the conference that is specifically machine learning-focused deep learning-focused in that area. We're going to be talking to a number of people who are going to be at the conference. And we'll be including some of that on the podcast. 

MARK: Fantastic. Well, I'm looking forward to hearing that content. 

MELANIE: Me too. 

MARK: Excellent. Well, Melanie, thank you for joining me yet again on the podcast. 

MELANIE: Thank you, Mark. 

MARK: Thank you all for listening. And we'll see you all next week. 

[MUSIC PLAYING]