import{t as J,b as E,d as j,i as K,e as z,f as G,F as Z,g as q,h as N,R as L,A as S,j as g,k as I,l as B,r as l,n as Q,v as Y,s as ee,o as te,p as se,q as oe,c as x,a as k,m as F,u as w}from"./response.fed73383.js";/* empty css                       *//**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */const D="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY",_=D.length;function ae(e){let s=0;if(e.length===0)return s;for(let t=0;t<e.length;t++){const a=e.charCodeAt(t);s=(s<<5)-s+a,s=s&s}return s}function ie(e){let s,t="",a=ae(e);const o=a<0?"Z":"";for(a=Math.abs(a);a>=_;)s=a%_,a=Math.floor(a/_),t=D[s]+t;return a>0&&(t=D[a]+t),o+t}function re(e){return typeof HTMLElement<"u"&&HTMLElement.isPrototypeOf(e)}async function ne(e,s,t,a){const o=le(s);let m="";for(const H in t)m+=` ${H}="${J(await t[H])}"`;return E(`<${o}${m}>${await j(e,a?.default)}</${o}>`)}function le(e){const s=customElements.getName(e);return s||e.name.replace(/^HTML|Element$/g,"").replace(/[A-Z]/g,"-$&").toLowerCase().replace(/^-/,"html-")}const M=new Map([["solid","solid-js"]]);function pe(e){switch(e?.split(".").pop()){case"svelte":return["@astrojs/svelte"];case"vue":return["@astrojs/vue"];case"jsx":case"tsx":return["@astrojs/react","@astrojs/preact","@astrojs/solid-js","@astrojs/vue (jsx)"];default:return["@astrojs/react","@astrojs/preact","@astrojs/solid-js","@astrojs/vue","@astrojs/svelte","@astrojs/lit"]}}function ce(e){return e===Z}function ue(e){return e&&typeof e=="object"&&e["astro:html"]}async function de(e,s,t,a,o={}){var m,H;if(!t&&!a["client:only"])throw new Error(`Unable to render ${s} because it is ${t}!
Did you forget to import the component or is it possible there is a typo?`);const{renderers:h}=e._metadata,r={displayName:s},{hydration:P,isPage:R,props:v}=q(s,a);let d="",A;P&&(r.hydrate=P.directive,r.hydrateArgs=P.value,r.componentExport=P.componentExport,r.componentUrl=P.componentUrl);const y=pe(r.componentUrl),b=h.filter(i=>i.name!=="astro:jsx"),{children:W,slotInstructions:$}=await N(e,o);let n;if(r.hydrate!=="only"){let i=!1;try{i=t&&t[L]}catch{}if(i){const p=t[L];n=h.find(({name:f})=>f===p)}if(!n){let p;for(const f of h)try{if(await f.ssr.check.call({result:e},t,v,W)){n=f;break}}catch(T){p??(p=T)}if(!n&&p)throw p}if(!n&&typeof HTMLElement=="function"&&re(t))return ne(e,t,a,o)}else{if(r.hydrateArgs){const i=r.hydrateArgs,p=M.has(i)?M.get(i):i;n=h.find(({name:f})=>f===`@astrojs/${p}`||f===p)}if(!n&&b.length===1&&(n=b[0]),!n){const i=(m=r.componentUrl)==null?void 0:m.split(".").pop();n=h.filter(({name:p})=>p===`@astrojs/${i}`||p===i)[0]}}if(n)r.hydrate==="only"?d=await j(e,o?.fallback):{html:d,attrs:A}=await n.ssr.renderToStaticMarkup.call({result:e},t,v,W,r);else{if(r.hydrate==="only")throw new S({...g.NoClientOnlyHint,message:g.NoClientOnlyHint.message(r.displayName),hint:g.NoClientOnlyHint.hint(y.map(i=>i.replace("@astrojs/","")).join("|"))});if(typeof t!="string"){const i=b.filter(f=>y.includes(f.name)),p=b.length>1;if(i.length===0)throw new S({...g.NoMatchingRenderer,message:g.NoMatchingRenderer.message(r.displayName,(H=r?.componentUrl)==null?void 0:H.split(".").pop(),p,b.length),hint:g.NoMatchingRenderer.hint(I(y.map(f=>"`"+f+"`")))});if(i.length===1)n=i[0],{html:d,attrs:A}=await n.ssr.renderToStaticMarkup.call({result:e},t,v,W,r);else throw new Error(`Unable to render ${r.displayName}!

This component likely uses ${I(y)},
but Astro encountered an error during server-side rendering.

Please ensure that ${r.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`)}}if(n&&!n.clientEntrypoint&&n.name!=="@astrojs/lit"&&r.hydrate)throw new S({...g.NoClientEntrypoint,message:g.NoClientEntrypoint.message(s,r.hydrate,n.name)});if(!d&&typeof t=="string"){const i=me(t),p=Object.values(W).join(""),f=B(await l`<${i}${Q(v)}${E(p===""&&Y.test(i)?"/>":`>${p}</${i}>`)}`);d="";for await(const T of f)d+=T}if(!P)return async function*(){$&&(yield*$),R||n?.name==="astro:jsx"?yield d:d&&d.length>0?yield E(d.replace(/\<\/?astro-slot\>/g,"")):yield""}();const U=ie(`<!--${r.componentExport.value}:${r.componentUrl}-->
${d}
${ee(v,r)}`),X=await te({renderer:n,result:e,astroId:U,props:v,attrs:A},r);let C=[];if(d){if(Object.keys(W).length>0)for(const i of Object.keys(W))d.includes(i==="default"?"<astro-slot>":`<astro-slot name="${i}">`)||C.push(i)}else C=Object.keys(W);const O=C.length>0?C.map(i=>`<template data-astro-template${i!=="default"?`="${i}"`:""}>${W[i]}</template>`).join(""):"";X.children=`${d??""}${O}`,X.children&&(X.props["await-children"]="");async function*V(){$&&(yield*$),yield{type:"directive",hydration:P,result:e},yield E(oe("astro-island",X,!1))}return V()}function me(e){const s=/[&<>'"\s]+/g;return s.test(e)?e.trim().split(s)[0].trim():e}async function fe(e,s={}){const t=await j(e,s?.default);return t==null?t:E(t)}async function He(e,s,t,a={}){const{slotInstructions:o,children:m}=await N(e,a),H=s.render({slots:m}),h=o?o.map(r=>se(e,r)).join(""):"";return E(h+H)}function c(e,s,t,a,o={}){return K(t)?Promise.resolve(t).then(m=>c(e,s,m,a,o)):ce(t)?fe(e,o):ue(t)?He(e,t,a,o):z(t)?G(e,s,t,a,o):de(e,s,t,a,o)}const We=x(),u=k(async(e,s,t)=>{const a=e.createAstro(We,s,t);a.self=u;const{title:o,popupID:m,debug:H}=a.props;return l`${F(e)}<div${w("popup popup__closer debug__"+H+" astro-NATMJ44V","class")}${w(m,"id")}${w("#"+m,"data-popup-close")}>
	<div class="popup__content astro-NATMJ44V">
		<div class="popup__header astro-NATMJ44V">
			<div class="popup__close-wrapper astro-NATMJ44V">
				<button class="popup__close neuInside astro-NATMJ44V"${w("#"+m,"data-popup-close")}>
					<img class="popup__close-icon astro-NATMJ44V" src="assets/images/close.png">
				</button>
			</div>
			<h2 class="popup__title astro-NATMJ44V">${o}</h2>
			<div class="popup__body astro-NATMJ44V">
				${j(e,t.default)}
			</div>
		</div>
	</div>
	<!-- <div class="popup__background popup__closer" data-popup-close={"#" + popupID}></div> -->
</div>`},"D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/subcomponents/astroPopup.astro"),ge=x(),he=k(async(e,s,t)=>{const a=e.createAstro(ge,s,t);return a.self=he,l`<!-- Toolbox -->${c(e,"Popup",u,{title:"Werkzeuge & Bewertungen",debug:"false",popupID:"popup-tools",class:"astro-XEHCWWPH"},{default:o=>l`${F(o)}<div class="toolbox__section astro-XEHCWWPH">
        <a href="#" class="astro-XEHCWWPH">
            <h3 class="astro-XEHCWWPH">Helpdesk Ticket erstellen</h3>
        </a>
	</div><div class="toolbox__section astro-XEHCWWPH">
		<a href="https://mobile.pcvisit.de/v1/hosted/jumplink?func=download&productrole=guestSetup&gateway=lb3.pcvisit.de&companyid=7504171874" class="astro-XEHCWWPH">
			<h3 class="astro-XEHCWWPH">PCVISIT Kundenmodul herunterladen</h3>
		</a>
	</div><div class="toolbox__section astro-XEHCWWPH">
		<a href="https://www.provenexpert.com/petersen-it-services/?utm_source=Widget&utm_medium=Widget&utm_campaign=Widget" class="astro-XEHCWWPH">
			<h3 class="astro-XEHCWWPH">Kundenbewertung abgeben ❤</h3>
		</a>
	</div>`})}

<!-- Service Popups -->

${c(e,"Popup",u,{title:"Zertifizierte Datenlöschung",debug:"false",popupID:"popup-0",class:"astro-XEHCWWPH"},{default:o=>l`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>`})}

${c(e,"Popup",u,{title:"Lösung für Sicherheitssoftware",debug:"false",popupID:"popup-1",class:"astro-XEHCWWPH"},{default:o=>l`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>`})}

${c(e,"Popup",u,{title:"Email-Security",debug:"false",popupID:"popup-2",class:"astro-XEHCWWPH"},{default:o=>l`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>`})}

${c(e,"Popup",u,{title:"Domain & DNS",debug:"false",popupID:"popup-3",class:"astro-XEHCWWPH"},{default:o=>l`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>`})}

${c(e,"Popup",u,{title:"Webhosting",debug:"false",popupID:"popup-4",class:"astro-XEHCWWPH"},{default:o=>l`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>`})}

${c(e,"Popup",u,{title:"Firewalllösungen",debug:"false",popupID:"popup-5",class:"astro-XEHCWWPH"},{default:o=>l`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>`})}

${c(e,"Popup",u,{title:"Internetanschlüsse",debug:"false",popupID:"popup-6",class:"astro-XEHCWWPH"},{default:o=>l`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>`})}

${c(e,"Popup",u,{title:"Hardware & Peripheripherie",debug:"false",popupID:"popup-7",class:"astro-XEHCWWPH"},{default:o=>l`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>`})}

${c(e,"Popup",u,{title:"Terra-Gaming",debug:"false",popupID:"popup-8",class:"astro-XEHCWWPH"},{default:o=>l`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>`})}

${c(e,"Popup",u,{title:"Wortmann Telecom",debug:"false",popupID:"popup-9",class:"astro-XEHCWWPH"},{default:o=>l`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>`})}

${c(e,"Popup",u,{title:"ecoDMS Dokumentenmanagement",debug:"false",popupID:"popup-10",class:"astro-XEHCWWPH"},{default:o=>l`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>`})}

${c(e,"Popup",u,{title:"Telefonielösungen",debug:"false",popupID:"popup-11",class:"astro-XEHCWWPH"},{default:o=>l`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>`})}

${c(e,"Popup",u,{title:"Netzwerklösungen",debug:"false",popupID:"popup-12",class:"astro-XEHCWWPH"},{default:o=>l`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>`})}

${c(e,"Popup",u,{title:"Microsoft Office 365 Lösungen",debug:"false",popupID:"popup-13",class:"astro-XEHCWWPH"},{default:o=>l`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>`})}

${c(e,"Popup",u,{title:"Kommunikationslösungen",debug:"false",popupID:"popup-14",class:"astro-XEHCWWPH"},{default:o=>l`<div class="astro-XEHCWWPH">
		<p class="astro-XEHCWWPH">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nunc in nisl</p>
	</div>`})}`},"D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroPopups.astro"),Ee="D:/Arbeitt/KundenUndProjekte/Torge/pits/website/src/components/astroPopups.astro",be=void 0;export{he as default,Ee as file,be as url};
