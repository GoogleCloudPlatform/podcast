+++
audioDuration = "00:34:28"
audioFile = "Google.Cloud.Platform.Podcast.Episode.116.mp3"
audioSize = 49607221
categories = ["Solution Architects"]
date = "2018-02-28"
description = "The Director of Solutions Miles Ward and Cloud Solutions Architect Grace Mollison join us to discuss Solution Architects - what they do and how they interact with Customers at Google Cloud Platform."
draft = false
episodeNumber = 116
hosts = ["Mark Mandel", "Melanie Warrick"]
title = "Solution Architects with Miles Ward and Grace Mollison"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/g6Z4HKiLX5n"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/80xca4/episode_116_solution_architects_with_miles_ward/"
+++

We have the pleasure this week of having the Director of Solutions for Google Cloud [Miles Ward](https://twitter.com/milesward) and Cloud Solutions Architect [Grace Mollison](https://twitter.com/grapesfrog)
join [Mark](https://twitter.com/Neurotic) and [Melanie](https://twitter.com/nyghtowl) to discuss Solution Architects, what they
do and how they interact with Customers at Google Cloud Platform.

<!--more-->

##### Miles Ward

[Miles Ward](https://twitter.com/milesward) is a three-time technology startup entrepreneur with a decade of experience building cloud infrastructures. Miles is Director of Solutions for Google Cloud; focused on delivering next-generation solutions to challenges in big data and analytics, application migration, infrastructure automation, and cost optimization.  He worked as a core part of the Obama for America 2012 “TECH” team, crashed Twitter a few times, helped NASA stream the Curiosity Mars Rover landing, put Skype back online in a pinch, and plays a mean electric sousaphone.  

##### Grace Mollison

Based in London, UK, [Grace Mollison](https://twitter.com/grapesfrog) is a Cloud Solutions Architect where she helps customers to understand how to apply policies to their Google cloud platform  environments as well as how to  architect and deploy applications on the Google Cloud platform. In her spare time she spends time attempting to teach her international team how to speak the Queens english!  Before Google Grace was a Solutions Architect at AWS where she worked with the AWS ecosystem and customers to ensure well architected solutions.

##### Cool things of the week

- We have awesome new intro and outro music. Did you notice?
- The thing is . . . Cloud IoT Core is now generally available [blog](https://cloudplatform.googleblog.com/2018/02/the-thing-is-Cloud-IoT-Core-is-now-generally-available.html) [site](https://cloud.google.com/iot-core/)
- JupyterLab is Ready for Users [blog](https://blog.jupyter.org/jupyterlab-is-ready-for-users-5a6f039b8906) [github](https://github.com/jupyterlab/jupyterlab)
- Announcing Google Cloud Spanner as a Vault storage backend [blog](https://cloudplatform.googleblog.com/2018/02/announcing-Google-Cloud-Spanner-as-a-Vault-storage-backend.html) 
- How to handle mutating JSON schemas in a streaming pipeline, with Square Enix [blog](https://cloud.google.com/blog/big-data/2018/02/how-to-handle-mutating-json-schemas-in-a-streaming-pipeline-with-square-enix)
- FAT* [livestream](https://fatconference.org/2018/livestream.html)

##### Interview

- Google Cloud Platform Solutions [site](https://cloud.google.com/solutions)
- Tutorials and Solutions [site](https://cloud.google.com/docs/tutorials)
- Machine Learning with Financial Time Series Data [solution](https://cloud.google.com/solutions/machine-learning-with-financial-time-series-data)
- Implementing GCP Policies for Customer Use Cases [solution](https://cloud.google.com/solutions/policies/implementing-policies-for-customer-use-cases)
- #87 Customer Engineers with Jonathan Cham [podcast](https://www.gcppodcast.com/post/episode-87-customer-engineers-with-jonathan-cham/) 
- [Google Cloud Next](https://cloud.withgoogle.com/next18/)
- Solution Architects are hiring! [careers](https://careers.google.com/jobs#t=sq&q=j&li=20&l=false&j=cloud solution architect&jcoid=7c8c6665-81cf-4e11-8fc9-ec1d6a69120c&jcoid=e43afd0d-d215-45db-a154-5386c9036525)

##### Question of the week

How do I get a Docker image into Minikube without uploading it to an external registry and then downloading 
it all over again? Is there an easy way to do this locally?

- Minikube [github](https://github.com/kubernetes/minikube)
- `$ docker save <image> | (eval $(minikube docker-env) && docker load)`
- Original references [github](https://github.com/kubernetes/minikube/issues/1341#issuecomment-344687279) [Stack Overflow](https://stackoverflow.com/questions/23935141/how-to-copy-docker-images-from-one-host-to-another-without-via-repository)

##### Where can you find us next?

Mark will be at the [Game Developer's Conference | GDC](http://www.gdconf.com/) in March.

{{< transcript "MARK: Hi, and welcome to episode number 116 of the weekly Google Cloud Platform Podcast. I'm Mark Mandel, and I'm here with my colleague Melanie Warrick. Melanie, how are you doing today?" >}}

MELANIE: I'm good. 

MARK: You're good? 

MELANIE: I'm good. 

MARK: That's good. 

MELANIE: I'm in the studio. 

MARK: You're in the studio. You haven't left me today. 

[CHUCKLING] 

MELANIE: I haven't left you yet. 

MARK: No. 

MELANIE: I'm back from New York. 

MARK: Any day now you'll leave me. It's fine. 

MELANIE: Back from New York. I had a really good time at the FAT* conference. And we talked a lot about fairness, accountability, and transparency. And we'll put a link back into our show notes for anybody-- 

MARK: Sweet. 

MELANIE: --who is interested in checking out all the videos we captured. 

But anyways, we're here to talk about other things today. We're going to actually interview two of our Solution Architects, specifically the Director of Solution Architect team, and one of the Solution Architects that's on the team, to learn about all the things around Solution Architects. 

So, yeah, we're talking to Miles and Grace later on. 

But first, we always have our Cool Things of the Week, and then we also have our Question of the Week. Our Question of the Week, to tease everybody, is, how do I get a docker image into Minikube-- 

MARK: Minikube. 

MELANIE: Yeah, something like that. It's a K. Anyways-- in Minikube without uploading it to an external registry, and then downloading it all over again. Is there an easy way to do this locally? 

That question, of course, coming from Mark, because he's working a lot in the space right now. Let's start with our Cool Things of the Week. 

MARK: Yeah, there's a bunch of cool things this week. Why don't we start with the fact that Cloud IoT Core is now generally available. If you're not familiar with Cloud IoT Core, it is our fully-managed service to help securely connect and manage your IoT devices at scale. That's all the buzzwords. 

MELANIE: Yes, that's all the buzzwords. And apparently, this general release is incorporating a few new features. You can now publish data streams from the IoT Core protocol bridge to multiple Cloud Pub/Sub topics, and you can simplify deployments. So check it out. 

MARK: Yeah, and we have a whole bunch of device partners and application partners as well. So if there are particular devices or application platforms that you need to be able to use, check those out. We'll have a list there in the blog post. 

MELANIE: Another thing we have for the week is that Jupiter Lab is apparently ready, in beta, and accessible for all users. And Jupiter Lab is actually coming out of the Jupiter Group. And Jupiter is based originally off of this notebook that's become very popular in the data science space in particular. This notebook allows users to create and share documents that combine live code with narrative text, mathematical equations, visualizations, interactive controls, and other output sources. 

It's really a useful tool. And so they built Jupiter Lab. And Jupiter Lab in particular is something that they're using as this interactive development environment for working with notebooks. So it is able to integrate with text editors, terminals, data file viewers, and other custom components, and allow you to basically do a more comprehensive workflow. 

Check it out. It's really interesting. And we're going to actually have a link where you can find out more information and figure out how to install it. 

MARK: Awesome. For another one, we announced that Google Cloud Spanner can now be used as a vault storage back-end. If you're not familiar with HashiCorp Vault, it's a really cool open source tool for basically managing secrets. It's very popular across Google Cloud Platform, as well as Kubernetes. 

This is kind of cool, because Spanner is a great way to have high availability across multiple regions, and have that as a back-end. So it enables a few things on Vault that are kind of neat, in terms of, like, transactional support as well, enterprise-grade security-- basically it uses the same security as Cloud Spanner, which is amazing --and it's also supported by Google, which is also nice. 

MELANIE: If you want to get started, you should download and install the latest version of HashiCorp Vault. 

MARK: 0.9.4, apparently-- at time of reading. 

MELANIE: Good to now. 

And then, the last thing we want to mention for Cool Things of the Week-- and this is something I know especially comes straight from Mark's heart on the gaming side of the world --there's a blog post on how to handle mutating JSON schemas and in streaming pipeline with Square Enix. 

MARK: Yeah, so this is an article written in conjunction with Square Enix. They're a game studio. They make a lot of really cool games-- Final Fantasy, Deus Ex, Nier: Automata-- I could go on for a while. But they talk about, basically, how they ingest a wide variety of JSON data across a wide variety of studios-- because they're made up of a variety of studios --and how do they handle different JSON schemas coming through, and how to deal with mutating JSON, and how to handle it when you have multiple people who are ingesting data through this pipeline. 

It's a really cute article that's also written in the style of, first you have, like, a hero, and then you have a character, and then they have to defeat a boss, and the boss is the mutating JSON, and it's really adorable. 

MELANIE: And it has a good diagram of the pipeline, as well as, they have a link at the bottom for those who want to check out more common usage patterns for Cloud Dataflow. Great. OK, Mark. Well, I think it's time for us to go talk with Miles and Grace. 

MARK: Let's do it. Today, I am ecstatic to re-welcome someone who has been on our podcast before, but also somebody new. We have Miles Ward, Director of Solutions for Google Cloud, as well as Grace Mollison, Cloud Solution Architects, coming to join us today to talk all about Solution Architects at Google Cloud. 

How are you both doing? Miles, how are you doing? 

MILES: I'm doing super, super good. It is a sunny day, and the clouds are out. 

MARK: Excellent. Grace, how are you doing? I didn't manage to mess up your name, by the way. 

[LAUGHTER] 

GRACE: Great. No, I'm fine. It's 8:30 over here in London. So I'm looking forward to having my hot chocolate before I go to bed. 

MARK: Very nice. Excellent. 

So we really want to talk to you both about Solution Architects at Google. What is that role? What do you all do? Before we do that, why don't you tell us a little about who you both are. Miles, why don't you go first? 

MILES: Sure. I'm an electric tuba player that got suckered into helping with technology. And my gig over the last four years here at Google has been engaging with our biggest opportunities, our most sophisticated customers, and helping them figure out how to solve problems with Google's tech. 

I've been doing public cloud for about a decade, and spent a lot of cycles helping some pretty high-visibility, high-criticality projects come to market. I spent a bunch of time working together with the kind of All-Star team in the Obama for America re-election group. So that team built some pretty incredible technology-- 1,800 virtual machines, 200 applications from scratch, in six months, with all volunteers. A whole bunch of fun project work out of that. 

And here at Google, we've been helping enterprises, and startups, and small businesses figure out how to use our toys, use our toys. 

MELANIE: Cool. And yourself, Grace? 

GRACE: Well, I've also been working with the public cloud for about 10 years as well. I started off doing consultancy with EMC at that point. Then I moved to work with AWS, where I was a Solutions Architect there. And then I ended up at Google, and I do some architecture work, working with customers, and with our wonderful CE team. And I also spent a lot of time teaching the rest of my team how to speak the Queen's English. 

MARK: Good on you. Something I can definitely get behind. 

MELANIE: So is tuba player something, Miles, that's required to be an SA-- to be a really good SA? 

MILES: We don't limit to 10 years. It's not a bad start. The cloud, from a technology standpoint, is growing and changing very, very rapidly. So actually, the number one skill we're looking for is a long history in learning new stuff. The platform is evolving so quickly that we've got to be able to keep pace. 

I mean, none of us were thinking at all about Machine Learning four years ago. And now half of the team is working in Machine Learning Tech and making sure the customers are able to capture opportunity there. So it's a pretty fun gig. 

MELANIE: Cool. The question actually was, is the tuba player part something that's a required part? 

[LAUGHTER] 

MILES: No, the audio is good. 

MELANIE: But that's a more practical answer to, what is involved in being an SA. Yes. 

MILES: We do not limit our definition of weird to including only tuba, but we do require weird. So that kind of structure is really important in our kind of evaluation of incoming folks. We've got a truly unusual motley crew. When we go out as a group, it's a funny-looking scene. 

So you've got people from-- you know, we have the guy who deployed a third of the servers behind World of Warcraft. And Dan has code that's running in the arm of the Mars Curiosity Rover. And we've got folks that rendered the movies that everybody watched, and folks that have helped the banks process trillions of transactions. It's a-- 

MELANIE: Wow. 

MILES: --it's a funky group of folks. 

GRACE: Yeah. And you've also forgot, Miles, about John, whose birthday is every single day. Not many teams have that. 

MILES: That's right. We have a person who has a birthday every day. And it really makes sure that we're in a constantly celebratory mood. 

MARK: Excellent. OK, so apart from being interesting and strange, at a high level, what is a Solution Architect? 

GRACE: So, I'm happy to take that. So-- 

MARK: Yeah, I think, Grace, you should take this, because Miles is not making any sense. 

GRACE: OK. We're a scaling function. I mean, basically, I spend every day of my working week scaling myself out of a job. So what that really means is the fact that I will work with customers on net neu and problems, things that our documentation may not quite have clear, so people can see the logical flow, particularly when you're blending a number of products. And I document that. We get it published, and I move on to the next thing, or I help people to actually understand, if the documentation isn't as clear as it should be, how they should be interpreting it. 

MELANIE: Nice. 

MARK: Cool, so if people-- I know I've seen solutions that have been posted on, like, the Cloud.Google.com website. Is that your team, Miles? Is that what you do? 

MILES: Yeah. 100% of the material that's at Cloud.Google.com/solutions is stuff someone from our team built. And a bunch of the technical documentation around the business comes from, or is inspired by, a lot of the pathbreaking work that we do together with customers. And that's exactly the model. 

Grace is right. She sort of maybe underasserts the degree to which a lot of this comes from direct engagement with customers. Like, Grace is working with some of our biggest, hardest opportunities, and when they get to a place where they're scratching their heads and we're scratching our heads, we sort of dive in together to find the answer, whether that's, there's currently no floating IP addresses available as a part of GCE networking. So how do you do a software application that depends on floating IP addresses? We do the research. And we dive in with customers, and do a bunch of experiments, and the result is a white paper that says, here are the four different ways you can work around that problem that we've seen actually work. 

And that kind of gap-filling and enablement, you can sort of fake it, and just sort of-- eh, this is probably how that would work. But when you do it together with customers, it's real, and tested, and tested by somebody who really needs the answer to work. So it helps us make sure that the guidance we give is something that's valuable. 

MELANIE: You've talked to a couple of the examples, but can you guys talk a little bit more about the kind of customers, and who the customers are that you're working with? 

MILES: Sure, I can provide a couple of fun examples. We've spent a lot of cycles with one of the biggest banks in the world, HSBC, in Grace's backyard. We've been working through helping them apply machine learning and our data platform-- so tools like Data Flow and Data Prep --to be able to digest the bank's data and perform better projections, better analysis. 

So one example that would be easy is, like, fraud detection. There's however many millions of dollars a day of fraudulent charges that come through that bank. And I have to do the guess and go, yeah, I bet you every other bank has that problem, too. So we worked together with this specific bank to help them build a fraud detection model, machine learning model, on top of Cloud Machine Learning Engine, using TensorFlow. And the output of that is higher performance than the current systems that they have. 

So they're implementing it in production, and we're going through and doing the work to figure out, can we turn this into a pattern, a solution that other companies would implement? Can we make it-- that pattern --easy enough that our product teams start to go, hey, maybe that should be a product? It's all a part of this lifecycle of discovering value for customers, and helping them get pieces built. 

Another easy example, you know, there was a pretty big emergency project with the folks at Evernote. They wanted to be able to move all of their systems over to Google Cloud in less than 90 days, right. So this is three petabytes of customer data, hundreds of independent systems. And we have a professional services team that works really hard to enable and do the grunt work of picking these pieces up. But there were specific implementation questions. How do I get a sharded MySQL to replicate over the wire? How do I make it so that we're able to tune for improved performance using Google SuperFast solid state disk? 

Those kinds of questions, when there's a blocker, when there's something we don't know how to do, folks from my team-- so that one was Brad came in, Brad Svee came in, and asked a bunch of questions, and was able to get down to a best practices implementation for their MySQL system that now we're replaying to other customers. So that's the model, is find these big customers, help them unpack, and then teach the rest. 

MELANIE: And how long do these types of engagements last? 

MILES: So it's all over the map. We have a lot of conversations where customers are really just looking for that first piece of guidance, right. We're maybe a little better version of Google. Let me Google that for you, right. Well, you know, maybe we couldn't find the doc before, but here is where it is, or this is generally this kind of best practice that you'd want. 

Some customers have hundreds of problems, thousands. And they can keep us busy. And they continue to push platforms. So we have some places where people have been involved for a long time. But generally we're looking at anywhere from a super-dense phone call, to a couple hours on a whiteboard, to a week of kind of a proof of concept, or a first implementation. 

MARK: So we've had some previous podcast episodes on talking to people, like, for example, like CEs, Customer Engineers, sort of account management side of things. How do you all differ from those sort of roles? I'll pass this over to Grace. Grace hasn't said anything in a little while. 

GRACE: We don't actually own any accounts as such. They tend to be owned by the Customer Engineers and the Account Managers. And essentially, the Customer Engineers gatekeeper us. They request our assistance, which is how it works. And we also work alongside PSO as well. 

So we kind of have their backs, if you like, to a certain extent, is the way I like to say it. So, as an example-- 

MARK: And what's PSO? 

GRACE: Sorry. As an example, the other day, you mentioned one of the solutions that I wrote, the GCP policies. 

MARK: Yep. 

GRACE: One of the CEs of a large American company saw that, passed it to their customer, and then the customer says, it would be really good if we could talk to the people who worked on that. So they got myself and the project manager who helped me work on some of that work, and we were on a call with them yesterday, discussing how they should approach things, and just talked them through how to use those papers. 

So that's great, because I often don't get a chance once it's been published to actually then talk to people who are right in the beginning of even looking at the documentation. So that was a really great experience. 

MELANIE: Nice. How do people actually reach out to you? 

GRACE: So, as I said, that was an example where the CE found the blog post, and sent it to the customer, and the customer said, it would be great if we could talk to you. It tends to be-- for me, personally, in the UK --it tends to be people reaching out to me, either via our project managers, particularly the area that I focus on, with security and IM. In Europe and the time zones, I tend to be kind of a first call, working alongside some of our specialist CEs. So we have some CEs who focus on particular areas. So we've got some security-focused CEs as well. And I work alongside those. So there's different avenues to get through to us. 

MELANIE: OK. And are there certain types of projects that you get asked to do that you would say are not a good fit for the Solution Architecture role? 

MILES: We're no good at making sandwiches. You have to say sudo first, and then all of a sudden we really like making sandwiches. What we don't want to do is something we've already done. That's the core, is we were trying to be at the front edge of identifying how customers can use our platform in new ways. 

Grace can go and engage with that customer who's thinking through how to apply policies to their business, but she's going to bring CEs with, and they're going to take a bunch of notes. And hopefully, the next time the next customer comes, they don't have to bring Grace along. The CE can handle it. That's where Grace was talking about with the scaling function, right. 

So it's not that there is any individual thing we don't want to do. We just don't want to do it 10 times. 

MARK: And so to flip that around, it's worth pointing out, I guess, if you go to the /solutions page on Cloud.Google.com, these are not solutions that were written in isolation. These were written for customers to be implemented, like, rubber-meets-the-road-type stuff. 

GRACE: Yeah. 

MILES: Yeah, exactly. There are so many production customers that sit on top of those patterns, that are following our guidance. That's the way the role is supposed to work. 

MARK: Do you normally engage with, say, a certain size of customer? Or is it a broad range, or a variety of industries? How does that sort of pan out? 

GRACE: I'll take-- what happens, because I happen to work a lot on the on-board and security side, and the complexities you see when you work with large strategic customers, I just tend to work with a lot larger, a lot more gnarly, enterprisey types. We've got guidance for sort of startups and greenfields, but because they're startups and greenfields, they haven't got the existing infra, all the issues there, and everything that you need to think about how you bring yourself to the cloud without basically breaking your business. 

MILES: The cool thing with our team is there's a lot of diversity in the background and skills. Cloud Platform's almost 60-something products at this point. Plus, you have to sort of know about all the hardware and software that there's ever been on the planet. So it's impossible to have coverage. 

So, like, if Grace spends a bunch of cycles on identity and security, and kind of enterprise setups, we have folks that have a bunch of gaming background, or a bunch of media background, or have spent a whole bunch of cycles with retail companies, right. So those types of groups have different problems. And we work to resolve issues at any size. 

So the threshold for us is not looking at who's the very biggest customer possible, but which is a customer that is ready to work together with us so that we can learn as much as possible. Sometimes those are little tiny companies that are out in the middle of breaking paths. So it's all over the map. 

MELANIE: Miles, with such a wide range of skills, how did you find the people that are on your team? How did you build this team? 

[LAUGHTER] 

MILES: We're about 78% referrals at this point. So there's a phrase, dorks can smell their own. So there's a lot of us that are old friends, and that have been working on these kinds of problems for a while, and we take the interviewing and recruiting process really seriously. When this group gets together, it's just a bunch of buddies on a couch. It's a super fun way to connect and hang out. And a lot of peers who have really seen high-scale stuff and high-stakes stuff. So we're getting better and better at finding folks that have the right attitude and have the right history of learning, even though they may be from a new set of skills that it's helping us cover new areas, that expansion is happening all the time. 

MARK: And are you hiring? 

MILES: Yeah, we're absolutely hiring. We've got a whole bunch of spots-- India, Japan, it's a global team. Because here in the US. if you're in Mountain View doing a startup and you want to talk to an engineer at Google, you have a lot of different options. And for a single product, often in cases you can get access to, over time, if you're doing interesting stuff and pushing the boundaries, you can get access to engineers that are working on the actual products. 

In Singapore-- you know, we have folks in Tel Aviv, in Korea, in Japan, in Stockholm now. And each of those places, it's harder to get access to an engineer. So Solutions Architects also serve as this technical point of escalation inside of the sales process, so that engineers in our remote territories have somebody that's at their level to talk with. And a lot of that ends up being us supporting the product management and product development exercise. 

MELANIE: How would I know I'm a potential Solution Architect? 

MILES: We hire on a Google system that-- they have a whole bunch of internal labels for this stuff --but the same kinds of operations people that get hired for the Google SRE roles tend to be a good fit for us. More of the questions about cloud have to do with how I make this thing work and keep it working than how do I develop a new application on top. We have great teams in developer relations and others that are helping our developer friends. This team tends to spend more time in operations land. It also tends to look for people who have a background in hands-on operations of either large-scaled on-premise infrastructure. 

So, like, we have an engineer who used to run operations for Concur. And that's all data center-based, but it's the same kinds of problems they're trying to solve as our cloud customers. So there's a lot of customer empathy that's possible as a result of that. 

So another dimension in that is Google Cloud is something that you boss around with code. And it's not the environment where if somebody is just exceptionally good at pointing and clicking inside of System Center, or vCenter, or something like that they're going to be the right fit. Our customers are asking us to help them automate, to help them instrument, to help them turn into a dynamic environment what has been static and hard to manage. So we do have a coding bar. We need people to be able to help not just explain solutions, but develop them. 

MARK: So this should segue nicely, hopefully. So I'm curious, I mean, you both work with a lot of customers. Directed to you, Grace, are you seeing any particular trends in terms of the help that customers are needing, or the sort of things that they're doing? 

GRACE: Yes. So as I said, that's how I've been able to produce some of the work I've done. Because I actually work very closely with customers, and you start seeing a pattern. Once you start seeing those patterns, you can actually then convert them into guides, and documents, and tutorials, and reference architectures. 

So, as an example, every customer wants to understand how they can actually map their job, their functional roles, to IM roles. That's something that you just need to learn how to do at the beginning. So I just say to people, step away from the keyboard. Think about your planning. Map those roles to your IM roles. And then you can start implementing it. 

Folks also want to understand how to automate things as well. So that's a very common question is, like, are they hybrid multi-cloud, do they want to use RSS solution like Terraform, or if they're all into GCP, then maybe they've use Deployment Manager. So it's helping them make those sorts of decisions, you know, and looking at the skill sets they've got already, and just bringing them on that journey, really. 

MELANIE: Grace, what do you enjoy most about the work you do? 

GRACE: I love the fact that, every week, I've learned something new. I also love the fact that I'm asked to work with customers, you know. So I have a lot of respect for our CEs, particularly, because they've got a hard job. And I love working with them. They are very collaborative. And I get up every day really enthused about work. 

MELANIE: I know when we both met before this, I had asked you, would there be anything else you would do other than being a Solution Architect. 

GRACE: And I said then, it's really, really hard to think of another role that fits me personally, and the stuff I like to do. And I think if I was put on the spot, maybe I'd look at doing something in DevRel, or maybe working in the PMO company. They're two roles that would fit, because I used to do a CE-type role at AWS, so I know how hard that is. I've done that, and it's, like, evolving. And at the moment, I really enjoy this job, and I can't see anything that rivals it. 

MELANIE: You like everything but Miles, right. 

GRACE: Oh, no, he's terrible. 

[LAUGHTER] 

MILES: There's this phrase that there are kind of two kinds of people in the world, folks that are entropy creators, and folks that are entropy destroyers. I think you can make a quick guess as to which side of that dividing line Grace and I usually land on. 

MARK: Awesome. I know you've published a lot of solutions. And maybe you can't necessarily name names, but what's been the most interesting solution that you've had to provide for a customer? Grace, we were just talking to you. Why don't you go ahead? 

GRACE: So, ironically enough, it's pretty much in the first six months that I joined, I was helping work with the IM team with regard into helping them get it to GA. We had no real knowledge at the moment. How was this going to work? How were customers going to interface with it? So that was a lot of talking to a lot of big customers who were able to give us some input. So people like Spotify, for example, provided a lot of input there. 

And then it evolved. So the latest set of docs, I would say, were the ones that I actually enjoyed the most, because it took some of that early work, and then it was blending it with lots of different things. So I looked at billing, and I looked at networking, and I looked at a cloud resource manager. And as I had all of these bits, and I've got to actually figure out a logical path to make it clear and easy for our customers. You know, so it was at the beginning and the most recent stuff are the two things I've really enjoyed working on, I think. 

MELANIE: So I've done consulting in my past, and I know one of the biggest challenges we were always up against was scope creep, and trying to keep-- especially customers --within the bounds of expectations and realities of time. I assume that's one of your challenges that you're up against in terms of this role. How do you usually work with that? 

MILES: I'll say that, because the definition of the team is relatively clear, that when a customer is blocked, either at the beginning-- I don't think this is possible on cloud --or at the end-- hey, you people said this was possible on cloud --when they get blocked and we don't know how to solve that problem, that's exactly when Solutions Architects get involved. And similarly, when they are unblocked, and they appear to be able to continue to move without our support and assistance, that's when we go away. 

So far, the scope creep has not been from the individual projects. Generally, people ask for relatively specific things, because that's the current long pole in the tent that they need resolved. But there's certainly a very small number of us and a very large number of customers, and so I think the actual creep is more about, can we put you at every customer, everywhere? And that's relatively complicated, because there's hundreds of thousands of them, and there's dozens of us. So the creep is internal. 

MELANIE: That sounds like a constant juggling of prioritizing. And what are some other challenges that you are working with, in terms of managing this team, Miles? 

MILES: My big job is an easy one. It's helping our folks continue to learn the new hard bits. It's really easy to-- and everybody does this --you find a place where you have expertise, you get relied on for that expertise by others, but the world of technology changes so rapidly that any amount of real experience and depth in a given area has value for about a decade. 

So we have some of our folks on our team that have been here for half that long. So all of a sudden you're going, well, you're halfway to having the experience that you had at the beginning be not worthwhile. Maybe you should learn some new stuff. So there's a whole bunch of training, and some of that is autodidact, people dive into whole pieces. Some of it is stuff that we help people through. 

In a lot of cases, following the Solutions Architect model, that's training that we go build. That's the best way we know how to learn. So we didn't have GCP 101, the most basic onboarding training materials to teach people how this stuff worked. And Grace had just started, so she wrote it. And now we have a training class, right. That was her way of figuring out how to run all this stuff. And that's why we like her. 

MELANIE: Well, and then off of the learning point, Grace, what are some things that you're excited to learn about in the future-- in the near future? 

GRACE: So I'm actually pivoting now to spend some more time with the Data Loss Prevention API, and I'm working very closely with the PM there. So I'm really enjoying that, because it's really fun product, and it's so underrated. It's just very, very powerful. And obviously all the things regarding PII and making sure that you can stop sensitive data getting out early, it's just a key tool. That's fine, and I'm also going to be doing some work with the stat driver team same as well. So it's still in the same area, but there's just new things all the time. 

MARK: Cool. So we're running out of time here, but before we wrap up, is there anything that either of you want to plug, or mention, or talk about before we finish things up here? Miles. 

MILES: We're in the middle of building some new-- and I'm pretty excited about --some new things to do at our big events, Next and The Global Summit Series. Those are great opportunities to connect with Solutions Architects. SAs are always there. And that's a great way to get, maybe, the 15-minute version of an engagement, where we can get on our big whiteboard that's got all of the architecture icons and systems. You can come and hang out with us, and we'll help figure out how to solve the problem that you've got. 

And so one of the things that we're working really hard on now is kind of an interactive environment for that kind of suctioning, a little bit of a game. So there will be more about that as it gets out and launched and done. We're still fighting over the name. But generally, I think the events series this year is going to be a lot of fun. 

MELANIE: Nice. 

MELANIE: Grace. 

GRACE: We're hiring, basically. I'd like to personally see more females join the Solutions Architect team. But to be honest, it was the same problem at my previous role. It's a fun job, and you should give it a chance. That would be my plea, because, you know, I really enjoy it, and I'm sure others would, too. 

MELANIE: Well, great. Thank you again. It really is great to talk to both of you. Grace, thanks for hanging in there so late for us to get you on the call. 

GRACE: That's OK. 

MARK: Awesome. Yeah, thank you to you both, and I really appreciate you both taking the time. 

GRACE: OK. Thank you. 

MILES: Awesome. Thanks a bunch. 

MELANIE: Thanks, again, Miles and Grace for coming on the podcast. That was wonderful to hear about what Solution Architects do, the fun stuff you guys actually do on the side, and yeah, I'm really glad you guys were able to join us. 

MARK: Yeah. It was a really great episode. Super-happy to hear, again, from people who help support our customers, and how they can interact with them if you are a customer. 

MELANIE: And to stress what they were saying in the podcast, they are hiring, so you should reach out. 

All right, Mark, let me ask you the Question of the Week: how do I get a docker image into Minikube without uploading it to an external registry and then downloading it all over again? Is there an easier way to do this locally? 

MARK: Yeah. So this is near and dear to my heart, being Kubernetes. So Minikube is a really nice tool for ringing a Kubernetes cluster locally. So usually what it does is it'll run a small virtual machine that has Kubernetes installed as a single-node installation. And that's really nice. 

The interesting thing is when you're like, oh, I built an image locally. How do I get it into the VM so that Kubernetes cluster can see it? There's a couple of interesting ways you can do it, one of which is you can actually build inside Minikube. There's ways of doing that. You can actually mount your code inside the VM. That's good. That works. But it means you might necessarily be double-building stuff. 

There's other options where I've seen people who have installed their own docker registry inside Minikube, so they can push to that, and then sort of pull down locally from there. But there's an even easier way, which I really like, which works if you're running a Linux terminal of any kind, which is you can actually pipe the docker image into Minikube, which is really cool. So if you've used Minikube-- and I'll put a link to the exact command --but if you've used Minikube, if you say, Minikube docker environment, it will set the docker environment up so that docker knows, oh, I'm not running locally. I'm going to push all my stuff there. 

And there are two commands, docker save, and docker load. So our docker save will take a image and put it into a file, or put it into a output stream. And docker load can take a file and import it, or take it from the input stream. So we basically just pipe it. So you do a docker save with the image you want, pipe it into an eval of the docker environment and then docker load. And then it pushes it right in. You don't need a local registry. You can build locally. And actually, it's really nice. I like it a lot. 

MELANIE: Nice. Well thanks for that, Mark. 

And one other question, do we have a new sound going on? 

MARK: Yeah, starting last week, thanks to our wonderful editors who put together our wonderful new intro and outro music. 

MELANIE: Apparently, we've had a few folks who've noticed it. So thanks for giving us a shout out and letting us know that you've been hearing it. 

And then last but not least, I'm going to mention, if you want to contact us, you can email us at hello@gcppodcast.com, you can reach to us on Twitter @GCPPodcast, you can also reach out to us on Google+ at +GCP podcast, at Reddit, which is also GCP Podcast, and on Slack. You can just request an invite to the Google Cloud Slack community, and join #podcastchannel. 

MARK: Cool. All right. 

MELANIE: All right. Mark, going anywhere in the next few weeks? Got any events? 

MARK: It's all about GDC still. 

MELANIE: Which is coming up when? 

MARK: Which is coming up. It's the 19th of March, off the top of my head. I'm pretty sure that's right. 

MELANIE: Fantastic. 

MARK: We're going to have a full day-- Google Developer day --with a bunch of different people speaking. There's booth sessions, we're having Meet the Experts at the booth. That'll be fun. We're sponsoring some parties. I'll talk about those, probably, next week. 

MELANIE: Great. 

MARK: All that kind of good stuff. So we'll definitely be around. Reach out. Come say hi. I'd love to meet you if you're there. 

MELANIE: No mentions for me for this week or for the next couple of weeks. Yeah, not right now. 

MARK: That's fair enough. 

MELANIE: More to come later. 

MARK: Cool. 

MELANIE: All right. 

MARK: Well, Melanie, thank you very much for joining me yet again on the podcast this week. 

MELANIE: Thank you, Mark. 

MARK: And thank you all for listening. And we'll see you all next week. 

[ARPEGGIATED AMBIENT SYNTHESIZER MUSIC PLAYING] 
