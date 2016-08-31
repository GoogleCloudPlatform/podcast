+++
audioDuration = "00:33:24"
audioFile = "Google.Cloud.Platform.Podcast.Episode.17.mp3"
audioSize = 48123248
categories = ["App Engine", "Container Engine"]
date = "2016-03-15T01:07:49Z"
description = "In the seventeenth episode of this podcast, your hosts Francesc and Mark interview Hiren Patel and Dale Humby, two Google Developer Experts who live and work in South Africa."
draft = false
episodeNumber = 17
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "The Cloud In Africa with Hiren Patel and Dale Humby"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/aj11VzcmDHo"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/4ao3ge/episode_17_the_cloud_in_africa_with_hiren_patel/"
+++

In the seventeenth episode of this podcast, your hosts
[Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic) interview
[Hiren Patel](https://google.com/+hirenpatel) and [Dale Humby](https://twitter.com/dalehumby), two
[Google Developer Experts](https://developers.google.com/experts/) who live and work in South Africa.
<!--more-->

##### About Hiren

DevOps engineer with a long history of system administration. Currently spending all my time doing a mix of
backend development on GCP with python, web frontend development, and some android mobile work.

##### About Dale

Electro-Mechanical engineer turned software developer, now leading the product development team at Nomanini, 
building point of sale terminals and a financial backend to provide low cost access to payment for emerging markets.

##### Cool thing of the week

We will be at [GCP Next](https://cloudplatformonline.com/Next2016.html), with our mics! So come by and say hello. We’ll be doing short interviews with people, and talking to them about the podcast.

Also, make sure to check out [GCP Next Extended](https://cloudplatformonline.com/NEXT2016-Extended.html), if you can't get to San Francisco for the event.

##### Interview

Resources:

- The `Save-Data` client hint request header [docs](https://developers.google.com/web/updates/2016/02/save-data?hl=en)
- The data trap: affordable smartphones, expensive data [blog](http://blog.jana.com/2015/05/21/the-data-trap-affordable-smartphones-expensive-data/)
- Internet in Africa [wikipedia](https://en.wikipedia.org/wiki/Internet_in_Africa)
- Introduction to Service Worker [blog](http://www.html5rocks.com/en/tutorials/service-worker/introduction/)
- A collection of tools for service workers [github](https://github.com/GoogleChrome/sw-toolbox)
- Material Design Lite [docs](https://www.getmdl.io/)
- YouTube Red offline for free in South Africa [blog](http://www.htxt.co.za/2015/11/27/how-to-download-youtube-videos-and-watch-them-offline/)
- IPv4 usage around the world [image](https://en.wikipedia.org/wiki/Global_Internet_usage#/media/File:Carnabotnet_geovideo_lowres.gif)

##### Question of the week

- Firebase Announcing Mobile Offline Support [blog](https://www.firebase.com/blog/2015-05-29-announcing-mobile-offline-support.html)
- Firebase iOS Offline Capabilities [docs](https://www.firebase.com/docs/ios/guide/offline-capabilities.html) 
- Firebase Android Offline Capabilities [docs](https://www.firebase.com/docs/android/guide/offline-capabilities.html)

{{< transcript "FRANCESC: Hi, and welcome to episode number 17 of the weekly Google Cloud Platform podcast. I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark." >}}
MARK: Hey, Francesc. How are you doing?
FRANCESC: I'm very sleepy. I'm very--
MARK: You're very--it's a bit early in the morning, so.
FRANCESC: It's very early today. Yup, so--and what are--how are you?
MARK: I'm a little sleepy, yeah, yeah, little bit.
FRANCESC: Okay, yeah, so we woke up very early today to be able to interview two GDEs from South Africa.
MARK: Yeah, yeah, it was a really interesting conversation with Hiren and Dale talking about some really interesting challenges they have around the connectivity they have in Internet there and some of the challenges they have around that.
FRANCESC: Yeah, it's very interesting, connectivity, because they are far away from big datacenters but also because the mobile networks in the country are actually not as reliable as one could expect.
MARK: Yeah, so things drop out a lot, apparently, so.
FRANCESC: So we're gonna be talking about connectivity and how to be a good developer in Africa with them today, and then by the end of the episode we're gonna be discussing something quite similar. Someone asked us this question, which is, "Okay, so I want to develop an application, a mobile application that is reliable even though the connectivity is not."
MARK: Yup.
FRANCESC: "How do I do that?"
MARK: That's a very good question. Can't wait to hear the answer.
FRANCESC: So yeah, we'll be talking about that at the end, but before that, cool thing of the week.
MARK: Definitely. So cool thing of the week this week is pretty much a little self-serving. Next week we're both gonna be at GCP Next.
FRANCESC: Yup.
MARK: And I'm pretty excited 'cause we're gonna be bringing down our microphones. We're gonna bring down our headsets, and we're gonna be at the event doing, like, recordings with people and interviews, so if you're at GCP Next, we'd definitely love to talk to you. Please come over. At the very least come and say hi, but you know, if we can have a five-minute, ten-minute chat with you, talk to you about the event and how you're using Google Cloud Platform and how you're en--just enjoying life in general, we'd totally love to do that.
FRANCESC: Yeah, that'd be awesome. I'm look--really looking forward to see how many of the people at GCP Next actually have heard ever of this podcast, and so if you're one of them, just come say hi. You will make our day, so.
MARK: Definitely, compl--
FRANCESC: That would be awesome.
MARK: That would be awesome, but if you can't make GCP Next--
FRANCESC: Yeah, so if you cannot make it because, you know, San Francisco is maybe far away from you, it's maybe a pretty long flight, don't worry, 'cause we actually the GCP Next Extended local viewing parties, so we're gonna have a link on the show notes, but basically you can go and see GCP Next live from any of many, many places, and surprisingly, I was looking on the map, and the continent with the biggest am--the largest amount--number of local viewing parties is Africa.
MARK: Yeah, no, I'm actually--they're winning, I think basically is what it boils down to. They are winning, and I think some other countries need to catch up.
FRANCESC: Yeah, Nigeria has seven local viewing parties, which is more than Europe.
MARK: That's crazy. That's amazing.
FRANCESC: It's amazing. So yeah, very, very happy that people are very interested on Google Cloud Platform, and actually, we're gonna be talking about Africa today during the main content of the podcast, so I think that this is amazing.
MARK: Yeah, no, I think it's great. I'm not--my hometown, Australia, I think you need to lift your game. I'm not seeing any local viewing parties, so let's get at it.
FRANCESC: Okay, same for Barcelona. Barcelona, what's going on? Yeah.
MARK: So if you want to start your own local viewing party, very simple. You can actually go to the same website, and you can--there's a button there called host your own, and you can actually enter in your details for a Next Extended event request, so get on that. You've still got some time.
FRANCESC: Yeah, get on that, and not only will--you will get access to the live stream which is, by the way, open to everyone, but also you will get support from our marketing team to help you organize this thing and host it and so everybody will have a good time.
MARK: Yup.
FRANCESC: Great, so I think that it's time to travel over the network and go talk to our friends down in South Africa.
MARK: Excellent. Let's do it. Today we are joined by two guests that are very far away from where we are today. We are joined by Hiren Patel and Dale Humby, two Google developer experts from South Africa. How are you gentlemen doing this morning?
HIREN: Very good, thank you.
DALE: Hi, Mark. Hi, Francesc. Good, thanks.
MARK: So it's--well, it's early in the morning San Francisco time here at 8:00 a.m. What time is it where you are?
DALE: It's a little after--
HIREN: Just past--
DALE: It's a little after 6:00 p.m. here.
FRANCESC: Oh, yeah, here I'm still having my first coffee.
MARK: Yeah, yeah, so it's very early in the morning, especially for San Francisco. Excellent.
FRANCESC: Especially for me.
MARK: Especially for you, yeah. So thank you, both of you, very much for joining us today. I'm quite excited to talk to both of you, and I think there's some really interesting things that we can talk about, but why don't we get some background first? Hiren, why don't you tell us a little bit about yourself?
HIREN: Sure, so my name's Hiren Patel, and I'm a contract developer based in Cape Town, South Africa. As you've said, I'm a Google developer expert for Google Cloud Platform, so I come from ten years of Linux system administration with Linux and Unix, and I've since transitioned into more of a DevOps role, building web apps these days, both backend and frontend, and doing some mobile work with Android.
FRANCESC: Very cool. What about you, Dale?
DALE: My name's Dale Humby, and I'm also a Google developer expert on the Cloud Platform based out of Cape Town in South Africa, and I'm the CTO of a local startup called Nomanini, and I run the tech team here of industrial designers, electrical engineers, some firmware and backend and frontend developers as well, building point-of-sale systems for selling airtime and electricity around Africa.
MARK: Very interesting. Very, very interesting. Jeez, where do we want to start? There's so many interesting things to talk about. So--all right, Dale, you were just speaking. Why don't you tell us a little bit more about the point-of-sale systems, what sort of projects you're working on, and the things that you do?
DALE: Sure. Well, we've developed a mobile point-of-sale system to enable people to buy essential services like mobile airtime and prepaid electricity cheaply in developing countries, specifically around Africa. We've built our own point-of-sale system from the ground up to be really robust and provide access to essential services for guys who can't necessarily get them easily or cheaply. We built a whole backend on the Google Cloud Platform and using some cool technologies like AngularJS for our frontend and running on Google App Engine for our backend, exploring Container Engine, and we use Datastore and BigQuery really heavily.
MARK: Excellent. What about you, Hiren?
HIREN: Cool, so I transitioned into a DevOps role doing some Google App Engine work for startups in Cape Town. This was my first use of Google Cloud Platform, but my current project actually involves building a platform for businesses to collect feedback on products and service from their customers. It will then allow them to visualize this feedback in various ways using a dashboard and allows them to spot trends and improvements and things like that, so the current server-side stack for me includes Python and Django with some customized forms. This is deployed with Docker and Kubernetes on Google Container Engine. I'm using persistent storage via Google Store--sorry, the Datastore, and I'm using Google Charts for the dashboard at the moment, making use of the Python library that's available for charts, which was quite convenient. I'm also looking to use material charts at a later point when that moves out of beta. The client side stack for the data collection consists of Django web forms with Material Design Lite to put some material design on the web for me. I'm focusing on mobile use case here and fluid design, so I chose the stack I chose because I am most familiar with Python. My background involves using Python throughout, and I quite like the concept of deploying Docker and container management solutions such as Kubernetes over virtual machine deployment style deployments, and Container Engine was my choice because at the moment it seems to be the best place to host--for hosted Kubernetes as far as I've seen out there.
FRANCESC: Cool. So all of this sounds very interesting but at the same time quite standard. It's something that I could expect, like, many other people in San Francisco doing something similar, but I'm sure that doing this in South Africa involves some different things, like how's infrastructure? Is it different? Is it hard to develop--like, I know that in here when I'm in a hotel and I try to do a Docker pull off something big it's gonna take a long time. What about down there?
HIREN: Sure, so yeah, a particularly interesting thing for me is within South Africa the connectivity scenario has gotten a bit better over the years. I couldn't say the same for the rest of Africa, sadly, although for me, a particular challenge is mobile data costs still remain quite high within South Africa, and the impact of that is felt not just by consumers but also by small-to-medium-sized businesses. A recent example of having run into that, I was doing some work for a company that had about 150 sales reps out in the field, and these sales reps had tablet devices with SIM cards for connectivity, and they were doing data capturing using these devices, and on one fine day a frenzy of support cases came in whereby all these devices stopped working, and it turned out to be that the company had contracted a package for all these SIM cards using--from a mobile network operator, and they ended up hitting the data cap for this package, and so basically all the sales reps' jobs came to an end for the rest of that day, so that was quite interesting to see. I mean, they had to go and investigate the data usage afterwards and sort of come up with plans to try and keep costs down, to keep--to reduce the amount of data being used, so data cost is still something being felt by business and consumers, and it's quite a challenge in South Africa at the moment.
FRANCESC: I really like that you categorize it as something interesting to see. I'm pretty sure--I’m pretty sure that the people that were on field with the tablets that were completely bricked were not that happy.
MARK: Yeah, I'm sure the word they weren't using was interesting.
FRANCESC: Yeah.
HIREN: Yeah.
FRANCESC: That's really cool. What about you, Dale? Do you have any story to share?
DALE: Yeah. Most of our business is up in Africa, and definitely South Africa is the most advanced when it comes to services being available. A lot of places where we operate, the services are incredibly unreliable. Electricity can be down for 18 hours a day sometimes, so in the evenings you might have maybe just a few hours to charge your phone or your tablet, and that's got to last you one or two days, so we can't just leave our phones on charge all the time and expect them, you know, to carry on working 'cause the power's out a lot. Also, the mobile networks are very overloaded, and there's limited connection to the outside world very often, so you find that in the evenings the mobile networks will prioritize voice traffic over data traffic, so a lot of your websites just stop working, or your web apps just stop, like, getting a data connection through, which is really frustrating if you're trying to, like, use Google Maps or something, and, you know, sometimes, like, a whole fiber cable will go down, and I think in the last year sometime, I can't remember exactly which month it was, the entire country of Nigeria was offline for a day because the fiber went down, and when a country's isolated like that, no news can get in or out easily, and it's very frustrating.
MARK: Wow, and do you find as well that, like, device penetration is quite different there? I mean, obviously--like, I know living here, technically--well, living here in the bubble in San Francisco, like, I've got the latest Android device. I've got a nice, fast laptop. Do you find that you get a different device penetration as well?
DALE: Yeah, a lot of people still have feature phones, and, you know, the first time they get an Android device, it's quite a challenge to try and teach people what a touch screen is. They've never used a touch screen before, and even with the latest trends in, like, material design, you know, the icons are very flat. People--the buttons don't necessarily look like buttons anymore, and trying to teach guys what--what the different actions do is quite a challenge when they haven't been through the last ten years of user interface development, and also the feature pho--or the feature phones that now are getting displaced by cheaper Android phones are still--those Android phones are the very low-end ones, so in some cases still running, like, Kit-Kat from a few years ago.
FRANCESC: So what--how do you deal with this? Is there any kind of specific technology or some kind of practices that you apply to make sure that one, the data restrictions are not a big problem, as I think they could be, and two, that people that don't have the background using smartphones for years are able to still use your apps?
DALE: Hiren, do you want to answer this one?
HIREN: Yeah, I think this is--that's--it's quite a tricky situation. I'm not sure about the market in the rest of Africa, but in South Africa specifically I know there's been a whole bunch of cheap smartphones that have recently hit the market. Particularly I think--I’m not sure if it's a South African culture thing, but people sort of tend to get used to using the devices and pick it up quickly enough. I haven't really worked in the space of providing apps in terms of providing them on the Play Store for consumers as such. I've done more business side-y apps, and the users of my apps are--I wouldn't say people who are using it for the first time, so I haven't really battled in that space all that much.
FRANCESC: Okay, what about you, Dale? You mentioned that one of the things that you do is, if I’m not mistaking it now, is you provide an application so people can buy electricity?
DALE: Actually, we provide a whole piece of our own hardware, a point-of-sale terminal that we developed from the ground up.
FRANCESC: Oh, interesting.
DALE: And because they're--a lot of people are only potentially semi-literate and they're not used to smartphones, we purposefully avoided that paradigm for now and gone for devices that have either just buttons and no screen or a very simple screen with very obvious menus and buttons to try and educate them in this, and we've found that's working really well, and with some of our more advanced clients, we're moving them over to Android terminals.
MARK: Interesting. So since it is the Google Cloud Platform podcast, does--do these--well, I don't know if they're unique challenges, but do these particular challenges--like, do they dictate what sort of backend solutions that you use?  mean, you've talked about App Engine. You both talked about, like, Kubernetes. Is it, like, something that is affected by that sort of stuff, or is it not necessarily?
HIREN: Yes, so for me, coming from Google App Engine, I think I choose Google Cloud Platform products more for the tools and the developer convenience it gives me. If the product or the platform come with technologies that help our specific issues, then that's kind of a bonus for me, but I would--I choose them more for the convenience and the tools and the experience of development.
MARK: That's fair enough.
DALE: And I tend to echo what Hiren said. When we set out, we had a big challenge ahead of us to build our hardware, and we wanted a backend that we could just rely on and not have to spend months setting up, so that's why we chose App Engine, because it's just a platform that we could write our Python code and then--and deploy, and that's stood us in incredibly good stead for the least four or five years that we've been on it, and yeah, I think--what other reasons have I got for App Engine or Cloud? I think the tooling that's been developed around, especially with monitoring and logging , has been a huge help, as we've grown and got bigger, to allow us to find problems with our stack, with our application code specifically. We've got dashboards throughout the office with all the monitoring on them so we can see in realtime what's happening on our system, and it's just a great benefit to us that we don't have to worry about, like, keeping the servers up and running when we've got thousands of points of sales to keep running, which is challenge enough.
MARK: Interesting. All right, very cool. So what sort of upcoming technologies that you gentleman are particularly excited by either in general or maybe in relation to the, you know, sort of challenges you're facing there in Africa.
HIREN: Cool, so yeah, with Africa being mostly mobile and the mobile being mostly web, there are two upcoming technologies in the web space which I'm quite excited about, just think will affect a number of us here. The first one is service worker for the web, which is an exciting new browser standard that's coming together to offer rich offline and powerful caching, and I think what that's gonna give us is a web app experience that's not only fast but that's going to use less data, two things which are key problems for us here. I'm looking to use this in the current project as well for uses such as offline kiosks or kiosks where the connection--internet connection may be flaky, and the second piece of technology, web technology that I'm really looking forward to is the HTTP save data client hint header. This lets the browser of the client explicitly tell the server that it wants to save data, and the server can serve down different resources altogether based on this. I think the server sending down resources based on connection speeds or device stacks which we have today is great, but I feel like there's a real need for us here to be able to explicitly use data-saving features even on fast connections because of our--the prices of our data, so I read somewhere recently that 50% of smartphone users in India switch their data connection off. They don't keep it on all the time, and my first thought was, "Well, I do the same thing here."
MARK: Fair enough. So you want some useful ways to be able to say, "Okay, I'm gonna turn on my data, grab something, use it, then turn it off, and hopefully I can still use it in sort of, like, an offline sort of mode.
HIREN: Exactly, as well as when I am using it, you know, the server should be smart about what it serves me if I'm out and about and I--you know, I just want to--I just want to pull up some resource to get some information. I don’t want the server to serve me things that's going to cost me money where it doesn't need to.
MARK: That's totally fair enough. Dale, you got anything to add?
DALE: The proliferation of cheap Android phones is great. It's really bringing the cost of hardware down, and this has got a massive positive effect on, like, electr--consumer electronics in general, not just phones. You know, we--like RAM and Flash, the cell phone GSM modules, GPS modules, all of that is so much cheaper than it was five years ago, and that's not just due to Moore's Law. It's because the Android phones and their proliferation have meant that these processors are on the market, and we can use them in any sorts of electronics, which has got a huge benefit for people developing tools in Africa who want to build their own electronics and build their own solutions.
FRANCESC: That is very cool. I was right now checking for something that I was curious about, which is sometimes consumers, like, especially users of Google Cloud Platform or actually, Asia or Amazon, they consider being close to a datacenter to be something really, really interesting. I was looking on the maps. You can't--you could not be farther away from a datacenter, literally, like, from any datacenter. Does that have--has an impact on the way you develop too? Like, it's not only the fact that from your customers to your servers there might be a delay, but even from you to a datacenter there's also a delay. Is that something that you feel?
DALE: Yeah, we wish Google would build us a datacenter in Africa. It would be so much better, but in all seriousness, the connectivity or the lag over the GSM network, specifically GPRS or Edge, is pretty bad anyway, so the 180-millisecond ping time to, like, our datacenter in the U.S. is not so bad when you consider that sometimes over the mobile network you've got a three-second ping time.
FRANCESC: Okay, wow.
DALE: You have to rely on caching, and caching for the speed but also caching if the network goes down when you still want the content locally.
MARK: I'm also--I'm trying to find a map. I can't seem to find it. We have--obviously we have our points of presence. I'm wondering whether we have one in South Africa.
FRANCESC: Oh that might be interesting.
DALE: Yeah, Johannesburg's got a--
HIREN: Yup.
DALE: A POP.
FRANCESC: Yeah, no, that's very interesting, and that's interesting that yeah, like, the same way you optimize a program by finding the slowest part and not trying to optimize just randomly, yeah, here if a ping on the GSM network might take up to three seconds, yeah, I don't think the problem is the connectivity to the datacenter. That's crazy. Yeah.
DALE: Like, it's not always like that, but it can go like that sometimes, and just everything goes out when you've got such bad ping times.
FRANCESC: Yeah, that is--that is very interesting. I know that in here I really appreciate when I can use an application offline 'cause it's something that can be useful sometimes, but it's more like a little plus that I appreciate rather than, "Oh, yeah, if not, I cannot really use it." So yeah.
MARK: Yeah, yeah, it gives me a little bit of a perspective on--like, I used to live in Australia, where I always complained about how slow the bandwidth there is, and now I'm like, "Okay, so maybe that's not as bad as, like, it was in my mind." Like--
DALE: Yeah. I think with the local points of presence and the Edge caches, there are multiple ones that Google supplies around Africa, so that does help if you sort out the cache in headers correctly. Then some of the static content is at least faster, and everything, you just do it--do through Ajax callbacks.
HIREN: Yeah, I tend to agree. I think it depends very specifically on the application itself, and if it can't tolerate a bit of latency, then the caching is generally good enough to give the user an experience that's okay.
FRANCESC: There's something related to this that we actually talked a little bit while running this interview, which is YouTube Red, I don't know if you've tried [inaudible]. YouTube Red allowing you to download videos from YouTube directly for free so you can watch them later on.
MARK: Now, it's for free only in South Africa.
FRANCESC: For free only in South Africa, by the w--I think it may be in others countries of Africa too.
MARK: Oh, okay, fair enough, yup.
FRANCESC: But it's definitely not free in the United States.
MARK: No.
FRANCESC: But have you tried it?
DALE: I haven't as yet. I previously used another tool, but this is great. If I could--if this would allow me to do it more conveniently, I definitely would look into it.
FRANCESC: 'Cause that--do you think that's something that your users could appreciate? Like, the fact that it's not only that they can use your application offline but they actually can prepare for long offline periods by preparing, downloading documents and so on.
DALE: Yeah, absolutely, and If you're at the office or an internet cafe, then you can use the WiFi connection to download all your content, and then when you're roaming around or at home, then don't have to use your mobile connection at all. It saves quite a lot of money.
FRANCESC: Yeah, that is very interesting. I would like to know if there's some other listeners that might be using this kind of technologies, this kind of techniques to make their applications more usable, really, in some other parts of the count--of the world, really.
MARK: Yeah, that's a--definitely that's a great perspective in that, you know, when you're--I think often we tend to think of things as totally always connected.
FRANCESC: Yeah.
MARK: Just 'cause of where we are and what we do, but thinking about it from the perspective of, "Okay, what happens when you're disconnected on a regular basis, not just on an airplane?"
FRANCESC: Yeah. Oh, yeah, yeah, not even on airplanes we're disconnected anymore most of the time, yeah.
MARK: Yeah.
FRANCESC: Well, yeah.
MARK: Depends on how it works. So we're sort of running out of time a little bit, but is there anything that either of you want to mention, like, sort of either to plug or you want to talk about before we sort of wrap things up? Dale?
DALE: Oh, yeah, the--going back to some things I’m looking forward to, NFC and cashless payments is something I'm really excited to see developing across the continent. You know, carrying cash can be dangerous, and with technology--or without the technology to replace cash, there's no other option. It needs to be fast and easy, and with NFC and contactless payments, it allows you to not have to carry cash around. As people get more phones and they move their cash into bank accounts and hardware manufacturers start supporting NFC and contactless payments, I think that's gonna be a really exciting space.
HIREN: Yeah, and in terms of my side, I think what I'd like to see is all of Africa coming online. I think that would be great. If you look at the moment at the Wikipedia page on percentage of population of people online for all the different countries, you'll see that Africa's lagging a whole lot compared to the rest of the world. I think it'd be great to see programs such as Android One and so on bring cheap devices into the space and bring everyone online.
MARK: Well, thank you very much to both of you for joining us today. I know it's a little late in your afternoon. It's been a really interesting conversation.
FRANCESC: Yeah, and really looking forward to see what you're able to build with the new technologies you say you're waiting for.
MARK: Yeah, most definitely.
DALE: Thank you very much for having us.
HIREN: Thank you.
FRANCESC: Thank you. Goodbye.
MARK: Cheers. Thank you so much to Hiren and Dale for joining us. That was a really interesting conversation and definitely opened my eyes up to maybe a little bit of my privilege of using the Internet and being as connected as I am.
FRANCESC: Yeah.
MARK: Which--yeah.
FRANCESC: Clearly.
MARK: Yeah, which is good, which is good.
FRANCESC: I don't think I will complain that much anymore…
MARK: Yeah, exactly.
FRANCESC: About my mobile connectivity in San Francisco.
MARK: Exactly. So we have a good lead now into our question of the week from our previous conversation, which is sort of about connectivity. We sort of got asked the question, "So when I'm developing mobile applications and maybe I have spotty connectivity, right?" Maybe it drops out on a regular basis. Maybe it's for people who fly a lot or go into places where they don’t necessarily have a connection to the Internet. How can Google Cloud Platform help you when you're offline a lot of the time?
FRANCESC: Yeah, how can the Cloud help you when you don't have access to the Cloud?
MARK: Yeah.
FRANCESC: Yeah, so surprisingly, the answer is we have actually something really cool.
MARK: Yeah?
FRANCESC: Yeah, which I really did not expect, but I was looking for it while we were talking with Hiren and Dale, and I saw that we have a Firebase offline.
MARK: Yeah, okay, so Firebase has in-built support for sort of offline capabilities?
FRANCESC: Yeah, and there's some of the stuff that you can do for the web, but it's especially powerful for Android and iOS, and basically what it does is it keeps a local copy of a Firebase database.
MARK: Wow.
FRANCESC: And it allows you to basically do all the modifications, reads, and writes on it, and then once you get connected again, it syncs to the remote database.
MARK: Wow, so you don't have to worry about any of that complicated stuff of synching data back again and managing conflicts and doing that sort of stuff. It sort of manages that for you.
FRANCESC: Yeah, and not only that, but it also helps you manage things like presence, so if you have--imagine that you have a chat. You could have something where you can see who's online, who is not. You could see if you are online or not, and even if you're not, you can still send messages, and those messages will actually be sent to the chat once you get online.
MARK: Nice.
FRANCESC: Even more crazy than that, you can even do transactions.
MARK: Wow.
FRANCESC: Which is--yeah, that's--
MARK: That's crazy.
FRANCESC: That's pretty crazy. So you can do transactions on the database, and the transactions will be tried once you get online, and they could fail, of course, but if you have something like, "I just need to increase this--I need to increase this counter," probably if that counter changed since you were offline, it will fail and you will get a notification saying, "Hey, that actually failed. You have to retry," but if you have something different which is, like, maybe the user decided to change their username or something like that, that's something that only them can do, so that's something that probably will succeed whenever you are actually connected to the network. So that's actually something really cool. It really makes me think about what you can do with Google Docs where you can download something and start working on it, and once you--so it's basically like that [inaudible] mode where you don't have access to the full functionality, but still, you can get working and do a lot of stuff with your application, which is great. I really like it.
MARK: No, really nice. I really like that too.
FRANCESC: Yeah, so we're gonna have the link to the show notes. There's actually pretty old blog post. It's actually from May 2015 announcing mobile offline support, but I actually don't know how many people are aware of this, so I thought it was interesting to mention.
MARK: No, no, I really like it.
FRANCESC: Cool, so before we finish with the pod--with the episode today, what are you gonna be up to?
MARK: So as of literally right now, I will be physically in GDC, so I'll be at the Game Developers Conference in San Francisco.
FRANCESC: I think I will be there too.
MARK: Yeah, you'll be there a little bit as well running some Cloud Spin. Next week we will both be at GCP Next.
FRANCESC: Yes, we will.
MARK: As we talked about earlier, but I also just got a notification that I will be speaking at Open Source North in Bloomington.
FRANCESC: Nice.
MARK: In June the 9th.
FRANCESC: Bloomington?
MARK: MN. I'm Australian.
FRANCESC: I'm gonna say MN is Montana, but I don't even know. I'm not American either. I'm not saying that Montana--
MARK: Minnesota, Minnesota.
FRANCESC: Minnesota?
MARK: Minnesota.
FRANCESC: Oh, wow. Montana might be MO. I don't know. We should learn some states. Whatever. 
MARK: How about yourself?
FRANCESC: Well, congratulations on that.
MARK: Thank you.
FRANCESC: I also got accepted for a very cool conference. I'm actually very excited about this. It's one of my favorite conferences in the world. I'm gonna be speaking at GopherCon.
MARK: Oh I bet you are excited.
FRANCESC: Yeah, very, very excited, so it's in Denver in July.
MARK: Wonderful.
FRANCESC: So I still have time to prepare my talk.
MARK: Yes.
FRANCESC: That's good, yup. Great, so maybe we should repeat our cont--way of contacting us.
MARK: Excellent.
FRANCESC: Very quick, so I'm gonna say the name. You say the thing.
MARK: Okay.
FRANCESC: Twitter?
MARK: @gcppodcast.
FRANCESC: Reddit?
MARK: /r/gcppodcast.
FRANCESC: Google+?
MARK: +gcppodcast.
FRANCESC: Email?
MARK: Hello@gcppodcast.
FRANCESC: And our web page.
MARK: Gcppodcast.com.
FRANCESC: And that's pretty much it, right?
MARK: Slack, #podcast on the gcppodcast Slack community.
FRANCESC: Oh. Great, I actually totally forgot about that, but yeah, you should--it's probably the easiest way, the fastest way to contact us.
MARK: Definitely.
FRANCESC: Great, so thank you so much again for being with me today, Mark.
MARK: Thank you for being with me.
FRANCESC: And talk to you next week.
MARK: See you next week.
{{< /transcript >}}