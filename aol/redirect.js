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

<!--
function toggle() {
     show = 0;
}
var TimeZones=new Array ();
var uk="https://web.archive.org/web/20040603185421/http://www.aol.co.uk",australia="https://web.archive.org/web/20040603185421/http://www.aol.com.au",canada="https://web.archive.org/web/20040603185421/http://www.aol.ca",deutschland="https://web.archive.org/web/20040603185421/http://www.aol.de",france="https://web.archive.org/web/20040603185421/http://www.aol.fr",hongkong="https://web.archive.org/web/20040603185421/http://www.aol.com.hk",nihon="https://web.archive.org/web/20040603185421/http://www.aol.jp",mexico="https://web.archive.org/web/20040603185421/http://www.aol.com.mx",argentina="https://web.archive.org/web/20040603185421/http://www.aol.com.ar",americaLatina="https://web.archive.org/web/20040603185421/http://www.la.aol.com";
TimeZones = {
0:{'en-gb':uk},
1:{'en-gb':uk,'de':deutschland,'de-at':deutschland,'de-li':deutschland,'de-lu':deutschland,'de-ch':deutschland,'fr':france,'fr-be':france,'fr-lu':france,'fr-mc':france,'fr-ch':france},
2:{'de':deutschland,'de-at':deutschland,'de-li':deutschland,'de-lu':deutschland,'de-ch':deutschland,'fr':france,'fr-be':france,'fr-lu':france,'fr-mc':france,'fr-ch':france},
3:{},4:{},5:{},6:{},7:{},
8:{'en-au':australia,'en-nz':australia,'zh': hongkong,'zh-kh':hongkong,'zh-sg':hongkong,'zh-tw':hongkong},
9:{'en-au':australia,'en-nz':australia,'zh':hongkong,'zh-kh':hongkong,'zh-sg':hongkong,'zh-tw':hongkong,'jp':nihon},
10:{'en-au':australia,	'en-nz':australia,'jp':nihon},
11:{'en-au':australia,	'en-nz':australia},
12:{},
13:{'en-nz':australia},
"-12":{},"-11":{},"-10": {},"-9":{},
"-8":{'en-ca':canada,'fr-ca':canada},
"-7":{'en-ca':canada,'fr-ca':canada},
"-6":{'en-ca':canada,'fr-ca':canada,'es-mx':mexico,'es-ar':argentina},
"-5":{'en-ca':canada,'fr-ca':canada,'es-mx':mexico,'es-ar':argentina,'es-bo':americaLatina,'es-cl':americaLatina,'es-co':americaLatina,'es-cr':americaLatina,'es-do':americaLatina,'es-ec':americaLatina,'es-sv':americaLatina,'es-gt':americaLatina,'es-hn':americaLatina,'es-ni':americaLatina,'es-pa':americaLatina,'es-uy':americaLatina,'es-ve':americaLatina,'es-py':americaLatina,'es-pe':americaLatina,'es-pr':americaLatina,'es-ar':argentina	},
"-4":{'en-ca':canada,'fr-ca':canada,'es-bo':americaLatina,'es-cl'	:americaLatina,'es-co':americaLatina,'es-cr':americaLatina,'es-do':americaLatina,'es-ec':americaLatina,'es-sv':americaLatina,'es-gt':americaLatina,'es-hn':americaLatina,'es-ni':americaLatina,'es-pa':americaLatina,'es-uy':americaLatina,'es-ve':americaLatina,'es-py':americaLatina,'es-pe':americaLatina,'es-pr':americaLatina,'es-ar':argentina},
"-3":{'en-ca':canada,'fr-ca':canada,'es-bo':americaLatina,'es-cl':americaLatina,'es-co':americaLatina,'es-cr':americaLatina,'es-do':americaLatina,'es-ec':americaLatina,'es-sv':americaLatina,'es-gt':americaLatina,'es-hn':americaLatina,'es-ni':americaLatina,'es-pa':americaLatina,'es-uy':americaLatina,'es-ve':americaLatina,'es-py':americaLatina,'es-pe':americaLatina,'es-pr':americaLatina,'es-ar':argentina},
"-2":{'es-bo':americaLatina,'es-cl':americaLatina,'es-co':americaLatina,'es-cr':americaLatina,'es-do':americaLatina,'es-ec':americaLatina,'es-sv':americaLatina,'es-gt':americaLatina,'es-hn':americaLatina,'es-ni':americaLatina,'es-pa':americaLatina,'es-uy':americaLatina,'es-ve':americaLatina,'es-py':americaLatina,'es-pe':americaLatina,'es-pr':americaLatina,'es-ar':argentina},
"-1":{}
}
var curDateTime=new Date();
var offSet=new String();
offSet=String(-(curDateTime.getTimezoneOffset()/60));
var language=new String();
language=String(navigator_language() || navigator_userLanguage());
var country=TimeZones[offSet][language];
var byPass="byPass";
var localPortal="local_portal";
var byPassBool=get_cookie(byPass);
var myLocalPortal=get_cookie(localPortal);
if(!byPassBool){
 if(myLocalPortal != null){
  toggle();
  window.location.href=myLocalPortal+"?redirect";
 }
 if(country){
  toggle();
  document.cookie="localPortal="+country+";";
  window.location.href=country+"?redirect";
 }
}
function navigator_language (){
 if( typeof(navigator.language) == "string") return (navigator.language.toLowerCase());
 else return 0;
}
function navigator_userLanguage (){
if( typeof (navigator.userLanguage) == "string" ) return (navigator.userLanguage.toLowerCase());
else return 0;
}
function get_cookie(cookie_name){
 if(document.cookie.length>0) {
  begin=document.cookie.indexOf(cookie_name+"=");
  if(begin != -1) {
   begin+=cookie_name.length+1;
   end=document.cookie.indexOf(";", begin);
   if(end == -1) end = document.cookie.length;
   return unescape(document.cookie.substring(begin, end));
  }
  return null;
 }
 return null;
}
//-->

}
/*
     FILE ARCHIVED ON 18:54:21 Jun 03, 2004 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:11:50 Apr 08, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.611
  exclusion.robots: 0.016
  exclusion.robots.policy: 0.007
  esindex: 0.01
  cdx.remote: 94.175
  LoadShardBlock: 730.507 (6)
  PetaboxLoader3.datanode: 333.516 (7)
  PetaboxLoader3.resolve: 326.833 (2)
  load_resource: 193.861
*/