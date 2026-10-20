/* Campus · Rishihood · phone end-to-end (hero, summary tiles, Facilities & Amenities). Run with the local server on :8765:
   node tools/campus/e2e.mjs */
import { chromium } from '/Users/shubhanshbhaskar/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
const URL = 'http://localhost:8765/campus-rishihood.html';
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 393, height: 852 }, deviceScaleFactor: 2, hasTouch: true, isMobile: true });
const errs = [], bad = [];
p.on('pageerror', e => errs.push(e.message));
p.on('response', r => { if (r.status() >= 400 && r.url().startsWith('http://localhost')) bad.push(r.status() + ' ' + r.url()); });   /* the Inflight widget's own API 404s on localhost */
const res = []; const ok = (n, c, x) => res.push((c ? 'PASS ' : 'FAIL ') + n + (c ? '' : '  → ' + JSON.stringify(x)));
const ev = (f, a) => p.evaluate(f, a);
await p.goto(URL, { waitUntil: 'load' }); await p.waitForTimeout(800);

// hero: his frame's geometry (crumbs at 430, the hero 692 tall), the route figure and its walk
const geo = await ev(() => { const r = s => document.querySelector(s).getBoundingClientRect(); return { crumbs: Math.round(r('.pl-crumbs').top + scrollY), hero: Math.round(r('.cmp-hero').height), proof: Math.round(r('.cmp-proof').height) }; });
ok('hero geometry as his frame (crumbs 430, hero 692, tiles band 210)', geo.crumbs === 430 && geo.hero === 692 && Math.abs(geo.proof - 209.5) <= 1, geo);
ok('hero copy: crumbs, title, lede, one CTA, the trust line', await ev(() => document.querySelector('.pl-crumb span').textContent === 'Delhi NCR' && document.querySelector('.pl-title').textContent === 'B.Tech in CS & AI at Rishihood University' && /Rishihood awards the degree; NST teaches it\./.test(document.querySelector('.pl-lede').textContent) && document.querySelectorAll('.cmp-hero .pl-cta').length === 1 && /Apply to Rishihood/.test(document.querySelector('.cmp-hero .pl-cta').textContent) && /UGC-approved degree/.test(document.querySelector('.cmp-trust').textContent) && /NSDC certified/.test(document.querySelector('.cmp-trust').textContent)));
ok('the route figure (uncoloured, pillar student), the NSAT flag lit as served', await ev(async () => { const html = await (await fetch(location.href)).text(); return !!document.querySelector('.cmp-wall .rt-svg') && document.querySelectorAll('.cmp-wall .rt-flag').length === 5 && /class="rt-flag on" data-i="1"/.test(html) && !document.querySelector('.cmp-wall .m-brick') && !!document.querySelector('#rtStu'); }));
const t0 = await ev(() => document.getElementById('rtStu').getAttribute('transform') || '');
await p.waitForFunction(t => (document.getElementById('rtStu').getAttribute('transform') || '') !== t, t0, { timeout: 6000, polling: 50 }).catch(() => {});
ok('the student walks to the next station', (await ev(() => document.getElementById('rtStu').getAttribute('transform') || '')) !== t0);

// summary tiles
ok('four tiles, his words', await ev(() => [...document.querySelectorAll('.cmp-grid .tile p')].map(p => p.textContent.trim()).join('|') === '4 Years, Residential|93% paid interns, year 2|#22 at ICPC India, 2025|Startup studio on campus'));
ok('the tiles sit between the two hatched bands', await ev(() => document.querySelectorAll('.cmp-proof .hatch').length === 2));

