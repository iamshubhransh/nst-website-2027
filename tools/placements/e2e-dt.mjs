/* Placements · desktop end-to-end. Run with the local server on :8765:  node tools/placements/e2e-dt.mjs */
import { chromium } from '/Users/shubhanshbhaskar/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
const URL = 'http://localhost:8765/placements.html';
const b = await chromium.launch();
const res = []; const ok = (n, c, x) => res.push((c ? 'PASS ' : 'FAIL ') + n + (c ? '' : '  → ' + JSON.stringify(x)));
const errs = [];
const p = await b.newPage({viewport: {width: 1440, height: 900}});
p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error' && !/youtube|ERR_/.test(m.text())) errs.push('console: ' + m.text()); });
p.on('response', r => { if (r.status() >= 400 && r.url().includes('localhost')) errs.push(r.status() + ' ' + r.url()); });
const ev = f => p.evaluate(f);
const to = async sel => { await p.evaluate(s => { const e = document.querySelector(s); scrollTo(0, e.getBoundingClientRect().top + scrollY - 200); }, sel); await p.waitForTimeout(500); };
await p.goto(URL, {waitUntil: 'load'}); await p.waitForTimeout(800);

// ---- layout: every section sits in the 1200 column, nothing overflows
const lay = await ev(() => {
  const W = innerWidth, wrap = Math.min(1200, W - 96), side = (W - wrap) / 2, r = s => document.querySelector(s).getBoundingClientRect();
  return {over: document.documentElement.scrollWidth - W, side,
    heroCopy: r('.pl-hero-copy').left, google: r('.pl-goog-in').left, googR: r('.pl-goog-in').right, batchHead: r('#internships .bk-head').left,
    recL: r('.pl-rec[data-c="0"]').left, recR: r('.pl-rec[data-c="1"]').right, secCard: [r('.pl-sec-card').left, r('.pl-sec-card').right],
    board: r('.pl-board').left, wall: r('.pl-wall2').right, feature: r('.pl-feature').left, ctaR: r('.pl-dark-cta').right,
    tilesRow: new Set([...document.querySelectorAll('.pl-proof .tile')].map(t => Math.round(t.getBoundingClientRect().top))).size,
    campusTop: new Set([...document.querySelectorAll('.pl-rec')].map(t => Math.round(t.getBoundingClientRect().top))).size};
});
const S = Math.round(lay.side), E = 1440 - S;
ok('no horizontal overflow', lay.over <= 0, lay.over);
ok('hero copy, Google panel, section heads start on the column', [lay.heroCopy, lay.google, lay.batchHead, lay.recL, lay.board, lay.feature].every(x => Math.abs(x - S) <= 1) && Math.abs(lay.googR - lay.recR) <= 1, lay);
ok('right edges end on the column', [lay.recR, lay.secCard[1], lay.wall, lay.ctaR].every(x => Math.abs(x - E) <= 1), lay);
ok('four summary tiles in one row', lay.tilesRow === 1, lay.tilesRow);
ok('two campus cards side by side', lay.campusTop === 1, lay.campusTop);
ok('type: section titles 28/40 like the homepage, hero 40', await ev(() => ['#internships .bk-title', '.pl-live-title', '#recruiters .pl-h2', '#faq .pl-h2'].every(q => { const t = getComputedStyle(document.querySelector(q)); return t.fontSize === '28px' && t.lineHeight === '40px'; }) && getComputedStyle(document.querySelector('.pl-title')).fontSize === (innerWidth >= 1280 ? '40px' : '34px')));
ok('Google: the headline is a search-result title (frame 709:50611)', await ev(() => { const t = getComputedStyle(document.querySelector('.pl-goog-title')); return t.fontSize === '22px' && t.color === 'rgb(26, 13, 171)' && /Arial/.test(t.fontFamily); }));

