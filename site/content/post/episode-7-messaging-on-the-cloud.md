+++
2015 = "12"
audioDuration = "00:33:04"
audioFile = "Google.Cloud.Platform.Podcast.Episode.7.mp3"
audioSize = 47636681
categories = ["PubSub", "Task Queues", "App Engine", "Cloud Vision", "Logging"]
date = "2015-12-09T14:33:31Z"
title = "Messaging on the Cloud"
description = "In the seventh episode of this podcast, your hosts Francesc and Mark discuss the different ways messaging can be done on Google Cloud Platform, covering Pub/Sub and Task Queues and when to chose what."
draft = false
episodeNumber = 7
hosts = ["Francesc Campoy Flores", "Mark Mandel"]
linked = true
googlePlusLink = "https://plus.google.com/+Gcppodcast/posts/VmxXiz4y52B"
redditLink = "https://www.reddit.com/r/gcppodcast/comments/3w2xeq/episode_7_messaging_on_the_cloud/"
+++

In the seventh episode of this podcast, your hosts
[Francesc](http://twitter.com/francesc) and
[Mark](http://twitter.com/neurotic) discuss
the different ways messaging can be done on Google Cloud Platform,
covering Pub/Sub and Task Queues and when to chose what.
<!--more-->

Links:

-   Google Cloud Vision API [blog
    post](http://googlecloudplatform.blogspot.com/2015/12/Google-Cloud-Vision-API-changes-the-way-applications-understand-images.html)
-   Photo Scavenger Hunt
    [app](https://play.google.com/store/apps/details?id=com.bradabrams.photoscavengerhunt)
-   Google Task Queues
    [documentation](https://cloud.google.com/appengine/docs/python/taskqueue/)
-   Google Cloud Pub/Sub
    [documentation](https://cloud.google.com/pubsub/docs)
-   Exporting logs
    [documentation](https://cloud.google.com/logging/docs/export/configure_export)

##### Feature comparison

<table cellpadding="10" cellspacing="0" border="1">
	<tbody>
	<tr>
		<td><strong>Feature</strong></td>
		<td><strong>Task Queues</strong></td>
		<td><strong>Pub/Sub</strong></td>
	</tr>
	<tr>
		<td>Pull via API</td>
		<td>Yes</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>Push via Webhooks</td>
		<td>Yes</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>Max size of message</td>
		<td>100K</td>
		<td>10MB</td>
	</tr>
	<tr>
		<td>At least once delivery guarantee
		</td>
		<td>Yes</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>Batch Insert</td>
		<td>Only in App Engine</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>Multiple receivers</td>
		<td>No</td>
		<td>Yes</td>
	</tr>
	<tr>
		<td>Datastore Transactions</td>
		<td>Yes</td>
		<td>No</td>
	</tr>
	<tr>
		<td>Maximum Messages/s</td>
		<td>1B (with <a
				href="https://cloud.google.com/appengine/docs/quotas?hl=en#Task_Queue">billing</a><span
		>)
			250 msg/q/s</td>
		<td>Unlimited (after request)</td>
	</tr>
	<tr>
		<td>Throttling</td>
		<td>Yes</td>
		<td>No (if needed &rarr; pull)</td>
	</tr>
	<tr>
		<td>Performance</td>
		<td>median 5ms (99%ile 300ms)</td>
		<td><a
				href="http://googlecloudplatform.blogspot.com/2015/03/using-Google-Cloud-pubsub-to-Connect-applications-and-data-streams.html">Sub-second
			even when tested at over 1M msg/s</a></td>
	</tr>
	<tr>
		<td>Cloud Monitoring</td>
		<td>No</td>
		<td>Yes</td>
	</tr>
	</tbody>
</table>