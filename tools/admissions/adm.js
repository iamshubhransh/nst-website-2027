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

  /* 01 · the first fold: the CTA must be on screen when the page opens, with the browser's toolbars showing (the small viewport,
     100svh). Measure the copy from the crumbs to the CTA's bottom edge (it wraps differently per width) and give the figure the
     rest, up to its 420, never under 150, keeping 24 px clear below the CTA. Re-fit when the width changes (not on toolbar
     show/hide: svh does not move). */
  (function(){
    var hero = document.querySelector('.adm-hero'), copy = hero && hero.querySelector('.pl-hero-copy'), cta = hero && hero.querySelector('.pl-cta');
    if (!hero || !copy || !cta) return;
    var probe = document.createElement('div'); probe.style.cssText = 'position:fixed;left:0;top:0;width:0;height:100vh;height:100svh;visibility:hidden;pointer-events:none';
    document.body.appendChild(probe);
    var w = 0;
    function fit(force){
      if (!force && innerWidth === w) return; w = innerWidth;
      var vh = probe.offsetHeight || innerHeight, need = cta.getBoundingClientRect().bottom - copy.getBoundingClientRect().top;
      hero.style.setProperty('--fig', Math.max(150, Math.min(420, Math.round(vh - need - 10 - 24))) + 'px');
    }
    fit(true); addEventListener('resize', function(){ fit(false); });
    if (document.fonts) document.fonts.ready.then(function(){ fit(true); });
  })();

  /* the hero strip drifts while the hero is on screen (the placements hero's is-live) */
  var hero = document.querySelector('.adm-hero');
  if (hero) new IntersectionObserver(function(en){ hero.classList.toggle('is-live', en[0].isIntersecting); }).observe(hero);

  /* 02 · the route chooser lights the card that fits */
  var pick = document.querySelector('.adm-pick');
  if (pick) pick.addEventListener('click', function(e){
    var b = e.target.closest('button'); if (!b) return;
    pick.querySelectorAll('button').forEach(function(x){ var on = x === b; x.classList.toggle('is-on', on); x.setAttribute('aria-selected', on); });
    document.querySelectorAll('.adm-rc').forEach(function(c){ c.classList.toggle('is-on', c.dataset.r === b.dataset.r); });
  });

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