// facilities: his tab, title and arc; the media under it
ok('facilities head: tab with two dots, title, subtitle on one line', await ev(() => { const h = document.querySelector('.cmp-fac-head'), s = h.querySelector('p'); return document.querySelectorAll('#facilities .fest-tab .fest-pg b').length === 2 && h.querySelector('h2').textContent === 'Facilities & Amenities' && s.textContent === 'State-of-the-art facilities at Rishihood University' && s.getBoundingClientRect().height <= 23; }));
ok('the dome: his ellipse (1385 × 1308 at 139, centred)', await ev(() => { const s = document.getElementById('facilities').getBoundingClientRect(), d = document.querySelector('.cmp-dome').getBoundingClientRect(); return Math.round(d.width) === 1385 && Math.round(d.height) === 1308 && Math.round(d.top - s.top) === 139 && Math.abs((d.left + d.width / 2) - (s.left + s.width / 2)) < 1; }));
ok('the campus video fills the arc edge to edge', await ev(() => { const a = document.querySelector('.cmp-art').getBoundingClientRect(), s = document.getElementById('facilities').getBoundingClientRect(), v = document.getElementById('cmpLoop'); return Math.round(a.width) === Math.round(s.width) && Math.round(a.left) === Math.round(s.left) && v.muted && v.loop && v.hasAttribute('playsinline') && /tour-loop\.mp4$/.test(v.src); }));
ok('play button on the picture with its label', await ev(() => !!document.querySelector('#cmpTour .cmp-tour-play') && document.querySelector('.cmp-tour-lab').textContent === 'Campus tour · 1:21'));
ok('the current page’s six keywords, in its order', await ev(() => [...document.querySelectorAll('.cmp-kw-c span')].map(s => s.textContent).join('|') === 'Cutting-edge classrooms|Vibrant auditorium|Fully-equipped gyms|Swimming pool|Nutritious food at the mess|Cozy hostels'));
/* the photos are lazy: load each by bringing it on screen, with a deadline so a missing file fails instead of hanging */
ok('one photo per keyword, four more in the grid, all loaded', await ev(async () => {
  const imgs = [...document.querySelectorAll('.cmp-sp img, .cmp-ft img')];
  for (const i of imgs){ i.loading = 'eager'; i.scrollIntoView({ block: 'center', inline: 'center' }); }
  await Promise.race([Promise.all(imgs.map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; }))), new Promise(r => setTimeout(r, 5000))]);
  return document.querySelectorAll('.cmp-sp').length === 6 && document.querySelectorAll('.cmp-ft').length === 4 && imgs.every(i => i.naturalWidth > 0);
}));
await ev(() => document.getElementById('cmpSpaces').scrollTo({ left: 0, behavior: 'auto' })); await p.waitForTimeout(300);
// chip → strip
await ev(() => document.getElementById('cmpKw').scrollIntoView({ block: 'center' })); await p.waitForTimeout(300);
await p.locator('.cmp-kw-c[data-k="3"]').tap(); await p.waitForTimeout(900);
ok('a chip lights and brings its photo to the left edge', await ev(() => { const s = document.getElementById('cmpSpaces'), c = document.querySelector('.cmp-sp[data-k="3"]'); return document.querySelector('.cmp-kw-c.is-on').dataset.k === '3' && Math.abs(c.getBoundingClientRect().left - s.getBoundingClientRect().left - 16) < 3; }));
// strip → chip
await ev(() => { const s = document.getElementById('cmpSpaces'); s.scrollTo({ left: document.querySelector('.cmp-sp[data-k="1"]').offsetLeft - 16, behavior: 'auto' }); }); await p.waitForTimeout(400);
ok('swiping the strip lights the chip of the photo in front', await ev(() => document.querySelector('.cmp-kw-c.is-on').dataset.k === '1'));
await ev(() => { const s = document.getElementById('cmpSpaces'); s.scrollTo({ left: s.scrollWidth, behavior: 'auto' }); }); await p.waitForTimeout(400);
ok('the end of the strip lights the last chip, scrolled into view', await ev(() => { const c = document.querySelector('.cmp-kw-c.is-on'), k = document.getElementById('cmpKw').getBoundingClientRect(), r = c.getBoundingClientRect(); return c.dataset.k === '5' && r.right <= k.right + 1; }));
ok('the visit CTA and the ruler at the foot', await ev(() => /Book a campus visit/.test(document.querySelector('.cmp-fac-cta').textContent) && Math.round(document.getElementById('facilities').getBoundingClientRect().bottom - document.querySelector('.cmp-ruler').getBoundingClientRect().bottom) === 0));
ok('placeholder links do not jump', await ev(() => { scrollTo(0, 1800); const y = scrollY; document.querySelector('.cmp-fac-cta').click(); return Math.abs(scrollY - y) < 2; }));
// the player
await ev(() => document.getElementById('cmpTour').scrollIntoView({ block: 'center' })); await p.waitForTimeout(300);
const yBefore = await ev(() => scrollY);
await p.locator('#cmpTour').tap(); await p.waitForTimeout(400);
ok('the play button opens the tour full-screen, scroll locked', await ev(() => { const t = document.getElementById('cmpTv'), r = t.getBoundingClientRect(); return t.classList.contains('is-open') && t.parentNode === document.body && r.width === innerWidth && r.height === innerHeight && getComputedStyle(document.documentElement).overflow === 'hidden' && /tour\.mp4$/.test(document.getElementById('cmpTvV').src); }));
await p.keyboard.press('Escape'); await p.waitForTimeout(400);
ok('Esc closes it, focus back on the play button, page where it was', await ev(y => !document.getElementById('cmpTv').classList.contains('is-open') && document.activeElement.id === 'cmpTour' && Math.abs(scrollY - y) < 2, yBefore));
await p.locator('#cmpTour').tap(); await p.waitForTimeout(400); await p.locator('#cmpTvX').tap(); await p.waitForTimeout(400);
ok('the X closes it', await ev(() => !document.getElementById('cmpTv').classList.contains('is-open')));

