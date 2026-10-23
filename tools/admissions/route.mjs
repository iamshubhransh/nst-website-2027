/* Admissions · hero figure: "the route in". A paved walk runs corner to corner. Along it, one station per step of the admission
   process, each a low plinth with the step's object: register (a desk monitor), NSAT (the test papers), the interview (a
   chalkboard), counselling (a table), blocking the seat (the offer letter). The walk ends at the campus: a teaching block behind the
   arched gate. Every station carries a small flag; the student (the one lit part) stands on the walk at the station in focus and
   that station's flag is lit. Same isometric language as the placements commute and the homepage foundations.
   Writes route.svg + route.json (station positions in screen units) + route-preview.html.
   Run: node tools/admissions/route.mjs */
import { writeFileSync } from "node:fs";
import * as k from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/iso-kit.mjs";
import * as G from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/lathe.mjs";
import { O } from "../nav-figures/found3/objects.mjs";

const S = (p, st) => k.solidSvg(p, st), Ln = (d, st) => k.lineSvg(d, st);
O.lamp = { draw(Pr) {
  return S(k.cylinder(0, 0, 3.6, 0, 2, Pr, 18), { tone: "lo" }) + S(k.cylinder(0, 0, 1.2, 2, 44, Pr, 12), { tone: "mid", crease: "none" }) +
    S(k.slabOf({ x: -1, y: -1, w: 12, d: 2, r: 0.5 }, 44, 1.6, Pr, 2), { tone: "mid" }) + S(G.sphereOf([10, 0, 42.6], 2.6, Pr, { steps: 16 }), { tone: "hi" });
} };

const W = 760, H = 794;   /* the phone hero is 402 × 420 */
const STEP = 132, X0 = -330;   /* five stations along the walk, the campus after them */
const SX = [0, 1, 2, 3, 4].map((i) => X0 + i * STEP);
const AZ = +(process.env.AZ ?? 148);   /* the walk climbs from bottom-left (register) to top-right (the campus) */
const P = k.fitProjection([[-370, -100, 0], [350, -100, 0], [-370, 30, 0], [300, 30, 0], [420, -250, 90]], W, H, { pad: 4, azimuth: AZ, elevation: 30 });
const at = (p) => k.iso(p, P);
const pd = (pts) => k.pathOf(pts.map(at), true);
const ln = (pts) => k.pathOf(pts.map(at));

const ground = [], items = [];
const add = (c, svg) => items.push({ d: k.depthOf(c, P), svg });
function put(id, c, s = 1){ const [sx, sy] = at(c); const P0 = { ...P, origin: [0, 0], scale: P.scale * s }; add(c, `<g transform="translate(${sx.toFixed(1)} ${sy.toFixed(1)})">${O[id].draw(P0)}</g>`); }

/* ---- colour (16 Oct, his ask: "add some colours"): each material is a class that resets the kit's paper / shade / top variables,
        so solids keep their shading in colour. The palette CSS is written to route.css (build.py appends it) ---- */
const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const toHex = (c) => "#" + c.map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0")).join("");
const mix = (h, w, t) => toHex(hex(h).map((v, i) => v + (hex(w)[i] - v) * t));
const MAT = { brick: "#E7AE86", cream: "#F2DDB8", sky: "#9EC4F2", glass: "#B9D4F5", roof: "#6F9BE8", stone: "#E3DED4", leaf: "#86C27A", leaf2: "#69AE66",
  leaf3: "#A5D48C", trunk: "#B98A5E", bus: "#F4A62A", field: "#A6D78F", track: "#E79A7B", bloom: "#F28FB4", bloom2: "#FFD166", plinth0: "#CFE3FB",
  plinth1: "#D7F0DF", plinth2: "#E6DCFB", plinth3: "#FDE3C2", plinth4: "#FBD5E1", grass: "#EEF6EA", kerb: "#DDE3EA", water: "#A9D6F2" };
