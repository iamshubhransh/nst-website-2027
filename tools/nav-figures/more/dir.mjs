/* Student directory: a board of student ID cards; a magnifier glides over them, and the card it finds lifts, its photo lit. */
import { writeFileSync } from "node:fs";
import { k, G, W, H, previewPage, planeMatrix, base } from "./common.mjs";
const FLOOR = { x: -44, y: -34, w: 88, d: 68, r: 8 };
const CW = 22, CD = 15, GAPX = 6, GAPY = 6, COLS = 3, ROWS = 3;
const X0 = -(COLS * CW + (COLS - 1) * GAPX) / 2, Y0 = -(ROWS * CD + (ROWS - 1) * GAPY) / 2;
const CARDS = [];
for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) CARDS.push({ x: X0 + c * (CW + GAPX), y: Y0 + r * (CD + GAPY) });
const P = k.fitProjection([...k.boxCorners(FLOOR, -4, 0), [0, 0, 26]], W, H, { pad: 26, azimuth: 52 });
const S = (p, s) => k.solidSvg(p, s);
function card(c, i) {
  const plan = { x: c.x, y: c.y, w: CW, d: CD, r: 1.2 };
  const art = planeMatrix([c.x, c.y, 1.25], [1, 0, 0], [0, 1, 0], P);
  return `<g class="dr-card" data-i="${i}">${S(k.slabOf(plan, 0, 1.2, P, 3, 0.3), { tone: "mid" })}<g transform="${art}">` +
    `<circle class="dr-ph" cx="5.6" cy="7.5" r="3.6"/><path class="dr-ln" d="M11.6 5.4h7.2M11.6 8.2h5M11.6 11h6.2"/><path class="dr-band" d="M0.9 1.6h${CW - 1.8}"/></g></g>`;
}
/* the magnifier: a lens ring with a handle, built at the origin and moved card to card */
function lens() {
  const z = 16, r = 7.6;
  return `<g class="dr-lens"><path class="dr-glass" d="${k.planOutline({ x: -r, y: -r, w: 2 * r, d: 2 * r, r }, z, P, 16)}"/>` +
    S(k.extrude(k.circleRing(0, 0, r + 1, 40), z, 1.2, P), { tone: "hi", lit: true }).replace("<g", '<g style="fill-opacity:0"') +
    k.lineSvg(k.ring(0, 0, r, z + 1.2, P, 40), { tone: "lit" }) + S(k.slabOf({ x: r * 0.7, y: r * 0.7, w: 9, d: 2.6, r: 1.2 }, z, 1.2, P, 2), { tone: "hi", lit: true }) + `</g>`;
}
const svg = k.figureSvg({ width: W, height: H, label: "A board of student ID cards; a magnifier glides from card to card and the card it finds lifts.",
  body: [base(FLOOR, 4, P), `<g class="dr-cards">${CARDS.map(card).join("")}</g>`, `<ellipse class="dr-shadow" rx="9" ry="4.6"/>`, lens()] });
export const CSS = `
.dr-ph{fill:var(--anatomy-shade-1);stroke:var(--anatomy-mid);stroke-width:.4;vector-effect:non-scaling-stroke;transition:fill .4s ease}
.dr-ln,.dr-band{fill:none;stroke:var(--anatomy-lo);stroke-width:.5;stroke-linecap:round;vector-effect:non-scaling-stroke}
.dr-band{stroke:var(--anatomy-mid)}
.dr-card.is-on .dr-ph{fill:var(--anatomy-lit)}
.dr-card.is-on .dr-band{stroke:var(--anatomy-lit);stroke-width:1}
.dr-card{transition:transform .5s cubic-bezier(.22,1,.36,1)}
.dr-glass{fill:#fff;opacity:.35}
.dr-shadow{fill:var(--anatomy-halo);opacity:.12;filter:blur(2px)}
`;
export const LIVE = `
function mount(root){
  const P = ${JSON.stringify(P)}, CARDS = ${JSON.stringify(CARDS)}, CW = ${CW}, CD = ${CD};
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const cards = [...root.querySelectorAll(".dr-card")], lens = root.querySelector(".dr-lens"), shadow = root.querySelector(".dr-shadow");
  const ORDER = [4, 2, 6, 1, 8, 3, 0, 7, 5];
  let live = false, frame = 0, t = 0, last = 0, on = -1, at = [CARDS[4].x + CW / 2, CARDS[4].y + CD / 2];
  function draw(){
    const step = 2.2, i = Math.floor(t / step) % ORDER.length, u = (t % step) / step, from = ORDER[(i + ORDER.length - 1) % ORDER.length], to = ORDER[i];
    const e = Math.min(1, u / 0.45), s = e * e * (3 - 2 * e);
    const a = [CARDS[from].x + CW / 2, CARDS[from].y + CD / 2], b = [CARDS[to].x + CW / 2, CARDS[to].y + CD / 2];
    at = [a[0] + (b[0] - a[0]) * s, a[1] + (b[1] - a[1]) * s];
    const hop = Math.sin(Math.PI * s) * 3;
    lens.setAttribute("transform", translateAlong(P, [at[0], at[1], hop]));
    const g = iso([at[0], at[1], 1.2], P); shadow.setAttribute("transform", "translate(" + g[0].toFixed(2) + " " + g[1].toFixed(2) + ")");
    const want = u > 0.45 ? to : -1;
    if (want !== on){ on = want; cards.forEach((c, j) => { const up = j === on; c.classList.toggle("is-on", up); c.setAttribute("transform", up ? translateAlong(P, [0, 0, 3]) : ""); }); }
  }
  function tick(now){ const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60; last = now; t += dt; draw(); frame = live ? requestAnimationFrame(tick) : 0; }
  t = 1.6; draw();
  return { start(){ live = true; if (still.matches || frame) return; last = 0; frame = requestAnimationFrame(tick); }, stop(){ live = false; } };
}
`;
export const SVG = svg;
if ((process.argv[1] || "").endsWith("dir.mjs")) { writeFileSync(new URL("./dir.html", import.meta.url), previewPage({ key: "dir", title: "Directory", svg, cap: "Student directory", sub: "Find and reach NST students", live: LIVE, css: CSS })); console.log("wrote", svg.length); }
