/* Global opportunities: two shores across a strip of sea; a small airliner takes off from home, flies the dotted route over
   the water and lands abroad, its shadow crossing the ground below. */
import { writeFileSync } from "node:fs";
import { k, G, W, H, previewPage } from "./common.mjs";

const SEA = { x: -64, y: -34, w: 128, d: 68, r: 12 };
const HOME = { x: -64, y: -34, w: 40, d: 68, r: 12 }, AWAY = { x: 24, y: -34, w: 40, d: 68, r: 12 };
const LAND = 2.4;
const A = [-44, 12], B = [44, -12], ALT = 26, CRUISE = 4.2;     /* CRUISE: the fuselage axis above the ground when parked */
const DIR = (() => { const d = [B[0] - A[0], B[1] - A[1]], n = Math.hypot(d[0], d[1]); return [d[0] / n, d[1] / n, 0]; })();
const LAT = [-DIR[1], DIR[0], 0];
const P = k.fitProjection([...k.boxCorners(SEA, -3, 0), [0, 0, ALT + 12], [-30, -34, 38], [44, -40, 37]], W, H, { pad: 30, azimuth: 52 });
const at = (p) => k.iso(p, P);
const S = (paths, style) => k.solidSvg(paths, style);
const L = (d, style) => k.lineSvg(d, style);

function ground() {
  const out = [`<path class="iso-halo" d="${k.haloOf(SEA, -3, 3, P)}"/>`];
  out.push(`<g class="gl-sea">${S(k.slabOf(SEA, -3, 3, P, 10, 0.6), { tone: "lo" })}</g>`);
  /* ripples on the water: short closed slots */
  out.push(L([[-6, -18], [4, 0], [-8, 16], [12, -22], [10, 20]].map(([x, y]) => k.planOutline({ x, y, w: 8, d: 1, r: 0.5 }, 0, P, 2)).join(""), { tone: "faint" }));
  for (const land of [HOME, AWAY]) {
    out.push(S(k.slabOf(land, 0, LAND, P, 10, 0.6), { tone: "mid" }));
  }
  /* runways: a strip on each shore with a centre line, and a pad marker */
  for (const [c, sgn] of [[A, 1], [B, -1]]) {
    const len = 22, w = 5;
    const q = (s, l) => [c[0] + DIR[0] * s + LAT[0] * l, c[1] + DIR[1] * s + LAT[1] * l, LAND + 0.3];
    out.push(`<path class="gl-strip" d="${k.pathOf([q(-len / 2, -w / 2), q(len / 2, -w / 2), q(len / 2, w / 2), q(-len / 2, w / 2)].map(at), true)}"/>`);
    out.push(L(k.pathOf([q(-len / 2, -w / 2), q(len / 2, -w / 2), q(len / 2, w / 2), q(-len / 2, w / 2)].map(at), true), { tone: "mid" }));
    out.push(L(k.pathOf([q(-len / 2, 0), q(len / 2, 0)].map(at)), { tone: "lo", dashed: true }));
  }
  /* a small terminal on each shore */
  out.push(S(k.slabOf({ x: -60, y: -28, w: 14, d: 9, r: 1 }, LAND, 7, P, 2, 0.4), { tone: "mid" }));
  out.push(S(k.slabOf({ x: 46, y: 18, w: 12, d: 9, r: 1 }, LAND, 6, P, 2, 0.4), { tone: "mid" }));
  out.push(S(k.cylinder(-51, -25, 1.2, LAND + 7, 6, P, 14), { tone: "mid", crease: "none" }), S(k.cylinder(-51, -25, 2.6, LAND + 13, 2.2, P, 18, 0.3), { tone: "mid" }));
  return out.join("");
}
/* the route: a dotted arc from runway to runway */
const route = (t) => [A[0] + (B[0] - A[0]) * t, A[1] + (B[1] - A[1]) * t, LAND + 0.3 + (ALT + CRUISE) * Math.sin(Math.PI * t)];   /* drawn from runway centre to runway centre */
const ROUTE = L(k.pathOf(Array.from({ length: 41 }, (_, i) => at(route(i / 40)))), { tone: "lo", dotted: true });

