(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,756903,e=>{"use strict";var t=e.i(843476),r=e.i(271645),n=e.i(339415),i=e.i(549838);let a=(0,r.createContext)(null);function l(){let e=(0,r.useContext)(a);if(!e)throw Error("useRcbModal must be used within a modal provider");return e}let o={brand:{variant:"primary",color:"brand"},success:{variant:"primary",color:"success"},neutral:{variant:"primary",color:"neutral"},dark:{variant:"primary",color:"neutral"},outline:{variant:"secondary",color:"brand"}};e.s(["ModalCtaButton",0,function({cta:e,color:r="brand",size:a="large",fullWidth:s,className:d,leadingIcon:u,trailingIcon:c,ariaLabel:f}){let{open:p}=l(),{variant:m,color:h}=o[r],x="large"===a;return(0,t.jsxs)(n.default,{variant:m,color:h,size:a,onClick:()=>p(e),"data-from":e.from,"aria-label":f,style:{"--font-size":x?"16px":"14px","--line-height":x?"26px":"20px","--font-weight-semibold":"600"},className:(0,i.cn)(s&&"w-full! md:w-auto!",x?"h-14! px-5!":"h-10! px-4! md:h-12! md:px-5!",d),children:[u,e.label,c]})},"RcbModalContext",0,a,"useRcbModal",0,l])},397681,e=>{"use strict";var t=e.i(893347),r=e.i(773892),n=e.i(364072),i=e.i(189101),a=e.i(824511),l=e.i(88653),o=e.i(271645),s=e.i(997053),d=(0,s.styled)(a.m.div)`
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
`,u=s.styled.div`
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
`,f=s.styled.h2`
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
`,m=s.styled.div`
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
`;var h=s.styled.div`
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
`,g={slide:{variants:{hidden:{opacity:0,y:-50},visible:{opacity:1,y:0},exit:{opacity:0,y:50}},transition:{duration:.3}},"slide-reverse":{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0},exit:{opacity:0,y:-50}},transition:{duration:.3}},fade:{variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},transition:{duration:.3}},emanate:{}},v=(0,o.forwardRef)(({width:e,height:t,minHeight:r,minWidth:n,maxHeight:i,maxWidth:a,mobileBottomFullWidth:l,modalPadding:s,border:u,children:c,...f},p)=>o.default.createElement(d,{ref:p,$width:e,$height:t,$minHeight:r,$minWidth:n,$maxHeight:i,$maxWidth:a,$mobileBottomFullWidth:l,$modalPadding:s,$border:u,...f},c)),b=(0,o.forwardRef)(({justifyContent:e,children:t},r)=>o.default.createElement(h,{ref:r,$justifyContent:e},t)),y=(0,o.forwardRef)(({overflow:e,children:t,...r},n)=>o.default.createElement(u,{ref:n,$overflow:e,...r},t)),w=(0,o.forwardRef)(({children:e,...t},r)=>o.default.createElement(x,{ref:r,...t},e)),j=(0,o.forwardRef)(({children:e,...t},r)=>o.default.createElement(f,{ref:r,...t},e)),k=(0,o.forwardRef)(({children:e,...t},r)=>o.default.createElement(p,{ref:r,...t},e)),C=(0,o.forwardRef)(({modalBodyMargin:e,children:t,...r},n)=>o.default.createElement(m,{ref:n,$modalBodyMargin:e,...r},t)),$=(0,o.forwardRef)(({...e},t)=>o.default.createElement(c,{ref:t,...e})),_=(0,o.forwardRef)((e,a)=>{let{isOpen:s=!0,banner:c=null,title:v=null,description:b=null,body:y=null,action:w=null,height:j="auto",width:k="500px",minHeight:C=null,minWidth:$=null,maxHeight:_="95vh",maxWidth:R="95vw",onHide:N=()=>{},onClose:S=()=>{},mobileBottomFullWidth:E=!1,modalPadding:M="20px",border:P="1px solid var(--border-subtle-primary-default, #e1e5ea)",modalBodyMargin:A=null,showCloseButton:L=!1,hideOnClickAway:O=!1,blurBackground:z=!1,animatePresence:B="fade",clickEvent:I=null,children:F=null,shouldFocusOnFirstElement:U=!0,shouldDisableScroll:T=!0,overflow:W="visible",className:D}=e,q=(0,o.useRef)(null),V=()=>{"function"==typeof N&&N(),"function"==typeof S&&S()};(0,o.useImperativeHandle)(a,()=>q.current),(0,r.useDisableBodyScroll_default)(s),(0,r.useKeyboardEvent_default)({onKeyPress:()=>{O&&V()},keyCodes:["Escape"],config:{shouldDetect:s}});let H=(0,o.useId)(),Q=(0,o.useMemo)(()=>{var e,t;return e=B,t=I,"emanate"===e?"number"==typeof(null==t?void 0:t.clientX)&&"number"==typeof(null==t?void 0:t.clientY)?((e,t)=>{let r,n;try{r=e-window.innerWidth/2,n=t-window.innerHeight/2}catch(e){r=0,n=0}return{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{scale:0,opacity:0,x:r,y:n},visible:{scale:1,opacity:1,x:0,y:0},exit:{scale:0,opacity:0,x:r,y:n}},transition:{duration:.3}}})(t.clientX,t.clientY):{}:{initial:"hidden",animate:"visible",exit:"exit",...e?g[e]:{}}},[B,I]),Y=(0,o.useMemo)(()=>(({isOpen:e,animatePresence:t,clickEvent:r})=>!!e&&("emanate"!==t||"number"==typeof(null==r?void 0:r.clientX)&&"number"==typeof(null==r?void 0:r.clientY)))({isOpen:s,animatePresence:B,clickEvent:I}),[s,B,I]);return o.default.createElement(n.motion_default,null,o.default.createElement(l.AnimatePresence,null,Y&&o.default.createElement(t.Overlay_default,{shouldDisableScroll:T,onOverlayClick:()=>{O&&V()},shouldTintOverlay:!0,shouldBlurOverlay:z,shouldCenterContent:!0,"data-testid":"testid-modalwrapper",className:D,animationDuration:.3,shouldFocusOnFirstElement:U},o.default.createElement(d,{onClick:e=>e.stopPropagation(),ref:q,$width:k,$height:j,$minHeight:C,$minWidth:$,$maxHeight:_,$maxWidth:R,$mobileBottomFullWidth:E,$modalPadding:M,$border:P,"aria-labelledby":`modal-title-${H}`,"aria-describedby":`modal-description-${H}`,"aria-modal":"true",role:"dialog","data-testid":"testid-modal",...Q},o.default.createElement(u,{$overflow:W},L&&o.default.createElement(h,{$justifyContent:"end"},o.default.createElement(i.IconButton_default,{onClick:V,size:"small",variant:"tertiary",color:"neutral",icon:"close",ariaLabel:"Close",buttonProps:{autoFocus:!0}})),c&&o.default.createElement(x,null,c),v&&o.default.createElement(f,{id:`modal-title-${H}`},v),b&&o.default.createElement(p,{id:`modal-description-${H}`},b),y&&o.default.createElement(m,{$modalBodyMargin:A},y),F&&o.default.createElement(m,{$modalBodyMargin:A},F)),w&&o.default.createElement(h,null,w)))))});_.Modal=v,_.Main=y,_.Banner=w,_.Title=j,_.Description=k,_.Body=C,_.Action=b,_.Divider=$,e.s(["NSModal",0,_],397681)},914984,e=>{"use strict";var t=e.i(843476);e.s(["ArrowRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M5 12h14m0 0-6-6m6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronLeftIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m15 6-6 6 6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m9 6 6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"CloseIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M6 6l12 12M18 6 6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"RadioUncheckedIcon",0,function({className:e}){return(0,t.jsx)("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":!0,focusable:"false",className:e,children:(0,t.jsx)("path",{d:"M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 14.6 5.4 18.3333 10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667ZM10 16.6667C6.31667 16.6667 3.33333 13.6833 3.33333 10C3.33333 6.31667 6.31667 3.33333 10 3.33333C13.6833 3.33333 16.6667 6.31667 16.6667 10C16.6667 13.6833 13.6833 16.6667 10 16.6667Z",fill:"currentColor"})})},"SparkIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M12 2c.45 4.2 2.3 6.05 6.5 6.5-4.2.45-6.05 2.3-6.5 6.5-.45-4.2-2.3-6.05-6.5-6.5C9.7 8.05 11.55 6.2 12 2z"})})},"YouTubePlayIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 68 48",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("path",{d:"M66.5 7.5a8.5 8.5 0 0 0-6-6C55.2 0 34 0 34 0S12.8 0 7.5 1.5a8.5 8.5 0 0 0-6 6A89 89 0 0 0 0 24a89 89 0 0 0 1.5 16.5 8.5 8.5 0 0 0 6 6C12.8 48 34 48 34 48s21.2 0 26.5-1.5a8.5 8.5 0 0 0 6-6A89 89 0 0 0 68 24a89 89 0 0 0-1.5-16.5z",fill:"#FF0000"}),(0,t.jsx)("path",{d:"M27.2 34.29 44.85 24 27.2 13.71v20.58z",fill:"#fff"})]})}])},680395,e=>{"use strict";let t="ns_rcb_unlock_v2";function r(){let e=function(e,t){try{let r=e().getItem(t);if(!r)return null;return JSON.parse(r)}catch{return null}}(()=>window.sessionStorage,t);if(!e||1!==e.v||!e.profile)return null;let r=e.profile;return"string"==typeof r.fullName&&"string"==typeof r.phone&&r.fullName.trim()&&10===r.phone.replace(/\D/g,"").length?{fullName:r.fullName,phone:r.phone,email:"string"==typeof r.email?r.email:"",whatsapp:!!r.whatsapp,qualifierAnswers:r.qualifierAnswers&&"object"==typeof r.qualifierAnswers?r.qualifierAnswers:{},savedAt:"number"==typeof r.savedAt?r.savedAt:0}:null}e.s(["DEFAULT_RCB_QUALIFIER_KEYS",0,["highest_qualification","graduation_year"],"isLeadUnlocked",0,function(){return null!==r()},"mergeUnlockProfile",0,function(e){let n=r();!function(e,t,r){try{e().setItem(t,JSON.stringify(r))}catch{return!1}}(()=>window.sessionStorage,t,{v:1,profile:{fullName:e.fullName,phone:e.phone,email:e.email,whatsapp:e.whatsapp,qualifierAnswers:{...n?.qualifierAnswers,...e.qualifierAnswers},savedAt:Date.now()}})},"normalizeQualifierValue",0,function(e){return e.replace(/[\u200B\u200C\u200D\u2060\uFEFF]/g,"").trim()},"readUnlockProfile",0,r])},356105,527341,e=>{"use strict";var t=e.i(271645),r=e.i(336835);let n="multi_step_rcb_form_partial_fill_hash";function i(e){try{return window.localStorage.getItem(e)??""}catch{return""}}function a(e,t){try{window.localStorage.setItem(e,t)}catch{}}function l(e){try{window.localStorage.removeItem(e)}catch{}}e.s(["usePartialRcb",0,function(e){let o=e?.resumeStoredHash??!0,s=e?.filedScope?"multi_step_rcb_form_filed_hash:"+e.filedScope:"",d=(0,t.useRef)(s);d.current=s;let u=(0,t.useRef)(!1),c=(0,t.useRef)(e?.onHash);c.current=e?.onHash;let f=(0,t.useRef)(e?.hashSource);f.current=e?.hashSource;let p=(0,t.useRef)(""),m=(0,t.useRef)(""),h=(0,t.useRef)(Promise.resolve());return(0,t.useEffect)(()=>{if(!o)return;let e=d.current?i(d.current):"";e?(p.current=e,u.current=!0):p.current=i(n)},[]),{save:(0,t.useCallback)((e,t=!1,{updateLsq:i=!1,keepHash:s=!1}={})=>{let x=async()=>{let h;if(!t&&!(e.fullName.trim()||e.phone.trim()||e.email.trim()||Object.values(e.qualifiers).some(Boolean))||!t&&!i&&u.current)return{ok:!0};let x=JSON.stringify({input:e,updateLsq:i});return t||x!==m.current?((m.current=x,!p.current&&f.current&&(p.current=f.current()),p.current)?h=await (0,r.updateRcb)(p.current,e,t,i):(h=await (0,r.createRcb)(e,t,i)).ok&&h.hash&&(p.current=h.hash,c.current?.(h.hash),o&&a(n,h.hash)),h.ok||m.current!==x||(m.current=""),h.ok&&o&&(t||i)&&(l(n),d.current&&(s&&!t?a(d.current,p.current):l(d.current))),{ok:h.ok,error:h.error}):(i&&!s&&o&&(l(n),d.current&&l(d.current)),{ok:!0})},g=h.current.then(x,x);return h.current=g.catch(()=>{}),g},[o])}}],356105);var o=e.i(680395),s=e.i(58863);let d=/^[a-z ,.'-]+$/i,u=/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;e.s(["buildRcbInput",0,function(e){return{fullName:e.name,phone:e.phone,email:e.email,qualifiers:e.answers,whatsapp:e.whatsapp,from:e.from,parentUrl:e.parentUrl,nextUrl:e.nextUrl,utmParams:(0,s.getUtmParams)(),responseType:e.responseType,formVariant:e.formVariant,...e.extraLeadFields?{extraLeadFields:e.extraLeadFields}:{}}},"flattenRcbSteps",0,function(e){return e.flatMap(e=>e.questions)},"rcbContactErrorMessage",0,function(e,t){switch(e){case"name":return t.trim()?"Full Name can only contain alphabets":"Full Name is Required";case"phone":return t?"Invalid Phone Number":"Phone Number is Required";case"email":return t.trim()?"Enter a valid email address":"Email is Required"}},"rcbContactErrors",0,function({name:e,phone:t,email:r},{requireEmail:n}){return{name:0===e.trim().length||!d.test(e.trim()),phone:10!==t.replace(/\D/g,"").length,email:!!n&&!u.test(r.trim())}},"seedAnswers",0,function(e,t){if(!e)return{};let r={};for(let n of t){let t=e.qualifierAnswers[n.key];if(!t)continue;let i=n.items.find(e=>(0,o.normalizeQualifierValue)(e.value)===(0,o.normalizeQualifierValue)(t));i&&(r[n.key]=i.value)}return r}],527341)},409954,e=>{"use strict";var t=e.i(843476);e.i(914984),e.s(["ArrowDownIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M12 4v16m0 0-6-6m6 6 6-6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"CalendarIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("rect",{x:"3.5",y:"5",width:"17",height:"15",rx:"2",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]})},"CheckCircleIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"m8.5 12.4 2.5 2.5L16 9.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})},"ClockIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"8.25",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"M12 7.5V12l3 2",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})]})}])},53461,e=>{"use strict";var t=e.i(271645);e.s(["useIsMobile",0,function(e=600){let[r,n]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let t=window.matchMedia(`(max-width: ${e}px)`),r=()=>n(t.matches);return r(),t.addEventListener("change",r),()=>t.removeEventListener("change",r)},[e]),r}])},571266,e=>{"use strict";var t=e.i(843476),r=e.i(549838);e.s(["DsContainer",0,function({as:e="div",className:n,children:i}){return(0,t.jsx)(e,{className:(0,r.cn)("mx-auto w-full max-w-[1200px] px-4",n),children:i})}])},667585,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"BailoutToCSR",{enumerable:!0,get:function(){return i}});let n=e.r(132061);function i({reason:e,children:t}){if("u"<typeof window)throw Object.defineProperty(new n.BailoutToCSRError(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return t}},309885,(e,t,r)=>{"use strict";function n(e){return e.split("/").map(e=>encodeURIComponent(e)).join("/")}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"encodeURIPath",{enumerable:!0,get:function(){return n}})},652157,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"PreloadChunks",{enumerable:!0,get:function(){return s}});let n=e.r(843476),i=e.r(174080),a=e.r(563599),l=e.r(309885),o=e.r(543369);function s({moduleIds:e}){if("u">typeof window)return null;let t=a.workAsyncStorage.getStore();if(void 0===t)return null;let r=[];if(t.reactLoadableManifest&&e){let n=t.reactLoadableManifest;for(let t of e){if(!n[t])continue;let e=n[t].files;r.push(...e)}}if(0===r.length)return null;let d=(0,o.getAssetTokenQuery)();return(0,n.jsx)(n.Fragment,{children:r.map(e=>{let r=`${t.assetPrefix}/_next/${(0,l.encodeURIPath)(e)}${d}`;return e.endsWith(".css")?(0,n.jsx)("link",{precedence:"dynamic",href:r,rel:"stylesheet",as:"style",nonce:t.nonce},e):((0,i.preload)(r,{as:"script",fetchPriority:"low",nonce:t.nonce}),null)})})}},869093,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return d}});let n=e.r(843476),i=e.r(271645),a=e.r(667585),l=e.r(652157);function o(e){return{default:e&&"default"in e?e.default:e}}let s={loader:()=>Promise.resolve(o(()=>null)),loading:null,ssr:!0},d=function(e){let t={...s,...e},r=(0,i.lazy)(()=>t.loader().then(o)),d=t.loading;function u(e){let o=d?(0,n.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,s=!t.ssr||!!t.loading,u=s?i.Suspense:i.Fragment,c=t.ssr?(0,n.jsxs)(n.Fragment,{children:["u"<typeof window?(0,n.jsx)(l.PreloadChunks,{moduleIds:t.modules}):null,(0,n.jsx)(r,{...e})]}):(0,n.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(r,{...e})});return(0,n.jsx)(u,{...s?{fallback:o}:{},children:c})}return u.displayName="LoadableComponent",u}},770703,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return i}});let n=e.r(555682)._(e.r(869093));function i(e,t){let r={};"function"==typeof e&&(r.loader=e);let i={...r,...t};return(0,n.default)({...i,modules:i.loadableGenerated?.modules})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},92829,e=>{"use strict";var t=e.i(843476);let r=(0,e.i(770703).default)(()=>e.A(623645),{loadableGenerated:{modules:[257532]},ssr:!1,loading:()=>null});e.s(["SuccessCheckmark",0,function({size:e=132,label:n="Submitted successfully"}){let i=e/132;return(0,t.jsx)("div",{className:"relative overflow-hidden",style:{width:e,height:e},...n?{role:"img","aria-label":n}:{"aria-hidden":!0},children:(0,t.jsx)("div",{className:"absolute",style:{left:-30.8*i,top:-31.9*i,width:194.7*i,height:194.7*i},children:(0,t.jsx)(r,{})})})}])},603064,e=>{"use strict";var t=e.i(843476),r=e.i(92829);e.s(["SubmissionSuccess",0,function(){return(0,t.jsxs)("div",{className:"flex flex-col items-center overflow-clip rounded-2xl bg-white text-center",children:[(0,t.jsx)("div",{className:"flex w-full justify-center bg-[rgba(217,252,237,0.3)] py-4",children:(0,t.jsx)(r.SuccessCheckmark,{})}),(0,t.jsxs)("div",{className:"flex w-full flex-col items-center gap-1",children:[(0,t.jsx)("p",{className:"font-ds text-lg leading-7 font-semibold tracking-[0.06px] text-[#16191d]",children:"Your submission was successful!"}),(0,t.jsx)("p",{className:"font-ds text-base leading-[26px] font-medium tracking-[0.1px] text-[#5b6271]",children:"Our team will reach out to you shortly."})]})]})}])},211269,e=>{"use strict";e.s(["PORTAL_FONT_CLASS",0,"grauity-portal-font font-ds [font-feature-settings:'ss01','cv11']"])},295455,e=>{"use strict";var t=e.i(843476),r=e.i(271645),n=e.i(770703),i=e.i(397681),a=e.i(549838),l=e.i(211269);e.i(409954);var o=e.i(914984),s=e.i(692156),d=e.i(85842),u=e.i(527341),c=e.i(680395),f=e.i(851361),p=e.i(756903);let m=(0,n.default)(()=>e.A(490643).then(e=>e.RcbMultiStepForm),{ssr:!1});e.s(["RcbModalProvider",0,function({analytics:e,applyConfig:n,rcbHeading:h="Request a callback",successSlot:x=null,overlay:g=null,contentClassName:v,pageName:b,qualifiers:y,formVariant:w,rcbSteps:j,rcbFlowForCta:k,mapCta:C,multiStepForm:$,children:_}){let R=$??m,[N,S]=(0,r.useState)(null),[E,M]=(0,r.useState)(!1),[P,A]=(0,r.useState)(void 0),L=(0,r.useRef)(null),O=(0,f.useSendAnalyticsEvent)(),z=(0,r.useCallback)(t=>{let r=C?C(t):t;L.current=document.activeElement??null,M(!1);let n=e.eventForCta(r),i=e.buildEventData({from:r.from,heading:r.heading,mode:r.mode??"rcb"});n&&(O({...n,eventData:i}),e.fireLivePageGtag({eventName:n.eventName,from:r.from})),O({...e.modalOpenEvent,eventData:i}),A((r.mode??"rcb")==="signup"?void 0:(0,c.readUnlockProfile)()??void 0),S(r)},[e,O,C]),B=(0,r.useCallback)(()=>{S(t=>(t&&O({...e.modalCloseEvent,eventData:e.buildEventData({from:t.from,heading:t.heading})}),null)),A(void 0),L.current?.focus?.()},[e,O]),I=(0,r.useMemo)(()=>({open:z,isCtaModalOpen:null!==N,counsellingPopupOpen:E,setCounsellingPopupOpen:M}),[z,N,E]),F=j?(0,u.flattenRcbSteps)(j):y,U=!F||F.every(e=>{let t=P?.qualifierAnswers?.[e.key];return!!t&&e.items.some(e=>(0,c.normalizeQualifierValue)(e.value)===(0,c.normalizeQualifierValue)(t))}),T=null!==N&&"signup"!==N.mode,W=T&&N?k?.(N):void 0,D=T&&(!!j||!!W);return(0,t.jsxs)(p.RcbModalContext.Provider,{value:I,children:[_,(0,t.jsx)(i.NSModal,{isOpen:null!==N,onClose:B,hideOnClickAway:!0,showCloseButton:!1,width:D?"500px":"420px",mobileBottomFullWidth:D,className:D?"max-[600px]:[&_[role=dialog]]:left-0":void 0,border:"none",animatePresence:"fade",overflow:"hidden",modalPadding:N?.mode==="signup"?void 0:"0",children:N&&(0,t.jsxs)("div",{className:(0,a.cn)("relative",l.PORTAL_FONT_CLASS,v),style:{textAlign:"left"},children:[(0,t.jsx)("button",{type:"button",onClick:B,"aria-label":"Close",className:(0,a.cn)("text-ds-muted hover:bg-ds-surface absolute z-10 flex size-9 cursor-pointer items-center justify-center rounded-full","signup"===N.mode?"top-1 right-1":D?"top-1.5 right-[18px] min-[601px]:top-3.5 min-[601px]:right-[22px]":"top-2 right-2"),children:(0,t.jsx)(o.CloseIcon,{className:D?"size-5 min-[601px]:size-6":"size-5"})}),"signup"===N.mode&&n?(0,t.jsx)("div",{className:"max-h-[calc(95svh-40px)] overflow-x-hidden overflow-y-auto",children:(0,t.jsx)(s.ApplyForm,{title:N.heading??n.title,courseType:n.courseType,urlSlug:n.urlSlug,config:n.config,pageName:b,surface:"modal"})}):W?(0,t.jsx)(R,{from:N.from,heading:W.heading??N.heading??h,screens:W.screens,nextUrl:W.nextUrl??N.nextUrl,brochure:N.brochure,eventData:W.eventData,pageName:b,formVariant:W.formVariant??w,prefill:P,successSlot:x}):j&&D?(0,t.jsx)(R,{from:N.from,heading:N.heading??h,steps:j,nextUrl:N.nextUrl,brochure:N.brochure,pageName:b,formVariant:w,prefill:P,autoSubmit:!!P&&U,successSlot:x}):(0,t.jsx)(d.RcbForm,{from:N.from,heading:N.heading??h,nextUrl:N.nextUrl,brochure:N.brochure,pageName:b,qualifiers:y,formVariant:w,prefill:P,autoSubmit:!!P&&U,successSlot:x})]})}),g]})}])},13017,182547,e=>{"use strict";var t=e.i(843476),r=e.i(271645),n=e.i(549838);let i={brand:"bg-[linear-gradient(90deg,#f8b34b_0%,#ec80b4_18%,#6157f8_55%,#00a1c1_76%)]",title:"bg-[linear-gradient(90deg,#f8b34b_36.058%,#ec80b4_59.135%,#6157f8_76.442%,#00a1c1_100%)]"};function a({variant:e="brand",className:r,children:l}){return(0,t.jsx)("span",{className:(0,n.cn)(i[e],"bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]",r),children:l})}e.s(["GradientText",0,a],182547),e.s(["RichText",0,function({spans:e,gradientVariant:i="brand"}){return(0,t.jsx)(t.Fragment,{children:e.map((e,l)=>e.gradient?(0,t.jsx)(a,{variant:i,className:e.className,children:e.text},l):e.highlight?(0,t.jsx)("span",{className:(0,n.cn)("text-ds-blue",e.className),children:e.text},l):e.className?(0,t.jsx)("span",{className:e.className,children:e.text},l):(0,t.jsx)(r.Fragment,{children:e.text},l))})}],13017)}]);