/* Seven foundations backdrop: an isometric NST campus in fine dark line art. An academic block with a clock tower, a library with a
   colonnade, a lab wing, a courtyard with trees and paths. Drawn in greys a hair above the section's black so the text on top stays
   easy to read; a couple of windows warm and cool slowly. */
import { writeFileSync } from "node:fs";
import * as k from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/iso-kit.mjs";
import * as G from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/lathe.mjs";
export const W = 780, H = 437;

const GROUND = { x: -170, y: -96, w: 340, d: 196, r: 14 };
const A = { x: -128, y: -78, w: 120, d: 40, r: 1.5 }, AH = 46;              /* academic block (back) */
const TW = { x: -80, y: -70, w: 24, d: 24, r: 1 }, TH = 34;                 /* clock tower on A */
const L = { x: 12, y: -78, w: 96, d: 36, r: 1.5 }, LH = 28;                 /* library (back right) */
const B = { x: -128, y: -24, w: 42, d: 82, r: 1.5 }, BH = 32;               /* lab wing (left, running forward) */
const HS = { x: 122, y: -2, w: 34, d: 84, r: 1.5 }, HH = 36;               /* hostel (right, fades out under the mask) */
const P = k.fitProjection([...k.boxCorners(GROUND, -5, 0), [TW.x + TW.w / 2, TW.y + TW.d / 2, AH + TH + 14]], W, H, { pad: 18, headroom: 26, azimuth: 38 });
const at = (p) => k.iso(p, P);
const S = (paths, style) => k.solidSvg(paths, style);
const Ln = (d, style) => k.lineSvg(d, style);
const quad = (pts) => k.pathOf(pts.map(at), true);
const depth = (x, y, z = 0) => k.depthOf([x, y, z], P);

