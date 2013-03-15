AUI.add("aui-tree-node",function(ad){var S=ad.Lang,aG=S.isString,ax=S.isBoolean,aP="alwaysShowHitArea",O="",r="boundingBox",f="children",aC="clearfix",w="collapsed",a="container",ab="content",u="contentBox",i="expanded",o="helper",V="hidden",e="hitAreaEl",H="hitarea",T="icon",aO="iconEl",aq="id",ai="label",W="labelEl",R="lastSelected",aB="leaf",p="node",ak="over",Y="ownerTree",d="parentNode",av="radio",aM="rendered",aA="selected",s=" ",g="tree",I="tree-node",aK=function(){return Array.prototype.slice.call(arguments).join(s);},an=function(A){return(A instanceof ad.TreeNode);},aI=function(A){return(A instanceof ad.TreeView);},G=ad.getClassName,af=G(o,aC),y=G(g,w),b=G(g,a),aw=G(g,u),aQ=G(g,i),t=G(g,V),ar=G(g,H),F=G(g,T),j=G(g,ai),ay=G(g,p),E=G(g,p,ab),at=G(g,p,V,H),h=G(g,p,aB),aF=G(g,p,ak),J=G(g,p,aA),ac='<div class="'+ar+'"></div>',q='<div class="'+F+'"></div>',c='<div class="'+j+'"></div>',aN="<ul></ul>",v='<li class="'+ay+'"></li>',Z='<div class="'+aK(af,E)+'"></div>';var M=ad.Component.create({NAME:I,ATTRS:{boundingBox:{valueFn:function(){return ad.Node.create(v);}},contentBox:{valueFn:function(){return ad.Node.create(Z);}},draggable:{value:true,validator:ax},ownerTree:{value:null},label:{value:O,validator:aG},expanded:{value:false,validator:ax},id:{validator:aG,valueFn:function(){return ad.guid();}},leaf:{value:true,setter:function(A){if(A&&this.get(f).length){return false;}return A;},validator:ax},nextSibling:{getter:"_getSibling",value:null,validator:an},prevSibling:{getter:"_getSibling",value:null,validator:an},parentNode:{value:null,validator:function(A){return an(A)||aI(A);}},labelEl:{setter:ad.one,valueFn:function(){var A=this.get(ai);return ad.Node.create(c).html(A).unselectable();}},hitAreaEl:{setter:ad.one,valueFn:function(){return ad.Node.create(ac);}},alwaysShowHitArea:{value:true,validator:ax},iconEl:{setter:ad.one,valueFn:function(){return ad.Node.create(q);}},tabIndex:{value:null},rendered:{validator:ax,value:false}},AUGMENTS:[ad.TreeData],EXTENDS:ad.Base,prototype:{BOUNDING_TEMPLATE:v,CONTENT_TEMPLATE:Z,initializer:function(){var A=this;var aT=A.get(r);aT.setData(I,A);A._syncTreeNodeBBId();A._uiSetExpanded(A.get(i));A._uiSetLeaf(A.get(aB));},bindUI:function(){var A=this;A.after("childrenChange",ad.bind(A._afterSetChildren,A));A.after("expandedChange",ad.bind(A._afterExpandedChange,A));A.after("idChange",A._afterSetId,A);A.after("leafChange",ad.bind(A._afterLeafChange,A));},render:function(aT){var A=this;if(!A.get(aM)){A.renderUI();A.bindUI();A.syncUI();A.set(aM,true);}if(aT){var aU=A.get(r);var aV=A.get(ah);aU.appendTo(aT);if(aV){aU.insertBefore(aV.element);}}},renderUI:function(){var A=this;A._renderBoundingBox();A._renderContentBox();},syncUI:function(){var A=this;A._syncHitArea(A.get(f));},_afterExpandedChange:function(aT){var A=this;A._uiSetExpanded(aT.newVal);},_afterLeafChange:function(aT){var A=this;A._uiSetLeaf(aT.newVal);},_afterSetChildren:function(aT){var A=this;A._syncHitArea(aT.newVal);},_renderContentBox:function(aV){var A=this;var aT=A.get(u);if(!A.isLeaf()){var aU=A.get(i);aT.addClass(aU?aQ:y);if(aU){A.expand();}}return aT;},_renderBoundingBox:function(){var A=this;var aU=A.get(r);var aT=A.get(u);var aV=null;aT.append(A.get(aO));aT.append(A.get(W));aU.append(aT);var aV=A.get(a);if(aV){if(!A.get(i)){aV.addClass(t);}aU.append(aV);}return aU;},_createNodeContainer:function(){var A=this;var aT=A.get(a)||ad.Node.create(aN);aT.addClass(b);A.set(a,aT);return aT;},_syncHitArea:function(aT){var A=this;if(A.get(aP)||aT.length){A.showHitArea();}else{A.hideHitArea();A.collapse();}},appendChild:function(){var A=this;if(!A.isLeaf()){ad.TreeNode.superclass.appendChild.apply(A,arguments);}},collapse:function(){var A=this;A.set(i,false);},collapseAll:function(){var A=this;ad.TreeNode.superclass.collapseAll.apply(A,arguments);A.collapse();},contains:function(A){return A.isAncestor(this);},expand:function(){var A=this;A.set(i,true);},expandAll:function(){var A=this;ad.TreeNode.superclass.expandAll.apply(A,arguments);A.expand();},getDepth:function(){var aT=this;var aU=0;var A=aT.get(d);while(A){++aU;A=A.get(d);}return aU;},hasChildNodes:function(){var A=this;return(!A.isLeaf()&&ad.TreeNode.superclass.hasChildNodes.apply(this,arguments));},isSelected:function(){return this.get(u).hasClass(J);},isLeaf:function(){var A=this;return A.get(aB);},isAncestor:function(aU){var aT=this;var A=aT.get(d);while(A){if(A===aU){return true;}A=A.get(d);}return false;},toggle:function(){var A=this;if(A.get(i)){A.collapse();}else{A.expand();}},select:function(){var A=this;var aT=A.get(Y);if(aT){aT.set(R,A);}A.get(u).addClass(J);A.fire("select");},unselect:function(){var A=this;A.get(u).removeClass(J);A.fire("unselect");},over:function(){this.get(u).addClass(aF);},out:function(){this.get(u).removeClass(aF);},showHitArea:function(){var A=this;var aT=A.get(e);aT.removeClass(at);},hideHitArea:function(){var A=this;var aT=A.get(e);aT.addClass(at);},_syncTreeNodeBBId:function(aT){var A=this;A.get(r).attr(aq,A.get(aq));},_getSibling:function(aW,aT){var A=this;var aV="_"+aT;var aU=A[aV];if(aU!==null&&!an(aU)){aU=null;A[aV]=aU;}return aU;},_uiSetExpanded:function(aV){var A=this;if(!A.isLeaf()){var aU=A.get(a);var aT=A.get(u);if(aV){aT.replaceClass(y,aQ);if(aU){aU.removeClass(t);}}else{aT.replaceClass(aQ,y);if(aU){aU.addClass(t);}}}},_uiSetLeaf:function(aU){var A=this;var aT=A.get(u);if(aU){A.get(a).remove();A.get(e).remove();}else{aT.prepend(A.get(e));A._createNodeContainer();A._uiSetExpanded(A.get(i));}aT.toggleClass(h,aU);}}});ad.TreeNode=M;var au=S.isFunction,aH="cache",aj="io",aL="loaded",aR="loading",ah="paginator",ap="tree-node-io",z=G(g,p,aj,aR);var L=ad.Component.create({NAME:ap,ATTRS:{loading:{value:false,validator:ax},loaded:{value:false,validator:ax},cache:{value:true,validator:ax},leaf:{value:false,validator:ax}},AUGMENTS:[ad.TreeViewPaginator,ad.TreeViewIO],EXTENDS:ad.TreeNode,prototype:{bindUI:function(){var A=this;ad.TreeNodeIO.superclass.bindUI.apply(this,arguments);A.on("ioRequestSuccess",A._onIOSuccess,A);
},syncUI:function(){var A=this;ad.TreeNodeIO.superclass.syncUI.apply(this,arguments);},createNodes:function(aT){var A=this;ad.Array.each(ad.Array(aT),function(aV){var aU=A.createNode(aV);A.appendChild(aU);});A._syncPaginatorUI(aT);},expand:function(){var A=this;var aT=A.get(aH);var aW=A.get(aj);var aU=A.get(aL);var aV=A.get(aR);if(!aT){A.set(aL,false);}if(aW&&!aU&&!aV&&!this.hasChildNodes()){if(!aT){A.empty();}A.initIO();}else{ad.TreeNodeIO.superclass.expand.apply(this,arguments);}},_inheritOwnerTreeAttrs:function(){var A=this;var aT=A.get(Y);if(aT){if(!A.get(aj)){var aW=ad.clone(aT.get(aj),true,function(aY,aX){if(au(aY)&&(aY.defaultFn||aY.wrappedFn)){return false;}return true;});A.set(aj,aW);}if(!A.get(ah)){var aU=aT.get(ah);var aV=ad.clone(aU);if(aV&&aV.element){aV.element=aU.element.clone();}A.set(ah,aV);}}},_onIOSuccess:function(aT){var A=this;A.expand();}}});ad.TreeNodeIO=L;var k="checkbox",n="checked",aa="checkContainerEl",aD="checkEl",N="checkName",X=".",l="name",B="tree-node-check",ag=G(g,p,k),am=G(g,p,k,a),ao=G(g,p,n),Q='<div class="'+am+'"></div>',al='<input class="'+ag+'" type="checkbox" />';var az=ad.Component.create({NAME:B,ATTRS:{checked:{value:false,validator:ax},checkName:{value:B,validator:aG},checkContainerEl:{setter:ad.one,valueFn:function(){return ad.Node.create(Q);}},checkEl:{setter:ad.one,valueFn:function(){var A=this.get(N);return ad.Node.create(al).attr(l,A);}}},EXTENDS:ad.TreeNodeIO,prototype:{initializer:function(){var A=this;A._uiSetChecked(A.get(n));},renderUI:function(){var aT=this;ad.TreeNodeCheck.superclass.renderUI.apply(aT,arguments);var aU=aT.get(W);var A=aT.get(aD);var aV=aT.get(aa);A.hide();aV.append(A);aU.placeBefore(aV);if(aT.isChecked()){aT.check();}},bindUI:function(){var A=this;var aT=A.get(u);var aU=A.get(W);ad.TreeNodeCheck.superclass.bindUI.apply(A,arguments);A.after("checkedChange",ad.bind(A._afterCheckedChange,A));aT.delegate("click",ad.bind(A.toggleCheck,A),X+am);aT.delegate("click",ad.bind(A.toggleCheck,A),X+j);aU.swallowEvent("dblclick");},check:function(aT){var A=this;A.set(n,true,{originalTarget:aT});},uncheck:function(aT){var A=this;A.set(n,false,{originalTarget:aT});},toggleCheck:function(){var aT=this;var A=aT.get(aD);var aU=A.attr(n);if(!aU){aT.check();}else{aT.uncheck();}},isChecked:function(){var A=this;return A.get(n);},_afterCheckedChange:function(aT){var A=this;A._uiSetChecked(aT.newVal);},_uiSetChecked:function(aT){var A=this;if(aT){A.get(u).addClass(ao);A.get(aD).attr(n,n);}else{A.get(u).removeClass(ao);A.get(aD).attr(n,O);}}}});ad.TreeNodeCheck=az;var C="child",P="tree-node-task",K="unchecked",aE=function(A){return A instanceof ad.TreeNodeCheck;},ae=G(g,p,C,K);var aS=ad.Component.create({NAME:P,EXTENDS:ad.TreeNodeCheck,prototype:{check:function(aU){var A=this;var aT=A.get(u);aU=aU||A;if(!A.isLeaf()){A.eachChildren(function(aV){if(aE(aV)){aV.check(aU);}});}A.eachParent(function(aV){if(aE(aV)&&!aV.isChecked()){aV.get(u).addClass(ae);}});aT.removeClass(ae);ad.TreeNodeTask.superclass.check.call(this,aU);},uncheck:function(aU){var A=this;var aT=A.get(u);aU=aU||A;if(!A.isLeaf()){A.eachChildren(function(aV){if(aV instanceof ad.TreeNodeCheck){aV.uncheck(aU);}});}A.eachParent(function(aV){if(aE(aV)&&!aV.isChecked()){aV.get(u).removeClass(ae);}});aT.removeClass(ae);ad.TreeNodeTask.superclass.uncheck.call(this,aU);}}});ad.TreeNodeTask=aS;var D="tree-node-radio",m=function(A){return A instanceof ad.TreeNodeRadio;},x=G(g,p,av),U=G(g,p,av,n);var aJ=ad.Component.create({NAME:D,EXTENDS:ad.TreeNodeTask,prototype:{renderUI:function(){var A=this;ad.TreeNodeRadio.superclass.renderUI.apply(A,arguments);A.get(u).addClass(x);},check:function(){var A=this;A._uncheckNodesRadio();ad.TreeNodeRadio.superclass.check.apply(this,arguments);},_uiSetChecked:function(aT){var A=this;if(aT){A.get(u).addClass(U);A.get(aD).attr(n,n);}else{A.get(u).removeClass(U);A.get(aD).attr(n,O);}},_uncheckNodesRadio:function(aV){var A=this;var aU;if(aV){aU=aV.get(f);}else{var aT=A.get(Y);if(aT){aU=aT.get(f);}else{return;}}ad.Array.each(aU,function(aX,aW,aY){if(!aX.isLeaf()){A._uncheckNodesRadio(aX);}if(m(aX)){aX.uncheck();}});}}});ad.TreeNodeRadio=aJ;ad.TreeNode.nodeTypes={radio:ad.TreeNodeRadio,task:ad.TreeNodeTask,check:ad.TreeNodeCheck,node:ad.TreeNode,io:ad.TreeNodeIO};},"@VERSION@",{requires:["aui-tree-data","aui-tree-io","aui-tree-paginator","json","querystring-stringify"],skinnable:false});