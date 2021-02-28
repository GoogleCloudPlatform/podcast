+++
audioDuration = "00:40:59"
audioFile = "Google.Cloud.Platform.Podcast.Episode.248.mp3"
audioSize = 58939951
categories = ["Cloud Spanner", "Database"]
date = "2021-02-24"
description = "Mark Mirchandani and Stephanie Wong are back this week as we learn about all the new things happening with Google Cloud Spanner."
draft = false
episodeNumber = 248
hosts = ["Mark Mirchandani", "Stephanie Wong"]
title = "Cloud Spanner Revisited with Dilraj Kaur and Christoph Bussler"
image="/post/episode-248-cloud-spanner-revisited-with-dilraj-kaur-and-christoph-bussler/images/hero/hero-EP-248.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/lrjexy/episode_248_cloud_spanner_revisited_with_dilraj/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Mark Mirchandani](https://twitter.com/markmirch) and [Stephanie Wong](https://twitter.com/stephr_wong) are back this week as we learn about all the new things happening with Google Cloud Spanner. Our guests this week, Dilraj Kaur and Christoph Bussler, describe Cloud Spanner as a fully managed relational database that boasts unlimited scaling and advanced consistency and availability. 

Unlimited scaling truly means unlimited, and Chris explains why Cloud Spanner offers this feature and how it's making database design and development easier. Dilraj and Chris tell us all about the cool new features Spanner has developed, like generated columns and foreign keys, and how customer needs influenced these developments. Chris walks us through the process of using some of these new features, including how developers can monitor their database systems.

Managed backups and multi-region configuration are additional recent additions to Cloud Spanner, and our guests explain how these are used by current enterprise clients. Dilraj and Chris explain the automatically managed features of Spanner versus the customer managed features and how people set up and manage database projects. We hear examples of companies using Cloud Spanner and how it has improved their businesses. 

##### Dilraj Kaur
Dilraj Kaur is an Enterprise Customer Engineer with specialization in Data Management. She has been with Google for about 2.5 years and is based in Atlanta.

