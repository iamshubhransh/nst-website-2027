/* Neutron (Delhi, the cultural side of the fest): a small concert stage. A truss over it carries two spotlights whose beams sweep
   slowly across a performer; speakers flank the stage and a few people stand in front, nodding along. */
import { writeFileSync } from "node:fs";
import { k, G, W, LIFE_H, previewPage, pawn } from "./common.mjs";
const H = LIFE_H;
const FLOOR = { x: -50, y: -36, w: 100, d: 72, r: 8 };
const STAGE = { x: -34, y: -30, w: 68, d: 30, r: 1.2 }, SH = 7;          /* front edge at y = 0 */
const TZ = 36, TY = -6;                                                  /* the truss bar: height and depth */
const LAMPS = [[-14, TY], [14, TY]];
const PERF = [0, -14];
const P = k.fitProjection([...k.boxCorners(FLOOR, -4, 0), [-46, -6, 15], [46, 1, 15], [-32, TY, TZ + 4], [32, TY, TZ + 4]], W, H, { pad: 26, azimuth: 52 });
const S = (p, s) => k.solidSvg(p, s), L = (d, s) => k.lineSvg(d, s);
const at = (p) => k.iso(p, P);
function stage() {
  const out = [S(k.slabOf(STAGE, 0, SH, P, 2, 0.6), { tone: "hi", inner: L(k.sideSeam(STAGE, 2.4, P, 2), { tone: "faint" }) })];
  /* floorboards on the deck, edge to edge */
  const b = []; for (let x = STAGE.x + 6.8; x < STAGE.x + STAGE.w - 2; x += 6.8) b.push(k.lineOnTop([x, STAGE.y], [x, STAGE.y + STAGE.d], SH, P));
  out.push(L(b.join(""), { tone: "faint" }));
  return out.join("");
}
/* a truss tower: a slim box with its X bracing on the two visible faces */
function tower(x) {
  const plan = { x: x - 2, y: TY - 2, w: 4, d: 4, r: 0.3 };
  const out = [S(k.slabOf(plan, SH, TZ - SH, P, 1, 0.2), { tone: "mid" })];
  const xs = []; for (let z = SH; z < TZ - 3; z += 6) { xs.push(k.segment([x - 2, TY + 2, z], [x + 2, TY + 2, z + 6], P), k.segment([x + 2, TY - 2, z], [x + 2, TY + 2, z + 6], P)); }
  out.push(L(xs.join(""), { tone: "lo" }));
  return out.join("");
}
function bar() {
  const plan = { x: -32, y: TY - 2, w: 64, d: 4, r: 0.3 };
  const out = [S(k.slabOf(plan, TZ, 4, P, 1, 0.2), { tone: "mid" })];
  const xs = []; for (let x = -32; x < 32; x += 6.4) xs.push(k.segment([x, TY + 2, TZ], [x + 6.4, TY + 2, TZ + 4], P));
  out.push(L(xs.join(""), { tone: "lo" }));
  return out.join("");
}
function lamp(x, y) {
  const F = G.frameAlong([x, y + 1, TZ - 1], [0, 0.55, -0.83]);
  return S(k.cylinder(x, y, 0.7, TZ - 2.4, 2.4, P, 12), { tone: "mid", crease: "none" }) + S(G.solidOf([[0, 2.2], [5, 2.6], [6, 3], [6, 0]], F, P), { tone: "mid" });
}
function speaker(x) {
  const plan = { x: x - 5, y: -6, w: 10, d: 7, r: 0.6 }, out = [S(k.slabOf(plan, 0, 15, P, 2, 0.5), { tone: "mid" })];
  const fy = plan.y + plan.d;
  out.push(L(k.sideRing([x, fy, 10.6], 2.6, "y", P, 24) + k.sideRing([x, fy, 10.6], 1.1, "y", P, 16) + k.sideRing([x, fy, 4.6], 1.7, "y", P, 20), { tone: "lo" }));
  return out.join("");
}
const CROWD = [[-20, 18], [-8, 22], [6, 17], [18, 23], [28, 15], [-30, 24]];
const svg = k.figureSvg({ width: W, height: H, label: "Neutron: a concert stage under a lighting truss; two spotlights sweep across a performer, speakers flank the stage and a small crowd watches.",
  body: [`<path class="iso-halo" d="${k.haloOf(FLOOR, -4, 4, P)}"/>`, S(k.slabOf(FLOOR, -4, 4, P, 8, 0.8), { tone: "mid" }), L(k.planOutline(k.insetPlan(FLOOR, 3), 0, P, 8), { tone: "faint" }),
    speaker(-41), stage(), tower(-30), tower(30), speaker(41), `<g class="nt-perf">${pawn(PERF[0], PERF[1], SH, P, "hi", true)}</g>`, `<g class="nt-beams"><path class="nt-beam"/><path class="nt-beam"/></g>`, bar(), lamp(...LAMPS[0]), lamp(...LAMPS[1]),
    `<g class="nt-crowd">${[...CROWD].sort((a, b) => k.depthOf([a[0], a[1], 0], P) - k.depthOf([b[0], b[1], 0], P)).map(([x, y], i) => `<g class="nt-p" data-i="${i}">${pawn(x, y, 0, P)}</g>`).join("")}</g>`] });
