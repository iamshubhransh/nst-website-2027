(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,866422,e=>{"use strict";var t=e.i(271645),r=e.i(58863);function n(e){let t=e.getAttribute("href");if(!(!t||t.startsWith("#")||t.startsWith("mailto:")||t.startsWith("tel:")))try{let n=new URL(t,window.location.href);if("https:"!==n.protocol&&"http:"!==n.protocol||!(n.hostname===window.location.hostname||"newtonschool.co"===n.hostname||n.hostname.endsWith(".newtonschool.co")))return;let i=(0,r.appendUtmParams)(n.toString());i!==e.href&&(e.href=i)}catch{}}function i(e){e.querySelectorAll("a[href]").forEach(n)}e.s(["UtmPropagation",0,function(){return(0,t.useEffect)(()=>{if((0,r.persistUtmParams)(),0===Object.keys((0,r.getUtmParams)()).length)return;i(document);let e=new MutationObserver(e=>{for(let t of e){if("attributes"===t.type&&t.target instanceof HTMLAnchorElement){n(t.target);continue}t.addedNodes.forEach(e=>{e instanceof HTMLAnchorElement?n(e):e instanceof Element&&i(e)})}});e.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["href"]});let t=e=>{let t=e.target?.closest?.("a[href]");t instanceof HTMLAnchorElement&&n(t)};return document.addEventListener("click",t,!0),document.addEventListener("auxclick",t,!0),()=>{e.disconnect(),document.removeEventListener("click",t,!0),document.removeEventListener("auxclick",t,!0)}},[]),null}])},624151,e=>{"use strict";var t=e.i(843476),r=e.i(271645),n=e.i(549838);e.s(["CountUp",0,function({end:e,duration:i=1600,prefix:a="",suffix:l="",decimals:s=0,className:o,format:u=e=>e.toLocaleString("en-IN")}){let[c,d]=(0,r.useState)(e),f=(0,r.useRef)(null),p=(0,r.useRef)(!1);return(0,r.useEffect)(()=>{let t=f.current;if(!t||window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return;let r=10**s,n=0,a=()=>{if(p.current)return;p.current=!0;let t=performance.now(),a=l=>{let s=Math.min(1,(l-t)/i);d(Math.round((1-Math.pow(1-s,3))*e*r)/r),s<1&&(n=requestAnimationFrame(a))};d(0),n=requestAnimationFrame(a)},l=new IntersectionObserver(e=>{for(let t of e)if(t.isIntersecting){a(),l.disconnect();break}},{rootMargin:"0px 0px -10% 0px",threshold:.2});return l.observe(t),()=>{l.disconnect(),n&&cancelAnimationFrame(n),p.current=!1}},[e,i,s]),(0,t.jsxs)("span",{ref:f,className:(0,n.cn)("inline-grid align-baseline",o),children:[(0,t.jsxs)("span",{"aria-hidden":!0,className:"invisible col-start-1 row-start-1",children:[a,u(e),l]}),(0,t.jsxs)("span",{className:"col-start-1 row-start-1 whitespace-nowrap",children:[a,u(c),l]})]})}])},818581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return i}});let n=e.r(271645);function i(e,t){let r=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=a(e,n)),t&&(i.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},898879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let n=e.r(271645),i="u"<typeof window,a=i?()=>{}:n.useLayoutEffect,l=i?()=>{}:n.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let e=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return i&&(t?.mountedInstances?.add(e.children),s()),a(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),a(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},325633,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return g},defaultHead:function(){return d}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a=e.r(555682),l=e.r(190809),s=e.r(843476),o=l._(e.r(271645)),u=a._(e.r(898879)),c=e.r(742732);function d(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(233525);let p=["name","httpEquiv","charSet","itemProp"];function h(e){let t,r,n,i;return e.reduce(f,[]).reverse().concat(d().reverse()).filter((t=new Set,r=new Set,n=new Set,i={},e=>{let a=!0,l=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){l=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?a=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?a=!1:r.add(e.type);break;case"meta":for(let t=0,r=p.length;t<r;t++){let r=p[t];if(e.props.hasOwnProperty(r))if("charSet"===r)n.has(r)?a=!1:n.add(r);else{let t=e.props[r],n=i[r]||new Set;("name"!==r||!l)&&n.has(t)?a=!1:(n.add(t),i[r]=n)}}}return a})).reverse().map((e,t)=>{let r=e.key||t;return o.default.cloneElement(e,{key:r})})}let g=function({children:e}){let t=(0,o.useContext)(c.HeadManagerContext);return(0,s.jsx)(u.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},488143,(e,t,r)=>{"use strict";function n({widthInt:e,heightInt:t,blurWidth:r,blurHeight:i,blurDataURL:a,objectFit:l}){let s=r?40*r:e,o=i?40*i:t,u=s&&o?`viewBox='0 0 ${s} ${o}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},987690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={VALID_LOADERS:function(){return a},imageConfigDefault:function(){return l}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a=["default","imgix","cloudinary","akamai","custom"],l={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},908927,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return u}}),e.r(233525);let n=e.r(543369),i=e.r(488143),a=e.r(987690),l=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u({src:e,sizes:t,unoptimized:r=!1,priority:c=!1,preload:d=!1,loading:f,className:p,quality:h,width:g,height:m,fill:v=!1,style:x,overrideSrc:_,onLoad:b,onLoadingComplete:w,placeholder:y="empty",blurDataURL:P,fetchPriority:A,decoding:R="async",layout:S,objectFit:E,objectPosition:j,lazyBoundary:C,lazyRoot:O,...k},z){var D;let M,N,H,{imgConf:I,showAltText:L,blurComplete:B,defaultLoader:$}=z,G=I||a.imageConfigDefault;if("allSizes"in G)M=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t),r=G.qualities?.sort((e,t)=>e-t);M={...G,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===$)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let T=k.loader||$;delete k.loader,delete k.srcSet;let U="__next_img_default"in T;if(U){if("custom"===M.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=T;T=t=>{let{config:r,...n}=t;return e(n)}}if(S){"fill"===S&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(x={...x,...e});let r={responsive:"100vw",fill:"100vw"}[S];r&&!t&&(t=r)}let F="",q=o(g),W=o(m);if((D=e)&&"object"==typeof D&&(s(D)||void 0!==D.src)){let t=s(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(N=t.blurWidth,H=t.blurHeight,P=P||t.blurDataURL,F=t.src,!v)if(q||W){if(q&&!W){let e=q/t.width;W=Math.round(t.height*e)}else if(!q&&W){let e=W/t.height;q=Math.round(t.width*e)}}else q=t.width,W=t.height}let V=!c&&!d&&("lazy"===f||void 0===f);(!(e="string"==typeof e?e:F)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,V=!1),M.unoptimized&&(r=!0),U&&!M.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let Y=o(h),X=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:j}:{},L?{}:{color:"transparent"},x),Q=B||"empty"===y?null:"blur"===y?`url("data:image/svg+xml;charset=utf-8,${(0,i.getImageBlurSvg)({widthInt:q,heightInt:W,blurWidth:N,blurHeight:H,blurDataURL:P||"",objectFit:X.objectFit})}")`:`url("${y}")`,K=l.includes(X.objectFit)?"fill"===X.objectFit?"100% 100%":"cover":X.objectFit,J=Q?{backgroundSize:K,backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Q}:{},Z=function({config:e,src:t,unoptimized:r,width:i,quality:a,sizes:l,loader:s}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,n.getDeploymentId)();if(e){let r=t.indexOf("?");if(-1!==r){let n=new URLSearchParams(t.slice(r+1));n.get("dpl")||(n.append("dpl",e),t=t.slice(0,r)+"?"+n.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:o,kind:u}=function({deviceSizes:e,allSizes:t},r,n){if(n){let r=/(^|\s)(1?\d?\d)vw/g,i=[];for(let e;e=r.exec(n);)i.push(parseInt(e[2]));if(i.length){let r=.01*Math.min(...i);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,i,l),c=o.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:o.map((r,n)=>`${s({config:e,src:t,quality:a,width:r})} ${"w"===u?r:n+1}${u}`).join(", "),src:s({config:e,src:t,quality:a,width:o[c]})}}({config:M,src:e,unoptimized:r,width:q,quality:Y,sizes:t,loader:T}),ee=V?"lazy":f;return{props:{...k,loading:ee,fetchPriority:A,width:q,height:W,decoding:R,className:p,style:{...X,...J},sizes:Z.sizes,srcSet:Z.srcSet,src:_||Z.src},meta:{unoptimized:r,preload:d||c,placeholder:y,fill:v}}}},918556,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let n=e.r(555682)._(e.r(271645)),i=e.r(987690),a=n.default.createContext(i.imageConfigDefault)},65856,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return n}});let n=e.r(555682)._(e.r(271645)).default.createContext(null)},670965,(e,t,r)=>{"use strict";function n(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return n}})},1948,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return l}});let n=e.r(670965),i=e.r(543369);function a({config:e,src:t,width:r,quality:l}){let s=(0,i.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),n=r.get("dpl");if(n){s=n,r.delete("dpl");let i=r.toString();t=t.slice(0,e)+(i?"?"+i:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let o=(0,n.findClosestQuality)(l,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${o}${t.startsWith("/")&&s?`&dpl=${s}`:""}`}a.__next_img_default=!0;let l=a},605500,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return b}});let n=e.r(555682),i=e.r(190809),a=e.r(843476),l=i._(e.r(271645)),s=n._(e.r(174080)),o=n._(e.r(325633)),u=e.r(908927),c=e.r(987690),d=e.r(918556);e.r(233525);let f=e.r(65856),p=n._(e.r(1948)),h=e.r(818581),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/nst-website-2027/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,r,n,i,a,l){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}n?.current&&n.current(e)}}))}function v(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let x=(0,l.forwardRef)(({src:e,srcSet:t,sizes:r,height:n,width:i,decoding:s,className:o,style:u,fetchPriority:c,placeholder:d,loading:f,unoptimized:p,fill:g,onLoadRef:x,onLoadingCompleteRef:_,setBlurComplete:b,setShowAltText:w,sizesInput:y,onLoad:P,onError:A,...R},S)=>{let E=(0,l.useCallback)(e=>{e&&(A&&(e.src=e.src),e.complete&&m(e,d,x,_,b,p,y))},[e,d,x,_,b,A,p,y]),j=(0,h.useMergedRef)(S,E);return(0,a.jsx)("img",{...R,...v(c),loading:f,width:i,height:n,decoding:s,"data-nimg":g?"fill":"1",className:o,style:u,sizes:r,srcSet:t,src:e,ref:j,onLoad:e=>{m(e.currentTarget,d,x,_,b,p,y)},onError:e=>{w(!0),"empty"!==d&&b(!0),A&&A(e)}})});function _({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...v(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,r),null):(0,a.jsx)(o.default,{children:(0,a.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let b=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(f.RouterContext),n=(0,l.useContext)(d.ImageConfigContext),i=(0,l.useMemo)(()=>{let e=g||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),i=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:i,localPatterns:"u"<typeof window?n?.localPatterns:e.localPatterns}},[n]),{onLoad:s,onLoadingComplete:o}=e,h=(0,l.useRef)(s);(0,l.useEffect)(()=>{h.current=s},[s]);let m=(0,l.useRef)(o);(0,l.useEffect)(()=>{m.current=o},[o]);let[v,b]=(0,l.useState)(!1),[w,y]=(0,l.useState)(!1),{props:P,meta:A}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:v,showAltText:w});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x,{...P,unoptimized:A.unoptimized,placeholder:A.placeholder,fill:A.fill,onLoadRef:h,onLoadingCompleteRef:m,setBlurComplete:b,setShowAltText:y,sizesInput:e.sizes,ref:t}),A.preload?(0,a.jsx)(_,{isAppRouter:!r,imgAttributes:P}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},794909,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return c},getImageProps:function(){return u}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a=e.r(555682),l=e.r(908927),s=e.r(605500),o=a._(e.r(1948));function u(e){let{props:t}=(0,l.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/nst-website-2027/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let c=s.Image},657688,(e,t,r)=>{t.exports=e.r(794909)},756903,e=>{"use strict";var t=e.i(843476),r=e.i(271645),n=e.i(339415),i=e.i(549838);let a=(0,r.createContext)(null);function l(){let e=(0,r.useContext)(a);if(!e)throw Error("useRcbModal must be used within a modal provider");return e}let s={brand:{variant:"primary",color:"brand"},success:{variant:"primary",color:"success"},neutral:{variant:"primary",color:"neutral"},dark:{variant:"primary",color:"neutral"},outline:{variant:"secondary",color:"brand"}};e.s(["ModalCtaButton",0,function({cta:e,color:r="brand",size:a="large",fullWidth:o,className:u,leadingIcon:c,trailingIcon:d,ariaLabel:f}){let{open:p}=l(),{variant:h,color:g}=s[r],m="large"===a;return(0,t.jsxs)(n.default,{variant:h,color:g,size:a,onClick:()=>p(e),"data-from":e.from,"aria-label":f,style:{"--font-size":m?"16px":"14px","--line-height":m?"26px":"20px","--font-weight-semibold":"600"},className:(0,i.cn)(o&&"w-full! md:w-auto!",m?"h-14! px-5!":"h-10! px-4! md:h-12! md:px-5!",u),children:[c,e.label,d]})},"RcbModalContext",0,a,"useRcbModal",0,l])},703109,968081,e=>{"use strict";var t=e.i(997053),r=e.i(271645),n={DISPLAY_BD_D1:"display-bd-d1",DISPLAY_BD_D2:"display-bd-d2",DISPLAY_BD_D3:"display-bd-d3",HEADING_SB_H1:"heading-sb-h1",HEADING_SB_H2:"heading-sb-h2",HEADING_SB_H3:"heading-sb-h3",HEADING_SB_H4:"heading-sb-h4",HEADING_SB_H5:"heading-sb-h5",HEADING_SB_H6:"heading-sb-h6",PARAGRAPH_SB_P1:"paragraph-sb-p1",PARAGRAPH_SB_P2:"paragraph-sb-p2",PARAGRAPH_SB_P3:"paragraph-sb-p3",PARAGRAPH_SB_P4:"paragraph-sb-p4",PARAGRAPH_SB_L1:"paragraph-sb-l1",PARAGRAPH_SB_L2:"paragraph-sb-l2",PARAGRAPH_MD_P1:"paragraph-md-p1",PARAGRAPH_MD_P2:"paragraph-md-p2",PARAGRAPH_MD_P3:"paragraph-md-p3",PARAGRAPH_MD_P4:"paragraph-md-p4",PARAGRAPH_MD_C1:"paragraph-md-c1",PARAGRAPH_MD_L1:"paragraph-md-l1",PARAGRAPH_MD_L2:"paragraph-md-l2",OVERLINE_SB_OL1:"overline-sb-ol1",OVERLINE_SB_OL2:"overline-sb-ol2",ACTION_SB_P1:"action-sb-p1",ACTION_SB_P2:"action-sb-p2",ACTION_SB_LK1:"action-sb-lk1"};Object.freeze(Object.values(n));var i={H1:"h1",H2:"h2",H3:"h3",H4:"h4",H5:"h5",H6:"h6",P:"p",SPAN:"span",DIV:"div",LABEL:"label",CAPTION:"caption",CODE:"code",AUTO:"auto"};Object.freeze(Object.values(i));var a={[n.DISPLAY_BD_D1]:t.css`
        font-size: var(--font-size-fs-120, 76px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-140, 92px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[n.DISPLAY_BD_D2]:t.css`
        font-size: var(--font-size-fs-110, 64px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-130, 76px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[n.DISPLAY_BD_D3]:t.css`
        font-size: var(--font-size-fs-100, 52px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-120, 64px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[n.HEADING_SB_H1]:t.css`
        font-size: var(--font-size-fs-90, 40px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-110, 48px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[n.HEADING_SB_H2]:t.css`
        font-size: var(--font-size-fs-80, 36px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-100, 42px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[n.HEADING_SB_H3]:t.css`
        font-size: var(--font-size-fs-70, 28px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-90, 32px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[n.HEADING_SB_H4]:t.css`
        font-size: var(--font-size-fs-60, 24px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[n.HEADING_SB_H5]:t.css`
        font-size: var(--font-size-fs-50, 20px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-60, 24px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[n.HEADING_SB_H6]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-40, 20px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[n.PARAGRAPH_SB_P1]:t.css`
        font-size: var(--font-size-fs-40, 18px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[n.PARAGRAPH_SB_P2]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[n.PARAGRAPH_SB_P3]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-10, 0.016px);
    `,[n.PARAGRAPH_SB_P4]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-30, 18px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[n.PARAGRAPH_SB_L1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,[n.PARAGRAPH_SB_L2]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-10, 14px);
        letter-spacing: var(--letter-spacing-ls-40, 0.25px);
    `,[n.PARAGRAPH_MD_P1]:t.css`
        font-size: var(--font-size-fs-40, 18px);
        font-weight: var(--font-weight-fw-10, 500);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[n.PARAGRAPH_MD_P2]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[n.PARAGRAPH_MD_P3]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[n.PARAGRAPH_MD_P4]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-30, 18px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[n.PARAGRAPH_MD_C1]:t.css`
        font-family: 'Fira Code';
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-00, 450);
        line-height: var(--line-height-lh-40, 20px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[n.PARAGRAPH_MD_L1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-60, 0.5px);
    `,[n.PARAGRAPH_MD_L2]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-10, 14px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,[n.OVERLINE_SB_OL1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-70, 1.6px);
        text-transform: uppercase;
    `,[n.OVERLINE_SB_OL2]:t.css`
        font-size: var(--font-size-fs-00, 11px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-00, 12px);
        letter-spacing: var(--letter-spacing-ls-80, 2px);
        text-transform: uppercase;
    `,[n.ACTION_SB_P1]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[n.ACTION_SB_P2]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,[n.ACTION_SB_LK1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-80, 2px);
        text-transform: uppercase;
    `},l={[n.DISPLAY_BD_D1]:i.H1,[n.DISPLAY_BD_D2]:i.H2,[n.DISPLAY_BD_D3]:i.H3,[n.HEADING_SB_H1]:i.H1,[n.HEADING_SB_H2]:i.H2,[n.HEADING_SB_H3]:i.H3,[n.HEADING_SB_H4]:i.H4,[n.HEADING_SB_H5]:i.H5,[n.HEADING_SB_H6]:i.H6,[n.PARAGRAPH_SB_P1]:i.P,[n.PARAGRAPH_SB_P2]:i.P,[n.PARAGRAPH_SB_P3]:i.P,[n.PARAGRAPH_SB_P4]:i.P,[n.PARAGRAPH_SB_L1]:i.LABEL,[n.PARAGRAPH_SB_L2]:i.LABEL,[n.PARAGRAPH_MD_P1]:i.P,[n.PARAGRAPH_MD_P2]:i.P,[n.PARAGRAPH_MD_P3]:i.P,[n.PARAGRAPH_MD_P4]:i.P,[n.PARAGRAPH_MD_C1]:i.CODE,[n.PARAGRAPH_MD_L1]:i.LABEL,[n.PARAGRAPH_MD_L2]:i.LABEL,[n.OVERLINE_SB_OL1]:i.P,[n.OVERLINE_SB_OL2]:i.P,[n.ACTION_SB_P1]:i.SPAN,[n.ACTION_SB_P2]:i.SPAN,[n.ACTION_SB_LK1]:i.SPAN},s=t.styled.p.attrs(e=>({as:e.as||"p"}))`
    margin: 0;
    padding: 0;

    font-family: var(--font-family, 'Mona Sans');
    color: var(--text-emphasis-primary-default, #16191d);

    ${({$variant:e})=>t.css`
            ${e?a[e]:a[n.PARAGRAPH_MD_P1]}
        `};

    ${({$textAlign:e})=>e&&`text-align: ${e};`}
    ${({$textTransform:e})=>e&&`text-transform: ${e};`}
    ${({$fontSize:e})=>e&&`font-size: ${e};`}
    ${({$color:e})=>e&&`color: ${e};`};
`,o=({variant:e="paragraph-md-p1",as:t="auto",color:n="var(--text-emphasis-primary-default, #16191d)",textAlign:a=null,textTransform:o=null,fontSize:u=null,children:c="",className:d="",title:f=null})=>{let p=t===i.AUTO?l[e]:t;return r.default.createElement(s,{$variant:e,as:p,$color:n,$textAlign:a,$textTransform:o,$fontSize:u,className:d,title:f},c)};e.s(["Typography_default",0,o],968081),e.s(["default",0,o],703109)},830249,e=>{"use strict";var t=e.i(271645);e.s(["useParentUrl",0,function(){let[e,r]=(0,t.useState)("");return(0,t.useEffect)(()=>{function e(e){let t=e.data;t&&"object"==typeof t&&"PARENT_URL"===t.type&&"string"==typeof t.url&&r(t.url)}return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]),e}])},397681,e=>{"use strict";var t=e.i(893347),r=e.i(773892),n=e.i(364072),i=e.i(189101),a=e.i(824511),l=e.i(88653),s=e.i(271645),o=e.i(997053),u=(0,o.styled)(a.m.div)`
    background: var(--bg-subtle-primary-default, #ffffff);
    z-index: var(--z-index-modal, 1100);
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.25);
    border-radius: var(--corner-radius-12px, 12px);
    padding: var(--spacing-20px, 20px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-16px, 16px);
    box-sizing: border-box;

    @media only screen and (max-width: 600px) {
        padding: var(--spacing-18px, 18px);
    }

    ${({$width:e})=>e?o.css`
                  width: ${e};
              `:""}
    ${({$height:e})=>e?o.css`
                  height: ${e};
              `:""}
    ${({$minHeight:e})=>e?o.css`
                  min-height: ${e};
              `:""}
    ${({$minWidth:e})=>e?o.css`
                  min-width: ${e};
              `:""}
    ${({$maxHeight:e})=>e?o.css`
                  max-height: ${e};
              `:""}
    ${({$maxWidth:e})=>e?o.css`
                  max-width: ${e};
              `:""}

    ${({$mobileBottomFullWidth:e})=>e?o.css`
                  @media only screen and (max-width: 600px) {
                      position: fixed;
                      bottom: 0;
                      border-bottom-left-radius: 0;
                      border-bottom-right-radius: 0;
                      max-width: unset;
                      width: 100%;
                      padding: var(--spacing-16px, 16px);
                  }
              `:""}

    ${({$modalPadding:e})=>o.css`
            padding: ${e};

            @media only screen and (max-width: 600px) {
                padding: ${e};
            }
        `}

    ${({$border:e})=>e&&o.css`
            border: ${e};
        `}
`,c=o.styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex: 1;
    gap: var(--spacing-12px, 12px);

    ${({$overflow:e})=>e&&o.css`
            overflow: ${e};
        `}

    @media only screen and (max-width: 600px) {
        padding: 0;
    }
`,d=o.styled.div`
    width: 100%;
    height: var(--spacing-1px, 1px);
    background: var(--border-subtle-primary-default, #e1e5ea);
`,f=o.styled.h2`
    color: var(--text-emphasis-primary-default, #16191d);
    font-weight: var(--font-weight-semibold, 600);
    font-size: var(--font-size-24px, 24px);
    line-height: var(--spacing-32px, 32px);
    margin: var(--spacing-0px, 0px) auto;
    text-align: center;

    @media only screen and (max-width: 600px) {
        font-size: var(--font-size-16px, 16px);
        line-height: var(--spacing-24px, 24px);
    }
`,p=o.styled.div`
    font-weight: var(--font-weight-450, 450);
    font-size: var(--font-size-16px, 16px);
    line-height: var(--spacing-28px, 28px);
    text-align: center;
    letter-spacing: 0.2px;
    color: var(--text-emphasis-secondary-default, #5b6271);
    white-space: pre-line;

    @media only screen and (max-width: 600px) {
        font-size: var(--font-size-14px, 14px);
        line-height: var(--spacing-24px, 24px);
    }
`,h=o.styled.div`
    font-weight: var(--font-weight-450, 450);
    font-size: var(--font-size-16px, 16px);
    line-height: var(--spacing-28px, 28px);
    text-align: center;
    letter-spacing: 0.2px;
    color: var(--text-emphasis-secondary-default, #5b6271);
    ${({$modalBodyMargin:e})=>e&&o.css`
            margin: ${e};
        `}
    white-space: pre-line;
    width: 100%;
    flex: 1;

    @media only screen and (max-width: 600px) {
        font-size: var(--font-size-14px, 14px);
        line-height: var(--spacing-24px, 24px);
    }
`;o.styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    gap: var(--spacing-12px, 12px);
`,o.styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-4px, 4px);
    margin-top: auto;
`,o.styled.div`
    width: 6px;
    height: 6px;
    border-radius: var(--corner-radius-50percent, 50%);
    background: var(--border-subtle-primary-default, #e1e5ea);
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    ${({$active:e})=>e?"background: var(--text-emphasis-secondary-default, #5b6271);":"&:hover {background: var(--text-emphasis-primary-disabled, #8c95a6);}"}
`;var g=o.styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: var(--spacing-8px, 8px);

    ${({$justifyContent:e})=>e&&o.css`
            justify-content: ${e};
        `}
`,m=o.styled.div`
    width: 100%;
    position: relative;

    img {
        width: 100%;
        border-radius: var(--corner-radius-8px, 8px);
    }
`,v={slide:{variants:{hidden:{opacity:0,y:-50},visible:{opacity:1,y:0},exit:{opacity:0,y:50}},transition:{duration:.3}},"slide-reverse":{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0},exit:{opacity:0,y:-50}},transition:{duration:.3}},fade:{variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},transition:{duration:.3}},emanate:{}},x=(0,s.forwardRef)(({width:e,height:t,minHeight:r,minWidth:n,maxHeight:i,maxWidth:a,mobileBottomFullWidth:l,modalPadding:o,border:c,children:d,...f},p)=>s.default.createElement(u,{ref:p,$width:e,$height:t,$minHeight:r,$minWidth:n,$maxHeight:i,$maxWidth:a,$mobileBottomFullWidth:l,$modalPadding:o,$border:c,...f},d)),_=(0,s.forwardRef)(({justifyContent:e,children:t},r)=>s.default.createElement(g,{ref:r,$justifyContent:e},t)),b=(0,s.forwardRef)(({overflow:e,children:t,...r},n)=>s.default.createElement(c,{ref:n,$overflow:e,...r},t)),w=(0,s.forwardRef)(({children:e,...t},r)=>s.default.createElement(m,{ref:r,...t},e)),y=(0,s.forwardRef)(({children:e,...t},r)=>s.default.createElement(f,{ref:r,...t},e)),P=(0,s.forwardRef)(({children:e,...t},r)=>s.default.createElement(p,{ref:r,...t},e)),A=(0,s.forwardRef)(({modalBodyMargin:e,children:t,...r},n)=>s.default.createElement(h,{ref:n,$modalBodyMargin:e,...r},t)),R=(0,s.forwardRef)(({...e},t)=>s.default.createElement(d,{ref:t,...e})),S=(0,s.forwardRef)((e,a)=>{let{isOpen:o=!0,banner:d=null,title:x=null,description:_=null,body:b=null,action:w=null,height:y="auto",width:P="500px",minHeight:A=null,minWidth:R=null,maxHeight:S="95vh",maxWidth:E="95vw",onHide:j=()=>{},onClose:C=()=>{},mobileBottomFullWidth:O=!1,modalPadding:k="20px",border:z="1px solid var(--border-subtle-primary-default, #e1e5ea)",modalBodyMargin:D=null,showCloseButton:M=!1,hideOnClickAway:N=!1,blurBackground:H=!1,animatePresence:I="fade",clickEvent:L=null,children:B=null,shouldFocusOnFirstElement:$=!0,shouldDisableScroll:G=!0,overflow:T="visible",className:U}=e,F=(0,s.useRef)(null),q=()=>{"function"==typeof j&&j(),"function"==typeof C&&C()};(0,s.useImperativeHandle)(a,()=>F.current),(0,r.useDisableBodyScroll_default)(o),(0,r.useKeyboardEvent_default)({onKeyPress:()=>{N&&q()},keyCodes:["Escape"],config:{shouldDetect:o}});let W=(0,s.useId)(),V=(0,s.useMemo)(()=>{var e,t;return e=I,t=L,"emanate"===e?"number"==typeof(null==t?void 0:t.clientX)&&"number"==typeof(null==t?void 0:t.clientY)?((e,t)=>{let r,n;try{r=e-window.innerWidth/2,n=t-window.innerHeight/2}catch(e){r=0,n=0}return{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{scale:0,opacity:0,x:r,y:n},visible:{scale:1,opacity:1,x:0,y:0},exit:{scale:0,opacity:0,x:r,y:n}},transition:{duration:.3}}})(t.clientX,t.clientY):{}:{initial:"hidden",animate:"visible",exit:"exit",...e?v[e]:{}}},[I,L]),Y=(0,s.useMemo)(()=>(({isOpen:e,animatePresence:t,clickEvent:r})=>!!e&&("emanate"!==t||"number"==typeof(null==r?void 0:r.clientX)&&"number"==typeof(null==r?void 0:r.clientY)))({isOpen:o,animatePresence:I,clickEvent:L}),[o,I,L]);return s.default.createElement(n.motion_default,null,s.default.createElement(l.AnimatePresence,null,Y&&s.default.createElement(t.Overlay_default,{shouldDisableScroll:G,onOverlayClick:()=>{N&&q()},shouldTintOverlay:!0,shouldBlurOverlay:H,shouldCenterContent:!0,"data-testid":"testid-modalwrapper",className:U,animationDuration:.3,shouldFocusOnFirstElement:$},s.default.createElement(u,{onClick:e=>e.stopPropagation(),ref:F,$width:P,$height:y,$minHeight:A,$minWidth:R,$maxHeight:S,$maxWidth:E,$mobileBottomFullWidth:O,$modalPadding:k,$border:z,"aria-labelledby":`modal-title-${W}`,"aria-describedby":`modal-description-${W}`,"aria-modal":"true",role:"dialog","data-testid":"testid-modal",...V},s.default.createElement(c,{$overflow:T},M&&s.default.createElement(g,{$justifyContent:"end"},s.default.createElement(i.IconButton_default,{onClick:q,size:"small",variant:"tertiary",color:"neutral",icon:"close",ariaLabel:"Close",buttonProps:{autoFocus:!0}})),d&&s.default.createElement(m,null,d),x&&s.default.createElement(f,{id:`modal-title-${W}`},x),_&&s.default.createElement(p,{id:`modal-description-${W}`},_),b&&s.default.createElement(h,{$modalBodyMargin:D},b),B&&s.default.createElement(h,{$modalBodyMargin:D},B)),w&&s.default.createElement(g,null,w)))))});S.Modal=x,S.Main=b,S.Banner=w,S.Title=y,S.Description=P,S.Body=A,S.Action=_,S.Divider=R,e.s(["NSModal",0,S],397681)},914984,e=>{"use strict";var t=e.i(843476);e.s(["ArrowRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M5 12h14m0 0-6-6m6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronLeftIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m15 6-6 6 6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m9 6 6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"CloseIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M6 6l12 12M18 6 6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"RadioUncheckedIcon",0,function({className:e}){return(0,t.jsx)("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":!0,focusable:"false",className:e,children:(0,t.jsx)("path",{d:"M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 14.6 5.4 18.3333 10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667ZM10 16.6667C6.31667 16.6667 3.33333 13.6833 3.33333 10C3.33333 6.31667 6.31667 3.33333 10 3.33333C13.6833 3.33333 16.6667 6.31667 16.6667 10C16.6667 13.6833 13.6833 16.6667 10 16.6667Z",fill:"currentColor"})})},"SparkIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M12 2c.45 4.2 2.3 6.05 6.5 6.5-4.2.45-6.05 2.3-6.5 6.5-.45-4.2-2.3-6.05-6.5-6.5C9.7 8.05 11.55 6.2 12 2z"})})},"YouTubePlayIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 68 48",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("path",{d:"M66.5 7.5a8.5 8.5 0 0 0-6-6C55.2 0 34 0 34 0S12.8 0 7.5 1.5a8.5 8.5 0 0 0-6 6A89 89 0 0 0 0 24a89 89 0 0 0 1.5 16.5 8.5 8.5 0 0 0 6 6C12.8 48 34 48 34 48s21.2 0 26.5-1.5a8.5 8.5 0 0 0 6-6A89 89 0 0 0 68 24a89 89 0 0 0-1.5-16.5z",fill:"#FF0000"}),(0,t.jsx)("path",{d:"M27.2 34.29 44.85 24 27.2 13.71v20.58z",fill:"#fff"})]})}])},680395,e=>{"use strict";let t="ns_rcb_unlock_v2";function r(){let e=function(e,t){try{let r=e().getItem(t);if(!r)return null;return JSON.parse(r)}catch{return null}}(()=>window.sessionStorage,t);if(!e||1!==e.v||!e.profile)return null;let r=e.profile;return"string"==typeof r.fullName&&"string"==typeof r.phone&&r.fullName.trim()&&10===r.phone.replace(/\D/g,"").length?{fullName:r.fullName,phone:r.phone,email:"string"==typeof r.email?r.email:"",whatsapp:!!r.whatsapp,qualifierAnswers:r.qualifierAnswers&&"object"==typeof r.qualifierAnswers?r.qualifierAnswers:{},savedAt:"number"==typeof r.savedAt?r.savedAt:0}:null}e.s(["DEFAULT_RCB_QUALIFIER_KEYS",0,["highest_qualification","graduation_year"],"isLeadUnlocked",0,function(){return null!==r()},"mergeUnlockProfile",0,function(e){let n=r();!function(e,t,r){try{e().setItem(t,JSON.stringify(r))}catch{return!1}}(()=>window.sessionStorage,t,{v:1,profile:{fullName:e.fullName,phone:e.phone,email:e.email,whatsapp:e.whatsapp,qualifierAnswers:{...n?.qualifierAnswers,...e.qualifierAnswers},savedAt:Date.now()}})},"normalizeQualifierValue",0,function(e){return e.replace(/[\u200B\u200C\u200D\u2060\uFEFF]/g,"").trim()},"readUnlockProfile",0,r])},356105,527341,e=>{"use strict";var t=e.i(271645),r=e.i(336835);let n="multi_step_rcb_form_partial_fill_hash";function i(e){try{return window.localStorage.getItem(e)??""}catch{return""}}function a(e,t){try{window.localStorage.setItem(e,t)}catch{}}function l(e){try{window.localStorage.removeItem(e)}catch{}}e.s(["usePartialRcb",0,function(e){let s=e?.resumeStoredHash??!0,o=e?.filedScope?"multi_step_rcb_form_filed_hash:"+e.filedScope:"",u=(0,t.useRef)(o);u.current=o;let c=(0,t.useRef)(!1),d=(0,t.useRef)(e?.onHash);d.current=e?.onHash;let f=(0,t.useRef)(e?.hashSource);f.current=e?.hashSource;let p=(0,t.useRef)(""),h=(0,t.useRef)(""),g=(0,t.useRef)(Promise.resolve());return(0,t.useEffect)(()=>{if(!s)return;let e=u.current?i(u.current):"";e?(p.current=e,c.current=!0):p.current=i(n)},[]),{save:(0,t.useCallback)((e,t=!1,{updateLsq:i=!1,keepHash:o=!1}={})=>{let m=async()=>{let g;if(!t&&!(e.fullName.trim()||e.phone.trim()||e.email.trim()||Object.values(e.qualifiers).some(Boolean))||!t&&!i&&c.current)return{ok:!0};let m=JSON.stringify({input:e,updateLsq:i});return t||m!==h.current?((h.current=m,!p.current&&f.current&&(p.current=f.current()),p.current)?g=await (0,r.updateRcb)(p.current,e,t,i):(g=await (0,r.createRcb)(e,t,i)).ok&&g.hash&&(p.current=g.hash,d.current?.(g.hash),s&&a(n,g.hash)),g.ok||h.current!==m||(h.current=""),g.ok&&s&&(t||i)&&(l(n),u.current&&(o&&!t?a(u.current,p.current):l(u.current))),{ok:g.ok,error:g.error}):(i&&!o&&s&&(l(n),u.current&&l(u.current)),{ok:!0})},v=g.current.then(m,m);return g.current=v.catch(()=>{}),v},[s])}}],356105);var s=e.i(680395),o=e.i(58863);let u=/^[a-z ,.'-]+$/i,c=/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;e.s(["buildRcbInput",0,function(e){return{fullName:e.name,phone:e.phone,email:e.email,qualifiers:e.answers,whatsapp:e.whatsapp,from:e.from,parentUrl:e.parentUrl,nextUrl:e.nextUrl,utmParams:(0,o.getUtmParams)(),responseType:e.responseType,formVariant:e.formVariant,...e.extraLeadFields?{extraLeadFields:e.extraLeadFields}:{}}},"flattenRcbSteps",0,function(e){return e.flatMap(e=>e.questions)},"rcbContactErrorMessage",0,function(e,t){switch(e){case"name":return t.trim()?"Full Name can only contain alphabets":"Full Name is Required";case"phone":return t?"Invalid Phone Number":"Phone Number is Required";case"email":return t.trim()?"Enter a valid email address":"Email is Required"}},"rcbContactErrors",0,function({name:e,phone:t,email:r},{requireEmail:n}){return{name:0===e.trim().length||!u.test(e.trim()),phone:10!==t.replace(/\D/g,"").length,email:!!n&&!c.test(r.trim())}},"seedAnswers",0,function(e,t){if(!e)return{};let r={};for(let n of t){let t=e.qualifierAnswers[n.key];if(!t)continue;let i=n.items.find(e=>(0,s.normalizeQualifierValue)(e.value)===(0,s.normalizeQualifierValue)(t));i&&(r[n.key]=i.value)}return r}],527341)},409954,e=>{"use strict";var t=e.i(843476);e.i(914984),e.s(["ArrowDownIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M12 4v16m0 0-6-6m6 6 6-6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"CalendarIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("rect",{x:"3.5",y:"5",width:"17",height:"15",rx:"2",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]})},"CheckCircleIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"m8.5 12.4 2.5 2.5L16 9.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})},"ClockIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"8.25",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"M12 7.5V12l3 2",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})]})}])},544553,e=>{"use strict";var t=e.i(271645);e.i(704913);var r=e.i(927539),n=e.i(851361),i=e.i(688921);e.s(["ExperimentExposure",0,function({pageName:e}){let a=(0,n.useSendAnalyticsEvent)(),l=(0,t.useRef)(!1);return(0,t.useEffect)(()=>{if(!l.current)for(let{experimentId:t,variantId:n}of(l.current=!0,(0,r.getActiveCohorts)())){let r=(0,i.buildEventData)({experimentName:t,cohort:n},e);a({...i.EXPERIMENT_EVENTS.EXPOSURE,eventData:r}),(0,i.fireLivePageGtag)({eventType:i.EXPERIMENT_EVENTS.EXPOSURE.eventType,eventName:i.EXPERIMENT_EVENTS.EXPOSURE.eventName,extra:{experimentName:t,cohort:n},pageName:e})}},[a,e]),null}])},667585,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"BailoutToCSR",{enumerable:!0,get:function(){return i}});let n=e.r(132061);function i({reason:e,children:t}){if("u"<typeof window)throw Object.defineProperty(new n.BailoutToCSRError(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return t}},309885,(e,t,r)=>{"use strict";function n(e){return e.split("/").map(e=>encodeURIComponent(e)).join("/")}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"encodeURIPath",{enumerable:!0,get:function(){return n}})},652157,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"PreloadChunks",{enumerable:!0,get:function(){return o}});let n=e.r(843476),i=e.r(174080),a=e.r(563599),l=e.r(309885),s=e.r(543369);function o({moduleIds:e}){if("u">typeof window)return null;let t=a.workAsyncStorage.getStore();if(void 0===t)return null;let r=[];if(t.reactLoadableManifest&&e){let n=t.reactLoadableManifest;for(let t of e){if(!n[t])continue;let e=n[t].files;r.push(...e)}}if(0===r.length)return null;let u=(0,s.getAssetTokenQuery)();return(0,n.jsx)(n.Fragment,{children:r.map(e=>{let r=`${t.assetPrefix}/_next/${(0,l.encodeURIPath)(e)}${u}`;return e.endsWith(".css")?(0,n.jsx)("link",{precedence:"dynamic",href:r,rel:"stylesheet",as:"style",nonce:t.nonce},e):((0,i.preload)(r,{as:"script",fetchPriority:"low",nonce:t.nonce}),null)})})}},869093,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return u}});let n=e.r(843476),i=e.r(271645),a=e.r(667585),l=e.r(652157);function s(e){return{default:e&&"default"in e?e.default:e}}let o={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},u=function(e){let t={...o,...e},r=(0,i.lazy)(()=>t.loader().then(s)),u=t.loading;function c(e){let s=u?(0,n.jsx)(u,{isLoading:!0,pastDelay:!0,error:null}):null,o=!t.ssr||!!t.loading,c=o?i.Suspense:i.Fragment,d=t.ssr?(0,n.jsxs)(n.Fragment,{children:["u"<typeof window?(0,n.jsx)(l.PreloadChunks,{moduleIds:t.modules}):null,(0,n.jsx)(r,{...e})]}):(0,n.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(r,{...e})});return(0,n.jsx)(c,{...o?{fallback:s}:{},children:d})}return c.displayName="LoadableComponent",c}},770703,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return i}});let n=e.r(555682)._(e.r(869093));function i(e,t){let r={};"function"==typeof e&&(r.loader=e);let i={...r,...t};return(0,n.default)({...i,modules:i.loadableGenerated?.modules})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},92829,e=>{"use strict";var t=e.i(843476);let r=(0,e.i(770703).default)(()=>e.A(623645),{loadableGenerated:{modules:[257532]},ssr:!1,loading:()=>null});e.s(["SuccessCheckmark",0,function({size:e=132,label:n="Submitted successfully"}){let i=e/132;return(0,t.jsx)("div",{className:"relative overflow-hidden",style:{width:e,height:e},...n?{role:"img","aria-label":n}:{"aria-hidden":!0},children:(0,t.jsx)("div",{className:"absolute",style:{left:-30.8*i,top:-31.9*i,width:194.7*i,height:194.7*i},children:(0,t.jsx)(r,{})})})}])},603064,e=>{"use strict";var t=e.i(843476),r=e.i(92829);e.s(["SubmissionSuccess",0,function(){return(0,t.jsxs)("div",{className:"flex flex-col items-center overflow-clip rounded-2xl bg-white text-center",children:[(0,t.jsx)("div",{className:"flex w-full justify-center bg-[rgba(217,252,237,0.3)] py-4",children:(0,t.jsx)(r.SuccessCheckmark,{})}),(0,t.jsxs)("div",{className:"flex w-full flex-col items-center gap-1",children:[(0,t.jsx)("p",{className:"font-ds text-lg leading-7 font-semibold tracking-[0.06px] text-[#16191d]",children:"Your submission was successful!"}),(0,t.jsx)("p",{className:"font-ds text-base leading-[26px] font-medium tracking-[0.1px] text-[#5b6271]",children:"Our team will reach out to you shortly."})]})]})}])},211269,e=>{"use strict";e.s(["PORTAL_FONT_CLASS",0,"grauity-portal-font font-ds [font-feature-settings:'ss01','cv11']"])},295455,e=>{"use strict";var t=e.i(843476),r=e.i(271645),n=e.i(770703),i=e.i(397681),a=e.i(549838),l=e.i(211269);e.i(409954);var s=e.i(914984),o=e.i(692156),u=e.i(85842),c=e.i(527341),d=e.i(680395),f=e.i(851361),p=e.i(756903);let h=(0,n.default)(()=>e.A(490643).then(e=>e.RcbMultiStepForm),{ssr:!1});e.s(["RcbModalProvider",0,function({analytics:e,applyConfig:n,rcbHeading:g="Request a callback",successSlot:m=null,overlay:v=null,contentClassName:x,pageName:_,qualifiers:b,formVariant:w,rcbSteps:y,rcbFlowForCta:P,mapCta:A,multiStepForm:R,children:S}){let E=R??h,[j,C]=(0,r.useState)(null),[O,k]=(0,r.useState)(!1),[z,D]=(0,r.useState)(void 0),M=(0,r.useRef)(null),N=(0,f.useSendAnalyticsEvent)(),H=(0,r.useCallback)(t=>{let r=A?A(t):t;M.current=document.activeElement??null,k(!1);let n=e.eventForCta(r),i=e.buildEventData({from:r.from,heading:r.heading,mode:r.mode??"rcb"});n&&(N({...n,eventData:i}),e.fireLivePageGtag({eventName:n.eventName,from:r.from})),N({...e.modalOpenEvent,eventData:i}),D((r.mode??"rcb")==="signup"?void 0:(0,d.readUnlockProfile)()??void 0),C(r)},[e,N,A]),I=(0,r.useCallback)(()=>{C(t=>(t&&N({...e.modalCloseEvent,eventData:e.buildEventData({from:t.from,heading:t.heading})}),null)),D(void 0),M.current?.focus?.()},[e,N]),L=(0,r.useMemo)(()=>({open:H,isCtaModalOpen:null!==j,counsellingPopupOpen:O,setCounsellingPopupOpen:k}),[H,j,O]),B=y?(0,c.flattenRcbSteps)(y):b,$=!B||B.every(e=>{let t=z?.qualifierAnswers?.[e.key];return!!t&&e.items.some(e=>(0,d.normalizeQualifierValue)(e.value)===(0,d.normalizeQualifierValue)(t))}),G=null!==j&&"signup"!==j.mode,T=G&&j?P?.(j):void 0,U=G&&(!!y||!!T);return(0,t.jsxs)(p.RcbModalContext.Provider,{value:L,children:[S,(0,t.jsx)(i.NSModal,{isOpen:null!==j,onClose:I,hideOnClickAway:!0,showCloseButton:!1,width:U?"500px":"420px",mobileBottomFullWidth:U,className:U?"max-[600px]:[&_[role=dialog]]:left-0":void 0,border:"none",animatePresence:"fade",overflow:"hidden",modalPadding:j?.mode==="signup"?void 0:"0",children:j&&(0,t.jsxs)("div",{className:(0,a.cn)("relative",l.PORTAL_FONT_CLASS,x),style:{textAlign:"left"},children:[(0,t.jsx)("button",{type:"button",onClick:I,"aria-label":"Close",className:(0,a.cn)("text-ds-muted hover:bg-ds-surface absolute z-10 flex size-9 cursor-pointer items-center justify-center rounded-full","signup"===j.mode?"top-1 right-1":U?"top-1.5 right-[18px] min-[601px]:top-3.5 min-[601px]:right-[22px]":"top-2 right-2"),children:(0,t.jsx)(s.CloseIcon,{className:U?"size-5 min-[601px]:size-6":"size-5"})}),"signup"===j.mode&&n?(0,t.jsx)("div",{className:"max-h-[calc(95svh-40px)] overflow-x-hidden overflow-y-auto",children:(0,t.jsx)(o.ApplyForm,{title:j.heading??n.title,courseType:n.courseType,urlSlug:n.urlSlug,config:n.config,pageName:_,surface:"modal"})}):T?(0,t.jsx)(E,{from:j.from,heading:T.heading??j.heading??g,screens:T.screens,nextUrl:T.nextUrl??j.nextUrl,brochure:j.brochure,eventData:T.eventData,pageName:_,formVariant:T.formVariant??w,prefill:z,successSlot:m}):y&&U?(0,t.jsx)(E,{from:j.from,heading:j.heading??g,steps:y,nextUrl:j.nextUrl,brochure:j.brochure,pageName:_,formVariant:w,prefill:z,autoSubmit:!!z&&$,successSlot:m}):(0,t.jsx)(u.RcbForm,{from:j.from,heading:j.heading??g,nextUrl:j.nextUrl,brochure:j.brochure,pageName:_,qualifiers:b,formVariant:w,prefill:z,autoSubmit:!!z&&$,successSlot:m})]})}),v]})}])},214525,e=>{"use strict";e.s(["NUDGE_ATTR",0,"data-ds-nudge","NUDGE_END_ATTR",0,"data-ds-nudge-end","NUDGE_ROOT_ATTR",0,"data-ds-nudge-root","SEAT_COUNT",0,3,"formatRemaining",0,function(e){let t=Math.max(0,Math.floor(e/1e3)),r=e=>String(e).padStart(2,"0");return{hh:r(Math.floor(t/3600)),mm:r(Math.floor(t%3600/60)),ss:r(t%60)}},"readClockOffset",0,function(e){let t=new URLSearchParams(e).get("ds_nudge_now");if(!t)return 0;let r=Number(t)||Date.parse(t);return Number.isFinite(r)&&r>0?r-Date.now():0}])},511604,e=>{e.v(t=>Promise.all(["static/chunks/2-et_hho2aqvl.js"].map(t=>e.l(t))).then(()=>t(164436)))},896615,e=>{e.v(t=>Promise.all(["static/chunks/3klltxhcaam25.js"].map(t=>e.l(t))).then(()=>t(980954)))},401485,e=>{e.v(t=>Promise.all(["static/chunks/3363k0g8j073u.js","static/chunks/2n-gidy722xtj.js"].map(t=>e.l(t))).then(()=>t(873987)))},179909,e=>{e.v(t=>Promise.all(["static/chunks/41kj1t47-_n25.js"].map(t=>e.l(t))).then(()=>t(285692)))},628574,e=>{e.v(t=>Promise.all(["static/chunks/2qirsm4ul044n.js"].map(t=>e.l(t))).then(()=>t(218568)))},490258,e=>{e.v(t=>Promise.all(["static/chunks/2s87rp7nfrl4_.js"].map(t=>e.l(t))).then(()=>t(322465)))},15086,e=>{e.v(t=>Promise.all(["static/chunks/36smk6w2al07x.js"].map(t=>e.l(t))).then(()=>t(269275)))},134362,e=>{e.v(t=>Promise.all(["static/chunks/24_vd97z020im.js"].map(t=>e.l(t))).then(()=>t(57400)))},278533,e=>{e.v(t=>Promise.all(["static/chunks/2dsmc-m5l6-0x.js"].map(t=>e.l(t))).then(()=>t(906322)))},490643,e=>{e.v(t=>Promise.all(["static/chunks/1e2nb2a411u9q.js"].map(t=>e.l(t))).then(()=>t(787949)))},623645,e=>{e.v(t=>Promise.all(["static/chunks/18grolkayrg_h.js","static/chunks/02gzc6huqzhlf.js"].map(t=>e.l(t))).then(()=>t(257532)))}]);