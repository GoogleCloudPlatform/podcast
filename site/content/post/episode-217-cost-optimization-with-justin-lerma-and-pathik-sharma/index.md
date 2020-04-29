+++
audioDuration = "00:41:31"
audioFile = "Google.Cloud.Platform.Podcast.Episode.217.mp3"
audioSize = 59806618
categories = ["Cost Optimization"]
date = "2020-04-22"
description = "Our guests Justin Lerma and Pathik Sharma join Brian and Mark this week to talk cost optimization techniques for internet projects."
draft = false
episodeNumber = 217
hosts = ["Brian Dorsey", "Mark Mirchandani"]
title = "Cost Optimization with Justin Lerma and Pathik Sharma"
image="/post/episode-217-cost-optimization-with-justin-lerma-and-pathik-sharma/images/hero/hero-EP-217.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/g65zy6/episode_217_cost_optimization_with_justin_lerma/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Our guests Justin Lerma and Pathik Sharma join [Brian](https://twitter.com/briandorsey) and [Mark](https://twitter.com/markmirch) this week to talk cost optimization techniques for internet projects. Justin and Pathik, both of the Professional Services Organization, work to help customers get the most out of GCP while maintaining their project budgets. They help customers take business success metrics and track them from a cost perspective, allowing the client to get an understanding of how much each business goal actually costs, rather than an aggregate of how much has been spent in total. This information is used to tailor GCP product usage and cost optimization to each client project. 

Pathik explains how the Recommender API can help with VM usage by suggesting shrinking or removing a VM altogether for cost savings. With thorough analysis, clients can also benefit from cost savings by paying for longterm usage of GCP products rather than month-to-month. For storage and analysis, BigQuery can offer better performance at a lower cost with partitioning and clustering.

Throughout the episode, Justin and Pathik offer up other tips and tricks to help our listeners save money with GCP, as well as suggested reading materials, videos, and labs to get you started on your cost optimization adventure.

<!--more-->

##### Pathik Sharma 

Pathik Sharma is a Technical Account Manager with Google Cloud, focusing on proactively guiding enterprise customers to operate effectively and efficiently in the cloud. He loves helping customers to maximize their business value by optimizing their cloud spend.  

##### Justin Lerma

Justin Lerma is a Technical Account Manager with Google Cloud. He has a passion for sharing best practices in operational efficiency as it allows for the proliferation of more experimentation and breeds new ideas.

##### Cool things of the week

