import { chromium } from '/Users/shubhanshbhaskar/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
const b = await chromium.launch(); const p = await (await b.newContext({viewport:{width:1440,height:900}})).newPage();
await p.goto('http://localhost:8765/index.html'); await p.waitForTimeout(800);
await p.hover('.dn-t[data-m=more]'); await p.waitForTimeout(500);
console.log(JSON.stringify(await p.evaluate(() => { const r = document.querySelector('#dnMore .dn-ill').getBoundingClientRect(); return [r.width, r.height]; })));
const q = await (await b.newContext({viewport:{width:1440,height:900}})).newPage();
try { await q.goto('https://goforgold.in/', {waitUntil:'domcontentloaded', timeout:45000}); await q.waitForTimeout(4000);
console.log((await q.evaluate(() => document.body.innerText)).replace(/\n{2,}/g,'\n').slice(0,2500)); } catch(e) { console.log('gfg failed', e.message); }
await b.close();
