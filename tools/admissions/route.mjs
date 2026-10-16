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

/* ---- ground: lawn, the walk with pavers, a kerb either side ---- */
ground.push(S(k.slabOf({ x: -1600, y: -1400, w: 3200, d: 2800, r: 0 }, -2, 1, P, 2), { tone: "faint", crease: "none", flat: true, className: "rt-lawn" }));
ground.push(`<path class="rt-walk" d="${pd([[-1600, -22, 0], [1600, -22, 0], [1600, 22, 0], [-1600, 22, 0]])}"/>`);
let pav = ""; for (let x = -1590; x < 1600; x += 22) pav += ln([[x, -22, 0.1], [x, 22, 0.1]]);
ground.push(Ln(pav, { tone: "faint", className: "rt-pav", free: true }));
ground.push(S(k.slabOf({ x: -1600, y: -26, w: 3200, d: 4, r: 0 }, 0, 2, P, 2), { tone: "lo", crease: "none" }));
ground.push(S(k.slabOf({ x: -1600, y: 22, w: 3200, d: 4, r: 0 }, 0, 2, P, 2), { tone: "lo", crease: "none" }));

/* ---- the stations: a plinth beside the walk, a short spur onto it, the object, a flag ---- */
const OBJ = [["monitor", 0.9], ["papers", 1.0], ["board", 0.85], ["table", 0.85], ["letter", 0.95]];
const flags = [];
SX.forEach((x, i) => {
  const pl = { x: x - 40, y: -96, w: 80, d: 54, r: 3 };
  ground.push(`<path class="rt-walk" d="${pd([[x - 12, -42, 0], [x + 12, -42, 0], [x + 12, -26, 0], [x - 12, -26, 0]])}"/>`);
  add([x, -69, 0], S(k.slabOf(pl, 0, 5, P, 2, 0.6), { tone: "lo" }) + S(k.slabOf(k.insetPlan(pl, 4), 5, 1.4, P, 2, 0.4), { tone: "mid", crease: "none" }));
  put(OBJ[i][0], [x, -70, 6.4], OBJ[i][1]);
  /* the flag: a pole at the plinth's front-right corner and a pennant (data-i lets the page light the one in focus) */
  const fx = x + 20, fy = -34;   /* at the foot of the spur, between the walk and the plinth */
  const pole = S(k.cylinder(fx, fy, 0.9, 6.4, 44, P, 10), { tone: "mid", crease: "none" });
  const pen = `<path class="rt-flag" data-i="${i}" d="${pd([[fx, fy, 50], [fx, fy, 40.5], [fx - 16, fy, 45.25]])}"/>`;
  add([fx, fy, 0], pole + pen);
  flags.push(at([fx, fy, 45]));
});

/* ---- the campus at the end of the walk: a teaching block, the arch on the forecourt, columns, a hostel wing ---- */
const CX = X0 + 5 * STEP + 40;
ground.push(S(k.slabOf({ x: CX - 120, y: -150, w: 260, d: 120, r: 2 }, 0, 1.4, P, 2), { tone: "lo", crease: "none" }));
const block = { x: CX - 70, y: -250, w: 170, d: 90, r: 1 };
const bf = block.y + block.d;
let rows = ""; for (const z of [18, 34, 50, 66]) for (let x = block.x + 10; x < block.x + block.w - 12; x += 16) rows += pd([[x, bf + 0.05, z], [x + 9, bf + 0.05, z], [x + 9, bf + 0.05, z + 8], [x, bf + 0.05, z + 8]]);
add([block.x + block.w / 2, block.y + block.d / 2, 0], S(k.slabOf(block, 0, 82, P, 2, 0.6), { tone: "mid", inner: Ln(rows, { tone: "lo" }) + Ln(k.sideSeam(block, 10, P, 2), { tone: "faint" }) }) +
  S(k.slabOf(k.insetPlan(block, -1.2), 82, 3, P, 2, 0.4), { tone: "mid" }));
const hostel = { x: CX - 190, y: -280, w: 100, d: 70, r: 1 };
const hf = hostel.y + hostel.d;
let hw = ""; for (const z of [14, 28, 42]) for (let x = hostel.x + 8; x < hostel.x + hostel.w - 10; x += 14) hw += pd([[x, hf + 0.05, z], [x + 7, hf + 0.05, z], [x + 7, hf + 0.05, z + 7], [x, hf + 0.05, z + 7]]);
add([hostel.x + hostel.w / 2, hostel.y + hostel.d / 2, 0], S(k.slabOf(hostel, 0, 54, P, 2, 0.6), { tone: "mid", inner: Ln(hw, { tone: "lo" }) }) + S(k.slabOf(k.insetPlan(hostel, -1), 54, 3, P, 2, 0.4), { tone: "mid" }));
put("arch", [CX - 8, -60, 1.4], 1.0);
put("column", [CX - 64, -58, 1.4], 0.75); put("column", [CX + 48, -58, 1.4], 0.75);

/* ---- trees and benches along the walk ---- */
for (const x of [-420, -265, -135, -5, 125, 255]) put("tree", [x, -150, 0], 0.7);
for (const x of [-470, -300, -110, 80, 260, 430]) put("tree", [x, 60, 0], 0.8);
for (const x of [-210, 140]) put("bench", [x, 40, 0], 0.7);

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
const svg = compact(`<svg class="rt-svg iso-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><g class="rt-ground">${ground.join("")}</g>${back}<g id="rtStu" class="rt-stu" transform="translate(${(sp[0] - u0[0]).toFixed(1)} ${(sp[1] - u0[1]).toFixed(1)})">${STU}</g>${front}</svg>`)
  .replace(`class="rt-flag" data-i="${FOCUS}"`, `class="rt-flag on" data-i="${FOCUS}"`);
writeFileSync(new URL("./route.svg", import.meta.url), svg);
writeFileSync(new URL("./route.json", import.meta.url), JSON.stringify({ poses: POSES, stride: 26, stations: SX, unit: [+(u1[0] - u0[0]).toFixed(4), +(u1[1] - u0[1]).toFixed(4)], W, H }));
writeFileSync(new URL("./route-preview.html", import.meta.url), `<!doctype html><meta charset="utf-8"><style>${k.ISO_CSS}body{margin:0;background:#fff}.wrap{width:402px;height:420px;overflow:hidden}.rt-svg{width:100%;height:100%}.rt-walk{fill:#EEF1F5}.rt-flag{fill:#E1E5EA}.rt-flag.on{fill:#0673F9}.rt-shirt path,.rt-arm path{fill:#0673F9!important;stroke:#0450B0!important}.rt-legs path{fill:#1E2A44!important;stroke:#10182A!important}.rt-bag path{fill:#F59700!important;stroke:#B26A00!important}.rt-skin path{fill:#E8B98F!important;stroke:#B98457!important}.rt-hair path{fill:#2A2118!important;stroke:#16110C!important}</style><div class="iso" data-theme="light"><div class="wrap">${svg}</div></div>`);
console.log("items", items.length, "bytes", svg.length);
