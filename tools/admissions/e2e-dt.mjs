/* Admissions · desktop end-to-end (23 Oct 2026). Run with the local server on :8765:  node tools/admissions/e2e-dt.mjs */
import { chromium } from '/Users/shubhanshbhaskar/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
const URL = 'http://localhost:8765/admissions.html';
const b = await chromium.launch();
const res = []; const ok = (n, c, x) => res.push((c ? 'PASS ' : 'FAIL ') + n + (c ? '' : '  → ' + JSON.stringify(x)));
const errs = [];
const open = async (w, h, opts = {}) => {
  const p = await b.newPage({viewport: {width: w, height: h}, ...opts});
  p.on('pageerror', e => errs.push(w + ': ' + e.message));
  p.on('response', r => { if (r.status() >= 400 && r.url().startsWith('http://localhost')) errs.push(r.status() + ' ' + r.url()); });
  await p.goto(URL, {waitUntil: 'load'}); await p.waitForTimeout(900);
  return p;
};
const p = await open(1440, 900);
const ev = (f, a) => p.evaluate(f, a);
const to = async (sel, at = 200) => { await p.evaluate(([s, a]) => { const e = document.querySelector(s); scrollTo(0, e.getBoundingClientRect().top + scrollY - a); }, [sel, at]); await p.waitForTimeout(450); };

// ---- layout: every section on the 1200 column, nothing overflows
const lay = await ev(() => {
  const W = innerWidth, wrap = Math.min(1200, W - 96), side = (W - wrap) / 2, r = s => document.querySelector(s).getBoundingClientRect();
  return {over: document.documentElement.scrollWidth - W, side, end: side + wrap,
    lefts: ['.adm-hero .pl-hero-copy', '#routes .bk-head', '.adm-rcards', '.adm-qcard', '#process .bk-head', '.adm-tl', '#early .bk-head', '.adm-jes', '.adm-lgrid', '.adm-lcard', '.adm-camps'].map(s => [s, Math.round(r(s).left)]),
    rights: ['.adm-pick', '.adm-rcards', '.adm-qtabs', '.adm-kits', '#process .adm-cta', '.adm-early-list', '.adm-schs', '.adm-lgrid', '.adm-lcard', '.adm-camps'].map(s => [s, Math.round(r(s).right)])};
});
ok('no horizontal overflow', lay.over <= 0, lay.over);
ok('blocks start on the column', lay.lefts.every(([, x]) => Math.abs(x - lay.side) <= 1), lay.lefts);
ok('blocks end on the column', lay.rights.every(([, x]) => Math.abs(x - lay.end) <= 1), lay.rights);
ok('type: section titles 28/40 like placements, hero 40/48', await ev(() => ['#routes', '#nsat', '#process', '#early', '#scholarships', '#loans', '#campuses'].every(q => { const t = getComputedStyle(document.querySelector(q + ' .bk-title')); return t.fontSize === '28px' && t.lineHeight === '40px'; }) && getComputedStyle(document.querySelector('.pl-title')).fontSize === '40px' && getComputedStyle(document.querySelector('.pl-title')).lineHeight === '48px'));