let PAL = "";
for (const [n, b] of Object.entries(MAT)) PAL += `.m-${n}{--anatomy-paper:${mix(b, "#ffffff", .35)};--anatomy-face:${mix(b, "#ffffff", .35)};--anatomy-shade-0:${mix(b, "#000000", .14)};--anatomy-shade-1:${mix(b, "#000000", .06)};--anatomy-shade-2:${b};--anatomy-shade-3:${mix(b, "#ffffff", .2)};--anatomy-top:${mix(b, "#ffffff", .5)};--anatomy-lo:${mix(b, "#000000", .32)};--anatomy-mid:${mix(b, "#000000", .32)};--anatomy-faint:${mix(b, "#000000", .18)}}\n`;
const STEPC = ["#0673F9", "#16A34A", "#7B55EE", "#F59700", "#E0457B"];
PAL += STEPC.map((c, i) => `.rt-flag[data-i="${i}"]{fill:${c};opacity:.38;transition:opacity .3s ease}`).join("\n") + "\n.rt-flag.on{opacity:1}\n";
PAL += ".rt-dt{display:none}\n@media (min-width:1024px){.rt-dt{display:inline}}\n";   /* the desktop-only campus around the walk */
PAL += ".rt-pennant{fill:#0673F9;stroke:none}.rt-walk{fill:#E8EDF4}.rt-track-line{stroke:#fff;stroke-width:1.6;fill:none}.rt-win{fill:#CFE3FB;stroke:none}.rt-win-warm{fill:#FFE7B8;stroke:none}\n";
const paint = (m, svg) => `<g class="m-${m}">${svg}</g>`;

/* trees in three greens with brown trunks */
let treeN = 0;
function tree(x, y, sc = 1){
  const v = ["leaf", "leaf2", "leaf3"][treeN++ % 3];
  const Pq = P;
  const r = (n) => n * sc;
  add([x, y, 0], paint("trunk", S(k.cylinder(x, y, r(2.4), 0, r(24), Pq, 14), { tone: "mid", crease: "none" })) +
    paint(v, S(G.sphereOf([x, y, r(38)], r(15), Pq, { steps: 16 }), { tone: "mid" }) + S(G.sphereOf([x + r(8), y + r(6), r(30)], r(9), Pq, { steps: 16 }), { tone: "mid" })));
}
const windows = (plan, zs, step, w, h, cls = "rt-win") => { const f = plan.y + plan.d + 0.05; let d = ""; for (const z of zs) for (let x = plan.x + 9; x < plan.x + plan.w - 10; x += step) d += pd([[x, f, z], [x + w, f, z], [x + w, f, z + h], [x, f, z + h]]); return `<path class="${cls}" d="${d}"/>`; };
const sideWindows = (plan, zs, step, h, cls = "rt-win") => { const f = plan.x + plan.w + 0.05; let d = ""; for (const z of zs) for (let y = plan.y + 9; y < plan.y + plan.d - 10; y += step) d += pd([[f, y, z], [f, y + step * .55, z], [f, y + step * .55, z + h], [f, y, z + h]]); return `<path class="${cls}" d="${d}"/>`; };

/* ---- ground: tinted grass, the walk with pavers, a kerb either side ---- */
ground.push(paint("grass", S(k.slabOf({ x: -1600, y: -1400, w: 3200, d: 2800, r: 0 }, -2, 1, P, 2), { tone: "faint", crease: "none", flat: true, className: "rt-lawn" })));
ground.push(`<path class="rt-walk" d="${pd([[-1600, -22, 0], [1600, -22, 0], [1600, 22, 0], [-1600, 22, 0]])}"/>`);
let pav = ""; for (let x = -1590; x < 1600; x += 22) pav += ln([[x, -22, 0.1], [x, 22, 0.1]]);
ground.push(Ln(pav, { tone: "faint", className: "rt-pav", free: true }));
ground.push(paint("kerb", S(k.slabOf({ x: -1600, y: -26, w: 3200, d: 4, r: 0 }, 0, 2, P, 2), { tone: "lo", crease: "none" })));
ground.push(paint("kerb", S(k.slabOf({ x: -1600, y: 22, w: 3200, d: 4, r: 0 }, 0, 2, P, 2), { tone: "lo", crease: "none" })));

