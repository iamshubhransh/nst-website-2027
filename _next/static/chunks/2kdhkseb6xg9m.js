(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,866422,e=>{"use strict";var t=e.i(271645),l=e.i(58863);function r(e){let t=e.getAttribute("href");if(!(!t||t.startsWith("#")||t.startsWith("mailto:")||t.startsWith("tel:")))try{let r=new URL(t,window.location.href);if("https:"!==r.protocol&&"http:"!==r.protocol||!(r.hostname===window.location.hostname||"newtonschool.co"===r.hostname||r.hostname.endsWith(".newtonschool.co")))return;let a=(0,l.appendUtmParams)(r.toString());a!==e.href&&(e.href=a)}catch{}}function a(e){e.querySelectorAll("a[href]").forEach(r)}e.s(["UtmPropagation",0,function(){return(0,t.useEffect)(()=>{if((0,l.persistUtmParams)(),0===Object.keys((0,l.getUtmParams)()).length)return;a(document);let e=new MutationObserver(e=>{for(let t of e){if("attributes"===t.type&&t.target instanceof HTMLAnchorElement){r(t.target);continue}t.addedNodes.forEach(e=>{e instanceof HTMLAnchorElement?r(e):e instanceof Element&&a(e)})}});e.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["href"]});let t=e=>{let t=e.target?.closest?.("a[href]");t instanceof HTMLAnchorElement&&r(t)};return document.addEventListener("click",t,!0),document.addEventListener("auxclick",t,!0),()=>{e.disconnect(),document.removeEventListener("click",t,!0),document.removeEventListener("auxclick",t,!0)}},[]),null}])},42872,e=>{"use strict";var t,l=e.i(843476),r=e.i(271645),a=e.i(844611),n=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},i=e.g&&e.g.Object===Object&&e.g,o="object"==typeof self&&self&&self.Object===Object&&self,u=i||o||Function("return this")(),s=function(){return u.Date.now()},d=/\s/,c=function(e){for(var t=e.length;t--&&d.test(e.charAt(t)););return t},f=/^\s+/,p=u.Symbol,m=Object.prototype,g=m.hasOwnProperty,v=m.toString,h=p?p.toStringTag:void 0,x=function(e){var t=g.call(e,h),l=e[h];try{e[h]=void 0;var r=!0}catch(e){}var a=v.call(e);return r&&(t?e[h]=l:delete e[h]),a},y=Object.prototype.toString,b=p?p.toStringTag:void 0,w=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":b&&b in Object(e)?x(e):y.call(e)},E=function(e){return"symbol"==typeof e||null!=e&&"object"==typeof e&&"[object Symbol]"==w(e)},k=0/0,C=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,A=/^0o[0-7]+$/i,j=parseInt,T=function(e){if("number"==typeof e)return e;if(E(e))return k;if(n(e)){var t,l="function"==typeof e.valueOf?e.valueOf():e;e=n(l)?l+"":l}if("string"!=typeof e)return 0===e?e:+e;e=(t=e)?t.slice(0,c(t)+1).replace(f,""):t;var r=S.test(e);return r||A.test(e)?j(e.slice(2),r?2:8):C.test(e)?k:+e},O=Math.max,$=Math.min,D=function(e,t,l){var r,a,i,o,u,d,c=0,f=!1,p=!1,m=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var l=r,n=a;return r=a=void 0,c=t,o=e.apply(n,l)}function v(e){var l=e-d,r=e-c;return void 0===d||l>=t||l<0||p&&r>=i}function h(){var e,l,r,a=s();if(v(a))return x(a);u=setTimeout(h,(e=a-d,l=a-c,r=t-e,p?$(r,i-l):r))}function x(e){return(u=void 0,m&&r)?g(e):(r=a=void 0,o)}function y(){var e,l=s(),n=v(l);if(r=arguments,a=this,d=l,n){if(void 0===u)return c=e=d,u=setTimeout(h,t),f?g(e):o;if(p)return clearTimeout(u),u=setTimeout(h,t),g(d)}return void 0===u&&(u=setTimeout(h,t)),o}return t=T(t)||0,n(l)&&(f=!!l.leading,i=(p="maxWait"in l)?O(T(l.maxWait)||0,t):i,m="trailing"in l?!!l.trailing:m),y.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=d=a=u=void 0},y.flush=function(){return void 0===u?o:x(s())},y},M=e.i(773892),R=e.i(364072),z=e.i(189101),I=e.i(892480),L=e.i(824511),F=e.i(997053),P={initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{y:"-8px",opacity:0},visible:{y:"8px",opacity:1},exit:{y:"-8px",opacity:0}},transition:{duration:.2}},B=(0,F.styled)(L.m.div)`
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
`,N=F.styled.div`
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
`,_=F.styled.div`
    color: var(--text-emphasis-primary-default, #16191d);
    font-size: 18px;
    font-style: normal;
    font-weight: 550;
    line-height: 28px;
    letter-spacing: 0.06px;
`,U=F.styled.div`
    color: var(--text-emphasis-secondary-default, #5b6271);
    font-size: 12px;
    font-style: normal;
    font-weight: 450;
    line-height: 14px;
    letter-spacing: 0.4px;
`,W=F.styled.div`
    display: flex;
    padding: 4px 12px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    flex-grow: 1;
    overflow: auto;
    position: relative;
    gap: 4px;
`,K=F.styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow-y: auto;
    width: 100%;
`,q=F.styled.div`
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
`,H=F.styled.div`
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
`,V=F.styled.div`
    height: 1px;
    min-height: 1px;
    margin: 8px 4px;
    align-self: stretch;
    border-radius: 8px;
    background: var(--border-subtle-primary-default, #e1e5ea);
`,Y=F.styled.div`
    display: flex;
    padding: 8px 16px;
    align-items: center;
    justify-content: center;
`,G=F.styled.button`
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

    ${({disabled:e})=>e&&F.css`
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
`,J=F.styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
    overflow: hidden;
`,Q=F.styled.div`
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
`,X=F.styled.div`
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

    ${({$disabled:e})=>e&&F.css`
            color: var(--text-emphasis-primary-disabled, #8c95a6) !important;
        `}
`,Z=F.styled.div`
    padding: 14px 16px 6px 16px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-top: 1px solid var(--border-subtle-primary-default, #e1e5ea);
`,ee=({multiple:e,showActionButtons:t,showClearAllButton:l,clearAllButtonText:a,applyButtonText:n,handleClearAll:i,handleApply:o})=>t?r.default.createElement(Z,null,r.default.createElement(z.Button_default,{size:"small",variant:"primary",color:"brand",onClick:()=>o()},n),l&&e&&r.default.createElement(z.Button_default,{size:"small",variant:"tertiary",color:"neutral",onClick:i},a)):null,et=({showHeader:e,overline:t,title:l,subtext:a,customHeader:n})=>n?r.default.createElement(r.default.Fragment,null,n):e&&(l||t||a)?r.default.createElement(N,null,t&&r.default.createElement(U,null,t),l&&r.default.createElement(_,null,l),a&&r.default.createElement(U,null,a)):null,el=e=>{let{label:t,value:l,description:a,leftIcon:n,rightIcon:i,disabled:o,multiple:u,selected:s,onClick:d,optionRef:c,onKeyDown:f}=e,p=(0,r.useId)();return r.default.createElement(G,{role:"option",ref:c,"aria-labelledby":`option-label-${p}`,"aria-selected":u?void 0:s,"aria-checked":u?s:void 0,disabled:o,onClick:e=>{e.preventDefault(),o||d(l)},onKeyDown:e=>{o||f(e)}},n&&r.default.createElement(I.Icon_default,{name:n,color:"currentColor",size:"20"}),r.default.createElement(J,null,r.default.createElement(Q,{id:`option-label-${p}`},t),r.default.createElement(X,{$disabled:o,id:`option-description-${p}`},a)),i&&r.default.createElement(I.Icon_default,{name:i,color:"currentColor",size:"20"}),!u&&s&&r.default.createElement(I.Icon_default,{name:"check",color:"var(--text-emphasis-brand-default, #0673F9)",size:"20"}),u&&r.default.createElement(I.Icon_default,{name:s?"check-square-filled":"square",color:s?"var(--text-emphasis-brand-default, #0673F9)":"currentColor",size:"20"}))},er=e=>{let{title:t,itemRef:l,onKeyDown:a}=e;return t?r.default.createElement(H,{ref:l,tabIndex:0,"aria-label":t,onKeyDown:a},t):null},ea=({searchable:e,searchPlaceholder:t,searchIcon:l,onSearchInputChange:n,onKeyDown:i,searchRef:o})=>{let[u,s]=(0,r.useState)("");return((0,r.useEffect)(()=>{n(u)},[u]),e)?r.default.createElement(q,{role:"searchbox",onKeyDown:e=>{["ArrowUp","ArrowDown","Enter","Escape","Tab"].includes(e.key)&&i(e)}},r.default.createElement(a.TextField_default,{ref:o,name:"dropdown-search-box",value:u,onChange:e=>s(e.target.value),placeholder:t,adornments:{start:r.default.createElement(I.Icon_default,{name:l})}})):null},en=((t=en||{}).SUB_HEADER="subheader",t.DIVIDER="divider",t.OPTION="option",t),ei=(e,t)=>t?e?t:[t]:[];function eo(e){return"option"===e.type?!e.disabled:"subheader"===e.type}var eu=(0,r.forwardRef)((e,t)=>{let{showHeader:l=!0,title:a="Select",overline:n="",subtext:i="",customHeader:o=null,searchable:u=!1,searchPlaceholder:s="Search",searchIcon:d="search",onSearchInputChange:c=null,multiple:f=!1,items:p=[],showActionButtons:m=!1,showClearAllButton:g=!0,clearAllButtonText:v="Clear All",applyButtonText:h="Apply",onClearAll:x=()=>{},onChange:y=()=>{},onScrollToBottom:b=()=>{},className:w=null,styles:E={},value:k=null,width:C="300px",maxHeight:S="500px",applyOnOptionSelectInMultipleMode:A=!1,id:j,emptyStateMessage:T="No options available"}=e,O=ei(f,k),[$,z]=(0,r.useState)([]),[I,L]=(0,r.useState)(O),[F,N]=(0,r.useState)(null),_=(0,r.useRef)(null),q=t||_,H=(0,r.useRef)(null),G=(0,r.useRef)([]),J=(0,r.useRef)([]),Q=(e=null)=>{let t=[];t=Array.isArray(e)?e:I,f?y(t):t.length>0&&y(t[0])},X=e=>{if(f){let t=-1!==I.findIndex(t=>t.value===e.value)?I.filter(t=>t.value!==e.value):[...I,e];L(t),!m&&A&&Q(t)}else L([e]),m||Q($.filter(t=>t.value===e.value))},Z=(0,r.useCallback)(D(e=>(e=>{if(u)if("function"==typeof c)c(e);else{let t=$.filter(t=>{var l,r;return(null==(l=t.label)?void 0:l.toLowerCase().includes(e.toLowerCase()))||(null==(r=t.description)?void 0:r.toLowerCase().includes(e.toLowerCase()))});t.length>0||e?N(t):N(null)}})(e),500),[$]),en=(e,t=[],l)=>{var r,a,n;e<=-1||e>=t.length?u?null==(r=H.current)||r.focus():null==(a=G.current[0])||a.focus():null==(n=l.current[e])||n.focus()},eu=(e,t,l=[],r)=>{("Tab"!==e.key||e.shiftKey)&&"ArrowDown"!==e.key?"Tab"===e.key&&e.shiftKey||"ArrowUp"===e.key?(e.preventDefault(),(()=>{let e=t-1;for(;e>=0&&!eo(l[e]);)e-=1;en(e,l,r)})()):"Enter"===e.key||" "===e.key?(e.preventDefault(),(()=>{let e=l[t];"option"!==e.type||e.disabled||X(e)})()):"Escape"===e.key&&(e.preventDefault(),Q()):(e.preventDefault(),(()=>{let e=t+1;for(;e<l.length&&!eo(l[e]);)e+=1;en(e,l,r)})())};return(0,r.useEffect)(()=>{z(p.filter(e=>"option"===e.type))},[p]),(0,r.useEffect)(()=>{p.length>0&&function(e,t,l=100){let r=e.findIndex(e=>!0===e.scrollToOnOpen);-1!==r&&setTimeout(()=>{let e=t.current[r];e&&e.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})},l)}(p,G)},[p]),(0,M.useClickAway_default)(q,()=>{f&&!m&&Q()}),r.default.createElement(R.motion_default,null,r.default.createElement(B,{className:w,style:E,ref:q,$width:C,$maxHeight:S,role:"menu",id:j,...P},r.default.createElement(et,{showHeader:l,overline:n,title:a,subtext:i,customHeader:o}),r.default.createElement(W,null,r.default.createElement(ea,{searchRef:H,searchable:u,searchPlaceholder:s,searchIcon:d,onSearchInputChange:Z,onKeyDown:e=>eu(e,-1,F||$,F?J:G)}),r.default.createElement(K,{onScroll:e=>{let{scrollTop:t,scrollHeight:l,clientHeight:r}=e.currentTarget;1>Math.abs(l-t-r)&&b()}},Array.isArray(F)&&F.map((e,t)=>r.default.createElement(el,{key:e.value,optionRef:e=>{J.current[t]=e},multiple:f,selected:I.map(e=>e.value).includes(e.value),onClick:e=>X($.find(t=>t.value===e)),onKeyDown:e=>eu(e,t,F,J),...e})),!Array.isArray(F)&&p.length>0&&p.map((e,t)=>"subheader"===e.type?r.default.createElement(er,{key:`${e.type}-${e.title}`,itemRef:e=>{G.current[t]=e},onKeyDown:e=>eu(e,t,p,G),...e}):"divider"===e.type?r.default.createElement(V,{key:`${e.type}`}):"option"===e.type?r.default.createElement(el,{key:`${e.type}-${e.value}`,optionRef:e=>{G.current[t]=e},multiple:f,selected:I.map(e=>e.value).includes(e.value),onClick:e=>X($.find(t=>t.value===e)),onKeyDown:e=>eu(e,t,p,G),...e}):null),!Array.isArray(F)&&0===p.length&&r.default.createElement(Y,null,r.default.createElement(U,null,T)))),r.default.createElement(ee,{multiple:f,showActionButtons:m,showClearAllButton:g,clearAllButtonText:v,applyButtonText:h,handleClearAll:()=>{L([]),x()},handleApply:Q})))}),es=e.i(866700),ed=e.i(228093),ec=e.i(378191),ef=e.i(893347),ep=e.i(88653),em=F.styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    font-family: var(--font-family);
`,eg=(0,F.styled)(z.Button_default)`
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
`,ev=F.styled.div`
    height: fit-content;
    width: fit-content;
`,eh=(0,r.forwardRef)((e,t)=>{var l;let{name:a,label:n,placeholder:i="Select",isRequired:o=!1,isDisabled:u=!1,helpMessage:s,errorMessage:d,color:c="brand",showSelectedValueOnTrigger:f=!0,onTriggerClick:p=()=>{},selectedValues:m=[],multiple:g=!1,trigger:v}=e;return v?r.default.createElement(ev,{ref:t,onClick:()=>{u||p()}},v):r.default.createElement(em,null,n&&r.default.createElement(es.Label,{name:a,isRequired:o,isDisabled:u,color:"brand"===c?"primary":c},n),r.default.createElement(eg,{ref:t,id:a,name:a,variant:"secondary",color:"brand"===c?"neutral":c,fullWidth:!0,onClick:()=>p(),showAnimationOnClick:!1,disabled:u},r.default.createElement("span",null,f?g&&Array.isArray(m)?(null==m?void 0:m.length)?`${m.length} selected`:i:!g&&((null==m?void 0:m.label)||(null==(l=null==m?void 0:m[0])?void 0:l.label))||i:i),r.default.createElement(I.Icon_default,{name:"chevron-down",color:"currentColor"})),s&&r.default.createElement(ed.HelpMessage,null,s),d&&r.default.createElement(ec.ErrorMessage,null,d))}),ex=e=>{var t,l,a;let n,i,{menuProps:o,multiple:u=!1,items:s=[],value:d=null,onChange:c=()=>{},onClose:f=()=>{},showActionButtons:p=!1}=e;o?{width:n,fullWidth:i}=o:(n="300px",i=!0);let[m,g]=(0,r.useState)(!1),[v,h]=(0,r.useState)(500),[x,y]=(0,r.useState)(ei(u,d)),b=(0,r.useRef)(null),w=(0,r.useRef)(null),E=e=>{var t,l;g(!1),Array.isArray(e)&&!u?f(null!=(t=e[0])?t:null):f(e),null==(l=null==b?void 0:b.current)||l.focus()};return(0,r.useEffect)(()=>{y(ei(u,d))},[d,s,u]),(0,r.useEffect)(()=>{m&&w.current&&h(w.current.clientHeight)},[m]),r.default.createElement(ep.AnimatePresence,null,r.default.createElement(eh,{...e,key:"dropdown-trigger",ref:b,onTriggerClick:()=>{g(!m)},selectedValues:x,multiple:u}),m&&r.default.createElement(ef.Overlay_default,{key:"dropdown-menu-overlay",position:{top:Math.min(null==(l=b.current)?void 0:l.getBoundingClientRect().bottom,window.innerHeight-v-20),left:null==(a=b.current)?void 0:a.getBoundingClientRect().left},shouldFocusOnFirstElement:!0,shouldDisableScroll:m,onOverlayClick:()=>{E(x)}},r.default.createElement(eu,{...e,width:i?`${null==(t=b.current)?void 0:t.getBoundingClientRect().width}px`:n,ref:w,onChange:e=>{y(e),c(e),(!u||p)&&E(e)}})))},ey=e.i(837339),eb=e=>{let{children:t,iconSize:l="20",style:a}=e;return t?r.default.createElement(ey.StyledSuccessMessage,null,r.default.createElement(I.Icon_default,{name:"exclamation-circle",color:"currentColor",size:l}),t&&r.default.createElement(ey.StyledSuccessMessageText,{style:a},t)):null},ew=e.i(272225),eE=F.styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,ek=F.styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    align-self: stretch;
`,eC=F.styled.input`
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
`,eS=(e,t)=>{var l,r,a;return e?null==(a=null==(l=e.split)?void 0:(r=l.call(e,"")).slice)?void 0:a.call(r,0,t):Array(t).fill("")},eA=e=>{let{value:t="",label:l,name:a,length:n=4,onChange:i=()=>{},onBlur:o=()=>{},style:u,isOtpCorrect:s=!1,isOtpWrong:d=!1,isDisabled:c=!1,errorMessage:f="Wrong OTP. Please try again",successMessage:p="OTP is correct",color:m="brand",className:g}=e,v=(0,r.useRef)(Array(n).fill(null)),[h,x]=(0,r.useState)(eS(t,n)),y=e=>{x(e),i({target:{name:a,value:e.join("")}})};return(0,r.useEffect)(()=>{t!==h.join("")&&x(eS(t,n))},[t,n]),r.default.createElement(eE,{className:g},l&&r.default.createElement(es.Label,{name:a,isRequired:!0,color:"brand"===m?"primary":m},l),r.default.createElement(ek,{onBlur:e=>{e.relatedTarget&&e.currentTarget.contains(e.relatedTarget)||o({target:{name:a,value:h.join("")}})}},Array.from({length:n}).map((e,t)=>r.default.createElement(eC,{key:`otp-input-field-${a}-${t+1}`,ref:e=>{v.current[t]=e},as:"input",style:u,placeholder:"-",value:h[t]||"",onInput:e=>((e,t)=>{var l;let r=e.target.value;if(r.length>1||!/^\d*$/.test(r))return;let a=[...h];a[t]=r,y(a),t<n-1&&""!==r&&(null==(l=v.current[t+1])||l.focus())})(e,t),onKeyDown:e=>((e,t)=>{var l,r,a;switch(e.key){case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"ArrowLeft":e.preventDefault(),t>0&&(null==(l=v.current[t-1])||l.focus());break;case"ArrowRight":e.preventDefault(),t<n-1&&(null==(r=v.current[t+1])||r.focus());break;case"Backspace":!h[t]&&t>0&&(null==(a=v.current[t-1])||a.focus())}})(e,t),maxLength:1,onPaste:e=>{var t;let l,r,a;return e.preventDefault(),l=e.clipboardData.getData("text").replace(/[^0-9]/g,"").split(""),r=[...h],void(-1!==(a=v.current.findIndex(e=>e===document.activeElement))&&(l.forEach((e,t)=>{let l=a+t;l<n&&(r[l]=e)}),null==(t=v.current[Math.min(a+l.length,n-1)])||t.focus()),y(r))},onFocus:e=>e.target.select(),$isOtpCorrect:s,$isOtpWrong:d,disabled:c,$color:m,inputMode:"numeric"}))),d&&r.default.createElement(ec.ErrorMessage,{iconSize:"16"},f),s&&r.default.createElement(eb,{iconSize:"16"},p))},ej=e.i(501147),eT=e.i(336835),eO=e.i(916687);let e$=e=>({type:en.OPTION,label:e.label,value:e.value,...e.scrollToOnOpen?{scrollToOnOpen:!0}:{}});function eD({field:e,value:t,error:a,onChange:n,onCommit:i}){let o=(0,r.useMemo)(()=>{if("graduationYear"===e.type){let e=new Date().getFullYear();return Array.from({length:11},(t,l)=>String(e+4-l)).map(e=>({label:e,value:e}))}return e.options??[]},[e.type,e.options]),u=(0,r.useMemo)(()=>o.map(e$),[o]),s=o.find(e=>e.value===t);return(0,l.jsx)(ex,{name:e.name,label:e.label,placeholder:e.placeholder,multiple:!1,items:u,value:s?e$(s):void 0,onChange:t=>{let l=Array.isArray(t)?t[0]:t,r=l?String(l.value):"";n(e.name,r),i?.(e.name,r)},errorMessage:a,...e.dropdownProps})}function eM({field:e,value:t,error:a,onChange:n,onCommit:i}){let[o,u]=(0,r.useState)([]),[s,d]=(0,r.useState)(""),c=(0,r.useRef)(null);(0,r.useEffect)(()=>()=>{c.current&&clearTimeout(c.current)},[]);let f=o.map(e$),p=t?{label:s||t,value:t}:void 0;return(0,l.jsx)(ex,{name:e.name,label:e.label,placeholder:e.placeholder??"Search your college",multiple:!1,searchable:!0,onSearchInputChange:e=>{c.current&&clearTimeout(c.current),e.trim().length<2||(c.current=setTimeout(async()=>{u((await (0,eT.fetchCollegeList)(e)).map(e=>({label:e.name,value:String(e.id)})))},300))},items:f,value:p?e$(p):void 0,onChange:t=>{let l=Array.isArray(t)?t[0]:t,r=l?String(l.value):"";d(l?String(l.label):""),n(e.name,r),i?.(e.name,r)},errorMessage:a})}e.s(["FormField",0,function({field:e,value:t,error:r,onChange:a,onCommit:n,phoneAdornment:i,phoneEndAdornment:o}){let u=()=>n?.(e.name,t);switch(e.type){case"text":case"email":case"number":return(0,l.jsx)(ej.NSTextField,{name:e.name,label:e.label,isRequired:e.required,isDisabled:e.disabled,type:"number"===e.type?"text":e.type,inputMode:"number"===e.type?"decimal":void 0,autoComplete:e.autoComplete,placeholder:e.placeholder,value:t,onChange:t=>a(e.name,t.target.value),onBlur:u,errorMessage:r,helpMessage:e.helpMessage});case"phone":return(0,l.jsx)(ej.NSTextField,{name:e.name,label:e.label,isRequired:e.required,isDisabled:e.disabled,type:"tel",inputMode:"numeric",autoComplete:e.autoComplete??"tel",placeholder:e.placeholder,value:t,onChange:t=>a(e.name,(0,eO.normalizeIndianPhone)(t.target.value)),onBlur:u,adornments:i||o?{start:i,end:o}:void 0,errorMessage:r});case"otp":return(0,l.jsx)(eA,{name:e.name,length:e.length??4,value:t,onChange:t=>a(e.name,t.target.value),isOtpWrong:!!r,style:{flexGrow:1,flexShrink:1,flexBasis:"0px",minWidth:0,width:"auto",boxSizing:"border-box"}});case"checkbox":return(0,l.jsxs)("label",{className:"text-ds-muted flex items-center gap-2.5 text-sm",children:[(0,l.jsx)("input",{type:"checkbox",name:e.name,checked:"true"===t,onChange:t=>a(e.name,t.target.checked?"true":""),className:"border-ds-border accent-ds-blue size-4 rounded"}),e.label]});case"radio":return(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{className:"mb-2 text-sm font-medium text-[#16191d]",children:[e.label,e.required&&(0,l.jsx)("span",{className:"text-[#d22d3a]",children:" *"})]}),(0,l.jsx)("div",{className:"flex flex-wrap gap-x-7 gap-y-2",children:(e.options??[]).map(r=>(0,l.jsxs)("label",{className:"flex cursor-pointer items-center gap-2 text-sm text-[#16191d]",children:[(0,l.jsx)("input",{type:"radio",name:e.name,value:r.value,checked:t===r.value,onChange:()=>{a(e.name,r.value),n?.(e.name,r.value)},className:"h-4 w-4 accent-[#0673f9]"}),r.label]},r.value))}),r&&(0,l.jsx)("p",{className:"mt-1 text-xs text-[#d22d3a]",children:r})]});case"dropdown":case"graduationYear":return(0,l.jsx)(eD,{field:e,value:t,error:r,onChange:a,onCommit:n});case"college":return(0,l.jsx)(eM,{field:e,value:t,error:r,onChange:a,onCommit:n});default:return null}}],42872)}]);