// ---- hero: a full-bleed scene, the walk right of the copy, the six steps pinned on it
const hero = await ev(() => {
  const h = document.querySelector('.adm-hero').getBoundingClientRect(), w = document.querySelector('.adm-wall').getBoundingClientRect(), copy = document.querySelector('.adm-tkw').getBoundingClientRect(), title = document.querySelector('.pl-title').getBoundingClientRect();
  const F = []; document.querySelectorAll('.rt-flag').forEach(f => { F[+f.dataset.i] = f.getBoundingClientRect(); });
  const dtTrees = [...document.querySelectorAll('.rt-dt')].filter(g => getComputedStyle(g).display !== 'none').length;
  return {h: [h.height, h.top], wall: [w.left, w.top, w.right, w.bottom - h.bottom], copyRight: Math.max(copy.right, title.right), flag0: F[0].left, flag4: [F[4].right, F[4].top], dtTrees, nofig: document.querySelector('.adm-hero').classList.contains('adm-nofig')};
});
ok('hero 760 tall; the scene runs edge to edge and under the nav', hero.h[0] >= 760 && hero.wall[0] === 0 && hero.wall[1] === 0 && hero.wall[2] === 1440 && Math.abs(hero.wall[3]) < 1 && !hero.nofig, hero);
ok('the desktop campus around the walk is drawn', hero.dtTrees > 40, hero.dtTrees);
ok('the walk starts right of the copy and the gate stays on screen below the nav', hero.flag0 > hero.copyRight + 30 && hero.flag4[0] < 1440 - 40 && hero.flag4[1] > 90, hero);
const pins = await ev(() => { const F = []; document.querySelectorAll('.rt-flag').forEach(f => { F[+f.dataset.i] = f.getBoundingClientRect(); });
  return [...document.querySelectorAll('.adm-stn')].map(s => { const r = s.getBoundingClientRect(), f = F[+s.dataset.i]; return {i: +s.dataset.i, t: s.textContent, dx: f ? Math.round(r.left + r.width / 2 - (f.left + f.width / 2)) : null, dy: f ? Math.round(f.top - r.bottom) : null, op: +getComputedStyle(s).opacity, top: Math.round(r.top)}; }); });
ok('six step labels, in order, each on its flag', pins.length === 6 && pins.map(x => x.t).join('|') === '1Register|2Take NSAT|3Interview|4Counselling|5Block your seat|6Move in' && pins.slice(0, 5).every(x => Math.abs(x.dx) <= 2 && x.dy >= 2 && x.dy <= 10) && pins.every(x => x.op > .5), pins);
ok('labels climb with the walk (each higher than the last)', pins.every((x, i) => i === 0 || x.top < pins[i - 1].top), pins.map(x => x.top));
await p.waitForFunction(() => !!document.querySelector('.rt-flag.on'), null, {timeout: 9000, polling: 50});
ok('the lit label follows the lit flag', await ev(() => { const f = document.querySelector('.rt-flag.on'), s = document.querySelector('.adm-stn.is-on'); return !!s && s.dataset.i === f.dataset.i; }));
await p.waitForFunction(() => document.querySelector('.adm-stn.is-on')?.dataset.i === '5', null, {timeout: 24000, polling: 50}).then(() => ok('"Move in" lights at the gate', true), () => ok('"Move in" lights at the gate', false));

// ---- the ticket lies down: date | upright perforation with two notches | stub with the CTA
const tk = await ev(() => { const t = document.querySelector('.adm-ticket'), r = s => t.querySelector(s).getBoundingClientRect(), c = r('.adm-tk-cut');
  return {v: t.classList.contains('has-vcut'), wv: t.parentNode.classList.contains('is-v'), cutH: c.height, cutW: c.width, dateR: r('.adm-tk-date').right, stubL: r('.adm-tk-bot').left, cta: [r('.pl-cta').left >= r('.adm-tk-bot').left, r('.pl-cta').bottom], tops: Math.abs(r('.adm-tk-top').top - r('.adm-tk-bot').top), dlH: r('.adm-tk-dl').height}; });
ok('ticket: date left, upright perforation, CTA in the stub', tk.v && tk.wv && tk.cutH > 80 && tk.cutW <= 1 && tk.dateR < tk.stubL && tk.cta[0] && tk.tops < 1 && tk.dlH <= 22, tk);