* Get started with Google Cloud Training & Certification [site](https://inthecloud.withgoogle.com/training-discount/register.html)
* Creating a REST API with Node.js and MySQL - Serverless Toolbox Extended [video](https://www.youtube.com/watch?v=CGy4-Xu5anw)

##### Interview

* Compute Engine [site](https://cloud.google.com/compute)
* BigQuery [site](https://cloud.google.com/bigquery)
* BigQuery Reservations [docs](https://cloud.google.com/bigquery/docs/reference/reservations/rpc)
* Cloud Storage [site](https://cloud.google.com/storage)
* Operations [site](https://cloud.google.com/products/operations)
* Recommenders [docs](https://cloud.google.com/recommender/docs/recommenders)
* Google Cloud Support Plans [site](https://cloud.google.com/support)
* Cloud SQL [site](https://cloud.google.com/sql/)
* Use labels to gain visibility into GCP resource usage and spending [blog](https://cloud.google.com/blog/products/gcp/use-labels-to-gain-visibility-into-gcp-resource-usage-and-spending)
* GCP Advanced Billing Dashboard [site](https://datastudio.google.com/u/0/reporting/1MJ0GHVvcHI6cRHwMKyeSK3r7UoabEHOH/page/WXzW)
* Stack Doctor Series [videos](https://www.youtube.com/watch?v=vgluz-Tv2qY&feature=youtu.be)
* Cost Management Playlist [videos](https://www.youtube.com/playlist?list=PLIivdWyY5sqKeXavu1XuBNBDLBO31kzM0)
* Best practices for Cloud Storage cost optimization [blog](https://cloud.google.com/blog/products/storage-data-transfer/best-practices-for-cloud-storage-cost-optimization)
* Best practices for optimizing your cloud costs [blog](https://cloud.google.com/blog/products/gcp/best-practices-for-optimizing-your-cloud-costs)
* Cost optimization best practices for BigQuery [blog](https://cloud.google.com/blog/products/data-analytics/cost-optimization-best-practices-for-bigquery)
* Networking cost optimization best practices: an overview [blog](https://cloud.google.com/blog/products/networking/networking-cost-optimization-best-practices)
* 5 best practices for Compute Engine Cost Optimization [blog](https://cloud.google.com/blog/products/compute/5-best-practices-compute-engine-cost-optimization)
* Cloud Logging and Monitoring Cost Optimization Strategies [docs](https://cloud.google.com/solutions/stackdriver-cost-optimization#implementing_cost_controls)
* Codelabs: BigQuery Pricing [site](https://codelabs.developers.google.com/codelabs/bigquery-pricing-workshop/#0)
* Qwiklabs: Business Transformation with Google Cloud [site](https://www.qwiklabs.com/courses/888)
* Qwiklabs: Understand Your Google Cloud Costs [site](https://www.qwiklabs.com/quests/90)
* Qwiklabs: Optimizing Your GCP Costs [site](https://google.qwiklabs.com/quests/97)
* Business Learning Path [site](http://services.google.com/fh/files/misc/learning_path_brochure_q1_2020.pdf)
* Cloud Platform Resource Hierarchy [docs](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy)
* Cleaning up unused IP addresses [docs](https://cloud.google.com/solutions/automating-cost-optimizations-with-cloud-functions-cloud-scheduler-and-stackdriver#cleaning_up_unused_ip_addresses)
* Cleaning up unused and orphaned persistent disks [docs](https://cloud.google.com/solutions/automating-cost-optimizations-with-cloud-functions-cloud-scheduler-and-stackdriver#cleaning_up_unused_and_orphaned_persistent_disks)
* Schedule VMs to auto start/stop with Cloud Scheduler [docs](https://cloud.google.com/scheduler/docs/start-and-stop-compute-engine-instances-on-a-schedule)

##### Question of the week

[What is the metadata server?](https://cloud.google.com/compute/docs/storing-retrieving-metadata)

{{< transcript "[MUSIC PLAYING] MARK: Hey there everyone, and welcome to episode 217 of the weekly Google Cloud Platform podcast. I'm Mark, and I'm here with my colleague Brian. Hey Brian. How are you doing?" >}} 

BRIAN: Hello, hello. I'm doing all right. 

MARK: Always good to hear. And of course, actually, I think we're going to go through this really fast, because our interview is a little lengthy today. It went on a little longer than I originally expected, which is great, because it's full of a lot of useful information. So let's get to that pretty quickly. But can you tell us who that interview was going to be with? 

BRIAN: Yeah, we have Justin and Pathik from our Professional Services Organization talking about cost optimization. So stay tuned for how to save money. 

MARK: I think, ultimately, that's the obvious tagline is saving money. But I like to think of it more as getting more for your money. Because when you understand what you're spending too much on, then you can easily trim down and save money. But that gives you that money sometimes to reinvest and actually do other cool things with it. 

So I like to think of it as first, saving money, but then getting more out of what you're actually paying for, like the old more bang for your buck quote. 

BRIAN: Got it. Well, they have all kinds of really concrete stuff, so that'll be fun. In the meantime, let's do a couple cool things of the week. 

[MUSIC PLAYING] 

MARK: So my first cool thing of the week is something I actually mentioned two weeks ago. It's about this free 30 days of training that you can get for a wide variety of places where you can learn Google Cloud stuff. So there's Qwiklabs and there's Coursera. 

And you what you're able to do is fill out the form before the end of April, which is coming up pretty soon-- it's next week-- and then you get 30 days free to that platform. So I mean honestly, for everybody, fill it out. It doesn't hurt you to get access. And then see. Try it out. See if there's any cool stories on there. See if there's any cool quests or labs or courses. 

There's so much great information out there, and now seems like a great time to be able to sit down and just breeze through it. 

BRIAN: If you're in that kind of head space, go for it. The other thing I wanted to highlight this week is a video from two of our colleagues, Brett and Martin. And they've got a series that is "Serverless Toolbox" that you may have seen on YouTube. And I just love the whole arc and story there. 

But normal episodes are pretty dense. They have to skip some of the details to tell the story clearly. So they've done an episode recently that is the behind the scenes or an extended version where they walk through every single step, and it's so nice to see every step of how things work. 

And so this particular one is how to build a REST API with Node.js and MySQL on Cloud Run. And they go actually doing every step of the way. And it's a 54-minute video, but there's nothing left out. And if you're ever wondering, OK, the cooking show version of these stories is great, but I want to see all the details, this is it. So there's a link to that in the show notes. 

MARK: Yeah, it's a great video. And I think they do a really good job of explaining it, like you said, going through the steps. And a lot of people are super excited to see content like that, and it helps you understand it. Goes very well hand-in-hand with all these learning resources. This video could easily be a Coursera course or something, just because of how great and in-depth-- what a great job they do of explaining things. 

Awesome, well with our cool things out of the way, why don't we go ahead and jump right into the main content. 

[MUSIC PLAYING] 

Hey everyone. Thanks so much for joining us. Can you first tell us who you are and what you do? 

PATHIK: Yep. Hi everyone, this is Pathik. I'm the technical account manager based in New York. 

JUSTIN: Hey everyone, this is Justin Lerma. I'm a technical account manager based in San Francisco. 

MARK: And I know that you both work for PSO, which in Google is the Professional Services Organization. Can you just give us a quick rundown of what PSO does and what it means to be a technical account manager? 

PATHIK: Definitely. Yeah, so we are both part of Professional Services Organization, and our mission is to help customers to get most out of Google Cloud. 

BRIAN: OK, what does mean really, in practical terms? 

PATHIK: Bringing in a dedicated subject matter expertise to problems that our customers are facing and bringing that business value to the customer, like helping them on the Cloud maturity curve, helping them on their Cloud journey, and making sure that they get the best out of their business on Google Cloud. 

MARK: And so as technical account managers, you're both probably working with a lot of different Google Cloud customers on a wide variety of topics, but you both also specialize in cost optimization, right? 

JUSTIN: Yeah, so for the last several years, Pathik and myself have been focused on cost optimization specifically. We've worked with a lot of our enterprise customers. It's a very passionate subject matter for both myself and Pathik. We've been doing this in some way, shape, or form with some of our customers here at Google. 

And we've been doing this for the last year specifically-- so going around, seeing how different organizations work, and offering some of our best practices advice in this area. 

MARK: And from what I understand, this has also been turned into a workshop that you've been doing with these customers recently, right? 

PATHIK: That is correct, yes. So we have been working with multiple customers trying to understand their cost journey, especially when it comes to the culture shift from-- moving from a more comfortable and known CapEx model off on-premises work to dynamically changing people use Cloud model, which we refer to as operational expense model. 

And as a part of this, what we have realized is customers require that prescriptive guidance from Google Cloud on people, processes, framework, on how to translate those context into the Cloud world and how to be more successful there. 

BRIAN: I'd love to dig into that a little bit more, like are there some common themes that you've seen a lot or some particularly useful ways of thinking about it? 

JUSTIN: Yeah, we've absolutely seen quite a few themes, and we can dig into some of that. I think for the most part, just making sure that there's regular cadences around billing, understanding what your spend actually translates into. 

I think for us, the big one that a lot of customers are getting towards or thinking about but aren't quite there yet are they're developing really robust systems of unit economics. So rather than looking at I spent X amount of money and not really knowing anything else about it, knowing how many users did I provide content for. What was the thing that I was able to provide from a service level? 

And the cool thing about the Cloud is it allows you the opportunity to do this-- leveraging the enhancements that we have around data and visualization. But ultimately, I don't think everybody is taking full advantage of that as a practice just yet. 

BRIAN: So your metrics-- instead of how many cents does it cost to serve a request, it's like how many cents does it cost to-- like a business goal. I don't know, like help a user do a thing. 

JUSTIN: Absolutely. I think the way that we've been talking to customers about it recently is taking business success metrics and being able to track that from a cost perspective. 

BRIAN: Awesome. 

PATHIK: This could be metrics which are related to more on the finance side as well as from the tech or engineering pieces. So for example, for finance, they want to know about where their cost is per users being served versus for technology, it could be moved around activity-based costing. 

So for example, how many transactions did we process? How many, I guess, memes did we show to the number of customers? And things of those nature. So it's basically upon the transactions that are being executed on Google Cloud. 

MARK: So I think that makes a lot of sense for people who are born in the Cloud. They already maybe think about things this way. But especially for companies that have been around for tens or even hundreds of years in some cases, they've really got to figure out how to translate their more CapEx side to this more Cloud-based costing. 

JUSTIN: Absolutely. 

MARK: So with all of these businesses that are trying to understand how the Cloud works, and that you've been working with directly to help explain it to them, I'm sure there's been some findings that can apply across the board, things that all companies can think about when they're doing Cloud cost analysis. 

JUSTIN: Yeah. So as far as some of the different themes that we've seen from customers who are coming from a traditional environment, I think for us, one of the big ones is cost visibility. I think it's a mind shift from doing one meeting every quarter to where you look at your forecasts and projections to the ability to see this on an hourly basis. 

We have very aggressive customers who are actually tracking this and meeting on a daily basis. So this is one of the capabilities that's really unleashed once you make the Cloud transition. From a uses optimization standpoint, you get real-time metrics from things like Stackdriver. You can see the resources utilization down to the RAM and CPU level, versus just having some box that you've already paid for that you hope that you don't exceed the usage of. 

And then, of course, like everything else, procurement loves pricing efficiency. So in the Cloud, we do have some opportunities and ways that people can make purchases that will allow them to take advantage of that. So rather than looking at getting a discount on hardware in the old model, now we can have ways of tracking your consumption, using your data, knowing how much you're going to need over a longer period of time, and it would be making that commitment to receive a discount. 

BRIAN: I am a huge fan of VMs and RVMs in particular. It's like they're a slice of a data center rather than a slice of a computer. So when you're trying to think about costs here, what could you do in the VM world to help with your cost efficiency? 

PATHIK: Again, going back to the three principles that Justin earlier mentioned. Let's take an equation. What's cost? The Cloud cost is equal to the resources used. In this case, it's the VM. Multiply by the rate that you are paying for it. So in simpler terms, if you want to optimize your cost, you either use less or you pay less. 

Well, it's easier said than done. So let's look at some of the implementation aspects. And this is where we'll dive deeper into the resource usage optimization, because that tends to be the area where you can really make an impact. 

So coming back to your question, Brian, I think the first thing that comes to the top of the mind is identifying ideal VMs and disks. These are practically dead in terms of resources when you think about CPU, memory, network usage, and they're no longer being used, which means they are no longer providing any business value. 

Ideal VM Recommender allows you to find these resources based on your previous 14-day historic usage. Similarly, you can apply the same concept on persistent disk as well. 

MARK: So there's a recommender that looks at the usage of your VM and your disks and says, hey, maybe you're not using this to its full capacity, or maybe you're not using this at all. Why are you paying for it? 

PATHIK: That is correct, yes. And if you think about it, if you own these resources, you can easily make the call just to delete them after knowing the implications. That's 100% savings right there in your courtyard. 

However, there might be cases where you might need to recreate those resources, which is where you can take snapshot before deleting those resources. The savings still are staggering. It's 30% to 90%. 

MARK: Right. We've seen that in the compute instance of a console, there's that recommender column that pops up and sometimes says, hey, you're probably not utilizing this VM. Why don't you resize it? Because that's another thing Google lets you do with the VMS, right-- is that you can resize them without having to delete and recreate them? 

PATHIK: That is correct, yes. So Recommender API also provides you information about right sizing those VMs. This is basically the idea where you are using sub-par resources-- for example, your CPU, your memory, your network. If you are not using those ideally, this is where you have the opportunity to downsize some of those resource. 

BRIAN: OK, so you mentioned two things in your equation. So one is this first part of how much you're using, and then rate your pain. How do we affect that? 

PATHIK: Sure. So let's look at the ways where pricing efficiencies can be applied here. My favorite there is committed users discount. This is an amazing cost saving vehicle for predictable workloads wherein you can purchase compute resources at a discounted price for agreeing to pay for those resources for one year or three year. 

The great start here would be to log into your console today, click on the Billing, and go to that Commitment tab. This is very you can do all the analysis like how much cores are covered by commitment versus what is the potential. 

The idea here is to find that low watermark in terms of predictable cores, and apply the crawl, walk, and run model. Start low, measure your coverage and utilization, and finally, purchase more. So you can repeat this whole cycle until you are comfortably covered. This could be 50% for some users as well as could be 80% depending upon the business you are in. 

JUSTIN: To add a little bit more detail in the committed use discounts, usually, we tell the customers that Google Cloud offers you a great set of tools to go back and do that analysis. This is data, which is one part of the equation. Obviously, there's the business use case that comes up and your understanding of your own forecast. 

So we might not want to recommend that you just take all these recommendations straight from the control panel and launch them immediately, but it's absolutely something to start a business-level conversation with your project donors and understand where does this make sense. Are we growing based on seasonality? 

So there's some of the things that you want to filter out when you're looking at the data, but ultimately, it's something that helps you make a more informed decision in the future. That's why we really like showing this feature to our customers. 

BRIAN: And you were describing this in terms of core hours. So this isn't-- when you do this committed use out of time, it's not for a particular exact machine shape. It's for this whole class of machines. Is that right? 

PATHIK: So that is correct, yes. You buy this commitment across-- and this is custom. It could apply on the number of cores that you have, number of memory that you have. And you can finagle around those numbers as you see fit. 

BRIAN: OK, so I still get the flexibility of scaling my machines up and down or picking the right size for a particular workload and all that stuff. It just comes out. 

PATHIK: That is correct, yes. And not only to cores and memory, which we talked about a lot. It can also be applied to GPUs, local SSDs, and then there are more features coming for other platform as a service. 

JUSTIN: In your cut analysis view that you have within the console, it actually shows you historically, and you can set the parameters for date range according to your needs. And it'll show you what your usage has been historically that would be potentially covered by cuts. And so this will really help you inform your decision. 

BRIAN: OK, so this all makes sense for stuff that's running consistently, long term, and I know what things are. What if I've got a more spiky thing? It's a bunch of batch processing that only runs sometimes or things like that. 

PATHIK: That's a great question, Brian. I think this is where our preemptible VMs could be useful. These are the highly affordable computing senses that only live up to 24 hours. So think about those four tolerant workloads-- workloads that are more stateless or are operated in batch processing mode, which you just mentioned. This could be genomics, media trends, coding, financial modeling, and simulation. All those fall under similar umbrella. You can use preemptible VMs for exactly that reason. 

BRIAN: Roughly, ballpark-- how much of a discount are we talking about here? 

PATHIK: Up to 80%. 

BRIAN: 80% off? So 20% of the price? 

PATHIK: That is correct, yes. And it doesn't mean that you only have to use preemptible VMs. We have seen customers use a mix of regular and preemptible instances to finesse their compute intensive workload faster and cost effectively. 

BRIAN: When we do percent discounts, it's always a little hard to get your head around. So this might be a fifth of the cost of doing it otherwise. So that's probably worth doing some architectural changes in some cases to benefit here. OK, that's super cool. 

MARK: I want to talk about storage, which is another major part of business expenditures. When you're talking about moving stuff in the Cloud, you also have to store it in the Cloud. For the compute side, it's really interesting. I think I really liked your formula, because it's a very simple formula. How much you use times how much that costs you. That's what you pay. 

So I do think you know every scenario is going to be different for different customers, whether you're a small person just getting used to the Cloud, or you're this massive business who's migrating different workloads over. The answer to how you save money is always going to be it depends on what you're doing. And I know that's everyone's least favorite answer. 

So I'm sure in working with a lot of these customers, understanding what you're doing, what your business is doing, what you're trying to do as a developer or as an IT professional or whatever role you have, understanding that, and then if you've got the same workload for months, committed use discounts make sense. 

If you've got these easy to interrupt workloads, then preemptible machines makes sense. If you have servers that need to be up because your employees need to connect to them during work hours, then you can just turn those instances off, or just maybe reduce the number of cores you're running to save money when people aren't really needing to connect to them. 

There's a whole bunch of flexibility there. But all of it comes down to understanding what you're trying to run on the Cloud. 

JUSTIN: Absolutely. 

MARK: So with all that being said, now, let's go look at storage. Because with compute, you can do a lot of things. What can you do with storage? I mean, I'm assuming it's not cost efficient to do the same thing and just unstore stuff on the Cloud for a while. 

JUSTIN: Absolutely. I think a lot of times when we're working with customers, storage tends to be a lurker. This is just an observation working with customers who are on-prem and are now in the Cloud. When you're on-prem, you just have this big bulk of storage that you can go in and you access, and you don't really think about it as an operating expense. It's just that one-time purchase. 

So a lot of times when we're interacting with customers, they have that same kind of mentality. I need an extra 100 terabytes. I'm just going to launch this thing and leave it out there. I'm only using 10. It doesn't matter. We see a lot of the similar patterns. 

And I think for us, we were not expecting for GCS to actually be one of the top costs, that we're offering huge savings for customers just giving them some very simple guidance on standardization. So we like to talk about the fact that we have multiple different storage classes. We have Nearline. We have Coldline. We have the more recent Archival. And these are all mechanisms that you can use to save on costs. 

Sometimes you don't need to access a particular class of storage with a high frequency. So in those use cases, we've been recommending Coldline. And I think from our experience, the fact that customers aren't auditing this regularly tends to generate a ton of cost over time. 

And for us, it's really just making sure they're aware of the features, the specific use cases for each of them-- Nearline for something that you might need access to within the year, Coldline for things that are a little bit more archival, and then we have of the aptly-named Archival storage class that is available now for things like legal discovery or compliance needs-- something that you hopefully will never have to access, but for legal purposes, you need to maintain. And we've really reduced the cost on that as well. 

MARK: And so you've got these different classes. And it makes sense to say, OK, this is data I need now. It probably goes to Nearline. This is data I'll hopefully never need, but I got to hold onto it anyway. Let's put that in Archival. 

But that still means you're creating a bunch of buckets. What happens if data you need now for 30 days, and then after that, you want to shove it over to Archival? 

JUSTIN: Yeah, so we actually are trying to make this as simple as possible for our users. We do have lifecycle policies that can be initiated at the bucket level. If you have a certain type of use case where after 30 days, you know you're not going to do analysis on anything anymore, you could set up an automated policy to push that storage to a more cost-efficient class, whether that's Nearline, whether that's Coldline, or Archival, that depends on your use case. 

But I've worked with a customer that's a scientist, or they have lots of labs all around the world, and they only do analysis on data from their most recent experiments in the last 30 days. But after that, for regulations, they need to maintain copies. So we went in, and we set up a lifecycle policy that allows them to push all data in this bucket-- after 30 days, it shifts it over to Coldline. 

I think in the future, they're looking at things like Archival. That's a discussion that we're having with them right now. But it's been a huge cost savings for them. I think this is hundreds of thousands of dollars over the course of the year just from initiating a simple policy. So it's really great to be able to offer it to customers and really educate them on how to set up a lifecycle policy. 

MARK: Are there any other tips for people who-- looking at the storage class-- that's an important one-- and then being able to automate the moving between storage classes-- anything else that people should keep an eye out for when they're looking at putting more storage in the cloud? 

JUSTIN: Yeah. I think the other thing that we've seen before is duplication. It just feels safe to have five copies of a particular object. That way if there is an accidental deletion, you're taking care of it five times over. But obviously, now that you're in the OPEX model, each one of those copies is going to incur a regular cost on a monthly basis. 

So what we want to make sure that customers are aware of is one, these lifecycle policies-- making sure that manual deletion is no longer a task that you have to do but. We also have a bucket lock feature. So if you're wanting to make sure there's a minimum retention on items within a specific bucket, whether that's for a legal purpose, this is something that you can control in an automated fashion through some of the features that we offer with GCS, or Google Cloud Storage. 

BRIAN: So you can actually just avoid that accidental deletion by policy and keep another copy around for X number of days no matter what? 

JUSTIN: We like to put a lot of parameters around it. If they have the IAM permission, that's one gate, and then the next one is initiating a bucket lock feature to really make sure that things are taken care of. So if you don't want to lose important things from a business standpoint, we would absolutely recommend the bucket lock feature. And that's something that you can initiate on an automated process. 

BRIAN: Since there isn't just a specific disk sitting somewhere, there's not an alert saying it's full that prompts you to go clean up. 

JUSTIN: Yes. It's really interesting to look at from a data perspective, because some of the customers know about the different storage classes before they understand lifecycle policies. And something that we've seen in looking at this customer spend, and this is something that came up-- Pathik and I were reviewing, is we saw a wave. They would get really high storage costs, and then it would go down a little bit, and then it would come back again. 

And we asked them, hey, what's going on here? This is a pattern. We realized that they were manually going in and moving things on the bucket level. And so now that we've initiated these lifecycle policies, it's a much smoother curve. They're not having that peak that's as high. We're automatically going in and helping them clean up their storage. 

BRIAN: That makes a lot of sense. OK, so we've talked about compute and the core storage of data stuff. And a lot of reasons people choose Google Cloud is because you can do a lot of analysis of information, a lot of data stuff. And BigQuery is one of the main places we do that. 

And it has a little different model on cost than either of these two things we've talked about in some ways. Some of it overlaps, some is different. Could you give us a quick overview on how pricing works in BigQuery, and then how you see people thinking about it and being most efficient there? 

PATHIK: Yeah, sure. And BigQuery different, as you mentioned, in terms of pricing, whereas for most services, you need to think about performance and cost as the two pieces of puzzle where dialing one will dial out the other. That is, in BigQuery, performance and cost actually goes hand-in-hand together. 

The feedback that we have received from our customers is they absolutely love using BigQuery, but it's because of its use, it's because of its serverless nature, and then any improvements that you make on performance also reduces their cost on BigQuery. So when you look at the pricing, we're looking at the analysis side of the things as well as storage. 

MARK: So you mentioned that rather than trying to sacrifice performance for cost, what you actually want to do is to get more performance and also save money, which I assume means that you're doing, what, a tighter job on analysis? 

PATHIK: Yeah. So typically, what we see with our customers is-- partitioning and clustering is one of the ways where you can achieve performance as well as you can reduce your cost. Because if you think about it, for on-demand customers, less data BigQuery consumes, the less you pay for it. 

MARK: And the faster it'll be. So what is partitioning and what is clustering? 

PATHIK: Partitioning is basically dividing your data into smaller chunk of segments. So basically, think about a sealed stable which is-- I'm just throwing a random example here-- is 10 terabytes of data. And then you actually just wanted to know what your prediction is going to be based on last 90 days. 

And when you partition your data set on date, you are only actively querying the last three months of data rather than the entire table. So that is much, much more performance as well as it reduces your cost. 

When it comes to clustering, this is where you are looking at a specific partition in your data when it is live within the clustering. BigQuery performs additional pruning to only look for data elements that you have in your query. And this is the query where all the columns which you typically put in the where clause, and this is where it gains that performance excellence. 

MARK: Right. I mean, the goal is, again, to reduce the amount of data that BigQuery needs to look at. And a lot of times, I know that I'm super guilty of doing like SELECT* on the entire table to see data. No, I used to do that in much smaller MySQL databases. It didn't matter, because the table was maybe like a meg or two. 

When you're looking at a 10 terabyte table, as it turns out, maybe you don't need to scan all that data, especially if you're not going to use it. So partitioning and clustering are great ways to narrow down what you're going to be scanning. 

PATHIK: Yeah, and to your earlier point, Mark, this something that we have seen many customers do is accidentally selecting Star All across the entire data set, which could come in as a shock to the customer at the end of the month when they look at their analysis bill. 

And so I could tip there would be going to set a cap on the maximum byte spill. This will cause the query or a job to fail once it hits that limit without incurring any additional cost. You can also take it one step forward and set up custom quotas on user as well as project level. 

MARK: You're easily able to protect any users from scanning out too much data, and you can say, I'm expecting about this much to be queried. But let's put a quota in place just to make sure nobody runs a $10,000 query or something. 

So that absolutely makes sense for protecting yourself on the analysis side, but let's go to that storage side and talk about-- are there ways to save money there? 

PATHIK: Definitely. So storage on BigQuery is currently priced at-- and this is, again, I'm looking at the US multi-regional storage. Currently it is $5 for one terabyte of storage, which is again super cheap. But on top of that, once you have data that is not being modified for last 90 days, this is when it automatically moves to long-term storage without even you lifting your finger. So this is where the cost automatically reduces to 50% without any impact on performance due to ability or availability. 

MARK: So that's something BigQuery just does for you, because your data is not changing. So it's going to go ahead and shelf it a little bit to save you a little bit of money. If your data is changing, what's the best way to maybe save some money there? 

PATHIK: Yeah, that's a great point, Mark. And this is where the BigQuery's federation feature comes in handy, where if you have data already stored in some other storage-- for example, Google Cloud Storage or Cloud SQL, this is where you can use BigQuery's federation to directly query on top of those storage, rather than bringing the entire storage back to BigQuery. 

MARK: Which goes to Justin's point a little bit earlier about thinking about how you're duplicating your data. You don't necessarily need your data in 50 different places to do 50 different things. Sometimes, you can have it in one place and do 50 different things on it. 

PATHIK: Absolutely. 

MARK: So let's say I'm taking my data, I'm storing it in cloud storage, and then I'm querying it from BigQuery. One of the things I've heard about recently, especially for larger customers, is this idea of reservations. So before we talked about analysis being done on-demand. What does it mean to have a reservation on BigQuery, and what does that look like? 

PATHIK: Yeah, you touch upon a great point, Mark, and this is where typically we have seen customers being most cost effective when it comes to BigQuery. So BigQuery currently has two different pricing model. The first one is on-demand, which is based on the bytes that are processed. And then there is flat-rate reservation, which offers a predictable month-over-month cost for unlimited queries, which means for unlimited analysis. 

We also announced flex slots last month, which allows you to go from that month-over-month or year-over-year commitment down to seconds and minutes. This is typically super cost effective for customers who are rapidly evolving their business needs and are planning for a business critical calendar event. Think about Black Friday, Cyber Monday type of event. 

MARK: Gotcha. So for people who know that they're going to be using BigQuery a certain amount, it's very similar to the committed use discounts. If you know about what you're going to spend, or even if you just have an idea that you're going to be spending it, the least you can do is probably sign up for these reservations or these flex slots. Again, it all depends on how much you're using it. 

But then you're saying, I'm going to pay for this amount. And now, not only do I have a better understanding of what I'm going to be paying, I can use that to forecast a lot easier. 

PATHIK: That is correct. 

MARK: So then the last thing for BigQuery, especially when it comes to using this data, is this idea of being able to batch load data versus streaming data into BigQuery. Can you talk a little bit more about that? 

PATHIK: That brings us to streaming inserts. Streaming inserts are super valuable for users who need continuous ingestion into BigQuery. But this premium feature also comes with a cost. So I ask customers two questions. Do you need this data to be immediately available? And think about seconds instead of hours. Or are you going to use this data in any real-time use case once the data is available in BigQuery? So if either answer is no, we recommend you to switch to batch loading, which is available at no cost. 

BRIAN: Awesome. OK, so we've covered compute, key storage stuff, analysis at a high level. Are there any other big areas that are opportunity places to look first for where you might be able to save a bunch of money? 

JUSTIN: There's definitely a few that are frequent flyers since we're working with customers. I think one of the interesting ones that we weren't expecting was Stackdriver. I think one of the cool things about Stackdriver is you could get really granular with the type of metrics. And as born in the cloud, we are all data nerds, and we want to know all the things. 

But the thing about that is that the storage has to go somewhere, the ability to log and monitor has to go somewhere. So I think when customers don't realize when they're setting it up, asking for all the things, you have to pay for all the things. 

So we talk to customers about ensuring their Stackdriver costs makes sense for the business metrics that they need, and also we talk to them a bit about things like log exclusion, logs that maybe aren't important to you, as well as sampling. Do you really need to know second on the second, or is minute on the minute going to be important for you? 

And I think it even brings us all the way back to something as simple as an SRE discussion. What is the SLA or the SLO that you have established for this particular service? And based on that, whether that exists or not, we can set up a Stackdriver profile for that. So I think that's another one that tends to jump out. 

BRIAN: So very much again, circling back to this core idea of understanding your business, what you're trying to accomplish, what promises you're making to others. 

JUSTIN: Absolutely. I think a lot of the times-- the technology, as we discussed today, has a ton of great features to do all this stuff. But I think the biggest thing when we're working with customers that we've found is it's the standardization and the enforcement-- making sure that you have a company standard approach for deploying a new project. Or how does an engineer get their hands on the ability to spend budget for a particular business unit? 

I think these are things that some of the companies haven't really thought about in the past. And one of the wonderful things about the Cloud is it gives you the ability to increase your velocity when you're developing an application or a new service. But it's a trade-off. Do you want to enhance your agility and your capability of designing a new service, or do you want to make sure that you're also putting these parameters in place that could potentially slow it down a little bit? 

So we like to have that trade-off discussion with the customers that we interact with. And it's something where having additional information can help, but it's still a conversation that should happen pretty regularly. I think at a minimum, you need to bring finance, your executives, your project donors all together on a quarterly basis to huddle. 

I think some of the more advanced customers that we're working with are doing this on almost a biweekly basis. And they're establishing their own FinOPs practice. And I think it's something that's going to be more commonplace in the future in order to make sure that customers aren't overspending on the Cloud. 

And I think it's very simple to do. You're basically giving your engineers the ability to become procurement, which probably scares a lot of our finance executives, but that's the reality of the Cloud environment. So what you have to do is create the methods and the process by which they'll have access to those resources. 

And we have these great features and tools that we've talked about and put into place today. And I think after working with customers and showing them these different steps, one of the coolest things that we've seen is they've literally created a standards document and have made it available for all their engineers. And it's something that they've circulated internally, and it's really helped them from a cost-saving standpoint. 

BRIAN: So is this another case of you get what you measure? 

JUSTIN: I think so, yeah. If you can't measure it, you're not going to have progress. So it's the tracking quarter-over-quarter as well. That's another thing that we're doing when we're working with customers is giving them mechanisms by which they can track quarter-over-quarter, give them recommendations at a high level. 

Say, here are the buckets that we think you could potentially save money in, and ultimately, here's the dollar amount that we estimate. Let us know as you run through your exercises and talk to your project donors which of these recommendations are feasible. Because these are suggestions. Not every recommendation is going to make sense for every customer. It has to be a conversation between multiple parties. 

But at the end of that quarter, we could at least say, here's what we assessed, here's what we executed on, and here's the dollar amount savings that we were able to see from that. I think we started working with customers about a year ago, and I think our most advanced customer is seeing really great savings over that period of time. And they've been tracking it quarter-over-quarter. So it's been really awesome to see. 

MARK: Yeah, I think that this is a whirlwind tour of some of the more common things you've seen with all your customers. But obviously, like you said, these are recommendations. They're not necessarily going to apply to everyone in every scenario. So it really comes down to knowing your business, knowing what you're looking for, and figuring out which ones apply to you. 

We went through a ton of stuff today. So do we have any resources that we can share with people for those who want to figure out, understand the high level of everything, and then really dive deep on what you think applies to you? 

JUSTIN: Yeah, absolutely. I think we've been sharing our favorite-- I don't know if it's a top 10 list, Pathik, but it's probably 10 to 20 of our favorite links that we've been putting in a report for every customer. We can absolutely share those links with y'all today, and you can include them. 

MARK: Yeah, great. We'll put them in the show notes for people. And again, there's a lot of subject there. There's a lot of stuff to cover. But not necessarily all of it's going to apply to you. Figuring out what you care about, understanding at a high level what's available, and then diving deep on what you think will save you the most money, hopefully starting with the least effort, and then moving over to the most effort. 

BRIAN: So there's a bunch of stuff that all of us can do to go read those things and do it. If people want to work with folks like you directly, how would they do that? 

PATHIK: Yeah, no, that's a great question, Brian. And recently, Google Cloud released this new customer care portfolio, which is called Premium Support. And that allows customers like you connect to the technical account managers like us who can help you tailor your approach to cost optimization. 

BRIAN: Awesome. So check into that, and then we have all the details to explore and experiment with on our own as well. Thank you both so much for all the time. And I've got a lot to look into, and I'm sure this will help a lot of our users save a bunch of money. So thank you. 

JUSTIN: Absolutely. Thanks for having us. And we're really excited at the prospect of being able to help more people. That's really what this has all been about so far. 

PATHIK: Thank you, Brian. Thank you, Mark. 

MARK: Well, Justin, Pathik, thank you so much for coming in. It was super helpful. I'm always a big fan. I like to talk about a lot of cost optimization topics, but I really loved their ability to-- they've been meeting with different customers in different places and understanding what their business looks like. So it was great to hear the main things. 

And I know, it was a lot of information. So there's a whole bunch of links I think we're going to have in the show notes based on our conversation there. And in fact, we also just launched a blog post written by Justin and Pathik talking about very much the same set of things. So if you felt like the interview was too fast or you couldn't catch all of that information or you want just a text version that has some very similar content in it, make sure to check out the blog post. 

BRIAN: And our question of the week. What is that, mark? 

[MUSIC PLAYING] 

MARK: So I got an email earlier-- and actually, I've seen it come in a couple of times-- talking about the metadata server for Compute Engine. And it sounds like they're going from a pre-1.0 version to a 1.0 version. They're deprecating the old version so that everybody switches over to the new one. 

That makes sense, and I'm happy to make the changes necessary. I don't know what the Compute Engine metadata server is. So what even is it that I'm doing, and why? And I'm sure other people probably have seen these emails. 

BRIAN: Totally. And that overs the APIs from like 2013 or something like that, and just left it running for a long time. So there's instructions for how to actually do that change in the emails and in the Compute Engine docs. What is it from a technical standpoint? And then what's it for? 

So from a technical standpoint, it's a virtual web service that's running that only your VM can see. So it's not a public thing anywhere. And it's on metadata is the address, the hostname, or medadata.google.internal is the fully-qualified name. You can hit that from a web browser or from a command line tool and get metadata back. It shows up as JSON docs, basically. 

The purpose of it is to give you some execution context that your programs can hit in an automated fashion. So when you're running it on a VM, for example, you get a bunch of information about the VM configuration itself, what the machine type is, what zone it's in-- a whole bunch of context around that particular machine. 

We also use it to pass information into the instance, to enable things-- so for example, you can setup a stage public key synchronization across multiple machines. And the way we get that down to the actual instance is to stick them in the metadata service. So that's how the scripts on the VM actually get a hold of those. 

So you don't want to know anything else about the rest of the world. You can put things there, our stuff can put things there, and the scripts on the VM have access to it. And actually, that's also where startup scripts live. So when you make a bash script that should run after the VM starts, that's where that lives. 

You can also put your own metadata into the metadata server, either from G Cloud or from the API when you credit instance or from the web console. And then those are available as key value pairs in a certain place in that same API. You can write shell scripts, like curl or something like that, that would pull those down and use them in your automation. 

I think the easiest way that I know of to get a hold of an OAuth token to make calls to other scripts on Google Cloud. So when you call it, you actually get one of the short-lived tokens that is pre-authenticated. It's valid to use to call other APIs on Google Cloud. 

And you're like, well, wait. Which APIs? I'll just assume that that's a question everybody has right off the bat. And you set that, but basically, there's a service account associated with each VM that you set on creation. There's a default one, but you can also override that. And those have certain access scopes set up in the normal O-Off flow. 

So basically, on the web, there's some checkboxes to say, yeah, this is a allowed to call Cloud storage and allowed to call Pub/Sub, but not these other things. And then the tokens you get from the metadata server-- they carried out authentication, and you didn't have to store anything local to do that. That's actually how our client libraries get their access tokens. 

So when you use a Google Cloud client library, and it just seems to be able to talk to the rest of Google Cloud transparently, that's the mechanism it's using under the covers. And I think one of the coolest things about this is where it makes sense and as much as possible, we've tried to make this work across different execution environments. 

So there's also metadata a server in, for example, Cloud Functions and Cloud Run. So when you write some code that gets a token from the metadata server or use one of our client libraries, that same function-- it will be able to get an access token that's valid and works if it's running in Cloud Functions or running in Cloud Run, running on GKE, running on Compute Engine, and have it work pretty transparently. That was a whirlwind, but I think it's a pretty exciting service. 

MARK: Yeah. I mean, it's really interesting to hear more about what it actually does. But it also sounds-- because you can store any amount of information in there. You don't have to necessarily either store a bunch of stuff local to the machine, which could be dangerous because you don't know where it's being stored, you don't know how the access is. 

And then two, you're actually able to put configuration in there and just say, hey, here's this startup script that I want to have run. So I didn't know that that was actually stored in the metadata server. 

BRIAN: Yep. It's great for configuration, for setting roles for things, so different things can look at it. The one thing you should be careful of is there's readability to this from more places than you would think. So you really don't want to store passwords in there. So something that's intended to be secret, you want to use something like Secrets Manager or look into some other things there. So don't put the password to your accounts there, but use it for configuration, use it for setting roles, things like that. 

MARK: Awesome. Well, it's good to hear more about it. And it sounds like this has been a very whirlwindy-type episode. Just so much information coming at us. I'm sure we can include a link to the metadata server docs if people want to read more about it. But largely, it sounds like the change that needs to be made is just upgrading to the 1.0 launch of it, and it has all the same stuff as before. 

BRIAN: Exactly. 

MARK: Well, good to know. Brian, as always, fun to chat with you. And for all our listeners, thank you so much for listening, and we'll talk to you all next week. 

BRIAN: I'm waving there. Bye. 

MARK: They can't see you wave. 

[MUSIC PLAYING]