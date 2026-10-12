/* Student life: a 24-hour segment timer, programmed with a day at NST. Its 48 tappets are half-hours; a pushed-in tappet is a
   half-hour that is booked. The dial turns once a day under the fixed pointer, and the block under the pointer is what is on now. */
import { writeFileSync } from "node:fs";
import { k, W, H, previewPage } from "./common.mjs";
import * as G from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/lathe.mjs";

/* ---- the model: the day (placeholder times until NST's timetable is confirmed) ---- */
const DAY = [
  [7, 8, "Breakfast"], [9, 13, "Classes"], [13, 14, "Lunch"], [14, 17, "Labs & projects"],
  [17.5, 19, "Sports"], [20, 22.5, "Clubs & builds"],
];
const SLOTS = 48;
const blockAt = (h) => DAY.findIndex(([a, b]) => h >= a && h < b);

/* ---- the world ---- */
const BODY = { x: -36, y: -36, w: 72, d: 72, r: 14 }, BZ = 0, BH = 20;
const DIAL_R = 22.4, RIM_IN = 24.4, RIM_OUT = 29.4, COLLAR = 31, TOP = BH;
const POINTER_A = 150 * Math.PI / 180;             /* the pointer faces the viewer (azimuth 60) */
const polar = (r, a) => [r * Math.sin(a), -r * Math.cos(a)];
const P = k.fitProjection([...k.boxCorners(BODY, -4, BH + 8), [0, 0, BH + 14]], W, H, { pad: 26, azimuth: 60 });
const at = (p) => k.iso(p, P);
const S = (paths, style) => k.solidSvg(paths, style);
const L = (d, style) => k.lineSvg(d, style);
const D = (points, style) => k.dotsSvg(points, style);
const byDepth = (pts) => [...pts].sort((a, b) => k.depthOf([a[0], a[1], 0], P) - k.depthOf([b[0], b[1], 0], P));

function body() {
  const out = [`<path class="iso-halo" d="${k.haloOf(BODY, -4, 4, P)}"/>`];
  for (const [x, y] of byDepth(k.corners(BODY, 11))) out.push(S(k.cylinder(x, y, 4.4, -4, 1, P, 20), { tone: "lo" }), S(k.cylinder(x, y, 3.4, -3, 3, P, 20), { tone: "mid" }));
  out.push(S(k.slabOf(BODY, BZ, BH - 3, P, 10, 0.8), { tone: "mid", inner: L(k.sideSeam(BODY, 6, P, 10), { tone: "faint" }) }));
  out.push(S(k.slabOf(k.insetPlan(BODY, 1), BH - 3, 3, P, 10, 0.8), { tone: "mid" }));
  out.push(L(k.planOutline(k.insetPlan(BODY, 3.2), TOP, P, 10), { tone: "faint" }));
  const sc = k.corners(BODY, 6.6);
  out.push(L(sc.map(([x, y]) => k.ring(x, y, 1.5, TOP, P, 12)).join(""), { tone: "lo" }), D(sc.map(([x, y]) => at([x, y, TOP])), { size: 0.42 }));
  /* front face (+y): vents as closed slots, and the status lamp */
  const fy = BODY.y + BODY.d;
  const slot = (x) => k.pathOf([[x, fy, 9], [x + 7, fy, 9], [x + 7, fy, 11], [x, fy, 11]].map(at), true);
  out.push(L([-26, -17, -8].map(slot).join(""), { tone: "lo" }));
  const lamp = G.frameAlong([16, fy, 10], [0, 1, 0]);
  out.push(S(G.disc(0, 1, 3.4, lamp, P), { tone: "mid" }));
  out.push(`<g class="tm-lamp">${S(G.disc(1, 1.8, 2.2, lamp, P), { tone: "hi", lit: true })}</g>`);
  /* side face (+x): the override slide, a slot with its knob */
  const sx = BODY.x + BODY.w;
  out.push(L(k.pathOf([[sx, -14, 8], [sx, 6, 8], [sx, 6, 12], [sx, -14, 12]].map(at), true), { tone: "lo" }));
  out.push(S(k.slabOf({ x: sx - 0.4, y: -9, w: 2.4, d: 5, r: 0.8 }, 8.6, 2.8, P, 2, 0.3), { tone: "mid" }));
  /* the fixed pointer: a block on the deck, its arrow toward the dial */
  return out.join("");
}
const PB = polar(COLLAR + 3.4, POINTER_A);
const POINTER = (() => { const a = polar(COLLAR + 1.2, POINTER_A), b = polar(RIM_OUT + 0.8, POINTER_A); return [[a[0], a[1], TOP + 2.4], [b[0], b[1], TOP + 2.4]]; })();
function collar() {
  const out = [S(k.cylinder(0, 0, COLLAR, TOP, 2, P, 72, 0.4), { tone: "mid" })];
  out.push(L(k.ring(0, 0, COLLAR - 1.2, TOP + 2, P, 72), { tone: "faint" }));
  return out.join("");
}

