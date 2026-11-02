(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,397681,e=>{"use strict";var t=e.i(893347),i=e.i(773892),n=e.i(364072),r=e.i(189101),a=e.i(824511),l=e.i(88653),s=e.i(271645),o=e.i(997053),d=(0,o.styled)(a.m.div)`
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
`,u=o.styled.div`
    width: 100%;
    height: var(--spacing-1px, 1px);
    background: var(--border-subtle-primary-default, #e1e5ea);
`,p=o.styled.h2`
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
`,x=o.styled.div`
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
`,m=o.styled.div`
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
`;var h=o.styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: var(--spacing-8px, 8px);

    ${({$justifyContent:e})=>e&&o.css`
            justify-content: ${e};
        `}
`,f=o.styled.div`
    width: 100%;
    position: relative;

    img {
        width: 100%;
        border-radius: var(--corner-radius-8px, 8px);
    }
`,g={slide:{variants:{hidden:{opacity:0,y:-50},visible:{opacity:1,y:0},exit:{opacity:0,y:50}},transition:{duration:.3}},"slide-reverse":{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0},exit:{opacity:0,y:-50}},transition:{duration:.3}},fade:{variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},transition:{duration:.3}},emanate:{}},v=(0,s.forwardRef)(({width:e,height:t,minHeight:i,minWidth:n,maxHeight:r,maxWidth:a,mobileBottomFullWidth:l,modalPadding:o,border:c,children:u,...p},x)=>s.default.createElement(d,{ref:x,$width:e,$height:t,$minHeight:i,$minWidth:n,$maxHeight:r,$maxWidth:a,$mobileBottomFullWidth:l,$modalPadding:o,$border:c,...p},u)),b=(0,s.forwardRef)(({justifyContent:e,children:t},i)=>s.default.createElement(h,{ref:i,$justifyContent:e},t)),w=(0,s.forwardRef)(({overflow:e,children:t,...i},n)=>s.default.createElement(c,{ref:n,$overflow:e,...i},t)),y=(0,s.forwardRef)(({children:e,...t},i)=>s.default.createElement(f,{ref:i,...t},e)),j=(0,s.forwardRef)(({children:e,...t},i)=>s.default.createElement(p,{ref:i,...t},e)),k=(0,s.forwardRef)(({children:e,...t},i)=>s.default.createElement(x,{ref:i,...t},e)),C=(0,s.forwardRef)(({modalBodyMargin:e,children:t,...i},n)=>s.default.createElement(m,{ref:n,$modalBodyMargin:e,...i},t)),N=(0,s.forwardRef)(({...e},t)=>s.default.createElement(u,{ref:t,...e})),A=(0,s.forwardRef)((e,a)=>{let{isOpen:o=!0,banner:u=null,title:v=null,description:b=null,body:w=null,action:y=null,height:j="auto",width:k="500px",minHeight:C=null,minWidth:N=null,maxHeight:A="95vh",maxWidth:E="95vw",onHide:S=()=>{},onClose:$=()=>{},mobileBottomFullWidth:B=!1,modalPadding:R="20px",border:z="1px solid var(--border-subtle-primary-default, #e1e5ea)",modalBodyMargin:P=null,showCloseButton:D=!1,hideOnClickAway:I=!1,blurBackground:L=!1,animatePresence:q="fade",clickEvent:V=null,children:M=null,shouldFocusOnFirstElement:O=!0,shouldDisableScroll:F=!0,overflow:H="visible",className:U}=e,X=(0,s.useRef)(null),G=()=>{"function"==typeof S&&S(),"function"==typeof $&&$()};(0,s.useImperativeHandle)(a,()=>X.current),(0,i.useDisableBodyScroll_default)(o),(0,i.useKeyboardEvent_default)({onKeyPress:()=>{I&&G()},keyCodes:["Escape"],config:{shouldDetect:o}});let J=(0,s.useId)(),Q=(0,s.useMemo)(()=>{var e,t;return e=q,t=V,"emanate"===e?"number"==typeof(null==t?void 0:t.clientX)&&"number"==typeof(null==t?void 0:t.clientY)?((e,t)=>{let i,n;try{i=e-window.innerWidth/2,n=t-window.innerHeight/2}catch(e){i=0,n=0}return{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{scale:0,opacity:0,x:i,y:n},visible:{scale:1,opacity:1,x:0,y:0},exit:{scale:0,opacity:0,x:i,y:n}},transition:{duration:.3}}})(t.clientX,t.clientY):{}:{initial:"hidden",animate:"visible",exit:"exit",...e?g[e]:{}}},[q,V]),W=(0,s.useMemo)(()=>(({isOpen:e,animatePresence:t,clickEvent:i})=>!!e&&("emanate"!==t||"number"==typeof(null==i?void 0:i.clientX)&&"number"==typeof(null==i?void 0:i.clientY)))({isOpen:o,animatePresence:q,clickEvent:V}),[o,q,V]);return s.default.createElement(n.motion_default,null,s.default.createElement(l.AnimatePresence,null,W&&s.default.createElement(t.Overlay_default,{shouldDisableScroll:F,onOverlayClick:()=>{I&&G()},shouldTintOverlay:!0,shouldBlurOverlay:L,shouldCenterContent:!0,"data-testid":"testid-modalwrapper",className:U,animationDuration:.3,shouldFocusOnFirstElement:O},s.default.createElement(d,{onClick:e=>e.stopPropagation(),ref:X,$width:k,$height:j,$minHeight:C,$minWidth:N,$maxHeight:A,$maxWidth:E,$mobileBottomFullWidth:B,$modalPadding:R,$border:z,"aria-labelledby":`modal-title-${J}`,"aria-describedby":`modal-description-${J}`,"aria-modal":"true",role:"dialog","data-testid":"testid-modal",...Q},s.default.createElement(c,{$overflow:H},D&&s.default.createElement(h,{$justifyContent:"end"},s.default.createElement(r.IconButton_default,{onClick:G,size:"small",variant:"tertiary",color:"neutral",icon:"close",ariaLabel:"Close",buttonProps:{autoFocus:!0}})),u&&s.default.createElement(f,null,u),v&&s.default.createElement(p,{id:`modal-title-${J}`},v),b&&s.default.createElement(x,{id:`modal-description-${J}`},b),w&&s.default.createElement(m,{$modalBodyMargin:P},w),M&&s.default.createElement(m,{$modalBodyMargin:P},M)),y&&s.default.createElement(h,null,y)))))});A.Modal=v,A.Main=w,A.Banner=y,A.Title=j,A.Description=k,A.Body=C,A.Action=b,A.Divider=N,e.s(["NSModal",0,A],397681)},914984,e=>{"use strict";var t=e.i(843476);e.s(["ArrowRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M5 12h14m0 0-6-6m6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronLeftIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m15 6-6 6 6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m9 6 6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"CloseIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M6 6l12 12M18 6 6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"RadioUncheckedIcon",0,function({className:e}){return(0,t.jsx)("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":!0,focusable:"false",className:e,children:(0,t.jsx)("path",{d:"M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 14.6 5.4 18.3333 10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667ZM10 16.6667C6.31667 16.6667 3.33333 13.6833 3.33333 10C3.33333 6.31667 6.31667 3.33333 10 3.33333C13.6833 3.33333 16.6667 6.31667 16.6667 10C16.6667 13.6833 13.6833 16.6667 10 16.6667Z",fill:"currentColor"})})},"SparkIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M12 2c.45 4.2 2.3 6.05 6.5 6.5-4.2.45-6.05 2.3-6.5 6.5-.45-4.2-2.3-6.05-6.5-6.5C9.7 8.05 11.55 6.2 12 2z"})})},"YouTubePlayIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 68 48",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("path",{d:"M66.5 7.5a8.5 8.5 0 0 0-6-6C55.2 0 34 0 34 0S12.8 0 7.5 1.5a8.5 8.5 0 0 0-6 6A89 89 0 0 0 0 24a89 89 0 0 0 1.5 16.5 8.5 8.5 0 0 0 6 6C12.8 48 34 48 34 48s21.2 0 26.5-1.5a8.5 8.5 0 0 0 6-6A89 89 0 0 0 68 24a89 89 0 0 0-1.5-16.5z",fill:"#FF0000"}),(0,t.jsx)("path",{d:"M27.2 34.29 44.85 24 27.2 13.71v20.58z",fill:"#fff"})]})}])},680395,e=>{"use strict";let t="ns_rcb_unlock_v2";function i(){let e=function(e,t){try{let i=e().getItem(t);if(!i)return null;return JSON.parse(i)}catch{return null}}(()=>window.sessionStorage,t);if(!e||1!==e.v||!e.profile)return null;let i=e.profile;return"string"==typeof i.fullName&&"string"==typeof i.phone&&i.fullName.trim()&&10===i.phone.replace(/\D/g,"").length?{fullName:i.fullName,phone:i.phone,email:"string"==typeof i.email?i.email:"",whatsapp:!!i.whatsapp,qualifierAnswers:i.qualifierAnswers&&"object"==typeof i.qualifierAnswers?i.qualifierAnswers:{},savedAt:"number"==typeof i.savedAt?i.savedAt:0}:null}e.s(["DEFAULT_RCB_QUALIFIER_KEYS",0,["highest_qualification","graduation_year"],"isLeadUnlocked",0,function(){return null!==i()},"mergeUnlockProfile",0,function(e){let n=i();!function(e,t,i){try{e().setItem(t,JSON.stringify(i))}catch{return!1}}(()=>window.sessionStorage,t,{v:1,profile:{fullName:e.fullName,phone:e.phone,email:e.email,whatsapp:e.whatsapp,qualifierAnswers:{...n?.qualifierAnswers,...e.qualifierAnswers},savedAt:Date.now()}})},"normalizeQualifierValue",0,function(e){return e.replace(/[\u200B\u200C\u200D\u2060\uFEFF]/g,"").trim()},"readUnlockProfile",0,i])},356105,527341,e=>{"use strict";var t=e.i(271645),i=e.i(336835);let n="multi_step_rcb_form_partial_fill_hash";function r(e){try{return window.localStorage.getItem(e)??""}catch{return""}}function a(e,t){try{window.localStorage.setItem(e,t)}catch{}}function l(e){try{window.localStorage.removeItem(e)}catch{}}e.s(["usePartialRcb",0,function(e){let s=e?.resumeStoredHash??!0,o=e?.filedScope?"multi_step_rcb_form_filed_hash:"+e.filedScope:"",d=(0,t.useRef)(o);d.current=o;let c=(0,t.useRef)(!1),u=(0,t.useRef)(e?.onHash);u.current=e?.onHash;let p=(0,t.useRef)(e?.hashSource);p.current=e?.hashSource;let x=(0,t.useRef)(""),m=(0,t.useRef)(""),h=(0,t.useRef)(Promise.resolve());return(0,t.useEffect)(()=>{if(!s)return;let e=d.current?r(d.current):"";e?(x.current=e,c.current=!0):x.current=r(n)},[]),{save:(0,t.useCallback)((e,t=!1,{updateLsq:r=!1,keepHash:o=!1}={})=>{let f=async()=>{let h;if(!t&&!(e.fullName.trim()||e.phone.trim()||e.email.trim()||Object.values(e.qualifiers).some(Boolean))||!t&&!r&&c.current)return{ok:!0};let f=JSON.stringify({input:e,updateLsq:r});return t||f!==m.current?((m.current=f,!x.current&&p.current&&(x.current=p.current()),x.current)?h=await (0,i.updateRcb)(x.current,e,t,r):(h=await (0,i.createRcb)(e,t,r)).ok&&h.hash&&(x.current=h.hash,u.current?.(h.hash),s&&a(n,h.hash)),h.ok||m.current!==f||(m.current=""),h.ok&&s&&(t||r)&&(l(n),d.current&&(o&&!t?a(d.current,x.current):l(d.current))),{ok:h.ok,error:h.error}):(r&&!o&&s&&(l(n),d.current&&l(d.current)),{ok:!0})},g=h.current.then(f,f);return h.current=g.catch(()=>{}),g},[s])}}],356105);var s=e.i(680395),o=e.i(58863);let d=/^[a-z ,.'-]+$/i,c=/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;e.s(["buildRcbInput",0,function(e){return{fullName:e.name,phone:e.phone,email:e.email,qualifiers:e.answers,whatsapp:e.whatsapp,from:e.from,parentUrl:e.parentUrl,nextUrl:e.nextUrl,utmParams:(0,o.getUtmParams)(),responseType:e.responseType,formVariant:e.formVariant,...e.extraLeadFields?{extraLeadFields:e.extraLeadFields}:{}}},"flattenRcbSteps",0,function(e){return e.flatMap(e=>e.questions)},"rcbContactErrorMessage",0,function(e,t){switch(e){case"name":return t.trim()?"Full Name can only contain alphabets":"Full Name is Required";case"phone":return t?"Invalid Phone Number":"Phone Number is Required";case"email":return t.trim()?"Enter a valid email address":"Email is Required"}},"rcbContactErrors",0,function({name:e,phone:t,email:i},{requireEmail:n}){return{name:0===e.trim().length||!d.test(e.trim()),phone:10!==t.replace(/\D/g,"").length,email:!!n&&!c.test(i.trim())}},"seedAnswers",0,function(e,t){if(!e)return{};let i={};for(let n of t){let t=e.qualifierAnswers[n.key];if(!t)continue;let r=n.items.find(e=>(0,s.normalizeQualifierValue)(e.value)===(0,s.normalizeQualifierValue)(t));r&&(i[n.key]=r.value)}return i}],527341)},32189,e=>{"use strict";e.s(["getCanonicalUrl",0,function(e="/",t="www.newtonschool.co"){let i=e.startsWith("/")?e:`/${e}`;return`https://${t}${i}`}])},514348,e=>{"use strict";var t=e.i(843476),i=e.i(549838);let n=[{label:"Your Role",href:"#your-role"},{label:"Curriculum",href:"#curriculum"},{label:"Mentors",href:"#experts"},{label:"Pricing",href:"#pricing"}],r={none:"top-0",announcement:"agp-ann-nav top-[34px] min-[992px]:top-[46px]"};e.s(["AgenticNavbar",0,function({logoSrc:e,phone:a,phoneHref:l,cta:s,links:o=n,counsellorLabel:d="Talk to Councilor",ctaLabelMobile:c="Get call back",ctaLabelDesktop:u="Get priority callback",hasBottomBorder:p=!1,offset:x="none"}){return(0,t.jsx)("nav",{className:(0,i.cn)(`inset-x-0 ${r[x]} z-50 h-[57px] backdrop-blur-[32px]`,p?"fixed min-[768px]:border-b min-[768px]:border-[#16191D] min-[992px]:sticky min-[992px]:h-[72px]":"fixed min-[992px]:h-[71px]"),children:(0,t.jsxs)("div",{className:"mx-auto flex h-full w-full max-w-[1232px] items-center justify-between px-4",children:[(0,t.jsx)("a",{href:"#home",className:"flex shrink-0 items-center","aria-label":"Newton School — home",children:(0,t.jsx)("img",{src:e,alt:"Newton School logo",width:140,height:20,className:"h-5 w-auto"})}),(0,t.jsx)("div",{className:"absolute left-1/2 hidden -translate-x-1/2 items-center gap-3 min-[992px]:flex",children:o.map(e=>(0,t.jsx)("a",{href:e.href,className:"px-2 py-2 text-[14px] leading-[22px] font-semibold tracking-[0.016em] text-white/50 transition-[color] duration-300 ease-[ease] hover:text-white",children:e.label},e.label))}),(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsxs)("div",{className:"hidden flex-col items-end leading-[18px] min-[992px]:flex",children:[(0,t.jsx)("span",{className:"text-[12px] font-medium tracking-[0.1px] text-[#b2b9c7]",children:d}),(0,t.jsx)("a",{href:l,className:"text-[12px] font-semibold tracking-[0.06px] text-white transition-[opacity,background-color,color] duration-300 ease-[ease] hover:text-white/80",children:a})]}),(0,t.jsx)("span",{"aria-hidden":!0,className:"hidden h-[23px] w-px bg-[#30363d] min-[992px]:block"}),s({className:"inline-flex h-8 items-center gap-1 rounded-[8px] bg-[#0673F9] px-3.5 text-[14px] leading-[22px] font-semibold tracking-[0.4px] text-white transition-[opacity,background-color,color] duration-300 ease-[ease] hover:bg-[#0560d6] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none",children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M7.2 3.6c.3-.1.7 0 .9.3l1.2 2c.2.3.1.7-.1.9l-1 .9c.6 1.3 1.6 2.3 2.9 2.9l.9-1c.2-.2.6-.3.9-.1l2 1.2c.3.2.4.6.3.9-.4 1.2-1.6 2-2.9 1.8C8.5 15.7 4.3 11.5 3.8 6.5 3.6 5.2 4.4 4 5.6 3.6",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,t.jsx)("span",{className:"min-[992px]:hidden",children:c}),(0,t.jsx)("span",{className:"hidden min-[992px]:inline",children:u})]})})]})]})})}])},961533,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(549838);e.s(["AgenticCurriculumRail",0,function({rows:e,idPrefix:r,rowTargets:a,cardUnits:l,label:s,applyCta:o}){let[d,c]=(0,i.useState)(null),u=l.join(",");return(0,i.useEffect)(()=>{let e=u.split(",").map(Number),t=e.map((e,t)=>document.getElementById(`${r}${t}`)),i=t.filter(e=>null!==e);if(0===i.length)return;let n=new IntersectionObserver(i=>{let n=i.filter(e=>e.isIntersecting).sort((e,t)=>e.boundingClientRect.top-t.boundingClientRect.top)[0];if(!n)return;let r=e[t.indexOf(n.target)];void 0!==r&&c(r)},{rootMargin:"-80px 0px -85% 0px",threshold:0});return i.forEach(e=>n.observe(e)),()=>n.disconnect()},[u,r]),(0,t.jsxs)("nav",{"aria-label":s,className:"sticky top-20 hidden w-[378px] min-w-[378px] flex-col overflow-hidden rounded-[12px] border border-[#23282F] bg-[#0B0C0E] lg:flex",children:[e.map((e,i)=>(0,t.jsxs)("a",{href:`#${r}${a[i]??i}`,"aria-current":d===i?"true":void 0,className:(0,n.cn)("flex flex-col gap-2 border-b border-[#23282F] p-5 transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white focus-visible:outline-none",d===i?"bg-[#16191D]":"hover:bg-[#16191D]/60"),children:[(0,t.jsx)("span",{className:(0,n.cn)("text-[11px] leading-[1.04] font-semibold tracking-[2px] uppercase transition-colors",d===i?"text-[#FFD580]":"text-[#B2B9C7]"),children:e.eyebrow}),(0,t.jsx)("span",{className:"text-[18px] leading-[1.64] font-semibold tracking-[0.06px] text-white",children:e.title})]},e.eyebrow)),(0,t.jsx)(t.Fragment,{children:o})]})}])},982858,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(549838);e.s(["AgenticStickyBar",0,function({cta:e,message:r="🎉 Limited Seats Available!  Hurry and secure a spot NOW!!",ctaLabel:a="Get Course Details",backgroundSrc:l="data:image/webp;base64,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"}){let[s,o]=(0,i.useState)(!1),[d,c]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=window.matchMedia("(max-width: 991px)"),t=()=>c(e.matches);t(),e.addEventListener("change",t);let i=()=>o(window.scrollY>0);return i(),window.addEventListener("scroll",i,{passive:!0}),()=>{e.removeEventListener("change",t),window.removeEventListener("scroll",i)}},[]);let u=d||s;return(0,t.jsx)("div",{"aria-hidden":!u,className:(0,n.cn)("fixed inset-x-0 bottom-0 z-[1000] transition-[opacity,visibility] duration-[400ms] ease-[ease] min-[992px]:bottom-8","visible opacity-100",!s&&"min-[992px]:invisible min-[992px]:pointer-events-none min-[992px]:opacity-0"),children:(0,t.jsxs)("div",{className:"relative mx-auto flex w-full flex-col items-center gap-2.5 overflow-hidden border border-[#23282f] bg-[#012361] px-[19px] py-[11px] shadow-[0_0_24px_rgba(0,0,0,0.08)] min-[992px]:w-[850px] min-[992px]:flex-row min-[992px]:justify-between min-[992px]:gap-3 min-[992px]:rounded-[16px] min-[992px]:px-5 min-[992px]:py-3",children:[(0,t.jsx)("img",{src:l,alt:"","aria-hidden":"true",width:689,height:87,className:"pointer-events-none absolute inset-0 h-full w-full object-fill"}),(0,t.jsx)("p",{className:"relative z-[2] max-w-[240px] text-center text-[15px] leading-[20px] font-semibold tracking-[0.1px] text-white min-[480px]:max-w-[20.75rem] min-[992px]:max-w-none min-[992px]:text-left min-[992px]:text-[20px] min-[992px]:leading-[26px]",children:r}),e({className:"relative z-[2] inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-[8px] bg-white py-[10px] pr-[15px] pl-[19px] text-[15px] leading-[25px] font-semibold tracking-[0.06px] text-[#16191D] transition-colors hover:bg-[#e6e6e6] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none min-[992px]:w-auto min-[992px]:py-[11px] min-[992px]:pr-4 min-[992px]:pl-5 min-[992px]:text-[16px] min-[992px]:leading-[26px]",tabIndex:u?0:-1,children:(0,t.jsxs)(t.Fragment,{children:[a,(0,t.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M4 10h11m0 0l-4.5-4.5M15 10l-4.5 4.5",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round"})})]})})]})})}])},425739,e=>{"use strict";var t=e.i(843476),i=e.i(271645);e.s(["AgenticFaq",0,function({overline:e,heading:n,items:r,id:a="faq",defaultOpenIndex:l=-1,questionTextClassName:s="text-[18px] leading-[28px]",answerTextClassName:o="text-[16px] leading-[26px]",sectionPaddingClassName:d="py-14",headingClassName:c="text-left text-[18px] leading-[24px] font-extrabold text-white md:text-center md:text-[28px] md:leading-[32px]"}){let[u,p]=(0,i.useState)(l);return(0,t.jsx)("section",{id:a,className:`scroll-mt-24 border-t border-[#16191d] bg-[#16191d] ${d}`,children:(0,t.jsxs)("div",{className:"mx-auto w-full max-w-[768px] px-4",children:[(0,t.jsx)("div",{className:"hidden md:flex md:justify-center",children:(0,t.jsx)("span",{className:"inline-flex items-center rounded-full px-3 py-1.5 text-[14px] leading-4 font-semibold tracking-[0.4px] text-white",style:{backgroundImage:"linear-gradient(180deg, #003270 0%, #000000 31.73%, #000000 62.02%, #003270 100%)"},children:e})}),(0,t.jsx)("h2",{className:`mt-4 ${c}`,children:n}),(0,t.jsx)("div",{className:"mt-7 flex flex-col gap-[11px] rounded-[20px] border border-[#23282f] bg-[#0b0c0e] p-3",children:r.map((e,i)=>{let n=u===i;return(0,t.jsxs)("div",{className:`overflow-hidden rounded-[12px] border border-[#23282f] ${n?"bg-[#23282f]":"bg-[#0b0c0e]"}`,children:[(0,t.jsxs)("button",{type:"button","aria-expanded":n,onClick:()=>p(n?-1:i),className:"flex w-full items-center justify-between gap-2.5 p-4 text-left focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none",children:[(0,t.jsx)("span",{className:`flex-1 ${s} font-semibold tracking-[0.06px] text-white`,children:e.q}),(0,t.jsxs)("span",{"aria-hidden":"true",className:"relative block size-6 shrink-0",children:[(0,t.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:`absolute inset-0 fill-white transition-[opacity,transform,rotate] duration-300 [transition-timing-function:ease] ${n?"rotate-90 opacity-0":"rotate-0 opacity-100"}`,children:(0,t.jsx)("path",{d:"M12 5.25122C12.4142 5.25122 12.75 5.58701 12.75 6.00122V11.2512H18C18.4142 11.2512 18.75 11.587 18.75 12.0012C18.75 12.4154 18.4142 12.7512 18 12.7512H12.75V18.0012C12.75 18.4154 12.4142 18.7512 12 18.7512C11.5858 18.7512 11.25 18.4154 11.25 18.0012V12.7512H6C5.58579 12.7512 5.25 12.4154 5.25 12.0012C5.25 11.587 5.58579 11.2512 6 11.2512H11.25V6.00122C11.25 5.58701 11.5858 5.25122 12 5.25122Z"})}),(0,t.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:`absolute inset-0 fill-white transition-[opacity,transform,rotate] duration-300 [transition-timing-function:ease] ${n?"rotate-180 opacity-100":"rotate-0 opacity-0"}`,children:(0,t.jsx)("path",{d:"M18 11.2512C18.4142 11.2512 18.75 11.587 18.75 12.0012C18.75 12.4154 18.4142 12.7512 18 12.7512H6C5.58579 12.7512 5.25 12.4154 5.25 12.0012C5.25 11.587 5.58579 11.2512 6 11.2512H18Z"})})]})]}),(0,t.jsx)("div",{className:`grid transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${n?"grid-rows-[1fr]":"grid-rows-[0fr]"}`,children:(0,t.jsx)("div",{className:"min-h-0 overflow-hidden",children:(0,t.jsx)("div",{role:"region","aria-hidden":!n,className:`px-4 pb-4 ${o} font-medium tracking-[0.1px] text-[#b2b9c7]`,children:e.a})})})]},e.q)})})]})})}])},511604,e=>{e.v(t=>Promise.all(["static/chunks/2-et_hho2aqvl.js"].map(t=>e.l(t))).then(()=>t(164436)))},896615,e=>{e.v(t=>Promise.all(["static/chunks/3klltxhcaam25.js"].map(t=>e.l(t))).then(()=>t(980954)))},401485,e=>{e.v(t=>Promise.all(["static/chunks/3363k0g8j073u.js","static/chunks/2n-gidy722xtj.js"].map(t=>e.l(t))).then(()=>t(873987)))},179909,e=>{e.v(t=>Promise.all(["static/chunks/41kj1t47-_n25.js"].map(t=>e.l(t))).then(()=>t(285692)))},628574,e=>{e.v(t=>Promise.all(["static/chunks/2qirsm4ul044n.js"].map(t=>e.l(t))).then(()=>t(218568)))},490258,e=>{e.v(t=>Promise.all(["static/chunks/2s87rp7nfrl4_.js"].map(t=>e.l(t))).then(()=>t(322465)))},15086,e=>{e.v(t=>Promise.all(["static/chunks/36smk6w2al07x.js"].map(t=>e.l(t))).then(()=>t(269275)))},134362,e=>{e.v(t=>Promise.all(["static/chunks/24_vd97z020im.js"].map(t=>e.l(t))).then(()=>t(57400)))},278533,e=>{e.v(t=>Promise.all(["static/chunks/2dsmc-m5l6-0x.js"].map(t=>e.l(t))).then(()=>t(906322)))}]);