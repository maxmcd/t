var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var AIMExpress = new Object();
AIMExpress.defaults = {
    host: 'https://web.archive.org/web/20040602214533/http://aimexpress.aol.com',
    checkurl: 'https://web.archive.org/web/20040602214533/http://cdn.aol.com/ae/CheckAIM.html',
    buddyListWidth: 170,
    buddyListHeight: 430,
    buddyListX: 630,
    buddyListY: 5,
    useNative: true,
    autoLaunch: false,
    autoThrottle: 0,
    END:0
};
AIMExpress.versionString = "$Revision: 1.11 $";
AIMExpress.start = function() {
    var ae = window.AIM_EXPRESS;
    var ad = AIMExpress.defaults;
    ae = ae ? ae : new Object();
    for (var key in ad) {
        if (ae[key] == void 0) {
            ae[key] = ad[key];
        }
    }
    var x=(screen.width-w)/2;
    var y=(screen.height-h)/2;
    var url = ae.host + '/Login.svc';
    var w =725;
    var h = 400;
    if (ae.useNative) {
        w = 100;
        h = 100;
        x = y = 2000;
        url = ae.checkurl;
    }
    window.open(
        url + '?' + 
        'host=' + escape(ae.host) + 
        '&width=' + ae.buddyListWidth + 
        '&height=' + ae.buddyListHeight + 
        '&x=' + ae.buddyListX + 
        '&y=' + ae.buddyListY,
        '',
        'resizable=yes,scrollbars=yes,width=' + w + ',height=' + h + ',left=' + x + ',top=' + y
    );
}
AIMExpress.onload = function(anEvent) {
    if (AIMExpress._oldload) {
        AIMExpress._oldload(anEvent);
    }
    if (window.AIM_EXPRESS && window.AIM_EXPRESS.autoLaunch) {
        if (AIMExpress._canAutolaunch(AIM_EXPRESS.autoThrottle)) {
            setTimeout('AIMExpress.start()', 500);
        }
    }
}
AIMExpress._canAutolaunch = function(aLimit) {
    var throttle = document.cookie.match(/ae40Throttle=([^;]*)/);
    if (!throttle) {
        throttle=Math.floor(Math.random()*10000);
        var xdate = new Date(new Date().getTime() + 365*24*3600*1000).toGMTString();
        document.cookie='ae40Throttle=' + throttle + '; expires=' + xdate;
    } else {
        throttle = throttle[1];
    }

    return (throttle >= aLimit);
}
AIMExpress._oldload = window.onload;
window.onload = AIMExpress.onload;


}
/*
     FILE ARCHIVED ON 21:45:33 Jun 02, 2004 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:11:48 Apr 08, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.73
  exclusion.robots: 0.028
  exclusion.robots.policy: 0.018
  esindex: 0.012
  cdx.remote: 41.917
  LoadShardBlock: 435.205 (3)
  PetaboxLoader3.datanode: 235.881 (4)
  PetaboxLoader3.resolve: 307.285 (3)
  load_resource: 154.142
*/