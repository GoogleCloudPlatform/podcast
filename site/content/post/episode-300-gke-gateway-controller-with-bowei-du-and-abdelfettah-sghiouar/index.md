+++
audioDuration = "00:36:25"
audioFile = "Google.Cloud.Platform.Podcast.Episode.300.mp3"
audioSize = 87410465
categories = ["GKE", "Ingress", "Service", "API", "Networking"]
date = "2022-04-13"
description = "Hosts Anthony Bushong and Kaslin Fields welcome Bowei Du and Abdelfettah Sghiouar to talk about the Gateway Controller, a new tool that helps developers use the Gateway API in GKE."
draft = false
episodeNumber = 300
hosts = ["Anthony Bushong", "Kaslin Fields"]
title = "GKE Gateway Controller with Bowei Du and Abdelfettah Sghiouar"
image="/post/episode-300-gke-gateway-controller-with-bowei-du-and-abdelfettah-sghiouar/images/hero/hero-EP-300.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/u2uts7/episode_300_gke_gateway_controller_with_bowei_du/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Hosts [Anthony Bushong](https://twitter.com/agmsbusho) and [Kaslin Fields](https://twitter.com/kaslinfields) welcome Bowei Du and [Abdelfettah Sghiouar](https://twitter.com/boredabdel) to talk about the Gateway Controller, a tool that helps developers use the Gateway API in GKE. 

Bowei starts the show with a thorough explanation of how and why the Gateway Controller was developed. Compared to tools like Ingress, Gateway Controller allows engineers to implement more expressive solutions. While providing developers with portability has been an important part of Gateway Controller, it also gives developers freedom to use non-portable features in a structured, consistent environment and helps manage tenancy across different teams. Bowei and Abdel describe the difference between Ingress and Service and how these tools fit in with Gateway Controller. Abdel walks us through how a company would use the Gateway Controller for optimal tenancy management across name spaces and how this is an improvement over Ingress and Service. He gives examples of how companies are using this new tool. 

We hear more about the GKE Gateway Controller and how its fully-managed deployments and integration with other Google APIs make it so easy to use. Bowei tells us how Gateway helps with the unification of mesh and non mesh environments through the standardization of noun describers in both instances. A handy edge to mesh tutorial is available to help developers.

##### Abdelfettah Sghiouar

