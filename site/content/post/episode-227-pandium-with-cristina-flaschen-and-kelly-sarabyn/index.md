+++
audioDuration = "00:38:23"
audioFile = "Google.Cloud.Platform.Podcast.Episode.227.mp3"
audioSize = 55288469
categories = ["SaaS", "No Code", "Yes Code"]
date = "2020-07-15"
description = "This week is all about business-to-business marketplace software with Pandium as Mark Mirchandani and Max Saltonstall talk with our guests Cristina Flaschen and Kelly Sarabyn."
draft = false
episodeNumber = 227
hosts = ["Mark Mirchandani", "Max Saltonstall"]
title = "Pandium with Cristina Flaschen and Kelly Sarabyn"
image="/post/episode-227-pandium-with-cristina-flaschen-and-kelly-sarabyn/images/hero/hero-EP-227.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/hrr7vp/episode_227_pandium_with_cristina_flaschen_and/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week is all about business-to-business marketplace software with Pandium as [Mark Mirchandani](https://twitter.com/markmirch) and [Max Saltonstall](https://twitter.com/maxsaltonstall) talk with our guests [Cristina Flaschen](https://twitter.com/cflaschen) and Kelly Sarabyn. The Pandium platform helps companies build and support in-app marketplaces with a focus on software integration and flexibility. 

Kelly and Cristina start by explaining how Pandium deals with scalability for clients with multiple users and partners. Cristina elaborates on Pandium's role in facilitating integrations, helping customers build customized, flexible solutions. We discuss how APIs are handled and the way Pandium takes care of authentication, security, and other standard pieces. 

We continue with a thorough discussion of 'yes code', 'low code', and 'no code' approaches, and the benefits and drawbacks of each system. With a combination approach of some 'no code' tools and other 'yes code' pieces, Pandium allows better customization in any code language, while keeping some functions easy for non-engineers.

##### Cristina Flaschen

Cristina Flaschen is the CEO and co-founder of Pandium. She has managed integration projects and technical implementation teams for over a decade, including at Handshake and Booker.

##### Kelly Sarabyn

Kelly Sarabyn is a senior product marketer at Pandium. Previously, she was a partner at Woden and 2K North, where she crafted the positioning for dozens of SaaS companies.

##### Cool things of the week

