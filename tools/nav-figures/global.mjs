/* Global opportunities: a split-flap departures board on a desk stand. Its flaps fall one character at a time through the drum,
   as a real Solari board's do, until they spell the next trip city; the four flaps below spell its great-circle distance from
   Delhi in km. Cities and distances come from one model, which also writes the readout. */
import { writeFileSync } from "node:fs";
import { k, W, H, previewPage, planeMatrix, quad } from "./common.mjs";
import * as G from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/lathe.mjs";

/* ---- the model ---- */
const R = 6371, rad = (d) => d * Math.PI / 180;
const DELHI = [28.6139, 77.2090];
const km = (c) => { const dl = rad(c[0] - DELHI[0]), dn = rad(c[1] - DELHI[1]); const h = Math.sin(dl / 2) ** 2 + Math.cos(rad(DELHI[0])) * Math.cos(rad(c[0])) * Math.sin(dn / 2) ** 2; return Math.round(2 * R * Math.asin(Math.sqrt(h))); };
const TRIPS = [["Hangzhou", "HGH", [30.2741, 120.1551]], ["Bangkok", "BKK", [13.7563, 100.5018]], ["Singapore", "SIN", [1.3521, 103.8198]]].map(([name, code, at]) => ({ name, code, km: km(at) }));   /* IATA: Hangzhou Xiaoshan, Bangkok Suvarnabhumi, Singapore Changi */

/* ---- the world ---- */
const BASE = { x: -76, y: -26, w: 152, d: 38, r: 5 }, BASE_H = 6, FOOT = 4;
const HOUSING = { x: -70, y: -16, w: 140, d: 16, r: 2.5 }, HZ = 18, HH = 54;          /* front face at y = 0 */
const MOD = { n: 9, w: 12.6, gap: 1.5, d: 2.2, z: 42, h: 21 };                          /* city row */
const DIG = { n: 4, w: 9.4, gap: 1.3, d: 2, z: 23, h: 14.5 };                            /* km row */
const X0 = -64.2;
const P = k.fitProjection([...k.boxCorners(BASE, -BASE_H - FOOT, 0), ...k.boxCorners(HOUSING, HZ, HZ + HH + 1), [HOUSING.x + HOUSING.w, 6, HZ], [-74, 0, HZ + HH]], W, H, { pad: 14, azimuth: 60 });
const at = (p) => k.iso(p, P);
const S = (paths, style) => k.solidSvg(paths, style);
const L = (d, style) => k.lineSvg(d, style);
const D = (points, style) => k.dotsSvg(points, style);
const byDepth = (pts) => [...pts].sort((a, b) => k.depthOf([a[0], a[1], 0], P) - k.depthOf([b[0], b[1], 0], P));

