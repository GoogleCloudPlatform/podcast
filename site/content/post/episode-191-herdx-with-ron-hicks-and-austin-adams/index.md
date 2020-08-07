+++
audioDuration = "00:49:23"
audioFile = "Google.Cloud.Platform.Podcast.Episode.191.mp3"
audioSize = 71486183
categories = ["HerdX", "AI", "Artificial Intelligence"]
date = "2019-08-21"
description = "Mark Mirchandani is back this week with special guest host Gabe Weiss to learn all about HerdX."
draft = false
episodeNumber = 191
hosts = ["Mark Mirchandani", "Gabe Weiss"]
title = "HerdX With Ron Hicks and Austin Adams"
image="/post/episode-191-herdx-with-ron-hicks-and-austin-adams/images/hero/hero-EP-191.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/ctihoj/episode_191_herdx_with_ron_hicks_and_austin_adams/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Mark Mirchandani](https://twitter.com/markmirch) is back this week with guest host [Gabe Weiss](https://twitter.com/gabeweiss_) to learn about HerdX. Our guests, Ron Hicks and Austin Adams, describe how this idea came about, the mechanics of the system, and how it could change the world of livestock.

HerdX is an environmentally friendly, humane way to improve the system of livestock management and sales. It uses monitoring systems to follow animals as they move about the field, then employs algorithms to identify any problems that may need attention. This allows for treatment of specific animals, rather than mass treatment of both healthy and unhealthy livestock. When pitted against humans, HerdX's AI system could pinpoint the problem livestock much faster and more accurately than people. Once problem livestock are found, the rancher can use that information to devise and implement a treatment plan. Consumers benefit from HerdX as well, through better quality meat and better transparency of rancher practices. The players in the supply chain are recorded and meat is monitored through the entire process, from farm, to feed lot, to the dinner table. Because bad animals can be removed or cured and the supply chain is run much more efficiently, meat spoilage and food poisoning can be mitigated. 

<!--more-->

##### Ron Hicks

As the CEO & Founder of HerdX, Inc., a global AgTech company based in the Texas Hill Country, Ron is filling the void in ag data with IoT devices designed for livestock herds. In a nutshell, HerdX is using tags, water, and data to connect farmers around the world with families around the dinner table. Before his time with HerdX, Ron had a number of immensely successful career paths and achievements as a serial entrepreneur, inventor, and a strong visionary who loves disruptive technologies that can change the world. He was distinguished with Business Week’s top industrial design award in Medical Technologies, which recognized him along with other leaders and companies throughout the world, including BMW, Sony, Logitech, and Ford Motor Company. Ron is also a dynamic speaker who is passionate about solving problems rather than just talking about them and has spoken at conferences as a keynote speaker at Google headquarters in the United States and Singapore. He was also the keynote speaker at Texas Governor Rick Perry’s program titled “Technology Excellence for Rural America” which served as a springboard for the formation of HerdX.

##### Austin Adams

Austin Adams holds over a decade of experience in leading innovative software teams. At his previous employer Adams took multiple greenfield projects from initial scoping, to research and development, to proof of concept, and ultimately to market-leading products. Adams is an early adopter, leader, and contributor to the Kubernetes open source platform. He has used Kubernetes to create automation systems to help drive more than a billion dollars of product sales.

##### Cool things of the week

