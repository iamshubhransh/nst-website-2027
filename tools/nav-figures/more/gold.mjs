/* Go for Gold: NST's ICPC training — a winners' podium with the gold trophy on the top step, catching the light. */
import { writeFileSync } from "node:fs";
import { k, G, W, H, previewPage, planeMatrix, base } from "./common.mjs";
import { tubePieces, tubeSvg } from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/tube.mjs";
const FLOOR = { x: -44, y: -30, w: 88, d: 60, r: 8 };
const STEPS = [{ x: -27, h: 11 }, { x: -9, h: 18 }, { x: 9, h: 7 }];   /* 2nd, 1st, 3rd */
const SD = 18, SY = -9, SWD = 18;
const P = k.fitProjection([...k.boxCorners(FLOOR, -4, 0), [0, 0, 18 + 24]], W, H, { pad: 26, azimuth: 52 });
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
  /* built bottom-up as separate turned parts, so the stem shows between foot and bowl (one waisted solid filled as a hull read as a bucket) */
  const Z = 18, F = G.frameAlong([0, 0, Z], [0, 0, 1]);
  const BOWL = [[8.6, 0], [8.6, 1.6], [9.8, 3.6, 1], [12.2, 5.9, 1], [15.4, 7.5, 1], [19, 8.4, 1], [21.4, 8.7]];
  const rAt = (q) => { for (let i = 1; i < BOWL.length; i++){ const [s0, r0] = BOWL[i - 1], [s1, r1] = BOWL[i]; if (q >= s0 && q <= s1 && s1 > s0) return r0 + (r1 - r0) * (q - s0) / (s1 - s0); } return BOWL[BOWL.length - 1][1]; };
  const out = [];
  out.push(S(G.disc(0, 1.8, 6, F, P), { tone: "hi" }));
  out.push(S(G.disc(1.8, 3, 3.8, F, P), { tone: "hi" }));
  out.push(S(G.disc(3, 8.8, 1.3, F, P), { tone: "hi" }));
  out.push(S(G.sphereOf([0, 0, Z + 5.6], 2, P), { tone: "hi" }));
  /* two C-shaped handles, in the plane across the line of sight, their ends tucked under the bowl */
  const side = [-Math.sin(52 * Math.PI / 180), Math.cos(52 * Math.PI / 180), 0];
  for (const sgn of [-1, 1]) {
    const e1 = 12.4, e2 = 19.2, d = [sgn * side[0], sgn * side[1]];
    const pts = Array.from({ length: 41 }, (_, i) => { const u = i / 40, q = e1 + (e2 - e1) * u, r = rAt(e1) + (rAt(e2) - rAt(e1)) * u - 0.9 + 5.2 * Math.pow(Math.sin(Math.PI * u), 0.6);   /* a smooth C off the chord between its two ends */ return [d[0] * r, d[1] * r, Z + q]; });
    out.push(tubePieces(pts, 0.85, P, { maxLength: 60, spacing: 0.45, caps: false }).map((pc) => tubeSvg(pc, { tone: "hi" })).join(""));
  }
  out.push(S(G.solidOf(BOWL, F, P), { tone: "hi", inner: L(G.arcOf(F, 19, 8.4, P), { tone: "faint" }) }));
  out.push(L(G.arcOf(F, 21.4, 8.7, P, { least: -1 }), { tone: "lit" }));
  return `<g class="gd-trophy">${out.join("")}</g>`;   /* the trophy carries its own gold ramp (.gd-trophy tokens) */
}
const SPARK = (x, y, s, i) => `<path class="gd-spark" data-i="${i}" transform="translate(${x} ${y}) scale(${s})" d="M0 -4L1 -1 4 0 1 1 0 4 -1 1 -4 0 -1 -1Z"/>`;
const tp = k.iso([0, 0, 42], P), lp = k.iso([-16, 0, 38], P), rp = k.iso([16, 4, 32], P);
const svg = k.figureSvg({ width: W, height: H, label: "A winners' podium with a gold trophy on the top step, catching the light.",
  body: [base(FLOOR, 4, P), podium(), trophy(), SPARK(lp[0], lp[1], 0.9, 0), SPARK(rp[0], rp[1], 0.7, 1), SPARK(tp[0] + 24, tp[1] - 8, 0.6, 2)] });
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