// ---- section bar
await ev(() => scrollTo(0, 0)); await p.waitForTimeout(300);
ok('section bar hidden over the hero', await ev(() => { const s = document.getElementById('snav'); return !!s && !s.classList.contains('is-on') || getComputedStyle(s).opacity === '0' || s.getBoundingClientRect().bottom <= 0 || getComputedStyle(s).visibility === 'hidden'; }));
await to('#routes', 100); await p.waitForTimeout(500);
ok('section bar: eight sections, shows past the hero', await ev(() => { const s = document.getElementById('snav'); return s.querySelectorAll('.snav-l a').length === 8 && getComputedStyle(s).visibility !== 'hidden' && +getComputedStyle(s).opacity > .5; }));
await p.click('#snav a[href="#loans"]'); await p.waitForTimeout(1300);
ok('section bar: Loans glides to the loans head below the bar', await ev(() => { const t = document.querySelector('#loans').getBoundingClientRect().top; return t > 100 && t < 220; }), await ev(() => document.querySelector('#loans').getBoundingClientRect().top));

// ---- 02 routes: three open cards in a row, the chooser on the head's row
await to('#routes');
const rc = await ev(() => { const C = [...document.querySelectorAll('.adm-rc')].map(c => c.getBoundingClientRect()), L = [...document.querySelectorAll('.adm-rc-more>a, .adm-rc-cta>a')].map(a => Math.round(a.getBoundingClientRect().bottom)), pick = document.querySelector('.adm-pick').getBoundingClientRect(), head = document.querySelector('#routes .bk-head').getBoundingClientRect();
  return {tops: new Set(C.map(r => Math.round(r.top))).size, hs: new Set(C.map(r => Math.round(r.height))).size, links: [Math.min(...L), Math.max(...L)], open: [...document.querySelectorAll('.adm-rc-more')].every(m => getComputedStyle(m).display !== 'none'), code: document.querySelector('.adm-code').getBoundingClientRect().height > 80, subj: document.querySelectorAll('.adm-subj span').length === 4 && getComputedStyle(document.querySelector('.adm-subj')).display === 'flex', pickRow: pick.top < head.bottom && pick.bottom > head.top}; });
ok('routes: three cards in one row, same height, all open with their visual', rc.tops === 1 && rc.hs === 1 && rc.open && rc.code && rc.subj, rc);
ok('routes: the links line up; the chooser sits on the head row', rc.links[1] - rc.links[0] <= 2 && rc.pickRow, rc);
await p.click('.adm-pick button[data-r="1"]'); await p.waitForTimeout(250);
ok('routes: "I already code" lights Coding NSAT', await ev(() => document.querySelector('.adm-rc.is-on').dataset.r === '1'));
await p.click('.adm-rc[data-r="2"] h3'); await p.waitForTimeout(250);
ok('routes: clicking a card lights it and its chip', await ev(() => document.querySelector('.adm-rc.is-on').dataset.r === '2' && document.querySelector('.adm-pick .is-on').dataset.r === '2'));

// ---- 03 NSAT: question left; subjects as a list on the right, the kits under it
await to('#nsat');
const nq = await ev(() => { const q = document.querySelector('.adm-qcard').getBoundingClientRect(), T = [...document.querySelectorAll('.adm-qtabs button')].map(b => b.getBoundingClientRect()), k = document.querySelector('.adm-kits').getBoundingClientRect(), tabs = document.querySelector('.adm-qtabs').getBoundingClientRect();
  return {listV: new Set(T.map(r => Math.round(r.left))).size === 1 && T.every((r, i) => !i || r.top > T[i - 1].top), right: tabs.left > q.right, kitsUnder: k.top > tabs.bottom && Math.abs(k.left - tabs.left) < 1, sameH: Math.abs(q.bottom - k.bottom) < 2 && Math.abs(q.top - tabs.top) < 2}; });
ok('NSAT: the subjects are a list beside the question; the kits under it; both columns end level', nq.listV && nq.right && nq.kitsUnder && nq.sameH, nq);
await p.click('.adm-qtabs button[data-s="2"]'); await p.waitForTimeout(200);
ok('NSAT: picking English brings its question', await ev(() => /meticulous/.test(document.getElementById('admQt').textContent) && document.querySelector('.adm-qtabs .is-on').dataset.s === '2'));
await p.click('#admQo button[data-i="0"]'); await p.waitForTimeout(200);
ok('NSAT: a wrong answer shows wrong and the right one', await ev(() => document.querySelector('#admQo .is-wrong')?.dataset.i === '0' && document.querySelector('#admQo .is-right')?.dataset.i === '1'));

