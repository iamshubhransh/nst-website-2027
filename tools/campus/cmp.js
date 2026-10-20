/* campus page · Rishihood University (phone). His frame 744:61112: hero, summary tiles, Facilities & Amenities */
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
