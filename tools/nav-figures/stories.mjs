/* Student stories: a rotary card file. Each card is one student project; the knob turns the wheel, the cards in front fall
   forward and the cards behind lean back, and the card left standing upright in the gap is the story being read. */
import { writeFileSync } from "node:fs";
import { k, W, H, previewPage } from "./common.mjs";
import * as G from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/lathe.mjs";

/* ---- the model: the projects, and the wheel ---- */
const STORIES = [
  ["ICPC regionals", "First-years beat senior IIT-ians"],
  ["ICML 2026", "A research paper, accepted"],
  ["Heartline", "A gesture-based IoT interface"],
  ["Happy City Index", "Researcher & validator"],
  ["Google Summer of Code", "Six NST students selected"],
  ["Smart India Hackathon", "A national win"],
];
const N = 24;                                  /* cards on the rails: the six stories, four times round */
const CW = 58, CH = 32, R0 = 6, R1 = R0 + CH;  /* card width, height; hub radius where the slots ride the rails */
const ZA = 17, TRAY_TOP = 14;                  /* axle height; the cards always clear the tray */
/* where a card sits, by its offset d from the open card: behind lean back, in front fall forward, the open one stands */
const angleOf = (d) => d < 0 ? Math.max(-88, -8 + 6.2 * d) : d < 1 ? -8 + 58 * (d * d * (3 - 2 * d)) : Math.min(88, 50 + 6.2 * (d - 1));

/* ---- the world ---- */
const TRAY = { x: -40, y: -24, w: 80, d: 48, r: 5 };
const XC = CW / 2 + 5;                          /* side plates */
const P = k.fitProjection([...k.boxCorners(TRAY, -5, TRAY_TOP), [0, 0, ZA + R1 + 3], [0, R1, ZA], [0, -R1, ZA], [XC + 10, 0, ZA], [-XC - 4, 0, ZA + 12], [0, -4, ZA + R1 + 15]], W, H, { pad: 14, azimuth: 60 });
const at = (p) => k.iso(p, P);
const S = (paths, style) => k.solidSvg(paths, style);
const L = (d, style) => k.lineSvg(d, style);
const D = (points, style) => k.dotsSvg(points, style);
const byDepth = (pts) => [...pts].sort((a, b) => k.depthOf([a[0], a[1], 0], P) - k.depthOf([b[0], b[1], 0], P));
const AX = (x) => G.frameAlong([x, 0, ZA], [1, 0, 0]);