// ---- hero wall: four columns, drifting, a tile lights in turn
ok('hero wall: four columns', await ev(() => document.querySelectorAll('.pl-col').length) === 4);
const t0 = await ev(() => getComputedStyle(document.querySelector('.pl-strip')).transform); await p.waitForTimeout(900);
ok('hero wall drifts', t0 !== await ev(() => getComputedStyle(document.querySelector('.pl-strip')).transform));
const l0 = await ev(() => document.querySelector('.pl-tile.is-lit b').textContent); await p.waitForTimeout(1900);
ok('a different student lights', l0 !== await ev(() => document.querySelector('.pl-tile.is-lit b').textContent));
ok('hero copy clear of the wall', await ev(() => { const c = document.querySelector('.pl-title').getBoundingClientRect(), w = document.querySelector('.pl-col').getBoundingClientRect(); return c.right <= w.left; }));

// ---- nav: dropdown works on this page, Placements is a link to this page
await p.hover('.dn-t[data-m=prog]'); await p.waitForTimeout(500);
ok('nav dropdown opens', await ev(() => !!document.querySelector('.dn-p.is-open')));
await p.mouse.move(700, 600); await p.waitForTimeout(500);
ok('nav dropdown closes on leave', await ev(() => !document.querySelector('.dn-p.is-open')));
ok('nav Placements links here', await ev(() => [...document.querySelectorAll('.dn a')].some(a => a.textContent === 'Placements' && a.getAttribute('href') === 'placements.html')));

// ---- CTC
await to('#ctc'); await p.waitForTimeout(1600);
ok('CTC counts to ₹20–50L', (await ev(() => [...document.querySelectorAll('.pl-ctc4-fig b')].map(b => b.textContent).join('-'))) === '20-50');
ok('CTC: range, line and card stacked and centred; one logo row through the card', await ev(() => { const f = document.querySelector('.pl-ctc4-fig').getBoundingClientRect(), s = document.querySelector('.pl-ctc4-sub').getBoundingClientRect(), a = document.querySelector('.pl-ctc4-avg').getBoundingClientRect(), mid = r => (r.left + r.right) / 2, c = innerWidth / 2;
  return Math.abs(mid(f) - c) < 24 && Math.abs(mid(s) - c) < 2 && Math.abs(mid(a) - c) < 2 && s.top >= f.bottom && a.top > s.bottom && [...document.querySelectorAll('.pl-ctc4-row')].filter(r => r.getClientRects().length).length === 1 && (r1 => Math.abs((r1.top + r1.bottom) / 2 - (a.top + a.bottom) / 2) < 2)(document.querySelector('.pl-ctc4-row .pl-chip4').getBoundingClientRect()) && getComputedStyle(document.querySelector('.pl-ctc4-fig b')).fontSize === (innerWidth >= 1280 ? '64px' : '50px'); }));
const c0 = await ev(() => getComputedStyle(document.querySelector('.pl-ctc4-track')).transform); await p.waitForTimeout(700);
ok('company chips drift', c0 !== await ev(() => getComputedStyle(document.querySelector('.pl-ctc4-track')).transform));

// ---- Google
await to('#google'); await p.waitForTimeout(2600);
ok('Google: the query types itself, cards arrive', (await ev(() => document.getElementById('plGoogQ').textContent)) === 'NST students at Google' && await ev(() => !document.getElementById('google').classList.contains('is-wait')));
ok('Google: cards on the right of the search', await ev(() => document.querySelector('.pl-goog-res').getBoundingClientRect().left > document.querySelector('.pl-goog-bar').getBoundingClientRect().right));

// ---- live offers + arc
await to('#plOffers'); const o0 = await ev(() => document.querySelector('.pl-offer').dataset.n); await p.waitForTimeout(2600);
ok('a new offer arrives', o0 !== await ev(() => document.querySelector('.pl-offer').dataset.n));
ok('offer badge 22 px on desktop', await ev(() => Math.round(document.querySelector('.pl-offer .pl-co').getBoundingClientRect().width)) === 22);
const a0 = await ev(() => document.getElementById('plArcLabel').textContent); await p.waitForTimeout(2900);
ok('arc steps', a0 !== await ev(() => document.getElementById('plArcLabel').textContent));
ok('arc ring clipped to its crown', await ev(() => getComputedStyle(document.getElementById('plArc')).overflow === 'hidden'));

