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

document.cookie='prompted=-1'; goItem =1;
var highLightCell=null; var highLightImg=null; var highLightText=null;
var _AOL=0; var _ua=navigator.userAgent; var _sta=_ua.indexOf('AOL');
var is_Flash = false; var is_FlashVersion = 0;

if (_sta >= 0) {_sta += 4; _end =_ua.indexOf('.', _sta); _ver =_ua.substring(_sta, _end); _AOL =parseInt(_ver);}
if (window.ActiveXObject) { document.write('<scr' + 'ipt language=VBScript>' + '\n' + 'Dim hasPlayer, playerversion' + '\n' + 'hasPlayer = false' + '\n' + 'playerversion = 10' + '\n' + 'Do While playerversion > 0' + '\n' + 'On Error Resume Next' + '\n' + 'hasPlayer = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash." & playerversion)))' + '\n' + 'If hasPlayer = true Then Exit Do' + '\n' + 'playerversion = playerversion - 1' + '\n' + 'Loop' + '\n' + 'is_FlashVersion = playerversion' + '\n' + 'is_Flash = hasPlayer' + '\n' + '<\/sc' + 'ript>'); } else { var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0; if (plugin) {is_Flash = true; is_FlashVersion = parseInt(plugin.description.substring(plugin.description.indexOf(".")-1));}}
var requiredVersion = 6;var useRedirect = false;var flash2Installed = false;var flash3Installed = false;var flash4Installed = false;var flash5Installed = false;var flash6Installed = false;var flash7Installed = false;var flash8Installed = false;var flash9Installed = false;var maxVersion = 9;var actualVersion = 0;var hasRightVersion = false;var jsVersion = 1.0;
var isAOL = (navigator.appVersion.indexOf("AOL") != -1) ? true : false;var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;jsVersion = 1.1;
if(isIE && isWin){
  document.write('<SCR' + 'IPT LANGUAGE=VBScript\> \n');
  document.write('on error resume next \n');
  document.write('flash2Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.2"))) \n');
  document.write('flash3Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.3"))) \n');
  document.write('flash4Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4"))) \n');
  document.write('flash5Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5"))) \n');  
  document.write('flash6Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.6"))) \n');  
  document.write('flash7Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.7"))) \n');
  document.write('flash8Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.8"))) \n');
  document.write('flash9Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.9"))) \n');
  document.write('<\/SCR' + 'IPT\> \n');
}
var x;
function detectFlash() {if (navigator.plugins) {if (navigator.plugins["Shockwave Flash 2.0"]|| navigator.plugins["Shockwave Flash"]) {var isVersion2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";var flashDescription = navigator.plugins["Shockwave Flash" + isVersion2].description;var flashVersion = parseInt(flashDescription.substring(16));flash2Installed = (flashVersion == 2 ? true : false);flash3Installed = (flashVersion == 3 ? true : false);flash4Installed = (flashVersion == 4 ? true : false);flash5Installed = (flashVersion == 5 ? true : false);flash6Installed = (flashVersion == 6 ? true : false);flash7Installed = (flashVersion == 7 ? true : false);flash8Installed = (flashVersion == 8 ? true : false);flash9Installed = (flashVersion >= 9 ? true : false);}
}for (var i = 2; i <= 9; i++) {if (eval("flash" + i + "Installed") == true){ actualVersion = i;}}if (requiredVersion <= actualVersion) {x=1;}else{x=0;}}detectFlash();

function myDOM(id) {return document.getElementById(id);}
function getStyle(id) {return myDOM(id).style;}
function getHeight(id) {return myDOM(id).offsetHeight;}
function getWidth(id) {return myDOM(id).offsetWidth;}
function is_Mac() {return (_ua.indexOf('Macintosh') >= 0 || _ua.indexOf('Mac_') >= 0) ? 1 : 0;}
function is_BB() {return (env_speed == 'broadband') ? 1 : 0;}
function cellRoll(textID, onColor, offColor, state) {if (myDOM(textID) && textID != highLightCell) {(state) ? getStyle(textID).backgroundColor=onColor : getStyle(textID).backgroundColor=offColor;}}
function imgRoll(img, state) {roll=0; if(highLightImg == null){ if(document.images[img].src.indexOf('_on') == -1){roll=1;}} else{if (img != highLightImg){roll=1;}} if(roll == 1) {(state) ? document.images[img].src=eval(img + '_over.src') : document.images[img].src=eval(img + '_off.src');}}
function showHideDiv(divName, state) {state ? getStyle(divName).visibility='visible' : getStyle(divName).visibility='hidden';}
function textRoll(textID, onColor, offColor, state) {if (myDOM(textID) && textID != highLightText) {(state) ? getStyle(textID).color=onColor : getStyle(textID).color=offColor;}}
function imgRollDiv(divName, img, state) {if (getImage(divName).images[img].src.indexOf('_on') == -1) {(state) ? getImage(divName).images[img].src=eval(img + '_over.src') : getImage(divName).images[img].src=eval(img + '_off.src');}}
function popWin(theURL,winName,features) {var mywin=window.open(theURL,winName,features); mywin.focus();}
function show_VP() {return (is_BB() && !is_Mac() && _AOL >= 7) ? 1 : 0;}
function popMenu(div,state) {divColor=div+'Color'; divBG=div+'BG'; divText=div+'Text'; if (getStyle(divColor).visibility=='visible') {state=false;} showHideDiv(divColor,state); showHideDiv(divBG,state); showHideDiv(divText,state); showHideDiv('joinAOLMenuHiliteButton1',state); showHideDiv('joinAOLMenuHiliteButton2',state); showHideDiv('joinAOLMenuHiliteButton3',state);}
function changeMenu(item) {menuText=new Array('Chat Live Online','Browse FAQs','E-Mail Us'); key=(item-1); myDOM('joinAOLPopText').innerHTML='<a href="#" class="chatnow" onclick="popMenu(\'joinAOLMenu\',\'true\');">'+menuText[key]+'<\/a>'; hiMenu='joinAOLMenuHilite'+item; hiButton ='joinAOLMenuHiliteButton'+item; showHideDiv(hiMenu,false); showHideDiv(hiButton,false); popMenu('joinAOLMenu',false); goItem=item;}
function handleHelpForm() {helpArr=new Array('https://web.archive.org/web/20040702185922/http://welcometoaol.mhi.aol.com/welcometoaol.asp','https://web.archive.org/web/20040702185922/http://www.estage.aol.com/beta/help.adp','https://web.archive.org/web/20040702185922/http://www.aol.com/info/feedback.adp'); key=(goItem-1); window.open(helpArr[key]);}
function doSubmit(){document.cookie="cookietest=yes; path=/; domain=.aol.com";var testCookie=document.cookie;if (testCookie.indexOf("cookietest=yes") == -1) {alert('Please turn your cookies on.');} else {document.loginform.siteState.value="OrigUrl="+escape(window.location);var sn=document.loginform.screenname.value;var isEmail=sn.indexOf('@');if (isEmail > -1) {makeSN= sn.substring(0,isEmail);document.loginform.screenname.value=makeSN;}document.forms.loginform.submit();}}
function setup(contT) {contentH=getHeight('lowerContent'); 	contentT=parseInt(getStyle('lowerContent').top); footerT=contentH + contentT + 43; getStyle('footer').top= footerT; getStyle('footer').visibility='visible'; gradT=85; gradH=(contentT - gradT) + contentH; getStyle('aolMemeberBGGrad').height=gradH; gradCornerT=(gradH - 39) + gradT; getStyle('aolMemeberBGGradCorner').top=gradCornerT; getStyle('aolMemeberBGGradCorner').visibility='visible';}
function doNav(form) { var selectDest=form.dest.selectedIndex; var goURL=form.dest.options[selectDest].value; window.open(goURL);}

}
/*
     FILE ARCHIVED ON 18:59:22 Jul 02, 2004 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:11:50 Apr 08, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.595
  exclusion.robots: 0.027
  exclusion.robots.policy: 0.014
  esindex: 0.01
  cdx.remote: 704.224
  LoadShardBlock: 245.726 (3)
  PetaboxLoader3.datanode: 133.493 (4)
  PetaboxLoader3.resolve: 198.708 (2)
  load_resource: 188.948
*/