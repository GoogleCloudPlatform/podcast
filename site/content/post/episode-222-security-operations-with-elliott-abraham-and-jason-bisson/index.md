+++
audioDuration = "00:34:48"
audioFile = "Google.Cloud.Platform.Podcast.Episode.222.mp3"
audioSize = 50118878
categories = ["Security", "Mitre", "CLAM"]
date = "2020-05-27"
description = "We're discussing security operations on the podcast this week with your hosts Priyanka Vergadia and Mark Mirchandani."
draft = false
episodeNumber = 222
hosts = ["Priyanka Vergadia", "Mark Mirchandani"]
title = "Security Operations with Elliott Abraham and Jason Bisson"
image="/post/episode-222-security-operations-with-elliott-abraham-and-jason-bisson/images/hero/hero-EP-222.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/grn475/episode_222_security_operations_with_elliott/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

We're discussing security operations on the podcast this week with your hosts [Priyanka Vergadia](https://twitter.com/pvergadia) and [Mark Mirchandani](https://twitter.com/markmirch). They're joined by Elliott Abraham and Jason Bisson who start the interview explaining that they created the CLAM framework to help customers use Google Cloud security features to their fullest potential to create safe projects and relaxed clients. 

The CLAM (Cloud Logging Alerting and Monitoring) framework came about specifically to help customers transition products to, and run products securely in, the cloud. Using the Mitre GCP Matrix, the security team addressed each element with GCP product solutions, from initial access to persistence and beyond. CLAM is GCP specific, taking into account the default security measures GCP already provides and supplementing these measures with appropriate procedures for each client. Once the framework is in place and things are secure, clients can build on that with operational controls, such as SRE best practices.

Elliott explains the shared security model and how clients can shift more of the security responsibility to the cloud service provider by employing more managed services. Jason tells us about VPC Service Controls and how they allow clients to set specific security rules such as from where data can be accessed. They go on to describe the GCP Security Command Center and the tools available there.

We wrap up the interview with some tips from our guests, including what to do if you are compromised.  

<!--more-->

##### Elliott Abraham

 Elliott Abraham is a Security and Compliance Specialist based in Atlanta. Elliott works with Financial Services, Healthcare and Life Sciences and other Select Accounts migrating to or expanding their footprint on the Google Cloud Platform. Elliott has helped many customers to operationalize GCP Security solutions in alignment with their security, compliance, and regulatory requirements.

##### Jason Bisson

Jason Bisson is a Security and Compliance Specialist based in NYC. He works with Financial Services, Healthcare, Government, and Retail customers to explain the security, compliance, and regulatory abilities of Google Cloud Platform.

##### Cool things of the week

