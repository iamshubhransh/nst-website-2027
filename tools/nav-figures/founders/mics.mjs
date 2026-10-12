/* From the founders: two studio mics on desk stands, one in each gutter, angled in toward the podcast film. They take turns:
   faint sound arcs pulse from one capsule, then the other, like the conversation in the film. Dark, low contrast, desktop only. */
import { writeFileSync } from "node:fs";
import * as k from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/iso-kit.mjs";
import * as G from "/Users/shubhanshbhaskar/.claude/skills/anatomy/kit/lathe.mjs";
export const W = 300, H = 360;
const R2 = Math.SQRT1_2;
function build(side) {   /* side "l" points the mic to screen right, "r" mirrors it by swapping x and y (azimuth 45 is symmetric) */
  const sw = side === "r";
  const pt = (a, b, z) => { const x = a * R2 + b * R2, y = -a * R2 + b * R2; return sw ? [y, x, z] : [x, y, z]; };   /* a along the mic's forward, b toward the viewer */
  const dir = (a, b, z) => { const p = pt(a, b, z); return p; };
  const S = (p, s) => k.solidSvg(p, s), L = (d, s) => k.lineSvg(d, s);
  const PL = 24, PH = 4;                                     /* the round desk plinth */
  const BASE = pt(-6, 0, 0), POST_TOP = 42, ELB = pt(-6, 0, POST_TOP + 2);
  const TIP = pt(26, 0, 60), AXIS = (() => { const a = 0.17; const v = dir(Math.cos(a), 0, -Math.sin(a)); const n = Math.hypot(...v); return v.map((c) => c / n); })();
  const CAP0 = TIP, CAPLEN = 22, CAPR = 5.6;
  const P = k.fitProjection([[-PL, -PL, -PH], [PL, PL, -PH], [PL, -PL, 0], [-PL, PL, 0], pt(-6, 0, 74), pt(44, 0, 72), pt(46, 0, 48)], W, H, { pad: 14, azimuth: 45 });
  const at = (p) => k.iso(p, P);
  const out = [`<path class="iso-halo" d="${k.haloOf({ x: -PL, y: -PL, w: PL * 2, d: PL * 2, r: PL }, -PH, PH, P)}"/>`];
  out.push(S(k.cylinder(0, 0, PL, -PH, PH, P, 96, 0.8), { tone: "mid", inner: L(k.sideArc(0, 0, PL, -PH / 2, P, 64), { tone: "faint" }) }));
  out.push(L(k.ring(0, 0, PL - 3.5, 0, P, 96), { tone: "faint" }));
  /* the weighted base, its rubber ring, the post with a seam, the elbow */
  out.push(S(k.cylinder(BASE[0], BASE[1], 9, 0, 1, P, 48), { tone: "lo" }));
  out.push(S(k.cylinder(BASE[0], BASE[1], 8.2, 1, 2.8, P, 48, 0.5), { tone: "mid" }));
  out.push(S(k.cylinder(BASE[0], BASE[1], 1.5, 3.8, POST_TOP - 3.8, P, 18), { tone: "mid", crease: "none", inner: L(k.sideArc(BASE[0], BASE[1], 1.5, 22, P, 12), { tone: "faint" }) }));
  out.push(S(G.sphereOf(ELB, 2.8, P), { tone: "mid" }));
  /* the boom: a rod from the elbow up to the yoke behind the capsule */
  const YOKE = [CAP0[0] - AXIS[0] * 14, CAP0[1] - AXIS[1] * 14, CAP0[2] - AXIS[2] * 14 - 9];   /* hangs under the capsule's back half */
  const boom = [YOKE[0] - ELB[0], YOKE[1] - ELB[1], YOKE[2] - ELB[2]], bl = Math.hypot(...boom);
  out.push(S(G.disc(2.6, bl - 2.4, 1.3, G.frameAlong(ELB, boom.map((c) => c / bl)), P), { tone: "mid" }));
  out.push(S(G.sphereOf(YOKE, 2.2, P), { tone: "mid" }));
  /* the shock mount: a ring around the capsule's middle, hung from the yoke */
  const FC = G.frameAlong([CAP0[0] - AXIS[0] * CAPLEN, CAP0[1] - AXIS[1] * CAPLEN, CAP0[2] - AXIS[2] * CAPLEN], AXIS);
  const cap = G.solidOf([[0, 0], [0, CAPR - 0.6], [0.8, CAPR], [CAPLEN - 5, CAPR], [CAPLEN - 2.5, CAPR - 1.2, 1], [CAPLEN, 0, 1]], FC, P);
  const grille = G.ribsOf(FC, CAPLEN - 9.4, CAPLEN - 5, CAPR, 28, P, { fade: [0.05, 0.45], seams: true });   /* the head, clear of the shock ring */
  out.push(S(G.ringBand(CAPLEN / 2 - 1.2, CAPLEN / 2 + 1.2, CAPR + 0.4, CAPR + 2.6, FC, P), { tone: "mid" }));
  out.push(`<g class="mc-cap">${S(cap, { tone: "hi", lit: true, inner: k.fadedSvg(grille, { tone: "lo" }) })}</g>`);
  /* the ring's near half crosses in front of the capsule: a strip between its two visible front arcs */
  const V = G.viewOf(P);
  let am = 0, bd = -2; for (let j = 0; j < 360; j++){ const a = j / 360 * Math.PI * 2, dd = G.dot3(G.radialOf(FC, a), V); if (dd > bd){ bd = dd; am = a; } }
  const front = (sv) => { const pts = []; for (let j = 0; j <= 40; j++){ const a = am - Math.PI / 2 + Math.PI * j / 40; pts.push(at(G.pointOf(FC, sv, CAPR + 2.6, a))); } return pts; };
  const fa = front(CAPLEN / 2 - 1.2), fb = front(CAPLEN / 2 + 1.2);
  out.push(`<path class="mc-band" d="${k.pathOf([...fa, ...fb.reverse()], true)}"/>`);
  const down = (() => { let best = 0, bz = 1e9; for (let j = 0; j < 72; j++){ const a = j / 72 * Math.PI * 2, z = G.pointOf(FC, CAPLEN / 2, 1, a)[2]; if (z < bz){ bz = z; best = a; } } return best; })();
  const mid = G.pointOf(FC, CAPLEN / 2, CAPR + 2.6, down);
  out.push(k.wireSvg(at(mid), at(YOKE), { tone: "lo", ends: "both", size: 0.8 }));
  /* sound arcs in front of the capsule, in the vertical plane through its axis */
  const arcs = [8, 13, 18].map((r, i) => {
    const pts = []; for (let j = 0; j <= 24; j++) { const t = -0.62 + 1.24 * j / 24; const f = [Math.cos(t), Math.sin(t)]; pts.push(at([TIP[0] + (AXIS[0] * f[0]) * r, TIP[1] + (AXIS[1] * f[0]) * r, TIP[2] + (AXIS[2] * f[0] + f[1] * Math.cos(0.17)) * r])); }
    return `<path class="mc-arc" style="--i:${i}" data-free="true" d="${k.pathOf(pts)}"/>`;
  }).join("");
  out.push(`<g class="mc-arcs">${arcs}</g>`);
  return k.figureSvg({ width: W, height: H, label: "", body: out });
}
export const SVG_L = build("l"), SVG_R = build("r");
export const CSS = `
.iso.fdr-iso,.iso.fdr-iso[data-theme]{--anatomy-card:#0B0C0E;--anatomy-paper:#0B0C0E;--anatomy-face:#191B20;--anatomy-top:#16181C;
  --anatomy-shade-0:#0D0E11;--anatomy-shade-1:#0F1013;--anatomy-shade-2:#111216;--anatomy-shade-3:#131519;--anatomy-lit-top:#1C1E23;--anatomy-lit-shade:#15171B;
  --anatomy-hi:#4A4F58;--anatomy-mid:#33373E;--anatomy-lo:#24272D;--anatomy-faint:#1A1C21;--anatomy-lit:#F59700;--anatomy-halo:#000;--anatomy-halo-opacity:.8;--anatomy-dot:#4A4F58;--anatomy-weight:.7px}
.fdr-mic{position:absolute;top:452px;width:300px;height:360px;pointer-events:none;display:none}
.fdr-mic svg{display:block;width:100%;height:100%}
.fdr-mic-l{left:calc(50% - 333px - 56px - 300px)}
.fdr-mic-r{right:calc(50% - 333px - 56px - 300px)}
.mc-band{fill:var(--anatomy-shade-2);stroke:var(--anatomy-mid);stroke-width:.6;stroke-linejoin:round}
.mc-arc{fill:none;stroke:#F59700;stroke-width:1;stroke-linecap:round;opacity:0}
.fdr-mic .mc-cap .iso-edge{transition:stroke .6s ease}
.fdr-mic:not(.is-talk) .mc-cap .iso-edge{stroke:var(--anatomy-hi)}
.fdr-mic.is-talk .mc-arc{animation:mcArc 1.5s ease-out infinite;animation-delay:calc(var(--i) * .22s)}
@keyframes mcArc{0%{opacity:0}25%{opacity:.55}100%{opacity:0}}
@media (min-width:1360px){ .fdr-mic{display:block} }
@media (prefers-reduced-motion:reduce){ .fdr-mic.is-talk .mc-arc{animation:none;opacity:.3} }
`;
export const LIVE = `
(function(){   /* founders backdrop: the two mics take turns while the section is on screen */
  var sec = document.getElementById('founders'); if (!sec) return;
  var m = sec.querySelectorAll('.fdr-mic'); if (m.length < 2) return;
  var still = matchMedia('(prefers-reduced-motion: reduce)'), i = 0, iv = 0;
  function turn(){ m[i].classList.remove('is-talk'); i = 1 - i; m[i].classList.add('is-talk'); }
  m[0].classList.add('is-talk');
  if (still.matches) return;
  new IntersectionObserver(function(e){ if (e[0].isIntersecting){ if (!iv) iv = setInterval(turn, 3200); } else { clearInterval(iv); iv = 0; } }).observe(sec);
})();
`;
if ((process.argv[1] || "").endsWith("mics.mjs")) {
  const page = `<!doctype html><html><head><meta charset="utf-8"><style>${k.ISO_CSS}${CSS}body{margin:0;background:#0B0C0E}.wrap{position:relative;width:1440px;height:1000px}.film{position:absolute;left:387px;top:452px;width:666px;height:400px;border-radius:20px;background:#222}.fdr-mic{display:block}</style></head><body><section id="founders"><div class="wrap"><div class="fdr-mic fdr-mic-l iso fdr-iso" data-theme="dark">${SVG_L}</div><div class="film"></div><div class="fdr-mic fdr-mic-r iso fdr-iso" data-theme="dark">${SVG_R}</div></div></section><script>${LIVE}</script></body></html>`;
  writeFileSync(new URL("./mics.html", import.meta.url), page.replace(/50% - 333px/g, "720px - 333px"));
  console.log("wrote", SVG_L.length);
}
