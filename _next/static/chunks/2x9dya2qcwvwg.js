(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,818581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let i=e.r(271645);function n(e,t){let r=(0,i.useRef)(null),n=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=a(e,i)),t&&(n.current=a(t,i))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},898879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return s}});let i=e.r(271645),n="u"<typeof window,a=n?()=>{}:i.useLayoutEffect,l=n?()=>{}:i.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let e=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return n&&(t?.mountedInstances?.add(e.children),s()),a(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),a(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},325633,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return g},defaultHead:function(){return d}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let a=e.r(555682),l=e.r(190809),s=e.r(843476),o=l._(e.r(271645)),c=a._(e.r(898879)),u=e.r(742732);function d(){return[(0,s.jsx)("meta",{charSet:"utf-8"},"charset"),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(233525);let p=["name","httpEquiv","charSet","itemProp"];function h(e){let t,r,i,n;return e.reduce(f,[]).reverse().concat(d().reverse()).filter((t=new Set,r=new Set,i=new Set,n={},e=>{let a=!0,l=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){l=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?a=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?a=!1:r.add(e.type);break;case"meta":for(let t=0,r=p.length;t<r;t++){let r=p[t];if(e.props.hasOwnProperty(r))if("charSet"===r)i.has(r)?a=!1:i.add(r);else{let t=e.props[r],i=n[r]||new Set;("name"!==r||!l)&&i.has(t)?a=!1:(i.add(t),n[r]=i)}}}return a})).reverse().map((e,t)=>{let r=e.key||t;return o.default.cloneElement(e,{key:r})})}let g=function({children:e}){let t=(0,o.useContext)(u.HeadManagerContext);return(0,s.jsx)(c.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},488143,(e,t,r)=>{"use strict";function i({widthInt:e,heightInt:t,blurWidth:r,blurHeight:n,blurDataURL:a,objectFit:l}){let s=r?40*r:e,o=n?40*n:t,c=s&&o?`viewBox='0 0 ${s} ${o}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${a}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},987690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={VALID_LOADERS:function(){return a},imageConfigDefault:function(){return l}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let a=["default","imgix","cloudinary","akamai","custom"],l={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},908927,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return c}}),e.r(233525);let i=e.r(543369),n=e.r(488143),a=e.r(987690),l=["-moz-initial","fill","none","scale-down",void 0];function s(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function c({src:e,sizes:t,unoptimized:r=!1,priority:u=!1,preload:d=!1,loading:f,className:p,quality:h,width:g,height:m,fill:v=!1,style:x,overrideSrc:_,onLoad:w,onLoadingComplete:y,placeholder:b="empty",blurDataURL:P,fetchPriority:A,decoding:R="async",layout:j,objectFit:S,objectPosition:C,lazyBoundary:E,lazyRoot:z,...k},O){var D;let B,H,I,{imgConf:$,showAltText:M,blurComplete:L,defaultLoader:N}=O,G=$||a.imageConfigDefault;if("allSizes"in G)B=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t),r=G.qualities?.sort((e,t)=>e-t);B={...G,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===N)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let T=k.loader||N;delete k.loader,delete k.srcSet;let U="__next_img_default"in T;if(U){if("custom"===B.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=T;T=t=>{let{config:r,...i}=t;return e(i)}}if(j){"fill"===j&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[j];e&&(x={...x,...e});let r={responsive:"100vw",fill:"100vw"}[j];r&&!t&&(t=r)}let W="",F=o(g),q=o(m);if((D=e)&&"object"==typeof D&&(s(D)||void 0!==D.src)){let t=s(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(H=t.blurWidth,I=t.blurHeight,P=P||t.blurDataURL,W=t.src,!v)if(F||q){if(F&&!q){let e=F/t.width;q=Math.round(t.height*e)}else if(!F&&q){let e=q/t.height;F=Math.round(t.width*e)}}else F=t.width,q=t.height}let V=!u&&!d&&("lazy"===f||void 0===f);(!(e="string"==typeof e?e:W)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,V=!1),B.unoptimized&&(r=!0),U&&!B.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let Y=o(h),X=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:S,objectPosition:C}:{},M?{}:{color:"transparent"},x),K=L||"empty"===b?null:"blur"===b?`url("data:image/svg+xml;charset=utf-8,${(0,n.getImageBlurSvg)({widthInt:F,heightInt:q,blurWidth:H,blurHeight:I,blurDataURL:P||"",objectFit:X.objectFit})}")`:`url("${b}")`,Q=l.includes(X.objectFit)?"fill"===X.objectFit?"100% 100%":"cover":X.objectFit,J=K?{backgroundSize:Q,backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:K}:{},Z=function({config:e,src:t,unoptimized:r,width:n,quality:a,sizes:l,loader:s}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,i.getDeploymentId)();if(e){let r=t.indexOf("?");if(-1!==r){let i=new URLSearchParams(t.slice(r+1));i.get("dpl")||(i.append("dpl",e),t=t.slice(0,r)+"?"+i.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:o,kind:c}=function({deviceSizes:e,allSizes:t},r,i){if(i){let r=/(^|\s)(1?\d?\d)vw/g,n=[];for(let e;e=r.exec(i);)n.push(parseInt(e[2]));if(n.length){let r=.01*Math.min(...n);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,n,l),u=o.length-1;return{sizes:l||"w"!==c?l:"100vw",srcSet:o.map((r,i)=>`${s({config:e,src:t,quality:a,width:r})} ${"w"===c?r:i+1}${c}`).join(", "),src:s({config:e,src:t,quality:a,width:o[u]})}}({config:B,src:e,unoptimized:r,width:F,quality:Y,sizes:t,loader:T}),ee=V?"lazy":f;return{props:{...k,loading:ee,fetchPriority:A,width:F,height:q,decoding:R,className:p,style:{...X,...J},sizes:Z.sizes,srcSet:Z.srcSet,src:_||Z.src},meta:{unoptimized:r,preload:d||u,placeholder:b,fill:v}}}},918556,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return a}});let i=e.r(555682)._(e.r(271645)),n=e.r(987690),a=i.default.createContext(n.imageConfigDefault)},65856,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return i}});let i=e.r(555682)._(e.r(271645)).default.createContext(null)},670965,(e,t,r)=>{"use strict";function i(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return i}})},1948,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return l}});let i=e.r(670965),n=e.r(543369);function a({config:e,src:t,width:r,quality:l}){let s=(0,n.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),i=r.get("dpl");if(i){s=i,r.delete("dpl");let n=r.toString();t=t.slice(0,e)+(n?"?"+n:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let o=(0,i.findClosestQuality)(l,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${o}${t.startsWith("/")&&s?`&dpl=${s}`:""}`}a.__next_img_default=!0;let l=a},605500,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return w}});let i=e.r(555682),n=e.r(190809),a=e.r(843476),l=n._(e.r(271645)),s=i._(e.r(174080)),o=i._(e.r(325633)),c=e.r(908927),u=e.r(987690),d=e.r(918556);e.r(233525);let f=e.r(65856),p=i._(e.r(1948)),h=e.r(818581),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/nst-website-2027/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,r,i,n,a,l){let s=e?.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}i?.current&&i.current(e)}}))}function v(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let x=(0,l.forwardRef)(({src:e,srcSet:t,sizes:r,height:i,width:n,decoding:s,className:o,style:c,fetchPriority:u,placeholder:d,loading:f,unoptimized:p,fill:g,onLoadRef:x,onLoadingCompleteRef:_,setBlurComplete:w,setShowAltText:y,sizesInput:b,onLoad:P,onError:A,...R},j)=>{let S=(0,l.useCallback)(e=>{e&&(A&&(e.src=e.src),e.complete&&m(e,d,x,_,w,p,b))},[e,d,x,_,w,A,p,b]),C=(0,h.useMergedRef)(j,S);return(0,a.jsx)("img",{...R,...v(u),loading:f,width:n,height:i,decoding:s,"data-nimg":g?"fill":"1",className:o,style:c,sizes:r,srcSet:t,src:e,ref:C,onLoad:e=>{m(e.currentTarget,d,x,_,w,p,b)},onError:e=>{y(!0),"empty"!==d&&w(!0),A&&A(e)}})});function _({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...v(t.fetchPriority)};return e&&s.default.preload?(s.default.preload(t.src,r),null):(0,a.jsx)(o.default,{children:(0,a.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let w=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(f.RouterContext),i=(0,l.useContext)(d.ImageConfigContext),n=(0,l.useMemo)(()=>{let e=g||i||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),n=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:n,localPatterns:"u"<typeof window?i?.localPatterns:e.localPatterns}},[i]),{onLoad:s,onLoadingComplete:o}=e,h=(0,l.useRef)(s);(0,l.useEffect)(()=>{h.current=s},[s]);let m=(0,l.useRef)(o);(0,l.useEffect)(()=>{m.current=o},[o]);let[v,w]=(0,l.useState)(!1),[y,b]=(0,l.useState)(!1),{props:P,meta:A}=(0,c.getImgProps)(e,{defaultLoader:p.default,imgConf:n,blurComplete:v,showAltText:y});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x,{...P,unoptimized:A.unoptimized,placeholder:A.placeholder,fill:A.fill,onLoadRef:h,onLoadingCompleteRef:m,setBlurComplete:w,setShowAltText:b,sizesInput:e.sizes,ref:t}),A.preload?(0,a.jsx)(_,{isAppRouter:!r,imgAttributes:P}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},794909,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return u},getImageProps:function(){return c}};for(var n in i)Object.defineProperty(r,n,{enumerable:!0,get:i[n]});let a=e.r(555682),l=e.r(908927),s=e.r(605500),o=a._(e.r(1948));function c(e){let{props:t}=(0,l.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/nst-website-2027/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let u=s.Image},657688,(e,t,r)=>{t.exports=e.r(794909)},756903,e=>{"use strict";var t=e.i(843476),r=e.i(271645),i=e.i(339415),n=e.i(549838);let a=(0,r.createContext)(null);function l(){let e=(0,r.useContext)(a);if(!e)throw Error("useRcbModal must be used within a modal provider");return e}let s={brand:{variant:"primary",color:"brand"},success:{variant:"primary",color:"success"},neutral:{variant:"primary",color:"neutral"},dark:{variant:"primary",color:"neutral"},outline:{variant:"secondary",color:"brand"}};e.s(["ModalCtaButton",0,function({cta:e,color:r="brand",size:a="large",fullWidth:o,className:c,leadingIcon:u,trailingIcon:d,ariaLabel:f}){let{open:p}=l(),{variant:h,color:g}=s[r],m="large"===a;return(0,t.jsxs)(i.default,{variant:h,color:g,size:a,onClick:()=>p(e),"data-from":e.from,"aria-label":f,style:{"--font-size":m?"16px":"14px","--line-height":m?"26px":"20px","--font-weight-semibold":"600"},className:(0,n.cn)(o&&"w-full! md:w-auto!",m?"h-14! px-5!":"h-10! px-4! md:h-12! md:px-5!",c),children:[u,e.label,d]})},"RcbModalContext",0,a,"useRcbModal",0,l])},703109,968081,e=>{"use strict";var t=e.i(997053),r=e.i(271645),i={DISPLAY_BD_D1:"display-bd-d1",DISPLAY_BD_D2:"display-bd-d2",DISPLAY_BD_D3:"display-bd-d3",HEADING_SB_H1:"heading-sb-h1",HEADING_SB_H2:"heading-sb-h2",HEADING_SB_H3:"heading-sb-h3",HEADING_SB_H4:"heading-sb-h4",HEADING_SB_H5:"heading-sb-h5",HEADING_SB_H6:"heading-sb-h6",PARAGRAPH_SB_P1:"paragraph-sb-p1",PARAGRAPH_SB_P2:"paragraph-sb-p2",PARAGRAPH_SB_P3:"paragraph-sb-p3",PARAGRAPH_SB_P4:"paragraph-sb-p4",PARAGRAPH_SB_L1:"paragraph-sb-l1",PARAGRAPH_SB_L2:"paragraph-sb-l2",PARAGRAPH_MD_P1:"paragraph-md-p1",PARAGRAPH_MD_P2:"paragraph-md-p2",PARAGRAPH_MD_P3:"paragraph-md-p3",PARAGRAPH_MD_P4:"paragraph-md-p4",PARAGRAPH_MD_C1:"paragraph-md-c1",PARAGRAPH_MD_L1:"paragraph-md-l1",PARAGRAPH_MD_L2:"paragraph-md-l2",OVERLINE_SB_OL1:"overline-sb-ol1",OVERLINE_SB_OL2:"overline-sb-ol2",ACTION_SB_P1:"action-sb-p1",ACTION_SB_P2:"action-sb-p2",ACTION_SB_LK1:"action-sb-lk1"};Object.freeze(Object.values(i));var n={H1:"h1",H2:"h2",H3:"h3",H4:"h4",H5:"h5",H6:"h6",P:"p",SPAN:"span",DIV:"div",LABEL:"label",CAPTION:"caption",CODE:"code",AUTO:"auto"};Object.freeze(Object.values(n));var a={[i.DISPLAY_BD_D1]:t.css`
        font-size: var(--font-size-fs-120, 76px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-140, 92px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[i.DISPLAY_BD_D2]:t.css`
        font-size: var(--font-size-fs-110, 64px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-130, 76px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[i.DISPLAY_BD_D3]:t.css`
        font-size: var(--font-size-fs-100, 52px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-120, 64px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[i.HEADING_SB_H1]:t.css`
        font-size: var(--font-size-fs-90, 40px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-110, 48px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[i.HEADING_SB_H2]:t.css`
        font-size: var(--font-size-fs-80, 36px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-100, 42px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[i.HEADING_SB_H3]:t.css`
        font-size: var(--font-size-fs-70, 28px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-90, 32px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[i.HEADING_SB_H4]:t.css`
        font-size: var(--font-size-fs-60, 24px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[i.HEADING_SB_H5]:t.css`
        font-size: var(--font-size-fs-50, 20px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-60, 24px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[i.HEADING_SB_H6]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-40, 20px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[i.PARAGRAPH_SB_P1]:t.css`
        font-size: var(--font-size-fs-40, 18px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[i.PARAGRAPH_SB_P2]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[i.PARAGRAPH_SB_P3]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-10, 0.016px);
    `,[i.PARAGRAPH_SB_P4]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-30, 18px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[i.PARAGRAPH_SB_L1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,[i.PARAGRAPH_SB_L2]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-10, 14px);
        letter-spacing: var(--letter-spacing-ls-40, 0.25px);
    `,[i.PARAGRAPH_MD_P1]:t.css`
        font-size: var(--font-size-fs-40, 18px);
        font-weight: var(--font-weight-fw-10, 500);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[i.PARAGRAPH_MD_P2]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[i.PARAGRAPH_MD_P3]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[i.PARAGRAPH_MD_P4]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-30, 18px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[i.PARAGRAPH_MD_C1]:t.css`
        font-family: 'Fira Code';
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-00, 450);
        line-height: var(--line-height-lh-40, 20px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[i.PARAGRAPH_MD_L1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-60, 0.5px);
    `,[i.PARAGRAPH_MD_L2]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-10, 14px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,[i.OVERLINE_SB_OL1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-70, 1.6px);
        text-transform: uppercase;
    `,[i.OVERLINE_SB_OL2]:t.css`
        font-size: var(--font-size-fs-00, 11px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-00, 12px);
        letter-spacing: var(--letter-spacing-ls-80, 2px);
        text-transform: uppercase;
    `,[i.ACTION_SB_P1]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[i.ACTION_SB_P2]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,[i.ACTION_SB_LK1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-80, 2px);
        text-transform: uppercase;
    `},l={[i.DISPLAY_BD_D1]:n.H1,[i.DISPLAY_BD_D2]:n.H2,[i.DISPLAY_BD_D3]:n.H3,[i.HEADING_SB_H1]:n.H1,[i.HEADING_SB_H2]:n.H2,[i.HEADING_SB_H3]:n.H3,[i.HEADING_SB_H4]:n.H4,[i.HEADING_SB_H5]:n.H5,[i.HEADING_SB_H6]:n.H6,[i.PARAGRAPH_SB_P1]:n.P,[i.PARAGRAPH_SB_P2]:n.P,[i.PARAGRAPH_SB_P3]:n.P,[i.PARAGRAPH_SB_P4]:n.P,[i.PARAGRAPH_SB_L1]:n.LABEL,[i.PARAGRAPH_SB_L2]:n.LABEL,[i.PARAGRAPH_MD_P1]:n.P,[i.PARAGRAPH_MD_P2]:n.P,[i.PARAGRAPH_MD_P3]:n.P,[i.PARAGRAPH_MD_P4]:n.P,[i.PARAGRAPH_MD_C1]:n.CODE,[i.PARAGRAPH_MD_L1]:n.LABEL,[i.PARAGRAPH_MD_L2]:n.LABEL,[i.OVERLINE_SB_OL1]:n.P,[i.OVERLINE_SB_OL2]:n.P,[i.ACTION_SB_P1]:n.SPAN,[i.ACTION_SB_P2]:n.SPAN,[i.ACTION_SB_LK1]:n.SPAN},s=t.styled.p.attrs(e=>({as:e.as||"p"}))`
    margin: 0;
    padding: 0;

    font-family: var(--font-family, 'Mona Sans');
    color: var(--text-emphasis-primary-default, #16191d);

    ${({$variant:e})=>t.css`
            ${e?a[e]:a[i.PARAGRAPH_MD_P1]}
        `};

    ${({$textAlign:e})=>e&&`text-align: ${e};`}
    ${({$textTransform:e})=>e&&`text-transform: ${e};`}
    ${({$fontSize:e})=>e&&`font-size: ${e};`}
    ${({$color:e})=>e&&`color: ${e};`};
`,o=({variant:e="paragraph-md-p1",as:t="auto",color:i="var(--text-emphasis-primary-default, #16191d)",textAlign:a=null,textTransform:o=null,fontSize:c=null,children:u="",className:d="",title:f=null})=>{let p=t===n.AUTO?l[e]:t;return r.default.createElement(s,{$variant:e,as:p,$color:i,$textAlign:a,$textTransform:o,$fontSize:c,className:d,title:f},u)};e.s(["Typography_default",0,o],968081),e.s(["default",0,o],703109)},830249,e=>{"use strict";var t=e.i(271645);e.s(["useParentUrl",0,function(){let[e,r]=(0,t.useState)("");return(0,t.useEffect)(()=>{function e(e){let t=e.data;t&&"object"==typeof t&&"PARENT_URL"===t.type&&"string"==typeof t.url&&r(t.url)}return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]),e}])},397681,e=>{"use strict";var t=e.i(893347),r=e.i(773892),i=e.i(364072),n=e.i(189101),a=e.i(824511),l=e.i(88653),s=e.i(271645),o=e.i(997053),c=(0,o.styled)(a.m.div)`
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
`,u=o.styled.div`
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
`,v={slide:{variants:{hidden:{opacity:0,y:-50},visible:{opacity:1,y:0},exit:{opacity:0,y:50}},transition:{duration:.3}},"slide-reverse":{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0},exit:{opacity:0,y:-50}},transition:{duration:.3}},fade:{variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},transition:{duration:.3}},emanate:{}},x=(0,s.forwardRef)(({width:e,height:t,minHeight:r,minWidth:i,maxHeight:n,maxWidth:a,mobileBottomFullWidth:l,modalPadding:o,border:u,children:d,...f},p)=>s.default.createElement(c,{ref:p,$width:e,$height:t,$minHeight:r,$minWidth:i,$maxHeight:n,$maxWidth:a,$mobileBottomFullWidth:l,$modalPadding:o,$border:u,...f},d)),_=(0,s.forwardRef)(({justifyContent:e,children:t},r)=>s.default.createElement(g,{ref:r,$justifyContent:e},t)),w=(0,s.forwardRef)(({overflow:e,children:t,...r},i)=>s.default.createElement(u,{ref:i,$overflow:e,...r},t)),y=(0,s.forwardRef)(({children:e,...t},r)=>s.default.createElement(m,{ref:r,...t},e)),b=(0,s.forwardRef)(({children:e,...t},r)=>s.default.createElement(f,{ref:r,...t},e)),P=(0,s.forwardRef)(({children:e,...t},r)=>s.default.createElement(p,{ref:r,...t},e)),A=(0,s.forwardRef)(({modalBodyMargin:e,children:t,...r},i)=>s.default.createElement(h,{ref:i,$modalBodyMargin:e,...r},t)),R=(0,s.forwardRef)(({...e},t)=>s.default.createElement(d,{ref:t,...e})),j=(0,s.forwardRef)((e,a)=>{let{isOpen:o=!0,banner:d=null,title:x=null,description:_=null,body:w=null,action:y=null,height:b="auto",width:P="500px",minHeight:A=null,minWidth:R=null,maxHeight:j="95vh",maxWidth:S="95vw",onHide:C=()=>{},onClose:E=()=>{},mobileBottomFullWidth:z=!1,modalPadding:k="20px",border:O="1px solid var(--border-subtle-primary-default, #e1e5ea)",modalBodyMargin:D=null,showCloseButton:B=!1,hideOnClickAway:H=!1,blurBackground:I=!1,animatePresence:$="fade",clickEvent:M=null,children:L=null,shouldFocusOnFirstElement:N=!0,shouldDisableScroll:G=!0,overflow:T="visible",className:U}=e,W=(0,s.useRef)(null),F=()=>{"function"==typeof C&&C(),"function"==typeof E&&E()};(0,s.useImperativeHandle)(a,()=>W.current),(0,r.useDisableBodyScroll_default)(o),(0,r.useKeyboardEvent_default)({onKeyPress:()=>{H&&F()},keyCodes:["Escape"],config:{shouldDetect:o}});let q=(0,s.useId)(),V=(0,s.useMemo)(()=>{var e,t;return e=$,t=M,"emanate"===e?"number"==typeof(null==t?void 0:t.clientX)&&"number"==typeof(null==t?void 0:t.clientY)?((e,t)=>{let r,i;try{r=e-window.innerWidth/2,i=t-window.innerHeight/2}catch(e){r=0,i=0}return{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{scale:0,opacity:0,x:r,y:i},visible:{scale:1,opacity:1,x:0,y:0},exit:{scale:0,opacity:0,x:r,y:i}},transition:{duration:.3}}})(t.clientX,t.clientY):{}:{initial:"hidden",animate:"visible",exit:"exit",...e?v[e]:{}}},[$,M]),Y=(0,s.useMemo)(()=>(({isOpen:e,animatePresence:t,clickEvent:r})=>!!e&&("emanate"!==t||"number"==typeof(null==r?void 0:r.clientX)&&"number"==typeof(null==r?void 0:r.clientY)))({isOpen:o,animatePresence:$,clickEvent:M}),[o,$,M]);return s.default.createElement(i.motion_default,null,s.default.createElement(l.AnimatePresence,null,Y&&s.default.createElement(t.Overlay_default,{shouldDisableScroll:G,onOverlayClick:()=>{H&&F()},shouldTintOverlay:!0,shouldBlurOverlay:I,shouldCenterContent:!0,"data-testid":"testid-modalwrapper",className:U,animationDuration:.3,shouldFocusOnFirstElement:N},s.default.createElement(c,{onClick:e=>e.stopPropagation(),ref:W,$width:P,$height:b,$minHeight:A,$minWidth:R,$maxHeight:j,$maxWidth:S,$mobileBottomFullWidth:z,$modalPadding:k,$border:O,"aria-labelledby":`modal-title-${q}`,"aria-describedby":`modal-description-${q}`,"aria-modal":"true",role:"dialog","data-testid":"testid-modal",...V},s.default.createElement(u,{$overflow:T},B&&s.default.createElement(g,{$justifyContent:"end"},s.default.createElement(n.IconButton_default,{onClick:F,size:"small",variant:"tertiary",color:"neutral",icon:"close",ariaLabel:"Close",buttonProps:{autoFocus:!0}})),d&&s.default.createElement(m,null,d),x&&s.default.createElement(f,{id:`modal-title-${q}`},x),_&&s.default.createElement(p,{id:`modal-description-${q}`},_),w&&s.default.createElement(h,{$modalBodyMargin:D},w),L&&s.default.createElement(h,{$modalBodyMargin:D},L)),y&&s.default.createElement(g,null,y)))))});j.Modal=x,j.Main=w,j.Banner=y,j.Title=b,j.Description=P,j.Body=A,j.Action=_,j.Divider=R,e.s(["NSModal",0,j],397681)},914984,e=>{"use strict";var t=e.i(843476);e.s(["ArrowRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M5 12h14m0 0-6-6m6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronLeftIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m15 6-6 6 6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m9 6 6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"CloseIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M6 6l12 12M18 6 6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"RadioUncheckedIcon",0,function({className:e}){return(0,t.jsx)("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":!0,focusable:"false",className:e,children:(0,t.jsx)("path",{d:"M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 14.6 5.4 18.3333 10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667ZM10 16.6667C6.31667 16.6667 3.33333 13.6833 3.33333 10C3.33333 6.31667 6.31667 3.33333 10 3.33333C13.6833 3.33333 16.6667 6.31667 16.6667 10C16.6667 13.6833 13.6833 16.6667 10 16.6667Z",fill:"currentColor"})})},"SparkIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M12 2c.45 4.2 2.3 6.05 6.5 6.5-4.2.45-6.05 2.3-6.5 6.5-.45-4.2-2.3-6.05-6.5-6.5C9.7 8.05 11.55 6.2 12 2z"})})},"YouTubePlayIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 68 48",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("path",{d:"M66.5 7.5a8.5 8.5 0 0 0-6-6C55.2 0 34 0 34 0S12.8 0 7.5 1.5a8.5 8.5 0 0 0-6 6A89 89 0 0 0 0 24a89 89 0 0 0 1.5 16.5 8.5 8.5 0 0 0 6 6C12.8 48 34 48 34 48s21.2 0 26.5-1.5a8.5 8.5 0 0 0 6-6A89 89 0 0 0 68 24a89 89 0 0 0-1.5-16.5z",fill:"#FF0000"}),(0,t.jsx)("path",{d:"M27.2 34.29 44.85 24 27.2 13.71v20.58z",fill:"#fff"})]})}])},680395,e=>{"use strict";let t="ns_rcb_unlock_v2";function r(){let e=function(e,t){try{let r=e().getItem(t);if(!r)return null;return JSON.parse(r)}catch{return null}}(()=>window.sessionStorage,t);if(!e||1!==e.v||!e.profile)return null;let r=e.profile;return"string"==typeof r.fullName&&"string"==typeof r.phone&&r.fullName.trim()&&10===r.phone.replace(/\D/g,"").length?{fullName:r.fullName,phone:r.phone,email:"string"==typeof r.email?r.email:"",whatsapp:!!r.whatsapp,qualifierAnswers:r.qualifierAnswers&&"object"==typeof r.qualifierAnswers?r.qualifierAnswers:{},savedAt:"number"==typeof r.savedAt?r.savedAt:0}:null}e.s(["DEFAULT_RCB_QUALIFIER_KEYS",0,["highest_qualification","graduation_year"],"isLeadUnlocked",0,function(){return null!==r()},"mergeUnlockProfile",0,function(e){let i=r();!function(e,t,r){try{e().setItem(t,JSON.stringify(r))}catch{return!1}}(()=>window.sessionStorage,t,{v:1,profile:{fullName:e.fullName,phone:e.phone,email:e.email,whatsapp:e.whatsapp,qualifierAnswers:{...i?.qualifierAnswers,...e.qualifierAnswers},savedAt:Date.now()}})},"normalizeQualifierValue",0,function(e){return e.replace(/[\u200B\u200C\u200D\u2060\uFEFF]/g,"").trim()},"readUnlockProfile",0,r])},356105,527341,e=>{"use strict";var t=e.i(271645),r=e.i(336835);let i="multi_step_rcb_form_partial_fill_hash";function n(e){try{return window.localStorage.getItem(e)??""}catch{return""}}function a(e,t){try{window.localStorage.setItem(e,t)}catch{}}function l(e){try{window.localStorage.removeItem(e)}catch{}}e.s(["usePartialRcb",0,function(e){let s=e?.resumeStoredHash??!0,o=e?.filedScope?"multi_step_rcb_form_filed_hash:"+e.filedScope:"",c=(0,t.useRef)(o);c.current=o;let u=(0,t.useRef)(!1),d=(0,t.useRef)(e?.onHash);d.current=e?.onHash;let f=(0,t.useRef)(e?.hashSource);f.current=e?.hashSource;let p=(0,t.useRef)(""),h=(0,t.useRef)(""),g=(0,t.useRef)(Promise.resolve());return(0,t.useEffect)(()=>{if(!s)return;let e=c.current?n(c.current):"";e?(p.current=e,u.current=!0):p.current=n(i)},[]),{save:(0,t.useCallback)((e,t=!1,{updateLsq:n=!1,keepHash:o=!1}={})=>{let m=async()=>{let g;if(!t&&!(e.fullName.trim()||e.phone.trim()||e.email.trim()||Object.values(e.qualifiers).some(Boolean))||!t&&!n&&u.current)return{ok:!0};let m=JSON.stringify({input:e,updateLsq:n});return t||m!==h.current?((h.current=m,!p.current&&f.current&&(p.current=f.current()),p.current)?g=await (0,r.updateRcb)(p.current,e,t,n):(g=await (0,r.createRcb)(e,t,n)).ok&&g.hash&&(p.current=g.hash,d.current?.(g.hash),s&&a(i,g.hash)),g.ok||h.current!==m||(h.current=""),g.ok&&s&&(t||n)&&(l(i),c.current&&(o&&!t?a(c.current,p.current):l(c.current))),{ok:g.ok,error:g.error}):(n&&!o&&s&&(l(i),c.current&&l(c.current)),{ok:!0})},v=g.current.then(m,m);return g.current=v.catch(()=>{}),v},[s])}}],356105);var s=e.i(680395),o=e.i(58863);let c=/^[a-z ,.'-]+$/i,u=/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;e.s(["buildRcbInput",0,function(e){return{fullName:e.name,phone:e.phone,email:e.email,qualifiers:e.answers,whatsapp:e.whatsapp,from:e.from,parentUrl:e.parentUrl,nextUrl:e.nextUrl,utmParams:(0,o.getUtmParams)(),responseType:e.responseType,formVariant:e.formVariant,...e.extraLeadFields?{extraLeadFields:e.extraLeadFields}:{}}},"flattenRcbSteps",0,function(e){return e.flatMap(e=>e.questions)},"rcbContactErrorMessage",0,function(e,t){switch(e){case"name":return t.trim()?"Full Name can only contain alphabets":"Full Name is Required";case"phone":return t?"Invalid Phone Number":"Phone Number is Required";case"email":return t.trim()?"Enter a valid email address":"Email is Required"}},"rcbContactErrors",0,function({name:e,phone:t,email:r},{requireEmail:i}){return{name:0===e.trim().length||!c.test(e.trim()),phone:10!==t.replace(/\D/g,"").length,email:!!i&&!u.test(r.trim())}},"seedAnswers",0,function(e,t){if(!e)return{};let r={};for(let i of t){let t=e.qualifierAnswers[i.key];if(!t)continue;let n=i.items.find(e=>(0,s.normalizeQualifierValue)(e.value)===(0,s.normalizeQualifierValue)(t));n&&(r[i.key]=n.value)}return r}],527341)},409954,e=>{"use strict";var t=e.i(843476);e.i(914984),e.s(["ArrowDownIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M12 4v16m0 0-6-6m6 6 6-6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"CalendarIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("rect",{x:"3.5",y:"5",width:"17",height:"15",rx:"2",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]})},"CheckCircleIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"m8.5 12.4 2.5 2.5L16 9.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})},"ClockIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"8.25",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"M12 7.5V12l3 2",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})]})}])},961523,e=>{"use strict";e.i(409954),e.s([])},667585,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let i=e.r(132061);function n({reason:e,children:t}){if("u"<typeof window)throw Object.defineProperty(new i.BailoutToCSRError(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return t}},309885,(e,t,r)=>{"use strict";function i(e){return e.split("/").map(e=>encodeURIComponent(e)).join("/")}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"encodeURIPath",{enumerable:!0,get:function(){return i}})},652157,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"PreloadChunks",{enumerable:!0,get:function(){return o}});let i=e.r(843476),n=e.r(174080),a=e.r(563599),l=e.r(309885),s=e.r(543369);function o({moduleIds:e}){if("u">typeof window)return null;let t=a.workAsyncStorage.getStore();if(void 0===t)return null;let r=[];if(t.reactLoadableManifest&&e){let i=t.reactLoadableManifest;for(let t of e){if(!i[t])continue;let e=i[t].files;r.push(...e)}}if(0===r.length)return null;let c=(0,s.getAssetTokenQuery)();return(0,i.jsx)(i.Fragment,{children:r.map(e=>{let r=`${t.assetPrefix}/_next/${(0,l.encodeURIPath)(e)}${c}`;return e.endsWith(".css")?(0,i.jsx)("link",{precedence:"dynamic",href:r,rel:"stylesheet",as:"style",nonce:t.nonce},e):((0,n.preload)(r,{as:"script",fetchPriority:"low",nonce:t.nonce}),null)})})}},869093,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return c}});let i=e.r(843476),n=e.r(271645),a=e.r(667585),l=e.r(652157);function s(e){return{default:e&&"default"in e?e.default:e}}let o={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},c=function(e){let t={...o,...e},r=(0,n.lazy)(()=>t.loader().then(s)),c=t.loading;function u(e){let s=c?(0,i.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,o=!t.ssr||!!t.loading,u=o?n.Suspense:n.Fragment,d=t.ssr?(0,i.jsxs)(i.Fragment,{children:["u"<typeof window?(0,i.jsx)(l.PreloadChunks,{moduleIds:t.modules}):null,(0,i.jsx)(r,{...e})]}):(0,i.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,i.jsx)(r,{...e})});return(0,i.jsx)(u,{...o?{fallback:s}:{},children:d})}return u.displayName="LoadableComponent",u}},770703,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n}});let i=e.r(555682)._(e.r(869093));function n(e,t){let r={};"function"==typeof e&&(r.loader=e);let n={...r,...t};return(0,i.default)({...n,modules:n.loadableGenerated?.modules})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},92829,e=>{"use strict";var t=e.i(843476);let r=(0,e.i(770703).default)(()=>e.A(623645),{loadableGenerated:{modules:[257532]},ssr:!1,loading:()=>null});e.s(["SuccessCheckmark",0,function({size:e=132,label:i="Submitted successfully"}){let n=e/132;return(0,t.jsx)("div",{className:"relative overflow-hidden",style:{width:e,height:e},...i?{role:"img","aria-label":i}:{"aria-hidden":!0},children:(0,t.jsx)("div",{className:"absolute",style:{left:-30.8*n,top:-31.9*n,width:194.7*n,height:194.7*n},children:(0,t.jsx)(r,{})})})}])},603064,e=>{"use strict";var t=e.i(843476),r=e.i(92829);e.s(["SubmissionSuccess",0,function(){return(0,t.jsxs)("div",{className:"flex flex-col items-center overflow-clip rounded-2xl bg-white text-center",children:[(0,t.jsx)("div",{className:"flex w-full justify-center bg-[rgba(217,252,237,0.3)] py-4",children:(0,t.jsx)(r.SuccessCheckmark,{})}),(0,t.jsxs)("div",{className:"flex w-full flex-col items-center gap-1",children:[(0,t.jsx)("p",{className:"font-ds text-lg leading-7 font-semibold tracking-[0.06px] text-[#16191d]",children:"Your submission was successful!"}),(0,t.jsx)("p",{className:"font-ds text-base leading-[26px] font-medium tracking-[0.1px] text-[#5b6271]",children:"Our team will reach out to you shortly."})]})]})}])},53461,e=>{"use strict";var t=e.i(271645);e.s(["useIsMobile",0,function(e=600){let[r,i]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let t=window.matchMedia(`(max-width: ${e}px)`),r=()=>i(t.matches);return r(),t.addEventListener("change",r),()=>t.removeEventListener("change",r)},[e]),r}])},571266,e=>{"use strict";var t=e.i(843476),r=e.i(549838);e.s(["DsContainer",0,function({as:e="div",className:i,children:n}){return(0,t.jsx)(e,{className:(0,r.cn)("mx-auto w-full max-w-[1200px] px-4",i),children:n})}])},239859,e=>{"use strict";e.i(571266),e.s([])},92764,e=>{"use strict";var t=e.i(843476),r=e.i(549838);e.s(["FloatingWhatsAppCta",0,function({href:e,className:i,icon:n,children:a,id:l,ariaLabel:s,onClick:o}){return(0,t.jsxs)("a",{id:l,href:e,target:"_blank",rel:"noopener noreferrer",onClick:o,"aria-label":s,className:(0,r.cn)("fixed flex items-center gap-2.5 bg-[#009965] p-3.5 text-white transition-transform hover:scale-[1.02]",i),children:[n,a]})},"WhatsAppGlyph",0,function({className:e}){return(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"#009965","aria-hidden":"true",className:e,children:(0,t.jsx)("path",{d:"M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91A9.86 9.86 0 0 0 12.04 2zm5.8 14.16c-.25.69-1.43 1.32-1.97 1.4-.5.08-1.14.11-1.84-.12-.42-.13-.97-.31-1.67-.61-2.94-1.27-4.86-4.23-5.01-4.42-.15-.2-1.2-1.59-1.2-3.03 0-1.44.76-2.15 1.03-2.44.27-.3.59-.37.79-.37l.57.01c.18.01.43-.07.67.51.25.6.85 2.07.93 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.18-.31.39-.45.53-.15.15-.3.31-.13.6.18.3.79 1.3 1.69 2.1 1.17 1.04 2.15 1.36 2.45 1.51.3.15.48.13.65-.08.18-.2.76-.88.96-1.19.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.5.22.57.34.07.13.07.72-.18 1.41z"})})}])},511604,e=>{e.v(t=>Promise.all(["static/chunks/2-et_hho2aqvl.js"].map(t=>e.l(t))).then(()=>t(164436)))},896615,e=>{e.v(t=>Promise.all(["static/chunks/3klltxhcaam25.js"].map(t=>e.l(t))).then(()=>t(980954)))},401485,e=>{e.v(t=>Promise.all(["static/chunks/3363k0g8j073u.js","static/chunks/2n-gidy722xtj.js"].map(t=>e.l(t))).then(()=>t(873987)))},179909,e=>{e.v(t=>Promise.all(["static/chunks/41kj1t47-_n25.js"].map(t=>e.l(t))).then(()=>t(285692)))},628574,e=>{e.v(t=>Promise.all(["static/chunks/2qirsm4ul044n.js"].map(t=>e.l(t))).then(()=>t(218568)))},490258,e=>{e.v(t=>Promise.all(["static/chunks/2s87rp7nfrl4_.js"].map(t=>e.l(t))).then(()=>t(322465)))},15086,e=>{e.v(t=>Promise.all(["static/chunks/36smk6w2al07x.js"].map(t=>e.l(t))).then(()=>t(269275)))},134362,e=>{e.v(t=>Promise.all(["static/chunks/24_vd97z020im.js"].map(t=>e.l(t))).then(()=>t(57400)))},278533,e=>{e.v(t=>Promise.all(["static/chunks/2dsmc-m5l6-0x.js"].map(t=>e.l(t))).then(()=>t(906322)))},623645,e=>{e.v(t=>Promise.all(["static/chunks/18grolkayrg_h.js","static/chunks/02gzc6huqzhlf.js"].map(t=>e.l(t))).then(()=>t(257532)))}]);