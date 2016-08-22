+++
audioDuration = "00:32:59"
audioFile = "Google.Cloud.Platform.Podcast.Episode.4.mp3"
audioSize = 47718229
categories = ["Cloud Debugger", "Containers", "Compute Engine"]
date = "2015-11-18T22:45:32Z"
description = "In the fourth episode of this podcast, your hosts Francesc and Mark interview Jessie Frazelle, Container Hacker at the Docker Engine team."
draft = false
episodeNumber = 4
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/17bfsrz5efm"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/3tavl2/episode_4_containers_and_dockercon_with_jessie/"
title = "Containers and Dockercon with Jessie Frazelle"

+++
In the fourth episode of this podcast, your hosts
[Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic) interview
[Jessie
Frazelle](https://twitter.com/frazelledazzell),
Container Hacker at the Docker Engine team.
<!--more-->
About Jessie:  
Jessie Frazelle is a Docker core maintainer and she’s know for [running
all the
things](https://www.youtube.com/watch?v=GsLZz8cZCzc) in
a container.

Links:

-   [Cloud Debugger for
    Go](https://cloud.google.com/tools/cloud-debugger/) and
    how to [set it up on Compute
    Engine](https://cloud.google.com/tools/cloud-debugger/setting-up-go-on-compute-engine)
-   [Go data race
    detector](https://golang.org/doc/articles/race_detector.html)
-   [LXC Linux
    Containers](https://linuxcontainers.org/)
-   [Seccomp - secure computing
    mode](https://en.wikipedia.org/wiki/Seccomp)
-   [Bane: apparmour profile
    generator](https://github.com/jfrazelle/bane)
-   [My slow internet vs
    Docker](https://medium.com/google-cloud/my-slow-internet-vs-docker-7678ae1cae72) by
    [Ray
    Tsang](https://twitter.com/saturnism)
-   [Jessie running Steam in a
    container](https://www.youtube.com/watch?v=GsLZz8cZCzc)
-   [Docker Container on the
    Desktop](https://blog.jessfraz.com/post/docker-containers-on-the-desktop/) by
    Jessie
-   Docker issue: [How to use -e DISPLAY flag on
    osx?](https://github.com/docker/docker/issues/8710) 
-   [Honey Pots](https://en.wikipedia.org/wiki/Honeypot_%28computing%29)
-   [Docker
    exec](https://docs.docker.com/engine/reference/commandline/exec/)
-   [Connecting to other Google Cloud
    Services](https://cloud.google.com/compute/docs/authentication?hl%3Den_US)
-   [Google Cloud
    Shell](https://cloud.google.com/cloud-shell/docs/)
-   [DevFest
    CA](http://devfest.ca/)
-   [Demo of Physical Kubernetes Cluster](https://www.youtube.com/watch?v=kT1vmK0r184)

{{< transcript "FRANCESC: Hi, and welcome to the fourth episode of the weekly Google Cloud Platform podcast. I'm Francesc Campoy, and I’m here with my co-host, Mark. Hi, Mark. How are you doing?" >}}
MARK: I'm doing well, Francesc. How are you doing?
FRANCESC: Pretty good, pretty good, trying to fight the jet lag. What about you? Where are you, Mark?
MARK: I'm in San Francisco. It's relatively early on a Saturday morning here in my living room. That's a great place to be.
FRANCESC: That's--yeah, that's a nice place to be. Well, I'm--
MARK: Where are you hiding?
FRANCESC: I'm actually hiding somewhere in the South of France. I'm in--on my way from Paris to Barcelona, where I'll be next week.
MARK: Okay, that sounds really, really fun. It sounds like you're getting your travel on.
FRANCESC: Saturday afternoon podcast recording, fun.
MARK: Fun. Well, that's pretty exciting. So we have a--we have a "Back to the Future" moment. We have an interview that's gonna come up that hasn't even been done yet.
FRANCESC: Yeah, so actually I'm going to Barcelona, as I said. I'm going there for DockerCon where I will be giving a lightning talk, but even more important than that, I will be interviewing Jessie Frazelle, one of the contributors--well, actually, one of the team members of the Docker Engine team, where she's gonna be talking to us--I hope, 'cause I still don't know, but she will be talking to us about containers, what's all the fuss about, and how you get started.
MARK: It sounds like that's gonna be a really interesting interview. I look forward to listening to it.
FRANCESC: I look forward to actually doing that interview.
MARK: Wonderful. So we have, I think, a pretty cool thing of the week this week and definitely something that sits in your wheelhouse 'cause it has to do with Go.
FRANCESC: Yeah, it does.
MARK: We rel--yeah, we released the Google--the Cloud debugger for Go recently.
FRANCESC: Yup, which is, in my opinion, a great thing to have. I could not have named it that 'cause first time I heard about a debugger on production, I was slightly scared about having break points on my--
MARK: Yeah, that does sound scary.
FRANCESC: Yeah.
MARK: "I'm just gonna start my processes."
FRANCESC: Yeah.
MARK: But it doesn't do that.
FRANCESC: It doesn't do that at all. Actually--so basically, what the Cloud debugger does, both for Java and Go, we have it for both languages now, is that for any application that is running on Google Compute Engine, you basically set it up first, and then it will allow you to add break points, but actually, those are not real break points. Those are snapshot points, so--
MARK: Oh, so it, like, takes a picture of what's going on in your system so you can see what's, like, happening with, like, your variables and your call stack and things like that?
FRANCESC: Exactly, so you can add some conditions, so you don't want to take any snapshot--for instance, you can say, "Oh, yeah, I want to take a snapshot of this line, this for loop, when the index variable is 42, and that's it."
MARK: Oh, wow.
FRANCESC: So it does--
MARK: That's actually really powerful.
FRANCESC: Yeah.
MARK: That's great.
FRANCESC: It's really powerful. It will allow you to see what is the value of all the variables in the scope at that point and also the call stack, so you'll be able to understand not only what you're going--what you're doing but also how you got there, so that's pretty powerful, yeah.
MARK: So I haven't played with it, but I'm guessing people are gonna be like, "So is there a performance issue here? Is there something--you know, I'm running this in production. Is that a problem?"
FRANCESC: It's actually not a problem. Taking snapshots will have a very, very tiny impact on your performance, but it's actually good enough that if you have an issue, I could definitely not even think about it. Just go for it. Try it. For sure don't leave it on taking snapshots every second 'cause it's not really useful, but it's something that it's definitely worth the performance cost 'cause also when you--the performance cost is only linked to the point when you actually use it. When you're not using it, you don't have any performance cost, so you're good.
MARK: Yeah, and obviously that performance costs is worth it to solve whatever that issue is that you're having, and if you have to do it on production, it's probably, like, a really tricky issue.
FRANCESC: Exactly. It's basically on the order of magnitude of milliseconds. Like, I don't know if it's, like, around five milliseconds or something like that, which is definitely worth it. Like, there's worse things that could happen to your production, really. So--and it's gonna allow you to basically find the good values for you to test on your code outside of production, and then in there you can actually use an actual debugger and go step by step and understand what's exactly the problem with your code, or even better, write a bunch of unit tests demonstrating that your code is wrong, then fix it and fix your test with that.
MARK: Yeah, no, that sounds--yeah, 'cause there's--sometimes there are just those tricky issues like race conditions that you couldn't bring up in unit tests or are tricky to bring up in unit tests or you didn't even think of, stuff that really--like, it only shows up in production because that's the best place for things to show up, obviously, but these things happen, so it's good to have those sort of tools.
FRANCESC: It's good that you mention race conditions. It's actually something that I've been talking lately about. So when you have race conditions in Go, one of the best things that you can do is use the data race detector, which is as simple as--as simple to use as when you build your code--your binary, add dash-dash-race. That's it. That's everything you need to do, and then it generates a binary that will detect anytime there's a race detect--data race. When that happens it will emit a warning, so with that then you can basically--every single time such a warning appears, you can analyze your logs and file a bug or something like that, so then you can fix it. If you do that, though, you have to be careful 'cause it's not like--it doesn't take snapshots. It's actually much slower, so--
MARK: Oh, it's kind of slow?
FRANCESC: Yeah, it will slow down your process quite a bit even though when there's no races--no data races, which means that it's something that you might want to do as a side server, like, you have a test server that it's getting maybe some shadow traffic from production, and it's actually trying to handle those, and if it takes longer, it's not really a problem 'cause it's not really--it's not impacting the production traffic. It's just getting some of that traffic and, if something goes wrong, files a bug directly. So that's also a very useful technique.
MARK: There you go, one cool Cloud thing, one cool Go thing.
FRANCESC: There you go.
MARK: Extra cool thing.
FRANCESC: Great, so I think that it's probably time to bring Jessie from the future and start talking with her about containers. What do you think?
MARK: Sounds great. Excited to hear it.
FRANCESC: Okay, so we're here with Jessie Frazelle. Hi, Jessie.
JESSIE: Hi.
FRANCESC: So we're here at DockerCon, and so that's the DockerCon EU in Barcelona, the second DockerCon that has happened?
JESSIE: Yes, the second of the European conferences. There's also two that happened in the U.S, so.
FRANCESC: Great. So we've been here. It is the second day, and as far as I've seen, Jessie is not only one known person in the Docker community in San Francisco but pretty much everywhere else, so I wanted to know a little bit more about what you do at Docker to be so famous.
JESSIE: I'm not famous. I am a core maintainer, so I think that, actually, that has a lot to do with it. It's a open source project, and it gets a lot of visibility, and I also am contributing a lot of code for it. Most recently have been working on adding seccomp to Docker itself, which a lot of people have wanted, and I helped try to get in the username space pull request, which was also heavily requested, so yeah. We work a lot on Go and open source in general.
FRANCESC: Nice. I saw that there was some statistics about the number of pull requests that you get per week. How many are those?
JESSIE: We get around 200 per week.
FRANCESC: My God.
JESSIE: And actually, we have, like, even cooler stats. My coworker Arno wrote this really cool, like, Go tool that will get all the open source stats, and I found out that I am the person who closes, not merges, the most pull requests.
FRANCESC: Oh, so maybe that's why you're famous. That's probably maybe not such a good thing after all. So--and how long you been working at Docker?
JESSIE: A little bit over a year now.
FRANCESC: Nice.
JESSIE: I started in September, but my first contribution was last June--or, like, the June before that, so yeah. That's how I, like, became a--
FRANCESC: That's great. So how did you start--how did you get started with containers? Like, containers have been something really important, like, the new, hot thing in the tech industry for quite a while. Why did you get interested on it?
JESSIE: So the startup I was working at before Docker, we actually used LXC, and LXC is--it works, but it's just kind of painful to use, so we switched to Docker at 0.5, which was kind of rough but still better than LXC, so then I started getting into the project. I started watching the repo, and one thing led to another, and here I am.
FRANCESC: Nice. That's very cool. So you started using Docker a little bit because you were already using containers?
JESSIE: Yeah.
FRANCESC: LXC is kind of like containers, just not as easy to use, basically.
JESSIE: Totally.
FRANCESC: Why--why could someone start using containers as a company? Like, how--what is the benefit of running containers rather than just everything directly on bare metal?
JESSIE: So it allows, like, your infrastructure to be easily transported from dev into production because you can run it on your Mac. You can run it anywhere, and actually, in the first keynote at DockerCon, they showed, like, a new developer starting on their first day, all they have to spin up on their laptop is Docker itself instead of having to get, like, the whole company stack, like, Python, Ruby, all that crap, and--
FRANCESC: Yeah, that's very nice.
JESSIE: Yeah.
FRANCESC: Yeah, it's basically getting people--like, they develop an environment inside of the container also.
JESSIE: Yeah.
FRANCESC: That's really cool. So I think that rather than spending time talking about why people should move to containers, 'cause I--at this point I'm pretty sure that, like, most of people actually think that that's a good idea. I would like to talk about how do you do that? So, like, if you were to move a company from, like, traditional stack to containers, what could be the first step?
JESSIE: Yeah, so I would say it would be to start, you know, taking apart your, like, monolithic things into the database running that in a container by itself, whatever proxy you have running that in a container, so just really separating out the microservices and then starting to play around with maybe the Docker command line and then maybe playing around with the new, like, platform as a service tools that--all these different things that have come to, like, fruition.
FRANCESC: Yeah, we had--last week we had an interview with Brian Dorsey. He works for the Kubernetes team, and it was quite interesting because he was basically talking about, yeah, like, once you go through that step of going from one monolithic app to you have all of a sudden a bunch of containers and microservices and everything, all of a sudden there's a new set of problems that set in, so basically, like, that's when you're gonna be talking about, like, Swarm or Kubernetes or Mesos or whatever stack that you want to use.
JESSIE: Yeah, and there's so many to choose from now. It's like the world is at your disposal.
FRANCESC: Yeah, that's really cool. It's kind of scary. I think that at some point we should have an episode talking about what to do. Like, what are the options there? I think it's quite a interesting topic. So you mentioned at the beginning of the talk something that--at the beginning of the interview you mentioned seccomp. Security is quite a big deal. I've seen people putting private keys inside of containers and on public repos. That's kind of dangerous.
JESSIE: Yeah.
FRANCESC: Tell us a little bit about what do you think that we should always take care of regarding security with containers?
JESSIE: Yeah, so what I’m working on right now is--the first phase is actually seccomp itself, which is allow or denying certain syscalls. You can actually even trace, et cetera, but the first phase is actually going to be, like, this kind of not-so-easy-to-use config but not so complex as something as AppArmor or something like that, but the second phase of that is actually one config to rule all security profiles, and then it will have different backends, like, using seccomp or AppArmor or SELinux labels, so you get the ability to, like, log on write on any file or deny files being written to, allow, like, certain executables to run, like, ptrace, stuff like that.
FRANCESC: Nice. So basically the idea is that the same way we have--like, with OS2 you have scopes, and you allow people to do one thing or the other. It's kind of the same thing but inside of Linux, right?
JESSIE: Yeah, totally. It was actually designed and inspired by the Apple APIs and also Android's APIs for security scopes.
FRANCESC: Cool. Yeah, I've seen--I saw your demo, your lightning talk at--not Devoxx, but the Docker meetup in Belgium, right? That was--that was really interesting. I wonder if that was recorded. If it was recorded, I'll try to put the link to that on the show notes. Cool, so I'm gonna say it again, but you're kind of famous for one specific thing, which is running everything in a container. Like, I've seen you running, like, normal things like Chrome, but also I've seen you even launching games from Steam on a container, which is pretty awesome, and, like, it's really amazing, the fact that you're able to do that. People tend to say--it's like, "Oh, yeah, that's too hard," but then you make it look easy, so I wanted to ask you what is the next crazy thing you're gonna do, or if there's no crazy thing that you can disclose, what is one crazy thing that you've tried and totally failed?
JESSIE: So my coworker Arno and I gave a talk yesterday, and we had this crazy idea of fitting a Docker image onto a 1.44-megabyte floppy disk, and it was all going to go so perfectly. I ordered this floppy disk-to-USB converter, and I, like, translated the page from Spanish so that I could make sure that it ran on Linux, and I, like, plugged it in when we got it, and it was just, like, totally borked, like back in the olden days when you would put in your floppy disk and you just knew it wasn't working right? It was, like, the exact same sound, so we were like, "Well, [bleep]," but we did create an image that was small enough to fit on one, and, like, the coolest part about it, actually, was that the binary that was in the image was a Go binary built statically so we could build from scratch, and the binary itself was, like, five megabytes, which is way too big. It's never gonna fit, but then when you put it in the Docker image itself and you do a Docker save, it will create a tarball, but that tarball isn't compressed, so actually, what we did was untar it, then retar it with XZ and, like, nine compression, the maximum, and it was 1.3 megabytes.
FRANCESC: Nice. So, okay, that's actually very interesting. Can you actually do that in general? Like, once you have a Docker image, untar it and then tar it with compression, and the Docker daemon will be able to handle it like if it was a normal image?
JESSIE: Yeah, so you can actually--so that XZ compressed image, I could have Docker loaded it back in, so it actually would be really nice if on Docker save we could pass a flag like, "Use this compression level," like, either Gzip, XZ, and, like, what sort of maximum.
FRANCESC: Yeah, that'd be really nice 'cause nowadays one of the problems that I have is if I try to run Docker on my machine and I have, like, a hotel WiFi, a conference WiFi, it's kind of a pain 'cause images tend to be quite big, right? So that could maybe help with that.
JESSIE: Yeah, totally. That would be a huge help.
FRANCESC: That is pretty awesome. The other option, of course, is using Docker Machine, which, yeah, there's actually--we'll put on the links, one of my coworkers, Ray T, wrote an--wrote a blog post about how to use Docker with a conference hotel--with a conference WiFi.
JESSIE: Oh, my God, that's so good.
FRANCESC: Yeah, so basically, just start a instance somewhere, like in Google Cloud Platform, and then you connect to that, and it works really, really well. That's what I do all the time now.
JESSIE: That's perfect.
FRANCESC: Okay, so you mentioned something that didn't work, the floppy disk. Tell us about something that you think it's cool that you've seen lately.
JESSIE: Cool, yeah, so actually, the stuff with X Server that I do is all just mounting locally my X11 socket, but you can also actually do this entirely remote on a server, so say you have Wireshark, which is--has, like, a GUI, running on the server. You can have a remote VNC connection and actually show it locally on your local instance, so I think that that's kind of neat, and also, like, the fact that you can--like, the difference between VMs and containers is sharing namespaces, so the fact that you can have a Wireshark container connected to a different container sharing the same network namespace, you can actually look at all the packets from the other container without exposing everything from your host to the Wireshark container itself, so just the fact that Docker allows you to share, like, net namespaces, PID namespaces, it's, like, super helpful in terms of debugging, and the whole, like, remote VNC X11 thing is also helpful in terms of debugging.
FRANCESC: So there's two really cool things in there. One is the fact that--so what you're saying is that you have your containers that is running somewhere, and it's not aware of Wireshark or anything, just running there. You want to debug it, and without modifying that container, you are able to start a new container that will be sniffing those packets with Wireshark?
JESSIE: Yeah, so you can actually take the network namespace from the container that you want to debug and then run the next container, let's say your Wireshark container or, like, maybe even a strace container in that network namespace, and if it was strace, you could actually run it in the PID namespace of the other container, which is, like, really--it's fascinating.
FRANCESC: That's really powerful.
JESSIE: Yeah.
FRANCESC: Yeah, that's really powerful. So basically you can connect to that container with that contain--the container that you want to investigate doesn't need to know anything. You don't need to restart it or anything, just connect there.
JESSIE: Yeah, so it, like, annihilates the whole need to, like, exec in, install other [bleep], and then do what you need to do. You don’t need to exec anymore. You can be sure that your debugging tools won't modify the original container.
FRANCESC: Nice.
JESSIE: And yeah.
FRANCESC: And so that was one of the first--one of the cool things. The other cool thing that that implies is that you can be running graphical UIs, GUIs on a server and access them like if they were local applications on your laptop.
JESSIE: Yeah.
FRANCESC: Right? So that's through X Server, which means that on Linux it works really well. What about Mac?
JESSIE: Yeah, Mac would be interesting. I think it would probably have to use maybe the same hack that is used when people try to run my stuff on their Macs, and it involves, like, a socat into, like, an X11 Mac instance, and then it fires into the VM. I mean, I'm not really sure on the technical details, but it's something like magic.
FRANCESC: That's--that sounds quite complicated. Is there any blockbuster something that you could point us to?
JESSIE: Yeah, there's actually an issue that is closed now, but on Docker itself where someone is mentioning my GUI apps, and I think it's, like, titled, like, "Mac OSX X11," and the person who figured it out posted all the details, and actually, I'll get emails still on this issue of people thanking the guy who figured it out.
FRANCESC: Nice.
JESSIE: So it must still work, and it must still be legit.
FRANCESC: Okay, so I'll check it out, and I'll add that link also to the show notes. That sounds really interesting.
JESSIE: Nice.
FRANCESC: So do you think it would be then doable to have something like you have a pretty small computer like a--like a tiny microcomputer, even--a Raspberry Pi, maybe. Like, imagine that you have a Raspberry Pi, and you want to run a quite powerful application that requires CPU. Could you be doing something where, like, you just car--you just have your X11 server running on the Raspberry Pi and then the rest of computation is actually sent to some container running somewhere else, and, like, you can have--like, in Google Cloud Platform you can have, like, 32 cores if you want to, so you could be running, like, a very, very powerful application, and it could look like it's running on the Raspberry Pi?
JESSIE: Yeah, totally. I mean, you could use VNC and do that, and yeah, that would actually be a really cool idea, especially in terms of the whole conference WiFi thing.
FRANCESC: Yeah.
JESSIE: You just have the most minimal stuff locally, and then everything else is just hitting a remote instance.
FRANCESC: Yeah, I will definitely try that. That sounds, actually, really interesting. Cool. So to finish, I wanted to talk a little bit more about your relationship with the Docker community, so you said that you started working as a--well, you started contributing before you were an employee. What is your relationship with--like, what is the relationship of Docker with other contributors? How many do you have? How do you handle them? Like, other than closing their PRs without merging those, what kind of community--how do you manage that community, basically?
JESSIE: Yeah, so a lot of our communication is over IRC. We have a channel just for maintainers, which is where we take care of, like, more, like, administrative tasks, and then there's the Docker dev channel, which is where, like, we have the bots talking about open PRs. We have maintainers coming in and asking us, like, how they should implement something or contributors being like, "I hit this while trying to build Docker." It's very, like, only developing to Dockers, which is really cool, and then also, like, we have a ton of bots on the repo that help us out in terms of just the sheer volume of pull requests we get. Like, even--we were thinking of looking into what Kubernetes' bot is because it looked really cool, but yeah. I mean, it's actually really cool, especially the Docker core team in--that is employed by Docker as well because every single one of us was contributing to the project before we worked there, so as much as people say, like, you know, Docker is this enterprise company, like, we are not. If anything, everyone else at Docker thinks of us as, like, the hipster kids, so, like, we're very--also very opinionated ourselves, and it's nice to know that, like, we all came from the community first, so if anything, like, my love for the project will always exceed anything else. I want the project to be good, and I want it to be something I want to use personally, and it is something that I use personally, so I mean, I think it's great.
FRANCESC: Yeah, you use it every day with every single application you run.
JESSIE: Yeah.
FRANCESC: Cool. So how many--just to have an idea, how many maintainers, how many contributors do you have?
JESSIE: Oh, yeah, contributors, there's, like, in the thousands. It's actually gotten so big that GitHub won't show them all if you go on that page.
FRANCESC: Oh, wow, okay.
JESSIE: It will only show, like, the top whatever they show, so there's, yeah, a sh--ton. Maintainers, there's maintainers of the various, like, subsets of Docker itself, but for the Docker Engine I would say there's definitely, like, five from Docker the company, and then there's about, like, ten external from various companies like IBM, Red Hat, and then also just individuals themselves, which is really cool, and students at universities, even, are maintainers.
FRANCESC: Nice. That's very nice.
JESSIE: Yeah.
FRANCESC: Okay, so to finish the interview, I had two questions which is about the coolest things that you've seen, so what is the coolest talk or what's the coolest thing you've learned during DockerCon?
JESSIE: Oh, man.
FRANCESC: This DockerCon.
JESSIE: So this talk that I was just at, actually, this guy was talking about how they run honeypots in containers on their servers, and I was just like, "That's a really cool concept."
FRANCESC: For the listeners that don't know what a honeypot is, 'cause it's not a pot with honey, what is a honeypot?
JESSIE: It's, like--it's put there to kind of try to catch hackers as, like, a, "Hey, come. This might be open for you," but he didn't really go into details as to what exactly theirs were doing, but it was just interesting that they one, run them in containers, which is awesome, but two, they just have them spread out on their infrastructure everywhere.
FRANCESC: Nice. So it's basically a way of monitoring if someone is actually attacking?
JESSIE: Yeah.
FRANCESC: That's really--that's really smart. I really like it. And the other cool thing is what is the coolest feature of Docker for you? Like, what's the thing that you love the most?
JESSIE: I mean, I love all features, but Docker exec, like, for some reason, it, like, means something personally to me because it was, like, my first week working at Docker, and granted, I had contributed to the project before, but it was a feature that I really wanted, but two, I got assigned to it to try to help it through the process, and it was actually Vish from Google who wrote the PR itself, and then I got to merge it, so.
FRANCESC: Nice.
JESSIE: It was super exciting and fun, and it was, like, two days before my birthday.
FRANCESC: It's a birthday present.
JESSIE: Yeah.
FRANCESC: That's a very geeky birthday present, really.
JESSIE: It's so good.
FRANCESC: Nice. Nice. Well, thank you so much for taking your time to talk with us, and see you somewhere else in a different--in a different conference.
JESSIE: Yeah, thanks.
FRANCESC: Thank you.
MARK: So thank you very much to you, Francesc, for setting up the interview and Jessie for joining us. I'm sure when I listen to the episode in the future, it will be amazing. I know both of you are amazing.
FRANCESC: Yeah, thank you, thank you, Jessie, for taking the time off a very, very busy week at DockerCon to have a chat with us.
MARK: Yeah. So we have a great question of the week from one our previous listeners and onetime answer providers, a gentleman by the name of Terrence, who's a technical solutions engineer here at Google. He asks a good question, like, a debugging-style question, which I quite like, which is sort of this situation where it's like, "Why can't my Google Compute Engine instance connect to a particular API or resource like CloudSQL or BigQuery or Cloud Datastore?" and it could be something that I think has probably bitten me a couple of times, so I think it's an excellent question.
FRANCESC: Yeah, yeah, I've seen that before, and I've heard people asking those questions before, so I think it's a great question of the week. So the answer is actually quite simple. It's security. By default, when you query an instance on Compute Engine, the instance will not have access to all the things that you could do, so we have--it will have access to some of the resources that we also call scopes, so for instance, when you create it, it will have read-only access to Google Cloud Storage but won't be able to write. So what do you do if you want--if you want that instance to be able to write?
MARK: So the easiest way is if you're creating an instance through the development con--like, through the console, so the web console. If you go to a tab, when you create your instance, called access and security, you'll see all the levels of API access you have there, and as you said, yeah, you can see that, you know, CloudSQL is none. BigQuery's none by default. Storage is read-only because security, right? Like, you want to keep things locked down and only open up the things that you want to, which is great, and that's a really easy way of saying, "Oh, yeah, when I created that instance before, maybe I forgot to, like, turn this on. Maybe I should go have a look." It's a very quick--you know, it's sort of a very common gotcha.
FRANCESC: Yup.
MARK: Though I do like the fact that now there is a button there that says, "Allow API access to all Google Cloud services." That's pretty handy.
FRANCESC: That's pretty handy, but I could not advise using it as a in-general basis. I think it's very good if you want to have an instance that you want to test that your code is actually correct and it's just an access problem or if you're actually using that instance to do development, it's a great idea, but it's definitely not a good security policy to allow access to all the scopes.
MARK: Yeah, exactly. I think it's a great troubleshooting feature, you know, like, let's make sure that this isn't something that's the problem with what's going on, you know, and then I can go back and say, "Okay, let's scale these security measures back and make sure everything is the way it should be."
FRANCESC: Yeah, something interesting that maybe some of our users will know is when you are in the screen that you were talking about before, when you create that [inaudible], when you create a new instance, there's actually, at the bottom, if I remember correctly, something like equivalent REST API or something like that, so I--or an equivalent GCloud command, so that would actually show you how to do the same thing through either the REST API, so it's gonna be a JSON object, or with a GCloud command, so that can be quite useful if what you want to do is create that instance with the scope that you need from other--from a place other than the console itself.
MARK: Oh, that's nice. I'm actually looking at that now. That's--I didn't quite realize that was there. I think I probably knew, but I'd forgotten, but that's, like, a nice, like, sort of interactive documentation. I quite like that.
FRANCESC: It's a very useful thing 'cause sometimes I don't remember exactly--especially in the JSON formats, like, "Oh, where does it go?" or, "What is the parameter in GCloud to create this thing?" So it's very, very handy, yeah.
MARK: That's very, very, cool. I like that a lot. So yeah, if you--if you happen to run into a situation where you think you've got your code right but for whatever reason you can't access CloudSQL or something like that from Compute Engine, make sure to go check your scopes, see if you have access that way because you may not.
FRANCESC: Yup. Very good. So to wrap up, I would like to know what are you up to next? Where are you gonna be go--doing?
MARK: What am I gonna be doing? So when this episode actually comes out I will be at Clojure Conj this time. I think you and I are doing very similar talks in just different places. We're talking about wrapping developer tooling in Docker containers, which is kind of funny.
FRANCESC: Yeah, it's definitely a hot topic lately.
MARK: Yeah, contain--look, you just got to a container around it, and then you're fine. That's pretty much what I've come down to. But no, that's great, and then December I will be at DevFest in Vancouver December 12th and 13th. If you're in the area, come on down. There'll be several of us. I'll be [inaudible], so it should be a good time.
FRANCESC: That sounds like it's lots of fun. So on my side, I will actually--by the time this episode comes up, I will still be in Barcelona. That'll be the last day of DockerCon, so that's where I'm heading on--heading up tomorrow. I'm going to Barcelona for DockerCon, and that's pretty much it, but I actually just wanted to mention also that I just came back from Devoxx where one of our colleagues--so Devoxx in Belgium. One of our colleagues gave an amazing demonstration of Kubernetes, which we talked about last week.
MARK: Oh, yeah, I heard about this.
FRANCESC: Yeah, on a cluster of Raspberry Pis, which is an amazing demonstration. You can basically unplug cables and see how pods get reallocated and so on. It's an amazing demo, so I will say just if you have a minute, go check it out.
MARK: Okay, great. We'll have to put the video in the show notes. It sounds fantastic. Well, thank you once again, Francesc, for joining me for recording. Much appreciated.
FRANCESC: Well, thank you, Mark, for waking up so early. I also appreciate it, and it was a great pleasure talking to you, so see you all next week.
MARK: See you then.
{{< /transcript >}}
