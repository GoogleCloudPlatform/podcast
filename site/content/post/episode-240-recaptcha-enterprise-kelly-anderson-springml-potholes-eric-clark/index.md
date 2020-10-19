+++
audioDuration = "00:49:11"
audioFile = "Google.Cloud.Platform.Podcast.Episode.240.mp3"
audioSize = 70841650
categories = ["Cyber Security", "Machine Learning"]
date = "2020-10-14"
description = ""
draft = false
episodeNumber = 240
hosts = ["Mark Mirchandani", "Priyanka Vergadia"]
title = "reCAPTCHA Enterprise with Kelly Anderson + Spring ML Potholes with Eric Clark"
image="/post/episode-240-recaptcha-enterprise-kelly-anderson-springml-potholes-eric-clark/images/hero/hero-EP-240.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/jb4iol/episode_240_recaptcha_enterprise_with_kelly/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week, your hosts [Mark Mirchandani](https://twitter.com/markmirch) and [Priyanka Vergadia](https://twitter.com/pvergadia) are joined by Google Product Marketing Lead for Online Fraud Protection, [Kelly Anderson](https://twitter.com/kellyanderson93), to talk about reCAPTCHA Enterprise. Kelly's main focus at Google, reCAPTCHA, is a service that helps online companies determine if a user is a human or an automated system.  With an advanced risk analysis engine, Google's reCAPTCHA system has been defending sites from fraud for more than a decade. We talk about the evolution of reCAPTCHA and learn about the specific attributes of each version. 

Later, we focus on reCAPTCHA Enterprise which caters this security software to enterprise companies. Like version three, Enterprise boasts detailed risk analysis and actions. Companies can also expect reason codes for high risk scores and the ability to use the risk analysis engine customized to their company. They are able to find bots impersonating users and neutralize them easily. reCAPTCHA Enterprise is easy to use, whether you're a Google Cloud customer or not. With the handy API, any company can take advantage of this security feature. Kelly leads us through the steps of deploying the API and details instances where this software plays a vital role in the protection of your website across multiple devices.

Kelly takes us through the reCAPTCHA Enterprise dashboard and talks about the future as we conclude the show. reCAPTCHA hopes to move beyond behavioral protection to continue to stay ahead of malicious actors online. As Kelly explains, Machine Learning will become more and more important as fraud detection continues to grow and change.

##### Kelly Anderson

