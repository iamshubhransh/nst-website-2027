/* ================= admissions · interactions (phone; his frame 718:5488) ================= */
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 01 · the route: the student walks the stations in order (register → NSAT → interview → counselling → block), each station's
     flag lights while they stand at it; after the last they walk on through the campus gate, fade, and start again at register.
     Built (and kept, under reduced motion) standing at NSAT. Runs only while the hero is on screen. */
  (function(){
    var g = document.getElementById('rtStu'), hero = document.querySelector('.adm-hero'); if (!g || !hero) return;
    var ST = __RT_STATIONS__, U = __RT_UNIT__, POSES = __RT_POSES__, STRIDE = __RT_STRIDE__, GATE = ST[ST.length - 1] + 172, flags = hero.querySelectorAll('.rt-flag');
    var poses = g.querySelectorAll('.rt-pose'), shown = 'idle';
    function at(x){ g.setAttribute('transform', 'translate(' + (U[0] * x).toFixed(1) + ' ' + (U[1] * x).toFixed(1) + ')'); }
    function pose(p){ if (p === shown) return; shown = p; poses.forEach(function(q){ if (q.dataset.p === String(p)) q.removeAttribute('display'); else q.setAttribute('display', 'none'); }); }
    function light(k){ flags.forEach(function(f){ f.classList.toggle('on', +f.dataset.i === k); }); }
    if (reduce) return;
    g.style.transition = 'opacity .45s ease';
    /* a steady walk between stations (the pose follows the distance walked: one full stride cycle every STRIDE units), a pause at each */
    var SPEED = 46, HOLD = 1400;   /* units per second; ms */
    var i = 1, x = ST[1], to = ST[1], phase = 'hold', t0 = 0, last = 0, raf = 0, live = false;
    function frame(now){
      if (!t0){ t0 = now; last = now; }
      var dt = Math.min(now - last, 50) / 1000; last = now;
      if (phase === 'hold' && now - t0 > HOLD){
        phase = 'walk'; light(-1);
        to = i < ST.length - 1 ? ST[++i] : GATE;
      } else if (phase === 'walk'){
        x = Math.min(to, x + SPEED * dt); at(x);
        pose(Math.floor(((x - ST[0]) % STRIDE) / STRIDE * POSES));
        if (x >= to){
          pose('idle'); t0 = now;
          if (to === GATE){ phase = 'out'; g.style.opacity = '0'; }
          else { phase = 'hold'; light(i); }
        }
      } else if (phase === 'out' && now - t0 > 600){
        i = 0; x = to = ST[0]; at(x); g.style.opacity = '1'; phase = 'hold'; t0 = now; light(0);
      }
      raf = live ? requestAnimationFrame(frame) : 0;
    }
    new IntersectionObserver(function(en){ live = en[0].isIntersecting; if (live && !raf){ t0 = 0; last = 0; raf = requestAnimationFrame(frame); } }).observe(hero);
  })();

  /* 01 · the first fold: the whole next-NSAT ticket (date, deadline, CTA, registered count) must be on screen when the page opens, with the browser's toolbars showing (the small viewport,
     100svh). Measure the copy from the crumbs to the ticket's bottom edge (it wraps differently per width) and give the figure the
     rest, up to its 420, never under 88, keeping 16 px clear below the ticket. Re-fit when the width changes (not on toolbar
     show/hide: svh does not move). */
  (function(){
    var hero = document.querySelector('.adm-hero'), copy = hero && hero.querySelector('.pl-hero-copy'), cta = hero && hero.querySelector('.adm-ticket');
    if (!hero || !copy || !cta) return;
    var probe = document.createElement('div'); probe.style.cssText = 'position:fixed;left:0;top:0;width:0;height:100vh;height:100svh;visibility:hidden;pointer-events:none';
    document.body.appendChild(probe);
    var w = 0;
    function fit(force){
      if (!force && innerWidth === w) return; w = innerWidth;
      var vh = probe.offsetHeight || innerHeight, need = cta.getBoundingClientRect().bottom - copy.getBoundingClientRect().top;
      var fig = Math.min(420, Math.round(vh - need - 10 - 16)), none = fig < 140;   /* under 140 the figure is a sliver behind the nav: drop it */
      hero.classList.toggle('adm-nofig', none);
      hero.style.setProperty('--fig', (none ? 88 : fig) + 'px');   /* 88: the copy still clears the nav */
    }
    fit(true); addEventListener('resize', function(){ fit(false); });
    if (document.fonts) document.fonts.ready.then(function(){ fit(true); });
  })();

  /* the hero strip drifts while the hero is on screen (the placements hero's is-live) */
  var hero = document.querySelector('.adm-hero');
  if (hero) new IntersectionObserver(function(en){ hero.classList.toggle('is-live', en[0].isIntersecting); }).observe(hero);

  /* 02 · the route chooser: a chip or a card picks the route; the picked card opens and its chip lights (and scrolls into view) */
  (function(){
    var pick = document.querySelector('.adm-pick'), cards = document.querySelectorAll('.adm-rc'); if (!pick || !cards.length) return;
    function select(r){
      pick.querySelectorAll('button').forEach(function(x){
        var on = x.dataset.r === r; x.classList.toggle('is-on', on); x.setAttribute('aria-selected', on);
        if (on) pick.scrollTo({left: Math.max(0, x.offsetLeft - 16), behavior: reduce ? 'auto' : 'smooth'});
      });
      cards.forEach(function(c){ var on = c.dataset.r === r; c.classList.toggle('is-on', on); c.setAttribute('aria-expanded', on); });
    }
    pick.addEventListener('click', function(e){ var b = e.target.closest('button'); if (b) select(b.dataset.r); });
    cards.forEach(function(c){
      c.setAttribute('tabindex', '0'); c.setAttribute('role', 'button'); c.setAttribute('aria-expanded', c.classList.contains('is-on'));
      c.addEventListener('click', function(e){ if (e.target.closest('a')) return; select(c.dataset.r); });
      c.addEventListener('keydown', function(e){ if ((e.key === 'Enter' || e.key === ' ') && e.target === c){ e.preventDefault(); select(c.dataset.r); } });
    });
  })();

  /* 07 · loans: tap a logo to see that lender's terms; switch secured / unsecured. [rate, max loan, tenure, processing] per type */
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

  /* 08 · campus dots follow the swipe */
  var camps = document.querySelector('.adm-camps'), dots = document.querySelectorAll('.adm-dots i');
  if (camps && dots.length) camps.addEventListener('scroll', function(){
    var i = Math.round(camps.scrollLeft / (camps.firstElementChild.offsetWidth + 12));
    dots.forEach(function(d, k){ d.classList.toggle('on', k === i); });
  }, {passive: true});

  /* 09 · FAQ: one open at a time */
  var acc = document.getElementById('plAcc');
  if (acc) acc.querySelectorAll('.pl-q button').forEach(function(b){ b.addEventListener('click', function(){
    var q = b.parentNode, open = !q.classList.contains('is-open');
    acc.querySelectorAll('.pl-q').forEach(function(x){ x.classList.remove('is-open'); x.querySelector('button').setAttribute('aria-expanded', 'false'); });
    if (open){ q.classList.add('is-open'); b.setAttribute('aria-expanded', 'true'); }
  }); });
})();
