+++
audioDuration = "00:37:01"
audioFile = "Google.Cloud.Platform.Podcast.Episode.189.mp3"
audioSize = 53209492
categories = ["NetApp", "Data Management"]
date = "2019-08-07"
description = "Jon Foust joins Mark Mirchandani this week as we meet up with Alim Karim from NetApp and Technical Director in OCTO Dean Hildebrand of Google."
draft = false
episodeNumber = 189
hosts = ["Jon Foust", "Mark Mirchandani"]
title = "NetApp with Alim Karim and Dean Hildebrand"
image="/post/episode-189-netapp-with-alim-karim-and-dean-hildebrand/images/hero/hero-EP-189.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/cn6cvq/episode_189_netapp_with_alim_karim_and_dean/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Jon Foust](https://twitter.com/syntxerror1) joins [Mark Mirchandani](https://twitter.com/markmirch) this week as we meet up with [Alim Karim](https://twitter.com/alim__k) from NetApp and Technical Director in OCTO [Dean Hildebrand](https://www.linkedin.com/in/dean) of Google. NetApp has been in data management for 20 years, focusing on providing on-prem, high-performance storage solutions for large industry clients. Their recent partnership with Google Cloud has allowed them to expand their services, offering the same great data management and storage in the cloud. 

Dean and Alim elaborate on the best uses for NetApp, explaining that lifting and shifting an existing project to the cloud is only one way NetApp can be useful. New projects can be built right in Google Cloud with NetApp as well. Our guests discuss the other pros of the NetApp service, including faster data retrieval, better monitoring, and predictability. We also talk about how NetApp takes customer feedback into consideration to make sure their service is the best it can be for every client. What's in store for the future of NetApp? Listen in to find out!

<!--more-->

##### Alim Karim

