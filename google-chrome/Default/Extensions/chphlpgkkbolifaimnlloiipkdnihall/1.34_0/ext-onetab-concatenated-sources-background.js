var d=false;var G1='1.31';var Hj='https://www.one-tab.com';var Xj=false;var vj=false;var zK="onmousemove";var T="onmousedown";var LX="onmouseover";var rX="onmouseup";var zX="onmouseout";var jK="onclick";var BK="ondblclick";var sX="onmouseleave";var yX="mousemove";var o1="mousedown";var UK="mouseover";var nX="mouseup";var eX="mouseout";var Fj="click";var Vj="dblclick";var cX=false;var iX=100006;function mK(){return document.body};var u1='aaa';var SK='NEW_TRANSACTION';MVS=false;GVS=true;var Y={};function Ej(Rn,Tn){Y[Rn]=Tn;if(GVS)NX(Rn,Tn)};function X1(fn){return fn.indexOf(gK)==0};function $(Kn){return Kn.indexOf(L)==0};function XX(xn,Fn){G('availableVersion',function(nB){if(!nB)xn(false);else {var DB=parseInt(G1.substring(0,G1.indexOf(".")));var lB=parseInt(G1.substring(G1.indexOf(".")+1));var eB=parseInt(nB.substring(0,nB.indexOf(".")));var BB=parseInt(nB.substring(nB.indexOf(".")+1));var VB=false;if(DB<eB)VB=true;if(DB==eB){if(lB<BB)VB=true}xn(VB)}},Fn)};Ej('upgradeAvailable',function(In,pn){XX(pn,SK)});function eK(mn,Cn){pK().dW('extensionKey',function($B,YB){if(!$B){$B=fX();pK().kj('extensionKey',$B,function(){mn($B,YB)},YB)}else {mn($B,YB)}},Cn)};Ej('getExtensionKey',function(yn,jn){eK(jn,SK)});var $j=function(an,Ln){Aj(function(QB,rB){if(!QB['tabGroups']){QB['tabGroups']=[];UX(QB,function(Bl){an(Bl)},rB)}else {an(rB)}},Ln)};var T1=function(Un){mj(undefined,Un)};Ej('displayOneTabAction',function(zn,on){T1(on)});var gX=function(un,Sn,Pn){Q(function(HB){YK(HB,function(nl){Sj();nl(Sn)},un,Pn)})};var RX=function(Xn,cn,Nn,En){var An=Xn['linkUrl'];var wn=Xn['frameId'];var vn='';if(Xn['linkTitle']){vn=Xn['linkTitle'];L1(An,vn,function(){Sj()},Nn,En)}else {var gn=function(){window['chrome']['tabs']['sendMessage'](cn['id'],{'type':'getLinkTitle','url':An},{'frameId':wn},function(el){var ll=el['title'];L1(An,ll,function(){Sj()},Nn,En)})};window['chrome']['tabs']['executeScript'](cn['id'],{'file':'ext-onetab-concatenated-sources-contentscript.js','frameId':wn,'runAt':'document_start'},function(){gn()})}};var Nj=function(bn,qn){PX(function(ZB){jX(ZB,true,function(Dl){mj(true,Dl)},bn,qn)})};var Zj=function(On,sn,dn){PX(function(TB,KB){var fB=[];if(KB){for(var RB in TB)if(parseInt(TB[RB]['index'])!=parseInt(KB['index']))fB.push(TB[RB]);if(fB.length>0){jX(fB,true,function(Vl){Sj();if(sn)sn(dn);Vl()},On,dn)}else {if(sn)sn(dn)}}else {if(!MVS)alert('no active tab (B)');else if(cX)console.log('no active tab (B)');sn(dn)}})};var D1=function(hn,kn){PX(function(xB,IB){var pB=[];if(IB){for(var FB in xB)if(parseInt(xB[FB]['index'])<parseInt(IB['index']))pB.push(xB[FB]);if(pB.length>0){jX(pB,true,function($l){Sj();$l()},hn,kn)}}})};var Rj=function(Mn,Gn){PX(function(mB,yB){var jB=[];if(yB){for(var CB in mB)if(parseInt(mB[CB]['index'])>parseInt(yB['index']))jB.push(mB[CB]);if(jB.length>0){jX(jB,true,function(Yl){Sj();Yl()},Mn,Gn)}}})};var rj=function(Wn,_n,Jn){x1(function(aB){jX(aB,true,function(Ql){mj(true,function(){if(_n)_n()});Ql()},Wn,Jn)})};Ej('sendAllTabsInAllWindowsToOneTabAction',function(nV,BV){rj(nV.iW,BV,SK)});function Sj(eV){b1(function(UB){var oB=undefined;for(var zB=0;zB<UB.length;zB++){var LB=UB[zB];var uB=LB['url'];if(uB.indexOf(gK)==0){oB=LB;break}}if(oB){KK(oB,function(){if(eV)eV()})}else {if(eV)eV()}})};function dK(lV,DV){Aj(function(wB,NB){var SB=wB['tabGroups'];if(!SB)SB=[];var PB=0;for(var gB=0;gB<SB.length;gB++){var cB=SB[gB];PB+=cB['tabsMeta'].length}if(PB==0){b1(function(rl){for(var Hl in rl){if(X1(rl[Hl]['url'])){U(rl[Hl],function(){s1()})}}if(lV)lV()})}else {if(lV)lV()}},DV)};Ej('closeOneTabIfEmpty',function($V,VV){return dK(VV,SK)});function mj(QV,YV){b1(function(iB){var EB=undefined;for(var AB=0;AB<iB.length;AB++){var vB=iB[AB];var XB=vB['url'];if(XB.indexOf(gK)==0){if(EB){U(EB)}else {EB=vB}}}if(EB){if(QV){B(EB,function(){KK(EB,function(){if(YV)YV()})})}else {B(EB,function(){if(YV)YV()})}}else {fj(gK,function(){if(YV)YV()})}})};function N1(TV,rV){var HV=mX(TV);var ZV=true;b1(function(qB){var sB=undefined;for(var OB=0;OB<qB.length;OB++){var bB=qB[OB];var dB=bB['url'];if(dB==HV){if(sB){U(sB)}else {sB=bB}}}if(sB){if(ZV){KK(sB,function(){})}B(sB,function(){if(rV)rV()})}else {fj(HV,function(){if(rV)rV()})}})};Ej('showOrRefreshAndFocusScriptPage',function(fV,RV){return N1(fV.url,RV)});var R=function(xV,FV,KV,pV){B1(function(hB,MB){var kB=J1('restoreWindow',hB);if(FV=='currentWindow')kB='currentWindow';if(FV=='newWindow')kB='newWindow';PX(function(Kl){var Tl=0;for(var fl in Kl){var Zl=Kl[fl];if(Zl['pinned']||Zl['isPinned'])continue;if(X1(Zl['url']))continue;Tl++}if(kB=='currentWindow'||((kB=='newWindow')&&(FV!='newWindow')&&(Tl==0))){for(var fl=0;fl<xV.length;fl++){var Rl=xV[fl];wK(Rl['url'],!!Rl['pinned'],false,function(){s1()})}}else {fK(xV,function(){s1()})}if(KV)KV(MB)});setTimeout(function(){dK(undefined,SK)},200)},pV)};Ej('restoreTabsMeta',function(mV,IV){R(mV.MW,mV.AW,IV,SK)});function IX(jV,CV,yV){Aj(function(nP,VP){var GB=nP['tabGroups'];var eP=jV.split('\n');var JB=new Date().getTime();var WB=function(){var xl={};xl['createDate']=JB--;xl['tabsMeta']=[];xl['id']=y1();return xl};var lP=WB();for(var BP in eP){var _B=eP[BP];if(!_B){if(lP['tabsMeta'].length>0){GB.push(lP);lP=WB()}}else {var $P;var DP;if(_B.indexOf(' | ')!=-1){$P=_B.substring(0,_B.indexOf(' | '));DP=_B.substring(_B.indexOf(' | ')+' | '.length)}else {$P=_B;DP=xK(_B)}if($P.indexOf('://')==-1)$P='http://'+$P;var YP={};YP['id']=wj();YP['url']=$P;YP['title']=e1(DP);lP['tabsMeta'].push(YP)}}if(lP['tabsMeta'].length>0){GB.push(lP)}UX(nP,function(Fl){mj(true,function(){if(CV)CV()})},VP)},yV)};Ej('importTabsFromText',function(LV,aV){IX(LV.text,aV,SK)});Ej('getAllMessages',function(SV,zV){var oV=["addOneTabNow","95PctMemoryReduction","noTabsInOneTabYet","importUrls","exportImportUrls","pleaseWaitTripleDot","about","optionTabGroupRestoreNewWindow","optionPinnedTabsDontSend","beforeLostInMessBrowserSlow","sendAllTabsAllWindowsToPlaceholder","convertTabsIntoAList","tooManyTabsSpeedUpFirefox","sendOnlyThisTabToPlaceholder","emptyOneTabInfoMsg","OneTabAlsoAvailableForFirefox","feedback","optionRestoreRemovalDefault","features","unlockBeforeDeleting","sendRightTabsToOneTab","tab","sendAllTabsToPlaceholder","options","sendThisWebLinkToOneTab","namedTabGroups","export","excludeDomainFromOneTab","optionStartupLaunchDisplay","lockTabGroup","optionTabGroupRestoreCurrentWindowAlways","noSignupRegistrationRequired","optionStartupLaunchNone","optionDuplicatesRejectDesc","unstarTabGroup","shareAllAsWebPage","nameThisTabGroup","afterInstantReliefRestoreLater","languageTitle","memoryAfter99","sendThisWebLinkToPlaceholder","optionRestoreRemovalDefaultDesc","sendLeftTabsToOneTab","optionRestoreRemovalKeepDesc","nowAvailableInLanguage","moreTripleDot","sendOnlyThisTabToOneTab","restoreAll","optionPinnedTabsDontSendDesc","optionPinnedTabsAllow","exportUrls","optionDuplicatesAllow","bringAllTabsIntoOneTab","import","total0Tabs","2tabs","optionPinnedTabsTitle","manifestDescription","displayOneTab","memoryBefore1981","optionDuplicatesTitle","sendAllTabsToOneTab","optionTabGroupRestoreNewWindowAlways","newExclamation","userLanguage","sendCurrentTabToOneTab","optionDuplicatesReject","save95PctReduceTabClutterGoogleChrome","areYouSureYouWantToDeleteThisTab","pasteInUrlsInstructions","1tab","exportThenImportNote","optionRestoreRemovalTitle","excludeWebSiteFromOneTab","optionStartupLaunchNoneDesc","sendAllTabsAllWindowsToOneTab","optionRestoreRemovalKeep","total2Tabs","deleteAll","createdPreceedingDate","sendAllTabsExceptThisTabToPlaceholder","optionPinnedTabsNote","starTabGroup","total1Tab","unlockTabGroup","help","optionTabGroupRestoreTitle","sendRightTabsToPlaceholder","areYouSureYouWantToDeleteTheseTabs","shareAsWebPage","optionStartupLaunchTitle","sendLeftTabsToPlaceholder","reduceMemoryUsageBy95Pct","sendAllTabsExceptThisToOneTab"];var UV={};for(var uV in oV)UV[oV[uV]]=aK(oV[uV]);setTimeout(function(){zV(UV)},1);return true});var Q=function(PV){window['chrome']['tabs']['query']({'active':true,'currentWindow':true},function(QP){if(QP&&QP.length==1)PV(QP[0])})};var gK=window['chrome']['runtime']['getURL']('onetab.html');var L=gK.substr(0,gK.length-'onetab.html'.length);function NX(gV,cV){window['chrome']['runtime']['onMessage']['addListener'](function(rP,HP,RP){if(rP.type==gV){var ZP=l1.parse(rP.lW);var TP={};cV(ZP,function(pl){if(!pl)pl={};TP.lW=l1.Zn(pl);RP(TP)});return true}})};function p1(vV,NV,wV){var iV={};iV.HW=vV;iV.lW={};if(NV)iV.lW=l1.Zn(NV);x1(function(fP){for(var KP in fP){if(X1(fP[KP]['url'])){window['chrome']['tabs']['sendMessage'](fP[KP]['id'],iV,function(Il){if(wV)wV(Il)})}}})};function PX(EV){window['chrome']['windows']['getLastFocused']({'populate':true},function(xP){window['chrome']['tabs']['query']({'windowId':xP['id']},function(ml){var jl;for(var Cl in ml){if(ml[Cl]['active'])jl=ml[Cl]}EV(ml,jl)})})};function x1(XV,AV){window['chrome']['windows']['getLastFocused'](undefined,function(FP){window['chrome']['windows']['getAll']({'populate':true},function(Ll){for(var yl in Ll){var al=Ll[yl];if(AV&&(al['id']==FP['id']))continue;XV(al['tabs'])}})})};function b1(bV){window['chrome']['tabs']['query']({},function(pP){bV(pP)})};function Kj(OV,qV){window['chrome']['windows']['getLastFocused'](undefined,function(IP){window['chrome']['tabs']['query']({},function(zl){var Ul={};for(var ul in zl){var ol=zl[ul];var cl=ol['windowId'];if(qV&&(cl==IP['id']))continue;if(!Ul[cl])Ul[cl]=[];Ul[cl].push(ol)}var Sl=[];for(var ul in Ul){var gl=[];for(var Pl in Ul[ul])gl.push(Ul[ul][Pl]);Sl.push(gl)}OV(Sl)})})};function KK(sV,dV){window['chrome']['tabs']['reload'](sV['id'],{},function(){dV()})};function U(hV,kV){window['chrome']['tabs']['remove'](hV['id'],function(){if(kV)kV()})};function RK(GV,WV){var JV=[];for(var _V in GV)JV.push(GV[_V]);while(JV.length>0){var MV=JV.pop();U(MV,function(){RK(JV,function(){WV()})})}};function B(BO,nO){window['chrome']['tabs']['update'](BO['id'],{'active':true},function(){window['chrome']['windows']['update'](BO['windowId'],{'focused':true},function(){if(nO)nO()})})};function fj(lO,eO){window['chrome']['tabs']['create']({'url':lO},function(){if(eO)eO()})};function wK(YO,DO,VO,$O){window['chrome']['windows']['getLastFocused']({'populate':true},function(mP){window['chrome']['tabs']['create']({'windowId':mP['id'],'pinned':!!DO,'active':!!VO,'url':YO},function(){if($O)$O()})})};function fK(rO,QO){window['chrome']['windows']['create']({'focused':true,'url':rO[0]['url']},function(CP){window['chrome']['tabs']['query']({'windowId':CP['id']},function(wl){window['chrome']['tabs']['update'](wl[0]['id'],{'pinned':!!rO[0]['pinned']},function(){if(rO.length==1){if(QO)QO()}else {for(var ZO=1;ZO<rO.length;ZO++){var HO=rO[ZO];var TO=function(By){wK(HO['url'],!!HO['pinned'],false,function(){if(By==(rO.length-1))if(QO)QO()})}(ZO)}}})})})};function cj(KO,RO,xO){if(KO)RO['parentId']=KO.Jj;var fO={};fO.Jj=window['chrome']['contextMenus']['create'](RO);if(xO)setTimeout(xO,1);return fO};function yK(FO,IO,CO){if(FO)IO['parentId']=FO.Jj;var pO=IO.title;var mO={};mO.Jj=window['chrome']['contextMenus']['create'](IO);mO.pW=function(jP){window['chrome']['contextMenus']['update'](mO.Jj,{'enabled':jP},function(){})};mO._j=function(yP){window['chrome']['contextMenus']['update'](mO.Jj,{'type':'checkbox','checked':yP},function(){})};mO.$W=function(aP){window['chrome']['contextMenus']['update'](mO.Jj,{'title':aP},function(){})};if(CO)setTimeout(CO,1);return mO};function X(yO,jO){if(yO){window['chrome']['contextMenus']['removeAll'](function(){jO()})}else jO()};function lX(aO){var LO={'type':'separator','contexts':['all']};if(aO)LO['parentId']=aO.Jj;window['chrome']['contextMenus']['create'](LO)};function AK(){};AK.prototype.kj=function(zO,oO,UO){window['localStorage'][zO]=oO;UO()};AK.prototype.dW=function(SO,uO){uO(window['localStorage'][SO])};var nK=new AK();function pK(){return nK};function IK(PO){window['chrome']['browserAction']['onClicked']['addListener'](function(LP){PO()})};function TK(){window['chrome']['commands']['onCommand']['addListener'](function(UP){if(UP=='display-onetab'){mj()}if(UP=='send-current-tab-to-onetab'){gX()}if(UP=='send-all-tabs-in-current-window-to-onetab'){Nj()}if(UP=='send-all-tabs-in-all-windows-to-onetab'){rj(undefined,undefined)}if(UP=='send-all-tabs-except-this-to-onetab'){Zj(undefined,undefined)}})};function pX(cO){window['chrome']['tabs']['onCreated']['addListener'](function(oP){window['chrome']['tabs']['get'](oP['id'],function(Nl){cO()})});window['chrome']['tabs']['onUpdated']['addListener'](function(zP,SP,uP){cO()});window['chrome']['tabs']['onMoved']['addListener'](function(PP,cP){cO()});window['chrome']['tabs']['onRemoved']['addListener'](function(gP,wP){cO()});window['chrome']['tabs']['onReplaced']['addListener'](function(vP,NP){cO()});window['chrome']['tabs']['onDetached']['addListener'](function(iP,EP){cO()});window['chrome']['tabs']['onAttached']['addListener'](function(AP,XP){cO()});var wO={};var NO=undefined;var gO=undefined;window['chrome']['tabs']['onActivated']['addListener'](function(bP){window['chrome']['tabs']['get'](bP['tabId'],function(il){if(!il)return; var vl=NO?NO:undefined;wO[il['windowId']]=il;if(typeof gO==='undefined')gO=il['windowId'];if(gO==il['windowId'])NO=il;if(vl!=NO['id'])cO()})});window['chrome']['windows']['onFocusChanged']['addListener'](function(OP){var qP=NO?NO['id']:undefined;gO=OP;if(wO.hasOwnProperty(gO)){NO=wO[gO]}if(NO&&(qP!=NO['id']))cO()})};function bX(vO){window['chrome']['tabs']['query']({},function(sP){vO()})};function mX(iO){return window['chrome']['runtime']['getURL'](iO)};function aK(EO){return window['chrome']['i18n']['getMessage'](EO)};var F={};var KX=function(){F.BW=undefined;F.NW=undefined;F.xW=undefined;F.ZW=[];F.fW=[];F.YW=[];F.Yn=[];F.nn=[];F.Wj=[];F.IW=[];F.XW=undefined};var q1=function(AO,XO){for(var bO in AO){var OO=AO[bO];for(var qO in OO){OO[qO].pW(XO)}}};function s1(){setTimeout(function(){z(SK)},100)};var N='';function z(sO){B1(function(dP,hP){Kj(function(El){PX(function(kO,Dv){var Bv=false;if(!Dv||!Dv['url']){if(cX)console.log('no active tab (A)');return }var _O=Dv['url'];Bv=X1(_O);F.NW.pW(!Bv);N=Dv['url'];F.XW.pW(!Bv);if(Dv['url']&&(Dv['url'].toLowerCase().indexOf('http')==0)){F.XW.$W(aK('excludeDomainFromOneTab').replace('DOMAIN.COM',xK(Dv['url'])))}else {F.XW.$W(aK('excludeWebSiteFromOneTab'))}F.XW._j(Z(_O,dP));q1([F.ZW,F.fW,F.YW,F.Yn,F.nn,F.Wj],true);var nv=false;var dO=false;var hO=false;var WO=false;var lv=false;for(var MO in kO){if(Dv){if(parseInt(kO[MO]['index'])<parseInt(Dv['index'])){if(kO[MO]['url']){if(!X1(kO[MO]['url']))nv=true}}if(parseInt(kO[MO]['index'])>parseInt(Dv['index'])){if(kO[MO]['url']){if(!X1(kO[MO]['url']))dO=true}}if(!X1(kO[MO]['url'])){WO=true;if(kO[MO]['id']!=Dv['id'])hO=true}}}for(var MO in El){var Vv=El[MO];for(var GO in Vv){var JO=Vv[GO];if(!X1(JO['url']))lv=true}}if(!WO)q1([F.ZW],false);if(Bv||!WO)q1([F.fW],false);if(!nv)q1([F.YW],false);if(!dO)q1([F.Yn],false);if(!lv)q1([F.nn],false);if(!hO)q1([F.Wj],false)})},true)},sO)};function cK($v,Yv){X(F.BW,function(){KX();gj(Yv);s1();if($v)$v()})};Ej('recreateContextMenus',function(rv,Qv){cK(Qv,SK)});function gj(Fv){F.BW=cj(undefined,{'type':'normal','contexts':['all'],'title':'OneTab'});F.NW=yK(F.BW,{'type':'normal','title':aK('displayOneTab'),'contexts':['all'],'onclick':function(MP,kP){T1()}});var xv=yK(F.BW,{'type':'normal','title':aK('sendAllTabsToOneTab'),'contexts':['all'],'onclick':function(WP,GP){Nj(undefined,SK)}});F.ZW.push(xv);var pv=yK(F.BW,{'type':'normal','title':aK('sendThisWebLinkToOneTab'),'contexts':['link'],'onclick':function(JP,_P){RX(JP,_P,undefined,SK)}});F.IW.push(pv);lX(F.BW);var fv=yK(F.BW,{'type':'normal','title':aK('sendOnlyThisTabToOneTab'),'contexts':['all'],'onclick':function(nG,BG){gX(undefined,undefined,SK)}});F.fW.push(fv);var Rv=yK(F.BW,{'type':'normal','title':aK('sendAllTabsExceptThisToOneTab'),'contexts':['all'],'onclick':function(lG,eG){Zj(undefined,undefined,SK)}});F.Wj.push(Rv);var Zv=yK(F.BW,{'type':'normal','title':aK('sendLeftTabsToOneTab'),'contexts':['all'],'onclick':function(VG,DG){D1(undefined,SK)}});F.YW.push(Zv);var Kv=yK(F.BW,{'type':'normal','title':aK('sendRightTabsToOneTab'),'contexts':['all'],'onclick':function(YG,$G){Rj(undefined,SK)}});F.Yn.push(Kv);var Hv=yK(F.BW,{'type':'normal','title':aK('sendAllTabsAllWindowsToOneTab'),'contexts':['all'],'onclick':function(rG,QG){rj(undefined,undefined,SK)}});F.nn.push(Hv);lX(F.BW);F.XW=yK(F.BW,{'type':'checkbox','checked':false,'contexts':['all'],'title':aK('excludeWebSiteFromOneTab'),'onclick':function(ZG,HG){B1(function(Al,ql){var bl=xK(N);var Xl=Uj(bl,Al);if(Xl){O(bl,function(){s1()},ql)}else {ij(bl,function(){s1()},ql)}},SK)}});var Tv=false;Aj(function(FG,pG){var TG=FG['tabGroups'];if(!TG)TG=[];for(var xG=0;xG<TG.length;xG++){var KG=TG[xG];if(KG['label']&&I(KG['label'])!=''){Tv=true;break}}if(Tv){lX(F.BW);F.xW=cj(F.BW,{'type':'normal','contexts':['all'],'title':aK('namedTabGroups')},function(){for(var sl=0;sl<TG.length;sl++){var Ol=TG[sl];if(Ol['label']&&I(Ol['label'])!=''){var dl=function(mv){var Iv=cj(F.xW,{'type':'normal','contexts':['all'],'title':mv['label']},function(){F.ZW.push(yK(Iv,{'type':'normal','title':aK('sendAllTabsToPlaceholder').replace('PLACEHOLDER',mv['label']),'contexts':['all'],'onclick':function(nk,Bk){Nj(mv['id'],SK)}}));F.IW.push(yK(Iv,{'type':'normal','title':aK('sendThisWebLinkToPlaceholder').replace('PLACEHOLDER',mv['label']),'contexts':['link'],'onclick':function(lk,ek){RX(lk,ek,mv['id'],SK)}}));F.fW.push(yK(Iv,{'type':'normal','title':aK('sendOnlyThisTabToPlaceholder').replace('PLACEHOLDER',mv['label']),'contexts':['all'],'onclick':function(Vk,Dk){gX(mv['id'],undefined,SK)}}));F.Wj.push(yK(Iv,{'type':'normal','title':aK('sendAllTabsExceptThisTabToPlaceholder').replace('PLACEHOLDER',mv['label']),'contexts':['all'],'onclick':function(Yk,$k){Zj(mv['id'],undefined,SK)}}));F.YW.push(yK(Iv,{'type':'normal','title':aK('sendLeftTabsToPlaceholder').replace('PLACEHOLDER',mv['label']),'contexts':['all'],'onclick':function(rk,Qk){D1(mv['id'],SK)}}));F.Yn.push(yK(Iv,{'type':'normal','title':aK('sendRightTabsToPlaceholder').replace('PLACEHOLDER',mv['label']),'contexts':['all'],'onclick':function(Zk,Hk){Rj(mv['id'],SK)}}));F.nn.push(yK(Iv,{'type':'normal','title':aK('sendAllTabsAllWindowsToPlaceholder').replace('PLACEHOLDER',mv['label']),'contexts':['all'],'onclick':function(Rk,Tk){rj(mv['id'],undefined,SK)}}))})}(Ol)}}})}lX(F.BW);var RG=yK(F.BW,{'type':'normal','title':aK('help'),'contexts':['all'],'onclick':function(kl,hl){fj(Hj+'/help')}});if(cX){var fG=yK(F.BW,{'type':'normal','title':'debug','contexts':['all'],'onclick':function(Gl,Ml){Aj(function(Cv,jv){console.log(l1.Zn(Cv));eK(function(ny,ey){console.log(l1.Zn(ny));B1(function(fk,Kk){console.log(fk);pK().dW('installDate',function(BY,nY){console.log('installDate',BY);pK().dW('lastSeenVersion',function(B$,n$){console.log('lastSeenVersion',B$)},nY)},Kk)},ey)},jv)},SK)}})}},Fv)};var l1={Zn:function(Uv){var yv,ov,zv,av='',Lv;switch(typeof Uv){case 'object':;if(Uv){if(Uv instanceof Array){for(ov=0;ov<Uv.length;++ov){Lv=this.Zn(Uv[ov]);if(av){av+=','}av+=Lv}return '['+av+']'}else if(typeof Uv.toString!='undefined'){for(ov in Uv){Lv=Uv[ov];if(typeof Lv!='undefined'&&typeof Lv!='function'){Lv=this.Zn(Lv);if(av){av+=','}av+=this.Zn(ov)+':'+Lv}}return '{'+av+'}'}}return 'null';case 'number':;return isFinite(Uv)?String(Uv):'null';case 'string':;zv=Uv.length;av='\"';for(ov=0;ov<zv;ov+=1){yv=Uv.charAt(ov);if(yv>=' '){if(yv=='\\'||yv=='\"'){av+='\\'}av+=yv}else {switch(yv){case '\b':;av+='\\b';break;case '\f':;av+='\\f';break;case '\n':;av+='\\n';break;case '\r':;av+='\\r';break;case '\t':;av+='\\t';break;default:; yv=yv.charCodeAt();av+='\\u00'+Math.floor(yv/16).toString(16)+(yv%16).toString(16)}}}return av+'\"';case 'boolean':;return String(Uv);default:; return 'null'}},parse:function(Ev){var gv=0;var Nv=' ';function Av(IG){throw {name:'JSONError',message:IG,mW:gv-1,text:Ev}};function uv(){Nv=Ev.charAt(gv);gv+=1;return Nv};function wv(){while(Nv!==''&&Nv<=' '){uv()}};function Sv(){var yG,mG='',CG,jG;if(Nv=='\"'){d:while(uv()){if(Nv=='\"'){uv();return mG}else if(Nv=='\\'){switch(uv()){case 'b':;mG+='\b';break;case 'f':;mG+='\f';break;case 'n':;mG+='\n';break;case 'r':;mG+='\r';break;case 't':;mG+='\t';break;case 'u':;jG=0;for(yG=0;yG<4;yG+=1){CG=parseInt(uv(),16);if(!isFinite(CG)){break d}jG=jG*16+CG}mG+=String.fromCharCode(jG);break;default:; mG+=Nv}}else {mG+=Nv}}}Av("Bad string")};function Pv(){var aG=[];if(Nv=='['){uv();wv();if(Nv==']'){uv();return aG}while(Nv){aG.push(cv());wv();if(Nv==']'){uv();return aG}else if(Nv!=','){break}uv();wv()}}Av("Bad array")};function vv(){var LG,UG={};if(Nv=='{'){uv();wv();if(Nv=='}'){uv();return UG}while(Nv){LG=Sv();wv();if(Nv!=':'){break}uv();UG[LG]=cv();wv();if(Nv=='}'){uv();return UG}else if(Nv!=','){break}uv();wv()}}Av("Bad object")};function iv(){var zG='',oG;if(Nv=='-'){zG='-';uv()}while(Nv>='0'&&Nv<='9'){zG+=Nv;uv()}if(Nv=='.'){zG+='.';while(uv()&&Nv>='0'&&Nv<='9'){zG+=Nv}}if(Nv=='e'||Nv=='E'){zG+='e';uv();if(Nv=='-'||Nv=='+'){zG+=Nv;uv()}while(Nv>='0'&&Nv<='9'){zG+=Nv;uv()}}oG=+zG;if(!isFinite(oG)){Av("Bad number")}else {return oG}};function Xv(){switch(Nv){case 't':;if(uv()=='r'&&uv()=='u'&&uv()=='e'){uv();return true}break;case 'f':;if(uv()=='a'&&uv()=='l'&&uv()=='s'&&uv()=='e'){uv();return false}break;case 'n':;if(uv()=='u'&&uv()=='l'&&uv()=='l'){uv();return null}break}Av("Syntax error")};function cv(){wv();switch(Nv){case '{':;return vv();case '[':;return Pv();case '\"':;return Sv();case '-':;return iv();default:; return Nv>='0'&&Nv<='9'?iv():Xv()}};return cv()}};function xK(bv){if(bv.indexOf('://')==-1)bv='http://'+bv;bv=bv.substring(bv.indexOf('://')+'://'.length);if(bv.indexOf('/')!=-1)bv=bv.substring(0,bv.indexOf('/'));return bv.toLowerCase()};function Q1(qv){if(qv.indexOf('://')==-1)return 'https://';qv=qv.substring(0,qv.indexOf('://')+'://'.length);return qv.toLowerCase()};function HK(Ov,dv){for(var sv in Ov)if(Ov[sv]==dv)return true;return false};function _K(hv){if(typeof hv=='string')hv=document.getElementById(hv);if(!hv)return; while(hv.childNodes.length>0)hv.removeChild(hv.childNodes[0])};function zj(Mv){var kv=document.createElement('div');kv.style.fontSize='1px';kv.style.height=Mv+'px';kv.style.width=1+'px';return kv};function hK(Gv,Wv){for(var _v=0;_v<Wv.length;_v++){if(Wv[_v]==Gv){Wv.splice(_v,1);_v--}}};function Lj(DT){var eT=DT?DT:window.event;var lT=0;var Jv=0;var BT=0;var nT=0;if(eT!=null){if(Xj){BT=eT.shiftKey;Jv=eT.altKey;lT=eT.ctrlKey}else {BT=eT.shiftKey;lT=eT.ctrlKey;Jv=eT.altKey;nT=eT.metaKey}}return (lT||nT||BT)};function Y1(HT){var QT=HT?HT:window.event;var rT=0;var VT=0;var $T=0;var YT=0;if(QT!=null){if(Xj){$T=QT.shiftKey;VT=QT.altKey;rT=QT.ctrlKey}else {$T=QT.shiftKey;rT=QT.ctrlKey;VT=QT.altKey;YT=QT.metaKey}}return (rT||YT)};function g(xT){var fT=xT?xT:window.event;var KT=0;var ZT=0;var TT=0;var RT=0;if(fT!=null){if(Xj){TT=fT.shiftKey;ZT=fT.altKey;KT=fT.ctrlKey}else {TT=fT.shiftKey;KT=fT.ctrlKey;ZT=fT.altKey;RT=fT.metaKey}}return (TT)};function lK(FT){FT['noCacheRandom']=EX()};function EX(){return new Date().getTime()+Math.round(Math.random()*10000)+''};function O1(CT,mT,IT){lK(mT);var pT=l1.Zn(mT);W1(CT,pT,function(uG){if(IT)IT(l1.parse((uG)))})};function W1(LT,aT,yT){var jT=c1();jT.open(aT==null?"GET":"POST",LT,true);jT.setRequestHeader("Content-Type","text/json");jT.onreadystatechange=function(){var SG=false;SG=(jT.readyState==4);if(SG){var PG=jT.responseText;yT(PG)}};jT.send(aT)};function c1(){var UT=new XMLHttpRequest();return UT};function fX(){return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(gG){var cG=Math.random()*16|0,wG=gG=='x'?cG:(cG&0x3|0x8);return wG.toString(16)})};var Yj='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('');function y1(zT,oT){var PT=Yj,uT=[],ST=0;oT=oT||PT.length;zT=zT||22;for(ST=0;ST<zT;ST++)uT[ST]=PT[0|Math.random()*oT];return uT.join('')};function wj(){return y1()};function I(cT){if(!cT==null||cT==undefined)return '';return cT.replace(/^\s+/,'').replace(/\s+$/,'')};function DX(gT){var vT=document.createElement('span');var wT=gT.indexOf('OneTab');var NT=wT+'OneTab'.length;if(wT==0){vT.appendChild(P());vT.appendChild(document.createTextNode(gT.substring(NT)))}else {vT.appendChild(document.createTextNode(gT.substring(0,wT)));vT.appendChild(P());if(NT!=gT.length)vT.appendChild(document.createTextNode(gT.substring(NT)))}return vT};function P(){var iT=document.createElement('span');var ET=document.createElement('span');ET.style.fontStyle='italic';ET.appendChild(document.createTextNode('One'));iT.appendChild(ET);iT.appendChild(document.createTextNode('Tab'));return iT};function h(XT){var AT=XT.split('OneTab');var qT=document.createElement('span');for(var bT in AT){if(AT[bT]=='')qT.appendChild(P());else qT.appendChild(document.createTextNode(AT[bT]))}return qT};function Dj(OT){var hT=new Date(OT.valueOf()),sT=(OT.getUTCDay()+6)%7,dT;hT.setUTCDate(hT.getUTCDate()-sT+3);dT=hT.valueOf();hT.setUTCMonth(0,1);if(hT.getUTCDay()!==4){hT.setUTCMonth(0,1+((4-hT.getUTCDay())+7)%7)}return Math.ceil((dT-hT)/(7*24*3600*1000))+1};function uj(kT,MT){while(kT.length<MT)kT='0'+kT;return kT};function P1(GT){return (GT.getUTCFullYear()+'').substr(2)+uj(Dj(GT)+'',2)};function Qj(WT){if(WT==0)return aK('total0Tabs');if(WT==1)return aK('total1Tab');return aK('total2Tabs').replace('2',WT+'')};function AX(_T){var JT=(_T==1?aK('1tab'):(aK('2tabs').replace('2',_T+'')));return JT};function Bj(BQ,lQ){var nQ='';for(var eQ=0;eQ<lQ;eQ++)nQ+=BQ;return nQ};function $K(DQ){DQ.sort(function(NG,vG){if(NG['starred']||vG['starred']){if(!vG['starred'])return -1;else if(!NG['starred'])return 1;else {if(NG['starredDate']>vG['starredDate'])return 1;if(NG['starredDate']<vG['starredDate'])return -1;return 0}}else {if(NG['createDate']>vG['createDate'])return -1;if(NG['createDate']<vG['createDate'])return 1;return 0}})};function e1(VQ){if(!VQ)VQ='';return VQ.replace(/[\x00-\x1F\x7F-\x9F]/g,"")};function _($Q){W();$j(function(EG){var iG=function(Wl){IK(function(){Nj(undefined,SK)});bX(function(){pK().dW('lastSeenVersion',function(ly,Dy){B1(function(xk,Fk){Aj(function($Y,YY){var eY=$Y['tabGroups'];if(!eY)eY=[];var lY=0;for(var VY=0;VY<eY.length;VY++){var DY=eY[VY];lY+=DY['tabsMeta'].length}if(G1!=ly){pK().kj('lastSeenVersion',G1,function(e$){},YY)}else {if(lY>0&&J1('startupLaunch',xk)=='displayOneTab'){mj()}}},Fk)},Dy)},SK)});cK(undefined,Wl);TK();pX(function(){s1()})};pK().dW('installDate',function(_l,Jl){if(!_l){pK().kj('installDate',new Date().getTime(),function(YQ){iG(YQ)},Jl)}else {iG(Jl)}},EG)},$Q)};function W(){Ej('createNewTab',function(XG,AG){fj(XG.url,AG)});Ej('createNewTabInLastFocusedWindowWithOpts',function(qG,bG){wK(qG.url,!!qG.cW,!!qG.QW,bG)});Ej('createNewTabsInNewFocusedWindow',function(sG,OG){fK(sG.MW,OG)})};function B1(QQ,rQ){pK().dW('settings',function(dG,hG){if(!dG)QQ({},hG);else QQ(l1.parse(dG),hG)},rQ)};Ej('getSettings',function(ZQ,HQ){B1(HQ,SK)});function nj(TQ,RQ,fQ){pK().kj('settings',l1.Zn(TQ),RQ,fQ)};Ej('storeSettings',function(xQ,KQ){nj(xQ.Oj,KQ,SK)});var yj={'restoreWindow':'newWindow','pinnedTabs':'ignore','startupLaunch':'displayOneTab','restoreRemoval':'default','duplicates':'allow'};function G(pQ,FQ,IQ){B1(function(kG,MG){FQ(J1(pQ,kG,MG))},IQ)};Ej('getSetting',function(CQ,mQ){G(CQ.TW,function(GG){mQ({value:GG})},SK)});function J1(yQ,jQ){if(jQ[yQ])return jQ[yQ];else return yj[yQ]};function Aj(aQ,LQ){pK().dW('state',function(WG,_G){if(!WG){aQ({},_G)}else {aQ(l1.parse(WG),_G)}},LQ)};Ej('getState',function(oQ,UQ){Aj(UQ,SK)});function UX(uQ,zQ,SQ){pK().dW('state',function(e6,l6){var B6=e6;var JG=uQ['tabGroups'];for(var n6=0;n6<JG.length;n6++){if(JG[n6]['tabsMeta'].length==0){JG.splice(n6,1);n6--}}pK().kj('state',l1.Zn(uQ),function(BN){pK().dW('state',function(cQ,gQ){try{l1.parse(cQ)}catch(PQ){pK.kj('state',B6,function(Vy){if(!MVS)alert('Out of local storage memory - could not store extension state')},gQ)}finally{p1('storedStateChanged',{oW:uQ});if(zQ)zQ(gQ)}},BN)},l6)},SQ)};Ej('storeState',function(NQ,wQ){UX(NQ.oW,wQ,SK)});function iK(vQ,EQ,iQ,AQ){Aj(function(D6,V6){if(!D6[vQ])D6[vQ]=[];D6[vQ].push(EQ);UX(D6,function(nN){if(iQ)iQ(nN)},V6)},AQ)};function L1(OQ,qQ,XQ,bQ,sQ){var dQ={'id':wj(),'url':OQ,'title':e1(qQ)};g1(dQ,bQ,XQ,sQ)};function YK(kQ,hQ,MQ,GQ){if(X1(kQ['url'])){hQ(function(){});return }var WQ={'id':wj(),'url':kQ['url'],'title':e1(kQ['title'])};if((kQ['pinned']||kQ['isPinned']))WQ['pinned']=true;g1(WQ,MQ,function(){hQ(function(){U(kQ,function(){s1()})})},GQ)};function g1(nE,_Q,JQ,BE){Aj(function(Z6,R6){var Y6=Z6['tabGroups'];$K(Y6);var Q6=undefined;if(typeof _Q==='undefined'){for(var H6=0;H6<Y6.length;H6++){var r6=Y6[H6];if(r6['starred']||r6['locked'])continue;Q6=r6;Q6['tabsMeta'].splice(0,0,nE);break}}else {for(var H6=0;H6<Y6.length;H6++){var r6=Y6[H6];if(r6['id']==_Q){Q6=r6;Q6['tabsMeta'].splice(0,0,nE);break}}}if(!Q6){var T6=wj();Y6.push({'id':T6,'tabsMeta':[nE],'createDate':new Date().getTime()})}UX(Z6,JQ,R6)},BE)};function jX(lE,DE,eE,VE,$E){B1(function(f6,K6){Aj(function(FN,IN){var ZN=FN['tabGroups'];$K(ZN);var DN=[];for(var VN in lE){if(!DE)DN.push(lE[VN]);else {if(!Z(lE[VN]['url'],f6))DN.push(lE[VN])}}var pN=[];var fN=[];for(var VN=0;VN<DN.length;VN++){var RN=DN[VN];var HN=RN['url'];var TN=false;if(HN.indexOf('://tabmemfree.appspot.com')!=-1){TN=true;break}}if(TN){if(!MVS)alert('The OneTab extension is not compatible with TabMemFree. Please ensure that none of your tabs are parked with TabMemFree, then uninstall the TabMemFree extension and restart your web browser before using OneTab.');eE(function(){});return }d:for(var VN=0;VN<DN.length;VN++){var RN=DN[VN];var HN=RN['url'];if((RN['pinned']||RN['isPinned'])&&J1('pinnedTabs',f6)=='ignore'){continue}if(X1(HN)){continue}if($(HN)&&!X1(HN)){fN.push(RN);continue}if((HN.indexOf('chrome://chrome-signin')==0)||HN=='chrome://newtab/'||HN=='about:blank'||HN==''||HN=='about:home'||HN=='about:newtab'){fN.push(RN);continue}if(HN.indexOf('chrome-devtools://')==0){continue}if(J1('duplicates',f6)=='reject'){for(var YN in ZN){for(var QN in ZN[YN]['tabsMeta']){if(ZN[YN]['tabsMeta'][QN]['url']==HN){fN.push(RN);continue d}}}for(var YN in pN){if(pN[YN]['url']==HN){fN.push(RN);continue d}}}fN.push(RN);var KN={'id':wj(),'url':HN,'title':e1(RN['title'])};if((RN['pinned']||RN['isPinned']))KN['pinned']=true;pN.push(KN)}var eN=false;if(typeof VE==='undefined'){VE=wj();eN=true}var $N=function(){eE(function(){setTimeout(function(){RK(fN,function(){s1()})},1)})};if(eN){iK('tabGroups',{'id':VE,'tabsMeta':pN,'createDate':new Date().getTime()},function(){$N()},IN)}else {for(var YN=0;YN<ZN.length;YN++){var xN=ZN[YN];if(xN['id']==VE){var lN=xN;var rN=[];rN.push(0);rN.push(0);for(var QN in pN)rN.push(pN[QN]);Array.prototype.splice.apply(lN['tabsMeta'],rN);break}}UX(FN,function(B8){$N()},IN)}},K6)},$E)};function Z(QE,YE){return Uj(xK(QE),YE)};function Uj(HE,rE){if(rE['excludedDomains']){for(var ZE in rE['excludedDomains'])if(rE['excludedDomains'][ZE]==HE)return true}return false};function ij(TE,RE,fE){B1(function(x6,F6){if(!Uj(TE,x6)){if(!x6['excludedDomains'])x6['excludedDomains']=[];x6['excludedDomains'].push(TE);nj(x6,RE,F6)}else {RE(F6)}},fE)};function O(KE,xE,FE){B1(function(p6,m6){if(!p6['excludedDomains'])return; for(var I6=0;I6<p6['excludedDomains'].length;I6++){if(p6['excludedDomains'][I6]==KE){p6['excludedDomains'].splice(I6,1);nj(p6,function(mN){if(xE)xE()},m6);return }else {if(xE)xE()}}},FE)};var H1=function(){window['_gaq']=window['_gaq']||[];window['_gaq'].push(['_setAccount','UA-38573374-2']);window['_gaq'].push(['_trackPageview']);var IE=document.createElement('script');IE['type']='text/javascript';IE['async']=true;IE['src']='https://ssl.google-analytics.com/ga.js';var pE=document.getElementsByTagName('script')[0];pE.parentNode.insertBefore(IE,pE)};H1();_()