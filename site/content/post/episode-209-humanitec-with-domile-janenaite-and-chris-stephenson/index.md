+++
audioDuration = "00:35:11"
audioFile = "Google.Cloud.Platform.Podcast.Episode.209.mp3"
audioSize = 50666649
categories = ["Humanitec", "DevOps", "CICD", "Cloud Native" ]
date = "2020-02-26"
description = "Jon Foust and Mark Mirchandani are joined today by Domile Janenaite and Chris Stephenson of Humanitec."
draft = false
episodeNumber = 209
hosts = ["Jon Foust", "Mark Mirchandani"]
title = "Humanitec with Domile Janenaite and Chris Stephenson"
image="/post/episode-209-humanitec-with-domile-janenaite-and-chris-stephenson/images/hero/hero-EP-209.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/f9uqdp/episode_209_humanitec_with_domile_janenaite_and/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Jon Foust](https://twitter.com/syntxerror1) and [Mark Mirchandani](https://twitter.com/markmirch) are joined today by Domile Janenaite and Chris Stephenson of Humanitec. Humanitec, a German startup, helps developers run their code easily and smoothly in various environments. Chris and Domile start off by explaining why Humanitec was founded and what sets it apart from competitors, especially in the way it streamlines devops integration.

Later, we learn how Humanitec is helping developers get the most out of cloud development by not only easily running deployments but also aiding in environment management. Developers can spend more time writing code and less time worrying about how they'll get it to run. Chris also expands on how they built Humanitec, the reasoning behind their development decisions, and the challenges they faced. Domile goes on to describe the types of teams and companies that Humanitec is best suited for and why.

<!--more-->

##### Domile Janenaite

Domile Janenaite is a product manager at Humanitec, focusing on developer experience in cloud-native development. Her team’s goal is to help developers escape scripting hell and smoothly enter the world of continuous delivery. In 2014 while studying she dove into Lithuania’s tech hub seeking to promote IT education nationwide. After finishing her studies she landed in Berlin’s tech scene and began working with 200+ dev teams across Europe analysing their processes and helping to improve workflows. During this period Domile became fascinated by the struggles that tech teams face working with cloud technologies. She envisioned building a product that helps developers optimize their workflows and reduce cognitive load. In 2018 she joined Humanitec in its early stages and currently she is working on an Internal Developer Platform which is pushing the industry to live in a “you-build-it, you-run-it” mindset.

##### Chris Stephenson

Chris Stephenson is VP of Product at Humanitec. He has worked in Engineering or Product across industries as diverse as Waste Management, HR-tech and Insurance but in recent years has been focusing on building platforms that enable development teams to implement and quickly scale applications. This has included running the High Performance Computing Group at Lloyd’s of London focusing on designing and implementing a platform to allow Engineers and Actuaries to quickly iterate on internal models at Lloyd’s of London, building a platform to allow for very fast development of “Partner Front-End” applications at Google (think the partner facing admin interfaces for Google Transit search or managing inventory for Google Play Movies) and currently at Humanitec building an Internal Developer Platform that can be used by all engineering teams to speed up their development of Cloud Native Apps.


##### Cool things of the week

