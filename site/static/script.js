/* Sharing functions */
function shareGooglePlus(title, url) {
    url = encodeURIComponent(url);
    window.open('https://plus.google.com/share' +
            '?url=' + url);
}

function shareTwitter(title, url) {
    var text = encodeURIComponent('"' + title + '"\n');
    url = encodeURIComponent(url);
    window.open('https://twitter.com/intent/tweet' +
            '?text=' + text +
            '&url=' + url +
            '&via=gcppodcast');
}

function shareFacebook(title, url) {
    url = encodeURIComponent(url);

    window.open('https://www.facebook.com/dialog/share' +
            '?app_id=1653280564942689' +
            '&display=popup' +
            '&href=' + url +
            '&redirect_uri=' + url);
}

function toggleTranscript() {
    ["#full-transcript", "#read-transcript", "#hide-transcript"].forEach(function(sel) {
        var elem = document.querySelector(sel);
        elem.classList.toggle("hide");
        elem.classList.toggle("shown");
    });
}

function hideTranscript() {
    ["#full-transcript", "#read-transcript", "#hide-transcript"].forEach(function(sel) {
        var elem = document.querySelector(sel);
        elem.classList.add("hide");
    });
}

/* Floodlight functions */

function captureAudioPlay() {
    var audio = document.querySelectorAll("audio");
    audio.forEach(function(item) {
        console.log("Capturing playback:", item);
        item.addEventListener("play", function() {
            if (!item.dataset.played) {
                item.dataset.played = true;
                floodLight("googl004"); // Floodlight for Podcast Google Playing
            }
        });
    });
}

/*
* Floodlights
*
* Podcast Subscription - Email
* https://ad.doubleclick.net/ddm/activity/src=2507573;type=gcp;cat=googl0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?
* Podcast Subscription - Google Play Music
* https://ad.doubleclick.net/ddm/activity/src=2507573;type=gcp;cat=googl001;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?
* Podcast Subscription - iTunes
* https://ad.doubleclick.net/ddm/activity/src=2507573;type=gcp;cat=googl002;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?
* Podcast Subscription - RSS Feed
* https://ad.doubleclick.net/ddm/activity/src=2507573;type=gcp;cat=googl003;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?
* Podcast Subscription - Stitcher Radio
* https://ad.doubleclick.net/ddm/activity/src=2507573;type=gcp;cat=googl000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?
* Podcast Subscription - Youtube
* https://ad.doubleclick.net/ddm/activity/src=2507573;type=gcp;cat=googl00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?
* Podcast Play
* https://ad.doubleclick.net/ddm/activity/src=2507573;type=gcp;cat=googl004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?"
* */

function floodLight(cat) {
    var axel = Math.random()+"";
    var a = axel * 10000000000000000;
    var img = new Image();
    img.src= "https://ad.doubleclick.net/ddm/activity/src=2507573;type=gcp;cat=" + cat + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord="+ a +"?";
    return true;
}

/* page load handler */
window.addEventListener("load", function() {
    captureAudioPlay();
});