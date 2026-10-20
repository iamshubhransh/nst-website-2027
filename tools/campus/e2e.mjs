/* Campus · Rishihood · phone end-to-end (the video hero, summary tiles, Facilities & Amenities and the rest). Run with the local server on :8765:
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

// hero (20 Oct, his ask): the campus video fills the first screen; play, name, three facts, one action
ok('hero fills the first screen, the loop behind it (muted, looping, inline)', await ev(() => { const h = document.getElementById('top').getBoundingClientRect(), v = document.getElementById('cmpLoop'); return document.getElementById('top').classList.contains('cmp-hv') && Math.abs(h.height - innerHeight) <= 1 && h.top === 0 && v.closest('#top') && v.muted && v.loop && v.hasAttribute('playsinline') && /tour-hero\.mp4$/.test(v.src); }));
ok('hero copy: crumbs, the h1 (B.Tech in CS & AI at Rishihood University), four facts, one CTA, the degree note on one line', await ev(() => { const h1 = document.querySelector('.cmp-hv-h').textContent.replace(/\s+/g, ' ').trim(); return document.querySelector('.cmp-hv-crumb span').textContent === 'Delhi NCR' && /^B\.Tech in CS & AI at Rishihood University/.test(h1) && document.querySelectorAll('.cmp-hv-stats span').length === 4 && document.querySelector('.cmp-hv-note').getBoundingClientRect().height <= 19 && document.querySelectorAll('#top .pl-cta').length === 1 && /Apply to Rishihood/.test(document.querySelector('#top .pl-cta').textContent) && /Rishihood awards the degree; NST teaches it/.test(document.querySelector('.cmp-hv-note').textContent); }));
ok('the play button and its label in the hero', await ev(() => !!document.querySelector('#top #cmpTour .cmp-tour-play') && document.querySelector('#top .cmp-tour-lab').textContent === 'Campus tour · 1:21'));
ok('the title at 24/32, two lines, the mark beside Rishihood on the second', await ev(() => { const h = document.querySelector('.cmp-hv-h'), cs = getComputedStyle(h), m = h.querySelector('.cmp-hv-name img').getBoundingClientRect(), n = h.querySelector('.cmp-hv-name').getBoundingClientRect(), hb = h.getBoundingClientRect(); return cs.fontSize === '24px' && cs.lineHeight === '32px' && Math.round(hb.height) === 64 && m.top > hb.top + 30 && Math.abs(m.left - n.left) < 2 && m.left < hb.left + 4; }));
ok('the hero copy sits on the first screen, clear of the nav', await ev(() => { const c = document.querySelector('.cmp-hv-copy').getBoundingClientRect(), n = document.querySelector('.nav').getBoundingClientRect(), p = document.querySelector('.cmp-tour-play').getBoundingClientRect(); return c.bottom <= innerHeight && p.top > n.bottom && p.bottom < c.top; }));

// summary tiles
ok('four tiles, his words', await ev(() => [...document.querySelectorAll('.cmp-grid .tile p')].map(p => p.textContent.trim()).join('|') === '4 Years, Residential|93% paid interns, year 2|#22 at ICPC India, 2025|Startup studio on campus'));
ok('the tiles sit between the two hatched bands', await ev(() => document.querySelectorAll('.cmp-proof .hatch').length === 2));

// facilities: his tab, title and arc; the media under it
ok('facilities head: tab with two dots, title, subtitle on one line', await ev(() => { const h = document.querySelector('.cmp-fac-head'), s = h.querySelector('p'); return document.querySelectorAll('#facilities .fest-tab .fest-pg b').length === 2 && h.querySelector('h2').textContent === 'Facilities & Amenities' && s.textContent === 'State-of-the-art facilities at Rishihood University' && s.getBoundingClientRect().height <= 23; }));
ok('the dome: his ellipse (1385 × 1308 at 139, centred)', await ev(() => { const s = document.getElementById('facilities').getBoundingClientRect(), d = document.querySelector('.cmp-dome').getBoundingClientRect(); return Math.round(d.width) === 1385 && Math.round(d.height) === 1308 && Math.round(d.top - s.top) === 139 && Math.abs((d.left + d.width / 2) - (s.left + s.width / 2)) < 1; }));
ok('facilities: no video in the dome now; it opens on the keywords', await ev(() => !document.querySelector('#facilities video') && !document.querySelector('#facilities .cmp-tour') && document.getElementById('cmpKw').getBoundingClientRect().top - document.querySelector('.cmp-dome').getBoundingClientRect().top > 40));
ok('the current page’s six keywords, in its order', await ev(() => [...document.querySelectorAll('.cmp-kw-c span')].map(s => s.textContent).join('|') === 'Cutting-edge classrooms|Vibrant auditorium|Fully-equipped gyms|Swimming pool|Nutritious food at the mess|Cozy hostels'));
// the facilities carousel (20 Oct, his ask): the photos fill the arc, one after another, with six progress segments
ok('six photos fill the arc edge to edge, the first on screen, its name and number over it', await ev(() => { const a = document.querySelector('.cmp-fart').getBoundingClientRect(), s = document.getElementById('facilities').getBoundingClientRect(), on = document.querySelectorAll('.cmp-fs.is-on'); return document.querySelectorAll('.cmp-fs').length === 6 && Math.round(a.width) === Math.round(s.width) && on.length === 1 && on[0].dataset.k === '0' && document.getElementById('cmpFN').textContent === '01 / 06' && document.getElementById('cmpFT').textContent === 'Cutting-edge classrooms' && document.querySelectorAll('#cmpFSeg button').length === 6; }));
ok('it waits while off screen (paused)', await ev(() => document.getElementById('facilities').classList.contains('is-paused')));
await ev(() => document.getElementById('cmpFStage').scrollIntoView({ block: 'center' }));
await p.waitForFunction(() => document.getElementById('cmpFN').textContent === '02 / 06', null, { timeout: 7000, polling: 100 }).catch(() => {});
ok('on screen it moves on by itself when the segment fills; the chip follows', await ev(() => document.getElementById('cmpFT').textContent === 'Vibrant auditorium' && document.querySelector('.cmp-fs.is-on').dataset.k === '1' && document.querySelector('#cmpFSeg .is-done').dataset.k === '0' && document.querySelector('.cmp-kw-c.is-on').dataset.k === '1'));
await p.locator('#cmpFSeg button[data-k="4"]').tap(); await p.waitForTimeout(300);
ok('a segment jumps to its photo', await ev(() => document.getElementById('cmpFT').textContent === 'Nutritious food at the mess' && document.querySelectorAll('#cmpFSeg .is-done').length === 4));
await ev(() => document.getElementById('cmpKw').scrollIntoView({ block: 'center' })); await p.waitForTimeout(200);
await p.locator('.cmp-kw-c[data-k="2"]').tap(); await p.waitForTimeout(400);
ok('a chip jumps to its photo, lit and in view', await ev(() => { const c = document.querySelector('.cmp-kw-c.is-on'), k = document.getElementById('cmpKw').getBoundingClientRect(), r = c.getBoundingClientRect(); return document.getElementById('cmpFT').textContent === 'Fully-equipped gyms' && c.dataset.k === '2' && r.left >= k.left - 1 && r.right <= k.right + 1; }));
await ev(() => document.getElementById('cmpFStage').scrollIntoView({ block: 'center' })); await p.waitForTimeout(200);
{ const r = await ev(() => { const b = document.getElementById('cmpFStage').getBoundingClientRect(); return { x: b.left + b.width / 2, y: b.top + 200 }; });
  await p.mouse.move(r.x + 80, r.y); await p.mouse.down(); await p.mouse.move(r.x - 60, r.y, { steps: 6 }); await p.mouse.up(); await p.waitForTimeout(300); }
ok('swiping left moves to the next photo', await ev(() => document.getElementById('cmpFT').textContent === 'Swimming pool'));
{ const r = await ev(() => { const b = document.getElementById('cmpFStage').getBoundingClientRect(); return { x: b.left + b.width / 2, y: b.top + 200 }; });
  await p.mouse.move(r.x - 80, r.y); await p.mouse.down(); await p.mouse.move(r.x + 60, r.y, { steps: 6 }); await p.mouse.up(); await p.waitForTimeout(300); }
ok('swiping right moves back', await ev(() => document.getElementById('cmpFT').textContent === 'Fully-equipped gyms'));
ok('all six photos load', await ev(async () => { const imgs = [...document.querySelectorAll('.cmp-fs, .cmp-ft img')]; for (const i of imgs){ i.loading = 'eager'; } await Promise.race([Promise.all(imgs.map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; }))), new Promise(r => setTimeout(r, 5000))]); return imgs.every(i => i.naturalWidth > 0); }));
ok('the visit CTA and the ruler at the foot', await ev(() => /Book a campus visit/.test(document.querySelector('.cmp-fac-cta').textContent) && Math.round(document.getElementById('facilities').getBoundingClientRect().bottom - document.querySelector('.cmp-ruler').getBoundingClientRect().bottom) === 0));
ok('placeholder links do not jump', await ev(() => { scrollTo(0, 1800); const y = scrollY; document.querySelector('.cmp-fac-cta').click(); return Math.abs(scrollY - y) < 2; }));
// the player
await ev(() => scrollTo(0, 0)); await p.waitForTimeout(300);
const yBefore = await ev(() => scrollY);
await p.locator('#cmpTour').tap(); await p.waitForTimeout(400);
ok('the play button opens the tour full-screen, scroll locked', await ev(() => { const t = document.getElementById('cmpTv'), r = t.getBoundingClientRect(); return t.classList.contains('is-open') && t.parentNode === document.body && r.width === innerWidth && r.height === innerHeight && getComputedStyle(document.documentElement).overflow === 'hidden' && /tour\.mp4$/.test(document.getElementById('cmpTvV').src); }));
await p.keyboard.press('Escape'); await p.waitForTimeout(400);
ok('Esc closes it, focus back on the play button, page where it was', await ev(y => !document.getElementById('cmpTv').classList.contains('is-open') && document.activeElement.id === 'cmpTour' && Math.abs(scrollY - y) < 2, yBefore));
await p.locator('#cmpTour').tap(); await p.waitForTimeout(400); await p.locator('#cmpTvX').tap(); await p.waitForTimeout(400);
ok('the X closes it', await ev(() => !document.getElementById('cmpTv').classList.contains('is-open')));

// the rest of the page (his frame 745:67391): order, then each section's interaction
ok('sections in his order', await ev(() => [...document.querySelectorAll('#page > section, #page main > section')].map(s => s.id).filter(Boolean).join(' ') === 'top facilities only scholarships curriculum fees loans laptop visit faq'), await ev(() => [...document.querySelectorAll('section[id]')].map(s => s.id)));
ok('every section subtext on one line', await ev(() => [...document.querySelectorAll('.bk-sub')].every(s => Math.round(s.getBoundingClientRect().height) <= Math.ceil(parseFloat(getComputedStyle(s).lineHeight)))));
ok('only at Rishihood is light: the grey band, a white card, dark type', await ev(() => getComputedStyle(document.getElementById('only')).backgroundColor === 'rgb(246, 247, 249)' && getComputedStyle(document.querySelector('.cmp-oc.is-on')).backgroundColor === 'rgb(255, 255, 255)' && getComputedStyle(document.querySelector('.cmp-oc.is-on h3')).color === 'rgb(22, 25, 29)'));
await p.locator('.cmp-otabs [data-o="1"]').tap(); await p.waitForTimeout(200);
ok('only at Rishihood: the tabs swap Venture Studio for Neutron', await ev(() => document.querySelector('.cmp-oc[data-o="1"]').classList.contains('is-on') && getComputedStyle(document.querySelector('.cmp-oc[data-o="0"]')).display === 'none' && /Neutron/.test(document.querySelector('.cmp-oc.is-on h3').textContent)));
await p.locator('.cmp-otabs [data-o="0"]').tap(); await p.waitForTimeout(200);
ok('scholarships: JEE Excellence 100% and the three schemes', await ev(() => /100%/.test(document.querySelector('.adm-jes-big b').textContent) && document.querySelectorAll('#scholarships .adm-s').length === 3));
ok('curriculum: four year tabs, Year 1 open with six skills and three projects', await ev(() => document.querySelectorAll('#cmpYTabs button').length === 4 && /Year 1 · Build/.test(document.querySelector('.cmp-yk').textContent) && document.querySelectorAll('.cmp-ychips span:not(.is-more)').length === 6 && document.querySelectorAll('.cmp-yproj figure').length === 3));
ok('curriculum: the four year tabs fill the row at equal widths', await ev(() => { const t = [...document.querySelectorAll('#cmpYTabs button')].map(b => b.getBoundingClientRect()), row = document.getElementById('cmpYTabs').getBoundingClientRect(); return t.every(r => Math.abs(r.width - t[0].width) <= 1) && Math.abs(t[0].left - row.left) < 1 && Math.abs(t[3].right - row.right) < 1;   /* 1 px: layout rounds the shares */ }));
await ev(() => document.getElementById('curriculum').scrollIntoView({ block: 'center' })); await p.locator('#cmpYTabs [data-y="3"]').tap(); await p.waitForTimeout(400);
ok('curriculum: Year 4 shows its outcome, projects and the mandatory note', await ev(() => /Year 4 · Succeed/.test(document.querySelector('.cmp-yk').textContent) && /mandatory/.test(document.querySelector('.cmp-ynote').textContent) && [...document.querySelectorAll('.cmp-yproj img')].every(i => /y4-/.test(i.src))));
ok('fees: no programme total; semester 1 heads the card (₹4,10,000), eight bars', await ev(() => { const t = document.getElementById('fees').textContent; return !/lakh|26\.9|four years/.test(t) && document.querySelector('#cmpFTot span').textContent === 'Semester 1' && document.querySelector('#cmpFTot b').textContent === '₹4,10,000' && document.querySelectorAll('.cmp-bar').length === 8 && document.querySelector('.cmp-bar.is-on').dataset.i === '0' && document.querySelectorAll('#cmpSem .cmp-fr').length === 4; }));
ok('fees: each row centred on its band (no stray margins around the dividers)', await ev(() => [...document.querySelectorAll('#cmpSem .cmp-fr')].every(r => { const cs = getComputedStyle(r), s = r.querySelector('span').getBoundingClientRect(), b = r.getBoundingClientRect(); return cs.marginTop === '0px' && cs.marginBottom === '0px' && Math.abs((s.top + s.height / 2) - (b.top + b.height / 2)) < 1.5; })));
await ev(() => document.getElementById('fees').scrollIntoView({ block: 'center' })); await p.locator('.cmp-bar[data-i="6"]').tap(); await p.waitForTimeout(200);
ok('fees: semester 7 heads the card at ₹2,40,000, tuition only', await ev(() => { const t = document.getElementById('cmpSem').textContent; return document.querySelector('#cmpFTot span').textContent === 'Semester 7' && document.querySelector('#cmpFTot b').textContent === '₹2,40,000' && document.querySelectorAll('#cmpSem .cmp-fr').length === 1 && !/Hostel/.test(t.replace('no hostel', '')); }));
await ev(() => document.getElementById('loans').scrollIntoView({ block: 'center' })); await p.locator('.adm-lt[data-l="axis"]').tap(); await p.waitForTimeout(200);
ok('loans: picking Axis shows its terms', await ev(() => document.getElementById('admLName').textContent === 'Axis Bank' && document.getElementById('admLRate').textContent === '10.50%'));
await p.locator('.adm-lseg button[data-t="1"]').tap(); await p.waitForTimeout(200);
ok('loans: Unsecured switches the rate', await ev(() => document.getElementById('admLRate').textContent === '11.25%'));
await ev(() => document.getElementById('laptop').scrollIntoView({ block: 'center' })); await p.locator('.cmp-mseg [data-m="1"]').tap(); await p.waitForTimeout(700)   /* past the crossfade */;
ok('laptop: Bring your own shows the two specs', await ev(() => { const p = document.querySelector('.cmp-mp.is-on'); return p.dataset.m === '1' && /M1 to M5 · 16 GB · 512 GB/.test(p.textContent) && /M4 or M5 only/.test(p.textContent); }));
// the lid follows the scroll: shut while the MacBook is far from the middle of the screen, open at the middle
{ const lidAt = async (off) => { await ev(o => { const r = document.getElementById('cmpLap').getBoundingClientRect(); scrollTo(0, scrollY + r.top + r.height / 2 - innerHeight / 2 + o); }, off); await p.waitForTimeout(1300); return ev(() => parseFloat(getComputedStyle(document.getElementById('cmpLid')).getPropertyValue('--lid'))); };
  await p.locator('.cmp-mseg [data-m="0"]').tap(); await p.waitForTimeout(700);
  const far = await lidAt(380), mid = await lidAt(0), half = await lidAt(190), below = await lidAt(-380);
  ok('laptop: the lid opens with the scroll (shut far off, open at the middle, between in between, shut again past it)', far <= -87 && Math.abs(mid) < .5 && half < -10 && half > -80 && below <= -87, { far, mid, half, below });
  await p.locator('.cmp-mseg [data-m="1"]').tap(); await p.waitForTimeout(700); }
