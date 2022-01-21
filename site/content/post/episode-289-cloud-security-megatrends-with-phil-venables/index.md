+++
audioDuration = "00:32:05"
audioFile = "Google.Cloud.Platform.Podcast.Episode.289.mp3"
audioSize = 77008489
categories = ["Security", "Shared Fate", "Shared Responsibility"]
date = "2022-01-19"
description = "We're back for a new, exciting year of the Google Cloud Platform Podcast!"
draft = false
episodeNumber = 289
hosts = ["Carter Morgan", "Mark Mirchandani", "Anton Chuvakin", "Timothy Peacock"]
title = "Cloud Security Megatrends with Phil Venables"
image="/post/episode-289-cloud-security-megatrends-with-phil-venables/images/hero/hero-EP-289.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/s7w61y/episode_289_cloud_security_megatrends_with_phil/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++


We're back for a new, exciting year of the Google Cloud Platform Podcast! [Mark Mirchandani](https://twitter.com/markmirch) and [Carter Morgan](https://twitter.com/carterthecomic) start 2022 with a jointly hosted interview with [Anton Chuvakin](https://twitter.com/anton_chuvakin) and [Timothy Peacock](https://twitter.com/_TimPeacock) of the Cloud Security Podcast team. Our guest, Phil Venables, is here to tell us about the driving trends in cloud security today.

Phil starts the show with a discussion on the advances in cloud security in general and how it compares with on-prem security. Megatrends like economies of scale and competition between cloud providers benefit cloud users by allowing better security for less money. Cloud environments tend to be simpler and therefore easier to manage, and with scaling and geographic location options, cloud projects allow more flexibility to reach security and sustainability goals.

Phil talks about the iteration process of advances in security based on customer requirements and how this builds client trust. The Shared Responsibility Model, where the cloud provider runs a secure infrastructure and the customer configures their project securely in the cloud, is a great start, Phil tells us. But with Shared Fate, he sees the provider crossing the responsibility barrier to work together with the client towards a secure project through actions like analyzation of security defaults. Customer feedback helps Google Cloud make a better product, which in turn helps customers, creating an environment of reliability and shared trust.

We talk about how the Shared Fate model and shared incentives work together to create a closer partnership between cloud providers and customers, and Phil elaborates on the idea of project security as an immune system. We tackle the idea of security diversity and whether it benefits clients to expand their security outside of cloud provider offerings. Phil helps security novices understand valuable feature-add security services and what to look for in the future.

##### Phil Venables

