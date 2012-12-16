
$(function() {
/* GEO & LAN */

var lang = (navigator.language) ? navigator.language : navigator.userLanguage;

if (lang.indexOf('en') > -1) lang = 'English'; 
else if (lang.indexOf('de') > -1) lang = 'German'; 
else if (lang.indexOf('it') > -1) lang = 'Italian'; 
else if (lang.indexOf('fr') > -1) lang = 'French'; 
else if (lang.indexOf('es') > -1) lang = 'Spanish'; 
else if (lang.indexOf('cn') > -1) lang = 'Chinese'; 
else if (lang.indexOf('gr') > -1) lang = 'Greek'; 
else if (lang.indexOf('pl') > -1) lang = 'Polish'; 
else if (lang.indexOf('jp') > -1) lang = 'Japanese'; 
else if (lang.indexOf('in') > -1) lang = 'Indian';
else if (lang.indexOf('ru') > -1) lang = 'Russian'; 
else if (lang.indexOf('kr') > -1) lang = 'Korean'; 

$.getJSON('http://api.wipmania.com/jsonp?callback=?', function(data) {

var country = data.address.country;
if (country ==='United Kingdom' || country ==='United States of America' || country ==='USA' || country ==='United States') country = 'the ' + country;
$('#country').append(country);
});

/* TECHNOLOGY */

var BrowserDetect = {
        init: function() {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
            this.OS = this.searchString(this.dataOS) || "an unknown OS";
        },
        searchString: function(data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1) return data[i].identity;
                } else if (dataProp) return data[i].identity;
            }
        },
        searchVersion: function(dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        },
        dataBrowser: [{
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        }, {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        }, {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        }, {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        }, {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        }, {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        }, {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        }, {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        }, { // for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        }, {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        }, {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        }, { // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }],
        dataOS: [{
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        }, {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        }, {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone/iPod"
        }, {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }]
    };
    BrowserDetect.init();
    var os = BrowserDetect.OS;
    var browser = BrowserDetect.browser;
    var version = BrowserDetect.version;

if (os === 'Windows') ost = '';
else if (os === 'Mac') ost = '';
else if (os === 'Linux') ost = 'are tech-savvy';

var width = screen.width;
var height = screen.height;

/* REFERER */

var referer = document.referrer;

/* WEB HISTORY */


 window.fbAsyncInit = function(){
  FB.init({ appId:'205602882797935', status:true,  cookie:true, xfbml:true});
  FB.getLoginStatus(function(response){
   if (response.status != "unknown")
   {
    show_login_status("Facebook", true);
   }else{
    show_login_status("Facebook", false);
   }
  });
 };
 // Load the SDK Asynchronously
 (function(d){
  var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
  js = d.createElement('script'); js.id = id; js.async = true;
  js.src = "//connect.facebook.net/en_US/all.js";
  d.getElementsByTagName('head')[0].appendChild(js);
 }(document));

/* INJECT */

$('#lang').append(lang);
$('#os').append(os);
$('#ost').append(ost);
$('#browser').append(browser);
$('#version').append(version);
$('#width').append(width);
$('#height').append(height);
$('#referer').append(referer);




});
