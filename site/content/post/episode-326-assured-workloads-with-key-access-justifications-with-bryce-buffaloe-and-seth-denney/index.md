+++
audioDuration = "00:42:17"
audioFile = "Google.Cloud.Platform.Podcast.Episode.326.mp3"
audioSize = 60897248
categories = ["Security", "Data", "Sovereignty"]
date = "2022-11-02"
description = "Hosts Max Saltonstall and Daryl Ducharme are joined by Bryce Buffaloe and Seth Denney to chat about Assured Workloads and the sovereignty control Key Access Justifications so customers can see how their data is used and control who can see what. "
draft = false
episodeNumber = 326
hosts = ["Max Saltonstall", "Daryl Ducharme"]
title = "Assured Workloads with Key Access Justifications with Bryce Buffaloe and Seth Denney"
image="/post/episode-326-assured-workloads-with-key-access-justifications-with-bryce-buffaloe-and-seth-denney/images/hero/hero-EP-326.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/ykadtq/episode_326_assured_workloads_with_key_access/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Hosts [Max Saltonstall](https://twitter.com/maxsaltonstall) and Daryl Ducharme are joined by Bryce Buffaloe and Seth Denney to chat about Assured Workloads and the sovereignty control Key Access Justifications so customers can see how their data is used and control who can see what. 

Assured Workloads with Google is a security and compliance engine that allows users to control their data with the help of Google. With the expansion of data use around the globe, data sovereignty has become more important as well, and Google Cloud products offer myriad tools to maintain control, privacy, and compliance no matter the location. Seth talks more about sovereignty and how it's changing data storage and management. Our guests talk about how Google has tackled the sovereignty issues, difficult decisions that had to be made, and the process of working with clients to optimize tools for different security and sovereignty scenarios. 

With Key Access Justifications, Google has bolstered its offerings to provide clients with trustworthy controls to keep data secure and sovereign, from Compute Engine VMs to BigQuery. We learn what Key Access Justifications look like for users and how the encryption keys work in different Google Cloud services. Customer managed key material is stored outside of Google and the key manager must give permission for access for an added layer of trust and security. Seth and Bryce explain why this is important and describe how KAJ are used with some examples. These features may also be used to improve security in the future by preventing data from being decrypted and stolen should someone ever get access to your system. We hear more about the future of data security and sovereignty, including simplifying the process with managed services and easier onboarding. Strategic European partnerships are helping Google tackle these important issues overseas so clients can focus on their businesses and worry less about data security.

The catalyst for KAJ was a large German bank that recognized the sovereignty changes coming, and we hear more about the origins of KAJ and the path to where it is today. When paired with Assured Workloads, clients get maximum sovereignty coverage. Seth talks a little about the Sovereignty Access Controls done internally as well. Bryce walks us through using these Google services with a European example. 
 
##### Bryce Buffaloe

Bryce is Product manager for Google Cloud Security managing the portfolio of the Assured Workload’s solution suite.

##### Seth Denney

Seth is KAJ Tech Lead, responsible for ensuring the integrity and usefulness of KAJs to support customer data sovereignty

##### Cool things of the week