* Press play: Find and listen to podcast episodes on Search [blog](https://blog.google/products/search/press-play-find-and-listen-podcast-episodes-search/)
* Japanese researchers build robotic tail to keep elderly upright [site](https://www.reuters.com/article/us-japan-robotic-tail/japanese-researchers-build-robotic-tail-to-keep-elderly-upright-idUSKCN1V411X)
* Shining a light on your costs: New billing features from Google Cloud [blog](https://cloud.google.com/blog/topics/pricing/shining-a-light-on-your-costs-new-billing-features-from-google-cloud)

##### Interview

* HerdX [site](https://herdx.com/)
* New Zealand Innovator of the Year Awards [site](https://nzawards.org.nz/awards/new-zealand-innovator-year/)

##### Question of the week

How do I connect an IoT device to a trigger event in the cloud?

* Cloud IoT step-by-step: Cloud to device communication [blog](https://medium.com/GabeWeiss/cloud-iot-step-by-step-cloud-to-device-communication-655a92d548ca)
* Cloud IoT Core [site](https://cloud.google.com/iot-core/)
* Gabe's blog [blog](https://medium.com/@GabeWeiss)

##### Where can you find us next?

Mark will be hanging out locally and working on training content.

Gabe will be at [Next London](https://cloud.withgoogle.com/next/uk).


##### Sound Effect Attribution

* "radio t3 SW bleep.wav" by ERH of [Freesound.org](https://freesound.org)

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to Episode 191 of the weekly Google Cloud Platform Podcast. I'm Mark Mirchandani, and I'm here with my colleague and guest host, Gabe Weiss. Hey, Gabe." >}}

GABE: Hey, Mark. [LAUGHS] Same time. Let's try that again. Hey, Mark. 

MARK: Hey, Gabe. 

GABE: How's it going? 

MARK: It's going well. How are you? 

GABE: I'm doing well. I'm glad to be here. 

MARK: I'm super excited to have you on. Gabe and I get to work together every once in a while, but then we got a really cool chance to interview one of the customers that Gabe was working with called HerdX. 

GABE: Yeah, they're awesome. 

MARK: So we have an interview coming up with Ron and Austin talking about what HerdX is, and some of the really cool things they're doing with collecting data and working with Google Cloud. Very, very excited to get into that. 

GABE: And how it's going to save the world. Like, that's the exciting part for me. They're totally going to save the world. 

MARK: I mean, it's such a grand gesture they're trying to put into place and say, look, we know a way to stop these common problems with ranching solutions, right? We've got over-medication being an issue. You've got introducing new bacterial things. You've got measuring all these kind of-- it's a really, really cool interview. So I don't want to spoil too much. We will get into that. 

GABE: Yeah. 

MARK: But before we get into that, I know, since you're here and you kind of know the IoT space pretty well-- 

GABE: I do. 

MARK: --I've got a fun question for you talking about how to connect an IoT device to a trigger event in the Cloud. 

GABE: Yeah, so this-- it's the idea of having a physical device in the world responding from the Cloud based on-- sometimes automatic data, sometimes a trigger that you've done. And it turns out it's super easy to do. 

MARK: Oh, good. 

GABE: We have this cool product. It's called IoT Core. 

MARK: Well, let's get into that. 

GABE: Yeah, yeah. 

MARK: But before we even do that, let's talk about our cool things of the week. 

[MUSIC PLAYING] 

GABE: Because there are some cool things on there. 

MARK: Oh, so many cool things. 

GABE: All right, what's the first cool thing, Mark? 

MARK: Well, my first cool thing is that Google has added an integration where you can easily find podcasts. 

[EXCITED GASP] 

You may be familiar with podcasts. 

GABE: Maybe. 

MARK: I don't want to make assumptions. You might be listening to this on an old ham radio, I don't know if some of you are broadcasting it. But if you haven't heard, this is a podcast. And now, when you type in certain search terms into Google, it'll recommend podcasts for you. 

GABE: Whoa, so you can actually, like, search for podcasts, kind of like search for images? Now you can just say, hey, find me a cool podcast. 

MARK: Yeah, and you can be, like, look, give me slow-cooking podcasts. And that's the reference they use here in the blog post. But that's a super cool thing, and I think it's been rolled out. So go to Google, type in "Cloud Podcast," and hopefully we come up. I'm going to see if that works right now. I'm going to be really disappointed if it doesn't work. 

GABE: This is very meta. 

MARK: Wait, wait. Typing it in. "Google Cloud Podcast." 

GABE: This is the best podcast ever. 

[DING] 

MARK: There it is-- the podcast section specifically for us. 

GABE: Nice! 

MARK: So good. All right, well, if you host a podcast or if you listen to podcasts-- which I think most people do-- 

GABE: Probably. 

MARK: --at least all of our listeners-- then that'll be a cool feature to check out. 

GABE: Awesome. I actually want to-- I'm about to get a 3D printer, and I need to find podcasts about 3D printing. 

MARK: Well, I got great news. Go to Google. Type in "3D printer podcast--" 

GABE: I'm going to search for "3D print podcast." 

MARK: --you will find it. 

GABE: I'm not going to do it right now, though. 

MARK: So what's your cool thing of the week? 

GABE: All right, so the cool thing that I found, being in the IoT space still-- there is a group of researchers in Japan-- going to butcher the name. It's Keio University. They have built a tail-- 

MARK: A tail? 

GABE: --for humans. 

MARK: A human tail? 

GABE: Right? It's a robotic tail, and what they say the use for it is-- I can think of a bajillion uses for this. But the use that they're specifically going after is to keep elderly people upright. 

MARK: Interesting. 

GABE: So the way that it works is just the same way as a tail does in nature, which is to counterbalance the rest of the body. So, you know, cats can do all kinds of crazy stuff. They balance all sort of weirdly. And it's their tail that allows them to do that. The tail kind of flares out and offsets the weight of their body. The idea that they're positing is they can attach this tail to humans, and it understands the position of your body and offsets-- they got some really cool YouTube videos of people using this tail. It's really-- 

MARK: I mean, it's so interesting, but it just-- it keeps making me think about the inevitable exoskeleton future, where we're all just running around in mech suits. 

GABE: Well, and that's already kind of happening. 

MARK: Right! 

GABE: You knew this. Like, that's happening in-- 

MARK: Like, those mech suits didn't have a tail until now. 

GABE: They should. 

MARK: Well, they will. 

GABE: And now this university's going to make it happen. It's really cool. 

MARK: It's very, very interesting. I mean, it's cool what people come up with. And that's a great use case, right? Because some people who can't balance well, they're like, well, what's a great way to do that? But also, it sounds like, have a little bit of fun with it. 

GABE: Sure! 

MARK: And use the concepts brought up in nature. 

GABE: I wonder if it responds to your emotions. 

MARK: Ooh, that's probably, like, v2 kind of stuff. Well, speaking of nothing to do with IoT, I think one of the cool things is a blog post that just came out talking a little bit more about how you can measure costs. 

Now, if you're doing something like building giant robot tails, there might be a lot of costs associated with that. And the Google Cloud building part of the console can be a little intimidating, especially for people who are more concerned with code, and they want to get in there and they want to run stuff, not necessarily understanding how to pay for it. 

Well, it turns out, at the end, you still need to pay for it. So this blog post really highlights some cool features that have been released, including some updates to the billing reports, a new kind of report that lets you see a very, very quick view of what you're paying, what your taxes are, what your discounts are. 

And I think the idea here is really letting people get more observability onto what they're paying for, and better understand it so that they don't spend as much time trying to track down, oh, where did this payment come from? I have no idea what project this is-- all these kind of things. Anything that makes that process easier means you can go back to doing the fun stuff quicker. 

GABE: Interesting so is it kind of like a Google Wallet add-on, almost, where it can help you watch what you're spending? 

MARK: Well, you can set up budgets for your billing account. I'm certainly working with the billing team, and there's going to be some content coming out soon that helps people understand more about what you can do with the billing reports. 

GABE: Sweet. 

MARK: Or not billing reports, but actually the billing-- 

GABE: The billing itself, yeah. 

MARK: Yeah, the whole thing-- setting up an account, setting up quotas and budgets on it, and understanding all those kind of things, all from within the GCP console. 

GABE: That's cool, because I've seen the calculator. We have that calculator for cost, and it's, like, a bajillion tabs, because each product has its own tab. And each tab has, like, a dozen things that you have to know about your system-- like, oh, OK, I need to know how much network traffic I've got. Well, I [UNCERTAIN MUMBLING NOISES], I'm going to throw in a bunch of terabytes, because I don't know. And then that kind of spits out a monthly number. So is this a way to help automate that a little bit and help people guide to figuring that out? 

MARK: It's going to be a little bit more on the post side-- so, like, after you spending this money, you have a better idea of where it was spent-- 

GABE: What is was. 

MARK: --and what projects and what resources on. But the idea here is that with these tools in place, you should be able to put better cost controls and really do cost optimization and management so that you don't have surprising things that you can actually do predictions like that. 

GABE: Totally. 

MARK: There is that GCP pricing calculator that you can use ahead of time to kind of estimate-- 

GABE: Get a ballpark, yeah. 

MARK: Yeah, to ballpark what you're going to be spending on. I think it's got a lot of features. But I think here we're talking about more stuff like measuring where your costs are. 

GABE: Yeah, post-mortem it, sure. Yeah. Cool! 

MARK: Very, very cool. So some variety of cool things for the week, but I don't want to hold back the main interview any longer, so let's go ahead and jump into it with Ron and Austin. 

Super excited to have our guests Ron and Austin, here. As we get started, tell us who you are and what you do. 

RON: I'm Ron Hicks. I'm the Founder/CEO of HerdX. And this is our CTO, Austin. 

AUSTIN: Yep. 

MARK: So first question's first-- what is HerdX? 

RON: HerdX is a fabulous idea, if I can say that. 

MARK: Self-proclaimed. 

RON: I'm somewhat biased, but I will be honest. I came out of retirement to do what I hoped would be a change for livestock across the world. One was to become an environmentally friendly solution. Not easy to address, but something we feel like we've accomplished. 

So HerdX is a third-party provider. The way in which we can take livestock, improve the system, and bring it to a consumer and improve the transparency-- that's basically HerdX. 

MARK: So that's a pretty broad statement. What does that actually entail, for the livestock especially? 

RON: So it's a big change. So livestock in general is, I would call, less transparent by design. They're typically animals raised in areas that are very, very isolated. And by design, it has to be, because they're out in the middle of nowhere. So they're somewhat hidden. 

In general, there are pretty good ranches out there, pretty good feedlots, and they have no real way of broadcasting a positive performance animal. So the goal for HerdX is to authenticate that through data. 

GABE: So how does it do it? Like, I first talked to you-- I looked in my email to find out exactly how long we've been chatting. It's been over a year now. So June of 2018 was kind of our first contact, and at the time, you were describing the vision part of it. But mechanically, what is it about livestock-- you might have had a lot of conversations about what it does. 

And we know part of it is that transparency, even all the way to the end consumer. So how does it do that? That's what we're kind of looking for, is like, what does the system do? 

RON: So there will probably be steps in there. I think the initial approach is what was working 50 years ago? What worked 100 years ago? And if you look back, you'll see an art to raising animals, even in a more quarantined or confined area, and it was this pen rider. 

You had this gentleman that would show up, long sleeve shirt. He was kind of the premier dude of the day, and he'd come in, and he would cut through cattle-- his goal to find animals that were moving in somewhat of a-- what we'll call an anomaly. If he could separate that one animal, then he could determine that that animal may need some additional assistance. 

Maybe check and see if there's a temp, some other things. They don't have that today. So if you look for a pen rider, it's the rarest of the cattle raise-- what I would call key-- to good animals. What we're doing at HerdX is we're replacing that with data. 

GABE: So the pen rider was a person? It was-- 

RON: It was. 

GABE: --a physical person that would go down into the herds and walk amongst the animal and be like, all right, this cow, or this lamb or whatever-- they're acting a little strange. Let's pull them out of the herd, and let's do something. So that's been replaced, now, by what? Just mass antibiotics, right? That's the answer-- is we'll just premedicate all of our animals-- 

RON: Absolutely. 

GABE: --and who cares if they're sick? Doesn't matter. They're not going infect anything, because they're all medicated. 

RON: They're medicated. You're not going to cross-contaminate. It's an easy management decision. Again, there's less information, so you cover it. I think the beauty of a HerdX-type system is you show an animal's movement. If that anomaly occurs, you go back to basically, in time, a more natural method, and you've automated the entire system. 

GABE: So brass tacks now, you're talking about the HerdX automated system. 

RON: Mm-hmm. 

GABE: I don't want to infringe upon any IP here, so if there's company secrets, I don't want to touch on that. But what is the HerdX system? There's no pen man anymore, right? 

RON: That's right. 

GABE: So what does the system do? 

AUSTIN: So we have monitoring solutions that are deployed out of the feedlot that are able to monitor the animals' movement to food and water. And through that, with different algorithms in the processing of their movement data and their movement to water, to food, as opposed to each other, we're able to detect who's the anomaly. And as that system grows, we're also able to detect-- forecast anomalies in different breeds and in different weather scenarios, and things like that. 

MARK: What's an example of an anomaly? 

AUSTIN: So an example of an anomaly, once you understand the supply chain of cattle, is many animals are coming across the border from Mexico, or across several states on trucks. And they were weaned off of their mother, so they're off of milk and onto water and grain. So they're just a big transition in their life, so there's a lot of stress. 

So those animals might not be exhibiting a temperature, which is a fever or indicative of some immune response in the animal, which is trying to fight a bacterial infection or some stress response in the animal, but they might be moving weirdly. Meaning they might spend a lot of time laying down, or they might not go to the water trough as often as other people, or they might not go to food as often. 

And there's a lot of noise in there based on temperature and things like that, so that's why the pen rider was an art form, because it was a human brain able to filter out the noise and understand, this is an animal that needs help. I can see, by the way its lips look, that it needs water, and it hasn't gone to the water trough-- because they can't watch them all day like our systems can. 

So our system doesn't need to know what the temperature of the animal is. We can actually see their movement and decide a couple of days before they even have a temperature that this animal needs to be pulled and taken care of. And what taken care of can mean is just put on some lower stress behavior, meaning get them away from other animals for a while. Give them the actual load of antibiotics, maybe, that they actually need-- so not a mass treat, but a specific, acute sort of treatment. 

MARK: So collecting a tremendous amount of data per animal, and then you multiply that by the number of animals, and you probably end up seeing a lot of gigs or terabytes of just raw data. And then using that to kind of make predictions, and understanding that something's off here. Let's treat that specific case with a much more strategic implementation, rather than just a broad, hey, let's just throw a bunch of pills at the cows and see what happens. 

AUSTIN: Yeah, yeah. 

GABE: The prediction-- are you actually using machine learning and artificial intelligence to do that? You're actually training all of the models? 

AUSTIN: Yeah, and that's part of where GCP comes in, is we've been able to throw large volumes of that behavioral data into systems like BigQuery and Cloud Dataflow, and able to run models over that and also test different models to see what sort of negatives they would generate, to understand how we can continue to grow and learn this thing over time. 

As the system gets smarter with putting in breed data, putting in other different variables that could affect the outcome of the animal, which are all things that these feedlots are trying to do with their food, but they're not looking at it from a health perspective. They're going out of their way to decide, what's the most effective food so that they can spend the least amount of food for the largest amount of weight gain. Because, I mean, that's what a feedlot is. 

GABE: Totally. 

AUSTIN: And it sounds horrible, but really, it can be done in a very humane way. And there's a lot of them that do it in a humane way, but it gets hidden by one bad actor. 

GABE: It's all trade offs, right? Like you're trading off-- as harsh as this is going to sound-- but you're trading off a certain amount of humanity for, really, the business. I mean, ultimately, they're all ranchers. They're all in it for their business. That's what they do so I can imagine that there's a lot of trade off when you're talking about that. 

So the cool thing for me and like why I got interested in HerdX when we first chatted was, this feels like a way to mitigate that trade off. Like you can still be humane with these animals, but still get the gains and the profitability. So you can, like you said, transform the industry, right? That's kind of the idea, is how can you do that? 

So when did you know you had something? Like you had this idea. You came out of retirement for it. What was the magical moment where you said, this could work? Like, we've got something here. 

RON: I think, well, you were actually involved somewhat in that early stage. We took over a small feedlot, leased it, decided just like any disruptive product, which is really my past, in order to change a mindset, you've got to prove it. 

And so here, I'm coming in really unbiased, no background on raising livestock. In fact, to be honest with you, I'm not someone that really likes something that's not clean. Ask my wife. I mean, everything is sterile at my home. And so moving out to a feedlot area, leasing something from a very famous style set of leaders that, in the past, have done very, very well, this place was abandoned. 

So we went in and said, OK, we're going to bring animals in. We're going to test. We're going to try some things, all with natural means, using data. And the woman that was there was watching this, and leased this property to us, started to become very excited. Again, when I first went out there, she probably thought we were nuts. And she began to say, look, this is interesting. 

GABE: Was she a rancher herself? 

RON: She was a past rancher, so they had basically given up on the process of the feedlots. A lot of the family had moved out. It's also very common. The younger generation decides to move to the city and do other things. So you'll see that older generation trying to hang on. But how do you do that without maybe the labor force or the means? So we went in and just decided, we'll just make it our own ranch, and we'll create our own feedlot. 

GABE: And you had never ranched before? 

RON: Never. 

GABE: So this was like totally fresh. I'm going to come in. Oh, I'm just going to make a ranch. 

MARK: How hard could it be? 

GABE: Right. 

AUSTIN: It was harder than we thought. But I think the issue is, we realized, if we do this in a way in which we would call it the most humane way of raising an animal, using natural means, and bringing in these tech systems that we were just going to place out there and start to test, even the rancher herself said, I thought you were in a different world, and said, I think this is something that I'd like to actually participate in. And if you remember, you met with her. Sure. 

GABE: She was the one sitting with us with a lunch in-- 

RON: At the lunch here. 

GABE: Yeah, yeah. Almost a year ago, like almost exactly a year ago now. 

RON: Yep. And she was proud of the actual output of what we could call a high-performance animal, never needed medicine, gained weight beautifully, and was absolutely incredible, the flavor, everything about it. 

GABE: I'm remembering. 

RON: And remember this. I mean, we're talking about the middle of a bell curve here. The primary beef in this country is feedlot raised. So we changed the basis of feedlots with someone that'd never seen it before. And she ends up becoming a superstar, sold everything immediately. All the animals were sold. 

So she's in the practice now of actually being one of the top, what I would call, high-tech ranchers just by the sheer fact that we drove by one day and leased her place. 

GABE: That's awesome. I love that. You told me a story at one point, which I would love for you to regale us with, of when you were testing the AI system against humans. It was like master's students in veterinary system and you wanted to-- 

RON: Absolutely, yeah. 

GABE: --prove that your system could predict as accurately as they could. 

RON: Austin's talking about anomalies, or what we would call something that's odd. And I think that you guys here at Google understand this. If you can take in enough data, you can really see a lot. But if you go into an area that's not ever been watched, you can surprise some of the best in the world. 

And we went out to meet with some of the high-end vets that actually do feedlot management. And they said, Ron, we have a graduating class, and in the summer, we always make the graduates work through the final year. And we do stuff like test them. 

Can we test you with our graduates? We are the best, and these graduates are what we consider to be some of the top. So they've made it through the program. Bring your stuff out. Let's watch some animals, and you let us know what you think. We literally set the antennas up. No one told us anything. We drove away. We were probably 500 yards from the site, and we could see, from our system, the animal that was, without a doubt, in trouble. 

GABE: The system knew. 

RON: The system knew. 

GABE: Yeah, yeah, yeah. 

RON: We were actually embarrassed because we knew so quickly. So our chief engineer said, we need to go back and tell him. I said, we need to wait about 30 minutes. 

MARK: So you said that you knew within a minute, or-- 

RON: We knew. 

MARK: --seconds. You're just like, oh, that's the problem one, but we can't go back and embarrass them. 

RON: We were sitting in a Suburban up the road. We didn't want to turn around because I was embarrassed myself for the poor students who were out there with their notebooks and trying to look almost like a pen rider would, because that's a very strong point here. A pen rider can give you one viewpoint. 

But if you look at data on a general basis and it's recalculating and reformatting, it doesn't take long for us to see what comes to the top. And we did it. 

GABE: Did you just go drive in circles for a bit before you came back? 

RON: We did. 

GABE: Yeah. 

RON: We did. We picked up some barbecue at a little place here, and again, I'm not a big ranch type person. So walked in, got some barbecue, stalled, went back to the lot, told the vets, we know the animal. And we obviously put it on a little piece of paper, handed it to him. He's shocked. And he's trying to slow it down, but he said to those students, let's come in. 

They turned in their results. We turned in ours. We were the only correct answer. 

GABE: Hm. 

RON: The only one. 

GABE: That's unfortunate for them. 

MARK: But it's hard, right? 

GABE: Sure. 

MARK: That is the reality of this situation, is that it can be really difficult to observe these sorts of things. And being able to collect, like you said earlier, tremendous amounts of data and then make predictions on it is something that just hasn't been possible up until recently. 

RON: That's right. 

GABE: I mean, these pen riders have the lifetime of doing the job, right. So they've got just a lifetime of experience of gathering that data. So in essence, they're kind of like the hard drives or the storage, whatever you want to call it. When one of them retires, all that tribal knowledge-- whoosh-- gone. It's so cool to me that there is no leaving the system. The data is there. The data is there. 

So it's really more of a factor of, this can just be applied everywhere. There's no reason not to just apply this all over. 

AUSTIN: It's way more possible to export a model from AI than it would be from a person. 

GABE: Human knowledge is tough to dump. Anyone that's left a job knows, like I've got two weeks to dump all of my knowledge. That's not a thing. How do you do that? You can't do that. 

MARK: And if you're looking for another business idea, finding a way to exploit human trained models would be fascinating. 

RON: So on that-- 

MARK: Oh, are you working on it? 

RON: --I would say we can't discount the years of experience that the pen riders that do still work in feedlots. So we have built features into our ecosystem, apps, whatever you call them, that do allow human feedback. So we'll make what we call a prediction or a recommendation, right? But we still allow and track the negation or acceptance of that from an actual pen rider. 

GABE: I'm guessing that then, that gets folded into the model. 

RON: As a lot of people are aware, machine learning, you have to put weights on things. This big weighted average machine's just churning at high speed, right? 

GABE: Yep. 

RON: So you put a specific weight on that, a feature, or that data point, and it can get folded in. So it's a function of understanding how important the different variables are in different cases, and then making good predictions that are not noisy. They're not false positives, and they're also manageable by the staff because when you go into a feedlot that might be really not doing so great-- 

MARK: You need a lot more antibiotics. 

RON: --maybe, or in the sense of being able to provide relevant and manageable predictions. 

GABE: So we have this concept of greenfield versus brownfield. The idea is, does your system work-- you mentioned a feedlot that's in bad shape and lots of sick animals or whatever it is-- can the system be deployed and fix brownfield so you could take a feedlot like that that's in really bad shape and be like, hey, bring in our system. We'll help fix your situation. Can it do that? 

RON: Oh, yeah. Yeah. 

AUSTIN: We think that if you deploy our system, our monitoring, in the right way on a feedlot like that, if you have a good strategy for treating those animals, which we have a couple of other technologies that can help you with that, we think you could turn that place around. And I think there's evidence of that in some past research that Ron and people before me have done. Yeah. 

MARK: And that's kind of the idea here is not to completely automate the entire farm, right, or the ranch, in this case. The idea here is to actually gather all of this data, which wasn't possible before, make predictions on this data, which wasn't really possible before minus human intuition, which is an astoundingly powerful thing. 

But like you said, it's difficult to export. It's difficult to transfer that to different people. But it's also limited in terms of what one person who comes in and sees it is. So with your system, you collect all the data, you make the prediction, and then you give to the humans, and they can implement changes based on that, right? Like a lot of AI. 

It's not trying to replace humans. It's trying to make them much more efficient at not only getting, but also predicting, based off of data that just wasn't possible. 

RON: Yeah, I mean, if you think about the fact that we showed an early tool to a university that's great at what they do, that tool becomes better. And soon as the input is, I think, shared across a number of users, it even improves through the human interface. 

GABE: It's artificial intelligence, right? 

RON: Absolutely. 

GABE: So the idea is, the more inputs you get, the better the system gets, the more accurate it gets. So broader adoption just means it's going to be better and better at predicting the anomalies of an animal that's not behaving properly. It's just going to get better at doing that. 

RON: And this is something I think we should maybe talk a little bit about, the whole global impact. If you can imagine now, converging information from different parts of the world, looking at different animal movement criteria, you're talking about global perspectives here. And I think we can automate a really nice system based on the fact that there is a desire to have animals that are high performance, clean, and retailed properly, because we're bringing the transparency now to the retailer. 

MARK: And I imagine that these models have a lot in common, but how different is that data from a ranch in Texas versus a ranch in, let's say, Australia? 

RON: So the difference-- I mean, Austin could go to this-- but we obviously have environmental changes and, obviously, the breed, the genetics. Surprisingly, the fact that movement is so vital to an animal, right, especially if they're in a stressed condition, is somewhat similar. But you've got all the other pieces that come into play. 

GABE: So a stress situation might look very different in a hot, humid environment like Texas versus, say, an arid situation. 

RON: Oh, yeah. Oh, yeah. 

AUSTIN: Day one, implementing, Australia, somewhere in Wyoming, whatever, totally different temperature, we can still predict the animals that are sick just on the way they move. The goal is to get better and better at that, adding in the other variables. 

GABE: And better and better translates to how soon, how fast. 

AUSTIN: Better and better, how fast. Also being able to filter out any noise that we might be creating based on other factors, such as a different terrain, blah, blah, blah, things like that, or heat and humidity levels, the moisture content of the grass or their food, different things like that. So those are some of those variables. 

But given the difference of hours or days on their behavior, we can still predict which ones are sick. And that's been proven from different temperature scenarios and things like that, again, the research that early HerdX did. So a lot of what's happened in HerdX is amazing technology and ideas have been developed, and now the phase that we're in now is actually taking that, realizing the data value of it, bringing it into the cloud, and scaling that piece. 

So a lot of this cool stuff has actually been implemented on farms and things like that. And what we're now doing is packaging it up where it can be run in a modern way and on the cloud, and scale out to the entire globe. 

GABE: Yeah, we call that the lift and shift. 

AUSTIN: Yeah. 

GABE: Like once you've got it all set up in your local environment and you have it all humming along, now it's time to get rid of the infrastructure requirements and just get it out, right? So I know that we've been talking a lot about the first part of this business. But I know there's more. 

You talked about, originally, this transparency all the way to the consumer. So let's talk a little bit about what that means. We've now got a good idea of what it looks like on the ranch, right. So we've got the livestock's all being taken care of. They're getting improved health conditions on the feedlots. How does this help the consumer? Where does the consumer come into this story for HerdX? 

RON: I mean, Austin and I could both jump into this. It's kind of fun. We've been watching this happen over the last year, for him, and the last five years for me. The retail experience is radically different than it was five years ago. The amount of data that's necessary to make a purchase has to be high speed and has to be relevant, right? 

So your buyer is more aware, in certain categories of food, as to what they're eating and how it was raised. In the case of US beef, that's our goal now, is to really bring that transparency all the way through a-- we'll call it a blockchain perspective, but it's the methodology of participants that all work to make sure that the food is high end, treated in a more natural way in the beginning, and then processed in the best conditions, and then moved and trucked under the right conditions. 

By putting all those pieces together, you've created a really awesome system for retailers. 

GABE: It feels like, and correct me if I'm wrong, the concept of the farm-to-table, right? That's what we're talking about is, people are really enamored of the farm-to-table concept of knowing this food came from the farm a mile away. So it sounds like what you're, in essence, doing is extending the reach, the range, of what that farm-to-table means. 

The food doesn't have to be next door to you anymore. It can be at a ranch hundreds of miles away, but you're giving the ability to see, for those end consumers, what the origin point looks like and where it's from. What does that look like? For instance, I'm going to go buy some meat, right? 

RON: Yep, and let's do this in a way in which-- I think Austin can help break this down-- from a market perspective or maybe the niche that HerdX has, I think there's a given on anything that's pasture raised that's out there just running and roaming. It's a good animal. It has not been removed from its mom. 

It's running out in a really well-run pasture. So the given is, it's safe. It's clean. It's a great animal. High performance. What I'm saying, that it's a high-performance end good. In the case of the feedlot, again, the majority of the entire US business, right, 24 million animals on feed here in the US today, how do you take care of those? 

So that's what the system's all about. And I think the advantages, it's the majority of this country's livestock and beef that's raised on a feedlot. That is not a pasture-raised animal. And we're basically putting a mechanism in place to allow that to be the future of how beef will be raised and how it's made available to the retailer. 

AUSTIN: Yeah, so we analyze the cattle supply chain, the meat supply chain, and looking at the different countries involved, and they all want a tracing program. And there's so many hurdles to that and people who don't want to share data with who, or people who are kind of on the fringe of the supply chain. 

So we selected the technology and the methodology of just having each person just have a way to manage the transaction on the batch of animals, right? Although we can with the data, we're not trying to be one of those people that shows you the nose print of the cow that you're eating. We don't think that the consumer really is into-- 

GABE: That might be a bit much? 

AUSTIN: Yeah. I think what the consumer wants is a connection with another person, not a connection with an animal. 

GABE: The rancher, yeah. 

AUSTIN: Yeah, I mean, so we're trying to basically lift the rancher, the producer where the animal has been most of its life, because they're only at a feedlot for maybe three months, maybe five months. So the majority of its life, it was raised as a great animal on a pasture in some small town with some just super quality people. And then it gets moved into the supply chain where it gets hidden. And those people, they're having to fight for business all the time. 

So we're trying to highlight those people, create more incentive for people to have longer term contracts with each other because they're working together on a supply chain, which ends up making them all more profitable, while at the same time not changing the middle of the bell curve of meat, because we want basically the pasture-raised farm-to-table for every family. We want that for everyone. 

So how we do it is, we outfit the different supply chain partners, or we integrate with technology. So we integrate with their technology or we outfit them with technology. And they're able to check in, check out, at that transaction time, at the moment of transaction where the animal or the product is moving hands. 

We're able to take their paper processes, make them digital, but then because it's going into a distributed ledger-- because I hate the word blockchain-- it's something that we're trying to build for 50 years to come, right? We're trying to select a technology that's future-ish proof, right, something that can be managed by the industry moving forward. 

That's the reason for the distributed nature of it. It's not because blockchain is the hot thing. It's because that actually makes sense in this case because they will start to manage the industry long after-- maybe HerdX in 20 years, maybe HerdX isn't a thing. Who knows? 

But the cattle industry all over the world needs a distributed method for having a single source of truth because that's what the consumers need, and that's also what agencies need, health agencies need, people need in recall scenarios. There's a lot of, what's the opposite of collateral damage? [LAUGHS] 

GABE: Targeted. 

AUSTIN: That happens, yeah. Yeah. No, I mean collateral improvement, when you get a system that can know the source ranch and all the steps in between that something's taken because it's not the producer that has a problem. It's many steps down the road and many changes of hands. It could even be in a bad scenario. 

Obviously, HerdX is focused, its technology is focused on removing the bad animal before they get into the supply chain. That's a big huge goal, right? But there's also the ability to detect the issues within the supply chain due to timing, temperature control, things like that, because a lot of times it's just a package of meat sitting on an airport because a truck is late kind of a thing. 

That's where sometimes things go wrong, and people get sick and stuff like that. And so what we're hoping to do is, first off, remove the bad animal at the beginning because when you have a higher quality animal, the shelf life of that product is actually better because of the stuff inside the meat, but then when it gets into the supply chain, taking away the hidden tactics that make that a little less safe. Does that make sense? 

GABE: Yeah, yeah. It's being able to backtrack. If there is a bad actor somewhere along the supply chain, like you said, it might be in a pallet that was left for a little bit too long. And now everything in that pallet's bad, but everything in that pallet might be forked all over the place from different ranchers. If the ledger can identify from all of the same meat back to one bottleneck point, you now know that you found your bad actor. 

So the core of the health system of watching over these animals, that all happens at the feedlot level. But you're saying this ledger, the blockchain, for lack of a better way of putting it, the receipt of transfer extends all the way back to the initial ranchers, the raising of the animals. 

So it's raising of the animals to the feedlots to the packing. So you're tracking the whole chain. How far down does it go? Does it go all the way to the end consumer, the stores? How far does it go? 

AUSTIN: Yeah, I mean, so think of it backward. So we're working as hard as we can to get as close to birth of the animal as we can. I mean, the easier parts are starting at the grocery store and working backward. So not that it's a huge challenge. I'm saying the harder part is to get propagated all the way back to these ranches that are on 2G basically kind of a thing. 

So that's where we love our business model because it pulls us into those places so we don't have to go look for them. They're just, we get an address basically kind of a thing. But it does go all the way to the grocery store, and that's really the consumer side. Go ahead, Ron. 

RON: Yeah, I mean, the grocery is needing to make sure they retain customers. And so if you think about it, if you can actually highlight a new meat product, have a storyboard back to a hot producer, you've completed the chain. But in a sense, you've improved retail. And so I think there's a huge advantage. 

Again in our case, we recognize that when an animal comes through, it's divided into many parts. And so you've got some that go to a restaurant, some that goes to a grocer, some will be ground into ground beef, right? And so the advantage for us is providing that transparency all the way through. We believe that's the actual retail thrust of our company. 

GABE: Or you imagine, like people doing A/B testing with different ranchers? I mean, like, oh, the meat from this rancher is really where it's at. 

RON: So it's interesting you're saying that. I mean, I think it's a new market advantage. And I'm sure if some are listening today, that the retailer is always looking for something, right, especially the big market managers or the product managers. 

If you can imagine, if we go back to the ranch, the original test ranch of the many that I've had, she sold all of her meat immediately. So if you really ate at that restaurant that night, and I think, Gabe, you were with us-- 

GABE: Mm-hmm. 

RON: --if think about a grocer up the street, a small grocer here in Austin, that carries that same brand, they may ask for hers again. Think about that on the backside coming back. So now we're providing a report back to the producer who says, we need to have so many more of your animals, so much weight, so many cuts, to come to this Austin grocer, due to the restaurant that was just up the road. 

MARK: Well, it's like you said, right? I mean, this is visible throughout the entire supply chain. 

RON: Absolutely. 

MARK: At each step, they're going to look back and say, I want this one because this one has more data. I know this is good. And here's the reasons why it's good. I now have observability in ways that I didn't before. And that goes all the way from the ranch, up, up, up, up, up, all the way to the person who goes and buys it, whether that's a restaurant, whether that's just a person going to a grocery store. 

RON: Yeah. The thrill, literally, even today, our work with you guys, we could do this globally. So I'm in New Zealand. I'd leave for Japan on Monday. I'm in New Zealand the following week. We're providing the same reports back to them of requests for those animals that has never been seen before. We're providing, to the retailer, reports of information they've never seen before. We're marrying, basically, those two ends of the bookends. 

GABE: And I'm assuming people are super excited about seeing that, and that's got to to be eye opening for these folks. That's like, I can know what? 

RON: Exactly. 

GABE: How? That's the magic, right? 

RON: That's it. 

GABE: That's hopefully what's offered. 

AUSTIN: One thing we talk about a lot with HerdX is, HerdX isn't the only one that could implement a traceability program. There's a lot of people that are trying to do it. The USDA has been trying for how long? 

RON: 21 years. 

AUSTIN: 21 years. We love the USDA. And we think they can do it. And we are here to help, right? But there's something different when you have a supply chain that's also got what we call authenticated data, meaning data that's collected without human intervention or interaction. So we have automatic monitoring systems that can verify the source country of the animal. 

It can verify a number of different things. It can actually also play into however far we want to move the movement data, even over to the retailer, to give them a stamp of assurance or some form of quality metrics on this animal. 

When you think about higher quality retailers or when you think about retailers that are just super risk averse-- I'm thinking of a name right now-- they want as much data as they can on mitigating their risk. So they want the highest quality, lowest cost animals, right? 

So the data that we're able to provide, but not just data, but authenticated data, data that isn't just someone scanning a piece of paper which could be fraught with error. It's authenticated data from automatic monitoring systems that we actually know if someone's opened the panel on our hardware. 

So it's like we can put different weights on different data. So we think that authenticated data, or thinking about data in a way that's like, hey, this is not just manual data digitized. This is a new form of data that didn't exist before. And it's collected in an autonomous way, which I think heightens your ability to trust it because there's no human intervention. There's no bad actors available. 

GABE: It's not subjective anymore. 

AUSTIN: Yeah, it's not subjective. 

GABE: So this brings up kind of an interesting thought, which is, the USDA offers a bunch of certifications, like organic and all these other things. It kind of feels like your system would blow that out of the water because the certification becomes automatic now. If you know every step of how your animal is raised, you know if it's organically raised. 

AUSTIN: Exactly. 

GABE: I don't have to give someone a bunch of money to get the stamp on it that says I'm organic anymore. Have you felt any pushback from that? 

MARK: You go to the grocer, and you just have the HerdX number printed-- 

GABE: Yeah, right. 

MARK: --right on there, right? 

RON: Yes. Yeah. 

AUSTIN: So I think some of those agencies aren't necessarily aware of what this sort of ledger, this sort of network can do. 

GABE: They haven't put two and two together yet. 

AUSTIN: And think about the fact that it could be cooperative. It couldn't be as bad as what you're saying. It can be a cooperative thing with them. Part of the goal of the network, again, is this is for the industry. Obviously, we're a company. We have to make money. But this is for the industry. 

And you think about the way that blockchains can work, I mean, we have our smart contract that manages the change of hands on the network. But there's other contracts that can be written on top of the same network, right? 

So the organic certification could be a function of data in, certification out, on a specific batch of meat. So those are some of the things that maybe you still have an overhead cost or whatever. This is just ideation. Those are some things that you can do with-- weird thing to say-- a data network, a ledger. 

So how that works out is, you have third parties and agencies involved in different parts of the data, because again, the beauty of the distributed ledger is not all the data is in everyone's hands, but the fact that there's data somewhere is in everyone's hands. The world's data is distributed, but not the actual data is distributed. 

GABE: Right, right, right, cool. 

RON: Again, we've talked about this with you guys, that I believe Google brings a tremendous amount of B2C information and knowledge. I mean, I think we have to be aware of the fact that enterprise solutions, information on the cloud, on multiple clouds, whatever we're setting up, we feel really comfortable with the fact that search is a very important part of retail. 

And I think it's important that we, as a company, take advantage of the fact that the shopper's changed, and that search and what they read, and some of the ad campaigns that we're going to place together with, I think, some of the top grocers and restaurants in the world, all fit with this new data. It totally makes sense. 

MARK: This is unique, right? There are so many people talking about, oh, we can grab data and analyze it and build machine learning. And then what? Right? This is a concrete scenario where you said, look, we know that we can do this. What are we going to use it on? And then you found an actual case study, or a use case, I should say, and then said, yeah, let's do it. Let's apply it. Let's see what happens. Let's test it. 

And then now you're coming up with a business model based on it. And now you're basically flying all over the world trying to show people that this is cool. And people care about it. And we're making animals healthier. We're making the supply chain easier to understand. We're giving consumer choices. I mean, this is win, win, win, win, win. So that, I think, is really the core model. 

RON: Austin's looking at me because my main thrust, every time I come to the company, is everybody wins. And we really feel like that, right? Even the USDA piece that Austin commented on, it's a win for them. Is it cutting edge? It is. I mean, I spoke at the conference. They asked me to come and speak. I actually said I didn't have time. Then I realized I'd better just go say something because we could provide a tremendous amount of information, even if, as small as it might be, that is just the right piece for a recall. 

They don't have to pull two weeks of supplies. They can pull two hours-- 

GABE: One time, right, pull a pallet of meat off. 

RON: Yeah, it's a pallet, maybe a batch. That's it. 

MARK: Well, this has all been super cool. I think we're running out of time. Are there any other events coming up? What's coming up soon for HerdX? 

RON: So I don't have to sleep. That's what some people say. 

[LAUGHTER] 

We love the changes that are going on, not only in our industry, but in many others, due to data. My big event for me is the Innovator of the Year finalist in New Zealand, due to the fact that we're taking all their sheep and lambs and placing this technology out there and helping them to propagate. 

What they have to propagate is a livestock export business. They have to keep that rolling. We're going to basically build that. We're also nominated for bilateral trade which is an increase in New Zealand's business, which has already happened due to our product. So those are the big wins for me. And actually, it's a long flight, but it's well worth it when you can come up against some of these guys that launch rockets for a living and say we're helping to launch sheep. 

[LAUGHTER] 

MARK: Not launch sheep in rockets, but-- 

RON: No, that's right. 

MARK: OK. I just wanted to make sure. 

AUSTIN: That's next year. 

GABE: Yeah, I was going to say, I kind of want to now launch sheep in rockets. 

AUSTIN: We need to do that now. 

GABE: Right? 

MARK: Well, I think you need to make a business model for it. 

GABE: I mean, you are the CTO. This can happen. 

AUSTIN Quantum computers, sheep rocket launchers. Ron will say yes to anything I ask for. 

RON: Yes. 

MARK: As long as it still uses the blockchain. That's the key point. 

GABE: Of course, yeah, yeah, yeah. 

MARK: That's how you know it's cutting edge. 

GABE: Got to keep the buzz word. Got to keep the buzz word. 

MARK: Well, Ron, Austin, thank you so much for coming in and talking about-- I mean, this is fascinating stuff. So thank you so much for shedding some light on it. And obviously, good luck at the innovator awards. 

RON: Thank you. Thank you all. 

MARK: Thank you so much to Ron and Austin and Gabe for, of course, making that connection and bringing them in. I mean, there's a whole world I had never even thought of before. 

GABE: I think Ron said it, which was, when you go into markets and industries that haven't really looked at the data, it's fascinating what you can get out of it. Once you can collect and look at these huge amounts of data in aggregate, what you can do with that boggles my mind. And I'm really glad that HerdX was able to figure out, like, I'm just going to look at cow data. And they figured out this really cool system based on just movement of cow. It's really, it's awesome. 

MARK: Yeah, I mean, it's a cool system and, like you said earlier, it's such a great idea they have to try and bring a little bit of cleanliness, a little bit more responsibility, a lot more observability, into the whole process so that ultimately, they're solving some real problems. 

And I know that Ron shared stories that he's going off and traveling and bringing this to a lot of people. So it's super exciting to see where this will be in the next couple of months/years. 

GABE: Totally. 

MARK: Super, super cool. Well, we talked a little bit earlier. So let's revisit our question of the week. 

GABE: Ah, yes. 

[MUSIC PLAYING] 

MARK: And so let me ask, if I've got a physical IoT device or some sort of mechanical server or something, and I want it to respond to an event in the cloud, like, let's say somebody uploads a file or someone changes some parameter and that causes a trigger, what does it actually look like? Those are two very separate concepts. So how does that work? 

GABE: So it's interesting. It's not as hard as you might think. So we've got a product in Google Cloud called that IoT Core, and what it does is it allows you to communicate between a device in the cloud securely-- it connects it in a secure way to the cloud. 

And now that physical device has a digital representation. In the industry, they sometimes called it a digital twin. They have this digital object in the cloud that you can interact with. And there's APIs where, depending on how you want to trigger it, you can send admin messages, configuration messages or commands, back down to your device through this connection. 

So when the device is online, you can basically say things like, OK, I want a fan to automatically turn on when the temperature hits a certain level. So it's easy if they're in proximity. We've all got a thermostat in the house, right? So a thermostat hits a certain level, and either your heater or your AC comes on in the house. 

Same concept, but now you can divorce it from being physically connected. So you don't have to have a thermostat connected to your heater system anymore. Thermostat's connected to the internet. Your heater's connected to the internet. And now, based on the temperature on your thermostat, your furnace can come on. 

So this is the same idea of-- Nest does this with the smart stuff, sending all the data out. That's kind of the same idea of how you do this. So from a physical standpoint, you've got some input, and that can be like temperature going up to the cloud. And those can be messages going into Cloud Pub/Sub. 

And then you've got something watching Cloud Pub/Sub that reads those messages and sends through the IoT Core admin interface that says, for this device, do this. And then IoT Core reaches out to that device through the digital representation it's got, and the device responds to it. 

So it's a pretty simple-- by APIs. I mean, it's like one function call. It's not like there's huge amounts of code you have to write. It's really concise. It's nice. 

MARK: So IoT Core does a lot of the work there, and it kind of does two different parts. It does the part where it receives a signal, which I think you can call through Pub/Sub or some other cloud functions, which hopefully, most people who are working in the cloud have a good sense of how to do. 

And then on the IoT Core site, it also creates a digital version, like you said, a digital twin, that basically you're sending signals to that. And then when that gets a signal, it handles the mechanical part of connecting that to the actual device. 

GABE: So my product manager's going to freak out. Digital twin has a very specific meaning in a lot of places, and this is not technically what the industry ca-- I think of it as digital twin because I haven't been in the IT industry for decades. But people that have been, there is a very specific connotation. 

I call it that, but it's really just an object in the cloud that represents this physical device. I wrote a blog post about literal step by step, if you wanted to do something like this. I'm Gabe Weiss on medium.com. If you just look for Gabe Weiss, you'll find it. The show notes will have a link to it. 

But yeah, I basically came from the concept of, in the IT world, there's two types of engineers. There's hardware engineers and software engineers. And the hardware engineers often have no idea about the cloud. This is a broad generalization. It's not always true. 

But Silicon hardware people often don't understand the cloud. And then cloud people and then software people often have no idea about the physical devices. So I came at it from a, let's pretend no knowledge. Let's pretend the people that are coming, wanting to do this, have no idea how to do anything. 

So it's step by step, very clear, like run this command, make sure you see this output. Really, the blog posts I wrote for this are very detailed on how to do that. 

MARK: So I mean, if that's something people are interested in, go read the blog post or just yell at Gabe about using digital twin incorrectly. I mean, anything works, but it sounds like those are some-- that's some pretty cool stuff. I haven't gotten into those blog posts, but maybe I'll spend the weekend reading over that. 

GABE: It's fine. It kind of opens your mind to like, well, what can I automate in my house? And that's true. And then do it safely, please. Please, please, please. 

MARK: Yeah, test, test, test. And then be certain there's no loose wires or anything. 

GABE: Don't set the count on fire. No, that's bad. 

MARK: But usually, I would say most people can agree that's pretty bad. 

GABE: Right? I mean dog people-- I don't know. 

MARK: So very, very cool to check out those details. I'll definitely be looking at that. In the meantime, Gabe, what do you have going on? Anything cool coming up? Any cool travel or plans? 

GABE: A couple of things. So I'm going to be at Cloud Next in London. 

MARK: Very cool. 

GABE: That's coming up in November. Just officially signed on. I'm moderating a panel on machine learning which will be fun. Yeah. I'm also, I'm going to talk to a potential customer of ours. They want to do some IoT stuff there. It's awesome. They're doing heavy IoT data on ocean current and temperatures, and they've come up with some cool tech to do the buoys better. So I'm going to go chat with them about how to get that data in the cloud. 

MARK: Just another example of a lot of companies figuring out, now that we have the ability to collect all this data, and now that we have the ability to process all this data, what could we do? We can do anything. 

GABE: Exactly that, yeah. 

MARK: We just need to figure out what it is. And I'm sure that measuring the temperature of things like the ocean currents and what direction they're going in and all those other kind of data that I have no idea about, but all those kind of things, it's like, well, what can you do with that? I'm sure the possibilities from there are going to be endless, especially in the energy space and in terms of safety, all kinds of things from that. 

GABE: Maybe save the planet. 

MARK: You know, just generally. It's almost like IoT is saving the planet. Thank you, Gabe. 

GABE: I want that to be our new tech. 

MARK: You are helping people save the planet. 

GABE: So what about you, Mark. What do you got coming up? 

MARK: I am not saving the planet, unfortunately. I am going to stay pretty local, working on some, like I mentioned, with the billing. I think we're trying to launch a couple of cool videos and other content items to help people understand a lot more about billing. 

I'd like to think that while people are using IoT to save the planet, I'm going to be helping them make sure that they pay everything responsibly, and that they can keep their costs down. 

GABE: Well, which is good. It's important because we need those companies to stay around. 

MARK: You need all of that. You need everything in there. 

GABE: See, you're still saving the planet. 

MARK: We're all working together to save the planet. Well, on that feel-good note, I think we're just about out of time. So thank you everyone for tuning in, and we'll see you all next week. 

GABE: Right before I go on stage, I will feel like I have to pee. I could have gone pee two seconds before. It doesn't matter. That's how my nerves manifest. 

MARK: It's like a nervous bladder, right? 

GABE: Yeah, yeah, yeah. 

MARK: But I think that's something a lot of people can relate to. 

GABE: That's what I mean. Like I just feel like it, but I don't have to go. 

MARK: Oh, yeah, I see. 

GABE: I could have just gone, like there's no pee. There's no pee. 

MARK: I know.