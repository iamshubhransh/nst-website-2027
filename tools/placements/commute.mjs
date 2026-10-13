/* Placements · first batches card: "the commute". One avenue runs edge to edge across the card. The campus (a teaching block, a
   clock tower and the arched gate) sits on the left; three company towers on the right. A shuttle (the one lit part) carries
   students from the gate to the towers, and the towers' windows light one by one: each lit window is a student with a paid
   internship (Pune 98.3%, Delhi 93% of the windows). Writes commute.svg + commute.json for build.py and pl.js.
   Run: node tools/placements/commute.mjs */
import { writeFileSync } from "node:fs";
import * as k from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/iso-kit.mjs";
import * as G from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/lathe.mjs";
import { O } from "../nav-figures/found3/objects.mjs";

const S = (p, st) => k.solidSvg(p, st), Ln = (d, st) => k.lineSvg(d, st);
O.lamp = { draw(Pr) {   /* from the foundations town: base, pole, arm, globe */
  return S(k.cylinder(0, 0, 3.6, 0, 2, Pr, 18), { tone: "lo" }) + S(k.cylinder(0, 0, 1.2, 2, 44, Pr, 12), { tone: "mid", crease: "none" }) +
    S(k.slabOf({ x: -1, y: -1, w: 12, d: 2, r: 0.5 }, 44, 1.6, Pr, 2), { tone: "mid" }) + S(G.sphereOf([10, 0, 42.6], 2.6, Pr, { steps: 16 }), { tone: "hi" });
} };
const W = 740, H = 420;
/* the camera: fitted to the middle of the scene, so the avenue, lawn and park run past both edges */
const P = k.fitProjection([[-330, -40, 0], [330, 40, 0], [-330, -170, 120], [330, -170, 220], [0, 120, 0]], W, H, { pad: 6, azimuth: 70, elevation: 27 });
const at = (p) => k.iso(p, P);
const pd = (pts) => k.pathOf(pts.map(at), true);
const ln = (pts) => k.pathOf(pts.map(at));

const ground = [], items = [];
const add = (c, svg) => items.push({ d: k.depthOf(c, P), svg });

/* ---- ground: lawn behind the campus, the avenue with sidewalks and a dashed centre line, a park strip in front ---- */
ground.push(S(k.slabOf({ x: -700, y: -240, w: 1400, d: 200, r: 0 }, -2, 1, P, 2), { tone: "faint", crease: "none", flat: true, className: "cm-lawn" }));
ground.push(S(k.slabOf({ x: -700, y: -40, w: 1400, d: 12, r: 0 }, 0, 2, P, 2), { tone: "lo", crease: "none", className: "cm-walk" }));
ground.push(S(k.slabOf({ x: -700, y: 28, w: 1400, d: 12, r: 0 }, 0, 2, P, 2), { tone: "lo", crease: "none", className: "cm-walk" }));
ground.push(`<path class="cm-road" d="${pd([[-700, -28, 0], [700, -28, 0], [700, 28, 0], [-700, 28, 0]])}"/>`);
let dashes = ""; for (let x = -690; x < 700; x += 26) dashes += ln([[x, 0, 0.2], [x + 13, 0, 0.2]]);
ground.push(Ln(dashes, { tone: "mid", className: "cm-dash", free: true }));
let zebra = ""; for (let i = 0; i < 7; i++){ const y = -24 + i * 7.4; zebra += pd([[112, y, 0.2], [134, y, 0.2], [134, y + 4, 0.2], [112, y + 4, 0.2]]); }
ground.push(`<path class="cm-zebra" d="${zebra}"/>`);
ground.push(S(k.slabOf({ x: -700, y: 40, w: 1400, d: 200, r: 0 }, -2, 1, P, 2), { tone: "faint", crease: "none", flat: true, className: "cm-lawn" }));
/* plaza in front of the towers and the campus forecourt */
ground.push(S(k.slabOf({ x: 140, y: -78, w: 300, d: 36, r: 2 }, 0, 1.4, P, 2), { tone: "lo", crease: "none" }));
ground.push(S(k.slabOf({ x: -440, y: -66, w: 230, d: 24, r: 2 }, 0, 1.4, P, 2), { tone: "lo", crease: "none" }));

/* ---- campus: a teaching block with window rows, a clock tower, the arched gate on the forecourt ---- */
const block = { x: -430, y: -170, w: 180, d: 96, r: 1 };
const blockFront = block.y + block.d;
let rows = ""; for (const z of [18, 34, 50]) for (let x = block.x + 10; x < block.x + block.w - 12; x += 16) rows += pd([[x, blockFront + 0.05, z], [x + 9, blockFront + 0.05, z], [x + 9, blockFront + 0.05, z + 8], [x, blockFront + 0.05, z + 8]]);
add([block.x + block.w / 2, block.y + block.d / 2, 0], S(k.slabOf(block, 0, 64, P, 2, 0.6), { tone: "mid", inner: Ln(rows, { tone: "lo" }) + Ln(k.sideSeam(block, 10, P, 2), { tone: "faint" }) }) +
  S(k.slabOf(k.insetPlan(block, -1.2), 64, 3, P, 2, 0.4), { tone: "mid" }));
