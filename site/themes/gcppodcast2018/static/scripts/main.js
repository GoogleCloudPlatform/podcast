/*
 Copyright 2017 Google Intt. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to writing, software distributed
 under the License is distributed on a "AS IS" BASIS, WITHOUT WARRANTIES OR
 CONDITIONS OF ANY KIND, either express or implied.

 See the License for the specific language governing permissions and
 limitations under the License.
*/

/* Removing a tags from */

function removeatag(wrap, tag) {

    $(wrap).find(tag).contents().unwrap();

}

function removeatag(wrap, tag) {

    $(wrap).find(tag).contents().unwrap();

}

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

function shareReddit(title, url) {
    var text = encodeURIComponent('"' + title + '"\n');
    url = encodeURIComponent(url);
    window.open('http://www.reddit.com/submit' +
            '?url=' + url +
            '&title=' + title);
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
    // var audio = document.querySelectorAll("audio");
    var audio = $('.player');

    if ( audio ) {

    console.log("Capturing playback:", audio);

        audio.on("play", function() {

            if (!$(this).attr('data-played') ){
                $(this).attr('data-played', 'played')
                floodLight("googl004"); // Floodlight for Podcast Google Playing
                console.log('works');
            }

        });
    }
}

// var img = $('.no-featured-image');
// // img.setAttribute('src', '/images/post/forseti.png')

// img.on('load', function() {
//     var vibrant = new Vibrant(img);
//     var swatches = vibrant.swatches()
//     for (var swatch in swatches)
//         if (swatches.hasOwnProperty(swatch) && swatches[swatch])
//             console.log(swatch, swatches[swatch].getHex())

//     /*
//      * Results into:
//      * Vibrant #7a4426
//      * Muted #7b9eae
//      * DarkVibrant #348945
//      * DarkMuted #141414
//      * LightVibrant #f3ccb4
//      */
// });

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

    // var player = new Plyr(document.querySelectorAll('.player'));

    // const players = Array.from(document.querySelectorAll('.player')).map(player => new Plyr(player));

    var players = Array.from(document.querySelectorAll('.player')).map(function (player) {
        return new Plyr(player);
    });
    // console.log('test');
    removeatag('.summary-block', 'a');

    $('.scroll-to-podcasts').on('click',function(e){

        e.preventDefault();
        var scrollTo = '.'+$(this).attr('data-scroll-past');
        
        console.log(scrollTo);
        
        $('html, body').animate({ 
            scrollTop: ( $(scrollTo).offset().top - 30 )
        });

    });

    $('.sharelink').on('click',function(e){
        e.preventDefault();
    });


    $('.episode-block h3 , .episode-block .card__header-img').on('mouseenter',function(){
        // console.log($(this).parents('.episode-block'));
        $(this).parents('.episode-block').find('.overlay').addClass('--active');
        $(this).parents('.episode-block').find('.card__header-img').addClass('--active');

    });

    $('.episode-block h3 , .episode-block .card__header-img').on('mouseleave',function(){
        // console.log($(this).parents('.episode-block'));
        $(this).parents('.episode-block').find('.overlay').removeClass('--active');
        $(this).parents('.episode-block').find('.card__header-img').removeClass('--active');

    });

    $('#show-transcript').on('click',function(e){

        e.preventDefault();
        
        if( $('.state').text() === "show" ) {

            $('.state').text('hide');

        } else {

            $('.state').text('show');

        }

        $('#full-transcript').fadeToggle();

    });

    $('.slider').slick({
      nextArrow: '<div class="nav-next mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"><i class="material-icons">arrow_forward</i></div>',
      prevArrow: '<div class="nav-previous mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"><i class="material-icons">arrow_back</i></div>',  
      infinite: true,
      slidesToShow: 1,
      arrow: true
      // slidesToScroll: 3
    });
            
    sr.reveal('.sr, .podcast-content--text > *');

    captureAudioPlay();


});