ok('laptop: the real MacBook Pro on the stage, swapped by the switch', await ev(() => { const on = document.querySelector('.cmp-mimg.is-on'); return on.dataset.m === '1' && /mac-pro-open\.jpg$/.test(on.src) && getComputedStyle(document.querySelector('.cmp-mimg[data-m="0"]')).opacity === '0' && Math.round(document.querySelector('.cmp-mstage').getBoundingClientRect().width) === innerWidth; }));
ok('visit pass: no drop shadow', await ev(() => getComputedStyle(document.querySelector('.cmp-visit .adm-tkw'), '::before').display === 'none' && getComputedStyle(document.querySelector('.cmp-pass')).boxShadow === 'none'));
ok('visit pass: Every Sunday, Sonipat, one CTA', await ev(() => document.querySelector('.cmp-pass .adm-tk-date').textContent === 'Every Sunday' && /Sonipat/.test(document.querySelector('.cmp-pass-where').textContent) && document.querySelectorAll('.cmp-pass .pl-cta').length === 1));
ok('visit pass: real notches (the pass is masked on its perforation, a ring draws each hole, the shadow sits below the cut)', await ev(() => { const t = document.querySelector('.cmp-pass'), cs = getComputedStyle(t), m = cs.webkitMaskImage || cs.maskImage, cut = parseFloat(t.style.getPropertyValue('--cut')), c = t.querySelector('.adm-tk-cut'); return t.classList.contains('has-cut') && /radial-gradient/.test(m) && Math.abs(cut - (c.offsetTop + .5)) < .01 && getComputedStyle(t, '::before').borderTopWidth === '1px' && getComputedStyle(t.querySelector('.adm-tk-cut i')).display === 'none' && parseFloat(getComputedStyle(t.parentNode, '::before').top) > cut; }));
await ev(() => document.getElementById('faq').scrollIntoView({ block: 'center' })); await p.locator('#plAcc .pl-q:nth-child(3) button').tap(); await p.waitForTimeout(450);
ok('FAQs: five, one open at a time', await ev(() => document.querySelectorAll('#plAcc .pl-q').length === 5 && document.querySelectorAll('#plAcc .pl-q.is-open').length === 1 && document.querySelector('#plAcc .pl-q:nth-child(3)').classList.contains('is-open')));

