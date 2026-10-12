/* About us: NST itself. A campus block with a taller tower behind it carrying the NST shield, windows lighting up one by one,
   an entrance canopy, a flag waving by the walk, and a small plaque engraved EST. 2019 (the year Newton School was founded). */
import { writeFileSync } from "node:fs";
import { k, G, W, MORE_H, previewPage, planeMatrix } from "./common.mjs";
const H = MORE_H;
const FLOOR = { x: -46, y: -36, w: 92, d: 74, r: 8 };
const MAIN = { x: -30, y: -20, w: 48, d: 28, r: 0.8 }, MH = 28, FRONT = MAIN.y + MAIN.d, SIDE = MAIN.x + MAIN.w;
const TOWER = { x: -8, y: -32, w: 22, d: 12, r: 0.8 }, TH = 50, TFRONT = TOWER.y + TOWER.d;
const POLE = [-38, 24], PH = 34;
const P = k.fitProjection([...k.boxCorners(FLOOR, -4, 0), ...k.boxCorners(TOWER, 0, TH + 2), [POLE[0], POLE[1], PH + 2]], W, H, { pad: 34, azimuth: 52 });
const S = (p, s) => k.solidSvg(p, s), L = (d, s) => k.lineSvg(d, s);
const at = (p) => k.iso(p, P), q = (pts) => k.pathOf(pts.map(at), true);
const MARK = '<path d="M14.85 0V2.7H16.9897L12.2175 7.47225C11.0093 6.75338 9.60525 6.33488 8.1 6.33488H1.35V9.03488H8.1C11.0767 9.03488 13.5 11.4581 13.5 14.4349V23.8849H16.2V14.4349C16.2 12.4504 15.4777 10.6313 14.2897 9.2205L18.9 4.61025V6.75H21.6V0H14.85Z"/><path d="M18.9 16.3755L18.873 16.7029C18.603 21.1005 14.8331 24.5126 10.3883 24.2899C6.24038 24.0806 2.97338 20.6584 2.71688 16.5139L2.7 16.2405V2.7H13.5V0H0V16.281L0.03375 16.8683C0.38475 22.5484 5.11312 27 10.8 27C16.173 27 20.7225 23.031 21.5021 17.8335C21.5798 17.3239 21.6 16.8075 21.6 16.2945V8.1H18.9V16.3755Z"/>';
function ground() {
  return `<path class="iso-halo" d="${k.haloOf(FLOOR, -4, 4, P)}"/>` + S(k.slabOf(FLOOR, -4, 4, P, 8, 0.8), { tone: "mid" }) + L(k.planOutline(k.insetPlan(FLOOR, 3), 0, P, 8), { tone: "faint" }) +
    S(k.slabOf({ x: -12, y: FRONT, w: 12, d: FLOOR.y + FLOOR.d - 3 - FRONT, r: 0.6 }, 0, 0.4, P, 2), { tone: "lo", crease: "none" });
}
function tower() {
  const out = [S(k.slabOf(TOWER, 0, TH, P, 2, 0.6), { tone: "hi", inner: L(k.sideSeam(TOWER, TH - 4, P, 2), { tone: "faint" }) })];
  out.push(S(k.slabOf(k.insetPlan(TOWER, -0.8), TH, 1.6, P, 2, 0.4), { tone: "mid" }));
  /* the shield on the tower's face, above the main block's roof */
  const sc = 0.5, mw = 21.6 * sc, mx = TOWER.x + TOWER.w / 2 - mw / 2;
  out.push(`<g class="ab-mark" transform="${planeMatrix([mx, TFRONT + 0.02, TH - 6], [1, 0, 0], [0, 0, -1], P)} scale(${sc})">${MARK}</g>`);
  return out.join("");
}
const WINS = [];
for (let r = 0; r < 3; r++) {
  for (let c = 0; c < 6; c++) { const x = MAIN.x + 4 + c * 7.4; if (r === 0 && x > -14 && x < 2) continue; WINS.push({ f: "y", a: x, z: 5 + r * 7.6 }); }
  for (let c = 0; c < 3; c++) WINS.push({ f: "x", a: MAIN.y + 4 + c * 8.4, z: 5 + r * 7.6 });
}
const winPts = (w) => w.f === "y" ? [[w.a, FRONT, w.z], [w.a + 4.4, FRONT, w.z], [w.a + 4.4, FRONT, w.z + 4.6], [w.a, FRONT, w.z + 4.6]] : [[SIDE, w.a, w.z], [SIDE, w.a + 5, w.z], [SIDE, w.a + 5, w.z + 4.6], [SIDE, w.a, w.z + 4.6]];
function main() {
  const floors = [12.4, 20].map((z) => L(k.sideSeam(MAIN, z, P, 2), { tone: "faint" })).join("");
  const out = [S(k.slabOf(MAIN, 0, MH, P, 2, 0.6), { tone: "mid", inner: floors }), S(k.slabOf(k.insetPlan(MAIN, -0.8), MH, 1.6, P, 2, 0.4), { tone: "mid" })];
  WINS.forEach((w, i) => { const d = q(winPts(w)); out.push(`<path class="ab-win" data-w="${i}" d="${d}"/>`, L(d, { tone: "lo" })); });
  /* the entrance: doors under a canopy on two posts */
  out.push(L(q([[-10, FRONT, 0], [-10, FRONT, 6.4], [-2, FRONT, 6.4], [-2, FRONT, 0]]), { tone: "mid" }), L(k.segment([-6, FRONT, 0], [-6, FRONT, 6.4], P), { tone: "lo" }));
  for (const x of [-12.4, 0.4]) out.push(S(k.cylinder(x, FRONT + 4.6, 0.6, 0, 8, P, 12), { tone: "mid", crease: "none" }));
  out.push(S(k.slabOf({ x: -14, y: FRONT, w: 16, d: 6, r: 0.4 }, 8, 1.2, P, 2, 0.3), { tone: "hi" }));
  return out.join("");
}
function plaque() {
  const pl = { x: 18, y: 22, w: 16, d: 4, r: 0.4 }, out = [S(k.slabOf(pl, 0, 6, P, 2, 0.4), { tone: "hi" })];
  out.push(`<text class="iso-face-text ab-est" transform="${planeMatrix([pl.x + pl.w / 2, pl.y + pl.d + 0.02, 3], [1, 0, 0], [0, 0, -1], P)}" font-size="2.1" text-anchor="middle" dominant-baseline="central">EST. 2019</text>`);
  return out.join("");
}
const tree = (x, y, s) => S(k.cylinder(x, y, 0.9, 0, 6 * s, P, 12), { tone: "mid", crease: "none" }) + S(G.sphereOf([x, y, 6 * s + 4.6 * s], 5 * s, P), { tone: "mid" });
function pole() { return S(k.cylinder(POLE[0], POLE[1], 1.6, 0, 1, P, 16), { tone: "mid" }) + S(k.cylinder(POLE[0], POLE[1], 0.5, 1, PH - 1, P, 10), { tone: "mid", crease: "none" }) + S(G.sphereOf([POLE[0], POLE[1], PH + 0.6], 0.9, P), { tone: "mid" }); }
const svg = k.figureSvg({ width: W, height: H, label: "Newton School of Technology: a campus block with the NST shield on its tower, windows lighting up, a flag waving by the walk and a plaque engraved EST. 2019.",
  body: [ground(), tree(30, -26, 1), tower(), main(), tree(-24, 26, 0.85), pole(), `<path class="ab-flag"/>`, plaque()] });
