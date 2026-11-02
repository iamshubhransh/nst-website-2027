(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,703109,968081,e=>{"use strict";var t=e.i(997053),i=e.i(271645),a={DISPLAY_BD_D1:"display-bd-d1",DISPLAY_BD_D2:"display-bd-d2",DISPLAY_BD_D3:"display-bd-d3",HEADING_SB_H1:"heading-sb-h1",HEADING_SB_H2:"heading-sb-h2",HEADING_SB_H3:"heading-sb-h3",HEADING_SB_H4:"heading-sb-h4",HEADING_SB_H5:"heading-sb-h5",HEADING_SB_H6:"heading-sb-h6",PARAGRAPH_SB_P1:"paragraph-sb-p1",PARAGRAPH_SB_P2:"paragraph-sb-p2",PARAGRAPH_SB_P3:"paragraph-sb-p3",PARAGRAPH_SB_P4:"paragraph-sb-p4",PARAGRAPH_SB_L1:"paragraph-sb-l1",PARAGRAPH_SB_L2:"paragraph-sb-l2",PARAGRAPH_MD_P1:"paragraph-md-p1",PARAGRAPH_MD_P2:"paragraph-md-p2",PARAGRAPH_MD_P3:"paragraph-md-p3",PARAGRAPH_MD_P4:"paragraph-md-p4",PARAGRAPH_MD_C1:"paragraph-md-c1",PARAGRAPH_MD_L1:"paragraph-md-l1",PARAGRAPH_MD_L2:"paragraph-md-l2",OVERLINE_SB_OL1:"overline-sb-ol1",OVERLINE_SB_OL2:"overline-sb-ol2",ACTION_SB_P1:"action-sb-p1",ACTION_SB_P2:"action-sb-p2",ACTION_SB_LK1:"action-sb-lk1"};Object.freeze(Object.values(a));var n={H1:"h1",H2:"h2",H3:"h3",H4:"h4",H5:"h5",H6:"h6",P:"p",SPAN:"span",DIV:"div",LABEL:"label",CAPTION:"caption",CODE:"code",AUTO:"auto"};Object.freeze(Object.values(n));var r={[a.DISPLAY_BD_D1]:t.css`
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
    `},l={[a.DISPLAY_BD_D1]:n.H1,[a.DISPLAY_BD_D2]:n.H2,[a.DISPLAY_BD_D3]:n.H3,[a.HEADING_SB_H1]:n.H1,[a.HEADING_SB_H2]:n.H2,[a.HEADING_SB_H3]:n.H3,[a.HEADING_SB_H4]:n.H4,[a.HEADING_SB_H5]:n.H5,[a.HEADING_SB_H6]:n.H6,[a.PARAGRAPH_SB_P1]:n.P,[a.PARAGRAPH_SB_P2]:n.P,[a.PARAGRAPH_SB_P3]:n.P,[a.PARAGRAPH_SB_P4]:n.P,[a.PARAGRAPH_SB_L1]:n.LABEL,[a.PARAGRAPH_SB_L2]:n.LABEL,[a.PARAGRAPH_MD_P1]:n.P,[a.PARAGRAPH_MD_P2]:n.P,[a.PARAGRAPH_MD_P3]:n.P,[a.PARAGRAPH_MD_P4]:n.P,[a.PARAGRAPH_MD_C1]:n.CODE,[a.PARAGRAPH_MD_L1]:n.LABEL,[a.PARAGRAPH_MD_L2]:n.LABEL,[a.OVERLINE_SB_OL1]:n.P,[a.OVERLINE_SB_OL2]:n.P,[a.ACTION_SB_P1]:n.SPAN,[a.ACTION_SB_P2]:n.SPAN,[a.ACTION_SB_LK1]:n.SPAN},s=t.styled.p.attrs(e=>({as:e.as||"p"}))`
    margin: 0;
    padding: 0;

    font-family: var(--font-family, 'Mona Sans');
    color: var(--text-emphasis-primary-default, #16191d);

    ${({$variant:e})=>t.css`
            ${e?r[e]:r[a.PARAGRAPH_MD_P1]}
        `};

    ${({$textAlign:e})=>e&&`text-align: ${e};`}
    ${({$textTransform:e})=>e&&`text-transform: ${e};`}
    ${({$fontSize:e})=>e&&`font-size: ${e};`}
    ${({$color:e})=>e&&`color: ${e};`};
`,o=({variant:e="paragraph-md-p1",as:t="auto",color:a="var(--text-emphasis-primary-default, #16191d)",textAlign:r=null,textTransform:o=null,fontSize:d=null,children:c="",className:p="",title:h=null})=>{let f=t===n.AUTO?l[e]:t;return i.default.createElement(s,{$variant:e,as:f,$color:a,$textAlign:r,$textTransform:o,$fontSize:d,className:p,title:h},c)};e.s(["Typography_default",0,o],968081),e.s(["default",0,o],703109)},830249,e=>{"use strict";var t=e.i(271645);e.s(["useParentUrl",0,function(){let[e,i]=(0,t.useState)("");return(0,t.useEffect)(()=>{function e(e){let t=e.data;t&&"object"==typeof t&&"PARENT_URL"===t.type&&"string"==typeof t.url&&i(t.url)}return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]),e}])},397681,e=>{"use strict";var t=e.i(893347),i=e.i(773892),a=e.i(364072),n=e.i(189101),r=e.i(824511),l=e.i(88653),s=e.i(271645),o=e.i(997053),d=(0,o.styled)(r.m.div)`
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
`,p=o.styled.div`
    width: 100%;
    height: var(--spacing-1px, 1px);
    background: var(--border-subtle-primary-default, #e1e5ea);
`,h=o.styled.h2`
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
`,f=o.styled.div`
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
`,u=o.styled.div`
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
`,x=o.styled.div`
    width: 100%;
    position: relative;

    img {
        width: 100%;
        border-radius: var(--corner-radius-8px, 8px);
    }
`,v={slide:{variants:{hidden:{opacity:0,y:-50},visible:{opacity:1,y:0},exit:{opacity:0,y:50}},transition:{duration:.3}},"slide-reverse":{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0},exit:{opacity:0,y:-50}},transition:{duration:.3}},fade:{variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},transition:{duration:.3}},emanate:{}},m=(0,s.forwardRef)(({width:e,height:t,minHeight:i,minWidth:a,maxHeight:n,maxWidth:r,mobileBottomFullWidth:l,modalPadding:o,border:c,children:p,...h},f)=>s.default.createElement(d,{ref:f,$width:e,$height:t,$minHeight:i,$minWidth:a,$maxHeight:n,$maxWidth:r,$mobileBottomFullWidth:l,$modalPadding:o,$border:c,...h},p)),_=(0,s.forwardRef)(({justifyContent:e,children:t},i)=>s.default.createElement(g,{ref:i,$justifyContent:e},t)),A=(0,s.forwardRef)(({overflow:e,children:t,...i},a)=>s.default.createElement(c,{ref:a,$overflow:e,...i},t)),w=(0,s.forwardRef)(({children:e,...t},i)=>s.default.createElement(x,{ref:i,...t},e)),b=(0,s.forwardRef)(({children:e,...t},i)=>s.default.createElement(h,{ref:i,...t},e)),P=(0,s.forwardRef)(({children:e,...t},i)=>s.default.createElement(f,{ref:i,...t},e)),R=(0,s.forwardRef)(({modalBodyMargin:e,children:t,...i},a)=>s.default.createElement(u,{ref:a,$modalBodyMargin:e,...i},t)),y=(0,s.forwardRef)(({...e},t)=>s.default.createElement(p,{ref:t,...e})),E=(0,s.forwardRef)((e,r)=>{let{isOpen:o=!0,banner:p=null,title:m=null,description:_=null,body:A=null,action:w=null,height:b="auto",width:P="500px",minHeight:R=null,minWidth:y=null,maxHeight:E="95vh",maxWidth:S="95vw",onHide:H=()=>{},onClose:B=()=>{},mobileBottomFullWidth:N=!1,modalPadding:C="20px",border:L="1px solid var(--border-subtle-primary-default, #e1e5ea)",modalBodyMargin:D=null,showCloseButton:z=!1,hideOnClickAway:I=!1,blurBackground:k=!1,animatePresence:$="fade",clickEvent:G=null,children:O=null,shouldFocusOnFirstElement:j=!0,shouldDisableScroll:M=!0,overflow:T="visible",className:U}=e,F=(0,s.useRef)(null),W=()=>{"function"==typeof H&&H(),"function"==typeof B&&B()};(0,s.useImperativeHandle)(r,()=>F.current),(0,i.useDisableBodyScroll_default)(o),(0,i.useKeyboardEvent_default)({onKeyPress:()=>{I&&W()},keyCodes:["Escape"],config:{shouldDetect:o}});let q=(0,s.useId)(),Y=(0,s.useMemo)(()=>{var e,t;return e=$,t=G,"emanate"===e?"number"==typeof(null==t?void 0:t.clientX)&&"number"==typeof(null==t?void 0:t.clientY)?((e,t)=>{let i,a;try{i=e-window.innerWidth/2,a=t-window.innerHeight/2}catch(e){i=0,a=0}return{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{scale:0,opacity:0,x:i,y:a},visible:{scale:1,opacity:1,x:0,y:0},exit:{scale:0,opacity:0,x:i,y:a}},transition:{duration:.3}}})(t.clientX,t.clientY):{}:{initial:"hidden",animate:"visible",exit:"exit",...e?v[e]:{}}},[$,G]),V=(0,s.useMemo)(()=>(({isOpen:e,animatePresence:t,clickEvent:i})=>!!e&&("emanate"!==t||"number"==typeof(null==i?void 0:i.clientX)&&"number"==typeof(null==i?void 0:i.clientY)))({isOpen:o,animatePresence:$,clickEvent:G}),[o,$,G]);return s.default.createElement(a.motion_default,null,s.default.createElement(l.AnimatePresence,null,V&&s.default.createElement(t.Overlay_default,{shouldDisableScroll:M,onOverlayClick:()=>{I&&W()},shouldTintOverlay:!0,shouldBlurOverlay:k,shouldCenterContent:!0,"data-testid":"testid-modalwrapper",className:U,animationDuration:.3,shouldFocusOnFirstElement:j},s.default.createElement(d,{onClick:e=>e.stopPropagation(),ref:F,$width:P,$height:b,$minHeight:R,$minWidth:y,$maxHeight:E,$maxWidth:S,$mobileBottomFullWidth:N,$modalPadding:C,$border:L,"aria-labelledby":`modal-title-${q}`,"aria-describedby":`modal-description-${q}`,"aria-modal":"true",role:"dialog","data-testid":"testid-modal",...Y},s.default.createElement(c,{$overflow:T},z&&s.default.createElement(g,{$justifyContent:"end"},s.default.createElement(n.IconButton_default,{onClick:W,size:"small",variant:"tertiary",color:"neutral",icon:"close",ariaLabel:"Close",buttonProps:{autoFocus:!0}})),p&&s.default.createElement(x,null,p),m&&s.default.createElement(h,{id:`modal-title-${q}`},m),_&&s.default.createElement(f,{id:`modal-description-${q}`},_),A&&s.default.createElement(u,{$modalBodyMargin:D},A),O&&s.default.createElement(u,{$modalBodyMargin:D},O)),w&&s.default.createElement(g,null,w)))))});E.Modal=m,E.Main=A,E.Banner=w,E.Title=b,E.Description=P,E.Body=R,E.Action=_,E.Divider=y,e.s(["NSModal",0,E],397681)},914984,e=>{"use strict";var t=e.i(843476);e.s(["ArrowRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M5 12h14m0 0-6-6m6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronLeftIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m15 6-6 6 6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m9 6 6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"CloseIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M6 6l12 12M18 6 6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"RadioUncheckedIcon",0,function({className:e}){return(0,t.jsx)("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":!0,focusable:"false",className:e,children:(0,t.jsx)("path",{d:"M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 14.6 5.4 18.3333 10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667ZM10 16.6667C6.31667 16.6667 3.33333 13.6833 3.33333 10C3.33333 6.31667 6.31667 3.33333 10 3.33333C13.6833 3.33333 16.6667 6.31667 16.6667 10C16.6667 13.6833 13.6833 16.6667 10 16.6667Z",fill:"currentColor"})})},"SparkIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M12 2c.45 4.2 2.3 6.05 6.5 6.5-4.2.45-6.05 2.3-6.5 6.5-.45-4.2-2.3-6.05-6.5-6.5C9.7 8.05 11.55 6.2 12 2z"})})},"YouTubePlayIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 68 48",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("path",{d:"M66.5 7.5a8.5 8.5 0 0 0-6-6C55.2 0 34 0 34 0S12.8 0 7.5 1.5a8.5 8.5 0 0 0-6 6A89 89 0 0 0 0 24a89 89 0 0 0 1.5 16.5 8.5 8.5 0 0 0 6 6C12.8 48 34 48 34 48s21.2 0 26.5-1.5a8.5 8.5 0 0 0 6-6A89 89 0 0 0 68 24a89 89 0 0 0-1.5-16.5z",fill:"#FF0000"}),(0,t.jsx)("path",{d:"M27.2 34.29 44.85 24 27.2 13.71v20.58z",fill:"#fff"})]})}])},356105,527341,e=>{"use strict";var t=e.i(271645),i=e.i(336835);let a="multi_step_rcb_form_partial_fill_hash";function n(e){try{return window.localStorage.getItem(e)??""}catch{return""}}function r(e,t){try{window.localStorage.setItem(e,t)}catch{}}function l(e){try{window.localStorage.removeItem(e)}catch{}}e.s(["usePartialRcb",0,function(e){let s=e?.resumeStoredHash??!0,o=e?.filedScope?"multi_step_rcb_form_filed_hash:"+e.filedScope:"",d=(0,t.useRef)(o);d.current=o;let c=(0,t.useRef)(!1),p=(0,t.useRef)(e?.onHash);p.current=e?.onHash;let h=(0,t.useRef)(e?.hashSource);h.current=e?.hashSource;let f=(0,t.useRef)(""),u=(0,t.useRef)(""),g=(0,t.useRef)(Promise.resolve());return(0,t.useEffect)(()=>{if(!s)return;let e=d.current?n(d.current):"";e?(f.current=e,c.current=!0):f.current=n(a)},[]),{save:(0,t.useCallback)((e,t=!1,{updateLsq:n=!1,keepHash:o=!1}={})=>{let x=async()=>{let g;if(!t&&!(e.fullName.trim()||e.phone.trim()||e.email.trim()||Object.values(e.qualifiers).some(Boolean))||!t&&!n&&c.current)return{ok:!0};let x=JSON.stringify({input:e,updateLsq:n});return t||x!==u.current?((u.current=x,!f.current&&h.current&&(f.current=h.current()),f.current)?g=await (0,i.updateRcb)(f.current,e,t,n):(g=await (0,i.createRcb)(e,t,n)).ok&&g.hash&&(f.current=g.hash,p.current?.(g.hash),s&&r(a,g.hash)),g.ok||u.current!==x||(u.current=""),g.ok&&s&&(t||n)&&(l(a),d.current&&(o&&!t?r(d.current,f.current):l(d.current))),{ok:g.ok,error:g.error}):(n&&!o&&s&&(l(a),d.current&&l(d.current)),{ok:!0})},v=g.current.then(x,x);return g.current=v.catch(()=>{}),v},[s])}}],356105);var s=e.i(680395),o=e.i(58863);let d=/^[a-z ,.'-]+$/i,c=/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;e.s(["buildRcbInput",0,function(e){return{fullName:e.name,phone:e.phone,email:e.email,qualifiers:e.answers,whatsapp:e.whatsapp,from:e.from,parentUrl:e.parentUrl,nextUrl:e.nextUrl,utmParams:(0,o.getUtmParams)(),responseType:e.responseType,formVariant:e.formVariant,...e.extraLeadFields?{extraLeadFields:e.extraLeadFields}:{}}},"flattenRcbSteps",0,function(e){return e.flatMap(e=>e.questions)},"rcbContactErrorMessage",0,function(e,t){switch(e){case"name":return t.trim()?"Full Name can only contain alphabets":"Full Name is Required";case"phone":return t?"Invalid Phone Number":"Phone Number is Required";case"email":return t.trim()?"Enter a valid email address":"Email is Required"}},"rcbContactErrors",0,function({name:e,phone:t,email:i},{requireEmail:a}){return{name:0===e.trim().length||!d.test(e.trim()),phone:10!==t.replace(/\D/g,"").length,email:!!a&&!c.test(i.trim())}},"seedAnswers",0,function(e,t){if(!e)return{};let i={};for(let a of t){let t=e.qualifierAnswers[a.key];if(!t)continue;let n=a.items.find(e=>(0,s.normalizeQualifierValue)(e.value)===(0,s.normalizeQualifierValue)(t));n&&(i[a.key]=n.value)}return i}],527341)},92829,e=>{"use strict";var t=e.i(843476);let i=(0,e.i(770703).default)(()=>e.A(623645),{loadableGenerated:{modules:[257532]},ssr:!1,loading:()=>null});e.s(["SuccessCheckmark",0,function({size:e=132,label:a="Submitted successfully"}){let n=e/132;return(0,t.jsx)("div",{className:"relative overflow-hidden",style:{width:e,height:e},...a?{role:"img","aria-label":a}:{"aria-hidden":!0},children:(0,t.jsx)("div",{className:"absolute",style:{left:-30.8*n,top:-31.9*n,width:194.7*n,height:194.7*n},children:(0,t.jsx)(i,{})})})}])},603064,e=>{"use strict";var t=e.i(843476),i=e.i(92829);e.s(["SubmissionSuccess",0,function(){return(0,t.jsxs)("div",{className:"flex flex-col items-center overflow-clip rounded-2xl bg-white text-center",children:[(0,t.jsx)("div",{className:"flex w-full justify-center bg-[rgba(217,252,237,0.3)] py-4",children:(0,t.jsx)(i.SuccessCheckmark,{})}),(0,t.jsxs)("div",{className:"flex w-full flex-col items-center gap-1",children:[(0,t.jsx)("p",{className:"font-ds text-lg leading-7 font-semibold tracking-[0.06px] text-[#16191d]",children:"Your submission was successful!"}),(0,t.jsx)("p",{className:"font-ds text-base leading-[26px] font-medium tracking-[0.1px] text-[#5b6271]",children:"Our team will reach out to you shortly."})]})]})}])},315822,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(397681),n=e.i(85842),r=e.i(603064),l=e.i(662732),s=e.i(527341);let o=[{key:"highest_qualification",label:"What is your highest qualification?",requiredLabel:"Highest Qualification is Required",items:[{label:"12th",value:"12th"},{label:"Diploma",value:"diploma"},{label:"Undergraduate",value:"undergraduate"},{label:"Post Graduate",value:"post_graduate"}],weight:35},{key:"graduation_year",label:"Graduation Year (College passing out year)",requiredLabel:"Graduation Year is Required",items:n.GRADUATION_YEAR_QUALIFIER.items,weight:20}],d={from:l.FORM_SOURCE[l.FROM.NAV_CALLBACK],heading:"Request Callback",responseType:"PUBLIC_WEBSITE_DS_HOME_REQUEST_CALLBACK_FORM",qualifiers:o},c={heading:"Alumni Connect",responseType:"ALUMNI_CONNECT_REQUEST_CALLBACK_FORM",qualifiers:o},p="[&_[role=dialog]]:bg-transparent! [&_[role=dialog]]:[box-shadow:none]! min-[480px]:[&_[role=dialog]]:rounded-[16px]! min-[480px]:[&_[role=dialog]]:[box-shadow:6px_6px_0_0_#070707]!",h="min-[480px]:[--nsr-modal-width:min(calc(100vw_-_32px),512px)] min-[480px]:has-[form]:[--nsr-modal-width:min(calc(100vw_-_32px),512px)]",f={"alumni-connect":{overlay:[p,"[--bg-subtle-alpha-overlay:rgba(13,17,23,0.7)] [--nsr-modal-width:95vw] has-[form]:[--nsr-modal-width:calc(100vw_-_30px)]",h].join(" "),card:"rounded-[15px] pt-[8px] min-[480px]:rounded-[16px] min-[480px]:pt-[10px]",close:"top-[13.13px] right-[13.13px] h-[37.51px] w-[37.51px] items-center min-[480px]:top-[14px] min-[480px]:right-[14px] min-[480px]:h-[40px] min-[480px]:w-[40px]"},callback:{overlay:[p,"[--bg-subtle-alpha-overlay:rgba(0,0,0,0.27)] min-[480px]:[--bg-subtle-alpha-overlay:rgba(13,17,23,0.46)] [--nsr-modal-width:95vw] has-[form]:[--nsr-modal-width:calc(100vw_-_22.5px)]",h].join(" "),card:"rounded-[20px] border border-[#dad3d3] pt-[4px] min-[480px]:rounded-[16px] min-[480px]:border-0 min-[480px]:pt-[20px]",close:"top-[10.5px] right-[10.06px] h-[35px] w-[35px] items-center min-[480px]:top-[24px] min-[480px]:right-[24px] min-[480px]:h-[40.31px] min-[480px]:items-start"}};function u(){return(0,t.jsxs)("svg",{viewBox:"0 0 25 25",fill:"none","aria-hidden":"true",className:"block w-full",children:[(0,t.jsx)("path",{d:"M18.8286 6.59607L6.82861 18.5961",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M6.82861 6.59607L18.8286 18.5961",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}e.s(["ReviewsModalHost",0,function({modal:e,onClose:p}){var h,g,x;let v,m,_=(0,i.useRef)(null),A=null!==e,w=e?"callback"===e.kind?d.heading:c.heading:"";(0,i.useEffect)(()=>{w&&_.current?.closest('[role="dialog"]')?.setAttribute("aria-label",w)},[w,e?.openId]),(0,i.useEffect)(()=>{if(!A)return;let e=e=>{if("Tab"!==e.key)return;let t=_.current;if(!t)return;let i=Array.from(t.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(e=>e.getClientRects().length>0),a=i[0],n=i[i.length-1];if(!a||!n)return;let r=document.activeElement,l=e.shiftKey?Node.DOCUMENT_POSITION_PRECEDING:Node.DOCUMENT_POSITION_FOLLOWING;r&&t.contains(r)&&i.some(e=>e!==r&&r.compareDocumentPosition(e)&l)||(e.preventDefault(),(e.shiftKey?n:a).focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[A]);let b=e?f[e.kind]:null;return(0,t.jsx)(a.NSModal,{isOpen:A,onClose:p,hideOnClickAway:!0,showCloseButton:!1,width:"var(--nsr-modal-width)",maxHeight:"none",border:"none",animatePresence:"fade",overflow:"hidden",modalPadding:"0",className:b?.overlay,children:e&&b?(0,t.jsxs)("div",{ref:_,className:`grauity-portal-font font-ds nsr-typography relative w-full overflow-hidden bg-white text-left ${b.card}`,children:[(0,t.jsx)("button",{type:"button",onClick:p,"aria-label":"Close",className:`absolute z-10 flex justify-center rounded-[4px] bg-[#1d2736] p-[5px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0673f9] ${b.close}`,children:(0,t.jsx)(u,{})}),(0,t.jsx)("div",{"data-clarity-mask":"true",children:"callback"===e.kind?(0,t.jsx)(n.RcbForm,{...d,prefill:e.prefill,autoSubmit:function(e){if(!e)return!1;let t=(0,s.seedAnswers)(e,o);return o.every(e=>!!t[e.key])}(e.prefill),successSlot:(0,t.jsx)(r.SubmissionSuccess,{}),pageName:l.REVIEWS_PAGE_NAME,parentUrl:window.location.href},e.openId):(0,t.jsx)(n.RcbForm,{...c,...(h=e.alum,g=e.status,x=e.placement,v={alumni_full_name:h.name,alumni_connect_status:g},h.degree&&(v.alumni_degree=h.degree),h.background&&(v.alumni_background=h.background),h.location&&(v.alumni_location=h.location),m=l.ALUMNI_CONNECT_SOURCE.REQUEST_CONNECT,"initiated"===g&&(m="featured"===x?l.ALUMNI_CONNECT_SOURCE.FEATURED_CHAT_NOW:l.ALUMNI_CONNECT_SOURCE.CHAT_NOW),{from:m,nextUrl:"initiated"===g?h.whatsapp:void 0,extraLeadFields:v}),prefill:e.prefill,successSlot:(0,t.jsx)(r.SubmissionSuccess,{}),pageName:l.REVIEWS_PAGE_NAME,parentUrl:window.location.href},e.openId)})]}):null})}],315822)},623645,e=>{e.v(t=>Promise.all(["static/chunks/18grolkayrg_h.js","static/chunks/02gzc6huqzhlf.js"].map(t=>e.l(t))).then(()=>t(257532)))}]);