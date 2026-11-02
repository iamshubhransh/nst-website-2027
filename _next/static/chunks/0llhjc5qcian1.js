(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,818581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return i}});let n=e.r(271645);function i(e,t){let r=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=a(e,n)),t&&(i.current=a(t,n))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},756903,e=>{"use strict";var t=e.i(843476),r=e.i(271645),n=e.i(339415),i=e.i(549838);let a=(0,r.createContext)(null);function l(){let e=(0,r.useContext)(a);if(!e)throw Error("useRcbModal must be used within a modal provider");return e}let s={brand:{variant:"primary",color:"brand"},success:{variant:"primary",color:"success"},neutral:{variant:"primary",color:"neutral"},dark:{variant:"primary",color:"neutral"},outline:{variant:"secondary",color:"brand"}};e.s(["ModalCtaButton",0,function({cta:e,color:r="brand",size:a="large",fullWidth:o,className:c,leadingIcon:u,trailingIcon:p,ariaLabel:f}){let{open:d}=l(),{variant:h,color:g}=s[r],v="large"===a;return(0,t.jsxs)(n.default,{variant:h,color:g,size:a,onClick:()=>d(e),"data-from":e.from,"aria-label":f,style:{"--font-size":v?"16px":"14px","--line-height":v?"26px":"20px","--font-weight-semibold":"600"},className:(0,i.cn)(o&&"w-full! md:w-auto!",v?"h-14! px-5!":"h-10! px-4! md:h-12! md:px-5!",c),children:[u,e.label,p]})},"RcbModalContext",0,a,"useRcbModal",0,l])},703109,968081,e=>{"use strict";var t=e.i(997053),r=e.i(271645),n={DISPLAY_BD_D1:"display-bd-d1",DISPLAY_BD_D2:"display-bd-d2",DISPLAY_BD_D3:"display-bd-d3",HEADING_SB_H1:"heading-sb-h1",HEADING_SB_H2:"heading-sb-h2",HEADING_SB_H3:"heading-sb-h3",HEADING_SB_H4:"heading-sb-h4",HEADING_SB_H5:"heading-sb-h5",HEADING_SB_H6:"heading-sb-h6",PARAGRAPH_SB_P1:"paragraph-sb-p1",PARAGRAPH_SB_P2:"paragraph-sb-p2",PARAGRAPH_SB_P3:"paragraph-sb-p3",PARAGRAPH_SB_P4:"paragraph-sb-p4",PARAGRAPH_SB_L1:"paragraph-sb-l1",PARAGRAPH_SB_L2:"paragraph-sb-l2",PARAGRAPH_MD_P1:"paragraph-md-p1",PARAGRAPH_MD_P2:"paragraph-md-p2",PARAGRAPH_MD_P3:"paragraph-md-p3",PARAGRAPH_MD_P4:"paragraph-md-p4",PARAGRAPH_MD_C1:"paragraph-md-c1",PARAGRAPH_MD_L1:"paragraph-md-l1",PARAGRAPH_MD_L2:"paragraph-md-l2",OVERLINE_SB_OL1:"overline-sb-ol1",OVERLINE_SB_OL2:"overline-sb-ol2",ACTION_SB_P1:"action-sb-p1",ACTION_SB_P2:"action-sb-p2",ACTION_SB_LK1:"action-sb-lk1"};Object.freeze(Object.values(n));var i={H1:"h1",H2:"h2",H3:"h3",H4:"h4",H5:"h5",H6:"h6",P:"p",SPAN:"span",DIV:"div",LABEL:"label",CAPTION:"caption",CODE:"code",AUTO:"auto"};Object.freeze(Object.values(i));var a={[n.DISPLAY_BD_D1]:t.css`
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
    `},l={[n.DISPLAY_BD_D1]:i.H1,[n.DISPLAY_BD_D2]:i.H2,[n.DISPLAY_BD_D3]:i.H3,[n.HEADING_SB_H1]:i.H1,[n.HEADING_SB_H2]:i.H2,[n.HEADING_SB_H3]:i.H3,[n.HEADING_SB_H4]:i.H4,[n.HEADING_SB_H5]:i.H5,[n.HEADING_SB_H6]:i.H6,[n.PARAGRAPH_SB_P1]:i.P,[n.PARAGRAPH_SB_P2]:i.P,[n.PARAGRAPH_SB_P3]:i.P,[n.PARAGRAPH_SB_P4]:i.P,[n.PARAGRAPH_SB_L1]:i.LABEL,[n.PARAGRAPH_SB_L2]:i.LABEL,[n.PARAGRAPH_MD_P1]:i.P,[n.PARAGRAPH_MD_P2]:i.P,[n.PARAGRAPH_MD_P3]:i.P,[n.PARAGRAPH_MD_P4]:i.P,[n.PARAGRAPH_MD_C1]:i.CODE,[n.PARAGRAPH_MD_L1]:i.LABEL,[n.PARAGRAPH_MD_L2]:i.LABEL,[n.OVERLINE_SB_OL1]:i.P,[n.OVERLINE_SB_OL2]:i.P,[n.ACTION_SB_P1]:i.SPAN,[n.ACTION_SB_P2]:i.SPAN,[n.ACTION_SB_LK1]:i.SPAN},s=t.styled.p.attrs(e=>({as:e.as||"p"}))`
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
`,o=({variant:e="paragraph-md-p1",as:t="auto",color:n="var(--text-emphasis-primary-default, #16191d)",textAlign:a=null,textTransform:o=null,fontSize:c=null,children:u="",className:p="",title:f=null})=>{let d=t===i.AUTO?l[e]:t;return r.default.createElement(s,{$variant:e,as:d,$color:n,$textAlign:a,$textTransform:o,$fontSize:c,className:p,title:f},u)};e.s(["Typography_default",0,o],968081),e.s(["default",0,o],703109)},830249,e=>{"use strict";var t=e.i(271645);e.s(["useParentUrl",0,function(){let[e,r]=(0,t.useState)("");return(0,t.useEffect)(()=>{function e(e){let t=e.data;t&&"object"==typeof t&&"PARENT_URL"===t.type&&"string"==typeof t.url&&r(t.url)}return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]),e}])},397681,e=>{"use strict";var t=e.i(893347),r=e.i(773892),n=e.i(364072),i=e.i(189101),a=e.i(824511),l=e.i(88653),s=e.i(271645),o=e.i(997053),c=(0,o.styled)(a.m.div)`
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
`,u=o.styled.div`
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
`,v=o.styled.div`
    width: 100%;
    position: relative;

    img {
        width: 100%;
        border-radius: var(--corner-radius-8px, 8px);
    }
`,m={slide:{variants:{hidden:{opacity:0,y:-50},visible:{opacity:1,y:0},exit:{opacity:0,y:50}},transition:{duration:.3}},"slide-reverse":{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0},exit:{opacity:0,y:-50}},transition:{duration:.3}},fade:{variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},transition:{duration:.3}},emanate:{}},x=(0,s.forwardRef)(({width:e,height:t,minHeight:r,minWidth:n,maxHeight:i,maxWidth:a,mobileBottomFullWidth:l,modalPadding:o,border:u,children:p,...f},d)=>s.default.createElement(c,{ref:d,$width:e,$height:t,$minHeight:r,$minWidth:n,$maxHeight:i,$maxWidth:a,$mobileBottomFullWidth:l,$modalPadding:o,$border:u,...f},p)),_=(0,s.forwardRef)(({justifyContent:e,children:t},r)=>s.default.createElement(g,{ref:r,$justifyContent:e},t)),A=(0,s.forwardRef)(({overflow:e,children:t,...r},n)=>s.default.createElement(u,{ref:n,$overflow:e,...r},t)),w=(0,s.forwardRef)(({children:e,...t},r)=>s.default.createElement(v,{ref:r,...t},e)),P=(0,s.forwardRef)(({children:e,...t},r)=>s.default.createElement(f,{ref:r,...t},e)),b=(0,s.forwardRef)(({children:e,...t},r)=>s.default.createElement(d,{ref:r,...t},e)),y=(0,s.forwardRef)(({modalBodyMargin:e,children:t,...r},n)=>s.default.createElement(h,{ref:n,$modalBodyMargin:e,...r},t)),R=(0,s.forwardRef)(({...e},t)=>s.default.createElement(p,{ref:t,...e})),E=(0,s.forwardRef)((e,a)=>{let{isOpen:o=!0,banner:p=null,title:x=null,description:_=null,body:A=null,action:w=null,height:P="auto",width:b="500px",minHeight:y=null,minWidth:R=null,maxHeight:E="95vh",maxWidth:S="95vw",onHide:C=()=>{},onClose:B=()=>{},mobileBottomFullWidth:D=!1,modalPadding:L="20px",border:k="1px solid var(--border-subtle-primary-default, #e1e5ea)",modalBodyMargin:N=null,showCloseButton:j=!1,hideOnClickAway:H=!1,blurBackground:z=!1,animatePresence:O="fade",clickEvent:I=null,children:M=null,shouldFocusOnFirstElement:$=!0,shouldDisableScroll:G=!0,overflow:T="visible",className:U}=e,F=(0,s.useRef)(null),K=()=>{"function"==typeof C&&C(),"function"==typeof B&&B()};(0,s.useImperativeHandle)(a,()=>F.current),(0,r.useDisableBodyScroll_default)(o),(0,r.useKeyboardEvent_default)({onKeyPress:()=>{H&&K()},keyCodes:["Escape"],config:{shouldDetect:o}});let V=(0,s.useId)(),Y=(0,s.useMemo)(()=>{var e,t;return e=O,t=I,"emanate"===e?"number"==typeof(null==t?void 0:t.clientX)&&"number"==typeof(null==t?void 0:t.clientY)?((e,t)=>{let r,n;try{r=e-window.innerWidth/2,n=t-window.innerHeight/2}catch(e){r=0,n=0}return{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{scale:0,opacity:0,x:r,y:n},visible:{scale:1,opacity:1,x:0,y:0},exit:{scale:0,opacity:0,x:r,y:n}},transition:{duration:.3}}})(t.clientX,t.clientY):{}:{initial:"hidden",animate:"visible",exit:"exit",...e?m[e]:{}}},[O,I]),q=(0,s.useMemo)(()=>(({isOpen:e,animatePresence:t,clickEvent:r})=>!!e&&("emanate"!==t||"number"==typeof(null==r?void 0:r.clientX)&&"number"==typeof(null==r?void 0:r.clientY)))({isOpen:o,animatePresence:O,clickEvent:I}),[o,O,I]);return s.default.createElement(n.motion_default,null,s.default.createElement(l.AnimatePresence,null,q&&s.default.createElement(t.Overlay_default,{shouldDisableScroll:G,onOverlayClick:()=>{H&&K()},shouldTintOverlay:!0,shouldBlurOverlay:z,shouldCenterContent:!0,"data-testid":"testid-modalwrapper",className:U,animationDuration:.3,shouldFocusOnFirstElement:$},s.default.createElement(c,{onClick:e=>e.stopPropagation(),ref:F,$width:b,$height:P,$minHeight:y,$minWidth:R,$maxHeight:E,$maxWidth:S,$mobileBottomFullWidth:D,$modalPadding:L,$border:k,"aria-labelledby":`modal-title-${V}`,"aria-describedby":`modal-description-${V}`,"aria-modal":"true",role:"dialog","data-testid":"testid-modal",...Y},s.default.createElement(u,{$overflow:T},j&&s.default.createElement(g,{$justifyContent:"end"},s.default.createElement(i.IconButton_default,{onClick:K,size:"small",variant:"tertiary",color:"neutral",icon:"close",ariaLabel:"Close",buttonProps:{autoFocus:!0}})),p&&s.default.createElement(v,null,p),x&&s.default.createElement(f,{id:`modal-title-${V}`},x),_&&s.default.createElement(d,{id:`modal-description-${V}`},_),A&&s.default.createElement(h,{$modalBodyMargin:N},A),M&&s.default.createElement(h,{$modalBodyMargin:N},M)),w&&s.default.createElement(g,null,w)))))});E.Modal=x,E.Main=A,E.Banner=w,E.Title=P,E.Description=b,E.Body=y,E.Action=_,E.Divider=R,e.s(["NSModal",0,E],397681)},914984,e=>{"use strict";var t=e.i(843476);e.s(["ArrowRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M5 12h14m0 0-6-6m6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronLeftIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m15 6-6 6 6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"ChevronRightIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"m9 6 6 6-6 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"CloseIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M6 6l12 12M18 6 6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"RadioUncheckedIcon",0,function({className:e}){return(0,t.jsx)("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":!0,focusable:"false",className:e,children:(0,t.jsx)("path",{d:"M10 1.66667C5.4 1.66667 1.66667 5.4 1.66667 10C1.66667 14.6 5.4 18.3333 10 18.3333C14.6 18.3333 18.3333 14.6 18.3333 10C18.3333 5.4 14.6 1.66667 10 1.66667ZM10 16.6667C6.31667 16.6667 3.33333 13.6833 3.33333 10C3.33333 6.31667 6.31667 3.33333 10 3.33333C13.6833 3.33333 16.6667 6.31667 16.6667 10C16.6667 13.6833 13.6833 16.6667 10 16.6667Z",fill:"currentColor"})})},"SparkIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M12 2c.45 4.2 2.3 6.05 6.5 6.5-4.2.45-6.05 2.3-6.5 6.5-.45-4.2-2.3-6.05-6.5-6.5C9.7 8.05 11.55 6.2 12 2z"})})},"YouTubePlayIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 68 48",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("path",{d:"M66.5 7.5a8.5 8.5 0 0 0-6-6C55.2 0 34 0 34 0S12.8 0 7.5 1.5a8.5 8.5 0 0 0-6 6A89 89 0 0 0 0 24a89 89 0 0 0 1.5 16.5 8.5 8.5 0 0 0 6 6C12.8 48 34 48 34 48s21.2 0 26.5-1.5a8.5 8.5 0 0 0 6-6A89 89 0 0 0 68 24a89 89 0 0 0-1.5-16.5z",fill:"#FF0000"}),(0,t.jsx)("path",{d:"M27.2 34.29 44.85 24 27.2 13.71v20.58z",fill:"#fff"})]})}])},680395,e=>{"use strict";let t="ns_rcb_unlock_v2";function r(){let e=function(e,t){try{let r=e().getItem(t);if(!r)return null;return JSON.parse(r)}catch{return null}}(()=>window.sessionStorage,t);if(!e||1!==e.v||!e.profile)return null;let r=e.profile;return"string"==typeof r.fullName&&"string"==typeof r.phone&&r.fullName.trim()&&10===r.phone.replace(/\D/g,"").length?{fullName:r.fullName,phone:r.phone,email:"string"==typeof r.email?r.email:"",whatsapp:!!r.whatsapp,qualifierAnswers:r.qualifierAnswers&&"object"==typeof r.qualifierAnswers?r.qualifierAnswers:{},savedAt:"number"==typeof r.savedAt?r.savedAt:0}:null}e.s(["DEFAULT_RCB_QUALIFIER_KEYS",0,["highest_qualification","graduation_year"],"isLeadUnlocked",0,function(){return null!==r()},"mergeUnlockProfile",0,function(e){let n=r();!function(e,t,r){try{e().setItem(t,JSON.stringify(r))}catch{return!1}}(()=>window.sessionStorage,t,{v:1,profile:{fullName:e.fullName,phone:e.phone,email:e.email,whatsapp:e.whatsapp,qualifierAnswers:{...n?.qualifierAnswers,...e.qualifierAnswers},savedAt:Date.now()}})},"normalizeQualifierValue",0,function(e){return e.replace(/[\u200B\u200C\u200D\u2060\uFEFF]/g,"").trim()},"readUnlockProfile",0,r])},356105,527341,e=>{"use strict";var t=e.i(271645),r=e.i(336835);let n="multi_step_rcb_form_partial_fill_hash";function i(e){try{return window.localStorage.getItem(e)??""}catch{return""}}function a(e,t){try{window.localStorage.setItem(e,t)}catch{}}function l(e){try{window.localStorage.removeItem(e)}catch{}}e.s(["usePartialRcb",0,function(e){let s=e?.resumeStoredHash??!0,o=e?.filedScope?"multi_step_rcb_form_filed_hash:"+e.filedScope:"",c=(0,t.useRef)(o);c.current=o;let u=(0,t.useRef)(!1),p=(0,t.useRef)(e?.onHash);p.current=e?.onHash;let f=(0,t.useRef)(e?.hashSource);f.current=e?.hashSource;let d=(0,t.useRef)(""),h=(0,t.useRef)(""),g=(0,t.useRef)(Promise.resolve());return(0,t.useEffect)(()=>{if(!s)return;let e=c.current?i(c.current):"";e?(d.current=e,u.current=!0):d.current=i(n)},[]),{save:(0,t.useCallback)((e,t=!1,{updateLsq:i=!1,keepHash:o=!1}={})=>{let v=async()=>{let g;if(!t&&!(e.fullName.trim()||e.phone.trim()||e.email.trim()||Object.values(e.qualifiers).some(Boolean))||!t&&!i&&u.current)return{ok:!0};let v=JSON.stringify({input:e,updateLsq:i});return t||v!==h.current?((h.current=v,!d.current&&f.current&&(d.current=f.current()),d.current)?g=await (0,r.updateRcb)(d.current,e,t,i):(g=await (0,r.createRcb)(e,t,i)).ok&&g.hash&&(d.current=g.hash,p.current?.(g.hash),s&&a(n,g.hash)),g.ok||h.current!==v||(h.current=""),g.ok&&s&&(t||i)&&(l(n),c.current&&(o&&!t?a(c.current,d.current):l(c.current))),{ok:g.ok,error:g.error}):(i&&!o&&s&&(l(n),c.current&&l(c.current)),{ok:!0})},m=g.current.then(v,v);return g.current=m.catch(()=>{}),m},[s])}}],356105);var s=e.i(680395),o=e.i(58863);let c=/^[a-z ,.'-]+$/i,u=/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;e.s(["buildRcbInput",0,function(e){return{fullName:e.name,phone:e.phone,email:e.email,qualifiers:e.answers,whatsapp:e.whatsapp,from:e.from,parentUrl:e.parentUrl,nextUrl:e.nextUrl,utmParams:(0,o.getUtmParams)(),responseType:e.responseType,formVariant:e.formVariant,...e.extraLeadFields?{extraLeadFields:e.extraLeadFields}:{}}},"flattenRcbSteps",0,function(e){return e.flatMap(e=>e.questions)},"rcbContactErrorMessage",0,function(e,t){switch(e){case"name":return t.trim()?"Full Name can only contain alphabets":"Full Name is Required";case"phone":return t?"Invalid Phone Number":"Phone Number is Required";case"email":return t.trim()?"Enter a valid email address":"Email is Required"}},"rcbContactErrors",0,function({name:e,phone:t,email:r},{requireEmail:n}){return{name:0===e.trim().length||!c.test(e.trim()),phone:10!==t.replace(/\D/g,"").length,email:!!n&&!u.test(r.trim())}},"seedAnswers",0,function(e,t){if(!e)return{};let r={};for(let n of t){let t=e.qualifierAnswers[n.key];if(!t)continue;let i=n.items.find(e=>(0,s.normalizeQualifierValue)(e.value)===(0,s.normalizeQualifierValue)(t));i&&(r[n.key]=i.value)}return r}],527341)},409954,e=>{"use strict";var t=e.i(843476);e.i(914984),e.s(["ArrowDownIcon",0,function(e){return(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:(0,t.jsx)("path",{d:"M12 4v16m0 0-6-6m6 6 6-6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},"CalendarIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("rect",{x:"3.5",y:"5",width:"17",height:"15",rx:"2",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"M3.5 9.5h17M8 3.5v3M16 3.5v3",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]})},"CheckCircleIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"m8.5 12.4 2.5 2.5L16 9.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})},"ClockIcon",0,function(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"8.25",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"M12 7.5V12l3 2",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})]})}])},961523,e=>{"use strict";e.i(409954),e.s([])},195057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return o}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a=e.r(190809)._(e.r(998183)),l=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,n=e.protocol||"",i=e.pathname||"",s=e.hash||"",o=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),o&&"object"==typeof o&&(o=String(a.urlQueryToSearchParams(o)));let u=e.search||o&&`?${o}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||l.test(n))&&!1!==c?(c="//"+(c||""),i&&"/"!==i[0]&&(i="/"+i)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),u&&"?"!==u[0]&&(u="?"+u),i=i.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${n}${c}${i}${u}${s}`}let o=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},573668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return a}});let n=e.r(718967),i=e.r(652817);function a(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,i.hasBasePath)(r.pathname)}catch(e){return!1}}},284508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},522016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return m},useLinkStatus:function(){return _}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let a=e.r(190809),l=e.r(843476),s=a._(e.r(271645)),o=e.r(195057),c=e.r(8372),u=e.r(818581),p=e.r(718967),f=e.r(405550);e.r(233525);let d=e.r(388540),h=e.r(91949),g=e.r(573668),v=e.r(509396);function m(t){var r,n;let i,a,m,[_,A]=(0,s.useOptimistic)(h.IDLE_LINK_STATUS),w=(0,s.useRef)(null),{href:P,as:b,children:y,prefetch:R=null,passHref:E,replace:S,shallow:C,scroll:B,onClick:D,onMouseEnter:L,onTouchStart:k,legacyBehavior:N=!1,onNavigate:j,transitionTypes:H,ref:z,unstable_dynamicOnHover:O,...I}=t;i=y,N&&("string"==typeof i||"number"==typeof i)&&(i=(0,l.jsx)("a",{children:i}));let M=s.default.useContext(c.AppRouterContext),$=!1!==R,G=!1!==R?null===(n=R)||"auto"===n?v.FetchStrategy.PPR:v.FetchStrategy.Full:v.FetchStrategy.PPR,T="string"==typeof(r=b||P)?r:(0,o.formatUrl)(r);if(N){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=s.default.Children.only(i)}let U=N?a&&"object"==typeof a&&a.ref:z,F=s.default.useCallback(e=>(null!==M&&(w.current=(0,h.mountLinkInstance)(e,T,M,G,$,A)),()=>{w.current&&((0,h.unmountLinkForCurrentNavigation)(w.current),w.current=null),(0,h.unmountPrefetchableInstance)(e)}),[$,T,M,G,A]),K={ref:(0,u.useMergedRef)(F,U),onClick(t){N||"function"!=typeof D||D(t),N&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),!M||t.defaultPrevented||function(t,r,n,i,a,l,o){if("u">typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(r)){i&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(699781);s.default.startTransition(()=>{p(r,i?"replace":"push",!1===a?d.ScrollBehavior.NoScroll:d.ScrollBehavior.Default,n.current,o)})}}(t,T,w,S,B,j,H)},onMouseEnter(e){N||"function"!=typeof L||L(e),N&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),M&&$&&(0,h.onNavigationIntent)(e.currentTarget,!0===O)},onTouchStart:function(e){N||"function"!=typeof k||k(e),N&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),M&&$&&(0,h.onNavigationIntent)(e.currentTarget,!0===O)}};return(0,p.isAbsoluteUrl)(T)?K.href=T:N&&!E&&("a"!==a.type||"href"in a.props)||(K.href=(0,f.addBasePath)(T)),m=N?s.default.cloneElement(a,K):(0,l.jsx)("a",{...I,...K,children:i}),(0,l.jsx)(x.Provider,{value:_,children:m})}e.r(284508);let x=(0,s.createContext)(h.IDLE_LINK_STATUS),_=()=>(0,s.useContext)(x);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},674895,e=>{"use strict";var t=e.i(688921);let r=t.EVENT_TYPE.CLICK,n="/data-science-brochure",i={BROCHURE_GATE:"blur-cta-rcb",STICKY_SECURE:"Urgency_Seat_Prospect"},a={PAGE_LOAD:{eventType:t.EVENT_TYPE.PAGE_LOAD,eventName:"page_view"},BROCHURE_GATE_CLICK:{eventType:r,eventName:"blur-cta-rcb"},STICKY_SECURE_CLICK:{eventType:r,eventName:"Urgency_Seat_Prospect"},MODAL_OPEN:{eventType:r,eventName:"dsb_modal_open"},MODAL_CLOSE:{eventType:r,eventName:"dsb_modal_close"}},l={[i.BROCHURE_GATE]:a.BROCHURE_GATE_CLICK,[i.STICKY_SECURE]:a.STICKY_SECURE_CLICK};e.s(["DSB_EVENTS",0,a,"DSB_PAGE_NAME",0,n,"FROM",0,i,"FROM_EVENT",0,l,"buildEventData",0,function(e={}){return(0,t.buildEventData)(e,n)},"fireLivePageGtag",0,function(e){(0,t.fireLivePageGtag)({...e,pageName:n})}])},981580,e=>{"use strict";var t=e.i(271645),r=e.i(851361),n=e.i(674895);e.s(["PageViewTracker",0,function(){let e=(0,r.useSendAnalyticsEvent)();return(0,t.useEffect)(()=>{e({...n.DSB_EVENTS.PAGE_LOAD,eventData:(0,n.buildEventData)()}),(0,n.fireLivePageGtag)({eventType:n.DSB_EVENTS.PAGE_LOAD.eventType,eventName:n.DSB_EVENTS.PAGE_LOAD.eventName})},[]),null}])},699771,e=>{"use strict";var t=e.i(843476),r=e.i(271645),n=e.i(397681),i=e.i(549838),a=e.i(914984),l=e.i(85842),s=e.i(680395),o=e.i(851361),c=e.i(674895),u=e.i(703109);e.i(961523);var p=e.i(409954);function f(){return(0,t.jsxs)("div",{className:"flex flex-col items-center gap-3 px-2 py-8 text-center",children:[(0,t.jsx)(p.CheckCircleIcon,{className:"text-ds-green size-12"}),(0,t.jsx)(u.default,{as:"p",variant:"paragraph-sb-p1",color:"var(--color-ds-ink)",children:"Request Successful"}),(0,t.jsx)(u.default,{as:"p",variant:"paragraph-md-p3",color:"var(--color-ds-muted)",className:"max-w-xs",children:"Thanks for reaching out! Our team will get in touch with you shortly."})]})}var d=e.i(756903);e.s(["RcbModalProvider",0,function({children:e}){let[u,p]=(0,r.useState)(null),[h,g]=(0,r.useState)(void 0),v=(0,r.useRef)(null),m=(0,o.useSendAnalyticsEvent)(),x=(0,r.useCallback)(e=>{v.current=document.activeElement??null;let t=c.FROM_EVENT[e.from],r=(0,c.buildEventData)({from:e.from,heading:e.heading,mode:"rcb"});t&&(m({...t,eventData:r}),(0,c.fireLivePageGtag)({eventName:t.eventName,from:e.from})),m({...c.DSB_EVENTS.MODAL_OPEN,eventData:r}),g((e.mode??"rcb")==="signup"?void 0:(0,s.readUnlockProfile)()??void 0),p(e)},[m]),_=(0,r.useCallback)(()=>{p(e=>(e&&m({...c.DSB_EVENTS.MODAL_CLOSE,eventData:(0,c.buildEventData)({from:e.from,heading:e.heading})}),null)),g(void 0),v.current?.focus?.()},[m]),A=(0,r.useMemo)(()=>({open:x,isCtaModalOpen:null!==u,counsellingPopupOpen:!1,setCounsellingPopupOpen:()=>{}}),[x,u]);return(0,t.jsxs)(d.RcbModalContext.Provider,{value:A,children:[e,(0,t.jsx)(n.NSModal,{isOpen:null!==u,onClose:_,hideOnClickAway:!0,showCloseButton:!1,width:"420px",border:"none",animatePresence:"fade",overflow:"hidden",modalPadding:"0",children:u&&(0,t.jsxs)("div",{className:"relative",style:{textAlign:"left"},children:[(0,t.jsx)("button",{type:"button",onClick:_,"aria-label":"Close",className:(0,i.cn)("text-ds-muted hover:bg-ds-surface absolute top-2 right-2 z-10 flex size-9 cursor-pointer items-center justify-center rounded-full"),children:(0,t.jsx)(a.CloseIcon,{className:"size-5"})}),(0,t.jsx)(l.RcbForm,{from:u.from,heading:u.heading??"Request a callback",nextUrl:u.nextUrl,brochure:u.brochure,prefill:h,autoSubmit:!!h,successSlot:(0,t.jsx)(f,{}),pageName:c.DSB_PAGE_NAME})]})})]})}],699771)},119741,e=>{"use strict";var t=e.i(843476);e.i(699771);var r=e.i(756903);e.s(["ModalOpenButton",0,function({cta:e,className:n,children:i,id:a,"aria-label":l}){let{open:s}=(0,r.useRcbModal)();return(0,t.jsx)("button",{type:"button",id:a,"data-from":e.from,"aria-label":l,onClick:()=>s(e),className:n,children:i})}])},884595,e=>{"use strict";var t=e.i(699771),r=e.i(756903);e.s(["RcbModalProvider",()=>t.RcbModalProvider,"useRcbModal",()=>r.useRcbModal])},880300,e=>{"use strict";var t=e.i(843476);e.i(699771);var r=e.i(756903),n=e.i(674895);e.s(["StickyBanner",0,function(){let{open:e}=(0,r.useRcbModal)();return(0,t.jsx)("div",{className:"fixed inset-x-0 bottom-0 z-[900] block bg-[#0673f9] py-2 text-white",children:(0,t.jsxs)("div",{className:"mx-auto flex w-full flex-col items-center justify-center gap-2 px-[5%] min-[480px]:flex-row min-[480px]:gap-0 min-[480px]:px-0",children:[(0,t.jsx)("div",{className:"mt-2 flex items-center min-[480px]:mt-0 min-[480px]:mr-6",children:(0,t.jsx)("span",{className:"text-center text-[16px] leading-[1.8] font-semibold min-[480px]:text-[14px]",children:"🚨 Last 2 Scholarship Seats Left"})}),(0,t.jsx)("button",{id:"brochure-page-secure-your-seat-now",type:"button","data-from":n.FROM.STICKY_SECURE,onClick:()=>e({label:"Secure Your Seat Now",from:n.FROM.STICKY_SECURE,mode:"rcb",heading:"Secure Your Seat Now"}),className:"w-full rounded-[8px] bg-white px-4 py-2 text-center text-[14px] leading-[1.6] font-semibold tracking-[0.4px] text-[#16191d] transition-colors hover:bg-white/90 min-[480px]:w-auto min-[480px]:py-1.5",children:"Secure Your Seat Now"})]})})}])},511604,e=>{e.v(t=>Promise.all(["static/chunks/2-et_hho2aqvl.js"].map(t=>e.l(t))).then(()=>t(164436)))},896615,e=>{e.v(t=>Promise.all(["static/chunks/3klltxhcaam25.js"].map(t=>e.l(t))).then(()=>t(980954)))},401485,e=>{e.v(t=>Promise.all(["static/chunks/3363k0g8j073u.js","static/chunks/2n-gidy722xtj.js"].map(t=>e.l(t))).then(()=>t(873987)))},179909,e=>{e.v(t=>Promise.all(["static/chunks/41kj1t47-_n25.js"].map(t=>e.l(t))).then(()=>t(285692)))},628574,e=>{e.v(t=>Promise.all(["static/chunks/2qirsm4ul044n.js"].map(t=>e.l(t))).then(()=>t(218568)))},490258,e=>{e.v(t=>Promise.all(["static/chunks/2s87rp7nfrl4_.js"].map(t=>e.l(t))).then(()=>t(322465)))},15086,e=>{e.v(t=>Promise.all(["static/chunks/36smk6w2al07x.js"].map(t=>e.l(t))).then(()=>t(269275)))},134362,e=>{e.v(t=>Promise.all(["static/chunks/24_vd97z020im.js"].map(t=>e.l(t))).then(()=>t(57400)))},278533,e=>{e.v(t=>Promise.all(["static/chunks/2dsmc-m5l6-0x.js"].map(t=>e.l(t))).then(()=>t(906322)))}]);