import{d as I,w as R,r as S,a as C,o as _,c as d,b as F,v as E,u as k,e as l,i as O,p as g,f as v,g as M,h as b,j as B,k as W,S as N,F as U,l as V}from"./vendor.878b59c5.js";const H=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}};H();let i,w=0,f=null;function p(){return(f===null||f.buffer!==i.memory.buffer)&&(f=new Uint8Array(i.memory.buffer)),f}let m=new TextEncoder("utf-8");const P=typeof m.encodeInto=="function"?function(e,n){return m.encodeInto(e,n)}:function(e,n){const r=m.encode(e);return n.set(r),{read:e.length,written:r.length}};function D(e,n,r){if(r===void 0){const c=m.encode(e),u=n(c.length);return p().subarray(u,u+c.length).set(c),w=c.length,u}let o=e.length,t=n(o);const s=p();let a=0;for(;a<o;a++){const c=e.charCodeAt(a);if(c>127)break;s[t+a]=c}if(a!==o){a!==0&&(e=e.slice(a)),t=r(t,o,o=a+e.length*3);const c=p().subarray(t+a,t+o);a+=P(e,c).written}return w=a,t}let h=null;function L(){return(h===null||h.buffer!==i.memory.buffer)&&(h=new Int32Array(i.memory.buffer)),h}let $=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});$.decode();function q(e,n){return $.decode(p().subarray(e,e+n))}function j(e){try{const s=i.__wbindgen_add_to_stack_pointer(-16);var n=D(e,i.__wbindgen_malloc,i.__wbindgen_realloc),r=w;i.baseCompile(s,n,r);var o=L()[s/4+0],t=L()[s/4+1];return q(o,t)}finally{i.__wbindgen_add_to_stack_pointer(16),i.__wbindgen_free(o,t)}}async function K(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(o){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o);else throw o}const r=await e.arrayBuffer();return await WebAssembly.instantiate(r,n)}else{const r=await WebAssembly.instantiate(e,n);return r instanceof WebAssembly.Instance?{instance:r,module:e}:r}}async function T(e){typeof e=="undefined"&&(e=new URL("/vue-compiler/assets/vue_compiler_wasm_bg.3a84cb68.wasm",self.location));const n={};(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:r,module:o}=await K(await e,n);return i=r.exports,T.__wbindgen_wasm_module=o,i}var y=(e,n)=>{const r=e.__vccOpts||e;for(const[o,t]of n)r[o]=t;return r};const z={class:"playground"},G=["innerHTML"],J=I({async setup(e){let n,r;[n,r]=R(()=>T()),await n,r();let o=S("<p>Hello World from wasm!</p>"),t=S("");return C(async()=>{t.value=j(o.value)}),(s,a)=>(_(),d("div",z,[F(l("textarea",{"onUpdate:modelValue":a[0]||(a[0]=c=>O(o)?o.value=c:o=c)},null,512),[[E,k(o)]]),l("code",{innerHTML:k(t)},null,8,G)]))}});var Q=y(J,[["__scopeId","data-v-1eb71834"]]),X="/vue-compiler/assets/wasm-ferris.eb749a19.png",Y="/vue-compiler/assets/logo.03d6d6da.png";const Z={},x=e=>(g("data-v-921708e0"),e=e(),v(),e),ee={class:"demo-header"},te=x(()=>l("h1",{class:"title"},"Rusty Vue Playground",-1)),ne=x(()=>l("img",{class:"crab",alt:"Ferris with WA hat",src:X},null,-1)),oe=M(" \u2764\uFE0F "),re=x(()=>l("img",{class:"vue",alt:"Vue logo",src:Y},null,-1)),se=[te,ne,oe,re];function ae(e,n){return _(),d("header",ee,se)}var ce=y(Z,[["render",ae],["__scopeId","data-v-921708e0"]]);const ie={},A=e=>(g("data-v-66ab9a06"),e=e(),v(),e),le=A(()=>l("a",{href:"https://github.com/HerringtonDarkholme/vue-compiler"}," Source Code ",-1)),_e=A(()=>l("a",{href:"https://herringtondarkholme.github.io/vue-compiler/dev/bench/"}," Benchmark ",-1)),ue=A(()=>l("span",null,[l("a",{href:"https://rustwasm.github.io/wasm-pack/"},"wasm-pack"),M(" for tooling and logo. ")],-1)),de=[le,_e,ue];function fe(e,n){return _(),d("footer",null,de)}var pe=y(ie,[["render",fe],["__scopeId","data-v-66ab9a06"]]);const me=e=>(g("data-v-2e3dc787"),e=e(),v(),e),he=me(()=>l("h1",null," Loading WASM... ",-1)),ye=I({setup(e){return(n,r)=>(_(),d(U,null,[b(ce),l("main",null,[(_(),B(N,null,{fallback:W(()=>[he]),default:W(()=>[b(Q)]),_:1}))]),b(pe)],64))}});var ge=y(ye,[["__scopeId","data-v-2e3dc787"]]);V(ge).mount("#app");