/* ---- the sports ground in front of the walk: a green pitch, a running track, two goals ---- */
const FLD = { x: -430, y: 70, w: 300, d: 150, r: 26 };
ground.push(paint("track", S(k.slabOf(FLD, 0, 1.2, P, 8), { tone: "lo", crease: "none" })));
ground.push(paint("field", S(k.slabOf(k.insetPlan(FLD, 14), 1.2, 0.6, P, 8), { tone: "lo", crease: "none" })));
ground.push(`<path class="rt-track-line" d="${pd([[FLD.x + 7, FLD.y + 7, 1.25], [FLD.x + FLD.w - 7, FLD.y + 7, 1.25], [FLD.x + FLD.w - 7, FLD.y + FLD.d - 7, 1.25], [FLD.x + 7, FLD.y + FLD.d - 7, 1.25]])}"/>` +
  `<path class="rt-track-line" d="${ln([[FLD.x + FLD.w / 2, FLD.y + 14, 1.9], [FLD.x + FLD.w / 2, FLD.y + FLD.d - 14, 1.9]])}"/>`);
for (const gx of [FLD.x + 22, FLD.x + FLD.w - 22]) add([gx, FLD.y + FLD.d / 2, 0], S(k.slabOf({ x: gx - 1, y: FLD.y + FLD.d / 2 - 14, w: 2, d: 2, r: 0.3 }, 1.8, 12, P, 2), { tone: "mid" }) +
  S(k.slabOf({ x: gx - 1, y: FLD.y + FLD.d / 2 + 12, w: 2, d: 2, r: 0.3 }, 1.8, 12, P, 2), { tone: "mid" }) + S(k.slabOf({ x: gx - 1, y: FLD.y + FLD.d / 2 - 14, w: 2, d: 28, r: 0.3 }, 13.8, 2, P, 2), { tone: "mid" }));

/* ---- the stations: a tinted plinth beside the walk, a short spur onto it, the object, a coloured flag ---- */
const OBJ = [["monitor", 0.9], ["papers", 1.0], ["board", 0.85], ["table", 0.85], ["letter", 0.95]];
const flags = [];
SX.forEach((x, i) => {
  const pl = { x: x - 40, y: -96, w: 80, d: 54, r: 3 };
  ground.push(`<path class="rt-walk" d="${pd([[x - 12, -42, 0], [x + 12, -42, 0], [x + 12, -26, 0], [x - 12, -26, 0]])}"/>`);
  add([x, -69, 0], paint("plinth" + i, S(k.slabOf(pl, 0, 5, P, 2, 0.6), { tone: "lo" }) + S(k.slabOf(k.insetPlan(pl, 4), 5, 1.4, P, 2, 0.4), { tone: "mid", crease: "none" })));
  put(OBJ[i][0], [x, -70, 6.4], OBJ[i][1]);
  const fx = x + 20, fy = -34;   /* at the foot of the spur, between the walk and the plinth */
  const pole = S(k.cylinder(fx, fy, 0.9, 6.4, 44, P, 10), { tone: "mid", crease: "none" });
  const pen = `<path class="rt-flag" data-i="${i}" d="${pd([[fx, fy, 50], [fx, fy, 40.5], [fx - 16, fy, 45.25]])}"/>`;
  add([fx, fy, 0], pole + pen);
  flags.push(at([fx, fy, 45]));
});

/* ---- behind the stations, the rest of the campus: a library rotunda with a dome, an auditorium, a glass lab tower, a block ---- */
const LIB = [-330, -215];
add([LIB[0], LIB[1], 0], paint("stone", S(k.cylinder(LIB[0], LIB[1], 40, 0, 6, P, 40, 0.5), { tone: "lo" })) +
  paint("sky", S(k.cylinder(LIB[0], LIB[1], 34, 6, 40, P, 40, 0.5), { tone: "mid" })) +
  paint("stone", S(k.cylinder(LIB[0], LIB[1], 36, 46, 4, P, 40, 0.4), { tone: "mid" })) +
  paint("roof", S(G.sphereOf([LIB[0], LIB[1], 50], 24, P, { steps: 28 }), { tone: "mid" })));