function base() {
  const out = [`<path class="iso-halo" d="${k.haloOf(BASE, -BASE_H - FOOT, BASE_H, P)}"/>`];
  for (const [x, y] of byDepth(k.corners(BASE, 12))) {
    out.push(S(k.cylinder(x, y, 5.2, -BASE_H - FOOT, 1.2, P, 24), { tone: "lo" }));
    out.push(S(k.cylinder(x, y, 4, -BASE_H - FOOT + 1.2, FOOT - 1.2, P, 24), { tone: "mid" }));
  }
  out.push(S(k.slabOf(BASE, -BASE_H, BASE_H, P, 8, 1.2), { tone: "mid" }));
  out.push(L(k.planOutline(k.insetPlan(BASE, 3.5), 0, P), { tone: "faint" }));
  const screws = k.corners(BASE, 6.5);
  out.push(L(screws.map(([x, y]) => k.ring(x, y, 1.6, 0, P, 14)).join(""), { tone: "lo" }), D(screws.map(([x, y]) => at([x, y, 0])), { size: 0.45 }));
  /* label plate in front of the housing: three printed rules */
  const plate = { x: -36, y: 2.6, w: 46, d: 5.6, r: 1 };
  out.push(S(k.slabOf(plate, 0, 0.7, P, 3), { tone: "lo", crease: "none" }));
  out.push(L(k.planOutline(k.insetPlan(plate, 1), 0.7, P, 3), { tone: "faint" }));
  out.push(L([[plate.x + 3, 30], [plate.x + 3, 20], [plate.x + 3, 34]].map(([x0, len], i) => k.lineOnTop([x0, plate.y + 1.6 + i * 1.3], [x0 + len, plate.y + 1.6 + i * 1.3], 0.7, P)).join(""), { tone: "lo", free: true }));
  out.push(D([at([plate.x + 1.6, plate.y + plate.d / 2, 0.7]), at([plate.x + plate.w - 1.6, plate.y + plate.d / 2, 0.7])], { size: 0.4 }));
  return out.join("");
}
function stand() {
  const out = [];
  for (const x of [-50, 50]) {
    out.push(S(k.cylinder(x, -8, 5, 0, 1.6, P, 24), { tone: "lo" }));
    out.push(S(k.cylinder(x, -8, 3, 1.6, HZ - 4.6, P, 24), { tone: "mid", crease: "none" }));
    out.push(L(k.sideArc(x, -8, 3, 8, P, 14), { tone: "faint" }));
    const brk = { x: x - 6, y: -14, w: 12, d: 12, r: 1.6 };
    out.push(S(k.slabOf(brk, HZ - 3, 3, P, 3, 0.4), { tone: "mid" }));
    out.push(D([at([x - 3.5, -2.8, HZ]), at([x + 3.5, -2.8, HZ])], { size: 0.4 }));
  }
  /* thumb screw on the right bracket */
  out.push(S(k.slabOf({ x: 54.6, y: -9.4, w: 3, d: 2.8, r: 0.6 }, HZ - 2.2, 1.6, P, 2), { tone: "mid", crease: "none" }));
  out.push(S(k.cylinder(59.4, -8, 2.4, HZ - 3.4, 4, P, 18), { tone: "mid" }));
  out.push(L(k.knurl(59.4, -8, 2.4, HZ - 3.4, HZ + 0.6, 16, P), { tone: "lo" }));
  return out.join("");
}
function housing() {
  const out = [];
  out.push(S(k.slabOf({ x: HOUSING.x - 3, y: HOUSING.y - 1, w: 4, d: HOUSING.d + 2, r: 1.2 }, HZ - 1, HH + 2, P, 3, 0.4), { tone: "mid" }));
  out.push(S(k.slabOf(HOUSING, HZ, HH, P, 4, 0.8), { tone: "mid", inner: L(k.sideSeam(HOUSING, HZ + 6, P, 4), { tone: "faint" }) }));
  out.push(S(k.slabOf({ x: HOUSING.x + HOUSING.w - 1, y: HOUSING.y - 1, w: 4, d: HOUSING.d + 2, r: 1.2 }, HZ - 1, HH + 2, P, 3, 0.4), { tone: "mid" }));
  /* vent slots on the lid: closed outlines */
  out.push(L([-44, -30, -16, -2, 12, 26].map((x) => k.planOutline({ x, y: -11.5, w: 10, d: 2.4, r: 1.2 }, HZ + HH, P, 3)).join(""), { tone: "lo" }));
  out.push(D([[-62, -12.6], [-62, -3.4], [62, -12.6], [62, -3.4]].map(([x, y]) => at([x, y, HZ + HH])), { size: 0.4 }));
  /* face: corner screws, a seam under the rows, the engraved KM, the status lamp */
  const fr = (x, z) => k.sideRing([x, 0, z], 1.4, "y", P, 14);
  out.push(L([fr(-66.4, HZ + 3.6), fr(-66.4, HZ + HH - 3.6), fr(66.4, HZ + 3.6), fr(66.4, HZ + HH - 3.6)].join(""), { tone: "lo" }));
  out.push(D([[-66.4, HZ + 3.6], [-66.4, HZ + HH - 3.6], [66.4, HZ + 3.6], [66.4, HZ + HH - 3.6]].map(([x, z]) => at([x, 0, z])), { size: 0.4 }));
  out.push(L(k.sideSeam(HOUSING, 39.4, P, 4), { tone: "faint" }));
  const kmX = X0 + DIG.n * DIG.w + (DIG.n - 1) * DIG.gap + 3.2;
  out.push(`<text class="iso-face-text" data-tone="lo" transform="${planeMatrix([kmX, 0, DIG.z + DIG.h / 2], [1, 0, 0], [0, 0, -1], P)}" font-size="5.4" dominant-baseline="central">KM</text>`);
  const lamp = G.frameAlong([54, 0, DIG.z + DIG.h / 2], [0, 1, 0]);
  out.push(S(G.disc(0, 1.2, 4.2, lamp, P), { tone: "mid" }));
  out.push(S(G.disc(1.2, 2.4, 2.8, lamp, P), { tone: "hi", lit: true }));
  out.push(`<g class="sf-lamp">${L(G.circleOf(lamp, 2.4, 1.4, P, 20), { tone: "lit" })}</g>`);
  return out.join("");
}
/* one flap module: a frame proud of the face, a card split at the hinge; glyph art in the card's own plane */
function module(i, M, cls) {
  const x = (M.x0 ?? X0) + i * (M.w + M.gap), fw = M.w - 1.8, fh = M.h - 2.4, xl = x + 0.9, Y = M.d + 0.02, zt = M.z + M.h - 1.2, zh = zt - fh / 2;
  const frame = S(k.slabOf({ x, y: 0, w: M.w, d: M.d, r: 0.7 }, M.z, M.h, P, 2, 0.3), { tone: "mid" });
  const face = planeMatrix([xl, Y, zt], [1, 0, 0], [0, 0, -1], P);
  const card = (y0, y1) => `<rect x="0" y="${y0}" width="${fw}" height="${y1 - y0}" class="sf-card"/>`;
  const glyph = (half) => `<text class="sf-g" x="${fw / 2}" y="${fh / 2}" clip-path="url(#sf-${cls}-${half})"></text>`;
  return { x, fw, fh, xl, Y, zt, zh,
    svg: `<g class="sf-mod ${cls}" data-i="${i}">${frame}<g transform="${face}">${card(0, fh / 2)}<g data-top>${glyph("t")}</g>${card(fh / 2, fh)}<g data-bot>${glyph("b")}</g></g>` +
      L(k.segment([x, Y, zh], [x + M.w, Y, zh], P), { tone: "lo" }) + D([at([x + 0.45, Y, zh]), at([x + M.w - 0.45, Y, zh])], { size: 0.35 }) +
      `<g data-flap style="display:none"><path class="sf-card sf-edge"/><g data-ft>${glyph("t")}</g><g data-fb>${glyph("b")}</g><path class="sf-dim"/></g></g>` };
}
const CITY = Array.from({ length: MOD.n }, (_, i) => module(i, MOD, "c"));
const KMS = Array.from({ length: DIG.n }, (_, i) => module(i, DIG, "d"));
const CODE = { ...DIG, n: 3, x0: 8 };
const IATA = Array.from({ length: 3 }, (_, i) => { const m = module(i, CODE, "a"); return m; });
const clips = (M, cls) => { const fw = M.w - 1.8, fh = M.h - 2.4; return `<clipPath id="sf-${cls}-t" clipPathUnits="userSpaceOnUse"><rect x="0" y="0" width="${fw}" height="${fh / 2}"/></clipPath><clipPath id="sf-${cls}-b" clipPathUnits="userSpaceOnUse"><rect x="0" y="${fh / 2}" width="${fw}" height="${fh / 2}"/></clipPath>`; };
const cable = k.wireSvg(at([HOUSING.x - 3, -8, HZ + 6]), at([-70, -14, 0]), { via: [at([-76.6, -8, HZ + 2]), at([-76.6, -12, 6]), at([-74, -14, 1.2])], tone: "lo", size: 1 });

