+++
audioDuration = "00:38:03"
audioFile = "Google.Cloud.Platform.Podcast.Episode.318.mp3"
audioSize = 54810243
categories = ["Kubernetes", "Anniversary", "GKE", "Open Source"]
date = "2022-08-31"
description = "Tim Hockin joins Kaslin Fields and Anthony Bushong to celebrate GKE's seventh birthday!"
draft = false
episodeNumber = 318
hosts = ["Kaslin Fields", "Anthony Bushong"]
title = "GKE Turns 7 with Tim Hockin"
image="/post/episode-318-gke-turns-7-with-tim-hockin/images/hero/hero-EP-318.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/x2iogq/episode_318_gke_turns_7_with_tim_hockin/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Tim Hockin](https://twitter.com/thockin) joins [Kaslin Fields](https://twitter.com/kaslinfields) and [Anthony Bushong](https://twitter.com/agmsbusho) to celebrate GKE's seventh birthday! Tim starts with a brief background on GKE from its beginnings in 2015 and its relationship to Borg to the visions Google developers had for the software. GKE is meant to help companies focus on what they're good at and leave the rest to Google's managed Kubernetes service.

Tim talks about his acting gig in a Kubernetes documentary, including some fun facts about Kubernetes' early days and the significance of the number seven. Over time, the teams working on open source Kubernetes and GKE have worked together, with advances in the open source software influencing updates in GKE. Kubernetes 1.25 was released the day this episode was recorded, and Tim describes how much work and thought goes into building these updates. 

GKE offers GCP users unique ways to leverage Kubernetes tools like scaling, and Tim shares stories about the evolution of some of these tools and his experiences with networking. Talking with the Kubernetes community has helped refine GKE multi-cluster tools to help companies solve real problems, and Tim tells us more about other features and updates coming with future iterations of GKE. KubeCon is in October, so come by and learn more!
 
##### Tim Hockin

