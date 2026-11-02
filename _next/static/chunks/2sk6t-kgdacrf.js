(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,808341,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={cancelIdleCallback:function(){return i},requestIdleCallback:function(){return a}};for(var s in o)Object.defineProperty(n,s,{enumerable:!0,get:o[s]});let a="u">typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},i="u">typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},519083,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={ESCAPE_REGEX:function(){return i},htmlEscapeAttributeString:function(){return p},htmlEscapeJsonString:function(){return l}};for(var s in o)Object.defineProperty(n,s,{enumerable:!0,get:o[s]});let a={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},i=/[&><\u2028\u2029]/g,r={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"},c=/[&"'<>]/g;function l(e){return e.replace(i,e=>a[e])}function p(e){return e.replace(c,e=>r[e])}},479520,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={default:function(){return A},handleClientScriptLoad:function(){return w},initScriptLoader:function(){return _}};for(var s in o)Object.defineProperty(n,s,{enumerable:!0,get:o[s]});let a=e.r(555682),i=e.r(190809),r=e.r(843476),c=a._(e.r(174080)),l=i._(e.r(271645)),p=e.r(742732),h=e.r(922737),f=e.r(808341),u=e.r(519083),d=new Map,g=new Set,m=e=>{let{src:t,id:n,onLoad:o=()=>{},onReady:s=null,dangerouslySetInnerHTML:a,children:i="",strategy:r="afterInteractive",onError:l,stylesheets:p}=e,f=n||t;if(f&&g.has(f))return;if(d.has(t)){g.add(f),d.get(t).then(o,l);return}let u=()=>{s&&s(),g.add(f)},m=document.createElement("script"),w=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),o&&o.call(this,t),u()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){l&&l(e)});a?(m.innerHTML=a.__html||"",u()):i?(m.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",u()):t&&(m.src=t,d.set(t,w)),(0,h.setAttributesFromProps)(m,e),"worker"===r&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",r),p&&(e=>{if(c.default.preinit)return e.forEach(e=>{c.default.preinit(e,{as:"style"})});if("u">typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}})(p),document.body.appendChild(m)};function w(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,f.requestIdleCallback)(()=>m(e))}):m(e)}function _(e){e.forEach(w),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");g.add(t)})}function v(e){let{id:t,src:n="",onLoad:o=()=>{},onReady:s=null,strategy:a="afterInteractive",onError:i,stylesheets:h,...d}=e,{updateScripts:w,scripts:_,getIsSsr:v,appDir:A,nonce:y}=(0,l.useContext)(p.HeadManagerContext);y=d.nonce||y;let P=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||n;P.current||(s&&e&&g.has(e)&&s(),P.current=!0)},[s,t,n]);let b=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{if(!b.current){if("afterInteractive"===a)m(e);else"lazyOnload"===a&&("complete"===document.readyState?(0,f.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,f.requestIdleCallback)(()=>m(e))}));b.current=!0}},[e,a]),("beforeInteractive"===a||"worker"===a)&&(w?(_[a]=(_[a]||[]).concat([{id:t,src:n,onLoad:o,onReady:s,onError:i,...d,nonce:y}]),w(_)):v&&v()?g.add(t||n):v&&!v()&&m({...e,nonce:y})),A){if(h&&h.forEach(e=>{c.default.preinit(e,{as:"style"})}),"beforeInteractive"===a)if(!n)return d.dangerouslySetInnerHTML&&(d.children=d.dangerouslySetInnerHTML.__html,delete d.dangerouslySetInnerHTML),(0,r.jsx)("script",{nonce:y,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${(0,u.htmlEscapeJsonString)(JSON.stringify([0,{...d,id:t}]))})`}});else return c.default.preload(n,d.integrity?{as:"script",integrity:d.integrity,nonce:y,crossOrigin:d.crossOrigin}:{as:"script",nonce:y,crossOrigin:d.crossOrigin}),(0,r.jsx)("script",{nonce:y,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${(0,u.htmlEscapeJsonString)(JSON.stringify([n,{...d,id:t}]))})`}});"afterInteractive"===a&&n&&c.default.preload(n,d.integrity?{as:"script",integrity:d.integrity,nonce:y,crossOrigin:d.crossOrigin}:{as:"script",nonce:y,crossOrigin:d.crossOrigin})}return null}Object.defineProperty(v,"__nextScript",{value:!0});let A=v;("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},3303,(e,t,n)=>{t.exports=e.r(479520)},143865,e=>{"use strict";let t={gaId:"G-C6R4CQW223",gaSecondaryIds:"G-VMLZFNXE2B,G-T7Q53JXFY6".split(",").map(e=>e.trim()).filter(Boolean),gaEagerSecondaryIds:"G-T7Q53JXFY6".split(",").map(e=>e.trim()).filter(Boolean),gaAdsId:"AW-726728923",openpanelId:"80fff4e7-b255-4baf-b4ce-3c4744811cb3",openpanelApiHost:"https://openpanel-api.newtonschool.co",googleAnalyticsApiHost:"https://magicwand.newtonschool.co",wildcardDomain:".newtonschool.co",buildEnv:"production"};e.s(["ANALYTICS_CONFIG",0,t])},725526,e=>{"use strict";var t=e.i(271645);let n=["pointerdown","keydown","touchstart"];e.s(["useDeferUntilInteraction",0,function(){let[e,o]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{if(e)return;let t=()=>o(!0);for(let e of n)window.addEventListener(e,t,{once:!0,passive:!0,capture:!0});return()=>{for(let e of n)window.removeEventListener(e,t,{capture:!0})}},[e]),e}])},862830,e=>{"use strict";var t=e.i(843476),n=e.i(3303),o=e.i(725526);e.s(["MetaPixel",0,function({pixelIds:e,gateOnInteraction:s=!1}){let a=(0,o.useDeferUntilInteraction)();if(!e.length)return null;let i=e.map(e=>`fbq('init', '${e}');`).join("\n          ");return(0,t.jsxs)(t.Fragment,{children:[(!s||a)&&(0,t.jsx)(n.default,{id:"meta-pixel",strategy:s?"afterInteractive":"lazyOnload",dangerouslySetInnerHTML:{__html:`
          !function(f,b,e,v,n,t,s){
            if(f.fbq)return;
            n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
            t=b.createElement(e);t.async=!0;t.src=v;
            s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s);
          }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          ${i}
          fbq('track', 'PageView');
          `}}),(0,t.jsx)("noscript",{children:e.map(e=>(0,t.jsx)("img",{height:"1",width:"1",style:{display:"none"},src:`https://www.facebook.com/tr?id=${e}&ev=PageView&noscript=1`,alt:"","aria-hidden":"true"},e))})]})}])},22453,e=>{"use strict";e.s(["COOKIE_DOMAIN",0,".newtonschool.co","EXTERNAL_LINKS",0,{signIn:"https://my.newtonschool.co/login",nsatTimeline:"https://my.newtonschool.co/nsat/timeline",codingNsatTimeline:"https://my.newtonschool.co/coding-nsat/timeline",applyNow:"https://my.newtonschool.co/apply",newtonAccessRegister:"https://my.newtonschool.co/register/newton-access-pap",newtonAccessResume:"https://my.newtonschool.co/course/l9z45el37nul/timeline",requestCallbackDataScience:"https://university.newtonschool.co/v1/request-a-callback-progressive-v2?heading=Request+A+Callback&from=request_callback_v2&utm_ab_test_cohort=variant_2&utm_referer=data-science-performance-page-30-may",hireFromUsLeadForm:"https://university.newtonschool.co/v1/request-a-callback-hire-from-us?utm_referer=hire-from-us",nstHireFromUsLeadForm:"https://university.newtonschool.co/v1/request-a-callback-nst",dataScienceBrochurePdf:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/30fce1cb6e54469996ce2e2d9dcf9cea-newton-school-data-science-program-brochure.pdf",fullStackBrochurePdf:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/d932bea66f5f40b696a9d8c4bfdd3413.pdf",fullStackMasterclassRegisterUrl:"https://my.newtonschool.co/events/full-stack-development-master-class/upcoming-class",advancedFullStackRegisterUrl:"https://my.newtonschool.co/register/full-stack-developer-course?utm_source=ns_homepage&utm_medium=fsd_course_page_new&utm_campaign=website_organic&utm_namespace=certification-full-stack-development&utm_hash=ns_m7o0ljwmh3dh",xcelerateBrochurePdf:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/d932bea66f5f40b696a9d8c4bfdd3413.pdf",gydrPayNowForm:"https://university.newtonschool.co/s/get-your-doubts-resolved-pay-now",gydrBrochureForm:"https://university.newtonschool.co/s/download-brochure-nst",masterclassSignupForm:"https://university.newtonschool.co/s/generative-ai-masterclass-signup",masterclassTerms:"https://my.newtonschool.co/terms-and-conditions",masterclassWhatsApp:"https://wa.link/ixi86m",masterclassAgenticAiCourse:"https://www.newtonschool.co/agentic-ai-course",masterclassJoinCohortWhatsApp:"https://chat.whatsapp.com/ITFumkSyTMi93DdojhC7rn",agenticSignupForm:"https://university.newtonschool.co/s/agentic-ai-course-signup",agenticRcbForm:"https://university.newtonschool.co/v1/request-a-callback-progressive-v2-agentic",agenticTerms:"https://www.newtonschool.co/data-science-terms-and-conditions",agenticGeneralistAnnouncementBanner:"https://www.newtonschool.co/agentic-ai-course?utm_source=newton-school-platform-banner&utm_medium=generalist&utm_campaign=website&utm_namespace=newton-school-main-website&utm_term=header&utm_hash=ns_ql9ebfu4q9j2",aiEngineeringSignupForm:"https://university.newtonschool.co/s/agentic-ai-course-signup",aiEngineeringRcbForm:"https://university.newtonschool.co/v1/request-a-callback-progressive-v2-agentic-course",aiEngineeringTerms:"https://www.newtonschool.co/data-science-terms-and-conditions",upcomingClassChatgptSignup:"https://university.newtonschool.co/s/learn-sql-for-data-science-from-basics-v2",upcomingClassPowerBiSignup:"https://university.newtonschool.co/s/try-and-buy-ai-courses",upcomingClassPowerBiCallback:"https://university.newtonschool.co/v1/request-a-callback-ds-v2?from=tnb_request_a_callback&shouldShowBorder=false&heading=Request%20Callback",upcomingClassTerms:"https://www.newtonschool.co/data-science-terms-and-conditions",offeringsMasterclass:"https://my.newtonschool.co/events/data-science-open-master-class/upcoming-class",offeringsAiMockInterview:"https://my.newtonschool.co/elevate-ai-mock-interview",offeringsFreeCourses:"https://my.newtonschool.co/free-courses",jeeAdvancedRankPredictor:"https://my.newtonschool.co/jee-college-predictor-by-iit-roorkee-alumni-and-nst-students/jee-advanced-rank-predictor?utm_source=newton_school_web&utm_medium=jee_advanced_marks_vs_rank&utm_campaign=jeeadvanced_marks_vs_rank&utm_namespace=jee_advanced_rank_predictor&utm_hash=ns_rqpfyggoi7gt",jeeAdvancedRankPredictorResult:"https://my.newtonschool.co/jee-college-predictor-by-iit-roorkee-alumni-and-nst-students/jee-advanced-rank-predictor/result",jeeMainRankPredictorMarksVsPercentile:"https://my.newtonschool.co/jee-college-predictor-by-iit-roorkee-alumni-and-nst-students/jee-main-rank-predictor?utm_source=ns_blogs&utm_medium=blog_marks_vs_percentile&utm_campaign=blog_marks_vs_percentile_p&utm_namespace=nst-jee-early-rank-predictor&utm_hash=ns_qnvjxi9e20ss",jeeMainRankPredictorCutoff:"https://my.newtonschool.co/jee-college-predictor-by-iit-roorkee-alumni-and-nst-students/jee-main-rank-predictor?utm_source=ns_blogs&utm_medium=jee_cutoff_blog&utm_campaign=jee_cutoff_blog_p&utm_namespace=nst-jee-early-rank-predictor&utm_hash=ns_yjkbrr9hgkaz",jeeMainRankPredictorResult:"https://my.newtonschool.co/jee-college-predictor-by-iit-roorkee-alumni-and-nst-students/jee-main-rank-predictor/result",jeeMainCollegePredictor:"https://my.newtonschool.co/jee-college-predictor-by-iit-roorkee-alumni-and-nst-students/early-jee-rank-and-college-predictor",nstNsatPrepKitPdf:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/76e03b11a8404840a70e85ff90052f0b.pdf",dataScienceReviews:"https://www.newtonschool.co/courses/data-science-reviews-ns",dsv2AiResumeEvaluator:"https://my.newtonschool.co/ai-resume-evaluator",dsv2TechOpenings:"https://my.newtonschool.co/tech-openings",dsv2TrialPlatformCourse:"https://my.newtonschool.co/course/14kqx5w2qvdc/details?activityTypeTab=all",dataScienceMasterclassRegisterUrl:"https://my.newtonschool.co/events/data-science-open-master-class/upcoming-class?utm_source=ns_homepage&utm_medium=gfr_mc&utm_campaign=intiatives_mc&utm_namespace=certification-data-science&utm_term=masterclass&utm_hash=ns_tdf6rgvnlc20",termsAndConditions:"/terms-and-conditions",codebuddyTerms:"https://my.newtonschool.co/terms-and-conditions",counsellorPhone:"tel:+917619328498",counsellorWhatsApp:"https://api.whatsapp.com/send?phone=919972616057&text=Hi%20NewtonSchool%20Team!%20I%20have%20questions%20about%20Data%20Science%20Programme",homepageWhatsApp:"https://api.whatsapp.com/send?phone=919972616057&text=Hey%20Newton%20School%20team!%20I%20have%20a%20few%20questions",fullStackWhatsApp:"https://api.whatsapp.com/send?phone=919972616057&text=Hello%20Newton%20School%20team%2C%20I%20wanted%20to%20ask%20a%20few%20questions%0A",aboutUsWhatsApp:"https://api.whatsapp.com/send/?phone=919845215909&text=Hi+NewtonSchool+Team%21+I+have+questions+about+Data+Science+Programme+&type=phone_number&app_absent=0",nsatCodingWhatsApp:"https://wa.link/lq4h7v?utm_referer=nsat-and-coding-nsat",headstartBootcampLive:"https://my.newtonschool.co/headstart-bootcamp-live",headstartBootcampTelegram:"https://t.me/s/headstart_bootcamp",supportEmail:"mailto:support.nst@newtonschool.co",nsatFacultyResumeApplication:"https://my.newtonschool.co/coding-nsat/timeline",nsatFacultyWhatsApp:"https://wa.link/lq4h7v?utm_referer=nsat-prep-center-join-as-a-faculty",nsatFacultyWhatsAppConnect:"https://wa.link/lq4h7v",nsatFacultyYoutube:"https://youtube.com/@newtonschooloftechnology",legalGrievanceEmail:"mailto:grievance@newtonschool.co",admissionsEmail:"mailto:admissions.nst@newtonschool.co",contactSupportEmail:"mailto:support@newtonschool.co",contactLeadForm:"https://university.newtonschool.co/v1/contact",socialLinkedIn:"https://www.linkedin.com/company/newtonschool/",socialTwitter:"https://twitter.com/NewtonSchoolHQ",socialInstagram:"https://www.instagram.com/newtonschoolofficial/",socialYoutube:"https://www.youtube.com/channel/UC8eCxiwHoqRtlJIoBM7P8AA",siteMasterclass:"https://my.newtonschool.co/events/data-science-open-master-class/",siteSkillAssessmentTest:"https://my.newtonschool.co/c/skill-assessment-test-data-analytics",siteCollegePredictor:"https://my.newtonschool.co/jee-college-predictor-by-iit-roorkee-alumni-and-nst-students/",siteHeadstart:"https://my.newtonschool.co/cs/newton-headstart",sitePlaygrounds:"https://my.newtonschool.co/playgrounds",siteLaunchpad:"https://my.newtonschool.co/free-courses",siteReferAndEarn:"https://my.newtonschool.co/refer/certification-data-science",footerSocialX:"https://x.com/NewtonSchoolHQ",footerSocialInstagram:"https://www.instagram.com/newtonschoolofficial/",footerSocialLinkedIn:"https://www.linkedin.com/school/newtonschool/",footerSocialYoutube:"https://www.youtube.com/channel/UC8eCxiwHoqRtlJIoBM7P8AA",footerSocialFacebook:"https://www.facebook.com/newtonschool.co/",footerJobBoard:"https://my.newtonschool.co/job-board/job-board",footerAiTryouts:"https://my.newtonschool.co/tryouts",footerQuestionOfTheDay:"https://my.newtonschool.co/question-of-the-day?leaderboardType=fastest_today",footerCodeRush:"https://my.newtonschool.co/contest/all",footerGames:"https://my.newtonschool.co/games",footerCareers:"https://careers.newtonschool.co/newtonschool/",footerJoinCommunity:"https://t.me/+QWfBbO0ZL8s0MjY1",footerCreateAccount:"https://my.newtonschool.co/register",nstPrivacyPolicy:"https://www.newtonschool.co/privacy-policy",nstTerms:"https://www.newtonschool.co/terms-and-conditions",nstSupportWhatsapp:"https://api.whatsapp.com/send?phone=918147146756",nstGoForGold:"https://goforgold.in/",nstSocialLinkedIn:"https://www.linkedin.com/school/newton-school-of-technology/",nstSocialInstagram:"https://www.instagram.com/newtonschooloftechnology/",nstSocialTelegram:"https://t.me/NSTxTGCommunity",nstSocialYoutube:"https://www.youtube.com/@newtonschooloftechnology-nst",codingNsatRegister:"https://my.newtonschool.co/coding-nsat/timeline?utm_referer=codingnsat",codingNsatRegisterGfg:"https://my.newtonschool.co/coding-nsat/timeline?utm_term=ioi_bootcamp_coding_nsat&utm_referer=codingnsat",codingNsatNsatRegister:"https://my.newtonschool.co/nsat/timeline?utm_referer=codingnsat",codingNsatPrepKitForm:"https://university.newtonschool.co/s/ncet-prep-kit?utm_referer=codingnsat",codingNsatExploreNst:"https://www.newtonschool.co/newton-school-of-technology-nst?utm_referer=codingnsat",codingNsatFaqs:"https://www.newtonschool.co/newton-school-of-technology-nst/faqs",codingNsatWhatsApp:"https://wa.link/lq4h7v",codingNsatSupportEmail:"mailto:support.nst@newtonschool.co",hireFromUsResumeBase:"https://my.newtonschool.co/template/user/"},"NST26_LINKS",0,{researchIcmlToi:"https://timesofindia.indiatimes.com/education/news/ronit-choudhary-who-is-a-21-year-old-nst-student-publishes-ai-for-science-paper-accepted-at-icml-2026-workshop/articleshow/131656583.cms",researchHappyCityIndex:"https://medium.com/@aydinender/happy-city-index-2026-a45d8bbb8ee4",jeeMainRankPredictor:"https://my.newtonschool.co/jee-college-predictor-by-iit-roorkee-alumni-and-nst-students/jee-main-rank-predictor",nstNsatGuidelinesPdf:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/4def9b6f12b3444dab47525e8d7c7fdb.pdf"},"SIGNUP_API",0,{sendOtpUrl:"https://my.newtonschool.co/api/v1/user/otp/",registerUrl:"https://my.newtonschool.co/api/v1/user/register/",loginUrl:"https://my.newtonschool.co/api/v1/user/login/",backendEndpoint:"https://django.newtonschool.co",webEndpoint:"https://my.newtonschool.co"}])},830249,e=>{"use strict";var t=e.i(271645);e.s(["useParentUrl",0,function(){let[e,n]=(0,t.useState)("");return(0,t.useEffect)(()=>{function e(e){let t=e.data;t&&"object"==typeof t&&"PARENT_URL"===t.type&&"string"==typeof t.url&&n(t.url)}return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[]),e}])},703109,968081,e=>{"use strict";var t=e.i(997053),n=e.i(271645),o={DISPLAY_BD_D1:"display-bd-d1",DISPLAY_BD_D2:"display-bd-d2",DISPLAY_BD_D3:"display-bd-d3",HEADING_SB_H1:"heading-sb-h1",HEADING_SB_H2:"heading-sb-h2",HEADING_SB_H3:"heading-sb-h3",HEADING_SB_H4:"heading-sb-h4",HEADING_SB_H5:"heading-sb-h5",HEADING_SB_H6:"heading-sb-h6",PARAGRAPH_SB_P1:"paragraph-sb-p1",PARAGRAPH_SB_P2:"paragraph-sb-p2",PARAGRAPH_SB_P3:"paragraph-sb-p3",PARAGRAPH_SB_P4:"paragraph-sb-p4",PARAGRAPH_SB_L1:"paragraph-sb-l1",PARAGRAPH_SB_L2:"paragraph-sb-l2",PARAGRAPH_MD_P1:"paragraph-md-p1",PARAGRAPH_MD_P2:"paragraph-md-p2",PARAGRAPH_MD_P3:"paragraph-md-p3",PARAGRAPH_MD_P4:"paragraph-md-p4",PARAGRAPH_MD_C1:"paragraph-md-c1",PARAGRAPH_MD_L1:"paragraph-md-l1",PARAGRAPH_MD_L2:"paragraph-md-l2",OVERLINE_SB_OL1:"overline-sb-ol1",OVERLINE_SB_OL2:"overline-sb-ol2",ACTION_SB_P1:"action-sb-p1",ACTION_SB_P2:"action-sb-p2",ACTION_SB_LK1:"action-sb-lk1"};Object.freeze(Object.values(o));var s={H1:"h1",H2:"h2",H3:"h3",H4:"h4",H5:"h5",H6:"h6",P:"p",SPAN:"span",DIV:"div",LABEL:"label",CAPTION:"caption",CODE:"code",AUTO:"auto"};Object.freeze(Object.values(s));var a={[o.DISPLAY_BD_D1]:t.css`
        font-size: var(--font-size-fs-120, 76px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-140, 92px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[o.DISPLAY_BD_D2]:t.css`
        font-size: var(--font-size-fs-110, 64px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-130, 76px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[o.DISPLAY_BD_D3]:t.css`
        font-size: var(--font-size-fs-100, 52px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-120, 64px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[o.HEADING_SB_H1]:t.css`
        font-size: var(--font-size-fs-90, 40px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-110, 48px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[o.HEADING_SB_H2]:t.css`
        font-size: var(--font-size-fs-80, 36px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-100, 42px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[o.HEADING_SB_H3]:t.css`
        font-size: var(--font-size-fs-70, 28px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-90, 32px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[o.HEADING_SB_H4]:t.css`
        font-size: var(--font-size-fs-60, 24px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[o.HEADING_SB_H5]:t.css`
        font-size: var(--font-size-fs-50, 20px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-60, 24px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[o.HEADING_SB_H6]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-40, 20px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[o.PARAGRAPH_SB_P1]:t.css`
        font-size: var(--font-size-fs-40, 18px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[o.PARAGRAPH_SB_P2]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[o.PARAGRAPH_SB_P3]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-10, 0.016px);
    `,[o.PARAGRAPH_SB_P4]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-30, 18px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[o.PARAGRAPH_SB_L1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,[o.PARAGRAPH_SB_L2]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-10, 14px);
        letter-spacing: var(--letter-spacing-ls-40, 0.25px);
    `,[o.PARAGRAPH_MD_P1]:t.css`
        font-size: var(--font-size-fs-40, 18px);
        font-weight: var(--font-weight-fw-10, 500);
        line-height: var(--line-height-lh-80, 28px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[o.PARAGRAPH_MD_P2]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[o.PARAGRAPH_MD_P3]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[o.PARAGRAPH_MD_P4]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-30, 18px);
        letter-spacing: var(--letter-spacing-ls-30, 0.1px);
    `,[o.PARAGRAPH_MD_C1]:t.css`
        font-family: 'Fira Code';
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-00, 450);
        line-height: var(--line-height-lh-40, 20px);
        letter-spacing: var(--letter-spacing-ls-00, 0px);
    `,[o.PARAGRAPH_MD_L1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-60, 0.5px);
    `,[o.PARAGRAPH_MD_L2]:t.css`
        font-size: var(--font-size-fs-10, 12px);
        font-weight: var(--font-weight-fw-10, 450);
        line-height: var(--line-height-lh-10, 14px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,[o.OVERLINE_SB_OL1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-70, 1.6px);
        text-transform: uppercase;
    `,[o.OVERLINE_SB_OL2]:t.css`
        font-size: var(--font-size-fs-00, 11px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-00, 12px);
        letter-spacing: var(--letter-spacing-ls-80, 2px);
        text-transform: uppercase;
    `,[o.ACTION_SB_P1]:t.css`
        font-size: var(--font-size-fs-30, 16px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-70, 26px);
        letter-spacing: var(--letter-spacing-ls-20, 0.06px);
    `,[o.ACTION_SB_P2]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-50, 22px);
        letter-spacing: var(--letter-spacing-ls-50, 0.4px);
    `,[o.ACTION_SB_LK1]:t.css`
        font-size: var(--font-size-fs-20, 14px);
        font-weight: var(--font-weight-fw-20, 550);
        line-height: var(--line-height-lh-20, 16px);
        letter-spacing: var(--letter-spacing-ls-80, 2px);
        text-transform: uppercase;
    `},i={[o.DISPLAY_BD_D1]:s.H1,[o.DISPLAY_BD_D2]:s.H2,[o.DISPLAY_BD_D3]:s.H3,[o.HEADING_SB_H1]:s.H1,[o.HEADING_SB_H2]:s.H2,[o.HEADING_SB_H3]:s.H3,[o.HEADING_SB_H4]:s.H4,[o.HEADING_SB_H5]:s.H5,[o.HEADING_SB_H6]:s.H6,[o.PARAGRAPH_SB_P1]:s.P,[o.PARAGRAPH_SB_P2]:s.P,[o.PARAGRAPH_SB_P3]:s.P,[o.PARAGRAPH_SB_P4]:s.P,[o.PARAGRAPH_SB_L1]:s.LABEL,[o.PARAGRAPH_SB_L2]:s.LABEL,[o.PARAGRAPH_MD_P1]:s.P,[o.PARAGRAPH_MD_P2]:s.P,[o.PARAGRAPH_MD_P3]:s.P,[o.PARAGRAPH_MD_P4]:s.P,[o.PARAGRAPH_MD_C1]:s.CODE,[o.PARAGRAPH_MD_L1]:s.LABEL,[o.PARAGRAPH_MD_L2]:s.LABEL,[o.OVERLINE_SB_OL1]:s.P,[o.OVERLINE_SB_OL2]:s.P,[o.ACTION_SB_P1]:s.SPAN,[o.ACTION_SB_P2]:s.SPAN,[o.ACTION_SB_LK1]:s.SPAN},r=t.styled.p.attrs(e=>({as:e.as||"p"}))`
    margin: 0;
    padding: 0;

    font-family: var(--font-family, 'Mona Sans');
    color: var(--text-emphasis-primary-default, #16191d);

    ${({$variant:e})=>t.css`
            ${e?a[e]:a[o.PARAGRAPH_MD_P1]}
        `};

    ${({$textAlign:e})=>e&&`text-align: ${e};`}
    ${({$textTransform:e})=>e&&`text-transform: ${e};`}
    ${({$fontSize:e})=>e&&`font-size: ${e};`}
    ${({$color:e})=>e&&`color: ${e};`};
`,c=({variant:e="paragraph-md-p1",as:t="auto",color:o="var(--text-emphasis-primary-default, #16191d)",textAlign:a=null,textTransform:c=null,fontSize:l=null,children:p="",className:h="",title:f=null})=>{let u=t===s.AUTO?i[e]:t;return n.default.createElement(r,{$variant:e,as:u,$color:o,$textAlign:a,$textTransform:c,$fontSize:l,className:h,title:f},p)};e.s(["Typography_default",0,c],968081),e.s(["default",0,c],703109)}]);