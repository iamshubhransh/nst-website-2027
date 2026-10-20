/* campus page · Rishihood University (phone). His frames 744:61112 (hero, summary tiles, Facilities & Amenities) and 745:67391
   (only at Rishihood, scholarships, curriculum, fees, loans, laptop, visit, FAQs). Per-campus facts live in CAMPUS, YEARS and LOANS */
(function(){
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  function onView(el, fn, margin){ new IntersectionObserver(function(en){ fn(en[0].isIntersecting); }, {rootMargin: margin || '0px'}).observe(el); }

  /* ---- 01 · the route: the student walks the stations in order (register → NSAT → interview → counselling → block), each station's
          flag lights while they stand at it; after the last they walk on through the campus gate, fade, and start again at register.
          Built (and kept, under reduced motion) standing at NSAT, as in his frame. Runs only while the hero is on screen. ---- */
  (function(){
    var g = document.getElementById('rtStu'), hero = document.querySelector('.cmp-hero'); if (!g || !hero) return;
    var ST = __RT_STATIONS__, U = __RT_UNIT__, GATE = ST[ST.length - 1] + 172, flags = hero.querySelectorAll('.rt-flag');
    function at(x){ g.setAttribute('transform', 'translate(' + (U[0] * x).toFixed(1) + ' ' + (U[1] * x).toFixed(1) + ')'); }
    function light(k){ flags.forEach(function(f){ f.classList.toggle('on', +f.dataset.i === k); }); }
    if (reduce) return;
    g.style.transition = 'opacity .45s ease';
    var i = 1, from = ST[1], to = ST[1], phase = 'hold', t0 = 0, raf = 0, live = false, HOLD = 1700, MOVE = 1400;
    function ease(p){ return p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; }
    function frame(now){
      if (!t0) t0 = now;
      var dt = now - t0;
      if (phase === 'hold' && dt > HOLD){
        phase = 'move'; t0 = now; from = to; light(-1);
        to = i < ST.length - 1 ? ST[++i] : GATE;
      } else if (phase === 'move'){
        var p = Math.min(1, dt / MOVE); at(from + (to - from) * ease(p));
        if (p >= 1){ t0 = now; if (to === GATE){ phase = 'out'; g.style.opacity = '0'; } else { phase = 'hold'; light(i); } }
      } else if (phase === 'out' && dt > 600){
        i = 0; from = to = ST[0]; at(to); g.style.opacity = '1'; phase = 'hold'; t0 = now; light(0);
      }
      raf = live ? requestAnimationFrame(frame) : 0;
    }
    onView(hero, function(on){ live = on; if (live && !raf){ t0 = 0; raf = requestAnimationFrame(frame); } });
  })();

  /* ---- 02 · facilities: while the section is on screen the dome's beam runs and the silent loop plays (never under reduced motion) ---- */
  var fac = document.getElementById('facilities'), loop = document.getElementById('cmpLoop');
  if (fac) onView(fac, function(on){
    fac.classList.toggle('is-live', on && !reduce);
    if (!loop || reduce) return;
    if (on){ var pr = loop.play(); if (pr && pr.catch) pr.catch(function(){}); } else loop.pause();
  });

  /* ---- keywords ↔ photos: a chip scrolls the strip to its photo; swiping the strip lights the chip of the photo at its left edge ---- */
  (function(){
    var kw = document.getElementById('cmpKw'), strip = document.getElementById('cmpSpaces'); if (!kw || !strip) return;
    var chips = [].slice.call(kw.querySelectorAll('.cmp-kw-c')), cards = [].slice.call(strip.querySelectorAll('.cmp-sp')), cur = 0, lock = 0;
    function light(k){
      if (k === cur) return; cur = k;
      chips.forEach(function(c, i){ var on = i === k; c.classList.toggle('is-on', on); c.setAttribute('aria-selected', on); });
      var c = chips[k], l = c.offsetLeft - 16, r = c.offsetLeft + c.offsetWidth + 16 - kw.clientWidth;   /* keep the lit chip in view */
      if (kw.scrollLeft > l) kw.scrollTo({left: l, behavior: reduce ? 'auto' : 'smooth'});
      else if (kw.scrollLeft < r) kw.scrollTo({left: r, behavior: reduce ? 'auto' : 'smooth'});
    }
    kw.addEventListener('click', function(e){
      var c = e.target.closest('.cmp-kw-c'); if (!c) return;
      var k = +c.dataset.k; light(k);
      lock = Date.now() + 700;   /* the strip's own scroll events would fight the chip while it glides */
      strip.scrollTo({left: cards[k].offsetLeft - 16, behavior: reduce ? 'auto' : 'smooth'});
    });
    var tick = 0;
    strip.addEventListener('scroll', function(){
      if (tick) return;
      tick = requestAnimationFrame(function(){
        tick = 0; if (Date.now() < lock) return;
        var x = strip.scrollLeft, k = 0, best = 1e9;
        cards.forEach(function(c, i){ var d = Math.abs(c.offsetLeft - 16 - x); if (d < best){ best = d; k = i; } });
        if (x + strip.clientWidth >= strip.scrollWidth - 2) k = cards.length - 1;   /* the last card can't reach the left edge */
        light(k);
      });
    }, {passive: true});
  })();

  /* Rishihood's fee table, from the current page (19 Oct 2026): per semester, [tuition, hostel & mess, admin & tech, refundable deposit] */
  var CAMPUS = {
    fees: [[190000, 120000, 50000, 50000], [190000, 120000, 50000, 0], [240000, 120000, 0, 0], [240000, 120000, 0, 0],
           [240000, 120000, 0, 0], [240000, 120000, 0, 0], [240000, 0, 0, 0], [240000, 0, 0, 0]],
    feeNotes: {0: 'Includes the ₹50,000 seat block fee, paid early to hold your seat.', 6: 'Internship semester: no hostel or mess fee.', 7: 'Internship semester: no hostel or mess fee.'}
  };
  var PARTS = [['Tuition', '#0673F9'], ['Hostel & mess', '#16A34A'], ['Admin & tech', '#7B55EE'], ['Refundable deposit', '#E08600']];

  function inr(n){ var s = String(n), last = s.slice(-3), rest = s.slice(0, -3); return '₹' + (rest ? rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' : '') + last; }
  function lakh(n){ return '₹' + (n / 100000).toFixed(1).replace(/\.0$/, '') + 'L'; }

  /* the curriculum as the campus page publishes it (Rishihood and Pune carry the same four years word for word, 19 Oct 2026). Titles
     match the homepage's curriculum section; skills are the first six of "What you'll learn"; projects shortened, three per year */
  var YEARS = [
    {n: 'Year 1', k: 'Build', c: '#007A51', cb: '#E7F6EE', t: 'Systems & AI Essentials', out: 'By the end: DSA and AI fundamentals.',
     skills: ['Python Basics', 'ReactJS', 'UI/UX', 'Data Structures & Algorithms', 'Maths for CS', 'Responsive Web Design'], more: 6,
     proj: [['y1-oss', 'Open Source for an Open World'], ['y1-crm', 'GenAI CRM'], ['y1-algo', 'Algorithm vs AI Challenge']]},
    {n: 'Year 2', k: 'Achieve', c: '#7B55EE', cb: '#F0EBFD', t: 'Scalable AI systems & Machine Learning', out: 'By the end: ML models on real-world data pipelines.',
     skills: ['Node Js', 'Backend Engineering', 'Machine Learning', 'Databases', 'Dynamic Programming', 'Spark'], more: 6,
     proj: [['y2-lastmile', 'Last-mile delivery routing'], ['y2-snapchat', 'A Snapchat-like app'], ['y2-ebay', 'eBay-style live bidding']]},
    {n: 'Year 3', k: 'Innovate', c: '#0673F9', cb: '#E5F1FF', t: 'AI models, systems & System Design', out: 'By the end: AI systems and scalable architectures.',
     skills: ['Deep Learning', 'GPT models', 'Event-Driven Programming', 'Networks (OSI)', 'RISC Architecture'], more: 0,
     proj: [['y3-csk', 'An IPL auction for CSK'], ['y3-docs', 'A Google Docs-style editor'], ['y3-stream', 'Live streaming at scale']]},
    {n: 'Year 4', k: 'Succeed', c: '#C77A00', cb: '#FEF3E0', t: 'Internships, OS, Vision & NLP', out: 'By the end: real-world impact and AI fluency.',
     skills: ['Operating Systems', 'Computer Vision', 'NLP', 'Cyber Security', 'OpenCV', 'Capstone Project'], more: 0,
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

  /* ---- 08 · laptop: through NST, or bring your own ---- */
  (function(){
    var seg = document.querySelector('.cmp-mseg'); if (!seg) return;
    seg.addEventListener('click', function(e){
      var b = e.target.closest('button'); if (!b) return;
      seg.querySelectorAll('button').forEach(function(x){ var on = x === b; x.classList.toggle('is-on', on); x.setAttribute('aria-selected', on); });
      document.querySelectorAll('.cmp-mp').forEach(function(p){ p.classList.toggle('is-on', p.dataset.m === b.dataset.m); });
    });
  })();

  /* ---- 06 · fees: one bar per semester, stacked by component; the picked semester's breakdown below ---- */
  (function(){
    var bars = document.getElementById('cmpBars'), sem = document.getElementById('cmpSem'); if (!bars || !sem) return;
    var F = CAMPUS.fees, max = Math.max.apply(null, F.map(function(r){ return r.reduce(function(a, b){ return a + b; }, 0); })), H = 132;
    bars.innerHTML = F.map(function(r, i){
      var tot = r.reduce(function(a, b){ return a + b; }, 0);
      return '<button type="button" role="tab" class="cmp-bar" data-i="' + i + '" aria-label="Semester ' + (i + 1) + ', ' + inr(tot) + '" style="--h:' + Math.round(tot / max * H) + 'px">' +
        r.map(function(v, k){ return v ? '<i style="--c:' + PARTS[k][1] + ';--s:' + Math.max(3, Math.round(v / max * H) - 2) + 'px"></i>' : ''; }).join('') +
        '<b>' + lakh(tot) + '</b><em>S' + (i + 1) + '</em></button>';
    }).join('');
    function pick(i){
      bars.querySelectorAll('.cmp-bar').forEach(function(b){ var on = +b.dataset.i === i; b.classList.toggle('is-on', on); b.setAttribute('aria-selected', on); });
      var r = F[i], tot = r.reduce(function(a, b){ return a + b; }, 0);
      sem.innerHTML = (CAMPUS.feeNotes[i] ? '<p class="cmp-fsem-n">' + CAMPUS.feeNotes[i] + '</p>' : '') +
        r.map(function(v, k){ return v ? '<p class="cmp-fr" style="--c:' + PARTS[k][1] + '"><span>' + PARTS[k][0] + '</span><b>' + inr(v) + '</b></p>' : ''; }).join('') +
        '<p class="cmp-fr is-tot"><span>Semester ' + (i + 1) + '</span><b>' + inr(tot) + '</b></p>';
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
      if (loop && fac && fac.classList.contains('is-live')){ var pr = loop.play(); if (pr && pr.catch) pr.catch(function(){}); }
      if (back && back.focus) back.focus();
    }
    btn.addEventListener('click', show);
    x.addEventListener('click', hide);
    tv.addEventListener('click', function(e){ if (e.target === tv) hide(); });
    document.addEventListener('keydown', function(e){ if (open && e.key === 'Escape' && !e.defaultPrevented){ e.preventDefault(); hide(); } });
  })();
})();
