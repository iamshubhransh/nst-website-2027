import { chromium } from '/Users/shubhanshbhaskar/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
const [file, ...times] = process.argv.slice(2);
const b = await chromium.launch(); const p = await b.newPage({viewport:{width:420,height:460}, deviceScaleFactor: 3}); const errs=[];
p.on('pageerror',e=>errs.push(e.message)); p.on('console',m=>{ if(m.type()==='error') errs.push(m.text()); });
await p.goto('file://'+process.cwd()+'/'+file+'.html'); await p.waitForTimeout(300);
let t0 = 300;
for (const t of times.map(Number)) { await p.waitForTimeout(Math.max(0, t - t0)); t0 = t; await p.locator('.pane').screenshot({path:`shots/${file}-${t}.png`}); }
console.log(JSON.stringify(errs)); await b.close();
