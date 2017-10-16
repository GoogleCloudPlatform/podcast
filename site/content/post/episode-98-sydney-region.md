+++
audioDuration = "00:34:21"
audioFile = "Google.Cloud.Platform.Podcast.Episode.98.mp3"
audioSize = 49754612
categories = ["Sydney", "Customer"]
date = "2017-10-11T01:07:49Z"
description = "This summer (aka Australian winter) a new Cloud Region was announced in Australia and today Francesc and Mark talk to two Australian engineers, Andrew Walker and Graham Polley, about how this new region has changed the way they think about the cloud down under."
draft = false
episodeNumber = 98
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Sydney Region with Andrew Walker and Graham Polley"
image="/images/post/australia.png"
linked = true
googlePlusLink = "https://plus.google.com/b/117267610519909886476/+Gcppodcast/posts/5PnzhTRdBGS"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/75r4at/episode_98_sydney_region_with_andrew_walker_and/"
+++

This summer (aka Australian winter) a new Cloud Region was announced in Australia
and today [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic) talk to two Australian engineers,
[Andrew Walker](https://au.linkedin.com/in/andrewmasonwalker) founder of [3wks](https://twitter.com/real3wks) and [Graham Polley](https://twitter.com/polleyg), about how this new region has
changed the way they think about the cloud down under.

<!--more-->

##### About Andrew Walker

Andrew is the founder of 3wks who have delivered 190 projects on Google Cloud platform for enterprise customers in Australia. 

He loves everything serverless, from App Engine through to BigQuery.


##### About Graham Polley

Graham is a senior software engineer based out of Melbourne Australia, and works for Shine Solutions.
Shine are a enterprise digital consultancy with offices in Melbourne & Sydney.

Being an official Google Developer Expert, he's passionate about promoting the adoption of cloud technologies into software development, and regularly blogs and gives presentations.
He has extensive experience in building big data solutions for clients using the Google technology stack, and in particular with BigQuery & Dataflow.
Graham works very closely with the Google cloud engineering teams in the US, where he is a member of their cloud platform trusted tester program, and the solutions he helps build are used as internal exemplars of developer use cases.


##### Cool things of the week

- How we built a brand new bank on GCP and Cloud Spanner: Shine [blog post](https://cloudplatform.googleblog.com/2017/09/how-shine-built-bank-on-gcp-and-cloud-spanner.html)
- Now shipping: Compute Engine machine types with up to 96 vCPUs and 624GB of memory [announcement](https://cloudplatform.googleblog.com/2017/10/new-compute-engine-machine-types.html)
- Google Cloud Dataprep - Data Handling Made Easier [Medium](https://medium.com/google-cloud/google-cloud-dataprep-data-handling-made-easier-79d7c35fbbe7)

##### Interview

- Sydney Cloud Region [docs](https://cloud.google.com/about/locations/sydney)
- Google Cloud Platform expands to Australia with new Sydney region - open now [announcement](https://cloudplatform.googleblog.com/2017/06/Google-Cloud-Region-in-Sydney.html)
- Google Cloud Platform Geography and Regions [docs](https://cloud.google.com/docs/geography-and-regions)
- Google Cloud Dataflow [docs](https://cloud.google.com/dataflow/)
- Google BigQuery [docs](https://cloud.google.com/bigquery/)

<div style="text-align: center">
  <a href="https://cloud.google.com/about/locations/sydney/"><img src="/images/post/australia.png" style="margin: auto; max-width:400px;"></a>
</div>

##### Question of the week

Is Tensorflow good for general math computation?

- Yes! It's great for any linear algebra programs.
- Linear Algebra Shootout: NumPy vs. Theano vs. TensorFlow [blog post](https://simplyml.com/linear-algebra-shootout-numpy-vs-theano-vs-tensorflow-2/)

<div style="text-align: center">
  <a href="https://simplyml.com/linear-algebra-shootout-numpy-vs-theano-vs-tensorflow-2/"><img src="https://simplyml.com/content/images/2016/11/mean.png" style="margin: auto; max-width:400px;"></a>
</div>

##### Where can you find us next?

Francesc just released the second part of this [#justforfunc code review](https://www.youtube.com/watch?v=zBc338CZRpk&t=6s).

Next week he will be presenting at [Go Meetup London](https://www.meetup.com/Go-London-User-Group/events/243800263/), [Velocity London](https://conferences.oreilly.com/velocity/vl-eu), and [Google Cloud Summit Paris](https://cloudplatformonline.com/Summit-Paris-2017.html).

Mark is heading to Australia for [GDG Devfest Melbourne](http://gdgmelbourne.com/) and [Game Connect Asia Pacific](http://gcap.com.au/) and will be hanging out at [Unite Melbourne](https://unite.unity.com/2017/melbourne) and [PAX Australia](http://aus.paxsite.com/).

{{< transcript "FRANCESC: Hi, and welcome to episode number 98 of the weekly \"Google Cloud Platform Podcast.\" I am Francesc Campoy, and I'm here with my colleague Mark Mandel. Hey, Mark. How are you doing? " >}}

MARK: I am good. How are you doing today? 

FRANCESC: I am pretty tired because we had to wake up really early. 

MARK: You had to do something at 8:00 AM. It wasn't that bad. 

FRANCESC: That is incredibly early for me. 

MARK: That bad. 

FRANCESC: I come from a different time zone. I was born in Barcelona, different time zone. So I'm still jet lagged 

MARK: Jet lag. just still [INTERPOSING VOICES]. 

FRANCESC: But anyway, very excited, and I think I am pretty excited, but you are probably more excited than me about this episode because it's about Australia. 

MARK: That was well done. 

FRANCESC: Thank you. 

MARK: Yeah. 

FRANCESC: I've been practicing. 

MARK: Yeah. We have Andrew Walker and Graham Polley. We're talking about, basically, how a new region for Google Cloud Platform opened up in Sydney and the impact it's had on the businesses and technology people down there. 

FRANCESC: Yep. And also, the things they're missing and asking for in BigQuery. 

MARK: [? PM's ?] [? listen. ?] 

FRANCESC: Yep. And then, at the end, we will have a question that comes from one of our listeners. It's a really cool question because it is about TensorFlow and whether it's useful or not for linear algebra. We used TensorFlow for machine learning and AI. Is it also useful for other things? So we'll answer that question. 

MARK: Yep. 

FRANCESC: But before that, we have our three cool things of the week. And the first one comes from friends. There's Raphael Simon. She's the CTO and co-founder of a bank named Shine, and they explain how they implemented the whole thing, which is really cool because they have very high visibility. They have five nines. And they explain how all of their technical choices going from Firebase to running their macro services using App Engine flags with the Google Cloud endpoints. 

And then on top of that, they talk about the database, and the database is really cool because they go with Spanner. And they explain all of the things to the point that they even give you pro tips, like this is the way we implemented, these are the things we learned, stuff like that. Super cool. Definitely worth reading. And if, Raphael Simon, you're listening, you're more than invited to join the podcast. 

MARK: Yes. Absolutely. I actually also like there was a little bit in here talking about basically how they used IAM policies as well. Being a financial institution, don't want to give access to just anybody to anything. 

FRANCESC: Kind of makes sense, yep. 

MARK: Yeah. So really good to see that they're taking advantage of that, too. 

FRANCESC: Yeah. Very cool. 

MARK: Cool. So next up we have bigger machines. We have bigger machines. So Compute Engine machine types now go up to 96 virtual CPUs and 624 gigabytes of memory. Ahh. 

FRANCESC: It is a lot. 

MARK: That's a lot. And don't forget that you can always use custom machine types. So if our standard templates don't necessarily work for you, you can sit down and choose exactly what sort of CPUs and memory you need for those machines. And now you can just have more CPU and more memory. 

FRANCESC: I wonder, so if you can go up to 96 CPUs and then you can add I don't know how many GPUs and then all of this memory, what would you do with a machine so big? Like, I really don't know what. 

MARK: Things. 

FRANCESC: Like play a game? 

MARK: Yeah. 

FRANCESC: Probably. Yeah, yeah. 

MARK: Yeah. 

FRANCESC: Probably a game. 

[LAUGHTER] 

Cool. And then our last cool thing of the week comes from the community, Demi Ben-Ari. He wrote a Medium blog post on what is Cloud Dataprep and how to use it to prepare your data before doing any kind of big data processing. It is very cool, and it is covering a product that we have not really talked about, Cloud Dataprep. And you know what? We actually have planned this already, and we will have an episode coming up soon with the product manager from Cloud Dataprep. 

MARK: Yep. And thanks to Demi, especially because he's a GDE as well. 

FRANCESC: Yep. Google Developer Experts, you all rule. 

MARK: Yes. Awesome. Well, Francesc, I think it's time to go talk to Andrew and Graham all about this new Sydney region. 

FRANCESC: A conversation with three Australians? OK. 

MARK: Absolutely fantastic. 

FRANCESC: Let's go with that then. 

MARK: So I'm very excited to yet again surround Francesc by a bunch of Australians. We have podcast alumni Graham Polley and one of his compatriots Andrew Walker joining us today to talk all about the region that has recently opened up in Sydney, Australia, and how that's changed things down there. 

Before we get stuck into that, though, how are you both doing? Thank you so much for joining us. 

GRAHAM: I'm doing great. It's Graham here. It's great to be back on the podcast since last time. 

FRANCESC: Yep. Thank you for coming. What about you, Andrew? 

ANDREW: It's great to be on my first podcast. Guys, thanks for inviting me. 

MARK: Excellent. Before we get stuck into the topic at hand, why don't we get some background on both of you? Graham, you've been on the podcast before. So Andrew, please go first. Tell us a little bit who you are, what do you do, what company you work for. 

ANDREW: I'm the founder of 3wks. We specialize in building stuff for mostly enterprise customers using serverless technologies, so that's usually a combination of like web, mobile, gadgets, big data quite often, machine learning. We've done 190 projects on GCP now, usually with App Engine at the middle. But we often use those other things like the machine learning API and BigQuery. 

Despite the name, usually we work on big transformation projects that have failed a couple of times before. The name, in case someone asks, is just about breaking it into small chunks. 

FRANCESC: Cool. What about you, Graham? Remind our audience who are you and what do you do. 

GRAHAM: Happy to. So I'm Graham Polley. I'm a software engineer based out of Melbourne, Australia, and I work for Shine Solutions. Shine Solutions are a enterprise digital consultancy. We've got offices in Melbourne and Sydney now. And I'm also an official Google Developer Expert for Google Cloud. Still the only one in Australia for Cloud, so that's quite an honor to hold. And, yeah, I work a lot with data and analytics on the Google Stack, so primarily around BigQuery, Dataflow, Dataproc, and the ML APIs. 

MARK: Cool. All right. So we thought we'd get the two of you together, as it's something we haven't really done before. Recently, there was a new Google Cloud Platform region that has been brought up in Sydney, Australia. And I sort of wanted to talk about the impact that has had for both of you in the areas in which you work in Australia. 

I thought I'd start maybe by taking a step back a little, and one of you can choose-- I don't know which one-- but I want to explain the current internet situation in Australia. It's a little less than ideal for a variety of reasons. Who wants to take this one? I just want to give it some background there. 

ANDREW: Yeah. Look, I'd love to do that. So I guess the biggest thing about Australia is our remoteness. People who are pretty closely connected like in Europe or America are, I guess, used to having high speeds of connectivity between point A and point B. So for the last 10 years, we've been dealing with round-trip times to either the west coast of America or somewhere up in Asia or somewhere in Europe. So we've had to work around that. 

And I guess the second thing is that our infrastructure here in Australia is not great. In the lead-up to the conversation, Graham was saying that he is actually connecting over 4G just to make this podcast, and I'm doing exactly the same thing because my internet connection at home is just so poor. So that's meant that we've had to work around things a lot for the last few years while we build solutions for enterprise. 

FRANCESC: Interesting. So you were mentioning that in your houses the connectivity is not that good, but what about the office? As a developer, is this something that changes the way you write code, specifically cloud solutions and stuff? 

ANDREW: So we do everything in the cloud. We're an assetless company. We're a serverless company. So connectivity is huge for us. Normally at offices, it's fine. I say normally. We'll get outages during the middle of the day sometimes at our office, and we all switch to backup on 4G. So as a company, our biggest expense outside airfares and entertainment is actually internet connectivity. 

MARK: So I guess then, especially with you Graham, you work in big data sets. You're not pulling down terabytes of data backwards and forwards? 

GRAHAM: Well, no. A common pattern that I normally employ is actually bring the code to the data and not the data to the code. So using tools and services like BigQuery-- where the data is stored currently in the US-- writing the SQL and UDF functions for that is a much better pattern rather than downloading massive data sets and working locally or spinning up other VMs and working there. 

One of the big changes for me with the new Sydney region is, although BigQuery is not there yet, we have Dataflow in-region, so customers are a lot happier now. They're closer to the data. They feel more secure. So that data can be processed and stored locally in Australia, and that's fantastic. So we're spinning up Dataflow pipelines in-region, and that's a game-changer for us because it makes those conversations a lot easier to have with enterprises, especially their security operations and privacy, because they feel more comfortable that the data is now stored locally. 

FRANCESC: So I'm curious about what you were mentioning about locality of data. Is there specific Australian policies that make it that you need to have the data stored in the country, or is it more about people just feeling more comfortable about it? 

GRAHAM: There's actually laws, and it's around data sovereignty. So if any of the data has PII information-- so Personally Identifiable Information-- that can't be shipped offshore. That has to stay in Australia. And that's a challenge for us, and that's always been a challenge for us in the past. So that's what I mean with the new data center, or the new region coming online in Sydney. It makes those conversations a lot easier. 

We've worked around that in the past by playing caching to the data. So that means we don't have any plain-text PII in our analytics, inside our data. So that's gotten us around those challenges with security and privacy in the past. So having the new region now in Sydney, and especially with Dataflow, it just means that those conversations are a lot easier to have because the data is stored locally. 

MARK: Andrew, have you had similar situations where before the region spun up there were certain workarounds you had to put in place? 

ANDREW: Yeah. Our experience has been slightly different. We do less work in government and finance mainly because they have some very specific legislation, specifically in PII, that holds them back. We've had less constraint because we avoid those in the main, though we have done things like ministerial briefing systems in Google Cloud before. 

So really, the core issue for us has typically been away from sovereignty and more towards privacy. And with privacy in most sectors, it hasn't been such a large theoretical issue. But actually, the theoretical issue is sort of irrelevant. Having data in Australia just means you don't have six months of lead time to win a job. That's as simple as it gets for us. Having the region just means there's 10 conversations with 10 separate groups of people that we just don't have to have because they're not confused. 

So I can give you probably three examples of projects that we're doing recently here in Australia-- one for a big utility company, for Fieldforce and field engineers; another one in retail; another one, actually ironically, in the finance sector-- all of which have kicked off a lot more quickly because we haven't had to have those discussions around privacy in particular. 

And we've had to employ the same sorts of issues even in web solutions that Graham was talking about. So we've had to make sure that we've spent a little bit more time on-premise preparing data before it goes out, create some web services for things that we don't want to store in the cloud, and so on. And all of those just disappear for everything except big data. That whole problem has just gone away for us on App Engine. 

FRANCESC: Nice. So I'm wondering now, you mentioned that one of things that have been solved is the locality and the fact that the data doesn't leave the country, which solves a series of problems. Is there any other things that the fact that Google opened a new cloud computing region in Australia has fixed for you? 

ANDREW: Yeah. A good example of this is a big project we did it for one of the media players here, where we opened up all of the content for basically all of their digital and actually newspaper estates right across like 150 estates. Back in those days, latency was a really big issue for us. We've been able to avoid latency as an issue when it comes down to user-facing apps on App Engine, because the latency of sort of like a quarter of a second or a fifth of a second wasn't something that really had to be taken into account for user experience. 

But when you're building an API, you need like 30-millisecond, 50-millisecond response times. So we've had to use Amazon in situations like that in the past. We do that project again today, and I get to do that on GCP now. 

GRAHAM: Yeah. I think the latency, the round-trip latency, is an important one as well. So on average in the past, I'd be getting maybe 250, 300 milliseconds. And now I'm seeing 10 to 15 milliseconds, which is fantastic. So yeah, do you guys know the GCP ping website? It's really cool. 

GROUP: Yes. 

GRAHAM: Yeah.The GCP ping, And now, for the Sydney region, I'm seeing even sometimes below 10 milliseconds. It's fantastic. 

FRANCESC: Nice. That is awesome. So Andrew, you mentioned that you were using Amazon for some other things. And that is true. Before Google Cloud had a region, Amazon was already there. So why using Google Cloud? Is there any benefit or advantage that means you use it? 

ANDREW: Yeah, absolutely. Look, we're fast becoming 100% GCP, especially with the region opening up in Australia. You know, we're actually not resellers. We make our money out of building stuff for people. So it really comes down to money. We had a client on stage at the Google Cloud Summit explaining just how much cheaper it is to build on GCP, and it really just comes down to serverless. 

GCP is genuinely serverless, whereas Amazon never really has been, not in a practical sense. They have their equivalent to Cloud Functions, Lambda, but they don't have an equivalent to AppEngine with the richness of services. It's just such an exciting technology. And I do also agree with Graham that BigQuery and supporting services, it's got to be the crown jewel. 

We generally move at 50% faster than anyone else. We usually deliver somewhere between a quarter to a half of the budget of our competitors. And 50% of that speed advantage comes just from serverless cloud, and that's really what GCP is for us. We have the whole deploy on Monday thing, so we're not spending four weeks as we have done on some of our Amazon projects, just waiting and having discussions around infrastructure. It might be in the cloud, but you're still engineering it, which is really painful have to get back to that from a serverless world. 

The scale-to-zero thing is quoted by customers who've got 200 environments. The fact that so many of those scale to zero makes a massive operational cost impact. We're talking in some cases 10% of the cost of the Amazon infrastructure. 

So these things make a massive difference. And I guess one final thing that gives a huge, big difference in development is the local emulation on the SDK. So the ability for a developer to run locally without having to be their own DevOps person, without having to set up Tomcat, without having to set up MySQL on a local machine is really hard to overestimate. It's such a phenomenal thing and one of the key things that brings us back to App Engine every time. 

MARK: Out of curiosity-- because I'm actually surprised Francesc hasn't asked-- Andrew, what language are you writing on App Engine? 

ANDREW: Haha. So we write in Java. We're not particularly wedded to Java, but we choose one language across the company to give us that scale. We like type safety, so we've chosen Java. And that killer feature of-- I think it's about three languages that support it-- of having the local emulation, 100% local emulation, even of task queues, of all the key elements of the things that we're using on an everyday basis. 

So one day, we'll probably move to Node as a backend when we get type safety in and that works well for us. But for the moment, most of the projects we do are in Java. 

GRAHAM: I think another thing worth pointing at is per-second billing. That's huge. That was announced last week. So we now have per-second billing on Google Cloud Platform. 

FRANCESC: Yep. 

GRAHAM: That's going to save our customers a lot of money, especially for me writing Dataflow jobs and batch pipelines. That saves our customers and clients a lot of money. It's fantastic. 

FRANCESC: Cool. So Graham, something you mentioned a couple or even a bunch of times was the fact that there's no BigQuery. So let's talk about that. 

GRAHAM: I love talking about BigQuery. 

FRANCESC: I know, I know. So tell us a bit, not only like why you want BigQuery-- I assume that yeah, BigQuery is important-- but since BigQuery is not there but you are a Google Developer Expert partly because all of the jobs that you do BigQuery, what is your experience using BigQuery from a region that doesn't have it yet? 

GRAHAM: OK. So using BigQuery is a no-brainer. It's just a phenomenal product. And Andrew touched on it already. For me-- and I think Andrew will agree with me-- it's the jewel in the crown for Google Cloud Platform. There's no product like it. It's the speed at which you can grind through data. It's the scale. It's the ease of use. It's got a good REST API. It's now got standard SQL. It's just a fantastic product. 

We've been using BigQuery since 2012, 2013, so quite a few years. And we've been in at Telstra, which is Australia's largest ISP and telco. And we've worked around the issues of not having BigQuery in-region-- and I touched on this earlier-- by hashing a lot of the PII information or actually just stripping it out completely. And that keeps their security and privacy teams happy. 

There's another little trick that you can do, and maybe not a lot of people know about this. You will take a hit on performance, but what you actually do is you can still store your data locally. So what you could do, because we have the region in Sydney, you could store your data in GCS-- so locally, in-region-- and use federated sources in BigQuery because BigQuery does everything in memory. So it's going to pull that data, churn through it in memory in either the EU or the US, but that data is not stored locally. So it's only being processed offshore. 

Now, whether that gets through security constraints and it's something that enterprises are comfortable with, I don't know yet. I haven't tested it out with large enterprises yet, but it's a little trick that maybe people can employ to get around those issues. 

But I think the massive benefit would be getting BigQuery in-region. So the benefit there would be a lot more enterprise and government-end customers would be willing to adopt BigQuery into their workloads if they knew it was in-region. And that again comes down to having PII. It's all about PII. And if it was in-region, they would be a lot more comfortable with that. 

So fingers crossed. If we can build enough use cases and show Google the value of BigQuery in-region, then maybe it will come online in the near future. So I'm holding out for that one. 

FRANCESC: Everything I can say is that the product managers for BigQuery, they do listen to the podcast, so-- 

GRAHAM: That's good to hear. That's good to hear. 

FRANCESC: Yeah. 

ANDREW: So guys, I wouldn't mind also adding a little bit to that. 

FRANCESC: Yeah. Go for it. 

ANDREW: I would agree with everything Graham says. I love BigQuery for the bigness of BigQuery. I think one of the other strengths of the platform that gets overlooked a lot actually is that-- we have this phrase in 3wks that says serverless means Monday. The fact that I can get the stuff up and running and literally get like a terabyte of data up on Monday morning and incorporate this into a solution, into some AIML, even just the simplest thing just treating it as a reporting engine is amazingly cool when you can stand that thing up-- and it's been stood up in fact for you as just part of your project, and it's immediately available to your project. 

It's also easy to underestimate that. So normally, if I'm having a conversation with someone about how to report on something, again, it's a binary thing. It's not oh, it will add a couple of days. If there's some non-serverless element, then it's going to months. It adds like two months to talk about it, two months to agree on something. So the fact that we use BigQuery by default as our standard reporting engine means that we can provide a whole bunch of functionality around, say, a mobile solution or around a web-based solution that you wouldn't be able to do if you're having to stand up a local or even a partially-local solution. 

So I would also say that that is a big factor for bringing BigQuery to Australia. At the moment, if I do have to work around things, if I do have to process data in some way, if I have to remove keys internally, I immediately have to involve a whole bunch of people who are resource constrained. And as soon as I do that, I'm into months. We had a research project at a university where we just had to make a small change exactly like what Graham was describing, but we had to wait for a team of people to do that internally. And it took literally four weeks just to talk to them. 

So that whole serverless means Monday thing I couldn't overemphasize. It's so cool being able to stand it up immediately. We write code. We deploy Monday. We deploy Tuesday. Customer is using it on Wednesday to do real reporting. 

And I think the final thing there is the Data Studio. As Data Studio matures, that is going to be such a cool tool for us and for our clients. 

MARK: Nice. So I guess looking forward, I'd be kind of curious to hear, now there is a region in Sydney, how has that changed the plans for what you're planning to develop sort of looking forward? 

ANDREW: The biggest change for us is that, if I can put it really bluntly, is we're going to let our partnership with Amazon lapse. Been doing less and less work, and since the Sydney region came on, it's hard to imagine a situation where we would put our hand on our heart and say that we're doing the right thing with our client's money by doubling the budget. I mean, that's literally what we're going to be doing, right? 

So for us, the most fundamental change is that we're going to sort of become de facto, until there's another serverless offering like App Engine and the supporting tools. So that's part of it, but the other part is that we're going to go after some of the clients that we weren't that excited about. 

And I think government is a good one that Graham mentioned. We've done some great working in government, but they've just been, I guess, scared of the cloud. And in some cases not rightly so, but it doesn't matter. They're still scared. So that makes a big difference for us in terms of the sectors that we're going after. Government comes back onto the radar for us. 

MARK: And you, Graham? 

GRAHAM: Yeah. For me, at least, and for working for Shine, I can see the momentum growing now. So it's really gaining traction, especially with the new region coming online. There's a lot more interest in Google Cloud Platform. The commitment that Google have offered for the partner ecosystem, we can see that that's starting to build out. And GCP, it really offers some compelling services to Australian customers that you don't get on AWS. 

We are platform agnostic, so we work on both platforms, but the differentiator that I see as a Google Developer Expert is definitely the data and analytics side of things and the machine learning and AI on GCP. So absolutely, it opens a lot more doors for us in terms of we can go after big enterprises and government-end customers because we don't need to have those hard conversations with security teams about data being shipped offshore. We can now say it can be stored in-region, in Sydney. 

So look, it's an exciting time. There's a lot of potential for Shine-- more customers-- and we're really, really excited about it. 

FRANCESC: Cool. Well, we're kind of running out of time, but is there anything else other than the fact that you want BigQuery in Sydney? Anything else that you'd like to add? 

GRAHAM: Don't forget Cloud Functions with BigQuery. 

FRANCESC: Oh, OK. 

ANDREW: And the ML APIs. That would be cool. 

GRAHAM: I think one thing maybe give a plug for is Melbourne is having its first-ever Google DevFest in October. 

GROUP: Yeah. 

ANDREW: So we're really excited about that. Mark, I'm going to see you there, right? You're going to be [INAUDIBLE]. 

MARK: Yes, you are. Yeah. Booked my flights and everything. 

GRAHAM: Brilliant. I'll be presenting, too. I think Andrew is sending some of the guys from 3wks along. They're going to be showcasing some stuff. And look, that's another indicator of how GCP now is really getting attention. We've never had a DevFest in Melbourne. This is the first one. And it's a really exciting time. 

FRANCESC: I guess it's also important to mention that you're also involved with a Google Developers Group Cloud in Melbourne. 

GRAHAM: That's right. So I'm one of the co-organizers of GDG Cloud Melbourne. The meetup, we spun that up about three months ago, and the growth is phenomenal. So we already have, I think we're touching on 500 members already after just three months. And we've got some great talks, great presenters. We're getting a consistent turnout at the meetup. So look, it's really, really exciting. And getting Googlers to come and speak and talk about Google Cloud Platform, it's great for me. It's great for the community. 

And I'm seeing it firsthand. I'm really seeing the community starting to flourish now around GCP, and that's a really great thing to see because I've been working on GCP for four or five years now. And it was a little bit lonely and quiet at the start, but now it's changing. And I really think that's down to the new region as well. It's fantastic. 

MARK: Andrew, do you have anything else to add? 

ANDREW: Yeah. I would echo those sentiments. Actually, Graham has encouraged us to create the Sydney Cloud meetup for the Google Developers Group, which we're in the process of doing. But I would say, yeah, look, five and a half, six years' worth of experience on App Engine and the supporting technologies, I've never seen as much interest as I have in the last two, three months. As well as the local region opening up, I think it's also fair to say that Google has been putting a lot more effort into this region themselves-- more people, the Cloud Summit recently has made a big difference. 

And to put that in a fairly simple way, we traditionally would have a new developer start at 3wks, and they hadn't had any real experience. They hadn't even deployed an app onto App Engine because it's unusual. They're used to using local tools on their local machines. And when they first look at it, it's like, OK, I'm not sure what this thing is. 

But recently, we've been getting people through the interview process who have had that experience, and I put that down to the fact that there's a Sydney region. There's excitement around it, and there's energy being put into it from Google. So we're really looking forward to being part of the community here in Sydney and also in Melbourne. 

MARK: Cool. Well, Graham, Andrew, again, thank you so much for coming in and hanging out. Always good to have more Australians. I really appreciate you both taking the time to talk to us today about the Sydney region and what you both do at both the companies you work at. 

ANDREW: Thank you, guys. 

GRAHAM: Thanks, guys. 

FRANCESC: Thanks so much to both Andrew and Graham for taking the time today to talk a little bit about all of the things that have changed since there's a new region in Sydney, and also for sharing all of their requests, which are really good. I'm sure there's PMs listening somewhere. 

MARK: I'm sure. Yes. And thank you very much to Graham and Andrew. But continuing on, why don't we talk about our question of the week? This week, we are talking about TensorFlow. Now, I don't know a huge amount about TensorFlow, but we got a question in from one of our wonderful listeners-- I'm going to mispronounce his name most likely-- Simon Ackasheena, possibly? Acka-china? 

FRANCESC: I'm going to say it's Simone Akas-china or Aka-china. I'm not very sure, but something like that. 

MARK: I'll just somehow Australianify it, and it'll be fine. But he asks an interesting question about whether TensorFlow is good for general math computation, like doing linear algebra or even just adding stuff together. Can you use it for that kind of stuff, Francesc? 

FRANCESC: So the quick answer is yes. It totally makes sense because, if you think about it, machine learning is basically about matrix multiplication mostly, some functions on top. But it's mostly matrix multiplication. And linear algebra is also very often a matrix multiplication, or operations of a matrix, like dot product multiplication and decomposition and stuff like that. 

So it totally make sense that if something is good for a machine learning it should be pretty good for linear algebra. Now, the cool thing that I didn't expect is that, if you compare TensorFlow versus NumPy, TensorFlow is incredibly faster than NumPy. 

MARK: Interesting. 

FRANCESC: And I am not sure if it is because TensorFlow uses the GPU, which it does unless you're running it on a MacBook with the latest version of TensorFlow-- which, reasons. But in general, you're going to get incredibly faster computations just because you are using all the GPU. And I will add a link to a specific article where they compare NumPy to Theano to TensorFlow. Theano is a different library that provides similar things as TensorFlow really. 

And you will see that both Theano and TensorFlow are almost exponentially faster than NumPy for most operations. It is pretty amazing for things like finding the minimum or the sum and stuff like that. TensorFlow, basically the whole line is basically flat on how long it takes to find the sum of a matrix. No matter if it's 500 elements or 5,000 elements, it's still pretty much the same, which is really good. 

So if you're doing linear algebra, I'd say try TensorFlow. It is really simple. Most operations have the same name both in NumPy and TensorFlow, so it's not very hard to move from one way to the other. And at the end, you're going to get code that executes way faster. So definitely worth trying. 

MARK: Awesome. Well, that sounds good, and thank you for providing that answer. I learned something new today. 

FRANCESC: You're very welcome. 

MARK: That's good. All right. Cool. Are you headed off anyway special, doing anything cool, Just for Func? 

FRANCESC: So yes. By the time this episode comes out, I will have the second part of code review that I did on Just for Func. It's a code review for a URL shortener, which is the second part of that. And other than that, I am going to fly to London very soon. I will be speaking at Velocity Conf in London, which is us on Wednesday 18. 

MARK: Nice. 

FRANCESC: And then the day before, on Tuesday 17, I will be also speaking at the Go meetup in London. So that's Tuesday, Wednesday. On Thursday, I will be speaking at the Cloud Summit in Paris. And then on Friday, probably I'll just go and enjoy Paris because I think it's a beautiful city. 

MARK: Sounds like a reasonable thing to do. 

FRANCESC: Yeah. And then I'll come back to San Francisco, and then I'll go back to Paris for [INAUDIBLE]. 

[LAUGHTER] 

Yes, planning. What about you? 

MARK: What about me? So I will be heading off to Australia later this month, heading up there for the Melbourne International Games Week. I'll be speaking at Game Connect Asia Pacific but hanging out at Unite and PAX Australia. And just before that, I will be also speaking at the GDG Melbourne Summit, which I believe it actually sold out, which is pretty awesome. 

FRANCESC: Nice. So I think it is time to say goodbye. But before we say goodbye, there's a couple of things. I'm going to repeat this over and over from now on, which is please subscribe. That's more YouTube, but please, let us know what you think about the podcast. Find us on iTunes or wherever you are finding these podcasts, and leave comments, leave five stars. Haha. Leave a review. We will definitely check those out. So let us know what you think. 

And send us more questions of the week. 

MARK: Yep. 

FRANCESC: Specifically, we have an episode coming, episode number 100, which is really, really important. 

MARK: Yep. 

FRANCESC: We will be interviewing Vint Cerf. 

MARK: Oh my god. 

FRANCESC: Yeah very, very excited. So Vint Cerf, for those that don't know, shame on you. But also, if you don't know who Vint Cerf is, he's one of the so-called fathers of the internet. 

MARK: Yeah. 

FRANCESC: And basically, we're going to be asking all of the questions that you want to ask him. 

MARK: Yep. 

FRANCESC: So in order to send those questions, please tweet to us @GCPPodcast with the hashtag #askVint, V-I-N-T, for those that didn't know how to write their name. Right, Mark? 

MARK: I know how to write his name now. It's fine. It's fine. 

FRANCESC: So yeah, send us your questions. We're really, really excited. We have a bunch of questions already, but please keep on sending them. They're really good. 

MARK: I want to know where he gets all his amazing suits. 

FRANCESC: Uh, store. 

MARK: He's always so well-dressed. 

FRANCESC: He's incredibly well-dressed. He makes me feel like I should dress way better. 

MARK: Yeah. Absolutely. 

FRANCESC: So yeah, I'm so excited about that episode. But anyway, send us your questions for Vint with #askVint, or send us your questions for anything else because we're preparing more episodes. 

MARK: Absolutely. Well, Francesc, thank you so much for joining me for yet another week. 

FRANCESC: Thank you, Mark. And thank you all for listening. 

MARK: And we'll see you all next week. 

FRANCESC: See you all next week. 

{{< /transcript >}}