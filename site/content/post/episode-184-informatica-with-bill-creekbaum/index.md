+++
audioDuration = "00:36:59"
audioFile = "Google.Cloud.Platform.Podcast.Episode.184.mp3"
audioSize = 53288357
categories = ["Informatica", "Big Data", "Data Management"]
date = "2019-07-03"
description = "Mark Mandel is back today as he and Gabi Ferrara interview Bill Creekbaum of Informatica to learn how they work with Google Cloud for a better big data user experience."
draft = false
episodeNumber = 184
hosts = ["Mark Mirchandani", "Mark Mandel", "Gabi Ferrara"]
title = "Informatica with Bill Creekbaum"
image="/post/episode-184-informatica-with-bill-creekbaum/images/hero/hero-EP-184.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/c8pghv/episode_184_informatica_with_bill_creekbaum/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Happy Independence Day to our American listeners! [Mark Mandel](https://twitter.com/Neurotic) is back today as he and [Gabi Ferrara](https://twitter.com/gabidavila) interview Bill Creekbaum of Informatica to learn how they work with Google Cloud for a better big data user experience. [Mark Mirchandani](https://twitter.com/markmirch) is hanging around the studio as well, bringing some cool things of the week and helping with the question of the week!

Informatica provides data managing products that offer complete solutions focusing on metadata management, integration, governance, security, data quality, and discoverability. Bill's job at Informatica is to ensure these products really take advantage of the strengths of Google Cloud. One such example is a product that allows customers to design in Informatica and push their projects to Cloud Dataproc. Informatica also offers similar capabilities in BigQuery. When moving data from on-prem to the cloud, customers can use Informatica and Google Cloud together for a seamless transition, cost savings, and easier data control.

Together, Informatica and Google Cloud can also facilitate the acquisition of high quality data. To have better, more trustworthy output, data inputed needs to be safe to access, have few or no duplicates and null values, and be complete. To achieve this, developers usually use a combination of the Informatica tools Intelligent Cloud Services, Enterprise Data Catalog, and Big Data Management, and the Google tools BigQuery, Cloud Storage, Analytics, Dataproc, and Pub/Sub.

Bill's closing advice for companies comes in three parts: take stock of the data you've got, set goals, and develop a well-rounded team.

<!--more-->

##### Bill Creekbaum

Bill Creekbaum is Sr. Director of Product Management for Cloud, Big Data, and Analytic Ecosystems at Informatica. He is focused on delivering market leading unified data management platforms and services that help customers take advantage of their greatest assets, data. Bill has been in product management and product marketing for more than 20 years and for the past 10 has been focused on successfully delivering SaaS and Cloud Applications to the market. Prior to joining Informatica, Bill has worked at SnapLogic, GoodData, Oracle, Microsoft, Mindjet, and more. See more of Bill's experience on [LinkedIn](https://www.linkedin.com/in/billcreekbaum).

##### Cool things of the week

