/* Go for Gold: NST's ICPC training — a winners' podium with the gold trophy on the top step, catching the light. */
import { writeFileSync } from "node:fs";
import { k, G, W, H, previewPage, planeMatrix, base } from "./common.mjs";
const FLOOR = { x: -44, y: -30, w: 88, d: 60, r: 8 };
const STEPS = [{ x: -27, h: 11 }, { x: -9, h: 18 }, { x: 9, h: 7 }];   /* 2nd, 1st, 3rd */
const SD = 18, SY = -9, SWD = 18;
const P = k.fitProjection([...k.boxCorners(FLOOR, -4, 0), [0, 0, 18 + 30]], W, H, { pad: 26, azimuth: 52 });
const S = (p, s) => k.solidSvg(p, s), L = (d, s) => k.lineSvg(d, s);
function podium() {
  const out = [];
  STEPS.forEach((s, i) => {
    const plan = { x: s.x, y: SY, w: SWD, d: SD, r: 0.8 };
    out.push(S(k.slabOf(plan, 0, s.h, P, 2, 0.5), { tone: i === 1 ? "hi" : "mid", inner: L(k.sideSeam(plan, s.h - 2.4, P, 2), { tone: "faint" }) }));
  });
  /* the one engraved mark: a 1 on the top step's front */
  out.push(`<text class="iso-face-text gd-one" transform="${planeMatrix([0, SY + SD + 0.02, 8], [1, 0, 0], [0, 0, -1], P)}" font-size="7" text-anchor="middle" dominant-baseline="central">1</text>`);
  return out.join("");
}
function trophy() {
  const F = G.frameAlong([0, 0, 18], [0, 0, 1]);
  const SC = 1.3, cup = [[0, 4.6], [1.4, 4.6], [1.4, 3.4], [2.4, 2.8], [2.4, 1.1], [6.4, 1.1], [6.4, 1.6], [7.4, 3.2, 1], [9.4, 4.9, 1], [12, 6, 1], [15, 6.6, 1], [16.4, 6.8]].map(([s, r, f]) => f ? [s * SC, r * SC, 1] : [s * SC, r * SC]);
  const out = [];
  /* two handles: arcs on the cup's sides, in the plane facing the viewer */
  const side = [-Math.sin(52 * Math.PI / 180), Math.cos(52 * Math.PI / 180), 0];
  /* the cup's radius at height s along it, to seat each handle's two ends on the surface */
  const rAt = (q) => { for (let i = 1; i < cup.length; i++){ const [s0, r0] = cup[i - 1], [s1, r1] = cup[i]; if (q >= s0 && q <= s1 && s1 > s0) return r0 + (r1 - r0) * (q - s0) / (s1 - s0); } return cup[cup.length - 1][1]; };
  for (const sgn of [-1, 1]) {
    const e1 = 9.6, e2 = 15.6, d = [sgn * side[0], sgn * side[1]];
    const pts = Array.from({ length: 17 }, (_, i) => { const u = i / 16, q = e1 + (e2 - e1) * u, r = rAt(q) - 1.2 + 4 * Math.sin(Math.PI * u); return [d[0] * r, d[1] * r, 18 + q]; });
    out.push(L(k.pathOf(pts.map((p) => k.iso(p, P))), { tone: "lit" }).replace('class="iso-line"', 'class="iso-line" style="stroke-width:1.1"'));
  }
  out.push(S(G.solidOf(cup, F, P), { tone: "hi" }));   /* drawn after the handles: their ends tuck under the cup */
  out.push(L(G.arcOf(F, 16.4 * SC, 6.8 * SC, P, { least: -1 }), { tone: "lit" }));
  return `<g class="gd-trophy">${out.join("")}</g>`;   /* the trophy carries its own gold ramp (.gd-trophy tokens) */
}
const SPARK = (x, y, s, i) => `<path class="gd-spark" data-i="${i}" transform="translate(${x} ${y}) scale(${s})" d="M0 -4L1 -1 4 0 1 1 0 4 -1 1 -4 0 -1 -1Z"/>`;
const tp = k.iso([0, 0, 46], P), lp = k.iso([-16, 0, 38], P), rp = k.iso([16, 4, 32], P);
const svg = k.figureSvg({ width: W, height: H, label: "A winners' podium with a gold trophy on the top step, catching the light.",
  body: [base(FLOOR, 4, P), podium(), trophy(), SPARK(lp[0], lp[1], 0.9, 0), SPARK(rp[0], rp[1], 0.7, 1), SPARK(tp[0] + 14, tp[1] - 4, 0.6, 2)] });
export const CSS = `
.gd-one{fill:var(--anatomy-mid);font-family:"Mona Sans",Arial,sans-serif;font-weight:700}
.gd-trophy{--anatomy-paper:#F2A516;--anatomy-top:#FFD77A;--anatomy-shade-0:#C27400;--anatomy-shade-1:#D68608;--anatomy-shade-2:#E69812;--anatomy-shade-3:#F2AA24;--anatomy-hi:#8A5400;--anatomy-faint:#B86E00}
.gd-spark{fill:var(--anatomy-lit);transform-box:fill-box;transform-origin:center;opacity:0}
`;
export const LIVE = `
function mount(root){
  const P = ${JSON.stringify(P)};
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const trophy = root.querySelector(".gd-trophy"), sparks = [...root.querySelectorAll(".gd-spark")];
  const base = sparks.map((s) => s.getAttribute("transform"));
  let live = false, frame = 0, t = 0, last = 0;
  function draw(){
    /* the trophy floats a little above its step; three glints come and go in turn */
    trophy.setAttribute("transform", translateAlong(P, [0, 0, 1.2 + Math.sin(t * 1.3) * 1.2]));
    sparks.forEach((s, i) => { const u = ((t * 0.55 + i / 3) % 1), a = Math.max(0, Math.sin(u * Math.PI * 2)) ; s.style.opacity = a.toFixed(2); s.setAttribute("transform", base[i] + " scale(" + (0.6 + 0.4 * a).toFixed(2) + ")"); });
  }
  function tick(now){ const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60; last = now; t += dt; draw(); frame = live ? requestAnimationFrame(tick) : 0; }
  t = 0.5; draw();
  return { start(){ live = true; if (still.matches || frame) return; last = 0; frame = requestAnimationFrame(tick); }, stop(){ live = false; } };
}
`;
export const SVG = svg;
if ((process.argv[1] || "").endsWith("gold.mjs")) { writeFileSync(new URL("./gold.html", import.meta.url), previewPage({ key: "gold", title: "Gold", svg, cap: "Go for Gold", sub: "goforgold.in", live: LIVE, css: CSS })); console.log("wrote", svg.length); }
