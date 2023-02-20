document.addEventListener("DOMContentLoaded",function(n){var l=document.getElementById("preloader"),r=document.getElementById("preloader-ring"),g=document.querySelector("#scroll-container");g.classList.add("pinscroll"),console.log("Page is loaded");async function d(v){return new Promise(m=>setTimeout(m,v))}d(1e3).then(()=>{g.classList.remove("pinscroll"),l.classList.add("visuallyhidden1"),l.addEventListener("transitionend",function(){l.classList.add("hidden")}),r.classList.add("visuallyhidden2"),r.addEventListener("transitionend",function(){l.classList.add("hidden")})})});/*! MagicMouse.js - v1.2.0
* A lightweight javascript library to create some amazing effects for the mouse (cursor) on your website
* https://github.com/dshongphuc/magic-mouse-js
* Copyright (c) 2020 Phuc H. <dshongphuc@gmail.com> under MIT license; */const M=`
body #magicMouseCursor {
  position: fixed;
  width: 35px;
  height: 35px;
  border: 1px solid #fff;
  border-radius: 50%;
  z-index: 9999;
  left: 0;
  top: 0;
  transition: transform 0.07s, width 0.3s, height 0.3s;
  pointer-events: none; }
  body #magicMouseCursor.cursor-square {
    border-radius: 0; }

body #magicPointer {
  height: 5px;
  width: 5px;
  top: 0;
  left: 0;
  position: fixed;
  background: #fff;
  border-radius: 50%;
  pointer-events: none;
  transition: background 0.2s, width 0.2s, height 0.2s, box-shadow 0.2s; }
  body #magicPointer.is-hover {
    background: red; }
  body #magicPointer.pointer-blur {
    height: 50px;
    width: 50px;
    background: none;
    border: 1px solid #fff;
    box-shadow: 0px 0px 15px -5px white; }
  body #magicPointer.pointer-overlay {
    height: 50px;
    width: 50px;
    mix-blend-mode: difference;
    box-shadow: 0px 0px 15px -5px white; }

body .magic-hover {
  transition: all 0.2s; }
  body .magic-hover:hover {
    cursor: none; }
`,P=n=>{if(!Modernizr.touchevents){if((n=n||{}).outerWidth=n.outerWidth||30,n.outerHeight=n.outerHeight||30,n.cursorOuter=n.cursorOuter||"circle-basic",n.hoverEffect=n.hoverEffect||"circle-move",n.hoverItemMove=n.hoverItemMove||!1,n.defaultCursor=n.defaultCursor||!1,n.cursorOuter!="disable"){var l=document.createElement("div");l.setAttribute("id","magicMouseCursor"),document.body.appendChild(l);var r=document.getElementById("magicMouseCursor");(()=>{let e=document.createElement("style");e.type="text/css",e.innerText=M,document.head.appendChild(e)})()}if(!n.defaultCursor){document.body.style.cursor="none";var g=document.createElement("div");g.setAttribute("id","magicPointer"),document.body.appendChild(g);var d=document.getElementById("magicPointer")}if(r){r.style.width=n.outerWidth+"px",r.style.height=n.outerHeight+"px";var v=n.outerWidth,m=n.outerHeight,b=n.outerWidth,y=n.outerHeight}var i=0,x=0,u=0,w=0,L=!1;document.addEventListener("mousemove",function(e){u=e.clientX,w=e.clientY,setTimeout(()=>{L||(i=e.clientX-v/2,x=e.clientY-m/2)},50)}),document.querySelectorAll(".magic-hover").forEach((e,a)=>{e.addEventListener("mouseenter",f=>{switch(n.hoverEffect){case"circle-move":o(e),n.hoverItemMove&&c(f,e);break;case"pointer-blur":s(e,"pointer-blur");break;case"pointer-overlay":s(e,"pointer-overlay")}}),e.addEventListener("mouseleave",f=>{switch(e.style.transform="translate3d(0,0,0)",n.hoverEffect){case"circle-move":t();break;case"pointer-blur":h("pointer-blur");break;case"pointer-overlay":h("pointer-overlay")}})}),document.querySelectorAll(".no-cursor").forEach((e,a)=>{e.addEventListener("mouseenter",f=>{r.style.opacity=0,d.style.opacity=0,document.body.style.cursor="auto"}),e.addEventListener("mouseleave",f=>{r.style.opacity=1,d.style.opacity=1,document.body.style.cursor="none"})});var E=()=>{r&&(r.style.transform="matrix(1, 0, 0, 1, "+i+", "+x+")",r.style.width=v+"px",r.style.height=m+"px"),d&&(d.style.transform="matrix(1, 0, 0, 1, "+u+", "+w+") translate3d(-50%, -50%, 0)"),requestAnimationFrame(E)};requestAnimationFrame(E);const o=e=>{if(L=!0,r){r.style.transition="transform 0.2s, width 0.3s, height 0.3s, border-radius 0.2s",r.classList.add("is-hover");var a=event.currentTarget.getBoundingClientRect();e.classList.contains("magic-hover__square")?(r.classList.add("cursor-square"),i=a.left,x=a.top,v=a.width,m=a.height):(i=a.left,x=a.top,v=a.width,m=a.height)}d&&d.classList.add("is-hover")},t=()=>{L=!1,r&&(v=b,m=y,r.style.transition="transform 0.07s, width 0.3s, height 0.3s, border-radius 0.2s",r.classList.remove("cursor-square"),r.classList.remove("is-hover")),d&&d.classList.remove("is-hover")},s=(e,a)=>{d&&d.classList.add(a)},h=e=>{d&&d.classList.remove(e)},c=(e,a)=>{e.clientX,e.clientY,a.addEventListener("mousemove",f=>{a.style.transform="matrix(1,0,0,1,"+(f.offsetX-f.target.offsetWidth/2)/2+", "+(f.offsetY-f.target.offsetHeight/2)/2+")"})}}};(function(n,l,r){function g(o,t){return typeof o===t}function d(){return typeof l.createElement!="function"?l.createElement(arguments[0]):w?l.createElementNS.call(l,"http://www.w3.org/2000/svg",arguments[0]):l.createElement.apply(l,arguments)}function v(){var o=l.body;return o||((o=d(w?"svg":"body")).fake=!0),o}var m=[],b=[],y={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(o,t){var s=this;setTimeout(function(){t(s[o])},0)},addTest:function(o,t,s){b.push({name:o,fn:t,options:s})},addAsyncTest:function(o){b.push({name:null,fn:o})}},i=function(){};i.prototype=y,i=new i;var x=y._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];y._prefixes=x;var u=l.documentElement,w=u.nodeName.toLowerCase()==="svg",L=y.testStyles=function(o,t,s,h){var c,e,a,f,T="modernizr",C=d("div"),p=v();if(parseInt(s,10))for(;s--;)(a=d("div")).id=h?h[s]:T+(s+1),C.appendChild(a);return(c=d("style")).type="text/css",c.id="s"+T,(p.fake?p:C).appendChild(c),p.appendChild(C),c.styleSheet?c.styleSheet.cssText=o:c.appendChild(l.createTextNode(o)),C.id=T,p.fake&&(p.style.background="",p.style.overflow="hidden",f=u.style.overflow,u.style.overflow="hidden",u.appendChild(p)),e=t(C,o),p.fake?(p.parentNode.removeChild(p),u.style.overflow=f,u.offsetHeight):C.parentNode.removeChild(C),!!e};i.addTest("touchevents",function(){var o;if("ontouchstart"in n||n.DocumentTouch&&l instanceof DocumentTouch)o=!0;else{var t=["@media (",x.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");L(t,function(s){o=s.offsetTop===9})}return o}),function(){var o,t,s,h,c,e;for(var a in b)if(b.hasOwnProperty(a)){if(o=[],(t=b[a]).name&&(o.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(s=0;s<t.options.aliases.length;s++)o.push(t.options.aliases[s].toLowerCase());for(h=g(t.fn,"function")?t.fn():t.fn,c=0;c<o.length;c++)(e=o[c].split(".")).length===1?i[e[0]]=h:(!i[e[0]]||i[e[0]]instanceof Boolean||(i[e[0]]=new Boolean(i[e[0]])),i[e[0]][e[1]]=h),m.push((h?"":"no-")+e.join("-"))}}(),function(o){var t=u.className,s=i._config.classPrefix||"";if(w&&(t=t.baseVal),i._config.enableJSClass){var h=new RegExp("(^|\\s)"+s+"no-js(\\s|$)");t=t.replace(h,"$1"+s+"js$2")}i._config.enableClasses&&(t+=" "+s+o.join(" "+s),w?u.className.baseVal=t:u.className=t)}(m),delete y.addTest,delete y.addAsyncTest;for(var E=0;E<i._q.length;E++)i._q[E]();n.Modernizr=i})(window,document);let q={outerStyle:"disable",hoverEffect:"pointer-overlay",hoverItemMove:!1,defaultCursor:!1,outerWidth:41,outerHeight:41};P(q);const S='<a href="tel:+499123456789" class="callContainter"><div ><div class="content neomorphism"><span class="icon-phone trin-trin"> </span></div></div><a/>',_='<a href="mailto:info@petersen-it-services.de" class="mailContainter"><div ><div class="content neomorphism"><span class="icon-mail trin-trin"> </span></div></div><a/>';var k=document.createElement("div");k.setAttribute("id","CAN"),document.body.appendChild(k);var A=document.getElementById("CAN");A.innerHTML=S+_;
