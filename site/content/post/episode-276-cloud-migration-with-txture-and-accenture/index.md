+++
audioDuration = "00:41:15"
audioFile = "Google.Cloud.Platform.Podcast.Episode.276.mp3"
audioSize = 59334936
categories = ["Cloud Transformation", "Migration Planning"]
date = "2021-09-15"
description = "Mark Mirchandani and Brian Dorsey are together again this week for an episode all about Cloud Migration using Txture and Accenture."
draft = false
episodeNumber = 276
hosts = ["Mark Mirchandani", "Brian Dorsey"]
title = "Cloud Migration with Txture and Accenture"
image="/post/episode-276-cloud-migration-with-txture-and-accenture/images/hero/hero-EP-276.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/pourmp/episode_276_cloud_migration_with_txture_and/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Mark Mirchandani](https://twitter.com/markmirch) and [Brian Dorsey](https://twitter.com/briandorsey) are together again this week for an episode all about cloud migration using Txture and Accenture. Our guests [Matthias Farwick](https://twitter.com/frwck) of Txture, Patrick Niesel of Accenture, and [Jason Purvor](https://twitter.com/jpurvor) of Google help us understand their roles in cloud migration with some formal introductions to start the show.

Txture helps companies assess their migration capabilities, providing insights to what will be necessary in the process and how viable cloud migration is as an option. Accenture works with Txture to augment the planning of migration strategies for clients. Jason helps us understand how Google uses the information gleaned from these assessments to help customers understand what the journey to Google Cloud will look like for their business. Txture provides good data which helps Google and clients make better decisions, not just in migration, but for the future health of the project while operating in the cloud.

Our guests share the challenges of cloud migration and detail how these three powerhouse companies work together to overcome hurdles. From information gathering and budgeting to security and implementation, Txture, Accenture, and Google help companies understand their specific obstacles and develop a plan. Matthias uses a large banking client as an example to walk our listeners through a typical cloud migration process that takes advantage of Txture, Accenture, and Google.

Jason details the process customers go through with Google as they establish their cloud environments and make decisions about the future of their projects. Through the analysis of four layers, Google helps customers think through this highly technical and involved migration process. Matthias describes the three assessment steps Txture applies to the process as well, and how these multiple-company analyses work together to create a solid cloud project now and continue to improve the project in the future. 

Matthias, Patrick, and Jason offer advice for companies considering a shift to the cloud, stressing the importance of preparing good data and keeping time predictions realistic. Company-wide cooperation is an important tool in the success of a cloud migration as well.

##### Matthias Farwick