for (let a = 0; a < 8; a++){ const t = Math.PI * (0.05 + a * 0.12); add([LIB[0] + 38 * Math.cos(t), LIB[1] + 38 * Math.sin(t), 0], paint("stone", S(k.cylinder(LIB[0] + 38 * Math.cos(t), LIB[1] + 38 * Math.sin(t), 2.4, 6, 40, P, 12), { tone: "mid", crease: "none" }))); }
const AUD = { x: -230, y: -280, w: 110, d: 74, r: 2 };
add([AUD.x + AUD.w / 2, AUD.y + AUD.d / 2, 0], paint("cream", S(k.slabOf(AUD, 0, 40, P, 2, 0.6), { tone: "mid", inner: windows(AUD, [12, 26], 14, 7, 8, "rt-win-warm") })) +
  paint("roof", S(k.slabOf(k.insetPlan(AUD, -3), 40, 5, P, 2, 0.6), { tone: "mid" })));
const LAB = { x: -70, y: -270, w: 64, d: 60, r: 1 };
add([LAB.x + LAB.w / 2, LAB.y + LAB.d / 2, 0], paint("glass", S(k.slabOf(LAB, 0, 112, P, 2, 0.6), { tone: "mid", inner: windows(LAB, [12, 26, 40, 54, 68, 82, 96], 13, 8, 9) })) +
  paint("roof", S(k.slabOf(k.insetPlan(LAB, -2), 112, 4, P, 2, 0.5), { tone: "mid" })) + S(k.cylinder(LAB.x + 44, LAB.y + 20, 1, 116, 22, P, 10), { tone: "mid", crease: "none" }));
const BLK2 = { x: 40, y: -290, w: 120, d: 70, r: 1 };
add([BLK2.x + BLK2.w / 2, BLK2.y + BLK2.d / 2, 0], paint("brick", S(k.slabOf(BLK2, 0, 60, P, 2, 0.6), { tone: "mid", inner: windows(BLK2, [14, 30, 46], 15, 8, 9) })) +
  paint("brick", S(k.slabOf(k.insetPlan(BLK2, -1.2), 60, 3, P, 2, 0.4), { tone: "mid" })));

/* ---- the campus at the end of the walk: a terracotta teaching block, a cream hostel, the arch, columns, a clock tower, pennants ---- */
const CX = X0 + 5 * STEP + 40;
ground.push(paint("stone", S(k.slabOf({ x: CX - 120, y: -150, w: 260, d: 120, r: 2 }, 0, 1.4, P, 2), { tone: "lo", crease: "none" })));
const block = { x: CX - 70, y: -250, w: 170, d: 90, r: 1 };
add([block.x + block.w / 2, block.y + block.d / 2, 0], paint("brick", S(k.slabOf(block, 0, 82, P, 2, 0.6), { tone: "mid", inner: windows(block, [18, 34, 50, 66], 16, 9, 8) + Ln(k.sideSeam(block, 10, P, 2), { tone: "faint" }) }) +
  S(k.slabOf(k.insetPlan(block, -1.2), 82, 3, P, 2, 0.4), { tone: "mid" })));
