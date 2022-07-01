+++
audioDuration = "00:36:03"
audioFile = "Google.Cloud.Platform.Podcast.Episode.310.mp3"
audioSize = 51920706
categories = ["Veeam", "Kubernetes", "Backup", "Kasten"]
date = "2022-06-29"
description = "Your hosts Max Saltonstall and Carter Morgan talk with guests Cody Ault and Jo-Anne Bourne of Veeam."
draft = false
episodeNumber = 310
hosts = ["Carter Morgan", "Max Saltonstall"]
title = "Disaster Recovery with Cody Ault and Jo-Anne Bourne"
image="/post/episode-310-disaster-recovery-with-cody-ault-and-jo-anne-bourne/images/hero/hero-EP-310.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/vnkm62/episode_310_disaster_recovery_with_cody_ault_and/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Your hosts [Max Saltonstall](https://twitter.com/maxsaltonstall) and [Carter Morgan](https://twitter.com/carterthecomic) talk with guests Cody Ault and Jo-Anne Bourne of Veeam. Veeam is revolutionizing the data space by minimizing data loss impacts and project downtime with easy backups and user-friendly disaster recovery solutions.

As a software company, Veeam is able to stay flexible with its solutions, helping customers keep any project safe. Cody explains what is meant by disaster recovery and how different systems might require different levels of fail-safe protection. Jo-Anne talks about the financial cost of downtime and how Veeam can help save money by planning for and preventing downtime. Veeam backup and replication is the main offering that can be customized depending on workloads, Cody tells us. He gives examples of how this works for different types of projects. Businesses can easily make plans for recovery and data backups then implement them with the help of Veeam. Cody talks about cloud migration and how Veeam can streamline this process with its replication services, and Jo-Anne emphasizes the importance of these recovery processes for data in the cloud. 

The journey from fledgling Veeam to their current suite of offerings was an interesting one, and Cody talks about this evolution, starting with the simple VM backups of version 5. As companies have brought new recovery challenges, Veeam has grown to provide these services. Their partnership with Google has grown as well, as they continue to leverage Google offerings and support Google Cloud customers. We hear examples of Veeam customers and how they use the software, and Cody tells us a little about the future of Veeam.
 
##### Cody Ault

Cody has been at Veeam for over 11 years in various roles and departments including Technical Lead for US Support team, Advisory Architect for Presales Solutions Architect and Staff Solutions Architect for Product Management Alliances. He has acted as the performance, databases, security, and monitoring specialist for North America for the Presales team and has helped develop the Veeam Design Methodology and Architecture Documentation template. Cody is currently working with the Alliances team focusing on Google Cloud, Kubernetes and Red Hat.

##### Jo-Anne Bourne

Jo-Anne is a Partner Marketing Strategist who works with global companies to support them in positioning company products with their customer base. She is effective in developing strategic partnerships with International Resellers, CCaaS partners, Systems Integrators, OEM partners and ISV partnerships like Amazon, Microsoft, Avaya, Cisco, Five9, BT to develop strategies to enable sales teams to generate significant revenue and in turn, build profitability for the company. Jo-Anne is a brand steward successful in using analytics to create results-driven campaigns that increase brand awareness, generate sales leads, improve customer engagement and strengthen partner relationships.

##### Cool things of the week