[Phil](https://twitter.com/philvenables) leads the risk, security, compliance, and privacy teams for Google Cloud. Prior to joining Google Cloud, Phil was a Partner at Goldman Sachs where he held multiple roles over a long career, initially as their first Chief Information Security Officer, a role he held for 17 years. Before Goldman Sachs, Phil held multiple CISO roles as well as senior engineering roles across a range of finance, energy and technology companies.

##### Cool things of the week

* 2022 Resolution: Learn Google Cloud, free of charge [blog](https://cloud.google.com/blog/topics/training-certifications/start-2022-with-free-training-on-how-to-use-google-cloud)
* How to build a virtual employment center on Google Cloud & Workspace [video](https://www.youtube.com/watch?v=46aomfLUxVQ&list=PLIivdWyY5sqJW9s6CamHi7D8Tb0fuUJ_a)

##### Interview

* Cloud Security Podcast [podcast](https://cloud.withgoogle.com/cloudsecurity/podcast/)
* IT Leaders: Pay Attention To These 8 Security Megatrends In 2022 [article](https://www.forbes.com/sites/googlecloud/2022/01/11/it-leaders-pay-attention-to-these-8-security-megatrends-in-2022/?sh=46824b34381c)
* GCP Podcast Episode 218: Chronicle Security with Dr. Anton Chuvakin and Ansh Patniak [podcast](https://www.gcppodcast.com/post/episode-218-chronicle-security-with-dr-anton-chuvakin-and-ansh-patniak/)

##### What's something cool you're working on?

Mark and Carter are working on some cool new changes to the podcast.

{{< transcript "[MUSIC PLAYING] CARTER: Hi, and welcome to a new episode of The Weekly GCP podcast. I'm Carter Morgan, and I'm here with my colleague, Mark Mirchandani." >}}

MARK: Hey everybody. 

CARTER: Oh, wow. I'm so excited about this episode. It's a bit of a weird one. We've got a joint guest podcast with a cloud security podcast. And I'm pretty sure that you've interviewed them before, yes? 

MARK: Yeah, absolutely. I mean, obviously, we have had a ton of great guests on last year. And one of those guests was Dr. Anton Chuvakin-- And he, basically, came on to talk a little bit more about Chronicle, which is one of the many companies that, I think, Google acquired and brought a lot of security expertise to Google's teams. And so we were able to bring him and Ansh on last year to talk a little bit more about what Chronicle does in cloud security. And then they were like, you know what, this is such a great topic. Let's go start a cloud security podcast. 

CARTER: I love it. They had one podcast episode with you, and they're like, we need to do this again all the time. So what I'm liking about this episode, we're speaking with Phil Venables. He leads the risk, the security, the compliance and privacy teams for Google Cloud. This is just an expert. And as you know, the Cloud Security Podcast deep dives in the topic. But before we get to that, what if we get to the cool thing of the week? 

[MUSIC PLAYING] 

You know, it's the start of 2022. And so what better way to start the new year than with free training on how to use Google Cloud? I know we've said this a lot, like at the end of last year, there was a conference giving out free training. At the beginning of this year, same as well. So this, you want to register by January 31, 2022, and you can claim 30 days free access to Google Cloud Skills Boost. You can complete the Getting Started with Google Cloud learning path, and it's just a good way to get started with your career and learn more about the cloud in general. 

MARK: I think it's always great that we have so many free training opportunities. The one thing that we've known from talking to a bunch of people is that people love free, and people love free training. So you can't go wrong with that. 

CARTER: Not in the slightest. 

MARK: I'll cheat, because I always cheat. I'll have two cool things of the week. I think the first cool thing of the week is that this is the first episode for 2022. 

CARTER: Oh wow, yes. This is a very cool thing. 

MARK: Yeah, we didn't even mention that. [LAUGHS] It's awesome to be back, of course. This podcast is always a ton of fun and it's always amazing to hear about, not only the different stories that we-- the folks that we get to talk to, but also just how awesome it is to record these things and just come out to it. So I think that's my first cool thing is, like, hi, everybody. Welcome to 2022. It's going to be a year, for sure. It's definitely going to be a year. You can't say it won't be. 

CARTER: I can't say it won't. [LAUGHS] 

MARK: But we're excited to be here and bringing you these cool stories. And then for a second cool thing of the week, I want to link to this video. It is many weeks ago at this point, but this is about probably back in early December. But it's this video done with architecting on Google Cloud, which is one of my favorite topics to talk about. Because it's always super interesting to hear about how folks take an actual business challenge and build a solution for it. 

And that's never, or very rarely, it's going to be, oh, there's one product. Just solves all of our things for us. That's not how the cloud works, that's not how real, complicated systems work. And so I love to see stories where people talk about what they're trying to build and all the different pieces that they had to put together to make that happen. 

So this video is with a Google Cloud partner, Maven Wave, and of course, one of our great friends, [INAUDIBLE] who has been on the podcast a couple of times and [INAUDIBLE] sits down with me and Wave and just talks about how they built this virtual employment center. I think it's a great example, and hopefully, people can watch it and get an idea in their mind of, oh, I have something similar, or I have something completely different but there's still some takeaways I can learn from how they put these pieces together. 

CARTER: Yeah, that really does seem like a cool thing. And if you're saying it in the architecture space, because you have this history of working and having conversations about architecture, that makes me want to check it out. 

MARK: It's a great video, I highly recommend it. And yeah, I think there are so many cool takeaways. And of course, it's a series too, so it's not just this one video. But it's a series with a bunch of our friends, including Priyanka, who's been on the podcast multiple times just going out and interviewing these customers and sharing their stories. So definitely check it out if you get the chance. 

CARTER: So without further ado, you've heard the cool things, we gave you the welcome to 2022, thank you, Mark, for that. Let's get into this main contest. This is a joint episode with the Cloud Security Podcast, and we're talking with Phil Venables. 

[MUSIC PLAYING] 

Hi, Phil. Nice to meet you. I'm excited about this, and I'm hoping you can explain this whole cloud security megatrend. What do people need to know about it? And even better, maybe we can explain is cloud security actually more secure than just having security on your data center? 

PHIL: So one of the motivations for thinking about these cloud security megatrends is, we get asked a lot, is cloud more secure than on premise? And it's hard to give a general answer, but what we're seeing more and more is the security features in the cloud are typically more secure than most on premise environments. You could obviously find very particular cases that there may be an exception to that. 

But generally, as each year ticks by, we're seeing what you can implement in the cloud, whether it's default levels of encryption, high degrees of security on hardware trust, improved management of software supply chain risk, and many other risks is proceeding ahead of what organizations are typically implementing or sustaining on premise. And at one level, when we were asked about that, why is that the case? Is it because we invest a lot more in security? Is it because we have large numbers of really great security engineers? 

The answer to that is yes. But there's something deeper at play that we observed, and when we sat back and thought about it, we realized there's a bunch of what people call megatrends in various other fields but in megatrends for cloud security are really at play here. And these are things like economy of scale. So as Google Cloud, and in fact, all of the hyperscale collaborators get bigger and bigger and bigger, the unit cost of security goes down. 

So trivial things, for example, what we just deploy by default, security chips in our servers that do boot security and firmware validation and many other things. The unit cost of that at the scale we operate is a lot lower than the unit cost than organizations can implement on premise in a smaller scale environment, just to pick on one example. And so that economy of scale drives a higher level of baseline security in the cloud. 

We talk about shared fate, so we move from shared responsibility to shared fate. The cloud providers have much more intrinsic motivation to drive security higher than your typical enterprise software providers in an on premise environment. There's high degrees of competition between the cloud providers, so again, I think for the first time, at least in my memory, you've got some very big technology companies competing every day to increase the levels of security in their offerings. 

We also can think of cloud as this digital immune system where many customers can sit back and take every update the cloud provider gives. And the cloud provider's getting rationale for those security updates from vulnerability and threat research, from inputs from other customers. And so this collective network effect drives up the security of the cloud in a way that's not typically been seen in on premise enterprise software. 

As well, it's a software-defined infrastructure, so it's more naturally driven to be more continuously control assured. It's actually, despite what some people say, it's a simpler environment with less complexity to manage. And over time, it's becoming more simpler and more automated and autonomic to manage. Cloud is more prone to having increased deployment velocity, not just for the cloud provider themselves, but that pattern of increased and smoother CI/CD pipelines to promote increased velocity of feature deployment translates through to what customers can do on it, again, quite differentiated from some of the natural dynamics in historical on premise environments. 

And then finally, it's both sovereign and sustainable. The sheer geographic presence and scale of the cloud means that people have a lot more options to explicitly choose the locations of deployment. And some of those locations of deployment may be aligned around what their sustainability goals are as well, and this is, again, where we see a megatrend of sustainability security and resiliency coming together in the same way. So net, net. Those megatrends are going to keep driving forward the improvement of cloud security, but also those megatrends work in the opposite direction to the shrinking scale of some on premise environments. 

MARK: That's all very interesting. And I agree with you that cloud has all of these natural properties that make it more secure. One of the conversations I end up in more often than I would have hoped, given how I would hope my life to go, is I end up talking to CISOs who have this long list of requirements, and we're missing two of them or we're slightly askew on two of them. How do you get people out of that tree and how do you get people to look at the holistic advantage rather than these one or two nits that they get stuck on? 

PHIL: This is an interesting comparison because we take this very, very seriously, when customers have feature requests that drive control improvement and drive how we improve controls in the platform to serve them. It could be their compliance needs, their own control needs, their own security. The interesting thing, sometimes, when you look at this is what happens a lot, and this is a great dynamic, is when customers are looking to move from on premise to the cloud, they're using that as an opportunity to significantly upgrade their security. And so they set the bar quite high for the cloud, which I think is appropriate and is healthy for the industry. 

But often, in many cases, those controls may not actually be already implemented in on premise environments. And so there's an interesting dynamic at play where sometimes certain cloud products can be deemed to need security and control improvement, but it's not because they're necessarily weaker than on premise environment. It's just that customers are appropriately realizing, as part of the move to the cloud, they can modernize their environment, they can upgrade all their controls, and they can aim to hit the controls they've always wanted to implement but have not been able to do. 

And again, that dynamic comes back into this digital immune system concept is, we welcome those feature requests because they drive improvements in the platform which benefits everybody, which makes it more likely that more customers will want to trust their workloads on the cloud. And so I think that's a good dynamic, but it's sometimes not a great direct comparison of the on premise environment versus the cloud environment because those customers are taking the opportunity to upgrade controls significantly as part of moving to the cloud. 

CARTER: Well, that makes sense. And to me, the whole race to the top, the immune system, is worth more of a discussion. But one thing that you mentioned in your answer, and of course, in your article is that there is concept of shared fate. And I've met enough people who are, frankly, quite confused about it. Like, usually when I hear shared fate, I think that it must involve insurance. 

But then again, I think insurance, and if I might insure my house, my house burns down, the insurance guy's house didn't burn down. So I don't see shared faith. So could you give a crisp practitioner level, maybe leadership level, explanation of shared faith one more time? 

PHIL: It's interesting because we have communicated shared fate in the context of our risk protection programming, where we partner with insurers, specifically Allianz and Munich Re, to give the access to insurance based on customers being on our platform and having transparency into how they're configured, that those customers provide to the insurance. And collectively, that is a shared faith, because we stand behind in our partnership with the insurers based on how the insurers have looked at our platform. 

And so there's definitely a shared faith. But it's a good question, because the way I think about this and as a lot of people do here at Google Cloud, is a lot more broadly. And so I think the shared responsibility model is obviously contractually correct in the cloud provider runs a secure infrastructure and then the customer is responsible for configuring themselves securely in the cloud. 

And so there's clearly a delineation encoded in the shared responsibility model that I think is quite well accepted. The problem is when that shared responsibility model becomes, in some sense, thought of as a shield to separate whether the cloud provider should provide significant degrees of help to customers in helping them run securely in the cloud. So when I think about shared faith, it's about how do we reach across that line of shared responsibility and partner with customers to help them run securely in the cloud? 

And in practical terms, this is things like really looking hard at our secure defaults and questioning are we doing enough to ship with full safeties on so that customers may then ratchet down the security, but they don't necessarily have to quickly ratchet up the configuration of controls. And I don't think any cloud provider is perfect on this, I think everybody is working hard to look at those secure defaults. Then again, we also have to think about shipping blueprints and landing zones and all of the other configurations and recommended configurations that come with configuration code. 

And then also thinking about consistency of how the products work together. So if you set a policy at one layer in the stack, you shouldn't also have to replicate those policy settings further down the stack. So there's a whole array of things where we can improve that feedback loop if customers are having difficulty sustaining security in the cloud. Well, it may be on their side of the shared responsibility line. 

When you think of it through a shared fate lens, we want to internalize and then say, could we be doing more in the products, and the configuration, and the guidance, and the training, and the whole environment to make it easier for them to run securely? And so I think, ultimately, shared fate is not necessarily a specific thing. It's more of a philosophy of how we partner with customers to improve security. 

MARK: I would think that shared fate requires shared incentives. Do you see us shifting the incentives to invest in security, tooling, process people, with orgs that are migrating to cloud? How do we help organizations be correctly incentivized here? 

PHIL: We could probably have a debate on that as to whether it truly does drive you to shed incentives. I mean, I think ultimately, the shared incentive is if customers feel they can run more easily at higher levels of security without significant overhead of sustaining that control, then they're more likely to bring more workloads and more data to the cloud, which is obviously of commercial value to the cloud provider. 

And therefore, you can imagine some flywheel effect is the more you improve default security, the more you raise trust levels, the more customers are willing to bring more workloads to those environments, which attract more workloads and more improvements in security. So I think the incentives are that the shared fate model drives a closer partnership between the customer and the cloud provider to make sure that they're more able to bring more workloads to the cloud. 

CARTER: Thank you. That helps clear up the shared fate model for me. But there's something else you brought up a few times already that I'd really like to dig deeper into. You said seeing the cloud as a digital immune system. When I hear that, I think of maybe a self-healing system or a system that can update. What is it and how does this relate to the typical practitioner, like someone that's doing security or someone that is a developer? 

PHIL: So again, it's a bit like I was saying at the beginning. When you think about just picking on Google Cloud because that's what we know, every month, we're shipping new security features. Not just in our cloud security product set, but new security, compliance, privacy, resilience, and other control features across the product set in all of the products. And then we're also shipping upgrades, upgrades to defense in depth, upgrades to close potential vulnerabilities that may have been hypothesized or may have been notified to us. 

Hundreds and hundreds of upgrades each month. And the sources of these, they come from our own vulnerability research, our own threat research. Feature requests will come in from ourselves about what we believe we need to build into the platform. The feature requests may come in from customers security teams that are driving the improvements in the platform as we talked about earlier. 

So collectively, there's this massive inbound flow of drivers to keep adding security features, security capabilities, defense in depth to close out potential vulnerabilities to reduce exposure to whole classes of potential future attacks. And generally, what this means is if you are, as a customer, and this could be not just a small, medium-sized customer. It could be large customers. Not all organizations have huge and sophisticated security teams. 

In many respects, if you just sit back and take every update, you're going to get the benefit of that entire ecosystem of driving improvements in security. I can't remember a time when we've, in any of the more traditional on premise enterprise software environments where that dynamic has existed to create that perpetual feedback loop for driving up security. Now, of course, the big thing everybody has to do is to take the updates within some reasonable, risk-managed way. You only get the benefit if you're tapped into the system, as it were. 

MARK: One of the interesting things about this bringing together of security outcomes and security products and security fundamentals, is you have sort of aggregated risk in all of your eggs in one basket when you rely on your cloud services provider for security. This is near and dear to my heart, because I'm personally a security product creator here at Google. So what do you think about the argument that maybe you shouldn't rely on your cloud provider for all of the end-to-end security, and you should instead diversify? 

ANTON: And this comes up a lot in discussions, by the way, on social media in the industry when people say, yeah, I trust Google has the best security, but I don't trust one company to provide security for me. So I will buy third-party stuff. Again, for the questions here. So I'd love to hear your perspectives? 

PHIL: As many of you know, I've spent most of my career on the enterprise side of the fence, trying to deal with a large on premise environment and integrating multiple cloud providers. There's a few ways of looking at this, which is to say, I think you should be able to trust your cloud provider with implementing the controls they offer in terms of the basic levels of control. Like for example, by default, we encrypt all storage, by default, we encrypt all communications. 

I find it hard to imagine there'd be a desire to, inside a cloud environment, additionally implement other layers of extra control on top of what the encryption claims that are provided by the cloud provider. Now, there may be edge cases to that, there may be requirements for layering in different algorithms, there may be other requirements for other controls. But generally speaking, I think people are willing to trust because of the transparency we provide, the basic implementations of the controls in the cloud platform itself. 

As you start moving up the stack, you start to see a lot of customers willing to consume the security features further up the stack where they have more easy choices of layering in third-party products. Now, the way I differentiate this is really depends on whether you view this as a primary control or a check and balance. Now, the way I look at this, is I think you see a lot of customers are quite happy to rely on the security features, at least, of Google Cloud. 

But what they then do is they will procure a third-party product or service that acts as a check and balance on the configuration they're running in the cloud. It's not an independent level of control implementation, it's an independent level of validation of the control configuration. And again, that also has the advantage, in some respects, that that can work across multi-cloud, and in some cases, some on premise environments. 

I think it's one of those things. It's more about not additional duplication of control versus what the cloud provider has, it's more about the check and balance of assessing that the claimed configuration that they think they have in the cloud is actually running, configured in the right way. 

CARTER: Thank you. And while I have you here, I want to ask something a little bit different. This industry, it has so much venture money coming in, where it seems like there's people that feel like it's going to be a good return on investment. What are ways that someone like me, who's not necessarily steeped in all the security knowledge, what should I look for to understand the market and where it's going? Can you maybe quickly just explain some key signifiers? 

PHIL: I don't have the data in front of me, but there's a huge amount of venture investment going into cyber security. And so I think all of the listeners today are probably overwhelmed by the number of new startup companies across the whole spectrum of not just cyber security, but information protection technology risk in general. And I think the other aspect of that is there's many products that are out there that you look at them and you just think, well, look, that's just a future feature in a cloud platform. 

And that's probably true for a number of the products, but there's some other products that may actually end up being truly differentiated because they add that check and balance component I was talking about before or they add some feature that is available in the cloud, but they want to be able to run and bridge it across multiple clouds and into an on premise environment. It's good that there's a continued diverse ecosystem of venture funding and venture funded startups in this space. 

And we partner with a lot of them, there's a lot of them in the cloud marketplace. We're working with a lot of them in terms of making sure that the platform is friendly to those products, but I think it's going to continue to evolve. But if we're totally candid, at least some of those are really just features waiting to be implemented by cloud providers. 

ANTON: To me, it definitely makes sense as an argument. But one other thing to mention, as we're discussing this, is much of this may affect bigger parts of the world. It's not about buying things to secure a business. There are elements of country sovereignty, geopolitics, that come in. So that software sovereignty and other things that you mentioned in your answers also matter. Why is cloud better for it? Why can't I just write my own software and do things on prem for my own use? How do we combine this type of innovation with being able to address the needs of sovereign customers? 

PHIL: Software sovereignty, in other words, the concept of when you're in the cloud, you're not locked into the cloud, is a thing that we spend a lot of time thinking about, and which is one of the reasons why overall we're very focused on open standards, open source, and again, our investments in multi-cloud solutions. I work on Kubernetes and Anthos and the container-based environment have been very much driven around that ability to give customers a lot of flexibility. 

But I think, if we're all honest with ourselves, as you start moving up the stack with some unique competitive advantages on some of our solutions, then you get beyond that portability and think, ultimately, it becomes a customer choice. And it also varies depending where you are in the stack. So if you're running open source, open standards-based container type environments, you've got a lot more portability than you would have if you're using a very specific feature in a very specific solution from a particular cloud provider. 

So I think it just depends on it. Ultimately, I mean, I think our goal, and it should be everybody's goal, is to support customer's choice in this respect. And I think we'll continue to partner with customers on that whole concept of not just software sovereignty but the broader topic of digital sovereignty. 

ANTON: That makes sense. I mean, that's a tough area. And I expect that, in a few years, we'll still be dealing with this. And from this area, I want to lead to our final question. When I read some of the stuff, when I hear about the security pillars, sovereignty, I always think that it's not about just reducing risk, just security, but it affects trust. I've also seen examples of solutions that we built that are very secure, from the objective point of view, but customers just did not trust them. So could you quickly give us some hope, some positives, and hey, it's a security podcast, or at least our part. Why, in the future, this would increase trust and not just security? 

PHIL: I can't remember who in cloud said this, whether it was one of you guys, but that whole notion of you get to trust things more if you don't have to trust them. What I mean by that is if you're keeping under control, for example, even like the technical level with our external key management solution and our encryption solutions, if a customer is managing the encryption keys and the cloud provider has to come to the customer for approval to access things and the customer releases those keys in support of a key access justification as we support on many of our products, that's an ability where the customer then doesn't have to deeply trust the cloud provider because they retain a sense of control while still getting the benefit of the whole cloud platform. 

And so that's one specific technical example. Another example would be the work that we do to bring transparency to what's going on in the cloud, not just from a technical access log, access transparency perspective, but all the way up through to our compliance frameworks, the attestations, the certifications, the partnership with customers on going through how our controls work, the documentation we put out on our websites, all of the blueprints and the white papers and everything else. 

So again, I think transparency, and an explanation of how our control frameworks work, the defense in depth, not just against attacks, but defense in depth from configuration errors, all of this collectively gives customers a degree of trust, either based on the fact that they retain some control for certain aspects. And then, for the rest of it, that they have a high degree of transparency backed by independent attestations of the controls that we're claiming through our compliance frameworks. 

I think together, that promotes a degree of trust. But ultimately, it's fundamentally all about the partnership with customers and engendering that trust through supporting their security goals and their risk management goals. 

ANTON: Perfect. Thank you very much, Phil. This was, as always, quite amazing. And thank you very much for enlightening both of our podcast audiences with some of the stuff. I can see how security practitioners, IT practitioners, developers, will find something to think about and something to do. Thank you very much for this. 

PHIL: Always a pleasure. Thanks guys. 

MARK: Well, I learned so much. Thank you Phil, Anton, everyone. 

CARTER: Well, that was the end of my first joint podcast episode, and definitely the first episode I've ever done that had an attached Forbes article. 

[LAUGHTER] 

MARK: I think it's a really cool topic. And certainly, having these kind of megatrends, I think are always super helpful to say, like, look. This is a complex landscape, and security is such a broad topic. But that just means that there's so many areas that you can deep dive on. First of all, I'm assuming that's why they started a podcast on it. But then second of all, it's super cool to hear what these experts are seeing across multiple companies. Because this isn't one company security posture, this is what's happening in the industry as a whole. 

CARTER: Right. It was really interesting talking to Phil and hearing how he explained all these different concepts that apply to the whole industry and then tying that back to what Google was doing. One of the things he talked about, and you see this in the article if you check it out, but just how there's a shared fate between like us as a security provider and our customers using our tooling and our technology. So like if they fail, we fail. If we fail, they fail. And to me, there's a level of trust built into that, because we want everyone to succeed because it means we're succeeding. 

MARK: Yeah. It's exactly, it's a great point. And it's because the cloud is so still new for a lot of companies and a lot of enterprise, I think there's a huge mind shift that needs to happen when you're looking at security. And I think shared fate is a great example of it. The reality is that security is going to be a responsibility of not only the people who are implementing whatever application or workload it is, but also of the cloud provider. 

And that's something that people are going to have to get used to, because that's a very different world when you talk about the more on premise world, right? Security is completely different in the cloud. And so when you're looking at a cloud provider and you're deciding, hey, how do we want to actually host these workloads or these applications, what do we do to make sure that security is something that is at the forefront of how we deploy? 

CARTER: Exactly. I didn't really think about how new this is to a lot of people because I've been working inside of Google for a while, but it's not just the cloud is new. It's like, OK, what if I have a hybrid architecture? I'm working on prem and in a cloud. What if I'm using multiple cloud providers. Now, I have something in Google Cloud and something in someone else. How do I keep all of that secure? There is new patterns and new models. And so this was an interesting episode because we've got to hear an overview of all of that. 

MARK: Yeah. And I think it's a great call out, too, for folks who want to spend more time in the security world and learn more about it. Obviously, we'll have a link in the show notes, but check out the full Cloud Security Podcast because they're putting out content constantly that really deep dives into security topics. And that's not a shallow pool to put content in. There's a lot to talk about when it comes to the cloud security. 

CARTER: 100. Yeah, I can't wait to see what Anton and Tim are working on in the Cloud Security Podcast. But I also want to know what you're working on. What do you got going on in your world, Mark? 

MARK: [LAUGHS] Well, it is 2020, which, if I remember correctly, is the year after last year. And I'm sure a lot of folks have their own personal journeys for what last years look like and what this year is, hopefully, going to look like. One of the things that I'm super excited about is all the cool stuff we're doing with this podcast that you're all listening to right now, hopefully. There's going to be some cool stuff for the podcast this year. 

It's always exciting to bring on guests, but I think we're going to keep evolving, keep listening to folks and make the changes to just get better stories out there. And I think also this was a great opportunity to get a little bit of a reset between 2021 and 2022. And look at what types of work that we're going to be doing. There's a lot, there's so much. I don't know that I have anything coming out in the near future. I think we've got some cool stuff coming out probably in a month or two, so hopefully we'll talk more about it when it gets closer. 

But for now, this is a great opportunity for the folks who got a chance to take some time off and really think about, hey, how do we strategically approach this next year? Because there's plenty of stuff going on. There's no shortage of things to talk about, that's for sure. What about you, man? 

CARTER: Me, I'm recovering from COVID. That was my break, I caught COVID. And so my brain, if you hear me just saying um and uh all episode, is not there yet. But I'm excited for the future, and again, the podcast and where it's growing. Putting a lot of focus on it. We've got things in the works that I think are going to make listeners really excited. That's all for me. 

MARK: Yeah. 

CARTER: Thank you all so much for listening. Mark, thank for being an awesome host with me. 

MARK: Always happy to be here, Carter. I'm excited to see not only this episode go out, but also all the episodes we're going to be doing this year. It's going to be a ton of fun. 

CARTER: Yeah. And thank you all for listening. We'll see you next week. 

[MUSIC PLAYING]