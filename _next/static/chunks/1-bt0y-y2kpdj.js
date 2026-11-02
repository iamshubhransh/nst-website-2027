(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,808341,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={cancelIdleCallback:function(){return s},requestIdleCallback:function(){return n}};for(var i in r)Object.defineProperty(a,i,{enumerable:!0,get:r[i]});let n="u">typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},s="u">typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},519083,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={ESCAPE_REGEX:function(){return s},htmlEscapeAttributeString:function(){return d},htmlEscapeJsonString:function(){return p}};for(var i in r)Object.defineProperty(a,i,{enumerable:!0,get:r[i]});let n={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},s=/[&><\u2028\u2029]/g,l={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"},o=/[&"'<>]/g;function p(e){return e.replace(s,e=>n[e])}function d(e){return e.replace(o,e=>l[e])}},479520,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={default:function(){return _},handleClientScriptLoad:function(){return v},initScriptLoader:function(){return m}};for(var i in r)Object.defineProperty(a,i,{enumerable:!0,get:r[i]});let n=e.r(555682),s=e.r(190809),l=e.r(843476),o=n._(e.r(174080)),p=s._(e.r(271645)),d=e.r(742732),f=e.r(922737),c=e.r(808341),g=e.r(519083),u=new Map,h=new Set,x=e=>{let{src:t,id:a,onLoad:r=()=>{},onReady:i=null,dangerouslySetInnerHTML:n,children:s="",strategy:l="afterInteractive",onError:p,stylesheets:d}=e,c=a||t;if(c&&h.has(c))return;if(u.has(t)){h.add(c),u.get(t).then(r,p);return}let g=()=>{i&&i(),h.add(c)},x=document.createElement("script"),v=new Promise((e,t)=>{x.addEventListener("load",function(t){e(),r&&r.call(this,t),g()}),x.addEventListener("error",function(e){t(e)})}).catch(function(e){p&&p(e)});n?(x.innerHTML=n.__html||"",g()):s?(x.textContent="string"==typeof s?s:Array.isArray(s)?s.join(""):"",g()):t&&(x.src=t,u.set(t,v)),(0,f.setAttributesFromProps)(x,e),"worker"===l&&x.setAttribute("type","text/partytown"),x.setAttribute("data-nscript",l),d&&(e=>{if(o.default.preinit)return e.forEach(e=>{o.default.preinit(e,{as:"style"})});if("u">typeof window){let t=document.head;e.forEach(e=>{let a=document.createElement("link");a.type="text/css",a.rel="stylesheet",a.href=e,t.appendChild(a)})}})(d),document.body.appendChild(x)};function v(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>x(e))}):x(e)}function m(e){e.forEach(v),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");h.add(t)})}function b(e){let{id:t,src:a="",onLoad:r=()=>{},onReady:i=null,strategy:n="afterInteractive",onError:s,stylesheets:f,...u}=e,{updateScripts:v,scripts:m,getIsSsr:b,appDir:_,nonce:A}=(0,p.useContext)(d.HeadManagerContext);A=u.nonce||A;let y=(0,p.useRef)(!1);(0,p.useEffect)(()=>{let e=t||a;y.current||(i&&e&&h.has(e)&&i(),y.current=!0)},[i,t,a]);let w=(0,p.useRef)(!1);if((0,p.useEffect)(()=>{if(!w.current){if("afterInteractive"===n)x(e);else"lazyOnload"===n&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>x(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>x(e))}));w.current=!0}},[e,n]),("beforeInteractive"===n||"worker"===n)&&(v?(m[n]=(m[n]||[]).concat([{id:t,src:a,onLoad:r,onReady:i,onError:s,...u,nonce:A}]),v(m)):b&&b()?h.add(t||a):b&&!b()&&x({...e,nonce:A})),_){if(f&&f.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===n)if(!a)return u.dangerouslySetInnerHTML&&(u.children=u.dangerouslySetInnerHTML.__html,delete u.dangerouslySetInnerHTML),(0,l.jsx)("script",{nonce:A,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${(0,g.htmlEscapeJsonString)(JSON.stringify([0,{...u,id:t}]))})`}});else return o.default.preload(a,u.integrity?{as:"script",integrity:u.integrity,nonce:A,crossOrigin:u.crossOrigin}:{as:"script",nonce:A,crossOrigin:u.crossOrigin}),(0,l.jsx)("script",{nonce:A,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${(0,g.htmlEscapeJsonString)(JSON.stringify([a,{...u,id:t}]))})`}});"afterInteractive"===n&&a&&o.default.preload(a,u.integrity?{as:"script",integrity:u.integrity,nonce:A,crossOrigin:u.crossOrigin}:{as:"script",nonce:A,crossOrigin:u.crossOrigin})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let _=b;("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},3303,(e,t,a)=>{t.exports=e.r(479520)},343794,(e,t,a)=>{!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)a.call(e,n)&&e[n]&&(t=i(t,n));return t}(n)))}return e}function i(e,t){return t?e?e+" "+t:e+t:e}if(t.exports)r.default=r,t.exports=r;else if("function"==typeof define&&"object"==typeof define.amd&&define.amd)void 0!==r&&e.v(r);else window.classNames=r}()},892480,e=>{"use strict";var t=(e,t)=>e&&!0!==e&&`${e}-${t}`,a=e.i(343794),r=e.i(271645),i=e.i(997053),n=i.keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`,s=i.styled.i`
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
`;e.s(["Icon_default",0,function({ariaHidden:e="true",ariaLabel:i,as:n="i",bordered:l=!1,circular:o=!1,color:p="grey",className:d,disabled:f=!1,fitted:c=!1,flipped:g,inverted:u=!1,link:h=!1,loading:x=!1,name:v,rotated:m,size:b="24",style:_,...A}){let y,w=(y={},null==i?y["aria-hidden"]="true":y["aria-label"]=i,null!=e&&(y["aria-hidden"]=e),y),P=(0,a.default)("grauity-icon",`grauity-icon-${v}`,p&&p,l&&"bordered",o&&"circular",f&&"disabled",c&&"fitted",u&&"inverted",h&&"link",x&&"loading",t(g,"flipped"),t(m,"rotated"),d);return r.createElement(s,{as:n,name:v,$size:b,onClick:e=>{var t;f?e.preventDefault():null==(t=A.onClick)||t.call(A,e,A)},$color:p,...w,className:P,style:_,"data-testid":"testid-icon"})}],892480)},189101,e=>{"use strict";var t,a,r,i=e.i(892480),n=e.i(343794),s=e.i(271645),l=e.i(997053),o=((t=o||{}).PRIMARY="primary",t.SECONDARY="secondary",t.TERTIARY="tertiary",t.TEXT="text",t),p=((a=p||{}).EXTRA_SMALL="extra-small",a.SMALL="small",a.MEDIUM="medium",a.LARGE="large",a.EXTRA_LARGE="extra-large",a),d=((r=d||{}).LEFT="left",r.RIGHT="right",r),f={"extra-small":{padding:"var(--spacing-2px, 2px) var(--spacing-4px, 4px)",height:"var(--spacing-24px, 24px)",minHeight:"var(--spacing-24px, 24px)",gap:"var(--spacing-2px, 2px)","--alignment-padding":"var(--spacing-2px, 2px)"},small:{padding:"var(--spacing-4px, 4px) var(--spacing-8px, 8px)",height:"var(--spacing-32px, 32px)",minHeight:"var(--spacing-32px, 32px)",gap:"var(--spacing-4px, 4px)","--alignment-padding":"var(--spacing-4px, 4px)"},medium:{padding:"var(--spacing-8px, 8px) var(--spacing-12px, 12px)",height:"var(--spacing-40px, 40px)",minHeight:"var(--spacing-40px, 40px)"},large:{padding:"var(--spacing-12px, 12px) var(--spacing-16px, 16px)",height:"var(--spacing-48px, 48px)",minHeight:"var(--spacing-48px, 48px)"},"extra-large":{padding:"var(--spacing-16px, 16px) var(--spacing-20px, 20px)",height:"var(--spacing-56px, 56px)",minHeight:"var(--spacing-56px, 56px)"}},c={"extra-small":{height:"var(--spacing-16px, 16px)",minHeight:"var(--spacing-16px, 16px)",gap:"var(--spacing-2px, 2px)",padding:"var(--spacing-0px, 0px)",width:"var(--spacing-16px, 16px)",minWidth:"var(--spacing-16px, 16px)",borderRadius:"var(--corner-radius-4px, 4px)"},small:{height:"var(--spacing-32px, 32px)",minHeight:"var(--spacing-32px, 32px)",gap:"var(--spacing-4px, 4px)",padding:"var(--spacing-4px, 4px)",width:"var(--spacing-32px, 32px)",minWidth:"var(--spacing-32px, 32px)"},medium:{height:"var(--spacing-40px, 40px)",minHeight:"var(--spacing-40px, 40px)",padding:"var(--spacing-8px, 8px)",width:"var(--spacing-40px, 40px)",minWidth:"var(--spacing-40px, 40px)"},large:{height:"var(--spacing-48px, 48px)",minHeight:"var(--spacing-48px, 48px)",padding:"var(--spacing-12px, 12px)",width:"var(--spacing-48px, 48px)",minWidth:"var(--spacing-48px, 48px)"},"extra-large":{height:"var(--spacing-56px, 56px)",minHeight:"var(--spacing-56px, 56px)",padding:"var(--spacing-16px, 16px)",width:"var(--spacing-56px, 56px)",minWidth:"var(--spacing-56px, 56px)"}},g={"extra-small":"16",small:"24",medium:"24",large:"32","extra-large":"40"},u={"extra-small":{"--font-size":"var(--font-size-14px, 14px)","--line-height":"var(--font-size-20px, 20px)"},small:{"--font-size":"var(--font-size-14px, 14px)","--line-height":"var(--font-size-20px, 20px)"},medium:{"--font-size":"var(--font-size-14px, 14px)","--line-height":"var(--font-size-20px, 20px)"},large:{"--font-size":"var(--font-size-16px, 16px)","--line-height":"var(--font-size-24px, 24px)"},"extra-large":{"--font-size":"var(--font-size-16px, 16px)","--line-height":"var(--font-size-24px, 24px)"}},h=l.styled.button`
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

    ${({$isIconButton:e})=>!e&&l.css`
            --line-height: var(--font-size-14px, 14px);
            --font-size: var(--font-size-14px, 14px);
            --alignment-padding: var(--spacing-8px, 8px);
        `}

    ${({$variant:e,$color:t})=>e&&(({variant:e="primary",color:t="brand"})=>{switch(e){case"primary":{let e="neutral"===t?"invert-primary":t,a="neutral"===t?"subtle":"emphasis";return l.css`
                background: var(--bg-${a}-${e}-default);
                color: var(--text-emphasis-${"neutral"===t?"invert-primary":"white"}-default);
                border: none;
                outline: 0px solid transparent;
                &:hover:not([disabled]) {
                    background: var(
                        --bg-${a}-${e}-hover
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
                        --bg-${a}-${e}-disabled
                    );
                    color: var(--text-emphasis-white-disabled, #f6f7f9);
                }
            `}case"secondary":{let e="neutral"===t?"primary":t,a="neutral"===t?"var(--bg-subtle-primary-hover, #f6f7f9)":`var(--bg-subtle-${t}-default)`;return l.css`
                color: var(--text-emphasis-${e}-default);
                border: 1.5px solid var(--border-subtle-${e}-default);
                outline: 0px solid transparent;
                background: var(--bg-subtle-primary-default, #ffffff);
                &:hover:not([disabled]) {
                    background: ${a};
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
            `}case"tertiary":{let e="neutral"===t?"primary":t,a="neutral"===t?"var(--bg-subtle-primary-hover, #f6f7f9)":`var(--bg-subtle-${t}-default)`;return l.css`
                color: var(--text-emphasis-${e}-default);
                border: none;
                outline: 0px solid transparent;
                background: transparent;
                &:hover:not([disabled]) {
                    background: ${a};
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
            `}case"text":{let e="neutral"===t?"primary":t;return l.css`
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
            `}default:return l.css``}})({variant:e,color:t})}

    ${({$showAnimationOnClick:e})=>e&&l.css`
            &:active:not([disabled]) {
                transform: scale(0.95);
            }
        `}

    &:disabled {
        cursor: not-allowed;
    }

    ${({$size:e,$isIconButton:t})=>t?l.css`
            ${c[e]}
        `:l.css`
                ${f[e]}
            `}

    ${({$variant:e,$size:t})=>"text"===e&&l.css`
            padding: 0;
            height: unset;
            width: unset;
            min-height: unset;
            min-width: unset;
            border-radius: var(--corner-radius-4px, 4px);

            ${u[t]}
        `}

    ${({$fullWidth:e})=>e&&l.css`
            width: 100%;
        `}

    ${({$isLoading:e})=>e&&l.css`
            cursor: progress;
        `}

    ${({$iconPosition:e})=>"right"===e&&l.css`
            flex-direction: row-reverse;
        `}

    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border 0.2s ease-in-out, outline 0.2s ease-in-out, transform 0.2s ease-in-out;
`,x=l.styled.div`
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
    ${({$iconPosition:e,$variant:t})=>"text"===t?null:"right"===e?l.css`
                padding-left: var(--alignment-padding);
            `:"left"===e?l.css`
                padding-right: var(--alignment-padding);
            `:""}
`,v=(0,s.forwardRef)((e,t)=>{let{variant:a="primary",color:r="brand",size:l="medium",icon:o=null,iconSize:p="20",iconPosition:d="left",className:f="",disabled:c=!1,loading:g=!1,style:u={},onClick:v=()=>{},fullWidth:m=!1,type:b="button",ariaLabel:_,tooltip:A="",tabIndex:y=0,onMouseEnter:w=()=>{},onMouseLeave:P=()=>{},children:S="",buttonProps:H,showAnimationOnClick:$=!0,...R}=e,z=c||g,E=(0,n.default)(f),I=(0,s.useId)();return s.default.createElement(h,{ref:t,onClick:e=>{z?e.preventDefault():v(e)},className:E,style:u,$isLoading:g,disabled:z,$variant:a,$color:r,$size:l,$fullWidth:m,$iconPosition:d,type:b,title:A,tabIndex:y,"data-testid":"testid-button",onMouseEnter:w,onMouseLeave:P,"aria-label":_,"aria-labelledby":!_&&S?`button-content-${I}`:void 0,$showAnimationOnClick:$,...H,...R},o&&!g&&s.default.createElement(i.Icon_default,{name:o,color:"inherit",size:p}),g&&s.default.createElement(i.Icon_default,{name:"loading",color:"inherit",size:p,loading:g}),S&&s.default.createElement(x,{id:`button-content-${I}`,$iconPosition:!!o&&d,$variant:a},S))});l.styled.div`
    display: flex;
    align-items: center;
    gap: var(--spacing-8px, 8px);
`;var m=(0,s.forwardRef)(({variant:e="primary",color:t="brand",size:a="medium",icon:r=null,iconSize:l,className:o="",disabled:p=!1,loading:d=!1,style:f={},onClick:c=()=>{},fullWidth:u,type:x="button",ariaLabel:v="",tooltip:m="",tabIndex:b=0,onMouseEnter:_=()=>{},onMouseLeave:A=()=>{},buttonProps:y,showAnimationOnClick:w=!0},P)=>{let S=(0,n.default)(o),H=l||g[a];return s.default.createElement(h,{ref:P,onClick:e=>{p?e.preventDefault():c(e)},className:S,style:f,$isLoading:d,disabled:p||d,$variant:e,$color:t,$size:a,$fullWidth:u,type:x,role:"button","aria-label":v||r,title:m,tabIndex:b,onMouseEnter:_,onMouseLeave:A,$isIconButton:!0,$showAnimationOnClick:w,...y,"data-testid":"testid-iconbutton"},r&&!d&&s.default.createElement(i.Icon_default,{name:r,color:"inherit",size:H}),d&&s.default.createElement(i.Icon_default,{name:"loading",color:"inherit",size:H,loading:d}))});e.s(["Button_default",0,v,"IconButton_default",0,m])},339415,e=>{"use strict";var t=e.i(189101);e.s(["default",()=>t.Button_default])},272225,e=>{"use strict";var t=e.i(997053);e.s(["getTextFieldStyles",0,(e="brand")=>t.css`
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
    `])},837339,e=>{"use strict";var t=e.i(997053),a=t.styled.label`
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
`,r=t.styled.div`
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
`,s=(0,t.styled)(r)`
    color: var(--text-emphasis-error-default, #d22d3a);
`,l=(0,t.styled)(i)``,o=(0,t.styled)(r)`
    color: var(--text-emphasis-success-default, #007a51); ;
`,p=(0,t.styled)(i)``;e.s(["StyledErrorMessage",0,s,"StyledErrorMessageText",0,l,"StyledHelpMessage",0,r,"StyledHelpMessageMaxCharacters",0,n,"StyledHelpMessageText",0,i,"StyledLabel",0,a,"StyledSuccessMessage",0,o,"StyledSuccessMessageText",0,p])},866700,e=>{"use strict";var t=e.i(837339),a=e.i(271645);e.s(["Label",0,e=>{let{name:r,color:i="secondary",isRequired:n,children:s,className:l,isDisabled:o,...p}=e;return a.default.createElement(t.StyledLabel,{htmlFor:r,$isRequired:n,className:l,$color:i,$isDisabled:o,...p},s)}])},228093,378191,e=>{"use strict";var t=e.i(837339),a=e.i(892480),r=e.i(271645);e.s(["HelpMessage",0,e=>{let{children:i,currentLength:n,maxLength:s}=e;return i||s?r.default.createElement(t.StyledHelpMessage,null,i&&r.default.createElement(r.default.Fragment,null,r.default.createElement(a.Icon_default,{name:"exclamation-circle",color:"currentColor",size:"20"}),r.default.createElement(t.StyledHelpMessageText,null,i)),s&&r.default.createElement(t.StyledHelpMessageMaxCharacters,null,n||0,"/",s)):null}],228093),e.s(["ErrorMessage",0,e=>{let{children:i,iconSize:n="20",style:s}=e;return i?r.default.createElement(t.StyledErrorMessage,null,r.default.createElement(a.Icon_default,{name:"exclamation-circle",color:"currentColor",size:n}),i&&r.default.createElement(t.StyledErrorMessageText,{style:s},i)):null}],378191)},501147,844611,916687,e=>{"use strict";var t=e.i(272225),a=e.i(866700),r=e.i(228093),i=e.i(378191),n=e.i(271645),s=e.i(997053),l={small:{padding:"4px 8px",fontSize:"14px",minHeight:"32px"},medium:{padding:"8px 12px",fontSize:"14px",minHeight:"40px"},large:{padding:"12px 16px",fontSize:"16px",minHeight:"48px"},"extra-large":{padding:"16px",fontSize:"16px",minHeight:"56px"}},o=s.styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    position: relative;
    font-family: var(--font-family);
`,p=s.styled.div`
    display: flex;
    align-items: center;
    padding: 0 8px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    gap: var(--spacing-spacing5, 8px);
`,d=(0,s.styled)(p)`
    right: 0;
    top: 0;
    left: auto;
`,f=s.styled.input`
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

    ${({$size:e})=>e&&s.css`
            ${l[e]}
        `}

    ${({$adornmentDimensions:e})=>s.css`
        ${!!(null==e?void 0:e.start)&&`padding-left: ${e.start}px;`}
        ${!!(null==e?void 0:e.end)&&`padding-right: ${e.end}px;`}
    `}
`,c=s.styled.div`
    width: 100%;
    box-sizing: border-box;
    position: relative;
    color: var(--text-emphasis-primary-default, #1a1d24);

    ${p}, ${d} {
        font-weight: var(--font-weight-fw-10, 500);

        ${({$size:e})=>e&&s.css`
                font-size: ${l[e].fontSize};
            `}

        ${({$isDisabled:e})=>e&&s.css`
                color: var(--text-emphasis-primary-disabled, #8c95a6);
            `}
    }
`,g=(0,n.forwardRef)((e,t)=>{let{name:s,value:l="",label:g,placeholder:u,type:h="text",inputMode:x="text",pattern:v,helpMessage:m,errorMessage:b,maxLength:_,isRequired:A=!1,isDisabled:y=!1,isReadOnly:w=!1,autoFocus:P=!1,autoComplete:S="on",onChange:H=()=>{},onClick:$=()=>{},onBlur:R=()=>{},onKeyDown:z=()=>{},onFocus:E=()=>{},size:I="medium",adornments:D,color:L="brand",min:B,max:M,step:G,className:O}=e,k=(0,n.useRef)(null),C=(0,n.useId)(),N=`start-adornment-${C}`,T=`end-adornment-${C}`,[j,Y]=(0,n.useState)({start:0,end:0});return(0,n.useLayoutEffect)(()=>{if(k.current){let e=document.getElementById(N),t=document.getElementById(T);Y({start:e?e.offsetWidth:0,end:t?t.offsetWidth:0})}},[null==D?void 0:D.start,null==D?void 0:D.end]),n.default.createElement(o,{className:O},g&&n.default.createElement(a.Label,{name:s,isRequired:A,color:"brand"===L?"primary":L},g),n.default.createElement(c,{ref:k,$size:I,$isDisabled:y},(null==D?void 0:D.start)&&n.default.createElement(p,{id:N},null==D?void 0:D.start),n.default.createElement(f,{ref:t,type:h,inputMode:x,pattern:v,min:B,max:M,step:G,id:s,name:s,placeholder:u,value:l,readOnly:w,disabled:y,onChange:e=>{H(e)},onClick:e=>{$(e)},onBlur:e=>{R(e)},onKeyDown:z,onFocus:e=>{E(e)},autoComplete:S,autoFocus:P,$size:I,$adornmentDimensions:j,$color:L}),(null==D?void 0:D.end)&&n.default.createElement(d,{id:T},null==D?void 0:D.end)),n.default.createElement(r.HelpMessage,{currentLength:null==l?void 0:l.length,maxLength:_},m),b&&n.default.createElement(i.ErrorMessage,null,b))});e.s(["TextField_default",0,g],844611),e.s(["NSTextField",0,g],501147),e.s(["normalizeIndianPhone",0,function(e){let t=String(e??"").replace(/\D/g,"");if(t.length<=10)return t;let a=t;for(;a.length>10;){if(a.startsWith("91")){a=a.slice(2);continue}if(a.startsWith("0")){a=a.slice(1);continue}break}return a.slice(0,10)}],916687)},703109,968081,e=>{"use strict";var t=e.i(997053),a=e.i(271645),r={DISPLAY_BD_D1:"display-bd-d1",DISPLAY_BD_D2:"display-bd-d2",DISPLAY_BD_D3:"display-bd-d3",HEADING_SB_H1:"heading-sb-h1",HEADING_SB_H2:"heading-sb-h2",HEADING_SB_H3:"heading-sb-h3",HEADING_SB_H4:"heading-sb-h4",HEADING_SB_H5:"heading-sb-h5",HEADING_SB_H6:"heading-sb-h6",PARAGRAPH_SB_P1:"paragraph-sb-p1",PARAGRAPH_SB_P2:"paragraph-sb-p2",PARAGRAPH_SB_P3:"paragraph-sb-p3",PARAGRAPH_SB_P4:"paragraph-sb-p4",PARAGRAPH_SB_L1:"paragraph-sb-l1",PARAGRAPH_SB_L2:"paragraph-sb-l2",PARAGRAPH_MD_P1:"paragraph-md-p1",PARAGRAPH_MD_P2:"paragraph-md-p2",PARAGRAPH_MD_P3:"paragraph-md-p3",PARAGRAPH_MD_P4:"paragraph-md-p4",PARAGRAPH_MD_C1:"paragraph-md-c1",PARAGRAPH_MD_L1:"paragraph-md-l1",PARAGRAPH_MD_L2:"paragraph-md-l2",OVERLINE_SB_OL1:"overline-sb-ol1",OVERLINE_SB_OL2:"overline-sb-ol2",ACTION_SB_P1:"action-sb-p1",ACTION_SB_P2:"action-sb-p2",ACTION_SB_LK1:"action-sb-lk1"};Object.freeze(Object.values(r));var i={H1:"h1",H2:"h2",H3:"h3",H4:"h4",H5:"h5",H6:"h6",P:"p",SPAN:"span",DIV:"div",LABEL:"label",CAPTION:"caption",CODE:"code",AUTO:"auto"};Object.freeze(Object.values(i));var n={[r.DISPLAY_BD_D1]:t.css`
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
    `},s={[r.DISPLAY_BD_D1]:i.H1,[r.DISPLAY_BD_D2]:i.H2,[r.DISPLAY_BD_D3]:i.H3,[r.HEADING_SB_H1]:i.H1,[r.HEADING_SB_H2]:i.H2,[r.HEADING_SB_H3]:i.H3,[r.HEADING_SB_H4]:i.H4,[r.HEADING_SB_H5]:i.H5,[r.HEADING_SB_H6]:i.H6,[r.PARAGRAPH_SB_P1]:i.P,[r.PARAGRAPH_SB_P2]:i.P,[r.PARAGRAPH_SB_P3]:i.P,[r.PARAGRAPH_SB_P4]:i.P,[r.PARAGRAPH_SB_L1]:i.LABEL,[r.PARAGRAPH_SB_L2]:i.LABEL,[r.PARAGRAPH_MD_P1]:i.P,[r.PARAGRAPH_MD_P2]:i.P,[r.PARAGRAPH_MD_P3]:i.P,[r.PARAGRAPH_MD_P4]:i.P,[r.PARAGRAPH_MD_C1]:i.CODE,[r.PARAGRAPH_MD_L1]:i.LABEL,[r.PARAGRAPH_MD_L2]:i.LABEL,[r.OVERLINE_SB_OL1]:i.P,[r.OVERLINE_SB_OL2]:i.P,[r.ACTION_SB_P1]:i.SPAN,[r.ACTION_SB_P2]:i.SPAN,[r.ACTION_SB_LK1]:i.SPAN},l=t.styled.p.attrs(e=>({as:e.as||"p"}))`
    margin: 0;
    padding: 0;

    font-family: var(--font-family, 'Mona Sans');
    color: var(--text-emphasis-primary-default, #16191d);

    ${({$variant:e})=>t.css`
            ${e?n[e]:n[r.PARAGRAPH_MD_P1]}
        `};

    ${({$textAlign:e})=>e&&`text-align: ${e};`}
    ${({$textTransform:e})=>e&&`text-transform: ${e};`}
    ${({$fontSize:e})=>e&&`font-size: ${e};`}
    ${({$color:e})=>e&&`color: ${e};`};
`,o=({variant:e="paragraph-md-p1",as:t="auto",color:r="var(--text-emphasis-primary-default, #16191d)",textAlign:n=null,textTransform:o=null,fontSize:p=null,children:d="",className:f="",title:c=null})=>{let g=t===i.AUTO?s[e]:t;return a.default.createElement(l,{$variant:e,as:g,$color:r,$textAlign:n,$textTransform:o,$fontSize:p,className:f,title:c},d)};e.s(["Typography_default",0,o],968081),e.s(["default",0,o],703109)},830249,e=>{"use strict";var t=e.i(271645);e.s(["useParentUrl",0,function(){let[e,a]=(0,t.useState)("");return(0,t.useEffect)(()=>{function e(e){let t=e.data;t&&"object"==typeof t&&"PARENT_URL"===t.type&&"string"==typeof t.url&&a(t.url)}return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]),e}])}]);