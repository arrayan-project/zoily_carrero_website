import{c as G,d as Y,j as s,e as Z,r as v,X as K}from"./index-CsaVXh_O.js";import{A as ce,i as ue}from"./AnimationLayer-CG8Y_w9Z.js";import{S as B}from"./SmoothImage-D0hWXpIe.js";import{d as fe}from"./styles-45hN8PFx.js";import{u as de}from"./useWindowSize-BXwfj_zW.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=G("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=G("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=G("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=G("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),ge=({title:r,className:e})=>{const{theme:n}=Y();return s.jsx(ce,{animationClassName:"fade-in-text",children:s.jsx("h1",{className:`${e} ${Z(n)} text-lg md:text-xl lg:text-3xl mb-12 md:mb-12`,children:r})})},ye=({galleryCategories:r,selectedCategory:e,handleCategoryClick:n,theme:t})=>s.jsx("div",{className:"flex md:justify-center justify-start space-x-4 mb-8 overflow-x-auto whitespace-nowrap px-12 text-xs font-light md:text-base md:font-normal",style:{maxWidth:"100%"},children:r.map(a=>s.jsx("button",{"aria-label":`Seleccionar categoría ${a.name}`,className:`px-4 py-2 rounded-full font-cinzel font-base whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50
                          ${Z(t)}
                          ${e===a.value?t==="dark"?"bg-pink-400":"bg-pink-200":t==="dark"?"bg-gray-700":"bg-gray-100"}
                        `,onClick:()=>n(a.value),children:a.name},a.value))});var E={},Q={exports:{}},be="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",xe=be,we=xe;function ee(){}function te(){}te.resetWarningCache=ee;var Ee=function(){function r(t,a,o,i,l,c){if(c!==we){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}r.isRequired=r;function e(){return r}var n={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:e,element:r,elementType:r,instanceOf:e,node:r,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:te,resetWarningCache:ee};return n.PropTypes=n,n};Q.exports=Ee();var ke=Q.exports,H={};Object.defineProperty(H,"__esModule",{value:!0});H.on=Te;H.off=je;function Te(r,e,n,t){t=t||!1,r.addEventListener?r.addEventListener(e,n,t):r.attachEvent&&r.attachEvent("on"+e,function(a){n.call(r,a||window.event)})}function je(r,e,n,t){t=t||!1,r.removeEventListener?r.removeEventListener(e,n,t):r.detachEvent&&r.detachEvent("on"+e,n)}var F={};Object.defineProperty(F,"__esModule",{value:!0});F.default=function(r){if(!(r instanceof HTMLElement))return document.documentElement;for(var e=r.style.position==="absolute",n=/(scroll|auto)/,t=r;t;){if(!t.parentNode)return r.ownerDocument||document.documentElement;var a=window.getComputedStyle(t),o=a.position,i=a.overflow,l=a["overflow-x"],c=a["overflow-y"];if(o==="static"&&e){t=t.parentNode;continue}if(n.test(i)&&n.test(l)&&n.test(c))return t;t=t.parentNode}return r.ownerDocument||r.documentElement||document.documentElement};var X={};Object.defineProperty(X,"__esModule",{value:!0});X.default=Se;function Se(r,e,n){var t=void 0,a=void 0,o=void 0,i=void 0,l=void 0,c=function d(){var p=+new Date-i;p<e&&p>=0?t=setTimeout(d,e-p):(t=null,n||(l=r.apply(o,a),t||(o=null,a=null)))};return function(){o=this,a=arguments,i=+new Date;var p=n&&!t;return t||(t=setTimeout(c,e)),p&&(l=r.apply(o,a),o=null,a=null),l}}var q={};Object.defineProperty(q,"__esModule",{value:!0});q.default=_e;function _e(r,e,n){e||(e=250);var t,a;return function(){var o=n||this,i=+new Date,l=arguments;t&&i<t+e?(clearTimeout(a),a=setTimeout(function(){t=i,r.apply(o,l)},e)):(t=i,r.apply(o,l))}}Object.defineProperty(E,"__esModule",{value:!0});E.forceVisible=E.forceCheck=E.lazyload=void 0;var re=function(){function r(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}}(),$=v,A=R($),Ne=ke,u=R(Ne),N=H,Ie=F,V=R(Ie),Le=X,Oe=R(Le),Re=q,Me=R(Re);function R(r){return r&&r.__esModule?r:{default:r}}function ne(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function ae(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r}function oe(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)}var b={top:0,right:0,bottom:0,left:0,width:0,height:0},O="data-lazyload-listened",g=[],U=[],ie=!1;try{var Pe=Object.defineProperty({},"passive",{get:function(){ie=!0}});window.addEventListener("test",null,Pe)}catch{}var w=ie?{capture:!1,passive:!0}:!1,ze=function(e,n){var t=e.ref,a=void 0,o=void 0,i=void 0,l=void 0;try{var c=n.getBoundingClientRect();a=c.top,o=c.left,i=c.height,l=c.width}catch{a=b.top,o=b.left,i=b.height,l=b.width}var d=window.innerHeight||document.documentElement.clientHeight,p=window.innerWidth||document.documentElement.clientWidth,h=Math.max(a,0),f=Math.max(o,0),T=Math.min(d,a+i)-h,M=Math.min(p,o+l)-f,x=void 0,I=void 0,j=void 0,S=void 0;try{var k=t.getBoundingClientRect();x=k.top,I=k.left,j=k.height,S=k.width}catch{x=b.top,I=b.left,j=b.height,S=b.width}var L=x-h,P=I-f,_=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return L-_[0]<=T&&L+j+_[1]>=0&&P-_[0]<=M&&P+S+_[1]>=0},Ce=function(e){var n=e.ref;if(!(n.offsetWidth||n.offsetHeight||n.getClientRects().length))return!1;var t=void 0,a=void 0;try{var o=n.getBoundingClientRect();t=o.top,a=o.height}catch{t=b.top,a=b.height}var i=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return t-l[0]<=i&&t+a+l[1]>=0},se=function(e){var n=e.ref;if(n instanceof HTMLElement){var t=(0,V.default)(n),a=e.props.overflow&&t!==n.ownerDocument&&t!==document&&t!==document.documentElement,o=a?ze(e,t):Ce(e);o?e.visible||(e.props.once&&U.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},le=function(){U.forEach(function(e){var n=g.indexOf(e);n!==-1&&g.splice(n,1)}),U=[]},C=function(){for(var e=0;e<g.length;++e){var n=g[e];se(n)}le()},Ae=function(){for(var e=0;e<g.length;++e){var n=g[e];n.visible=!0,n.forceUpdate()}le()},z=void 0,m=null,Ge=function(e){return typeof e=="string"},D=function(r){oe(e,r);function e(n){ne(this,e);var t=ae(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return t.visible=!1,t.setRef=t.setRef.bind(t),t}return re(e,[{key:"componentDidMount",value:function(){var t=window,a=this.props.scrollContainer;a&&Ge(a)&&(t=t.document.querySelector(a));var o=this.props.debounce!==void 0&&z==="throttle"||z==="debounce"&&this.props.debounce===void 0;if(o&&((0,N.off)(t,"scroll",m,w),(0,N.off)(window,"resize",m,w),m=null),m||(this.props.debounce!==void 0?(m=(0,Oe.default)(C,typeof this.props.debounce=="number"?this.props.debounce:300),z="debounce"):this.props.throttle!==void 0?(m=(0,Me.default)(C,typeof this.props.throttle=="number"?this.props.throttle:300),z="throttle"):m=C),this.props.overflow){var i=(0,V.default)(this.ref);if(i&&typeof i.getAttribute=="function"){var l=1+ +i.getAttribute(O);l===1&&i.addEventListener("scroll",m,w),i.setAttribute(O,l)}}else if(g.length===0||o){var c=this.props,d=c.scroll,p=c.resize;d&&(0,N.on)(t,"scroll",m,w),p&&(0,N.on)(window,"resize",m,w)}g.push(this),se(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var t=(0,V.default)(this.ref);if(t&&typeof t.getAttribute=="function"){var a=+t.getAttribute(O)-1;a===0?(t.removeEventListener("scroll",m,w),t.removeAttribute(O)):t.setAttribute(O,a)}}var o=g.indexOf(this);o!==-1&&g.splice(o,1),g.length===0&&typeof window<"u"&&((0,N.off)(window,"resize",m,w),(0,N.off)(window,"scroll",m,w))}},{key:"setRef",value:function(t){t&&(this.ref=t)}},{key:"render",value:function(){var t=this.props,a=t.height,o=t.children,i=t.placeholder,l=t.className,c=t.classNamePrefix,d=t.style;return A.default.createElement("div",{className:c+"-wrapper "+l,ref:this.setRef,style:d},this.visible?o:i||A.default.createElement("div",{style:{height:a},className:c+"-placeholder"}))}}]),e}($.Component);D.propTypes={className:u.default.string,classNamePrefix:u.default.string,once:u.default.bool,height:u.default.oneOfType([u.default.number,u.default.string]),offset:u.default.oneOfType([u.default.number,u.default.arrayOf(u.default.number)]),overflow:u.default.bool,resize:u.default.bool,scroll:u.default.bool,children:u.default.node,throttle:u.default.oneOfType([u.default.number,u.default.bool]),debounce:u.default.oneOfType([u.default.number,u.default.bool]),placeholder:u.default.node,scrollContainer:u.default.oneOfType([u.default.string,u.default.object]),unmountIfInvisible:u.default.bool,style:u.default.object};D.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var He=function(e){return e.displayName||e.name||"Component"},De=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return function(t){return function(a){oe(o,a);function o(){ne(this,o);var i=ae(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return i.displayName="LazyLoad"+He(t),i}return re(o,[{key:"render",value:function(){return A.default.createElement(D,e,A.default.createElement(t,this.props))}}]),o}($.Component)}};E.lazyload=De;var We=E.default=D;E.forceCheck=C;E.forceVisible=Ae;const Ve=({currentGalleryImages:r,openImage:e,isGalleryTransitioning:n})=>s.jsx("div",{className:"mx-auto max-w-screen-2xl",children:s.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-5 p-5 sm:p-6 md:p-8 lg:p-8 xl:p-8",children:!n&&r.map((t,a)=>s.jsx("div",{className:"w-full aspect-square overflow-hidden p-1.5 sm:p-2 md:p-2.5 lg:p-2.5 rounded-sm bg-white",style:{boxShadow:"4px 0px 10px rgba(0, 0, 0, 0.3)"},children:s.jsx(We,{height:200,offset:100,once:!0,children:s.jsx(B,{src:t,alt:`Galería ${a}`,className:"w-full h-full cursor-pointer rounded-xs",onClick:()=>e(a),fallbackSrc:"/img/default-image.png",isGridImage:!0})})},a))})}),Ue=({selectedImage:r,closeImage:e,prevImage:n,nextImage:t,isModalTransitioning:a,handleModalClick:o,modalContainerRef:i,isMobileView:l})=>{const c=v.useRef(null),[d,p]=v.useState(1);return v.useEffect(()=>{const h=f=>{f.key==="ArrowLeft"?n():f.key==="ArrowRight"?t():f.key==="Escape"&&e()};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[n,t,e]),v.useEffect(()=>{c.current&&(c.current.style.transform=`scale(${d})`)},[d]),r?s.jsxs("div",{className:"fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50 overflow-auto",onClick:o,ref:i,children:[s.jsx("button",{"aria-label":"Cerrar imagen",className:"absolute top-4 right-4 text-white focus:outline-none focus:ring-2 focus:ring-pink-500 z-10",onClick:e,children:s.jsx(K,{size:32})}),s.jsx("button",{"aria-label":"Imagen anterior",className:"absolute left-4 text-white top-1/2 -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-pink-500 z-10",onClick:n,children:s.jsx(pe,{size:40})}),s.jsx(B,{src:r,alt:"Selected",className:`object-contain ${l?"max-h-[80vh] max-w-[80vw]":"h-full w-full"} transition-transform duration-300 pointer-events-auto`,isTransitioning:a,fallbackSrc:"/img/default-image.png",imageRef:c,isGridImage:!1},r),!l&&s.jsxs("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 pointer-events-auto",children:[s.jsx("button",{"aria-label":"Zoom In",className:"text-white focus:outline-none focus:ring-2 focus:ring-pink-500",onClick:()=>p(h=>Math.min(h+.1,2)),children:s.jsx(he,{size:24})}),s.jsx("button",{"aria-label":"Zoom Out",className:"text-white focus:outline-none focus:ring-2 focus:ring-pink-500",onClick:()=>p(h=>Math.max(h-.1,1)),children:s.jsx(me,{size:24})}),s.jsx("button",{"aria-label":"Reset Zoom",className:"text-white focus:outline-none focus:ring-2 focus:ring-pink-500",onClick:()=>p(1),children:s.jsx(K,{size:24})})]}),s.jsx("button",{"aria-label":"Imagen siguiente",className:"absolute right-4 text-white top-1/2 -translate-y-1/2 focus:outline-none focus:ring-2 focus:ring-pink-500 z-10",onClick:t,children:s.jsx(ve,{size:40})})]}):null},Ze=50,Fe=({prevImage:r,nextImage:e,modalContainerRef:n})=>{const[t,a]=v.useState(0),[o,i]=v.useState(0),[l,c]=v.useState(!1),d=f=>{a(f.touches[0].clientX),c(!0)},p=f=>{if(!l)return;i(f.touches[0].clientX);const T=o-t;Math.abs(T)>Ze&&(T>0?r():e(),a(o))},h=()=>{c(!1)};return v.useEffect(()=>{const f=n.current;return f&&(f.addEventListener("touchstart",d),f.addEventListener("touchmove",p),f.addEventListener("touchend",h)),()=>{f&&(f.removeEventListener("touchstart",d),f.removeEventListener("touchmove",p),f.removeEventListener("touchend",h))}},[l,o,t,r,e]),{}},{galleryBrideImages:Xe,gallerySocialImages:qe,galleryHairAndMakeupImages:$e,galleryMatureSkinImages:Je,galleryGlamImages:Ke,galleryExpressImages:Ye}=ue,W=Xe,Be=qe,Qe=$e,et=Je,tt=Ke,rt=Ye,nt=r=>({novia:W,social:Be,peinado:Qe,pielMadura:et,glam:tt,express:rt,all:W})[r]||W,at=[{name:"Novia",value:"novia"},{name:"Social",value:"social"},{name:"Peinado",value:"peinado"},{name:"Piel Madura",value:"pielMadura"},{name:"Glam",value:"glam"},{name:"Express",value:"express"}],ot="MIRA NUESTROS TRABAJOS";function ft(){const[r,e]=v.useState(null),[n,t]=v.useState(0),[a,o]=v.useState("all"),[i,l]=v.useState(!1),[c,d]=v.useState(!1),[p,h]=v.useState(null),f=v.useRef(null),{isMobileView:T}=de(),{theme:M}=Y(),x=v.useMemo(()=>nt(a),[a]),I=y=>{try{t(y),e(x[y]??null)}catch{h("Error al abrir la imagen.")}},j=()=>e(null),S=y=>{d(!0);const J=(n+y+x.length)%x.length;setTimeout(()=>{t(J),e(x[J]??null),d(!1)},500)},k=()=>S(-1),L=()=>S(1),P=y=>{l(!0),o(y),setTimeout(()=>l(!1),500)},_=y=>{y.target===f.current&&j()};return Fe({prevImage:k,nextImage:L,modalContainerRef:f}),p?s.jsx("p",{className:"error-message",children:p}):s.jsx("main",{className:`min-h-screen ${Z(M)}`,children:s.jsxs("section",{id:"gallery",className:"mx-auto py-16",children:[s.jsx(ge,{title:ot,className:fe}),s.jsx(ye,{galleryCategories:at,selectedCategory:a,handleCategoryClick:P,theme:M}),s.jsx(Ve,{currentGalleryImages:x,openImage:I,isGalleryTransitioning:i}),s.jsx(Ue,{selectedImage:r,closeImage:j,prevImage:k,nextImage:L,isModalTransitioning:c,handleModalClick:_,modalContainerRef:f,isMobileView:T})]})})}export{ft as default};