const hostel = { x: CX - 190, y: -280, w: 100, d: 70, r: 1 };
add([hostel.x + hostel.w / 2, hostel.y + hostel.d / 2, 0], paint("cream", S(k.slabOf(hostel, 0, 54, P, 2, 0.6), { tone: "mid", inner: windows(hostel, [14, 28, 42], 14, 7, 7, "rt-win-warm") }) + S(k.slabOf(k.insetPlan(hostel, -1), 54, 3, P, 2, 0.4), { tone: "mid" })));
const TWR = { x: CX + 120, y: -200, w: 30, d: 30, r: 0.8 };
add([TWR.x + 15, TWR.y + 15, 0], paint("brick", S(k.slabOf(TWR, 0, 120, P, 2, 0.6), { tone: "mid", inner: windows(TWR, [16, 40, 64], 14, 6, 12) }) + S(k.slabOf(k.insetPlan(TWR, -2), 120, 4, P, 2, 0.4), { tone: "mid" })) +
  paint("roof", S(k.slabOf(k.insetPlan(TWR, 5), 124, 12, P, 2, 0.4), { tone: "mid" })));
put("arch", [CX - 8, -60, 1.4], 1.0);
put("column", [CX - 64, -58, 1.4], 0.75); put("column", [CX + 48, -58, 1.4], 0.75);
for (const px of [CX - 100, CX + 84]) add([px, -48, 0], S(k.cylinder(px, -48, 1, 1.4, 64, P, 10), { tone: "mid", crease: "none" }) + `<path class="rt-pennant" d="${pd([[px, -48, 65], [px, -48, 52], [px + 18, -48, 58.5]])}"/>`);

/* ---- the shuttle parked by the walk, flower beds, trees and benches ---- */
const BUS = { x: 10, y: 52, w: 64, d: 22, r: 4 };
add([BUS.x + 32, BUS.y + 11, 0], S(k.cylinder(BUS.x + 12, BUS.y + BUS.d, 4, 0, 2, P, 12), { tone: "mid" }) + S(k.cylinder(BUS.x + 52, BUS.y + BUS.d, 4, 0, 2, P, 12), { tone: "mid" }) +
  paint("bus", S(k.slabOf(BUS, 3, 22, P, 3, 0.8), { tone: "mid", inner: windows(BUS, [12], 11, 8, 6) })) + paint("bus", S(k.slabOf(k.insetPlan(BUS, 2), 25, 1.6, P, 3, 0.4), { tone: "mid" })));
for (const [bx, m] of [[-110, "bloom"], [120, "bloom2"], [200, "bloom"]]) {
  const bed = { x: bx - 22, y: 34, w: 44, d: 12, r: 3 };
  let fl = ""; for (let f = 0; f < 5; f++) fl += S(G.sphereOf([bx - 16 + f * 8, 40, 5], 3, P, { steps: 10 }), { tone: "mid" });
  add([bx, 40, 0], paint("trunk", S(k.slabOf(bed, 0, 3, P, 3, 0.4), { tone: "mid" })) + paint("leaf", S(k.slabOf(k.insetPlan(bed, 1.5), 3, 1, P, 3, 0.3), { tone: "mid", crease: "none" })) + paint(m, fl));
}
for (const x of [-420, -265, -135, -5, 125, 255]) tree(x, -150, 0.7);
for (const x of [-480, -100, 100, 270, 430]) tree(x, 60, 0.8);
for (const [x, y, s2] of [[-460, -290, .85], [-150, -310, .75], [10, -320, .8], [190, -330, .7], [-80, 240, .9], [-480, 240, .8], [160, 150, .85], [330, 180, .8], [460, 70, .7]]) tree(x, y, s2);
for (const x of [-210, 330]) put("bench", [x, 40, 0], 0.7);

/* ---- desktop only (23 Oct 2026): the campus around the walk, so the wide hero runs edge to edge. On the desktop hero the left
        of the figure (under the copy) shows the back of the campus, the top right the land past the gate, the bottom right the
        front lawn. Everything here sits in a .rt-dt group that route.css hides below 1024 px, so the phone figure is unchanged ---- */
const DT = (svg) => `<g class="rt-dt">${svg}</g>`;
const addDT = (c, svg) => add(c, DT(svg));
/* the trees: one drawing per green at the world origin (in <defs>), placed with <use>. The projection is linear, so a tree at (x, y)
   scaled sc is that drawing scaled sc about the origin's screen point and moved to (x, y)'s; strokes don't scale (.iso-svg paths are
   non-scaling), so the trees match the phone's */
