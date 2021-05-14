+++
audioDuration = "00:24:24"
audioFile = "Google.Cloud.Platform.Podcast.Episode.259.mp3"
audioSize = 35106869
categories = ["AI", "Artificial Intelligence"]
date = "2021-05-12"
description = "This week on the show, our guests Anu Srivastava and Sudheera Vanguri talk about Document AI with hosts Stephanie Wong and Dale Markowitz."
draft = false
episodeNumber = 259
hosts = ["Dale Markowitz", "Stephanie Wong"]
title = "Document AI with Anu Srivastava and Sudheera Vanguri"
image="/post/episode-259-documentai-with-anu-srivastava-and-sudheera-vanguri/images/hero/hero-EP-259.jpg"
linked = true
redditLink = "https://www.reddit.com/r/gcppodcast/comments/naui93/episode_259_document_ai_with_anu_srivastava_and/"
[[resources]]
  src = "**Hero*.jpg"
  name = "fimage"
+++

This week on the show, our guests [Anu Srivastava](https://twitter.com/asrivas_dev) and Sudheera Vanguri talk about Document AI with hosts [Stephanie Wong](https://twitter.com/stephr_wong) and [Dale Markowitz](https://twitter.com/dalequark). Document AI uses artificial intelligence to improve the way businesses create and manage things like paystubs, tax forms, contracts, and virtually any other business document. Data normally stored on paper can be parsed, enriched, and structured, then stored securely with the use of Document AI. Data becomes more accessible and more manageable.

Our guests go on to describe the process of using this powerful tool and instances where developers and enterprise companies could benefit. We talk about Lending DocAI and Procurement DocAI and how offerings like Google Vision and Knowledge Graph enhance these powerful tools. Users of Document AI can take advantage of these tools as well as bring their own expertise to create custom models.

Later, we learn about the developer experience when using the Document AI Platform. Our guests talk specifically about the use of Knowledge Graph and how the advanced search capabilities allow Document AI users to collect data from myriad sources, filling in missing information and enhancing the search with other useful data to make your results more usable. To demonstrate the use of the platform and integrated Google AI tools, we hear about the real-world examples of Workday and Mr. Cooper and their document processing and model training.

##### Sudheera Vanguri

Sudheera Vanguri is the head of Product Management at Google Cloud Document AI.

##### Anu Srivastava

Anu Srivastava is an Applied AI Engineer for ML on Google Cloud. Before that, she was a software engineer in Android Google Cloud Infrastructure.

##### Cool things of the week

* A handy new Google Cloud, AWS, and Azure product map [blog](https://cloud.google.com/blog/topics/developers-practitioners/handy-new-google-cloud-aws-and-azure-product-map)
     * Compare AWS and Azure services to Google Cloud [docs](https://cloud.google.com/free/docs/aws-azure-gcp-service-comparison?utm_source=google&utm_medium=blog&utm_campaign=FY21-Q2-Product-Mapping-Blog&utm_content=documentation)
* Google Cloud and Seagate: Transforming hard-disk drive maintenance with predictive ML [blog](https://cloud.google.com/blog/products/ai-machine-learning/seagate-and-google-predict-hard-disk-drive-failures-with-ml)

##### Interview

* Document AI [site](https://cloud.google.com/document-ai)
* BigQuery [site](https://cloud.google.com/bigquery)
* Lending DocAI [site](https://cloud.google.com/solutions/lending-doc-ai)
* Procurement DocAI [site](https://cloud.google.com/solutions/procurement-doc-ai)
* Cloud Natural Language [site](https://cloud.google.com/natural-language)
* Google Vision AI [site](https://cloud.google.com/vision)
* Google Knowledge Graph [site](https://developers.google.com/knowledge-graph)
* Cloud Translation [site](https://cloud.google.com/translate)
* Workday [site](https://www.workday.com)
* Mr. Cooper [site](https://www.mrcooper.com)
* AODocs [site](https://www.aodocs.com)
* Processors overview [site](https://cloud.google.com/document-ai/docs/processor-overview)
* Python Codelab [site](https://codelabs.developers.google.com/codelabs/docai-form-parser-v3-python#0)
* Getting started with the Document AI platform [video](https://www.youtube.com/watch?v=pa4kcM8mKBw)

##### What's something cool you're working on?

We've been working hard on [Google I/O](https://events.google.com/io/?hl=ES&lng=en).

{{< transcript "[MUSIC PLAYING] STEPHANIE: Hey, everyone. And welcome to episode number 259 of the weekly Google Cloud Platform Podcast. I'm Stephanie Wang here again. And today I am with Dale, who has been a guest on the podcast before. But this is your first time hosting, right?" >}} 

DALE: Yeah, that's right. I'm very excited to do it. 

STEPHANIE: And you are our applied AI engineer. So you're the perfect host to talk about our topic today, which is-- 

DALE: Document AI, something that I spend a lot of time working on here at Google. I'm very excited that this just launched recently. It's a tool for using machine learning to understand and digitize documents and make them easy to work with and interpret. 

STEPHANIE: And, who are we talking to? I know we have two folks on today who have worked pretty closely with it. 

DALE: Yeah, so Anu is also an applied AI engineer. She's a specialist in Document AI. And we also have Sudheera, who's the PM for the product. 

STEPHANIE: Sweet, I know you've mentioned this before in some of your posts. But data is more valuable than the paper it's on, right? And I remember you mentioning that paper is an API every organization understands forever, which, I think, is a really creative way of thinking about it. 

So, clearly, documents aren't going away any time soon. So I know this conversation, we're going to hear how to extract it and find value out of it. But before we go into that, let's go ahead and go into the cool things of the week. 

[MUSIC PLAYING] 

All right, so my cool thing of the week is this handy new Google Cloud AWS and Azure product map. I wrote up a blog post and created a video about it. But one of our colleagues, Tom, actually created this guide that essentially allows you to compare different products from Google Cloud to AWS and Azure. 

I mean, if you think about it, any craftsman will tell you that choosing the right tool for the job is essential for getting the job done right. So that's why we published this new map showcasing these similar offerings. You can easily filter the list by product name or other common keywords. And our hope is that this table can make it easier for you to quickly find similar products from each provider. And then you can decide which product makes the most sense for your landscape and can best match your skills or goals. 

DALE: That sounds very useful. I'll share something I saw really neat on the Google Cloud blog this week, an awesome new application of machine learning for data centers. Two things we both care very much about, machine learning and data centers. 

So it can use machine learning to predict when a hard disk in a data center will fail. So this was a work between Google Cloud and Seagate, who's the manufacturer of the hard disk that we use in our data centers. And they built a model to predict the probability that a disk would fail repeatedly, which is a great savings in both time and money for the people that maintain these tricky hard disks. 

STEPHANIE: Yeah, I mean, machine learning and data centers are our pride and joy. We've been using ML in our data centers for quite some time as related to the efficiency of our hardware and to help out with our sustainability efforts. But it's great to see that this is being applied for predictive ML in this case for hardware failures. And, I think, again that still supports a lot of things even in sustainability too. 

DALE: Yeah, absolutely. I feel like data centers are like a cool little playground with tough problems with energy conservation and all this stuff. So it's a great machine learning environment. 

STEPHANIE: Yeah, lots of contextual knowledge around a lot of these things. So it's a huge problem to try to solve. But, yeah. Let's talk about Document AI. We're going to go into the conversation right now with Sudheera and Anu. 

[MUSIC PLAYING] 

Hey, Anu. Hey, Sudheera. Thanks so much for joining the podcast. Do you mind starting off by telling us about yourself and what you do here at Google? 

SUDHEERA: I'm Sudheera. And I lead the Document AI product suite at Google Cloud. So that includes the DocAI platforms, and solutions, and language AI technologies, like NLP. 

ANU: So my name is Anu. I am an applied AI engineer, just like Dale. So we really work on understanding the AI platform on Google Cloud and creating content to help people use our services integrated with our apps and services and take that feedback and grow these products over time. 

STEPHANIE: Sweet, so today we are talking specifically about Document Artificial Intelligence. So when we're talking about documents, what sort of docs are we talking about? 

SUDHEERA: Almost every business process in the world begins, includes, or ends with a document, right? So you can think of documents like contracts, invoices, pay stubs, bank statements, receipts. And the list goes on. So there's so many different types of forms, like W-2s, W-4s, and, obviously, they're all different for each employer when you think about things like pay stubs. So Document AI deals with all sorts of documents. 

DALE: As someone who just did their taxes, I have a lot of [INAUDIBLE] experience with this. 

STEPHANIE: We all do. 

DALE: And I wonder, how do businesses currently deal with that barrage of documents? 

SUDHEERA: The current processes that are out there today are quite time consuming. They're error prone. I'm surprised by how manual the processes are. 

I can give an example in the mortgage industry, for instance. Every single mortgage packet includes around 350 different documents. And the document types can be around a thousand different types. And this mortgage packet changes multiple hands, sometimes across 10 different business units within the same company. 

And within each business unit, there is sometimes a human doing manual data entry or doing stare-and-compare jobs, reading these documents and entering those values into a database. So this kind of information that's stored within documents is not easily available in databases. And most of the data lives in documents. So, I think, that's how the businesses are dealing with documents, especially when it comes to unstructured data. The tools are very nascent, I would say. 

STEPHANIE: Yeah, it's interesting, because, I feel like, at Google at least, we haven't used that much paper in the last several years. But I know that a lot of companies are still heavily based on documents. And some are required to legally, a lot of law firms. So, why would it be good to parse these documents? And, what can you extract out of doing that? 

SUDHEERA: So in terms of understanding the information within these documents, sometimes it's a matter of business need. You're probably just scraping the surface in terms of the information probably a customer is sending in terms of feedback. That's unstructured. And a lot of this unstructured data is left untapped. 80% of enterprise data is still unstructured. 

So understanding, for instance, unstructured customer feedback coming in can help a business make more informed decisions and not just rely on some of the metadata that's available and sitting within databases. So you're just working on 20% of your data versus 100% of the data that's available to your business. So that's the untapped opportunity that we're looking at. 

ANU: Yeah, I'll talk about the developer perspective. As developers, it's easy to grab structured data in a database that's already in the correct format. But as we've set the stage for the problem, that's not always the case for all the different pieces of data that you might need to efficiently run your business, make a great app. So this is where Document AI comes in to try to help solve this problem. 

Maybe I need to put some data in a spreadsheet. Maybe I need to write a report. Maybe I need to share this with my colleagues. That's fine for pieces of text, getting real developer, XML, JSON, things that we're used to seeing, but not so much when it comes to images or PDFs. 

DALE: Yeah, it's funny because, Anu, you and I build a lot of projects with machine learning all day. And, I feel like, 90% of them can be put into this bucket of, you're taking some annoying, cumbersome data type, like a video, or audio, or a PDF, and using machine learning to somehow make it a less annoying data type, like a row in a database. 

ANU: I feel like a lot our demos are, let's take some unstructured data, structure it. And then we're going to put it into BigQuery so we can play with it. 

DALE: Yeah, that knocks off a lot of them. So, OK. Tell me about Document AI then. 

SUDHEERA: In a nutshell, Document AI converts unstructured documents into structured data. So the latest releases of the Document AI platform, Learning DocAI and Procurement DocAI has built on decades of AI innovation at Google. So these essentially bring powerful and useful solution to various DocAI challenges, the document processing challenges that I just talked about. 

Under the hood, these are based on industry-leading technologies within Google, like computer vision, natural language, that creates pre-trained models for high-volume documents, so some of those processes like mortgage processing and invoice processing. It's also built on other industry-leading technologies, like Google Knowledge Graph, to validate and enhance the fields and entities that you extract within these documents. You can also bring your own training data to train your own custom models. So think about patent parses or contract parses. 

And then there's also an in-built human in the loop, so human interaction with the AI to ensure that the accuracy is what it needs to be. The overall goal here for Document AI is to enable businesses to gain operational efficiency and reduce manual stare-and-compare jobs. To give you the procurement example, for instance, essentially there's a huge increase in productivity when Procurement DocAI is used to parse receipts and invoices with Knowledge Graph built in where we are able to understand a receipt sometimes even better than a human because we can cross-reference a certain address within a receipt and tell with more certainty that this is, for instance, Angelina Paris as the restaurant, when a human can't even look at a crumpled receipt and read it. 

DALE: Should we start from the top of what is Document AI? 

SUDHEERA: Well, in a nutshell, Document AI converts unstructured content, unstructured documents into structured data. And the latest releases of the Document AI platform, Learning DocAI, the Procurement DocAI solutions are built on decades of AI innovation at Google. So these bring powerful and useful solutions to all the challenges about document processing that I talked about. 

Under the hood are these industry-leading Google technologies, like computer vision, natural language, that creates pre-trained models for high-value and high-volume documents. Google Knowledge Graph to validate and enhance all the entities and fields of interest within these documents. You're also getting a training and creation platform that enables you to bring your own training data and create custom document models for documents like contracts and patents. 

So many businesses have very, very custom documents that are sometimes very unique to their own company. So even those kind of documents can be parsed using Document AI and the custom document models. And finally, we also have a human in the loop integration. So that enables human interaction with the AI to ensure that the accuracy is where it needs to be. 

DALE: You just mentioned a ton of different things in Document AI. It sounds really packed with features. But one of the ones that I wanted to ask you about because it's so interesting, as you mentioned, Knowledge Graph. 

So in Google, everybody thinks of the Knowledge Graph as Google's internal representation of the web, the understanding of what's a business, who's a person, what's the relationship between addresses and business and all that sort of stuff. It's recently become connected to Document AI. Can you tell me more about that? 

ANU: Yeah, let's actually start by first defining what a knowledge graph is. So it's a network representation of interlinked descriptions of entities. These entities could be objects, events, situations. Just these nebulous abstract concepts that when you search, they actually have value to me and you. It's not just words. 

We have this phrase that we like to use a lot called things not strings. So think of this as a single repo, not like a structured database but a collection of information with that value from all different sorts of places, maps, Wikipedia, that sort of thing. So the Google Knowledge Graph, this is a service that actually powers the understanding of search for, like you said, people, places, and things. We've actually directly integrated that into Document AI. 

DALE: Yeah, so when I do a Google Search and I'm like, who's Richard Feynman? Knowledge Graph says, I know that person. It gives me a bunch of info in Google Search. How is that useful in a document processing pipeline? 

ANU: I'm glad you asked. I just found a fun demo receipt that I've been using lately. So we have this receipt. It's from OfficeMax. So it has the giant OfficeMax logo up at the top. 

But it only shows the city that this receipt is from, so Los Gatos, CA. And if I'm integrating this into, like Sudheera mentioned, a procurement workflow, I'm going to need the exact address. Or, really, what if I'm just making an expense report? 

Document AI via Knowledge Graph will automatically return me the full address because it knows where that OfficeMax is based on the logo and the location. It knows that it's located in a certain address in downtown Los Gatos. So that is really helpful because that could remove some sort of manual step that might slow down the process or save me one other API integration call in my system. 

DALE: So it augments the data that's found on the actual document. 

ANU: Enhancing, yeah. Enhancing, enriching. 

STEPHANIE: We love that word. So I'm imagining that it's actually leveraging a lot of the years of progress that we've made in the knowledge graph area that we use for Google Search. All of this extraneous information that's connected to these labels and these locations, whatever it can parse from a document. 

ANU: Yeah, not only knowledge graph, but all the technologies Sudheera just mentioned, like vision and natural language. We're utilizing the models that have been built over the years and then bundling it into this pipeline that you can utilize to really speed up your business. 

DALE: All right, so Knowledge Graph sounds super cool, integrated with DocAI. But, what's the rest of the developer experience like? 

ANU: Yeah, so Document AI actually is a whole platform itself. So we have a platform where you can go in and create these different types of processors. We have some tooling if you're just using a generic form type. If you just want to use the OCR models that are trained specifically on forms, that's available. 

But then we also have these specialized models for different business form types. So we have a model for W-2s over the years that track the different changes year after year. Same with high-variance doc types. So by that, I mean, invoices could look radically different between business to business. By using the platform, you get to create instances of these processors that utilize these models. So we do that in the platform. 

You can also use some of the tooling that comes with it. So we have split and classify for large document packets. We also have AI to tell you-- when I say "classify", if you have a multiform packet, it will actually know where the individual form types start and stop. So maybe you have a packet where the first four documents are your payslips and then the next one is some tax form. You can get back that information in your code so then you can start using it in the appropriate places. 

DALE: It sounds to me that there are some common forms that you just get a processor for right out of the box, like maybe a W-2 or a W-4. But then there's maybe a spectrum of customization. So if I have this totally custom form, there's also some way of me processing that. Is that right? 

ANU: Yeah. If you go into the platform, you can actually see all of the different custom forms and all the tooling. I like to think of it as a LEGO kit for how to actually utilize this for the documents that you're already using. You have all these different pieces that you can work together to make a tight pipeline to process this. 

STEPHANIE: Yeah, that's great that it includes customizations for common form types as well as any individualized ones that most companies probably have. But let's dive into some customer examples or use cases. Can you cover some that you've seen already? 

SUDHEERA: Sure, let me tell you about Workday. Essentially, scaling a business that sorts through millions of documents daily across a global operation is a really tall order. And Workday has more than 3,400 core financial management customers. And it offers a solution called Workday Expenses solution to provide a frictionless reporting experience for their customers. 

So here's how they did it using the Google Cloud's Procurement DocAI. So this is a frictionless expense reporting experience, right? So Workday leverages Google Cloud's PDAI, or Procurement DocAI solution, to automate the processing of invoices and receipts with multi-language support as a key component. So when an expense receipt is scanned, PDAI kicks in. And we are able to essentially convert that receipt into structured data. 

So this kind of a partnership delivers a data capture at scale. And it enables Workday customers to gain deeper insights, such as fraud detection. And it also enables Workday to find new opportunities to keep their businesses moving forward. 

DALE: That's pretty neat. It must be interesting to suddenly have that data available to do all these maybe analysis they couldn't do before, like the fraud detection bit. 

SUDHEERA: Yes, and it's not just that. So expanding the languages to include French, German, Spanish enables Workday to extend the reach of their solution to serve more customers around the world. So it offers higher data accuracy in the data extraction. And a [INAUDIBLE] score of over 85% for receipts, it enables a higher level of satisfaction. This is one example of how Workday's using Procurement DocAI. 

In addition to this, I can give you another example for the market space. Mr. Cooper recently announced a joint partnership along with the Google Cloud. So they have been using the Document AI platform to train over a hundred mortgage labels. 

So throughout their mortgage servicing experience, the mortgage packets are split and classified. And we're able to tell with very high accuracy what is a tax statement, what's an invoice, and what is all of these bank statements and pay stubs, some of these high-variance doc types that are very difficult to parse. So that's another example of how in a servicing or a mortgage servicing use case, Document AI platform is enabling transformation. 

ANU: I'm really glad you brought up Translate. Dale and I were actually just talking about Translate yesterday. You might have used Google Translate on your browser or your mobile phone. And it supports a lot of different languages. That's another component that feeds in DocAI so you can really use this for a global scale. 

SUDHEERA: Anu, you might also want to talk about AODocs. That's another cool example, right? 

ANU: Yeah, I'm excited talk about AODocs. So they just released a Workspace add-on. So add-ons in Workspace, formerly G Suite, allow you to directly integrate your app into Gmail, or Drive, or Sheets. 

Most Workspace add-ons are actually written in Apps Script, which is one of my prototype go-tos. It's a variation of JavaScript. But because it's so tightly integrated with Workspace, you can do things like create a menu item in Google Sheets. So it really brings that technology to where you already are doing your work. That one you can find in the Google Marketplace. 

STEPHANIE: That's awesome. I'm seeing a huge proliferation of Workspace integration with our various ecosystem products, like Apache, AppSheet, this AODocs as well. So it's exciting to see that all tightly integrated. If people wanted to go and learn more about this, they wanted to dive in and try Document AI out, where can people go? 

ANU: Yeah, so definitely head over to our documentation to get started. We have Quickstart in several different languages, Python, JavaScript, Java. We've also written some Codelabs. So we'll actually go step by step and show you exactly what to type, exactly what to click on in the platform. 

In the platform, you can actually test sample docs. And it'll visually show you what data it's parsing out. And you can even see some of the layout information you also get back from DocAI. We also have some workshops that we've recently aired since the launch a couple of weeks ago also linked our documentation. So just search, "Google Cloud Document AI," and then I'm sure it'll take you there. 

STEPHANIE: Nice. Well, we'll definitely include all of those links for everyone to go check out those resources in the show notes. But before we wrap up, is there anything else that you wanted to share with the audience? 

SUDHEERA: Of course. At Google, our need to understand the content of the web has given us unparalleled capabilities in extracting structured data from unstructured sources, right? Our mission statement is, "Organizing the world's information and making it universally accessible and useful." And through Document AI, we have started to bring this technology suite to some of the largest enterprise content problems in the world. 

STEPHANIE: Amazing. Well, thank you so much. I'm excited to see where this goes and for everybody to go check out Document AI. Thanks again, Sudheera and Anu. And I hope to have you on again soon. 

ANU: Bye, thank you. 

SUDHEERA: Bye-bye, thank you. 

DALE: Thanks, y'all. 

STEPHANIE: Yeah, so knowledge graphs are something that I've been hearing more and more about. I actually had somebody on LinkedIn reach out to me about knowledge graphs, wondering what we had in the space for Google Cloud. And I was curious about it because, I assume that, we probably had an enormous knowledge graph built to power a search, which seems to be the case. It's how you're able to get very relevant results using contextual information around people, places, and time zones, et cetera. So to me, this is really exciting to see it being applied to Document AI and expanding it for other people to use in the context of their businesses and their domains. 

DALE: Yeah, I totally agree. I think, like with machine learning, a lot of times, you're trying to collect data to solve this particular task. But then it's like what really makes navigation powerful is when you take a document and you combine it with some knowledge of the world. And it's really hard to come up with a really good understanding of all the different entities, people, places, businesses in the world. So the integration with the Google Knowledge Graph is a definite value-add. 

STEPHANIE: Yeah, and it just also makes me think about the amount of data that exists in the world that's untouched because of documents, right? 

DALE: For sure. It's exciting. You think about, now that we're better at using computers to process documents, maybe we could take a stab of those archives, or old books, journal papers, research papers that are published but just never made searchable. What kind of patterns will we find? 

STEPHANIE: This would have been really useful back in the day, when I was in college, because I actually did a minor called digital humanities, which was new back then. But I was studying old historical documents, a lot of various artifacts. I think one of the topics I looked at was Holocaust survivors and their previous memoirs and documents, anything related to their lives during that time. 

So we were actually creating repositories manually and inputting metadata around each artifact. So if we had this, I think, it would have been hugely useful. But I can only imagine that the students in the area are having a much easier time now because of these existing APIs and the knowledge graphs that we're able to externalize. 

DALE: Yeah, I totally agree. 

STEPHANIE: Awesome. Well, I know we have more exciting things happening around AI in the space because I know I/O was during this week, right? What are you working on? 

DALE: Well, mostly I've been spending all of my time getting hype for Google I/O. This year in particular is a big year for new machine learning Google Cloud stuff. So make sure you pay attention. I can't wait to talk more about that. And, yeah, just trying to round up my best practices and ideas of building things with machine learning for a session I'm giving at Google I/O. 

STEPHANIE: Yeah. I mean, I've heard you've done a couple sessions or maybe some demo derbies. You've done a lot of work in the area over the last year, including projects where you were turning PDFs into audiobooks and creating a video archive for Father's Day. So a lot of creative work that you've done. So, I think, it'll be great to give people a sneak peak and look behind the scenes on how you created all of that using Google AI. 

Yeah, and if everyone is interested in registering for I/O, it is next week. So, definitely, take a look at that. It's free and available for everyone virtually May 18 to the 21st. And I'll probably be doing some live tweeting or reviewing of it while the keynotes are playing. 

So, definitely, connect with me online. And we'll include all the links in the show notes. But if that's all the time we have, then I will see everyone next week. And thanks for joining, Dale. 

DALE: Yeah. See, y'all. 

STEPHANIE: Bye, everybody.