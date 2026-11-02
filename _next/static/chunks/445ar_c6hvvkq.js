(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,703109,968081,e=>{"use strict";var t=e.i(997053),i=e.i(271645),n={DISPLAY_BD_D1:"display-bd-d1",DISPLAY_BD_D2:"display-bd-d2",DISPLAY_BD_D3:"display-bd-d3",HEADING_SB_H1:"heading-sb-h1",HEADING_SB_H2:"heading-sb-h2",HEADING_SB_H3:"heading-sb-h3",HEADING_SB_H4:"heading-sb-h4",HEADING_SB_H5:"heading-sb-h5",HEADING_SB_H6:"heading-sb-h6",PARAGRAPH_SB_P1:"paragraph-sb-p1",PARAGRAPH_SB_P2:"paragraph-sb-p2",PARAGRAPH_SB_P3:"paragraph-sb-p3",PARAGRAPH_SB_P4:"paragraph-sb-p4",PARAGRAPH_SB_L1:"paragraph-sb-l1",PARAGRAPH_SB_L2:"paragraph-sb-l2",PARAGRAPH_MD_P1:"paragraph-md-p1",PARAGRAPH_MD_P2:"paragraph-md-p2",PARAGRAPH_MD_P3:"paragraph-md-p3",PARAGRAPH_MD_P4:"paragraph-md-p4",PARAGRAPH_MD_C1:"paragraph-md-c1",PARAGRAPH_MD_L1:"paragraph-md-l1",PARAGRAPH_MD_L2:"paragraph-md-l2",OVERLINE_SB_OL1:"overline-sb-ol1",OVERLINE_SB_OL2:"overline-sb-ol2",ACTION_SB_P1:"action-sb-p1",ACTION_SB_P2:"action-sb-p2",ACTION_SB_LK1:"action-sb-lk1"};Object.freeze(Object.values(n));var r={H1:"h1",H2:"h2",H3:"h3",H4:"h4",H5:"h5",H6:"h6",P:"p",SPAN:"span",DIV:"div",LABEL:"label",CAPTION:"caption",CODE:"code",AUTO:"auto"};Object.freeze(Object.values(r));var a={[n.DISPLAY_BD_D1]:t.css`
        font-size: var(--font-size-fs-120, 76px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-140, 92px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[n.DISPLAY_BD_D2]:t.css`
        font-size: var(--font-size-fs-110, 64px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-130, 76px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[n.DISPLAY_BD_D3]:t.css`
        font-size: var(--font-size-fs-100, 52px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-120, 64px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[n.HEADING_SB_H1]:t.css`
        font-size: var(--font-size-fs-90, 40px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-110, 48px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[n.HEADING_SB_H2]:t.css`
        font-size: var(--font-size-fs-80, 36px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-100, 42px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[n.HEADING_SB_H3]:t.css`
        font-size: var(--font-size-fs-70, 28px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-90, 32px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[n.HEADING_SB_H4]:t.css`
        font-size: var(--font-size-fs-60, 24px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[n.HEADING_SB_H5]:t.css`
        font-size: var(--font-size-fs-50, 20px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-60, 24px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[n.HEADING_SB_H6]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-40, 20px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[n.PARAGRAPH_SB_P1]:t.css`
        font-size: var(--font-size-fs-40, 18px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[n.PARAGRAPH_SB_P2]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[n.PARAGRAPH_SB_P3]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-10, 0.016px);
    `,[n.PARAGRAPH_SB_P4]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-30, 18px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[n.PARAGRAPH_SB_L1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,[n.PARAGRAPH_SB_L2]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-10, 14px);
        letter-spacing: var(--letter-spacing-ls-40, 0.25px);
    `,[n.PARAGRAPH_MD_P1]:t.css`
        font-size: var(--font-size-fs-40, 18px);
        font-weight: var(--font-weight-fw-10, 500);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[n.PARAGRAPH_MD_P2]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[n.PARAGRAPH_MD_P3]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[n.PARAGRAPH_MD_P4]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-30, 18px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[n.PARAGRAPH_MD_C1]:t.css`
        font-family: 'Fira Code';
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-00, 450);
        line-height: var(--line-height-lh-40, 20px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[n.PARAGRAPH_MD_L1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-60, 0.5px);
    `,[n.PARAGRAPH_MD_L2]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-10, 14px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,[n.OVERLINE_SB_OL1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-70, 1.6px);
        text-transform: uppercase;
    `,[n.OVERLINE_SB_OL2]:t.css`
        font-size: var(--font-size-fs-00, 11px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-00, 12px);
        letter-spacing: var(--letter-spacing-ls-80, 2px);
        text-transform: uppercase;
    `,[n.ACTION_SB_P1]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[n.ACTION_SB_P2]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,[n.ACTION_SB_LK1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-80, 2px);
        text-transform: uppercase;
    `},s={[n.DISPLAY_BD_D1]:r.H1,[n.DISPLAY_BD_D2]:r.H2,[n.DISPLAY_BD_D3]:r.H3,[n.HEADING_SB_H1]:r.H1,[n.HEADING_SB_H2]:r.H2,[n.HEADING_SB_H3]:r.H3,[n.HEADING_SB_H4]:r.H4,[n.HEADING_SB_H5]:r.H5,[n.HEADING_SB_H6]:r.H6,[n.PARAGRAPH_SB_P1]:r.P,[n.PARAGRAPH_SB_P2]:r.P,[n.PARAGRAPH_SB_P3]:r.P,[n.PARAGRAPH_SB_P4]:r.P,[n.PARAGRAPH_SB_L1]:r.LABEL,[n.PARAGRAPH_SB_L2]:r.LABEL,[n.PARAGRAPH_MD_P1]:r.P,[n.PARAGRAPH_MD_P2]:r.P,[n.PARAGRAPH_MD_P3]:r.P,[n.PARAGRAPH_MD_P4]:r.P,[n.PARAGRAPH_MD_C1]:r.CODE,[n.PARAGRAPH_MD_L1]:r.LABEL,[n.PARAGRAPH_MD_L2]:r.LABEL,[n.OVERLINE_SB_OL1]:r.P,[n.OVERLINE_SB_OL2]:r.P,[n.ACTION_SB_P1]:r.SPAN,[n.ACTION_SB_P2]:r.SPAN,[n.ACTION_SB_LK1]:r.SPAN},l=t.styled.p.attrs(e=>({as:e.as||"p"}))`
    margin: 0;
    padding: 0;

    font-family: var(--font-family, 'Mona Sans');
    color: var(--text-emphasis-primary-default, #16191d);

    ${({$variant:e})=>t.css`
            ${e?a[e]:a[n.PARAGRAPH_MD_P1]}
        `};

    ${({$textAlign:e})=>e&&`text-align: ${e};`}
    ${({$textTransform:e})=>e&&`text-transform: ${e};`}
    ${({$fontSize:e})=>e&&`font-size: ${e};`}
    ${({$color:e})=>e&&`color: ${e};`};
`,o=({variant:e="paragraph-md-p1",as:t="auto",color:n="var(--text-emphasis-primary-default, #16191d)",textAlign:a=null,textTransform:o=null,fontSize:c=null,children:p="",className:d="",title:h=null})=>{let f=t===r.AUTO?s[e]:t;return i.default.createElement(l,{$variant:e,as:f,$color:n,$textAlign:a,$textTransform:o,$fontSize:c,className:d,title:h},p)};e.s(["Typography_default",0,o],968081),e.s(["default",0,o],703109)},830249,e=>{"use strict";var t=e.i(271645);e.s(["useParentUrl",0,function(){let[e,i]=(0,t.useState)("");return(0,t.useEffect)(()=>{function e(e){let t=e.data;t&&"object"==typeof t&&"PARENT_URL"===t.type&&"string"==typeof t.url&&i(t.url)}return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]),e}])},397681,e=>{"use strict";var t=e.i(893347),i=e.i(773892),n=e.i(364072),r=e.i(189101),a=e.i(824511),s=e.i(88653),l=e.i(271645),o=e.i(997053),c=(0,o.styled)(a.m.div)`
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
`,d=o.styled.div`
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
`,x=o.styled.div`
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
`;var u=o.styled.div`
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
`,m={slide:{variants:{hidden:{opacity:0,y:-50},visible:{opacity:1,y:0},exit:{opacity:0,y:50}},transition:{duration:.3}},"slide-reverse":{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0},exit:{opacity:0,y:-50}},transition:{duration:.3}},fade:{variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},transition:{duration:.3}},emanate:{}},v=(0,l.forwardRef)(({width:e,height:t,minHeight:i,minWidth:n,maxHeight:r,maxWidth:a,mobileBottomFullWidth:s,modalPadding:o,border:p,children:d,...h},f)=>l.default.createElement(c,{ref:f,$width:e,$height:t,$minHeight:i,$minWidth:n,$maxHeight:r,$maxWidth:a,$mobileBottomFullWidth:s,$modalPadding:o,$border:p,...h},d)),w=(0,l.forwardRef)(({justifyContent:e,children:t},i)=>l.default.createElement(u,{ref:i,$justifyContent:e},t)),A=(0,l.forwardRef)(({overflow:e,children:t,...i},n)=>l.default.createElement(p,{ref:n,$overflow:e,...i},t)),b=(0,l.forwardRef)(({children:e,...t},i)=>l.default.createElement(g,{ref:i,...t},e)),P=(0,l.forwardRef)(({children:e,...t},i)=>l.default.createElement(h,{ref:i,...t},e)),_=(0,l.forwardRef)(({children:e,...t},i)=>l.default.createElement(f,{ref:i,...t},e)),y=(0,l.forwardRef)(({modalBodyMargin:e,children:t,...i},n)=>l.default.createElement(x,{ref:n,$modalBodyMargin:e,...i},t)),R=(0,l.forwardRef)(({...e},t)=>l.default.createElement(d,{ref:t,...e})),j=(0,l.forwardRef)((e,a)=>{let{isOpen:o=!0,banner:d=null,title:v=null,description:w=null,body:A=null,action:b=null,height:P="auto",width:_="500px",minHeight:y=null,minWidth:R=null,maxHeight:j="95vh",maxWidth:H="95vw",onHide:S=()=>{},onClose:N=()=>{},mobileBottomFullWidth:B=!1,modalPadding:D="20px",border:k="1px solid var(--border-subtle-primary-default, #e1e5ea)",modalBodyMargin:z=null,showCloseButton:C=!1,hideOnClickAway:E=!1,blurBackground:L=!1,animatePresence:G="fade",clickEvent:I=null,children:$=null,shouldFocusOnFirstElement:O=!0,shouldDisableScroll:M=!0,overflow:V="visible",className:q}=e,U=(0,l.useRef)(null),T=()=>{"function"==typeof S&&S(),"function"==typeof N&&N()};(0,l.useImperativeHandle)(a,()=>U.current),(0,i.useDisableBodyScroll_default)(o),(0,i.useKeyboardEvent_default)({onKeyPress:()=>{E&&T()},keyCodes:["Escape"],config:{shouldDetect:o}});let F=(0,l.useId)(),X=(0,l.useMemo)(()=>{var e,t;return e=G,t=I,"emanate"===e?"number"==typeof(null==t?void 0:t.clientX)&&"number"==typeof(null==t?void 0:t.clientY)?((e,t)=>{let i,n;try{i=e-window.innerWidth/2,n=t-window.innerHeight/2}catch(e){i=0,n=0}return{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{scale:0,opacity:0,x:i,y:n},visible:{scale:1,opacity:1,x:0,y:0},exit:{scale:0,opacity:0,x:i,y:n}},transition:{duration:.3}}})(t.clientX,t.clientY):{}:{initial:"hidden",animate:"visible",exit:"exit",...e?m[e]:{}}},[G,I]),Y=(0,l.useMemo)(()=>(({isOpen:e,animatePresence:t,clickEvent:i})=>!!e&&("emanate"!==t||"number"==typeof(null==i?void 0:i.clientX)&&"number"==typeof(null==i?void 0:i.clientY)))({isOpen:o,animatePresence:G,clickEvent:I}),[o,G,I]);return l.default.createElement(n.motion_default,null,l.default.createElement(s.AnimatePresence,null,Y&&l.default.createElement(t.Overlay_default,{shouldDisableScroll:M,onOverlayClick:()=>{E&&T()},shouldTintOverlay:!0,shouldBlurOverlay:L,shouldCenterContent:!0,"data-testid":"testid-modalwrapper",className:q,animationDuration:.3,shouldFocusOnFirstElement:O},l.default.createElement(c,{onClick:e=>e.stopPropagation(),ref:U,$width:_,$height:P,$minHeight:y,$minWidth:R,$maxHeight:j,$maxWidth:H,$mobileBottomFullWidth:B,$modalPadding:D,$border:k,"aria-labelledby":`modal-title-${F}`,"aria-describedby":`modal-description-${F}`,"aria-modal":"true",role:"dialog","data-testid":"testid-modal",...X},l.default.createElement(p,{$overflow:V},C&&l.default.createElement(u,{$justifyContent:"end"},l.default.createElement(r.IconButton_default,{onClick:T,size:"small",variant:"tertiary",color:"neutral",icon:"close",ariaLabel:"Close",buttonProps:{autoFocus:!0}})),d&&l.default.createElement(g,null,d),v&&l.default.createElement(h,{id:`modal-title-${F}`},v),w&&l.default.createElement(f,{id:`modal-description-${F}`},w),A&&l.default.createElement(x,{$modalBodyMargin:z},A),$&&l.default.createElement(x,{$modalBodyMargin:z},$)),b&&l.default.createElement(u,null,b)))))});j.Modal=v,j.Main=A,j.Banner=b,j.Title=P,j.Description=_,j.Body=y,j.Action=w,j.Divider=R,e.s(["NSModal",0,j],397681)},914984,e=>{"use strict";var t=e.i(843476);e.s(["ArrowRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M5 12h14m0 0-6-6m6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronLeftIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m15 6-6 6 6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m9 6 6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"CloseIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M6 6l12 12M18 6 6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"RadioUncheckedIcon",0,function({className:e}){return(0,t.jsx)("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":!0,focusable:"false",className:e,children:(0,t.jsx)("path",{d:"M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 14.6 5.4 18.3333 10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667ZM10 16.6667C6.31667 16.6667 3.33333 13.6833 3.33333 10C3.33333 6.31667 6.31667 3.33333 10 3.33333C13.6833 3.33333 16.6667 6.31667 16.6667 10C16.6667 13.6833 13.6833 16.6667 10 16.6667Z",fill:"currentColor"})})},"SparkIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M12 2c.45 4.2 2.3 6.05 6.5 6.5-4.2.45-6.05 2.3-6.5 6.5-.45-4.2-2.3-6.05-6.5-6.5C9.7 8.05 11.55 6.2 12 2z"})})},"YouTubePlayIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 68 48",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("path",{d:"M66.5 7.5a8.5 8.5 0 0 0-6-6C55.2 0 34 0 34 0S12.8 0 7.5 1.5a8.5 8.5 0 0 0-6 6A89 89 0 0 0 0 24a89 89 0 0 0 1.5 16.5 8.5 8.5 0 0 0 6 6C12.8 48 34 48 34 48s21.2 0 26.5-1.5a8.5 8.5 0 0 0 6-6A89 89 0 0 0 68 24a89 89 0 0 0-1.5-16.5z",fill:"#FF0000"}),(0,t.jsx)("path",{d:"M27.2 34.29 44.85 24 27.2 13.71v20.58z",fill:"#fff"})]})}])},680395,e=>{"use strict";let t="ns_rcb_unlock_v2";function i(){let e=function(e,t){try{let i=e().getItem(t);if(!i)return null;return JSON.parse(i)}catch{return null}}(()=>window.sessionStorage,t);if(!e||1!==e.v||!e.profile)return null;let i=e.profile;return"string"==typeof i.fullName&&"string"==typeof i.phone&&i.fullName.trim()&&10===i.phone.replace(/\D/g,"").length?{fullName:i.fullName,phone:i.phone,email:"string"==typeof i.email?i.email:"",whatsapp:!!i.whatsapp,qualifierAnswers:i.qualifierAnswers&&"object"==typeof i.qualifierAnswers?i.qualifierAnswers:{},savedAt:"number"==typeof i.savedAt?i.savedAt:0}:null}e.s(["DEFAULT_RCB_QUALIFIER_KEYS",0,["highest_qualification","graduation_year"],"isLeadUnlocked",0,function(){return null!==i()},"mergeUnlockProfile",0,function(e){let n=i();!function(e,t,i){try{e().setItem(t,JSON.stringify(i))}catch{return!1}}(()=>window.sessionStorage,t,{v:1,profile:{fullName:e.fullName,phone:e.phone,email:e.email,whatsapp:e.whatsapp,qualifierAnswers:{...n?.qualifierAnswers,...e.qualifierAnswers},savedAt:Date.now()}})},"normalizeQualifierValue",0,function(e){return e.replace(/[\u200B\u200C\u200D\u2060\uFEFF]/g,"").trim()},"readUnlockProfile",0,i])},356105,527341,e=>{"use strict";var t=e.i(271645),i=e.i(336835);let n="multi_step_rcb_form_partial_fill_hash";function r(e){try{return window.localStorage.getItem(e)??""}catch{return""}}function a(e,t){try{window.localStorage.setItem(e,t)}catch{}}function s(e){try{window.localStorage.removeItem(e)}catch{}}e.s(["usePartialRcb",0,function(e){let l=e?.resumeStoredHash??!0,o=e?.filedScope?"multi_step_rcb_form_filed_hash:"+e.filedScope:"",c=(0,t.useRef)(o);c.current=o;let p=(0,t.useRef)(!1),d=(0,t.useRef)(e?.onHash);d.current=e?.onHash;let h=(0,t.useRef)(e?.hashSource);h.current=e?.hashSource;let f=(0,t.useRef)(""),x=(0,t.useRef)(""),u=(0,t.useRef)(Promise.resolve());return(0,t.useEffect)(()=>{if(!l)return;let e=c.current?r(c.current):"";e?(f.current=e,p.current=!0):f.current=r(n)},[]),{save:(0,t.useCallback)((e,t=!1,{updateLsq:r=!1,keepHash:o=!1}={})=>{let g=async()=>{let u;if(!t&&!(e.fullName.trim()||e.phone.trim()||e.email.trim()||Object.values(e.qualifiers).some(Boolean))||!t&&!r&&p.current)return{ok:!0};let g=JSON.stringify({input:e,updateLsq:r});return t||g!==x.current?((x.current=g,!f.current&&h.current&&(f.current=h.current()),f.current)?u=await (0,i.updateRcb)(f.current,e,t,r):(u=await (0,i.createRcb)(e,t,r)).ok&&u.hash&&(f.current=u.hash,d.current?.(u.hash),l&&a(n,u.hash)),u.ok||x.current!==g||(x.current=""),u.ok&&l&&(t||r)&&(s(n),c.current&&(o&&!t?a(c.current,f.current):s(c.current))),{ok:u.ok,error:u.error}):(r&&!o&&l&&(s(n),c.current&&s(c.current)),{ok:!0})},m=u.current.then(g,g);return u.current=m.catch(()=>{}),m},[l])}}],356105);var l=e.i(680395),o=e.i(58863);let c=/^[a-z ,.'-]+$/i,p=/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;e.s(["buildRcbInput",0,function(e){return{fullName:e.name,phone:e.phone,email:e.email,qualifiers:e.answers,whatsapp:e.whatsapp,from:e.from,parentUrl:e.parentUrl,nextUrl:e.nextUrl,utmParams:(0,o.getUtmParams)(),responseType:e.responseType,formVariant:e.formVariant,...e.extraLeadFields?{extraLeadFields:e.extraLeadFields}:{}}},"flattenRcbSteps",0,function(e){return e.flatMap(e=>e.questions)},"rcbContactErrorMessage",0,function(e,t){switch(e){case"name":return t.trim()?"Full Name can only contain alphabets":"Full Name is Required";case"phone":return t?"Invalid Phone Number":"Phone Number is Required";case"email":return t.trim()?"Enter a valid email address":"Email is Required"}},"rcbContactErrors",0,function({name:e,phone:t,email:i},{requireEmail:n}){return{name:0===e.trim().length||!c.test(e.trim()),phone:10!==t.replace(/\D/g,"").length,email:!!n&&!p.test(i.trim())}},"seedAnswers",0,function(e,t){if(!e)return{};let i={};for(let n of t){let t=e.qualifierAnswers[n.key];if(!t)continue;let r=n.items.find(e=>(0,l.normalizeQualifierValue)(e.value)===(0,l.normalizeQualifierValue)(t));r&&(i[n.key]=r.value)}return i}],527341)},32189,e=>{"use strict";e.s(["getCanonicalUrl",0,function(e="/",t="www.newtonschool.co"){let i=e.startsWith("/")?e:`/${e}`;return`https://${t}${i}`}])},514348,e=>{"use strict";var t=e.i(843476),i=e.i(549838);let n=[{label:"Your Role",href:"#your-role"},{label:"Curriculum",href:"#curriculum"},{label:"Mentors",href:"#experts"},{label:"Pricing",href:"#pricing"}],r={none:"top-0",announcement:"agp-ann-nav top-[34px] min-[992px]:top-[46px]"};e.s(["AgenticNavbar",0,function({logoSrc:e,phone:a,phoneHref:s,cta:l,links:o=n,counsellorLabel:c="Talk to Councilor",ctaLabelMobile:p="Get call back",ctaLabelDesktop:d="Get priority callback",hasBottomBorder:h=!1,offset:f="none"}){return(0,t.jsx)("nav",{className:(0,i.cn)(`inset-x-0 ${r[f]} z-50 h-[57px] backdrop-blur-[32px]`,h?"fixed min-[768px]:border-b min-[768px]:border-[#16191D] min-[992px]:sticky min-[992px]:h-[72px]":"fixed min-[992px]:h-[71px]"),children:(0,t.jsxs)("div",{className:"mx-auto flex h-full w-full max-w-[1232px] items-center justify-between px-4",children:[(0,t.jsx)("a",{href:"#home",className:"flex shrink-0 items-center","aria-label":"Newton School — home",children:(0,t.jsx)("img",{src:e,alt:"Newton School logo",width:140,height:20,className:"h-5 w-auto"})}),(0,t.jsx)("div",{className:"absolute left-1/2 hidden -translate-x-1/2 items-center gap-3 min-[992px]:flex",children:o.map(e=>(0,t.jsx)("a",{href:e.href,className:"px-2 py-2 text-[14px] leading-[22px] font-semibold tracking-[0.016em] text-white/50 transition-[color] duration-300 ease-[ease] hover:text-white",children:e.label},e.label))}),(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsxs)("div",{className:"hidden flex-col items-end leading-[18px] min-[992px]:flex",children:[(0,t.jsx)("span",{className:"text-[12px] font-medium tracking-[0.1px] text-[#b2b9c7]",children:c}),(0,t.jsx)("a",{href:s,className:"text-[12px] font-semibold tracking-[0.06px] text-white transition-[opacity,background-color,color] duration-300 ease-[ease] hover:text-white/80",children:a})]}),(0,t.jsx)("span",{"aria-hidden":!0,className:"hidden h-[23px] w-px bg-[#30363d] min-[992px]:block"}),l({className:"inline-flex h-8 items-center gap-1 rounded-[8px] bg-[#0673F9] px-3.5 text-[14px] leading-[22px] font-semibold tracking-[0.4px] text-white transition-[opacity,background-color,color] duration-300 ease-[ease] hover:bg-[#0560d6] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none",children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M7.2 3.6c.3-.1.7 0 .9.3l1.2 2c.2.3.1.7-.1.9l-1 .9c.6 1.3 1.6 2.3 2.9 2.9l.9-1c.2-.2.6-.3.9-.1l2 1.2c.3.2.4.6.3.9-.4 1.2-1.6 2-2.9 1.8C8.5 15.7 4.3 11.5 3.8 6.5 3.6 5.2 4.4 4 5.6 3.6",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,t.jsx)("span",{className:"min-[992px]:hidden",children:p}),(0,t.jsx)("span",{className:"hidden min-[992px]:inline",children:d})]})})]})]})})}])},961533,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(549838);e.s(["AgenticCurriculumRail",0,function({rows:e,idPrefix:r,rowTargets:a,cardUnits:s,label:l,applyCta:o}){let[c,p]=(0,i.useState)(null),d=s.join(",");return(0,i.useEffect)(()=>{let e=d.split(",").map(Number),t=e.map((e,t)=>document.getElementById(`${r}${t}`)),i=t.filter(e=>null!==e);if(0===i.length)return;let n=new IntersectionObserver(i=>{let n=i.filter(e=>e.isIntersecting).sort((e,t)=>e.boundingClientRect.top-t.boundingClientRect.top)[0];if(!n)return;let r=e[t.indexOf(n.target)];void 0!==r&&p(r)},{rootMargin:"-80px 0px -85% 0px",threshold:0});return i.forEach(e=>n.observe(e)),()=>n.disconnect()},[d,r]),(0,t.jsxs)("nav",{"aria-label":l,className:"sticky top-20 hidden w-[378px] min-w-[378px] flex-col overflow-hidden rounded-[12px] border border-[#23282F] bg-[#0B0C0E] lg:flex",children:[e.map((e,i)=>(0,t.jsxs)("a",{href:`#${r}${a[i]??i}`,"aria-current":c===i?"true":void 0,className:(0,n.cn)("flex flex-col gap-2 border-b border-[#23282F] p-5 transition-colors focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white focus-visible:outline-none",c===i?"bg-[#16191D]":"hover:bg-[#16191D]/60"),children:[(0,t.jsx)("span",{className:(0,n.cn)("text-[11px] leading-[1.04] font-semibold tracking-[2px] uppercase transition-colors",c===i?"text-[#FFD580]":"text-[#B2B9C7]"),children:e.eyebrow}),(0,t.jsx)("span",{className:"text-[18px] leading-[1.64] font-semibold tracking-[0.06px] text-white",children:e.title})]},e.eyebrow)),(0,t.jsx)(t.Fragment,{children:o})]})}])},982858,e=>{"use strict";var t=e.i(843476),i=e.i(271645),n=e.i(549838);e.s(["AgenticStickyBar",0,function({cta:e,message:r="🎉 Limited Seats Available!  Hurry and secure a spot NOW!!",ctaLabel:a="Get Course Details",backgroundSrc:s="data:image/webp;base64,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"}){let[l,o]=(0,i.useState)(!1),[c,p]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=window.matchMedia("(max-width: 991px)"),t=()=>p(e.matches);t(),e.addEventListener("change",t);let i=()=>o(window.scrollY>0);return i(),window.addEventListener("scroll",i,{passive:!0}),()=>{e.removeEventListener("change",t),window.removeEventListener("scroll",i)}},[]);let d=c||l;return(0,t.jsx)("div",{"aria-hidden":!d,className:(0,n.cn)("fixed inset-x-0 bottom-0 z-[1000] transition-[opacity,visibility] duration-[400ms] ease-[ease] min-[992px]:bottom-8","visible opacity-100",!l&&"min-[992px]:invisible min-[992px]:pointer-events-none min-[992px]:opacity-0"),children:(0,t.jsxs)("div",{className:"relative mx-auto flex w-full flex-col items-center gap-2.5 overflow-hidden border border-[#23282f] bg-[#012361] px-[19px] py-[11px] shadow-[0_0_24px_rgba(0,0,0,0.08)] min-[992px]:w-[850px] min-[992px]:flex-row min-[992px]:justify-between min-[992px]:gap-3 min-[992px]:rounded-[16px] min-[992px]:px-5 min-[992px]:py-3",children:[(0,t.jsx)("img",{src:s,alt:"","aria-hidden":"true",width:689,height:87,className:"pointer-events-none absolute inset-0 h-full w-full object-fill"}),(0,t.jsx)("p",{className:"relative z-[2] max-w-[240px] text-center text-[15px] leading-[20px] font-semibold tracking-[0.1px] text-white min-[480px]:max-w-[20.75rem] min-[992px]:max-w-none min-[992px]:text-left min-[992px]:text-[20px] min-[992px]:leading-[26px]",children:r}),e({className:"relative z-[2] inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-[8px] bg-white py-[10px] pr-[15px] pl-[19px] text-[15px] leading-[25px] font-semibold tracking-[0.06px] text-[#16191D] transition-colors hover:bg-[#e6e6e6] focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none min-[992px]:w-auto min-[992px]:py-[11px] min-[992px]:pr-4 min-[992px]:pl-5 min-[992px]:text-[16px] min-[992px]:leading-[26px]",tabIndex:d?0:-1,children:(0,t.jsxs)(t.Fragment,{children:[a,(0,t.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M4 10h11m0 0l-4.5-4.5M15 10l-4.5 4.5",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round"})})]})})]})})}])},425739,e=>{"use strict";var t=e.i(843476),i=e.i(271645);e.s(["AgenticFaq",0,function({overline:e,heading:n,items:r,id:a="faq",defaultOpenIndex:s=-1,questionTextClassName:l="text-[18px] leading-[28px]",answerTextClassName:o="text-[16px] leading-[26px]",sectionPaddingClassName:c="py-14",headingClassName:p="text-left text-[18px] leading-[24px] font-extrabold text-white md:text-center md:text-[28px] md:leading-[32px]"}){let[d,h]=(0,i.useState)(s);return(0,t.jsx)("section",{id:a,className:`scroll-mt-24 border-t border-[#16191d] bg-[#16191d] ${c}`,children:(0,t.jsxs)("div",{className:"mx-auto w-full max-w-[768px] px-4",children:[(0,t.jsx)("div",{className:"hidden md:flex md:justify-center",children:(0,t.jsx)("span",{className:"inline-flex items-center rounded-full px-3 py-1.5 text-[14px] leading-4 font-semibold tracking-[0.4px] text-white",style:{backgroundImage:"linear-gradient(180deg, #003270 0%, #000000 31.73%, #000000 62.02%, #003270 100%)"},children:e})}),(0,t.jsx)("h2",{className:`mt-4 ${p}`,children:n}),(0,t.jsx)("div",{className:"mt-7 flex flex-col gap-[11px] rounded-[20px] border border-[#23282f] bg-[#0b0c0e] p-3",children:r.map((e,i)=>{let n=d===i;return(0,t.jsxs)("div",{className:`overflow-hidden rounded-[12px] border border-[#23282f] ${n?"bg-[#23282f]":"bg-[#0b0c0e]"}`,children:[(0,t.jsxs)("button",{type:"button","aria-expanded":n,onClick:()=>h(n?-1:i),className:"flex w-full items-center justify-between gap-2.5 p-4 text-left focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none",children:[(0,t.jsx)("span",{className:`flex-1 ${l} font-semibold tracking-[0.06px] text-white`,children:e.q}),(0,t.jsxs)("span",{"aria-hidden":"true",className:"relative block size-6 shrink-0",children:[(0,t.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:`absolute inset-0 fill-white transition-[opacity,transform,rotate] duration-300 [transition-timing-function:ease] ${n?"rotate-90 opacity-0":"rotate-0 opacity-100"}`,children:(0,t.jsx)("path",{d:"M12 5.25122C12.4142 5.25122 12.75 5.58701 12.75 6.00122V11.2512H18C18.4142 11.2512 18.75 11.587 18.75 12.0012C18.75 12.4154 18.4142 12.7512 18 12.7512H12.75V18.0012C12.75 18.4154 12.4142 18.7512 12 18.7512C11.5858 18.7512 11.25 18.4154 11.25 18.0012V12.7512H6C5.58579 12.7512 5.25 12.4154 5.25 12.0012C5.25 11.587 5.58579 11.2512 6 11.2512H11.25V6.00122C11.25 5.58701 11.5858 5.25122 12 5.25122Z"})}),(0,t.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",className:`absolute inset-0 fill-white transition-[opacity,transform,rotate] duration-300 [transition-timing-function:ease] ${n?"rotate-180 opacity-100":"rotate-0 opacity-0"}`,children:(0,t.jsx)("path",{d:"M18 11.2512C18.4142 11.2512 18.75 11.587 18.75 12.0012C18.75 12.4154 18.4142 12.7512 18 12.7512H6C5.58579 12.7512 5.25 12.4154 5.25 12.0012C5.25 11.587 5.58579 11.2512 6 11.2512H18Z"})})]})]}),(0,t.jsx)("div",{className:`grid transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${n?"grid-rows-[1fr]":"grid-rows-[0fr]"}`,children:(0,t.jsx)("div",{className:"min-h-0 overflow-hidden",children:(0,t.jsx)("div",{role:"region","aria-hidden":!n,className:`px-4 pb-4 ${o} font-medium tracking-[0.1px] text-[#b2b9c7]`,children:e.a})})})]},e.q)})})]})})}])},511604,e=>{e.v(t=>Promise.all(["static/chunks/2-et_hho2aqvl.js"].map(t=>e.l(t))).then(()=>t(164436)))},896615,e=>{e.v(t=>Promise.all(["static/chunks/3klltxhcaam25.js"].map(t=>e.l(t))).then(()=>t(980954)))},401485,e=>{e.v(t=>Promise.all(["static/chunks/3363k0g8j073u.js","static/chunks/2n-gidy722xtj.js"].map(t=>e.l(t))).then(()=>t(873987)))},179909,e=>{e.v(t=>Promise.all(["static/chunks/41kj1t47-_n25.js"].map(t=>e.l(t))).then(()=>t(285692)))},628574,e=>{e.v(t=>Promise.all(["static/chunks/2qirsm4ul044n.js"].map(t=>e.l(t))).then(()=>t(218568)))},490258,e=>{e.v(t=>Promise.all(["static/chunks/2s87rp7nfrl4_.js"].map(t=>e.l(t))).then(()=>t(322465)))},15086,e=>{e.v(t=>Promise.all(["static/chunks/36smk6w2al07x.js"].map(t=>e.l(t))).then(()=>t(269275)))},134362,e=>{e.v(t=>Promise.all(["static/chunks/24_vd97z020im.js"].map(t=>e.l(t))).then(()=>t(57400)))},278533,e=>{e.v(t=>Promise.all(["static/chunks/2dsmc-m5l6-0x.js"].map(t=>e.l(t))).then(()=>t(906322)))}]);