const svg = k.figureSvg({ width: W, height: H, label: "A split-flap departures board on a desk stand. Nine flaps spell the next trip city; below, four flaps spell its distance from Delhi in kilometres and three spell its airport code.",
  body: [`<defs>${clips(MOD, "c")}${clips(DIG, "d")}${clips(CODE, "a")}</defs>`, base(), stand(), cable, housing(), ...KMS.map((m) => m.svg), ...IATA.map((m) => m.svg), ...CITY.map((m) => m.svg)] });

export const CSS = `
.sf-card{fill:var(--anatomy-face);stroke:none}
.sf-edge{stroke:var(--anatomy-lo);stroke-width:.4}
.sf-g{fill:var(--anatomy-lit);font-family:"Mona Sans","Helvetica Neue",Arial,sans-serif;font-weight:700;text-anchor:middle;dominant-baseline:central}
.sf-mod.c .sf-g{font-size:12.8px}
.sf-mod.d .sf-g,.sf-mod.a .sf-g{font-size:9.4px;fill:var(--anatomy-hi)}
.sf-dim{fill:var(--anatomy-hi);stroke:none}
.sf-lamp .iso-line{stroke-width:.8}
`;
const geo = (m) => ({ xl: m.xl, Y: m.Y, zh: m.zh, fw: m.fw, fh: m.fh });
export const LIVE = `
function mount(root, say){
  const P = ${JSON.stringify(P)};
  const TRIPS = ${JSON.stringify(TRIPS)};
  const ABC = " ABCDEFGHIJKLMNOPQRSTUVWXYZ", NUM = " 0123456789";
  const GEO = { c: ${JSON.stringify(CITY.map(geo))}, d: ${JSON.stringify(KMS.map(geo))}, a: ${JSON.stringify(IATA.map(geo))} };
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const svg = root.querySelector("svg");
  const mods = [...svg.querySelectorAll(".sf-mod")].map((el) => {
    const kind = el.classList.contains("c") ? "c" : el.classList.contains("a") ? "a" : "d", g = GEO[kind][+el.dataset.i], drum = kind === "d" ? NUM : ABC;
    return { el, g, drum, cur: 0, to: 0, t: 0, top: el.querySelector("[data-top] text"), bot: el.querySelector("[data-bot] text"),
      flap: el.querySelector("[data-flap]"), fp: el.querySelector("[data-flap] path"), ft: el.querySelector("[data-ft] text"), fb: el.querySelector("[data-fb] text"),
      ftg: el.querySelector("[data-ft]"), fbg: el.querySelector("[data-fb]"), dim: el.querySelector(".sf-dim") };
  });
  const FLIP = 0.075;   /* seconds per character, as on a station board */
  const M = (O, u, v) => { const o = iso(O, P), a = iso([O[0] + u[0], O[1] + u[1], O[2] + u[2]], P), b = iso([O[0] + v[0], O[1] + v[1], O[2] + v[2]], P); return "matrix(" + [a[0] - o[0], a[1] - o[1], b[0] - o[0], b[1] - o[1], o[0], o[1]].map((n) => n.toFixed(3)).join(" ") + ")"; };
  function paint(m){
    const g = m.g, next = (m.cur + (m.cur === m.to ? 0 : 1)) % m.drum.length;
    m.top.textContent = m.drum[next]; m.bot.textContent = m.drum[m.cur];
    if (m.cur === m.to || m.t <= 0){ m.flap.style.display = "none"; return; }
    /* the flap turns about the hinge (x axis) from straight up (0) to straight down (π), toward the viewer */
    const th = Math.PI * Math.min(1, m.t), w = [0, Math.sin(th), Math.cos(th)], h = g.fh / 2, H0 = [g.xl, g.Y, g.zh];
    const far = [H0[0], H0[1] + w[1] * h, H0[2] + w[2] * h];
    const pts = [H0, [H0[0] + g.fw, H0[1], H0[2]], [far[0] + g.fw, far[1], far[2]], far].map((p) => iso(p, P));
    m.fp.setAttribute("d", "M" + pts.map((p) => p[0].toFixed(2) + " " + p[1].toFixed(2)).join("L") + "Z");
    const front = th < Math.PI / 2;
    m.ftg.style.display = front ? "" : "none"; m.fbg.style.display = front ? "none" : "";
    if (front){ m.ft.textContent = m.drum[m.cur]; m.ftg.setAttribute("transform", M([H0[0], H0[1] + w[1] * h, H0[2] + w[2] * h], [1, 0, 0], [0, -w[1], -w[2]])); }
    else { m.fb.textContent = m.drum[next]; m.fbg.setAttribute("transform", M([H0[0], H0[1] - w[1] * h, H0[2] - w[2] * h], [1, 0, 0], [0, w[1], w[2]])); }
    m.dim.setAttribute("d", m.fp.getAttribute("d")); m.dim.style.opacity = (0.16 * Math.sin(th)).toFixed(3);
    m.flap.style.display = "";
  }
  let trip = 0, hold = 0, visible = false, frame = 0, last = 0, manual = 0, live = false;
  function target(i){
    trip = i; const t = TRIPS[i], word = t.name.toUpperCase().padEnd(9, " "), num = String(t.km).padStart(4, " ");
    mods.forEach((m) => { const kind = m.el.classList.contains("c") ? "c" : m.el.classList.contains("a") ? "a" : "d", ch = kind === "c" ? word[+m.el.dataset.i] : kind === "a" ? t.code[+m.el.dataset.i] : num[+m.el.dataset.i]; m.to = Math.max(0, m.drum.indexOf(ch)); if (still.matches){ m.cur = m.to; m.t = 0; paint(m); } });
    say(t.name + " · " + t.km.toLocaleString("en-IN") + " km from Delhi");
    root.setAttribute("aria-label", "Departures board: " + t.name + " (" + t.code + "), " + t.km + " km from Delhi");
  }
  function tick(now){
    const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60; last = now;
    let moving = false;
    mods.forEach((m, j) => {
      if (m.cur === m.to) return;
      moving = true;
      if (m.wait > 0){ m.wait -= dt; return; }
      m.t += dt / FLIP;
      if (m.t >= 1){ m.cur = (m.cur + 1) % m.drum.length; m.t = m.cur === m.to ? 0 : m.t - 1; }
      paint(m);
    });
    if (!moving && !manual){ hold += dt; if (hold > 3.2){ hold = 0; start(trip + 1); } }
    frame = visible && live ? requestAnimationFrame(tick) : 0;
  }
  function start(i){ target(((i % TRIPS.length) + TRIPS.length) % TRIPS.length); mods.forEach((m, j) => { m.wait = j * 0.035; }); kick(); }
  function kick(){ if (!frame && visible && live){ last = 0; frame = requestAnimationFrame(tick); } }
  new IntersectionObserver((e) => { visible = e[e.length - 1].isIntersecting; kick(); }).observe(root);
  root.addEventListener("pointermove", (e) => { const r = svg.getBoundingClientRect(); const i = Math.max(0, Math.min(2, Math.floor((e.clientX - r.left) / r.width * 3))); manual = 1; if (i !== trip) start(i); });
  root.addEventListener("pointerleave", () => { manual = 0; hold = 0; });
  mods.forEach(paint);
  return { start(){ live = true; if (still.matches){ target(trip); return; } if (mods.every((m) => m.cur === 0)) start(trip); else kick(); }, stop(){ live = false; } };
}
`;
export const SVG = svg;
if (process.argv[1].endsWith("global.mjs")) {
  writeFileSync(new URL("./global.html", import.meta.url), previewPage({ title: "Global", svg, readout: TRIPS[0].name + " · " + TRIPS[0].km.toLocaleString("en-IN") + " km from Delhi", cap: "Global opportunities", sub: "China · Thailand · Singapore", live: LIVE }).replace("</style>", CSS + "</style>"));
  console.log("wrote global.html", svg.length);
}
