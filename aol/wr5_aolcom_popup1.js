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

// version 04.14.2004
this.name="parentWindow";
var doPop=1;
var doUnloadPop=1;
var doOnloadPop=1;


function wr5_aolcom_popup(pageAction) {
	// pageAction values are "member-onload", "member-onunload","nonmember-onload","nonmember-onunload";
	ran =Date.parse(new Date);
	switch(pageAction) {
		case "member-onload":
			doOnloadPop=0;
			break;
		case "member-onunload":
			doUnloadPop=0;
			break;
		case "nonmember-onload":
			for(i=0;i<document.links.length;i++) { 
				document.links[i].onclick = function() { doUnloadPop=0; }
			}
			if(document.cookie.indexOf("nonmember_onload=1")==-1) {
				/*
				randomPop = Math.floor(Math.random() * 100);
				if(randomPop>50) {
					doOnloadPop=1;
				} else {
					doOnloadPop=0;
				}
				*/
				expireDate  = new Date(Date.parse(new Date()) + 86400000);
				document.cookie = "nonmember_onload=1;path=/;expires=" + expireDate;
				doOnloadPop=1;
			} else {
				doOnloadPop=0;
			}
			href="https://web.archive.org/web/20040609010523/http://http300.edge.ru4.com/smartserve/click?invocation=4000&placement=pl-0518-002&rid=" + ran + "&pr=&target=http://free.aol.com/tryaolfree/index.adp?514570";
			img="https://web.archive.org/web/20040609010523/http://http300.edge.ru4.com/smartserve/ad?placement=pl-0518-002&invocation=4000&rid=" + ran + "&pr="
			break;
		case "nonmember-onunload":
			href="https://web.archive.org/web/20040609010523/http://http300.edge.ru4.com/smartserve/click?invocation=4000&placement=pl-0518-001&rid=" + ran + "&pr=&target=http://free.aol.com/tryaolfree/index.adp?514543"
			img="https://web.archive.org/web/20040609010523/http://http300.edge.ru4.com/smartserve/ad?placement=pl-0518-001&invocation=4000&rid=" + ran + "&pr="
			break;
	}
	if(pageAction == "nonmember-onload") {
		doPop = doOnloadPop;
	} else if (pageAction == "nonmember-onunload") {
		doPop = doUnloadPop;
	} else {
		doPop=0;
	}
	if(doPop) {
		popWin = window.open('',"popWin","width=330,height=330,top=325,left=25");
		popWin.document.title = "Special Offer - Try AOL Free!";
		popWin.document.body.style.margin="0";
		popWin.document.write("<html><head><title>Special Offer - Try AOL Free!</title></head><body marginheight=\"0\" marginwidth=\"0\" topmargin=\"0\" leftmargin=\"0\"style=\"margin:0\"><a target=\"parentWindow\" href=\"" + href + "\" onclick=\"setTimeout('window.close()',1000);\"><img border=\"0\" src=\"" + img + "\" width=\"330\" height=\"330\" /></a></body></html>");
	}
	
}
 
function resetUnloadPop(popValue) {
	doUnloadPop=popValue;
}



}
/*
     FILE ARCHIVED ON 01:05:23 Jun 09, 2004 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:11:49 Apr 08, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.619
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.009
  esindex: 0.015
  cdx.remote: 33.402
  LoadShardBlock: 292.21 (3)
  PetaboxLoader3.datanode: 227.744 (4)
  PetaboxLoader3.resolve: 374.339 (2)
  load_resource: 384.352
*/