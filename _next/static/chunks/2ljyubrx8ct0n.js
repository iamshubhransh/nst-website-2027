(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,397681,e=>{"use strict";var t=e.i(893347),r=e.i(773892),a=e.i(364072),n=e.i(189101),i=e.i(824511),l=e.i(88653),o=e.i(271645),s=e.i(997053),d=(0,s.styled)(i.m.div)`
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
`,f=s.styled.div`
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
`,y={slide:{variants:{hidden:{opacity:0,y:-50},visible:{opacity:1,y:0},exit:{opacity:0,y:50}},transition:{duration:.3}},"slide-reverse":{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0},exit:{opacity:0,y:-50}},transition:{duration:.3}},fade:{variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},transition:{duration:.3}},emanate:{}},v=(0,o.forwardRef)(({width:e,height:t,minHeight:r,minWidth:a,maxHeight:n,maxWidth:i,mobileBottomFullWidth:l,modalPadding:s,border:u,children:c,...p},f)=>o.default.createElement(d,{ref:f,$width:e,$height:t,$minHeight:r,$minWidth:a,$maxHeight:n,$maxWidth:i,$mobileBottomFullWidth:l,$modalPadding:s,$border:u,...p},c)),g=(0,o.forwardRef)(({justifyContent:e,children:t},r)=>o.default.createElement(h,{ref:r,$justifyContent:e},t)),b=(0,o.forwardRef)(({overflow:e,children:t,...r},a)=>o.default.createElement(u,{ref:a,$overflow:e,...r},t)),k=(0,o.forwardRef)(({children:e,...t},r)=>o.default.createElement(x,{ref:r,...t},e)),_=(0,o.forwardRef)(({children:e,...t},r)=>o.default.createElement(p,{ref:r,...t},e)),w=(0,o.forwardRef)(({children:e,...t},r)=>o.default.createElement(f,{ref:r,...t},e)),E=(0,o.forwardRef)(({modalBodyMargin:e,children:t,...r},a)=>o.default.createElement(m,{ref:a,$modalBodyMargin:e,...r},t)),C=(0,o.forwardRef)(({...e},t)=>o.default.createElement(c,{ref:t,...e})),$=(0,o.forwardRef)((e,i)=>{let{isOpen:s=!0,banner:c=null,title:v=null,description:g=null,body:b=null,action:k=null,height:_="auto",width:w="500px",minHeight:E=null,minWidth:C=null,maxHeight:$="95vh",maxWidth:j="95vw",onHide:R=()=>{},onClose:N=()=>{},mobileBottomFullWidth:S=!1,modalPadding:F="20px",border:A="1px solid var(--border-subtle-primary-default, #e1e5ea)",modalBodyMargin:O=null,showCloseButton:M=!1,hideOnClickAway:P=!1,blurBackground:I=!1,animatePresence:L="fade",clickEvent:T=null,children:U=null,shouldFocusOnFirstElement:B=!0,shouldDisableScroll:z=!0,overflow:D="visible",className:H}=e,q=(0,o.useRef)(null),K=()=>{"function"==typeof R&&R(),"function"==typeof N&&N()};(0,o.useImperativeHandle)(i,()=>q.current),(0,r.useDisableBodyScroll_default)(s),(0,r.useKeyboardEvent_default)({onKeyPress:()=>{P&&K()},keyCodes:["Escape"],config:{shouldDetect:s}});let W=(0,o.useId)(),G=(0,o.useMemo)(()=>{var e,t;return e=L,t=T,"emanate"===e?"number"==typeof(null==t?void 0:t.clientX)&&"number"==typeof(null==t?void 0:t.clientY)?((e,t)=>{let r,a;try{r=e-window.innerWidth/2,a=t-window.innerHeight/2}catch(e){r=0,a=0}return{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{scale:0,opacity:0,x:r,y:a},visible:{scale:1,opacity:1,x:0,y:0},exit:{scale:0,opacity:0,x:r,y:a}},transition:{duration:.3}}})(t.clientX,t.clientY):{}:{initial:"hidden",animate:"visible",exit:"exit",...e?y[e]:{}}},[L,T]),Y=(0,o.useMemo)(()=>(({isOpen:e,animatePresence:t,clickEvent:r})=>!!e&&("emanate"!==t||"number"==typeof(null==r?void 0:r.clientX)&&"number"==typeof(null==r?void 0:r.clientY)))({isOpen:s,animatePresence:L,clickEvent:T}),[s,L,T]);return o.default.createElement(a.motion_default,null,o.default.createElement(l.AnimatePresence,null,Y&&o.default.createElement(t.Overlay_default,{shouldDisableScroll:z,onOverlayClick:()=>{P&&K()},shouldTintOverlay:!0,shouldBlurOverlay:I,shouldCenterContent:!0,"data-testid":"testid-modalwrapper",className:H,animationDuration:.3,shouldFocusOnFirstElement:B},o.default.createElement(d,{onClick:e=>e.stopPropagation(),ref:q,$width:w,$height:_,$minHeight:E,$minWidth:C,$maxHeight:$,$maxWidth:j,$mobileBottomFullWidth:S,$modalPadding:F,$border:A,"aria-labelledby":`modal-title-${W}`,"aria-describedby":`modal-description-${W}`,"aria-modal":"true",role:"dialog","data-testid":"testid-modal",...G},o.default.createElement(u,{$overflow:D},M&&o.default.createElement(h,{$justifyContent:"end"},o.default.createElement(n.IconButton_default,{onClick:K,size:"small",variant:"tertiary",color:"neutral",icon:"close",ariaLabel:"Close",buttonProps:{autoFocus:!0}})),c&&o.default.createElement(x,null,c),v&&o.default.createElement(p,{id:`modal-title-${W}`},v),g&&o.default.createElement(f,{id:`modal-description-${W}`},g),b&&o.default.createElement(m,{$modalBodyMargin:O},b),U&&o.default.createElement(m,{$modalBodyMargin:O},U)),k&&o.default.createElement(h,null,k)))))});$.Modal=v,$.Main=b,$.Banner=k,$.Title=_,$.Description=w,$.Body=E,$.Action=g,$.Divider=C,e.s(["NSModal",0,$],397681)},914984,e=>{"use strict";var t=e.i(843476);e.s(["ArrowRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M5 12h14m0 0-6-6m6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronLeftIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m15 6-6 6 6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m9 6 6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"CloseIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M6 6l12 12M18 6 6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"RadioUncheckedIcon",0,function({className:e}){return(0,t.jsx)("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":!0,focusable:"false",className:e,children:(0,t.jsx)("path",{d:"M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 14.6 5.4 18.3333 10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667ZM10 16.6667C6.31667 16.6667 3.33333 13.6833 3.33333 10C3.33333 6.31667 6.31667 3.33333 10 3.33333C13.6833 3.33333 16.6667 6.31667 16.6667 10C16.6667 13.6833 13.6833 16.6667 10 16.6667Z",fill:"currentColor"})})},"SparkIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M12 2c.45 4.2 2.3 6.05 6.5 6.5-4.2.45-6.05 2.3-6.5 6.5-.45-4.2-2.3-6.05-6.5-6.5C9.7 8.05 11.55 6.2 12 2z"})})},"YouTubePlayIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 68 48",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("path",{d:"M66.5 7.5a8.5 8.5 0 0 0-6-6C55.2 0 34 0 34 0S12.8 0 7.5 1.5a8.5 8.5 0 0 0-6 6A89 89 0 0 0 0 24a89 89 0 0 0 1.5 16.5 8.5 8.5 0 0 0 6 6C12.8 48 34 48 34 48s21.2 0 26.5-1.5a8.5 8.5 0 0 0 6-6A89 89 0 0 0 68 24a89 89 0 0 0-1.5-16.5z",fill:"#FF0000"}),(0,t.jsx)("path",{d:"M27.2 34.29 44.85 24 27.2 13.71v20.58z",fill:"#fff"})]})}])},211269,e=>{"use strict";e.s(["PORTAL_FONT_CLASS",0,"grauity-portal-font font-ds [font-feature-settings:'ss01','cv11']"])},759790,e=>{"use strict";var t=e.i(843476),r=e.i(271645),a=e.i(339415),n=e.i(549838),i=e.i(336835);let l=new Set(["multi_step_rcb_form_partial_fill_hash","generic_signup_form_partial_fill_hash"]),o=new WeakMap;function s(e,t){if(e)try{t?window.localStorage.setItem(e,t):window.localStorage.removeItem(e)}catch{}}var d=e.i(58863),u=e.i(851361),c=e.i(688921),p=e.i(42872);let f=/^[0-9]{10}$/,m=[];function h(e,t){let r=e[t];return"string"==typeof r?r:""}function x(e,t){let r=e[t];return Array.isArray(r)?r:void 0}function y(e,t){let r=h(t,e.key);return"phone"!==e.type&&e.lowercase?r.toLowerCase():r}function v(e,t){let r=y(e,t).trim();return r?"phone"===e.type?f.test(r)?void 0:"Invalid input":e.pattern?(e.pattern.lastIndex=0,e.pattern.test(r)?void 0:"Invalid input"):void 0:e.required?`${e.label} is required`:void 0}function g(e,t,r){r?e.getAttribute(t)!==r&&e.setAttribute(t,r):e.removeAttribute(t)}function b(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"m8.5 12.4 2.5 2.5L16 9.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})}e.s(["EmployerLeadForm",0,function({formId:e,fields:f,responseType:k,heading:_,from:w,nextUrl:E,submitLabel:C="Submit",successMessage:$="Thank you! We've received your message.",pageName:j,parentUrl:R,utmDefaults:N,storageKey:S,session:F,onSubmitted:A,className:O}){var M;let P,I,L,T,U,B,z=(0,r.useRef)(F),[D,H]=(0,r.useState)(()=>({...F?.values})),q=(0,r.useRef)(D),[K,W]=(0,r.useState)({}),[G,Y]=(0,r.useState)(!1),[Z,V]=(0,r.useState)(!1),[X,J]=(0,r.useState)(""),[Q,ee]=(0,r.useState)(!1),[et,er]=(0,r.useState)(""),[ea,en]=(0,r.useState)(null),ei=(0,r.useRef)(null),el=(0,r.useRef)(null),eo=(0,r.useRef)(!1),{save:es}=(M={storageKey:S,session:F},P=(0,r.useRef)(null),P.current??=(I=M?.session??{hash:""},L=M?.storageKey??"",{holder:I,storageKey:l.has(L)?"":L,channel:((T=o.get(I))||(T={queue:Promise.resolve(),lastSaved:""},o.set(I,T)),T)}),U=P.current,B=M?.storageKey,(0,r.useEffect)(()=>{B&&l.has(B)&&console.warn(`usePartialLead: storageKey "${B}" belongs to another lead form and is ignored. This lead's hash stays in memory.`)},[B]),{save:(0,r.useCallback)((e,t=!1)=>{let{holder:r,storageKey:a,channel:n}=U,l=async()=>{let l=JSON.stringify(e);if(!t&&(!e.fields.some(([,e])=>"string"==typeof e?""!==e.trim():e.length>0)||l===n.lastSaved))return{ok:!0};let o=r.hash||function(e){if(!e)return"";try{return window.localStorage.getItem(e)??""}catch{return""}}(a),d=await (0,i.saveGenericLead)(e,{hash:o||void 0,completed:t});if(!d.ok&&t&&o&&(d=await (0,i.saveGenericLead)(e,{completed:t})),!d.ok)return{ok:!1,error:d.error};if(t)r.hash="",s(a,""),n.lastSaved="";else{let e=d.hash||o;e&&(r.hash=e,s(a,e)),n.lastSaved=l}return{ok:!0}},o=n.queue.then(l,l);return n.queue=o.catch(()=>{}),o},[U])}),ed=(0,u.useSendAnalyticsEvent)(),eu=t=>`${e}-${t}`,ec=eu("heading"),ep=(t,r={})=>ed({...t,eventData:(0,c.buildEventData)({...w?{from:w}:{},..._?{heading:_}:{},responseType:k,formId:e,...r},j)});(0,r.useEffect)(()=>{ep(c.GENERIC_FORM_EVENTS.FORM_LOADED)},[]),(0,r.useEffect)(()=>{let t=ei.current;if(!t)return;let r=new Map;for(let e of t.querySelectorAll("input"))r.set(e.id,e);for(let t of f){if("checkbox-group"===t.type)continue;let a=`${e}-${t.key}`,n=r.get(a);if(!n)continue;let i=!!((G||K[t.key])&&v(t,D));g(n,"aria-required",t.required?"true":""),g(n,"aria-invalid",i?"true":""),g(n,"aria-describedby",["phone"===t.type?`${a}-prefix`:"",i?`${a}-error`:""].filter(Boolean).join(" "))}},[f,e,D,K,G,Q]),(0,r.useEffect)(()=>{if(ea){for(let e of ei.current?.querySelectorAll("input")??[])if(e.id===ea.id)return void e.focus()}},[ea]),(0,r.useEffect)(()=>{if(!Q)return;let e=el.current;if(!e)return;e.focus({preventScroll:!0});let{top:t,bottom:r}=e.getBoundingClientRect(),a=.1*window.innerHeight;if(t>=a&&r<=window.innerHeight-a)return;let n=window.matchMedia("(prefers-reduced-motion: reduce)").matches;e.scrollIntoView({block:"center",behavior:n?"auto":"smooth"})},[Q]);let ef=e=>(q.current=e,H(e),z.current&&(z.current.values=e),e),em=e=>{let t=function(){try{return(0,d.getCookie)("access_token_ns_student_web")}catch{return""}}();return{responseType:k,fields:function(e,t){let r=[];for(let a of e){if("checkbox-group"!==a.type){r.push([a.key,y(a,t)]);continue}let e=x(t,a.key);e&&(r.push([a.key,e]),a.other&&e.includes(a.other.value)&&r.push([a.other.key,h(t,a.other.key)]))}return r}(f,e),phoneKey:f.find(e=>"phone"===e.type)?.key,from:w||null,...E?{nextUrl:E}:{},parentUrl:R??window.location.href,utmParams:function(e){let t=(0,d.getUtmParams)();for(let[r,a]of Object.entries(e??{}))r in t||(t[r]=a);return t}(N),...t?{accessToken:t}:{}}},eh=e=>{eo.current||es(em(e))};async function ex(e){if(e.preventDefault(),eo.current)return;Y(!0),J("");let t=q.current,r=f.find(e=>"checkbox-group"!==e.type&&void 0!==v(e,t));if(r)return void en({id:eu(r.key)});ep(c.GENERIC_FORM_EVENTS.FORM_SUBMIT_CLICK);let a=E?window.open("about:blank","_blank"):null;eo.current=!0,V(!0);let n=await es(em(t),!0);n.ok?(z.current&&(z.current.values={}),ee(!0),ep(c.GENERIC_FORM_EVENTS.FORM_SUBMIT_SUCCESS),A?.(),a&&E?(a.opener=null,a.location.href=E):E&&er(E)):(a?.close(),eo.current=!1,V(!1),J(n.error??"Could not submit your request. Please try again."),ep(c.GENERIC_FORM_EVENTS.FORM_SUBMIT_FAILURE,{error:n.error??""}))}return(0,t.jsxs)("div",{ref:ei,className:(0,n.cn)("employer-lead-form flex w-full flex-col [&_label:not(:has(input))]:font-[600]",O),children:[_?(0,t.jsx)("p",{id:ec,className:"text-ds-ink pb-4 text-base leading-[26px] font-semibold",children:_}):null,Q?null:(0,t.jsxs)("form",{className:"flex flex-col gap-4",onSubmit:ex,"aria-labelledby":_?ec:void 0,noValidate:!0,children:[f.map(e=>{let r,a,n,i,l,o;return"checkbox-group"===e.type?(r=eu(e.key),a=x(D,e.key)??m,n=e.other,(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[e.header?(0,t.jsx)("p",{className:"text-ds-muted text-xs leading-4 font-semibold tracking-[0.06em]",children:e.header}):null,(0,t.jsxs)("fieldset",{className:"m-0 min-w-0 border-0 p-0",children:[(0,t.jsx)("legend",{className:"text-ds-ink mb-1 p-0 text-sm leading-[22px] font-semibold",children:e.label}),(0,t.jsx)("div",{className:"grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] gap-x-4",children:e.options.map(n=>{let i=`${r}-${n.value}`;return(0,t.jsxs)("label",{htmlFor:i,className:"text-ds-ink flex cursor-pointer items-start gap-2.5 py-1.5 text-sm leading-5",children:[(0,t.jsx)("input",{type:"checkbox",id:i,name:r,value:n.value,checked:a.includes(n.value),onChange:t=>{var r,a;let i,l;return r=n.value,a=t.target.checked,i=x(q.current,e.key)??m,l=a?i.includes(r)?[...i]:[...i,r]:i.filter(e=>e!==r),void eh(ef({...q.current,[e.key]:l}))},className:"border-ds-border accent-ds-blue mt-0.5 size-4 shrink-0 cursor-pointer rounded"}),n.label]},n.value)})}),n&&a.includes(n.value)?(0,t.jsxs)("div",{className:"mt-1.5",children:[(0,t.jsx)("label",{htmlFor:eu(n.key),className:"sr-only",children:n.placeholder}),(0,t.jsx)(p.FormField,{field:{type:"text",name:eu(n.key),placeholder:n.placeholder,autoComplete:"off"},value:h(D,n.key),onChange:(e,t)=>ef({...q.current,[n.key]:t}),onCommit:()=>eh(q.current)})]}):null]})]},e.key)):(i=eu(e.key),l=G||K[e.key]?v(e,D):void 0,o={type:e.type,name:i,label:e.label,placeholder:e.placeholder,required:e.required,autoComplete:"phone"===e.type?void 0:e.autoComplete},(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsx)(p.FormField,{field:o,value:h(D,e.key),onChange:(t,r)=>ef({...q.current,[e.key]:r}),onCommit:()=>{let t,r;(r=y(e,t=q.current))!==h(t,e.key)&&(t=ef({...t,[e.key]:r})),W(t=>t[e.key]?t:{...t,[e.key]:!0}),eh(t)},phoneAdornment:"phone"===e.type?(0,t.jsx)("span",{id:`${i}-prefix`,className:"ds-phone-prefix text-ds-ink inline-flex w-14 shrink-0 items-center justify-center text-sm font-medium whitespace-nowrap",children:"🇮🇳 +91"}):void 0}),l?(0,t.jsx)("p",{id:`${i}-error`,className:"text-xs leading-4 font-medium tracking-[0.048px] text-[#d22d3a]",children:l}):null]},e.key))}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)(a.default,{type:"submit",variant:"primary",size:"large",fullWidth:!0,disabled:Z,children:Z?"Please Wait...":C}),(0,t.jsx)("div",{role:"alert",children:X?(0,t.jsx)("p",{className:"mt-2 text-center text-sm leading-[22px] text-[#d22d3a]",children:X}):null})]})]}),(0,t.jsx)("div",{ref:el,role:"status","aria-live":"polite",tabIndex:-1,className:"outline-none",children:Q?(0,t.jsxs)("div",{className:"flex flex-col items-center gap-3 py-8 text-center",children:[(0,t.jsx)(b,{className:"text-ds-green size-12"}),(0,t.jsx)("p",{className:"text-ds-ink text-base leading-[26px] font-semibold",children:$}),et?(0,t.jsx)("a",{href:et,target:"_blank",rel:"noopener noreferrer",className:"text-ds-blue text-sm font-semibold underline",children:"Open the page that couldn't launch automatically →"}):null]}):null})]})}],759790)},654657,e=>{"use strict";var t=e.i(233028);let r=/^[a-zA-Z ]+$/,a=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,n={pageName:t.HFU_PAGE_NAME,utmDefaults:{utm_referer:t.HFU_UTM_REFERER}},i={...n,fields:[{type:"text",key:"full_name",label:"Full Name",placeholder:"Enter your full name",required:!0,pattern:r,autoComplete:"name"},{type:"email",key:"email",label:"Email ID",placeholder:"Enter your email",required:!0,pattern:a,lowercase:!0,autoComplete:"email"},{type:"phone",key:"phone_number",label:"Phone Number",placeholder:"Enter your phone number",required:!0}],responseType:t.HFU_RESPONSE_TYPE.CALLBACK},l={...n,fields:[{type:"text",key:"name",label:"Name",placeholder:"Enter your name",required:!0,pattern:r,autoComplete:"name"},{type:"text",key:"company_name",label:"Company Name",placeholder:"Enter your company name",required:!0,pattern:/^[^\p{Cc}\p{Zl}\p{Zp}]*[\p{L}\p{N}][^\p{Cc}\p{Zl}\p{Zp}]*$/u,autoComplete:"organization"},{type:"phone",key:"phone_number",label:"Phone Number",placeholder:"Enter your phone number",required:!0},{type:"email",key:"email",label:"Email ID",placeholder:"Enter your email",required:!0,pattern:a,lowercase:!0,autoComplete:"email"},{type:"checkbox-group",key:"data_roles",label:"Data Roles",header:"REQUIREMENTS",options:[{label:"MIS Executive",value:"mis_executive"},{label:"Data Scientist",value:"data_scientist"},{label:"Data Analyst",value:"data_analyst"},{label:"AI/ML Engineer",value:"ai_ml_engineer"},{label:"Business Analyst",value:"business_analyst"},{label:"Data/ML Ops Engineer",value:"data_ml_ops_engineer"},{label:"Domain Based Analyst",value:"domain_based_analyst"}]},{type:"checkbox-group",key:"software_development_roles",label:"Software Development Roles",options:[{label:"Full Stack Developer",value:"full_stack_developer"},{label:"Frontend Developer",value:"frontend_developer"},{label:"Others",value:"others"}],other:{value:"others",key:"others",placeholder:"Please write your preferred requirement here..."}}],responseType:t.HFU_RESPONSE_TYPE.CONTACT};e.s(["HFU_CALLBACK_FORM_PROPS",0,i,"HFU_CONTACT_FORM_PROPS",0,l,"HFU_FORM",0,{hero:{formId:"hfu-hero",storageKey:"hfu_v3_hero_lead_hash"},callback:{formId:"hfu-callback",storageKey:"hfu_v3_callback_lead_hash"},startHiring:{formId:"hfu-start-hiring",storageKey:"hfu_v3_start_hiring_lead_hash"},contact:{formId:"hfu-contact",storageKey:"hfu_v3_contact_lead_hash"}}])},408849,e=>{"use strict";var t=e.i(843476),r=e.i(271645),a=e.i(397681),n=e.i(692156),i=e.i(759790),l=e.i(914984),o=e.i(549838),s=e.i(211269),d=e.i(233028),u=e.i(147193),c=e.i(599609),p=e.i(654657);let f={callback:p.HFU_FORM.callback,"start-hiring":p.HFU_FORM.startHiring},m={callback:"h-[608px] min-[480px]:h-[500px]","start-hiring":"h-[608px] min-[480px]:h-[500px]","sign-in":"h-[608px] min-[480px]:h-[650px]"},h=(0,o.cn)("[--bg-subtle-alpha-overlay:rgba(8,8,8,0.1)]","[--hfu-modal-width:95vw] min-[768px]:[--hfu-modal-width:480px]","[&_[role=dialog]]:bg-transparent! [&_[role=dialog]]:[box-shadow:none]!"),x='[role="menu"]',y='[data-testid="testid-overlay"]';e.s(["HfuModalHost",0,function({modal:e,sessions:v,onClose:g,page:b}){let k=(0,r.useRef)(null),_=(0,r.useMemo)(()=>b?{...p.HFU_CALLBACK_FORM_PROPS,pageName:b.pageName,utmDefaults:null===b.utmReferer?void 0:{utm_referer:b.utmReferer}}:p.HFU_CALLBACK_FORM_PROPS,[b]),w=(0,r.useMemo)(()=>b?{...c.HFU_APPLY,utmDefaults:null===b.utmReferer?void 0:{utm_referer:b.utmReferer}}:c.HFU_APPLY,[b]),E=b?b.leadForms:f,C=b?b.formSource:d.FORM_SOURCE,$=e?"sign-in"===e.kind?c.HFU_APPLY.title:e.heading:"";(0,r.useEffect)(()=>{$&&k.current?.closest('[role="dialog"]')?.setAttribute("aria-label",$)},[$]);let j=null!==e;return(0,r.useEffect)(()=>{if(!j)return;let e=e=>{if("Tab"!==e.key)return;let t=k.current;if(!t)return;let r=Array.from(t.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(e=>e.getClientRects().length>0),a=r[0],n=r[r.length-1];if(!a||!n)return;let i=document.activeElement;if(i?.closest(x)?.closest(y))return;let l=e.shiftKey?Node.DOCUMENT_POSITION_PRECEDING:Node.DOCUMENT_POSITION_FOLLOWING;i&&t.contains(i)&&r.some(e=>e!==i&&i.compareDocumentPosition(e)&l)||(e.preventDefault(),(e.shiftKey?n:a).focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[j]),(0,t.jsx)(a.NSModal,{isOpen:j,onClose:()=>{let e=document.querySelector(x)?.closest(y)??null;e?e.click():g()},hideOnClickAway:!0,showCloseButton:!1,width:"var(--hfu-modal-width)",border:"none",animatePresence:"fade",overflow:"hidden",modalPadding:"0",className:h,children:e?(0,t.jsxs)("div",{ref:k,className:(0,o.cn)("relative flex max-h-[95svh] w-full flex-col rounded-[15px] border border-[#dddada] bg-white p-[15px] text-left text-[16px] leading-normal font-normal tracking-normal whitespace-normal text-[#16191d] min-[480px]:rounded-[16px] min-[480px]:p-[16px]",s.PORTAL_FONT_CLASS,"hire-typography hfu-v3-typography"),children:[(0,t.jsx)("style",{children:"body { overflow: hidden !important; }"}),(0,t.jsx)("button",{type:"button",onClick:g,"aria-label":"Close",className:"absolute top-[2.5px] right-[2.5px] z-10 flex size-[40px] cursor-pointer items-center justify-center rounded-full text-[#0f1729] min-[480px]:top-[4px] min-[480px]:right-[4px]",children:(0,t.jsx)(l.CloseIcon,{className:"size-[22.5px] min-[480px]:size-[24px]"})}),(0,t.jsx)("div",{"data-clarity-mask":"true",className:(0,o.cn)("-mx-[4px] min-h-0 shrink overflow-x-clip overflow-y-auto overscroll-contain px-[4px]",m[e.kind]),children:"sign-in"===e.kind?(0,t.jsx)(n.ApplyForm,{...w,selfRedirectUrl:b?b.signInRedirect??`${window.location.pathname}${window.location.search}`:u.HFU_CANDIDATE_PROFILES_PATH,parentUrl:window.location.href,pageName:b?b.pageName:d.HFU_PAGE_NAME}):(0,t.jsx)(i.EmployerLeadForm,{..._,...E[e.kind],heading:e.heading,from:C[e.from],session:v[e.kind]},e.kind)})]}):null})}])}]);