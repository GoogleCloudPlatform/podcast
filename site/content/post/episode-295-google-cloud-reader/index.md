+++
audioDuration = "00:48:29"
audioFile = "Google.Cloud.Platform.Podcast.Episode.295.mp3"
audioSize = 116300806
categories = ["Blog", "Podcast", "Cloud Reader"]
date = "2022-03-07"
description = "On the show this week, we're talking about Google Cloud Reader, a nifty podcast we created to narrate Google Tech blog posts."
draft = false
episodeNumber = 295
hosts = ["Stephanie Wong", "Jenny Brown"]
title = "Google Cloud Reader with Jenny Brown"
image="/post/episode-295-google-cloud-reader/images/hero/hero-EP-295.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/tadg4f/episode_295_google_cloud_reader_with_jenny_brown/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

On the show this week, we're talking about Google Cloud Reader, a nifty podcast we created to narrate Google Tech blog posts. Host [Jenny Brown](https://twitter.com/jbrojbrojbro) tells us her inspiration for creating Google Cloud Reader and she and cohost [Stephanie Wong](https://twitter.com/stephr_wong) walk us through a series of published episodes.

First up, we learn what Cloud SQL Maintenance is and how customers can customize maintenance schedules to limit the impacts of downtime. Region picker is the topic of our next segment, and we hear how it helps projects stay cost efficient while conserving resources. Using three inputs, companies can decide quickly which region offers the best balance between cost, latency, and carbon footprint for them. Next, we learn about search abandonment's effect on brand loyalty and how important it is for the right products to show in search results.

We tackle the working environment with the next piece, redefining productivity to make it more personal and less robotic and offering advice on being productive while maintaining a good work-life balance. Making learning more personalized is the subject of our next segment. We hear how Google is using AI to aid the instruction of students no matter their learning style. Building diversity, equity, and inclusion into companies is important for success, and our last segment offers advice on how to incorporate DEI initiatives to ensure employees feel valued.

##### Cool things of the week

