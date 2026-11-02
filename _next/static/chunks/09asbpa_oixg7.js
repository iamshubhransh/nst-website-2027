(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,703109,968081,e=>{"use strict";var t=e.i(997053),i=e.i(271645),r={DISPLAY_BD_D1:"display-bd-d1",DISPLAY_BD_D2:"display-bd-d2",DISPLAY_BD_D3:"display-bd-d3",HEADING_SB_H1:"heading-sb-h1",HEADING_SB_H2:"heading-sb-h2",HEADING_SB_H3:"heading-sb-h3",HEADING_SB_H4:"heading-sb-h4",HEADING_SB_H5:"heading-sb-h5",HEADING_SB_H6:"heading-sb-h6",PARAGRAPH_SB_P1:"paragraph-sb-p1",PARAGRAPH_SB_P2:"paragraph-sb-p2",PARAGRAPH_SB_P3:"paragraph-sb-p3",PARAGRAPH_SB_P4:"paragraph-sb-p4",PARAGRAPH_SB_L1:"paragraph-sb-l1",PARAGRAPH_SB_L2:"paragraph-sb-l2",PARAGRAPH_MD_P1:"paragraph-md-p1",PARAGRAPH_MD_P2:"paragraph-md-p2",PARAGRAPH_MD_P3:"paragraph-md-p3",PARAGRAPH_MD_P4:"paragraph-md-p4",PARAGRAPH_MD_C1:"paragraph-md-c1",PARAGRAPH_MD_L1:"paragraph-md-l1",PARAGRAPH_MD_L2:"paragraph-md-l2",OVERLINE_SB_OL1:"overline-sb-ol1",OVERLINE_SB_OL2:"overline-sb-ol2",ACTION_SB_P1:"action-sb-p1",ACTION_SB_P2:"action-sb-p2",ACTION_SB_LK1:"action-sb-lk1"};Object.freeze(Object.values(r));var a={H1:"h1",H2:"h2",H3:"h3",H4:"h4",H5:"h5",H6:"h6",P:"p",SPAN:"span",DIV:"div",LABEL:"label",CAPTION:"caption",CODE:"code",AUTO:"auto"};Object.freeze(Object.values(a));var n={[r.DISPLAY_BD_D1]:t.css`
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
    `},s={[r.DISPLAY_BD_D1]:a.H1,[r.DISPLAY_BD_D2]:a.H2,[r.DISPLAY_BD_D3]:a.H3,[r.HEADING_SB_H1]:a.H1,[r.HEADING_SB_H2]:a.H2,[r.HEADING_SB_H3]:a.H3,[r.HEADING_SB_H4]:a.H4,[r.HEADING_SB_H5]:a.H5,[r.HEADING_SB_H6]:a.H6,[r.PARAGRAPH_SB_P1]:a.P,[r.PARAGRAPH_SB_P2]:a.P,[r.PARAGRAPH_SB_P3]:a.P,[r.PARAGRAPH_SB_P4]:a.P,[r.PARAGRAPH_SB_L1]:a.LABEL,[r.PARAGRAPH_SB_L2]:a.LABEL,[r.PARAGRAPH_MD_P1]:a.P,[r.PARAGRAPH_MD_P2]:a.P,[r.PARAGRAPH_MD_P3]:a.P,[r.PARAGRAPH_MD_P4]:a.P,[r.PARAGRAPH_MD_C1]:a.CODE,[r.PARAGRAPH_MD_L1]:a.LABEL,[r.PARAGRAPH_MD_L2]:a.LABEL,[r.OVERLINE_SB_OL1]:a.P,[r.OVERLINE_SB_OL2]:a.P,[r.ACTION_SB_P1]:a.SPAN,[r.ACTION_SB_P2]:a.SPAN,[r.ACTION_SB_LK1]:a.SPAN},l=t.styled.p.attrs(e=>({as:e.as||"p"}))`
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
`,o=({variant:e="paragraph-md-p1",as:t="auto",color:r="var(--text-emphasis-primary-default, #16191d)",textAlign:n=null,textTransform:o=null,fontSize:d=null,children:c="",className:f="",title:u=null})=>{let p=t===a.AUTO?s[e]:t;return i.default.createElement(l,{$variant:e,as:p,$color:r,$textAlign:n,$textTransform:o,$fontSize:d,className:f,title:u},c)};e.s(["Typography_default",0,o],968081),e.s(["default",0,o],703109)},830249,e=>{"use strict";var t=e.i(271645);e.s(["useParentUrl",0,function(){let[e,i]=(0,t.useState)("");return(0,t.useEffect)(()=>{function e(e){let t=e.data;t&&"object"==typeof t&&"PARENT_URL"===t.type&&"string"==typeof t.url&&i(t.url)}return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]),e}])},397681,e=>{"use strict";var t=e.i(893347),i=e.i(773892),r=e.i(364072),a=e.i(189101),n=e.i(824511),s=e.i(88653),l=e.i(271645),o=e.i(997053),d=(0,o.styled)(n.m.div)`
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
`;var m=o.styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: var(--spacing-8px, 8px);

    ${({$justifyContent:e})=>e&&o.css`
            justify-content: ${e};
        `}
`,g=o.styled.div`
    width: 100%;
    position: relative;

    img {
        width: 100%;
        border-radius: var(--corner-radius-8px, 8px);
    }
`,x={slide:{variants:{hidden:{opacity:0,y:-50},visible:{opacity:1,y:0},exit:{opacity:0,y:50}},transition:{duration:.3}},"slide-reverse":{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0},exit:{opacity:0,y:-50}},transition:{duration:.3}},fade:{variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},transition:{duration:.3}},emanate:{}},v=(0,l.forwardRef)(({width:e,height:t,minHeight:i,minWidth:r,maxHeight:a,maxWidth:n,mobileBottomFullWidth:s,modalPadding:o,border:c,children:f,...u},p)=>l.default.createElement(d,{ref:p,$width:e,$height:t,$minHeight:i,$minWidth:r,$maxHeight:a,$maxWidth:n,$mobileBottomFullWidth:s,$modalPadding:o,$border:c,...u},f)),b=(0,l.forwardRef)(({justifyContent:e,children:t},i)=>l.default.createElement(m,{ref:i,$justifyContent:e},t)),w=(0,l.forwardRef)(({overflow:e,children:t,...i},r)=>l.default.createElement(c,{ref:r,$overflow:e,...i},t)),_=(0,l.forwardRef)(({children:e,...t},i)=>l.default.createElement(g,{ref:i,...t},e)),y=(0,l.forwardRef)(({children:e,...t},i)=>l.default.createElement(u,{ref:i,...t},e)),j=(0,l.forwardRef)(({children:e,...t},i)=>l.default.createElement(p,{ref:i,...t},e)),P=(0,l.forwardRef)(({modalBodyMargin:e,children:t,...i},r)=>l.default.createElement(h,{ref:r,$modalBodyMargin:e,...i},t)),A=(0,l.forwardRef)(({...e},t)=>l.default.createElement(f,{ref:t,...e})),E=(0,l.forwardRef)((e,n)=>{let{isOpen:o=!0,banner:f=null,title:v=null,description:b=null,body:w=null,action:_=null,height:y="auto",width:j="500px",minHeight:P=null,minWidth:A=null,maxHeight:E="95vh",maxWidth:N="95vw",onHide:C=()=>{},onClose:S=()=>{},mobileBottomFullWidth:R=!1,modalPadding:L="20px",border:D="1px solid var(--border-subtle-primary-default, #e1e5ea)",modalBodyMargin:O=null,showCloseButton:I=!1,hideOnClickAway:B=!1,blurBackground:H=!1,animatePresence:z="fade",clickEvent:k=null,children:G=null,shouldFocusOnFirstElement:M=!0,shouldDisableScroll:$=!0,overflow:T="visible",className:U}=e,V=(0,l.useRef)(null),F=()=>{"function"==typeof C&&C(),"function"==typeof S&&S()};(0,l.useImperativeHandle)(n,()=>V.current),(0,i.useDisableBodyScroll_default)(o),(0,i.useKeyboardEvent_default)({onKeyPress:()=>{B&&F()},keyCodes:["Escape"],config:{shouldDetect:o}});let W=(0,l.useId)(),Y=(0,l.useMemo)(()=>{var e,t;return e=z,t=k,"emanate"===e?"number"==typeof(null==t?void 0:t.clientX)&&"number"==typeof(null==t?void 0:t.clientY)?((e,t)=>{let i,r;try{i=e-window.innerWidth/2,r=t-window.innerHeight/2}catch(e){i=0,r=0}return{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{scale:0,opacity:0,x:i,y:r},visible:{scale:1,opacity:1,x:0,y:0},exit:{scale:0,opacity:0,x:i,y:r}},transition:{duration:.3}}})(t.clientX,t.clientY):{}:{initial:"hidden",animate:"visible",exit:"exit",...e?x[e]:{}}},[z,k]),q=(0,l.useMemo)(()=>(({isOpen:e,animatePresence:t,clickEvent:i})=>!!e&&("emanate"!==t||"number"==typeof(null==i?void 0:i.clientX)&&"number"==typeof(null==i?void 0:i.clientY)))({isOpen:o,animatePresence:z,clickEvent:k}),[o,z,k]);return l.default.createElement(r.motion_default,null,l.default.createElement(s.AnimatePresence,null,q&&l.default.createElement(t.Overlay_default,{shouldDisableScroll:$,onOverlayClick:()=>{B&&F()},shouldTintOverlay:!0,shouldBlurOverlay:H,shouldCenterContent:!0,"data-testid":"testid-modalwrapper",className:U,animationDuration:.3,shouldFocusOnFirstElement:M},l.default.createElement(d,{onClick:e=>e.stopPropagation(),ref:V,$width:j,$height:y,$minHeight:P,$minWidth:A,$maxHeight:E,$maxWidth:N,$mobileBottomFullWidth:R,$modalPadding:L,$border:D,"aria-labelledby":`modal-title-${W}`,"aria-describedby":`modal-description-${W}`,"aria-modal":"true",role:"dialog","data-testid":"testid-modal",...Y},l.default.createElement(c,{$overflow:T},I&&l.default.createElement(m,{$justifyContent:"end"},l.default.createElement(a.IconButton_default,{onClick:F,size:"small",variant:"tertiary",color:"neutral",icon:"close",ariaLabel:"Close",buttonProps:{autoFocus:!0}})),f&&l.default.createElement(g,null,f),v&&l.default.createElement(u,{id:`modal-title-${W}`},v),b&&l.default.createElement(p,{id:`modal-description-${W}`},b),w&&l.default.createElement(h,{$modalBodyMargin:O},w),G&&l.default.createElement(h,{$modalBodyMargin:O},G)),_&&l.default.createElement(m,null,_)))))});E.Modal=v,E.Main=w,E.Banner=_,E.Title=y,E.Description=j,E.Body=P,E.Action=b,E.Divider=A,e.s(["NSModal",0,E],397681)},914984,e=>{"use strict";var t=e.i(843476);e.s(["ArrowRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M5 12h14m0 0-6-6m6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronLeftIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m15 6-6 6 6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m9 6 6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"CloseIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M6 6l12 12M18 6 6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"RadioUncheckedIcon",0,function({className:e}){return(0,t.jsx)("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":!0,focusable:"false",className:e,children:(0,t.jsx)("path",{d:"M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 14.6 5.4 18.3333 10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667ZM10 16.6667C6.31667 16.6667 3.33333 13.6833 3.33333 10C3.33333 6.31667 6.31667 3.33333 10 3.33333C13.6833 3.33333 16.6667 6.31667 16.6667 10C16.6667 13.6833 13.6833 16.6667 10 16.6667Z",fill:"currentColor"})})},"SparkIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M12 2c.45 4.2 2.3 6.05 6.5 6.5-4.2.45-6.05 2.3-6.5 6.5-.45-4.2-2.3-6.05-6.5-6.5C9.7 8.05 11.55 6.2 12 2z"})})},"YouTubePlayIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 68 48",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("path",{d:"M66.5 7.5a8.5 8.5 0 0 0-6-6C55.2 0 34 0 34 0S12.8 0 7.5 1.5a8.5 8.5 0 0 0-6 6A89 89 0 0 0 0 24a89 89 0 0 0 1.5 16.5 8.5 8.5 0 0 0 6 6C12.8 48 34 48 34 48s21.2 0 26.5-1.5a8.5 8.5 0 0 0 6-6A89 89 0 0 0 68 24a89 89 0 0 0-1.5-16.5z",fill:"#FF0000"}),(0,t.jsx)("path",{d:"M27.2 34.29 44.85 24 27.2 13.71v20.58z",fill:"#fff"})]})}])},818581,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"useMergedRef",{enumerable:!0,get:function(){return a}});let r=e.r(271645);function a(e,t){let i=(0,r.useRef)(null),a=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=i.current;e&&(i.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(i.current=n(e,r)),t&&(a.current=n(t,r))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let i=e(t);return"function"==typeof i?i:()=>e(null)}}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},898879,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return l}});let r=e.r(271645),a="u"<typeof window,n=a?()=>{}:r.useLayoutEffect,s=a?()=>{}:r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:i}=e;function l(){if(t&&t.mountedInstances){let e=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(i(e))}}return a&&(t?.mountedInstances?.add(e.children),l()),n(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),n(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),s(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},325633,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={default:function(){return m},defaultHead:function(){return f}};for(var a in r)Object.defineProperty(i,a,{enumerable:!0,get:r[a]});let n=e.r(555682),s=e.r(190809),l=e.r(843476),o=s._(e.r(271645)),d=n._(e.r(898879)),c=e.r(742732);function f(){return[(0,l.jsx)("meta",{charSet:"utf-8"},"charset"),(0,l.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(233525);let p=["name","httpEquiv","charSet","itemProp"];function h(e){let t,i,r,a;return e.reduce(u,[]).reverse().concat(f().reverse()).filter((t=new Set,i=new Set,r=new Set,a={},e=>{let n=!0,s=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){s=!0;let i=e.key.slice(e.key.indexOf("$")+1);t.has(i)?n=!1:t.add(i)}switch(e.type){case"title":case"base":i.has(e.type)?n=!1:i.add(e.type);break;case"meta":for(let t=0,i=p.length;t<i;t++){let i=p[t];if(e.props.hasOwnProperty(i))if("charSet"===i)r.has(i)?n=!1:r.add(i);else{let t=e.props[i],r=a[i]||new Set;("name"!==i||!s)&&r.has(t)?n=!1:(r.add(t),a[i]=r)}}}return n})).reverse().map((e,t)=>{let i=e.key||t;return o.default.cloneElement(e,{key:i})})}let m=function({children:e}){let t=(0,o.useContext)(c.HeadManagerContext);return(0,l.jsx)(d.default,{reduceComponentsToState:h,headManager:t,children:e})};("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},488143,(e,t,i)=>{"use strict";function r({widthInt:e,heightInt:t,blurWidth:i,blurHeight:a,blurDataURL:n,objectFit:s}){let l=i?40*i:e,o=a?40*a:t,d=l&&o?`viewBox='0 0 ${l} ${o}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${d}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${d?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},987690,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={VALID_LOADERS:function(){return n},imageConfigDefault:function(){return s}};for(var a in r)Object.defineProperty(i,a,{enumerable:!0,get:r[a]});let n=["default","imgix","cloudinary","akamai","custom"],s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},908927,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(233525);let r=e.r(543369),a=e.r(488143),n=e.r(987690),s=["-moz-initial","fill","none","scale-down",void 0];function l(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:i=!1,priority:c=!1,preload:f=!1,loading:u,className:p,quality:h,width:m,height:g,fill:x=!1,style:v,overrideSrc:b,onLoad:w,onLoadingComplete:_,placeholder:y="empty",blurDataURL:j,fetchPriority:P,decoding:A="async",layout:E,objectFit:N,objectPosition:C,lazyBoundary:S,lazyRoot:R,...L},D){var O;let I,B,H,{imgConf:z,showAltText:k,blurComplete:G,defaultLoader:M}=D,$=z||n.imageConfigDefault;if("allSizes"in $)I=$;else{let e=[...$.deviceSizes,...$.imageSizes].sort((e,t)=>e-t),t=$.deviceSizes.sort((e,t)=>e-t),i=$.qualities?.sort((e,t)=>e-t);I={...$,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===M)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let T=L.loader||M;delete L.loader,delete L.srcSet;let U="__next_img_default"in T;if(U){if("custom"===I.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=T;T=t=>{let{config:i,...r}=t;return e(r)}}if(E){"fill"===E&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(v={...v,...e});let i={responsive:"100vw",fill:"100vw"}[E];i&&!t&&(t=i)}let V="",F=o(m),W=o(g);if((O=e)&&"object"==typeof O&&(l(O)||void 0!==O.src)){let t=l(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(B=t.blurWidth,H=t.blurHeight,j=j||t.blurDataURL,V=t.src,!x)if(F||W){if(F&&!W){let e=F/t.width;W=Math.round(t.height*e)}else if(!F&&W){let e=W/t.height;F=Math.round(t.width*e)}}else F=t.width,W=t.height}let Y=!c&&!f&&("lazy"===u||void 0===u);(!(e="string"==typeof e?e:V)||e.startsWith("data:")||e.startsWith("blob:"))&&(i=!0,Y=!1),I.unoptimized&&(i=!0),U&&!I.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(i=!0);let q=o(h),K=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:C}:{},k?{}:{color:"transparent"},v),X=G||"empty"===y?null:"blur"===y?`url("data:image/svg+xml;charset=utf-8,${(0,a.getImageBlurSvg)({widthInt:F,heightInt:W,blurWidth:B,blurHeight:H,blurDataURL:j||"",objectFit:K.objectFit})}")`:`url("${y}")`,Q=s.includes(K.objectFit)?"fill"===K.objectFit?"100% 100%":"cover":K.objectFit,Z=X?{backgroundSize:Q,backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},J=function({config:e,src:t,unoptimized:i,width:a,quality:n,sizes:s,loader:l}){if(i){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,r.getDeploymentId)();if(e){let i=t.indexOf("?");if(-1!==i){let r=new URLSearchParams(t.slice(i+1));r.get("dpl")||(r.append("dpl",e),t=t.slice(0,i)+"?"+r.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:o,kind:d}=function({deviceSizes:e,allSizes:t},i,r){if(r){let i=/(^|\s)(1?\d?\d)vw/g,a=[];for(let e;e=i.exec(r);)a.push(parseInt(e[2]));if(a.length){let i=.01*Math.min(...a);return{widths:t.filter(t=>t>=e[0]*i),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof i?{widths:e,kind:"w"}:{widths:[...new Set([i,2*i].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,a,s),c=o.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:o.map((i,r)=>`${l({config:e,src:t,quality:n,width:i})} ${"w"===d?i:r+1}${d}`).join(", "),src:l({config:e,src:t,quality:n,width:o[c]})}}({config:I,src:e,unoptimized:i,width:F,quality:q,sizes:t,loader:T}),ee=Y?"lazy":u;return{props:{...L,loading:ee,fetchPriority:P,width:F,height:W,decoding:A,className:p,style:{...K,...Z},sizes:J.sizes,srcSet:J.srcSet,src:b||J.src},meta:{unoptimized:i,preload:f||c,placeholder:y,fill:x}}}},918556,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"ImageConfigContext",{enumerable:!0,get:function(){return n}});let r=e.r(555682)._(e.r(271645)),a=e.r(987690),n=r.default.createContext(a.imageConfigDefault)},65856,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"RouterContext",{enumerable:!0,get:function(){return r}});let r=e.r(555682)._(e.r(271645)).default.createContext(null)},670965,(e,t,i)=>{"use strict";function r(e,t){let i=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e,t.qualities[0]):i}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"findClosestQuality",{enumerable:!0,get:function(){return r}})},1948,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return s}});let r=e.r(670965),a=e.r(543369);function n({config:e,src:t,width:i,quality:s}){let l=(0,a.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")){let e=t.indexOf("?");if(-1!==e){let i=new URLSearchParams(t.slice(e+1)),r=i.get("dpl");if(r){l=r,i.delete("dpl");let a=i.toString();t=t.slice(0,e)+(a?"?"+a:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let o=(0,r.findClosestQuality)(s,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${i}&q=${o}${t.startsWith("/")&&l?`&dpl=${l}`:""}`}n.__next_img_default=!0;let s=n},605500,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"Image",{enumerable:!0,get:function(){return w}});let r=e.r(555682),a=e.r(190809),n=e.r(843476),s=a._(e.r(271645)),l=r._(e.r(174080)),o=r._(e.r(325633)),d=e.r(908927),c=e.r(987690),f=e.r(918556);e.r(233525);let u=e.r(65856),p=r._(e.r(1948)),h=e.r(818581),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/nst-website-2027/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,i,r,a,n,s){let l=e?.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&a(!0),i?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,a=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}r?.current&&r.current(e)}}))}function x(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let v=(0,s.forwardRef)(({src:e,srcSet:t,sizes:i,height:r,width:a,decoding:l,className:o,style:d,fetchPriority:c,placeholder:f,loading:u,unoptimized:p,fill:m,onLoadRef:v,onLoadingCompleteRef:b,setBlurComplete:w,setShowAltText:_,sizesInput:y,onLoad:j,onError:P,...A},E)=>{let N=(0,s.useCallback)(e=>{e&&(P&&(e.src=e.src),e.complete&&g(e,f,v,b,w,p,y))},[e,f,v,b,w,P,p,y]),C=(0,h.useMergedRef)(E,N);return(0,n.jsx)("img",{...A,...x(c),loading:u,width:a,height:r,decoding:l,"data-nimg":m?"fill":"1",className:o,style:d,sizes:i,srcSet:t,src:e,ref:C,onLoad:e=>{g(e.currentTarget,f,v,b,w,p,y)},onError:e=>{_(!0),"empty"!==f&&w(!0),P&&P(e)}})});function b({isAppRouter:e,imgAttributes:t}){let i={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...x(t.fetchPriority)};return e&&l.default.preload?(l.default.preload(t.src,i),null):(0,n.jsx)(o.default,{children:(0,n.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...i},"__nimg-"+t.src+t.srcSet+t.sizes)})}let w=(0,s.forwardRef)((e,t)=>{let i=(0,s.useContext)(u.RouterContext),r=(0,s.useContext)(f.ImageConfigContext),a=(0,s.useMemo)(()=>{let e=m||r||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t),a=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i,qualities:a,localPatterns:"u"<typeof window?r?.localPatterns:e.localPatterns}},[r]),{onLoad:l,onLoadingComplete:o}=e,h=(0,s.useRef)(l);(0,s.useEffect)(()=>{h.current=l},[l]);let g=(0,s.useRef)(o);(0,s.useEffect)(()=>{g.current=o},[o]);let[x,w]=(0,s.useState)(!1),[_,y]=(0,s.useState)(!1),{props:j,meta:P}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:a,blurComplete:x,showAltText:_});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v,{...j,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:w,setShowAltText:y,sizesInput:e.sizes,ref:t}),P.preload?(0,n.jsx)(b,{isAppRouter:!i,imgAttributes:j}):null]})});("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},794909,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={default:function(){return c},getImageProps:function(){return d}};for(var a in r)Object.defineProperty(i,a,{enumerable:!0,get:r[a]});let n=e.r(555682),s=e.r(908927),l=e.r(605500),o=n._(e.r(1948));function d(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/nst-website-2027/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let c=l.Image},657688,(e,t,i)=>{t.exports=e.r(794909)},319358,e=>{"use strict";var t=e.i(688921);let i=t.EVENT_TYPE.CLICK,r="/codebuddy",a={NAV_GET_STARTED:"codebuddy_nav_get_started",HERO_SIGNUP:"codebuddy_hero_signup",HERO_EXPLORE:"codebuddy_hero_explore",QUIZ_SIGNUP:"codebuddy_quiz_signup",PROJECT_START:"codebuddy_project_start",CHALLENGE_SIGNUP:"codebuddy_challenge_signup",CHALLENGE_SOLVE:"codebuddy_challenge_solve",CHALLENGE_LEADERBOARD:"codebuddy_challenge_leaderboard"},n={PAGE_LOAD:{eventType:t.EVENT_TYPE.PAGE_LOAD,eventName:"page_view"},NAV_GET_STARTED_CLICK:{eventType:i,eventName:"codebuddy_nav_get_started"},HERO_SIGNUP_CLICK:{eventType:i,eventName:"codebuddy_hero_signup"},HERO_EXPLORE_CLICK:{eventType:i,eventName:"codebuddy_hero_explore"},QUIZ_SIGNUP_CLICK:{eventType:i,eventName:"codebuddy_quiz_signup"},PROJECT_START_CLICK:{eventType:i,eventName:"codebuddy_project_start"},CHALLENGE_SIGNUP_CLICK:{eventType:i,eventName:"codebuddy_challenge_signup"},CHALLENGE_SOLVE_CLICK:{eventType:i,eventName:"codebuddy_challenge_solve"},CHALLENGE_LEADERBOARD_CLICK:{eventType:i,eventName:"codebuddy_challenge_leaderboard"},MODAL_OPEN:{eventType:i,eventName:"codebuddy_modal_open"},MODAL_CLOSE:{eventType:i,eventName:"codebuddy_modal_close"}},s={[a.NAV_GET_STARTED]:n.NAV_GET_STARTED_CLICK,[a.HERO_SIGNUP]:n.HERO_SIGNUP_CLICK,[a.HERO_EXPLORE]:n.HERO_EXPLORE_CLICK,[a.QUIZ_SIGNUP]:n.QUIZ_SIGNUP_CLICK,[a.PROJECT_START]:n.PROJECT_START_CLICK,[a.CHALLENGE_SIGNUP]:n.CHALLENGE_SIGNUP_CLICK,[a.CHALLENGE_SOLVE]:n.CHALLENGE_SOLVE_CLICK,[a.CHALLENGE_LEADERBOARD]:n.CHALLENGE_LEADERBOARD_CLICK};e.s(["CODEBUDDY_EVENTS",0,n,"CODEBUDDY_PAGE_NAME",0,r,"FROM",0,a,"FROM_EVENT",0,s,"buildEventData",0,function(e={}){return(0,t.buildEventData)(e,r)},"fireLivePageGtag",0,function(e){(0,t.fireLivePageGtag)({...e,pageName:r})}])},94087,e=>{"use strict";var t=e.i(271645),i=e.i(851361),r=e.i(319358);e.s(["PageViewTracker",0,function(){let e=(0,i.useSendAnalyticsEvent)();return(0,t.useEffect)(()=>{e({...r.CODEBUDDY_EVENTS.PAGE_LOAD,eventData:(0,r.buildEventData)()}),(0,r.fireLivePageGtag)({eventType:r.CODEBUDDY_EVENTS.PAGE_LOAD.eventType,eventName:r.CODEBUDDY_EVENTS.PAGE_LOAD.eventName})},[]),null}])},500747,e=>{"use strict";var t=e.i(843476),i=e.i(271645),r=e.i(397681),a=e.i(914984),n=e.i(692156),s=e.i(851361),l=e.i(319358);let o={title:"Sign up now for Free!",courseType:"codebuddy",urlSlug:"codebuddy-signup-form",config:e.i(437082).DEFAULT_SIGNUP_FIELDS},d=(0,i.createContext)(null);e.s(["SignupModalProvider",0,function({children:e}){let[c,f]=(0,i.useState)(null),u=(0,i.useRef)(null),p=(0,s.useSendAnalyticsEvent)(),h=(0,i.useCallback)(e=>{u.current=document.activeElement??null;let t=l.FROM_EVENT[e.from],i=(0,l.buildEventData)({from:e.from,heading:e.heading});t&&(p({...t,eventData:i}),(0,l.fireLivePageGtag)({eventName:t.eventName,from:e.from})),p({...l.CODEBUDDY_EVENTS.MODAL_OPEN,eventData:i}),f(e)},[p]),m=(0,i.useCallback)(()=>{f(e=>(e&&p({...l.CODEBUDDY_EVENTS.MODAL_CLOSE,eventData:(0,l.buildEventData)({from:e.from,heading:e.heading})}),null)),u.current?.focus?.()},[p]),g=(0,i.useMemo)(()=>({open:h,isOpen:null!==c}),[h,c]);return(0,t.jsxs)(d.Provider,{value:g,children:[e,(0,t.jsx)(r.NSModal,{isOpen:null!==c,onClose:m,hideOnClickAway:!0,showCloseButton:!1,width:"420px",border:"none",animatePresence:"fade",overflow:"hidden",children:c&&(0,t.jsxs)("div",{className:"relative",style:{textAlign:"left"},children:[(0,t.jsx)("button",{type:"button",onClick:m,"aria-label":"Close",className:"text-ds-muted hover:bg-ds-surface absolute top-1 right-1 z-10 flex size-9 cursor-pointer items-center justify-center rounded-full",children:(0,t.jsx)(a.CloseIcon,{className:"size-5"})}),(0,t.jsx)("div",{className:"max-h-[calc(95vh-40px)] overflow-x-hidden overflow-y-auto",children:(0,t.jsx)(n.ApplyForm,{title:c.heading??o.title,courseType:o.courseType,urlSlug:o.urlSlug,config:o.config,pageName:l.CODEBUDDY_PAGE_NAME})})]})})]})},"useSignupModal",0,function(){let e=(0,i.useContext)(d);if(!e)throw Error("useSignupModal must be used within <SignupModalProvider>");return e}],500747)},641068,e=>{"use strict";var t=e.i(843476),i=e.i(500747);e.s(["ModalOpenButton",0,function({cta:e,className:r,children:a,id:n,"aria-label":s}){let{open:l}=(0,i.useSignupModal)();return(0,t.jsx)("button",{type:"button",id:n,"data-from":e.from,"aria-label":s,onClick:()=>l(e),className:r,children:a})}])},358259,e=>{"use strict";var t=e.i(843476),i=e.i(657688),r=e.i(271645),a=e.i(641068),n=e.i(319358);let s="https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6",l={scoreBg:`${s}/696f26880f33bbc61668832d_Icon-bg.svg`,scoreBadge:`${s}/696f26880f33bbc61668832e_Group%2048095898.svg`,cone:`${s}/696f26880f33bbc61668832f_Frame%202147225328.svg`},o=[{title:"Basics of Python",prompt:"Which of these is NOT a valid variable name in Python?",options:[{text:"total_marks",wrongNote:"total_marks – Valid: starts with a letter; letters + underscore allowed."},{text:"_score1",wrongNote:"_score1 – Valid: identifiers can start with _; digits allowed after."},{text:"1student",correct:!0},{text:"name_2",wrongNote:"name_2 – Valid: letter first, then letters, digit, underscore."}]},{title:"Basics of C++",prompt:"What does the following code print?",code:"total = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        total = total + i\nprint(total)",options:[{text:"4",wrongNote:"Only i = 4 counted; but loop also adds 2."},{text:"5",wrongNote:"Would come from 2 + 3; code never adds odd 3."},{text:"6",correct:!0},{text:"15",wrongNote:"Sum of all numbers 1 + 2 + 3 + 4 + 5; but code includes only even ones."}]},{title:"Basics of C++",prompt:"What is the output of this code?",code:"a = [1, 2, 3]\nb = a\na = a + [4]\nprint(b)",options:[{text:"[1, 2, 3]",correct:!0},{text:"[1, 2, 3, 4]",wrongNote:"[1, 2, 3, 4] – Would be true if we had modified the list in-place (e.g. a.append(4)), which we didn’t."},{text:"[4]",wrongNote:"[4] – No operation in the code creates a list with only 4."},{text:"[1, 4]",wrongNote:"[1, 4] – Mixing first and last elements; not the result of any list operation here."}]}],d=["A","B","C","D"];function c(){let[e,i]=(0,r.useState)(0),[a,n]=(0,r.useState)([null,null,null]),[s,l]=(0,r.useState)(!1),c=o[e],h=a[e]??null,m=null!==h,g=a.reduce((e,t,i)=>e+(null!==t&&o[i]?.options[t]?.correct?1:0),0);if(s)return(0,t.jsx)(f,{score:g});if(!c)return null;let x=m&&c.options[h]?.correct===!0;return(0,t.jsx)("div",{className:"rounded-[8px] bg-[#f6f7f9] p-6 md:px-[3.25rem] md:py-16",children:(0,t.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,t.jsxs)("div",{className:"mb-2 flex flex-col items-center justify-between gap-3 md:mb-5 md:flex-row",children:[(0,t.jsx)("div",{className:"flex w-full items-center justify-center rounded-lg bg-[#f6f7f9] px-4 py-2 md:w-auto md:justify-start md:p-0",children:(0,t.jsx)("h3",{className:"text-sm font-medium text-[#5b6271] md:text-2xl",children:c.title})}),(0,t.jsx)("div",{className:"flex w-full items-center gap-1 md:w-auto",children:o.map((i,r)=>(0,t.jsx)("span",{className:`h-2 flex-1 rounded-full md:h-[6px] md:w-[5.25rem] md:flex-none ${r<=e?"bg-[#61a8ff]":"bg-[#c9cfd9]"}`},r))})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-4 rounded-[16px] bg-white p-6",children:[(0,t.jsx)("h3",{className:"text-lg leading-[1.5] font-semibold text-[#16191d]",children:c.prompt}),c.code&&(0,t.jsx)("pre",{className:"overflow-x-auto rounded-lg bg-[#0b0c0e] px-4 py-3 font-mono text-sm leading-[1.6] text-[#e6edf3]",children:c.code}),(0,t.jsx)("div",{className:"flex flex-col gap-3.5",children:c.options.map((i,r)=>{let a=h===r,s=m&&i.correct,l=m&&a&&!i.correct;return(0,t.jsxs)("button",{type:"button",onClick:()=>{!m&&n(t=>t.map((t,i)=>i===e?r:t))},disabled:m,"aria-pressed":a,className:`flex items-center gap-2.5 rounded-lg border py-2.5 pr-3 pl-2 text-left text-sm font-medium tracking-[0.1px] transition-colors ${s?"border-[#a6e6cf] bg-[#f2fcf8] text-[#16191d]":l?"border-[#f3b6bd] bg-[#fdf2f3] text-[#16191d]":"border-[#e1e5ea] text-[#5b6271] hover:border-[#c9cfd9]"}`,children:[(0,t.jsx)("span",{className:"relative flex size-6 shrink-0 items-center justify-center border border-[#5b6271] text-sm leading-[1.2] font-medium text-[#5b6271]",children:s?(0,t.jsx)("span",{className:"absolute inset-0 flex items-center justify-center rounded-[5px] bg-[#eafbf5]",children:(0,t.jsx)(u,{})}):l?(0,t.jsx)("span",{className:"absolute inset-0 flex items-center justify-center rounded-[5px] bg-[#ffe5e7]",children:(0,t.jsx)(p,{})}):d[r]}),(0,t.jsx)("span",{children:i.text})]},i.text)})})]}),m&&(0,t.jsxs)("div",{className:`flex flex-col items-start justify-between gap-3 rounded-xl border px-6 py-4 text-sm leading-[1.57] font-medium max-md:p-3 md:flex-row md:items-center ${x?"border-[#50ce99] bg-[#d9fced]":"border-[#f3b6bd] bg-[#fdecee]"}`,children:[x?(0,t.jsxs)("div",{className:"flex flex-col items-start",children:[(0,t.jsx)("span",{className:"text-base font-semibold text-[#007a51] max-md:text-sm max-md:font-medium",children:"Hurrah!"}),(0,t.jsx)("span",{className:"text-[#16191d]",children:"You’ve got this one right!"})]}):(0,t.jsxs)("div",{className:"flex flex-col items-start",children:[(0,t.jsx)("span",{className:"text-base font-semibold text-[#d22d3a] max-md:text-sm max-md:font-medium",children:"Incorrect answer"}),(0,t.jsx)("span",{className:"text-[#16191d]",children:c.options[h]?.wrongNote})]}),(0,t.jsx)("button",{type:"button",onClick:()=>{e<o.length-1?i(e+1):l(!0)},className:"flex shrink-0 items-center justify-center gap-1 rounded-[10px] border border-white/20 bg-[#0081ea] px-4 py-2.5 font-medium whitespace-nowrap text-white max-md:w-full",children:e<o.length-1?"Next Question":"Submit"})]})]})})}function f({score:e}){return(0,t.jsx)("div",{className:"flex flex-col items-center",children:(0,t.jsxs)("div",{className:"flex w-full max-w-[31.25rem] flex-col items-center gap-5 rounded-2xl bg-white p-8 shadow-[0_4px_4px_rgba(16,24,64,0.06)] max-md:px-4 max-md:py-6",children:[(0,t.jsxs)("div",{className:"relative flex aspect-[436/166] w-full max-w-[27.25rem] flex-col items-center justify-end overflow-hidden rounded-lg",children:[(0,t.jsx)(i.default,{src:l.scoreBg,alt:"",fill:!0,sizes:"436px",className:"object-cover"}),(0,t.jsxs)("div",{className:"relative flex h-[139px] w-full max-w-[7.25rem] items-end justify-center",children:[(0,t.jsx)(i.default,{src:l.scoreBadge,alt:"",width:106,height:156,sizes:"106px",className:"w-full max-w-[6.6rem]"}),(0,t.jsxs)("div",{className:"absolute inset-x-0 top-0 flex h-[4.8rem] flex-col items-center justify-center gap-1 text-white",children:[(0,t.jsxs)("div",{className:"text-[1.4375rem] font-semibold",children:[(0,t.jsx)("span",{className:"text-4xl",children:e}),"/3"]}),(0,t.jsx)("div",{className:"text-sm font-medium",children:"Total Score"})]})]})]}),(0,t.jsxs)("div",{className:"flex flex-col items-center gap-3 text-center",children:[(0,t.jsxs)("h4",{className:"text-2xl leading-[1.4] font-semibold text-[#16191d]",children:["You scored: ",(0,t.jsx)("span",{className:"text-2xl font-semibold",children:e}),"/3"]}),(0,t.jsx)("p",{className:"text-sm font-medium text-[#5b6271]",children:"You did great! Improve your skills with Codebuddy"})]}),(0,t.jsx)(a.ModalOpenButton,{id:"quizSignup",cta:{label:"Sign up",from:n.FROM.QUIZ_SIGNUP},className:"flex w-full items-center justify-center rounded-[10px] border border-white/20 bg-[#0081ea] px-4 py-4 text-base font-medium text-white",children:"Sign up"})]})})}function u(){return(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M7.32917 13.2291L3.85417 9.75414L2.67084 10.9291L7.32917 15.5875L17.3292 5.58748L16.1542 4.41248L7.32917 13.2291Z",fill:"#219C73"})})}function p(){return(0,t.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M15.8333 5.34169L14.6583 4.16669L10 8.82502L5.34167 4.16669L4.16667 5.34169L8.82501 10L4.16667 14.6584L5.34167 15.8334L10 11.175L14.6583 15.8334L15.8333 14.6584L11.175 10L15.8333 5.34169Z",fill:"#D22D48"})})}e.s(["CodebuddyPracticeQuestions",0,function(){return(0,t.jsxs)("section",{id:"hands-on",className:"relative scroll-mt-28 overflow-hidden bg-white py-5 lg:py-20",children:[(0,t.jsxs)("div",{className:"mx-auto w-full max-w-[1232px] px-4",children:[(0,t.jsxs)("div",{className:"mb-9 flex flex-col items-center gap-3 text-center",children:[(0,t.jsx)("span",{className:"inline-flex items-center rounded-full border border-[#e1e5ea] bg-[#f6f7f9] px-[18px] py-2 text-sm font-medium text-[#16191d] md:text-base",children:"No login required - test your skills now!"}),(0,t.jsxs)("h2",{className:"text-center text-[28px] leading-[1.1] font-semibold text-[#16191d] md:text-5xl md:leading-none",children:["Try ",(0,t.jsx)("span",{className:"text-[#2989ff]",children:"Practice"})," Questions"]})]}),(0,t.jsx)(c,{})]}),(0,t.jsx)(i.default,{src:l.cone,alt:"",width:1440,height:58,sizes:"100vw",className:"pointer-events-none absolute inset-x-0 bottom-0 h-auto w-full"})]})}])},942099,e=>{"use strict";var t=e.i(843476);let i="https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/696f26da5b993770487af583_5-star.svg",r=[{star:"https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/696f26da5b993770487af582_4.5-star.svg",starAlt:"4.5 out of 5 stars",text:"I started with the short Python videos on CodeBuddy and they’re so easy to follow. After that, the practice sets make sure I actually remember stuff, not just watch and forget.",name:"Aarav",standard:"11th standard"},{star:i,starAlt:"5 out of 5 stars",text:"With boards, I don’t have time for long courses. CodeBuddy’s small lectures are perfect. I finish one topic, solve a few sets and I’m done for the day.",name:"Sanvi",standard:"12th standard"},{star:i,starAlt:"5 out of 5 stars",text:"The weekly coding challenges are super fun. I try them every Sunday to check where I stand against other students. It actually pushes me to practice more.",name:"Mahima",standard:"12th standard"}],a=`
@keyframes cb-review-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.cb-review-track {
  animation: cb-review-marquee 35s linear infinite;
}
@media (max-width: 1024px) {
  .cb-review-track { animation-duration: 10s; }
}
.cb-review-root:hover .cb-review-track { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .cb-review-track { animation: none; }
}
`;function n({review:e}){return(0,t.jsxs)("div",{className:"flex flex-none flex-col items-start justify-between gap-9 rounded-[12px] bg-[#f6f7f9] p-6",children:[(0,t.jsxs)("div",{className:"w-full",children:[(0,t.jsx)("div",{className:"mb-4 flex flex-col items-start",children:(0,t.jsx)("img",{src:e.star,alt:e.starAlt,width:152,height:24,loading:"lazy"})}),(0,t.jsx)("p",{className:"mb-0 max-w-[13.75rem] text-sm leading-[1.6] font-medium text-[#16191d] lg:max-w-[22.5rem] lg:text-base",children:e.text})]}),(0,t.jsxs)("div",{className:"flex flex-row items-center gap-1 text-xs font-medium tracking-[0.1px] text-[#5b6271] lg:flex-col lg:items-start lg:gap-0 lg:text-base",children:[(0,t.jsx)("div",{className:"text-xs font-medium text-[#16191d] lg:text-base lg:font-semibold",children:e.name}),(0,t.jsx)("div",{children:e.standard})]})]})}e.s(["CodebuddyReviews",0,function(){return(0,t.jsxs)("section",{id:"reviews",className:"scroll-mt-28 overflow-hidden bg-white py-5 lg:py-20",children:[(0,t.jsx)("div",{className:"mx-auto w-full max-w-[1232px] px-4",children:(0,t.jsxs)("div",{className:"mb-4 flex flex-col items-center gap-4 lg:mb-9 lg:gap-3",children:[(0,t.jsx)("div",{className:"flex items-center justify-center rounded-full border border-[#e1e5ea] bg-[#f6f7f9] px-[1.125rem] py-2 text-xs leading-[140%] font-medium text-[#16191d] lg:text-base",children:"Hear from our users"}),(0,t.jsxs)("h2",{className:"text-center text-[1.75rem] leading-[1.1] font-semibold text-[#16191d] lg:text-5xl lg:leading-none",children:["People love using ",(0,t.jsx)("span",{className:"text-[#2989ff]",children:"CodeBuddy"})]})]})}),(0,t.jsx)("div",{className:"px-4 lg:px-10",children:(0,t.jsxs)("div",{className:"cb-review-root relative w-full overflow-hidden",children:[(0,t.jsx)("style",{children:a}),(0,t.jsx)("div",{className:"cb-review-track flex w-max",children:[!1,!0].map(e=>(0,t.jsx)("div",{"aria-hidden":e,className:"flex shrink-0 gap-6 pr-6",children:r.map((e,i)=>(0,t.jsx)(n,{review:e},i))},e?"clone":"orig"))}),(0,t.jsx)("div",{className:"pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent"}),(0,t.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent"})]})})]})}])},76051,e=>{"use strict";var t=e.i(843476),i=e.i(271645);let r="https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/696f26e96311eb0f1428cda6_hs-video-thumbnail.avif";function a(){return(0,t.jsxs)("svg",{viewBox:"0 0 154 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"h-full w-full","aria-hidden":"true",children:[(0,t.jsx)("rect",{width:"153.846",height:"100",rx:"15.3846",fill:"white",fillOpacity:"0.28"}),(0,t.jsx)("rect",{x:"0.5",y:"0.5",width:"152.846",height:"99",rx:"14.8846",stroke:"#606060",strokeOpacity:"0.6"}),(0,t.jsx)("path",{d:"M67.5842 73.5934C65.0201 75.0737 61.815 73.2233 61.815 70.2625L61.815 30.2921C61.815 27.3313 65.0201 25.4808 67.5842 26.9612L102.2 46.9464C104.764 48.4268 104.764 52.1278 102.2 53.6082L67.5842 73.5934Z",fill:"#EEEEEE"})]})}e.s(["CodebuddyNstVideo",0,function(){let[e,n]=(0,i.useState)(!1);return(0,t.jsx)("section",{id:"newton-school-technology",className:"scroll-mt-28 bg-white bg-contain bg-no-repeat py-5 lg:py-20",style:{backgroundImage:"url(https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/696f26e96311eb0f1428cda3_hs-video-bg.svg)",backgroundPosition:"50% 160%"},children:(0,t.jsxs)("div",{className:"mx-auto w-full max-w-[1232px] px-4",children:[(0,t.jsxs)("div",{className:"mx-auto mb-9 flex max-w-[34.375rem] flex-col items-center gap-6 text-center lg:gap-10",children:[(0,t.jsx)("div",{className:"flex items-center justify-center rounded-full border border-[#e1e5ea] bg-[#f6f7f9] px-[1.125rem] py-2 text-xs leading-[140%] font-medium text-[#16191d] lg:text-base",children:"An initiative by"}),(0,t.jsxs)("div",{className:"flex items-center justify-center gap-4 lg:gap-[1.875rem]",children:[(0,t.jsx)("img",{src:"https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/696f26e96311eb0f1428cda1_nst-logo.svg",alt:"Newton School of Technology",width:188,height:40,loading:"lazy",className:"h-auto w-full max-w-[7.5rem] object-contain lg:max-w-[188px]"}),(0,t.jsx)("div",{className:"h-[2.875rem] w-[1.8px] bg-[#c9cfd9]"}),(0,t.jsx)("img",{src:"https://cdn.prod.website-files.com/65f018dedf84c3b4c5ae2a12/695fe5604fb94f43f6d3d9af_Codebuddy.svg",alt:"CodeBuddy",width:132,height:22,loading:"lazy",className:"h-auto w-full max-w-[7.5rem] object-contain lg:max-w-[132px]"})]}),(0,t.jsxs)("div",{className:"mx-auto flex w-full max-w-[34.375rem] flex-col items-center gap-3 text-center",children:[(0,t.jsx)("h2",{className:"text-[1.75rem] leading-[1.1] font-semibold text-[#16191d] lg:text-4xl lg:leading-[1.2]",children:"To provide the best Computer Science Education"}),(0,t.jsxs)("p",{className:"text-sm leading-[1.6] text-[#5b6271] lg:text-lg",children:["A ",(0,t.jsx)("span",{className:"text-[#16191d]",children:"4 year B.Tech in CS & AI degree"})," ",(0,t.jsx)("br",{}),"built with industry experts, blending rigorous academics, coding & real-world projects to make you job-ready from day one."]})]})]}),(0,t.jsx)("div",{className:"relative mx-auto aspect-[1120/585] w-full max-w-[70rem] overflow-hidden rounded-[12px]",children:e?(0,t.jsx)("video",{src:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/013df5bce34f455ea85b05ee9173f8c2.mp4",poster:r,controls:!0,autoPlay:!0,playsInline:!0,className:"h-full w-full object-cover","aria-label":"An initiative by Newton School of Technology — video"}):(0,t.jsx)("button",{type:"button",onClick:()=>n(!0),"aria-label":"Play video",className:"group absolute inset-0 flex cursor-pointer items-center justify-center bg-cover bg-center",style:{backgroundImage:`url(${r})`},children:(0,t.jsx)("span",{className:"flex h-[60px] w-[90px] items-center justify-center backdrop-blur-[5px] lg:h-[100px] lg:w-[154px]",children:(0,t.jsx)(a,{})})})})]})})}])},600882,e=>{"use strict";var t=e.i(843476),i=e.i(271645);let r=[{q:"Who is CodeBuddy for?",a:"High School students, especially 11th, 12th, and drop-year students who want to learn coding —from basics to real projects."},{q:"How is CodeBuddy better than YouTube?",a:"Structured lessons, **500+ practice problems**, real projects, and weekly challenges—no random videos."},{q:"Who teaches on CodeBuddy?",a:"Industry professionals from top tech companies like Amazon and Microsoft"},{q:"When is CodeBuddy launching?",a:"CodeBuddy is launching soon. Join early to get **priority access** and early-user benefits."}];function a({open:e}){return(0,t.jsxs)("span",{className:"relative flex size-6 shrink-0 items-center justify-center",children:[(0,t.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"absolute inset-0",children:(0,t.jsx)("path",{d:"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",stroke:"#2989FF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,t.jsx)("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M1 1H9",stroke:"#2989FF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),!e&&(0,t.jsx)("svg",{width:"2",height:"10",viewBox:"0 0 2 10",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",children:(0,t.jsx)("path",{d:"M1 1V9",stroke:"#2989FF",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]})}e.s(["CodebuddyFaq",0,function(){let[e,n]=(0,i.useState)(0),s=(0,i.useId)();return(0,t.jsx)("section",{id:"faq-section",className:"scroll-mt-28 bg-white py-5 lg:py-20",children:(0,t.jsxs)("div",{className:"mx-auto w-full max-w-[1232px] px-4",children:[(0,t.jsxs)("div",{className:"mb-9 flex flex-col items-center gap-4 lg:gap-3",children:[(0,t.jsx)("div",{className:"flex items-center justify-center rounded-full border border-[#e1e5ea] bg-[#f6f7f9] px-[1.125rem] py-2 text-xs leading-[140%] font-medium text-[#16191d] lg:text-base",children:"FAQs"}),(0,t.jsx)("h2",{className:"text-center text-[1.75rem] leading-[1.1] font-semibold text-[#16191d] lg:text-5xl lg:leading-none",children:"Have Doubts?"})]}),(0,t.jsx)("div",{children:r.map((i,r)=>{let l=e===r,o=`${s}-faq-${r}`;return(0,t.jsxs)("div",{className:"border-b border-[#edeff3] py-3",children:[(0,t.jsx)("h4",{className:"m-0",children:(0,t.jsxs)("button",{type:"button","aria-expanded":l,"aria-controls":o,onClick:()=>n(l?null:r),className:"flex w-full cursor-pointer items-center justify-between gap-3 text-left text-base leading-[1.4] font-medium text-[#16191d] lg:text-lg",children:[(0,t.jsx)("span",{children:i.q}),(0,t.jsx)(a,{open:l})]})}),(0,t.jsx)("div",{className:"grid transition-[grid-template-rows] duration-200 ease-out",style:{gridTemplateRows:l?"1fr":"0fr"},children:(0,t.jsx)("div",{className:"overflow-hidden",children:(0,t.jsx)("div",{id:o,className:"py-3",children:(0,t.jsx)("p",{className:"mb-0 max-w-[52.5rem] text-sm leading-[1.5] text-[#5b6271] lg:text-base",children:i.a})})})})]},r)})}),(0,t.jsxs)("div",{className:"mt-8 text-base text-[#16191d]",children:["For any additional information, write to us at"," ",(0,t.jsx)("a",{href:"mailto:codebuddy.support@newtonschool.co",className:"font-medium text-[#0673f9]",children:"codebuddy.support@newtonschool.co"})]})]})})}])},511604,e=>{e.v(t=>Promise.all(["static/chunks/2-et_hho2aqvl.js"].map(t=>e.l(t))).then(()=>t(164436)))},896615,e=>{e.v(t=>Promise.all(["static/chunks/3klltxhcaam25.js"].map(t=>e.l(t))).then(()=>t(980954)))},401485,e=>{e.v(t=>Promise.all(["static/chunks/3363k0g8j073u.js","static/chunks/2n-gidy722xtj.js"].map(t=>e.l(t))).then(()=>t(873987)))},179909,e=>{e.v(t=>Promise.all(["static/chunks/41kj1t47-_n25.js"].map(t=>e.l(t))).then(()=>t(285692)))},628574,e=>{e.v(t=>Promise.all(["static/chunks/2qirsm4ul044n.js"].map(t=>e.l(t))).then(()=>t(218568)))},490258,e=>{e.v(t=>Promise.all(["static/chunks/2s87rp7nfrl4_.js"].map(t=>e.l(t))).then(()=>t(322465)))},15086,e=>{e.v(t=>Promise.all(["static/chunks/36smk6w2al07x.js"].map(t=>e.l(t))).then(()=>t(269275)))},134362,e=>{e.v(t=>Promise.all(["static/chunks/24_vd97z020im.js"].map(t=>e.l(t))).then(()=>t(57400)))},278533,e=>{e.v(t=>Promise.all(["static/chunks/2dsmc-m5l6-0x.js"].map(t=>e.l(t))).then(()=>t(906322)))}]);