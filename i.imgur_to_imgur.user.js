// ==UserScript==
// @name           i.imgur to imgur
// @version        1.1
// @namespace      wiidat
// @description    replace i.imgur urls with imgur
// @include        *://i.imgur.com/*
// @exclude        *://imgur.com/*
// @homepage       https://github.com/wiidat/imgur-to-filmot
// @updateURL      https://raw.githubusercontent.com/wiidat/imgur-to-filmot/master/i.imgur_to_imgur.user.js	
// @downloadURL    https://raw.githubusercontent.com/wiidat/imgur-to-filmot/master/i.imgur_to_imgur.user.js	
// ==/UserScript==

var a = document.getElementsByTagName('a');
for (i=0;i<a.length;i++) {
    p = /imgur\.com\/([^.]+)/;
    res = p.exec(a[i]);
    
    if (res!=null) {
        a[i].href = 'https://imgur.com/' + res[1];
    }
}

var p = document.getElementsByTagName('img');
for (i=0;i<p.length;i++) {
    src = /imgur\.com\/([^.]+)/;
    res = src.exec(p[i].src);
    
    if (res!=null) {
        p[i].src = 'https://imgur.com/' + res[1];
    }
}

var url = document.URL;
reg = /imgur\.com\/([^.]+)?/;
res = reg.exec(url);

if (res!=null) {
    if (res[1] != null)
    	location.replace("https://imgur.com/" + res[1]);
    else
        location.replace("https://imgur.com/");
}