const tower = { x: -300, y: -150, w: 30, d: 30, r: 0.8 };
const clock = k.ring(tower.x + 15, tower.y + tower.d + 0.05, 7, 98, P, 32);
const cf = tower.y + tower.d + 0.05, cx = tower.x + 15, cpts = []; for (let i = 0; i <= 32; i++){ const t = i / 32 * Math.PI * 2; cpts.push([cx + 8 * Math.cos(t), cf, 96 + 8 * Math.sin(t)]); }
const clockFace = `<path class="cm-clock" d="${pd(cpts)}"/>` + Ln(k.pathOf(cpts.map(at), true) + ln([[cx, cf, 96], [cx, cf, 101.5]]) + ln([[cx, cf, 96], [cx + 4.2, cf, 96]]), { tone: "hi" });
add([tower.x + 15, tower.y + 15, 0], S(k.slabOf(tower, 0, 112, P, 2, 0.6), { tone: "mid", inner: clockFace }) +
  S(k.slabOf(k.insetPlan(tower, -2), 112, 4, P, 2, 0.4), { tone: "mid" }) + S(k.slabOf(k.insetPlan(tower, 6), 116, 10, P, 2, 0.4), { tone: "mid" }));
function put(id, c, s = 1){ const [sx, sy] = at(c); const P0 = { ...P, origin: [0, 0], scale: P.scale * s }; add(c, `<g transform="translate(${sx.toFixed(1)} ${sy.toFixed(1)})">${O[id].draw(P0)}</g>`); }
put("arch", [-250, -58, 1.4], 0.9);
put("column", [-300, -56, 1.4], 0.7); put("column", [-200, -56, 1.4], 0.7);

/* ---- the towers: three companies, windows on the near face are the students (lit one by one) ---- */
const TOW = [{ x: 150, y: -190, w: 72, d: 70, h: 150, cols: 4 }, { x: 236, y: -176, w: 62, d: 62, h: 214, cols: 3 }, { x: 314, y: -200, w: 96, d: 84, h: 118, cols: 5 }];
let win = 0; const winSvg = [];
TOW.forEach((t, ti) => {
  const plan = { x: t.x, y: t.y, w: t.w, d: t.d, r: 0.8 }, fy = t.y + t.d + 0.05, panes = [];
  for (let z = 16; z + 10 < t.h - 6; z += 16) for (let c = 0; c < t.cols; c++){ const x0 = t.x + 7 + c * ((t.w - 14) / t.cols), x1 = x0 + (t.w - 14) / t.cols - 5;
    panes.push(`<path class="cm-win" data-i="${win++}" d="${pd([[x0, fy, z], [x1, fy, z], [x1, fy, z + 9], [x0, fy, z + 9]])}"/>`); }
  const side = []; for (let z = 16; z + 10 < t.h - 6; z += 16) side.push(ln([[t.x + t.w + 0.05, t.y + 0.8, z + 4.5], [t.x + t.w + 0.05, t.y + t.d - 0.8, z + 4.5]]));   /* floor lines run edge to edge so they end on the outline */
  add([t.x + t.w / 2, t.y + t.d / 2, 0], S(k.slabOf(plan, 0, t.h, P, 2, 0.6), { tone: "mid", inner: panes.join("") }) +
    S(k.slabOf(k.insetPlan(plan, -1.4), t.h, 3, P, 2, 0.4), { tone: "mid" }) +
    S(k.slabOf({ x: t.x + t.w * .55, y: t.y + 8, w: t.w * .3, d: t.d * .3, r: 0.6 }, t.h + 3, 8, P, 2, 0.4), { tone: "lo" }) +
    (ti === 1 ? S(k.cylinder(t.x + t.w / 2, t.y + t.d / 2, 1.2, t.h + 3, 26, P, 10), { tone: "mid", crease: "none" }) : ""));
});
const WINDOWS = win;

/* ---- street furniture: trees and lamps along both sidewalks, benches in the park ---- */
for (const x of [-560, -470, -150, -80, -10, 60, 470, 560]) put("tree", [x, -46, 2], 0.62);
for (const x of [-600, -520, -380, -290, -170, -40, 90, 210, 330, 450, 570]) put("tree", [x, 52, 0], 0.74);
for (const x of [-330, -60, 230, 520]) put("lamp", [x, 34, 2], 0.8);
for (const x of [-220, 150, 400]) put("bench", [x, 70, 0], 0.7);
for (const x of [-640, -520, -400, -250, -100, 40, 180, 320, 470, 600]) put("tree", [x, 128, 0], 0.9);

