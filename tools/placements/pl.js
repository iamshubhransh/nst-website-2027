/* ================= placements page · interactions ================= */
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var A = 'assets/pl/';
  function img(n){ return A + 'intern-' + n.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.jpg'; }
  function onView(el, cb, opt){ if (!el) return; new IntersectionObserver(function(en){ en.forEach(function(e){ cb(e.isIntersecting, e); }); }, opt || {threshold: 0}).observe(el); }
  function once(el, cb, th){ if (!el) return; var io = new IntersectionObserver(function(en){ if (en[0].isIntersecting){ io.disconnect(); cb(); } }, {threshold: th || .3}); io.observe(el); }
  function esc(s){ return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }

  /* ---- 01 · the intern wall: three columns drift up at different speeds; every few seconds a different tile in the middle
          band lights (full colour, blue outline) ---- */
  (function(){
    var hero = document.querySelector('.pl-hero'), cols = document.getElementById('plCols'); if (!cols) return;
    var C = [
      [['Vedansha Srivastava','AssessHub'],['Vinayak Mohakud','Licious'],['Ananya Pandey','HappiMynd'],['Manik Tyagi','GOQII'],['Pratik Kumar Pan','SuperK'],['Koyna Arya','Zuvees'],['Himanshu Mishra','Genyx AI'],['Birajit Saikia','After Query']],
      [['Sayuri Janbandhu','AssessHub'],['Sourya','EKO'],['Tanima Samanta','Emergent'],['Pushkar Gupta','Zeko AI'],['Arun Kumar','Accops'],['Anishka Khurana','NextYou'],['Jatin Bisen','Ridecell'],['Nitin Sahu','Firstcron']],
      [['Sahil Singh','Bluecopa'],['Sumit Kumar Nayak','Licious'],['Angelo Nelson','Licious'],['Swarnim Balpande','Emergent'],['Devendra Mishra','Drona Aviation'],['Parth Singh','Sherlocks.AI'],['Adarsh Priydarshi','NextYou'],['Abhay Pratap Yadav','CustomsVerse']]
    ];
    var SPEED = [9, 12, 10.5];   /* px per second */
    C.forEach(function(list, c){
      var col = document.createElement('div'); col.className = 'pl-col';
      var strip = document.createElement('div'); strip.className = 'pl-strip';
      for (var k = 0; k < 2; k++) list.forEach(function(p){
        var t = document.createElement('div'); t.className = 'pl-tile'; t.dataset.co = p[1];
        t.innerHTML = '<div class="pl-ph"><img src="' + img(p[0]) + '" alt="" loading="' + (k ? 'lazy' : 'eager') + '"><b>' + esc(p[0].split(' ')[0]) + '</b><span>' + esc(p[1]) + '</span></div>';
        if (k) t.setAttribute('aria-hidden', 'true');
        strip.appendChild(t);
      });
      col.appendChild(strip); cols.appendChild(col);
    });
    function timing(){ cols.querySelectorAll('.pl-strip').forEach(function(s, c){ var t = s.firstChild; var h = t.getBoundingClientRect().height + 10; s.style.setProperty('--dur', (C[c].length * h / SPEED[c]).toFixed(1) + 's'); }); }
    timing(); window.addEventListener('resize', timing);
    var tiles = [].slice.call(cols.querySelectorAll('.pl-tile')), lit = tiles[C[0].length * 2 + 2];   /* Tanima, as in the frame */
    lit.classList.add('is-lit');
    function next(){
      var wall = cols.getBoundingClientRect(), pick = [];
      tiles.forEach(function(t){ if (t === lit) return; var r = t.getBoundingClientRect(), cy = r.top + r.height / 2 - wall.top; if (cy > 150 && cy < 360) pick.push(t); });
      if (!pick.length) return; lit.classList.remove('is-lit'); lit = pick[Math.floor(Math.random() * pick.length)]; lit.classList.add('is-lit');
    }
    var iv = 0;
    onView(hero, function(on){ hero.classList.toggle('is-live', on && !reduce); clearInterval(iv); if (on && !reduce) iv = setInterval(next, 2800); });
  })();

  /* ---- 02 · latest offers: a new one arrives on top with a warm wash and the NEW tag; the rest step down ---- */
  var LOGO = {'NextYou': A + 'co-nextyou.png', 'Zeko AI': A + 'co-zeko-ai.png', 'Drona Aviation': A + 'co-drona-aviation.png', 'Licious': A + 'co-licious.png', 'Emergent': 'assets/co-logo-emergent.png'};
  (function(){
    var ul = document.getElementById('plOffers'); if (!ul) return;
    var POOL = [['Anishka Khurana','NextYou'],['Pushkar Gupta','Zeko AI'],['Devendra Mishra','Drona Aviation'],['Angelo Nelson','Licious'],['Vinayak Mohakud','Licious'],['Swarnim Balpande','Emergent'],['Adarsh Priydarshi','NextYou'],['Sumit Kumar Nayak','Licious'],['Tanima Samanta','Emergent']];
    function row(p){ var li = document.createElement('li'); li.className = 'pl-offer'; li.innerHTML = '<span class="pl-offer-ph"><img src="' + img(p[0]) + '" alt=""><img class="pl-co" src="' + LOGO[p[1]] + '" alt=""></span><span class="pl-offer-t"><b>' + esc(p[0]) + '</b><span>Paid internship · ' + esc(p[1]) + '</span></span><em class="pl-new">NEW</em>'; li.dataset.n = p[0]; return li; }
    for (var i = 0; i < 5; i++) ul.appendChild(row(POOL[i]));
    ul.firstChild.classList.add('is-new');
    var nextI = 5, iv = 0;
    function step(){
      var p = POOL[nextI % POOL.length]; nextI++;
      var li = row(p); li.classList.add('is-enter', 'is-new');
      var prev = ul.querySelector('.is-new'); if (prev) prev.classList.remove('is-new');
      ul.insertBefore(li, ul.firstChild); void li.offsetHeight; li.classList.remove('is-enter');
      var last = ul.lastChild; last.style.opacity = '0';
      setTimeout(function(){ if (last.parentNode) last.remove(); }, 600);
    }
    onView(ul, function(on){ clearInterval(iv); if (on && !reduce) iv = setInterval(step, 2200); });
  })();

  /* ---- 02 · the arc: company discs step along the bottom of the ring; the centre one names itself ---- */
  (function(){
    var arc = document.getElementById('plArc'), label = document.getElementById('plArcLabel'); if (!arc) return;
    var CO = [['Company','assets/co-logo-cube.png','#0673F9',34],['Swiggy','assets/co-logo-swiggy.png','#DE5A02',24],['Emergent','assets/co-logo-emergent.png','#16191D',38],['Licious',A + 'co-licious.png','#D7262D',0],['Zeko AI',A + 'co-zeko-ai.png','#5B3BE0',0],['NextYou',A + 'co-nextyou.png','#7A3CF0',0],['Drona Aviation',A + 'co-drona-aviation.png','#16191D',0]];
    var Y = {'-2': 63, '-1': 121, '0': 135, '1': 121, '2': 63}, STEP = 135;
    var discs = CO.map(function(c){ var d = document.createElement('div'); d.className = 'pl-arc-logo'; d.innerHTML = '<img ' + (c[3] ? 'style="width:' + c[3] + 'px"' : 'class="round"') + ' src="' + c[1] + '" alt="">'; arc.appendChild(d); return d; });
    var head = 1;   /* index of the company in the centre slot */
    function place(anim){
      var cx = arc.clientWidth / 2;
      discs.forEach(function(d, i){
        var k = ((i - head) % CO.length + CO.length) % CO.length; if (k > CO.length / 2) k -= CO.length;
        var vis = Math.abs(k) <= 1, kk = Math.max(-2, Math.min(2, k));
        if (!anim || Math.abs(k) > 2) d.style.transition = 'none'; else d.style.transition = '';
        d.style.transform = 'translate(' + (cx + kk * STEP) + 'px,' + Y[kk] + 'px)';
        d.style.opacity = vis ? 1 : 0;
      });
      label.textContent = CO[head][0]; label.style.color = CO[head][2];
    }
    place(false); window.addEventListener('resize', function(){ place(false); });
    var iv = 0;
    function step(){ head = (head + 1) % CO.length; label.classList.add('is-out'); setTimeout(function(){ place(true); label.classList.remove('is-out'); }, 250); }
    onView(arc, function(on){ clearInterval(iv); if (on && !reduce) iv = setInterval(step, 2600); });
  })();

  /* ---- 03 · first batches: 300 dots fill row by row with the count; the switch refills to the other campus ---- */
  (function(){
    var w = document.getElementById('plWaffle'); if (!w) return;
    var D = [{band: '1st batch · ADYPU, Pune', size: '300+ students', pct: 98.3, lit: 295, e1l: 'Highest earned', e1: '₹1,90,000/mo', e2l: 'Average earned', e2: '₹23,364/mo'},
             {band: '1st batch · Rishihood, Delhi NCR', size: 'Live tracking', pct: 93, lit: 279, e1l: 'Highest stipend', e1: '₹1,25,000/mo', e2l: 'Average stipend', e2: '₹23,000/mo'}];
    var dots = []; for (var i = 0; i < 300; i++){ var d = document.createElement('i'); w.appendChild(d); dots.push(d); }
    var num = document.getElementById('plRecNum'), shown = 0, shownPct = 0, cur = 0, tmr = 0;
    function fmt(v, t){ return t % 1 ? v.toFixed(1) : String(Math.round(v)); }
    function fill(c){
      var t = D[c]; clearInterval(tmr);
      ['Band', 'Size'].forEach(function(k){ document.getElementById('plRec' + k).textContent = t[k.toLowerCase()]; });
      ['E1l', 'E1', 'E2l', 'E2'].forEach(function(k){ document.getElementById('pl' + k).textContent = t[k.charAt(0).toLowerCase() + k.slice(1)]; });
      if (reduce){ dots.forEach(function(d, i){ d.classList.toggle('on', i < t.lit); }); shown = t.lit; shownPct = t.pct; num.textContent = fmt(t.pct, t.pct); return; }
      var from = shown, to = t.lit, fp = shownPct, tp = t.pct, k = 0, steps = from === 0 ? 60 : 24;
      tmr = setInterval(function(){
        k++; var p = Math.min(1, k / steps), e = 1 - Math.pow(1 - p, 3), v = Math.round(from + (to - from) * e);
        dots.forEach(function(d, i){ var on = i < v; if (on !== d.classList.contains('on')){ d.classList.toggle('on', on); if (on){ d.classList.add('pop'); setTimeout(function(){ d.classList.remove('pop'); }, 260); } } });
        shown = v; shownPct = fp + (tp - fp) * e; num.textContent = fmt(shownPct, tp);
        if (p >= 1){ clearInterval(tmr); num.textContent = fmt(tp, tp); }
      }, 22);
    }
    num.textContent = '0';
    once(w, function(){ fill(0); }, .25);
    document.querySelectorAll('.pl-tab').forEach(function(b){ b.addEventListener('click', function(){
      var c = +b.dataset.c; if (c === cur) return; cur = c;
      document.querySelectorAll('.pl-tab').forEach(function(x){ var on = x === b; x.classList.toggle('is-on', on); x.setAttribute('aria-selected', on); });
      fill(c);
    }); });
  })();

  /* ---- 05 · sectors: 287 ticks, one per intern; they draw in left to right; tapping a row lights that sector ---- */
  (function(){
    var bc = document.getElementById('plBarcode'), list = document.getElementById('plSecList'); if (!bc) return;
    var S = [['AI and data', 90, '31.4'], ['Software, SaaS & tech services', 79, '27.5'], ['Others', 37, '12.9'], ['Education', 27, '9.4'], ['Commerce and retail', 17, '5.9'], ['Fintech', 13, '4.5'], ['Industrial and manufacturing', 13, '4.5'], ['Professional services', 11, '3.8']];
    var ticks = [];
    S.forEach(function(s, si){ for (var i = 0; i < s[1]; i++){ var t = document.createElement('i'); t.dataset.s = si; if (i % 5 === 0) t.classList.add('tall'); bc.appendChild(t); ticks.push(t); } });
    function lay(){ var W = bc.clientWidth, pitch = (W - 7 * 4) / 287, x = 0, last = 0; ticks.forEach(function(t, i){ var s = +t.dataset.s; if (s !== last){ x += 4; last = s; } t.style.left = x.toFixed(2) + 'px'; t.style.width = Math.max(.6, pitch * .62).toFixed(2) + 'px'; x += pitch; }); }
    lay(); window.addEventListener('resize', lay);
    S.forEach(function(s, i){ var li = document.createElement('li'); li.tabIndex = 0; li.setAttribute('role', 'button'); li.innerHTML = '<b>' + esc(s[0]) + '</b><span>' + s[1] + '</span><em>' + s[2] + '%</em>'; li.addEventListener('click', function(){ sel(i); }); li.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); sel(i); } }); list.appendChild(li); });
    function sel(i){
      [].forEach.call(list.children, function(li, k){ li.classList.toggle('is-on', k === i); });
      ticks.forEach(function(t){ t.classList.toggle('sel', +t.dataset.s === i); });
      document.getElementById('plSecName').textContent = S[i][0];
      document.getElementById('plSecPct').textContent = S[i][2];
      document.getElementById('plSecCount').textContent = S[i][1] + ' interns';
    }
    sel(0);
    if (!reduce){ bc.classList.add('is-wait'); ticks.forEach(function(t, i){ t.style.transitionDelay = (i * 3) + 'ms'; });
      once(bc, function(){ bc.classList.remove('is-wait'); setTimeout(function(){ ticks.forEach(function(t){ t.style.transitionDelay = ''; }); }, 1500); }, .5); }
  })();

  /* ---- 06 · the board: every 2.4 s one row flips to the next intern, letters rolling like a split-flap ---- */
  (function(){
    var ul = document.getElementById('plBoard'); if (!ul) return;
    var P = [['Pratik Kumar Pan','SUPERK'],['Anishka Khurana','NEXTYOU'],['Himanshu Mishra','GENYX AI'],['Jatin Bisen','RIDECELL'],['Koyna Arya','ZUVEES'],['Arun Kumar','ACCOPS'],
             ['Angelo Nelson','LICIOUS'],['Pushkar Gupta','ZEKO AI'],['Swarnim Balpande','EMERGENT'],['Sourya','EKO'],['Manik Tyagi','GOQII'],['Sahil Singh','BLUECOPA'],['Tanima Samanta','EMERGENT'],['Vinayak Mohakud','LICIOUS'],['Adarsh Priydarshi','NEXTYOU'],['Sumit Kumar Nayak','LICIOUS']];
    function pad(s){ s = s.slice(0, 8); return new Array(9 - s.length).join(' ') + s; }
    var rows = [];
    for (var i = 0; i < 6; i++){
      var li = document.createElement('li'); li.className = 'pl-brow';
      li.innerHTML = '<img src="' + img(P[i][0]) + '" alt=""><b>' + esc(P[i][0]) + '</b><span class="pl-flaps">' + pad(P[i][1]).split('').map(function(ch){ return '<i>' + (ch === ' ' ? '' : ch) + '</i>'; }).join('') + '</span>';
      ul.appendChild(li); rows.push(li);
    }
    var lg = document.getElementById('plLogos');
    ['licious', 'drona-aviation', 'zeko-ai', 'nextyou', 'aibridge', 'lear-labs'].forEach(function(n){ var im = document.createElement('img'); im.src = A + 'co-' + n + '.png'; im.alt = ''; lg.appendChild(im); });
    var nextP = 6, r = 0, iv = 0, CH = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    function flip(){
      var li = rows[r], p = P[nextP % P.length]; r = (r + 1) % rows.length; nextP++;
      var flaps = li.querySelectorAll('.pl-flaps i'), word = pad(p[1]), im = li.querySelector('img'), nm = li.querySelector('b');
      li.classList.add('is-flip'); im.style.opacity = 0; nm.style.opacity = 0;
      setTimeout(function(){ im.src = img(p[0]); nm.textContent = p[0]; im.style.opacity = 1; nm.style.opacity = 1; }, 300);
      var n = 0, t = setInterval(function(){ n++;
        flaps.forEach(function(f, k){ var target = word[k] === ' ' ? '' : word[k]; if (n >= 4 + k){ f.textContent = target; f.classList.remove('roll'); } else { f.textContent = CH[(Math.random() * 26) | 0]; f.classList.add('roll'); } });
        if (n >= 12){ clearInterval(t); li.classList.remove('is-flip'); }
      }, 55);
    }
    onView(ul, function(on){ clearInterval(iv); if (on && !reduce) iv = setInterval(flip, 2400); });
  })();

  /* ---- 07 · stories: a playlist; the player plays inline; tapping a story moves it into the player ---- */
  (function(){
    var pl = document.getElementById('plPlayer'), nx = document.getElementById('plNext'); if (!pl) return;
    var L = [[{t: 'How to get an internship in 2nd year B.Tech', m: '250+ placed from NST · ADYPU, Pune', i: 'story-hired-2nd-year', y: 'NNOY1UY90bc'},
              {t: 'Why 90% can’t make it to GSoC, and how he did', m: 'Google Summer of Code', i: 'story-gsoc', y: 'EUDTsI39OEM'},
              {t: 'A first-year on a defence project at IIT Patna', m: 'Research internship', i: 'story-iit-patna', y: 'om00nA2Xvtk'},
              {t: '19, and earning ₹2 lakh per workshop', m: 'AI startup story', i: 'story-2-lakh', y: '-6-q_YlW0FM'},
              {t: 'A web-dev internship in Egypt, built in React', m: 'Global internship', i: 'story-egypt', y: '8nPY5PeVI-E'}],
             [{t: '24 hours of coding for Blinkit', m: 'Hackathon · 4:10', i: 'build-blinkit'},
              {t: 'A 15 kg combat robot, built by freshers', m: 'Robotics · 4:10', i: 'build-combat-robot'},
              {t: 'A satellite in 7 days', m: 'Space tech · 9:00', i: 'build-satellite'}]];
    var list = 0, cur = 0;
    function render(){
      var it = L[list][cur];
      pl.classList.remove('is-playing');
      pl.innerHTML = '<img src="' + A + it.i + '.jpg" alt=""><button class="pl-play" type="button" aria-label="Play: ' + esc(it.t) + '"' + (it.y ? '' : ' disabled') + '><img src="assets/pl/icon-play-blue.svg" alt=""></button><span class="pl-prog"><i></i></span>';
      document.getElementById('plNow').textContent = it.t; document.getElementById('plNowMeta').textContent = it.m;
      nx.innerHTML = '';
      L[list].forEach(function(s, k){ if (k === cur) return; var li = document.createElement('li'); li.tabIndex = 0; li.innerHTML = '<span class="pl-th"><img src="' + A + s.i + '.jpg" alt="" loading="lazy"><i><img src="assets/pl/icon-play-ink.svg" alt=""></i></span><span class="pl-next-t"><b>' + esc(s.t) + '</b><span>' + esc(s.m) + '</span></span>'; li.addEventListener('click', function(){ cur = k; render(); pl.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'center'}); }); nx.appendChild(li); });
      var b = pl.querySelector('.pl-play'); if (it.y) b.addEventListener('click', function(){ pl.classList.add('is-playing'); pl.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + it.y + '?autoplay=1&rel=0&playsinline=1&modestbranding=1" title="' + esc(it.t) + '" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>'; });
    }
    render();
    document.querySelectorAll('.pl-chip').forEach(function(c){ c.addEventListener('click', function(){ var l = +c.dataset.l; if (l === list) return; list = l; cur = 0; document.querySelectorAll('.pl-chip').forEach(function(x){ var on = x === c; x.classList.toggle('is-on', on); x.setAttribute('aria-selected', on); }); render(); }); });
  })();

  /* ---- 08 · the thread: messages arrive one by one; the typing line rotates through the other managers ---- */
  (function(){
    var th = document.getElementById('plThread'); if (!th) return;
    var msgs = th.querySelectorAll('.pl-msg');
    if (!reduce){ th.classList.add('is-wait'); msgs.forEach(function(m, i){ m.style.transitionDelay = (i * 450) + 'ms'; }); once(th, function(){ th.classList.remove('is-wait'); }, .25); }
    var T = [['M','Manazir','#C77A00'],['S','Simi','#0673F9'],['S','Sandeep','#B42FE5'],['S','Salwat','#16A34A'],['J','Joseph','#C2410C']], k = 0, iv = 0;
    var av = document.getElementById('plTypeAv'), nm = document.getElementById('plTypeName');
    function step(){ k = (k + 1) % T.length; nm.style.opacity = 0; setTimeout(function(){ av.textContent = T[k][0]; av.style.setProperty('--c', T[k][2]); nm.textContent = T[k][1] + ' is typing'; nm.style.opacity = 1; }, 300); }
    onView(th, function(on){ clearInterval(iv); if (on && !reduce) iv = setInterval(step, 3200); });
  })();

  /* ---- 09 · FAQ: one open at a time ---- */
  (function(){
    var acc = document.getElementById('plAcc'); if (!acc) return;
    acc.querySelectorAll('.pl-q button').forEach(function(b){ b.addEventListener('click', function(){
      var q = b.parentNode, open = !q.classList.contains('is-open');
      acc.querySelectorAll('.pl-q').forEach(function(x){ x.classList.remove('is-open'); x.querySelector('button').setAttribute('aria-expanded', 'false'); });
      if (open){ q.classList.add('is-open'); b.setAttribute('aria-expanded', 'true'); }
    }); });
  })();
})();
