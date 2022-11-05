import{d as K,i as m,r,h as p,a as E,o as we,n as ye,b as _e,c as q,w as me,f as Te,g as pe,j as ge,p as x}from"./@vue.8294ce7d.js";/**
 * Vue 3 Carousel 0.2.4
 * (c) 2022
 * @license MIT
 */const g={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},he={itemsToShow:{default:g.itemsToShow,type:Number},itemsToScroll:{default:g.itemsToScroll,type:Number},wrapAround:{default:g.wrapAround,type:Boolean},snapAlign:{default:g.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:g.transition,type:Number},breakpoints:{default:g.breakpoints,type:Object},autoplay:{default:g.autoplay,type:Number},pauseAutoplayOnHover:{default:g.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:g.mouseDrag,type:Boolean},touchDrag:{default:g.touchDrag,type:Boolean},dir:{default:g.dir,validator(e){return["rtl","ltr"].includes(e)}},settings:{default(){return{}},type:Object}};function ke({config:e,slidesCount:t}){const{snapAlign:a,wrapAround:s,itemsToShow:i=1}=e;if(s)return Math.max(t-1,0);let l;switch(a){case"start":l=t-i;break;case"end":l=t-1;break;case"center":case"center-odd":l=t-Math.ceil((i-.5)/2);break;case"center-even":l=t-Math.ceil(i/2);break;default:l=0;break}return Math.max(l,0)}function Ae({config:e,slidesCount:t}){const{wrapAround:a,snapAlign:s,itemsToShow:i=1}=e;let l=0;if(a||i>t)return l;switch(s){case"start":l=0;break;case"end":l=i-1;break;case"center":case"center-odd":l=Math.floor((i-1)/2);break;case"center-even":l=Math.floor((i-2)/2);break;default:l=0;break}return l}function F({val:e,max:t,min:a}){return t<a?e:Math.min(Math.max(e,a),t)}function Me({config:e,currentSlide:t,slidesCount:a}){const{snapAlign:s,wrapAround:i,itemsToShow:l=1}=e;let u=t;switch(s){case"center":case"center-odd":u-=(l-1)/2;break;case"center-even":u-=(l-2)/2;break;case"end":u-=l-1;break}return i?u:F({val:u,max:a-l,min:0})}function Ce(e){var t,a,s;return e?((a=(t=e[0])===null||t===void 0?void 0:t.type)===null||a===void 0?void 0:a.name)==="CarouselSlide"?e:((s=e[0])===null||s===void 0?void 0:s.children)||[]:[]}function P({val:e,max:t,min:a=0}){return e>t?P({val:e-(t+1),max:t,min:a}):e<a?P({val:e+(t+1),max:t,min:a}):e}function Le(e,t){let a;return function(...s){const i=this;a||(e.apply(i,s),a=!0,setTimeout(()=>a=!1,t))}}function Oe(e,t){let a;return function(...s){a&&clearTimeout(a),a=setTimeout(()=>{e(...s),a=null},t)}}var Ee=K({name:"ARIA",setup(){const e=m("currentSlide",r(0)),t=m("slidesCount",r(0));return()=>p("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},`Item ${e.value+1} of ${t.value}`)}}),De=K({name:"Carousel",props:he,setup(e,{slots:t,emit:a,expose:s}){var i;const l=r(null),u=r([]),h=r(0),v=r(1);let S=r({}),w=Object.assign({},g);const o=E(Object.assign({},w)),c=r((i=o.modelValue)!==null&&i!==void 0?i:0),C=r(0),j=r(0),T=r(0),L=r(0);let k,R;x("config",o),x("slidesCount",v),x("currentSlide",c),x("maxSlide",T),x("minSlide",L),x("slideWidth",h);function Q(){const n=Object.assign(Object.assign({},e),e.settings);S=r(Object.assign({},n.breakpoints)),w=Object.assign(Object.assign({},n),{settings:void 0,breakpoints:void 0}),Z(w)}function N(){const n=Object.keys(S.value).map(d=>Number(d)).sort((d,_)=>+_-+d);let f=Object.assign({},w);n.some(d=>window.matchMedia(`(min-width: ${d}px)`).matches?(f=Object.assign(Object.assign({},f),S.value[d]),!0):!1),Z(f)}function Z(n){Object.entries(n).forEach(([f,d])=>o[f]=d)}const ee=Oe(()=>{S.value&&(N(),O()),D()},16);function D(){if(!l.value)return;const n=l.value.getBoundingClientRect();h.value=n.width/o.itemsToShow}function O(){v.value=Math.max(u.value.length,1),!(v.value<=0)&&(j.value=Math.ceil((v.value-1)/2),T.value=ke({config:o,slidesCount:v.value}),L.value=Ae({config:o,slidesCount:v.value}),o.wrapAround||(c.value=F({val:c.value,max:T.value,min:L.value})))}we(()=>{S.value&&(N(),O()),ye(()=>setTimeout(D,16)),oe(),window.addEventListener("resize",ee,{passive:!0})}),_e(()=>{R&&clearTimeout(R),k&&clearInterval(k),window.removeEventListener("resize",ee,{passive:!0})});let b=!1;const I={x:0,y:0},B={x:0,y:0},y=E({x:0,y:0}),V=r(!1),be=()=>{V.value=!0},Se=()=>{V.value=!1};function te(n){b=n.type==="touchstart",!(!b&&n.button!==0||A.value)&&(b||n.preventDefault(),I.x=b?n.touches[0].clientX:n.clientX,I.y=b?n.touches[0].clientY:n.clientY,document.addEventListener(b?"touchmove":"mousemove",ne,!0),document.addEventListener(b?"touchend":"mouseup",ae,!0))}const ne=Le(n=>{B.x=b?n.touches[0].clientX:n.clientX,B.y=b?n.touches[0].clientY:n.clientY;const f=B.x-I.x,d=B.y-I.y;y.y=d,y.x=f},16);function ae(){const n=o.dir==="rtl"?-1:1,f=Math.sign(y.x)*.4,d=Math.round(y.x/h.value+f)*n;if(d&&!b){const _=X=>{X.stopPropagation(),window.removeEventListener("click",_,!0)};window.addEventListener("click",_,!0)}M(c.value-d),y.x=0,y.y=0,document.removeEventListener(b?"touchmove":"mousemove",ne,!0),document.removeEventListener(b?"touchend":"mouseup",ae,!0)}function oe(){!o.autoplay||o.autoplay<=0||(k=setInterval(()=>{o.pauseAutoplayOnHover&&V.value||$()},o.autoplay))}function le(){!o.autoplay||o.autoplay<=0||(k&&(clearInterval(k),k=null),oe())}const A=r(!1);function M(n){if(c.value===n||A.value)return;A.value=!0,le();const f=o.wrapAround?n:F({val:n,max:T.value,min:L.value});C.value=c.value,c.value=f,R=setTimeout(()=>{const d=P({val:f,max:T.value,min:0});o.wrapAround&&(c.value=d),a("update:modelValue",d),A.value=!1},o.transition)}function $(){M(c.value+o.itemsToScroll)}function ie(){M(c.value-o.itemsToScroll)}const se={slideTo:M,next:$,prev:ie};x("nav",se),x("isSliding",A);const re=q(()=>Me({config:o,currentSlide:c.value,slidesCount:v.value}));x("slidesToScroll",re);const xe=q(()=>{const n=o.dir==="rtl"?-1:1,f=re.value*h.value*n;return{transform:`translateX(${y.x-f}px)`,transition:`${A.value?o.transition:0}ms`,margin:o.wrapAround?`0 -${v.value*h.value}px`:"",width:"100%"}});function ue(){Q()}function ce(){Q(),N(),O(),D(),le()}function de(){O()}Object.keys(he).forEach(n=>{["modelValue"].includes(n)||me(()=>e[n],ce)}),me(()=>e.modelValue,n=>{n!==c.value&&M(Number(n))}),ue(),Te(()=>{v.value!==u.value.length&&de()});const ve={config:o,slidesCount:v,slideWidth:h,currentSlide:c,maxSlide:T,minSlide:L,middleSlide:j};s({updateBreakpointsConfigs:N,updateSlidesData:O,updateSlideWidth:D,initCarousel:ue,restartCarousel:ce,updateCarousel:de,slideTo:M,next:$,prev:ie,nav:se,data:ve});const z=t.default||t.slides,W=t.addons,fe=E(ve);return()=>{const n=Ce(z==null?void 0:z(fe)),f=(W==null?void 0:W(fe))||[];n.forEach((H,Y)=>H.props.index=Y);let d=n;if(o.wrapAround){const H=n.map((U,G)=>pe(U,{index:-n.length+G,isClone:!0})),Y=n.map((U,G)=>pe(U,{index:n.length+G,isClone:!0}));d=[...H,...n,...Y]}u.value=n;const _=p("ol",{class:"carousel__track",style:xe.value,onMousedown:o.mouseDrag?ge(te,["capture"]):null,onTouchstart:o.touchDrag?ge(te,["capture"]):null},d),X=p("div",{class:"carousel__viewport"},_);return p("section",{ref:l,class:{carousel:!0,"carousel--rtl":o.dir==="rtl"},dir:o.dir,"aria-label":"Gallery",tabindex:"0",onMouseenter:be,onMouseleave:Se},[X,f,p(Ee)])}}});const je={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},J=e=>{const t=e.name;if(!t||typeof t!="string")return;const a=je[t],s=p("path",{d:a}),i=e.title||t,l=p("title",i);return p("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:i},[l,s])};J.props={name:String,title:String};const Ie=(e,{slots:t,attrs:a})=>{const{next:s,prev:i}=t||{},l=m("config",E(Object.assign({},g))),u=m("maxSlide",r(1)),h=m("minSlide",r(1)),v=m("currentSlide",r(1)),S=m("nav",{}),{dir:w,wrapAround:o}=l,c=w==="rtl",C=p("button",{type:"button",class:["carousel__prev",!o&&v.value<=h.value&&"carousel__prev--disabled",a==null?void 0:a.class],"aria-label":"Navigate to previous slide",onClick:S.prev},(i==null?void 0:i())||p(J,{name:c?"arrowRight":"arrowLeft"})),j=p("button",{type:"button",class:["carousel__next",!o&&v.value>=u.value&&"carousel__next--disabled",a==null?void 0:a.class],"aria-label":"Navigate to next slide",onClick:S.next},(s==null?void 0:s())||p(J,{name:c?"arrowLeft":"arrowRight"}));return[C,j]},Be=()=>{const e=m("maxSlide",r(1)),t=m("minSlide",r(1)),a=m("currentSlide",r(1)),s=m("nav",{}),i=u=>P({val:a.value,max:e.value,min:0})===u,l=[];for(let u=t.value;u<e.value+1;u++){const h=p("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":i(u)},"aria-label":`Navigate to slide ${u+1}`,onClick:()=>s.slideTo(u)}),v=p("li",{class:"carousel__pagination-item",key:u},h);l.push(v)}return p("ol",{class:"carousel__pagination"},l)};var Pe=K({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:t}){const a=m("config",E(Object.assign({},g))),s=m("currentSlide",r(0)),i=m("slidesToScroll",r(0)),l=m("slideWidth",r(0)),u=m("isSliding",r(!1)),h=q(()=>({width:l.value?`${l.value}px`:"100%"})),v=()=>e.index===s.value,S=()=>e.index===s.value-1,w=()=>e.index===s.value+1,o=()=>{const c=Math.floor(i.value),C=Math.ceil(i.value+a.itemsToShow-1);return e.index>=c&&e.index<=C};return()=>{var c;return p("li",{style:h.value,class:{carousel__slide:!0,"carousel_slide--clone":e.isClone,"carousel__slide--visible":o(),"carousel__slide--active":v(),"carousel__slide--prev":S(),"carousel__slide--next":w(),"carousel__slide--sliding":u.value},"aria-hidden":!o()},(c=t.default)===null||c===void 0?void 0:c.call(t))}}});export{De as C,Ie as N,Be as P,Pe as S};
