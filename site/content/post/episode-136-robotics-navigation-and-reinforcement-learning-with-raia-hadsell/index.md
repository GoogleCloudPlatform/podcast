+++
audioDuration = "00:31:35"
audioFile = "Google.Cloud.Platform.Podcast.Episode.136.mp3"
audioSize = 45896571 
categories = ["Reinforcement Learning", "Navigation", "Robotics", "DeepMind", "Machine Learning"]
date = "2018-07-18"
description = "On this episode of the podcast, Mark and Melanie delve into the fascinating world of robotics and reinforcement learning."
draft = false
episodeNumber = 136
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Robotics, Navigation, and Reinforcement Learning with Raia Hadsell"
image = "/images/post/raia.jpeg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/VbGgvKeieks"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/8zw0lq/episode_136_robotics_navigation_and_reinforcement/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

On this episode of the podcast, [Mark](https://twitter.com/Neurotic) and [Melanie](https://twitter.com/nyghtowl) delve into the fascinating world of robotics and reinforcement learning. We discuss advances in the field, including how robots are learning to navigate new surroundings and how machine learning is helping us understand the human mind better.

<!--more-->

##### Raia Hadsell

[Raia Hadsell](https://twitter.com/raiahadsell), a senior research scientist at DeepMind, has worked on deep learning and robotics problems for the past 15 years. After completing a PhD at New York University, which featured a self-supervised deep learning vision system for a mobile robot, her research continued at Carnegie Mellon’s Robotics Institute and SRI International, and in early 2014 she joined DeepMind in London to develop artificial general intelligence. Her current research focuses on the challenge of interactive learning for AI agents and robots, including subjects such as neural memory for real world navigation and lifelong learning. 

##### Cool things of the week

* AI Adventures How to Make a Data Science Project with Kaggle [site](https://towardsdatascience.com/cooking-up-a-data-science-project-using-kaggle-datasets-and-kernels-fca2b678e268)
* Predict your future costs with Google Cloud Billing cost forecast [blog](https://cloudplatform.googleblog.com/2018/07/predict-your-future-costs-with-google-cloud-billing-cost-forecast.html) and [site](https://cloud.google.com//billing/docs/how-to/reports#cost-forecast)
* Kaggle Competition Winning Solutions [site](https://www.kaggle.com/sudalairajkumar/winning-solutions-of-kaggle-competitions/)
    - Google Cloud Platform Podcast Episode 84: Kaggle with Wendy Kan [podcast](https://www.gcppodcast.com/post/episode-84-kaggle-with-wendy-kan/)
* Introducing Jib — build Java Docker images better [blog](https://cloudplatform.googleblog.com/2018/07/introducing-jib-build-java-docker-images-better.html) 
    - Google Container Tools [site](https://github.com/GoogleContainerTools/jib)

##### Interview

* Raia Hadsell [site](http://raiahadsell.com/index.html)
* Learning to Navigate Cities Without a Map [research paper](https://arxiv.org/pdf/1804.00168.pdf) and [blog](https://deepmind.com/blog/learning-to-navigate-cities-without-a-map/)
* Unsupervised Predictive Memory in a Goal-Directed Agent | MERLIN [research paper](https://arxiv.org/pdf/1803.10760.pdf)
* Nature: Vector-based navigation using grid-like representations in AI [research paper](https://www.nature.com/articles/s41586-018-0102-6.epdf)
* DeepMind has trained an AI to unlock the mysteries of your brain [site](http://www.wired.co.uk/article/deepmind-newest-network-mimics-the-gps-cells-in-your-brain)
* Navigating with grid-like representations in artificial agents [blog](https://deepmind.com/blog/grid-cells/)
* DeepMind [site](https://deepmind.com) and [blog](https://deepmind.com/blog/)
* Boston Dynamics [site](https://www.bostondynamics.com)
* Google Brain Robotics [site](https://ai.google/research/teams/brain/robotics)
* Transylvanian Machine Learning Summer School [site](https://tmlss.ro)
* IMPALA:  Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures [research paper](https://arxiv.org/pdf/1802.01561.pdf)
* Edward Mozer - Grid Cells and the Brain's Spatial Mapping System [video](https://www.youtube.com/watch?v=Ekzec9e1Y4Y)
* The Nobel Prize in Physiology or Medicine 2014 [site](https://www.nobelprize.org/nobel_prizes/medicine/laureates/2014/)
* TensorFlow [site](https://www.tensorflow.org)

##### Question of the week

How do you connect a Google Cloud Source repository to an existing Git repository? [site](https://cloud.google.com/source-repositories/docs/connecting-hosted-repositories) and [blog](http://blog.plataformatec.com.br/2013/05/how-to-properly-mirror-a-git-repository/)

##### Where can you find us next?

We’ll both be at [Cloud NEXT!](https://cloud.withgoogle.com/next18/sf/) 

* Mark will be talking about Agones [blog](https://cloudplatform.googleblog.com/2018/03/introducing-Agones-open-source-multiplayer-dedicated-game-server-hosting-built-on-Kubernetes.html)

Melanie will speak at [PyCon Russia](http://pycon.ru/2018/en/) July 22nd

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 136 of the weekly Google Cloud Platform podcast. I am Mark Mandel, and I'm here with my colleague, Melanie Warrick. How are you doing?" >}}

MELANIE: Hey, Mark. I'm good. How are you? 

MARK: I'm good. I'm not actually here with you. You're in Stockholm. 

MELANIE: I know. I'm not where you are. Not today, anyways. 

MARK: Not today. Today, we've got some pretty amazing content. We're talking about robots. 

MELANIE: So, we're talking with Raia today about reinforcement learning and the research that she and her team have been doing out of DeepMind, and this, of course, also plays a role in the robotics space. So that is a fun thing to be diving into, and I'm glad we've got her joining us today. 

But as always, we start out with our cool things of the week, and we will end with our question of the week. And so question of the week is, how do you connect a Google Cloud Source Repository to an existing Git Repository? Because that is where everything is at with code, is you've got to be able to have a Git Repository, and you've got to be able to connect it to wherever else you're going to store it, and in this case, the Google Cloud Source Repository. 

So, Mark, cool things of the week. 

MARK: Sweet. 

MELANIE: First, we want to mention the AI Adventures, the new video that Yufeng-- one of our colleagues-- has put out, I think, about a week ago. And he talks with Megan Risdal, who's also one of our teammates, about how to make a data science project with Kaggle. So you should check that out. 

MARK: Nice. We recently also announced a capability to predict your future costs with Google Cloud Billing Cost Forecast. You now have a nice visualization and some numerical declarations of, basically, what your projected forecast for your costs are going to be for the month. 

MELANIE: That's always a question. 

MARK: So this can give you some nice prediction for the costs that you can be expecting based on your current usage patterns. 

MELANIE: Nice. And another cool thing of the week that we want to mention is the link in our show notes for the Kaggle Competition Winning Solutions. This is something that was put together by one of their community members, I think in conjunction with some of the other team members, but I'm not 100% sure, although it says in their site a listing of the different ones who were involved, somebody I know out of HUOAI. 

So basically, they pulled together all the winning solutions, or many of the winning solutions that you see in Kaggle competitions. And I'm constantly telling people when they're asking where to get started when they want to explore data science to explore Kaggle. Look at the different projects that are out there. So this is very helpful if you want to look at what's been done and see if you can recreate it. 

MARK: Absolutely. And if people should remember, Kaggle is on the GCP podcast episode 84 back in 2017. So if you want to learn more about Kaggle, definitely go back and check that out. 

MELANIE: Yeah, you guys talked to Wendy, which was great. 

MARK: Yeah. Finally, we announced a new project, a new open-source project called a Jib, which is for building Java Docker images better. I like this. This is a really cool Java tool that has integration with Maven and Gradle, so you can just add the plugin to your build, and basically have your Java application containerized in no time at all. I really like these sort of tools that make these kind of workloads a lot easier to manage, so that makes me happy to see. 

MELANIE: Yeah. The containers. Got to get a little container plug in there. 

MARK: I got to get some containers in there. Absolutely. 

MELANIE: Yeah. 

MARK: Awesome. 

MELANIE: All right, Mark. I think it's time for us to go talk with Raia. 

MARK: Let's go do that. 

MELANIE: So this week, we are thrilled to have with us Raia Hadsell, who is a senior research scientist from DeepMind, and we're going to talk about reinforcement learning and navigation. So thank you for joining. 

RAIA: Thanks, Melanie. 

RAIA: So, Raia, can you tell us a little about yourself-- your background in this space? 

RAIA: Sure. Well, I've been at DeepMind for the last four years. I lead one of our research groups in the deep learning area, work on problems in robotics, and reinforcement learning, lifelong learning-- a bunch of different subjects that I'm excited about. Before this, I worked at SRI International, I was at Carnegie Mellon for a little while, and before that, I was at New York University, where I did my PhD with Yann LeCun, so a lot of neural networks trained in different ways over the years for different things. 

MELANIE: What inspired you to go into robotics research to begin with? 

RAIA: I really loved the idea of writing code and coming up with algorithms, but then going out in the real world and seeing if they worked or not. If I did robotics, then I could take my algorithms out, I could run them on a mobile robot that we had, and I could see whether or not the robot ran into the tree or went around the tree. First problem of mobile robotics-- avoid the trees. 

It also-- robotics brought me into machine learning, because we really wanted ways of making the robot behavior be adaptive. I didn't want to run the robots on paths that all looked the same or on roads with markings. I wanted to run the robots in the forest or on paths in the grass or through shrubbery where it would have to identify where the obstacles were and where the clear paths were, and that required machine learning. That required adapting over time. 

MARK: So that sounds really interesting. I don't know anything about machine learning. What allows you to do that kind of thing that lets robots basically see space? 

RAIA: The way that we did it then was to collect data all the time. We'd label that data as to whether or not it was the ground or an obstacle, and then the robot would learn that immediately, and it would train a neural network to make a decision, either good to drive or an obstacle-- bad to drive there. And that worked well, and it allowed the robot to adapt and to change its decision. But what we actually do now is reinforcement learning. Maybe I should explain the difference between reinforcement learning and machine learning. 

MARK: Sounds great. 

RAIA: People are probably familiar now with things that we call AI systems that might do things like recognize objects in images or help make some decisions. And that's done usually using supervised learning, where we have a big data set of, for instance, images, and each of those images has a label attached to it, like this is an image of an apple and this is an image of a monkey, et cetera. And you train a neural network to produce those labels by teaching it, and the data set stays exactly the same, and that's really important to make the learning work well. 

What if instead, we want our algorithm to take actions in the world, and the only feedback we're going to give is a reward, either a positive reward or a negative reward? So instead of giving labels and drawing data from a data set, we want an algorithm that can interact with the world, have feedback that comes as positive or negative rewards, and change its behavior based on that. That type of learning is both more powerful because then the algorithms actually interacting with the world and able to take actions-- for instance, driving instructions-- but it's also a lot harder. 

Say I want my robot to be able to drive around a room. It has to make all of these decisions about when to turn left and when to stop and when to go faster and when to get slower, and then at the end, I say, that was good or that was bad-- you hit things or you did well-- and the algorithm then needs to figure out, ah, where did I made the mistake, or where did I do the thing that was good? And it needs to do something we call credit assignment. Get a good reward, and I need to figure out how to change my neural network to incorporate that information. And that's what we call reinforcement learning, and it's very much the same as the way in which we think that, for instance, a dog learns to do a trick by using a positive reward when it does the trick. But it is quite different from supervised learning or other types of machine learning. 

MELANIE: And I know that DeepMind is well known for the experimentation and exploration with Atari games. This is a starting point or a well-known point when we start talking about reinforcement learning, which-- games, granted, Mark, is all your area of expertise. I know you love that kind of stuff. One area you've been studying is dealing with navigation. What helped drive the current research that you have-- I mean, it sounds like, obviously, your interest in the space, your exploration around spacial awareness in the past-- how did you decide to go down this path with reinforcement learning? 

RAIA: For things like Atari games, you don't need a lot of memory. You need to learn how to play the game. So we talk about an agent learning to play the game. That's the usual term that we use in reinforcement learning is that the algorithm that's changing over time that's getting rewards is called the agent, and it interacts with an environment, which could be an Atari game, or it could be a maze in the case of navigation. 

And navigation really brings a whole other level of difficulty to it, because you need to have a memory of where have I been before, where am I right now, where am I trying to get to? So you need to incorporate all of these different cues. And when I'm talking about a maze, I'm not talking about a maze that you get to see from the outside, that you get to see the whole thing. No. Imagine a 3D hedge maze where you can't see beyond your current space, and you need to try to have that spatial representation-- that spatial understanding-- that says, I know where I've been before, and I know where I'm going to try to get to, and I'm going to try to learn the path to get to that point. 

So I just thought that it was a really interesting area of research. It was very challenging. And so we did some research that showed that we could train our algorithms to solve these 3D mazes, and that we could train agents to do that where the mazes were sort of a game. We actually used the Doom engine to create all of these different mazes and try to just have the agent get from wherever it spawned to a goal location. I mean, if it gets to the goal location, then it gets teleported somewhere else, and it needs to find its way back again. So it both has to do exploration as well as remembering where was the goal and finding its way back there very quickly. 

And we trained algorithms-- we trained agents that were better at doing this than a human, and we did that by incorporating memory into the algorithms-- into the neural network itself. And that's a bit different than what we think about traditional robotics algorithms for doing navigation, usually start by let's build a map, and then we can run a path planning algorithm on the map, and then we can send the control instructions to the robot to follow that path through the map. Instead, here, we're doing it all intrinsically with-- instead of an explicit map, we have an implicit representation. And that's much more the way that we navigate, which I find really interesting. 

MARK: So you talked about both a simulation and robotics in the real world. I'm guessing that you do your training in the simulation. How does that work with the translation between both things? I'm guessing the real world is a little more complicated than the simulation. Are there challenges there? 

RAIA: Yeah, absolutely. The real world is very hard. Robotics in general with reinforcement learning is very hard. I mean, why is it hard? Well, the world has a lot more noise and complexity to it than the simulations that we create, and that makes these algorithms which are visually based-- you're looking at an image-- that makes it awfully hard to operate. It's also hard because the amount of data being used. So the agent that can learn to navigate in mazes better than a human can learns for over a billion steps in the network, which means it's about a week of 24-hour training, and that's not just one agent, but that's usually about 128 different distributed agents learning at the same time. 

MELANIE: Multiple different agents distributed across the network exploring similar spaces. 

RAIA: Right, exactly. And that's exactly why we use simulation, is because we can run it again and again, we can speed it up, we can run it 24 hours a day, and we can understand which algorithms work. 

MELANIE: Just curious, are you using TensorFlow? 

RAIA: Yes. 

MELANIE: Nice. So in terms of the work that you're doing-- the streetwise navigation research that you guys were doing-- you were using some real world data. Is that right? 

RAIA: So after working for a while with these simulated mazes, like I said, using Quake or Doom engine, they were really good to work with, but I really felt like we weren't really demonstrating that these algorithms would work in the real world. And we wanted to have at least some of that real world noisiness and complexity. And somebody here that I work with-- Karen Simonyan-- said, we have Street View, and Street View is a really interesting set of data. And probably everybody that knows Street View, has used it at some point-- this gives you an on-the-ground, panoramic, interactive interface with a map-- with a city. 

And so we said, what if we turned this into an interactive RL environment and trained our agents there? We took Street View in an area, for instance, all of New York City-- most of Manhattan-- and we turned that into an interactive environment. So on each frame, on every step, then the agent gets an image that's just like you would see if you were using Street View, but without any of the arrows or other information, and it gets to decide on an action to take. It can turn in a circle, it can look up and down, or it can take a step. And if it takes a step, then it will move forward to the next panorama in Street View if there is an edge there. 

And that allows the agent to actually walk across New York City and try to find different goals. So we made different sorts of games here, and tried using those same algorithms to see if the agent could learn to explore New York City. 

MELANIE: And what were some of the algorithms that you used? 

RAIA: So, we've been mainly using an algorithm called IMPALA, which is an actor-critic method of reinforcement learning. It works very well distributed. So you can think about it as, there are a bunch of different actors, say 128 different agents. They've all got a copy of the neural network that we're training, and they're all somewhere different in New York City in this virtual environment Street View. They're all in different parts of New York City, and they're all trying to find their way to different goals, and that's the sort of game play. And then there's one learner, and all of the updates to the neural network come to that learner, and it puts them all together in a nice way and learns over time. And that's the algorithm. 

MELANIE: It's almost making me think of a scavenger hunt. 

RAIA: Yeah, it is. That's a bit how we thought of it, that it would be a scavenger hunt or a taxi task or a currier, but you have to go from one location to another location. If you get to that location, you get given a new place to go to, and we just watched the agents after they're trained zooming all over the city. 

The interesting thing was when we started training with Central Park right in the middle of this big area of play. Usually in New York it's pretty simple. I'm sure that some people know New York City or have visited. It's pretty simple. You go down the block, there's this very regular street layout, but then, all of a sudden, there's Central Park, and there's only three, I think, different roads that cross Central Park. So the agent actually needs to learn, ah, if I need to get across Central Park, I'm going I need to take one of these streets that go across. 

Similarly, in London, the agent needs to learn where are the bridges over the Thames, over the river, so that it can get from one side to the other side efficiently. And it does learn all of these things. 

MARK: So I'm guessing that what you're talking about before with-- the agents weren't given the map beforehand. They had to learn that while they were driving around. 

RAIA: Right, exactly. So the agent never sees the map, never gets the advantage of seeing the map. It just sees an image of the street ahead of it, and it needs to explore and sort of load up its brain, its own neural memory, with all of this information. 

MELANIE: My understanding from the way your network structure works is that it's modular, and it's usable for transfer learning to be able to move from one city to another city. 

RAIA: After we figured out that this did work and that we could train an agent to move around one city, we thought, well, that's interesting, but it's doing that a lot because it's just memorizing the city. And we said, we want to be able to have an agent that can navigate not just in New York, but then in London and in Paris, and if it gets to a new city, there are some things that we have to learn. We have to learn where the neighborhoods are and what the landmarks look like and things like this, but there's a lot of things that we carry with us. There's a lot of transfer of information that we do from city to city. 

And so we want to see if that was the case, so we built an architecture that was more modular, where there's part of it that is general and that is applied to each new city, and there's part of it that's just city specific. And over time, that part of the neural network that is city specific learns to encode just the details, the where's the Eiffel Tower, or where are the best bridges across the Thames, what does Central Park look like-- it learns these specific things. And the two work very well just being trained together. 

MELANIE: And you can plug and play those a little bit more. And that's a recurrent neural net that holds the policy for the location base. 

RAIA: That's right, it's LSTM-- a long short-term memory. 

MELANIE: I've heard about grid cells. Can you tell us a little bit about what grid cells are and how they play a role in this research? 

RAIA: When we think about biological navigation or biological spatial understanding, we think about these neurons that have been found in the brains of mice and rats that are called place cells and grid cells. There's a few other types. There's border cells, head direction cells, but we can focus on place cells and grid cells, and there's been amazing research-- the Nobel Prize was just won a few years ago by Edvard Moser who discovered the grid cells. These are neurons in two areas of the brain, and grid cells are very general, and they just measure how far it is that we're walking, that we're moving along. 

So think about it as if I walk down a street, then I'm going to have a neuron in my brain that's counting every one meter, and it's firing every one meter that I step. There's another one that's firing every meter and a half when I take a step, when I get to each meter and half. Another one that might only fire every 10 meters as I'm walking along. And these are hexagonally arranged in the brain so that their reactivity is hexagonal as you walk through the environment, and they give a way of measuring both direction and distance. 

So when I take a nice complicated path wandering around my neighborhood, say, at home, if you ask me at any point to stop and point back to where my home is, I can just reach out an arm and point straight back to where home is, even if I've taken some circuitous route. We think that's because of grid cells. 

Place cells are different. Place cells memorize a specific place. You have a place cell that goes off in the kitchen of your home and nowhere else in the world, or at least you can think about it that way, as being a unique identifier for different places in the world. 

MELANIE: . Interesting. 

RAIA: So one of the things that we found a few years ago when we started doing this navigation research using recurrent neural nets is that if we trained an agent to simply move around an environment, accumulate its estimate of where it was over time-- so, basically, be able to do that pointing task-- that what we would get is inside that neural network, we would get something that looked a lot like grid cells. And we did some more tests and did a lot of different experiments, and we just published our results last month in "Nature," and this was a joint work between the Neuroscience Group here at DeepMind and the Deep Learning Group. 

And it was very interesting to find that these types of neurons that underpin spatial navigation in mice and rats look very, very similar to the grid cells, the neurons that we have in our completely artificial neural networks that we're training. So that points to some fundamental similarities. 

MARK: So I'm actually quite curious because this is fascinating-- was it the plan to build something that works the way, say, a brain works, or was it that you were doing this work, and we just found out after the fact that, oh, this actually seems to be working the same way most brains work? 

RAIA: Well, it was a little bit of both. My colleagues Andrea Banino and Dharshan-- we were working on this from the beginning together. So they were talking about grid cells and I was talking about robots, but we were working on the same codebase, on the same thing, and so we really just started looking for it at the same time that it was there. That's how research works. 

It was an exciting discovery, though, and then it took a couple more years to really convince ourselves that this was what we were seeing, and also to demonstrate if you train the neural network in such a way that these grid cells emerge, that the agent that has those grid cells can then do things like shortcut navigation. It can take a shortcut in the same way that we can. Agents that don't have that are going to retrace their own paths again. So it completely changes the behavior of the agent in terms of being able to point towards where you want to go and find that shortcut if it's there. A lot of other types of behavior as well. 

But basically we were trying to repeat some of the fundamental work experiments that were done with rodents and see if they applied also to our agents. And just to be clear, although most of the research has been done with mice and rats, neuroscientists are quite certain that grid cells and place cells are something that exists in all mammals, or at least most mammals. There are 3D grids cells in bats, for instance. 

MELANIE: So is the shortcuts one of the surprises that you found in the research? Is there other surprises that you've seen that you didn't expect? 

RAIA: That's a good question. The short cuts were exciting because they weren't actually surprise. We predicted that, and then it took us a long time to come up with the experiments that would actually prove it. And that's exactly how you want it to work. You want to have a hypothesis and then eventually be able to demonstrate it. I find the reason why I love doing reinforcement learning is because you're training agents that end up with some behavior, and you don't know what that's going to be in advance. And you can train agents that cheat in many, many different ways. 

For instance, I work in manipulation as well, with robot manipulation trying to pick up objects. Think about-- how do I train a robot arm to pick up a ball off of a tabletop? And you say, well, you're going to give that robot a reward if it gets the ball to 10 centimeters off of the tabletop. So what does the agent learn to do? It learns to simply flick the ball, for instance, so that it bounces into the air, which is easier, in a way, than actually picking it up. 

Since we use simulators a lot, agents are extremely good at finding the bugs in the simulator. If you want to find a bug in your simulator, you train an agent, and it's going to find the bug in the simulator in some way of reward hacking, we call it. 

MELANIE: That sounds like some good opportunities around security. 

RAIA: Yes, exactly. This is done in security research. 

MELANIE: So what are some of the challenges you had, especially when you were doing the research, in terms of streetwise navigation? 

RAIA: Scaling it to very large environments was definitely challenging. We spent a lot of time just saying, how can we run on an area the size of New York that's got 80,000 nodes in that graph, panoramas that we're working with? I can give most of the credit there towards Piotr Mirowski, who's the lead author on that paper, actually, and he really was able to make that work, both through, architecturally, coming up with better ways to manage memory and manage sensor flow and et cetera. Also algorithmically, training the agent with a curriculum. So it starts out learning about places that are close by and then its horizons expand and it eventually learns the entire city. 

So that was a challenge. Anytime that we work with actual, real robots, that's a challenge. It feels, at least, like it's 90% solving problems that are not interesting, not publishable, not important, but they have to be solved so that you can do the 10% of exciting, real research. 

MARK: So, to maybe bring it back to a practical level in some ways-- so this seems to be useful for navigation stuff. Is it just useful there? Where can we see people eventually, at least, using this research? 

RAIA: I think that if I want to find my way across New York, I'm going to use Google Maps and the very standard algorithms that are used there-- very good algorithms to do routing-- but I think that there's reasons where we might want to say, just based on the visual information, what can I see here, and what can I infer? So, for instance, a blind person that wants to navigate and wants an assistant might not just want to know where to turn, which Google Maps can give that information, but also, what does the street look like and some other information about what is there visually or some notion of how navigation would work from the point of a visually-based algorithm, rather than an algorithm that knows the underlying map. 

There's other interesting ways in which one could use this. If you've ever tried to navigate around a city where you don't know the language, it can make it very hard, because you don't know how to read the street signs even. So being told to turn right on street x isn't meaningful if you don't know the language or don't know the alphabet in particular. So there, I think that we could give more semantically guided information that's based on the visual appearance of the area. 

More fundamentally, I'm hoping that we will be able to continue to give information to the neuroscientists about the ways in which these things might work in the brain. One of the applications there is that they've discovered that the grid cells in the brain are very related to Alzheimer's disease, and so there's a strong relationship there in that if your grid cells are not performing well then you're more likely to be in stages of Alzheimer's. So I'm not sure what we can do with that connection, but it's very interesting. 

MELANIE: Well, that's how usually research goes a lot of times. You don't know really where that's going to go yet, but still, the potential is exciting in some ways. If somebody wanted to explore the work that you've done recently, see how they could use it in their own research, how would you recommend them exploring it? What resources would you suggest that they check out, especially for reinforcement learning? 

RAIA: Yeah, there's a lot of good material on the DeepMind site. We have all of these blog posts that both give you a really nice high-level understanding and also give you some resources at the end of that blog post to drill deeper, to go to other articles or go to the actual journal publication. That's probably where I would start. 

MELANIE: Yeah. I'm curious too-- what something that you've seen in the robotics research space in general in the recent years that would have blown your mind several years back if you think about it now? 

RAIA: So the work that Boston Dynamics has done in robotics has always been amazing and years ahead of its time. So this is the Atlas robot that now can do back flips and SpotMini, the dog-like robot from Boston Dynamics that can open doors and navigate incredibly well. Of course, I am going to say that these don't use any machine learning, or very little machine learning, and that's actually great for us who do learning-based robotics because it sets the bar really high. And I'm really excited to see if some point we can have humanoid robots doing back flips from a machine learning point of view instead of a optimization and control perspective. 

On the learning side, I think that the work of the group at UC Berkeley has been really amazing. They've been able to have robots do things like tie knots in ropes after a single demonstration by a human of the type of knot that they'd like to be tied, or robots opening door knobs and such. Also work that they've done with the group at Google Brain. 

MELANIE: This is wonderful, and I know we're running low on time. Raia, was there anything else that you wanted to mention that we hadn't already covered, or are you going to be speaking somewhere soon? 

RAIA: I just came back from a conference, so I'm not-- I'm on my way to a summer school where I'll be talking-- the Transylvanian Machine Learning Summer School. I don't have any big talks planned until next year, probably, but we're just at the beginning of really understanding AI and how-- there's a lot of things that we call AI algorithms. But real AI is where we start to understand more about cognition and the human brain, and I think we're just starting to scratch the surface of that. And I find it thrilling not just for the types of discoveries and types of scientific research that we can do with this, but also because it helps us understand the human mind. 

MELANIE: Great. Thank you again for joining us. We really appreciate giving the insights about the research you're doing around navigation, around reinforcement learning. 

RAIA: Thanks Melanie. Thanks Mark. 

MARK: Thank you so much. 

MELANIE: Thanks again, Raia, for coming onto the podcast and spending some time with us to explain what your team has been researching and getting a little bit more familiar with reinforcement learning. I think now it's time for us to dive into question of the week. How do you connect Google Cloud Source Repository to an existing Git Repository? 

MARK: This is an interesting question and something I've tackled myself. So if you're familiar with Google Cloud Source Repositories, they're basically our hosted, private Git Source Repositories, but you may already have, say, a GitHub repo or a Bitbucket repo or maybe you host your own Git instance on something else, maybe something like GitLab, and you want to be able to connect that existing Git repo to a Google Cloud Source Repository, maybe because that's just where it is. 

You can always use Google Cloud Source Repository by itself which is fine, but maybe you want pull requests or some other features we don't necessarily have. But you may want to connect to Google Cloud Source Repository because that's where all the hooks are for things like Container Builder, a lot of our debugging tools that require source, things like that. 

MELANIE: Nice. 

MARK: So there are definitely a few options. So if you're working on GitHub or Bitbucket, we already have integrations. So you can basically go to connecting to a GitHub repository in the Google Cloud console. We have basically some drop downs that you can fill in all the details for your GitHub or you Bitbucket repository and all that kind of stuff, and it'll automatically synchronize between the two. So that's already pretty straight forward, which is pretty nice. And as those changes come in from your outside repository, then that can fire off things like Container Builder and things like that. 

But it's also worth noting-- and I put a description in the show notes as well-- that you can also manually do this as well if you have a custom setup or something like that. The way I've done this in the past, and it works quite well-- there's a relatively easy way to mirror Git Repositories, and so you can set up just a cron job and send something like a GCE instance that basically mirrors the repository, and then the cron job will just immediately fetch what's on the-- remirror over and over again and push those details up, and that works really, really well as well. I've done that and it works really nicely. And then you can hook up all your things that work with Google Cloud Source Repositories. 

MELANIE: Well, thank you for giving us all that insight. So, Mark, where are you going to be in the next month? 

MARK: Next? Well I'll be at Next next. 

MELANIE: Oh yeah? 

MARK: Next week I'll be at Next. 

MELANIE: Will you be at Next? No. 

MARK: Yeah, the next next week I'm at Next. 

MELANIE: There you go. 

MARK: Yeah. And you'll be there too, I believe. 

MELANIE: We will both be at Next next week. And we will have a booth that people should come by and say hi to us. We will definitely be there in the mornings and a little bit in the afternoons. We'll have some swag to give out, there's some stuff in particular that you should come by early because we may run out, but we always have some other things like stickers and shirts that we will have probably throughout the day. So yeah, come by. 

MARK: Yeah definitely come by. I'll be speaking on Agonis as well, so if you're interested at all in open source and game stuff, I'll be there. We actually were trying to look at what are our favorite talks going to be, but there is so much content, we didn't have enough time this morning, so I'm kind of amazed at the amount of stuff that's going to be happening at Next. I'm really excited to see what happens this year, and also super excited to meet everyone who listens to the podcast and the wider Google Cloud community. They're always really lovely people. 

MELANIE: And we have a lot of people who we're going to be interviewing too. That'll be fun. 

MARK: Yeah. 

MELANIE: And then, I'm also, actually, right before Next, going to be giving a talk at [? Picom, ?] Russia. So if you're out there for that conference, you should definitely find me. 

MARK: Absolutely. Awesome. Well, Melanie, thank you for joining me for yet another episode of the podcast. 

MELANIE: Thank you, Mark. 

MARK: And thank you all for listening, and we'll see you all next week 

[MUSIC PLAYING]