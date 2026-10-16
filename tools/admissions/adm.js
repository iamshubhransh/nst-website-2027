/* ================= admissions · interactions (phone; his frame 718:5488) ================= */
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 01 · the route: the student walks the stations in order (register → NSAT → interview → counselling → block), each station's
     flag lights while they stand at it; after the last they walk on through the campus gate, fade, and start again at register.
     Built (and kept, under reduced motion) standing at NSAT. Runs only while the hero is on screen. */
  (function(){
    var g = document.getElementById('rtStu'), hero = document.querySelector('.adm-hero'); if (!g || !hero) return;
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
        if (p >= 1){
          t0 = now;
          if (to === GATE){ phase = 'out'; g.style.opacity = '0'; }
          else { phase = 'hold'; light(i); }
        }
      } else if (phase === 'out' && dt > 600){
        i = 0; from = to = ST[0]; at(to); g.style.opacity = '1'; phase = 'hold'; t0 = now; light(0);
      }
      raf = live ? requestAnimationFrame(frame) : 0;
    }
    new IntersectionObserver(function(en){ live = en[0].isIntersecting; if (live && !raf){ t0 = 0; raf = requestAnimationFrame(frame); } }).observe(hero);
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
