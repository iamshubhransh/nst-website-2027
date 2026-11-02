(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,336835,862085,e=>{"use strict";var t=e.i(22453);e.i(247167);let r={recaptchaSiteKey:"6Lf_NBgaAAAAAJyDanAyvywRHcAuAbedr5slkECB",googleClientId:"656900351037-o3ahhck45s9469o1nfs2tilu22t28evv.apps.googleusercontent.com",djangoClientId:"1I4rv6bekM8zAZfjwf4pxC6i4BFgP2M8hqWdvY7M",djangoClientSecret:"f3zqwMUUQ5VJOFQAuoAWlDJlfjauOTHNRy8djit9XgjjQcdrQn3WYj6k5qGPvpZDGNuKxacOvaSUddQ6fX9GOjVWWG2GKrUHQQIiXUE1rmveA1NihaWUavL4uqR6xRo9"};e.s(["NEWTON_SIGNUP_CONFIG",0,r],862085);var a=e.i(58863);let i="PUBLIC_WEBSITE_HOME_REQUEST_CALLBACK_FORM";function n(){return{"client-id":r.djangoClientId,"client-secret":r.djangoClientSecret}}function o(){return{"Content-Type":"application/json",...n()}}async function s(e){if(!e)return{ok:!1};try{return{ok:(await fetch(`${t.SIGNUP_API.webEndpoint}/api/v1/user/me/`,{method:"GET",headers:{"Content-Type":"application/json",client_id:r.djangoClientId,client_secret:r.djangoClientSecret,Authorization:`Bearer ${e}`}})).ok}}catch{return{ok:!1}}}async function l(e){if(!e)return{ok:!1};try{let r=await fetch(`${t.SIGNUP_API.webEndpoint}/api/v1/marketing/refer/s/btech-computer-science/u/${encodeURIComponent(e)}/extra_details/`,{method:"GET",headers:{Accept:"application/json"}});if(!r.ok)return{ok:!1};let a=await p(r),i=c(a.full_name);return i?{ok:!0,fullName:i}:{ok:!1}}catch{return{ok:!1}}}function d(e){return`+91${e.replace(/\D/g,"").slice(-10)}`}async function p(e){try{let t=await e.json();return t&&"object"==typeof t?t:{}}catch{return{}}}function c(e){return"string"==typeof e?e:void 0}function u(e){let t=c(e.message)??c(e.detail);if(t)return t;for(let t of Object.values(e)){if("string"==typeof t)return t;if(Array.isArray(t)&&"string"==typeof t[0])return t[0]}}function f(e){let[t="",...r]=e.trim().split(/\s+/).filter(Boolean);return{first_name:t,last_name:r.join(" ")}}function g(e){let t,r,a=e=>e&&"object"==typeof e?e:{};for(let o of[a(e.userDetails),a(e.user_details),a(e.user),e]){var i,n;t??=c(o.name)??c(o.full_name)??(i=o.first_name,n=o.last_name,`${c(i)??""} ${c(n)??""}`.trim()||void 0),r??=c(o.email)}return{name:t,email:r}}async function h(e){let r=`${t.SIGNUP_API.sendOtpUrl}?registration=true&login_if_registered=true`;try{let t=await fetch(r,{method:"POST",headers:o(),body:JSON.stringify({phone:d(e.phone),"g-recaptcha-response":e.recaptchaToken,send_whatsapp:e.whatsapp})}),a=await p(t);if(t.ok)return{ok:!0,existingUser:"S017"===c(a.success_code),collegeFilled:!0===a.college_filled,twelfthPassingYearFilled:!0===a.twelfth_passing_out_year_filled};return{ok:!1,existingUser:!1,throttled:429===t.status,error:u(a)??"Failed to send OTP."}}catch{return{ok:!1,existingUser:!1,error:"Network error. Please try again."}}}async function m(e){let r=e.existingUser?t.SIGNUP_API.loginUrl:t.SIGNUP_API.registerUrl,a=d(e.phone),{first_name:i,last_name:s}=f(e.name),l={backend:"mobile",phone:a,purpose:"",name:e.name.trim(),email:e.email.trim(),first_name:i,last_name:s,send_whatsapp_updates:e.whatsapp,...e.graduationYear?{graduation_year:e.graduationYear}:{},...e.college?{college:e.college}:{},...e.currentClass?{current_class:e.currentClass}:{},...e.codingExperience?{coding_experience:e.codingExperience}:{},...e.twelfthPassingPercentage?{twelfth_passing_out_year:e.twelfthPassingPercentage}:{},...e.preRegistrationHash?{user_pre_registration_detail_hash:e.preRegistrationHash}:{otp:e.otp,user_pre_registration_detail_hash:""},utm_params:{...e.utmParams,marketing_url_structure_slug:e.urlSlug,course_structure_slug:e.courseType},...n()};try{let e=await fetch(r,{method:"POST",headers:o(),body:JSON.stringify(l)}),t=await p(e);if(e.ok)return{ok:!0,accessToken:c(t.access_token),refreshToken:c(t.refresh_token),...g(t)};return{ok:!1,error:u(t)??"Could not verify the OTP. Please retry."}}catch{return{ok:!1,error:"Network error. Please try again."}}}let x=`${t.SIGNUP_API.backendEndpoint}/api/v1/marketing/generic_form_response/create/`,v=e=>`${t.SIGNUP_API.backendEndpoint}/api/v1/marketing/generic_form_response/h/${e}/update/`;function y(e,t,r=!1){return{...function(e){let t={},r=(e,r)=>{r&&(t[e]=r)};for(let[t,a]of Object.entries(e.qualifiers))r(t,a);return r("full_name",e.fullName.trim()),t.phone_number=d(e.phone),r("email",e.email.trim()),t.send_whatsapp_updates=e.whatsapp,t}(e),...t||r?{...e.from?{from:e.from}:{},...e.nextUrl?{nextUrl:e.nextUrl}:{},form_link:(0,a.getFormLink)(),...e.extraLeadFields??{}}:{},...r?{update_lsq:!0}:{},currentURL:window.location.pathname,parentUrl:e.parentUrl??"",urlFrom:e.from,utm_params:e.utmParams,...e.formVariant?{rcb_form_variant:e.formVariant}:{}}}async function b(e,t,r=!1){try{let a=await fetch(x,{method:"POST",headers:o(),body:JSON.stringify({responseType:e.responseType??i,is_completed:t,responseJson:y(e,t,r)})}),n=await p(a);if(a.ok)return{ok:!0,hash:c(n.hash)};return{ok:!1,error:u(n)??"Failed to submit. Please retry."}}catch{return{ok:!1,error:"Network error. Please try again."}}}async function $(e,t,r,a=!1){try{let n=await fetch(v(e),{method:"PUT",headers:o(),body:JSON.stringify({responseType:t.responseType??i,is_completed:r,responseJson:y(t,r,a)})});if(n.ok)return{ok:!0};return{ok:!1,error:u(await p(n))??"Failed to submit. Please retry."}}catch{return{ok:!1,error:"Network error. Please try again."}}}async function w(e,t={}){let{hash:r,completed:a=!1,accessToken:i}=t;try{let t=await fetch(r?v(r):x,{method:r?"PUT":"POST",headers:{...o(),...i?{Authorization:`Bearer ${i}`}:{}},body:JSON.stringify({responseType:"PARTIAL_SIGNUP_FORM",is_completed:a,responseJson:{...e.fields,...e.phone?{phone:a?d(e.phone):e.phone}:{},urlSlug:e.urlSlug,parentUrl:e.parentUrl,utm_params:e.utmParams}})});if(!t.ok)return{ok:!1};return{ok:!0,hash:c((await p(t)).hash)}}catch{return{ok:!1}}}async function k(e,t){let{hash:r,completed:i}=t;try{let t=await fetch(r?v(r):x,{method:r?"PUT":"POST",headers:{...o(),...e.accessToken?{Authorization:`Bearer ${e.accessToken}`}:{}},body:JSON.stringify({responseType:e.responseType,is_completed:i,responseJson:function(e,t){let r={};for(let[a,i]of e.fields){if("string"!=typeof i){r[a]=[...i];continue}let n=i.trim();n&&(r[a]=t&&a===e.phoneKey?d(n):n)}return t&&(e.from&&(r.from=e.from),e.nextUrl&&(r.nextUrl=e.nextUrl),r.form_link=(0,a.getFormLink)()),r.currentURL=window.location.pathname,r.urlFrom=e.from??null,r.parentUrl=e.parentUrl??"",r.utm_params=e.utmParams,r}(e,i)})}),n=await p(t);if(t.ok)return{ok:!0,hash:r||c(n.hash)};return{ok:!1,error:u(n)??"Failed to submit. Please retry."}}catch{return{ok:!1,error:"Network error. Please try again."}}}async function _(){try{let e=await fetch(`${t.SIGNUP_API.webEndpoint}/api/v1/master_class/s/data-science-open-master-class/upcoming_course_details/`,{method:"GET",headers:o()});if(e.ok)return await p(e);return null}catch{return null}}let S=t.SIGNUP_API.backendEndpoint;async function P(e){try{let t=await fetch(`${S}/api/v1/user/validate-otp/`,{method:"POST",headers:o(),body:JSON.stringify({phone:d(e.phone),otp:e.otp})}),r=await p(t);if(t.ok)return{ok:!0,hash:c(r.hash),...g(r)};return{ok:!1,error:u(r)??"Could not verify the OTP."}}catch{return{ok:!1,error:"Network error. Please try again."}}}async function E(e){if(!e.hash)return{ok:!1};let t=e.name.trim(),r=e.email.trim(),a=e.phone.replace(/\D/g,"").slice(-10),i={...a?{phone_number:a}:{},...e.otp?{otp:e.otp}:{},...t?{name:t,...f(t)}:{},...r?{email:r}:{},...e.twelfthPassingOutYear?{twelfth_passing_out_year:e.twelfthPassingOutYear}:{},utmParams:e.utmParams,course_structure_slug:e.courseType};try{let t,r,a=await fetch((t=e.hash,`${S}/api/v1/user/pre_register/h/${encodeURIComponent(t)}/detail/`),{method:"POST",headers:o(),body:JSON.stringify(i)});if(a.ok)return{ok:!0};let n=await p(a);return{ok:!1,errorCode:(r=n.error&&"object"==typeof n.error?n.error:{},c(n.error_code)??c(n.errorCode)??c(r.error_code)),error:u(n)??"Could not save your details. Please try again."}}catch{return{ok:!1,error:"Network error. Please try again."}}}async function T(e){try{let t=await fetch(`${S}/api/v1/user/update/`,{method:"POST",headers:{...o(),Authorization:`Bearer ${e.accessToken}`},body:JSON.stringify({twelfth_passing_out_year:e.twelfthPassingYear})});if(t.ok)return{ok:!0};return{ok:!1,error:u(await p(t))??"Could not update profile."}}catch{return{ok:!1,error:"Network error. Please try again."}}}async function z(e,t=20,r=0){try{let a=`${S}/api/v1/education/college/list/?limit=${t}&offset=${r}&q=${encodeURIComponent(e)}`,i=await fetch(a),n=await p(i);if(i.ok&&Array.isArray(n.results))return n.results;return[]}catch{return[]}}e.s(["PRE_REGISTER_EMAIL_TAKEN_CODE",0,"E158","createRcb",0,b,"fetchCollegeList",0,z,"fetchMe",0,s,"fetchReferralDetails",0,l,"getUpcomingDSMasterClass",0,_,"registerOrLogin",0,m,"saveGenericLead",0,k,"savePreRegisterDetail",0,E,"saveSignupPartial",0,w,"sendOtp",0,h,"updateProfile",0,T,"updateRcb",0,$,"validateOtp",0,P],336835)},343794,(e,t,r)=>{!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=i(t,n));return t}(n)))}return e}function i(e,t){return t?e?e+" "+t:e+t:e}if(t.exports)a.default=a,t.exports=a;else if("function"==typeof define&&"object"==typeof define.amd&&define.amd)void 0!==a&&e.v(a);else window.classNames=a}()},892480,e=>{"use strict";var t=(e,t)=>e&&!0!==e&&`${e}-${t}`,r=e.i(343794),a=e.i(271645),i=e.i(997053),n=i.keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`,o=i.styled.i`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    line-height: 1em;
    backface-visibility: hidden;
    speak: none;
    text-decoration: inherit;
    opacity: 1;
    text-align: center;

    ${({$size:e})=>i.css`
        font-size: ${e}px;
    `}

    ${({$color:e})=>i.css`
        color: ${e};

        &.bordered,
        &.circular {
            box-shadow: 0 0 0 0.1em ${e} inset;
            height: 1em;
            width: 1em;

            &.inverted {
                color: var(--icon-color-white);
                background-color: ${e};
            }
        }

        &.disabled {
            color: ${e};

            &.bordered,
            &.circular {
                box-shadow: 0 0 0 0.1em ${e} inset;
                height: 1em;
                width: 1em;

                &.inverted {
                    color: var(--disabled-icon-color-white);
                    background-color: ${e};
                }
            }
        }
    `}


    &.loading {
        animation: ${n} 2s linear infinite;
    }

    &.fitted {
        width: auto;
        margin: 0 !important;
    }

    &.horizontally-flipped {
        transform: scaleX(-1);
    }

    &.vertically-flipped {
        transform: scaleY(-1);
    }

    &.clockwise-rotated {
        transform: rotate(90deg);
    }

    &.counterclockwise-rotated {
        transform: rotate(-90deg);
    }

    &.link {
        cursor: pointer;
        opacity: 0.8;
        transition: opacity 0.1s ease-in-out;

        &:hover {
            opacity: 1;
        }
    }

    &.circular {
        border-radius: 50%;
    }
`;e.s(["Icon_default",0,function({ariaHidden:e="true",ariaLabel:i,as:n="i",bordered:s=!1,circular:l=!1,color:d="grey",className:p,disabled:c=!1,fitted:u=!1,flipped:f,inverted:g=!1,link:h=!1,loading:m=!1,name:x,rotated:v,size:y="24",style:b,...$}){let w,k=(w={},null==i?w["aria-hidden"]="true":w["aria-label"]=i,null!=e&&(w["aria-hidden"]=e),w),_=(0,r.default)("grauity-icon",`grauity-icon-${x}`,d&&d,s&&"bordered",l&&"circular",c&&"disabled",u&&"fitted",g&&"inverted",h&&"link",m&&"loading",t(f,"flipped"),t(v,"rotated"),p);return a.createElement(o,{as:n,name:x,$size:y,onClick:e=>{var t;c?e.preventDefault():null==(t=$.onClick)||t.call($,e,$)},$color:d,...k,className:_,style:b,"data-testid":"testid-icon"})}],892480)},189101,e=>{"use strict";var t,r,a,i=e.i(892480),n=e.i(343794),o=e.i(271645),s=e.i(997053),l=((t=l||{}).PRIMARY="primary",t.SECONDARY="secondary",t.TERTIARY="tertiary",t.TEXT="text",t),d=((r=d||{}).EXTRA_SMALL="extra-small",r.SMALL="small",r.MEDIUM="medium",r.LARGE="large",r.EXTRA_LARGE="extra-large",r),p=((a=p||{}).LEFT="left",a.RIGHT="right",a),c={"extra-small":{padding:"var(--spacing-2px, 2px) var(--spacing-4px, 4px)",height:"var(--spacing-24px, 24px)",minHeight:"var(--spacing-24px, 24px)",gap:"var(--spacing-2px, 2px)","--alignment-padding":"var(--spacing-2px, 2px)"},small:{padding:"var(--spacing-4px, 4px) var(--spacing-8px, 8px)",height:"var(--spacing-32px, 32px)",minHeight:"var(--spacing-32px, 32px)",gap:"var(--spacing-4px, 4px)","--alignment-padding":"var(--spacing-4px, 4px)"},medium:{padding:"var(--spacing-8px, 8px) var(--spacing-12px, 12px)",height:"var(--spacing-40px, 40px)",minHeight:"var(--spacing-40px, 40px)"},large:{padding:"var(--spacing-12px, 12px) var(--spacing-16px, 16px)",height:"var(--spacing-48px, 48px)",minHeight:"var(--spacing-48px, 48px)"},"extra-large":{padding:"var(--spacing-16px, 16px) var(--spacing-20px, 20px)",height:"var(--spacing-56px, 56px)",minHeight:"var(--spacing-56px, 56px)"}},u={"extra-small":{height:"var(--spacing-16px, 16px)",minHeight:"var(--spacing-16px, 16px)",gap:"var(--spacing-2px, 2px)",padding:"var(--spacing-0px, 0px)",width:"var(--spacing-16px, 16px)",minWidth:"var(--spacing-16px, 16px)",borderRadius:"var(--corner-radius-4px, 4px)"},small:{height:"var(--spacing-32px, 32px)",minHeight:"var(--spacing-32px, 32px)",gap:"var(--spacing-4px, 4px)",padding:"var(--spacing-4px, 4px)",width:"var(--spacing-32px, 32px)",minWidth:"var(--spacing-32px, 32px)"},medium:{height:"var(--spacing-40px, 40px)",minHeight:"var(--spacing-40px, 40px)",padding:"var(--spacing-8px, 8px)",width:"var(--spacing-40px, 40px)",minWidth:"var(--spacing-40px, 40px)"},large:{height:"var(--spacing-48px, 48px)",minHeight:"var(--spacing-48px, 48px)",padding:"var(--spacing-12px, 12px)",width:"var(--spacing-48px, 48px)",minWidth:"var(--spacing-48px, 48px)"},"extra-large":{height:"var(--spacing-56px, 56px)",minHeight:"var(--spacing-56px, 56px)",padding:"var(--spacing-16px, 16px)",width:"var(--spacing-56px, 56px)",minWidth:"var(--spacing-56px, 56px)"}},f={"extra-small":"16",small:"24",medium:"24",large:"32","extra-large":"40"},g={"extra-small":{"--font-size":"var(--font-size-14px, 14px)","--line-height":"var(--font-size-20px, 20px)"},small:{"--font-size":"var(--font-size-14px, 14px)","--line-height":"var(--font-size-20px, 20px)"},medium:{"--font-size":"var(--font-size-14px, 14px)","--line-height":"var(--font-size-20px, 20px)"},large:{"--font-size":"var(--font-size-16px, 16px)","--line-height":"var(--font-size-24px, 24px)"},"extra-large":{"--font-size":"var(--font-size-16px, 16px)","--line-height":"var(--font-size-24px, 24px)"}},h=s.styled.button`
    font-size: var(--font-size-14px, 14px);
    border-radius: var(--corner-radius-8px, 8px);
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: var(--font-weight-semibold, 600);
    font-family: var(--font-family, 'Mona Sans');
    border: none;
    outline: none;
    cursor: pointer;
    width: max-content;
    gap: var(--spacing-8px, 8px);
    transform-origin: center;

    ${({$isIconButton:e})=>!e&&s.css`
            --line-height: var(--font-size-14px, 14px);
            --font-size: var(--font-size-14px, 14px);
            --alignment-padding: var(--spacing-8px, 8px);
        `}

    ${({$variant:e,$color:t})=>e&&(({variant:e="primary",color:t="brand"})=>{switch(e){case"primary":{let e="neutral"===t?"invert-primary":t,r="neutral"===t?"subtle":"emphasis";return s.css`
                background: var(--bg-${r}-${e}-default);
                color: var(--text-emphasis-${"neutral"===t?"invert-primary":"white"}-default);
                border: none;
                outline: 0px solid transparent;
                &:hover:not([disabled]) {
                    background: var(
                        --bg-${r}-${e}-hover
                    );
                }
                &:focus {
                    outline: 0px solid transparent;
                }
                &:focus-visible {
                    outline: 3px solid
                        var(--border-subtle-${"neutral"===t?"primary":t}-default);
                }
                &:disabled {
                    background: var(
                        --bg-${r}-${e}-disabled
                    );
                    color: var(--text-emphasis-white-disabled, #f6f7f9);
                }
            `}case"secondary":{let e="neutral"===t?"primary":t,r="neutral"===t?"var(--bg-subtle-primary-hover, #f6f7f9)":`var(--bg-subtle-${t}-default)`;return s.css`
                color: var(--text-emphasis-${e}-default);
                border: 1.5px solid var(--border-subtle-${e}-default);
                outline: 0px solid transparent;
                background: var(--bg-subtle-primary-default, #ffffff);
                &:hover:not([disabled]) {
                    background: ${r};
                }
                &:focus {
                    outline: 0px solid transparent;
                }
                &:focus-visible {
                    outline: 3px solid
                        var(--border-subtle-${e}-default);
                }
                &:disabled {
                    border: 1.5px solid
                        var(--border-subtle-${e}-disabled);
                    color: var(--text-emphasis-${e}-disabled);
                }
            `}case"tertiary":{let e="neutral"===t?"primary":t,r="neutral"===t?"var(--bg-subtle-primary-hover, #f6f7f9)":`var(--bg-subtle-${t}-default)`;return s.css`
                color: var(--text-emphasis-${e}-default);
                border: none;
                outline: 0px solid transparent;
                background: transparent;
                &:hover:not([disabled]) {
                    background: ${r};
                }
                &:focus {
                    outline: 0px solid transparent;
                }
                &:focus-visible {
                    outline: 3px solid
                        var(--border-subtle-${e}-default);
                }
                &:disabled {
                    color: var(--text-emphasis-${e}-disabled);
                }
            `}case"text":{let e="neutral"===t?"primary":t;return s.css`
                color: var(--text-emphasis-${e}-default);
                border: none;
                outline: 0px solid transparent;
                background: transparent;
                &:focus {
                    outline: 0px solid transparent;
                }
                &:focus-visible {
                    outline: 3px solid
                        var(--border-subtle-${e}-default);
                }
                &:disabled {
                    color: var(--text-emphasis-${e}-disabled);
                }
            `}default:return s.css``}})({variant:e,color:t})}

    ${({$showAnimationOnClick:e})=>e&&s.css`
            &:active:not([disabled]) {
                transform: scale(0.95);
            }
        `}

    &:disabled {
        cursor: not-allowed;
    }

    ${({$size:e,$isIconButton:t})=>t?s.css`
            ${u[e]}
        `:s.css`
                ${c[e]}
            `}

    ${({$variant:e,$size:t})=>"text"===e&&s.css`
            padding: 0;
            height: unset;
            width: unset;
            min-height: unset;
            min-width: unset;
            border-radius: var(--corner-radius-4px, 4px);

            ${g[t]}
        `}

    ${({$fullWidth:e})=>e&&s.css`
            width: 100%;
        `}

    ${({$isLoading:e})=>e&&s.css`
            cursor: progress;
        `}

    ${({$iconPosition:e})=>"right"===e&&s.css`
            flex-direction: row-reverse;
        `}

    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border 0.2s ease-in-out, outline 0.2s ease-in-out, transform 0.2s ease-in-out;
`,m=s.styled.div`
    display: flex;
    align-items: center;
    gap: var(--spacing-8px, 8px);
    font-size: var(--font-size);
    font-weight: var(--font-weight-semibold, 600);
    letter-spacing: 0.4px;
    line-height: var(--line-height);
    max-width: 100%;

    // Padding for visual alignment when button has an icon.
    // This ensures that when icon is present on one side, the text looks visually even.
    ${({$iconPosition:e,$variant:t})=>"text"===t?null:"right"===e?s.css`
                padding-left: var(--alignment-padding);
            `:"left"===e?s.css`
                padding-right: var(--alignment-padding);
            `:""}
`,x=(0,o.forwardRef)((e,t)=>{let{variant:r="primary",color:a="brand",size:s="medium",icon:l=null,iconSize:d="20",iconPosition:p="left",className:c="",disabled:u=!1,loading:f=!1,style:g={},onClick:x=()=>{},fullWidth:v=!1,type:y="button",ariaLabel:b,tooltip:$="",tabIndex:w=0,onMouseEnter:k=()=>{},onMouseLeave:_=()=>{},children:S="",buttonProps:P,showAnimationOnClick:E=!0,...T}=e,z=u||f,I=(0,n.default)(c),A=(0,o.useId)();return o.default.createElement(h,{ref:t,onClick:e=>{z?e.preventDefault():x(e)},className:I,style:g,$isLoading:f,disabled:z,$variant:r,$color:a,$size:s,$fullWidth:v,$iconPosition:p,type:y,title:$,tabIndex:w,"data-testid":"testid-button",onMouseEnter:k,onMouseLeave:_,"aria-label":b,"aria-labelledby":!b&&S?`button-content-${A}`:void 0,$showAnimationOnClick:E,...P,...T},l&&!f&&o.default.createElement(i.Icon_default,{name:l,color:"inherit",size:d}),f&&o.default.createElement(i.Icon_default,{name:"loading",color:"inherit",size:d,loading:f}),S&&o.default.createElement(m,{id:`button-content-${A}`,$iconPosition:!!l&&p,$variant:r},S))});s.styled.div`
    display: flex;
    align-items: center;
    gap: var(--spacing-8px, 8px);
`;var v=(0,o.forwardRef)(({variant:e="primary",color:t="brand",size:r="medium",icon:a=null,iconSize:s,className:l="",disabled:d=!1,loading:p=!1,style:c={},onClick:u=()=>{},fullWidth:g,type:m="button",ariaLabel:x="",tooltip:v="",tabIndex:y=0,onMouseEnter:b=()=>{},onMouseLeave:$=()=>{},buttonProps:w,showAnimationOnClick:k=!0},_)=>{let S=(0,n.default)(l),P=s||f[r];return o.default.createElement(h,{ref:_,onClick:e=>{d?e.preventDefault():u(e)},className:S,style:c,$isLoading:p,disabled:d||p,$variant:e,$color:t,$size:r,$fullWidth:g,type:m,role:"button","aria-label":x||a,title:v,tabIndex:y,onMouseEnter:b,onMouseLeave:$,$isIconButton:!0,$showAnimationOnClick:k,...w,"data-testid":"testid-iconbutton"},a&&!p&&o.default.createElement(i.Icon_default,{name:a,color:"inherit",size:P}),p&&o.default.createElement(i.Icon_default,{name:"loading",color:"inherit",size:P,loading:p}))});e.s(["Button_default",0,x,"IconButton_default",0,v])},339415,e=>{"use strict";var t=e.i(189101);e.s(["default",()=>t.Button_default])},837339,e=>{"use strict";var t=e.i(997053),r=t.styled.label`
    margin: 0;
    padding: 0;
    color: var(--text-emphasis-secondary-default, #5b6271);
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.048px;
    font-family: var(--font-family);

    ${({$isRequired:e})=>e&&t.css`
            &::after {
                content: '*';
                color: var(--text-emphasis-error-default, #d22d3a);
                padding-left: 4px;
            }
        `}

    ${({$color:e})=>t.css`
            color: var(--text-emphasis-${e}-default);
        `}

    ${({$isDisabled:e})=>e&&t.css`
            color: var(--text-emphasis-primary-disabled, #8c95a6);
            cursor: not-allowed;
        `};
`,a=t.styled.div`
    color: var(--text-emphasis-secondary-default, #5b6271);
    display: flex;
    gap: 4px;
    align-items: center;
`,i=t.styled.span`
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.048px;
`,n=(0,t.styled)(i)`
    margin-left: auto;
`,o=(0,t.styled)(a)`
    color: var(--text-emphasis-error-default, #d22d3a);
`,s=(0,t.styled)(i)``,l=(0,t.styled)(a)`
    color: var(--text-emphasis-success-default, #007a51); ;
`,d=(0,t.styled)(i)``;e.s(["StyledErrorMessage",0,o,"StyledErrorMessageText",0,s,"StyledHelpMessage",0,a,"StyledHelpMessageMaxCharacters",0,n,"StyledHelpMessageText",0,i,"StyledLabel",0,r,"StyledSuccessMessage",0,l,"StyledSuccessMessageText",0,d])},228093,378191,e=>{"use strict";var t=e.i(837339),r=e.i(892480),a=e.i(271645);e.s(["HelpMessage",0,e=>{let{children:i,currentLength:n,maxLength:o}=e;return i||o?a.default.createElement(t.StyledHelpMessage,null,i&&a.default.createElement(a.default.Fragment,null,a.default.createElement(r.Icon_default,{name:"exclamation-circle",color:"currentColor",size:"20"}),a.default.createElement(t.StyledHelpMessageText,null,i)),o&&a.default.createElement(t.StyledHelpMessageMaxCharacters,null,n||0,"/",o)):null}],228093),e.s(["ErrorMessage",0,e=>{let{children:i,iconSize:n="20",style:o}=e;return i?a.default.createElement(t.StyledErrorMessage,null,a.default.createElement(r.Icon_default,{name:"exclamation-circle",color:"currentColor",size:n}),i&&a.default.createElement(t.StyledErrorMessageText,{style:o},i)):null}],378191)},866700,e=>{"use strict";var t=e.i(837339),r=e.i(271645);e.s(["Label",0,e=>{let{name:a,color:i="secondary",isRequired:n,children:o,className:s,isDisabled:l,...d}=e;return r.default.createElement(t.StyledLabel,{htmlFor:a,$isRequired:n,className:s,$color:i,$isDisabled:l,...d},o)}])},272225,e=>{"use strict";var t=e.i(997053);e.s(["getTextFieldStyles",0,(e="brand")=>t.css`
        ${"brand"!==e&&`border: 1px solid var(--border-emphasis-${e}-default, #d9d9d9);`}

        &:focus {
            border: 1px solid var(--border-emphasis-${e}-default, #61a8ff);
            background: var(--bg-subtle-primary-default, #fff);
            outline: 0px solid transparent;
        }

        &:focus-visible {
            border: 1px solid var(--border-emphasis-${e}-default, #61a8ff);
            outline: 2px solid var(--border-subtle-${e}-default, #61a8ff);
            background: var(--bg-subtle-primary-default, #fff);
        }

        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus {
            -webkit-text-fill-color: var(
                --text-emphasis-primary-default,
                #1a1d24
            );
            -webkit-box-shadow: 0 0 0px 1000px
                var(--bg-subtle-${e}-default, #e5f1ff) inset;
        }
    `])},501147,844611,916687,e=>{"use strict";var t=e.i(272225),r=e.i(866700),a=e.i(228093),i=e.i(378191),n=e.i(271645),o=e.i(997053),s={small:{padding:"4px 8px",fontSize:"14px",minHeight:"32px"},medium:{padding:"8px 12px",fontSize:"14px",minHeight:"40px"},large:{padding:"12px 16px",fontSize:"16px",minHeight:"48px"},"extra-large":{padding:"16px",fontSize:"16px",minHeight:"56px"}},l=o.styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    position: relative;
    font-family: var(--font-family);
`,d=o.styled.div`
    display: flex;
    align-items: center;
    padding: 0 8px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    gap: var(--spacing-spacing5, 8px);
`,p=(0,o.styled)(d)`
    right: 0;
    top: 0;
    left: auto;
`,c=o.styled.input`
    display: flex;
    min-height: 32px;
    padding: 4px 8px;
    align-items: center;
    gap: var(--spacing-spacing5, 8px);
    align-self: stretch;
    border-radius: var(--corner-radius-radius4, 8px);
    border: 1px solid var(--border-moderate-primary-default, #c9cfd9);
    background: var(--bg-subtle-primary-default, #fff);
    width: 100%;
    box-sizing: border-box;
    transition: border-color 0.15s ease-in-out,
        background-color 0.15s ease-in-out, outline 0.2s ease-in-out;
    outline: 0px solid transparent;
    color: var(--text-emphasis-primary-default, #16191d);
    font-family: var(--font-family);
    font-weight: var(--font-weight-fw-10, 500);

    &:hover {
        background: var(--bg-subtle-primary-hover, #f6f7f9);
    }

    ${({$color:e})=>(0,t.getTextFieldStyles)(e)}

    &:disabled {
        color: var(--text-emphasis-primary-disabled, #8c95a6);
        border: 1px solid var(--border-moderate-primary-default, #c9cfd9);
        background: var(--bg-subtle-secondary-default, #f6f7f9);
        cursor: not-allowed;
    }

    &:read-only:not(:disabled) {
        color: var(--text-emphasis-primary-default, #16191d);
        background: var(--bg-subtle-secondary-default, #f6f7f9);
    }

    &::placeholder {
        color: var(--text-emphasis-primary-disabled, #5b6271);
        font-size: var(--font-size-fs-20, 14px);
        font-style: normal;
        font-weight: var(--font-weight-fw-10, 500);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
        font-family: var(--font-family);
        opacity: 1;
    }

    ${({$size:e})=>e&&o.css`
            ${s[e]}
        `}

    ${({$adornmentDimensions:e})=>o.css`
        ${!!(null==e?void 0:e.start)&&`padding-left: ${e.start}px;`}
        ${!!(null==e?void 0:e.end)&&`padding-right: ${e.end}px;`}
    `}
`,u=o.styled.div`
    width: 100%;
    box-sizing: border-box;
    position: relative;
    color: var(--text-emphasis-primary-default, #1a1d24);

    ${d}, ${p} {
        font-weight: var(--font-weight-fw-10, 500);

        ${({$size:e})=>e&&o.css`
                font-size: ${s[e].fontSize};
            `}

        ${({$isDisabled:e})=>e&&o.css`
                color: var(--text-emphasis-primary-disabled, #8c95a6);
            `}
    }
`,f=(0,n.forwardRef)((e,t)=>{let{name:o,value:s="",label:f,placeholder:g,type:h="text",inputMode:m="text",pattern:x,helpMessage:v,errorMessage:y,maxLength:b,isRequired:$=!1,isDisabled:w=!1,isReadOnly:k=!1,autoFocus:_=!1,autoComplete:S="on",onChange:P=()=>{},onClick:E=()=>{},onBlur:T=()=>{},onKeyDown:z=()=>{},onFocus:I=()=>{},size:A="medium",adornments:U,color:O="brand",min:C,max:N,step:R,className:M}=e,L=(0,n.useRef)(null),j=(0,n.useId)(),H=`start-adornment-${j}`,G=`end-adornment-${j}`,[F,B]=(0,n.useState)({start:0,end:0});return(0,n.useLayoutEffect)(()=>{if(L.current){let e=document.getElementById(H),t=document.getElementById(G);B({start:e?e.offsetWidth:0,end:t?t.offsetWidth:0})}},[null==U?void 0:U.start,null==U?void 0:U.end]),n.default.createElement(l,{className:M},f&&n.default.createElement(r.Label,{name:o,isRequired:$,color:"brand"===O?"primary":O},f),n.default.createElement(u,{ref:L,$size:A,$isDisabled:w},(null==U?void 0:U.start)&&n.default.createElement(d,{id:H},null==U?void 0:U.start),n.default.createElement(c,{ref:t,type:h,inputMode:m,pattern:x,min:C,max:N,step:R,id:o,name:o,placeholder:g,value:s,readOnly:k,disabled:w,onChange:e=>{P(e)},onClick:e=>{E(e)},onBlur:e=>{T(e)},onKeyDown:z,onFocus:e=>{I(e)},autoComplete:S,autoFocus:_,$size:A,$adornmentDimensions:F,$color:O}),(null==U?void 0:U.end)&&n.default.createElement(p,{id:G},null==U?void 0:U.end)),n.default.createElement(a.HelpMessage,{currentLength:null==s?void 0:s.length,maxLength:b},v),y&&n.default.createElement(i.ErrorMessage,null,y))});e.s(["TextField_default",0,f],844611),e.s(["NSTextField",0,f],501147),e.s(["normalizeIndianPhone",0,function(e){let t=String(e??"").replace(/\D/g,"");if(t.length<=10)return t;let r=t;for(;r.length>10;){if(r.startsWith("91")){r=r.slice(2);continue}if(r.startsWith("0")){r=r.slice(1);continue}break}return r.slice(0,10)}],916687)}]);