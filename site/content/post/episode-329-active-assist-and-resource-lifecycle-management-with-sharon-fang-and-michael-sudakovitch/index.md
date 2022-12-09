+++
audioDuration = "00:29:45"
audioFile = "Google.Cloud.Platform.Podcast.Episode.329.mp3"
audioSize = 41066552
categories = ["Uber", "Optimization", "Security"]
date = "2022-12-07"
description = "Guests Sharon Fang and Michael Sudakovitch are here this week to talk with Max Saltonstall and Daryl Ducharme about Google's Active Assist optimization portfolio and managing cloud projects efficiently."
draft = false
episodeNumber = 329
hosts = ["Max Saltonstall", "Daryl Ducharme"]
title = "Active Assist and Resource Lifecycle Management with Sharon Fang and Michael Sudakovitch" 
image="/post/episode-329-active-assist-and-resource-lifecycle-management-with-sharon-fang-and-michael-sudakovitch/images/hero/hero-EP-329.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/zf7h2d/episode_329_active_assist_and_resource_lifecycle/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

Guests Sharon Fang and Michael Sudakovitch are here this week to talk with [Max Saltonstall](https://twitter.com/maxsaltonstall) and [Daryl Ducharme](https://twitter.com/spoilerdiacre) about Google's Active Assist optimization portfolio and managing cloud projects efficiently.

Michael, tech lead at Uber, first employed Active Assist for the company in their security department, but they have since realized how useful Active Assist is in many areas of the resource management space. Responsible architects, Michael points out, continually evaluate their resources and patch, update, or remove as necessary to ensure proper security and optimize spending. Sharon helps us understand resource management further and how Active Assist helps teams find resources that can be changed or even removed for better spending, tighter security, and smaller carbon footprint.

Active Assist will even recommend the removal of entire projects that have become dormant. Michael talks in detail about Uber's use of Active Assist and how it helped them find vulnerable projects that could be removed for better security. Sharon highlights the effects of Active Assist on reducing CO2 emissions as well, as discontinued projects keep hardware running needlessly. As Michael and his team at Uber began taking advantage of all Active Assist had to offer, Google worked with him to answer questions, tailor resources, and take feedback to improve offerings. The future includes a portfolio expansion of resource life cycle management tools and helping larger customers take advantage of Active Assist at scale automatically. 

Together, Sharon and Michael tell us stories about the partnership and interesting findings and results of Uber's carbon footprint reduction journey.
 
##### Sharon Fang

Sharon Fang is a Product Manager for Google Cloud’s Active Assist, which aims to help users optimize their cloud operations with recommendations. 

##### Michael Sudakovitch

Michael is a Tech Lead at Uber’s Engineering Security organization, focusing on securing and optimizing Uber’s Multi-Cloud infrastructure.

##### Cool things of the week

* Solving internal search problems with Dialogflow [blog](https://cloud.google.com/blog/topics/developers-practitioners/solving-internal-search-problems-dialogflow)
* Automating self-service tech support with Tensorflow [blog](https://cloud.google.com/blog/topics/developers-practitioners/automating-self-service-tech-support-with-tensorflow)
* Introducing IAM Deny, a simple way to harden your security posture at scale [blog](https://cloud.google.com/blog/products/identity-security/introducing-iam-deny)
* Supporting healthcare delivery with cloud-native medical imaging [blog](https://cloud.google.com/blog/topics/healthcare-life-sciences/5-advantages-of-cloud-native-medical-imaging)
 
##### Interview

* Active Assist [site](https://cloud.google.com/solutions/active-assist)
* Uber [site](https://www.uber.com)
* Uber Engineering Blog [site](https://www.uber.com/blog/north-carolina/engineering/)
* How ML-fueled recommendations help developers optimize security, price-performance, and carbon reduction [blog](https://cloud.google.com/blog/products/management-tools/exciting-updates-on-active-assist-from-google-cloud-next22)
* Introducing Unattended Project Recommender: discover, reclaim, or deprecate abandoned projects under your organization [blog](https://cloud.google.com/blog/products/identity-security/google-cloud-launches-unattended-project-recommender)
* Reduce your cloud carbon footprint with new Active Assist recommendations [blog](https://cloud.google.com/blog/topics/sustainability/reduce-your-cloud-carbon-footprint-with-active-assist)
* 4 new features of Active Assist to help automate idle resource management [blog](https://cloud.google.com/blog/products/management-tools/new-features-unattended-project-recommender)

##### What's something cool you're working on?

Max is sorting out the final blog posts of the year, planning some secret Santa holiday festivities for the team, and prepping cranberry sauces.

Daryl is planning videos for the new year, including a video to help celebrate our 1 millionth subscriber on the [Google Cloud Tech YouTube channel](https://www.youtube.com/@googlecloudtech) and several videos to help people get the most out of Google Cloud IAM features.

{{< transcript "[MUSIC PLAYING] DARYL: Hi and welcome to episode number 329 of the weekly Google Cloud Platform Podcast. I am Daryl Ducharme. And I am here with my colleague, Max Saltonstall. Hello, Max." >}}

MAX: Hey, Daryl. This week we learned an important lesson. Projects come and go, but friends stay forever. I think that was-- no wait, that's not it. OK. Projects come and go, and the ones that we aren't using anymore should be deleted, right? 

DARYL: That sounds more correct, except we don't delete our friends. 

MAX: No, no, no, no, no, just the projects. So-- 

DARYL: Just the projects. OK. 

MAX: --resource lifecycle management, which is a big old bundle of words, effectively means, if you're not using this stuff, you should stop paying for this stuff. 

DARYL: Yes. 

MAX: And we heard from Sharon and Michael from Uber about how Active Assist within Cloud can help highlight for you projects that you're not using, so that you can reduce your cost, reduce your attack surface, and reduce the amount of energy you use on your public cloud resources. 

DARYL: Hey, Max. Have you heard any cool things this week? 

[MUSIC PLAYING] 

MAX: Yes, my cool things. I am really excited about two new blog posts both talking about nifty ways that we use AI inside of Google, one of them focusing on internal search. How do Google employees find the stuff that they need across all of our websites, drive content, internal resources, references, code, et cetera? What I love about that one is, they're using dialog flow, which is usually something we think of as a back-and-forth, maybe question-and-answer tool in our AI suite. But they're using that to take these search queries as questions and figure out the right answer to them, sometimes the best authoritative information we can give someone. 

The other blog post is also a nifty use of AI for an internal use case. This is around self-service tech support. Similar, right? People are looking for answers to problems. But here, it's something like, why won't my phone connect to my chat? Or what's going on with this weird error message? And to get people answers fastest, we want to just surface the right article so they can solve their own problems. And we're actually using TensorFlow to help connect the best resources with those queries as people are trying to solve their tech problems. 

DARYL: It's awesome. I keep being astounded at what we're finding uses for with AI. It just all these small things that it just makes life better. So, that's great. And I have a couple of cool things. We just recently have the general availability of our IAM deny policies, which those are really important for actually setting up guardrails for your-- or policies and your permissions for your roles and stuff like that because otherwise, you're going to come up with this complex scheme to manage all these permissions. And this makes it much simpler. And that's really cool that we've got that out there now. 

And also, because I am a big fan of health care, I noticed that Google Cloud and Change Healthcare work closely together to develop a solution for storing and managing medical imaging data in the cloud. This is really cool because it allows practitioners to be able to see these medical images on whatever types of devices they need to be able to use and get that information as quickly as possible, especially now that we know that some medical work needs to be done away from each other and virtually. So this helps that out a lot. So that's very exciting. And now our interview with Sharon and Michael. 

[MUSIC PLAYING] 

We've got two guests today joining us from Google. We've got Sharon. Would you like to tell us a bit about yourself? 

SHARON: Yeah. Hi, everyone. I'm Sharon Fang. I'm a product manager at Google Cloud, specifically working on Active Assist. 

DARYL: Great, thank you, Sharon. And our guest from Uber is Michael. Michael, let us know who you are. 

MICHAEL: Yeah. Thanks, Darryl. I'm Michael Sudakovitch. Hi. I'm a staff security engineer at Uber, working at the Uber's Engineering Security organization focusing on our multi-cloud security. 

DARYL: Wonderful, great. Nice to meet you. 

MAX: For folks who may not have used it before, what is Active Assist? 

SHARON: Activist Assist is a portfolio of intelligent tools and recommendations that help Google Cloud users optimize their cloud, so everything from security to optimizing your costs and even making sustainable decisions. 

DARYL: And you brought up security right there, Sharon. And Michael works on security with Uber. So Michael, just really quick, as somebody who's working on security at Uber, how much do you like Active Assist? Has it helped you out? 

MICHAEL: Yeah. I love it. We'll talk about it more in a bit. But I approached to Active Assist from a security perspective and discovered that we actually can utilize it not just for security but for other purposes as well. So yeah, I've been loving it so far. 

MAX: And this is part of a larger set of resource lifecycle management tools that, really, anybody who's got cloud workloads has to think about. So for folks who might be new to this term, why should they care about resource lifecycle management? Why is it important to the engineering team? 

MICHAEL: For every resource, we want to define when it starts, when it starts its life, and when it ends its life. And I think it really speaks to the culture of responsible ownership of resources. In contrast to this fire-and-forget approach, or if it's not broken, don't try to fix it, when it comes to your resources, I think we really should be good owners and maintain these resources. That is updating, them patching them, because, from a security perspective, attackers will never stop looking for vulnerabilities in your resources. So it's your job as an owner to also keep looking for ways to improve, to patch, to upgrade, and, when it's necessary, remove these resources altogether. 

DARYL: That's really good advice. 

SHARON: It's really awesome to see that Google Cloud cares a lot about helping its customers optimize their cloud, whether that be in saving costs, increasing their security, or reducing their carbon footprint because it just shows that Google really cares about doing the right thing for the user. And so wherever we can do more of that, we are trying to do. 

MAX: How can Activist Assist help people improve their resource management, their resource lifecycle, when they're using a public cloud? 

SHARON: So firstly, when we talk about resource lifecycle management, we're referring to helping users manage when they should get rid of some of these resources. So we know that cloud projects and resources go abandoned all of the time-- someone left the team, a test environment was spun up and it's no longer needed but it was kind of forgotten about, that sort of thing. And so this is where Active Assist can help. 

As I said before, we make recommendations to users to help them optimize their resources. And so when it comes to how to identify when these resources are idle or no longer unattended, we provide those recommendations to our Google Cloud users to help them optimize their cloud. 

MAX: So I log in to the Console. And it says, hey Max, you spun up this VM two weeks ago, two months ago, but it hasn't been touched for a while, and you're still paying for it every month or every day or every hour. Maybe you should spin it down, right? 

SHARON: Right, exactly. And I think the topic that we wanted to focus on today was specifically on unattended projects, so little bit higher level. And that's where we were able to really partner closely with Uber and help them with their resource lifecycle management. 

MAX: And that's awesome because the project can really contain all kinds of resources, some of which could be really expensive if you accidentally leave them running. 

SHARON: Right. 

DARYL: So with that said and looking at projects, obviously, this affects larger companies who have lots of different projects in the cloud a lot more. And Uber is definitely one of those companies who has lots of different projects, I'm sure, in the cloud. How did Uber come in contact with Active Assist and start using it? 

MICHAEL: So essentially, attack surface is usually defined as the collection of all the resources that can be exploited, penetrated, exploited by a threat actor. And of course, the more of these we have, the more opportunities we give attackers. So it's really one of the best security practices to get rid of unused, unattended resources. And that's what we wanted to do. We started looking at all of our projects and started to try to figure out a way of identifying these idle, unused, unattended projects. 

So initially, we used logs for that purpose. We just look at project logs to try and identify any activity. It requires quite a lot of filtering, filtering out some actions that were introduced by other actors, other projects. And so through this, we built a system that looks at the logs and eventually comes up with usually a decent enough recommendation saying, hey, this project is used, or, it looks like you need to find a new owner for this abandoned project. Eventually, we did meet with Google. And it turns out Google has been developing a service especially for that that avoids looking at logs or doesn't make us look at the logs, but rather just asks us to send an API call. And they give us an answer saying, hey, this project is that particular percentile of being used or unused. 

DARYL: You obviously went from your own system, trying to look at the logs, and then once you started working with Google and Google's Active Assist system, how much better would you say it was at not having false positives and stuff like that, that you could really count on the data versus what you thought you already had going? 

MICHAEL: Yeah, so since we switched to Active Assist, we did see quite a significant improvement. Before Active Assist, as I mentioned, we were looking at the logs. And that's quite an expensive operation, especially if you're looking for activity over the last, let's say, a number of months, right? So we just keep searching these logs over the last so-and-so days. 

MAX: Costing you time, people's salary, and probably money, and you're consuming services to parse all those logs, right? 

MICHAEL: Yeah, exactly. If you're trying to implement it with something that is a pay per use, like a cloud function, Google Cloud function, of course, you'll be paying for a lot of runtime. And also, as Daryl mentioned, it does every now and then come up with false positives. For example, if your GCP project is only utilized on Google Workspace, the logs might be on Google Workspace and you won't even see any activity. So that might create a false positive. 

And so now after switching to Active Assist, instead of us looking through the logs, we essentially let Active Assist do all the work for us behind the scenes. We just ask with an API call, hey, let us know how the project is being used over the last so-and-so days, and we'll get your recommendation. 

MAX: So just so I understand, there's just a whole host of problems with idle projects, especially if no one's ever checking in on them or looking after them. So this both helps you save money, helps you reduce the potential avenues of an attack, and is probably going to result in using less energy in the end because you're not keeping things running that you don't need, right? 

MICHAEL: Exactly. So we've been talking mostly from a security perspective, but also as you said, just from a cost perspective, you're just paying for all this unused, unmanaged resources. So why do that? And of course, from a sustainability perspective as well, if you're having all this hardware running behind the scenes, you're paying for the energy, all these, let's say, storage buckets that may not be needed. You're still paying for that storage. And it creates CO2 in the back end. So of course, we want to eliminate all that. 

DARYL: Absolutely. 

MAX: Don't want more CO2 in the back end. 

DARYL: Yeah. I know even here at Google, we've got a very big dedication to reducing emissions completely as much as we can. Sharon, what can you speak to that as far as Active Assist? I was looking at some stuff, and a lot of the focus was also on not just everything that Michael's already been talking about, how they've used it at Uber, but also about really showing you the effect that it's having on CO2 emissions and that kind of stuff. 

SHARON: Yeah. This recommendation was kind of cool because it was our first recommendation that had sustainability impact that we were explicitly calling out. And it's really awesome to work with partners like Uber who really validate our belief that every company should care about sustainability and lowering their carbon emissions. So it was just a cool side benefit that, in addition to helping your security posture, lowering your costs, you could also lower your carbon emissions. And it was really motivating that that is something that customers care about. 

So this is our first recommendation in the sustainability space. We are looking to build even more in the future. But the success of this recommendation with customers like Uber kind of validate the direction that we're headed. 

MAX: So what was the collaboration like for both of you in terms of working together and testing out some of these new features and making sure that we could build something that would help the teams at Uber while also something that would be applicable to a wide variety of cloud customers? 

SHARON: Yeah, so from our perspective, or from Active Assist's perspective, we first worked on this project as a Google internal prototype. So we tested this algorithm and the recommendations on our own workloads. But then it was really important for us to find external customers where we could test this on their environments and see how accurate it could be in a real-life scenario. 

And it's really important to Google Cloud as well because we have so many different types of customers and so many types of workloads. It's really difficult to tell the difference between what is on paper a project that has a low level of activity versus really, truly what is an unattended project that someone really doesn't care about. And so that was what the partnership looked a lot like, just going through the list of recommendations and polishing them and making sure that we were looking at the right signals. And we had a high degree of confidence to pinpoint which ones are unintended. 

MAX: So what was that collaboration like from your side and from your team, Michael? 

MICHAEL: It's quite awesome. Google, in general, has been very forthcoming in anticipating feedback and accepting feedback and then acting on this feedback. So I did have quite a few questions as I was building automation around this service, such as, hey, why this recommendation and not that? Can we maybe add an explanation? And Sharon's team accepted that feedback. And eventually, it resulted in a stable, mature product today with already a roadmap for future progress, both, I believe, on Active Assist's side and on our side as we integrate and build a mission around Active Assist. 

DARYL: Great. Well, both of you have actually spoke to something that really resonates with me. Both of you have spoken about the future. I'm really have been in enjoyment of the ideas of the future for pretty much my whole life. So Sharon, especially, what are we hoping to bring more to Active Assist? And yeah, and Michael, if you want to chime in with what you might like to see, that would be really fun. 

SHARON: Yeah, so in terms of resource lifecycle management, we are expanding our portfolio to help users identify more idle resources. We're also looking into ways to help larger organizations adopt more recommendations at scale, so giving them more aggregated-level recommendations so that they don't have to look at per-project recommendations but instead by their organization. And then we're also looking into automating some of those workflows so that they can apply recommendations at scale automatically, and that sort of thing. 

MICHAEL: From the Uber's perspective, talking about the roadmap for the near future, so, of course, we want to integrate with all the new features that are coming out for Active Assist, like Sharon said, idle instances, idle compute instances, or unused buckets. And on our side, as users of Active Assist, we want to either bring it closer to the resource owners so that we actually send them a ticket saying, hey, this is the recommendation and then this is what you should be doing, or ideally even send them a code, maybe a Terraform code, that will do it for them, or just accept recommendations if we see that they are transparent for the user-- removing the person from the process, something that we always try to do. So we built automation around that when it comes to idle project recommender. And we're also doing that now around the other Active Assist offerings. 

DARYL: So can either of you let us know about what have been kind of your findings as far as maybe some metrics or just interesting things that you did not expect during this partnership? 

MICHAEL: Yeah. Collecting and presenting metrics is always, I think, a good practice. It allows us to set goals, to observe trends, prioritize our efforts, see where we can get quick wins. So with regard to Active Assist, of course, we can collect metrics such as how many projects did we provide recommendation on? What's the percent of recommendations that were deemed as true positive versus false positive? 

But also we mentioned sustainability, and for sustainability, we get the metrics from Active Assist directly, as Sharon was alluding to earlier. But also, there's this cool Google service called Carbon Footprint. So we also look at that to understand our metrics and sustainability and carbon output across the entirety of the organization or all of the organizations, to collect the metrics and to see the trends. And of course, there's nothing better than to see a downward trend when it comes to CO2 emissions, and a downward trend when you see the cost. So that's been a big win for us. So we'll keep doing that. 

MAX: Everyone wants those "down and to the right" graphs for cost of use and energy consumption. 

MICHAEL: Exactly, yep. 

DARYL: Were there any things that you found really helpful as you were trying to better manage your carbon footprint reduction that you'd recommend other people either look into or consider as they're going down the same path? 

MICHAEL: Absolutely. So when you use Active Assist with the inactive project recommender, of course you might get quite a lot of recommendations. So we generally try to focus on the lowest-hanging fruits. What is the biggest project that has the most output of CO2 and is also in the lowest-usage percentile? So you have the highest degree of confidence. At the same time, you get the biggest win by eliminating this project. So we started with these ones. Then immediately, we got a lot of these removed, so that, of course, resulted in positive sustainability impact and reduction of costs. 

MAX: Were there any false positives that you had to sort of quickly backtrack along the way? 

MICHAEL: Really just a handful. And these are cases such as, oh yeah, there is this project, but it's only used once a year or so. So most of the time, it's not used, and of course, Active Assist might alert on that. But even for these projects, we might want to ask ourselves, does it actually make sense to have a project up and running all this time just if you want to use it once a year or so? 

MAX: Probably it doesn't. 

MICHAEL: Yeah. 

MAX: OK. Yeah, and most people are going to have some of those, whether it's like a finance tax thing or a compliance thing or audit or whatnot. So if you had your own magic wand, what would be that thing you'd ask Google to add to make your resource lifecycle management and security practice easier? 

MICHAEL: So luckily for me, I didn't need a magic wand. As I mentioned, Googleverse has been very helpful in getting our feedback. I would really love more people to know about this service, and, in general, the related Carbon Footprint dashboard, for example. But besides that, there's some incremental progress on both Active Assist and sister services that I would love to see, such as more customization options. One example is, I believe currently Active Assist has a static percentile of unused ability when it alerts users. So we would love to change that threshold. We would love to be able to change that threshold and say, oh, just only give me the five percentile or, I don't know, maybe 15th percentile. 

MAX: Got to kick it up to 11. 

MICHAEL: Exactly, yes. 

DARYL: Yeah, if there's number 11 dial, what's the point? So what can users expect next with Active Assist there, Sharon? What's already coming out here as we finish up the year and start off the next new year? 

SHARON: So, what users can expect next for Active Assist, recently we just launched a few recommendations related to cost and security for your Cloud SQL workloads. We also have new deprecation insights for GKE. And then we're always looking to expand our portfolio of recommendations across all product areas, as well as across all of our value pillars. So we talked today about cost, security, and sustainability. But we also have active investments in improving your performance and your reliability across Google Cloud, as well. So if there's anything that the audience would like us to build and would like help from Google Cloud in optimizing, we would love to hear. So please feel free to reach out. 

MAX: It sounds like you've got a pretty wide range of options there. How should people reach you if they want to make suggestions or feature requests? 

SHARON: You can reach out to your Google sales cloud rep. They'll make sure that your feature request gets to Active Assist. 

DARYL: And for the stuff that is already existing, where can people go to learn more about Active Assist and what's already there? 

SHARON: Yeah, you can just visit our website by Googling GCP Active Assist, or the link is cloud.google.com/solutions/active-assist. 

MAX: We'll have that all in the show notes. Perfect. And Michael, what about learning more about what your team has done? 

MICHAEL: Yeah, thanks for the question. So we have a tech blog. Just Google Uber Tech Blog, you'll see it right there. And there's actually a detailed blog coming that describes the architecture and design behind our automation that utilizes Active Assist as a source of truth. So soon to come, and you can Google it and read all about it. 

MAX: Awesome. 

DARYL: All right. Uber Tech Blog. Awesome. Well, we will make sure to probably get those in the show notes, as well. 

MAX: That's fantastic. Thank you both so much for coming on and telling us about this journey and about these awesome tools and what you've been able to achieve with them. It's really awesome to see, and I look forward to learning more. 

SHARON: Thank you so much. 

MICHAEL: Thank you. 

DARYL: Groovy. 

MAX: That was a great conversation. And I love how this capability within Active Assist as part of our recommendations can help folks like Uber and other companies save on their cloud costs, reduce their energy usage, and reduce their attack service. They actually have better security across their public cloud projects and their usage. It's a win-win-win. 

DARYL: Yeah, absolutely. And I loved how important the stuff that's non-obvious. You think from a business, it's just going to be about the money, but the fact that it's about the environmental costs and the attack vectors that really were the big selling point of this for Uber. 

MAX: Great to see. And I think it's also a nice reminder that we're always looking for ways to help people use the cloud, not just more but also more effectively. 

DARYL: Right. 

MAX: What kind of stuff are you working on lately, Daryl? 

DARYL: Well, as we come to the end of the year, I'm planning videos for the new year, including a video to help celebrate our one millionth subscriber on Google Cloud Tech, the YouTube channel, and several videos to help people get the most out of Google Cloud IAM features, which there's a lot more of them than I would have thought. So it's an exciting time to be making videos. 

MAX: It's a tricky area. I find a lot of companies, their security and just cloud governance challenges almost all boil down to, they're either not understanding exactly what IAM can do, they're not sure if it can solve their problem, or they just haven't read enough about how IAM can create the right constraints so that they can fit their cloud usage to their security and access needs. 

DARYL: Right. And I'm really happy to try and make this simpler for people to understand and use. So, what about you, Max? What are some cool things you're working on? 

MAX: Well, thinking about the end of the year, I am prepping some of the final blog posts that we're going to be scheduling on our "Developers and Practitioners" blog. I am prepping some cranberry sauces, since we're going to be doing a big family get-together. We're recording this just before Thanksgiving here in the US. And I am prepping some Secret Santa holiday festivities to celebrate and do some gift giving and some surprises for some of the other folks on our team. So I'm pretty excited. 

DARYL: Yeah. I'm excited about that too. It should be a fun time. I just want you to know that I always prep my cranberry sauce by getting out the can opener. That's about as much prep that I do for-- 

MAX: Yeah, yeah. I think that's legit. We're probably going to have a food processor, cranberries, oranges, and some maple syrup, as well as a couple ingredients I'm sure I'm forgetting, like some seasoning and whatnot. But I've got a couple of recipes. We almost always make two because there's some food allergies in the extended family. And so we want to make sure that everyone is safe and well fed. 

DARYL: So stay tuned for the new blog about Max's food blog. 

MAX: Yeah, it's a blog about my food blog. 

DARYL: Yeah. 

MAX: Because the food blog doesn't actually exist. So it's like a meta-imaginary blog. 

DARYL: Right. That if you had written a food blog, this is what you'd be writing about that blog. 

MAX: Yeah. It's sort of like a reflections. Almost a thought experiment, if you will. 

DARYL: Yes. 

MAX: It's like the shadow cast on the wall if a food blog went in front of Socrates' fire, or is it Plato's fire? 

DARYL: I'm not sure which one it was, but I know what you're talking about. 

MAX: Well, thank you all for listening to this hilarious episode. And we look forward to making more and talking more and seeing you all, hearing you all next week. 

DARYL: Yeah. Have a great week. 

[MUSIC PLAYING] 

MAX: Are you someone who's passionate about medical advances and medical technology? 

DARYL: Oh yes, verily. 

MAX: Ha, ha. Whoa, whoa, whoa, whoa. 

DARYL: Yeah. 

MAX: I think we've given the editors more than enough to work with. 

[LAUGHTER]