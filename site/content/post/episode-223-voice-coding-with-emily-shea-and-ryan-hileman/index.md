+++
audioDuration = "00:49:21"
audioFile = "Google.Cloud.Platform.Podcast.Episode.223.mp3"
audioSize = 50492654
categories = ["Voice Coding", "Voice Recognition", "Accessibility"]
date = "2020-06-17"
description = "Mark Mirchandani is back this week as he and co-host Brian Dorsey learn all about voice coding with some great guests!"
draft = false
episodeNumber = 223
hosts = ["Brian Dorsey", "Mark Mirchandani"]
title = "Voice Coding with Emily Shea and Ryan Hileman"
image="/post/episode-223-voice-coding-with-emily-shea-and-ryan-hileman/images/hero/hero-EP-223.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/hav71r/episode_223_voice_coding_with_emily_shea_and_ryan/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Mark Mirchandani](https://twitter.com/markmirch) is back this week as he and co-host [Brian Dorsey](https://twitter.com/briandorsey) learn all about voice coding with some great guests! [Emily Shea](https://twitter.com/yomilly), senior software engineer at Fastly and user of Talon Voice, and [Ryan Hileman](https://twitter.com/lunixbochs), developer of Talon Voice, tell us about Repetitive Strain Injury and how it led to the design and use of Talon Voice. Talon allows not only straight voice input but includes eye tracking, noise recognition, and user customization to perform complex actions like moving windows, selecting text, and user-specific workflow customizations without touching any hardware.

Emily describes her experiences with Talon, including the process to get started and how she looked past voice recognition stereotypes to find how useful the product could be. She demos Talon for us, explaining how the alphabet system works. Ryan types a sentence using his voice then explains the process of developing the alphabet and other parts of Talon. Later, Ryan and Emily tell us how they write code using Talon and the logistics of using the software at home or in the office. 

We end the show talking about how Talon and voice recognition software have helped people with and without debilitating injuries and given hope to those spending hours on computers every day. Emily stresses the importance of adding accessibility to websites to accommodate Talon users and others with disabilities.

<!--more-->

##### Emily Shea

