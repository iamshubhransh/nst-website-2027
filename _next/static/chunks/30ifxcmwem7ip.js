(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,866422,e=>{"use strict";var t=e.i(271645),i=e.i(58863);function n(e){let t=e.getAttribute("href");if(!(!t||t.startsWith("#")||t.startsWith("mailto:")||t.startsWith("tel:")))try{let n=new URL(t,window.location.href);if("https:"!==n.protocol&&"http:"!==n.protocol||!(n.hostname===window.location.hostname||"newtonschool.co"===n.hostname||n.hostname.endsWith(".newtonschool.co")))return;let a=(0,i.appendUtmParams)(n.toString());a!==e.href&&(e.href=a)}catch{}}function a(e){e.querySelectorAll("a[href]").forEach(n)}e.s(["UtmPropagation",0,function(){return(0,t.useEffect)(()=>{if((0,i.persistUtmParams)(),0===Object.keys((0,i.getUtmParams)()).length)return;a(document);let e=new MutationObserver(e=>{for(let t of e){if("attributes"===t.type&&t.target instanceof HTMLAnchorElement){n(t.target);continue}t.addedNodes.forEach(e=>{e instanceof HTMLAnchorElement?n(e):e instanceof Element&&a(e)})}});e.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["href"]});let t=e=>{let t=e.target?.closest?.("a[href]");t instanceof HTMLAnchorElement&&n(t)};return document.addEventListener("click",t,!0),document.addEventListener("auxclick",t,!0),()=>{e.disconnect(),document.removeEventListener("click",t,!0),document.removeEventListener("auxclick",t,!0)}},[]),null}])},652612,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(336835),a=e.i(58863);let r="access_token_ns_student_web",o=(0,i.createContext)({isLoggedIn:!1,loading:!1});e.s(["LoggedInProvider",0,function({children:e}){let[l,s]=(0,i.useState)({isLoggedIn:!1,loading:!1});return(0,i.useEffect)(()=>{let e=(0,a.getCookie)(r);if(!e)return;let t=!0;return s({isLoggedIn:!1,loading:!0}),(0,n.fetchMe)(e).then(e=>{t&&(e.ok||(0,a.clearAuthCookie)(r),s({isLoggedIn:e.ok,loading:!1}))}),()=>{t=!1}},[]),(0,t.jsx)(o.Provider,{value:l,children:e})},"useLoggedIn",0,function(){return(0,i.useContext)(o)}])},397681,e=>{"use strict";var t=e.i(893347),i=e.i(773892),n=e.i(364072),a=e.i(189101),r=e.i(824511),o=e.i(88653),l=e.i(271645),s=e.i(997053),d=(0,s.styled)(r.m.div)`
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
`,c=s.styled.div`
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
`,u=s.styled.div`
    width: 100%;
    height: var(--spacing-1px, 1px);
    background: var(--border-subtle-primary-default, #e1e5ea);
`,p=s.styled.h2`
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
`,h=s.styled.div`
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
`,f=s.styled.div`
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
`;var m=s.styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: var(--spacing-8px, 8px);

    ${({$justifyContent:e})=>e&&s.css`
            justify-content: ${e};
        `}
`,x=s.styled.div`
    width: 100%;
    position: relative;

    img {
        width: 100%;
        border-radius: var(--corner-radius-8px, 8px);
    }
`,g={slide:{variants:{hidden:{opacity:0,y:-50},visible:{opacity:1,y:0},exit:{opacity:0,y:50}},transition:{duration:.3}},"slide-reverse":{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0},exit:{opacity:0,y:-50}},transition:{duration:.3}},fade:{variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},transition:{duration:.3}},emanate:{}},v=(0,l.forwardRef)(({width:e,height:t,minHeight:i,minWidth:n,maxHeight:a,maxWidth:r,mobileBottomFullWidth:o,modalPadding:s,border:c,children:u,...p},h)=>l.default.createElement(d,{ref:h,$width:e,$height:t,$minHeight:i,$minWidth:n,$maxHeight:a,$maxWidth:r,$mobileBottomFullWidth:o,$modalPadding:s,$border:c,...p},u)),y=(0,l.forwardRef)(({justifyContent:e,children:t},i)=>l.default.createElement(m,{ref:i,$justifyContent:e},t)),w=(0,l.forwardRef)(({overflow:e,children:t,...i},n)=>l.default.createElement(c,{ref:n,$overflow:e,...i},t)),b=(0,l.forwardRef)(({children:e,...t},i)=>l.default.createElement(x,{ref:i,...t},e)),k=(0,l.forwardRef)(({children:e,...t},i)=>l.default.createElement(p,{ref:i,...t},e)),$=(0,l.forwardRef)(({children:e,...t},i)=>l.default.createElement(h,{ref:i,...t},e)),j=(0,l.forwardRef)(({modalBodyMargin:e,children:t,...i},n)=>l.default.createElement(f,{ref:n,$modalBodyMargin:e,...i},t)),E=(0,l.forwardRef)(({...e},t)=>l.default.createElement(u,{ref:t,...e})),C=(0,l.forwardRef)((e,r)=>{let{isOpen:s=!0,banner:u=null,title:v=null,description:y=null,body:w=null,action:b=null,height:k="auto",width:$="500px",minHeight:j=null,minWidth:E=null,maxHeight:C="95vh",maxWidth:_="95vw",onHide:L=()=>{},onClose:M=()=>{},mobileBottomFullWidth:B=!1,modalPadding:z="20px",border:I="1px solid var(--border-subtle-primary-default, #e1e5ea)",modalBodyMargin:P=null,showCloseButton:R=!1,hideOnClickAway:W=!1,blurBackground:T=!1,animatePresence:A="fade",clickEvent:O=null,children:S=null,shouldFocusOnFirstElement:H=!0,shouldDisableScroll:N=!0,overflow:U="visible",className:q}=e,D=(0,l.useRef)(null),F=()=>{"function"==typeof L&&L(),"function"==typeof M&&M()};(0,l.useImperativeHandle)(r,()=>D.current),(0,i.useDisableBodyScroll_default)(s),(0,i.useKeyboardEvent_default)({onKeyPress:()=>{W&&F()},keyCodes:["Escape"],config:{shouldDetect:s}});let K=(0,l.useId)(),Y=(0,l.useMemo)(()=>{var e,t;return e=A,t=O,"emanate"===e?"number"==typeof(null==t?void 0:t.clientX)&&"number"==typeof(null==t?void 0:t.clientY)?((e,t)=>{let i,n;try{i=e-window.innerWidth/2,n=t-window.innerHeight/2}catch(e){i=0,n=0}return{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{scale:0,opacity:0,x:i,y:n},visible:{scale:1,opacity:1,x:0,y:0},exit:{scale:0,opacity:0,x:i,y:n}},transition:{duration:.3}}})(t.clientX,t.clientY):{}:{initial:"hidden",animate:"visible",exit:"exit",...e?g[e]:{}}},[A,O]),J=(0,l.useMemo)(()=>(({isOpen:e,animatePresence:t,clickEvent:i})=>!!e&&("emanate"!==t||"number"==typeof(null==i?void 0:i.clientX)&&"number"==typeof(null==i?void 0:i.clientY)))({isOpen:s,animatePresence:A,clickEvent:O}),[s,A,O]);return l.default.createElement(n.motion_default,null,l.default.createElement(o.AnimatePresence,null,J&&l.default.createElement(t.Overlay_default,{shouldDisableScroll:N,onOverlayClick:()=>{W&&F()},shouldTintOverlay:!0,shouldBlurOverlay:T,shouldCenterContent:!0,"data-testid":"testid-modalwrapper",className:q,animationDuration:.3,shouldFocusOnFirstElement:H},l.default.createElement(d,{onClick:e=>e.stopPropagation(),ref:D,$width:$,$height:k,$minHeight:j,$minWidth:E,$maxHeight:C,$maxWidth:_,$mobileBottomFullWidth:B,$modalPadding:z,$border:I,"aria-labelledby":`modal-title-${K}`,"aria-describedby":`modal-description-${K}`,"aria-modal":"true",role:"dialog","data-testid":"testid-modal",...Y},l.default.createElement(c,{$overflow:U},R&&l.default.createElement(m,{$justifyContent:"end"},l.default.createElement(a.IconButton_default,{onClick:F,size:"small",variant:"tertiary",color:"neutral",icon:"close",ariaLabel:"Close",buttonProps:{autoFocus:!0}})),u&&l.default.createElement(x,null,u),v&&l.default.createElement(p,{id:`modal-title-${K}`},v),y&&l.default.createElement(h,{id:`modal-description-${K}`},y),w&&l.default.createElement(f,{$modalBodyMargin:P},w),S&&l.default.createElement(f,{$modalBodyMargin:P},S)),b&&l.default.createElement(m,null,b)))))});C.Modal=v,C.Main=w,C.Banner=b,C.Title=k,C.Description=$,C.Body=j,C.Action=y,C.Divider=E,e.s(["NSModal",0,C],397681)},914984,e=>{"use strict";var t=e.i(843476);e.s(["ArrowRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M5 12h14m0 0-6-6m6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronLeftIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m15 6-6 6 6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m9 6 6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"CloseIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M6 6l12 12M18 6 6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"RadioUncheckedIcon",0,function({className:e}){return(0,t.jsx)("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":!0,focusable:"false",className:e,children:(0,t.jsx)("path",{d:"M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 14.6 5.4 18.3333 10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667ZM10 16.6667C6.31667 16.6667 3.33333 13.6833 3.33333 10C3.33333 6.31667 6.31667 3.33333 10 3.33333C13.6833 3.33333 16.6667 6.31667 16.6667 10C16.6667 13.6833 13.6833 16.6667 10 16.6667Z",fill:"currentColor"})})},"SparkIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M12 2c.45 4.2 2.3 6.05 6.5 6.5-4.2.45-6.05 2.3-6.5 6.5-.45-4.2-2.3-6.05-6.5-6.5C9.7 8.05 11.55 6.2 12 2z"})})},"YouTubePlayIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 68 48",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("path",{d:"M66.5 7.5a8.5 8.5 0 0 0-6-6C55.2 0 34 0 34 0S12.8 0 7.5 1.5a8.5 8.5 0 0 0-6 6A89 89 0 0 0 0 24a89 89 0 0 0 1.5 16.5 8.5 8.5 0 0 0 6 6C12.8 48 34 48 34 48s21.2 0 26.5-1.5a8.5 8.5 0 0 0 6-6A89 89 0 0 0 68 24a89 89 0 0 0-1.5-16.5z",fill:"#FF0000"}),(0,t.jsx)("path",{d:"M27.2 34.29 44.85 24 27.2 13.71v20.58z",fill:"#fff"})]})}])},756903,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(339415),a=e.i(549838);let r=(0,i.createContext)(null);function o(){let e=(0,i.useContext)(r);if(!e)throw Error("useRcbModal must be used within a modal provider");return e}let l={brand:{variant:"primary",color:"brand"},success:{variant:"primary",color:"success"},neutral:{variant:"primary",color:"neutral"},dark:{variant:"primary",color:"neutral"},outline:{variant:"secondary",color:"brand"}};e.s(["ModalCtaButton",0,function({cta:e,color:i="brand",size:r="large",fullWidth:s,className:d,leadingIcon:c,trailingIcon:u,ariaLabel:p}){let{open:h}=o(),{variant:f,color:m}=l[i],x="large"===r;return(0,t.jsxs)(n.default,{variant:f,color:m,size:r,onClick:()=>h(e),"data-from":e.from,"aria-label":p,style:{"--font-size":x?"16px":"14px","--line-height":x?"26px":"20px","--font-weight-semibold":"600"},className:(0,a.cn)(s&&"w-full! md:w-auto!",x?"h-14! px-5!":"h-10! px-4! md:h-12! md:px-5!",d),children:[c,e.label,u]})},"RcbModalContext",0,r,"useRcbModal",0,o])},262986,e=>{"use strict";var t=e.i(843476),i=e.i(3303),n=e.i(725526);e.s(["Clarity",0,function({projectIds:e,gateOnInteraction:a=!1}){let r=(0,n.useDeferUntilInteraction)(),o=e.filter(Boolean);return 0===o.length||a&&!r?null:(0,t.jsx)(i.default,{id:"ms-clarity",strategy:a?"afterInteractive":"lazyOnload",dangerouslySetInnerHTML:{__html:`${JSON.stringify(o)}.forEach(function(id){(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script",id)});`}})}])},760727,e=>{"use strict";var t=e.i(843476),i=e.i(3303),n=e.i(725526);e.s(["LinkedInInsight",0,function({partnerIds:e,gateOnInteraction:a=!1}){let r=(0,n.useDeferUntilInteraction)(),o=e.filter(Boolean);return 0===o.length?null:(0,t.jsxs)(t.Fragment,{children:[(!a||r)&&(0,t.jsx)(i.default,{id:"linkedin-insight",strategy:a?"afterInteractive":"lazyOnload",dangerouslySetInnerHTML:{__html:`window._linkedin_partner_id=${JSON.stringify(o[0])};window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];${JSON.stringify(o)}.forEach(function(id){window._linkedin_data_partner_ids.push(id)});(function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b,s);})(window.lintrk);`}}),(0,t.jsx)("noscript",{children:o.map(e=>(0,t.jsx)("img",{height:"1",width:"1",style:{display:"none"},alt:"","aria-hidden":"true",src:`https://px.ads.linkedin.com/collect/?pid=${e}&fmt=gif`},e))})]})}])},511604,e=>{e.v(t=>Promise.all(["static/chunks/2-et_hho2aqvl.js"].map(t=>e.l(t))).then(()=>t(164436)))},896615,e=>{e.v(t=>Promise.all(["static/chunks/3klltxhcaam25.js"].map(t=>e.l(t))).then(()=>t(980954)))},401485,e=>{e.v(t=>Promise.all(["static/chunks/3363k0g8j073u.js","static/chunks/2n-gidy722xtj.js"].map(t=>e.l(t))).then(()=>t(873987)))},179909,e=>{e.v(t=>Promise.all(["static/chunks/41kj1t47-_n25.js"].map(t=>e.l(t))).then(()=>t(285692)))},628574,e=>{e.v(t=>Promise.all(["static/chunks/2qirsm4ul044n.js"].map(t=>e.l(t))).then(()=>t(218568)))},490258,e=>{e.v(t=>Promise.all(["static/chunks/2s87rp7nfrl4_.js"].map(t=>e.l(t))).then(()=>t(322465)))},15086,e=>{e.v(t=>Promise.all(["static/chunks/36smk6w2al07x.js"].map(t=>e.l(t))).then(()=>t(269275)))},134362,e=>{e.v(t=>Promise.all(["static/chunks/24_vd97z020im.js"].map(t=>e.l(t))).then(()=>t(57400)))},278533,e=>{e.v(t=>Promise.all(["static/chunks/2dsmc-m5l6-0x.js"].map(t=>e.l(t))).then(()=>t(906322)))}]);