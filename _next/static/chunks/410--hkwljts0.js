(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,703109,968081,e=>{"use strict";var t=e.i(997053),a=e.i(271645),i={DISPLAY_BD_D1:"display-bd-d1",DISPLAY_BD_D2:"display-bd-d2",DISPLAY_BD_D3:"display-bd-d3",HEADING_SB_H1:"heading-sb-h1",HEADING_SB_H2:"heading-sb-h2",HEADING_SB_H3:"heading-sb-h3",HEADING_SB_H4:"heading-sb-h4",HEADING_SB_H5:"heading-sb-h5",HEADING_SB_H6:"heading-sb-h6",PARAGRAPH_SB_P1:"paragraph-sb-p1",PARAGRAPH_SB_P2:"paragraph-sb-p2",PARAGRAPH_SB_P3:"paragraph-sb-p3",PARAGRAPH_SB_P4:"paragraph-sb-p4",PARAGRAPH_SB_L1:"paragraph-sb-l1",PARAGRAPH_SB_L2:"paragraph-sb-l2",PARAGRAPH_MD_P1:"paragraph-md-p1",PARAGRAPH_MD_P2:"paragraph-md-p2",PARAGRAPH_MD_P3:"paragraph-md-p3",PARAGRAPH_MD_P4:"paragraph-md-p4",PARAGRAPH_MD_C1:"paragraph-md-c1",PARAGRAPH_MD_L1:"paragraph-md-l1",PARAGRAPH_MD_L2:"paragraph-md-l2",OVERLINE_SB_OL1:"overline-sb-ol1",OVERLINE_SB_OL2:"overline-sb-ol2",ACTION_SB_P1:"action-sb-p1",ACTION_SB_P2:"action-sb-p2",ACTION_SB_LK1:"action-sb-lk1"};Object.freeze(Object.values(i));var n={H1:"h1",H2:"h2",H3:"h3",H4:"h4",H5:"h5",H6:"h6",P:"p",SPAN:"span",DIV:"div",LABEL:"label",CAPTION:"caption",CODE:"code",AUTO:"auto"};Object.freeze(Object.values(n));var r={[i.DISPLAY_BD_D1]:t.css`
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
    `},s={[i.DISPLAY_BD_D1]:n.H1,[i.DISPLAY_BD_D2]:n.H2,[i.DISPLAY_BD_D3]:n.H3,[i.HEADING_SB_H1]:n.H1,[i.HEADING_SB_H2]:n.H2,[i.HEADING_SB_H3]:n.H3,[i.HEADING_SB_H4]:n.H4,[i.HEADING_SB_H5]:n.H5,[i.HEADING_SB_H6]:n.H6,[i.PARAGRAPH_SB_P1]:n.P,[i.PARAGRAPH_SB_P2]:n.P,[i.PARAGRAPH_SB_P3]:n.P,[i.PARAGRAPH_SB_P4]:n.P,[i.PARAGRAPH_SB_L1]:n.LABEL,[i.PARAGRAPH_SB_L2]:n.LABEL,[i.PARAGRAPH_MD_P1]:n.P,[i.PARAGRAPH_MD_P2]:n.P,[i.PARAGRAPH_MD_P3]:n.P,[i.PARAGRAPH_MD_P4]:n.P,[i.PARAGRAPH_MD_C1]:n.CODE,[i.PARAGRAPH_MD_L1]:n.LABEL,[i.PARAGRAPH_MD_L2]:n.LABEL,[i.OVERLINE_SB_OL1]:n.P,[i.OVERLINE_SB_OL2]:n.P,[i.ACTION_SB_P1]:n.SPAN,[i.ACTION_SB_P2]:n.SPAN,[i.ACTION_SB_LK1]:n.SPAN},l=t.styled.p.attrs(e=>({as:e.as||"p"}))`
    margin: 0;
    padding: 0;

    font-family: var(--font-family, 'Mona Sans');
    color: var(--text-emphasis-primary-default, #16191d);

    ${({$variant:e})=>t.css`
            ${e?r[e]:r[i.PARAGRAPH_MD_P1]}
        `};

    ${({$textAlign:e})=>e&&`text-align: ${e};`}
    ${({$textTransform:e})=>e&&`text-transform: ${e};`}
    ${({$fontSize:e})=>e&&`font-size: ${e};`}
    ${({$color:e})=>e&&`color: ${e};`};
`,o=({variant:e="paragraph-md-p1",as:t="auto",color:i="var(--text-emphasis-primary-default, #16191d)",textAlign:r=null,textTransform:o=null,fontSize:d=null,children:p="",className:c="",title:h=null})=>{let f=t===n.AUTO?s[e]:t;return a.default.createElement(l,{$variant:e,as:f,$color:i,$textAlign:r,$textTransform:o,$fontSize:d,className:c,title:h},p)};e.s(["Typography_default",0,o],968081),e.s(["default",0,o],703109)},830249,e=>{"use strict";var t=e.i(271645);e.s(["useParentUrl",0,function(){let[e,a]=(0,t.useState)("");return(0,t.useEffect)(()=>{function e(e){let t=e.data;t&&"object"==typeof t&&"PARENT_URL"===t.type&&"string"==typeof t.url&&a(t.url)}return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]),e}])},397681,e=>{"use strict";var t=e.i(893347),a=e.i(773892),i=e.i(364072),n=e.i(189101),r=e.i(824511),s=e.i(88653),l=e.i(271645),o=e.i(997053),d=(0,o.styled)(r.m.div)`
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
`,m=o.styled.div`
    width: 100%;
    position: relative;

    img {
        width: 100%;
        border-radius: var(--corner-radius-8px, 8px);
    }
`,x={slide:{variants:{hidden:{opacity:0,y:-50},visible:{opacity:1,y:0},exit:{opacity:0,y:50}},transition:{duration:.3}},"slide-reverse":{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0},exit:{opacity:0,y:-50}},transition:{duration:.3}},fade:{variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},transition:{duration:.3}},emanate:{}},v=(0,l.forwardRef)(({width:e,height:t,minHeight:a,minWidth:i,maxHeight:n,maxWidth:r,mobileBottomFullWidth:s,modalPadding:o,border:p,children:c,...h},f)=>l.default.createElement(d,{ref:f,$width:e,$height:t,$minHeight:a,$minWidth:i,$maxHeight:n,$maxWidth:r,$mobileBottomFullWidth:s,$modalPadding:o,$border:p,...h},c)),_=(0,l.forwardRef)(({justifyContent:e,children:t},a)=>l.default.createElement(g,{ref:a,$justifyContent:e},t)),P=(0,l.forwardRef)(({overflow:e,children:t,...a},i)=>l.default.createElement(p,{ref:i,$overflow:e,...a},t)),w=(0,l.forwardRef)(({children:e,...t},a)=>l.default.createElement(m,{ref:a,...t},e)),A=(0,l.forwardRef)(({children:e,...t},a)=>l.default.createElement(h,{ref:a,...t},e)),y=(0,l.forwardRef)(({children:e,...t},a)=>l.default.createElement(f,{ref:a,...t},e)),b=(0,l.forwardRef)(({modalBodyMargin:e,children:t,...a},i)=>l.default.createElement(u,{ref:i,$modalBodyMargin:e,...a},t)),E=(0,l.forwardRef)(({...e},t)=>l.default.createElement(c,{ref:t,...e})),R=(0,l.forwardRef)((e,r)=>{let{isOpen:o=!0,banner:c=null,title:v=null,description:_=null,body:P=null,action:w=null,height:A="auto",width:y="500px",minHeight:b=null,minWidth:E=null,maxHeight:R="95vh",maxWidth:S="95vw",onHide:D=()=>{},onClose:H=()=>{},mobileBottomFullWidth:L=!1,modalPadding:N="20px",border:I="1px solid var(--border-subtle-primary-default, #e1e5ea)",modalBodyMargin:B=null,showCloseButton:z=!1,hideOnClickAway:$=!1,blurBackground:k=!1,animatePresence:O="fade",clickEvent:C=null,children:G=null,shouldFocusOnFirstElement:T=!0,shouldDisableScroll:j=!0,overflow:M="visible",className:F}=e,Y=(0,l.useRef)(null),U=()=>{"function"==typeof D&&D(),"function"==typeof H&&H()};(0,l.useImperativeHandle)(r,()=>Y.current),(0,a.useDisableBodyScroll_default)(o),(0,a.useKeyboardEvent_default)({onKeyPress:()=>{$&&U()},keyCodes:["Escape"],config:{shouldDetect:o}});let W=(0,l.useId)(),V=(0,l.useMemo)(()=>{var e,t;return e=O,t=C,"emanate"===e?"number"==typeof(null==t?void 0:t.clientX)&&"number"==typeof(null==t?void 0:t.clientY)?((e,t)=>{let a,i;try{a=e-window.innerWidth/2,i=t-window.innerHeight/2}catch(e){a=0,i=0}return{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{scale:0,opacity:0,x:a,y:i},visible:{scale:1,opacity:1,x:0,y:0},exit:{scale:0,opacity:0,x:a,y:i}},transition:{duration:.3}}})(t.clientX,t.clientY):{}:{initial:"hidden",animate:"visible",exit:"exit",...e?x[e]:{}}},[O,C]),K=(0,l.useMemo)(()=>(({isOpen:e,animatePresence:t,clickEvent:a})=>!!e&&("emanate"!==t||"number"==typeof(null==a?void 0:a.clientX)&&"number"==typeof(null==a?void 0:a.clientY)))({isOpen:o,animatePresence:O,clickEvent:C}),[o,O,C]);return l.default.createElement(i.motion_default,null,l.default.createElement(s.AnimatePresence,null,K&&l.default.createElement(t.Overlay_default,{shouldDisableScroll:j,onOverlayClick:()=>{$&&U()},shouldTintOverlay:!0,shouldBlurOverlay:k,shouldCenterContent:!0,"data-testid":"testid-modalwrapper",className:F,animationDuration:.3,shouldFocusOnFirstElement:T},l.default.createElement(d,{onClick:e=>e.stopPropagation(),ref:Y,$width:y,$height:A,$minHeight:b,$minWidth:E,$maxHeight:R,$maxWidth:S,$mobileBottomFullWidth:L,$modalPadding:N,$border:I,"aria-labelledby":`modal-title-${W}`,"aria-describedby":`modal-description-${W}`,"aria-modal":"true",role:"dialog","data-testid":"testid-modal",...V},l.default.createElement(p,{$overflow:M},z&&l.default.createElement(g,{$justifyContent:"end"},l.default.createElement(n.IconButton_default,{onClick:U,size:"small",variant:"tertiary",color:"neutral",icon:"close",ariaLabel:"Close",buttonProps:{autoFocus:!0}})),c&&l.default.createElement(m,null,c),v&&l.default.createElement(h,{id:`modal-title-${W}`},v),_&&l.default.createElement(f,{id:`modal-description-${W}`},_),P&&l.default.createElement(u,{$modalBodyMargin:B},P),G&&l.default.createElement(u,{$modalBodyMargin:B},G)),w&&l.default.createElement(g,null,w)))))});R.Modal=v,R.Main=P,R.Banner=w,R.Title=A,R.Description=y,R.Body=b,R.Action=_,R.Divider=E,e.s(["NSModal",0,R],397681)},844850,e=>{"use strict";var t=e.i(271645);e.s(["useFieldStartTracker",0,function(e,a,i){let n=(0,t.useRef)(a);n.current=a;let r=(0,t.useRef)(i);r.current=i;let s=(0,t.useRef)(new Set);return(0,t.useMemo)(()=>({started(t,a){if(s.current.has(t)||void 0!==a&&""===a.trim())return;let i=n.current.indexOf(t);-1!==i&&(s.current.add(t),r.current({form_type:e,field_name:t,step_number:String(i+1)}))},reset(){s.current.clear()}}),[e])}])},620855,197043,e=>{"use strict";var t=e.i(271645),a=e.i(862085);let i="ns-recaptcha-v3",n=null;function r(e){return window.grecaptcha?Promise.resolve():n||(n=new Promise(t=>{let a=document.getElementById(i);if(a)return void a.addEventListener("load",()=>t());let n=document.createElement("script");n.id=i,n.async=!0,n.src=`https://www.google.com/recaptcha/api.js?render=${e}`,n.addEventListener("load",()=>t()),n.addEventListener("error",()=>t()),document.body.appendChild(n)}))}e.s(["useRecaptcha",0,function(){let e=a.NEWTON_SIGNUP_CONFIG.recaptchaSiteKey;return{preload:(0,t.useCallback)(()=>{r(e)},[e]),getToken:(0,t.useCallback)(async(t="homepage")=>{await r(e);let a=window.grecaptcha;return a?new Promise(i=>{let n=!1,r=e=>{n||(n=!0,clearTimeout(s),i(e))},s=setTimeout(()=>r(""),4e3);a.ready(()=>{a.execute(e,{action:t}).then(e=>r(e)).catch(()=>r(""))})}):""},[e])}}],620855);var s=e.i(336835);let l="generic_signup_form_partial_fill_hash";function o(){try{return window.localStorage.getItem(l)??""}catch{return""}}e.s(["usePartialSignup",0,function(){let e=(0,t.useRef)(""),a=(0,t.useRef)(""),i=(0,t.useRef)(Promise.resolve());return(0,t.useEffect)(()=>{e.current=o()},[]),{save:(0,t.useCallback)((t,n={})=>{let{completed:r=!1,accessToken:d}=n,p=async()=>{let i=JSON.stringify({f:t.fields,p:t.phone});if(!r&&i===a.current||!r&&0===Object.keys(t.fields).length&&!t.phone)return{ok:!0};a.current=i,e.current||(e.current=o());let n=await (0,s.saveSignupPartial)(t,{hash:e.current,completed:r,accessToken:d});if(n.ok&&n.hash){e.current=n.hash;var p=n.hash;try{window.localStorage.setItem(l,p)}catch{}}return r&&n.ok&&function(){try{window.localStorage.removeItem(l)}catch{}}(),{ok:n.ok}},c=i.current.then(p,p);return i.current=c.catch(()=>{}),c},[])}}],197043)},437082,e=>{"use strict";let t={name:"name",email:"email",phone:"phone",otp:"otp",whatsapp:"send_whatsapp_updates",graduationYear:"graduationYear",college:"college",currentClass:"current_class",codingExperience:"coding_experience",twelfthPercentage:"twelfthPercentage"},a={fields:[{type:"text",name:t.name,label:"Full Name",placeholder:"Your Name",autoComplete:"name",required:!0},{type:"email",name:t.email,label:"Email",placeholder:"Enter Email",autoComplete:"email",required:!0},{type:"phone",name:t.phone,label:"Phone Number",placeholder:"Enter Phone Number",autoComplete:"tel",required:!0},{type:"otp",name:t.otp,label:"OTP",length:4,step:"verify",required:!0},{type:"checkbox",name:t.whatsapp,label:"Send me updates on WhatsApp"}]};e.s(["APPLY_FIELD",0,t,"DEFAULT_SIGNUP_FIELDS",0,a])},692156,e=>{"use strict";var t=e.i(843476),a=e.i(271645),i=e.i(339415),n=e.i(703109),r=e.i(549838),s=e.i(22453),l=e.i(620855),o=e.i(830249),d=e.i(197043),p=e.i(336835),c=e.i(58863),h=e.i(437082),f=e.i(42872),u=e.i(3303),g=e.i(862085);function m({courseType:e,armed:a,onArm:i}){if(!a)return(0,t.jsxs)("button",{type:"button",onClick:i,className:"flex h-10 w-full items-center justify-center gap-2 rounded border border-[#dadce0] bg-white text-sm font-medium text-[#3c4043] transition-colors hover:bg-[#f8f9fa]",children:[(0,t.jsx)(x,{}),"Sign up with Google"]});let{djangoClientId:n,djangoClientSecret:r,googleClientId:l}=g.NEWTON_SIGNUP_CONFIG,o=`${s.SIGNUP_API.registerUrl}?ns_client_id=${n}&ns_client_secret=${r}&backend=google-auth`,d=btoa(JSON.stringify({redirect_uri:`/register/${e}`}));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.default,{src:"https://accounts.google.com/gsi/client",async:!0,defer:!0}),(0,t.jsx)("div",{id:"g_id_onload","data-client_id":l,"data-context":"signup","data-ux_mode":"redirect","data-auto_prompt":"false","data-login_uri":o,"data-state":d}),(0,t.jsx)("div",{className:"g_id_signin flex h-10 w-full justify-center","data-type":"standard","data-shape":"rectangular","data-theme":"outline","data-text":"signup_with","data-size":"large","data-logo_alignment":"left"})]})}function x(){return(0,t.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18","aria-hidden":"true",children:[(0,t.jsx)("path",{fill:"#4285F4",d:"M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.91c1.7-1.57 2.69-3.88 2.69-6.62Z"}),(0,t.jsx)("path",{fill:"#34A853",d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.91-2.26c-.81.54-1.84.86-3.05.86-2.34 0-4.33-1.58-5.04-3.71H.96v2.33A9 9 0 0 0 9 18Z"}),(0,t.jsx)("path",{fill:"#FBBC05",d:"M3.96 10.71A5.41 5.41 0 0 1 3.68 9c0-.6.1-1.18.28-1.71V4.96H.96A9 9 0 0 0 0 9c0 1.45.35 2.83.96 4.04l3-2.33Z"}),(0,t.jsx)("path",{fill:"#EA4335",d:"M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.96l3 2.33C4.67 5.16 6.66 3.58 9 3.58Z"})]})}var v=e.i(851361),_=e.i(688921),P=e.i(844850);let w=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,A={"--color-ds-ink":"#f6f7f9","--color-ds-muted":"#b2b9c7","--color-ds-tertiary":"#30363d","--color-ds-border":"#30363d"};function y(e){let t=(0,c.getUtmParams)();for(let[a,i]of Object.entries(e??{}))a in t||(t[a]=i);return t}function b(e){return e.name===h.APPLY_FIELD.name?"full_name":e.name}function E(){return(0,t.jsxs)(n.default,{as:"p",variant:"paragraph-md-p4",color:"var(--color-ds-muted)",className:"text-center",children:["By continuing, you agree to our"," ",(0,t.jsx)("a",{href:s.EXTERNAL_LINKS.termsAndConditions,target:"_blank",rel:"noopener noreferrer",className:"text-ds-blue underline",children:"Terms & Conditions"})," ","for sign-up"]})}function R(e){return(0,t.jsxs)("svg",{viewBox:"0 0 24 24",fill:"none","aria-hidden":!0,...e,children:[(0,t.jsx)("circle",{cx:"12",cy:"12",r:"9",stroke:"currentColor",strokeWidth:"1.6"}),(0,t.jsx)("path",{d:"m8.5 12.4 2.5 2.5L16 9.5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})}e.s(["ApplyForm",0,function({config:e,courseType:s,urlSlug:u,title:g,subTitle:x,className:S,recaptchaAction:D="homepage",hasGoogleSignup:H=!1,nextUrl:L,applyFormSuccessRedirectUrl:N,selfRedirectUrl:I,parentUrl:B,utmDefaults:z,leadFields:$,pageName:k,surface:O,theme:C="light",otpOnWhatsApp:G=!1}){let T="dark"===C,{preload:j,getToken:M}=(0,l.useRecaptcha)(),F=(0,v.useSendAnalyticsEvent)(),Y=O?{surface:O}:{},U=(e,t={})=>F({...e,eventData:(0,_.buildEventData)({courseType:s,urlSlug:u,...Y,...t},k)}),W=(0,a.useMemo)(()=>{let t={};for(let a of e.fields)t[a.name]="checkbox"===a.type?"true":a.defaultValue??"";return t},[e]),[V,K]=(0,a.useState)(W),[q,X]=(0,a.useState)({}),[Z,J]=(0,a.useState)("details"),[Q,ee]=(0,a.useState)(!1),[et,ea]=(0,a.useState)(!0),[ei,en]=(0,a.useState)(""),[er,es]=(0,a.useState)(!1),[el,eo]=(0,a.useState)(""),[ed,ep]=(0,a.useState)(0),[ec,eh]=(0,a.useState)(!1),ef=(0,a.useCallback)(()=>eh(!0),[]),eu=e.fields.some(e=>"needs12thYear"===e.showWhen),eg=(0,a.useMemo)(()=>e.fields.filter(e=>(e.step??"details")==="details"&&!e.showWhen).map(b),[e]),em=(0,P.useFieldStartTracker)("signup",eg,e=>U(_.FORM_FIELD_EVENTS.FIELD_STARTED,{...e})),ex=(t,a)=>{if(K(e=>({...e,[t]:a})),"details"!==Z)return;let i=e.fields.some(e=>e.name===t&&"checkbox"===e.type);em.started(b({name:t}),i?void 0:a)};function ev(t){return e.fields.filter(e=>{let a=e.step??"details";return"details"===t?"details"===a:"verify"===t?"verify"===a&&"needs12thYear"!==e.showWhen:"twelfth"===t&&"needs12thYear"===e.showWhen})}function e_(){return e.fields.filter(e=>"needs12thYear"!==e.showWhen&&("newUser"!==e.showWhen||!Q)&&("details"===(e.step??"details")||"verify"===Z))}function eP(e){let t={};for(let a of e){let e=(V[a.name]??"").trim();if("checkbox"!==a.type)if(a.name===h.APPLY_FIELD.name&&e.length<2)t[a.name]="Please enter your name";else if("email"!==a.type||w.test(e))if("phone"===a.type&&10!==e.replace(/\D/g,"").length)t[a.name]="Enter a valid 10-digit number";else if("otp"===a.type&&e.length!==(a.length??4))t[a.name]="Enter the OTP";else if("number"===a.type&&e){let i=Number(e);Number.isNaN(i)||null!=a.min&&i<a.min||null!=a.max&&i>a.max?t[a.name]="Enter a valid value":a.required&&!e&&(t[a.name]="Required")}else a.required&&!e&&(t[a.name]="Required");else t[a.name]="Enter a valid email address"}return t}(0,a.useEffect)(()=>{if(ed<=0)return;let e=setTimeout(()=>ep(e=>e-1),1e3);return()=>clearTimeout(e)},[ed]);let ew=(V[h.APPLY_FIELD.phone]??"").replace(/\D/g,""),eA=(V[h.APPLY_FIELD.whatsapp]??"")==="true",ey=(V[h.APPLY_FIELD.name]??"").trim().split(" ")[0]??"",eb=(0,o.useParentUrl)()||B||"",{save:eE}=(0,d.usePartialSignup)(),eR=(0,a.useCallback)((t,a=!1)=>{let i=function(e,t){let a={};for(let i of e.fields){if(i.name===h.APPLY_FIELD.phone)continue;let e=t[i.name]??"";"checkbox"===i.type?a[i.name]="true"===e:""!==e&&(a[i.name]=e)}return a}(e,t);return{fields:$?$(i,{completed:a}):i,phone:(t[h.APPLY_FIELD.phone]??"").replace(/\D/g,""),urlSlug:u,parentUrl:eb,utmParams:y(z)}},[e,u,eb,z,$]),eS=(0,a.useCallback)((t,a)=>{"details"!==Z&&"verify"!==Z||eE(eR(e.fields.some(e=>e.name===t&&e.savesBeforeChange)?V:{...V,[t]:a}))},[Z,eE,eR,V,e]),eD=0===Object.keys(eP(e_())).length;async function eH(){eo(""),es(!0);try{let e=await M(D),t=await (0,p.sendOtp)({phone:ew,recaptchaToken:e,whatsapp:G});t.ok?(ee(t.existingUser),ea(!!t.existingUser&&!0===t.twelfthPassingYearFilled),J("verify"),ep(30),U(_.SIGNUP_FORM_EVENTS.OTP_SENT,{existingUser:t.existingUser})):(t.throttled&&ep(30),eo(t.error??"Could not send the OTP. Please try again."))}catch{eo("Could not send the OTP. Please try again.")}finally{es(!1)}}async function eL(e){e.preventDefault(),eo("");let t=eP(e_());if(X(t),Object.keys(t).length||er)return;U(_.SIGNUP_FORM_EVENTS.FORM_SUBMIT_CLICK,{existingUser:Q}),es(!0);let a=await (0,p.registerOrLogin)({phone:ew,otp:V[h.APPLY_FIELD.otp]??"",name:V[h.APPLY_FIELD.name]??"",email:V[h.APPLY_FIELD.email]??"",whatsapp:eA,existingUser:Q,utmParams:y(z),courseType:s,urlSlug:u,graduationYear:V[h.APPLY_FIELD.graduationYear]||void 0,college:V[h.APPLY_FIELD.college]||void 0,currentClass:V[h.APPLY_FIELD.currentClass]||void 0,codingExperience:V[h.APPLY_FIELD.codingExperience]||void 0});a.ok&&a.accessToken?((0,c.setAuthCookie)("access_token_ns_student_web",a.accessToken),a.refreshToken&&(0,c.setAuthCookie)("refresh_token_ns_student_web",a.refreshToken),eE(eR(V,!0),{completed:!0,accessToken:a.accessToken}),U(_.SIGNUP_FORM_EVENTS.FORM_SUBMIT_SUCCESS,{existingUser:Q}),eu&&!et?(en(a.accessToken),J("twelfth"),es(!1)):eI()):(es(!1),eo(a.error??"Could not verify the OTP. Please try again."),U(_.SIGNUP_FORM_EVENTS.FORM_SUBMIT_FAILURE,{error:a.error??""}))}async function eN(e){e.preventDefault();let t=eP(ev("twelfth"));if(X(t),Object.keys(t).length||er)return;es(!0);let a=await (0,p.updateProfile)({twelfthPassingYear:V[h.APPLY_FIELD.twelfthPercentage]??"",accessToken:ei});a.ok?eI():(es(!1),eo(a.error??"Could not save your details. Please try again."))}function eI(){J("done"),L?window.open(L,"_blank","noopener,noreferrer"):I?window.setTimeout(()=>{window.location.href=(0,c.appendUtmParams)(I)},1500):window.setTimeout(()=>{window.location.href=(0,c.buildRegisterRedirect)(s,u,N)},1500)}let eB=(0,a.useCallback)(e=>{"key"in e&&"Escape"===e.key||(j(),H&&ef())},[j,H,ef]),ez=(0,t.jsx)("span",{className:"ds-phone-prefix text-ds-ink inline-flex w-14 shrink-0 items-center justify-center text-sm font-medium whitespace-nowrap",children:"🇮🇳 +91"}),e$=e=>e.map(e=>(0,t.jsx)(f.FormField,{field:e,value:V[e.name]??"",error:q[e.name],onChange:ex,onCommit:eS,phoneAdornment:ez,phoneEndAdornment:"phone"===e.type&&"verify"===Z?(0,t.jsx)("button",{type:"button",disabled:er||ed>0,onClick:()=>void eH(),className:"bg-ds-blue rounded px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white disabled:opacity-50",children:"Resend OTP"}):void 0},e.name));return(0,t.jsxs)("div",{className:(0,r.cn)("apply-form flex flex-col",T&&"grauity-theme-dark",S),style:T?A:void 0,children:[(0,t.jsxs)("div",{className:"pb-4 text-center",children:[(0,t.jsx)(n.default,{as:"p",variant:"paragraph-sb-p2",color:"var(--color-ds-ink)",children:g}),x?(0,t.jsx)(n.default,{as:"p",variant:"paragraph-md-p3",color:"var(--color-ds-muted)",className:"mt-1",children:x}):null]}),("details"===Z||"verify"===Z)&&(0,t.jsxs)("form",{className:"flex flex-col gap-4 pt-5",onSubmit:"details"===Z?function(e){e.preventDefault();let t=eP(e_());X(t),Object.keys(t).length||er||(U(_.SIGNUP_FORM_EVENTS.SEND_OTP_CLICK,{form_type:"signup",step_number:String(eg.length+1),...Y}),eH())}:eL,onPointerDownCapture:eB,onKeyDownCapture:eB,noValidate:!0,children:[H&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m,{courseType:s,armed:ec,onArm:ef}),(0,t.jsxs)("div",{className:"text-ds-muted flex items-center gap-3 text-xs",children:[(0,t.jsx)("span",{className:"bg-ds-tertiary h-px flex-1"}),"OR",(0,t.jsx)("span",{className:"bg-ds-tertiary h-px flex-1"})]})]}),e$(e_()),"verify"===Z?(0,t.jsxs)(n.default,{as:"p",variant:"paragraph-sb-p3",color:"var(--color-ds-ink)",children:["Didn't receive the code?"," ",(0,t.jsx)("button",{type:"button",disabled:er||ed>0,onClick:()=>void eH(),className:"text-ds-blue font-semibold enabled:hover:underline disabled:cursor-not-allowed",children:ed>0?`Resend OTP in ${ed} seconds`:"Resend OTP"})]}):null,el?(0,t.jsx)(n.default,{as:"p",variant:"paragraph-md-p3",color:"#d22d3a",children:el}):null,(0,t.jsx)(i.default,{type:"submit",variant:"primary",size:"large",fullWidth:!0,loading:er,disabled:!eD,children:"details"===Z?"Send OTP":Q?"Login":"Verify & Sign Up"}),(0,t.jsx)(E,{})]}),"twelfth"===Z&&(0,t.jsxs)("form",{className:"flex flex-col gap-5 pt-5",onSubmit:eN,children:[e$(ev("twelfth")),el?(0,t.jsx)(n.default,{as:"p",variant:"paragraph-md-p3",color:"#d22d3a",children:el}):null,(0,t.jsx)(i.default,{type:"submit",variant:"primary",size:"large",fullWidth:!0,loading:er,children:"Continue"})]}),"done"===Z&&(0,t.jsxs)("div",{className:"flex flex-col items-center gap-3 py-10 text-center",children:[(0,t.jsx)(R,{className:"text-ds-green size-12"}),(0,t.jsx)(n.default,{as:"p",variant:"paragraph-sb-p1",color:"var(--color-ds-ink)",children:"You're all set!"}),L?(0,t.jsxs)(n.default,{as:"p",variant:"paragraph-md-p3",color:"var(--color-ds-muted)",className:"max-w-xs",children:["Your download has opened in a new tab."," ",(0,t.jsx)("a",{href:L,target:"_blank",rel:"noopener noreferrer",className:"text-ds-blue font-semibold underline",children:"Didn't open? Download here"})]}):(0,t.jsxs)(n.default,{as:"p",variant:"paragraph-md-p3",color:"var(--color-ds-muted)",className:"max-w-xs",children:["Thanks",ey?`, ${ey}`:"","!"," ",I?"Taking you to the next step…":"Redirecting you to complete your enrolment…"]})]})]})}],692156)}]);