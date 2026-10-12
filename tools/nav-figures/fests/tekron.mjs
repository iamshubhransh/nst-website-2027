/* Tekron (Pune, the tech side of the fest): a robotics arena. A small rover drives its lane from the start gate, under fest
   bunting, weaving nothing fancier than a straight run: out to the far end, a pause, back to the gate. */
import { writeFileSync } from "node:fs";
import { k, G, W, LIFE_H, previewPage, planeMatrix, base } from "./common.mjs";
const H = LIFE_H;
const FLOOR = { x: -48, y: -32, w: 96, d: 64, r: 8 };
const MAT = { x: -42, y: -14, w: 84, d: 28, r: 1.6 }, MZ = 0.6;
const GX = -36, GH = 24;                                   /* the start gate */
const P = k.fitProjection([...k.boxCorners(FLOOR, -4, 0), [GX, -17, GH + 3], [GX, 17, GH + 3]], W, H, { pad: 30, azimuth: 52 });
const S = (p, s) => k.solidSvg(p, s), L = (d, s) => k.lineSvg(d, s);
const at = (p) => k.iso(p, P);
function arena() {
  const out = [base(FLOOR, 4, P)];
  out.push(S(k.slabOf(MAT, 0, MZ, P, 3, 0.3), { tone: "lo", crease: "none" }));
  /* the lane: edge lines and cross lines every 12 units, edge to edge; a dashed centre line */
  const cross = []; for (let x = MAT.x + 12; x < MAT.x + MAT.w - 4; x += 12) cross.push(k.lineOnTop([x, MAT.y + 2], [x, MAT.y + MAT.d - 2], MZ, P));
  out.push(L(cross.join(""), { tone: "faint" }));
  out.push(L(k.lineOnTop([MAT.x + 2, 0], [MAT.x + MAT.w - 2, 0], MZ, P), { tone: "mid", dashed: true }).replace("<path", '<path data-free="true"'));
  out.push(L(k.planOutline(k.insetPlan(MAT, 2), MZ, P, 3), { tone: "mid" }));
  /* the finish box at the far end */
  out.push(L(k.planOutline({ x: MAT.x + MAT.w - 12, y: -7, w: 9, d: 14, r: 0.4 }, MZ, P, 2), { tone: "lit" }));
  return out.join("");
}
function cone(x, y) { return S(k.cylinder(x, y, 2.6, 0, 0.8, P, 20), { tone: "mid" }) + S(G.solidOf([[0, 2], [5.6, 0.5], [6.2, 0]], G.frameAlong([x, y, 0.8], [0, 0, 1]), P), { tone: "hi", lit: true }); }
function gate() {
  const out = [];
  for (const y of [-16, 16]) {
    out.push(S(k.cylinder(GX, y, 2.4, 0, 1.2, P, 20), { tone: "mid" }));
    out.push(S(k.cylinder(GX, y, 1.1, 1.2, GH - 1.2, P, 16), { tone: "mid", crease: "none" }));
  }
  out.push(S(k.slabOf({ x: GX - 1.4, y: -17.6, w: 2.8, d: 35.2, r: 0.6 }, GH, 3, P, 2, 0.4), { tone: "hi" }));
  /* bunting: pennants hanging from the bar, in the gate's own plane */
  const pen = [];
  for (let i = 0; i < 8; i++) { const y0 = -14.6 + i * 3.8; pen.push(`<path class="tk-pen${i % 2 ? "" : " is-lit"}" d="${k.pathOf([[GX, y0, GH], [GX, y0 + 3.2, GH], [GX, y0 + 1.6, GH - 4.6]].map(at), true)}"/>`); }
  out.push(pen.join(""));
  return out.join("");
}
/* the rover, built at x = 0 on the lane and moved along it */
function rover() {
  const out = [], WR = 2.6;
  const wheel = (x, y) => S(G.disc(-0.8, 0.8, WR, G.frameAlong([x, y, WR], [0, 1, 0]), P), { tone: "mid", inner: L(G.circleOf(G.frameAlong([x, y + (y > 0 ? 0.8 : -0.8), WR], [0, 1, 0]), 0, 1, P, 16), { tone: "lo" }) });
  out.push(`<path class="iso-halo" style="filter:blur(3px)" d="${k.haloOf({ x: -7, y: -6, w: 14, d: 12, r: 2 }, 0, 0.2, P)}"/>`);
  out.push(wheel(-4.4, -6.2), wheel(4.4, -6.2));
  out.push(S(k.slabOf({ x: -7, y: -5.4, w: 14, d: 10.8, r: 1.6 }, 2.2, 4.4, P, 3, 0.5), { tone: "hi", inner: L(k.sideSeam({ x: -7, y: -5.4, w: 14, d: 10.8, r: 1.6 }, 4.2, P, 3), { tone: "faint" }) }));
  out.push(L(k.planOutline({ x: -5, y: -3.6, w: 7, d: 7.2, r: 0.8 }, 6.6, P, 2), { tone: "lo" }));
  out.push(S(k.cylinder(3.6, 0, 1, 6.6, 4.2, P, 14), { tone: "mid", crease: "none" }));
  out.push(`<g class="tk-eye">${S(G.sphereOf([3.6, 0, 11.8], 1.8, P), { tone: "hi", lit: true })}</g>`);
  out.push(wheel(-4.4, 6.2), wheel(4.4, 6.2));
  return out.join("");
}
const X0 = -26, X1 = 22;
const svg = k.figureSvg({ width: W, height: H, label: "Tekron: a robotics arena with a start gate under fest bunting; a small rover drives its lane to the finish box and back.",
  body: [arena(), cone(-2, -11), cone(24, -11), gate(), `<g class="tk-rover" transform="${k.translateAlong(P, [X0, 0, MZ])}">${rover()}</g>`] });
