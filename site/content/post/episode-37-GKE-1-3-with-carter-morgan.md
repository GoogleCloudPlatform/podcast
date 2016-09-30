+++
audioDuration = "00:24:01"
audioFile = "Google.Cloud.Platform.Podcast.Episode.37.mp3"
audioSize = 34636814
categories = ["Kubernetes", "Containers"]
date = "2016-08-03T01:07:49Z"
description = "Carter Morgan is back to discuss with your cohosts Francesc and Mark more on Kubernetes 1.3 and what is new for GKE, aka Google Container Engine."
draft = false
episodeNumber = 37
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "GKE 1.3 with Carter Morgan"
image="/images/post/gke.png"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/TYUeR143DvH"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4vzeu4/episode_37_gke_13_with_carter_morgan/"
+++

[Carter Morgan](https://twitter.com/_askcarter) is back to discuss with your cohosts
[Francesc](https://twitter.com/francesc) and
[Mark](https://twitter.com/neurotic) more on Kubernetes 1.3 and what is new for GKE,
aka Google Container Engine.

<!--more-->

##### About Carter

[Carter Morgan](https://twitter.com/_askcarter), a Developer Programs Engineer at Google,
co-created the Udacity course
[Scalable Microservices with Kubernetes](https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615)
and presented [Best Practices for Orchestrating the Cloud with Kubernetes](https://youtu.be/21hXNReWsUU) at Google IO16.
On the side, he teaches presentation skills to other Googlers.
Before Google, Carter coded for the United States Air Force and for Microsoft.
In his free time, he's a regular in the local Seattle standup comedy scene.


##### Cool thing of the week

- A better way to bootstrap MongoDB on Google Cloud Platform [post](https://cloudplatform.googleblog.com/2016/06/a-better-way-to-bootstrap-MongoDB-on-Google-Cloud-Platform.html)

##### Interview

- Kubernetes [docs](http://kubernetes.io)
- Google Container Engine [docs](https://cloud.google.com/container-engine/)
- IAM integration with Google Container Engine [docs](https://cloud.google.com/container-engine/docs/iam-integration)
- Google Container Engine Node Pools [docs](https://cloud.google.com/container-engine/docs/node-pools)
- Local SSD support on GKE [docs](https://cloud.google.com/container-engine/docs/local-ssd)
- GKE Cluster Autoscaler [docs](https://cloud.google.com/container-engine/docs/cluster-autoscaler)
- Scalable Microservices with Kubernetes [Udacity](https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615)
- Google Cloud Shell [docs](https://cloud.google.com/shell/docs/)

<div style="text-align: center">
  <a href="https://cloud.google.com/container-engine/">
    <img src="/images/post/gke.png" width="50%">
  </a>
</div>

##### Question of the week

- Kubernetes local development with minikube [GitHub](https://github.com/kubernetes/minikube)

##### Were will we be?

Mark will be at the [Indie Game Festival](https://events.withgoogle.com/google-play-indie-game-festival/)

{{< transcript "FRANCESC: Hi, and welcome to Episode Number 37 of the weekly Google Cloud Platform podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, mark." >}}
MARK: Hey, Francesc. How are you doing? 

FRANCESC: Very good. Happy to have Carter back for one more week. 

MARK: Just one episode I'd like you to be like, yeah, I'm a little down today. 

[LAUGHTER] 

I'm a little sad. 

FRANCESC: I'm just a very happy person in general. 

MARK: Yeah. 

FRANCESC: Yeah, so we're going to have Carter to keep on telling us about Kubernetes 1.3, but specifically about the new things that are coming to Google Container Engine-- "Kontainer" with a K, so GKE. 

MARK: Yeah, so we've got a whole bunch of new features and new stuff above and beyond what already came with 1.3 in Kubernetes. So we're going to chat about that. And there's some pretty cool stuff in there. 

FRANCESC: Yeah, and also during the interview we will also mention like how do you get started with Kubernetes? What are the best ways to learn the basics, and et cetera. So regardless if you are an expert that wants to know more about the latest things or if you want to really learn the basics, I think this interview will be very good for you. 

MARK: Absolutely. 

FRANCESC: And then at the end, we will have a question of the week. And for the second, maybe third I don't count any more, week in a row, the question will be on Kubernetes. 

MARK: Yeah, well it's such an interesting topic. I just can't avoid it. 

FRANCESC: I know. No, people keep on asking questions about Kubernetes, which is great. Very happy to answer all of those, and I keep on learning by answering them, so yay. 

MARK: Yeah, so we're going to have a little chat about how we do local development with Kubernetes. 

FRANCESC: Yep. But before that, we're going to start with the cool thing of the week. And the cool thing of the week this week comes from you, and it comes clearly from you because it involves your favorite product, which is-- what is the name again? 

MARK: Deployment Manager. 

FRANCESC: Deployment Manager-- Google Cloud Deployment Manager. And it is related to MongoDB, so the question is, OK, so I want to run MongoDB in Google Cloud Platform. What is the easiest slash best way to get started? 

MARK: So this is actually quite interesting. So there are a few ways that you could create MongoDB on Google Cloud Platform. Obviously, you could fire up, you can [INAUDIBLE] engine instances and manually install it. Do it that way-- not necessarily a difficult way to do it. We have Google Cloud Launcher to quickly create and sort of test a MongoDB replica set. That works, but to a degree, like, it's a little harder to manage once it's already up. If you want to upgrade, it becomes a little more difficult. It's not like that. 

However, what we have, and there's a blog post that comes along with this that is on Google Cloud Platform's blog, that provisions and installs MongoDB Cloud Manager, which is a MongoDB tool for running a replica set of MongoDB in the cloud. But we use Cloud Deployment Manager templates to basically bootstrap that and keep that up and running and get that up and start it. 

So you kind of get the best of both worlds. You get almost the speed and simplicity of using, say, like Cloud Launcher. But now you've got something that's managed by MongoDB. It's hooked into their services. And then so if you want to run MongoDB in the cloud, it seems like a really nice way to do it at production and at scale. 

FRANCESC: That sounds very cool. And yeah, the block burst will be linked from the show notes, as always. 

MARK: Great. 

FRANCESC: So I think it is time to go back to our long interview with Carter Morgan. So he keeps on letting us know more about GKE 1.3. 

MARK: Absolutely. I don't think we've talked to him in a long time. 

FRANCESC: Let's go for that. So since we enjoyed so much, talking to Carter Morgan, we're back again to talk more about Kubernetes and GKE. Hi, Carter. How are you doing? 

CARTER: Doing well, Francesc. 

FRANCESC: Long time no see. 

CARTER: Yeah, if feels like I never left. 

[LAUGHTER] 

FRANCESC: Yeah, so for those that didn't listen to the previous episode, we discussed a little bit about all the new things that come with Kubernetes 1.3. And one of those things was like more nodes and like bigger things and all of those things, and it was all related to just like Kubernetes in the wild. You can run it wherever you want to run it on GCE, GKE, but also Amazon or wherever you want to run it. 

Today we're going to be talking more specifically about GKE. So what is there-- the first question could be, is Kubernetes 1.3 available on GKE? 

CARTER: Yep, I just updated all my clusters last night so I can test out all the new features. It's available for everybody. If you don't know, GKE is Google Container Engine. That's a C, which is weird, because they had the name taken. But it's a hosted version of Kubernetes. So they basically host a master for you on Google Compute instances. You don't get charged for that, and you just get charged for compute instances you use. 

FRANCESC: Cool. Other than all the new features on 1.3 that will be available on GKE, what all the things are we expecting to have? 

CARTER: Yes, so there's a lot of Container Engine specifics now. There's things like the new container VM images. So what that is is a more secure, stripped-down image. So since it's stripped down, there's less places for attackers to get at. It comes with Auto Updates. It's just basically optimized for a container environment. 

MARK: So before clusters were running, I think it was, Debian. So if I fire up a new GKE cluster now, this is going to run this new image, or how does that work? 

CARTER: You have to select it. And then I think there are prefix GCIs, so you can tell the difference when you look-- I forget the exact command off the top of my head. But there are prefix GCIs for the ones. And this is in beta. But this is one of those features that I think, again, more security, more better, right. 

FRANCESC: Yeah. So this kind of makes me think about basically like uni-kernels. We had an episode on that not that long ago. So the idea is that you're going to be removing things like FTP and the services that are truly not related to Kubernetes. Is that the main idea? 

CARTER: Yeah, it's the basic idea. So you're saying, what do I need to run containers? What do containers do often? Let's keep that. Let's get rid of the rest. 

FRANCESC: And if you need those back in, [INAUDIBLE] could still work, or? 

CARTER: I haven't checked the specific. So I'm not sure what they restrict. 

MARK: That's fair enough. But at least then it sort of limits attack specters for security, makes it easier to update for the Google Cloud team, and probably makes their lives a whole lot easier across the board. 

CARTER: Right. And then it also comes with Auto Updating features. So as new security fixes come in, you get that updated automatically to your cluster. 

FRANCESC: Very cool. What else, other then container VM images? I've heard about SSDs. There's a lot of people excited about that. They need more speed. 

CARTER: Yeah, want to go fast. Yeah, so in GKE and GCE you have local SSDs, so you can use those now. They just go a lot faster. 

MARK: There's not a lot to say. You just getting SSDs. It's good. 

CARTER: It's all good there. 

FRANCESC: Yeah, I'm imagining that with the [INAUDIBLE] and local SSD, now if you want to run things like big databases on Kubernetes, it will be much faster than before. 

MARK: So I know we've had a really big push internally around like IAM and access control. I know there was some new authorization facilities that were in place with Kubernetes. Has that been extended to IAM now as well? 

CARTER: Right. So they added role-based access or RBAC. And now with IAM GKE what you get is all the API calls now you can say, OK, who has access to do this? Who can start up a new pod? Who can delete stuff? So that's supported in GKE now. What IAM is is Identity and Access Management. 

MARK: So that's really cool. I mean, when you're running a really large team, especially if you have a really large cluster, you want to have control over who can do what within that cluster. I think that sounds really, really powerful and really useful. 

CARTER: Well, so the coolest thing about IAM is that instead of like role-based stuff, where you say, I have an admin, and admin can do everything, I have a user, he can do three things, now you get a lot more granular. So I can say Mark can create clusters. Francesc can delete them. And me, Carter, I can do everything. 

MARK: Yeah, that make sense. I wouldn't want to have the power to delete clusters. That sounds scary. 

CARTER: (LAUGHING) A lot of responsibility. 

MARK: It's a lot of-- I don't need that kind of responsibility in my life. 

FRANCESC: So also related to this, when you say role-based access, we talked about people. But is it also good practice, like security practice, to say, oh, this instance or these kind of instances have access to this powerful API, but not others, or is that something that you've seen? 

CARTER: I haven't seen it. I haven't seen it. So I don't want to comment on best practices and security. I know that you can set up a service accounts and say who can access what. And so someone in your organization would set that up. 

FRANCESC: Nice. 

MARK: I know you were getting quite excited about node pools. 

CARTER: Yes. OK, I really like node pools. So what node pools are is kind of like cluster federation light. So one of the things you can have, instead of having different clusters, here you can have different node pools that can be replicated across zones. So with cluster federation, like we talked about last week, you could have clusters in different regions, like Asia, Europe, US. You could also have them across different cloud providers, like AWS, GCP, or even on prem, like OpenStack. 

Here what you're going to get is something replicated across zones-- so if you're worried that a zone might fail. So it's lightweight. It's not the same as a cluster federation. But what you can also do is have different types of nodes in your cluster. So I could say-- maybe I have a database, and I want 200 gigabyte machine for it to sit on so I can eat up that data. But my front end application, or my server app, only needs like a 10-gig pretty small instance. So now I can do that, and that's very powerful. 

MARK: And I take it you've got control there as well in terms of where your pods end up sitting within that node pool? 

CARTER: Mm-hmm, yeah, so there's affinity, and you also use selectors. So you could say-- basically when use node pools, you get a label attached to the node to the actual machine, and you can use that in your pod to select which one it's going to sit on. 

MARK: That sounds super useful, being I would like specifically say, hey, this container should be on this type of thing. Now to play devil's advocate a little bit, does that go against the idea of Cattle versus Pets, or is that still in the same Pet like Cattle category? 

CARTER: I think when you have persistent data, you no longer have Cattle, because data matters. Data isn't stateless, right. So maybe the whole idea of persistent data goes against Cattle. 

MARK: OK. But still something to consider when dealing with node pools and how you structure stuff. 

CARTER: Yeah, that was a great question. 

MARK: Yeah. There are pros and cons. 

FRANCESC: Yeah, I wonder if having node pools plus having local SSDs is something that can make it like you can say, all my web servers are going to be running on the light node. But then I have the nodes with local SSD that are going to be running whatever, [INAUDIBLE], or whatever database you want to use. It sounds like a good thing to have. 

CARTER: Yeah, that sounds like a perfect use case. 

FRANCESC: Yep. Nice. Something else related also to nodes, none node pools, it is node auto scaling. 

CARTER: Yes. 

FRANCESC: I've seen this many times before, and it was like you need to write your own auto scaler. It was quite hard. It seems like we fixed that, and we have it now as a part of Kubernetes-- part of GK. 

CARTER: GKE, yeah and GCE. So basically now there was already horizontal pod auto scaling. So if you used up too many resources on a pod, you could scale up a pod. That was built into Kubernetes. 

FRANCESC: What is, for our listeners, what is horizontal scaling versus vertical scaling? 

CARTER: Good question. Good question. So horizontal scaling is scaling up more instances of your application. Whereas vertical scaling is scaling up more resources for your instances to live on. So now in GKE what you get is vertical auto scaling. So we can say, I have this pod that I can't schedule right now because there's not enough space for it. 

GKE is smart enough or computer smart enough to go and look and say, if I were to add another node, could schedule this pod? And if so, then schedule it. 

FRANCESC: Nice. 

CARTER: And so there's a few use cases for this actually, if you think about it. Take like a CI service, Continuous Integration. It's going to be really busy Monday through Friday if you're not one of those companies that's making people work all weekend. And it's going to wind down on the weekend. So why waste money having all of these resources up over the weekend. You can have your nodes scale up while everyone's in there working, and then over the weekend wind back down, save you money. 

FRANCESC: Yeah that sounds like very, very good use of your money. I'm wondering how does this work with, again, stateful apps? 

CARTER: OK, yeah, hmm, I know there are some things that are still getting ironed out, like we just talked about NodeFinity are using node selectors. Well, so, if I add a label or a few other QCTL commands to a node, that's not going to get replicated when I scale up a pod or not. So if you're using that to say, I want my node to sit on this pod because it's SSD and I want to go fast and this stateful reason, that's not going to work. 

MARK: I suppose that makes sense, too, like if you're like order scaling, at least right now especially, if you order scaling out of cluster, it for mostly stateless apps. I mean, that's the stuff you really want to grow and shrink. It's not for stuff that's like-- yeah, growing and shrinking a database in real time makes me really scared. 

FRANCESC: Yeah. 

CARTER: Are there people that grow and shrink databases? 

MARK: I don't know. 

FRANCESC: I mean, I'm pretty sure you can. Like I know that for a big table, you can totally do that. It is not auto scaling though. But you need to be quite careful because if you have like your data is replicated on three nodes, then it needs to be replicated on three nodes. If you turn down like all of those three nodes that happen to have one single key, then you lose data, which is bad. So I'm sure you can do it, but you need to be really careful, I guess. 

CARTER: Yeah, it's the sort of thing that I'd be like, OK, I'm happy doing this on a manual way. But I don't know if I want like a machine doing it, at least not yet. 

FRANCESC: Yeah. So what is your advice for people that would like to run maybe like some like, let's say something typical, like WordPress, and you have like the front end and then you have the database. Where could you put the database? I could personally avoid putting in containers, but I don't use containers all the time. What is your opinion on that? 

CARTER: I think if I could host a database, I would. This is my most candid opinion. As in, I'd use like a MySQL service or something like that, that's hosted, instead of putting it in a container. But with the new features in Kubernetes I think we're going to see a lot more experimentation, a lot more people trying it out. So maybe new best practices are going to emerge. 

FRANCESC: OK. 

MARK: So maybe the tooling is not quite there yet, but as people start to play with it, it'll get there at a certain point? 

CARTER: Right. We talked about the 1,000 node Cassandra demo. And again, it's a demo, so we didn't see it in production. We didn't see how long it will last. But that's really exciting to me. Because if you can scale up and scale it down like that with Kubernetes, that's almost like using a hosted service. So I don't know if it's a release away or if it's ready right now. I want to go play after this and check it out. 

MARK: Actually, combining that with stuff like-- what's package manager for Kubernetes called these days? 

CARTER: Helm? 

MARK: Is it Helm? It's changed names about three or four times I think. But being able to sit around and say, hey, I want Cassandra-- boom. I want a MongoDB replica set-- boom. The combination of that and those two things, I think that is quite powerful. 

CARTER: And so again, Kubernetes is supposed to be a pluggable framework like that. So I could see that happening in the future. It's an exciting time to be working on Kubernetes. 

FRANCESC: Yeah. So there's a lot of really fancy new things going around. But I feel like also many of our listeners are still are curious about, OK, so I've never used Kubernetes. Where do I get started? 

CARTER: Yeah, I'm seeing that a lot, especially like going to conferences and giving talks. There's always a big crowd of people that are like, oh, we want to know more. To that end, Kelsey and I made of course-- Udacity, Scalable Microservices With Kubernetes. It goes over everything from, OK, I have an application. How do I package and distribute that in a Docker image? What are some best practices for that? 

So we talk about things like 12 factor, the microservices pattern, which is the most overused term in all of tech containers. We talk about the basics of Kubernetes, like deployment, services, health and monitoring, secrets, and all that. And then we get a little bit more advanced and talk about deployment patterns and rolling updates and things like that. So that would be my first choice. I'm a little biased there. 

MARK: That's fair enough. 

CARTER: We've got interviews with really intelligent people like Adrian Cockcroft, former cloud architect at Netflix. And he talks about the Pet versus Cattle divide a little bit as well and the importance of infrastructure-- why you'd use it, when to write your own, if ever, things like that. 

MARK: That sounds really cool. Does it cover any of the cluster setup side of things? 

CARTER: No, so we-- 

MARK: It's for application developers. 

CARTER: Right, and so that's one of the things I'm learning in this role. I'm a DPE, so my role is meeting customer zero. And so I've got to stop using GKE and things like that. I've got to start doing Kubernetes the hard way, right? 

FRANCESC: Yeah, it makes it too easy for you? 

CARTER: Right. So in this course, though, we wanted to make it easy. So what we did is we used Container Engine, which is the easiest way to use Kubernetes. It's pretty much one command line, you're ready to go. And we also use Cloud Shell, which is-- what is it? It's a provision VM for you that keeps your dot files. You have a local space on a disk somewhere. It's a standard operating environment. So it's probably the easiest way to get started with Kubernetes is Cloud Shell and Google Container Engine. 

FRANCESC: Yeah, that way everything you need is just having browser. That's it. Nice. 

CARTER: So it was a pretty nice, pretty clean setup. There's a few things in the course that if we were doing a Kubernetes 201 we would do like more production use cases, stateful applications, name spaces, automatic integration with the CI tool, Continuous Integration, continuous deployment. So, but, yeah, if you want to get started, that course is the easiest, quickest way to do it. It's a free course-- Udacity and Google. 

MARK: Is that a teaser that you're actually going to do a 201, like an advanced course? 

FRANCESC: Because we're now excited about it. 

CARTER: You're excited about it? Uh-oh, I'm on the hook. You know, I really do want to do more advanced workshops. So Vic Iglesias from the Solutions Team put out a really great solution for using Jenkins and GKE together. So we ran that as a workshop, and people loved it. They absolutely ate it up. 

MARK: I guess, if people are looking for that event's contact, they can through emails or comments to the episode, and we'll make sure to pass them on to Carter. 

FRANCESC: Yeah, absolutely. 

CARTER: 100%. 

FRANCESC: Cool, so we're kind of running out of time for this episode. Is there anything else that you'd like to mention about Kubernetes or GKE that we have not mentioned in this episode or the previous one? 

CARTER: I guess, just to wrap up, Kubernetes make these claims. It says, plan at scale and never out grow and run anywhere. And with 1.3, we're closer to that than ever because you can run anywhere with cluster federation, plan at scale at 2,000 notes, 60,000 containers, and never outgrow. You can go from local to basically, again, 2,000 nodes. So Kubernetes is something that you can get started with now, trying it out really easily with GKE and Cloud Shell and then take it on prem and do whatever you really need to do to meet production needs. It's there for you. 

MARK: Great. Well, thanks so much for joining us today. 

CARTER: Thanks for having me. 

FRANCESC: Yeah Thank you. Well, thanks so much, Carter, for spending not one but two episodes with us and telling us everything we wanted to know about Kubernetes 1.3 in Container Engine. We're going to go through the question of the week. And surprisingly, it is also about Kubernetes. 

MARK: Is it really? 

FRANCESC: Yeah, shocking, right? 

MARK: I know. 

FRANCESC: Yeah, so I think it comes from you. Why then you? 

MARK: Yeah, so this is a question I've heard a lot from a bunch of people using Kubernetes. It's really around how do I do local development with Kubernetes? We talked a little bit about on podcast as well like setting up a cluster is a little bit difficult. There seem to have been some options out there, but there's a few of them. Which one do I choose? What do I do? So if I want to do local development in Kubernetes, how do I do it, Carter? 

CARTER: OK, it's a great question. Minikube is the way to go. So what Minikub does is it sets you up a local one-node cluster using a VM-- so by default its VirtualBox, but you can specify different ones. And then you have a lot of the power of Kubernetes. You don't get everything. You don't get ingress controllers. You don't get load balancers. But for most of your like day-to-day use on a single-node machine, you can try it out. And then you can take that and just go and run the same thing that you're running locally on a provider. 

MARK: So I know in previous local versions of Kubernetes I was limited by the number of pods I could run. Like, I couldn't run more than, like say, one pod of a particular thing. Is that limitation still in place with Minikube, or am I just kind of resource-controlled based on how big my VM is more than anything else? 

CARTER: You're in it to the node now. So you have one node. 

MARK: OK. So I can run multiples of those containers within that node and very similar to what I would run at scale, but maybe just slightly smaller. 

CARTER: Mm-hmm. And now Minikube is ongoing. s So it's not like the final, finished product. Off the top of my head I can't remember what they're thinking about adding. But again, you don't get like, say, the load balancers or ingress, but you can set up deployments and all the-- 

MARK: --all the good stuff. 

CARTER: --all the good stuff. 

MARK: --all the good stuff. But there's more stuff coming, and they're really like that's the one, true way of doing local development? Ooh, we have some contention! 

CARTER: Well, no I just-- I always get nervous when you say the one, true way to do anything. 

MARK: For now-- for now that is true. 

CARTER: Well, especially because Kubernetes wants to be so open. But if I was going to do local development right now, what I've been playing with myself is Minikube. 

MARK: That's fair. 

FRANCESC: So thanks again to Carter Morgan to spend with us two long episodes on Kubernetes and GKE, and not only that, but also staying to answer the question of the week today. 

MARK: Yeah, absolutely. Thanks so much for that. 

FRANCESC: Yeah, good job. 

MARK: Minikube's so cool. 

FRANCESC: Cool. So we're about to finish, but before finishing, I would like to remind our listeners on how they can send cool things of the week. Or if they have any other questions or proposals for topics, we're also very interested in that. 

MARK: Yeah so if they want to reach us by email, where can they reach us? 

FRANCESC: It is hello@GCPpodcast.com 

MARK: Our website is-- 

FRANCESC: It is either GCPpodcast.com or cloud.Google.com/podcast. 

MARK: Nice. If they want to speak to us on Reddit? 

FRANCESC: It is on the [INAUDIBLE] r/GCPpodcast. 

MARK: Excellent. If they want to reach us on Twitter? 

FRANCESC: It is @GCPpodcast. 

MARK: Yep. If they want to just on Google+? 

FRANCESC: It is +GCPpodcast. 

MARK: And the channel name and the GCP Slack community is? 

FRANCESC: Podcast? 

MARK: Yes. 

FRANCESC: There you go. I was not completely sure about that one. 

MARK: Wonderful. Well, Francesc, thank you again for joining me this week. 

FRANCESC: Thank you. And talk to you all next week. 

MARK: See you next week. 
{{< /transcript >}}