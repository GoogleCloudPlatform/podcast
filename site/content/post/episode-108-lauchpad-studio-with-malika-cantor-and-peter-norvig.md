+++
audioDuration = "00:37:52"
audioFile = "Google.Cloud.Platform.Podcast.Episode.108.mp3"
audioSize = 54755729
categories = ["Launchpad Studio", "Machine Learning", "Startups", "Applied AI"]
date = "2018-01-10"
description = "Malika Cantor and Peter Norvig tell us about Launchpad Studio, a program for Applied Machine Learning Startups."
draft = false
episodeNumber = 108
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Launchpad Studio with Malika Cantor and Peter Norvig"
#image="images/post/iotcore.gif"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/EERvuE8oJ4J"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/7pgkss/episode_108_launchpad_studio_with_malika_cantor/"
+++

[Launchpad Studio]((https://developers.google.com/programs/launchpad/studio/)), a product development acceleration program focused on helping machine learning startups iterate quickly, fail fast, and collaborate on best practices. 

[Malika Cantor](https://twitter.com/malijeanne) and [Peter Norvig](http://norvig.com/) talk with [Mark](https://twitter.com/Neurotic) and [Melanie](https://twitter.com/nyghtowl) this week about how the Launchpad Studio program is helping startups overcome data, expertise and tooling barriers by providing access to talent and resources and building universal best practices. 
 
<!--more-->

##### About Malika Cantor

Malika is the Global Lead for Google Launchpad Studio. Launchpad is the acceleration engine of Google - running a number of accelerator programs focused on supporting the global startup ecosystem. Prior to joining Google, Malika was a co-founder and partner at Comet Labs, a venture capital firm and experimental research lab focused on investing and supporting applied AI startups. She has worked with founders for around 6 years, in London, Beijing, Singapore, Toronto, and Silicon Valley.

##### About Peter Norvig

Peter Norvig is a Director of Research at Google; previously he directed Google's core search algorithms group. He is a fellow and councilor of the Association for the Advancement of Artificial Intelligence and co-author, with Stuart Russell, of Artificial Intelligence: A Modern Approach, now the leading college text in the field. He was head of the Computational Sciences Division (now the Intelligent Systems Division) at NASA Ames Research Center.

##### Cool things of the week

- Introducing Preemptible GPUS: 50% off [blog](https://cloudplatform.googleblog.com/2018/01/introducing-preemptible-gpus-50-off.html)
- How We Implemented a Fully Serverless Recommender System Using GCP [blog](https://medium.com/@willian.fuks/how-we-implemented-a-fully-serverless-recommender-system-using-gcp-9c9fbbdc46cc)
- Awesome lists [repo](https://github.com/sindresorhus/awesome):
    - Awesome Google Cloud Platform [repo](https://github.com/GoogleCloudPlatform/awesome-google-cloud)
    - Awesome Kubernetes [repo](https://github.com/ramitsurana/awesome-kubernetes)
    - Awesome TensorFlow [repo](https://github.com/jtoy/awesome-tensorflow)
    - Awesome Firebase [repo](https://github.com/afonsopacifer/awesome-firebase)
    

##### Interview

- Launchpad Studio [site](https://developers.google.com/programs/launchpad/studio/)
- Verily [site](https://verily.com/)
- DeepMind [site](https://deepmind.com/)
- Cloud AI [site](https://cloud.google.com/products/machine-learning/)
    - Cloud Machine Leanring Engine [site](https://cloud.google.com/ml-engine/)
- TensorFlow [site](https://www.tensorflow.org/)
- Android Things [site](https://developer.android.com/things/index.html)

##### Question of the week

How does a startup get GCP credits?

- Google Cloud Platform Startup Program [site](https://cloud.google.com/developers/startups/)

##### CPU Vulnerability Links

- What Google Cloud, G Suite and Chrome customers need to know about the industry-wide CPU vulnerability [blog](https://blog.google/topics/google-cloud/what-google-cloud-g-suite-and-chrome-customers-need-know-about-industry-wide-cpu-vulnerability/)
- Google Security Blog, Today's CPU vulnerability: what you need to know [blog](https://security.googleblog.com/2018/01/todays-cpu-vulnerability-what-you-need.html)
- ProjectZero News and Updates [blog](https://googleprojectzero.blogspot.com/2018/01/reading-privileged-memory-with-side.html)


##### Where can you find us next?

San Francisco

{{< transcript "MARK: Hi, and welcome to episode 108 of the weekly Google Cloud Platform podcast. I'm Mark Mandel, and I'm here with my colleague, Melanie Warrick. How are you doing this morning, Melanie?" >}}

MELANIE: Happy new year, Mark. 

MARK: It's the beginning of the year, trying to get back into the groove of things. 

MELANIE: Trying to. Did you have a good holiday? 

MARK: I did. How was yours? 

MELANIE: It was good. It was good. It was low key, which was nice. 

MARK: Nice. So this week, we've got some friends of yours. 

MELANIE: Yeah, they're my friends. 

MARK: They're your friends. 

MELANIE: We hang out all the time. 

MARK: That's what I figured. 

MELANIE: At the pool. So yes, this week, we are going to be talking to Malika Cantor and Peter Norvig, and they're going to tell us all about Launch Pad Studio, which is basically a program that supports startups, especially machine learning startups. But before we get into the interview, we're going to, of course, start off with the cool things of the week, and, at the end, with the question of the week. And our question of the week is going to be about how, if you're a startup, how would you get credits to work on GCP? 

Before we get into the cool thing of the week, what we do want to do is briefly mention about vulnerabilities that have come out last week around our modern computers, and specifically these vulnerabilities are related to modern processors. And they impact things like your personal computer, your mobile devices, and the cloud. 

Now, there's a lot of content out there. There's many different links. And we'll definitely provide some of these on our web site, and we have some great information that our security group has done on a blog that we will provide around GCP and how they're working to support that. But the main things to understand is that Meltdown and Spectre are two vulnerabilities that you want to be aware of. You want to make sure you're updating your operating system. You want to make sure that you are updating all the things whenever you have the opportunity to on your phones, on your laptops, on whatever cloud services you're working with. And Mark, I think you wanted to touch on this briefly as well? 

MARK: Yeah, we're going to link to all the blog posts. We are not security experts. I think Melanie knows way more about this than I do. She can talk about it for ages. But most importantly, yeah, definitely upgrade all the things. One of the things that I'm just going to literally read off here for Google Cloud, so if you're reading Compute Engine, Kubernetes engine, data flow, data proc, there are some extra customer actions that are needed. Again, links are in the show notes. But definitely go through those, make sure you get those implemented as soon as you possibly can. 

MELANIE: All right. So check out the links, make sure you're up to speed on that, and let's talk about cool things of the week. 

MARK: Yeah, absolutely. So every time we seem to come on the podcast, we talk about GPUs getting cheaper, so why don't we talk about GPUs getting cheaper? So we're introducing preemptable GPUs, which is kind of neat. So if you ever used preemptable GCE instances, so instances that may die [? after ?] about 24 hours, but you get a very large deduction in price when you use them, you're now able to use GTPU instances on those, now beta and available for GPUs on preemptable instances. 

We'll have a link in the show notes as well to the blog post, which links to the documentation on how you can do them. But basically, yeah, if you want to do batch type processing for GPUs and you want it to be a lot cheaper to do it, especially if you're using preemptable instances already, this is a really nice thing for you. 

MELANIE: Yes, cheaper is always better. All right, and the other cool thing of the week is that we have a couple of awesome lists that we wanted to share with everybody. We've got some links we'll put into the website as always. But specifically, if you've played around with GitHub and you've seen the awesome and awesome list of awesomeness, there are some awesome lists for TensorFlow. There are awesome lists for Kubernetes. 

There's awesome lists for GCP, Google Cloud Platform itself. And the awesome lists are really using contributors contributing what they think are some really great training resources, as well as real world application, samples, libraries, analytics. They put out there what they think are good tools and resources to have access to and consolidate that down into a list. And I think, Mark, you said you found in here something that you guys had built. 

MARK: Yeah, I didn't realize it. I was just looking at this now. There's a GRPC sample that myself, Sandeep, Danesh, and a couple of other developer advocates also did some work on where we took the old game sign and with the multi-colors and made it playable over the internet using to see and Kubernetes and that's on the list, which I feel a little proud. It's quite nice. 

MELANIE: You should feel really good about yourself. 

MARK: That's really good. Cool. And finally, is a really nice cool thing of the week that is coming from the community, which is really cool. I'm going to butcher your name. I'm really sorry. 

I'm going to go with Bill Fuks, maybe. A data scientist at Dafiti Group wrote a Medium post called "How We Implemented a Fully Serverless Recommender System Using GCP." This is a really cool article. And they use App Engine, Be Query, Google Cloud Storage, Dataproduct, Datastore, Dataflow to build the recommendation engine, but they also talk through the recommendation algorithm, which I love, is called dimsum-- I don't know why, but that's fantastic-- basically to build collaborative filtering recommendation engine, which is a really good read. You should totally check it out. 

MELANIE: Nice. All right. Well now that we know what are cool things of the week are, we going to go ahead and jump into the main content. 

So we are excited that we have with us Malika Cantor, who is the global lead of Launchpad Studio, and Peter Norvig who is the research director of machine learning at Google. So before we get started and to talking about Launchpad Studio, we want to talk a little bit about your background. So please introduce yourself a little more. 

MALIKA: Yeah, so my name is Malika Cantor. And as you mentioned, I'm the global lead at Launchpad Studio. Launchpad sits under developer relations at Google. We are basically the accelerator engine of Google. So we run different accelerator initiatives focused on supporting various start up ecosystems across the world. And Studio is focused on supporting specifically applied AI machine learning companies globally. 

MELANIE: Thanks. And Peter, we don't really know who you are. So do you mind telling us a little about yourself? 

PETER: Hi, I'm Peter Norvig. I'm a director of research here at Google. I've been at Google since 2001. 

The company was a little bit smaller then. And been focusing on machine learning for a long time, working on various tools and applications. And about a year ago started getting involved with Launchpad to help others learn how to use those tools. 

MELANIE: And you did write the canonical book on AI that most people tend to look back to with Stuart Russell. 

PETER: That's right. So I'm in the dotcom domain now, but I've had all the top levels. I was in dot edu and was professor for a while. Then I was in dot gov and ran computer science at NASA. And along the way wrote a textbook and got involved a variety of other project. 

MELANIE: Got a little bit of background there. I know Malika, we're talking about it too, that you've had some great experiences around the VC space as well as-- especially in China. And we want to get into that a little further later. 

But first, let's talk a little bit about Launchpad Studio. So you were explaining an overview of it, but what led to this project? What inspired you guys to get going with it? 

MALIKA: Sure. So as you mentioned, I was working in venture capital, investing in applied AI, machine learning, and robotics companies for a little while. And one of the things I realized was that a lot of the startups didn't really have the tools that they needed to be successful. 

And so one of my thoughts was well, where can I go and what can I do to actually make a difference. And this was about six months ago. I started, like Peter, getting involved with a Launchpad team and saw a great opportunity to build a program that would actually allow us to gather more insights on what startups working on applied machine learning in different industries actually needed, and for us to then go back to Google and other potential large tech companies and inform them on what were the tools that these startups needed to actually implement things at scale and grow and be successful. 

So that was sort of why I got involved. And very early on we started talking with Peter about his interest in again, gathering these insights, almost like developing a lab where we were working with great companies, trying different things with them, bringing them amazing mentors, and then figuring out if there were any sort of learnings across these different companies and industries that would then indicate that there was an opportunity to build a tool on the Google side. And so this could be an API, this could be a new type of service that would then have impacts across the startup ecosystem and everywhere in the world and across industries. 

MELANIE: And the program itself, it's a six month incubator program to bring in startups. Is that right? 

MALIKA: Effectively, yes. So it's a six month program. So once we decided that we basically wanted to develop all of these insights, we started thinking started from first principles how it would make sense to set it up. And we decided together to focus on one specific industry vertical at a time to allow us to really go deep and understand what was going on there and really gather really solid insights. 

So right now, we're focused on the applications of AI machine learning and health care and biotech. So we basically onboard companies on a rolling basis that are focused on this vertical. We already have four companies that we've been working with for a couple of months. And checking in with them every couple of weeks. They come in and work with us every few months. 

And we'll be onboarding new companies actually just in two weeks. We have a big next event. And so they come in, they meet with a lot of different product teams at Google, but also mentors outside. And then in this whole process, we're basically gathering information about some of their challenges. 

So for instance, I've been using TensorFlow, but I just can't figure out how to scale up this part of my infrastructure. Or I have this data set, but especially in the health space, the disease I'm looking at only allows me to have quite a limited data set. How can I amplify and augment that data set to actually use some of the models that are best used in the machine space? A lot of these types of questions were already starting to see. And I'd love to talk more about some of the other overarching challenges that we're already starting to identify. 

MARK: So you're actually talking about that. In the beginning you said there are these tools that are missing. As those the tools that are missing for those sort of problems that people are trying to solve? Is that kind of the gist? 

MALIKA: Yeah, and I might also let Peter jump in here. I think all of this is very much a hypothesis. And maybe a good analogy is we were thinking lean startup methodologies. We've been accustomed to hearing this term. And we are thinking about it with machine learning. 

And this is something I started seeing already in my VC days is does it really work? Can you fail fast? Can you pivot as a company that's leveraging machine learning? And our general sort of understanding was well, no. 

Actually we don't really think that it's possible. And it's because the tools are lacking. There are some tools like TensorFlow is incredible tool, GCP. We have a lot of other ones out there, and other people are building great tools to, but it's still extremely difficult as a company leveraging these new technologies to do what we think startups should be able to do. And so through Studio our hope is to really try to understand what are the limitations of the tools that are already on the market which are quite limited to be honest, and then inform what are tools that we should be building to hopefully make it easier and easier for startups to pivot and to fail fast in the machine learning space. 

PETER: So I think its a combination of the tools and the best practices and the knowledge and experience. So I came to this, I've been working internally with teams who a large percentage of the team have PhDs in machine learning. And so they had some background and intuition about what to build, but it was still really hard. And now we want to say, well, not everybody has that luxury of being able to have a bunch of experts in machine learning on your team. 

Maybe you're in your domain, whether its health care or energy or transportation or whatever your company is doing, and you mostly are experts in that. And they don't have the background that we had access to. But you have an idea that you have some data. You want to do something useful with that data, and you want to produce a product. How can we do that? 

And some of it is having the right tool. But some of it is just knowing what the whole process is of how you go about starting from the raw data or even how do you go about collecting data if you don't have any yet, and building the whole pipeline and evolving that and keeping going. And we just don't have experience with that. 

We've done a lot of one by ones. But you know if you look at the history of software engineering, we've been figuring out how to build software for 50 years. And we've only been trying to figure out how to build a machine learning system for a small number of years. So understanding how all that works is the key challenge now. 

MELANIE: You've had the resources finally to be able to experiment with building out this machine learning. But barriers I know were definitely people. 

PETER: Yeah. So you see there has been this big explosion in the last couple of years. And I think that's a couple of things coming together. A lot of it, as you say, has to do with the resources that now more and more data is online, that is the internet is everywhere, and data is being captured in digital form. So that's available. 

Far greater computing power, that wasn't available in the past. Be able to do things that you couldn't try before. And just I think one success builds on another, that if somebody proved they can do something, then somebody else says, well, that worked for them. I think I can do it now too. 

MELANIE: Of the four companies that you're working with currently, what are some of the tools that they are using, and then also some of the tooling that you both think could definitely-- we're talking on it. But anything specific that's standing out that you think could be useful. 

MALIKA: Yeah. So in the companies right now, again, we're like in the early days of the program. A lot of it is mentorship, giving insights in terms of how they could be leveraging, for instance, GCP better, some of the APIs that we've already built. They're working with teams like the cloud machine learning Engine team, the cloud AI team, but then also the Android Things team, which is trying to sort of push a lot of learning onto the device now. 

We're basically working with a lot of different product teams that are coming in and mentoring startups on what are some of the services that we have already that some of these companies can be leveraging as part of their stack so that they don't build that themselves, because there's no point there. What's interesting to the software engineering point that Peter was talking about is a lot of the issues that we're seeing startups are having is actually around architecture and around-- with software development, you're thinking about building an end product. But with machine learning, you're thinking about how to build a scalable data pipeline and how to retrain a model. And the end product is almost like a by-product. It's not necessarily what you're moving towards. 

And so we're starting to try to figure out are there things that we could be building. And we definitely are on the way to this already with your initiatives like auto ML in terms of automating certain parts of this process of building your software engineering and development to help these startups do this more quickly and better. The concept of potentially automating DevOps also. I think there's a lot of opportunities here. But I think that that is one thing that we've seen that's been really interesting, sort of aside from other problems like I mentioned around data, UI UX. 

There's also to Peter's point, there aren't tools for understanding how regulation is going to affect your product. And so there it becomes more about best practices and sharing best practices across these different companies that are working in one industry. Our hope is maybe that we can even build a curriculum to try to help inform well, be aware of regulation, be aware of how to go about building-- how to do software development, how to think about your data pipeline, how to think UI and UX. And so again, to Peter's point, it goes beyond just the idea of tools. It's more about sort of sharing best practices and learning from one another. 

MARK: So that actually sounds really interesting. I'm quite curious when you're talking Peter, about sort of the scarcity of resources in terms of people with the knowledge. Are you finding that one of the big challenges is that people who may come in without that machine learning or AI knowledge have a more-- I'm going to say quote, unquote, "traditional software development background"? So the pipeline and that the way that they build things for machine learning and AIs is I don't know how different, but different enough that it's causing a disconnect or that's a big hurdle? Are you finding that a challenge? 

PETER: Yeah. I think that's right. So one of it is really changing the mindset for what you're trying to do. In traditional software engineering, you're kind of thinking like a mathematician or a logician. And you'd say, well in the end point, I could sort of prove my program correct. 

And in reality, you only do that in the classroom. You don't do it for any realistic program. But you're sort of aiming in that direction. And we have tools like test frameworks where you're making assertions and the assertions are of the form the result of this should be equal to that, or this should be true. 

So it's very binary, true false. Either you got it or you don't. But with machine learning, it's not like that. It's not mathematical. It's more like empirical or scientific endeavor. 

It's like doing biology where you do an experiment on the world. You observe the results of the experiment. It's not that it's true or false, it's just most of the time it's going to be this. And some other time it's going to be something else. And so making that change from thinking from a logic, true false to a kind of probabilistic messy world, that's hard for a lot of people to give up on what they thought was a solid bedrock and now embrace this uncertainty. 

MARK: Of the, what do you mean this is only going to happen sometimes? 

PETER: Yeah. 

MELANIE: So one of the things I wanted to know is what kind of companies do you accept into the program? What makes them successful in this type of program? 

MALIKA: Yeah, so our selection criteria is quite simple. So first, it's are you applying machine learning or AI to the industry that we've said we're focused on at the present time, which is health care and biotech right now. And we're going to be announcing other industry tracks in the course of 2018. 

The next one is are you trying to solve a specific challenge related to machine learning in the next six months? And the reason why that is part of our selection criteria is we don't want to basically take startups in the wrong direction. There are companies that are going to be implementing a machine learning at some point. There are some companies that never will. 

And we just want to make sure that the companies that we do work with, because we put a tremendous amount of resources and time on our end, but we also expect a lot from the companies in terms of being there in the program, implementing a lot of the feedback that we give them, we want it to be core to what their roadmap is in the next six months. 

And one thing that I should clarify is our main engagement mechanism with the startups. So we don't actually invest in the companies. It's a slightly untraditional accelerator program in that we actually get them to draw up a project proposal of what they want to accomplish with Google in the space of six months. And we select them based on their project proposal. 

So they actually have to give us metrics, deliverables, goals for what they want to achieve. And then we give them a lot of feedback in the selection process. And then based on that project, we actually admit them into the program. 

MELANIE: What kind of metrics? 

MALIKA: It really would depend. So if you're a computer vision company looking at cell dynamics, and your project is focused on improving precision accuracy of detection of a certain kind of disease looking at those cells, then it would be improving your precision accuracy from 83% to 96%. And that would be the metric that we're basically working on together. But if it's a company working on natural language space, then it might be slightly different. It may be more about what how many errors can we detect in speech. 

So it really depends from one company to another. But yeah, that's I'd say is a main selection criteria for sure. For us it's less about selling Google products, or we don't really have a very clear sort of direct gaining back to Google. But Peter and I definitely, when we're looking at these companies, are thinking about what can we learn. And sometimes it's even more, just from a person intellectual perspective of wow, this company is doing something that we never thought would be possible. 

And we think there's something really interesting to learn here. But definitely, we're as I mentioned earlier, trying to figure out what Google could be doing and building to make this whole ecosystem successful. So the more a company gives us insights into that, the better it's going to be. Because we're trying to do things at scale here beyond just making these four companies and other companies in the program successful too. 

MARK: So I'm actually curious on this at a higher level too, you obviously have verticalized in the ML space. But now I'm also curious why specifically focusing on a ML? This startup space is huge. We do a lot of stuff of course Google Cloud. Why the emphasis specifically on ML? 

MALIKA: Yeah, and I'll definitely like Peter jump in here too. From a launchpad perspective, so there's actually another phenomenal program that's being run out of Launchpad called Launchpad Accelerator that's been running for a few years now, been extremely successful. And what they focus on is supporting growth stage startups in emerging markets. And the whole vision of Launchpad-- so we're affiliated with ecosystem, which our whole vision and mission is to support starting ecosystems everywhere in the world, is to identify startup ecosystems that we think are particularly under supported. And so with the Accelerator it was sort of thinking about next billion users, what could we be doing with startups globally that would actually give us insights and really make an impact? 

And then with Studio, again, the thought process was similar. We have this, as Peter was saying, this revolution going on, this boom of more and more startups that are starting to, for better or for worse, use AI machine learning in certain cases, not in a very real way. But we identified a need and also an opportunity for Google to really make a difference here, to, as Peter said, use some of our expertise of building some of these products internally, and actually see if we can teach anything and learn anything from these companies that are going really deep, looking at specific use cases, and trying to scale and productize some of the these things we've been working on for a few years. 

PETER: At Google, we have the luxury of in some ways, of being able to see into the future, that we're at such a scale that we run into some of the problems and opportunities before other people are at a smaller scale. So we've been doing this for a while, and we've seen these opportunities. And now we see a way to share that, to help other companies overcome what we've done in the past, that they are just starting to face now. 

MELANIE: You were saying before that there's mentorship that's provided, it's a six-month program. Is it similar to some of the other incubators out there? Or is it different? Is there certain things that make it similar or different? 

MALIKA: Yes. So I think, as I mentioned earlier, the main difference is that we don't actually invest. We don't have a financial relationship with the startups that we work with. There's various reasons why that is the case. One of them being that actually it would be very complicated for Google to have a financial relationship with some of the startups that we're bringing in from different places in the world. 

You mentioned China earlier. We're very excited to be able to work with companies without having some of that red tape. But it's also because we want to make it very clear that this is not a strategic endeavor for Google, and that this is almost a room of peers of we have a lot to learn from you. 

In many cases, we have mentors from our product teams at Google who come to us and tell us how much they've learned from the startups that they've been working with. So that's one main difference. The other one is, as I also mentioned, we admit companies on a rolling basis. So we don't really believe in the concept of classes. 

From my background working with startups, and Peter has too, a lot of people on our team were very conscientious of the fact that startups can't just drop everything every once in a while and say, OK, we're going to go and join this program and basically not focus on product development for however long. And so the entire program is designed in a way that's trying to be very mindful of that and is saying look, you're closing your round right now. It might not make sense for you to join this program. But in a month when we onboard our next batch, we'd love for you to come in. So that's the other one. 

The third aspect I'd say that it is a little bit different is that we have no one size fits all. So it's completely tailored to each company. We admit companies that have 12 people and have raised $100,000, and companies that have about 1,000 people and raised $70 million. So that's kind of the spread that we already have in our current batch. And so you can imagine that a company that has 12 people and company has 1,000 needs very different kinds of support. 

So we actually really focus on identifying what are the challenges of each company, and then build a totally custom mentorship program and solution for each company which is one of the reasons we only work with very few companies at a time. 

MARK: Cool. Both of you talked about sort of that feedback loop, which sounds fantastic. And I think that sounds wonderful. I'm super curious to know what's been the most sort of interesting or surprising or feedback that you've got or learning that you've had from working with these companies? 

MALIKA: Peter, do you have any so far that you'd like to share? 

PETER: I think it's just that companies are really focused on solving their problem and serving their customers. And so they see the technology as a way towards that goal, and that the technology itself, exactly what it is, they don't care as long as you can get there. And so making it easier for them to take advantage of that is what we're trying to do. 

MELANIE: So one of the questions that I had, you both were saying this. And I've heard this a lot lately where people will interchange AI and ML. How do you define it? How do you think about it, especially in working with these startups? 

PETER: So I guess I define artificial intelligence says doing something smart. So figuring out what you want to do and doing it well in a way that you didn't know how to do before. So in some ways I say that regular software is defining a program to do something that you know how to do. And AI is doing it for something that you don't know how to do. And then machine learning just means you're going to do that by learning from examples rather than having the programmer write down some rules or something. 

And back in the 1980s, we had the term AI and we also had the term expert systems. And what that meant is you got an expert in medicine or whatever it was, and you interviewed them, and you figured out what they knew, and then you wrote down rules that represented what they know. And so that was AI by applying expert knowledge, figuring it out by hand. 

Now we tend not to do that. We find that that's brittle and slow. And instead we do it by collecting data and learning from the data. So machine learning is achieving a AI through applying examples. And expert systems is achieving AI through understanding knowledge. 

MELANIE: And we also were talking a little bit before, I just want to touch on it briefly before we start to wrap up. But you've got this great experience working in China and seeing kind of where their world is going around the AI space. So just as a general thought of where AI is leading us for applied in real world business applications, what's your perception of this ecosystem? 

MALIKA: Yeah, well I think is extremely exciting to see Fie-Fei open the AI Research Institute in Beijing mid December last year. 

PETER: A lot of interest and excitement and a lot of people working on it. And we're seeing new things coming out. 

MARK: So for anyone who's listening and is all like, I've got a business and we're doing ML, and this program sounds amazing. How do they get involved? Is there a way? 

MALIKA: Yes, so just go on our website. There's an application. Only takes about 10 minutes to fill out. We would love to get an application from you. You're actually allowed to apply even if you're not working on health care and biotech, because we're looking at applications to also influence the next industry verticals that we'll be announcing. 

So again, we're admitting companies on a rolling basis. Applications are open across industry verticals. But we will be working mostly with companies in the health care and biotech space in the next few months. Also, if you aren't a startup, but would like to refer a company, please reach out to me. And maybe we can even share my information. 

MELANIE: Yes, we'll definitely have that in the show notes. 

MALIKA: And then the final thing is also if you are a subject matter expert-- because I think one of the big themes in this talk was effectively moving AI machine learning out of the hands of just the AI experts and moving them increasingly into the hands of subject matter experts, like health and biotech experts-- if you are a health biotech expert or someone else in another industry, you're really passionate about applying machine learning and AI into your industry and you'd like to become a mentor, again, please reach out. We work with academics, with industry veterans, with ex-CEOs. We'd love to hear about your experience and your expertise. 

MELANIE: Nice that you give it such a breath in terms of being willing to take in the mentors. One of the things I know we were talking about before was that you guys have an event coming up in a couple weeks. Do you want to tell us a little bit about that? 

MALIKA: Sure. So basically it's our second high time touch points. So that's what we call the event when the startups basically fly in. In certain cases, we have two companies that are based outside the US, and two companies in the US right now. And they come and basically get a few days to a week of back to back workshops and meetings with a lot of Google teams and external mentors, like I mentioned. 

So our next high touchpoint is coming up. We're going to be onboarding a few new companies. So if you're interested in seeing what other types of use cases and companies we're going to be supporting moving forward, definitely keep an eye on our web site and on our Google Developers blog. And we're really excited to keep working these companies, and as we mentioned, develop product methodologies from machine learning, and hopefully build better tools for this whole ecosystem. 

MELANIE: Thank you. Is there anything else that you both wanted to touch on before we close out? This is really great to hear about Launchpad Studio and get some insights in terms of how you're supporting startups. 

MALIKA: Yeah, I guess the only thing is if Peter has any other thoughts. Because him and I have had a lot of conversations about this, about his interest and passion. And again, basically empowering people who aren't experts across different industries. 

PETER: I guess we really enjoy working with companies and understanding what their needs are and what kind of tools they want, and how we're going to build that. And we see that it as real challenges going forward. So I think a good example of that is with speech recognition where we've made great strides in the last few years, where now you can talk to your phone, and we're going to get most of the words right. 

But now there's a next big step. We've got all the words right, but how do you respond to those words? And that doesn't have to do just with language. That has to do with what is it that you're trying to achieve? And so we've got to give the companies the capability to say when I recognize these words, here's what I should do. 

And do that in a way that they can understand and build a good product without having them having to be experts in speech recognition and machine learning and linguistics and everything else, but just integrated into their product. And again, it's like in regular software engineering, we figured out how to build menus and buttons and mouse clicks over decades. And now we have to do the same thing with a speech interface. 

And it's all going to be new. And we know don't to do it yet. So we're looking to partner with companies and help figure it out the other. 

MALIKA: And same thing to Peter's point, it's almost like come and help us learn and teach us what you need. And we're really excited about working with a lot of people. 

MELANIE: And actually just one other question. Peter, what got you inspired to do AI in general? What got you into the field, if I may ask this slight side note? 

PETER: It just seemed like a really exciting field. And I was in high school. And I was lucky enough that my high school had both a computer class and a linguistics class. So it was rare that you had computers in the high schools in those days. 

And I took those two classes and said hey, can we put these two together? And my teacher wisely said, Yeah, it's possible, but not with what you know. So ever since, I've been trying to learn enough to be able to do it. 

MELANIE: That's great that she gave you that kind of challenge and that you took the challenge. I'm glad you both were able to join us. Thank you so much for sharing the information around Launchpad Studios. And anything else that you wanted to mention or anything else you wanted to plug before we wrap this up? 

MARK: All right. Well, thank you very much to both of you for taking the time today and having a chat with us. 

MALIKA: Thank you so much for having us. 

PETER: Yeah, thanks. 

MELANIE: Thanks Malika and Peter for that great interview. We appreciated the insights around Launchpad Studio, especially for those startups out there that are machine learning and want to have access to different tooling and resources. If you have any questions or want additional insights on Launchpad Studio, we will, as always, put links on our web site. And now let's talk about the question of the week. So Mark, if I am a startup and I want credits to work on GCP, what is available to me? 

MARK: Yeah, so we have a whole startup program. We may have talked about it previously on the podcast, but I think it's changed a little since then, which is kind of cool. So if you're a startup, and you're like, oh man. I really want to use Google Cloud for it. You can go to cloud.google.com/startups, and they'll show you these startup page which is here. 

And there are different tiers that are available right now for different types of startup packages. So you can get anywhere from $3,000 in credit, all the way up to $100,000 in credit for one year, including as well, 24/7 support, office hours, spotlights, all sorts of different things, depending on what tier you're on and what sort of needs you have. There are several-- actually we've had Descartes Labs, which have been on the podcast more than once, is one of those people who came through that program. 

The one thing to know though, if you are a startup and you're looking, and you want to come through this program, you need to apply through your incubator accelerator or VC firm. There's a long list of all those people that we work with, our platform partners. I think I counted 142. 

MELANIE: Nice. That's a good number of people have to be working with. So yeah, if you are small business, and you're looking for some credits. And it gives some insights in terms of the size, what that means, a little bit of information around who would qualify for the program. 

Check out our link. You'll see that there's start package, there's a spark package, and there's a surge package in terms of the number of credits that you can potentially get hold of. And this can be applied to all of GCP and Firebase. 

MARK: Yes, actually that's a really good point that it goes to both GCP and Firebase, which is also super cool. If you aren't part of one of those groups, those incubators or accelerator programs, there is a mailing list you can sign up just to get updates to see if anything changes or if new people come on board. That's there. And obviously free trial is also obviously available. 

MELANIE: There we go. Well, that wraps us up for at least our first interview out of the gate for 2018. Anything you want to actually share or any places you're going to be in the next couple of weeks? 

MARK: I'm not traveling very much. Q1 for me is very quiet. Normally, I'm just sitting around trying to get things done for game developers conference in March. Just trying to get ramped up for that. How about yourself? You off anywhere? 

MALIKA: Nothing to announce right now but probably later. 

MARK: Stuff going on. All right. Cool. Well, Melanie, thank you for joining me for the first episode of the year of 2018. 

MELANIE: It's done. 

MARK: Yeah it's done. And thank you all for listening. And we'll see you all next week. 

[MUSIC PLAYING] 


{{< /transcript >}}
