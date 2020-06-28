+++
audioDuration = "00:35:11"
audioFile = "Google.Cloud.Platform.Podcast.Episode.224.mp3"
audioSize = 50679902
categories = ["Solutions Engineering", "Blueprints"]
date = "2020-06-24"
description = "Mark Mirchandani and Priyanka Vergadia host this week's episode of the podcast, with a thorough discussion of Solutions Engineering at Google."
draft = false
episodeNumber = 224
hosts = ["Priyanka Vergadia", "Mark Mirchandani"]
title = "Solutions Engineering with Grace Mollison and Ann Wallace"
image="/post/episode-224-solutions-engineering-with-grace-mollison-and-ann-wallace/images/hero/hero-EP-224.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/hf5gxu/episode_224_solutions_engineering_with_grace/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Mark Mirchandani](https://twitter.com/markmirch) and [Priyanka Vergadia](https://twitter.com/pvergadia) host this week's episode of the podcast, with a thorough discussion of Solutions Engineering at Google. Our guests, [Grace Mollison](https://twitter.com/grapesfrog) and [Ann Wallace](https://twitter.com/annnwallace), explain that the Solutions Engineering team is there to help customers choose appropriate products for things like security, analytics, data management, and more. The products are laid out in guides and blueprints so the client can easily understand why products are chosen and how to use them. 

Grace and Ann talk later in the podcast about the Solutions Engineering blueprints that Solutions Engineering Architects have begun creating. They describe how the idea came about, how they're built, as well as the types of blueprints that are available and how to use them. The team is still working to create more blueprints and make them even easier to use. 

##### Grace Mollison