[Matthias Farwick](https://twitter.com/frwck) co-founded Txture, a software for large scale cloud application assessments and modernization programs that is currently expanding to the US. Matthias is an avid mountaineer and skier.

##### Patrick Niesel

Patrick Niesel has been working within Accenture focusing on cloud transformations and in particular on application assessments.

##### Jason Purvor

[Jason Purvor](https://twitter.com/jpurvor) is a data centre exit strategist engaged in large scale migrations and “all in” transformations. He formerly ran CloudPhysics EMEA supporting Googlers with high resolution data center assessments.

##### Cool things of the week

* What is Cloud SQL? [blog](https://cloud.google.com/blog/topics/developers-practitioners/what-cloud-sql)
* Save money and time with automated VM management and suspend/resume [blog](https://cloud.google.com/blog/products/compute/guide-to-cost-optimization-through-automated-vm-management)
     * Cost optimization using automated VM management [docs](https://cloud.google.com/architecture/cost-optimization-using-automated-vm-management)

##### Interview

* Txture [site](https://www.txture.io/en)
* Accenture [site](https://www.accenture.com/us-en/services/software-platforms/accenture-google-cloud-business-group)
* Cloud Insider [site](https://www.cloudinsider.com)
* Txture Cloud Transformation [site](https://txture.io/en/products/cloud-transformation)
* Data Centre Transformation with Google [site](https://services.google.com/fh/files/misc/google_data_center_transformation.pdf)
* Cloud Maturity Assessment [site](https://digitalmaturitybenchmark.withgoogle.com/cloud/)
* Google Cloud Adoption Framework [whitepaper](https://cloud.google.com/adoption-framework)
* Accenture-Google Business Group [site](https://accenture.com/google/)
* The Txture Cloud Transformation Platform [site](https://txture.io/en/products/cloud-transformation)
* Cloud Center of Excellence [blog](https://txture.io/en/blog/cloud-center-of-excellence-tasks)
* The 6Rs of Cloud Transformation [blog](https://txture.io/en/blog/6-Rs-cloud-migration-strategies)
* Cloud-to-Cloud Assessment [blog](https://txture.io/en/blog/cloud-to-cloud-assessment)

##### What's something cool you're working on?

Brian is working on a video series called [VM End to End](https://www.youtube.com/playlist?list=PLIivdWyY5sqIteZONy-rTwyf3w3OddFQ1) with [Carter Morgan](https://twitter.com/carterthecomic).

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode 276 of the weekly Google Cloud Platform Podcast. I'm Mark, and today I'm here with Brian. Hey, Brian, how are you doing?" >}}

BRIAN: Thank you, Mark. I'm happy to be here. Give me a quick tease. What is the main interview for today? 

MARK: Oh, absolutely. We're super excited to have on a couple of great folks. We've brought together the conglomeration, the brain trust, if you will, to talk all about cloud migration and cloud journeys. Specifically, we've got Jason from Google. We've got Matthias from Txture and we've got Patrick from Accenture. 

And all three of them and myself are going to be talking about what it means to look at cloud migration. We've talked about this topic a bunch of times, because it's a common topic. And when you look at cloud migration, you're thinking about what does it mean to actually move on to the cloud. 

Well, it's actually really complicated, right? You've got to actually kind of figure out how cloud-ready are you? What does it mean to kind of do a migration? 

Obviously, it's not just a lift-and-shift, which I think is an industry term that we've talked about before. Sometimes it can be a lot more complicated. Sometimes it can be completely rewriting your applications. And for a business that might have hundreds of thousands of different applications, what the heck does cloud migration even mean? 

So we get into all kinds of details. And we look at what Google Accenture and Txture play a role when working with specific companies to actually look at helping them plan, assess, and actually execute a migration journey. 

BRIAN: Sweet. Sounds cool. And I was not there for the recording, so I look forward to hearing it. I'm excited about that, just because migration affects pretty much everybody who's using cloud. 

MARK: Yeah. It's a really cool conversation. And I definitely think it's also a conversation that's worth having multiple times with different folks, because everyone brings a different perspective to it. And so this was a great example of hearing some very cool stuff. 

Txture, which is-- we'll get into a little bit more details-- but it's a company that's based on helping folks kind of find their cloud-readiness or their cloud assessment side. And so it's great to hear that perspective of it. 

But cloud migration, it's not a checklist, right? It's not a "1, 2, 3, done" kind of thing. It's a complex thing and involves a lot of planning. And the larger the company is, probably the more exponentially complicated the cloud migration journey for them looks like. 

BRIAN: Yeah, and every company is a little bit different. OK. We've got our traditional couple of Cool Things of the Week. 

[MUSIC PLAYING] 

There is a recent blog post about Cloud SQL that I think is really worth talking about, because I think, from the name, it's relatively clear what Cloud SQL is. It's some cloud, some SQL in the cloud. But there's a lot of different details to it. 

And this is a really good one-stop shop, like a reference, to get started in a bunch different things. So they cover things like setup, kind of the getting started bits, planning for how much reliability you're going to need and want, migration, what security concerns you have, and how to map those to Cloud SQL, and then some example use cases and the like. So it's a really good kind of jumping off point for digging into different aspects of Cloud SQL. 

MARK: Yeah. I think Priyanka and Gabe do a great job of showing off some of the detail there. And you know, frankly, if this is a guide and type of information you find useful, I think it's worth calling out-- check out Priyanka's stuff. She creates a ton of guides that are very similar to this. 

There's a bunch of different styles of guides that she works on. But some similar to this Cloud SQL one are really great kind of like, what is this technology, how should I be thinking about it, how can I kind of get started with it? I think they're super useful in that regard. 

BRIAN: And the blog post has just called "What is Cloud SQL?" And there will be a link in the show notes. 

MARK: For my Cool Thing of the Week, I wanted to post about this. So it's a pretty short blog post, but it actually is mostly highlighting a guide that was put together that helps, shockingly enough, save people money. And I love saving people money. It's kind of my jam. 

But this is a cool one that talks about how do you look at saving money with virtual machines, which is kind of your jam, Brian. 

BRIAN: This is like big hugs. 

MARK: [LAUGHS] I love it. I mean, the guide itself is super cool, because it looks at a couple of different ways that you can kind of set up automating different systems to basically save money on virtual machines. I think one of the very common examples that some folks have talked about before is, you can shut down resources that you're not using. Like dev machines are a great example of machines that are typically in use when developers are using them but not necessarily useful at other times. So maybe they could be shut off. 

But there's actually other ways to automate, including scheduling, of course, including Active Assist and the recommenders. But there's also a brand-new feature baked in here, right? 

BRIAN: Yeah, suspend and resume. 

MARK: So what is suspend and resume? And how is it different from what's currently available? 

BRIAN: To use an analogy, it's kind of like the laptop. When you close it up it stops. And you open it back up, and it's right back in the same state. It's that for cloud VMs. But the extra little cloudy bit on it is that it also lets you schedule those. 

So you can say, OK, I want these machines to be on during the normal work hours and off the rest of the time. Or, I want them to come on for three days a month at this particular time. You know, that sort of scheduling. 

MARK: So I mean, it's just like-- it's even better than stopping the resources. Because when you would stop a virtual machine, obviously you don't have to pay for the resources that you're not using, but you do have to go through a full kind of shutdown sequence there. But now you could actually just straight up suspend them, just like hibernating, and be able to pick them back up. I mean, there's no downside, right? It's win-win. 

BRIAN: Exactly. So yeah, that's the key difference for suspend and resume, is it's not a shutdown-reboot, it's just a pause-continue kind of operation. 

MARK: That's a super cool feature. So definitely recommend this guide, as it gives you some kind of general strategies around cost optimization when it comes to these VMs. But that suspend-resume feature just seems like a really cool thing for-- I'm sure a lot of folks will find that super useful. 

BRIAN: And it's just really practical. So I want to make sure people knew that it existed. 

MARK: Absolutely. Well, make sure to check out those links. Of course, they'll be in the show notes, like all of our other links. Otherwise, why don't we go ahead and jump into our conversation with Jason, Matthias, and Patrick? 

[MUSIC PLAYING] 

Thank you all so much for joining. Before we get things started, can you all give us an introduction? 

MATTHIAS: Yeah. So hi, everybody. And first of all, thanks, Mark, for having me. Yeah I'm Matthias, Co-founder and CEO of the cloud transformation platform Txture. Yeah, a few words about myself-- a computer scientist by training, did a postdoc at the University of Innsbruck in beautiful Austria, and from there started researching on a large-scale IT transformations, and realized, OK, you know, from what we looked at there in this research, we realized that this is the perfect basis for starting off cloud transformation with an assessment platform. 

And then yeah, founded the company as a spin-off of the University. Fast forward to being here the "GCP Podcast." And I'm super happy to be here and have a chat with you guys. 

PATRICK: A couple of words from my side, Patrick Niesel from the beautiful Frankfurt in Germany. And I'm with Accenture. I'm a manager in the infrastructure strategy and transformation practice there and focusing, basically since my beginning at Accenture, on cloud transformations, and in particular, also on cloud assessments. 

And hence, we have the connection to Matthias and team via some assessments that we've done in the past, and also have learned a lot from each other. For instance, well, we didn't use a proper tool to do these assessments but have gone to an Excel-based solution, and have gained a lot of learnings we were able to put into, ultimately, joint further development of the tool Txture. 

JASON: And I'm Jason Purvor. I'm the Googler here. So relatively new. I guess I've joined in January of this year having spent five years previously running CloudPhysics, which was an assessment tooling that was used by Google, where I was assessing data centers, very large VMware states. And we must have probably had over about 400 or so customers. 

And one thing, I think, that that kind of taught me that has brought me here today is that people with bad data make bad decisions with great certainty. And so what we're looking to do, working with our friends at Txture and our partners Accenture, is to really help customers to understand what the digital transformation journeys might look like. 

So title-wise, I am the EMEA Go-to-Market Lead for Data Center Transformation and Mass Migration. I think that that means that I get a tri-fold card, because I don't think I can actually fit all those words onto a single layer. Part of a cross-functional team, I kind of work across the entire solution catalog, essentially, within Google. 

And what we're looking to do working with partners and with ISVs such as Txture is to find ways in which to shorten those migration journeys, make them more meaningful, to get to good business outcomes for our customers. And essentially, Txture really helps us with that. And I'd just like to put this down, is that they help us to give customers good data. And with good data, you make good decisions with great clarity. 

MARK: Yeah. I think that "with bad data people make bad decisions" should just be the tagline for this entire episode. Because we've kind of formed this whole coalition of experts to talk about cloud transformation and the migration path, and what cloud assessments mean. So we're going to get into all of that. 

Before we do, though, I'd love to get just kind of a very quick overview of who Accenture is as a company, and then who Txture is as a company. 

PATRICK: OK. So then we're starting alphabetically, I assume. OK, yeah. A couple of words to Accenture. So we are consulting company, globally present in all regions, basically partnerships with all major, in this case, cloud providers, but also in all other aspects of IT. 

Since we are talking today about assessment in particular to cloud, so a couple of words more to that. We are-- basically, all the major companies of the world are somewhat clients of us. And we are very proud of our project management and transformation capabilities that we are putting into play. 

And now in particular, towards the cloud with all major providers, but also then particularly now with Google, and also partnering in the wide ecosystem-- for instance, then now with two providers like Txture, and now we have also the personal connection between Matthias and myself. We've been co-developing some aspects of it. Basically, we get the projects going for the client, partnering with all of you guys in this huge ecosystem. 

MATTHIAS: All right. Cool, Patrick. So thanks for the intro about Accenture. And a few words about Txture. So maybe not so many people know us yet. So we are a relatively young company founded in 2017. 

So we are a software vendor specialized on large-scale cloud transformation. So other than Accenture, we are not in the business of consulting or executing migrations. We are in the business of helping Google, helping Accenture to perform better and bring with our software clients faster, in a higher quality, with fewer risks, and hopefully also with reduced costs, to GCP. 

Basically, what our platform really does is, it creates a data collection and a process layer that can be easily followed in order to standardize streamlined migration so for all involved parties. We do this on a global scale, working with Accenture and others. 

In the last 12 months, we did around 40 to 50 large-scale migrations on four continents. So yeah, that's an exciting market we're in here. So cloud is still growing very fast and a lot of fun to be part of this journey. 

JASON: Let me jump in, actually, because I probably don't need to introduce who Google are necessarily. But I think what might be useful is just to perhaps introduce some of the thoughts around data center transformation in the team that I'm in. Because it is a relatively new part of Google Cloud. 

And what we're looking to do, essentially, is to help customers not just necessarily with the traditional low-hanging fruit of x86 migration, but also the more complex stuff-- the long-term legacy Unix boxes running AIX or mainframes, Z series, looking at POSIX and all kinds of things, and Exadata, for example. So the thought here is, what can we create that generates this idea of bringing everything to Google Cloud, or at the very least, get those workflows adjacent to Google Cloud regions so that customers can start exploiting the superpowers of cloud, and really getting involved with AI/ML, and cutting-edge analytics so they can drive their businesses forward, and become more digital-native than they perhaps are today, and consequently, drive increased business value, both for their internal stakeholders but also for customers as well? 

And so working with Txture and Accenture, you know, that creates a triumvirate of companies that can deliver upon that promise. We provide those services and the infrastructure to actually take us out to the customer and actually engage and get those projects up and running and across the line. And Txture comes to basically help to provide the grease that kind of allows us to move things fluidly from one point to another. It provides a much more frictionless journey from on-premise or in-cloud into Google Cloud. 

MARK: You know, the reason we're kind of talking about this in general is because "cloud transformation" is such a blanket term. And I think, Jason, you were talking about bringing stuff into the cloud that unlock the power of the cloud. Which is great to say, but it's a whole different thing to do. 

So to kind of kick this off, what makes migration-- what makes cloud assessment-- what makes these so difficult for a company to kind of achieve? Because it's not just, "flip a switch, and we're in the cloud, and we're ready to go," like you were just kind of hinting at-- or all three of you have been hinting at. It's a complicated process. 

So let's start there. Like, what makes that difficult? 

PATRICK: Let's put ourselves into the shoes of a company. And they have an IT stack, and they know more or less what they're running-- or in some cases, what we've seen, they actually don't know what they're actually running. So this is the first step, to actually get transparency on what you actually have. 

And then as a next step, what could we do with that? What would be some useful steps in a certain direction? How can we kind of segment our application landscape, for instance, make some buckets? And some go out of service very soon so we don't have to take care of those. 

And we identify the ones that have highest cloud potential. And we then focus on these. And then we derive an iterative process on what exactly to do. 

And the challenge here that I see now, speaking from Accenture project management perspective, is to get to the point from some information that you gather to actually make sense out of that, derive some proper actions for a limited amount of high potential benefit applications, and then go through into the execution, which, again, is its own animal of complexity and challenges. 

And then also, what we've seen in a lot of cases is that you have sometimes very high pressure. So for one, typically we envision that a client decides are, we want to unlock the benefits of the cloud. And outside of time and budget constraints, we just do what is best for our company. 

In reality, you don't have that. In reality, you have a data center exit plan, so you have to get out there very fast. On the other side, you have severe budget restrictions. You have to see what is possible. 

So all these factors come into play, somehow related to technology but not necessarily. There's a lot of other aspects to be considered. And to bring all of these together is a huge challenge. 

To name a few, so you have organizational readiness, for instance. How good is my organization prepared for the cloud itself, skill-wise, understanding-wise, but also, then, transformation-wise. Do I have an organization that actually can, kind of in an agile way, react to new situations and new technologies? 

Then we have security, we have regulations. And I'm from Germany. I know what we're talking about, data security. Works council is a concept that not so familiar in the US but in Germany very strong. Huge impact on assessment and migration complexity. 

And all these things, each for itself has a certain complexity. But now when you put them all together, which you need in order to actually get there, it's a very complex, very interesting setup and needs a lot of support in structuring all this information flow. And I think this is where, then, now the three of us can really jump in and tell you a bit more about that, how the structuring information is ideally done. 

MATTHIAS: Yeah, absolutely, Patrick. So maybe we can give an example of an assessment or transformation that we are supporting together. It's a large bank. And at some point, there was basically the decision on the board level to move a certain percentage of on-prem services to the cloud by 2023. 

And then you have to really think about for all the stakeholders, all the application owners and the infrastructure team, they're faced with thousands of applications, tens of thousands of servers. And you know, the emoji that comes to mind is the exploding head emoji. So you have this immense complexity, organization complexity. You have so many options of what to do. 

And you really have to wade through all those applications and the underlying infrastructure and make really, really tough decisions. So you have to look at the applications and decide if this actually makes sense to migrate from a technical perspective, from a business perspective, from a compliance perspective, you know. 

Or what to do with it. Maybe it's something where if you invest some money, if you refactor that applications, you get huge benefits. Or maybe this thing is switched off in a year anyway. Then you simply rehost that thing, and opportunities, all the services on GCP. You have a lot of options, and you need to make the right decisions to get the right value from it. 

And then Patrick already mentioned the regulatory requirements. So yeah, summing this up also from my side, you know, this immense complexity really needs many stakeholders, many organizational units, many helpers in those large transformations to really work together nicely, create a symbiosis to make this work. 

JASON: Most of the time, we kind of think of moving to the cloud as this kind of linear thing, this binary thing. OK, we've moved to the cloud. 

But actually, when you break it down, really what the digital transformation or migration to cloud is really about is, it's a number of, perhaps, concurrent or sequential or intermixed projects which happen over time. And so in particular, as you kind of look at data center exit, you might want to start off with, you know that you're going to be continuing to use certain applications, so you might want to start with the simpler ones, the x86, with the lowest number of dependencies and get those migrations across quickly, kick-starting the process of getting the skills built up within the teams who are going to be moving forward with running the cloud. 

So I think one of the big things that we notice is that this migration to cloud is a sequence of complex, interrelated projects which need to be organized and brought to conclusion. So ultimately, you may want to start off with perhaps lift-and-shift, but that may not be your final destination. 

And so we think of cloud journeys, right? So we may start off with lift-and-shift to get some immediate access to cloud-native services, but then move on to start modernizing those applications. We may move them into containers, or we may move them to PaaS. We may start breaking out the data and moving it to different types of serverless, or even, perhaps, open standard databases. 

So lots complex moving parts. But fundamentally, I think, just picking up on what Patrick was saying, it's not just about the technology. We look at it from kind of four different layers. 

We look at business, which is really about the value case. You know, what's the reason you're moving this workload into the cloud? What benefit are you going to get from it? 

The operations-- what does that mean in terms of what skills do your teams need in order to now manage and continue to operate this in cloud? And what kind of operational interruption are we going to get by this migration? How can we minimize that, reduce risk? 

Then we have the financial. To clearly-- if you're going to move to cloud, typically you're going to get a financial benefit because you're going into economies of scale. But we do still need to justify that. 

And technology is kind of that final piece, which is, well, what are we going to put it on? And what we put it on today may not be where it lands later in time. And I think that that is important. 

So we need a way not just of gathering all this data around what is your current configured state, what is your actual utilization characteristics, what are your interdependencies from an infrastructure and application layer perspective, but also, where are we going to go with this over time. And so cloud journey is really, I think, things where we're going to start spending a lot more time. 

And this is where, really, Txture, I think, really shines in terms of being able to help us out with that. 

PATRICK: One thing that you just said, Jason, triggered something in my head-- as you said, "over time," which applies to the entire journey to cloud but also applies to the assessment itself. In the beginning, you have to realize that you cannot know what you have to know in order to take all the decisions. 

JASON: Exactly. 

PATRICK: So you're starting with a set of data and a set of questions that you have. But over time, you realize in this particular case, in this industry, this client in this country, there are some questions that I was not aware of before. And so you have to incorporate that into the assessment process later on, which can trigger a huge chain effect. And this is also adding up to the whole complexity of the whole assessment thing. 

JASON: I think that what that means, Patrick, is that we have to be pragmatic as we go through the process of a cloud journey. It's not a binary thing. You don't just make a plan and then execute rigorously against it. You have to be agile even with that, because as you go along the process, you're going to find some road bumps you hadn't necessarily seen. And you need to navigate around them. 

So pragmatism, I think, is something that really needs to be part of any project of mass migration. 

PATRICK: It really boils down to choosing the right level of granularity of analysis at the right point in time. So if you start an assessment deep dive at the very beginning, maybe that's not the right way to do it. But get the general roadmap right and then do the-- 

MARK: So yeah, I mean, there's a lot of moving pieces when it comes to a migration. And there's a whole bunch of factors that you need to take into account. And some of those are going to be very obvious with technical sides and sometimes not so obvious. And some of them are going to be completely on the business side or on the compliance side, as you've already talked about. 

So having an assessment is a really key part of, probably, what this journey looks like, especially if you are going to be a large company with hundreds or even thousands of different services that might be migrated to the cloud, all in their own routes, all in their own time. And creating that plan is a super important part. 

So can we talk a little bit more about what the assessment side actually looks like, what actually goes into it? And what role does Txture play in kind of those assessments? 

PATRICK: We typically try to put it into a easy-to-understand framework of more or less three steps. So the one thing is to get an overview of what I already have, which is the first part, so just getting transparency. And this you can do by combining your existing data sources, identifying also the data model that you want to use, and finding out the gaps of the things you don't know, so that at least what you don't know and then can target these points to then be able to derive the conclusions that you need in order to take the decision. 

And once you have done that assessment, then you try to go to simulation path on what is possible, and also what then makes sense. So this segmentation aspect of assessment is very important to decommission the ones that have a high cloud benefit and so on. 

For the ones that actually have this cloud benefit, you then go into these deep dives. And actually, you can do a lot within data. But you also need to talk to the people that have to support the migration and also then support the run in the cloud. Basically, if you really want to do it well, you don't get around a workshop series with the application owners and all the relevant stakeholders-- per application. 

This is what we typically call level 3 assessment, where you then also ask the detailed questions that actually then help for migration preparation and go way beyond just technology but a lot of organizational aspects. And these are always underestimated. And here I'm talking from a project management perspective. So it's a huge effort driver on these assessments. 

MATTHIAS: So you know, what we've done with the Txture platform, really, is to create an end-to-end software support platform that supports this kind of process. And this creates the structure for all stakeholders to really move faster from discovering the application landscape to actually migrating and then modernizing in the cloud. 

And this also helps people that maybe have not done so many migrations in the past to really follow a structured process and to have all the moving parts always inside. The key phases, typically, of a cloud transformation, which are kind of also baked into Txture, is the discovery phase; the assessment phase; and the target architecture phase, where you decide on what to actually do, where to bring an application, what kind of services to use; then the migration tracking and reporting phase; and then the continuous modernization phase. 

And the key, how Txture basically supports all this, are basically three main components. It's the ease of collecting data about the infrastructure and application landscape. And then there's a set of standard assessment rules that are also configurable that look at the application, the infrastructure from many different perspectives-- from the business perspective, from the technical perspective, and also from the compliance perspective-- in order to make migration recommendations according to the six Rs of cloud transformation, such as Rehosting, Retiring and application, Replatforming, containerizing it, et cetera. 

And the other part is what we call the cloud knowledge engine. And that's basically a mapping that we created from on-prem, from legacy technologies, to GCP services. And so if a client has a specific, let's say, legacy database, then we can automatically find replacements for this in GCP and calculate migration challenges, maybe, but also really target architectures. 

So if we dive a little bit deeper in all of those phases, basically, Txture starts with the discovery phase collecting data from CMDBs such as ServiceNow, virtualization environments, discovery tools. And also it's the opportunity to collect data from application owners via standardized surveys. 

And then this collected data can always be analyzed in terms of where data are missing. Then we can go into discussion with application owners, find the missing pieces, for example, what kind of data does the application process. And then we can calculate migration risks from that, for example, or missing communication paths between applications. 

And then this is basically taken. And then the target architecture preferences, which kind of reflect the client's cloud strategy, is used in order to automatically generate baseline target architectures. And those can be tweaked. And then find detailed solutions in the cloud. 

Yeah, and then Txture can track the migration by integrating with the GCP API, and see which components are actually moving that's more or less live, and then map that to the current as-is IT infrastructure landscape. And then the last part is what I mentioned before, this continuous modernization, where Txture also can look at the existing, let's say, infrastructure-as-a-service landscape that is on GCP or another cloud provider already, and recommend modernization scenarios, for example, with regards to replatforming, containerization, to actually get more value from higher-level services in the cloud. 

JASON: That's what I find really interesting about Txture, is that it doesn't just take you from a simple lift-and-shift but actually takes you through the process of continuous modernization, continuously looking at your current state architecture, and then advising on how you might make adjustments to that and improvements, but also then providing that bill of materials, importantly, and the financial model around it. 

And then wrapped around that is the whole context of what your security posture is and what your compliance posture is. Knowing all those things make it really easy for business owners to make a go or no-go decision quickly, because they have good quality data. It comes back to that commentary from earlier. 

That genuinely is addressing the cloud journey. Going back to my point earlier, I really don't think that any cloud journey is essentially ever finished until you've actually become essentially digitally native. So once you finally have got to the point that you are the disruptor in the market, you have become digitally native. Before that, you're going to be being disrupted. 

And I think a lot of companies right now are perhaps struggling with this, because new entrants are coming in very quickly that are digital native. And they're able to very quickly execute in markets. We talk about banking, for example. And we have the contender banks who are coming in and literally hoovering up customers left, right, and center. And of course, the reaction to that is not necessarily to throw more technology or existing infrastructure, but to question whether or not that infrastructure is serving your purpose of delivering quality and value of services that your customers want. 

In sales, there's a classic line that they say that selling is all about finding out what the customer wants, going and getting it, and then giving it to them. And I think that really is what our role is in Google Cloud now, is to find out what is it that our customers really need in order to be successful. We build it, and we're continuing to do that, and addressing things such as open software. We're also addressing sustainability. 

These are the things our customers are asking us for. And security, encryption, in transit and at rest, and now also, actually during the processing side with confidential compute. So we're addressing all those challenges the customers are coming to us with. 

MARK: I think that's why "cloud journey," as much as that term does kind of get thrown around, is much the right word for this type of engagement with these companies, because it's not an, "OK, I'm going to move this thing to the cloud and it's going to be done." It's really figuring out what this actually looks like, creating this plan, getting that good data that we talked about, and then kind of figuring out, how do I take advantage of the things in the cloud? 

And then moving on from there, what does the future look like? I think that's such an important part of it that, oftentimes people are so focused on getting to the cloud, then they're not really thinking about what happens afterwards. 

So we're actually running a little bit short on time. So I do want to jump over to this idea of, if companies are looking at migration or starting to plan for kind of moving to the cloud or have already started that kind of process, what's the best advice you all can give them when it comes to kind of this assessment and migration plan that, obviously, all three of these companies-- Google, Accenture, and Txture put together-- have helped companies with before? 

MATTHIAS: My first recommendation would be assemble the forces. So basically, first of all-- of course, internally-- you know, you have to figure out who is doing what, assemble a, for example, cloud center of excellence. Get the right people on board that know what they're doing from the security standpoint, know what they're doing from the financial perspective on the cloud; getting cloud infrastructure people into this cloud center of excellence. 

You as an organization, you know what you're actually doing. And the rest of the organization also knows who to address when they have questions regarding cloud. 

First thing, assemble the forces internally. But then I would recommend also, assemble the forces externally. So speak to the GCP folks. You know, they have the architectural best practices for what to choose for your scenario. 

And then if you want to really execute on moving to the cloud, get support from, for example, Accenture. They have been doing so many of those large-scale migrations in the past. Yeah, also look at tool support. Check out what Txture has to offer to standardize those kind of processes. 

And last but not least, I would recommend, if you start the assessment and looking at what to migrate, prepare the data collection properly. Really think about what data about your application infrastructure do you have, and in what quality do you have it? So if you have a CMDB, really think hard about what's the quality of the data that you have there. And then you can make realistic predictions on how much time you will need to gather data to basically make decisions on that data. 

And that's basically, again to the first point Jason made in this podcast today, you know, you really need to have solid data in order to make decisions. So prepare that properly. That will be my main advice. 

PATRICK: So two points I want to make-- there's a ton of things we could talk about. But let's limit to some key points here. One is, when using this image of the journey, be aware that the assessment is one of the many steps. And some later phases or steps might come earlier as you think. 

So for instance, what we oftentimes see, that companies make an assessment and directly start into the migration planning, without taking into account the target landing zone, definition setup-- so how does the Google Cloud need to be configured and set up, how does network security and so on need to be implemented, how should our services for the company look like. 

So they simply do not take that into account. Then they make migration plans, start, potentially even with a partner Accenture, and start pushing the first process, start to go there, and then they hit a block, because the target landing zone simply is not ready yet. So you lose a lot of time and momentum for that. 

Similarly, implications on business case-- and you mentioned it already, Jason-- is the operations part. So once I've migrated, I directly need to be able to integrate the services of Google into my ITSM processes. I need to be aware how to operate, how incidents management work, how change management works, all these different aspects. So process integration, service integration, managed services, what can be consumed directly from Google, what do we have to manage myself, all these things. 

So don't consider application assessment and migration as the key pieces. But also consider the target landing zone and also the operations as key cornerstones that need to be actually addressed, if not in parallel, but even before, and a key part of the overall cloud transformation strategy. 

Another key point is the organizational setup of the assessment within your own company as someone who wants to go to cloud. So it needs to be properly supported by top-level management, but also then communicated and cascaded down to all the people that have to contribute to this. Quick example-- when we were at a resources client once, one department had it actually as key point on the agenda to move to the cloud. Leadership cascaded down this decision, everybody was working with us, perfect. 

And then another one, actually on site going there, doing these workshops, and people were not prepared. They were not willing to participate. Because one important thing is also to take into account that there's a lot of strategic initiatives running in parallel in all major companies. And it needs to be prioritized, otherwise you're losing a lot of momentum. 

JASON: I absolutely agree with the idea Matthias floated there that we start off with a cloud center of excellence. I think that's a really important point, is to gather your resources. The cloud center of excellence isn't just there to basically do the migration or oversee it. It's also to lead and learn or teach the rest of the organization. 

We built a Google Cloud adoption framework, which really, I think, is a great asset to point customers to. So if you search up-- of course, if you go to google.com, and you search for Google Cloud Adoption Framework, you'll find a white paper which takes you through the concepts of learning, leading, scaling, and securing-- the four key tenets. 

And I think my other point is that this is a journey. And you don't necessarily have to climb to the top of the mountain in one go. I'll go back to the point that you may want to start the base camp, you know, catch your breath and acclimatize. And so the migration to cloud, that digital transformation, is a journey. 

Start off with some simple quick wins. Get the first few workloads in. Get to the landing zone that Patrick describes. Get that set up. Learn about the way in which this is different to the on-premise environment, where you may have 10 wet signatures before you get a server delivered in six months, given the chip shortages we have at the moment, where you're now in a position where you give a budget to the stakeholder and give them guardrails and they're able to self-serve. 

So it's a very different operating model. And I think just understanding that the journey is going to take you to a different destination, and a much better destination-- I wholeheartedly feel that that is the case-- unleashing your data, unleashing the superpowers of cloud, really putting your business forward, that's really the objective. 

And we're here to help, all three of us on this call-- and there are plenty of other experts, of course, across the globe there, standing, willing, and ready to help out. You know, we're passionate about helping customers get there. Don't do it on your own. You don't need to do all of the heavy lifting. We can help out with that. That would be my final commentary to this. 

MARK: We're going to make sure to put as many links as we can into the show notes for folks who are interested in learning more about the Txture, and Accenture, and of course, Google Cloud, but also for folks who are thinking about kind of starting that migration or who already on a migration plan and want to kind of figure out the best next way to level it up. So before we wrap things up, is there anything else you all want to call out? 

MATTHIAS: So one thing that comes into mind when we're looking at the participants of this call is that, of course, we have established partnerships between us to be able to execute on what we are now here talking about and promising. We have several of those. One that comes to mind very quickly is the Accenture Google Business Group, the AGBG, which is also a huge organization across the globe with experts from both sides, exchanging on various topics, for instance, also cloud assessment. 

And on the other hand, then, partnerships of Accenture and Txture. And we have very close relations. They're doing a lot of projects together. Also, we're observing more and more the need to actually do these triangular relationships between the consulting partner, the cloud provider, and then the tools support and the platforms that actually bring all these things together. 

So I would be happy to see a joint organization driving, in particular, cloud assessments, with all three of us forward. 

PATRICK: We've done a lot in the past and together looking for more successful cloud transformations in the future. 

JASON: And from my side, the wrap-up comment is that digital transformation really is about becoming the disruptor as opposed to the disruptee. And so the sooner you kind of get on that journey, I think is the best time. 

As a triumvirate here, yeah, absolutely we are engaged on many projects across the continent. And we're loving the outcomes that we're seeing in our customers. We have regular feedback from customers just saying we have transformed their businesses. In particular, as we look at those superpowers that I mentioned of analytics and AI and ML, which are really hot in the boardrooms today. 

So the ability to get customers to that destination is in this group that we have here. I look forward to this continued journey that we're on as well, as we learn, as we go along the path, and to many more successes moving forward. 

MARK: Awesome. All right. Well, thank you all so much for coming on the podcast. Definitely a great conversation. 

JASON: Thank you, Mark. 

MATTHIAS: Thanks for having us. 

PATRICK: Thanks, Mark. 

MARK: Once again, thanks so much to Jason, Matthias, and Patrick for coming in. It was great to get a chance to hear these different perspectives, but also kind of see, if I'm some giant company-- I don't know, maybe a Google-- and thinking about, how do I move over to the cloud, or how do I start using the cloud, or maybe I'm already partially in the cloud but I want to move more stuff over there-- like, there's so many different scenarios that you have to think of. And again, the larger your company, the more complex it's going to be. 

And so it's really great to hear about what kind of journey that might look like. And you know, of course, there's tons of folks out there who are happy to help and want to make that journey as successful as possible. 

BRIAN: Sounds good. 

MARK: Yeah. It's definitely worthwhile. Well, Brian, it's been a little while since we've had you on the podcast. What have you been up to lately? 

BRIAN: I know. The biggest thing that I'd like to share-- that's Carter Morgan and I-- Carter you may know from the podcast-- had a series of conversations. They're kind of like a video podcast in a way, because it's just us talking. But it's all about VMs. So it's called "VMs End to End." 

Carter went into this like pretty skeptical about whether VMs are relevant in the modern world. And so if you'd like to listen to me try to convince him-- that VMs are, indeed, super relevant and awesome-- please check it out. I think it's really worth your time. And if you're already convinced, pass it on to somebody else who needs some VMs in their life. 

MARK: And I hear there's this new suspend-resume feature that's really handy for cloud VM. 

BRIAN: Totally check it out. 

MARK: Well, I think it's also a great example of how there isn't a single path for users and customers and companies to the cloud, and that just because you're moving to the cloud also doesn't mean that you need to completely subscribe to some of the new kind of serverless offerings or whatever. Like, VMs still are a big staple for a lot of types of work. 

BRIAN: Absolutely. And, you know, they're the place where-- "lift-and-shift" is a phrase for a reason. You know, if you're trying to get everything into the cloud, probably your newest stuff is going to look like some of the new shiny stuff that we talk about all the time. And there's lots of really good reasons for doing that. 

But you also have a whole bunch of other stuff. And almost guarantee that you can run it on a VM. So there's a lot of VMs out there, and they work really, really well. And we've added a lot of features that give them a lot of the flexibility you expect from, say, containers or other things, because they're running in cloud. So definitely do not dismiss the power of VMs. 

MARK: You know, if I was a better planner, we probably could have tied this entire episode around VMs and migration. The journey to the cloud is not what you think it might be. But I am not a good planner, so here we are. 

BRIAN: Let's say we did that. 

MARK: OK. 

BRIAN: Everyone who's listening, please work with us here and imagine a complete story arc thread of this episode. At least in your heads. 

MARK: Thank you to our listeners, of course, for doing the heavy lifting work. It's the most we can ask of you. But of course, thank you so much for tuning in. And we'll see you all next week. 

BRIAN: Thank you. See you soon. 

[THEME MUSIC] 

MARK: I used to like podcasts, but there were too many pictures for me. Now I've got words. 

[LAUGHTER]