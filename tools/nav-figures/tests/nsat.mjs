/* NSAT: the online test on a laptop. A multiple-choice question; the selection steps down the options and settles on one, a tick
   lands, the progress bar fills a notch and the next question slides in. A stopwatch beside it keeps the 2-hour clock. */
import { writeFileSync } from "node:fs";
import { k, G, W, H, previewPage, planeMatrix, base } from "./common.mjs";
const FLOOR = { x: -50, y: -34, w: 100, d: 68, r: 8 };
const LB = { x: -36, y: -14, w: 60, d: 38, r: 2.4 }, LH = 2.6;
const TILT = 14 * Math.PI / 180, SW = 60, SH = 40;
const at = (u, v) => [LB.x + u, LB.y - v * Math.sin(TILT), LH + v * Math.cos(TILT)];
const SWATCH = [36, 10], SR = 8.5, SZ = 3.4;
const P = k.fitProjection([...k.boxCorners(FLOOR, -4, 0), at(0, SH), at(SW, SH), [SWATCH[0], SWATCH[1] - SR - 3, 6]], W, H, { pad: 24, azimuth: 52 });
const S = (p, s) => k.solidSvg(p, s), L = (d, s) => k.lineSvg(d, s);
function laptop() {
  const out = [S(k.slabOf(LB, 0, LH, P, 4, 0.5), { tone: "mid" })];
  const keys = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 11; c++) keys.push(k.planOutline({ x: LB.x + 5 + c * 4.6, y: LB.y + 4 + r * 4.4, w: 3.6, d: 3.4, r: 0.6 }, LH, P, 2));
  out.push(L(keys.join(""), { tone: "lo" }));
  out.push(L(k.planOutline({ x: LB.x + LB.w / 2 - 9, y: LB.y + 23, w: 18, d: 10, r: 1.4 }, LH, P, 3), { tone: "lo" }));
  const back = [at(0, 0), at(SW, 0), at(SW, SH), at(0, SH)].map((p) => [p[0], p[1] - 1.4 * Math.cos(TILT), p[2] - 1.4 * Math.sin(TILT)]);
  const front = [at(0, 0), at(SW, 0), at(SW, SH), at(0, SH)];
  const q = (pts) => k.pathOf(pts.map((p) => k.iso(p, P)), true);
  out.push(`<path class="ns-lid" d="${q([back[1], back[2], front[2], front[1]])}"/><path class="ns-lid" d="${q([back[3], back[2], front[2], front[3]])}"/><path class="ns-face" d="${q(front)}"/>`);
  const m = planeMatrix(at(0, SH), [1, 0, 0], [0, Math.sin(TILT), -Math.cos(TILT)], P);
  /* the test, in screen space (u right, v down from the lid's top): a progress bar, the question, four options */
  const opts = [0, 1, 2, 3].map((i) => `<g class="ns-opt" data-o="${i}"><rect x="8" y="${17.6 + i * 4.8}" width="44" height="3.8" rx="1.9"/><circle cx="10.4" cy="${19.5 + i * 4.8}" r="1"/><path d="M13 ${19.5 + i * 4.8}h${[22, 16, 26, 19][i]}"/></g>`).join("");
  out.push(`<g transform="${m}"><rect class="ns-screen" x="3" y="3" width="${SW - 6}" height="${SH - 6}" rx="1"/>` +
    `<path class="ns-track" d="M8 7.4h44"/><path class="ns-fill" d="M8 7.4h44" pathLength="1"/>` +
    `<g class="ns-q"><path class="ns-qline" d="M8 11.6h36M8 14.4h24"/>${opts}<path class="ns-tick" d="M47.4 0l1.3 1.3 2.4-2.6" pathLength="1"/></g>` +
    `<rect class="ns-bezel" x="3" y="3" width="${SW - 6}" height="${SH - 6}" rx="1"/><circle class="ns-cam" cx="${SW / 2}" cy="1.5" r=".5"/></g>`);
  return out.join("");
}
function stopwatch() {
  const [x, y] = SWATCH, out = [];
  out.push(S(k.cylinder(x, y, SR + 0.8, 0, 1, P, 40), { tone: "lo" }));
  out.push(S(k.cylinder(x, y, SR, 1, SZ, P, 48, 0.5), { tone: "mid", inner: L(k.sideArc(x, y, SR, 1 + SZ / 2, P, 32), { tone: "faint" }) }));
  out.push(L(k.ring(x, y, SR - 1.2, 1 + SZ, P, 48), { tone: "lo" }));
  const t = k.radialTicks(x, y, SR - 1.2, 60, 5, 1 + SZ, [0.9, 1.9], P);
  out.push(L(t.minor, { tone: "faint" }), L(t.major, { tone: "lo" }));
  /* the crown and its stem on the far rim */
  out.push(S(k.slabOf({ x: x - 0.9, y: y - SR - 2.2, w: 1.8, d: 2.4, r: 0.4 }, 1.6, 1.8, P, 2), { tone: "mid" }));
  out.push(S(k.cylinder(x, y - SR - 3, 1.6, 1.3, 2.4, P, 16), { tone: "mid" }));
  return out.join("");
}
const HUB = [SWATCH[0], SWATCH[1], 1 + SZ];
const svg = k.figureSvg({ width: W, height: H, label: "The online NSAT on a laptop: a multiple-choice question, an option being picked and ticked, the progress bar filling; a stopwatch beside it.",
  body: [base(FLOOR, 4, P), laptop(), stopwatch(), `<path class="iso-line ns-hand" data-tone="lit" data-free="end" d=""/>`, k.dotsSvg([k.iso(HUB, P)], { size: 0.9, tone: "hi" })] });
