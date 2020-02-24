+++
audioDuration = "00:28:20"
audioFile = "Google.Cloud.Platform.Podcast.Episode.208.mp3"
audioSize = 41267458
categories = ["Python", "Emoji", "Django"]
date = "2020-02-19"
description = "Aja and Brian are here this week to start off a new year of podcasts!"
draft = false
episodeNumber = 208
hosts = ["Aja Hammerly", "Brian Dorsey"]
title = "Python with Katie McLaughlin"
image="/post/episode-208-python-with-katie-mclaughlin/images/hero/hero-EP-208.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/f6hh6h/episode_208_python_with_katie_mclaughlin/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Aja Hammerly](https://twitter.com/the_thagomizer) and [Brian Dorsey](https://twitter.com/briandorsey) are here this week to start off a new year of podcasts! In an interview with Google Developer Advocate [Katie McLaughlin](https://twitter.com/glasnt), we talk about the advantages of Python 3 and why version 2 has been retired, as well as the cool things you can do with Django. 

Later, Katie discusses the complexities of deployment and how she makes it work smoothly with GCP, and we have some fun with emojis! 

<!--more-->

##### Katie McLaughlin

[Katie](https://twitter.com/glasnt) has worn many different hats over the years. She is currently a Developer Advocate at Google Cloud, and a Director of the Python Software Foundation. When she's not changing the world, she enjoys making tapestries, cooking, and seeing just how well various application stacks handle emoji.

##### Cool things of the week

* Running workloads on dedicated hardware just got better [blog](https://cloud.google.com/blog/products/compute/sole-tenant-nodes-are-now-easier-to-update-scale-and-manage)
* Container security summit is going on as we record this [site](https://inthecloud.withgoogle.com/con-sec-summit-20/register.html)
* Easily upgrade Windows Server 2008 R2 while migrating to Google Cloud [blog](https://cloud.google.com/blog/products/cloud-migration/migrate-and-upgrade-windows-server-2008-r2)
* Launch of the BigQuery Weekly Data Challenge! [site](https://goo.gle/bqchallenge)
* New data engineering learning path [site](https://cloud.google.com/blog/topics/training-certifications/google-clouds-data-engineering-learning-path-is-now-updated)

##### Interview

* Python Software Foundation [site](https://www.python.org/psf-landing/)
* PyCascades [site](https://2020.pycascades.com)
* Django Demo [site](https://github.com/googlecloudplatform/django-demo-app-unicodex)
* Emojipedia [site](https://emojipedia.org)
* App Engine [site](https://cloud.google.com/appengine)
* Compute Engine [site](https://cloud.google.com/compute/)
* Cloud Run [site](https://cloud.google.com/run)
* Cloud Build [site](https://cloud.google.com/cloud-build)
* Secrets Manager [site](https://cloud.google.com/secret-manager/docs)
* Kakapo Mountain Parrot [site](https://en.wikipedia.org/wiki/Kakapo)
* The Power ⚡️ and Responsibility 😓 of Unicode Adoption ✨ [video](https://www.youtube.com/watch?v=RUApj8z0UGE)

##### Question of the week

[I need to run something later, but Cron isn't a good fit. What do I do?](https://cloud.google.com/tasks)
     
##### Where can you find us next?

We'll be at [Cloud Next](https://cloud.withgoogle.com/next/sf) in San Francisco in April! 
Katie will also be at [PyCon US](https://us.pycon.org) in April!

##### Sound Effects Attribution

* "African Gray" by Jmagiera of [Freesound.org](https://Freesound.org)

{{< transcript "[MUSIC PLAYING] AJA: Hello, and welcome to episode 208 of the weekly Google Cloud Platform podcast. I am Aja, and I am here with my colleague, Brian. Hey, Brian." >}}

BRIAN: Hello. 

AJA: So later today, we have a super cool segment with one of our other fellow designers, Katie McLaughlin. And she is a Python extraordinaire and has a lot of other cool ideas about practical applications of Google technology that she's going to tell us about, and then an interesting surprise. 

BRIAN: Nice teaser. And then we're also going to end with a question of the week, when you need to run something later, but Cron isn't a good fit. 

AJA: I am intrigued. But, first, cool thing of the week. 

[MUSIC PLAYING] 

Hey, Brian, you got some cool things? 

BRIAN: Yeah. One thing I think a lot of folks don't know about our VMs is that sometimes, there's legal or other requirements, especially around licensing, where you really need to guarantee that your VM runs on the same physical hardware, which is often challenging on cloud. And we actually have something called sole tenancy. And it's just gotten a little bit better. It kind of pools them to use the same licenses in. 

And it just enables like a whole set of workloads that are especially important to big companies or people with really particular compliance needs. So I encourage people to check it out, because often, you don't know that that exists as a possibility. And the word that you need to know to look that up is sole tenancy. 

AJA: Sole tenancy. I got it. One of my cool things of the week is that when we're recording this, Container Security Summit is going on in Seattle. And I am very sad that I can't be there, but I am really enjoying watching the Twitter feeds about the event. And I'm looking forward to seeing some of the videos, because container security is one of these areas that I know I should know more about, but it's subtle. 

And a lot of the things I used to know about security are not all true anymore. And there are new funny ways to break into things, and break things, and make stupid mistakes that everyone makes that I don't know about. So watch this space. Watch the internet. And I'm going to be watching some of those videos, and I'll probably retweet some of my favorites. 

BRIAN: Cool. OK, so check out your tweets. And we'll try to get maybe some links in the show notes. 

AJA: Ooh. Or maybe we can have a guest talking about container security in the future. Do you have more cool things, Brian? 

BRIAN: One more. I mean, the next one, I have to admit, I have a hard time imagining how it works. And so, like, I need to go actually dig into the details here and understand it, because it sounds amazing and a little bit implausible. And we just announced that the Google Cloud Migration tool for making a Cloud VM out of a computer you've got elsewhere, whether it's physical or another cloud, you can now take Windows apps that are running on Windows Server 2008 R2, and migrate that to the cloud, and it will end up on a more modern version of Windows Server when it gets there. 

AJA: I know that it is likely true. And soon as I hear about these things, I'm trying to figure out how the heck they did that. And I don't have an answer, so it feels like magic. 

BRIAN: Like, lets both of us go and figure out how that actually works. And, again, maybe we'll bring somebody on to talk about it, because I want to know how that actually works and what the corner cases are. But that's a thing, and it exists. And something like 60% of the Windows deployments out there are actually on 2008 R2, which has just hit end of life. So it's kind of a big deal. 

AJA: Oh, yeah. So this is a thing that lots of people are going to have to deal with in the next couple weeks. And if there's a way to upgrade without having any downtime, woohoo. 

BRIAN: Exactly. 

AJA: Cool. So my last cool thing of the week is actually two parts to it. First of all, there's some cool questions up for the BigQuery weekly data challenge. And we'll have a link in the show notes. And you can solve the weekly data puzzle for a chance to win $500 in Cloud credit. And I went and looked at the challenges this week, and I am amused by them. So people should go check them out. 

BRIAN: Nice. 

AJA: And related, I've always cared a lot about data science and machine learning. And I have an entire bookshelf full of machine learning textbooks that I have never opened, because it's such a big topic that I don't know where to start. And I noticed in our blog that we now have a data engineering learning path. So a suggested set of courses to take and order to go in so that you can get up to speed on this stuff. 

And I know a lot of people are like, data is awesome. Also, where do I start? And so I'm super excited about the fact that we've taken the step of saying, OK, here's one path of success. And I'm guessing that a lot of our listeners are also somewhat overwhelmed by all the data products in the whole space and will probably find this interesting, too. So there will be a link to that blog post in our show notes. 

BRIAN: Awesome. That sounds great. OK, let's get onto the main interview. 

[MUSIC PLAYING] 

AJA: So, this week, we're here with Katie, who's one of my awesome co-workers. And I can't adequately explain how excited I am to get to hear her thoughts on many things. So, Katie, why are we all in the same place, and do you want to tell us some things about yourself? 

KATIE: Well, we're all in the same place because I decided to come across to this side of the world to hang out with you lovely people. I'm normally based in Sydney, and I came over to Seattle and stopped by a conference on the way. And now I get to hang out with you lovely people, which is always a delight. 

I've been at Google for nearly a year now. And I get to work with the Google Cloud folks, trying to make Google Cloud easier to work with. And I've been specializing in trying to make Django people be excited about wanting to deploy their applications with serverless technologies. I am giving a workshop and talk on this at PyCon in April, which will be very exciting. I really sound super excited. 

BRIAN: [LAUGHS] OK, well, you mentioned that you are just coming from a conference. What happened there? Was it anything interesting? 

KATIE: So on my way through, stopping by the Googleplex and then coming up to Seattle, in between, I stopped for the weekend in Portland, where there was a wonderful conference called PyCascades. It is one of the many regional Python conferences. And PyCascades happens to float around the Cascades area. This year, it was in Portland. And this year, it was a superbly organized event. 

And the closing talk was super inspirational for me. It was speaking about how coders-- and especially Python developers-- but just coders in general are such a small segment of society. And we have this awesome space that we've built. How do we bring more people into that space? Because for every one coder, there are 20,000 people who are not coders. So how do we start not making more coders, but making what we do useful for more people? 

BRIAN: Got it. So was there a specific thing you were thinking about or that other people could take away from that, or is there any way they could watch it? 

KATIE: Just remembering that a lot of our assumptions are based on our own experiences. And not a lot of people in the world are developers. And so the assumptions that we make about, oh, what do you mean you've never used a terminal before, or I understand how websites work, why don't you?-- is something we need to check ourselves with a lot. So making sure that when we discuss and teach, we are actively making sure that the people we're trying to teach are on the same wavelength before we start getting to the stuff that gets us interested. 

BRIAN: Got it. And this will help in, like, big companies and everything as you're trying to advocate for your project and why it's important, as well. 

KATIE: Exactly. 

AJA: So branching off from there, you're really involved in the Python community. You're one of the Python experts that I know. Is there anything cool and exciting but I probably don't know about what's happening in the Python community? 

KATIE: We just got rid of Python 2, which is kind of neat. 

BRIAN: Sounds like a big deal. 

KATIE: Yeah. Python 2 and Python 3 have been running in lockstep for a number of years. But Python 2 is officially no more. It is an ex-language version. We all like Python 3 now. Python 3 is really neat. You should be using Python 3. Python 3.8 is also really neat, because we have assignment operators now, which is kind of awesome. But a lot of my work in the last year in my capacity as both a Googler and as a director of the Python Software Foundation has been ensuring clear and current communications of, no, really, Python 2 is going away now. We gave you an extra five years. It is now no more. 

Python 3 is really great. So Python 3 is actually, like, really fantastic and great. And I have no idea how I used to code Python 2.6 stuff. The amount of things that Python 3 gives me is just amazing. But I've also been working with the wonderful Django 3 stuff, which is also very neat. Django has come in leaps and bounds with its version numbers in the recent years, going from a 1.8, 1.9, 1.10, 1.11, and jumping straight to 2, and then straight to 3, following some of the other versioning things. 

But I am very excited to be able to learn and teach Django 3 and Python 3 together, because these are some very impressive technologies. And trying to teach the right ways in which to deploy these things is my current sort of super focus. And it turns out it is not easy. And I absolutely understand now why people do it the easy way. But the easy way isn't the best way. 

BRIAN: Got it. So what is hard right now? 

KATIE: Turns out that trying to do web stuff is complex. It can border on complicated if you don't understand what's going on. A lot of these technologies make it super easy for you to do the Hello World. You can install a package, get a sample app up and running on your laptop. And the amount of things it does for you is not as obvious as what you'd expect. 

So when you want to take something that you've deployed on your machine to a website that your friends can see, it is not super obvious exactly what is required. And so there are places that deal with that complexity for you in ways that are, this is the way you have to do it. But I now work in a place where I have all these wonderful tools and technologies that I can clip together to make complex, reliable websites that happen to use technologies like serverless and other wonderful bits like manage databases, and storages, and all these wonderful bits of infrastructure that I now get to play with as a job. 

BRIAN: So web frameworks like Django, and Rails, and things existed long before anybody was talking serverless. Does that really work? Like, can you run these in an ephemeral environment? 

KATIE: Here's one I prepared earlier. 

BRIAN: [CHUCKLES] Say more about that. 

KATIE: I started at Google Cloud a year ago. And my first thing that I wanted to do was, I have this demo application. Can I deploy it on Google Cloud? Turns out, yes you can. But it took me far too long to be able to work out exactly how, and why, and where all the bits clip together. And I came out of a site reliability engineering role. I have been a sysadmin. I have been an operations engineer. And for me, it was hard. 

But I get frustrated so y'all don't have to. So I have my here is something I prepared earlier demo, which will be linked in the show notes, which shows you exactly how to connect all these little bits together. And it works. It's just, it takes a little bit to consider every single aspect that is important and how we have best of breed solutions for each of these particular technologies. 

Managed databases are a really, really good idea. And you can use a managed database and connect it to your application. Having secrets management is a really, really good idea. And you can connect that into your application. Connecting all these bits together with a serverless engine that can just go away, but it connects to the stateful services, means you can have an ephemeral deployment, but the important bits that shouldn't go away don't. 

AJA: So tell me more. So there's a lot of people who claim to have demos showing this stuff. But, like, what does this app do or what does this one you made earlier do, and how is it different from a lot of the other stuff that's currently out there and available? 

KATIE: My application itself doesn't do that much. All it does is show you different versions of emoji. 

BRIAN: [LAUGHS] 

KATIE: Oh, did I not mention that I am a lounge armchair emoji expert? 

AJA: No, that did not come up earlier. We'll have to come back to that in a second. But I want to hear more about this app first. 

KATIE: This application has a bunch of information about how different emojis display on different platforms. If you send your friend the penguin emoji, it will look slightly different on Android as it does Apple. There is a wonderful website called Emojipedia that iterates over all the differences over time. I have created a sample Django application with a handful of different models to show the same sort of setup. And I call it Unicodex, because it's a Unicode codex. I am a terrible pun person. 

BRIAN: [LAUGHS] 

KATIE: However, it is a sample Django application that requires media and static assets to store the images. It requires a database to store information about the emoji. And because it's a Django application, it requires things like secrets so you can store the connection strings to your databases. And it also can run in whatever you want. You can run it in a VM if you want to. All the code is on GitHub. 

But there are reasons why you may choose to run your application in App Engine versus Compute Engine or versus Cloud Run, which is one of the major things that I was able to use before it went public, which is kind of cool. Being a Googler, you get to use all the shiny new things before others do and make sure that they work properly. But I can show and prove, and you can click a button and deploy it yourself, a Cloud Run container, which is built using Cloud Build that connects to a cloud SQL Postgres instance, serving static media assets from cloud storages using secrets from Secrets Manager, and all deployed and visible on Cloud Run. 

AJA: That sounds complicated. Is it easy to understand all these pieces? 

KATIE: It's not complicated. It's just complex. 

AJA: Tell me more. 

KATIE: When you run a Django application on your local laptop, you run a command which is called Run Server. Run Server does all this for you. It serves your website using a WSGI engine. It serves your static assets from file. If you don't otherwise specify, it will create a file-based database for you. You have to manually think about all these things yourself if you want to deploy into production. 

But the great thing is that these problems have been solved for you. Cloud happens to have a very good managed database system. It also happens to have a very good storage system. And you can connect all these bits together, should you so choose. It just takes a little bit of thinking. But, in theory, now that I've deployed this application, anytime I want to update it, I should just be able to create a pull request on my repository. And when I merge to master, it will automatically deploy an update for me, and I don't have to worry anymore. 

AJA: Wait, wait, wait. So you got GitHub triggers working? 

KATIE: I have source code-based deployments working. 

AJA: Ooh, I am very excited about that. I actually haven't seen any or many demos of doing that with GCP. And it's something that I always did in my life before Google. Now I have to go look at the code and see what it does. Like, I already knew about the emoji. Like, I knew about your love of emoji. But now the fact that you have secrets and source-based deployments working, I am excited. 

BRIAN: And state. Almost all demos of serverless things are, like, kind of the easy mode. They're stateless things, you know? And, yeah, it's easy to scale this up and down. There's nothing to keep track of. I'm excited this seems like the full arc of a real application lifecycle and real state and stuff. So, awesome. I need to go try to deploy it, as well. We've been holding on this emoji thing for a while. Tell me more about your love of emojis. 

KATIE: Emoji are amazing. The fact that there is an entire part of the Unicode standard dedicated to penguins, and dinosaurs, and koalas, and kangaroos brings me so much joy. But I've gone a little bit further with that, as I am want to do. Are either of you familiar with the parrot emoji? 

BRIAN: I've seen parrots. Dancing parrots, even. 

KATIE: There is the slack party parrot, which is based on the specific parrot. This is all based on a particular parrot, which Stephen Fry met once upon a time. It is a Kakapo, which is a mountain parrot from New Zealand. And people liked this parrot dancing so much that they made many a GIF set on it. And you can easily add this particular emoticon to your slack. 

However, I thought that it might be a good idea to standardize this little character set. Due to backwards compatibility concerns, there had been a number of emoji added based on their use and prevalence in systems like Amazon Messenger and Yahoo Messenger. The only reason we have that shockingly scary clown emoji is because Yahoo Messenger had it. So many years ago, I put together a very complicated submission to the Emoji Subcommittee of the Unicode Consortium. And now we have a parrot emoji. 

[PARROT SQUEAKS] 

BRIAN: Wait, you're the reason we have a parrot emoji? 

KATIE: You're welcome. 

BRIAN: [MUFFLED CHUCKLE] That's amazing. 

AJA: So, so, I gotta ask. I was sitting here while we're talking, looking up the parrot emoji. Unlike some of the others, it doesn't look like we actually agree on what the parrot emoji look like. So if you're the one who proposed it, what is the proper parrot emoji? 

KATIE: In theory, it should be the Kakapo mountain parrot. However, the submission that I put forward was for a tropical bird, because we did not have a tropical bird yet. That got changed into a parrot. However, the interpretation of how specific vendors-- Apple, Facebook, Google-- draw their particular emoji is very much open to interpretation, because the consortium does not specify anything about the color of parrot, the type of parrot. So most of the images are going to be Scarlet macaw, as opposed to a Kakapo. 

BRIAN: Wait, big picture. So, like, emojis are specified, but not? 

KATIE: Yeah. It's fun. 

AJA: We will also include a link to the specific type of mountain parrot in the show notes. 

BRIAN: Absolutely, OK. 

KATIE: There has been, in the last two years though-- 2018 was the year of the emoji convergence, where a whole lot of the vendors decided to consolidate their designs. So, for example, the sparkles emoji, which I love and have on my Twitter handle, is now golden on most platforms. Most of the faces look similar to other faces now. So when I send you a sparkle emoji, Brian, and I send it from my Apple machine and you load it on, say, your Windows machine, they will look pretty much the same. But this took a lot of years and a lot of effort from a wonderful array of volunteers and people involved. And it is not easy, but it makes everyone's life just a little bit better. 

BRIAN: OK, if you want to have emoji everywhere, can you give us an example of a place you can take emoji that most people wouldn't expect? 

KATIE: You can take it to the cloud. You can have emoji URLs now. 

AJA: Ah, that seems like a horrific idea. And, also, I am intrigued. 

KATIE: The mechanisms in which you can get emoji in URLs is the same mechanism you use to get Chinese or Japanese characters into URLs. 

AJA: Oh, so I could theoretically get brontosaurus.dev using the sauropod emoji, because it's not actually a brontosaurus. It is specified as a sauropod. No, no, that is not a good idea. 

BRIAN: I am outclassed in emoji detail knowledge here. I have some studying to do. 

AJA: So are there other emoji that you've been involved in getting added to the spec? 

KATIE: I was able to give a review on some of the crafty emoji that have been slowly trickling into the standard. The yarn emoji, the thread emoji, the needle and thread emoji. But I did get coin recently added. A single coin has not had its own code point before, and now it does. 

BRIAN: Yay. OK, if people are intrigued by emoji and they want to get involved, what would you recommend, either for, like, you know, try to get new emojis in, or getting emojis into their applications? 

KATIE: I happen to have a talk on this, Brian. How did you know? 

BRIAN: I didn't, actually. 

KATIE: There will be links in the show notes for a talk that I gave called "The Power "lightning bolt" and Responsibility "sweat dripping down face" of Unicode Adoption "sparkles." And, yes, you have to say it literally, because there are emoji in the title, which, itself, created its own talk about conference systems that do not like emoji. 

BRIAN: [LAUGHS] You just keep going. So you can basically follow the emoji thread all the way through internationalization, and Unicode support, and all the other fun stuff. Awesome. 

KATIE: But in all of this, one of the paradigms and the theories that I set forward is the fact that this stuff is super engaging for humans in the US and in Australia, where these are symbols that we really want to use. But it is a case of people in Japan, and China, and India. They cannot use systems without these complexities in place, because they have character sets outside of the Latin character set. They have Japanese characters. They have multiple Indian scripts. We have so many systems that do not support all the humans using it. And me talking about emoji gets people excited and considering everyone else. 

BRIAN: Oh, that's amazing. Love it. 

AJA: If people want to learn more about you, or your work, or see you speak, where can they find information about you? 

KATIE: This will be linked in the show notes, because I'm one of those human beings with a social media alias that is nigh inpronounceable. I go by Glasnt, G-L-A-S-N-T on every platform. I am on Twitter. I am on YouTube. I am on Reddit. I am on Instagram. I am on multiple platforms as G-L-A-S-N-T. Find me. 

BRIAN: Yay. 

AJA: Yay. 

BRIAN: Awesome. 

AJA: Are you going to be at any conferences soon that people might be attending? They can seek you out. 

KATIE: I will be at PyCon in Pittsburgh in April-- 

AJA: Cool. 

KATIE: --where I will be giving a tutorial and to talk about what is deployment anyway. 

AJA: Awesome. Well, for those of our listening audience who will be attending PyCon, go check out Katie's talk. Thank you so much for coming and chatting with us. These things are always fun. I always get to learn things that I didn't expect to learn today. I learned about parrots, and emoji, and I am very happy about that. 

KATIE: And source-based deployments. 

AJA: And source-based deployments, although, I knew something about that before. 

BRIAN: That was excellent. Let's move on to the question of the week. 

[MUSIC PLAYING] 

So I'm actually going to combine a couple of questions I've seen in various places around this scenario where you've got a process that's doing some work, and it needs to do a follow-up leader on that specific work. So maybe you want to double check that something happened, or you want to send a follow-up email, or you want to validate something. And it's really challenging to do, because you want to follow up on a specific ID or do something concrete 20 minutes from now, or the next day, or something. And it's not obvious how to do that at all, especially in cloud. 

AJA: Yeah, especially if you're a fan of managed services and don't want to roll your own servers. So, yeah, I've had this problem a lot. When I was working in an online travel industry or other online shopping type things, we would say, hey, you left some stuff in your cart, or hey, did you want to complete this flight reservation a couple hours after someone abandoned. That's a super common scenario. And there's studies on whether or not it works, but that kind of thing. 

Other things is, like, with some chat ops stuff. Maybe you want to make sure that every pull request gets looked at within six hours. And so if a specific pull request on GitHub hasn't been looked at within six hours, you want to throw it in the team chat or maybe assign it to someone and say, cool, no one looked at this, so it's your problem now. And these don't really fit Cron. Cron is always the thing we go to. 

And there's a lot of tools for different frameworks on how to do this. But especially in cases where you need the follow-up to happen at a specific time, I don't actually have good solutions for that right now until I found Cloud Tasks on GCP. And my actual use case was a little weird. I have a blog post I haven't written or that I've been threatening to write. But I needed to lock the door of my house 10 minutes after it had unlocked. 

And so what you do with Cloud Tasks is you can create a task in a task queue. And one of the things you can do is you can set a specific time that the task needs to run at. And there's an SLA and some fuzz on that. You can read about it in the documentation. And then there's a couple of different ways tasks can execute. But the one I really like is you can just call a URL with a specific body. 

So if any of the stuff you're using has a web hook-- and almost everything cool has a web hook now-- you can do almost anything. You could also call a cloud function with that. If you wanted to send a mail, cloud functions, you can call via a post. So you could have called the cloud function that would then send that mail to someone. You can learn more about cloud tasks on our website. We'll link to the page in the show notes. And if I get the blog post written before this podcast episode goes out, we will also link to my blog post explaining how I use this to lock my door. 

But I was really excited, because this is a problem I've had at every job. And we've always had to be OK with the fact that we're going to set up a Cron that runs every four hours and pick up all of the folks that had this particular use case in the last four hours, which meant that some people get their reminder three minutes after the thing that should have triggered the reminder, and some people get the thing four hours after. So being able to set a specific work item for a specific user ID at a specific time, A plus. I am so excited about this. 

BRIAN: Got it. So it takes things that would otherwise be, like, a batch catch-up. 

AJA: Yeah. It makes them customizable and usable for these one-off cases. And also, because it's based on a task queue, it's very clear to see what's waiting. And there's retry logic built in. And it's really just magic. And you don't think of these small things as important, but they make things that would otherwise take a lot of thought easy. And I don't have to set up Cron. And I don't have to set up a server to run Cron. It's amazing. 

BRIAN: It's such a fun example, because it's not obvious from the list of features of tasks that you can actually solve this whole pattern with it, so thank you for sharing that. That's awesome. And I think that wraps us up for the episode. Oh, except, do you have any place you're going to be over the next few months? 

AJA: I am going to be at Cloud Next in San Francisco in April. I have registered for my ticket. I encourage everyone to go check out the website, see what talks we've showed up. The program will be showing up shortly if it hasn't already when this airs. And I want to see you all. We'll have the podcast booth there. You can come say hi to both of us. And you can come check out all the demos and learn all of the things and hear all the exciting announcements. 

BRIAN: That'll be awesome. Okeydoke, hope to see you there, and signing off. 

AJA: Goodbye. 

BRIAN: Take care. 

[MUSIC PLAYING]