/* the airliner, built at the origin heading along DIR, then moved whole */
function plane() {
  const parts = [];
  const o = [0, 0, 0];
  const FUS = G.frameAlong([-DIR[0] * 14, -DIR[1] * 14, 0], DIR);
  parts.push({ c: [0, 0, 0], svg: S(G.solidOf([[0, 0.9], [3, 1.9, 1], [7, 2.4], [21, 2.4], [25, 2.1, 1], [27.4, 1.3, 1], [28, 0]], FUS, P), { tone: "hi", lit: true }) });
  const flat = (cu, cv, z) => G.frameOf([DIR[0] * cu + LAT[0] * cv, DIR[1] * cu + LAT[1] * cv, z], [0, 0, 1], DIR.slice(), LAT.slice());
  for (const side of [-1, 1]) {
    const wing = side > 0 ? [[2, 0], [-5, 14], [-8, 14], [-5, 0]] : [[2, 0], [-5, 0], [-8, -14], [-5, -14]];
    parts.push({ c: [LAT[0] * 7 * side, LAT[1] * 7 * side, -1], svg: S(G.prismOf(flat(0, side * 1.2, -1.2), wing, 0, 0.7, P), { tone: "hi", lit: true }) });
    const tail = side > 0 ? [[-10, 0], [-12.6, 5.4], [-13.8, 5.4], [-13, 0]] : [[-10, 0], [-13, 0], [-13.8, -5.4], [-12.6, -5.4]];
    parts.push({ c: [LAT[0] * 3 * side - DIR[0] * 12, LAT[1] * 3 * side - DIR[1] * 12, 0.4], svg: S(G.prismOf(flat(0, side * 0.8, 0.2), tail, 0, 0.5, P), { tone: "hi", lit: true }) });
    const eng = G.frameAlong([DIR[0] * -3.4 + LAT[0] * 6.4 * side, DIR[1] * -3.4 + LAT[1] * 6.4 * side, -2.3], DIR);
    parts.push({ c: [LAT[0] * 6.4 * side, LAT[1] * 6.4 * side, -2.3], svg: S(G.solidOf([[0, 1.2], [5, 1.3], [5.6, 0.9]], eng, P), { tone: "hi", lit: true }) });
  }
  const FIN = G.frameOf([-DIR[0] * 10, -DIR[1] * 10, 1.6], LAT.slice(), DIR.slice(), [0, 0, 1]);
  parts.push({ c: [-DIR[0] * 12, -DIR[1] * 12, 4], svg: S(G.prismOf(FIN, [[0, 0], [-3.6, 6.2], [-4.8, 6.2], [-4, 0]], -0.3, 0.3, P), { tone: "hi", lit: true }) });
  parts.sort((a, b) => k.depthOf(a.c, P) - k.depthOf(b.c, P));
  return parts.map((p) => p.svg).join("");
}
const CLOUD = (c, s) => [[0, 0, 0, 3.6], [3.4, 1, -0.6, 2.8], [-3.2, -0.8, -0.8, 2.6]].map(([dx, dy, dz, r]) => S(G.sphereOf([c[0] + dx * s, c[1] + dy * s, c[2] + dz * s], r * s, P), { tone: "lo" })).join("");
const svg = k.figureSvg({ width: W, height: H, label: "Two shores across a strip of sea. A small airliner takes off from home, flies the dotted route over the water and lands abroad.",
  body: [ground(), ROUTE, `<ellipse class="gl-shadow" rx="9" ry="4"/>`, `<g class="gl-cloud" data-c="0">${CLOUD([-30, -34, 34], 0.8)}</g>`, `<g class="gl-plane">${plane()}</g>`, `<g class="gl-cloud" data-c="1">${CLOUD([44, -40, 34], 0.7)}</g>`] });

export const CSS = `
.gl-strip{fill:var(--anatomy-shade-2);stroke:none}
.gl-shadow{fill:var(--anatomy-halo);opacity:.16;filter:blur(1.4px)}
.gl-plane{transition:opacity .45s ease}
.gl-plane.is-gone{opacity:0}
.dn-iso[data-fig="global"] .gl-sea .iso-top{fill:#D2E4FA}
`;
export const LIVE = `
function mount(root){
  const P = ${JSON.stringify(P)}, A = ${JSON.stringify(A)}, B = ${JSON.stringify(B)}, ALT = ${ALT}, BASE = ${LAND + CRUISE}, LAND = ${LAND};
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const plane = root.querySelector(".gl-plane"), shadow = root.querySelector(".gl-shadow"), clouds = [...root.querySelectorAll(".gl-cloud")];
  let live = false, frame = 0, t = 0, last = 0;
  const FLY = 6.4, REST = 1.4, CYCLE = FLY + REST * 2;
  const ease = (u) => u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2;
  function draw(){
    const c = t % CYCLE, u = c < REST ? 0 : c < REST + FLY ? ease((c - REST) / FLY) : 1;
    const x = A[0] + (B[0] - A[0]) * u, y = A[1] + (B[1] - A[1]) * u, z = BASE + ALT * Math.sin(Math.PI * u);
    plane.setAttribute("transform", translateAlong(P, [x, y, z]));
    plane.classList.toggle("is-gone", c > CYCLE - 0.5 || c < 0.1);
    /* the shadow lies on whatever is below: a shore or the water */
    const g = Math.abs(x) > 20 ? LAND : 0, sc = 1 - (z - BASE) / (ALT * 1.6), p = iso([x, y, g], P);
    shadow.setAttribute("transform", "translate(" + p[0].toFixed(2) + " " + p[1].toFixed(2) + ") scale(" + sc.toFixed(3) + ")");
    shadow.style.opacity = (0.2 * sc * (plane.classList.contains("is-gone") ? 0 : 1)).toFixed(3);
    /* clouds drift slowly with the wind */
    clouds.forEach((el, i) => el.setAttribute("transform", translateAlong(P, [Math.sin(t * 0.12 + i * 2) * 5, 0, 0])));
  }
  function tick(now){ const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60; last = now; t += dt; draw(); frame = live ? requestAnimationFrame(tick) : 0; }
  t = REST + FLY * 0.42; draw();
  return { start(){ live = true; if (still.matches || frame) return; last = 0; frame = requestAnimationFrame(tick); }, stop(){ live = false; } };
}
`;
export const SVG = svg;
if (process.argv[1].endsWith("global.mjs")) { writeFileSync(new URL("./global.html", import.meta.url), previewPage({ key: "global", title: "Global", svg, cap: "Global opportunities", sub: "China · Thailand · Singapore", live: LIVE, css: CSS })); console.log("wrote", svg.length); }
