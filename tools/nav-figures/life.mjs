/* Student life: a corner of campus. A hostel block whose windows light up one by one, a tree, a half court; a ball dribbles
   under the hoop. Quiet on purpose: it sits beside the menu, it doesn't lead it. */
import { writeFileSync } from "node:fs";
import { k, G, W, H, previewPage, pathOfWorld } from "./common.mjs";

const LAWN = { x: -54, y: -40, w: 108, d: 80, r: 10 };
const BLD = { x: -46, y: -34, w: 46, d: 28, r: 1.5 }, BH = 36;
const FRONT = BLD.y + BLD.d, SIDE = BLD.x + BLD.w;
const COURT = { x: 4, y: 6, w: 42, d: 28, r: 1.2 };
const POLE = [25, 7.4], BOARD_Y = 10.2, RIM = [25, 14.4], RIM_Z = 27.4, BALL = [25, 22], BALL_R = 2.5;   /* the hoop on the court's back line, its board facing the viewer (+y) */
const TREE = [22, -24];
const P = k.fitProjection([...k.boxCorners(LAWN, -4, 0), ...k.boxCorners(BLD, 0, BH + 2), [TREE[0], TREE[1], 30], [POLE[0], POLE[1] + 3, 35]], W, H, { pad: 44, azimuth: 52 });
const at = (p) => k.iso(p, P);
const S = (paths, style) => k.solidSvg(paths, style);
const L = (d, style) => k.lineSvg(d, style);
const D = (pts, style) => k.dotsSvg(pts, style);

function ground() {
  const out = [`<path class="iso-halo" d="${k.haloOf(LAWN, -4, 4, P)}"/>`];
  out.push(S(k.slabOf(LAWN, -4, 4, P, 10, 1), { tone: "mid" }));
  out.push(L(k.planOutline(k.insetPlan(LAWN, 3), 0, P, 10), { tone: "faint" }));
  /* the walk from the door, and the court with its key */
  out.push(S(k.slabOf({ x: -26, y: FRONT, w: 7, d: LAWN.y + LAWN.d - FRONT - 3, r: 0.8 }, 0, 0.4, P, 2), { tone: "lo", crease: "none" }));
  out.push(S(k.slabOf(COURT, 0, 0.5, P, 3), { tone: "lo", crease: "none" }));
  out.push(L(k.planOutline(k.insetPlan(COURT, 1.6), 0.5, P, 3), { tone: "mid" }));
  out.push(L(k.planOutline({ x: 19.4, y: 7.6, w: 11.2, d: 15, r: 0.2 }, 0.5, P, 2), { tone: "mid" }));   /* the key, from the back line under the hoop */
  return out.join("");
}
/* windows: closed outlines on the two visible faces; each has a glow pane the live code switches */
const WINS = [];
for (let f = 0; f < 3; f++) {
  for (let i = 0; i < 4; i++) WINS.push({ face: "y", a: BLD.x + 5 + i * 10.4, z: 5 + f * 11 });
  for (let i = 0; i < 2; i++) WINS.push({ face: "x", a: BLD.y + 6 + i * 11, z: 5 + f * 11 });
}
const winPts = (w) => w.face === "y"
  ? [[w.a, FRONT, w.z], [w.a + 5.4, FRONT, w.z], [w.a + 5.4, FRONT, w.z + 6], [w.a, FRONT, w.z + 6]]
  : [[SIDE, w.a, w.z], [SIDE, w.a + 5.4, w.z], [SIDE, w.a + 5.4, w.z + 6], [SIDE, w.a, w.z + 6]];
