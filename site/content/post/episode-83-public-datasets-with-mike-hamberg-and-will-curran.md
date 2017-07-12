+++
audioDuration = "00:32:09"
audioFile = "Google.Cloud.Platform.Podcast.Episode.83.mp3"
audioSize = 46530852
categories = ["Big Data"]
date = "2017-06-27T01:07:49Z"
description = "Mike Hamberg and Will Curran join your co-hosts Francesc and Mark to talk through all the public datasets that Google Cloud Platform hosts for you on BigQuery and Google Compute Storage"
draft = false
#image="/images/post/prometheus.png"
episodeNumber = 83
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
title = "Public Datasets with Mike Hamberg and Will Curran"
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/3SH1atSVy8s"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/6k1l4k/episode_83_public_datasets_with_mike_hamberg_and/"
+++

If you have ever wanted to play with huge datasets - this is the episode for you! Partner Operations Manager Mike Hamberg 
and Program Manager Will Curran join your co-hosts [Francesc](https://twitter.com/francesc) and [Mark](https://twitter.com/Neurotic) 
to talk through all the public datasets that Google Cloud Platform hosts for you on BigQuery and Google Compute Storage.

<!--more-->

##### About Mike Hamberg

Mike works on helping Google teams and partners take raw data from the web and make it look beautiful and usable in BigQuery (and other platforms like Merchant Center).

##### About Will Curran

Will is a program manager in Google Cloud, focused on Data and Analytics partners and passionate about improving access to the world’s datasets.  
One of the programs he manages is the Cloud Public Datasets program.

##### Cool things of the week

- Google Cloud Platform expands to Australia with new Sydney region - open now [announcement](https://cloudplatform.googleblog.com/2017/06/Google-Cloud-Region-in-Sydney.html) [locations](https://cloud.google.com/about/locations/)
- Why We’re Moving to Google Cloud Platform [blog](https://bugfender.com/blog/google-cloud-platform-vs-amazon-web-services/)
- Story of a successful migration to Google Cloud Platform [blog](https://medium.com/meilleursagents-engineering/story-of-a-successful-migration-to-google-cloud-platform-6bc7fa0798e8)

##### Interview

- Public Datasets [site](https://cloud.google.com/public-datasets/) [bigquery](https://cloud.google.com/bigquery/public-data/)
- BigQuery [site](https://cloud.google.com/bigquery/)
- Google Cloud Storage [site](https://cloud.google.com/storage/)
- Reddit BigQuery [subreddit](https://www.reddit.com/r/bigquery/)
- TIL BigQuery [site](https://tilwbq.com/)
- Have a public dataset you want to make public, email [gcp-public-data@google.com](mailto:gcp-public-data@google.com)

##### Question of the week

I need better visualisation into my billing and product usage - what can I do?

- Visualize GCP Billing using BigQuery and Data Studio [blog](https://medium.com/google-cloud/visualize-gcp-billing-using-bigquery-and-data-studio-d3e695f90c08) [dashboard](https://datastudio.google.com/c/u/0/org/UTgoe29uR0C3F1FBAYBSww/reporting/0B7GT7ZlyzUmCZHFhNDlKVENHYmc/page/dizD) [demo](https://bigquery.cloud.google.com/dataset/data-analytics-pocs:public?pli=1)
 
##### Where can you find us next?

Francesc be running a workshop at [QCon New York](https://qconnewyork.com/) on Go tooling based on
[this video](https://www.youtube.com/watch?v=uBjoTxosSys), after that he'll be at [GopherCon](https://www.gophercon.com/) in Denver!

Mark will be hosting the [Playcrafting Playtest Night](https://www.playcrafting.com/event/june-playtest-night/) in San Francisco 
and speaking at [Google Cloud Summit, New York](https://cloudplatformonline.com/summit-NewYork-2017.html) with in July.

{{< transcript "FRANCESC: Hi, and welcome to episode number 83 of the weekly Google Cloud Platform Podcast. I am Francesc Campoy, and I'm here with my colleague, Mark Mandel. Hey, Mark. How are you doing?" >}}

MARK: I'm doing very, very, very well. How are you doing, Francesc? 

FRANCESC: I'm pretty good. It's been a long week, but you know, pretty good. Very excited about a very cool episode about public data sets. 

MARK: Yeah, it's super cool where we talk about how we host all these really large data sets for all these people to play with and do fun things with. 

FRANCESC: Yeah, and I've used some of them before. My favorite one is-- we have a lot of code from GitHub. 

MARK: Yep. 

FRANCESC: So you can do cool things with it, but it's not the only one. So we're going to be talking about a bunch of different ones that you can just go and use and have fun with them. And after that, we have a question of the week that is actually a question of the week whose answer comes from someone we interviewed in the future. 

[LAUGHTER] 

So at some point, we'll have him on the podcast. But for now, we have something that he proposes as a way to have a better understanding of your billing, specifically what goes where. So if you have seen the billing dashboard, it's not as detailed as it could be. So how can you see more? 

MARK: And with pretty graphs and colors and stuff. 

FRANCESC: Beautiful graphs, yeah. So we'll covered that at the end. It's going to be a pretty cool thing. It actually looks really awesome. But before that, we have, as always, we cool things of the week. 

MARK: Australia. 

FRANCESC: Yay, Sydney. What's E-N-Y? 

MARK: [LAUGHS] I wrote "Sydeny." 

FRANCESC: Oh, "Sydeny." 

MARK: It's a story back from the Olympics, like he is-- like, way back. That's showing how old I am. 

FRANCESC: It's like an internal joke from between Australian people? 

MARK: No, when Sydney got announced as the Olympics, and it was called "Sydeny." That was just because the guy had an accent. And it's just a very stupid joke. 

FRANCESC: That thing is only Australians care, but maybe there is some Australian listening to the podcast. Maybe they're laughing now. 

MARK: Maybe. Anyway, the important thing is that now we have a region in Sydney, which is a pretty big deal considering how far away from the rest of the world that Australia actually is. So latency really makes a difference. So we definitely now have a new region in Sydney that you can take advantage of right now. We've got a good chunk of our products available there. 

They're not all there yet, but we're working on some of the pieces that are missing. But especially if you use Container Engine, which I'm a huge fan of, as well as some of our other stuff, that's all sitting there and waiting for you to go. So I'm hugely excited. I'm hugely excited. 

FRANCESC: I mean, I would also be hugely excited because right now, like if you were in places like Indonesia, before, you didn't really have that much coverage. Now, you have Singapore on one side and Sydney and the other, and then Taiwan a little bit higher up. So now you start to be really, really, really well covered. It's pretty amazing. 

MARK: Yeah, no, super, super excited about that. And just you know, we keep growing and growing and growing, which I'm super happy about. 

FRANCESC: One more excuse to go to Australia. We have then two different stories that are really cool. They're successful-- otherwise it wouldn't have been here, I guess. A successful migration story to Google Cloud Platform. So one of them is how Bugfender migrated to Google Cloud Platform from Amazon Web Services. And it's really cool. I really like the graphics. I don't know if they someone working on them specifically or what, but they look really, really cute. 

And then on the other side, we have another story where we have a different company. This time migrating from on-prem to Google Cloud Platform. And the name of the company is, I think, MeilleursAgents. Because I think it's French. 

MARK: It might be French, or I could go with "Muellers." 

FRANCESC: MeilleursAgents means better agents in French. 

MARK: There you go. OK, cool. 

FRANCESC: I'd like to hear you saying this. 

MARK: No, I just ruined it then. I'm not going to do it again. 

FRANCESC: So, yeah, it's a different company, but a migration story from a different place. But again, successful. And I think that for many of our listeners, will be a definitely interesting story to read. 

MARK: Yeah, no, love it. I love both of them definitely, and they both come from different perspectives. And the one from-- I'm not going to pronounce it. The one, the real estate company that starts with M, because I'm going to ruin that totally. 

FRANCESC: [LAUGHS] 

MARK: They have great pictures to show how their architecture works and what they changed, what they didn't change going across from prem to Cloud. Yeah, they're both really good articles, well worth reading. 

FRANCESC: Yeah, it is really cool because it got to the detail on how like, OK, so how do we do it to have infrastructure that's good, and like on on-click deployments and stuff like that. So we're going to use Jenkins, and we're going to be using Ansible. Like, it gets in a lot of detail, so it is definitely worth having a look, especially if you're considering migrating to Google Cloud Platform, there's definitely lessons to be learned. 

MARK: All right, cool. So why don't we go get stuck into our public data sets with Mike and Will? 

FRANCESC: Sounds good. Let's do that. 

MARK: A huge thank you to the two gentlemen joining us today. We are joined by Mike Hamberg, Partner Operations Manager at gTech Feeds, as well as Will Curran, Program Manager at Google Cloud. Thank you so much for joining us today. How are you both doing? Mike, how's it going today? 

MIKE: It's going great. Glad to be here. 

MARK: Wonderful. Wonderful. And Will, how you doing? 

WILL: Coffee's coming along good. Glad to be here. 

FRANCESC: Excellent, excellent. It is a little earlier than we usually get up, but thank you so much for joining us. We are here today to talk to you about public data sets on Google Cloud Platform. But before we do that, why don't we just have a quick chat about who you are, and what do you do at Google? Will, why don't you go first? 

WILL: Yeah, I'm a Program Manager with Google Cloud up here in the Seattle office. And I'm focused on data and analytics partners. And I'm very passionate about improving access to the world's data sets. One of the programs I manage is the Cloud public data sets program. 

FRANCESC: Cool. And you, Mike? 

MIKE: I'm a Partner Operations Manager here in the Pittsburgh office of Google. And I work on taking data feeds and moving them around. So in this case, we're moving them to Cloud, putting them in a public data sets program and doing all the transformations that happen along with that. 

FRANCESC: Cool. So, Will, you mentioned that you managed the public data sets programs. What is it exactly? 

WILL: Yeah, so the public data sets program launched just over a year ago at our big Next conference in 2016. And what it is is it's a program where Google Cloud hosts open data sets in BigQuery and also Google Cloud Storage. And we do a significant amount of ETL on the data sets. We're not just mirroring them on Google Cloud. We're improving accessibility. 

So for example, some of the data sets that we have ingested from data.gov, Mike done-- Mike's team's done some ETL on those to get those into BigQuery. And what that does for users is it allows them to via serverless access to query those data sets via the UI or command line. 

FRANCESC: Cool, but what is ETL? 

WILL: Mike, you want to jump in and cover that since that's your part? 

MIKE: Yeah, that's Extract, Transform, and Load. So basically, getting the data from the source, do whatever you need to do it, make it pretty, sometimes it's optimize it or denormalize it or whatever needs to happen, and then loading it, in this case, into BigQuery. 

FRANCESC: Cool, so at the end, with the data set, that is ready to be used by anyone? And that is available either on BigQuery or on Google Cloud Storage. Is that right? 

MIKE: Yes. 

MARK: Awesome. So can you give us a few examples of what data sets we have available, either on GCS or BigQuery or wherever? 

WILL: Yeah, so we've got a growing number of them. Some of the most popular ones are GitHub, the Stack Overflow data set, Hacker News, and then one that we have a good relationship with NOAA and have been ingesting more and more of their weather related data sets. 

FRANCESC: Yeah, there's actually-- out of those data sets, I've worked with two of them. NOAA, I gave a talk. That was my first talk at Google I/O. 

MARK: Oh, yeah? 

FRANCESC: Long time ago, yeah, on how to visualize all the ships in the world using BigQuery and Google Maps. It is a really cool data set. It's amazing. So that is now open for everyone to use? 

WILL: That's correct, yeah. We have several NOAA data sets. We have global, historical, daily, and monthly. And then we also have-- Mike just completed onboarding of ICOADS. 

MARK: What are ICOADS? 

MIKE: That's all the ocean's information back to 1662. So ships, buoys, wind temperatures, water temps, where the ships were-- it's pretty comprehensive. 

WILL: He answered a really interesting question with that data set too. 

MARK: What was that? 

MIKE: Yeah, so we took a look at where the Titanic sank and the hours surrounding it, and did it visualization on where other ships were. So both the shipping lanes kind of in a hours before and hours after the Titanic sank. It's really neat because you can take this historical data and plot very visually what's going on at that time. 

FRANCESC: Awesome. We're talking about data sets there in BigQuery. And it sounds like there's a bunch of them that are super cool and really easy to use. But we've sort of touched on it very briefly in the short time we've been talking about data sets we've got in Google Cloud Storage. What are those data sets? 

WILL: Yes, so the main data sets that we have in Google Cloud Storage-- we've got about a 1 and 1/2 petabytes of satellite data from both NASA and ESA, the European Space Agency. And these are images that are updated on a weekly basis as more satellite images come in. 

And then we also just completed onboarding of over 400,000 open art images from the Metropolitan Museum. These images are interesting because they also include annotations of that art. So for example, like what era they came from, who the artist was, what the date was. And then we can run those through like a Vision API. And I'll put those annotations into BigQuery, so that between Google Cloud Storage and BigQuery, you can do a lot of interesting analysis on that. 

FRANCESC: Cool, so there's a lot of cool data sets. And I'm kind of getting excited about them, and I want to use them. What are their conditions? Can I use them for whatever I want? Is there licenses? Are there-- what are the conditions here? 

WILL: So the main criteria for the program is that the data be open for public use. Some of the data sets carry an additional requirement that they cannot be used for commercial use, but that is explicit on the license associated with the data set when you access it. But for the most part, they're free for use for public, commercial, whatever you want to use them for. 

FRANCESC: Nice. So now I'm wondering, since you were talking about the fact that you do ETL, the Extract, Transform, and Load process to transform that data-- like the raw data into an actual data set, what are the kind of things that you do to that? And what are the most important things that someone might be interested in doing on their own data before they load it to BigQuery? 

MIKE: Yeah, there's a lot of pieces to that that I think we've learned along the way. One of the most important things, something we always talk about at Google is eating your own dog food. And essentially what I mean by that is trying out the data for yourself. Make sure it works for the end users before releasing it. 

So what we'll do is we'll go in and throw up a visual, plot something in Data Studio, or run a query and get a result, and make sure that the values in the table are going to work for the analysts, the researchers, the scientists, the companies that are going to use this data. 

A very common thing that we do is to denormalize the data and maybe take a piece of information that you would always want with that table. For example, we have international census information. And in the international census information, it just has codes for each of the countries. And so, the codes aren't really that useful. And every single time you use a table, you kind of need to look up like, what does code 34 mean? And so you'd want to know which country that is. So we might join that data in ahead of time when we load the table and put it in there. 

There's a lot of standardization that also goes into the data. We try to take a smart look at what are some things that would be helpful for developers or for anyone that might be using it in the future. So we would take fields that maybe the data set has three different fields for a day, a month, and an hour. And we can take those and we'll leave them there, but we'll add a new field that's a timestamp. 

So that when somebody goes to plot this data, they don't have to concatenate all these fields and figure out-- you know, transform ours into military time or regular time. And so, we do a lot of analysis of data ahead of time to prep it. 

MARK: Out of curiosity, how like-- I don't want to use the word "dirty," but how messed up do you find the data tends to be? Is it kind of all over the place? Do you find it's generally inconsistent or consistent? 

MIKE: It depends on the source. We get some very good data from NOAA and other partners. They'd spend a lot of time on quality control of their data. Other sources, not so much, I would say. But, you know, the trick is with the government, especially in the US here, they have this mandate to open up the data. 

So they get the data out there, but often it's not in a usable format. It's, you know, a weird-- it's in a weird file encoding or it's some arcane setup that they have on their side maybe with their terminology. It doesn't make sense for the majority of users. So we end up kind of bringing that in, trying to parse it and figure out what's in there, what's useful for people. And we do a lot of joining of tables and bringing stuff together. 

FRANCESC: Cool, so now I'm wondering, like, you were saying that you adapt that raw data before you input it into BigQuery. And I'm imagining that that could be kind of a big thing, right? Like, there's a lot of data. You need to process it, parse it, [INAUDIBLE] clean it, whatever. How do you actually do this? Like, I imagine I would use, I don't know, like MapReduce or maybe Dataflow, something like that. Can you talk a little bit about this? 

MIKE: Yeah, we have an internal tool that we use to actually pipe the data through. But we definitely use the techniques like you mentioned, often doing MapReduce to consolidate rows or expand rows. We might go from many columns to many rows, if that makes sense, or vice versa. And we have a connector that picks up data via FTP or HTTPS or whatever protocol is used to post the data. And then we have a loader for BigQuery. And we do use the BigQuery API to load the data in. 

MARK: I just assumed it was a big Drive spreadsheet. 

[CHUCKLING] 

That's how I just-- I figured. 

MIKE: Well, it's a challenge, too-- 

FRANCESC: Sure, why not. 

MIKE: --because this data-- often, this is 100 million rows of data. You know, so it's massive data sets that go through. And especially one of the key things that we do that's different than a lot of other places you might find this data is we have a live connection. So if that data updates, in 30 minutes, we are piping another iteration of that through, which means that people just need to go to BigQuery. They'll have the most fresh data that's available. 

FRANCESC: So, I'm actually curious. Like, you say live. What does live mean? Obviously in the big data space, seconds is nice, but like are we talking hours, days? Like, what's that live feed sort of like? Obviously, it depends, I guess. 

MIKE: Yeah, it depends on the source and how often they update. I would say it tends to mean hourly or maybe every 5 to 30 minutes. But when they're really-- 

MARK: That's pretty good. 

MIKE: --big data sets, even someone like NOAA, they're not posting these that often because they're so huge for storage. 

FRANCESC: So the next question, I guess, is you were mentioning that, NOAA for instance-- they're very good partner and that they give really good data. But we also have a lot of other different partners that provide us with data. Why do they do it? Why would they do this thing for free? 

WILL: Well, in a lot of cases like as Mike mentioned before, like especially with government data, is there's a mandate to make this data available. But what we're learning is, like especially through the relationship with NOAA, is not only are they incurring just more storage costs over time-- you know, if they didn't add any more data, over time those costs are mounting. 

But also, they're getting-- they're collecting more and more data. You know, we're moving into this internet-of-things world where there's more monitoring devices. And so their data is growing daily exponentially. So the problem they have is they have to distribute this data to-- you know, they have thousands of users that are interested in this weather data. 

And so the egress charges-- like, never mind their own storage costs. The egress charges are getting out of control. And so what they see as valuable from different platform partners that have these open data sets programs like ours is that they can push distribution to five platforms, right? And then point users to those platforms so that they aren't incurring egress on NOAA's servers every minute. So we're seeing this example as we talk to more and more partners that have open data sets. 

FRANCESC: Excellent. 

WILL: And then there are some other cases where like a non-government agency that has open data-- they're releasing that open data with the hopes that people will run-- you know, like an ML use case on it to do some interesting things that they just don't have the resources to do internally. 

FRANCESC: So that segues into my next question, which is what sort of stuff have you seen people do with these data sets that have been particularly interesting? 

WILL: Yeah, so our own Felipe Hoffa had kind of teed this off as-- I don't know if you remember the "Silicon Valley" show where they had the tabs versus spaces debate. And so Felipe took the GitHub data set that we had to kind of prove this debate. And he ran several queries to show that in fact spaces were most popular in every language except, ironically, Go. So that was a pretty interesting analysis that got picked up by a lot of the different communities. 

FRANCESC: Yeah, I saw that analysis and I really liked it, especially-- I mean, I'm Gopher. I write Go on the side. 

MARK: Really? I didn't know that. 

FRANCESC: Yeah. 

MARK: I had no idea. 

FRANCESC: Surprise. It's shocking, I know. 

MARK: I know. 

FRANCESC: But the funny thing is that, yeah, there's a lot of people that was like, oh, in Go, you write-- everyone writes tabs. And then in another language, everybody writes spaces, which is fine. But then some languages is like, well, it's half-half. 

MARK: And some people do-- 

FRANCESC: And that is not good. 

MARK: Yeah. 

[LAUGHTER] 

FRANCESC: That is not good. Cool, is there any other use case? I'm thinking about, for instance, there was this really cool contest with Kaggle, the YouTube thing. 

MARK: Oh, the 8 million? 

FRANCESC: Yeah the 8 million. Do you have any big data set that people could use for machine learning that cannot be big scale? 

WILL: Yeah, like I mentioned before, we're releasing the Metropolitan Museum open art images. And then we're also working with some different third parties that provide medical image data sets. So these would be radiology images. And one of the use cases there is that the community can run machine learning on these radiology images to try to classify and detect different anomalies in those images, whether they're like tumors or different growths. 

So we're trying to find all sorts of different large data sets that are public domain to provide to the community to start building different classification models. 

FRANCESC: Cool. Mike, did you have any other examples you wanted to add? 

MIKE: Yeah, we've been doing a lot of work around city data. That's been a hot topic around data.gov. And these cities are opening up a lot of their information about how the city works and things like 311 calls or fire station response, police incidents, stuff like that. 

So, you know, Reto, who is a developer advocate on our team, has been doing some interesting analysis-- things like, where is your car most likely to be broken into in San Francisco? Or how long does it take the fire station to get to a fire? He did a really cool thing in New York City about which borough is the rat capital based on 311 calls about rat complaints. 

But there's always kinds of interesting city data that's out there and available. And we're really just starting to pick up on that, bringing that into BigQuery so people can dream up new things and also analyze across cities. 

I think that's one of the really big values of the program is taking one data set and merging it with another data set, for example, some of the medical data. They merge that with the census data. And so because we have all those data sets available, it's easy to join them and pull in other information and kind of make your data set more compelling. 

WILL: Yeah, Reto's stuff is really interesting too, as Mike mentioned, because he's also pulling in weather-related data to show how different-- there's different correlations between events from the city data. 

FRANCESC: Interesting. So seeing, like how, if rain affects, I don't know, cab traffic or something. 

WILL: Yeah, cab traffic, bike usage. There was just some-- and he also uses it just to show that you may see correlations, but that doesn't necessarily mean there's a statistical-- 

FRANCESC: Causation? 

WILL: Yeah. It's like, one was-- I can't remember, Mike. Wasn't it something like on snow days, there was a higher percentage of lost manhole covers or something weird like that? 

MIKE: It's great. Yeah, that's something we should do, is the whole spurious correlation-- 

WILL: Yeah. 

MIKE: --data. 

MARK: I'm also wondering if there's like opportunity here to like do competitions between cities, because you know how cities love to have rivalries. 

FRANCESC: Oh, yeah, that could be fun. [CHUCKLES] 

MARK: That could be lots of fun. 

FRANCESC: So I'm wondering-- a long time ago when I used the NOAA data set, one of the things that I ended up using at the same time was this other data set that allowed me to basically go from country to continent, for instance. Is there such a data set? Like, it's basically like the Knowledge Graph for Google. I don't know if you know Google Knowledge Graph. That allows you to basically ask about facts. Is there such a thing that you can mix with BigQuery easily to ask that kind of questions? 

MIKE: Facts about countries around the world? 

FRANCESC: Yeah, for instance, let's say that you have a-- let's say that you have a data set. And the data set is telling you about things about countries, right? But your question is actually, I don't care about the country. I care about the continent level. So now you want to ask, well, given the country, give me the continent. Is there such a generic or general data set that people can use? 

MIKE: Yeah, we've been building these what we call utility data sets. And so, a pretty good example of that is you might have a data with addresses or zip codes, but you want to know actually plot these with latitude and longitude. So we've been building these joined tables essentially that are there. 

I don't think we have one that is country to continent, but that'd be pretty easy to set up since there's not very many continents. But we do have all kinds of like-- especially in the US, all the different geographical points like zip codes, state, county-- all that stuff, you can pull in. And then we're doing some stuff on some future data sets that will have kind of a more comprehensive look at the different data you can pull together. 

FRANCESC: Could you show a little bit on like what data sets are you working on or something like that? Like what data sets do you think that people might get excited about that are coming? 

WILL: Yeah, I'll start. And then, Mike, you can add to this. We're working on, like Mike mentioned earlier, trying to get more city-themed data sets in-- so like Austin, London. I've also started doing some research on what it would take to get like Tokyo in. The problem is that in order to do interesting join analysis between these data sets, you have to have common join keys. And there's no really standard schema for all this municipal data. 

So trying to patch it together-- and it's a lot of the work that Mike's doing-- and trying to make it so that it can join together is quite a challenge. But I'm hoping that we see more and more of these data sets come out of the municipalities so that we can start doing different analysis across cities. 

MIKE: And a data set that I'm excited about that we just launched into that we're also working on is around air quality. So, you know, we're all wandering around cities in different places and we don't really necessarily pay attention to the quality of the air. And so, we recently released 27 years worth of EPA data that shows all the different particulates in the atmosphere and for thousands of locations around the US. And we're working on some feature stuff that will show even more real-time information about what's going on around the world. 

FRANCESC: Nice. That sounds really useful and scary. [CHUCKLES] So we're kind of running out of time, but is there anything else that you'd like to mention before we finish? 

MIKE: Yeah, so as we mentioned, we've been partnering with NOAA, and we have lots of really great partners in the data space. And quick success story that I can share-- in the first few months of this year, we diffused about 200 times the amount of traffic that they would have expected on their data sets with people using BigQuery instead. 

So this is real savings for them because they don't have to incur that cost of both load on their data sets and also all those egress charges that they get. This is saving taxpayer dollars and also making their data more accessible and available, and that's a big, big, important goal for the government. 

FRANCESC: Awesome, so I guess that the last question is if someone has a huge data set that they'd like to share, how do they get in touch? 

WILL: Yeah, we'd love to hear from the community on what other data sets they'd like to see in the program. They can reach out to us by emailing gcp-public-data@google.com. 

FRANCESC: Cool. And we'll have a link to that email in the show notes. 

WILL: Yeah, and you'll hear from either Mike or myself. 

FRANCESC: Fantastic. All right, well, Will, Mike, thank you so much for joining us. I want to sit down and go play with these data sets. We really appreciate you taking the time to chat to us about the public data sets that we have available on Google Cloud. 

WILL: Yeah, thanks for having us. 

MIKE: Yeah, it's great. Thank you. 

FRANCESC: Thanks so much again to both Mike Hamberg and Will Curran for taking the time today to talk to us about all of these really, really interesting data sets. There's definitely data sets that I knew about. 

MARK: Yeah. 

FRANCESC: And that it was like, oh, they're cool. But I didn't know of many of them, so I'm going to be definitely using some of those for my demos. But I know that some other people might be able to use it for like actual useful things. 

MARK: Actual useful things rather than just ridiculous stuff. 

FRANCESC: I like ridiculous demos. They're fun. 

MARK: Excellent. All right, well, why don't we get stuck into the question of the week? 

FRANCESC: Sure. I think the question of the week was basically, OK, so I'm able to see how much money I am paying for Google Cloud Platform. And I'm able to see pretty much from a high-level point of view where that money-- why that money's being built. Like, you're able to see that many hours of whatever kind of instance you're using or storage or networking or stuff like that. 

But I actually want to have a better view, like I really want to drill into more detail in the data. How do I do this? 

MARK: So, this is really cool. This is an article that was written by Mike Zinni and Ryan McDowell-- we'll have links to all of this in the show notes-- where they combine Google Cloud's billing export to BigQuery functionality with Google Data Studio, which is a really great tool for visualizing data that's inside BigQuery. And what they do is they basically put together a variety of graphs and filterable UIs that you can use to see, really at a glance but also at a deeper level, exactly what's going on inside your project and across projects as well. 

And so you can see I'm looking at App Engine spend, for example. Or I'm seeing comparatively different products that I'm using across all of my projects. And it gives me a lot of insight into exactly what's going on inside my projects and my applications and the money that I'm spending. 

What's super sweet about this is that-- we'll link to this as well-- the demo that is available so you can go see exactly what this dashboard looks like has a "How to Copy" section. 

FRANCESC: Nice. 

MARK: Which is super cool. And it has step-by-step things where, so you don't have to build this thing from scratch and like import all the SQL statements or doing anything like that. It's literally sort of five, six, seven, steps, something like that, to basically copy all this stuff across, creating a datastore on BigQuery, copying across the workbook, and then you can take advantage of this thing and then customize it if you so desire-- that kind of stuff. And it's super, super, super nice. 

FRANCESC: In my opinion, actually, the cool thing it's not the fact that you can copy it. Copying it is cool. I think that the cool thing is that it feels just like a framework. And you can build on top of this and adapt it to whatever project you're using which is pretty amazing Like if you know how to use SQL, you know how to use the BigQuery, and now you can do pretty amazing queries to basically drill down into your actual data. And then present it in a super cute way. 

Cloud Data Studio-- it allows you to expose information in a very, very visual way, meaning that even though you're working with hard data, you're able to present it so anyone can understand what's going on, which is very, very nice. 

MARK: In the article, it links to a video that was from Next this year that was done by Ian Lewis and Vic Iglesias explaining basically all the details around this, but they show some stuff in there where you can do stuff to say, predict the future. Like, where do you think your billing's going on what you're doing, and some fancy math to enable that to happen too. 

FRANCESC: Yeah, I know. It is really cool. As soon as you start having lots of data and you're able to do analysis with BigQuery, you are able to do not only analysis of the past, but also like, yeah, very good predictions. And not only that, what I really like is that you're able to do even correlations. There's very advanced correlation analysis on BigQuery that are just like functions that you can call. You can find correlation. We could help you find causation on your billing things, so which is really, really cool. It's basically, if you're a data scientist, you should get very, very excited about these tools. 

MARK: [CHUCKLES] Excellent. All right, well, Francesc, we are running out of time, but what are you up to? What are you doing? What's cool and exciting in your world? 

FRANCESC: So, by the time this comes out, I will be already in New York for QCon New York City. We are going to be presenting a Go Tooling in Action workshop based on the video that I published a long time ago, Go Tooling in Action. And this is going to be open sourced, so it will be in my GitHub. 

MARK: Nice. 

FRANCESC: Soon. I'm working on it. It's a lot of content, but will be there by Friday because that's when I'm running the workshop. And then after that, I'm coming back to San Francisco for a week. And then I'm going again this time to Denver for GopherCon, where I will be also running two workshops-- Kubernetes and gRPC and stuff like that all in Go. What about you? 

MARK: Awesome. Well, literally the day this comes out, that evening here in San Francisco, we'll be hosting Playcrafting yet again. They're doing their June Playtest Night. So we're hosting them. And it's always fun to go down and see all the games that people are working on and get to play them and do all sorts of fun stuff like that. 

FRANCESC: And pizza. 

MARK: And pizza. There's definitely pizza. And as well as that, in July, I will be going to the New York Summit. That will be on the 18th of July. I will be talking with a company called Phoenix One Games. They have a new multiplayer and mobile game called "Guardian Kingdoms" that's out right now that we'll be talking about their infrastructure and how they built their stuff on GCP. 

FRANCESC: Cool, that sounds lots of fun. So, have fun in New York. 

MARK: I will. 

FRANCESC: I will have fun in New York too. 

[LAUGHTER] 

Thank you again for being part of the podcast. Actually, maybe it's time to remember our [INAUDIBLE] listeners how to get in touch with us. We've been getting more questions, which is awesome. We want those questions. Keep on sending them. And the way to send them is through our email. 

MARK: hello@gcppodcast.com. 

FRANCESC: You can also get in touch with us via Twitter. 

MARK: @GCPPodcast. 

FRANCESC: Or on Google+. 

MARK: +GCPPodcast. 

FRANCESC: We have a subreddit. 

MARK: /r/gcppodcast. 

FRANCESC: We are also in Slack. 

MARK: On the #podcast channel on bit.ly/gcp-slack. 

FRANCESC: Finally, all of those things are actually accessible from our web page. 

MARK: At gcppodcast.com. 

FRANCESC: Perfect. 

MARK: That sounds really great. 

FRANCESC: Well, so again, thank you. And thank you all for listening. 

MARK: Wonderful, and see you all next week. 

{{< /transcript >}}