##### Christoph Bussler
As a Solutions Architect Chris is focusing on databases, data migration and data integration in enterprise customer settings. See his professional work and background on his [website](http://real-programmer.com).

##### Cool things of the week

* New to Google Cloud? Here are a few free trainings to help you get started [blog](https://cloud.google.com/blog/topics/training-certifications/free-resources-to-help-you-get-started-with-google-cloud) 
     * Start your skills challenge today [site](https://inthecloud.withgoogle.com/google-cloud-skills/register.html)
* Service Directory is generally available: Simplify your service inventory [blog](https://cloud.google.com/blog/products/networking/service-directory-is-ga-and-adds-automatic-service-registration)

##### Interview

* Google Cloud Spanner [site](https://cloud.google.com/spanner) 
* GCP Podcast Episode 62: Cloud Spanner with Deepti Srivastava [podcast](https://www.gcppodcast.com/post/episode-62-cloud-spanner-with-deepti-srivastava/)
* Using the Cloud Spanner Emulator [docs](https://cloud.google.com/spanner/docs/emulator)
* Cloud Spanner Ecosystem [site](https://cloudspannerecosystem.dev/)
* Cloud Spanner Qwiklabs [site](https://www.qwiklabs.com/catalog?keywords=cloud%20spanner)
* Google Cloud Platform Community On Slack [site](https://googlecloud-community.slack.com/archives/C49R7DSTH)
* Creating and managing generated columns [docs](https://cloud.google.com/spanner/docs/generated-column/how-to)
* WITH Clause [docs](https://cloud.google.com/spanner/docs/query-syntax?hl=en#with-clause)
* Foreign Keys [docs](https://cloud.google.com/spanner/docs/foreign-keys/overview?hl=en)
* Numeric Data Type [docs](https://cloud.google.com/spanner/docs/data-types?hl=en#numeric_type)
* Information schema [docs](https://cloud.google.com/spanner/docs/information-schema)
* Overview of introspection tools [docs](https://cloud.google.com/spanner/docs/introspection)
* Backup and Restore [docs](https://cloud.google.com/spanner/docs/backup)
* Multi-region configurations [docs](https://cloud.google.com/spanner/docs/instances#configs-multi-region)
* ShareChat: Building a scalable data-driven social network for non-English speakers globally [site](https://cloud.google.com/customers/sharechat)
* Blockchain.com: Streamlining infrastructure for the world's most dynamic financial market [site](https://cloud.google.com/customers/blockchain)
* What is Cloud Spanner? [video](https://www.youtube.com/watch?v=bUSU1e9j8wc)

##### What's something cool you're working on?

Mark has been working on budgeting blog posts, including [Protect your Google Cloud spending with budgets](https://cloud.google.com/blog/topics/developers-practitioners/protect-your-google-cloud-spending-budgets).

Stephanie is working on her [data center animation series](https://www.youtube.com/watch?v=Amow8BJm5Go)

{{< transcript "[MUSIC PLAYING] MARK: Hey there, everybody, and welcome to episode 248 of the weekly Google Cloud Platform Podcast. I'm Mark Mirchandani, and today, we're here with Stephanie Wong. Hey, Steph, how are you doing?" >}} 

STEPHANIE: Hey. I'm good. I am back and feeling good. 

MARK: That's awesome. And of course, we have a great episode for you to come back to. Stephanie, can you tell us who we're going to be talking to today? 

STEPHANIE: Yes. So we are talking to Dilraj, who's a customer engineer, and Chris, who is the solutions architect, about Cloud Spanner. What has changed since the last time we've had Spanner on the show, and what to think about when using Spanner in production? 

MARK: Yeah. It's awesome. And we actually had a conversation on Spanner, yeesh, probably about three, four years ago back when Cloud Spanner launched for the first time. So we get to catch up on all the cool things that have changed since then. Obviously, there's a ton of new features. But we also get to talk a little bit about what customers can think about when they're putting Spanner into production. 

STEPHANIE: Yes. But before we get to that, we got the Cool Thing of the Week. 

[MUSIC PLAYING] 

MARK: Absolutely. So I'll go first. And today, I want to link to a really cool blog post, specifically, because it links to free training, and "free" is my favorite word because I am cheap. And free training is obviously always a great option for learning different things about Cloud. There's so much to learn. This is a free training specifically for getting onboarded with Cloud in general, which I mean, there's so much to learn. I feel like every time they do one of these getting started, there's always new stuff in there. 

STEPHANIE: Yeah. 

MARK: But specifically, I want to call attention to the skills challenge. So this is another free training offer, where you can take a bunch of free quick labs, quests, which is a bunch of labs. And then the one I'm really excited about is this new one on Kubernetes. And so part of the Kubernetes skill challenge is the GKE cost optimization. So we did some videos about what to think about on Google Kubernetes Engine and how to keep your costs in mind as you're designing and you're developing your applications there. And we've also put together this quest for it. 

So there's a couple of videos on YouTube-- we'll link out to those-- and then there's this free opportunity to take these labs, take the challenge at the end, do the skill badge, you have that. And we also had a great episode probably late last year about skill badges and some of the certification offerings as well. So it's always cool to see free offerings for this. And I highly recommend people to go check it out and then just pick the area you're interested in learning more about. 

STEPHANIE: Thanks, Mark. It's always exciting to see your stuff that you've worked on out in the wild. So my cool thing is not quite as free, but I think it's just as exciting. We have something called Service Directory that has just gone out as generally available. So if you don't know what that is, as you know, applications are adopting more and more services every day. And so being able to resolve the location of those services gets more difficult as the endpoints of them change. You also have services deployed across hybrid environments that are presenting more obstacles. There's differences in naming systems, and resolving and connecting services can be hard. 

So Service Directory is a single place to publish, discover, and connect to services in a consistent and reliable way, regardless of if they're in Google Cloud, multicloud, or on-premises. And it's all fully managed. You can scale up to thousands of services and endpoints per single project. And you get a bunch of other cool features like human-friendly service naming, you can enrich service data with additional properties, and resolve services from a bunch of different clients. So pretty cool. 

MARK: Yeah. I think that's awesome. And if you're going to work in an environment that just has tons of different applications that are deployed over tons of different surfaces, being able to have a centralized view, that's amazing. Want to get a chance to play around with this and see what it actually does. 

STEPHANIE: Yep. Definitely check that link out in the description. 

MARK: All righty, then. Well, with our cool things out of the way, why don't we go ahead and jump in to our main interview with Dilraj and Chris. 

[MUSIC PLAYING] 

Dilraj and Chris, thank you so much for joining. To get things started, can you introduce yourselves and tell us a little bit more about what you do. 

DILRAJ: Sure. Hey, Mark. I'm Dilraj, Dilraj Kaur from Atlanta. I'm a customer engineer. Been with Google for about two and a half years, and mostly spend my time on the data side of things. 

CHRIS: Hi. My name is Chris. I'm a solutions architect, West Coast, and I am focusing on database, database migrations. Spanner is one of those databases I talk to large working customers a lot. So that's me. 

STEPHANIE: Sweet. Well, so today we're going to be talking all things Cloud Spanner, which we've referenced in previous episodes before. But we're excited to talk about it because both of you have been working on the daily with customers and working with the product on it. So what's your experience been with Cloud Spanner, and what is it? 

DILRAJ: Yeah. So great question. Cloud Spanner is a fully managed, relational, geographically distributed database that offers unlimited scale, strong consistency, and up to five 9s of availability. So I know I said a lot of things there-- fully managed, relational, et cetera, et cetera. So I'll have Chris expand on some of those topics. 

CHRIS: Yeah. So Spanner is not your regular database, regular database out there. It has very specific design points, especially using the technology base that we have in Google Cloud. A few aspects-- one, it's a fully ANSI SQL compliant. From a database viewpoint, a relational database system, you have table structures; you have indices; you have secret views, whatnot. So from a client perspective, it looks like a relational database. So no question there. 

However, from a design perspective, one design point was unlimited scale. And I know this sounds really, really a strong statement, but unlimited really means unlimited, because from a design perspective, you can add capacity to it forever. And "forever" means until you run out of everything you have in Google Cloud. So it really was a design point. So if you don't know what your load is going to be going forward, Spanner will always support you every step along the way. And we have databases that have petabytes of data. 

Another design point was that it being distributed at the same time while being able to scale, it maintains total consistency in your transactions. So as the second design point, it's like no matter how this view, how big your database is, consistency is number one priority. 

And the third last point I want to make here is that we have an extreme strong SLAs. Dilraj mentioned five 9s. Five 9s means that downtime is a few minutes a year, total, despite any network failures or storage failures or CPU failures. And this means that you are up and running all the time, and it's all managed. You don't have to do anything for getting that SLA to you. 

MARK: And so I think that's really the most interesting part of this, because if we break it down, we've got a lot of relational databases that exist out there-- and I'm sure a lot of companies are familiar with relational databases-- and then you add this management layer on top of it. And that's great. Managed databases are obviously preferable for some people who don't want to have to worry about managing the uptime themselves, and that rolls in with the five 9s. 

But then you've got this scalable thing. And scalable and relational databases have had a weird history with each other, because when you have to think about taking an old-school-- or 10, 20 years ago, thinking about a relational database and trying to either shard it across multiple areas or break it apart, it's a lot of work. So Spanner is something that's just so cool and so interesting. Tell us a little bit more about the scaling aspect of it 

CHRIS: Yeah. So when you talk about the difficulty of the other data pieces, you fundamentally see that they were built without the scaling aspect in mind. So when, all of a sudden, you had to scale, you are working in a system that wasn't designed for scale at that size, what you're talking about. And this is where the work comes in and the difficulty and then the headache. 

Spanner, from day one, was designed like that. So in a particular way, we at Google Cloud have this underlying storage system. We have the underlying processing system that is massively distributed. So if you want to map anything down to that, you are forced to think about distribution. And all your algorithms are, from day one, executing into a distributed environment. 

So in Spanner, when you want to have more capacity, you add capacity to the system, which doesn't necessarily move down to adding another hardware box or another disk. It means you're adding capacity, and that capacity is distributed. And so we can distribute forever because we have this massive data centers that have many distributed nodes. From day one, it was designed to be able to add capacity. And so when you do the performance testing, you see linearity in that, and that's the really nice part. So if you double the capacity, you actually have doubled the capacity. You're not having this curve that all of a sudden tapers off. It really is linear scaling. And you can try this out. 

STEPHANIE: Yeah. That's amazing because I've heard of this CAP theorem. The idea that distributed data stores cannot have two, at least simultaneously, of consistency, availability, and partition tolerance. So it sounds like even at the logical layer, we've been able to even surpass that ability to have all three of those. 

CHRIS: Yeah. And it looks like we have all three of them, but not really. But because of our infrastructure, we can work around what the CAP theorem is not talking about. So for example, if CAP theorem talks about there's the possibility of a network partition-- and of course, we can have network partitions, but we at Google Cloud have many network entry points in our data center. 

So if one network partition is down, it doesn't partition the whole system. It only partitions part of the system, and the other part keeps working. And this is the way how the CAP theorem can be, from a system perspective, improved. And that's what the design point of Spanner was. So if a data center goes down, if the network to a data center goes down, but there's the other one that's still up and running with its independent network connectivity. And therefore, the CAP theorem is intact. It's just now in a different data center, so to speak. 

MARK: Probably a couple of years ago where we talked about Spanner back when it was introduced, and I'm sure a ton of things have changed. So I want to hear, especially from you two who have worked a lot with the customers who are obviously building things on Spanners, what are some of the cool features that people are interested in? 

DILRAJ: Right. Yeah. So a lot has changed. For example, we came out with something called generated columns. And generated columns are something that allow you to compute from other columns in a row. We launched check constraints. We launched something called interleaving tables. So interleaving tables is an optimization technique which essentially allows you to define something called a parent-child relationship and helps you physically collate its data. 

Another thing is the locking mechanism. So our locking mechanism is essentially very different from a traditional relational database system, where it's designed for maximum throughput. So for example, in our case, the locking granularity at the cell level versus in traditional [INAUDIBLE] it is at the row level. 

Then there's BitClause, we came up with foreign keys, numeric data type. We launched a bunch of regional and multiregional instances. Yeah, those are some of the cool features that we came out. 

STEPHANIE: Awesome, yeah. I mean, thinking about all of these features that we're accelerating on this year, what is linking them all? I mean, it sounds like it's performance and increasing query performance, availability, things of that nature. 

CHRIS: Yeah, so we see a trend going on where we have more and more sophisticated customers are coming our way on the cloud. And with the customer sophistication comes a huge knowledge base they have. So they know what they want. They know what they need. They were building systems for many, many years. And with that demand, that sophistication, comes, of course, the request for features. And so what we see with all these features is that we are targeting towards the high-end, sophisticated database user. 

So the Spanner team is really super careful listening to what enterprise customers-- and enterprise customers are the term for the high-end, sophisticated customers-- what enterprise customers want, what they need in order to build their performing applications on top of a system like Spanner. And so they're prioritizing these enterprise features over the cool engineering stuff we need to support our customers. And so this is what the focus is, and this what all the features are all about. It's all about supporting the enterprise space. 

MARK: Yeah, and I'm sure that these are the types of customers who, like you said, are coming up with these really novel use cases because they have very specific needs. And whether that's going to be some of these features that are added or, of course, some of these regions that are added that's part of the whole scalability idea, it totally makes sense that we'd be working on specific features to help them out. 

One thing I'm curious about is what about the monitoring side of things? Like said, Chris, you can add an additional node to Spanner. What does that mean when that happens? And then how do you have kind of a visibility on the entire Spanner, I guess, "instance," quote/unquote? 

CHRIS: Yeah, so from a terminology viewpoint, in Spanner, when you start a span, you create an instance, and the instance is a container, so to speak. And a container, an instance, you say has that capacity. If you say, for example, a container or an instance has, like, 10 terabytes. And in that instance, then, you create many databases. And they share the 10 terabytes. 

And the 10 terabytes are actually a unit of capacity. And the additional units are 2 terabytes. So a 10-terabyte instance has 5 nodes of capacity. And so if you add another 5 nodes, then you go for 10 to 20 terabytes. Now, as soon as you add capacity to Spanner instance, then each of the databases in the instance has more capacity available and can do faster, more throughput, can store more data because capacity is divided up in more processing throughput as well as more storage. 

Now, on the monitoring side, you can see how many kind of capacity units nodes you have. So you see when you, let's say, go from 5 to 10, you see on the graph you go from 5 to 10 nodes. But at the same time, you can see that the CPU utilization drops because the same amount of processing going on now has more capacity available, so you see a drop in CPU load. Or another way around, if you have an increasing load, then you can track the increase with additional capacity to keep the CPU as a constant. 

So whatever you do to the instant scaling, upscaling, down, by adding or removing capacity, you can monitor on a storage level as well as secure latency level and the CPU level, on what's happening in the system. And so you can track precisely that each action of scaling, how that translates into the performance of the system overall. 

STEPHANIE: Wow, I didn't know that you could actually increase performance just by simply adding each step of a node and allowing there to be more processing capabilities in addition to the storage. I guess my other question about this is, is that something that you can control? I think you were mentioning that you can actually set your own cap to the amount of CPU utilization or maintain a constant amount for each node. 

CHRIS: Basically, when you are a customer, and you're running your workload, you have a good sense of how much load is going to be on the system throughout the year and then, over time, figure out you need, let's say, 10 nodes to have this number processing going on. And you have 10 nodes, and it's processing, it's always fine. 

Now, some of our customers have these peak periods along the way, like Friday or Christmas period. Now, they know that it's going to happen. They know there will be an increase. So they do an estimate on how many more requests are coming in. So often, customers say it's, like, twice or three times as many as the regular load. 

So now, here you have it. If you have, like, three times the requests coming in, then you probably increase your instance, like, three times to get to the same throughput. And so in Spanner, because you have control over it, you can pre-scale the system before you know the load is coming. And you have a fully-built-out system when the load actually comes. 

So once the customer figured out I need, like, three times the nodes, then you update one item on the UI, and then you have a system with three times the capacity, and you're all good to go. And that's kind of what people really like is because they not only increase the nodes and pay more, but afterwards, they can decrease capacity again and are back to normal. So all of a sudden, the peak period is a temporary cost increase, not a huge provision of more machines that are then idling afterwards in the traditional way, last-century style. So in that sense, this whole capacity business, while it sounds a bit complicated initially, it's really convenient because you do not have to provision machines. You really can do this dynamically. 

MARK: Yeah, it's a level of scale that I don't normally associate with a relational database just because of those challenges we kind of mentioned earlier. And it sounds really neat that obviously, you have a lot more control now. And hopefully, that really makes it a lot easier to deploy and then, as you mentioned, scale up and scale down for specific events. What about backup or disaster recovery? What does that look like in Spanner? 

DILRAJ: So we launched backups, I want to say, recently in 2020. So managed backups is one of the really highly requested features by our high-end, sophisticated, as Christopher likes to call it. And using that feature, what you can do is you can create backups on demand. And also, we store those backups to essentially provide protection against something called application errors or operator error and to avoid any sort of data corruption that might happen. 

So backups are also part of the fully managed capability of Spanner. They're highly available, encrypted. They can be retained for up to a year as to when they were started. And another thing to mention here is the multiregional configuration. So our enterprise customers are worried about in the event of a failure, how we recover our databases in case a failure happens, regional disruption in a data center, disruption, et cetera. So with multiregional configuration in Spanner, those are some of the things that we don't have to worry about anymore. That is taken care of by Spanner by default, by our SRE teams. So essentially, with the launch of more and more multiregional instances across the globe, essentially, number one, you have more HA; number two, you're able to host your workloads closer to the users, essentially proximal. 

CHRIS: Yeah, on the backup side, I want to call out an enterprise aspect to it since we talked about enterprise features before. So we said earlier that Spanner underlying has this massive distributed infrastructure. So when you take a backup in Spanner, the backup is actually taken in a distributed, concurrent fashion. So all the nodes have all the data available, and the backup is taken as a binary representation of the storage. 

Now, this sounds like really kind of down in the weeds. However, from a restore perspective, it becomes really relevant because if you restore a backup, you just switch to Spanner storage to the backup storage. And you have the first time to access in minutes, if not seconds. So when you ask the question, and enterprises ask the question, how fast is a restore happening, then in our case, it's extremely fast, because we don't have to get this massive file and re-enter all the data into the database. It's fundamentally the database is remounted to an existing storage layer that happened to be the backup. 

So here, you see like a backup is a backup. It's not a backup in the sense of a traditional backup. It's really like a different type of backup using our underlying distributed infrastructure. And with the enterprise in mind, the backups have to be available if you restore in no time at all. 

STEPHANIE: Yeah, wow. I mean, this brings up the concept of RTOs. And it makes me realize this must be something that Google has had to achieve on their own for our own distributed use case. Is it a mix between our use case over the last two decades, in addition to what enterprises have requested? 

CHRIS: So Google is an enterprise, right? And we are not getting [INAUDIBLE] here, but sophisticated as well. So when you implement a system like Gmail, or when you implement these systems where you have billions of users, I mean, you have a massive application running that requires uptime all the time. So Spanner was actually growing up in such an environment. 

So we knew firsthand what it takes to build such a system, because we have these requirements of always on. We have this requirement of having to survive failure without downtime, without losing data. We have that situation that if another billion users sign on email, I need to scale it twice. And this is like from petabytes to petabytes to petabytes. So we cannot really go back and think about it, how we would do the next billion users. We just simply need to turn them on. 

So basically, Spanner grew up in an enterprise, in a massive scale requirement. And so that benefit-- all the knowledge, all these requirements, all these insights-- we pass on as now a service to our customers outside Google Cloud to make them as available to them as it's to us. 

MARK: I like to believe that almost all of the cloud technology we have was really just stuff we invented to make Gmail work better. I'm sure that's actually not that far from the truth, considering how much scale infrastructure and how many of the teams that we have really are working on supporting these billion user applications, which it's just so funny to think about, especially when it comes to Spanner, and you're saying we have a customer who says, OK, great. I'm sold on Spanner, I like this idea, I like relational databases, and it works for my application, so I want to use Spanner. Where do I get started? 

I could go to Spanner, I can click a button, and then I've got a Spanner instance ready to go. What's next? How do I actually run this? 

DILRAJ: Right. And this comes up all the time. We talk to our enterprise customers in different verticals-- health care, retail-- and when we are doing feature discovery, when we're talking about POCs and what POCs have done, we've got the technical win. What's next? How do you actually implement it? And this comes up a lot. 

So I like to call that post-win phase operationalizing Spanner. And when you talk about how to operationalize it, there are two aspects to that. One, we like to call it the automatic aspect, things that are taken care of by Google, are fully managed, et cetera, et cetera. And then there's a mental aspect, which essentially are database engineers or DBAs where people have to be hands-on or be aware of the sorts of things that people have to kind of manage themselves. 

So automatic aspects, what is taken care of by Google essentially-- we say it's fully managed. We are the ones who implement the operating system upgrades. We are taking care of your allocation. We're taking care of your scaling when there is a compute requirement, software upgrades and patches. Like I mentioned with multiregional instances, there is the concept of HA and PR that's also handled by Google. So anything that failover and failback is essentially automatically managed by Google. 

Now, the aspects that the customer should be aware of and should take care, number one, is the initial instance creation. So when you're creating an instance in Spanner, how do you do it? What are the things that you have to think about? Like for example, what location to pick, which continent to pick, where are my users? How are my users distributed? How is my load distributed? 

What configuration to pick-- like for example, Spanner has single and multiregional instances. So is your application based in one region-- let's say West Coast or East Coast or Central-- or a region in Mumbai, India, let's say, or in Singapore? Or is it a global application with globally distributed users? And in that case, there are these multiregional configurations of Spanner that we would want you to take a look at. 

Then sizing, another super important-- so what is the size of the database that is currently today, and how is it going to scale? So Spanner today allows about 2 terabyte per node. And that is one of the things to note as far as the design goes when you are talking about how large a database is going to be and how it's going to grow. 

So if you have, let's say, 10 terabytes of data to start with, you at least those five nodes. Then you're creating that initial instance. And then your scaling requirements-- so when you are talking about the peak periods, how would you want to design your database and perform those scaling exercises so that, when needed, the database scales and is able to serve your traffic. So it's super important to also perform those scaling exercises in order to understand the behavior of the system. 

STEPHANIE: A lot of this boils down to ensuring that you can anticipate the load in various regions according to the requirements and the criteria of your application. When it comes to productionizing your database on Spanner, what are some things that you need to think about when you are doing ongoing provisioning and ongoing maintenance and monitoring? 

CHRIS: So the interesting part here is that in Spanner, you can create a database anywhere around the world without having to provision hardware. So you can try this out. You can do development and testing. You can really play with the system. You can create different databases in different parts of the world, different configurations, and you try it out. You start understanding your system and how it behaves. 

All this knowledge is very "easy," in quotes, to obtain because destroying or creating a database is just a matter of seconds. So it's really easy to try it out, get familiar with it, learn how the system behaves. And that's going to be the knowledge that you can capitalize on when you go into production. 

So once you go into production, playtime is over, and the serious business starts. And here, then, all of a sudden, the criteria, of course, change. You want to have a super stable system that has a stable latency, stable throughput. And you don't want to tinker with it too much. So all the learnings you had during development and testing come to pass here. 

So usually when you start the production, you don't put a full load on it. You put on 10%, 20% of the load because you want to do it stepwise, because that's always something that you haven't thought about, and you don't want to jeopardize the whole load from day one. So you start with 10%, 20%, overprovision the system. 

You're super careful, knowing that you can scale down. It doesn't matter if you overprovision because it's not hurting you. It would hurt you if you would have to stay at that level, but you don't. You can overprovision to be safe and then scale down over time as you learn. 

You can increase the load step by step. You can reduce the load again. And as you increase the load, you can observe your system by all these monitoring environments that we have, all these different monitoring metrics. So you fundamentally go from development into testing by increasing the load slowly but steadily, learning the system, and you'll get familiar with it. And that's nothing different than other databases you would use. 

Now, once you are comfortable running, then, of course, you have to turn your eye towards the future. And the peak periods are coming. And there always, I suggest to customers, simulate a peak period. Just scale up the thing in May, even that Black Friday is coming later that year, and scale down again to see what the system is actually doing without jeopardizing the load at that point in time. 

So for example, when you increase the load, Spanner has more to do. So if you increase the storage, Spanner now has more places to store the data, and it tries to optimize. So as you increase the capacity, Spanner makes use of it, but making use of it means that the load of the system internally increases a bit. So you need to get familiar with it so you're not freaking out if the line goes up just because you add a few nodes of capacity. 

Going into production means getting familiar with the production system. But then, of course, there's all the other aspects you worry about, the error that slips in with an application because some testing didn't work, so you want to have backups. Now, just taking backups isn't necessarily a good thing. You also have to know how to restore it. So you want to go through a backup restore cycle every now and then just to get familiar with it, to see how the timing behaves, to see what you can do, what you cannot do so that if you actually have to do a restore for real, you have it down cold and how that works. So it's really getting familiar with the steady state and then planning for the peak load. 

MARK: And it's been a long time since I've had to really look at the performance of databases. I have many, many hours and nights spent looking at slow query logs that I do not fondly look back on. But what does that even look like for something like Spanner? I mean, is there that level of logging, that level of metadata that you can look at? And what does that look like when you're in a long-run production state? 

CHRIS: In Spanner, you have many ways of looking at the performance and how the system operates. So one is Cloud Console. You have a graphical environment where you can just see what the system is doing. So, for example, you could see that latency goes up. And then if the latency goes up, so maybe this is just a normal thing because there was all of a sudden a spike in load. But maybe there was a bad query. 

So now you can go down into a per-query level. So we have statistics tables inside the database where you can query which queries are running, which are the longest running queries, and how long do they take on average. So you get first insight into what the queries that are in the system right now, what happened in the past. And so we have these different statistics. 

Now we have audit logs. In the audit logs, you have more detailed information. So there's different levels of details that you can get to when you run the system. And then API, you can actually switch on an execution plan, return on each query execution basis. So when you design your system, and you implement the queries and use the Spanner API, you might want to consider thinking about the debugging mode where you extract out in the running system what query operator trees look like, operation plans. 

So if you have this one query that is really hard to find out, you can switch that on, and then you can see for each query what happened. That might get you all the way figuring out which query it was. From looking from the outside for monitoring tools and logs, and then you can send looking from the inside by augmenting your application, increasing the logging and extracting out more information. 

STEPHANIE: And we were just talking about some of the exciting features that have been on the roadmap this year, including generated columns and interleaved tables. And much of this has been influenced by some of our larger customers that are using Spanner today. So I'd love to pivot and talk about some of our customer references that you're most excited about. 

DILRAJ: We always talk about the scale of data, the scale of Google, and the systems required to handle that scale. So Christoph already mentioned our internal Google tools. So Google Docs is one of them that we use internally and probably say that to the Spanner is battle tested because it is actually running Google Docs, which is our real-time collaboration platform. So the entire metadata for Google Docs is actually stored and runs on Cloud Spanner. 

Customers-wise, there are many, but the one that I think about, which was a recent migration, was ShareChat. So just give you a little info on what ShareChat is, so ShareChat is India's largest regional social media platform. And there are a few billion users and 60 million monthly active users in about 13 different languages. So when it came to them and the amount of scale, the amount of users, and the demand that ShareChat needed, Cloud Spanner was the only suitable option that was able to handle that much massive scale. 

So ShareChat, with the help of a partner called Cloud Cover, was able to migrate those 60 million users in five hours with no downtime. And this whole migration reduced their entire cost by 30%. So that was one of the popular migrations that happened recently. 

Another one is Blockchain. So Blockchain, we all know, is a fast-growing digital assets company. And their popularity has grown a lot in the recent decade. So for them, dealing with really popular cryptocurrencies like Bitcoin, Bitcoin Cash, Ethereum, and other top cryptocurrencies, it was important that they are able to scale and also maintain their overheads while they are scaling. 

So when they decided to move to Google and Cloud Spanner, they were essentially able to replace one-third of their entire infrastructure with one single managed service using Cloud Spanner. Not only that, with that migration, they were able to have significant cost savings as well. And I also read that they were able to restore an entire database in nine hours, versus one week, so allowing them the flexibility to test code against production data. 

MARK: So I mean, we are talking about scale for these customers that is just-- like you said, it's global, billions of users. And then even backing up that much data over 9 hours is actually pretty impressive when you consider how big that instance is. So for these massive enterprises, I think it's pretty clear that Spanner is a pretty cool tool and that hopefully, they should check it out and see what it is. 

For the developers that work at these enterprises and all the people that are interested, what does that actually look like to get started with Spanner? You talked a little bit about it earlier, Chris. But what does it mean, just go to the console and start it up? 

CHRIS: Yes, precisely. So it's important to point out that yes, there's these big customers with these big numbers. But then we also have small customers with not yet big numbers, like the start-ups, right? So why has Spanner been interesting for start-up when they have not anything? 

Basically, what it means is that you have a relation system. You can go to console, as you just mentioned, and you create a database, and within seconds, you have a database. Now, that database might be the only one you ever need for the rest of your life in terms of the company. And if you become like a Snapchat or another big enterprise with billions of whatever, that one database that you created when you were in the first day on your start-up actually might carry you through all the way. 

So just imagine the amount of headache you're not spending on running a database. So you can start small, you can stay small, and you can grow up over time as your business requires, not as the hardware is available or as DBAs are available or any other of these criteria. You can really focus on your business and start with your business. 

So when you start with Spanner, you go to the console, you go to on the left side to the Spanner tab. You create an instance. You have to figure out which regions you want to be in. Pick one, because if it's not the right one, tomorrow, you can pick another one, no sweat here. Create a database, and then you can start writing your queries after you've created your tables, right there, right in the console, and you can play with it. 

Of course there's now APIs to access Spanner. I mean, you regular JDBC API. However, based on our internal distributed implementation, we have optimized the API. So we have ways where you can optimize the access. A concept called mutations, which is a lot higher throughput a lot faster than JDBC connections. So there are optimized APIs, so as you get familiar with it, as you have your requirements slowly coming into place when you start, you can kind of use the appropriate API for the task at hand. But it's a relational system, so there's nothing else to learn in terms of accessing the tables, the queries, and whatnot. 

As you grow, as you write your test cases, you get to learn about the monitoring APIs, which you don't have to know day one, but you can get to know them as the demand requires. So in order to start with Spanner, you don't have to understand all the aspects, all the bells and whistles of Spanner at all. You can learn them along the way. 

The initial start is as simple as-- I know it sounds weird-- just go to the console, create an instance of database, and you're done. That's it. No installation, no finding out which RPN to download or anything like that. It's just go there, and do it. 

And, of course, you can use the IDEs. So you have a JDBC connector, you can use regular IDEs on your laptop. You don't have to be on the Cloud Console. You can use your traditional dev environment as you know it and continue with Spanner. 

STEPHANIE: Yeah, I think a key thing that you just pointed out is having the flexibility to scale as you see fit as you grow. But you don't necessarily need to have the expectation that you will. But at least you have the flexibility to and not have to worry about a complete application redesign or having to redesign your database schema down the road, while you absolutely leverage cloud-native functionality and the new things that are constantly coming out, as you both know, with Spanner's ecosystem. Great, anything else to add before we wrap up, because it sounds like we might be getting close to time? 

DILRAJ: There is a lot of public-facing documentation that's available. So if you're not aware of it, go to Cloud.Google.com/Spanner, and go check out all the hot links. 

CHRIS: And there's another aspect. So Spanner, as it's growing, more customers are being up, there is a open source community building up. It's called SpannerEcosystem, like one term, one word. And you Google for it, and you'll see a lot of tools that some of the customers are actually providing as part of the whole ecosystem that provides additional functionality that might be interesting to you as well. So you don't have to sit there and wait for Google to be ready with a feature. You can always go to the open source community and contribute, of course, and take from it. Very nice being here. Thanks a lot. 

MARK: And once again, thank you so much to Dilraj and Chris for coming in. Definitely really, really cool to catch up on all the new things that have been going on in Spanner world. 

STEPHANIE: Yeah, Spanner is, honestly, one of my favorite Google Cloud platform products because it just has been able to achieve this unparalleled level of scale to address some of the challenges with traditional relational database design. 

MARK: Yeah. I mean, it feels like magic. It really does. I just can't fathom-- you know, in my head, I always have these very traditional views about relational databases, and scaling was always the big one. And I'm probably sure I've mentioned that 1,000 times by now. But being able to create this very scalable relational system just, it's so cool. 

STEPHANIE: One of the things I talked about in the conversation was this idea of limitations set forth by the CAP theorem. And Chris mentioned really interesting point about our very powerful network fabric that allows Spanner to be able to scale storage and processing across this massively distributed environment. 

MARK: Yeah, it's such a cool example of how the huge network and all these different infrastructure pieces are actually making solutions to problems that weren't really thought about in an infrastructure way. The database wasn't scalable before. I mean, you can throw more resources at it, but ultimately, you were still thinking about it in terms of, like, a single unit. But when you suddenly take that, and you spread it across multiple areas-- and you can really only do that if you've got the network and infrastructure to support it-- it's just a brand new solution. And so I can't wait to see what other solutions we're going to be able to build by piggybacking off of this network and this infrastructure that, I guess, is the cloud 

STEPHANIE: Yeah, and one thing that I encourage all of the listeners to go check out is we have a series on Spanner on our YouTube channel that I worked on with our team member Alicia. And it goes into some of the details about TrueTime and Paxos. Those are the technologies that we've deployed that enable us to distribute these nodes across the world and allow you to do read-writes in real time and have consistent information across regions, across the world. So definitely check that out. It's very interesting, and we've published white papers on that. 

MARK: Oh, very cool. All right, we'll make sure to include a link to the videos in the description. 

STEPHANIE: Cool. So I guess let's go ahead and talk about some awesome things that you're working on this week, Mark. 

MARK: Yeah. Well, I mean, I have been very behind the scenes lately working on a bunch of different projects, super excited to get that GKE cost optimization quest out the door. And I've just recently launched a blog post, which I'll put into the show notes as well. This is a blog post that really just introduces Budgets. I talk a lot about billing and money and those sorts of things. But Budgets are really a pretty simple concept inside of Google Cloud that I think people probably aren't aware of or are just not using. 

But it's really our first line of defense against kind of avoiding that horror story that I think we've seen a couple of times about people waking up to really big surprise bills. So the first blog post really just introduces Budgets as a concept. But I'm going to do a couple more, and I think the one I'm most excited for is the one where you can actually use Budgets to respond to kind of surprise cost notifications and actually shut off resources in response to it. So keep an eye out for that, because I think that's not only really cool, but will also be really helpful for avoiding those problems. 

STEPHANIE: As someone who loves free stuff, this is very on-brand for you, Mark. 

MARK: Everybody loves money, right? So I think it's a pretty easy sell. But I think maybe a lot of people spend more time looking at the technology and not a lot of time thinking about the billing and the budget side of things. So it's been really cool. And so look forward for more content there. What about you, Steph? 

STEPHANIE: Yeah, so I'm super excited because this past week, I launched my data center animation series. And this is something I've been working on for a few months now with our amazing production team. But this series is going to peel back the layers on what makes data centers so fascinating, the design, the technology, operations, and even sustainability. 

I personally have a huge fascination with data centers, so I thought this was a great topic for me to focus on. I think there isn't a lot of content on how Google Cloud does it in particular. So in this first video, we are going to start with what a data center is, how it's changed, and how it's now built for Cloud at Google. So take a look at that series in the links below. 

MARK: It was funny. I think I just saw Kelsey Hightower tweet out that Google Cloud is technically his on-prem. 

STEPHANIE: Yeah, I saw that. 

MARK: It's kind of funny to think about how you balance the concept of-- well, on one hand, it's the cloud, right? We talked about this amazing networking that makes Spanner possible. But on the other hand, it's still physical server somewhere. So I'm super excited to check out this data center series. 

STEPHANIE: Yeah, the Cloud is not in the sky. It's actually undersea and on land. 

MARK: Yeah, it's not in the sky yet. 

STEPHANIE: Yet. 

MARK: Stay tuned for exciting-- no, I'm just kidding. 

STEPHANIE: We are working on things at Google under wraps-- 

[LAUGHTER] 

MARK: All right. Well, we'll make sure to include a link to the video in the show notes because I think that's super, super cool. And of course, like you said, there'll be more videos on it coming up soon. 

STEPHANIE: All right, well, that is it for this episode of the GCP podcast. Thank you everyone for listening in, and we will see you all next week. 

MARK: Bye, everybody. 

[MUSIC PLAYING]