(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,756903,e=>{"use strict";var t=e.i(843476),r=e.i(271645),i=e.i(339415),n=e.i(549838);let a=(0,r.createContext)(null);function l(){let e=(0,r.useContext)(a);if(!e)throw Error("useRcbModal must be used within a modal provider");return e}let s={brand:{variant:"primary",color:"brand"},success:{variant:"primary",color:"success"},neutral:{variant:"primary",color:"neutral"},dark:{variant:"primary",color:"neutral"},outline:{variant:"secondary",color:"brand"}};e.s(["ModalCtaButton",0,function({cta:e,color:r="brand",size:a="large",fullWidth:o,className:c,leadingIcon:d,trailingIcon:u,ariaLabel:f}){let{open:h}=l(),{variant:p,color:g}=s[r],x="large"===a;return(0,t.jsxs)(i.default,{variant:p,color:g,size:a,onClick:()=>h(e),"data-from":e.from,"aria-label":f,style:{"--font-size":x?"16px":"14px","--line-height":x?"26px":"20px","--font-weight-semibold":"600"},className:(0,n.cn)(o&&"w-full! md:w-auto!",x?"h-14! px-5!":"h-10! px-4! md:h-12! md:px-5!",c),children:[d,e.label,u]})},"RcbModalContext",0,a,"useRcbModal",0,l])},703109,968081,e=>{"use strict";var t=e.i(997053),r=e.i(271645),i={DISPLAY_BD_D1:"display-bd-d1",DISPLAY_BD_D2:"display-bd-d2",DISPLAY_BD_D3:"display-bd-d3",HEADING_SB_H1:"heading-sb-h1",HEADING_SB_H2:"heading-sb-h2",HEADING_SB_H3:"heading-sb-h3",HEADING_SB_H4:"heading-sb-h4",HEADING_SB_H5:"heading-sb-h5",HEADING_SB_H6:"heading-sb-h6",PARAGRAPH_SB_P1:"paragraph-sb-p1",PARAGRAPH_SB_P2:"paragraph-sb-p2",PARAGRAPH_SB_P3:"paragraph-sb-p3",PARAGRAPH_SB_P4:"paragraph-sb-p4",PARAGRAPH_SB_L1:"paragraph-sb-l1",PARAGRAPH_SB_L2:"paragraph-sb-l2",PARAGRAPH_MD_P1:"paragraph-md-p1",PARAGRAPH_MD_P2:"paragraph-md-p2",PARAGRAPH_MD_P3:"paragraph-md-p3",PARAGRAPH_MD_P4:"paragraph-md-p4",PARAGRAPH_MD_C1:"paragraph-md-c1",PARAGRAPH_MD_L1:"paragraph-md-l1",PARAGRAPH_MD_L2:"paragraph-md-l2",OVERLINE_SB_OL1:"overline-sb-ol1",OVERLINE_SB_OL2:"overline-sb-ol2",ACTION_SB_P1:"action-sb-p1",ACTION_SB_P2:"action-sb-p2",ACTION_SB_LK1:"action-sb-lk1"};Object.freeze(Object.values(i));var n={H1:"h1",H2:"h2",H3:"h3",H4:"h4",H5:"h5",H6:"h6",P:"p",SPAN:"span",DIV:"div",LABEL:"label",CAPTION:"caption",CODE:"code",AUTO:"auto"};Object.freeze(Object.values(n));var a={[i.DISPLAY_BD_D1]:t.css`
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
    `},l={[i.DISPLAY_BD_D1]:n.H1,[i.DISPLAY_BD_D2]:n.H2,[i.DISPLAY_BD_D3]:n.H3,[i.HEADING_SB_H1]:n.H1,[i.HEADING_SB_H2]:n.H2,[i.HEADING_SB_H3]:n.H3,[i.HEADING_SB_H4]:n.H4,[i.HEADING_SB_H5]:n.H5,[i.HEADING_SB_H6]:n.H6,[i.PARAGRAPH_SB_P1]:n.P,[i.PARAGRAPH_SB_P2]:n.P,[i.PARAGRAPH_SB_P3]:n.P,[i.PARAGRAPH_SB_P4]:n.P,[i.PARAGRAPH_SB_L1]:n.LABEL,[i.PARAGRAPH_SB_L2]:n.LABEL,[i.PARAGRAPH_MD_P1]:n.P,[i.PARAGRAPH_MD_P2]:n.P,[i.PARAGRAPH_MD_P3]:n.P,[i.PARAGRAPH_MD_P4]:n.P,[i.PARAGRAPH_MD_C1]:n.CODE,[i.PARAGRAPH_MD_L1]:n.LABEL,[i.PARAGRAPH_MD_L2]:n.LABEL,[i.OVERLINE_SB_OL1]:n.P,[i.OVERLINE_SB_OL2]:n.P,[i.ACTION_SB_P1]:n.SPAN,[i.ACTION_SB_P2]:n.SPAN,[i.ACTION_SB_LK1]:n.SPAN},s=t.styled.p.attrs(e=>({as:e.as||"p"}))`
    margin: 0;
    padding: 0;

    font-family: var(--font-family, 'Mona Sans');
    color: var(--text-emphasis-primary-default, #16191d);

    ${({$variant:e})=>t.css`
            ${e?a[e]:a[i.PARAGRAPH_MD_P1]}
        `};

    ${({$textAlign:e})=>e&&`text-align: ${e};`}
    ${({$textTransform:e})=>e&&`text-transform: ${e};`}
    ${({$fontSize:e})=>e&&`font-size: ${e};`}
    ${({$color:e})=>e&&`color: ${e};`};
`,o=({variant:e="paragraph-md-p1",as:t="auto",color:i="var(--text-emphasis-primary-default, #16191d)",textAlign:a=null,textTransform:o=null,fontSize:c=null,children:d="",className:u="",title:f=null})=>{let h=t===n.AUTO?l[e]:t;return r.default.createElement(s,{$variant:e,as:h,$color:i,$textAlign:a,$textTransform:o,$fontSize:c,className:u,title:f},d)};e.s(["Typography_default",0,o],968081),e.s(["default",0,o],703109)},830249,e=>{"use strict";var t=e.i(271645);e.s(["useParentUrl",0,function(){let[e,r]=(0,t.useState)("");return(0,t.useEffect)(()=>{function e(e){let t=e.data;t&&"object"==typeof t&&"PARENT_URL"===t.type&&"string"==typeof t.url&&r(t.url)}return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]),e}])},397681,e=>{"use strict";var t=e.i(893347),r=e.i(773892),i=e.i(364072),n=e.i(189101),a=e.i(824511),l=e.i(88653),s=e.i(271645),o=e.i(997053),c=(0,o.styled)(a.m.div)`
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
`,u=o.styled.div`
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
`,h=o.styled.div`
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
`,p=o.styled.div`
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
`,m={slide:{variants:{hidden:{opacity:0,y:-50},visible:{opacity:1,y:0},exit:{opacity:0,y:50}},transition:{duration:.3}},"slide-reverse":{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0},exit:{opacity:0,y:-50}},transition:{duration:.3}},fade:{variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},transition:{duration:.3}},emanate:{}},v=(0,s.forwardRef)(({width:e,height:t,minHeight:r,minWidth:i,maxHeight:n,maxWidth:a,mobileBottomFullWidth:l,modalPadding:o,border:d,children:u,...f},h)=>s.default.createElement(c,{ref:h,$width:e,$height:t,$minHeight:r,$minWidth:i,$maxHeight:n,$maxWidth:a,$mobileBottomFullWidth:l,$modalPadding:o,$border:d,...f},u)),_=(0,s.forwardRef)(({justifyContent:e,children:t},r)=>s.default.createElement(g,{ref:r,$justifyContent:e},t)),w=(0,s.forwardRef)(({overflow:e,children:t,...r},i)=>s.default.createElement(d,{ref:i,$overflow:e,...r},t)),A=(0,s.forwardRef)(({children:e,...t},r)=>s.default.createElement(x,{ref:r,...t},e)),b=(0,s.forwardRef)(({children:e,...t},r)=>s.default.createElement(f,{ref:r,...t},e)),P=(0,s.forwardRef)(({children:e,...t},r)=>s.default.createElement(h,{ref:r,...t},e)),y=(0,s.forwardRef)(({modalBodyMargin:e,children:t,...r},i)=>s.default.createElement(p,{ref:i,$modalBodyMargin:e,...r},t)),R=(0,s.forwardRef)(({...e},t)=>s.default.createElement(u,{ref:t,...e})),S=(0,s.forwardRef)((e,a)=>{let{isOpen:o=!0,banner:u=null,title:v=null,description:_=null,body:w=null,action:A=null,height:b="auto",width:P="500px",minHeight:y=null,minWidth:R=null,maxHeight:S="95vh",maxWidth:j="95vw",onHide:H=()=>{},onClose:B=()=>{},mobileBottomFullWidth:C=!1,modalPadding:z="20px",border:k="1px solid var(--border-subtle-primary-default, #e1e5ea)",modalBodyMargin:D=null,showCloseButton:E=!1,hideOnClickAway:N=!1,blurBackground:L=!1,animatePresence:$="fade",clickEvent:I=null,children:M=null,shouldFocusOnFirstElement:O=!0,shouldDisableScroll:G=!0,overflow:T="visible",className:F}=e,U=(0,s.useRef)(null),W=()=>{"function"==typeof H&&H(),"function"==typeof B&&B()};(0,s.useImperativeHandle)(a,()=>U.current),(0,r.useDisableBodyScroll_default)(o),(0,r.useKeyboardEvent_default)({onKeyPress:()=>{N&&W()},keyCodes:["Escape"],config:{shouldDetect:o}});let V=(0,s.useId)(),q=(0,s.useMemo)(()=>{var e,t;return e=$,t=I,"emanate"===e?"number"==typeof(null==t?void 0:t.clientX)&&"number"==typeof(null==t?void 0:t.clientY)?((e,t)=>{let r,i;try{r=e-window.innerWidth/2,i=t-window.innerHeight/2}catch(e){r=0,i=0}return{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{scale:0,opacity:0,x:r,y:i},visible:{scale:1,opacity:1,x:0,y:0},exit:{scale:0,opacity:0,x:r,y:i}},transition:{duration:.3}}})(t.clientX,t.clientY):{}:{initial:"hidden",animate:"visible",exit:"exit",...e?m[e]:{}}},[$,I]),Y=(0,s.useMemo)(()=>(({isOpen:e,animatePresence:t,clickEvent:r})=>!!e&&("emanate"!==t||"number"==typeof(null==r?void 0:r.clientX)&&"number"==typeof(null==r?void 0:r.clientY)))({isOpen:o,animatePresence:$,clickEvent:I}),[o,$,I]);return s.default.createElement(i.motion_default,null,s.default.createElement(l.AnimatePresence,null,Y&&s.default.createElement(t.Overlay_default,{shouldDisableScroll:G,onOverlayClick:()=>{N&&W()},shouldTintOverlay:!0,shouldBlurOverlay:L,shouldCenterContent:!0,"data-testid":"testid-modalwrapper",className:F,animationDuration:.3,shouldFocusOnFirstElement:O},s.default.createElement(c,{onClick:e=>e.stopPropagation(),ref:U,$width:P,$height:b,$minHeight:y,$minWidth:R,$maxHeight:S,$maxWidth:j,$mobileBottomFullWidth:C,$modalPadding:z,$border:k,"aria-labelledby":`modal-title-${V}`,"aria-describedby":`modal-description-${V}`,"aria-modal":"true",role:"dialog","data-testid":"testid-modal",...q},s.default.createElement(d,{$overflow:T},E&&s.default.createElement(g,{$justifyContent:"end"},s.default.createElement(n.IconButton_default,{onClick:W,size:"small",variant:"tertiary",color:"neutral",icon:"close",ariaLabel:"Close",buttonProps:{autoFocus:!0}})),u&&s.default.createElement(x,null,u),v&&s.default.createElement(f,{id:`modal-title-${V}`},v),_&&s.default.createElement(h,{id:`modal-description-${V}`},_),w&&s.default.createElement(p,{$modalBodyMargin:D},w),M&&s.default.createElement(p,{$modalBodyMargin:D},M)),A&&s.default.createElement(g,null,A)))))});S.Modal=v,S.Main=w,S.Banner=A,S.Title=b,S.Description=P,S.Body=y,S.Action=_,S.Divider=R,e.s(["NSModal",0,S],397681)},914984,e=>{"use strict";var t=e.i(843476);e.s(["ArrowRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M5 12h14m0 0-6-6m6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronLeftIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m15 6-6 6 6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m9 6 6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"CloseIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M6 6l12 12M18 6 6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"RadioUncheckedIcon",0,function({className:e}){return(0,t.jsx)("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":!0,focusable:"false",className:e,children:(0,t.jsx)("path",{d:"M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 14.6 5.4 18.3333 10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667ZM10 16.6667C6.31667 16.6667 3.33333 13.6833 3.33333 10C3.33333 6.31667 6.31667 3.33333 10 3.33333C13.6833 3.33333 16.6667 6.31667 16.6667 10C16.6667 13.6833 13.6833 16.6667 10 16.6667Z",fill:"currentColor"})})},"SparkIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M12 2c.45 4.2 2.3 6.05 6.5 6.5-4.2.45-6.05 2.3-6.5 6.5-.45-4.2-2.3-6.05-6.5-6.5C9.7 8.05 11.55 6.2 12 2z"})})},"YouTubePlayIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 68 48",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("path",{d:"M66.5 7.5a8.5 8.5 0 0 0-6-6C55.2 0 34 0 34 0S12.8 0 7.5 1.5a8.5 8.5 0 0 0-6 6A89 89 0 0 0 0 24a89 89 0 0 0 1.5 16.5 8.5 8.5 0 0 0 6 6C12.8 48 34 48 34 48s21.2 0 26.5-1.5a8.5 8.5 0 0 0 6-6A89 89 0 0 0 68 24a89 89 0 0 0-1.5-16.5z",fill:"#FF0000"}),(0,t.jsx)("path",{d:"M27.2 34.29 44.85 24 27.2 13.71v20.58z",fill:"#fff"})]})}])},680395,e=>{"use strict";let t="ns_rcb_unlock_v2";function r(){let e=function(e,t){try{let r=e().getItem(t);if(!r)return null;return JSON.parse(r)}catch{return null}}(()=>window.sessionStorage,t);if(!e||1!==e.v||!e.profile)return null;let r=e.profile;return"string"==typeof r.fullName&&"string"==typeof r.phone&&r.fullName.trim()&&10===r.phone.replace(/\D/g,"").length?{fullName:r.fullName,phone:r.phone,email:"string"==typeof r.email?r.email:"",whatsapp:!!r.whatsapp,qualifierAnswers:r.qualifierAnswers&&"object"==typeof r.qualifierAnswers?r.qualifierAnswers:{},savedAt:"number"==typeof r.savedAt?r.savedAt:0}:null}e.s(["DEFAULT_RCB_QUALIFIER_KEYS",0,["highest_qualification","graduation_year"],"isLeadUnlocked",0,function(){return null!==r()},"mergeUnlockProfile",0,function(e){let i=r();!function(e,t,r){try{e().setItem(t,JSON.stringify(r))}catch{return!1}}(()=>window.sessionStorage,t,{v:1,profile:{fullName:e.fullName,phone:e.phone,email:e.email,whatsapp:e.whatsapp,qualifierAnswers:{...i?.qualifierAnswers,...e.qualifierAnswers},savedAt:Date.now()}})},"normalizeQualifierValue",0,function(e){return e.replace(/[\u200B\u200C\u200D\u2060\uFEFF]/g,"").trim()},"readUnlockProfile",0,r])},356105,527341,e=>{"use strict";var t=e.i(271645),r=e.i(336835);let i="multi_step_rcb_form_partial_fill_hash";function n(e){try{return window.localStorage.getItem(e)??""}catch{return""}}function a(e,t){try{window.localStorage.setItem(e,t)}catch{}}function l(e){try{window.localStorage.removeItem(e)}catch{}}e.s(["usePartialRcb",0,function(e){let s=e?.resumeStoredHash??!0,o=e?.filedScope?"multi_step_rcb_form_filed_hash:"+e.filedScope:"",c=(0,t.useRef)(o);c.current=o;let d=(0,t.useRef)(!1),u=(0,t.useRef)(e?.onHash);u.current=e?.onHash;let f=(0,t.useRef)(e?.hashSource);f.current=e?.hashSource;let h=(0,t.useRef)(""),p=(0,t.useRef)(""),g=(0,t.useRef)(Promise.resolve());return(0,t.useEffect)(()=>{if(!s)return;let e=c.current?n(c.current):"";e?(h.current=e,d.current=!0):h.current=n(i)},[]),{save:(0,t.useCallback)((e,t=!1,{updateLsq:n=!1,keepHash:o=!1}={})=>{let x=async()=>{let g;if(!t&&!(e.fullName.trim()||e.phone.trim()||e.email.trim()||Object.values(e.qualifiers).some(Boolean))||!t&&!n&&d.current)return{ok:!0};let x=JSON.stringify({input:e,updateLsq:n});return t||x!==p.current?((p.current=x,!h.current&&f.current&&(h.current=f.current()),h.current)?g=await (0,r.updateRcb)(h.current,e,t,n):(g=await (0,r.createRcb)(e,t,n)).ok&&g.hash&&(h.current=g.hash,u.current?.(g.hash),s&&a(i,g.hash)),g.ok||p.current!==x||(p.current=""),g.ok&&s&&(t||n)&&(l(i),c.current&&(o&&!t?a(c.current,h.current):l(c.current))),{ok:g.ok,error:g.error}):(n&&!o&&s&&(l(i),c.current&&l(c.current)),{ok:!0})},m=g.current.then(x,x);return g.current=m.catch(()=>{}),m},[s])}}],356105);var s=e.i(680395),o=e.i(58863);let c=/^[a-z ,.'-]+$/i,d=/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;e.s(["buildRcbInput",0,function(e){return{fullName:e.name,phone:e.phone,email:e.email,qualifiers:e.answers,whatsapp:e.whatsapp,from:e.from,parentUrl:e.parentUrl,nextUrl:e.nextUrl,utmParams:(0,o.getUtmParams)(),responseType:e.responseType,formVariant:e.formVariant,...e.extraLeadFields?{extraLeadFields:e.extraLeadFields}:{}}},"flattenRcbSteps",0,function(e){return e.flatMap(e=>e.questions)},"rcbContactErrorMessage",0,function(e,t){switch(e){case"name":return t.trim()?"Full Name can only contain alphabets":"Full Name is Required";case"phone":return t?"Invalid Phone Number":"Phone Number is Required";case"email":return t.trim()?"Enter a valid email address":"Email is Required"}},"rcbContactErrors",0,function({name:e,phone:t,email:r},{requireEmail:i}){return{name:0===e.trim().length||!c.test(e.trim()),phone:10!==t.replace(/\D/g,"").length,email:!!i&&!d.test(r.trim())}},"seedAnswers",0,function(e,t){if(!e)return{};let r={};for(let i of t){let t=e.qualifierAnswers[i.key];if(!t)continue;let n=i.items.find(e=>(0,s.normalizeQualifierValue)(e.value)===(0,s.normalizeQualifierValue)(t));n&&(r[i.key]=n.value)}return r}],527341)},409954,e=>{"use strict";var t=e.i(843476);e.i(914984),e.s(["ArrowDownIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M12 4v16m0 0-6-6m6 6 6-6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"CalendarIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("rect",{x:"3.5",y:"5",width:"17",height:"15",rx:"2",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]})},"CheckCircleIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"m8.5 12.4 2.5 2.5L16 9.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})},"ClockIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"8.25",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"M12 7.5V12l3 2",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})]})}])},53461,e=>{"use strict";var t=e.i(271645);e.s(["useIsMobile",0,function(e=600){let[r,i]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let t=window.matchMedia(`(max-width: ${e}px)`),r=()=>i(t.matches);return r(),t.addEventListener("change",r),()=>t.removeEventListener("change",r)},[e]),r}])},571266,e=>{"use strict";var t=e.i(843476),r=e.i(549838);e.s(["DsContainer",0,function({as:e="div",className:i,children:n}){return(0,t.jsx)(e,{className:(0,r.cn)("mx-auto w-full max-w-[1200px] px-4",i),children:n})}])},667585,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let i=e.r(132061);function n({reason:e,children:t}){if("u"<typeof window)throw Object.defineProperty(new i.BailoutToCSRError(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return t}},309885,(e,t,r)=>{"use strict";function i(e){return e.split("/").map(e=>encodeURIComponent(e)).join("/")}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"encodeURIPath",{enumerable:!0,get:function(){return i}})},652157,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"PreloadChunks",{enumerable:!0,get:function(){return o}});let i=e.r(843476),n=e.r(174080),a=e.r(563599),l=e.r(309885),s=e.r(543369);function o({moduleIds:e}){if("u">typeof window)return null;let t=a.workAsyncStorage.getStore();if(void 0===t)return null;let r=[];if(t.reactLoadableManifest&&e){let i=t.reactLoadableManifest;for(let t of e){if(!i[t])continue;let e=i[t].files;r.push(...e)}}if(0===r.length)return null;let c=(0,s.getAssetTokenQuery)();return(0,i.jsx)(i.Fragment,{children:r.map(e=>{let r=`${t.assetPrefix}/_next/${(0,l.encodeURIPath)(e)}${c}`;return e.endsWith(".css")?(0,i.jsx)("link",{precedence:"dynamic",href:r,rel:"stylesheet",as:"style",nonce:t.nonce},e):((0,n.preload)(r,{as:"script",fetchPriority:"low",nonce:t.nonce}),null)})})}},869093,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return c}});let i=e.r(843476),n=e.r(271645),a=e.r(667585),l=e.r(652157);function s(e){return{default:e&&"default"in e?e.default:e}}let o={loader:()=>Promise.resolve(s(()=>null)),loading:null,ssr:!0},c=function(e){let t={...o,...e},r=(0,n.lazy)(()=>t.loader().then(s)),c=t.loading;function d(e){let s=c?(0,i.jsx)(c,{isLoading:!0,pastDelay:!0,error:null}):null,o=!t.ssr||!!t.loading,d=o?n.Suspense:n.Fragment,u=t.ssr?(0,i.jsxs)(i.Fragment,{children:["u"<typeof window?(0,i.jsx)(l.PreloadChunks,{moduleIds:t.modules}):null,(0,i.jsx)(r,{...e})]}):(0,i.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,i.jsx)(r,{...e})});return(0,i.jsx)(d,{...o?{fallback:s}:{},children:u})}return d.displayName="LoadableComponent",d}},770703,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return n}});let i=e.r(555682)._(e.r(869093));function n(e,t){let r={};"function"==typeof e&&(r.loader=e);let n={...r,...t};return(0,i.default)({...n,modules:n.loadableGenerated?.modules})}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},92829,e=>{"use strict";var t=e.i(843476);let r=(0,e.i(770703).default)(()=>e.A(623645),{loadableGenerated:{modules:[257532]},ssr:!1,loading:()=>null});e.s(["SuccessCheckmark",0,function({size:e=132,label:i="Submitted successfully"}){let n=e/132;return(0,t.jsx)("div",{className:"relative overflow-hidden",style:{width:e,height:e},...i?{role:"img","aria-label":i}:{"aria-hidden":!0},children:(0,t.jsx)("div",{className:"absolute",style:{left:-30.8*n,top:-31.9*n,width:194.7*n,height:194.7*n},children:(0,t.jsx)(r,{})})})}])},603064,e=>{"use strict";var t=e.i(843476),r=e.i(92829);e.s(["SubmissionSuccess",0,function(){return(0,t.jsxs)("div",{className:"flex flex-col items-center overflow-clip rounded-2xl bg-white text-center",children:[(0,t.jsx)("div",{className:"flex w-full justify-center bg-[rgba(217,252,237,0.3)] py-4",children:(0,t.jsx)(r.SuccessCheckmark,{})}),(0,t.jsxs)("div",{className:"flex w-full flex-col items-center gap-1",children:[(0,t.jsx)("p",{className:"font-ds text-lg leading-7 font-semibold tracking-[0.06px] text-[#16191d]",children:"Your submission was successful!"}),(0,t.jsx)("p",{className:"font-ds text-base leading-[26px] font-medium tracking-[0.1px] text-[#5b6271]",children:"Our team will reach out to you shortly."})]})]})}])},211269,e=>{"use strict";e.s(["PORTAL_FONT_CLASS",0,"grauity-portal-font font-ds [font-feature-settings:'ss01','cv11']"])},295455,e=>{"use strict";var t=e.i(843476),r=e.i(271645),i=e.i(770703),n=e.i(397681),a=e.i(549838),l=e.i(211269);e.i(409954);var s=e.i(914984),o=e.i(692156),c=e.i(85842),d=e.i(527341),u=e.i(680395),f=e.i(851361),h=e.i(756903);let p=(0,i.default)(()=>e.A(490643).then(e=>e.RcbMultiStepForm),{ssr:!1});e.s(["RcbModalProvider",0,function({analytics:e,applyConfig:i,rcbHeading:g="Request a callback",successSlot:x=null,overlay:m=null,contentClassName:v,pageName:_,qualifiers:w,formVariant:A,rcbSteps:b,rcbFlowForCta:P,mapCta:y,multiStepForm:R,children:S}){let j=R??p,[H,B]=(0,r.useState)(null),[C,z]=(0,r.useState)(!1),[k,D]=(0,r.useState)(void 0),E=(0,r.useRef)(null),N=(0,f.useSendAnalyticsEvent)(),L=(0,r.useCallback)(t=>{let r=y?y(t):t;E.current=document.activeElement??null,z(!1);let i=e.eventForCta(r),n=e.buildEventData({from:r.from,heading:r.heading,mode:r.mode??"rcb"});i&&(N({...i,eventData:n}),e.fireLivePageGtag({eventName:i.eventName,from:r.from})),N({...e.modalOpenEvent,eventData:n}),D((r.mode??"rcb")==="signup"?void 0:(0,u.readUnlockProfile)()??void 0),B(r)},[e,N,y]),$=(0,r.useCallback)(()=>{B(t=>(t&&N({...e.modalCloseEvent,eventData:e.buildEventData({from:t.from,heading:t.heading})}),null)),D(void 0),E.current?.focus?.()},[e,N]),I=(0,r.useMemo)(()=>({open:L,isCtaModalOpen:null!==H,counsellingPopupOpen:C,setCounsellingPopupOpen:z}),[L,H,C]),M=b?(0,d.flattenRcbSteps)(b):w,O=!M||M.every(e=>{let t=k?.qualifierAnswers?.[e.key];return!!t&&e.items.some(e=>(0,u.normalizeQualifierValue)(e.value)===(0,u.normalizeQualifierValue)(t))}),G=null!==H&&"signup"!==H.mode,T=G&&H?P?.(H):void 0,F=G&&(!!b||!!T);return(0,t.jsxs)(h.RcbModalContext.Provider,{value:I,children:[S,(0,t.jsx)(n.NSModal,{isOpen:null!==H,onClose:$,hideOnClickAway:!0,showCloseButton:!1,width:F?"500px":"420px",mobileBottomFullWidth:F,className:F?"max-[600px]:[&_[role=dialog]]:left-0":void 0,border:"none",animatePresence:"fade",overflow:"hidden",modalPadding:H?.mode==="signup"?void 0:"0",children:H&&(0,t.jsxs)("div",{className:(0,a.cn)("relative",l.PORTAL_FONT_CLASS,v),style:{textAlign:"left"},children:[(0,t.jsx)("button",{type:"button",onClick:$,"aria-label":"Close",className:(0,a.cn)("text-ds-muted hover:bg-ds-surface absolute z-10 flex size-9 cursor-pointer items-center justify-center rounded-full","signup"===H.mode?"top-1 right-1":F?"top-1.5 right-[18px] min-[601px]:top-3.5 min-[601px]:right-[22px]":"top-2 right-2"),children:(0,t.jsx)(s.CloseIcon,{className:F?"size-5 min-[601px]:size-6":"size-5"})}),"signup"===H.mode&&i?(0,t.jsx)("div",{className:"max-h-[calc(95svh-40px)] overflow-x-hidden overflow-y-auto",children:(0,t.jsx)(o.ApplyForm,{title:H.heading??i.title,courseType:i.courseType,urlSlug:i.urlSlug,config:i.config,pageName:_,surface:"modal"})}):T?(0,t.jsx)(j,{from:H.from,heading:T.heading??H.heading??g,screens:T.screens,nextUrl:T.nextUrl??H.nextUrl,brochure:H.brochure,eventData:T.eventData,pageName:_,formVariant:T.formVariant??A,prefill:k,successSlot:x}):b&&F?(0,t.jsx)(j,{from:H.from,heading:H.heading??g,steps:b,nextUrl:H.nextUrl,brochure:H.brochure,pageName:_,formVariant:A,prefill:k,autoSubmit:!!k&&O,successSlot:x}):(0,t.jsx)(c.RcbForm,{from:H.from,heading:H.heading??g,nextUrl:H.nextUrl,brochure:H.brochure,pageName:_,qualifiers:w,formVariant:A,prefill:k,autoSubmit:!!k&&O,successSlot:x})]})}),m]})}])},13017,182547,e=>{"use strict";var t=e.i(843476),r=e.i(271645),i=e.i(549838);let n={brand:"bg-[linear-gradient(90deg,#f8b34b_0%,#ec80b4_18%,#6157f8_55%,#00a1c1_76%)]",title:"bg-[linear-gradient(90deg,#f8b34b_36.058%,#ec80b4_59.135%,#6157f8_76.442%,#00a1c1_100%)]"};function a({variant:e="brand",className:r,children:l}){return(0,t.jsx)("span",{className:(0,i.cn)(n[e],"bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]",r),children:l})}e.s(["GradientText",0,a],182547),e.s(["RichText",0,function({spans:e,gradientVariant:n="brand"}){return(0,t.jsx)(t.Fragment,{children:e.map((e,l)=>e.gradient?(0,t.jsx)(a,{variant:n,className:e.className,children:e.text},l):e.highlight?(0,t.jsx)("span",{className:(0,i.cn)("text-ds-blue",e.className),children:e.text},l):e.className?(0,t.jsx)("span",{className:e.className,children:e.text},l):(0,t.jsx)(r.Fragment,{children:e.text},l))})}],13017)}]);