+++
audioDuration = "00:32:05"
audioFile = "Google.Cloud.Platform.Podcast.Episode.10.mp3"
audioSize = 46211209
categories = ["BigQuery", "Dataflow", "App Engine"]
date = "2016-01-26T01:07:49Z"
description = "In the tenth episode of this podcast, your hosts Francesc and Mark interview Graham Polley and Pablo Caif, who are both Google Developer Experts who work at Shine Technologies."
draft = false
episodeNumber = 10
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Graham Polley & Pablo Caif from Shine Technologies"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/2wbRQ4YjwPt" 
redditLink = "https://www.reddit.com/r/gcppodcast/comments/42xyy7/episode_10_google_developer_experts_with_graham/" 
+++

In the tenth episode of this podcast, your hosts
[Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic) interview
[Graham Polley](https://twitter.com/polleyg) and [Pablo Caif](https://twitter.com/pablocaif), who are both [Google
Developer Experts](https://developers.google.com/experts/) who work at [Shine Technologies](http://shinetech.com/).
<!--more-->

##### About Graham

Graham is a senior software engineer based out of Melbourne Australia. He's passionate about promoting the adoption of 
cloud technologies into software development, and regularly blogs and gives presentations. Graham has extensive 
experience in building big data solutions for clients using the Google technology stack, and in particular with 
BigQuery & Dataflow. Graham works very closely with the GCP engineering team in the US, where he is a member of 
their cloud platform trusted tester program, and the solutions he helps build are used as internal exemplars of 
developer use cases. Graham is also a GDE on the GCP.

You can contact Graham through [Twitter](https://twitter.com/polleyg), [email](mailto:polleyg@gmail.com), 
[blog](http://blog.shinetech.com/author/polleyg/) and [Google Developer Expert Profile](https://developers.google.com/experts/people/graham-polley).

##### About Pablo
Pablo is a passionate software engineer who enjoys solving complex problems, and devising simple solutions. 
He works at Shine Technologies and he is part of a team that uses BigQuery and Dataflow to solve challenging and 
complex data processing business requirements. Pablo considers that scalability and performance are paramount to 
developing a great solution, and that is why he has been using Dataflow and BigQuery to bring these solutions to 
reality. Pablo is also a GDE on GCP.

You can contact Pablo through [Twitter](https://twitter.com/pablocaif), [email](mailto:pablocaif@gmail.com), 
[blog](http://blog.shinetech.com/author/pablocaif/) and [Google Developer Expert Profile](https://developers.google.com/experts/people/pablo-caif).

##### Cool thing of the week
 - [Google Cloud Platform Next](http://goo.gl/lNPpwr)  
   Join the largest gathering of the Google Cloud Platform community to explore the latest developments in cloud technology.   
   Come meet the people that help build Google Cloud Platform, such as engineers and product managers as well as network with
   experienced cloud architects, managers and engineers who have deployed GCP in their organizations.
   
##### Interview

- Shine Technologies [homepage](http://shinetech.com/)
- Google Developer Experts [about page](https://developers.google.com/experts/about)
- BigQuery
  [docs](https://cloud.google.com/bigquery/)
- Cloud DataFlow
  [docs](https://cloud.google.com/dataflow/)
- Cloud Dataproc [docs](https://cloud.google.com/dataproc/)
- Google Cloud Dataproc and the 17 minute train challenge 
  [blog post](http://blog.shinetech.com/2015/10/14/google-cloud-dataproc-and-the-17-minute-train-challenge/)
- A week in the life of a Google Developer Expert [blog post](http://blog.shinetech.com/2015/12/07/a-week-in-the-life-of-a-google-developer-expert/)
- Messages in the sky [blog post](http://blog.shinetech.com/2015/10/19/messages-in-the-sky/)
- Shine with BigQuery: The 30 Terabyte challenge [video](https://www.youtube.com/watch?v=LSLU8Gxt-rc)

    
##### Question of the week
- The Google App Engine Admin API [doc](https://cloud.google.com/appengine/docs/admin-api/)

{{< transcript "FRANCESC: Hello, and welcome to the tenth episode of the weekly Google Cloud Platform podcast. I am Francesc, and I'm here with Mark, Mark Mandel. How are you doing?" >}}
MARK: I'm good. How are you doing, Francesc?
FRANCESC: Pretty good, pretty good, just getting very excited about this episode. We're gonna be talking with some of our good friends, Google developer experts.
MARK: Some good friends in Australia.
FRANCESC: Yup.
MARK: Makes me very happy.
FRANCESC: So we're gonna be interviewing them about GDE, what is a Google developer expert, what do they do and how do you become one?
MARK: Yeah, and even talk a little bit more about big data and some of our tooling in that area too, and how some of our actual users are using it and the use cases they have, so that's cool stuff too.
FRANCESC: Yeah, that's really the kind of people I really enjoy talking to, is people that are using our technologies for things that we didn't not even expect 'cause that's how you learn how to improve your products, really, so very, very useful people.
MARK: Definitely, and if anyone's out there using our products and want to come on the podcast, please don't hesitate to get in contact. We'd love to speak to you.
FRANCESC: Oh, yeah, yup. Should we do the--
MARK: Do the thing?
FRANCESC: Contact method?
MARK: Well, what's the email address?
FRANCESC: The email address is hello@gcppodcast.com.
MARK: On Reddit?
FRANCESC: It's the subreddit /r--no, r/gcppodcast.
MARK: On Twitter?
FRANCESC: @gcppodcast.
MARK: The website?
FRANCESC: gcppodcast.com.
MARK: And Google+?
FRANCESC: +gcppodcast.
MARK: There we--
FRANCESC: No, +googlecloudplatformpodcast.
MARK: No, it's plus--you can actually get to it for--you can actually go google.com/+gcppodcast, and it works.
FRANCESC: Ah, there you go.
MARK: There we go.
FRANCESC: Okay, I almost got it this time.
MARK: There we go.
FRANCESC: Good. So yeah, if you have any--like, let's do it again. If someone wants to, send us emails about cool things of the week, questions or topics that would like us to cover, whatever.
MARK: Yeah.
FRANCESC: We always like receiving emails from you people.
MARK: Yeah, it makes this job fun, so we definitely want to hear it.
FRANCESC: Yup.
MARK: Wonderful. So we have a great cool thing of the week this week. I'm pretty excited about this one. It's coming up in March.
FRANCESC: Yeah, I am be too and excited and slightly scared 'cause a lot of work coming on this.
MARK: That is true.
FRANCESC: So yeah, we're gonna be--we actually just announced the next GCP Next, so GCP--the next GCP Next, that's good.
MARK: The next GCP Next, yeah, that’s good.
FRANCESC: It's really [inaudible]. So GCP Next, which is the Google Cloud Platform big event taking place in San Francisco, Pier 48 if I'm not mistaken, and it's gonna be on March 23rd and 24th.
MARK: Yes, it is.
FRANCESC: So what is this about?
MARK: So it's the big Google Cloud Platform event, so if you're interested in Google Cloud Platform and you want to come down and meet the DAs, meet the developer advocates, meet the engineers, I’m sure they're probably also just as exciting, product managers.
FRANCESC: Product managers.
MARK: Yup. Here, probably, I'm guessing there are gonna be some exciting announcements. I can confirm nothing.
FRANCESC: Yeah, there's completely confidential things like--no, just kidding. No, but there's gonna be really cool stuff. I know I’m very excited about the keynotes, also because we're gonna have some really cool people at the keynote. We have Urs gonna be speaking.
MARK: Nice.
FRANCESC: Also Diane, so yeah, basically the--
MARK: Brian Stevens.
FRANCESC: Brian Stevens, so the top people at Google Cloud Platform are gonna be there for you.
MARK: Yup.
FRANCESC: So I think it's an opportunity not to miss.
MARK: Jeff Dean's gonna be there.
FRANCESC: Yeah, yeah, Jeff Dean, yeah, he's kind of important, I guess.
MARK: Yeah, little bit, just a smidge, you know.
FRANCESC: Yeah.
MARK: That's fine, but yeah, we're gonna be running, like, a GCP boot camp the day before as well, so full-day instructor-led training, really, like--yeah, we'll definitely have the link in the show notes, but yeah, if you have anything interesting you want to hear about Google Cloud Platform and you want to sort of mingle with people who are also doing Google Cloud Platform things, GCP Next is the event to get to.
FRANCESC: Yup. I know I'm gonna be there. Actually, we're gonna be there. We're planning on recording a special episode, our first episode outside of the studio.
MARK: Yeah, yeah, so if you're interested in being in the podcast but don't want to, like, do a lot of work, if you're physically at the event, we will be around, and we'll be looking to interview people at the event, so please definitely come up to us and say hello.
FRANCESC: Yup. Cool. Okay, so that was our cool thing of the week. Now I guess time to go say hi to our friends in Australia.
MARK: Let's talk to our friends in Australia. We are joined today by the very first Google developer experts to be coming on air with us on the podcast. I'm very excited, also because both of them live in my hometown of Melbourne, Australia, which makes me double as excited.
FRANCESC: Nice.
MARK: We are joined today by Graham Polley and Pablo Caif, which I think I just messed up your last name.
FRANCESC: Yeah, it's Pablo Caif.
MARK: You--both of you, both of you. How do you pronounce your last name so that people know how to get them right?
PABLO: It's Caif.
FRANCESC: It's easy. If you speak Spanish, it's easy.
PABLO: It's Spanish. It's easy.
MARK: And it's Polley.
FRANCESC: Of course.
MARK: What's even worse is I--
GRAHAM: And it's Polley as in Polly wants a cracker.
MARK: Yeah, and it's even worse is I asked you beforehand and then messed it up in exactly the wrong ways. So thank you, thank you so much for joining us. Like I said, you're both Google developer experts. I know you've been in the program for a little while. You're both down in Melbourne, Australia, which makes me super happy. Eeny, meeny, miney, moe, Graham, you're on our document first. Why don't you give us a little bit of background about yourself, you know, who you are, what you do, and then we'll get to Pablo.
GRAHAM: Sure. So first of all, thanks for having us do the podcast. We're also very excited to do it. My name's Graham Polley. I'm a software engineer, also a Google developer expert, as you've pointed out already, and I'm actually a Google developer expert for Cloud Platform, and I specialize in big data, so work a lot with tools like BigQuery, Cloud Dataflow, Dataproc, Google Cloud Storage, and also, yeah, the usual Compute Engine type things as well, and based down in Melbourne.
FRANCESC: Nice. What about you, Pablo?
PABLO: Yeah, so I'm also very happy to be here. I'm a Google developer expert, same as Graham, for the Google Cloud Platform, and software engineer as well, been working in the field for something like 13 years, done a few things like mobile development, web development, but lately been mostly specializing in big data and all the sort of stuff.
FRANCESC: Nice. You are Google developer experts. Could you tell us a little bit, first of all, for how long and how you became Google developer experts but also what is it? What is being a Google developer expert? Maybe Graham can start.
GRAHAM: Sure. Yeah, sure, so both myself and Pablo, we came on board as Google developer experts around the same time, actually, at the same time. That would have been about three months ago now, so we're fairly new to the program, and what it means is we're recognized by Google. There's about, I believe, 250 of us worldwide, so we're recognized for our expertise in a specific area of Google technologies or products. In our case, it's Google Cloud Platform. We do a lot of blogging. We go and talk at conferences. We help the local community. We help startups. We do mentoring, and we also get a yearly trip. Once a year we get to meet all the other Google developer experts, which is really cool. This year it was in Mountain View just in--last month, which was really cool.
MARK: Yup, I saw you guys there.
GRAHAM: Yeah, and we get direct access to the engineering teams as well, so we get early access to builds and features and new products and stuff like that, and we can reach out directly to the engineering teams, and that's a huge help for us, especially when we're using the products. We can talk to the engineering teams directly. It's awesome, and we also get foresight into product roadmaps and that kind of thing. So that's being a Google developer expert, and then the journey about how we actually became Google developer experts, it's quite an interesting one. So myself and Pablo, we were doing a lot of work with BigQuery, and we were just blown away by how cool it was and how much data we could smash through, and we wrote a blog about it, and that blog got picked up by our good friend Felipe Hoffa, who I believe you guys know quite well.
MARK: Yes.
FRANCESC: Yeah, we interviewed him two episodes ago.
MARK: Yeah, something like that.
GRAHAM: Ah, two episodes ago, yeah, cool. So yeah, Felipe's a great guy, and he actually picked up our blog. He found our blog, and he shared it internally, and then it actually went--it made its way up to Urs Hoelzle who then reshared it on his G+ page, and then from there it just kind of snowballed, and then we started doing more blogs, and then what actually happened was the Dataflow team, so Google Cloud Dataflow team reached out to us, and they said, "Look, we got this new product in beta. It's called Cloud Dataflow. We think it would be pretty cool for you guys to be beta testers on it," so we said, "Yeah, absolutely," and we jumped in. We started playing with it, and we gave them feedback, and then after that the product manager for Google Cloud Dataflow, a guy called Raphael Fernandez, he then nominated us to become Google developer experts, and that's the key to being a Google developer expert. You have to be nominated by a Google employee. So once you're nominated by a Google employee, then you do an application, so myself and Pablo did that, and then you go through a round of interviews. They make sure you really know what you're doing and you really know what you're talking about, and then you finally get accepted to the program, and that's pretty much the journey of how we became Google developer experts.
FRANCESC: Nice.
MARK: So Pablo, you've been relatively quiet. Why don't you tell us a little bit about the work you do at Shine and the tools you use and how they go together and what you're up to?
PABLO: Yeah, so first of all, Shine is a software consultancy based in Melbourne, and we do a lot of work with big data, so we--our--one of our--our main client is Telstra. Yeah, it's one of the largest ISP, and we'll talk a little bit later about--more in-depth about the stuff we've been doing there, but basically, you know, we need to ingest tons and tons of app [inaudible] logs and process them. We use a whole combination of stuff in between, you know, Google Cloud Platform tools and a bit of AWS as well. Basically, the idea is to help them to understand the--all the data they use and basically get, like, useful insights to all the information they have.
MARK: That's very cool. That's very cool. So I think one of the highlights for me when, actually, I probably got to know you and Graham from Shine Technology and stuff was the blog post about the 17-minute train challenge.
GRAHAM: Oh, yes.
MARK: I thought was quite exciting. Do you want to tell our listeners a little bit about that and how that came to be and, I mean, even, like, where did that idea even come from?
GRAHAM: Yeah, sure. So I was actually--so my--I take the train to work, and I was sitting on the train coming in. I was reading, as you do, the tech news, and something popped up in my feed, and it was, "Google have announced a new product called Dataproc." I went, "Ooh, that looks kind of cool," so I started reading about it, and I was actually chatting with Pablo at the same time on IM, and we just got talking about it, and then one of the things in the announcement, I think it was on the Google Cloud Platform blog, it was, "We can spin up a Hadoop or Spark cluster in under 90 seconds," and I thought, "Wow, that's a bold claim. That's a really bold claim," and we got to thinking, and we thought, "Let's vet that. Let's see if it really can do that," so we came up with the idea of could we actually spin up a Hadoop/Spark cluster using Dataproc in the time it takes for my train to depart Melbourne City and get home to my last stop, but not only that--so we thought that was a little bit easy. We also threw a few other curveballs into the mix, so it would have to spin up the cluster in--so my train commute is 17 minutes, so it would have to spin up the cluster. It would have to be able to run a Hadoop job. It would have to be able to run an Apache Spark job, and I should also be able to SSH into some of the nodes in the cluster and have a play with them and use the Cloud shell from the browser and all that kind of stuff, and then finally tear down all--the whole cluster before the train got into the last station. So that's really how the idea came about. It was just myself and Pablo were chatting about it. We thought it'd be really cool, something original, and it would actually be a good way to see if Dataproc really was that fast. Could it really stand up a cluster that quickly? And so we did it, and the--one of the great things about it is actually, we just tethered it off my phone.
FRANCESC: Nice.
GRAHAM: So we stood up the Dataproc cluster. I can't remember off--I think there was eight nodes in the cluster or something like that, all tethering off 4G. It's crazy, so.
MARK: I see here--I do see here that you didn't quite complete the challenge. You got very close though.
GRAHAM: Got very, very close. So I was pulling into the last station, and I'd initiated a shutdown of the cluster, and unfortunately, the cluster just didn't shut down in time, so I got to spin it up. I got to run an Hadoop job. I got to run a Spark job, SSH into some of the nodes, but the cluster just didn't come down in the time it needed before I got home, but I marked it down as a success.
MARK: So--so it was deleting. It was in the process of deleting.
GRAHAM: It was in the process of deleting, exactly. I think I missed it by about 30 seconds. That w--seriously. So--
FRANCESC: Was it recorded? I could have loved to see that as a video of seeing you panicking, trying to stop the cluster right before the train's arriving to the station.
GRAHAM: Unfortunately--yeah, so unfortunately it wasn't recorded. I didn't have the foresight for that one. Did do a blog post about it, so you're more than welcome to read the blog, and it's got screenshots in there. It was a very uber-scientific challenge, as you can tell, jump on the train, tether a phone, and spin up the Dataproc cluster, but one of the things that I failed to consider or that we failed to consider before we did it was that there's black spots on the train.
MARK: Yes.
FRANCESC: Oh.
GRAHAM: It's 4G, so every now and then I'd lose my connection, and I'd lose my SSH session and be like, panic, panic, panic until the--till my connectivity came back, and then, yeah, but it was good fun. It was good fun and something--and again, it was the originality of it as well, and the blog post got quite a lot of attention, and I think it got shared again internally at Google, so that's really cool, and that leads into the Google developer expert stuff. That's the kind of stuff we do as well, you know, writing blog posts like that.
FRANCESC: Yeah, I know, and you were saying that it's not a very scientific method of comparing performance. I actually--I have this video that I really like of one of the people from the Kubernetes team, Brendan Burns, trying to measure how long it takes to start up a Kubernetes cluster and comparing it to how long it takes for him to prepare a latte.
MARK: Ooh.
FRANCESC: So, you know--
PABLO: Sounds like a lot of fun.
FRANCESC: Yeah.
GRAHAM: That's cool.
MARK: It's entirely scientific, entirely.
FRANCESC: Yeah, entirely scientific, of course.
MARK: No, that sounds really great. All right, cool. So--all right, obviously you're doing stuff with, like, Dataproc, and you're doing stuff with big data and BigQuery. Do you want to talk a bit more about the sort of big data problems you're working on? Obviously you said you were talking about analytics and stuff like that, but can you sort of talk a bit more concretely about the stuff that you're building and why you chose Google Cloud Platform and the tools you have to solve those problems?
PABLO: Yeah, so I mentioned before, we're basically dealing with tons and tons of app [inaudible] logs. What we have come to, you know, work on is the--basically a statistical model that analyze all those logs which is developed by a veteran data scientist, and that's the main beat we actually, you know, started using Dataflow for. All the sort of ETL work and actual--the actual statistical model implementation, each one of the steps, and we found that it was very helpful in that aspect, and we also use BigQuery, of course, to store all this huge mound of data, and we can run [inaudible] queries pretty quickly, like, go through terabytes of data in a matter of seconds, which I remember at the beginning left a few people very, very astonished about all this stuff, like, "Wow, I can't believe you can really tell--you're telling me you can actually run--like, query, like, terabytes of data in 15 seconds?" "Yeah." "But with Oracle it takes, like, you know, I don't know, one hour," you know, and then when they would seen it, they were like, "Oh, I can't believe this."
MARK: So I'm curious. What's the largest data set that you've put through BigQuery?
GRAHAM: So yeah, so I think the amount of data that we have over Telstra pubs is--what do we have? So we're doing about 5 billion rows a month. That's what we're ingesting into BigQuery. Is that right, Pablo? 5 billion rows a month? And then we've run queries over several years, so we've gone up to about 100 billion rows, and it was about 15 terabytes.
PABLO: Yeah. It's difficult because we've got several projects going on, so you sort of need to, you know, get in all of them. Yeah, but I think something like that, so for us it's quite a lot of data.
MARK: Cool.
GRAHAM: A lot of data.
MARK: Cool, and so what sort of--what sort of things are you providing for the customers? Obviously, you said, like, statistical models and stuff. Is that--you're helping them with some things?
PABLO: Yes, so basically we have implemented all these statistical models. Then they use, like, VI tools to access to that, so we--all the results of running the model gets dump into BigQuery, and we also have been trying to help them lately to understand how Dataflow works because, you know, it's always good for them to get a very good understanding of how they can optimize the algorithms so they can work much better, you know, in this--in the Dataflow programming model, and we also have been giving a few technical talks about BigQuery and Dataflow, you know, to help them understand the advantages you can get when using the Google Cloud Platform products.
MARK: Cool.
FRANCESC: It seems like you've basically been working on big data for quite a while, and you've been blogging about it, and thanks to just blogging you ended up becoming one of our GDEs. What is your advice for other people that want to become a GDE?
GRAHAM: Yeah, that's a really good question. So I would say it's a very good program, and at least I can speak for myself and say I'm happy in the program, and what I like most about it, like I touched on earlier, would be getting direct access to the engineering teams. That's just awesome. Like last month we were over in San Francisco attending the GDE Summit, which is that yearly event that I talked about where we all come together for a yea--for a couple of days, but around that we actually went out and we met the--myself and Pablo went and met all the Dataflow engineering teams, and we sat with them, and we discussed how we use the tool and the product, and that was really cool, and they actually sat with us, and they actually did a code review, so the tech lead for Dataflow reviewed our code, Frances Perry.
FRANCESC: Nice.
GRAHAM: That was just unparalleled in terms of awesomeness, and she was like, "Yeah, you could do some optimization here and performance enhancements here and change this, and it'd be a little bit more modular" and we were like, "Oh, my God," trying to actually code while she was telling us this stuff, and then after that we went up, and we met the Dremel and BigQuery engineering teams in Seattle. Like, that's just cool, right? Where you can sit with these guys and talk to them and talk to engineers, being engineers ourselves, about how these tools work. They don’t give up all the juicy details, of course, of how, for example, Dremel works under the hood, but we were privy to some information that not a lot of people will get, and that's one thing I particularly like about the program. The second part, how do people get into the program if they are interested, it would really be getting your name out there. So start off doing blogging. Go to your local GDG group in your city, so most cities will have a GDG, which is Google Developer Group, that's officially sponsored by Google, going to the meetups, chatting with the guys and girls at those meetups, and then if you're really, really keen to get into the program, you really got to make that connection with someone in Google or be nominated. That's the only way to get in, and I think that's--it's a good system because that's the way Google really get good people in. It's if you're nominated, so yeah, my advice would be just to get publicity, to get your name out there blogging, doing talks 'cause, like, you don't have to be a GDE to go out and do this stuff. You can go out and do this stuff without being a GDE, right? So you can give a talk at a local meetup, or you can write a blog on BigQuery or Kubernetes or Dataflow or Dataproc. You don't have to be a GDE, and then that will--if it's a good blog and it's got good content, I'm sure it will be picked up by someone, and that's how it all s--at least that's how it started for us, so I hope that answers your question.
FRANCESC: Yeah, it sounds like very good advice. I had not thought about the--about Google Developer Group.
GRAHAM: Yeah.
FRANCESC: But that's a great place to start.
GRAHAM: Yeah, that's the--that would be the first place I'd start.
PABLO: Yeah, so for me--again, it's pretty much--pretty similar to what Graham said before in terms of meeting the engineers for me was the top of the--you know, the cherry on the pie, and it was really exciting, you know, get to talk to them, to the people who actually have been developing the tools we used, know them from top to bottom. I was very privileged to have also the leader, Frances Perry, reviewing my slide deck. I was giving a talk in the DevFest, and she sat with me. We went through all the slide deck. She, you know, started giving me recommendations about how to, you know, present different things and stuff like that, and for me that was really, really exciting, and it was a privilege. To answer the second part of the question, I know this is pretty much what also Graham said in terms of if you're really keen on getting into the--you know, the expert program, you need to make visible yourself in terms of, you know, writing blogs or participating in Google Developer Groups, giving talks if you can. That's always good, you know, trying to present stuff, talk about the technology.
FRANCESC: That sounds good.
MARK: Excellent. All right, well, we'll wrap up soon, but is there anything else you wanted to maybe discuss or bring up or plug or anything like that?
GRAHAM: Check out our blog.
FRANCESC: Very good. We'll put the link on the show notes, that's for sure.
MARK: Yeah, definitely.
GRAHAM: Beautiful. No, Pablo?
FRANCESC: You mentioned that it was important to be out there, give talks, go to conferences. Where can we find you? Are you going to any conferences?
PABLO: Yeah, we applied for a few talks. There is one coming up in London about big data. At the moment it hasn't been confirmed yet. There is also the coming Google Cloud Platform event in--now in March in San Fran. We also applied for that one. That's--we also, you know, give some talks in the local developer groups, so I myself giving a talk in the end of February about Dataflow in the GDG group here in Melbourne. I think we can add the details about the event in the notes.
MARK: Definitely. Graham, was there anything else?
GRAHAM: No, and then just the usual stuff. Twitter, myself and Pablo are really active on Twitter, and we have some pretty cool conversations with people like Felipe and Frances and all those guys in the U.S, so you can get us on Twitter anytime. I'm sure my Twitter handle will be made public, and Pablo's too.
FRANCESC: Yes, absolutely.
GRAHAM: And like Pablo said, we've got a few talks--talk proposals in the pipeline. One of the--the biggest one that I'm most excited about, which Pablo just touched, would be the GCP Next, and that's in March. Now, unfortunately I've got a baby on the way, and the exact due date is the exact same day, so it's the March 23rd. Pablo will be heading over to that, and hopefully--
FRANCESC: Well, congratulations on that, by the way.
MARK: Yeah, congratulations on that.
GRAHAM: Thank you very much.
MARK: That's great news.
GRAHAM: It's gonna be first baby, so the storm is about to arrive at my doorstep in about nine weeks. Fingers crossed. That would be really cool if we actually got to speak at GCP Next, which is--
MARK: We have no control over that. I should specify that.
GRAHAM: I wasn't--
MARK: The people who may listen to the podcast may listen--may have control, so--
GRAHAM: That's not what I was hinting at all in any way whatsoever. Just what will be will be.
MARK: Wonderful. Well, thank you very much for joining us. I think we're gonna have to wrap it up there for time's sake. I'm sure we could talk for hours on end, but yeah, thanks so much for joining us. It's been an absolute pleasure.
GRAHAM: Thank you very much.
FRANCESC: Yeah, thank you very much and--
PABLO: Yeah, likewise, thank you very much.
FRANCESC: Looking forward to reading your future blog posts.
MARK: Indeed.
GRAHAM: Yeah.
MARK: Well, we'll talk to you maybe then.
GRAHAM: Bye.
MARK: Thanks again to Graham and Pablo for joining us, really good conversation, enjoy getting outside-of-Google people to come in and speak. That's always great fun.
FRANCESC: Yeah, that was very fun conversation.
MARK: Yup. So moving on to the question of the week. Francesc, I believe you have a question today.
FRANCESC: I do have a question, and it's actually coming from a couple people that I've met before. There's a lot of people that try to do things like integration tests or even continuous integration where what you're trying to do is to deploy continuously.
MARK: Yup.
FRANCESC: And deploying continuously, it's pretty hard. There is ways of doing it, but, you know, there's skill there. Then there's deploying continuously to App Engine.
MARK: Oh, yeah.
FRANCESC: And all of a sudden doesn't sound that easy anymore 'cause you have to use GCloud and--there's a bunch of things that you have to integrate.
MARK: Like auth and--yeah.
FRANCESC: Authentication and so on, so the question was, like, is there an easy way to do deployments to App Engine?
MARK: Like, say, programmatically?
FRANCESC: Proma--yeah, as part of a script, something that's gonna be happening very regularly.
MARK: So I got shown this not too long ago, and I found it quite exciting. There is an API that we have that enables you to programmatically deploy to App Engine.
FRANCESC: Nice.
MARK: It's really cool. It's both a REST API and a gRPC API, so you have a choice if you want to--whichever one you want to use. It's pretty cool. You can upload your content, like, so basically your resources, up into Google Cloud Storage. You send up a JSON manifest file to tell App Engine, "Hey, this is where my stuff is. This is how I want to deploy it. This is where I want it to go," and then it goes off and does its thing, and then there's also stuff in there for, like, switching modules, so which--like, which modules you want to go to and, like, also doing all your standard versioning stuff too, like, "I want 50% of my traffic to go to this one or 10% or 100%." Yeah, and like, also introspection, you can also do introspection through it too, like, "What have I got running? What versions do I have? What apps do I have?" It's pretty neat. I was actually really impressed with it, so if you're looking at doing, like, continuous delivery type of stuff and you want to be able to push to App Engine, this looks like a really good way of doing it.
FRANCESC: Yeah, that sounds really cool. I could definitely see it as something integrated, really, with Jenkins or Travis or something like that, so basically, as soon as you have a new file that has changed, everything--you get a bunch of tests, gets deployed somewhere, and then someone can just go and verify that everything's working on it?
MARK: So I'm actually thinking we should do this for the podcast 'cause right now every Wednesday we manually push it up. If we had a service that built it push it up to App Engine every Wednesday, like, at, like, 10:00 a.m. or 8:30 or something.
FRANCESC: So were you proposing using Google technologies to host the Google Cloud Platform podcast?
MARK: Yes, I am. I am.
FRANCESC: Crazy.
MARK: This would actually make my life a lot easier rather than getting up at 7:30 every Wednesday to push out a podcast.
FRANCESC: Yeah, I'm not waking up early, so. Yeah, no, that sounds like a good idea. We should--we should try it and then open source the code, of course.
MARK: Of course, of course. Wonderful. All right, that sounds great. Well, Francesc, have you got anything else on your radar? Obviously GCP Next will be coming up for you.
FRANCESC: So GCP Next is coming on soon, but before that I actually have a bunch of stuff coming on. So by the end of this week I will go to Belgium for FOSDEM. There's gonna be a Go dev room, so if you're around, come say hi. It's gonna be fun. I'm gonna be talking about the state of Go, so what is the Go project doing lately. It's gonna be a quite interesting talk, a bunch of new things in the language--not really in the language but in the tooling, so I hope that there's gonna be a bunch of people there. We're gonna have nice conversations. After that, DevFest in Paris.
MARK: Nice.
FRANCESC: Where I'm gonna be talking about gRPC and Kubernetes and building--I think that the name of the talk may be at the end, "Building microservices like a Googler."
MARK: Ooh.
FRANCESC: Yeah.
MARK: I think we need to get gRPC on here. I'm getting really excited about that.
FRANCESC: We should definitely talk about gRPC. We actually just mentioned that, yeah, we have, like, RPC references for the admin API.
MARK: Yup.
FRANCESC: We should definitely talk about that, maybe next episode, who knows?
MARK: Maybe.
FRANCESC: Who knows? And that's pretty much it, I think, for now. Like, that's in the next month.
MARK: That's in the next month, yeah. Yeah, that sounds good.
FRANCESC: What about you?
MARK: So I will be at the Launch Hackathon on the 26th of February.
FRANCESC: Where is that?
MARK: That's in San Francisco.
FRANCESC: Nice.
MARK: Which is good. Yeah, I'm not doing too much travel at the moment, which is nice. So I'll be helping people hack at that and probably getting no sleep. Very excited about Game Developers Conference. I'll be there at the booth pretty much all the time. We're looking at doing some really fun events. We're having a developer day for that, so if you're interested in Google Cloud Platform, please check that out. We'll be doing all sorts of fun things, but we'll also be doing some talks sort of at the booth as well, showing off a few bits and pieces we got. I think we might see some of our demos, which should be really cool.
FRANCESC: Nice.
MARK: But yeah, I love games, so I'm super excited about GDC.
FRANCESC: I know, I was--I was last year at GDC. It was an amazing conference, so really looking forward to that too.
MARK: Yeah, it's gonna be great. GCP Next, obviously, I'll be there as well, and then I'll also be at Strata helping out with some stuff there too, so that'll be good fun.
FRANCESC: Very nice. Well, I think that is enough for today.
MARK: Definitely.
FRANCESC: So as always, thank you so much for being here with me.
MARK: Thank you very much for being here with me.
FRANCESC: And talk to you all next week.
MARK: See you next week.
{{< /transcript >}}

