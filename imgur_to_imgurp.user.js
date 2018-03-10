// ==UserScript==
// @name           imgur to imgurp
// @version        1.0
// @namespace      wiidat
// @description    replace imgur urls with imgurp
// @include        *://*/*
// @homepage       https://github.com/wiidat/imgur-to-filmot
// @updateURL      https://raw.githubusercontent.com/wiidat/imgur-to-filmot/master/imgur_to_imgurp.user.js
// @downloadURL    https://raw.githubusercontent.com/wiidat/imgur-to-filmot/master/imgur_to_imgurp.user.js
// ==/UserScript==

var a = document.getElementsByTagName('a');
for (i=0;i<a.length;i++) {
    p = /imgur\.com\/([\S]+)/;
    res = p.exec(a[i]);
    
    if (res!=null) {
        a[i].href = 'http://i.imgurp.com/' + res[1];
    }
}

//var p = document.getElementsByTagName('img');
//for (i=0;i<p.length;i++) {
//    src = /imgur\.com\/([\S]+)/;
//    res = src.exec(p[i].src);
//    
//    if (res!=null) {
//        p[i].src = 'http://i.imgurp.com/' + res[1];
//    }
//}

var url = document.URL;
reg = /imgur\.com\/([\S]+)?/;
res = reg.exec(url);

if (res!=null) {
    if (res[1] != null)
    	location.replace("http://imgurp.com/" + res[1]);
    else
        location.replace("http://imgurp.com/");
}
