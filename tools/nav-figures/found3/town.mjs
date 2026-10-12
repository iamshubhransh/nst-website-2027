/* Seven foundations backdrop, v3: one connected campus town. A road grid with a lane-dashed avenue, side streets, crossings and a
   roundabout plaza; blocks between the roads carry the foundation objects on their plots, lined with trees, lamps and benches.
   It spans the section edge to edge, strongest at the sides and nearly gone behind the text; a hair above the section's black. */
import { writeFileSync } from "node:fs";
import * as k from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/iso-kit.mjs";
import * as G from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/lathe.mjs";
import { O } from "./objects.mjs";
const S = (p, st) => k.solidSvg(p, st), Ln = (d, st) => k.lineSvg(d, st);
const UP = [0, 0, 1];
/* extra street furniture */
O.lamp = { draw(P) {
  const F = G.frameAlong([0, 0, 0], UP);
  return S(k.cylinder(0, 0, 3.6, 0, 2, P, 18), { tone: "lo" }) + S(k.cylinder(0, 0, 1.2, 2, 44, P, 12), { tone: "mid", crease: "none" }) +
    S(k.slabOf({ x: -1, y: -1, w: 12, d: 2, r: 0.5 }, 44, 1.6, P, 2), { tone: "mid" }) + S(G.sphereOf([10, 0, 42.6], 2.6, P, { steps: 16 }), { tone: "hi" });
} };
O.mailbox = { draw(P) {
  return S(k.slabOf({ x: -1.2, y: -1.2, w: 2.4, d: 2.4, r: 0.4 }, 0, 16, P, 2), { tone: "lo", crease: "none" }) +
    S(k.slabOf({ x: -8, y: -5, w: 16, d: 10, r: 2 }, 16, 9, P, 3, 0.4), { tone: "mid", inner: Ln(k.sideSeam({ x: -8, y: -5, w: 16, d: 10, r: 2 }, 20.5, P, 3), { tone: "lo" }) });
} };
O.fountain = { draw(P) {
  const F = G.frameAlong([0, 0, 0], UP);
  return S(k.cylinder(0, 0, 26, 0, 3, P, 18, 0.4), { tone: "mid" }) + Ln(k.ring(0, 0, 22, 3, P, 64), { tone: "lo" }) +
    S(G.solidOf([[3, 4], [16, 3], [18, 9], [19, 9], [19, 0]], F, P, { steps: 18, smooth: false }), { tone: "mid" });
} };
/* the camera: one projection for the whole scene */
const W = 2400, H = 1000, SC = 1.6;
const P = { origin: [W / 2, H / 2 - 30], scale: SC, azimuth: 45, elevation: 30 };
const P0 = { origin: [0, 0], scale: SC, azimuth: 45, elevation: 30 };
const at = (p) => k.iso(p, P);
const scr = (x, y) => at([x, y, 0]);
const inView = (pts, m = 120) => pts.some(([sx, sy]) => sx > -m && sx < W + m && sy > -m && sy < H + m);
const pd = (pts) => k.pathOf(pts.map(([x, y, z = 0]) => at([x, y, z])), true);
/* the grid: roads at multiples of PITCH; every third is an avenue with a dashed centre line */
const PITCH = 230, N = 7;
const isAve = (i) => (((i % 3) + 3) % 3) === 0;
const half = (i) => (isAve(i) ? 26 : 15);
const ROUND = new Set(["-3,0", "3,0", "0,-3", "0,3", "3,3", "-3,-3"]);
const THEMES = [
  ["branch", "monitor"], ["medal", "table"], ["blocks", "bench"], ["rocket", "easel"], ["bulb", "book"], ["board", "bench"],
  ["flask", "scope"], ["papers", "case"], ["idcard", "mailbox"], ["letter", "book"],
];
var seq = 0;
const roadFill = [], roadEdge = [], dash = [], zebra = [], paving = [], plots = [], items = [];
for (let i = -N; i <= N; i++) for (let j = -N; j <= N; j++) {
  const x = i * PITCH, y = j * PITCH, hx = half(i), hy = half(j);
  const y0 = y + hy, y1 = (j + 1) * PITCH - half(j + 1);
  const segY = [[x - hx, y0], [x + hx, y0], [x + hx, y1], [x - hx, y1]];
  if (j < N && inView(segY.map(([a, b]) => scr(a, b)))) {
    roadFill.push(pd(segY)); roadEdge.push(pd(segY));
    if (isAve(i)) { dash.push(k.pathOf([at([x, y0 + 14, 0]), at([x, y1 - 14, 0])])); for (const yy of [y0 + 2, y1 - 10]) for (let s = -hx + 3; s < hx - 3; s += 7) zebra.push(pd([[x + s, yy], [x + s + 3.5, yy], [x + s + 3.5, yy + 8], [x + s, yy + 8]])); }
  }
  const x0 = x + hx, x1 = (i + 1) * PITCH - half(i + 1);
  const segX = [[x0, y - hy], [x1, y - hy], [x1, y + hy], [x0, y + hy]];
  if (i < N && inView(segX.map(([a, b]) => scr(a, b)))) {
    roadFill.push(pd(segX)); roadEdge.push(pd(segX));
    if (isAve(j)) { dash.push(k.pathOf([at([x0 + 14, y, 0]), at([x1 - 14, y, 0])])); for (const xx of [x0 + 2, x1 - 10]) for (let s = -hy + 3; s < hy - 3; s += 7) zebra.push(pd([[xx, y + s], [xx + 8, y + s], [xx + 8, y + s + 3.5], [xx, y + s + 3.5]])); }
  }
  const cross = [[x - hx, y - hy], [x + hx, y - hy], [x + hx, y + hy], [x - hx, y + hy]];
  if (inView(cross.map(([a, b]) => scr(a, b)))) {
    roadFill.push(pd(cross));
    if (ROUND.has(i + "," + j)) { roadEdge.push(k.ring(x, y, Math.min(hx, hy) + 6, 0, P, 64)); items.push({ c: [x, y, 0], id: "fountain", s: 0.72 }); }
  }
  if (i < N && j < N) {
    const bx = x + hx + 6, by = y + hy + 6, bw = PITCH - hx - half(i + 1) - 12, bd = PITCH - hy - half(j + 1) - 12;
    const plan = { x: bx, y: by, w: bw, d: bd, r: 9 };
    const corners = [scr(bx, by), scr(bx + bw, by), scr(bx, by + bd), scr(bx + bw, by + bd)];
    if (inView(corners)) {
      const c = scr(bx + bw / 2, by + bd / 2);
      plots.push({ c: [bx + bw / 2, by + bd / 2, 0], svg: S(k.slabOf(plan, 0, 2.6, P, 2, 0.4), { tone: "lo", crease: "none" }) });
      paving.push(k.planOutline(k.insetPlan(plan, 10), 2.6, P, 3));
      populate(i, j, plan, c);
    }
  }
}
function hash(i, j){ let h = (i * 73856093) ^ (j * 19349663); h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967295; }
var seq = 0;   /* edge blocks walk through every theme in turn, so each foundation appears */
function populate(i, j, plan, c){
  const edge = c[0] < 900 || c[0] > W - 900;
  const { x: ox, y: oy, w, d } = plan, Z = 2.6, put = (u, v, id, s) => items.push({ c: [ox + w * u, oy + d * v, Z], id, s });
  if (!edge){ put(0.5, 0.5, "tree", 0.95); return; }
  put(0.06, 0.94, "lamp", 1); put(0.94, 0.06, "lamp", 1);   /* the left and right corners, clear of the objects */
  const r = hash(i, j);
  if (r < 0.12){   /* a park: a cross of paths, a ring of trees, a bench */
    paving.push(k.pathOf([at([ox + w * .5, oy + 10, Z]), at([ox + w * .5, oy + d - 10, Z])]) + k.pathOf([at([ox + 10, oy + d * .5, Z]), at([ox + w - 10, oy + d * .5, Z])]));
    for (const [u, v] of [[.22, .22], [.78, .22], [.22, .78], [.78, .78], [.5, .2], [.2, .5]]) put(u, v, "tree", 0.95);
    put(0.62, 0.62, "bench", 1.2); return;
  }
  if (r < 0.22){   /* a quad: an arched gate on the near edge, columns at the corners */
    put(0.62, 0.62, "arch", 1.25); put(0.2, 0.62, "column", 1.05); put(0.62, 0.2, "column", 1.05); put(0.26, 0.24, "tree", 1); return;
  }
  const t = THEMES[seq++ % THEMES.length];
  put(0.3, 0.68, t[0], 1.5); put(0.7, 0.3, t[1], 1.35); put(0.22, 0.22, "tree", 0.95); put(0.8, 0.8, "tree", 0.85);   /* side by side on screen, trees behind and in front */
}
const GROUND = `<path class="tw-road" d="${roadFill.join("")}"/>` + Ln(roadEdge.join(""), { tone: "mid" }) + Ln(dash.join(""), { tone: "hi", className: "tw-dash", free: true }) +
  `<path class="tw-zebra" d="${zebra.join("")}"/>`;