// widths: no sideways scroll, one-line subtitle
for (const w of [360, 390, 402, 430]) {
  const f = await b.newPage({ viewport: { width: w, height: 800 } });
  await f.goto(URL); await f.waitForTimeout(400);
  const m = await f.evaluate(() => ({ x: document.documentElement.scrollWidth - innerWidth, sub: Math.round(document.querySelector('.cmp-fac-head p').getBoundingClientRect().width), vw: innerWidth, art: Math.round(document.querySelector('.cmp-art').getBoundingClientRect().width) }));
  ok(`${w} px: no sideways scroll, subtitle fits, video full width`, m.x === 0 && m.sub <= m.vw - 16 && m.art === m.vw, m);
  await f.close();
}
// desktop: the phone column
const d = await b.newPage({ viewport: { width: 1440, height: 900 } });
d.on('pageerror', e => errs.push('dt: ' + e.message));
await d.goto(URL); await d.waitForTimeout(500);
ok('desktop: the 402 px phone column, the video within it', await d.evaluate(() => { const r = document.getElementById('page').getBoundingClientRect(), a = document.querySelector('.cmp-art').getBoundingClientRect(); return r.width <= 402 && Math.round(a.width) === Math.round(r.width) && document.documentElement.scrollWidth <= innerWidth; }));
ok('no page errors, no 4xx', errs.length === 0 && bad.length === 0, [errs, bad]);
await b.close();

// videos: the loop plays only while the section is on screen; the tour plays when opened
const wb = await chromium.launch();
const wp = await wb.newPage({ viewport: { width: 393, height: 852 } });
await wp.goto(URL, { waitUntil: 'load' }); await wp.waitForTimeout(500);
ok('loop paused while the section is off screen', await wp.evaluate(() => document.getElementById('cmpLoop').paused));
await wp.evaluate(() => document.querySelector('.cmp-tour').scrollIntoView({ block: 'center' }));
await wp.waitForFunction(() => { const v = document.getElementById('cmpLoop'); return !v.paused && v.currentTime > .3; }, null, { timeout: 8000 }).catch(() => {});
ok('loop plays, silent, once the section is on screen', await wp.evaluate(() => { const v = document.getElementById('cmpLoop'); return !v.paused && v.currentTime > .3 && v.muted; }));
await wp.click('#cmpTour');
await wp.waitForFunction(() => { const v = document.getElementById('cmpTvV'); return v.currentTime > .3 || v.readyState >= 2; }, null, { timeout: 10000 }).catch(() => {});
ok('the tour loads in the player, the loop pauses', await wp.evaluate(() => { const v = document.getElementById('cmpTvV'); return v.readyState >= 2 && document.getElementById('cmpLoop').paused && Math.abs(v.videoWidth / v.videoHeight - 16 / 9) < .01; }));
await wp.keyboard.press('Escape'); await wp.waitForTimeout(300);
ok('closing pauses the tour and resumes the loop', await wp.evaluate(() => document.getElementById('cmpTvV').paused && !document.getElementById('cmpLoop').paused));
await wp.evaluate(() => scrollTo(0, 0)); await wp.waitForTimeout(500);
ok('loop pauses again when scrolled away', await wp.evaluate(() => document.getElementById('cmpLoop').paused));
await wb.close();

// reduced motion: nothing moves, the poster stands in for the loop
const rb = await chromium.launch();
const rp = await rb.newPage({ viewport: { width: 393, height: 852 }, reducedMotion: 'reduce' });
await rp.goto(URL); await rp.waitForTimeout(300);
await rp.evaluate(() => document.querySelector('.cmp-tour').scrollIntoView({ block: 'center' })); await rp.waitForTimeout(800);
ok('reduced motion: no beam, no loop, the student stays at NSAT', await rp.evaluate(async () => { const html = await (await fetch(location.href)).text(), served = (html.match(/id="rtStu"[^>]*transform="([^"]+)"/) || html.match(/transform="([^"]+)"[^>]*id="rtStu"/) || [])[1]; return !document.getElementById('facilities').classList.contains('is-live') && document.getElementById('cmpLoop').paused && !!served && document.getElementById('rtStu').getAttribute('transform') === served; }));
await rb.close();

console.log(res.join('\n')); console.log(res.some(r => r.startsWith('FAIL')) ? 'SOME FAIL' : 'ALL PASS');