function tray() {
  const out = [`<path class="iso-halo" d="${k.haloOf(TRAY, -5, 5, P)}"/>`];
  for (const [x, y] of byDepth(k.corners(TRAY, 7))) {
    out.push(S(k.cylinder(x, y, 4.2, -5, 1, P, 20), { tone: "lo" }), S(k.cylinder(x, y, 3.2, -4, 4, P, 20), { tone: "mid" }));
  }
  out.push(S(k.slabOf(TRAY, 0, TRAY_TOP - 4, P, 8, 1), { tone: "mid", inner: L(k.sideSeam(TRAY, 3.2, P, 8), { tone: "faint" }) }));
  /* the well the cards turn over: a rim with an inset floor */
  const rim = k.insetPlan(TRAY, 0);
  out.push(S(k.slabOf(rim, TRAY_TOP - 4, 4, P, 8, 0.8), { tone: "mid" }));
  const well = { x: -31, y: -17, w: 62, d: 34, r: 3 };
  out.push(`<path class="iso-fill" style="fill:var(--anatomy-shade-1)" d="${k.planOutline(well, TRAY_TOP, P)}"/>`);
  out.push(L(k.planOutline(well, TRAY_TOP, P), { tone: "lo" }));
  out.push(L(k.planOutline(k.insetPlan(TRAY, 2.4), TRAY_TOP, P), { tone: "faint" }));
  const sc = [[-36.5, -20.5], [-36.5, 20.5], [36.5, -20.5], [36.5, 20.5]];
  out.push(L(sc.map(([x, y]) => k.ring(x, y, 1.3, TRAY_TOP, P, 12)).join(""), { tone: "lo" }), D(sc.map(([x, y]) => at([x, y, TRAY_TOP])), { size: 0.4 }));
  /* a label holder on the front: card slot outline and two rivets */
  const fx = (x, z) => at([x, TRAY.y + TRAY.d, z]);
  out.push(L(k.pathOf([fx(-14, 3), fx(14, 3), fx(14, 8.4), fx(-14, 8.4)], true), { tone: "lo" }));
  out.push(L(k.pathOf([fx(-12, 4.4), fx(12, 4.4), fx(12, 7), fx(-12, 7)], true), { tone: "faint" }));
  out.push(D([fx(-16.2, 5.7), fx(16.2, 5.7)], { size: 0.4 }));
  return out.join("");
}
function cheek(x, near) {
  const out = [];
  const F = AX(x);
  /* an upright from the tray to the axle, then a round plate on it */
  out.push(S(k.slabOf({ x: x - 1.6, y: -4, w: 3.2, d: 8, r: 1 }, TRAY_TOP, ZA - TRAY_TOP, P, 2, 0.3), { tone: "mid" }));
  out.push(S(G.disc(-1.6, 1.6, 9.5, F, P), { tone: "mid", inner: L(G.arcOf(F, 0, 9.5, P), { tone: "faint" }) }));
  out.push(L(G.circleOf(AX(x + 1.6), 0, 6.4, P, 40), { tone: "faint" }));
  out.push(D(G.dotsOf(AX(x + 1.6), 0, 7.8, 6, P, { all: true, phase: 0.3 }), { size: 0.4 }));
  return out.join("");
}
function axle() {
  const F = AX(-XC - 3);
  const out = [S(G.disc(0, 2 * XC + 6, 1.5, F, P), { tone: "mid", crease: "none" })];
  /* two wire rails: rings the card slots ride on */
  for (const x of [-CW / 2 + 9, CW / 2 - 9]) out.push(L(G.circleOf(AX(x), 0, R0 - 0.6, P, 48), { tone: "mid" }));
  return out.join("");
}
function knob() {
  const F = AX(XC + 1.6);
  const out = [S(G.disc(0, 2, 3.4, F, P), { tone: "mid" })];
  out.push(S(G.disc(2, 7, 7.2, F, P), { tone: "mid", inner: k.fadedSvg(G.ribsOf(F, 2, 7, 7.2, 40, P, { fade: [0.04, 0.4] }), { tone: "lo" }) }));
  out.push(S(G.disc(7, 7.8, 5.6, F, P), { tone: "mid" }));
  return out.join("");
}
const KNOB_FACE = G.frameAlong([XC + 9.4, 0, ZA], [1, 0, 0]);

/* each card: a group positioned per frame (its plane's matrix); local u along x, v down from the outer edge */
const tabAt = (i) => 4 + (i % 6) * 8.4;
/* a small drawing in each card's photo window, one per story: trophy, paper, pulse, city, code, flag */
const GLYPH = [
  "M7.2 7h4.4v2.2a2.2 2.2 0 0 1-4.4 0zM9.4 11.4v1.6M7.6 13.4h3.6M7.2 7.6H6.2a1.2 1.2 0 0 0 1.2 1.8M11.6 7.6h1a1.2 1.2 0 0 1-1.2 1.8",
  "M6.8 6.4h4l1.6 1.6v6h-5.6zM10.8 6.4v1.6h1.6M8 9.6h3.2M8 11.2h3.2M8 12.8h2",
  "M5.4 10.2h2.2l1-2.6 1.6 5.2 1.2-2.6h2.6",
  "M6 14V10.4h2V14M8 14V7.8h2.6V14M10.6 14v-3h2.2v3M5.4 14h8",
  "M8.2 7.6L6 10l2.2 2.4M10.6 7.6L12.8 10l-2.2 2.4",
  "M7 13.8V6.4M7 6.8h5l-1.2 1.6 1.2 1.6H7"];