// ---- campuses
await to('.pl-rec[data-c="0"] .pl-commute'); await p.waitForTimeout(2800);
ok('campuses: windows lit with the count', (await ev(() => [...document.querySelectorAll('.pl-rec')].map(c => c.querySelectorAll('.cm-win.on').length + '/' + c.querySelector('.pl-rec-v').textContent).join())) === '96/98.3,91/93');
const bus0 = await ev(() => document.querySelector('.cm-bus').getAttribute('transform')); await p.waitForTimeout(600);
ok('the shuttle moves', bus0 !== await ev(() => document.querySelector('.cm-bus').getAttribute('transform')));
ok('report: cover left, actions right', await ev(() => { const t = document.querySelector('.pl-rep-top').getBoundingClientRect(), c = document.querySelector('.pl-rep-cta').getBoundingClientRect(); return c.left > t.right - 1 && Math.abs(t.top - document.getElementById('report').getBoundingClientRect().top) < 2; }));

// ---- wins carousel (homepage component, desktop focus mode)
await to('.wins'); await p.waitForTimeout(500);
ok('wins: three cards in view, one in focus', await ev(() => document.querySelectorAll('.win.is-focus').length === 1 && document.querySelectorAll('.win').length >= 3));

// ---- hairlines animate
await to('#plLinesUp'); const h0 = await ev(() => document.getElementById('plLinesUp').toDataURL().length); await p.waitForTimeout(1500);
ok('hairlines animate and span the page', h0 !== await ev(() => document.getElementById('plLinesUp').toDataURL().length) && await ev(() => document.getElementById('plLinesUp').getBoundingClientRect().width === innerWidth));

// ---- sectors
await to('#plSecList'); await p.locator('#plSecList li').nth(3).click(); await p.waitForTimeout(400);
ok('sector click lights 27 ticks, readout swaps', (await ev(() => [document.querySelectorAll('#plBarcode i.sel').length, document.getElementById('plSecName').textContent, document.getElementById('plSecPct').textContent].join())) === '27,Education,9.4');
ok('sector list beside the readout', await ev(() => document.getElementById('plSecList').getBoundingClientRect().left > document.getElementById('plBarcode').getBoundingClientRect().right));

// ---- companies
await to('#plCos'); await p.waitForTimeout(1400);
ok('companies: 7 rows, wall beside them, same height', await ev(() => { const b = document.querySelector('.pl-board').getBoundingClientRect(), w = document.querySelector('.pl-wall2').getBoundingClientRect(); return document.querySelectorAll('.pl-cmp').length === 7 && w.left > b.right && Math.abs(w.bottom - b.bottom) <= 2 && Math.abs(w.top - b.top) <= 2; }));
await p.waitForTimeout(2200);
ok('a logo tile lights, no shadow', await ev(() => { const t = document.querySelector('.pl-lg.is-hit'); return !!t && !/rgba\(6, 115, 249, 0\.5\)/.test(getComputedStyle(t).boxShadow); }));

// ---- stories
await to('#plNext'); await p.locator('#plNext li').nth(1).click(); await p.waitForTimeout(700);
ok('story click moves it into the player', (await ev(() => document.getElementById('plNow').textContent)).startsWith('A first-year'));
await p.locator('.pl-play').click(); await p.waitForTimeout(400);
ok('play embeds the video', await ev(() => !!document.querySelector('#plPlayer iframe[src*="om00nA2Xvtk"]')));
await p.locator('.pl-chip[data-l="1"]').click(); await p.waitForTimeout(300);
ok('Built at NST tab swaps the list', (await ev(() => document.getElementById('plNow').textContent)) === '24 hours of coding for Blinkit');
ok('stories: queue beside the feature', await ev(() => document.getElementById('plNext').getBoundingClientRect().left > document.querySelector('.pl-feature').getBoundingClientRect().right));

