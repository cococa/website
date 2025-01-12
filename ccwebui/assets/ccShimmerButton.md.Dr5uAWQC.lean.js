import{_ as m,d as o,h as l,c as i,j as r,r as f,n as p,K as c,o as d,a as n,G as b,w as h,k as g}from"./chunks/framework.DQrKzgX7.js";const v=o({name:"CCShimmerButton",props:{shimmerColor:{type:String,default:"#ffffff"},shimmerSize:{type:String,default:"0.05em"},shimmerDuration:{type:String,default:"3s"},borderRadius:{type:String,default:"100px"},background:{type:String,default:"rgba(0, 0, 0, 1)"},className:{type:String,default:""}},emits:["click"],setup(e){return{buttonStyles:l(()=>({"--spread":"90deg","--shimmer-color":e.shimmerColor,"--radius":e.borderRadius,"--speed":e.shimmerDuration,"--cut":e.shimmerSize,"--bg":e.background}))}}});function S(e,t,a,x,y,C){return d(),i("button",c({style:{...e.buttonStyles,background:"var(--bg)",borderRadius:"var(--radius)"},class:["group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white","transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px","dark:text-black",e.className],onClick:t[0]||(t[0]=u=>e.$emit("click",u))},e.$attrs),[t[1]||(t[1]=r("div",{class:"-z-30 blur-[2px] absolute inset-0 overflow-visible [container-type:size]"},[r("div",{class:"absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]"},[r("div",{class:"animate-spin-around absolute -inset-full w-auto rotate-0",style:{background:"conic-gradient(from calc(270deg - (var(--spread) * 0.5)), transparent 0, var(--shimmer-color) var(--spread), transparent var(--spread))"}})])],-1)),f(e.$slots,"default",{},void 0,!0),r("div",{class:p(["insert-0 absolute size-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",["transform-gpu transition-all duration-300 ease-in-out","group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]","group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"]])}),t[2]||(t[2]=r("div",{class:"absolute -z-20",style:{background:"var(--bg)",borderRadius:"var(--radius)",inset:"var(--cut)"}},null,-1))],16)}const s=m(v,[["render",S],["__scopeId","data-v-5a9d326a"]]);s.install=e=>{e.component(s.__name,s)};const w=JSON.parse('{"title":"CCShimmerButton","description":"","frontmatter":{},"headers":[],"relativePath":"ccShimmerButton.md","filePath":"ccShimmerButton.md"}'),_={name:"ccShimmerButton.md"},B=o({..._,setup(e){return(t,a)=>(d(),i("div",null,[a[1]||(a[1]=r("h1",{id:"ccshimmerbutton",tabindex:"-1"},[n("CCShimmerButton "),r("a",{class:"header-anchor",href:"#ccshimmerbutton","aria-label":'Permalink to "CCShimmerButton"'},"​")],-1)),a[2]||(a[2]=r("p",null,"This is a .md using a custom component",-1)),b(g(s),{shimmerColor:"white"},{default:h(()=>a[0]||(a[0]=[n("12312")])),_:1})]))}});export{w as __pageData,B as default};