[Emily](https://twitter.com/yomilly) is a Senior Software Engineer at Fastly, where she works on the platform for delivering core Edge Cloud configurations. Because of a Repetitive Strain Injury, she develops using Talon’s speech recognition.

##### Ryan Hileman

[Ryan](https://twitter.com/lunixbochs) was a software engineer for over a decade and in 2017 quit his job due to hand pain. He has since worked full time on Talon with a mission of enabling anyone to be equally productive for any and all tasks on a computer without their hands.

##### Cool things of the week

* How to find—and use—your GKE logs with Cloud Logging [blog](https://cloud.google.com/blog/products/management-tools/finding-your-gke-logs)
     * The Stack Doctor [videos](https://www.youtube.com/watch?v=lwBBAvPxO9c&list=PLIivdWyY5sqLuKKx4pcdEAkJY1HevjVVm)
* Using Recommenders to keep your cloud running optimally [blog](https://cloud.google.com/blog/products/management-tools/using-recommenders-keep-your-cloud-running-optimally)

##### Interview

* Talon Voice [site](https://talonvoice.com)
* Talon Slack [site](https://talonvoice.com/chat)
* Talon Patreon [site](https://www.patreon.com/lunixbochs)
* Hammerspoon [site](https://www.hammerspoon.org)
* AutoHotkey [site](https://www.autohotkey.com)
* Whale Quench [site](https://whalequench.club)
* The Accessibility Project [site](https://a11yproject.com/)
* Web Content Accessibility Guidelines [site](https://www.w3.org/WAI/WCAG21/quickref/)
* Perl Conference [video](https://www.youtube.com/watch?v=Mz3JeYfBTcY)
* Demo from The Perl Conf [video](https://youtu.be/X6rsA0Svh2M)
* Strange Loop [video](https://www.youtube.com/watch?v=YKuRkGkf5HU&t=40s)
* Demo from Strange Loop [video](https://youtu.be/RA0idiJkZOg)
* Ryan’s demo [video](https://www.youtube.com/watch?v=Kjab4fxkkXA)
* Street Fighter [video](https://www.youtube.com/watch?v=pf-jkbIPovs)

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode 223 of the weekly Google Cloud Platform Podcast. As always, I'm Mark Mirchandani, and I'm here with my colleague, Brian Dorsey." >}}

I'm super, super glad for the "GCP Podcast" to be back. We took a couple of weeks off to take some time, and listen, and learn. But thankfully we are back. And we have a super, super-great interview today. Brian, can you tell us who our interview is with. 

BRIAN: Yeah. So we have Ryan and Emily from Talon Voice. And let's just give a quick teaser of what it sounds like to talk to a computer. Here's an Alphabet. 

RYAN: (RECITING QUICKLY) Air bat cap drum each find gust harp sit jury krunch look made near odd pit quench red sun trap urge vest whale plex yank zip. 

[CHEERING] 

MARK: And I can still hear all of that-- well, I assume it was 26 words. But to me it sounded like one word. But it's going to be a really, really great conversation with Ryan and Emily, talking about all the things that Talon Voice can do and some of those scenarios around why you might want to use it. It's such a good conversation. Definitely stay tuned for that. 

So before we jump into that, though, why don't we go ahead and do our Cool Things of the Week. 

BRIAN: OK, so mine is cool in the sense of what's logging, and logging in Kubernetes. So I think a lot of people are going to be like, how is that cool? But you can't really understand big systems without logging, in my opinion. And I think one of the many things that makes Kubernetes like on Google Cloud really valuable is that logging is automatically integrated with the rest of things going on Google Cloud. 

So there's a nice article linked to on how to use the Google Kubernetes engine logs with cloud logging, which is our kind of unified logging setup. And it just goes through how to set it up, which mostly, use the defaults, and then here's how to turn it on if you did anything else. And what that gives you is the logs from the actual containers you're running, logs from Kubernetes, logs from any of the other cloud services you're using, and your own application logs, if you want, all in the same place, that you can run queries against, you can look at them you can actually derive metrics and draw graphs from the contents of those logs, and you can use them for troubleshooting. So I think it's really worth checking out. Take a look. 

MARK: Yeah, I think there's some great resources on how to use that. Because it can be very daunting at first. There's a lot of stuff going on with the cloud operation suite, I think, is the new name for all the stuff that used to be Stackdriver, but all centralized within the console now. So check out some of the resources there. There's some documentation. 

And of course I think we've had Yuri Grinshteyn, the Stack Doctor, on before to talk about a few things. He does a couple of videos on YouTube as well. So hopefully a lot of great resources to get started. 

And like you said, Kubernetes, complicated. It is what it is. It's going to be something that you have to put a lot of different thought processes into place for how do I actually collect the information I want, where do I organize it. So that is super cool. 

On my Cool Thing of the Week, I'm going to talk about Recommender Hub. And so this is a cool thing that just recently launched. It's still in beta. But you can go to the console, you can go to a project, and you can see a list of recommendations. And for people who have used Compute Engine, I think the recommendations for resizing has been around for a while. 

And it kind of says, oh, hey, you know, it doesn't look like you're using this virtual machine to its full capacity. Why don't you scale it down? Or why don't you scale it up if you've kind of been bursting usage on it. Well, that's been expanded to a bunch of other areas now, including security recommendations, including firewall recommendations. And there's a couple of other products that are being added in over time. 

And so we've talked about a couple of things before. We had that great conversation with Justin and [? Patik ?] about their cost optimization side. And a lot of the Recommenders come out there. 

So long story short, check out the Recommender Hub. It's just a great way to see tips and things that you can do to better secure and to save a little bit on costs for your project. 

BRIAN: That's awesome. It's really easy to kind of lose track of all the things that are going on in a project. You know, even when it's something you're working on by yourself, it's kind of like past me, present me, future me kind of thing. I don't know if you've heard that before. And definitely, when you're working in a team, a lot of things can happen. And you can kind of forget about stuff, or not notice that something could be turned down or turn up. So that's super cool. 

MARK: Absolutely. Well, with those cool things out of the way, why don't we go ahead and jump right into our conversation with Ryan and Emily. 

[MUSIC PLAYINIG] 

Emily and Ryan, thank you so much for joining us. To get started, can you tell us who you are and what you do. 

EMILY: Sure. I guess I'll go first. My name is Emily. I'm a senior software engineer at Fastly. I work on a platform that delivers core edge [INAUDIBLE] configurations. And because of a repetitive strain injury I started using voice tech to do my coding work about a year ago-ish. 

RYAN: Hi, my name is Ryan. I'm historically a software engineer, and I have a background in computer security as well. And around three years ago, 2017, I developed repetitive strain injury in both hands pretty severely, and had to quit my job. And now I work on Talon full-time to help people who have similar injuries or other motor disabilities. 

MARK: So I feel like it's kind of in the name, but what is repetitive strain injury? 

EMILY: Repetitive strain injury is pain felt in your muscles, nerves, and tendons caused by repetitive or overuse. In our industry, it's often because of keyboard and mouse use. 

RYAN: Yeah, in completely different terms, a lot of the muscles in our hands are very small, and are not meant to be moving in the exact same way over and over again. So if you do that, the muscle gets damaged in some way or the tendons get damaged in some way, just because they're going through the exact same motion over a long period of time. 

When we were much more primal and were running around in the jungle, we're not moving one finger back and forth in the same way. But now, if you play "Cookie Clicker," you can do a motion 10,000 times that you never could have done in history. 

MARK: I have broken several mice to "Cookie Clicker." So I don't know that repetitive-- and now I'm suddenly worried. I'm like, oh no, all these idle games I've been playing. Because they usually start off with a lot of clicking. That's probably not good. And I'm sure this is something that affects a lot of people, like you said, in a field that we have. A lot of people are spending eight, 10, 12, 16 hours a day in front of a screen, looking at a mouse and keyboard, and working with those. And there's obviously a ton of ergonomic things that have been created. But different things work for different people. I think it's great for us to talk about what is the solution you've come up with here. 

RYAN: Talon is not just one thing. I have experience in a lot of different computer science fields, and usability, and stuff like that. And I am not satisfied with just solving voice, and just talking to my computer, and that being enough. Because as I was using it really early on, I ended up mapping hundreds of commands to do stuff that I could have just clicked in the program with a mouse, trivially. 

So really early on, in Talon, I added eye tracking. And then, with eye tracking, you need a way to click. So I added noise recognition, where you can do a popping sound, or a hissing sound, or click-and-drag and stuff, without the latency of a speech recognition engine. And for anyone more familiar with the accessibility or automation space, there are programs like Hammerspoon and AutoHotkey that script applications on your systems so you can do a really, really complex action off of a single keystroke or something like that. And talon is sort of the fusion of all of these input technologies with the ability to be really complex stuff on the output, like drag windows around, and interact with pretty much anything, down to video games even. 

BRIAN: So is it fair to say it's basically the glue, the suite of things around everything from getting voice into actually automating applications? Is that fair? 

RYAN: Yeah. If you think about an operating system, where you have display layers and applications that are running, and input subsystems, you have audio input, and keyboard input, and stuff like that, talon has a lot of the same components, where it has a lot of inputs coming in from humans or from applications to it, it has a lot of information coming into it. And it internally makes some sense of it, and also users can configure it to do things-- to do pretty much any actions that are possible based on those inputs. 

BRIAN: Got it. So Emily, how did you end up finding this? 

EMILY: When I started experiencing a repetitive strain injury in 2017, I first did the ergo evaluation, and I went to see the doctor. I was trying to do all of those things to see if I can fix it. And it turns out debugging your body is very difficult. You can't just attach a debugger. And a lot of these injuries are cumulative and chronic. And they take a lot of time to untangle and figure out what's going on. And for about 9 months, I was just having a really terrible time trying to type, and get what I could done, and also deal with the injury, and it was very painful. 

My doctors pretty much told me, here, take four Aleve a day. So I was taking four Aleve a day. That's what they told me to do. And even while taking that much Aleve a day, and doing all the stretches, and with my desk at all the ergo angles and all that, I was still only able to type about three hours a day, with breaks in between. And it sort of took the joy out of everything. I wasn't really enjoying any of that. 

And so what I was doing at that point was already very difficult. And I had this perception of, well, you know, voice, from what I understand, what I know about it-- which was next to nothing-- seems like it probably wouldn't work that well. But it might be better than what I'm doing, which is terrible, so let's check it out. 

And what I found, when I started looking into it, it was a much different landscape than what I expected. I expected it to be clunky, and difficult to use, and not understand me. And pretty much like a no-op, like it wasn't going to be usable. 

But I found Talon through a former co-worker of mine. And I was surprised that it worked so well. And I was like, wait, why don't people know about this? You know, like-- [CHUCKLES] so I talked to my manager at Fastly. And I was like, hey, I want to try this. I want to see if this will help me out. Because I had a pretty severe typing budget. I like to think of it as a typing budget. When you have RSI, I can only type this much in a day. And if I've got 30 minutes, you have to be very choosy about what you're doing. You have a very limited amount of time. 

But anything I can do by voice is sort of free of that limitation, free of that budget. So it seemed like it would really kind of unlock me from what I was restricted from in using my computer. So I spent a couple of weeks with it, and I was like, oh, this actually works pretty well. This is great. I don't have to touch the keyboard if I don't want to. There's some ramp-up time in figuring out how to customize it for your workflow and whatnot. But compared to what I was trying to do at the time, it was much easier. And it was probably a career-saver for me. 

BRIAN: So if you had to summarize this kind of what you thought voice recognition was compared to what it is now in a couple sentences, what would you say there? 

EMILY: Sure. So I think there's one particular YouTube video that I think a lot of people have watched. And that's what they think voice recognition for coding is. I demoed this in some of the talks I've gave. And it's someone trying to use Windows Vista to write Perl. And it's just hilariously bad. 

And so I had this perception it was something like that. It's just going to be awful. But it was nothing like that. And I think that video has done a lot of disservice in convincing a whole bunch of engineers that it's not a viable option. 

RYAN: I hate that video. People have quoted me that video and said, your software can't work. 

EMILY: Yep. 

RYAN: I have been told by so many people that what I do isn't actually possible, or that there's no way to be productive, or there's no way to type anywhere near fast with your voice as you can with a keyboard. There are people who have strongly-ingrained opinions that this cannot work and this does not work, despite hundreds of people using it already. 

BRIAN: OK, I know this is a podcast, but let's try to prove that it works right now. Would one of you be willing to demo what it actually is like to talk to the computer and do something real right now? 

RYAN: What, sort of demo do you want? 

BRIAN: I don't know. Typing, moving some windows around-- like something you would normally do, just matter of course, all day, every day. Write me an email or something. 

EMILY: Sure. So I guess what might make sense is walking through what some of the basic things you do on your computer and what would the translation of the voice commands be. So for example, your letter keys are like your basic building block of everything you're going to do. So for the alphabet keys, we have an alphabet that, for each letter key, there's a word associated with it. Now, if we tried to pronounce the letters as you pronounce them, A-B-C-D, there's a lot of the letters that would sound the same in how they're pronounced. 

RYAN: It's too ambiguous. 

EMILY: Yeah, it's ambiguous-- B-C-D-E-G-P-V-Z, or whatever. Which one, you know? Everyone probably has been on the phone. And you're trying to spell something. And it's N as in Nancy. And you have to disambiguate it that way. And it's really clunky and annoying. 

So we have an Alphabet we use. It's not the NATO phonetic alphabet, because a lot of those words are too long. That alphabet what work, in that all the words are phonetically diverse enough. But they're too long. So we have our own alphabet. 

RYAN: Like, some of them are three syllables. 

EMILY: Yes. 

RYAN: On this note-- I can interrupt you. and I'm looking at our prep document. And it says, "can you show us an example?" I can spell that. So-- 

BRIAN: OK. 

RYAN: Cap air near, space, yank odd urge, space, sun harp odd whale, space, urge sun, space, air near, space, each plex air made pit look each, question mark, effectively. I can just type. That is a fundamental like a primitive. 

Maybe you think voice is like, "hey, Siri, go get me an apple," or something like that. But when you're interacting with a super keyboard-driven world, you have to use the terminal, or type things into web pages or whatever. And there's little tiny gaps and glue you need between typing in a URL. And you need to type a word that's like one letter added to an English word. You can't do that with an existing system without dipping into the ambiguous alphabet. 

BRIAN: So this alphabet is kind of the glue of the difference between what we normally have kind of-- because that just sounded almost like another language to me, from the fluid spoken English to tapping keys. 

RYAN: Yeah. And I can basically tap-- I can do 58 words a minute with this Alphabet, which is insane. Like, that's a low-grade touch typist secretary is around 60 words a minute. 

BRIAN: How long does it take to get there from zero? Because that didn't sound like keys to me. 

RYAN: I demoed that within a couple of months of designing it. So it wasn't even-- this hadn't been around. I designed that alphabet. And I was learning it as I designed it. And not just that, I was learning a lot of alphabets, because I was trying to design the right alphabet. And within a few months, I demoed 58 words a minute. And within a week or two, I was able to directly use my existing knowledge of Vim and directly control them with that alphabet. So that alphabet and numbers, and the ability to do really basic text formatting like saying a few words and putting underscores between them, that was all I needed to bootstrap Talon. I actually developed a lot of Talon in Talon after building the alphabet and the basic speech tech. 

BRIAN: OK, so Emily, you talked-- so we've got these hit-buttons alphabet stuff-- 

EMILY: Yes. 

BRIAN: --and then I guess other-- like you're a senior software engineer. So there's IDE code editing, right? 

RYAN: Yep. 

EMILY: Yes. 

BRIAN: What does that sound like? [CHUCKLES] 

RYAN: So some examples you also mentioned were like windows snapping and stuff like that. So I can say, snap window right, command look-- to select like the address bar on the browser-- so snap window right, command look, say Google dot say com, Enter, would drop me in Google.com without really a lot of commands involved. So "say" just types the word you just said. Like that would move the browser around, and put me in the address bar, and go to a web page. 

EMILY: Right. And there are voice commands for all of the modifier keys too, so Control, Control, Command, Command-- and you can combine them. So if you've got your alphabet, you know your keyboard shortcuts, and you know your modifier keys, you can already do most things you want to be doing on the keyboard. And that's a big milestone there when you're learning this stuff. 

RYAN: Got it. To use your keyboard budget. 

EMILY: Yeah. 

RYAN: Yeah. There is basically a set of scripts in Talon that implements all of the keys that you would find on a US English keyboard, and combines them with the modifier keys-- you have numbers, modifiers, the basic symbols, and stuff like that. You can read through that file and memorize the couple of commands and the alphabet from that file, and technically you would be able to use your computer as any keyboard user can use their computer, just at whatever speed you can say the voice stuff. 

MARK: Right, I mean, we're talking about a wide variety of things that you can do with your voice from the beginning, which, like you mentioned, Brian, is just interacting with your computer without having to type. And that's where it makes sense to have the single-letter commands, or say, Google say dot com. That made a lot of sense. 

But then when you go into the world of coding, it's a very different beast. And I can't use Vim with a keyboard. So using it with my voice, to a person like myself, seems way out there. It's really interesting that you've also built this-- I mean, you just mentioned it there. You built Talon with Talon. 

What does this sound like for actual coding? And what's the difference? Because I could see a lot of people having a lot of reservations about, well, I certainly don't want to code one letter at a time, because that would end up taking many, many times longer to code something. So what does it look like to code using Talon? 

RYAN: I have a few demos of this that I'm sure will be linked in the podcast. But let's say Python-- I'm not looking at anything, I'm just going to be doing this out of memory. But I could say something like, state def dunder init, args, say, self spamma-- which inserts a comma, space. And then I can say an argument. So state def dunder init args, say, self, spamma arg, say, arg 1 spamma, say, arg 2. 

And then I'm right before the parentheses at the end of the line. So I can say, go right, colon, Enter. And now I'm in the function body, and I've just defined a function. 

MARK: And so, Emily, this is some of the stuff that you also talked about in the talks at PerlCon, right? 

EMILY: Yes. So I have some live demos in all of my talks. I did recorded demos, and then I have some live demos. So I work mostly in Perl. So I get a lot of questions like, how do you write Perl with that? Isn't there a lot of symbols and such? 

So mine would sound similar to Ryan's except there would be more dollar and [CHUCKLES] underscore and percentt or whatever mixed in that. 

RYAN: What's your double-colon command? 

EMILY: Oh, yes. So I have a specific formatter. So we have formatters you can give the format or say a string of text and it will format like you want it. 

RYAN: Like camel case, or underscores, or whatever. 

EMILY: Yes. Snake case. And I've got one to spit out the Perl package format with the two colons in between. And so if I say pack title mojolicious light, it'll spit out the mojolicious colon, colon, light, with the capital letters on those, which is handy. 

MARK: It sounded like that was something you built specifically in Talon for this custom command. Because like you said, that's a very Perl-specific thing. 

RYAN: Yeah, I don't write any Perl day to day. So when I was building my example scripts, I didn't write anything specifically for Perl. 

MARK: And you wouldn't be able to-- I mean, there's some world out there where someone's going to be trying to code COBOL with their voice. And I'm guessing that's not-- 

RYAN: That's actually pretty easy. It's English words. I don't know if you've seen a lot of COBOL. But basically you would need to-- honestly I would say, detect, if you're in a COBOL file, and just uppercase all of your words. And then you can just mostly talk, and insert some numbers. Because it's like capital words-- or it's all-caps words. 

MARK: It's been a long time since I've seen COBOL. I think I've mostly forgotten what it looks like. But I mean, that's the thing, is, like, you're not going to be able to capture every single possible scenario out there. The idea is that people can kind of build what works for them. 

RYAN: Yeah, there's a language-- like APL is just symbols. And some of them I don't think are even on your keyboard. So you have to press a Greek lambda something, like in the middle of a programming language. So you would need to build at some point-- Talon doesn't come with a Greek lambda letter, so you'd have to build those in. There are people who do law tech in Talon. And they have really cool things that output not the exact Greek letter, but they output the slashed commands for arbitrary formatting. And it seems to work pretty well for them. 

BRIAN: So it sounds like there's this kind of like initial vocabulary, and this kind of co-evolution of vocabulary based on what you do. Is that kind of how it feels to use this over time? 

EMILY: Yes. So you end up learning the basic building blocks, and then you start customizing your talon scripts for your own workflow. Maybe I need a module-- like I needed to build a module for Sublime, because I use Sublime. And there wasn't one built at the time. So I spent a lot of time customizing that for me. 

RYAN: Emily was a pretty early adopter. 

EMILY: Yes. [CHUCKLES] Yeah, so you customize it for the workflow you have. I have some very specific commands that are just nice for me. For deploying software, I can just tell it, do this. I don't have to type it. I can just say, like, deploy code base, and it'll do the things instead of me having to type that all out specifically. 

RYAN: Yeah. There's enough customization that you can open a terminal, go to the right directory, and do a make command, and push, and everything you need to do in one script. You can do that really succinctly in the configuration. 

BRIAN: Got it. So I really want people to hear what this sounds like for real. 

MARK: Yeah. We'll make sure that doesn't include the full videos to all the different-- because there's a couple of different examples. My favorite is the "Street Fighter" one-- 

EMILY: [CHUCKLES] 

MARK: --just because it's such an interesting application. Definitely check them all out, though, because they do cover this range right-- like how do you use your computer, how do you play "Street Fighter," how do you actually do coding, which, for software engineers and for many other people, they're sitting down and coding for, like I said, many, many hours a day. And you're talking about revamping their entire work style with, in this case, voice. 

I do want to talk a little bit more about some of the other stuff that Talon has. But before we do that, Emily, what is it like to use this in an office? Because when you're actually working in a room full of a bunch of people, I think there's a stereotype that a lot of programmers probably have their headsets on, and they're listening to loud music, and they're typing away at the keyboard. That may be true for some people and not true for others. But what does it look like when you're in the middle of an office and you're actually using voice commands to do your coding? 

EMILY: So introducing a microphone to an open office environment, it's got some challenges. So there's two different problems. There is I, as someone with a microphone, don't want background noise getting into my microphone and messing with my workflow. Some people might be also concerned that I generate noise pollution, and that might be distracting to them. 

When I first started, I was much more concerned about generating the noise pollution. I didn't want people to, like-- I didn't want to bother them. Over time, I've decided I don't think it's as big of a problem as I thought it was at that time. 

But to learn, I didn't want to be self-conscious that I was generating this noise and whatnot. So I found a corner of the office that I got to sort of take over and work in a semi-private place. 

And I also started working from home. Fastly's got a really great work-remote culture. And so that was really easy. 

Over time, I became more comfortable going to the office, sitting in the open office, and using my microphone in the open office. I've got a really nice mic that doesn't pick up a lot of background noise. So that's pretty OK. And a lot of my co-workers, if anything, they're just kind of interested in what I'm doing, and they're kind of curious. But I don't know that I've really annoyed anyone too much with it. But I do now work from home a lot more. 

My perspective, from talking to a lot of Talon users, and generally being active in the space, I have heard many people, when they're getting started, are self-conscious about generating this noise pollution. I have heard zero people-- I have zero examples of anyone who has said a co-worker has complained about the noise. And I have zero examples of anyone who has ever complained, in a way that I observed directly, about the noise. So nobody has said, hey, these voice coding users are so annoying around me. It's not something that I've seen yet. 

And maybe if we were trying to speak up, to talk to someone on the other end of a phone call, like a loud salesperson or something like that, it would be different. But we're kind of talking in a measured tone. We just want the computer to understand us. We're talking pretty fluidly. We're issuing a lot of commands. There's not a lot of variance. So it's something that your brain can actually just tune out. It's like a babbling brook in the background. 

BRIAN: So it's fairly steady-state. 

RYAN: It's almost like-- depending on your voice, it could even be kind of ASMR for your co-workers around you to hear someone just kind of calmly talking to their computer. 

BRIAN: So you might be actually at a lower-than-normal speaking voice in terms of volume. 

EMILY: Yes. The few times that I have tried this in the office, oftentimes people having conversation around me were much louder than what I was doing. Because I'm speaking directly, facing towards my monitor, towards my laptop. So it's not projecting too far. 

There's a thing you do have to watch out for, though, which is if you are self-conscious about generating the noise, you might talk more quietly. And if you talk too quietly you can harm your vocal cords more than if you were just talking in a normal voice. So I have to be very careful about that, to make sure that I'm not being self-conscious, and then trying to adjust my volume down. 

BRIAN: Thanks for sharing that. I didn't know that. 

RYAN: The right speaking voice is to project a little bit, like you would in theater. But you can actually project really quietly. Like I'm still using the diaphragm and everything to speak right now, but my voice got a lot quieter. So that's fine too. Just don't whisper. 

BRIAN: Got it. And do you find most people using headsets, or kind of mics on booms, or-- 

RYAN: I think it's mostly, I'd say, like 2/3 headsets, a little bit of mics on booms, and there's a few people using something called a steno mask, which you'd mount, kind of like your podcast mic, in front of your face, and get really close to it. But it actually wraps around your face and blocks sound in both directions. And it looks a little bit weird, and it changes your voice a little bit. I wouldn't use it in a meeting so much with my co-workers, because it makes you sound a little nasally. But the computer doesn't care what you sound like. 

And it is effective at blocking noise both in and out of the microphone. So if you're in a really noisy environment or if your co-workers think you're too loud, it basically reduces it to lower than if you kind of went like [HUMMING] through your hand, with your hand over your mouth. It's a very, very low sound, and only some bassy tones get through. So it almost completely isolates. It's made for court reporters, or stenographers, or whatever, people who are talking during a court environment where it needs to be pretty quiet. 

MARK: Yeah, I think that's another interesting thing that I'd love to talk more about. Because obviously a lot of this does come down to-- well, there's probably some questions about the effectiveness of an open office floor plan. And we won't touch on those here. But for people who are working with their computers and coding, this is a solution that can work to give your computer commands, as we've talked about. 

But Ryan, earlier you mentioned that you could also do some eye tracking and some other accessible features to help people maybe look at other forms of interaction. Can you share some examples of that? 

RYAN: Sure. So the main thing we do with eye tracking is there is an eye and head-tracking-based mouse cursor. Some context-- eye tracking has precision around one inch or one centimeter, depending on the size of your screen and the quality of the algorithms filtering your eye movements. More context-- eyes are a little bit jittery. If you look at the raw output from the sensor, there's like a kind of big circle, and there's little tiny specks in like a centimeter-wide circle on the screen, of where it thinks you're looking. And so it's jumping around. Your eyes can't actually hold still. There are smooth muscles that are-- or there are muscles that are holding them and forcing them to stay still, which is actually a vibration. 

So because of the way that eyes are sort of unstable, and have about a centimeter of accuracy, you can't actually look at just one pixel. So if you want to click on just one pixel on your screen, there are a lot of elements on your screen that are maybe 10 pixels wide, like the little x in the corner of a window on Mac. And if you want to click on that, but we can only hit a centimeter, the way that that's solved in the basic mouse control mode of Talon is when you look in that area, it puts your mouse cursor over there, and then you can sort of gently move your head to go a few pixels in each direction. 

So there's a smooth mouse acceleration curve as you move your head around. So you can look somewhere while you're kind of moving your head, and just get sort of a natural "mouse ends up in the area you want," and you move your head naturally to where you want to click. And then, at that point, you'd use the pop sound or the hiss sound, or just say, click, if you're using it with speech recognition, to actually interact with something. 

MARK: Yeah, it's been fascinating to hear about. Have you worked with any other large companies? Have there been any really great examples of people implementing this, other than, of course, kind of what we've already seen, with being able to interact with a screen? 

RYAN: Do you mean eye tracking in general? 

MARK: Well, I guess more so on the general usage of Talon Voice as a whole. Like is it mostly just independent people who are saying, hey, I want to use this because I have these needs, or I see a void? 

And I think it might be a good call-out here for people to get up, and stretch, and move your arms around. I don't know. I feel like this is just a general PSA. It probably won't-- can't hurt. 

But I'm curious to hear if there's been any like big examples of companies looking at trying to solve this problem at a bigger level, or trying to solve it for more domain-specific areas. 

RYAN: I have heard of a pretty major corporation doing across-the-board enforced RSI breaks. Basically every hour you have to take five minutes away from your keyboard or something like that. And there's software on your computer that will pop up warnings, or show warnings somewhere, and end up locking you out of your computer for some amount of time if you're typing too long in a row. Because that's actually one of the major causes of this, is-- I'm not a doctor and not a scientist, but just running your arms for eight hours straight, and running your hands for eight hours straight without any cooldown time at all is not good for you. 

And that's something I did. I can talk more about the health and things that I think contributed to why I have chronic RSI if you want me to. 

MARK: Well, and that really plays in line with what you were saying, Emily, about the kind of budget you have. And once you start to feel some of those effects, you really do have to put a window on yourself, and say, I have to prioritize my health. This is about all I can get. 

And so it's awesome to see solutions like this, that really do help you expand out there, and get back into a cycle where you can do more of this work. I really loved what you said about-- well, I guess I shouldn't say I loved it. But I thought it was really interesting the way you said it kind of removed the fun of doing work like this, because it now becomes so challenging. 

RYAN: One of the first very moving messages I've gotten from a user was I think Emily tweeted that it significantly changed her life very early on in the process of using it. And she basically couldn't do what she wanted to do, and she couldn't use her computer, and it hurt, and it was awful. And she actually had hope again. And it wasn't just theoretical hope. She actually had implemented hope, and felt good about how things were going. 

EMILY: Oh, absolutely. I mean, I started associating our codebases with pain. [CHUCKLES] That's not a good thing. [CHUCKLES] I mean, not in a normal, oh, code is pain, software is painful, but in the body pain, I physically feel this. And it was really difficult for a long time. 

And I do remember the day where I finally got Talon to a point where I was like, this is going to work. I don't have to touch the keyboard. I don't have to touch the mouse. 

And I think I sent Ryan a DM. And I was like, I'm hopeful for the first time since this thing started. 

And mine, by the way, my RSI symptoms, it's not like it started small and then ramped up, and I ignored it, and I ignored it. It was sudden and it was severe, in a matter of like a day or two. And then I was unable to use my keyboard and mouse. I was pretty severely impaired. So I didn't have a lot of heads up. 

And my understanding about that is you might be doing damage, and your body will compensate for a while, and you may not notice that you're doing this damage until, all of a sudden, it can't compensate anymore. And then, all of a sudden, you're feeling all the things you've done to it. 

RYAN: I had a really similar experience. I felt pain, like, twice throughout the last two decades for a day or two. And I fixed my typing, or did something different with my ergonomics, and the pain went away. But then when I actually got chronic RSI, I had a really, really gentle throbbing in one of my arms or something like that after using my computer. And then a few months later-- I went to the doctor. They prescribed Aleve. I did that. I got physical therapy and some stuff like that. It was a really basic throbbing that point. 

And about a year later, I was still taking Aleve, and I could still type, to the point where I was getting new kinds of pain that the painkillers weren't killing. I would get weird-- it felt like my bones were hurting, or there were really sharp things in there that didn't really make any sense that was filtering through what my body was compensating and what the painkillers were compensating for. And when I came off of that, I realized that I had a lot of problems. And what I had been doing typing-- I couldn't actually just keep typing. I couldn't keep going to work. I couldn't keep doing what I was doing. I couldn't subject my body to the pain it took to earn money. 

And somewhere around that point, I pushed my work really hard. I started taking lots of leave, and FMLA, and getting physical therapy, and just spent months not typing. And I got to a point where, even when I was trying to come back to work, the existing solutions for voice coding and stuff just weren't there. I was trying to use Dragon. I was trying to use an older Mac piece of software that's not really maintained anymore. And I couldn't interact with the stuff on my computer. There were specialized tools for computer security-- I couldn't use them. There was just a massive gap, and I couldn't actually do my work, even after I spent months trying. My work was very generous. 

And at that point, I told my work, I will not type for you. And they still tried to accommodate that. They were like, OK, you're smart. You can do work. We'll try to find some work that works for you, and tried to work with me. 

And it got to a point where I was like, I will not type for any reason except to further my ability to use the computer without typing. And that was when I quit my job and bootstrapped Talon within a few weeks, and started using voice to build Talon. 

BRIAN: Got it. So if there's anybody listening who's in a similar situation, or if they're just curious and want to try Talon, what would you recommend for getting started? 

RYAN: Right now, the public version of Talon, it's Mac-only, and only works up to MacOS Mojave, because Apple changed their speech recognition engine, and broke it. 

So there is a private, early-access beta of Talon that you have to sign up on the Patreon to get. Or you can message me if you're in any kind of financial situation where you can't do that. I'm perfectly happy to accommodate. And at that point, you will sit down and have a system that other people have put commands into that you can edit the commands, and you can see the commands that are available. And it's not super, super polished at this point. It's more like a programmer's workflow than it is something you'd find boxed software on the shelf. I'm getting there. It's a lot of work. 

So you'd learn the alphabet. There's actually some Getting Started guides. You'd learn the alphabet, you'd learn the key commands, you'd learn how to navigate around some windows. You'd consider whether or not you want to buy an eye tracker, because I think those are around $230 right now. And you'd just start trying to build your workflows back up. 

The other thing, based on the context of what everything we were just saying, is Talon isn't necessarily your first option. Your first option is to type less. Your second option is to change your keyboards and ergonomics and stuff. And then you should be going to a doctor, and exercising, and that sort of thing. And Talon's at the bottom of this list. You shouldn't be just jumping to Talon, unless you're totally healthy, in which case, definitely start using voice stuff before you need it. That's perfect. 

I have a user who's been using Talon since about the beginning of Talon, so about three years, and has been using voice control software for about 20 years, mixed with typing. He says it's to pretty much prevent them from getting any kind of RSI. And it's worked. He doesn't actually have any symptoms. And he splits it about 50-50. 

So he does a lot of programming by voice, and he just uses the keyboard some too. So he's gone through the spectrum of other voice control software in the '90s, and switched voice control software year by year. Every few years, something new would come out. And he has some really cool stories about-- there was a voice control program in the mid-'90s, I think, that would match a single word. And you had to tell it the word. You had to, like, train it on that word. She you had to say, cow, cow. And it would learn how you said cow. And that was your command. And that was all you got. And you got a couple of them. All the way up to the modern tech we have now. 

BRIAN: That's amazing. So Emily, you talked about this "getting to hope." So from first contact, and kind of like setting things up, to feeling that this is real, do you have recommendations for folks on kind of hanging in there for that part, or how to get from trying voice to being confident that this is going to really work? 

EMILY: Sure. I think I will echo what Ryan said, and make sure you've done all of the other things first. So my approach to this was always take the least disruptive adjustment first, and then move to the next when that doesn't work. 

So I changed my keyboard, I changed my mice. OK, that didn't help. OK, then do one more thing-- standing desk. And then you keep doing that. At some point, you may arrive at voice. And I think one thing that really helped was having the community of folks that hang out in the Talon Slack. Because it's sort of daunting at first-- you know, what microphone do I get? If you have any trouble getting it set up on your computer, or learning how to adjust your mic, or make sure all your audio settings are right. Having folks in there who've done this, and they're generally very friendly. And you can pop in with any of your questions. 

Ryan's available a lot. [CHUCKLES] I don't know how he's so available in there, but you know-- 

RYAN: 3:00 in the morning, what's going on? 

EMILY: Yeah. [CHUCKLES] Yeah, it's amazing. I don't know. [CHUCKLES] 

But that was a really helpful resource for me, just having other people in there doing the same thing that could share tips. They share scripts. People are like, oh, I built this thing. Oh, great. I'm going to take that. I'm going to incorporate it in my tool set. 

RYAN: There's about 1,000 very nice and very knowledgeable people in there who have been through the same thing as you. 

EMILY: Yes. 

BRIAN: Awesome. 

RYAN: Or very similar situations, if you're having any kind of health-related RSI. 

BRIAN: So check out Talon, check out the Slack, and take things incrementally. Awesome. 

So I think we need to wrap things up fairly soon. Is there anything we missed, or you would like to mention, last things you'd like to make sure people know about before we wrap up? 

RYAN: I guess something about getting started, about the incremental stuff, something I've spent a lot of time in in Talon and the technical foundations was making sure that you could go in, and you could edit your commands, and they would take effect immediately. So you can change anything-- you can basically self-edit your keyboard or your computer. As you're using it, and you want a command that does something, you can go and do that in a few seconds. And you can use it immediately. 

And that sort of incremental workflow, where it's just really polished and works really, really quickly and easily, is something that I think helped people like Emily, even in the really early days of Talon, get started and get building their custom Perl or custom Sublime text workflows that weren't there in the beginning. 

EMILY: Absolutely. Being able to iterate quickly, and just pop up in Sublime text, edit a command, save it, it's available, was really nice to have that be so quick and easy to do. 

There's one more thing that I would like to cover, and that would be that I want to take this opportunity to push the importance of building software that's accessible. So one of the biggest challenges I have-- so I don't use eye tracking. I just have never incorporated it in my workflow. I like to be able to share my screen to the 4K TV, and then sit on a yoga mat, and not even be anywhere near my keyboard. So for me, I prefer it that way. 

But the biggest challenges I have are interacting with web apps or other bits of software that we're not built with accessibility in mind. And I want to, for all the developers out there, you may not think you'll be in this position today, but build the software that you would want if you were in this situation and needed to use it. So I want to just use this as my call to action. 

BRIAN: Awesome. 

RYAN: It's not that hard to add accessibility to websites, like being able to make sure that you can click on a button with a script, and it's labeled, and you're not using JavaScript click handlers on images to handle all of your buttons on your site makes it so we can actually directly interact with them. And there are some great accessibility standards that break this down. And there are services that will check your website and tell you whether things are good or not. 

EMILY: Right. So some of the bigger issues I run into are spans or divs that should be buttons or links, and so I can't click to them, I can't tab to them. I try to tab through a page, and there's no indication of where I am in the page. So you're just tabbing. You're like, where am I? I don't know. Should I click Enter and find out? It's not fun. And a lot of these things can be easily fixed. 

The company I'm at currently, at Fastly, I was there before I started having issues. And now I've been going through this, and I still work there. 

And so I started having to use our software with voice. And so there were things that I found. And I did an internal tech talk, and sort of showed off, here, I'm using our stuff with voice. Here's what it looks like. And then, by the way, hey, can we fix these things? It would make my life easier. 

And the biggest thing we got out of that was there was a lot of low-hanging fruit that was very easily fixed. And the developers were like, this was even more reason that we should have done this long time ago, or that we should pay attention to these things. Because a lot of it's easily fixed. If you use semantic HTML as it's meant to be used, a lot of the accessibility features come for free. 

RYAN: Something I had that I can add-- so as gently as possible, RSI doesn't discriminate. There is no immunity to RSI. It can happen after decades of use. I've known people who have gotten it within a few weeks of starting as a programmer. So just treating yourself well, being patient with it, and using the resources available, not freaking out. There are options. There are hundreds of people who have been through it, and are productive, and are not hurting daily. If you're hurting daily or anything like that, or you've started hurting, there are solutions. And you shouldn't be crippled by any of this mentally. There is an answer, and stuff works. 

EMILY: I would have appreciated knowing that this was an option when I first was injured. I wouldn't have been so paranoid that my career was going to be over. I guess my only regret is that whale quench never came into play here. 

RYAN: Oh, no. 

EMILY: [CHUCKLES] 

BRIAN: What is that? 

EMILY: So whale quench is-- 

BRIAN: Oh, right. [CHUCKLES] 

EMILY: Yeah, people find this hilarious. I don't know how-- it's just kind of organic, became a thing. So the word whale and the word, quench, are the commands for w and q. So when you're exiting Vim, whale quench. 

BRIAN: Key, whale quench. 

EMILY: Yes. And I recorded these demos that I showed internally. And people started laughing when I said the whale quench. And to me, I've just been spewing this nonsense in my microphone for a while, and it's all just words stuff. But everyone's laughing. And I'm like, oh, I guess it's kind of funny. [CHUCKLES] 

So I started including it in my public talks. And everybody always laughs. It's like a whale quench thing. And so I've got stickers, and I've got all kinds of-- 

RYAN: A website. 

EMILY: Yep, whalequench.club. 

BRIAN: Oh, that's awesome. 

[CHUCKLES] 

And you've included a couple links that we've got for the show notes here. Thank you very much for that explicit call-out. We should all make things a lot better. And thank you both for coming on. This is really eye-opening. And I encourage everybody to give it a try. 

RYAN: Yeah, thank you. 

EMILY: Yeah, thanks for having us. 

MARK: Once again, thanks so much to Ryan and Emily. Such a great story to hear. I mean, Ryan, obviously creating this based on his needs, and then Emily working at Fastly, and having such a great supportive team of managers and people who encouraged her to go down this path and try it out. And it sounded like it was a very no-friction effort for her. 

Hopefully people got a lot out of that. I found it to be so fascinating. And I was super, super excited to talk to them for the longest time. 

BRIAN: Yeah, in fact, after we finish the recording, we kept talking because it was so interesting. And one of the things that Emily mentioned during that conversation which she asked us to kind of highlight is that this can really happen to anyone. In some cases, it comes on very quick. And for those of us who are making a living via typing, that is a kind of terrifying situation. 

So it's really useful, I think, to know that these things exist, and maybe even to try it out and play with it a little bit before anything happens, and kind of keep a little more balance in our lives, of not maybe eight hours straight typing all the time. 

MARK: Absolutely. And even if you don't have any challenges now, it's probably still good to take the steps to be-- to use a nice char where you can, and try to set yourself up for an environment where it's going to be successful. Because you don't want to put a lot of strain on yourself. 

Or if you just want to do voice-activated "Street Fighter." I mean, the range of things you can do is limitless. 

BRIAN: Yeah, I'm very tempted to go just kind of install and set it all up. I'm working from home right now, so there's less of an office going on. And see how far I can get. 

MARK: We super, super encourage people to check out the links, a couple of videos that Ryan and Emily put together that show it off in a couple of different scenarios. And then check out the Talon Voice page. 

BRIAN: And one of the things that Emily said that I think is really worth repeating is that using these tools really helps you see the edges in the accessibility of the tools you're already using. And so any of those you see and help fix, or report bugs that can get fixed, helps everybody. That helps the whole world have more access to stuff. So it's worth it from that point as well.

[MUSIC PLAYING] 

RYAN: (RECITING QUICKLY) Red sun trap urge vest whale plex yank zip. 

MARK: I got whale and zip, and that was about it. 

BRIAN: That's awesome. 

EMILY: [CHUCKLES]
 No newline at end of file
