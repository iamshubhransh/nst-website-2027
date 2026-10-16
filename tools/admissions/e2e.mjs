/* Admissions · phone end-to-end. Run with the local server on :8765:  node tools/admissions/e2e.mjs */
import { chromium } from '/Users/shubhanshbhaskar/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, hasTouch: true, isMobile: true });
const errs = [], bad = [];
p.on('pageerror', e => errs.push(e.message));
p.on('response', r => { if (r.status() >= 400 && r.url().includes('localhost')) bad.push(r.status() + ' ' + r.url()); });
const res = []; const ok = (n, c, x) => res.push((c ? 'PASS ' : 'FAIL ') + n + (c ? '' : '  → ' + JSON.stringify(x)));
const ev = (f, a) => p.evaluate(f, a);
await p.goto('http://localhost:8765/admissions.html', { waitUntil: 'load' }); await p.waitForTimeout(800);

// hero: the shared placements hero, the route figure, the walk
ok('hero copy: crumbs, title, CTA', await ev(() => document.querySelector('.pl-crumb span').textContent === 'Admissions' && /six steps/.test(document.querySelector('.pl-title').textContent) && document.querySelectorAll('.adm-hero .pl-cta').length === 1));
ok('route figure drawn; as served, the NSAT flag is lit', await ev(async () => { const html = await (await fetch(location.href)).text(); return !!document.querySelector('.adm-wall .rt-svg') && document.querySelectorAll('.rt-flag').length === 5 && /class="rt-flag on" data-i="1"/.test(html); }));
/* the walk, checked by events rather than sleeps: standing (a flag lit) → walking (a stride pose) → arrival (the next flag) */
const shown = () => ev(() => [...document.querySelectorAll('#rtStu .rt-pose:not([display])')].map(q => q.dataset.p));
await p.waitForFunction(() => !!document.querySelector('.rt-flag.on'), null, { timeout: 9000, polling: 30 });
const s0 = +(await ev(() => document.querySelector('.rt-flag.on').dataset.i));
const standing = await shown();
ok('standing pose while it waits at a station', standing.length === 1 && standing[0] === 'idle', standing);
const t0 = await ev(() => document.getElementById('rtStu').getAttribute('transform'));
await p.waitForFunction(() => { const q = document.querySelector('#rtStu .rt-pose:not([display])'); return q && q.dataset.p !== 'idle'; }, null, { timeout: 6000, polling: 30 });
const mid = await shown();
ok('mid-walk it shows one stride pose (it walks, not glides)', mid.length === 1 && mid[0] !== 'idle', mid);
const seen = new Set(); for (let k = 0; k < 10; k++){ seen.add((await shown())[0]); await p.waitForTimeout(60); }
ok('the stride poses cycle', seen.size >= 3, [...seen]);
const want = String(s0 + 1 <= 4 ? s0 + 1 : 0);
await p.waitForFunction((w) => (document.querySelector('.rt-flag.on') || {}).dataset?.i === w, want, { timeout: 9000, polling: 30 }).catch(() => {});
const t1 = await ev(() => document.getElementById('rtStu').getAttribute('transform'));
const lit = await ev(() => (document.querySelector('.rt-flag.on') || {}).dataset?.i);
ok('the student walks to the next station and its flag lights', t0 !== t1 && lit === want, [t0, t1, lit, want]);
ok('hero strip: online and proctored, scholarships, campuses (looped)', await ev(() => { const t = [...document.querySelectorAll('.adm-facts .pl-hl b')].map(b => b.textContent); return t.length === 6 && ['Online, proctored', 'Scholarships up to 100%', '4 campuses'].every(x => t.filter(y => y === x).length === 2); }));
ok('the next-NSAT ticket: date, deadline, CTA in the stub, registered count', await ev(() => { const t = document.querySelector('.adm-ticket'); return !!t && t.querySelector('.adm-tk-date').textContent === '7 January 2027' && /6 January/.test(t.querySelector('.adm-tk-dl').textContent) && !!t.querySelector('.adm-tk-bot .pl-cta') && /31,352/.test(t.querySelector('.adm-tk-proof').textContent) && t.querySelectorAll('.adm-tk-proof img').length === 3; }));

ok('the student is a person: legs, shirt, arms, backpack, head, hair', await ev(() => ['rt-legs','rt-shirt','rt-arm','rt-bag','rt-skin','rt-hair'].every(c => document.querySelector('#rtStu .' + c))));
ok('every section subtext sits on one line', await ev(() => [...document.querySelectorAll('.bk-sub')].every(s => Math.round(s.getBoundingClientRect().height) <= Math.ceil(parseFloat(getComputedStyle(s).lineHeight)))));

// routes chooser
await ev(() => document.getElementById('routes').scrollIntoView({ block: 'center' })); await p.waitForTimeout(300);
const openH0 = await ev(() => document.querySelector('.adm-rc[data-r="2"]').getBoundingClientRect().height);
await p.locator('.adm-pick button[data-r="2"]').tap(); await p.waitForTimeout(400);
ok('chooser lights and opens the matching card', await ev(() => document.querySelector('.adm-rc[data-r="2"]').classList.contains('is-on') && document.querySelectorAll('.adm-rc.is-on').length === 1 && document.querySelector('.adm-pick button[data-r="2"]').getAttribute('aria-selected') === 'true') && (await ev(() => document.querySelector('.adm-rc[data-r="2"]').getBoundingClientRect().height)) > openH0 + 40);