* Announcing Google Cloud Next '20: OnAir [blog](https://cloud.google.com/blog/topics/google-cloud-next/announcing-google-cloud-next20-onair)
* Celebrating a decade of data: BigQuery turns 10 [blog](Celebrating a decade of data: BigQuery turns 10)
     * A very special BigQuery Day (The Data Show, w/ Felipe Hoffa & Yufeng Guo) [video](https://www.youtube.com/watch?v=U2q9lfjw9EE&lis=)

##### Interview

* CLAM Framework [pdf](https://storage.googleapis.com/gcppodcast_files/CLAM%20Framework%20for%20Google%20Cloud.pdf)
* Mitre [site](https://www.mitre.org)
* Mitre ATT&CK [site](https://attack.mitre.org)
* Mitre GCP Matrix [site](https://attack.mitre.org/beta/matrices/enterprise/cloud/gcp/)
* SRE Handbook [site](https://landing.google.com/sre/books/)
* VPC Service Controls [site](https://cloud.google.com/vpc-service-controls)
* Cloud Audit Logs [site](https://cloud.google.com/audit-logs)
* Cloud Data Loss Prevention [site](https://cloud.google.com/dlp)
* GCP Podcast Episode 218: Chronicle Security with Dr. Anton Chuvakin and Ansh Patniak[podcast](https://www.gcppodcast.com/post/episode-218-chronicle-security-with-dr-anton-chuvakin-and-ansh-patniak/)
* GCP Podcast Episode 221: BeyondCorp with Robert Sadowski [podcast](https://www.gcppodcast.com/post/episode-221-beyondcorp-with-robert-sadowski/)

##### Tip of the week

Yuri Grinshteyn talks about the [new logging feature](https://cloud.google.com/logging/docs/view/logs-viewer-interface).
     
##### What's something cool you're working on?

Priyanka is working on [Building an Unbreakable DevOps Pipeline with Google Cloud](https://webinars.devops.com/building-an-unbreakable-google-cloud-pipeline?utm_campaign=DO%20xMatters%20Webinar%205.27.20&utm_content=129280973&utm_medium=social&utm_source=twitter&hss_channel=tw-130933506).

Mark is working on more videos and will be speaking at Next.

{{< transcript "[MUSIC PLAYING] MARK: Hey there, everyone. Welcome to episode 222 of the weekly Google Cloud Platform Podcast. 222, that's a palindrome, right? I mean, I guess it doesn't count when they're all the same number." >}}

PRIYANKA: Yeah. 

MARK: But it's kind of the-- anyway, I'm Mark Mirchandani. And I'm here, as always, with my good friend and colleague, Priyanka. 

PRIYANKA: Hi, everyone. I'm so happy to be here again. 

MARK: Always exciting to talk to you. And I think we've got a pretty cool guest lined up. Priyanka, do you want to tell us who they are today? 

PRIYANKA: Yes. We have got Elliott and Jason from Google, our own teams, talking about operational security and about the framework in security. 

MARK: We've been talking a lot about security lately, which hopefully people are still interested in. I think it's always a great topic to talk about. And there's just so many different areas to discuss. And so, today's conversation is going to focus a little bit more on some of the more practical things you can do and what it looks like to implement security in the cloud. We get some really great tips, and we discuss a cool framework that, while it may have a funny name, is no joking matter when it comes to securing your cloud environment. 

PRIYANKA: Do you want to talk about the funny name? 

MARK: No, I was going to tease it and then let people, you know, kind of be surprised by it. 

PRIYANKA: Oh, OK. That makes sense. 

MARK: I didn't want to spoil it. 

PRIYANKA: I don't want to spoil it, though. Yeah. 

MARK: We'll just leave that where it is. 

PRIYANKA: We'll leave it at that. 

MARK: All right. 

PRIYANKA: Yeah. No, I like that. 

MARK: And then after our security conversation, we will have a great tip from, once again, the Stack Doctor, Yuri Grinshteyn. But before we do any of that, why don't we go ahead and get into the cool things of the week? 

[MUSIC PLAYING] 

PRIYANKA: Awesome. So I have one cool thing of the week. You might have seen the announcement. Google Cloud Next '20 is back. We are going to do this on air. 

It's a multi-week event. It's going to be digital series on demand in nature. It starts on July 14. And up until September 8, we're going to continue to drop fresh content every week. 

So take advantage of that. Enjoy it. And, yeah, this is going to be fun! 

MARK: There's definitely been a lot of work in trying to figure out a new way to host Next, which is normally a very, very busy week with a lot of people coming into the different physical areas. But now they're going to spread it out over these couple of weeks and make some really great content available. So definitely make sure to check it out. It's going to be a lot of fun. 

PRIYANKA: Mark, what's your cool thing of the week? 

MARK: Well, you may also have heard that BigQuery has turned 10 years old today. Yay! 

PRIYANKA: Yay! 

[HORN HONKS] 

MARK: Well, actually it's not today. It was last week, but it turned 10 years old. And there's been a bunch of great people talking about it, a lot of people who have been involved with BigQuery from the start, through the history of it, and also people who are working on it now. 

There's a ton of Twitter posts and video posts, but I think the best link to check out is there's a link to the blog post that links to a couple of these. But then there's also an episode of "The Data Show." And so that is a show that two of our friends, Felipe and Yufeng, are doing. 

PRIYANKA: But this one's super special because we have ours appearing for a little bit in there. 

MARK: And we've got some other surprise guests showing up. So it's definitely worth checking out. It's a lot of fun. And it's cool to hear about how BigQuery has evolved over time. 

And if you're not familiar with BigQuery, then you definitely need to check out "The Data Show" episode and hear a little bit more about it. But we've talked about BigQuery in a number of podcast episodes as well. With all that being said, why don't we go ahead and jump into the interview? 

[MUSIC PLAYING] 

Jason, Elliott, thank you so much for joining us. To start things off, can you tell us a little bit more about who you are and what you do? 

ELLIOTT: Since my last name begins with an A, and A comes before B, I think I'll go first. I am Elliott Abraham. That's Elliott with two L's and two T's. And I'm a Security and Compliance Specialist for Google. 

I'm based out of the Atlanta office. I bring 25 years experience in the cyber security and risk management space. Fun fact, I received my very first security-related certification in 1988. 

MARK: Hooey! 

ELLIOTT: I was certified by the NSA as an information systems security officer. And so I've spent the last 25 plus years helping organizations develop cyber security and risk management strategies. And that's kind of what I do here for Google is I help customers to understand how to best utilize the GCP Security products to align with their overall security objectives. And I spend most of my time these days helping people understanding how to operationalize our security products. 

JASON: My name is Jason Bisson. I'm a Security and Compliance Specialist based out of the New York office. I've been at Google for about 2 and 1/2 years now. And what is my job is talking to customers about the preventative, and the detective, and remedial controls that we have on the Google Platform. 

The way the I know that I've done my job is when the customers-- and I've actually had them say this, is like, I'm not worried about Google from an infrastructure security perspective. I know that you guys have all those controls. But one of the things I'm concerned about is all these controls you've talked about and how I get my team trained up and how we get these implemented. 

Before I came to Google, I had a number of operational roles on the infrastructure side dealing with things that go bump in the middle of the night. Recently being at home, I got to practice that skill again with dealing with a low battery fire alarm chirping at 3:00 AM. Don't know why they always are at 3:00 AM. But just like an ops person, I pulled the alarm and threw it in my car, and then I dealt with it later in the night. But what we do is focus on the operations side here of how our customers are reacting to these kinds of potential attacks and alerts. 

MARK: And I think it can help you understand a lot more about security best practices that don't involve taking the problem, throwing it under a pillow, and dealing with it later. I'm guessing security doesn't wait like that, and I think that's what we're here to talk about today. 

ELLIOTT: And security operations really should not be as exciting as Jason waking up at 3:30 in the morning, grabbing the fire alarm, and throwing it under a pillow. When we've done our job correctly, when we've instructed our customers and advised them appropriately, security operations should not be a job that's going to induce any type of adrenaline at all. 

JASON: Should be boring, right? 

ELLIOTT: It should be boring. 

MARK: That's a really good goal. I really like the idea that if everything's done right, no one will know that anything has been done at all. 

ELLIOTT: Exactly. 

PRIYANKA: So Elliott, can you touch a little bit about the framework that we're going to talk about today, that security framework that we are here to hear everything about? 

ELLIOTT: The genesis of this entire framework that we put together, it originates in ask, a very frequent ask from customers large and small. Every time we meet with customers, not just me but members of our team, for customers that are making this journey into the cloud, they're comfortable in an off-cloud setting. But when they're making this journey and this transition into the cloud world, the question is, what should we be looking at from a signals, a telemetry standpoint? What are some of the operational signals that we should be looking at and monitoring in order to keep us safe? 

And so, after hearing this question over, and over, and over again and answering this question from customers large and small, we started to focus on, if it were me-- when I was an operations manager, one of the things that I wanted to know was, what's going to keep me away from my senior vice president's desk on a Monday morning, which is the things that are going to keep us most safe. And so to answer that question for our customers, we focus on those things that are going to keep your cloud environment safe, ideally, if done right, should keep your boss's name out of the newspaper on any day of the week. 

And so we focus on a threat-centric approach to monitoring. What are the things that a threat actor could do to attack you, and what are the signals that will be indicative that something is amiss? So we looked at the industry, and we found that there is an organization called Mitre. And I've used this Mitre framework and the Mitre matrices. 

Many of you may have heard of them, but Mitre publishes this framework called ATT&CK. And the acronym is A-T-T-@-C-K. And it stands for Adversary Tactics, Techniques, and Common Knowledge. And so these are the steps and the actions that a threat actor would take if they were to try to exploit your environment. And so these are just very, very prescriptive things that a threat actor is going to do. 

And so we looked at that from a GCP standpoint. And, lo and behold, Mitre had published a matrix specifically for GCP. And so what we did is we took the Mitre Matrix, and we aligned that with our security products and our solutions that we have in GCP to address each and every individual element in the Mitre Matrix for GCP. And this encompasses everything from initial access all the way down to impact. 

And the Mitre ATT&CK framework is kind of analogous to the Lockheed Martin Cyber Kill Chain, which is the sequential steps that a threat actor would take in order to compromise your environment. So the CLAM framework is Cloud Logging, Alerting, and Monitoring framework. I'll say that one more time for our listeners. The Cloud Logging, Alerting, and Monitoring framework. And these are the things that you should log for, alert on, and monitor looking for indications of those tactics and techniques that a threat actor could do from initial access, persistence, privilege escalation, defense evasion, et cetera, that's spelled out in the Mitre ATT&CK Matrix for GCP. 

MARK: And so I want to go more into the CLAM framework. But before we do that, the Mitre ATT&CK, it's really interesting. You said they have this matrix of specific types of actions that can be taken against GCP, for instance. I'm curious about two things. First of all, can we get an example of what some of the things on that framework are? 

And two, how does that compare-- I mean, obviously there are a lot of differences between Cloud security and on-prem security. What does that look like for cloud versus cloud security? We have different cloud providers. We have people who are running their own private clouds. How does that framework address different clouds? 

ELLIOTT: That is a very good question. So Mitre as an organization, they actually look at not just one cloud; they look at all the clouds, and they even look at the enterprise. What's interesting is that the Mitre Matrix for the enterprise is very, very expansive. It's very expansive, and it really gets into a lot of granular detail. 

For GCP-- this is why it's going to vary cloud to cloud because not every cloud vendor approaches security the same way. There are certain things at GCP that are what we call table stakes for us that we do by default. Encryption at rest, we do that by default. There are certain things that we just do that other cloud vendors may not do. And if they're starting to do it, they're a little later to the dance for us. 

But Google is an engineering company. We've been in the cloud business for the past 15 years of our existence. And so we understand a lot about these adversaries. With having all of the many products that Google has, with at least a billion users in each, we've seen a lot of attacks, we've seen a lot of tactics, and we've seen a lot of adversarial techniques. 

JASON: I think, Elliott, that aligns to the comment that I was making about our customers saying, yeah, I get it. You guys are doing a great job on the infrastructure security side. But when it comes to what our customers have the control, so when we get into that fun shared responsibility matrix, some customers like that comment. Some don't. They're like, what do you mean I got to be responsible for something? 

And then we get into the toggles that they have to turn, and that's where the concern comes. And I think this kind of framework lays it out. There's just nine different pillars there, but there's a loop there of like, OK, what's the data you have to look at? What are the potential mitigations that you can put in play, and to Elliott's point, when you're getting alerts? So all those kind of things that they get that we have. But they're more concerned about the people on their side, how they have to get comfortable with these new dials, I guess we'll say. 

PRIYANKA: So it sounds like what the framework does, it allows us to execute on the shared responsibility model in a very systematic approach, looking at these steps and then checking those off, I guess, in some ways, and then getting satisfied that, yes, you have done all the right things and executed on the right steps in order to solidify how your infrastructure can be considered safe given that it'll always be the start process that in any type of cloud, not just in GCP, there is always going to be shared responsibility model. How do you actually execute on that? How do you feel comfortable as a security admin and operations person to feel confident in what steps you've taken to feel safe about your infrastructure? 

ELLIOTT: You did, you did. And one of the things that I want to point out about the CLAM framework is it's not the end of the journey, it's not the end of the story, nor is it a panacea. But what it is, it's a foundational element of logging, alerting, and monitoring upon which additional operational controls and concerns can be built upon this framework. 

When we approached building out this framework, we looked at, what are the things that the threat actors are going to do? How can we identify them specifically with GCP solutions? And do they align with something that is recognized in the industry, which is where we went to Mitre? By implementing this framework, what you've done is you've taken care of the threat first. 

And after you've gotten the threat, the things that are going to keep you safe, then you can start building on operational controls. You can start to do things like incorporating the SRE best practices. We published an SRE handbook that talks about the four golden signals for monitoring. You can focus on some of those operational things that's going to make you more efficient. But we feel that you want to make sure that you are secure first, and then you can improve upon and beautify that later. 

JASON: And one of the things that you'll see in this framework is a lot of it goes back to the actual user accounts and them being potentially compromised. And one of the things that I found with the most mature customers that we have out there is they spend a lot of time dealing with what I call "the boring stuff." And that's like user provisioning and deprovisioning. 

It's a very boring, simple thing, but I've had some customers that are like, you know what, I'm going to get it right. It's going to take a couple months. I'm going to do these queries. I'm going to make sure I'm always getting it. 

And then we see some other customers, it's two years later, and I'm still manually provisioning through the GUI, right? And that becomes a very difficult conversation when it comes about entitlement reviews. And potential compromises can happen because you don't know what your accounts are because you have this manual bespoke process. But yeah, it goes down to those fundamental things that are in the framework. But it always comes back to, a lot of times, about the account getting compromised. 

MARK: So, obviously the user space is a big area of potential concern for security. It's always going to come down to who left their password on a Post-it note under the doormat, and then somebody grabbed it. And then, bam, every control you've put in place has now essentially been compromised or could quickly be compromised because you've got this action there. 

Two things. First of all, we talked about the shared security model. Can you just briefly tell us what that really means in two sentences just in case people aren't familiar with it? And then, two, like what are the actual things that you can follow by in the CLAM framework? What are some examples people can use to look at other than just setting up logging, setting up monitoring? 

ELLIOTT: So the shared responsibility model essentially simplified is the customer's data always belongs to the customer. Your data is your data. The cloud service provider, in this case GCP, is responsible for security of the cloud, and the customer is responsible for the security of what they put in the cloud. 

The cloud service provider is responsible for the security, and the maintenance, and the uptime of the cloud. The customer is responsible for security of what they put in the cloud. That's an oversimplification. We can get a lot deeper. 

JASON: Yeah. I was going to to say, it could get a lot deeper. 

ELLIOTT: Because it's going to vary. 

JASON: When you throw in Kubernetes in there, then it becomes confusing and so forth like [INAUDIBLE]. 

ELLIOTT: Absolutely. It will vary, depend on your cloud delivery model, whether you're doing infrastructure as a service, platform as a service, and software as a service as well. And also, the various services that one will consume in the cloud will also dictate where the shared responsibility model fall. 

But the more managed services that a customer consumes, the burden is shifted more towards the cloud service provider in terms of security. So for any customers out there that are thinking about dipping their toe into the water and beginning their cloud journey, just know that the more managed services that you consume, you're shifting that operational and that security burden from some of those things that you would have to do in your own data center to the cloud service provider. 

JASON: We have some really interesting controls when it comes to that-- no, on the preventative side-- that are unique to Google. And from the managed Google services, we have a product called VPC Service Controls. It's really a unique wanted special because you have the IAM side. That's the policy. I have authorization to that Google storage bucket. 

But then comes in this next level of control, which is VPC Service Control. And it basically says from where, where are you going to be able to access that? So you have those things where things get misconfigured for authorization, but then you have this other level. 

And it works all the way at the top of the org level of your GCP environment. Really awesome stuff that we have there to help control the environment and segregate duties from security operations and infrastructure security and then the actual business users and developers. So very cool stuff that we have there, but it always goes back to the controls that you have in place, how many layers. 

ELLIOTT: And so, Mark, you mentioned about credentials and users. That's what the threat actors are really trying to get. How can I get a foothold into your environment? And how can I gain some access, gain some type of credentials that I can then do something with? 

And so with the CLAM framework, just to walk you through one of the ways we look at this in the CLAM framework is, we look at what's called initial access. That's called out in the Matrix invalid accounts. And the data sources that's going to give us those signals that something may be amiss are our Cloud Audit Logs and our Authentication Logs. And we can detect those anomalies using some of our products, such as Event Threat Detection and our Cloud Anomaly Detection. 

Cloud Anomaly Detection, for example, one of the things that threat actors like to do is to, once I harvest some accounts, they don't want to keep that stuff secret. It's kind of like they want to brag about it. So they'll upload these accounts to a public GitHub repo so that they can share it and use it as a badge of honor. 

So we can detect that. Whenever any service account keys or any credentials have been leaked to a public repository like GitHub, we know about it. And we can detect it and let our customers know. And that is surfaced in our security dashboard that we call Security Command Center. We lay this out, initial access valid accounts, the data sources, the detection, and the mitigation. 

The mitigations for this are several, and we'll make this document available for your listeners. But we can set org policies that can limit who can even create a service account key. We can monitor Security Command Center for anomalies that are surfaced by Cloud Anomaly Detection. You can set up, as Jason mentioned, VPC Service Control, which is going to prevent data exfiltration. 

You can enforce the use of 2-step verification or multi-factor authentication. And you can install password checkups in your corporate browsers as well. These are just some of the things that we go through in a very prescriptive way to let our customers know how they can detect and mitigate the threats once they surface. 

JASON: Those service account keys Elliott's mentioning are really critical. Those are the ones that we have this conversation. And this is the only real big secret that customers have to be concerned about when coming to the platform. And one of the things that we say is the best secret is to not have any secret at all. 

And what I mean by that is the customers that I talk to I'm like, OK, when you are operating within the GCP Platform boundary, you do not need to download that key or anything like that. Absolutely not necessary. You only need that key when you are operating outside of the platform. And once I keep on saying that, then they start to say, well, how many things can I run within the platform? 

And thinking about infrastructure is code-- everybody is talking about that today, of like how to deploy things, the accounts that are necessary to deploy that infrastructure usually have very vast permissions. And nobody wants to think about changing those or taking them away. But if that process ran within the platform, you eliminate that risk of that key getting compromised. I've been on some awkward calls where that key gets shared. And it's not malicious, but it becomes very awkward. 

How did you get that key? Where were you coming from? Because that's one example of that key where, try to push some things into the platform. And I know not everything possibly can, but that's a way to mitigate and not have a secret. 

PRIYANKA: So Jason, that was a great example of best/worst practice. 

JASON: Yes. 

PRIYANKA: But can you touch a little bit more on some of the other practices that could be best or worst but great to learn from in respect to security and the CLAM framework in general? 

JASON: So that one covered the secret side. The other one is focused on data exfiltration. And that's the one, the CSO never wants to hear that word because then, as Elliott was talking about before, then they have to have that awkward walk down the hall to the other C-suite and explain to them that they are going to be on the news and not in a good way. 

So this is where we focus on the public exfiltration point, so that that storage bucket that has all your great PII data on it, we have controls. We were mentioning again VPC Service Controls. So I have two layers of control that folks have to break into, VPC Service Controls and IAM, and focus on that data exfiltration. 

Another thing is knowing, what kind of data do you have in those buckets? And that's where we have a Data Loss Prevention tool that's pretty awesome and can tell you from a programmatic way, oh, yeah, you have some service account keys in that bucket. Didn't you know? And those are the kind of things that we focus on is limiting the public exposure. 

And then finally, going back for account management, trying to have two-factor authentication for every account that you potentially can have where there's a user. And some customers have that because when they're configuring their authentication, it's always going to go back to their environment. And maybe they don't have two-factor yet, like we take for granted at Google that we all have two-factor. 

And sometimes it's a pain, but all the time when I press that button on the key, I feel pretty good about it. Except I do have the threat of potentially insider risks of my daughters in the house. So I don't know how to fix that one yet. 

ELLIOTT: But one of the things that Jason mentioned that I think is very important to understand is how seriously we need to consider data governance overall. You're going to have PII data in living in your environment, but where is it? Because data exfiltration is one of the primary objectives of the threat actor. I want to get access to something to find out what you have. And once I find out where these secrets are, these crown jewels, I need to get this out so that I can do something with it. 

And some of those controls that Jason mentioned will help us to make sure that these most sensitive crown jewels are kept secret, but we can also identify where this data lives. And so we have tools in place that can identify where myriad different categories of data are in your environment. And so we also have the ability to do data classification with a Data Catalog because not only is the data important, but the metadata about the data is important. And that is an area where many of our customers, they haven't developed a process. 

I speak to customers all the time, that are in some very, very large accounts, that they have not considered metadata management. And you can rest assured that if you haven't, the threat actors have. And the threat actors are looking to harvest information gleaned from the metadata that can paint a fuller picture for them of what you have and where it lives. And then they can craft tools and weaponize these things to do something about it. So metadata management is very important. 

JASON: That's a perfect example of, like in my old operational role, thinking, oh, yeah, I'm just going to give them read-only-access and stuff like that. But in this perspective, you have read-only-access, and let's say you could see our cloud Security Command Center. And you have read-access to that. 

Oh, I can see that you have an open firewall to the whole entire world. And oh, there's a public bucket. Oh, I'm going to go after that. So sometimes it's just about them doing discovery. 

And for folks on the call, they all know this from the security side, it does take a while for them to find things and be tenacious about waiting and being patient. And that's how sometimes people get compromised. They don't even know it because they're setting up and thinking from the ops side. Redundancy was always a good thing. But when the hackers have redundant access to your environment and you're playing whack-a-mole, that's not a fun place to be. 

And that's where the detective controls come in, to pop up those anomalies of, hey, where did that account come from, and why is that there now? That didn't come from our standard process, did it? And then not panicking, right? 

Once you think you are compromised, you have to have a run book of incident management where you do not panic. You collect the data of what they're doing, take some snapshots in the back end, potentially some memory in the VM that might be potentially compromised. So then you have an information to go after it. But yeah, it's a whole framework, and it does take some time to go through. But it helps set the story for customers so they have something actionable. 

MARK: Yeah, and I'm really excited to hear that we'll be able to share that link with all of our listeners. So we'll make sure to put that in the show notes. And I know, gosh, I feel like we could talk about this forever, but we probably need to go ahead and wrap things up. 

But for people who are interested in learning more about this, whether you're going to be in charge of implementing something, a lot of these aspects of the framework at your company, or whether you're going to just be affected by it, no matter what, it sounds like checking out this framework is a great way to at least understand a bit more about what's going on. Are there any other tips you can share before we wrap up for how people can get started with it or where else they should be looking? 

ELLIOTT: Well, I would just want to share that technology is not the answer to every problem. Security when done well is the synergy of people, processes, and technology. And I've had that conversation with everyone, from a CSO all the way down to a security ops analyst, that it's people, processes, and technology. 

And once we get the understanding of, I need to have a process in place. I need to have trained people in place in order to operate that technology effectively because we're looking for a tool, we're looking for technology to solve all the world's problems. But that's insecurity, that's not it. And so that's the boring stuff, but it's the basic best practice conversation that we have to have with customers all the time. 

JASON: Do the boring stuff first, all those little things that nobody really wants to do. So then your security operation center can be boring. And I think every C-suite wants their security operation site to be a boring place. It can be an interesting place but boring from red flags and so forth like that. 

MARK: Yeah. Ultimately, the goal of not showing up on the news is a pretty good goal to have, I think. I'm sure there's more detail-- 

JASON: Always. 

MARK: --that goes into it, but that can be the top tier of where you don't want to be. 

JASON: Absolutely. 

MARK: Well Jason, Elliott, thank you so much for coming. And this was such a great-- I feel like we could probably go on for another hour easily because I want to hear more about the framework, but we know we'll have a link to it in the show notes. And then maybe we can come back around some time and talk a bit more about the best practices that do come out of people implementing this and maybe some tips for what to avoid when it comes to, how do you migrate from the security practices that you had on-prem to the ones that you need to figure out for the cloud? 

ELLIOTT: Sure. 

MARK: Awesome. 

PRIYANKA: Thanks, Elliott and Jason. 

ELLIOTT: Thank you for having us. 

JASON: Yeah, no problem. 

MARK: Thanks so much to Elliott and Jason for coming in to talk about the CLAM framework and some of the tips that you can do for securing your cloud environment. The things to think about, there's a lot there. And I think when people who maybe work with the cloud more than working with on-prem, they take for granted a lot of the security that's built into cloud environments. 

And so it's always interesting to think about that perspective from, how does that translate from on-prem to cloud? What different things do you have to think about? And at the end of the day, how do you make sure your system stays secure? 

PRIYANKA: Yeah. We talked a lot about the shared responsibility model and the Mitre framework and how it applies to Google Cloud specifically. So all that was really enlightening to hear and how to proceed when you think about security operation centers. So I thought it was a great talk. 

MARK: It was a really good one. And last week, we had-- that was episode 221-- we had with Max and Rob talking about BeyondCorp. And then two weeks before that, we even had another episode talking about security with Chronicle, right? 

PRIYANKA: Yep. 

MARK: So there's some really good security content out there. I think we actually have some more coming up, too, because I think there are a bunch of cool topics right now. So if you're into security, hopefully these are some great stories to share and some great things to think about, and I'm super excited to talk more about it. But since we were talking about all of this, I thought for our helpful tip of the week, we could go ahead and get Yuri Grinshteyn, Stack Doctor, to tell us a little bit more about, believe it's a new feature in the logging. 

[MUSIC PLAYING] 

YURI: That's right, Mark. As you all might know, there's a new version of the Logs Viewer in Cloud Logging that's been in preview for quite some time. It's a full rewrite of that UI which I'm really excited about. 

And so this week, we released a new feature in the new UI called the Logs Field Explorer. It's an additional panel that essentially provides a more efficient way to refine your logging queries. For a given log field, it shows a sorted count of entries for each value. 

So now, you can quickly and easily understand things like what are the error types that I see in logs over a period of time, without having to run separate queries for each error type. You control the time period the same the way as before just by using the Query Builder. Then the output of the query is essentially broken out for you in this new panel. 

I found this incredibly useful in analyzing container logs, for example. Just by searching for Kubernetes containers under resource type in a Query Builder, the Explorer automatically breaks down a count of log entries from each cluster, each zone, or region, even each namespace, all without me having to do any additional queries to figure that out. This just makes understanding logs and figuring things out so much easier. I am super excited about this feature, and I hope you all try it immediately. 

MARK: Awesome. It's a great tip from Yuri. And hopefully people get a chance to check that out and try it out for themselves. 

PRIYANKA: Yeah. 

MARK: So before we wrap things up, Priyanka, what cool projects are you working on? 

PRIYANKA: So I have a webinar coming up pretty soon here on 27th, going to be speaking with xMatters and SADA Systems. And we are talking about building DevOps pipeline with Google Cloud. So if you're interested in DevOps and would like to learn more, we are going to talk all about how to use Cloud Build and create the DevOps pipelines. 

MARK: That's today. 

PRIYANKA: It's 27th at 1:00 PM Eastern. 

MARK: 27th at 1:00 PM Eastern. That will be right after. So if you listen to this episode right when it comes out, then hopefully you can jump right off of this episode and head over to the webinar. If not, then I'm sure they'll make the webinar available for other people, right? 

PRIYANKA: It will be available for on demand watch as well. So we'll just put the link in the description. If you can catch it live, great. If you can't, then you can still use the link to watch it on demand. 

MARK: Awesome. And of course, there's been a lot of work going into these Next events that are happening, as you mentioned earlier, over many weeks. And so you'll probably see myself and a few other teammates working on some very, very cool videos and talks. So definitely keep an eye out for that, but it is a multi-week event. So there will be tons of great content to check out there. 

PRIYANKA: Yay! So exciting! 

MARK: Awesome. Well, Priyanka, always good to get a chance to chat with you. And to all our listeners, thank you so much for listening. We will see you all next week. 

PRIYANKA: Bye, everyone. Thanks for tuning in. 

[MUSIC PLAYING] 

MARK: Oh, and obviously I should've mentioned this before, but cell phones on silent, no external things around. If you have a Furby, turn it off. 

[FURBY TALKING] 

Just those sorts of basic steps. 

ELLIOTT: I have a grandpuppy, my son's dog. So-- 

[LAUGHTER] 

MARK: I was trying to figure out what that looked like. 

JASON: Close to a Furby. 