* Showing the C++ developer love with new client libraries [blog](https://cloud.google.com/blog/products/application-development/new-cpp-client-libraries-available-for-google-cloud)
* New GCP Essentials video “GCP vs. Firebase — Part 1” [blog](https://medium.com/google-cloud/new-gcp-essentials-video-gcp-vs-firebase-part-1-f6a0c73f680a)
     * GCPodcast Episode 180: Firebase with Jen Person [podcast](https://www.gcppodcast.com/post/episode-180-firebase-with-jen-person/)
* Here to serve Korea’s businesses with a new GCP region in Seoul [blog](https://cloud.google.com/blog/topics/infrastructure/new-gcp-region-in-seoul)

##### Interview

* Humanitec [site](https://humanitec.com/)
* CNCF [site](https://www.cncf.io)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* Cloud SQL [site](https://cloud.google.com/sql/)
* Weaveworks [site](https://www.weave.works)
* Harness [site](https://harness.io)

##### Question of the week

[How do you prevent exposing API keys in source code?](https://cloud.google.com/secret-manager/docs/overview)
     
##### Where can you find us next?

Mark will be traveling and working on a video series for the [Google Cloud YouTube Channel](https://www.youtube.com/googlecloudplatform).

Jon will be at [GDC](https://gdconf.com/) in March.

{{< transcript "[MUSIC PLAYING] MARK: Hello and welcome to Episode 209 the weekly Google Cloud Platform Podcast. I'm Mark Mirchandani, and I'm here with my colleague, John. Hey, John, how you doing?" >}}

JOHN: I'm doing great. How about you? 

MARK: I am doing fantastic as always. So good to chat with you. We have not done an episode for quite some time. And this is our first episode of 2020. 

JOHN: Yeah, it is. Well, happy 2020. Yeah, it's been a while. I mean, I've seen you, because you stopped in the office a few-- 

MARK: Oh, yeah. I got to go to New York not too long ago. 

JOHN: Yea, yeah. And you were filming here. It was kind of cool, but it was good to catch up there. 

MARK: Absolutely. And I think we still owe each other some more Smash Bros. games when I get a chance to sit down and play. 

JOHN: Yes. I've been brushing up on my Corrin, and I'm definitely picking up Byleth pretty well. 

MARK: Oh, no. I'm going to get so stale by the time we meet. You're going to crush me. 

JOHN: [LAUGHS] Well, we'll see each other in two weeks or so, right? 

MARK: Oh, that's right. It won't be long. But let's go ahead and talk about a great interview with Humanitec. We're talking with Chris and Domile more about the general landscape of CI/CD and what they're doing to kind of help shake things up. 

JOHN: Yeah. And it's really good to see that there are companies that really are-- because Dev Ops is very complex. CI/CD-- very complex. And there's a lot of principles that you find is like common trends, but to know that they're tackling the most common issues in the pipeline for a lot of users and developers and companies is really interesting. 

MARK: Yep. And it'll definitely be a great conversation with them. And after that, we'll get into a fun little question revolving around keeping secrets and what the best way to do that is, because I know I've committed my fair share of API keys into source repositories. So maybe there's a solution for that. I get a feeling that John will be able to tell us more. 

JOHN: Yeah, I'll tell you from a recent experience that I've had, a recent event. And also, I've also committed the same crime several times when I first joined Google. 

MARK: Good to see that we're not the only ones. Well, we'll get into that after the interview. But before we do any of that, we've got our cool things of the week. 

[MUSIC PLAYING] 

So John, why don't you take it first? 

JOHN: As a past C++ developer, it's really great to know that we currently are showing C++ developers love with new client libraries. And these are currently in open source right now. And you can find that we are supporting a lot of our most commonly used APIs, such as Cloud Storage, Bigtable, and Spanner, which is currently in beta. So if you're interested, check out the link. And you should be able to find a lot of goodies there. 

MARK: It's great to see, because I think everyone is on board with some of these newer languages and these more kind of web-friendly languages. It's like, hey, there's actually a lot of great topics and conversations out there around these-- I would call them older languages-- but these more robust ones that really still do need the same support. And just-- I think it was late last year, we had a conversation with Ray on Java and what does that look like in the cloud. So that was definitely a cool episode to check out. 

JOHN: What I'm really excited, especially coming from Ray as well, knowing that Java's slowly becoming more and more adapted, and we'll see more client libraries for that, is between Java and C++ as a personal hobby of mine and gaming, it's great to know that we're slowly seeing more and more support for those type of developers. 

MARK: Absolutely. And in fact, one of the coolest things I saw on Twitter just the other day was them announcing the gameplay reveal for Baldur's Gate III, which I'm sure-- I mean, it's been like 20 years since the original ones. And so it's cool to think about how the space for games has changed, but how that can actually take the new cloud technologies and how that might actually kind of influence their development style. I'm super, super interested to check that out. 

JOHN: Yeah, it should be just as anticipated. I don't know if you've had a movie series or something that you used to really follow as a kid that, now that you're an adult now, came out like 12 to 15 years later. And there are even movies right now they're doing remakes that are kind of awesome. So if you're like a big media fanatic-- whether it be games, whether it be movies-- and you know how the anticipation feels, look forward to this. 

MARK: Yeah, I think it's super exciting. But I will say that my official cool thing for this week is going to be the GCP versus Firebase short series that one of our fellow colleagues, Alexi, is putting out. I think the second one just came out. And he's doing a mix of medium posts and YouTube videos. 

And I think it's really cool to hear more about placing Firebase in the cloud ecosystem and understanding that. We had a conversation-- it was Episode 180-- with Jen Person way back in summer of last year, I think. And we talked more about what Firebase is and how people can start using it. And I think that it's still very confusing sometimes for people who either came in with Firebase or came in with Cloud to try and understand what the other parts does, because there does seem to be some overlap. So I highly, highly recommend people check out this series and get that better understanding of where these play, and what you can do, and how they kind of both enable you to build really cool apps. 

JOHN: I can definitely speak from experience, because I have built applications that Firebase offered way better authentication, for example-- well, easier authentication. And then for hosting it, GCP was definitely up to par and up to the task. 

So I can say that I've actually listened to that episode. And that's funny because I'm actually host. But I definitely drew a lot of inspiration from it to start thinking about going cross-product using Firebase, GCP in order to build really cool things. So if you're really interested, check out the episode, of course. And of course, check out the video series. 

MARK: Absolutely. 

JOHN: And I guess I'll wrap things up for cool things of the week. We're launching a new GCP region in Seoul, which is great because now we're launching a new data center there. And we're going to see more customers. And that can be from your enterprise customers to your gaming customers. And it's just going to be great that we will have availability in kind of that dead zone that we were missing. 

MARK: Yeah, I think-- I mean, the more regions, the better, right? And kind of having that global opportunity for customers who are looking at, well, how do I serve my content faster for users in this area? The more regions, the better. 

JOHN: Right. And that high availability is going to be awesome. 

MARK: Awesome. Well, I think it's about time for us to jump into our interview. So let's welcome Humanitec in here and get started talking to them. 

[MUSIC PLAYING] 

JOHN: Hi. And on this episode of the podcast, we're joined by Domile Janenaite and Chris Stevenson. Hey, how are you doing? 

CHRIS: Very well. 

DOMILE: Very well, thank you. 

MARK: Feel free to tell us who you are and what you do. 

DOMILE: So I'll start. I'm Domi, and I'm a product manager at Humanitec. 

CHRIS: My name's Chris. I am the VP of product here at Humanitec. 

JOHN: And I guess the question is, what is Humanitec? 

CHRIS: We're a startup based out of Berlin in Germany. Our product is continuous delivery as a service. What we do is we try and solve the problem of developers wanting to write code to solve the real business problems, but they tend to spend a lot of time getting stuck figuring out how to get the code actually running in various development environments. 

DOMILE: So what our platform aim is to stop developers from getting bogged down into getting their code running in cloud environments. So this means automating deployments, allowing developers to spin up and tear down environments on demand. The way we do it is that we pick up assets at the end of your CI pipeline and deploy them to your cluster, while provisioning things as databases-- DNS names, message cues-- as needed. And all of that can be managed through a single API or a user interface. 

CHRIS: So our goal is basically to allow developers to focus on the real engineering problems, rather than wasting time figuring out how to get the code into these various environments. 

MARK: Yeah. I think it's a topic that a lot of people have been listening to for a long time, like CICD and the general, how do you push code out there? How do you actually deliver it? It's something a lot of companies have been tackling. 

I'm interested to hear about Humanitec's take on it, and why you decided to build it as a service. 

CHRIS: So we've been, as a group of people, in the software industry for a while. I mean, my background is I've been building developer tools, developer experience, and things almost for the last 10 years. And we see that there are common problems that exist for some engineers, especially when you come to building cloud native applications. 

As things are standardizing, for example, on Kubernetes, a lot of people are coming across the same problems. And these problems are the same across multiple companies. So it kind of made sense to think about how to solve it for ourselves. But then if we're solving it for ourselves, can we also solve it for wider set of companies? 

DOMILE: I also can add from my perspective. So I myself worked previously in a tech due diligence company. And I had a chance to work with over 200 teams over in the whole Europe, analyzing their processes and workflows. And this is where I got fascinated with how many teams actually deal with cloud deployments related problems and how difficult it is for many of them to actually do this. 

So at the time, I was lucky to be able to join Humanitec, which was as Chris mentioned, basically a bunch of people that are passionate about the same problems. So I think we all have a different perspective when it comes to this. And for example, for me, coming from a business background, it is especially interesting and important to build a tool that really optimizes that performance of development teams, and allows development teams to focus on future development and just be more performant. 

JOHN: Just to continue on the segue of cloud native development, I could imagine that most teams-- you've been dealing with numerous teams. There has to be main challenges that they're facing, all of them. What would you identify as those main challenges that most teams are facing? 

CHRIS: In our experience, the main thing that people are not being able to get hold of is fundamentally the promise of cloud based development. So cloud native development is supposed to be the golden land of being able to spin up environments on demand, having flexible resources, being able to deploy easily, and so on, especially if you compare it back to the older school, dealing with VMs and maybe even dealing with actual, physical infrastructure. But in practice, a lot companies don't have the skill set. And they don't have the processes in place, or the time to train people up in these kind of things, sometimes. So they end up lost in the complexity that cloud native development gives you. 

I mean for example, if you look, CNCF lists over 1,200 tools which are supposed to support cloud native development. And so navigating that complexity is kind of hard. 

DOMILE: Yep. I could also, again, add up more from developer's perspective because I daily talk to developers from different places in the world. And the pattern there is a lot of them mentioned that, especially in the cloud native development, it's really hard for them to easily track what is running where, and who deployed when, what configuration when a bug was introduced, and so on. So that is also one of the challenges that a single developer is facing day to day. 

Another one that I could name would be basically, as Chris mentioned, when you have so many tools. And the developers and the teams have to deal often with multiple tools, in order to deploy their code. They actually experience really large cognitive load. And that essentially prevents you from the creativity and innovation, and from focusing on the real engineering problems. 

MARK: Right. I mean, and that's kind of the promise behind this whole central idea of being able to speed up development. But it sounds like this reflects the state of DevOps as a whole. It's a lot of tools. It's a lot of complexity. It's a lot of promise. But maybe there's some serious friction in being able to actually adopt that. 

DOMILE: Right. And I think, especially if we think about DevOps as a concept-- we talked, the 500 teams, so far. And what we are seeing is a tendency of DevOps practice as a concept being still implemented by DevOps engineers. However, it was never meant to be a role. It was always meant to be a set of practices. So therefore, we had cases when operations teams were just renamed into DevOps, and were told to talk to the engineers. 

So with basically an ideal case scenario, the ops would be automated. And with the ops engineer role, I would say, would transform into something like DevOps advocate that is just helping the teams to be more performant, rather than day-to-day spinning up environments and configuring databases and so on, the things that can easily be automated. 

However, if we look at it currently, I think we are still quite far from it. And one of the main reasons, I would say, is that, as Chris mentioned, before, as well, is that teams have a lot of tools, and in combination, a lot of waste to deal with solving the problems that they have. Therefore, they end up in this [INAUDIBLE] scripting and manual work, which kind of leads to having the DevOps role. 

So we end up having this DevOps engineer that is basically reactive and creates a key man dependency, which obviously, we are trying to overcome with our solution, and basically create the time for DevOps to really focus on making the teams more performant, while automating those tasks for them. 

MARK: So that was awesome. Just hearing that so many people are working together to make DevOps, I imagine that Humanitec is solving these issues. So I'm curious to know how you're doing so. 

CHRIS: Sure. If you look at it from the promise of cloud that you mentioned earlier, we really want teams to be able to leverage cloud in the way that it was intended. What the Humanitec platform allows development teams to do is to easily run deployments and so on, but also manage environment. So that could be your dev, your staging environments. 

But you can also spin up feature environments. Maybe you need to spin up testing environments. And you could do that, along with all of the associated resources that you need around that. So that might be provisioning databases. You may want a database per environment. You might be setting up some message to ques, configuring DNS that you can actually access your service and actually if it's working. These are all things which you can just plug into the platform, and it will manage for you. So you can focus on writing your code, not figuring out how to get your code to run. 

DOMILE: Yeah. And I would say also, again, from the developers' experience of this, as I mentioned, we run a lot of user tests. And because we need to reduce that cognitive load on developers-- and currently we are experiencing quite a large cognitive load due to the tools we have to deal with-- we are really aiming to simplify the UI and make it accessible to anyone on the team, so that anyone from junior developer to senior developer, QA, or product manager is actually able to go and deploy. 

And as well as a developer on Humanitec platform, you're basically able to easily see what is running where, who deployed when, by who a certain configuration bug was introduced. And therefore, you're able to roll back or clone to a new fresh environment, where you can work without affecting your teammates 

MARK: Yeah. I mean, it sounds like a big part of it is that ease of use and that ability to streamline the process. I mean, we've talked about this and the motto of get back to coding, and let people focus on the important part. It's a huge driver of what's important to DevOps. And obviously, Humanitec it built to try and support that. 

You know, you mentioned that it's going to have to push out. And it's going to have to handle a lot of different scenarios, which I imagine means a ton of different integrations. Can you talk a little bit more about how you actually built the Humanitec platform? 

CHRIS: Sure. So as supporting cloud native development, our platform is cloud native. So we're running on managed Kubernetes, in this case, GKE, and using services like Google Cloud SQL for databases, and so on. 

I think the integration piece is an interesting one. We had to really think about at what level we try and do the integrations. We actually started out trying to handle the entire end-to-end flow, write from source code repository through to landing up in production. But that removes the ability for developers to choose [INAUDIBLE] tools. And in general, people want to have some control over how they're working and what they're dealing with. 

So we've pared this back. And we now integrate, for example, at the end of a CI pipeline. So we are basically the last step in the CI pipeline, then kicking off the [INAUDIBLE] delivery parts. And then what we do down the line is we have a few integrations with the standard cloud providers and so on. But we really wanted to make sure we have extensible points that people can write their own integration. 

So if you have an exotic type of database that you want to be provisioning for every environment, then you shouldn't have to wait for us to figure out how to integrate it. You can actually come along and integrate that yourself, and get going straight away. 

JOHN: So I imagine with making these design choices to make integrations very easily for our Humanitec users, I assume that there had to be challenges along the way that you came across when actually building the platform. So do you mind sharing that with us? 

CHRIS: Sure. So I think a really interesting challenge we had is we wanted to get going quickly. So we thought oh, well, why don't we provide integration at GitHub? That's the most widely used source control repository, used both open sourced software and, of course, by companies. And so we tied ourselves pretty tightly to that. And that got us going really fast. 

But now we're really hitting this problem of not everyone uses GitHub. Not everybody necessarily wants to share everything in their GitHub organization with the development platform. So we've had to take a step back and really look at our integrations and how we fit together and actually fact that out. 

So coming up very soon, we'll be allowing people to connect with the authentication provider of their choice, be it Google, or username password type integration. And you can optionally connect to GitHub, but optionally connect to whatever else you're using, maybe a Bitbucket Pipeline or a CircleCI Pipeline, whatever you want. 

DOMILE: Yeah. And I think, again, from UX user experience perspective, a joke in the industry is that developers don't deserve a good UI, which I believe is not true. And part of the challenge, obviously, is for us to really make that user interface as simple as possible. So therefore, we run the daily tests. And we have to do it very fast, pretty much kick out prototypes off new and upcoming features every week. 

MARK: Yeah. I'm sure that throughout the process-- and you know GitHub being a great example. Because it's so easy to think, yeah, everyone wants to use GitHub. It's obviously very popular. But then running into that challenge and that surprise moment, where you're like, oh, wait. Well, maybe not everybody wants to use GitHub. 

Were there any other moments like that, where you just said, this is new, and we kind of have to shift our direction to meet users where we didn't think they were going to be? 

CHRIS: Definitely. There have been quite a few of these. And one of the interesting things actually was our initial idea was that people would very much want to connect to their own cloud resources. So imagine you have your own GKE instance. And you wanted to play into your own GKE instance in your own Google Cloud project. 

Then in practice, it turns out a lot of companies are like, well, you know its-- and [INAUDIBLE] is like, Humanitec could actually deal with this whole actually hosting our [INAUDIBLE] environments. That means we don't need to worry about it. You guys can figure out how to maintain it. You guys can do any of the other stuff down the line. 

So that was actually very interesting finding. It's not what we expected. So now we are able to provide these hosted managed environments for developers, or for companies, so that they don't have to worry about managing those things themselves. And so that was a very interesting feedback we got from the market. 

MARK: Yeah. And it sounds like-- I think everyone deserves a good UI. And I'm sure that UX, and in general, just the ability to use this platform was kind of key, going throughout the process of designing it. Right? 

CHRIS: The UI part is very interesting. Because developers are not known for their love of UIs. Everyone assumes that developers want to be sitting at a CLI. But again, when we do user tests with real developers, and we actually talk to people in the real world, it's a case of what is the best thing for the job? 

So in some cases, you want to be running something online. Sometimes, you want to be writing some kind of integration and actually hitting an API. And in other cases, you actually-- it's just easier to see stuff in a UI and make those decisions, especially when you're doing things like analysis, or you want to look at an overview of something. It's just much easier to have that thing structured with a good UX and a nice, clear separation of concerns, so you really understand what you're looking at or what time. 

This is something which we are pleasantly surprised about the industry. People tend to say, oh, actually, we like the UI. It looks really cool. It seems really clear, which is great. 

But on the flip side, when people first hear about it, it's like, oh, you have a UI? Where's your CLI? How do we integrate with your API? 

So I think there's some learning across the industry. But I think you really need to meet people where they are. So that's on the command line, or at the API, or at the UI. 

JOHN: I don't know about Domile saying that we don't deserve good UI. I prefer a really good UI. Like Chris mentioned, I'd like to see my data as it lies, right there on a page. I do come from a standard terminal output, which I currently enjoy. Because I enjoy making beautiful Ascii images. 

Continuing on, I imagine that Humanitec offers a great suite of continuous delivery tools. And I'm interested in what the landscape of that really looks like to many of your users. 

CHRIS: Sure. I think if we look at the continuous delivery to landscape, overall, as Domi mentioned before, we've been talking to a huge number of teams across the industry. And I think there's three segments to this landscape. 

So you've got your small companies who are probably starting out using some kind of platforms at the surface. Maybe they're starting out on something like Heroku. They can get started really quickly. They can get going really fast. 

As they grow in scale, they tend to hit the sides. Maybe they don't have the integrations they need. Maybe it gets a bit expensive as they're scaling up their services. 

And then at the other end of the spectrum, you've got the likes of your big tech companies, your Airbnbs, your Googles, for example, who've invested a huge amount in actually building their own internal platforms. So they often have a platform team, who are looking after the developer experience. And so in that case, all of the CI/CD, all of the integration of testing and deploying to various bits of instruction is all handled by the platform, or by the platform team. So the in-house developers and in-house engineers have to do very little, other than focus on the code that they're writing. 

And unfortunately, most people are not very, very small and very, very big. Most people lie somewhere in the middle. And this is, I guess, where the complexity lies. So most people are trying-- at least the teams we talked to are aspiring for a CD process, one that actually takes your code, deploys it to environments, and runs you all the way through, in a hands off manner. 

They're kind of limited by the fact that they want to choose all of these cool tools. They choose in these cool texts. And they end up writing scripts to join them together. So a very common thing we see is a great set of tools. And they're all held together by scripts, which are pretty brittle. And you got problems, like you add a service to your application. And you need to update all of the scripts to integrate between your CI pipeline and actually getting to your cluster. 

Or maybe, you want to add a new environment. And then you have to go and figure out how to provision the additional databases you need. You're going to have to figure out how to configure your message queue to work, and not send messages across environments to the wrong ones, and so on. 

The dream is CD for these companies. But the practice is kind of brittle and error prone, and requires a lot of work from the person with the DevOps hat on, debugging pipelines, and fixing scripts, and so on. I mean, there is a sort of silver lining. There's a growing segment of tools that are trying to really help with that. So obviously, apart from Humanitec, there are some other companies. 

One good example would be Weaveworks, who are promoting an interesting approach, known as GitOps, which uses a Git repository to act as the basis for automatically deploying things through to your various environments. And there's also companies like Harness, who are also trying to tackle the space. I think this is very early stage. And I think, in practice, all of these tools are still pretty complex, and still require quite a lot of very low level understanding of what's going on. 

Although, they do help. And they protect you a bit from this kind of scripting problem. Fundamentally, you still need some people who are well versed in your infrastructure, and well versed in the kind of details of your pipelines, in order to really put these tools to work. 

MARK: Yeah. I can imagine, for a small team, it's pretty desirable to want to have something that just works out of the box, something that you can kind of put together. Because usually, you are very focused on what you're writing and what you're building, and a lot less on how it actually gets put together. 

For that sweet spot-- which it sounds like is the medium sized, not the huge megacorps, but also, not the small startups. There's got to be this huge range, like you said, of focuses they're on. What does that team look like? I mean, because some of these smaller or medium sized developers have multiple teams. And not all of them are using the same tooling. 

So what is the landscape of tools that you just mentioned? How does that integrate with all these different teams, and what their desires, and what their individual teams are looking to accomplish? 

DOMILE: I think, especially if we look at the teams that would use our platform as a service, I would say it could be anyone from any industry, really. Currently, we have teams from NGOs, HR tech, automotive, you name it. And as Chris mentioned, in terms of the team size, would be a more so, I would say, anyone from 10 developers to over 100 developers. In terms of the company type, it would be companies probably that don't have software engineering as a core competency, but our really forward looking and building cloud native apps. 

So maybe just to name a few examples, we are working with a startup in Berlin that have quite manual deployment processes, and need quite a few weeks to set up environments. And therefore, once QA have blocked the staging environment of payment integration system testing, basically the whole team velocity just went down. So at this stage, this is where a platform as ours makes a lot of sense. And currently, this team is in the process of onboarding. 

Another example of a team that potentially could use a platform as Humanitec is-- and that is another example of a team that is using our platform as NGO portfolio management app. And it is made up of multiple microservices. And they distribute a team, which in this case, again, makes a lot of sense for them, since they are able to easily see what is running where, who deployed when, and so on. 

JOHN: As a follow up question, I'm kind of curious. Because you're mentioning that your sweet spot is roughly around the mid-range sized teams. How in-depth is your UX team that goes in and does research on how these users in your teams are using your tools? How involved is the results of your research in building such a platform like Humanitec? I'm kind of curious. 

CHRIS: So in terms of the research side of things? 

JOHN: Yes. 

CHRIS: Yeah. So we're currently trying to tackle our UX research in the form of getting at least five or six user tests a week. And those are people from all industries, different sized companies, be it small startups to the big megacorps, as well. And we have quite a thorough process, where we run them through-- it's not really a simulator. They actually deploy an app using the service, set it all up, and we give them a series of tasks to do. 

That actually introduces a lot of inputs. So you get the standard, this button is in the wrong place, this button's the wrong color, nobody can find this feature. But the conversations afterwards are actually super interesting. So people will then discuss their particular use case. They will often share with us problems that they're having within their own organizations. And we can then really understand how this thing fits together in the real world, and see what the real struggles are of small teams, or big teams. 

And actually, within this mid-segment, the struggles are relatively similar. So it is these problems of maintaining scripts. It is the problem of having the one person who knows how to use kubectl to deploy things to a Kubernetes cluster. And when they're on holiday, nobody can deploy anything. These things are real problems across the industry, and at a reasonably wide range of team sizes. 

DOMILE: Yeah. I would say also in addition to what Chris mentioned, obviously, we run a lot of developer user tests. But also, we are looking a lot from a perspective of a manager, or someone who is managing infrastructure. So we also talk to a lot of DevOps people. And these industry experts can really name the problems that they see within the whole team, rather than individual developer. 

MARK: Yeah. We're just about out of time. But before we wrap up, I would love to know if there's anything that you would like people to hear as takeaways, or if there's anything else we missed that you want to talk about. 

CHRIS: For me, the takeaway is that the DevOps practices that are out there, they work. They've been proven. And the challenge that people have of trying to achieve those processes actually is possible. 

You can go ahead. Even if you're a small team, if you have the right tooling and you don't get lost in the complexity, it is very possible to run a kind of you build it, you run it style DevOps system within your own engineering team. And so we want to really get the message out there that it is possible. Come talk to us. We can help you out with these sort of things. 

But in all seriousness, across the industry, DevOps is achievable. It's not something which you have to be scared of or be worried about in your business. 

DOMILE: Yeah. I myself hear a lot in user tests, developers saying, oh, no. I don't run deployments. I leave it to the people that like doing that, which is our DevOps. So I mean, we truly believe, I think, that deployments can be fun. And you just need to find the right tool to do it. 

MARK: Yeah. I kind of like that deployments can be fun. And I think that we should all maybe embrace that idea. And ideally, they don't have to be this scary, what's going to happen when I click this button, or what's going to happen when I kick off this workflow? So it's really cool to see platforms like Humanitec, that are really involved in making this a lot easier. 

Well, Chris and Domi, thank you so much for coming in and giving us a lot more information about what Humanitec attack does. Always interesting to hear. 

DOMILE: Thank you. 

CHRIS: Yeah. Thank you very much. 

MARK: Thank you so much to Chris and Domile for coming in and talking to us. Like I said, it was really interesting to hear more about what the current landscape is. And I thought they did a great job of identifying. 

You know, there really are a ton of different types of teams. And as much as DevOps and the whole idea of promises of these cool ways to integrate with cloud, it's a lot of work. And some of the pieces really still are very-- I think they used the word brittle scripts. Right? And that kind of does resonate with a lot of people, I'm sure, in terms of how they've put together their current pipelines. 

JOHN: Right. And it's great to know that they're actually trying to provide a platform that is exemplary. It helps users and developers and companies get through that pipeline a little bit more smoothly. You know? 

MARK: Yeah. I think there's a lot of value there. And I think they're definitely worth checking out, for people who are interested in learning more about that space. But also, just how do we make the cloud more frictionless, as a whole? Right? 

JOHN: Right. 

MARK: The more efforts we put there, the better. Because everyone benefits from that. 

JOHN: Right. 

MARK: So great chance to chat with them. Well, let's go on to our question of the week. 

JOHN: Ah, yeah. 

[MUSIC PLAYING] 

MARK: So my question is-- and again, maybe, possibly having potentially done this before myself, how do I stop myself from myself committing secrets into a repo? It's pretty easy to do. I don't think I need to tell anyone how to do it. But how do I stop myself from doing it? 

[LAUGHTER] 

JOHN: So I'll give you a little back story. So I actually committed it myself, and got that very scary email saying that I've leaked my API key. But the same happened for a group of students that I was working with at a hackathon in Syracuse, New York this past weekend. 

And the hackathon was awesome. They were using GCP for the first time. And some of these APIs were doing web requests, and needed a hard coded static web [INAUDIBLE] key exposed in their code. 

And they were sharing the code amongst themselves. And they were committing it to their repos. And they were getting off that message. So a lot of them came running up to our table in fear that they may have exposed their API key. Someone's going to use it. And they're going to use that API key to do a whole bunch of requests and ruin their billing. Because they only had a certain allotted to use for the hackathon. 

So the short answer is we're going to talk about Secrets Manager. And we touched on Secrets Manager in last week's episode with Katie McLaughlin, where she mentioned that she was building a web application. And Secrets Manager was one of those components. 

You know, as a definition Secrets Manager allows you to store, manage, and access secrets as blobs or text strings, which is awesome. Because that's the typical format when you're exposing an API key in the repo, like we have in the past. And the great thing is that it's great for storing any type of configuration information, such as passwords, API keys, TLS certifications. 

And there's a big difference between Secrets Manager and Cloud KMS. I'll throw a link in for both. KMS is a little bit more about encryption and decryption of sensitive data. As opposed, Secrets Manager is more for keys and passwords, and has a bunch of features that you can follow and look into it. But typically, most users, when they expose an API key, they'll have it rotated. 

And you know, that is one of the features that you can actually do with Secret's Manager, which is awesome. But although it can't do it automatically, the fact that it's still an available feature is really awesome. So feel free to check out the show notes. And give Secret's Manager a spin. And actually, I encourage you to use Secret's Manager. Because don't make the same mistake Mark and I did. 

MARK: It's certainly a step up from committing a metadata file that has the key in there. And being able to access secrets through an API definitely makes a lot of sense for scaled out production services. So very, very cool to hear more about it. 

Well, John, it looks like we're getting pretty close to the end of the episode, here. Are you going to be doing any traveling? You have any cool projects you're working on? 

JOHN: Yeah. So I'm going to be at GDC in mid March. And GDC is always a wonderful event, where we get to meet game developers, see what's new in game development and game tech. And sometimes they do announcements. Like last year, they did Stadia's announcement. 

I'll be there. I'll be a meeting with a bunch of developers, interacting with a few customers. And I will be working at the Open Match in Google Cloud Game Server's booth, which should be really fun. I'm currently working on Open Match. And we've just released 0.9 and added a few additional features, updated the code base. So it's a little bit easier for a developer community to get started with it. 

I'll be there chatting with folks. You know, multiplayer games are a big thing in the market right now. And I can't imagine playing a lot of games by myself, today. So if you're interested, and you're going to be at GDC, come check me out. 

MARK: Yeah. It sounds like it'll be a blast. 

JOHN: For sure. It was definitely a blast last year. So Mark, what are you going to be up to? 

MARK: Well, like you said earlier, I've been doing a lot of traveling with the New York, recently. And then I've got quite a few more trips coming up in the next few weeks. So I will be up around and all around the United States, but mostly working on creating some videos. 

I've got some very, very cool videos that just came out last week. And looking forward on creating a few more customer interviews that are really interesting to sit down with them and talk about how they're using the cloud, and hopefully give us some really cool lessons about what they built, how they built it, and what they factored into that, so other people can take inspiration from that. 

So stay tuned, as always, to the Google Cloud YouTube channel, where I post all those videos. And that's probably where I'll probably be spending most of my time. 

JOHN: Awesome. Well, if our listeners haven't had the pleasure meeting Mark, you get to see him, I guess, virtually online. And he's quite the personality. He's really awesome. And-- 

[LAUGHTER] 

And of course, if that's not the reason you're stopping by to check out the video series, just stop by and learn something new. 

MARK: There's plenty of great video content out there. And being described as quite a personality is quite a generous [INAUDIBLE]. 

[LAUGHTER] 

Well, John, I think that just about does it. Thank you all for listening. And we will see you all next week. 

[MUSIC PLAYING]