* Announcing general availability of reCAPTCHA Enterprise password leak detection [blog](https://cloud.google.com/blog/products/identity-security/announcing-recaptcha-enterprise-password-leak-detection-in-ga)
* Cloud Podcasts [site](https://cloud.google.com/podcasts)
* Bio-pharma organizations can now leverage the groundbreaking protein folding system, AlphaFold, with Vertex AI [blog](https://cloud.google.com/blog/products/ai-machine-learning/running-alphafold-on-vertexai)
 
##### Interview

* Veeam [site](https://www.veeam.com)
* Veeam for Google Cloud [site](https://www.veeam.com/google-cloud-vmware-solutions.html?ad=menu-solutions)
* VeeamHub [site](https://github.com/VeeamHub)
* Google Cloud VMware Engine [site](https://cloud.google.com/vmware-engine)
* Cloud SQL [site](https://cloud.google.com/sql)
* Kasten [site](https://www.kasten.io)
* Kubernetes [site](https://kubernetes.io)
* GKE [site](https://cloud.google.com/kubernetes-engine)

##### What's something cool you're working on?

Carter is working on the new [Cloud Podcasts](https://cloud.google.com/podcasts) website.

Max is working on research papers about how we built and deployed Google's Zero Trust system for employees, [BeyondCorp](https://cloud.google.com/beyondcorp).

Kelci is working on creating a series of blog posts highlighting the benefits of having access to public data sets embedded within BigQuery.

{{< transcript "[MUSIC PLAYING] CARTER: Hello, world, and welcome to episode number 310 of the weekly Google Cloud Platform Podcast. I am Carter Morgan, a developer advocate at Google, and I'm here with my colleague, friend, mentor Max Saltonstall. Hey, Max. How you doing?" >}} 

MAX: Thanks, Carter. I'm doing great. Good to see you. 

CARTER: Yeah, it's been a minute, but I'm happy. We've got a fun episode in store for sure. On the show today, we have Cody Ault, who's been with Veeam for over 11 years, including technical lead for US support systems, advisory architect, presale solutions architect, and a lot more. 

Really came in and dropped a lot of knowledge about disaster recovery. And then Jo-Anne Bourne, partner marketing strategist really came in with an empathy for the customer and the types of problems that the customers are dealing with when it comes to disaster recovery. I thought it was a pretty fun conversation. What did you think, Max? 

MAX: I like that they're both also really focused on how do they build in better capabilities between VM and Google Cloud. And that was one of the main reasons we wanted to have them on. But backing up your data from any kind of source, whether it's an on-prem system or cloud system, and then using the cloud as your backup medium can have a lot of advantages in terms of agility, in terms of reliability, but it introduces a whole bunch of new challenges, and I love how they talked through the ways that Veeam can make that whole process to keep you safer, much, much smoother. 

CARTER: And I thought you came in with some really good questions, but let's highlight that at the end. And before we do that, let's talk about some of the cool things going around Google Cloud. 

[MUSIC PLAYING] 

MAX: Anyone who's heard me talk knows that passwords are terrible. I think humans use of passwords are terrible, and generally anyone who has a password can be fooled into giving that password up. And people copy passwords and replicate them. 

So I was excited to read about some new enterprise features on our reCAPTCHA system, which is a way to help validate logins especially for large companies, and detect when a password has been leaked, or maybe an account is being attacked with a phishing attempt and stop those account takeovers, or those password compromises before they cause more damage. So I'll put the blog link in the show notes, but that was a feature I was really excited to see developing. 

CARTER: Yeah, that is super cool. I know that I need to be a little more careful with my passwords. And I've always stopped at two factor. So seeing these other methods, this defense in depth approach, I think that's great news. So thank you for the share. 

MAX: Funny story about passwords. I often have to log in when one of my kids wants to install something on their phone or their Chromebook. And every time that prompt comes in, my 12-year-old is really good at turning away and making sure he's not looking at me when I'm typing in my password, which I think is adorable. 

CARTER: You've taught the little one's perfect password practices. I love it. 

MAX: Little by little. 

CARTER: A cool thing that I noticed-- not even noticed, but I just wanted to call it out again. I probably will do this for the next week or two, there's a new podcast website. It's called cloud.google.com/podcast. Very convenient naming. 

MAX: Woo-hoo 

CARTER: Yeah. It's a hub for all things Google Cloud podcast-related. So you're going to start seeing new series pop out through there, you'll see these episodes pop up there, and a lot more. So be sure to check that out. 

And I've got something, I think, even cooler this week. We'll see, but we've got a little guest around the office. We've got an intern that we're super excited about. Hi, Kelsey. 

KELSEY: Hi, Carter. 

CARTER: How you doing? 

KELSEY: Good, good. How are you? Thanks for having me. 

CARTER: Yeah, super excited. You brought up a cool thing of the week, something that you've been working on or learning more about. You want to share it? 

MAX: Science. 

KELSEY: Sure. Yeah, lots of science. Exciting news for the science community. DeepMind, which is Google's sister organization and another research lab under Alphabet, has developed a new AI algorithm to help predict 3D structures of protein models, which is really cool because that's extremely difficult. And it's all hosted on GCP and users can access it using Vertex AI. So it really opens the doors for others to help develop and explore the scientific discovery that just happened. 

MAX: That's awesome. 

CARTER: Yo, that's awesome. Yeah. 

KELSEY: Yeah, it's really cool. 

CARTER: Max, I think Kelsey's a natural. I think she would be on the podcast more. 

MAX: I think she's going to totally take over my seat for sure. 

CARTER: Well, Kelsey, thank you so much. Thanks for that cool thing of the week. 

KELSEY: Yeah, thanks for having me. 

CARTER: Max, what do you think? Should we get into the main content? 

MAX: I would love to. 

CARTER: All right, let's do it. 

[MUSIC PLAYING] 

So without further ado, we've got Cody and Jo-Anne. Here. Could you please introduce yourselves and tell our listeners a little bit about you? 

CODY: My name is Cody Ault. I'm a solutions architect here at Veeam in the Alliance's Product Management team. I cover Google Cloud, Red Hat, and DevOps. I've been here for almost 12 years. I've been in support, I've been on our presales team, switched over last year to our Alliances Team. 

CARTER: Thank you. 

JO-ANNE: And I am Jo-Anne Bourne. I have been with Veeam for about 18 months now. I look after our Google Alliance relationship from a marketing perspective. We are innovating and having a lot of fun together. 

MAX: Thanks very much. So what is the problem that Veeam is solving for your customers? 

CODY: At our core, we are trying to help people minimize the impact of data loss and downtime. We're a software vendor. We are trying to make backups and disaster recovery easy for people. And we do that through a handful of different ways. 

Being software-only lets us leverage commodity hardware, lets us use off-the-shelf whatever a customer already has in place, whether that's existing Dedup appliances, if they want to procure new physical hardware, they want to leverage an older SAN that they have, or something cheap and deep, and then also object storage for offsite and long-term retention. 

CARTER: Oh, wow. Thank you for that. It's something that you hear a lot about, talking about disaster recovery. Make sure you plan for what could happen. But I don't actually know too much about what goes into that. I assume that a lot of times it's the hurricanes and the big life events. Is that mostly what disaster recovery centers around or are there other areas of it? 

MAX: Well, disaster recovery, it's a bit of a scope. You might have disaster recovery plans for specific applications. It could be entire sites, it could be your entire IT infrastructure. So it just kind of depends on what's mission-critical to your business. 

Even within that, there's tiers of stuff that has to be always on, always available that leverage things like HA, and then there's other applications that maybe need a warm failover so that you can bring things on within an hour or two. And then there's some systems that we talk to people in robo sites or back-end applications that only impact certain internal users. 

They might have days or weeks to bring the staff back online. So it just kind of depends on what you need to plan for. I mean, right now, there's ransomware and insider threats, malicious actors all over the place. Everybody has to worry about that kind of thing. 

But yeah. I mean, I've been on the phone with customers back in my support days that they were setting up a co-lo in a different site because they had a hurricane bearing down on them. So they were trying to replicate all of their virtual machines off prem to some other sites hundreds of miles, thousands of miles away that wouldn't be impacted. 

So climate is definitely something to be worried about. But power outages happen, things catch on fire in the data center. We've had that happen internally from time to time, in our-- not with our production environment, thankfully, but our demo environments, some of our testing environments, we've had things go down, things burn out. 

CARTER: So let's frame this a little bit, because I'm curious. Is there a number that you can put on how expensive it is if a business is down? How does this impact the customers, even from a financial standpoint? 

CODY: Yeah, so Carter, I'll just pop in here and just say as Cody was saying, we are a global leader in backup recovery and data management solutions. And we are very, very concerned with ensuring that modern systems are protected. So we protect systems across the Cloud, virtual, physical, SaaS, and Kubernetes environments. Of course in this particular instance here with Google, clearly Cloud and hybrid cloud is going to be our focus around this conversation. But we do protect data outside of that as well. 

Cody has also mentioned the fact that cybercrime is a big deal these days, obviously. Everybody's very concerned about that. And you've asked for a number. Our studies have indicated that organizations, on average are losing about $88,000 per hour. 

CARTER: Oh, wow. 

CODY: For as long as they're down. So you can imagine if somebody is not online for days or weeks what that would be doing to their business. 

But one of the things that is important to note is that sometimes people just mistakenly delete things, or delete accidentally, make a mistake. And so even then, trying to ensure that you're bringing things back, that could be a pretty big disaster, even if it's an accident. So we're into making sure that you can recover from all of that, whether it's a somewhat smaller disaster, or a much larger one. 

CARTER: So then that makes me really wonder how do you go about actually preventing that? Because I know I've deleted things on accident more than I'd like to admit. How does Veeam go about actually making sure that user environments are safe and recoverable? 

MAX: Yeah. So at the heart of our offering is Veeam backup and replication, and we have different types of offerings, depending on what the workload is. For virtual machines, we have the ability to perform replication, which is an identical copy of that virtual machine in the same type of platform somewhere else. 

So for VMware or Hyper-V, you would replicate to another cluster, whether that's in a different site for yourself, self-managed site, disaster recovery site, just a separate data center. Some people have a follow the sun model. Some people just have another data center across town or across campus, if it's universities or even larger businesses that just have multiple buildings in a campus. 

But we also have backups, which are either agents running inside physical servers, they're virtual machine backups that leverage the data protection mechanisms built into the different hypervisors, whether that's Red Hat, Nutanix, VMware, Hyper-V. We also have unstructured data, like NAS data. All of that is backed up to our backup repository, which is, as I kind of alluded to earlier, it's some sort of Windows box, a Linux box, a NAS-shared Dedup appliance. 

And then we have what's called a scale-out repository, which takes these disaggregated hardware and puts them into a logical repository so that backups can go to that. And then built into that is the capacity tier and archive tier. So when you back up locally, you have your main backups on prem that you use for your day-to-day operations. Joe from accounting deleted a really important Excel document. It got deleted out of his OneDrive or something like that. 

So those primary backups on prem, that's what you're using for the day-to-day recovery operations. And then if you have a server set up, you can have that scale out and immediately create copies up into object storage offsite so that if something in your main data center goes away, you have an additional copy. And we also have things like backup copies. We have the ability to take backups to tape. 

There's multiple ways. We're big proponent of the 3-2-1 rule where you have multiple copies of your data. At least one of those is off site. We recommend having multiple different types of storage so that if there's some sort of firmware bug in your Apollo servers, it doesn't corrupt both copies of the data on prem and off prem. 

CARTER: OK. Let me jump in for a second, because this has sparked a lot of questions. Because it sounds like Veeam manages a lot of the complexity that comes with storing this tiered backup system so that I, as a company, don't necessarily have to focus on that. That seems like, then, my focus as a company would be on actually doing the disaster planning itself. Like maybe something like how often I want to backup data and things like that. Am I understanding that correctly? 

CODY: Yeah, there's definitely the business side of it where you have to tag your data to determine what is my recovery point objective and my recovery time objective? And you kind of have to grade that data to say, OK, this application, if it goes down, I'm losing this much per hour. 

So I have the business justification to keep multiple copies of this, and maybe my dev test data, maybe I only need a copy once a week, because it's not really production, the changes that are there. It all depends on how much it's going to cost to replicate that data if it's gone forever. So if ransomware gets in and encrypts it, how much is it going to take to either restore-- and if you have to go back weeks or months, how long is it going to take you to get you back up to where you are today? Can you get it back up today? 

JO-ANNE: And just to your point there, Cody, I think this is the value that Veeam brings, is that we ultimately want to help you reduce that cost and complexity when you run into an issue. We want to make sure that you are meeting those recovery SLAs that Cody was pointing out, those recovery point objectives, or those recovery time objectives. But yes, as you were saying, Carter, that is our mission, our objective. But there are some things as an organization that you need to take care of as well to ensure that if you find yourself in that situation, you're going to be able to get up and running just as quickly as possible. 

MAX: That's great 

CARTER: Mm-hmm. 

MAX: Have you noticed patterns among what your customers are either prioritizing or trying to do as they shift their mindset around disaster recovery and use your services to give them a better posture? 

CODY: We are seeing people try to get out of the CapEx space. So having a dedicated disaster recovery site means you're paying for that static hardware, you're paying for extra storage, physical servers, power cooling, people, secure building, network connections between sites. And people want to be able to do the OpEx model of I only want to pay for it when I need it. 

So obviously, if you have things that need to be able to failover within minutes or hours, and it's a large system you can't necessarily wait for recovery, so things like replication come into play. I've done some testing earlier this year and I've talked to customers who are starting their cloud migration journey. 

And some of the things that people are moving to are things like GCVE covering Google. That's something that I've talked to several people on. 

MAX: Spell that out for us, because not everyone listening is going to know what that stands for. 

CODY: So that's the Google Cloud VMware Engine. So it's traditional VMware hyperconverged in a [INAUDIBLE] vSAN VMware vCenter ESXi sitting in Google data centers deployed through the Google Cloud Console. And you can have your pilot light systems ready to go. We can run replication from on-prem VMware to the Cloud and then back again if there's production workloads that they want to bring back on prem, or they just want to have an extra copy in a different region. So the Cloud is not immune from having outages here or there. 

JO-ANNE: And just to add to that point, I think it's a great one, Cody. I think specifically over the past three years, this move to the Cloud has been so enhanced, and everybody getting on that bus super quickly. People are seeing the efficiencies that you [INAUDIBLE] effectiveness that you can get out of it. 

But one thing that is important, and I know we'll talk a bit about this from a disaster recovery point of view, but one thing that is important to understand is that your public cloud providers are providing a platform, they're providing infrastructure. They're not really looking after, and nor do they say they will, your particular data. You are still responsible for your data no matter where it sits in a public cloud offering. 

So we want to make sure that we help you. And they call this the shared responsibility model. We want to make sure that we help you take care of that responsibility, that you have for your data. So whilst Google will do everything to ensure that that infrastructure stays up to the n-th degree, you are going to get those malicious actors. 

Or you are going to get Joe in accounts who's going to accidentally delete something. Or you're just going to have an application failure, whatever that may be. So this move to the cloud is a fabulous thing, but it's not the be-all and end-all of making sure that-- you still have to make sure that your data is taken care of and protected. 

CARTER: And kind of like Cody was saying, then, by running through common scenarios and then going through and making, basically, a plan for what to do in that case, a question I have, then, is after something fails, because your companies went down for a little while or something you've had to back up, what happens to that data in the interim? A new order comes in. What happens then? And does Veeam help with that? 

CODY: Well, if the application's down, you're probably not taking orders. If you lost your data center and the website's gone, the database is not powered on. Let's say you had a SAN failure or something like that. If your website's not functioning, or people are getting error messages trying to place those orders, everybody gets on Twitter and says, what happened to-- you know? 

CARTER: Right. 

CODY: What's going on with XYZ company's site? I can't buy anything. 

CARTER: OK. So then at that point, it's just trying to get back up and running as fast as possible. OK. I want to move in a slightly different direction now, if you're up for it. But I'm curious about how Veeam got to where they are now with all the different offerings that you have? I'm sure there's a lot of customer focus along the way and a lot of meeting market needs. I would love to hear more about that journey, though. 

CODY: I'm more than happy to talk about that. I started right before version 5 came out. So we're set to release version 12 later this year, hopefully. 

MAX: I think 5 was my favorite. 

CODY: I mean, it was simple. Everything-- we only backed up VMware. There was no proxies, there was no repositories. Everything was just on the VBR server. I think we did support Linux repositories, and I had a bunch of people that would call in and ask how to back up directly to ESX back when ESX had its physical console, like it had the root partition that was built in. 

So we started moving. We started supporting Hyper-V about a year later when 2008 R2 came out and it became a more stable platform. There was always the question of when are you going to support physical servers? And we tried to avoid that for a while, but in the early days of, well, how do we protect people that have virtual machines up in the Cloud? We couldn't, at the time, do a Hypervisor backup of something running in the cloud, because we don't have Hypervisor access. 

So we started with endpoint for Windows machines and gave it away for free for people to use on laptops, and desktops, and physical servers. And that got integrated into VBR. And then if you fast forward, well, we had a partnership where we had a Veeam Cloud Edition that leveraged Cloudberry to move backup files up to object storage. It would essentially work by chunking it up and then copying the backup files into the cloud, which was clunky and didn't work well. 

MAX: There's a cool meta cloud narrative here that I want to see if I could get your take on, because you're taking cloud resources and you're writing code that runs in the cloud. And you're moving the people's data to the cloud. So you've got this interesting double layer where, from what I understand, you're using the cloud to make disaster recovery better, but you're also using the cloud to enable your business. And so is that a worry or are there things that have made that especially appealing or especially efficient for you that's allowed this to be a thing that maybe couldn't have existed 10 years ago? 

CODY: Yeah, I think lots of people have wanted to take advantage of object storage for it. It checks the box of it's already off site, it's a different type of storage, it's not as prone to operating system attacks that crawl and look for SMB shares, or NFS, in the traditional vector for ransomware on prem. So it minimizes the footprint. 

I remember in the early days of the cloud, everybody talked about bursting up to the cloud and kind of taking advantage of it for workloads that they needed an extra handful of machines. And you just can't do that on prem. So if you lost your production data center, it's very appealing to look at the cloud to say, hey, I don't have to do a whole lot of work to just convert this VMware image, or this Windows or Linux physical server image. I mean, at the end of the day, once it's backed up, it's in a virtual format. It just needs translated to a different type of file to get attached to some compute somewhere else. 

MAX: I mean, a disaster recovery exercise is the ultimate bursting to the cloud, because you're saying all the stuff that I usually run, stop. Push everything to some alternate platform, architecture, infrastructure. And then for some people, is that appealing enough that they think maybe I don't need to run those myself anymore. Maybe I can just run it in the Cloud and still have a disaster recovery plan, but one that's Cloud-centric. 

CODY: I think a DR situation is a good time to make that call. Maybe I don't want to repurchase $2 million worth of hardware. Maybe it's time to just pull the trigger on this. And data has gravity. So once it's up there, getting it back on prem, it's not impossible. 

But like you said, it does need protection. Because once you've gone through it, now you have a new production environment. You need to have the same level of protection that you have on prem up in the Cloud. And we have products that cover that kind of thing as well. 

We have our Veeam Backup for Azure, AWS, Google Cloud that leverage the native mechanisms of image-based snapshots. And then to help reduce costs, we also have workers that will process that snapshot data and move it into more of a Veeam format and put it into object storage to help reduce the cost and increase that long term storage that some systems need, especially things that have compliance. We have lots of financial customers and health care customers that have regulatory requirements that data has to be kept for a certain amount of time and you have to be able to prove that. If you've had a failover event, you do need to have that, OK, now I need to make sure that it's protected, too. 

CARTER: Mm-hmm. Lots of great information in there. 

JO-ANNE: Yeah. This evolution to the Cloud, which I think we've seen happen over particularly the last 12, 15 years, has really brought along a lot of interesting technologies and a lot of innovation. But I think what's interesting to me particularly from the Veeam perspective is how, as Cody was explaining, Veeam has begun to iterate and then broaden their scope of protection as companies have needed it. 

But what I really love about it is Veeam particularly prides itself on saying that they're future proof and so really are trying to ensure that whatever situation you find yourself in as an organization deployment-wise, we're able to take care of that. Not only just for today, but I know a lot of organizations moving to Kubernetes containers, et cetera, et cetera deployment. So again, just that next iteration of where the Cloud is going to. We've gone to cloud, now we're even moving past that into containers, et cetera. 

CARTER: Yes. 

CODY: I was going to say, a lot of our products start off as standalone products and then they get brought in to management by that centralized console for-- Veeam Backup and Replication seems to be where the management has landed for all of that stuff. So from VBR, you can deploy Veeam Backup for Google Cloud and VM Backup for Azure and AWS, and you can push out agents to all of your physical machines. And any of that stuff we're backing up on prem, we can-- it's right in the console. You can just restore to GCE right there. 

CARTER: This leads really well into what I want to ask about next, then, is actually this partnership with Google Cloud. It sounds like you're using storage buckets and whatnot. What other parts of the Google Cloud are you using and how has it been helpful? 

CODY: So for on-prem data, we leverage GCS for the scale out repository components. I mentioned Google Cloud VMware Engine, which people can either use as their production VMware environment or their disaster recovery environment. And it looks and feels just like VMware on prem. We can do everything from snapshot and CDP replication, normal backups, instant recovery, which is booting up from our backup files, including the ones that exist up in object storage. 

We also have products that protect Google Compute engines, and we can recover to Google Compute Engine. So we can take all of on-prem physical machines and recover up there for them, barring some operating systems that don't necessarily support that. But we can leverage it for disaster recovery. We can protect it once it's up there with version 3, which is, I think, releasing today. I think our repository is updated. 

CARTER: Right, congrats. 

CODY: It will protect Cloud SQL instances. Well, MySQL Cloud SQL instances. So we are moving into the platform as a service space. We also protect GKE and Anthos with our Kubernetes offering of Kasten K10. 

MAX: So does Veeam do Veeam? Do you run your own disaster recovery for your business so that if something happened, you would still be able to operate? 

CODY: Yeah, actually several of our products started out as internal things that we've used to protect and kind of got productized. I'm sure that we use it for all of our cloud-native-- not cloud-native, but normal compute instances up in any of the clouds that we have services running in. And I know we use to protect our Microsoft 365 environments, any of our VMware and physical server stuff is protected by us as well. And then Salesforce later this year. 

CARTER: Wow. Well, as we start to wrap up, I know there's a bunch of things we haven't talked about. Customer success stories, anything like that. Is there anything that we missed that you really wish we would have asked? 

CODY: So I know we have Thermal clothing company that is taking advantage of Veeam Backup for Google Cloud. And what they were interested in is we're taking an image-level backup, but we also give them the ability to perform file-level recovery of their VMs that run up in the cloud. So on top of being able to just restore as a compute instance, we can open it up and give them the ability to pull data out at a granular level. 

MAX: That sounds super useful when you don't want to go through the hassle of trying to go through a full recovery just for one thing, and then you've lost the other stuff that you didn't want to write over, and the great capability. 

CODY: I know several people that have started migrating their on-prem VMware environments up to GCVE. And we've helped them set up protection of their VMware in the Cloud and backing up to GCS to minimize the cost. 

When version 12 comes out, we'll be able to support direct-to-object storage, which will make those cloud VMware environments easier, because you don't have to stop on a GCE instance with a bunch of disks. You can go straight to object storage. So it'll make it cheaper and more efficient. But today, the recommended approach is leverage some Linux repositories with some persistent disks attached and stage it there, and then copy off into object storage. 

CARTER: Mm-hmm. 

CODY: And then there's quite a few customers that I know that are leveraging GCSs as their offsite copies and their additional copy. 

CARTER: So I learned a lot about disaster recovery, why you might want to do it, even different levels of disaster recovery, like you just talked about file versus the whole instance. If people want to learn more about Veeam, is there any place they can go to check out more? A site, a resource, anything like that? 

JO-ANNE: Certainly. They can find us at Veeam.com. 

CARTER: Veeam.com, the main website. OK. 

CODY: If people are looking for scripts, they can look at VeeamHub on GitHub. There's repositories of PowerShell scripts and things that are out there. If people are interested in our Kubernetes offering, they'd probably want to go to Kasten.io. 

CARTER: Kasten.io. OK. We'll have all those links in the description blow in case you're listening. If there's not any less takeaways, I say we can wrap it. 

MAX: Thank you very much for joining us and telling us some stories today. 

CODY: Yeah. 

JO-ANNE: Thanks for having us. 

CODY: It's been good. 

CARTER: Thank you guys so much for coming. Wow, and that's that episode in the can. That's a wrap. 

Disaster recovery is something-- maybe it's part of it is that I've worked at really large companies and I've always been an employee at the company. I'm not the decision maker. But disaster recovery is not something I've actively thought a lot about. 

It's one of those things that theoretically I know is very important, or academically I know it's very important. But the day-to-day of what it takes to actually make sure that you have a disaster recovery plan set up, no idea. So this episode was cool for me in that way. 

MAX: Yeah. 

CARTER: How was it for you, Max? Yeah. 

MAX: It made me think about Google's disaster recovery testing process. So we have a thing called DiRT for disaster recovery tests, and we simulate disasters inside Google all the time to make sure that whatever contingency plans, or backups, or redundancy that we have, we actually stress test it so we know it works. So that if a real disaster does happen, like I don't know, every single person needs to work from home for some reason, we can be confident that the systems we have in place can actually handle that. 

And sometimes they get really funny. Like a monster has risen out of the Pacific Ocean and started eating all of California, so people in New York can't communicate with California. Can we still actually operate? 

CARTER: It's important, too, because I think Jo-Anne brought it up in the call. But she said every second, on average-- so averages are obviously skewed, but it could be close to $100,000. I think she said $88,000 an hour if a business is down. And so especially when you're a business at scale, like you said with Google, you could have a whole East Coast region down. That's a lot of $88,000 an hour adding up. It becomes important. 

MAX: Yeah. And then on top of that, if you've got ransomware on your systems, not only are you losing money to lost business, you might be losing money because some malicious attacker is actually demanding payment for you to get your data back. And I think a lot of the moving to cloud systems and cloud backups can be a great defense against malware attacks that not only take you offline, but then cost you to recover from. 

CARTER: Mm-hmm. So it's interesting, because I think a point Cody brought up really touches on what you just said, in that it's really important to plan out different scenarios. A company like a Veeam, Google, we have our services that can help you. But it's still-- there's a personal responsibility a little bit that goes into the people that are actually operating these services to say, OK, what's important to you and your business? What are your failover plans and whatnot? It was interesting to hear Cody talk about that aspect of it. 

MAX: Yeah. And I think for companies, especially that are located in one or two regions or localities, taking advantage of a cloud-based backup means you could move your stuff geographically very, very far from where your main data sets, your main operations are. So if there's an electrical disruption, or a storm, or a flood, or whatever you can still have that protection, that redundancy, by being in a totally different area. 

CARTER: Well. That was a great episode. I learned a lot. I hope everybody listening learned a lot. 

Before we get out of here, I would love to hear what you're working on. I know you're always doing interesting and exciting things. We haven't done a project in a while other than this podcast, so maybe we can get something going. 

MAX: Yeah, yeah, yeah. I've been working on wrapping up a couple of research papers on how we built Google's internal zero-trust system. So a lot of folks have heard of BeyondCorp and there's a whole bunch of different tools around people, and device inventory, and trust, and policy, and all has to come together so that you can just seamlessly get access to all of the things you need to do your job, whether you're at home, or at the office, or in a coffee shop, or on an airplane. So we published some papers in the past and we're working on a couple more that I hope to be publishing later this year, and I'm pretty excited to get that out into the public and share more about how to keep your whole company secure. 

CARTER: That is cool. Any chance you're going to do videos around that, too? 

MAX: I don't know. I might need some help, Carter. 

CARTER: Aye, I'm here. And you know what? I want to ask Kelsey what she's working on, too. I'm going to plug the podcast website one more time, maybe give her a second to think about it. It's cloud.google.com/podcast. It's pretty new. It's right there with our new jingle, which you also might be noticing is different. 

A lot of changes in the future coming. Super excited. But yeah, Kelsey. What about you? What are you working on? 

KELSEY: All right, so for those who are really familiar with GCP, there's something called BigQuery, which lets people access public data sets and just work through all those different data and models and stuff like that have been collected. So something that I'm working on this week is figuring out how we can publish a lot of those public data sets in the form of a blog post so that others can know more about the information that we have here. 

CARTER: Yo, very cool. I'm digging it. 

MAX: That's awesome. 

CARTER: Well, that's everything for us, and that's everything for episode number 310, Disaster Recovery. We want to just thank everyone for listening. Max and Kelsey, thank you for being here. We'll see you all next week. 

MAX: Thanks a lot. 

KELSEY: Bye 

[MUSIC PLAYING] 

MAX: I like big data and I cannot lie. 