// NSAT paper, timeline, scholarships, loans
ok('NSAT: four parts with answer bubbles, two dates, three kits', await ev(() => document.querySelectorAll('.adm-parts li').length === 4 && document.querySelectorAll('.adm-bub i').length === 16 && document.querySelectorAll('.adm-dates p').length === 2 && document.querySelectorAll('.adm-kit').length === 3));
ok('six steps, each with its object; NSAT marked', await ev(() => document.querySelectorAll('.adm-tl li').length === 6 && document.querySelectorAll('.adm-tl .adm-ic-svg').length === 6 && document.querySelector('.adm-tl li.is-on h3').textContent === 'Take NSAT'));
ok('scholarships: JEE Excellence lead + three', await ev(() => !!document.querySelector('.adm-jes') && document.querySelectorAll('.adm-s').length === 3));
ok('loans: three figures, five lenders', await ev(() => document.querySelectorAll('.adm-loan-stats p').length === 3 && document.querySelectorAll('.adm-lenders span:not(.more)').length === 5));

// campuses swipe → dots
await ev(() => document.getElementById('campuses').scrollIntoView({ block: 'center' })); await p.waitForTimeout(300);
ok('four campus photos load', await ev(() => [...document.querySelectorAll('.adm-cc img')].every(i => i.complete && i.naturalWidth > 0) && document.querySelectorAll('.adm-cc').length === 4));
ok('first campus card sits on the 16 px gutter', await ev(() => Math.abs(document.querySelector('.adm-cc').getBoundingClientRect().left - 16) < 1));
await ev(() => { const c = document.querySelector('.adm-camps'); c.scrollTo({ left: (c.firstElementChild.offsetWidth + 12) * 2 }); }); await p.waitForTimeout(500);
ok('dots follow the swipe', await ev(() => [...document.querySelectorAll('.adm-dots i')].findIndex(d => d.classList.contains('on')) === 2));

// FAQ
await ev(() => document.getElementById('faq').scrollIntoView({ block: 'center' })); await p.waitForTimeout(200);
await p.locator('#plAcc .pl-q button').nth(2).tap(); await p.waitForTimeout(500);
ok('FAQ: one open at a time', await ev(() => document.querySelectorAll('#plAcc .pl-q.is-open').length === 1 && document.querySelectorAll('#plAcc .pl-q')[2].classList.contains('is-open')));

// page-wide
ok('images all load', await ev(() => [...document.images].filter(i => i.loading !== 'lazy').every(i => i.complete && i.naturalWidth > 0)), await ev(() => [...document.images].filter(i => !(i.complete && i.naturalWidth > 0)).map(i => i.src)));
ok('no horizontal overflow', await ev(() => document.documentElement.scrollWidth <= innerWidth));
ok('placeholder links do not jump', await ev(() => { scrollTo(0, 3000); const y = scrollY; document.querySelector('.adm-kit').click(); return Math.abs(scrollY - y) < 2; }));
await ev(() => scrollTo(0, 2400)); await p.waitForTimeout(400);
ok('dock shows after the hero', await ev(() => document.getElementById('dock').classList.contains('is-on')));
await ev(() => scrollTo(0, 0)); await p.waitForTimeout(400);
await p.locator('.nav .menu').tap(); await p.waitForTimeout(500);
ok('menu opens with Admissions marked as here', await ev(() => document.getElementById('mnav').classList.contains('is-open') && !!document.querySelector('.mnav-row[href="admissions.html"] .mnav-here')));
await p.locator('.nav .menu').tap(); await p.waitForTimeout(300);

// the first fold: the CTA is on screen with the browser's toolbars showing (visible heights of common phones)
for (const [w, h] of [[375, 548], [360, 560], [390, 664], [412, 780]]) {
  const f = await b.newPage({ viewport: { width: w, height: h }, isMobile: true, hasTouch: true });
  await f.goto('http://localhost:8765/admissions.html'); await f.waitForTimeout(500);
  const m = await f.evaluate(() => ({ cta: Math.round(document.querySelector('.adm-hero .pl-cta').getBoundingClientRect().bottom), vh: innerHeight }));
  ok(`first fold ${w}×${h}: the CTA is visible`, m.cta <= m.vh - 8, m);
  await f.close();
}

// wide screens: the phone column (no desktop design yet)
const d = await b.newPage({ viewport: { width: 1440, height: 900 } });
d.on('pageerror', e => errs.push('dt: ' + e.message));
await d.goto('http://localhost:8765/admissions.html'); await d.waitForTimeout(500);
ok('desktop: the 402 px phone column, no overflow', await d.evaluate(() => { const r = document.getElementById('page').getBoundingClientRect(); return r.width <= 402 && document.documentElement.scrollWidth <= innerWidth; }), await d.evaluate(() => document.getElementById('page').getBoundingClientRect().width));
ok('no page errors, no 4xx', errs.length === 0 && bad.length === 0, [errs, bad]);
await b.close();
console.log(res.join('\n')); console.log(res.some(r => r.startsWith('FAIL')) ? 'SOME FAIL' : 'ALL PASS');
