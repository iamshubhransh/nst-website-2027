import { chromium } from '/Users/shubhanshbhaskar/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
import { spawn } from 'node:child_process';
const srv = spawn('python3', ['-m', 'http.server', '8796'], { cwd: process.cwd(), stdio: 'ignore' }); await new Promise((r) => setTimeout(r, 700));
const b = await chromium.launch(); const errs = [];
for (const f of ['neutron', 'tekron']) {
  const p = await (await b.newContext({ viewport: { width: 1920, height: 900 }, deviceScaleFactor: 2 })).newPage(); p.on('pageerror', (e) => errs.push(e.message)); p.on('console', (m) => { if (m.type() === 'error') errs.push(m.text()); });
  await p.goto(`http://localhost:8796/dome.html?f=${f}`); await p.waitForSelector('body[data-ready]', { timeout: 20000 }); await p.waitForTimeout(600);
  await p.screenshot({ path: `dome-${f}@2x.png` });
}
await b.close(); srv.kill(); console.log(JSON.stringify(errs));