[Tim Hockin](https://twitter.com/thockin) is Principal Software Engineer working with Kubernetes at Google Cloud.

##### Cool things of the week

* What’s new with Google Cloud [blog](https://cloud.google.com/blog/topics/inside-google-cloud/whats-new-google-cloud)
     * Power Your Business with Modern Cloud Apps: Strategies and Best Practices [site](https://cloudonair.withgoogle.com/events/building-cloud-app-excellence?utm_source=facebook&utm_medium=social_inmail&utm_campaign=FY22-Q3-global-ENTD218-onlineevent-er-b&i-cloud-native-app-dev-event=&utm_content=register_noram&utm_term=-)
* Securing apps for Googlers using Anthos Service Mesh [blog](https://cloud.google.com/blog/topics/developers-practitioners/securing-apps-googlers-using-anthos-service-mesh)
 
##### Interview

* GKE [site](https://cloud.google.com/kubernetes-engine)
* Kubernetes [site](https://kubernetes.io)
* Anthos [site](https://cloud.google.com/anthos)
* Borg: The Predecessor to Kubernetes [blog](https://kubernetes.io/blog/2015/04/borg-predecessor-to-kubernetes/)
* Enabling multi-cluster Gateways [docs](https://cloud.google.com/kubernetes-engine/docs/how-to/enabling-multi-cluster-gateways)
* Cloud Load Balancing [site](https://cloud.google.com/load-balancing)
* Multi-cluster Services [docs](https://cloud.google.com/kubernetes-engine/docs/concepts/multi-cluster-services)
* Keynote: From One to Many, the Road to Multicluster- Kaslin Fields, Developer Advocate, Google Cloud [video](https://www.youtube.com/watch?v=o5jU94TB8tI)
* GCP Podcast Episode 272: GKE Turns Six with Anthony Bushong, Gari Singh, and Kaslin Fields [podcast](https://www.gcppodcast.com/post/episode-272-gke-turns-six-with-anthony-bushong-gari-singh-and-kaslin-fields/)

##### What's something cool you're working on?

Kaslin is working on [NEXT](https://cloud.withgoogle.com/next) and [KubeCon](https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/) stuff.

Anthony is working on [GKE Essentials](https://www.youtube.com/playlist?list=PLIivdWyY5sqLQ3m7WJDfBdMMqO12Q0vqg) and getting ready to go on leave.

{{< transcript "[MUSIC PLAYING] ANTHONY: Hello and welcome to episode number 318 of the weekly Google Cloud Platform Podcast. My name is Anthony Bushong. And I am here with my colleague in Developer Relations Engineering, Kaslin Fields. Hey, Kaslin." >}}

KASLIN: Hello, Anthony. I'm so excited to be here today. [LAUGHS] 

ANTHONY: I am excited that you are here and co-hosting with me because we have a very exciting topic for today. This past month, GKE has turned 7. And last year, you and I were on the GKE turns 6 podcast. And first, I can't believe that was a year ago. 

KASLIN: Yeah, absolutely. Where does the time go? [LAUGHS] 

ANTHONY: Yeah, I think the past few years have just sort of warped together. But going back to that podcast, we had a fun conversation around GKE customers and who's been successful, the cool things they were doing with GKE. 

But I'm excited about today because we'll actually have a chance to roll it back. We're going to talk to someone who has been there from the very beginning. Tim Hockin is our main guest, a principal software engineer at Google who is very well-known for being a leader not just at Google, but also in the Kubernetes community-- pretty much since Kubernetes was born. 

But before we dive into all that, I think it is customary to talk about our cool things of the week. 

KASLIN: Yeah, I was looking around at some of our Google Cloud stuff that we have going on, honestly, trying to find a cool thing of the week. And I found an update on our blog site to the What's New in Google Cloud section, which is apparently a tab in our blog site, which I had never paid attention to or clicked on before. 

So I went over there and clicked on that, and it's this long running page of these short little updates that they do-- looks like every week or so about new stuff that's going on in Google Cloud. So that was really cool. I know I'm always looking for ways to keep up with what's going on in Google Cloud. Even working within it, it's hard to keep up with what's going on. 

And one cool thing that I noticed there is there is a webinar on August 30 that is going to go over GKE, as well as a bunch of other things. But I'm primarily focused on GKE, so that was the part that was exciting to me. But the webinar is called Power Your Business with Modern Cloud Apps, Strategies and Best Practices. So we'll make sure to include the link to that webinar in our notes. 

ANTHONY: Awesome. That definitely sounds interesting. You know I love GKE as well. I'll be sure to check out the recording that we share. And in general, as far as you talking about searching for a cool thing of the week, I think even if I'm not recording a GCP podcast, I'll probably just start looking for cool things over the week and writing them down because I don't do it enough. 

My cool thing of the week is I worked with our Site Reliability Engineering team recently in CorpEng, which is our internal IT organization, to talk a little bit about how we use Anthos Service Mesh, which is powered by the open source project Istio, and how we use it to secure apps that Googlers like Kaslin and myself use every day to get our jobs done. 

So we'll include that link to the blog post. And it's just interesting to hear a little bit about how Google itself is using Kubernetes, using Istio, using some of this technology that we've helped bring into the open source. So I happen to think it's cool, but hopefully you do as well. 

KASLIN: That blog post is so awesome. I will tell you, I have read it, and I highly recommend that you go through and read it. I've had a lot of folks ask me over the years, what is Google doing to use its own stuff internally? And this blog post gives you a lot of really cool insight into that, so highly recommend it. 

ANTHONY: Thank you for the kind words, Kaslin. But with that said, I think it is not as cool as our main content for this episode. So let's jump right into our conversation with Tim. 

KASLIN: So we're here today with Tim Hockin. Tim, would you like to introduce yourself? 

TIM: Hi, there. Yeah, I'm Tim. I've worked at Google for a long time. And I work on, primarily, the Kubernetes project where I work on networking and infrastructure-- all sorts of topics there. That feeds into my work on GKE and Anthos products on GCP. 

KASLIN: And we're here today to talk about GKE turning 7, which is very exciting. And I know that you, Tim, have been involved with the project since its very early days. So I'm hoping we can learn a little bit about that from you today. 

TIM: Yeah, happy to talk about it. 

ANTHONY: Yeah, so maybe the first thing we can do is, actually, rewind a bit back to 2015. So in 2015, I believe that is when GKE started. 

KASLIN: August 26 was when GKE launched. Yeah. 

ANTHONY: Fantastic. Right on the money. Tim, could you tell us a little bit about how GKE began, specifically, a managed service-- a managed offering of the Kubernetes project from Google? And what was your dream and the team's dream for what that could eventually become? 

TIM: Before this project, I worked on our internal system called Borg and its successor research project called Omega. One day, I had a waking nightmare where I realized I would eventually have to leave Google. And when I did, I wouldn't have Borg anymore. And I wouldn't be able to do all the things that I do with Borg. And I realized, oh my goodness, this is going to be incredibly hard to recreate. 

So when the opportunity came up to work on something that was very Borg-like, it was obvious to me that I had to do this. I had to work on this. I'm an infrastructure person by nature and I tend to focus on a single machine at a time. But when I first learned how to use Borg, I was blown away at what I could do with it. Things that I used to run that would take all weekend to run, I could do in a half hour. 

And so, I wanted to bring something that was Borg-like to the rest of the world, knowing at the time that what we do in Borg is very vertically integrated and that whatever we did for the rest of the world would have to be different in a lot of fundamental ways. 

And so, when we were building Kubernetes, we realized, this is a cool system. Everybody I show it to loves it. But most people don't want to deal with that. They don't want to deal with running it. In fact, early on all the slide decks that we use to show to talk to people about Kubernetes, I always had a slide that was a tale of two systems. 

It was the system that you have to run to keep Kubernetes up and going, and the system that your users use. And they are two very different things with two very different roles that are attached to them. 

The second one is the only one that people really care about. And so, GKE is our embodiment of, let us handle the hard parts for you-- the ugly running the infrastructure parts-- and let you focus on running your applications. Back in the '90s, we would call this a core competency. So we want people to focus on what their business is good at and not spend time doing things that they don't need to do. 

ANTHONY: Tim I promise you that sort of analogy or that way that you tell the story of Kubernetes in two tales has made its way into several presentations at Google. 

KASLIN: And beyond. 

ANTHONY: And beyond. Prior to being a developer advocate, I was a specialist for GKE in its early days in the field. And I swear I had that in three different slide decks. So it lives on. 

KASLIN: And speaking of telling the story of early Kubernetes, you were recently in a documentary about the early days of Kubernetes. And you talked a little bit about your experiences there. I'm really excited to hear the way that you described it here. Like Anthony was saying, I feel like it relates really nicely to a lot of the things I'm always telling folks about the early days of Kubernetes. 

But there are some interesting points in that documentary that folks might find interesting as fun facts. For one, Tim, you created the original Kubernetes logo. 

TIM: I did. It was sort of a joke. We were laughing about, well, if we're going to be a real project, then we have to have a logo, right? Every good project has a logo. And someone, I forget who exactly, suggested a ship's wheel since Kubernetes is a nautical themed joke. 

And I said, oh, that's funny. And I went home that night and I drew it up in Inkscape. And I didn't know how to use Inkscape very well. So I just sort of hacked it together and I was able to figure it out. 

And I brought it in the next day and I was like, what do you guys think of this? And I think it was Joe was like, check it in. It's good. So that was how we ended up with the logo on a lark. 

KASLIN: Nice. 

ANTHONY: Can I ask, did you make the GKE logo as well? 

TIM: I did not make the GKE logo. We talked a lot about it. There's a distinct style to the Google Cloud family of logos. And the idea of how to do it properly eluded me. I did do a Kubernetes seven-sided wheel in the GCP six-sided background with the shadow cast on it, but they didn't want to do that because trademark and stuff. 

ANTHONY: And now we don't-- I think we officially don't have the hexagons anymore, though. I think their life span continues on on the internet. 

TIM: Yeah, well, they'll always be in my laptop. 

ANTHONY: Another comment from the documentary that I wanted to surface and see how it related to GKE is that-- I think it was Joe who made some comments about staffing early on from the Google side and getting folks to work on Kubernetes. And so I'm curious what your perspective on that was as far as getting the initial set of folks to work on Kubernetes, but also GKE and providing this managed service to satisfy that one tail of owning the system. 

TIM: Yeah. We started early on. It was a small group of people, like less than a half dozen people, who were throwing together this demo that the folks had put together called Seven and some of the ideas that we'd thrown together that we were calling big box and trying to glue these ideas together of managed service plus open source plus the concepts that we were exploring. 

And it became pretty clear that we alone couldn't pull this off. And fortunately, we had great leadership who really believed in us and said, OK, great, well, these people are available now. Why don't you pick from the team who would you like to go work on this? And if you can convince them, then you can have them. 

And so we picked up a few of the very key contributors in that first wave, which really helped shape the product that we would eventually take to DockerCon. And that's when the Red Hat folks and all signed up and the snowball really started rolling. 

KASLIN: And you mentioned the project being called Seven in there. And I've heard that it was a reference to Star Trek Seven of Nine. Is that right? 

TIM: That's right. Since Borg is, obviously, a Star Trek reference, Seven of Nine was the Borg that was a little less intimidating. 

KASLIN: I always love that fun fact. 

[LAUGHS] 

TIM: And that's why the Kubernetes logo has seven sides. 

KASLIN: Make sense. And one thing that I found really interesting when I came to Google and started working on GKE many years after all of this-- I was already convinced that GKE was a really exciting project, and it was well-established and all that. And I was getting familiar with the open source project of Kubernetes as well. 

And something that I found really surprising is that a lot of engineers at Google work on the open source Kubernetes project, especially a lot of the engineers that work on GKE as well. Could you talk a little bit about the relationship between Google Engineering and GKE and open source Kubernetes? 

TIM: Yeah. It's really important that the people who run GKE also understand Kubernetes very deeply. And so, we have a lot of overlap between the people who work on Kubernetes in the upstream open source project and the people who build and run our GKE product. 

Initially, it was two very different teams. And it turns out that doesn't work very well because the people who end up writing the code aren't responsible for dealing with their own issues. And so, increasingly, it's the same group of people, but we are spread across a couple of different locations and we have different areas of expertise. 

And the contributions, over time, have shifted from one team to another team. Some people go up and some people go down. But Google, overall, is still the largest contributor to the Kubernetes project by far. And we take a lot of pride in our role as stewards of the project. 

KASLIN: And one thing in this space that I've noticed is a lot of the features that I see coming out in GKE are often backed by changes that are happening in open source Kubernetes. So there's this relationship, I guess, between GKE's success and its continued improvement and the continued improvement of the open source project as well, right? 

TIM: Absolutely. We don't want Kubernetes to be a thin layer that everybody then builds different products on top of. We really want the idea of Kubernetes to be visible and important throughout the entire stack. 

One of the main things that we hear from customers when they use Kubernetes is they love the idea that it's portable, that they can take the workloads that they've described in the Kubernetes APIs and bring them to other environments and get, for the most part, the same results. 

So it's really important that we work with the upstream project first to define new capabilities as much as we can so that it's not just Google who gets the benefit of it; it's actually everybody. And whether that's people who are running GKE on Google Cloud or running Anthos on their premises or running on a different Cloud provider's Kubernetes implementation, we want everybody to get the same benefit from those experiences. 

Now, certainly, there's some work that we do that is all about the integration with Google, and it doesn't really make a whole lot of sense for us to try to make that portable. The upstream project isn't interested in that work because it's so specific to one provider. So we're always debating, for every new idea, is this an upstream thing or is this a Google thing? 

KASLIN: There's kind of this virtuous cycle thing going on here where Google is running, as we were talking about earlier, the harder parts of running a Kubernetes system for a lot of different users today. And so, we get so much feedback from all of those different ways that companies are using Kubernetes. And then, we're able to take that feedback and turn it into useful things for the open source project for everybody to make use of, which is pretty cool. 

TIM: Yeah, absolutely. Once you get the law of large numbers moving, you can see which things are really issues, which things are niche issues. And it helps us to focus on the things that are hurting the most people the most frequently. 

ANTHONY: I think there is an interesting point there, too, that-- bringing it back to how GKE is now seven years old, I'm thinking about some of the things that I see in my usage of GKE recently. I think, recently, folks have had to migrate to a GKE off plug-in, and that's breaking out into the way we want to do Kubernetes development for GCP-specific stuff. Because it used to be in tree. Is that right? 

TIM: Yeah. In the early days, Kubernetes was a monolith, and we just built everything that we needed into the code base and it was OK. And in fact, there are still some vestigial things that are littered around the code base of, if this is Google, then do it that way. Otherwise, do it this other way. 

And we're committed to weeding those out now. Increasingly, all the things that were built in switch-on-vendor sorts of logic are being pluginized and kicked either out of the tree or out of the project entirely. So storage plug-ins is one great example. We define the CSI standard. And we're now getting storage vendors to implement their own plug-ins on their own timelines. 

The container runtime interface, CRI, means we can have multiple implementations of container systems like Docker or container D or CRI-O. And you can, again, see this with the off plugins. Any place there is code inside Kubernetes that says, if I'm on Google, is a candidate to be kicked out. 

ANTHONY: I love it. And I also do love the idea that both you and Kaslin have talked about in just that we want to standardize the way folks interact with Kubernetes and ensure that anything that's specific to Google isn't the special case, right? So I think of, like, the Gateway API and how there's a core standard for how folks can expose their workloads by using that. 

But then, also, there's the ability, through those resources, to expose things that are specific to Google, like our multi-cluster Gateway or using our Google Cloud Load Balancer at that level. So it's definitely reminding me of a lot of different things that we're seeing as of late in the community. 

TIM: For sure. One of the things that's interesting-- seven years is a long time in software land. The extension mechanisms that we have today didn't all exist six, seven years ago, or even three years ago, some of them. And so, over time, the way that we define these plugins and these mechanisms has evolved quite a lot. 

And so Gateway, as a great example, is defined entirely in terms of custom resources and extension points on those custom resources. And you look at some of the older APIs. Like, the earliest one is storage plugins-- the first generation of storage plugins. We didn't have custom resources at the time. 

And so the APIs are defined differently. And so, today, we always have this discussion whenever there's a new concept for pluginization or candidate for pluginization. We have to think about, which examples should they follow? Which one is the best mapping for this new idea? 

KASLIN: I'm pretty sure just a couple of months ago I saw someone post yet another of those job descriptions where they ask for more experience in Kubernetes than the project has actually existed, which is really funny in comparison and contrasting with this real story of GKE and Kubernetes in general where it's been around for a good number of years now. And it's starting to get to the point where it has all of these maturity considerations where you have to consider how the project evolves, even though it's so large and being used by so many different companies. You have to be really careful about making those decisions-- more so, perhaps, than in the early days. 

[LAUGHS] 

TIM: It's interesting that you bring that up because we're about to cut the Kubernetes 1.25 release today. 

KASLIN: Yay. 

TIM: So that's 26 releases back to back to back. And as we cut the release, we start thinking about the next one and what's going to be in the next release. And so we've got a lot of ideas in flight about doing things that would make the system easier to use or more obvious. 

And we realize just how careful we have to be now, because the sorts of changes that we could make in 1.2 and 1.3 are very different than the changes we can make in 1.22 or 25. And it takes more time, more discussion, more thought to be able to make these changes in a way that doesn't impact people, that doesn't break APIs. 

We're pretty fanatical about not breaking the APIs. And when we do it, it's almost always a mistake. And so I was talking to some contributors just this morning about, yes, I understand how painful and tedious making this seemingly really small change-- it's like a two-line code change that will probably take two years to actually deploy. 

KASLIN: And that's an interesting point on the relationship between the managed service, GKE, and the open source project Kubernetes, because both of them are moving forward at the same time. And like you said, there's pieces that go directly into the open source project, and there's pieces that stay completely in the realm of Google Cloud and GKE. 

But they still-- at least the open source changes do affect GKE as well. And so, when these breaking changes come, we also have to be considerate in the managed service of how that affects the users. And so, there's this whole wave of the way that it affects end users when something changes in Kubernetes these days. 

TIM: If we just worked on the open source project, I think we'd be a lot more cavalier about what the impact of these breaking changes is. But since those customers have my email address and they know how to get a hold of our team and our team knows how to call me, I think it really reinforces the idea that breaking changes are not OK. 

And when we do make what are perceived as breaking changes, we've done so very carefully and we've defined how and when those sorts of changes are allowed to happen. 

ANTHONY: Tim, I'll take some responsibility of dragging you into some of those customer meetings. 

[LAUGHS] 

TIM: The customer meetings are the best part of my week. I love it. 

ANTHONY: And if anything, I think that the fact that there's more of them and the fact that we take this consideration with new features is a testament to the maturity and just the adoption that's happened over the past seven years. 

TIM: There is not a market segment that Kubernetes hasn't found its way into, whether that's retail or digital natives or spaceships. 

ANTHONY: Yeah, there's a quote-- I think you had it on the Kubernetes documentary talking about how, in the early days, you couldn't go on Hacker News or the orange site without seeing Docker being discussed in those early days. And I think that Kubernetes has become as ubiquitous and present in our industry and in that space. So yeah, crossing all those different verticals, it's very impressive. 

TIM: One of the things I talk to people about a lot is, Kubernetes gets a lot of hate. People really hate it. And to borrow a phrase, the only kind of systems out there are the ones that people complain about and the ones that nobody uses. So as long as people keep complaining about Kubernetes, then it means they're using it. It means it's important and they care about it. 

So I'm always listening. I'm always looking for opportunities for us to do better. But there's never going to be a time when everybody is happy. 

ANTHONY: I will say that pivoting into some of the things I love about GKE. I think a lot of folks will talk about the complexity of Kubernetes. And I get it. There's a learning curve, there's an API, there's sets of resources. With my career personally, one of the things that was really helpful about it is that it wasn't just learning about containers and how to run them, but also how to integrate all the various pieces of infrastructure you might need for a workload to run. 

Sure, you could package up your application in a container. But you also might need load balancing. You need to configure networking. You might need access to persistent storage. And so, inherently, one of the things that I love about Kubernetes is how it just abstracts away a lot of complex infrastructure, whether that's Cloud infrastructure, virtualized infrastructure on premises. 

And so I wanted to ask you some of the favorite or unique features you think that GKE specifically has let Kubernetes users take advantage of in GCP. 

TIM: Early on in the Kubernetes and GKE process, we spent time figuring out, how can we implement what we wanted out of the networking stack? And now, I should preface this with I am not a networking person by background. Everything I know about networking I've learned through Kubernetes. 

So we knew how we wanted it to feel. And that came a little bit from my experiences on Borg and watching people struggle with some of the aspects of Borg. And so we really wanted this idea of an IP per pod, IP or per workload. It would make everything easier if we could just do that. 

And then it was, well, how do we do that? How can we achieve it? And I went and I talked to some of the GCP networking people. Now, this is 2013, 2014, early, right? And I think GCE was just freshly GA at the time. And the networking people said, you can't. You're crazy. Don't do it this way, right? 

[LAUGHS] 

One person in the networking stack said, you should look at this API. Try this. And it was the routing API. And I went there, and it turns out that if you hit a screw hard enough with a hammer you can, in fact, screw it in. So we used that. And it didn't scale very far. 

And so, we went back to the networking team and we said, hey, this is really cool and this is what we're doing. And they said, you're crazy. That's not what you're supposed to do with this. Yeah, but it works. 

[LAUGHS] 

And could you scale it up a little bit more, right? 50 isn't going to cut it. Can we get to 100? How about 500? And they were great and they said, that's impossible. We'll get right on it. And before we knew it, we were scaling from 50 routes to 500 routes to 5,000 routes. 

We've changed the mechanism since then, but I think that was a fun experience with people who saw what we were doing and sort of got it and were helpful and willing to see a different perspective on how things were being used. 

Now, we have an entirely native mechanism where the GCP network actually understands the concept of allocating whole ranges to VMs and to nodes, which gives us a much more integrated story. And then, lets us build things like the VPC native load balancing. 

So our load balancers-- our HTTP load balancers-- can speak directly to pods without having to do some of the extra jumps that we had to do back in the early days. And so I think it's been a lot of fun using Kubernetes as a catalyst for driving scale and functional changes across GCP. 

ANTHONY: There's definitely a chain of learning there. So you're learning networking from developing Kubernetes. And I remember one of the-- I think it was 2017 next where you gave a talk on the ins and outs of GKE networking where I learned a ton. 

And I still remember those days where there's one route per node. Is that right? Like you got a slash 24. 

TIM: That's right. 

ANTHONY: And so it's pretty amazing to see how far it's come with VPC native clusters obviously changing that model. Would it be fair to say that some of what you all have worked in Kubernetes and GKE has actually driven some of the networking roadmap and development at GCP? Or it doesn't have to be networking, but just development of GCP features as a whole. 

TIM: Absolutely. I mean, we work very closely with Cloud networking team. In fact, the GKE networking team is embedded within Cloud networking team from an organizational point of view. And they get the really close relationship with the rest of Cloud networking and the processes around Cloud networking, but their goal is to drive Kubernetes and figure out how to make Kubernetes better both in the upstream and in the Google implementations. 

And they also work on our off-GCP products, like Anthos, and figure out how to blend all of those universes together to drive those capabilities. And I think it's been incredibly positive as a relationship. 

KASLIN: That's so awesome to hear about. And one thing I want to come back to that were just saying is, I found it really interesting that you say that you're not really a networking person from your background when I associate a lot of your work with the networking. So that makes me feel like there's hope for me yet. I can still learn this networking stuff. 

[LAUGHS] 

TIM: I'm really not a networking person. When you put me in a conversation with a real networking person, you can tell. 

[LAUGHS] 

But I can fake it well enough and I know enough about it now that I can have reasonable conversations for the purposes that I need to have them. And then, we have experts on the team who can really come in and bring the experience that I don't have. 

A lot of what makes a networking person a networking person is experience and knowing what's been done before versus me charging in like a bull in a china shop and knocking things down and asserting that this is how it should work without having any of that experience. 

KASLIN: I think those are often the best people to learn from-- those who are learning right along with you, in some respects. 

[LAUGHS] 

TIM: That's right. I love the opportunity to go, I don't know what that is. Let me go read about it. 

KASLIN: Awesome. So we've covered a lot today about how Kubernetes has developed and matured and how GKE has done the same along the last seven years. I'm wondering if there's anything else, in particular, you want to point out that's coming up in the roadmap for GKE or open source Kubernetes that you're particularly excited about? 

TIM: On the GKE side, the thing that I've been paying the most attention to recently is multi-cluster and how people are using multiple clusters to solve real problems that single clusters don't solve. And that ranges from things like disaster recovery to global availability to even the idea of, I want to upgrade my cluster, but I don't trust the upgrade procedure. Or I want to take more control over the upgrades, right? 

To a first approximation, everybody is doing multi-cluster, or they will have some problem eventually that boils down to a multi-cluster problem. And so, I've spent a lot of time in the last year or a year and a half thinking about talking to people about how they perceive these problems and how they'd like them to be solved and working with the Kubernetes community upstream to define some basic concepts and primitives so that we can help people through the specific problems that they're experiencing with multi-cluster. 

And so I think the thing that I'm most excited about on GKE is just continuing my work on that. We have an awesome team of people who are working on this. We've got some cool new stuff cooking right now. I saw some demos of some new concepts that blew me away. 

And so, like a snowball, once it got rolling, people are doing their own thing with it, and I'm excited about that. 

ANTHONY: And I'd say, even at the time that this episode airs, there's already a lot of awesome multi-cluster features in Google or GCP that folks could check out. Thinking of some of the problems that you mentioned, there's multi-cluster gateway. There's our global load balancer that integrates with GKE. I think multi-cluster services is another one if you're having communication across clusters. So we'll make sure to include some of the links and the description for that. But awesome to hear that there's even more to come. 

TIM: Yeah, I've got a few tricks up my sleeve still. 

[LAUGHS] 

ANTHONY: I bet you do. 

KASLIN: I actually gave a keynote about multi-cluster at KubeCon in 2021. So I started looking into a lot of this space as well. And it's definitely something that a lot of folks in the community are really excited about right now. And there's just so much going on with multi-cluster development right now that's so interesting. So we'll have to keep an eye out. 

TIM: I think one of the challenging things with a space as big as multi-cluster is figuring out when and where we should drive for normalized standard solutions, and when we should let the ecosystem thrive and explore and do their own thing. 

And so, we're trying to be really careful and let the projects that are out there in the ecosystem do their thing and explore and be creative and then bring it back to the project when it makes sense for us to define standard ways of doing things. 

KASLIN: And speaking of the ecosystem and the community, KubeCon North America is coming up again very soon. North America 2022 is in October. Is there anything in particular you're looking forward to at KubeCon? 

TIM: I love KubeCon. I mean, KubeCon is 10,000 of my best friends. And so I'm very excited to just go and meet with people. The last few KubeCons I've been to, I haven't even gone to any talks, or not very many, anyway, because I spend my time in the halls talking with folks, whether that's Google customers or community partners or people at other companies or developers. 

This is why I go. I go to talk to people. So anybody who's listening, if you go to KubeCon and you see me in the halls, stop and say hi and let me know what's on your mind. 

KASLIN: Yeah, definitely stop by and say hi to all the Google folks that will be there. There's going to be a whole bunch of folks I know. And we'll be excited to see you there. 

ANTHONY: Well, Tim, I just want to thank you for sharing the stories and the experience that you have brought to GKE's lifespan to this point. I have learned a lot just from listening to you go through some of the prompts that Kaslin and I had. So I really appreciate your time. 

TIM: For sure. My pleasure. 

KASLIN: Yeah, thanks so much. 

ANTHONY: All right, that was an incredible conversation. And I might have to reconsider my status of attendance for KubeCon this October because I love the anecdotes and throwbacks that Tim had to share. Just hearing how the Kubernetes team at Google formed the GKE folks, how getting things right just as far as the team structure, and also, how we view and develop features took time and also just acquiring more users and better understanding how every single change would affect them. 

And also, being a former customer person myself, I love that customer meetings were Tim's favorite part of the week. That was awesome. And I also love that multi-cluster is top of mind for Tim, right? Because I think he made an excellent point that most folks are facing multi-cluster. 

And even if you run one single cluster in production, you might have a development cluster. You might have a staging cluster, a QA cluster. You might have ephemeral clusters where you run tests. So I mean, really, everyone is practicing multi-cluster in some form. 

And so to hear that that's very interesting and very important to Tim is awesome. I myself own a lot of Kubernetes stickers, clothing, random swag. So I do hope knowing now that Tim designed the logo that he gets a cut for all of that. 

[LAUGHS] 

KASLIN: You all can't see it out there in podcast land, but I'm actually wearing a Kubernetes logo t-shirt right now. 

ANTHONY: That's right. 

KASLIN: Thank you, Tim. 

[LAUGHS] 

ANTHONY: So, Kaslin, what did you love about our conversation with Tim? 

KASLIN: Tim is such a good storyteller. He's such a multifaceted professional. We were talking about his expertise with networking and how he's learned so much over time. He's very deeply involved in the technical aspects of Kubernetes, but he's also such a great, like I said, storyteller. He's a good teacher. 

He can explain those concepts in ways that are really a lot easier to pick up. And designing the logo clearly has a lot of skills that are really awesome. 

ANTHONY: I love it. So, Kaslin, what are you working on as of late? I'm sure there's a ton of stuff around the upcoming conferences like Next and KubeCon. What would you like to share with the people? 

KASLIN: Exactly. I'm pretty focused on both Google Cloud Next, which is coming up in October, and KubeCon North America, which is coming up in October. 

[LAUGHS] 

So October is going to be a big month. So next is October 11th through 13th. And KubeCon North America, I believe, is October 24th through the 28th in Detroit. Google Cloud Next, of course, we're going to have all sorts of really awesome developer conversations going on. I'm actually going to be leading a session there about application development and Kubernetes. If you're interested in how adopting Kubernetes in your organization might affect your application development teams, that's what I'm going to be talking about. 

Be sure to keep an eye out for the schedule for Google Cloud Next, which should be out in the next few weeks. And there will be lots of really cool stuff there. And of course, as we were talking about in the conversation with Tim, KubeCon North America is such a fun event. I love that he said that it's just 10,000 of his closest friends getting together. 

I absolutely agree with that. I think it's going to be higher more than 10,000 for KubeCon North America. I'm not 100% sure on that, but it's going to be pretty big. And I know I'm working with a lot of the folks here at Google who are going to be on site there at KubeCon. A lot of the folks are giving talks. A lot of folks are just going to be around to talk to people who want to talk about Google Cloud stuff in Kubernetes. 

And I also work in the open source Kubernetes project as well. So I'll get to meet up with some of the folks I work with in open source in the contributor experience special interest group. And I'll be doing a session about that special interest group as well. So I've got a lot of stuff that I'm looking forward to at KubeCon and at Google Cloud Next. 

ANTHONY: Yes, I do love both of these events. I think even if you're not able to make it in real time for these events, the amount of knowledge that is shared and dispersed throughout all the folks that are giving talks and leading sessions, including the sessions that Kaslin leads, I mean, are just incredible. So definitely encourage you to stay tuned. 

And Kaslin, I hope you have a very relaxing September to prepare for-- 

[LAUGHS] 

KASLIN: Thanks. 

ANTHONY: For that October of yours. 

KASLIN: It's going to be rough. 

[LAUGHS] 

ANTHONY: What am I working on lately? Thanks. 

KASLIN: What are you working on lately? 

[LAUGHS] 

ANTHONY: I am working on our series, GKE Essentials. So I just have recently dug into some of the work for folks that are trying to stamp out multi-cluster in a consistent way, right? So if we think of Kubernetes clusters, they are, in part, infrastructure. As Tim talked about, they are a tale in two parts. 

And then, there's also making sure that they're consistent from things at the Kubernetes level that we want in every single cluster. So we can think of network policies or cluster roles and things like that. So in that episode, we'll have a chance to dive into what tools you can use for each of those tales or sides of Kubernetes and GKE. So excited to put that one out. 

And then, I'm also just preparing to go out on leave-- on personal leave in October. So I think that it is important to always take a step back from-- as much as I love GKE and Kubernetes and all things Google Cloud, I think it is important that we all think about how we take care of ourselves and those around us. So I encourage you to take a break if you have not recently. 

Nice little non-Google Cloud reminder on the Google Cloud Podcast. 

[LAUGHS] 

KASLIN: Always important for whatever you're doing. And I know you mentioned GKE Essentials. You also mentioned the blog post that you had out recently. You've been doing so much work lately. I'm really excited for you to have a little break. 

[LAUGHS] 

ANTHONY: I appreciate that, Kaslin, truly. At any rate, I hope you enjoyed the conversation with Tim today. I know I did and I know Kaslin did. So yeah, we appreciate your time, as always. So thank you for listening and we'll see you all next week on the GCP podcast. 

KASLIN: Thank you so much. See you next week. 

[MUSIC PLAYING]