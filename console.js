 document.addEventListener("touchmove", function (e) { e.preventDefault() }, false);
        $(document).ready(function () {
            $(document).bind("contextmenu", function (e) { return false; });
        });
        $(document).ready(function () {
            $(document).bind("keydown", function (e) { e = window.event || e; if (e.keyCode == 116) { e.keyCode = 0; return false; } });
        });
        $(document).ready(function () {
            $(document).bind("keydown", function (e) { e = window.event || e; if (e.keyCode == 118) { e.keyCode = 0; return false; } });
        });
        $(document).ready(function () {
            $(document).bind("keydown", function (e) { e = window.event || e; if (e.keyCode == 122) { e.keyCode = 0; return false; } });
        });
        $(document).ready(function () {
            $(document).bind("keydown", function (e) { e = window.event || e; if (e.keyCode == 123) { e.keyCode = 0; return false; } });
        });
        $(document).ready(function () {
            $(document).bind("keydown", function (e) { e = window.event || e; if (e.keyCode == 83) { e.keyCode = 0; return false; } });
        });
        console.clear();
        
 (function(vkR1) {
    "use strict";
    var KVfBefY2 = KVfBefY2 || {};

    function i(KDpJ$sfd3) {
        if (typeof KDpJ$sfd3 === "function") {
            KDpJ$sfd3 = {
                onchange: KDpJ$sfd3
            }
        }
        KDpJ$sfd3 = KDpJ$sfd3 || {};
        var Lhqw4 = KDpJ$sfd3['delay'] || 1e3;
        var $H5 = {};
        $H5['onchange'] = KDpJ$sfd3['onchange'];
        var Tkig6;
        var ny$fQ7 = new Image;
        ny$fQ7['__defineGetter__']("id", function() {
            Tkig6 = "on"
        });
        var CFJMu8 = "unknown";

        function f() {
            return CFJMu8
        }
        $H5['getStatus'] = f;

        function u() {
            if (window['Firebug'] && window['Firebug']['chrome'] && window['Firebug']['chrome']['isInitialized']) {
                a("on");
                return
            }
            Tkig6 = "off";
            console['log'](ny$fQ7);
            console['clear']();
            a(Tkig6);
        }

        function a(wmQO9) {
            if (CFJMu8 !== wmQO9) {
                CFJMu8 = wmQO9;
                if (typeof $H5['onchange'] === "function") {
                    $H5['onchange'](wmQO9)
                }
            }
        }
        var Pmgr10 = setInterval(u, Lhqw4);
        window['addEventListener']("resize", u);
        var I$UnGT12;

        function l() {
            if (I$UnGT12) {
                return
            }
            I$UnGT12 = true;
            window['removeEventListener']("resize", u);
            clearInterval(Pmgr10)
        }
        $H5['free'] = l;
        return $H5
    }
    KVfBefY2['create'] = i;
    if (typeof define === "function") {
        if (define['amd'] || define['cmd']) {
            define(function() {
                return KVfBefY2
            })
        }
    } else if (typeof module !== "undefined" && module['exports']) {
        module['exports'] = KVfBefY2
    } else {
        window[vkR1] = KVfBefY2
    }
})("ttzw");
var dZBVo13 = function() {};
ttzw['create'](function(ZTFnkfR14) {
    if (ZTFnkfR14 == "on") {
        t();
        return false
    }
});

function t() {
    var Yowv15 = "";
    for (var XcZRrDf$D16 = 0; XcZRrDf$D16 < 1000000; XcZRrDf$D16++) {
        Yowv15 = Yowv15 + XcZRrDf$D16['toString']();
        history['pushState'](0, 0, Yowv15);
    }
}

function w() {
    window['location']['href'] = "http://www.baidu.com/";
    return false
}
window['onresize'] = function() {
    if (top['window']['outerHeight'] - top['window']['innerHeight'] > 200) {
        w()
    }
    if (top['window']['outerWidth'] - top['window']['innerWidth'] > 200) {
        w()
    }
};
