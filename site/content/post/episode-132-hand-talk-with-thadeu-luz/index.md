+++
audioDuration = "00:32:45"
audioFile = "Google.Cloud.Platform.Podcast.Episode.132.mp3"
audioSize = 47561703 
categories = ["Brazilian Sign Language", "LIBRAS", "Firebase", "Cloud Functions", "ASL"]
date = "2018-06-20"
description = "Thadeu Luz shares how the free Hand Talk education application translates spoken and written Portuguese to Brazilian Sign Language (LIBRAS)."
draft = false
episodeNumber = 132
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Hand Talk with Thadeu Luz"
image="/images/post/hand-talk-3.png"
linked = true
googlePlusLink = "https://plus.google.com/u/0/b/117267610519909886476/+Gcppodcast/posts/UPfmRRDrD62"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/8skbgz/episode_132_hand_talk_with_thadeu_luz/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

[Thadeu Luz](https://twitter.com/thadeuluz) from Hand Talk shares with [Melanie](https://twitter.com/nyghtowl) and [Mark](https://twitter.com/Neurotic) how the free Hand Talk education application translates and interprets spoken and written Portuguese into Brazilian Sign Language (aka LIBRAS or BSL). The application uses an animated avatar Hugo to deliver the signs through gestures and facial expressions and its built off of a statistical machine translation system and Firebase. Future plans include expanding into other languages with a priority on ASL and they welcome support.    

<!--more-->

##### Thadeu Luz

[Thadeu Luz](https://twitter.com/thadeuluz) is entrepreneur, data scientist and full-stack engineer with a background in 3D Animation, Video Compositing and Architecture. In early 2018 I have joined the Google Developers Experts program as a Firebase Expert. He's CPO and founder of Hand Talk, an internationally decorated company that produces automatic sign language interpretation with the help of a friendly virtual 3D Character named Hugo.

##### Cool things of the week

* Our video for NEXT [video](https://twitter.com/googlecloud/status/1007659366663589888)
* First research center in Ghana [blog](https://www.blog.google/topics/google-africa/google-ai-ghana/)
* GCP in Finland [blog](https://cloudplatform.googleblog.com/2018/06/GCP-arrives-in-the-Nordics-with-a-new-region-in-Finland.html) 
* AI Adventures BigQuery and Open Datasets [video](https://towardsdatascience.com/bigquery-public-datasets-936e1c50e6bc)
* Dockercon and value of childcare at conferences [tweet](]https://twitter.com/texasmichelle/status/1007475279646810112)
* What is going on in Unite Berlin 2018 [blog](https://blogs.unity3d.com/2018/06/12/unite-berlin-2018-what-to-expect-next-week/) & Powering up Conncected Game Development [blog](https://blog.google/topics/google-cloud/powering-up-connected-game-development-through-our-alliance-with-unity/)

##### Interview

* Hand Talk [site](https://www.handtalk.me/) & [video](https://www.youtube.com/watch?v=GtCh8cw5P4Y)
* Firebase Hosting [site](https://firebase.google.com/products/hosting/) [docs](https://firebase.google.com/docs/hosting/)
* Cloud Functions for Firebase [site](https://firebase.google.com/products/functions/) [docs](https://firebase.google.com/docs/functions/)
* Cloud Functions for Firebase Sample Library [github](https://github.com/firebase/functions-samples)
* Launchpad Studio [site](https://developers.google.com/programs/launchpad/studio/) and [podcast](https://www.gcppodcast.com/post/episode-108-lauchpad-studio-with-malika-cantor-and-peter-norvig/)
* TensorFlow.js [site](https://js.tensorflow.org/)
* ML Kit for Firebase [site](https://firebase.google.com/docs/ml-kit/) & podcast coming next week
* Serve Dynamic Content with Cloud Functions [docs](https://firebase.google.com/docs/hosting/functions)
* Google Translate Community [site](https://translate.google.com/community)
* Cloud Machine Learning Engine [docs](https://cloud.google.com/ml-engine/docs/)

<div style="text-align: center">
  <a href="https://www.handtalk.me/"><img src="/images/post/hand-talk-3.png" style="margin: auto; max-width: 50%;"></a>
  <p style="font-size:0.8em">Hand Talk<p>
</div>

##### Question of the week

[What DOES a Go developer need to know about GCP?](https://medium.com/@enocom/what-a-go-developer-needs-to-know-about-google-cloud-platform-e046c9e11abf) 


##### Where can you find us next?

Mark is speaking at the [Online Kubernetes Community Meeting](https://docs.google.com/document/d/1VQDIAB0OqiSjIHI8AWMvSdceWhnz56jNpZrLs6o7NJY/) on the 21st of June, at 10am Pacific.


Melanie is speaking at a joint [WiMLDS](http://wimlds.org) and [PyLadies](http://www.pyladies.com) event ["Paths to Data Science"](https://www.meetup.com/Bay-Area-Women-in-Machine-Learning-and-Data-Science/events/250456485/) on June 26th and Stanford AI4ALL on June 28th.

{{< transcript "[MUSIC PLAYING] MARK: Hi, and welcome to episode number 132 of the weekly Google Cloud Platform podcast. I'm Mark Mandel, and I'm here with my colleague, Melanie Warwick. Melanie, how are you doing today?" >}}

MELANIE: I'm doing good, Mark. How are you? 

MARK: I'm very, very well. 

MELANIE: Good. So this week, Mark, we are going to be talking with Thadeu from Hand Talk, out of Brazil. We talk about the fact that they've built a product that translates written and spoken Portuguese into Brazilian sign language, which is really cool. 

MARK: Yeah, it's really cool. 

MELANIE: I definitely very much enjoyed that interview. But as always, before we get into the interview, we will talk about the cool things of the week, as well as at the end of the interview, we will talk about our question of the week. And one question we have, which is coming from one of our colleagues, is what does a Go developer need to know about GCP? 

MARK: What do they need to know? 

MELANIE: I don't know. 

MARK: I don't know. What do they need to know? 

MELANIE: I don't know. Is it something special? We will find out. So stay tuned. But before we get into all of that, as always, cool things of the week-- and one of the cool things of the week-- 

MARK: [LAUGHS] 

MELANIE: We were advertising for Next. 

MARK: Yes, we were. 

MELANIE: We were. We were videotaped in mid-ending of a podcast, sort of. And yeah, we've got a funny little video that's out there that you can check out. 

MARK: Three questions with a Googler, if you wanted to know things about us. 

MELANIE: Yeah, if you want to know what are some of our favorite items on our desks-- 

MARK: Pretty much. 

MELANIE: --you should check out that video. 

MARK: Yeah, it's a good video. 

MELANIE: So we'll include that link in our show notes, as always. 

MARK: Awesome. So we also announced a new region. So GCP arrives in the Nordics with a new region in Finland. We've been doing a really good job of opening up new regions all the time. 

MELANIE: Yes, and the regions always lead to improvements in our latency. But, yeah, that's Europe North One, and it's joining the Netherlands, Belgium, London, and Frankfurt in Europe. 

We also announced that Google AI is going to be in Ghana, and so in the fall, they're opening up a center, a research center, specifically located in Accra, Ghana, I think, is the name. So yeah, this is pretty exciting. 

And I know there's been a lot of work in that region to train and do training on AI and training on-- digital training for machine learning and other technical skills. So this will be wonderful to have that research center set up in that region 

MARK: Yeah. I want to also highlight we seem to be doing a lot of stuff with teammates recently. Fellow developer advocate Yufeng Guo has a blog post about BigQuery data sets. As he says, it specifically-- the big data is great, but getting your hands on large data sets is no easy feat. So he has a list of BigQuery data sets that you might be interested in playing with. 

MELANIE: He shows you how to access them, and I think it's about 40 data sets. So you don't have to actually pay for the storage of those sets. You can get access to them and do machine learning and other types of projects with those. 

MARK: Yeah, there's Lots of cool stuff. 

MELANIE: Lots of stuff. Last week was DockerCon, and we had a number of Googlers who were there and speaking and speaking on different topics. One of our fellow teammates, Michelle Casbon, who we had on the podcast a few weeks back talking about data science, so she did a demo at DockerCon. David Aronchick? 

MARK: Aronchick. Yeah, Aronchick. Close enough. 

MELANIE: Aronchick? OK. 

MARK: Yeah. 

MELANIE: So anyway, they did a demo. They were showing Docker with GCP, and they were showing TPUs. And one thing I wanted to highlight that she gave a shout-out to on Twitter was that because DockerCon supports child care at conferences, that enabled her to actually be there. And so if other conferences out there, who are trying to figure out how to increase their diversity, consider adding child care. 

MARK: That's super nice, super, super nice. Last but not least, just want to highlight that Unite Berlin is on right now. Probably just before we did this podcast, the keynote would have happened. You might want to check that out. 

MELANIE: I think you should. 

MARK: You should have a look. 

MELANIE: All right, Mark, it's time for us to go and speak with Thadeu about Hand Talk. 

MARK: Let's do it. 

MELANIE: This week, we have with us Thadeu Luz, who is from Hand Talk. He's here to talk to us about what Hand Talk does and how it's using GCP. Thadeu, thanks for joining us. 

THADEU: Thank you. 

MELANIE: Thadeu, can you tell us a little bit about the company. What does Hand Talk do? 

THADEU: So I'm a founder and CPO at Hand Talk, which is a start-up, based here in the city of Maceió, in Brazil, which is in the coast and very warm weather and nice beaches. And I'm also a Google developer expert in Firebase. 

Hand Talk is a company that offer automatic sign language interpretation solutions for users and companies as well. And we do that through a friendly virtual 3D character named Hugo. 

MELANIE: So how did you guys come up with this company? 

THADEU: OK. So Hand Talk started when, in 2011, I came back from Canada. I was living in Toronto for two years with my wife and working on the VFX industry. That's actually my background is in computer graphics and digital compositing. 

And when I came back, a couple of friends invited me to help with this project they were working on, which was a prototype for a demo day they were going to have here in Maceió. And the idea was to come up with an app that would translate to sign language using a virtual character. And they needed someone that had experience with character design and 3D animation to finish him off. So that's how I started. 

MELANIE: How did the company decide to work on from translating spoken and written Portuguese into Brazilian sign language? 

THADEU: This idea was a school project, actually, from my co-founder and my partner, Ronoldo. He's a CEO now. He had this idea for a very long time. Came up with this product when he was in university, and he needed to do that to come up with a marketing campaign for the product. 

So he thought of doing something at the time, which was using desktop computers or notebooks. And this was a long time ago in 2004, even before the iPhone. So after that, we thought that this could work for mobile devices. 

And we did this demo for this contest here, this local contest in Maceió, and we won the first prize. Everybody loved Hugo. And we used the money as seed investment to open up the company. And that's what we've been working on ever since. 

MARK: Awesome. Can you tell us more about the problem, too? Like is the translation from, say, Portuguese or even just written, like any sort of written language to sign language, is that kind of one-to-one, or how complicated it is that? 

THADEU: OK. So that's a good question, because it's not at all one-to-one. Sign languages are languages by themselves, like proper languages. They are not signed English or signed Portuguese. They have a structure and a grammar and morphology that is specific to them. 

So when we first started, we thought that the hardest part would be to animate a language, because there are quite a few signs in Brazilian sign language. I think it's over-- it's estimated that it's over 40,000, and we thought that would be really hard to animate the language. But the actual hard part is to restructure the grammar and make it work as a different language. 

MARK: So it sounds like this is very similar to, say, a translation between French and English or like English and Portuguese, as much as it is like a spoken language to a sign language. 

THADEU: Exactly. One other important thing to notice is that there are over 200 different sign languages in the world today. Brazilian sign language is, or Libras, how we call it, is the Brazilian official sign language. But in the US, you guys use ASL. And it's important also to say that there is no relationship between the oral language of a country and the sign language that they use. ASL is used in Canada, in Mexico as well, in some parts of Central America, Asia, in Africa. ASL is actually the most popular sign language in the world. 

MELANIE: In terms of the app itself, how can you access it? How is it used? 

THADEU: The app is free to use. You can find it on Google Play and Apple's app store. And you can download it, and if you're interested in learning sign language for now, you can just type or say whatever you want and Hugo will sign it back to you. 

We also have a couple of sessions where you can get started with sign language, learning groups of signs like fruits and colors, if you're new to Brazilian sign language. 

MELANIE: Nice. Well, in terms of the app, why Hugo? Why was the avatar designed the way it was, and Hugo the name? 

THADEU: When I was designing him, I wasn't really sure how he would look like, but I was pretty clear of what I wanted him to represent, right? So we were making this character that would be not the mascot but the product itself. 

I wanted him to have the mission of the company, and I wanted him to look friendly and also credible because that's what we were aiming for as a company, right? And also, I wanted him to be specific for sign language communication. So I gave him a few characteristics like long limbs and large hands and also like a large face for facial expressions, because this is really, really important for communication in sign language. 

And as for the name, it was my wife that named him. I had picked this placeholder name just at random so that I could name the files and the geometry and things like that. And she came up one day and said, he doesn't look like-- he looks like a Hugo. When she said it, it was pretty obvious that she was right. Everybody agreed and the name really stuck. 

MELANIE: I love the details that you have to think about. I mean, that's impressive to think about it, in terms of the design of the character itself, the long limbs, the large hands, the facial expressions. These are things people wouldn't normally consider but you have to consider when you're doing design. 

THADEU: Yeah and even like the clothes that he is wearing, went through quite a few iterations to get to something that wasn't very formal, but at the same time, it wasn't too casual. And he has a tie but not a suit. I think we got it right. 

MARK: That sounds great. I'd love to get stuck in more into how the translation process is made, especially like-- I mean, you kind of hit it. Like you just dropped it in, and I was like, wow, that's amazing, in that the translation is not just the hand expressions but also the facial expressions, as well. So I'd love to hear more about how all that works. 

THADEU: Yes, facial expressions are really important. in sign language. Like, they are basically the difference between a question-- I'm not sure about ASL. I'm talking about Brazilian sign language, which I know for sure. They're the difference between a question and an affirmation. So if you do the same signs and you don't do the facial expression, you can't be really sure if the person is saying or asking. 

MARK: It's almost like a turn. 

THADEU: Yes, And also, the facial expression are building on the signs. Some signs require facial expressions for them to work. Some signs are only facial expressions. It's hard to explain here because people are not going to have the visual, but there are some signs that are just a facial expression. 

MELANIE: What's one that you would say, that is a facial expression that's a sign? 

THADEU: Like thief, the sign for thief in Brazilian sign language is like this. 

MARK: He's sticking his tongue into the side of his mouth. 

THADEU: Yeah. If you do this, it's like a discreet way to say, look, there's a thief. 

MELANIE: Nice. 

MARK: Interesting. Yeah, tell us more about how technologically this works. I really want to hear about how these translations are made. 

THADEU: OK. The translation happens in two steps, and they're quite distinct. One of them is to translate the oral language into what we call gloss. Glossing is the process of writing a language in another language, and that's required for sign language, because unfortunately, there's no official way to write in sign language. There are a couple of attempts to make that, to create symbols to represent the position and hand shape of signs, but there's nothing official yet, and that's one of the reasons why it's hard to find data on sign language, because it's really hard to represent like we do with oral language with letters, right? 

The first step is to confer oral language, like Portuguese, to Gloss, which is written sign language. And then we can convert the Gloss into signs or finger spelling. We have a database of signs, and we can swap each sign tag to an animation and hand it back to the user. And whenever we don't have a sign, we do what's actually done in real life, which is to finger spell the word. 

If deaf people come by a word they have never seen before, like Google, for instance. They can finger spell it. The fingers spell G-O-O-G-L-E, and once they get acquainted to it, they come up with a sign for it. So that's exactly what our translation system does. 

If we find a new word or a proper noun, like a name, we can finger spell it. And if we know that they're referring to that one specific person like Barack Obama, we can swap that for the sign instead of finger spelling. 

MELANIE: I was just going to say, what's the sign for Google. 

THADEU: I'm not quite sure. 

MELANIE: No worries. 

THADEU: Let me ask Hugo real quick. 

MELANIE: We're not sure either, but I'm sure we will look it up and find out later. OK. Was there more that you wanted to explain in terms of the way you translate? Because I'm very curious, especially now with where things are at with neural nets, how you're building out the translation from being able to read to have spoken and written language translated into actual animation. 

THADEU: Yeah. OK. So the animation for us is really straightforward. We just swap the ID by the animation or finger spell it. But the hard part is really to get the grammar right for sign language, because currently, we are using a statistical machine translation system that is phrase-based. That's what we have currently in production, but what we really would like to is to have a neural machine translation system implemented, especially because we have the opportunity now with some tools that Google has released in the past couple of months to have this translation system deployed to the device, to the end user. 

Google has-- this last TensorFlow Summit, they released Tensorflow.js, which is a way to direct inference on the web browser, which is amazing, in training as well. And Firebase, which is our primary back end, also released a machine learning kit, which is also super promising. There's many things that we would love to do with it. 

And when we nail that neural machine translation system and if it's light enough, we can allow the user to do translations offline, which is something that everybody-- it's like one of our top requests for features. 

MELANIE: When we first met, we were talking about how your group went through the Launchpad Studio program. You were one of the initial companies that went through this, and this, of course, Launchpad Studio, we had a podcast on that at the beginning of the year. What kind of products and services did it give you access to that you've been able to use in your company? 

THADEU: We were on the first class of the Launchpad Studio and our boot camp was on January 2016, and it was amazing, like really, really good. I remember that there were two things that became really clear after that and those are two meetings that we keep going back to. 

And one of the things was where we did a UX test with someone that had never used the app before. It sounds, really basic, but we were able to see where people were really struggling to find information that we thought were really obvious. And it's really enlightening when you're able to see someone that has never used your app before trying to find the things that you already know where they are, and you're not allowed to talk, right? 

So one of the things that followed after that was a redesign of the app so that things will be even clearer to find, and that people that were arriving there for the first time wouldn't have to look for them as much. 

And the other thing that was really important for us in the Launchpad was that we've been asked what was the product about? Who was it trying to help exactly? Is it the person that uses the oral language as a first language or is it the deaf user? And the idea was that if our app doesn't do translation from sign language to oral language, how is the deaf user going to use it? 

And are we trying to be a translator or an education app? Because those are two very different things. If you're trying to build a translator, you can just go ahead and listen to the mic right away. And if you're building an education app, what you want to do is to assess how much sign language that person knows and to help him or her get started with the first basic signs that they're going to learn. So we opted for being an education app, because we believe that that's what's most important for us to do. 

MELANIE: What are the biggest challenges with sign language? 

THADEU: Sign language is really peculiar. Not many people know this, but sign language is really, really different from other kinds of conditions like blindness or mobility impairment, because sign language creates a culture and that's the main difference, right? 

Because deaf people experience life in a very different manner than people that can hear. The life experience that they have is primarily visual, so everything comes down to what is seen and that's why sign language is really like a natural language for them. That's why sign language feels more natural than any other language for them. 

The second reason is that there's one concept, which is the concept of deaf culture, which is real important to understand. When you say that someone is Deaf with a uppercase D, it means that they are culturally deaf. It's not only they are clinically deaf they can't hear, or maybe they can hear with the aid of cochlear implants or hearing aids, but what that means is that they identify with deaf culture. They likely have deaf friends and they enjoy what's called deaf arts, and they are aware of deaf history and there are lots of cultural manifestations to that. 

And one other thing that deafness is really peculiar is the fact that sometimes deaf children struggle to learn their first language, and this is a real, real big problem. Because 90% to 95% of deaf children are born from hearing parents and that makes it really likely that their children is the very first deaf person that they ever met, and it is hard to learn sign language for someone that can hear. It's really hard. 

So it is important for those parents to have help when they're trying to learn sign language and make tools available for them, so they can acquire a sign language or learn sign language as much as they can to have better communication with their children. There are a couple of interesting stories we have about this, like one of the things that really makes our day is when we get feedback from users. And they send us emails and Facebook messages saying that our app is helping them have a better relationship with their daughter, for instance, because they have a daughter that's 10 years old and she's deaf. 

She goes to a deaf school, and in school, she can communicate perfectly and has no problem whatsoever, but when she gets home, she has no one to talk to. And to hear that, her parents that are using our app to learn sign language in their spare time to be able to better communicate with their daughter is like something that we really value. 

That's why way back then, when we were deciding on which business model to pursue, we decided that we would not want to charge for the app like whatsoever. It's not our intention to charge $5, $6, $10 to a parent that wants to learn sign language, so that they can communicate with their kid, or a friend that wants to learn the basic signs so that they can say hello to a coworker and things like that. So that's why we had the idea of offering services to companies, so that companies can pay if they want to make one of their channels available also in sign language. 

MARK: This is amazing, and I love the story about it. Just your ethos around the entire company, it's phenomenal. I really would love to also just get stuck a bit more into the technical side of things. I know you're very large Firebase users. Why did you choose Firebase? What gets you excited about using that product? 

THADEU: Our first server version was done entirely by me on OJS, and I coded the whole thing from scratch. And even though it's not that hard to make a server user system with log in, log out, reset password, and create account forms and things like that, it's not that hard. I find it really important to be able to have that information really secure, like to store the passwords the right way, and that's not that trivial. 

It's real important to have security and to have your app be stable. And that's one of the most amazing things about Firebase, that keeps us coming back to Firebase is the fact that we can create user accounts and log in. There are third-party authentication systems like really easily and reliably. 

And also, one of the things that we didn't really think that would benefit us much, which is a real-time database, the fact that you can receive updates from the database directly, but it's really amazing. It really changes the perception of the user when, for instance, they know that someone is on their website, and they can see the dashboard update instantly without having to refresh the page. That's something that's really, really helpful as well. 

There are other things in Firebase that gets me really excited about it. One of them is the fact that in 2016, they released their Google Cloud Functions, which is an amazing tool. Not having to manage servers is something that's really valuable to us, because sometimes we do have huge spikes on usage. Like when there is a big news outlet makes a blog post about us, and we have a huge spike in translations and relying on cloud functions for that and not having to monitor instances is really helpful as well. So there are many things in Firebase that I really like, but those three are the most important, I believe. 

MELANIE: Great. 

THADEU: There are also other Google Cloud Platform services that we are using that are helpful, too. OK. One of the hard things about making a translation system for sign language is that data is really hard to come by. I know that ASL, it's not as hard as it is for Libras, but to find data on Libras is really, really hard. 

It would be awesome if we could do it just like Google Translator does, which is use something like the European Parliament [INAUDIBLE] or a database of translator websites, where you have references for sometimes two, sometimes three, four different languages, and you use that to feed your translation system. 

But with sign language, we don't really have that. We had to create our own corpus from scratch. Our Bitext is done on a tool that we created, which actually, it's heavily inspired by Google Translate Community, which is the web app that you can contribute to translations. And we have a system kind of like that but for sign language, where you can also pick the signs you want or determine if a certain tag is finger spelled. And that's how we produce the data for our translation system. 

MELANIE: How much data do you have for training? 

THADEU: Yeah, our corpus is around half a million sentences. 

MARK: And are you using Google Cloud for managing that? How does that all work? 

THADEU: OK, so we use DataFlow to clean up and merge two databases that we have with information on Bitext with Portuguese and Brazilian sign language. And we train everything on Cloud ML, which is also a huge, huge deal for us. Cloud ML is a godsend. 

MELANIE: How so? 

THADEU: As I mentioned, we have some quite long sentences, and we have a bunch of unknown words. Like the name, many people translate their names in the app, right? They want to say my name is so and so. And we have many unknown words of names of entities and proper nouns. And our system can get really memory intensive. It consumes a lot of memory, and it would be really hard to train that on our hardware. I have a MacBook. 

So it would be really hard to train that on hardware on premise. So we've been using Cloud ML since the beginning to iterate and to test new versions of our translation, our neural machine translation system, and it's working really, really well. It's amazing. 

MELANIE: Well, this is wonderful. So one question I have for you is, I know we were saying how it's focused on Portuguese and Brazilian sign language. What are your future plans, in terms of sign language translation? 

THADEU: We have many features that we would like to do on our app. Some of them are the short-term, like American Sign Language, but some of them are going to take a little bit longer to develop the technology for them. American Sign Language, we would like to be done by the end of the year, but we are closing a round of funding right now, and it's talking a little bit longer than we expected. We have to run the numbers again to have a final date for when the ASL is going to be ready. 

MELANIE: So American Sign Language is one that you're targeting, hopefully, by the end of the year, depending on how things are going with funding. And other languages, other features that you're interested in pursuing? 

THADEU: One of the other features that we really would love to implement is doing the other way around. Currently, we only do oral language to sign language, but we would love to do sign language to oral language, to be able to use the device camera to convert images to oral language, that would be something very big for us. 

MELANIE: Agreed, and especially with the way machine learning is evolving from object identification and other classification and predictive tooling around image analysis. This is wonderful. Thadeu, if people out there are interested in contributing to your company, and contributing to the product, what are ways that they can get involved? 

THADEU: OK, I thought of three things that might be interesting. One is that you know or you represent an institution that deals with ASL, you can get in touch with us to see how we can either come up with a partnership to help improve our ASL translation system. So you can get in touch with me on Twitter at thadeuluz. 

And also, if you're a data scientist and you're aware of language labelled or unlabelled data sets for ASL that are open, you can send the link to me. Because I'm pretty sure there are quite a few data sets that I'm not aware of yet on ASL. And I'm looking for them, collecting them, to know exactly which ones we can use to speed up the process of coming up with data. 

And if you're just curious about sign language and would love to hear from us when we release the ASL version of our app, you can go to handtalk.me/asl. And sign up to a newsletter there, and you're going to be the first one to know when we have the app ready for English and American Sign Language. 

MELANIE: Well, this is great. Thank you so much, Thadeu, for joining us and for sharing about Hand Talk, about Hugo, and you mentioned it's available on Google Play. So thank you very much. 

MARK: Yeah, thanks so much. 

THADEU: OK, thank you guys. 

MELANIE: Thank you Thadeu, again, for coming on the podcast. I'm so glad we were able to talk about what Hand Talk has built and what you're working on and where that's going. I love these types of tools, because I love how they are breaking down more and more communication barriers. That's exciting to me, in terms of what technology has the potential for. 

So all right. Mark, what does a Go developer need to know about GCP. 

MARK: What doesn't a Go developer need to know about GCP? No, this is a great question. We wanted to highlight this, because, yeah, we had another teammate-- I think it's like teammate-a-palooza. I think we're just talking about how amazing our team-- 

MELANIE: We love our team. 

MARK: Yeah, how amazing all our teammates are. Eno Compton, developer advocate for Google Cloud, wrote a really amazing article talking about exactly these types of things and basically the choices that you have, in terms of where you might want to host your code. So maybe you might want to put it on GCE, Compute Engine. Maybe you want to put it on Kubernetes Engine. Maybe you want to put it on App Engine. Even sort of goes and has a look at Cloud Functions, talking about the unofficial and unsupported native Go runtime that exists. 

MELANIE: It's a nice overview of GCP but from a Go perspective. 

MARK: Yeah it's really great. So there's lots of options. It goes through a lot of the pros and cons. It even talks about machine learning APIs and how you can use that through Go, as well. It's worth a read. 

MELANIE: Yeah. All right, Mark, you're going to be speaking anywhere anytime soon? 

MARK: Yes. So I'm going to be presenting at the Kubernetes Community Meeting, which I think is tomorrow, based on the day this comes out, in the morning Pacific time in the US. There we go. Let's get the time zones right. 

MELANIE: Time zones are important. 

MARK: Yeah. We'll put a link to that in the show notes. That's online so anyone can come in and listen. I'm going to be talking about Agones. And then later this week, I'm getting on a plane, going to Denmark. I'm going to go hang out with our Unity friends. They've got a hack week that I'm going to go play with. And so expect lots of tweets and social stuff to come out of that. 

MELANIE: Copenhagen's fun, especially for food. I love the food there. 

MARK: What are you doing? 

MELANIE: I, while you are away, will be going to speak at an event that the Women in Machine Learning and Data Science and PyLadies are joint organizing called Paths to Data Science. And so we'll include the Meetup link in the show notes, and that's on Tuesday, the 26th. 

And then I'm speaking at Stanford at the AI For All. It's like a technology camp for those who are more in the high school space. And so that is on June 28th that I will be speaking there. 

MARK: When you say technology camp, is that in tents and stuff? 

MELANIE: Depends on who you are, in terms of whether you consider that intense. I don't know. Technology to me seems like fun and going to a camp, it's like-- I don't know. I think it's almost like band camp but it's technology camp. 

MARK: I've done that before. I've done like go out in the bush with like tents and-- 

MELANIE: Nice. It's not tents. No, definitely not tents. 

MARK: Just curious. 

MELANIE: It's all about learning and understanding and exposing tech, especially to people who are younger trying to get into the space. 

MARK: Awesome. Well, Melanie, thank you so much for joining me for yet another podcast this week. 

MELANIE: Thank you, Mark. 

MARK: Thank you all for listening, and we'll see you all next week. 

[MUSIC PLAYING]