let treeD = 0;
const TREE_DEFS = ["leaf2", "leaf", "leaf3"].map((v, n) => `<g id="rtT${n}">` + paint("trunk", S(k.cylinder(0, 0, 2.4, 0, 24, P, 14), { tone: "mid", crease: "none" })) +
  paint(v, S(G.sphereOf([0, 0, 38], 15, P, { steps: 16 }), { tone: "mid" }) + S(G.sphereOf([8, 6, 30], 9, P, { steps: 16 }), { tone: "mid" })) + "</g>").join("");
function treeDT(x, y, sc = 1){
  const n = treeD++ % 3, [ax, ay] = at([x, y, 0]), [ox, oy] = at([0, 0, 0]);
  addDT([x, y, 0], `<use href="#rtT${n}" transform="translate(${(ax - sc * ox).toFixed(2)} ${(ay - sc * oy).toFixed(2)}) scale(${sc})"/>`);
}
/* a back lane parallel to the walk, and the cricket ground behind it */
ground.push(DT(`<path class="rt-walk" d="${pd([[-1600, -440, 0], [1600, -440, 0], [1600, -418, 0], [-1600, -418, 0]])}"/>` +
  paint("kerb", S(k.slabOf({ x: -1600, y: -444, w: 3200, d: 4, r: 0 }, 0, 2, P, 2), { tone: "lo", crease: "none" })) +
  paint("kerb", S(k.slabOf({ x: -1600, y: -418, w: 3200, d: 4, r: 0 }, 0, 2, P, 2), { tone: "lo", crease: "none" }))));
const OVAL = { x: -470, y: -800, w: 380, d: 230, r: 110 };
ground.push(DT(paint("field", S(k.slabOf(OVAL, 0, 0.8, P, 16), { tone: "lo", crease: "none" })) +
  `<path class="rt-track-line" d="${pd(k.ringOf(k.insetPlan(OVAL, 12), 16).map(([x, y]) => [x, y, 0.9]))}"/>` +
  paint("stone", S(k.slabOf({ x: -296, y: -700, w: 32, d: 14, r: 1 }, 0.8, 0.5, P, 2), { tone: "lo", crease: "none" }))));
/* a pond on the front lawn */
const POND = { x: 20, y: 250, w: 200, d: 110, r: 52 };
ground.push(DT(paint("stone", S(k.slabOf(POND, 0, 1.6, P, 14), { tone: "lo", crease: "none" })) +
  paint("water", S(k.slabOf(k.insetPlan(POND, 5), 1.6, 0.3, P, 14), { tone: "faint", crease: "none" }))));
/* behind the campus: two hostel blocks and the mess, across the back lane */
for (const [hx, hy] of [[110, -560], [310, -585]]) {
  const H = { x: hx, y: hy, w: 150, d: 70, r: 1 };
  addDT([hx + 75, hy + 35, 0], paint("cream", S(k.slabOf(H, 0, 66, P, 2, 0.6), { tone: "mid", inner: windows(H, [12, 26, 40, 54], 14, 7, 7, "rt-win-warm") })) +
    paint("brick", S(k.slabOf(k.insetPlan(H, -1.5), 66, 4, P, 2, 0.4), { tone: "mid" })));
}
const MESS = { x: 530, y: -545, w: 130, d: 84, r: 2 };
addDT([MESS.x + 65, MESS.y + 42, 0], paint("brick", S(k.slabOf(MESS, 0, 32, P, 2, 0.6), { tone: "mid", inner: windows(MESS, [12], 16, 10, 12, "rt-win-warm") })) +
  paint("roof", S(k.slabOf(k.insetPlan(MESS, -4), 32, 6, P, 2, 0.6), { tone: "mid" })));