/* windows on the two visible faces of a block (+y front, +x side): closed outlines, a few carry a warm pane */
let warmN = 0;
function windows(pl, z0, h, { rows, colsY, colsX, ww = 5, wh = 6, warm = [] }) {
  const out = [], fy = pl.y + pl.d, fx = pl.x + pl.w;
  const rowZ = (r) => z0 + 5 + r * ((h - 10) / rows);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < colsY; c++) {
      const x = pl.x + (pl.w / colsY) * (c + 0.5) - ww / 2, z = rowZ(r);
      const d = quad([[x, fy, z], [x + ww, fy, z], [x + ww, fy, z + wh], [x, fy, z + wh]]);
      const isWarm = warm.includes(`y${r}${c}`);
      if (isWarm) out.push(`<path class="fd-warm" style="--d:${(warmN++ * 2.7).toFixed(1)}s" d="${d}"/>`);
      out.push(Ln(d, { tone: "lo" }));
    }
    for (let c = 0; c < colsX; c++) {
      const y = pl.y + (pl.d / colsX) * (c + 0.5) - ww / 2, z = rowZ(r);
      const d = quad([[fx, y, z], [fx, y + ww, z], [fx, y + ww, z + wh], [fx, y, z + wh]]);
      if (warm.includes(`x${r}${c}`)) out.push(`<path class="fd-warm" style="--d:${(warmN++ * 2.7).toFixed(1)}s" d="${d}"/>`);
      out.push(Ln(d, { tone: "lo" }));
    }
  }
  return out.join("");
}
function block(pl, h, opt) {
  const seam = Ln(k.sideSeam(pl, 1.6, P, 2), { tone: "faint" });
  return S(k.slabOf(pl, 0, h, P, 2, 0.5), { tone: "mid", inner: seam }) +
    S(k.slabOf(k.insetPlan(pl, -1.2), h, 1.6, P, 2, 0.3), { tone: "mid" }) +            /* parapet */
    Ln(k.planOutline(k.insetPlan(pl, 3), h + 1.6, P, 2), { tone: "faint" }) +            /* roof edge */
    windows(pl, 1.6, h - 1.6, opt);
}
function tower() {
  const out = [S(k.slabOf(TW, AH, TH, P, 2, 0.4), { tone: "mid" })];
  out.push(S(k.slabOf(k.insetPlan(TW, -1), AH + TH, 2, P, 2, 0.3), { tone: "mid" }));
  /* a shallow pyramid roof: four triangles to an apex */
  const z = AH + TH + 2, ap = [TW.x + TW.w / 2, TW.y + TW.d / 2, z + 10];
  const c = [[TW.x - 1, TW.y - 1], [TW.x + TW.w + 1, TW.y - 1], [TW.x + TW.w + 1, TW.y + TW.d + 1], [TW.x - 1, TW.y + TW.d + 1]];
  [[0, 1], [3, 0], [1, 2], [2, 3]].forEach(([i, j]) => out.push(`<path class="iso-fill" d="${quad([[...c[i], z], [...c[j], z], ap])}"/>` + Ln(quad([[...c[i], z], [...c[j], z], ap]), { tone: "mid" })));
  /* the clock on the front face */
  const fc = [TW.x + TW.w / 2, TW.y + TW.d, AH + TH - 11];
  out.push(Ln(k.sideRing(fc, 6.5, "y", P, 36), { tone: "hi" }));
  out.push(Ln(k.pathOf([at([fc[0], fc[1], fc[2] + 4.4]), at(fc), at([fc[0] + 3, fc[1], fc[2]])]), { tone: "hi", free: true }));
  out.push(k.dotsSvg([at(fc)], { size: 0.5, tone: "hi" }));
  /* tall slit windows on the tower's two faces */
  for (const dx of [-5, 3]) { const x = TW.x + TW.w / 2 + dx; out.push(Ln(quad([[x, TW.y + TW.d, AH + 4], [x + 2, TW.y + TW.d, AH + 4], [x + 2, TW.y + TW.d, AH + 14], [x, TW.y + TW.d, AH + 14]]), { tone: "lo" })); }
  return out.join("");
}
function library() {
  const out = [block(L, LH, { rows: 2, colsY: 0, colsX: 3, warm: ["x10"] })];
  /* colonnade along the front: a step, columns, an entablature */
  const fy = L.y + L.d;
  out.push(S(k.slabOf({ x: L.x - 2, y: fy, w: L.w + 4, d: 9, r: 0.6 }, 0, 1.6, P, 2, 0.3), { tone: "mid" }));
  for (let i = 0; i < 9; i++) { const x = L.x + 6 + i * ((L.w - 12) / 8); out.push(S(k.cylinder(x, fy + 4.5, 1.4, 1.6, LH - 6, P, 12), { tone: "mid", crease: "none" })); }
  out.push(S(k.slabOf({ x: L.x - 1, y: fy, w: L.w + 2, d: 8, r: 0.4 }, LH - 4.4, 3.2, P, 2, 0.3), { tone: "mid" }));
  return out.join("");
}
function tree(x, y, r = 7) {
  return S(k.cylinder(x, y, 1, 0, r * 1.2, P, 10), { tone: "lo", crease: "none" }) + S(G.sphereOf([x, y, r * 1.2 + r * 0.8], r, P), { tone: "mid" });
}
function ground() {
  const out = [`<path class="iso-halo" d="${k.haloOf(GROUND, -5, 5, P)}"/>`];
  out.push(S(k.slabOf(GROUND, -5, 5, P, 10, 0.8), { tone: "lo", inner: Ln(k.sideSeam(GROUND, -2.5, P, 10), { tone: "faint" }) }));
  out.push(Ln(k.planOutline(k.insetPlan(GROUND, 6), 0, P, 10), { tone: "faint" }));
  /* the courtyard lawn and its paths (closed outlines, so nothing ends in the open) */
  out.push(Ln(k.planOutline({ x: -76, y: -32, w: 180, d: 112, r: 8 }, 0, P, 8), { tone: "faint" }));
  out.push(Ln(k.planOutline({ x: -76, y: 18, w: 180, d: 8, r: 3 }, 0, P, 4), { tone: "lo" }));       /* cross path */
  out.push(Ln(k.planOutline({ x: 6, y: -32, w: 8, d: 112, r: 3 }, 0, P, 4), { tone: "lo" }));         /* main walk */
  out.push(Ln(k.ring(10, 22, 16, 0, P, 48), { tone: "lo" }));                                           /* round plaza */
  out.push(S(k.cylinder(10, 22, 6, 0, 1.2, P, 32, 0.3), { tone: "mid" }));                              /* fountain */
  out.push(Ln(k.ring(10, 22, 3.6, 1.2, P, 32), { tone: "lo" }));
  return out.join("");
}
/* paint back to front */
const items = [
  [depth(A.x + A.w / 2, A.y + A.d / 2), block(A, AH, { rows: 3, colsY: 8, colsX: 2, warm: ["y14", "y06"] }) + tower()],
  [depth(L.x + L.w / 2, L.y + L.d / 2), library()],
  [depth(HS.x + HS.w / 2, HS.y + HS.d / 2), block(HS, HH, { rows: 4, colsY: 2, colsX: 6, warm: ["x22"] })],
  [depth(B.x + B.w / 2, B.y + B.d / 2), block(B, BH, { rows: 2, colsY: 2, colsX: 6, warm: ["x13"] })],
  ...[[-50, -20], [70, -14], [-44, 64], [84, 66], [40, 74], [-64, 34]].map(([x, y], i) => [depth(x, y), tree(x, y, i % 2 ? 6 : 7.5)]),
];
items.sort((a, b) => a[0] - b[0]);
export const SVG = k.figureSvg({ width: W, height: H, label: "", body: [ground(), ...items.map((i) => i[1])] }).replace("<svg ", '<svg preserveAspectRatio="xMidYMid meet" ');

