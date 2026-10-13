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
    onView(hero, function(on){ hero.classList.toggle('is-live', on && !reduce); clearInterval(iv); if (on && !reduce) iv = setInterval(next, 1600); });
  })();

  /* ---- 01b · the CTC: count the range up from zero, sheen once, grow the band, drop the average pin / swing the needle ---- */
  (function(){
    var sec = document.getElementById('ctc'); if (!sec) return;
    var ticks = sec.querySelector('.pl-dial-ticks');
    if (ticks){ var h = ''; for (var v = 0; v <= 60; v += 5){ var a = Math.PI * (1 - v / 60), maj = v % 10 === 0, r0 = maj ? 116 : 122, r1 = 128;
      h += '<line class="' + (maj ? 'maj' : '') + '" x1="' + (170 + r0 * Math.cos(a)).toFixed(1) + '" y1="' + (170 - r0 * Math.sin(a)).toFixed(1) + '" x2="' + (170 + r1 * Math.cos(a)).toFixed(1) + '" y2="' + (170 - r1 * Math.sin(a)).toFixed(1) + '"/>'; }
      ticks.innerHTML = h; }
    var nums = [].slice.call(sec.querySelectorAll('.pl-ctc-big b'));
    function count(){ if (reduce){ return; } nums.forEach(function(b){ b.textContent = '0'; }); var t0 = performance.now();
      (function f(now){ var p = Math.min(1, (now - t0) / 1300), e = 1 - Math.pow(1 - p, 3); nums.forEach(function(b){ b.textContent = Math.round(+b.dataset.to * e); }); if (p < 1) requestAnimationFrame(f); })(t0); }
    once(sec, function(){ sec.classList.add('is-in'); count(); var nd = sec.querySelector('.pl-needle'); if (nd) nd.style.transform = 'rotate(' + (-90 + 180 * 23 / 60) + 'deg)'; }, .35);
    onView(sec, function(on){ sec.classList.toggle('is-live', on); });
    if (reduce){ sec.classList.add('is-in'); var nd = sec.querySelector('.pl-needle'); if (nd) nd.style.transform = 'rotate(' + (-90 + 180 * 23 / 60) + 'deg)'; }
  })();

  /* ---- 02a · Google: the query types itself once the bar is in view; then the count, then the two result cards ---- */
  (function(){
    var sec = document.getElementById('google'), q = document.getElementById('plGoogQ'); if (!sec || reduce) return;
    var full = q.textContent; q.textContent = ''; sec.classList.add('is-wait');
    once(document.getElementById('plGoogBar'), function(){
      var i = 0, t = setInterval(function(){ q.textContent = full.slice(0, ++i); if (i >= full.length){ clearInterval(t); setTimeout(function(){ sec.classList.remove('is-wait'); }, 380); } }, 55);
    }, .6);
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

  /* ---- 03 · first batches: the commute. Windows light one by one with the count (each lit window is a student with a paid
          internship); the shuttle loops from the campus gate to the towers; the switch recolours the street and refills ---- */
  (function(){
    var box = document.getElementById('plCommute'); if (!box) return;
    var CM = {windows: __CM_WINDOWS__, unit: __CM_UNIT__, from: __CM_FROM__, to: __CM_TO__};
    var D = [{band: '1st batch · ADYPU, Pune', size: '300+ students', pct: 98.3, e1l: 'Highest earned', e1: '₹1,90,000/mo', e2l: 'Average earned', e2: '₹23,364/mo'},
             {band: '1st batch · Rishihood, Delhi NCR', size: 'Live tracking', pct: 93, e1l: 'Highest stipend', e1: '₹1,25,000/mo', e2l: 'Average stipend', e2: '₹23,000/mo'}];
    var wins = [].slice.call(box.querySelectorAll('.cm-win'));
    var seed = 7, order = wins.map(function(w, i){ return i; }).sort(function(){ seed = (seed * 16807) % 2147483647; return (seed / 2147483647) - .5; });   /* a fixed scatter, so the lighting looks like people arriving */
    var num = document.getElementById('plRecNum'), shown = 0, shownPct = 0, cur = 0, tmr = 0;
    function fmt(v, t){ return t % 1 ? v.toFixed(1) : String(Math.round(v)); }
    function paint(n){ order.forEach(function(wi, k){ wins[wi].classList.toggle('on', k < n); }); }
    function fill(c){
      var t = D[c], to = Math.round(CM.windows * t.pct / 100); clearInterval(tmr); box.dataset.c = c; box.closest('.pl-rec').classList.toggle('is-delhi', c === 1);
      ['Band', 'Size'].forEach(function(k){ document.getElementById('plRec' + k).textContent = t[k.toLowerCase()]; });
      ['E1l', 'E1', 'E2l', 'E2'].forEach(function(k){ document.getElementById('pl' + k).textContent = t[k.charAt(0).toLowerCase() + k.slice(1)]; });
      if (reduce){ paint(to); shown = to; num.textContent = fmt(t.pct, t.pct); return; }
      var from = shown, fp = shownPct, tp = t.pct, k = 0, steps = from === 0 ? 70 : 26;
      tmr = setInterval(function(){
        k++; var p = Math.min(1, k / steps), e = 1 - Math.pow(1 - p, 3), v = Math.round(from + (to - from) * e);
        paint(v); shown = v; shownPct = fp + (tp - fp) * e; num.textContent = fmt(shownPct, tp);
        if (p >= 1){ clearInterval(tmr); num.textContent = fmt(tp, tp); }
      }, 24);
    }
    num.textContent = '0';
    once(box, function(){ fill(0); }, .35);
    document.querySelectorAll('.pl-tab').forEach(function(b){ b.addEventListener('click', function(){
      var c = +b.dataset.c; if (c === cur) return; cur = c;
      document.querySelectorAll('.pl-tab').forEach(function(x){ var on = x === b; x.classList.toggle('is-on', on); x.setAttribute('aria-selected', on); });
      shown = 0; shownPct = 0; paint(0); fill(c);
    }); });
    /* the shuttle: gate → stop (eased), a pause, then round again off the left edge */
    var bus = document.getElementById('cmBus'), svg = box.querySelector('svg'), raf = 0, vis = false, t0 = 0, LOOP = 7600;
    function busAt(x){ var s = svg.getBoundingClientRect().width / 740 * (svg.viewBox.baseVal.height ? 1 : 1); bus.setAttribute('transform', 'translate(' + (CM.unit[0] * x).toFixed(1) + ' ' + (CM.unit[1] * x).toFixed(1) + ')'); }
    function frame(now){
      var u = ((now - t0) % LOOP) / LOOP, x;
      if (u < .62){ var e = u / .62; e = e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2; x = CM.from + (CM.to - CM.from) * e; }
      else if (u < .84) x = CM.to; else { var e2 = (u - .84) / .16; x = CM.to + (520 - CM.to) * e2 * e2; }
      busAt(x); raf = vis ? requestAnimationFrame(frame) : 0;
    }
    busAt(reduce ? CM.to : CM.from);
    if (!reduce) onView(box, function(on){ vis = on; if (on && !raf){ if (!t0) t0 = performance.now(); raf = requestAnimationFrame(frame); } });
  })();

  /* ---- the report: the cover settles and the IIM-A seal stamps onto it when the card arrives ---- */
  (function(){ var r = document.getElementById('report'); if (!r || reduce) return; r.classList.add('is-wait'); once(r, function(){ r.classList.remove('is-wait'); }, .45); })();

  /* ---- 05 · sectors: 287 ticks, one per intern; they draw in left to right; tapping a row lights that sector ---- */
  (function(){
    var bc = document.getElementById('plBarcode'), list = document.getElementById('plSecList'); if (!bc) return;
    /* name, interns, share, colour, icon (24-grid, filled, even-odd cut-outs) */
    var S = [['AI and data', 90, '31.4', '#61A8FF', 'M12 2l1.9 5.6L19.5 9.5l-5.6 1.9L12 17l-1.9-5.6L4.5 9.5l5.6-1.9z M19 14l.9 2.6 2.6.9-2.6.9L19 21l-.9-2.6-2.6-.9 2.6-.9z M5 15l.6 1.5 1.4.5-1.4.5L5 19l-.6-1.5L3 17l1.4-.5z'],
             ['Software, SaaS & tech services', 79, '27.5', '#A78BFA', 'M8.7 6.3a1 1 0 010 1.4L4.4 12l4.3 4.3a1 1 0 11-1.4 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 011.4 0z M15.3 6.3a1 1 0 011.4 0l5 5a1 1 0 010 1.4l-5 5a1 1 0 11-1.4-1.4l4.3-4.3-4.3-4.3a1 1 0 010-1.4z M13.9 4.1a1 1 0 01.7 1.2l-3.5 14a1 1 0 11-1.9-.5l3.5-14a1 1 0 011.2-.7z'],
             ['Others', 37, '12.9', '#94A3B8', 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2z M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2z M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2z M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2z'],
             ['Education', 27, '9.4', '#F5B544', 'M12 3L1 9l11 6 9-4.9V17h2V9z M5 13.2V17c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.8L12 17z'],
             ['Commerce and retail', 17, '5.9', '#F472B6', 'M7 7V6.5a5 5 0 0110 0V7h2.1a1 1 0 011 .9l1 12a2 2 0 01-2 2.1H4.9a2 2 0 01-2-2.1l1-12a1 1 0 011-.9zm2 0h6v-.5a3 3 0 00-6 0z M8 10.5a1 1 0 112 0 1 1 0 01-2 0z M14 10.5a1 1 0 112 0 1 1 0 01-2 0z'],
             ['Fintech', 13, '4.5', '#34D399', 'M2 7a3 3 0 013-3h14a3 3 0 013 3v1H2z M2 10.5h20V17a3 3 0 01-3 3H5a3 3 0 01-3-3zm3.5 4.5v1.5h4V15z'],
             ['Industrial and manufacturing', 13, '4.5', '#FB923C', 'M2 21V10.5l5.5 3V10.5l5.5 3V5h3v-2h3v2h3v16zm4-4v2h2v-2zm5 0v2h2v-2zm5 0v2h2v-2z'],
             ['Professional services', 11, '3.8', '#2DD4BF', 'M9 3h6a2 2 0 012 2v2h3a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2h3V5a2 2 0 012-2zm0 4h6V5H9z M2 12.2h20v1.6H2z']];
    var ticks = [];
    S.forEach(function(s, si){ for (var i = 0; i < s[1]; i++){ var t = document.createElement('i'); t.dataset.s = si; t.style.setProperty('--k', s[3]); if (i % 5 === 0) t.classList.add('tall'); bc.appendChild(t); ticks.push(t); } });
    function lay(){ var W = bc.clientWidth, pitch = (W - 7 * 4) / 287, x = 0, last = 0; ticks.forEach(function(t, i){ var s = +t.dataset.s; if (s !== last){ x += 4; last = s; } t.style.left = x.toFixed(2) + 'px'; t.style.width = Math.max(.6, pitch * .62).toFixed(2) + 'px'; x += pitch; }); }
    lay(); window.addEventListener('resize', lay);
    S.forEach(function(s, i){ var li = document.createElement('li'); li.tabIndex = 0; li.setAttribute('role', 'button'); li.style.setProperty('--k', s[3]); li.innerHTML = '<i class="pl-sec-ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="' + s[4] + '"/></svg></i><b>' + esc(s[0]) + '</b><span>' + s[1] + '</span><em>' + s[2] + '%</em>'; li.addEventListener('click', function(){ sel(i); }); li.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); sel(i); } }); list.appendChild(li); });
    function sel(i){
      [].forEach.call(list.children, function(li, k){ li.classList.toggle('is-on', k === i); });
      ticks.forEach(function(t){ t.classList.toggle('sel', +t.dataset.s === i); });
      document.getElementById('plSecName').textContent = S[i][0]; document.querySelector('.pl-sec-num').style.setProperty('--k', S[i][3]);
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
      nx.innerHTML = ''; document.getElementById('plNextN').textContent = (L[list].length - 1) + ' stories';
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