export const CSS = `
.nt-beam{fill:var(--anatomy-lit);opacity:.16;mix-blend-mode:multiply}
`;
export const LIVE = `
function mount(root){
  const P = ${JSON.stringify(P)}, LAMPS = ${JSON.stringify(LAMPS)}, TZ = ${TZ}, SH = ${SH}, PERF = ${JSON.stringify(PERF)};
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const beams = [...root.querySelectorAll(".nt-beam")], people = [...root.querySelectorAll(".nt-p")];
  let live = false, frame = 0, t = 0, last = 0;
  function beam(el, [lx, ly], tx, ty){
    /* a cone from the lamp's lens to an ellipse on the stage deck: the two tangent sides and the far arc of the pool */
    const top = iso([lx, ly + 3, TZ - 4.4], P), R = 7, pts = [];
    for (let j = 0; j <= 24; j++){ const a = Math.PI * 2 * j / 24; pts.push(iso([tx + Math.cos(a) * R, ty + Math.sin(a) * R * .8, SH + .1], P)); }
    let best = [0, 0], d0 = 1e9, d1 = -1e9; const v = [pts[0][0] - top[0], pts[0][1] - top[1]];
    pts.forEach((p, j) => { const c = (p[0] - top[0]) * v[1] - (p[1] - top[1]) * v[0]; if (c < d0){ d0 = c; best[0] = j; } if (c > d1){ d1 = c; best[1] = j; } });
    const [a, b] = best[0] < best[1] ? best : [best[1], best[0]], arc = pts.slice(a, b + 1), other = pts.slice(b).concat(pts.slice(0, a + 1));
    const near = arc.reduce((s, p) => s + p[1], 0) / arc.length > other.reduce((s, p) => s + p[1], 0) / other.length ? arc : other;
    el.setAttribute("d", "M" + top.map((n) => n.toFixed(1)).join(" ") + "L" + near.map((p) => p.map((n) => n.toFixed(1)).join(" ")).join("L") + "Z");
  }
  function draw(){
    const s = Math.sin(t * .7);
    beam(beams[0], LAMPS[0], PERF[0] - 8 + s * 10, PERF[1] + 2);
    beam(beams[1], LAMPS[1], PERF[0] + 8 - s * 10, PERF[1] - 1);
    people.forEach((p, i) => p.setAttribute("transform", "translate(0 " + (-Math.max(0, Math.sin(t * 3.2 + i * 1.3)) * 1.2).toFixed(2) + ")"));
  }
  function tick(now){ const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60; last = now; t += dt; draw(); frame = live ? requestAnimationFrame(tick) : 0; }
  t = .4; draw();
  return { start(){ live = true; if (still.matches || frame) return; last = 0; frame = requestAnimationFrame(tick); }, stop(){ live = false; } };
}
`;
export const SVG = svg;
if ((process.argv[1] || "").endsWith("/neutron.mjs")) { writeFileSync(new URL("./neutron.html", import.meta.url), previewPage({ key: "neutron", title: "Neutron", svg, cap: "Neutron", sub: "Tech-cultural fest, Delhi", live: LIVE, css: CSS, paneH: 383, figH: H })); console.log("wrote", svg.length); }