const groundParts = [GROUND];
/* symbols drawn about their own origin; placed by translate + scale (scale about the ground point) */
const used = new Set(items.map((it) => it.id));
const DEFS = [...used].map((id) => `<g id="tw-${id}">${O[id].draw(P0)}</g>`).join("");
items.sort((a, b) => k.depthOf(a.c, P) - k.depthOf(b.c, P));
plots.sort((a, b) => k.depthOf(a.c, P) - k.depthOf(b.c, P));
const USES = items.map((it) => { const [sx, sy] = at(it.c); if (!inView([[sx, sy]], 160)) return ""; return `<use href="#tw-${it.id}" transform="translate(${sx.toFixed(1)} ${sy.toFixed(1)}) scale(${it.s})"/>`; }).join("");
const compact = (svg) => svg.replace(/ d="([^"]*)"/g, (m, d) => ' d="' + d.replace(/-?\d+\.\d+/g, (n) => String(Math.round(+n))).replace(/([MLZ]) /g, "$1") + '"');   /* whole-pixel paths: the backdrop is faint, and it halves the bytes */
export const SVG = compact(`<svg class="tw-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs>${DEFS}</defs><g class="tw-ground">${GROUND}${plots.map((p) => p.svg).join("")}${Ln(paving.join(""), { tone: "faint" })}</g><g class="tw-things">${USES}</g></svg>`);
export const HTML = `<div class="found-collage found-town iso fc-iso" data-theme="dark" aria-hidden="true">${SVG}</div>`;
export const DEFS_ONLY = DEFS;
export const CSS = `
.iso.fc-iso,.iso.fc-iso[data-theme]{--anatomy-card:#0B0C0E;--anatomy-paper:#0D0E11;--anatomy-face:#0E0F12;--anatomy-top:#111317;
  --anatomy-shade-0:#0C0D10;--anatomy-shade-1:#0D0E11;--anatomy-shade-2:#0E0F12;--anatomy-shade-3:#0F1114;--anatomy-lit-top:#111317;--anatomy-lit-shade:#0E0F12;
  --anatomy-hi:#2A2E35;--anatomy-mid:#22252B;--anatomy-lo:#1B1D22;--anatomy-faint:#15171A;--anatomy-lit:#2A2E35;--anatomy-dot:#2A2E35;--anatomy-weight:.8px;--anatomy-halo-opacity:0}
.found-collage{position:absolute;inset:0;pointer-events:none;overflow:hidden;
  --e:max(120px,calc((100vw - 1200px) / 2));
  -webkit-mask-image:linear-gradient(90deg,#000 0,#000 calc(var(--e) + 60px),rgba(0,0,0,.6) calc(var(--e) + 200px),rgba(0,0,0,.24) calc(var(--e) + 380px),rgba(0,0,0,.18) 50%,rgba(0,0,0,.24) calc(100% - var(--e) - 380px),rgba(0,0,0,.6) calc(100% - var(--e) - 200px),#000 calc(100% - var(--e) - 60px),#000 100%),linear-gradient(180deg,transparent 0,#000 14%,#000 80%,transparent 100%);
  -webkit-mask-composite:source-in;mask-image:linear-gradient(90deg,#000 0,#000 calc(var(--e) + 60px),rgba(0,0,0,.6) calc(var(--e) + 200px),rgba(0,0,0,.24) calc(var(--e) + 380px),rgba(0,0,0,.18) 50%,rgba(0,0,0,.24) calc(100% - var(--e) - 380px),rgba(0,0,0,.6) calc(100% - var(--e) - 200px),#000 calc(100% - var(--e) - 60px),#000 100%),linear-gradient(180deg,transparent 0,#000 14%,#000 80%,transparent 100%);
  mask-composite:intersect}
.found-town .tw-svg{position:absolute;left:-10px;top:-10px;width:calc(100% + 20px);height:calc(100% + 20px);animation:twDrift 46s ease-in-out infinite alternate}
.fc-iso .tw-road{fill:#101115;stroke:none}
.fc-iso .tw-dash{stroke-dasharray:10 10}
.fc-iso .tw-zebra{fill:#1B1D22;stroke:none}
@keyframes twDrift{from{transform:translate(-5px,-3px)}to{transform:translate(5px,4px)}}
@media (max-width:1023px){ .found-collage{bottom:auto;height:320px;--e:56px} }
@media (prefers-reduced-motion:reduce){ .found-town .tw-svg{animation:none} }
`;
if ((process.argv[1] || "").endsWith("town.mjs")) {
  const BRIGHT = `.iso.fc-iso,.iso.fc-iso[data-theme]{--anatomy-hi:#9aa1ad;--anatomy-mid:#6a717c;--anatomy-lo:#4a505a;--anatomy-faint:#363b43;--anatomy-top:#1d2027;--anatomy-paper:#16181d;--anatomy-face:#191c21;--anatomy-shade-0:#121418;--anatomy-shade-1:#15171b;--anatomy-shade-2:#181a1f;--anatomy-shade-3:#1b1e23}.fc-iso .tw-road{fill:#1a1d22}.fc-iso .tw-zebra{fill:#3a3f48}.found-collage{-webkit-mask-image:none;mask-image:none}`;
  const page = (extra) => `<!doctype html><html><head><meta charset="utf-8"><style>${k.ISO_CSS}${CSS}${extra}body{margin:0;background:#0B0C0E}.found{position:relative;width:100vw;height:683px;background:#0B0C0E;overflow:hidden}</style></head><body><section class="found">${HTML}</section></body></html>`;
  writeFileSync(new URL("./art-bright.html", import.meta.url), page(BRIGHT));
  writeFileSync(new URL("./art.html", import.meta.url), page(""));
  /* a sheet for the line check: the ground inline, and one of each symbol drawn inline */
  const sheet = `<!doctype html><html><head><meta charset="utf-8"><style>${k.ISO_CSS}${CSS}${BRIGHT}body{margin:0;background:#0B0C0E}.g svg{display:block}</style></head><body><div class="iso fc-iso" data-theme="dark"><div class="g"><svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">${GROUND}${plots.map((p) => p.svg).join("")}${Ln(paving.join(""), { tone: "faint" })}</svg>${[...used].map((id) => `<svg viewBox="-110 -150 220 200" width="220" height="200">${O[id].draw(P0)}</svg>`).join("")}</div></div></body></html>`;
  writeFileSync(new URL("./sheet.html", import.meta.url), sheet);
  console.log("order", [...used].join(","));
  console.log("svg bytes", SVG.length, "items", items.length, "plots", plots.length, "defs", DEFS.length, "ground", GROUND.length);
}
