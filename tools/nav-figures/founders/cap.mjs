import { chromium } from '/Users/shubhanshbhaskar/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
const b = await chromium.launch(); const p = await b.newPage({viewport:{width:1440,height:1000}}); const e=[]; p.on('pageerror',x=>e.push(x.message));
await p.goto('file://'+process.cwd()+'/mics.html'); await p.waitForTimeout(700);
await p.screenshot({path:'shots/mics.png', clip:{x:0,y:400,width:1440,height:480}}); console.log(JSON.stringify(e)); await b.close();
