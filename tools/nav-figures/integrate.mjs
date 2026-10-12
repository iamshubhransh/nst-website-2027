import { readFileSync, writeFileSync } from "node:fs";
import { k, kitScript, TOKENS, W, H } from "./common.mjs";
import * as GL from "./global.mjs";
import * as ST from "./stories.mjs";
import * as LF from "./life.mjs";
const FILE = "/Users/shubhanshbhaskar/Documents/Newton School Code/nst-website-2027/index.html";
let s = readFileSync(FILE, "utf8");
const rep = (a, b) => { const n = s.split(a).length - 1; if (n !== 1) throw new Error("count " + n + " for " + a.slice(0, 80)); s = s.replace(a, b); };
const fig = (key, svg, readout, cap, sub) => `<div class="dn-art dn-fig iso dn-iso" data-theme="light" data-k="${key}"><span class="dn-tag" data-readout>${readout}</span><div class="dn-svg">${svg}</div><span class="dn-cap"><b>${cap}</b><span>${sub}</span></span><span class="dn-go">→</span></div>`;
/* 1 · styles: the kit's (scoped to .iso), the pane's green tokens, each figure's own, the figure's box in the pane */
rep("</style>", `/* ===== nav illustrations: isometric figures drawn with the anatomy kit (scoped to .iso), tinted to the Life with NST pane ===== */
${k.ISO_CSS}${TOKENS}${GL.CSS}${ST.CSS}${LF.CSS}
.dn-fig .dn-svg{position:absolute;left:0;top:44px;width:${W}px;height:${H}px}
.dn-fig .dn-svg svg{display:block;width:100%;height:100%}
.dn-fig .dn-tag{font-variant-numeric:tabular-nums}
</style>`);
/* 2 · markup: three figures, built once, in the Life with NST illustration pane */
rep(`<div class="dn-p dt-only" id="dnLife"`, `<div class="dn-p dt-only" id="dnLife"`);
const i = s.indexOf('id="dnLife"'), j = s.indexOf('<div class="dn-ill" aria-hidden="true"></div>', i);
if (j < 0 || j - i > 6000) throw new Error("dnLife pane not found");
s = s.slice(0, j) + `<div class="dn-ill" aria-hidden="true">` +
  fig("users", LF.SVG, "09:15 · Classes", "Student life", "Life of NST students") +
  fig("book", ST.SVG, "ICPC regionals · First-years beat senior IIT-ians", "Student stories", "Projects by NST students") +
  fig("globe", GL.SVG, "Hangzhou · 4,138 km from Delhi", "Global opportunities", "China · Thailand · Singapore") +
  `</div>` + s.slice(j + '<div class="dn-ill" aria-hidden="true"></div>'.length);
/* 3 · the nav's swap: a figure is a persistent art that starts when shown and stops when it leaves */
rep(`    function art(o){
      var a = document.createElement('div')`, `    function figs(){ return window.__dnFigs || {}; }
    function run(el, on){ var c = figs()[el.dataset.k]; if (c) c[on ? 'start' : 'stop'](); }
    function art(o){
      var fig = o.closest('.dn-p').querySelector('.dn-fig[data-k="' + o.dataset.k + '"]'); if (fig) return fig;
      var a = document.createElement('div')`);
rep(`      Array.prototype.forEach.call(ill.children, function(old){
        if (instant || reduce){ old.remove(); return; }
        old.classList.remove('is-on'); old.classList.add('is-out'); setTimeout(function(){ old.remove(); }, 240);
      });
      ill.appendChild(a); ill._href = o;
      if (instant || reduce) a.classList.add('is-on'); else requestAnimationFrame(function(){ requestAnimationFrame(function(){ a.classList.add('is-on'); }); });`,
`      Array.prototype.slice.call(ill.children).forEach(function(old){
        if (old === a) return;
        var keep = old.classList.contains('dn-fig');
        if (keep){ run(old, false); if (!old.classList.contains('is-on')) return; }
        if (instant || reduce){ if (keep) old.classList.remove('is-on', 'is-out'); else old.remove(); return; }
        old.classList.remove('is-on'); old.classList.add('is-out'); setTimeout(function(){ if (keep) old.classList.remove('is-out'); else old.remove(); }, 240);
      });
      ill.appendChild(a); ill._href = o;
      if (a.classList.contains('dn-fig')) run(a, true);
      if (instant || reduce) a.classList.add('is-on'); else requestAnimationFrame(function(){ requestAnimationFrame(function(){ if (ill._href === o) a.classList.add('is-on'); }); });   /* a quick second pick wins */`);
rep(`    function shut(m){ var p = panels[m], t = trig[m]; p.classList.remove('is-open');`, `    function shut(m){ var p = panels[m], t = trig[m]; Array.prototype.forEach.call(p.querySelectorAll('.dn-fig.is-on'), function(f){ run(f, false); }); p.classList.remove('is-open');`);
/* 4 · the kit runtime and the three controllers, in their own module scope (desktop only) */
const live = [["mountLife", LF.LIVE], ["mountStories", ST.LIVE], ["mountGlobal", GL.LIVE]].map(([n, src]) => src.replace("function mount(root, say)", "function " + n + "(root, say)")).join("\n");
rep(`</body>`, `<script type="module">
/* nav illustrations: the anatomy kit runtime (inlined, MIT) and one controller per figure; window.__dnFigs is what the nav starts and stops */
if (matchMedia("(min-width:1024px)").matches){
${kitScript().replace(/<\/(script)/gi, "<\\/$1")}
${live}
const figs = {}, M = { users: mountLife, book: mountStories, globe: mountGlobal };
document.querySelectorAll(".dn-fig").forEach((el) => { const tag = el.querySelector("[data-readout]"); figs[el.dataset.k] = M[el.dataset.k](el, (t) => { tag.textContent = t; }); if (el.classList.contains("is-on")) figs[el.dataset.k].start(); });
window.__dnFigs = figs;
}
</script>
</body>`);
writeFileSync(FILE, s);
console.log("integrated", s.length);
