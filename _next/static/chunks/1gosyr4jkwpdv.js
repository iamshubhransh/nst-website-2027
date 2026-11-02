(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,343794,(e,t,a)=>{!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=r(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)a.call(e,n)&&e[n]&&(t=r(t,n));return t}(n)))}return e}function r(e,t){return t?e?e+" "+t:e+t:e}if(t.exports)i.default=i,t.exports=i;else if("function"==typeof define&&"object"==typeof define.amd&&define.amd)void 0!==i&&e.v(i);else window.classNames=i}()},892480,e=>{"use strict";var t=(e,t)=>e&&!0!==e&&`${e}-${t}`,a=e.i(343794),i=e.i(271645),r=e.i(997053),n=r.keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`,l=r.styled.i`
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
`;e.s(["Icon_default",0,function({ariaHidden:e="true",ariaLabel:r,as:n="i",bordered:s=!1,circular:o=!1,color:d="grey",className:p,disabled:c=!1,fitted:x=!1,flipped:u,inverted:f=!1,link:g=!1,loading:h=!1,name:m,rotated:v,size:b="24",style:y,...$}){let w,z=(w={},null==r?w["aria-hidden"]="true":w["aria-label"]=r,null!=e&&(w["aria-hidden"]=e),w),E=(0,a.default)("grauity-icon",`grauity-icon-${m}`,d&&d,s&&"bordered",o&&"circular",c&&"disabled",x&&"fitted",f&&"inverted",g&&"link",h&&"loading",t(u,"flipped"),t(v,"rotated"),p);return i.createElement(l,{as:n,name:m,$size:b,onClick:e=>{var t;c?e.preventDefault():null==(t=$.onClick)||t.call($,e,$)},$color:d,...z,className:E,style:y,"data-testid":"testid-icon"})}],892480)},189101,e=>{"use strict";var t,a,i,r=e.i(892480),n=e.i(343794),l=e.i(271645),s=e.i(997053),o=((t=o||{}).PRIMARY="primary",t.SECONDARY="secondary",t.TERTIARY="tertiary",t.TEXT="text",t),d=((a=d||{}).EXTRA_SMALL="extra-small",a.SMALL="small",a.MEDIUM="medium",a.LARGE="large",a.EXTRA_LARGE="extra-large",a),p=((i=p||{}).LEFT="left",i.RIGHT="right",i),c={"extra-small":{padding:"var(--spacing-2px, 2px) var(--spacing-4px, 4px)",height:"var(--spacing-24px, 24px)",minHeight:"var(--spacing-24px, 24px)",gap:"var(--spacing-2px, 2px)","--alignment-padding":"var(--spacing-2px, 2px)"},small:{padding:"var(--spacing-4px, 4px) var(--spacing-8px, 8px)",height:"var(--spacing-32px, 32px)",minHeight:"var(--spacing-32px, 32px)",gap:"var(--spacing-4px, 4px)","--alignment-padding":"var(--spacing-4px, 4px)"},medium:{padding:"var(--spacing-8px, 8px) var(--spacing-12px, 12px)",height:"var(--spacing-40px, 40px)",minHeight:"var(--spacing-40px, 40px)"},large:{padding:"var(--spacing-12px, 12px) var(--spacing-16px, 16px)",height:"var(--spacing-48px, 48px)",minHeight:"var(--spacing-48px, 48px)"},"extra-large":{padding:"var(--spacing-16px, 16px) var(--spacing-20px, 20px)",height:"var(--spacing-56px, 56px)",minHeight:"var(--spacing-56px, 56px)"}},x={"extra-small":{height:"var(--spacing-16px, 16px)",minHeight:"var(--spacing-16px, 16px)",gap:"var(--spacing-2px, 2px)",padding:"var(--spacing-0px, 0px)",width:"var(--spacing-16px, 16px)",minWidth:"var(--spacing-16px, 16px)",borderRadius:"var(--corner-radius-4px, 4px)"},small:{height:"var(--spacing-32px, 32px)",minHeight:"var(--spacing-32px, 32px)",gap:"var(--spacing-4px, 4px)",padding:"var(--spacing-4px, 4px)",width:"var(--spacing-32px, 32px)",minWidth:"var(--spacing-32px, 32px)"},medium:{height:"var(--spacing-40px, 40px)",minHeight:"var(--spacing-40px, 40px)",padding:"var(--spacing-8px, 8px)",width:"var(--spacing-40px, 40px)",minWidth:"var(--spacing-40px, 40px)"},large:{height:"var(--spacing-48px, 48px)",minHeight:"var(--spacing-48px, 48px)",padding:"var(--spacing-12px, 12px)",width:"var(--spacing-48px, 48px)",minWidth:"var(--spacing-48px, 48px)"},"extra-large":{height:"var(--spacing-56px, 56px)",minHeight:"var(--spacing-56px, 56px)",padding:"var(--spacing-16px, 16px)",width:"var(--spacing-56px, 56px)",minWidth:"var(--spacing-56px, 56px)"}},u={"extra-small":"16",small:"24",medium:"24",large:"32","extra-large":"40"},f={"extra-small":{"--font-size":"var(--font-size-14px, 14px)","--line-height":"var(--font-size-20px, 20px)"},small:{"--font-size":"var(--font-size-14px, 14px)","--line-height":"var(--font-size-20px, 20px)"},medium:{"--font-size":"var(--font-size-14px, 14px)","--line-height":"var(--font-size-20px, 20px)"},large:{"--font-size":"var(--font-size-16px, 16px)","--line-height":"var(--font-size-24px, 24px)"},"extra-large":{"--font-size":"var(--font-size-16px, 16px)","--line-height":"var(--font-size-24px, 24px)"}},g=s.styled.button`
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

    ${({$variant:e,$color:t})=>e&&(({variant:e="primary",color:t="brand"})=>{switch(e){case"primary":{let e="neutral"===t?"invert-primary":t,a="neutral"===t?"subtle":"emphasis";return s.css`
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
            `}case"secondary":{let e="neutral"===t?"primary":t,a="neutral"===t?"var(--bg-subtle-primary-hover, #f6f7f9)":`var(--bg-subtle-${t}-default)`;return s.css`
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
            `}case"tertiary":{let e="neutral"===t?"primary":t,a="neutral"===t?"var(--bg-subtle-primary-hover, #f6f7f9)":`var(--bg-subtle-${t}-default)`;return s.css`
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
            ${x[e]}
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

            ${f[t]}
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
`,h=s.styled.div`
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
`,m=(0,l.forwardRef)((e,t)=>{let{variant:a="primary",color:i="brand",size:s="medium",icon:o=null,iconSize:d="20",iconPosition:p="left",className:c="",disabled:x=!1,loading:u=!1,style:f={},onClick:m=()=>{},fullWidth:v=!1,type:b="button",ariaLabel:y,tooltip:$="",tabIndex:w=0,onMouseEnter:z=()=>{},onMouseLeave:E=()=>{},children:k="",buttonProps:j,showAnimationOnClick:R=!0,...I}=e,C=x||u,N=(0,n.default)(c),A=(0,l.useId)();return l.default.createElement(g,{ref:t,onClick:e=>{C?e.preventDefault():m(e)},className:N,style:f,$isLoading:u,disabled:C,$variant:a,$color:i,$size:s,$fullWidth:v,$iconPosition:p,type:b,title:$,tabIndex:w,"data-testid":"testid-button",onMouseEnter:z,onMouseLeave:E,"aria-label":y,"aria-labelledby":!y&&k?`button-content-${A}`:void 0,$showAnimationOnClick:R,...j,...I},o&&!u&&l.default.createElement(r.Icon_default,{name:o,color:"inherit",size:d}),u&&l.default.createElement(r.Icon_default,{name:"loading",color:"inherit",size:d,loading:u}),k&&l.default.createElement(h,{id:`button-content-${A}`,$iconPosition:!!o&&p,$variant:a},k))});s.styled.div`
    display: flex;
    align-items: center;
    gap: var(--spacing-8px, 8px);
`;var v=(0,l.forwardRef)(({variant:e="primary",color:t="brand",size:a="medium",icon:i=null,iconSize:s,className:o="",disabled:d=!1,loading:p=!1,style:c={},onClick:x=()=>{},fullWidth:f,type:h="button",ariaLabel:m="",tooltip:v="",tabIndex:b=0,onMouseEnter:y=()=>{},onMouseLeave:$=()=>{},buttonProps:w,showAnimationOnClick:z=!0},E)=>{let k=(0,n.default)(o),j=s||u[a];return l.default.createElement(g,{ref:E,onClick:e=>{d?e.preventDefault():x(e)},className:k,style:c,$isLoading:p,disabled:d||p,$variant:e,$color:t,$size:a,$fullWidth:f,type:h,role:"button","aria-label":m||i,title:v,tabIndex:b,onMouseEnter:y,onMouseLeave:$,$isIconButton:!0,$showAnimationOnClick:z,...w,"data-testid":"testid-iconbutton"},i&&!p&&l.default.createElement(r.Icon_default,{name:i,color:"inherit",size:j}),p&&l.default.createElement(r.Icon_default,{name:"loading",color:"inherit",size:j,loading:p}))});e.s(["Button_default",0,m,"IconButton_default",0,v])},397681,e=>{"use strict";var t=e.i(893347),a=e.i(773892),i=e.i(364072),r=e.i(189101),n=e.i(824511),l=e.i(88653),s=e.i(271645),o=e.i(997053),d=(0,o.styled)(n.m.div)`
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
`,p=o.styled.div`
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
`,x=o.styled.h2`
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
`,u=o.styled.div`
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
`,f=o.styled.div`
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
`;var g=o.styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: var(--spacing-8px, 8px);

    ${({$justifyContent:e})=>e&&o.css`
            justify-content: ${e};
        `}
`,h=o.styled.div`
    width: 100%;
    position: relative;

    img {
        width: 100%;
        border-radius: var(--corner-radius-8px, 8px);
    }
`,m={slide:{variants:{hidden:{opacity:0,y:-50},visible:{opacity:1,y:0},exit:{opacity:0,y:50}},transition:{duration:.3}},"slide-reverse":{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0},exit:{opacity:0,y:-50}},transition:{duration:.3}},fade:{variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},transition:{duration:.3}},emanate:{}},v=(0,s.forwardRef)(({width:e,height:t,minHeight:a,minWidth:i,maxHeight:r,maxWidth:n,mobileBottomFullWidth:l,modalPadding:o,border:p,children:c,...x},u)=>s.default.createElement(d,{ref:u,$width:e,$height:t,$minHeight:a,$minWidth:i,$maxHeight:r,$maxWidth:n,$mobileBottomFullWidth:l,$modalPadding:o,$border:p,...x},c)),b=(0,s.forwardRef)(({justifyContent:e,children:t},a)=>s.default.createElement(g,{ref:a,$justifyContent:e},t)),y=(0,s.forwardRef)(({overflow:e,children:t,...a},i)=>s.default.createElement(p,{ref:i,$overflow:e,...a},t)),$=(0,s.forwardRef)(({children:e,...t},a)=>s.default.createElement(h,{ref:a,...t},e)),w=(0,s.forwardRef)(({children:e,...t},a)=>s.default.createElement(x,{ref:a,...t},e)),z=(0,s.forwardRef)(({children:e,...t},a)=>s.default.createElement(u,{ref:a,...t},e)),E=(0,s.forwardRef)(({modalBodyMargin:e,children:t,...a},i)=>s.default.createElement(f,{ref:i,$modalBodyMargin:e,...a},t)),k=(0,s.forwardRef)(({...e},t)=>s.default.createElement(c,{ref:t,...e})),j=(0,s.forwardRef)((e,n)=>{let{isOpen:o=!0,banner:c=null,title:v=null,description:b=null,body:y=null,action:$=null,height:w="auto",width:z="500px",minHeight:E=null,minWidth:k=null,maxHeight:j="95vh",maxWidth:R="95vw",onHide:I=()=>{},onClose:C=()=>{},mobileBottomFullWidth:N=!1,modalPadding:A="20px",border:S="1px solid var(--border-subtle-primary-default, #e1e5ea)",modalBodyMargin:T=null,showCloseButton:B=!1,hideOnClickAway:H=!1,blurBackground:M=!1,animatePresence:P="fade",clickEvent:O=null,children:_=null,shouldFocusOnFirstElement:W=!0,shouldDisableScroll:L=!0,overflow:D="visible",className:U}=e,X=(0,s.useRef)(null),Y=()=>{"function"==typeof I&&I(),"function"==typeof C&&C()};(0,s.useImperativeHandle)(n,()=>X.current),(0,a.useDisableBodyScroll_default)(o),(0,a.useKeyboardEvent_default)({onKeyPress:()=>{H&&Y()},keyCodes:["Escape"],config:{shouldDetect:o}});let F=(0,s.useId)(),K=(0,s.useMemo)(()=>{var e,t;return e=P,t=O,"emanate"===e?"number"==typeof(null==t?void 0:t.clientX)&&"number"==typeof(null==t?void 0:t.clientY)?((e,t)=>{let a,i;try{a=e-window.innerWidth/2,i=t-window.innerHeight/2}catch(e){a=0,i=0}return{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{scale:0,opacity:0,x:a,y:i},visible:{scale:1,opacity:1,x:0,y:0},exit:{scale:0,opacity:0,x:a,y:i}},transition:{duration:.3}}})(t.clientX,t.clientY):{}:{initial:"hidden",animate:"visible",exit:"exit",...e?m[e]:{}}},[P,O]),G=(0,s.useMemo)(()=>(({isOpen:e,animatePresence:t,clickEvent:a})=>!!e&&("emanate"!==t||"number"==typeof(null==a?void 0:a.clientX)&&"number"==typeof(null==a?void 0:a.clientY)))({isOpen:o,animatePresence:P,clickEvent:O}),[o,P,O]);return s.default.createElement(i.motion_default,null,s.default.createElement(l.AnimatePresence,null,G&&s.default.createElement(t.Overlay_default,{shouldDisableScroll:L,onOverlayClick:()=>{H&&Y()},shouldTintOverlay:!0,shouldBlurOverlay:M,shouldCenterContent:!0,"data-testid":"testid-modalwrapper",className:U,animationDuration:.3,shouldFocusOnFirstElement:W},s.default.createElement(d,{onClick:e=>e.stopPropagation(),ref:X,$width:z,$height:w,$minHeight:E,$minWidth:k,$maxHeight:j,$maxWidth:R,$mobileBottomFullWidth:N,$modalPadding:A,$border:S,"aria-labelledby":`modal-title-${F}`,"aria-describedby":`modal-description-${F}`,"aria-modal":"true",role:"dialog","data-testid":"testid-modal",...K},s.default.createElement(p,{$overflow:D},B&&s.default.createElement(g,{$justifyContent:"end"},s.default.createElement(r.IconButton_default,{onClick:Y,size:"small",variant:"tertiary",color:"neutral",icon:"close",ariaLabel:"Close",buttonProps:{autoFocus:!0}})),c&&s.default.createElement(h,null,c),v&&s.default.createElement(x,{id:`modal-title-${F}`},v),b&&s.default.createElement(u,{id:`modal-description-${F}`},b),y&&s.default.createElement(f,{$modalBodyMargin:T},y),_&&s.default.createElement(f,{$modalBodyMargin:T},_)),$&&s.default.createElement(g,null,$)))))});j.Modal=v,j.Main=y,j.Banner=$,j.Title=w,j.Description=z,j.Body=E,j.Action=b,j.Divider=k,e.s(["NSModal",0,j],397681)},129763,e=>{"use strict";var t=e.i(843476),a=e.i(271645),i=e.i(397681),r=e.i(22453),n=e.i(652612),l=e.i(648198);let s={2025:{pdfUrl:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/450db274a1b94c4393e9eca1745d0c6d.pdf",coverImage:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/4b961c11f6ce4ba6ba7f295ea6e33ad5.avif",title:"Official Internship Report 2025",overline:"Released: Internship Report 2025",heading:"93.07% of students secured internships by their second year.",sub:"Certified by B2K Analytics, IIM Ahmedabad’s placement auditors."},2026:{pdfUrl:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/79ff75f20a7b4da385427575309df7d8.pdf",coverImage:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/9117a937c1a94bd08bbf73e9d05f3659.webp",title:"Official Internship Report 2026",overline:"Released: Internship Report 2026",heading:"98.3% of the Pune batch secured internships by their second year.",sub:"Certified by Sorab S. Engineer & Co. — placement auditor for multiple IIMs."}};e.s(["default",0,function({report:e,isOpen:o,onClose:d}){let[p]=(0,a.useState)(()=>"pdfViewerEnabled"in navigator&&navigator.pdfViewerEnabled),{isLoggedIn:c}=(0,n.useLoggedIn)(),x=s[e];return(0,t.jsx)(i.NSModal,{isOpen:o,onClose:d,hideOnClickAway:!0,showCloseButton:!1,width:"760px",border:"none",animatePresence:"fade",overflow:"hidden",modalPadding:"0",children:o&&(0,t.jsxs)("div",{className:"grauity-portal-font font-ds relative flex flex-col text-left",role:"document","aria-label":x.title,children:[(0,t.jsx)("button",{type:"button",onClick:d,"aria-label":"Close report",className:"absolute right-3 top-3 z-10 flex size-9 cursor-pointer items-center justify-center rounded-full bg-white/90 text-[#16191d] shadow transition hover:bg-[#f6f7f9] focus-visible:outline-2 focus-visible:outline-[#0673f9]",children:(0,t.jsx)(l.CloseIcon,{className:"size-4"})}),(0,t.jsxs)("div",{className:"flex h-[80svh] min-h-0 flex-col",children:[p?(0,t.jsx)("iframe",{src:x.pdfUrl,title:x.title,className:"min-h-0 w-full flex-1 border-0"}):(0,t.jsxs)("div",{className:"flex min-h-0 flex-1 flex-col items-center justify-center gap-5 overflow-y-auto px-6 py-10 text-center",children:[(0,t.jsx)("img",{src:x.coverImage,alt:"",width:320,height:286,className:"h-[132px] w-auto object-contain"}),(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsx)("div",{className:"text-[10.5px] font-semibold uppercase leading-[120%] tracking-[1.6px] text-[#de5a02]",children:x.overline}),(0,t.jsx)("div",{className:"text-[18.1px] font-semibold leading-[130%] text-[#16191d]",children:x.heading}),(0,t.jsx)("div",{className:"text-[13.3px] font-medium leading-[150%] text-[#5b6271]",children:x.sub})]}),(0,t.jsxs)("div",{className:"flex w-full flex-col items-center gap-2",children:[(0,t.jsxs)("a",{href:x.pdfUrl,target:"_blank",rel:"noopener",className:"flex w-full max-w-[320px] items-center justify-center gap-2 rounded-[8px] bg-[#16191d] px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-[#0b0c0e]",children:["Open the report",(0,t.jsx)(l.ArrowRightIcon,{className:"size-5 shrink-0"})]}),(0,t.jsx)("a",{href:x.pdfUrl,download:!0,className:"text-[13.3px] font-semibold text-[#5b6271] underline underline-offset-2 transition hover:text-[#16191d]",children:"Download PDF"})]})]}),(0,t.jsx)("div",{className:"shrink-0 border-t border-[#e1e5ea] p-4",children:(0,t.jsx)("a",{href:c?r.EXTERNAL_LINKS.nsatTimeline:"https://www.newtonschool.co/newton-school-of-technology-nst/apply",className:"mx-auto flex w-fit items-center justify-center rounded-[8px] bg-[#0673f9] px-8 py-3 text-[16px] font-semibold text-white transition-colors hover:bg-[#005ed1]",children:c?"Resume Application":"Apply For NST"})})]})]})})}])}]);