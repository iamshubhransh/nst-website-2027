(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,343794,(e,t,a)=>{!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=r(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)a.call(e,n)&&e[n]&&(t=r(t,n));return t}(n)))}return e}function r(e,t){return t?e?e+" "+t:e+t:e}if(t.exports)i.default=i,t.exports=i;else if("function"==typeof define&&"object"==typeof define.amd&&define.amd)void 0!==i&&e.v(i);else window.classNames=i}()},892480,e=>{"use strict";var t=(e,t)=>e&&!0!==e&&`${e}-${t}`,a=e.i(343794),i=e.i(271645),r=e.i(997053),n=r.keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`,s=r.styled.i`
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

    ${({$size:e})=>r.css`
        font-size: ${e}px;
    `}

    ${({$color:e})=>r.css`
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
`;e.s(["Icon_default",0,function({ariaHidden:e="true",ariaLabel:r,as:n="i",bordered:l=!1,circular:o=!1,color:p="grey",className:d,disabled:c=!1,fitted:f=!1,flipped:g,inverted:h=!1,link:x=!1,loading:u=!1,name:v,rotated:m,size:b="24",style:y,...w}){let A,_=(A={},null==r?A["aria-hidden"]="true":A["aria-label"]=r,null!=e&&(A["aria-hidden"]=e),A),$=(0,a.default)("grauity-icon",`grauity-icon-${v}`,p&&p,l&&"bordered",o&&"circular",c&&"disabled",f&&"fitted",h&&"inverted",x&&"link",u&&"loading",t(g,"flipped"),t(m,"rotated"),d);return i.createElement(s,{as:n,name:v,$size:b,onClick:e=>{var t;c?e.preventDefault():null==(t=w.onClick)||t.call(w,e,w)},$color:p,..._,className:$,style:y,"data-testid":"testid-icon"})}],892480)},189101,e=>{"use strict";var t,a,i,r=e.i(892480),n=e.i(343794),s=e.i(271645),l=e.i(997053),o=((t=o||{}).PRIMARY="primary",t.SECONDARY="secondary",t.TERTIARY="tertiary",t.TEXT="text",t),p=((a=p||{}).EXTRA_SMALL="extra-small",a.SMALL="small",a.MEDIUM="medium",a.LARGE="large",a.EXTRA_LARGE="extra-large",a),d=((i=d||{}).LEFT="left",i.RIGHT="right",i),c={"extra-small":{padding:"var(--spacing-2px, 2px) var(--spacing-4px, 4px)",height:"var(--spacing-24px, 24px)",minHeight:"var(--spacing-24px, 24px)",gap:"var(--spacing-2px, 2px)","--alignment-padding":"var(--spacing-2px, 2px)"},small:{padding:"var(--spacing-4px, 4px) var(--spacing-8px, 8px)",height:"var(--spacing-32px, 32px)",minHeight:"var(--spacing-32px, 32px)",gap:"var(--spacing-4px, 4px)","--alignment-padding":"var(--spacing-4px, 4px)"},medium:{padding:"var(--spacing-8px, 8px) var(--spacing-12px, 12px)",height:"var(--spacing-40px, 40px)",minHeight:"var(--spacing-40px, 40px)"},large:{padding:"var(--spacing-12px, 12px) var(--spacing-16px, 16px)",height:"var(--spacing-48px, 48px)",minHeight:"var(--spacing-48px, 48px)"},"extra-large":{padding:"var(--spacing-16px, 16px) var(--spacing-20px, 20px)",height:"var(--spacing-56px, 56px)",minHeight:"var(--spacing-56px, 56px)"}},f={"extra-small":{height:"var(--spacing-16px, 16px)",minHeight:"var(--spacing-16px, 16px)",gap:"var(--spacing-2px, 2px)",padding:"var(--spacing-0px, 0px)",width:"var(--spacing-16px, 16px)",minWidth:"var(--spacing-16px, 16px)",borderRadius:"var(--corner-radius-4px, 4px)"},small:{height:"var(--spacing-32px, 32px)",minHeight:"var(--spacing-32px, 32px)",gap:"var(--spacing-4px, 4px)",padding:"var(--spacing-4px, 4px)",width:"var(--spacing-32px, 32px)",minWidth:"var(--spacing-32px, 32px)"},medium:{height:"var(--spacing-40px, 40px)",minHeight:"var(--spacing-40px, 40px)",padding:"var(--spacing-8px, 8px)",width:"var(--spacing-40px, 40px)",minWidth:"var(--spacing-40px, 40px)"},large:{height:"var(--spacing-48px, 48px)",minHeight:"var(--spacing-48px, 48px)",padding:"var(--spacing-12px, 12px)",width:"var(--spacing-48px, 48px)",minWidth:"var(--spacing-48px, 48px)"},"extra-large":{height:"var(--spacing-56px, 56px)",minHeight:"var(--spacing-56px, 56px)",padding:"var(--spacing-16px, 16px)",width:"var(--spacing-56px, 56px)",minWidth:"var(--spacing-56px, 56px)"}},g={"extra-small":"16",small:"24",medium:"24",large:"32","extra-large":"40"},h={"extra-small":{"--font-size":"var(--font-size-14px, 14px)","--line-height":"var(--font-size-20px, 20px)"},small:{"--font-size":"var(--font-size-14px, 14px)","--line-height":"var(--font-size-20px, 20px)"},medium:{"--font-size":"var(--font-size-14px, 14px)","--line-height":"var(--font-size-20px, 20px)"},large:{"--font-size":"var(--font-size-16px, 16px)","--line-height":"var(--font-size-24px, 24px)"},"extra-large":{"--font-size":"var(--font-size-16px, 16px)","--line-height":"var(--font-size-24px, 24px)"}},x=l.styled.button`
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
            ${f[e]}
        `:l.css`
                ${c[e]}
            `}

    ${({$variant:e,$size:t})=>"text"===e&&l.css`
            padding: 0;
            height: unset;
            width: unset;
            min-height: unset;
            min-width: unset;
            border-radius: var(--corner-radius-4px, 4px);

            ${h[t]}
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
`,u=l.styled.div`
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
`,v=(0,s.forwardRef)((e,t)=>{let{variant:a="primary",color:i="brand",size:l="medium",icon:o=null,iconSize:p="20",iconPosition:d="left",className:c="",disabled:f=!1,loading:g=!1,style:h={},onClick:v=()=>{},fullWidth:m=!1,type:b="button",ariaLabel:y,tooltip:w="",tabIndex:A=0,onMouseEnter:_=()=>{},onMouseLeave:$=()=>{},children:P="",buttonProps:z,showAnimationOnClick:H=!0,...R}=e,E=f||g,S=(0,n.default)(c),B=(0,s.useId)();return s.default.createElement(x,{ref:t,onClick:e=>{E?e.preventDefault():v(e)},className:S,style:h,$isLoading:g,disabled:E,$variant:a,$color:i,$size:l,$fullWidth:m,$iconPosition:d,type:b,title:w,tabIndex:A,"data-testid":"testid-button",onMouseEnter:_,onMouseLeave:$,"aria-label":y,"aria-labelledby":!y&&P?`button-content-${B}`:void 0,$showAnimationOnClick:H,...z,...R},o&&!g&&s.default.createElement(r.Icon_default,{name:o,color:"inherit",size:p}),g&&s.default.createElement(r.Icon_default,{name:"loading",color:"inherit",size:p,loading:g}),P&&s.default.createElement(u,{id:`button-content-${B}`,$iconPosition:!!o&&d,$variant:a},P))});l.styled.div`
    display: flex;
    align-items: center;
    gap: var(--spacing-8px, 8px);
`;var m=(0,s.forwardRef)(({variant:e="primary",color:t="brand",size:a="medium",icon:i=null,iconSize:l,className:o="",disabled:p=!1,loading:d=!1,style:c={},onClick:f=()=>{},fullWidth:h,type:u="button",ariaLabel:v="",tooltip:m="",tabIndex:b=0,onMouseEnter:y=()=>{},onMouseLeave:w=()=>{},buttonProps:A,showAnimationOnClick:_=!0},$)=>{let P=(0,n.default)(o),z=l||g[a];return s.default.createElement(x,{ref:$,onClick:e=>{p?e.preventDefault():f(e)},className:P,style:c,$isLoading:d,disabled:p||d,$variant:e,$color:t,$size:a,$fullWidth:h,type:u,role:"button","aria-label":v||i,title:m,tabIndex:b,onMouseEnter:y,onMouseLeave:w,$isIconButton:!0,$showAnimationOnClick:_,...A,"data-testid":"testid-iconbutton"},i&&!d&&s.default.createElement(r.Icon_default,{name:i,color:"inherit",size:z}),d&&s.default.createElement(r.Icon_default,{name:"loading",color:"inherit",size:z,loading:d}))});e.s(["Button_default",0,v,"IconButton_default",0,m])},339415,e=>{"use strict";var t=e.i(189101);e.s(["default",()=>t.Button_default])},272225,e=>{"use strict";var t=e.i(997053);e.s(["getTextFieldStyles",0,(e="brand")=>t.css`
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
`,i=t.styled.div`
    color: var(--text-emphasis-secondary-default, #5b6271);
    display: flex;
    gap: 4px;
    align-items: center;
`,r=t.styled.span`
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.048px;
`,n=(0,t.styled)(r)`
    margin-left: auto;
`,s=(0,t.styled)(i)`
    color: var(--text-emphasis-error-default, #d22d3a);
`,l=(0,t.styled)(r)``,o=(0,t.styled)(i)`
    color: var(--text-emphasis-success-default, #007a51); ;
`,p=(0,t.styled)(r)``;e.s(["StyledErrorMessage",0,s,"StyledErrorMessageText",0,l,"StyledHelpMessage",0,i,"StyledHelpMessageMaxCharacters",0,n,"StyledHelpMessageText",0,r,"StyledLabel",0,a,"StyledSuccessMessage",0,o,"StyledSuccessMessageText",0,p])},866700,e=>{"use strict";var t=e.i(837339),a=e.i(271645);e.s(["Label",0,e=>{let{name:i,color:r="secondary",isRequired:n,children:s,className:l,isDisabled:o,...p}=e;return a.default.createElement(t.StyledLabel,{htmlFor:i,$isRequired:n,className:l,$color:r,$isDisabled:o,...p},s)}])},228093,378191,e=>{"use strict";var t=e.i(837339),a=e.i(892480),i=e.i(271645);e.s(["HelpMessage",0,e=>{let{children:r,currentLength:n,maxLength:s}=e;return r||s?i.default.createElement(t.StyledHelpMessage,null,r&&i.default.createElement(i.default.Fragment,null,i.default.createElement(a.Icon_default,{name:"exclamation-circle",color:"currentColor",size:"20"}),i.default.createElement(t.StyledHelpMessageText,null,r)),s&&i.default.createElement(t.StyledHelpMessageMaxCharacters,null,n||0,"/",s)):null}],228093),e.s(["ErrorMessage",0,e=>{let{children:r,iconSize:n="20",style:s}=e;return r?i.default.createElement(t.StyledErrorMessage,null,i.default.createElement(a.Icon_default,{name:"exclamation-circle",color:"currentColor",size:n}),r&&i.default.createElement(t.StyledErrorMessageText,{style:s},r)):null}],378191)},501147,844611,916687,e=>{"use strict";var t=e.i(272225),a=e.i(866700),i=e.i(228093),r=e.i(378191),n=e.i(271645),s=e.i(997053),l={small:{padding:"4px 8px",fontSize:"14px",minHeight:"32px"},medium:{padding:"8px 12px",fontSize:"14px",minHeight:"40px"},large:{padding:"12px 16px",fontSize:"16px",minHeight:"48px"},"extra-large":{padding:"16px",fontSize:"16px",minHeight:"56px"}},o=s.styled.div`
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
`,c=s.styled.input`
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
`,f=s.styled.div`
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
`,g=(0,n.forwardRef)((e,t)=>{let{name:s,value:l="",label:g,placeholder:h,type:x="text",inputMode:u="text",pattern:v,helpMessage:m,errorMessage:b,maxLength:y,isRequired:w=!1,isDisabled:A=!1,isReadOnly:_=!1,autoFocus:$=!1,autoComplete:P="on",onChange:z=()=>{},onClick:H=()=>{},onBlur:R=()=>{},onKeyDown:E=()=>{},onFocus:S=()=>{},size:B="medium",adornments:D,color:I="brand",min:L,max:G,step:M,className:k}=e,N=(0,n.useRef)(null),O=(0,n.useId)(),C=`start-adornment-${O}`,T=`end-adornment-${O}`,[j,W]=(0,n.useState)({start:0,end:0});return(0,n.useLayoutEffect)(()=>{if(N.current){let e=document.getElementById(C),t=document.getElementById(T);W({start:e?e.offsetWidth:0,end:t?t.offsetWidth:0})}},[null==D?void 0:D.start,null==D?void 0:D.end]),n.default.createElement(o,{className:k},g&&n.default.createElement(a.Label,{name:s,isRequired:w,color:"brand"===I?"primary":I},g),n.default.createElement(f,{ref:N,$size:B,$isDisabled:A},(null==D?void 0:D.start)&&n.default.createElement(p,{id:C},null==D?void 0:D.start),n.default.createElement(c,{ref:t,type:x,inputMode:u,pattern:v,min:L,max:G,step:M,id:s,name:s,placeholder:h,value:l,readOnly:_,disabled:A,onChange:e=>{z(e)},onClick:e=>{H(e)},onBlur:e=>{R(e)},onKeyDown:E,onFocus:e=>{S(e)},autoComplete:P,autoFocus:$,$size:B,$adornmentDimensions:j,$color:I}),(null==D?void 0:D.end)&&n.default.createElement(d,{id:T},null==D?void 0:D.end)),n.default.createElement(i.HelpMessage,{currentLength:null==l?void 0:l.length,maxLength:y},m),b&&n.default.createElement(r.ErrorMessage,null,b))});e.s(["TextField_default",0,g],844611),e.s(["NSTextField",0,g],501147),e.s(["normalizeIndianPhone",0,function(e){let t=String(e??"").replace(/\D/g,"");if(t.length<=10)return t;let a=t;for(;a.length>10;){if(a.startsWith("91")){a=a.slice(2);continue}if(a.startsWith("0")){a=a.slice(1);continue}break}return a.slice(0,10)}],916687)},703109,968081,e=>{"use strict";var t=e.i(997053),a=e.i(271645),i={DISPLAY_BD_D1:"display-bd-d1",DISPLAY_BD_D2:"display-bd-d2",DISPLAY_BD_D3:"display-bd-d3",HEADING_SB_H1:"heading-sb-h1",HEADING_SB_H2:"heading-sb-h2",HEADING_SB_H3:"heading-sb-h3",HEADING_SB_H4:"heading-sb-h4",HEADING_SB_H5:"heading-sb-h5",HEADING_SB_H6:"heading-sb-h6",PARAGRAPH_SB_P1:"paragraph-sb-p1",PARAGRAPH_SB_P2:"paragraph-sb-p2",PARAGRAPH_SB_P3:"paragraph-sb-p3",PARAGRAPH_SB_P4:"paragraph-sb-p4",PARAGRAPH_SB_L1:"paragraph-sb-l1",PARAGRAPH_SB_L2:"paragraph-sb-l2",PARAGRAPH_MD_P1:"paragraph-md-p1",PARAGRAPH_MD_P2:"paragraph-md-p2",PARAGRAPH_MD_P3:"paragraph-md-p3",PARAGRAPH_MD_P4:"paragraph-md-p4",PARAGRAPH_MD_C1:"paragraph-md-c1",PARAGRAPH_MD_L1:"paragraph-md-l1",PARAGRAPH_MD_L2:"paragraph-md-l2",OVERLINE_SB_OL1:"overline-sb-ol1",OVERLINE_SB_OL2:"overline-sb-ol2",ACTION_SB_P1:"action-sb-p1",ACTION_SB_P2:"action-sb-p2",ACTION_SB_LK1:"action-sb-lk1"};Object.freeze(Object.values(i));var r={H1:"h1",H2:"h2",H3:"h3",H4:"h4",H5:"h5",H6:"h6",P:"p",SPAN:"span",DIV:"div",LABEL:"label",CAPTION:"caption",CODE:"code",AUTO:"auto"};Object.freeze(Object.values(r));var n={[i.DISPLAY_BD_D1]:t.css`
        font-size: var(--font-size-fs-120, 76px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-140, 92px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[i.DISPLAY_BD_D2]:t.css`
        font-size: var(--font-size-fs-110, 64px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-130, 76px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[i.DISPLAY_BD_D3]:t.css`
        font-size: var(--font-size-fs-100, 52px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-120, 64px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[i.HEADING_SB_H1]:t.css`
        font-size: var(--font-size-fs-90, 40px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-110, 48px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[i.HEADING_SB_H2]:t.css`
        font-size: var(--font-size-fs-80, 36px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-100, 42px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[i.HEADING_SB_H3]:t.css`
        font-size: var(--font-size-fs-70, 28px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-90, 32px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[i.HEADING_SB_H4]:t.css`
        font-size: var(--font-size-fs-60, 24px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[i.HEADING_SB_H5]:t.css`
        font-size: var(--font-size-fs-50, 20px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-60, 24px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[i.HEADING_SB_H6]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-40, 20px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[i.PARAGRAPH_SB_P1]:t.css`
        font-size: var(--font-size-fs-40, 18px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[i.PARAGRAPH_SB_P2]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[i.PARAGRAPH_SB_P3]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-10, 0.016px);
    `,[i.PARAGRAPH_SB_P4]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-30, 18px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[i.PARAGRAPH_SB_L1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,[i.PARAGRAPH_SB_L2]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-10, 14px);
        letter-spacing: var(--letter-spacing-ls-40, 0.25px);
    `,[i.PARAGRAPH_MD_P1]:t.css`
        font-size: var(--font-size-fs-40, 18px);
        font-weight: var(--font-weight-fw-10, 500);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[i.PARAGRAPH_MD_P2]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[i.PARAGRAPH_MD_P3]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[i.PARAGRAPH_MD_P4]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-30, 18px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[i.PARAGRAPH_MD_C1]:t.css`
        font-family: 'Fira Code';
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-00, 450);
        line-height: var(--line-height-lh-40, 20px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[i.PARAGRAPH_MD_L1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-60, 0.5px);
    `,[i.PARAGRAPH_MD_L2]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-10, 14px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,[i.OVERLINE_SB_OL1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-70, 1.6px);
        text-transform: uppercase;
    `,[i.OVERLINE_SB_OL2]:t.css`
        font-size: var(--font-size-fs-00, 11px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-00, 12px);
        letter-spacing: var(--letter-spacing-ls-80, 2px);
        text-transform: uppercase;
    `,[i.ACTION_SB_P1]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[i.ACTION_SB_P2]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,[i.ACTION_SB_LK1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-80, 2px);
        text-transform: uppercase;
    `},s={[i.DISPLAY_BD_D1]:r.H1,[i.DISPLAY_BD_D2]:r.H2,[i.DISPLAY_BD_D3]:r.H3,[i.HEADING_SB_H1]:r.H1,[i.HEADING_SB_H2]:r.H2,[i.HEADING_SB_H3]:r.H3,[i.HEADING_SB_H4]:r.H4,[i.HEADING_SB_H5]:r.H5,[i.HEADING_SB_H6]:r.H6,[i.PARAGRAPH_SB_P1]:r.P,[i.PARAGRAPH_SB_P2]:r.P,[i.PARAGRAPH_SB_P3]:r.P,[i.PARAGRAPH_SB_P4]:r.P,[i.PARAGRAPH_SB_L1]:r.LABEL,[i.PARAGRAPH_SB_L2]:r.LABEL,[i.PARAGRAPH_MD_P1]:r.P,[i.PARAGRAPH_MD_P2]:r.P,[i.PARAGRAPH_MD_P3]:r.P,[i.PARAGRAPH_MD_P4]:r.P,[i.PARAGRAPH_MD_C1]:r.CODE,[i.PARAGRAPH_MD_L1]:r.LABEL,[i.PARAGRAPH_MD_L2]:r.LABEL,[i.OVERLINE_SB_OL1]:r.P,[i.OVERLINE_SB_OL2]:r.P,[i.ACTION_SB_P1]:r.SPAN,[i.ACTION_SB_P2]:r.SPAN,[i.ACTION_SB_LK1]:r.SPAN},l=t.styled.p.attrs(e=>({as:e.as||"p"}))`
    margin: 0;
    padding: 0;

    font-family: var(--font-family, 'Mona Sans');
    color: var(--text-emphasis-primary-default, #16191d);

    ${({$variant:e})=>t.css`
            ${e?n[e]:n[i.PARAGRAPH_MD_P1]}
        `};

    ${({$textAlign:e})=>e&&`text-align: ${e};`}
    ${({$textTransform:e})=>e&&`text-transform: ${e};`}
    ${({$fontSize:e})=>e&&`font-size: ${e};`}
    ${({$color:e})=>e&&`color: ${e};`};
`,o=({variant:e="paragraph-md-p1",as:t="auto",color:i="var(--text-emphasis-primary-default, #16191d)",textAlign:n=null,textTransform:o=null,fontSize:p=null,children:d="",className:c="",title:f=null})=>{let g=t===r.AUTO?s[e]:t;return a.default.createElement(l,{$variant:e,as:g,$color:i,$textAlign:n,$textTransform:o,$fontSize:p,className:c,title:f},d)};e.s(["Typography_default",0,o],968081),e.s(["default",0,o],703109)},830249,e=>{"use strict";var t=e.i(271645);e.s(["useParentUrl",0,function(){let[e,a]=(0,t.useState)("");return(0,t.useEffect)(()=>{function e(e){let t=e.data;t&&"object"==typeof t&&"PARENT_URL"===t.type&&"string"==typeof t.url&&a(t.url)}return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]),e}])},397681,e=>{"use strict";var t=e.i(893347),a=e.i(773892),i=e.i(364072),r=e.i(189101),n=e.i(824511),s=e.i(88653),l=e.i(271645),o=e.i(997053),p=(0,o.styled)(n.m.div)`
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
`,d=o.styled.div`
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
`,c=o.styled.div`
    width: 100%;
    height: var(--spacing-1px, 1px);
    background: var(--border-subtle-primary-default, #e1e5ea);
`,f=o.styled.h2`
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
`,g=o.styled.div`
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
`,h=o.styled.div`
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
`;var x=o.styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: var(--spacing-8px, 8px);

    ${({$justifyContent:e})=>e&&o.css`
            justify-content: ${e};
        `}
`,u=o.styled.div`
    width: 100%;
    position: relative;

    img {
        width: 100%;
        border-radius: var(--corner-radius-8px, 8px);
    }
`,v={slide:{variants:{hidden:{opacity:0,y:-50},visible:{opacity:1,y:0},exit:{opacity:0,y:50}},transition:{duration:.3}},"slide-reverse":{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0},exit:{opacity:0,y:-50}},transition:{duration:.3}},fade:{variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},transition:{duration:.3}},emanate:{}},m=(0,l.forwardRef)(({width:e,height:t,minHeight:a,minWidth:i,maxHeight:r,maxWidth:n,mobileBottomFullWidth:s,modalPadding:o,border:d,children:c,...f},g)=>l.default.createElement(p,{ref:g,$width:e,$height:t,$minHeight:a,$minWidth:i,$maxHeight:r,$maxWidth:n,$mobileBottomFullWidth:s,$modalPadding:o,$border:d,...f},c)),b=(0,l.forwardRef)(({justifyContent:e,children:t},a)=>l.default.createElement(x,{ref:a,$justifyContent:e},t)),y=(0,l.forwardRef)(({overflow:e,children:t,...a},i)=>l.default.createElement(d,{ref:i,$overflow:e,...a},t)),w=(0,l.forwardRef)(({children:e,...t},a)=>l.default.createElement(u,{ref:a,...t},e)),A=(0,l.forwardRef)(({children:e,...t},a)=>l.default.createElement(f,{ref:a,...t},e)),_=(0,l.forwardRef)(({children:e,...t},a)=>l.default.createElement(g,{ref:a,...t},e)),$=(0,l.forwardRef)(({modalBodyMargin:e,children:t,...a},i)=>l.default.createElement(h,{ref:i,$modalBodyMargin:e,...a},t)),P=(0,l.forwardRef)(({...e},t)=>l.default.createElement(c,{ref:t,...e})),z=(0,l.forwardRef)((e,n)=>{let{isOpen:o=!0,banner:c=null,title:m=null,description:b=null,body:y=null,action:w=null,height:A="auto",width:_="500px",minHeight:$=null,minWidth:P=null,maxHeight:z="95vh",maxWidth:H="95vw",onHide:R=()=>{},onClose:E=()=>{},mobileBottomFullWidth:S=!1,modalPadding:B="20px",border:D="1px solid var(--border-subtle-primary-default, #e1e5ea)",modalBodyMargin:I=null,showCloseButton:L=!1,hideOnClickAway:G=!1,blurBackground:M=!1,animatePresence:k="fade",clickEvent:N=null,children:O=null,shouldFocusOnFirstElement:C=!0,shouldDisableScroll:T=!0,overflow:j="visible",className:W}=e,Y=(0,l.useRef)(null),F=()=>{"function"==typeof R&&R(),"function"==typeof E&&E()};(0,l.useImperativeHandle)(n,()=>Y.current),(0,a.useDisableBodyScroll_default)(o),(0,a.useKeyboardEvent_default)({onKeyPress:()=>{G&&F()},keyCodes:["Escape"],config:{shouldDetect:o}});let K=(0,l.useId)(),U=(0,l.useMemo)(()=>{var e,t;return e=k,t=N,"emanate"===e?"number"==typeof(null==t?void 0:t.clientX)&&"number"==typeof(null==t?void 0:t.clientY)?((e,t)=>{let a,i;try{a=e-window.innerWidth/2,i=t-window.innerHeight/2}catch(e){a=0,i=0}return{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{scale:0,opacity:0,x:a,y:i},visible:{scale:1,opacity:1,x:0,y:0},exit:{scale:0,opacity:0,x:a,y:i}},transition:{duration:.3}}})(t.clientX,t.clientY):{}:{initial:"hidden",animate:"visible",exit:"exit",...e?v[e]:{}}},[k,N]),V=(0,l.useMemo)(()=>(({isOpen:e,animatePresence:t,clickEvent:a})=>!!e&&("emanate"!==t||"number"==typeof(null==a?void 0:a.clientX)&&"number"==typeof(null==a?void 0:a.clientY)))({isOpen:o,animatePresence:k,clickEvent:N}),[o,k,N]);return l.default.createElement(i.motion_default,null,l.default.createElement(s.AnimatePresence,null,V&&l.default.createElement(t.Overlay_default,{shouldDisableScroll:T,onOverlayClick:()=>{G&&F()},shouldTintOverlay:!0,shouldBlurOverlay:M,shouldCenterContent:!0,"data-testid":"testid-modalwrapper",className:W,animationDuration:.3,shouldFocusOnFirstElement:C},l.default.createElement(p,{onClick:e=>e.stopPropagation(),ref:Y,$width:_,$height:A,$minHeight:$,$minWidth:P,$maxHeight:z,$maxWidth:H,$mobileBottomFullWidth:S,$modalPadding:B,$border:D,"aria-labelledby":`modal-title-${K}`,"aria-describedby":`modal-description-${K}`,"aria-modal":"true",role:"dialog","data-testid":"testid-modal",...U},l.default.createElement(d,{$overflow:j},L&&l.default.createElement(x,{$justifyContent:"end"},l.default.createElement(r.IconButton_default,{onClick:F,size:"small",variant:"tertiary",color:"neutral",icon:"close",ariaLabel:"Close",buttonProps:{autoFocus:!0}})),c&&l.default.createElement(u,null,c),m&&l.default.createElement(f,{id:`modal-title-${K}`},m),b&&l.default.createElement(g,{id:`modal-description-${K}`},b),y&&l.default.createElement(h,{$modalBodyMargin:I},y),O&&l.default.createElement(h,{$modalBodyMargin:I},O)),w&&l.default.createElement(x,null,w)))))});z.Modal=m,z.Main=y,z.Banner=w,z.Title=A,z.Description=_,z.Body=$,z.Action=b,z.Divider=P,e.s(["NSModal",0,z],397681)}]);