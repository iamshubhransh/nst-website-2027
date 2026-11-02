(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,591270,e=>{"use strict";var t=e.i(843476),n=e.i(271645),i=e.i(851799),a=e.i(851361),r=e.i(688921);let l={2025:"internship-report-2025-cta",2026:"internship-report-2026-cta"},s={2025:{click:{eventType:r.EVENT_TYPE.CLICK,eventName:"nst_placement_report_2025_click"},load:{eventType:r.EVENT_TYPE.COMPONENT_LOAD,eventName:"nst_placement_report_2025_load"}},2026:{click:{eventType:r.EVENT_TYPE.CLICK,eventName:"nst_placement_report_2026_click"},load:{eventType:r.EVENT_TYPE.COMPONENT_LOAD,eventName:"nst_placement_report_2026_load"}}},o={2025:{pdfUrl:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/450db274a1b94c4393e9eca1745d0c6d.pdf",coverImage:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/4b961c11f6ce4ba6ba7f295ea6e33ad5.avif",ariaTitle:"Official Internship Report 2025",fallbackOverline:"Released: Internship Report 2025",fallbackHeading:"93.07% of students secured internships by their second year.",fallbackSub:"Certified by B2K Analytics, IIM Ahmedabad’s placement auditors."},2026:{pdfUrl:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/79ff75f20a7b4da385427575309df7d8.pdf",coverImage:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/9117a937c1a94bd08bbf73e9d05f3659.webp",ariaTitle:"Official Internship Report 2026",fallbackOverline:"Released: Internship Report 2026",fallbackHeading:"98.3% of the Pune batch secured internships by their second year.",fallbackSub:"Certified by Sorab S. Engineer & Co. — placement auditor for multiple IIMs."}};e.s(["InternshipReportCta",0,function({report:e,pageName:n,className:c,children:d}){let p=(0,a.useSendAnalyticsEvent)();return(0,t.jsx)(i.ViewReportButton,{...o[e],className:c,onOpen:()=>p({...s[e].click,eventData:(0,r.buildEventData)({pageName:n,from:l[e]})}),children:d})},"InternshipReportImpression",0,function({report:e,pageName:i,className:o,children:c}){let d=(0,a.useSendAnalyticsEvent)(),p=(0,n.useRef)(null),u=(0,n.useRef)(!1);return(0,n.useEffect)(()=>{let t=p.current;if(!t||u.current||"u"<typeof IntersectionObserver)return;let n=new IntersectionObserver(t=>{!u.current&&t.some(e=>e.isIntersecting)&&(u.current=!0,n.disconnect(),d({...s[e].load,eventData:(0,r.buildEventData)({pageName:i,from:l[e]})}))},{threshold:.5});return n.observe(t),()=>n.disconnect()},[e,i,d]),(0,t.jsx)("div",{ref:p,className:o,children:c})},"REPORT_CTA_FROM",0,l])},964673,e=>{"use strict";var t=e.i(843476),n=e.i(652612),i=e.i(26139),a=e.i(851361),r=e.i(688921),l=e.i(22453),s=e.i(549838);let o={APPLY:"internship-card-apply-now-cta",RESUME:"internship-card-resume-application"},c={[o.APPLY]:{eventType:r.EVENT_TYPE.CLICK,eventName:"nst_internship_card_apply_click"},[o.RESUME]:{eventType:r.EVENT_TYPE.CLICK,eventName:"nst_internship_card_resume_click"}};e.s(["BATCH_MOMENTUM_FROM",0,o,"BatchMomentumApplyCta",0,function({pageName:e,className:d}){let{isLoggedIn:p}=(0,n.useLoggedIn)(),{open:u}=(0,i.useRcbModal)(),f=(0,a.useSendAnalyticsEvent)(),h=p?o.RESUME:o.APPLY,m=p?"Resume Application":"Apply Now",g=()=>{let t=c[h];if(!t)return;let n=e??window.location.pathname;f({...t,eventData:(0,r.buildEventData)({pageName:n})})},v=(0,s.cn)("block w-full cursor-pointer bg-[#0673f9] font-semibold text-white transition hover:brightness-95",d);return p?(0,t.jsx)("a",{href:l.EXTERNAL_LINKS.nsatTimeline,target:"_blank",rel:"noopener",onClick:g,className:v,children:m}):(0,t.jsx)("button",{type:"button",onClick:()=>{g(),u({from:h,heading:"Register For NSAT"})},className:v,children:m})}])},880817,e=>{"use strict";var t=e.i(271645),n=e.i(851361),i=e.i(688921),a=e.i(944995);let r={PAGE_LOAD:{eventType:i.EVENT_TYPE.PAGE_LOAD,eventName:"page_view"}};a.FROM,a.NST_SHELL_PERF_EVENTS,a.FROM_EVENT,e.s(["PageViewTracker",0,function(){let e=(0,n.useSendAnalyticsEvent)();return(0,t.useEffect)(()=>{e({...r.PAGE_LOAD,eventData:(0,i.buildEventData)({pageName:"/newton-school-of-technology-nst/placement"})})},[]),null}],880817)},82799,e=>{"use strict";var t=e.i(843476),n=e.i(652612),i=e.i(26139),a=e.i(851361),r=e.i(688921),l=e.i(22453),s=e.i(549838);let o={APPLY:"placement-outcomes-apply-now-cta",RESUME:"placement-outcomes-resume-application"},c={[o.APPLY]:{eventType:r.EVENT_TYPE.CLICK,eventName:"nst_placement_outcomes_apply_click"},[o.RESUME]:{eventType:r.EVENT_TYPE.CLICK,eventName:"nst_placement_outcomes_resume_click"}};function d(){return(0,t.jsx)("svg",{"aria-hidden":!0,viewBox:"0 0 20 20",fill:"currentColor",className:"size-5 shrink-0",children:(0,t.jsx)("path",{d:"M11.4275 13.7286C11.1833 13.9726 11.1832 14.3684 11.4272 14.6125C11.6712 14.8567 12.0669 14.8568 12.311 14.6128L16.4805 10.4462C16.5978 10.3289 16.6637 10.1699 16.6637 10.0041C16.6637 9.83824 16.5978 9.6792 16.4805 9.56198L12.311 5.39531C12.0669 5.15132 11.6712 5.15145 11.4272 5.39561C11.1832 5.63977 11.1833 6.03549 11.4275 6.27949L14.5251 9.37511L3.95623 9.375C3.61105 9.375 3.33123 9.65481 3.33123 9.99999C3.33122 10.3452 3.61104 10.625 3.95622 10.625L14.5331 10.6251L11.4275 13.7286Z"})})}e.s(["OUTCOMES_APPLY_FROM",0,o,"OutcomesApplyCta",0,function({pageName:e,className:p}){let{isLoggedIn:u}=(0,n.useLoggedIn)(),{open:f}=(0,i.useRcbModal)(),h=(0,a.useSendAnalyticsEvent)(),m=u?o.RESUME:o.APPLY,g=()=>{let t=c[m];t&&h({...t,eventData:(0,r.buildEventData)({pageName:e})})},v=(0,s.cn)("flex h-12 w-full cursor-pointer items-center justify-center rounded-[8px] bg-[#0673f9] px-3 text-white transition-colors hover:bg-[#005ed1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0673f9]",p),b=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"px-2 text-[16px] leading-[26px] font-semibold tracking-[0.06px]",children:u?"Resume Application":"Apply Now for NST"}),(0,t.jsx)("span",{className:"flex pr-1",children:(0,t.jsx)(d,{})})]});return u?(0,t.jsx)("a",{href:l.EXTERNAL_LINKS.nsatTimeline,target:"_blank",rel:"noopener",onClick:g,className:v,children:b}):(0,t.jsx)("button",{type:"button",onClick:()=>{g(),f({from:m,heading:"Register For NST"})},className:v,children:b})}])},532688,e=>{"use strict";var t=e.i(843476),n=e.i(271645),i=e.i(549838);e.s(["ScrollDots",0,function({trackId:e,count:a,className:r}){let[l,s]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let t=document.getElementById(e);if(!t)return;let n=0,i=()=>{cancelAnimationFrame(n),n=requestAnimationFrame(()=>{let e=Array.from(t.children),n=t.getBoundingClientRect().left,i=0,a=1/0;e.forEach((e,t)=>{let r=Math.abs(e.getBoundingClientRect().left-n);r<a&&(a=r,i=t)}),t.scrollLeft>=t.scrollWidth-t.clientWidth-1&&(i=e.length-1),s(i)})};return t.addEventListener("scroll",i,{passive:!0}),()=>{t.removeEventListener("scroll",i),cancelAnimationFrame(n)}},[e]),(0,t.jsx)("div",{"aria-hidden":!0,className:(0,i.cn)("flex h-[22px] items-center gap-2 rounded-full bg-[#0b0c0e80] px-2 backdrop-blur-[4.57px]",r),children:Array.from({length:a},(e,n)=>(0,t.jsx)("span",{className:(0,i.cn)("h-1.5 w-1.5 rounded-full",n===l?"bg-white":"bg-[#c9cfd9]")},n))})}])},32666,e=>{"use strict";var t=e.i(843476),n=e.i(549838);function i({flipped:e=!1}){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,className:(0,n.cn)("h-6 w-6",e&&"rotate-180"),children:(0,t.jsx)("path",{d:"M9.46964 6.46967C9.76253 6.17678 10.2373 6.17678 10.5302 6.46967L15.5302 11.4697C15.8229 11.7626 15.823 12.2374 15.5302 12.5302L10.5302 17.5302C10.2374 17.823 9.76253 17.8229 9.46964 17.5302C9.17677 17.2373 9.17681 16.7626 9.46964 16.4697L13.9394 11.9999L9.46964 7.53022C9.17677 7.23734 9.17681 6.76257 9.46964 6.46967Z",fill:"currentColor"})})}let a={light:"border border-[#e1e5ea] bg-white text-[#16191d] hover:bg-[#f6f7f9]",dark:"border border-white bg-transparent text-white hover:bg-white/10"};e.s(["CarouselArrows",0,function({trackId:e,label:r,tone:l="light",className:s,buttonClassName:o}){let c=t=>{let n=document.getElementById(e);if(!n)return;let i=n.firstElementChild,a=parseFloat(getComputedStyle(n).columnGap||"0")||0,r=i?i.getBoundingClientRect().width+a:.8*n.clientWidth,l=n.scrollWidth-n.clientWidth,s=window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth";1===t&&Math.ceil(n.scrollLeft)>=l-1?n.scrollTo({left:0,behavior:s}):-1===t&&n.scrollLeft<=1?n.scrollTo({left:l,behavior:s}):n.scrollBy({left:t*r,behavior:s})},d=(0,n.cn)("flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0673f9]",a[l],o);return(0,t.jsxs)("div",{className:(0,n.cn)("flex items-center gap-2",s),children:[(0,t.jsx)("button",{type:"button","aria-label":`Previous ${r}`,"aria-controls":e,onClick:()=>c(-1),className:d,children:(0,t.jsx)(i,{flipped:!0})}),(0,t.jsx)("button",{type:"button","aria-label":`Next ${r}`,"aria-controls":e,onClick:()=>c(1),className:d,children:(0,t.jsx)(i,{})})]})}])},746887,e=>{"use strict";var t=e.i(843476),n=e.i(271645),i=e.i(174080);let a="nst-pie-replay";e.s(["PIE_REPLAY_EVENT",0,a,"PieReveal",0,function({children:e,className:r}){let l=(0,n.useRef)(null),[s,o]=(0,n.useState)("static");return(0,n.useEffect)(()=>{let e,t=l.current;if(!t||!("IntersectionObserver"in window)||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let n=0,r=()=>{e?.disconnect(),cancelAnimationFrame(n),o("idle"),(e=new IntersectionObserver(([t])=>{t?.isIntersecting&&(e?.disconnect(),n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>o("play"))}))},{threshold:.3})).observe(t)},s=()=>{0!==t.getBoundingClientRect().height&&((0,i.flushSync)(()=>o("idle")),r())};t.addEventListener(a,s);let c=t.getBoundingClientRect();return c.height>0&&c.top>=window.innerHeight&&r(),()=>{t.removeEventListener(a,s),e?.disconnect(),cancelAnimationFrame(n)}},[]),(0,t.jsx)("div",{ref:l,"data-pie-anim":s,className:r,children:e})}])},285403,e=>{"use strict";var t,n,i,a,r=e.i(843476),l=e.i(271645),s=e.i(892480),o=e.i(997053),c=((t=c||{}).SMALL="small",t.MEDIUM="medium",t.LARGE="large",t.EXTRA_LARGE="extra-large",t),d=((n=d||{}).LEFT="left",n.RIGHT="right",n.TOP="top",n.BOTTOM="bottom",n),p=((i=p||{}).BORDERED="bordered",i.ROUNDED="rounded",i),u={small:{padding:"5px var(--spacing-sp-7, 12px)",fontSize:"var(--font-size-fs-20, 14px)",lineHeight:"var(--line-height-lh-50, 22px)",letterSpacing:"var(--letter-spacing-ls-10, 0.016px)",height:"var(--spacing-32px, 32px)"},medium:{padding:"9px var(--spacing-sp-7, 12px)",fontSize:"var(--font-size-fs-20, 14px)",lineHeight:"var(--line-height-lh-50, 22px)",letterSpacing:"var(--letter-spacing-ls-10, 0.016px)",height:"var(--spacing-40px, 40px)"},large:{padding:"11px var(--spacing-sp-9, 16px)",fontSize:"var(--font-size-fs-30, 16px)",lineHeight:"var(--line-height-lh-70, 26px)",letterSpacing:"var(--letter-spacing-ls-20, 0.06px)",height:"var(--spacing-48px, 48px)"},"extra-large":{padding:"15px var(--spacing-sp-9, 16px)",fontSize:"var(--font-size-fs-30, 16px)",lineHeight:"var(--line-height-lh-70, 26px)",letterSpacing:"var(--letter-spacing-ls-20, 0.06px)",height:"var(--spacing-56px, 56px)"}},f={small:{fontSize:"var(--font-size-fs-20, 14px)",lineHeight:"var(--line-height-lh-50, 22px)"},medium:{fontSize:"var(--font-size-fs-20, 14px)",lineHeight:"var(--line-height-lh-50, 22px)"},large:{fontSize:"var(--font-size-fs-30, 16px)",lineHeight:"var(--line-height-lh-70, 26px)"},"extra-large":{fontSize:"var(--font-size-fs-30, 16px)",lineHeight:"var(--line-height-lh-70, 26px)"}},h={left:{flexDirection:"row"},right:{flexDirection:"row-reverse"},top:{flexDirection:"column"},bottom:{flexDirection:"column-reverse"}},m={bordered:{borderRadius:"var(--corner-radius-0px, 0px)"},rounded:{borderRadius:"var(--corner-radius-cr-3, 4px)"}},g=o.styled.button`
    display: flex;
    font-weight: var(--font-weight-semibold);
    color: var(--text-emphasis-secondary-default, #5b6271);
    background: transparent;
    border: none;
    cursor: pointer;

    ${({$iconPosition:e})=>e&&o.css`
            align-items: center;
            ${h[e]}
        `}

    ${({$isActive:e})=>e?o.css`
                  background: var(--bg-subtle-primary-default, #fff);
                  color: var(--text-emphasis-brand-default, #0673f9);
              `:o.css`
                  z-index: 1;
                  &:hover {
                      color: var(--text-emphasis-primary-default, #16191d);
                  }
              `};

    ${({$disabled:e})=>e&&o.css`
            color: var(--text-emphasis-secondary-disabled, #c9cfd9);
            cursor: not-allowed;
        `};

    ${({$size:e})=>o.css`
        ${u[e]}
    `};

    ${({$variant:e})=>o.css`
        ${m[e]}
    `};

    &:focus-visible {
        outline: 3px solid var(--border-subtle-brand-default);
    }

    transition: background 0.3s ease, color 0.3s ease;
`,v=o.styled.div`
    color: inherit;
    display: flex;
    align-items: center;
`,b=o.styled.div`
    display: flex;
    gap: var(--spacing-4px, 4px);
    font-size: var(--font-size-fs-30, 16px);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-lh-70, 26px);
    letter-spacing: 0.06px;

    margin: 0 var(--spacing-4px, 4px);

    ${({$size:e})=>o.css`
        ${f[e]}
    `};
`,x=o.styled.span`
    padding: var(--spacing-0px, 0) var(--spacing-4px, 4px);
    border-radius: var(--spacing-4px, 4px);
    background: inherit;
    height: fit-content;

    font-size: var(--font-size-fs-10, 12px);
    font-weight: var(--font-weight-semibold);
    line-height: var(--line-height-lh-10, 14px);
    letter-spacing: var(--letter-spacing-ls-40, 0.25px);

    margin: var(--spacing-0px, 0) var(--spacing-4px, 4px) var(--spacing-0px, 0)
        var(--spacing-0px, 0);

    ${({$isActive:e})=>e?o.css`
                  background: var(--bg-subtle-brand-default, #e5f1ff);
              `:o.css`
                  background: var(--bg-subtle-secondary-default, #f6f7f9);
              `}
`,E=function(e){let{size:t="medium",className:n="",style:i={},children:a=null,subText:r="",icon:o="",iconSize:c="20",iconPosition:d="left",variant:p="bordered",isActive:u=!1,disabled:f=!1,onClick:h=()=>{},tabIndex:m=0,id:E="",ariaControls:y=""}=e;return l.default.createElement(g,{type:"button",className:n,onClick:()=>{f||h()},$iconPosition:d,$size:t,$disabled:f,$isActive:u,style:i,$variant:p,role:"tab","aria-selected":u,"aria-controls":y,id:E,disabled:f,tabIndex:m},o&&l.default.createElement(s.Icon_default,{name:o,size:c,color:"inherit"}),(a||r)&&l.default.createElement(v,null,a&&l.default.createElement(b,{$size:t},a),r&&(["string","number"].includes(typeof r)?l.default.createElement(x,{$isActive:u},r):r)))},y=((a=y||{}).BORDERED="bordered",a.ROUNDED="rounded",a),_={bordered:{borderBottom:"1px solid var(--border-subtle-primary-default, #e0e3e8)"},rounded:{padding:"var(--spacing-sp-3, 4px)",background:"var(--bg-subtle-tertiary-default, #EDEFF3)",borderRadius:"var(--corner-radius-cr-4, 8px)"}},N=o.styled.div`
    display: flex;
    position: relative;

    ${({$variant:e})=>o.css`
        ${_[e]}
    `};

    &:focus-visible {
        outline: 3px solid var(--border-subtle-brand-default);
    }
`,k=o.styled.span`
    position: absolute;
    bottom: -1px;
    height: 2px;
    background-color: var(--text-emphasis-brand-default, #0673f9);
    transition: left 0.3s ease, width 0.3s ease;
    z-index: 1;
`,T=function(e){let{children:t=null,activeIndex:n=0,onChange:i=()=>{},variant:a="bordered",className:r="",ariaLabel:s="Tab list",size:o="medium"}=e,c=(0,l.useRef)(null),[d,p]=(0,l.useState)({left:0,width:0}),[u,f]=(0,l.useState)(-1),[h,m]=(0,l.useState)(!1),g=l.default.Children.toArray(t),v=e=>{let t=c.current;if(t){let n=t.querySelectorAll('[role="tab"]')[e];n&&n.focus()}};return(0,l.useEffect)(()=>{f(n)},[n]),(0,l.useEffect)(()=>{let e=c.current;if(e){let t=e.querySelectorAll('[role="tab"]')[n];t&&p({left:t.offsetLeft,width:t.offsetWidth})}},[n,t]),l.default.createElement(N,{ref:c,role:"tablist",className:r,onKeyDown:e=>{let t=g.length;if(0===t)return;let a=-1===u?n:u;if("ArrowRight"===e.key){e.preventDefault();let n=(a+1)%t;f(n),v(n)}else if("ArrowLeft"===e.key){e.preventDefault();let n=(a-1+t)%t;f(n),v(n)}else(" "===e.key||"Enter"===e.key)&&(e.preventDefault(),i(a))},"aria-label":s,$variant:a,onFocus:()=>{h||(f(n),m(!0))},onBlur:e=>{let t=e.relatedTarget,n=c.current;n&&null!=t&&n.contains(t)||(f(-1),m(!1))}},g.map((e,t)=>l.default.isValidElement(e)?l.default.cloneElement(e,{...e.props,variant:a,size:o,isActive:t===n,onClick:()=>i(t),tabIndex:u>=0?t===u?0:-1:t===n?0:-1}):l.default.createElement(l.default.Fragment,{key:t},e)),"bordered"===a&&l.default.createElement(k,{className:"ns-tab-indicator",style:{left:d.left,width:d.width}}))},A=e.i(746887);e.s(["SectorYearTabs",0,function({tabs:e,ariaLabel:t}){let[n,i]=(0,l.useState)(0),a=(0,l.useId)();return(0,r.jsxs)("div",{className:"flex flex-col gap-6 lg:gap-10",children:[(0,r.jsx)(T,{variant:"rounded",size:"small",activeIndex:n,onChange:e=>{e!==n&&(i(e),requestAnimationFrame(()=>{var t;return t=`${a}-panel-${e}`,void document.getElementById(t)?.querySelectorAll("[data-pie-anim]").forEach(e=>e.dispatchEvent(new Event(A.PIE_REPLAY_EVENT)))}))},ariaLabel:t,className:"mx-auto w-fit",children:e.map((e,t)=>(0,r.jsx)(E,{id:`${a}-tab-${t}`,ariaControls:`${a}-panel-${t}`,className:"group transition-none! px-4! max-lg:h-6! max-lg:py-px!",children:(0,r.jsxs)("span",{className:"grid",children:[(0,r.jsx)("span",{className:"col-start-1 row-start-1 font-medium tracking-[0.1px] group-aria-selected:font-semibold group-aria-selected:tracking-[0.016px] group-aria-selected:text-[#005ed1]",children:e.label}),(0,r.jsx)("span",{"aria-hidden":"true",className:"invisible col-start-1 row-start-1 font-semibold tracking-[0.016px]",children:e.label})]})},e.key))}),e.map((e,t)=>(0,r.jsx)("div",{id:`${a}-panel-${t}`,role:"tabpanel","aria-labelledby":`${a}-tab-${t}`,tabIndex:0,hidden:t!==n,children:e.panel},e.key))]})}],285403)},511604,e=>{e.v(t=>Promise.all(["static/chunks/2-et_hho2aqvl.js"].map(t=>e.l(t))).then(()=>t(164436)))},896615,e=>{e.v(t=>Promise.all(["static/chunks/3klltxhcaam25.js"].map(t=>e.l(t))).then(()=>t(980954)))},401485,e=>{e.v(t=>Promise.all(["static/chunks/3363k0g8j073u.js","static/chunks/2n-gidy722xtj.js"].map(t=>e.l(t))).then(()=>t(873987)))},179909,e=>{e.v(t=>Promise.all(["static/chunks/41kj1t47-_n25.js"].map(t=>e.l(t))).then(()=>t(285692)))},628574,e=>{e.v(t=>Promise.all(["static/chunks/2qirsm4ul044n.js"].map(t=>e.l(t))).then(()=>t(218568)))},490258,e=>{e.v(t=>Promise.all(["static/chunks/2s87rp7nfrl4_.js"].map(t=>e.l(t))).then(()=>t(322465)))},15086,e=>{e.v(t=>Promise.all(["static/chunks/36smk6w2al07x.js"].map(t=>e.l(t))).then(()=>t(269275)))},134362,e=>{e.v(t=>Promise.all(["static/chunks/24_vd97z020im.js"].map(t=>e.l(t))).then(()=>t(57400)))},278533,e=>{e.v(t=>Promise.all(["static/chunks/2dsmc-m5l6-0x.js"].map(t=>e.l(t))).then(()=>t(906322)))}]);