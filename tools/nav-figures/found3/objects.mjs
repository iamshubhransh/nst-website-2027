/* Seven foundations backdrop, v2: a collage. Small isometric objects for the seven foundations (a branch card, a code monitor, a medal,
   stacked blocks, a hackathon table, a rocket, a pitch easel, a lightbulb, an open book, a chalkboard, a flask, a microscope, a paper
   stack, a briefcase, an ID card, an offer letter) and a few campus fragments (an arched bay, a column, a tree, a bench), scattered
   edge to edge. Densest at the left and right edges, nearly empty behind the text; drawn a hair above the section's black. */
import { writeFileSync } from "node:fs";
import * as k from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/iso-kit.mjs";
import * as G from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/lathe.mjs";
const S = (paths, style) => k.solidSvg(paths, style);
const Ln = (d, style) => k.lineSvg(d, style);
const Free = (d, tone = "lo") => k.lineSvg(d, { tone, free: true });
const UP = [0, 0, 1];
const VB = 160;
/* each object: its extreme points (for the fit) and a draw(P) */
const O = {};
O.branch = { box: k.boxCorners({ x: -30, y: -22, w: 60, d: 44 }, 0, 4), draw(P) {
  const card = { x: -30, y: -22, w: 60, d: 44, r: 3 };
  const at = (x, y) => k.iso([x, y, 3], P);
  const lane = (y) => k.pathOf([[-22, y], [22, y]].map(([x, yy]) => at(x, yy)));
  const dots = [[-18, -8], [-4, -8], [10, -8], [-4, 8], [16, 8]];
  return S(k.slabOf(card, 0, 3, P, 3, 0.4), { tone: "mid" }) +
    Free(lane(-8), "hi") + Free(k.pathOf([at(-4, -8), at(2, 0), at(2, 8), at(16, 8)]), "hi") +
    Ln(dots.map(([x, y]) => k.ring(x, y, 2.4, 3, P, 16)).join(""), { tone: "hi" });
} };
O.monitor = { box: [...k.boxCorners({ x: -22, y: -12, w: 44, d: 24 }, 0, 2), ...k.boxCorners({ x: -26, y: -3, w: 52, d: 4 }, 14, 48)], draw(P) {
  const fy = 1, at = (x, z) => k.iso([x, fy + 0.01, z], P);
  const chev = k.pathOf([at(-10, 37), at(-15, 31), at(-10, 25)]) + k.pathOf([at(10, 37), at(15, 31), at(10, 25)]) + k.pathOf([at(3, 39), at(-3, 23)]);
  return S(k.slabOf({ x: -14, y: -10, w: 28, d: 18, r: 3 }, 0, 2, P, 4, 0.4), { tone: "lo" }) +
    S(k.slabOf({ x: -3, y: -5, w: 6, d: 4, r: 1 }, 2, 14, P, 2), { tone: "mid" }) +
    S(k.slabOf({ x: -26, y: -3, w: 52, d: 4, r: 1.5 }, 14, 34, P, 2, 0.4), { tone: "mid" }) +
    Ln(k.pathOf([at(-23, 17), at(23, 17), at(23, 45), at(-23, 45)], true), { tone: "lo" }) + Free(chev, "hi");
} };
O.medal = { box: [...k.boxCorners({ x: -14, y: -14, w: 28, d: 28 }, 0, 4), [0, 0, 50]], draw(P) {
  const F = G.frameAlong([0, 0, 4], UP);
  return S(k.slabOf({ x: -14, y: -14, w: 28, d: 28, r: 2 }, 0, 4, P, 2, 0.4), { tone: "lo" }) +
    S(G.solidOf([[0, 4], [3, 4], [3, 2], [12, 2], [14, 5, 1], [26, 11, 1], [32, 13], [33, 13], [33, 0]], F, P, { steps: 18, smooth: false }), { tone: "mid" });
} };
O.blocks = { box: [...k.boxCorners({ x: -24, y: -24, w: 48, d: 48 }, 0, 44)], draw(P) {
  return S(k.slabOf({ x: -24, y: -24, w: 24, d: 24, r: 2 }, 0, 18, P, 2, 0.5), { tone: "mid" }) +
    S(k.slabOf({ x: 0, y: 0, w: 22, d: 22, r: 2 }, 0, 18, P, 2, 0.5), { tone: "mid" }) +
    S(k.slabOf({ x: -12, y: -12, w: 24, d: 24, r: 2 }, 18, 18, P, 2, 0.5), { tone: "mid" }) +
    S(k.cylinder(0, 0, 6, 36, 8, P, 18, 0.4), { tone: "hi" });
} };
O.table = { box: [...k.boxCorners({ x: -34, y: -18, w: 68, d: 36 }, 0, 30)], draw(P) {
  const legs = k.corners({ x: -34, y: -18, w: 68, d: 36 }, 4).sort((a, b) => k.depthOf([...a, 0], P) - k.depthOf([...b, 0], P));
  return legs.map(([x, y]) => S(k.slabOf({ x: x - 1.2, y: y - 1.2, w: 2.4, d: 2.4, r: 0.4 }, 0, 20, P, 2), { tone: "lo", crease: "none" })).join("") +
    S(k.slabOf({ x: -34, y: -18, w: 68, d: 36, r: 2 }, 20, 2.4, P, 3, 0.4), { tone: "mid" }) +
    S(k.slabOf({ x: -24, y: -10, w: 22, d: 15, r: 1 }, 22.4, 1, P, 2), { tone: "mid" }) +
    S(k.slabOf({ x: 6, y: -8, w: 22, d: 15, r: 1 }, 22.4, 1, P, 2), { tone: "mid" });
} };
O.rocket = { box: [...k.boxCorners({ x: -14, y: -14, w: 28, d: 28 }, 0, 4), [0, 0, 62]], draw(P) {
  const F = G.frameAlong([0, 0, 4], UP);
  const fin = (dx, dy) => S(k.slabOf({ x: dx < 0 ? -12 : dx > 0 ? 5 : -1, y: dy < 0 ? -12 : dy > 0 ? 5 : -1, w: dx ? 7 : 2, d: dy ? 7 : 2, r: 0.5 }, 4, 10, P, 2), { tone: "mid" });
  return S(k.cylinder(0, 0, 14, 0, 4, P, 18, 0.4), { tone: "lo" }) + fin(-1, 0) + fin(0, -1) +
    S(G.solidOf([[0, 6], [2, 6], [34, 6], [44, 4.6, 1], [52, 2, 1], [56, 0, 1]], F, P, { steps: 18, smooth: false }), { tone: "hi", inner: Ln(G.arcOf(F, 26, 6, P), { tone: "faint" }) }) +
    fin(1, 0) + fin(0, 1);
} };
O.easel = { box: [...k.boxCorners({ x: -20, y: -14, w: 40, d: 28 }, 0, 54)], draw(P) {
  const at = (x, z) => k.iso([x, 1.01, z], P);
  const bars = [[-12, 6], [-4, 11], [4, 17], [12, 24]].map(([x, h]) => k.pathOf([at(x, 24), at(x, 24 + h)])).join("");
  return S(k.slabOf({ x: -16, y: -12, w: 2.4, d: 2.4, r: 0.4 }, 0, 50, P, 2), { tone: "lo", crease: "none" }) +
    S(k.slabOf({ x: 13.6, y: -12, w: 2.4, d: 2.4, r: 0.4 }, 0, 50, P, 2), { tone: "lo", crease: "none" }) +
    S(k.slabOf({ x: -20, y: -1, w: 40, d: 2, r: 0.6 }, 18, 34, P, 2, 0.3), { tone: "mid" }) +
    S(k.slabOf({ x: -22, y: -2, w: 44, d: 4, r: 0.6 }, 16, 2, P, 2), { tone: "mid" }) +
    Free(bars, "hi");
} };
O.bulb = { box: [...k.boxCorners({ x: -12, y: -12, w: 24, d: 24 }, 0, 50)], draw(P) {
  const F = G.frameAlong([0, 0, 0], UP);
  return S(k.cylinder(0, 0, 9, 0, 3, P, 18, 0.4), { tone: "lo" }) +
    S(G.solidOf([[3, 6], [12, 6], [12, 5.2]], F, P, { steps: 18, smooth: false }), { tone: "mid", inner: k.fadedSvg(G.ribsOf(F, 4, 11, 6, 10, P, { fade: [0.05, 0.4], seams: true }), { tone: "lo" }) }) +
    S(G.sphereOf([0, 0, 28], 13, P, { steps: 16 }), { tone: "hi" });
} };
O.book = { box: [...k.boxCorners({ x: -30, y: -20, w: 60, d: 40 }, 0, 8)], draw(P) {
  const page = (x0, x1) => { const at = (x, y) => k.iso([x, y, 6], P); return [-12, -6, 0, 6, 12].map((y) => k.pathOf([at(x0, y), at(x1, y)])).join(""); };
  return S(k.slabOf({ x: -30, y: -20, w: 60, d: 40, r: 2 }, 0, 2, P, 3, 0.4), { tone: "lo" }) +
    S(k.slabOf({ x: -28, y: -18, w: 27.5, d: 36, r: 1 }, 2, 4, P, 2, 0.3), { tone: "mid" }) +
    S(k.slabOf({ x: 0.5, y: -18, w: 27.5, d: 36, r: 1 }, 2, 4, P, 2, 0.3), { tone: "mid" }) +
    Free(page(-24, -6) + page(5, 23));
} };
O.board = { box: [...k.boxCorners({ x: -34, y: -10, w: 68, d: 20 }, 0, 50)], draw(P) {
  const at = (x, z) => k.iso([x, 1.51, z], P);
  const chalk = k.pathOf([at(-22, 38), at(-6, 38)]) + k.pathOf([at(-22, 32), at(4, 32)]) + k.pathOf([at(-22, 26), at(-10, 26)]) + k.pathOf([at(8, 26), at(14, 38), at(22, 30)]);
  return S(k.slabOf({ x: -30, y: -6, w: 3, d: 12, r: 0.6 }, 0, 20, P, 2), { tone: "lo" }) + S(k.slabOf({ x: 27, y: -6, w: 3, d: 12, r: 0.6 }, 0, 20, P, 2), { tone: "lo" }) +
    S(k.slabOf({ x: -34, y: -1.5, w: 68, d: 3, r: 0.8 }, 18, 30, P, 2, 0.4), { tone: "mid" }) +
    S(k.slabOf({ x: -30, y: 1.5, w: 60, d: 3, r: 0.6 }, 19, 1.4, P, 2), { tone: "lo" }) + Free(chalk, "hi");
} };
O.flask = { box: [...k.boxCorners({ x: -16, y: -16, w: 32, d: 32 }, 0, 50)], draw(P) {
  const F = G.frameAlong([0, 0, 0], UP);
  return S(G.solidOf([[0, 15], [2, 15, 1], [6, 14, 1], [24, 5], [38, 4.4], [40, 5.4], [42, 5.4], [42, 0]], F, P, { steps: 18, smooth: false }), { tone: "mid" });
} };
O.scope = { box: [...k.boxCorners({ x: -18, y: -14, w: 36, d: 28 }, 0, 54)], draw(P) {
  const F = G.frameAlong([6, 0, 22], UP);
  return S(k.slabOf({ x: -18, y: -14, w: 36, d: 28, r: 3 }, 0, 4, P, 3, 0.4), { tone: "lo" }) +
    S(k.slabOf({ x: -14, y: -4, w: 8, d: 8, r: 1 }, 4, 40, P, 2, 0.3), { tone: "mid" }) +
    S(k.slabOf({ x: -6, y: -9, w: 18, d: 18, r: 1 }, 16, 2.4, P, 2, 0.3), { tone: "mid" }) +
    S(G.solidOf([[0, 3], [24, 4.5], [26, 5.5], [30, 5.5], [30, 0]], F, P, { steps: 18, smooth: false }), { tone: "hi" });
} };
O.papers = { box: [...k.boxCorners({ x: -26, y: -32, w: 52, d: 64 }, 0, 12)], draw(P) {
  const lines = (z) => { const at = (x, y) => k.iso([x, y, z], P); return [-20, -14, -8, -2, 4, 10].map((y, i) => k.pathOf([at(-16, y), at(i % 2 ? 6 : 14, y)])).join(""); };
  return S(k.slabOf({ x: -24, y: -30, w: 46, d: 60, r: 1 }, 0, 3, P, 2), { tone: "lo" }) +
    S(k.slabOf({ x: -22, y: -32, w: 46, d: 60, r: 1 }, 3, 3, P, 2), { tone: "mid" }) +
    S(k.slabOf({ x: -20, y: -29, w: 46, d: 60, r: 1 }, 6, 3, P, 2, 0.3), { tone: "mid" }) + Free(lines(9).replace(/M/g, "M"));
} };
O.case = { box: [...k.boxCorners({ x: -30, y: -10, w: 60, d: 20 }, 0, 50)], draw(P) {
  const b = { x: -30, y: -10, w: 60, d: 20, r: 3 };
  return S(k.slabOf(b, 0, 38, P, 3, 0.5), { tone: "mid", inner: Ln(k.sideSeam(b, 26, P, 3), { tone: "lo" }) }) +
    S(k.slabOf({ x: -12, y: -3, w: 3, d: 6, r: 0.6 }, 38, 9, P, 2), { tone: "lo" }) + S(k.slabOf({ x: 9, y: -3, w: 3, d: 6, r: 0.6 }, 38, 9, P, 2), { tone: "lo" }) +
    S(k.slabOf({ x: -12, y: -3, w: 24, d: 6, r: 1 }, 45, 3, P, 2), { tone: "lo" });
} };
O.idcard = { box: [...k.boxCorners({ x: -22, y: -30, w: 44, d: 60 }, 0, 3)], draw(P) {
  const at = (x, y) => k.iso([x, y, 2], P);
  const txt = [[-4, 4, 14], [-4, 10, 10], [-16, 20, 30]].map(([x, y, w]) => k.pathOf([at(x, y), at(x + w, y)])).join("");
  return S(k.slabOf({ x: -22, y: -30, w: 44, d: 60, r: 4 }, 0, 2, P, 4, 0.4), { tone: "mid" }) +
    Ln(k.planOutline({ x: -6, y: -26, w: 12, d: 4, r: 2 }, 2, P, 3), { tone: "lo" }) +
    Ln(k.planOutline({ x: -16, y: -16, w: 10, d: 12, r: 1 }, 2, P, 2), { tone: "hi" }) + Free(txt);
} };
O.letter = { box: [...k.boxCorners({ x: -34, y: -22, w: 68, d: 44 }, 0, 3)], draw(P) {
  const at = (x, y) => k.iso([x, y, 2], P);
  return S(k.slabOf({ x: -34, y: -22, w: 68, d: 44, r: 1.5 }, 0, 2, P, 2, 0.4), { tone: "mid" }) +
    Free(k.pathOf([at(-33, -21), at(0, 2), at(33, -21)]), "hi") + Ln(k.ring(0, 2, 3, 2, P, 16), { tone: "hi" });
} };
O.arch = { box: [...k.boxCorners({ x: -26, y: -6, w: 52, d: 12 }, 0, 70)], draw(P) {
  const fy = 6.01, at = (x, z) => k.iso([x, fy, z], P);
  const archPts = []; for (let i = 0; i <= 24; i++){ const a = Math.PI * i / 24; archPts.push(at(-12 * Math.cos(a), 40 + 12 * Math.sin(a))); }
  const arch = k.pathOf([at(-12, 4), ...archPts, at(12, 4)], true);
  return S(k.slabOf({ x: -26, y: -6, w: 52, d: 12, r: 0.8 }, 0, 64, P, 2, 0.5), { tone: "mid" }) +
    S(k.slabOf({ x: -28, y: -7, w: 56, d: 14, r: 0.8 }, 64, 4, P, 2, 0.4), { tone: "mid" }) +
    Ln(arch, { tone: "hi" }) + Ln(k.pathOf([at(0, 0), at(0, 52)]), { tone: "lo" });
} };
O.column = { box: [...k.boxCorners({ x: -12, y: -12, w: 24, d: 24 }, 0, 78)], draw(P) {
  const F = G.frameAlong([0, 0, 6], UP);
  return S(k.slabOf({ x: -12, y: -12, w: 24, d: 24, r: 1 }, 0, 6, P, 2, 0.4), { tone: "lo" }) +
    S(G.solidOf([[0, 8], [3, 8], [4, 6.6], [62, 5.6], [63, 7.6], [66, 8.6], [66, 0]], F, P, { steps: 18, smooth: false }), { tone: "mid", inner: k.fadedSvg(G.ribsOf(F, 4, 62, 6.6, 10, P, { r1: 5.6, fade: [0.3, 0.65], seams: "last" })   /* flutes run from the base shoulder to the capital step */, { tone: "lo" }) }) +
    S(k.slabOf({ x: -11, y: -11, w: 22, d: 22, r: 1 }, 72, 4, P, 2, 0.4), { tone: "mid" });
} };
O.tree = { box: [...k.boxCorners({ x: -20, y: -20, w: 40, d: 40 }, 0, 60)], draw(P) {
  return S(k.cylinder(0, 0, 10, 0, 3, P, 18, 0.4), { tone: "lo" }) + S(k.cylinder(0, 0, 2.4, 3, 22, P, 16), { tone: "mid", crease: "none" }) +
    S(G.sphereOf([0, 0, 38], 16, P, { steps: 16 }), { tone: "mid" }) + S(G.sphereOf([8, 6, 30], 9, P, { steps: 16 }), { tone: "mid" });
} };
O.bench = { box: [...k.boxCorners({ x: -30, y: -9, w: 60, d: 18 }, 0, 24)], draw(P) {
  return S(k.slabOf({ x: -26, y: -7, w: 3, d: 14, r: 0.6 }, 0, 10, P, 2), { tone: "lo" }) + S(k.slabOf({ x: 23, y: -7, w: 3, d: 14, r: 0.6 }, 0, 10, P, 2), { tone: "lo" }) +
    S(k.slabOf({ x: -30, y: -8, w: 60, d: 14, r: 1 }, 10, 2.4, P, 2, 0.4), { tone: "mid" }) +
    S(k.slabOf({ x: -30, y: -9, w: 60, d: 2.4, r: 0.6 }, 12.4, 11, P, 2, 0.3), { tone: "mid" });
} };
export { O };