* Google Cloud + Chronicle: The security moonshot joins Google Cloud [blog](https://cloud.google.com/blog/topics/inside-google-cloud/the-security-moonshot-joins-google-cloud)
     * GCP Podcast Episode 135: VirusTotal with Emi Martinez [podcast](https://www.gcppodcast.com/post/episode-135-virus-total-with-emi-martinez/)
* Introducing Equiano, a subsea cable from Portugal to South Africa [blog](https://cloud.google.com/blog/products/infrastructure/introducing-equiano-a-subsea-cable-from-portugal-to-south-africa)
* Kubernetes 1.15: Extensibility and Continuous Improvement [blog](https://kubernetes.io/blog/2019/06/19/kubernetes-1-15-release-announcement/)
* Future of CRDs: Structural Schemas [blog](https://kubernetes.io/blog/2019/06/20/crd-structural-schema/)
* See how your code actually executes with Stackdriver Profiler, now GA [blog](https://cloud.google.com/blog/products/management-tools/see-how-your-code-actually-executes-with-stackdriver-profiler-now-ga)

##### Interview

* Informatica [site](https://www.informatica.com/)
* Informatica for GCP [site](https://www.informatica.com/gcp)
* BigQuery [site](https://cloud.google.com/bigquery/)
* Cloud Storage [site](https://cloud.google.com/storage/)
* Cloud Dataproc [site](https://cloud.google.com/dataproc/)
* Intelligent Cloud Services [site](https://www.informatica.com/products/cloud-integration.html)
* Enterprise Data Catalog [site](https://www.informatica.com/products/big-data/enterprise-data-catalog.html)
* Big Data Management [site](https://www.informatica.com/products/big-data/big-data-edition.html)
* Google Analytics [site](https://marketingplatform.google.com/about/analytics/)
* Pub/Sub [site](https://cloud.google.com/pubsub/)
* Google Cloud & Informatica: Accelerate your Data-Driven Digital Transformation [webinar](https://www.brighttalk.com/webcast/10477/334888)
* Informatica for Google BigQuery [data sheet](https://www.informatica.com/content/dam/informatica-com/global/amer/us/collateral/data-sheet/google-bigquery-connector_data-sheet_3299en.pdf)
* Informatica Intelligent Cloud Services for Google BigQuery [site](https://informatica-google.orbitera.com/c2m/trials/signup?testDrive=976&goto=%2Fc2m%2Ftrial%2F976)


##### Question of the week

[If I want to have my App Engine Application serve any subdomain on my custom domain, how do I do that?](https://cloud.google.com/appengine/docs/standard/python/mapping-custom-domains#using_subdomains)

##### Where can you find us next?

Gabi is done traveling.

Mark Mirch' is working on [Stack Chat](https://www.youtube.com/playlist?list=PLIivdWyY5sqJvwGd0PTzSx1j0cePX0INl).

Mark Mandel is going to [Tokyo Next](https://cloud.withgoogle.com/next/tokyo/), [Open Source in Gaming Day ](https://events.linuxfoundation.org/events/open-source-in-gaming-day-2019/attend/about/), and the [North American Open Source Summit](https://events.linuxfoundation.org/events/open-source-summit-north-america-2019/).

##### Sound Effect Attribution

* "small group laugh 6.flac" by tim.kahn of [Freesound.org](https://freesound.org)
* "Chewing, Carrot, A"  by Inspector J of [Freesound.org](https://freesound.org)
* "Testtone1000hz" by Jobro of [Freesound.org](https://freesound.org)

{{< transcript "[MUSIC PLAYING] MARK MANDEL: Hi, and welcome to episode number 184 of the weekly Google Cloud Podcast. I am Mark, and today, I'm here with Mark. Hey, Mark." >}} 

MARK MIRCHANDANI: Hey, Mark. How are you? 

MARK MANDEL: I have a cold, so I'm at home. And my house is falling apart. 

[CLATTERING] 

But outside of that, I'm doing well. How are you doing? 

MARK MIRCHANDANI: I like your positive attitude, which is awesome. 

MARK MANDEL: Yeah, thanks. 

MARK MIRCHANDANI: But that sounds bad. 

MARK MANDEL: It's fine. It's fine. Everything will be fine eventually. 

MARK MIRCHANDANI: It all works out. 

MARK MANDEL: After a while. But we have a great interview today. Gabi and I did an interview with Informatica with Bill Creekbaum, Senior Director of Product Management for Cloud, Big Data, and Analytic Ecosystems at Informatica. Whew, that is a long title. I hope one day I have a title that long. But we talk all about hybrid cloud with big data and analytics, migrations from on-prem to cloud with big data and analytics, all sorts of good stuff around, essentially, big data and analytics. 

MARK MIRCHANDANI: Well, that sounds pretty exciting. And I think that if you tried hard enough, you could probably just insert more Google products into your title. 

MARK MANDEL: Yeah, I think so. 

MARK MIRCHANDANI: Master of Agones, and Kubernetes, and Dataflow, and BigQuery and also a consultant on-- and you could just keep going. 

MARK MANDEL: Then I'd have to learn a lot more products than I currently know. And that sounds hard, and I don't feel like doing that. 

MARK MIRCHANDANI: Well, in order to test your knowledge there, I have a great question of the week for you, which talks a little bit about App Engine and using custom domains. But before we even get into that-- 

MARK MANDEL: Ooh, that sounds like fun. 

MARK MIRCHANDANI: --we should talk about our cool things of the week. 

[MUSIC PLAYING] 

MARK MANDEL: We absolutely should. So first of all, let me say a large congratulations to Chronicle. If you aren't familiar with Chronicle, they are the security moonshot company inside Google that deal with all kinds of interesting security stuff. You may have heard the episode we did previously, 135, talking about one of their things, which is VirusTotal, which is actually a free scanner for files for malware and viruses. It can also be used by companies. It's very, very cool and just one of the things they do in the security space. But pretty excited to have them on board with Google Cloud to help enhance the security features we have with Google Cloud and make all the security things better for all our customers. 

MARK MIRCHANDANI: Yeah, I mean, that sounds awesome. And I think that it's not as though people aren't concerned about security. And we talk a lot about encryption and all the kind of different infrastructure level security offerings that Google Cloud has by default. But for larger companies, you need more, right? You need virus protection, email protection, all those things. So I think that them joining Google Cloud will really open up some real cool opportunities for people who use the cloud. 

One of the cool things that I was actually just recently reading is that we are opening a new undersea cable. 

MARK MANDEL: Absolutely. 

MARK MIRCHANDANI: I think it's right around the West Coast of Africa. So it goes all the way from Europe, all the way down to the bottom of Africa. And in case you weren't aware, Africa is a very big continent. So that's going to be a big cable. I just think it's fascinating. When I joined Google, there were a lot of people making jokes about the undersea cables and the shark proofing, which, apparently, is a real thing, right? 

And for anyone who hasn't heard of it, we have these big undersea cables that kind of-- 

MARK MANDEL: It's a thing. 

MARK MIRCHANDANI: --go around the globe. 

MARK MANDEL: It's a real thing. 

MARK MIRCHANDANI: And a common problem, apparently, with those cables is that sharks like to eat them. 

[CRUNCHING] 

Which I can't relate to, I have to say. 

MARK MANDEL: I believe it actually has something to do with the electronics going through it, and it sets off their sensors. And they really like-- I don't know exactly, but. 

MARK MIRCHANDANI: Oh, I should do some research on it. That sounds really cool. But for the people who are trying to get internet through those wires, it turns out sharks are kind of a [BLEEP] pain. Generally speaking, people chewing through your cables is a bad thing. 

[DING] 

Anyway, I think it's really awesome. And it just fascinates me that we're just building these huge pipelines to just kind of add additional connectivity for a lot of different areas. So I'm really excited to see this one come online in the next two years. 

MARK MANDEL: Yeah, absolutely. And shout out to our listeners in Africa. Hopefully, this works out very well for you. All right, cool. So I think I have something else as well. Oh yes, I would be remiss if I didn't mention Kubernetes at least once in a podcast. 

So this was a little bit ago, but I don't think it's been mentioned so far. Kubernetes 1.15, congratulations to the team on that release. I'm pretty excited about this. This is a lot of extensibility around core Kubernetes APIs, including custom resource definitions and a lot of new features for customer resource definitions, which is an area in which I work in a lot. 

So very excited about that, as well as cluster lifecycle stability and usability improvements, container storage functionality, and lots of other good things there as well. So if you want to dig more into that, there's actually a really good article that we'll link to as well, talking about the future of customer resource definitions, which they call structural schemas-- that's a lot of alliteration-- where they go into that a lot deeper. And I'm pretty excited about it. It looks like it's going to be really, really handy for those people who write controllers and operators. 

MARK MIRCHANDANI: There's been, obviously, a lot of recent news around Kubernetes, and then somewhat related is Istio, of course, which I think just relaunched 2 or 1.12 recently. I should know that. But I think it's super cool to see all these updates. I'm seeing a lot of stuff on the internet about people being scared about Kubernetes kind of adding too many features into that. So I'm really interested to see how the community is really driving a lot of the kind of upgrades and different things that go into each Kubernetes release. 

MARK MANDEL: Yeah. I think-- and it's Istio 1.2. I checked it out for you. Well, this could be a whole episode in and of itself. I think there's two things to that. I think there's a lot of stuff that you can just do with Kubernetes, with services and deployments. And that's it. You could just get started with that. You can get running. 

But I think all the extension mechanisms mean that people can build simpler layers, even, or highly opinionated layers going forward as well, to make things easier for very specific workloads. So I think there's a two-pronged approach there. But yeah. That could almost be its own episode. That sounds like it might be a good episode, actually. 

MARK MIRCHANDANI: Yeah, actually, now that you mention it, why don't we do that episode? 

MARK MANDEL: We should do that episode. 

MARK MIRCHANDANI: All right. We'll make a note and do that. 

[TYPEWRITER TAPPING] 

MARK MANDEL: Cool. 

MARK MIRCHANDANI: But let's finish this one first. 

MARK MANDEL: Yes. 

MARK MIRCHANDANI: I have one more cool thing of the week, which is now that Stackdriver Profiler is now generally available. 

MARK MANDEL: Oh, fancy. 

MARK MIRCHANDANI: This was a really cool tool that was-- I think it was in beta for quite awhile. But it actually lets you kind of look at production code that's executing and then kind of see how it's performing as it traces through, as different functions are being called. And it kind of gives you this cool little visual stack of where your time is being spent. 

So for a lot of the people who use Stackdriver and a lot of the people who-- or actually, I should say-- who are using production code on GCP, Stackdriver's been a really awesome tool. Because it lets you do live code debugging and fixing in production, which is super impressive. Oh, but probably not fixing, but actual observation and seeing like, oh, well, sometimes in dev, you just can't reproduce that problem. So being able to reproduce it in production and then having a really clear visual graph of where those slowdowns are and where the problem might be, I think that's super awesome. And so now that it's GA, I think, hopefully, a lot more people will be more comfortable trying it out. 

MARK MANDEL: Yeah, that sounds really great. Fantastic. Well, I tell you what. Why don't we get stuck into the interview that Gabi and I did with Bill from Informatica? And we can hear all about big data analytics and all sorts of other fun things. 

MARK MIRCHANDANI: Cool. Excited to hear it. 

[MUSIC PLAYING] 

MARK MANDEL: So I'm very happy today to have Bill Creekbaum here, Senior Director of Product Management, Cloud, and Big Data Ecosystems from Informatica. Oh my god, that's a lot. Bill, how are you doing today? 

BILL: I'm doing great. Thanks, Mark. 

MARK MANDEL: Thank you so much for joining us today. Before we get stuck into some big data things and talking a little bit about Informatica as well, that is a really big product title. So who are you? What do you do? What is this all about? 

BILL: So I have the privilege of working with the Cloud, Big Data, and Analytic Ecosystems for Informatica. And a lot of our customers would think, especially in the context of Google, that means we really focus on connectivity to BigQuery and Google Cloud Storage. But we actually have a much broader charter. I'm really focused on making sure that all of our products take the most advantage of the strengths of the Google Cloud. 

So for example, we have a big data management product that allows customers to visually build and manage big data jobs that integrate with all of our governance tools and whatnot. An option that we have through the partnership with Google is we allow the customers to design in Informatica and push the job down to DataProc, so it actually runs as a push-down job there. And we can do similar capabilities with BigQuery. 

More recently, we have really done a lot of partnership with Google to create value-added solutions for our common customers. And it's far more than just connectivity. Now we're really thinking about broad use cases, Customer 360 type use cases, marketing use cases. It's very exciting. 

MARK MANDEL: So you said a lot of words there I'm going to guess relate to big data and stuff. But why don't we start at a high level? So what does Informatica actually do? 

BILL: And so Informatica provides a portfolio of data management products. All of our products are very metadata aware. And the benefit there is by having a complete solution that focuses on integration, governance, security, data quality, and discoverability, you have that completely integrated solution that allows you to move quickly, move safely, deal with strict regulations with confidence and at the same time, deliver business value, right? 

I mean, everyone talks about the democratization of data. This is how you do it. If you're missing any one of those pieces, then you're starting to worry. You open yourselves up to risk, and then that's when you start to hold the data back. And so I think with our platform, we really allow business users to get a hold of the data. 

MARK MANDEL: Awesome. So what's a really great example of someone using Informatica and Google Cloud together that people might like? What would be a canonical example of that? 

BILL: There's a couple of really good examples. I think a lot of what I've been really excited to see recently is customers that try to build Customer 360 type analytical solutions. And they started on Prime, and they started using Hadoop. And that was really a lot of the promise of the beginning of the big data movement. 

But the operational costs are just so extreme. But now they're working with Google and BigQuery in particular. And they're just seeing so much tremendous opportunity to move those very expensive workloads on-prem into the cloud. They're saving a ton of money, but more importantly, you're seeing new opportunities. The technology is opening doors to new use cases. 

And I think that's my favorite part, is customers begin the journey. It's like, oh, it's going to be cheaper for me to run it in the cloud. And then they pause, and they go like, oh, wait, wait. You mean I can do it completely different and faster and still do it cheaper? Definitely start to see the creativity of our customers and our industry at large really take flight. 

GABI: So Informatica, then, it's more like-- from what I got, you were able to facilitate ETL processing for customers. Let's say, you let them build their own pipelines, apparently. And beyond that, how do customers approach you? You said that some already have an old setup already from the beginning of big data. But how usually-- like a new company comes to you that has no big data at all, they want to start doing it, how does that approach happen? 

BILL: Well, it definitely depends on where that particular customer is in their-- what's called the modernization journey, right? But what we've been really excited to see is that when our customers use our complete portfolio-- not just our integration products, but the complete portfolio-- especially with our metadata-driven catalog capabilities. Because they start much more from a use case perspective. They start from a business object perspective. 

Because first of all, you got to find the right data, right? You might have a sales operation use case, right? And you're working with sales ops. You want to modernize, let's say, a marketing lead campaign initiative, right? Well, to start, I gotta go find the good marketing lead data. And so if I have a catalog that has scanned my enterprise, I can type in the Google for the enterprise, right? Show me all of my marketing lead data. And you might get back 20, 30, maybe 50 different data assets. 

At that point, OK, I'm overwhelmed as a business user. So do I just pick the one at the top? Do I randomly pick? How do I choose? And what's really beneficial is that when you have that data catalog capability with a higher order value, right, use machine learning to identify business objects, locate PII, you can start to make some really intelligent decisions. And because now I can determine-- this says marketing lead. Does it have all the elements that's required for a complete marketing lead object? 

So that's kind of step one and step two, is do I know where that data came from? And do I know if it's being used downstream by a different application? So for example, if I see a marketing lead object, and I see that that object is being populated by Marketo and Salesforce sources, right? Those are pretty reliable industry sources. And I see it being consumed by 10 downstream applications that says, well, this is actually being used by the business. I can safely assume that this object is valuable and trusted, whereas if I compare it with another object that has no downstream consumption, I can make some informed decisions on which data to begin using. 

So the point is, is by combining data discovery with data integration, you can make much better decisions about what did integrate, and then go straight into the provisioning process to BigQuery. 

GABI: I usually see people saying-- and I agree-- that business value relies on the quality of data that you have. It doesn't matter how much money you're bringing if you're not creating your data properly. You're going to have some troubles, especially if you want to modernize, do data analytics, do machine learning. You need to rely on your source. And do you encounter a lot of people having problems with data that's not normalized, data that's not like the placated records, let's say? Do you have that many issues? And do you help those customers solve those kind of issues, too, or not? 

BILL: Absolutely. I've been in the analytics space for the better part of the past decade. And I've seen so many analytics initiatives fail after such great intentions because of bad quality data. It has nothing to do with the analytics itself. It has to do with bad raw material, right? And the quality data comes from a couple of different scenarios. 

Number one is, is it safe for me to access, right? If I can't safely access the data, there's no point, right? At that point, quality doesn't matter. So having a solution that masks data or adheres to Role Based Access controls, number one, I mean, that allows a business user to safely use the data, right? And we all talk about enabling the citizen x, right? Citizen integrators, citizen application developers, citizen analysts. We want those business users to safely acquire them. 

OK. So once your platform has allowed them to safely acquire the data, what is the quality, right? And quality is completeness of data, right? If I've got a data set that's got a bunch of null values, that's going to have limited utility for me, right? And being able to really profile your data set gives me an understanding of the quality of data. But beyond that, now we get into a kind of higher order of data quality. 

And so let's continue our marketing lead example. If I've got a table with some really good marketing lead object definitions, and part of that is email addresses, phone numbers, and zip codes, yet 60% of my email addresses are malformed, and my zip codes only have three digits, yeah, the structure might look fantastic. But the actual data is going to be useless for me, all right? 

And you don't want to throw it away. Do you have the ability to recover from it and get quality data? And if not, can we safely exclude the data? So it's absolutely essential because at the end of the day, analytics comes down to, do you trust the output? And the higher the quality input, the better trust you have with particular analytic. 

MARK MANDEL: Given that we are the "Google Cloud" podcast, this all sounds really great. But in application, what tools and products are we using here on Google Cloud to help facilitate this sort of pipeline? 

BILL: Ah, well, I mean, our customers use a combination of both our company's products, right? 

MARK MANDEL: Yep. 

BILL: And so from Informatica's side, they're using our Intelligent Cloud Services. They're using our Enterprise Data Catalog, Big Data Management, and sometimes Secured Source, which is one of our governance tools. And then on the Google Cloud side, Google BigQuery. I mean, I'm telling you guys, I am seeing so much traffic flow through to BigQuery. And the adoption is fantastic. And I'm seeing huge curves up and to the right in adoption and usage. 

But to really complement BigQuery, there's a lot of usage of Google Cloud Storage. That makes a lot of sense. I mean, behind the covers, we use a lot of them in tandem to really drive performance of bulk loading. We also see a lot of interoperation with Google Analytics. And we're starting to see a much bigger uptake of technologies like Pub/Sub as part of these workflows. And I already talked about Dataproc earlier. 

So one of things that I think about a great deal and that my entire team thinks about is, how can we best provide our customers with the strengths of BigQuery and the entire Google Cloud surfaced through the Informatica products, right? Because I want to give them easy access to it. That's what Informatica brings to the table, right? We bring easy access, visual design environments, governance, lineage, metadata management, et cetera. 

But I don't want to provide coverage that's just like vanilla access. I want our customers to take the most advantage of why they picked Google Cloud in the first place. 

MARK MANDEL: Nice. Do you have customers that are like, hey, I've already got a Google Cloud project, and I've got a bunch of stuff in Google Cloud Storage. And they come to you, and they're like, we're already doing stuff. How do we integrate? Or do you find it's coming from the other way, wherein you've got a customer from Informatica, and they're like, oh, actually now, we want to push this down into Google Cloud in some way, shape, or form. 

BILL: I got to tell you, Mark, sometimes I feel like it's coming from top, bottom, left, and right. 

[LAUGHTER] 

All different combinations. But in all seriousness, I mean, we really focus on the hybrid enterprise, right? And there's just crazy momentum to the cloud, right? I mean, heck, I've been talking about it forever, since the cloud was born, right? But it is just happening with just fierce velocity. 

But no matter that velocity, large enterprises are still going to have a presence on-prem. And we have to treat that hybrid nature of on-prem, cloud, multi-cloud as first class citizens, right? We all do. 

So a lot of times, our customers will-- I hate to speak in generalities. But from anecdotal engagements and evidence, a lot of our customers will start with, I need to modernize my legacy warehouse, and I want to get into BigQuery. Great cost performance benefits, great technology. 

And they start off with, really, just more of a cost savings, right? They want to get rid of their physical infrastructure, shift operation and the load to Google. But the reality is that halfway through that journey, that light, that epiphany happens. And they start to see much more of the value add of what can be done. 

For example, I was engaging with a large customer, a joint customer earlier in the year. And their initial goal was just to modernize their warehouse with BigQuery. And we started down that path, and it was going really well. 

And actually, during a joint engagement where I was actually co-presenting with somebody from Google to this particular customer, the light went on. And they're going like, wait, wait, wait. Can I replace my Hadoop environment on-prem with BigQuery and actually unify all my data? You should have seen the grins. It was like this collective room of lights going on about what was possible, the art of the possible. 

So back to your point, Mark, coming from existing scenarios or new scenarios, a lot of times, it will come with a new initiative. But then all of a sudden, it'll kind of blossom into multiple initiatives happening at once. 

MARK MANDEL: So I'm glad you brought up on-prem because I wanted to ask you about that data migration story. How are you seeing customers taking their data and bringing it from, say, an on-prem environment and bringing it into the cloud? I mean, that seems like a big job in and of itself. 

BILL: It is a big job in and of itself. And there are technical nuances that need to be considered, right? The one that I run into most often are like differences in data types, right? But what I see a lot of customers start with is just like, again, they see dollar signs and the opportunity for immediate cost savings. And that's absolutely correct. I mean, there can be a tremendous and fast ROI by moving from a legacy warehouse into BigQuery. 

And what that means is that customers are oftentimes starting what is like a lift and shift. They just want to take what's there, move into BigQuery, and be done, right? And it's true. A customer can realize some quick savings that way, but so much is lost. And if you're going to go through this effort-- and let's be honest. This is an effort. No matter how much awesome tooling both of our companies bring to the table, it's still an effort. 

Customers that don't take this inflection point to think about the future, I think, are missing a great deal of opportunity. Right? I mean, I think the obvious example is classic warehouse models are heavily normalized, right? Which made a lot of sense for the classic warehouse, right, based on old technologies, old storage, old compute, and whatnot. 

But we all know that when you move to BigQuery, it's like, no, no, no. But seriously, to normalize this and really take advantage of the power. But it's such a complete shift for DBAs and people that have been doing this for 25, 30 years, right? And for those that just simply do a lift and shift for that immediate cost savings, I think they're really missing a great opportunity. 

And so a lot of times, we'll start off with the lift and shift to get immediate success. But then it immediately moves into an evolution, once you're in BigQuery, to start taking advantage of the data structures and technologies that are there. So it's not an either/or, but it's a closely synchronous and, if you will. We go lift and shift immediately into evolution, and that's where I think we see a lot of benefits gained. 

GABI: I remember when I started working with a bit of big data, I'm not that versed, let's say. But the fact of being able to use BigQuery, just put my data there, and it figures out indexes, it figures out how many servers it's going to take to spin up a query, that probably makes your product more versatile, taking advantage of this kind of technology. And you said this mind shift for old school DBAs some has growing pains, does that happen to you, too? 

BILL: It certainly does. And I think especially customers that have been working with Informatica for 20, 25 years, there's a familiarity with the common patterns, right? But sometimes those common patterns don't translate well into the cloud. And so there's a learning curve. 

And I think one of the things that Informatica is able to bring to the table is that we help flatten that learning curve. We can help take advantage of the unique capabilities of the cloud faster. Because from our customer's perspective, they're still working with this familiar toolset. And yes, the technology behind that we're connecting to differs, but we're able to kind of abstract it, so we're able to get some really fast adoption. 

But once you get that fast adoption, remember a few moments ago, I was talking about we also want to make sure that customers can truly take advantage of the characteristics of Google Cloud and BigQuery. So, for example, we talked about ETL earlier, but let's talk about ELT, Extract Load Transform. We want to seriously take advantage of that kind of capability in BigQuery. So using our Intelligent Cloud Services to actually load data into BigQuery and then process the transformation inside BigQuery, we're able to actually push down the entire job into BigQuery, so that we're using the BigQuery engine to do all the transformations. 

And that's got a couple of benefits. Number one, you just talked about it. It's a serverless scale out environment with tremendous compute power that you're able to spin up on demand. That means Informatica is able to take advantage of that. And so we're able to deliver a crazy amount of performance with ease. And our common customers are benefiting greatly from that. 

MARK MANDEL: Fantastic. I'm kind of curious as well, too. Obviously, you've worked with a variety of people who do these sort of big data and analytics platforms. If you could tell anyone who works in big data analytics one thing that they should all be doing or one mistake they should potentially not make that's broadly generalized, what would you suggest as maybe the best practice you would love to get out into the world? 

BILL: Oh, Mark, that's such a loaded question. 

[LAUGHTER] 

MARK MANDEL: That's why I asked it. 

BILL: Can I have like 10, not one? 

MARK MANDEL: Yeah, we can give it a couple. We got some time. 

BILL: I think I could probably boil it down into three very distinct recommendations. Number one is you've got to take stock of what you've got. I think companies are completely surprised by the amount of data assets that they have in every nook and cranny of their enterprise. And you really want to take a good inventory of what you have, determine what's important, prioritizing categories. That's kind of step one. 

But maybe most importantly is, you need to set goals. And I know that sounds basic, and it sounds obvious. But more often than not, I'm not seeing clear goals set. So A, we have no idea when we ever finish because we don't know where we're headed. And when we do get there, was it successful? Was it not? We don't know. And by setting goals, you set focus. You set kind of like your guiding star that everyone aligns and marches towards, which then leads into the third one, and that is, you've got to develop a team. 

And again, it seems obvious, but maybe not in the way that you're thinking about it. I would recommend companies to form like a migration, a SWAT team. And this is the team that is well versed both in the technology and the business schools. Because they need to be the leaders, right? Because they're going to get people to follow them on this journey into the cloud. 

And for many people, especially those that are comfortable with the familiarity of doing it the old way, they're going to ask why. And you want this team to be able to not only execute, but to also inspire the confidence in moving to the cloud. And so when you kind of combine that with clear goals and a really good understanding of what you have in place today, I just think it sets an enterprise up for success. 

GABI: Talking about innovations and easy-to-use technologies is good. But it also brings up with great powers, great responsibilities, right? 

[LAUGHTER] 

So how does GDPR and those kinds of regulations ensure they're working with Informatica? Because one thing is to be GDPR ready and another thing to be GDPR compliant. 

BILL: Absolutely. 

GABI: So how do you deal with that? 

BILL: Well, and again, I mean, it's-- I don't want to sound like a broken record. But because we deliver a platform that integrates integration, governance, security, metadata management, discovery as part of the whole platform, it's a little bit easier for us to deliver on the realization of being GDPR compliant, not just ready. 

For example, the right to be forgotten. It's a difficult problem, right? I mean, if you think like a global enterprise with many subsidiaries, you probably have PPIs sitting all over the globe, right, managed by many different business units. But the right to be forgotten doesn't care about such silos. It's like if I want to be forgotten, that's it. You need to forget me. 

And so we have a product called Secured Source that allows a compliance officer to kind of log in, and it actually says, show me all the locations within my enterprise where a PPI exists. And then from there, again, it's like, OK, I have a road map of where I need to go, so that when somebody chooses to be forgotten, I'm not guessing or hoping. I'm able to know, right? 

And it's definitely one of the benefits of having that unified platform that's integrated as a complete solution because it enables that. And things like GDPR and CCPA, I mean, they codify much of what we've talked about, right? We've talked about security and governance since we began our conversation a short while ago. And this kind of codifies the requirements. But I think in some sense, every enterprise worries about this, regardless of regulation. 

MARK MANDEL: Speaking of things like personally identifiable information and other potential high risk sort of information storage, do you have best practices or things that people should be aware of when looking at that kind of data that could potentially be high risk? 

BILL: Absolutely. So I mean, we started off talking about modernizing your data infrastructure to BigQuery. So let's look at it from a construct of that journey, right? And we talked about setting goals and building a team to be successful. Well, part of being successful also is quick wins, right? You want to build a momentum based off of success. 

So one of the things that I've seen successful companies do is when they start their migrations into the cloud, let's not start off with the tables full of PII. Because that radically complicates the scenario, because now you got to get your IT people involved. You got to get your security people involved. You got to get governance people involved. 

So sometimes it's best to know where your PII data is not, right? And so by using Informatica's Enterprise Data Catalog, you can see, right, and not guess. It's like OK, this table's got a bunch of PII. There's a lot of value here, but you know what? Let's do that maybe in phase two or phase three. Let's come and take a look at these other data objects that has a lot of business value below PII. And that's going to allow me to migrate to BigQuery rapidly, get success, build a new use case, and now I can repeat and build on that success and gain that momentum. Probably almost an opposite answer of what you were expecting, but sometimes knowing where your PII is not is very beneficial. 

MARK MANDEL: Awesome. All right, cool. So we're coming up on time here, unfortunately. But before we go, Bill, is there anything that we've missed, or you want to mention, or make sure that you get out there, so people can hear it? 

BILL: Mark, so number one, thanks to you and Gabi. I've had a great time of chatting with you both. I would say to our customers listening today, check out the partnership between our companies. It's fantastic. I truly enjoy working with the team at Google. And together, we're doing some great solutions for our customers. And it's fun to be in market with you guys. So thank you. 

MARK MANDEL: Awesome. Well, thanks for being a wonderful partner. 

GABI: Thank you, Bill. 

MARK MANDEL: Well, Bill, thank you so much for joining us today on the podcast. 

BILL: My pleasure, thank you. 

MARK MANDEL: Huge thanks to Bill for joining Gabi and I this week. Super interesting episode. Really, I don't do a lot with big data analytics, so it was super handy for me to learn more about that area and some of the migration patterns that people have. 

MARK MIRCHANDANI: Plus, I feel like if you do some more in that area, then you can add that to your title. 

MARK MANDEL: Sure. Yeah. Then I can have a long title like Bill. 

MARK MIRCHANDANI: [LAUGHS] Well, more relevant to, I think, everyone who's listening than your title, I think we have our question of the week. 

[MUSIC PLAYING] 

MARK MANDEL: Yes, yes, we do. Go ahead, ask it. I'm ready. 

MARK MIRCHANDANI: So when you create an App Engine app, you get a domain that comes with it. Usually a pretty generic domain based on the project name, and then App Engine. But of course, you can use your own custom domains. And I think a lot of people, they want to do that because custom domains are nice. But when you're using a custom domain, sometimes a lot of times, you need to use subdomains. How the heck do you use subdomains with a custom domain in App Engine? 

MARK MANDEL: Whew! That's a good question. So there's actually a lot of really cool ways you can configure subdomains with App Engine in both static and dynamic ways, which is super nice. 

So for a static point of view, you can set up a dispatch.yaml. It's a configuration file wherein you can configure, actually, a variety of stuff, not only just subdomains, but also pods and some other things, to particular services. So services are individual deployments inside App Engine. Like if you had different API endpoints, you might want to do different services. Then you can have versions within those services as well. 

So you can set that up within your dispatch.yaml to say like, oh, I want dog.food.bar, I want that dot com to go to my default service, but cat.food.bar, I want to go to my cat service. And that's pretty straightforward. It's just a yaml file, and it is pretty easy to set up. 

That being said, if you want to get dynamic with it-- which some people do, and we use it for some things that might be a bit easier-- you can set that up with wild cards as well. So you can do that to the lower level down in your dispatch.yaml. 

But if you just want to do it simply, you don't even need a dispatch.yaml. You can set up your custom domain with basically a wild card. So you might be like star.free.com. And you can set that up in your custom domain configuration and potentially also have a wild card for your SSL if you have an SSL, which you probably should. 

And what's nice there is what will happen there is if a person goes to a subdomain, writes a wild card-- it could be any subdomain-- App Engine will actually look for a version or a service that matches the same name as that subdomain. If you go to dog.food.com, it'll go look for a service named dog, and it will then serve that. 

So that can be a really handy way of if you have subdomains that come up on a regular basis, maybe you have snapshots of documentation that you [INAUDIBLE] have version, something like that, that come up every regular period. You can set up something dynamic like that, so that all you have to do is create a new either version or service that matches this subdomain that you have. And then that'll get served. And if App Engine can't find that subdomain, it will just send it back to default, which is fine, too. So you can do some really nice dynamic stuff that way, too. So you have lots of options. 

MARK MIRCHANDANI: So if you have the wild card, you obviously get all the subdomains you want. And then from there, you can either statically configure them, saying which ones you want. Or you can do it dynamically and then pull up different versions, which I think you made a great use case for when you said, hey, you might have different versions that are in the past. And you want to still have references to those. 

MARK MANDEL: Yeah. 

MARK MIRCHANDANI: So you kind of have two great ways to continue hosting content all from a single App Engine project. 

MARK MANDEL: Yeah. And it's kind of like that whole thing that it's convention for configuration when we have the wildcards. Or you can have static configuration using your dispatch.yaml. 

MARK MIRCHANDANI: Awesome. Well, I think that should help a lot of people who are looking to kind of make more complex App Engine deployments. 

MARK MANDEL: Awesome. Well, before we wrap up, Mark, are you going anywhere? Do you have any cool content? Are you working on anything you can talk about, or is it all super secret? 

MARK MIRCHANDANI: I'm always nervous about talking about content before it goes live. Because what if the dates change or anything like that? 

MARK MANDEL: So it's super secret? 

MARK MIRCHANDANI: It's nothing secret, but they involve customers and different people working with the cloud. So I'm like, oh, hey, we got ex-president Obama on here to talk about cloud. And of course, I didn't. But that would be really cool. 

MARK MANDEL: No, you didn't. That would be really cool. Is there anything you recently released that you can talk about? 

MARK MIRCHANDANI: Yeah, I mean, I think we released two episodes earlier this month on "Stack Chat," which I think we mentioned once or twice before, which is kind of our customer interview series that I'm working on. And one of them talks a lot about Anthos. And I think that's really timely just because there's been a lot of buzz around Anthos. 

MARK MANDEL: Absolutely. 

MARK MIRCHANDANI: And a little bit of confusion about, hey, what actually is it, and how does it work? And I think this helps talk a little bit about how this company Arctiq found a use case for it and then used Anthos to solve it. 

And I think we're seeing a lot of cool media on Anthos. There's actually a really fun video that Sandeep just put out, which is a rewind of a presentation at Next called "Meet Anthos." And these rewinds are fun because they only take about four or five minutes to watch. And they kind of summarize that talk. So I definitely recommend checking out the Anthos episode, the interview with Arctiq of "Stack Chat," as well as Sandeep's "Meet Anthos." 

I guess it's not really related to me traveling, though. So long story short, no, I'm not traveling, because we're making videos. 

[LAUGH TRACK] 

MARK MANDEL: No, no, that's fine. That's all good. 

MARK MIRCHANDANI: What about yourself? 

MARK MANDEL: I will be at Tokyo Next presenting, which I'm pretty excited about. Always love going to Japan. And then the day before the North American Open Source Summit, there's an Open Source in Gaming Day where I will be presenting a couple of things. I think, actually, I'm doing a keynote, which will be fun. So I'll be doing that. And I'll also be hanging around the North American Open Source Summit. So I'll be hanging out there. So if you're around, come say hi. 

MARK MIRCHANDANI: Very, very cool. It sounds like you're going to be in a lot of places. 

MARK MANDEL: I get around a bit. 

MARK MIRCHANDANI: I feel like for all the traveling you do, I don't do, which is good because then the Mark equilibrium would be upset if we both traveled, or we both didn't travel. 

MARK MANDEL: Yeah. 

MARK MIRCHANDANI: Right, some kind of paradox. 

MARK MANDEL: Yeah, you can't have us both at the same place at the same time. 

MARK MIRCHANDANI: Well, I think that will do it for this episode. 

MARK MANDEL: Wonderful. I think so. So Mark, thank you so much for joining me on this week's podcast. 

MARK MIRCHANDANI: Thank you, Mark. 

MARK MANDEL: Thank you all for listening. And we'll see you all next week. 

MARK MIRCHANDANI: Bye. 

[MUSIC PLAYING]