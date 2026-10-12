import { readFileSync, writeFileSync } from "node:fs";
import { k, kitScript, tokens, THEMES, W, H } from "./common.mjs";
import * as LF from "./life.mjs";
import * as ST from "./stories.mjs";
import * as GL from "./global.mjs";
const FILE = "/Users/shubhanshbhaskar/Documents/Newton School Code/nst-website-2027/index.html";
let s = readFileSync(FILE, "utf8");
const cut = (from, to, by) => { const a = s.indexOf(from); if (a < 0) throw new Error("missing " + from.slice(0, 60)); const b = s.indexOf(to, a); if (b < 0) throw new Error("missing end " + to.slice(0, 40)); s = s.slice(0, a) + by + s.slice(b + to.length); };
const rep = (a, b) => { const n = s.split(a).length - 1; if (n !== 1) throw new Error("count " + n + " for " + a.slice(0, 80)); s = s.replace(a, b); };
/* 1 · styles */
cut("/* ===== nav illustrations:", "</style>", `/* ===== nav illustrations: small isometric figures drawn with the anatomy kit (scoped to .iso). Quiet on purpose: one per option,
   each tinted to its own colour (Student life orange, Student stories purple, Global opportunities blue), so the pane changes with the hover ===== */
${k.ISO_CSS}${tokens("life")}${tokens("stories")}${tokens("global")}${LF.CSS}${ST.CSS}${GL.CSS}
.dn-ill{transition:background-color .3s cubic-bezier(.33,1,.68,1)}
.dn-fig .dn-svg{position:absolute;left:0;top:8px;width:${W}px;height:${H}px}
.dn-fig .dn-svg svg{display:block;width:100%;height:100%}
</style>`);
/* 2 · markup */
const fig = (key, k2, svg, cap, sub) => `<div class="dn-art dn-fig iso dn-iso" data-theme="light" data-fig="${key}" data-k="${k2}" data-acc="${THEMES[key].pane}" data-ink="${THEMES[key].ink}"><div class="dn-svg">${svg}</div><span class="dn-cap"><b>${cap}</b><span>${sub}</span></span><span class="dn-go">→</span></div>`;
const a = s.indexOf('<div class="dn-ill" aria-hidden="true"><div class="dn-art dn-fig');
const g = s.indexOf('data-k="globe"', a), end = s.indexOf('<span class="dn-go">→</span></div></div>', g) + '<span class="dn-go">→</span></div></div>'.length;
if (a < 0 || g < 0 || end < g) throw new Error("figures not found");
s = s.slice(0, a) + `<div class="dn-ill" aria-hidden="true">` + fig("life", "users", LF.SVG, "Student life", "Life of NST students") + fig("stories", "book", ST.SVG, "Student stories", "Projects by NST students") + fig("global", "globe", GL.SVG, "Global opportunities", "China · Thailand · Singapore") + `</div>` + s.slice(end);
/* 3 · the pane takes the hovered figure's colours; other options get the menu's own back */
rep(`      ill.appendChild(a); ill._href = o;
      if (a.classList.contains('dn-fig')) run(a, true);`, `      ill.appendChild(a); ill._href = o;
      p.style.setProperty('--acc', a.dataset.acc || p.dataset.acc0); p.style.setProperty('--ink', a.dataset.ink || p.dataset.ink0);
      if (a.classList.contains('dn-fig')) run(a, true);`);
rep(`    Array.prototype.forEach.call(nav.querySelectorAll('.dn-p'), function(p){ panels[p.dataset.m] = p; });`, `    Array.prototype.forEach.call(nav.querySelectorAll('.dn-p'), function(p){ panels[p.dataset.m] = p; p.dataset.acc0 = p.style.getPropertyValue('--acc'); p.dataset.ink0 = p.style.getPropertyValue('--ink'); });`);
/* 4 · the runtime and the controllers */
const live = [["mountLife", LF.LIVE], ["mountStories", ST.LIVE], ["mountGlobal", GL.LIVE]].map(([n, src]) => src.replace("function mount(root)", "function " + n + "(root)")).join("\n");
cut(`<script type="module">\n/* nav illustrations`, `</script>`, `<script type="module">
/* nav illustrations: the anatomy kit runtime (inlined, MIT) and one controller per figure; window.__dnFigs is what the nav starts and stops */
if (matchMedia("(min-width:1024px)").matches){
${kitScript().replace(/<\/(script)/gi, "<\\/$1")}
${live}
const figs = {}, M = { users: mountLife, book: mountStories, globe: mountGlobal };
document.querySelectorAll(".dn-fig").forEach((el) => { figs[el.dataset.k] = M[el.dataset.k](el); if (el.classList.contains("is-on")) figs[el.dataset.k].start(); });
window.__dnFigs = figs;
}
</script>`);
writeFileSync(FILE, s);
console.log("integrated", s.length);
