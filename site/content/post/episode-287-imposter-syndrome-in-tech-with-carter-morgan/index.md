+++
audioDuration = "00:25:52"
audioFile = "Google.Cloud.Platform.Podcast.Episode.287.mp3"
audioSize = 62092551
categories = ["Mental Health", "Cloud Learn"]
date = "2021-12-08"
description = "Carter Morgan takes the guest seat today to chat with host Stephanie Wong about imposter syndrome in tech."
draft = false
episodeNumber = 287
hosts = ["Stephanie Wong"]
title = "Imposter Syndrome with Carter Morgan"
image="/post/episode-287-imposter-syndrome-in-tech-with-carter-morgan/images/hero/hero-EP-287.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/rbx7m9/episode_287_imposter_syndrome_with_carter_morgan/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Carter Morgan](https://twitter.com/carterthecomic) takes the guest seat today to chat with host [Stephanie Wong](https://twitter.com/stephr_wong) about imposter syndrome in tech. The technology ecosystem is constantly changing, with new advances every day. To keep up, tech workers are learning and developing new skills so frequently that at times it can feel as though they don't actually know everything they need to know. Here is where self-doubt can really take hold.

Imposter syndrome is most prevalent around transition points, Carter tells us. A new job or new responsibility, for example, opens tech workers to feelings of inadequacy. But there's hope, and he explains how we can learn and develop skills to overcome this difficulty. Through tales of his own experiences, Carter offers supportive tips he's learned, including how important it is to communicate with your manager and seek help rather than isolating. 

Unhealthy comparisons can foster self-doubt as well. Depth and breadth of knowledge are important factors to consider as well, and Carter points out that each has its benefits. Knowing when to go deep into a subject and when to obtain surface level knowledge can foster a sense of ease and adequacy in knowledge workers. Stephanie shares her experiences with imposter syndrome, highlighting the difference between self-perception and audience perception and why it's important to give yourself credit for what you've accomplished. Breaking into a new space can be intimidating. Carter walks us through important steps to take to start tackling imposter syndrome from the beginning, including the effects of positive mentorships.

This month, Carter is giving a presentation at Cloud Learn (Dec 8-9, 2021), and he wraps up this episode with a sneak peak.

##### Carter Morgan

