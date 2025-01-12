(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const m=(l,o)=>{const t=l.__vccOpts||l;for(const[s,e]of o)t[s]=e;return t},w={};function x(l,o){const t=Vue.resolveComponent("router-view");return Vue.openBlock(),Vue.createBlock(t,null,{default:Vue.withCtx(({Component:s,route:e})=>[!e.meta||!e.meta.keepAlive?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(s),{key:e.name})):Vue.createCommentVNode("",!0),(Vue.openBlock(),Vue.createBlock(Vue.KeepAlive,null,[e.meta&&e.meta.keepAlive?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(s),{key:e.fullPath})):Vue.createCommentVNode("",!0)],1024))]),_:1})}const g=m(w,[["render",x]]),V="modulepreload",_=function(l){return"/template/"+l},u={},y=function(o,t,s){let e=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),i=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));e=Promise.allSettled(t.map(r=>{if(r=_(r),r in u)return;u[r]=!0;const d=r.endsWith(".css"),v=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${v}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":V,d||(c.as="script"),c.crossOrigin="",c.href=r,i&&c.setAttribute("nonce",i),document.head.appendChild(c),d)return new Promise((f,h)=>{c.addEventListener("load",f),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})}))}function a(n){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=n,window.dispatchEvent(i),!i.defaultPrevented)throw n}return e.then(n=>{for(const i of n||[])i.status==="rejected"&&a(i.reason);return o().catch(a)})},b="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1731995495101'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='5412'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='48'%20height='48'%3e%3cpath%20d='M512%20749.226667l173.653333-48.213334%2023.466667-260.266666H400.213333L392.533333%20354.133333h324.266667l8.533333-84.906666H298.666667l23.893333%20256.426666h293.973333l-9.813333%20110.08-94.72%2025.6-94.72-25.6-5.973333-70.826666h-85.333334l12.373334%20136.106666L512%20749.226667M173.653333%20128h676.693334L789.333333%20819.2%20512%20896l-277.333333-76.8L173.653333%20128z'%20fill='%23E44D26'%20p-id='5413'%3e%3c/path%3e%3c/svg%3e",E="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1731995380648'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='5252'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='48'%20height='48'%3e%3cpath%20d='M213.333333%20128l-27.733333%20142.506667h579.84L746.666667%20362.666667H167.253333l-28.16%20142.08h579.84l-32.426666%20162.56-233.813334%2077.226666-202.666666-77.226666%2014.08-69.973334H121.6l-33.706667%20170.666667%20334.933334%20128%20386.133333-128%2051.2-257.28%2010.24-51.626667L936.106667%20128H213.333333z'%20fill='%2342A5F5'%20p-id='5253'%3e%3c/path%3e%3c/svg%3e",k="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1731995353557'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4929'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='48'%20height='48'%3e%3cpath%20d='M277.333333%20418.133333c31.274667-125.184%20109.525333-187.733333%20234.666667-187.733333%20187.733333%200%20211.242667%20140.8%20305.109333%20164.266667%2062.592%2015.658667%20117.333333-7.850667%20164.266667-70.4-31.232%20125.141333-109.482667%20187.733333-234.666667%20187.733333-187.733333%200-211.2-140.8-305.066666-164.266667-62.634667-15.701333-117.376%207.808-164.352%2070.4zM42.581333%20699.733333c31.274667-125.141333%20109.525333-187.733333%20234.666667-187.733333%20187.776%200%20211.2%20140.8%20305.152%20164.266667%2062.549333%2015.701333%20117.333333-7.808%20164.266667-70.4-31.317333%20125.184-109.525333%20187.733333-234.666667%20187.733333-187.776%200-211.242667-140.8-305.152-164.266667-62.549333-15.658667-117.333333%207.850667-164.266667%2070.4z'%20fill='%234DB6AC'%20p-id='4930'%3e%3c/path%3e%3c/svg%3e",D="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1731995367302'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='5089'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='48'%20height='48'%3e%3cpath%20d='M76.416%20164.309333L512%20916.096%20947.584%20167.936v-3.626667H778.24L514.56%20617.258667%20251.989333%20164.352z'%20fill='%2341B883'%20p-id='5090'%3e%3c/path%3e%3cpath%20d='M252.032%20164.309333l262.485333%20452.992L778.24%20164.309333h-158.848L515.584%20342.613333%20412.16%20164.266667z'%20fill='%2335495E'%20p-id='5091'%3e%3c/path%3e%3c/svg%3e",B="data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20t='1731995319835'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='4769'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='48'%20height='48'%3e%3cpath%20d='M362.468693%20111.786667v0.088746a2857.3696%202857.3696%200%200%200-21.59616-0.06144c-25.726293-0.221867-47.261013%2013.83424-65.989973%2028.491094-20.43904%2016.052907-37.935787%2037.00736-43.4176%2065.0752-3.1232%2016.459093-2.461013%2030.846293-2.461013%2045.21984v113.268053c0%2039.994027-14.882133%2069.71392-35.068587%2089.166507-11.373227%2011.264-35.642027%2021.548373-63.249067%2030.846293v51.165867c24.466773%206.744747%2048.018773%2015.872%2061.0816%2027.467093%2021.623467%2018.8928%2037.21216%2046.08%2037.21216%2081.59232v132.28032c0%2043.946667%2010.482347%2077.421227%2040.983894%20100.386133%2030.501547%2022.944427%2066.048%2034.358613%20106.646186%2035.467947l27.16672-0.180907v-65.959253c-21.193387-6.202027-32.965973-13.397333-41.45152-21.538133-15.274667-13.830827-23.927467-36.297387-23.927466-67.50208v-106.810027c-0.580267-36.328107-6.44096-64.744107-19.67104-85.306027-13.23008-20.514133-39.048533-38.505813-77.4656-54.00576%2042.397013-19.421867%2070.843733-44.741973%2085.3504-75.9808%208.546987-18.57536%2011.789653-43.625813%2011.789653-75.13088V261.891413c0-32.351573%207.509333-55.012693%2020.514133-67.959466%207.058773-7.02464%2019.613013-12.81024%2037.051734-17.493334l27.57632%200.191147V111.786667H362.461867v0.003413zM661.51424%20111.786667v0.088746a2857.3696%202857.3696%200%200%201%2021.59616-0.06144c25.726293-0.221867%2047.261013%2013.83424%2065.989973%2028.491094%2020.43904%2016.052907%2037.935787%2037.00736%2043.4176%2065.0752%203.1232%2016.459093%202.461013%2030.846293%202.461014%2045.21984v113.268053c0%2039.994027%2014.882133%2069.71392%2035.068586%2089.166507%2011.373227%2011.264%2035.642027%2021.548373%2063.249067%2030.846293v51.165867c-24.466773%206.744747-48.018773%2015.872-61.0816%2027.467093-21.623467%2018.8928-37.21216%2046.08-37.21216%2081.59232v132.28032c0%2043.946667-10.482347%2077.421227-40.987307%20100.386133-30.501547%2022.944427-66.048%2034.358613-106.646186%2035.467947l-27.16672-0.180907v-65.959253c21.193387-6.202027%2032.965973-13.397333%2041.45152-21.538133%2015.274667-13.830827%2023.927467-36.297387%2023.927466-67.50208v-106.810027c0.58368-36.328107%206.44096-64.744107%2019.67104-85.306027%2013.23008-20.514133%2039.048533-38.509227%2077.4656-54.00576-42.3936-19.421867-70.843733-44.741973-85.3504-75.9808-8.546987-18.57536-11.789653-43.625813-11.789653-75.13088V261.891413c0-32.351573-7.509333-55.012693-20.514133-67.959466-7.058773-7.02464-19.613013-12.81024-37.051734-17.493334l-27.572906%200.191147V111.786667h61.078186v0.003413z'%20fill='%230277BD'%20p-id='4770'%3e%3c/path%3e%3c/svg%3e",N="/template/assets/logo1-D9f3i8nk.png",C={class:"homepage"},P={class:"container-fluid"},I={class:"row flex grid grid-cols-1 md:grid-cols-4 px-4 md:px-[16%] gap-4 md:gap-6"},L=["onClick"],T=Vue.defineComponent({__name:"HomePage",setup(l){const o=t=>{const e=window.location.href+"/none1";window.open(e,"_blank")};return(t,s)=>(Vue.openBlock(),Vue.createElementBlock("section",C,[Vue.createElementVNode("div",P,[s[1]||(s[1]=Vue.createStaticVNode('<div class="row mb-20" data-v-fef147ab><div class="col-12" data-v-fef147ab><div class="section-title text-center" data-v-fef147ab><h2 class="mb-4" data-v-fef147ab> Home pages </h2><p class="wow animate__ animate__fadeIn animated" data-wow-delay=".1s" style="visibility:visible;animation-delay:0.1s;animation-name:fadeIn;" data-v-fef147ab> Beautiful And Truly Unique Pre-Built Frontend Homepage <br data-v-fef147ab>Easily complete website for your business </p></div></div></div>',1)),Vue.createElementVNode("div",I,[(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(8,e=>Vue.createElementVNode("div",{key:e,class:"group",onClick:a=>o()},s[0]||(s[0]=[Vue.createStaticVNode('<div class="flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl card-demo transition-transform duration-300 ease-in-out group-hover:-translate-y-1" data-wow-delay="0s" data-v-fef147ab><div class="content flex flex-col" data-v-fef147ab><img src="http://placehold.it/200x280" class="w-full aspect-[4/5] rounded-t-lg" alt="" data-v-fef147ab><div class="mt-4" data-v-fef147ab><h5 data-v-fef147ab>Home Page 01</h5><span data-v-fef147ab>Agency / Startup</span></div><div class="right" data-v-fef147ab><a target="_blank" href="https://wp.alithemes.com/html/agon/html-tailwindcss/demo/index.html" class="btn-demo hover-up" data-v-fef147ab><span class="dot" data-v-fef147ab></span>Live Demo</a></div></div></div>',1)]),8,L)),64))])])]))}}),A=m(T,[["__scopeId","data-v-fef147ab"]]),S={class:"page-header hero position-relative text-center"},U={class:"flex flex-wrap justify-center items-center"},H=["src"],G={class:"tech-icons mt-30 flex flex-row item-center justify-center"},O=["src"],$=["src"],z=["src"],M=["src"],W=["src"],R=Vue.defineComponent({__name:"HomeView",setup(l){return(o,t)=>(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,null,[Vue.createElementVNode("section",S,[Vue.createElementVNode("div",U,[Vue.createElementVNode("img",{width:"60",height:"60",class:"zoom-in-out-box animate-shrink",src:Vue.unref(N)},null,8,H),t[0]||(t[0]=Vue.createElementVNode("span",{class:"ml-6 font-bold text-gray-600 text-5xl"},"BLOCK",-1))]),t[1]||(t[1]=Vue.createElementVNode("h1",{class:"text-3xl mt-12 wow animate__ animate__fadeIn animated",style:{visibility:"visible","animation-name":"fadeIn"}},[Vue.createTextVNode(" 快速 高效 响应式"),Vue.createElementVNode("br"),Vue.createTextVNode(" HTML "),Vue.createElementVNode("span",{class:"text-brand"},"Tailwind 3"),Vue.createTextVNode(" 模版 ")],-1)),Vue.createElementVNode("div",G,[Vue.createElementVNode("img",{src:Vue.unref(b),alt:"Agon- AliThemes",class:"wow animate__ animate__fadeInUp hover-up animated","data-wow-delay":".1s",style:{visibility:"visible","animation-delay":"0.1s","animation-name":"fadeInUp"}},null,8,O),Vue.createElementVNode("img",{src:Vue.unref(E),alt:"Agon- AliThemes",class:"wow animate__ animate__fadeInUp hover-up animated","data-wow-delay":".2s",style:{visibility:"visible","animation-delay":"0.2s","animation-name":"fadeInUp"}},null,8,$),Vue.createElementVNode("img",{src:Vue.unref(B),alt:"Agon- AliThemes",class:"wow animate__ animate__fadeInUp hover-up animated","data-wow-delay":".3s",style:{visibility:"visible","animation-delay":"0.3s","animation-name":"fadeInUp"}},null,8,z),Vue.createElementVNode("img",{src:Vue.unref(k),alt:"Agon- AliThemes",class:"wow animate__ animate__fadeInUp hover-up animated","data-wow-delay":".3s",style:{visibility:"visible","animation-delay":"0.3s","animation-name":"fadeInUp"}},null,8,M),Vue.createElementVNode("img",{src:Vue.unref(D),alt:"Agon- AliThemes",class:"wow animate__ animate__fadeInUp hover-up animated","data-wow-delay":".4s",style:{visibility:"visible","animation-delay":"0.4s","animation-name":"fadeInUp"}},null,8,W)]),t[2]||(t[2]=Vue.createStaticVNode('<div class="hero-img" data-v-7e720f3a></div><div class="site-element-count flex flex-wrap justify-center py-12" data-v-7e720f3a><div class="count-box relative p-9 animate__fadeIn hover:translate-y-[-10px] transition-all duration-300 delay-100 w-full sm:w-auto" data-v-7e720f3a><h2 class="count-number text-3xl sm:text-4xl font-semibold text-[#253d4e] leading-tight" data-v-7e720f3a><span class="number text-3xl sm:text-4xl" data-v-7e720f3a><span class="count text-[#253d4e]" data-v-7e720f3a>08</span></span></h2><span class="count-title text-lg sm:text-xl text-gray-600" data-v-7e720f3a>Home Pages</span></div><div class="count-box relative p-9 animate__fadeIn hover:translate-y-[-10px] transition-all duration-300 delay-300 w-full sm:w-auto" data-v-7e720f3a><h2 class="count-number text-3xl sm:text-4xl font-semibold text-[#253d4e] leading-tight" data-v-7e720f3a><span class="number text-3xl sm:text-4xl" data-v-7e720f3a><span class="count text-[#253d4e]" data-v-7e720f3a>17</span></span></h2><span class="count-title text-lg sm:text-xl text-gray-600" data-v-7e720f3a>Inner Pages</span></div><div class="count-box relative p-9 animate__fadeIn hover:translate-y-[-10px] transition-all duration-300 delay-400 w-full sm:w-auto" data-v-7e720f3a><h2 class="count-number text-3xl sm:text-4xl font-semibold text-[#253d4e] leading-tight" data-v-7e720f3a><span class="number text-3xl sm:text-4xl" data-v-7e720f3a><span class="count text-[#253d4e]" data-v-7e720f3a>03</span></span></h2><span class="count-title text-lg sm:text-xl text-gray-600" data-v-7e720f3a>Shop Pages</span></div><div class="count-box relative p-9 animate__fadeIn hover:translate-y-[-10px] transition-all duration-300 delay-500 w-full sm:w-auto" data-v-7e720f3a><h2 class="count-number text-3xl sm:text-4xl font-semibold text-[#253d4e] leading-tight" data-v-7e720f3a><span class="number text-3xl sm:text-4xl" data-v-7e720f3a><span class="count text-[#253d4e]" data-v-7e720f3a>03</span></span></h2><span class="count-title text-lg sm:text-xl text-gray-600" data-v-7e720f3a>Blog Pages</span></div></div><div class="inner-page-slide marque-images" style="background-position-x:-85629px;" data-v-7e720f3a></div>',3))]),Vue.createVNode(A)],64))}}),q=m(R,[["__scopeId","data-v-7e720f3a"]]),F=VueRouter.createRouter({history:VueRouter.createWebHistory("/template"),routes:[{path:"/",name:"home",component:q},{path:"/about",name:"about",component:()=>y(()=>import("./AboutView-Dev5RPKe.js"),[])}]}),p=Vue.createApp(g);p.use(F);p.mount("#app");export{m as _};
