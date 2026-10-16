// Mobile menu (16 Oct 2026): node tools/nav/e2e-mnav.mjs  (needs: python3 -m http.server 8765 in the repo)
import { chromium } from '/Users/shubhanshbhaskar/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
const b = await chromium.launch();
const res = []; const ok = (n, c, x) => res.push((c ? 'PASS ' : 'FAIL ') + n + (c ? '' : '  → ' + JSON.stringify(x)));
for (const page of ['index.html', 'placements.html']) {
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, hasTouch: true, isMobile: true });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  const ev = f => p.evaluate(f);
  await p.goto('http://localhost:8765/' + page, { waitUntil: 'load' }); await p.waitForTimeout(600);
  const T = s => page + ': ' + s;
  ok(T('six top-level rows, built from the desktop nav'), await ev(() => document.querySelectorAll('#mnavList .mnav-item').length === 6), await ev(() => [...document.querySelectorAll('#mnavList .mnav-row')].map(r => r.textContent)));
  ok(T('closed by default, not focusable'), await ev(() => getComputedStyle(document.getElementById('mnav')).visibility === 'hidden'));
  await ev(() => scrollTo(0, 1200)); await p.waitForTimeout(200);
  const y0 = await ev(() => scrollY);
  await p.locator('.nav .menu').tap(); await p.waitForTimeout(700);
  ok(T('opens: white full screen under the bar'), await ev(() => { const m = document.getElementById('mnav'), r = m.getBoundingClientRect(); return m.classList.contains('is-open') && r.top === 0 && r.height >= innerHeight - 1 && getComputedStyle(m).backgroundColor === 'rgb(255, 255, 255)'; }));
  ok(T('bar stays on top, X morph, aria'), await ev(() => { const btn = document.querySelector('.nav .menu'), nb = document.querySelector('.nav').getBoundingClientRect(); const hit = document.elementFromPoint(nb.right - 30, nb.top + 28); return btn.getAttribute('aria-expanded') === 'true' && btn.getAttribute('aria-label') === 'Close menu' && !!hit && !!hit.closest('.nav') && getComputedStyle(btn.querySelector('.m2')).opacity === '0'; }));
  ok(T('dock hidden'), await ev(() => getComputedStyle(document.querySelector('.dock')).opacity === '0'));
  await p.mouse.move(200, 600); await p.mouse.wheel(0, 500); await p.waitForTimeout(400);
  ok(T('a scroll gesture moves the menu, not the page behind'), Math.abs(await ev(() => scrollY) - y0) < 2, [y0, await ev(() => scrollY)]);
  await ev(() => document.getElementById('mnav').scrollTop = 0);
  // accordions
  await p.locator('#mnavList button.mnav-row').nth(0).tap(); await p.waitForTimeout(500);
  ok(T('Programs opens with four campus photos'), await ev(() => { const it = document.querySelector('#mnavList .mnav-item.is-x'); return !!it && it.querySelectorAll('.dn-ic img').length === 4 && [...it.querySelectorAll('.dn-ic img')].every(i => i.complete && i.naturalWidth > 0) && it.querySelector('.mnav-body').getBoundingClientRect().height > 300; }));
  await p.locator('#mnavList button.mnav-row').nth(1).tap(); await p.waitForTimeout(500);
  ok(T('one group open at a time'), await ev(() => document.querySelectorAll('#mnavList .mnav-item.is-x').length === 1 && document.querySelectorAll('#mnavList button[aria-expanded="true"]').length === 1));
  ok(T('repeated labels dropped'), await ev(() => ![...document.querySelectorAll('#mnavList .dn-lab')].some(l => /^(life with nst|entrance tests)$/i.test(l.textContent.trim()))));
  await p.locator('#mnavList button.mnav-row').nth(3).tap(); await p.waitForTimeout(700);
  ok(T('More opens fully in view'), await ev(() => { const r = document.querySelector('#mnavList .mnav-item.is-x').getBoundingClientRect(); return r.bottom <= innerHeight + 2 || r.top <= 90; }));
  ok(T('no horizontal overflow in the menu'), await ev(() => document.getElementById('mnav').scrollWidth <= innerWidth));
  // a placeholder leaves the menu open
  await p.locator('#mnavList .dn-o[href="#"]').first().tap(); await p.waitForTimeout(300);
  ok(T('placeholder link keeps the menu open'), await ev(() => document.getElementById('mnav').classList.contains('is-open')));
  // Esc closes and resets the groups
  await p.keyboard.press('Escape'); await p.waitForTimeout(400);
  ok(T('Esc closes, focus back on the button, groups reset'), await ev(() => !document.getElementById('mnav').classList.contains('is-open') && document.activeElement === document.querySelector('.nav .menu') && !document.querySelector('#mnavList .is-x')));
  ok(T('page scrolls again'), await ev(() => { const y = scrollY; scrollBy(0, 200); return scrollY !== y; }));
  // Ask Newton from the menu opens the chat
  await p.locator('.nav .menu').tap(); await p.waitForTimeout(500);
  await p.locator('#sheetAsk').tap(); await p.waitForTimeout(700);
  ok(T('Ask Newton closes the menu and opens the chat'), await ev(() => !document.getElementById('mnav').classList.contains('is-open') && document.getElementById('ai').classList.contains('is-open')));
  await p.keyboard.press('Escape'); await p.waitForTimeout(500);
  if (page === 'index.html') {
    await ev(() => scrollTo(0, 0)); await p.waitForTimeout(300);
    await p.locator('.nav .menu').tap(); await p.waitForTimeout(500);
    await p.locator('#mnavList button.mnav-row').nth(0).tap(); await p.waitForTimeout(500);
    await p.locator('#mnavList .mnav-item.is-x .dn-foot').tap(); await p.waitForTimeout(1600);
    ok(T('a section link closes the menu and glides there'), await ev(() => { const t = document.getElementById('cities').getBoundingClientRect().top; return !document.getElementById('mnav').classList.contains('is-open') && t > 40 && t < 140; }), await ev(() => document.getElementById('cities').getBoundingClientRect().top));
  } else {
    await p.locator('.nav .menu').tap(); await p.waitForTimeout(500);
    ok(T('Placements row marked as here'), await ev(() => !!document.querySelector('.mnav-row[aria-current="page"] .mnav-here')));
    ok(T('section links go to the homepage'), await ev(() => [...document.querySelectorAll('#mnavList a')].filter(a => a.getAttribute('href') !== '#').every(a => /^(index\.html|placements\.html|admissions\.html|https?:)/.test(a.getAttribute('href')))));
    await p.locator('.nav .menu').tap(); await p.waitForTimeout(300);
  }
  ok(T('no page errors'), errs.length === 0, errs);
  await p.close();
}
// desktop: no hamburger, menu never shows
const d = await b.newPage({ viewport: { width: 1440, height: 900 } });
await d.goto('http://localhost:8765/index.html'); await d.waitForTimeout(400);
ok('desktop: hamburger and menu hidden', await d.evaluate(() => getComputedStyle(document.querySelector('.nav .menu')).display === 'none' && getComputedStyle(document.getElementById('mnav')).display === 'none'));
await b.close();
console.log(res.join('\n')); console.log(res.some(r => r.startsWith('FAIL')) ? 'SOME FAIL' : 'ALL PASS');