export const CSS = `
.ab-mark path{fill:var(--anatomy-lit)}
.ab-win{fill:#FFD98A;opacity:0;transition:opacity .9s ease}
.ab-win.is-on{opacity:.85}
.ab-flag{fill:var(--anatomy-lit);stroke:var(--anatomy-lit);stroke-width:.5;stroke-linejoin:round}
.ab-est{fill:var(--anatomy-mid);letter-spacing:.06em}
`;
export const LIVE = `
function mount(root){
  const P = ${JSON.stringify(P)}, POLE = ${JSON.stringify(POLE)}, PH = ${PH};
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const flag = root.querySelector(".ab-flag"), wins = [...root.querySelectorAll(".ab-win")];
  [2, 5, 9, 14, 20].forEach((i) => wins[i] && wins[i].classList.add("is-on"));
  let live = false, frame = 0, t = 0, last = 0, next = 0;
  function draw(){
    /* the flag runs along +x from the pole; a travelling wave lifts and drops it a little */
    const top = [], bot = [], L = 11, Hf = 6.4;
    for (let j = 0; j <= 10; j++){ const u = j / 10, w = Math.sin(u * 5 - t * 3.2) * 0.9 * u, dy = Math.cos(u * 5 - t * 3.2) * 0.8 * u;
      top.push(iso([POLE[0] + u * L, POLE[1] + dy, PH - 0.6 + w], P)); bot.unshift(iso([POLE[0] + u * L, POLE[1] + dy, PH - 0.6 - Hf + w], P)); }
    flag.setAttribute("d", "M" + top.concat(bot).map((p) => p.map((n) => n.toFixed(2)).join(" ")).join("L") + "Z");
  }
  function tick(now){ const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60; last = now; t += dt; next -= dt;
    if (next <= 0){ next = 1.3; const w = wins[Math.floor(Math.random() * wins.length)]; w.classList.toggle("is-on"); }
    draw(); frame = live ? requestAnimationFrame(tick) : 0; }
  draw();
  return { start(){ live = true; if (still.matches || frame) return; last = 0; frame = requestAnimationFrame(tick); }, stop(){ live = false; } };
}
`;
export const SVG = svg;
if ((process.argv[1] || "").endsWith("/about.mjs")) { writeFileSync(new URL("./about.html", import.meta.url), previewPage({ key: "about", title: "About", svg, cap: "About us", sub: "The team and the story", live: LIVE, css: CSS, paneH: 501, figH: H })); console.log("wrote", svg.length); }