function card(i) {
  const t = tabAt(i);
  const shape = `M0 0H${t}L${t + 0.8} -3.2H${t + 7.4}L${t + 8.2} 0H${CW}V${CH}H0Z`;
  const slots = [CW / 2 - (CW / 2 - 9), CW / 2 + (CW / 2 - 9)].map((u) => `M${u - 2.2} ${CH - 1.2}h4.4a0.9 0.9 0 0 1 0 1.8h-4.4a0.9 0.9 0 0 1 0-1.8z`).join("");
  const s = STORIES[i % STORIES.length];
  const rules = [[17, 6.6, 26], [17, 10.4, 34], [17, 13.6, 22], [5, 21, 46], [5, 24.2, 40], [5, 27.4, 30]];
  return `<g class="rc-card" data-i="${i}"><g class="rc-plane"><path class="rc-face" d="${shape}"/>
    <g class="rc-print"><rect class="rc-photo" x="4.6" y="5.2" width="9.6" height="9.6" rx="0.8"/><path class="rc-ph" d="${GLYPH[i % GLYPH.length]}"/>
    <path class="rc-rule${i === 0 ? "" : ""}" d="${rules.map(([x, y, w]) => `M${x} ${y}h${w}`).join("")}"/><path class="rc-tabline" d="M${t + 2} -1.2h4.2"/><path class="rc-slot" d="${slots}"/></g>
    <path class="rc-dim" d="${shape}"/></g></g>`;
}
const svg = k.figureSvg({ width: W, height: H, label: "A rotary card file. Each index card is one student project; turning the knob rolls the cards round the axle, and the card left standing in the gap is the story being read.",
  body: [tray(), cheek(-XC, false), axle(), `<g class="rc-cards">${Array.from({ length: N }, (_, i) => card(i)).join("")}</g>`, cheek(XC, true), knob(), `<path class="iso-line rc-pointer" data-tone="lit" data-free="end" d=""/>`] });