[Kelly Anderson](https://twitter.com/kellyanderson93) currently leads product marketing for Google Cloud’s online fraud protection business. She devotes most of her time to working on reCAPTCHA Enterprise and Web Risk and is passionate about helping businesses and their customers stay protected from fraud and abuse. Prior to Google, she worked in product marketing for Microsoft in Azure, where she marketed a variety of security products and business continuity products. For more information about Kelly Anderson and her leather jacket, you can follow her on Twitter.

##### Cool things of the week

* Introducing HTTP/gRPC server streaming for Cloud Run [blog](https://cloud.google.com/blog/products/serverless/cloud-run-now-supports-http-grpc-server-streaming)
* Introducing Google Workspace [blog](https://cloud.google.com/blog/products/workspace/introducing-google-workspace)

##### Interview

* reCAPTCHA Enterprise [site](https://cloud.google.com/recaptcha-enterprise)
* reCAPTCHA enterprise product demo [video](https://www.youtube.com/watch?v=ic3Fj2B1LR4)
* Top 10 use cases for reCAPTCHA Enterprise to defend against OWASP Web-Automated Attacks [site](https://services.google.com/fh/files/misc/owasp_handbook_again.pdf)
* Google reCAPTCHA Enterprise: Frictionless, Flexible, and Effective Web App Security [site](https://services.google.com/fh/files/misc/esg_tech_validation_2020.pdf)

##### Stackchat at home

This week, [Max Saltonstall](https://twitter.com/maxsaltonstall) is fixing potholes in Memphis with Eric Clark of [SpringML](https://springml.com).

##### What's something cool you're working on?

Priyanka has been working on Google Cloud Whiteboard episodes [Operations](https://www.youtube.com/watch?v=VL2Ql0cmo4g&list=PLIivdWyY5sqI4e7TGsuIDBCIh0Vm-nbvK&index=8)   and [CDN](https://www.youtube.com/watch?v=841kyd_mfH0&list=PLIivdWyY5sqI4e7TGsuIDBCIh0Vm-nbvK&index=7). She's been working on [new comic strips for zero trust](https://gcpcomics.com) and new [GCPSketchnotes](https://thecloudgirl.dev) as well!

{{< transcript "[MUSIC PLAYING] MARK: Hey there, everybody, and welcome to episode 240 of the weekly Google Cloud Platform Podcast. As always, I'm Mark and today I'm here with Priyanka. Now, Priyanka, I want you to know this is episode 240, which means that if you did one episode every day, it would take you 240 days to get to where we are right now." >}} 

PRIYANKA: Oh my God. We are so far ahead in the GCP podcast. 

MARK: I love it and it's so exciting just to think about how many episodes there have been. And I know that that math I did earlier wasn't necessarily the most impressive math, but I will take it and I just-- I think it's super exciting. 

PRIYANKA: It is. It is so exciting. If you look at it the other way, it's like, if I started doing this on January 1, for example, then you have to do it every day to get this far. 

MARK: It's a lot. So super exciting to have you here, Priyanka, and we've got a pretty great guest today. Do you want to tell us who it is yes? 

PRIYANKA: Yes. Kelly Anderson. Well, she is so amazing. We are so excited to chat with her about reCAPTCHA. She has a lot of insight to share about how reCAPTCHA has evolved over time and what are some of the new and exciting things we have in store for reCAPTCHA. 

MARK: Yeah. Super, super awesome and such a fun interview. Can't wait for that. And then after that, we're going have a second interview where our friend Max Saltonstall gets to talk with Eric Clark from SpringML about a very interesting solution and how they built this interesting solution to detect potholes, but to reuse the existing equipment they already had to do it. It's a really cool conversation. We'll get into that later. But before either of those, why don't we jump into our cool thing of the week? 

[MUSIC PLAYING] 

PRIYANKA: I have one. 

MARK: Go for it. 

PRIYANKA: So we just launched HTTP gRPC server streaming for Cloud Run, which is pretty exciting for those of us who are running applications that have features around streaming large files, videos, those sort of things, or just long running calculations and batch jobs that can run intermediate or batched responses. So anything that's long running, it is amazing to have gRPC streaming support and Cloud Run in serverless applications. 

MARK: Yeah, it's super awesome to see yet another feature that just makes Cloud Run even easier to use and more flexible. And, of course, I think it's worth mentioning that last week there was a big update for what used to be called G Suite is now called Google Workspace. 

So there's a whole bunch of detail in the blog post that's in the show notes. Go check that out if you're interested. It shouldn't be removing any of the functionality that we all know and love now, but actually creating some cool ways to integrate it all together. 

PRIYANKA: Well, given the interesting times we are in, it does seem like having an integration of all of these tools together is a great idea, so I would go to check the blog post out. 

MARK: Yeah, it's got some cool animated gifs so you can actually see what it looks like. So super, super cool. Go check that out. But with those cool things out of the way, let's jump into our interview with Kelly. 

[MUSIC PLAYING] 

Kelly, thank you so much for joining us. To get things started, can you tell us a little bit more about yourself? 

KELLY: Yes. I'm super excited to be here today. My name is Kelly and I work for Google in Seattle, Washington. I currently lead product marketing for Google Cloud's online fraud protection business, and I spend most of my days working on the products for CAPTCHA Enterprise and Web Risk. 

So you can be safe to say that I'm super passionate about helping businesses and their customers stay protected from fraud and abuse. Prior to the online protection business, I was working in Google Cloud's Security Management and Threat Detection product team. 

And before Google, yes, Mark, if you can believe that there was actually a world before Google, I worked in product marketing for Microsoft and Azure, where I marketed a variety of security products ranging from team management, to security management, to threat detection, confidential computing, and some other business continuity products. 

PRIYANKA: So just in case, if our listeners are not familiar with online fraud prevention or are new to that space, can you tell us a little bit more about online fraud protection? 

KELLY: Absolutely. So online fraud, we also commonly refer to it at Google as internet fraud, is when a malicious after uses the internet or software to provide incorrect information or hides information in the hopes of tricking the recipient out of money or resources. 

So a really good example of this would be, let's say you are a shoe retailer. A malicious actor is going to put your top selling shoe in her shopping cart so it appears to be unavailable or sold out for your actual customers. So then your customers think that your business is sold out of this shoe, they leave your website, and they go to a competitor to purchase it. 

This stinks because it costs your business money and a customer base. So now this leads me to why online fraud prevention is important. The threat landscape is changing, especially right now due to COVID, and more businesses are requiring that their customers have accounts and login credentials to make purchases. 

Fraudsters know that if they can take over a legitimate customer's account and blend in with normal traffic patterns, that they can commit a wide variety of fraudulent activities and end up damaging our customers' businesses and their bottom line. So at Google, we really want to help our customers prevent damage to their brand and their bank account with our different products. 

MARK: So it totally makes sense that, obviously, you want to protect people from being able to do, like you said, fraudulent activities. 

KELLY: Yeah. 

MARK: You know, I hadn't thought about that as something as simple as just trying to trick a business into manipulating its inventory. 

KELLY: Yeah, yeah. 

MARK: And that's probably just the tip of the iceberg as it were for all the things that can happen. 

KELLY: Yeah. So I'm really glad that you mentioned this because one of the things that we try to stress here at Google is that any business that has business online can be impacted by fraud and abuse. However, there are some verticals where we see this fraud and abuse more prevailing, one of them being retail. Some of the other verticals that we see are finance, gaming, social, tech, and travel. 

MARK: So for all of these examples, I mean, obviously, we're talking about here reCAPTCHA. And I think people have heard of reCAPTCHA because they've seen it in a personal sense, but I'm also curious to hear about from the business sense. But to get things started, how did reCAPTCHA come about? Like, what is it? 

KELLY: Yeah, great question. We get this question a lot, especially now since we have different versions of reCAPTCHA. So to kick things off, reCAPTCHA is a CAPTCHA system that allows web hosts to distinguish the difference between human and automated access to websites. 

So Google's reCAPTCHA has been defending millions of websites. We're really excited to say now that we're up to four million websites for almost a decade. And so the way that reCAPTCHA works is it uses this advanced risk analysis engine and adaptive challenges. 

So Mark, you've probably used them yourself. They're the ones that are like checking the I Am Not a Robot box to keep malicious software from engaging in abusive activities on our customers' websites. 

But the good news is that legitimate users, because they can pass these challenges, are able to log in to websites. They're able to make purchases, like going back to that shoe retailer example, View pages, create accounts, and then the fake users will be blocked. 

And so reCAPTCHA Enterprise, which is the newest version of reCAPTCHA, it takes the CAPTCHA one step further by including features that you would expect to see in an Enterprise product, such as terms of service, granular scores, reason codes, and I'll definitely dive into the details on this a little bit later. 

PRIYANKA: OK, so say more about the evolution of reCAPTCHA. I know that there are reCAPTCHA version 2, and then version 3, and then now the Enterprise version. What are some of the differences that we can point out between these versions? 

KELLY: Yes. I'm really glad that you asked this. We get this question a lot from our customers. So reCAPTCHA V2 allows you as the business owner to verify your customer's identity with either and I Am Not a Robot checkbox or widget. We use the word widget in our documentation, so I just want to make that super clear. 

Or you can use an invisible CAPTCHA challenge. And so to configure the I Am Not a Robot checkbox, we recommend two things that you either automatically configure this or you explicitly configure this. To automatically configure reCAPTCHA V2, you'll need to include the necessary JavaScript resource and a G-reCAPTCHA tag. 

The G-reCAPTCHA tag is a div element with a class name G-reCAPTCHA and your site key is the data site key attribute. And then to explicitly render the reCAPTCHA widget, you'll need to specify your onload callback function and add perimeters to the JavaScript resource. 

So reCAPTCHA V3, when we introduced that, we made it different from V2 because it does not have any user interaction. So we got rid of the checking the I Am Not a Robot or clicking on different images such as sidewalks, and instead what we use in this version is behavioral analysis because we wanted to create a frictionless user experience. 

This is easier for our end users, but this is also easier when enabling reCAPTCHA, because how it detects fraud is by comparing all manners of behavior on your website. So the easiest method to use reCAPTCHA V3 and get it started on your page is to include the necessary JavaScript resource and add a few attributes to your HTML button. 

If you want to programmatically set up reCAPTCHA V3 and have more control over when reCAPTCHA V3 runs, you can use the Execute method in G-reCAPTCHA object. The other thing that we've added to reCAPTCHA V3, besides making it frictionless, its actions. 

So what do I mean by actions? Actions are when you specify a name in each place where you execute reCAPTCHA. And so this allows you to do two things. The first thing is it gives you a detailed breakdown of data for your top 10 actions in the reCAPTCHA V3 app and console. 

And then the second thing it allows you to do is it shows you in an adaptive risk analysis based on the context of the action because abusive behavior can vary. So it makes it really clear for you about what has happened and what you need to do next. 

So to summarize, V3 is different from V2 because it is frictionless, it uses an adaptive risk analysis, and you can see the top 10 malicious actions taken against your webpage. So now this brings us to reCAPTCHA Enterprise. 

So reCAPTCHA Enterprise builds on everything that I just mentioned in V3. It's frictionless, it uses an adaptive risk analysis, and it offers actions. But like I had mentioned earlier, because this is geared towards the enterprise, we knew that we had to build specific capabilities for the enterprise that they would expect to see. 

So security teams can expect, in addition to those features I just mentioned, to see features such as granular scores, reason codes for high risk scores, and the ability to tune the risk analysis engine to their enterprise's needs. 

So an example of this feature would be the granular risk scores. And so with the granular risk scores, reCAPTCHA Enterprise returns a score based on the interactions with websites. And a good way to think about this is that if a score is 1.0, it's likely a good interaction and it ranges all the way down to 0.0. And the closer it gets to 0.0, it's more likely to be an abusive action. 

And in addition to a risk score, we also offer reason codes to help you determine why we gave a risk a particular score. And then based on that reason code, you can take action. So a good example of this would be if we gave your site a low score, let's say 0.2, the action that you can take to improve interactions with your site going forward would be to enable two factor authentication or email verification in order to allow a user to continue. 

Or my personal favorite, even better, our most sophisticated customers can take action without alerting the bots that they have been detected. So going back to our shoe retailer example, you could cancel a fake order after that order has been placed. 

So all of these options that you've seen throughout the different versions of reCAPTCHA have been inspired by Google's experience in protecting users' accounts. And the other thing that I want to mention, because I know that we have a lot of developers that listen to this podcast, is that we also offer a flexible API. 

So if you are not comfortable yet, depending on where you are in your cloud journey, of using the Google Cloud Platform console UI, you can easily integrate reCAPTCHA Enterprise onto your site or mobile application using an API-based service. And so this will give you comprehensive protection across all of your endpoints. 

MARK: So, I mean, obviously, there's a whole bunch there. But at the end of the day, it makes sense to integrate this no matter where you're hosting, your mobile app, website. 

KELLY: Yeah. 

MARK: It doesn't matter if you're using the cloud for all the cloud things or if you've just got a retail website, for instance, right? 

KELLY: Yes. Yes. Because a question that we get a lot from customers is, like, do I have to be a Google Cloud customer to use reCAPTCHA or reCAPTCHA Enterprise? And the answer is no. We would love for you to be a Google Cloud customer, and I know there are other podcasts that talk about ways that they can do that. 

But to your point, the message that we want to give our customers is that if you have an online website where you are having logins or payments, you absolutely need to be using reCAPTCHA. And we would prefer for you to use reCAPTCHA Enterprise, but as long as you're using a version, whether it's V2, V3, we can help you go from there. 

MARK: And it sounds like-- you kind of mentioned the details of integrating each of those. But it sounds like it's pretty easy to integrate it into the parts of your website or mobile app where people are actually making decisions like logging in or purchasing something from a cart. 

KELLY: Yeah. So the way that customers can get started with reCAPTCHA Enterprise involves a couple of steps. And this is just where the product is at right now. This will change. But we do ask for customers to reach out to us because they do need to be allow listed for the reCAPTCHA Enterprise API. 

So again, like I said, this is noted on our documentation page, but we do ask for an email address for someone who is an owner of the Google Cloud project. This person will have to enable the reCAPTCHA Enterprise API once we have allowed their account. 

And then from there, they are in the Google Cloud console, and on the Project Selector page, they will create a cloud project. All we ask is to make sure that billing is also enabled for this project. And then from there, you can enable the API. 

And then the last step is we ask them to set up authentication and set up an environment variable so that the file contains your service key account. And then after you complete setting up the reCAPTCHA Enterprise page, you can also create keys. 

These are also known as site keys and I'd like to call this out because we don't want to get them confused with API keys, which are used for authentication rather than configuration. reCAPTCHA Enterprise right now does not support API keys for authentication and instead use its service accounts to authenticate requests made by apps. So the importance of using the site keys is that when you configure them, it will include important options such as whether or not to show the CAPTCHA challenges. 

PRIYANKA: So I'm just curious, because there has been a lot that you mentioned and when to use what. But are there specific use cases that you can point out that people can start thinking about, oh, yes, I need reCAPTCHA for this? 

KELLY: Yes. There are so many. We actually just finished a paper looking at the OWASP top 10 automated web attacks. But the two common ones that we see most frequently right now are credential stuffing and account takeovers so let's start with credential stuffing. 

So unfortunately, credential stuffing has become one of the most commonly used attack vendors. The use of credential stuffing has spiked due to the availability of usernames and passwords from a wide range of successful breaches and the ease of scripting the attacks. 

So stolen user data in these attacks is readily available because this information is posted and sold online. Poor password hygiene is actually the main reason why this attack method is so successful. So how does this happen? The most common username is your email address. 

And remembering unique passwords for every website, unless you're using a password manager, can be too much for most end users to handle. And so this leads them to using the same password for every site. And so you can have high confidence that once one site is compromised, it's only a matter of time before a login will be realized by an attacker. 

And this attacker, if they were able to successfully get into one website with your credentials, they're highly likely that they're going to get into other websites with those same credentials if your username and password are the same. 

So where reCAPTCHA Enterprise comes in is it's able to successfully detect and stop credential stuffing attacks by recognizing bot behavior or malicious behavior and introducing friction. And then on top of the friction, the friction alerts you of an attack, and then you can deploy different responses to stop this attack while still letting valid users through your website. So that's kind of credential stuffing. 

MARK: This is probably a good point to mention here for all our listeners. Use a password manager. 

KELLY: Yes. 

MARK: There's so many out there. It doesn't matter which one you use, but use one. 

PRIYANKA: Or just use 1, 2, 3, 4. 

MARK: That's right, yes. Those are your two best security options. You can either use a password manager or just use 1, 2, 3, 4, because then you'll never forget the password. 

KELLY: Exactly. I mean, you two are speaking some security truth here. Like, thank you so much. And while we're at it, don't use two factor authentication. Get rid of it. 1, 2, 3, 4, no two factor authentication, right? 

SPEAKER 1: Our legal team might prefer if I step in for a moment and explain that the promotion of idiotically simple passwords was sarcastic, so don't do it. As for password managers, that's a big thumbs up. 

KELLY: Don't listen to me. 

MARK: Just use good security. Please do. 

KELLY: But to make sure that 1, 2, 3, 4 is not a reality for you and that this doesn't happen to you, if you don't use password 1, 2, 3, 4, hopefully you will not be a victim of account takeovers, which is the other thing that we see a lot in the online fraud and abuse space. 

And so account takeovers and hijacking are when a bad actor uses a stolen or leaked credential, so password 1, 2, 3, 4, to log in and take over a legitimate user's account. This happens when they use someone else's login credentials, they get into their account, and then they start performing fraud such as transferring money or gift cards and purchase fraud. 

And so just kind to our earlier banter, like, well, how does somebody get these stolen credentials? How do they get password 1, 2, 3, 4? And there is a number of ways, but the trend that we're seeing right now is they usually purchase them from the dark web or other sources. 

And this can be done extremely inexpensive, and in the last several years, billions of account records have been leaked from breaches. And so they get your 1, 2, 3, 4 password from the dark web or some other source. And now that they have it and they want to try to test this password with a bunch of different websites, it's not financially feasible for them to manually attempt to log into each website, right? 

So what they do is they rely on automated credential stuffing to log in and verify accounts before they perform fraud. And the way that they validate your stolen credentials is usually through a three step process. They, one, go through a list of potential credentials and accounts. 

Two, they have a distributed botnet, or we like to say, like, a large swath of infected, quote unquote, "zombie machines," and some type of automation software or tool kit to orchestrate the attacking botnet. And so going back to our banter earlier, since these credentials have a long list of potential usernames and password combinations, attackers usually use a botnet to see which logins are correct. 

And botnets generally attack through proxy servers or fleeting addresses that could be hard to block, which then allows attackers to quickly change where the attack is originating from. Determined attackers will pivot and attempt to evade detection if they realize that they've noticed, and this all sounds terrible, just as terrible as using password 1, 2, 3, 4. 

But good thing, reCAPTCHA Enterprise, we have your back. Because the way that reCAPTCHA Enterprise will help you with account takeovers is that all you have to do is run a simple JavaScript snippet that enables reCAPTCHA Enterprise to verify the requests on your webpage and ensure that they're actually coming from real humans, not automated software, not malicious humans. 

And this is done through this behavioral analysis that I was talking about earlier. And if we suspect fraud, we will give you actual actions that you can take to stop this fraud and stop it in the future. 

MARK: Yeah. I mean, which totally makes sense for a business. But I think the overall goal for anybody should be to implement some form of security protection, and reCAPTCHA has been around for a while, like you said. It's been tested. There is kind of this more personal level and then there's an Enterprise level so people can kind of choose what's right for them. But the point is to implement it. 

KELLY: When our customers use reCAPTCHA, and this can be any version of it, then 10% to 30% of bots do not attempt to do anything with their website anymore. This is huge. So this tells us at Google that very few sites have protection in the first place because usually if it's there, bad guys will not even try to do anything with their website. 

So while we want customers to be on the Enterprise version, using a version is better than nothing and we can work with them to improve their security from there. 

MARK: Yeah, it makes sense to include it. And then not every bot is going to go say, hey, I'm a bot and I'm going to try and put some credentials in here. Because I assume they'd be a little easier to block. 

And I know we probably can't go into the details of how reCAPTCHA figures a lot of this stuff out, but it's super interesting to hear that, obviously, there are so many different vectors in which you can kind of try to determine if it's a bot. And like you said, if you just put anything on there, at least it gets out a lot of the lower effort ones. 

KELLY: Absolutely. And like I said and I'll keep saying, we just want to make sure that there is something on your webpage to protect you from fraud and abuse. So whether it's V2 and you're using those CAPTCHA challenges where your users have to engage with it, to V3, to Enterprise, where it's frictionless, we have the data to show that if there is protection in the first place, it might not deter all attacks, but it will deter some. And the rate at which your site is attacked will also decrease. 

PRIYANKA: So we did talk a lot about reCAPTCHA Enterprise and Version 2 and Version 3. if I was a user and wanted to get started with reCAPTCHA Enterprise specifically, what are some of the features that I should start with? 

KELLY: Yes. So I'm going to say all of them, of course, right? But some of the key features that I would stress that people use, one, are enhanced risk scoring. And so I talked about that earlier, but this is where we tell you, based on a score, if an interaction with your website is good or bad. 

And so a really good way to think about this is that the lower the score is, the higher the risk is. And we calculate this risk by using machine learning models based on user behavior pattern. The second feature that I want our listeners to remember are reason codes. 

And so reason codes are why we told you that you have a particular risk. And so some of the examples of reason codes that you will see with reCAPTCHA are automation, which is the interaction matches the behavior of an automated agent. That could be a bot. That could be action taken by a human. 

Two, unexpected environment. This interaction indicates that reCAPTCHA is being interacted with on a page other than an intended location on your site. Unexpected usage traffic patterns is another feature, which simply tells us that interactions with your website were very different than the expected patterns or the patterns that we've been seeing on your website. 

And then the last feature that I want to call out is too much traffic. So traffic volume from the event source is higher than normal. A couple other small ones, but still worth keeping in mind are, like I mentioned, we have APIs so that you can easily use on your site or mobile application. 

We also offer support for both Android and iOS to detect fraud across all of your devices. We also offer market leading Google Cloud terms of service availability and support for mission critical applications. 

And because of our previous conversation about definitely don't use password 1, 2, 3, 4 and use two factor authentication, we do integrate with two factor authentication. So what this means is we support email and SMS-based our text-based verification. And again, this option was inspired by Google's experience in protecting users' accounts. 

PRIYANKA: Is it at all useful to enable reCAPTCHA just for DDoS attacks? Would it help in DDoS attack situations as well? 

KELLY: In security, we always think about it holistically and we think about defense and depth. And so if your identity is compromised, which I can talk about a little bit more later because this is related to reCAPTCHA Enterprise, where your login credentials or if someone makes a fraudulent purchase in your name is compromised, then you want to have another line of defense available. 

So reCAPTCHA Enterprise can step in and fill that gap in that way. But we mainly think about it in terms of web security or application security. But we know that sometimes web applications, websites are targets for DDoS attacks. So we wouldn't say that it wouldn't help against DDoS attacks, but it's not just for DDoS attacks. 

MARK: Yeah, you're going to want multiple layers of security, of course, for all of the different types. And you kind of already covered the steps for how people can actually enable reCAPTCHA Enterprise, but we can put a link in the show notes to the documentation, so people can read through that if they want to jump through it and basically enable it in the console. But I know that the console also recently got a refresh, right? 

KELLY: Yes. We did get a new UI. It's beautiful. And you can do a few things in it, and I'll use the scenario of credential stuffing that I mentioned earlier to illustrate this. The first thing that you'll see in the UI-- so we've got four boxes. 

The first box is number of requests. And this is just a simple count of how many assessments have been made with a particular reCAPTCHA key. So every time a user hits a page the customer has instrumented, the count will go up, and these assessments are scored. 

We give three color coded buckets to help visualize this. Low risk, medium risk, and high risk. The second rectangle box that you will see is score distribution. And square distribution, I've touched on this before, but it returns a score based on interactions with your website. 

So the closer your score is to 1, the more likely it is to be a good interaction. The closer your score is to 0.0, it's more likely to be an abusive action. And so we calculate this risk score by using machine learning based on user behavior patterns. So based on the normal patterns that we see people engaging with your website. 

The third box that you'll see is top 10 actions. And this is a view of the number of requests. But instead of separated by date, we separate them by action, and we do that because we want you to clearly be able to see the most high risk actions that are happening on your page. 

And so I know I've mentioned this when I'm talking about reCAPTCHA V2 and V3, but actions are defined by the user when they instrument their site. So particularly, we know that our users want to be able to analyze data for a particular page versus across their whole site. 

And then the last rectangle that you will see is top 10 risky actions, and it's very much like the same sounds, which is you can see the riskiest actions that are on a page. And so that might be the riskiest actions are happening on your sign in page or the login page, and then we will give you next steps on how to deal with that risky action. 

So we might recommend using two factor authentication or looking at some more telemetry to figure out what you need to do to stop these risky actions from happening again in the future. 

PRIYANKA: What is the next thing that we are working on within reCAPTCHA Enterprise? What are our future investments? What should they be looking forward to? 

KELLY: Yes, yes. So this is another fun thing. So we're thinking about moving beyond behavioral detection. It's very core to our product. And so right now in 2020, we see about 5% of the market adopting this type of defense. 

So we estimate that this type of detection is going to be used by defenders for about the next five years. And then to keep pace, adversaries are also going to evolve their attacks to keep up with behavioral detection. And then if we go beyond behavioral detection, they will match that as well. 

The reason why I think it's going to be about five years of continuing to use behavioral detection and then we move on from behavior detection is that we still see a very immature or low level of adoption with this type of detection. And so I'm just thinking that it's going to take a few years of market, a few years of adoption, people really using this, and then a few years for the adversaries to evolve and create sophisticated attacks using behavioral detection. 

The other thing, like I had mentioned earlier when we were talking about DDoS and password 1, 2, 3, 4, is continuing to make investments in identity. This is really clear that it's always been at the core of reCAPTCHA because we started the product with, are you human or not, right? 

And now we're looking at more sophisticated behavioral signals of fraud because we are now attacked by both humans as much, if not more, than machines. And so to validate your identity, we continue to recommend that our customers use two factor authentication or some type of device identification so we can identify if it's them. 

But also, we're introducing new features like password leak detection, where we can identify if your password has been leaked and it is out there on the dark web or some other online source and it is being sold and used. 

So we're always looking at, are you who you say you are or are you adversarial, and then based on that assumption, what is the next action that we are going to prompt from you. And so we're going to continue to keep identity at the heart of everything that we do. 

Going back to the use cases that we use reCAPTCHA for, like account takeovers and credential stuffing, are unfortunately not going anywhere. They're only going to increase over time. And so these scenarios, on top of some other scenarios like hijacking, really hurt our customers, and their business, and their pocketbooks. 

So we want to keep defending customers' identity. We want to keep paying attention to how adversaries are advancing with certain technologies like behavioral detection and create a holistic solution around that. 

MARK: Right. Because like you said earlier, it's going to be a race between the adversaries and the defenders, because there's always going to be new technology on both sides. And knowing what a stop sign looks like is no longer sufficient to stop someone from fraudulently logging in and maybe doing some of this bad stuff that you're talking about. 

KELLY: Yes. 

MARK: So I'm guessing that machine learning has played a huge role in a lot of this stuff. Do you see that reCAPTCHA is going to invest more time, energy, and effort in the machine learning side of things? 

KELLY: Yes. So I'm super excited about this because not only are we going to continue investing in machine learning, but I really hope our listeners like this. We're going to keep making it easier. Yay! [CHEERING] You know, like, break out the confetti. Break out the party hats. 

Because security is hard, right? And there's many layers, there's many components to it. And so what we see at Google is that if we can make our security products well, like, if we get it right, people get so much value in using the technology when it's used the right way. And to make sure that people use it the right way, we have to make it easy. 

And so how do we do that? We do it through two ways. One is continuing education with our end users, and two, prioritizing product investments. So on the continuing consumer education side, like, humans are always the weakest links in attacks because it just takes you, right, like, as a person, to not understand what is happening or what's going on. 

Or if you are in the midst of an attack, like, if you are in a phishing attack and you click the wrong link, you're done. So we want to make sure that we're continuing to educate our customers about the tips and tricks of what an attack looks like and if you could be in the midst of an attack. 

But also making sure that we are advancing the product so that we are giving customers features that make it easier for them to protect against those attacks if consumer education is not enough. And that we're also bringing them along the journey of the evolution of the product where we're showing them that we are paying attention to trends in the industry, we are listening to their feedback, and we're going to continue to evolve the product to meet those needs. 

We're starting to see this with reCAPTCHA. Like, we are starting to take more of the responsibility off of the consumer and put it more on the product. So you've seen that with V2 where we have you check boxes, we have you click images. And now in V3, and even in the Enterprise version, it just seamlessly works with your browsers. 

Like, there is no user friction. It's just on your website, and good people can go on your website and do good things and bad people are blocked and will not be able to disturb your business. 

PRIYANKA: So Kelly, this was awesome and great information. I definitely learned a lot. We would love to know if there's anything else that you would like to cover here. Also, where should people go if they want to get started? 

KELLY: Yeah. It was a blast geeking out on online fraud and abuse security. If customers want to find out more about reCAPTCHA Enterprise, I've got a couple of great links which I think we can link to in the podcast. If they're near a computer, they can go to cloud.google.com/recaptcha-enterprise. 

From there, you can see a product demo, so this UI that I was talking about and the new features, you can see that live in action. We also have two white papers that I think would be really helpful for this audience. The first one is the top 10 use cases for reCAPTCHA Enterprise to defend against OWASP web-based attacks. 

So I just covered in this credential stuffing and account takeovers, we do a deep dive on those use cases as well as eight others in the paper. And then ESG's technical validation of reCAPTCHA. 

So ESG worked with us to deploy reCAPTCHA Enterprise, and this paper just captures their experience with deploying reCAPTCHA Enterprise, which I talked about in this podcast, like, how to set up, what are the things that you can see, what are the things that you get out of it, and what was the impact to their business. 

MARK: And of course, most importantly, don't take security advice from Priyanka and myself. 

KELLY: Although I trust both of you now, right? No 1, 2, 3, 4 password and definitely use two factor authentication. 

MARK: Oh, yeah. I'm putting a 5 on the end of that password. No one's going to be able to crack that. 

KELLY: Yeah. 

MARK: Hey, emoji in passwords. That's a whole separate discussion. I think we'll have to save that for another time. Once again, Kelly, thank you so much for joining us. Really learned a lot and appreciate it. 

KELLY: Thank you guys so much for having me. Thank you. 

MARK: I mean, I think most people are pretty familiar with CAPTCHA and reCAPTCHA, but it's really cool to see what that looks like for the enterprise side of things. 

PRIYANKA: Yeah. I mean, there are lots of things that she shared that were pretty enlightening just in general, like how we have evolved from just looking at images and then selecting the street lights or whatever to understanding using machine learning and the patterns of the users and stuff. So very enlightening. I'm very excited to even try it in some of our apps. 

MARK: Yeah, it's super exciting. And, of course, with those kind of reCAPTCHAs that people are familiar with where you're picking the pictures, what would you say if you had to look at a picture and say, pick all the potholes? How easy do you think that would be? 

SPEAKER 1: That would be easy because I am not a robot. 

PRIYANKA: That would be not that easy because potholes are different sizes, shapes. Especially in a picture, it's sometimes hard to find that that's a pothole, so. 

MARK: Yeah. So, of course, it's super interesting that we have this conversation where Max got to sit down with Eric from SpringML to talk exactly about how SpringML solved that problem using some video feeds that were actually attached to city buses. It's super, super cool, so let's go ahead and dive right into that. 

[MUSIC PLAYING] 

MAX: Hello. I'm Max Saltonstall. Welcome to "Stack Chat at Home." Today, I am happy to welcome Eric Clark, Technical Program Manager with SpringML, to join us. 

ERIC: Hey, Max. Thanks for having me. 

MAX: So Eric, you and the city of Memphis worked to solve a very common urban problem. Can you tell me about what you built? 

ERIC: Absolutely. We built a system to detect potholes and give the city some automation around how they can detect and dispatch crews to fix the potholes. 

MAX: That's awesome. So that sounds pretty challenging. Did this take a long time for you and the team to make? 

ERIC: Well, there was kind of two legs of the project. First was a proof of concept, and that's where we started with the city just helping them just define what's possible with AI in my city. And so we landed on this pothole use case and we did a proof of concept, and that lasted about six to eight weeks with me and two other engineers. 

And once we proved it out, we decided, yep, we had some success here. Let's enhance the model and do the automation so that it serves the city a little bit better and it's not just proof of concept. That production phase was basically the same team, another two engineers and myself, along with maybe three or four other folks from the city involved along the way. 

And that took about three months in total. Looking back, it could be a little bit more of an accelerated timeline, even. We did it over Christmas and the holidays and New Year's, so it kind of extended us. 

MAX: Got you. So tell me about what you ended up with in terms of the thing you built to help them find potholes automatically. 

ERIC: Absolutely. So one, we realized they already have the data in form of video on the city bus system, so they have front facing cameras on their buses. So we knew that we could harvest those data feeds. And so what we wanted to build is as much automation around that as possible. 

So from the point that we're getting these videos from the buses, we've got a script running that will move those video files up to cloud storage. And from there we can trigger, via cloud function, a virtual machine that has a custom TensorFlow model on it and it runs an object detection model. 

And then from there, we're piping those results of the detection into BigQuery. And then finally, we've layered on top a custom user interface hosted on App Engine that shows folks in the city all of these detections that are coming in on a regular schedule. So from the point of getting these videos off of the buses, everything is automated thereafter. 

MAX: That's awesome. I want to find out more about why you chose some of those technologies. So how did TensorFlow help you solve this problem? 

ERIC: With TensorFlow, it allows us to have a really highly customized and finely tuned model, and we can play with a lot of different levers there. They allowed us to fine tune our accuracy level as much as we could with the data that we had coming in. 

MAX: And then you are making a custom classifier, in this case, to pick out these potholes from a steady video stream that's coming off of the front of the city buses. 

ERIC: Exactly, yeah. So we trained the model to essentially detect when a pothole comes in view on this front facing camera and then also not only detect that that object or that pothole is there, but how severe is this? Is it large? Is it small? There is a classification system that we worked on with the city to create the model to determine what the severity was. 

MAX: And then after TensorFlow is done with it, you said you're sending all the results to BigQuery. 

ERIC: Exactly. So things like where is this pothole located, and then we can reverse geocode the GPS coordinates to find out what the approximate addresses is, and the size, and when it was detected, the date that it was detected, things like that. All of that goes into BigQuery, helps from an analytical standpoint, and it's also what we're using to surface that information on the front end application. 

MAX: Cool. And what makes BigQuery sort of a good choice for this use case? 

ERIC: A couple of things. BigQuery being a managed service takes a lot of headache away from us in terms of spinning something up and managing it. BigQuery is just a service that we can consume and know that it's going to be reliable. It's not going to fall over under extreme load and it's just incredibly reliable, right? 

So we didn't want to mess around with having more complexity in our environment, and BigQuery allowed us to do that. And since it's not super highly transactional, we can get away with this sort of architecture. 

MAX: And then you said beyond that stage, you have an App Engine app that folks in the city are using to then consume this process data, right? 

ERIC: Exactly, yeah. So we built a custom application hosted on App Engine, and that application connects to the BigQuery data, which also has pointers over to cloud storage, which is where our thumbnails of these people images live from the video files that we're picking up. 

And it's also integrated with some on-premise systems that the city has, so their 311 system, which is an Oracle back end system, it's where they dispatch all of their tickets for maintenance like this. So if there's a pothole identified by a citizen or this app, they will create a ticket and dispatch a crew to go fix that pothole. 

So we've got that integration with the front end app. So users log in, they can review, see all of the new detections coming in, and they can click a button that says ES Dispatch, and then that will create that ticket in their on-premise 311 system. 

MAX: So as you were building this, what were some of the key aha moments or discoveries that you maybe didn't expect going in but that helped you get to where you got at the end? 

ERIC: A couple key aha moments. One is, and I think every especially public sector should take note of this, chances are, you've got a wealth of data. You're just not realizing that you can harvest this sort of information from that data. And this is the case for Memphis, where we did some ideation upfront on what they can do with AI. And we identified that, hey, if you want to identify potholes, where are your cameras today? 

And so the aha moment is really like, wait, I've got these cameras deployed. Right now, I'm just kind of using it for insurance purposes, right? But what other use cases can you use that data for? And that was a huge aha moment, that you already have the data. You just need to be thinking about these data sources differently. Video is just an amazing wealth of data that can be harvested. 

And secondly, another aha moment was we like to look for optimization opportunities when we deploy things into GCP. And so for that, we have this custom TensorFlow model running on a pretty high powered virtual machine with a GPU attached. That can get expensive if you're just leaving it running, right? You don't want to do that. 

So we deployed a Cloud Function to automate the process of spinning that expensive virtual machine up and down. Pretty much just spinning it up when we need it, turning it off when we don't. Saves a lot of cost that way. 

MAX: You gave us a good overview of all the tech and how it fits together. But at the very beginning or the very end of this process, you've got a reliance or connection point to these city systems. The buses are providing the data in and then you're sending some signals to the 311, the city information systems, on the other end. So now that this is deployed and in use, where do you see this evolving or going next to help the city? 

ERIC: Well, this is really exciting because it started with art of the possible. And once you prove that out with this one very specific use case, the wheels start turning and you start to think about other things like, wait, as a city, we're maintaining a lot of things, right? There's a lot of infrastructure out there. 

What about manholes, right? We're already seeing those on the street as these videos and buses traverse the city. And what about creating road ratings? Since we're gathering this information rapidly and more often, realistically, we can come up with a road rating structure that's going to help them prioritize what streets might need to be repaved. And other things like utility poles, street signs, reflectivity of those signs. I mean, the list just keeps going on and on. 

MAX: Thank you. It's great to hear these stories of making cities better and I really appreciate you joining me here today. 

ERIC: Absolutely. Thanks, Max. 

MARK: Thanks, Max and Eric for coming in and talking about it. It's so fascinating to hear about like that, and I love the point that Eric made about this is data that the public sector already has. This is really just finding a great way to use that data and turn it into really cool, actionable things. 

PRIYANKA: Yeah. It's always enlightening to see the machine learning use cases where it's like, it's right here. Like, the data exists. Let's just put it to use. And this is a perfect example of that. So a very enlightening story. 

MARK: Absolutely. So before we wrap things up, Priyanka, what have you been working on? 

PRIYANKA: So with our friend Max, who you just heard from, he is also a great security expert on our team. So I'm collaborating with him on the next few comic strips for Zero Trust. So that's one project I'm working on. And then the other one is GCP Sketch nodes which, if you haven't yet checked out, we'll include the links in the description below. But there are some more coming. We are in season 2 of that. 

And then I just wrapped up the CBN and Cloud Operations episode for "The Whiteboard," and I learned a lot about cloud operations. This was kind of my first time trying to dabble a lot learning about monitoring, and logging, and trace, and profiler, and those types of things. So really enjoyed getting into the details of that. Do check out that episode. We will put the links in the description. 

MARK: Yeah. People have just absolutely loved this content, and it's so cool to see. And it sounds like it's also a cool way for people who are getting introduced to really get a quick summary and then to find the places where they want to dive deeper. 

PRIYANKA: Exactly. Yep. 

MARK: Very, very cool. Well, you know what? Thank you for listening. Always fun to hang out with you all. And, of course, we'll see you soon. Stay safe out there. 

PRIYANKA: Thanks. Bye. 

[MUSIC PLAYING]