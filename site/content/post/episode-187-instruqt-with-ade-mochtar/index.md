+++
audioDuration = "00:26:29"
audioFile = "Google.Cloud.Platform.Podcast.Episode.187.mp3"
audioSize = 38563580
categories = ["Instruqt", "IT", "Tech Learning"]
date = "2019-07-24"
description = "Jon Foust and Mark Mirchandani are joined by Adé Mochtar to discuss the IT learning platform, Instruqt, and how they create and manage the platform with the help of Google Cloud."
draft = false
episodeNumber = 187
hosts = ["Jon Foust", "Mark Mirchandani"]
title = "Instruqt with Adé Mochtar"
image="/post/episode-187-instruqt-with-ade-mochtar/images/hero/hero-EP-187.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/chd9gr/episode_187_instruqt_with_adé_mochtar/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Jon Foust](https://twitter.com/syntxerror1) and [Mark Mirchandani](https://twitter.com/markmirch) are joined by Adé Mochtar to discuss the IT learning platform, [Instruqt](https://twitter.com/instruqt) and how they create and manage the platform with the help of Google Cloud. [Sandeep](https://twitter.com/sandeepdinesh) of Google stops in with the info on the Instruqt arcade games we saw at Google Next '19.

Instruqt's main philosophy is that people learn best by doing, and their courses encourage immersion right off the bat. Developers are asked coding questions and allowed to work in sandbox environments to fully expose them to the subject. Instruqt checks the student's work as they continue through the program to ensure the material is being properly learned. 

But learning should be fun, too! By putting developer challenges on old-style arcade machines, developers can test their coding skills, learn new things, and have fun at the same time. At conferences, this has been a great way to engage their target audience. Google Cloud games were run on the Instruqt platform at Next '19, and conference attendees came back day after day to try to get on the high score leaderboard. It was a super fun way to get people using Google Cloud technologies!

<!--more-->

##### Adé Mochtar

Adé is Co-Founder and CTO of Instruqt, a hands-on learning platform for IT technology. Before starting Instruqt, he was an engineer and consultant in Cloud and DevOps-related topics. A big part of that job was to educate organizations on how to adopt new technology. With Instruqt, he tries to achieve the same but on a larger scale. His mission is to make learning DevOps and Cloud more effective and fun. At Instruqt, Adé mainly focuses on back-end and infrastructure engineering using Terraform, Go, and (probably too much) Bash.

##### Cool things of the week