* Choose the right Google Compute Engine machine type for you [blog](https://cloud.google.com/blog/products/compute/choose-the-right-google-compute-engine-machine-type-for-you)
* New gcloud cheat sheet available as free printable download  [blog](https://cloud.google.com/blog/products/management-tools/new-gcloud-cheat-sheet-available)
* Search for Racial Equity [video](https://www.youtube.com/watch?v=UcycZretpbc)

##### Interview

* Pandium [site](https://www.pandium.com)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* Google Sheets [site](https://www.google.com/sheets/about/)
* Improving marketplace integrations with Pandium [blog](https://medium.com/google-cloud/improving-marketplace-integrations-with-pandium-e297461e3aa9)
* Scaling and support on GKE with Pandium [video](https://www.youtube.com/watch?v=C_bth8Wtt9Q)
* What's Wrong with Low and No Code Platforms? [blog](https://www.pandium.com/2020/02/whats-wrong-with-low-and-no-code-platforms/)
* “No Code”​ is great. But here’s why we need Yes Code [blog](https://medium.com/@anildash/no-code-is-great-but-heres-why-we-need-yes-code-c5f6fd615a51)

##### Tip of the week

Alicia Williams is here to tell us about [connecting Sheets to BigQuery](https://support.google.com/a/answer/9604541?hl=en).
     
##### What's something cool you're working on?

A new video series called [Season of Scale](https://www.youtube.com/playlist?list=PLIivdWyY5sqKRzuCV5BejHJ3YoE-Sd8ku) started just last week! 

Max's latest [blog post](https://medium.com/google-cloud/improving-marketplace-integrations-with-pandium-e297461e3aa9) is all about Pandium!

The [Stack Chat](https://www.youtube.com/watch?v=Bu2uEX2nB9A&list=PLIivdWyY5sqJvwGd0PTzSx1j0cePX0INl) series!

##### Sound Effect Attribution

* "Laser Wrath 4.wav" by Marcuslee of [Freesound.org](https://Freesound.org)

{{< transcript "[MUSIC PLAYING] MARK: Hey there, everybody. And welcome to Episode 227 of the weekly Google Cloud platform podcast. I'm Mark Mirchandani. And I'm here with my friend, Max Saltonstall." >}} 

MAX: Hey, Mark. Thanks for joining me. 

MARK: Absolutely. And a controversial opinion, I enjoy brownies without the crust. I was thinking about that this morning. And obviously, I really want some brownies now. But I'm not a crust guy. I don't know what it is about some people who just absolutely have to have the crust on the brownie. 

MAX: It definitely is basically fudge optimization. And I'm a big fan of fudge. So I support this. I think if it was a cakey brownie without the crust, then you're just morally wrong. But if it was, like, a fudgey brownie without the crust, I can appreciate that you want more of the fudge experience and less of the cookie cake kind of mouth feel. 

MARK: Exactly, right? I want to optimize that gooey part of the brownie, because to me that's the best. 

MAX: Especially with ice cream on top, I think the gooeyness is very much appreciated. The Ben and Jerry's Chocolate Fudge Brownie or New York Super Fudge Chunk-- both hallmarks of my ice cream collection. 

MARK: But I will disagree with what you said earlier, which is, no matter how you like to eat a brownie, you're right, because brownies are delicious. 

MAX: Fair. OK. I stand corrected. 

MARK: Well, moving on from delicious brownie talk, we actually have a super cool interview today. Max, can you tell us who's going to be joining us? 

MAX: Sure. We got a chance to talk to Pandium. Cristina and Kelly joined us and they told us a little bit about how Pandium does some really cool business-to-business software as a service for especially smaller companies who are trying to integrate with these big, online marketplaces, so they can tie into major players like Salesforce and others and take some of the overhead away from those integration efforts. 

MARK: Yeah. And we also got into a really great conversation about finding the right solution for people to work with code or without code. It's a really, really good conversation with Cristina and Kelly. And then to add on to that, I actually invited Alicia, one of our teammates, to talk a little bit more about a solution that I think enables people to use something that previously needed code. And now maybe you don't need as much code. We'll get into that after the interview. But before we do any of those, why don't we jump into our cool things of the week? 

[MUSIC PLAYING] 

MAX: There is an awesome blog post about choosing the right Compute Engine machine type for you. And I think this is super helpful. Because there are way too many Compute Engine instance types that you can create. 

And a lot of larger companies who have the expertise here, they'll make templates. And then they can just pick the two or three instances they need and fire those up multiple times. But for someone new to Compute Engine, it's this insanely hard bin packing problem. Because you don't want to go too big, or you end up wasting money. But you don't want to go too small, or you end up running out of resources. 

And so explaining what do all these things mean, why would you choose one over the other, how do you interpret N201P4. It's kind of, like, gibberish. And so I'm glad to have that kind of blog post. 

MARK: Yeah. I know the E2, right, speaking of just random numbers and letters. And I'm sure they mean something to somebody. But the E2 machines recently launched. And they're supposed to be pretty performant and reasonably priced. But this breakdown is really nice to have, because it's really hard to understand what all of those mean. 

MAX: Yeah. Or why you'd pick one over the other. Because clearly, they were made for different purposes. And it's really hard to reconcile all of the numbers on the page with what does my app or my workload actually need. Especially if you haven't put it into a production scale environment yet, you're just making a lot of guesses. 

MARK: Absolutely. And speaking of making things easier, my cool thing of the week is this new GCloud Cheat Sheet. So if you use the GCloud as the Google Cloud command line SDK, pretty much, you can do everything with that. And what's really neat is, on the console, the visual interface, when you make commands, it can tell you what the GCloud command equivalent is. 

And obviously, as you spend more and more time with the Cloud, you're probably going to want to automate things, or do stuff from the command line if that's your preferred interface. So having this cheat sheet is just a really helpful way to understand some of the components in the commands in a much easier way. 

MAX: I love it. I'm looking forward to printing that out and having it near by us so that I don't keep stumbling through different documentation pages when I'm using GCloud. 

I'm also excited because there's a new Talks at Google program launching this week, The Search for Racial Equity. And one other kick off episodes, which is super interesting, is a conversation with Nikole Hannah-Jones-- who spearheaded "The 1619 Project," won a Pulitzer Prize for "The 1619 Project"-- looking at how do we confront the uncomfortable truths that we'd rather ignore around civil rights and racial injustice, 400 year history in North America of slavery. 

MARK: There's a lot of really great talks on the Talks at Google YouTube channel. I'm actually really excited for that one. I'd love to view it whenever it comes out. 

We'll have a link to it in the show notes. I don't know if it'll be out by the time this episode airs. But let's definitely make sure we have the link there. Because there's so many great people who come in with Talks at Google. And it's always really exciting to hear the wide variety of topics there. 

MAX: There's going to be some great stuff. 

MARK: All right. With all of our cool things out of the way, why don't we go ahead and jump right into our interview with Cristina and Kelly? 

[MUSIC PLAYING] 

Cristina and Kelly, thank you so much for joining us. To kick things off, can you tell us who you are and what you do? 

CRISTINA: Yeah, absolutely. So my name's Cristina. And I am the CEO here at Pandium. And we are an integration platform that helps b2b software companies build and support app marketplaces. 

So we're really focused on the idea that software integration isn't what it used to be 10 years ago. Integrations are ubiquitous amongst the b2c space. And now b2b users demand those same pieces of technology. We've built a nice piece of infrastructure to help facilitate that for every software company. 

KELLY: Hi. I'm Kelly. And I'm a senior product marketer at Pandium. So I hope to develop our messaging and sort of explain the product to users and partners. 

MARK: So I think the first immediate question that comes out of that is talking about an app marketplace. Can you tell us a little more about what that is? 

KELLY: Yeah. So when we're talking about in app marketplaces, we're really talking about those integration marketplaces. And sometimes, you'll see them referred to as centers, or directory, or just app integrations. 

And when SAS companies want to provide their customers with product integrations that are sort of built out of the, box they will, in their app, say, hey, we're Salesforce. You can connect with HubSpot. You can connect with Mailchimp. And they'll list out all the different apps in all the different categories where their customers can come. Instead of having to build that out themselves, which as we all know takes a ton of time, they can just click to install it within that app store. 

CRISTINA: It's interesting, too-- Kelly touched on this a little bit-- that the language around app marketplaces or apps centers, integration marketplaces, plug ins-- the language is really disparate. The space is, I think, really starting to explode. We're really kind of the beginning of this concept of integration being a core feature of a product. 

And as such, we have customers that call that experience within their application all different things. And sometimes when you talk to folks, you talk about a marketplace, they immediately think there's a commercial element. Or some folks think it's agency related. It's just-- it's really kind of all over the place. 

So part of what Kelly's actually been working on here at Pandium is helping to kind of standardize that language. So that when we're talking to our customers, the language is consistent across different companies. With that said, part of what we've done with our product is enable flexibility around a lot of that stuff. 

So if you're a company, and you want to call it an app directory, that's fine. We can facilitate that. If you want to call it an integration center, that's also fine. But the underlying technology is the same. 

MARK: So how do you make that scale, when there's so many different, either both small and big, players in this world? 

KELLY: That's one of the key reasons Pandium was built. Because traditional integration platforms were built more for workflow automation within enterprises. And when you think about the use case of a product's integrations, and you have almost an endless number of users, I mean, you may have thousands or tens of thousands of customers, and you also may have hundreds of partners. So when you bring in all these different players wanting to get access and use the platform, it's a very different use case. 

And it's something that, when people come to this problem, they don't initially think through. They're, like, oh, I'm somewhat small. I can build an integration with one partner. But then you have to think ahead. What infrastructure do I need in place when I'm going to have 10,000 people trying to use this integration, install it, and I'm going to have 500 partners? 

So I need to be aware if there's errors, or if something's going wrong, I need that visibility. So that's something that, I think, a lot of companies, when they first come to this issue, they don't realize that. Because they've never done it before. 

CRISTINA: From a technical perspective, a lot of the other integration technology in the space is, as Kelly said, built for a different use case and also built on older technology, kind of pre-microservices, pre-containers. And that's apparent, when you're trying to do this at massive scale, that some of that infrastructure starts to fall apart. So we've been able to use GCP, obviously, and GKE to help us with some of that auto scaling and really make use of some of the great new technology that exists, that really just has come out within the last two, three years, or has become more widely adopted in that period of time. 

MARK: We'll put a link in the show notes. But we actually did a conversation where we talked a little bit more about how you use Kubernetes and how that was built. So if you're interested in hearing a bit more about how Pandium does that, I definitely recommend checking out that link. How does somebody actually use it? 

Because when you're talking about facilitating integration from both sides, normally, I'd have to think Side A is calling Side B's APIs. And Side B, I need to call them back. What does the Pandium aspect actually do? 

CRISTINA: Yeah. So we provide a lot of the same value of a traditional [? I-PASS ?] tool. So if any of the listeners are familiar with the space, Integration Platform has a service. It's something that's been around, probably, for 20 years in some form or another. 

So we handle authentication. So as you said, connect to APIs on both sides. We handle error logs and facilitating a front end for both our customers and their customers to interact with those integrations. But we really act as kind of a middleware layer to help our customer's engineers build these integrations and are really flexible and robust way. 

So as Kelly said, a lot of the other folks in the [? I-PASS ?] space are really workflow tools. And that's a different use case than the idea that these integrations are products of our customers' platform. 

So we are a really seamless part of the developer experience for our customers' engineering users. And I think we touched on this in the Stack Chat episode. But we actually run code that our customers' engineering users write on the platform. So really trying to distill down the development effort from having to manage this massive infrastructure at some point when you have a lot of adoption to just focusing on the thing that makes that solution special, which is the business logic of the integration itself of the the solution. So we want to see, what we do see is that the time to live is going down from you know maybe months to just, like, a week or two in building these solutions. 

KELLY: Yeah. And I think a lot of the traditional tools have the more bundled code. Where Pandium sort of intentionally wanted to leave the business configurations to be coded by the company's developers themselves so that they had that flexibility and control. In a lot of the bundling, when you bundle the code up, it can be good in certain cases. 

But in a case like this, where you want that customization, you want that flexibility, what you would see happening a lot is that the developers would then have to develop within those systems anyway. So they would have to end up coding in any event. And also, they'd have to learn this specialized system. So they would end up being behind the ball. Because they'd basically be spending more time than if they had just developed the configurations themselves. 

And the way Pandium is set up is we're language agnostic. So a developer can code in whatever language they already know and they want to continue to develop their expertise in. So that's sort of an added efficiency in the process, compared to traditional tools. 

CRISTINA: I think it's interesting. What we've seen in the market is that swing from 20 years ago-- everything is code, there's very few engineers, really, an engineering skill set is highly specialized, very expensive, hard to hire-- to sort of this low code, workflowy, kind of place. And now I believe we're seeing a swaying kind of back to the flexibility that actually writing code enables and seeing a kind of a resurgence in tools that are built to make engineers' lives easier. But meeting them where they're at, not asking them to learn a new language, essentially, to get the value of these tools. 

MARK: Yeah. I think traditionally these kind of no code solutions were ones that offered a lot of promises. Of course, you're trying to lower the barrier, right? And say, anybody can come in. You don't need to have a team of engineers who have some odd years of experience in this language or this framework. 

But then they really restrict you sometimes from the flexibility. And that's naturally kind of part of it, right? Being able to write code kind of gives you the freedom to do whatever you want. But in a no code solution, you really have a trade off there. So I mean, there's got to be some cases where that makes sense, and some cases where it doesn't. Right? 

CRISTINA: Yeah. I mean, I believe that there is a place in the market for those kinds of tools. Right? Especially speaking about integration specifically, for non-heavy duty business critical kind of stuff there's a lot of hobbyist things, especially with IoT, where someone who doesn't have a tech background can stitch some stuff together and see some fun stuff happen. 

But when you're building solutions for a piece of software, there are going to need to be programmers involved. So instead of making them try to use a tool that's frustrating for them, we believe that we should, again, meet them where they're at. And let them use the languages and kind of processes that they're familiar with. 

And I kind of joke whenever I see another low code workflow tool come out. Where, like, no code, no code. I'm, like, is that no code tool built with a no code tool, which is then yet built with a no code-- at the bottom, there is code. No one's building these massive products with those kinds of tools. 

So we consider ourselves to be a business critical part of our customer's tech stacks. So engineers want to use it. So let's let them use it the way they want. 

KELLY: I think thinking at it from a more general level, there is a few criteria you can think about in terms of does this really make sense to be a low code thing. And I think part of it is how much flexibility are you going to need? If you need to be flexible, it doesn't make sense to bundle it and restrict it. 

How much customization do you need? And that's where you saw a lot of cases where you have it bundled with the integration, but then you realize this isn't meeting my use case, especially as an enterprise. So then you have the developer come in and say, OK, we're going to make all these work arounds. 

And who is the user? I think if the user is a developer, you have to consider if they can write something in four lines of code and accomplish the same thing. There's no use of restricting them. Because that's taking 10 seconds. 

Thinking about those three elements can be helpful in deciding whether it really makes sense to have a low code or a no code tool. And when you think about our use case, we sort of take care of the authentication part of integration so that the developer doesn't have to do that. And as you can imagine, that's not like the business configuration. 

So the actual configurations of integration, it's really particular to the business. And you know your customer best. And you know what they need and what they want mapped and what they're going to want to pull in and push out. 

But the authentication is not like that. You need to have a secure way of authentication. It's something you can productize because it's just a standardized thing. You need to make sure the right people are getting access. And you don't really need to be an expert in your business. 

So that's why we sort of built it the way that we did, this part that makes sense to take away. But then, the part where you really need that business customization, we put it in the hands of the developer. 

MAX: Are there elements of the product that you've adapted or changed because of feedback you got from engineers who started using it and said, oh, we want this, or we want that to change? 

CRISTINA: Yeah, tons. Part of the fun of selling and working day to day with product engineering folks is that they have really good ideas. Our users are product and engineering folks. We're obviously very product and engineering heavy at Pandium. So we take the feedback very seriously. 

And a lot of our customers are trying to do cool stuff. They're thinking of us, again, as an infrastructure tool. And want to be, to Kelly's point, as flexible as possible. 

So we have Slack channels with a lot of folks. We have great account managers that triage that feedback so that we can figure out how to make it generic. Our whole purpose as an infra tool is to make these features generic, so not build one thing for one customer that no one else can use. But figure out a way to make that something that's so flexible that it can be used across time. 

I think another thing worth noting, too, with the new code workflow space of yesteryear-- which I'll say, like, 10 years ago-- I'm old enough to have been doing this long enough to remember-- this idea that APIs and software-- I think folks thought they were going to become more standardized. So it was, like, oh, everyone is going to use a Swagger API. Everyone is going to use OAuth 2.x, everyone is going to use Open.ID Connect 1.0. And these APIs are going to continue to become more and more standard. 

And what I think we've actually seen in the market is the opposite of that. It's that people are doing really cool stuff. And there isn't a gold standard. And APIs are APIs, like, post-patch, whatever, like, put. Those are standard things. 

But the way that those APIs interact with their back end products and the way that people craft their Auth is just becoming more and more disparate. When you start trying, to Kelly's point, to obfuscate some of the complexity of this stuff away, that becomes really challenging when you're dealing with complex systems. Because as a middleware platform, for lack of a better term, we don't have control over the systems on either side. And for us to then say, oh, we're going to normalize this, we're going to put it in a shape, we're going to put it in a GUI, or something like that, it doesn't work. 

When you're trying to do complex things, or anything that's slightly off the rails, I think that's, in the industry more generally, what we'll continue to see. Is that as more and more people are now developing software, people that are younger, people in high school and middle school are learning how to program, we're going to continue to see cool innovative stuff. And with that comes, I think, a lot of diversity in the technology. And it's hard to standardize that. 

MAX: This sounds a lot like what API gateways are trying to solve. So what's the difference between what Pandium is giving an engineering team and what an API gateway is giving an engineering team? 

CRISTINA: Yes. So we don't actually quote, unquote "do" anything to the APIs on either side of our platform, so our customer's API or any of their partner APIs. We do handle the Auths, because as Kelly said, that's something that can be commoditized or standardized. But the APIs themselves, developer users of Pandium are interacting with them in a raw fashion, using the languages, SDKs, and libraries that partner supports and that they're familiar with. 

And API gateway's a little bit different, typically, because it's a tool that a company uses to manage their own APIs. So [? we ?] would actually said, if you think about the workflow in a software company, there's the back end systems. There is maybe an API gateway. And then Pandium would be on the other side of that, in front of the other parts and facilitating that marketplace. 

So it's still API related. But we are not in the business of saying to you, customer, how you guys should build your API. Because you know that best. We just facilitate other folks being able to connect to it in a scalable way. 

MAX: Yes. I don't think I know anybody who says, yes, I would like to solve that authentication problem for this new project. 

CRISTINA: No, nobody does. And also, it's funny. Because even OAuth, generally, OAuth 2 has 30 different versions or something, like, point releases. It's just massive in terms of the landscape around Auth. 

And even for us, we're experts at this at this point. We play with this stuff all day. We run into protocols where we're, like, wow. This is a very secure situation here. But then, we'll figure that out so that their partners don't have to. Right? 

MARK: Right. And I imagine that ends up kind of having Pandium with a catalog of different partners that you work with. And you have, ideally, the authentication taken care of, as you've mentioned. What other aspects are they really getting when people kind of jump into the Pandium ecosystem to work on that? 

Because with just the Auth taken care of, that's a huge part of it. Like Max said, nobody is volunteering to go solve authentication yet again. But what other parts are there in terms of kind of facilitating that API to API communication? 

KELLY: I mean, I think a key thing that we are providing in terms of the experience is the front end. Which, you know, in and of itself, that doesn't seem necessarily like a big deal. But I think the way this plays out in organizations is a lot of times there's a real lack of eng resources for this. 

Because the engineers are assigned to the core product. It's really nobody's baby. So it's, like, the product team and the partnerships people that are often running this are sort of at the mercy of getting a few hours here, a few hours there. Keep trying to harass them. 

And so what happens is you see these integrations go live with a very clunky or bad user experience. The UI is not very good. It's unclear, or the user doesn't know what to do. 

And then that puts a huge burden on customer support. So we've sort of developed a white labeled front end that just comes with Pandium. And so it's sort of designed so that the customer can self-install and doesn't need to be going to customer support to get it done and can sort of have a very seamless flow of actually using the integrations. Because ultimately, if customers are not using them, there's no point and everybody's wasting their time. 

And we've heard from our customers that that really does save three to six months of work on their end, to have that ready to go. And the marketer can come in and just fill in all that copy. Their partners, the marketers can come in and put the copy in. They just have to upload it, sort of like that Wordpress-like experience, where you don't need to be able to code. And that's sort of a place where it makes sense to have a no code experience. 

MAX: Sounds like you're segmenting the engineers do the engineering work, and then the non-engineers can do that non-engineering work. But you're not removing the customization potential that a business is going to want to do to get exactly the functionality they need out of that integration. 

KELLY: Exactly. And we also have an admin dash for the customer support people who don't need to be engineers but can see the errors and can see what's going on. And I think that that's another case of sort of aligning the user with the tools that they need and providing that end-to-end experience of these in app marketplaces, which includes the engineers building them, the marketer explaining them, and then the customer support helping the customer to make sure that, if there's any errors-- there's always going to be errors from somebody-- and proactively notifying those customers. And then, understanding what's going on. 

So they're not being contacted all of a sudden by 50 people. And then they realize, oh, this other partner's API has been down for two days. 

CRISTINA: All of what Kelly just described was really informed by the members of the Pandium team having done this at other companies for so many times. And kind of successfully, or less successfully, seen implementations of these things. What we see as we talked to folks in the market is that everybody kind of knows that this thing, this integration thing, this app store experience thing is important. 

And it's a revenue driver. And it's going to be important for customer success. But there is this big black hole of knowledge around what does that actually mean? 

And what we've attempted to do is really identify the personas that are really important as users of the platform and build tools that are specifically for them, again, meeting them where they're at. Like Kelly said, there's no reason for a front end engineer having to be involved in writing or uploading content for a tool tip or something. We should create a UI for that so that a person on the marketing team can do it in a quote, unquote, "no code way." But when you look at the nitty gritty of the actual solution, engineers are involved in that. Let's let them do what they want to do the way they want to do it. 

MAX: And that sounds like a perfect example of finding that right fit right and meeting people where they are. You've said that's kind of what the platform is targeted for. And I think we're probably going to see more examples of that as time goes on. Right? Because we previously mentioned kind of the lack of flexibility that some no code solutions give you. 

And now there's this kind of concept of yes code. I don't know if code when it's appropriate is as catchy, per se. But that's kind of the idea moving forward, right? 

CRISTINA: I believe so. And what we're seeing when we are out in the market and with our customers is that that's true. And you know, it's not to say that some of these low code solutions can't be used to do this. It's just going to be way more painful and more difficult. 

And it's still going to require engineers. I mean, if you're getting the flexibility, a lot of the times they're too complicated for a business user to actually configure. You sort of need to have comp sci fundamentals and probably do some coding to use them. 

But they're also irritating to an engineer. Because they're, like, I just want to write a Python script. Why can't I just do that to get all the rest of this value? 

So I think there's ways to use some of these other kinds of tools to do this. I just think it slows down and provides a lot of friction that isn't necessary. I'm not an engineer. 

I don't know how to program. I use low code, no code workflow tools in my life. But just not for this specific thing. And I know when I need to grab an engineer. And this use case is a place where I would say that's appropriate. 

KELLY: I think, Mark, you put it well. Yes code is more catchy than when appropriate. 

[LAUGHTER] 

But I think we've had this strong narrative in the broader market of no code/low code and I think the pushback on that is, hey, code's amazing. It can do incredible things. 

It really provides you control and flexibility and customization that you're just not going to get when things are bundled. That's the cost of bundling things into visual blocks is you get some rigidity. And I think that that's sort of something that the market is shifting towards. 

We just did this report on the 1,000 fastest growing SaaS companies. And when you looked at all 1,000, 22% of them offered their customers a tool like Zapier, so a workflow automation tool to say, hey, use this to build your own integrations. Which you see in younger companies where they want to provide something. But for tools that were aimed at developers, it was, like, 3% of them offered that. 

And part of the reason for that is developers don't need that. Because if they can do it themselves in, like, 10 lines of code, why would they want this tool that's going to more limit them? And why even bother to learn it? 

You are seeing the market recognize let's make the place for it. Let's recognize the power of code while still saying that, especially when you have a business user, there may be some use cases that are really sort of simple and routine and don't need to be updated and changed frequently. And that is going to empower the HR person, or the marketer, to be able to throw up their blog without looping in a developer. 

MAX: A lot of the engineers, when they get thrown at this low code project, they often say, no. Just give me the APIs. I know what I want to make it do. 

[LAUGHTER] 

Just give me the flexibility, right? Give me all of the building blocks. Don't give me a toy that's already been constructed and then glued together. I want to take it apart. 

CRISTINA: That's what's interesting, too, is that, when we talk about APIs and developers, I feel there's this perception amongst maybe non-programmers that programmers don't want to read API docs. And actually, I've never experienced a programmer that was, like, I can't understand these well-written API docs. I mean, obviously, some API docs are incorrect or whatever. But that no platform would help with that, anyway. 

So I think engineers are used to reading that stuff and figuring that out. And candidly, even if you're using a low code tool, I mean, at least in my experience with the teams that I've worked with and have worked for me, they still have to read the API docs. 

If I'm trying to connect to QuickBooks online using a workflow tool as an engineer, I'm probably still going to go to those docs. But then I also have to try to figure out what this additional tool did to that API to make it do what I want, to your point, Max. So we're, like, let's just eliminate the attempt to obfuscate the complexity away-- creates a lot of rigidity. So let's just take that away. Right? 

MAX: It reminds you of going to the science museum. And it's, like, well, I could go pick up this moon rock. But actually, I'm going to put on the astronaut gloves. 

And now it's really hard to pick up that moon rock. Because you have so much limited flexibility. Can't I just use my hands, please? 

CRISTINA: Yeah. Early on, we started calling it coding with mittens. That may have actually been [INAUDIBLE] for my old team. Where they're, like, I can code. Or, like, trying to use a spoon and cut down a tree. You'll eventually get there. But I just want the saw. 

Just a different approach, right? And we wanted to make sure that there was a solution available for the way that modern software companies operate. And we thought that code is the way to do that. While also, the code that is running on our platform does actually empower a no code experience for our customers' users, who are usually like business folks and in different verticals. 

So we're enabling that workflow ability for their customers, for the end users of this product. But it's constructed, again, with code. And if you looked at any of these workflow or no code tools, again, I'd say, underneath there, if you go far enough, you are actually going to find zeros and ones. 

[LAUGHING] 

That's what it's made of. 

MAX: Is there a happy medium. I think about Google Sheets, which for a long time had app script, but no real macro capability. And then they added macros. And now, someone could go and just record the steps of the thing they need to repeat. 

Or they could go write the app script, which is just JavaScript with some Sheets APIs. And you could do it either way, depending on what that person needs or what level of flexibility they want. Does it have to be either-or, or can we hybridize? 

CRISTINA: There can be both. It depends on the user. Who is the human persona that is going to be building or interacting with this piece of technology? And it's a similar thing to what we were describing with adding marketing copy. There's no reason for Kelly to have to beg, borrow, or steal from a friend on the engineering team to get some content updated because there was, God forbid, a typo. Let's give her the opportunity to use a low code thing to do that, or no code. But when you're doing something more complex, maybe you do need something that is a little bit more flexible. 

MARK: Yeah, coding when it's appropriate, but only if you want it. And if you don't want it, you can go over there. But if you do want it, it's over at that side. I think that's the full name. 

MAX: It rolls off the tongue. 

KELLY: That's the pithy slogan that we'll take off on Twitter. 

[LAUGHTER] 

CRISTINA: I'm going to stitch it on a pillow. And I'll put it right behind me. 

MAX: Hashtag it, Mark. You're done. 

CRISTINA: Yeah. 

MARK: It's over 280 characters. I'm not sure that will work. Well, Kelly, and Christina, thank you so much for coming on. Always a lot of fun to talk to you all. 

Like I said, if people are interested in learning a bit more about Pandium, we'll put the link to the Stack Chat video in the show notes. But before we wrap up, is there anything last minute that you all want to call out? Which API documentation would you want to read? 

CRISTINA: Oh, God. Don't get me started on API docs. I got a lot of feelings. That could be our next one. 

KELLY: I'll say Slack. I've heard very good things about the Slack API docs-- as a non-engineer. So if I'm wrong, the engineers can contact me at Kelly@Pandium.com. 

[LAUGHTER] 

CRISTINA: Everyone light up Kelly. 

MAX: Last week, we had a really great conversation about documentation. And well, I think it stayed more at the level of some of the things that go into how companies prioritize documentation and talking about the developer experience there. It would be really cool to look at how that applies to API docs. 

CRISTINA: We actually get asked quite a lot, what tools should we use? How do we make this more better? And it's another tough problem. Sometimes, you've just gotta put the work in. 

MAX: Absolutely. Well, I'm looking forward to our next chat. And once again, thank you both for coming on. 

MARK: Thank you. 

KELLY: Our pleasure, thank you. 

CRISTINA: Awesome. It was so great talking to you guys. We'll talk to you soon. 

MARK: Such a great talk. We joked around a lot about code when it's appropriate, but if you don't want, it's over here. And I mean, it's an interesting idea. Because so many different tools, yeah, code makes easier. Right? 

The whole point of code is that you can do just about anything. But there are plenty of cases where you don't need to do everything. You just need to do something easily. And that, I think, is where the no code solutions really fit in. 

MAX: What I admire about what Pandium is doing is they're acknowledging that, for these businesses that want to have strong integrations, they have to make code. Because that's how they really define the right business logic. But any opportunity that they have to reduce the amount of code those developers need to create is a perfect opportunity. It is a huge service. 

And so if I can tell you, yes, show me your business logic in code. But don't deal with any of the authentication or the data segmentation. I will take care of that. I will make that invisible to you so you can focus on the code that's going to be unique to your company. 

MARK: And just like we said earlier, I think it's important to highlight those opportunities when code makes sense and when you actually kind of want to stay away from it. So with that in mind, I want to turn things over to Alicia, who is going to talk about one of the ways that you're able to abstract away from SQL, which you know, is code, more or less, and can be incredibly complicated. And how you can kind of get away from having to know SQL, but still being able to use BigQuery with connected Sheets. 

[MUSIC PLAYING] 

ALICIA: Thank you so much for having me, Mark. I'm also a developer advocate. And I've spent a fair share of the past few years exploring Google Cloud, looking for cool, accessible solutions, specifically in the area of data analysis. 

One of the latest features I've been playing around with is called Connected Sheets, which officially launched just at the end of June. Connected Sheets is a feature inside Google Sheets. And it allows you to connect to a BigQuery table directly from a Sheet. 

So to find it, open a spreadsheet and head to the menu at the top. Click Data, and then Data Connectors, and then you'll see Connect to BigQuery. It will have you choose a project. And then you can pick from any table you have access to or from public data sets. 

Now if you haven't heard of BigQuery, it's Google Cloud's data warehouse. And many companies are using it to bring together data from across all their disparate sources, process it, and then put it in one place so analysts can analyze and visualize it. And even though BigQuery is user friendly, I mean, it has a UI, and you can write and run queries directly in the console, it still requires you to write SQL. 

But now that the same BigQuery data can be accessed directly from Google Sheets, you don't need to write SQL. So once a BigQuery table is connected to a Sheet, you can create formulas, pivot tables, charts, just like you're used to, and they'll reference the entire table. It's a fairly seamless experience for a Sheets user. 

The connected Sheet feels similar to any other tab in the spreadsheet. It even shows a preview of the data so you can see all the different columns and rows. If you think about how many employees at a company use spreadsheets, and then compare that to those who specifically work with databases and write SQL, you can really see how Connected Sheets makes your data accessible to a much wider audience. 

Though perhaps I should say it could be accessible. Because data administrators and data set owners are able to control who can access the tables using Google Cloud's identity and access management service. So I know everyone will latch onto the different reasons why they like Connected Sheets once they start to use it. But so far I've noticed a couple of things I really love about it. 

First of all is your data is fresh. And you don't have a million copies or extracts of data floating around. And this is really important from a data governance perspective. Because it helps prevent the behavior of having local copies of data on laptops. 

Secondly, I'm more empowered as an end user at my company to create and pull my own reports. The data access is still controlled, but it can be more self-service. And data is super valuable when it comes to making decisions. And so now, this critical piece is in the hands of more decision makers. 

Finally, if you've ever had issues importing data into Google Sheets due to the limit of five million cells, now you can always load it into BigQuery and connect to it from there. So one big caveat, you'll only see the Connected Sheets option in the menu if you have certain versions of G Suite. And it's not available, unfortunately, in a consumer gmail account. But if you do have access, I highly recommend you check it out. 

MARK: Thanks so much, Alicia. It's a really cool tool. So if you have the opportunity, make sure you get a chance to check it out. 

MAX: There's some amazing public data sets in BigQuery that you could do some really, really cool data mining on and being able to bring that into Sheets opens up tons of new possibilities. 

MARK: Absolutely. All right. Well, before we wrap things up, Max, what cool projects are you working on? It's been a while since we last talked to you. 

MAX: So many, many months ago, I used to have a lot of fun talking to some of Google Cloud's customers about what they've built, why they built it that way, and we'd do these Stack Chat videos. And you and I have worked on those a little bit together. 

But I can't do that right now. So we've been doing Stack Chat at home, where we get remote interviews. And lately, I've been talking to MariaDB, which has a hybrid, transactional, analytical processing database, which is a mouthful for saying you can have the best of both worlds and abstract away some of the overhead, or the operations, required to give you both kinds of optimizations. 

MARK: Yeah. It'll be really interesting to get a chance to kind of hear how they built that solution and then, you know, what are the good use cases for using it. 

MAX: Yeah. And what's the trajectory that a query takes as it's going in so that you can make sure you process and deliver efficiently. Whether you're doing read write changes or whether you're doing large scale analysis. 

MARK: Absolutely. And so we'll look forward to hopefully having them on the podcast in the next few weeks. In addition, I know that one of our teammates, Stephanie, just launched her Season of Scale video. It's not just a video. It's a series. 

But the first video is out. And she talks about a lot of different ways to look at how do you scale up. You know, a lot of people are looking at scaling right now, based on the huge fluctuations in demand we're seeing. Stephanie goes over some tips for how to look at scaling, what tools you can use, and for the tools you're using, what things you should be looking at to meet your demand. 

MAX: Definitely worth a watch. 

MARK: And then, Max, you actually launched a blog post with Pandium based on what we did that Stack Chat video, right? 

MAX: Yeah. We talked about how they built on Google Cloud, how they solved some of the multitenant architecture challenges. They're running a lot of untrusted third party code. So they need to do really careful sandboxing and segmentation of all of their different customers while still giving them easy access to these integrations. So the blog post digs into a little more of the technical behind the scenes. And definitely check it out on Medium. 

MARK: Awesome. And we'll make sure to put a link to it in the show notes, as well. Once again, Max, thank you so much for joining us. And of course, to our listeners, thank you so much for listening. We're really excited to see you all next week. 

[MUSIC PLAYING] 

MAX: Take care. 

MARK: Poo, poo, poo. 

[LASER SHOOTING] 

It wouldn't be a goodbye without shooting some lasers into space. 

MAX: I mean, we could have an electric guitar riff, right? Like an [MIMICKING GUITAR RIFF] ill la lee! 

[LASER GUN SHOOTS] 

MAX: We could. I believe this one is open source and copy lefted, right? 

MARK: As long as it's royalty free, ACID-compliant and HIPAA-compliant, we're good to go.