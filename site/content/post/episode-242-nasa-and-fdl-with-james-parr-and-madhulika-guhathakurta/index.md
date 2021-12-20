+++
audioDuration = "00:40:51"
audioFile = "Google.Cloud.Platform.Podcast.Episode.242.mp3"
audioSize = 57172746
categories = ["NASA", "AI", "Machine Learning"]
date = "2020-10-28"
description = "Guest host Sara Ford joins our old favorite Mark Mirchandani this week for a special interview with NASA and FDL."
draft = false
episodeNumber = 242
hosts = ["Mark Mirchandani", "Sara Ford"]
title = "NASA and FDL with James Parr and Madhulika Guhathakurta"
image="/post/episode-242-nasa-and-fdl-with-james-parr-and-madhulika-guhathakurta/images/hero/hero-EP-242.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/jjrg5e/episode_242_nasa_and_fdl_with_james_parr_and/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Guest host Sara Ford joins our old favorite [Mark Mirchandani](https://twitter.com/markmirch) this week for a special interview with [NASA](https://twitter.com/NASA) and [FDL](https://twitter.com/FDL_AI). Our guests, James Parr and Madhulika Guhathakurta, give us a super cool, in-depth look at how NASA and FDL do what they do.  Lika explains the important scientific studies she has worked on during her years at NASA and how she came to understand and appreciate Machine Learning. James introduces us to the Frontier Development Lab, a project collaborated on by private and public companies to leverage AI and Machine Learning in the research of science, exploration, and many other disciplines.

From saving Earth from asteroids to conducting research on our sun, James describes the process of solving these solar system sized problems, starting with creating a solid team. Machine Learning is a team sport, he says, and like making a Hollywood film, it takes many people from different backgrounds to find these solutions. The cloud has been integral in facilitating this meeting of the minds and the analyzing of data at FDL. 

Later, we talk about the process of astronomical research before the current technological age and how techniques have advanced into the 21st century. James tells us the origin story of FDL and how they were tasked with applying Machine Learning to complex problems like planetary defense and space weather. Lika describes space weather and details how it impacts our planet. We talk about the role of data engineers in the team sport of astro-research and how data is collected and analyzed. Lika emphasizes the benefits of building a working system and how the processes can be applied to many other disciplines.

James and Lika wrap up the show with a look at what cool things they expect in the future.

##### James Parr

James is Director of the Frontier Development Lab, in partnership with NASA ARC and the SETI Institute. FDL has successfully demonstrated that structured interdisciplinary problem solving, sprint methodologies, radical collaboration methods and partnering with leaders in commercial AI, such as Google Cloud, are powerful amplifiers in applying AI to the science and technology goals of space agencies.

##### Madhulika(Lika) Guhathakurta, PhD

For the past two decades, Lika has led the development of Heliophysics as an integrated scientific discipline from which fundamental discoveries about our universe provide direct societal benefits. As the Lead for the Living With a Star (LWS) program for 16 years (2001-2016), she made possible the flagship missions (e.g. the Solar Dynamics Observatory, Van Allen Probes, Solar Orbiter Collaboration and Parker Solar Probe) including STEREO that would revolutionize our understanding of how the Sun shapes space weather in the solar system.

To accelerate innovation and scientific discovery she created funding mechanisms to shepherd traditional domain scientists out of their comfort zones to create LWS system science known as Targeted Research &amp; Technology program and Focused Science Teams that foster competitive, yet collaborative environments that promote the crosspollination of ideas and technology.

To nurture the next generation of leaders in Heliophysics, she created the Jack Eddy Fellowship Program which has become an important channel for the professional growth of promising researchers and has been successful at promoting the careers of many women scientists reaching 50% parity with men.

Since 2017, she was the driving force at NASA Headquarters and at NASA Ames behind the growth of Frontier Development Laboratory, both in terms of the breadth of problem areas tackled as well as in the number of agency and industry partners (e.g. Google, Nvidia, Intel, Lockheed Martin, Planet). The types of innovative solutions include virtual telescopes, data fusion, edge computing, and autonomy and this approach will have an enduring imprint on the way science and exploration is carried out by future generations.

##### Cool things of the week