* DevFests [site](https://developers.google.com/community/devfest)
* Best Kept Security Secrets: Tap into the power of Organization Policy Service [podcast](https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5saWJzeW4uY29tLzQwOTc1Ny9yc3M/episode/Y2Q2ZDhlYTctMzdlNS00YWM4LTk5ZjUtODQwOTRjMmQ5ZjFi?sa=X&ved=0CAUQkfYCahcKEwiwnY_n1IP7AhUAAAAAHQAAAAAQAQ)
 
##### Interview

* Assured Workloads [site](https://cloud.google.com/assured-workloads)
* Assured Workloads Playlist [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqID95dceXbJH-tioBL72_jp)
* Key Access Justifications [docs](https://cloud.google.com/cloud-provider-access-management/key-access-justifications/docs/overview)
* Compute Engine [site](https://cloud.google.com/compute)
* BigQuery [site](https://cloud.google.com/bigquery)
* GCP Podcast Episode 325: Digital Sovereignty with Archana Ramamoorthy and Julien Blanchez [podcast](https://www.gcppodcast.com/post/episode-325-digital-sovereignty-with-archana-ramamoorthy-and-julien-blanchez/)
* T Systems [site](https://www.t-systems.com/de/en)

##### What's something cool you're working on?

Daryl just released a [video](https://www.youtube.com/watch?v=C1Reg1u1MXY&feature=youtu.be) about using Workflows' new parallel step.

Max is working on crossover episodes across our various podcast streams, so we can have SRE guests on to the GCP podcast to talk reliability, for example, or bring some of the Kubernetes hosts to the Cloud Security podcast to discuss securing Kubernetes workloads.

{{< transcript "[MUSIC PLAYING] MAX: Welcome to episode number 326 of the weekly Google Cloud Platform Podcast. I am Max Saltonstall, and I'm here with my colleague, Daryl Ducharme. Hey, Daryl." >}}

DARYL: Hey. Thanks for having me on. This is nice to finally be on here. 

MAX: Yeah. It's great to record with you, and we had a lot of fun. We talked to Bryce Buffaloe and Seth Denney, both New Yorkers, so we could actually sit around a table, which I think may have been my first podcast interview around an honest-to-goodness physical table. And they joined us to talk about assured workloads and key access justifications, pretty cool stuff. 

DARYL: Yeah, definitely. And those words are like, what is that to me? But it's really cool, because on some clouds, regulating workloads can compromise the functionality and flexibility, but they discussed Google's solution of shared workloads and key access justifications and made it make sense. 

MAX: And it really helped me understand the kind of controls that we're building to help customers not only see how their data is getting used, but even control when it can or can't get used or seen by Google's tools and services. But, before we get to the interview, let's talk about our cool thing of the week. Daryl, what's your cool thing? 

DARYL: For me, the cool thing of the week is basically DevFests, which are local tech conferences hosted by Google Developer Groups, which is perfect for practicing new stuff that was mentioned at Cloud Next or CubeCon. And you can find out more by just going to developers.google.com, and on the community dropdown, just click DevFest and find out more and find your local DevFest happening. It's pretty exciting. 

MAX: Wow. So we could actually see each and other developers in-person? That's the thing? 

DARYL: Yeah. I'm such a huge fan of community. It's a big deal to me. 

MAX: That's awesome. My cool thing of the week is a new Google Cloud Reader episode on best-kept security secrets, because this is the tail-end of October, Security Month. And this one focuses on organizational policy and ways you can use it within Google Cloud. 

So restricting what services or resources different people within your organization can use or access, or making DNS enforcements or Virtual Private Cloud networks. There's really a lot of powerful tools here to make sure that your data and your services only go or see what they ought to. 

So check out Google Cloud Reader, link in the show notes. That episode is a podcast of a blog post by Anton and Seth, part of our Security Action Team, and they've also got a "Cloud Security Podcast" episode about a similar topic. So it's just blogs, podcasts, blogs, podcasts all the way down. 

DARYL: Yeah. And it's all about security, which is perfect for this episode, because security is about trust, and that's what assured workloads and key access justifications are all about. 

MAX: All right. And here is our interview with Bryce and Seth. 

DARYL: Here we are with Seth and Bryce. You guys want to tell me who you are? 

MAX: And what you do at Google? 

SETH: Sure. I'm Seth Denney. I'm the Key Access Justifications Tech Lead. Key access justification is a sovereignty control that we will talk about much more in this podcast that allows for much more flexible use of Google Cloud and its services while still maintaining what we call digital data sovereignty. 

BRYCE: And I'm Bryce Buffaloe. Again, that is my last name. I'm a product manager here working specifically on what we call internally-regulated cloud, but externally-assured workloads. And I focus on the portfolio of products underneath that umbrella. 

MAX: So a shared workloads could mean a lot of things. What is your definition for assured workloads in the context of what Google Cloud is offering and specifically what we're offering to states and federal government? 

BRYCE: Sure. Yeah, I mean, it's for everybody. But assured workloads, effectively, what it really is it's a security and compliance orchestration engine for GCP that allows us to make regulated components for our customers. 

Meaning that we take on more and more of the responsibility for our customers to do things like keeping your data within a certain region, restricting the access to only personnel that you deem can or should access it or regulators deem can or should. And then also being able to put in the controls about sovereignty, which we'll talk more about today. 

MAX: Can you help me understand the difference between assured workloads and cloud sovereignty guarantees that Google might offer? 

BRYCE: Sure. I mean, the two really go together. Assured workloads first started off and we focused a lot in the US. We focused on regulatory regimes we saw there where it was FedRAMP, FedRAMP High. But what we were really focused on was personnel access controls and also focused on data residency were the two real things we were trying to do. 

But as we start to see outside of the US where we have things like the US CLOUD Act was introduced, and now we have non-US countries that are looking and saying, hey, how can you help me with things like legal seizure requests and other things like that? 

We had to really step up our game a lot and come to a place where sovereignty becomes this whole component of now is, how do we take the baseline of assured workloads and elevate it to an even greater point of data security and data access security for our customers that give them greater assurances? 

So I don't think of the two as separately. One is relying upon the other and they build off each other to give that end result to our customer, which is really the trust in data security that they want. 

MAX: The assurance, maybe? 

BRYCE: The assurance. It's the hot word that we have now. 

DARYL: Maybe we want to get into some more specifics of how data sovereignty actually helps somebody, because we don't want it to just be a buzzword, we do want it to be actually, what does it do for them? 

BRYCE: This is like a really cool point, because it's a really tough thing. Sovereignty is actually a really tough subject for a lot of customers out there, and it's not just something where it's a made-up word, but it's really hard-to-describe word. 

MAX: Sovereignty, sovereignty-- it kind of sounds like a made up word at the end after doing too many of these, Bryce. 

BRYCE: Well, some other cloud providers will try and convince you it's made up, but we take it pretty seriously here. And the reality is that when it comes to sovereignty, a lot of our customers are, again, deeply confused because they're not sure what it really means. Does it mean that your data stays in one place like GDPR? Does it mean that only certain people can access it like other stricter compliance regimes? 

But when we start to look at it, what it really boils down to is this concept of mitigative controls that provide you the same data security and also privacy that you expect from your own local government, especially within Europe in this case. Or the other non-US based governments in that case. 

Meaning that when your data is transferred, moved, operated, that you still have that same data privacy and data security that you expect it to have. So when we look at it from that perspective, this is a very legal focused thing with a lot of our customers. We spend a ton of time with attorneys, Seth, like if anything, really helping them explain and figure out what is a mitigative control and how does it work? 

But also, what does it look like when that controls in action? That's where we get into the scenario-building and stuff like that, but Seth, for you, we have so many conversations like sovereignty, like how are you interpreting it when you actually hear this in our conversations we have with customers? 

SETH: It's a question that everyone answers differently at the end of the day. No one really knows for sure what they want it to look like because these are all newly emerging pieces of legislation. Their interplay is not really tested yet. So everyone's very much speculating about how they'll meet and what it's going to come down to at the end of the day. 

But for me, sovereignty is a higher level of control and precision of that control over access to your data. What happens to it, where it goes, who gets to read it in which ways, under what circumstances. That goes beyond just simple data residency and access approval workflows. 

It really comes down to a much more difficult set of questions around, even if a company is mandated to turn over some data to an entity, what are the options? What are the mechanisms that are really in place that can stand the test of those mandates to protect a customer's sovereignty over access to their own data? And so really, the devil is in the details for sovereignty where it isn't in a lot of other scenarios. 

MAX: It sounds like you have to build software that can satisfy a lot of different legal structures across the world to be able to really solve this for a global customer base. 

BRYCE: Yeah. It's a really great point because what's out there right now is that there's a lot of different legislation letters, things like that, Schrems II where there's a talk of mitigative controls, but what it really is focusing on is create a technical control that enables us to have X things happen when a legal seizure were coming to play. 

And it's super difficult to do that because you almost have to really build out a whole structure of what your threat model? And this is very different from a security threat model. It's a threat model of, hey, this is a legal seizure that's coming in place. How is our threat model structured in order to allow customers to block it or allow customers to know and be able to act against it? 

DARYL: Now you've been saying things are difficult and tough a lot, and even recently you said that there were like difficult decisions that you had to make along the way. What are some of those difficult decisions that you've had to make? Because this does sound like a labyrinth. 

BRYCE: Yeah. I mean, the difficult decisions were really actually spending a lot of time with our customers and figuring out, what was the most important thing for them and the most important thing to solve the problem that they saw? 

So in a normal week, Seth and I can talk to about four or five customers and get five different definitions of sovereignty. So-- 

MAX: Six if there's a few people in the room. 

BRYCE: Yes. There's been a few arguments. It depends how many attorneys they have. What we typically see is the difficult decision is really about how to take all of these different requirements, perspectives, thought leadership that we're seeing out there, and even in some cases, what competitors are even trying to say and do. 

And boil that down to a core set of requirements that we can turn into technical controls that actually do the thing they're supposed to do for the customer and give them the data privacy and data security that they're looking for. But also that one of those six attorneys can look at and say, hey, my thing's in there. It's good to go, I can trust this, it's good to go. Like, let's have this in place to protect our data. 

SETH: I would add on to that and say that one of the particularly tough challenges that we faced in deciding how we want to offer a sovereign solution for our data sovereignty-conscious customers, particularly in the EU right now-- eventually elsewhere in the world, is the fact that we had the opportunity to do something really unique across other clouds. 

There's this idea that data residency and a couple sets of lockdown mechanisms where the cloud provider cannot access a customer's set of data through some possible access path or not-- threat vector if you're on the other side of the engagement-- where that's seen is sufficient to achieve sovereignty. 

And we decided to take a bit of a bigger risk, a bigger leap, a bigger challenge, and ask ourselves, well, is that good enough for customers? These customers have much more diverse needs than are really made possible by very simplistic and blunt approaches to offering sovereignty. 

And so Google Cloud is taking what, I would say, is the more customer-focused approach to say, how can we enable our customers to still leverage the full power of the cloud, not just the infrastructure as a service, the platform as a service offerings, but really, the software as a service, all of the rich features that do often involve a cloud provider-owned binary or things like that? 

Seeing, reading, decrypting, and interpreting data at times, but still in a way that the customer can be confident that they have ultimate sovereignty over access to their data by, for example, cloud operator employees, for example. 

And so that's something that Google is the unique cloud provider that offers something like that, whereas other providers are really focusing on creating cryptographically-isolated virtual machines in geographically-isolated data centers. 

But with things like key access justifications, for example, we've actually tried to solve a much harder problem to make the entirety of Google's Cloud offering, from its Google Compute Engine VMs, which do offer confidential options, by the way, all the way to query services that do very, very deep and involved interpretation of plain text customer data like BigQuery. 

And instrument all of these broad and rich offerings in Google Cloud so they can be used in a way that keeps the important boundaries controlled and sovereign with customer control being the focus for all of these interaction points. And so really achieving that is the big challenge that we had to decide to take on. And it is a huge challenge, it comes with a lot of risk if we don't achieve it correctly. 

But if we do, and I think we have, and are well on our way to doing even more, there's much more to be gained. The customers will be able to use many more options, they'll be able to continue using all of the services that they want and need to use to support their business and not pare everything down to the bare minimum just to run it on a raw VM that's confidential. So that was definitely a big tough choice that we had to make. 

DARYL: You mentioned in there the key access justifications and what customers have at their disposal as far as tools. So like what does this look like for customers using these tools? And what exactly do key access justifications look like and use of those? 

SETH: Key access justifications are defined as a justification that is sent automatically by any Google system which needs to encrypt or decrypt data with an externally-managed customer key. So I mentioned a number of things there. 

First of all, as a customer managed key, we call this a CMEK, Customer-Managed Encryption Key, this is an integration feature that is offered by many of Google Cloud Services that says, when we interact with your data, you have the option to provide us a key identifier that points to key material that you manage for our systems to use to encrypt and decrypt your data as needed. 

The second piece of that is externally-managed. We have this concept of an EKM, an External Key Manager. This is a root of trust that is stored outside of Google's data centers, outside of our control and influence that stores the actual customer-managed key material. 

And so what this really means, when all of this is combined, is that when Google Services, in response to both customer-initiated operations and background Google system-initiated workflows whenever they have to encrypt or decrypt customer data with one of these customer-managed keys that stored on this external key manager, they have to ask for permission to do so. They have to ask the key manager to do the encryption or decryption itself. And then our jobs continue as planned by the various service architectures. 

And so what this does is it gives the customer a critical control point where if they revoke any access to any keys, then Google is no longer able to access the data or decrypt it in the first place. 

And so with key access justifications, customers are able to craft very precise allow/deny policies for these requests for use of their keys so that they can allow requests-- for example, customer-initiated operations, and a certain set of Google-initiated background operations that are in entirely outside of the influence of a human being-- it's system-initiated. 

While still denying things like any Google administrative access by a Google employee even if they want to for legitimate support operations. It's up to the customers to be the ultimate arbiters of access to their data, have their data sovereignty, and really exercise that control by setting these fine-tuned key access justification policies on their external key manager. 

And so that really is the key difference-- and yes, that pun was intended. It is the key difference that allows for this flexibility that I was discussing earlier with our sovereign solution beyond just a simple GovCloud, an isolated region with hard data residency requirements. We have all of those things as well, but we went a step further to give customers more flexibility with their sovereignty options. 

BRYCE: And one thing that's really interesting and unique about it is having that point of control at the EKM through the key access justification is a lot of customers before in the past when they approached sovereignty would say, well, I have an external key manager, I should be good to go, like my keys are managed externally. 

And the question we'd come back to them is, OK, great, like how do you stop a provider from actually accessing or decrypting? And they're like, well, I don't, I guess. And the point is like, yeah, it's hey, are you going to just unplug it from the wall and you're just going to have an outage in order to prevent an access? 

So you need that point of control there, and that's what makes this whole service super unique. And that's why customers are actually looking at this as seeing, hey, I can have sovereignty, I can have controls on my data, and I can do it in a way that allows me to still run my business. 

MAX: So are there examples-- let's say I'm the head of information security for the Department of Tables and Chairs, and I've put my data in some Google Cloud Storage Buckets, maybe I'm even putting it into BigQuery or running some AI stuff on it. 

And I can use key access justifications to say, all right, anyone from my department's engineering group, they can encrypt and decrypt this. Are there specific things that you've run into with multiple customers where they want to clamp down on a specific kind of access? Or is it more that they want to have that failsafe switch, they can say, if I suddenly lose trust, I can just turn off all of Google's access to my keys? 

BRYCE: So you said, the key word there, trust. And trust is a very interesting word. But it's important here because what we want to allow customers to do is set their level of trust. So by offering them the ability to craft the policies that Seth was talking about before, we give them a lever that's really almost like, I want to say, a scalpel, really, that allows them to carve out and say, eh, I kind of like this, it's OK. Like-- 

MAX: Context-based. 

BRYCE: Yeah, exactly. And different people are going to have different levels of trust that they have with their own employees as well as Google that will allow them to actually craft that policy in a way. 

And we'll talk a little bit-- I think there's some interesting things about the future of security even here and about how this could actually be something that's even like a greater security control for like on the event you are compromised. How do you prevent somebody that's gotten into your environment from actually decrypting your data, taking it, moving it? This is a really good point that we can actually start to really solve that problem, too. 

DARYL: This is awesome, because you mentioned this really has implications for the future of security and stuff like that. And I work at Google because I like to see the future happening. But what kind of stuff are you already envisioning? What's the landscape like for this going forward? 

BRYCE: One of the biggest things that we're doing now is we're making this easier to adopt. So Seth and I have been brainstorming for a bit now, it's been awesome, but our whole concept is how to make this easy, adoptable by customers, and make it like a background normal service for everybody? 

So as we look at that, we're starting to actually get to a point now where we're working with our partners in Europe and other places to actually come up with a more managed service for a customer that allows them to actually say, hey, I really want to trust a partner to do my policies and I want to trust a partner to stand up on my key materials and hold them in a building with people with machine guns standing around them and all the stuff, and-- 

MAX: That's where they are. I was wondering. OK. 

BRYCE: The guys with the machine guns are back. But overall, they want that sense of security around where their keys are, how they're being controlled from a standpoint of the physical stuff, and we want to give them a really easy onboarding experience to say, I'm going to choose this partner. 

And now like magic, when my environment comes up on Google Cloud, I have my key access justification set up, I have my key management set up, and it's less of a 90-day, spin it up yourself all the type of thing, and it's more of a managed service that's ready and waiting for you when you show up. 

So we're moving in that direction now with our partners in Europe, and that's something that we've already introduced in Germany today, and we're going to be introducing it in France later on in the year. And then what we're going to do is expand that over the globe. 

But then when it comes to KAJ, or Key Access Justifications as I mentioned before, we do see this as a future where maybe Google's not the thing you're really worried about so much. 

You're worried about having another event like Uber, let's say, that recently happened where you want an event where in the event that there is some sort of compromise, you have a failsafe lever that's outside of your cloud environment that you can actually limit the damage and mitigate it very quickly and have that ability to cut off access. And that doesn't need to be from all your employees, but it can be from anyone that's like a human as like Seth was talking about before. 

Which is, hey, like something's going on, I'm hitting the Stop button in the background to save my environment and limit the damage that's going on. But it's something that we're really starting to think of now because sovereignty is like just one application for this that this really starts to solve for, but if we start to look at threat models out there, there are a great number of things that this can be applied to to really help customers. 

MAX: It seems like it could be a really good tool against both data exfiltration or ransomware-type attacks which we're seeing hitting a lot of city and state government agencies because somebody has gotten to their data and then encrypted it without their say so. 

BRYCE: Yep. The greatest threat, Charity Keyboard. 

MAX: Yes. 

BRYCE: That thing in between there. And it really can be. We're thinking about it a lot now and we're thinking about the future of this as we move forward, because there's so many opportunities. Of course, we want to solve for our customers in sovereignty and really do that from a global perspective as Seth mentioned before. Europe is a place now where it's just really hot. 

But we're seeing it all over APAC, we're seeing it our customers, we're seeing in the US, even. So we want to try and focus and offer that, while then really trying to shift and say, OK, great, let's help the greater security story now. 

MAX: Very cool. 

DARYL: Very cool. You keep mentioning, too, our partners in Europe, our partners. Who are some of these other partnerships and players that we've got and what's happening? 

BRYCE: I'll talk about it really briefly, but we have two partners right now. We have T-Systems in Germany. They just launched their sovereign partner offering that we recently had go out actually the beginning of this month. So that offers that managed experience that we talked about before where a customer is able to show up and get those guarantees and have it managed by a partner, and it makes it a really easy experience. 

MAX: Most of the customers don't want to set up their own on-prem external key management. They just want it to be not in their public cloud provider's environment, is that right? 

BRYCE: Yeah, that's one. There's two things we've seen from it, which is, this stuff can be hard. It can be like really tough-- 

MAX: I might not have a bunch of security or cryptography engineers who actually know how to set up a robust EKM. 

BRYCE: Exactly. And it's like, if I'm a large bank and I can throw billions at it and go nuts, like yeah, it's super easy to do this stuff on your own and you're going to opt for that to keep your control, maybe. 

But if you're a normal customer, small-to-medium-sized business and you want these same data privacy guarantees, it's so much easier to go to a partner says, hey, I'm taking on the tough things that we're going to have to do, I'm going to manage this, and like you can trust me. And it allows them to have this intermediate between them and their cloud provider that does this data security and data privacy work for them from the EKM, KAJ perspective. 

SETH: I'll add in here that the broader theme for Google's offering here is that we want customers to be able to focus on their unique value-add, their unique business, their work, whatever they want to do with the cloud, we want them to focus on those pieces. 

We don't want customers to have to focus on all the different pieces that everyone has to do as kind of a baseline a barrier to entry that's all table stakes. We want the provisioning the management of the EKM, the curation of the KAJ policies, the onboarding, even the enrollment into the regulatory controls assured workloads offers for the relevant regulatory regimes. 

All of those should be in the background. We don't want a customer with workloads for their end business to really have to worry about any of this. And so that's why we offer assured workloads the way that we did. It's not something that a customer has to configure everything and know how the regulations map to how they use Cloud. 

They just say, I need this workload, I need to use these services, I want it to somehow meet these regulatory requirements or those regulatory requirements, and they just pick the right checkbox in our assured workloads onboarding UI, and the rest is handled behind the scenes. 

When it's a sovereign regime, the partner handles those sovereignty-specific details about the EKM, the KAJ policies, all of these other things with some options for the customers to work with the partner and tweak things for their specific needs if they have them. 

But the point is, the default is to not impact or restrict the customer workloads in any way and just give them the confidence that all of their regulatory needs and privacy and security needs, because the regulations are usually toward one of those goals, are just met. It just works. It's really trying to be the most customer-focused offering-- customer-obsessed, if you will. 

BRYCE: We want to be the easy button for GCP. 

MAX: It sounds like if I'm a state or a country going through this, I don't want to have to get a whole bunch of my engineers and lawyers and infosec people in the room, I just want to turn it on. And so you're making it very turnkey and customizing it through the partners and through the understanding of the local laws to make sure that you're meeting those needs. 

BRYCE: Yeah. And it's this term we throw around a lot in security here, which is shared fate. A lot of our other competitors out there we'll talk about shared responsibility and all the stuff, and we heard a lot from our customers are like, we want you to show up with us and help us with this. We don't want a responsibility matrix in these pieces. 

What we're trying to really do is push further and further left into the customer responsibility. And we don't want to throw it over the wall. That's not something that we should be doing with customers out there we. Should be providing them a very clear, guided experience that's easy understandable and it's goal-orientated. 

And that's where we're really pushing for it as for assured workloads throughout all the different regimes that we're moving forward with. 

DARYL: So we've already got customers who have been using these access justification systems and stuff and have examples of why we came up with it that we can share? 

BRYCE: Yeah. We'll talk specifically about one who we actually created this for, really. It's a large German bank that we created this for, which about two years ago they came to us and said, hey, we see these changes coming down the line, we need you to help us-- 

MAX: When you say these changes, do you mean-- 

BRYCE: Sovereignty. Like sovereignty changes within the country, and, well, data privacy changes, really. These evolving data privacy changes that are happening. They're saying, hey, how are we going to meet our requirements here? We have to operate, we're a multinational organization. Like, we have to be able to do business and this threatens our ability to do business. 

So what we did is we took some time during that time period and we sat down and thought about, what's the control that this is actually going to introduce? And Joe Valenti, the PM at the time, came up with this whole idea of key assess justifications, and we introduced it, but they were kind of like, mmm, it's not enough. I mean, it helps, it does it. And then we had a shared workloads was born kind of on the side. 

So what we've done now is combine the two together to provide the sovereignty story which allows our customers to get that full coverage. 

The cool thing with this customer is they went from saying, well, KAJ has these kind of things and there's all these other things out there we need to worry about, and now they've moved to a point where we're actually able to point them and say, hey, click this button, create a folder, and then all the controls are in place for you, and you have your key access justifications for the sovereignty controls that we have there. 

And then sovereignty access controls, which is something that we do internally that Seth can probably talk about, to actually limit even more upon the access that can happen. 

DARYL: Nice. 

SETH: I think a lot of the details are probably beyond the scope of this specific episode. I will say that going back to something Bryce mentioned a while back, it comes down to trust and giving customers the option to tune where they want their trust boundary to be. 

Do they want it to be, we have no trust in the provider whatsoever, so we're going to cryptographically isolate our workloads to a VM that we control and we just use you for capacity scaling? Do they want to tune it slightly more and say, OK, we trust you as a company, as a provider, we trust the code that you write, the services that you build and offer and sell to us, but we don't trust your employees day-to-day? 

MAX: And have you seen these people? 

SETH: I'm being generous. Maybe they want to tune it a little further and say, OK, we trust your employees, but we don't trust the regulatory bodies to which you may be beholden to, and they can dial it there. And so they can control where they go with that trust. 

And so for each level of trust that we offer through our confidential VMs, through the broader non-confidential VM based Google Cloud Services that we offer, through things like KAJ and EKMs and CMEK and up the stack, we make sure that we are able to be trusted in those respective ways by going through doing exhaustive validation, monitoring, all in very automated ways. 

We work with these partners to hold us accountable on behalf of the, in the current case, European customer base with their European-centric concerns. 

They are an external countering body that can audit us, ask us the hard questions, do the due diligence so that the end customers can have that confidence, trust in those European partners' due diligence as reputable brands, such as Talus, for example, has gone through extensive discussions with us to vet our sovereignty product. 

We do an incredible number of things to really give the customer the options to tune their level of trust, and whichever option they select, wherever they draw that boundary, to have confidence that is what they think it should be. 

MAX: So what's coming down the pipe next? What are you excited about that's going to be added to this suite of tools soon? 

BRYCE: One of the things I do want to spend a second on which is, it's not so much of like what's coming down the pipeline versus how does this work in action? 

MAX: Mmm. 

BRYCE: And that's the really cool thing that a lot of our customers have tried to figure out. 

MAX: How does this work in action? 

BRYCE: In action, when we look at the level of controls and layers and all the things that we put in place, it first starts off with-- and we'll just take our EU sovereign controls, control through assured workloads, which includes EKM, KAJ, all the baseline controls. 

The first thing that starts off is that we're making an at-rest and in-use commitment to our customers for their data remaining in the EU. So the first thing is, your data is not leaving the EU. You're done, have fun. That's the first step. So it like even checks that bar with GDPR and other things that we've already done in the past and we know about. 

The secondary step is gating it to EU-only person access, meaning that only EU people located in the EU have the ability to support your data, so that's the secondary step. And then we get to the point of the key access justifications and the EKM, and that's an external cryptographic control of access that the customer holds and is able to tune. 

So in the event of a legal seizure, we have to send a KAJ request to the customer and say like, hey, this is happening. Customer can deny it, customer can throw it out, do whatever they want to do with it. But then a lot of our customers are even more concerned about, hey, I'm concerned about a compromised Googler, and it's super interesting to hear some of the threat models that we see out there. 

SETH: Or an employee of their organization that could be leaking data, potentially. 

BRYCE: Yep, exactly. Their threat models span further because they're looking at anything's possible type of scenarios. And in that world, we're even coming back and saying like, OK, great, like here's a scenario. Like one, data is not leaving the EU, so anything they try and exfiltrate, it's going to get stopped. 

The secondary thing is we have this whole concept of it's EU-only person access, so for us, it gates anyone so people only under EU law are going to have the ability to do something. And then the secondary thing is like what the key access justifications and the cryptographic signatures, it also assigns access approvals, which we didn't mention, which is in order to actually do the approval for KAJ, it has to be cryptographically signed by that key which sits outside in that customer's EKM. 

MAX: So it's harder to spoof an approval of key access. 

BRYCE: Exactly. So spoofing becomes something that automatically gets pulled off the table. And so customers look at that and they're like, wow, OK, this is actually like coverage. You're helping me understand how to combat an individual and how to combat actual legal seizure that's coming through a government entity or someone else. 

So it's that whole thing that providing that full coverage of how it works, it's super interesting to see it, but a lot of our customers are getting their feet wet in it now and starting to understand how this is all going to be structured, but also how that sovereignty is going to work. 

And what we're super excited with coming down the pipeline is just really growing that story to a point of making it easier and easier and easier, but then starting to focus on general security. 

Not just sovereignty, not just data privacy, but focusing on how can we adapt this to be an even greater security control for our customers that have just customer data? And how do I prevent that from being at risk in the event that somebody in my organization happens to click a link that they shouldn't click or response to a message that they shouldn't respond to? 

MAX: Download sketchy "Minecraft" mod onto their laptop. 

BRYCE: Exactly. And it's having that extra layer of security that exists outside of your cloud provider is great, because it allows us to really have a stronger control over, hey, someone's in my environment or something has happened in my environment, but my data is still safe. 

DARYL: You mentioned something that we had only just brought up here at the end, but is there anything else that you want to make sure that we discuss that we haven't yet? 

BRYCE: One of the things I want to make sure that we take a second to discuss is the global shift that's going on. We've had some of our customers see this two years ago down the line, which was great. But we're seeing this whole global shift of everyone is starting to get really, really smarter-- I don't want to even say smarter. 

I think what's happening is that everyone's evolving. Like our customers are evolving, regulators are evolving, everyone is evolving with new technology coming out, but also all of these new threats that are showing up and these large-scale attacks that are happening. And everyone is starting to get better and better at, hey, how do we actually put requirements in that not only protect our data, but protect the people out there? 

I love to see the shift that's happening with our regulators out there. And also with policy, is that it's really starting to come into play there. And that's something I wanted to highlight here, is that it's amazing to see how we went from 1970s mainframe security policies, and now it's, hey, we're reading legislation now that there needs to be an EKM here. And we're like, oh, OK, like that's really cool. 

And for us at Google, because we have such a high bar about our own security internally here, it's actually refreshing because we've spent a lot of time I think for years, Seth, like explaining how Google does security and how we made these shifts years ago when Aurora happened. And we changed our entire security posture. 

And now we're getting to actually show a lot of the world that the things that we did over the last 10 years-- 10, 12 years, really, that are starting to come as a normal thing we're seeing in the public now as a standard. 

So just really want to give a shout-out to all those regulators and all the policymakers out there and say, keep doing it, keep evolving, because what it's going to do is it's going to create a safer world for everybody and a safer place for everybody to just not have to worry about this and get to a point where we can just actually start not reading the paper and seeing that there's some major scale attack that your data was on and you get a nice email saying you get credit protection. 

MAX: Oh boy, that would be fantastic. Please, please do that real quick. So if someone wants to learn more about how they could get started using some of these tools, where should they begin? 

BRYCE: The first place to begin with is we have at googlecloud.com, just Assured Workloads. You want to go to the product page. And we have some pieces there. Also, we have a YouTube series which talks about all of our sovereignty controls and everything else. So if you just go on YouTube and type in Assured Workloads, I promise, there's only a Assured Workloads videos there. We kept most of the tagline. 

And then Seth, we have a bunch of key access justification pages which we're actually in the process now of updating with a lot of this material and story with. So like that's also part of our piece now, is that if you can go to the Google Cloud website and look up the key access justifications and read just how the policies work and everything else. It's all there for you as a customer. 

MAX: Great. 

BRYCE: Yeah. Overall, like-- or just email, ask questions. We're happy to meet with you, we're happy to talk to people, it happens all the time. So reach out. We're on LinkedIn, Twitter, I think all the Tweets-- we'll find them, but you'll be able to find us and just ask us questions. 

MAX: Sounds good. Cool. Thank you both very much for coming on and talking and educating us today. 

BRYCE: Yeah, absolutely. Thank you for having us. 

SETH: Thanks for having us. 

BRYCE: Yeah. This was awesome. 

MAX: Super cool. I really enjoyed learning all of that. I feel like I learn a huge amount every time we have some guests on. And to me, I liked seeing how key access justifications is really just a piece of some bigger push that many teams are working on to help customers, especially those with sovereignty needs, really get a lot more control of their data when it's in our cloud. 

DARYL: Yes, yes. I just like the idea of trust and how it's something that you build, but it evolves. And so key access justifications would allow a company to establish or withdraw trust at any time, even for very precise situations or use cases. Really cool stuff that we're doing. 

MAX: I'm a big fan of context-based access controls, as most of you probably know, and so this seems like a great extension of those principles into a cloud service access model. , So great to see that really challenging work helping out with all these different sovereignty regulations that sometimes our customers have no choice but to abide by. 

DARYL: Right. And it's amazing. They're taking something so complex and making it sound so simple in their words, but we know that there's a reason it hasn't been done until now, and it's-- because it's complex issues to deal with. 

MAX: So, what are you working on right now, Daryl? What's new in your world? 

DARYL: Oh, well, I actually just released a video talking about workflows, new parallel steps feature, which is a way to paralyze long-running operations and speed up workflow executions. It's pretty simple concept but a very useful feature for people to get more out of their systems. 

So you can find out more. Go to YouTube and just look out parallel steps and workflows and you should be able to find the video. 

MAX: That's awesome. 

DARYL: Or maybe there'll be a link in the show notes. 

MAX: Show notes. I have been looking at all the different podcasts that Google Cloud makes, publishes, promotes, and ways that we can do some fun crossover. 

Maybe we've got some of our "SRE Podcast" guests coming onto the "GCP Podcast" and talking about reliability in the cloud, or perhaps some of the "Kubernetes Podcast" hosts want to head over to the "Cloud Security Podcast" and talk about how you can use some of these security best practices for your Kubernetes workloads. 

I'd love to hear your ideas. If you want to find me on Twitter or LinkedIn, Max Saltonstall, and tell me where you think you'd get some benefit or just take some joy from a crossover episode. 

DARYL: Makes a lot of sense to me. 

MAX: Well, we're nearing the end of October right now. You're probably listening to this right afterwards, but Happy Halloween anyway. And thank you all for listening. We look forward to seeing, hearing, talking to you next week. 

DARYL: Adieu. 

[MUSIC PLAYING]