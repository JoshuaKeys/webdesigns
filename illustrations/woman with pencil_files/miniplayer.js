(function(g){var window=this;var Y3=function(a,b){var c="ytp-miniplayer-button-bottom-right",d={G:"svg",T:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},R:[{G:"g",T:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},R:[{G:"g",T:{transform:"translate(-1.000000, -3.000000)"},R:[{G:"polygon",T:{points:"0 0 24 0 24 24 0 24"}},{G:"path",T:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Open video page";a.S().Z("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d={G:"svg",T:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},R:[{G:"g",T:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},R:[{G:"g",T:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},R:[{G:"path",T:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.U.call(this,{G:"button",ia:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],T:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},R:[d]});this.J=a;this.va("click",this.onClick,this);this.ya("title",g.KO(a,e,"i"));g.cg(this,g.hP(b.Qb(),this.element))},Z3=function(a){g.U.call(this,{G:"div",
N:"ytp-miniplayer-ui"});this.di=!1;this.player=a;this.P(a,"minimized",this.Dh);this.P(a,"onStateChange",this.gR)},$3=function(a){g.nO.call(this,a);
this.u=new Z3(this.player);this.u.hide();g.bO(this.player,this.u.element,4);a.ne()&&(this.load(),g.K(a.getRootNode(),"ytp-player-minimized",!0))};
g.u(Y3,g.U);Y3.prototype.onClick=function(){this.J.ua("onExpandMiniplayer")};g.u(Z3,g.U);g.k=Z3.prototype;
g.k.show=function(){this.de=new g.hn(this.ds,null,this);this.de.start();if(!this.di){this.tooltip=new g.hS(this.player,this);g.C(this,this.tooltip);g.bO(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Rb=new g.cP(this.player);g.C(this,this.Rb);this.Mk=new g.U({G:"div",N:"ytp-miniplayer-scrim"});g.C(this,this.Mk);this.Mk.fa(this.element);this.P(this.Mk.element,"click",this.eG);var a=new g.U({G:"button",ia:["ytp-miniplayer-close-button","ytp-button"],T:{"aria-label":"Close"},R:[g.$L()]});
g.C(this,a);a.fa(this.Mk.element);this.P(a.element,"click",this.Hj);a=new Y3(this.player,this);g.C(this,a);a.fa(this.Mk.element);g.P(this.player.S().experiments,"web_inline_player_after_video_preview")&&(a=new g.aR(this.player,this),g.C(this,a),a.fa(this.Mk.element));this.bn=new g.U({G:"div",N:"ytp-miniplayer-controls"});g.C(this,this.bn);this.bn.fa(this.Mk.element);this.P(this.bn.element,"click",this.eG);var b=new g.U({G:"div",N:"ytp-miniplayer-button-container"});g.C(this,b);b.fa(this.bn.element);
a=new g.U({G:"div",N:"ytp-miniplayer-play-button-container"});g.C(this,a);a.fa(this.bn.element);var c=new g.U({G:"div",N:"ytp-miniplayer-button-container"});g.C(this,c);c.fa(this.bn.element);this.yG=new g.fR(this.player,this,!1);g.C(this,this.yG);this.yG.fa(b.element);b=new g.cR(this.player,this);g.C(this,b);b.fa(a.element);this.nextButton=new g.fR(this.player,this,!0);g.C(this,this.nextButton);this.nextButton.fa(c.element);this.Gi=new g.WR(this.player,this);g.C(this,this.Gi);this.Gi.fa(this.Mk.element);
this.Wc=new g.kR(this.player,this);g.C(this,this.Wc);g.bO(this.player,this.Wc.element,4);this.Gu=new g.U({G:"div",N:"ytp-miniplayer-buttons"});g.C(this,this.Gu);g.bO(this.player,this.Gu.element,4);a=new g.U({G:"button",ia:["ytp-miniplayer-close-button","ytp-button"],T:{"aria-label":"Close"},R:[g.$L()]});g.C(this,a);a.fa(this.Gu.element);this.P(a.element,"click",this.Hj);a=new g.U({G:"button",ia:["ytp-miniplayer-replay-button","ytp-button"],T:{"aria-label":"Close"},R:[g.eM()]});g.C(this,a);a.fa(this.Gu.element);
this.P(a.element,"click",this.qP);this.P(this.player,"presentingplayerstatechange",this.Sb);this.P(this.player,"appresize",this.Qa);this.P(this.player,"fullscreentoggled",this.Qa);this.Qa();this.di=!0}0!==this.player.getPlayerState()&&g.U.prototype.show.call(this);this.Wc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.de&&(this.de.dispose(),this.de=void 0);g.U.prototype.hide.call(this);this.player.ne()||(this.di&&this.Wc.hide(),this.player.loadModule("annotations_module"))};
g.k.ca=function(){this.de&&(this.de.dispose(),this.de=void 0);g.U.prototype.ca.call(this)};
g.k.Hj=function(){this.player.stopVideo();this.player.ua("onCloseMiniplayer")};
g.k.qP=function(){this.player.playVideo()};
g.k.eG=function(a){if(a.target===this.Mk.element||a.target===this.bn.element)g.P(this.player.S().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.aL(this.player.Ua())?this.player.pauseVideo():this.player.playVideo():this.player.ua("onExpandMiniplayer")};
g.k.Dh=function(){g.K(this.player.getRootNode(),"ytp-player-minimized",this.player.ne())};
g.k.qe=function(){this.Wc.Cb();this.Gi.Cb()};
g.k.ds=function(){this.qe();this.de&&this.de.start()};
g.k.Sb=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.Qa=function(){g.vR(this.Wc,0,this.player.Ia().getPlayerSize().width,!1);g.mR(this.Wc)};
g.k.gR=function(a){this.player.ne()&&(0===a?this.hide():this.show())};
g.k.Qb=function(){return this.tooltip};
g.k.ue=function(){return!1};
g.k.Me=function(){return!1};
g.k.gi=function(){return!1};
g.k.nA=function(){};
g.k.dn=function(){};
g.k.Lq=function(){};
g.k.Bl=function(){return null};
g.k.mj=function(){return new g.gg(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Jp=function(a,b,c,d,e){var f=0,h=d=0,l=g.Ig(a);if(b){c=g.sn(b,"ytp-prev-button")||g.sn(b,"ytp-next-button");var m=g.sn(b,"ytp-play-button"),n=g.sn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Gg(b,this.element),h=b.x,f=b.y-12):n&&(h=g.sn(b,"ytp-miniplayer-button-top-left"),f=g.Gg(b,this.element),b=g.Ig(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Ia().getPlayerSize().width;e=f+(e||0);l=g.be(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Rk=function(){};
g.k.lk=function(){return!1};g.u($3,g.nO);$3.prototype.create=function(){};
$3.prototype.Ci=function(){return!1};
$3.prototype.load=function(){this.player.hideControls();this.u.show()};
$3.prototype.unload=function(){this.player.showControls();this.u.hide()};g.tO.miniplayer=$3;})(_yt_player);