export const CSS = `
.tk-pen{fill:var(--anatomy-shade-1);stroke:var(--anatomy-mid);stroke-width:.5;stroke-linejoin:round}
.tk-pen.is-lit{fill:var(--anatomy-lit);stroke:var(--anatomy-lit);opacity:.85}
.tk-eye{transition:opacity .3s ease}
.tk-eye.is-off{opacity:.45}
`;
export const LIVE = `
function mount(root){
  const P = ${JSON.stringify(P)}, X0 = ${X0}, X1 = ${X1}, MZ = ${MZ};
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const rover = root.querySelector(".tk-rover"), eye = root.querySelector(".tk-eye");
  let live = false, frame = 0, t = 0, last = 0;
  const RUN = 2.6, HOLD = 1.1, CYCLE = 2 * (RUN + HOLD);
  const ease = (u) => u < .5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
  function draw(){
    const c = t % CYCLE;
    const u = c < RUN ? ease(c / RUN) : c < RUN + HOLD ? 1 : c < 2 * RUN + HOLD ? 1 - ease((c - RUN - HOLD) / RUN) : 0;
    rover.setAttribute("transform", translateAlong(P, [X0 + (X1 - X0) * u, 0, MZ]));
    eye.classList.toggle("is-off", Math.floor(t * 2.2) % 2 === 1);
  }
  function tick(now){ const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60; last = now; t += dt; draw(); frame = live ? requestAnimationFrame(tick) : 0; }
  t = 1.2; draw();
  return { start(){ live = true; if (still.matches || frame) return; last = 0; frame = requestAnimationFrame(tick); }, stop(){ live = false; } };
}
`;
export const SVG = svg;
if ((process.argv[1] || "").endsWith("/tekron.mjs")) { writeFileSync(new URL("./tekron.html", import.meta.url), previewPage({ key: "tekron", title: "Tekron", svg, cap: "Tekron", sub: "Tech-cultural fest, Pune", live: LIVE, css: CSS, paneH: 383, figH: H })); console.log("wrote", svg.length); }
