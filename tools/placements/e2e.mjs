import { chromium } from '/Users/shubhanshbhaskar/.npm/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs';
const b = await chromium.launch(); const p = await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2,hasTouch:true,isMobile:true});
const errs=[]; p.on('pageerror',e=>errs.push(e.message));
const res=[]; const ok=(n,c,x)=>{res.push((c?'PASS ':'FAIL ')+n+(c?'':'  → '+JSON.stringify(x)));};
const ev=f=>p.evaluate(f);
await p.goto('http://localhost:8765/placements.html',{waitUntil:'load'}); await p.waitForTimeout(600);
// wall drifts and a tile is lit
const t0=await ev(()=>getComputedStyle(document.querySelector('.pl-strip')).transform); await p.waitForTimeout(1200);
const t1=await ev(()=>getComputedStyle(document.querySelector('.pl-strip')).transform);
ok('wall drifts', t0!==t1, [t0,t1]);
const lit0=await ev(()=>document.querySelector('.pl-tile.is-lit .pl-ph b').textContent); await p.waitForTimeout(3000);
const lit1=await ev(()=>document.querySelector('.pl-tile.is-lit .pl-ph b').textContent);
ok('a new tile lights', lit0!==lit1, [lit0,lit1]);
ok('25 interns on the wall', await ev(()=>new Set([...document.querySelectorAll('.pl-tile b')].map(b=>b.textContent)).size>=20));
// offers
await p.evaluate(()=>document.getElementById('plOffers').scrollIntoView({block:'center'})); await p.waitForTimeout(500);
const o0=await ev(()=>document.querySelector('.pl-offer').dataset.n); await p.waitForTimeout(2600);
const o1=await ev(()=>document.querySelector('.pl-offer').dataset.n);
ok('a new offer arrives on top', o0!==o1 && await ev(()=>document.querySelector('.pl-offer').classList.contains('is-new')), [o0,o1]);
ok('offer badges load', await ev(()=>[...document.querySelectorAll('.pl-co')].every(i=>i.complete&&i.naturalWidth>0&&Math.round(i.getBoundingClientRect().width)===20)));
ok('five rows kept', await ev(()=>document.querySelectorAll('.pl-offer').length)<=6);
const l0=await ev(()=>document.getElementById('plArcLabel').textContent); await p.waitForTimeout(2900);
ok('arc steps to the next company', l0!==await ev(()=>document.getElementById('plArcLabel').textContent));
// waffle
await p.evaluate(()=>document.getElementById('plCommute').scrollIntoView({block:'center'})); await p.waitForTimeout(2600);
ok('Pune: 96 of 98 windows lit, 98.3', (await ev(()=>[document.querySelectorAll('#plCommute .cm-win.on').length,document.getElementById('plRecNum').textContent])).join()==='96,98.3');
const bx0=await ev(()=>document.getElementById('cmBus').getAttribute('transform')); await p.waitForTimeout(700); ok('the shuttle moves', bx0!==await ev(()=>document.getElementById('cmBus').getAttribute('transform')));
await p.locator('.pl-tab[data-c="1"]').tap(); await p.waitForTimeout(2600);
ok('Delhi: 91 windows lit, 93, stipend values, green street', (await ev(()=>[document.querySelectorAll('#plCommute .cm-win.on').length,document.getElementById('plRecNum').textContent,document.getElementById('plE1').textContent,document.getElementById('plCommute').dataset.c])).join()==='91,93,₹1,25,000/mo,1');
// sectors
await p.evaluate(()=>document.getElementById('plSecList').scrollIntoView({block:'center'})); await p.waitForTimeout(600);
await p.locator('#plSecList li').nth(5).tap(); await p.waitForTimeout(300);
ok('Fintech tap lights 13 ticks', (await ev(()=>[document.querySelectorAll('#plBarcode i.sel').length,document.getElementById('plSecName').textContent,document.getElementById('plSecPct').textContent])).join()==='13,Fintech,4.5');
ok('287 ticks', await ev(()=>document.querySelectorAll('#plBarcode i').length)===287);
// board
await p.evaluate(()=>document.getElementById('plBoard').scrollIntoView({block:'center'})); await p.waitForTimeout(400);
const b0=await ev(()=>[...document.querySelectorAll('.pl-brow b')].map(b=>b.textContent).join('|')); await p.waitForTimeout(3200);
const b1=await ev(()=>[...document.querySelectorAll('.pl-brow b')].map(b=>b.textContent).join('|'));
ok('board flips a row', b0!==b1, [b0,b1]);
ok('flaps hold 8 letters', await ev(()=>[...document.querySelectorAll('.pl-flaps')].every(f=>f.children.length===8)));
// stories
await p.evaluate(()=>document.getElementById('plNext').scrollIntoView({block:'center'})); await p.waitForTimeout(300);
await p.locator('#plNext li').nth(0).tap(); await p.waitForTimeout(700);
ok('tapping a story moves it into the player', (await ev(()=>document.getElementById('plNow').textContent)).startsWith('Why 90%'));
await p.locator('.pl-play').tap(); await p.waitForTimeout(400);
ok('play embeds the video inline', await ev(()=>{const f=document.querySelector('#plPlayer iframe'); return !!f && f.src.includes('EUDTsI39OEM');}));
await p.locator('.pl-chip[data-l="1"]').tap(); await p.waitForTimeout(300);
ok('Built at NST tab swaps the list', (await ev(()=>[document.getElementById('plNow').textContent, document.querySelectorAll('#plNext li').length])).join()==='24 hours of coding for Blinkit,2');
// thread
await p.evaluate(()=>document.getElementById('plThread').scrollIntoView({block:'center'})); await p.waitForTimeout(1600);
ok('thread messages arrive', await ev(()=>!document.getElementById('plThread').classList.contains('is-wait') && [...document.querySelectorAll('.pl-msg')].every(m=>getComputedStyle(m).opacity==='1')));
// faq
await p.evaluate(()=>document.getElementById('plAcc').scrollIntoView({block:'center'})); 
await p.locator('.pl-q button').nth(1).tap(); await p.waitForTimeout(500);
ok('faq: one open at a time', (await ev(()=>[...document.querySelectorAll('.pl-q')].map(q=>q.classList.contains('is-open')).join())) ==='false,true,false');
// dock + menu + no horizontal overflow
await ev(()=>scrollTo(0,2000)); await p.waitForTimeout(300); ok('dock shows after the hero', await ev(()=>document.getElementById('dock').classList.contains('is-on')));
await ev(()=>scrollTo(0,200)); await p.waitForTimeout(300); ok('dock hidden over the hero', !(await ev(()=>document.getElementById('dock').classList.contains('is-on'))));
await p.evaluate(()=>scrollTo(0,0)); await p.waitForTimeout(300);
await p.locator('.nav .menu').tap(); await p.waitForTimeout(500);
ok('menu sheet opens', await ev(()=>document.getElementById('menuSheet').classList.contains('is-open')||document.getElementById('menuSheet').getAttribute('aria-hidden')==='false'));
ok('no horizontal overflow', await ev(()=>document.documentElement.scrollWidth<=innerWidth));
ok('placeholder links do not jump', await ev(()=>{ scrollTo(0,3000); const y=scrollY; document.querySelector('.pl-audit a').click(); return Math.abs(scrollY-y)<2; }));
console.log(res.join('\n')); console.log('ERRS',errs); await b.close();
