import{g as pe}from"./DocsRenderer-K4EAMTCU-SsKBj8MD.js";import{R as c,r as h,g as be}from"./index-CDs2tPxN.js";import{c as y}from"./index-CUd7pB-M.js";import{b as xe,c as G,d as _e}from"./_getPrototype-BVYyGuW-.js";import{n as k,d as oe,T as Ee,F as ye,M as we}from"./_basePickBy-CSt6u-xY.js";import"./iframe-ifDnjXln.js";import"../sb-preview/runtime.js";import"./react-18-B6Oh_BCg.js";import"./index-7f_Nov5Q.js";import"./extends-CCbyfPlC.js";import"./index-DeF_QDKt.js";import"./index-DU_eWLEQ.js";import"./index-DrFu-skq.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function K(e,t){if(e==null)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(a[r]=e[r]);return a}function X(e){var t=h.useRef(e),r=h.useRef(function(n){t.current&&t.current(n)});return t.current=e,r.current}var S=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e<t?t:e},T=function(e){return"touches"in e},F=function(e){return e&&e.ownerDocument.defaultView||self},J=function(e,t,r){var n=e.getBoundingClientRect(),a=T(t)?function(i,l){for(var o=0;o<i.length;o++)if(i[o].identifier===l)return i[o];return i[0]}(t.touches,r):t;return{left:S((a.pageX-(n.left+F(e).pageXOffset))/n.width),top:S((a.pageY-(n.top+F(e).pageYOffset))/n.height)}},Q=function(e){!T(e)&&e.preventDefault()},q=c.memo(function(e){var t=e.onMove,r=e.onKey,n=K(e,["onMove","onKey"]),a=h.useRef(null),i=X(t),l=X(r),o=h.useRef(null),u=h.useRef(!1),s=h.useMemo(function(){var x=function(p){Q(p),(T(p)?p.touches.length>0:p.buttons>0)&&a.current?i(J(a.current,p,o.current)):C(!1)},R=function(){return C(!1)};function C(p){var g=u.current,_=F(a.current),w=p?_.addEventListener:_.removeEventListener;w(g?"touchmove":"mousemove",x),w(g?"touchend":"mouseup",R)}return[function(p){var g=p.nativeEvent,_=a.current;if(_&&(Q(g),!function(E,N){return N&&!T(E)}(g,u.current)&&_)){if(T(g)){u.current=!0;var w=g.changedTouches||[];w.length&&(o.current=w[0].identifier)}_.focus(),i(J(_,g,o.current)),C(!0)}},function(p){var g=p.which||p.keyCode;g<37||g>40||(p.preventDefault(),l({left:g===39?.05:g===37?-.05:0,top:g===40?.05:g===38?-.05:0}))},C]},[l,i]),m=s[0],d=s[1],f=s[2];return h.useEffect(function(){return f},[f]),c.createElement("div",I({},n,{onTouchStart:m,onMouseDown:m,className:"react-colorful__interactive",ref:a,onKeyDown:d,tabIndex:0,role:"slider"}))}),H=function(e){return e.filter(Boolean).join(" ")},U=function(e){var t=e.color,r=e.left,n=e.top,a=n===void 0?.5:n,i=H(["react-colorful__pointer",e.className]);return c.createElement("div",{className:i,style:{top:100*a+"%",left:100*r+"%"}},c.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},b=function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r},Ce={grad:.9,turn:360,rad:360/(2*Math.PI)},$e=function(e){return ue(D(e))},D=function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?b(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?b(parseInt(e.substring(6,8),16)/255,2):1}},ke=function(e,t){return t===void 0&&(t="deg"),Number(e)*(Ce[t]||1)},Ne=function(e){var t=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?Ie({h:ke(t[1],t[2]),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)}):{h:0,s:0,v:0,a:1}},Ie=function(e){var t=e.s,r=e.l;return{h:e.h,s:(t*=(r<50?r:100-r)/100)>0?2*t/(r+t)*100:0,v:r+t,a:e.a}},Me=function(e){return Re(le(e))},ie=function(e){var t=e.s,r=e.v,n=e.a,a=(200-t)*r/100;return{h:b(e.h),s:b(a>0&&a<200?t*r/100/(a<=100?a:200-a)*100:0),l:b(a/2),a:b(n,2)}},V=function(e){var t=ie(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},j=function(e){var t=ie(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},le=function(e){var t=e.h,r=e.s,n=e.v,a=e.a;t=t/360*6,r/=100,n/=100;var i=Math.floor(t),l=n*(1-r),o=n*(1-(t-i)*r),u=n*(1-(1-t+i)*r),s=i%6;return{r:b(255*[n,o,l,l,u,n][s]),g:b(255*[u,n,n,o,l,l][s]),b:b(255*[l,l,u,n,n,o][s]),a:b(a,2)}},Se=function(e){var t=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?ue({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):{h:0,s:0,v:0,a:1}},L=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Re=function(e){var t=e.r,r=e.g,n=e.b,a=e.a,i=a<1?L(b(255*a)):"";return"#"+L(t)+L(r)+L(n)+i},ue=function(e){var t=e.r,r=e.g,n=e.b,a=e.a,i=Math.max(t,r,n),l=i-Math.min(t,r,n),o=l?i===t?(r-n)/l:i===r?2+(n-t)/l:4+(t-r)/l:0;return{h:b(60*(o<0?o+6:o)),s:b(i?l/i*100:0),v:b(i/255*100),a}},se=c.memo(function(e){var t=e.hue,r=e.onChange,n=H(["react-colorful__hue",e.className]);return c.createElement("div",{className:n},c.createElement(q,{onMove:function(a){r({h:360*a.left})},onKey:function(a){r({h:S(t+360*a.left,0,360)})},"aria-label":"Hue","aria-valuenow":b(t),"aria-valuemax":"360","aria-valuemin":"0"},c.createElement(U,{className:"react-colorful__hue-pointer",left:t/360,color:V({h:t,s:100,v:100,a:1})})))}),ce=c.memo(function(e){var t=e.hsva,r=e.onChange,n={backgroundColor:V({h:t.h,s:100,v:100,a:1})};return c.createElement("div",{className:"react-colorful__saturation",style:n},c.createElement(q,{onMove:function(a){r({s:100*a.left,v:100-100*a.top})},onKey:function(a){r({s:S(t.s+100*a.left,0,100),v:S(t.v-100*a.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+b(t.s)+"%, Brightness "+b(t.v)+"%"},c.createElement(U,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:V(t)})))}),fe=function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0},de=function(e,t){return e.replace(/\s/g,"")===t.replace(/\s/g,"")},Oe=function(e,t){return e.toLowerCase()===t.toLowerCase()||fe(D(e),D(t))};function he(e,t,r){var n=X(r),a=h.useState(function(){return e.toHsva(t)}),i=a[0],l=a[1],o=h.useRef({color:t,hsva:i});h.useEffect(function(){if(!e.equal(t,o.current.color)){var s=e.toHsva(t);o.current={hsva:s,color:t},l(s)}},[t,e]),h.useEffect(function(){var s;fe(i,o.current.hsva)||e.equal(s=e.fromHsva(i),o.current.color)||(o.current={hsva:i,color:s},n(s))},[i,e,n]);var u=h.useCallback(function(s){l(function(m){return Object.assign({},m,s)})},[]);return[i,u]}var Te=typeof window<"u"?h.useLayoutEffect:h.useEffect,He=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},Z=new Map,me=function(e){Te(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!Z.has(t)){var r=t.createElement("style");r.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,Z.set(t,r);var n=He();n&&r.setAttribute("nonce",n),t.head.appendChild(r)}},[])},Le=function(e){var t=e.className,r=e.colorModel,n=e.color,a=n===void 0?r.defaultColor:n,i=e.onChange,l=K(e,["className","colorModel","color","onChange"]),o=h.useRef(null);me(o);var u=he(r,a,i),s=u[0],m=u[1],d=H(["react-colorful",t]);return c.createElement("div",I({},l,{ref:o,className:d}),c.createElement(ce,{hsva:s,onChange:m}),c.createElement(se,{hue:s.h,onChange:m,className:"react-colorful__last-control"}))},Pe={defaultColor:"000",toHsva:$e,fromHsva:function(e){return Me({h:e.h,s:e.s,v:e.v,a:1})},equal:Oe},ze=function(e){return c.createElement(Le,I({},e,{colorModel:Pe}))},je=function(e){var t=e.className,r=e.hsva,n=e.onChange,a={backgroundImage:"linear-gradient(90deg, "+j(Object.assign({},r,{a:0}))+", "+j(Object.assign({},r,{a:1}))+")"},i=H(["react-colorful__alpha",t]),l=b(100*r.a);return c.createElement("div",{className:i},c.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),c.createElement(q,{onMove:function(o){n({a:o.left})},onKey:function(o){n({a:S(r.a+o.left)})},"aria-label":"Alpha","aria-valuetext":l+"%","aria-valuenow":l,"aria-valuemin":"0","aria-valuemax":"100"},c.createElement(U,{className:"react-colorful__alpha-pointer",left:r.a,color:j(r)})))},ge=function(e){var t=e.className,r=e.colorModel,n=e.color,a=n===void 0?r.defaultColor:n,i=e.onChange,l=K(e,["className","colorModel","color","onChange"]),o=h.useRef(null);me(o);var u=he(r,a,i),s=u[0],m=u[1],d=H(["react-colorful",t]);return c.createElement("div",I({},l,{ref:o,className:d}),c.createElement(ce,{hsva:s,onChange:m}),c.createElement(se,{hue:s.h,onChange:m}),c.createElement(je,{hsva:s,onChange:m,className:"react-colorful__last-control"}))},Be={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:Ne,fromHsva:j,equal:de},We=function(e){return c.createElement(ge,I({},e,{colorModel:Be}))},Xe={defaultColor:"rgba(0, 0, 0, 1)",toHsva:Se,fromHsva:function(e){var t=le(e);return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},equal:de},Fe=function(e){return c.createElement(ge,I({},e,{colorModel:Xe}))},De=xe,Ve=function(){return De.Date.now()},Ae=Ve,Ge=/\s/;function Ke(e){for(var t=e.length;t--&&Ge.test(e.charAt(t)););return t}var qe=Ke,Ue=qe,Ye=/^\s+/;function Je(e){return e&&e.slice(0,Ue(e)+1).replace(Ye,"")}var Qe=Je,Ze=Qe,ee=G,et=_e,te=NaN,tt=/^[-+]0x[0-9a-f]+$/i,rt=/^0b[01]+$/i,nt=/^0o[0-7]+$/i,at=parseInt;function ot(e){if(typeof e=="number")return e;if(et(e))return te;if(ee(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ee(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Ze(e);var r=rt.test(e);return r||nt.test(e)?at(e.slice(2),r?2:8):tt.test(e)?te:+e}var it=ot,lt=G,W=Ae,re=it,ut="Expected a function",st=Math.max,ct=Math.min;function ft(e,t,r){var n,a,i,l,o,u,s=0,m=!1,d=!1,f=!0;if(typeof e!="function")throw new TypeError(ut);t=re(t)||0,lt(r)&&(m=!!r.leading,d="maxWait"in r,i=d?st(re(r.maxWait)||0,t):i,f="trailing"in r?!!r.trailing:f);function x(v){var $=n,O=a;return n=a=void 0,s=v,l=e.apply(O,$),l}function R(v){return s=v,o=setTimeout(g,t),m?x(v):l}function C(v){var $=v-u,O=v-s,Y=t-$;return d?ct(Y,i-O):Y}function p(v){var $=v-u,O=v-s;return u===void 0||$>=t||$<0||d&&O>=i}function g(){var v=W();if(p(v))return _(v);o=setTimeout(g,C(v))}function _(v){return o=void 0,f&&n?x(v):(n=a=void 0,l)}function w(){o!==void 0&&clearTimeout(o),s=0,n=u=a=o=void 0}function E(){return o===void 0?l:_(W())}function N(){var v=W(),$=p(v);if(n=arguments,a=this,u=v,$){if(o===void 0)return R(u);if(d)return clearTimeout(o),o=setTimeout(g,t),x(u)}return o===void 0&&(o=setTimeout(g,t)),l}return N.cancel=w,N.flush=E,N}var dt=ft,ht=dt,mt=G,gt="Expected a function";function vt(e,t,r){var n=!0,a=!0;if(typeof e!="function")throw new TypeError(gt);return mt(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),ht(e,t,{leading:n,maxWait:t,trailing:a})}var pt=vt;const bt=be(pt);var xt=k.div({position:"relative",maxWidth:250,'&[aria-readonly="true"]':{opacity:.5}}),_t=k(oe)({position:"absolute",zIndex:1,top:4,left:4,"[aria-readonly=true] &":{cursor:"not-allowed"}}),Et=k.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),yt=k(Ee)(({theme:e})=>({fontFamily:e.typography.fonts.base})),wt=k.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),Ct=k.div(({theme:e,active:t})=>({width:16,height:16,boxShadow:t?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),$t=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,ne=({value:e,style:t,...r})=>{let n=`linear-gradient(${e}, ${e}), ${$t}, linear-gradient(#fff, #fff)`;return c.createElement(Ct,{...r,style:{...t,backgroundImage:n}})},kt=k(ye.Input)(({theme:e,readOnly:t})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),Nt=k(we)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),ve=(e=>(e.RGB="rgb",e.HSL="hsl",e.HEX="hex",e))(ve||{}),P=Object.values(ve),It=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,Mt=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,St=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,A=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,Rt=/^\s*#?([0-9a-f]{3})\s*$/i,Ot={hex:ze,rgb:Fe,hsl:We},z={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},ae=e=>{let t=e==null?void 0:e.match(It);if(!t)return[0,0,0,1];let[,r,n,a,i=1]=t;return[r,n,a,i].map(Number)},M=e=>{if(!e)return;let t=!0;if(Mt.test(e)){let[l,o,u,s]=ae(e),[m,d,f]=y.rgb.hsl([l,o,u])||[0,0,0];return{valid:t,value:e,keyword:y.rgb.keyword([l,o,u]),colorSpace:"rgb",rgb:e,hsl:`hsla(${m}, ${d}%, ${f}%, ${s})`,hex:`#${y.rgb.hex([l,o,u]).toLowerCase()}`}}if(St.test(e)){let[l,o,u,s]=ae(e),[m,d,f]=y.hsl.rgb([l,o,u])||[0,0,0];return{valid:t,value:e,keyword:y.hsl.keyword([l,o,u]),colorSpace:"hsl",rgb:`rgba(${m}, ${d}, ${f}, ${s})`,hsl:e,hex:`#${y.hsl.hex([l,o,u]).toLowerCase()}`}}let r=e.replace("#",""),n=y.keyword.rgb(r)||y.hex.rgb(r),a=y.rgb.hsl(n),i=e;if(/[^#a-f0-9]/i.test(e)?i=r:A.test(e)&&(i=`#${r}`),i.startsWith("#"))t=A.test(i);else try{y.keyword.hex(i)}catch{t=!1}return{valid:t,value:i,keyword:y.rgb.keyword(n),colorSpace:"hex",rgb:`rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,hsl:`hsla(${a[0]}, ${a[1]}%, ${a[2]}%, 1)`,hex:i}},Tt=(e,t,r)=>{if(!e||!(t!=null&&t.valid))return z[r];if(r!=="hex")return(t==null?void 0:t[r])||z[r];if(!t.hex.startsWith("#"))try{return`#${y.keyword.hex(t.hex)}`}catch{return z.hex}let n=t.hex.match(Rt);if(!n)return A.test(t.hex)?t.hex:z.hex;let[a,i,l]=n[1].split("");return`#${a}${a}${i}${i}${l}${l}`},Ht=(e,t)=>{let[r,n]=h.useState(e||""),[a,i]=h.useState(()=>M(r)),[l,o]=h.useState((a==null?void 0:a.colorSpace)||"hex");h.useEffect(()=>{let d=e||"",f=M(d);n(d),i(f),o((f==null?void 0:f.colorSpace)||"hex")},[e]);let u=h.useMemo(()=>Tt(r,a,l).toLowerCase(),[r,a,l]),s=h.useCallback(d=>{let f=M(d),x=(f==null?void 0:f.value)||d||"";n(x),x===""&&(i(void 0),t(void 0)),f&&(i(f),o(f.colorSpace),t(f.value))},[t]),m=h.useCallback(()=>{let d=P.indexOf(l)+1;d>=P.length&&(d=0),o(P[d]);let f=(a==null?void 0:a[P[d]])||"";n(f),t(f)},[a,l,t]);return{value:r,realValue:u,updateValue:s,color:a,colorSpace:l,cycleColorSpace:m}},B=e=>e.replace(/\s*/,"").toLowerCase(),Lt=(e,t,r)=>{let[n,a]=h.useState(t!=null&&t.valid?[t]:[]);h.useEffect(()=>{t===void 0&&a([])},[t]);let i=h.useMemo(()=>(e||[]).map(o=>typeof o=="string"?M(o):o.title?{...M(o.color),keyword:o.title}:M(o.color)).concat(n).filter(Boolean).slice(-27),[e,n]),l=h.useCallback(o=>{o!=null&&o.valid&&(i.some(u=>B(u[r])===B(o[r]))||a(u=>u.concat(o)))},[r,i]);return{presets:i,addPreset:l}},Pt=({name:e,value:t,onChange:r,onFocus:n,onBlur:a,presetColors:i,startOpen:l=!1,argType:o})=>{var w;let u=h.useCallback(bt(r,200),[r]),{value:s,realValue:m,updateValue:d,color:f,colorSpace:x,cycleColorSpace:R}=Ht(t,u),{presets:C,addPreset:p}=Lt(i,f,x),g=Ot[x],_=!!((w=o==null?void 0:o.table)!=null&&w.readonly);return c.createElement(xt,{"aria-readonly":_},c.createElement(_t,{startOpen:l,trigger:_?[null]:void 0,closeOnOutsideClick:!0,onVisibleChange:()=>p(f),tooltip:c.createElement(Et,null,c.createElement(g,{color:m==="transparent"?"#000000":m,onChange:d,onFocus:n,onBlur:a}),C.length>0&&c.createElement(wt,null,C.map((E,N)=>c.createElement(oe,{key:`${E.value}-${N}`,hasChrome:!1,tooltip:c.createElement(yt,{note:E.keyword||E.value})},c.createElement(ne,{value:E[x],active:f&&B(E[x])===B(f[x]),onClick:()=>d(E.value)})))))},c.createElement(ne,{value:m,style:{margin:4}})),c.createElement(kt,{id:pe(e),value:s,onChange:E=>d(E.target.value),onFocus:E=>E.target.select(),readOnly:_,placeholder:"Choose color..."}),s?c.createElement(Nt,{onClick:R}):null)},Jt=Pt;export{Pt as ColorControl,Jt as default};
