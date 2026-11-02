(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,818581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return a}});let n=e.r(271645);function a(e,t){let r=(0,n.useRef)(null),a=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(r.current=i(e,n)),t&&(a.current=i(t,n))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},898879,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return l}});let n=e.r(271645),a="u"<typeof window,i=a?()=>{}:n.useLayoutEffect,o=a?()=>{}:n.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let e=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return a&&(t?.mountedInstances?.add(e.children),l()),i(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),i(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},325633,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return g},defaultHead:function(){return c}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let i=e.r(555682),o=e.r(190809),l=e.r(843476),s=o._(e.r(271645)),d=i._(e.r(898879)),f=e.r(742732);function c(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(233525);let p=["name","httpEquiv","charSet","itemProp"];function h(e){let t,r,n,a;return e.reduce(u,[]).reverse().concat(c().reverse()).filter((t=new Set,r=new Set,n=new Set,a={},e=>{let i=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?i=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?i=!1:r.add(e.type);break;case"meta":for(let t=0,r=p.length;t<r;t++){let r=p[t];if(e.props.hasOwnProperty(r))if("charSet"===r)n.has(r)?i=!1:n.add(r);else{let t=e.props[r],n=a[r]||new Set;("name"!==r||!o)&&n.has(t)?i=!1:(n.add(t),a[r]=n)}}}return i})).reverse().map((e,t)=>{let r=e.key||t;return s.default.cloneElement(e,{key:r})})}let g=function({children:e}){let t=(0,s.useContext)(f.HeadManagerContext);return(0,l.jsx)(d.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},488143,(e,t,r)=>{"use strict";function n({widthInt:e,heightInt:t,blurWidth:r,blurHeight:a,blurDataURL:i,objectFit:o}){let l=r?40*r:e,s=a?40*a:t,d=l&&s?`viewBox='0 0 ${l} ${s}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},987690,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={VALID_LOADERS:function(){return i},imageConfigDefault:function(){return o}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let i=["default","imgix","cloudinary","akamai","custom"],o={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},908927,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(233525);let n=e.r(543369),a=e.r(488143),i=e.r(987690),o=["-moz-initial","fill","none","scale-down",void 0];function l(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:r=!1,priority:f=!1,preload:c=!1,loading:u,className:p,quality:h,width:g,height:_,fill:m=!1,style:v,overrideSrc:b,onLoad:x,onLoadingComplete:y,placeholder:w="empty",blurDataURL:A,fetchPriority:P,decoding:R="async",layout:E,objectFit:C,objectPosition:S,lazyBoundary:L,lazyRoot:I,...O},N){var D;let H,B,T,{imgConf:z,showAltText:j,blurComplete:M,defaultLoader:k}=N,$=z||i.imageConfigDefault;if("allSizes"in $)H=$;else{let e=[...$.deviceSizes,...$.imageSizes].sort((e,t)=>e-t),t=$.deviceSizes.sort((e,t)=>e-t),r=$.qualities?.sort((e,t)=>e-t);H={...$,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===k)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let G=O.loader||k;delete O.loader,delete O.srcSet;let U="__next_img_default"in G;if(U){if("custom"===H.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=G;G=t=>{let{config:r,...n}=t;return e(n)}}if(E){"fill"===E&&(m=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(v={...v,...e});let r={responsive:"100vw",fill:"100vw"}[E];r&&!t&&(t=r)}let K="",W=s(g),V=s(_);if((D=e)&&"object"==typeof D&&(l(D)||void 0!==D.src)){let t=l(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(B=t.blurWidth,T=t.blurHeight,A=A||t.blurDataURL,K=t.src,!m)if(W||V){if(W&&!V){let e=W/t.width;V=Math.round(t.height*e)}else if(!W&&V){let e=V/t.height;W=Math.round(t.width*e)}}else W=t.width,V=t.height}let Y=!f&&!c&&("lazy"===u||void 0===u);(!(e="string"==typeof e?e:K)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,Y=!1),H.unoptimized&&(r=!0),U&&!H.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let F=s(h),q=Object.assign(m?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:S}:{},j?{}:{color:"transparent"},v),X=M||"empty"===w?null:"blur"===w?`url("data:image/svg+xml;charset=utf-8,${(0,a.getImageBlurSvg)({widthInt:W,heightInt:V,blurWidth:B,blurHeight:T,blurDataURL:A||"",objectFit:q.objectFit})}")`:`url("${w}")`,Q=o.includes(q.objectFit)?"fill"===q.objectFit?"100% 100%":"cover":q.objectFit,J=X?{backgroundSize:Q,backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},Z=function({config:e,src:t,unoptimized:r,width:a,quality:i,sizes:o,loader:l}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,n.getDeploymentId)();if(e){let r=t.indexOf("?");if(-1!==r){let n=new URLSearchParams(t.slice(r+1));n.get("dpl")||(n.append("dpl",e),t=t.slice(0,r)+"?"+n.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:s,kind:d}=function({deviceSizes:e,allSizes:t},r,n){if(n){let r=/(^|\s)(1?\d?\d)vw/g,a=[];for(let e;e=r.exec(n);)a.push(parseInt(e[2]));if(a.length){let r=.01*Math.min(...a);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,a,o),f=s.length-1;return{sizes:o||"w"!==d?o:"100vw",srcSet:s.map((r,n)=>`${l({config:e,src:t,quality:i,width:r})} ${"w"===d?r:n+1}${d}`).join(", "),src:l({config:e,src:t,quality:i,width:s[f]})}}({config:H,src:e,unoptimized:r,width:W,quality:F,sizes:t,loader:G}),ee=Y?"lazy":u;return{props:{...O,loading:ee,fetchPriority:P,width:W,height:V,decoding:R,className:p,style:{...q,...J},sizes:Z.sizes,srcSet:Z.srcSet,src:b||Z.src},meta:{unoptimized:r,preload:c||f,placeholder:w,fill:m}}}},918556,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let n=e.r(555682)._(e.r(271645)),a=e.r(987690),i=n.default.createContext(a.imageConfigDefault)},65856,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"RouterContext",{enumerable:!0,get:function(){return n}});let n=e.r(555682)._(e.r(271645)).default.createContext(null)},670965,(e,t,r)=>{"use strict";function n(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return n}})},1948,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o}});let n=e.r(670965),a=e.r(543369);function i({config:e,src:t,width:r,quality:o}){let l=(0,a.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),n=r.get("dpl");if(n){l=n,r.delete("dpl");let a=r.toString();t=t.slice(0,e)+(a?"?"+a:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let s=(0,n.findClosestQuality)(o,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${s}${t.startsWith("/")&&l?`&dpl=${l}`:""}`}i.__next_img_default=!0;let o=i},605500,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return x}});let n=e.r(555682),a=e.r(190809),i=e.r(843476),o=a._(e.r(271645)),l=n._(e.r(174080)),s=n._(e.r(325633)),d=e.r(908927),f=e.r(987690),c=e.r(918556);e.r(233525);let u=e.r(65856),p=n._(e.r(1948)),h=e.r(818581),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/nst-website-2027/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function _(e,t,r,n,a,i,o){let l=e?.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,a=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}n?.current&&n.current(e)}}))}function m(e){return o.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let v=(0,o.forwardRef)(({src:e,srcSet:t,sizes:r,height:n,width:a,decoding:l,className:s,style:d,fetchPriority:f,placeholder:c,loading:u,unoptimized:p,fill:g,onLoadRef:v,onLoadingCompleteRef:b,setBlurComplete:x,setShowAltText:y,sizesInput:w,onLoad:A,onError:P,...R},E)=>{let C=(0,o.useCallback)(e=>{e&&(P&&(e.src=e.src),e.complete&&_(e,c,v,b,x,p,w))},[e,c,v,b,x,P,p,w]),S=(0,h.useMergedRef)(E,C);return(0,i.jsx)("img",{...R,...m(f),loading:u,width:a,height:n,decoding:l,"data-nimg":g?"fill":"1",className:s,style:d,sizes:r,srcSet:t,src:e,ref:S,onLoad:e=>{_(e.currentTarget,c,v,b,x,p,w)},onError:e=>{y(!0),"empty"!==c&&x(!0),P&&P(e)}})});function b({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...m(t.fetchPriority)};return e&&l.default.preload?(l.default.preload(t.src,r),null):(0,i.jsx)(s.default,{children:(0,i.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let x=(0,o.forwardRef)((e,t)=>{let r=(0,o.useContext)(u.RouterContext),n=(0,o.useContext)(c.ImageConfigContext),a=(0,o.useMemo)(()=>{let e=g||n||f.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),a=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:a,localPatterns:"u"<typeof window?n?.localPatterns:e.localPatterns}},[n]),{onLoad:l,onLoadingComplete:s}=e,h=(0,o.useRef)(l);(0,o.useEffect)(()=>{h.current=l},[l]);let _=(0,o.useRef)(s);(0,o.useEffect)(()=>{_.current=s},[s]);let[m,x]=(0,o.useState)(!1),[y,w]=(0,o.useState)(!1),{props:A,meta:P}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:a,blurComplete:m,showAltText:y});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,{...A,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:h,onLoadingCompleteRef:_,setBlurComplete:x,setShowAltText:w,sizesInput:e.sizes,ref:t}),P.preload?(0,i.jsx)(b,{isAppRouter:!r,imgAttributes:A}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},794909,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return f},getImageProps:function(){return d}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let i=e.r(555682),o=e.r(908927),l=e.r(605500),s=i._(e.r(1948));function d(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/nst-website-2027/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let f=l.Image},657688,(e,t,r)=>{t.exports=e.r(794909)},756903,e=>{"use strict";var t=e.i(843476),r=e.i(271645),n=e.i(339415),a=e.i(549838);let i=(0,r.createContext)(null);function o(){let e=(0,r.useContext)(i);if(!e)throw Error("useRcbModal must be used within a modal provider");return e}let l={brand:{variant:"primary",color:"brand"},success:{variant:"primary",color:"success"},neutral:{variant:"primary",color:"neutral"},dark:{variant:"primary",color:"neutral"},outline:{variant:"secondary",color:"brand"}};e.s(["ModalCtaButton",0,function({cta:e,color:r="brand",size:i="large",fullWidth:s,className:d,leadingIcon:f,trailingIcon:c,ariaLabel:u}){let{open:p}=o(),{variant:h,color:g}=l[r],_="large"===i;return(0,t.jsxs)(n.default,{variant:h,color:g,size:i,onClick:()=>p(e),"data-from":e.from,"aria-label":u,style:{"--font-size":_?"16px":"14px","--line-height":_?"26px":"20px","--font-weight-semibold":"600"},className:(0,a.cn)(s&&"w-full! md:w-auto!",_?"h-14! px-5!":"h-10! px-4! md:h-12! md:px-5!",d),children:[f,e.label,c]})},"RcbModalContext",0,i,"useRcbModal",0,o])},703109,968081,e=>{"use strict";var t=e.i(997053),r=e.i(271645),n={DISPLAY_BD_D1:"display-bd-d1",DISPLAY_BD_D2:"display-bd-d2",DISPLAY_BD_D3:"display-bd-d3",HEADING_SB_H1:"heading-sb-h1",HEADING_SB_H2:"heading-sb-h2",HEADING_SB_H3:"heading-sb-h3",HEADING_SB_H4:"heading-sb-h4",HEADING_SB_H5:"heading-sb-h5",HEADING_SB_H6:"heading-sb-h6",PARAGRAPH_SB_P1:"paragraph-sb-p1",PARAGRAPH_SB_P2:"paragraph-sb-p2",PARAGRAPH_SB_P3:"paragraph-sb-p3",PARAGRAPH_SB_P4:"paragraph-sb-p4",PARAGRAPH_SB_L1:"paragraph-sb-l1",PARAGRAPH_SB_L2:"paragraph-sb-l2",PARAGRAPH_MD_P1:"paragraph-md-p1",PARAGRAPH_MD_P2:"paragraph-md-p2",PARAGRAPH_MD_P3:"paragraph-md-p3",PARAGRAPH_MD_P4:"paragraph-md-p4",PARAGRAPH_MD_C1:"paragraph-md-c1",PARAGRAPH_MD_L1:"paragraph-md-l1",PARAGRAPH_MD_L2:"paragraph-md-l2",OVERLINE_SB_OL1:"overline-sb-ol1",OVERLINE_SB_OL2:"overline-sb-ol2",ACTION_SB_P1:"action-sb-p1",ACTION_SB_P2:"action-sb-p2",ACTION_SB_LK1:"action-sb-lk1"};Object.freeze(Object.values(n));var a={H1:"h1",H2:"h2",H3:"h3",H4:"h4",H5:"h5",H6:"h6",P:"p",SPAN:"span",DIV:"div",LABEL:"label",CAPTION:"caption",CODE:"code",AUTO:"auto"};Object.freeze(Object.values(a));var i={[n.DISPLAY_BD_D1]:t.css`
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
    `},o={[n.DISPLAY_BD_D1]:a.H1,[n.DISPLAY_BD_D2]:a.H2,[n.DISPLAY_BD_D3]:a.H3,[n.HEADING_SB_H1]:a.H1,[n.HEADING_SB_H2]:a.H2,[n.HEADING_SB_H3]:a.H3,[n.HEADING_SB_H4]:a.H4,[n.HEADING_SB_H5]:a.H5,[n.HEADING_SB_H6]:a.H6,[n.PARAGRAPH_SB_P1]:a.P,[n.PARAGRAPH_SB_P2]:a.P,[n.PARAGRAPH_SB_P3]:a.P,[n.PARAGRAPH_SB_P4]:a.P,[n.PARAGRAPH_SB_L1]:a.LABEL,[n.PARAGRAPH_SB_L2]:a.LABEL,[n.PARAGRAPH_MD_P1]:a.P,[n.PARAGRAPH_MD_P2]:a.P,[n.PARAGRAPH_MD_P3]:a.P,[n.PARAGRAPH_MD_P4]:a.P,[n.PARAGRAPH_MD_C1]:a.CODE,[n.PARAGRAPH_MD_L1]:a.LABEL,[n.PARAGRAPH_MD_L2]:a.LABEL,[n.OVERLINE_SB_OL1]:a.P,[n.OVERLINE_SB_OL2]:a.P,[n.ACTION_SB_P1]:a.SPAN,[n.ACTION_SB_P2]:a.SPAN,[n.ACTION_SB_LK1]:a.SPAN},l=t.styled.p.attrs(e=>({as:e.as||"p"}))`
    margin: 0;
    padding: 0;

    font-family: var(--font-family, 'Mona Sans');
    color: var(--text-emphasis-primary-default, #16191d);

    ${({$variant:e})=>t.css`
            ${e?i[e]:i[n.PARAGRAPH_MD_P1]}
        `};

    ${({$textAlign:e})=>e&&`text-align: ${e};`}
    ${({$textTransform:e})=>e&&`text-transform: ${e};`}
    ${({$fontSize:e})=>e&&`font-size: ${e};`}
    ${({$color:e})=>e&&`color: ${e};`};
`,s=({variant:e="paragraph-md-p1",as:t="auto",color:n="var(--text-emphasis-primary-default, #16191d)",textAlign:i=null,textTransform:s=null,fontSize:d=null,children:f="",className:c="",title:u=null})=>{let p=t===a.AUTO?o[e]:t;return r.default.createElement(l,{$variant:e,as:p,$color:n,$textAlign:i,$textTransform:s,$fontSize:d,className:c,title:u},f)};e.s(["Typography_default",0,s],968081),e.s(["default",0,s],703109)},830249,e=>{"use strict";var t=e.i(271645);e.s(["useParentUrl",0,function(){let[e,r]=(0,t.useState)("");return(0,t.useEffect)(()=>{function e(e){let t=e.data;t&&"object"==typeof t&&"PARENT_URL"===t.type&&"string"==typeof t.url&&r(t.url)}return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]),e}])},397681,e=>{"use strict";var t=e.i(893347),r=e.i(773892),n=e.i(364072),a=e.i(189101),i=e.i(824511),o=e.i(88653),l=e.i(271645),s=e.i(997053),d=(0,s.styled)(i.m.div)`
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

    ${({$width:e})=>e?s.css`
                  width: ${e};
              `:""}
    ${({$height:e})=>e?s.css`
                  height: ${e};
              `:""}
    ${({$minHeight:e})=>e?s.css`
                  min-height: ${e};
              `:""}
    ${({$minWidth:e})=>e?s.css`
                  min-width: ${e};
              `:""}
    ${({$maxHeight:e})=>e?s.css`
                  max-height: ${e};
              `:""}
    ${({$maxWidth:e})=>e?s.css`
                  max-width: ${e};
              `:""}

    ${({$mobileBottomFullWidth:e})=>e?s.css`
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

    ${({$modalPadding:e})=>s.css`
            padding: ${e};

            @media only screen and (max-width: 600px) {
                padding: ${e};
            }
        `}

    ${({$border:e})=>e&&s.css`
            border: ${e};
        `}
`,f=s.styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex: 1;
    gap: var(--spacing-12px, 12px);

    ${({$overflow:e})=>e&&s.css`
            overflow: ${e};
        `}

    @media only screen and (max-width: 600px) {
        padding: 0;
    }
`,c=s.styled.div`
    width: 100%;
    height: var(--spacing-1px, 1px);
    background: var(--border-subtle-primary-default, #e1e5ea);
`,u=s.styled.h2`
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
`,p=s.styled.div`
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
`,h=s.styled.div`
    font-weight: var(--font-weight-450, 450);
    font-size: var(--font-size-16px, 16px);
    line-height: var(--spacing-28px, 28px);
    text-align: center;
    letter-spacing: 0.2px;
    color: var(--text-emphasis-secondary-default, #5b6271);
    ${({$modalBodyMargin:e})=>e&&s.css`
            margin: ${e};
        `}
    white-space: pre-line;
    width: 100%;
    flex: 1;

    @media only screen and (max-width: 600px) {
        font-size: var(--font-size-14px, 14px);
        line-height: var(--spacing-24px, 24px);
    }
`;s.styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    gap: var(--spacing-12px, 12px);
`,s.styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-4px, 4px);
    margin-top: auto;
`,s.styled.div`
    width: 6px;
    height: 6px;
    border-radius: var(--corner-radius-50percent, 50%);
    background: var(--border-subtle-primary-default, #e1e5ea);
    cursor: pointer;
    transition: all 0.1s ease-in-out;

    ${({$active:e})=>e?"background: var(--text-emphasis-secondary-default, #5b6271);":"&:hover {background: var(--text-emphasis-primary-disabled, #8c95a6);}"}
`;var g=s.styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: var(--spacing-8px, 8px);

    ${({$justifyContent:e})=>e&&s.css`
            justify-content: ${e};
        `}
`,_=s.styled.div`
    width: 100%;
    position: relative;

    img {
        width: 100%;
        border-radius: var(--corner-radius-8px, 8px);
    }
`,m={slide:{variants:{hidden:{opacity:0,y:-50},visible:{opacity:1,y:0},exit:{opacity:0,y:50}},transition:{duration:.3}},"slide-reverse":{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0},exit:{opacity:0,y:-50}},transition:{duration:.3}},fade:{variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},transition:{duration:.3}},emanate:{}},v=(0,l.forwardRef)(({width:e,height:t,minHeight:r,minWidth:n,maxHeight:a,maxWidth:i,mobileBottomFullWidth:o,modalPadding:s,border:f,children:c,...u},p)=>l.default.createElement(d,{ref:p,$width:e,$height:t,$minHeight:r,$minWidth:n,$maxHeight:a,$maxWidth:i,$mobileBottomFullWidth:o,$modalPadding:s,$border:f,...u},c)),b=(0,l.forwardRef)(({justifyContent:e,children:t},r)=>l.default.createElement(g,{ref:r,$justifyContent:e},t)),x=(0,l.forwardRef)(({overflow:e,children:t,...r},n)=>l.default.createElement(f,{ref:n,$overflow:e,...r},t)),y=(0,l.forwardRef)(({children:e,...t},r)=>l.default.createElement(_,{ref:r,...t},e)),w=(0,l.forwardRef)(({children:e,...t},r)=>l.default.createElement(u,{ref:r,...t},e)),A=(0,l.forwardRef)(({children:e,...t},r)=>l.default.createElement(p,{ref:r,...t},e)),P=(0,l.forwardRef)(({modalBodyMargin:e,children:t,...r},n)=>l.default.createElement(h,{ref:n,$modalBodyMargin:e,...r},t)),R=(0,l.forwardRef)(({...e},t)=>l.default.createElement(c,{ref:t,...e})),E=(0,l.forwardRef)((e,i)=>{let{isOpen:s=!0,banner:c=null,title:v=null,description:b=null,body:x=null,action:y=null,height:w="auto",width:A="500px",minHeight:P=null,minWidth:R=null,maxHeight:E="95vh",maxWidth:C="95vw",onHide:S=()=>{},onClose:L=()=>{},mobileBottomFullWidth:I=!1,modalPadding:O="20px",border:N="1px solid var(--border-subtle-primary-default, #e1e5ea)",modalBodyMargin:D=null,showCloseButton:H=!1,hideOnClickAway:B=!1,blurBackground:T=!1,animatePresence:z="fade",clickEvent:j=null,children:M=null,shouldFocusOnFirstElement:k=!0,shouldDisableScroll:$=!0,overflow:G="visible",className:U}=e,K=(0,l.useRef)(null),W=()=>{"function"==typeof S&&S(),"function"==typeof L&&L()};(0,l.useImperativeHandle)(i,()=>K.current),(0,r.useDisableBodyScroll_default)(s),(0,r.useKeyboardEvent_default)({onKeyPress:()=>{B&&W()},keyCodes:["Escape"],config:{shouldDetect:s}});let V=(0,l.useId)(),Y=(0,l.useMemo)(()=>{var e,t;return e=z,t=j,"emanate"===e?"number"==typeof(null==t?void 0:t.clientX)&&"number"==typeof(null==t?void 0:t.clientY)?((e,t)=>{let r,n;try{r=e-window.innerWidth/2,n=t-window.innerHeight/2}catch(e){r=0,n=0}return{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{scale:0,opacity:0,x:r,y:n},visible:{scale:1,opacity:1,x:0,y:0},exit:{scale:0,opacity:0,x:r,y:n}},transition:{duration:.3}}})(t.clientX,t.clientY):{}:{initial:"hidden",animate:"visible",exit:"exit",...e?m[e]:{}}},[z,j]),F=(0,l.useMemo)(()=>(({isOpen:e,animatePresence:t,clickEvent:r})=>!!e&&("emanate"!==t||"number"==typeof(null==r?void 0:r.clientX)&&"number"==typeof(null==r?void 0:r.clientY)))({isOpen:s,animatePresence:z,clickEvent:j}),[s,z,j]);return l.default.createElement(n.motion_default,null,l.default.createElement(o.AnimatePresence,null,F&&l.default.createElement(t.Overlay_default,{shouldDisableScroll:$,onOverlayClick:()=>{B&&W()},shouldTintOverlay:!0,shouldBlurOverlay:T,shouldCenterContent:!0,"data-testid":"testid-modalwrapper",className:U,animationDuration:.3,shouldFocusOnFirstElement:k},l.default.createElement(d,{onClick:e=>e.stopPropagation(),ref:K,$width:A,$height:w,$minHeight:P,$minWidth:R,$maxHeight:E,$maxWidth:C,$mobileBottomFullWidth:I,$modalPadding:O,$border:N,"aria-labelledby":`modal-title-${V}`,"aria-describedby":`modal-description-${V}`,"aria-modal":"true",role:"dialog","data-testid":"testid-modal",...Y},l.default.createElement(f,{$overflow:G},H&&l.default.createElement(g,{$justifyContent:"end"},l.default.createElement(a.IconButton_default,{onClick:W,size:"small",variant:"tertiary",color:"neutral",icon:"close",ariaLabel:"Close",buttonProps:{autoFocus:!0}})),c&&l.default.createElement(_,null,c),v&&l.default.createElement(u,{id:`modal-title-${V}`},v),b&&l.default.createElement(p,{id:`modal-description-${V}`},b),x&&l.default.createElement(h,{$modalBodyMargin:D},x),M&&l.default.createElement(h,{$modalBodyMargin:D},M)),y&&l.default.createElement(g,null,y)))))});E.Modal=v,E.Main=x,E.Banner=y,E.Title=w,E.Description=A,E.Body=P,E.Action=b,E.Divider=R,e.s(["NSModal",0,E],397681)},914984,e=>{"use strict";var t=e.i(843476);e.s(["ArrowRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M5 12h14m0 0-6-6m6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronLeftIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m15 6-6 6 6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m9 6 6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"CloseIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M6 6l12 12M18 6 6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"RadioUncheckedIcon",0,function({className:e}){return(0,t.jsx)("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":!0,focusable:"false",className:e,children:(0,t.jsx)("path",{d:"M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 14.6 5.4 18.3333 10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667ZM10 16.6667C6.31667 16.6667 3.33333 13.6833 3.33333 10C3.33333 6.31667 6.31667 3.33333 10 3.33333C13.6833 3.33333 16.6667 6.31667 16.6667 10C16.6667 13.6833 13.6833 16.6667 10 16.6667Z",fill:"currentColor"})})},"SparkIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M12 2c.45 4.2 2.3 6.05 6.5 6.5-4.2.45-6.05 2.3-6.5 6.5-.45-4.2-2.3-6.05-6.5-6.5C9.7 8.05 11.55 6.2 12 2z"})})},"YouTubePlayIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 68 48",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("path",{d:"M66.5 7.5a8.5 8.5 0 0 0-6-6C55.2 0 34 0 34 0S12.8 0 7.5 1.5a8.5 8.5 0 0 0-6 6A89 89 0 0 0 0 24a89 89 0 0 0 1.5 16.5 8.5 8.5 0 0 0 6 6C12.8 48 34 48 34 48s21.2 0 26.5-1.5a8.5 8.5 0 0 0 6-6A89 89 0 0 0 68 24a89 89 0 0 0-1.5-16.5z",fill:"#FF0000"}),(0,t.jsx)("path",{d:"M27.2 34.29 44.85 24 27.2 13.71v20.58z",fill:"#fff"})]})}])},680395,e=>{"use strict";let t="ns_rcb_unlock_v2";function r(){let e=function(e,t){try{let r=e().getItem(t);if(!r)return null;return JSON.parse(r)}catch{return null}}(()=>window.sessionStorage,t);if(!e||1!==e.v||!e.profile)return null;let r=e.profile;return"string"==typeof r.fullName&&"string"==typeof r.phone&&r.fullName.trim()&&10===r.phone.replace(/\D/g,"").length?{fullName:r.fullName,phone:r.phone,email:"string"==typeof r.email?r.email:"",whatsapp:!!r.whatsapp,qualifierAnswers:r.qualifierAnswers&&"object"==typeof r.qualifierAnswers?r.qualifierAnswers:{},savedAt:"number"==typeof r.savedAt?r.savedAt:0}:null}e.s(["DEFAULT_RCB_QUALIFIER_KEYS",0,["highest_qualification","graduation_year"],"isLeadUnlocked",0,function(){return null!==r()},"mergeUnlockProfile",0,function(e){let n=r();!function(e,t,r){try{e().setItem(t,JSON.stringify(r))}catch{return!1}}(()=>window.sessionStorage,t,{v:1,profile:{fullName:e.fullName,phone:e.phone,email:e.email,whatsapp:e.whatsapp,qualifierAnswers:{...n?.qualifierAnswers,...e.qualifierAnswers},savedAt:Date.now()}})},"normalizeQualifierValue",0,function(e){return e.replace(/[\u200B\u200C\u200D\u2060\uFEFF]/g,"").trim()},"readUnlockProfile",0,r])},356105,527341,e=>{"use strict";var t=e.i(271645),r=e.i(336835);let n="multi_step_rcb_form_partial_fill_hash";function a(e){try{return window.localStorage.getItem(e)??""}catch{return""}}function i(e,t){try{window.localStorage.setItem(e,t)}catch{}}function o(e){try{window.localStorage.removeItem(e)}catch{}}e.s(["usePartialRcb",0,function(e){let l=e?.resumeStoredHash??!0,s=e?.filedScope?"multi_step_rcb_form_filed_hash:"+e.filedScope:"",d=(0,t.useRef)(s);d.current=s;let f=(0,t.useRef)(!1),c=(0,t.useRef)(e?.onHash);c.current=e?.onHash;let u=(0,t.useRef)(e?.hashSource);u.current=e?.hashSource;let p=(0,t.useRef)(""),h=(0,t.useRef)(""),g=(0,t.useRef)(Promise.resolve());return(0,t.useEffect)(()=>{if(!l)return;let e=d.current?a(d.current):"";e?(p.current=e,f.current=!0):p.current=a(n)},[]),{save:(0,t.useCallback)((e,t=!1,{updateLsq:a=!1,keepHash:s=!1}={})=>{let _=async()=>{let g;if(!t&&!(e.fullName.trim()||e.phone.trim()||e.email.trim()||Object.values(e.qualifiers).some(Boolean))||!t&&!a&&f.current)return{ok:!0};let _=JSON.stringify({input:e,updateLsq:a});return t||_!==h.current?((h.current=_,!p.current&&u.current&&(p.current=u.current()),p.current)?g=await (0,r.updateRcb)(p.current,e,t,a):(g=await (0,r.createRcb)(e,t,a)).ok&&g.hash&&(p.current=g.hash,c.current?.(g.hash),l&&i(n,g.hash)),g.ok||h.current!==_||(h.current=""),g.ok&&l&&(t||a)&&(o(n),d.current&&(s&&!t?i(d.current,p.current):o(d.current))),{ok:g.ok,error:g.error}):(a&&!s&&l&&(o(n),d.current&&o(d.current)),{ok:!0})},m=g.current.then(_,_);return g.current=m.catch(()=>{}),m},[l])}}],356105);var l=e.i(680395),s=e.i(58863);let d=/^[a-z ,.'-]+$/i,f=/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;e.s(["buildRcbInput",0,function(e){return{fullName:e.name,phone:e.phone,email:e.email,qualifiers:e.answers,whatsapp:e.whatsapp,from:e.from,parentUrl:e.parentUrl,nextUrl:e.nextUrl,utmParams:(0,s.getUtmParams)(),responseType:e.responseType,formVariant:e.formVariant,...e.extraLeadFields?{extraLeadFields:e.extraLeadFields}:{}}},"flattenRcbSteps",0,function(e){return e.flatMap(e=>e.questions)},"rcbContactErrorMessage",0,function(e,t){switch(e){case"name":return t.trim()?"Full Name can only contain alphabets":"Full Name is Required";case"phone":return t?"Invalid Phone Number":"Phone Number is Required";case"email":return t.trim()?"Enter a valid email address":"Email is Required"}},"rcbContactErrors",0,function({name:e,phone:t,email:r},{requireEmail:n}){return{name:0===e.trim().length||!d.test(e.trim()),phone:10!==t.replace(/\D/g,"").length,email:!!n&&!f.test(r.trim())}},"seedAnswers",0,function(e,t){if(!e)return{};let r={};for(let n of t){let t=e.qualifierAnswers[n.key];if(!t)continue;let a=n.items.find(e=>(0,l.normalizeQualifierValue)(e.value)===(0,l.normalizeQualifierValue)(t));a&&(r[n.key]=a.value)}return r}],527341)},409954,e=>{"use strict";var t=e.i(843476);e.i(914984),e.s(["ArrowDownIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M12 4v16m0 0-6-6m6 6 6-6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"CalendarIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("rect",{x:"3.5",y:"5",width:"17",height:"15",rx:"2",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]})},"CheckCircleIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"m8.5 12.4 2.5 2.5L16 9.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})},"ClockIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"8.25",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"M12 7.5V12l3 2",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})]})}])},961523,e=>{"use strict";e.i(409954),e.s([])},90679,e=>{"use strict";e.s(["DS_IMAGES",0,{certificate:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/8e3ae32894264a13964739cfca7e06be.webp",logoMcafee:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/f18ae86e94894e48b36335e88358f50d.webp",logo:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/37e308c02f0a4cddbec1524d272f0c3a.webp",ratingAvatar1:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/abb8824cc4b44155814e9d86985af68d.webp",ratingAvatar2:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/e7041fe42e4a4e6495dd056134ff4b57.webp",ratingAvatar3:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/69fcc3debcd34e42ac2bfdc6c60debd8.webp",ratingAvatar4:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/98b0fad45f944e06a336388b52561152.webp",ratingAvatar5:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/36a961d99fe84c369a9ac8c3f3a681e7.webp",instructorDhananjay:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/c82f005ce61c46889b8279a9594c926e.webp",instructorManish:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/dadf790d193e4264a28ab8da8c10ce20.webp",instructorRajat:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/21aecbbff1df4b66904de64fdde99131.webp",instructorShreyash:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/8fb8c8ee11f74519a019c03198dfe03a.webp",testimonialCrio:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/6e8c0c9b4f334cc69ad682f1c08369d5.webp",testimonialIndigo:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/a79b3264f44b4291b258485f080b3083.webp",testimonialRocketLearning:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/bb23652ad11a4f7e942f1d55ab812d9c.webp",alumniManjiri:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/ef39e89b7fcd4c4180dc1e65a7506bd9.webp",alumniMegha:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/a9fd85357422439b81494a0ecd826147.webp",alumniShubham:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/30145172170d4827bd9514771c0e058f.webp",alumniSonakshi:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/47bf04f95b9848c398bdfdff7bea7fe5.webp",alumniSumedh:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/bc3dd782a5274cc8aa203d04fe07b538.webp",alumniVivek:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/3a17cb91e8f141f8b957cb35158a6dc7.webp",alumniYashdeep:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/cb63990e71064823b98580ec3e1dc56d.webp",alumniLogoManjiri:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/67fcf590004f46c683aa5a2dc4d5c319.webp",alumniLogoMegha:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/71ad34ef58ca4b19be2325b2b617f7e6.webp",alumniLogoShubham:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/6aa3c62579b54a98a665305d59d333b2.webp",alumniLogoSonakshi:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/66a981d066584e90bf625c4525695e46.webp",alumniLogoSumedh:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/83b4e8a96b3848889120a93f37b4c70e.webp",alumniLogoVivek:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/b71558d5d33d42e5b432c0c85c707202.webp",alumniLogoYashdeep:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/fb289eb328f64ad689fc84981fb7044c.webp",partnerAccenture:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/b74eadf9a8764dee846dbf22ecc015f6.png",partnerAdobe:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/e0fe1e6aaa494e808e732e1eeb74f4f0.png",partnerAllen:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/8716af6e9597452b83c8b10c3f77b757.png",partnerAmazon:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/199483e34cff4bc0bd85069764d490b0.png",partnerCoinbase:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/5d296bdd6f624b7fac911697c8687c23.png",partnerDropbox:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/2fc3773ca3524056b5d83d6771eb5547.png",partnerGoogle:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/c298453a706c470f9fec9147714944cb.png",partnerLinkedin:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/0614fb9739694cf1a43b81c6332664ee.png",partnerMeta:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/f1b992a2b80148889a71a9dada8254bf.png",partnerMicrosoft:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/175bb2d50ad14902b617a3d5da1ad062.png",partnerNetflix:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/dd81ee2650644ef0b7c5d8cbcf98c719.png",partnerNotion:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/84956b6a946d49c1b002b254cb8b1cb6.png",partnerNykaa:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/a97863f381f74c78880a0571985444a9.png",partnerPaypal:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/a96d4473afb44d45b33cc367808c6f09.png",partnerPaytm:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/7984861e8f65492e87c15de1cbf3eeb2.png",partnerPhonepe:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/122a16ee88fc41abb4e54920e8f9262b.png",partnerPinterest:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/f0199c0491294a6f977abc70e54e8740.png",partnerRazorpay:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/f6b061001e804bb7b118d284f9b2d0a6.png",partnerStripe:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/d4cb8fadc7634fb69ec14c79bbdff0eb.png",partnerSwiggy:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/2d5f31f9b112447e92f247519b4ee86f.png",partnerTripadvisor:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/47478ba2cda942efa685a8a3ab1c2eab.png",partnerUber:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/6221d9c9498347de8ca4d0f519925682.png",partnerVisa:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/0b47d3457b2546b1b6b78be5cd71902b.png",partnerZomato:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/cd83f5687ffb427b9f95cb6c163841f5.png",partnerZoomcar:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/cfa7155b9bd04409a62a083f019dd88e.png",masterclassVideo:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/6805a7e136b44ddb8049303979c7ae5b.mp4",masterclassUnderline:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/9e525ca7e44f41b0ae3cea564a64b8d2.png"}])},667750,e=>{"use strict";var t=e.i(688921);let r=t.EVENT_TYPE.CLICK,n={HEADER_RCB:"perf_rcb_2",HERO_PLACEMENT_REPORT:"perf_pr_2",HERO_DOWNLOAD_BROCHURE:"download_brochure_2",HIRING_PARTNERS:"Perf_PR_NS_DS4",PLACED_LEARNERS:"Perf_PR_NS_DS2",ALUMNI_RCB:"perf_NS_DS2_request_a_callback",ALUMNI_DOWNLOAD_BROCHURE:"download_brochure_NS_DS2",STICKY_REGISTER:"perf_sticky_register",COUNSELLING_POPUP:"perf_counselling_popup",NAV_TALK_TO_COUNSELLOR:"Talk_to_a_counsellor_perf",STICKY_CHECK_ELIGIBILITY:"check_eligibility_perf",EXIT_INTENT_POPUP:"perf_exit_Intent_Popup"},a={PAGE_LOAD:{eventType:"load",eventName:"page_view"},HEADER_RCB_CLICK:{eventType:r,eventName:"ds-nav-rcb-experiment"},HERO_PLACEMENT_REPORT_CLICK:{eventType:r,eventName:"ds-ns-hero-see-placement-report-experiment"},HERO_DOWNLOAD_BROCHURE_CLICK:{eventType:r,eventName:"ds-ns-hero-download-brochure-experiment"},HIRING_PARTNERS_CTA_CLICK:{eventType:r,eventName:"ds-ns-view-all-hiring-partners"},VIEW_ALL_PLACED_LEARNERS_CLICK:{eventType:r,eventName:"ds-ns-view-all-placed-learners"},ALUMNI_RCB_CLICK:{eventType:r,eventName:"ds-ns-alumini-rcb"},ALUMNI_DOWNLOAD_BROCHURE_CLICK:{eventType:r,eventName:"ds-ns-alumini-download-brochure"},STICKY_REGISTER_CLICK:{eventType:r,eventName:"ds-ns-sticky-register"},MODAL_OPEN:{eventType:r,eventName:"ds_perf_modal_open"},MODAL_CLOSE:{eventType:r,eventName:"ds_perf_modal_close"},COUNSELLING_POPUP_OPEN:{eventType:t.EVENT_TYPE.PAGE_LOAD,eventName:"ds-ns-counselling-popup-open"},COUNSELLING_POPUP_CLOSE:{eventType:r,eventName:"ds-ns-counselling-popup-close"},NAV_TALK_TO_COUNSELLOR_CLICK:{eventType:r,eventName:"ds-ns-nav-talk-to-counsellor"},STICKY_CHECK_ELIGIBILITY_CLICK:{eventType:r,eventName:"ds-ns-sticky-check-eligibility"},EXIT_INTENT_POPUP_OPEN:{eventType:t.EVENT_TYPE.PAGE_LOAD,eventName:"ds-ns-exit-intent-popup-open"},EXIT_INTENT_POPUP_CLOSE:{eventType:r,eventName:"ds-ns-exit-intent-popup-close"}},i={LOAD_RCB_BANNER:{eventType:t.EVENT_TYPE.EVENT_SUCCESS,eventName:"load_rcb_banner"},CLICK_RCB_BANNER:{eventType:r,eventName:"click_rcb_banner"}},o={[n.HEADER_RCB]:a.HEADER_RCB_CLICK,[n.HERO_PLACEMENT_REPORT]:a.HERO_PLACEMENT_REPORT_CLICK,[n.HERO_DOWNLOAD_BROCHURE]:a.HERO_DOWNLOAD_BROCHURE_CLICK,[n.HIRING_PARTNERS]:a.HIRING_PARTNERS_CTA_CLICK,[n.PLACED_LEARNERS]:a.VIEW_ALL_PLACED_LEARNERS_CLICK,[n.ALUMNI_RCB]:a.ALUMNI_RCB_CLICK,[n.ALUMNI_DOWNLOAD_BROCHURE]:a.ALUMNI_DOWNLOAD_BROCHURE_CLICK,[n.STICKY_REGISTER]:a.STICKY_REGISTER_CLICK,[n.NAV_TALK_TO_COUNSELLOR]:a.NAV_TALK_TO_COUNSELLOR_CLICK,[n.STICKY_CHECK_ELIGIBILITY]:a.STICKY_CHECK_ELIGIBILITY_CLICK};e.s(["DS_PERF_EVENTS",0,a,"FROM",0,n,"FROM_EVENT",0,o,"MASTERCLASS_BANNER_EVENTS",0,i])}]);