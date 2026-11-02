(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,830249,e=>{"use strict";var t=e.i(271645);e.s(["useParentUrl",0,function(){let[e,i]=(0,t.useState)("");return(0,t.useEffect)(()=>{function e(e){let t=e.data;t&&"object"==typeof t&&"PARENT_URL"===t.type&&"string"==typeof t.url&&i(t.url)}return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]),e}])},703109,968081,e=>{"use strict";var t=e.i(997053),i=e.i(271645),a={DISPLAY_BD_D1:"display-bd-d1",DISPLAY_BD_D2:"display-bd-d2",DISPLAY_BD_D3:"display-bd-d3",HEADING_SB_H1:"heading-sb-h1",HEADING_SB_H2:"heading-sb-h2",HEADING_SB_H3:"heading-sb-h3",HEADING_SB_H4:"heading-sb-h4",HEADING_SB_H5:"heading-sb-h5",HEADING_SB_H6:"heading-sb-h6",PARAGRAPH_SB_P1:"paragraph-sb-p1",PARAGRAPH_SB_P2:"paragraph-sb-p2",PARAGRAPH_SB_P3:"paragraph-sb-p3",PARAGRAPH_SB_P4:"paragraph-sb-p4",PARAGRAPH_SB_L1:"paragraph-sb-l1",PARAGRAPH_SB_L2:"paragraph-sb-l2",PARAGRAPH_MD_P1:"paragraph-md-p1",PARAGRAPH_MD_P2:"paragraph-md-p2",PARAGRAPH_MD_P3:"paragraph-md-p3",PARAGRAPH_MD_P4:"paragraph-md-p4",PARAGRAPH_MD_C1:"paragraph-md-c1",PARAGRAPH_MD_L1:"paragraph-md-l1",PARAGRAPH_MD_L2:"paragraph-md-l2",OVERLINE_SB_OL1:"overline-sb-ol1",OVERLINE_SB_OL2:"overline-sb-ol2",ACTION_SB_P1:"action-sb-p1",ACTION_SB_P2:"action-sb-p2",ACTION_SB_LK1:"action-sb-lk1"};Object.freeze(Object.values(a));var n={H1:"h1",H2:"h2",H3:"h3",H4:"h4",H5:"h5",H6:"h6",P:"p",SPAN:"span",DIV:"div",LABEL:"label",CAPTION:"caption",CODE:"code",AUTO:"auto"};Object.freeze(Object.values(n));var r={[a.DISPLAY_BD_D1]:t.css`
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
`,o=({variant:e="paragraph-md-p1",as:t="auto",color:a="var(--text-emphasis-primary-default, #16191d)",textAlign:r=null,textTransform:o=null,fontSize:C=null,children:h="",className:p="",title:f=null})=>{let d=t===n.AUTO?l[e]:t;return i.default.createElement(s,{$variant:e,as:d,$color:a,$textAlign:r,$textTransform:o,$fontSize:C,className:p,title:f},h)};e.s(["Typography_default",0,o],968081),e.s(["default",0,o],703109)},397681,e=>{"use strict";var t=e.i(893347),i=e.i(773892),a=e.i(364072),n=e.i(189101),r=e.i(824511),l=e.i(88653),s=e.i(271645),o=e.i(997053),C=(0,o.styled)(r.m.div)`
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
`,h=o.styled.div`
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
`,d=o.styled.div`
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
`,c=o.styled.div`
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
`,u=o.styled.div`
    width: 100%;
    position: relative;

    img {
        width: 100%;
        border-radius: var(--corner-radius-8px, 8px);
    }
`,v={slide:{variants:{hidden:{opacity:0,y:-50},visible:{opacity:1,y:0},exit:{opacity:0,y:50}},transition:{duration:.3}},"slide-reverse":{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0},exit:{opacity:0,y:-50}},transition:{duration:.3}},fade:{variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},transition:{duration:.3}},emanate:{}},x=(0,s.forwardRef)(({width:e,height:t,minHeight:i,minWidth:a,maxHeight:n,maxWidth:r,mobileBottomFullWidth:l,modalPadding:o,border:h,children:p,...f},d)=>s.default.createElement(C,{ref:d,$width:e,$height:t,$minHeight:i,$minWidth:a,$maxHeight:n,$maxWidth:r,$mobileBottomFullWidth:l,$modalPadding:o,$border:h,...f},p)),A=(0,s.forwardRef)(({justifyContent:e,children:t},i)=>s.default.createElement(g,{ref:i,$justifyContent:e},t)),m=(0,s.forwardRef)(({overflow:e,children:t,...i},a)=>s.default.createElement(h,{ref:a,$overflow:e,...i},t)),_=(0,s.forwardRef)(({children:e,...t},i)=>s.default.createElement(u,{ref:i,...t},e)),H=(0,s.forwardRef)(({children:e,...t},i)=>s.default.createElement(f,{ref:i,...t},e)),w=(0,s.forwardRef)(({children:e,...t},i)=>s.default.createElement(d,{ref:i,...t},e)),P=(0,s.forwardRef)(({modalBodyMargin:e,children:t,...i},a)=>s.default.createElement(c,{ref:a,$modalBodyMargin:e,...i},t)),y=(0,s.forwardRef)(({...e},t)=>s.default.createElement(p,{ref:t,...e})),D=(0,s.forwardRef)((e,r)=>{let{isOpen:o=!0,banner:p=null,title:x=null,description:A=null,body:m=null,action:_=null,height:H="auto",width:w="500px",minHeight:P=null,minWidth:y=null,maxHeight:D="95vh",maxWidth:b="95vw",onHide:L=()=>{},onClose:R=()=>{},mobileBottomFullWidth:S=!1,modalPadding:$="20px",border:E="1px solid var(--border-subtle-primary-default, #e1e5ea)",modalBodyMargin:B=null,showCloseButton:M=!1,hideOnClickAway:z=!1,blurBackground:V=!1,animatePresence:N="fade",clickEvent:G=null,children:I=null,shouldFocusOnFirstElement:O=!0,shouldDisableScroll:T=!0,overflow:Z="visible",className:k}=e,j=(0,s.useRef)(null),Y=()=>{"function"==typeof L&&L(),"function"==typeof R&&R()};(0,s.useImperativeHandle)(r,()=>j.current),(0,i.useDisableBodyScroll_default)(o),(0,i.useKeyboardEvent_default)({onKeyPress:()=>{z&&Y()},keyCodes:["Escape"],config:{shouldDetect:o}});let U=(0,s.useId)(),W=(0,s.useMemo)(()=>{var e,t;return e=N,t=G,"emanate"===e?"number"==typeof(null==t?void 0:t.clientX)&&"number"==typeof(null==t?void 0:t.clientY)?((e,t)=>{let i,a;try{i=e-window.innerWidth/2,a=t-window.innerHeight/2}catch(e){i=0,a=0}return{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{scale:0,opacity:0,x:i,y:a},visible:{scale:1,opacity:1,x:0,y:0},exit:{scale:0,opacity:0,x:i,y:a}},transition:{duration:.3}}})(t.clientX,t.clientY):{}:{initial:"hidden",animate:"visible",exit:"exit",...e?v[e]:{}}},[N,G]),F=(0,s.useMemo)(()=>(({isOpen:e,animatePresence:t,clickEvent:i})=>!!e&&("emanate"!==t||"number"==typeof(null==i?void 0:i.clientX)&&"number"==typeof(null==i?void 0:i.clientY)))({isOpen:o,animatePresence:N,clickEvent:G}),[o,N,G]);return s.default.createElement(a.motion_default,null,s.default.createElement(l.AnimatePresence,null,F&&s.default.createElement(t.Overlay_default,{shouldDisableScroll:T,onOverlayClick:()=>{z&&Y()},shouldTintOverlay:!0,shouldBlurOverlay:V,shouldCenterContent:!0,"data-testid":"testid-modalwrapper",className:k,animationDuration:.3,shouldFocusOnFirstElement:O},s.default.createElement(C,{onClick:e=>e.stopPropagation(),ref:j,$width:w,$height:H,$minHeight:P,$minWidth:y,$maxHeight:D,$maxWidth:b,$mobileBottomFullWidth:S,$modalPadding:$,$border:E,"aria-labelledby":`modal-title-${U}`,"aria-describedby":`modal-description-${U}`,"aria-modal":"true",role:"dialog","data-testid":"testid-modal",...W},s.default.createElement(h,{$overflow:Z},M&&s.default.createElement(g,{$justifyContent:"end"},s.default.createElement(n.IconButton_default,{onClick:Y,size:"small",variant:"tertiary",color:"neutral",icon:"close",ariaLabel:"Close",buttonProps:{autoFocus:!0}})),p&&s.default.createElement(u,null,p),x&&s.default.createElement(f,{id:`modal-title-${U}`},x),A&&s.default.createElement(d,{id:`modal-description-${U}`},A),m&&s.default.createElement(c,{$modalBodyMargin:B},m),I&&s.default.createElement(c,{$modalBodyMargin:B},I)),_&&s.default.createElement(g,null,_)))))});D.Modal=x,D.Main=m,D.Banner=_,D.Title=H,D.Description=w,D.Body=P,D.Action=A,D.Divider=y,e.s(["NSModal",0,D],397681)},866422,e=>{"use strict";var t=e.i(271645),i=e.i(58863);function a(e){let t=e.getAttribute("href");if(!(!t||t.startsWith("#")||t.startsWith("mailto:")||t.startsWith("tel:")))try{let a=new URL(t,window.location.href);if("https:"!==a.protocol&&"http:"!==a.protocol||!(a.hostname===window.location.hostname||"newtonschool.co"===a.hostname||a.hostname.endsWith(".newtonschool.co")))return;let n=(0,i.appendUtmParams)(a.toString());n!==e.href&&(e.href=n)}catch{}}function n(e){e.querySelectorAll("a[href]").forEach(a)}e.s(["UtmPropagation",0,function(){return(0,t.useEffect)(()=>{if((0,i.persistUtmParams)(),0===Object.keys((0,i.getUtmParams)()).length)return;n(document);let e=new MutationObserver(e=>{for(let t of e){if("attributes"===t.type&&t.target instanceof HTMLAnchorElement){a(t.target);continue}t.addedNodes.forEach(e=>{e instanceof HTMLAnchorElement?a(e):e instanceof Element&&n(e)})}});e.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["href"]});let t=e=>{let t=e.target?.closest?.("a[href]");t instanceof HTMLAnchorElement&&a(t)};return document.addEventListener("click",t,!0),document.addEventListener("auxclick",t,!0),()=>{e.disconnect(),document.removeEventListener("click",t,!0),document.removeEventListener("auxclick",t,!0)}},[]),null}])},652612,e=>{"use strict";var t=e.i(843476),i=e.i(271645),a=e.i(336835),n=e.i(58863);let r="access_token_ns_student_web",l=(0,i.createContext)({isLoggedIn:!1,loading:!1});e.s(["LoggedInProvider",0,function({children:e}){let[s,o]=(0,i.useState)({isLoggedIn:!1,loading:!1});return(0,i.useEffect)(()=>{let e=(0,n.getCookie)(r);if(!e)return;let t=!0;return o({isLoggedIn:!1,loading:!0}),(0,a.fetchMe)(e).then(e=>{t&&(e.ok||(0,n.clearAuthCookie)(r),o({isLoggedIn:e.ok,loading:!1}))}),()=>{t=!1}},[]),(0,t.jsx)(l.Provider,{value:s,children:e})},"useLoggedIn",0,function(){return(0,i.useContext)(l)}])},275050,e=>{"use strict";var t;let i=["January","February","March","April","May","June","July","August","September","October","November","December"],a=e=>String(e).padStart(2,"0");function n(e,t,n){let r=i[t-1];if(!r)throw Error(`nsat-cycle: month ${t} is out of range`);let l=function(e){let t=e%100;if(t>=11&&t<=13)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(n),s=a(n),o=`${s}${l} ${r}`,C=`${e}-${a(t)}-${s}`;return{day:n,month:t,year:e,dayPadded:s,ordinal:l,monthName:r,short:`${n}${l} ${r}`,shortPadded:o,long:`${o}, ${e}`,longNoComma:`${o} ${e}`,abbr:`${n}${l} ${r.slice(0,3)}, ${e}`,isoDate:C,endOfDayIso:`${C}T23:59:59+05:30`}}let r=({year:e,month:t,day:i})=>n(e,t,i),l=({year:e,month:t,day:i})=>1e4*e+100*t+i;function s(e,t){for(let i=1;i<t.length;i+=1){let a=t[i-1],n=t[i];if(!a||!n)continue;let[s,o]=a,[C,h]=n;if(l(h)<l(o))throw Error(`nsat-cycle "${e}": ${C} (${r(h).isoDate}) falls before ${s} (${r(o).isoDate}).`)}}function o(e,t){return s(t,[["registrationClose",e.registrationClose],["exam",e.exam]]),{exam:r(e.exam),registrationClose:r(e.registrationClose)}}let C=(s("NSAT",[["registrationClose",(t={registrationClose:{day:6,month:1,year:2027},exam:{day:7,month:1,year:2027},interviewStart:{day:8,month:1,year:2027},counsellingStart:{day:9,month:1,year:2027}}).registrationClose],["exam",t.exam],["interviewStart",t.interviewStart],["counsellingStart",t.counsellingStart]]),{...o(t,"NSAT"),interviewStart:r(t.interviewStart),counsellingStart:r(t.counsellingStart)}),h=o({registrationClose:{day:15,month:1,year:2027},exam:{day:16,month:1,year:2027}},"Coding NSAT"),p=e=>{var t;return t=e.endOfDayIso,Date.now()<Date.parse(t)},f=p(C.registrationClose),d=p(h.registrationClose);if(!f||!d){let e=[!f?`NSAT (closed ${C.registrationClose.isoDate})`:null,!d?`Coding NSAT (closed ${h.registrationClose.isoDate})`:null].filter(Boolean);console.warn(`nsat-cycle: registration has CLOSED for ${e.join(" and ")}. Every date label is rendering its between-cycles fallback — roll the dates in src/lib/config/nsat-cycle.ts when the next cycle is announced.`)}e.s(["CODING_NSAT_EXAM",0,h,"CODING_NSAT_OPEN",0,d,"NSAT_CLOSED_COPY",0,{examDate:"Request Basis",deadline:"Admissions closing soon",note:"You'll receive a call from us as soon as you register for the exam",toBeAnnounced:"To be announced soon"},"NSAT_CYCLE",0,C,"NSAT_CYCLE_OPEN",0,f,"formatDeadlineLabel",0,function(e){let t=e.slice(0,10).split("-"),i=Number(t[0]),a=Number(t[1]),r=Number(t[2]);return i&&a&&r&&!(a>12)?n(i,a,r).long:""}])},987880,e=>{"use strict";var t=e.i(843476);let i="M3.42083 0H14.3964V3.15592H3.42083V7.66437L7.09399 7.66437H9.56716C11.8618 7.66437 13.9815 8.43367 15.695 9.73482L22.1014 3.15592H17.0306V0H24.2745H27.3477V3.15592V10.5949H24.2745V5.38749L17.8681 11.9664C19.1351 13.726 19.8842 15.9028 19.8842 18.2592V26.1855L19.8842 30.8681C22.5413 28.9275 24.2745 25.7398 24.2745 22.1365V13.2999H27.3477V22.1365C27.3477 29.7931 21.3035 36 13.8477 36C6.39181 36 0.347656 29.7931 0.347656 22.1365V3.15592V0H3.42083ZM3.42083 22.1365V10.8203H7.09399H9.56716C13.5679 10.8203 16.8111 14.1508 16.8111 18.2592L16.8111 26.1855L16.8111 32.4054C15.8717 32.6909 14.8771 32.8441 13.8477 32.8441C8.08908 32.8441 3.42083 28.0501 3.42083 22.1365Z";encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><path transform='translate(6.155 2)' fill-rule='evenodd' clip-rule='evenodd' d='${i}' fill='#0673F9'/></svg>`);let a=`
<g clip-path="url(#clip0_944_43574)">
<path fill-rule="evenodd" clip-rule="evenodd" d="${i}" fill="#0673F9"></path>
</g>
<path d="M145.241 35.3936V33.3276H146.3C146.562 33.3276 146.778 33.2935 146.949 33.2252C147.131 33.1683 147.279 33.0658 147.393 32.9178C147.518 32.7813 147.62 32.6048 147.7 32.3886L148.144 31.2446V32.3544L144.422 23.3906H147.171L148.844 28.2908L149.134 29.264H149.22L149.493 28.2908L151.064 23.3906H153.744L150.176 32.9691C149.948 33.6065 149.669 34.1016 149.339 34.4545C149.009 34.8074 148.628 35.0521 148.195 35.1887C147.774 35.3253 147.302 35.3936 146.778 35.3936H145.241Z" fill="#16191D"></path>
<path d="M138.829 35.5632C138.021 35.5632 137.327 35.4436 136.746 35.2046C136.166 34.977 135.711 34.6526 135.38 34.2314C135.05 33.8216 134.863 33.3379 134.817 32.7801H137.224C137.27 32.9736 137.361 33.1444 137.498 33.2923C137.646 33.4517 137.833 33.5712 138.061 33.6509C138.3 33.7419 138.573 33.7875 138.881 33.7875C139.37 33.7875 139.763 33.7135 140.059 33.5655C140.366 33.4289 140.588 33.224 140.725 32.9509C140.873 32.6777 140.947 32.3305 140.947 31.9094V30.3386H140.81C140.616 30.828 140.269 31.2264 139.768 31.5337C139.279 31.8411 138.704 31.9947 138.044 31.9947C137.498 31.9947 137.002 31.9037 136.559 31.7215C136.126 31.528 135.75 31.2492 135.432 30.8849C135.113 30.5093 134.868 30.0483 134.698 29.5019C134.527 28.9556 134.441 28.3238 134.441 27.6067C134.441 26.6392 134.589 25.8311 134.885 25.1822C135.193 24.5334 135.614 24.044 136.149 23.7139C136.695 23.3838 137.333 23.2188 138.061 23.2188C138.721 23.2188 139.296 23.3724 139.786 23.6797C140.275 23.9757 140.616 24.3684 140.81 24.8578H140.947L141.015 23.3895H143.456V31.4484C143.456 32.211 143.343 32.8541 143.115 33.3777C142.899 33.9013 142.586 34.3225 142.176 34.6412C141.766 34.9713 141.277 35.2046 140.708 35.3412C140.15 35.4892 139.524 35.5632 138.829 35.5632ZM138.966 30.0654C139.399 30.0654 139.757 29.9743 140.042 29.7922C140.326 29.6101 140.542 29.371 140.69 29.0751C140.838 28.7678 140.924 28.4547 140.947 28.136L140.929 27.0433C140.918 26.7246 140.838 26.4229 140.69 26.1384C140.542 25.8424 140.326 25.6034 140.042 25.4213C139.757 25.2392 139.404 25.1481 138.983 25.1481C138.585 25.1481 138.232 25.2392 137.924 25.4213C137.629 25.592 137.401 25.8595 137.242 26.2238C137.082 26.588 137.002 27.049 137.002 27.6067C137.002 28.1645 137.082 28.6255 137.242 28.9897C137.412 29.354 137.646 29.6271 137.942 29.8093C138.237 29.98 138.579 30.0654 138.966 30.0654Z" fill="#16191D"></path>
<path d="M128.648 32.6947C127.953 32.6947 127.327 32.5923 126.769 32.3874C126.212 32.1712 125.728 31.8581 125.318 31.4484C124.908 31.0386 124.595 30.5434 124.379 29.9629C124.163 29.371 124.055 28.7052 124.055 27.9653C124.055 27.0205 124.237 26.1953 124.601 25.4896C124.965 24.7725 125.489 24.2147 126.172 23.8163C126.855 23.4179 127.68 23.2188 128.648 23.2188C129.331 23.2188 129.951 23.3269 130.509 23.5432C131.066 23.7594 131.544 24.0724 131.943 24.4822C132.353 24.892 132.666 25.3871 132.882 25.9676C133.11 26.5482 133.223 27.214 133.223 27.9653C133.223 28.8987 133.041 29.7239 132.677 30.441C132.313 31.1467 131.789 31.6988 131.106 32.0972C130.435 32.4956 129.615 32.6947 128.648 32.6947ZM128.63 30.663C129.04 30.663 129.399 30.5662 129.706 30.3727C130.025 30.1678 130.264 29.8662 130.423 29.4678C130.594 29.0694 130.679 28.5686 130.679 27.9653C130.679 27.51 130.634 27.1173 130.543 26.7872C130.452 26.4457 130.315 26.1611 130.133 25.9335C129.951 25.7058 129.735 25.5408 129.484 25.4384C129.234 25.3245 128.955 25.2676 128.648 25.2676C128.238 25.2676 127.874 25.3644 127.555 25.5579C127.248 25.7514 127.008 26.0473 126.838 26.4457C126.667 26.8441 126.582 27.3506 126.582 27.9653C126.582 28.4206 126.627 28.819 126.718 29.1605C126.821 29.4906 126.963 29.7694 127.145 29.9971C127.327 30.2133 127.543 30.3784 127.794 30.4922C128.044 30.606 128.323 30.663 128.63 30.663Z" fill="#16191D"></path>
<path d="M119.938 32.5406V20.0938H122.447V32.5406H119.938Z" fill="#16191D"></path>
<path d="M113.765 32.6947C113.07 32.6947 112.444 32.5923 111.887 32.3874C111.329 32.1712 110.845 31.8581 110.435 31.4484C110.026 31.0386 109.713 30.5434 109.496 29.9629C109.28 29.371 109.172 28.7052 109.172 27.9653C109.172 27.0205 109.354 26.1953 109.718 25.4896C110.082 24.7725 110.606 24.2147 111.289 23.8163C111.972 23.4179 112.797 23.2188 113.765 23.2188C114.448 23.2188 115.068 23.3269 115.626 23.5432C116.184 23.7594 116.662 24.0724 117.06 24.4822C117.47 24.892 117.783 25.3871 117.999 25.9676C118.227 26.5482 118.341 27.214 118.341 27.9653C118.341 28.8987 118.158 29.7239 117.794 30.441C117.43 31.1467 116.906 31.6988 116.223 32.0972C115.552 32.4956 114.732 32.6947 113.765 32.6947ZM113.748 30.663C114.157 30.663 114.516 30.5662 114.823 30.3727C115.142 30.1678 115.381 29.8662 115.54 29.4678C115.711 29.0694 115.797 28.5686 115.797 27.9653C115.797 27.51 115.751 27.1173 115.66 26.7872C115.569 26.4457 115.432 26.1611 115.25 25.9335C115.068 25.7058 114.852 25.5408 114.601 25.4384C114.351 25.3245 114.072 25.2676 113.765 25.2676C113.355 25.2676 112.991 25.3644 112.672 25.5579C112.365 25.7514 112.126 26.0473 111.955 26.4457C111.784 26.8441 111.699 27.3506 111.699 27.9653C111.699 28.4206 111.744 28.819 111.835 29.1605C111.938 29.4906 112.08 29.7694 112.262 29.9971C112.444 30.2133 112.661 30.3784 112.911 30.4922C113.161 30.606 113.44 30.663 113.748 30.663Z" fill="#16191D"></path>
<path d="M98.8906 32.5411V23.3895H101.298L101.4 25.0457H101.503C101.753 24.431 102.14 23.9757 102.664 23.6797C103.188 23.3724 103.774 23.2188 104.423 23.2188C104.878 23.2188 105.299 23.2927 105.686 23.4407C106.084 23.5773 106.426 23.7936 106.71 24.0895C107.006 24.3855 107.234 24.7782 107.393 25.2676C107.564 25.7457 107.65 26.3262 107.65 27.0091V32.5411H105.14V27.5555C105.14 27.0433 105.077 26.6164 104.952 26.275C104.838 25.9335 104.656 25.6831 104.405 25.5237C104.155 25.353 103.825 25.2676 103.415 25.2676C102.983 25.2676 102.618 25.3701 102.322 25.5749C102.027 25.7798 101.799 26.0473 101.64 26.3774C101.48 26.7075 101.4 27.0661 101.4 27.4531V32.5411H98.8906Z" fill="#16191D"></path>
<path d="M88.0742 32.5406V20.0938H90.5841V25.0452H90.6865C90.9369 24.4305 91.3239 23.9752 91.8475 23.6793C92.3711 23.3719 92.9573 23.2183 93.6062 23.2183C94.0615 23.2183 94.4826 23.2923 94.8696 23.4402C95.268 23.5768 95.6095 23.7931 95.8941 24.089C96.19 24.385 96.4176 24.7777 96.577 25.2671C96.7477 25.7452 96.8331 26.3257 96.8331 27.0087V32.5406H94.3233V27.555C94.3233 27.0428 94.2606 26.616 94.1354 26.2745C94.0216 25.933 93.8395 25.6826 93.5891 25.5232C93.3387 25.3525 93.0086 25.2671 92.5988 25.2671C92.1663 25.2671 91.802 25.3696 91.5061 25.5745C91.2101 25.7793 90.9825 26.0468 90.8231 26.3769C90.6638 26.707 90.5841 27.0656 90.5841 27.4526V32.5406H88.0742Z" fill="#16191D"></path>
<path d="M82.2838 32.6947C81.6009 32.6947 80.9805 32.5866 80.4228 32.3703C79.865 32.1427 79.3813 31.8183 78.9715 31.3971C78.5731 30.976 78.2658 30.4751 78.0495 29.8946C77.8446 29.3141 77.7422 28.671 77.7422 27.9653C77.7422 26.9978 77.93 26.1611 78.3056 25.4554C78.6813 24.7497 79.2162 24.2033 79.9106 23.8163C80.6049 23.4179 81.4245 23.2188 82.3692 23.2188C83.1546 23.2188 83.8489 23.3667 84.4522 23.6627C85.0669 23.9586 85.5563 24.3684 85.9206 24.892C86.2848 25.4156 86.484 26.0246 86.5182 26.7189H84.0595C84.014 26.4002 83.9059 26.1327 83.7351 25.9164C83.5758 25.7002 83.3709 25.5408 83.1205 25.4384C82.8814 25.3245 82.6082 25.2676 82.3009 25.2676C81.8684 25.2676 81.4984 25.3814 81.1911 25.6091C80.8838 25.8254 80.6561 26.1384 80.5082 26.5482C80.3602 26.9465 80.2862 27.4189 80.2862 27.9653C80.2862 28.5686 80.3659 29.0694 80.5252 29.4678C80.696 29.8548 80.9293 30.1507 81.2253 30.3556C81.5326 30.5491 81.8854 30.6459 82.2838 30.6459C82.6481 30.6459 82.9554 30.5833 83.2058 30.4581C83.4676 30.3329 83.6725 30.1564 83.8205 29.9288C83.9798 29.7011 84.0709 29.445 84.0937 29.1605H86.5352C86.5011 29.8776 86.2962 30.5036 85.9206 31.0386C85.5563 31.5622 85.0612 31.972 84.4351 32.2679C83.8091 32.5525 83.092 32.6947 82.2838 32.6947Z" fill="#16191D"></path>
<path d="M72.1954 32.6947C71.2393 32.6947 70.4198 32.5012 69.7368 32.1142C69.0652 31.7272 68.5473 31.1866 68.1831 30.4922C67.8188 29.7865 67.6367 28.967 67.6367 28.0336C67.6367 27.0433 67.8188 26.1896 68.1831 25.4725C68.5473 24.7554 69.0652 24.2033 69.7368 23.8163C70.4084 23.4179 71.1995 23.2188 72.1101 23.2188C73.1687 23.2188 74.0394 23.4521 74.7224 23.9188C75.4053 24.3855 75.8948 25.0172 76.1907 25.814C76.4867 26.6108 76.5834 27.5157 76.481 28.5287H70.1124C70.101 29.0068 70.1807 29.4166 70.3515 29.758C70.5336 30.0995 70.784 30.3613 71.1027 30.5434C71.4214 30.7142 71.7857 30.7995 72.1954 30.7995C72.6735 30.7995 73.0776 30.6971 73.4077 30.4922C73.7492 30.2759 73.9654 29.9914 74.0565 29.6385H76.4298C76.3501 30.2532 76.1167 30.7882 75.7297 31.2435C75.3541 31.6988 74.8647 32.0573 74.2614 32.3191C73.6581 32.5695 72.9695 32.6947 72.1954 32.6947ZM70.1124 27.197L69.8905 26.9238H74.2443L74.0223 27.197C74.0451 26.7189 73.9711 26.3319 73.8004 26.0359C73.641 25.7286 73.4134 25.501 73.1174 25.353C72.8215 25.1936 72.4857 25.1139 72.1101 25.1139C71.7003 25.1139 71.3474 25.1993 71.0515 25.3701C70.7555 25.5408 70.5222 25.7855 70.3515 26.1042C70.1921 26.4116 70.1124 26.7758 70.1124 27.197Z" fill="#16191D"></path>
<path d="M62.2568 32.5406V22.3987H58.5859V20.0938H68.6595V22.3987H64.9033V32.5406H62.2568Z" fill="#16191D"></path>
<path d="M50.1861 32.5406V25.4037H48.6836V23.389H50.1861V22.4158C50.1861 21.6645 50.4194 21.0897 50.8861 20.6913C51.3642 20.2929 52.0244 20.0938 52.8667 20.0938H54.7107V21.7841H53.6009C53.248 21.7841 53.009 21.858 52.8838 22.006C52.7586 22.1426 52.696 22.3304 52.696 22.5695V23.389H54.557V25.4037H52.696V32.5406H50.1861Z" fill="#16191D"></path>
<path d="M43.3624 32.6947C42.6681 32.6947 42.042 32.5923 41.4843 32.3874C40.9265 32.1712 40.4428 31.8581 40.033 31.4484C39.6232 31.0386 39.3102 30.5434 39.0939 29.9629C38.8777 29.371 38.7695 28.7052 38.7695 27.9653C38.7695 27.0205 38.9517 26.1953 39.3159 25.4896C39.6801 24.7725 40.2037 24.2147 40.8867 23.8163C41.5696 23.4179 42.3949 23.2188 43.3624 23.2188C44.0454 23.2188 44.6657 23.3269 45.2235 23.5432C45.7812 23.7594 46.2593 24.0724 46.6577 24.4822C47.0674 24.892 47.3805 25.3871 47.5967 25.9676C47.8244 26.5482 47.9382 27.214 47.9382 27.9653C47.9382 28.8987 47.7561 29.7239 47.3918 30.441C47.0276 31.1467 46.504 31.6988 45.821 32.0972C45.1495 32.4956 44.3299 32.6947 43.3624 32.6947ZM43.3453 30.663C43.7551 30.663 44.1137 30.5662 44.421 30.3727C44.7397 30.1678 44.9787 29.8662 45.1381 29.4678C45.3088 29.0694 45.3942 28.5686 45.3942 27.9653C45.3942 27.51 45.3487 27.1173 45.2576 26.7872C45.1665 26.4457 45.03 26.1611 44.8478 25.9335C44.6657 25.7058 44.4494 25.5408 44.199 25.4384C43.9486 25.3245 43.6697 25.2676 43.3624 25.2676C42.9526 25.2676 42.5884 25.3644 42.2697 25.5579C41.9623 25.7514 41.7233 26.0473 41.5526 26.4457C41.3818 26.8441 41.2965 27.3506 41.2965 27.9653C41.2965 28.4206 41.342 28.819 41.4331 29.1605C41.5355 29.4906 41.6778 29.7694 41.8599 29.9971C42.042 30.2133 42.2583 30.3784 42.5087 30.4922C42.7591 30.606 43.038 30.663 43.3453 30.663Z" fill="#16191D"></path>
<path d="M160.297 13.0328V0.585938H162.807V13.0328H160.297Z" fill="#16191D"></path>
<path d="M154.128 13.1869C153.434 13.1869 152.808 13.0845 152.25 12.8796C151.692 12.6633 151.208 12.3503 150.799 11.9405C150.389 11.5308 150.076 11.0356 149.86 10.4551C149.643 9.86322 149.535 9.19734 149.535 8.45747C149.535 7.51272 149.717 6.68748 150.082 5.98176C150.446 5.26466 150.969 4.70691 151.652 4.30852C152.335 3.91013 153.161 3.71094 154.128 3.71094C154.811 3.71094 155.431 3.81907 155.989 4.03534C156.547 4.25161 157.025 4.56463 157.423 4.9744C157.833 5.38418 158.146 5.87932 158.362 6.45983C158.59 7.04034 158.704 7.70622 158.704 8.45747C158.704 9.39084 158.522 10.2161 158.157 10.9332C157.793 11.6389 157.27 12.191 156.587 12.5893C155.915 12.9877 155.096 13.1869 154.128 13.1869ZM154.111 11.1551C154.521 11.1551 154.879 11.0584 155.187 10.8649C155.505 10.66 155.744 10.3584 155.904 9.95997C156.074 9.56158 156.16 9.06075 156.16 8.45747C156.16 8.00217 156.114 7.60947 156.023 7.27938C155.932 6.9379 155.796 6.65333 155.613 6.42568C155.431 6.19803 155.215 6.03298 154.965 5.93054C154.714 5.81671 154.435 5.7598 154.128 5.7598C153.718 5.7598 153.354 5.85655 153.035 6.05006C152.728 6.24356 152.489 6.53951 152.318 6.9379C152.147 7.33629 152.062 7.84281 152.062 8.45747C152.062 8.91278 152.108 9.31117 152.199 9.65264C152.301 9.98274 152.443 10.2616 152.626 10.4893C152.808 10.7055 153.024 10.8706 153.274 10.9844C153.525 11.0982 153.804 11.1551 154.111 11.1551Z" fill="#16191D"></path>
<path d="M143.737 13.1869C143.043 13.1869 142.417 13.0845 141.859 12.8796C141.302 12.6633 140.818 12.3503 140.408 11.9405C139.998 11.5308 139.685 11.0356 139.469 10.4551C139.253 9.86322 139.145 9.19734 139.145 8.45747C139.145 7.51272 139.327 6.68748 139.691 5.98176C140.055 5.26466 140.579 4.70691 141.262 4.30852C141.945 3.91013 142.77 3.71094 143.737 3.71094C144.42 3.71094 145.041 3.81907 145.598 4.03534C146.156 4.25161 146.634 4.56463 147.033 4.9744C147.442 5.38418 147.755 5.87932 147.972 6.45983C148.199 7.04034 148.313 7.70622 148.313 8.45747C148.313 9.39084 148.131 10.2161 147.767 10.9332C147.403 11.6389 146.879 12.191 146.196 12.5893C145.524 12.9877 144.705 13.1869 143.737 13.1869ZM143.72 11.1551C144.13 11.1551 144.489 11.0584 144.796 10.8649C145.115 10.66 145.354 10.3584 145.513 9.95997C145.684 9.56158 145.769 9.06075 145.769 8.45747C145.769 8.00217 145.724 7.60947 145.633 7.27938C145.542 6.9379 145.405 6.65333 145.223 6.42568C145.041 6.19803 144.824 6.03298 144.574 5.93054C144.324 5.81671 144.045 5.7598 143.737 5.7598C143.328 5.7598 142.963 5.85655 142.645 6.05006C142.337 6.24356 142.098 6.53951 141.928 6.9379C141.757 7.33629 141.671 7.84281 141.671 8.45747C141.671 8.91278 141.717 9.31117 141.808 9.65264C141.91 9.98274 142.053 10.2616 142.235 10.4893C142.417 10.7055 142.633 10.8706 142.884 10.9844C143.134 11.0982 143.413 11.1551 143.72 11.1551Z" fill="#16191D"></path>
<path d="M128.867 13.0328V0.585938H131.377V5.53736H131.479C131.73 4.9227 132.117 4.4674 132.641 4.17145C133.164 3.86412 133.75 3.71046 134.399 3.71046C134.854 3.71046 135.276 3.78444 135.663 3.93242C136.061 4.06901 136.402 4.28528 136.687 4.58122C136.983 4.87717 137.211 5.26987 137.37 5.75932C137.541 6.23739 137.626 6.8179 137.626 7.50086V13.0328H135.116V8.04722C135.116 7.535 135.054 7.10816 134.928 6.76668C134.815 6.4252 134.632 6.17478 134.382 6.01543C134.132 5.84469 133.802 5.75932 133.392 5.75932C132.959 5.75932 132.595 5.86176 132.299 6.06665C132.003 6.27154 131.775 6.53903 131.616 6.86912C131.457 7.19922 131.377 7.55777 131.377 7.94478V13.0328H128.867Z" fill="#16191D"></path>
<path d="M123.077 13.1869C122.394 13.1869 121.773 13.0788 121.216 12.8625C120.658 12.6349 120.174 12.3105 119.764 11.8893C119.366 11.4682 119.059 10.9673 118.842 10.3868C118.638 9.80631 118.535 9.16319 118.535 8.45747C118.535 7.48995 118.723 6.65333 119.099 5.94761C119.474 5.24189 120.009 4.69553 120.704 4.30852C121.398 3.91013 122.217 3.71094 123.162 3.71094C123.948 3.71094 124.642 3.85891 125.245 4.15486C125.86 4.4508 126.349 4.86058 126.714 5.38418C127.078 5.90778 127.277 6.51674 127.311 7.21108H124.852C124.807 6.89237 124.699 6.62488 124.528 6.40861C124.369 6.19234 124.164 6.03298 123.913 5.93054C123.674 5.81671 123.401 5.7598 123.094 5.7598C122.661 5.7598 122.291 5.87363 121.984 6.10128C121.677 6.31755 121.449 6.63057 121.301 7.04034C121.153 7.43873 121.079 7.91111 121.079 8.45747C121.079 9.06075 121.159 9.56158 121.318 9.95997C121.489 10.347 121.722 10.6429 122.018 10.8478C122.326 11.0413 122.678 11.1381 123.077 11.1381C123.441 11.1381 123.748 11.0755 123.999 10.9503C124.261 10.825 124.465 10.6486 124.613 10.421C124.773 10.1933 124.864 9.93721 124.887 9.65264H127.328C127.294 10.3697 127.089 10.9958 126.714 11.5308C126.349 12.0544 125.854 12.4641 125.228 12.7601C124.602 13.0447 123.885 13.1869 123.077 13.1869Z" fill="#16191D"></path>
<path d="M112.241 13.1839C111.125 13.1839 110.186 13.0131 109.424 12.6717C108.661 12.3302 108.08 11.8521 107.682 11.2374C107.295 10.6228 107.102 9.91707 107.102 9.12029H109.799C109.811 9.53006 109.902 9.88861 110.072 10.1959C110.255 10.4919 110.528 10.7252 110.892 10.896C111.268 11.0667 111.751 11.1521 112.343 11.1521C113.026 11.1521 113.573 11.0269 113.982 10.7765C114.392 10.526 114.597 10.1561 114.597 9.66665C114.597 9.3707 114.551 9.12598 114.46 8.93248C114.369 8.73897 114.21 8.57962 113.982 8.45441C113.766 8.31782 113.47 8.20968 113.094 8.13C112.73 8.03894 112.264 7.94219 111.694 7.83975C110.989 7.7373 110.363 7.58933 109.816 7.39583C109.27 7.20232 108.815 6.96329 108.45 6.67872C108.086 6.39416 107.813 6.05268 107.631 5.65429C107.449 5.24452 107.358 4.76645 107.358 4.22009C107.358 3.43469 107.551 2.76312 107.938 2.20537C108.337 1.63624 108.9 1.19801 109.628 0.890682C110.357 0.583352 111.222 0.429688 112.224 0.429688C113.203 0.429688 114.045 0.583352 114.751 0.890682C115.468 1.19801 116.02 1.63055 116.407 2.1883C116.794 2.74604 116.987 3.39485 116.987 4.13472H114.307C114.295 3.73633 114.187 3.41192 113.982 3.16151C113.789 2.91109 113.533 2.72897 113.214 2.61514C112.895 2.50132 112.537 2.4444 112.138 2.4444C111.729 2.4444 111.37 2.50132 111.063 2.61514C110.755 2.72897 110.522 2.89402 110.363 3.11029C110.203 3.32655 110.124 3.58266 110.124 3.87861C110.124 4.25423 110.22 4.5388 110.414 4.7323C110.619 4.92581 110.943 5.07947 111.387 5.1933C111.831 5.29574 112.412 5.40957 113.129 5.53478C113.652 5.61445 114.164 5.72259 114.665 5.85918C115.166 5.99577 115.621 6.20066 116.031 6.47384C116.441 6.73564 116.765 7.10557 117.004 7.58364C117.243 8.05032 117.363 8.65929 117.363 9.41054C117.363 10.1504 117.169 10.8106 116.782 11.3911C116.407 11.9602 115.838 12.4042 115.075 12.7229C114.324 13.0302 113.379 13.1839 112.241 13.1839Z" fill="#16191D"></path>
<path d="M93.1367 13.0333V3.88168H95.5441L95.6466 5.53784H95.749C95.9994 4.92318 96.3864 4.46788 96.91 4.17193C97.4336 3.8646 98.0198 3.71094 98.6687 3.71094C99.124 3.71094 99.5451 3.78492 99.9321 3.9329C100.331 4.06949 100.672 4.28576 100.957 4.5817C101.253 4.87765 101.48 5.27035 101.64 5.7598C101.81 6.23787 101.896 6.81838 101.896 7.50134V13.0333H99.3858V8.0477C99.3858 7.53548 99.3232 7.10864 99.1979 6.76716C99.0841 6.42568 98.902 6.17527 98.6516 6.01591C98.4012 5.84517 98.0711 5.7598 97.6613 5.7598C97.2288 5.7598 96.8645 5.86224 96.5686 6.06713C96.2726 6.27202 96.045 6.53951 95.8856 6.8696C95.7263 7.1997 95.6466 7.55825 95.6466 7.94526V13.0333H93.1367Z" fill="#16191D"></path>
<path d="M86.9601 13.1869C86.2657 13.1869 85.6397 13.0845 85.0819 12.8796C84.5242 12.6633 84.0404 12.3503 83.6307 11.9405C83.2209 11.5308 82.9079 11.0356 82.6916 10.4551C82.4753 9.86322 82.3672 9.19734 82.3672 8.45747C82.3672 7.51272 82.5493 6.68748 82.9136 5.98176C83.2778 5.26466 83.8014 4.70691 84.4843 4.30852C85.1673 3.91013 85.9925 3.71094 86.9601 3.71094C87.643 3.71094 88.2634 3.81907 88.8211 4.03534C89.3789 4.25161 89.8569 4.56463 90.2553 4.9744C90.6651 5.38418 90.9781 5.87932 91.1944 6.45983C91.422 7.04034 91.5359 7.70622 91.5359 8.45747C91.5359 9.39084 91.3537 10.2161 90.9895 10.9332C90.6252 11.6389 90.1017 12.191 89.4187 12.5893C88.7471 12.9877 87.9276 13.1869 86.9601 13.1869ZM86.943 11.1551C87.3528 11.1551 87.7113 11.0584 88.0186 10.8649C88.3374 10.66 88.5764 10.3584 88.7357 9.95997C88.9065 9.56158 88.9918 9.06075 88.9918 8.45747C88.9918 8.00217 88.9463 7.60947 88.8553 7.27938C88.7642 6.9379 88.6276 6.65333 88.4455 6.42568C88.2634 6.19803 88.0471 6.03298 87.7967 5.93054C87.5463 5.81671 87.2674 5.7598 86.9601 5.7598C86.5503 5.7598 86.186 5.85655 85.8673 6.05006C85.56 6.24356 85.321 6.53951 85.1502 6.9379C84.9795 7.33629 84.8941 7.84281 84.8941 8.45747C84.8941 8.91278 84.9397 9.31117 85.0307 9.65264C85.1332 9.98274 85.2754 10.2616 85.4576 10.4893C85.6397 10.7055 85.8559 10.8706 86.1064 10.9844C86.3568 11.0982 86.6357 11.1551 86.943 11.1551Z" fill="#16191D"></path>
<path d="M79.6032 13.0319C78.9886 13.0319 78.5105 12.9408 78.169 12.7587C77.8275 12.5765 77.5885 12.3204 77.4519 11.9903C77.3267 11.6489 77.2641 11.2505 77.2641 10.7952V5.89497H75.625V3.88026H77.2641V1.38747L79.7569 1.14844V3.88026H81.6009V5.89497H79.7569V10.3171C79.7569 10.5903 79.8195 10.7724 79.9447 10.8635C80.0699 10.9545 80.252 11.0001 80.4911 11.0001H81.6009V13.0319H79.6032Z" fill="#16191D"></path>
<path d="M63.9667 13.0344L61.7812 3.88281H64.3765L65.7936 10.5245H65.8961L67.1937 3.88281H69.9255L71.2231 10.5587H71.2914L72.7256 3.88281H75.2184L73.0159 13.0344H69.7377L68.4913 7.07563H68.4059L67.1937 13.0344H63.9667Z" fill="#16191D"></path>
<path d="M57.0197 13.1869C56.0635 13.1869 55.244 12.9934 54.561 12.6064C53.8895 12.2194 53.3715 11.6787 53.0073 10.9844C52.6431 10.2787 52.4609 9.45914 52.4609 8.52577C52.4609 7.53548 52.6431 6.68179 53.0073 5.96469C53.3715 5.24759 53.8895 4.69553 54.561 4.30852C55.2326 3.91013 56.0237 3.71094 56.9343 3.71094C57.9929 3.71094 58.8636 3.94428 59.5466 4.41097C60.2295 4.87765 60.719 5.50938 61.0149 6.30617C61.3109 7.10295 61.4076 8.00786 61.3052 9.02091H54.9366C54.9253 9.49898 55.0049 9.90875 55.1757 10.2502C55.3578 10.5917 55.6082 10.8535 55.9269 11.0356C56.2456 11.2064 56.6099 11.2917 57.0197 11.2917C57.4977 11.2917 57.9018 11.1893 58.2319 10.9844C58.5734 10.7681 58.7897 10.4836 58.8807 10.1307H61.254C61.1743 10.7454 60.941 11.2804 60.554 11.7357C60.1783 12.191 59.6889 12.5495 59.0856 12.8113C58.4823 13.0617 57.7937 13.1869 57.0197 13.1869ZM54.9366 7.68915L54.7147 7.41597H59.0685L58.8466 7.68915C58.8693 7.21108 58.7953 6.82407 58.6246 6.52813C58.4652 6.2208 58.2376 5.99314 57.9416 5.84517C57.6457 5.68581 57.3099 5.60614 56.9343 5.60614C56.5245 5.60614 56.1717 5.69151 55.8757 5.86224C55.5798 6.03298 55.3464 6.27771 55.1757 6.59642C55.0163 6.90375 54.9366 7.26799 54.9366 7.68915Z" fill="#16191D"></path>
<path d="M39.5859 13.0328V0.585938H42.7617L48.0034 9.37898H48.1229L48.0204 5.40077V0.585938H50.5815V13.0328H47.5765L42.3348 4.42756H42.2153L42.2836 8.03015V13.0328H39.5859Z" fill="#16191D"></path>
<defs>
<clipPath id="clip0_944_43574">
<rect width="27.6923" height="36" fill="white"></rect>
</clipPath>
</defs>
`;e.s(["NST_EMBLEM_PATH",0,i,"NstLogo",0,function({className:e="h-9 w-auto"}){return(0,t.jsx)("svg",{viewBox:"0 0 163 36",fill:"none",role:"img","aria-label":"Newton School of Technology",className:e,dangerouslySetInnerHTML:{__html:a}})}])}]);