// ---- 04 six steps: one row at 1440, the CTA on the head row; it draws once the row reaches the middle of the screen
await ev(() => scrollTo(0, 0)); await p.reload({waitUntil: 'load'}); await p.waitForTimeout(700);
ok('steps: armed (hidden) before they are reached', await ev(() => document.querySelector('.adm-steps').classList.contains('is-armed') && !document.querySelector('.adm-steps').classList.contains('is-drawn')));
await ev(() => { const r = document.querySelector('.adm-tl'); scrollTo(0, r.getBoundingClientRect().top + scrollY - innerHeight * .8); }); await p.waitForTimeout(500);
ok('steps: not drawn while the row is low on the screen (80%)', await ev(() => !document.querySelector('.adm-steps').classList.contains('is-drawn')));
await ev(() => { const r = document.querySelector('.adm-tl'); scrollTo(0, r.getBoundingClientRect().top + scrollY - innerHeight * .4); }); await p.waitForTimeout(1600);
const st = await ev(() => { const L = [...document.querySelectorAll('.adm-tl li')].map(l => l.getBoundingClientRect()), cta = document.querySelector('#process .adm-cta').getBoundingClientRect(), head = document.querySelector('#process .bk-head').getBoundingClientRect(), lines = [...document.querySelectorAll('.adm-tl-line')].map(l => getComputedStyle(l).clipPath === 'inset(-2px 0px)' ? l.getBoundingClientRect().width : 0);
  return {drawn: document.querySelector('.adm-steps').classList.contains('is-drawn'), row: new Set(L.map(r => Math.round(r.top))).size, n: L.length, op: [...document.querySelectorAll('.adm-tl li')].every(l => getComputedStyle(l).opacity === '1'), lines, ctaRow: cta.top < head.bottom && cta.left > head.right}; });
ok('steps: past the middle they land, six in one row, the spine drawn between them', st.drawn && st.row === 1 && st.n === 6 && st.op && st.lines.length === 5 && st.lines.every(w => w > 80), st);
ok('steps: the CTA on the head row', st.ctaRow, st);

// ---- 05 apply early, 06 scholarships
await to('#early');
ok('apply early: the head on the left, three reasons in a row', await ev(() => { const h = document.querySelector('#early .bk-head').getBoundingClientRect(), P = [...document.querySelectorAll('.adm-early-list p')].map(p => p.getBoundingClientRect()); return new Set(P.map(r => Math.round(r.top))).size === 1 && P.length === 3 && P[0].left > h.right; }));
await to('#scholarships');
ok('scholarships: JEE Excellence left, three stacked right, the columns level', await ev(() => { const j = document.querySelector('.adm-jes').getBoundingClientRect(), S = [...document.querySelectorAll('.adm-s')].map(s => s.getBoundingClientRect()); return S.every(s => s.left > j.right) && Math.abs(S[0].top - j.top) < 1 && Math.abs(S[2].bottom - j.bottom) < 1 && S[1].top > S[0].bottom; }));

// ---- 07 loans
await to('#loans');
ok('loans: eight lenders in one row, four terms side by side', await ev(() => { const T = [...document.querySelectorAll('.adm-lt')].map(t => t.getBoundingClientRect()), R = [...document.querySelectorAll('.adm-lr')].map(r => r.getBoundingClientRect()); return T.length === 8 && new Set(T.map(r => Math.round(r.top))).size === 1 && R.length === 4 && new Set(R.map(r => Math.round(r.top))).size === 1 && [...document.querySelectorAll('.adm-lt img')].every(i => i.complete && i.naturalWidth > 0); }));
await p.click('.adm-lt[data-l="axis"]'); await p.click('.adm-lseg button[data-t="1"]'); await p.waitForTimeout(300);
ok('loans: Axis, unsecured', await ev(() => document.getElementById('admLName').textContent === 'Axis Bank' && document.getElementById('admLRate').textContent === '11.25%'));
ok('loans: the interest stays on one line', await ev(() => document.getElementById('admLRate').getBoundingClientRect().height <= 36));

