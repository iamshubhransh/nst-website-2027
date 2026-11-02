(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,85842,e=>{"use strict";var a=e.i(843476),r=e.i(271645),t=e.i(339415),l=e.i(703109),n=e.i(228093),s=e.i(378191),i=e.i(837339),o=e.i(997053),d=o.styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`,u=o.styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    font-family: var(--font-family);
    width: fit-content;
    height: fit-content;
    padding-left: 2px;
`,c=o.styled.input`
    -webkit-appearance: none;
    display: block;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1.4px solid var(--border-moderate-primary-default, #c9cfd9);
    position: relative;
    cursor: pointer;
    transition: border-color 70ms ease, background 70ms ease;
    outline: none;
    background: var(--bg-subtle-primary-default, #fff);

    ${({$size:e})=>"small"===e?o.css`
                width: 12px;
                height: 12px;
                border-width: 1.25px;
            `:"large"===e?o.css`
                width: 20px;
                height: 20px;
                border-width: 1.5px;
            `:o.css`
            width: 16px;
            height: 16px;
            border-width: 1.4px;
        `}

    ${({$color:e})=>((e="brand")=>o.css`
        border-color: ${`var(--border-moderate-${"brand"===e?"primary":e}-default)`};

        &:hover:not(:disabled):not(:active):not(:checked) {
            border-color: var(--border-subtle-${e}-default);
            background: var(--bg-subtle-${e}-default);
        }

        &:checked {
            border-color: var(--border-emphasis-${e}-default);
            background: var(--bg-subtle-primary-default, #fff);
            transition: border-color 150ms ease, background 150ms ease;
            padding: 3px;
        }

        &:checked::after {
            background: var(--bg-emphasis-${e}-default);
        }

        &:active:not(:disabled) {
            border-color: var(--border-moderate-${e}-default);
        }

        &:focus {
            outline: none;
            border: 1px solid var(--border-emphasis-${e}-default);
        }

        &:focus-visible:not(:disabled) {
            outline: none;
            border: 1px solid var(--border-emphasis-${e}-default);
            box-shadow: 0 0 0 3px var(--border-subtle-${e}-default);
        }
    `)(e)}

    &:checked::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: background 150ms ease;

        ${({$size:e})=>"small"===e?o.css`
                    width: 7px;
                    height: 7px;
                `:"large"===e?o.css`
                    width: 12px;
                    height: 12px;
                `:o.css`
                width: 10px;
                height: 10px;
            `}
    }

    &:disabled {
        border: 1.4px solid var(--border-subtle-primary-disabled, #edeff3);
        cursor: not-allowed;
    }
`,m=(0,o.styled)(i.StyledLabel)`
    color: var(--text-emphasis-primary-default, #16191d);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.1px;
    cursor: pointer;

    ${({$size:e})=>"small"===e?o.css`
                font-size: 12px;
                line-height: 18px;
            `:"large"===e?o.css`
                font-size: 16px;
                line-height: 26px;
            `:o.css`
            font-size: 14px;
            line-height: 22px;
        `}

    ${({$isDisabled:e})=>e&&o.css`
            color: var(--text-emphasis-primary-disabled, #8c95a6);
            cursor: not-allowed;
        `};
`,p=e=>{let{name:a,value:t,label:l,isRequired:i=!1,size:o="medium",state:p="default",helpMessage:h,errorMessage:f,onChange:b=()=>{},checked:x=!1,isDisabled:g=!1,className:v,color:y="brand"}=e,k=(0,r.useId)();return r.default.createElement(d,null,r.default.createElement(u,{className:v},r.default.createElement(c,{"aria-label":l,"aria-checked":x,id:`radio-button-${k}`,$size:o,$state:p,type:"radio",name:a,value:t,onChange:e=>{b(e)},disabled:g,checked:x,$color:y}),l&&r.default.createElement(m,{htmlFor:`radio-button-${k}`,$isRequired:i,$isDisabled:g,$size:o,$color:"brand"===y?"primary":y},l)),h&&r.default.createElement(n.HelpMessage,null,h),f&&r.default.createElement(s.ErrorMessage,null,f))},h=e.i(866700),f=o.styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    font-family: var(--font-family);
`,b=(0,r.forwardRef)((e,a)=>{let{name:t,label:l,items:i=[],value:o=null,onChange:d=()=>{},isRequired:u=!1,helpMessage:c,errorMessage:m,color:b="brand",className:x}=e;return r.default.createElement(f,{ref:a,className:x,role:"group"},l&&r.default.createElement(h.Label,{name:t,isRequired:u,color:"brand"===b?"primary":b},l),i.map(e=>r.default.createElement(p,{key:`${t}-${e.value}`,name:t,...e,checked:o===e.value,color:b,onChange:e=>{d(e.target.value)}})),c&&r.default.createElement(n.HelpMessage,null,c),m&&r.default.createElement(s.ErrorMessage,null,m))}),x=e.i(501147),g=e.i(914984),v=e.i(356105),y=e.i(830249),k=e.i(680395),E=e.i(527341),j=e.i(58863),N=e.i(916687),w=e.i(851361),C=e.i(688921);let S=["12th","Diploma","Undergraduate","Postgraduate"].map(e=>({label:e,value:e})),R=[{value:"before_2013",label:"Before 2013"},{value:"2013_2026",label:"2013 - 2026"},{value:"2027",label:"2027"},{value:"after_2027",label:"After 2027"},{value:"haven_t_joined_college_yet",label:"Haven't joined college yet"}].map(e=>({label:e.label,value:e.value})),T={key:k.DEFAULT_RCB_QUALIFIER_KEYS[0],label:"Select your highest qualification",requiredLabel:"Highest Qualification is Required",items:S,weight:35},_={key:k.DEFAULT_RCB_QUALIFIER_KEYS[1],label:"Select your bachelor's graduation year (not masters)",requiredLabel:"Graduation Year is Required",items:R,weight:20},F=[T,_];e.s(["GRADUATION_YEAR_QUALIFIER",0,_,"HIGHEST_QUALIFICATION_QUALIFIER",0,T,"RcbForm",0,function({from:e,heading:n,qualifiers:s=F,responseType:i,formVariant:o,extraLeadFields:d,nextUrl:u,brochure:c,brochureFilename:m,parentUrl:p,successSlot:h=null,fillHeight:f=!1,capClassName:S,pageName:R,prefill:T,autoSubmit:_=!1,stepped:$=!1,steppedProgressLabels:M,steppedSubmitLabel:A="Submit Details",onSubmitted:I,onStepChange:L,onAnswer:U,steppedAdvanceOnSelect:q=!0,steppedHeader:P,steppedBodyClassName:D,onQuestionsComplete:z,steppedInitial:B,steppedContactIntro:O,steppedFollowUps:H,renderSteppedFollowUp:Q,onLeadHash:G,leadHashSource:V,contactCopy:K}){let[W,Y]=(0,r.useState)(()=>({...(0,E.seedAnswers)(T,s),...$?B?.answers:void 0})),[J,X]=(0,r.useState)(T?.fullName??""),[Z,ee]=(0,r.useState)(T?.phone??""),[ea,er]=(0,r.useState)(T?.email??""),[et,el]=(0,r.useState)(T?.whatsapp??!0),[en,es]=(0,r.useState)(!1),[ei,eo]=(0,r.useState)({}),ed=e=>en||!!ei[e],[eu,ec]=(0,r.useState)(!1),[em,ep]=(0,r.useState)(""),[eh,ef]=(0,r.useState)(!1),[eb,ex]=(0,r.useState)(20),[eg,ev]=(0,r.useState)("");(0,r.useEffect)(()=>ev((0,j.getQueryParam)("heading")),[]);let ey=(0,y.useParentUrl)()||p||"",{save:ek}=(0,v.usePartialRcb)({resumeStoredHash:!T,onHash:G,hashSource:V}),eE=(0,w.useSendAnalyticsEvent)(),ej=(0,r.useRef)(null),eN=(0,r.useRef)(null),ew=(0,r.useRef)(null),eC=(0,r.useRef)(null),eS=(0,r.useRef)(!0),[eR,eT]=(0,r.useState)(()=>!!(_&&T)),[e_,eF]=(0,r.useState)(!1),e$=(0,r.useRef)(null),eM=(0,r.useRef)(!1),[eA,eI]=(0,r.useState)(""),[eL,eU]=(0,r.useState)(()=>$?B?.step??0:0),eq=(0,r.useRef)(!1),eP=e||(0,j.getQueryParam)("from"),eD=u||(0,j.getQueryParam)("nextUrl")||void 0,ez=c||(0,j.getQueryParam)("downloadBrochureLink")||void 0,eB=n||eg||"Request a callback",eO=d?JSON.stringify(d):"",eH=(0,r.useMemo)(()=>eO?JSON.parse(eO):void 0,[eO]),eQ=!!T||s.every(e=>!!W[e.key]),eG=(0,E.rcbContactErrors)({name:J,phone:Z,email:ea},{requireEmail:$}),eV=eQ&&!eG.name&&!eG.phone&&!eG.email,eK=s.length,eW=$?H??[]:[],eY=eL-eK-1,eJ=eY>=0?eW[eY]:void 0,eX=!$||eL>=eK&&!eJ,eZ=$?s[eL]:void 0,e0=!!(eZ&&W[eZ.key]),e1=!!(eZ&&en&&!W[eZ.key]),e2=M?.[Math.min(eL,M.length-1)]??"",e3=(0,r.useCallback)(()=>(0,E.buildRcbInput)({name:J,phone:Z,email:ea,answers:W,whatsapp:et,from:eP,parentUrl:ey,nextUrl:eD,responseType:i,formVariant:o,extraLeadFields:eH}),[J,Z,ea,W,et,eP,ey,eD,i,o,eH]),e5=(0,r.useRef)(eL);e5.current=eL;let e6=(0,r.useRef)(W);e6.current=W;let e8=(0,r.useRef)(null),e4=(0,r.useRef)(!1),e7=(0,r.useRef)(e3);e7.current=e3;let e9=(0,r.useCallback)(e=>{if(e8.current&&clearTimeout(e8.current),e8.current=null,e4.current=!1,ej.current?.scrollTo({top:0}),$&&z&&e>=s.length){eC.current&&clearTimeout(eC.current),ek(e7.current(),!1),z();return}eU(e),es(!1),eo({}),L?.(e)},[L,$,z,s.length,ek]);(0,r.useEffect)(()=>()=>{e8.current&&clearTimeout(e8.current)},[]);let ae=(0,r.useCallback)(e=>{if(!$)return;let a=e.target;if(!a||!/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName))return;let r=ej.current;r&&requestAnimationFrame(()=>{let e=(a.closest("[data-stepped-field]")??a).getBoundingClientRect(),t=r.getBoundingClientRect(),l=0;e.bottom>t.bottom-8?l=e.bottom-(t.bottom-8):e.top<t.top+8&&(l=e.top-(t.top+8));let n=r.querySelector("[data-dsv7-submit]");if(n){let e=n.getBoundingClientRect().bottom-(t.bottom-8),r=a.getBoundingClientRect().top-t.top-8;e>l&&(l=Math.max(l,r))}0!==l&&r.scrollTo({top:r.scrollTop+l,behavior:"smooth"})})},[$]),aa=(0,r.useCallback)(e=>{if(!$)return;let a=e.target;if(!a||"INPUT"!==a.tagName)return;let r=a.name;("name"===r||"phone"===r||"email"===r)&&eo(e=>e[r]?e:{...e,[r]:!0})},[$]),ar=(0,r.useCallback)((e,a)=>{e6.current[e]!==a&&(e6.current={...e6.current,[e]:a},Y(r=>({...r,[e]:a})),U?.(e,a))},[U]),at=(0,r.useCallback)((e,a)=>{e4.current&&e6.current[e]===a||(ar(e,a),q&&(e4.current=!0,e8.current&&clearTimeout(e8.current),e8.current=setTimeout(()=>{e9(e5.current+1)},260)))},[ar,q,e9]);(0,r.useEffect)(()=>{let e=20;for(let a of s)W[a.key]&&(e+=a.weight);J&&(e+=15),Z&&(e+=5),ex(e)},[s,W,J,Z]);let al=(0,r.useRef)(eR);al.current=eR,(0,r.useEffect)(()=>{if(eS.current){eS.current=!1;return}if(!al.current)return eC.current&&clearTimeout(eC.current),eC.current=setTimeout(()=>void ek(e3(),!1,{updateLsq:eq.current}),700),()=>{eC.current&&clearTimeout(eC.current)}},[e3,ek]);let an=eQ&&!(T&&s.some(e=>!W[e.key]));(0,r.useEffect)(()=>{if($||!an)return;let e=ej.current,a=eN.current;e&&a&&e.scrollTo({top:e.scrollTop+a.getBoundingClientRect().top-e.getBoundingClientRect().top,behavior:"smooth"})},[$,an]),(0,r.useEffect)(()=>{eE({...C.GENERIC_FORM_EVENTS.FORM_LOADED,eventData:(0,C.buildEventData)({from:eP,heading:eB,...T?{formState:"prefilled"}:{}},R)})},[]),(0,r.useEffect)(()=>{if(!eR)return;let e=requestAnimationFrame(()=>eF(!0));e$.current=setTimeout(()=>{eM.current=!0,ew.current?.requestSubmit()},3e3);let a=()=>{e$.current&&clearTimeout(e$.current),eT(!1),eF(!1)};return document.addEventListener("pointerdown",a,!0),document.addEventListener("keydown",a,!0),document.addEventListener("wheel",a,{capture:!0,passive:!0}),()=>{cancelAnimationFrame(e),e$.current&&clearTimeout(e$.current),document.removeEventListener("pointerdown",a,!0),document.removeEventListener("keydown",a,!0),document.removeEventListener("wheel",a,!0)}},[eR]);let[as,ai]=(0,r.useState)("");(0,r.useEffect)(()=>{if(!eR)return void ai("");let e=setTimeout(()=>ai("We filled in your saved details. Submitting automatically in a few seconds — press any key or tap to review first."),200);return()=>clearTimeout(e)},[eR]);let ao=(0,r.useRef)(()=>{});ao.current=()=>{let e=e5.current-eK-1,a=eW[e];if(a&&!eu){if(!e6.current[a.key])return void es(!0);if(e<eW.length-1)return void e9(e5.current+1);eC.current&&clearTimeout(eC.current),ec(!0),ep(""),(0,k.mergeUnlockProfile)({fullName:J,phone:Z,email:ea,whatsapp:et,qualifierAnswers:e6.current}),ek(e7.current(),!0,{updateLsq:!0}).then(e=>{if(e.ok){ef(!0),I?.();return}ec(!1),ep(e.error??"Could not submit your request. Please try again.")})}};let ad=()=>ao.current();async function au(e){e.preventDefault();let a=eM.current;if(eM.current=!1,e$.current&&clearTimeout(e$.current),eR&&(eT(!1),eF(!1)),a||es(!0),ep(""),eJ)return void ad();if($&&!eX){e0&&e9(eL+1);return}if(!a&&T&&s.some(e=>!W[e.key])||!eV||eu)return;eC.current&&clearTimeout(eC.current);let r=T?a?"auto_prefill":"manual_prefill":void 0;eE({...C.GENERIC_FORM_EVENTS.FORM_SUBMIT_CLICK,eventData:(0,C.buildEventData)({from:eP,heading:eB,...r?{submitType:r}:{}},R)});let t=eD&&0===eW.length?window.open("about:blank","_blank"):null;ec(!0);let l=await ek(e3(),0===eW.length,{updateLsq:eW.length>0});l.ok&&eW.length>0?(eq.current=!0,ec(!1),(0,k.mergeUnlockProfile)({fullName:J,phone:Z,email:ea,whatsapp:et,qualifierAnswers:W}),eE({...C.GENERIC_FORM_EVENTS.FORM_SUBMIT_SUCCESS,eventData:(0,C.buildEventData)({from:eP},R)}),e9(eK+1)):l.ok?(ef(!0),I?.(),(0,k.mergeUnlockProfile)({fullName:J,phone:Z,email:ea,whatsapp:et,qualifierAnswers:W}),eE({...C.GENERIC_FORM_EVENTS.FORM_SUBMIT_SUCCESS,eventData:(0,C.buildEventData)({from:eP,...r?{submitType:r}:{}},R)}),ez&&(0,j.downloadFile)(ez,m||"NewtonSchoolBrochure.pdf"),t&&eD?(t.opener=null,t.location.href=(0,j.appendUtmParams)(eD)):eD&&!t&&eI((0,j.appendUtmParams)(eD))):(t?.close(),ec(!1),ep(l.error??"Could not submit your request. Please try again."),eE({...C.GENERIC_FORM_EVENTS.FORM_SUBMIT_FAILURE,eventData:(0,C.buildEventData)({from:eP,error:l.error??"",...r?{submitType:r}:{}},R)}))}let ac=(e,r,t)=>(0,a.jsxs)("div",{"data-stepped-field":!0,className:"flex w-full flex-col gap-2",children:[(0,a.jsx)("label",{htmlFor:e,className:"leading-[26px]",children:(0,a.jsxs)(l.default,{as:"span",variant:"paragraph-sb-p2",color:"var(--text-emphasis-primary-default)",children:[r," ",(0,a.jsx)("span",{style:{color:"#d22d3a"},children:"*"})]})}),t]},e),am=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{"data-stepped-fields":!0,className:"flex w-full flex-col gap-3",children:[ac("name",K?.name?.label??"Full name",(0,a.jsx)(x.NSTextField,{name:"name",type:"text",autoComplete:"name",placeholder:K?.name?.placeholder??"eg. Nishant Chandra",value:J,onChange:e=>X(e.target.value),color:ed("name")&&eG.name?"error":void 0,errorMessage:ed("name")&&eG.name?(0,E.rcbContactErrorMessage)("name",J):void 0})),ac("phone",K?.phone?.label??"Phone number",(0,a.jsx)(x.NSTextField,{name:"phone",type:"tel",inputMode:"numeric",autoComplete:"tel",placeholder:K?.phone?.placeholder??"73493 64784",value:Z,onChange:e=>ee((0,N.normalizeIndianPhone)(e.target.value)),color:ed("phone")&&eG.phone?"error":void 0,adornments:{start:(0,a.jsx)(l.default,{as:"span",variant:"paragraph-md-p3",color:"var(--text-emphasis-secondary-default)",children:"+91"})},errorMessage:ed("phone")&&eG.phone?(0,E.rcbContactErrorMessage)("phone",Z):void 0})),ac("email",K?.email?.label??"Email",(0,a.jsx)(x.NSTextField,{name:"email",type:"email",autoComplete:"email",placeholder:K?.email?.placeholder??"eg. name@gmail.com",value:ea,onChange:e=>er(e.target.value),color:ed("email")&&eG.email?"error":void 0,errorMessage:ed("email")&&eG.email?(0,E.rcbContactErrorMessage)("email",ea):void 0})),(0,a.jsxs)("label",{className:"flex items-center gap-2.5",children:[(0,a.jsx)("input",{type:"checkbox",checked:et,onChange:e=>el(e.target.checked),className:"size-4 rounded border-[var(--border-subtle-primary-default)] accent-[var(--bg-emphasis-brand-default)]"}),(0,a.jsx)(l.default,{as:"span",variant:"paragraph-md-p3",color:"var(--text-emphasis-secondary-default)",children:"Send me updates on WhatsApp"})]})]}),em?(0,a.jsx)(l.default,{as:"p",variant:"paragraph-md-p3",color:"#d22d3a",textAlign:"center",children:em}):null,(0,a.jsx)("div",{className:"mt-5 w-full","data-dsv7-submit":!0,"data-invalid":!eV||void 0,children:(0,a.jsx)(t.default,{type:"submit",variant:"primary",size:"large",fullWidth:!0,loading:eu,disabled:eu,children:(0,a.jsxs)("span",{className:"flex items-center justify-center gap-1.5 text-base leading-[26px] tracking-[0.06px]",children:[A,(0,a.jsx)("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":!0,className:"size-5",children:(0,a.jsx)("path",{d:"M11.4275 5.39576C11.6716 5.15169 12.0673 5.15179 12.3115 5.39576L16.48 9.5648C16.5973 9.68205 16.6632 9.84102 16.6632 10.0068C16.6631 10.1726 16.5973 10.3315 16.48 10.4488L12.3115 14.6178C12.0674 14.8618 11.6715 14.8618 11.4275 14.6178C11.1835 14.3737 11.1834 13.9779 11.4275 13.7338L14.5333 10.6288H3.95588C3.61079 10.6285 3.33082 10.3486 3.33075 10.0035C3.33078 9.65836 3.6108 9.37835 3.95588 9.37822H14.5247L11.4275 6.28241C11.1834 6.03841 11.1835 5.6428 11.4275 5.39576Z",fill:"currentColor"})})]})})}),(0,a.jsx)("p",{role:"status","aria-live":"polite",className:"sr-only",children:as})]}),ap=(0,a.jsxs)("div",{ref:eN,className:"flex flex-col gap-4",children:[(0,a.jsx)(x.NSTextField,{name:"name",label:K?.name?.label??"Name",isRequired:!0,type:"text",autoComplete:"name",placeholder:K?.name?.placeholder??"Enter Name",value:J,onChange:e=>X(e.target.value),errorMessage:en&&eG.name?(0,E.rcbContactErrorMessage)("name",J):void 0}),(0,a.jsx)(x.NSTextField,{name:"phone",label:K?.phone?.label??"Phone",isRequired:!0,type:"tel",inputMode:"numeric",autoComplete:"tel",placeholder:K?.phone?.placeholder??"Enter Phone",value:Z,onChange:e=>ee((0,N.normalizeIndianPhone)(e.target.value)),adornments:{start:(0,a.jsx)("span",{className:"text-ds-ink inline-flex w-14 shrink-0 items-center justify-center text-sm font-medium whitespace-nowrap",children:"🇮🇳 +91"})},errorMessage:en&&eG.phone?(0,E.rcbContactErrorMessage)("phone",Z):void 0}),(0,a.jsx)(x.NSTextField,{name:"email",label:K?.email?.label??"Email",type:"email",autoComplete:"email",placeholder:K?.email?.placeholder??"Enter Email",value:ea,onChange:e=>er(e.target.value)}),(0,a.jsxs)("label",{className:"text-ds-muted flex items-center gap-2.5 text-sm",children:[(0,a.jsx)("input",{type:"checkbox",checked:et,onChange:e=>el(e.target.checked),className:"border-ds-border accent-ds-blue size-4 rounded"}),"Send me updates on WhatsApp"]})]});if(eh)return(0,a.jsxs)("div",{className:"p-5",children:[eA?(0,a.jsx)("a",{href:eA,target:"_blank",rel:"noopener noreferrer",className:"text-ds-blue mb-3 block text-sm font-semibold underline",children:"Open the page that couldn't launch automatically →"}):null,h]});if($){let e=Number.parseInt(e2,10);return(0,a.jsxs)("form",{ref:ew,className:"flex min-h-0 flex-1 flex-col",onSubmit:au,noValidate:!0,children:[P?P(eL):(0,a.jsxs)("div",{className:"flex shrink-0 items-center gap-3 border-b border-[var(--border-subtle-primary-disabled)] p-4",children:[(0,a.jsx)("div",{className:"h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-[var(--bg-subtle-tertiary-default)]",children:(0,a.jsx)("div",{className:"h-full rounded-full transition-[width] duration-[400ms] ease-in-out",style:{width:`${Number.isFinite(e)?e:0}%`,background:"linear-gradient(90deg, var(--bg-emphasis-success-default) 0%, var(--bg-emphasis-brand-default) 100%)"}})}),(0,a.jsx)("span",{className:"w-[30px] shrink-0 text-right leading-[22px]",children:(0,a.jsx)(l.default,{as:"span",variant:"paragraph-sb-p3",color:"var(--text-emphasis-secondary-default)",className:"whitespace-nowrap",children:e2})})]}),(0,a.jsx)("div",{ref:ej,onFocusCapture:ae,onBlurCapture:aa,className:`dsv7-hide-scrollbar flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-6 ${D??""}`,children:eJ?Q?.({question:eJ,index:eY,total:eW.length,value:W[eJ.key],pick:e=>{var a;return a=eJ.key,void(!eu&&ar(a,e))},next:ad,submitting:eu,isLast:eY===eW.length-1,showRequired:en&&!W[eJ.key],error:em})??null:eX?(0,a.jsxs)(a.Fragment,{children:[O,am]}):eZ?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{role:"radiogroup","aria-labelledby":`${eZ.key}-label`,"aria-describedby":e1?`${eZ.key}-error`:void 0,"aria-invalid":e1||void 0,className:"flex flex-col gap-4",children:[(0,a.jsx)("p",{id:`${eZ.key}-label`,className:"w-full",children:(0,a.jsxs)(l.default,{as:"span",variant:"paragraph-sb-p3",color:"var(--text-emphasis-primary-default)",children:[eZ.label," ",(0,a.jsx)("span",{style:{color:"#d22d3a"},children:"*"})]})}),(0,a.jsx)("div",{className:"flex flex-col gap-2.5",children:eZ.items.map(e=>{let r=W[eZ.key]===e.value;return(0,a.jsxs)("label",{className:`flex h-12 cursor-pointer items-start gap-2 overflow-hidden rounded-[12px] border px-3 py-4 transition-colors focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[var(--border-emphasis-brand-default)] ${r?"border-[var(--border-moderate-brand-default)] bg-[var(--bg-subtle-brand-default)]":"border-[var(--border-subtle-primary-default)] bg-[var(--bg-subtle-primary-default)]"}`,onClick:a=>{a.detail>0&&at(eZ.key,e.value)},children:[(0,a.jsx)("input",{type:"radio",name:eZ.key,value:e.value,checked:r,onChange:()=>ar(eZ.key,e.value),onKeyDown:a=>{(" "===a.key||"Enter"===a.key&&r)&&(a.preventDefault(),at(eZ.key,e.value))},className:"sr-only"}),(0,a.jsx)("span",{"aria-hidden":!0,className:"flex h-4 shrink-0 items-center justify-center",children:r?(0,a.jsx)("span",{className:"flex size-5 items-center justify-center rounded-full border border-[var(--border-subtle-brand-default)] bg-[var(--bg-subtle-primary-default)]",children:(0,a.jsx)("span",{className:"size-2.5 rounded-full bg-[var(--bg-emphasis-brand-default)]"})}):(0,a.jsx)(g.RadioUncheckedIcon,{className:"size-5 text-[var(--text-emphasis-primary-disabled)]"})}),(0,a.jsx)(l.default,{as:"span",variant:"paragraph-sb-l1",color:"var(--text-emphasis-primary-default)",children:e.label})]},e.value)})}),(0,a.jsx)("div",{id:`${eZ.key}-error`,role:"alert",className:e1?void 0:"-mt-4",children:e1?(0,a.jsx)(l.default,{as:"p",variant:"paragraph-md-p4",color:"#d22d3a",children:eZ.requiredLabel}):null})]}),(0,a.jsx)("button",{type:"submit",className:"sr-only self-center rounded-[8px] bg-[var(--bg-emphasis-brand-default)] text-sm leading-[22px] font-semibold text-[var(--text-emphasis-white-default)] focus-visible:not-sr-only focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-emphasis-brand-default)]",children:(0,a.jsx)("span",{className:"block px-3 py-2",children:"Continue"})})]}):null})]})}return(0,a.jsxs)("form",{ref:ew,className:`flex flex-col ${f?"h-full min-h-0":S??"max-h-[95svh]"}`,onSubmit:au,noValidate:!0,children:[(0,a.jsx)("div",{className:"flex shrink-0 items-center border-b border-[#e1e5ea] px-5 py-3 pr-12",children:(0,a.jsx)(l.default,{as:"p",variant:"heading-sb-h5",color:"var(--color-ds-ink)",textAlign:"left",children:eB})}),(0,a.jsxs)("div",{className:eQ?"shrink-0":"shrink-0 pt-3",children:[eQ?(0,a.jsxs)("div",{className:"mb-3 flex items-center justify-center gap-1 py-1.5",style:{background:"linear-gradient(180deg,#d9fced 0%,#fff 100%)",animation:"ds-slide-down 0.5s ease-in-out"},children:[(0,a.jsx)(g.SparkIcon,{className:"size-5 text-[#007A51]"}),(0,a.jsx)(l.default,{as:"span",variant:"paragraph-sb-p3",color:"#007A51",children:"You're just one step away"})]}):null,(0,a.jsx)("div",{className:"px-4 pb-1",children:(0,a.jsx)("div",{className:"h-1.5 w-full overflow-hidden rounded-full bg-[#f6f7f9]",children:(0,a.jsx)("div",{className:"bg-ds-blue h-full min-w-[6px] rounded-full transition-[width] duration-[400ms] ease-in-out",style:{width:`${eb}%`}})})})]}),(0,a.jsxs)("div",{ref:ej,className:"flex min-h-0 flex-1 flex-col gap-[18px] overflow-x-hidden overflow-y-auto px-4 py-4",children:[s.map(e=>(0,a.jsxs)("div",{children:[(0,a.jsx)(b,{name:e.key,label:e.label,isRequired:!0,items:e.items,value:W[e.key]??"",onChange:a=>Y(r=>({...r,[e.key]:String(a)}))}),en&&!W[e.key]?(0,a.jsx)(l.default,{as:"p",variant:"paragraph-md-p4",color:"#d22d3a",className:"mt-1",children:e.requiredLabel}):null]},e.key)),eQ?ap:null]}),(0,a.jsxs)("div",{className:"shrink-0 border-t border-[#e1e5ea] p-4",children:[em?(0,a.jsx)(l.default,{as:"p",variant:"paragraph-md-p3",color:"#d22d3a",textAlign:"center",className:"mb-2",children:em}):null,(0,a.jsxs)("div",{className:"relative overflow-hidden rounded-lg",children:[eR?(0,a.jsx)("span",{"aria-hidden":!0,className:`pointer-events-none absolute inset-0 z-10 origin-left bg-white/30 transition-transform duration-[3000ms] ease-linear motion-reduce:hidden ${e_?"scale-x-100":"scale-x-0"}`}):null,(0,a.jsx)(t.default,{type:"submit",variant:"primary",size:"large",fullWidth:!0,loading:eu,disabled:eu,children:"Submit"})]}),eR?(0,a.jsx)("p",{className:"text-ds-muted mt-2 text-center text-xs",children:"Submitting automatically — tap or press any key to edit first"}):null,(0,a.jsx)("p",{role:"status","aria-live":"polite",className:"sr-only",children:as})]})]})}],85842)}]);