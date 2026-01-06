import{L as f,_ as P,r as T,k as A,f as j,C as z,c as v,o as c,a as t,b as x,M as b,N as k,B as w,w as C,H as _,T as M}from"./CELtXWOq.js";/**
 * @license lucide-vue-next v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),H=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,a,o)=>o?o.toUpperCase():a.toLowerCase()),I=s=>{const e=H(s);return e.charAt(0).toUpperCase()+e.slice(1)},N=(...s)=>s.filter((e,a,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===a).join(" ").trim();/**
 * @license lucide-vue-next v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var g={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=({size:s,strokeWidth:e=2,absoluteStrokeWidth:a,color:o,iconNode:d,name:i,class:m,...h},{slots:l})=>f("svg",{...g,width:s||g.width,height:s||g.height,stroke:o||g.stroke,"stroke-width":a?Number(e)*24/Number(s):e,class:N("lucide",...i?[`lucide-${B(I(i))}-icon`,`lucide-${B(i)}`]:["lucide-icon"]),...h},[...d.map(u=>f(...u)),...l.default?[l.default()]:[]]);/**
 * @license lucide-vue-next v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=(s,e)=>(a,{slots:o})=>f(O,{...a,iconNode:e,name:s},o);/**
 * @license lucide-vue-next v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=E("menu",[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]]);/**
 * @license lucide-vue-next v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=E("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),$={class:"fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-[9999]"},R={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},S={class:"flex justify-between items-center h-16"},V={class:"hidden md:flex items-center space-x-8"},Y={class:"md:hidden"},Z=["aria-expanded"],K={key:0,class:"md:hidden fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-[9999] max-h-[calc(100vh-4rem)] overflow-y-auto"},X={__name:"NavBar",setup(s){const e=T(!1),a=()=>{e.value=!e.value},o=()=>{e.value=!1},d=()=>{const n=document.getElementById("pricing");if(n){const p=n.getBoundingClientRect().top+window.pageYOffset-64;window.scrollTo({top:p,behavior:"smooth"})}},i=()=>{const n=document.getElementById("features");if(n){const p=n.getBoundingClientRect().top+window.pageYOffset-64;window.scrollTo({top:p,behavior:"smooth"})}},m=()=>{o(),setTimeout(()=>{d()},100)},h=()=>{o(),setTimeout(()=>{i()},100)};A(e,n=>{n?document.body.style.overflow="hidden":document.body.style.overflow=""});const l=n=>{const r=n.target;e.value&&!r.closest("nav")&&o()},u=n=>{n.key==="Escape"&&e.value&&o()},y=()=>{window.innerWidth>=768&&e.value&&o()};return j(()=>{document.addEventListener("click",l),document.addEventListener("keydown",u),window.addEventListener("resize",y)}),z(()=>{document.removeEventListener("click",l),document.removeEventListener("keydown",u),window.removeEventListener("resize",y),document.body.style.overflow=""}),(n,r)=>(c(),v("nav",$,[t("div",R,[t("div",S,[r[2]||(r[2]=t("div",{class:"flex-shrink-0"},[t("span",{class:"text-xl font-semibold text-gray-900"},"Chartly")],-1)),t("div",V,[r[0]||(r[0]=t("div",{class:"flex items-center space-x-1 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"},[t("span",null,"Use cases")],-1)),t("a",{href:"#features",onClick:b(i,["prevent"]),class:"text-gray-600 hover:text-gray-900 transition-colors"}," Features "),t("a",{href:"#pricing",onClick:b(d,["prevent"]),class:"text-gray-600 hover:text-gray-900 transition-colors"}," Pricing "),r[1]||(r[1]=t("a",{href:"#",class:"text-gray-600 hover:text-gray-900 transition-colors"}," About ",-1))]),t("div",Y,[t("button",{onClick:a,class:"text-gray-600 hover:text-gray-900 p-2 -mr-2 transition-colors","aria-expanded":e.value,"aria-label":"Toggle menu"},[e.value?(c(),k(w(F),{key:1,class:"h-6 w-6"})):(c(),k(w(U),{key:0,class:"h-6 w-6"}))],8,Z)])]),x(M,{name:"mobile-menu"},{default:C(()=>[e.value?(c(),v("div",{key:0,class:"md:hidden fixed inset-0 top-16 bg-black/50 z-[9998]",onClick:o})):_("",!0)]),_:1}),x(M,{name:"mobile-menu-slide"},{default:C(()=>[e.value?(c(),v("div",K,[t("div",{class:"px-4 py-4 space-y-1"},[t("a",{href:"#",class:"block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors",onClick:o}," Use cases "),t("a",{href:"#features",class:"block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors",onClick:h}," Features "),t("a",{href:"#pricing",class:"block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors",onClick:m}," Pricing "),t("a",{href:"#",class:"block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors",onClick:o}," About "),t("div",{class:"pt-4 mt-4 border-t border-gray-200 space-y-3"},[t("a",{href:"#",class:"block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors text-center",onClick:o}," Login "),t("button",{class:"w-full bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-semibold",onClick:o}," Sign up ")])])])):_("",!0)]),_:1})])]))}},D=P(X,[["__scopeId","data-v-dc1fd5db"]]);export{D as _};