const svg = k.figureSvg({ width: W, height: H, label: "A 24-hour segment timer programmed with a day at NST. Forty-eight tappets around the dial are half-hours; the pushed-in ones are booked. The dial turns under a fixed pointer, and the block under it is what is on now.",
  body: [body(), collar(), `<g class="tm-far"></g><g class="tm-dial"></g><g class="tm-near"></g>`, S(k.cylinder(PB[0], PB[1], 2.4, TOP, 2.4, P, 18, 0.3), { tone: "mid" }), L(k.pathOf(POINTER.map(at)), { tone: "hi" }).replace("<path", '<path data-free="end"'), D([at(POINTER[1])], { size: 0.7, tone: "hi" })] });

export const CSS = `
.tm-on .iso-solid[data-lit]>.iso-top{fill:var(--anatomy-lit);}
.tm-lamp.is-off .iso-solid>.iso-top,.tm-lamp.is-off .iso-solid>.iso-shade{fill:var(--anatomy-shade-2)}
.tm-lamp:not(.is-off) .iso-solid>.iso-top{fill:var(--anatomy-lit)}
.tm-lamp:not(.is-off) .iso-solid>.iso-shade{fill:var(--anatomy-lit)}
`;
export const LIVE = `
function mount(root, say){
  const P = ${JSON.stringify(P)};
  const DAY = ${JSON.stringify(DAY)}, SLOTS = ${SLOTS};
  const DIAL_R = ${DIAL_R}, RIM_IN = ${RIM_IN}, RIM_OUT = ${RIM_OUT}, TOP = ${TOP + 2}, PA = ${POINTER_A};
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const svg = root.querySelector("svg"), far = svg.querySelector(".tm-far"), dial = svg.querySelector(".tm-dial"), near = svg.querySelector(".tm-near"), lamp = svg.querySelector(".tm-lamp");
  const blockAt = (h) => DAY.findIndex(([a, b]) => h >= a && h < b);
  const polar = (r, a) => [r * Math.sin(a), -r * Math.cos(a)];
  const dc = depthOf([0, 0, TOP], P);
  const booked = Array.from({ length: SLOTS }, (_, i) => blockAt(i / 2 + 0.25));
  function sector(r0, r1, a0, a1, n){ const pts = []; for (let j = 0; j <= n; j++) pts.push(polar(r1, a0 + (a1 - a0) * j / n)); for (let j = n; j >= 0; j--) pts.push(polar(r0, a0 + (a1 - a0) * j / n)); return pts; }
  let hour = 9.25, target = 9.25, visible = false, live = false, frame = 0, last = 0, manual = false, said = "";
  function draw(){
    const turn = -hour / 24 * Math.PI * 2;      /* the slot for "now" sits under the pointer */
    const now = blockAt(hour);
    const items = [];
    for (let i = 0; i < SLOTS; i++){
      const a = PA + turn + (i + 0.5) / SLOTS * Math.PI * 2, half = Math.PI / SLOTS - 0.012;
      const on = booked[i] >= 0, h = on ? 1.1 : 3.4, lit = on && booked[i] === now;
      const svgs = solidSvg(extrude(sector(RIM_IN, RIM_OUT, a - half, a + half, 2), TOP, h, P), { tone: on ? "hi" : "mid", lit });
      const c = polar((RIM_IN + RIM_OUT) / 2, a);
      items.push([depthOf([c[0], c[1], TOP], P), svgs]);
    }
    items.sort((x, y) => x[0] - y[0]);
    far.innerHTML = items.filter((x) => x[0] < dc).map((x) => x[1]).join("");
    near.innerHTML = items.filter((x) => x[0] >= dc).map((x) => x[1]).join("");
    /* the dial: a disc whose hour ticks turn with it, a knurled hub, a line from the hub to the 00:00 tick */
    const t = radialTicks(0, 0, DIAL_R - 1.2, 96, 4, TOP + 3, [1.1, 2.6], P, PA + turn, Math.PI * 2);
    const z0 = polar(DIAL_R - 3.8, PA + turn), z1 = polar(2, PA + turn);
    dial.innerHTML = solidSvg(cylinder(0, 0, DIAL_R, TOP, 3, P, 64, 0.5), { tone: "hi", crease: "lo" }) +
      lineSvg(ring(0, 0, DIAL_R - 1.2, TOP + 3, P, 72), { tone: "lo" }) + lineSvg(ring(0, 0, DIAL_R - 3.8, TOP + 3, P, 72), { tone: "faint" }) + lineSvg(t.minor, { tone: "lo" }) + lineSvg(t.major, { tone: "mid" }) + lineSvg(lineOnTop(z1, z0, TOP + 3, P), { tone: "hi" }) +
      solidSvg(cylinder(0, 0, 4.4, TOP + 3, 2.6, P, 28), { tone: "mid" }) + lineSvg(knurl(0, 0, 4.4, TOP + 3, TOP + 5.6, 22, P), { tone: "lo" });
    lamp.classList.toggle("is-off", now < 0);
    const hh = Math.floor(hour) % 24, mm = Math.floor((hour % 1) * 60 / 15) * 15;
    const text = String(hh).padStart(2, "0") + ":" + String(mm).padStart(2, "0") + " · " + (now >= 0 ? DAY[now][2] : "Free time");
    if (text !== said){ said = text; say(text); root.setAttribute("aria-label", "Day timer at " + text); }
  }
  function tick(now){
    const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60; last = now;
    if (!manual) target += dt * 0.9;               /* the tour: about 27 seconds a day */
    hour += (target - hour) * (still.matches ? 1 : 1 - Math.exp(-dt / 0.35));
    if (hour >= 24 && target >= 24){ hour -= 24; target -= 24; }
    draw();
    frame = visible && live ? requestAnimationFrame(tick) : 0;
  }
  function kick(){ if (!frame && visible && live){ last = 0; frame = requestAnimationFrame(tick); } }
  new IntersectionObserver((e) => { visible = e[e.length - 1].isIntersecting; kick(); }).observe(root);
  root.addEventListener("pointermove", (e) => { const r = svg.getBoundingClientRect(); const h = Math.max(0, Math.min(23.75, (e.clientX - r.left) / r.width * 24)); manual = true; let want = h; while (want < hour - 12) want += 24; while (want > hour + 12) want -= 24; target = want; kick(); });
  root.addEventListener("pointerleave", () => { manual = false; });
  draw();
  return { start(){ live = true; if (still.matches){ draw(); return; } kick(); }, stop(){ live = false; } };
}
`;
export const SVG = svg;
if (process.argv[1].endsWith("life.mjs")) {
  writeFileSync(new URL("./life.html", import.meta.url), previewPage({ title: "Life", svg, readout: "09:15 · Classes", cap: "Student life", sub: "Life of NST students", live: LIVE }).replace("</style>", CSS + "</style>"));
  console.log("wrote life.html", svg.length);
}