export const CSS = `
.rc-face{fill:var(--anatomy-face);stroke:var(--anatomy-lo);stroke-width:.55;vector-effect:non-scaling-stroke;stroke-linejoin:round}
.rc-card.is-back .rc-face{fill:var(--anatomy-shade-3)}
.rc-card.is-back .rc-print{display:none}
.rc-photo{fill:var(--anatomy-shade-3);stroke:var(--anatomy-lo);stroke-width:.45;vector-effect:non-scaling-stroke}
.rc-ph,.rc-rule,.rc-tabline,.rc-slot{fill:none;stroke:var(--anatomy-lo);stroke-width:.5;vector-effect:non-scaling-stroke;stroke-linecap:round}
.rc-slot{stroke:var(--anatomy-mid)}
.rc-card.is-open .rc-rule{stroke:var(--anatomy-mid)}
.rc-card.is-open .rc-tabline,.rc-card.is-open .rc-ph{stroke:var(--anatomy-lit);stroke-width:.9}
.rc-card.is-open .rc-face{stroke:var(--anatomy-lit)}
.rc-dim{fill:var(--anatomy-hi);stroke:none;pointer-events:none}
.rc-pointer{stroke-width:1}
`;
export const LIVE = `
function mount(root, say){
  const P = ${JSON.stringify(P)};
  const STORIES = ${JSON.stringify(STORIES)};
  const N = ${N}, CW = ${CW}, CH = ${CH}, R1 = ${R1}, ZA = ${ZA};
  const angleOf = ${angleOf.toString()};
  const KF = ${JSON.stringify(KNOB_FACE)};
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const svg = root.querySelector("svg"), host = svg.querySelector(".rc-cards"), pointer = svg.querySelector(".rc-pointer");
  const cards = [...host.querySelectorAll(".rc-card")].map((el) => ({ el, i: +el.dataset.i, plane: el.querySelector(".rc-plane"), dim: el.querySelector(".rc-dim") }));
  const d0 = depthOf([0, 0, 0], P), V = [depthOf([1, 0, 0], P) - d0, depthOf([0, 1, 0], P) - d0, depthOf([0, 0, 1], P) - d0];
  const M = (O, u, v) => { const o = iso(O, P), a = iso([O[0] + u[0], O[1] + u[1], O[2] + u[2]], P), b = iso([O[0] + v[0], O[1] + v[1], O[2] + v[2]], P); return "matrix(" + [a[0] - o[0], a[1] - o[1], b[0] - o[0], b[1] - o[1], o[0], o[1]].map((n) => n.toFixed(3)).join(" ") + ")"; };
  let pos = 0, vel = 0, target = 0, visible = false, live = false, frame = 0, last = 0, hold = 0, manual = false, shown = -1;
  function draw(){
    const list = [];
    cards.forEach((c) => {
      let d = ((c.i - pos) % N + N) % N; if (d > N / 2) d -= N;
      const ph = angleOf(d) * Math.PI / 180, s = Math.sin(ph), co = Math.cos(ph);
      const out = [0, s, co], O = [-CW / 2, R1 * s, ZA + R1 * co];
      const front = (V[1] * co - V[2] * s) > 0;
      c.plane.setAttribute("transform", M(O, [1, 0, 0], [0, -out[1], -out[2]]));
      c.el.classList.toggle("is-back", !front);
      c.el.classList.toggle("is-open", Math.abs(d) < 0.5);
      c.dim.style.opacity = (front ? 0.06 * Math.max(0, s) : 0.02 + 0.035 * Math.abs(s)).toFixed(3);
      list.push([depthOf([0, (R1 + 6) / 2 * s, ZA + (R1 + 6) / 2 * co], P), c.el]);
    });
    list.sort((a, b) => a[0] - b[0]).forEach(([, el]) => host.appendChild(el));
    /* the knob's pointer turns with the wheel: one card is 360 / N degrees */
    const a = pos / N * Math.PI * 2, r = 4.6;
    const p0 = iso([KF.o[0], KF.o[1] - Math.sin(a) * 1.2, KF.o[2] + Math.cos(a) * 1.2], P), p1 = iso([KF.o[0], KF.o[1] + Math.sin(a) * r, KF.o[2] - Math.cos(a) * r], P);
    pointer.setAttribute("d", "M" + p0[0].toFixed(2) + " " + p0[1].toFixed(2) + "L" + p1[0].toFixed(2) + " " + p1[1].toFixed(2));
    const open = ((Math.round(pos) % N) + N) % N, st = STORIES[open % STORIES.length];
    if (open !== shown){ shown = open; say(st[0] + " · " + st[1]); root.setAttribute("aria-label", "Card file open at: " + st[0] + ", " + st[1]); }
  }
  function tick(now){
    const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60; last = now;
    const calm = still.matches, stiff = 60, drag = calm ? 2 * Math.sqrt(60) : 11;
    for (let n = 0; n < 4; n++){ vel += ((target - pos) * stiff - vel * drag) * dt / 4; pos += vel * dt / 4; }
    if (Math.abs(target - pos) < 0.002 && Math.abs(vel) < 0.002){ pos = target; vel = 0; if (!manual){ hold += dt; if (hold > 2.6){ hold = 0; target += 1; } } }
    draw();
    frame = visible && live ? requestAnimationFrame(tick) : 0;
  }
  function kick(){ if (!frame && visible && live){ last = 0; frame = requestAnimationFrame(tick); } }
  new IntersectionObserver((e) => { visible = e[e.length - 1].isIntersecting; kick(); }).observe(root);
  root.addEventListener("pointermove", (e) => { const r = svg.getBoundingClientRect(); const i = Math.max(0, Math.min(5, Math.floor((e.clientX - r.left) / r.width * 6))); manual = true; const base = Math.round(target / 6) * 6; target = base + i; kick(); });
  root.addEventListener("pointerleave", () => { manual = false; hold = 0; });
  draw();
  return { start(){ live = true; if (still.matches){ draw(); return; } kick(); }, stop(){ live = false; } };
}
`;
export const SVG = svg;
if (process.argv[1].endsWith("stories.mjs")) {
  writeFileSync(new URL("./stories.html", import.meta.url), previewPage({ title: "Stories", svg, readout: STORIES[0].join(" · "), cap: "Student stories", sub: "Projects by NST students", live: LIVE }).replace("</style>", CSS + "</style>"));
  console.log("wrote stories.html", svg.length);
}
