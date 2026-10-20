/* campus page · Rishihood University (phone). His frames 744:61112 (hero, summary tiles, Facilities & Amenities) and 745:67391
   (only at Rishihood, scholarships, curriculum, fees, loans, laptop, visit, FAQs). Per-campus facts live in CAMPUS, YEARS and LOANS */
(function(){
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function onView(el, fn, margin){ new IntersectionObserver(function(en){ fn(en[0].isIntersecting); }, {rootMargin: margin || '0px'}).observe(el); }

  /* ---- 01 · hero: while it is on screen the campus loop plays (never under reduced motion) and the play button's ring pulses;
          02 · facilities: the dome's beam runs while the section is on screen ---- */
  var hv = document.getElementById('top'), loop = document.getElementById('cmpLoop'), fac = document.getElementById('facilities');
  function playLoop(){ if (!loop || reduce) return; var pr = loop.play(); if (pr && pr.catch) pr.catch(function(){}); }
  if (hv) onView(hv, function(on){ hv.classList.toggle('is-live', on && !reduce); if (on) playLoop(); else if (loop) loop.pause(); });
  if (fac) onView(fac, function(on){ fac.classList.toggle('is-live', on && !reduce); });

  /* ---- the ticket (the visit pass): its notches are real holes on the perforation; the mask needs the perforation's height ---- */
  function cuts(){ document.querySelectorAll('.adm-ticket').forEach(function(t){ var c = t.querySelector('.adm-tk-cut'); if (!c) return; t.style.setProperty('--cut', (c.offsetTop + .5) + 'px'); t.classList.add('has-cut'); if (t.parentNode.classList.contains('adm-tkw')) t.parentNode.style.setProperty('--cutw', (t.offsetTop + c.offsetTop) + 'px'); }); }
  cuts(); addEventListener('resize', cuts); if (document.fonts) document.fonts.ready.then(cuts);

  /* ---- the facilities carousel (20 Oct, his ask): the photos fill the arc one after another. The playing segment's fill (CSS, 5 s) ends
          each photo; swiping, a segment or a chip changes it. It runs only while the section is on screen and untouched (.is-paused
          freezes the fill and the push-in where they are), and never under reduced motion ---- */
  var carousel = (function(){
    var stage = document.getElementById('cmpFStage'); if (!stage || !fac) return null;
    var imgs = [].slice.call(fac.querySelectorAll('.cmp-fs')), segs = [].slice.call(stage.querySelectorAll('.cmp-fseg button')), n = imgs.length;
    var kw = document.getElementById('cmpKw'), chips = kw ? [].slice.call(kw.querySelectorAll('.cmp-kw-c')) : [];
    var cap = stage.querySelector('.cmp-fcap'), num = document.getElementById('cmpFN'), name = document.getElementById('cmpFT'), cur = 0, onScreen = false, touching = false;
    function pad(k){ return (k < 9 ? '0' : '') + (k + 1); }
    function restart(el, cls){ el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }
    function go(k){
      k = (k % n + n) % n; cur = k;
      imgs.forEach(function(im, i){ if (i === k) restart(im, 'is-on'); else im.classList.remove('is-on'); if (Math.abs(i - k) <= 1 || i === (k + 1) % n) im.loading = 'eager'; });
      segs.forEach(function(s, i){ s.classList.toggle('is-done', i < k); if (i === k) restart(s, 'is-on'); else s.classList.remove('is-on'); s.setAttribute('aria-current', i === k ? 'true' : 'false'); });
      num.textContent = pad(k) + ' / ' + pad(n - 1); name.textContent = segs[k].getAttribute('aria-label').replace(/^Show /, '');
      restart(cap, 'is-swap');
      chips.forEach(function(c, i){ var on = i === k; c.classList.toggle('is-on', on); c.setAttribute('aria-selected', on); });
      var c = chips[k]; if (c){ var l = c.offsetLeft - 16, r = c.offsetLeft + c.offsetWidth + 16 - kw.clientWidth;   /* keep the lit chip in view */
        if (kw.scrollLeft > l) kw.scrollTo({left: l, behavior: reduce ? 'auto' : 'smooth'}); else if (kw.scrollLeft < r) kw.scrollTo({left: r, behavior: reduce ? 'auto' : 'smooth'}); }
    }
    function sync(){ fac.classList.toggle('is-paused', reduce || !onScreen || touching); }
    segs.forEach(function(s){ s.querySelector('i').addEventListener('animationend', function(e){ if (e.animationName === 'cmpSeg' && s.classList.contains('is-on') && !reduce) go(cur + 1); }); });
    stage.addEventListener('click', function(e){ var s = e.target.closest('.cmp-fseg button'); if (s) go(+s.dataset.k); });
    if (kw) kw.addEventListener('click', function(e){ var c = e.target.closest('.cmp-kw-c'); if (c) go(+c.dataset.k); });
    /* swipe: a horizontal drag of 40 px moves one photo; a held finger pauses the fill */
    var x0 = null, y0 = 0;
    stage.addEventListener('pointerdown', function(e){ if (e.target.closest('.cmp-fseg')) return; x0 = e.clientX; y0 = e.clientY; touching = true; stage.classList.add('is-drag'); sync(); });
    function end(e){ if (x0 === null) return; var dx = e.clientX - x0, dy = e.clientY - y0; x0 = null; touching = false; stage.classList.remove('is-drag');
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) go(cur + (dx < 0 ? 1 : -1)); sync(); }
    stage.addEventListener('pointerup', end); stage.addEventListener('pointercancel', function(){ x0 = null; touching = false; stage.classList.remove('is-drag'); sync(); });
    stage.addEventListener('keydown', function(e){ if (e.key === 'ArrowRight'){ e.preventDefault(); go(cur + 1); } else if (e.key === 'ArrowLeft'){ e.preventDefault(); go(cur - 1); } });
    sync();
    return { go: go, view: function(on){ onScreen = on; sync(); }, cur: function(){ return cur; } };
  })();
  if (fac && carousel) onView(fac, carousel.view);

  /* Rishihood's fee table, from the current page (19 Oct 2026): per semester, [tuition, hostel & mess, admin & tech, refundable deposit] */
  var CAMPUS = {
    fees: [[190000, 120000, 50000, 50000], [190000, 120000, 50000, 0], [240000, 120000, 0, 0], [240000, 120000, 0, 0],
           [240000, 120000, 0, 0], [240000, 120000, 0, 0], [240000, 0, 0, 0], [240000, 0, 0, 0]],
    feeNotes: {0: 'Includes the ₹50,000 seat block fee, paid early to hold your seat.', 6: 'Internship semester: no hostel or mess fee.', 7: 'Internship semester: no hostel or mess fee.'}
  };
  var PARTS = [['Tuition', '#0673F9'], ['Hostel & mess', '#16A34A'], ['Admin & tech', '#7B55EE'], ['Refundable deposit', '#E08600']];

  function inr(n){ var s = String(n), last = s.slice(-3), rest = s.slice(0, -3); return '₹' + (rest ? rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' : '') + last; }

  /* the curriculum as the campus page publishes it (Rishihood and Pune carry the same four years word for word, 19 Oct 2026). Titles
     match the homepage's curriculum section; six skills of "What you'll learn", ordered so no chip sits alone on the last row at 360–430 px;
     projects shortened, three per year */
  var YEARS = [
    {n: 'Year 1', k: 'Build', c: '#007A51', cb: '#E7F6EE', t: 'Systems & AI Essentials', out: 'By the end: DSA and AI fundamentals.',
     skills: ['Data Structures & Algorithms', 'UI/UX', 'Python Basics', 'ReactJS', 'Maths for CS', 'Responsive Web Design'], more: 6,
     proj: [['y1-oss', 'Open Source for an Open World'], ['y1-crm', 'GenAI CRM'], ['y1-algo', 'Algorithm vs AI Challenge']]},
    {n: 'Year 2', k: 'Achieve', c: '#7B55EE', cb: '#F0EBFD', t: 'Scalable AI systems & Machine Learning', out: 'By the end: ML models on real-world data pipelines.',
     skills: ['Node Js', 'Backend Engineering', 'Machine Learning', 'Dynamic Programming', 'Databases', 'Spark'], more: 6,
     proj: [['y2-lastmile', 'Last-mile delivery routing'], ['y2-snapchat', 'A Snapchat-like app'], ['y2-ebay', 'eBay-style live bidding']]},
    {n: 'Year 3', k: 'Innovate', c: '#0673F9', cb: '#E5F1FF', t: 'AI models, systems & System Design', out: 'By the end: AI systems and scalable architectures.',
     skills: ['Event-Driven Programming', 'RISC Architecture', 'Deep Learning', 'GPT models', 'Networks (OSI)'], more: 0,
     proj: [['y3-csk', 'An IPL auction for CSK'], ['y3-docs', 'A Google Docs-style editor'], ['y3-stream', 'Live streaming at scale']]},
    {n: 'Year 4', k: 'Succeed', c: '#C77A00', cb: '#FEF3E0', t: 'Internships, OS, Vision & NLP', out: 'By the end: real-world impact and AI fluency.',
     skills: ['Operating Systems', 'NLP', 'Computer Vision', 'Cyber Security', 'OpenCV', 'Capstone Project'], more: 0,
     proj: [['y4-llm', 'Train your own LLM'], ['y4-deeptech', 'Deep-tech projects'], ['y4-toptech', 'Prep for top tech firms']],
     note: 'An internship, research or a project: one is mandatory.'}
  ];

  /* ---- 05 · curriculum: tabs pick a year; the card re-renders in that year's colour ---- */
  (function(){
    var tabs = document.getElementById('cmpYTabs'), card = document.getElementById('cmpYear'); if (!tabs || !card) return;
    tabs.innerHTML = YEARS.map(function(y, i){ return '<button type="button" role="tab" data-y="' + i + '" style="--c:' + y.c + ';--cb:' + y.cb + '">' + y.n + '</button>'; }).join('');
    var tick = '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.6" fill="currentColor"/><path d="M5.2 8.2l1.9 1.9 3.8-4" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    function show(i){
      var y = YEARS[i];
      tabs.querySelectorAll('button').forEach(function(b){ var on = +b.dataset.y === i; b.classList.toggle('is-on', on); b.setAttribute('aria-selected', on); });
      card.style.setProperty('--c', y.c); card.style.setProperty('--cb', y.cb);
      card.innerHTML = '<div class="cmp-ycard-in"><p class="cmp-yk">' + y.n + ' · ' + y.k + '</p><h3>' + y.t + '</h3>' +
        '<p class="cmp-yout">' + tick + y.out + '</p>' +
        '<p class="cmp-ylab">What you’ll learn</p><div class="cmp-ychips">' + y.skills.map(function(s){ return '<span>' + s + '</span>'; }).join('') + (y.more ? '<span class="is-more">+' + y.more + ' more</span>' : '') + '</div>' +
        '<p class="cmp-ylab">Projects</p><div class="cmp-yproj">' + y.proj.map(function(p){ return '<figure><img src="assets/cur/proj/' + p[0] + '.jpg" alt=""><figcaption>' + p[1] + '</figcaption></figure>'; }).join('') + '</div>' +
        (y.note ? '<em class="cmp-ynote">' + y.note + '</em>' : '') + '</div>';
      card.classList.remove('is-swap'); void card.offsetWidth; card.classList.add('is-swap');
    }
    tabs.addEventListener('click', function(e){ var b = e.target.closest('button'); if (b) show(+b.dataset.y); });
    show(0);
  })();

  /* ---- 07 · loans: the admissions picker and its lender-by-lender terms (from the admissions page) ---- */
  var LOANS = {
    pnb: {n: 'PNB', via: 'Through Edufin', t: [['7.35% to 9.00%', 'Cost of education', '15 years', '1% + GST'], ['7.35% to 9.00%', 'Cost of education', '15 years', '1% + GST']]},
    bob: {n: 'Bank of Baroda', via: 'Through Edufin', t: [['8.00% to 10.50%', 'Cost of education', '15 years', '1% + GST'], ['8.00% to 10.50%', 'Cost of education', '15 years', '1% + GST']]},
    axis: {n: 'Axis Bank', t: [['10.50%', '95% of the total cost', 'Up to 15 years', '1% + GST'], ['11.25%', '95% of the total cost', 'Up to 15 years', '1% + GST']]},
    icici: {n: 'ICICI Bank', t: [['9.00%', 'Up to ₹3 crore', 'Up to 15 years', '0.75% or ₹19,999, lower (excl. GST)'], ['9.75%', 'Up to ₹1 crore', 'Up to 15 years', '0.75% or ₹19,999, lower (excl. GST)']]},
    tata: {n: 'Tata Capital', t: [['From 9.50%', 'Up to ₹2 crore', 'Up to 15 years', '1% + GST'], ['From 9.50%', 'Up to ₹2 crore', 'Up to 15 years', '1% + GST']]},
    gyandhan: {n: 'GyanDhan', t: [['9.10% to 9.60%', 'Cost of education', '15 years', 'None'], ['11.50% to 12.50%', 'Based on programme', 'Up to 12 years', '1% + GST']]},
    propelld: {n: 'Propelld', t: [['11.00%', '90% of fees + college hostel', 'Up to 10 years', '1% + GST'], ['11.25%', '90% of fees + college hostel', 'Up to 10 years', '1% + GST']]},
    kuhoo: {n: 'Kuhoo', t: [['10% to 15.5%', 'Up to 100% of fees and living costs', 'Up to 12 years', '1% + GST'], ['10% to 15.5%', 'Up to 100% of fees and living costs', 'Up to 12 years', '1% + GST']]}
  };
  (function(){
    var card = document.getElementById('admLoan'), grid = document.querySelector('.adm-lgrid'); if (!card || !grid) return;
    var cur = 'pnb', type = 0, segs = card.querySelectorAll('.adm-lseg button');
    function $(id){ return document.getElementById(id); }
    function render(){
      var L = LOANS[cur], v = L.t[type];
      $('admLName').textContent = L.n; $('admLVia').textContent = L.via || '';
      $('admLRate').textContent = v[0]; $('admLMax').textContent = v[1]; $('admLTen').textContent = v[2]; $('admLFee').textContent = v[3];
      segs.forEach(function(b){ b.classList.toggle('is-on', +b.dataset.t === type); });
      card.classList.remove('is-swap'); void card.offsetWidth; card.classList.add('is-swap');
    }
    grid.addEventListener('click', function(e){
      var t = e.target.closest('.adm-lt'); if (!t) return;
      cur = t.dataset.l;
      grid.querySelectorAll('.adm-lt').forEach(function(x){ var on = x === t; x.classList.toggle('is-on', on); x.setAttribute('aria-selected', on); });
      render();
    });
    segs.forEach(function(b){ b.addEventListener('click', function(){ type = +b.dataset.t; render(); }); });
  })();

  /* ---- 08 · laptop: through NST, or bring your own; the MacBook on the stage changes with it ---- */
  (function(){
    var seg = document.querySelector('.cmp-mseg'); if (!seg) return;
    seg.addEventListener('click', function(e){
      var b = e.target.closest('button'); if (!b) return;
      seg.querySelectorAll('button').forEach(function(x){ var on = x === b; x.classList.toggle('is-on', on); x.setAttribute('aria-selected', on); });
      document.querySelectorAll('.cmp-mp').forEach(function(p){ p.classList.toggle('is-on', p.dataset.m === b.dataset.m); });
      document.querySelectorAll('.cmp-mimg').forEach(function(im){ im.classList.toggle('is-on', im.dataset.m === b.dataset.m); });
    });
  })();

  /* ---- 06 · fees: one bar per semester, stacked by component; the picked semester's breakdown below ---- */
  (function(){
    var bars = document.getElementById('cmpBars'), sem = document.getElementById('cmpSem'), head = document.getElementById('cmpFTot'); if (!bars || !sem) return;
    var F = CAMPUS.fees, max = Math.max.apply(null, F.map(function(r){ return r.reduce(function(a, b){ return a + b; }, 0); })), H = 132;
    bars.innerHTML = F.map(function(r, i){
      var tot = r.reduce(function(a, b){ return a + b; }, 0);
      return '<button type="button" role="tab" class="cmp-bar" data-i="' + i + '" aria-label="Semester ' + (i + 1) + ', ' + inr(tot) + '" style="--h:' + Math.round(tot / max * H) + 'px">' +
        r.map(function(v, k){ return v ? '<i style="--c:' + PARTS[k][1] + ';--s:' + Math.max(3, Math.round(v / max * H) - 3) + 'px"></i>' : ''; }).join('') +
        '<em>S' + (i + 1) + '</em></button>';
    }).join('');
    function pick(i){
      bars.querySelectorAll('.cmp-bar').forEach(function(b){ var on = +b.dataset.i === i; b.classList.toggle('is-on', on); b.setAttribute('aria-selected', on); });
      var r = F[i], tot = r.reduce(function(a, b){ return a + b; }, 0);
      sem.innerHTML = (CAMPUS.feeNotes[i] ? '<p class="cmp-fsem-n">' + CAMPUS.feeNotes[i] + '</p>' : '') +
        r.map(function(v, k){ return v ? '<p class="cmp-fr" style="--c:' + PARTS[k][1] + '"><span>' + PARTS[k][0] + '</span><b>' + inr(v) + '</b></p>' : ''; }).join('') +
        '';
      if (head) head.innerHTML = '<span>Semester ' + (i + 1) + '</span><b>' + inr(tot) + '</b>';   /* the picked semester heads the card; no programme total */
    }
    bars.addEventListener('click', function(e){ var b = e.target.closest('.cmp-bar'); if (b) pick(+b.dataset.i); });
    pick(0);
  })();

  /* ---- 03 · only at Rishihood: tabs pick the card ---- */
  (function(){
    var tabs = document.querySelector('.cmp-otabs'); if (!tabs) return;
    var cards = document.querySelectorAll('.cmp-oc');
    tabs.addEventListener('click', function(e){
      var b = e.target.closest('button'); if (!b) return;
      tabs.querySelectorAll('button').forEach(function(x){ var on = x === b; x.classList.toggle('is-on', on); x.setAttribute('aria-selected', on); });
      cards.forEach(function(c){ c.classList.toggle('is-on', c.dataset.o === b.dataset.o); });
    });
  })();

  /* ---- 10 · FAQ: one open at a time ---- */
  var acc = document.getElementById('plAcc');
  if (acc) acc.querySelectorAll('.pl-q button').forEach(function(b){ b.addEventListener('click', function(){
    var q = b.parentNode, open = !q.classList.contains('is-open');
    acc.querySelectorAll('.pl-q').forEach(function(x){ x.classList.remove('is-open'); x.querySelector('button').setAttribute('aria-expanded', 'false'); });
    if (open){ q.classList.add('is-open'); b.setAttribute('aria-expanded', 'true'); }
  }); });

  /* ---- 08 · the MacBook's lid follows the scroll: open while the stage is near the middle of the screen, folding shut as it moves
          away above or below. Eased toward the target each frame; only runs while the stage is near the screen; open under reduced motion ---- */
  (function(){
    var lap = document.getElementById('cmpLap'), lid = document.getElementById('cmpLid'); if (!lap || !lid) return;
    if (reduce){ lid.style.setProperty('--lid', '0deg'); return; }
    var SHUT = -88, a = SHUT, raf = 0, near = false;
    function target(){ var r = lap.getBoundingClientRect(), vh = innerHeight, d = Math.abs((r.top + r.height / 2) - vh * .5) / (vh * .5); var open = Math.max(0, Math.min(1, 1 - (d - .12) / .62)); return SHUT * (1 - open * open * (3 - 2 * open)); }
    function frame(){ var t = target(); a += (t - a) * .14; if (Math.abs(t - a) < .05) a = t; lid.style.setProperty('--lid', a.toFixed(2) + 'deg'); raf = (near && Math.abs(t - a) > .01) ? requestAnimationFrame(frame) : 0; }
    function kick(){ if (near && !raf) raf = requestAnimationFrame(frame); }
    lid.style.setProperty('--lid', SHUT + 'deg');
    new IntersectionObserver(function(en){ near = en[0].isIntersecting; kick(); }, {rootMargin: '200px 0px'}).observe(lap);
    addEventListener('scroll', kick, {passive: true}); addEventListener('resize', kick);
  })();

  /* ---- the tour player: the play button opens it with sound; the X, Esc or a tap outside the video closes it and returns focus ---- */
  (function(){
    var btn = document.getElementById('cmpTour'), tv = document.getElementById('cmpTv'), v = document.getElementById('cmpTvV'), x = document.getElementById('cmpTvX');
    if (!btn || !tv || !v) return;
    var open = false, back = null;
    function show(){
      if (open) return; open = true; back = document.activeElement;
      document.body.appendChild(tv);   /* out of the page column, so it covers the whole screen */
      tv.classList.add('is-open'); tv.setAttribute('aria-hidden', 'false'); document.documentElement.classList.add('cmp-tv-on');
      if (loop) loop.pause();
      v.preload = 'auto'; var pr = v.play(); if (pr && pr.catch) pr.catch(function(){});
      x.focus();
    }
    function hide(){
      if (!open) return; open = false;
      v.pause(); tv.classList.remove('is-open'); tv.setAttribute('aria-hidden', 'true'); document.documentElement.classList.remove('cmp-tv-on');
      if (hv && hv.classList.contains('is-live')) playLoop();
      if (back && back.focus) back.focus();
    }
    btn.addEventListener('click', show);
    x.addEventListener('click', hide);
    tv.addEventListener('click', function(e){ if (e.target === tv) hide(); });
    document.addEventListener('keydown', function(e){ if (open && e.key === 'Escape' && !e.defaultPrevented){ e.preventDefault(); hide(); } });
  })();
})();
