/* IIT Roorkee × NST: an institute with columns and a pediment, wired to an AI chip; a pulse runs along the link between them. */
import { writeFileSync } from "node:fs";
import { k, G, W, H, previewPage, base } from "./common.mjs";
const FLOOR = { x: -48, y: -32, w: 96, d: 64, r: 8 };
const BX = -42, BW = 46, BY = -14, BD = 26;
const CHIP = { x: 16, y: -6, w: 24, d: 24, r: 1.8 };
const P = k.fitProjection([...k.boxCorners(FLOOR, -4, 0), [BX + BW / 2, 0, 34]], W, H, { pad: 26, azimuth: 52 });
const S = (p, s) => k.solidSvg(p, s), L = (d, s) => k.lineSvg(d, s);
function institute() {
  const out = [];
  out.push(S(k.slabOf({ x: BX, y: BY, w: BW, d: BD, r: 0.8 }, 0, 2, P, 2, 0.4), { tone: "mid" }));
  out.push(S(k.slabOf({ x: BX + 2, y: BY + 2, w: BW - 4, d: BD - 4, r: 0.6 }, 2, 2, P, 2, 0.4), { tone: "mid" }));
  out.push(S(k.slabOf({ x: BX + 5, y: BY + 4, w: BW - 10, d: BD - 12, r: 0.4 }, 4, 16, P, 2), { tone: "mid" }));   /* the hall behind the columns */
  const cols = [];
  for (let i = 0; i < 6; i++) cols.push(BX + 5.4 + i * 7);
  for (const x of cols) out.push(S(k.cylinder(x, BY + BD - 5, 1.5, 4, 16, P, 14), { tone: "hi", crease: "none" }));
  out.push(S(k.slabOf({ x: BX + 2.4, y: BY + 2.4, w: BW - 4.8, d: BD - 4.8, r: 0.4 }, 20, 2.6, P, 2, 0.4), { tone: "mid" }));
  const F = G.frameOf([BX + 2.4, BY + BD / 2, 22.6], [1, 0, 0], [0, 1, 0], [0, 0, 1]);
  out.push(S(G.prismOf(F, [[-(BD - 4.8) / 2, 0], [(BD - 4.8) / 2, 0], [0, 8]], 0, BW - 4.8, P), { tone: "mid" }));
  return out.join("");
}
function chip() {
  const out = [S(k.slabOf(CHIP, 0, 1.6, P, 3, 0.3), { tone: "mid" })];
  const c = { x: CHIP.x + 5, y: CHIP.y + 5, w: 14, d: 14, r: 1 };
  /* pins along the four sides, then the package, then its core */
  const pins = [];
  for (let i = 0; i < 4; i++) { const o = c.x + 2 + i * 2.8; pins.push({ x: o - 0.5, y: c.y - 1.6, w: 1, d: 1.8, r: 0.2 }, { x: o - 0.5, y: c.y + c.d - 0.2, w: 1, d: 1.8, r: 0.2 }); }
  for (let i = 0; i < 4; i++) { const o = c.y + 2 + i * 2.8; pins.push({ x: c.x - 1.6, y: o - 0.5, w: 1.8, d: 1, r: 0.2 }, { x: c.x + c.w - 0.2, y: o - 0.5, w: 1.8, d: 1, r: 0.2 }); }
  out.push(pins.map((p) => S(k.slabOf(p, 1.6, 0.6, P, 1), { tone: "mid", crease: "none" })).join(""));
  out.push(S(k.slabOf(c, 1.6, 3, P, 3, 0.4), { tone: "hi" }));
  out.push(`<g class="ir-core">${S(k.slabOf({ x: c.x + 3, y: c.y + 3, w: 7, d: 7, r: 0.6 }, 4.6, 0.8, P, 2), { tone: "hi", lit: true })}</g>`);
  return out.join("");
}
/* the link: a cable along the floor from the institute's steps to the chip's board */
const LINK = [[BX + BW, 2, 0.6], [10, 2, 0.6], [10, 6, 0.6], [CHIP.x, 6, 0.6]];
const svg = k.figureSvg({ width: W, height: H, label: "An institute with columns and a pediment, wired to an AI chip; a pulse runs along the link.",
  body: [base(FLOOR, 4, P), institute(), k.wireSvg(k.iso(LINK[0], P), k.iso(LINK[3], P), { via: LINK.slice(1, 3).map((p) => k.iso(p, P)), tone: "mid", size: 1.1 }), chip(), `<circle class="ir-pulse" r="1.6"/>`] });
export const CSS = `
.ir-pulse{fill:var(--anatomy-lit)}
.ir-core{transition:opacity .3s ease}
`;
export const LIVE = `
function mount(root){
  const P = ${JSON.stringify(P)}, LINK = ${JSON.stringify(LINK)};
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const pulse = root.querySelector(".ir-pulse"), core = root.querySelector(".ir-core");
  const seg = LINK.slice(1).map((p, i) => Math.hypot(p[0] - LINK[i][0], p[1] - LINK[i][1])), total = seg.reduce((a, b) => a + b, 0);
  let live = false, frame = 0, t = 0, last = 0;
  function pointAt(d){ for (let i = 0; i < seg.length; i++){ if (d <= seg[i]){ const u = d / seg[i], a = LINK[i], b = LINK[i + 1]; return [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u, 0.9]; } d -= seg[i]; } return LINK[LINK.length - 1]; }
  function draw(){
    /* a pulse leaves the institute every 2 s; the chip's core glows as it arrives */
    const c = t % 2, u = Math.min(1, c / 1.3), p = iso(pointAt(u * total), P);
    pulse.setAttribute("cx", p[0].toFixed(2)); pulse.setAttribute("cy", p[1].toFixed(2)); pulse.style.opacity = c < 1.3 ? 1 : 0;
    core.style.opacity = (0.45 + 0.55 * Math.max(0, 1 - Math.abs(c - 1.45) / 0.5)).toFixed(2);
  }
  function tick(now){ const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60; last = now; t += dt; draw(); frame = live ? requestAnimationFrame(tick) : 0; }
  t = 0.7; draw();
  return { start(){ live = true; if (still.matches || frame) return; last = 0; frame = requestAnimationFrame(tick); }, stop(){ live = false; } };
}
`;
export const SVG = svg;
if ((process.argv[1] || "").endsWith("iitr.mjs")) { writeFileSync(new URL("./iitr.html", import.meta.url), previewPage({ key: "iitr", title: "IITR", svg, cap: "IIT Roorkee × NST", sub: "Government-backed project", live: LIVE, css: CSS })); console.log("wrote", svg.length); }