export const CSS = `
.iso.found-iso,.iso.found-iso[data-theme]{--anatomy-card:#0B0C0E;--anatomy-paper:#0B0C0E;--anatomy-face:#0E0F12;--anatomy-top:#0E0F12;
  --anatomy-shade-0:#0B0C0E;--anatomy-shade-1:#0C0D10;--anatomy-shade-2:#0D0E11;--anatomy-shade-3:#0E0F12;--anatomy-lit-top:#0E0F12;--anatomy-lit-shade:#0D0E11;
  --anatomy-hi:#2E3238;--anatomy-mid:#25292F;--anatomy-lo:#1D2025;--anatomy-faint:#17191D;--anatomy-lit:#2E3238;--anatomy-halo:#000;--anatomy-halo-opacity:.6;--anatomy-dot:#2E3238;--anatomy-weight:.7px}
.found-art.found-iso{opacity:1}
.found-art.found-iso svg{display:block;width:100%;height:100%}
.found-iso .fd-warm{fill:#F59700;stroke:none;opacity:.05;animation:fdWarm 9s ease-in-out infinite;animation-delay:var(--d,0s)}
@keyframes fdWarm{0%,100%{opacity:.03}50%{opacity:.16}}
@media (prefers-reduced-motion:reduce){ .found-iso .fd-warm{animation:none;opacity:.08} }
`;
if ((process.argv[1] || "").endsWith("found.mjs")) {
  const mock = (w) => `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Mona+Sans:wdth,wght@100,500;100,600&display=swap">
<style>${k.ISO_CSS}${CSS}
body{margin:0;background:#0B0C0E;font-family:"Mona Sans",Arial,sans-serif}
.found{position:relative;height:${w > 1000 ? 683 : 708}px;overflow:hidden;background:#0B0C0E}
.found-art{position:absolute;pointer-events:none}
${w > 1000 ? `.found-art{left:0;top:-16.8px;width:780px;height:436.6px;-webkit-mask-image:linear-gradient(90deg,#000 675px,transparent 780px);mask-image:linear-gradient(90deg,#000 675px,transparent 780px)}
.side{position:absolute;left:120px;top:96px;width:486px;display:flex;flex-direction:column;gap:20px}
.kick{margin:0;font-size:12px;line-height:16px;font-weight:600;letter-spacing:1.6px;text-transform:uppercase;color:#61A8FF}
h2{margin:0;font-size:36px;line-height:44px;font-weight:600;color:#fff}
p.l{margin:0;max-width:420px;font-size:16px;line-height:24px;font-weight:500;color:#B2B9C7}
.list{position:absolute;left:630px;top:96px;width:690px;height:420px;border:1px solid #23282F;border-radius:12px}` :
`.found-art{left:calc(50% - 241px);top:0;width:482px;height:270.15px}
.side{position:absolute;left:50%;top:252px;width:358px;transform:translateX(-50%);text-align:center}
h2{margin:0;font-size:19px;line-height:24px;font-weight:600;font-stretch:125%;color:#fff}.kick,p.l{display:none}
.list{position:absolute;left:16px;right:16px;top:321px;height:205px;border:1px solid #23282F;border-radius:12px}`}
</style></head><body><section class="found"><div class="found-art iso found-iso" data-theme="dark" aria-hidden="true">${SVG}</div>
<div class="side"><p class="kick">The seven foundations</p><h2>We specifically work on these 7 foundations to give outcomes</h2><p class="l">Seven ways students build a real track record long before placements. Pick one to see it in action.</p></div><div class="list"></div></section></body></html>`;
  writeFileSync(new URL("./found.html", import.meta.url), mock(1440));
  writeFileSync(new URL("./found-m.html", import.meta.url), mock(402));
  console.log("svg bytes", SVG.length);
}
