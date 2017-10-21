+++
audioDuration = "00:33:56"
audioFile = "Google.Cloud.Platform.Podcast.Episode.99.mp3"
audioSize = 49099960
categories = ["Firebase", "Cloud Functions", "Serverless"]
date = "2017-10-18T01:07:49Z"
description = ""
draft = false
episodeNumber = 99
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Cloud Functions and Firebase Hosting with David East"
image="/images/icons/firebase.png"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/XXHxWRWShoQ"
redditLink = "https://gcppodcast.com/post/episode-99-cloud-functions-and-firebase-hosting-with-david-east/"
+++

Firebase Developer Advocate [David East](https://twitter.com/_davideast) joins [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic)
to discuss the mega powerful combination of Firebase Hosting and Cloud Functions for Firebase!

<!--more-->

##### About David East

[David East](https://twitter.com/_davideast) is a Developer Advocate for Firebase at Google. Web die-hard.

Also possibly the shortest bio on the podcast.

##### Cool things of the week

- Introducing custom roles, a powerful way to make Cloud IAM policies more precise [blog](https://cloudplatform.googleblog.com/2017/10/Introducing-custom-roles-a-powerful-way-to-make-Cloud-IAM-policies-more-precise.html) 
- Serverless Transfer Learning with Cloud ML Engine and Keras [blog](https://medium.com/google-cloud/serverless-transfer-learning-with-cloud-ml-engine-and-keras-335435f31e15)
- Five things learned using terraform to manage cloud infrastructure [blog](https://medium.com/google-cloud/five-things-learned-using-terraform-to-manage-cloud-infrastructure-5ad0d4aa0648)

##### Interview

- Firebase Hosting [site](https://firebase.google.com/products/hosting/) [docs](https://firebase.google.com/docs/hosting/)
- Cloud Functions for Firebase [site](https://firebase.google.com/products/functions/) [docs](https://firebase.google.com/docs/functions/)
- Cloud Functions for Firebase Sample Library [github](https://github.com/firebase/functions-samples)
- Serve Dynamic Content with Cloud Functions [docs](https://firebase.google.com/docs/hosting/functions)
- Cloud Hosting: Deploying Your Site [docs](https://firebase.google.com/docs/hosting/deploying)
- Express Javascript Framework [site](https://expressjs.com)
- Cache Control Headers [w3c](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)
- Server-side Rendering with JavaScript Frameworks [youtube](https://www.youtube.com/playlist?list=PLl-K7zZEsYLkbvTj8AUUCfBO7DoEHJ-ME)
- Node.js apps on Firebase Hosting Crash Course [youtube](https://www.youtube.com/watch?v=LOeioOKUKI8)

<div style="text-align: center">
  <a href="https://firebase.google.com"><img src="/images/icons/firebase.png" style="margin: auto;"></a>
</div>

##### Question of the week

How do I learn more about Google Cloud? I love the docs, but I'm looking for something more like online classes - what can I do?

- The Google Cloud Coursera Course, Starting Oct 16 [site](https://www.coursera.org/googlecloud)

##### Where can you find us next?

Francesc is currently presenting at [Google Cloud Summit Paris](https://cloudplatformonline.com/Summit-Paris-2017.html) right after speaking at [Velocity London](https://conferences.oreilly.com/velocity/vl-eu/public/schedule/detail/63245), and then heading back to Paris for [dotGo](https://www.dotgo.eu).

Mark is heading to Australia for [GDG Devfest Melbourne](http://gdgmelbourne.com/) and [Game Connect Asia Pacific](http://gcap.com.au/) and will be hanging out at [Unite Melbourne](https://unite.unity.com/2017/melbourne) and [PAX Australia](http://aus.paxsite.com/).

{{< transcript "FRANCESC: Hi, and welcome to episode number 99 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague, Mark Mandel, who is breaking the mics." >}}

Hi, Mark. How are you doing? 

MARK: Apparently, being actually extra-klutzy today. I am well. How are you doing, Francesc? 

FRANCESC: Very, very good. Very excited to have David East back. 

MARK: Yeah. He popped in a little while ago for a little segment, but now we actually have him for an entire episode. 

FRANCESC: Yep. And we're going to be talking about cloud functions. And specifically, cloud functions for Firebase and Firebase Hosting, which basically allows you to do all of the serverless. 

MARK: Yes. And then after that, we're going to sit down, and I'm going to ask the question-- I like Google Cloud, but I would like to learn maybe something with an online class. Can I do that? That would be cool. 

FRANCESC: Yeah. Like, basically, I love trainings and stuff like that. It is better than just reading documentation. So we checked. And there's some really cool things that actually also are new. So definitely, checking it out. But that will be at the end of the episode. Before that, we have our cool things of the week. 

The first one, it is something quite cool. It is related to Cloud IAM, so Identity and Access Management. And it is the fact that now you can define your own custom roles. Until now, we have had roles like-- a long time ago, we had like project owner, editor, and viewer. And that was pretty much it. 

And then we started having things like, now you can be an App Engine editor, or like for specific things. You can write into Cloud Storage or stuff like that, but not read. That doesn't make much sense. You can read, but not write, stuff like that. 

Now what you can do is you can actually create new roles that have specific permissions and then apply those to your users. So you can create new ones, which is really powerful. Because in your organization, you may have someone that should be able to do something really specific, and you want to allow them to do that and just that. 

MARK: It's nice. Yeah. 

FRANCESC: Just like things people need. So it's good it's there. 

MARK: I really like this for ongoing maintenance, too. 

FRANCESC: Yeah. 

MARK: As new products come out, or maybe you realize you missed information across a large swath of users, if you assign them that role, then you can just change that role and that gives you a lot of flexibility, too, going forward. 

FRANCESC: Did you say a swath of users? 

MARK: Swath. 

FRANCESC: That's such a cool word. Very good. 

The second cool thing of the week-- it's something that is really, really cool. It is mixing the two hot things of the year. 

MARK: Yeah. 

FRANCESC: It's mixing Cloud ML, so machine learning, with serverless. So the title of this Medium blog post, it's "Serverless Transfer Learning with Cloud ML Engine and Keras." 

And it is really interesting from at least the point of view of transfer learning. Transfer learning, if you don't know what it is-- 

MARK: No idea. 

FRANCESC: Basically, it is you're able to learn things better once you know all the things. That's a whole point. 

If you know how to play tennis, learning how to play table tennis, it's easier. So that's basically the whole idea applied to neural networks. So the idea here is that they use inception, I think. Yeah, they use inception, which is a neural network that has been trained to recognize a lot of things. That's basically what we use internally for Google Photos. Not the same, but we use something quite similar. 

What you can do is draw the last part of the neural network, and then retrain it to learn something slightly different, like to train is this an elephant, or things like that? Specific things that are not necessarily what the neural network was designed to. So you can adapt it to your use case. 

So he talks about how to do this in Keras. Keras is just another machine learning libraries. Not TensorFlow. It's Keras. It's a different one. 

And the cool thing is that then what they do is-- OK, so now that we've designed this neural network, how do we train it? And rather than training it locally, what they do is they use Cloud ML Engine. And Cloud ML Engine, that's a serverless part of the thing. You just send it there, and it's trained. You don't need to care about how many machines are running or anything. It just happens. 

And not only that, but then afterwards, once you have the model, you can just click a button and start serving it. So then you also have serverless predictions. So it is all serverless and all machine learning, and it's an awesome blog post. So go check it out. 

MARK: It's also written by a community member. I'm going to massacre this person's name. 

FRANCESC: Let's see. 

MARK: Hayato Yoshikawa. 

FRANCESC: I'd say that's a pretty good effort. 

MARK: Yeah. So it's pretty good. And speaking of community articles, I've got a second one here from-- this is probably easier, Mark Betz, SRE at Olark. He has an article written called, "Five Things Learned Using Terraform to Manage Google Cloud Infrastructure," or even just cloud infrastructure actually. 

So if you're not familiar with Terraform, it's an automation solution for managing infrastructure in the cloud. I love automation. I could go on about deployment manager, things like that. He's basically written down five different things that he thinks are good best practices for using Terraform with Google Cloud and some practices that you can take advantage of there. 

It's worth having a read to see if it's going to apply to you. I always advocate that people use automation when setting up their cloud infrastructure, because things go wrong and it's always good when you can tear them up and tear them down easily. So yes, go have a read. 

FRANCESC: Cool. It's a great blog post. But my favorite part, do you know what it is? 

MARK: What's that. 

FRANCESC: It's Mark's bio. He's SRE at Olark, husband, father of three smart kids, two unruly dogs, and a resentful cat. I want to meet that guy. 

MARK: I just assume all cats are resentful. 

FRANCESC: Wow. 

MARK: I have biases towards dog. I'm sorry. 

FRANCESC: Dog person. 

MARK: Yeah, I'm a dog person. 

FRANCESC: Great. So I guess it's now time, after judging dogs and cats, to go talk with David East for Cloud Functions for Firebase and Firebase Hosting. 

MARK: Let's do it. 

Today, I am very pleased to announce yet another developer advocate at Google joining us today. They're not from cloud specifically, but we'll let him talk about that. David East, thank you so much for joining us. How are you doing today? 

DAVID: Doing great. 

MARK: Excellent. Thank you so much for joining us today. We're going to have a chat about cloud functions and Firebase Hosting. But before we do that, why don't you tell us a little bit about what you do at the Googles? 

DAVID: So as you probably know, Google is a search company. You just go to a website and type in what you want to learn. But it also does other things, like cloud-based stuff outside of Google Cloud. So I work on Firebase, which is a mobile app platform for Android, iOS, and web. And I primarily work on the web side of things. 

So I work on things like the real-time database, which is a way for you to store and sync data in real time without having to run your own server. Cloud Functions, which is a way of writing server code without having to have a server. And also, Firebase Hosting, which is, really, a first-class web-hosting experience that's kind of built for performance. 

FRANCESC: Cool. So we've had many-- well, many. A bunch of episodes on Firebase, let's say. We even had once this guy called David East that answered a question of the week back then in episode 15. 

DAVID: I wouldn't trust him. 

FRANCESC: And the thing that we want to talk about today specifically-- it's two different things. One is Firebase Hosting, which you mentioned real quick right now, and cloud functions for Firebase. And I don't really know anything about any of those. 

I know about Firebase, like the database and authentication, which is really cool, but not really Firebase Hosting. So why don't you tell us a little bit about. What is it really? 

DAVID: Firebase Hosting is kind of like-- it's really near and dear to me, because I joined Firebase back in 2014 before it was at Google. And my first project was actually to help ship Firebase Hosting. So it's kind of like a special thing for me. And when we were coming up with the idea for Firebase Hosting, we had a lot of people at the time who were using real-time database and authentication to build their apps, but they didn't really have any place to host them. 

So if you're a web app, and we had a lot of people reach out and be like, hey, can you make this any easier for us? And so rather than just kind of creating a place you can throw up your files, we kind of thought, what could we do to make hosting not just easy for deployment, but also like really fast? 

So what we did was we came up with this service where you pretty much install a command line using NPM. You do a little initialization. But then with just one command doing Firebase deploy, we will automatically just upload those files and we will deploy them out onto our server. But we don't actually serve from the server because we're backed by a CDN. 

So you get low latency all around the globe. And then you don't have to worry about things like SSL, because we automatically hook up SSL certificate for you. You don't have to worry about going out and buying one or provisioning yourself. That just sort of happens. 

And one of the things we also do is provide a really easy way to integrate your own custom domain into it. So just kind of like without really having to do much, you can get a full site deployed. Really performant, really easy, and you kind of get all these things out of the box. 

FRANCESC: Cool. So whenever I want to deploy a website myself, I never use Firebase Hosting. So normally what I do is either I use App Engine, which allows me also to have custom domains, or I use Google Cloud Storage. Where is Firebase Hosting? Is it like dynamic, like App Engine? Is it more like static storage? 

DAVID: Well, that's really what I'm here to talk about today. So when we first started with Firebase Hosting, we were really only looking at doing static. So pretty much all static files-- there's a lot you can do with a static website. Everyone kind of reaches for server code at first, but you'd be really, really amazed the things you can do with static generators and stuff like that. 

So for years we were only static. And that's why we were able to back everything by a CDN, because we didn't have to worry about running any code on the server. But I guess last March when we launched Cloud Functions, this really opened up the door for us to provide an integration with Firebase Hosting and Cloud Functions. 

And we had been kind of experimenting with this for a bit during our own kind of internal hack weeks. And the team lead for Firebase Hosting, Michael Bleigh, he came up with this crazy system at the time where you would basically create a Cloud Function, generate some content with it, and then you would send that back to Firebase Hosting, which would then cache that content on the CDN and then back to the user. 

And so when the user would then request the site again or another user in that CDN edge area, it wouldn't actually go back to Cloud Functions to regenerate it again. It would just serve from the CDN edge. And we would specify how long it would live in the edge, but it became sort of like the first time we saw, like, oh, wow. We can provide sort of this dynamic content with this static twist to it. 

MARK: So you mentioned something there, Cloud Functions. We did do an episode a little while ago, episode 73 with Brett McGowan, but this is Cloud Functions for Firebase. Is that the same thing? Like for people who don't know what it is, can you explain what it is and the differences? It would be really great. 

DAVID: Yeah. So Cloud Functions is basically serverless compute, write server code, and don't have to manage your own servers. And Cloud Functions for Firebase is this Firebase layer on top of that. So it's still Cloud Functions, the Cloud product. And Cloud Functions in Firebase is an SDK that we provide you. 

So essentially, if you want to respond to events that happened in your Firebase ecosystem. So if something changes in your database, a user logs in. You get an event from Firebase Analytics or someone uploads a file from Cloud Storage, you can respond to these events and then run server code. 

And so what we've done with Cloud Functions and Firebase Hosting is we've provided a way to say whenever someone hits this URL for your website, let's run this code. And then when you are done generating this code, use a cache control header and specify how long you want it to store in the CDN edge. 

MARK: Cool. All right. So when we put together Cloud Functions with static hosting, what sort of things can you build? What's possible here? 

DAVID: Well, with Cloud Functions and Firebase Hosting, there's pretty much not much you can't do. Because now you have the ability to do dynamic server content but still present it to the user as static content. So before, pretty much whenever you'd do Firebase deploy, that was kind of it for you. You would deploy it out. All your static files would go out to the web. 

And if you realized you had a typo on a page or wrote a bug or something like that, you'd have to go out and write Firebase Deploy again and just like redeploy your entire website. Now what you can do is you can still have a bunch of static pages. You can break it up to say, OK, this section of my site is static, but this page specifically or these set of pages are dynamic. 

And at that point, you can effectively do-- whatever a dynamic site can do is exactly what Cloud Functions and Firebase Hosting can do. 

FRANCESC: Interesting. So what I'm thinking about now is this would be a really good idea for someone that starts with a static site, and then they want to add more dynamic things. Like, let's say, I don't know-- like sending email or something like that. Is that the use case, or do you see also people building from scratch on Firebase plus Cloud Functions? 

DAVID: I think you're totally right. I think if you started out with a static site, and you might be building like a portfolio page or something like e-commerce, where you deploy out all of your static-generated pages. Because if it's static, it's going to be super, super-fast. But maybe you have a certain page that is dynamic. So the register or the shopping cart or something like that is dynamic, but the profile pages, or the recipe pages, or something like that is all static. So it's a nice mix-and-match approach. 

But another place that I see where you kind of just go dynamic to start with is if you're building any JavaScript framework apps, so single-page applications and stuff like that. You might want to take advantage of server-side rendering those. And that is pretty easy. Because at that point, you've created your whole app that typically would be client-rendered at first but with just whatever frameworks, library code. 

You can deploy that out to the server. It generates the static HTML and sends that down to the browser. And so it's kind of like for the-- I've done angular, universal, react, preact, next.js, vue.js, like all these server-side rendering apps. It takes pretty much like 10 lines of code or so to get it integrated. 

FRANCESC: Cool. So if I understand correctly, then what you're saying is that we have all the static hosting. And that's running on-- it's accessible from a CDN. So it means low latency and good performance. And then we have the Cloud Functions that are going to generate the dynamic content or react to whatever the user is doing. And those things are run somewhere on Google Cloud platform, and then the results are cached? 

DAVID: Yeah. So essentially the cache is controlled by you through a cache control header. Cloud Functions right now is all in node.js. So we use express to do the server responses. So if you're building an express.js app, it's probably about like a handful of lines of code to just move it over to Cloud Functions. 

But essentially, when you're ready to send your response back-- so you get a request from the user. You generate your content, however you do that. And then right before you send back, you just set a cache control header. And you essentially will say, OK, it's a public header. It has a max age of this is how long the browser will cache it, but then there's s max age, which says this will sit for this many seconds on the server or on the CDN. 

So in that area, if one person request's going to generate it and do that whole longer round trip. But then the second time, the second user, they're just going to go straight out to the edge. And the edge is going to have it and send it right back and avoid running the Cloud Function again. 

FRANCESC: So then I imagine that it's very simple from the code side of things to control like, for instance, this is something I never want to cache. Just simply do not set those headers, and that's pretty much it? 

DAVID: Yeah, that's really it. And there's even more advanced things you can do with the headers that are really easy to do. Like, there's the stale-while-revalidate header, which is really cool for certain use cases. 

So if a user makes a request out to your site and the CDN notices that, well, this content is stale. But what I'm going to do is I'm going to send them back the stale version. And in the background, I'm going to go out to your origin or to your Cloud Function, generate that content, and store it back into the cache. 

So the user got a quick response. It might be stale content, but the next user or the next request will bring back the fresh content. And so if you know you can kind of get away with serving up stale content, it's a really great technique to give good performance and also keep that cache warm. 

FRANCESC: So that is very interesting. And it brings me to cache validation, which is a very cool problem we all know. How do you invalidate the cache? Let's say that you say, well, this content is valid for an hour, and then something happens that invalidates it. Is there any way to tell whatever servers are caching that information that they should ask for the new version? 

DAVID: Firebase Hosting from the get-go has really strong cache validation strategies. Or I guess really just one cash invalidation strategy. Essentially with static hosting, whenever you say Firebase Deploy, everything you deploy is in one atomic version. 

If you go to the Firebase Console, you can actually see in the Hosting tab every single version of your app that you've ever deployed. And you actually can roll back to any single one of those just with one click. And it's almost instant. 

And why we're able to do that is because since we have all these atomic versions, whenever you deploy out, we're able to contact each edge and say, hey, there's a new version right here. Just purge everything in your cache because the user is going to want the new version. And there's nothing stopping you from doing that with Cloud Functions and Firebase Hosting. 

So let's say you have really aggressive caching going on in your Cloud Function, and you want to cache like for half a day or something like that. Because you maybe publish, like, two blog posts a day or something. 

And you realize like, oh, I want to publish this sooner. Or there's a typo or something like that. When you write Firebase Deploy, it's going to purge the cache. And even those cache control headers are going to be ignored at that point. It's going to know to go back and fetch the fresh content. 

MARK: So when you deploy, you said as a single unit, that contains both the static files and your Cloud Functions for Firebase? Is it both? 

DAVID: Great question. So you have to kind of break it up into two pieces, because the Cloud Functions are deployed out to their own place. And the same with Firebase Hosting. So they're actually in two separate places, which is a really nice way to kind of break up the two parts of your app. 

And you can deploy them at the same time or you can specify one for the other and whatever really helps. Because if you just need to update your server code, that's not going to break your cache. So if you're just trying to keep your cache strategy kind of just humming along, just deploy your server code. 

But if you need to kind of break the world because everything needs to be updated, you have that option, too. 

MARK: Cool. All right. So this sounds hugely powerful. For a long time, I've been using probably App Engine for more of my, quote unquote, "serverless needs." Does this mean I shouldn't be using App Engine? Is there like a sweet spot for this? Where should I choose maybe one thing over another? 

DAVID: App Engine has a lot of really cool add-ons. And when you're doing things like longer-lived tasks, I would definitely start thinking about doing your own server. So any like really heavy compute options, or just like if you're running a cron or something like that on your server, then App Engine's definitely the great place there. 

But when you're just doing, like, very simple things-- all you want to do is build a handlebars app where you just have some type of server templating where you say, I have some data. I have a template. Let's generate my HTML. This is a really great place for that, because it's also just trivial, like we were talking about before, to integrate the caching into it. 

So it's this really nice place for traditional web development with it. And also, sort of modern, front-end framework developing with server-side rendering is also a really good spot for this. Because one of the most expensive parts when you're doing server-side rendering with JavaScript frameworks is that regeneration every single time. 

And it's, for most people, websites. Like, how often do they update? Unless you're like a big, real-time live site, your content might only change a handful of times a day. So it doesn't make sense to just always regenerate. And this is really where that caching strategy can help you because it keeps that content cached. And so you don't have to keep paying that server cost over and over again. 

FRANCESC: OK. So now I'm thinking, let's imagine that I'm trying to build a to-do app, because that's what everybody builds. I want to store my information somewhere. How would this work? You would have Firebase Hosting calling Cloud Functions for Firebase, and then that accessing some database? Or would you recommend directly using Firebase Database? Where do you store the information? How do you decide that? 

DAVID: So essentially, you can store it kind of wherever you want. You can just stick it in a JSON file and upload it with your Cloud Function-- not the best option. But one of the things we do that makes it really easy is we ship the Firebase Admin SDK, which is this really nice server SDK for controlling all these different things with your Firebase accounts. And so you get a greater set of permissions that you'd expect to do as the owner of your project. 

And what we have is ways to say, OK, I'm the owner. I want to go read database from this section. And I want to check out my authenticated users here. And so when someone makes a request, you're likely going to use some type of stateful URL. 

So whatever route parameter, you can just use that to request that data using the Firebase Admin SDK, get that data back, and then just template your page, do whatever's needed. And so you can use whatever you want, but we've made it really easy to talk to Firebase Database, or Cloud Storage, or something like that. 

FRANCESC: So then that means that you can store the information wherever you want? And If you store information on Firebase Database, then the Cloud Functions for Firebase do have access to that Firebase Database. Is that the case? 

DAVID: Yeah, when Cloud Functions boots up, your credentials are automatically configured in that environment. So it's actually your Google Cloud credentials. So whatever that project has access to, you can tap into. 

So if you're using the Cloud Vision API, those credentials are automatically configured in that environment. And the same for your Firebase credentials. And so it's really easy to just say, OK, I'm going to read data from this section and send it back, or I need to call this API. I need to talk to whatever service that's in the Google Cloud or Firebase ecosystem. All that authentication and credentialing is just automatically taken care of for you. 

MARK: Nice. So that's almost burying the lead a little. I feel like I want to highlight it. It sounds like, basically, like this seems like a sweet spot where maybe you want to cross ecosystems. Like, say, you want to do some stuff in cloud, Google Cloud Platform. Like, maybe you have a database there. You want to do something like Cloud Vision. But also, being able to take advantage of basically the buttery sweetness of Firebase. Would that be kind of accurate? 

DAVID: Yeah, totally. The fact that you don't have to worry about your credentials is really great. And we also provide this credentialing with the Firebase CLI that you install through NPM. We have like local runners. So a lot of times, you're dealing with, like, oh, I just want to do this locally right now. I don't want to have to deploy to test this. 

Well, we have ways of testing that locally with the same credentialing. But yeah, if you're trying to talk to Cloud Vision, you're going to need a server. And typically, those tend to not take too long. And so Cloud Functions and doing stuff like Cloud Vision is like an amazing sweet spot. 

MARK: Nice. So now I'm curious. Have you seen any particular awesome things that people have built? Or are there like particularly amazing examples that you'd like to highlight here? 

DAVID: So I've been doing a series on server-side rendering using JavaScript frameworks. And it was sort of interesting because I have a lot of friends who make frameworks. I've done a 20% project on the Angular team. And I talk to a lot of other people who are like Ember team and other teams. And I also have a lot of friends on the Chrome team. And they have sort of this interesting approach to doing things for web performance. 

And some of my friends in the Chrome team aren't totally convinced that server-side rendering is going to be better for you rather than just sort of booting up from scratch, because it's a lot of tax on the main process. And so one of the things I went out to do was kind of figure out, OK, what's the truth here? What is really the performance story? 

And so what I kind of found out is that if you're doing server-side rendering wrong, yeah, it's going to really, really like-- it's going to make you think slower. You're going to see the page a lot faster, maybe, because your time to first bite actually might be well worse. But what I realized is when you bring all these things in together, you can actually get an amazing performance story out of server-side rendering, your JavaScript framework, and cloud functions. 

Because if you're just serving up this dynamic content from the CDN, and all of your assets are being served from the CDN, and you're not making any client-side network requests to template your data, there tends to be-- even on a really low-power device, I've seen like really fast load times. And that's something that I haven't seen in the past. 

A lot of people server-side render their apps, and they used to serve it over a CDN or something static. But now they have to use a dynamic server, and it could take a second to just generate their content. And that's already a second before the user sees anything on the page. 

So as far as amazing things, I've just seen like the performance implications out of this is like really, really cool. And the amount of code that it takes is just-- it's kind of amazing. I've seen like 20 lines, 30 lines of code to implement the whole thing. 

FRANCESC: Cool. So that sounds awesome. You said you were doing a series. Is that a series on YouTube? What's the name? 

DAVID: Yeah. So on the Firebase YouTube channel. Just youTube.com/firebase. There's a whole series that I'm currently running called server-side rendering with JavaScript frameworks. And the whole thing is is that we take a look, one framework at a time, how you would set this up. And then we follow-up with a companion video that is a performance profiling. So we take a look at what tools you use to profile the performance of your website or your server-side rendered website. And we take a look at-- how fast is the non-server-side rendered version? How fast is the server-side rendered version? 

And we don't just take a look at numbers. I go into tools, like web page tests, which allows you to run real devices around the world. And you can simulate really slow networks. And then they give you, basically, the Chrome DevTools view up on the website. And they also give you lots of other great kind of graphs and profiles where you can see, how hard was the CPU working on the device? And when was your first paint? And when were you fully loaded? And so we kind of step through each one of those metrics on each version, and we see which one came out on top. 

MARK: Awesome. So that YouTube series sounds amazing. Are there any other places people should go if this stuff sounds particularly interesting? 

DAVID: I actually did a Kickstarter course on this. I called it a crash course. So also on the Firebase YouTube channel, it's called like node.js crash course on Firebase Hosting, or something like that. And that is essentially like, hey, I've never done this before. How do I get started? 

And I go from blank folder to fully-deployed website with Cloud Functions and Firebase Hosting. So that's a really good spot. 

And also, the official documentation is really good, too. So if you're sort of a Firebase Hosting pro and you've used Cloud Functions before, it's really going to be just like one or two lines of configuration to get them talking to each other. So definitely, the official documentation is a really good place as well. 

FRANCESC: Awesome. Well, we're kind of running out of time, but I'd like to give you the opportunity to plug anything else that you'd like to tell our audience. 

DAVID: Yes. We just shipped Cloud Firestore, which is something that we've been working on really, really hard. And honestly, just from my own personal standpoint, I'm really, really excited about it. Because now you can do like a lot more complex querying, which is something that the real-time database was limited on. 

And for me, I'm just like mind-blown that we can finally do completely persisted offline for web. So if you're building progressive web apps, it's kind of amazing that you kind of just enable persistence in your Cloud Firestore app, and then that's it. 

So if you have a service worker and the user goes offline-- boom, you are still up and running with all of your data from Cloud Firestore. And then when they go back online, all the data gets resycned and conflict resolution is automatically handled for you. So it's kind of amazing. I feel like we're in this total, brand new world of development where I can use Cloud Firestore to store all my data, use Cloud Functions and Firebase Hosting to do all my dynamic content or my static content. And it's kind of like the web that we were promised back in the HTML5 days. I can kind of start seeing it happen. 

FRANCESC: Awesome. Well, that sounds really, really cool. And who knows? Maybe we have something to mention also about it with some episode or something. But that's a secret. 

Anyway, thanks so much, David, for taking the time today. 

DAVID: Thank you so much for having me. 

FRANCESC: It was amazing to discover what Cloud Functions is. Thank you. 

MARK: Yeah, thanks so much, David. 

DAVID: Have a good one, guys. 

FRANCESC: So thanks again to David East for coming back to the podcast for the second or third time-- I don't know, I see him all the time around the office so it's hard to tell-- and tell us a little bit about Cloud Functions for Firebase and Firebase Hosting. Lots of really cool stuff, especially when you want to get started easily and just have a simple website. Just put it there. Super-simple. Very, very cool. 

MARK: Yeah, absolutely. Totally agreed on the simplicity. And the developer experience is really nice. 

FRANCESC: I mean, it's Firebase. Firebase developer experience is kind of the best. 

MARK: Awesome. Well, why don't we talk about our question of the week? So I can read documentation. I can read books. But sometimes, I like to work on a specific project, or I like to have sort of an instructor-led sort of scenario. Are there any online courses that I can take when trying to learn about Google Cloud Platform? 

FRANCESC: Yes. There's actually a lot of them. And I'm not going to cover all of them, but there is a specific set of them that are starting this week, which are really cool. They're all on Coursera. They're all free. And I recommend all of them. 

And if you want to get started, there's like some specific things. For instance, Google Cloud Platform fundamentals, core infrastructure. So you're going to be learning, really, the basics of Google Cloud. But also, you have another one in state engineering on Google Cloud Platform Specialization, which is like if you want to do more like big data stuff, that's for you. 

There's also Architecting with Google Cloud Platform Specialization. So if you want to figure out, like, I have a big application, and I want to know what services could help me do what, that's the one for you. 

And also, if what you want to do is you want to-- you're coming from AWS and you want to know, basically it's like, I have all of this baggage. I know all of these things already. Just tell me the things I need to know on top to understand how Google Cloud platform works. 

There's one specifically for that, which is Google Cloud Platform Fundamentals for AWS Professionals. 

And last but not least, there's also one for people that are running Windows applications on Google Cloud Platform. There's another course for that. So there's a bunch of courses. They're all starting on October 16, except for the Windows one, which started on October 9. So go check it out. 

Even if you start a little bit late, it's totally fine. So I definitely recommend going, and registering, and learning a lot of it. You can follow your own pace. So perfect for those people working that want to learn more. 

MARK: Awesome. All right, Francesc, I think you're getting on a plane soon. Where are you headed? 

FRANCESC: So right now, if I'm not mistaken, I'm on a train. 

MARK: You're on a train? 

FRANCESC: I'm on a train. Yeah, I'm on a train going from London to Paris, because tomorrow, October 19, I will be speaking at the Google Cloud Summit Paris. And then after that, I'll come back to San Francisco, and then I'll go back to Paris for dotGo. 

MARK: Very nice. 

FRANCESC: Yeah. So what about you? 

MARK: When this comes out, I will be on a plane. 

FRANCESC: Good. 

MARK: While you're on a train heading to Melbourne, Australia. I will be speaking at GDG Melbourne DevFest. I'll be hanging out at Unite Melbourne. Speaking at Game Connect Asia Pacific. And I'll be hanging out at Pax Australia as well. 

FRANCESC: Awesome. 

MARK: Yeah. So looking forward to that. 

FRANCESC: Yeah. Thank you so much, Mark. And thanks so much again to David for this awesome episode. Thanks all for listening. And please, register, subscribe to whatever where you're using this, like Apple Podcast or Stitcher. 

MARK: Where all good podcasts are found. 

FRANCESC: Yes. Your local podcast distribution system that you want to use. And let us know what you think about the podcast. We want all of those reviews to understand better what you're looking for. 

MARK: Awesome. Well, thank you so much, Francesc. 

FRANCESC: Thank you, Mark. 

MARK: And we'll see you all next week. 

FRANCESC: See you all next week. 

{{< /transcript >}}