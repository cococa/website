import{d as i,c as a,F as u,C as p,n,e as c,o as t,r as v,_ as g,p as h,j as o,a as y,G as k,w as b,k as _,t as w}from"./chunks/framework.DQrKzgX7.js";const B=i({__name:"index",props:{vertical:{type:Boolean,default:!1},repeat:{default:5},reverse:{type:Boolean,default:!1},pauseOnHover:{type:Boolean,default:!0},applyMask:{type:Boolean,default:!0},className:{default:""}},setup(l){return(e,d)=>(t(),a("div",{class:n(["group relative flex h-full w-full p-2 overflow-hidden [--duration:10s] [--gap:12px] [gap:var(--gap)]",{"flex-col":e.vertical,"flex-row":!e.vertical},e.className])},[(t(!0),a(u,null,p(e.repeat,r=>(t(),a("div",{key:`item-${r}`,class:n(["flex shrink-0 [gap:var(--gap)]",{"group-hover:[animation-play-state:paused]":e.pauseOnHover,"[animation-direction:reverse]":e.reverse,"animate-marquee-horizontal flex-row":!e.vertical,"animate-marquee-vertical flex-col":e.vertical}])},[v(e.$slots,"default",{},void 0,!0)],2))),128)),e.applyMask?(t(),a("div",{key:0,class:n(["pointer-events-none absolute inset-0 z-10 h-full w-full from-white/50 from-5% via-transparent via-50% to-white/50 to-95% dark:from-gray-800/50 dark:via-transparent dark:to-gray-800/50",{"bg-gradient-to-b":e.vertical,"bg-gradient-to-r":!e.vertical}])},null,2)):c("",!0)],2))}}),s=g(B,[["__scopeId","data-v-5b22f249"]]);s.install=l=>{l.component(s.__name,s)};const N=JSON.parse('{"title":"基础 Button","description":"","frontmatter":{},"headers":[],"relativePath":"ccLoopQueue.md","filePath":"ccLoopQueue.md"}'),x={name:"ccLoopQueue.md"},L=i({...x,setup(l){const e=h([1,2,3,4]);return(d,r)=>(t(),a("div",null,[r[0]||(r[0]=o("h1",{id:"基础-button",tabindex:"-1"},[y("基础 Button "),o("a",{class:"header-anchor",href:"#基础-button","aria-label":'Permalink to "基础 Button"'},"​")],-1)),r[1]||(r[1]=o("p",null,"This page demonstrates some of the built-in markdown extensions provided by VitePress.",-1)),k(_(s),{repeat:3,"apply-mask":!1},{default:b(()=>[(t(!0),a(u,null,p(e.value,(f,m)=>(t(),a("div",{key:m,class:"testh aspect-video bg-gray-200 text-slate-400 rounded-md flex items-center justify-center",style:{width:"300px"}},[o("div",null,w(f),1)]))),128))]),_:1})]))}});export{N as __pageData,L as default};