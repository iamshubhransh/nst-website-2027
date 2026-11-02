(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,808341,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={cancelIdleCallback:function(){return l},requestIdleCallback:function(){return r}};for(var a in o)Object.defineProperty(n,a,{enumerable:!0,get:o[a]});let r="u">typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},l="u">typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},519083,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={ESCAPE_REGEX:function(){return l},htmlEscapeAttributeString:function(){return u},htmlEscapeJsonString:function(){return c}};for(var a in o)Object.defineProperty(n,a,{enumerable:!0,get:o[a]});let r={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},l=/[&><\u2028\u2029]/g,s={"&":"&amp;",'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;"},i=/[&"'<>]/g;function c(e){return e.replace(l,e=>r[e])}function u(e){return e.replace(i,e=>s[e])}},479520,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={default:function(){return b},handleClientScriptLoad:function(){return y},initScriptLoader:function(){return w}};for(var a in o)Object.defineProperty(n,a,{enumerable:!0,get:o[a]});let r=e.r(555682),l=e.r(190809),s=e.r(843476),i=r._(e.r(174080)),c=l._(e.r(271645)),u=e.r(742732),d=e.r(922737),p=e.r(808341),f=e.r(519083),m=new Map,h=new Set,g=e=>{let{src:t,id:n,onLoad:o=()=>{},onReady:a=null,dangerouslySetInnerHTML:r,children:l="",strategy:s="afterInteractive",onError:c,stylesheets:u}=e,p=n||t;if(p&&h.has(p))return;if(m.has(t)){h.add(p),m.get(t).then(o,c);return}let f=()=>{a&&a(),h.add(p)},g=document.createElement("script"),y=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),o&&o.call(this,t),f()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});r?(g.innerHTML=r.__html||"",f()):l?(g.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",f()):t&&(g.src=t,m.set(t,y)),(0,d.setAttributesFromProps)(g,e),"worker"===s&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",s),u&&(e=>{if(i.default.preinit)return e.forEach(e=>{i.default.preinit(e,{as:"style"})});if("u">typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}})(u),document.body.appendChild(g)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,p.requestIdleCallback)(()=>g(e))}):g(e)}function w(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");h.add(t)})}function v(e){let{id:t,src:n="",onLoad:o=()=>{},onReady:a=null,strategy:r="afterInteractive",onError:l,stylesheets:d,...m}=e,{updateScripts:y,scripts:w,getIsSsr:v,appDir:b,nonce:x}=(0,c.useContext)(u.HeadManagerContext);x=m.nonce||x;let _=(0,c.useRef)(!1);(0,c.useEffect)(()=>{let e=t||n;_.current||(a&&e&&h.has(e)&&a(),_.current=!0)},[a,t,n]);let k=(0,c.useRef)(!1);if((0,c.useEffect)(()=>{if(!k.current){if("afterInteractive"===r)g(e);else"lazyOnload"===r&&("complete"===document.readyState?(0,p.requestIdleCallback)(()=>g(e)):window.addEventListener("load",()=>{(0,p.requestIdleCallback)(()=>g(e))}));k.current=!0}},[e,r]),("beforeInteractive"===r||"worker"===r)&&(y?(w[r]=(w[r]||[]).concat([{id:t,src:n,onLoad:o,onReady:a,onError:l,...m,nonce:x}]),y(w)):v&&v()?h.add(t||n):v&&!v()&&g({...e,nonce:x})),b){if(d&&d.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===r)if(!n)return m.dangerouslySetInnerHTML&&(m.children=m.dangerouslySetInnerHTML.__html,delete m.dangerouslySetInnerHTML),(0,s.jsx)("script",{nonce:x,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${(0,f.htmlEscapeJsonString)(JSON.stringify([0,{...m,id:t}]))})`}});else return i.default.preload(n,m.integrity?{as:"script",integrity:m.integrity,nonce:x,crossOrigin:m.crossOrigin}:{as:"script",nonce:x,crossOrigin:m.crossOrigin}),(0,s.jsx)("script",{nonce:x,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${(0,f.htmlEscapeJsonString)(JSON.stringify([n,{...m,id:t}]))})`}});"afterInteractive"===r&&n&&i.default.preload(n,m.integrity?{as:"script",integrity:m.integrity,nonce:x,crossOrigin:m.crossOrigin}:{as:"script",nonce:x,crossOrigin:m.crossOrigin})}return null}Object.defineProperty(v,"__nextScript",{value:!0});let b=v;("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},3303,(e,t,n)=>{t.exports=e.r(479520)},143865,e=>{"use strict";let t={gaId:"G-C6R4CQW223",gaSecondaryIds:"G-VMLZFNXE2B,G-T7Q53JXFY6".split(",").map(e=>e.trim()).filter(Boolean),gaEagerSecondaryIds:"G-T7Q53JXFY6".split(",").map(e=>e.trim()).filter(Boolean),gaAdsId:"AW-726728923",openpanelId:"80fff4e7-b255-4baf-b4ce-3c4744811cb3",openpanelApiHost:"https://openpanel-api.newtonschool.co",googleAnalyticsApiHost:"https://magicwand.newtonschool.co",wildcardDomain:".newtonschool.co",buildEnv:"production"};e.s(["ANALYTICS_CONFIG",0,t])},725526,e=>{"use strict";var t=e.i(271645);let n=["pointerdown","keydown","touchstart"];e.s(["useDeferUntilInteraction",0,function(){let[e,o]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{if(e)return;let t=()=>o(!0);for(let e of n)window.addEventListener(e,t,{once:!0,passive:!0,capture:!0});return()=>{for(let e of n)window.removeEventListener(e,t,{capture:!0})}},[e]),e}])},862830,e=>{"use strict";var t=e.i(843476),n=e.i(3303),o=e.i(725526);e.s(["MetaPixel",0,function({pixelIds:e,gateOnInteraction:a=!1}){let r=(0,o.useDeferUntilInteraction)();if(!e.length)return null;let l=e.map(e=>`fbq('init', '${e}');`).join("\n          ");return(0,t.jsxs)(t.Fragment,{children:[(!a||r)&&(0,t.jsx)(n.default,{id:"meta-pixel",strategy:a?"afterInteractive":"lazyOnload",dangerouslySetInnerHTML:{__html:`
          !function(f,b,e,v,n,t,s){
            if(f.fbq)return;
            n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
            t=b.createElement(e);t.async=!0;t.src=v;
            s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s);
          }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          ${l}
          fbq('track', 'PageView');
          `}}),(0,t.jsx)("noscript",{children:e.map(e=>(0,t.jsx)("img",{height:"1",width:"1",style:{display:"none"},src:`https://www.facebook.com/tr?id=${e}&ev=PageView&noscript=1`,alt:"","aria-hidden":"true"},e))})]})}])},22453,e=>{"use strict";e.s(["COOKIE_DOMAIN",0,".newtonschool.co","EXTERNAL_LINKS",0,{signIn:"https://my.newtonschool.co/login",nsatTimeline:"https://my.newtonschool.co/nsat/timeline",codingNsatTimeline:"https://my.newtonschool.co/coding-nsat/timeline",applyNow:"https://my.newtonschool.co/apply",newtonAccessRegister:"https://my.newtonschool.co/register/newton-access-pap",newtonAccessResume:"https://my.newtonschool.co/course/l9z45el37nul/timeline",requestCallbackDataScience:"https://university.newtonschool.co/v1/request-a-callback-progressive-v2?heading=Request+A+Callback&from=request_callback_v2&utm_ab_test_cohort=variant_2&utm_referer=data-science-performance-page-30-may",hireFromUsLeadForm:"https://university.newtonschool.co/v1/request-a-callback-hire-from-us?utm_referer=hire-from-us",nstHireFromUsLeadForm:"https://university.newtonschool.co/v1/request-a-callback-nst",dataScienceBrochurePdf:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/30fce1cb6e54469996ce2e2d9dcf9cea-newton-school-data-science-program-brochure.pdf",fullStackBrochurePdf:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/d932bea66f5f40b696a9d8c4bfdd3413.pdf",fullStackMasterclassRegisterUrl:"https://my.newtonschool.co/events/full-stack-development-master-class/upcoming-class",advancedFullStackRegisterUrl:"https://my.newtonschool.co/register/full-stack-developer-course?utm_source=ns_homepage&utm_medium=fsd_course_page_new&utm_campaign=website_organic&utm_namespace=certification-full-stack-development&utm_hash=ns_m7o0ljwmh3dh",xcelerateBrochurePdf:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/d932bea66f5f40b696a9d8c4bfdd3413.pdf",gydrPayNowForm:"https://university.newtonschool.co/s/get-your-doubts-resolved-pay-now",gydrBrochureForm:"https://university.newtonschool.co/s/download-brochure-nst",masterclassSignupForm:"https://university.newtonschool.co/s/generative-ai-masterclass-signup",masterclassTerms:"https://my.newtonschool.co/terms-and-conditions",masterclassWhatsApp:"https://wa.link/ixi86m",masterclassAgenticAiCourse:"https://www.newtonschool.co/agentic-ai-course",masterclassJoinCohortWhatsApp:"https://chat.whatsapp.com/ITFumkSyTMi93DdojhC7rn",agenticSignupForm:"https://university.newtonschool.co/s/agentic-ai-course-signup",agenticRcbForm:"https://university.newtonschool.co/v1/request-a-callback-progressive-v2-agentic",agenticTerms:"https://www.newtonschool.co/data-science-terms-and-conditions",agenticGeneralistAnnouncementBanner:"https://www.newtonschool.co/agentic-ai-course?utm_source=newton-school-platform-banner&utm_medium=generalist&utm_campaign=website&utm_namespace=newton-school-main-website&utm_term=header&utm_hash=ns_ql9ebfu4q9j2",aiEngineeringSignupForm:"https://university.newtonschool.co/s/agentic-ai-course-signup",aiEngineeringRcbForm:"https://university.newtonschool.co/v1/request-a-callback-progressive-v2-agentic-course",aiEngineeringTerms:"https://www.newtonschool.co/data-science-terms-and-conditions",upcomingClassChatgptSignup:"https://university.newtonschool.co/s/learn-sql-for-data-science-from-basics-v2",upcomingClassPowerBiSignup:"https://university.newtonschool.co/s/try-and-buy-ai-courses",upcomingClassPowerBiCallback:"https://university.newtonschool.co/v1/request-a-callback-ds-v2?from=tnb_request_a_callback&shouldShowBorder=false&heading=Request%20Callback",upcomingClassTerms:"https://www.newtonschool.co/data-science-terms-and-conditions",offeringsMasterclass:"https://my.newtonschool.co/events/data-science-open-master-class/upcoming-class",offeringsAiMockInterview:"https://my.newtonschool.co/elevate-ai-mock-interview",offeringsFreeCourses:"https://my.newtonschool.co/free-courses",jeeAdvancedRankPredictor:"https://my.newtonschool.co/jee-college-predictor-by-iit-roorkee-alumni-and-nst-students/jee-advanced-rank-predictor?utm_source=newton_school_web&utm_medium=jee_advanced_marks_vs_rank&utm_campaign=jeeadvanced_marks_vs_rank&utm_namespace=jee_advanced_rank_predictor&utm_hash=ns_rqpfyggoi7gt",jeeAdvancedRankPredictorResult:"https://my.newtonschool.co/jee-college-predictor-by-iit-roorkee-alumni-and-nst-students/jee-advanced-rank-predictor/result",jeeMainRankPredictorMarksVsPercentile:"https://my.newtonschool.co/jee-college-predictor-by-iit-roorkee-alumni-and-nst-students/jee-main-rank-predictor?utm_source=ns_blogs&utm_medium=blog_marks_vs_percentile&utm_campaign=blog_marks_vs_percentile_p&utm_namespace=nst-jee-early-rank-predictor&utm_hash=ns_qnvjxi9e20ss",jeeMainRankPredictorCutoff:"https://my.newtonschool.co/jee-college-predictor-by-iit-roorkee-alumni-and-nst-students/jee-main-rank-predictor?utm_source=ns_blogs&utm_medium=jee_cutoff_blog&utm_campaign=jee_cutoff_blog_p&utm_namespace=nst-jee-early-rank-predictor&utm_hash=ns_yjkbrr9hgkaz",jeeMainRankPredictorResult:"https://my.newtonschool.co/jee-college-predictor-by-iit-roorkee-alumni-and-nst-students/jee-main-rank-predictor/result",jeeMainCollegePredictor:"https://my.newtonschool.co/jee-college-predictor-by-iit-roorkee-alumni-and-nst-students/early-jee-rank-and-college-predictor",nstNsatPrepKitPdf:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/76e03b11a8404840a70e85ff90052f0b.pdf",dataScienceReviews:"https://www.newtonschool.co/courses/data-science-reviews-ns",dsv2AiResumeEvaluator:"https://my.newtonschool.co/ai-resume-evaluator",dsv2TechOpenings:"https://my.newtonschool.co/tech-openings",dsv2TrialPlatformCourse:"https://my.newtonschool.co/course/14kqx5w2qvdc/details?activityTypeTab=all",dataScienceMasterclassRegisterUrl:"https://my.newtonschool.co/events/data-science-open-master-class/upcoming-class?utm_source=ns_homepage&utm_medium=gfr_mc&utm_campaign=intiatives_mc&utm_namespace=certification-data-science&utm_term=masterclass&utm_hash=ns_tdf6rgvnlc20",termsAndConditions:"/terms-and-conditions",codebuddyTerms:"https://my.newtonschool.co/terms-and-conditions",counsellorPhone:"tel:+917619328498",counsellorWhatsApp:"https://api.whatsapp.com/send?phone=919972616057&text=Hi%20NewtonSchool%20Team!%20I%20have%20questions%20about%20Data%20Science%20Programme",homepageWhatsApp:"https://api.whatsapp.com/send?phone=919972616057&text=Hey%20Newton%20School%20team!%20I%20have%20a%20few%20questions",fullStackWhatsApp:"https://api.whatsapp.com/send?phone=919972616057&text=Hello%20Newton%20School%20team%2C%20I%20wanted%20to%20ask%20a%20few%20questions%0A",aboutUsWhatsApp:"https://api.whatsapp.com/send/?phone=919845215909&text=Hi+NewtonSchool+Team%21+I+have+questions+about+Data+Science+Programme+&type=phone_number&app_absent=0",nsatCodingWhatsApp:"https://wa.link/lq4h7v?utm_referer=nsat-and-coding-nsat",headstartBootcampLive:"https://my.newtonschool.co/headstart-bootcamp-live",headstartBootcampTelegram:"https://t.me/s/headstart_bootcamp",supportEmail:"mailto:support.nst@newtonschool.co",nsatFacultyResumeApplication:"https://my.newtonschool.co/coding-nsat/timeline",nsatFacultyWhatsApp:"https://wa.link/lq4h7v?utm_referer=nsat-prep-center-join-as-a-faculty",nsatFacultyWhatsAppConnect:"https://wa.link/lq4h7v",nsatFacultyYoutube:"https://youtube.com/@newtonschooloftechnology",legalGrievanceEmail:"mailto:grievance@newtonschool.co",admissionsEmail:"mailto:admissions.nst@newtonschool.co",contactSupportEmail:"mailto:support@newtonschool.co",contactLeadForm:"https://university.newtonschool.co/v1/contact",socialLinkedIn:"https://www.linkedin.com/company/newtonschool/",socialTwitter:"https://twitter.com/NewtonSchoolHQ",socialInstagram:"https://www.instagram.com/newtonschoolofficial/",socialYoutube:"https://www.youtube.com/channel/UC8eCxiwHoqRtlJIoBM7P8AA",siteMasterclass:"https://my.newtonschool.co/events/data-science-open-master-class/",siteSkillAssessmentTest:"https://my.newtonschool.co/c/skill-assessment-test-data-analytics",siteCollegePredictor:"https://my.newtonschool.co/jee-college-predictor-by-iit-roorkee-alumni-and-nst-students/",siteHeadstart:"https://my.newtonschool.co/cs/newton-headstart",sitePlaygrounds:"https://my.newtonschool.co/playgrounds",siteLaunchpad:"https://my.newtonschool.co/free-courses",siteReferAndEarn:"https://my.newtonschool.co/refer/certification-data-science",footerSocialX:"https://x.com/NewtonSchoolHQ",footerSocialInstagram:"https://www.instagram.com/newtonschoolofficial/",footerSocialLinkedIn:"https://www.linkedin.com/school/newtonschool/",footerSocialYoutube:"https://www.youtube.com/channel/UC8eCxiwHoqRtlJIoBM7P8AA",footerSocialFacebook:"https://www.facebook.com/newtonschool.co/",footerJobBoard:"https://my.newtonschool.co/job-board/job-board",footerAiTryouts:"https://my.newtonschool.co/tryouts",footerQuestionOfTheDay:"https://my.newtonschool.co/question-of-the-day?leaderboardType=fastest_today",footerCodeRush:"https://my.newtonschool.co/contest/all",footerGames:"https://my.newtonschool.co/games",footerCareers:"https://careers.newtonschool.co/newtonschool/",footerJoinCommunity:"https://t.me/+QWfBbO0ZL8s0MjY1",footerCreateAccount:"https://my.newtonschool.co/register",nstPrivacyPolicy:"https://www.newtonschool.co/privacy-policy",nstTerms:"https://www.newtonschool.co/terms-and-conditions",nstSupportWhatsapp:"https://api.whatsapp.com/send?phone=918147146756",nstGoForGold:"https://goforgold.in/",nstSocialLinkedIn:"https://www.linkedin.com/school/newton-school-of-technology/",nstSocialInstagram:"https://www.instagram.com/newtonschooloftechnology/",nstSocialTelegram:"https://t.me/NSTxTGCommunity",nstSocialYoutube:"https://www.youtube.com/@newtonschooloftechnology-nst",codingNsatRegister:"https://my.newtonschool.co/coding-nsat/timeline?utm_referer=codingnsat",codingNsatRegisterGfg:"https://my.newtonschool.co/coding-nsat/timeline?utm_term=ioi_bootcamp_coding_nsat&utm_referer=codingnsat",codingNsatNsatRegister:"https://my.newtonschool.co/nsat/timeline?utm_referer=codingnsat",codingNsatPrepKitForm:"https://university.newtonschool.co/s/ncet-prep-kit?utm_referer=codingnsat",codingNsatExploreNst:"https://www.newtonschool.co/newton-school-of-technology-nst?utm_referer=codingnsat",codingNsatFaqs:"https://www.newtonschool.co/newton-school-of-technology-nst/faqs",codingNsatWhatsApp:"https://wa.link/lq4h7v",codingNsatSupportEmail:"mailto:support.nst@newtonschool.co",hireFromUsResumeBase:"https://my.newtonschool.co/template/user/"},"NST26_LINKS",0,{researchIcmlToi:"https://timesofindia.indiatimes.com/education/news/ronit-choudhary-who-is-a-21-year-old-nst-student-publishes-ai-for-science-paper-accepted-at-icml-2026-workshop/articleshow/131656583.cms",researchHappyCityIndex:"https://medium.com/@aydinender/happy-city-index-2026-a45d8bbb8ee4",jeeMainRankPredictor:"https://my.newtonschool.co/jee-college-predictor-by-iit-roorkee-alumni-and-nst-students/jee-main-rank-predictor",nstNsatGuidelinesPdf:"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/4def9b6f12b3444dab47525e8d7c7fdb.pdf"},"SIGNUP_API",0,{sendOtpUrl:"https://my.newtonschool.co/api/v1/user/otp/",registerUrl:"https://my.newtonschool.co/api/v1/user/register/",loginUrl:"https://my.newtonschool.co/api/v1/user/login/",backendEndpoint:"https://django.newtonschool.co",webEndpoint:"https://my.newtonschool.co"}])},42872,e=>{"use strict";var t,n=e.i(843476),o=e.i(271645),a=e.i(844611),r=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},l=e.g&&e.g.Object===Object&&e.g,s="object"==typeof self&&self&&self.Object===Object&&self,i=l||s||Function("return this")(),c=function(){return i.Date.now()},u=/\s/,d=function(e){for(var t=e.length;t--&&u.test(e.charAt(t)););return t},p=/^\s+/,f=i.Symbol,m=Object.prototype,h=m.hasOwnProperty,g=m.toString,y=f?f.toStringTag:void 0,w=function(e){var t=h.call(e,y),n=e[y];try{e[y]=void 0;var o=!0}catch(e){}var a=g.call(e);return o&&(t?e[y]=n:delete e[y]),a},v=Object.prototype.toString,b=f?f.toStringTag:void 0,x=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":b&&b in Object(e)?w(e):v.call(e)},_=function(e){return"symbol"==typeof e||null!=e&&"object"==typeof e&&"[object Symbol]"==x(e)},k=0/0,E=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,C=/^0o[0-7]+$/i,j=parseInt,A=function(e){if("number"==typeof e)return e;if(_(e))return k;if(r(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=r(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=(t=e)?t.slice(0,d(t)+1).replace(p,""):t;var o=S.test(e);return o||C.test(e)?j(e.slice(2),o?2:8):E.test(e)?k:+e},T=Math.max,I=Math.min,O=function(e,t,n){var o,a,l,s,i,u,d=0,p=!1,f=!1,m=!0;if("function"!=typeof e)throw TypeError("Expected a function");function h(t){var n=o,r=a;return o=a=void 0,d=t,s=e.apply(r,n)}function g(e){var n=e-u,o=e-d;return void 0===u||n>=t||n<0||f&&o>=l}function y(){var e,n,o,a=c();if(g(a))return w(a);i=setTimeout(y,(e=a-u,n=a-d,o=t-e,f?I(o,l-n):o))}function w(e){return(i=void 0,m&&o)?h(e):(o=a=void 0,s)}function v(){var e,n=c(),r=g(n);if(o=arguments,a=this,u=n,r){if(void 0===i)return d=e=u,i=setTimeout(y,t),p?h(e):s;if(f)return clearTimeout(i),i=setTimeout(y,t),h(u)}return void 0===i&&(i=setTimeout(y,t)),s}return t=A(t)||0,r(n)&&(p=!!n.leading,l=(f="maxWait"in n)?T(A(n.maxWait)||0,t):l,m="trailing"in n?!!n.trailing:m),v.cancel=function(){void 0!==i&&clearTimeout(i),d=0,o=u=a=i=void 0},v.flush=function(){return void 0===i?s:w(c())},v},R=e.i(773892),M=e.i(364072),P=e.i(189101),q=e.i(892480),N=e.i(824511),F=e.i(997053),D={initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{y:"-8px",opacity:0},visible:{y:"8px",opacity:1},exit:{y:"-8px",opacity:0}},transition:{duration:.2}},L=(0,F.styled)(N.m.div)`
    box-sizing: border-box;
    display: flex;
    width: ${({$width:e})=>e};
    max-height: ${({$maxHeight:e})=>null!=e?e:"500px"};
    padding: 8px 0;
    font-family: var(--font-family);
    flex-direction: column;
    align-items: flex-start;
    border-radius: var(--corner-radius-cr-4, 8px);
    border: 1px solid var(--border-subtle-primary-default, #e1e5ea);
    background: var(--bg-subtle-primary-default, #fff);
    overflow: hidden;

    * {
        box-sizing: border-box;
    }
`,$=F.styled.div`
    box-sizing: border-box;
    padding: 6px 16px 14px 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 4px;
    align-self: stretch;
    border-bottom: 1px solid var(--border-subtle-primary-default, #e1e5ea);
`,B=F.styled.div`
    color: var(--text-emphasis-primary-default, #16191d);
    font-size: 18px;
    font-style: normal;
    font-weight: 550;
    line-height: 28px;
    letter-spacing: 0.06px;
`,z=F.styled.div`
    color: var(--text-emphasis-secondary-default, #5b6271);
    font-size: 12px;
    font-style: normal;
    font-weight: 450;
    line-height: 14px;
    letter-spacing: 0.4px;
`,H=F.styled.div`
    display: flex;
    padding: 4px 12px;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    flex-grow: 1;
    overflow: auto;
    position: relative;
    gap: 4px;
`,U=F.styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    overflow-y: auto;
    width: 100%;
`,W=F.styled.div`
    display: flex;
    padding: var(--spacing-sp-5, 8px) 0px var(--spacing-sp-3, 4px) 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sp-5, 8px);
    align-self: stretch;
    position: sticky;
    top: 0;
    background: var(--bg-subtle-primary-default, #fff);
    z-index: 1;
`,G=F.styled.div`
    display: flex;
    padding: 8px 4px;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    color: var(--text-emphasis-secondary-default, #5b6271);
    font-size: 11px;
    font-style: normal;
    font-weight: 550;
    line-height: 12px;
    letter-spacing: 2px;

    &:focus-visible {
        border-radius: 8px;
        outline: 3px solid var(--border-subtle-brand-default, #61a8ff);
    }
`,K=F.styled.div`
    height: 1px;
    min-height: 1px;
    margin: 8px 4px;
    align-self: stretch;
    border-radius: 8px;
    background: var(--border-subtle-primary-default, #e1e5ea);
`,J=F.styled.div`
    display: flex;
    padding: 8px 16px;
    align-items: center;
    justify-content: center;
`,Y=F.styled.button`
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    cursor: pointer;
    color: var(--text-emphasis-primary-default, #16191d);
    outline: none;
    border: none;
    background: none;
    border-radius: 4px;
    transition: outline ${200}ms ease-out;
    transition: background ${200}ms ease-out;

    ${({disabled:e})=>e&&F.css`
            cursor: not-allowed;
            color: var(--text-emphasis-primary-disabled, #8c95a6);
        `}

    &:hover {
        background: var(--bg-subtle-primary-hover, #f6f7f9);
    }

    &:focus {
        outline: none;
    }

    &:focus-visible {
        z-index: 1;
        outline: 3px solid var(--border-subtle-brand-default, #61a8ff);
    }
`,Q=F.styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
    overflow: hidden;
`,V=F.styled.div`
    text-align: left;
    font-size: 14px;
    font-style: normal;
    font-weight: 450;
    line-height: 22px;
    letter-spacing: 0.1px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`,X=F.styled.div`
    text-align: left;
    color: var(--text-emphasis-secondary-default, #5b6271);
    font-size: 12px;
    font-style: normal;
    font-weight: 450;
    line-height: 14px;
    letter-spacing: 0.4px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    ${({$disabled:e})=>e&&F.css`
            color: var(--text-emphasis-primary-disabled, #8c95a6) !important;
        `}
`,Z=F.styled.div`
    padding: 14px 16px 6px 16px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-top: 1px solid var(--border-subtle-primary-default, #e1e5ea);
`,ee=({multiple:e,showActionButtons:t,showClearAllButton:n,clearAllButtonText:a,applyButtonText:r,handleClearAll:l,handleApply:s})=>t?o.default.createElement(Z,null,o.default.createElement(P.Button_default,{size:"small",variant:"primary",color:"brand",onClick:()=>s()},r),n&&e&&o.default.createElement(P.Button_default,{size:"small",variant:"tertiary",color:"neutral",onClick:l},a)):null,et=({showHeader:e,overline:t,title:n,subtext:a,customHeader:r})=>r?o.default.createElement(o.default.Fragment,null,r):e&&(n||t||a)?o.default.createElement($,null,t&&o.default.createElement(z,null,t),n&&o.default.createElement(B,null,n),a&&o.default.createElement(z,null,a)):null,en=e=>{let{label:t,value:n,description:a,leftIcon:r,rightIcon:l,disabled:s,multiple:i,selected:c,onClick:u,optionRef:d,onKeyDown:p}=e,f=(0,o.useId)();return o.default.createElement(Y,{role:"option",ref:d,"aria-labelledby":`option-label-${f}`,"aria-selected":i?void 0:c,"aria-checked":i?c:void 0,disabled:s,onClick:e=>{e.preventDefault(),s||u(n)},onKeyDown:e=>{s||p(e)}},r&&o.default.createElement(q.Icon_default,{name:r,color:"currentColor",size:"20"}),o.default.createElement(Q,null,o.default.createElement(V,{id:`option-label-${f}`},t),o.default.createElement(X,{$disabled:s,id:`option-description-${f}`},a)),l&&o.default.createElement(q.Icon_default,{name:l,color:"currentColor",size:"20"}),!i&&c&&o.default.createElement(q.Icon_default,{name:"check",color:"var(--text-emphasis-brand-default, #0673F9)",size:"20"}),i&&o.default.createElement(q.Icon_default,{name:c?"check-square-filled":"square",color:c?"var(--text-emphasis-brand-default, #0673F9)":"currentColor",size:"20"}))},eo=e=>{let{title:t,itemRef:n,onKeyDown:a}=e;return t?o.default.createElement(G,{ref:n,tabIndex:0,"aria-label":t,onKeyDown:a},t):null},ea=({searchable:e,searchPlaceholder:t,searchIcon:n,onSearchInputChange:r,onKeyDown:l,searchRef:s})=>{let[i,c]=(0,o.useState)("");return((0,o.useEffect)(()=>{r(i)},[i]),e)?o.default.createElement(W,{role:"searchbox",onKeyDown:e=>{["ArrowUp","ArrowDown","Enter","Escape","Tab"].includes(e.key)&&l(e)}},o.default.createElement(a.TextField_default,{ref:s,name:"dropdown-search-box",value:i,onChange:e=>c(e.target.value),placeholder:t,adornments:{start:o.default.createElement(q.Icon_default,{name:n})}})):null},er=((t=er||{}).SUB_HEADER="subheader",t.DIVIDER="divider",t.OPTION="option",t),el=(e,t)=>t?e?t:[t]:[];function es(e){return"option"===e.type?!e.disabled:"subheader"===e.type}var ei=(0,o.forwardRef)((e,t)=>{let{showHeader:n=!0,title:a="Select",overline:r="",subtext:l="",customHeader:s=null,searchable:i=!1,searchPlaceholder:c="Search",searchIcon:u="search",onSearchInputChange:d=null,multiple:p=!1,items:f=[],showActionButtons:m=!1,showClearAllButton:h=!0,clearAllButtonText:g="Clear All",applyButtonText:y="Apply",onClearAll:w=()=>{},onChange:v=()=>{},onScrollToBottom:b=()=>{},className:x=null,styles:_={},value:k=null,width:E="300px",maxHeight:S="500px",applyOnOptionSelectInMultipleMode:C=!1,id:j,emptyStateMessage:A="No options available"}=e,T=el(p,k),[I,P]=(0,o.useState)([]),[q,N]=(0,o.useState)(T),[F,$]=(0,o.useState)(null),B=(0,o.useRef)(null),W=t||B,G=(0,o.useRef)(null),Y=(0,o.useRef)([]),Q=(0,o.useRef)([]),V=(e=null)=>{let t=[];t=Array.isArray(e)?e:q,p?v(t):t.length>0&&v(t[0])},X=e=>{if(p){let t=-1!==q.findIndex(t=>t.value===e.value)?q.filter(t=>t.value!==e.value):[...q,e];N(t),!m&&C&&V(t)}else N([e]),m||V(I.filter(t=>t.value===e.value))},Z=(0,o.useCallback)(O(e=>(e=>{if(i)if("function"==typeof d)d(e);else{let t=I.filter(t=>{var n,o;return(null==(n=t.label)?void 0:n.toLowerCase().includes(e.toLowerCase()))||(null==(o=t.description)?void 0:o.toLowerCase().includes(e.toLowerCase()))});t.length>0||e?$(t):$(null)}})(e),500),[I]),er=(e,t=[],n)=>{var o,a,r;e<=-1||e>=t.length?i?null==(o=G.current)||o.focus():null==(a=Y.current[0])||a.focus():null==(r=n.current[e])||r.focus()},ei=(e,t,n=[],o)=>{("Tab"!==e.key||e.shiftKey)&&"ArrowDown"!==e.key?"Tab"===e.key&&e.shiftKey||"ArrowUp"===e.key?(e.preventDefault(),(()=>{let e=t-1;for(;e>=0&&!es(n[e]);)e-=1;er(e,n,o)})()):"Enter"===e.key||" "===e.key?(e.preventDefault(),(()=>{let e=n[t];"option"!==e.type||e.disabled||X(e)})()):"Escape"===e.key&&(e.preventDefault(),V()):(e.preventDefault(),(()=>{let e=t+1;for(;e<n.length&&!es(n[e]);)e+=1;er(e,n,o)})())};return(0,o.useEffect)(()=>{P(f.filter(e=>"option"===e.type))},[f]),(0,o.useEffect)(()=>{f.length>0&&function(e,t,n=100){let o=e.findIndex(e=>!0===e.scrollToOnOpen);-1!==o&&setTimeout(()=>{let e=t.current[o];e&&e.scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})},n)}(f,Y)},[f]),(0,R.useClickAway_default)(W,()=>{p&&!m&&V()}),o.default.createElement(M.motion_default,null,o.default.createElement(L,{className:x,style:_,ref:W,$width:E,$maxHeight:S,role:"menu",id:j,...D},o.default.createElement(et,{showHeader:n,overline:r,title:a,subtext:l,customHeader:s}),o.default.createElement(H,null,o.default.createElement(ea,{searchRef:G,searchable:i,searchPlaceholder:c,searchIcon:u,onSearchInputChange:Z,onKeyDown:e=>ei(e,-1,F||I,F?Q:Y)}),o.default.createElement(U,{onScroll:e=>{let{scrollTop:t,scrollHeight:n,clientHeight:o}=e.currentTarget;1>Math.abs(n-t-o)&&b()}},Array.isArray(F)&&F.map((e,t)=>o.default.createElement(en,{key:e.value,optionRef:e=>{Q.current[t]=e},multiple:p,selected:q.map(e=>e.value).includes(e.value),onClick:e=>X(I.find(t=>t.value===e)),onKeyDown:e=>ei(e,t,F,Q),...e})),!Array.isArray(F)&&f.length>0&&f.map((e,t)=>"subheader"===e.type?o.default.createElement(eo,{key:`${e.type}-${e.title}`,itemRef:e=>{Y.current[t]=e},onKeyDown:e=>ei(e,t,f,Y),...e}):"divider"===e.type?o.default.createElement(K,{key:`${e.type}`}):"option"===e.type?o.default.createElement(en,{key:`${e.type}-${e.value}`,optionRef:e=>{Y.current[t]=e},multiple:p,selected:q.map(e=>e.value).includes(e.value),onClick:e=>X(I.find(t=>t.value===e)),onKeyDown:e=>ei(e,t,f,Y),...e}):null),!Array.isArray(F)&&0===f.length&&o.default.createElement(J,null,o.default.createElement(z,null,A)))),o.default.createElement(ee,{multiple:p,showActionButtons:m,showClearAllButton:h,clearAllButtonText:g,applyButtonText:y,handleClearAll:()=>{N([]),w()},handleApply:V})))}),ec=e.i(866700),eu=e.i(228093),ed=e.i(378191),ep=e.i(893347),ef=e.i(88653),em=F.styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    font-family: var(--font-family);
`,eh=(0,F.styled)(P.Button_default)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    span {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
        flex: 1;
    }
`,eg=F.styled.div`
    height: fit-content;
    width: fit-content;
`,ey=(0,o.forwardRef)((e,t)=>{var n;let{name:a,label:r,placeholder:l="Select",isRequired:s=!1,isDisabled:i=!1,helpMessage:c,errorMessage:u,color:d="brand",showSelectedValueOnTrigger:p=!0,onTriggerClick:f=()=>{},selectedValues:m=[],multiple:h=!1,trigger:g}=e;return g?o.default.createElement(eg,{ref:t,onClick:()=>{i||f()}},g):o.default.createElement(em,null,r&&o.default.createElement(ec.Label,{name:a,isRequired:s,isDisabled:i,color:"brand"===d?"primary":d},r),o.default.createElement(eh,{ref:t,id:a,name:a,variant:"secondary",color:"brand"===d?"neutral":d,fullWidth:!0,onClick:()=>f(),showAnimationOnClick:!1,disabled:i},o.default.createElement("span",null,p?h&&Array.isArray(m)?(null==m?void 0:m.length)?`${m.length} selected`:l:!h&&((null==m?void 0:m.label)||(null==(n=null==m?void 0:m[0])?void 0:n.label))||l:l),o.default.createElement(q.Icon_default,{name:"chevron-down",color:"currentColor"})),c&&o.default.createElement(eu.HelpMessage,null,c),u&&o.default.createElement(ed.ErrorMessage,null,u))}),ew=e=>{var t,n,a;let r,l,{menuProps:s,multiple:i=!1,items:c=[],value:u=null,onChange:d=()=>{},onClose:p=()=>{},showActionButtons:f=!1}=e;s?{width:r,fullWidth:l}=s:(r="300px",l=!0);let[m,h]=(0,o.useState)(!1),[g,y]=(0,o.useState)(500),[w,v]=(0,o.useState)(el(i,u)),b=(0,o.useRef)(null),x=(0,o.useRef)(null),_=e=>{var t,n;h(!1),Array.isArray(e)&&!i?p(null!=(t=e[0])?t:null):p(e),null==(n=null==b?void 0:b.current)||n.focus()};return(0,o.useEffect)(()=>{v(el(i,u))},[u,c,i]),(0,o.useEffect)(()=>{m&&x.current&&y(x.current.clientHeight)},[m]),o.default.createElement(ef.AnimatePresence,null,o.default.createElement(ey,{...e,key:"dropdown-trigger",ref:b,onTriggerClick:()=>{h(!m)},selectedValues:w,multiple:i}),m&&o.default.createElement(ep.Overlay_default,{key:"dropdown-menu-overlay",position:{top:Math.min(null==(n=b.current)?void 0:n.getBoundingClientRect().bottom,window.innerHeight-g-20),left:null==(a=b.current)?void 0:a.getBoundingClientRect().left},shouldFocusOnFirstElement:!0,shouldDisableScroll:m,onOverlayClick:()=>{_(w)}},o.default.createElement(ei,{...e,width:l?`${null==(t=b.current)?void 0:t.getBoundingClientRect().width}px`:r,ref:x,onChange:e=>{v(e),d(e),(!i||f)&&_(e)}})))},ev=e.i(837339),eb=e=>{let{children:t,iconSize:n="20",style:a}=e;return t?o.default.createElement(ev.StyledSuccessMessage,null,o.default.createElement(q.Icon_default,{name:"exclamation-circle",color:"currentColor",size:n}),t&&o.default.createElement(ev.StyledSuccessMessageText,{style:a},t)):null},ex=e.i(272225),e_=F.styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`,ek=F.styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    align-self: stretch;
`,eE=F.styled.input`
    display: flex;
    height: 32px;
    width: 100px;
    min-height: 32px;
    padding: 4px 8px;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-sp-5, 8px);
    border-radius: var(--corner-radius-cr-4, 8px);
    border: 1px solid var(--border-moderate-primary-default, #c9cfd9);
    background: var(--bg-subtle-primary-default, #fff);
    color: var(--text-emphasis-primary-default, #16191d);
    text-align: center;

    &::placeholder {
        color: var(--text-emphasis-primary-disabled, #8c95a6);
        opacity: 1;
    }

    &:hover {
        background: linear-gradient(
                0deg,
                var(--bg-subtle-primary-hover, #f6f7f9) 0%,
                var(--bg-subtle-primary-hover, #f6f7f9) 100%
            ),
            var(--bg-subtle-primary-default, #fff);
    }

    ${({$color:e})=>(0,ex.getTextFieldStyles)(e)}

    ${e=>e.$isOtpCorrect&&`
        border-color: var(--border-moderate-success-default, #50CE99);
    `}

    ${e=>e.$isOtpWrong&&`
        border-color: var(--border-moderate-error-default, #F8636B);
    `}

    &:disabled {
        background: linear-gradient(
                0deg,
                var(--bg-subtle-primary-hover, #f6f7f9) 0%,
                var(--bg-subtle-primary-hover, #f6f7f9) 100%
            ),
            var(--bg-subtle-primary-default, #fff);
    }
`,eS=(e,t)=>{var n,o,a;return e?null==(a=null==(n=e.split)?void 0:(o=n.call(e,"")).slice)?void 0:a.call(o,0,t):Array(t).fill("")},eC=e=>{let{value:t="",label:n,name:a,length:r=4,onChange:l=()=>{},onBlur:s=()=>{},style:i,isOtpCorrect:c=!1,isOtpWrong:u=!1,isDisabled:d=!1,errorMessage:p="Wrong OTP. Please try again",successMessage:f="OTP is correct",color:m="brand",className:h}=e,g=(0,o.useRef)(Array(r).fill(null)),[y,w]=(0,o.useState)(eS(t,r)),v=e=>{w(e),l({target:{name:a,value:e.join("")}})};return(0,o.useEffect)(()=>{t!==y.join("")&&w(eS(t,r))},[t,r]),o.default.createElement(e_,{className:h},n&&o.default.createElement(ec.Label,{name:a,isRequired:!0,color:"brand"===m?"primary":m},n),o.default.createElement(ek,{onBlur:e=>{e.relatedTarget&&e.currentTarget.contains(e.relatedTarget)||s({target:{name:a,value:y.join("")}})}},Array.from({length:r}).map((e,t)=>o.default.createElement(eE,{key:`otp-input-field-${a}-${t+1}`,ref:e=>{g.current[t]=e},as:"input",style:i,placeholder:"-",value:y[t]||"",onInput:e=>((e,t)=>{var n;let o=e.target.value;if(o.length>1||!/^\d*$/.test(o))return;let a=[...y];a[t]=o,v(a),t<r-1&&""!==o&&(null==(n=g.current[t+1])||n.focus())})(e,t),onKeyDown:e=>((e,t)=>{var n,o,a;switch(e.key){case"ArrowUp":case"ArrowDown":e.preventDefault();break;case"ArrowLeft":e.preventDefault(),t>0&&(null==(n=g.current[t-1])||n.focus());break;case"ArrowRight":e.preventDefault(),t<r-1&&(null==(o=g.current[t+1])||o.focus());break;case"Backspace":!y[t]&&t>0&&(null==(a=g.current[t-1])||a.focus())}})(e,t),maxLength:1,onPaste:e=>{var t;let n,o,a;return e.preventDefault(),n=e.clipboardData.getData("text").replace(/[^0-9]/g,"").split(""),o=[...y],void(-1!==(a=g.current.findIndex(e=>e===document.activeElement))&&(n.forEach((e,t)=>{let n=a+t;n<r&&(o[n]=e)}),null==(t=g.current[Math.min(a+n.length,r-1)])||t.focus()),v(o))},onFocus:e=>e.target.select(),$isOtpCorrect:c,$isOtpWrong:u,disabled:d,$color:m,inputMode:"numeric"}))),u&&o.default.createElement(ed.ErrorMessage,{iconSize:"16"},p),c&&o.default.createElement(eb,{iconSize:"16"},f))},ej=e.i(501147),eA=e.i(336835),eT=e.i(916687);let eI=e=>({type:er.OPTION,label:e.label,value:e.value,...e.scrollToOnOpen?{scrollToOnOpen:!0}:{}});function eO({field:e,value:t,error:a,onChange:r,onCommit:l}){let s=(0,o.useMemo)(()=>{if("graduationYear"===e.type){let e=new Date().getFullYear();return Array.from({length:11},(t,n)=>String(e+4-n)).map(e=>({label:e,value:e}))}return e.options??[]},[e.type,e.options]),i=(0,o.useMemo)(()=>s.map(eI),[s]),c=s.find(e=>e.value===t);return(0,n.jsx)(ew,{name:e.name,label:e.label,placeholder:e.placeholder,multiple:!1,items:i,value:c?eI(c):void 0,onChange:t=>{let n=Array.isArray(t)?t[0]:t,o=n?String(n.value):"";r(e.name,o),l?.(e.name,o)},errorMessage:a,...e.dropdownProps})}function eR({field:e,value:t,error:a,onChange:r,onCommit:l}){let[s,i]=(0,o.useState)([]),[c,u]=(0,o.useState)(""),d=(0,o.useRef)(null);(0,o.useEffect)(()=>()=>{d.current&&clearTimeout(d.current)},[]);let p=s.map(eI),f=t?{label:c||t,value:t}:void 0;return(0,n.jsx)(ew,{name:e.name,label:e.label,placeholder:e.placeholder??"Search your college",multiple:!1,searchable:!0,onSearchInputChange:e=>{d.current&&clearTimeout(d.current),e.trim().length<2||(d.current=setTimeout(async()=>{i((await (0,eA.fetchCollegeList)(e)).map(e=>({label:e.name,value:String(e.id)})))},300))},items:p,value:f?eI(f):void 0,onChange:t=>{let n=Array.isArray(t)?t[0]:t,o=n?String(n.value):"";u(n?String(n.label):""),r(e.name,o),l?.(e.name,o)},errorMessage:a})}e.s(["FormField",0,function({field:e,value:t,error:o,onChange:a,onCommit:r,phoneAdornment:l,phoneEndAdornment:s}){let i=()=>r?.(e.name,t);switch(e.type){case"text":case"email":case"number":return(0,n.jsx)(ej.NSTextField,{name:e.name,label:e.label,isRequired:e.required,isDisabled:e.disabled,type:"number"===e.type?"text":e.type,inputMode:"number"===e.type?"decimal":void 0,autoComplete:e.autoComplete,placeholder:e.placeholder,value:t,onChange:t=>a(e.name,t.target.value),onBlur:i,errorMessage:o,helpMessage:e.helpMessage});case"phone":return(0,n.jsx)(ej.NSTextField,{name:e.name,label:e.label,isRequired:e.required,isDisabled:e.disabled,type:"tel",inputMode:"numeric",autoComplete:e.autoComplete??"tel",placeholder:e.placeholder,value:t,onChange:t=>a(e.name,(0,eT.normalizeIndianPhone)(t.target.value)),onBlur:i,adornments:l||s?{start:l,end:s}:void 0,errorMessage:o});case"otp":return(0,n.jsx)(eC,{name:e.name,length:e.length??4,value:t,onChange:t=>a(e.name,t.target.value),isOtpWrong:!!o,style:{flexGrow:1,flexShrink:1,flexBasis:"0px",minWidth:0,width:"auto",boxSizing:"border-box"}});case"checkbox":return(0,n.jsxs)("label",{className:"text-ds-muted flex items-center gap-2.5 text-sm",children:[(0,n.jsx)("input",{type:"checkbox",name:e.name,checked:"true"===t,onChange:t=>a(e.name,t.target.checked?"true":""),className:"border-ds-border accent-ds-blue size-4 rounded"}),e.label]});case"radio":return(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{className:"mb-2 text-sm font-medium text-[#16191d]",children:[e.label,e.required&&(0,n.jsx)("span",{className:"text-[#d22d3a]",children:" *"})]}),(0,n.jsx)("div",{className:"flex flex-wrap gap-x-7 gap-y-2",children:(e.options??[]).map(o=>(0,n.jsxs)("label",{className:"flex cursor-pointer items-center gap-2 text-sm text-[#16191d]",children:[(0,n.jsx)("input",{type:"radio",name:e.name,value:o.value,checked:t===o.value,onChange:()=>{a(e.name,o.value),r?.(e.name,o.value)},className:"h-4 w-4 accent-[#0673f9]"}),o.label]},o.value))}),o&&(0,n.jsx)("p",{className:"mt-1 text-xs text-[#d22d3a]",children:o})]});case"dropdown":case"graduationYear":return(0,n.jsx)(eO,{field:e,value:t,error:o,onChange:a,onCommit:r});case"college":return(0,n.jsx)(eR,{field:e,value:t,error:o,onChange:a,onCommit:r});default:return null}}],42872)}]);