* Build a data mesh on Google Cloud with Dataplex, now generally available [blog](https://cloud.google.com/blog/products/data-analytics/build-a-data-mesh-on-google-cloud-with-dataplex-now-generally-available)
* From watersheds to Koala habitats - tackling ecosystem restoration with data [blog](https://cloud.google.com/blog/topics/sustainability/how-restor-is-using-google-earth-engine-data-to-tackle-ecosystem-restoration)
 
##### Interview

* Understanding Cloud SQL Maintenance: why is it needed? [blog](https://cloud.google.com/blog/products/databases/how-does-cloud-sql-maintenance-work)
* Cloud SQL [site](https://cloud.google.com/sql)
* Faster, cheaper, greener? Pick the Google Cloud region that’s right for you [blog](https://cloud.google.com/blog/topics/sustainability/google-cloud-region-picker-helps-you-make-the-green-choice)
* Google Cloud Region Picker on GitHub [site](https://github.com/GoogleCloudPlatform/region-picker)
* Reduce your cloud carbon footprint with new Active Assist recommendations [blog](https://cloud.google.com/blog/topics/sustainability/reduce-your-cloud-carbon-footprint-with-active-assist)
* Research: Search abandonment has a lasting impact on brand loyalty [blog](https://cloud.google.com/blog/topics/retail/search-abandonment-impacts-retail-sales-brand-loyalty)
* Why Search Abandonment Is the Metric That Matters [video](https://cloudonair.withgoogle.com/events/summit-retail?talk=t2_s3_why_search_abandonment_is_the_metric_that_matters)
* The Google Workspace guide to productivity and wellbeing [blog](https://cloud.google.com/blog/products/workspace/google-workspace-guide-to-productivity-and-wellbeing)
* New Google Cloud Student Success Services help educators scale individualized learning [blog](https://cloud.google.com/blog/topics/public-sector/new-google-cloud-student-success-services-help-educators-scale-individualized-learning)
* Why representation matters: 6 tips on how to build DEI into your business [blog](https://cloud.google.com/blog/topics/research/6-tips-on-how-to-build-dei-into-your-business)
* Why representation matters [blog](https://services.google.com/fh/files/blogs/why_representation_matters_ebook.pdf)

{{< transcript "[THEME MUSIC] STEPHANIE: Hello, everyone, and welcome to episode number 295 of the weekly Google Cloud Platform Podcast. This is Stephanie Wong, and today I am here with J. Bro. We call her J. Bro, but Jenny. Jenny Brown, how are you?" >}} 

JENNY: I am doing really well. Hello, internet. Hello, Steph. How are you doing? 

[LAUGHTER] 

STEPHANIE: Hello, interwebs. 

JENNY: Yeah, it's me from the thing. 

[LAUGHTER] 

STEPHANIE: Well, we're super excited to have you on today again. And not only are you hosting this episode, but we have a very special episode because I'm going to let you do the drum roll announcement here. 

JENNY: I'm really, really excited because we're going to be talking about "Google Cloud Reader," which is a podcast that I created last year, much like a lot of folks did in the pandemic. I'm not tired of that joke yet. But in that podcast, we read articles from the Google tech blog so that folks can access them in an audio format. 

Instead of sitting down to read these blog posts, you can be bopping around your house, doing chores, taking care of your family, commuting, whatever you need to be doing. And you can be absorbing this content in an audio format, whether that's your preference or it's a requirement for you. And I use it all the time, which is fun except for when I'm listening to my own recordings, which is a little weird to be doing things around my house just like listening to myself reading. [LAUGHS] Yeah. 

STEPHANIE: It's always weird to hear your own voice, but I should get used to it at this point, since I'm doing so much of this too. But yeah, I mean, for people who might not the tech blog, the tech blog is the developers' and practitioners' subpage on our Google Cloud blog. And a lot of that content is created by DevRel, but it's also created by other folks too. And Jenny here is creating the audio versions of that, which I really appreciate. But I kind of want to dive a little bit into that before we move on to our next segment. Jenny, why did you decide to start the "Google Cloud Reader"? 

JENNY: So I know that I prefer an audio format for any sort of written material that I need to absorb. And I know that there are also others who have a similar preference or they even have a requirement for it. So why not expand the scope of all these different written materials and get them in the hands and get that knowledge in the minds of more people? 

STEPHANIE: Absolutely. And if you're like me, I love listening to things at 1.5x if I want to get through a lot of material. So it's nice. So today, we're going to be featuring several of Jenny's favorite "Google Cloud Reader" episodes. And before we dive into it, why don't you go ahead and tell us the tagline? 

JENNY: OK, so this is a made-up tagline, but I'm going to test it out here first. "Google Cloud Reader," like reading the blogs, but easier on the eyes. 

STEPHANIE: You got a great voice for radio. [LAUGHS] Easier on the eyes. 

JENNY: A face for radio is definitely a burn, but I like voice for radio too. That works as well. Got to practice the smooth tones, you know? 

STEPHANIE: Less severe burn. [LAUGHS] 

JENNY: Yeah, exactly. 

STEPHANIE: All right. So why don't we go ahead and first dive into the Cool Thing of the Week? 

[MUSIC PLAYING] 

So if y'all don't know yet, Dataplex is now generally available and Dataplex is something that we announced mid last year. It was one of our biggest announcements in the data analytics space. If you don't know what it is, it's an intelligent data fabric that enables you to manage, monitor, and govern data across lakes, data warehouses, and data marts. And it also automates the data lifecycle management, data productivity, all of that. 

And so the blog post that we're going to be linking in the show notes here is talking about some of the updates that have happened. It really dives into the specifics of how you can build a Dataplex model on Google Cloud and some of the components that make up the product so that you can discover metadata across sources, enable interoperability of tools, govern data at scale, and do one-click data exploration. So there's a lot packaged into it. And yeah, that's one of our most exciting things this week. 

JENNY: And another really exciting thing this week is from the sustainability standpoint. I know that I'm doing everything I can to be sustainable, right? But there are a lot of problems that are beyond my scope of impact, let's just say, and I know that there are plenty of other folks who feel that way as well. 

So the article that I absolutely loved on the blog this week talks about how Restore is using Google Earth Engine data to tackle that ecosystem restoration because it's such a complicated process. But part of that is how it enables local populations and individuals to really make an impact when it comes to ecosystem and habitat restoration. 

And I just think that is the absolute coolest thing. I love not only that there are folks doing this work, but that they are making it a lot more accessible for everyone so it seems like less of a hopeless situation, right, for the common individual. And I won't spoil the ending of it for you or any of the details because it's all on the blog in this great article. However, it does highlight the koala population and I'm here for it. 

STEPHANIE: Aw, I love koalas. 

JENNY: I know. 

STEPHANIE: And Jenny, I have to ask you, what's a koala's favorite pop song? 

JENNY: Oh, I don't know, but I know I'm going to love this answer. What is it? 

STEPHANIE: Koala Me Maybe. 

JENNY: Oh, my gosh. 

[LAUGHTER] 

STEPHANIE: Oh, I got way more where that came from, but we're going to save everyone. 

JENNY: That's bonus material. Yeah, yeah. 

STEPHANIE: Stick around to the end. All right. Well we have a lot more in store for your "Google Cloud Reader" episodes, but why don't we go ahead and dive into the first favorite episode of yours? 

JENNY: Yeah. So this episode is one of a three-part series, and it is about understanding Cloud SQL maintenance. And I think it's absolutely a wonderful example of what we've got on "Reader" and what we've got on the blog. Because not only does it walk you through what Cloud SQL maintenance is, it takes you under the hood, tells you what's going on behind the scenes. 

And then it empowers you to interact with those maintenance schedules and design it around your business so that your business isn't impacted by downtime. And so you are thinking about that, quote, "downtime" in a way that's actually realistically demonstrated by this maintenance and by the needs for this maintenance. And so I just think it's really valuable. And so we've got part one here for y'all. 

[MUSIC PLAYING] 

Thanks for joining us for another episode of "Google Cloud Reader," where we give a voice to Google's tech blogs. I'm Jenny Brown and today we'll be reading "Understanding Cloud SQL Maintenance, Why Is It Needed?" about how Cloud SQL Maintenance works. Originally written by Akhil Jariwala in September 2021. Let's get started. 

"Understanding Cloud SQL Maintenance, Why Is It Needed?" Since I joined the Cloud SQL team, customers have been asking me one question about our service more than any other. What happens during Cloud SQL maintenance? It's a fair question. I'd want to know too if something was going to impact my database's availability. 

In this series, I'll take you through the ins and outs of Cloud SQL maintenance. In part one, I'll share how maintenance and other system updates make database operations a whole lot simpler for our users. In part two, I'll take you step by step through the maintenance process, and offer a behind-the-scenes look at the engineering that has gone into minimizing database downtime. In part three, I'll finish with an overview of how users use Cloud SQL Maintenance settings and design their applications to optimize their scheduled maintenance experiences. Let's get started. 

What comprises a Cloud SQL instance? We first need to cover the cloud system components that comprise a Cloud SQL instance. Each Cloud SQL instance is powered by a virtual machine running on a host Google Cloud server. Each VM operates the Database Engine, such as MySQL, PostgreSQL, or SQL Server, as well as service agents that provide supporting devices like logging and monitoring. 

For users of our high availability option, we set up a standby VM in another zone in the same region with an identical configuration to the primary VM. Database data is stored on a scalable, durable network storage device called a persistent disk that attaches to the VM. Finally, a static IP address sits in front of each VM which ensures that the IP address that an application connects to persists throughout the lifetime of the Cloud SQL instance, including through maintenance or automatic failover. 

What are the database updates that happen on a Cloud SQL instance? Over the life of a Cloud SQL instance, there are two types of updates. Updates that users perform, which are called configuration updates, and updates that Cloud SQL reforms, which are called system updates. As a databases usage grows and new workloads are added, users may want to update their database configuration accordingly. These configuration updates include increasing compute resources, modifying a database flag, m and enabling high availability. 

Although Cloud SQL makes these updates possible with the click of a button, configuration updates can require downtime. When thinking holistically about application availability, users need to plan ahead for these configuration updates. Keeping the database instance up and running requires operational effort beyond configuration updates. Servers and disks need to be replaced and upgraded. Operating systems need to be patched as new vulnerabilities are discovered. Database engines need to be upgraded as the database software provider releases new features and fixes new issues. 

Normally, a database administrator would need to perform each of these updates regularly in order to ensure their system stays reliable, protected, and up-to-date. Cloud SQL takes care of these system updates on behalf of our users so they can spend fewer cycles managing their database and more cycles developing great applications. In fact, managed system updates attract many users to our managed service. 

How does Maintenance fit into system updates? In general, Cloud SQL updates are divided into three categories-- hardware updates, online updates, and maintenance. Hardware updates improve underlying physical infrastructure. These include swapping out a defective machine host or replacing an old disk. Google Cloud performs hardware updates without interruptions to a user's application. For example, when updating a database server Google Cloud uses live migration, an advanced technology that reliably migrates a VM from the original host to a new one while the VM stays running. 

Online updates enhance the software of the supporting service agents that sit adjacent to the Database Engine. These updates are performed while the database is up and running serving traffic. Online updates do not cause downtime for a user's application. Maintenance updates the operating system and the Database Engine. Since these updates require that the instance be restarted, they may incur some downtime. For this reason, Cloud SQL allows users to schedule maintenance to occur at the time that is least disruptive to a user's application. 

As you can see, Cloud SQL performs most system updates without any application impact. We take care to only schedule maintenance when we need to update a part of the system that cannot be updated without interrupting the service. To moderate application impacts, we bundle critical updates together into maintenance events that are scheduled once every few months. We've gone further to design the maintenance workflow to complete quickly so that our users applications can get back up and running. We'll discuss this further in part two. 

To make maintenance more manageable, we equip users with settings such as maintenance windows and deny periods, which we'll cover in more detail in part three. If you're interested in learning more about how maintenance fits together with all of the other benefits of Cloud SQL, read our blog linked in the description about the value of managed database services. Stay tuned for part two, where we'll talk more specifically about how long maintenance lasts, what kind of updates come with maintenance, and how Cloud SQL conducts maintenance to ensure minimum impact to our users' instances. 

[MUSIC PLAYING] 

To learn more about today's episode, including access to the original blog post, check out the links in the description. Thanks for listening, and see you next time. 

STEPHANIE: All right. So that was just part one of "Understanding Cloud SQL Maintenance," and dived into why it is needed. So just a quick overview once again, Cloud SQL is our managed database servers for MySQL, Postgres, and SQL Server. And so as you heard, there is a lot that can go into Cloud SQL maintenance, but it does do a really good job of talking about what compromises an instance and the various components that actually comprise each instance. So you get a better understanding of the variables that are in place. 

JENNY: Totally, right? And how it's going to help you and how you can work with it as well, to make sure that all the things are doing what you need them to do. The next episode that I want to highlight is about the Google Cloud Region Picker, which is also going to help you make the absolute most of your services while also being sustainable. 

We've got a tagline on this one of faster, cheaper, and greener because you can pop into the Region Picker for Google Cloud and enter in your priorities. You know, who's using this data, how available you need it to be, all of that jazz. It's going to suggest different regions for you based on those priorities that you have. 

And with different data sets, you're going to have different priorities, right? Latency might not be something that you're really worried about for some things. And so with those, you can prioritize sustainability and having a greener option. So that one's really cool, and I love all the different things that it combines. And again, it empowers you to make the choices that are best for your business and also consider the environment. 

[MUSIC PLAYING] 

Thanks for joining us for another episode of "Google Cloud Reader," where we give a voice to Google's tech blogs. I'm Jenny Brown and today, we'll be reading "Faster, Cheaper, Greener? Pick the Google Cloud Region That's Right for You," about how Google Cloud Region Picker helps you make the green choice. Originally written by Chris Talbott and Steren Giannini in April 2021. Let's get started. 

"Faster, Cheaper, Greener? Pick the Google Cloud Region That's Right for You." When it comes to sustainability, we get more done when we move together. That's why Google Cloud partners with non-profits, research organizations, governments, and businesses to build technology and tools to accelerate meaningful change. Technologies like machine learning are proving to be invaluable for tackling unique challenges like identifying species in biodiversity and restoration projects such as those being done by Wildlife Insights. 

Data analytics tools like BigQuery can deliver insights in real time energy consumption data, helping energy managers at E.ON make decisions that reduce costs and CO2 footprint. And hyper-efficient infrastructure is helping customers like Carrefour reduce their energy use. Using all the tools we have at Google Cloud, we are committed to helping make your digital transformation a sustainable one too. 

As we continue to operate the cleanest cloud in the industry, we're working with a growing group of cloud customers focused on reducing the carbon impact of their operations. Over 90% of global IT leaders plan to or currently report on sustainability metrics, with 26% of those leaders accelerating emissions reduction projects in the past year. 

In the past year, we've worked with over 50 customers to evaluate their IT estates for their carbon impact. From digital image libraries to huge data lakes, we've seen potential net carbon reductions from a few thousand kilograms of CO2 to many kilotons, combining the determination of our customers and Google's net carbon neutral cloud. While we match all of the electricity we consume on a global and annual basis with wind and solar purchases, which helps zero out the net carbon impact of Google Cloud platform and workspace, we're working on carbon-free energy 24/7. 

Completely decarbonizing the electricity supply is critical to realizing a carbon-free future and averting the worst impacts of climate change. To help our customers do this, last month we shared the average hourly carbon-free energy percentage for the majority of our Google Cloud regions. Today, we're sharing a new tool leveraging this data, a Google Cloud Region Picker that helps customers assess key inputs like price, latency to their end users, and carbon footprint as they choose which Google Cloud region to run on. 

Using the Region Picker, you weigh factors from not important to important, and select the region from where your user traffic emanates, if applicable. For the almost 90% of developers and IT executives we surveyed who would move to a more sustainable data center option, this tool should help them make that decision quickly using just three inputs. 

Carbon footprint is based on the amount of carbon-free energy supply for each region. Cost uses the price for generic compute instances in the region. And latency is approximated using physical distance between selected countries and the city or country of the region. 

The list of recommended Google Cloud regions changes dynamically, stack-ranked based on the values you input into the tool. We know different types of workloads have different requirements so you can easily test different priorities. In our research, production workloads serving user traffic most frequently ranked performance or latency as their top requirement. Internal systems, like HR or billing, ranked performance and data residency as the top requirement. 

However, for best effort workloads like batch jobs or backup, carbon scores were ranked as the top characteristic more than any other factor. For companies like Snap Inc., and their sustainability lead Emily Barton, reducing the carbon impact of their digital infrastructure is an important sustainability target for the company. "We are collaborating with Google to make carbon-free energy data and carbon considerations more useful for users at Snap," said Emily Barton. 

Similarly, customers like Salesforce are working to decarbonize its own infrastructure and the services it provides to customers using our CFE data to help reduce its footprint. We are working to integrate carbon considerations more commonly into application development, data center migration, multi-region or multi-cloud design, and architecture. Our partners, like SADA Systems, are joining us in the effort. 

"As a leading Google Cloud partner committed to bringing innovative solutions to customers, we're excited to incorporate sustainability into that commitment," said Brian Suk, Senior Solutions Architect. The CFE measurements and the new tooling being introduced today are already influencing how SADA designs its own Google Cloud-based solutions, and we look forward to evolving our strategy to support more sustainable solutions for our customers. 

Building a sustainable future is a team effort. We are excited to partner with our customers to cut carbon emissions, explore new ways to protect the Earth's resources, better harness renewable energy, and simply improve the sustainability of their IT infrastructure. Be sure to check out what we're up to in cloud sustainability and across Google, and use the Region Picker for your next Google Cloud project. 

[MUSIC PLAYING] 

To learn more about today's episode, including access to the original blog post, check out the links in the description. Thanks for listening, and see you next time. 

[MUSIC PLAYING] 

STEPHANIE: Yeah, this was one of my favorite launches last year that I did some content around as well. Because I think it was one of the industry firsts for a feature like this across the major cloud providers. And just last year alone, carbon emissions increased about 6%, which is pretty high. It's 95 million metric tons of CO2, higher than 2020 levels. 

So it's something that we all need to be very cognizant of, especially when it comes to our compute resource utilization. Something that often, I would say, a lot of people don't think about when they're using their applications, whether it's mobile, web, et cetera. So this is a super important thing. 

The other thing I wanted to mention is that we also just added something called Sustainability to Active Assist. And this is providing you automatic carbon footprint reduction recommendations. So you can actually estimate gross carbon emissions that you can save by removing your idle projects. So we're doing a lot more in this space beyond just the Cloud Region Picker as well. 

JENNY: Yeah, I absolutely love that we are not only having more of these options, but we're helping people use these options so that when they are trying to get instances set up or trying to make sure that their environment is working across the board for all of their internal and external users, that sustainability can be an automatic consideration for them without being too much extra heavy lifting on the side, without making it something that's going to take away too much extra time. But still going to be just as impactful as if they had done the research themselves. So that's really, really exciting. 

And it kind of leads nicely into the next article as well, which is about search abandonment and its impact on brand loyalty, which I know was an article that I found really, really interesting to learn about. And I also really relate to this personally, right? With the increase in online shopping over the course of the pandemic and various closures, I know that when I need something, if I'm searching-- if I'm using that search bar on a website to try and find a product-- I know what I'm looking for. 

And if it doesn't pop up, even if I know that it exists from that company, if it's not popping up in those search results, it's really hard for me to then pay money for it, right? And if I know what I need, if that intent is there, it's really important to make sure that the right products get in front of me or get in front of anyone. So this article goes through that and it also goes through the lasting impact on brand loyalty that that search functionality has without making things totally hopeless, of course, while showing how you're able to use a variety of our retail tools to help you avoid this costly mistake. 

[MUSIC PLAYING] 

ROGER: Thanks for joining us on another episode of "Google Cloud Reader," where we give a voice to Google's tech blogs. I'm Roger and today, we'll be reading "Research-- Search Abandonment Has a Lasting Impact on Brand Loyalty," about the value of proper search functionality for consumers. Originally written by Srikanth Belwadi in November 20, 2021. Let's get started. 

"Research-- Search Abandonment Has a Lasting Impact on Brand Loyalty." Search abandonment, when a consumer searches for a product on a retailer's website but does not find what they're looking for, costs retailers more than $300 billion annually in the United States alone. Today, we're releasing more data about the costs of search abandonment, including its ongoing impact to brand loyalty, as found by a Google Cloud commissioned Harris Poll survey of more than 10,000 consumers globally and 200 website managers in the United States. 

Search abandonment is even more pertinent these days as the pandemic has supercharged retailers' shifts to meet rising consumer expectations through new personalized e-commerce and omnichannel experiences. According to McKinsey and Company, 75% of consumers have recently tried a new shopping behavior due to the economic pressure, store closings, and changing priorities. 

Google data has also indicated that these sorts of omnichannel consumer behaviors persist, and in many ways, are intensifying as Google searches for the term in stock are up 800% year over year. Simply put, shoppers expect to find what they are looking for with ease, with many of their searches starting on retailers' websites even if they ultimately visit a physical store. 

$300 billion lost each year from bad online search experiences in the United States. 64%, number of retail website managers who have no clear plan for improvement. 85%, number of global online consumers who view a brand differently after an unsuccessful search. 

Search abandonment is high risk and high reward. Bad search experiences are costly, while good search experiences often result in higher purchase conversion, larger order sizes, and ongoing brand loyalty. According to Harris Poll research, three out of four US consumers-- 76%-- report that an unsuccessful search resulted in a lost sale for the retail website, with 48% purchasing the item elsewhere. In fact, more than half-- 52%-- say they typically abandoned their entire cart and go elsewhere if there's at least one item they can't find. 

On the other hand, 69% of consumers say that after a successful search experience, they purchase additional items. And almost all consumers-- 99%-- agree that they are at least somewhat likely to return to a retail website if it has a good search function. Retailers who make it easy for customers to find what they're looking for see results. Macy's saw a 2% increase in conversion and a 1.3% increase in revenue per visit in recent tests using Google Cloud Retail Search, which helps convert purchase intent across retailers' own websites and mobile apps by understanding consumer intent and mapping it to product inventory. 

Search is vital for a positive shopping experience. Search abandonment costs brand loyalty. The search function is the most commonly used feature on retail websites, impacting outcomes beyond the initial purchase, the research results found. 9 in 10 consumers say a good search function is very important or absolutely essential, with 97% agreeing that their favorite retail websites are ones where they can quickly find what they're looking for. 

On the other hand, 77% of US consumers avoid websites where they've experienced search difficulties. 77% of US consumers view a brand differently after an unsuccessful search on their websites, and 75% say they are less loyal to a brand when it's hard to find what they want on the website. 74% agree that if a company won't invest in improving its website, then they don't want to give them their money. Outside of the United States, consumers are even more likely to say they view brands differently following an unsuccessful search. Particularly in Brazil, 92%; India, 91%; Mexico, 89%; Australia, 87%; and the UK, 86%. 

Search abandonment is pervasive. Consumers and website managers agree that search abandonment is pervasive. 94% of consumers globally report receiving irrelevant results while searching on a retailer's website. And 88% of US-based retail website managers say abandoning searches are a problem at their company, with 84% believing that consumers are less loyal to brands when they've had unsuccessful searches. 

With billions on the line and clear indication from consumers that online shopping and omnichannel services are here to stay, combating such abandonment is essential to keep customers coming back. Doing so doesn't have to be daunting. For example, retailers can leverage Google Cloud's recently announced Retail Search on their own web properties, as well as our full suite of product discovery solutions for retail, which provides additional ways for retailers to enhance their e-commerce capabilities and deliver personalized consumer experiences. Download our e-book to see the full survey results and visit our website to learn more about Google Cloud solutions for retailers to improve customer experiences and combat search abandonment. 

[MUSIC PLAYING] 

To learn more about today's episode, including access to the original blog post, check out the links in the description. Thanks for listening, and see you next time. 

STEPHANIE: I love that subtitle that was included in that article. "Search Abandonment is High Risk and High Reward." As we all know as consumers, our threshold, our tolerance, for search functionality on e-commerce sites and other websites is so low now compared to in the past. So it is high risk, high reward. And it's something that a lot of retailers need to focus on. 

So it's really great to know that websites and e-commerce companies can utilize our retail API so that they can leverage user event data and have better, higher fidelity retail search. And we actually also have a really great customer use case on that. Macy's was one of the adopters of the retail API, and they have a session called "Why Search Abandonment is the Metric That Matters." 

We did that last year and we're going to include the link to that in the show notes if you want to check it out. It's a really great discussion between our group product manager for retail search and the director of product management for search at Macy's. 

JENNY: Love that. Time really matters, and that is a perfect transition to the next episode that I wanted to highlight, which is "An Intro to the Google Workspace Guide to Productivity and Well-Being." I love this. 

We are both fortunate enough to be able to work from home. And I think that this article does a really wonderful job highlighting our original definition of productivity and how it was factory-based and just full optimization-based, right? How much can you get done in how little time, this, that, and the other. And we're not machines. That's not actually how we work. 

And so this article really intentionally highlights that when you're thinking about workplace productivity, it's best to think about how you're able to accomplish the things that you're prioritizing rather than how you can cram as many different things into your day at once, right? I know that a lot of folks are like, oh, no commute? More time to work. 

But there's also so much else that we need to be doing these days. And so I think this is really, really important to maximize what you can do without sacrificing your mental health or your other priorities in your life. 

[MUSIC PLAYING] 

Thanks for joining us for another episode of "Google Cloud Reader," where we give a voice to Google's tech blogs. I'm Jenny Brown and today, we'll be reading "The Google Workspace Guide to Productivity and Well-Being," about driving impact over output in a new era of work. Originally written by Laura Mae Martin in September 2021. Let's get started. 

"The Google Workspace Guide to Productivity and Well-Being, Driving Impact Over Output In a New Era of Work." As Google's productivity advisor, I spend a lot of time coaching executives on ways they can make the most of their workday. Over the years, people have come to me with very different ideas about what productivity is, why it matters, and how to achieve it. Often, they think it's about extracting every last ounce of output from a day, likely because the idea of productivity comes from economics and is most closely associated with factory conveyor belts and efficiency. 

My definition of personal productivity is different. It's less about getting as much as you can out of each day, and more about achieving the things you set out to accomplish and making an impact. Productivity is grounded in understanding yourself as a whole person. What makes you happy at work and outside of work? What are your natural rhythms and peak times for your creativity, focus, or efficiency? 

When are you most engaged in meetings? What makes you feel unstoppable when responding to emails? And when do you need to take a break, do some uninterrupted thinking, or deepen social connections with your colleagues? When people don't understand these aspects of productivity, they struggle to make an impact no matter how well they manage their calendars and inboxes. 

During the global pandemic, we've realized the importance of sustaining the well-being of ourselves and our families, setting healthy boundaries, and bringing attention to the workday. Among those lucky enough to have the flexibility to work from home, many had to juggle new obligations from home schooling to caregiving. And without a solid plan in place, people often found themselves working longer hours and facing burnout. 

Now even as the pandemic enters new and unforeseen phases, many organizations are gearing up for a hybrid work model, Google included. As we make those plans, it's important that people take a fresh look at personal productivity and plan to maximize well-being and impact across all the places they work. 

I developed this new guide with these challenges in mind. It gathers up all my best productivity and well-being tips from over the years, including how to rethink your time and your calendar, transform your inbox, make meetings more meaningful, and bringing productivity and well-being together. As we embrace new ways and places of working, all these areas feel more important than ever. 

[MUSIC PLAYING] 

To learn more about today's episode, including access to the original blog post, check out the links in the description. Thanks for listening, and see you next time. 

STEPHANIE: I love that the article also dove into some specifics of how our productivity and our approach to it is changing, especially with the pandemic and the new hybrid work mode that we're about to adopt. We really do need to rethink productivity instead of just go go go all the time, which leads to burnout, which many of us have experienced. We have to have a more holistic approach to productivity. 

JENNY: Burnout central for most of us. It's really important to recalibrate there and redefine some of those older definitions of success so that we can actually get a better understanding of where we're at. Which is, of course, an excellent transition to the next episode that I want to talk about, which is about the new Google Cloud Student Success Services, which are helping educators scale individualized learning. 

And as someone who is neurodivergent, I remember feeling like I understood material in school, but not having that demonstrated on the tests or the homework assignments. And so there was a cognitive dissonance there. There was that disconnect where my wonderful institutions of learning weren't really an accurate mirror for my understanding or my skills in a certain area. 

And so this article-- this episode-- is so exciting because it highlights a lot of the different ways that Google is using AI and our cloud technology to help facilitate the learning process for a variety of different learning styles, learner locations, and methodologies. There's even an AI-driven chat tutor functionality which would have just been so cool when I was back in school. And it's tailored to make sure that there are accurate gauges of skill assessment in learners and students across the board. 

And I just think, I cannot wait to see where all of this goes. I'm really, really excited for the learners of the future because I think it's just going to be magical. 

Thanks for joining us for another episode of "Google Cloud Reader," where we give a voice to Google's tech blogs. I'm Jenny Brown, and today we'll be reading "New Google Cloud Student Success Services Help Educators Scale Individualized Learning," about new Google Cloud Student Success Services that help educators scale individualized learning. Originally written by Steven Butschi in November 2021. Let's get started. 

"New Google Cloud Student Success Services Help Educators Scale Individualized Learning." Education institutions are working harder than ever to provide learning opportunities to the increasing number of students they serve. But gaps still exist in the skills needed by employers once students graduate. A recent McKinsey and Company survey found that 87% of companies reported that they are experiencing skills gaps now or in the coming year. And the impact of the pandemic has only added to the urgency for schools and education technology companies to find new ways to support even more learners. 

To help organizations meet these challenges and scale specialized learning across more students globally, we are expanding our portfolio of Student Success Services with a new Google Cloud artificial intelligence-powered learning platform, which features the interactive tutor. This platform will provide new ways for educators to share curriculum and will bring more on-demand learning opportunities to students. 

An AI-powered learning platform to help scale education. With our new AI-powered learning platform, students can learn in highly individualized ways and educational institutions can scale their efforts to meet student needs. The platform is a suite of applications and APIs that can be integrated into an institution's existing infrastructure. Educators build competency skills graphs that feed the platform, which then uses AI to auto generate learning activities for students. Learners can easily access these activities through an app-- Google Cloud's customizable interactive tutor solution for educational institutions. 

One of the first institutions to use the learning platform is Southern New Hampshire University, or SNHU. One of the fastest growing universities in the nation, with more than 3,000 on-campus students and more than 160,000 online, SNHU is constantly innovating to serve the ever-changing needs of its student body and workforce by using new educational approaches and technologies. 

Quote, "We are partnering with Google Cloud to build an AI-powered system that supports this new model for learner centricity with initial emphasis on recognizing who our learners are and what motivates them," end quote. Travis Willard, Chief Product Officer at SNHU explains, quote, "For example, with this platform, a student can see auto generated and personalized recommendations for courses based on their prior learning, interests, and career goals. We're excited to explore the additional learning assistant students will get with this new learning platform from in-course planning to tutoring," end quote. 

To bring our Student Success Services to more institutions and organizations worldwide, we're also partnering with LearningMate, who is integrating Google's AI-powered learning platform within its own solutions, including its popular content management solution, Frost. LearningMate will be a key go-to-market partner, helping institutions design, launch, and maintain their own learning infrastructure. 

With LearningMate's 20 years of edtech experience and through this new partnership, we're scaling Google's Student Success Solutions globally, helping more organizations understand learners' engagement, performance, and preferences. Quote, "We see a profound shift in education with the new technologies opening up educational opportunities to more people and communities. AI-powered learning solutions will play a key role in this digital transformation, helping institutions, educators, and edtech companies empower students to learn and achieve more," end quote. 

SVP and Business Unit Head, Higher Education of LearningMate, Nachiket Paratkar says, quote, "We are especially excited to be working with Google Cloud to augment students learning experience and help institutions to provide personalized learning at scale," end quote. 

An interactive tutor to meet individual needs. Google Cloud's interactive tutor is a foundational student-facing app that assists students with learning. The interactive tutor uses APIs to present a chat-based experience for students, incorporating AI-generated learning activities. It provides individualized, scalable guided practice and coaching for reading comprehension and writing. 

For example, the interactive tutor can generate targeted questions based on reading materials to help students understand and practice concepts in a way that meets their individualized learning needs. This approach also provides educators with greater bandwidth to work directly with students who require additional hands-on support. Walden University was the first institution to work with us and inform the development of these solutions as the university recently launched Julian, its interactive tutor that leverages the Google Cloud learning platform. 

Steven Tom, Chief Transformation Officer at Walden shared, quote, "The breakthrough cognitive tutor transforms learning and knowledge mastery through the power of AI, enabling a dynamic and engaging nature for instruction. As we continue to develop this tool, it will allow us to provide personal instruction at scale to meet the needs and busy lives of our adult learners," end quote. 

The interactive tutor currently offers four types of learning activities that students can choose from. One, short answer questions; two, multiple choice questions; three, paraphrasing practice; and four, guided note taking, with more expanded learning activity offerings on the way. 

[MUSIC PLAYING] 

To learn more about today's episode, including access to the original blog post, check out the links in the description. Thanks for listening. See you next time. 

STEPHANIE: There is so much opportunity for technology to be transformative for education. I mean, we're just in the beginning stages of that. So it's really encouraging to see that we are already having some extremely impactful use cases of AI being used to help people with different learning styles and start to make that playing field a little bit more equitable. 

JENNY: Right? Yeah. Encouraging understanding, rather than just memorization of things so that you can actually turn to application and be much more successful there. 

STEPHANIE: Yeah, I also interviewed someone for my previous podcast, "The SaaS Podcast" by Google Cloud, where we also brought in some startup founders that are also building platforms to help people that might have other learning styles or came from disadvantaged backgrounds and schools that have higher dropout rates. And this is all about providing better mentorship for these communities. So it's really great to see the ecosystem really advancing in both of these ways. So I guess that's a great transition to our next article, right? 

JENNY: Yeah, absolutely. Because with more different types of people involved, you're going to be able to serve more varied communities much more successfully. And so this episode talks about our guide for why representation matters, and it has six tips on how to build DEI into your business. 

Diversity, equity, inclusion is so absolutely critical. It needs to go beyond being a buzzword. It needs to be about the people that we have in our companies and the power-- and the empowerment that we are able to provide so that more folks can have their voices heard and we can make things better for everyone. And it also talks about the bottom line too, where it actually makes companies much more successful. 

So it's good for everybody and I think it's really, really important. And having a diverse operating environment is absolutely critical and better for everyone involved, period. 

[MUSIC PLAYING] 

Thanks for joining us for another episode of "Google Cloud Reader," where we give a voice to Google's tech blogs. I'm Jenny Brown and today, we'll be reading "Why Representation Matters, Six Tips on How to Build DEI into Your Business," about the importance of properly executed DEI initiatives. Originally written by Karina Govindji in September 2021. Let's get started. 

"Why Representation Matters, Six Tips on How to Build DEI into Your Business." Diversity, equity, and inclusion, or DEI, are more than just buzzwords. They are critical components of workplace culture that have real tangible impacts on your entire organization. 

Well-executed and robust DEI initiatives ensure that every single employee feels welcomed and valued when they are at work. And that's not all. Done right, DEI will create a thriving environment that fosters increased engagement, productivity, and ultimately, new innovation. Companies with the most diverse executive teams are 36% more likely to outperform their peers on profitability. Organizations with above average diversity see 19% higher innovation revenue. Inclusive teams make better decisions 87% of the time. 

Now more than ever, there is more urgency to incorporate diversity and inclusion into every aspect of your business. Not only because it enhances your ability to be responsive to users and customers, but because it builds trust and a sense of belonging for your employees. So how do you build a representative workforce and inclusive teams? Read our short e-book linked in the description to learn steps that you can take to build DEI into your business along with insights from our own journey at Google Cloud. 

[MUSIC PLAYING] 

To learn more about today's episode, including access to the original blog post, check out the links in the description. Thanks for listening, and see you next time. 

STEPHANIE: Yeah, if you dive into the actual e-book that talks about why representation matters that's linked in that blog, it really dives into the DEI initiatives beyond product development, but also gaming, technology, and various industries too. And it talks about the specifics about how we can do better in these areas. So I love this one to end on. 

Well, J. Bro, thank you so much for coming in and highlighting some of your favorite "Google Cloud Reader" episodes. You obviously dive into a range of topics across technology, and even the importance of education and diversity in the space. So thanks just so much for what you do in making this information a lot more accessible to all of us. 

JENNY: I'm happy that folks are able to get something out of it because I know that I am, and that's always nice. 

STEPHANIE: Well until next time, everyone, Thanks so much for joining, and we'll see you all next week. Bye. 

[THEME MUSIC] 

All right, J. Bro, what is a koala's favorite drink? A Coca-Koala. 

JENNY: Classic, refreshing. I love it. [LAUGHS]