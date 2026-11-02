(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,703109,968081,e=>{"use strict";var t=e.i(997053),i=e.i(271645),a={DISPLAY_BD_D1:"display-bd-d1",DISPLAY_BD_D2:"display-bd-d2",DISPLAY_BD_D3:"display-bd-d3",HEADING_SB_H1:"heading-sb-h1",HEADING_SB_H2:"heading-sb-h2",HEADING_SB_H3:"heading-sb-h3",HEADING_SB_H4:"heading-sb-h4",HEADING_SB_H5:"heading-sb-h5",HEADING_SB_H6:"heading-sb-h6",PARAGRAPH_SB_P1:"paragraph-sb-p1",PARAGRAPH_SB_P2:"paragraph-sb-p2",PARAGRAPH_SB_P3:"paragraph-sb-p3",PARAGRAPH_SB_P4:"paragraph-sb-p4",PARAGRAPH_SB_L1:"paragraph-sb-l1",PARAGRAPH_SB_L2:"paragraph-sb-l2",PARAGRAPH_MD_P1:"paragraph-md-p1",PARAGRAPH_MD_P2:"paragraph-md-p2",PARAGRAPH_MD_P3:"paragraph-md-p3",PARAGRAPH_MD_P4:"paragraph-md-p4",PARAGRAPH_MD_C1:"paragraph-md-c1",PARAGRAPH_MD_L1:"paragraph-md-l1",PARAGRAPH_MD_L2:"paragraph-md-l2",OVERLINE_SB_OL1:"overline-sb-ol1",OVERLINE_SB_OL2:"overline-sb-ol2",ACTION_SB_P1:"action-sb-p1",ACTION_SB_P2:"action-sb-p2",ACTION_SB_LK1:"action-sb-lk1"};Object.freeze(Object.values(a));var r={H1:"h1",H2:"h2",H3:"h3",H4:"h4",H5:"h5",H6:"h6",P:"p",SPAN:"span",DIV:"div",LABEL:"label",CAPTION:"caption",CODE:"code",AUTO:"auto"};Object.freeze(Object.values(r));var n={[a.DISPLAY_BD_D1]:t.css`
        font-size: var(--font-size-fs-120, 76px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-140, 92px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[a.DISPLAY_BD_D2]:t.css`
        font-size: var(--font-size-fs-110, 64px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-130, 76px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[a.DISPLAY_BD_D3]:t.css`
        font-size: var(--font-size-fs-100, 52px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-120, 64px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[a.HEADING_SB_H1]:t.css`
        font-size: var(--font-size-fs-90, 40px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-110, 48px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[a.HEADING_SB_H2]:t.css`
        font-size: var(--font-size-fs-80, 36px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-100, 42px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[a.HEADING_SB_H3]:t.css`
        font-size: var(--font-size-fs-70, 28px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-90, 32px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[a.HEADING_SB_H4]:t.css`
        font-size: var(--font-size-fs-60, 24px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[a.HEADING_SB_H5]:t.css`
        font-size: var(--font-size-fs-50, 20px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-60, 24px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[a.HEADING_SB_H6]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-40, 20px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[a.PARAGRAPH_SB_P1]:t.css`
        font-size: var(--font-size-fs-40, 18px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[a.PARAGRAPH_SB_P2]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[a.PARAGRAPH_SB_P3]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-10, 0.016px);
    `,[a.PARAGRAPH_SB_P4]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-30, 18px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[a.PARAGRAPH_SB_L1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,[a.PARAGRAPH_SB_L2]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-10, 14px);
        letter-spacing: var(--letter-spacing-ls-40, 0.25px);
    `,[a.PARAGRAPH_MD_P1]:t.css`
        font-size: var(--font-size-fs-40, 18px);
        font-weight: var(--font-weight-fw-10, 500);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[a.PARAGRAPH_MD_P2]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[a.PARAGRAPH_MD_P3]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[a.PARAGRAPH_MD_P4]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-30, 18px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[a.PARAGRAPH_MD_C1]:t.css`
        font-family: 'Fira Code';
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-00, 450);
        line-height: var(--line-height-lh-40, 20px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[a.PARAGRAPH_MD_L1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-60, 0.5px);
    `,[a.PARAGRAPH_MD_L2]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-10, 14px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,[a.OVERLINE_SB_OL1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-70, 1.6px);
        text-transform: uppercase;
    `,[a.OVERLINE_SB_OL2]:t.css`
        font-size: var(--font-size-fs-00, 11px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-00, 12px);
        letter-spacing: var(--letter-spacing-ls-80, 2px);
        text-transform: uppercase;
    `,[a.ACTION_SB_P1]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[a.ACTION_SB_P2]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,[a.ACTION_SB_LK1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-80, 2px);
        text-transform: uppercase;
    `},s={[a.DISPLAY_BD_D1]:r.H1,[a.DISPLAY_BD_D2]:r.H2,[a.DISPLAY_BD_D3]:r.H3,[a.HEADING_SB_H1]:r.H1,[a.HEADING_SB_H2]:r.H2,[a.HEADING_SB_H3]:r.H3,[a.HEADING_SB_H4]:r.H4,[a.HEADING_SB_H5]:r.H5,[a.HEADING_SB_H6]:r.H6,[a.PARAGRAPH_SB_P1]:r.P,[a.PARAGRAPH_SB_P2]:r.P,[a.PARAGRAPH_SB_P3]:r.P,[a.PARAGRAPH_SB_P4]:r.P,[a.PARAGRAPH_SB_L1]:r.LABEL,[a.PARAGRAPH_SB_L2]:r.LABEL,[a.PARAGRAPH_MD_P1]:r.P,[a.PARAGRAPH_MD_P2]:r.P,[a.PARAGRAPH_MD_P3]:r.P,[a.PARAGRAPH_MD_P4]:r.P,[a.PARAGRAPH_MD_C1]:r.CODE,[a.PARAGRAPH_MD_L1]:r.LABEL,[a.PARAGRAPH_MD_L2]:r.LABEL,[a.OVERLINE_SB_OL1]:r.P,[a.OVERLINE_SB_OL2]:r.P,[a.ACTION_SB_P1]:r.SPAN,[a.ACTION_SB_P2]:r.SPAN,[a.ACTION_SB_LK1]:r.SPAN},l=t.styled.p.attrs(e=>({as:e.as||"p"}))`
    margin: 0;
    padding: 0;

    font-family: var(--font-family, 'Mona Sans');
    color: var(--text-emphasis-primary-default, #16191d);

    ${({$variant:e})=>t.css`
            ${e?n[e]:n[a.PARAGRAPH_MD_P1]}
        `};

    ${({$textAlign:e})=>e&&`text-align: ${e};`}
    ${({$textTransform:e})=>e&&`text-transform: ${e};`}
    ${({$fontSize:e})=>e&&`font-size: ${e};`}
    ${({$color:e})=>e&&`color: ${e};`};
`,o=({variant:e="paragraph-md-p1",as:t="auto",color:a="var(--text-emphasis-primary-default, #16191d)",textAlign:n=null,textTransform:o=null,fontSize:d=null,children:c="",className:f="",title:u=null})=>{let p=t===r.AUTO?s[e]:t;return i.default.createElement(l,{$variant:e,as:p,$color:a,$textAlign:n,$textTransform:o,$fontSize:d,className:f,title:u},c)};e.s(["Typography_default",0,o],968081),e.s(["default",0,o],703109)},830249,e=>{"use strict";var t=e.i(271645);e.s(["useParentUrl",0,function(){let[e,i]=(0,t.useState)("");return(0,t.useEffect)(()=>{function e(e){let t=e.data;t&&"object"==typeof t&&"PARENT_URL"===t.type&&"string"==typeof t.url&&i(t.url)}return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]),e}])},397681,e=>{"use strict";var t=e.i(893347),i=e.i(773892),a=e.i(364072),r=e.i(189101),n=e.i(824511),s=e.i(88653),l=e.i(271645),o=e.i(997053),d=(0,o.styled)(n.m.div)`
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
`,c=o.styled.div`
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
`,f=o.styled.div`
    width: 100%;
    height: var(--spacing-1px, 1px);
    background: var(--border-subtle-primary-default, #e1e5ea);
`,u=o.styled.h2`
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
`,p=o.styled.div`
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
`;var g=o.styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: var(--spacing-8px, 8px);

    ${({$justifyContent:e})=>e&&o.css`
            justify-content: ${e};
        `}
`,m=o.styled.div`
    width: 100%;
    position: relative;

    img {
        width: 100%;
        border-radius: var(--corner-radius-8px, 8px);
    }
`,v={slide:{variants:{hidden:{opacity:0,y:-50},visible:{opacity:1,y:0},exit:{opacity:0,y:50}},transition:{duration:.3}},"slide-reverse":{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0},exit:{opacity:0,y:-50}},transition:{duration:.3}},fade:{variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},transition:{duration:.3}},emanate:{}},x=(0,l.forwardRef)(({width:e,height:t,minHeight:i,minWidth:a,maxHeight:r,maxWidth:n,mobileBottomFullWidth:s,modalPadding:o,border:c,children:f,...u},p)=>l.default.createElement(d,{ref:p,$width:e,$height:t,$minHeight:i,$minWidth:a,$maxHeight:r,$maxWidth:n,$mobileBottomFullWidth:s,$modalPadding:o,$border:c,...u},f)),_=(0,l.forwardRef)(({justifyContent:e,children:t},i)=>l.default.createElement(g,{ref:i,$justifyContent:e},t)),b=(0,l.forwardRef)(({overflow:e,children:t,...i},a)=>l.default.createElement(c,{ref:a,$overflow:e,...i},t)),y=(0,l.forwardRef)(({children:e,...t},i)=>l.default.createElement(m,{ref:i,...t},e)),P=(0,l.forwardRef)(({children:e,...t},i)=>l.default.createElement(u,{ref:i,...t},e)),w=(0,l.forwardRef)(({children:e,...t},i)=>l.default.createElement(p,{ref:i,...t},e)),A=(0,l.forwardRef)(({modalBodyMargin:e,children:t,...i},a)=>l.default.createElement(h,{ref:a,$modalBodyMargin:e,...i},t)),S=(0,l.forwardRef)(({...e},t)=>l.default.createElement(f,{ref:t,...e})),R=(0,l.forwardRef)((e,n)=>{let{isOpen:o=!0,banner:f=null,title:x=null,description:_=null,body:b=null,action:y=null,height:P="auto",width:w="500px",minHeight:A=null,minWidth:S=null,maxHeight:R="95vh",maxWidth:E="95vw",onHide:C=()=>{},onClose:j=()=>{},mobileBottomFullWidth:D=!1,modalPadding:N="20px",border:z="1px solid var(--border-subtle-primary-default, #e1e5ea)",modalBodyMargin:I=null,showCloseButton:O=!1,hideOnClickAway:H=!1,blurBackground:$=!1,animatePresence:L="fade",clickEvent:M=null,children:B=null,shouldFocusOnFirstElement:k=!0,shouldDisableScroll:G=!0,overflow:T="visible",className:K}=e,Y=(0,l.useRef)(null),U=()=>{"function"==typeof C&&C(),"function"==typeof j&&j()};(0,l.useImperativeHandle)(n,()=>Y.current),(0,i.useDisableBodyScroll_default)(o),(0,i.useKeyboardEvent_default)({onKeyPress:()=>{H&&U()},keyCodes:["Escape"],config:{shouldDetect:o}});let F=(0,l.useId)(),W=(0,l.useMemo)(()=>{var e,t;return e=L,t=M,"emanate"===e?"number"==typeof(null==t?void 0:t.clientX)&&"number"==typeof(null==t?void 0:t.clientY)?((e,t)=>{let i,a;try{i=e-window.innerWidth/2,a=t-window.innerHeight/2}catch(e){i=0,a=0}return{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{scale:0,opacity:0,x:i,y:a},visible:{scale:1,opacity:1,x:0,y:0},exit:{scale:0,opacity:0,x:i,y:a}},transition:{duration:.3}}})(t.clientX,t.clientY):{}:{initial:"hidden",animate:"visible",exit:"exit",...e?v[e]:{}}},[L,M]),V=(0,l.useMemo)(()=>(({isOpen:e,animatePresence:t,clickEvent:i})=>!!e&&("emanate"!==t||"number"==typeof(null==i?void 0:i.clientX)&&"number"==typeof(null==i?void 0:i.clientY)))({isOpen:o,animatePresence:L,clickEvent:M}),[o,L,M]);return l.default.createElement(a.motion_default,null,l.default.createElement(s.AnimatePresence,null,V&&l.default.createElement(t.Overlay_default,{shouldDisableScroll:G,onOverlayClick:()=>{H&&U()},shouldTintOverlay:!0,shouldBlurOverlay:$,shouldCenterContent:!0,"data-testid":"testid-modalwrapper",className:K,animationDuration:.3,shouldFocusOnFirstElement:k},l.default.createElement(d,{onClick:e=>e.stopPropagation(),ref:Y,$width:w,$height:P,$minHeight:A,$minWidth:S,$maxHeight:R,$maxWidth:E,$mobileBottomFullWidth:D,$modalPadding:N,$border:z,"aria-labelledby":`modal-title-${F}`,"aria-describedby":`modal-description-${F}`,"aria-modal":"true",role:"dialog","data-testid":"testid-modal",...W},l.default.createElement(c,{$overflow:T},O&&l.default.createElement(g,{$justifyContent:"end"},l.default.createElement(r.IconButton_default,{onClick:U,size:"small",variant:"tertiary",color:"neutral",icon:"close",ariaLabel:"Close",buttonProps:{autoFocus:!0}})),f&&l.default.createElement(m,null,f),x&&l.default.createElement(u,{id:`modal-title-${F}`},x),_&&l.default.createElement(p,{id:`modal-description-${F}`},_),b&&l.default.createElement(h,{$modalBodyMargin:I},b),B&&l.default.createElement(h,{$modalBodyMargin:I},B)),y&&l.default.createElement(g,null,y)))))});R.Modal=x,R.Main=b,R.Banner=y,R.Title=P,R.Description=w,R.Body=A,R.Action=_,R.Divider=S,e.s(["NSModal",0,R],397681)},914984,e=>{"use strict";var t=e.i(843476);e.s(["ArrowRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M5 12h14m0 0-6-6m6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronLeftIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m15 6-6 6 6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m9 6 6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"CloseIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M6 6l12 12M18 6 6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"RadioUncheckedIcon",0,function({className:e}){return(0,t.jsx)("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":!0,focusable:"false",className:e,children:(0,t.jsx)("path",{d:"M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 14.6 5.4 18.3333 10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667ZM10 16.6667C6.31667 16.6667 3.33333 13.6833 3.33333 10C3.33333 6.31667 6.31667 3.33333 10 3.33333C13.6833 3.33333 16.6667 6.31667 16.6667 10C16.6667 13.6833 13.6833 16.6667 10 16.6667Z",fill:"currentColor"})})},"SparkIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M12 2c.45 4.2 2.3 6.05 6.5 6.5-4.2.45-6.05 2.3-6.5 6.5-.45-4.2-2.3-6.05-6.5-6.5C9.7 8.05 11.55 6.2 12 2z"})})},"YouTubePlayIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 68 48",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("path",{d:"M66.5 7.5a8.5 8.5 0 0 0-6-6C55.2 0 34 0 34 0S12.8 0 7.5 1.5a8.5 8.5 0 0 0-6 6A89 89 0 0 0 0 24a89 89 0 0 0 1.5 16.5 8.5 8.5 0 0 0 6 6C12.8 48 34 48 34 48s21.2 0 26.5-1.5a8.5 8.5 0 0 0 6-6A89 89 0 0 0 68 24a89 89 0 0 0-1.5-16.5z",fill:"#FF0000"}),(0,t.jsx)("path",{d:"M27.2 34.29 44.85 24 27.2 13.71v20.58z",fill:"#fff"})]})}])},818581,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"useMergedRef",{enumerable:!0,get:function(){return r}});let a=e.r(271645);function r(e,t){let i=(0,a.useRef)(null),r=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=i.current;e&&(i.current=null,e());let t=r.current;t&&(r.current=null,t())}else e&&(i.current=n(e,a)),t&&(r.current=n(t,a))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let i=e(t);return"function"==typeof i?i:()=>e(null)}}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},488143,(e,t,i)=>{"use strict";function a({widthInt:e,heightInt:t,blurWidth:i,blurHeight:r,blurDataURL:n,objectFit:s}){let l=i?40*i:e,o=r?40*r:t,d=l&&o?`viewBox='0 0 ${l} ${o}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImageBlurSvg",{enumerable:!0,get:function(){return a}})},987690,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a={VALID_LOADERS:function(){return n},imageConfigDefault:function(){return s}};for(var r in a)Object.defineProperty(i,r,{enumerable:!0,get:a[r]});let n=["default","imgix","cloudinary","akamai","custom"],s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},908927,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(233525);let a=e.r(543369),r=e.r(488143),n=e.r(987690),s=["-moz-initial","fill","none","scale-down",void 0];function l(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:i=!1,priority:c=!1,preload:f=!1,loading:u,className:p,quality:h,width:g,height:m,fill:v=!1,style:x,overrideSrc:_,onLoad:b,onLoadingComplete:y,placeholder:P="empty",blurDataURL:w,fetchPriority:A,decoding:S="async",layout:R,objectFit:E,objectPosition:C,lazyBoundary:j,lazyRoot:D,...N},z){var I;let O,H,$,{imgConf:L,showAltText:M,blurComplete:B,defaultLoader:k}=z,G=L||n.imageConfigDefault;if("allSizes"in G)O=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t),i=G.qualities?.sort((e,t)=>e-t);O={...G,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===k)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let T=N.loader||k;delete N.loader,delete N.srcSet;let K="__next_img_default"in T;if(K){if("custom"===O.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=T;T=t=>{let{config:i,...a}=t;return e(a)}}if(R){"fill"===R&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(x={...x,...e});let i={responsive:"100vw",fill:"100vw"}[R];i&&!t&&(t=i)}let Y="",U=o(g),F=o(m);if((I=e)&&"object"==typeof I&&(l(I)||void 0!==I.src)){let t=l(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(H=t.blurWidth,$=t.blurHeight,w=w||t.blurDataURL,Y=t.src,!v)if(U||F){if(U&&!F){let e=U/t.width;F=Math.round(t.height*e)}else if(!U&&F){let e=F/t.height;U=Math.round(t.width*e)}}else U=t.width,F=t.height}let W=!c&&!f&&("lazy"===u||void 0===u);(!(e="string"==typeof e?e:Y)||e.startsWith("data:")||e.startsWith("blob:"))&&(i=!0,W=!1),O.unoptimized&&(i=!0),K&&!O.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(i=!0);let V=o(h),q=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:C}:{},M?{}:{color:"transparent"},x),J=B||"empty"===P?null:"blur"===P?`url("data:image/svg+xml;charset=utf-8,${(0,r.getImageBlurSvg)({widthInt:U,heightInt:F,blurWidth:H,blurHeight:$,blurDataURL:w||"",objectFit:q.objectFit})}")`:`url("${P}")`,X=s.includes(q.objectFit)?"fill"===q.objectFit?"100% 100%":"cover":q.objectFit,Q=J?{backgroundSize:X,backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},Z=function({config:e,src:t,unoptimized:i,width:r,quality:n,sizes:s,loader:l}){if(i){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,a.getDeploymentId)();if(e){let i=t.indexOf("?");if(-1!==i){let a=new URLSearchParams(t.slice(i+1));a.get("dpl")||(a.append("dpl",e),t=t.slice(0,i)+"?"+a.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:o,kind:d}=function({deviceSizes:e,allSizes:t},i,a){if(a){let i=/(^|\s)(1?\d?\d)vw/g,r=[];for(let e;e=i.exec(a);)r.push(parseInt(e[2]));if(r.length){let i=.01*Math.min(...r);return{widths:t.filter(t=>t>=e[0]*i),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof i?{widths:e,kind:"w"}:{widths:[...new Set([i,2*i].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,r,s),c=o.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:o.map((i,a)=>`${l({config:e,src:t,quality:n,width:i})} ${"w"===d?i:a+1}${d}`).join(", "),src:l({config:e,src:t,quality:n,width:o[c]})}}({config:O,src:e,unoptimized:i,width:U,quality:V,sizes:t,loader:T}),ee=W?"lazy":u;return{props:{...N,loading:ee,fetchPriority:A,width:U,height:F,decoding:S,className:p,style:{...q,...Q},sizes:Z.sizes,srcSet:Z.srcSet,src:_||Z.src},meta:{unoptimized:i,preload:f||c,placeholder:P,fill:v}}}},898879,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return l}});let a=e.r(271645),r="u"<typeof window,n=r?()=>{}:a.useLayoutEffect,s=r?()=>{}:a.useEffect;function l(e){let{headManager:t,reduceComponentsToState:i}=e;function l(){if(t&&t.mountedInstances){let e=a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(i(e))}}return r&&(t?.mountedInstances?.add(e.children),l()),n(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),n(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),s(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},325633,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a={default:function(){return g},defaultHead:function(){return f}};for(var r in a)Object.defineProperty(i,r,{enumerable:!0,get:a[r]});let n=e.r(555682),s=e.r(190809),l=e.r(843476),o=s._(e.r(271645)),d=n._(e.r(898879)),c=e.r(742732);function f(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(233525);let p=["name","httpEquiv","charSet","itemProp"];function h(e){let t,i,a,r;return e.reduce(u,[]).reverse().concat(f().reverse()).filter((t=new Set,i=new Set,a=new Set,r={},e=>{let n=!0,s=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){s=!0;let i=e.key.slice(e.key.indexOf("$")+1);t.has(i)?n=!1:t.add(i)}switch(e.type){case"title":case"base":i.has(e.type)?n=!1:i.add(e.type);break;case"meta":for(let t=0,i=p.length;t<i;t++){let i=p[t];if(e.props.hasOwnProperty(i))if("charSet"===i)a.has(i)?n=!1:a.add(i);else{let t=e.props[i],a=r[i]||new Set;("name"!==i||!s)&&a.has(t)?n=!1:(a.add(t),r[i]=a)}}}return n})).reverse().map((e,t)=>{let i=e.key||t;return o.default.cloneElement(e,{key:i})})}let g=function({children:e}){let t=(0,o.useContext)(c.HeadManagerContext);return(0,l.jsx)(d.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},918556,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"ImageConfigContext",{enumerable:!0,get:function(){return n}});let a=e.r(555682)._(e.r(271645)),r=e.r(987690),n=a.default.createContext(r.imageConfigDefault)},65856,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"RouterContext",{enumerable:!0,get:function(){return a}});let a=e.r(555682)._(e.r(271645)).default.createContext(null)},670965,(e,t,i)=>{"use strict";function a(e,t){let i=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e,t.qualities[0]):i}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"findClosestQuality",{enumerable:!0,get:function(){return a}})},1948,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return s}});let a=e.r(670965),r=e.r(543369);function n({config:e,src:t,width:i,quality:s}){let l=(0,r.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let i=new URLSearchParams(t.slice(e+1)),a=i.get("dpl");if(a){l=a,i.delete("dpl");let r=i.toString();t=t.slice(0,e)+(r?"?"+r:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let o=(0,a.findClosestQuality)(s,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${i}&q=${o}${t.startsWith("/")&&l?`&dpl=${l}`:""}`}n.__next_img_default=!0;let s=n},605500,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"Image",{enumerable:!0,get:function(){return b}});let a=e.r(555682),r=e.r(190809),n=e.r(843476),s=r._(e.r(271645)),l=a._(e.r(174080)),o=a._(e.r(325633)),d=e.r(908927),c=e.r(987690),f=e.r(918556);e.r(233525);let u=e.r(65856),p=a._(e.r(1948)),h=e.r(818581),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/nst-website-2027/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,i,a,r,n,s){let l=e?.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&r(!0),i?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,r=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}})}a?.current&&a.current(e)}}))}function v(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let x=(0,s.forwardRef)(({src:e,srcSet:t,sizes:i,height:a,width:r,decoding:l,className:o,style:d,fetchPriority:c,placeholder:f,loading:u,unoptimized:p,fill:g,onLoadRef:x,onLoadingCompleteRef:_,setBlurComplete:b,setShowAltText:y,sizesInput:P,onLoad:w,onError:A,...S},R)=>{let E=(0,s.useCallback)(e=>{e&&(A&&(e.src=e.src),e.complete&&m(e,f,x,_,b,p,P))},[e,f,x,_,b,A,p,P]),C=(0,h.useMergedRef)(R,E);return(0,n.jsx)("img",{...S,...v(c),loading:u,width:r,height:a,decoding:l,"data-nimg":g?"fill":"1",className:o,style:d,sizes:i,srcSet:t,src:e,ref:C,onLoad:e=>{m(e.currentTarget,f,x,_,b,p,P)},onError:e=>{y(!0),"empty"!==f&&b(!0),A&&A(e)}})});function _({isAppRouter:e,imgAttributes:t}){let i={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...v(t.fetchPriority)};return e&&l.default.preload?(l.default.preload(t.src,i),null):(0,n.jsx)(o.default,{children:(0,n.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...i},"__nimg-"+t.src+t.srcSet+t.sizes)})}let b=(0,s.forwardRef)((e,t)=>{let i=(0,s.useContext)(u.RouterContext),a=(0,s.useContext)(f.ImageConfigContext),r=(0,s.useMemo)(()=>{let e=g||a||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t),r=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i,qualities:r,localPatterns:"u"<typeof window?a?.localPatterns:e.localPatterns}},[a]),{onLoad:l,onLoadingComplete:o}=e,h=(0,s.useRef)(l);(0,s.useEffect)(()=>{h.current=l},[l]);let m=(0,s.useRef)(o);(0,s.useEffect)(()=>{m.current=o},[o]);let[v,b]=(0,s.useState)(!1),[y,P]=(0,s.useState)(!1),{props:w,meta:A}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:r,blurComplete:v,showAltText:y});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{...w,unoptimized:A.unoptimized,placeholder:A.placeholder,fill:A.fill,onLoadRef:h,onLoadingCompleteRef:m,setBlurComplete:b,setShowAltText:P,sizesInput:e.sizes,ref:t}),A.preload?(0,n.jsx)(_,{isAppRouter:!i,imgAttributes:w}):null]})});("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},794909,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a={default:function(){return c},getImageProps:function(){return d}};for(var r in a)Object.defineProperty(i,r,{enumerable:!0,get:a[r]});let n=e.r(555682),s=e.r(908927),l=e.r(605500),o=n._(e.r(1948));function d(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/nst-website-2027/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let c=l.Image},657688,(e,t,i)=>{t.exports=e.r(794909)},929056,e=>{"use strict";var t=e.i(688921);let i={PAGE_LOAD:{eventType:t.EVENT_TYPE.PAGE_LOAD,eventName:"page_view"}},a={PAY_NSAT_CLICK:{eventType:t.EVENT_TYPE.CLICK,eventName:"gydr_pay_nsat_click"},DOWNLOAD_BROCHURE_CLICK:{eventType:t.EVENT_TYPE.CLICK,eventName:"gydr_download_brochure_click"},APPLY_CLICK:{eventType:t.EVENT_TYPE.CLICK,eventName:"gydr_apply_click"},SCHOLARSHIP_TEST_CLICK:{eventType:t.EVENT_TYPE.CLICK,eventName:"gydr_scholarship_test_click"}},r={gydr_nav_pay_nsat:a.PAY_NSAT_CLICK,gydr_hero_pay_nsat:a.PAY_NSAT_CLICK,gydr_sticky_pay_nsat:a.PAY_NSAT_CLICK,gydr_nav_download_brochure:a.DOWNLOAD_BROCHURE_CLICK,gydr_hero_download_brochure:a.DOWNLOAD_BROCHURE_CLICK,gydr_hero_apply:a.APPLY_CLICK,gydr_imp_dates_apply:a.APPLY_CLICK,gydr_scholarship_test:a.SCHOLARSHIP_TEST_CLICK};e.s(["FROM_EVENT",0,r,"GYDR_EVENTS",0,i,"GYDR_PAGE_NAME",0,"/get-your-doubts-resolved"])},15784,e=>{"use strict";var t=e.i(271645),i=e.i(851361),a=e.i(688921),r=e.i(929056);e.s(["PageViewTracker",0,function(){let e=(0,i.useSendAnalyticsEvent)();return(0,t.useEffect)(()=>{e({...r.GYDR_EVENTS.PAGE_LOAD,eventData:(0,a.buildEventData)({pageName:r.GYDR_PAGE_NAME})})},[]),null}])},701136,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(397681),r=e.i(549838),n=e.i(914984),s=e.i(692156),l=e.i(437082),o=e.i(851361),d=e.i(688921),c=e.i(929056);let f=(0,i.createContext)(null),u={"pay-now":{title:"Register for the NSAT Exam now!",urlSlug:"get-your-doubts-resolved-pay-now"},brochure:{title:"Download Brochure",urlSlug:"download-brochure-nst"}};e.s(["DoubtsModalProvider",0,function({children:e}){let[p,h]=(0,i.useState)(null),g=(0,i.useRef)(null),m=(0,o.useSendAnalyticsEvent)(),v=(0,i.useCallback)((e,t)=>{g.current=document.activeElement??null;let i=c.FROM_EVENT[t];i&&m({...i,eventData:(0,d.buildEventData)({from:t,mode:e},c.GYDR_PAGE_NAME)}),h(e)},[m]),x=(0,i.useCallback)(()=>{h(null),g.current?.focus?.()},[]),_=(0,i.useMemo)(()=>({open:v,close:x}),[v,x]),b=p?u[p]:null;return(0,t.jsxs)(f.Provider,{value:_,children:[e,(0,t.jsx)(a.NSModal,{isOpen:null!==b,onClose:x,hideOnClickAway:!0,showCloseButton:!1,width:"420px",border:"none",animatePresence:"fade",overflow:"hidden",children:b&&(0,t.jsxs)("div",{className:"relative",style:{textAlign:"left"},children:[(0,t.jsx)("button",{type:"button",onClick:x,"aria-label":"Close",className:(0,r.cn)("text-ds-muted hover:bg-ds-surface absolute top-1 right-1 z-10 flex size-9","cursor-pointer items-center justify-center rounded-full"),children:(0,t.jsx)(n.CloseIcon,{className:"size-5"})}),(0,t.jsx)("div",{className:"max-h-[calc(95vh-40px)] overflow-x-hidden overflow-y-auto",children:(0,t.jsx)(s.ApplyForm,{title:b.title,courseType:"btech-computer-science",urlSlug:b.urlSlug,config:l.DEFAULT_SIGNUP_FIELDS,pageName:c.GYDR_PAGE_NAME})})]})})]})},"useDoubtsModal",0,function(){return(0,i.useContext)(f)??{open:()=>{},close:()=>{}}}])},219446,e=>{"use strict";var t=e.i(843476),i=e.i(701136);e.s(["ModalOpenButton",0,function({mode:e,from:a,className:r,children:n,id:s,"aria-label":l}){let{open:o}=(0,i.useDoubtsModal)();return(0,t.jsx)("button",{type:"button",id:s,"data-from":a,"aria-label":l,onClick:()=>o(e,a),className:r,children:n})}])},694573,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(657688),r=e.i(914984);let n="https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6",s={newtonRishihood:`${n}/647dbdf2273acc29bf5f69a7_Newton%20x%20Rishihood.avif`,soumitraMishra:`${n}/658db0934fae3b22263da0ce_Soumitra-Mishra%20Prof%20NST.avif`,gurmandeepSinghBedi:`${n}/64b8ee8e5cd24c19747c45d9_Gurmandeep%20Singh%20Bedi%20.avif`,harekrishnaMahto:`${n}/658db09314406760e1cbf8c4_HKM%20SE.avif`,rohitArora:`${n}/64b8efb158dbbc006b7272fd_Rohit%20Arora.avif`,nimishJain:`${n}/658db093d86f6449da4272e7_Nimish%20jain%20SE%202%20MS.avif`,ankurGupta:`${n}/65a58a8b57f5c8d02c69d360_ankur%20gupta.avif`,mandeepKaur:`${n}/658db0934e944f22d8f77964_Mandeep%20kaur%20-%20Software%20Development%20Engineer%202%20at%20Microsoft.avif`,nilayShrivastava:`${n}/658db093c80cf98fc0e77cc1_Nilay%20Shrivastava.avif`,ravinderPalSingh:`${n}/647603c850d16565dff79a68_Prof.%20Ravinder%20Pal%20Singh.webp`,kishorTrivedi:`${n}/647df493a5cf03778816b2e0_kishor%20trivedi.webp`,sanjeevKumar:`${n}/6474690e54e763b256af8de0_Sanjeev%20Kumar.avif`,paragSingla:`${n}/647df2fa50a08add4882e03c_Parag-Singla-495x500.webp`,karthikMohan:`${n}/648c253466d8d1d8f1ad371e_Karthik%20Mohan.avif`,prathosh:`${n}/648c25803aaa84b060ca0250_Prathosh_Picture.avif`,prasadJayanti:`${n}/647df2fa1a4e3eb7151294e2_Prasad-Jayanti-495x500.webp`,siddharthaJayanti:`${n}/647df2fa5fce42fb67064010_Siddhartha-Jayanti-495x500.webp`},l=[{name:"Soumitra Mishra",role:"Principal Engineer",org:"MakeMyTrip",photo:s.soumitraMishra},{name:"Gurmandeep Singh Bedi",role:"Sr. Software Developer",org:"Oracle",photo:s.gurmandeepSinghBedi},{name:"Harekrishna Mahto",role:"Software Engineer",org:"Google",photo:s.harekrishnaMahto},{name:"Rohit Arora",role:"Senior Software Developer",org:"Microsoft",photo:s.rohitArora},{name:"Nimish Jain",role:"Software Engineer",org:"Microsoft",photo:s.nimishJain},{name:"Ankur Gupta",role:"Ex. MNNIT, NIT Jaipur",org:"IIIT Kota, Bennet University",photo:s.ankurGupta},{name:"Mandeep Kaur",role:"SDE 2",org:"Microsoft",photo:s.mandeepKaur},{name:"Nilay Shrivastava",role:"AI Researcher",org:"Adobe",photo:s.nilayShrivastava}],o=[{name:"Ravinder Pal Singh",role:"Chief Innovation & Strategy Officer",org:"Alumnus - Harvard Business School",photo:s.ravinderPalSingh},{name:"Kishor S. Trivedi",role:"Hudson Distinguished Professor",org:"Duke University",photo:s.kishorTrivedi},{name:"Sanjeev Kumar",role:"Dean, School of Public Leadership",org:"Prev. Lecturer, Yale University",photo:s.sanjeevKumar},{name:"Parag Singla",role:"Prof. of Computer Science",org:"IIT, Delhi",photo:s.paragSingla},{name:"Karthik Mohan",role:"Faculty, University of Washington",org:"Prev. ML Scientist, Amazon, Facebook",photo:s.karthikMohan},{name:"Dr. Prathosh A. P",role:"Asstt. Professor, Computer Science",org:"IISc Bangalore",photo:s.prathosh},{name:"Prasad Jayanti",role:"Ex. Head of Computer Science",org:"Dartmouth University",photo:s.prasadJayanti},{name:"Siddhartha Jayanti",role:"Research Scientist",org:"Google Research, PhD MIT Boston",photo:s.siddharthaJayanti}];function d({person:e}){return(0,t.jsxs)("article",{className:"w-[356px] flex-none snap-start overflow-hidden rounded-[10px] border border-[#003E74]",children:[(0,t.jsx)(a.default,{src:e.photo,alt:e.name,width:354,height:260,sizes:"356px",className:"h-[260px] w-full border-b border-dashed border-[#16191d]/60 object-cover grayscale"}),(0,t.jsxs)("div",{className:"px-3 py-4 text-center leading-tight text-[#16191d]",children:[(0,t.jsx)("p",{className:"text-[14px] font-semibold",children:e.name}),(0,t.jsx)("p",{className:"text-[14px]",children:e.role}),(0,t.jsx)("p",{className:"text-[14px]",children:e.org})]})]})}function c({label:e,items:a}){let n=(0,i.useRef)(null),[s,l]=(0,i.useState)(!0),[o,f]=(0,i.useState)(!1),u=(0,i.useCallback)(()=>{let e=n.current;e&&(l(e.scrollLeft<=1),f(e.scrollLeft>=e.scrollWidth-e.clientWidth-1))},[]),p=e=>n.current?.scrollBy({left:372*e,behavior:"smooth"});return(0,t.jsxs)("div",{className:"mt-10 first:mt-0",children:[(0,t.jsxs)("div",{className:"mb-5 flex items-center justify-between gap-4",children:[(0,t.jsx)("h3",{className:"text-[28px] font-bold text-[#003E74] md:text-[36px]",children:e}),(0,t.jsxs)("div",{className:"flex items-center gap-2 text-[#16191d]",children:[(0,t.jsx)("button",{type:"button","aria-label":`Previous — ${e}`,onClick:()=>p(-1),disabled:s,className:"flex size-9 items-center justify-center transition-opacity disabled:opacity-30",children:(0,t.jsx)(r.ChevronLeftIcon,{className:"size-6"})}),(0,t.jsx)("button",{type:"button","aria-label":`Next — ${e}`,onClick:()=>p(1),disabled:o,className:"flex size-9 items-center justify-center transition-opacity disabled:opacity-30",children:(0,t.jsx)(r.ChevronRightIcon,{className:"size-6"})})]})]}),(0,t.jsx)("div",{ref:n,onScroll:u,className:"-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden",children:a.map(e=>(0,t.jsx)(d,{person:e},e.name))})]})}e.s(["LearnFromBest",0,function(){return(0,t.jsx)("section",{id:"learn-from-the-best",className:"scroll-mt-28 bg-[#F7F7FF]",children:(0,t.jsxs)("div",{className:"mx-auto w-full max-w-[1200px] px-4 py-12",children:[(0,t.jsxs)("header",{className:"mb-10",children:[(0,t.jsx)("h2",{className:"text-[30px] font-bold leading-[1.1] text-[#003E74] md:text-[48px] md:leading-[52.8px]",children:"Learn from the best"}),(0,t.jsx)("p",{className:"mt-2 max-w-[480px] text-[18px] font-medium leading-snug text-[#003E74] md:text-[24px] md:leading-[36px]",children:"Learn from India's top academicians, and industry experts from the top companies"}),(0,t.jsx)(a.default,{src:s.newtonRishihood,alt:"Newton School of Technology in collaboration with Rishihood University",width:300,height:45,sizes:"300px",className:"mt-6 h-[45px] w-auto"})]}),(0,t.jsx)(c,{label:"The best of industry",items:l}),(0,t.jsx)(c,{label:"The best of academia",items:o})]})})}])},511604,e=>{e.v(t=>Promise.all(["static/chunks/2-et_hho2aqvl.js"].map(t=>e.l(t))).then(()=>t(164436)))},896615,e=>{e.v(t=>Promise.all(["static/chunks/3klltxhcaam25.js"].map(t=>e.l(t))).then(()=>t(980954)))},401485,e=>{e.v(t=>Promise.all(["static/chunks/3363k0g8j073u.js","static/chunks/2n-gidy722xtj.js"].map(t=>e.l(t))).then(()=>t(873987)))},179909,e=>{e.v(t=>Promise.all(["static/chunks/41kj1t47-_n25.js"].map(t=>e.l(t))).then(()=>t(285692)))},628574,e=>{e.v(t=>Promise.all(["static/chunks/2qirsm4ul044n.js"].map(t=>e.l(t))).then(()=>t(218568)))},490258,e=>{e.v(t=>Promise.all(["static/chunks/2s87rp7nfrl4_.js"].map(t=>e.l(t))).then(()=>t(322465)))},15086,e=>{e.v(t=>Promise.all(["static/chunks/36smk6w2al07x.js"].map(t=>e.l(t))).then(()=>t(269275)))},134362,e=>{e.v(t=>Promise.all(["static/chunks/24_vd97z020im.js"].map(t=>e.l(t))).then(()=>t(57400)))},278533,e=>{e.v(t=>Promise.all(["static/chunks/2dsmc-m5l6-0x.js"].map(t=>e.l(t))).then(()=>t(906322)))}]);