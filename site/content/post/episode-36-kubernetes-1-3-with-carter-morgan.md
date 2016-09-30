+++
audioDuration = "00:28:32"
audioFile = "Google.Cloud.Platform.Podcast.Episode.36.mp3"
audioSize = 41135675
categories = ["Kubernetes", "Containers"]
date = "2016-07-27T01:07:49Z"
description = "Carter Morgan tells your cohosts Francesc and Mark all the new features of Kubernetes 1.3, the latest version of the open source container orchestration framework."
draft = false
episodeNumber = 36
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Kubernetes 1.3 with Carter Morgan"
image="/images/post/Kubernetes.png"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/dqLkYiZ1762"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4uv8f6/episode_36_kubernetes_13_with_carter_morgan/"
+++

[Carter Morgan](https://twitter.com/_askcarter) tells your cohosts
[Francesc](https://twitter.com/francesc) and
[Mark](https://twitter.com/neurotic) all the new features of Kubernetes 1.3,
the latest version of the open source container orchestration framework.

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

Three products are now General Availability:

- Bigtable [docs](https://cloud.google.com/bigtable/docs/)
- Cloud Router [docs](https://cloud.google.com/compute/docs/cloudrouter)
- Cloud CDN [docs](https://cloud.google.com/cdn/docs/)

##### Interview

- Kubernetes [docs](http://kubernetes.io)
- Scalable Microservices with Kubernetes [Udacity](https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615)
- Best Practices for Orchestrating the Cloud with Kubernetes [YouTube](https://youtu.be/21hXNReWsUU) at Google IO16.
- Kubernetes Cluster Federation [docs](https://github.com/kubernetes/kubernetes/blob/release-1.3/docs/proposals/federation.md)
- Stateful Applications in Containers!? Kubernetes 1.3 Says “Yes!” [blog](http://blog.kubernetes.io/2016/07/stateful-applications-in-containers-kubernetes.html)
- Container initialization [initContainers](https://github.com/kubernetes/kubernetes/blob/release-1.3/docs/proposals/container-init.md)
- Thousand Instances of Cassandra using Kubernetes Pet Set [blog](http://blog.kubernetes.io/2016/07/thousand-instances-of-cassandra-using-kubernetes-pet-set.html)
- Google Container Engine (GKE) [docs](https://cloud.google.com/container-engine/)
- Creating a Raspberry Pi cluster running Kubernetes, the shopping list [blog](http://blog.kubernetes.io/2015/11/creating-a-Raspberry-Pi-cluster-running-Kubernetes-the-shopping-list-Part-1.html)
- Kubernetes The Hard Way [workshop](https://github.com/kelseyhightower/kubernetes-the-hard-way)
- Kubernetes Secrets [docs](http://kubernetes.io/docs/user-guide/secrets/)
- Kubernetes Config Maps [docs](http://kubernetes.io/docs/user-guide/configmap/)


<div style="text-align: center">
  <a href="http://kubernetes.io/">
    <img src="/images/post/Kubernetes.png" width="50%">
  </a>
</div>

##### Question of the week

- Making Kubernetes IP addresses static on Google Container Engine [blog](http://terrenceryan.com/blog/index.php/making-kubernetes-ip-addresses-static-on-google-container-engine/)

{{< transcript "FRANCESC: Hi, and welcome to episode number 36 of the weekly Google Cloud Platform podcast. I am Francesc Campoy, and I'm here with my colleague, Mark Mandel. Hey, Mark. How are you doing?" >}}
MARK: I'm good. Thanks, Francesc. How are you doing? 

FRANCESC: I'm very happy. We're interviewing someone from our team, kind of, I again. 

MARK: Again. 

FRANCESC: Yeah. 

MARK: We're going to be interviewing Carter Morgan. 

FRANCESC: Yeah. Carter Morgan about Kubernetes 1.3. 

MARK: Yeah, which is a really, really cool release. 

FRANCESC: Yeah. There's a lot of really new things. Everything is better and faster and bigger. And he's going to be telling us all about it. And then at the end, we'll have a question of the week, which is-- guess what? 

MARK: Kubernetes? 

FRANCESC: Yes. It will be about Kubernetes. So basically, it is, hey, so I have Google Container Engine and I have IPs that are ephemeral. I want them to be static. How do I do that? So you will learn that at the end of the episode. 

MARK: Absolutely. 

FRANCESC: But before that, we're going to start with the cool things of the week. 

MARK: Yeah. We have a lot of GA announcements. 

FRANCESC: Yeah. So nothing really new. There are three products that used to be beta, and now they're GA. So if you were not very sure, you were kind of hesitant about it, now they are completely ready for you. 

So the first one is Bigtable. And we discussed this with our episode with Paul Newson. And also, then we had the episode with Ian. 

MARK: Yep. 

FRANCESC: Talking about Bigtable, what it is. And basically, it is an incredibly fast and efficient non-relational database. I guess put it like that. 

MARK: That works. 

FRANCESC: Yeah. So it is-- 

MARK: For big data. 

FRANCESC: For big data. Yeah, there you go. So it's basically, if you have a huge amount of data and you need to make sure that you have really, really fast access, Bigtable is for you. 

MARK: Absolutely. 

FRANCESC: The second one is Cloud CDN. 

MARK: Yeah. So if you want to have edge caching for assets that are coming out of Compute Engine VMs. 

FRANCESC: You said "cashing" instead of "kay-shing." Thank you. Yeah, you actually said it with American accent. 

MARK: Oh, that's really funny. I'm turning on my American accent when I talk. 

FRANCESC: Yeah. 

MARK: So if you want cloud "kay-shing" for VMs that come out of Compute Engine, Cloud CDN is a great way to do it. It's basically a checkbox solution so that when you put an HTTPS load balancer in front of your VMs, you can enable cloud caching and use HTTP headers to indicate whether items should be cached or not. And you can actually kick them out the cache. It's really, really powerful. 

FRANCESC: Yeah. My favorite thing is that it's incredibly easy to set up. Basically, if you have an HTTPS load balancer, then you go there. You click the checkbox. 

MARK: And boom. 

FRANCESC: And you're done. So that's really cool. And the last one I'm going to let you explain it because I'm not a network engineer by far. 

MARK: I am also not a network engineer. But Cloud Router has also gone general availability. Basically, that's for if you have both an on-prem and a Google Cloud Platform network, and you want to route traffic between the two of them. Cloud Router is a way of allowing you to do that. It integrates with our Cloud VPN system and lets you route traffic between your on-prem and cloud infrastructure. 

FRANCESC: Cool. And as always, we'll have a link from the show notes to every single one of those products in case you're interested in knowing more about it. Cool. I think it is time to go talk with our friend Carter. 

MARK: Yeah. That should be lots of fun. Let's do it. 

This morning, we are joined by Carter Morgan, Developer Programs Engineer for Google Cloud Platform. How are you doing today, Carter? 

CARTER: Doing well. Excited to be here. 

MARK: Excellent. Thank you so much for coming down today, having a chat with us about Kubernetes. Pretty excited. Why don't you tell us a little bit about what you do at Google and your history and all that good stuff? 

CARTER: OK. At Google, I'm a Developer Programs Engineer on Cloud Platform team. And I've been focusing mostly on Kubernetes. I've gotten to make a course on basically scalable microservices with Kubernetes with Kelsey Hightower. I've given a talk at I/O on best practices for orchestrating the cloud. And I'm basically just trying to make it easy to get people to use Kubernetes. What are the pain points? How do I make it easier? 

FRANCESC: Cool. So I think it might be-- no, it is not the first time that we have a DPE, a Developer Programs Engineer. But could you explain-- for you, at least-- what is to be a Developer Programs Engineer, like one sentence? 

MARK: Just one. 

CARTER: Just one sentence. I only get one. I've got to make this count. 

FRANCESC: You can maybe use two. It's fine. You can use dashes. 

CARTER: My job is to be customer zero. So try things out, find out what the pain points are, and then make those disappear. 

MARK: Cool. One sentence. 

FRANCESC: That was good. 

MARK: That was good. 

FRANCESC: That was very good. Cool. So one of the reasons we have here is because you're awesome. The second one is Kubernetes 1.3. What can you tell us about it? It's the latest version. 

CARTER: It's the latest version. In Kubernetes math, three is twice as big as two. 

FRANCESC: Obviously. 

MARK: So that sounds great. Before we get too far into that, in case people haven't gone to our previous episodes on Kubernetes-- 

FRANCESC: Yes. 

MARK: Do you want to just give us a very high level overview of what Kubernetes is? How does it work? What is it? What problem is it trying to solve? 

CARTER: Kubernetes is a container automation framework based on 15 years of how Google ran containers internally. So it's all open source now owned by the CNCF. And what that means is basically, you can set a desired state. Kubernetes will pick up on that for you and drive your current state towards it. 

So instead of having to, say, manually run to a command line and say, is my application running? Kubernetes will check that for you. And if it's not, it's smart enough to restart it. So this frees up developers to focus on what's really important, applications. I can go more in depth if you want me to. 

MARK: Well, I guess it's interesting. You say "applications" but you don't say "containers." Is there a reason why you do that? 

CARTER: I think sometimes, there can be confusion. Sometimes you might have multiple containers that work well together, and that's your application. I might have an engine that's front end that gives me secure routing. And that's talking to my standard application. In a talk I do over in the Udacity course, we have this app that just sends "hello" back. So you can bundle up containers to be your logical application. 

FRANCESC: So you just mentioned CNCF. What does that mean? 

CARTER: I always get acronyms messed up, but I think it's Cloud Native Computing Foundation. 

FRANCESC: I just checked it out. And yeah, that is it. But what does that mean? 

CARTER: So what it is is it's a body that's in charge of Prometheus now, which is a monitoring app, and Kubernetes. And it's trying to just drive it forward and adopt  it and keep it open for everyone to contribute. So this isn't a Google owned project. Kubernetes is owned by the CNCF. And that lets people like Microsoft work on it, Red Hat work on it. And that's what makes it so valuable to our community. 

FRANCESC: Nice. 

MARK: Very cool. So let's go back to Kubernetes 1.3. You were saying it's twice the power of Kubernetes 1.2. Why do you say that? 

CARTER: I said twice as big because now, Kubernetes 1.3, you can have up to 2,000 nodes, 2,000 machines running your application and 60,000 containers. And that's all still within the service SLO, which is basically one second latency on API calls. And so at 1.2, there was 1,000. So 1.3 is twice as big as 2. 

FRANCESC: Nice. So if that keeps on growing, 1.4 will be 4,000? 

CARTER: Yeah. 

MARK: Sure. 

CARTER: I just interviewed someone and they said, we want to see 15,000 nodes. I'm like, you're not happy with 2,000? 

[LAUGHTER] 

MARK: There could be a lot of cores. Especially [INAUDIBLE]. We can run 32 core instances. 

FRANCESC: Yeah. So on top of being just bigger, I'm assuming it's also better. What are the new things? What are you excited about from Kubernetes 1.3? 

CARTER: Well, I get excited about little features. So even little command line tools or flags are easier. So now there's kubectl set. So I can just go in and say, hey, I want to change my image, and just change that one command line, which for running demos or just ease of use, that's nice. 

But there's really big features that are exciting, like cluster federation, initialization containers, more security features. So I think it makes sense to think Kubernetes. It says it's planet scale. You can run it anywhere and you'll never outgrow it. And now, 1.3, we're actually really meeting those claims. 

With cluster federation, you can say, I want a cluster that's on prem and I want a cluster that's on GCP. And that's fine. That's perfectly OK. Or if I want something that's highly available. I want a cluster that's in an Asian region, and I want one that's in the US. So now all that's possible. So the run anywhere thing, totally you can make that happen now. 

MARK: So let's talk a little bit more about cluster federation and how that works. Is this just some overarching abstraction that sits on top of Kubernetes that makes it look the same across the planet if I'm going across zones? What does that really look like? 

CARTER: OK. So basically, you have to set up a control plane. So you set up a federated service. What this does is it sets up a service for you in all the regions that you want. It makes sure that they're healthy and that it can route traffic to them. It gives them DNS entries and all that. 

You can also do things like set the context and say what region, what cluster do I want to operate on. And then you can manage it all from one place. So that's really nice. So it is sitting on top of clusters before. So now you can control all your different clusters from one location. 

MARK: OK. And if traffic's coming into that federated cluster, I assume it's intelligently routed to least latency, things like that? 

CARTER: I'm not 100% sure on that one. I don't want to give a promise. So you have the option of hitting the federated endpoint and round robining traffic throughout. Or you can actually go to the region specific endpoints if your application wanted you to do that. 

That is probably the biggest feature, I would think, though, of this release. Because now, as your service grows, you can take something from on prem and say, I want to try this on an AWS, see how that works. And you can do that. Or if that doesn't work and you want to switch over to GCP-- and I'm not saying AWS isn't going to work or anything like that. But then you can switch it over to GCP and you don't have to take everything offline right away. You can have a gradual rollout, still be highly available, still make sure everything works before onboarding. 

MARK: That's one of the things I really like about Kubernetes is the customer wins. You can run it anywhere. So you just run around basically looking for the best Kubernetes experience you can find in the place that you need it. And federation really seems to fall into that as well because that gives you so much flexibility. 

CARTER: Yeah. It's really, really open. If you look at other features, the Rocket container runtime now in 1.3, that just came out. And so you're no longer forced to use Docker. If another container runtime-- right now, Rocket's the only one we support, Rocket and Docker. If another container runtime has features that you need or want to rely on, you can do that now. 

So take Rocket. It allows you to run basically images that are more secure with a stripped down OS. So you can have a VM-based operating system running your containers. You can also run on host. So you can have host privilege containers running. And so if you need that kind of flexibility and functionality, now you have the option with Rocket. 

MARK: That's really, really cool. Now, I've also heard of this thing called init containers. This confuses me. So can you explain it? 

CARTER: Yeah. So basically, how initialization containers work. When you have basically a pod in Kubernetes, that's the basic application. And a pod is one or more containers that know how to play nicely together. They share an IP stack. They share volumes. They can talk to each other on local hosts. 

But when they start up, they start at the same exact time. There's no guarantee on pod one starts before pod two. Sometimes you need things to happen in sequence before your regular application pods start. Say you wanted to pull data from GitHub. Well, you don't want to write that into your application. That doesn't make sense. That doesn't fit the application. You just expect the data to be there when your regular application containers start. 

So now with initialization containers, you can do that. What happens is you specify n number of initialization containers. They're going to run in order, the order you list them. If any of those fail, your pod's not going to start up. If they all work fine, then your normal application container pods will start as normal. 

So another example of why this would be useful. Say you have your regular application container. It does whatever functionality it did before. Maybe you want to register that with a new service, an external service for monitoring or health checking, whatever it might be. You can put an initialization container or an initialization step and have it register your container without changing any of your application code. 

MARK: OK. Just so I'm clear as well, so that's inside the pod? 

CARTER: It's inside the pod manifest. You write it in the YAML file. So Kubernetes uses a declarative syntax. So you might write down what you want, the state of it. And then Kubernetes will create that state for you. 

So in that manifest file, you're right. There's a new initialization container section. You write just the pod templates. 

MARK: OK. So you have a lot more control now in regards to the order in which these containers come in one versus another. Whereas before, I know I've done stuff where I just run retries. First time it fails. Back off. Back off again. Back off again. Now you can just be more explicit about it. 

CARTER: Right. Well, and talking to people, a lot of people say they want to do basically serial processing. So maybe they have some kind of pipeline going. They have an application that they want running, but they need steps one and two of the pipeline to run. Well, now you can do that with init containers. I think that's my favorite feature from Kubernetes 1.3. 

FRANCESC: So I was checking on GitHub and I saw the issue called init containers. It is labeled stateful apps. What are those? What is a stateful app in the Kubernetes world? 

CARTER: Well, a lot of times, you have applications, like web servers. You can just replicate as many as you want. They don't really matter. You hear people talk about pet versus cattle. So if you have a pet, you care about it. If it gets sick, you want to fix it. You want to help it. You give it a name. Cattle, you're making hamburgers, man. It doesn't really matter what's up there. 

So in Kubernetes, what we have now are pet sets. And basically, what this is is a pet set manages pets. Pets have a unique name, a DNS record, and they're associated with some kind of data. So if they go down, we want that to come back up. We care about it. We care about the order they start and the order they stop. So that's what stateful data means in Kubernetes. 

FRANCESC: So I can imagine something like that being very useful to run databases and things like that, like SQL with replicas. 

CARTER: Exactly. So there's two types of databases that you're going to see commonly with this. There's the quorum type, like your etcd, kind of things, where basically, you need consensus between multiple-- I can't even think of the word right now. 

MARK: Multiple nodes? 

CARTER: Multiple nodes. 

FRANCESC: [INAUDIBLE] Kubernetes. 

CARTER: Right. And then you also have something like a MySQL database, where you might need to attach one NFS disk, and you always want to be attached to that disk. Or always need at least one pod or node attached to that disk. So these are where stateful applications come into play. 

MARK: Does this also account for where you'll always want something to come up in a particular DNS entry? This thing has to always be at this record? 

CARTER: Right. So you're always going to have the same name because you always want to be able to access it the same. So yeah. 

MARK: So you could put memcache there or other things like that as well, where you're like, I always want to be able to find this in one spot. 

CARTER: Mhm. And so one of the complaints I've heard about pet sets, I've seen some really cool demos with it. I just saw a 1,000-node Cassandra demo. 

MARK: Cool. 

CARTER: Very cool. But one of the complaints is people say, well, we could do almost all of this before with the API in 1.2. So we've added another object. Is it necessary? So it seems like it makes it a lot easier. But there's been a little contention on, is this the right way? Is this finished yet? 

MARK: Well, pet sets is still fairly new. So I guess they're alpha. If you play with them, things may-- not necessarily things might break, but things may change as we go along. So there's probably some wiggle room there to find the best case scenarios for those sort of things. 

CARTER: Right. I'm just excited because in 1.2, I was writing a flash card app. And whenever I had a pod that would die or restart, I had to go manually detach the disk. So that's fixed now. Automatically, they have detach controllers that automatically unattach your disk and let it reattach when the pod starts up again. So that's aside from pet set. So just stateful applications in Kubernetes 1.3 are better. 

MARK: Yep. And I guess that also ties back to init containers. You're talking about, with stateful apps, having things come up in the right order really is important. 

CARTER: Mhm. So there's a lot of support around that. Pet sets is a nice feature. I'm sure we're going to see a lot more, in coming months, of people using it and testing it out, seeing what the limits are. 

FRANCESC: Cool. So we've covered a little bit about all the things that you can do, like more nodes. And then you can also have init containers, and stateful apps, and you can run Rocket instead of Docker, and all of these things. Those are amazing. There's one more thing that I saw that Kelsey Hightower had written. It's "Kubernetes the Hard Way." Could you tell us a little bit about that? 

CARTER: Yeah. One, Kelsey's great, like great. He's so good. 

FRANCESC: We agree. 

CARTER: Well, he's just really good at getting in the community and listening to what their needs are. And with Kubernetes, what we're seeing is a lot of people think it's really hard to get started with Kubernetes. Maybe the documentation isn't quite there around the steps to start up a cluster. Or maybe there are a lot of steps to starting up a cluster. 

So what "Kubernetes the Hard Way" is Kelsey just wanted to go and document and say, OK, here's the steps for a basic same default configuration for starting up a cluster. That's it. That's all it is. So now you can go and learn everything that's involved. 

MARK: I guess the pain point before was GKE is easy, right? You push a button, you get a cluster. There are kube-up scripts to firing up a cluster. But I guess that's kind of "magicky," quote, unquote. 

CARTER: Right. It abstracts away the detail so you don't know what's going on in your system. So how do you adopt a new framework if you don't know even how it starts up or how it stops, or what are the pieces that interoperate? 

MARK: Yeah. So I guess looking through Kelsey's stuff, he actually takes you through step by step and shows you everything that you need to do. 

CARTER: Mhm. It's not everything. There's still a little bit more. But this is a great starting point. So now you see the community. There's a SIG on it now, a Special Interest Group. [INAUDIBLE] and a bunch of other really, really smart people are working on, OK, how do we minimize the amount of steps without locking people in and keeping Kubernetes as open as it is? 

MARK: That's fantastic, actually. I didn't realize that SIG existed or just got created. 

CARTER: Yeah. It just got started up within the last month, I think. 

MARK: No, that's great. I mean, that has been a common complaint point around Kubernetes. How do I set up clusters? Why is this so hard? How does this stuff work? And so it's really nice to see the reaction from the Kubernetes community and the authors and the people who work on it going, OK, that's a problem. Let's fix it. 

CARTER: Right. It's fun because Kubernetes is largely community-driven. When you look at the number of commits from external people outside of Google, outside of the big companies, it's exciting. And when you see the amount of interest on Slack in the SIGs on the get issues, it's one of the reasons why I'm really excited about Kubernetes. 

FRANCESC: Cool. So this makes me think about not that long ago-- actually, it might have been almost a year already-- one of our coworkers, [INAUDIBLE], created a-- what was the name? It was like a mini cluster Kubernetes. 

MARK: Yeah. I think he called it a mini cluster. 

FRANCESC: A mini cluster, which I don't know if you've seen it. It's like five Raspberry Pis, one on top of each other. So do you think that the pain he had to go through to make Kubernetes run on that little Raspberry Pi cluster could be less now? How hard or how easy it is to get a Kubernetes cluster started outside of GKE? 

CARTER: Well, there's a joke going around. For all the people with their Pi demos, they're also running like Kubernetes 1.1 because it's too hard to update. 

FRANCESC: OK. 

CARTER: But no. The steps are now getting documented. One of the things "Kubernetes the Hard Way" by Kelsey Hightower, that documents the steps. As the SIG develops and pushes, they're trying to have a short timetable on it. As a develop closer more, it's going to get easier. So I think just having documentation, though, is the first step. And that's an area where we could definitely improve, documentation around Kubernetes in general. 

FRANCESC: So something I've seen in many demos that get people quite impressed is when you update from one image to something else. Migrations in Kubernetes are very, very nice. Is there anything new on that? 

CARTER: Oh yeah. There's a new command. I think it's kubectr rollout status now. So you can actually see what's going on. If you've looked at any of my old demos, I used to run some kind of script. And I would manually do this. Well, now it's just built right into the tool. So you can see, step by step, what's going on. How is your cluster scaling up? How is it scaling down? So that's a really nice feature. 

MARK: Oh, that's cool. So if I'm changing from one image to another inside Kubernetes, I can actually see very easily what's changing? Yeah. I've done the same thing. I've done watch commands that change every two seconds and done get pods just to see which ones are up or not. That's super, super handy. 

CARTER: There's a lot of, again, little features and little commands throughout. There's a new secret. So basically, secrets are sensitive data that you don't want to store in your pod or in your image. Well, now there's a new one for generating TLS certs. So if you want to test something locally, you can just use the kubectl command to create some test certs. And again, this is that ease of use that's going to make Kubernetes the platform to adopt. 

MARK: I'm going to take the opportunity to ask a Kubernetes question since we have you here. This has been covered a bit, but it comes up a lot. So when do I use secrets and when do I use config maps? 

CARTER: OK. Config maps are for string data. And they're basically like, so if I had Nginx config, something that anyone could see. It's not a big problem. But it might vary between two different runs of my container, or two different environments, whether it's production and dev or whatever. 

Secrets are your password, your certs, things that you don't want to hand out. So you're always going to want to use secrets for information that you want to keep. 

MARK: OK. So if I've got my database records, like where's my database, what's its username, what's its password, that's a secret. I want to put that in there. 

CARTER: Definitely the password. I would probably use the username, stuff like that too, or an environment variable. But definitely, the password, you're going to want a secret for that. 

MARK: Absolutely. And then something like an Nginx config or something like an Apache config, whatever, who cares. 

CARTER: Now, another thing that's really cool is config maps, you can notify pods downstream when configs change. So if I change my Nginx config, I can notify a pod downstream. I don't think you can do that with secrets. 

MARK: I don't believe you can. 

CARTER: Right. 

MARK: How does that notification happen? Is that files change, or environment variables just change? 

CARTER: Environment variables and etcd is my understanding. And there's a downstream API for that. 

MARK: OK. Cool. 

CARTER: But yeah. Secrets and configs can all be passed through environment variables. Configs can also be passed command line, I'm sure. And so you have a lot of flexibility when using them. So I try and tell people to use them as much as possible. 

MARK: Yeah. I was chatting with someone about keeping their WordPress config, and whether they should put that in a secret or a config map. And I think we ended up deciding to put it in a secret because it not only contains just basic information about WordPress, but also username and passwords for the database, things like that. And that's actually the WP-config.php file, the whole thing. But that was really cool. I actually hadn't thought of doing stuff like that to really even just configure, just generally, a WordPress install or something like that. 

CARTER: Now, what I want to learn next as I learn how to use Kubernetes in production more is-- so someone actually has to take the secret and give it to the API server. So do you use something like Vault for that? Where do you store that secret initially? It's what I want to know. 

MARK: Yeah. There's a few different interesting tools that could help you do that. I used to do a bunch of stuff with Ansible. It had in-built encryption. So you could do Ansible [INAUDIBLE], like you were talking about. Yeah. It's a good question. Excellent. 

Well, we're starting to sort of head towards the end of our time here. Is there anything else you want to mention or touch on or just plug in general? Maybe if you're going to be somewhere, do something. Have you got anything there? 

CARTER: Nope. I've got an article coming out on the Kubernetes blog in the next few days and on the open source blog, where we interview Joseph Jacks from Kismatic and Apprenda. 

MARK: Oh nice. 

CARTER: He's someone that's really active in the community. So it's cool to see him say why he chose to bet his business on Kubernetes, where he wants Kubernetes to go in the next few months. He's a guy that said 15,000 nodes. Makes me think he's a crazy person. 

[LAUGHTER] 

And what he thinks is wrong with Kubernetes, what could be better. So it's a fun interview. So check it out. 

FRANCESC: Great. Well, we're not going to say goodbye or thank you because we're going to continue interviewing you for next episode. 

MARK: Yes. Next week, we're going to have a chat about what came in 1.3 specifically for GKE. So stay tuned until next week. 

FRANCESC: Thanks again to Carter Morgan to spend this first episode with us telling us all about Kubernetes 1.3. We're looking forward to having him back next week for more about it, specifically about Google Container Engine. 

But before we finish with the episode, we had this question of the week, which is, so with Kubernetes, it's really easy to expose a service. And when you expose a service, basically, you're creating a load balancer. And you get an IP. 

Now, you expose that and people start using that IP. And then you change something. You want to migrate to the new version, and you need to recreate that load balancer. How do you make it so you will keep the same IP? Because that IP is ephemeral, right? I don't want to change the IP and make every single one of my customers, which is, like, two. I don't have a startup yet. But how do I keep them from having to follow with my IPs changing? I want that IP to be ephemeral. 

MARK: Yeah. We don't want that DNS to be changing DNS addresses and waiting for propagation. 

FRANCESC: Not a very good idea. 

MARK: That's no fun. So it's actually really straightforward. We were looking at a blog post that one of our teammates, Terry Ryan, wrote about this. And it's really quite cool. Say you've created that load balancer. You've got an IP address. 

You're able to go into your console networking, look at your external IP address. And it's pretty much-- there's a little drop down that you can change from Ephemeral to Static. And that makes your IP address static, which is great. That makes it belong to your project. That means you have it, you own it. It's yours. 

What's cool from that point is, OK, what happens if I delete my load balancer? I want to make sure I keep that static IP address for this load balancer for this Kubernetes service. So there's a setting inside the YAML that you can set. It's Load Balancer IP. It's pretty much exactly what you would expect it to be. And you can put in the IP address that you want it to have. 

And if you own that IP address, it will give it to you. From there, you can just kubectl apply the service. And that gives you the IP address. From that point forward, if you want to just delete the service and then recreate it, or maybe give it to another service, you can do that. It's pretty straightforward. 

FRANCESC: Nice. So it sounds like the obvious solution, just working, which is always nice. 

MARK: Which is really nice. 

FRANCESC: Very intuitive. 

MARK: OK. Well, thank you for joining me once again, Francesc, for a wonderful episode. Are you up to anything particularly interesting in the next few weeks? Or are you just kind of doing some online content and doing some other cool stuff? 

FRANCESC: I'm doing some online content, working on some new videos that I've been thinking about for awhile. And now that I'm not traveling, I will be working on that. So looking forward to releasing the videos and blog posts sometime soon. What about you? 

MARK: So when this comes out, I will be in Israel. After that, I'm taking a short vacation off to Australia. But then I'll be at PAX Dev later in the month. So if you're going to be there, please do say hello. I'd love to say hi. 

FRANCESC: San Francisco to Israel. Yeah. Australia's on the way. 

MARK: Yeah, sure. Yeah, let's go with that. 

FRANCESC: Absolutely. 

MARK: Let's go with that. It's fine. 

FRANCESC: Cool. Well, have safe trips. And talk to you all next week. 

MARK: See you next week. 
{{< /transcript >}}