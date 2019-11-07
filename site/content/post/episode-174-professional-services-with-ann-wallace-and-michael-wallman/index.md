+++
audioDuration = "00:33:02"
audioFile = "Google.Cloud.Platform.Podcast.Episode.174.mp3"
audioSize = 47967384
categories = ["Professional Services Organization", "Migration"]
date = "2019-04-24"
description = "Ann Wallace and Michael Wallman are here today to teach Aja and Mark about Professional Services."
draft = false
episodeNumber = 174
hosts = ["Mark Mandel", "Aja Hammerly"]
title = "Professional Services with Ann Wallace and Michael Wallman"
image="/post/episode-174-professional-services-with-ann-wallace-and-michael-wallman/images/hero/hero-EP-174.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/bgvt7d/episode_174_professional_services_with_ann/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Ann Wallace](https://twitter.com/annnwallace) and [Michael Wallman](https://twitter.com/berkeleyboo) are here today to teach [Aja](https://twitter.com/the_thagomizer) and [Mark](https://twitter.com/Neurotic) about Professional Services Organization (PSO) at Google Cloud. PSO is the “post sales” department, helping clients come up with solutions for security, data migration, AI, ML, and more. Listen in to this episode to learn more about the specifics of the PSO!
 
<!--more-->

##### Ann Wallace

