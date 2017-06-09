"use strict";
var system = require('system');
var args = system.args;
var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
    console.log(msg);
};
var url = args[1];
page.open(url, function(status) {
    if (status === "success") {
            page.evaluate(function() {
//                console.log(document.getElementsByClassName('chart_list_odd')[0].innerHTML); working but returns the whole 5 variables
//                console.log(document.getElementById('ctl00_childPanel_lblNow').innerHTML);
//                console.log(document.getElementById('ctl00_childPanel_lblDEQ').innerHTML);
//                console.log(document.getElementById('ctl00_childPanel_lblMEQ').innerHTML);
//                console.log(document.getElementById('ctl00_childPanel_lblYEQ').innerHTML);
//                console.log(document.getElementById('ctl00_childPanel_lblSEQ').innerHTML);

var tmp = document.getElementById('ctl00_childPanel_lblNow').innerHTML;
console.log(tmp);
var tmp = tmp.substring(0,tmp.indexOf(" ")) + ";";
console.log(tmp);

        });
    } else {
      console.log("not success");
    }
phantom.kill(tmp);
});
