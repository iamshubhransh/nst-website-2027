(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42872,e=>{"use strict";var t,a=e.i(843476),r=e.i(271645),n=e.i(844611),l=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},i=e.g&&e.g.Object===Object&&e.g,s="object"==typeof self&&self&&self.Object===Object&&self,o=i||s||Function("return this")(),c=function(){return o.Date.now()},d=/\s/,u=function(e){for(var t=e.length;t--&&d.test(e.charAt(t)););return t},p=/^\s+/,f=o.Symbol,h=Object.prototype,g=h.hasOwnProperty,m=h.toString,v=f?f.toStringTag:void 0,x=function(e){var t=g.call(e,v),a=e[v];try{e[v]=void 0;var r=!0}catch(e){}var n=m.call(e);return r&&(t?e[v]=a:delete e[v]),n},y=Object.prototype.toString,b=f?f.toStringTag:void 0,_=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":b&&b in Object(e)?x(e):y.call(e)},w=function(e){return"symbol"==typeof e||null!=e&&"object"==typeof e&&"[object Symbol]"==_(e)},A=0/0,P=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,S=/^0o[0-7]+$/i,R=parseInt,D=function(e){if("number"==typeof e)return e;if(w(e))return A;if(l(e)){var t,a="function"==typeof e.valueOf?e.valueOf():e;e=l(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=(t=e)?t.slice(0,u(t)+1).replace(p,""):t;var r=E.test(e);return r||S.test(e)?R(e.slice(2),r?2:8):P.test(e)?A:+e},k=Math.max,C=Math.min,I=function(e,t,a){var r,n,i,s,o,d,u=0,p=!1,f=!1,h=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var a=r,l=n;return r=n=void 0,u=t,s=e.apply(l,a)}function m(e){var a=e-d,r=e-u;return void 0===d||a>=t||a<0||f&&r>=i}function v(){var e,a,r,n=c();if(m(n))return x(n);o=setTimeout(v,(e=n-d,a=n-u,r=t-e,f?C(r,i-a):r))}function x(e){return(o=void 0,h&&r)?g(e):(r=n=void 0,s)}function y(){var e,a=c(),l=m(a);if(r=arguments,n=this,d=a,l){if(void 0===o)return u=e=d,o=setTimeout(v,t),p?g(e):s;if(f)return clearTimeout(o),o=setTimeout(v,t),g(d)}return void 0===o&&(o=setTimeout(v,t)),s}return t=D(t)||0,l(a)&&(p=!!a.leading,i=(f="maxWait"in a)?k(D(a.maxWait)||0,t):i,h="trailing"in a?!!a.trailing:h),y.cancel=function(){void 0!==o&&clearTimeout(o),u=0,r=d=n=o=void 0},y.flush=function(){return void 0===o?s:x(c())},y},N=e.i(773892),L=e.i(364072),T=e.i(189101),j=e.i(892480),H=e.i(824511),O=e.i(997053),B={initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{y:"-8px",opacity:0},visible:{y:"8px",opacity:1},exit:{y:"-8px",opacity:0}},transition:{duration:.2}},z=(0,O.styled)(H.m.div)`
    box-sizing: border-box;
    display: flex;
    width: ${({$width:e})=>e};
    max-height: ${({$maxHeight:e})=>null!=e?e:"500px"};
    padding: 8px 0;
    font-family: var(--font-family);
    flex-direction: column;
    align-items: flex-start;
    border-radius: var(--corner-radius-cr-4, 8px);
    border: 1px solid var(--border-subtle-primary-default, #e1e5ea);
    background: var(--bg-subtle-primary-default, #fff);
    overflow: hidden;

    * {
        box-sizing: border-box;
    }
`,G=O.styled.div`
    box-sizing: border-box;
    padding: 6px 16px 14px 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
    border-bottom: 1px solid var(--border-subtle-primary-default, #e1e5ea);
`,M=O.styled.div`
    color: var(--text-emphasis-primary-default, #16191d);
    font-size: 18px;
    font-style: normal;
    font-weight: 550;
    line-height: 28px;
    letter-spacing: 0.06px;
`,F=O.styled.div`
    color: var(--text-emphasis-secondary-default, #5b6271);
    font-size: 12px;
    font-style: normal;
    font-weight: 450;
    line-height: 14px;
    letter-spacing: 0.4px;
`,$=O.styled.div`
    display: flex;
    padding: 4px 12px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    flex-grow: 1;
    overflow: auto;
    position: relative;
    gap: 4px;
`,Y=O.styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow-y: auto;
    width: 100%;
`,U=O.styled.div`
    display: flex;
    padding: var(--spacing-sp-5, 8px) 0px var(--spacing-sp-3, 4px) 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sp-5, 8px);
    align-self: stretch;
    position: sticky;
    top: 0;
    background: var(--bg-subtle-primary-default, #fff);
    z-index: 1;
`,W=O.styled.div`
    display: flex;
    padding: 8px 4px;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    color: var(--text-emphasis-secondary-default, #5b6271);
    font-size: 11px;
    font-style: normal;
    font-weight: 550;
    line-height: 12px;
    letter-spacing: 2px;

    &:focus-visible {
        border-radius: 8px;
        outline: 3px solid var(--border-subtle-brand-default, #61a8ff);
    }
`,V=O.styled.div`
    height: 1px;
    min-height: 1px;
    margin: 8px 4px;
    align-self: stretch;
    border-radius: 8px;
    background: var(--border-subtle-primary-default, #e1e5ea);
`,K=O.styled.div`
    display: flex;
    padding: 8px 16px;
    align-items: center;
    justify-content: center;
`,q=O.styled.button`
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    cursor: pointer;
    color: var(--text-emphasis-primary-default, #16191d);
    outline: none;
    border: none;
    background: none;
    border-radius: 4px;
    transition: outline ${200}ms ease-out;
    transition: background ${200}ms ease-out;

    ${({disabled:e})=>e&&O.css`
            cursor: not-allowed;
            color: var(--text-emphasis-primary-disabled, #8c95a6);
        `}

    &:hover {
        background: var(--bg-subtle-primary-hover, #f6f7f9);
    }

    &:focus {
        outline: none;
    }

    &:focus-visible {
        z-index: 1;
        outline: 3px solid var(--border-subtle-brand-default, #61a8ff);
    }
`,Z=O.styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
    overflow: hidden;
`,J=O.styled.div`
    text-align: left;
    font-size: 14px;
    font-style: normal;
    font-weight: 450;
    line-height: 22px;
    letter-spacing: 0.1px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`,X=O.styled.div`
    text-align: left;
    color: var(--text-emphasis-secondary-default, #5b6271);
    font-size: 12px;
    font-style: normal;
    font-weight: 450;
    line-height: 14px;
    letter-spacing: 0.4px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    ${({$disabled:e})=>e&&O.css`
            color: var(--text-emphasis-primary-disabled, #8c95a6) !important;
        `}
`,Q=O.styled.div`
    padding: 14px 16px 6px 16px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-top: 1px solid var(--border-subtle-primary-default, #e1e5ea);
`,ee=({multiple:e,showActionButtons:t,showClearAllButton:a,clearAllButtonText:n,applyButtonText:l,handleClearAll:i,handleApply:s})=>t?r.default.createElement(Q,null,r.default.createElement(T.Button_default,{size:"small",variant:"primary",color:"brand",onClick:()=>s()},l),a&&e&&r.default.createElement(T.Button_default,{size:"small",variant:"tertiary",color:"neutral",onClick:i},n)):null,et=({showHeader:e,overline:t,title:a,subtext:n,customHeader:l})=>l?r.default.createElement(r.default.Fragment,null,l):e&&(a||t||n)?r.default.createElement(G,null,t&&r.default.createElement(F,null,t),a&&r.default.createElement(M,null,a),n&&r.default.createElement(F,null,n)):null,ea=e=>{let{label:t,value:a,description:n,leftIcon:l,rightIcon:i,disabled:s,multiple:o,selected:c,onClick:d,optionRef:u,onKeyDown:p}=e,f=(0,r.useId)();return r.default.createElement(q,{role:"option",ref:u,"aria-labelledby":`option-label-${f}`,"aria-selected":o?void 0:c,"aria-checked":o?c:void 0,disabled:s,onClick:e=>{e.preventDefault(),s||d(a)},onKeyDown:e=>{s||p(e)}},l&&r.default.createElement(j.Icon_default,{name:l,color:"currentColor",size:"20"}),r.default.createElement(Z,null,r.default.createElement(J,{id:`option-label-${f}`},t),r.default.createElement(X,{$disabled:s,id:`option-description-${f}`},n)),i&&r.default.createElement(j.Icon_default,{name:i,color:"currentColor",size:"20"}),!o&&c&&r.default.createElement(j.Icon_default,{name:"check",color:"var(--text-emphasis-brand-default, #0673F9)",size:"20"}),o&&r.default.createElement(j.Icon_default,{name:c?"check-square-filled":"square",color:c?"var(--text-emphasis-brand-default, #0673F9)":"currentColor",size:"20"}))},er=e=>{let{title:t,itemRef:a,onKeyDown:n}=e;return t?r.default.createElement(W,{ref:a,tabIndex:0,"aria-label":t,onKeyDown:n},t):null},en=({searchable:e,searchPlaceholder:t,searchIcon:a,onSearchInputChange:l,onKeyDown:i,searchRef:s})=>{let[o,c]=(0,r.useState)("");return((0,r.useEffect)(()=>{l(o)},[o]),e)?r.default.createElement(U,{role:"searchbox",onKeyDown:e=>{["ArrowUp","ArrowDown","Enter","Escape","Tab"].includes(e.key)&&i(e)}},r.default.createElement(n.TextField_default,{ref:s,name:"dropdown-search-box",value:o,onChange:e=>c(e.target.value),placeholder:t,adornments:{start:r.default.createElement(j.Icon_default,{name:a})}})):null},el=((t=el||{}).SUB_HEADER="subheader",t.DIVIDER="divider",t.OPTION="option",t),ei=(e,t)=>t?e?t:[t]:[];function es(e){return"option"===e.type?!e.disabled:"subheader"===e.type}var eo=(0,r.forwardRef)((e,t)=>{let{showHeader:a=!0,title:n="Select",overline:l="",subtext:i="",customHeader:s=null,searchable:o=!1,searchPlaceholder:c="Search",searchIcon:d="search",onSearchInputChange:u=null,multiple:p=!1,items:f=[],showActionButtons:h=!1,showClearAllButton:g=!0,clearAllButtonText:m="Clear All",applyButtonText:v="Apply",onClearAll:x=()=>{},onChange:y=()=>{},onScrollToBottom:b=()=>{},className:_=null,styles:w={},value:A=null,width:P="300px",maxHeight:E="500px",applyOnOptionSelectInMultipleMode:S=!1,id:R,emptyStateMessage:D="No options available"}=e,k=ei(p,A),[C,T]=(0,r.useState)([]),[j,H]=(0,r.useState)(k),[O,G]=(0,r.useState)(null),M=(0,r.useRef)(null),U=t||M,W=(0,r.useRef)(null),q=(0,r.useRef)([]),Z=(0,r.useRef)([]),J=(e=null)=>{let t=[];t=Array.isArray(e)?e:j,p?y(t):t.length>0&&y(t[0])},X=e=>{if(p){let t=-1!==j.findIndex(t=>t.value===e.value)?j.filter(t=>t.value!==e.value):[...j,e];H(t),!h&&S&&J(t)}else H([e]),h||J(C.filter(t=>t.value===e.value))},Q=(0,r.useCallback)(I(e=>(e=>{if(o)if("function"==typeof u)u(e);else{let t=C.filter(t=>{var a,r;return(null==(a=t.label)?void 0:a.toLowerCase().includes(e.toLowerCase()))||(null==(r=t.description)?void 0:r.toLowerCase().includes(e.toLowerCase()))});t.length>0||e?G(t):G(null)}})(e),500),[C]),el=(e,t=[],a)=>{var r,n,l;e<=-1||e>=t.length?o?null==(r=W.current)||r.focus():null==(n=q.current[0])||n.focus():null==(l=a.current[e])||l.focus()},eo=(e,t,a=[],r)=>{("Tab"!==e.key||e.shiftKey)&&"ArrowDown"!==e.key?"Tab"===e.key&&e.shiftKey||"ArrowUp"===e.key?(e.preventDefault(),(()=>{let e=t-1;for(;e>=0&&!es(a[e]);)e-=1;el(e,a,r)})()):"Enter"===e.key||" "===e.key?(e.preventDefault(),(()=>{let e=a[t];"option"!==e.type||e.disabled||X(e)})()):"Escape"===e.key&&(e.preventDefault(),J()):(e.preventDefault(),(()=>{let e=t+1;for(;e<a.length&&!es(a[e]);)e+=1;el(e,a,r)})())};return(0,r.useEffect)(()=>{T(f.filter(e=>"option"===e.type))},[f]),(0,r.useEffect)(()=>{f.length>0&&function(e,t,a=100){let r=e.findIndex(e=>!0===e.scrollToOnOpen);-1!==r&&setTimeout(()=>{let e=t.current[r];e&&e.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})},a)}(f,q)},[f]),(0,N.useClickAway_default)(U,()=>{p&&!h&&J()}),r.default.createElement(L.motion_default,null,r.default.createElement(z,{className:_,style:w,ref:U,$width:P,$maxHeight:E,role:"menu",id:R,...B},r.default.createElement(et,{showHeader:a,overline:l,title:n,subtext:i,customHeader:s}),r.default.createElement($,null,r.default.createElement(en,{searchRef:W,searchable:o,searchPlaceholder:c,searchIcon:d,onSearchInputChange:Q,onKeyDown:e=>eo(e,-1,O||C,O?Z:q)}),r.default.createElement(Y,{onScroll:e=>{let{scrollTop:t,scrollHeight:a,clientHeight:r}=e.currentTarget;1>Math.abs(a-t-r)&&b()}},Array.isArray(O)&&O.map((e,t)=>r.default.createElement(ea,{key:e.value,optionRef:e=>{Z.current[t]=e},multiple:p,selected:j.map(e=>e.value).includes(e.value),onClick:e=>X(C.find(t=>t.value===e)),onKeyDown:e=>eo(e,t,O,Z),...e})),!Array.isArray(O)&&f.length>0&&f.map((e,t)=>"subheader"===e.type?r.default.createElement(er,{key:`${e.type}-${e.title}`,itemRef:e=>{q.current[t]=e},onKeyDown:e=>eo(e,t,f,q),...e}):"divider"===e.type?r.default.createElement(V,{key:`${e.type}`}):"option"===e.type?r.default.createElement(ea,{key:`${e.type}-${e.value}`,optionRef:e=>{q.current[t]=e},multiple:p,selected:j.map(e=>e.value).includes(e.value),onClick:e=>X(C.find(t=>t.value===e)),onKeyDown:e=>eo(e,t,f,q),...e}):null),!Array.isArray(O)&&0===f.length&&r.default.createElement(K,null,r.default.createElement(F,null,D)))),r.default.createElement(ee,{multiple:p,showActionButtons:h,showClearAllButton:g,clearAllButtonText:m,applyButtonText:v,handleClearAll:()=>{H([]),x()},handleApply:J})))}),ec=e.i(866700),ed=e.i(228093),eu=e.i(378191),ep=e.i(893347),ef=e.i(88653),eh=O.styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    font-family: var(--font-family);
`,eg=(0,O.styled)(T.Button_default)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    span {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
        flex: 1;
    }
`,em=O.styled.div`
    height: fit-content;
    width: fit-content;
`,ev=(0,r.forwardRef)((e,t)=>{var a;let{name:n,label:l,placeholder:i="Select",isRequired:s=!1,isDisabled:o=!1,helpMessage:c,errorMessage:d,color:u="brand",showSelectedValueOnTrigger:p=!0,onTriggerClick:f=()=>{},selectedValues:h=[],multiple:g=!1,trigger:m}=e;return m?r.default.createElement(em,{ref:t,onClick:()=>{o||f()}},m):r.default.createElement(eh,null,l&&r.default.createElement(ec.Label,{name:n,isRequired:s,isDisabled:o,color:"brand"===u?"primary":u},l),r.default.createElement(eg,{ref:t,id:n,name:n,variant:"secondary",color:"brand"===u?"neutral":u,fullWidth:!0,onClick:()=>f(),showAnimationOnClick:!1,disabled:o},r.default.createElement("span",null,p?g&&Array.isArray(h)?(null==h?void 0:h.length)?`${h.length} selected`:i:!g&&((null==h?void 0:h.label)||(null==(a=null==h?void 0:h[0])?void 0:a.label))||i:i),r.default.createElement(j.Icon_default,{name:"chevron-down",color:"currentColor"})),c&&r.default.createElement(ed.HelpMessage,null,c),d&&r.default.createElement(eu.ErrorMessage,null,d))}),ex=e=>{var t,a,n;let l,i,{menuProps:s,multiple:o=!1,items:c=[],value:d=null,onChange:u=()=>{},onClose:p=()=>{},showActionButtons:f=!1}=e;s?{width:l,fullWidth:i}=s:(l="300px",i=!0);let[h,g]=(0,r.useState)(!1),[m,v]=(0,r.useState)(500),[x,y]=(0,r.useState)(ei(o,d)),b=(0,r.useRef)(null),_=(0,r.useRef)(null),w=e=>{var t,a;g(!1),Array.isArray(e)&&!o?p(null!=(t=e[0])?t:null):p(e),null==(a=null==b?void 0:b.current)||a.focus()};return(0,r.useEffect)(()=>{y(ei(o,d))},[d,c,o]),(0,r.useEffect)(()=>{h&&_.current&&v(_.current.clientHeight)},[h]),r.default.createElement(ef.AnimatePresence,null,r.default.createElement(ev,{...e,key:"dropdown-trigger",ref:b,onTriggerClick:()=>{g(!h)},selectedValues:x,multiple:o}),h&&r.default.createElement(ep.Overlay_default,{key:"dropdown-menu-overlay",position:{top:Math.min(null==(a=b.current)?void 0:a.getBoundingClientRect().bottom,window.innerHeight-m-20),left:null==(n=b.current)?void 0:n.getBoundingClientRect().left},shouldFocusOnFirstElement:!0,shouldDisableScroll:h,onOverlayClick:()=>{w(x)}},r.default.createElement(eo,{...e,width:i?`${null==(t=b.current)?void 0:t.getBoundingClientRect().width}px`:l,ref:_,onChange:e=>{y(e),u(e),(!o||f)&&w(e)}})))},ey=e.i(837339),eb=e=>{let{children:t,iconSize:a="20",style:n}=e;return t?r.default.createElement(ey.StyledSuccessMessage,null,r.default.createElement(j.Icon_default,{name:"exclamation-circle",color:"currentColor",size:a}),t&&r.default.createElement(ey.StyledSuccessMessageText,{style:n},t)):null},e_=e.i(272225),ew=O.styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,eA=O.styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    align-self: stretch;
`,eP=O.styled.input`
    display: flex;
    height: 32px;
    width: 100px;
    min-height: 32px;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-sp-5, 8px);
    border-radius: var(--corner-radius-cr-4, 8px);
    border: 1px solid var(--border-moderate-primary-default, #c9cfd9);
    background: var(--bg-subtle-primary-default, #fff);
    color: var(--text-emphasis-primary-default, #16191d);
    text-align: center;

    &::placeholder {
        color: var(--text-emphasis-primary-disabled, #8c95a6);
        opacity: 1;
    }

    &:hover {
        background: linear-gradient(
                0deg,
                var(--bg-subtle-primary-hover, #f6f7f9) 0%,
                var(--bg-subtle-primary-hover, #f6f7f9) 100%
            ),
            var(--bg-subtle-primary-default, #fff);
    }

    ${({$color:e})=>(0,e_.getTextFieldStyles)(e)}

    ${e=>e.$isOtpCorrect&&`
        border-color: var(--border-moderate-success-default, #50CE99);
    `}

    ${e=>e.$isOtpWrong&&`
        border-color: var(--border-moderate-error-default, #F8636B);
    `}

    &:disabled {
        background: linear-gradient(
                0deg,
                var(--bg-subtle-primary-hover, #f6f7f9) 0%,
                var(--bg-subtle-primary-hover, #f6f7f9) 100%
            ),
            var(--bg-subtle-primary-default, #fff);
    }
`,eE=(e,t)=>{var a,r,n;return e?null==(n=null==(a=e.split)?void 0:(r=a.call(e,"")).slice)?void 0:n.call(r,0,t):Array(t).fill("")},eS=e=>{let{value:t="",label:a,name:n,length:l=4,onChange:i=()=>{},onBlur:s=()=>{},style:o,isOtpCorrect:c=!1,isOtpWrong:d=!1,isDisabled:u=!1,errorMessage:p="Wrong OTP. Please try again",successMessage:f="OTP is correct",color:h="brand",className:g}=e,m=(0,r.useRef)(Array(l).fill(null)),[v,x]=(0,r.useState)(eE(t,l)),y=e=>{x(e),i({target:{name:n,value:e.join("")}})};return(0,r.useEffect)(()=>{t!==v.join("")&&x(eE(t,l))},[t,l]),r.default.createElement(ew,{className:g},a&&r.default.createElement(ec.Label,{name:n,isRequired:!0,color:"brand"===h?"primary":h},a),r.default.createElement(eA,{onBlur:e=>{e.relatedTarget&&e.currentTarget.contains(e.relatedTarget)||s({target:{name:n,value:v.join("")}})}},Array.from({length:l}).map((e,t)=>r.default.createElement(eP,{key:`otp-input-field-${n}-${t+1}`,ref:e=>{m.current[t]=e},as:"input",style:o,placeholder:"-",value:v[t]||"",onInput:e=>((e,t)=>{var a;let r=e.target.value;if(r.length>1||!/^\d*$/.test(r))return;let n=[...v];n[t]=r,y(n),t<l-1&&""!==r&&(null==(a=m.current[t+1])||a.focus())})(e,t),onKeyDown:e=>((e,t)=>{var a,r,n;switch(e.key){case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"ArrowLeft":e.preventDefault(),t>0&&(null==(a=m.current[t-1])||a.focus());break;case"ArrowRight":e.preventDefault(),t<l-1&&(null==(r=m.current[t+1])||r.focus());break;case"Backspace":!v[t]&&t>0&&(null==(n=m.current[t-1])||n.focus())}})(e,t),maxLength:1,onPaste:e=>{var t;let a,r,n;return e.preventDefault(),a=e.clipboardData.getData("text").replace(/[^0-9]/g,"").split(""),r=[...v],void(-1!==(n=m.current.findIndex(e=>e===document.activeElement))&&(a.forEach((e,t)=>{let a=n+t;a<l&&(r[a]=e)}),null==(t=m.current[Math.min(n+a.length,l-1)])||t.focus()),y(r))},onFocus:e=>e.target.select(),$isOtpCorrect:c,$isOtpWrong:d,disabled:u,$color:h,inputMode:"numeric"}))),d&&r.default.createElement(eu.ErrorMessage,{iconSize:"16"},p),c&&r.default.createElement(eb,{iconSize:"16"},f))},eR=e.i(501147),eD=e.i(336835),ek=e.i(916687);let eC=e=>({type:el.OPTION,label:e.label,value:e.value,...e.scrollToOnOpen?{scrollToOnOpen:!0}:{}});function eI({field:e,value:t,error:n,onChange:l,onCommit:i}){let s=(0,r.useMemo)(()=>{if("graduationYear"===e.type){let e=new Date().getFullYear();return Array.from({length:11},(t,a)=>String(e+4-a)).map(e=>({label:e,value:e}))}return e.options??[]},[e.type,e.options]),o=(0,r.useMemo)(()=>s.map(eC),[s]),c=s.find(e=>e.value===t);return(0,a.jsx)(ex,{name:e.name,label:e.label,placeholder:e.placeholder,multiple:!1,items:o,value:c?eC(c):void 0,onChange:t=>{let a=Array.isArray(t)?t[0]:t,r=a?String(a.value):"";l(e.name,r),i?.(e.name,r)},errorMessage:n,...e.dropdownProps})}function eN({field:e,value:t,error:n,onChange:l,onCommit:i}){let[s,o]=(0,r.useState)([]),[c,d]=(0,r.useState)(""),u=(0,r.useRef)(null);(0,r.useEffect)(()=>()=>{u.current&&clearTimeout(u.current)},[]);let p=s.map(eC),f=t?{label:c||t,value:t}:void 0;return(0,a.jsx)(ex,{name:e.name,label:e.label,placeholder:e.placeholder??"Search your college",multiple:!1,searchable:!0,onSearchInputChange:e=>{u.current&&clearTimeout(u.current),e.trim().length<2||(u.current=setTimeout(async()=>{o((await (0,eD.fetchCollegeList)(e)).map(e=>({label:e.name,value:String(e.id)})))},300))},items:p,value:f?eC(f):void 0,onChange:t=>{let a=Array.isArray(t)?t[0]:t,r=a?String(a.value):"";d(a?String(a.label):""),l(e.name,r),i?.(e.name,r)},errorMessage:n})}e.s(["FormField",0,function({field:e,value:t,error:r,onChange:n,onCommit:l,phoneAdornment:i,phoneEndAdornment:s}){let o=()=>l?.(e.name,t);switch(e.type){case"text":case"email":case"number":return(0,a.jsx)(eR.NSTextField,{name:e.name,label:e.label,isRequired:e.required,isDisabled:e.disabled,type:"number"===e.type?"text":e.type,inputMode:"number"===e.type?"decimal":void 0,autoComplete:e.autoComplete,placeholder:e.placeholder,value:t,onChange:t=>n(e.name,t.target.value),onBlur:o,errorMessage:r,helpMessage:e.helpMessage});case"phone":return(0,a.jsx)(eR.NSTextField,{name:e.name,label:e.label,isRequired:e.required,isDisabled:e.disabled,type:"tel",inputMode:"numeric",autoComplete:e.autoComplete??"tel",placeholder:e.placeholder,value:t,onChange:t=>n(e.name,(0,ek.normalizeIndianPhone)(t.target.value)),onBlur:o,adornments:i||s?{start:i,end:s}:void 0,errorMessage:r});case"otp":return(0,a.jsx)(eS,{name:e.name,length:e.length??4,value:t,onChange:t=>n(e.name,t.target.value),isOtpWrong:!!r,style:{flexGrow:1,flexShrink:1,flexBasis:"0px",minWidth:0,width:"auto",boxSizing:"border-box"}});case"checkbox":return(0,a.jsxs)("label",{className:"text-ds-muted flex items-center gap-2.5 text-sm",children:[(0,a.jsx)("input",{type:"checkbox",name:e.name,checked:"true"===t,onChange:t=>n(e.name,t.target.checked?"true":""),className:"border-ds-border accent-ds-blue size-4 rounded"}),e.label]});case"radio":return(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{className:"mb-2 text-sm font-medium text-[#16191d]",children:[e.label,e.required&&(0,a.jsx)("span",{className:"text-[#d22d3a]",children:" *"})]}),(0,a.jsx)("div",{className:"flex flex-wrap gap-x-7 gap-y-2",children:(e.options??[]).map(r=>(0,a.jsxs)("label",{className:"flex cursor-pointer items-center gap-2 text-sm text-[#16191d]",children:[(0,a.jsx)("input",{type:"radio",name:e.name,value:r.value,checked:t===r.value,onChange:()=>{n(e.name,r.value),l?.(e.name,r.value)},className:"h-4 w-4 accent-[#0673f9]"}),r.label]},r.value))}),r&&(0,a.jsx)("p",{className:"mt-1 text-xs text-[#d22d3a]",children:r})]});case"dropdown":case"graduationYear":return(0,a.jsx)(eI,{field:e,value:t,error:r,onChange:n,onCommit:l});case"college":return(0,a.jsx)(eN,{field:e,value:t,error:r,onChange:n,onCommit:l});default:return null}}],42872)},703109,968081,e=>{"use strict";var t=e.i(997053),a=e.i(271645),r={DISPLAY_BD_D1:"display-bd-d1",DISPLAY_BD_D2:"display-bd-d2",DISPLAY_BD_D3:"display-bd-d3",HEADING_SB_H1:"heading-sb-h1",HEADING_SB_H2:"heading-sb-h2",HEADING_SB_H3:"heading-sb-h3",HEADING_SB_H4:"heading-sb-h4",HEADING_SB_H5:"heading-sb-h5",HEADING_SB_H6:"heading-sb-h6",PARAGRAPH_SB_P1:"paragraph-sb-p1",PARAGRAPH_SB_P2:"paragraph-sb-p2",PARAGRAPH_SB_P3:"paragraph-sb-p3",PARAGRAPH_SB_P4:"paragraph-sb-p4",PARAGRAPH_SB_L1:"paragraph-sb-l1",PARAGRAPH_SB_L2:"paragraph-sb-l2",PARAGRAPH_MD_P1:"paragraph-md-p1",PARAGRAPH_MD_P2:"paragraph-md-p2",PARAGRAPH_MD_P3:"paragraph-md-p3",PARAGRAPH_MD_P4:"paragraph-md-p4",PARAGRAPH_MD_C1:"paragraph-md-c1",PARAGRAPH_MD_L1:"paragraph-md-l1",PARAGRAPH_MD_L2:"paragraph-md-l2",OVERLINE_SB_OL1:"overline-sb-ol1",OVERLINE_SB_OL2:"overline-sb-ol2",ACTION_SB_P1:"action-sb-p1",ACTION_SB_P2:"action-sb-p2",ACTION_SB_LK1:"action-sb-lk1"};Object.freeze(Object.values(r));var n={H1:"h1",H2:"h2",H3:"h3",H4:"h4",H5:"h5",H6:"h6",P:"p",SPAN:"span",DIV:"div",LABEL:"label",CAPTION:"caption",CODE:"code",AUTO:"auto"};Object.freeze(Object.values(n));var l={[r.DISPLAY_BD_D1]:t.css`
        font-size: var(--font-size-fs-120, 76px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-140, 92px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[r.DISPLAY_BD_D2]:t.css`
        font-size: var(--font-size-fs-110, 64px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-130, 76px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[r.DISPLAY_BD_D3]:t.css`
        font-size: var(--font-size-fs-100, 52px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-120, 64px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[r.HEADING_SB_H1]:t.css`
        font-size: var(--font-size-fs-90, 40px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-110, 48px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[r.HEADING_SB_H2]:t.css`
        font-size: var(--font-size-fs-80, 36px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-100, 42px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[r.HEADING_SB_H3]:t.css`
        font-size: var(--font-size-fs-70, 28px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-90, 32px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[r.HEADING_SB_H4]:t.css`
        font-size: var(--font-size-fs-60, 24px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[r.HEADING_SB_H5]:t.css`
        font-size: var(--font-size-fs-50, 20px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-60, 24px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[r.HEADING_SB_H6]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-40, 20px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[r.PARAGRAPH_SB_P1]:t.css`
        font-size: var(--font-size-fs-40, 18px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[r.PARAGRAPH_SB_P2]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[r.PARAGRAPH_SB_P3]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-10, 0.016px);
    `,[r.PARAGRAPH_SB_P4]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-30, 18px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[r.PARAGRAPH_SB_L1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,[r.PARAGRAPH_SB_L2]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-10, 14px);
        letter-spacing: var(--letter-spacing-ls-40, 0.25px);
    `,[r.PARAGRAPH_MD_P1]:t.css`
        font-size: var(--font-size-fs-40, 18px);
        font-weight: var(--font-weight-fw-10, 500);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[r.PARAGRAPH_MD_P2]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[r.PARAGRAPH_MD_P3]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[r.PARAGRAPH_MD_P4]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-30, 18px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[r.PARAGRAPH_MD_C1]:t.css`
        font-family: 'Fira Code';
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-00, 450);
        line-height: var(--line-height-lh-40, 20px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[r.PARAGRAPH_MD_L1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-60, 0.5px);
    `,[r.PARAGRAPH_MD_L2]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-10, 14px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,[r.OVERLINE_SB_OL1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-70, 1.6px);
        text-transform: uppercase;
    `,[r.OVERLINE_SB_OL2]:t.css`
        font-size: var(--font-size-fs-00, 11px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-00, 12px);
        letter-spacing: var(--letter-spacing-ls-80, 2px);
        text-transform: uppercase;
    `,[r.ACTION_SB_P1]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[r.ACTION_SB_P2]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,[r.ACTION_SB_LK1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-80, 2px);
        text-transform: uppercase;
    `},i={[r.DISPLAY_BD_D1]:n.H1,[r.DISPLAY_BD_D2]:n.H2,[r.DISPLAY_BD_D3]:n.H3,[r.HEADING_SB_H1]:n.H1,[r.HEADING_SB_H2]:n.H2,[r.HEADING_SB_H3]:n.H3,[r.HEADING_SB_H4]:n.H4,[r.HEADING_SB_H5]:n.H5,[r.HEADING_SB_H6]:n.H6,[r.PARAGRAPH_SB_P1]:n.P,[r.PARAGRAPH_SB_P2]:n.P,[r.PARAGRAPH_SB_P3]:n.P,[r.PARAGRAPH_SB_P4]:n.P,[r.PARAGRAPH_SB_L1]:n.LABEL,[r.PARAGRAPH_SB_L2]:n.LABEL,[r.PARAGRAPH_MD_P1]:n.P,[r.PARAGRAPH_MD_P2]:n.P,[r.PARAGRAPH_MD_P3]:n.P,[r.PARAGRAPH_MD_P4]:n.P,[r.PARAGRAPH_MD_C1]:n.CODE,[r.PARAGRAPH_MD_L1]:n.LABEL,[r.PARAGRAPH_MD_L2]:n.LABEL,[r.OVERLINE_SB_OL1]:n.P,[r.OVERLINE_SB_OL2]:n.P,[r.ACTION_SB_P1]:n.SPAN,[r.ACTION_SB_P2]:n.SPAN,[r.ACTION_SB_LK1]:n.SPAN},s=t.styled.p.attrs(e=>({as:e.as||"p"}))`
    margin: 0;
    padding: 0;

    font-family: var(--font-family, 'Mona Sans');
    color: var(--text-emphasis-primary-default, #16191d);

    ${({$variant:e})=>t.css`
            ${e?l[e]:l[r.PARAGRAPH_MD_P1]}
        `};

    ${({$textAlign:e})=>e&&`text-align: ${e};`}
    ${({$textTransform:e})=>e&&`text-transform: ${e};`}
    ${({$fontSize:e})=>e&&`font-size: ${e};`}
    ${({$color:e})=>e&&`color: ${e};`};
`,o=({variant:e="paragraph-md-p1",as:t="auto",color:r="var(--text-emphasis-primary-default, #16191d)",textAlign:l=null,textTransform:o=null,fontSize:c=null,children:d="",className:u="",title:p=null})=>{let f=t===n.AUTO?i[e]:t;return a.default.createElement(s,{$variant:e,as:f,$color:r,$textAlign:l,$textTransform:o,$fontSize:c,className:u,title:p},d)};e.s(["Typography_default",0,o],968081),e.s(["default",0,o],703109)},830249,e=>{"use strict";var t=e.i(271645);e.s(["useParentUrl",0,function(){let[e,a]=(0,t.useState)("");return(0,t.useEffect)(()=>{function e(e){let t=e.data;t&&"object"==typeof t&&"PARENT_URL"===t.type&&"string"==typeof t.url&&a(t.url)}return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]),e}])},844850,e=>{"use strict";var t=e.i(271645);e.s(["useFieldStartTracker",0,function(e,a,r){let n=(0,t.useRef)(a);n.current=a;let l=(0,t.useRef)(r);l.current=r;let i=(0,t.useRef)(new Set);return(0,t.useMemo)(()=>({started(t,a){if(i.current.has(t)||void 0!==a&&""===a.trim())return;let r=n.current.indexOf(t);-1!==r&&(i.current.add(t),l.current({form_type:e,field_name:t,step_number:String(r+1)}))},reset(){i.current.clear()}}),[e])}])},620855,197043,e=>{"use strict";var t=e.i(271645),a=e.i(862085);let r="ns-recaptcha-v3",n=null;function l(e){return window.grecaptcha?Promise.resolve():n||(n=new Promise(t=>{let a=document.getElementById(r);if(a)return void a.addEventListener("load",()=>t());let n=document.createElement("script");n.id=r,n.async=!0,n.src=`https://www.google.com/recaptcha/api.js?render=${e}`,n.addEventListener("load",()=>t()),n.addEventListener("error",()=>t()),document.body.appendChild(n)}))}e.s(["useRecaptcha",0,function(){let e=a.NEWTON_SIGNUP_CONFIG.recaptchaSiteKey;return{preload:(0,t.useCallback)(()=>{l(e)},[e]),getToken:(0,t.useCallback)(async(t="homepage")=>{await l(e);let a=window.grecaptcha;return a?new Promise(r=>{let n=!1,l=e=>{n||(n=!0,clearTimeout(i),r(e))},i=setTimeout(()=>l(""),4e3);a.ready(()=>{a.execute(e,{action:t}).then(e=>l(e)).catch(()=>l(""))})}):""},[e])}}],620855);var i=e.i(336835);let s="generic_signup_form_partial_fill_hash";function o(){try{return window.localStorage.getItem(s)??""}catch{return""}}e.s(["usePartialSignup",0,function(){let e=(0,t.useRef)(""),a=(0,t.useRef)(""),r=(0,t.useRef)(Promise.resolve());return(0,t.useEffect)(()=>{e.current=o()},[]),{save:(0,t.useCallback)((t,n={})=>{let{completed:l=!1,accessToken:c}=n,d=async()=>{let r=JSON.stringify({f:t.fields,p:t.phone});if(!l&&r===a.current||!l&&0===Object.keys(t.fields).length&&!t.phone)return{ok:!0};a.current=r,e.current||(e.current=o());let n=await (0,i.saveSignupPartial)(t,{hash:e.current,completed:l,accessToken:c});if(n.ok&&n.hash){e.current=n.hash;var d=n.hash;try{window.localStorage.setItem(s,d)}catch{}}return l&&n.ok&&function(){try{window.localStorage.removeItem(s)}catch{}}(),{ok:n.ok}},u=r.current.then(d,d);return r.current=u.catch(()=>{}),u},[])}}],197043)},437082,e=>{"use strict";let t={name:"name",email:"email",phone:"phone",otp:"otp",whatsapp:"send_whatsapp_updates",graduationYear:"graduationYear",college:"college",currentClass:"current_class",codingExperience:"coding_experience",twelfthPercentage:"twelfthPercentage"},a={fields:[{type:"text",name:t.name,label:"Full Name",placeholder:"Your Name",autoComplete:"name",required:!0},{type:"email",name:t.email,label:"Email",placeholder:"Enter Email",autoComplete:"email",required:!0},{type:"phone",name:t.phone,label:"Phone Number",placeholder:"Enter Phone Number",autoComplete:"tel",required:!0},{type:"otp",name:t.otp,label:"OTP",length:4,step:"verify",required:!0},{type:"checkbox",name:t.whatsapp,label:"Send me updates on WhatsApp"}]};e.s(["APPLY_FIELD",0,t,"DEFAULT_SIGNUP_FIELDS",0,a])},692156,e=>{"use strict";var t=e.i(843476),a=e.i(271645),r=e.i(339415),n=e.i(703109),l=e.i(549838),i=e.i(22453),s=e.i(620855),o=e.i(830249),c=e.i(197043),d=e.i(336835),u=e.i(58863),p=e.i(437082),f=e.i(42872),h=e.i(3303),g=e.i(862085);function m({courseType:e,armed:a,onArm:r}){if(!a)return(0,t.jsxs)("button",{type:"button",onClick:r,className:"flex h-10 w-full items-center justify-center gap-2 rounded border border-[#dadce0] bg-white text-sm font-medium text-[#3c4043] transition-colors hover:bg-[#f8f9fa]",children:[(0,t.jsx)(v,{}),"Sign up with Google"]});let{djangoClientId:n,djangoClientSecret:l,googleClientId:s}=g.NEWTON_SIGNUP_CONFIG,o=`${i.SIGNUP_API.registerUrl}?ns_client_id=${n}&ns_client_secret=${l}&backend=google-auth`,c=btoa(JSON.stringify({redirect_uri:`/register/${e}`}));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.default,{src:"https://accounts.google.com/gsi/client",async:!0,defer:!0}),(0,t.jsx)("div",{id:"g_id_onload","data-client_id":s,"data-context":"signup","data-ux_mode":"redirect","data-auto_prompt":"false","data-login_uri":o,"data-state":c}),(0,t.jsx)("div",{className:"g_id_signin flex h-10 w-full justify-center","data-type":"standard","data-shape":"rectangular","data-theme":"outline","data-text":"signup_with","data-size":"large","data-logo_alignment":"left"})]})}function v(){return(0,t.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[(0,t.jsx)("path",{fill:"#4285F4",d:"M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.91c1.7-1.57 2.69-3.88 2.69-6.62Z"}),(0,t.jsx)("path",{fill:"#34A853",d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.91-2.26c-.81.54-1.84.86-3.05.86-2.34 0-4.33-1.58-5.04-3.71H.96v2.33A9 9 0 0 0 9 18Z"}),(0,t.jsx)("path",{fill:"#FBBC05",d:"M3.96 10.71A5.41 5.41 0 0 1 3.68 9c0-.6.1-1.18.28-1.71V4.96H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.04l3-2.33Z"}),(0,t.jsx)("path",{fill:"#EA4335",d:"M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.96l3 2.33C4.67 5.16 6.66 3.58 9 3.58Z"})]})}var x=e.i(851361),y=e.i(688921),b=e.i(844850);let _=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,w={"--color-ds-ink":"#f6f7f9","--color-ds-muted":"#b2b9c7","--color-ds-tertiary":"#30363d","--color-ds-border":"#30363d"};function A(e){let t=(0,u.getUtmParams)();for(let[a,r]of Object.entries(e??{}))a in t||(t[a]=r);return t}function P(e){return e.name===p.APPLY_FIELD.name?"full_name":e.name}function E(){return(0,t.jsxs)(n.default,{as:"p",variant:"paragraph-md-p4",color:"var(--color-ds-muted)",className:"text-center",children:["By continuing, you agree to our"," ",(0,t.jsx)("a",{href:i.EXTERNAL_LINKS.termsAndConditions,target:"_blank",rel:"noopener noreferrer",className:"text-ds-blue underline",children:"Terms & Conditions"})," ","for sign-up"]})}function S(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"m8.5 12.4 2.5 2.5L16 9.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})}e.s(["ApplyForm",0,function({config:e,courseType:i,urlSlug:h,title:g,subTitle:v,className:R,recaptchaAction:D="homepage",hasGoogleSignup:k=!1,nextUrl:C,applyFormSuccessRedirectUrl:I,selfRedirectUrl:N,parentUrl:L,utmDefaults:T,leadFields:j,pageName:H,surface:O,theme:B="light",otpOnWhatsApp:z=!1}){let G="dark"===B,{preload:M,getToken:F}=(0,s.useRecaptcha)(),$=(0,x.useSendAnalyticsEvent)(),Y=O?{surface:O}:{},U=(e,t={})=>$({...e,eventData:(0,y.buildEventData)({courseType:i,urlSlug:h,...Y,...t},H)}),W=(0,a.useMemo)(()=>{let t={};for(let a of e.fields)t[a.name]="checkbox"===a.type?"true":a.defaultValue??"";return t},[e]),[V,K]=(0,a.useState)(W),[q,Z]=(0,a.useState)({}),[J,X]=(0,a.useState)("details"),[Q,ee]=(0,a.useState)(!1),[et,ea]=(0,a.useState)(!0),[er,en]=(0,a.useState)(""),[el,ei]=(0,a.useState)(!1),[es,eo]=(0,a.useState)(""),[ec,ed]=(0,a.useState)(0),[eu,ep]=(0,a.useState)(!1),ef=(0,a.useCallback)(()=>ep(!0),[]),eh=e.fields.some(e=>"needs12thYear"===e.showWhen),eg=(0,a.useMemo)(()=>e.fields.filter(e=>(e.step??"details")==="details"&&!e.showWhen).map(P),[e]),em=(0,b.useFieldStartTracker)("signup",eg,e=>U(y.FORM_FIELD_EVENTS.FIELD_STARTED,{...e})),ev=(t,a)=>{if(K(e=>({...e,[t]:a})),"details"!==J)return;let r=e.fields.some(e=>e.name===t&&"checkbox"===e.type);em.started(P({name:t}),r?void 0:a)};function ex(t){return e.fields.filter(e=>{let a=e.step??"details";return"details"===t?"details"===a:"verify"===t?"verify"===a&&"needs12thYear"!==e.showWhen:"twelfth"===t&&"needs12thYear"===e.showWhen})}function ey(){return e.fields.filter(e=>"needs12thYear"!==e.showWhen&&("newUser"!==e.showWhen||!Q)&&("details"===(e.step??"details")||"verify"===J))}function eb(e){let t={};for(let a of e){let e=(V[a.name]??"").trim();if("checkbox"!==a.type)if(a.name===p.APPLY_FIELD.name&&e.length<2)t[a.name]="Please enter your name";else if("email"!==a.type||_.test(e))if("phone"===a.type&&10!==e.replace(/\D/g,"").length)t[a.name]="Enter a valid 10-digit number";else if("otp"===a.type&&e.length!==(a.length??4))t[a.name]="Enter the OTP";else if("number"===a.type&&e){let r=Number(e);Number.isNaN(r)||null!=a.min&&r<a.min||null!=a.max&&r>a.max?t[a.name]="Enter a valid value":a.required&&!e&&(t[a.name]="Required")}else a.required&&!e&&(t[a.name]="Required");else t[a.name]="Enter a valid email address"}return t}(0,a.useEffect)(()=>{if(ec<=0)return;let e=setTimeout(()=>ed(e=>e-1),1e3);return()=>clearTimeout(e)},[ec]);let e_=(V[p.APPLY_FIELD.phone]??"").replace(/\D/g,""),ew=(V[p.APPLY_FIELD.whatsapp]??"")==="true",eA=(V[p.APPLY_FIELD.name]??"").trim().split(" ")[0]??"",eP=(0,o.useParentUrl)()||L||"",{save:eE}=(0,c.usePartialSignup)(),eS=(0,a.useCallback)((t,a=!1)=>{let r=function(e,t){let a={};for(let r of e.fields){if(r.name===p.APPLY_FIELD.phone)continue;let e=t[r.name]??"";"checkbox"===r.type?a[r.name]="true"===e:""!==e&&(a[r.name]=e)}return a}(e,t);return{fields:j?j(r,{completed:a}):r,phone:(t[p.APPLY_FIELD.phone]??"").replace(/\D/g,""),urlSlug:h,parentUrl:eP,utmParams:A(T)}},[e,h,eP,T,j]),eR=(0,a.useCallback)((t,a)=>{"details"!==J&&"verify"!==J||eE(eS(e.fields.some(e=>e.name===t&&e.savesBeforeChange)?V:{...V,[t]:a}))},[J,eE,eS,V,e]),eD=0===Object.keys(eb(ey())).length;async function ek(){eo(""),ei(!0);try{let e=await F(D),t=await (0,d.sendOtp)({phone:e_,recaptchaToken:e,whatsapp:z});t.ok?(ee(t.existingUser),ea(!!t.existingUser&&!0===t.twelfthPassingYearFilled),X("verify"),ed(30),U(y.SIGNUP_FORM_EVENTS.OTP_SENT,{existingUser:t.existingUser})):(t.throttled&&ed(30),eo(t.error??"Could not send the OTP. Please try again."))}catch{eo("Could not send the OTP. Please try again.")}finally{ei(!1)}}async function eC(e){e.preventDefault(),eo("");let t=eb(ey());if(Z(t),Object.keys(t).length||el)return;U(y.SIGNUP_FORM_EVENTS.FORM_SUBMIT_CLICK,{existingUser:Q}),ei(!0);let a=await (0,d.registerOrLogin)({phone:e_,otp:V[p.APPLY_FIELD.otp]??"",name:V[p.APPLY_FIELD.name]??"",email:V[p.APPLY_FIELD.email]??"",whatsapp:ew,existingUser:Q,utmParams:A(T),courseType:i,urlSlug:h,graduationYear:V[p.APPLY_FIELD.graduationYear]||void 0,college:V[p.APPLY_FIELD.college]||void 0,currentClass:V[p.APPLY_FIELD.currentClass]||void 0,codingExperience:V[p.APPLY_FIELD.codingExperience]||void 0});a.ok&&a.accessToken?((0,u.setAuthCookie)("access_token_ns_student_web",a.accessToken),a.refreshToken&&(0,u.setAuthCookie)("refresh_token_ns_student_web",a.refreshToken),eE(eS(V,!0),{completed:!0,accessToken:a.accessToken}),U(y.SIGNUP_FORM_EVENTS.FORM_SUBMIT_SUCCESS,{existingUser:Q}),eh&&!et?(en(a.accessToken),X("twelfth"),ei(!1)):eN()):(ei(!1),eo(a.error??"Could not verify the OTP. Please try again."),U(y.SIGNUP_FORM_EVENTS.FORM_SUBMIT_FAILURE,{error:a.error??""}))}async function eI(e){e.preventDefault();let t=eb(ex("twelfth"));if(Z(t),Object.keys(t).length||el)return;ei(!0);let a=await (0,d.updateProfile)({twelfthPassingYear:V[p.APPLY_FIELD.twelfthPercentage]??"",accessToken:er});a.ok?eN():(ei(!1),eo(a.error??"Could not save your details. Please try again."))}function eN(){X("done"),C?window.open(C,"_blank","noopener,noreferrer"):N?window.setTimeout(()=>{window.location.href=(0,u.appendUtmParams)(N)},1500):window.setTimeout(()=>{window.location.href=(0,u.buildRegisterRedirect)(i,h,I)},1500)}let eL=(0,a.useCallback)(e=>{"key"in e&&"Escape"===e.key||(M(),k&&ef())},[M,k,ef]),eT=(0,t.jsx)("span",{className:"ds-phone-prefix text-ds-ink inline-flex w-14 shrink-0 items-center justify-center text-sm font-medium whitespace-nowrap",children:"🇮🇳 +91"}),ej=e=>e.map(e=>(0,t.jsx)(f.FormField,{field:e,value:V[e.name]??"",error:q[e.name],onChange:ev,onCommit:eR,phoneAdornment:eT,phoneEndAdornment:"phone"===e.type&&"verify"===J?(0,t.jsx)("button",{type:"button",disabled:el||ec>0,onClick:()=>void ek(),className:"bg-ds-blue rounded px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white disabled:opacity-50",children:"Resend OTP"}):void 0},e.name));return(0,t.jsxs)("div",{className:(0,l.cn)("apply-form flex flex-col",G&&"grauity-theme-dark",R),style:G?w:void 0,children:[(0,t.jsxs)("div",{className:"pb-4 text-center",children:[(0,t.jsx)(n.default,{as:"p",variant:"paragraph-sb-p2",color:"var(--color-ds-ink)",children:g}),v?(0,t.jsx)(n.default,{as:"p",variant:"paragraph-md-p3",color:"var(--color-ds-muted)",className:"mt-1",children:v}):null]}),("details"===J||"verify"===J)&&(0,t.jsxs)("form",{className:"flex flex-col gap-4 pt-5",onSubmit:"details"===J?function(e){e.preventDefault();let t=eb(ey());Z(t),Object.keys(t).length||el||(U(y.SIGNUP_FORM_EVENTS.SEND_OTP_CLICK,{form_type:"signup",step_number:String(eg.length+1),...Y}),ek())}:eC,onPointerDownCapture:eL,onKeyDownCapture:eL,noValidate:!0,children:[k&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m,{courseType:i,armed:eu,onArm:ef}),(0,t.jsxs)("div",{className:"text-ds-muted flex items-center gap-3 text-xs",children:[(0,t.jsx)("span",{className:"bg-ds-tertiary h-px flex-1"}),"OR",(0,t.jsx)("span",{className:"bg-ds-tertiary h-px flex-1"})]})]}),ej(ey()),"verify"===J?(0,t.jsxs)(n.default,{as:"p",variant:"paragraph-sb-p3",color:"var(--color-ds-ink)",children:["Didn't receive the code?"," ",(0,t.jsx)("button",{type:"button",disabled:el||ec>0,onClick:()=>void ek(),className:"text-ds-blue font-semibold enabled:hover:underline disabled:cursor-not-allowed",children:ec>0?`Resend OTP in ${ec} seconds`:"Resend OTP"})]}):null,es?(0,t.jsx)(n.default,{as:"p",variant:"paragraph-md-p3",color:"#d22d3a",children:es}):null,(0,t.jsx)(r.default,{type:"submit",variant:"primary",size:"large",fullWidth:!0,loading:el,disabled:!eD,children:"details"===J?"Send OTP":Q?"Login":"Verify & Sign Up"}),(0,t.jsx)(E,{})]}),"twelfth"===J&&(0,t.jsxs)("form",{className:"flex flex-col gap-5 pt-5",onSubmit:eI,children:[ej(ex("twelfth")),es?(0,t.jsx)(n.default,{as:"p",variant:"paragraph-md-p3",color:"#d22d3a",children:es}):null,(0,t.jsx)(r.default,{type:"submit",variant:"primary",size:"large",fullWidth:!0,loading:el,children:"Continue"})]}),"done"===J&&(0,t.jsxs)("div",{className:"flex flex-col items-center gap-3 py-10 text-center",children:[(0,t.jsx)(S,{className:"text-ds-green size-12"}),(0,t.jsx)(n.default,{as:"p",variant:"paragraph-sb-p1",color:"var(--color-ds-ink)",children:"You're all set!"}),C?(0,t.jsxs)(n.default,{as:"p",variant:"paragraph-md-p3",color:"var(--color-ds-muted)",className:"max-w-xs",children:["Your download has opened in a new tab."," ",(0,t.jsx)("a",{href:C,target:"_blank",rel:"noopener noreferrer",className:"text-ds-blue font-semibold underline",children:"Didn't open? Download here"})]}):(0,t.jsxs)(n.default,{as:"p",variant:"paragraph-md-p3",color:"var(--color-ds-muted)",className:"max-w-xs",children:["Thanks",eA?`, ${eA}`:"","!"," ",N?"Taking you to the next step…":"Redirecting you to complete your enrolment…"]})]})]})}],692156)}]);