import * as k from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/iso-kit.mjs";
import * as G from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/lathe.mjs";
import { kitScript } from "/Users/shubhanshbhaskar/.claude/skills/anatomy/scripts/inline-kit.mjs";
export { k, G, kitScript };
/* the More pane is 320 × 501; the figure sits above the caption */
export const W = 320, H = 420;
/* the Life with NST pane is 320 × 383 with a 300 tall figure; the More pane is 320 × 501 with a 420 tall one */
export const LIFE_H = 300, MORE_H = 420;
const hx = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const mix = (a, b, t) => "#" + hx(a).map((v, i) => Math.round(v + (hx(b)[i] - v) * t).toString(16).padStart(2, "0")).join("").toUpperCase();
function theme(pane, ink, face) {
  return { pane, ink, t: { paper: pane, top: mix(pane, "#FFFFFF", .62), s: [mix(pane, ink, .2), mix(pane, ink, .15), mix(pane, ink, .1), mix(pane, ink, .055)],
    hi: mix(ink, "#111418", .55), mid: mix(mix(ink, "#7A7F88", .45), pane, .25), lo: mix(mix(ink, "#9AA0A8", .4), pane, .5), faint: mix(mix(ink, "#9AA0A8", .4), pane, .72),
    lit: ink, face: face || mix(ink, "#FFFFFF", .12), litTop: face ? "#FFFFFF" : mix(ink, "#FFFFFF", .45), litShade: face ? mix(pane, ink, .08) : mix(ink, "#000000", .06), halo: mix(ink, "#000000", .45) } };
}
/* one colour per More option: About us slate, Student directory green, Blogs purple, Contact us teal, IIT Roorkee rose, Go for Gold gold, StartX blue */
export const THEMES = {
  tekron:  theme("#FBEBE3", "#B5400F"),
  neutron: theme("#EEE9FC", "#6138D3"),
  about:   theme("#E8EDF5", "#1F3A68", "#FFFFFF"),
};
export function tokens(key) {
  const t = THEMES[key].t;
  return `.iso.dn-iso[data-fig="${key}"],.iso.dn-iso[data-fig="${key}"][data-theme="light"]{--anatomy-card:${t.paper};--anatomy-paper:${t.paper};--anatomy-face:${t.face};--anatomy-top:${t.top};` +
    t.s.map((c, i) => `--anatomy-shade-${i}:${c};`).join("") +
    `--anatomy-lit-top:${t.litTop};--anatomy-lit-shade:${t.litShade};--anatomy-hi:${t.hi};--anatomy-mid:${t.mid};--anatomy-lo:${t.lo};--anatomy-faint:${t.faint};--anatomy-lit:${t.lit};--anatomy-halo:${t.halo};--anatomy-halo-opacity:.2;--anatomy-dot:${t.hi};--anatomy-weight:.6px}`;
}
export function previewPage({ key, title, svg, cap, sub, live, css, paneH = 501, figH = H }) {
  return `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mona+Sans:wdth,wght@100,500;100,600;100,700&display=swap">
<style>${k.ISO_CSS}${tokens(key)}${css}
body{margin:0;background:#fff;font-family:"Mona Sans",Arial,sans-serif;display:grid;place-items:center;min-height:100vh}
.pane{position:relative;width:320px;height:${paneH}px;border-radius:12px;background:${THEMES[key].pane};overflow:hidden}
.fig{position:absolute;left:0;top:8px;width:${W}px;height:${figH}px}.fig svg{display:block;width:100%;height:100%}
.cap{position:absolute;left:16px;bottom:16px;display:flex;flex-direction:column;gap:2px}.cap b{font-size:16px;line-height:22px;font-weight:600;color:#16191D}.cap span{font-size:13px;line-height:18px;color:rgba(22,25,29,.6)}
.go{position:absolute;right:16px;bottom:16px;width:36px;height:36px;border-radius:18px;background:#fff;display:flex;align-items:center;justify-content:center;font-weight:600}
</style></head><body><div class="pane iso dn-iso" data-theme="light" data-fig="${key}"><div class="fig">${svg}</div><span class="cap"><b>${cap}</b><span>${sub}</span></span><span class="go">→</span></div>
<script type="module">${kitScript().replace(/<\/(script)/gi, "<\\/$1")}
${live}
const m = mount(document.querySelector('.pane')); m.start(); window.__fig = m;
</script></body></html>`;
}
export const pw = (pts, P, closed) => k.pathOf(pts.map((p) => k.iso(p, P)), closed);
/* screen matrix for flat art laid in a plane: origin O, unit u (art x →), unit v (art y ↓) */
export function planeMatrix(O, u, v, P) {
  const o = k.iso(O, P), a = k.iso([O[0] + u[0], O[1] + u[1], O[2] + u[2]], P), b = k.iso([O[0] + v[0], O[1] + v[1], O[2] + v[2]], P);
  const f = (n) => +n.toFixed(4);
  return `matrix(${f(a[0] - o[0])} ${f(a[1] - o[1])} ${f(b[0] - o[0])} ${f(b[1] - o[1])} ${f(o[0])} ${f(o[1])})`;
}
/* a person: body and head */
export const pawn = (x, y, z, P, tone = "mid", lit = false) => k.solidSvg(k.cylinder(x, y, 1.9, z, 6, P, 16, 0.3), { tone, lit }) + k.solidSvg(G.sphereOf([x, y, z + 8], 1.7, P), { tone, lit });
export const byDepth = (items, P) => [...items].sort((a, b) => k.depthOf(a.c, P) - k.depthOf(b.c, P)).map((i) => i.svg).join("");
export function base(plan, h, P) {
  return `<path class="iso-halo" d="${k.haloOf(plan, -h, h, P)}"/>` + k.solidSvg(k.slabOf(plan, -h, h, P, 8, 0.8), { tone: "mid" }) + k.lineSvg(k.planOutline(k.insetPlan(plan, 3), 0, P, 8), { tone: "faint" });
}
