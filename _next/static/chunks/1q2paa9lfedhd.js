(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,818581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return a}});let n=e.r(271645);function a(e,t){let r=(0,n.useRef)(null),a=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(r.current=i(e,n)),t&&(a.current=i(t,n))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},756903,e=>{"use strict";var t=e.i(843476),r=e.i(271645),n=e.i(339415),a=e.i(549838);let i=(0,r.createContext)(null);function o(){let e=(0,r.useContext)(i);if(!e)throw Error("useRcbModal must be used within a modal provider");return e}let l={brand:{variant:"primary",color:"brand"},success:{variant:"primary",color:"success"},neutral:{variant:"primary",color:"neutral"},dark:{variant:"primary",color:"neutral"},outline:{variant:"secondary",color:"brand"}};e.s(["ModalCtaButton",0,function({cta:e,color:r="brand",size:i="large",fullWidth:s,className:u,leadingIcon:c,trailingIcon:d,ariaLabel:f}){let{open:p}=o(),{variant:h,color:m}=l[r],v="large"===i;return(0,t.jsxs)(n.default,{variant:h,color:m,size:i,onClick:()=>p(e),"data-from":e.from,"aria-label":f,style:{"--font-size":v?"16px":"14px","--line-height":v?"26px":"20px","--font-weight-semibold":"600"},className:(0,a.cn)(s&&"w-full! md:w-auto!",v?"h-14! px-5!":"h-10! px-4! md:h-12! md:px-5!",u),children:[c,e.label,d]})},"RcbModalContext",0,i,"useRcbModal",0,o])},397681,e=>{"use strict";var t=e.i(893347),r=e.i(773892),n=e.i(364072),a=e.i(189101),i=e.i(824511),o=e.i(88653),l=e.i(271645),s=e.i(997053),u=(0,s.styled)(i.m.div)`
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
`,d=s.styled.div`
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
`;var m=s.styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: var(--spacing-8px, 8px);

    ${({$justifyContent:e})=>e&&s.css`
            justify-content: ${e};
        `}
`,v=s.styled.div`
    width: 100%;
    position: relative;

    img {
        width: 100%;
        border-radius: var(--corner-radius-8px, 8px);
    }
`,x={slide:{variants:{hidden:{opacity:0,y:-50},visible:{opacity:1,y:0},exit:{opacity:0,y:50}},transition:{duration:.3}},"slide-reverse":{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0},exit:{opacity:0,y:-50}},transition:{duration:.3}},fade:{variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},transition:{duration:.3}},emanate:{}},g=(0,l.forwardRef)(({width:e,height:t,minHeight:r,minWidth:n,maxHeight:a,maxWidth:i,mobileBottomFullWidth:o,modalPadding:s,border:c,children:d,...f},p)=>l.default.createElement(u,{ref:p,$width:e,$height:t,$minHeight:r,$minWidth:n,$maxHeight:a,$maxWidth:i,$mobileBottomFullWidth:o,$modalPadding:s,$border:c,...f},d)),y=(0,l.forwardRef)(({justifyContent:e,children:t},r)=>l.default.createElement(m,{ref:r,$justifyContent:e},t)),b=(0,l.forwardRef)(({overflow:e,children:t,...r},n)=>l.default.createElement(c,{ref:n,$overflow:e,...r},t)),w=(0,l.forwardRef)(({children:e,...t},r)=>l.default.createElement(v,{ref:r,...t},e)),C=(0,l.forwardRef)(({children:e,...t},r)=>l.default.createElement(f,{ref:r,...t},e)),E=(0,l.forwardRef)(({children:e,...t},r)=>l.default.createElement(p,{ref:r,...t},e)),k=(0,l.forwardRef)(({modalBodyMargin:e,children:t,...r},n)=>l.default.createElement(h,{ref:n,$modalBodyMargin:e,...r},t)),_=(0,l.forwardRef)(({...e},t)=>l.default.createElement(d,{ref:t,...e})),j=(0,l.forwardRef)((e,i)=>{let{isOpen:s=!0,banner:d=null,title:g=null,description:y=null,body:b=null,action:w=null,height:C="auto",width:E="500px",minHeight:k=null,minWidth:_=null,maxHeight:j="95vh",maxWidth:S="95vw",onHide:R=()=>{},onClose:P=()=>{},mobileBottomFullWidth:N=!1,modalPadding:M="20px",border:$="1px solid var(--border-subtle-primary-default, #e1e5ea)",modalBodyMargin:L=null,showCloseButton:O=!1,hideOnClickAway:A=!1,blurBackground:T=!1,animatePresence:B="fade",clickEvent:I=null,children:D=null,shouldFocusOnFirstElement:U=!0,shouldDisableScroll:z=!0,overflow:F="visible",className:K}=e,q=(0,l.useRef)(null),W=()=>{"function"==typeof R&&R(),"function"==typeof P&&P()};(0,l.useImperativeHandle)(i,()=>q.current),(0,r.useDisableBodyScroll_default)(s),(0,r.useKeyboardEvent_default)({onKeyPress:()=>{A&&W()},keyCodes:["Escape"],config:{shouldDetect:s}});let V=(0,l.useId)(),Y=(0,l.useMemo)(()=>{var e,t;return e=B,t=I,"emanate"===e?"number"==typeof(null==t?void 0:t.clientX)&&"number"==typeof(null==t?void 0:t.clientY)?((e,t)=>{let r,n;try{r=e-window.innerWidth/2,n=t-window.innerHeight/2}catch(e){r=0,n=0}return{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{scale:0,opacity:0,x:r,y:n},visible:{scale:1,opacity:1,x:0,y:0},exit:{scale:0,opacity:0,x:r,y:n}},transition:{duration:.3}}})(t.clientX,t.clientY):{}:{initial:"hidden",animate:"visible",exit:"exit",...e?x[e]:{}}},[B,I]),G=(0,l.useMemo)(()=>(({isOpen:e,animatePresence:t,clickEvent:r})=>!!e&&("emanate"!==t||"number"==typeof(null==r?void 0:r.clientX)&&"number"==typeof(null==r?void 0:r.clientY)))({isOpen:s,animatePresence:B,clickEvent:I}),[s,B,I]);return l.default.createElement(n.motion_default,null,l.default.createElement(o.AnimatePresence,null,G&&l.default.createElement(t.Overlay_default,{shouldDisableScroll:z,onOverlayClick:()=>{A&&W()},shouldTintOverlay:!0,shouldBlurOverlay:T,shouldCenterContent:!0,"data-testid":"testid-modalwrapper",className:K,animationDuration:.3,shouldFocusOnFirstElement:U},l.default.createElement(u,{onClick:e=>e.stopPropagation(),ref:q,$width:E,$height:C,$minHeight:k,$minWidth:_,$maxHeight:j,$maxWidth:S,$mobileBottomFullWidth:N,$modalPadding:M,$border:$,"aria-labelledby":`modal-title-${V}`,"aria-describedby":`modal-description-${V}`,"aria-modal":"true",role:"dialog","data-testid":"testid-modal",...Y},l.default.createElement(c,{$overflow:F},O&&l.default.createElement(m,{$justifyContent:"end"},l.default.createElement(a.IconButton_default,{onClick:W,size:"small",variant:"tertiary",color:"neutral",icon:"close",ariaLabel:"Close",buttonProps:{autoFocus:!0}})),d&&l.default.createElement(v,null,d),g&&l.default.createElement(f,{id:`modal-title-${V}`},g),y&&l.default.createElement(p,{id:`modal-description-${V}`},y),b&&l.default.createElement(h,{$modalBodyMargin:L},b),D&&l.default.createElement(h,{$modalBodyMargin:L},D)),w&&l.default.createElement(m,null,w)))))});j.Modal=g,j.Main=b,j.Banner=w,j.Title=C,j.Description=E,j.Body=k,j.Action=y,j.Divider=_,e.s(["NSModal",0,j],397681)},914984,e=>{"use strict";var t=e.i(843476);e.s(["ArrowRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M5 12h14m0 0-6-6m6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronLeftIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m15 6-6 6 6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m9 6 6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"CloseIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M6 6l12 12M18 6 6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"RadioUncheckedIcon",0,function({className:e}){return(0,t.jsx)("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":!0,focusable:"false",className:e,children:(0,t.jsx)("path",{d:"M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 14.6 5.4 18.3333 10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667ZM10 16.6667C6.31667 16.6667 3.33333 13.6833 3.33333 10C3.33333 6.31667 6.31667 3.33333 10 3.33333C13.6833 3.33333 16.6667 6.31667 16.6667 10C16.6667 13.6833 13.6833 16.6667 10 16.6667Z",fill:"currentColor"})})},"SparkIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M12 2c.45 4.2 2.3 6.05 6.5 6.5-4.2.45-6.05 2.3-6.5 6.5-.45-4.2-2.3-6.05-6.5-6.5C9.7 8.05 11.55 6.2 12 2z"})})},"YouTubePlayIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 68 48",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("path",{d:"M66.5 7.5a8.5 8.5 0 0 0-6-6C55.2 0 34 0 34 0S12.8 0 7.5 1.5a8.5 8.5 0 0 0-6 6A89 89 0 0 0 0 24a89 89 0 0 0 1.5 16.5 8.5 8.5 0 0 0 6 6C12.8 48 34 48 34 48s21.2 0 26.5-1.5a8.5 8.5 0 0 0 6-6A89 89 0 0 0 68 24a89 89 0 0 0-1.5-16.5z",fill:"#FF0000"}),(0,t.jsx)("path",{d:"M27.2 34.29 44.85 24 27.2 13.71v20.58z",fill:"#fff"})]})}])},680395,e=>{"use strict";let t="ns_rcb_unlock_v2";function r(){let e=function(e,t){try{let r=e().getItem(t);if(!r)return null;return JSON.parse(r)}catch{return null}}(()=>window.sessionStorage,t);if(!e||1!==e.v||!e.profile)return null;let r=e.profile;return"string"==typeof r.fullName&&"string"==typeof r.phone&&r.fullName.trim()&&10===r.phone.replace(/\D/g,"").length?{fullName:r.fullName,phone:r.phone,email:"string"==typeof r.email?r.email:"",whatsapp:!!r.whatsapp,qualifierAnswers:r.qualifierAnswers&&"object"==typeof r.qualifierAnswers?r.qualifierAnswers:{},savedAt:"number"==typeof r.savedAt?r.savedAt:0}:null}e.s(["DEFAULT_RCB_QUALIFIER_KEYS",0,["highest_qualification","graduation_year"],"isLeadUnlocked",0,function(){return null!==r()},"mergeUnlockProfile",0,function(e){let n=r();!function(e,t,r){try{e().setItem(t,JSON.stringify(r))}catch{return!1}}(()=>window.sessionStorage,t,{v:1,profile:{fullName:e.fullName,phone:e.phone,email:e.email,whatsapp:e.whatsapp,qualifierAnswers:{...n?.qualifierAnswers,...e.qualifierAnswers},savedAt:Date.now()}})},"normalizeQualifierValue",0,function(e){return e.replace(/[\u200B\u200C\u200D\u2060\uFEFF]/g,"").trim()},"readUnlockProfile",0,r])},356105,527341,e=>{"use strict";var t=e.i(271645),r=e.i(336835);let n="multi_step_rcb_form_partial_fill_hash";function a(e){try{return window.localStorage.getItem(e)??""}catch{return""}}function i(e,t){try{window.localStorage.setItem(e,t)}catch{}}function o(e){try{window.localStorage.removeItem(e)}catch{}}e.s(["usePartialRcb",0,function(e){let l=e?.resumeStoredHash??!0,s=e?.filedScope?"multi_step_rcb_form_filed_hash:"+e.filedScope:"",u=(0,t.useRef)(s);u.current=s;let c=(0,t.useRef)(!1),d=(0,t.useRef)(e?.onHash);d.current=e?.onHash;let f=(0,t.useRef)(e?.hashSource);f.current=e?.hashSource;let p=(0,t.useRef)(""),h=(0,t.useRef)(""),m=(0,t.useRef)(Promise.resolve());return(0,t.useEffect)(()=>{if(!l)return;let e=u.current?a(u.current):"";e?(p.current=e,c.current=!0):p.current=a(n)},[]),{save:(0,t.useCallback)((e,t=!1,{updateLsq:a=!1,keepHash:s=!1}={})=>{let v=async()=>{let m;if(!t&&!(e.fullName.trim()||e.phone.trim()||e.email.trim()||Object.values(e.qualifiers).some(Boolean))||!t&&!a&&c.current)return{ok:!0};let v=JSON.stringify({input:e,updateLsq:a});return t||v!==h.current?((h.current=v,!p.current&&f.current&&(p.current=f.current()),p.current)?m=await (0,r.updateRcb)(p.current,e,t,a):(m=await (0,r.createRcb)(e,t,a)).ok&&m.hash&&(p.current=m.hash,d.current?.(m.hash),l&&i(n,m.hash)),m.ok||h.current!==v||(h.current=""),m.ok&&l&&(t||a)&&(o(n),u.current&&(s&&!t?i(u.current,p.current):o(u.current))),{ok:m.ok,error:m.error}):(a&&!s&&l&&(o(n),u.current&&o(u.current)),{ok:!0})},x=m.current.then(v,v);return m.current=x.catch(()=>{}),x},[l])}}],356105);var l=e.i(680395),s=e.i(58863);let u=/^[a-z ,.'-]+$/i,c=/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;e.s(["buildRcbInput",0,function(e){return{fullName:e.name,phone:e.phone,email:e.email,qualifiers:e.answers,whatsapp:e.whatsapp,from:e.from,parentUrl:e.parentUrl,nextUrl:e.nextUrl,utmParams:(0,s.getUtmParams)(),responseType:e.responseType,formVariant:e.formVariant,...e.extraLeadFields?{extraLeadFields:e.extraLeadFields}:{}}},"flattenRcbSteps",0,function(e){return e.flatMap(e=>e.questions)},"rcbContactErrorMessage",0,function(e,t){switch(e){case"name":return t.trim()?"Full Name can only contain alphabets":"Full Name is Required";case"phone":return t?"Invalid Phone Number":"Phone Number is Required";case"email":return t.trim()?"Enter a valid email address":"Email is Required"}},"rcbContactErrors",0,function({name:e,phone:t,email:r},{requireEmail:n}){return{name:0===e.trim().length||!u.test(e.trim()),phone:10!==t.replace(/\D/g,"").length,email:!!n&&!c.test(r.trim())}},"seedAnswers",0,function(e,t){if(!e)return{};let r={};for(let n of t){let t=e.qualifierAnswers[n.key];if(!t)continue;let a=n.items.find(e=>(0,l.normalizeQualifierValue)(e.value)===(0,l.normalizeQualifierValue)(t));a&&(r[n.key]=a.value)}return r}],527341)},409954,e=>{"use strict";var t=e.i(843476);e.i(914984),e.s(["ArrowDownIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M12 4v16m0 0-6-6m6 6 6-6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"CalendarIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("rect",{x:"3.5",y:"5",width:"17",height:"15",rx:"2",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]})},"CheckCircleIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"m8.5 12.4 2.5 2.5L16 9.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})},"ClockIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"8.25",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"M12 7.5V12l3 2",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})]})}])},961523,e=>{"use strict";e.i(409954),e.s([])},195057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return l},formatWithValidation:function(){return u},urlObjectKeys:function(){return s}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let i=e.r(190809)._(e.r(998183)),o=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,n=e.protocol||"",a=e.pathname||"",l=e.hash||"",s=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:r&&(u=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(u+=":"+e.port)),s&&"object"==typeof s&&(s=String(i.urlQueryToSearchParams(s)));let c=e.search||s&&`?${s}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||o.test(n))&&!1!==u?(u="//"+(u||""),a&&"/"!==a[0]&&(a="/"+a)):u||(u=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),a=a.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${n}${u}${a}${c}${l}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return l(e)}},573668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=e.r(718967),a=e.r(652817);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,a.hasBasePath)(r.pathname)}catch(e){return!1}}},284508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},522016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return x},useLinkStatus:function(){return y}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let i=e.r(190809),o=e.r(843476),l=i._(e.r(271645)),s=e.r(195057),u=e.r(8372),c=e.r(818581),d=e.r(718967),f=e.r(405550);e.r(233525);let p=e.r(388540),h=e.r(91949),m=e.r(573668),v=e.r(509396);function x(t){var r,n;let a,i,x,[y,b]=(0,l.useOptimistic)(h.IDLE_LINK_STATUS),w=(0,l.useRef)(null),{href:C,as:E,children:k,prefetch:_=null,passHref:j,replace:S,shallow:R,scroll:P,onClick:N,onMouseEnter:M,onTouchStart:$,legacyBehavior:L=!1,onNavigate:O,transitionTypes:A,ref:T,unstable_dynamicOnHover:B,...I}=t;a=k,L&&("string"==typeof a||"number"==typeof a)&&(a=(0,o.jsx)("a",{children:a}));let D=l.default.useContext(u.AppRouterContext),U=!1!==_,z=!1!==_?null===(n=_)||"auto"===n?v.FetchStrategy.PPR:v.FetchStrategy.Full:v.FetchStrategy.PPR,F="string"==typeof(r=E||C)?r:(0,s.formatUrl)(r);if(L){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});i=l.default.Children.only(a)}let K=L?i&&"object"==typeof i&&i.ref:T,q=l.default.useCallback(e=>(null!==D&&(w.current=(0,h.mountLinkInstance)(e,F,D,z,U,b)),()=>{w.current&&((0,h.unmountLinkForCurrentNavigation)(w.current),w.current=null),(0,h.unmountPrefetchableInstance)(e)}),[U,F,D,z,b]),W={ref:(0,c.useMergedRef)(q,K),onClick(t){L||"function"!=typeof N||N(t),L&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),!D||t.defaultPrevented||function(t,r,n,a,i,o,s){if("u">typeof window){let u,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((u=t.currentTarget.getAttribute("target"))&&"_self"!==u||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){a&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(699781);l.default.startTransition(()=>{d(r,a?"replace":"push",!1===i?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,n.current,s)})}}(t,F,w,S,P,O,A)},onMouseEnter(e){L||"function"!=typeof M||M(e),L&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),D&&U&&(0,h.onNavigationIntent)(e.currentTarget,!0===B)},onTouchStart:function(e){L||"function"!=typeof $||$(e),L&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),D&&U&&(0,h.onNavigationIntent)(e.currentTarget,!0===B)}};return(0,d.isAbsoluteUrl)(F)?W.href=F:L&&!j&&("a"!==i.type||"href"in i.props)||(W.href=(0,f.addBasePath)(F)),x=L?l.default.cloneElement(i,W):(0,o.jsx)("a",{...I,...W,children:a}),(0,o.jsx)(g.Provider,{value:y,children:x})}e.r(284508);let g=(0,l.createContext)(h.IDLE_LINK_STATUS),y=()=>(0,l.useContext)(g);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},674895,e=>{"use strict";var t=e.i(688921);let r=t.EVENT_TYPE.CLICK,n="/data-science-brochure",a={BROCHURE_GATE:"blur-cta-rcb",STICKY_SECURE:"Urgency_Seat_Prospect"},i={PAGE_LOAD:{eventType:t.EVENT_TYPE.PAGE_LOAD,eventName:"page_view"},BROCHURE_GATE_CLICK:{eventType:r,eventName:"blur-cta-rcb"},STICKY_SECURE_CLICK:{eventType:r,eventName:"Urgency_Seat_Prospect"},MODAL_OPEN:{eventType:r,eventName:"dsb_modal_open"},MODAL_CLOSE:{eventType:r,eventName:"dsb_modal_close"}},o={[a.BROCHURE_GATE]:i.BROCHURE_GATE_CLICK,[a.STICKY_SECURE]:i.STICKY_SECURE_CLICK};e.s(["DSB_EVENTS",0,i,"DSB_PAGE_NAME",0,n,"FROM",0,a,"FROM_EVENT",0,o,"buildEventData",0,function(e={}){return(0,t.buildEventData)(e,n)},"fireLivePageGtag",0,function(e){(0,t.fireLivePageGtag)({...e,pageName:n})}])},981580,e=>{"use strict";var t=e.i(271645),r=e.i(851361),n=e.i(674895);e.s(["PageViewTracker",0,function(){let e=(0,r.useSendAnalyticsEvent)();return(0,t.useEffect)(()=>{e({...n.DSB_EVENTS.PAGE_LOAD,eventData:(0,n.buildEventData)()}),(0,n.fireLivePageGtag)({eventType:n.DSB_EVENTS.PAGE_LOAD.eventType,eventName:n.DSB_EVENTS.PAGE_LOAD.eventName})},[]),null}])},699771,e=>{"use strict";var t=e.i(843476),r=e.i(271645),n=e.i(397681),a=e.i(549838),i=e.i(914984),o=e.i(85842),l=e.i(680395),s=e.i(851361),u=e.i(674895),c=e.i(703109);e.i(961523);var d=e.i(409954);function f(){return(0,t.jsxs)("div",{className:"flex flex-col items-center gap-3 px-2 py-8 text-center",children:[(0,t.jsx)(d.CheckCircleIcon,{className:"text-ds-green size-12"}),(0,t.jsx)(c.default,{as:"p",variant:"paragraph-sb-p1",color:"var(--color-ds-ink)",children:"Request Successful"}),(0,t.jsx)(c.default,{as:"p",variant:"paragraph-md-p3",color:"var(--color-ds-muted)",className:"max-w-xs",children:"Thanks for reaching out! Our team will get in touch with you shortly."})]})}var p=e.i(756903);e.s(["RcbModalProvider",0,function({children:e}){let[c,d]=(0,r.useState)(null),[h,m]=(0,r.useState)(void 0),v=(0,r.useRef)(null),x=(0,s.useSendAnalyticsEvent)(),g=(0,r.useCallback)(e=>{v.current=document.activeElement??null;let t=u.FROM_EVENT[e.from],r=(0,u.buildEventData)({from:e.from,heading:e.heading,mode:"rcb"});t&&(x({...t,eventData:r}),(0,u.fireLivePageGtag)({eventName:t.eventName,from:e.from})),x({...u.DSB_EVENTS.MODAL_OPEN,eventData:r}),m((e.mode??"rcb")==="signup"?void 0:(0,l.readUnlockProfile)()??void 0),d(e)},[x]),y=(0,r.useCallback)(()=>{d(e=>(e&&x({...u.DSB_EVENTS.MODAL_CLOSE,eventData:(0,u.buildEventData)({from:e.from,heading:e.heading})}),null)),m(void 0),v.current?.focus?.()},[x]),b=(0,r.useMemo)(()=>({open:g,isCtaModalOpen:null!==c,counsellingPopupOpen:!1,setCounsellingPopupOpen:()=>{}}),[g,c]);return(0,t.jsxs)(p.RcbModalContext.Provider,{value:b,children:[e,(0,t.jsx)(n.NSModal,{isOpen:null!==c,onClose:y,hideOnClickAway:!0,showCloseButton:!1,width:"420px",border:"none",animatePresence:"fade",overflow:"hidden",modalPadding:"0",children:c&&(0,t.jsxs)("div",{className:"relative",style:{textAlign:"left"},children:[(0,t.jsx)("button",{type:"button",onClick:y,"aria-label":"Close",className:(0,a.cn)("text-ds-muted hover:bg-ds-surface absolute top-2 right-2 z-10 flex size-9 cursor-pointer items-center justify-center rounded-full"),children:(0,t.jsx)(i.CloseIcon,{className:"size-5"})}),(0,t.jsx)(o.RcbForm,{from:c.from,heading:c.heading??"Request a callback",nextUrl:c.nextUrl,brochure:c.brochure,prefill:h,autoSubmit:!!h,successSlot:(0,t.jsx)(f,{}),pageName:u.DSB_PAGE_NAME})]})})]})}],699771)},119741,e=>{"use strict";var t=e.i(843476);e.i(699771);var r=e.i(756903);e.s(["ModalOpenButton",0,function({cta:e,className:n,children:a,id:i,"aria-label":o}){let{open:l}=(0,r.useRcbModal)();return(0,t.jsx)("button",{type:"button",id:i,"data-from":e.from,"aria-label":o,onClick:()=>l(e),className:n,children:a})}])},884595,e=>{"use strict";var t=e.i(699771),r=e.i(756903);e.s(["RcbModalProvider",()=>t.RcbModalProvider,"useRcbModal",()=>r.useRcbModal])},880300,e=>{"use strict";var t=e.i(843476);e.i(699771);var r=e.i(756903),n=e.i(674895);e.s(["StickyBanner",0,function(){let{open:e}=(0,r.useRcbModal)();return(0,t.jsx)("div",{className:"fixed inset-x-0 bottom-0 z-[900] block bg-[#0673f9] py-2 text-white",children:(0,t.jsxs)("div",{className:"mx-auto flex w-full flex-col items-center justify-center gap-2 px-[5%] min-[480px]:flex-row min-[480px]:gap-0 min-[480px]:px-0",children:[(0,t.jsx)("div",{className:"mt-2 flex items-center min-[480px]:mt-0 min-[480px]:mr-6",children:(0,t.jsx)("span",{className:"text-center text-[16px] leading-[1.8] font-semibold min-[480px]:text-[14px]",children:"🚨 Last 2 Scholarship Seats Left"})}),(0,t.jsx)("button",{id:"brochure-page-secure-your-seat-now",type:"button","data-from":n.FROM.STICKY_SECURE,onClick:()=>e({label:"Secure Your Seat Now",from:n.FROM.STICKY_SECURE,mode:"rcb",heading:"Secure Your Seat Now"}),className:"w-full rounded-[8px] bg-white px-4 py-2 text-center text-[14px] leading-[1.6] font-semibold tracking-[0.4px] text-[#16191d] transition-colors hover:bg-white/90 min-[480px]:w-auto min-[480px]:py-1.5",children:"Secure Your Seat Now"})]})})}])},511604,e=>{e.v(t=>Promise.all(["static/chunks/2-et_hho2aqvl.js"].map(t=>e.l(t))).then(()=>t(164436)))},896615,e=>{e.v(t=>Promise.all(["static/chunks/3klltxhcaam25.js"].map(t=>e.l(t))).then(()=>t(980954)))},401485,e=>{e.v(t=>Promise.all(["static/chunks/3363k0g8j073u.js","static/chunks/2n-gidy722xtj.js"].map(t=>e.l(t))).then(()=>t(873987)))},179909,e=>{e.v(t=>Promise.all(["static/chunks/41kj1t47-_n25.js"].map(t=>e.l(t))).then(()=>t(285692)))},628574,e=>{e.v(t=>Promise.all(["static/chunks/2qirsm4ul044n.js"].map(t=>e.l(t))).then(()=>t(218568)))},490258,e=>{e.v(t=>Promise.all(["static/chunks/2s87rp7nfrl4_.js"].map(t=>e.l(t))).then(()=>t(322465)))},15086,e=>{e.v(t=>Promise.all(["static/chunks/36smk6w2al07x.js"].map(t=>e.l(t))).then(()=>t(269275)))},134362,e=>{e.v(t=>Promise.all(["static/chunks/24_vd97z020im.js"].map(t=>e.l(t))).then(()=>t(57400)))},278533,e=>{e.v(t=>Promise.all(["static/chunks/2dsmc-m5l6-0x.js"].map(t=>e.l(t))).then(()=>t(906322)))}]);