* Step up your interviewing game with Byteboard [blog](https://www.blog.google/technology/area-120/byteboard-interview-measures-for-essential-engineering-skills/)
* Gartner names Google Cloud a leader in its IaaS Magic Quadrant [blog](https://cloud.google.com/blog/products/gcp/gartner-names-google-cloud-a-leader-in-its-iaas-magic-quadrant)
* Real-time bikeshare information in Google Maps rolls out to 24 cities [blog](https://www.blog.google/products/maps/real-time-bikeshare-information-google-map/)
* Run Visual Studio Code in Cloud Shell [blog](https://medium.com/google-cloud/how-to-run-visual-studio-code-in-google-cloud-shell-354d125d5748)

##### Interview

* Instruqt [site](https://instruqt.com)
* Instruqt on Slack [site](https://join.slack.com/t/instruqt/shared_invite/enQtMzcwNTY1OTQ5NzE2LTQ5YTgxODgzNTk4NzY0OWU0OTczZjlhNThlMGJjYmFlNTNiNTMxZTVhNjE4MTczYzkxNDNkNTc1NzYwN2RlY2M)
* Kubernetes [site](https://kubernetes.io)
* Cloud Functions [site](https://cloud.google.com/functions)
* Hashi Corp [site](https://www.hashicorp.com)
* Instruqt Arcade at Next '19 [video](https://www.youtube.com/watch?v=f-zJUf8kncI)
* Google Developer Advocate - Sandeep Dinesh on Instruqt [video](https://www.youtube.com/watch?v=Gvls5o5HaO8)
* Go [site](https://golang.org)
* React [site](https://reactjs.org)
* Terraform [site](https://www.terraform.io)
* GKE [site](https://cloud.google.com/kubernetes-engine/)
* Cloud SQL [site](https://cloud.google.com/sql/)
* Cloud Build [site](https://cloud.google.com/cloud-build/)
* Firebase [site](https://firebase.google.com)

##### Question of the week

I want to be more familiar with Google Cloud, how do I navigate the space for material? Learn more with [Qwiklabs](https://www.qwiklabs.com) and [Coursera](https://www.coursera.org). [Get Certified](https://inthecloud.withgoogle.com/cloud-certification/#!/).

##### Where can you find us next?

Instruqt arcade games will be at [GopherCon](https://www.gophercon.com) and Cloud Summits!

Jon will be speaking at [Pax Dev](https://dev.paxsite.com) and [Pax West](https://west.paxsite.com).

Mark will be hanging on the East Coast, then meeting with customers in Austin.

##### Sound Effect Attribution

* "Red Arrows Flyby.wav" by Figowitz of [Freesound.org](https://freesound.org)
* "crowd laugh.wav" by Tom_Woysky of [Freesound.org](https://freesound.org)
* "Alien_Scream.wav" by Syna-Max of [Freesound.org](https://freesound.org)
* "Laser Gun7.wav" by Burkay of [Freesound.org](https://freesound.org)
* "Scratch2.mp3" by Feveran of [Freesound.org](https://freesound.org)
* "BumbleBeeShort.mp3" by CGEffex of [Freesound.org](https://freesound.org)
* "ComedyRimshot.wav" by XTRgamr of [Freesound.org](https://freesound.org)

{{< transcript "[MUSIC PLAYING] JON: Hi, and welcome to episode 187 of the weekly Google Cloud Podcast. I'm Jon, and I am here with my colleague Mark. Hey, Mark. How's it going?" >}} 

MARK: Hey, Jon. How are you? 

JON: I'm doing pretty good. Got stung by a bee for the first time in my life. 

MARK: Oh no. What happened? 

JON: As soon as I walked outside it was like-- 

[BUZZING] 

--you never been stung by a bee? Let's check that off the list. 

[BOING] 

Right on the ear. 

MARK: You know, I get the feeling that it's probably not on most people's bucket lists. But maybe that's a great thing. You can now put it on there and then check it off and say, look, it happened. I may as well take credit for it. 

JON: Right. I survived the heat wave that just passed through New York. So it was pretty, pretty hot. But luckily, I do pretty good in the heat. 

MARK: Yeah, it's brutal weather lately with the exception of, of course, San Francisco, which is pretty generally 68 and sunny. So I'd feel very fortunate to live in San Francisco. Obviously, hopefully everyone does well with the weather out there. But if not, come to San Francisco. 

JON: I might have to come out there and spend a couple weeks out there. 

MARK: We get to get some rematches for our Smash Brothers game too. 

JON: Definitely. So in this episode, we're going to sit down with Ade they from Instruqt along with Sandeep from Google about what Instruqt does and the awesome arcade machines that came out at Next. Those were really, really fun to play with. 

MARK: Yeah, we saw a huge crowd standing around the developer zone and kind of playing around with, well, a bunch of old school arcade machines. So if you want to hear more about what those machines were and what Instruqt does, then definitely stay tuned for the main content. 

JON: And we're going to get into our question of the week, which is, "I kind of want to get more familiar with Google Cloud. How do I really navigate the space for material? And what kind of offerings really will help me ramp up really quickly?" 

MARK: Oh, there's so many. And I've heard this question a number of times recently, so happy to dive into and share a few more details on that. Well, first, let's move on to actually talking about our cool things of the week. 

[MUSIC PLAYING] 

JON: So the first thing that came to my mind that was pretty interesting was there was a project called Whiteboard that came out of Area 120, which is Google's experimental lab. And what it is-- it's a structured, identity-blind, evaluation process platform for interviewing that allows managers to reliably trust recommendations, and candidates get to work through interviews at their own pace without the stress of going through high-pressure theoretical tests, so none of those questions like, how many golf balls fit inside of a school bus? or things like that. 

MARK: Design 10 uses for a manhole cover in the apocalypse. It was always stuff like that that got me. And it was like, this is a really interesting interview. I'm not sure if I understand what they're going for. But I'll try. 

JON: My personal favorite is the egg dropping. I love that question. 

MARK: Oh, the egg dropping. 

JON: Yeah, so you get to drop an egg, I think once or twice. And you figure out what's the highest floor you can drop the egg without it breaking or something like that. 

MARK: Oh, I don't know that one. But I'm sure there's no shortage of all those kind of horizontal-thinking questions that were very, very interesting to look at for the interview process. 

Well, away from that-- one of the things that came across my table quite a few times in the past week has been this Gartner announcement that Google Cloud is a leader in the infrastructure as a service Magic Quadrant space. Now, for most people, it probably doesn't mean a lot to them because it's not going to change what you're doing or change what's out there on Google Cloud. But I think it's a really cool recognition that Google is doing some very, very fun things in the infrastructure as a service space. 

But if you look at the blog post, you can see some other customers that are taking advantage of cool things that Google are doing. And hopefully, that's kind of some inspiration for you to look at all these different services that are out there, all these different tools, and saying, well, hey. What can I build with that? 

JON: I think that a lot of our developers who are just getting into this space, when you get recognized kind of like this, it helps build almost like a reputation for us. So I'm pretty excited to actually be named a leader in that space. 

MARK: Yeah, it's pretty awesome. 

JON: So the next cool thing to come out is bike sharing's becoming pretty, pretty big in a lot of major cities. And Google has actually been able to share real-time bike-share information using Google Maps. So there are roughly around 1,600 bike-share systems and almost 18 million shared bikes in urban cities. 

So since it's so mainstream, now imagine being able to use Google Maps to find locations exactly where to find bikes when they're available and the bell curve that usually see when you see how busy a certain station's going to be with bikes. So it's pretty awesome to see that. And I'm actually thinking about picking up bike sharing and stop driving around the city, which is kind of funny when people find out that I actually have a car in New York City. 

MARK: Yeah, that's not a very common thing. Nobody drives. There's too much traffic, right? 

[RIMSHOT] 

Classic. Well, the last cool thing I have for the week is that we have this cool little Medium post that one of our customer engineers put out who was able to show that you're able to take the Cloud Shell-- which is that environment that gets spun up with your Google Cloud account that you can go into and do some semi-persistent stuff-- well, you can go ahead and run Visual Studio Code in there, which is an IDE that I think a lot of people have been talking about in the past year or two as a really cool IDE that has a lot of features into it. 

Well, you can just kind of run that directly from your Cloud Shell environment. So you go in there. You download code server and set it up. And now, you have a web IDE that is Visual Studio Code. So this is a really, really cool way to offload the IDE and code aspect from your computer onto the Cloud. So a lot of thanks to Christiaan Hees for putting up this blog post that shows how easy it is. 

JON: That's awesome, especially with some systems that don't allow you to install Video Studio Code. I'm not sure if Chromebooks actually run Visual Studio Code. But if you can install Visual Studio Code on a Chromebook, whether you're using Linux or not, it'd be awesome just to do it in Google Cloud Shell. So definitely a great blog post, and thanks for the information. 

MARK: Yeah, very, very cool to be portable and have that power wherever you go. 

JON: Well, that was awesome. Great chatting with you. Now let's talk with Sandeep and Ade and see what they have to talk to us about these arcade machines. 

[MUSIC PLAYING] 

MARK: All righty then. Thank you so much for joining us, Ade and Sandeep. First things first-- Ade, why don't you tell us a little bit about yourself and who you are and what you do? 

ADE: Sure. My name is Ade Mochtar. I'm a CTO and co-founder of Instruqt. And Instruqt is a learning platform for technology. 

JON: Can you go a little in-depth as to exactly the type of things Instruqt teaches? 

ADE: Yeah, definitely. So what we believe at Instruqt is that learning is done best by doing. So especially in technologies, things change so fast, and you need to keep up. And the quickest way to learn new technology is actually just play with it. And that's exactly what Instruqt offers you. 

So what we are able to do with Instruqt-- we are able to spin up trading environments, sandboxes, and give people challenges to solve using technology. And in that process, we validate that what they are doing is correct and guide them in the right way in the right direction if they get stuck. 

JON: Awesome. Can you maybe give us a little example of the type of course that you might find on Instruqt? 

ADE: Yeah, definitely. We have a bunch of courses on Kubernetes, of course, where you get a running Kubernetes cluster, and we ask you to deploy stuff, to fix stuff, to configure stuff. But also, we have quite a lot of content on the HashiCorp Ecosystem, [INAUDIBLE] all stuff like that. 

JON: Awesome. And I will be trying to take one of your Kubernetes courses because I need to brush up very fast. 

ADE: Cool. 

MARK: So it's like a digital classroom, right? People can kind of come in. They can study a topic. And then they can put their practice to the test by actually running this stuff in an actual environment, right? 

ADE: Yeah, definitely. So what we do is we give people some flashcards with some information. And then we drop you right in the sandbox. You have to get your hands dirty by actually using the technology. 

MARK: And I like that term you used earlier. You kind of said "playing around with it." The reason I think that's super accurate is because at Google Cloud Next 2019, if anybody was there, first of all, it was awesome. Come back next year. But second of all, there were a bunch of arcade cabinets that were also involved in this process. And Sandeep, you were kind of involved in organizing this. Tell us a little bit more about what the arcade cabinets have to do with Instruqt. 

SANDEEP: Yeah, sure. So funnily enough, I was in Hamburg, Germany for a conference, and I saw this arcade machine. It's kind of hanging out in the corner. And I'm like, what is that? Turns out, the Instruqt folks were there too. And they had one of these machines and said they had some developer challenges there. 

And we just had so much time. A bunch of people crowded around this little arcade machine. And we'd try to outdo each other to run a HTTP server, but just code golfing away, like, the fastest way we could do it and getting the high scores. 

And I was like, this is so much fun. We need one of these at GCP Next. So then got in contact with the Instruqt folks, and we worked together to actually bring some Google Cloud games to Google Cloud Next on the Instruqt platform running all these arcade machines. That's not a mouthful. You tell me. 

But basically, we'd take the Instruqt platform. And Ade and team have put it on these arcade machines and gamified it, made this '80s retro kind of theme. And then my team, we took a bunch of games based on GCP-- so Cloud Functions, BigQuery, all these GCP technologies-- and then ported them to the Instruqt platform. So then attendees could play them on the show floor. 

MARK: Which was a lot of fun, and I think that we saw a tremendous amount of people at Next kind of hanging around those arcade machines, just like you said. I want to get back to how they were set up Next. But I guess, Ade, the question is, who thought of the arcade machines? How did that come about? 

ADE: So it was actually one of our developers that had some sort of a brainwave where we thought, hey, we need to do something different at conferences. You can quite easily get a booth and get a stand and hang out and give people stickers or something. But we thought, let's do something different. Let's bring in our game machine to a conference. 

And then we got started thinking, so what do we need to do to get this working, get some traction? We have a house designer. We pitched the idea to him. He basically said, this is a great idea. I'm going to build this machine for you. It's custom built. So I'll build the physical thing, and you guys have to build the software around it. 

That's exactly what we did. And we brought it to a different conference. Basically, we put it there. And the traction was amazing. So everybody wants to see what this thing is about. Basically, our target audience, they grew up in the '70s and the '80s, right? And everybody knows arcade machines. Everybody has played arcade games. And everybody loves them. 

So the moment people see an arcade machine, they're instantly drawn to it. But then you walk up to it, and you see, hey, there's something different about this arcade cabinet. This one has keyboards. So what's going on? Now people approach it. They push Start. And they see this different kind of content-- more serious games, but still games. People just love that. 

JON: I definitely did. I actually had access to the showcase floor prior to Next. And the first thing I saw when I came down the escalator was those arcade machines. And I definitely walked up. That's where I met Ade for the first time. And I just hung around for maybe two hours or so. And just to let you know, guys, I am that game guy. So you guys definitely caught my attention immediately as soon as I showed up. 

But my question is, although you've been enticing a lot of people by creating these arcade machines and drawing them in, can you tell us almost the motivation as to why you use the machines? I know that we wanted to entice people, and we wanted to add a keyboard. But what really draws people to continue to keep playing the games once they get on the keyboard? Because it is a different type of game. 

ADE: Yeah, it is different type of game. But we do use gamification elements like a leaderboard, like different challenges, like a validation step where you actually get to see where what you're doing is correct. And all those elements, they make people come back to the arcade games, try to beat their own high scores, try to top the leaderboard. So those are all elements that really draw people to these machines. 

SANDEEP: So I can add to that. At Next, one of the really cool things that happened was people came back multiple times trying to beat each others' scores and kept, like, I can get higher than you. I can get higher than you. And so the leaderboards just kept going up and up, and people were really excited about that. 

MARK: That's awesome. So can you tell us a little bit more about why you decided to gamify things? Like, learning by doing, I guess, would be the best definition for it. 

ADE: So the idea originated in a conference that we co-organized together with HashiCorp. So they organized the first EU conference in Amsterdam. And we were co-organizing. And we thought, hey, let's do something different. We need to get the tools of HashiCorp into the hands of their users. 

So we created a little bit of a competition platform very similar to what you currently see on the arcade machines or in Instruqt.com. But we gave them sandbox environments with some challenges around [INAUDIBLE]. And we asked them to solve it. Purely, the focus was a competition platform. And it was such a big success that people even went back to their hotel because there was better Wi-Fi to actually solve the challenges. 

But a lot of the feedback that we also got is, this is a great way to learn new technology. Because a lot of people, they maybe touched one of these tools, but not all four. And we got people into contact with different tools that they never knew about. And they learned a lot about it. So that feedback got us thinking. So this is maybe a very good way to learn new technology and make it into a learning platform rather than just a competition platform. 

MARK: So on one side you've got the arcade machines now, which it sounds like are a pretty popular way. Any arcade machine that doesn't require quarters, I think, will get a pretty big audience just by itself. But you've also combined it with these online labs and these different experiences. How does the platform where you actually set up those labs-- how was that actually built? 

ADE: So we built on top of Kubernetes. We use a lot of [INAUDIBLE] in our back ends. We use React for the front end. And we use a lot of Terraform to basically make the platform happen-- that in combination with some Bash here and there-- maybe a little bit too much. But that's how the internet runs, right? 

MARK: Hey, Bash is the glue of the internet. 

ADE: Yeah, definitely. 

SANDEEP: Don't bash on Bash. 

ADE: I seriously love Bash. If it weren't for Bash, I would be lost, probably. But as we're still a small team-- we're currently with five people-- we try to use as many managed services as possible. So for Kubernetes, we use GKE. For our database, we use Cloud SQL. For built environments, we use Cloud Build. For authentication, Firebase authentication-- so as many managed services as possible. So we can focus on things that are important for us-- how to spin up these sandboxes, how to present it to the users, all stuff like that. 

MARK: It's not the first time that we've kind of seen a company try to teach all the technologies. And they found that the best way to teach it is also to run on those same technologies. So it's always super interesting to hear about. What's the best way to teach Kubernetes is to get the managed Kubernetes environment. And then you run your [INAUDIBLE] on there too. 

ADE: Yeah, definitely. I think if you want to start teaching, you have to learn first. So you have to learn about this technology. And once you get a grip on it, then you can start teaching other people. And then you really start to learn about this technology. The best way to learn, in my opinion, is to teach others, because you have to go into a much greater level of detail to understand what you're actually doing to be able to explain it to different people. 

MARK: Absolutely. So Sandeep, how did that translate into the work that you kind of led and some of the other developer advocates here and developer program engineers worked on? 

SANDEEP: So the challenge that we faced was how to make traditionally, quote unquote, "boring" enterprise platform fun and exciting. And so Instruqt kind of helps with that by having these checks, as Ade calls them. So every step of the way, that platform actually runs code on their side to check that you actually completed whatever task was set for you. So you can't just cheat your way through the games. So that was really powerful, being able to run code to check what they did. It's spinning up their own sandbox to have them experiment and have no guide rails. 

So with things like our GKE challenge, they could either use Kubernetes CLI-- they could write it in a YAML file. The choice was theirs on how to solve these problems. So that gave us as a team a lot of flexibility in designing them. We didn't have to be kind of forced into any sort of pattern. As long as it worked on the command line, we could use it on the Instruqt platform. And I found that really powerful. 

ADE: It's the [INAUDIBLE] stuff that you can do. We also have an option to run UIs, but maybe not as effectively [INAUDIBLE] machines. But our normal platform does run UIs as well. It allows us to expose basically any web app or even desktop sessions to users, which makes it really powerful. 

SANDEEP: So we actually used Instruqt's ability to run arbitrary apps and connect them to their back end to run a full RPG in the Instruqt arcade machine. So it was almost like there was an actual video game running in the arcade machines that taught you about coding. It was "Inception" in many levels. 

MARK: First, we're teaching people about the environment, running on that actual environment. Now, we're basically just modeling being real life. 

JON: This is kind of a funny question. Maybe Ade would answer this. So if I were at your arcade machine, and I just do up, up, down, down, left, right, left, right, B, A, what would happen? 

ADE: Unfortunately, nothing. 

[LAUGHTER] 

It is something that we thought about. I remember back-- I think it was eight or nine years ago at my previous company-- we did have that code on our website. It would start showing My Little Pony figures on the website. 

MARK: Oh, I remember that JavaScript library. That was a fun one to add. 

JON: We've talked about the platform and how it's built and all the technologies around it. But I'm curious. What other technologies do you actually support in these sandboxes? 

ADE: So we support quite a wide range of technologies. So in the basis, we can run containers in virtual machines. But we also have the ability to start a complete new Google Cloud project or an AWS account. And we're also looking at adding different Cloud vendors as well. And we can mix and match all these different technologies. So that gives you a lot of freedom and a lot of flexibility to create arbitrarily complex environments to basically create an environment to teach your users whatever you need. 

JON: And I'm curious. When you're actually working in technologies in these sandboxes, how do you actually create these sandboxes? And what type of challenges do you actually have when you're creating them? 

ADE: So the definition of the sandbox is, it's just a simple YAML folder we defined so that you can specify your containers for your virtual machines or whatnot. And you can use standard images from the Docker Hub, for instance, or from Google Cloud's computer images. And then we have a set of scripts that we can run on these containers for virtual machines. 

Those are simple Bash scripts, and they get executed on that same structure in that sandbox that you defined. So you can basically do arbitrary complex setups or simulations or whatever you need to do. Maybe break a cluster and ask people to fix it. That's all possible. 

MARK: Was there anything that you tried to set up-- either through the more traditional classroom approach, or maybe through the arcade machines-- that just didn't quite land right? 

ADE: The toughest thing that we always have to do is the more enterprise-y software, because that tends to be slow to start and difficult to configure automatically. But I don't think there's anything that we encountered that we could not do. Eventually, with a lot of hacking, a lot of testing, and trial and error, we usually get stuff running. 

MARK: That, and more Bash, right? 

[APPLAUSE] 

ADE: Yeah, definitely. Yeah. 

MARK: So what's next for the arcade machines? I mean, they're already, obviously, a pretty big hit. But where are they going to go next? 

SANDEEP: GopherCon next week, which I don't know when this podcast is coming out. 

MARK: If you're listening to this before then, make sure you go. If you're listening after, make sure to check out the website. And if you're listening while it's going on, just fly right out there. 

[AIRPLANE ENGINE] 

SANDEEP: Mark, not all of us have private jets, you know? 

ADE: Yeah, we're working on that, right? But we also got-- well, [INAUDIBLE], we have the seven arcade machines at Google in the states, right? But there's going to be more arcade machines in Europe, and then in Asia as well. So maybe you can tell a little bit more about that, Sandeep? 

SANDEEP: Yeah. So we're trying to get arcade machines in many of the Cloud summits around the world. If you're in one of those cities, and you're planning on attending a Google Cloud Summit, keep your eye out for an arcade machine. Other open source conferences and stuff that we sponsor-- we're trying to get these in the hands of as many people as possible. So yeah, keep your eye out no matter where you are in the world. 

MARK: And I assume the next iteration is going to involve VR, right? 

ADE: Oh, that would be so awesome. 

MARK: As a kid playing arcade machines, I know that stepping into that world would be super cool. There's nothing quite like blasting aliens, but from a first-person perspective. 

[LAZER SOUNDS] 

So now, we just need to be able to spin up Kubernetes clusters from a first-person perspective. 

ADE: Yeah, that puts a whole new dimension to [INAUDIBLE] art, right? 

MARK: Very, very cool. Well, thank you all so much for coming in and telling us a little bit about it. We're almost out of time here. Is there anything you want to call out or talk a bit more about before we wrap up? 

ADE: So we do have an open platform. Anyone can start playing for free, start learning for free, at Instruqt.com And we even have an option to create content yourself. So just reach out to us at hello@Instruqt.com, and we'll get you started creating some cool content. 

MARK: Awesome. Well, Ade, thanks so much for talking about all the cool things Instruqt does. And Sandeep, great job on leading that effort. I think a lot of people got some really, really cool hands-on experience at Google Cloud Next. And hopefully, people who can make it out to GopherCon and other conferences worldwide will be able to kind of get their hands on these arcade machines. 

ADE: Very cool. Thank you. 

SANDEEP: Definitely. 

JON: All right, Mark. So our question of the week is-- 

[MUSIC PLAYING] 

"I want to be more familiar with Google Cloud. How do I navigate the space for the material?" So what do you got for us? 

MARK: So there's a lot of space here. And I think that there's been quite a few people who I've heard-- they see this different information on Twitter, on social posts. And I'm sure it's a little confusing. So let me give you a quick rundown. 

I would say the number one thing right now is that there is a certification challenge going on. And this certification challenge is basically you committing to saying, I'm going to teach myself this stuff in three months. And then if I get certified within those three months, either with the Cloud Architecture or the Data Engineer Certification, you get $100 for Google merch. 

That's pretty cool, not to mention the certifications come with some swag of their own, like a backpack or a hoodie. So you kind of have that power. But you're probably in it for more than just the swag. You're hopefully also wanting to learn about the Cloud. 

So there's a mix of different environments in Qwiklabs and Coursera. Qwiklabs are a great place to start. They'll organize things in quests. And these are all interactive labs that you spin up-- you can work with directly. They create a sandbox environment for you. And then when the lab is done, you shut it down. So these are very hands on, very simple ways to actually get through some of these skills and practice what they look like. 

On the Coursera side, they're a little bit more organized in terms of-- there's videos. There's text content. And then there's some hands-on labs as well. But that has a much longer breath of detail you go into. 

So with the Google Cloud certification challenge, each path has a list of recommended Qwiklabs and Coursera courses that you can go through, feel comfortable, set up a schedule for a three-month process where you're taking these things, you're training, and of course, you're practicing. And then at the end, you take that certification. And if it all passes, you get that $100 to spend. So to kind of summarize for getting started, I'd recommend taking the certification challenge, looking at the Qwiklabs and Coursera recommended courses and labs respectively, and then figuring out, how can I make the time for this over the next three months to win that cool merch? 

JON: That's really awesome. I am spending my time. I'm taking it slowly, doing my certification. But it's kind of good to actually give our developers who want to get certified some incentive. And trust me when I tell you that some of the merch that people get when they pass these certifications are really awesome. Like, those blue puffer jackets that they were walking around with Next were pretty, pretty awesome. 

MARK: Yeah, it was super cool to see. And I think people were excited to see all the different available things. I think at NEXT, they were even giving out little medals that you could hang around your neck if you had gotten certified there. 

JON: Right. If it were up to me, what I would get is just continuing to buy multiple Android figurines. I love collecting those things. 

MARK: Oh, there's so many out there now. You know, what we need is we need a Cloud figurine. 

JON: I think we have one, actually. I'll send you a picture. 

MARK: Oh. 

JON: But I would really like a new one. 

MARK: All right. We'll take this up to marketing. And for anyone who's listening to this podcast, just give us some time to figure the details out. 

JON: Oh, they should do a contest like design your own. 

MARK: Oh, you need to start with designing the first one. Then we can get them to design their own. 

JON: Right. Right, right, right. So Mark, where are you going to be? Where are you traveling to next? 

MARK: Oh yeah. I've got a fun little few days in the East Coast. I'm going to fly across. And hopefully, the heat wave breaks by then. We'll have to see. And then I'll be flying out to Austin, where I think it is perpetually pretty warm, to talk to some customers there and hopefully get a fun podcast or video recording out of it. How about yourself? 

JON: I will be speaking at PAX Dev in August, which is pretty awesome. And I get to attend PAX West as well. So I'll be there in Seattle end of August, going into September. 

MARK: Very, very cool. What's your talk on at PAX Dev? 

JON: My talk is on universal communication and its benefits in games. 

MARK: Give us a sneak preview. 

JON: A lot of people quit games based on the fact that sometimes, there's a language barrier-- especially people who are in countries that are not their own, and they're trying to play games. So instead of waiting multiple hours for their servers to be live, or just not talking, creating some type of universal communication where they can communicate with their team and speak comfortably in their own language would be kind of awesome. So I'm going to explore that space and show how it may benefit games, especially when you have multi-regional games. 

MARK: Super cool. So remember, people, if you're going to be a PAX Dev, check out that talk. And I'm sure there's going to be lots of other talks as well-- probably tons of great content there. 

JON: Should be fun. 

MARK: Awesome. 

JON: So thank you all for listening. And we hope to see you all next week. Have fun, Mark. 

MARK: We'll see you. 

[MUSIC PLAYING] 

SANDEEP: Turning up the volume-- turning up the volume. 

MARK: What you're saying is, Sandeep, you're pumping up those jams. 

[RECORD SCRATCHING] 

SANDEEP: Pump up the jams. 

[RECORD SCRATCHING] 

Pump up the jams. 

[RECORD SCRATCHING]