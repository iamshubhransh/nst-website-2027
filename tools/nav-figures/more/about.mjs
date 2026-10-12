/* About us: the team and the story. Four people round a meeting table; behind them a whiteboard on an easel where the
   company's line climbs from 2019 to today, drawn again and again. */
import { writeFileSync } from "node:fs";
import { k, G, W, H, previewPage, planeMatrix, byDepth, base } from "./common.mjs";
const FLOOR = { x: -48, y: -36, w: 96, d: 72, r: 10 };
const T = [8, 10], TR = 14, TZ = 8;
const BD = { x: -38, y: -27.4, w: 34, d: 1.4, z0: 13, z1: 35 };
const P = k.fitProjection([...k.boxCorners(FLOOR, -4, 0), [BD.x, BD.y, BD.z1 + 2], [BD.x + BD.w, BD.y, BD.z1 + 2]], W, H, { pad: 26, azimuth: 52 });
const S = (p, s) => k.solidSvg(p, s), L = (d, s) => k.lineSvg(d, s);
const person = (x, y, cls) => `<g class="${cls}">${S(k.cylinder(x, y, 2.6, 0, 9, P, 18, 0.4), { tone: "mid" })}${S(G.sphereOf([x, y, 12.2], 2.4, P), { tone: "mid" })}</g>`;
function board() {
  const out = [];
  for (const x of [BD.x + 3, BD.x + BD.w - 3]) out.push(S(k.cylinder(x, BD.y + 0.7, 0.8, 0, BD.z0, P, 12), { tone: "mid", crease: "none" }));
  out.push(S(k.slabOf({ x: BD.x - 1, y: BD.y, w: BD.w + 2, d: 3.4, r: 0.5 }, BD.z0 - 1.2, 1.2, P, 2), { tone: "mid" }));
  out.push(S(k.slabOf({ x: BD.x, y: BD.y, w: BD.w, d: BD.d, r: 0.4 }, BD.z0, BD.z1 - BD.z0, P, 2, 0.3), { tone: "hi" }));
  /* the chart, laid in the board's face: axes, a climbing line, its points */
  const m = planeMatrix([BD.x, BD.y + BD.d + 0.02, BD.z1], [1, 0, 0], [0, 0, -1], P);
  out.push(`<g transform="${m}"><path class="ab-axis" d="M4 3.4V18.4H30.6"/><path class="ab-line" pathLength="1" d="M5.4 16.4L11 13.6 15.6 14.6 21 9.4 26 7.6 29.6 4"/>` +
    [[5.4, 16.4], [15.6, 14.6], [26, 7.6]].map(([x, y], i) => `<circle class="ab-pt" data-i="${i}" cx="${x}" cy="${y}" r="0.9"/>`).join("") + `</g>`);
  return out.join("");
}
function table() {
  return S(k.cylinder(T[0], T[1], 6, 0, 1, P, 32, 0.3), { tone: "mid" }) + S(k.cylinder(T[0], T[1], 1.6, 1, TZ - 1, P, 16), { tone: "mid", crease: "none" }) +
    S(k.cylinder(T[0], T[1], TR, TZ, 1.4, P, 56, 0.5), { tone: "mid" }) + L(k.ring(T[0], T[1], TR - 2.4, TZ + 1.4, P, 56), { tone: "faint" });
}
const seats = [200, 265, 340, 60, 130].map((a, i) => { const r = TR + 6.6, x = T[0] + r * Math.cos(a * Math.PI / 180), y = T[1] + r * Math.sin(a * Math.PI / 180); return { c: [x, y, 6], svg: person(x, y, "ab-p" + (i % 2 ? " is-b" : " is-a")) }; });
const svg = k.figureSvg({ width: W, height: H, label: "The team and the story: five people round a meeting table, and a whiteboard behind them where a line climbs.",
  body: [base(FLOOR, 4, P), board(), byDepth([{ c: [T[0], T[1], TZ], svg: table() }, ...seats], P)] });
export const CSS = `
.ab-axis{fill:none;stroke:var(--anatomy-mid);stroke-width:.5;stroke-linecap:round;stroke-linejoin:round}
.ab-line{fill:none;stroke:var(--anatomy-lit);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:0}
.ab-pt{fill:var(--anatomy-lit);transition:opacity .4s ease}
`;
export const LIVE = `
function mount(root){
  const P = ${JSON.stringify(P)};
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const line = root.querySelector(".ab-line"), pts = [...root.querySelectorAll(".ab-pt")], a = root.querySelectorAll(".ab-p.is-a"), b = root.querySelectorAll(".ab-p.is-b");
  let live = false, frame = 0, t = 0, last = 0;
  const CYCLE = 5;
  function draw(){
    /* the line draws over 2.4 s, holds, then clears; the people nod as they talk */
    const c = t % CYCLE, u = Math.min(1, c / 2.4), e = 1 - Math.pow(1 - u, 3), out = c > CYCLE - 0.5 ? (CYCLE - c) / 0.5 : 1;
    line.style.strokeDashoffset = (1 - e).toFixed(3); line.style.opacity = out.toFixed(2);
    pts.forEach((p, i) => { p.style.opacity = (e > [0, 0.45, 0.85][i] ? out : 0).toFixed(2); });
    const n = Math.max(0, Math.sin(t * 2.2)) * 0.9, m = Math.max(0, Math.sin(t * 2.2 + Math.PI)) * 0.9;
    a.forEach((el) => el.setAttribute("transform", translateAlong(P, [0, 0, n])));
    b.forEach((el) => el.setAttribute("transform", translateAlong(P, [0, 0, m])));
  }
  function tick(now){ const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60; last = now; t += dt; draw(); frame = live ? requestAnimationFrame(tick) : 0; }
  t = 2.6; draw();
  return { start(){ live = true; if (still.matches || frame) return; last = 0; frame = requestAnimationFrame(tick); }, stop(){ live = false; } };
}
`;
export const SVG = svg;
if ((process.argv[1] || "").endsWith("about.mjs")) { writeFileSync(new URL("./about.html", import.meta.url), previewPage({ key: "about", title: "About", svg, cap: "About us", sub: "The team and the story", live: LIVE, css: CSS })); console.log("wrote", svg.length); }
