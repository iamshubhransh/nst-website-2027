import { chromium } from '/Users/shubhanshbhaskar/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
const b = await chromium.launch(); const errs = [], fails = [];
const ok = (n, c, x) => { console.log((c ? 'PASS ' : 'FAIL ') + n + (x !== undefined ? '  → ' + JSON.stringify(x) : '')); if (!c) fails.push(n); };
const p = await (await b.newContext({viewport:{width:1440,height:900}, deviceScaleFactor:2})).newPage();
p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
await p.goto('http://localhost:8777/index.html'); await p.waitForTimeout(1200);
ok('ten controllers', await p.evaluate(() => Object.keys(window.__dnFigs || {}).length) === 10);
await p.hover('.dn-t[data-m=more]'); await p.waitForTimeout(600);
const keys = ['info', 'card', 'news', 'chat', 'landmark', 'trophy', 'rocket'];
for (const k of keys) {
  await p.hover(`#dnMore .dn-o[data-k=${k}]`); await p.waitForTimeout(900);
  const r = await p.evaluate((k) => { const f = document.querySelector('#dnMore .dn-fig.is-on'); const ill = document.querySelector('#dnMore .dn-ill'); return f && { k: f.dataset.k, bg: getComputedStyle(ill).backgroundColor, acc: f.dataset.acc, svgH: Math.round(f.querySelector('.dn-svg').getBoundingClientRect().height) }; }, k);
  ok(k + ' shows its figure in its colour', r && r.k === k && r.svgH === 420, r);
  await p.locator('#dnMore').screenshot({ path: `shots/site-${k}.png` });
}
ok('one figure at a time', await p.evaluate(() => document.querySelectorAll('#dnMore .dn-fig.is-on').length) === 1);
await p.hover('.dn-t[data-m=life]'); await p.waitForTimeout(600);
ok('Life figures still work', await p.evaluate(() => document.querySelector('#dnLife .dn-fig.is-on') && document.querySelector('#dnLife .dn-fig.is-on').dataset.k === 'users'));
ok('no page errors', errs.length === 0, errs);
console.log(fails.length ? 'FAILED: ' + fails.join(', ') : 'ALL PASS'); await b.close();
