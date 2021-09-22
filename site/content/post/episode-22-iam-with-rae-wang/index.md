+++
audioDuration = "00:33:39"
audioFile = "Google.Cloud.Platform.Podcast.Episode.22.mp3"
audioSize = 48483940
categories = ["IAM", "Security", "Authentication"]
date = "2016-04-20T01:07:49Z"
description = "In the twenty second episode of this podcast, your hosts Francesc and Mark interview Rae Wang, a Product Manager at Google, about IAM on the Google Cloud."
draft = false
episodeNumber = 22
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "IAM with Rae Wang"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/XxX2LUVeDZT"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4fo5p2/episode_22_iam_with_rae_wang/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

In the twenty second episode of this podcast, your hosts
[Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic) interview
[Rae Wang](https://www.linkedin.com/in/raewang),
a Product Manager at Google, about IAM on the Google Cloud.
<!--more-->

##### About Rae

Rae is a product manager at Google and looks after IAM
(Identity and Access Management) on GCP. She has been
at Google for 3 years and is based in the Seattle office.
Before Google she worked in other software companies for
over a decade. 

##### Cool thing of the week

Bonus interview with [Brendan Burns](https://twitter.com/brendandburns),
lead engineer on Kubernetes: Google's open source cluster manager
for containers.

- Latte vs. Kubernetes setup - which is faster? [YouTube](https://www.youtube.com/watch?v=7vZ9dRKRMyc)
- Kubernetes Config Maps [docs](http://kubernetes.io/docs/user-guide/configmap/)
- Adding custom resources to the Kubernetes API server [docs](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/)
- Kubernetes Cluster Federation (a.k.a. "Ubernetes") [docs](https://github.com/kubernetes/kubernetes/blob/8813c955182e3c9daae68a8257365e02cd871c65/release-0.19.0/docs/proposals/federation.md)
- Scaling neural network image classification using Kubernetes with TensorFlow Serving [docs](http://blog.kubernetes.io/2016/03/scaling-neural-network-image-classification-using-Kubernetes-with-TensorFlow-Serving.html)
- Episode #16, a Product Manager at Google that works amongh other projects on IAM [GCPPodcast](https://www.gcppodcast.com/post/episode-16-kubernetes-1-dot-2-with-kelsey-hightower/)

##### Interviews

- Google Cloud Identity & Access Management [docs](https://cloud.google.com/iam/)
- GCPNext - Identity and Access Management on Google Cloud [YouTube](https://www.youtube.com/watch?v=twC2viX7u6s)
- Google Cloud Auth Guide [guide](https://cloud.google.com/docs/authentication)
- Connecting to Other Google Cloud Services [guide](https://cloud.google.com/compute/docs/authentication)
- Granting Access with IAM Roles [guide](https://cloud.google.com/compute/docs/access/iam)
- OAuth 2.0 Service Accounts [docs](https://developers.google.com/identity/protocols/OAuth2ServiceAccount)

##### Question of the week

- Google Cloud CDN [docs](https://cloud.google.com/cdn/docs)
- Google Container Engine [docs](https://cloud.google.com/container-engine/)

{{< transcript "FRANCESC: Hi, and welcome to episode number 22 of the Weekly Google Cloud Podcast. I'm Francesc Campoy, and I'm here with my colleague, Mark Mandel. Hey, Mark." >}}
MARK: Hey, Francesc. How you doing today? 
FRANCESC: Pretty good. Very, very excited about our interviews with and "s." 
MARK: Interviews with an "s." Very sneaky. We're sneaking in an extra interview. 
FRANCESC: Extra interview today. So we're gonna have for our "Cool thing of the Week," it's gonna be an interview, and then our main content is gonna be an interview, and then for the "Question of the Week," it will not be an interview. 
MARK: No. It won't be an interview. No, no. No, no, no.
FRANCESC: Yeah, so we're gonna have for our main content of the week, we're gonna be talking with Rae Wang. 
MARK: Yep, yep. We're gonna talk to her about IAM. 
FRANCESC: Yep. And then at the end, we're gonna be talking about something quite cool which is about--How do you pronounce it? Caching? Caching?
MARK: Caching. 
FRANCESC: Yeah, that's wrong. "Caching." So yeah, we're gonna be talking about caching and what you can do. There's some cool stuff coming on, so--But before that, we have our "Cool Thing of the Week."
MARK: Yeah. We're gonna be talking to Brendan Burns, lead engineer on the Kubernetes Project. We met up with him at GCP Next and had a really great conversation with him.
FRANCESC: Yeah, he gave--I think he gave a talk. No, he did not give a talk, but he was around, and we decided to interview him, and we have it. It's a pretty short interview, so we decided that it would be a very "Cool Thing of the Week."
MARK: Definitely. Let's get to it. 
FRANCESC: So hi, Brendan. Brendan Burns, how are you doing? 
BRENDAN: Hi. Doing great. Glad you're here. 
FRANCESC: So for those that don't know who Brendan Burns is, he's the famous person that made a video about what is faster to start GKE cluster or to make a latte. 
BRENDAN: That's true, actually, and it's gotten faster, so I'm gonna have to up my latte making game I think. 
FRANCESC: Yeah, that is pretty awesome. So tell us a little bit about yourself. Who are you? What do you do at Google? 
BRENDAN: Sure. So I've done a lot of things at Google. I've been at Google almost eight years, but in the Google Cloud what I've done recently is I have, with a couple of cocollaborators a couple of years ago had this crazy idea that maybe we should open source some of our ideas in cluster management. The Borg software that runs every thing from search to Gmail and every thing, and actually all of the VMs and every thing that the Google Cloud runs, we should build out an open sourced version of that software, and we started doing that. It came out a little under two years ago. It was a project called "Ubernetes," and it's grown from there, and so we just keep trying to push that forward and help everybody sort of compute like Google does. Whether they're actually--Honestly, whether they're on the Google Cloud or not, so really believe that we want it to go, you know, in to people's data centers as well as being available on the Google Cloud and wherever they happen to be running their compute. 
FRANCESC: Yeah. We actually had some cool demos about it today. We interviewed Kelsey Hightower two weeks ago or so, about Kubernetes 1.2. Can you tell us a little bit about what's your favorite feature from Kubernetes 1.2 if you had to choose one?
BRENDAN: If I had to choose one--I mean, it's like your children. You're not supposed to choose. You're not supposed to choose your favorite children, right? 
FRANCESC: They're not listening now. 
BRENDAN: Oh, they're not listening? All right. I don't know. The features have ears. What is my favorite feature? Well, I mean, I'm really happy to see things, a couple of things, go GA, right? So I'm really happy to see the work on things like auto scaling and stuff like that to get to a place where it's done, right? I mean,--Well, maybe not--Nothing's actually done, but to the point where we really say "This is reliable. This is production grade. You can go out and do it." You know, I think it's important to introduce new features. You know, I'm excited to see things like the daemon set and the config map. I'll talk a little bit more about those. It's important to introduce new features, but it's also important to make sure that things move through that, like, beta production ready, ready out there and people can use it kind of cycle, 'cause it shows that we're not just sort of throwing new ideas out there. We're actually finishing off the ideas that we have. So I'm really excited to see that happen. I'm actually really excited--Config map is one of those things I'm really excited about. Config is a big important problem for people doing distributed systems, and so I'm excited to see that happen. And I'm also excited because, you know, it's an example of something that was largely built by people outside of Google, right, and so that was always the promise of open source was the community and community development and engaging with people who are using it, and so it's really nice to see that as well, right? It's a great feature for everybody, but it's a great feature that Google didn't build. 
MARK: Excellent. 
FRANCESC: Very cool. 
MARK: Of course, now I need to ask, what exciting things do you think you're gonna see in the future?
BRENDAN: So what I was just working on on the plane on the way down, which is most of the way in, but didn't quite make it into 1.2, is the idea of third-party extensions to the API, and so what this basically allows you to do with your cluster is introduce your own API types, right? So you can--Without recompiling it, without doing anything, you can walk up to the cluster, and you can say, "I have this new great object called a "Fu," and I want to--You know, I want to start managing a fu. I don't really want to worry about storage. I don't want to really worry about optimistic concurrency and if multiple people update some thing at the same time, I don't want to have to do any of that logic, but I have this new kind of fu object that I want to manage, and so you create a resource--you know, a fu resource, on the server, and suddenly you have this new resource type that you can play around with. It works with all our command line tooling, that works with all our client libraries. I'm pretty excited about that because I think that's gonna unlock people building Kubernetes plugins, right? We're in a world right now where if you as a vendor, or you as a third-party, or even inside of Google, if you want to deploy some thing inside a Kubernetes, you have to land it in our code base. You have to get it committed. You have to go through our code review process. You have to, you know, have--Like, you have to do all of this stuff, and then we kind of have to maintain it, and so it's awkward on both sides, right? It's awkward for the owner who really--They want to own that thing independently, and it's awkward for us because we have to--You know, when we change some thing, we've got to fix your code even though we might not actually understand your code that well. 
FRANCESC: Yeah.
BRENDAN: And so I'm really excited 'cause I think it's gonna enable a lot more rapid development and a lot more distribution of ownership that's gonna make the project even more scalable than it already is, so that's probably the thing that I'm most excited about for 1.3. Kubernetes is another thing that I think is pretty awesome. There's gonna be some talk and discussion about that here as well, I think, and that's basically enabling you to manage multiple clusters. It's sort of taking a global view on your cluster footprint instead of an individual data center view, so I'm pretty excited about that as well. 
MARK: No, I've definitely been speaking to a lot of people who want to have that cross region or cross Cloud, or (inaudible), like, different data center type management solutions, and they're pretty excited about Kubernetes.
BRENDAN: Yeah, that's one of those ones where I was like, "Can you at least let us get done with--" I mean, it's like, we started, and we were like, "Here, it's this awesome thing," and then everyone's like, "But what if I have two?" And we're like, "We're still waiting for the thing." You know, people assume once it's done, like, you're ready to--They want to go to the next thing. So it's great to see that starting to happen as well. 
MARK: Excellent. 
BRENDAN: Yeah, and again, that's a great example. You know, Google's doing a lot of work there. (Quinn Hule) is doing a lot of work there, but Huawei, the Chinese telecom company's also heavily involved in that process, so again, it's really nice to see that community coming together. 
FRANCESC: Very nice. So we know you're here to speak at GCP Next, so what are you gonna be talking about? 
BRENDAN: You know, we're mostly gonna be talking about 1.2, so--
FRANCESC: 1.2 (inaudible)?
BRENDAN: Yeah, so like, some people are at KubeCon, but I think KubeCon is kind of a little bit more--First of all, it was in Europe, and so I actually didn't get to travel 'cause family and all that. And you know, I think that's more of a Kubernetes audience and not necessarily a full general Cloud audience, and so I think here we're really gonna try and highlight, you know, Kubernetes for people who haven't seen it before, Container Engine for people who haven't seen it before. Not too much on that 'cause I think we've mostly gone over that hurdle. 
FRANCESC: Yeah.
BRENDAN: But then a lot about, like, what is the stuff that we've introduced? How does it make building distributed systems easier 'cause at the end of the day, that's what we're really about. It's like, let's build reliable distributed systems in an easier way. 
FRANCESC: Yeah, that sounds like a great talk. Were you here on time to watch--to follow the keynote?
BRENDAN: I followed the keynote on Twitter on the plane on the way down, and I didn't actually get a chance to be here. 
FRANCESC: What was your favorite announcement? What did you get the most excited about? 
BRENDAN: Well, I mean, I'm pretty excited to see that the dem of them sort of to ++ the demo I did. So I did this demo at KubeCon in December, right? I did this one million QPS demo, so for Kelsey and other folks to take that and, like, really take it to the next level, you know, that was really awesome. It's a little bit self-centered I guess, but you know, I thought it was--
MARK: That's okay.
FRANCESC: It was an awesome demo.
BRENDAN: I thought that was pretty awesome, so I'm hoping that generates some buzz. Not a demo that was on the stage this morning, but another announcement that went out this morning that I thought was pretty awesome as well was Tensor Flow which is the open source machine learning algorithm that we've--Well, I shouldn't say "we," but the folks at Google.--have released. They just put out instructions for running a distributed version of that on top of Kubernetes, so doing image recognition all the way out in the open. You don't need any--You know, you can do it on your own stack of computers, so that went out on the Kubernetes blog post this morning. I was pretty excited to see that land as well. 
FRANCESC: I didn't even know about that. We'll definitely put that on our show notes. 
BRENDAN: Yeah. No, it's pretty awesome. I'm really--I'm definitely excited to see it. They do some image recognition stuff that's pretty cool, so kudos to those guys. 
MARK: Have you had a chance to kind of wander around and have a play with any of the playground things here at the event?
BRENDAN: No, I'm not--I just came in the door, so I'm gonna--
FRANCESC: We just got here on time. 
BRENDAN: I know. You were like--I walked right by, and you grabbed me. So no, I'm gonna take a chance to look. I saw some old video games over there. I might have to go check out the Tetris, the Tetris thing there from the--
FRANCESC: It is incredibly lots of fun actually. 
BRENDAN: Oh, I would imagine. 
FRANCESC: Yeah. 
BRENDAN: No, it's been a while since I played Tetris. I see Kelsey doing that demo, but it's been a while since I've played Tetris, so I'm excited to give that a whirl, so--
FRANCESC: Very good. Well, thanks so much for talking to us. 
BRENDAN: No problem at all, and thanks for having me. See you later. 
MARK: Thanks a lot. 
BRENDAN: Bye. 
MARK: So that was a great conversation that we had with Brendan GCP Next. I actually really enjoy going back to listen to the highlights in some interviews we have from GCP Next. It was a really great event. 
FRANCESC: Yeah, we still have a bunch of them, so maybe in next episodes we'll add some.
MARK: Keep sliding them in. 
FRANCESC: We sneak some of those in to (inaudible) there. 
MARK: Definitely. 
FRANCESC: Yeah, actually before we go with the main content, there's also--If you thought that this interview was interesting, you should definitely check our episode number 16 that we had with Kelsey Hightower, also on the topic of Kubernetes 1.2 and all the things that we released, so make sure you check it out. 
MARK: Definitely. That was also a really interesting conversation. 
FRANCESC: So why don't we go to our main content of the week. I just renamed that section right now. So we're gonna be talking to Rae Wang. 
MARK: Excellent. Why don't we have a chat with her? Today we are joined by Rae Wang to talk to us about IAM. How you doing today, Rae? 
RAE: I'm doing great. Thank you. 
FRANCESC: So why don't you tell us a little bit about yourself first?
RAE: Okay. Hi, I'm Rae. I'm a product manager working on Google Cloud. I look after the IAM part of GCP. I'm based in the Google Seattle office, and helping at Google for three years. Before that I worked in other software companies for over a decade. 
FRANCESC: Very cool. And could you tell us a little bit about what is exactly IAM, you said?
RAE: Yes. IAM. It's three letters. It stands for "Identity and Access Management." Well, if you're a security guru, you might say it makes authentication and authorization. What it basically is is this two parts, the "I" part and the "AM" part. The "I" part also is--it means authentication. It's how you define the identity of a user or a program and then be able to verify the identity, you know, who you are, who you say you are, when you're trying to access GCP resources. And then you have the "AM" part which is "Access Management," and that's your access policy and its authorization. It's where you define who can do what on which resources. So then when you the two parts together, they safeguard your Google Cloud resources, and they make sure that only people that you want them to access certain part of GCP, can access the specific resources that they allow to access. 
MARK: So you mentioned resources a number of times. What does "resources" mean? Is that just, like, parts of the console, or does that mean actual things that are running in the Cloud? What does that refer to? 
RAE: Well, a resource at the most basic level is a thing you can use in Cloud. For example, a virtual machine is resource, a Cloud storage bucket is a resource, but then we also lift it a little bit higher because just managing the (inaudible) you know, a few thousand VMs gets a little cumbersome, so then we have higher level resources, things like a project in GCP is a resource, and it's basically resource container underneath a project you have your actual resources like VMs and storage and BigQuery, and so on, but we also make the project itself a resource so you can search permissions, policies, on a project level, and then they can be inherited by all the smaller resources underneath a project. 
FRANCESC: Cool. So that sounds a little bit like when we said, like, we had a project editors,  project owners, and project readers. What is the big difference between that, what we used to have, and IAM?
RAE: Yeah, so project Owner and Editor and Viewer's the roles you had in the past, they were kind of IAM version zero, right? They were the most basic set of permissions that you could grant to users to basically share your project with them. Now, the problem that a lot of customers had was that they're not granular enough. So for example, if you want to let your developers just look at the logs in the project so they can do debugging, you have to grant them a project viewer, and by granting them a peer project viewer, they can not only see the logs, but they can also, you know, read all the content of the Datastore and storage bucket, and if you want a real application, the data in these storage systems could be your sensitive (PI) customer data, so it's not really great for all of your developers to have access to that. Or another example we've heard is a customer uses a continuous integration system to deploy updates to their GAE app. And when they do that, they have to give the CI system a project editor role, but by having that role, the CI system could also go (inaudible) get modify other things in their storage bucket or things in compute or in networking. That's not really their intention. So these roles were very first step, kind of step zero, but they were not granular enough for anybody to really secure the resources, and that's why we've had to do, you know, to push out the real IAM system with granular control in the last few weeks. 
MARK: Cool. So it sounds like IAM is particularly focused around security. Are there other reasons you might want to use it outside of security, or is that pretty much the big reason?
RAE: Well, security is a big part of it, certainly securing your resources is the main intention for IAM, but then there's also--For example, if you are using automation to access GCP, if your programmatically creating VMs or manage your storage buckets, you initiate a lot of your program access GCP, and then now you have the problem of, "How do I verify that this program is the one I'm intending to have it access GCP, so another part of IAM what we do is to give you a feature called a "service account," which is a way for you to create a robot account so that your programs can call GCP API. 
FRANCESC: Interesting. So that basically means that now I could have some bots that do something for a specific, and I could say they can only do exactly what they're supposed to do. So if for any reason someone hacked it or whatever, they couldn't do anything extra, right? 
RAE: Yeah, exactly. And then that's actually where, you know, using service accounts is where we see a lot of times people want very, very granular permissions. Your people might, you know, do a broader job function, by their service account can sometimes do very specific things, you know, just to manage storage, just manage a PubSub topic, and that's where we see permissions can get very granular. 
MARK: Excellent. So if I want to get started with IAM, like, how do I--How do I sort of control what resources I can access, you know, if I'm a VM or--Like, how do I do that? Is it, like, a command line interface? Can I do it through the website? Is it programmatic? What sort of tools have I got available to me?
RAE: So we have support for accessing IAM policies through both UI API and CLI, and you set the IAM policy on a resource. We just talked about resource. Could be, you know, in the video thing, like a PubSub topic, or it can be a project, or it can be a (inaudible) project like an organization. So for every resource level that supports resource specific IAM policies, there is a common (matter) API (inaudible) and policy and test permissions as well as a common UI widget to view the permissions and change any of the permissions. So it will look very similar, but it can be done on different resources. 
MARK: So the other thought I just had was around, like, resources. So say I have, like, 1,000 VMs? Am I able to group those together in some way? I don't want to obviously be setting permissions on each one individually. I mean, maybe I could do that programmatically, but is there an easier way? 
RAE: Yeah. Yeah, that's a very good question. So we talked about how we layer the resources. You know, you have your basic VMs, and above that is a project, and that's often where you group the resources that belong to a single service. For example, that's the basic level of grouping, and a project is, you know, there for you to set permission so it can inherit the VMs. It's a mechanism to group our VMs, but it's also kind of the basic unit for you to set on things like billing and quota and a lot of the other control mechanisms. And (inaudible) project, some of our customers--Well, Google itself included--As you're getting to (inaudible) usage over time, you end up with many projects because you've, you know, moved many services on to cloud. Google itself, we've got more than 100,000 projects, and then of course managing them individually is also going to be cumbersome. So we're having to use this higher level resource called the "organization node," and that's the root node for your company, and then all the projects that employees in a company created will belong to the organization node, so you can now manage resources on the org level, on the project level, and then in some cases for certain resources on the individual resource level. All of these level's policies inherited down this resource hierarchy, so for example, if you grant your networking team in your company the network admin role on the organization level, that means that they have the network admin permission on all of the projects and all of the networks in these projects underneath the organization. So you don't have to permission them individually. 
MARK: Cool. So I guess that means--Great. So that means you can really sort of choose which level it is you want to be able to pick out. You can sort of go all the way at the top which is that sort of org hierarchy to, like, say, all the way down to VMs and just levels in between as well. 
RAE: Yeah. Yeah, that's correct. So on the org level, it's typically your, you know, your company central network admin or a central admins, people who are looking after having oversight over the entire company's resources, and on project level it typically is about your team where the people who are taking care of a service together. And then on the individual resource level right now we have the support for, you know, a few PubSub resources, and then GCS BigQuery, but we're gonna add those to things like VMs, so that's where if you share the amount of (inaudible) resource level, often when you, for example, need to let a particular developer debug a particular VM or a particular storage bucket for a little bit, or you're, you know, sharing a storage bucket through an application when you get very, very specific about a particular resource. 
MARK: Cool. So I have to ask the question. I know our users were clamoring for IAM for quite a while, and it took us a while to sort of get it out the door, but we talked about this a bit before this conversation, and I think you had a really good answer for that situation. Would you like to share it? 
RAE: I think the question is "Why did it take so long?" 
MARK: Yeah, pretty much. 
RAE: Well, a system like IAM is something that almost pretty much every single one of our APIs goes through, right? Every time you make an API call to GCP, it does an IAM check. So when we were replacing, you know, the old system to get it to the new platform so we can implement more granular control, we really want to make sure that it doesn't hurt reliability anyway, right? We need to make sure that from behavior point of view, from reliability and latency and every perspective, the new system is a power better than the old system before we replace it. So we had to be very careful about it. It's like replacing your car--you know, your plane's car engine while flying (inaudible) making sure you're plane's still stable and doesn't drop in height. So we've, you know, had to do extensive testing and putting a lot of infrastructure to make sure that that switch is very smooth. What we end up doing was, you know, we had the old system running. We had a new system up, and then while all the real traffic was going through the old system, we're sending parallel the same traffic through the new system, kind of play the (doc launch), and then through logs when we saw that all the behaviors are identical and the reliability and latency are better, only then did we switch over to the new system. And even after we switched, we're still keeping the old system there for a while as a backup, right? We want to make sure that this transition's really smooth, it doesn't hurt any of the user experience, and it's only for the better. 
FRANCESC: Cool. So I have a question, and maybe the answer is no, and then it's a future request, but--So I'm imagining a world where you actually have just one project and a bunch of compute engine instances, right? And what you want to say is that someone has access to those instances as long as the instance has a specific tag. Is that something that we provide? 
RAE: Not today. Right now you can--You know, when you grant somebody an instance admin role on project, they get access to all the instances in that project. You could do a little subdividing. One thing we have shipped is per VM service accounts, so you know, you could by granting people access on a per service account basis, you could say, you know, this person is allowed to (inaudible) but only of a certain identity. But we don't have--We don't yet have the--You know, you can have access to every thing in this project only when it's labeled "x." And I have heard from a number of customers the desire to do that. We're definitely considering that on our road map. 
FRANCESC: Very cool. So since you're already talking about the road map, what else can we expect to see in the future?
RAE: So one of the first things we often get as soon as we tell people, "Look, here are the 20-something beautiful new granular roles we have shipped, but what about this other role I really want," you know, BigQuery, comp (inaudible) monitoring, (inaudible) a fair number of them depends on the particular products you're using, you want roles for your, you know, the products you care about so you can give out very granular permissions. So we're definitely working on shipping, you know, the next batch of roles based on different services, and we're also working on giving you the ability to make custom roles because for, you know, for--We're hoping that in the 80% case you can just make use of the out of box roles, and that's the easiest path. It saves you a lot of work, but for some of our more advanced customers, especially in the case of, for example, service accounts, right, they want to tailor to very specific permission sets, so we're also working on making it possible to create your own custom roles. And then beyond that, also we talked about, you know, the ability to let you specify permission based on labels, so we call these "conditions." This set of syntax allow you to say, "Ah, yes, grant this person such and such role and such resource, but also only if, you know, either the person or resource meets such set of conditions," and these could be labels. It could be, you know, time-based. It could be (inaudible) based, so the number of additional policies that we're looking at that could be added to the IAM syntax, and also of course, once we allow you to use all these granular roles to do things in a very custom way, the next problem you're gonna run into is that they become hard to manage and hard to debug, so we definitely also want to invest in the debugging experience to make the policy language not only rich but also easy to use. 
MARK: So that sounds like some really interesting features. I just wanted to backtrack for just one second 'cause we've mentioned it a few times. We talked about service accounts, but I don't think we really sort of talked about what those are and what relationships those have with IAM. Can you sort of explain what they are and how that ties directly in to IAM? 
RAE: That's a really good question. So typically when you think about--One thing about identity is they think about users, right, a person who can type a username password or press a hardware key. But some times, especially when you're interacting with Cloud through API, there's a lot of automation, a lot of applications people build, that talk to our APS not necessarily from a user as a person but rather as a program. And a program can go and type in username password. They don't work the same way as human beings, so we need to give these robots kind of an identity as well, and that's where service accounts came to be, right? We need to have a way to manage identities for automations either around our (inaudible) compute engine or around somewhere else and have them authenticate and be able to access APIs in secure ways as well. So that's a service account. Now as soon as we talk about service accounts account type username passwords, they authenticate by a key. So one or more keys can be created for each service account on GCP, and then you can basically use the key in your program to let your program authenticate with the key to prove who they are to access the resources. Well if your program happens to run on App Engine, Compute Engine, then your life becomes a lot easier because we actually manage the keys for you. The keys actually sense the data 'cause once you have them, you can prove who you are and access resources. If you're running one off the GCP compute platforms, we keep the keys for you. We (automatically) rotate the keys for you so you don't have to worry about losing them or leaking them. And if you're running a program somewhere else, you can download the keys to be used in your own program, but please take care of them because they basically open the door to your resources. 
MARK: Excellent. Well, I think we're sort of running out of time just a little bit, but is there any thing about IAM that you want to mention that maybe we haven't covered yet or haven't talked about yet? 
RAE: So one thing I want to bring up is in my conversation with a lot of customers, what we often find is that people tend to think of IAM when they, you know, have a security incident or when things get a little out of control, but the best way to actually plan for them is to plan ahead before you get to the point where, you know, you go, "Holy crap. I've got to tighten down security." A lot of the plannings we'll talk about on the resource level, you know, how you set up your organization, how you lay out your projects, and you know, what groups you set up, and some of these higher level concepts are much easier to think about to decide and to lay out before you go, you know, you've already got an application running last minute trying to tighten up security. So you know, do a little thinking ahead of time about how you want to arrange your resources and how you want to set a policies, and that will help your apps to go a long way. 
FRANCESC: Cool. That sounds like a very good piece of advice. Well, thank you very much for your time, Rae. I learned a lot. 
RAE: Thank you. I really enjoyed talking to you about IAM. 
MARK: Much appreciated. Thanks so much. 
RAE: Thank you. 
MARK: Thanks so much to Rae for joining us today. We really appreciate having that chat. I have a much better appreciation now of identity and access Management. 
FRANCESC: Yep. Yeah, very interesting. I learned a lot, and I'm actually gonna start using that next time I have a bigger project. Yep.
MARK: Definitely. Absolutely. But why don't we talk about the question of the week? I think this one's a little interesting one. So we've had Cloud storage for a while, you know, so if you have a static binary asset that you want to put in the Cloud and have edge caching, you know, sort of all over the world, Cloud storage has always been great for that. 
FRANCESC: Yeah.
MARK: But the question always comes up, like, "What if I'm dynamically creating content? Like, maybe images or sound files or movies, and I want to also have that sort of edge caching around the world. How can I do that? 
FRANCESC: Yeah, or even if those images are just stored in some hard disk and just have a web server serving them, how do you--Yep. So there's actually a great thing that we added recently which is what we call Google Cloud CDN. And CDN stands for "Comp  Distribution Network," and it's in beta. And what this is is basically just something that you can add on top of any HTTP or HTPS load balancer, and it allows you to do exactly that--cache requests. The way it works is just by the simple, the traditional, HTTP, HTPS caching mechanism, so you have those heathers, and we're gonna cache the responses to the requests that have the (method its get), and the answer is like, 200, and there's a bunch of specific constraints to decide if some thing is cached or not, so just go check it out the documentation. The interesting thing is that it is very, very easy to set up, so once you have your load balancer, every thing you need to do is just click on a checkbox, and that's it. You're ready to go. And now you have a cache. Now, as soon as you have cache, the next question is "Cool. How do I invalidate it?" That always happens, and it's actually very simple. If you've used Memcache on App Engine where you have that little console where you can go and look for a key and just remove it? Same thing pretty much but instead of going to Memcache, you're gonna go to the load balancing page in networking and find the caching tab and just remove it there. Very easy.
MARK:: Sweet. So I could set up a VM that could have some sort of job that serves out assets maybe dynamically, maybe it generates them, something like that, and then just put an HTPS load balancer on it, and boom, I'm good to go. 
FRANCESC: Yeah, so as a test, what I did is I just had a bunch of machines in an instance group, and I created a load balancer on top of that. All of them were running engine (inaudible) so that's it, and it worked very well. Also it could be really easy to do if you're running on GKE on Container Engine because when you create a service, and you say that the service type is "load balancer," it will actually create a little balancer. So you just go there and click on "start caching," and that's it. Great to go. 
MARK: Nice trick. I like it. 
FRANCESC: Yep. Very cool. 
MARK: Excellent. So before we go, I sort of want to mention a couple of interesting new developments. Most recently we, as in Google, have announced that podcasts are available on GooglePlay Music. 
FRANCESC: Yay.
MARK: So you can now get the Google Cloud Podcast on GooglePlay Music as well. If you go to our website, check the subscribe button or the "about" section. You'll see that we're available there. 
FRANCESC: Yep. Which is pretty exciting, and on top of that, I think that you can now find us there, and also you can now subscribe to our mailing list. 
MARK: Yeah. So we have an email subscription option if that was something you were looking for. We had a few requests for it, so yep, now you can go there, put in your email address, and we'll send you an email whenever a new episode comes out. 
FRANCESC: And since we're already there, why don't we remind everybody, all of our listeners, how to get in touch with us. 
MARK: Definitely. So via email, it's Hello@GCPPodcast.com. 
FRANCESC: I'm gonna start with the one I always forget which is Slack. We have a podcast channel on the Google Cloud Community Slack community. 
MARK: Yes. Absolutely. And actually I just updated our "about" section, too, so if you're looking for a little more information about how to get on that Slack community, that's all in the "about" section on our website. Twitter is GCPPodcast.
FRANCESC: Google+ is +GCPPodcast.
MARK: Reddit is /RGCPPodcast, and that's it. We're done. 
FRANCESC: And that's it. Yeah. 
MARK: That's it. We're done. 
FRANCESC: Okay.
MARK: It's okay.
FRANCESC: No, actually the webpage is GCPPodcast.com. You did not mention that. 
MARK: Oh, there we are. 
FRANCESC: So yeah, cool. So where are we going to find you next week? 
MARK: Next week I am taking a little trip down to Kentucky. I will be at VectorConf and then also hitting up the Louisville GDG talking to them about some communities and talking at VectorConf about how Cloud can change your game. 
FRANCESC: Very cool.
MARK: And yourself?
FRANCESC: I'm gonna have a slightly longer trip. I'm going to Budapest in Hungary for CraftConf. Very, very excited about that, so if you're around, come say "hi." 
MARK: Excellent. Well, Francesc, thank you so much for joining me yet again this week. 
FRANCESC: Thank you again for joining me, Mark, and talk to you next week. 
MARK: See you next week.
{{< /transcript >}}