/* past the gate: a sports hall and a water tower */
const HALL = { x: 600, y: -330, w: 160, d: 110, r: 2 };
addDT([HALL.x + 80, HALL.y + 55, 0], paint("glass", S(k.slabOf(HALL, 0, 44, P, 2, 0.6), { tone: "mid", inner: windows(HALL, [12, 26], 15, 9, 9) })) +
  paint("roof", S(k.slabOf(k.insetPlan(HALL, -3), 44, 7, P, 2, 0.6), { tone: "mid" })));
const WT = [860, -150];
addDT([WT[0], WT[1], 0], paint("stone", S(k.cylinder(WT[0], WT[1], 5, 0, 96, P, 16), { tone: "mid", crease: "none" }) + S(k.cylinder(WT[0], WT[1], 22, 96, 26, P, 32, 0.6), { tone: "mid" })) +
  paint("roof", S(G.sphereOf([WT[0], WT[1], 122], 12, P, { steps: 18 }), { tone: "mid" })));
/* lamps where the walk leaves the picture, at both ends */
for (const x of [-520, -660, -800, 560, 690, 820]) { const [sx, sy] = at([x, 32, 0]), P0 = { ...P, origin: [0, 0], scale: P.scale * 0.7 }; addDT([x, 32, 0], `<g transform="translate(${sx.toFixed(1)} ${sy.toFixed(1)})">${O.lamp.draw(P0)}</g>`); }
/* trees: along the back lane, round the cricket ground, past the gate, on the front lawn */
for (const x of [-860, -740, -620, -500, -380, -260, -140, -20, 520, 640, 760, 880]) treeDT(x, -380, 0.75);
for (const x of [-860, -740, -40, 60]) treeDT(x, -480, 0.8);
for (const [x, y, s2] of [[-560, -660, .85], [-20, -650, .8], [-200, -860, .9], [-420, -880, .8], [40, -820, .75], [160, -700, .85], [300, -720, .8], [460, -690, .75],
  [100, -960, .8], [260, -900, .85], [420, -1000, .8], [600, -880, .8], [700, -470, .75], [840, -420, .8], [960, -300, .7], [590, -110, .75], [700, -160, .8], [980, -60, .7],
  [600, 80, .8], [740, 60, .75], [300, 320, .85], [420, 250, .8], [-200, 330, .8], [-10, 400, .75], [250, 420, .8]]) treeDT(x, y, s2);

/* ---- the student (the lit part): drawn at x = 0 on the walk; the page moves it station to station ---- */
/* the student: a small person walking up the route (+x), so the backpack faces the viewer. Legs and arms are limbs hinged at the
   hip and shoulder; eight walk poses (legs scissor, arms swing the other way, the body dips at full stride) and a standing pose.
   The page shows one pose at a time, picked from the distance walked, so the feet never slide. Parts are sorted back to front. */