// widths: no sideways scroll, one-line subtitle
for (const w of [360, 390, 402, 430]) {
  const f = await b.newPage({ viewport: { width: w, height: 800 } });
  await f.goto(URL); await f.waitForTimeout(400);
  const m = await f.evaluate(() => ({ x: document.documentElement.scrollWidth - innerWidth, sub: Math.round(document.querySelector('.cmp-fac-head p').getBoundingClientRect().width), vw: innerWidth, art: Math.round(document.getElementById('top').getBoundingClientRect().width) }));
  ok(`${w} px: no sideways scroll, subtitle fits, hero full width`, m.x === 0 && m.sub <= m.vw - 16 && m.art === m.vw, m);
  await f.close();
}
// his frame is 410 wide: each section's height there (fees within 22: his legend wraps by a pixel, ours fits on one line)
{ const f = await b.newPage({ viewport: { width: 410, height: 900 } }); await f.goto(URL); await f.evaluate(() => document.fonts.ready); await f.waitForTimeout(300);
  const his = { only: 627, scholarships: 911, curriculum: 615, loans: 630, visit: 411, faq: 590 };
  const got = await f.evaluate(ids => Object.fromEntries(Object.keys(ids).map(id => [id, Math.round(document.getElementById(id).getBoundingClientRect().height)])), his);
  ok('410 px: section heights as his frame', Object.keys(his).every(k => Math.abs(got[k] - his[k]) <= 1), got); await f.close(); }
