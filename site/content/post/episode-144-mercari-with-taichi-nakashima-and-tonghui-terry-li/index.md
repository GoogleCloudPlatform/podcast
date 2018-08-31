+++
audioDuration = "00:23:27"
audioFile = "Google.Cloud.Platform.Podcast.Episode.144.mp3"
audioSize = 34180354
categories = ["Mercari", "GKE", "Kubernetes", "Microservices", "Identity Management System"]
date = "2018-08-29"
description = "Mark and Melanie sat down with Taichi and Tonghui of Mercari at the Google NEXT conference."
draft = false
episodeNumber = 144
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Mercari with Taichi Nakashima and Tonghui (Terry) Li"
image="/post/episode-144-mercari-with-taichi-nakashima-and-tonghui-terry-li/images/Next18-GroupShot.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/M1EcLYTqirs"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/9bau8a/episode_144_mercari_with_taichi_nakashima_and/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage" 
+++

This week we learn about how Mercari is handling migrating from an on-prem monolithic infrastructure to cloud microservices architecture with GKE. [Terry](https://twitter.com/ummterry) and [Taichi](https://twitter.com/deeeet) share with [Melanie](https://twitter.com/nyghtowl) and [Mark](https://twitter.com/Neurotic) what drove the decision for the change, the challenges and what the team has learned from the transition. The real value for this change has been about making the platform more scalable as they grow to meet the needs of their millions of daily active users. It's another great interview we captured out of Google NEXT.

<!--more-->

##### Taichi Nakashima

[Taichi](https://twitter.com/deeeet) is a tech lead for the microservices platform at Mercari. Prior to Mercari, he was a backend engineer at Rakuten, building internal Platform as a Service. Mercari chose microservice architecture as their next development platform, and built two teams to proceed with the migration. One is the microservice platform team that is building a platform that can deploy any microservices, and the other is the microservice development team that are focusing on migrating the current monolithic API to microservices. Mercari use GKE as a platform and GCP as the main infrastructure for microservices.

##### Tonghui (Terry) Li

[Tonghui](https://twitter.com/ummterry) joined Mercari in April 2018 and is responsible for migrating the monolithic backend API to a microservice architecture. Prior to Mercari, he was a tech lead of Indeed, working on different components of the job search engine including Title Normalization, Location system, Job Search API, and more.

##### Cool things of the week

* How to call the Cloud AutoML API from a web app [site](https://github.com/sararob/automl-api-demo)
    - GCPPodcast Episode 108: Launchpad Studio with Malika Cantor and Peter Norvig [site](https://www.gcppodcast.com/post/episode-108-lauchpad-studio-with-malika-cantor-and-peter-norvig/)
* Who is this street artist? Building a graffiti artist classifier using AutoML [blog](https://cloud.google.com/blog/products/ai-machine-learning/who-street-artist-building-graffiti-artist-classifier-using-automl)
* Datastore Transactions, Batches and Perf! [video](https://www.youtube.com/watch?v=626UFM0dy8g&list=PLIivdWyY5sqK5zce0-fd1Vam7oPY-s_8X&index=42) and [twitter](https://twitter.com/GCPcloud/status/1034077025244463104)
* Deploy only what you trust: introducing Binary Authorization for Google Kubernetes Engine [blog](https://cloud.google.com/blog/products/identity-security/deploy-only-what-you-trust-introducing-binary-authorization-for-google-kubernetes-engine )

##### Interview

* Mercari [site](https://mercari.com)
* Microservices on GKE at Mercari [site](https://speakerdeck.com/tcnksm/microservices-on-gke-at-mercari)
* Continuous Delivery for Microservices with Spinnaker at Mercari [site](https://speakerdeck.com/tcnksm/continuous-delivery-for-microservices-with-spinnaker-at-mercari)
* Microservices [site](https://microservices.io)
* GKE [site](https://cloud.google.com/kubernetes-engine/)
* Terraform [site](https://www.terraform.io)
* Spinnaker [site](https://www.spinnaker.io)
* GKE On-Prem [site](https://cloud.google.com/gke-on-prem/)
    - GKE On-Prem - Managing Across Hybrid IT Environments with Open Architectures (Cloud Next '18) [video](https://www.youtube.com/watch?v=w4rkYV4Chfw)
* Mercari on GitHub [site](https://github.com/mercari)
* BigQuery [site](https://cloud.google.com/bigquery)
* Mercari Engineering Blog [blog](https://tech.mercari.com)
* kubectl [site](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
* Google Cloud AutoML [site](https://cloud.google.com/automl/)

<div style="text-align: center">
  <a href="https://twitter.com/deeeet/status/1022255276164968448"><img src="/post/episode-144-mercari-with-taichi-nakashima-and-tonghui-terry-li/images/Next18-GroupShot.jpg" style="margin: auto; max-width: 70%;"></a>
  <p style="font-size:0.8em">Photo credit: Taichi Nakashima</p>
</div>

##### Question of the week

How do I use my existing identity management system with Google Cloud Platform? [site](https://support.google.com/a/answer/60224) and [blog](https://cloud.google.com/blog/products/identity-security/using-your-existing-identity-management-system-with-google-cloud-platform)

##### Where can you find us next?

Mark is at [Pax Dev](http://dev.paxsite.com/) and [Pax West](http://west.paxsite.com/). Find him and say hi.

In September, Mark will be at [Tokyo NEXT](https://cloud.withgoogle.com/next18/tokyo) and Melanie will be at [Deep Learning Indaba](http://www.deeplearningindaba.com). You can find both of us at [Strangeloop](https://www.thestrangeloop.com).

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 144 of the weekly Google Cloud Platform podcast. I'm Mark Mandel. And as always, I'm here with my colleague, Melanie Warrick. How are you doing, Melanie?" >}}

MELANIE: I'm good, Mark. And I'm here. We're both here. 

MARK: We're here-- sort of here. I'm at home. You're in the office. It's fine. 

MELANIE: All right, well, Mark, this week, we're going to speak with Terry and Taichi from Mercari. It's another episode that we recorded while we were at Next. And we were really glad to get them to come in and talk to us about their e-commerce platform that operates out of Japan, the US, and the UK and the story that they have around working with microservices as well as migrating services onto GCP. 

MARK: Excellent. And as for always, we'll have Cool Things of the Week and our questions of the week. And our question of the week will be, how do I use my existing identity management system with Google Cloud Platform? 

MELANIE: That's a great question. As you mentioned, though, we're going to start out with Cool Things of the Week. And one of them is a GitHub repo from Sara Robinson from our team. She did a repo that basically helps demo AutoML and the integration with Firebase storage. So if you wanted to experiment with querying a custom AutoML model from a web app, you can look at her example. 

This actually uses some of the data that she also did an example on earlier in the year when we talked about it during episode 108. And we also talked about AutoML at that time. 

MARK: Oh, nice. 

MELANIE: Another AutoML point that we wanted to cover is that there's this article, and it steps through putting together an example of AutoML using data to help classify graffiti artists. 

MARK: Yeah, it's really cool. It goes through basically how they used AutoML to take a bunch of data and sort of align it with particular artists, as well as how they improved it once they'd built it as well, which is kind of nice. 

MELANIE: Yes. And then another cool thing of the week-- we also want to mention Colt McAnlis, who's another one of our teammates. And he has recently published another Performance Atlas video. It's a great video series that he's been putting out there. In this one, he says he is helping cryptocurrency fans with their data store transactions. 

MARK: [CHUCKLES] Hitting the buzzwords. He's hitting the buzzwords. 

MELANIE: He's totally hitting the buzzwords. 

MARK: It wouldn't be a podcast episode if I didn't talk about Kubernetes. So I'm really excited about this too. So there's a blog post discussing basically deploying only what you trust, introducing binary authorization for Google Kubernetes Engine. Basically, this is all about how do I trust what is running on my production infrastructure? So making sure that only the things that you want to have running on your Kubernetes clusters are the things that are running on the Kubernetes cluster. 

I mean, this could be a whole episode unto itself, but there's a couple of really cool things in there. They have image and repository whitelisting as a great way of basically saying, here are the images that you can send using matching scripts to be able to do that, but also signature verification for pod generation too, and ways to do that. 

MELANIE: What does that mean? 

MARK: What does that mean? Basically, they verify signatures against the images that are running against the container analysis API. But there's also open source ways of doing this too. It goes into all the details. It's really, really nice. I like this article a lot. 

MELANIE: And there's some nice animated visuals in there as well. 

MARK: Yeah. So whoever wrote the blog post-- oh, it looks like [INAUDIBLE], if I'm pronouncing that even vaguely right-- nice job on the diagrams. 

MELANIE: All right, Mark, I think it's time for us to go speak with Taichi and Terry. 

MARK: Sounds good. Let's go do it. 

MELANIE: We are happy to have with us today Terry Li and Taichi Nakashima, who are both from Mercari. And we are grateful that you guys were able to join us here at Next. Thanks, for coming. 

TERRY: Great, thank you. Great to be here. 

MELANIE: So Terry, can you tell us a little bit about yourself and what you do at Mercari? 

TERRY: I'm an engineer at Mercari. We are working on this microservice thing to migrate our backend from a monolithic infrastructure to a microservice architecture. So we are actually just starting on that. And Taichi here is building that platform to run microservices. And I'm on a team that's trying to rewrite the backend into microservices that's running on that platform. 

MELANIE: Great. All right, so Taichi, outside of what Terry's already shared, what's your background? 

TAICHI: So I'm a software engineer at Microsoft's [INAUDIBLE] team. I'm building the platform top on the Google Kubernetes engine so that backend engineer [INAUDIBLE] easy to deploy the microservice. 

MARK: Great, so actually, for people who aren't familiar with Mercari, what is it? What does it do? 

TAICHI: So Mercari is C2C marketplace So users can sell their stuff on our marketplace and buy it from their smart phone. 

MELANIE: And originally, it's based in Japan? 

TAICHI: Yes, it's based in Japan. 

MELANIE: But it's also accessible in the US? 

TAICHI: Yes. 

TERRY: We have millions of users in the US. 

MARK: Yeah, I was going to say, can you share like how big is the platform? How many people use Mercari, in forward sense at least? 

TERRY: We have millions of daily active users in Japan. It's like a huge thing in Japan too-- like sell your used books and stuff. We're not that big in the US, but we also already have tens of millions of downloads already, so it's growing very fast. And we're excited to see how it's going in the coming years. 

MELANIE: Nice. And what are some of the other markets that you're in? 

TERRY: We also have the app in the UK. 

MELANIE: And what are some of the things that people would sell on-- 

TERRY: It's kind of everything in Japan. Recently, we started doing even like cars and stuff. 

MELANIE: Oh, wow. 

TERRY: It's a bit complicated. 

MARK: Oh, cool. 

TERRY: Yeah. 

MARK: That's really interesting. So have you always been on Google Cloud? Or did you migrate from somewhere else? 

TAICHI: So all the Mercari is running on the On-Premise and Japanese provider. So we are trying to migrate from On-Premise to the GCP platform now. 

MARK: Right. I think you said as well-- you said, specifically, you're working on GKE, or Kubernetes engine as a platform doing that. Can you tell us a bit more about how that's going? 

TERRY: His team actually started working on that platform that utilizes GKE and other GCP products to allow us to develop services on that platform. So on my team, we are trying to deploy new microservices into that platform. And so far, it's been going well, I'd say. We have a couple services running on it. It allows the developers to [INAUDIBLE] on their services in a much faster speed, without relying on SRE team to deploy their code for them. 

MELANIE: Great. What made you decide to use GKE? 

TAICHI: So we wanted to deploy the application as a container, because in microservice world, each service team should have the freedom to choose a software programming language. So infrastructure point of view, so everything is packed a container. It's easy to handle, because we don't need take care what the application is written in, Ruby, or Python, or Go. So we want to use a container. So as a pro deploying the container, I think the [INAUDIBLE] best choice is Kubernetes. And the best management [INAUDIBLE] is GKE. So that's why we chose GKE. 

MELANIE: Did you have any challenges with implementing GKE? 

TAICHI: Challenges-- on GKE or Kubernetes, we can do anything. So for example, if we don't use namespace, so every single default namespace in there. It's getting complex. Everything is one namespace. So we need to set up the [INAUDIBLE] namespace for each microservice. Also, we need to provide a proper authorization to each microservice team. So we need to set up some [INAUDIBLE]. And this stuff is a challenging point for us. 

MARK: Yeah. Do you automate any of that? Do you a continuous integration? It sounds like if you're-- you're nodding at me, so I'm going to go with you're probably doing that kind of stuff. 

TERRY: Yeah, we use a lot of tools to automate that. For example, we never actually go to GCP console to actually activate by clicking a button. Or we use Terraform to define what we need. We use Spinnaker to actually deploy our container to GKE-- yeah, things like that. 

MELANIE: Well, great. So what are some upcoming products that you're excited about in regards to the current platform that you've built or your current set-up? 

TERRY: I'm excited about GKE On-Prem that you guys just announced, because we actually had some challenges interacting between our on-prem data center with the services in GKE. And having to deploy some services in GKE and maintain some legacy system in the on-prem data center is kind of a burden. So if we have GKE On-Prem, we could deploy all the microservices, both in GKE and in the data center, so that developers can focus on their business logic. And the deploy can be done to both sides. 

MARK: That's really cool. I'd love to go back to what you were talking about before as well. You were talking about using Spinnaker and that kind of stuff. I think, for people who are potentially thinking about like CI/CD pipelines, however you found that experience using Spinnaker-- I assume you use something for testing as well. How does that normally look inside what you've built? 

TAICHI: So the reason to choose Spinnaker-- in microservice, each backend service engineer needs to handle the deploy themselves. So in one way, maybe central operation team is doing this stuff. But microservice, each team need to do this. 

So we need some way to easily set up the deployment pipeline. And in [INAUDIBLE] if you [INAUDIBLE] we can deploy. But if just [INAUDIBLE], it does not make sure the deployment is locked or not. So because of some [INAUDIBLE] shortage, maybe deployment may fade. But if only [INAUDIBLE], it's difficult to find deployment this way. We need to check by [INAUDIBLE] describe what it [INAUDIBLE]. So that's why [INAUDIBLE] for deployment. 

And we found that Spinnaker is easy to create the deployment pipeline. And it also checks Kubernetes [INAUDIBLE] it works or not. And if deployment [INAUDIBLE], it's [INAUDIBLE] pipeline. So that's why we chose Spinnaker for deployment. 

MARK: So do your developers have a specific place they have to put code? If I'm a developer working on Mercari, and I'm like, I wrote some code, how does Spinnaker find it, and how does that flow look? 

TERRY: We use GitHub to manage our code. And so every code change goes to GitHub. It will open a pull request. They can configure their CR tool to build their image for that PR. And their image will be posted to GCR. 

And Spinnaker has the ability to listen to a repository and find the images defined by some regular expression. So it can ultimately find the image that's updated for this application. And you can choose to automatically deploy that image to GKE. 

MELANIE: In the pipeline that you have, is there anything you wish someone would build that would make it easier? 

TERRY: There's one interesting story about having that ability to just make Spinnaker listen to some repository and deploy stuff. It used to be not working right. And then, starting from one day, I think, a few months ago, it suddenly started working. So it automatically built all images in that repository to the cluster. So it's trying to deploy all the historical versions of all services. That was terrible. [CHUCKLES] 

MARK: But it's fine now. You sorted it out now. 

TERRY: It's fine now, yeah. 

[LAUGHTER] 

MELANIE: That's good. 

TAICHI: And currently, everything needs to be configured by GUI. So we want manage the pipeline in code, so that it's easy to manage. We can [INAUDIBLE] changes. So this is what we want. 

MELANIE: That's what you need? 

TAICHI: Yes. 

MELANIE: That's good to know. We're doing this at Next. Outside of seeing the On-Prem for GKE, what else have you seen that you've been excited about? 

TERRY: I'm excited about the AutoML stuff. I mean, I'm not an expert on machine learning, but I used to play with it. And I spent a lot of time trying to build a simple model. And seeing that being automated, and seeing I can train a model in a few clicks, I think it will save a lot of effort for many machine learning engineers. And I think it will also allow people from business intelligence team to be able to analyze our log and document if they find interesting conclusions of our user behaviors, which is exciting to me and to the team, I guess. 

MELANIE: So do you have certain ways right now that come to mind on how you'd want to implement it once it's made available? 

TERRY: I can easily imagine-- because our logs are already in BigQuery, and I saw a demo of building models based on BigQuery data, I can imagine people without machine learning skill easily do user classification or analyze some user behavior based on the AutoML technology. 

MELANIE: Based on your specific experiences with your user base and the content that you have on your users, yeah. That would be wonderful, especially in terms of being able to specialize your interactions with them. I know that's a leading need for many customers out there. 

MARK: What about you? What have you happened to see that you've been particularly excited about? 

TAICHI: I'm excited about the Cloud Service Platform, CSP. I don't know exactly what is, but I saw the line about the [INAUDIBLE] manage [INAUDIBLE]. For microservice platform, I think that it still will be the key technology. So I want to use [INAUDIBLE], so I'm very excited. 

MELANIE: This is very valuable for being able to track, especially with so many systems [INAUDIBLE] for tracking how performance is happening. 

MARK: So I'd love to go back to and hear more about how your migration is going. Because it sounds like you've gone from On-Prem monolith to Cloud microservices in one go. Is that accurate? Or how has that journey been? 

TERRY: We started doing it, and we have deployed some services on GKE. But the majority of the backend is still in our data center and will probably take us a much longer time to do that. 

MARK: How have you been tearing it apart? What are you doing there? How's that working? 

TERRY: We try to find the most important or the most fundamental services-- like user services and like item services for us. An item is something that a user tries to sell. Finding these most fundamental services and make them as microservices so that some other team can-- when they need a new feature-- they can utilize these services to build new features. So we start from there, and we'll try to move as much of the system to GKE as possible. 

MARK: And why are you doing this? 

TERRY: I think we are at a point where we have more than 100 engineers working on the same repository. And it's like a half a million lines of code to make a simple code change. To modify some part of the feature, you have to deploy the whole thing. And you know, fingers crossed, nothing breaks. 

MELANIE: Because it never does. 

[LAUGHTER] 

TERRY: Right. Exactly. So I think that's the main reason-- to make our organization more scalable. 

MARK: Why the Cloud? Because you could do microservices on your own hardware. Why are you coming to the Cloud? 

TAICHI: The reason the Cloud-- so as I said before, each developer needs to operate their service. They also need to operate the database itself. So we want manage everything in On-Premise is super hard for normal developers. If we use the Cloud, they have use through API. And the developer can easily set up the database through these managed services. So that's why we need to move to the Cloud. 

MARK: Nice. How are you controlling what developers are able to do what? Are you just like, they can do anything, it's fine? Or are you being a bit more restrictive? 

TAICHI: At [INAUDIBLE] we use Terraform to set up the Cloud services. So currently, we manage the whole Terraform configuration in one repository. We prepare directory for each microservice, and each microservice team tries to send the pull request to this directory. And the microservice [INAUDIBLE] team is always [INAUDIBLE] And we check that the [INAUDIBLE] does not do the very strange stuff, or [INAUDIBLE]. So we try to limit that way. 

MELANIE: You've already talked a little bit about this in terms of the value of having microservices, but if you were to do this all over again, like tips, ideas, lessons learned that you'd recommend? 

TERRY: Start from the Cloud. Don't make any monolithic-- 

[LAUGHTER] 

I mean, we started five years ago. I mean, my colleagues started five years ago. They probably didn't have the option to start from what we have here. That's why we're doing this. 

MELANIE: Which is common. 

MARK: Yeah, but there are definitely lots of people who are in similar situations. So if you were like, this is the best way we've worked out to be like, this is how we do the conversion of microservices, or like, don't do it this way, what would you recommend? 

TERRY: I feel like we are trying to make too many changes at the same time. We're trying to rewrite the code from HP with GoLang. We're trying to deploy our services from On-Prem DC to the Cloud. And we are trying to migrate the database from there to the Cloud as well. The design is from a monolithic web app to microservice architecture. So we're trying to make so many changes, I think the difficulty explodes and sometimes makes things more difficult than it should be. 

MELANIE: Before we let you both go, anything else that you wanted to share? Any places that people can find more information about Mercari outside of the website? 

TERRY: We have an engineering blog. 

MARK: Oh, cool. 

TERRY: It's mostly in Japanese, though. 

MELANIE: Hey, that's OK. 

TAICHI: But we have English versions. 

MARK: Yeah? 

MELANIE: Oh? 

TERRY: Mercari's in English too. 

MARK: There's always Google Translate. It's fine. 

MELANIE: Yeah, we'll point everybody do that. 

MARK: Yeah. 

MELANIE: But yeah, this is great. So we'll make sure to get the links from you and share that in the show notes. 

MARK: Absolutely. What sort of stuff you cover in the engineering blog? I'd love to know more. 

TERRY: The technical stuff we use to the life of engineers, and what is an engineer manager-- like organizational things. Also, events we do-- we do many events in Japan. So every time we do, we also announce in our blog. 

MELANIE: What are some resources that you like to go to for help with some of the building up the stack that you have? 

TAICHI: I always listen to this podcast. 

[CHIMES] 

TERRY: I always start from Google. Google my problem, and then it will lead me to the right place. 

MELANIE: And then you go from there? 

TERRY: Yeah. 

MELANIE: Nice. Cool. Well, thank you. I appreciate both of you joining. And thanks for sharing all your insights. 

TERRY: Thank you. Thank you for your ideas. 

MARK: Yeah, thanks. Things were great. 

TAICHI: Thank you. 

MELANIE: Thank you again, Taichi and Terry, for coming onto the podcast while we were at Next. 

MARK: Yeah. Really great episode. And thanks for sharing your journey as well from building a monolithic application and then transferring that over to microservices, and how that's going, and all the lessons you learned along the way as well. 

MELANIE: All right, Mark. How do I use my existing identity management system with Google Cloud Platform? 

MARK: Yeah. I think this is actually a really interesting question too. I didn't even realize this was a thing, really. 

So basically, by default, Google Cloud is tied to Google Accounts. That's kind of how it was built. But you may have your own identity management system. Maybe you use LDAP, or probably some other things that I'm not even aware of. And you may want to use that instead, or basically integrated with Google Cloud so that you don't have to reinvent the wheel, essentially, which I think is really cool. 

So there's an article that we will link to. I will give you the top-level highlights here that I think are most important. But the great thing is is you can do this. So if you have an existing identity management system, you can integrate this thing. 

There are a set prerequisites to getting started. You need to identify a domain that you'll use to set up your Cloud identity account. You'll need to make sure that you have someone who can make text or CNAME changes to your DNS settings. And also, to allow your users to authenticate against your identity [INAUDIBLE] system, you'll need to implement a SAML single sign-on. We'll talk a little bit about that too. So you can do those three things. You can configure the ability to use third-party identity management. 

MELANIE: A couple other things we want to mention from the article as well is that they recommend doing a proof of concept to basically don't synchronize everything all at once. Try synchronizing a small number of users or a small group. And experiment with that first to make sure that your criteria and your configuration is properly set before you do synchronization. 

They also mention, you don't need to necessarily map your entire organization. It's important to plan what you really need to synchronize, and then go from there. They do have some pointers around mapping out the functional roles for your users and creating groups to map to those roles, grant roles to a Google group instead of to individual users when possible, because it's easier to add and remove members from your group than it is to update the IAM policy itself. So those are some tips. 

And they also do not default transfer passwords. They will do the transfer of the users, but the passwords themselves are not necessarily synced up on default. 

MARK: And it's worth noting that there are two different ways of doing the synchronization. There's Google Cloud Directory Sync, which will sync on a schedule. But then you can also have third-party identity providers do a direct connection as well. Each kind of has its pros and cons, depending on what systems you already have set up, how easy it is to use third-party, or whether you just want to do regular syncs on a regular basis. But you can look at both options as well. 

MELANIE: And the main thing to note is that, I know it's difficult to spend time when you've got so many other things going on to think about identity management, but it's really crucial. And it's useful, and it's important. And resources like this are helpful in trying to make it a little easier for you. 

MARK: Awesome. Well, Melanie, I know you're running off to the airport at some point soon. I know I'm running off for the airport some point soon. What are you up to? Where are you going? What are you doing? 

MELANIE: I'm just doing some training this week. But where are you going to be, Mark? 

MARK: Where? So When this comes out, I will still be at PAX Dev. And then I'll be hanging out in PAX West for a good chunk of the rest of the week. 

MELANIE: For those listeners who don't know, what is PAX? 

MARK: [LAUGHS] PAX is an 80,000-strong game conference. So PAX West-- this is the big PAX conference. Several days before is PAX Dev, which is a game developer conference, everyone gets together, talks about making games. I'll be talking about Agones, which will be fun. 

A couple of weeks after that, I will be up at Japan Next, also talking about games and Agones and chatting with a bunch of customers and stuff. So that'll be fun. First time in Tokyo, so I'm quite excited. 

MELANIE: That's your first time in Tokyo? 

MARK: My first time, yeah. 

MELANIE: Well, for me, in September, I'm going to be in Stellenbosch. 

MARK: Nice. 

MELANIE: Which is outside of Cape Town. And I am going to be at Deep Learning Indaba. It's a conference on machine learning. And the plan is for me to do a couple of interviews for the podcast out of Stellenbosch. And then after that, Mark, you and I are going to be at Strange Loop where we will also be doing another podcast recording that I'm looking forward to. 

MARK: Awesome. Well, Melanie, thank you for joining me on the podcast once again this week. 

MELANIE: Thank you, Mark. 

MARK: And thank you all for listening. And we'll see you all next week. 

[MUSIC PLAYING]