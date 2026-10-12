/* Newton StartX: a rocket on its launch pad beside the gantry; it lifts a little off the pad on a cushion of exhaust and settles. */
import { writeFileSync } from "node:fs";
import { k, G, W, H, previewPage, base } from "./common.mjs";
const FLOOR = { x: -42, y: -32, w: 84, d: 64, r: 8 };
const PAD = [4, 2], PR = 16, PZ = 3;
const P = k.fitProjection([...k.boxCorners(FLOOR, -4, 0), [PAD[0], PAD[1], PZ + 46]], W, H, { pad: 26, azimuth: 52 });
const S = (p, s) => k.solidSvg(p, s), L = (d, s) => k.lineSvg(d, s);
function pad() {
  return S(k.cylinder(PAD[0], PAD[1], PR, 0, PZ, P, 64, 0.5), { tone: "mid" }) + L(k.ring(PAD[0], PAD[1], PR - 3, PZ, P, 56), { tone: "faint" }) + L(k.ring(PAD[0], PAD[1], 7, PZ, P, 40), { tone: "lo" });
}
function gantry() {
  const gx = -26, gy = -14, out = [];
  out.push(S(k.slabOf({ x: gx - 3, y: gy - 3, w: 6, d: 6, r: 0.5 }, 0, 1.4, P, 2), { tone: "mid" }));
  out.push(S(k.slabOf({ x: gx - 1.6, y: gy - 1.6, w: 3.2, d: 3.2, r: 0.3 }, 1.4, 38, P, 2), { tone: "mid" }));
  /* the service arm: from the tower to the rocket's body, aimed at its axis, at body height */
  const dx = PAD[0] - gx, dy = PAD[1] - gy, len = Math.hypot(dx, dy), d = [dx / len, dy / len, 0], u = [-d[1], d[0], 0];
  const AF = G.frameOf([gx, gy, PZ + 3 + 16], d, u, [0, 0, 1]);
  const s0 = (1.6 + 1 * Math.abs(d[1])) / Math.abs(d[0]);   /* where the arm's whole section has left the tower's +x face */
  out.push(S(k.slabOf({ x: gx + 1.6, y: gy - 2.2, w: 0.8, d: 4.4, r: 0.2 }, PZ + 3 + 16 - 1.6, 3.2, P, 2), { tone: "mid" }));   /* the bracket on the tower face */
  out.push(S(G.prismOf(AF, [[-1, -0.8], [1, -0.8], [1, 0.8], [-1, 0.8]], s0, len - 4.6 - 0.4, P), { tone: "mid" }));
  out.push(S(G.prismOf(AF, [[-1.8, -1.4], [1.8, -1.4], [1.8, 1.4], [-1.8, 1.4]], len - 4.6 - 1.6, len - 4.6 - 0.2, P), { tone: "mid" }));   /* the clamp pad */
  return out.join("");
}
function rocket() {
  const F = G.frameAlong([PAD[0], PAD[1], PZ + 3], [0, 0, 1]);
  const body = [[0, 3.6], [2, 4.6], [24, 4.6], [29, 3.8, 1], [33, 2.2, 1], [35.4, 0.8, 1], [36, 0]];
  const out = [];
  const fins = [90, 210, 330].map((deg) => { const a = deg * Math.PI / 180, r = [Math.cos(a), Math.sin(a), 0], t = [-Math.sin(a), Math.cos(a), 0];
    const Ff = G.frameOf([PAD[0], PAD[1], PZ + 3], t, r, [0, 0, 1]);
    return { c: [PAD[0] + r[0] * 7, PAD[1] + r[1] * 7, PZ + 6], svg: S(G.prismOf(Ff, [[4.2, 0], [10, -1], [4.2, 9]], -0.5, 0.5, P), { tone: "hi", lit: true }) }; });
  fins.sort((a, b) => k.depthOf(a.c, P) - k.depthOf(b.c, P));
  const back = fins.filter((f) => k.depthOf(f.c, P) < k.depthOf([PAD[0], PAD[1], PZ + 6], P)), front = fins.filter((f) => !back.includes(f));
  out.push(back.map((f) => f.svg).join(""));
  out.push(S(G.solidOf([[0, 2.2], [3, 3.2]], G.frameAlong([PAD[0], PAD[1], PZ], [0, 0, 1]), P), { tone: "mid" }));
  out.push(S(G.solidOf(body, F, P), { tone: "hi", lit: true, inner: L(G.arcOf(F, 24, 4.6, P), { tone: "lit" }) }));
  /* a porthole on the side that faces the viewer */
  const v = [Math.cos(52 * Math.PI / 180), Math.sin(52 * Math.PI / 180), 0];
  out.push(L(G.circleOf(G.frameAlong([PAD[0] + v[0] * 4.62, PAD[1] + v[1] * 4.62, PZ + 3 + 17], v), 0, 1.9, P, 28), { tone: "lit" }));
  out.push(front.map((f) => f.svg).join(""));
  return `<g class="sx-rocket">${out.join("")}</g>`;
}
const PUFFS = [[-3, 2, 3.4], [3, -2, 3], [0, 4, 2.6], [5, 3, 2.2]];
const puffs = PUFFS.map(([dx, dy, r], i) => `<g class="sx-puff" data-i="${i}">${S(G.sphereOf([PAD[0] + dx, PAD[1] + dy, PZ + r * 0.8], r, P), { tone: "mid" })}</g>`).join("");
const svg = k.figureSvg({ width: W, height: H, label: "A rocket on its launch pad beside the gantry, lifting a little off the pad on a cushion of exhaust.",
  body: [base(FLOOR, 4, P), gantry(), pad(), puffs, rocket()] });
export const CSS = `
.sx-puff{transform-box:fill-box;transform-origin:center bottom}
`;
export const LIVE = `
function mount(root){
  const P = ${JSON.stringify(P)};
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const rocket = root.querySelector(".sx-rocket"), puffs = [...root.querySelectorAll(".sx-puff")];
  let live = false, frame = 0, t = 0, last = 0;
  function draw(){
    /* lift-off and settle: up 7 units over the first half of each 4 s cycle, down over the second; the exhaust swells as it lifts */
    const c = (t % 4) / 4, u = 0.5 - 0.5 * Math.cos(c * Math.PI * 2), z = 7 * u;
    rocket.setAttribute("transform", translateAlong(P, [0, 0, z]));
    puffs.forEach((p, i) => { const s = 0.55 + 0.6 * u + 0.08 * Math.sin(t * 3 + i * 1.7); p.style.transform = "scale(" + s.toFixed(3) + ")"; p.style.opacity = (0.35 + 0.65 * u).toFixed(2); });
  }
  function tick(now){ const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60; last = now; t += dt; draw(); frame = live ? requestAnimationFrame(tick) : 0; }
  t = 1.4; draw();
  return { start(){ live = true; if (still.matches || frame) return; last = 0; frame = requestAnimationFrame(tick); }, stop(){ live = false; } };
}
`;
export const SVG = svg;
if ((process.argv[1] || "").endsWith("startx.mjs")) { writeFileSync(new URL("./startx.html", import.meta.url), previewPage({ key: "startx", title: "StartX", svg, cap: "Newton StartX", sub: "Entrepreneurship at NST", live: LIVE, css: CSS })); console.log("wrote", svg.length); }