/* ---- the middle of the street: a low campus wall with posts, a bus shelter by the crossing, a kiosk, more trees ---- */
for (let x = -460; x < -200; x += 26) add([x + 1, -70, 0], S(k.slabOf({ x, y: -71, w: 2.4, d: 2.4, r: 0.3 }, 1.4, 12, P, 2), { tone: "lo" }));
add([-330, -69.5, 0], S(k.slabOf({ x: -462, y: -70.6, w: 264, d: 1.2, r: 0.2 }, 9, 2, P, 2), { tone: "lo", crease: "none" }));
const shel = { x: 72, y: -46, w: 40, d: 9, r: 0.6 };
add([92, -42, 0], S(k.slabOf({ x: 73, y: -45, w: 2, d: 2, r: 0.3 }, 2, 22, P, 2), { tone: "lo" }) + S(k.slabOf({ x: 107, y: -45, w: 2, d: 2, r: 0.3 }, 2, 22, P, 2), { tone: "lo" }) +
  S(k.slabOf({ x: 74, y: -46, w: 36, d: 1, r: 0.2 }, 6, 15, P, 2), { tone: "faint", crease: "none" }) + S(k.slabOf({ x: 78, y: -44, w: 26, d: 4, r: 0.5 }, 7, 2, P, 2), { tone: "mid" }) +
  S(k.slabOf(shel, 24, 2.2, P, 2, 0.4), { tone: "mid" }) + S(k.slabOf({ x: 114, y: -42, w: 2, d: 2, r: 0.3 }, 2, 26, P, 2), { tone: "lo" }) + S(k.slabOf({ x: 112, y: -43, w: 8, d: 1.4, r: 0.4 }, 22, 8, P, 2), { tone: "mid" }));
add([-90, -110, 0], S(k.slabOf({ x: -120, y: -128, w: 56, d: 40, r: 1 }, 0, 26, P, 2, 0.5), { tone: "mid", inner: Ln(pd([[-112, -88 + 0.05, 6], [-96, -88 + 0.05, 6], [-96, -88 + 0.05, 18], [-112, -88 + 0.05, 18]]) + pd([[-88, -88 + 0.05, 10], [-72, -88 + 0.05, 10], [-72, -88 + 0.05, 18], [-88, -88 + 0.05, 18]]), { tone: "lo" }) }) +
  S(k.slabOf({ x: -124, y: -92, w: 64, d: 10, r: 0.6 }, 22, 2, P, 2, 0.3), { tone: "mid" }));
for (const [x, y, sc] of [[-30, -120, 0.85], [10, -150, 0.8], [40, -110, 0.75], [-160, -150, 0.8], [-200, -112, 0.7], [-10, -180, 0.7]]) put("tree", [x, y, 0], sc);

/* ---- the shuttle (the lit part): drawn at x = 0 in the near lane; the page slides it along +x ---- */
const bus = { x: -28, y: 4, w: 56, d: 18, r: 3 };
const busFace = bus.y + bus.d + 0.05;
let bw = ""; for (let x = -20; x < 18; x += 9) bw += pd([[x, busFace, 10], [x + 6, busFace, 10], [x + 6, busFace, 16], [x, busFace, 16]]);
const BUS = S(k.slabOf({ x: -24, y: 5, w: 6, d: 2, r: 0.4 }, 0, 5, P, 2), { tone: "lo" }) + S(k.slabOf({ x: 16, y: 5, w: 6, d: 2, r: 0.4 }, 0, 5, P, 2), { tone: "lo" }) +
  S(k.slabOf(bus, 3, 18, P, 3, 0.8), { tone: "hi", lit: true, inner: Ln(bw, { tone: "hi" }) }) + S(k.slabOf({ x: -26, y: 6, w: 52, d: 14, r: 2 }, 21, 1.6, P, 3, 0.4), { tone: "hi", lit: true });
const busDepth = k.depthOf([0, 13, 0], P);

items.sort((a, b) => a.d - b.d);
const back = items.filter((it) => it.d <= busDepth).map((it) => it.svg).join(""), front = items.filter((it) => it.d > busDepth).map((it) => it.svg).join("");
const u0 = at([0, 0, 0]), u1 = at([1, 0, 0]);
const compact = (svg) => svg.replace(/ d="([^"]*)"/g, (m, d) => ' d="' + d.replace(/-?\d+\.\d{2,}/g, (n) => (+n).toFixed(1)) + '"');
const svg = compact(`<svg class="cm-svg iso-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g class="cm-ground">${ground.join("")}</g>${back}<g id="cmBus" class="cm-bus">${BUS}</g>${front}</svg>`);
writeFileSync(new URL("./commute.svg", import.meta.url), svg);
writeFileSync(new URL("./commute.json", import.meta.url), JSON.stringify({ windows: WINDOWS, unit: [+(u1[0] - u0[0]).toFixed(4), +(u1[1] - u0[1]).toFixed(4)], from: -470, to: 120, W, H }));
writeFileSync(new URL("./commute-preview.html", import.meta.url), `<!doctype html><meta charset="utf-8"><style>${k.ISO_CSS}body{margin:0;background:#fff}.wrap{width:370px;height:210px;overflow:hidden;border:1px solid #EDEFF3}.cm-svg{width:100%;height:100%}.cm-road{fill:#EEF1F5}.cm-zebra{fill:#fff}.cm-win{fill:#0673F9;stroke:none}.cm-clock{fill:#fff}</style><div class="iso" data-theme="light"><div class="wrap">${svg}</div></div>`);
console.log("windows", WINDOWS, "items", items.length, "bytes", svg.length);
