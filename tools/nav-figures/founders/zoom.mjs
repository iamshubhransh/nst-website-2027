import { chromium } from '/Users/shubhanshbhaskar/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
const b = await chromium.launch(); const p = await b.newPage({viewport:{width:1440,height:1000}, deviceScaleFactor:3});
await p.goto('file://'+process.cwd()+'/mics.html'); await p.waitForTimeout(500);
await p.locator('.fdr-mic-l').screenshot({path:'shots/zoom-l.png'}); await b.close();
