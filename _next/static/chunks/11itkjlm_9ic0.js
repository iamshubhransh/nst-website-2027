(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,397681,e=>{"use strict";var t=e.i(893347),i=e.i(773892),a=e.i(364072),n=e.i(189101),l=e.i(824511),r=e.i(88653),d=e.i(271645),o=e.i(997053),s=(0,o.styled)(l.m.div)`
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
`,m=o.styled.div`
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
`;var x=o.styled.div`
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
`,v={slide:{variants:{hidden:{opacity:0,y:-50},visible:{opacity:1,y:0},exit:{opacity:0,y:50}},transition:{duration:.3}},"slide-reverse":{variants:{hidden:{opacity:0,y:50},visible:{opacity:1,y:0},exit:{opacity:0,y:-50}},transition:{duration:.3}},fade:{variants:{hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},transition:{duration:.3}},emanate:{}},y=(0,d.forwardRef)(({width:e,height:t,minHeight:i,minWidth:a,maxHeight:n,maxWidth:l,mobileBottomFullWidth:r,modalPadding:o,border:p,children:c,...u},m)=>d.default.createElement(s,{ref:m,$width:e,$height:t,$minHeight:i,$minWidth:a,$maxHeight:n,$maxWidth:l,$mobileBottomFullWidth:r,$modalPadding:o,$border:p,...u},c)),g=(0,d.forwardRef)(({justifyContent:e,children:t},i)=>d.default.createElement(x,{ref:i,$justifyContent:e},t)),b=(0,d.forwardRef)(({overflow:e,children:t,...i},a)=>d.default.createElement(p,{ref:a,$overflow:e,...i},t)),w=(0,d.forwardRef)(({children:e,...t},i)=>d.default.createElement(h,{ref:i,...t},e)),$=(0,d.forwardRef)(({children:e,...t},i)=>d.default.createElement(u,{ref:i,...t},e)),E=(0,d.forwardRef)(({children:e,...t},i)=>d.default.createElement(m,{ref:i,...t},e)),P=(0,d.forwardRef)(({modalBodyMargin:e,children:t,...i},a)=>d.default.createElement(f,{ref:a,$modalBodyMargin:e,...i},t)),C=(0,d.forwardRef)(({...e},t)=>d.default.createElement(c,{ref:t,...e})),z=(0,d.forwardRef)((e,l)=>{let{isOpen:o=!0,banner:c=null,title:y=null,description:g=null,body:b=null,action:w=null,height:$="auto",width:E="500px",minHeight:P=null,minWidth:C=null,maxHeight:z="95vh",maxWidth:j="95vw",onHide:B=()=>{},onClose:N=()=>{},mobileBottomFullWidth:R=!1,modalPadding:k="20px",border:A="1px solid var(--border-subtle-primary-default, #e1e5ea)",modalBodyMargin:T=null,showCloseButton:O=!1,hideOnClickAway:D=!1,blurBackground:L=!1,animatePresence:M="fade",clickEvent:_=null,children:F=null,shouldFocusOnFirstElement:I=!0,shouldDisableScroll:W=!0,overflow:Y="visible",className:H}=e,S=(0,d.useRef)(null),q=()=>{"function"==typeof B&&B(),"function"==typeof N&&N()};(0,d.useImperativeHandle)(l,()=>S.current),(0,i.useDisableBodyScroll_default)(o),(0,i.useKeyboardEvent_default)({onKeyPress:()=>{D&&q()},keyCodes:["Escape"],config:{shouldDetect:o}});let K=(0,d.useId)(),U=(0,d.useMemo)(()=>{var e,t;return e=M,t=_,"emanate"===e?"number"==typeof(null==t?void 0:t.clientX)&&"number"==typeof(null==t?void 0:t.clientY)?((e,t)=>{let i,a;try{i=e-window.innerWidth/2,a=t-window.innerHeight/2}catch(e){i=0,a=0}return{initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{scale:0,opacity:0,x:i,y:a},visible:{scale:1,opacity:1,x:0,y:0},exit:{scale:0,opacity:0,x:i,y:a}},transition:{duration:.3}}})(t.clientX,t.clientY):{}:{initial:"hidden",animate:"visible",exit:"exit",...e?v[e]:{}}},[M,_]),X=(0,d.useMemo)(()=>(({isOpen:e,animatePresence:t,clickEvent:i})=>!!e&&("emanate"!==t||"number"==typeof(null==i?void 0:i.clientX)&&"number"==typeof(null==i?void 0:i.clientY)))({isOpen:o,animatePresence:M,clickEvent:_}),[o,M,_]);return d.default.createElement(a.motion_default,null,d.default.createElement(r.AnimatePresence,null,X&&d.default.createElement(t.Overlay_default,{shouldDisableScroll:W,onOverlayClick:()=>{D&&q()},shouldTintOverlay:!0,shouldBlurOverlay:L,shouldCenterContent:!0,"data-testid":"testid-modalwrapper",className:H,animationDuration:.3,shouldFocusOnFirstElement:I},d.default.createElement(s,{onClick:e=>e.stopPropagation(),ref:S,$width:E,$height:$,$minHeight:P,$minWidth:C,$maxHeight:z,$maxWidth:j,$mobileBottomFullWidth:R,$modalPadding:k,$border:A,"aria-labelledby":`modal-title-${K}`,"aria-describedby":`modal-description-${K}`,"aria-modal":"true",role:"dialog","data-testid":"testid-modal",...U},d.default.createElement(p,{$overflow:Y},O&&d.default.createElement(x,{$justifyContent:"end"},d.default.createElement(n.IconButton_default,{onClick:q,size:"small",variant:"tertiary",color:"neutral",icon:"close",ariaLabel:"Close",buttonProps:{autoFocus:!0}})),c&&d.default.createElement(h,null,c),y&&d.default.createElement(u,{id:`modal-title-${K}`},y),g&&d.default.createElement(m,{id:`modal-description-${K}`},g),b&&d.default.createElement(f,{$modalBodyMargin:T},b),F&&d.default.createElement(f,{$modalBodyMargin:T},F)),w&&d.default.createElement(x,null,w)))))});z.Modal=y,z.Main=b,z.Banner=w,z.Title=$,z.Description=E,z.Body=P,z.Action=g,z.Divider=C,e.s(["NSModal",0,z],397681)},178141,e=>{"use strict";var t=e.i(843476),i=e.i(397681),a=e.i(692156),n=e.i(648198),l=e.i(437082);let r={fields:[{type:"text",name:l.APPLY_FIELD.name,label:"Name",placeholder:"Enter Name",autoComplete:"name",required:!0},{type:"email",name:l.APPLY_FIELD.email,label:"Email",placeholder:"Enter Email",autoComplete:"email",required:!0},{type:"phone",name:l.APPLY_FIELD.phone,label:"Phone Number",placeholder:"Enter Phone Number",autoComplete:"tel",required:!0},{type:"otp",name:l.APPLY_FIELD.otp,label:"OTP",length:4,step:"verify",required:!0}]};e.s(["default",0,function({isOpen:e,onClose:l,pageName:d}){return(0,t.jsx)(i.NSModal,{isOpen:e,onClose:l,hideOnClickAway:!0,showCloseButton:!1,width:"420px",border:"none",animatePresence:"fade",overflow:"hidden",modalPadding:"0",children:e&&(0,t.jsxs)("div",{className:"grauity-portal-font font-ds relative text-left",children:[(0,t.jsx)("button",{type:"button",onClick:l,"aria-label":"Close",className:"absolute right-2 top-2 z-10 flex size-9 cursor-pointer items-center justify-center rounded-full text-[#5b6470] hover:bg-[#f6f7f9] focus-visible:outline-2 focus-visible:outline-[#0673f9]",children:(0,t.jsx)(n.CloseIcon,{className:"size-5"})}),(0,t.jsx)("div",{className:"max-h-[90svh] overflow-y-auto overflow-x-hidden p-5",children:(0,t.jsx)(a.ApplyForm,{title:"Get Started Today",subTitle:"4-Year Undergraduate Tech Programs",courseType:"btech-computer-science",urlSlug:"nst-website",config:r,otpOnWhatsApp:!0,pageName:d,className:"w-full"})})]})})}],178141)}]);