import{o as e,c as r,r as t,a as n,b as s,d as o,e as a}from"./vendor.05aad63b.js";var i={name:"App"};let d;i.render=function(n,s,o,a,i,d){const u=t("router-view");return e(),r(u)};const u={};var l=s({history:n(),routes:[{path:"/",component:()=>function(e,r){if(!r)return e();if(void 0===d){const e=document.createElement("link").relList;d=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(r.map((e=>{if(e in u)return;u[e]=!0;const r=e.endsWith(".css"),t=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${t}`))return;const n=document.createElement("link");return n.rel=r?"stylesheet":d,r||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),r?new Promise(((e,r)=>{n.addEventListener("load",e),n.addEventListener("error",r)})):void 0}))).then((()=>e()))}((()=>import("./index.fa372689.js")),["./assets/index.fa372689.js","./assets/index.0695a2b1.css","./assets/vendor.05aad63b.js"])}]}),c=o({state:()=>({userName:"hu"})});const p=a(i);p.use(l),p.use(c),p.mount("#app");