function building() {
  const out = [];
  const floors = [12, 23].map((z) => L(k.sideSeam(BLD, z, P, 2), { tone: "faint" })).join("");
  out.push(S(k.slabOf(BLD, 0, BH, P, 2, 0.6), { tone: "mid", inner: floors }));
  out.push(S(k.slabOf(k.insetPlan(BLD, -0.8), BH, 2, P, 2, 0.4), { tone: "mid" }));
  out.push(L(k.planOutline(k.insetPlan(BLD, 2.4), BH + 2, P, 2), { tone: "faint" }));
  WINS.forEach((w, i) => { const d = pathOfWorld(winPts(w), P, true); out.push(`<path class="cl-win" data-w="${i}" d="${d}"/>`, L(d, { tone: "lo" })); });
  /* the door, centred under the walk, with a step */
  const dx = -26;
  out.push(L(pathOfWorld([[dx, FRONT, 0], [dx, FRONT, 4.4], [dx + 7, FRONT, 4.4], [dx + 7, FRONT, 0]], P), { tone: "mid" }));
  out.push(S(k.slabOf({ x: dx - 1, y: FRONT, w: 9, d: 2, r: 0.4 }, 0, 0.8, P, 2), { tone: "mid" }));
  return out.join("");
}
function tree() {
  return S(k.cylinder(TREE[0], TREE[1], 1.5, 0, 12, P, 16), { tone: "mid", crease: "none" }) + S(G.sphereOf([TREE[0], TREE[1], 19], 8.4, P), { tone: "mid" }) + S(G.sphereOf([TREE[0] + 5, TREE[1] + 3, 15], 5, P), { tone: "mid" });
}
/* students: a pawn each, body and head; two by the door, one at the court */
const PEOPLE = [[-29.5, 6], [-24.5, 9.5], [12, 25]];
function people(list) {
  return list.map(([x, y]) => S(k.cylinder(x, y, 1.7, 0, 5.4, P, 16, 0.3), { tone: "mid" }) + S(G.sphereOf([x, y, 7.2], 1.5, P), { tone: "mid" })).join("");
}
function hoop() {
  const out = [S(k.cylinder(POLE[0], POLE[1], 3, 0, 1, P, 18), { tone: "mid" }), S(k.cylinder(POLE[0], POLE[1], 1, 1, 30.6, P, 14), { tone: "mid", crease: "none" })];
  out.push(S(k.slabOf({ x: POLE[0] - 0.8, y: POLE[1] + 0.8, w: 1.6, d: BOARD_Y - POLE[1] - 0.8, r: 0.4 }, 30, 1.6, P, 2), { tone: "mid" }));   /* the arm, from the pole to the board */
  out.push(S(k.slabOf({ x: POLE[0] - 7, y: BOARD_Y, w: 14, d: 1.2, r: 0.3 }, 25.6, 9.4, P, 2, 0.3), { tone: "hi" }));
  const fy = BOARD_Y + 1.2;   /* the target square on the board's front face */
  out.push(L(k.pathOf([[POLE[0] - 2.6, fy, 27.6], [POLE[0] + 2.6, fy, 27.6], [POLE[0] + 2.6, fy, 31.4], [POLE[0] - 2.6, fy, 31.4]].map(at), true), { tone: "mid" }));
  out.push(S(k.slabOf({ x: RIM[0] - 0.6, y: fy, w: 1.2, d: RIM[1] - 2.6 - fy, r: 0.2 }, RIM_Z - 0.6, 0.6, P, 2), { tone: "mid" }));   /* the rim's bracket */
  out.push(L(k.ring(RIM[0], RIM[1], 2.6, RIM_Z, P, 28), { tone: "lit" }).replace('class="iso-line"', 'class="iso-line" style="stroke-width:.9"'));
  return out.join("");
}
const ballPaths = G.sphereOf([BALL[0], BALL[1], BALL_R], BALL_R, P);
const svg = k.figureSvg({ width: W, height: H, label: "A corner of campus: a hostel block with lit windows, a tree, and a half court where a ball dribbles under the hoop.",
  body: [ground(), `<ellipse class="cl-shadow" cx="${at([BALL[0], BALL[1], 0])[0]}" cy="${at([BALL[0], BALL[1], 0])[1]}" rx="4.2" ry="2.2"/>`, building(), tree(), people(PEOPLE.slice(0, 2)), people(PEOPLE.slice(2)), hoop(), `<g class="cl-ball">${S(ballPaths, { tone: "hi", lit: true })}${L(G.arcOf(G.frameAlong([BALL[0], BALL[1], BALL_R], [0, 0, 1]), 0, BALL_R, P, { least: -1 }), { tone: "lo" })}</g>`] });

export const CSS = `
.cl-win{fill:var(--anatomy-litTop,#FFD48A);opacity:0;transition:opacity .9s ease}
.cl-win.is-on{opacity:.85}
.dn-iso[data-fig="life"] .cl-win{fill:#FFD08A}
.cl-shadow{fill:var(--anatomy-halo);opacity:.18;filter:blur(1.2px)}
`;
export const LIVE = `
function mount(root){
  const P = ${JSON.stringify(P)};
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const ball = root.querySelector(".cl-ball"), shadow = root.querySelector(".cl-shadow"), wins = [...root.querySelectorAll(".cl-win")];
  let live = false, frame = 0, t = 0, last = 0, next = 0;
  [1, 4, 8, 11].forEach((i) => wins[i] && wins[i].classList.add("is-on"));
  function draw(){
    /* a dribble: the ball drops under gravity and comes back off the court, 0.9 s a bounce, 9 units high */
    const ph = (t % 0.9) / 0.9, z = 9 * (1 - Math.pow(2 * ph - 1, 2));
    ball.setAttribute("transform", translateAlong(P, [0, 0, z]));
    const s = 1 - z / 16; shadow.setAttribute("transform", "translate(" + shadow.getAttribute("cx") + " " + shadow.getAttribute("cy") + ") scale(" + s.toFixed(3) + ") translate(" + (-shadow.getAttribute("cx")) + " " + (-shadow.getAttribute("cy")) + ")");
    shadow.style.opacity = (0.22 * s).toFixed(3);
  }
  function tick(now){
    const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60; last = now; t += dt; next -= dt;
    if (next <= 0){ next = 1.4; const w = wins[Math.floor(Math.random() * wins.length)]; w.classList.toggle("is-on"); }
    draw(); frame = live ? requestAnimationFrame(tick) : 0;
  }
  draw();
  return { start(){ live = true; if (still.matches || frame) return; last = 0; frame = requestAnimationFrame(tick); }, stop(){ live = false; } };
}
`;
export const SVG = svg;
if (process.argv[1].endsWith("life.mjs")) { writeFileSync(new URL("./life.html", import.meta.url), previewPage({ key: "life", title: "Life", svg, cap: "Student life", sub: "Life of NST students", live: LIVE, css: CSS })); console.log("wrote", svg.length); }