// ---- 08 campuses, FAQs
await to('#campuses'); await p.mouse.move(5, 5); await p.waitForTimeout(400);   /* a resting mouse would lift the card under it */
ok('campuses: four in a row, photos loaded, no dots', await ev(() => { const C = [...document.querySelectorAll('.adm-cc')].map(c => c.getBoundingClientRect()); return C.length === 4 && new Set(C.map(r => Math.round(r.top))).size === 1 && [...document.querySelectorAll('.adm-cc img')].every(i => i.complete && i.naturalWidth > 0) && getComputedStyle(document.querySelector('.adm-dots')).display === 'none'; }));
await to('#faq'); await p.click('#plAcc .pl-q:nth-child(3) button'); await p.waitForTimeout(300);
ok('FAQ: one open at a time', await ev(() => document.querySelectorAll('#plAcc .pl-q.is-open').length === 1 && document.querySelector('#plAcc .pl-q:nth-child(3)').classList.contains('is-open')));
await to('.pl-all', 400); const y0 = await ev(() => scrollY); await p.click('.pl-all'); await p.waitForTimeout(400);   /* All FAQs → is in view, so the click doesn't scroll */
ok('placeholder links do not jump', Math.abs(await ev(() => scrollY) - y0) < 2);
await p.close();

// ---- widths: the column, the hero, the ticket in the first fold
for (const [w, h] of [[1024, 768], [1280, 720], [1366, 768], [1920, 1080], [2560, 1300]]) {
  const q = await open(w, h);
  const r = await q.evaluate(() => { const W = innerWidth, g = s => document.querySelector(s).getBoundingClientRect(), side = g('#routes .bk-head').left;   /* the column (the homepage's narrow tier has its own margins) */
    const F = []; document.querySelectorAll('.rt-flag').forEach(f => { F[+f.dataset.i] = f.getBoundingClientRect(); });
    const copyR = Math.max(g('.adm-tkw').right, g('.pl-title').right);
    return {over: document.documentElement.scrollWidth - W, copy: Math.round(g('.pl-hero-copy').left - side), tkBottom: Math.round(g('.adm-ticket').bottom), H: innerHeight, walkClear: F[0].left > copyR + 20, gate: F[4].right < W - 30,
      dl: g('.adm-tk-dl').height, rows: new Set([...document.querySelectorAll('.adm-tl li')].map(l => Math.round(l.getBoundingClientRect().top))).size, stns: [...document.querySelectorAll('.adm-stn')].every(s => { const b = s.getBoundingClientRect(); return b.right < W && b.left > copyR - 40; })}; });
  ok(`${w}×${h}: no overflow, copy on the column, the ticket in the first fold, the walk clear of the copy, the gate on screen`, r.over <= 0 && Math.abs(r.copy) <= 1 && r.tkBottom <= r.H - 16 && r.walkClear && r.gate && r.dl <= 22 && r.stns && r.rows === (w < 1280 ? 2 : 1), r);
  await q.close();
}

// ---- reduced motion: the student stands at NSAT, its label lit; the steps are simply there
{
  const q = await open(1440, 900, {reducedMotion: 'reduce'});
  await q.waitForTimeout(1500);
  ok('reduced motion: standing at NSAT with its label lit; steps not armed', await q.evaluate(() => document.querySelector('.rt-flag.on')?.dataset.i === '1' && document.querySelector('.adm-stn.is-on')?.dataset.i === '1' && !document.querySelector('.adm-steps').classList.contains('is-armed')));
  await q.close();
}

ok('no page errors, no 4xx', errs.length === 0, errs);
console.log(res.join('\n'));
console.log(res.every(r => r.startsWith('PASS')) ? 'ALL PASS' : 'SOME FAIL');
await b.close();