[Ann Wallace](https://twitter.com/annnwallace) is the Global Security Practice Lead for Google PSO. She has spent the last 6 months building out the security practice. Ann is passionate about inclusion in tech. She is the West regional lead for Google Cloud EDII and a volunteer with Women Who Code Portland. Before Google Ann spent 14 years at Nike in various engineering and architecture roles. CloudNOW named her one of the top 10 Women in Cloud in 2015. When not working, Ann can be found ultra-trail running around the world.

##### Michael Wallman

[Michael Wallman](https://twitter.com/@berkeleyboo) is a TPM, working on Cloud Migration for internal Alphabet companies and acquisitions. He also serves as the America’s infrastructure practice lead.   He is in his 3rd year at Google. Prior to Google, Michael is Cloud “OG”, and spent almost 5 years growing the AWS Professional Services organization from 5 to 700+. Before sticking his head in the clouds,  Michael helped found 2 start-ups: Aspera and SensysNetworks. Outside of work Michael spends his time chasing his 2 toddlers and mountain lions around the Berkeley Hills.  

Ann and Michael actually met 5 years ago, working on Nike’s first cloud migration project. This encompassed reverse engineering a custom Perl configuration management system. (Who doesn’t love Perl?) It’s a small cloud world. 


##### Cool things of the week

* Amy built an app that uses Cloud Vision to identify key features of images texted to it [link](https://twitter.com/amygdala/status/1117894825741656064)
* Want to Change the Game? Design your own with Google Play [blog](https://blog.google/products/google-play/change-the-game-google-play/)
     * Change the Game [site](g.co/ctgdesignchallenge)
* The team based game of life app we demoed during the keynote is still up [site](https://www.gameoflife.dev/)
* How we search for bow wows and meows [blog](https://blog.google/products/search/google-trends-cat-and-dog-searches/)
     * Why do cats and dogs...? [site](https://whydocatsanddogs.com)

##### Interview

* G Suite [site](https://gsuite.google.com)
* Chrome [site](https://www.google.com/chrome/b/)
* GKE [site](https://cloud.google.com/kubernetes-engine/)
* Kubernetes [site](https://kubernetes.io)
* Anthos (the new Cloud Services Platform) [site](https://cloud.google.com/anthos/)
* Pub/Sub [site](https://cloud.google.com/pubsub/)
* GCS [site](https://cloud.google.com/storage/)
* GCS Dual-Region Buckets [site](https://cloud.google.com/storage/docs/locations)
* Grafeas [site](https://github.com/grafeas/grafeas)
* CRDS [site](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/)
* Exploring container security: Digging into Grafeas container image metadata [blog](https://cloud.google.com/blog/products/gcp/exploring-container-security-digging-into-grafeas-container-image-metadata)
* CRE [site](https://cloud.google.com/blog/products/cre)
* SRE [site](https://landing.google.com/sre/)
* Cloud Consulting Services [site](https://cloud.google.com/consulting/)

##### Question of the week

[How do I cache files between builds in Cloud Build?](https://github.com/GoogleCloudPlatform/cloud-builders-community/tree/master/cache)

* Cloud Builders Community [site](https://github.com/GoogleCloudPlatform/cloud-builders-community)

##### Where can you find us next?

Mark will be at [IO](https://events.google.com/io/), Open Source in Gaming Day which is co-located with [Open Source North America Summit](https://events.linuxfoundation.org/events/open-source-summit-north-america-2019/program/co-located-events/), and [CFP](https://linuxfoundation.smapply.io/prog/os_gaming_day/).

Aja will be online! She has [blog posts](http://thagomizer.com) coming on assessing coding during interviews, using Ruby + GCP for weird stuff, and many other things.

Our guests will be at [Kubecon EU](https://events.linuxfoundation.org/events/kubecon-cloudnativecon-europe-2019/).

{{< transcript "[MUSIC - STEPHAN BODZIN, \"BIRTH (JA MIX)\"] AJA: Hi, and welcome to episode number 174 of the weekly Google Cloud Podcast. I'm Aja Hammerly, and I'm here with my colleague Mark Mandel. Hey, Mark." >}} 

MARK: Hey, Aja. How you doing? 

AJA: I'm pretty good actually, excited about this week's episode. 

MARK: Yeah. I've been up since 5:00 AM Eastern. 

[ROOSTER CROWS] 

And now I'm in San Francisco. So I don't know what day it is, but it's great. 

AJA: I'm so sorry, Mark. But I'm glad that you're out in the community teaching folks awesome stuff about Agones. 

MARK: I do stuff. It's cool. So, this week, we have some pretty cool people coming to hang out with us. We have Ann Wallace, Security Practice Lead, and Michael Wallman, TPM of Cloud Migrations, both from the Professional Services Organization or PSO. So they're going to talk to us all about what the PSO team does here at Google Cloud and how they help out customers. 

AJA: And later, we've got a question of the week about Cloud Build. But first, let's do the cool thing of the week. 

[MUSIC PLAYING] 

MARK: We have many cool things. What have you got, Aja? 

AJA: One of our co-workers, Amy Unruh, built an app that uses Cloud Vision to identify key features of images that are texted to it. The link is going to be in the show notes. And if you have lots of pictures of cats or pretty plants, it will tell you all about them and its confidence in its identifying them. It's a really cool example of how you can hook up some of our ML APIs to your existing applications. 

MARK: Nice. So, as many people know, I really love games. So this isn't specifically Cloud, but it was so awesome, I just thought I'd mention it, on the Google blog called "Want to Change the Game? Design Your Own with Google Play." So the Change the Game program came out of Google Play last year, teamed up with Girls Make Games. They're looking for teens that want to share their game idea and vision of the future of gaming, basically for a chance to see their game come to life on Google Play. 

The grand prize winner of the challenge will win $15,000 towards a college scholarship and $15,000 for their school or community center's technology program, which is really awesome. There's a whole bunch of other stuff in there as well. Unfortunately, it is US residents only. But if you want to get involved or you know a teen that might want to get involved, I will have a link in the show notes to apply. 

AJA: That sounds awesome. My other cool thing for this week is, if you saw the Developer Keynote at Next, either in person or you watched one of the recordings or live stream, the Game of Life app that was demoed during that keynote is still up if you want to play with it, and it's at GameOfLive.dev. 

MARK: Oh, fun. 

AJA: Yeah. It's really cool. I didn't ever think of Game of Life as a team sport. I always thought of it as a fun mathematical exercise. But it's actually a lot of fun when there's five teams playing, trying to out-glider each other. So if folks want to check it out, it's still up there. Feel free to go try it and compete against your co-workers. 

MARK: Fantastic. Last, but not least, again, I seem to be picking semi non-Cloud stuff. This is a Google Search thing, but it was just too adorable to pass up. I'm going to read the first paragraph because it's fantastic. "It's not quite caturday, and we're a few months away from the dog days of summer but searches for pets never paws. Around the world, people constantly ask Google questions about their furry friends, so there's no time like the present for a good old-fashioned (OMG-look-at-that-little) face-off." 

So it's basically an article talking about how people search for about dogs and cats. And not only is there an article discussing it, they made a website called WhyDoCatsAndDogs.com, talking about all the trends that people ask about-- why do dogs do certain things, or why do cats do certain things such as licking or eating or moving around or shakes or just weird sounds that they make? My dog makes a little weird sounds. So it's a lot of fun whether you're a cat person or a dog person. 

AJA: I'm super excited about that because we all know you're a dog person, but I am definitely a cat person. And I'm sitting here recording, being supervised by one of my cats. 

[MEOW] 

MARK: And my dog is fast asleep next to me, snoring. 

AJA: Dogs are so much better behaved. 

MARK: Sometimes. Why don't we go have a chat with Ann and Michael though, and get the interview going? 

[MUSIC PLAYING] 

So this week, I am very excited to have two wonderful people come and join us. We have Ann Wallace, Security Practice Lead, and Michael Wallman, TPM of Cloud Migrations, joining us from the Professional Services Department for Google Cloud. How are you both doing today? 

MICHAEL: I'm good. 

ANN: I'm doing great. 

MARK: Awesome. Well, thank you so much for joining us and coming to talk to us all about professional services and what it does. Before we do that, do you want to tell us a little bit about yourselves and what you do here at Google? 

ANN: Sure. My name's Ann Wallace. I'm based in the Portland office. I am currently the Global Security Practice Lead for Google PSO or Professional Services. The security practices is fairly new. We spun off of the infrastructure practice about six months ago, so I've been helping build that out within the Americas and globally. Prior to Google, I spent 14 years at a major athletic company in Portland. I had a lot of roles in architecture and engineering. And when I'm not working, you can find me running very long distances on trails and in the mountains. 

MARK: You run like ridiculously long distances. 

ANN: Yeah, 50ks, 50 miles. My dog has run up to 30 miles with me. 

MARK: My dog barely runs. 

[LAUGHING] 

Like, if we hit a hill, she's like, oh, it's hard, no. 

[DOG WHINING] 

ANN: Yeah. I have a German Shorthaired Pointer. They are very energetic dogs. 

MARK: Michael, you want to tell us a little bit about yourself? 

MICHAEL: Sure. I run double ultra marathons because I have a rambunctious 3-year-old, long curly blonde hair who we called The Dude. So I'm constantly chasing after him. Occasionally, I'll chase after mountain lions in the Berkeley Hills. For Professional Services, I'm an Infrastructure Practice Lead. And you know, infrastructure is kind of the catch-all practice-- compute, storage, networking, containers, AppDev, security-- but we're beginning to spin off these like sub-practices, and that's where kind of Ann came in and picked up security. So outside of that, I do big gnarly migrations from on-prem to cloud, from other clouds to other clouds. And yeah, I'm cloudy. 

ANN: Yeah. And actually, you know, Michael and I met-- it was probably six years ago outside of Google. The company I was working for, he helped us do our first cloud migration, so then we just ended up at Google together. 

MICHAEL: Yes, and I remember debugging a custom Perl configuration management system. 

[LAUGHTER] 

It was amazing. 

ANN: Yeah. So luckily, we don't have to do that anymore. 

MICHAEL: Yeah. 

AJA: So y'all said that you work for PSO. What does PSO do? 

MICHAEL: I mean, we help customers migrate applications and storage around. We help them, in essence, move, generally, from on-prem to cloud. That's like our charter. You know, more recently, it's been moving customers from clouds to other clouds and setting up kind of these hybrid environments, and you can imagine the challenges with this. I mean, I think customers that are kind of maybe sitting in the San Francisco Bay Area that are more tech-heavy have an easier job, but we have to service all customers. Therefore, we can fly out to the Midwest and service some customers there. And you know, it's different challenges. 

ANN: Yeah. I think, in a nutshell, that's what we do, but I think there's a little bit more to that as well. We work a lot. You can think of us as post-sale versus the pre-sales where you have our customer engineers and solution architects. But we also partner very heavily with those teams and work on solutions around security, data migration, AI, ML sort of things. 

And we also are getting a lot of customers who are wanting to figure out how to move their VM applications to containers, so it's not just the traditional lift and shift kind of scenarios anymore. Also, I speak at several conferences a year. We're at Google Next, the Cloud Summits, and we work pretty closely with a lot of the PMs. I work very closely with a lot of the security PMs. We have a lot of input into the roadmaps for a lot of the GCP services just because of customer input. 

MICHAEL: To add to that, everything kind of starts with the customer, right? So the Professional Service Org is like the one that touches the customer the most. Like we're there, we're friends with the customer. I have dinner with the customer and then I help them design their next-generation products. 

MARK: So what does a typical engagement with a customer actually look like? Where do they go, how does it get started, and then where does it go from there? 

MICHAEL: It starts with a scoping, right? It starts with a dream. 

[ANGELIC CHOIR] 

You know? Specifically, at GCP, it starts with a dream of like, I want to operate like Google. 

MARK: OK. 

MICHAEL: Right? And it just starts there. And then you kind of work backwards. And like, what does that mean? It means like, you know, being flexible, fast deployments, able to iterate very quickly, being secure. So it starts there, and then we kind of work backwards and figure out like, how do we actually make it a reality. And so it's challenging because customers are running more monolithic applications, so they're older and now they want to run in containers and microservices and how to get the data up there, et cetera, et cetera. 

ANN: But I wouldn't say there's really a typical type of engagement, because every customer is so unique and brings different challenges to us, and it's not always technical. Sometimes it's more organizational that we have to navigate through. But you know, sometimes the conversations start with us. Sometimes they start before us, again, working with maybe solution architecture team or customer engineers and then we get pulled in when they want a little bit more than those teams can provide. And it might just start with a conversation. You know, maybe you're at a conference and meet up with somebody and say, hey, we have these sort of things. I still feel like it's pretty organic how a lot of these engagements start. 

MICHAEL: Also, with the packages-- I mean, Ann, I think you're 100% correct. Like, we're constantly trying to generate reusable content, like these reusable packages. But we found it hard in the sense that every customer's unique. It's amazing. Like, they're using different flavors of code and different flavors of OSs and different networks. So I've been in cloud a long time, and there are common patterns, but it's amazing how many different combinations you see. 

MARK: And when you're doing an engagement, what sort of hands-on engagement are you having there? I mean, are you sitting down and building out architecture diagrams? Are you sitting next to your engineers and writing code? 

ANN: Yeah. I think it's a little bit of everything. And sometimes, the engagements are short, so with security, we have just a security workshop. So we'll go into a customer for around three days and do a lot of security deep dives into our services, a lot of best practices kind of tutorials, whiteboarding. Then we have customers who want more of the-- come in, tell us how to move this from the data center VMs to containers in GCP. And that might be coming up with a technical design document, so it's writing out a lot of use cases and diagramming that. 

But then there also might be that case where it's like, hey, this is great. You've diagrammed all this for us and delivered this technical design document, but we really need help implementing that. So then, we might have another engagement where we do that. We also leverage partners to help with some of this work. So if there's a lot of hands-on keyboard or they want more [? staff on, ?] we tend to-- instead of having Googlers set a company for months on end, we use partners to do that. 

MICHAEL: Yeah. I would say, absolutely. I mean, Google has never traditionally been a consulting company. Like, you don't think of Google as a consulting company. So we're definitely partner heavy, but we do try to mimic some of the success Google has had internally at our larger projects. So for example, we have a TPM that maps to a TL that maps to partner engineers, and we try to run-- 

MARK: Can you explain those acronyms just for those who aren't Googlers? 

MICHAEL: Oh, sure. Technical Program Manager. TL is the Technical Lead. That's how we develop our products internally. And so, we've had a lot of success mimicking that model at some of our larger customers. And then we're able to iterate faster, everything is documented, and we're status reporting well. And another added kind of layer of complexity that we see is that we're not just GCP, right? We're G Suite, we're Chrome, we're Android. 

So that adds just another layer of-- I wouldn't say complexity, but you know. When they go all in on Google, it's like they get access to all these different things. And it's kind of interesting how you can really transform a business, not just from a technical stack, but like from a [? people's in ?] process. So that's something new that we've been working on as well. 

AJA: So you guys are on the front lines. You're hanging out with customers. You're learning things. You're helping folks. Any trends or changes that you're seeing that you find particularly interesting? 

ANN: One of the trends we're seeing a lot is multi-cloud. So you have customers who have been AWS or Azure for a while, but then they see things that we're doing that maybe the other cloud providers aren't doing. They were just doing it differently. So we're seeing customers coming to us through GKE or we see customers coming to us for all our ML technologies, but then maybe they continue to use the other cloud providers for other things. And also, I think, really in the last year, it's been a big uptick in GKE or Kubernetes. A lot of companies now, it's like, if we're moving to the cloud, we just want to move to containers. We don't want to deal with VMs anymore. 

MICHAEL: Again, I can concur, being an old-school BSD person. And as an infrastructure lead-- I mean, infrastructure historically is compute network storage, right? And now, they're beginning to abstract all that away into this like open-source cloud. I mean, that's what [INAUDIBLE] says. We're the open-source cloud, and therefore, we're moving away from VMs and this type of thing, and we're going to containers, GKE, Istio, service meshes. And so the long-term vision, I believe, of GCP, is to be the open-source cloud. 

You can run your compute here. You can move it on-prem. You can move data around. So there's a lot more, I guess, momentum to that direction. I mean, companies want to get there because they don't want to be tied to a cloud provider. They want their freedom, and I believe GCP is moving in that direction. We're trying to just like open it up. You want to use GCP? Great. You want to run on-prem? Go right ahead. That's great. 

MARK: Are you seeing any particular GCP products that are super hot right now? 

MICHAEL: CSP, and I wish I knew what the acronym meant. 

ANN: Cloud Services Platform, that's what it is. 

MICHAEL: This is-- and ironically, Eric Brewer, an old professor of mine, is kind of leading the charge here. It's just the open-source cloud. It's containers, Istio, and now we're extending it out in that you can extend kind of like the Kubernetes language that's in YAML, deployment language. And now you can extend it out to further GCP services, so now, I can start defining pub/sub topics and cloud SQL databases all within this Kubernetes construct, so I'm super excited to see that happen. And yeah. 

MARK: Ann, are you seeing anything in particular with your customers? 

ANN: I think what I'm seeing, it's not so much hot services because I've been talking to customers who are really wanting security first. I think the trend is really to get the security teams at the table from the beginning. I think, a year ago, even six months ago, we'd have customers who planned all these deployments, were like ready to go to reduction, and then, all of a sudden, they get a big red flag. They're like, no, because the security teams weren't brought in from the beginning. 

So I'm really seeing a passion from customers about getting the security folks to the table first. And coming from a security background, I'm very happy to see this, and just making security part of the deployment pipeline, baking security in from the beginning so they don't have to think about it later on. 

MICHAEL: Absolutely. I would say, one more thing I'm seeing a lot is very large data migrations, and I'm not talking about 10 terabytes or even 10 petabytes. I'm talking 100 plus petabytes. And so the new challenges for the infrastructure team is, how do I even move this data around? I know there are some products that you come in and plug a fiber in and you're supposed to, you know, close your eyes and pray that all the data gets copied, but it's just much more than that because you're applying security policies to the data, you're encrypting it. 

And this amount of data, I think I did an analogy in a presentation saying, we're moving so much data at some of our customers, if you were to stack the hard drives up, it would be higher than like three Golden Gate bridges or something. It's massive amounts of data. And I think this is fairly new, that I haven't experienced to date. 

MARK: Why are they doing that? 

MICHAEL: Servers go end of life, right? I mean, they're running these gigantic Hadoop clusters, NetApp filers. I mean, they just go end of life. And then now, they're faced with, how do I make use of this data? Like, I need to obviously run MapReduce or parallel process it. And so I think it's a combination of end of life and the new frontier of AI. They want to tap into Google's AI for the data, and the only way to do that, obviously, is to have the data in cloud. But again, it's like totally new challenges. I mean, you don't just rsync or FTP the data up. You know? 

MARK: Given that you work so much with customers, you mentioned previously that you work a lot with product managers as well. Is that sort of shaping product and providing feedback? What does that internal stuff look like? 

ANN: Yeah, so there is a lot of that. So I work closely with a lot of the security PMs, so Andy Chang, CJ Johnson, Maya. So it is giving feedback. I've also been contributing to some of the PCI work and compliance work we're doing. And we also do sessions at Next, the Cloud Summit. We lead internal-- what we call [? SME ?] academies, so it's leveling up a lot of the folks that are in the field, so PSO, the customer engineer, solution architects on security. 

So we do this a couple times a year, bring a lot of the security PMs and other folks to talk about roadmaps of what's going on in the field so we're all kind of on the same page. And I've been helping build out some demos for the products that we have. So again, that's partnering with Andy a lot. So, yeah. There's a lot of exciting things going on, but I really love the fact that we're able to feed back into the products and give input into what's being built. 

MICHAEL: I would say I have a love/hate relationship with product managers. 

[LAUGHTER] 

Let me explain. I mean, we mostly love each other. But back to this-- you know, when you're migrating 200 petabytes to a storage platform, there's a lot of things to consider. And so what we do is like, as a TPM, I'm basically negotiating between product management and the customer. Right? And it's this constant on negotiation. And like, we drive product. For example, the dual bucket GCS feature that I believe now is in beta came from a customer saying, OK, I'm going to have my 100 petabytes in us-east1. And if I have a regional outage and I have a security event, I need to go through this data. Like, what am I supposed to do? So there's this new dual-region bucket that came out of that requirement. 

Another example is the customer said, OK, I want to process this 100 petabytes in like 20 minutes. And you do the math and it's like, I need 20 terabits a second of throughput. That's completely outrageous. So you know, I was able to like work with the security team and the customer to kind of back that down to something reasonable, so that's where the love/hate-- I mean, they love me when I'm negotiating with the customer and I'm basically saving the platform, but they hate me when I'm demanding new features. But this is ongoing. I mean, any big customer, it's exciting, right? Product managers always want to partner with the PSO people. 

AJA: Yeah, but those features sound amazing. And it's so cool that they're driven by real use cases that we're running into and solving problems for people that are on our platform. That's awesome. 

MICHAEL: Absolutely. I mean, if you were to tell me I could have petabytes and petabytes of data asynchronously copied to two locations at the same time, like, I don't know how they do it. Well, I do know how they do it, but-- 

MARK: We have big pipes. 

MICHAEL: Yeah. It's pretty amazing. 

AJA: Very big pipes and lots of magic. 

ANN: Our PMs, they are super busy. They are always very eager to speak to customers and present to customers. I'm in awe sometimes how they get everything done that they do. 

MICHAEL: Just to add on, I mean, the platform is changing so rapidly that, literally, my full-time job should just be like monitoring new beta features. I tried to set up an RSS feed, but that didn't really work. I'm trying to figure out like a good way to digest all this information, so if any users out there have a good method of doing this, I'm all ears. 

MARK: I hear the podcast is really good for that. 

MICHAEL: Yes. 

MARK: I don't know. 

MICHAEL: But then I'd be listening to podcasts like 24 hours a day. 

ANN: Well, if you ran 30 miles, you could listen to podcasts. 

AJA: So we've heard about some of the cool and challenging problems you've run into. Any others you want to share with us, because I know everyone loves hearing about all the other cool problems that other people have? 

MICHAEL: I'll even speak for Ann on this one. 

MARK: Oh, no. 

MICHAEL: You're getting ready to roll to production, like you're ready to click the button and just say go, and then the CSO walks in and says, what's going on? And you're like, oh, I'm migrating like all our infrastructure to cloud. And then he puts a kibosh on the whole thing because, obviously, it hasn't gone through the proper security reviews and audits and compliance. 

ANN: I mean, yeah. That's a true story, and that's a true story over and over again. But I think now that we have the security practice and some of our sales teams and our technical account managers know that, they're trying to get security at the table to begin with. And so we have unblocked a couple of these scenarios just by having security folks in the room. And regardless if the security folks were a part of the infrastructure team two months ago, but because they have that security title, it's helped. And again, it's just trying to automate security into the workflow to begin with and having it almost seamless so you don't have to think about it. 

MARK: Actually, yeah. You say automating security. Are there any particular tools or products that you've really liked for doing that kind of stuff? 

ANN: What I like right now-- and I always end up saying this incorrectly-- but for containers, is using Grafeas, and CRDS for signing, using that with binary authorization. So you can set policies to check for multiple different things, but you know, for different vulnerabilities, vulnerability scores, if they're high or medium or so forth. And if those are found, then CRDS doesn't sign the container image. And if you go and try to deploy it, it gets stopped, so I think that's a pretty neat tool that we have out there right now. So binary authorization is in GCP, and Grafeas and CRDS-- and again, I'm sorry if I said that incorrectly. 

MARK: We'll put links in the show note. We'll work it out. 

ANN: Our open-source projects that we have. 

MICHAEL: You have your technical issues, and I think, probably more importantly, you have your people issues. And like, it's generally the people issues that kind of like provide the roadblock. And so, in larger migrations, you're like navigating emotions. You know, like I'm almost a psychiatrist at these projects, like I'm coaching them about their cloud migration and coaching them about how to retrain their org, and it's a lot of pressure. You have to retrain people. Maybe some people might lose their jobs as a result of some of the migration, so there's a lot of people aspects to our job. 

I've got a challenging one. They've got an architecture diagram from Miles Ward. Miles Ward hands them something beautiful. It's amazing. It's AI. It's automated. It's DR. Half the world could get hit by a meteor and this thing would still run. It's like, they get handed this, and they're like, yes, I want it. Then you go in there and they're running like Windows 95, right? So that can be challenging. They know what they want. They want the big picture and the beautiful Googliness, and then it's just kind of hard to get them there. And so reality can be tough sometimes, but we're there to iterate them and kind of help them out, right? 

MARK: So first of all, hi, Miles. Second of all, how do you step people through that? Like how do you take someone from somewhere where they're in a less modern architecture and bring them up to speed in what may be cloud native or whatever the buzzword is right now? 

MICHAEL: We're working on a partner package, a package that basically takes them the first step to containers. So you can run a container orchestration system like Kubernetes, and it orchestrates multiple containers and load balances and does all that fun stuff. But you can also run a container in a one-to-one mapping to a actual VM. So like, I'm working on a package that says, OK, I'm going to take your VM. I'm going to containerize it, which gets you-- then you can use the tools that Ann mentioned to kind of do the security and get it in a registrar. 

And then you're going to deploy these containers on a one-to-one mapping to GCE. So now, you're containerized, but you're still kind of running on a lift and shift mode, so that's like a initial step. And then security comes in and you get all the features. Like GLB, for example, offers-- I believe it has like DDoS and other things like that. Ann? 

ANN: Actually, I have something that's a little interesting. I don't have it's an interesting problem that we've solved, but think it's something different that PSO does than maybe other cloud professional services organizations. And it just slipped my mind because I've been so focused on security. But when I started at Google, I was helping build out CRE offerings with PSO. So I think you've had some of the CRE folks on the podcast before. 

So CRE, just for folks who might not have heard that, is Customer Reliability Engineer. So they are some of our site reliability engineers who are customer facing and work with some of our larger customers on building out SRE practices within their org. So the CRE team is small and just overbooked, so they're looking to see how they could grow this. So they've partnered with PSO, so we're starting to offer CRE offerings. 

So some of this is just going in and doing kind of basic SRE 101. But then we also have SLO, SLI workshop, so this is taking a customer's application and running it through what it might look like to set error budgets and your SLOs and SLIs. So the little bit I got to work on that six or so months ago was really exciting. But it's starting to kick off now, so there's a few folks within PSO who are driving that, so I'm really excited to see where that goes. 

MICHAEL: Just to follow up there, I can't believe I forgot the SRE portion of all this. You know, I partnered with Liz Fong-Jones, one of my favorite people on Earth. 

ANN: Yeah. 

MICHAEL: It's actually like a new construct. So I came from another large cloud vendor, and we'd lift and shift and we'd lift and transform, but we never talked about operations. And so, again, this is coming with the whole, I want to run like Google. So you can lift and shift a monolith and actually apply SRE principles to these monolith applications, so we're doing that as well. So we're trying to kind of embed this during the transition. You know, it's just a whole lot of fun when you start talking about error budgets and, you know, how many nines. The customer asked for five nines, but the application they have is two nines. It opens up for some interesting conversations. 

AJA: So if people want to get involved with all this awesome work you're doing in PSO, where do they go? 

MICHAEL: They visit us at Google Next. Or I believe they talk to their GCP counterparts, the CE org, the sales team, the technical account managers. We're all tied together like one Google, right? So, you know, we're like a large hash map. 

ANN: Cloud.Google.com, I think you can find us on there. We have tons of job openings. I think if you just look for Cloud Consultant, it will come up with things in infrastructure, AppDev, security, ML. 

MARK: So it sounds like, if people want to get in contact with you, the best way is through their account rep or their sales contact. 

ANN: If they want to get into contact with PSO, yeah. I can tell you how to personally get in contact with me, but you know. 

MICHAEL: Yeah. You can send me an email, but I have thousands and thousands of emails unread at this point. 

MARK: Well, we are running out of time, unfortunately. Is there anything you both want to mention? Are you doing anything special for Next or something that you want to make sure people know about? Anything along those kind of lines before we finish up today? 

ANN: Yeah. I will be at Next. I'm not speaking this year. I'm just going to be hanging out, talking about security. Right after Next on April 13 is a Woman Who Code CONNECT summit, so I'll be speaking there. That is also in San Francisco. And the KubeCon EU speakers just got announced, so I'm going to be speaking with Maya, and we are going to be speaking about container forensics, when your cluster becomes a cluster. 

MICHAEL: That sounds cool. Can I go? Where is it? 

ANN: Barcelona. 

MICHAEL: Oh, yeah. Yeah, I will be attending that. 

MARK: Well, thank you so much to you both for joining us here on the podcast. We really appreciate you taking the time. 

MICHAEL: Thanks a lot. 

ANN: Thanks for having us. 

MICHAEL: Bye. 

MARK: Thanks so much to Ann and Michael for coming to hang out with us. It's always really interesting to hear about teams internal to Google, how they help customers, and how they help support them, so super happy to have them on. 

AJA: Yeah. That was a great chance to talk and learn about something that I didn't actually know much about yet. But now, it is time for question of the week. 

[MUSIC PLAYING] 

And our question this week has to do with Cloud Build. The question is, how do you cache files between builds in Cloud Build, which is something that a lot of folks want to do to speed up their builds and/or because they've got interesting pipelines that they're trying to build where they have lots of different dependencies. So Mark, what is the answer to this question? 

MARK: I had exactly this problem. Basically, I had a file-based cache that I wanted to store some records in and just persist it between builds to make things a bit faster. And I was like, OK, clearly I have Google Cloud Storage. I can push stuff up and down. But like, what if it's not there? What if it is? I don't want to write all this code. So I went hunting through the repository, which is the cloud builder's community repository under Google Cloud, which has a bunch of Google Cloud Builder steps. 

These are custom build steps that you can use yourself inside Cloud Build that do some kind of fancy things. And there's a whole bunch of them. I'm not going to go through them all. But one of them that stands out and one that I really like is there is a cache build step. Or a cache, depending on whether you're Australian or American? And what it has, it has a safe cache and a restore cache functionality, so it will take basically any path that you like and check it in Google Cloud Storage. 

You can have keys. You can have your own keys if you want. You can tell it what bucket you want to put into. It will even do check summing of a particular file. So if you want the cache to be stored with the check sum of a file and you want it to change when the file change, it's all kind of baked in and just works. So if you're looking for that, we'll put a link in the show notes, but it's super handy. Just put it in, it just worked, it was great. 

AJA: Yeah, and that whole community, all those community supplied builders are really great. Because, oftentimes, the problems we have are problems someone else has already solved, and we're really grateful to the community for the ones that they've contributed. So even if caching isn't your problem, you should totally go check out the community builder's repository on GitHub and see what other folks have built. 

MARK: Awesome. Well, before we wrap up, Aja, what are you doing? Where are you going? Doing anything cool? 

AJA: I'm not doing anything cool. I am taking a break from travel and events to focus on family and my career and a bunch of other really boring stuff. 

MARK: Awesome. Good for you. 

AJA: So I'm going to be online. If people want to see what I'm up to, they can totally check out my blog at Thagomizer.com, or they can follow me on Twitter. I am the_thagomizer. And for those who don't know, a thagomizer is the spiky part at the end of a stegosaurus. I've got blog posts that are written and going to be released in the next couple of weeks on doing coding assessments and interviews. 

MARK: Nice. 

AJA: What we can do instead of whiteboards because there's been a bunch of tweets recently about whiteboards being awful. And then I have a horrible project idea that I'm going to use with Ruby and GCP and Cloud Storage and probably some of the ML APIs that I hope to have a blog post about in the next couple of weeks that folks can check out, especially all of my Ruby friends. And a new version of Ruby was just released at Ruby [INAUDIBLE], and I'm going to check out-- pattern matching has been added as a potential feature, and I'm going to check that out because I love me some pattern matching. 

MARK: Fancy. 

AJA: So if you're curious about my thoughts on any of those things, follow me online. 

MARK: Fancy. 

AJA: How about you, Mark? Where are you going to be going? What are you going to be up to? 

MARK: Yeah. So in two or three weeks, I will be at Google I/O. I will be doing the presentation there about Open Match and Agones working together, games on top of Kubernetes and open source, unsurprisingly. I'll mention something that's a little bit further in the future as well. In August, there is an Open Source in Gaming Day. So people may be familiar with the open source North America summit under the Linux Foundation. We've been working with them and some other people, looking to advocate for more open source in the games industry. 

So we're going to have a day. It's August 20. It's co-located with the event, so it's going to be the day before. So if you are interested in attending, we'll have details in the show notes. But if you have any particular open source stories around anything pretty much to do with gaming, there is a call for papers open as well till May 4. I believe that date's correct. I will also have the link in the show notes as well, so that'll be fun. That's come up in August. 

AJA: That sounds awesome. 

MARK: Cool. Well, Aja, I think that wraps things up. 

AJA: Yeah. So thank y'all for listening. We'll have another awesome episode for you next week. 

MARK: See you all next week. 

[MUSIC PLAYING]