// Desktop section bar (16 Oct 2026): node tools/nav/e2e-snav.mjs  (needs: python3 -m http.server 8765 in the repo)
import { chromium } from '/Users/shubhanshbhaskar/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
const b = await chromium.launch();
const res = []; const ok = (n, c, x) => res.push((c ? 'PASS ' : 'FAIL ') + n + (c ? '' : '  → ' + JSON.stringify(x)));
for (const [page, w] of [['index.html', 1440], ['placements.html', 1440], ['index.html', 1024], ['placements.html', 1920]]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  const ev = (f, a) => p.evaluate(f, a); const T = s => `${page} @${w}: ${s}`;
  await p.goto('http://localhost:8765/' + page); await p.waitForTimeout(500);
  ok(T('hidden over the hero'), await ev(() => !document.getElementById('snav').classList.contains('is-on') && getComputedStyle(document.getElementById('snav')).visibility === 'hidden'));
  const hrefs = await ev(() => [...document.querySelectorAll('#snav .snav-l a')].map(a => a.getAttribute('href')));
  ok(T('every item points at a section on the page'), await ev(h => h.every(x => !!document.getElementById(x.slice(1))), hrefs), hrefs);
  for (const h of [hrefs[2], hrefs[hrefs.length - 2]]) {
    await ev(h => { const t = document.querySelector(h); scrollTo(0, t.getBoundingClientRect().top + scrollY - 400); }, h); await p.waitForTimeout(300);
    await p.click(`#snav a[href="${h}"]`); await p.waitForTimeout(1500);
    const st = await ev(h => { const s = document.getElementById('snav'), a = s.querySelector(`a[href="${h}"]`), pill = s.querySelector('.snav-pill'), t = document.querySelector(h);
      let bx = t; while (bx && !bx.getClientRects().length) bx = bx.firstElementChild;
      const ar = a.getBoundingClientRect(), pr = pill.getBoundingClientRect();
      return { on: s.classList.contains('is-on'), active: a.classList.contains('is-on'), only: s.querySelectorAll('a.is-on').length, top: Math.round((bx || t).getBoundingClientRect().top), pill: Math.abs(ar.left - pr.left) < 2 && Math.abs(ar.width - pr.width) < 2, inView: ar.left >= s.getBoundingClientRect().left && ar.right <= s.getBoundingClientRect().right }; }, h);
    ok(T(`click ${h}: lands under the bar, marked, pill under it`), st.on && st.active && st.only === 1 && st.top >= 128 && st.top <= 156 && st.pill && st.inView, st);
  }
  ok(T('bar sits 8 px under the nav, same width'), await ev(() => { const n = document.querySelector('.nav').getBoundingClientRect(), s = document.getElementById('snav').getBoundingClientRect(); return Math.abs(n.left - s.left) <= 1 && Math.abs(n.right - s.right) <= 1 && Math.abs(s.top - n.bottom - 8) <= 1; }), await ev(() => [document.querySelector('.nav').getBoundingClientRect().toJSON(), document.getElementById('snav').getBoundingClientRect().toJSON()]));
  ok(T('no horizontal page overflow'), await ev(() => document.documentElement.scrollWidth <= innerWidth));
  ok(T('no page errors'), errs.length === 0, errs);
  await p.close();
}
const m = await b.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
for (const page of ['index.html', 'placements.html']) { await m.goto('http://localhost:8765/' + page); await m.waitForTimeout(300); ok(page + ' phone: no section bar', await m.evaluate(() => getComputedStyle(document.getElementById('snav')).display === 'none')); }
await b.close();
console.log(res.join('\n')); console.log(res.some(r => r.startsWith('FAIL')) ? 'SOME FAIL' : 'ALL PASS');