// desktop: the phone column
const d = await b.newPage({ viewport: { width: 1440, height: 900 } });
d.on('pageerror', e => errs.push('dt: ' + e.message));
await d.goto(URL); await d.waitForTimeout(500);
ok('desktop: the 402 px phone column, the video within it', await d.evaluate(() => { const r = document.getElementById('page').getBoundingClientRect(), a = document.getElementById('top').getBoundingClientRect(); return r.width <= 402 && Math.round(a.width) === Math.round(r.width) && document.documentElement.scrollWidth <= innerWidth; }));
ok('no page errors, no 4xx', errs.length === 0 && bad.length === 0, [errs, bad]);
await b.close();

// videos: the hero loop plays while the hero is on screen and pauses once it has scrolled away; the tour plays when opened
const wb = await chromium.launch();
const wp = await wb.newPage({ viewport: { width: 393, height: 852 } });
await wp.goto(URL, { waitUntil: 'load' });
await wp.waitForFunction(() => { const v = document.getElementById('cmpLoop'); return !v.paused && v.currentTime > .3; }, null, { timeout: 8000 }).catch(() => {});
ok('the hero loop plays, silent, on arrival', await wp.evaluate(() => { const v = document.getElementById('cmpLoop'); return !v.paused && v.currentTime > .3 && v.muted; }));
await wp.click('#cmpTour');
await wp.waitForFunction(() => { const v = document.getElementById('cmpTvV'); return v.currentTime > .3 || v.readyState >= 2; }, null, { timeout: 10000 }).catch(() => {});
ok('the tour loads in the player, the loop pauses', await wp.evaluate(() => { const v = document.getElementById('cmpTvV'); return v.readyState >= 2 && document.getElementById('cmpLoop').paused && Math.abs(v.videoWidth / v.videoHeight - 16 / 9) < .01; }));
await wp.keyboard.press('Escape'); await wp.waitForTimeout(300);
ok('closing pauses the tour and resumes the loop', await wp.evaluate(() => document.getElementById('cmpTvV').paused && !document.getElementById('cmpLoop').paused));
await wp.evaluate(() => document.getElementById('scholarships').scrollIntoView()); await wp.waitForTimeout(500);
ok('the loop pauses once the hero has scrolled away', await wp.evaluate(() => document.getElementById('cmpLoop').paused));
await wp.evaluate(() => scrollTo(0, 0)); await wp.waitForTimeout(500);
ok('and plays again back at the top', await wp.evaluate(() => !document.getElementById('cmpLoop').paused));
await wb.close();