Based in London, UK, [Grace Mollison](https://twitter.com/grapesfrog) leads the Cloud Solutions Architect team in EMEA, where she helps customers to understand how to architect and deploy applications "safely" on the Google Cloud platform. In her spare time she spends time attempting to teach her international team how to speak the Queen's English! Before Google, Grace was a Solutions Architect at AWS where she worked with the AWS ecosystem and customers to ensure well architected solutions.

##### Ann Wallace

[Ann Wallace](https://twitter.com/annnwallace) (she/her) is Security Solutions Manager for Google Cloud where she develops, designs, and packages security solutions for Enterprise Customers. She co-wrote Google’s guidance for running PCI compliant workloads on GKE. Before Google, Ann spent 14 years at Nike in various engineering and architecture roles. She volunteers and leads workshops with [Women Who Code Portland](https://www.womenwhocode.com/portland). When not working, Ann can be found traveling and ultra-trail running with her dog, Cedar.

##### Cool things of the week

* Father’s Day present of the past: 30 years of family videos in an AI archive [blog](https://cloud.google.com/blog/products/ai-machine-learning/building-an-ai-searchable-archive-for-30-years-of-family-videos)
     * GCP Podcast Episode 214: AI in Healthcare with Dale Markowitz [podcast](https://gcppodcast.com/post/episode-214-ai-in-healthcare-with-dale-markowitz/)
* Open Match is now 1.0 and ready for deployment in production [blog](https://cloud.google.com/blog/products/gaming/open-match-1-0-ready-for-deployment-in-production)
* Google Data Center Security: 6 Layers Deep [video](https://www.youtube.com/watch?v=kd33UVZhnAA)

##### Interview

* Cloud Solutions [site](https://cloud.google.com/solutions)
* Security blueprint: PCI on GKE [site](https://cloud.google.com/architecture/blueprints/gke-pci-dss-blueprint)
* PCI and GKE Blueprint on GitHub [site](https://github.com/GoogleCloudPlatform/pci-gke-blueprint)
* GCP Podcast Episode 116: Solution Architects with Miles Ward and Grace Mollison [podcast](https://www.gcppodcast.com/post/episode-116-solution-architects-with-miles-ward-and-grace-mollison/)
* GCP Podcast Episode 174: Professional Services with Ann Wallace and Michael Wallman [podcast](https://www.gcppodcast.com/post/episode-174-professional-services-with-ann-wallace-and-michael-wallman/)
* Terraform [site](https://www.terraform.io)
* Kubernetes [site](https://kubernetes.io)
* Anthos [site](https://cloud.google.com/anthos)
* Anthos security blueprint: Auditing and monitoring for deviation from policy [site](https://cloud.google.com/architecture/blueprints/anthos-auditing-and-monitoring-for-deviation-from-policy-blueprint)
* Anthos security blueprint: Enforcing policies [site](https://cloud.google.com/architecture/blueprints/anthos-enforcing-policies-blueprint)
* Anthos security blueprint: Enforcing locality restrictions for clusters on Google Cloud [site](https://cloud.google.com/architecture/blueprints/anthos-enforcing-locality-restrictions-blueprint)
* OnlineBoutique on GitHub [site](https://github.com/GoogleCloudPlatform/microservices-demo)

##### Tip of the week

How can I get introduced to key products? [With Priyanka's new video series!](https://www.youtube.com/watch?v=KBeyQHoAcrQ)
     
##### What's something cool you're working on?

Our guests will be giving talks at virtual summits, including [KubeCon](https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/) and [CISO Forum](https://www.cisoforum.com).

Priyanka has been working on a new video series called [Google Cloud Drawing Board](https://www.youtube.com/watch?v=KBeyQHoAcrQ), as well as a new animation series that will launch next week!

{{< transcript "[MUSIC PLAYING] MARK: Hi. And welcome to episode 224 of the weekly Google Cloud Platform podcast. I'm Mark Mirchandani, and I'm here with one of my favorite Priyankas. Actually, my favorite Priyanka." >}} 

PRIYANKA: Yay. 

MARK: Priyanka, how are you? 

PRIYANKA: I'm good. How are you? 

MARK: I'm doing well. It is a super, super great treat to have you here. And of course, I know that we have plenty of good conversation in store, including an exciting and very fun interview. 

PRIYANKA: Yeah. 

MARK: Priyanka, can you tell us a little bit about who is going to be joining us today? 

PRIYANKA: I am so excited to have Grace and Ann from our solutions engineering team joining us today. They have just been so amazing. I have worked with Grace for one of my series is in Get Cooking in Cloud. And she has written some amazing content on disaster recovery, and I don't know what not on the solutions pages. 

So I'm pretty sure if you have read any of our solutions pages, you have come across her content. So it would be amazing to have both of them here today to talk a little bit about solutions engineering, and what they are up to, and some of the cool things that they are doing today. 

MARK: Yeah, it's very, very exciting to hear what they have to say. And definitely, that conversation was a ton of fun, so hopefully everybody enjoys that. And after the interview, I'll ask Priyanka our question of the week, which, you know, there are a lot of cool Cloud products. And I often get confused. I hear about new ones all the time. 

You know, I'm going to ask Priyanka, how do we get a good idea of some of the base Google Cloud product? Where do people get started with some of these things? So we'll be looking forward to a deep and detailed answer on that. 

PRIYANKA: Yeah, I'm excited to share some tips on how to get started. 

MARK: But before we get into all of that, let's go into our cool things of the week. 

[MUSIC PLAYING] 

Normally I have one cool thing, but today, I have two cool things. 

PRIYANKA: Yay. 

MARK: So this is a blog post, but it's actually a blog post and a video. So Dale Markowitz, we've chatted with her before. It was earlier this year on building AI in health care. So I definitely recommend checking out that podcast episode. 

But she's gone ahead and built a very touching video. I definitely maybe teared up a little bit watching it about Father's day and building some ML. And then she shares the product that she built with her dad. It's a really beautiful, little video. And I really enjoyed it. 

And while, obviously, it showcases some of the technology stuff, it was really nice to see the human component of it. So highly recommend people to just take a few minutes and watch it. It's really enjoyable, and it's really a cool story. 

PRIYANKA: I really enjoyed it too. It was just that component of emotions when we, as engineers, when thinking about gifts, right. And it just brought that pool a flood of emotions from childhood to, like, I was really touched. It was amazing. So if you haven't, please check it out. We'll include the links below. 

MARK: Absolutely. And then for my second cool thing of the week, Open Match 1.0 has just been announced. And, you know, if you've been listening to the podcast for a while, you know that Mark Mandel-- 

COMPUTER VOICE: Love that guy. 

MARK: --did a lot of work on Agones. And simultaneously, Open Match was another effort that a lot of our game team here at Google was working on. Open Match is a joint effort between Google and Unity, and it's an open source gaming framework for matchmaking. Highly recommend checking it out as well. It's a super cool announcement. 

And I haven't had a chance to play around with it. I'm sure Jon Foust is super excited to play with it, and hopefully we'll have him back on the podcast soon. 

PRIYANKA: Cool. That sounds amazing. 

MARK: And what about yourself, Priyanka? What cool things of the week do you have? 

PRIYANKA: Well, our colleague, Stephanie Wong, has created this video on how data center security works. So physical security. What are the different layers? We always talk about software security and application security. And we're mostly aware of those sides of things. 

I personally really enjoyed watching this video where Stephanie is actually going through the data center, and finding out the different layers, and how secure the physical perimeters are to even get into a data center of Google Cloud. So if you haven't checked it out, check out Stephanie's video on Google Cloud YouTube channel. We'll also include the link below, but that is one of the amazing things I have seen in a long, long time. 

MARK: I think it definitely gives people an appreciation for, obviously, the physical security that Google puts into data centers. And we have a lot of security content out there, but it's something different to see what it actually looks like at a data center. And I know that video was a long time in the making. So definitely excited to see it come out. 

PRIYANKA: Yeah, I was talking to her about it, and it seems like she'd been working on it for about six to eight months. So yeah, there's been a lot of work that has gone into it. You can imagine the types of approvals and stuff that must have gone in there, not to mention the number of teams, that were involved, working on that video, right. So definitely something that was a great effort by the entire team and would be worth the six-minute watch seriously. 

MARK: Yeah, absolutely. So, you know, if you're interested, definitely check out some of these cool things of the week. They're super interesting stories, and they're all great in their own way. So I'm really glad we get a chance to highlight the things that have been cool this week. Well, with all that out of the way, why don't we go ahead and jump into our conversation with Grace and Ann? 

PRIYANKA: Yay. Let's do it. 

[MUSIC PLAYING] 

So Grace and Ann, we are so excited to have you here today. Why don't we start with, who are you, and what do you do? 

GRACE: I'm solutions architect based at London. I'm head of the EMEA-based assays. I help customers to architect to deploy applications safely on Google Cloud. And in my spare time, I like to spend most of that teaching all my American colleagues how to speak and write the queen's English. So I had this thing going on with our tech editors, where they keep removing all my s's and u's. But one day, I will get something to slip through. 

MARK: Is that a call out that we should have two different options for English on the tech documents? We should have one for the American English and one for the queen's English? 

GRACE: I think so, but I'm losing that battle at the moment. But one day, I'm going to slip through, and that will be my way to go forward with it. And my partner in crime, obviously. 

ANN: Hi, I'm Ann Wallace. I'm a security solution manager, part of solutions engineering. So I help develop and maintain Google's Cloud security solution. I've only been in this role for about three months, which is about the duration of lockdown. And prior to that, I was in PSO, leading the security team there, but that's literally another podcast. 

But Grace and I, actually, we have a story about how he met. In my spare time, I do a lot of trail running with my dog, Cedar. And yes, Grace is teaching me some of the queen's English. I learned recently that tea does not mean you're going to drink a beverage. It means you're having dinner, Monday through Friday. 

GRACE: It does work. But the funniest-- I have to just tell this story, because it's why I love Ann so much. So I've never met Ann before. She'd come to the London office when we were allowed in the office. We've got, like, a coffee lab. She goes, oh, I'm in the coffee lab. I've got long blond hair. 

I walk into the coffee lab, and it's just full of people with long blonde hair. I think every single female blonde had decided to be in that coffee lab at the same time. That was our introduction to each other. 

MARK: Well, I can imagine going around asking each person if they were Ann. It would be challenging. 

ANN: Yeah. In my defense, I did not look up from my screen. I was too busy working, so I didn't notice everybody else. 

MARK: Well, fair enough. So yeah, like you mentioned, you've both been on the podcast before or talking about a couple of different things, but today, we're here to talk about solutions engineering. And you had just mentioned that. So I think the first and foremost question is, what is solutions engineering? 

ANN: Yeah. So solutions engineering is actually a fairly new group within Google Cloud. Would you say about a year, Grace? 

GRACE: Yes. 

ANN: The official mission statement is accelerate Google Cloud to go to market strategy by creating enterprise value driven solutions. But really what we are doing is, customers don't want a bunch of services thrown at them. They want the services put together in a solution to help solve their business problems. So that's what we do. 

So we do this through a lot of different mediums. We do this through discovering and listening to what our customers are asking for. What their pain points are. And then we provide enablement like through the sales team with playbooks, reference guides. And then we also do this directly with our customers through training, events, solution guides, and now blueprints. But we'll get into that in a minute. 

And we do this across different solutions, horizontal solutions. So we do infrastructure, data management, analytics, ad monetization, and then security-- the sweet spot for Grace and I. But Grace has been in solution engineering and what was its predecessor, the assay group, a lot longer than I. So I'll let her give her insight there. 

GRACE: What happened is that solutions architectures was the first group within solutions engineering. And then we have Hamidou Dia, who joined us as a VP of solution engineering. He set up a solutions management team. So the solution managers, which Ann is now one, they are the ones who kind of help define the use cases that solutions architects ultimately work on. 

It's not like, do this. We work collaboratively. But they're the ones who kind of are figuring out what our customers want. So as solutions architects, we help the solutions managers work with the field. Work with customer engineers, PSO, and customers directly to make sure that anything that we can work on is going to be absolutely relevant to them. So we don't work in a bubble. It's always the customer first. 

And as a solutions architect, we don't want to be doing the same thing over and over again to creating these guides and helping to create all that. The whole package is important to us, because it means I can go off and do the next great thing. And I can get a closer step to actually getting to retirement quicker, because there'll be nothing left for me to do. That's my goal. 

MARK: I know there's some great information about the solution architecture team that Grace, you, and Miles Ward-- who used to head up the solution architecture team-- did in the past podcast. So we'll make sure to have a link to that in the show notes, but it's a really great conversation and really helpful to understand how the solution architects, what they were doing. I think that was about over a year ago at this point, so I'm sure it's changed over time. 

PRIYANKA: Yep. And then what are customers looking for from the team today or in general? Like, what are they looking for? And how is that aligned with the solutions architecture and solutions engineering team? 

GRACE: I'd say Ann kind of touched on it, and I'll just reiterate. It's like the fact is Google Cloud has a lot of products and services. You know, lots of LEGO pieces. But there's not much guidance as to how you use those LEGO pieces together to address your business goals. And they just want to get started quickly. 

So the idea with the social manager is that we kind of package all of that together rather than them have to glue it themselves or put the LEGO bits together. When we talk about the blueprints, you can understand the story. It's like, what does a solution look like? Solutions and blueprints actually are very, very closely related. 

ANN: You know, in the past, we've done a fantastic job of putting out solution guides that do put some of the stuff together, but it ends up being just a website or a white paper. Or we do a presentation on it. And customers, you know, they're getting more and more comfortable, with automation, with technology like Terraform, with Kubernetes and so forth. And they want more than that. 

They want more than just a bunch of G Cloud commands. They want something they can take and reuse over and over again or that they can contribute to. We get questions from customers all the time. How does Google do xyz, especially when it comes to security and compliance? 

Especially compliance, we work with a lot of a regulated industry. So health care, financial services, retail. And a lot of the compliance frameworks were written a decade ago. Let alone virtualization-- then you have cloud in mind. And then when you get into more cloud native technologies like Kubernetes, it gets really confusing. So they really want prescriptive guidance around this. 

Or they ask, how does this other customer do this thing? So again, I think we keep getting into the blueprints, but this is where this blueprints idea came from was a customer request really asking for something that's very prescriptive, very opinionated, and how Google would do something. 

MARK: Right. I mean, a lot of it comes down to helping them understand. Obviously, like you said, there's so many different services that Google has. And when you're saying, you know, I'm a large enterprise company. I want to develop this new application. How do I run it in a secure and scalable fashion? 

And if the answer to that is just app engine, well, that's not terribly helpful, because it tells you a little piece of the story. And so there were all these solutions built on that, and they explained a lot of detail. And it sounds like the next step of that is really these blueprints that you have obviously teased a couple of times. 

So talk a little bit more about those. I mean, obviously, that sounds like the origination of them. But how do they work? How did you get the inspiration for them and those sorts of things? 

GRACE: Customers. Customers are our inspiration. That's literally. I mean, both Ann and I work closely with customers. And customers more and more have been saying, especially as we're seeing very large enterprises who have a lot of controls who can do what, and they need to be able to adhere within compliance regulations or meet particular security postures to say-- look, we know we could do this stuff because you've got these solution guides, which are great for people who kind of thing. 

But we want more prescriptive guidance. We don't want a choice. We just want you to tell us, do it this way, and provide us with the automation to do it in that way. So that's kind of where the inspiration came from. Then, so we started off by doing a discovery phase. So we've created a team. And Ann and I were kind of leading that team equally, and we did a discovery phase. 

We spoke to customers saying, what are the things you'd like to see, and what's the priority? We had to figure out how they were going to use them. We had to find some where for them to land. IE, where we were going to surface them. Because to be brutally frank, if you look at all our documentations, it's a bit of a hunt, your documentation journey, when you use Google Cloud. OK? You know, no point in hiding that. 

So we've got lots of stuff, and we wanted to try and cut down that. We wanted them to go to one place, where they know they could get this sort of information, you know. On the other hand, to kind of talk about where we found the home for them. 

ANN: I mean, they're on Google Cloud under our architecture site, and then we also have them on GitHub. But we'll talk a little bit about what they are. So again, you know, they're meant to be reusable, repeatable, prescriptive guidance. But the meat of what they are is they're composed of reference guides, reference architectures, and then deployable assets. 

So the deployable assets are made up of, again, probably Terraform. And we'll talk about we have different types of blueprints, so it's probably Terraform to set up your infrastructure. And then, you know, Kubernetes config to set up the next layer. And then some of them have, like, a demo application on top of them, so you can start playing around with this architecture. 

So we have right now, as far as the security blueprints go, two different types. So we have the security postures, which is really a collection of resources and codes to deliver, like a granular and specific security need. So this might be something like securing your data in cloud storage or securing API endpoints. 

And then what we have is landing zones. So these are really an end-to-end solutions. It's a pre-configured environment with a standard set of, like, secured cloud infrastructure, policy, and guidelines. So an example of this, which is one that we just release, is PCI in GKE. So going back to that, thinking about compliance, if you've ever looked at the PCI DSS, it's very hard to apply this to cloud. Let alone, Kubernetes. 

And customers. Customers are nervous about putting these regulated workloads in containers, but customers want to use containers. So we have a how to stand up a PCI environment, a non PCI environment in GCP. We have also worked with a third party auditor. So they've written up their auditor notes for this, so this can also be used when customers go into their PCI audit with their QSA. And so this, in theory, could speed along their process. 

So it's all available on GitHub. It's available on Google Cloud. So we can, you know, pull request and so forth. Grace has been working on the security posture, the more granular one, so I'll let her talk about those a little bit more. 

GRACE: So I've been focusing on Anthos. Anthos provides a ability to run your GKE clusters wherever you want them. So you can run them on prem. You can run them on Google Cloud, or you can run them on another cloud. So it provides one pane of glass. Just a high level one. So we're providing more granular blueprints to get you to a posture. 

So we've just released three to go with the PCI one. So we announced it here first. So we've just released one on enforcing policies, one on auditing, and monitoring and deviation from policies, and one on locality restricted workloads which a lot of our regulated industries are quite keen on. Particularly, the [? mayor, ?] where sometimes the customers have a requirement to just run their workloads in a particular country or region. 

Because of the types of things we've addressed in there, some of them will have accompanying assets on GitHub in the repo, so the enforcing policy ones is literally yaml and [INAUDIBLE] and show you how to apply them, because we're using policy controller, making sure that labels are configured. And you know, user network policies and even ASN policy. 

So in the end, it's like, how do I apply these things? The auditing and monitoring one, even though it's granular, it's actually much more complicated, because that's looking at things like how to use Google Cloud Monitoring and logging to do this. In conjunction with drilling down into other logging [INAUDIBLE] things, how do you use security health analytics? And this is just one blueprint showing you how to use all of those, but in a prescriptive manner. 

So we do have guidance about using these things, but not as I need to address this problem, and this is how I do it, which is the key thing about the blueprints. We're quite excited, because we've got the ball rolling now. We've got a few of them. So, yeah. 

PRIYANKA: Given all that background, how do you use the blueprints? Where do you see the future of blueprints to be? 

ANN: Yeah. So, I mean, we're going to be putting out more blueprints. So I've been really working again on the compliance ones. So we should be putting something out around HIPPA, HITRUST, and then working out some for FedRAMP. But where I would like to see these go is they get pulled back into the product. 

So instead of this something that you have to go do after you stand up GCP, go to GitHub, and pull it up, it would be something that's available in the product. So you could go in to the console, or through some other automation, and say, hey, I just want this PCI environment. Hey, I just want these policies. Hey, I just want this thing. 

And I also see that we're going to expand this further than security. We focused on security because it's Grace and I's background. But, you know, obviously, customers want more than that. But really I would like to see it again. This kind of pulled back into the product more. And we are working with PMs on how this might look. 

GRACE: The other thing is that we're always listening to customers as to what they want, you know. So, you know, if the demand is there, a particular blueprint that we might not be working on or not prioritized, but customers are saying, can you deal with this? We can reprioritize it. It's not carved in stone, but we have got a backlog. We have got a roadmap. 

MARK: How does one get started with the actual blueprints, you know? They can obviously go and get them. You said there's a great way to contribute to them because they're on GitHub. What does the process look like for someone to go from I need to start to actually using one of these blueprints? 

GRACE: In customers, you have different personas. OK? So what we've done is we've split blueprints fundamentally into the what and the how. So we've got the guides that are published on Google Cloud themselves. Under Architecture, you get access to them by the compliance center. 

There, you can actually have understanding of the controls. I'm talking about the more granular one. I'll let Ann talk about how it looks for the big [INAUDIBLE] one. But there you will have a guide that talks about the controls that you are going to be actually deploying. 

And then there's a bit at the end of it saying, how does all this come together? So you've got a high level view of the steps that you need to do. And then, of course, we've got the actual deployments, deployable assets, where we can automate. So not all of the blueprints will have something on GitHub, because some of them might just be one bit of yaml. And you think, well, that doesn't really work. 

But the idea is there is a GitHub, where you can then kind of clone the repo. And they've got instructions to tell you how to apply it to your environment, your situation, your application. As Ann said, there will be a demo. And the one I'm working with, I'm actually working with [INAUDIBLE] on that with the repo type work for the ones I'm working on. 

We are creating a demo to show how you can use some of these blueprints together. So we look in the more granular ones. They're the ones that I've been working on. You will be using multiple ones of these blueprints. So in some cases, you need to make sure you use one blueprint before you apply the others. 

That's it. Go and read the links. There are the pages where they are. And then get started essentially. So Ann, I don't know if you want to kind of add some color to the compliance ones. 

ANN: Compliance ones are the ones we're calling landing zones because they're an end-to-end solution. Mostly, if you have org admin access, you can just go running these. So it depends on how much you want to get your hands dirty, but we have shell wrapper scripts that wrap a lot of Terraform command, and all the Kubernetes, and Helm commands. 

You can just go run a few shell scripts. It will stand up the environment again, assuming that you have the right permissions in GCP. And it will deploy a demo app for you. So it's one that we use for a lot of things. It used to be called Hipster Store. Now it's called Online Boutique. It's a demo e-commerce app, so you can start just getting familiar with all the different security controls in it. 

Our intention is that enterprises will probably not use this 100% for their PCI environment, but they'll take pieces of it. But again, it gets people very familiar with the controls and GCP quickly, because you just have to run a few commands. But again, if you want to run all the command yourself or go mess around with the Terraform, we also have very verbose documentation on that. 

PRIYANKA: One of the things that we didn't discuss so far about blueprints is how are they actually built? What are the teams involved? What's the process of getting to it? 

GRACE: It takes a village seriously. So [INAUDIBLE]. Yeah. So Ann's already mentioned PMs. I've already mentioned [? devro, ?] you know. But there's age. Obviously, there's solutions architects and solution managers. They're tech editors, you know. 

And most importantly of all, our customers. And our customer engineers who allow us to have access to those customers. OK. So literally it's not built in a bubble. It's listening to people, and all those people have contributions. 

And to be honest, you know, the stars, I'll say, are actually the tech editors, because, you know, other than that, you'd be very confused with the spending. I mean, we were talking earlier about my hobby. But I have been known to spell the same word in British English and American English in the same document. You must feel sorry for our tech editors when they get me. 

PRIYANKA: Yeah. I can feel that. It's been quite some time since I've moved here, but I grew up in India. And I learned British English. So I do still make those errors. 

GRACE: They're not errors. They're not errors. They're not errors. You're correct. You're correct. They're not errors. 

PRIYANKA: Right. They're not errors, but it seems like they are. Because when you're talking to somebody else, it's like, oh. Oh, OK. You didn't understand what I was saying there. 

GRACE: You need to have more virtual coffees, Priyanka. You'll be fine. We'll get you back to thinking correctly. 

ANN: I think another thing worth mentioning would be the blueprints. And something that people outside of Google might have heard about Google's 20% project. So this really started as a 20%, or side project for Grace and I, and a few other folks, Zeal, that we work with. 

And it has gotten so much momentum in the last, I don't know, two months, Grace? I mean, we literally have spent every morning this week in meetings just talking about this. There's so much excitement internally about this. So it's one of those things that just shows that being able to do these side projects or having the flexibility to do these kind of things, where they can go. 

We're both speaking at some virtual summits on this later this month or in the next couple months. There's internal meetings, where we're discussing this. It's, you know, all the way up to [INAUDIBLE]. So it's been pretty exciting just to see a small, little side thing happen. 

MARK: Yeah. It's awesome to see that this is going to evolve over time. Like, you said, this is new. 

ANN: Yeah. 

MARK: And, you know, I'd be interested to hear. Have there been any great customer stories that you can share or any people who have started to use this and given some really good feedback? 

ANN: Well, we just released the first blueprint a month ago, and we did it as kind of a soft launch. Because we were waiting to have a few more of them published, so then we could start putting a little bit more PR around it. We have had a lot of customers ask for this. 

And we've been working with some large customers, retail and bank customers, and demonstrating our PCI one. And they're quite excited about it. But I can't say that anyone's been using it yet just because it's not been out too long, but people are really excited that we're starting to do this. 

GRACE: The other three that I was working on, but only got released yesterday just in time for the podcast. 

MARK: Oh, that's perfect. And actually I feel silly asking you now, because I realized that these were developed based on customer use cases. So, I mean, that alone means that they actually were put through kind of, what does this look like? How does this cost or implemented? And then it's really just a matter of republishing that genericized case study as a very, very active way to use it. 

ANN: Yeah. And one of the things we are doing with the PCI one, as we were developing it, we gave a preview to some customers and got some feedback. So we do get input through the cycle of development. 

PRIYANKA: Yeah. And so the links to the ones that were just released, as you mentioned, Grace, and the PCI one, are we going to be able to put those in the show notes? 

GRACE: Yeah, because they're all together. So it's one link, and they can find them all from there. 

PRIYANKA: Awesome. That would be great. And then any call to action for our users to go check them out? Any other feedback that you would like to share? 

GRACE: They can tweet us. Both Ann and I are on Twitter, so you can tweet us for any feedback on which ones you'd like to see. There's also a feedback on the web pages as well, so you can also do that. But, you know, talk to us. Twitter feedback. The Feedback button actually goes to our internal tool that both Ann and I will receive a message on that. 

ANN: Or GitHub. 

GRACE: Or GitHub as well. 

PRIYANKA: And Twitter is @annnwallace. And Grace's is @grapesfrog. 

ANN: I assume they'll probably be in the show notes as well. 

PRIYANKA: We will include them, but I just wanted to have fun. Is that all right? 

ANN: Yeah. Mine's Ann Wallce with three n's. 

PRIYANKA: See? You're doubling down on the fun, which was the intention. 

GRACE: I just didn't want to be a number with my twitter name. I was called Grapes, and that's just a long story because I'm clumsy. One of my early jobs is I worked for a pharmaceutical company. And they said, oh, Grace. Do you want to grab some grapes? And it, like, knocked over. The drink fell over. 

And I've been there two days, so that was grapes. So I thought, great. I'll be called grapes. It's like, no, I don't want to be grapes01 or grapes2. When I was young, I was also fairly hyperactive and, you know, jumped around like a frog. So I thought, you know what? I could join these two nick names together. And that's the story. 

PRIYANKA: That's the story. Wow. I always wondered. 

GRACE: I just didn't want to be grapes01. 

MARK: I like that you owned both of those things and said, no, this is my persona now. Awesome. Well, Grace and Ann, thank you so much for coming on. Is there anything else you want to mention before we wrap things up? I know you had mentioned that there were some virtual summits coming up? 

ANN: We're recording one, I think, next week. It's a CISO Summit, so it's a security-focused summit. And then I will be speaking on compliance and compliance is code at KubeCon EU, which is going to be recorded, I think, in August? 

GRACE: Yes. I'm actually doing a talk next on there, with a customer, talking about blueprints. So there you go. 

MARK: So, perfect. So make sure to check that out. And we'll include as many links as we can in the show notes for people to follow up. I think it's really awesome that, for the blueprints especially, the ability to go in, and try them, and then being able to commit back to them through GitHub. And say, oh, here are some changes, or here are some things I thought would be useful. 

I think it's such an awesome tool for people to use. So, hopefully, people can go out there and check them out. Again, Grace and Ann, thank you so much for coming on. 

GRACE: Thank you for having us. 

ANN: Thank you. 

MARK: That was such a fun conversation. I really enjoyed it. And hopefully, people got a good chance to learn about what the solutions engineering team-- what their efforts are really focused on here. And, you know, if you're interested, check out the link for those blueprints, because obviously, being able to use them. 

And then, you know, if you have ideas, or thoughts, or comments, use GitHub and ping back to these people. They definitely want the thoughts from everybody. 

PRIYANKA: Given that it's a work in progress, essentially, it would be amazing to get feedback as much as we can. Grace and Ann, as you heard, are really looking forward to that feedback from you also. We hope that you utilize the channels that they shared to share your thoughts with them. 

MARK: Absolutely. And in that same vein, why don't we go ahead and jump into our question of the week? 

[MUSIC PLAYING] 

There's just a bunch of Google Cloud products, and some of them have very similar names. And, you know, it is what it is. 

I don't understand. There's no space in BigQuery. As we know from Felipe Hoffa, it's BigQuery. One word, capital B, capital Q. But the Bigtable has the lowercase t, and there it's still one word. 

COMPUTER VOICE: I agree. If it was little table, then maybe a lower case t would be in order. If the table is big, it deserves the capital T. 

MARK: Anyway, this is neither here, nor there. So there's a lot of Google Cloud products. You know, there's a more traditional sense of what some of these products do, metaphysical layer or at a more virtual machine oriented layer when you're just dealing with development environments. There's a big difference when you scale up to the cloud. 

And Google Cloud, as many cloud providers do, have a whole suite of different products and offerings. So I guess my question really is, for someone who's new to cloud, how do you kind of explain to them what these key products are, and how they might be comparable to some of the technologies they're already familiar with? 

PRIYANKA: Yeah. And I've been getting that question a lot lately as well, given some of the presentations, and conferences, and stuff that we all go to, right. So I thought it would be great to come up with a series of content that'll give people an introduction to Google Cloud in a way that, here are some of the things that are superficially going to relate to what you already know. 

And then from there, you can expand into other things, because then it's become easy for you to understand the terminologies and stuff. So we launched this new series. I've been working on it for about a month and a half now. Given the success that we've had from the community around on 13 days of GCP, people really liked the format. They had much more feedback in terms of what they would like to see next in that similar format. 

I came over the series called Google Cloud Drawing Board. And we are literally drawing out the different main products that give an introduction to Google Cloud. So the first episode went live this Sunday. It's called, What Is Compute Engine? So it's literally answering the question as to what is Compute Engine? What you can do with it? What are the different use cases? And when are the best situations to use that product? 

And I think those are some of the very basic questions that everybody asked when they look at a product. So that's the goal of the series. What we're trying to do there is give you a set of products. And, you know, you're going to learn about cloud SQL. You're going to learn about BigQuery. So the main things, the basic things that help you get put together an application-- a database, a virtual machine, and some portions of serverless and compute. 

So we're going to cover those topics in there. It's a weekly series, and we're going to answer the same questions. What is product x, and how do you use it? What is it going to solve for you? And some use cases. 

And so I think that hopefully answers the types of questions that we are getting and the feedback that we are getting. What do you think? 

MARK: It sounds like there is quite a few episodes in the pipeline. So as they come out, I'll be super excited to see them and then recommend them to people who are asking those questions, because you get that all the time, right. Like, what is this? How does it work? What are the basic fundamentals of this? So I'm super, super happy to have a link that we can easily share with people. 

PRIYANKA: Yeah. Hopefully, this content is going to help people answer that question of, when should I use Compute Engine versus Cloud Run versus Kubernetes Engine and some others as well? So that's the goal here. And like everything else, we would love to hear from you, on Twitter and on other channels, as to how you are utilizing the series. 

What else would you like to see? Because that is what feeds into our next thing that we work on. So please provide us that feedback, because that's important. 

MARK: Absolutely. Excited to hear from people. And of course, we'll always have links to Twitter, LinkedIn, or other social channels to reach out to us. All right. Well, thanks to everyone for listening. Before we wrap up, Priyanka, I mean, obviously, you were just talking about the Drawing Board series. What other cool projects are you working on? 

PRIYANKA: So this project that we talked about, which is the Drawing Board I've been working on for about a month, after 13 days of GCP got the love that the community gave it, I thought I need to do more. But there's a series that I'd been working on for the last four months. It has been a longer project. 

And the first episode of that series is going to launch next week on the weekend, as well. And I'm pretty excited for that one, because it's an animation series. And given we're talking about the introductory content, that's another set of videos and content, that I'm working on, that's more catered to works introduction towards letting people know what all of our products are doing. 

So I just wanted to point to it. And then next week, keep an eye on the things that we publish out during the weekend, because one of those is going to be this thing that I just talked about. 

MARK: It sounds like a good opportunity for people to probably follow you on Twitter to stay up to date with the massive amounts of different types of content you're pushing out there. 

PRIYANKA: Absolutely. If you do want to follow me, my handle is P Vergadia. P V-E-R-G-A-D-I-A. We'll also include it down in the description. 

MARK: Awesome. Well, once again, thank you very much to our listeners. We're always happy to have you come join us for a little while and hopefully learn some cool fun interesting things. Like Priyanka said, we're always excited to hear from you. And hopefully, we'll see you all next week. 

PRIYANKA: Thank you. 

[MUSIC PLAYING] 

MARK: Who would win? A Google Cloud platform podcast host or one random motorcycle outside? 

PRIYANKA: Random motorcycle. 

MARK: And they always win. 

PRIYANKA: Yeah. 

MARK: Clearly, I need to work out more. 