[Carter Morgan](https://twitter.com/carterthecomic) is Developer Advocate for Google Cloud, where he creates and hosts content on Google's Youtube channel, co-hosts several Google Cloud podcasts, and designs courses like the Udacity course "Scalable Microservices with Kubernetes" he co-created with Kelsey Hightower.

Carter Morgan is an international standup comedian, who’s approach of creating unique moments with the audience in front of him has seen him perform all over the world, including in Paris, London, the Melbourne International Comedy Festival with Joe White. And in 2019, and the 2019 Edinburgh Fringe Festival.

Previously, he was a programmer for the USAF and Microsoft.


##### Cool things of the week

* Cloud Learn [site](https://cloudonair.withgoogle.com/events/learn21)
* 5 things not to do with Cloud Functions, and 5 things you absolutely should do instead [blog](https://cloud.google.com/blog/topics/developers-practitioners/5-things-not-do-cloud-functions-and-5-things-you-absolutely-should-do-instead)

##### Interview

* Cloud Learn [site](https://cloudonair.withgoogle.com/events/learn21)
* What do I really need to know to succeed at work? [blog](https://medium.com/@carterthecomic/what-do-i-really-need-to-know-to-succeed-at-work-129d42c16fd6)

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, what's up, everyone? And welcome to episode number 287 of the weekly Google Cloud Platform Podcast. This is your host, Stephanie Wong, and today I am with co-host Carter Morgan." >}} 

CARTER: Hey. 

STEPHANIE: Who is also a guest, this time. 

CARTER: Yeah, multiple hats. I'm pulling a Stephanie Wong, but I'm very, very happy to be here, Stephanie. 

STEPHANIE: (LAUGHING) OK, so multiple hats is actually the reason why we have you on here today because we are talking about such a popular topic, right, imposter syndrome in tech. 

CARTER: Yeah, I think it's on everyone's mind in some form or another. And so I wanted to basically go into that and why, and I got a chance to do that at an event this week and I got to give a talk about it. So I'm here to share some of those insights. 

STEPHANIE: Speaking of the event that you're about to talk in this week, why don't we go ahead and jump into the Cool Thing of the Week, where you can talk a little bit more about that. 

[MUSIC PLAYING] 

CARTER: Well, this week, there's a Cloud Learn event, which, if you're interested in certification, like for data engineering or a bunch of other different roles, if you're interested in free, hands-on courses and knowledge and education, then you're going to want to check out this event. It's through Cloud OnAir. It's December 8th through 10th, depending on if you're in America or Europe, but it's a two-day event. And there's a full schedule of information and knowledge that's free and then information about some of the certifications that you can do. 

And the reason why this is so important and so cool is because, recently, there's been a lot of information that came out that said certain types of certifications and qualifications lead to very high-paying and exciting jobs. And so two of the Google ones were at the very top of that list. If I'm not mistaken, it was the Data Engineering and the DevOps Professional one. And so you can take this opportunity now to go for free, try out and learn some of the information available, see if it's a fit for you, and, if it is, you can open up yourself to a whole new range of career possibilities. So that's the Cloud Learn event, December 8th and 9th, very exciting. 

STEPHANIE: Yeah, and this is super top of mind because I've been getting questions from folks who are trying to break into either tech industry or just find a specific role in tech. And this event, in particular, really helps create that path for you to realize what's competitive right now, what certifications are getting the highest-paying jobs, or just opening up more opportunities for you. And I know that, at Google Cloud, we are trying to train 40 million people, and so this is a huge, huge step in that direction, especially for folks who may not even have any experience. 

So, everyone, get excited for Cloud Learn on December 8th through the 10th. We're going to have live demos, workshops, and more. 

CARTER: Yes. And, Stephanie, what about you? What's something cool that you noticed? 

STEPHANIE: Yeah, so there's one blog post that caught my eye, this week. It's by our fellow Developer Advocate Sara Ford and Martin Skoviera, and they both put together a series of blog posts that cover the most common antipatterns or misconceptions about Cloud Functions that the Support team sees. So if you want to hear about how to write event-driven Cloud Functions properly by coding with item potency in mind or how to reuse Cloud Function instances for future invocations, how to establish outbound connections correctly, and more, they're going to give you a very hands-on, step-by-step series of blog posts that tells you the gotchas and how to avoid them. 

CARTER: That sounds so interesting because I only know some of the lower-level constructs, like how to do stuff with Google Kubernetes Engine. And it would be really nice to learn some of the higher-level abstractions like Cloud Run or even Cloud Functions, just to understand some of the patterns that are available without having to learn all of the infrastructure underneath it. 

STEPHANIE: Yeah. 

CARTER: I think that's really interesting. 

STEPHANIE: Exactly. It's a valuable skill to learn as we move into this new age of, like, service-oriented architectures and event triggers, et cetera. But kind of building of the concept of needing to learn new skills, I feel like this ties in perfectly with the topic that we have today. So why don't we go ahead and jump into our conversation about imposter syndrome in tech? 

[MUSIC PLAYING] 

CARTER: Yeah, imposter syndrome in tech. And what you just said, I think, is the most core, relevant piece of the puzzle-- learning new things. When we're in technology, we're knowledge workers. We're always, always, always forced to learn something new, whether it's a new technology or a new code base, and we're supposed to do that under a deadline. 

And all of that pressure adds up, and it leads us to feeling like, hey, we don't know what we're supposed to know. We're imposters. We're frauds. And so that's one of the reasons why this is so prevalent in our field. Even someone as successful as you are, have you felt imposter syndrome before? 

STEPHANIE: Oh, yeah, 1,000%. I mean, multiple times throughout my career and outside of tech, too, I've felt imposter syndrome. Specifically, when I first started working in tech, I felt it because I really didn't know much about enterprise technology, and I had to learn everything on the job. And I've said this multiple times in other podcasts, I didn't go to school for a traditional computer science or engineering background. So I really did feel this sense of having headwinds against me trying to keep up with everyone around me who did have that background. 

And the other times I felt it were when I shifted and pivoted into focusing on cloud computing and then again when I shifted into DevRel and had more of an engineering focus, so time and time again. It's going to keep happening, probably, but I think my ability to cope with it gets better each time. 

CARTER: So I think these are really important things we're touching on. It's easy to kind of predict when imposter syndrome might happen, right around transition points like a new job or a new role. Like, well, that's a ripe time for imposter syndrome. And then the other part, which I think it's really important to understand, is that learning how to deal with imposter syndrome is a skill that we can develop. 

I wasn't equipped with the skills to handle feeling like a fraud or an imposter, and so I did things that were counterproductive. Like, I would close up. I would not ask questions. I would stay up all night and try and solve every problem myself. And, as I've gotten older, as I've done more research, as I learn from other people in the industry, I've learned, like, oh, there's other ways to approach dealing with imposter syndrome that are more useful, more productive. And if I can just do that most of the time, or even half of the time, that's a win. 

STEPHANIE: Yeah. I mean, now that you've mentioned that you're able to cope with it better over time, I think this is the big question that I get, especially from people that I mentor, is how do you even start to cope with it? Now, I know you probably had a journey throughout your tech career, but kind of take me back to day 1 and your journey from closing up to now being able to ask questions, open up, and even the emotional side of things, like how to cope with it. 

CARTER: OK, this is a great question because, like, my journey I think is a little bit similar to yours in that I come from a nontraditional background. Like, I went to video game school. I went to a school called DigiPen, which is amazing, but then I went to work at a big tech company. 

And everyone that was there was, like, oh, I went to Yale, I went to Harvard, I went to Stanford. I'm like, I played video games, yay. So it was easy to feel like I didn't belong. 

And then what happened is, when I joined Google, that was my first time-- before, I used to work with compilers and emulators, lower level constructs-- and I came to Google and we were working on the cloud. And I had no idea about this level of programming. Like, I'd never considered things at this scale, and so there was another ripe time for imposter syndrome. 

Then, with changing teams and roles, started to become someone that offers mentorship to other people, there's always that feeling of, like, who am I? Why me? And so this talk came together because, right before I was going to leave Google-- and I took a year off of Google to go to clown school. And then, coming back, I felt like an imposter. I went to clown school. Why am I here? 

But, right before I left, someone asked me to mentor someone. And I knew I was leaving, so I ended up writing nine, 10 pages of success advice or advice I wish I had, things I wish I knew before I got into tech. And a lot of it centered around imposter syndrome, so that's how this talk developed. 

STEPHANIE: Wow. Yeah, as you were telling this story, the couple of things that came to mind for me were I also went through the experience of getting into a really special opportunity, like working at a big tech company, making it through the interview process, getting the job, which was a huge accomplishment for me. And once I got on the team, that's when it sunk in that I felt like, suddenly-- I see the people around me who are the best in their field, who have these backgrounds like you were mentioning-- questioning suddenly why am I here. I was clearly chosen and made it through the process, but I don't feel like I'm on par with everyone else, almost like this incongruency in the perception you have about yourself versus the perception that people see in you. 

CARTER: Yes, and I think this is a good time to even just define imposter syndrome because what you said, there, really touches on a core piece. Like, imposter syndrome is basically doubting yourself and your abilities. You feel like a fraud. 

And the thing that's interesting is this disproportionately affects people that are high performers, people that generally have accomplished a lot, but they just don't accept it. It's never enough. And, there, what we're talking about is a difference between how we perceive ourselves and how other people perceive us, and there's often a disconnect. You know, I teach public speaking, and one of the things I was taught by Scott Berkun when I took a workshop with him was that there's a difference between audience point of view and performer point of view. 

And that same thing applies to knowledge workers and tech workers, where no one knows all the things we don't know, and we often don't know all the things that the people we're talking to don't know. And an example of this was-- I was working on backwards compatibility for a video game console, and the lead programmer was this genius. Like, he could just grok an entire codebase, write all the assembly instructions, and do all this. Like, it seemed like out of his head. 

And then I got to pair with him. I got to work with him, and I got to see all the different times this person was lost or confused or asking for help. But they had a better strategy for managing it than I did. So, when they got lost, it didn't become a two-day, three-day multi-week problem. They figured out ways to solve it 15 minutes, an hour. And that's when I started looking at, OK, how can I better learn how to deal with this very natural thing that's going to come up over the course of my career? 

STEPHANIE: Yeah, I think that's a great point. I mean, when you first start, let's say, in a new environment or a team, of course, you're going to realize that there is a whole swath of areas, focus areas, topics, different technical concepts that you don't know yet. And that's natural because it's a new environment or a new company, new set of products. And you're comparing your lack of knowledge in these spaces to people's breadth of knowledge in these spaces. 

CARTER: Mm. 

STEPHANIE: It's not a fair comparison to cause this self-doubt. I think, for me, over time, I've really just had to give myself time to learn these concepts. It's almost like in social media. You're kind of comparing yourself to the highlight reel that you see in others, but you need to give yourself that chance and realize that you have so much to bring to the table too. 

CARTER: Yeah. And, as programmers, I like to think in algorithms. And so I was an AI programmer, and I used to love like graph traversal. 

And there's this concept called depth-first versus breadth-first search. And, when you think about knowledge, a lot of times, our knowledge works that way, where there's certain areas where we can go deep and really explore. But if we only do that to the exclusion of everything else, then we're going to have a very limited view of the world, a very limited understanding of different technologies or a codebase. And then there's other times where it makes sense to maybe go through breadth, like to get a general overlay of the land, before deciding or even after deciding when to go deep. And, to me, I think the best approach is to understand when it makes sense to go deep and then to stay shallow with a lot of things. 

So an example is I started podcasting because, even though I'm really focused on like, say, DevOps and engineering in that way, I still wanted to stay up-to-date on what was happening in the industry. I didn't have time to do it all myself, and so what I was able to do was find a strategy to speed that up and keep me abreast of a wide range of things happening in the industry. Which I think helps with imposter syndrome a little bit because I'm still learning and growing and I'm understanding, OK, there's a lot I don't know, but at least I'm learning little bits at a time. I'm doing the best I can. And, sometimes, that's all we can do. 

STEPHANIE: Yeah, that's actually a common question I get from folks who are jumping into a new area of tech or trying to break into the industry, is should I focus on going really deep in one area or covering a breadth of, let's say, all cloud computing concepts? Now, I think I'm biased because I'm probably more of a generalist. I do enjoy touching a lot of different areas of technology and constantly learning and being able to apply that knowledge in the new content that I create. 

But, for some people, let's say they have a project at hand where they are responsible for creating a new frontend system or maybe they want to create a serverless event architecture. And, in that way, it's really nice to be able to hyperfocus in one technical area so that you can really start to fine-tune those skills and go from that area of not knowing what you don't know to knowing what you don't know to, now, knowing that area quite well. 

CARTER: Right, from unconscious incompetence all the way up to unconscious competence, the mastery progression. I find that very interesting because where we're at in that hierarchy, where we're at in that spectrum often changes how we view the world. I think it's called the Dunning-Kruger effect, this idea that certain people find themselves more intelligent than they really are and a lot of other people find themselves less intelligent than they really are. And I think this happens because, again, we don't always have a full grasp of all the knowledge available. And if we haven't, say, gone deep into an area, we might not know all there is to know about it. 

And so I actually want to challenge you a little bit here because you said that you stay pretty shallow in a lot of areas. But, for me, watching on the outside and having worked with you a lot, and maybe the people listening at home, I would say that you're probably world class. You've probably gone very deep into basically presenting information, into communicating. Out of all the people I've met in this field, you're one of the better people at that. So it seems like you have gone deep in one area, even if it might not be the quote, unquote, area you should have done that. Right? 

STEPHANIE: Yeah. That's actually part of my journey in tech, throughout my career, is realizing the value that I do bring because I've felt that imposter syndrome even after years of being in this team or in tech in general, that I don't know enough about a certain technical area. But, instead, I need to shift my mindset and start to realize that I'm bringing a different set of skills to the table, where I can communicate these concepts at actually a deeper level than I give myself credit for, and that's the shift in thinking of how I'm starting to cope with it and start to realize the value. 

CARTER: See, that's brilliant. And, in fact, I want to actually talk about some different mindsets or other mindsets that we can use to start managing imposter syndrome because I think it's something that's always going to be there at some level. And one of the first ones is that communication. 

And you said that you were able to understand that you bring unique things to the table. Everyone does to some extent, but I think there's a piece that-- and I think you're probably world-class on-- but learning how to communicate with managers, peers, and stakeholders, especially mentors, even. Developing that skill goes a long way towards minimizing the effects of imposter syndrome. 

So, like, here's an example. If you're new to a job, your manager is one of the most important relationships that you can have. They determine your bonuses, a lot of times. They determine what you work on. For every company, it's going to be a little bit different, but your manager is a key relationship. 

So having a strategy for how to get feedback from that manager, how to say, what do you expect from me? What's a win for you? If I do x, y, and z, what is going to be the return for me? OK, we agreed on that. Now, let's execute. Am I keeping on pace with what you wanted? Do you still want the same thing? 

Learning those skills early, I think, help manage imposter syndrome because you have an authority, someone that's very important to your career saying, "Yes, you're on the right track," "Yes, you're doing the things we agreed on," "Oh, here's something that's not quite what I imagined," and getting that early and finding out early as opposed to waiting until-- yeah, I made this mistake of waiting until after my first year of [INAUDIBLE] get feedback that, oh, I wasn't doing right at something. And I was like, oh, I can't make that mistake again. 

STEPHANIE: Yeah, performance reviews are one time in the year that you can connect with your manager and your peers to get feedback, but it should be kind of this ongoing cycle of making sure that everyone's on the same page in terms of expectations. 

What about for folks who are just learning about tech, and they feel imposter syndrome between themselves and the community around them? So let's say I am somebody who's trying to break into tech, and I'm deciding between learning DevOps skills versus security engineering, big data, whatever it may be, and you're suddenly feeling like you don't have the skill sets necessary to get the job you want, but you are seeing a whole group of people online, on social media, who are just absolutely killing it in that field. 

CARTER: So I think the first thing, then, is to find mentorship. Because it's like, where should I put my energy first so that it's used in a way that's going to support and fuel me towards my goals? So if, right now, you feel like, I don't know what to learn, I see all these people that know so much more than me, then the first step is to ask, "Hey, why did you learn the things you learned?" 

A really useful approach that's worked for me, talking to people at companies like Microsoft, the Air Force, Google. It doesn't really matter the level, it's just saying, "Hey, I really respect your work. I want to learn a little bit more about how you do that. Do you think maybe we could drop 15 minutes on a calendar one day, I can pick your brain?" 

Have you done that? Like, how have you found mentors? 

STEPHANIE: I have always valued mentorship and reaching out for help, just getting some time on people's calendar. And just shadowing them is really helpful, too. But I think it also boils down to people's motivators. 

And a lot of people, like you said, in your experience, might kind of box themselves in and feel helpless in terms of how to get to that next level of expertise. But, really, changing your mindset so that you open up, you ask for help, ask for guidance, ask for coaching, it's always going to get you to that next level. And if everything else fails, what you've really gotten out of it is you've been able to learn and put some time into an area that made sense at the time. 

CARTER: Yes! And so I want to give people one more specific tactic for these mentor conversations. A lot of times, it can be really useful to ask what didn't go right for your mentor. Because we see these people after the years and years of hard work that they've put in to get where they're at, and so learning how to ask a question like, "So it must have been pretty easy after you did x, y, or z." 

Like, if you say, "What went wrong?" people won't necessarily give you a response. But if you say, "Oh, so it must have been pretty easy after you got your degree," "It must have been pretty easy after you got this job at so-and-so," and they'll be like, "Easy? No! I had to do x, I had to do y, I had to do z." And then you can start to hear some of the real story behind that struggle to get where they're at. And then you can start to relate because, in the same way that you're struggling now, a lot of times, our mentors struggled five, six, seven, 10 years ago. 

STEPHANIE: Yeah. I mean, we like to think that people are naturally born with the skills that you see them have, but everyone had their journey of starting out from somewhere. Right? And I think a lot of the motivation for them to get through those periods of time were that they really put the work in, they were probably passionate about that area to be able to focus so much on it and get to the level that they're at now. And so hearing that from the experts that you look up to will definitely have a positive impact in making you feel like you're on the right track. 

CARTER: Mm-hmm. 

STEPHANIE: So I want to hear a little bit more about-- you know, we talked about some coping mechanisms, but what are some things that you aren't going to get to in this talk that you're having at the Cloud Learn event? 

CARTER: As with anything like this, you have a lot of information that you want to give, and then you have a limited time. And so there were some really important things I wanted to get to, like about fear a little bit and what fear is and learning how to identify where your fears are coming from. But I didn't really talk about the physical component of fear and the physical component of emotions and how they're information for us to use. 

And, like, our society is really divorced from this. And so, a lot of times, people feel like when they're feeling imposter syndrome, like it's somehow bad or negative. And it's like, no, this is just data. This is your body giving you data, and now you can act on this data. So that's one area I wish I really would have gotten into more because I think if we learn how to accept the states that our body naturally goes into and we learn how to process those and not judge them and not try and reject them and push them away, if we learn how to sit with them and take it for what it is, I think that goes a really long way to solving imposter syndrome and a lot of other emotional crises we tend to have. 

STEPHANIE: I was going to say that that sounds like a really good foundational concept to understand so that you can apply these mechanisms to the imposter syndrome that you feel outside of your career, outside of tech. But it also begs the question of why do you think we talk about imposter syndrome in tech so much? Is there something particular about it here that makes it so prevalent? 

CARTER: Yes! One, we're knowledge workers. A lot of my family, they work in factories and whatnot, and I never hear them say, like, you know, I don't know if I'm good enough for this. I don't know if I'm smart enough for this. So we're putting ourselves into this line of fire where we're constantly having to solve problems that sometimes are unsolvable. Like, sometimes, it's only going to be the best guess or only like a good enough solution, and that's inherently stressful. 

Then we're doing this with people that, a lot of times, come from a pretty high socioeconomic class, too. Like, if you think about this, like, I wasn't someone that was able to get into a Yale or anything like that. It wasn't even on my radar. My first real money came from my first job in tech. And so that's a whole different world, and now we're trying to fit into this world. 

And so I think one of the things is that our identity is-- which is something we don't talk about as much as I think we should, even though it's getting a lot hotter now-- it plays a really big impact on what kind of places we fit into. And so, sometimes, this imposter syndrome isn't even just about the knowledge you bring to the table. Sometimes, it's about the cultures that you're like assimilating into. 

STEPHANIE: Oh my gosh. That's so, so salient. I absolutely agree we don't talk about that enough. And when we are experiencing imposter syndrome, we're not even associating the idea of who I am, the background that I have, and that's really the main component that ties into why we're feeling this way. I think we're almost implicitly experiencing a difference in identity between who we are and the people in tech that we see, which can sometimes not be as diverse as we'd love for it to be. 

CARTER: Here's a moment of truth and honesty. I feel imposter syndrome all the time, even in the job that we do, because who I am and how I show up outside of work versus who I am and how I show up when the cameras are on, it's very different. And so, like, if you've heard of code-meshing or code-switching, I change up the way I speak 100% to be, you know, professional. 

And then there's a lot of cognitive dissonance that comes in, a lot of a disjoint, a disconnect between this who I'm presenting as and who I actually am. I don't even have an answer for that one yet. This is one of those things that I didn't get time to even put this into the talk and really work on it because I don't have a great answer for this other than to know that it's a real thing. 

STEPHANIE: Wow. Yeah. I mean, first off, I think this is such a wonderful and needed talk to happen. And we're all very lucky to have you be able to speak on it at Cloud Learn this week because it sounds like there is a whole lot more in the talk for folks to watch and listen to on December 8th through 10th. So, Carter, where can people go to watch this talk? 

CARTER: People can go to cloudonair.withgoogle.com/events/learn21. There'll be a link in the show notes, but you can go there to actually watch this event. Sign up, register, and then learn more about all these free offerings that are there for you to take advantage of. 

STEPHANIE: Nice, and so you mention talking about defining imposter syndrome, some of your comparisons between what we do in tech to being a performer, talking about how fear plays into it. Any other topics that people can look forward to? 

CARTER: You know, my favorite topic, the thing I was most excited to talk about-- and it was a minor thing in the talk, but it's a really big profound thing-- was this idea that we already said managers are your most important relationship. What happens if you have a bad fit? Or, even further, what if, just at the job itself, it's a bad fit? A lot of people don't realize that they can leave. They don't have to stay. 

And we had this idea that you have to stay at a job and try your best to make it work, but you could take the same amount of energy taking that bad situation and making it good and you can take that energy and apply it to a good situation to make it great. And so learning how to get yourself financially in order-- like, having some money set aside so that, if you do need to leave, you can-- that helps a ton with imposter syndrome because you're able to be in a space that's conducive for your growth, your learning, your well-being. 

STEPHANIE: I wish people could see me in video because I'm snapping my fingers at that, right now. So true. Everything in your life can be temporary. And, yeah, you have a choice if things aren't working out and you need to pivot, and that's the beauty of always keeping yourself learning. 

CARTER: Yes! Go to the Cloud Learn event. Definitely get all those free resources. They have three different learning tracks to check out. It's very exciting. And I'm also a host for one of those. So if you like me enough, you can go see me in between every single session of one of them. 

The other place is on my Medium, and hopefully we link it under here. I'll link a lot more show notes and a lot more things that didn't quite get to make it into that talk, like a seven-part article series going over this in a lot more depth. 

STEPHANIE: Awesome. Yeah, so this is just one career talk. But, of course, we have technical talks about Getting Started with Google Cloud, Getting Started with Google Kubernetes Engine, and, for data practitioners, Big Data and Machine Learning 101. So you got a whole lot packed into that event, so definitely go and check it out. And check out Carter's resources. This is just the beginning. 

So, Carter, I just want to thank you so much for taking the time to talk about this important topic that we get asked about all the time and, admittedly, we have experienced it so much in our careers ourselves. 

CARTER: Yes. Thanks for having me. I appreciate you. 

STEPHANIE: All right. Everyone, get excited for our last episode of the year, next week, and we'll see you all there. 

[MUSIC PLAYING]