const LIMB = (o, ang, len, r, cls, tone) => {   /* a cylinder from o, swung ang radians forward (+x) from hanging straight down */
  const F = G.frameAlong(o, [Math.sin(ang), 0, -Math.cos(ang)]);
  return S(G.solidOf([[0, r], [len, r]], F, P), { tone, crease: "none", className: cls });
};
function personSvg(phase){
  const sw = phase === null ? 0 : Math.sin(phase), leg = 0.5 * sw, arm = -0.42 * sw, bob = phase === null ? 0 : -0.8 * Math.abs(sw);
  const parts = [];
  const part = (c, svg) => parts.push({ d: k.depthOf(c, P), svg });
  part([0, -2.4, 6], LIMB([0, -2.4, 12 + bob], leg, 12 + bob, 1.7, "rt-legs", "mid"));
  part([0, 2.4, 6], LIMB([0, 2.4, 12 + bob], -leg, 12 + bob, 1.7, "rt-legs", "mid"));
  part([0, 0, 11], S(k.slabOf({ x: -2.6, y: -4.6, w: 5.2, d: 9.2, r: 2.4 }, 11 + bob, 11, P, 6, 0.6), { tone: "hi", crease: "none", className: "rt-shirt" }));
  part([0.4, -5.6, 16], LIMB([0.4, -5.6, 20.5 + bob], arm, 8.5, 1.3, "rt-arm", "hi"));
  part([0.4, 5.6, 16], LIMB([0.4, 5.6, 20.5 + bob], -arm, 8.5, 1.3, "rt-arm", "hi"));
  part([-4.4, 0, 17], S(k.slabOf({ x: -6.2, y: -3.4, w: 3.4, d: 6.8, r: 1.4 }, 13 + bob, 8.5, P, 6, 0.5), { tone: "mid", crease: "none", className: "rt-bag" }));
  part([0, 0, 24], S(k.cylinder(0, 0, 1.3, 21.6 + bob, 2.2, P, 10), { tone: "mid", crease: "none", className: "rt-skin" }) +
    S(G.sphereOf([0, 0, 26.6 + bob], 3.5, P, { steps: 18 }), { tone: "hi", className: "rt-skin" }) +
    S(G.sphereOf([-0.7, 0, 27.7 + bob], 3.2, P, { steps: 18 }), { tone: "mid", className: "rt-hair" }));
  parts.sort((a, b) => a.d - b.d);
  return parts.map((q) => q.svg).join("");
}
const POSES = 8;
const STU = `<g class="rt-pose" data-p="idle">${personSvg(null)}</g>` +
  Array.from({ length: POSES }, (_, n) => `<g class="rt-pose" data-p="${n}" display="none">${personSvg(n / POSES * Math.PI * 2)}</g>`).join("");
const stuDepth = k.depthOf([0, 0, 0], P);

items.sort((a, b) => a.d - b.d);
const back = items.filter((it) => it.d <= stuDepth).map((it) => it.svg).join(""), front = items.filter((it) => it.d > stuDepth).map((it) => it.svg).join("");
const u0 = at([0, 0, 0]), u1 = at([1, 0, 0]);
const compact = (svg) => svg.replace(/ d="([^"]*)"/g, (m, d) => ' d="' + d.replace(/-?\d+\.\d{2,}/g, (n) => (+n).toFixed(1)) + '"');
const FOCUS = +(process.argv[2] ?? 1);   /* the station the static render shows: 1 = NSAT */
const sx = SX[FOCUS], sp = [u0[0] + (u1[0] - u0[0]) * sx, u0[1] + (u1[1] - u0[1]) * sx];
const svg = compact(`<svg class="rt-svg iso-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs>${TREE_DEFS}</defs><g class="rt-ground">${ground.join("")}</g>${back}<g id="rtStu" class="rt-stu" transform="translate(${(sp[0] - u0[0]).toFixed(1)} ${(sp[1] - u0[1]).toFixed(1)})">${STU}</g>${front}</svg>`)
  .replace(`class="rt-flag" data-i="${FOCUS}"`, `class="rt-flag on" data-i="${FOCUS}"`);
writeFileSync(new URL("./route.svg", import.meta.url), svg);
writeFileSync(new URL("./route.json", import.meta.url), JSON.stringify({ poses: POSES, stride: 26, stations: SX, unit: [+(u1[0] - u0[0]).toFixed(4), +(u1[1] - u0[1]).toFixed(4)], W, H }));
writeFileSync(new URL("./route.css", import.meta.url), PAL);
writeFileSync(new URL("./route-preview.html", import.meta.url), `<!doctype html><meta charset="utf-8"><style>${k.ISO_CSS}body{margin:0;background:#fff}.wrap{width:402px;height:420px;overflow:hidden}.rt-svg{width:100%;height:100%}${PAL}.rt-shirt path,.rt-arm path{fill:#0673F9!important;stroke:#0450B0!important}.rt-legs path{fill:#1E2A44!important;stroke:#10182A!important}.rt-bag path{fill:#F59700!important;stroke:#B26A00!important}.rt-skin path{fill:#E8B98F!important;stroke:#B98457!important}.rt-hair path{fill:#2A2118!important;stroke:#16110C!important}</style><div class="iso" data-theme="light"><div class="wrap">${svg}</div></div>`);
console.log("items", items.length, "bytes", svg.length);
