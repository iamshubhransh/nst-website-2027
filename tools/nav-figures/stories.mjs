/* Student stories: an open book on a short stack of books, a ribbon marking the place; every few seconds a page turns. */
import { writeFileSync } from "node:fs";
import { k, G, W, H, previewPage } from "./common.mjs";

const PW = 30, PD = 40;                    /* page size: x from the spine, y along it */
const STACK = [{ x: -40, y: -26, w: 80, d: 52, h: 6 }, { x: -37, y: -24, w: 74, d: 48, h: 5 }];
const BZ = 11;                             /* the open book's cover sits here */
const TOPZ = BZ + 1.2 + 2.8;               /* page surface at the spine */
const P = k.fitProjection([...k.boxCorners({ x: -40, y: -26, w: 80, d: 52, r: 0 }, 0, TOPZ), [0, 0, TOPZ + PW]], W, H, { pad: 46, azimuth: 55 });
const at = (p) => k.iso(p, P);
const S = (paths, style) => k.solidSvg(paths, style);
const L = (d, style) => k.lineSvg(d, style);

function stack() {
  const out = [`<path class="iso-halo" d="${k.haloOf({ x: -40, y: -26, w: 80, d: 52, r: 2 }, 0, 4, P)}"/>`];
  let z = 0;
  STACK.forEach((b, i) => {
    const plan = { ...b, r: 1.2 };
    /* a closed book: cover slab, the page block inset on its open sides, a spine band */
    out.push(S(k.slabOf(plan, z, b.h, P, 2, 0.4), { tone: "mid", inner: L(k.sideSeam(plan, z + b.h / 2, P, 2), { tone: "faint" }) }));
    z += b.h;
  });
  return out.join("");
}
/* the open book: a cover, two page blocks that slope down into the spine (as an open book lies), printed lines on them */
const RISE = 3.2, LOW = BZ + 1.2 + 2.8, HIGH = LOW + RISE;   /* page surface: LOW at the spine, HIGH at the outer edge */
const zAt = (x) => LOW + RISE * Math.min(1, Math.abs(x) / PW);
function book() {
  const out = [];
  out.push(S(k.slabOf({ x: -PW - 2, y: -PD / 2 - 2, w: 2 * PW + 4, d: PD + 4, r: 1.4 }, BZ, 1.2, P, 2, 0.4), { tone: "mid" }));
  const F = G.frameOf([0, -PD / 2, BZ + 1.2], [0, 1, 0], [1, 0, 0], [0, 0, 1]);
  out.push(S(G.prismOf(F, [[-PW, 0], [-0.4, 0], [-0.4, LOW - BZ - 1.2], [-PW, HIGH - BZ - 1.2]], 0, PD, P), { tone: "mid" }));
  out.push(S(G.prismOf(F, [[0.4, 0], [PW, 0], [PW, HIGH - BZ - 1.2], [0.4, LOW - BZ - 1.2]], 0, PD, P), { tone: "mid" }));
  const line = (x0, x1, y) => k.pathOf([[x0, y, zAt(x0)], [x1, y, zAt(x1)]].map(at));
  const rows = (x0, from, n, lens, dir) => Array.from({ length: n }, (_, i) => line(x0, x0 + dir * lens[i % lens.length], from + i * 3.4)).join("");
  out.push(L(rows(-4.4, -PD / 2 + 5, 3, [22, 18, 20], -1) + rows(-4.4, 11, 3, [21, 23, 14], -1) + rows(4.4, -PD / 2 + 5, 9, [22, 24, 19, 23, 16, 22, 24, 20, 12], 1), { tone: "lo", free: true }));
  const ph = [-26, -PD / 2 + 15, -4.4, -PD / 2 + 28];
  const P3 = (x, y) => [x, y, zAt(x)];
  out.push(L(k.pathOf([P3(ph[0], ph[1]), P3(ph[2], ph[1]), P3(ph[2], ph[3]), P3(ph[0], ph[3])].map(at), true), { tone: "mid" }));
  out.push(L(k.pathOf([P3(ph[0], ph[3] - 3), P3(ph[0] + 8, ph[1] + 5), P3(ph[0] + 12, ph[1] + 9), P3(ph[0] + 15, ph[1] + 6.5), P3(ph[2], ph[3] - 3)].map(at)), { tone: "mid" }));
  out.push(L(k.pathOf([[0, -PD / 2, LOW], [0, PD / 2, LOW]].map(at)), { tone: "mid" }));
  return out.join("");
}
/* the ribbon: from the spine, over the near edge, hanging down the front of the stack */
const RIB = [[0, PD / 2 - 6, TOPZ + 0.05], [0, PD / 2, TOPZ], [0.4, PD / 2 + 2.2, BZ + 0.6], [0.8, PD / 2 + 2.4, BZ - 7]];
function ribbon() {
  const pts = RIB.map(at), w = 1.6;
  const left = pts.map(([x, y]) => [x - w, y]), right = pts.map(([x, y]) => [x + w, y]).reverse();
  return `<path class="bk-ribbon" d="${k.pathOf([...left, ...right], true)}"/>`;
}
const svg = k.figureSvg({ width: W, height: H, label: "An open book on a stack of books, a ribbon marking the place; a page turns every few seconds.",
  body: [stack(), book(), `<g class="bk-turn" style="display:none"><path class="bk-page"/><g class="bk-print"><path class="bk-lines bk-front"/><g class="bk-back"><path class="bk-lines" d="M4.4 5h22M4.4 8.4h18M4.4 11.8h20M4.4 31h21M4.4 34.4h23M4.4 37.8h14"/><path class="bk-lines bk-ph" d="M4.4 15H26V28H4.4ZM26 25L18 20 14 24 11 21.5 4.4 25"/></g></g></g>`, ribbon()] });