[Abdel](https://twitter.com/boredabdel) is a Cloud Dev Advocate with a focus on Cloud native, GKE, and Service Mesh technologies. 

##### Bowei Du

Bowei is tech lead on Gateway Controller and a specialist in distributed systems and networking.

##### Cool things of the week

* Strengthening your DevOps muscle [site](https://cloudonair.withgoogle.com/events/strengthening-devops)
 
##### Interview

* Kubernetes [site](https://kubernetes.io)
* GKE [site](https://cloud.google.com/kubernetes-engine)
* GKE Gateway API [docs](https://cloud.google.com/kubernetes-engine/docs/concepts/gateway-api)
* Kubernetes Gateway API [site](https://gateway-api.sigs.k8s.io)
* Ingress [docs](https://kubernetes.io/docs/concepts/services-networking/ingress/)
* Service [docs](https://kubernetes.io/docs/concepts/services-networking/service/)
* From edge to mesh: Exposing service mesh applications through GKE Ingress [docs](https://cloud.google.com/architecture/exposing-service-mesh-apps-through-gke-ingress)
* Google Cloud Armor [site](https://cloud.google.com/armor)
* Kubernetes Slack [site](https://slack.k8s.io)
     * Slack channel: <span style="font-family: monospace;">#sig-network-gateway-api</span>
* GKE Networking Recipes GitHub repo [site](https://github.com/GoogleCloudPlatform/gke-networking-recipes/)
* The evolution of Kubernetes networking with the GKE Gateway controller [blog](https://cloud.google.com/blog/products/containers-kubernetes/new-gke-gateway-controller-implements-kubernetes-gateway-api)

##### What's something cool you're working on?

Kaslin is working on [KubeCon EU](https://events.linuxfoundation.org/kubecon-cloudnativecon-europe/).

Anthony is working on software supply chain security with [Cloud Build](https://cloud.google.com/build).

Kaslin and Anthony are working together on the [GKE Essentials Series](https://www.youtube.com/playlist?list=PLIivdWyY5sqLQ3m7WJDfBdMMqO12Q0vqg)

{{< transcript "[MUSIC PLAYING] ANTHONY: Hello, and welcome to episode number 300 of the weekly Google Cloud Platform Podcast. My name is Anthony Bushong. I'm a developer advocate. And I'm here with my colleague Kaslin Fields. Hey, Kaslin." >}}

KASLIN: Hey, Anthony! I'm so excited to be here today! 

ANTHONY: I don't know if excited is how I feel. I feel immense pressure. Is that probably the right feeling? 

KASLIN: With it being the 300th episode? 

ANTHONY: That's right. A huge milestone. And I've probably been here for only four or five of the episodes. 

KASLIN: Yeah. 

ANTHONY: Not so sure that I'm worthy, but we're going to plug forward anyways. So today we have a couple of guests joining us from the GKE team, both from Developer Relations and engineering, to talk about the GKE Gateway controller. This is a gateway controller that allows users to use the Gateway API in GKE, which is essentially a new and improved way to basically get traffic to your workloads that are running in a GKE cluster so we're excited to learn from the people who have been there since its inception. But first, I think we want to cover our cool things of the week. 

[MUSIC PLAYING] 

KASLIN: So depending on when you're listening to this in April, we had an event called Cloud OnAir, Strengthening Your DevOps Muscle. We'll include the link to that in the description. And you can check that out on-demand whenever you're listening to this episode. And I had a talk in that event titled Running Applications at AUTO Scale. I think it's a very fun title. 

So basically, my talk in that is all about the different tools that Google Cloud has, and kind of some general information, too, about how you can make use of modern tools to get auto-scaling capabilities built into the types of tools that you're using to run your applications. So it's a fun talk. That event also has content on delivery pipelines, site reliability engineering, and automating deployment operations by my fellow brilliant developer advocates Amanda Lewis, Dave Stanke, and Sandeep Parikh. 

Plus, there's a keynote from Aparna Singh, featuring Kerim Satirli-- I didn't actually ask him how to pronounce his last name, I apologize-- but professional developer advocate from HashiCorp, and Dustin Smith, and Victor-- 

ANTHONY: I believe it's Szalvay. 

KASLIN: Szalvay. Thank you. But they've got some nice content in there about what GKE has been doing lately, and DevOps in general, and things you should know about it. 

ANTHONY: I know that's a wonderful lineup, rock stars. And I think to just also go back to dating, to whoever is listening to this, this is April 2022. I don't know how far into the future people may come back to this episode. 

But it's a very exciting time to look at Google Cloud's DevOps portfolio. I think we're doing a lot not only around auto scaling, around security as well. I know software supply chain is a very important topic, given the context of what's happening in the world around us. So I think that, yeah, a wonderful event. With that being said, let's now hop over to our guests and talk about the GKE Gateway controller. 

[MUSIC PLAYING] 

KASLIN: Today we're going to be talking about getting traffic to your workloads in Kubernetes using the Gateway controller in GKE. To get started, let's meet our guest experts, if you would like to introduce yourselves. 

ABDEL: Sure. I'm Abdel. I'm a Cloud Developer advocate, focusing on Cloud-native and Kubernetes and GKE. 

BOWEI: Hi, I'm Bowei. I'm the tech lead on the Gateway controller for GKE, as well as the Gateway API in the open source. 

ANTHONY: Awesome. We're really excited to have you here, Abdel and Bowei. 

I think just to get started, I know that this is-- especially for folks, whether or not they're new to Kubernetes, the Gateway API and Gateway controller is relatively new. So maybe if we could start all the way at the beginning, and talk a bit about what the Gateway API actually is, and sort of where it fits into the context of load balancing and Kubernetes. 

BOWEI: Yeah, so the Gateway API is an evolution of the services-oriented API services with the little S. So Kubernetes has a couple of APIs around services. There is Services with the capital S and then there is Ingress with a capital I. 

Services is a simple way in Kubernetes to describe L4 services. And Ingress is the way to describe sort of L7 services. 

Now, when it first started out, Ingress sort had to come into an ecosystem that was already pretty rich. We had Nginx, HAProxy, many different implementations. And as a portable API, as part of Kubernetes, it was very important to support all of these different implementations. And as a result, it ended up being quite a lowest common denominator. That being said, the lowest common denominator is extremely useful. And the Ingress API got a lot of mileage from that. 

Now, if we looked at the ecosystem of how services work in Kubernetes and Cloud-native, at that time, there were many different implementations with fairly distinct feature sets, which could be roughly grouped into clouds, meshes, and then in-cluster proxy providers, such as Nginx. 

However, what we're seeing is that since 2018, when Ingress kind of became very popular, all these capabilities and implementations have started converging. So the question would be, OK, why not conversion the Kubernetes API itself? We're seeing all of these implementations gradually kind of merge in terms of their capabilities, merged in terms of how they work. We should really think about what is that next step of evolution for how to describe your services and how to describe L7, L4 in a uniform way. 

And that is basically what the Gateway API aims to achieve. It gives the Kubernetes ecosystem a set of nouns to describe your services, whether they're L7, L4. At least that is the goal. 

KASLIN: And the Gateway API is a description of an API, right? It's not an implementation, which is what we're going to be diving into a little bit today. 

BOWEI: That's right. It is a upstream proposal. So it's in the Kubernetes community. And as of this recording, probably around 10 or so providers are all giving their own implementations. And it's kind of cool, because if you follow the upstream API conventions and adhere within what we call the core support, your use of the API and you're declarative configurations should be portable among all the different implementations. 

Of course, this is still a very challenging problem for portability, because it's one of those if you squint problems. If you squint, everything looks the same. But then, of course, when you actually go to do it, you can get hung up on the specifics. 

So the upstream API has walked this very fine line between getting a core support that's portable and then allowing each of the implementations to kind of bring their own special sauce, as, like, add-ons, to the API or extensions. 

ABDEL: And I think some of what you're talking about is from the perspective of the providers, those who are actually developing, whether it's in-cluster proxies or Cloud providers who run/manage Kubernetes. But what does this actually mean, I guess, for users of Kubernetes? What changes for them? What does the experience look like for them compared to, let's say, Ingress, or what they were using prior? 

BOWEI: 

ABDEL: So I think a couple of things. One is it definitely gives you the ability to express more. Simply put, the Ingress API was a very narrow definition. 

That said, what is the lowest common denominator? We only provide that. The Gateway API has taken that lowest common denominator, which has actually moved quite a bit since Ingress was developed, to the next level in terms of all the implementations have all these portable ways to basically do way more advanced stuff. On top of that, we have a structured way for each of the different implementations or environments to kind of bring in a way to interact with all the different descriptions of your applications, such as, like, I'm going to route store to one service and home page to another service, and add policies on top of that. 

So one of the things that we found when we were talking to Ingress users was that a lot of times they like the portability-- that was actually a huge plus for them-- but they also did not want to be prevented from using, for example, non-portable features if they wanted to. And it was very often to see that people would use Ingress, and then kind of pop the lid off a little bit, and then also put in the non-portable bits. But that non-portable stuff that people found extremely valuable was not structured in any way and it was not consistent across the ecosystem. 

And that's basically what we are trying to do with Gateway is to give a structured, consistent experience for the implementation-specific bits that people love to use that is, in a way, the concepts are portable when you go from one implementation to another. So for most users, if you stay within the core of the API, no problems. You can just use whatever cloud implementation proxy you want. When you start going to the sort of proxy-specific or implementation-specific features that people also love to use, you will find that the experience will be consistent when you move to different providers, just that different providers have different capabilities. 

KASLIN: And I want to hop back actually to something that you were talking about a minute ago. I think for a lot of folks who are new to Kubernetes or aren't very familiar with it maybe, or even people who've been using it for a long time sometimes, the difference between Services and Ingress can sometimes be a little bit confusing. You mentioned earlier that Services really are for L4-level networking versus Ingress, which is more for L7. But can you dive a little bit more into how Services and Ingress, from a Kubernetes perspective, are different and kind of how Gateway fits into this? 

BOWEI: Yeah, so Services started out as, OK, we will offer an extremely basic way to-- once you've grouped your workload-- let's say you have a deployment, a bunch of containers-- it wants to expose a network service. OK, just slap a service on top of it. Well, what is that? Well, the most basic thing you can give is an IP and a port. And that's it. And if you send stuff to the IPN port, it goes to the back end. That's basically like the Model T of network services. It's like you can have anything you want, but it's going to be black. 

What people have found is that, hey, this Kubernetes API ecosystem is great. I would love to integrate more things into it. And one of the most common things I do is I actually set up a L7 proxy. Do I want to set up an L7 proxy kind of in my own specific way that's kind of not Kubernetes-native, it can't really reference Services? There's a lot of things that need to bridge the Kubernetes world. 

For example, speaking in terms of resources and YAMLs and all those configurations, there's a uniform way to identify a pod, a container. All the nouns in the Kubernetes world, with the world that, for example, if I was just configuring a proxy by myself, the two worlds didn't know about each other. At least the proxy side certainly didn't. You would just be like sending things to just random IPs and kind of have to stitch things together yourself. 

So that's where the Ingress API came from is, like, I would love to use this Kubernetes API to describe my L7 services as well, L7 being HTTP with different paths. And then, of course, since L7 is at a higher level, it will stitch together multiple services together to form a composite network service. That was sort of the evolution of the original Services, which is like almost no features. I put a little asterisk there, because we did add some stuff there. 

But really, where the fully featured stuff happens is at the L7 layer. And the evolution towards, hey, Kubernetes ecosystem is great, let's use it to describe even more things. So Gateway is sort of looking at that and sort of refactoring it, given that along the way, Services started off as a very simple thing, like the Model T, but then we had to bolt on session affinity. We had to bolt on various features to Services itself, because, of course, people had more requirements. 

Same thing with Ingress. We had to kind of, after the initial design, bolt on things. Gateway's sort of like a refresh to incorporate both of them and give a cleaner, more orthogonal model, so that things are separated, things are easier to understand, and also more expressive and more powerful. 

ANTHONY: And I definitely want to spend some time-- we talked a little bit about how there's implementation-specifics. And I know that in GKE, there's the GKE Gateway controller. So definitely want to dig into that. 

But I have one last question on just the Gateway API as a concept. So you're talking a little bit about expressiveness and you're talking, in the Gateway API, we're looking at a new set of resources that folks have to learn. So maybe if we could just summarize, what are some of the new things that customers can do with Gateway, such as what does expressiveness mean for them? What can they accomplish that they couldn't do prior? 

BOWEI: Yeah, that's a good question. It's like, why does it require new set of resources? Could we have extended the old ones? Well, there were a couple of other things that since the initial design of Service and Ingress that has come up as a major requirement that wasn't there when those things were designed. 

So one of the things that Gateway sort of tackles head on is the ability to sort of shard your overall service across multiple namespaces to manage tendency. What we were seeing is that as Kubernetes became adopted, they became adopted potentially with multiple teams owning a single cluster, or maybe someone had a service that they wanted to basically be composed of different teams that kind of are cooperating to create something. 

For example, let's say you have a website, and you have someone managing the store, and then you have someone managing the front page. And they are different teams. They are deployed in different namespaces. They have different requirements. Maybe you give them different permissions. 

So one of the key pieces of the design of the Gateway resource model is to allow crossing namespaces and crossing tenants, and really precisely define what it means when you incorporate all these teams back together to, for example, serve your main website. 

The Gateway resource model is divided into gateways, which is like the top-level thing, and then routes, which might be owned by application teams. And in fact, we are in upstream discussing ways we can have even further delegation or inclusion to express even more team-oriented resources. 

ANTHONY: Right. And this gives us the opportunity to apply things like role-based access control at a more granular level across these sets of resources, right? 

BOWEI: Precisely. Yeah. So it's an interesting thing that role-based access control basically implies a particular way to divide up your resources so that your resources match the roles that you're thinking of. 

ABDEL: Another way to think about it is, also, in the Gateway API world, it's fairly similar in the way it works as we did with storage, where you have the admins of the cluster providing you with a class, which maps to a specific type of storage. So in the Gateway API, there is a gateway class, which maps to a specific type of load balancers. Then you have the gateways, which define the actual load balancer. Then the apps or the different tenants can actually tag along or map that specific gateway using the HTTP routes. And those can just live across multiple namespaces. So then you can control who can deploy what, which you couldn't do, obviously, with, like, Services and Ingresses. 

KASLIN: And, Abdel, I know that you have some great experience working with customers who have encountered these types of situations. Is there anything else you want to add on about how you see customers adopting these types of new features? 

ABDEL: Yeah, there are actually a few things. I'll go back a little bit to the Ingress topic. I know we covered it a lot. 

But two key challenges I've seen, actually, with Ingress. A, is the fact that when the Ingress API was designed, it was designed for this most common denominator. But then in order to evolve it and implement extra features, we had to build quite a lot of annotations and CRDs. And then at some point, it became such a way that if you want to deploy a complex HTTP web app, you have to deploy, like, four or five objects. You have a front-end object, a front-end config, a backend config, et cetera, et cetera. So if you want to use Cloud Armor, you have to pull another object. So it became this whole set of objects you have to deploy with a bunch of annotations in the ingress, which makes it just-- it's too many YAML files, essentially. 

And then the other thing, also, is that the English API did not support some very basic, like, for example, header-based mapping or header rewriting, which pushed some customers actually to not even use the GCE Ingress, or the GKE Ingress, which is maintained by Google, and use third-party Ingress objects, such as Ngnix or HA-- Bowei mentioned those before-- because those can do specific header manipulations or traffic manipulations that our Ingress cannot do. 

Bowei mentioned, also, is that the way I like to describe it is the separation of duty, is the fact that you can actually separate how a load balancer is deployed from how it's consumed. And in the Gateway world, that's essentially the Gateway object versus the HTTP routes object, which can be deployed across multiple namespaces. So if you have a multi-tenant cluster, you can just allow your developers to deploy the HTTP routes that says, OK, well, I want this application to be exposed behind this load balancer, which is already deployed by an admin for me, so I don't have to take care of that. And probably there is an SSL certificate and everything there. And then I just define the rules that says, OK, slash star goes to this back end slash whatever goes to [INAUDIBLE] 

But then there is an additional thing, also, that is very cool, in my opinion, and very actually powerful in the Gateway world is there are a lot of traffic routing that is native to the HTTP route. So you can do weight-based routing or header-based routing directly using the HTTP route instead of just running an in-cluster proxy to do that. 

KASLIN: So this kind of has a potential to streamline the process for developers, as they're thinking about how they're actually going to get traffic to the applications that they're working on. 

ABDEL: Exactly. 

BOWEI: I don't guarantee less resources, though, Abdel. I'm sorry. 

[LAUGHTER] 

ABDEL: I know. I know. I know. But it's still less verbose in my opinion. It's still a little bit less [INAUDIBLE]. Or at least if you can split those resources across multiple Git repositories, that's already good. 

KASLIN: It has potential 

BOWEI: Yeah I think the key takeaway that we are trying to push is that it is going to be a common vocabulary across the ecosystem. So it won't be that if you use this one flavor, then you do this one thing. You use a different flavor, you do a different thing. It will be a standardized way, so that people don't have to learn things again and again and again when they go between environments or use cases. 

ANTHONY: And, Abdel, some of the things that you were talking about previously with ingress, like front-end config, backend config, these were mostly specific to GCP, am I correct there? 

ABDEL: Yes. 

ANTHONY: Yeah. Right. So we're like trading then, we're getting portability, where even though we may have a new set of resources with Gateway, that's now consistent across the implementation. 

ABDEL: Exactly. Precisely. 

ANTHONY: Speaking of implementations, I want to understand a little bit about GKE's specific gateway controller. So I know that there are various load balancers that you can provision in GCP. Let's talk about what that looks like as far as what capabilities it brings to GKE users. 

BOWEI: So I think the biggest part is that Google Gateway implementation for GKE is, of course, conformant to the external OSS upstream, but it is also fully managed and hosted. So it's very much ease of use. You don't have to manage a physical deployment. You just basically turn it on and it's there. And basically, it's just got deep integration into the Google APIs and infrastructure. 

What we want is, basically, if the user thinks of L7 routing, in the Kubernetes context especially, add a gateway, that's it. That's all they have to do. They don't have to do anything else. 

KASLIN: All right. So there's one thing that's been on my mind as we've been talking about this, which is we were talking earlier about how Ingress kind of came about and some of the ways that people have been solving some of the problems which are now kind of converging into this unified set of features which we're creating kind of a definition of with the Gateway API. And one of those implementations that people have been using is service mesh which is, of course, a very popular area. Service meshes do a lot of things. And I was wondering if you could talk a little bit more about how Gateway API relates to the world of service mesh. 

BOWEI: Service mesh is like if you looked at that diagram of, oh, the cloud providers are here, the proxy [INAUDIBLE] here, and the service mesh. It used to be fairly disjointed. But I think what Gateway gives is a unification of the set of nouns for describing things like routing, things like policy, and how the nouns interact with each other, how for example, if I had described in my application that I can use it in a mesh context, and, for example, I'm receiving traffic from outside into a ingress with a little I context. So that's something that we're looking to unify in upstream. 

And I note that Istio, right now, has support for Gateway API types. I've also heard that SMI is looking at the types as well. Maybe early days. But it's like everyone's using the same nouns. Everyone's using the same way and kind of design template for describing policies. 

You can imagine a world where all these things can be mixed and matched, and you don't have to learn a different set of APIs, a different way to interact with your configuration to describe things that can move between these two worlds. And lots of people-- we've seen very common use cases, that they have a mesh, and they want to expose some of those services in their mesh to the outside world, which is called edge to mesh or ingress plus mesh. And that is possible very easily with the Gateway API. You can imagine, you just write a particular Gateway class that says, hey, this class takes things from outside, but it also routes it into the mesh. And then it would just be this one set of configuration to describe your applications. And that's it. 

Just based on the Gateway type, which is the class, you can just enable both of those worlds at the same time. And because the two worlds speak the same language, they use the same nouns, they use the same APIs, you don't have to duplicate anything. You just use the same thing. You describe your service. And now it's part of a mesh, part of outside, both, or one or the other. 

ANTHONY: Speaking of edge to mesh, before we got started today, actually, Abdel, you were telling us about a tutorial that we have that I wasn't familiar with. Could you tell us a little bit about the tutorial? And we'll make sure that a link to it is in the description for this episode. 

ABDEL: There's a page in our documentation that we called edge to mesh. And I think it was Mark Church who came up with the name. 

So just to explain a little bit what was the motivation behind that. Initially, when Istio was open-sourced, if you would deploy Istio without touching anything in the configuration, so by default, it will expose the Istio ingress gateway behind an L4 load balancer, which makes a lot of sense. The Istio ingress gateway itself is a proxy. So you would put it behind an L4 load balancer. L4 load balancer in GKE are passed through, so traffic gets to the proxy. They get terminated, SSL, offloading, et cetera, and then forward it back to the mesh. 

But then our L4 load balancers are regional and they don't have the same capabilities that the L7 load balancers have. So we started to have customers saying, well, now I want to use Cloud Armor. Well, Cloud Armor is only supported in GCLB. We want to use disable HTTP. Well, disable HTTP is only supported in GCLB. And so that's when we came up with this guide, which was, OK, can we deploy the Istio ingress gateway and then expose it behind an L7 load balancer so we can leverage all these capabilities that the L7 load balancers give us? And that's what edge to mesh is essentially. 

KASLIN: Awesome. I feel like it's really interesting to get a view into these different use cases, because I know that I've struggled over time to understand how these different ways of interacting with your workloads in Kubernetes fit together and what use cases work for the different types of tools that we have. So I feel like I understand a lot more of that after this conversation. 

ANTHONY: So, Abdel, you mentioned about, initially, the Istio ingress gateway would be behind an L4 load balancer that's regional. I know our L7 load balancer is global as well. And I know Kaslin also gave a wonderful keynote at KubeCon around multi-cluster and the direction where that's going. 

So a leading question. The GKE Gateway controller. Can we use this in multi-cluster configurations as well for people, like, let's say, trying to have a global distribution of clusters? 

ABDEL: Yes, pretty much. One of the Gateway classes that the Gateway API for GKE gives you is multicluster ingress. So there is a Gateway class for multicluster ingress. And you can just leverage that. And typically, how that would look like is multiple GKE clusters across multiple regions, with each GKE cluster having its own local mesh with its own local control plane. You can actually connect those meshes together. There is a way to create one logical mesh across multiple clusters in multiple regions. And then you would just use the Gateway API with the multicluster Gateway class to expose all the Istio ingress gateways behind a single global load balancer. 

KASLIN: From what I've been learning about the Gateway API and multicluster, over the years, multicluster has been a very interesting area that a lot of users have really wanted. But I think a lot of the features have been slowly developing over the last several years. So I feel like Gateway API is-- with all that we know now about the kinds of features that users actually need for managing ingress to their applications in Kubernetes, we're entering an interesting stage for things like multicluster, where Gateway API enables some new use cases that I think will be very interesting and worth exploring in more detail beyond this conversation. 

ANTHONY: This has been a great conversation. I'm definitely learning a ton as well, Kaslin. So I think for folks who are listening, there's the edge to mesh guide. We'll share the link for that. Abdel, anywhere else that you would recommend where people can go to learn more? 

ABDEL: Yes, there are two things I encourage people to check. One of them is the landing page for the Gateway API on GKE. It has, actually, a really good guide describing that separation of duty we've been talking about and how the Gateway API can be used from an organizational perspective. How can you organize your teams? And how do you use the Gateway API in a multi-tenant environment? There are multiple use cases. So I encourage you to check those. 

And then we have a GitHub repository under the Google Cloud Platform org called the GKE Network Recipes. So that's a GitHub repository we've been working on, where we provide recipes. And each recipe is actually a full-blown tutorial that explains how you can deploy and expose an application on GKE using almost all of our APIs. So using the built-in native service APIs, the multi-cluster service APIs, which are actually specific to GKE, multicluster ingress, ingress, and the Gateway API. 

So we are building those recipes as we are talking. Each recipe is like a tutorial you can go through if you want to understand the details, or we provide the YAML file if you just want to customize and deploy it. We'd like a simple app, like a demo app. And we are still building those as we go. 

So feel free to check it out. Open an issue if you have feedback. Or if we are missing something, just feel free to open a issue. 

KASLIN: So if you want to dive deeper into GKE networking and actually see some code, see how it works, the GKE Network Recipes repo on GitHub is a great place for that. 

ABDEL: Thank you. 

KASLIN: Is there anything else that we haven't covered yet today that you want to go over? 

BOWEI: Give it a try. And I think the barrier to entry should be pretty low in terms of trying Gateway, both in GKE and off of GKE. And it's an upstream project. We really appreciate feedback from users. For the most part, it's going to be developers talking in the chat. But we really value feedback. 

So just give it a try. Let us know your use cases. Does it make sense? Does it not make sense? 

KASLIN: Always love to hear from users. It's very important. So that was an awesome conversation. 

ANTHONY: I will definitely, when talking about services or Ingress, I think, Bowei, I also learned that I should be saying lowercase or uppercase. 

KASLIN: Yeah, that was a really good tip for communication. 

ANTHONY: We should just standardize that. Yes, we're here to talk about the Gateway API today, but also, just how we should be talking about networking in general and Kubernetes. 

KASLIN: Yeah, because, wow, what a topic. So thanks so much for being on. 

ABDEL: Thank you. 

BOWEI: Yeah, thanks for having me. 

ANTHONY: That was a really insightful conversation. I love being able to talk to folks who worked on a technology from its inception, and also, to catch it so early on. I think that we're excited to see how GKE users adopt the Gateway API across their various workloads and how they actually structure their cluster topology, whether it's single-cluster, multi-cluster, whether they're in [INAUDIBLE] service meshes. There's just a ton. 

So really excited to see where that goes. And, Kaslin, I'm curious to hear what stood out to you. I think we covered so many topics that I just recapped. But interested to hear what stood out to you. 

KASLIN: There's a couple of things in particular that really stood out to me. One is getting the history of where this came from and how it's developed. I really loved hearing the story about how folks needed this, users needed solutions for their L7 networking and ingress, with a little i, and hearing how they came up with these various solutions that have kind of converged onto a set of features. I think that's a pretty interesting look into how Kubernetes itself has been maturing over time. 

I've seen a few other spots in the Kubernetes community and the Kubernetes technology, where things like that have happened, where users have needed something. The initial implementation was really more of a conceptual thing, like we know people will need this in some form. So it wasn't really perfect the first time, but it's been iterated upon. And so Kubernetes is reaching this really interesting level of maturity now, where we have these solutions that are based on real world use cases and real world solutions. So I'm really excited to see where Gateway API goes from here. 

And the other thing that stood out to me was I was really excited that they answered my question about services versus ingress, because honestly, the first time I heard about ingress in Kubernetes, I was really confused, because I'd only ever really needed services. And when you do tutorials and stuff, the way that you're generally taught at first to interact with your workloads is through services. So when this ingress thing came up, I was like, why is this different from services and why do I need it? And hearing that from these folks who understand it so deeply, I definitely learned a lot that I'm going to have to review over the next several days to really internalize. 

ANTHONY: I love that as well. I think another thing I found confusing when I first started working with Kubernetes is the concept that ingress can be totally different things. So I think Abdel talked a little bit about how it could be a cloud provider's load balancer, could also be an in-cluster proxy that implements some of what you would define in ingress from routing and things like that. So I really appreciate there was definitely some level setting that is super helpful, especially if folks are listening to this conversation still pretty new to Kubernetes or GKE. 

KASLIN: Or networking. 

ANTHONY: Sure. Or networking. 

KASLIN: Networking is so intimidating. 

ANTHONY: Let's go all the way back. I think, for me, my favorite part of the conversation was the topic of separation of duties. And I actually found that interesting from both the provider perspective and the end user perspective. Folks are able to build their own functionality by just adhering to the core standard of the Gateway API. And then maybe they have implementation specifics. That's really great, because it feels like we're no longer trying to do this in a single resource, and again, boil down to the lowest common denominator. But then for end users, they get to, again, apply role-based access control. And these resources really start to map to the roles that they designate for who has access to the cluster and can do things, but also, just to predecessors. Like storage classes and volumes already kind of model success with the separation of duties. So I think that was great. And definitely excited for people to try this out. 

KASLIN: Useful and functional. 

ANTHONY: All the things. All the descriptors. 

KASLIN: And speaking of trying it out, we've got a variety of links that we talked about during the episode Make sure that you check them out in the description of this episode if you want to actually be able to click on them. But a few of those, we've got the GKE Network Recipes GitHub repo that we talked about, which is a great resource for getting hands-on, looking at how it actually works to implement some of these networking solutions that we were talking about. And it's got a good variety of networking solutions as well. 

And then we talked about the edge to mesh tutorial, which Abdel taught us more about. It sounds like it's a really useful hands-on guide to some of the things that we were talking about in the episode. And the Gateway API SIG page in the Kubernetes website. Got that link. 

And then Bowei was also mentioning how you can talk with the team, because this is an open source project. They're very open to hearing from users. They really need to hear from users, because when you get deep into making these things, sometimes you forget what it's like to actually use them. So they would love to hear from you. Or if you have an issue with it that you would like to help fix, you can also start contributing. 

So you can find them in the Kubernetes Slack, slack.k8s.io, in the SIG-Network-Gateway-API channel. They have their own channel for the Gateway API. So if you search for Gateway API in the channels, you should be able to find it in the Slack. And we also have a direct link, which I'll make sure that we get into the description. 

ANTHONY: Ton of great resources. I definitely want to give a shout-out to edge to mesh. I love that guide. I think it's one of our most thorough guides and tutorials, whatever you want to call them. And it's a culmination of a lot of good work, as Abdel mentioned, from Mark Church, who is a product manager and was also involved very early on with the Gateway API, as well as some of our engineers in the field. I know Alex Mattson, one of our best around Kubernetes and working with customers, also contributed a ton to it. So shout-out to them. It's definitely a worthwhile tutorial and guide. 

KASLIN: You can't see it, but I'm clapping. 

ANTHONY: I am also clapping in my heart. Cool. OK, well, I think definitely tons of resources. 

I want to pivot before we wrap up and just hear a bit what you're working on, Kaslin. 

KASLIN: Ooh, we are deep into KubeCon EU preparations at the moment. So that's exciting. I'm not speaking at KubeCon this time, but I will be there in person in Valencia. And a lot of other folks from Google will be as well. 

We aren't going to have a booth this time, unfortunately. But like I said, there's going to be a lot of folks from Google there. So if you want to connect with us, definitely do. We're going to have a Slack channel probably in the KubeCon Slack, which I think is part of the [INAUDIBLE] Slack. I'm not really sure. I'll figure that out. 

But if you want to connect with us, whether you're virtual or in person, there will be ways for you to find us. 

ANTHONY: And not to play down your accomplishments, even though if you're not speaking at KubeCon EU, we did just give a keynote at the previous KubeCon. So I also recommend that people check that out, which we talked about earlier. 

KASLIN: And we have a lot of Google folks, by the way, that are giving talks-- 

ANTHONY: Oh yeah. 

KASLIN: --at KubeCon. 

ANTHONY: There you go. And even a Gateway API talk from one of our engineers. 

KASLIN: Ooh! 

ANTHONY: What has been keeping me busy as of late? I've been working a lot with Cloud Build on some software supply chain security content, some awesome things for folks who are listening to this if you want to create attestations and actually automatically prove that your artifacts, whether it's a container image or what have you, was built by Cloud Build, that build provenance is actually available now in Cloud Build, and is easy to ensure that your artifacts basically have that proof that they were built by your pipelines or your builds and not by a harmful third-party actor. 

So I think some of the things that have been challenging just from the past when I've worked with folks is just understanding the concepts, and also just looking at what that barrier to entry is like. And I think Cloud Build is doing a lot to just make security easier to implement with built-in features. So build provenance, but also a lot of other things. Yeah, so excited to slowly release some of these things to the public. 

KASLIN: And I want to throw in one more shout-out here, because Anthony and I are working on this together, which is the "GKE Essentials Series" on the Google Cloud Tech YouTube channel. I think that's the name of the channel. 

ANTHONY: That is. 

KASLIN: So we're continuing to work on stuff for that. So definitely watch out for more GKE content on the Google Cloud Tech YouTube channel. And check out the playlist of the "GKE Essentials" YouTube videos that we already have out there. 

ANTHONY: I wonder what gave away that we are both big fans and users of GKE. 

KASLIN: I wonder. 

ANTHONY: But yes, yeah, it would be wonderful if you all would check that out. No pressure. 

With that said, I do want to thank you all for listening. Milestone episode number 300. I hope it lived up to the hype. 

KASLIN: 300! 

ANTHONY: And if it didn't, well, we'll have a 301st episode, where maybe the next host can carry it in to the next 100 episodes of the podcast. But we'll see you all next time. And appreciate you spending this time with us. 

KASLIN: Yeah, thanks so much. 

[MUSIC PLAYING]