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
                var lblNow = document.getElementById('ctl00_childPanel_lblNow').innerHTML;
                var lblNow = lblNow.substring(0,lblNow.indexOf(" "));
                var lblDEQ = document.getElementById('ctl00_childPanel_lblDEQ').innerHTML;
                var lblDEQ = lblDEQ.substring(0,lblDEQ.indexOf(" "));
                var lblMEQ = document.getElementById('ctl00_childPanel_lblMEQ').innerHTML;
                var lblMEQ = lblMEQ.substring(0,lblMEQ.indexOf(" "));
                var lblYEQ = document.getElementById('ctl00_childPanel_lblYEQ').innerHTML;
                var lblYEQ = lblYEQ.substring(0,lblYEQ.indexOf(" "));
                var lblSEQ = document.getElementById('ctl00_childPanel_lblSEQ').innerHTML;
                var lblSEQ = lblSEQ.substring(0,lblSEQ.indexOf(" "));

                var omnikData = lblNow + ";" + lblDEQ + ";" + lblMEQ + ";" + lblYEQ + ";" + lblSEQ;
                console.log(omnikData);
        });
    } else {
      console.log("not success");
    }
phantom.exit();
});
