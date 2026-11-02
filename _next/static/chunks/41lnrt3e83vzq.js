(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,42872,e=>{"use strict";var t,r=e.i(843476),a=e.i(271645),l=e.i(844611),n=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},i=e.g&&e.g.Object===Object&&e.g,o="object"==typeof self&&self&&self.Object===Object&&self,s=i||o||Function("return this")(),d=function(){return s.Date.now()},u=/\s/,c=function(e){for(var t=e.length;t--&&u.test(e.charAt(t)););return t},f=/^\s+/,p=s.Symbol,m=Object.prototype,h=m.hasOwnProperty,g=m.toString,x=p?p.toStringTag:void 0,v=function(e){var t=h.call(e,x),r=e[x];try{e[x]=void 0;var a=!0}catch(e){}var l=g.call(e);return a&&(t?e[x]=r:delete e[x]),l},y=Object.prototype.toString,b=p?p.toStringTag:void 0,w=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":b&&b in Object(e)?v(e):y.call(e)},E=function(e){return"symbol"==typeof e||null!=e&&"object"==typeof e&&"[object Symbol]"==w(e)},k=0/0,_=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,C=/^0o[0-7]+$/i,j=parseInt,P=function(e){if("number"==typeof e)return e;if(E(e))return k;if(n(e)){var t,r="function"==typeof e.valueOf?e.valueOf():e;e=n(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=(t=e)?t.slice(0,c(t)+1).replace(f,""):t;var a=S.test(e);return a||C.test(e)?j(e.slice(2),a?2:8):_.test(e)?k:+e},T=Math.max,A=Math.min,N=function(e,t,r){var a,l,i,o,s,u,c=0,f=!1,p=!1,m=!0;if("function"!=typeof e)throw TypeError("Expected a function");function h(t){var r=a,n=l;return a=l=void 0,c=t,o=e.apply(n,r)}function g(e){var r=e-u,a=e-c;return void 0===u||r>=t||r<0||p&&a>=i}function x(){var e,r,a,l=d();if(g(l))return v(l);s=setTimeout(x,(e=l-u,r=l-c,a=t-e,p?A(a,i-r):a))}function v(e){return(s=void 0,m&&a)?h(e):(a=l=void 0,o)}function y(){var e,r=d(),n=g(r);if(a=arguments,l=this,u=r,n){if(void 0===s)return c=e=u,s=setTimeout(x,t),f?h(e):o;if(p)return clearTimeout(s),s=setTimeout(x,t),h(u)}return void 0===s&&(s=setTimeout(x,t)),o}return t=P(t)||0,n(r)&&(f=!!r.leading,i=(p="maxWait"in r)?T(P(r.maxWait)||0,t):i,m="trailing"in r?!!r.trailing:m),y.cancel=function(){void 0!==s&&clearTimeout(s),c=0,a=u=l=s=void 0},y.flush=function(){return void 0===s?o:v(d())},y},O=e.i(773892),D=e.i(364072),I=e.i(189101),F=e.i(892480),L=e.i(824511),R=e.i(997053),$={initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{y:"-8px",opacity:0},visible:{y:"8px",opacity:1},exit:{y:"-8px",opacity:0}},transition:{duration:.2}},M=(0,R.styled)(L.m.div)`
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
`,U=R.styled.div`
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
`,Y=R.styled.div`
    color: var(--text-emphasis-primary-default, #16191d);
    font-size: 18px;
    font-style: normal;
    font-weight: 550;
    line-height: 28px;
    letter-spacing: 0.06px;
`,z=R.styled.div`
    color: var(--text-emphasis-secondary-default, #5b6271);
    font-size: 12px;
    font-style: normal;
    font-weight: 450;
    line-height: 14px;
    letter-spacing: 0.4px;
`,B=R.styled.div`
    display: flex;
    padding: 4px 12px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    flex-grow: 1;
    overflow: auto;
    position: relative;
    gap: 4px;
`,W=R.styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow-y: auto;
    width: 100%;
`,q=R.styled.div`
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
`,K=R.styled.div`
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
`,G=R.styled.div`
    height: 1px;
    min-height: 1px;
    margin: 8px 4px;
    align-self: stretch;
    border-radius: 8px;
    background: var(--border-subtle-primary-default, #e1e5ea);
`,V=R.styled.div`
    display: flex;
    padding: 8px 16px;
    align-items: center;
    justify-content: center;
`,H=R.styled.button`
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

    ${({disabled:e})=>e&&R.css`
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
`,Z=R.styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
    overflow: hidden;
`,J=R.styled.div`
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
`,X=R.styled.div`
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

    ${({$disabled:e})=>e&&R.css`
            color: var(--text-emphasis-primary-disabled, #8c95a6) !important;
        `}
`,Q=R.styled.div`
    padding: 14px 16px 6px 16px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-top: 1px solid var(--border-subtle-primary-default, #e1e5ea);
`,ee=({multiple:e,showActionButtons:t,showClearAllButton:r,clearAllButtonText:l,applyButtonText:n,handleClearAll:i,handleApply:o})=>t?a.default.createElement(Q,null,a.default.createElement(I.Button_default,{size:"small",variant:"primary",color:"brand",onClick:()=>o()},n),r&&e&&a.default.createElement(I.Button_default,{size:"small",variant:"tertiary",color:"neutral",onClick:i},l)):null,et=({showHeader:e,overline:t,title:r,subtext:l,customHeader:n})=>n?a.default.createElement(a.default.Fragment,null,n):e&&(r||t||l)?a.default.createElement(U,null,t&&a.default.createElement(z,null,t),r&&a.default.createElement(Y,null,r),l&&a.default.createElement(z,null,l)):null,er=e=>{let{label:t,value:r,description:l,leftIcon:n,rightIcon:i,disabled:o,multiple:s,selected:d,onClick:u,optionRef:c,onKeyDown:f}=e,p=(0,a.useId)();return a.default.createElement(H,{role:"option",ref:c,"aria-labelledby":`option-label-${p}`,"aria-selected":s?void 0:d,"aria-checked":s?d:void 0,disabled:o,onClick:e=>{e.preventDefault(),o||u(r)},onKeyDown:e=>{o||f(e)}},n&&a.default.createElement(F.Icon_default,{name:n,color:"currentColor",size:"20"}),a.default.createElement(Z,null,a.default.createElement(J,{id:`option-label-${p}`},t),a.default.createElement(X,{$disabled:o,id:`option-description-${p}`},l)),i&&a.default.createElement(F.Icon_default,{name:i,color:"currentColor",size:"20"}),!s&&d&&a.default.createElement(F.Icon_default,{name:"check",color:"var(--text-emphasis-brand-default, #0673F9)",size:"20"}),s&&a.default.createElement(F.Icon_default,{name:d?"check-square-filled":"square",color:d?"var(--text-emphasis-brand-default, #0673F9)":"currentColor",size:"20"}))},ea=e=>{let{title:t,itemRef:r,onKeyDown:l}=e;return t?a.default.createElement(K,{ref:r,tabIndex:0,"aria-label":t,onKeyDown:l},t):null},el=({searchable:e,searchPlaceholder:t,searchIcon:r,onSearchInputChange:n,onKeyDown:i,searchRef:o})=>{let[s,d]=(0,a.useState)("");return((0,a.useEffect)(()=>{n(s)},[s]),e)?a.default.createElement(q,{role:"searchbox",onKeyDown:e=>{["ArrowUp","ArrowDown","Enter","Escape","Tab"].includes(e.key)&&i(e)}},a.default.createElement(l.TextField_default,{ref:o,name:"dropdown-search-box",value:s,onChange:e=>d(e.target.value),placeholder:t,adornments:{start:a.default.createElement(F.Icon_default,{name:r})}})):null},en=((t=en||{}).SUB_HEADER="subheader",t.DIVIDER="divider",t.OPTION="option",t),ei=(e,t)=>t?e?t:[t]:[];function eo(e){return"option"===e.type?!e.disabled:"subheader"===e.type}var es=(0,a.forwardRef)((e,t)=>{let{showHeader:r=!0,title:l="Select",overline:n="",subtext:i="",customHeader:o=null,searchable:s=!1,searchPlaceholder:d="Search",searchIcon:u="search",onSearchInputChange:c=null,multiple:f=!1,items:p=[],showActionButtons:m=!1,showClearAllButton:h=!0,clearAllButtonText:g="Clear All",applyButtonText:x="Apply",onClearAll:v=()=>{},onChange:y=()=>{},onScrollToBottom:b=()=>{},className:w=null,styles:E={},value:k=null,width:_="300px",maxHeight:S="500px",applyOnOptionSelectInMultipleMode:C=!1,id:j,emptyStateMessage:P="No options available"}=e,T=ei(f,k),[A,I]=(0,a.useState)([]),[F,L]=(0,a.useState)(T),[R,U]=(0,a.useState)(null),Y=(0,a.useRef)(null),q=t||Y,K=(0,a.useRef)(null),H=(0,a.useRef)([]),Z=(0,a.useRef)([]),J=(e=null)=>{let t=[];t=Array.isArray(e)?e:F,f?y(t):t.length>0&&y(t[0])},X=e=>{if(f){let t=-1!==F.findIndex(t=>t.value===e.value)?F.filter(t=>t.value!==e.value):[...F,e];L(t),!m&&C&&J(t)}else L([e]),m||J(A.filter(t=>t.value===e.value))},Q=(0,a.useCallback)(N(e=>(e=>{if(s)if("function"==typeof c)c(e);else{let t=A.filter(t=>{var r,a;return(null==(r=t.label)?void 0:r.toLowerCase().includes(e.toLowerCase()))||(null==(a=t.description)?void 0:a.toLowerCase().includes(e.toLowerCase()))});t.length>0||e?U(t):U(null)}})(e),500),[A]),en=(e,t=[],r)=>{var a,l,n;e<=-1||e>=t.length?s?null==(a=K.current)||a.focus():null==(l=H.current[0])||l.focus():null==(n=r.current[e])||n.focus()},es=(e,t,r=[],a)=>{("Tab"!==e.key||e.shiftKey)&&"ArrowDown"!==e.key?"Tab"===e.key&&e.shiftKey||"ArrowUp"===e.key?(e.preventDefault(),(()=>{let e=t-1;for(;e>=0&&!eo(r[e]);)e-=1;en(e,r,a)})()):"Enter"===e.key||" "===e.key?(e.preventDefault(),(()=>{let e=r[t];"option"!==e.type||e.disabled||X(e)})()):"Escape"===e.key&&(e.preventDefault(),J()):(e.preventDefault(),(()=>{let e=t+1;for(;e<r.length&&!eo(r[e]);)e+=1;en(e,r,a)})())};return(0,a.useEffect)(()=>{I(p.filter(e=>"option"===e.type))},[p]),(0,a.useEffect)(()=>{p.length>0&&function(e,t,r=100){let a=e.findIndex(e=>!0===e.scrollToOnOpen);-1!==a&&setTimeout(()=>{let e=t.current[a];e&&e.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})},r)}(p,H)},[p]),(0,O.useClickAway_default)(q,()=>{f&&!m&&J()}),a.default.createElement(D.motion_default,null,a.default.createElement(M,{className:w,style:E,ref:q,$width:_,$maxHeight:S,role:"menu",id:j,...$},a.default.createElement(et,{showHeader:r,overline:n,title:l,subtext:i,customHeader:o}),a.default.createElement(B,null,a.default.createElement(el,{searchRef:K,searchable:s,searchPlaceholder:d,searchIcon:u,onSearchInputChange:Q,onKeyDown:e=>es(e,-1,R||A,R?Z:H)}),a.default.createElement(W,{onScroll:e=>{let{scrollTop:t,scrollHeight:r,clientHeight:a}=e.currentTarget;1>Math.abs(r-t-a)&&b()}},Array.isArray(R)&&R.map((e,t)=>a.default.createElement(er,{key:e.value,optionRef:e=>{Z.current[t]=e},multiple:f,selected:F.map(e=>e.value).includes(e.value),onClick:e=>X(A.find(t=>t.value===e)),onKeyDown:e=>es(e,t,R,Z),...e})),!Array.isArray(R)&&p.length>0&&p.map((e,t)=>"subheader"===e.type?a.default.createElement(ea,{key:`${e.type}-${e.title}`,itemRef:e=>{H.current[t]=e},onKeyDown:e=>es(e,t,p,H),...e}):"divider"===e.type?a.default.createElement(G,{key:`${e.type}`}):"option"===e.type?a.default.createElement(er,{key:`${e.type}-${e.value}`,optionRef:e=>{H.current[t]=e},multiple:f,selected:F.map(e=>e.value).includes(e.value),onClick:e=>X(A.find(t=>t.value===e)),onKeyDown:e=>es(e,t,p,H),...e}):null),!Array.isArray(R)&&0===p.length&&a.default.createElement(V,null,a.default.createElement(z,null,P)))),a.default.createElement(ee,{multiple:f,showActionButtons:m,showClearAllButton:h,clearAllButtonText:g,applyButtonText:x,handleClearAll:()=>{L([]),v()},handleApply:J})))}),ed=e.i(866700),eu=e.i(228093),ec=e.i(378191),ef=e.i(893347),ep=e.i(88653),em=R.styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    font-family: var(--font-family);
`,eh=(0,R.styled)(I.Button_default)`
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
`,eg=R.styled.div`
    height: fit-content;
    width: fit-content;
`,ex=(0,a.forwardRef)((e,t)=>{var r;let{name:l,label:n,placeholder:i="Select",isRequired:o=!1,isDisabled:s=!1,helpMessage:d,errorMessage:u,color:c="brand",showSelectedValueOnTrigger:f=!0,onTriggerClick:p=()=>{},selectedValues:m=[],multiple:h=!1,trigger:g}=e;return g?a.default.createElement(eg,{ref:t,onClick:()=>{s||p()}},g):a.default.createElement(em,null,n&&a.default.createElement(ed.Label,{name:l,isRequired:o,isDisabled:s,color:"brand"===c?"primary":c},n),a.default.createElement(eh,{ref:t,id:l,name:l,variant:"secondary",color:"brand"===c?"neutral":c,fullWidth:!0,onClick:()=>p(),showAnimationOnClick:!1,disabled:s},a.default.createElement("span",null,f?h&&Array.isArray(m)?(null==m?void 0:m.length)?`${m.length} selected`:i:!h&&((null==m?void 0:m.label)||(null==(r=null==m?void 0:m[0])?void 0:r.label))||i:i),a.default.createElement(F.Icon_default,{name:"chevron-down",color:"currentColor"})),d&&a.default.createElement(eu.HelpMessage,null,d),u&&a.default.createElement(ec.ErrorMessage,null,u))}),ev=e=>{var t,r,l;let n,i,{menuProps:o,multiple:s=!1,items:d=[],value:u=null,onChange:c=()=>{},onClose:f=()=>{},showActionButtons:p=!1}=e;o?{width:n,fullWidth:i}=o:(n="300px",i=!0);let[m,h]=(0,a.useState)(!1),[g,x]=(0,a.useState)(500),[v,y]=(0,a.useState)(ei(s,u)),b=(0,a.useRef)(null),w=(0,a.useRef)(null),E=e=>{var t,r;h(!1),Array.isArray(e)&&!s?f(null!=(t=e[0])?t:null):f(e),null==(r=null==b?void 0:b.current)||r.focus()};return(0,a.useEffect)(()=>{y(ei(s,u))},[u,d,s]),(0,a.useEffect)(()=>{m&&w.current&&x(w.current.clientHeight)},[m]),a.default.createElement(ep.AnimatePresence,null,a.default.createElement(ex,{...e,key:"dropdown-trigger",ref:b,onTriggerClick:()=>{h(!m)},selectedValues:v,multiple:s}),m&&a.default.createElement(ef.Overlay_default,{key:"dropdown-menu-overlay",position:{top:Math.min(null==(r=b.current)?void 0:r.getBoundingClientRect().bottom,window.innerHeight-g-20),left:null==(l=b.current)?void 0:l.getBoundingClientRect().left},shouldFocusOnFirstElement:!0,shouldDisableScroll:m,onOverlayClick:()=>{E(v)}},a.default.createElement(es,{...e,width:i?`${null==(t=b.current)?void 0:t.getBoundingClientRect().width}px`:n,ref:w,onChange:e=>{y(e),c(e),(!s||p)&&E(e)}})))},ey=e.i(837339),eb=e=>{let{children:t,iconSize:r="20",style:l}=e;return t?a.default.createElement(ey.StyledSuccessMessage,null,a.default.createElement(F.Icon_default,{name:"exclamation-circle",color:"currentColor",size:r}),t&&a.default.createElement(ey.StyledSuccessMessageText,{style:l},t)):null},ew=e.i(272225),eE=R.styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,ek=R.styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    align-self: stretch;
`,e_=R.styled.input`
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

    ${({$color:e})=>(0,ew.getTextFieldStyles)(e)}

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
`,eS=(e,t)=>{var r,a,l;return e?null==(l=null==(r=e.split)?void 0:(a=r.call(e,"")).slice)?void 0:l.call(a,0,t):Array(t).fill("")},eC=e=>{let{value:t="",label:r,name:l,length:n=4,onChange:i=()=>{},onBlur:o=()=>{},style:s,isOtpCorrect:d=!1,isOtpWrong:u=!1,isDisabled:c=!1,errorMessage:f="Wrong OTP. Please try again",successMessage:p="OTP is correct",color:m="brand",className:h}=e,g=(0,a.useRef)(Array(n).fill(null)),[x,v]=(0,a.useState)(eS(t,n)),y=e=>{v(e),i({target:{name:l,value:e.join("")}})};return(0,a.useEffect)(()=>{t!==x.join("")&&v(eS(t,n))},[t,n]),a.default.createElement(eE,{className:h},r&&a.default.createElement(ed.Label,{name:l,isRequired:!0,color:"brand"===m?"primary":m},r),a.default.createElement(ek,{onBlur:e=>{e.relatedTarget&&e.currentTarget.contains(e.relatedTarget)||o({target:{name:l,value:x.join("")}})}},Array.from({length:n}).map((e,t)=>a.default.createElement(e_,{key:`otp-input-field-${l}-${t+1}`,ref:e=>{g.current[t]=e},as:"input",style:s,placeholder:"-",value:x[t]||"",onInput:e=>((e,t)=>{var r;let a=e.target.value;if(a.length>1||!/^\d*$/.test(a))return;let l=[...x];l[t]=a,y(l),t<n-1&&""!==a&&(null==(r=g.current[t+1])||r.focus())})(e,t),onKeyDown:e=>((e,t)=>{var r,a,l;switch(e.key){case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"ArrowLeft":e.preventDefault(),t>0&&(null==(r=g.current[t-1])||r.focus());break;case"ArrowRight":e.preventDefault(),t<n-1&&(null==(a=g.current[t+1])||a.focus());break;case"Backspace":!x[t]&&t>0&&(null==(l=g.current[t-1])||l.focus())}})(e,t),maxLength:1,onPaste:e=>{var t;let r,a,l;return e.preventDefault(),r=e.clipboardData.getData("text").replace(/[^0-9]/g,"").split(""),a=[...x],void(-1!==(l=g.current.findIndex(e=>e===document.activeElement))&&(r.forEach((e,t)=>{let r=l+t;r<n&&(a[r]=e)}),null==(t=g.current[Math.min(l+r.length,n-1)])||t.focus()),y(a))},onFocus:e=>e.target.select(),$isOtpCorrect:d,$isOtpWrong:u,disabled:c,$color:m,inputMode:"numeric"}))),u&&a.default.createElement(ec.ErrorMessage,{iconSize:"16"},f),d&&a.default.createElement(eb,{iconSize:"16"},p))},ej=e.i(501147),eP=e.i(336835),eT=e.i(916687);let eA=e=>({type:en.OPTION,label:e.label,value:e.value,...e.scrollToOnOpen?{scrollToOnOpen:!0}:{}});function eN({field:e,value:t,error:l,onChange:n,onCommit:i}){let o=(0,a.useMemo)(()=>{if("graduationYear"===e.type){let e=new Date().getFullYear();return Array.from({length:11},(t,r)=>String(e+4-r)).map(e=>({label:e,value:e}))}return e.options??[]},[e.type,e.options]),s=(0,a.useMemo)(()=>o.map(eA),[o]),d=o.find(e=>e.value===t);return(0,r.jsx)(ev,{name:e.name,label:e.label,placeholder:e.placeholder,multiple:!1,items:s,value:d?eA(d):void 0,onChange:t=>{let r=Array.isArray(t)?t[0]:t,a=r?String(r.value):"";n(e.name,a),i?.(e.name,a)},errorMessage:l,...e.dropdownProps})}function eO({field:e,value:t,error:l,onChange:n,onCommit:i}){let[o,s]=(0,a.useState)([]),[d,u]=(0,a.useState)(""),c=(0,a.useRef)(null);(0,a.useEffect)(()=>()=>{c.current&&clearTimeout(c.current)},[]);let f=o.map(eA),p=t?{label:d||t,value:t}:void 0;return(0,r.jsx)(ev,{name:e.name,label:e.label,placeholder:e.placeholder??"Search your college",multiple:!1,searchable:!0,onSearchInputChange:e=>{c.current&&clearTimeout(c.current),e.trim().length<2||(c.current=setTimeout(async()=>{s((await (0,eP.fetchCollegeList)(e)).map(e=>({label:e.name,value:String(e.id)})))},300))},items:f,value:p?eA(p):void 0,onChange:t=>{let r=Array.isArray(t)?t[0]:t,a=r?String(r.value):"";u(r?String(r.label):""),n(e.name,a),i?.(e.name,a)},errorMessage:l})}e.s(["FormField",0,function({field:e,value:t,error:a,onChange:l,onCommit:n,phoneAdornment:i,phoneEndAdornment:o}){let s=()=>n?.(e.name,t);switch(e.type){case"text":case"email":case"number":return(0,r.jsx)(ej.NSTextField,{name:e.name,label:e.label,isRequired:e.required,isDisabled:e.disabled,type:"number"===e.type?"text":e.type,inputMode:"number"===e.type?"decimal":void 0,autoComplete:e.autoComplete,placeholder:e.placeholder,value:t,onChange:t=>l(e.name,t.target.value),onBlur:s,errorMessage:a,helpMessage:e.helpMessage});case"phone":return(0,r.jsx)(ej.NSTextField,{name:e.name,label:e.label,isRequired:e.required,isDisabled:e.disabled,type:"tel",inputMode:"numeric",autoComplete:e.autoComplete??"tel",placeholder:e.placeholder,value:t,onChange:t=>l(e.name,(0,eT.normalizeIndianPhone)(t.target.value)),onBlur:s,adornments:i||o?{start:i,end:o}:void 0,errorMessage:a});case"otp":return(0,r.jsx)(eC,{name:e.name,length:e.length??4,value:t,onChange:t=>l(e.name,t.target.value),isOtpWrong:!!a,style:{flexGrow:1,flexShrink:1,flexBasis:"0px",minWidth:0,width:"auto",boxSizing:"border-box"}});case"checkbox":return(0,r.jsxs)("label",{className:"text-ds-muted flex items-center gap-2.5 text-sm",children:[(0,r.jsx)("input",{type:"checkbox",name:e.name,checked:"true"===t,onChange:t=>l(e.name,t.target.checked?"true":""),className:"border-ds-border accent-ds-blue size-4 rounded"}),e.label]});case"radio":return(0,r.jsxs)("div",{children:[(0,r.jsxs)("p",{className:"mb-2 text-sm font-medium text-[#16191d]",children:[e.label,e.required&&(0,r.jsx)("span",{className:"text-[#d22d3a]",children:" *"})]}),(0,r.jsx)("div",{className:"flex flex-wrap gap-x-7 gap-y-2",children:(e.options??[]).map(a=>(0,r.jsxs)("label",{className:"flex cursor-pointer items-center gap-2 text-sm text-[#16191d]",children:[(0,r.jsx)("input",{type:"radio",name:e.name,value:a.value,checked:t===a.value,onChange:()=>{l(e.name,a.value),n?.(e.name,a.value)},className:"h-4 w-4 accent-[#0673f9]"}),a.label]},a.value))}),a&&(0,r.jsx)("p",{className:"mt-1 text-xs text-[#d22d3a]",children:a})]});case"dropdown":case"graduationYear":return(0,r.jsx)(eN,{field:e,value:t,error:a,onChange:l,onCommit:n});case"college":return(0,r.jsx)(eO,{field:e,value:t,error:a,onChange:l,onCommit:n});default:return null}}],42872)},844850,e=>{"use strict";var t=e.i(271645);e.s(["useFieldStartTracker",0,function(e,r,a){let l=(0,t.useRef)(r);l.current=r;let n=(0,t.useRef)(a);n.current=a;let i=(0,t.useRef)(new Set);return(0,t.useMemo)(()=>({started(t,r){if(i.current.has(t)||void 0!==r&&""===r.trim())return;let a=l.current.indexOf(t);-1!==a&&(i.current.add(t),n.current({form_type:e,field_name:t,step_number:String(a+1)}))},reset(){i.current.clear()}}),[e])}])},620855,197043,e=>{"use strict";var t=e.i(271645),r=e.i(862085);let a="ns-recaptcha-v3",l=null;function n(e){return window.grecaptcha?Promise.resolve():l||(l=new Promise(t=>{let r=document.getElementById(a);if(r)return void r.addEventListener("load",()=>t());let l=document.createElement("script");l.id=a,l.async=!0,l.src=`https://www.google.com/recaptcha/api.js?render=${e}`,l.addEventListener("load",()=>t()),l.addEventListener("error",()=>t()),document.body.appendChild(l)}))}e.s(["useRecaptcha",0,function(){let e=r.NEWTON_SIGNUP_CONFIG.recaptchaSiteKey;return{preload:(0,t.useCallback)(()=>{n(e)},[e]),getToken:(0,t.useCallback)(async(t="homepage")=>{await n(e);let r=window.grecaptcha;return r?new Promise(a=>{let l=!1,n=e=>{l||(l=!0,clearTimeout(i),a(e))},i=setTimeout(()=>n(""),4e3);r.ready(()=>{r.execute(e,{action:t}).then(e=>n(e)).catch(()=>n(""))})}):""},[e])}}],620855);var i=e.i(336835);let o="generic_signup_form_partial_fill_hash";function s(){try{return window.localStorage.getItem(o)??""}catch{return""}}e.s(["usePartialSignup",0,function(){let e=(0,t.useRef)(""),r=(0,t.useRef)(""),a=(0,t.useRef)(Promise.resolve());return(0,t.useEffect)(()=>{e.current=s()},[]),{save:(0,t.useCallback)((t,l={})=>{let{completed:n=!1,accessToken:d}=l,u=async()=>{let a=JSON.stringify({f:t.fields,p:t.phone});if(!n&&a===r.current||!n&&0===Object.keys(t.fields).length&&!t.phone)return{ok:!0};r.current=a,e.current||(e.current=s());let l=await (0,i.saveSignupPartial)(t,{hash:e.current,completed:n,accessToken:d});if(l.ok&&l.hash){e.current=l.hash;var u=l.hash;try{window.localStorage.setItem(o,u)}catch{}}return n&&l.ok&&function(){try{window.localStorage.removeItem(o)}catch{}}(),{ok:l.ok}},c=a.current.then(u,u);return a.current=c.catch(()=>{}),c},[])}}],197043)},437082,e=>{"use strict";let t={name:"name",email:"email",phone:"phone",otp:"otp",whatsapp:"send_whatsapp_updates",graduationYear:"graduationYear",college:"college",currentClass:"current_class",codingExperience:"coding_experience",twelfthPercentage:"twelfthPercentage"},r={fields:[{type:"text",name:t.name,label:"Full Name",placeholder:"Your Name",autoComplete:"name",required:!0},{type:"email",name:t.email,label:"Email",placeholder:"Enter Email",autoComplete:"email",required:!0},{type:"phone",name:t.phone,label:"Phone Number",placeholder:"Enter Phone Number",autoComplete:"tel",required:!0},{type:"otp",name:t.otp,label:"OTP",length:4,step:"verify",required:!0},{type:"checkbox",name:t.whatsapp,label:"Send me updates on WhatsApp"}]};e.s(["APPLY_FIELD",0,t,"DEFAULT_SIGNUP_FIELDS",0,r])},692156,e=>{"use strict";var t=e.i(843476),r=e.i(271645),a=e.i(339415),l=e.i(703109),n=e.i(549838),i=e.i(22453),o=e.i(620855),s=e.i(830249),d=e.i(197043),u=e.i(336835),c=e.i(58863),f=e.i(437082),p=e.i(42872),m=e.i(3303),h=e.i(862085);function g({courseType:e,armed:r,onArm:a}){if(!r)return(0,t.jsxs)("button",{type:"button",onClick:a,className:"flex h-10 w-full items-center justify-center gap-2 rounded border border-[#dadce0] bg-white text-sm font-medium text-[#3c4043] transition-colors hover:bg-[#f8f9fa]",children:[(0,t.jsx)(x,{}),"Sign up with Google"]});let{djangoClientId:l,djangoClientSecret:n,googleClientId:o}=h.NEWTON_SIGNUP_CONFIG,s=`${i.SIGNUP_API.registerUrl}?ns_client_id=${l}&ns_client_secret=${n}&backend=google-auth`,d=btoa(JSON.stringify({redirect_uri:`/register/${e}`}));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.default,{src:"https://accounts.google.com/gsi/client",async:!0,defer:!0}),(0,t.jsx)("div",{id:"g_id_onload","data-client_id":o,"data-context":"signup","data-ux_mode":"redirect","data-auto_prompt":"false","data-login_uri":s,"data-state":d}),(0,t.jsx)("div",{className:"g_id_signin flex h-10 w-full justify-center","data-type":"standard","data-shape":"rectangular","data-theme":"outline","data-text":"signup_with","data-size":"large","data-logo_alignment":"left"})]})}function x(){return(0,t.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[(0,t.jsx)("path",{fill:"#4285F4",d:"M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.91c1.7-1.57 2.69-3.88 2.69-6.62Z"}),(0,t.jsx)("path",{fill:"#34A853",d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.91-2.26c-.81.54-1.84.86-3.05.86-2.34 0-4.33-1.58-5.04-3.71H.96v2.33A9 9 0 0 0 9 18Z"}),(0,t.jsx)("path",{fill:"#FBBC05",d:"M3.96 10.71A5.41 5.41 0 0 1 3.68 9c0-.6.1-1.18.28-1.71V4.96H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.04l3-2.33Z"}),(0,t.jsx)("path",{fill:"#EA4335",d:"M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.96l3 2.33C4.67 5.16 6.66 3.58 9 3.58Z"})]})}var v=e.i(851361),y=e.i(688921),b=e.i(844850);let w=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,E={"--color-ds-ink":"#f6f7f9","--color-ds-muted":"#b2b9c7","--color-ds-tertiary":"#30363d","--color-ds-border":"#30363d"};function k(e){let t=(0,c.getUtmParams)();for(let[r,a]of Object.entries(e??{}))r in t||(t[r]=a);return t}function _(e){return e.name===f.APPLY_FIELD.name?"full_name":e.name}function S(){return(0,t.jsxs)(l.default,{as:"p",variant:"paragraph-md-p4",color:"var(--color-ds-muted)",className:"text-center",children:["By continuing, you agree to our"," ",(0,t.jsx)("a",{href:i.EXTERNAL_LINKS.termsAndConditions,target:"_blank",rel:"noopener noreferrer",className:"text-ds-blue underline",children:"Terms & Conditions"})," ","for sign-up"]})}function C(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"m8.5 12.4 2.5 2.5L16 9.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})}e.s(["ApplyForm",0,function({config:e,courseType:i,urlSlug:m,title:h,subTitle:x,className:j,recaptchaAction:P="homepage",hasGoogleSignup:T=!1,nextUrl:A,applyFormSuccessRedirectUrl:N,selfRedirectUrl:O,parentUrl:D,utmDefaults:I,leadFields:F,pageName:L,surface:R,theme:$="light",otpOnWhatsApp:M=!1}){let U="dark"===$,{preload:Y,getToken:z}=(0,o.useRecaptcha)(),B=(0,v.useSendAnalyticsEvent)(),W=R?{surface:R}:{},q=(e,t={})=>B({...e,eventData:(0,y.buildEventData)({courseType:i,urlSlug:m,...W,...t},L)}),K=(0,r.useMemo)(()=>{let t={};for(let r of e.fields)t[r.name]="checkbox"===r.type?"true":r.defaultValue??"";return t},[e]),[G,V]=(0,r.useState)(K),[H,Z]=(0,r.useState)({}),[J,X]=(0,r.useState)("details"),[Q,ee]=(0,r.useState)(!1),[et,er]=(0,r.useState)(!0),[ea,el]=(0,r.useState)(""),[en,ei]=(0,r.useState)(!1),[eo,es]=(0,r.useState)(""),[ed,eu]=(0,r.useState)(0),[ec,ef]=(0,r.useState)(!1),ep=(0,r.useCallback)(()=>ef(!0),[]),em=e.fields.some(e=>"needs12thYear"===e.showWhen),eh=(0,r.useMemo)(()=>e.fields.filter(e=>(e.step??"details")==="details"&&!e.showWhen).map(_),[e]),eg=(0,b.useFieldStartTracker)("signup",eh,e=>q(y.FORM_FIELD_EVENTS.FIELD_STARTED,{...e})),ex=(t,r)=>{if(V(e=>({...e,[t]:r})),"details"!==J)return;let a=e.fields.some(e=>e.name===t&&"checkbox"===e.type);eg.started(_({name:t}),a?void 0:r)};function ev(t){return e.fields.filter(e=>{let r=e.step??"details";return"details"===t?"details"===r:"verify"===t?"verify"===r&&"needs12thYear"!==e.showWhen:"twelfth"===t&&"needs12thYear"===e.showWhen})}function ey(){return e.fields.filter(e=>"needs12thYear"!==e.showWhen&&("newUser"!==e.showWhen||!Q)&&("details"===(e.step??"details")||"verify"===J))}function eb(e){let t={};for(let r of e){let e=(G[r.name]??"").trim();if("checkbox"!==r.type)if(r.name===f.APPLY_FIELD.name&&e.length<2)t[r.name]="Please enter your name";else if("email"!==r.type||w.test(e))if("phone"===r.type&&10!==e.replace(/\D/g,"").length)t[r.name]="Enter a valid 10-digit number";else if("otp"===r.type&&e.length!==(r.length??4))t[r.name]="Enter the OTP";else if("number"===r.type&&e){let a=Number(e);Number.isNaN(a)||null!=r.min&&a<r.min||null!=r.max&&a>r.max?t[r.name]="Enter a valid value":r.required&&!e&&(t[r.name]="Required")}else r.required&&!e&&(t[r.name]="Required");else t[r.name]="Enter a valid email address"}return t}(0,r.useEffect)(()=>{if(ed<=0)return;let e=setTimeout(()=>eu(e=>e-1),1e3);return()=>clearTimeout(e)},[ed]);let ew=(G[f.APPLY_FIELD.phone]??"").replace(/\D/g,""),eE=(G[f.APPLY_FIELD.whatsapp]??"")==="true",ek=(G[f.APPLY_FIELD.name]??"").trim().split(" ")[0]??"",e_=(0,s.useParentUrl)()||D||"",{save:eS}=(0,d.usePartialSignup)(),eC=(0,r.useCallback)((t,r=!1)=>{let a=function(e,t){let r={};for(let a of e.fields){if(a.name===f.APPLY_FIELD.phone)continue;let e=t[a.name]??"";"checkbox"===a.type?r[a.name]="true"===e:""!==e&&(r[a.name]=e)}return r}(e,t);return{fields:F?F(a,{completed:r}):a,phone:(t[f.APPLY_FIELD.phone]??"").replace(/\D/g,""),urlSlug:m,parentUrl:e_,utmParams:k(I)}},[e,m,e_,I,F]),ej=(0,r.useCallback)((t,r)=>{"details"!==J&&"verify"!==J||eS(eC(e.fields.some(e=>e.name===t&&e.savesBeforeChange)?G:{...G,[t]:r}))},[J,eS,eC,G,e]),eP=0===Object.keys(eb(ey())).length;async function eT(){es(""),ei(!0);try{let e=await z(P),t=await (0,u.sendOtp)({phone:ew,recaptchaToken:e,whatsapp:M});t.ok?(ee(t.existingUser),er(!!t.existingUser&&!0===t.twelfthPassingYearFilled),X("verify"),eu(30),q(y.SIGNUP_FORM_EVENTS.OTP_SENT,{existingUser:t.existingUser})):(t.throttled&&eu(30),es(t.error??"Could not send the OTP. Please try again."))}catch{es("Could not send the OTP. Please try again.")}finally{ei(!1)}}async function eA(e){e.preventDefault(),es("");let t=eb(ey());if(Z(t),Object.keys(t).length||en)return;q(y.SIGNUP_FORM_EVENTS.FORM_SUBMIT_CLICK,{existingUser:Q}),ei(!0);let r=await (0,u.registerOrLogin)({phone:ew,otp:G[f.APPLY_FIELD.otp]??"",name:G[f.APPLY_FIELD.name]??"",email:G[f.APPLY_FIELD.email]??"",whatsapp:eE,existingUser:Q,utmParams:k(I),courseType:i,urlSlug:m,graduationYear:G[f.APPLY_FIELD.graduationYear]||void 0,college:G[f.APPLY_FIELD.college]||void 0,currentClass:G[f.APPLY_FIELD.currentClass]||void 0,codingExperience:G[f.APPLY_FIELD.codingExperience]||void 0});r.ok&&r.accessToken?((0,c.setAuthCookie)("access_token_ns_student_web",r.accessToken),r.refreshToken&&(0,c.setAuthCookie)("refresh_token_ns_student_web",r.refreshToken),eS(eC(G,!0),{completed:!0,accessToken:r.accessToken}),q(y.SIGNUP_FORM_EVENTS.FORM_SUBMIT_SUCCESS,{existingUser:Q}),em&&!et?(el(r.accessToken),X("twelfth"),ei(!1)):eO()):(ei(!1),es(r.error??"Could not verify the OTP. Please try again."),q(y.SIGNUP_FORM_EVENTS.FORM_SUBMIT_FAILURE,{error:r.error??""}))}async function eN(e){e.preventDefault();let t=eb(ev("twelfth"));if(Z(t),Object.keys(t).length||en)return;ei(!0);let r=await (0,u.updateProfile)({twelfthPassingYear:G[f.APPLY_FIELD.twelfthPercentage]??"",accessToken:ea});r.ok?eO():(ei(!1),es(r.error??"Could not save your details. Please try again."))}function eO(){X("done"),A?window.open(A,"_blank","noopener,noreferrer"):O?window.setTimeout(()=>{window.location.href=(0,c.appendUtmParams)(O)},1500):window.setTimeout(()=>{window.location.href=(0,c.buildRegisterRedirect)(i,m,N)},1500)}let eD=(0,r.useCallback)(e=>{"key"in e&&"Escape"===e.key||(Y(),T&&ep())},[Y,T,ep]),eI=(0,t.jsx)("span",{className:"ds-phone-prefix text-ds-ink inline-flex w-14 shrink-0 items-center justify-center text-sm font-medium whitespace-nowrap",children:"🇮🇳 +91"}),eF=e=>e.map(e=>(0,t.jsx)(p.FormField,{field:e,value:G[e.name]??"",error:H[e.name],onChange:ex,onCommit:ej,phoneAdornment:eI,phoneEndAdornment:"phone"===e.type&&"verify"===J?(0,t.jsx)("button",{type:"button",disabled:en||ed>0,onClick:()=>void eT(),className:"bg-ds-blue rounded px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white disabled:opacity-50",children:"Resend OTP"}):void 0},e.name));return(0,t.jsxs)("div",{className:(0,n.cn)("apply-form flex flex-col",U&&"grauity-theme-dark",j),style:U?E:void 0,children:[(0,t.jsxs)("div",{className:"pb-4 text-center",children:[(0,t.jsx)(l.default,{as:"p",variant:"paragraph-sb-p2",color:"var(--color-ds-ink)",children:h}),x?(0,t.jsx)(l.default,{as:"p",variant:"paragraph-md-p3",color:"var(--color-ds-muted)",className:"mt-1",children:x}):null]}),("details"===J||"verify"===J)&&(0,t.jsxs)("form",{className:"flex flex-col gap-4 pt-5",onSubmit:"details"===J?function(e){e.preventDefault();let t=eb(ey());Z(t),Object.keys(t).length||en||(q(y.SIGNUP_FORM_EVENTS.SEND_OTP_CLICK,{form_type:"signup",step_number:String(eh.length+1),...W}),eT())}:eA,onPointerDownCapture:eD,onKeyDownCapture:eD,noValidate:!0,children:[T&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g,{courseType:i,armed:ec,onArm:ep}),(0,t.jsxs)("div",{className:"text-ds-muted flex items-center gap-3 text-xs",children:[(0,t.jsx)("span",{className:"bg-ds-tertiary h-px flex-1"}),"OR",(0,t.jsx)("span",{className:"bg-ds-tertiary h-px flex-1"})]})]}),eF(ey()),"verify"===J?(0,t.jsxs)(l.default,{as:"p",variant:"paragraph-sb-p3",color:"var(--color-ds-ink)",children:["Didn't receive the code?"," ",(0,t.jsx)("button",{type:"button",disabled:en||ed>0,onClick:()=>void eT(),className:"text-ds-blue font-semibold enabled:hover:underline disabled:cursor-not-allowed",children:ed>0?`Resend OTP in ${ed} seconds`:"Resend OTP"})]}):null,eo?(0,t.jsx)(l.default,{as:"p",variant:"paragraph-md-p3",color:"#d22d3a",children:eo}):null,(0,t.jsx)(a.default,{type:"submit",variant:"primary",size:"large",fullWidth:!0,loading:en,disabled:!eP,children:"details"===J?"Send OTP":Q?"Login":"Verify & Sign Up"}),(0,t.jsx)(S,{})]}),"twelfth"===J&&(0,t.jsxs)("form",{className:"flex flex-col gap-5 pt-5",onSubmit:eN,children:[eF(ev("twelfth")),eo?(0,t.jsx)(l.default,{as:"p",variant:"paragraph-md-p3",color:"#d22d3a",children:eo}):null,(0,t.jsx)(a.default,{type:"submit",variant:"primary",size:"large",fullWidth:!0,loading:en,children:"Continue"})]}),"done"===J&&(0,t.jsxs)("div",{className:"flex flex-col items-center gap-3 py-10 text-center",children:[(0,t.jsx)(C,{className:"text-ds-green size-12"}),(0,t.jsx)(l.default,{as:"p",variant:"paragraph-sb-p1",color:"var(--color-ds-ink)",children:"You're all set!"}),A?(0,t.jsxs)(l.default,{as:"p",variant:"paragraph-md-p3",color:"var(--color-ds-muted)",className:"max-w-xs",children:["Your download has opened in a new tab."," ",(0,t.jsx)("a",{href:A,target:"_blank",rel:"noopener noreferrer",className:"text-ds-blue font-semibold underline",children:"Didn't open? Download here"})]}):(0,t.jsxs)(l.default,{as:"p",variant:"paragraph-md-p3",color:"var(--color-ds-muted)",className:"max-w-xs",children:["Thanks",ek?`, ${ek}`:"","!"," ",O?"Taking you to the next step…":"Redirecting you to complete your enrolment…"]})]})]})}],692156)}]);