export const CSS = `
.bk-page{fill:var(--anatomy-top);stroke:var(--anatomy-mid);stroke-width:.6;stroke-linejoin:round}
.bk-turn.is-back .bk-page{fill:var(--anatomy-shade-3)}
.bk-lines{fill:none;stroke:var(--anatomy-lo);stroke-width:.6;stroke-linecap:round;vector-effect:non-scaling-stroke}
.bk-turn .bk-back,.bk-turn.is-back .bk-front{display:none}.bk-turn.is-back .bk-back{display:inline}
.bk-ph{stroke:var(--anatomy-mid)}
.bk-ribbon{fill:var(--anatomy-lit);stroke:none;opacity:.9}
`;
export const LIVE = `
function mount(root){
  const P = ${JSON.stringify(P)}, PW = ${PW}, PD = ${PD}, Z = ${TOPZ + 0.15}, A0 = Math.atan2(${3.2}, ${PW});
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const turn = root.querySelector(".bk-turn"), page = root.querySelector(".bk-page"), print = root.querySelector(".bk-print"), lines = root.querySelector(".bk-lines");
  const d0 = depthOf([0, 0, 0], P), VX = depthOf([1, 0, 0], P) - d0, VZ = depthOf([0, 0, 1], P) - d0;
  root.querySelector(".bk-front").setAttribute("d", [[4, 22], [7.4, 24], [10.8, 19], [14.2, 23], [17.6, 16], [21, 22], [24.4, 24], [27.8, 20], [31.2, 12]].map(([y, w]) => "M4.4 " + y + "h" + w).join(""));
  let live = false, frame = 0, t = 0, last = 0;
  const T = 3.6, TURN = 1.4;
  function draw(){
    /* a page lifts from the right block and lays itself on the left, turning about the spine (y axis) */
    const u = Math.max(0, Math.min(1, (t % T - (T - TURN)) / TURN));
    if (u <= 0){ turn.style.display = "none"; return; }
    const e = u * u * (3 - 2 * u), th = A0 + (Math.PI - 2 * A0) * e, c = Math.cos(th), s = Math.sin(th);
    const a = [0, -PD / 2, Z], b = [0, PD / 2, Z], fb = [PW * c, PD / 2, Z + PW * s], fa = [PW * c, -PD / 2, Z + PW * s];
    page.setAttribute("d", "M" + [a, fa, fb, b].map((p) => iso(p, P).map((n) => n.toFixed(2)).join(" ")).join("L") + "Z");
    const front = (VX * -s + VZ * c) > 0;
    turn.classList.toggle("is-back", !front);
    /* the printed lines ride the page: local x runs from the spine outward, local y along the spine */
    const o = iso([0, -PD / 2, Z], P), ux = iso([c, -PD / 2, Z + s], P), uy = iso([0, -PD / 2 + 1, Z], P);
    print.setAttribute("transform", "matrix(" + [ux[0] - o[0], ux[1] - o[1], uy[0] - o[0], uy[1] - o[1], o[0], o[1]].map((n) => n.toFixed(3)).join(" ") + ")");
    turn.style.display = "";
  }
  function tick(now){ const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60; last = now; t += dt; draw(); frame = live ? requestAnimationFrame(tick) : 0; }
  draw();
  return { start(){ live = true; if (still.matches || frame) return; last = 0; frame = requestAnimationFrame(tick); }, stop(){ live = false; } };
}
`;
export const SVG = svg;
if (process.argv[1].endsWith("stories.mjs")) { writeFileSync(new URL("./stories.html", import.meta.url), previewPage({ key: "stories", title: "Stories", svg, cap: "Student stories", sub: "Projects by NST students", live: LIVE, css: CSS })); console.log("wrote", svg.length); }
