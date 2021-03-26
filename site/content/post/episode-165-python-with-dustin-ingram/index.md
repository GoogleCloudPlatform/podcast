+++
audioDuration = "00:28:07"
audioFile = "Google.Cloud.Platform.Podcast.Episode.165.mp3"
audioSize = 40981817
categories = ["Python", "Cloud Python"]
date = "2019-03-06"
description = "Mark and Brian Dorsey spend today talking Python with Dustin Ingram."
draft = false
episodeNumber = 165
hosts = ["Mark Mandel", "Brian Dorsey"]
title = "Python with Dustin Ingram"
image="/post/episode-165-python-with-dustin-ingram/images/hero/hero-EP-165.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/5GtCZ6CVT6e"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/ay27x2/episode_165_python_with_dustin_ingram/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage" 
+++

[Mark](https://twitter.com/Neurotic) and [Brian Dorsey](https://twitter.com/briandorsey) spend today talking Python with [Dustin Ingram](https://twitter.com/di_codes). Python is an interpreted, dynamically typed language, which encourages very readable code. Python is popular for web applications, data science, and much more!  Python works great on Google Cloud, especially with App Engine, Compute Engine, and Cloud Functions. To learn more about best (and worst) use cases, listen in!

<!--more-->

##### Dustin Ingram

[Dustin Ingram](https://twitter.com/di_codes) is a Developer Advocate at Google, focused on supporting the Python community on Google Cloud. He’s also a member of the Python Packaging Authority, maintainer of PyPI, and organizer for the PyTexas conference.


##### Cool things of the week

* Machine learning can boost the value of wind energy [blog](https://blog.google/technology/ai/machine-learning-can-boost-value-wind-energy/)
* Compute Engine Guest Attributes [site](https://cloud.google.com/compute/docs/storing-retrieving-metadata)
* Colopl open sourced a Cloud Spanner driver for Laravel framework [site](https://medium.com/google-cloud/colopl-open-sourced-a-cloud-spanner-driver-for-laravel-framework-4ca1db018a3)
* Running Redis on GCP: four deployment scenarios [blog](https://cloud.google.com/blog/products/databases/running-redis-on-gcp-four-deployment-scenarios)

##### Interview

* GCP Podcast Episode 3: Kubernetes and Google Container Engine [podcast](https://www.gcppodcast.com/post/episode-3-kubernetes-and-google-container-engine/)
* Python [site](https://www.python.org/)
* Extending Python with C or C++ [docs](https://docs.python.org/2/extending/extending.html)
* PyPy [site](https://pypy.org/index.html)
* PyPI [site](https://pypi.org/)
* App Engine [site](https://cloud.google.com/appengine/)
* Compute Engine [site](https://cloud.google.com/compute/)
* Cloud Functions [site](https://cloud.google.com/functions/)
* Ubuntu [site](https://www.ubuntu.com/)
* Flask [site](http://flask.pocoo.org/)
* Flask documentation [docs](http://flask.pocoo.org/docs/1.0/)
* Docker [site](https://www.docker.com/)
* Python documentation [docs](https://docs.python.org/3/)
* PyCon [site](https://us.pycon.org/2019/about/)
* PyCaribbean [site](http://pycaribbean.com/) 

##### Question of the week
[How can I manipulate images with Cloud Functions?](https://cloud.google.com/functions/docs/tutorials/imagemagick)


##### Where can you find us next?

Mark will be at [GDC](https://gdconf.com), [Cloud NEXT](https://cloud.withgoogle.com/next/sf), and [ECGC](http://ecgconf.com) in April.

Dustin will be at [Cloud Next](https://cloud.withgoogle.com/next/sf) and [PyCon](https://us.pycon.org/2019/).

Brian will be lecturing at [Cloud Next](https://cloud.withgoogle.com/next/sf): 'Where should I run my code?'

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 165 of the weekly Google Cloud Podcast. I'm Mark Mandel. And this week, I am delighted to be joined by Brian Dorsey. Brian, how are you doing?" >}}

BRIAN: Awesome. Hello, Mark. And hello, everyone. 

MARK: So, Brian, I know this isn't your first time on the podcast. But it is the first time you're being host. Do you want to tell people a little about yourself? 

BRIAN: There is nothing interesting to know. 

MARK: I disagree, but go ahead. 

BRIAN: I'm also a DA on Google Cloud. I love me some Python, trying to learn some go fly remote control things, and on the Cloud side, really have just tried to pay attention to all the different ways we have to run stuff everywhere, all the different compute options we have, digging into all that stuff. 

MARK: I think, actually, it's entirely your fault that I got involved with Kubernetes. 

BRIAN: Oh, maybe. 

MARK: I think I was about a week into me joining Google Cloud. You were like, yeah, so I'm teaching a Kubernetes workshop tomorrow. Does anyone want to help be like teacher assistant? And I was like, sure. I'll learn Kubernetes overnight. And so I did. 

BRIAN: I think that says something more about you than me. 

MARK: Probably so. So I blame that entirely on you. 

BRIAN: I'll take it. 

MARK: Awesome. So yeah, this week, we have Dustin Ingram joining us. He is going to be talking to us all about Python. So that's going to be good. After that, we have a question of the week where you're going to be asking me something fun. So we are going to talk to me about manipulating images with Cloud Functions, which should be interesting. But before we do that, why don't we get stuck into our cool things of the week? 

BRIAN: Excellent. 

MARK: Yes. So my first cool thing of the week is a blog post on the Google blog called Machine Learning Can Boost The Value of Wind Energy. This is talking about how Google has been experimenting with using machine learning to improve the prediction of the output of wind farms essentially. And unfortunately, wind doesn't blow at a constant rate all the time. So-- 

BRIAN: Gotcha. 

MARK: --due to it's very variable nature, being able to predict what sort of output you're going to get from it is usually very valuable because that's what you can tell the power grid that you're having an advance and that kind stuff. So they've managed to make significant improvements actually on prediction of wind power output over 36 hours ahead of actual generation-- 

BRIAN: Oh, OK. 

MARK: --and has boosted the value of their wind energy by roughly 20%. So I put a link to the article in the show notes, so you can dig into exactly what it is they've done there. But yeah, kind of neat stuff for renewable energy. 

BRIAN: I bet there's a lot of things that would be more valuable if we knew about them 36 hours in advance. 

MARK: Yes. That's like naming a lot of things. Yeah, mistakes that I'm about to make, 36 hours in advance, I would like to know that. That would be great. 

BRIAN: Sign me up. That's a service I'm interested in as well. 

MARK: Exactly. 

BRIAN: So my thing is Compute Engine guest attributes, which is kind of specific. But all of our compute environments and Compute Engine in particular expose key value pairs about the machines via this thing called the meta data service. And you can edit the host name and instance ID and other kind of stuff. And so you can build scripts that monitor your whole fleet or tell what's going on, all that sort of stuff. And we've just added in beta the ability to mix your own data in with that, which seems pretty cool. 

MARK: Cool. So I've got another one here as well from one of my friends up in Japan. One of our sales teams members, Samir Hammoudi, who I've worked with previously, he wrote an article for a company that he works with called Colopl, a Japanese mobile game company that's very, very well known all over in Japan. 

But they did something really cool in the open source land. They actually released a open source driver for Cloud Spanner for the Laravel PHP framework-- I hope I'm pronouncing that correctly-- which is a very popular framework for PHP. The GitHub repo is all in English. You can read that. The blog post here is all in English. If you read Japanese, you can read more about it through that-- 

[JAPANESE ANNOUNCER] 

--but you could have a look at Samir's summary there. But, yes, if you're using Laravel and you want to use Spanner, this is actually a really nice way of doing it. 

BRIAN: Nice. And more information from Japan about global things. Shunji Kawabata wrote a really nice blog post all about different ways to run Redis on GCP. 

MARK: Oh, neat. 

BRIAN: And in case anybody's not familiar, Redis is an in-memory key value storer with really rich data types around the values. And you see it just in architectures for so many large projects. He's gone through all the different ways to run them and pros and cons about each of them. And it's just really nice to see it all in one place. 

MARK: Nice, very, very cool. I will definitely check that out. Awesome, well, I think it's probably about time that we go have a chat with Dustin and talk about all the Python things. 

BRIAN: And Pythons! 

[PYTHON SLITHERING] 

Pythons? Were aah! On planes. 

[AIRPLANE TAKES OFF] 

MARK: Pythons don't make [INAUDIBLE] noises. I'm pretty sure. 

[CHIME] 

This week, I am delighted to say we are joined by Dustin Ingram, developer advocate for Python to talk to us all about all the Python things. Dustin, how are you doing today? 

DUSTIN: Hey, Mark. I'm doing great. 

MARK: Excellent, excellent. Thank you so much for joining us, and I know Brian's pretty excited to talk to you, too. 

BRIAN: Oh, yeah. 

MARK: Excellent. Before we get stuck into all the Python things, though, Dustin, do you want to tell us a little about who you are and what you do here at Google? 

DUSTIN: Yeah, so I'm a developer advocate here at Google, at Google Cloud. And my focus is on Python, on the Python community, all our Python users, everything that we do with Python basically. So I've been working with Python for a really long time. And joined Google about six months ago, and just really loving working with Python, and the community, and cloud, and all the things that overlap there. 

MARK: Awesome. So I'm not particularly familiar with Python. It's not something I, for whatever reason, just happened to run into. So for those people who aren't familiar Python, do you want to tell us a little bit about the language, and what it's good for, and all that fun stuff? 

DUSTIN: Python's an interpreted language, so that means that it's not compiled like C or something like that. It's sort of every time you run Python, it interprets the language. Python's also dynamically typed. So unlike some other languages, you don't have to specify the types, like if this is a string, or if it's an integer, or whatever. And then more generally, Python's just a pretty high-level language. It's super readable. 

So since the very beginning, Python's had a really strong focus on code readability. So a lot of people like to say that Python is like runnable pseudocode. So it looks like something that you'd write that's pseudocode. And it also looks just like Python. So for that reason, people really like it. Beginners really like it because it's easy to pick up, and learn, and looks very readable. Folks just like it when they want to be able to read their code, I guess. 

MARK: So, OK, great. So are there any particular great use cases for Python? Is there things you would be like, this is the perfect thing to use Python for? 

DUSTIN: I'm totally biased here because I like to use Python for everything. And one of the really nice things I think about Python is that if you really want to, you can use it for anything. Something else that people like to say about Python is that it's the second best language for everything. So basically if you want to do it, you could probably do it in Python. Might not be the fastest or easiest 100 percent the time, but definitely possible to do pretty much anything you want. 

Python is super popular for web applications. So a lot of real big name groups run their large services on Python. So Instagram, for example, it's all Python. It's all Django. And other similar large-scale things like to use Python. And data science as well, so a lot of folks do data science, and machine learning, and stuff with Python. Mostly because that stuff is hard enough as it is, so as long as you can read your code and write meaningful code with Python, it helps abstract away some of the more complex parts of that, I guess. 

BRIAN: OK, I do have to have a follow-up on this one, though. You said almost everything. So what would you not use Python for? Or what would you maybe not recommend people use it as a first choice for? 

DUSTIN: So because Python's interpreted, that means we're not compiling something down to a binary. And it means that it's a little bit slower to run. Just the fact that's interpreted makes it slower. So anything that's like be super performance heavy, probably not great to use with Python. Although, there's all sorts of workarounds for making Python really fast. And I'm specifically talking about the Python interpreters is written in C. So that's what we call CPython. And that is a relatively mediocre or slow interpreter. 

It's designed to work well and not necessarily for performance optimizations. There are other Python interpreters, though. So there's also PyPy, which is self-hosted Python, and it's real fast. So depending what you want to do, you can make Python a little bit faster. But, generally, if you're doing anything that's really CPU-bound or I/O-bound, Python's maybe not going to be the best choice. You might want to write a little bit of C, or a little bit of Rust, or something like that. 

MARK: I'm sitting here trying to think of terrible ideas. 

BRIAN: Oh, we could have a whole nother conversation-- 

MARK: It's a whole episode. 

BRIAN: --of terrible ideas. OK, so let's say-- which actually is pretty true-- I am a Python person. And I'm curious, what can I do on Google Cloud with Python? 

DUSTIN: Right out of the bat, putting your Python application, your web application on Google Cloud is one of our number one use cases here. So way back in the day when App Engine came out-- which I think was over 10 years ago now-- it was one of the very first platform as a service type things for Python. So it was kind of one of the first places that you could take a Python web application and deploy it. 

Obviously, it's changed a lot since then. That's still something that a lot of people come to Google Cloud to do with Python. We still have App Engine. We have Compute Engine as well. We have App Engine Flex and Cloud Functions and all these play a little bit different roles, but, in the end, you're always deploying a Python application. For functions, it's just a function to Google Cloud. 

MARK: Nice, how do you go about choosing which platform is a good fit? Because you just said, we've got seven different things. 

[LAUGHTER] 

Eh, it's fine? 

DUSTIN: Roll the dice, I don't know. 

[DICE ROLL] 

Yeah, so we do. We have a lot. They do serve different use cases, though. So let's start with the original App Engine. The original App Engine made a lot of choices for you about what runtime was available to you, like system-level libraries, things like that. And you didn't get to really change that too much. We picked a couple packages, put them in the runtime for you, and they were there. You could bundle some extra Python dependencies. It was pretty restrictive. 

And, again, that was 10 years ago. So things have changed a little bit. The new App Engine, you want to use that if you want a consistent base image. So it's Ubuntu under the hood, but you want to be able to install whatever dependencies you want-- anything from PyPI or anywhere else. Yeah, and if you just want to respond to web traffic, that's what App Engine is really good for. Cloud Functions, also like that. You can also write something that looks like a web application in Cloud Functions, but that would just be basically a function that responds to an HTTP request. 

So it would be a single end point in your application would be a single function. But then if you don't want to do HTTP at all, Cloud Functions are great for triggers across all the GCP. So one really common example is you want to do something with a file after it's been uploaded to your storage bucket. So Cloud Functions is perfect for this because you can hook into the events that are happening. See every time this file is added to this bucket, do this thing. And then you just write a little function of Python, it gets some information about the event, and you can do whatever. 

And then beyond that and the rest of the platform just add additional customized abilities. So Flex, you can really customize the runtime if you need to do really specific video encoding stuff. I know some of our customers do that. They use Flex because they can just really install exactly the system-level libraries, really fast libraries, whatever they need to do a really specific task. And it works well for that. 

BRIAN: So here's a fun question for you. I'm running Python, and I've decided App Engine is the way I want to go to begin with. And then I'm running stuff on App Engine, and I realize maybe I've made the wrong choice. What is the developer experience look like for each of those tools? Is it easy enough for me to shift? Or I suppose it just depends what I'm building. Or what's your thoughts there? 

DUSTIN: Eh, it depends on what you're building. And so, yeah, let's just talk about the latest-- the new App Engine runtime is Python 3.7. We're calling it the idiomatic App Engine standard runtime. Moving off of that would be super easy because there's nothing really locking you into that runtime that's really specific to App Engine, right? Our getting started example, for example. A lot of people are super familiar with Flask. 

Flask is a microframework for web applications in Python. We just tell you to write a Flask app, and then you deploy that to App Engine. And that Flask app, you can take that anywhere. You can take that to Heroku. You can take that to AWS. Anywhere you want, it's going to work the exactly same way. There's not going to be anything specific about it for App Engine. So it's pretty portable. 

BRIAN: OK, I have a follow-up here. You've alluded a couple times to original App Engine, or you said things are different a little now. So for Python people who've been around for a while and what they know of App Engine is when it first came out, or they looked at it six or eight years ago, what's changed? What is new App Engine? Why should I care? 

MARK: Are we in App Engine classic mode? Is it original recipe or something? 

[CRUNCHY FOOD] 

DUSTIN: It's retro App Engine and then futuristic App Engine. And I shouldn't call it retro App Engine. So part of the problem is they're both called App Engine standard. One's a Python 2 runtime, and one's a Python 3 runtime. So the big difference is-- well, one's Python 2 and one's Python 3. That's a huge win for a lot of our users. So just having a Python 3 runtime that's immediately available is really great. And then, yeah, Python 2 App Engine standard, we make a lot of decisions for you. 

We provide only a certain set of system libraries out of the box. It's harder and possible to install other ones. If you want to install your dependencies, like Python dependencies, you have to what's called vendoring them into your application. So that's really copying the source code, including it, bundling it up with your application, and deploying the whole thing at once. The new App Engine runtime is great because you just specify a file called requirements.txt. 

This is a list of packages that are available on the Python Package Index. And then when your App Engine instance gets created. We go to PyPI. We download the packages. We install them into the instance. And then when your application goes run, then it's there. So it removes a whole lot of this developer pain about vendoring things. And it also makes it easier for us to install built distributions and all that stuff that comes along with the idiomatic Python packaging environment. 

BRIAN: Here at Google Cloud, we definitely do a load of containers, especially for workloads in which may not necessarily fit into that web paradigm. Are there any best practices for running containers with Python, or anything people should be aware of? 

DUSTIN: Yeah, it's pretty standard and idiomatic container stuff. So if you're familiar with Docker, using Python with containers is pretty straightforward. One thing about Python that is interesting, it's hard to ship a Python executable. So something that would not require an interpreter or something along with it. So a lot times people deploying Python in containers, they're installing Python and then they're writing a Python app, and those two things are separated. 

There are a lot of third-party approaches to bundling together the runtime and your user code into a single thing. And then you can go install that on a computer user's machine. But if you're using containers-- Ubuntu ships with Python in it. So it's already there. You're just going to make sure you have the right version and then go and write your code. 

BRIAN: OK, I'm convinced. I want to try some Python on GCP. And I'm a Python developer. Where do I get started? 

DUSTIN: I really like this about our documentation right now. So this is a secret-- Cloud Functions under the hood is just a Flask app. So we talked about Flask before. That's a microservice web framework. Under the hood, that's just Flask. So for App Engine, when we show in our documentation and stuff like that, we're just showing you really simple examples with Flask. So if you want to get started, what I would say is go to the Flask documentation, and take their quick start. 

And just try and get a Flask little web application running on your machine. And then see if you can take that and bring it to Google Cloud because it should be really straightforward, right? It should just be you take it. You add a little bit of a command line magic to set up the project and deploy it. And then it should just work. 

So that's what I'd recommend because I think that kind of shows the nice path of take an existing application and bring that to Google Cloud. You don't need to write anything special just for App Engine or just for Cloud Functions. And the other fun thing you can do is you can take your individual endpoints of that function, and then try and break that apart into microservices, and put them on Cloud Functions because then it's just the same thing. 

MARK: And for someone like me who has never really played with Python, where should I go to learn about Python itself? 

DUSTIN: One thing I really love about Python-- the community and the documentation is generally excellent, very well maintained, just super easy to follow usually. I'm definitely biased because I've been looking at the same documentation for a long time. So I would recommend docs on Python.org is all of the documentation about specific Python standard library and runtimes. And then a huge part of Python is the community of libraries that come along with it. 

So when you install Python, you get the Python interpreter and your standard library. And then if you want more, you can come to the Python Package Index and install-- last time, I looked there's like 170,000 different projects. They all do different things. So you can go and install something there. Though all those things have their own documentation generally, it's pretty good. So I would start with a core Python. Maybe take a Python course. There's lots of community supported Python 101 type things. 

BRIAN: So as a longtime Python user, when you were exploring GCP, was there anything that surprised or made you really-- actually surprised either way, but I'm especially if a surprise made you really happy about how people do things on GCP or how things worked? 

DUSTIN: Yeah, so it's actually funny because my background, I spent a lot of time working on Python packaging stuff. So I'm the maintainer of the Python Package Index. I work on some of the packaging tools for installing packages, that kind of thing. And when I got hired to be a developer advocate for Python, in the back of my mind-- everyone has this imposter syndrome-y thing. In the back of my mind, I was like, do I really know that much about-- like, I kind of know a lot about this like packaging thing. 

I don't really know that much about maybe Python in general. And then when I got hired, I realized most people's problems are with packaging and stuff. So I was pleasantly surprised to find that. But that's not what you want to hear is that like, oh, I was surprised that our users were having lots of packaging problems. So I was software consultant before. Had not really used GCP too much. Used some of the other services. I remember when the original App Engine came out and remembered it being weird. And all the things that came along with it. And I didn't really actually even know-- I guess, maybe we hadn't even launched it yet. 

So maybe that's why I didn't know, but I didn't know that we were going to get this cool new Python 3.7 App Engine runtime. And so when I found out that we had that or we're about to launch it, I was like, this is so cool. This is exactly what it should be. I was really happy to see that you can just install dependencies, all that stuff. And that it solves a lot of those packaging problems that I had seen people having. So I guess it shouldn't have surprised me that Google was working on that before I started. But, yeah, it was a pleasant surprise for sure. 

MARK: On that wavelength, what's been the most interesting or, yeah, let's just say interesting thing that you've seen somebody do with Python that's also caught you by surprise? 

DUSTIN: I remember we had a PyCon a couple of years ago-- I don't remember which one it was. This is maybe five years ago, so before the time when we had nice object recognition machine learning algorithms that you can just build a model and plug it into Python. I don't remember what his name. But this fellow had basically-- he was having a problem with squirrels eating the bird seed in his backyard. 

[LAUGHTER] 

So what he had done with Python, he had created this image, video recognition thing that could pick out a squirrel and an image. And he had a water gun on a servo that could aim and squirt some water at the squirrels. 

[ROBOT MOVES] 

[WATER SHOT] 

[CHIPMUNK YELLS] 

And I remember seeing that at the time-- I think it was either a talk or maybe a landing talk at PyCon. And I remember being like, wow! I didn't know you could do all that stuff with Python because that's so much. It's controlling the motors. It's doing the image recognition and all this stuff. 

BRIAN: That's fantastic. 

DUSTIN: As far as technically challenging or interesting things people have done with Python, I mentioned before that there's alternative interpreters for Python. So PyPy is the self-hosted Python interpreter. I have dug into the source code a little bit, and it's mind-boggling. But basically, it's Python hosted on Python. It's Python interpreting other Python code. 

To the point when a language self-hosts itself is pretty interesting. And PyPy is not exactly Python, but the point in which Python started self-hosting itself, I think, was a huge achievement. Really technically interesting to see how you can write Python code to interpret Python code. It goes right down the rabbit hole basically. But, yeah, that's a pretty interesting project as well. 

MARK: Actually you said something interesting before. You said there's a C implementation that's not that fast, and a Python implementation that's way faster? 

DUSTIN: Yeah, you might be surprised to hear that. So I'm not a Python core developer, but I pay attention to what's going on. I think the general feeling about creating and working on the Python interpreter is that they're not really trying to make it super performance optimized. They want it to be bug-free, and they want it to be able to add new features to. Have it be readable for the core and developers. 

And so, yeah, it doesn't receive a whole lot of optimization, which is fine. I think that's totally fine. PyPy is interesting because-- and this is starting to get a little bit outside of what I totally know-- but they do a whole bunch of just-in-time. It kind of looks like compiling Python beforehand, which speeds it up quite significantly. I've seen people say anywhere from 5 to 10 times faster when using PyPy. But comes with a whole bunch of caveats as well, so beware. 

MARK: Are there any particular events that you would recommend that people go to either to learn about Python or get involved with the Python community? 

DUSTIN: Yeah, absolutely. So Python is great. I think Naomi Ceder said at one point at a talk that she was giving. So she's a Python person. Python, come for the language, stay for the community. So Python has a really excellent community. A lot of events that happen. Really like a grassroots type of thing. Not a lot corporate Python events, I think. So the big one that I've been to a lot that I really enjoy is PyCon. PyCon takes place once a year. Usually it doubles up, so it was in Cleveland last year. It'll be in Cleveland in May this year. 

And this year about 3,500 Pythonistas descend on the tiny town of Cleveland at the convention center. It's just really great. It's multiple days of talks. There's tutorials. There's development sprints afterwards. And it's just a great event. It's really community oriented. So Google will be there. We'll have a huge booth. A huge expo hall and other Python shops that are hiring or do interesting things with Python. It's a great event. That said, there are so many really super excellent, small community Python events, too. So I just got back from PyCaribbean, which sounds a little bit like a joke. 

[LAUGHTER] 

MARK: No, it sounds fantastic. 

BRIAN: That sounds awesome. 

DUSTIN: Someone had the brilliant idea of hosting a Python conference in the Caribbean in February. And turns out, it's not just an excuse to go to the Caribbean. It was a really amazing conference. It was in the Dominican Republic this year. They just did such a great job. So interesting to see the community there as well. And it's just as strong as anywhere. And I've traveled all over and seen all sorts of Python communities. And they're just great, strong, very cohesive communities. A lot of people working really hard and trying to mentor each other, elevate each other. 

MARK: So, Dustin, before we let you go, is there anything we haven't managed to ask you that you want to make sure gets on the podcast? Are you going anywhere, doing anything, releasing any content, or just something cool that you want to make sure gets on here? 

DUSTIN: Yeah, so going to be giving a talk at Google Cloud Next. I'm going to talking about porting your code from Python 2 to Python 3, with specific focus on Google Cloud. So that's something that I get a lot of questions about and should be good talk, should be interesting. And it'll be published online afterwards as well. Also be giving to talk at PyCon. 

So it's probably my favorite place to go to talk. So I'll be there. Also, I think I'm going to be in Cleveland for two weeks, just floating around all of the events and talking to people. So really excited to see Python users there and talk to them about Google Cloud. I like talking about just Python, too, so that as well. And mostly just excited about those events. 

MARK: Fantastic. Well, Dustin, thank you so much for coming and hanging out with us on the podcast and telling us all about Python. 

DUSTIN: Thanks, Mark. Thanks, Brian. 

BRIAN: Excellent. Thank you so much, Dustin, for coming and teaching us about Python in general and Python on GCP. Check him out. Follow him on Twitter and all the things. And let's move on to the question of the week, shall we? 

[FUTURISTIC CHIME] 

[MAN OOHS] 

Here we go. My question is, Cloud Functions seem cool. We can connect all of the pieces of the internet together. I think of it as glue for all of the events and web requests that you might make here and there. But are they only good for lightweight stuff or can I do things that are a little more binary-oriented, like images and the like? 

MARK: It's a good thing that you asked me about images actually, Brian. Thank you so much. 

BRIAN: Was that leading enough? 

MARK: We'll have you back on the podcast definitely. So this was cool. I found out about this today. And I was actually excited about it. So Cloud Functions bundles ImageMagick in with the runtime, which is really handy. 

BRIAN: Right, that sounds super cool. What's ImageMagick, though? 

MARK: Oh, ImageMagick, yes. So ImageMagick is a little binary. You probably have it on one of your distros if you're on Linux, or you run Mac, or if you run Windows Subsystem for Linux on Windows. Basically, it's a command line utility for doing just about anything you could ever think of ever doing to images from resizing, cropping, blurring, putting together gifs that are animated. Literally, if you can pretty much think about it, you could probably do it with ImageMagick. 

BRIAN: That sounds like a challenge. 

MARK: Find me something you can't do. There we go. That's a thing. Anyway, so apparently, it gets bundled with Cloud Functions. Just so the binaries there. Usually you can get a nice wrapper library with your language, like Node.js has one, for example. Or if you really want to just run convert. That's basically the command lines and pass it through, but you can do pretty much whatever you want. So we're going to link to a tutorial that's actually talking about joining Cloud Functions with Vision API and ImageMagick to blur offensive images. That'll take you through some of the steps. 

BRIAN: That sounds useful. 

MARK: But, yeah, essentially, ImageMagick lives in the runtime, so either you can use a wrapper or use it directly. So you can basically do whatever you want. So, yeah, if you wanted to build a dynamic image resizing thing for a container or bucket and then spit that out on the other side, you could do that pretty easily, too. There's really no limit in some ways. 

BRIAN: That sounds awesome, OK. I feel challenged. I'm going to have to try to hook that up and see if I can find something that can't be done. 

MARK: Yeah, I'm always more on the other side, where I'm like, I wonder what the most ridiculous thing somebody has done with ImageMagick. Yeah, there's gotta be some really-- 

BRIAN: Tweet at us. I'm curious. 

MARK: Exactly. Excellent. All right, well, I hope that answers the question for you, Brian. 

BRIAN: It did. It's amazingly related to the question I asked. 

MARK: That is good. Awesome. Where are you going? What are you doing? Are you up to anything interesting that you want our listeners to know about? 

BRIAN: Yeah, I think the next big thing for me, I mentioned, interested in all of our computer stuff. And last couple years, I've given a talk about how to decide where to run your code, aimed at developers. We have multiple blue hexagons for running your different things from functions, App Engine, Kubernetes, VMs, the whole deal, right? So I'm going to be doing an updated and much better version of that with some new stuff to talk about at Next. 

MARK: Nice, I will also be at Next doing the podcast. We have a little space on the floor. Brian may show up if I can rope him into it. I just volunteered him right now. 

BRIAN: OK, I'm in. 

MARK: Excellent. I'll be the Game Developers Conference doing a lot of things. There'll be the Google booth. There will be me giving a presentation. There's lots of presentations all day Wednesday. There's all sorts of fun things. So if you can't find anything to do with Google Cloud and GDC and you're really stuck, just hit me up. I'm sure I can direct you to the right place. 

And I will also be presenting in April at East Coast Game Conference, talking about open source and games and also talking about [INAUDIBLE] and all the other fun things. I think that's it. Awesome. Well, Brian, thank you very much for joining me on the podcast this week. 

BRIAN: Likewise. Thank you for having me here, and thank you to everyone who listened all this way. 

MARK: Yeah, and see you all next week. 

BRIAN: See ya. 

[MUSIC PLAYING]