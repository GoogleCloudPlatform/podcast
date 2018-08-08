+++
audioDuration = "00:21:05"
audioFile = "Google.Cloud.Platform.Podcast.Episode.141.mp3"
audioSize = 30780517 
categories = ["Accessibility", "Disability Rights", "WCAG"]
date = "2018-08-08"
description = "On this episode of the podcast we continue a conversation we started with Haben Girma, an advocate for equal rights for people with disabilities, regarding the value of tech accessibility."
draft = false
episodeNumber = 141
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Accessibility in Tech with Haben Girma"
image="/post/episode-141-accessibility-in-tech/images/hero/hero-EP-141.jpg"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/VcxxUMiNc7c"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/95n9ln/episode_141_accessibility_in_tech_with_haben_girma/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

On this episode of the podcast we continue a conversation we started with Haben Girma, an advocate for equal rights for people with disabilities, regarding the value of tech accessibility. [Melanie](https://twitter.com/nyghtowl) and [Mark](https://twitter.com/Neurotic) talk with her about common challenges and best practices when considering accessibility in technology design and development. Bottom line - we need one solution that works for all.

<!--more-->

##### Haben Girma

The first Deafblind person to graduate from Harvard Law School, [Haben Girma](https://twitter.com/HabenGirma) advocates for equal opportunities for people with disabilities. President Obama named her a White House Champion of Change, and Forbes recognized her in Forbes 30 Under 30. Haben travels the world consulting and public speaking, teaching clients the benefits of fully accessible products and services. Haben is a talented storyteller who helps people frame difference as an asset. She resisted society's low expectations, choosing to create her own pioneering story. Because of her disability rights advocacy she has been honored by President Obama, President Clinton, and many others. Haben is also writing a memoir that will be published by Grand Central Publishing in 2019. Learn more at [habengirma.com](https://habengirma.com/).

##### Cool things of the week

* Istio reaches 1.0: ready for prod [blog](https://cloud.google.com/blog/products/gcp/istio-reaches-1-0-ready-for-prod)
* Google for Nigeria: Making the internet more useful for more people [blog](https://africa.googleblog.com/2018/07/google-for-nigeria-making-internet-more_68.html)
     * GCPPodcast Episode 17: The Cloud In Africa with Hiren Patel and Dale Humby [podcast](https://gcppodcast.com/post/episode-17-the-cloud-in-africa-with-hiren-patel-and-dale-humby/)
* Access Google Cloud services, right from IntelliJ IDEA [blog](https://cloud.google.com/blog/products/gcp/access-google-cloud-services-right-from-intellij-idea)

##### Interview

* Haben Girma's website [site](https://habengirma.com)
* Haben Girma's presentation at NEXT [video](https://www.youtube.com/watch?v=ony1wb1DOKw)
* GCPPodcast Episode 100: Vint Cerf: past, present, and future of the internet [podcast](https://gcppodcast.com/post/episode-100-vint-cerf/)
* Web Content Accessibility Guidelines (WCAG) [site](https://www.w3.org/WAI/standards-guidelines/wcag/)
* Android Accessibility Guidelines [site](https://developer.android.com/guide/topics/ui/accessibility/)
* Apple Developer Accessibility Guidelines [site](https://developer.apple.com/design/human-interface-guidelines/ios/app-architecture/accessibility/)
* Black in AI [site](https://blackinai.github.io)
* Google Accessibility [site](https://www.google.com/accessibility/)
* San Francisco Lighthouse for the Blind [site](http://lighthouse-sf.org)
* National Federation of the Blind [site](https://nfb.org)
* National Association of the Deaf [site](https://www.nad.org)

##### Question of the week

How do I perform large scale mutations in [BigQuery](https://cloud.google.com/bigquery/)?
      [blog](https://cloud.google.com/blog/products/gcp/performing-large-scale-mutations-in-bigquery) and [site](https://cloud.google.com/bigquery/quotas#data_manipulation_language_statements)

##### Where can you find us next?

Mark will be at [Pax Dev](http://dev.paxsite.com/) and [Pax West](http://west.paxsite.com/) starting August 28th. In September, he'll be at [Tokyo NEXT](https://cloud.withgoogle.com/next18/tokyo).

Melanie is at [Def Con](https://www.defcon.org/), [Black Hat](http://www.blackhat.com/us-18/), and [BSides Las Vegas](https://www.bsideslv.org/). In September, she will be at [Deep Learning Indaba](http://www.deeplearningindaba.com).

{{< transcript "MARK: Hi, and welcome to episode #141 of the weekly Google Cloud Platform Podcast. I'm Mark Mandel, and I'm here with my colleague Melanie [inaudible]. How you doing, Melanie?" >}}

MELANIE: So yeah, it's good to be back in the studio, and this week we're going to be talking with Haben Girma who is here to talk to us about accessibility in tech. 

MARK: Thank you, Melanie, for setting this up. It was a really great interview. 

MELANIE: I'm a little bit of a fan girl of hers because I saw her speak, and it just blew me away, and so I was really thrilled that she not only came out to speak at NEXT, that she also had time to come and join us while we were recording there, so that was lovely. 

MARK: Absolutely. Absolutely. 

MELANIE: So before we get to the interview, as always we're going to start with our Cool Things of the Week and end with our Question of the Week, and this week's question, Mark has been able to find for us, which is going to be "How do I perform large scale mutations in BigQuery?" 

MARK: Yes.

MELANIE: ...which is a good question. 

MARK: It is a good question because you put a lot of data in BigQuery. 

MELANIE: You do, and in order to make any type of deleting or any thing that's gonna be mutating, there are some limits, so it helps give an understanding of what those limits are, but we'll get to that later. So let's get started with our Cool Things of the Week. You want to kick it off?

MARK: I want to kick it off? Why not. So I think it's worth noting that Istio, the service mesh, basically [inaudible] for collecting logs, traces, telemetry, security, and policy for distributed applications basically. It's the bit that sits between all the services is the way I like to think about it. It went 1.0 recently, so it's declared "ready for production," so if you've been looking at this year or you've been holding off a little bit because it hasn't been hitting 1.0, it has now hit 1.0, so you can definitely check it out. 

MELANIE: There's a lot of interest and popularity around Istio. 

MARK: Oh, yeah. 

MELANIE: I know one of our colleagues, Kelsey Hightower, talks a lot about it which is great. 

MARK: Yeah. And we should probably also mention that we also have announced the alpha release of managed Istio as well, so definitely keep an eye out for that too. 

MELANIE: Cool. We'll probably talk about that more when the beta comes. 

MARK: Yeah. 

MELANIE: Another thing that we want to talk about is that Google has been doing this effort to make wi-fi available in different regions around the world, and so one of those areas in particular, they're doing Google Station, which is providing high-quality wi-fi hotspots across Nigeria. The goal is that they want to roll out 200 locations in five cities by the end of 2019, and hopefully bringing this to millions of people, which is something that they've been working on for a while now in other countries like India, Indonesia, Thailand, and Mexico. We'll include a link, as always, in to the show notes, and people can check that out and see, you know, what the effort looks like, what the timeline is, and some additional insights around what's being provided. 

MARK: Yeah, I'm really excited about this. A while ago, episode 17 actually, we did an interview with Hiren Patel and [inaudible] in Africa talking about some of the issues and challenges they face around infrastructure and how reliable it is in that region, so I was super happy to see this. Also, like, coupling that with some of the stuff that's been going on, like Google Go, Maps Go, YouTube Go, basically these applications that are designed to improve an experience when there's an unstable or slower network, I think these are really great endeavors. 

MELANIE: Agreed. Just access to information like this is very important. 

MARK: Yeah. 

MELANIE: I know one of the stats they mentioned in the blog was, like, only 35% of Africans have access to the web, so yeah, this is great. So another Cool Thing of the Week, I think, Mark, you wanted to talk about IntelliJ?

MARK: Yeah. Big fan of IntelliJ. Been using IntelliJ for a long time. This is very specific for those Java users that exist out there, but the Google Cloud tools for IntelliJ plug-in, being able to access services directly from your IntelliJ IDE, I thought this was kind of neat.

MELANIE: It is neat.

MARK: It is neat. So they have an example in here of actually calling the translated API directly from the IntelliJ IDE, and there are tools in there so you can authenticate, so like, you know who your account is, and you can set up which project you want, which means if you want to test out these kind of services, give them a bit of a demo, give them a bit of a spin, see how they work out, it's very easy to do from within the IDE, so yeah. I love IntelliJ. I don't actually use it for Java very much, but for those of you who do, this probably will be very useful. 

MELANIE: Agreed. Very much so. Well, Mark, I think it's time for us to go speak with Haben

MARK: Let's do it. 

MELANIE: Today, we are happy to have with us Haben Girma. She, this morning, did a talk where we're doing this recording at NEXT, and she just talked this morning on accessibility in tech, so Haben, thank you so much for joining us. 

HABEN: Absolutely. Thanks for having me here, Melanie, and hi, Mark. 

MARK: Hi. Before we get started today and talk about accessibility in tech, can you tell us about you and what do you do?

HABEN: My name is Haben Girma, and I'm a disability rights advocate. I teach individuals in organizations how to design with access in mind. One of the reasons I do this is because I, myself, have a disability. I'm deaf-blind. I have limited vision and hearing. There're always alternative techniques for accessing information, and I've been successful 'cause I found lots of alternative techniques, and I found communities that value alternative techniques. For example, during this podcast, as Melanie or Mark speak, their words are being transcribed and output in to digital Braille, and I'm feeling their words in digital Braille, and then responding by voice, and this technology is an example of an alternative technique, and people with disabilities have lots of different tools and solutions that we use. 

MELANIE: What drove you to become a speaker and a driven advocate on this topic?

HABEN: Disability has the potential to be an opportunity for innovation, and a lot of people don't know that, and I'm really passionate about teaching organizations, especially those who focus on designing technology, to think of disability as an opportunity for innovation. For example, email. Vint Cerf, one of the founders of the internet, helped develop one of the earliest email protocols, and this was back before the internet existed as we know it today, back before deaf individuals had a good tool for communicating long distance 'cause we didn't have good access to the telephone. Email was a way to communicate long distance, and you could understand a message without struggling to hear. Nowadays lots of people use email. Hearing people, deaf people, and a lot of the challenges people with disabilities face, from communication to accessing print, when you look for a solution, you'll end up finding a solution that not only helps people with disabilities, but helps the greater population and becomes the next big thing, so there're lots of hidden stories out there that people don't know about, and I'm excited to teach people these stories so that more designers, developers, people who work in the field of technology, can start investing in accessibility.

MELANIE: That's so great, and we actually have a podcast on Vint Cerf, so it's funny that you mention him. 

HABEN: Excellent. I didn't know you did. That's perfect. I know he's here at Google, right?

MELANIE: Yes, he is. 

MARK: So you talk a lot about tech accessibility. How do you define that?

HABEN: Accessibility means lots of different things. The goal is to reach as many people as possible, to build one product, one app, one website, that the maximum number of people can use, and there're different elements to accessibility. There's visual accessibility, making sure blind people can access the service. The web content accessibility guidelines helps teach how to make websites accessible. For apps, there's Android accessibility guidelines, and for iOS there is Apple accessibility guidelines, so if you're making something, make sure you follow the accessibility guidelines so that it's accessible to the blind community. For the deaf community, the big thing is captions, making sure videos have captions so that deaf individuals can access the audio content. Or for podcasts, including transcripts so that people can access the content of the podcasts. Those are some examples, but it's not the limit. There are lots of accessibility features that are waiting to be built, and if we keep innovating, we'll come up with new solutions that'll make even more things accessible. Self-driving cars, a lot of people with disabilities are excited about self-driving cars. We're also worried that we won't be able to use them, so we're hopeful that they'll be designed with access in mind, and future technologies will be designed with access in mind so lots of people can use them.

MELANIE: When I saw you speak at [inaudible] AI, what resonated the most with me was your point about how it should be one technology for everyone, not multiple, and that also goes to what you're saying right now. Did you want to talk through a little bit about that point?

HABEN: That's a great point. Some people, when they think about accessibility, they think of a separate special service, so a separate app for people with disabilities, a separate website for people with disabilities. Separate is never equal. You might start out with good intentions and intend for the two services to be equal, but down the line, the one for people with disabilities won't get updated as often. It won't have all the features, and it just becomes inferior. Separate is never equal. Instead what we want is one service, one app, designed for everyone to use it. It becomes easier for everyone, and some designers immediately think of design problems because they're not used to thinking about accessibility. Constraints often spark innovation and spark new ways of doing things. If you're not sure how to do something, ask. Google has an Accessibility Team, so folks here can ask people about accessibility. Reach out to the Accessibility Team, or reach out to disability organizations. There are lots of organizations in the bay area. There's the San Francisco Lighthouse for the Blind, nationally, National Federation of the Blind, or for deaf services, National Association of the Deaf. Ask questions. Reach out to the communities. Don't make assumptions. 

MARK: What challenges do you normally see from companies who are potentially looking to become more accessible but haven't quite got there yet?

HABEN: A challenge people often site is resources, and people often say that accessibility is too expensive. People who say that are usually jumping to conclusions and making assumptions without doing the research. I will say that it does take more resources to try to make something accessible later in the stage of development rather than thinking about accessibility from the start. For example, if somebody builds a skyscraper, and then after they finish building it realize, "Wait, we forgot elevators," and then they have to tear down part of the building to add in elevators. That is more costly and time consuming compared to building an elevator from the start. Same concept. It's easier to make something accessible if you plan for accessibility from the start as you're designing the product or service, and if people have more questions, you can ask. Lots of organizations and lots of free resources online for designing accessibly. 

MELANIE: What are some of the subtle biases that you've seen in the work and the research that you've done?

HABEN: One bias is the assumption that the disability market is very small, and it's a charitable thing to design for accessibility--It's something to do for charity.--and people don't realize that the disability market is very large. There are 1.3 billion people with disabilities around the world. In the U.S., 57 million Americans with disabilities. That's a large market, so if you make your services accessible, you get to tap in to that large market which means more revenue, more business opportunities, so it's good business to invest in accessibility. Stop thinking about it as charity. It's not charity. It's a great business opportunity. 

MARK: Have you got any great examples where you've seen accessibility done really well?

HABEN: One classic example, city of Berkley. Once upon a time, the city of Berkley did not have accessible sidewalks, and advocates complained and advocated to have full access to the sidewalks, and Berkley put in curb cuts so that wheelchair users can go on and off the sidewalk and travel freely throughout Berkley. Later, parents with strollers took advantage of the curb cuts, and they found that they could push their toddlers in strollers on and off very easily. Workers pushing things on wheels, travelers with luggage, kids with rollerblades, lots of people ended up benefiting from these curb cuts, and this concept of a disability accessibility feature benefiting the entire community is now called the "curb cut effect," and you see it in lots of different areas. Lots of people use elevators, and it benefits lots of people. Captions benefit deaf people, but captions also benefit hearing people as well. Some times hearing people are in noisy settings, and they can't quite hear what's going on on their video, so they'll turn on captions so they can fully understand what's going on in the video. Or maybe they don't want other people to know they're watching a video, and they want to be sneaky, so they'll turn off the audio and turn on captions. 

MELANIE: Yes. 

HABEN: A marketing study by Facebook found that adding captions to videos increases view time on average of about 12%, so lots of benefits to including captions. Curb cut effect. You see it in lots of different places. 

MELANIE: I love captions. I use them. They're very helpful for me actually.

HABEN: Exactly. What about you, Mark? Do you use captions?

MARK: I don't. My wife definitely does though. 

MELANIE: They're very helpful. 

MARK: Yeah. 

MELANIE: I know you gave us some great recommendations on resources. Are there any additional resources that you would recommend for developers and designers to improve accessibility design?

HABEN: I want to repeat again that there are Android accessibility guidelines for developers--Tap in to those and look in to that--and for websites, web content accessibility guidelines, if you're still not sure, there are lots of online resources. You can check in with the San Francisco Lighthouse for the Blind. You can check in with the National Federation of the Blind, and there are also accessibility consultants you can connect with. You're welcome to reach out to me. Again, my name is Haben Girma, and my website is HabenGirma.com. 

MELANIE: Thank you. Haben, one thing I want to leave on, or at least one of the last things I want to ask, is you did this wonderful talk earlier today. Can you share with our audience a few of the key takeaways that you shared with the audience here?

HABEN: The key takeaway from my talk this morning is that all the barriers that exist are created by people. They're arbitrary. They're not necessary at all. Disability, for example, is never a barrier. The barriers created are created by people, and one example I gave is how Harvard, once upon a time, used to deny access to women. Helen Keller, when she was looking for colleges to attend, couldn't attend Harvard. Back then Harvard only valued men, and Harvard wouldn't admit women. Over time Harvard changed. Society changed, and now Harvard has opened its doors to women, people of color, and people with disabilities, so the barriers that exist are created by society, not disability, and as developers, you have the power to create tools and solutions that help people rather than creating barriers. 

MARK: So we're at a technology conference here at NEXT. Is there any particular technological advances that you've seen that you think are gonna break down barriers in the future for people with different abilities?

HABEN: Self-driving cars have the potential to break down barriers if they're designed to be accessible. Will wheelchair users be able to get in and out of these cars independently? Will blind people be able to drive these cars independently? How about someone with arthritis? So it really depends on how they're designed. We're excited, but we're also worried, so please don't disappoint us. 

MELANIE: I think that's a wonderful point. Well, Haben, thank you so much for taking the time to come and chat with us. We really appreciate it. 

MARK: Yes, thank you so much. 

HABEN: You're very welcome. Thanks Melanie and Mark. 

MELANIE: And thank you again, Haben, for coming on the podcast. 

MARK: Yeah. 

MELANIE: We really enjoyed having that interview for sure. 

MARK: Yeah, and thanks as well to her translator for coming and spending the time with us as well and making that whole thing possible. 

MELANIE: Agreed. Well, Mark, Question of the Week?

MARK: Yes. 

MELANIE: How do I perform large scale mutations in BigQuery? 

MARK: This is an interesting question. I don't actually work personally with BigQuery that often, so I learned a whole bunch of stuff looking at this today. There is a blog post that talks all about it strangely enough, which is why I ended up learning about it, which is lovely. So BigQuery, you know, it's our big data query system where you do massive amounts of data querying over very large data sets, terabytes, petabytes, of data, but some times you want to edit that data. Maybe it went in wrong. Maybe you want to change it. Maybe you want to delete some for archive purposes, all that kind of good stuff. So BigQuery does have a data manipulation language that you can use, so, like, select statements, merge statements, update statements, etcetera, etcetera. But the limit that you will hit is that there are quotas about the frequency of mutation that you can make over the tables that you have. This is basically because we do store lots and lots and lots of data, and we do very special things to do it essentially, so maximum number of combined update, delete and merge statements per day per table is about 200. The maximum number of combined update, delete, and merge statements per day per project is about 10,000. You can definitely make updates, and there's no limit of the amount of size of data that you manipulate when you do those manipulations, so, like, a common scenario might be where you might want to update existing data based on new information coming in through on a periodic basis. Just be aware of those sort of limitations, so maybe you want to do that sort of once a day or with the entire data set if you can rather than doing it multiple times per day. Just keep those limitations in mind. Well, we'll link to the article which has other links to other articles around, like, what the quotas are and, like, what's available and what's not, but yeah. As long as you keep in mind those quotas, you should be good to go.

MELANIE: Agreed. Everything that's going on with data in general, this is a key thing to be able to work through. Check out that link. All right, Mark, where are you going to be?

MARK: I am gonna be at PAX Dev and PAX West, so PAX Dev will be starting August, 28th, so I should really book my flights. I will be talking about [inaudible] at PAX Dev and then hanging out at PAX West with all my gaming friends and cosplaying friends and all the other good stuff. Melanie, where are you gonna be? What are you up to?

MELANIE: So as we speak, I'm actually in Vegas at all the security conferences that are going on... 

MARK: Oh, that's right. Yeah. Yes.

MELANIE: ...with Defcon and BSsides and Black Hat and all that. This is my first time, and this is interesting. 

MARK: Oh, I'm excited for you. 

MELANIE: Yes, me too.

MARK: Well, cool. 

MELANIE: That's good. Outside of that, I think that's most of the conferences for me right now, which is great. 

MARK: That is great. Ooh, I should mention I will also be at Tokyo NEXT in September. That'll be the thing I'm doing afterwards, so that'll be awesome as well.

MELANIE: And I, actually since you're gonna bring up September, will be at Deep Learning Indaba in South Africa in September. 

MARK: Sweet. Fantastic. Well, Melanie, thank you again for joining me for yet another episode of the podcast. 

MELANIE: Thank you. 

MARK: Thank you all for listening, and we'll see you all next week. 