[Alim Karim](https://twitter.com/alim__k) is a Product Manager in the Cloud Data Services BU at NetApp. He started his career as a software developer and joined NetApp in 2011. At NetApp Alim has held several customer-facing positions and is passionate about solving business problems with technology. He holds an undergraduate degree in Computer Science and an MBA from Queen's University.

##### Dean Hildebrand

[Dean Hildebrand](https://www.linkedin.com/in/dean) is a Technical Director in the Office of the CTO (OCTO) at Google Cloud focusing on enterprise and HPC storage systems.  He has authored over 100 scientific publications and patents, and been the technical program chair and sat on the program committee of numerous conferences. He received a B.Sc. degree in computer science from the University of British Columbia in 1998 and M.S. and PhD. degrees in computer science from the University of Michigan in 2003 and 2007, respectively.

##### Cool things of the week

* Google Cloud Game Servers [site](https://cloud.google.com/game-servers/)
* VMware Cloud Foundation comes to Google Cloud [blog](https://cloud.google.com/blog/topics/partners/vmware-cloud-foundation-comes-to-google-cloud)
* Using GCP NuGet Packages in Unity [article](https://medium.com/@jonfoust/using-gcp-nuget-packages-with-unity-8dbd29c42cc4)

##### Interview

* NetApp on Google Cloud [site](https://cloud.google.com/netapp/)
* Cloud Volumes Service [site](https://cloud.netapp.com/cloud-volumes-service-for-gcp)
* BigQuery [site](https://cloud.google.com/bigquery/)
* TensorFlow [site](https://www.tensorflow.org)
* Google Cloud Storage [site](https://cloud.google.com/storage/)
* Anthos [site](https://cloud.google.com/anthos/)

##### Question of the week

[How do I authenticate my Google Kubernetes Engine cluster in a CI/CD pipeline?](https://medium.com/google-cloud/authenticating-to-gke-without-gcloud-aefd23a840a9)

##### Where can you find us next?

Our guests will be at [Google Cloud Summit Seattle](https://inthecloud.withgoogle.com/summit-sea-19/home.html) and [Next London](https://cloud.withgoogle.com/next/uk/).

Jon will be at [PAX Dev](https://dev.paxsite.com), doing some Google Game stuff in Sunnyvale, and taking some personal time to travel to Montreal.

After Austin, Mark will be staying local to work on some stuff, and he's about to launch the next few episodes of [Stack Doctor](https://www.youtube.com/playlist?list=PLIivdWyY5sqLuKKx4pcdEAkJY1HevjVVm).


##### Sound Effect Attribution

* "Small Audience Laughs.wav" by Oniwe of [Freesound.org](https://Freesound.org)
* "MysteryPeak1.wav" by FoolBoyMedia of [Freesound.org](https://Freesound.org)
* "Small Group Laugh.wav" by TimKahn of [Freesound.org](https://Freesound.org)

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode 189 of the weekly Google Cloud Platform podcast. I'm Mark, and I'm here with my colleague John. Hey, John." >}}

JOHN: How's it going? 

MARK: How are you doing today? 

JOHN: I'm doing pretty well. Had a lot of fun playing video games over the / and I'm having a lot of fun getting ready for a lot of conferences I'll be speaking at. 

MARK: Oh, yeah? Which conferences are you speaking at? 

JOHN: Yeah, I'll be at PAX. And I'll also be speaking at another game summit somewhere at Google. 

MARK: Oh, yeah? Like a little internal game summit where we talk about some of the plants that we're working on for gaming as a whole. 

JOHN: Yep, that's exactly it. 

MARK: Well, that sounds super exciting. It sounds like you're keeping pretty busy. 

JOHN: Yeah. I am hoping to get accepted to our internal talks. That is what I'm preparing for as well. 

MARK: Oh, that's exciting. Can you share a little bit about what you want to talk about? 

JOHN: This one's going to be a little bit more cross-functional trying to appeal to teams to start working on the solutions that will help improve the gaming space for the community as opposed to creating the tools that are necessary to make games easier for developers. So this one's a little bit more for the community. 

MARK: Awesome. Well, I think we have a little bit of gaming content coming up. Speaking of which, we do want to get into our cool things of the week. But first, I'm super excited for our episode today, because we'll actually be talking with Alim from NetApp and Dean from Google about how file storage exists in the cloud, what that means, why it's important, and what NetApp is bringing to Google Cloud for people who want to take their cloud environments and map up with that enterprise file storage. 

JOHN: Right. And it's a little bit more of a shift from on prem stuff to being in the cloud, so they touch on that quite a bit. 

MARK: Absolutely. We also have our question of the week. 

JOHN: Which is, how do I authenticate my Google Kubernetes engine cluster in a CI/CD pipeline. So, Mark, you'll talk a little bit about that I'm assuming. 

MARK: Yeah. Don't worry. I got this one. Now before we get into those, why don't we talk about our cool things of the week? 

[MUSIC PLAYING] 

JOHN: Definitely. So we're going to start off with something that has come out of a project that one of our podcasts hosts, Mark Mandel, has been working on, which is Agones, which is an open source project that runs a Kubernetes, essentially a game server orchestrator. And the product that has now come out that is a fully managed offering of Agones is Google Cloud Game Servers, which we're really excited about. I've been hearing about this since I joined Google, and I knew the roadmap for it. And it's excited to really see it come into being available for our developer communities. 

MARK: Yeah, I mean, for people who have been listening to the podcast for a while, I'm sure you've probably heard Mark talk about Agones one or two or 3,000 times. But it's so awesome to see. Mark has been working on this for quite a while. And now, it's a Google Cloud product that's going to be offered. So you can check out the link for more information. 

But it's just phenomenal to think about all the work that he put into it. Now it's not just Mark. It's a small group of people who are just working on building that out. It's just so great to see. So huge congrats to Mark for getting it out there. And I think a lot of people are super, super interested in it. 

JOHN: Yeah. Like you said, you can follow the link, and you can sign up for an Alpha for right now. But if you really get your hands dirty with it currently, you can always just take a look at the Agones open source project at Agones.dev. You'll get all the information you need there including all of the links to the GitHub repo and any other information to get you started. 

MARK: Yeah. So you can implement it yourself, or you can use the service that's coming up. 

JOHN: Right. 

MARK: Speaking of the service that's going up there, we're talking a little bit with NetApp later. But we've also got a partnership coming out with VMware. And VMware has a huge stack of different technology that gets used when you're in that VM environment. So it's really cool to see a partnership between Google Cloud and VMware, because now it's going to be a little bit easier to take your existing stacks or some of the older stacks that you have around and run them on Google Cloud. So not only do we get the benefit of the partnership bringing new technologies to the table, it also makes it a lot easier to take some of the older technologies and host them in a more elastic and scalable way. 

JOHN: Right. I remember using VMware for the first time as a college student. I will say that it's kind of interesting to see the shift now towards Google Cloud. And I'm really going to take a look at that blog post that talks more about this partnership. 

MARK: Yeah, it's super cool to see. And I think before the end of the year, they'll have on the GCP Marketplace, they'll have the VMware software defined data center. So you can actually spin up your cloud version of your WMware environment and start putting your tools on that. 

JOHN: And to close things off for cool things of the week, it's something from me. I've written a blog post called Using GCP NuGet packages in Unity. So a while back, question of the week on how do we get our GCP NuGet packages working in Unity? And now I've actually written a blog post that details all the steps and has pictures that move so you can actually see it happening. 

MARK: Pictures that move? That's too fancy. 

JOHN: Yeah. I don't want to call it a GIF. Because next thing you know, I'm going to get comments like, it's called GIF. 

MARK: Oh, come on. I think that we can, first of all, all agree that it's GIF and that there is no exception to that rule. 

SPEAKER: Choosy mothers always choose Jif. 

MARK: But more importantly, I think it's the content of the blog post that matters, right? 

JOHN: That's exactly it. And the cool thing about it is that it is, I guess like say, a predecessor for all of the blog posts I've been working on. It centralizes in using a lot of our technologies to help developers do really cool things. So this is where I actually started off, making sure that I can use these packages without having to do REST calls or gRPC, which may be a little bit overwhelming for people. So I'm just glad to put this out in the community. Hopefully they find it very useful and many, many, many blog posts will come following this. 

MARK: Super cool. And thanks so much for sharing it, John. Well, I think we've got plenty of cool things. So why don't we step into our main interview with Alim and Dean. 

JOHN: On today's episode, we are joined by Dean Hildebrand and Alim Karim. I'll let you guys introduce yourselves. 

DEAN: Thanks, yeah. My name is Dean Hildebrand. I'm a technical director in the office of the CTO here at Google Cloud. 

ALIM: Hi, everyone. Thanks for having us on. My name is Alim Karim. I'm a product manager at NetApp, and I cover our cloud volume service for GCP service. 

MARK: OK, well to get things kicked off, I'd love to hear a little bit more about NetApp, right? This is a name that I think a lot of people have stumbled across and is obviously very prolific. But what exactly would you say NetApp does? 

ALIM: So NetApp has been a pioneer, I would say, in the data management space for probably over 20 years now. And really our focus has been providing enterprise file services to a variety of different applications and industries. This has been traditional on premise environments. And so, we've had a very rich history of actually providing high performance storage for specific industries like health care, like oil and gas, like electronic design and automation to really help those specific customers develop the tool sets that they have in their industries to get their applications to run. And this is where the stability, performance, and data management are key tenants of how their applications work, and NetApp has provided that to them for, like I said, the better part of 20 years. 

JOHN: Awesome. So we're going to continue talking about the future. Can you tell us a little bit more about NetApp and Google and what that partnership is going to look like? 

ALIM: Yeah. So as I mentioned, all of these existing traditional workloads that we've been running for customers on premise, how we're extending that with a strategic partnership with Google that is centered around delivering those same capabilities consumable as a set of cloud native services in GCP. So basically first class, first citizen file service offerings in GCP using all of the same intellectual property data management stacks that customers are used to on prem natively in GCP. And the partnership really encompasses several different dimensions. There's the product side, which I just mentioned. That's Cloud Volumes service. But actually the core of the partnership is solving the core customer problems of bringing enterprise workloads into GCP as well as serving cloud native new workloads in Google. 

There is the engineering aspect on co-engineering the service together between NetApp and GCP. We, NetApp, bring the data plane intellectual property. And then Google collaborates us with the as a service delivery, the infrastructure pieces, platform integrations across Google console, metrics, billing, and operating at cloud scale. There's a go to market element to the partnership where we focus on sales and marketing alignment between both organizations and dedicated teams for specific accounts. 

And then finally, there's the support aspect, once the service is in GCP, how customers get support. Actually, Google Cloud takes first line support for the product. And then they escalate to NetApp if the need arises. So it's a complete offering across product, engineering, go to market support, all natively available in the Google Cloud Platform. 

MARK: What makes this file storage necessary? I mean, when I think of working directly in the cloud, you can have virtual machines. You can add on disks to those for storage. And then anything beyond that need, we have Google Cloud Storage, right? So you've been able to create buckets and dump files in there. That seems to be pretty comprehensive. What is it that those two aren't covering? 

DEAN: Yeah, so I joined, actually, exactly two years ago. This week is my Google anniversary. And-- 

MARK: Oh, congrats. 

DEAN: Thanks. Yeah, it's a nice coincidence. And ever since I joined, the number one thing we heard from enterprises was, we want to be able to port our applications into Google Cloud. What is the mechanism you're giving us to do so? And we heard this over and over and over again. And so, that was where the real genesis of the NetApp partnership started. 

But based on that, what the customers also said was, don't give me a solution where it looks like two products that have been mushed together, that you have a great platform with all the services and then there's this thing off to the side. What they wanted to see was native services or at least look native and they were supported in a native way, and they provided all of the same great features and availability and everything else that Google provides in its native services in any of the partnerships that we're building. And so, this is where we really got the two together. 

And so, why file storage, though? Why were they asking for it? And that's because that's the dominant storage on premise. And so, as part of the cloud, when we're talking to enterprises, they're like, well, this is what we have. We don't have an object store. We have file storage on prem. We have block storage. This is where our databases are running, our ERP systems. All of the critical systems that are running the enterprises, that's what they're running on. 

And so, over time, they might consider a modernization and thinking about how they can build in Google Cloud Storage in one way or the other. But in what they want to do in terms of leveraging the cloud and really making the most use of it, they just want to have the same high quality storage that NetApp is offering them on prem. And they want that in Google. 

And so, in the meantime, these applications, they've all been built for that trillion dollar on premise enterprise market. And that entire trillion dollar industry is not going to be rewritten in the next few years. And so, we really need to build partnerships with leaders in the space like NetApp that can provide all of the high quality durability and availability of the storage that they expect on prem and now in the could 

ALIM: And just to add a few more comments to that, right, so really, when you think about the enterprise space, to Dean's point, this is about an application ecosystem that supports business processes within an enterprise. And these are workloads that have typically not been candidates for cloud. And now we are essentially enabling customers to make that transition, so that they don't have to do data plane rearchitecture. That's point number one. 

Point number two is, hey, if you've got net new cloud user, as you said, you could spin up a VM. You can attach some disks to it. What do you typically do? You put a file system on those disks, right? And then you'd read and write data to it. And now you've got a VM and a PD that you've got to manage. 

Our point is if you're going to end up just putting a file system on this, why not just give you a file system that you can attach to your VM fully managed? And you can take it to any other VM without having to worry about taking snapshots of that PD and doing a whole bunch of other things that you would do to maintain that file system. Just get the service. It's the cloud. Get the service. 

DEAN: And there are some practical things too. It's interesting when people think about, well, we have Google Cloud Storage and all the amazing applications that are using it. But then they forget that when you boot a VM, you see a file system. And you log into that VM and you're still using a file system. And then the applications that you run, such as building your applications and the whole CI/CD pipeline that you might implement across for your organization, all using a file system. 

And so, I think we forget a lot of times that how pervasive file systems are in our daily lives and how we really need to make them a first class citizen inside of Google Cloud. 

MARK: Yeah, I mean, I think it goes to show you that all the layers of abstraction have really made you completely re-evaluate where you actually think about what you're trying to do, right? And when you have all of these virtual machines, which are themselves already heavily abstracted with all these managed services, you're so far away from the file system that I think, like you said, you just kind of forget about them. So you mentioned lift and shift a couple of times. That is a major component, right? Because these enterprise companies or these larger architectures that have been built based on existing file system solutions, they can move to the cloud using some of these solutions. What about people who aren't lifting and shifting but actually building new applications in the cloud? Is this still relevant? 

DEAN: Definitely. And part of that reason is that the basic fundamental about how we build and deliver services isn't changing even when they are developing new apps in the cloud. So we've talked to banks, for example, where they want to do new products and new development strictly inside of Google Cloud. When they're doing that process, they're not lifting and shifting existing applications. But they're still going through the same CI/CD pipeline that they would use somewhere else where they need file storage. 

They still need databases and other ways of managing their data which require low latency and the types of semantics that file systems offer in terms of managing those systems. And so, even though the applications aren't necessarily literally taken from the on prem into the cloud, the new ones that they write, there's fundamentally no reason why they would try to avoid file storage when, especially with NetApp, we can make it so easy to use that you kind of again sort of forget it's even there. 

ALIM: One last thing to add there, right? I think there's also a class of applications that we're seeing specifically in the analytics space where you've got n number of machines trying to do machine learning or something of that sort that use libraries that actually interact with a file share. So another data point that I usually like to point out is that Google has done a great job of making GitHub metadata publicly available on BigQuery. So if you just look at that data set and you look at the two big programming languages, Java and Python, as an example, and you look at all of the new code that's been written over the last two three years and look at Java and Python and see how many file calls those applications are making, it's over half. Over half of the source code files are actually making file I/O calls. And really, if you look a little bit more, it's mainly in this machine learning analytics space where they're using those libraries and interacting with data that's 
 on a file system. So there you go. File comes back. 

DEAN: And actually, I'll add to that that TensorFlow has two primary ways of accessing storage, through object storage and again back through on file. So even though there's many applications that are lifted shifted as well, one of those is in fact TensorFlow applications. And so, if people have developed their machine learning pipeline on premise, in many ways, when they move it down into the cloud, the shift over into object storage becomes a difficult move. And so then, they're again in a situation where you want to build a hybrid cloud with a common storage API across both on premise and in the cloud, again, back to file storage again. 

JOHN: You kind of caught me right off guard. I was really about to ask you a question about on prem. You got me there, Dean. 

DEAN: Ask it again. I'll reword it again. 

JOHN: Alim, you mentioned something that really caught my eye. And maybe this will help us transition a little segue about NetApp in the cloud. The file storage is pretty much managed to cloud. But what I'm curious about is, what is different about that in NetApp than on premise? And are there really pros and cons to it? And maybe Dean could also chime in and answer another one of my questions ahead of time. 

ALIM: That's a great question. So if you think about the environments Dean was mentioning previously on prem, there is a long amount of time and a large amount of effort to actually stand up a service that an application on premise could use, for example, file services specifically. What we're doing with cloud and why this is so different is that that same application owner that needs file storage for his app can get that in the cloud in GCP natively in a matter of seconds, minutes, let's say, for if you really click through the stuff. The time to consume is really, really short, right? So that's one key benefit. 

The second is this is now hitting on the aspect of it being a fully managed service, right? So if you contrast this with the traditional NetApp customers, they would essentially acquire software and systems that ran storage, then put them in a data center, then connect them to a network, then install application servers that talked to that infrastructure, and then, over a number of years, have to worry about expansion of capacity, patching that infrastructure, scaling that infrastructure, refreshing that infrastructure when it's capex life ran out. All of those things essentially go away from a managed service perspective, right? 

So in the managed service context, a application owner, developer, or whoever is using this in the cloud just gets that file endpoint without having to worry about any of those infrastructure burdens behind the scenes. And not only that is the entry point to using these becomes much more tangible. Instead of buying maybe a petabyte or two of capacity, you can just essentially use the service to provision a terabyte or even smaller units of capacity and just get going and just pay for that little piece that you need without having to worry about six months of installation and lead time right? So really minimizing the time it takes to get actual access to your storage and then, second, abstracting away all of the infrastructure or low value pieces that go into running the infrastructure is what the fully managed service provides. 

DEAN: I would just add to that, on premise, you would ask the administrator, OK, what is the SLO of your NetApp box or of your storage system? These are not typical questions that either are asked nor do they have the ability to answer. There is a lot of monitoring that is in place in the cloud that just isn't there on prem in terms of how they understand and how they think about delivering storage services. And I think that's really when we talk about the benefits of cloud and we talk about how the availability and how we keep things up and running and keep your business running in that way, the real shift, I think, to a managed storage service comes in the fact of now you are talking about SLOs and SLIs and how we maintain the uptime of these systems. And I think that really changes the conversation about how we think about storage and how we use storage. 

ALIM: My view is that, to your basic point, operating infrastructure and actually providing an application owner a guarantee is extremely hard, if not impossible, to do on premise, right? We are basically solving that problem by bringing the expertise of running a service between NetApp and Google, providing the SRE resources behind the scenes, so that we can guarantee those application owners in SLO and SLA for their particular application. And they, in turn, can pass that into the business process that they're supporting. 

MARK: Is that something that's relevant for a lot of non-enterprise customers? I mean, you mentioned earlier some examples of banks and other large financial institutions. I'd love to hear more about which enterprise customers this is relevant for. But on top of that, what about non-enterprise customers? 

ALIM: Let's take that, for example, for what we're seeing right now and then what it means for non-enterprise. So the adopters of the service have been in health care, oil and gas, electronic design, and automation, as I mentioned, retail. And they're really running critical business systems in there. And this is a core component of what they need to actually run those systems and approvals to run those systems in the cloud. 

But ultimately, back to the question of, do you need it if you're not an enterprise? This comes down to [? op time, ?] right? This comes down to availability and durability. And I have yet to meet an application owner or developer who says that those things are not important. 

DEAN: To build on that, predictability, I think, I would add in terms of how they're using and deploying cloud, right? And so, what customers want is a standard set of guarantees across the entire platform. And so, when you look at how we take the critical uptime of our Google Cloud Storage or BigQuery or any of the other services, file storage fits into that in the exact same way, right? It's running critical applications that all of these organizations, whether they're enterprises or they're not enterprises, are using to run their business. 

JOHN: Right. I would imagine that your non-enterprise and enterprise customers probably have faced some type of challenges there and away. I'm curious to know exactly what type of challenges they may have faced, and what have you learned along the way. What kind of changes did NetApp actually have to make to suit the needs of both your enterprise and non-enterprise customers. 

ALIM: We mentioned this notion of a managed service. And it's super easy to use. And you don't have to change too many things if you're an enterprise from an application perspective. But it isn't all sunshine and lollipops. Right? When you talk about enterprise use cases, you're talking about highly tuned infrastructure on premise that is made for eking out every second or every hour off a job completion where something like that is a key KPI for the business. 

You're also talking about high levels of security on requirements for encryption, key management, access controls, et cetera. So the biggest thing, I think, that we've had to deal together with between Google and NetApp, especially in the enterprise space, is, how do we then alleviate some of these design concerns? And how do we make the infrastructure optimized in the cloud? Not just about the data changes, but how are the compute engine, instances? How are the networks? How is even GCS configured to actually ultimately deliver the same or better output and performance that that customer is used to with that workload on premise. And then the same goes for security, across the board on encryption, on key management, on securing infrastructure with firewalls et cetera, et cetera. 

Really the challenge is if you look outside of the storage, right? And all of the things that are needed to actually get together to be plugged in to deliver that end ecosystem, that's where really the problem comes in. And it's not an insurmountable problem. But that's where due diligence and getting the right [INAUDIBLE] involved to architect those environments comes in. 

DEAN: So one of the things I would say broadly around the use of just generally a file storage inside of Google Cloud is, I really do believe that we're bringing this old technology to the next generation of users and application developers. And so, one of the questions that I've seen come up is, well, what are the semantics? And why did my file get created or not get created? And what is this thing called NFS? Is this a new protocol? I think some people aren't even aware of the 40 year history that goes back within NFS. 

And that, to me, is awesome. Because this is the entire point of what we're trying to deliver here is to make NFS-based storage and with SMB and all of the different access file protocols that we'll use, we'll make them easy to use and consume inside the cloud. And so then this next generation of users that really isn't that familiar with the intricacies of those protocols, they will get to know them over time just like they got to know how Google Cloud Storage works and how the semantics works there when you're accessing buckets from around the world. So I think it really is, in many ways, a good problem to have that there are lots of questions around how this works and operates in the cloud, because I think that just shows that we've made it easy enough to use and consume that the barrier to its adoption is coming down. 

MARK: And it sounds like that's, I mean, we were kind of talking about that earlier, but that's a really common scenario for the cloud, right? Take away a lot of the not necessarily difficulties but a lot of the details that you generally don't care about because they're not relevant to what you're trying to do and just use that service for a simple way of handling, oh look, I need files. It doesn't matter how they're stored. It doesn't matter how they're there. I want one point to go connect to it. Give me the file. 

DEAN: Exactly. 

MARK: So with that being said, what is currently available right now for people who are using GCP to go use with NetApp? 

ALIM: So we just announced beta availability of our service. And again, given all of the integration work that we've done between NetApp and Google, this is now discoverable in the Cloud console itself. So if you look at the menu section of the Cloud console, if you scroll all the way to the bottom, you will see a icon that says Cloud Volumes under Partner Solutions. You click on that. And basically, that'll start your journey to be able to use file in Google Cloud. And as I said, a few minutes, and you'll have a Cloud Volume, which is a NFS or SMB end point ready to go. 

MARK: And so, what's next? Right now, people can go on there, they can beta it up, and try it out. What's upcoming? 

ALIM: Yeah, so the key thing for us, obviously, from a product milestone perspective is to get to general availability. And we're planning that in the next few months. So we're not that far away. Again, for those familiar of building services in the cloud, we just have to make the underlying SLO, SLA monitoring, and all of that solid, make that all good and be able to be the SRE workflows and stuff all plugged in. Once we get to that state, we're good to go from a GA perspective. 

And then past GA, we're going to be adding some key features that, again, are key to these enterprise workloads, right? For example, if you've got a Cloud Volume in one region, you've got a Cloud Volume in another region, that's your DR region, how do you efficiently replicate data between the two so that you can have this for not just data repurposing but for DR? And so, if you think about applications like SAP and other ERP type things, they really need this critical capability. So not only that, we've got a healthy road map after the GA point. 

DEAN: So what I'm really excited about is as we take this service forward is with the multi cloud and hybrid cloud capabilities that Google is delivering with Anthos and other Kubernetes platforms, that really is exciting to see how we can plug in NetApp to provide a common data plane across all of the customers' workloads and really provide, again, that one common pane of glass for management across their on premise systems and Google Cloud and even in other cloud environments. 

MARK: Yeah, I think it's great because it fits in very well with this need to be able to run things across environments. But it's also really cool to see that Google is partnering with these companies to offer managed solutions that, like you said, are integrated into the Google environment, right? So Google has a history of building a lot of things, but that's also a lot of things. It's a lot to manage. And so, it's really cool to see a very concrete example of how Google can team up with partners to still integrate solutions but still have that in the Google experience. 

ALIM: Yeah, and that was one of the key things we heard from customers prior to building the service, right, is they wanted to consume the data management capabilities that we have to offer from a NetApp perspective, but they wanted that service experience and ecosystem integration to be fully native. They didn't want, as Dean pointed out early on, they didn't want a sidecar, right? Here's your GCP environment, and then here's your parallel NetApp environment. No. They wanted it all together not just look and feel, but also, as we mentioned, support, billing, operations, capacity management. All of that is one pane of glass that Google and NetApp managed together to deliver that seamless experience. 

DEAN: And one thing I don't think we've talked about yet is how close this partnership is in terms of in order to really make it a success. I don't think this is something that we could achieve just on paper and/or in like a weekly meeting at some point, right? This is really, again, about developers working together, about sales teams working together, and really about just bringing the two companies together to provide a solution for customers that they're really looking for. And that comes with all of the same team building and bonding exercises that you would do. Even within a single team, we've been trying to do across companies to really, again, make this seem like a company is not dealing with two different companies. They're really dealing with one solution and a team that's working together to provide support for that solution. 

JOHN: Awesome. And we're running a little short on time. So right before we let you guys go, I'm wondering, is there anything that we might have missed that you want to cover or add a little extra flair onto NetApp right before we part ways? 

MARK: Other than the open invitation for people to hammer on that beta, right? 

ALIM: I would say that there are some key announcements that we're going to do over the course of the next quarter or so. So I would ask people to stay tuned about those. And the item that Dean mentioned around the hybrid cloud story and being able to integrate with Anthos, that is something that we are very excited and working towards. So stay tuned for those. 

JOHN: Awesome. What's next for NetApp? Are you going to be at any upcoming events or making appearances? I assume that you are considering that you're going to make a couple announcements later on. 

ALIM: Yes. So we'll be, obviously, at the summits as they happen. We have a presence in the Tokyo event that's happening right now, Next Tokyo. And then we will be at Next London as well. 

DEAN: And then Next San Francisco, Alim, I believe your booth had a challenge on how fast you could provision a Cloud Volume. Will we be seeing that again? 

ALIM: It was a very popular contest too. We'll have to redo it with some improvements. 

MARK: Awesome. Well, thanks, everybody, and thanks for coming on and telling us a little bit more about why NetApp is so relevant and some of the hopefully cool things coming up in the next few months. 

ALIM: Thank you. 

DEAN: Yeah. Thanks for having us. 

JOHN: Well, thank you to Alim and Dean for joining us in this episode of the podcast. It was really interesting to hear about file storage in the cloud and why it's important and what NetApp is really bringing for our developers in the community. 

MARK: You know, it's fascinating because it's just not something people think about or at least a lot of people don't need to think about like the specific connectors that you get into it. And I think Dean kind of brought that up in straight away from getting too technical. But you don't think about the actual protocols that you're connecting to the files with. And a lot of that's been so abstracted away. So it is kind of cool to see, obviously, that layer of abstraction exists because companies like NetApp and other cloud services make it easy. But there's clearly a lot of work that still needs to be done to make sure everything works and that developers can just kind of ignore it and just move on with what they need, which is, I need files. Give me the files. 

JOHN: Right. And it's great to know that NetApp is actually working to solve this issue. 

MARK: Yeah. So it's super cool. And I think that getting access to that in the cloud will be hopefully coming up soon or at least the beta will be. 

JOHN: So, Mark, let's just jump into our question of the week. 

[MUSIC PLAYING] 

How do I authenticate my Google Kubernetes Engine Cluster in a CI/CD pipeline? 

MARK: Right. So I mean, this is a very common part of hooking up Kubernetes to CI/CD. Because usually when you're doing this, you're using a headless environment where you don't necessarily have the same set of tools or you're running on a very small box or any number of things that you don't have your full environment set up for. And you could spin up the G Cloud environment and authenticate that way, so the G Cloud off command, which I think is what a lot of people do from their local environments. 

But when you're running this, especially in a CI/CD case with your Kubernetes Engine needing to authenticate every time you push up a new build, you don't really want to have to configure your environment every time or have a lot of requirements for it. So there's this great blog post from [? Ahmet ?] talking about the easiest solution here, which is to create a kubeconfig file that includes the authentication. And this is something that you can basically check into your repo. It's got the current information for your master in there or your cluster. And then you, as a secret, provide the service account. 

So you create a service account. You get the secret key file. You treat that like a secret because it's, well, a secret. And then in your kubeconfig file, you actually have the authentication against your cluster. That will actually use the environment variables to pull that authentication. 

So this gives you a little bit more flexibility in, for example, your CI/CD pipeline. Because now, wherever you're actually running that build, you don't need to install G Cloud. You don't need to go through any steps. You just need to have this very, very short snippet for the kubeconfig file and then your, obviously, your secret config file for the actual authentication. So check out the blog post. I think it's really quick, really simple. And for anyone who is figuring out how to build their pipeline with containers, this will probably make that process just a little quicker. 

JOHN: That was really interesting. I'm probably going to read this, because I'm going to take a little bit from this and try to help me when I'm trying to authenticate a lot of the services that I'm using for the demos that I'm building for games. So I think there might be a little overlap. So I might take a good look at this. 

MARK: Yeah, take a look. I think it's super cool. And it just shows you that there's a lot of different ways to solve different problems. But you do want to think about, especially as you're building out a scalable pipeline, like, what factors do I not want to have, right? I don't want to necessarily depend on having G Cloud all the time. 

JOHN: Right. 

MARK: So very, very cool. So, John, before we wrap up here, where are you going to be? What are you doing? What's good? 

JOHN: So I won't be a PAX Dev, going to be speaking with one of our teammates, [INAUDIBLE] who is a DPE who also works in games. And that's going to be our talk on universal communication and its benefits in games. Really cool stuff. I'm going to be at the internal Google Game Summit. Whether I'm speaking or not, I will be there, because it's always fun and a great space to collaborate with everyone. 

And then I'm going to take a little bit of personal travel. I'm going to be going to Montreal. I'm going to be taking my brother out for a fun trip. He's getting married, my twin brother, so I'm really excited for that too because I've never been to Canada. 

MARK: Oh, that's awesome. Yeah. I was just up there two months ago not on the Montreal side but not too far. And it was just gorgeous, gorgeous summer. So I'm sure that'll be a lot of fun for you. 

JOHN: Right. So where are you going to be, Mark? 

MARK: Oh, well, you know, I'm going to Austin this week or next week. And then after that, it's really going to be coming back to the Bay Area and sitting back to the grindstone, getting a few videos out the door. I'm super excited because I think just after this airs, the next season of Stack Doctor is going to come out. And that's with our customer engineer Yuri Grinshteyn that we've been working on this one for a little while. But he talks more about some different ways to integrate custom metrics and monitoring into Kubernetes clusters. So I think this will be content that's really helpful for people, especially when it looks at how do you take GKE and add on my custom monitoring and logging. So super excited to hear that content coming out and glad that all the work has gone into it. And then it'll be on to the next season. 

JOHN: Sounds awesome. And congratulations on another season. 

MARK: Yeah, absolutely. Thanks so much. 

JOHN: Well, we would like to thank you all for joining us on this episode of the podcast and hope to see you all next week. See you, Mark. 

MARK: Sounds good. See you, John. 

[MUSIC PLAYING] 

DEAN: OK, sorry. Let me-- I was going to use the word synergy. And the last thing I ever want to do is get recorded using the word synergy. 

MARK: So, Dean, tell me about the synergy that you have. What I think we need is a lot of B2C2B synergy between our applications and our workflows. 

[APPLAUSE]