/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0
build: nightly
*/
YUI.add("dd-scroll",function(B){var H=function(){H.superclass.constructor.apply(this,arguments);},C,D,L="host",A="buffer",J="parentScroll",G="windowScroll",I="scrollTop",F="scrollLeft",E="offsetWidth",K="offsetHeight";H.ATTRS={parentScroll:{value:false,setter:function(M){if(M){return M;}return false;}},buffer:{value:30,validator:B.Lang.isNumber},scrollDelay:{value:235,validator:B.Lang.isNumber},host:{value:null},windowScroll:{value:false,validator:B.Lang.isBoolean},vertical:{value:true,validator:B.Lang.isBoolean},horizontal:{value:true,validator:B.Lang.isBoolean}};B.extend(H,B.Base,{_scrolling:null,_vpRegionCache:null,_dimCache:null,_scrollTimer:null,_getVPRegion:function(){var M={},N=this.get(J),R=this.get(A),Q=this.get(G),U=((Q)?[]:N.getXY()),S=((Q)?"winWidth":E),P=((Q)?"winHeight":K),T=((Q)?N.get(I):U[1]),O=((Q)?N.get(F):U[0]);M={top:T+R,right:(N.get(S)+O)-R,bottom:(N.get(P)+T)-R,left:O+R};this._vpRegionCache=M;return M;},initializer:function(){var M=this.get(L);M.after("drag:start",B.bind(this.start,this));M.after("drag:end",B.bind(this.end,this));M.on("drag:align",B.bind(this.align,this));B.one("win").on("scroll",B.bind(function(){this._vpRegionCache=null;},this));},_checkWinScroll:function(Y){var X=this._getVPRegion(),M=this.get(L),O=this.get(G),S=M.lastXY,N=false,e=this.get(A),R=this.get(J),g=R.get(I),U=R.get(F),V=this._dimCache.w,a=this._dimCache.h,T=S[1]+a,W=S[1],d=S[0]+V,Q=S[0],f=W,P=Q,Z=g,c=U;if(this.get("horizontal")){if(Q<=X.left){N=true;P=S[0]-((O)?e:0);c=U-e;}if(d>=X.right){N=true;P=S[0]+((O)?e:0);c=U+e;}}if(this.get("vertical")){if(T>=X.bottom){N=true;f=S[1]+((O)?e:0);Z=g+e;}if(W<=X.top){N=true;f=S[1]-((O)?e:0);Z=g-e;}}if(Z<0){Z=0;f=S[1];}if(c<0){c=0;P=S[0];}if(f<0){f=S[1];}if(P<0){P=S[0];}if(Y){M.actXY=[P,f];M._moveNode({node:R,top:Z,left:c});if(!Z&&!c){this._cancelScroll();}}else{if(N){this._initScroll();}else{this._cancelScroll();}}},_initScroll:function(){this._cancelScroll();this._scrollTimer=B.Lang.later(this.get("scrollDelay"),this,this._checkWinScroll,[true],true);},_cancelScroll:function(){this._scrolling=false;if(this._scrollTimer){this._scrollTimer.cancel();delete this._scrollTimer;}},align:function(M){if(this._scrolling){this._cancelScroll();M.preventDefault();}if(!this._scrolling){this._checkWinScroll();}},_setDimCache:function(){var M=this.get(L).get("dragNode");this._dimCache={h:M.get(K),w:M.get(E)};},start:function(){this._setDimCache();},end:function(M){this._dimCache=null;this._cancelScroll();},toString:function(){return H.NAME+" #"+this.get("node").get("id");}});B.namespace("Plugin");C=function(){C.superclass.constructor.apply(this,arguments);};C.ATTRS=B.merge(H.ATTRS,{windowScroll:{value:true,setter:function(M){if(M){this.set(J,B.one("win"));}return M;}}});B.extend(C,H,{initializer:function(){this.set("windowScroll",this.get("windowScroll"));}});C.NAME=C.NS="winscroll";B.Plugin.DDWinScroll=C;D=function(){D.superclass.constructor.apply(this,arguments);};D.ATTRS=B.merge(H.ATTRS,{node:{value:false,setter:function(M){var N=B.one(M);if(!N){if(M!==false){B.error("DDNodeScroll: Invalid Node Given: "+M);}}else{N=N.item(0);this.set(J,N);}return N;}}});B.extend(D,H,{initializer:function(){this.set("node",this.get("node"));}});D.NAME=D.NS="nodescroll";B.Plugin.DDNodeScroll=D;B.DD.Scroll=H;},"3.2.0",{optional:["dd-proxy"],requires:["dd-drag"],skinnable:false});