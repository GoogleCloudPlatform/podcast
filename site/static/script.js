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