export const CSS = `
.ns-lid{fill:var(--anatomy-shade-1);stroke:var(--anatomy-mid);stroke-width:.6;stroke-linejoin:round}
.ns-face{fill:var(--anatomy-shade-2);stroke:var(--anatomy-mid);stroke-width:.6;stroke-linejoin:round}
.ns-screen{fill:#fff}
.ns-bezel{fill:none;stroke:var(--anatomy-lo);stroke-width:.4;vector-effect:non-scaling-stroke}
.ns-cam{fill:var(--anatomy-mid)}
.ns-track,.ns-fill{fill:none;stroke-width:1.2;stroke-linecap:round}
.ns-track{stroke:var(--anatomy-shade-1)}
.ns-fill{stroke:var(--anatomy-lit);stroke-dasharray:0 2;transition:stroke-dasharray .6s cubic-bezier(.22,1,.36,1)}
.ns-q{transition:opacity .35s ease,transform .45s cubic-bezier(.22,1,.36,1)}
.ns-q.is-out{opacity:0;transform:translateY(-3px)}
.ns-qline{fill:none;stroke:var(--anatomy-hi);stroke-width:1.05;stroke-linecap:round}
.ns-opt rect{fill:#fff;stroke:var(--anatomy-faint);stroke-width:.45;vector-effect:non-scaling-stroke;transition:fill .25s ease,stroke .25s ease}
.ns-opt circle{fill:#fff;stroke:var(--anatomy-lo);stroke-width:.4;transition:fill .25s ease,stroke .25s ease}
.ns-opt path{fill:none;stroke:var(--anatomy-lo);stroke-width:.75;stroke-linecap:round}
.ns-opt.is-hover rect{fill:var(--anatomy-shade-3)}
.ns-opt.is-on rect{fill:var(--anatomy-shade-3);stroke:var(--anatomy-lit)}
.ns-opt.is-on circle{fill:var(--anatomy-lit);stroke:var(--anatomy-lit)}
.ns-tick{fill:none;stroke:var(--anatomy-lit);stroke-width:.9;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:1;transition:stroke-dashoffset .35s ease}
.ns-tick.is-on{stroke-dashoffset:0}
.ns-hand{stroke-width:.9}
`;
export const LIVE = `
function mount(root){
  const P = ${JSON.stringify(P)}, HUB = ${JSON.stringify(HUB)}, R = ${SR - 2.2};
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const q = root.querySelector(".ns-q"), opts = [...root.querySelectorAll(".ns-opt")], tick = root.querySelector(".ns-tick"), fill = root.querySelector(".ns-fill"), hand = root.querySelector(".ns-hand");
  const PICK = [2, 0, 3, 1, 2], CYCLE = 3.4, N = 5;
  let live = false, frame = 0, t = 0, last = 0, shown = -1;
  function setQ(n){
    const pick = PICK[n % PICK.length];
    tick.setAttribute("transform", "translate(0 " + (19.5 + pick * 4.8) + ")");
    fill.style.strokeDasharray = ((n % N + 1) / N).toFixed(3) + " 2";
  }
  function draw(){
    const n = Math.floor(t / CYCLE), c = t % CYCLE, pick = PICK[n % PICK.length];
    if (n !== shown){ shown = n; setQ(n); }
    /* 0–1.4 s: the cursor steps down the options; 1.4 s: picked; 1.8 s: ticked; 2.9 s: the question slides away */
    const step = Math.min(pick, Math.floor(c / 0.35));
    opts.forEach((o, i) => { o.classList.toggle("is-hover", c < 1.4 && i === step); o.classList.toggle("is-on", c >= 1.4 && i === pick); });
    tick.classList.toggle("is-on", c >= 1.8 && c < 2.9);
    q.classList.toggle("is-out", c >= 2.9);
    /* the stopwatch hand: one turn a minute */
    const a = (t / 60) * Math.PI * 2, p0 = iso([HUB[0], HUB[1], HUB[2]], P), p1 = iso([HUB[0] + Math.sin(a) * R, HUB[1] - Math.cos(a) * R, HUB[2]], P);
    hand.setAttribute("d", "M" + p0[0].toFixed(2) + " " + p0[1].toFixed(2) + "L" + p1[0].toFixed(2) + " " + p1[1].toFixed(2));
  }
  function frameTick(now){ const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60; last = now; t += dt; draw(); frame = live ? requestAnimationFrame(frameTick) : 0; }
  t = 1.9; draw();
  return { start(){ live = true; if (still.matches || frame) return; last = 0; frame = requestAnimationFrame(frameTick); }, stop(){ live = false; } };
}
`;
export const SVG = svg;
if ((process.argv[1] || "").endsWith("nsat.mjs")) { writeFileSync(new URL("./nsat.html", import.meta.url), previewPage({ key: "nsat", title: "NSAT", svg, cap: "NSAT", sub: "Maths, English and aptitude, online", live: LIVE, css: CSS })); console.log("wrote", svg.length); }