// reduced motion: nothing moves, the poster stands in for the loop
const rb = await chromium.launch();
const rp = await rb.newPage({ viewport: { width: 393, height: 852 }, reducedMotion: 'reduce' });
await rp.goto(URL); await rp.waitForTimeout(300);
await rp.waitForTimeout(800); await rp.evaluate(() => document.getElementById('facilities').scrollIntoView()); await rp.waitForTimeout(500);
await rp.waitForTimeout(5600);
await rp.evaluate(() => document.getElementById('cmpLap').scrollIntoView({ block: 'end' })); await rp.waitForTimeout(400);
ok('reduced motion: the MacBook stays open', await rp.evaluate(() => getComputedStyle(document.getElementById('cmpLid')).getPropertyValue('--lid').trim() === '0deg'));
await rp.evaluate(() => document.getElementById('facilities').scrollIntoView()); await rp.waitForTimeout(300);
ok('reduced motion: no beam, no loop (the poster stands in), no pulsing ring, the carousel stays on its first photo', await rp.evaluate(() => !document.getElementById('facilities').classList.contains('is-live') && !document.getElementById('top').classList.contains('is-live') && document.getElementById('cmpLoop').paused && document.getElementById('cmpFN').textContent === '01 / 06'));
await rb.close();

console.log(res.join('\n')); console.log(res.some(r => r.startsWith('FAIL')) ? 'SOME FAIL' : 'ALL PASS');