// ---- WhatsApp thread
await to('#plThread'); await p.waitForTimeout(1800);
ok('thread messages arrive, chat 720 wide and centred', await ev(() => { const t = document.getElementById('plThread').getBoundingClientRect(); return [...document.querySelectorAll('.pl-msg')].every(m => getComputedStyle(m).opacity === '1') && Math.round(t.width) === 720 && Math.abs(t.left + t.width / 2 - innerWidth / 2) < 1; }));
const ty0 = await ev(() => document.getElementById('plWaSub').textContent); await p.waitForTimeout(3400);
ok('typing status rotates', ty0 !== await ev(() => document.getElementById('plWaSub').textContent));

// ---- FAQ
await to('#plAcc'); await p.locator('.pl-q button').nth(2).click(); await p.waitForTimeout(600);
ok('FAQ: one open at a time, answer not clipped', await ev(() => { const q = [...document.querySelectorAll('.pl-q')]; const a = q[2].querySelector('.pl-a p').getBoundingClientRect(), box = q[2].querySelector('.pl-a>div').getBoundingClientRect(); return q.map(x => x.classList.contains('is-open')).join() === 'false,false,true' && a.top >= box.top - .5; }));

// ---- chat sheet from the nav, page stays usable
await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(300);
await p.click('#navAsk'); await p.waitForTimeout(900);
ok('Ask Newton opens the chat sheet', await ev(() => document.getElementById('ai').classList.contains('is-open') && document.getElementById('ai').getBoundingClientRect().width <= 440));
ok('page still scrolls with the sheet open', await ev(() => { scrollTo(0, 800); return scrollY > 700; }));
await p.keyboard.press('Escape'); await p.waitForTimeout(600);

// ---- placeholder links do not jump
ok('placeholder links do not jump', await ev(() => { scrollTo(0, 3000); const y = scrollY; document.querySelector('.pl-rep-cta').click(); return Math.abs(scrollY - y) < 2; }));

// ---- other widths
for (const w of [1024, 1280, 1728, 1920]) {
  await p.setViewportSize({width: w, height: 900}); await p.waitForTimeout(500);
  const r = await ev(() => { const t = document.querySelector('.pl-title').getBoundingClientRect(), c = document.querySelector('.pl-col').getBoundingClientRect(); return {over: document.documentElement.scrollWidth - innerWidth, clear: t.right <= c.left, rec: new Set([...document.querySelectorAll('.pl-rec')].map(x => Math.round(x.getBoundingClientRect().top))).size}; });
  ok('width ' + w + ': no overflow, hero clear, campuses side by side', r.over <= 0 && r.clear && r.rec === 1, r);
  await p.evaluate(() => document.querySelector('.wins').scrollIntoView({block: 'center'})); await p.waitForTimeout(700);
  ok('width ' + w + ': three win cards fit the column, focus centred', await ev(() => { const v = document.querySelector('.wins-view').getBoundingClientRect(), f = document.querySelector('.win.is-focus').getBoundingClientRect(); const vis = [...document.querySelectorAll('.win')].map(c => c.getBoundingClientRect()).filter(q => q.right > v.left + 2 && q.left < v.right - 2); return vis.length === 3 && vis.every(q => q.left >= v.left - 1 && q.right <= v.right + 1) && Math.abs(f.left + f.width / 2 - (v.left + v.width / 2)) < 1; }));
}
ok('no page errors', errs.length === 0, errs);
console.log(res.join('\n'));
console.log(res.every(r => r.startsWith('PASS')) ? 'ALL PASS' : 'FAILED: ' + res.filter(r => r.startsWith('FAIL')).length);
await b.close();
