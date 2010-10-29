/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0
build: nightly
*/
YUI.add("yui-log",function(D){var C=D,E="yui:log",A="undefined",B={debug:1,info:1,warn:1,error:1};C.log=function(I,Q,F,O){var K,N,L,J,M,H=C,P=H.config,G=(H.fire)?H:YUI.Env.globalEvents;if(P.debug){if(F){N=P.logExclude;L=P.logInclude;if(L&&!(F in L)){K=1;}else{if(N&&(F in N)){K=1;}}}if(!K){if(P.useBrowserConsole){J=(F)?F+": "+I:I;if(H.Lang.isFunction(P.logFn)){P.logFn.call(H,I,Q,F);}else{if(typeof console!=A&&console.log){M=(Q&&console[Q]&&(Q in B))?Q:"log";console[M](J);}else{if(typeof opera!=A){opera.postError(J);}}}}if(G&&!O){if(G==H&&(!G.getEvent(E))){G.publish(E,{broadcast:2});}G.fire(E,{msg:I,cat:Q,src:F});}}}return H;};C.message=function(){return C.log.apply(C,arguments);};},"3.2.0",{requires:["yui-base"]});