* Prepare for Google Cloud certification with one free month of new Professional Certificates on Coursera [blog](https://cloud.google.com/blog/topics/training-certifications/google-cloud-certification-training-on-coursera)
     * GCP Podcast Episode 239: Cloud Learning Services with Nandhini Rangan and Magda Jary [podcast](https://gcppodcast.com/post/episode-239-cloud-learning-services-with-nandhini-rangan-and-magda-jary/)
* NASA’s OSIRIS-REx Spacecraft Collects Significant Amount of Asteroid [site](https://www.nasa.gov/press-release/nasa-s-osiris-rex-spacecraft-collects-significant-amount-of-asteroid)

##### Interview

* NASA [site](https://www.nasa.gov)
* Frontier Development Lab (FDL) [site](https://frontierdevelopmentlab.org)
* Oort Information [site](https://solarsystem.nasa.gov/solar-system/oort-cloud/in-depth/)

##### Sound Effects Attribution

* "Bad Beep" by RicherLandTV of [Freesound.org](https://Freesound.org)
* "Small Group Laugh 6" by Tim.Kahn of [Freesound.org](https://Freesound.org)

{{< transcript "MARK: Hey there, everybody, and welcome to episode 242 of the weekly Google Cloud Platform Podcast. I'm Mark, and today, I am here with a very new friend of ours, Sarah Ford. Hey, Sarah. How you doing?" >}}

SARAH: Hey, Mark. 

MARK: Always exciting to get a chance to work with you. And this is new because you haven't done the GCP podcast before. 

SARAH: No, first time. 

MARK: And you know, it's obviously a very exciting first episode. But it's actually not just exciting. It's a million times more exciting than our average episode. And Sarah, can you tell us why that is? 

SARAH: Yeah, I have to just geek out and just say we had the best time talking to people from NASA. 

SPEAKER 1: Discovery, go with throttle up. 

SARAH: How often do you get to just, like, geek out and talk to people about the coolest stuff ever? So yeah, it was amazing first episode here. 

MARK: We talked to NASA. It completely sends my mind into the stratosphere that we got to sit down and talk about technology with NASA. And you know what? We could have talked about anything and I'd still be thrilled. We could have talked about ice cream. Actually, I'd still be thrilled then too. 

It is such a great conversation. Lika and James come on from NASA and from FDL. And they talk about NASA, which probably most people are familiar with, but also a little bit more about what FDL actually is, some of the different organizations, some of the research they're doing. We talk about cloud technology. We talk about space. It's just the best. 

SARAH: I know. I just wanted them just to continue to talk. I felt like every time I was speaking, I was taking them away time from learning something new. 

MARK: Absolutely, yes. So I'm happy to announce that we'll be rebranding this to the NASA Podcast. 

SPEAKER 1: 20 seconds to LOS [INAUDIBLE]. 

SPEAKER 2: [INAUDIBLE]. 

MARK: And I will just try to get them on every week next year. 

SARAH: I know. I have my fingers and toes crossed. 

MARK: Yeah, probably not going to happen but worth a shot. Well, we do want to get to that interview. It is super, super amazing. But before we do that, let's just quickly go through our cool things of the week. 

So I really want to quickly mention for my cool thing of the week, there is this blog post. We'll post the link in the description there. But you know, a couple of weeks ago, we had our friends on from the Cloud Learning Services team. And they taught us a little bit more about, you know, learning some of the Google Cloud things, certifications, Qwiklabs, Coursera, those sorts of tools they have. 

And this blog post shows they actually have a month free for Coursera. So I think this is a really good opportunity. It's only around for the next couple of weeks. But the idea here is like, if you were interested in those certifications or you just want to kind of get hands on with the cloud, this is a great opportunity to do it for free. 

SARAH: And my cool thing of the week is, sticking to the NASA theme, the Cyrus Rex spacecraft was able to collect samples from an asteroid. And I'm left wondering-- why didn't I pay more attention when I was a little kid to what's an asteroid, what's a comet? There's just things, I'm like, wow, I do not remember this as an adult. 

MARK: That's fine. We can google it. We'll figure it out. 

I should probably actually google it right now. But I mean, it's amazing to think about, right? Because you think about a rocket ship. 

I've-- immediately I'm already pissed off a bunch of space people because I'm using the wrong term. But we think about just landing machinery on planets. But now you've got to do it with an asteroid, which is either a chunk of ice or a chunk of rock. I'm going to Google that right now, 

SPEAKER 4: Asteroids are mainly composed of mineral and rock whereas comets are primarily composed of dust and ice. 

MARK: But it's traveling at what I believe is a billion miles per second. I'm going to go ahead and scientifically state that's the actual number. 

SPEAKER 4: The asteroid in question, Bennu, is traveling at about 63,000 miles per hour. 

MARK: And then you've got to land something on it. And then you've got to pick up rock. And then you got to move off-- that just-- I can't-- I don't understand how that works, but it must involve so much science and technology to get that right. 

SARAH: It reminds me of the seven minutes of terror when the-- 

SPEAKER 4: Insight. 

SARAH: --landed on Mars and the level of engineering that went into play. 

MARK: But just the thought that they landed something on there and pulled materials from it, it's astounding. Well, it is a fantastic conversation. So I'm going to go ahead and stop talking so we can jump right into it. 

Lika and James, thank you so much for joining us. I can't tell you how excited we are because this episode obviously is about NASA. 

SPEAKER 1: Roger, zero G, and I feel fine. 

MARK: There's so many questions in my head. But before we go into all of that, can you tell us a lot more about yourselves? 

LIKA: I'm Lika Guhathakurta. I've been at NASA headquarters for one real solar cycle. That's the magnetic solar cycle-- 22 years. You know, every 11 years, the sun's magnetic field flips from being positive to negative, from solar north pole to solar south pole, or vise versa. 

But every 22 years, each fall has its own polarity that it started with. I mean, imagine if our own planet did that. That could be kind of crazy and with lots of societal, technological consequences. So that said, in this time, I have led many missions, initiatives, and programs, and I guess most notable of that is the Living With a Star program, which laid the foundation for the science of heliophysics and space weather and climate. 

And that's for the entire solar system. And I really took to heart the mantra of the LWS program, which was really doing cutting edge science that is relevant to life and society. And that is really important to me. 

I would also share kind of a maybe interesting nugget. I might be one of the few NASA program managers who has had the good fortune to be the program scientist for most number of missions, I think. I spent the last three years at NASA AIMS at the heart of the Silicon Valley. And that is where I encountered the power of machine learning, deep learning, and encountered FDL, the Frontier Development Lab, that we will talk about in conjunction with NASA. So in short, I'm a scientist with the soul of a poet and a philosopher. 

MARK: I absolutely love that, And I'm going to start measuring everything in solar cycles. So if someone's like, how long will this paper take, I'm like, oh, you know, 0.17 solar cycles. It'll be quicker. 

LIKA: I love that. Yes. 

SARAH: I just calculated my age in solar cycles. 

LIKA: You're very young. 

SARAH: Exactly. I'm still a toddler here. 

MARK: And then James? 

JAMES: Yeah, well, thank you. Great to be here. My name's James Parr, and I'm the director of the Frontier Development Lab, which Lika referred to. FDL is a public-private partnership between NASA AIMS, the SETI Institute in Mountain View, California, and Google. So it's really been great working with you all for the last few years and excited to be here and talk about space and geek out about machine learning and all that good stuff. 

MARK: We probably covered like 700 topics just there, and I could probably come up with a million questions for each topic because I'm so blown away by obviously, the scope of what we could be talking about here. I wish we had a 17 hour podcast, honestly. But in this case, I do want to make sure that we do talk about the technology and definitely about the different programs. But I think the first question I kind of had in my head is, you know, there's NASA, there's FDL, there SETI, there's a couple other teams here. Can you just give us a real quick rundown of kind of the roles and responsibilities of each of these teams? 

LIKA: So I'll give a short paragraph, and I'm sure James, who is really the brain behind FDL, can give you a lot more details. So FDL is a collaboration between NASA AIMS Research Center and the SETI Institute and SETI and Trillium Technologies that James is part of. They work in partnership. And together, this is a partnership with private industry and academia in which the latest tools and techniques in AI and machine learning are applied to research priorities in support of NASA science and exploration, but also other agencies. 

And I think I'd like to kind of reflect that this is a really broad coalition of partners that we are bringing together because no one agency or country owns any of this alone, essentially. And another important aspect of FDL is that it is very interdisciplinary in nature. And it's interdisciplinary, not just with capital I. I think it has to be super caps, the whole gamut. 

And we are doing this with early career people, which is the generation that's going to really be leading this effort. We do this over a very short period of time when you think about it, two months, and with amazing results. And I'm going to ask James to elaborate really the process, the machinery, that has been created by James, SETI, and their teams to continue this over the last five years. 

JAMES: Really the secret of doing these machine learning pipelines is AI is a team sport. Perhaps Hollywood's given us this model of the super genius in his or her bedroom doing the stuff. But actually, this is much more like a Hollywood movie, actually, the way a movie is created where you have a challenge, which is like the script. And then you have to put a team together to really crack that problem. 

We're working on problems that are so hard and so difficult that no one person can solve it. You need to have people who understand the problem, people who understand the data, but also the different tools that can be used to solve the problem. And so we bring all these folks together. We find the best people we possibly can. 

Again, very much like making a movie-- you know, you hire the right director and the right sound people and the right actors. We did exactly the same for machine learning pipeline. And then we put them all in a room together, and we give them lots of compute. And then that's where the magic happens. And it is possible. 

It's completely possible to do journal-worthy work which pushes the envelope of applied machine learning in a very short period of time. And I mean, I think on reflection, I'd say it's the only way, really to do it. As these pipelines get more and more complex, You have to bring together interdisciplinary folks because otherwise, you won't get cutting edge results. 

SARAH: I really like the movie analogy because I think that's something we can all relate is seeing, like, the camera crew and the stagehands and the props. I was wondering if you could go and expand a little bit more on that aspect of like the interdisciplinary roles and bringing the latest techniques of AI and machine learning. Can you talk more from the engineering point of view of how the cloud enabled that? 

JAMES: So the cloud, of course, has enabled this to happen because for one, everybody these days is working in separate places. So during COVID, we've had to be distributed all around the world. And having the ability to ingest all your data sets and we are often working with pipelines that have multiple data sets and get them working in one place. 

And then, of course, all of the tools that Google Cloud has to bring to bear on just the data preparation, getting these data sets ready into a format that can be used where we can start developing innovative pipelines, having the cloud has been a game changer for this because this is really complex stuff. And there's lots of work that goes behind the scenes to build up these workflows. And you need a sort of a, if you like, a unified substrate where this work can happen. 

LIKA: I would say cloud is beyond virtual, and it had started before the virtual world, right? Connecting us in a way that's incredible. And right now it is only for our planet but with all the satellites that are launching that will be interconnected, it's going to be further into our solar system. Let's think big. 

MARK: Yeah, we're going to rename the cloud to just space soon because that's going to be more accurate to where all the computers are and who has access to it, which is obviously fascinating but also extremely cool. 

JAMES: What about the Oort cloud? We just call it the Oort cloud-- the cloud of comets that surrounds the solar system. We could just call it that. 

MARK: I had no idea what that was. 

SARAH: How do you spell that? 

JAMES: Double O-R-T. 

MARK: Yeah, I mean, I'm sure there's 1,000 people who can name something because if I was in charge, I'd probably just name it Big Cloud, and I don't think that's very good. But I mean, that's exactly the amazing part about it is that there is so much. I mean, obviously the cloud is great, and we all are appreciative of it. 

But I like what you said, Lika, about it's more than virtual, right? It's all this enablement stuff. So one of the things I'm very curious on is like, how did this look a long time ago, right? 

Like 30, 40 years ago in technology is essentially a billion solar cycles, as we learned earlier today. So like, what does that actually look like? How were things done before? and how does it differ from how they're done now? 

LIKA: What's interesting is that we still use those technologies. I mean, we just don't get rid of technologies for the sake of using new technologies. They have to prove beneficial to the cost that you are applying to. 

That's kind of critical. You know, thinking otherwise, you know, it just becomes too much like clothes. So this has become out of fashion. So let's go change into something else. 

So the whole process of the development of the internet to cloud to sophisticated tools and languages through AI and machine learning kind of started probably, what, in the mid '50s, early '60s. And sort of-- that revolution has continued. So we are still using a lot of our old tried and tested methods to do actual science and engineering. At the same time, in parallel, we are testing out the efficacies of these algorithms and see how good they are, how much we can push envelope. 

So I can take you back to centuries ago before the invention of telescope, right? I mean, what did we know about our cosmos? And think of what telescope has done today. 

Or think of what microscope has done. These are things we can touch, we can see. Yet we created with our own imagination tools that have literally changed the world for us in every conceivable way. 

And I kind of think of AI in a global sense. Even though we call it artificial intelligence, I don't think there's anything artificial about it. I would rather call it augmented intelligence, kind of like telescopes, kind of like microscope, which is allowing us to really survey the data we have accumulated that we as scientist, any one scientist, cannot process it fast enough. 

It's slow. It can be cumbersome. And that's where I think these tools come in in inferring pattern from multidimensional data or doing forecasting things that's sort of unseeable and unknowable by our brain. But we can create the mathematics, actually, and that can allow us to infer this information. That's kind of how I view this. 

JAMES: As you're talking, I was thinking about this concept of the adjacent possible, Stuart Kauffman. And this is really this idea that's sort of a future which is just out of reach but we haven't thought of it yet. And what's been amazing about the last five years or actually 10 years, really, since the deep learning Big Bang in 2011, 2012 is computers have got so much faster. And a lot of the math that we use and the stuff, it was figured out a long time ago. 

But really, it's just this emergence of the speed which has allowed these things to come of age. And suddenly, all this adjacent possible has been unlocked by the speed of the compute. And so to put that into perspective, when we started FDL five years ago, we just had one devbox. 

We just were able to do all our work with four GPUs. Six years later, we've got models that are running a quarter of a million nodes. And again, this adjacent possible that's being unlocked by the amount of compute that's now being able to be brought to bear on this thing means that we can do stuff that you couldn't even imagine 10 years ago. 

And that's kind of the mind boggling thing about it is compute is accelerating. You know, we saw Moore's law doubling in speed and halving in cost every 18 months. In AI, it's 3 and 1/2 months. 

So where are we going to be in 10 years? It's kind of mind boggling. But we've been witnessing this acceleration of possibility. And that's why it's such an exciting time at the moment. 

LIKA: So think about it this way. NASA gave the world in the past century, the compute framework. The computers were the size of the rooms we are sitting in and the first hand-made microprocessor. And now for NASA, it is time to do it again with AI, smaller, cheaper, faster. But the private sector is already doing that with AI and building this new microprocessor with incredible speed. 

SARAH: Can you talk more about how FDL got started? Is there an origin story, and does it happen to have anything to do with that deep learning Big Bang? Because I would love to hear more about that. 

Deep learning Big Bang-- I'm hearing terms I've never heard before. Anything that you think of that you want to just, like, go on a tangent about, I am all ears. 

JAMES: We should apply some imagination to our origin story and say that we are exposed to a radioactive asteroid during the deep learning Big Bang that came from the Oort cloud. Actually, FDL was a product of the Office of Chief Technologist at NASA headquarters. And we where first of all charged with applying machine learning to the problem of planetary defense. 

And so this is really where we started was saying, well, how can we use these amazing new tools that are evolving out of academia and start applying them to a real pernicious problem that the human race has? And in a way, that gave us the for all humankind kind of mantra-- because we were starting with these big problems. How do you protect the planet from an asteroid or comet? 

And I think it was interesting for us because of course, these problems are enormous. But we had to learn how to atomize them. And this is the concept of saying, well, what's the highest point of leverage in a big problem where you can start tackling a part of it in a way which if you solve that, it sort of benefits the system, if you like-- so this notion of the highest point of leverage. 

And so we broke the problem down and started making FDL challenges around these, if you like, these sub-problems. And that's really been the guiding concept of how we've done stuff. And since we've worked on planet defense, we've now looked at space weather, and we've looked at climate change, and we've looked at exploring the moon and astronaut health and mission operations. 

But we've really taken that same approach-- the big problem, break it down to component parts, build an amazing team around it, and then just go for it. 

SARAH: I wanted to hear more about the space weather. 

LIKA: You know, space weather wasn't even a word maybe a decade or two ago. We were familiar with terrestrial weather, and what the heck is space weather? Sun creates a weather outside of our magnetosphere. 

It's this bubble that actually protects us, protects our atmosphere from being ripped off by our sun, which can be violent from time to time, depending on the phase of the solar cycle. So space weather really creates an environment that can percolate down all the way to lower orbit, to ionosphere. In fact, the radiation from the sun creates the ionosphere where you have technology that is affected by this condition. 

So it could be a radiation storm. It could be a surge of sort of magnetic cloud. It's any number of these physical quantities that vary with time that can be turbulent based on the analogies for terrestrial weather of solar hurricane, solar storms. 

And it affects even power grids on the ground by creating voltage fluctuation and can put cities, states into total blackout, depending on the conditions-- the iPhone that you use, the TV that you watch. These are all guided by satellite interaction. The satellites interact with space weather and can malperform and can become completely disabled. 

Astronauts doing extravehicular activities in space are exposed to radiation. And that is one of the hazards of working in deep space for which we haven't figured out a solution yet, other than that we want to predict when these storms are coming, so all our astronauts can take mitigating steps and protect themselves by hiding behind shelters in order to protect themselves. And it's not just astronauts-- even higher altitude aviation. Even ordinary people like us who are traveling on airplanes can be exposed to radiation. And it can become critical over a long period of time-- just to give you an example of things that we didn't know before. And now we know pretty much all forms of technology can be affected by space weather. 

JAMES: When we used to fly, flying across the pole about a year ago-- and you know, it's now possible to fly transatlantic and have some sort of connectivity. And the guy next to me shut his laptop and was kind of muttering because his connectivity was so bad. And I thought, do I tell him that it's a solar storm, or just, do I let him just sort of stew? But you know, that's the thing is if you fly across the pole during a solar storm, you're not going to get connectivity. 

LIKA: I neglected to say the most beautiful aspect of space weather is this variety of northern and southern lights we see-- the Aurora Borealis and Aurora Australis. Just very recently, you know, even though the sun is waking from a solar minimum state, the condition of the magnetic field is very interesting during this phase of the solar cycle. And I saw pictures, of course, of red aurora, which is a very rare phenomenon. 

Often we see sort of green auroras. And it's higher energetics, basically, that leads to red auroras. But they are just gorgeous. 

MARK: I've never had the fortune to see one of the auroras in real life. But you know, I've seen movies and pictures and YouTube videos of people out there. And it's astounding. 

And it's just like you said. I mean, if I asked you to define all the different words that you just used, we really would have a 17 hour podcast. But in the sense of just, there's so much stuff that happens that we don't know. And as-- like you said, over the past 10, 20, 60 years that that stuff has been figured out, I'm sure it does result in just astounding amounts of data. 

And then like you said, predicting a solar storm and being able to understand when are these things going to happen, what the impacts are, how to protect people from them-- and I think that kind of sums up why NASA is so complex. there's so many people. There's so many roles that are involved simply because the scope is as big as the sun, if you want to say that, because it really, truly covers so much. 

JAMES: I'll build on that. Over 150 years ago, there was a solar storm called the Carrington event. And the aurora was so dramatic that you could see it in Florida. Can you imagine that? 

And there was one source of data measuring the solar terrestrial interactions of that time. This was in Greenwich in London. And if you look at the track on the bit of paper-- of course, it was ink on paper back then. The needle-- there's suddenly a splotch, and then the needle was knocked off because the event was so enormous. 

And you think about it like, how big was that event to actually enable the needle on the paper to be kind of knocked completely off the paper it was on, and also to create an aurora that was seen in Florida? We haven't seen that in our modern history. 

Like, we haven't had that level event since we had a technological civilization. And so it's kind of incredible to think what would happen now. And Lika's going to tell me how often that happens. Lika, what's the frequency of those sorts of events? 

LIKA: I would say it's still very difficult to predict that. We only look at one side of the sun. But what I was going to tell you is something for which we do have information. 

So our planet has not perhaps experienced something like that Carrington storm because it tipped the scale in every conceivable way, right? There are different kind of quantities we measure, and it was high in every possible way. But there was a storm that one of our spacecraft, Stereo A-- we have two spacecrafts, Stereo A and B, that have been going around the sun much like Earth does, one leading, one lagging. 

We lost contact with one of the spacecraft. But Stereo A in 2012 experienced, actually, as we have come to understand by studying it, something close to the Carrington event. So it wasn't directed at Earth, but it was directed at another spacecraft, which actually survived and recorded the data. 

And we've been able to learn one heck of a lot more about what goes on and what energizes these coronal mass ejections to get to the level to produce Carrington class event. The entire nation and I would say the world is very interested in this. In fact, just very recently, there was a bill-- I believe the president just signed it-- a bill on space weather for all the agencies to work more cooperatively towards this one common goal. 

SARAH: How does the machine learning aspect play into this? Can you talk to us more about-- and I'm thinking here as an engineer. And I see that you have your data scientists on one side, and then you have your astrophysicists on the other side. Where do I come in as the engineer? How do I get to be a part of this AI as a team sport and the machine learning aspects of it? 

JAMES: You know, I could kick it off by saying we tried four years ago, perhaps slightly boldly, but that's OK, to see if we could detect a solar flare. And you know, turns out we can where we have the data-- so the C class flares that are happening all the time. But the ones that we care about, the X class ones, of course, we couldn't. 

You know, going back to the drawing board a little bit, you start saying, well, what's the data we can get? And so, if you like, we atomized the problem, and we started finding sort of component problems within this. And one of them was realizing that one of the data sets required for this, which comes from the solar dynamics observatory, is the extreme UV data set. And 10 years ago, the instrument aboard this spacecraft had a failure. In fact, Lika, do you know what the failure was on this instrument? 

LIKA: One of the sensors in one of the three instruments malfunctioned. It's an electrical circuitry issue. It was in 2014. 

JAMES: So this is really the only external measure of extreme UV that the human race has. It's an extremely valuable data set. And so we were able to go back to the Solid Dynamics Observatory and saying, well, what other instruments were still going during that period, and can we go back in time-- so when the instrument was working-- and compare it to the different instruments on the SDO? And then for the period where the instrument was broken, could we paint in that data set a bit like you would on Photoshop or filling in a gap on an image? 

But imagine doing that to this extremely valuable extreme UV data set. And so one way you could say this is that we repaired the instrument. Of course, there's lots of work to validate this and to make sure that it's fit for purpose. But this is a really great example of how you can use machine learning to create an enhanced data set that can be used for lots of different uses. 

LIKA: You know, I will continue with this and give you some other examples. And think of these examples as not belonging to any class of science. These are just examples, you know? What we have done with SDO, which has been looking at the sun, can be done with other satellite. 

That's what's so powerful about this interdisciplinary approach-- that method tried and tested on one area can be applied in other areas. So yes, we generated a virtual sensor in this case, which is quite amazing. And scientists have tested kind of the traditional methods of applying physics. 

And it turns out the AI method is actually better than the actual physics-derived model. But then there is more. The following year, what we did, we have so much data coming from SDO. So accurate calibration of these extreme ultraviolet instruments become very necessary. 

So we can do it, of course, on orbit and like Hubble. we can't send astronauts to SDO, obviously. So we have to use essentially sounding rockets to calibrate the sensors, the telescope filters, which are pretty costly and often infrequent because only as often as we can, maybe once a year. 

So these calibration experiments are not practical at all for missions in deep space, for example, because SDO is not in deep space. So in the 2019 go-around, we actually developed kind of approaches to doing calibration, utilizing other sensor filtered data. We developed approaches to combining different filters and creating synthetic filter. So you know, this way, what we are trying to do is reducing the cost of mission, making their sizes smaller so that perhaps someday, we'll be able to fly them in deep space, whether behind the sun, on another planet. 

So these are also mission enabling. That's kind of directly with engineering applications for future. But we just barely touched the surface. 

JAMES: Well, that's the thing. If you can make a virtual instrument or repair, then you realize that actually, if there was a gap in a hyperspectral data set, for example, you can compress that and then refill that with the same methodology that we used to repair the instrument. So you realize that there's lots of opportunities in the solar system to send back data. But what if you only had to send back a part of it and then use the machine learning on the ground to decompress it? 

And so for example, we have an interesting challenge in the next few years where we'll be sending spacecraft to Venus to see what's happening to see if there's phosphines, evidence perhaps of biological activity. So that data will have to be sent back directly to earth. This is a big challenge. But perhaps we could use these methodologies to decompress the data on the other end. And so there's lots of ways that we can build on this work and apply them to other things. 

MARK: Like you said, it's a team sport. There's so many types of people involved, types of professions, types of skills. And again, the amount of content we've covered is enormous, and I have more questions than ever. 

But unfortunately, we just don't have the time to ask those questions. So I do want to ask this final question before we wrap up, which is just really quick from each of you, like, what do you think is going to be super cool coming up in the future, you know? I mean, we know it's moving at 800 billion miles per second, but what's something that you all think is just amazing to think about? 

JAMES: So the thing that makes me most inspired really is looking back at how-- or the relationship between the instruments we built and the science that follows and vise versa, the science informs instruments, and the sort of beautiful relationship between these two disciplines. Then you can see this with every time we build a new telescope, there's a host of new discoveries, which means we need to think harder about that next level of insight. And you could argue that AI is like a data scope. 

It's a tool for understanding data. And we still have a huge amount of work to get all of the data we're already kind of collecting and making this AI ready in a way we can start to really pull insight from it. And this kind of idea that machine learning could be a tool for science-- because as we heard with the example from the Solar Dynamics Observatory, the models are able to beat the physics. 

And this is a simple thing to say, but it's a mic drop a thing in a meeting when you realize that a neural net is understanding a physical system better than our best physics understanding. And more and more of these stories are coming, and more and more examples of neural nets which are beating the physics. And this means that AI is starting to really push at the potential of things and open up new questions. 

And so I think this combination between sort of AI as a data scope, the ability to find new complexities within data sets, and of course then the speed that both the compute on one end, but also the level of tools that are being brought out. You know, you have this sort of x and y with the tools on one side and then the level of compute on the other. And that kind of, if you like, the combination of those two vectors is something pretty extraordinary. And I think that in 10 years time, there'll be some big, big breakthrough, and AI will, of course, be part of that. And that is sort of becoming intrinsic to science as we know it. 

LIKA: You know, even as I say that AI is nothing but just fancy statistics that we created, it's still a bit of a magic to me. And I'm a science and exploration geek, and I haven't come across anything that kind of describes the world we live in today. To quote Stephen Hawking, who said this just a few years ago, I think the 21st century will be the century of complexity. 

We have already discovered the basic laws that govern matter and understand all the normal situations. We don't know how the laws fit together and what happens under extreme conditions. There is no limit to the complexity we can build using those basic laws. And so what I say, you know, what is the grand challenge before us-- before humanity, really? In a way, integration of this knowledge provided by the vast amount of data collected by NASA and other agencies, space and ground-based, to really look at the Earth system, the heliophysics system, the solar system, and the universe beyond, coupled with theoretical and computational models to really understand and predict the behavior of the world we live in-- that's what I envision someday. 

MARK: I can't think of any way to top that, so I'm going to go ahead and call it here. Lika and James, thank you so much. This is by far just the most fascinating and super interesting conversation, and it's so cool, and I know so little. 

SARAH: I just also want to say thank you because as an adult, I feel like I just got to take a field trip to NASA. So my inner eight-year-old is extremely happy right now. So thank you so much. 

JAMES: My inner eight-year-old is always happy as well. Yeah. 

LIKA: What a pleasure to be talking to fellow geeks, and I love this environment, you know? Just audio-- this is exactly the way. No video-- you don't have to deal with anything. And it's like having a banter. 

MARK: Absolutely, and next year, it'll just be Lika and James every episode. We're going to-- forget everyone else. We're just doing nothing but NASA. So cool. Thank you. 

LIKA: Thank you, James. 

JAMES: Yeah, thanks, everybody. 

MARK: Once again, thank you so much to Lika and James. And I mean, like, it's not just thank you. It's like, holy crap, thank you, right? 

I'm sure that these people have much better things to do in their day than to spend time and talk with us. But they graciously took some time out. It's such a cool conversation, and like you said, Sarah, we probably could have easily talked to them for hours and hours. 

SARAH: I just realized with solar years, I'm no longer, you know, having a midlife crisis. I'm just in my terrible twos. 

MARK: That's all it is, right? Yeah, and you just have another 20 years of being in your terrible twos before you need to move on to toddlerhood. So plenty of time to get it figured out. 

Well, with that being said, I mean, it was such a great conversation. We're not even going to have a question of the week. Don't even worry about that. 

I'm just super, super pumped for being able to talk to NASA. So we hope that everyone really enjoyed that conversation. Sarah, what have you been working on? Any cool stuff that you've been looking at besides all the cool NASA things? 

SARAH: Yeah, so I just joined Google just last month and working on ramping up. 

MARK: Yeah, there is no shortage of things to ramp up here. But it's obviously super, super great to have you at Google. And you know, what a way to kick off joining Google, huh? Being able to record this conversation with NASA? That's like the coolest thing. 

SARAH: So you're telling me it's going to be always like this, right? 

MARK: That's it. Every month, you're going to have to top this. Yeah, It's not going to happen. 

This is going to be a tough one to top. But we always do get to talk to a ton of great people on the podcast. So I'm very thankful for that. Obviously, this NASA episode was super exciting. And I think, you know, we had a lot of fun, Sarah. 

SARAH: Yeah, I've already went out and got my Halloween costume. Had to go and immediately get an astronaut suit. 

MARK: Absolutely, yes. I mean, that's kind of the thing. For all of trick or treating, you can just around in your astronaut suit and be like, yeah, I know I'm not an astronaut. But I did talk to NASA, so that's pretty close. 

All right, well, like I said, we wouldn't be able to do this and have all these great conversations without all of our awesome listeners. So thank you so, so much for listening. And of course, stay safe out there. We'll see you soon.