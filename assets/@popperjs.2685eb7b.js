var R="top",S="bottom",T="right",B="left",ye="auto",ae=[R,S,T,B],J="start",_="end",nt="clippingParents",$e="viewport",Z="popper",at="reference",Pe=ae.reduce(function(e,t){return e.concat([t+"-"+J,t+"-"+_])},[]),Re=[].concat(ae,[ye]).reduce(function(e,t){return e.concat([t,t+"-"+J,t+"-"+_])},[]),ot="beforeRead",it="read",st="afterRead",ft="beforeMain",pt="main",ct="afterMain",ut="beforeWrite",lt="write",vt="afterWrite",dt=[ot,it,st,ft,pt,ct,ut,lt,vt];function V(e){return e?(e.nodeName||"").toLowerCase():null}function M(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function K(e){var t=M(e).Element;return e instanceof t||e instanceof Element}function k(e){var t=M(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Be(e){if(typeof ShadowRoot>"u")return!1;var t=M(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Tt(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},a=t.attributes[r]||{},o=t.elements[r];!k(o)||!V(o)||(Object.assign(o.style,n),Object.keys(a).forEach(function(p){var s=a[p];s===!1?o.removeAttribute(p):o.setAttribute(p,s===!0?"":s)}))})}function kt(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var a=t.elements[n],o=t.attributes[n]||{},p=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),s=p.reduce(function(i,c){return i[c]="",i},{});!k(a)||!V(a)||(Object.assign(a.style,s),Object.keys(o).forEach(function(i){a.removeAttribute(i)}))})}}const Ce={name:"applyStyles",enabled:!0,phase:"write",fn:Tt,effect:kt,requires:["computeStyles"]};function H(e){return e.split("-")[0]}var G=Math.max,ge=Math.min,ee=Math.round;function De(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ht(){return!/^((?!chrome|android).)*safari/i.test(De())}function te(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),a=1,o=1;t&&k(e)&&(a=e.offsetWidth>0&&ee(n.width)/e.offsetWidth||1,o=e.offsetHeight>0&&ee(n.height)/e.offsetHeight||1);var p=K(e)?M(e):window,s=p.visualViewport,i=!ht()&&r,c=(n.left+(i&&s?s.offsetLeft:0))/a,f=(n.top+(i&&s?s.offsetTop:0))/o,h=n.width/a,y=n.height/o;return{width:h,height:y,top:f,right:c+h,bottom:f+y,left:c,x:c,y:f}}function Se(e){var t=te(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function mt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Be(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function N(e){return M(e).getComputedStyle(e)}function Mt(e){return["table","td","th"].indexOf(V(e))>=0}function q(e){return((K(e)?e.ownerDocument:e.document)||window.document).documentElement}function be(e){return V(e)==="html"?e:e.assignedSlot||e.parentNode||(Be(e)?e.host:null)||q(e)}function Je(e){return!k(e)||N(e).position==="fixed"?null:e.offsetParent}function Lt(e){var t=/firefox/i.test(De()),r=/Trident/i.test(De());if(r&&k(e)){var n=N(e);if(n.position==="fixed")return null}var a=be(e);for(Be(a)&&(a=a.host);k(a)&&["html","body"].indexOf(V(a))<0;){var o=N(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function pe(e){for(var t=M(e),r=Je(e);r&&Mt(r)&&N(r).position==="static";)r=Je(r);return r&&(V(r)==="html"||V(r)==="body"&&N(r).position==="static")?t:r||Lt(e)||t}function Te(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function se(e,t,r){return G(e,ge(t,r))}function Wt(e,t,r){var n=se(e,t,r);return n>r?r:n}function gt(){return{top:0,right:0,bottom:0,left:0}}function yt(e){return Object.assign({},gt(),e)}function bt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var Ht=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,yt(typeof t!="number"?t:bt(t,ae))};function Vt(e){var t,r=e.state,n=e.name,a=e.options,o=r.elements.arrow,p=r.modifiersData.popperOffsets,s=H(r.placement),i=Te(s),c=[B,T].indexOf(s)>=0,f=c?"height":"width";if(!(!o||!p)){var h=Ht(a.padding,r),y=Se(o),u=i==="y"?R:B,w=i==="y"?S:T,d=r.rects.reference[f]+r.rects.reference[i]-p[i]-r.rects.popper[f],v=p[i]-r.rects.reference[i],b=pe(o),O=b?i==="y"?b.clientHeight||0:b.clientWidth||0:0,E=d/2-v/2,l=h[u],m=O-y[f]-h[w],g=O/2-y[f]/2+E,x=se(l,g,m),D=i;r.modifiersData[n]=(t={},t[D]=x,t.centerOffset=x-g,t)}}function Nt(e){var t=e.state,r=e.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=t.elements.popper.querySelector(a),!a)||!mt(t.elements.popper,a)||(t.elements.arrow=a))}const wt={name:"arrow",enabled:!0,phase:"main",fn:Vt,effect:Nt,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function re(e){return e.split("-")[1]}var Ft={top:"auto",right:"auto",bottom:"auto",left:"auto"};function qt(e){var t=e.x,r=e.y,n=window,a=n.devicePixelRatio||1;return{x:ee(t*a)/a||0,y:ee(r*a)/a||0}}function Ke(e){var t,r=e.popper,n=e.popperRect,a=e.placement,o=e.variation,p=e.offsets,s=e.position,i=e.gpuAcceleration,c=e.adaptive,f=e.roundOffsets,h=e.isFixed,y=p.x,u=y===void 0?0:y,w=p.y,d=w===void 0?0:w,v=typeof f=="function"?f({x:u,y:d}):{x:u,y:d};u=v.x,d=v.y;var b=p.hasOwnProperty("x"),O=p.hasOwnProperty("y"),E=B,l=R,m=window;if(c){var g=pe(r),x="clientHeight",D="clientWidth";if(g===M(r)&&(g=q(r),N(g).position!=="static"&&s==="absolute"&&(x="scrollHeight",D="scrollWidth")),g=g,a===R||(a===B||a===T)&&o===_){l=S;var P=h&&g===m&&m.visualViewport?m.visualViewport.height:g[x];d-=P-n.height,d*=i?1:-1}if(a===B||(a===R||a===S)&&o===_){E=T;var A=h&&g===m&&m.visualViewport?m.visualViewport.width:g[D];u-=A-n.width,u*=i?1:-1}}var j=Object.assign({position:s},c&&Ft),L=f===!0?qt({x:u,y:d}):{x:u,y:d};if(u=L.x,d=L.y,i){var $;return Object.assign({},j,($={},$[l]=O?"0":"",$[E]=b?"0":"",$.transform=(m.devicePixelRatio||1)<=1?"translate("+u+"px, "+d+"px)":"translate3d("+u+"px, "+d+"px, 0)",$))}return Object.assign({},j,(t={},t[l]=O?d+"px":"",t[E]=b?u+"px":"",t.transform="",t))}function Xt(e){var t=e.state,r=e.options,n=r.gpuAcceleration,a=n===void 0?!0:n,o=r.adaptive,p=o===void 0?!0:o,s=r.roundOffsets,i=s===void 0?!0:s,c={placement:H(t.placement),variation:re(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ke(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:p,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ke(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const ke={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Xt,data:{}};var he={passive:!0};function It(e){var t=e.state,r=e.instance,n=e.options,a=n.scroll,o=a===void 0?!0:a,p=n.resize,s=p===void 0?!0:p,i=M(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&c.forEach(function(f){f.addEventListener("scroll",r.update,he)}),s&&i.addEventListener("resize",r.update,he),function(){o&&c.forEach(function(f){f.removeEventListener("scroll",r.update,he)}),s&&i.removeEventListener("resize",r.update,he)}}const Me={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:It,data:{}};var Yt={left:"right",right:"left",bottom:"top",top:"bottom"};function me(e){return e.replace(/left|right|bottom|top/g,function(t){return Yt[t]})}var zt={start:"end",end:"start"};function Qe(e){return e.replace(/start|end/g,function(t){return zt[t]})}function Le(e){var t=M(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function We(e){return te(q(e)).left+Le(e).scrollLeft}function Ut(e,t){var r=M(e),n=q(e),a=r.visualViewport,o=n.clientWidth,p=n.clientHeight,s=0,i=0;if(a){o=a.width,p=a.height;var c=ht();(c||!c&&t==="fixed")&&(s=a.offsetLeft,i=a.offsetTop)}return{width:o,height:p,x:s+We(e),y:i}}function Gt(e){var t,r=q(e),n=Le(e),a=(t=e.ownerDocument)==null?void 0:t.body,o=G(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),p=G(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),s=-n.scrollLeft+We(e),i=-n.scrollTop;return N(a||r).direction==="rtl"&&(s+=G(r.clientWidth,a?a.clientWidth:0)-o),{width:o,height:p,x:s,y:i}}function He(e){var t=N(e),r=t.overflow,n=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function xt(e){return["html","body","#document"].indexOf(V(e))>=0?e.ownerDocument.body:k(e)&&He(e)?e:xt(be(e))}function fe(e,t){var r;t===void 0&&(t=[]);var n=xt(e),a=n===((r=e.ownerDocument)==null?void 0:r.body),o=M(n),p=a?[o].concat(o.visualViewport||[],He(n)?n:[]):n,s=t.concat(p);return a?s:s.concat(fe(be(p)))}function je(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Jt(e,t){var r=te(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Ze(e,t,r){return t===$e?je(Ut(e,r)):K(t)?Jt(t,r):je(Gt(q(e)))}function Kt(e){var t=fe(be(e)),r=["absolute","fixed"].indexOf(N(e).position)>=0,n=r&&k(e)?pe(e):e;return K(n)?t.filter(function(a){return K(a)&&mt(a,n)&&V(a)!=="body"}):[]}function Qt(e,t,r,n){var a=t==="clippingParents"?Kt(e):[].concat(t),o=[].concat(a,[r]),p=o[0],s=o.reduce(function(i,c){var f=Ze(e,c,n);return i.top=G(f.top,i.top),i.right=ge(f.right,i.right),i.bottom=ge(f.bottom,i.bottom),i.left=G(f.left,i.left),i},Ze(e,p,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Ot(e){var t=e.reference,r=e.element,n=e.placement,a=n?H(n):null,o=n?re(n):null,p=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,i;switch(a){case R:i={x:p,y:t.y-r.height};break;case S:i={x:p,y:t.y+t.height};break;case T:i={x:t.x+t.width,y:s};break;case B:i={x:t.x-r.width,y:s};break;default:i={x:t.x,y:t.y}}var c=a?Te(a):null;if(c!=null){var f=c==="y"?"height":"width";switch(o){case J:i[c]=i[c]-(t[f]/2-r[f]/2);break;case _:i[c]=i[c]+(t[f]/2-r[f]/2);break}}return i}function ne(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=n===void 0?e.placement:n,o=r.strategy,p=o===void 0?e.strategy:o,s=r.boundary,i=s===void 0?nt:s,c=r.rootBoundary,f=c===void 0?$e:c,h=r.elementContext,y=h===void 0?Z:h,u=r.altBoundary,w=u===void 0?!1:u,d=r.padding,v=d===void 0?0:d,b=yt(typeof v!="number"?v:bt(v,ae)),O=y===Z?at:Z,E=e.rects.popper,l=e.elements[w?O:y],m=Qt(K(l)?l:l.contextElement||q(e.elements.popper),i,f,p),g=te(e.elements.reference),x=Ot({reference:g,element:E,strategy:"absolute",placement:a}),D=je(Object.assign({},E,x)),P=y===Z?D:g,A={top:m.top-P.top+b.top,bottom:P.bottom-m.bottom+b.bottom,left:m.left-P.left+b.left,right:P.right-m.right+b.right},j=e.modifiersData.offset;if(y===Z&&j){var L=j[a];Object.keys(A).forEach(function($){var X=[T,S].indexOf($)>=0?1:-1,I=[R,S].indexOf($)>=0?"y":"x";A[$]+=L[I]*X})}return A}function Zt(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=r.boundary,o=r.rootBoundary,p=r.padding,s=r.flipVariations,i=r.allowedAutoPlacements,c=i===void 0?Re:i,f=re(n),h=f?s?Pe:Pe.filter(function(w){return re(w)===f}):ae,y=h.filter(function(w){return c.indexOf(w)>=0});y.length===0&&(y=h);var u=y.reduce(function(w,d){return w[d]=ne(e,{placement:d,boundary:a,rootBoundary:o,padding:p})[H(d)],w},{});return Object.keys(u).sort(function(w,d){return u[w]-u[d]})}function _t(e){if(H(e)===ye)return[];var t=me(e);return[Qe(e),t,Qe(t)]}function er(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var a=r.mainAxis,o=a===void 0?!0:a,p=r.altAxis,s=p===void 0?!0:p,i=r.fallbackPlacements,c=r.padding,f=r.boundary,h=r.rootBoundary,y=r.altBoundary,u=r.flipVariations,w=u===void 0?!0:u,d=r.allowedAutoPlacements,v=t.options.placement,b=H(v),O=b===v,E=i||(O||!w?[me(v)]:_t(v)),l=[v].concat(E).reduce(function(Q,F){return Q.concat(H(F)===ye?Zt(t,{placement:F,boundary:f,rootBoundary:h,padding:c,flipVariations:w,allowedAutoPlacements:d}):F)},[]),m=t.rects.reference,g=t.rects.popper,x=new Map,D=!0,P=l[0],A=0;A<l.length;A++){var j=l[A],L=H(j),$=re(j)===J,X=[R,S].indexOf(L)>=0,I=X?"width":"height",C=ne(t,{placement:j,boundary:f,rootBoundary:h,altBoundary:y,padding:c}),W=X?$?T:B:$?S:R;m[I]>g[I]&&(W=me(W));var ce=me(W),Y=[];if(o&&Y.push(C[L]<=0),s&&Y.push(C[W]<=0,C[ce]<=0),Y.every(function(Q){return Q})){P=j,D=!1;break}x.set(j,Y)}if(D)for(var ue=w?3:1,xe=function(F){var ie=l.find(function(ve){var z=x.get(ve);if(z)return z.slice(0,F).every(function(Oe){return Oe})});if(ie)return P=ie,"break"},oe=ue;oe>0;oe--){var le=xe(oe);if(le==="break")break}t.placement!==P&&(t.modifiersData[n]._skip=!0,t.placement=P,t.reset=!0)}}const Et={name:"flip",enabled:!0,phase:"main",fn:er,requiresIfExists:["offset"],data:{_skip:!1}};function _e(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function et(e){return[R,T,S,B].some(function(t){return e[t]>=0})}function tr(e){var t=e.state,r=e.name,n=t.rects.reference,a=t.rects.popper,o=t.modifiersData.preventOverflow,p=ne(t,{elementContext:"reference"}),s=ne(t,{altBoundary:!0}),i=_e(p,n),c=_e(s,a,o),f=et(i),h=et(c);t.modifiersData[r]={referenceClippingOffsets:i,popperEscapeOffsets:c,isReferenceHidden:f,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":h})}const At={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:tr};function rr(e,t,r){var n=H(e),a=[B,R].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,p=o[0],s=o[1];return p=p||0,s=(s||0)*a,[B,T].indexOf(n)>=0?{x:s,y:p}:{x:p,y:s}}function nr(e){var t=e.state,r=e.options,n=e.name,a=r.offset,o=a===void 0?[0,0]:a,p=Re.reduce(function(f,h){return f[h]=rr(h,t.rects,o),f},{}),s=p[t.placement],i=s.x,c=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=p}const Pt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:nr};function ar(e){var t=e.state,r=e.name;t.modifiersData[r]=Ot({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Ve={name:"popperOffsets",enabled:!0,phase:"read",fn:ar,data:{}};function or(e){return e==="x"?"y":"x"}function ir(e){var t=e.state,r=e.options,n=e.name,a=r.mainAxis,o=a===void 0?!0:a,p=r.altAxis,s=p===void 0?!1:p,i=r.boundary,c=r.rootBoundary,f=r.altBoundary,h=r.padding,y=r.tether,u=y===void 0?!0:y,w=r.tetherOffset,d=w===void 0?0:w,v=ne(t,{boundary:i,rootBoundary:c,padding:h,altBoundary:f}),b=H(t.placement),O=re(t.placement),E=!O,l=Te(b),m=or(l),g=t.modifiersData.popperOffsets,x=t.rects.reference,D=t.rects.popper,P=typeof d=="function"?d(Object.assign({},t.rects,{placement:t.placement})):d,A=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),j=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(!!g){if(o){var $,X=l==="y"?R:B,I=l==="y"?S:T,C=l==="y"?"height":"width",W=g[l],ce=W+v[X],Y=W-v[I],ue=u?-D[C]/2:0,xe=O===J?x[C]:D[C],oe=O===J?-D[C]:-x[C],le=t.elements.arrow,Q=u&&le?Se(le):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:gt(),ie=F[X],ve=F[I],z=se(0,x[C],Q[C]),Oe=E?x[C]/2-ue-z-ie-A.mainAxis:xe-z-ie-A.mainAxis,jt=E?-x[C]/2+ue+z+ve+A.mainAxis:oe+z+ve+A.mainAxis,Ee=t.elements.arrow&&pe(t.elements.arrow),$t=Ee?l==="y"?Ee.clientTop||0:Ee.clientLeft||0:0,Ne=($=j==null?void 0:j[l])!=null?$:0,Rt=W+Oe-Ne-$t,Bt=W+jt-Ne,Fe=se(u?ge(ce,Rt):ce,W,u?G(Y,Bt):Y);g[l]=Fe,L[l]=Fe-W}if(s){var qe,Ct=l==="x"?R:B,St=l==="x"?S:T,U=g[m],de=m==="y"?"height":"width",Xe=U+v[Ct],Ie=U-v[St],Ae=[R,B].indexOf(b)!==-1,Ye=(qe=j==null?void 0:j[m])!=null?qe:0,ze=Ae?Xe:U-x[de]-D[de]-Ye+A.altAxis,Ue=Ae?U+x[de]+D[de]-Ye-A.altAxis:Ie,Ge=u&&Ae?Wt(ze,U,Ue):se(u?ze:Xe,U,u?Ue:Ie);g[m]=Ge,L[m]=Ge-U}t.modifiersData[n]=L}}const Dt={name:"preventOverflow",enabled:!0,phase:"main",fn:ir,requiresIfExists:["offset"]};function sr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function fr(e){return e===M(e)||!k(e)?Le(e):sr(e)}function pr(e){var t=e.getBoundingClientRect(),r=ee(t.width)/e.offsetWidth||1,n=ee(t.height)/e.offsetHeight||1;return r!==1||n!==1}function cr(e,t,r){r===void 0&&(r=!1);var n=k(t),a=k(t)&&pr(t),o=q(t),p=te(e,a,r),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(n||!n&&!r)&&((V(t)!=="body"||He(o))&&(s=fr(t)),k(t)?(i=te(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):o&&(i.x=We(o))),{x:p.left+s.scrollLeft-i.x,y:p.top+s.scrollTop-i.y,width:p.width,height:p.height}}function ur(e){var t=new Map,r=new Set,n=[];e.forEach(function(o){t.set(o.name,o)});function a(o){r.add(o.name);var p=[].concat(o.requires||[],o.requiresIfExists||[]);p.forEach(function(s){if(!r.has(s)){var i=t.get(s);i&&a(i)}}),n.push(o)}return e.forEach(function(o){r.has(o.name)||a(o)}),n}function lr(e){var t=ur(e);return dt.reduce(function(r,n){return r.concat(t.filter(function(a){return a.phase===n}))},[])}function vr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function dr(e){var t=e.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var tt={placement:"bottom",modifiers:[],strategy:"absolute"};function rt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function we(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,a=t.defaultOptions,o=a===void 0?tt:a;return function(s,i,c){c===void 0&&(c=o);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},tt,o),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},h=[],y=!1,u={state:f,setOptions:function(b){var O=typeof b=="function"?b(f.options):b;d(),f.options=Object.assign({},o,f.options,O),f.scrollParents={reference:K(s)?fe(s):s.contextElement?fe(s.contextElement):[],popper:fe(i)};var E=lr(dr([].concat(n,f.options.modifiers)));return f.orderedModifiers=E.filter(function(l){return l.enabled}),w(),u.update()},forceUpdate:function(){if(!y){var b=f.elements,O=b.reference,E=b.popper;if(!!rt(O,E)){f.rects={reference:cr(O,pe(E),f.options.strategy==="fixed"),popper:Se(E)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(A){return f.modifiersData[A.name]=Object.assign({},A.data)});for(var l=0;l<f.orderedModifiers.length;l++){if(f.reset===!0){f.reset=!1,l=-1;continue}var m=f.orderedModifiers[l],g=m.fn,x=m.options,D=x===void 0?{}:x,P=m.name;typeof g=="function"&&(f=g({state:f,options:D,name:P,instance:u})||f)}}}},update:vr(function(){return new Promise(function(v){u.forceUpdate(),v(f)})}),destroy:function(){d(),y=!0}};if(!rt(s,i))return u;u.setOptions(c).then(function(v){!y&&c.onFirstUpdate&&c.onFirstUpdate(v)});function w(){f.orderedModifiers.forEach(function(v){var b=v.name,O=v.options,E=O===void 0?{}:O,l=v.effect;if(typeof l=="function"){var m=l({state:f,name:b,instance:u,options:E}),g=function(){};h.push(m||g)}})}function d(){h.forEach(function(v){return v()}),h=[]}return u}}var hr=we(),mr=[Me,Ve,ke,Ce],gr=we({defaultModifiers:mr}),yr=[Me,Ve,ke,Ce,Pt,Et,Dt,wt,At],br=we({defaultModifiers:yr});const wr=Object.freeze(Object.defineProperty({__proto__:null,popperGenerator:we,detectOverflow:ne,createPopperBase:hr,createPopper:br,createPopperLite:gr,top:R,bottom:S,right:T,left:B,auto:ye,basePlacements:ae,start:J,end:_,clippingParents:nt,viewport:$e,popper:Z,reference:at,variationPlacements:Pe,placements:Re,beforeRead:ot,read:it,afterRead:st,beforeMain:ft,main:pt,afterMain:ct,beforeWrite:ut,write:lt,afterWrite:vt,modifierPhases:dt,applyStyles:Ce,arrow:wt,computeStyles:ke,eventListeners:Me,flip:Et,hide:At,offset:Pt,popperOffsets:Ve,preventOverflow:Dt},Symbol.toStringTag,{value:"Module"}));export{wr as P,br as c};
