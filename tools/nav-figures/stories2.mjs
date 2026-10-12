/* Student stories: three students on a small round courtyard. They take turns: a story card rises above the one speaking (an avatar,
   a title line, three text lines), the speaker lights up, the card settles and the next one begins. */
import { writeFileSync } from "node:fs";
import { k, G, W, H, previewPage } from "./common.mjs";
const AZ = 52, A = AZ * Math.PI / 180;
const PL = 32;
const SPACE = 19, SP = [-1, 0, 1].map((t) => [Math.sin(52 * Math.PI / 180) * SPACE * t - Math.cos(52 * Math.PI / 180) * 2, -Math.cos(52 * Math.PI / 180) * SPACE * t - Math.sin(52 * Math.PI / 180) * 2]);   /* side by side across the screen, one depth: no card covers another head */   /* the three standing spots, in an arc at the back */
const CARD = { w: 27, h: 18, lift: 16 }, CZ = 24;
const U = [Math.sin(A), -Math.cos(A), 0];   /* the floor direction that runs screen-right: cards face the viewer */
const P = k.fitProjection([[-PL, -PL, -5], [PL, PL, -5], [PL, -PL, 0], [-PL, PL, 0], ...SP.map(([x, y]) => [x, y, CZ + CARD.h + 4])], W, H, { pad: 30, azimuth: AZ });
const S = (p, s) => k.solidSvg(p, s), L = (d, s) => k.lineSvg(d, s);
const at = (p) => k.iso(p, P);
function court() {
  const out = [`<path class="iso-halo" d="${k.haloOf({ x: -PL, y: -PL, w: PL * 2, d: PL * 2, r: PL }, -5, 5, P)}"/>`];
  out.push(S(k.cylinder(0, 0, PL, -5, 5, P, 96, 0.8), { tone: "mid", inner: L(k.sideArc(0, 0, PL, -2.5, P, 64), { tone: "faint" }) }));
  out.push(L(k.ring(0, 0, PL - 4, 0, P, 96), { tone: "faint" }));
  out.push(L(k.ring(0, 0, 20, 0, P, 72), { tone: "faint" }));
  return out.join("");
}
function student(i, lit) {
  const [x, y] = SP[i];
  return S(k.cylinder(x, y, 3.3, 0, 11, P, 24, 0.4), { tone: lit ? "hi" : "mid", lit }) + S(G.sphereOf([x, y, 14.2], 2.9, P), { tone: lit ? "hi" : "mid", lit });
}
/* a story card in the plane facing the viewer, built at the spot's height and lifted by the live code */
function card(i) {
  const [x, y] = SP[i], z0 = CZ;
  const o = [x - U[0] * CARD.w / 2, y - U[1] * CARD.w / 2, z0 + CARD.h];
  const m = (() => { const p0 = at(o), pu = at([o[0] + U[0], o[1] + U[1], o[2]]), pv = at([o[0], o[1], o[2] - 1]); const f = (n) => n.toFixed(3); return `matrix(${f(pu[0] - p0[0])} ${f(pu[1] - p0[1])} ${f(pv[0] - p0[0])} ${f(pv[1] - p0[1])} ${f(p0[0])} ${f(p0[1])})`; })();
  const tail = `M${CARD.w / 2 - 2.6} ${CARD.h - 0.2}L${CARD.w / 2} ${CARD.h + 3}L${CARD.w / 2 + 2.6} ${CARD.h - 0.2}`;
  return `<g class="st-card" data-i="${i}"><g transform="${m}">` +
    `<rect class="st-back" x="1" y="1.2" width="${CARD.w}" height="${CARD.h}" rx="3"/><path class="st-back" d="${tail}" transform="translate(1 1.2)"/>` +
    `<rect class="st-face" x="0" y="0" width="${CARD.w}" height="${CARD.h}" rx="3"/><path class="st-face st-tail" d="${tail}"/>` +
    `<circle class="st-av" cx="5.2" cy="5.2" r="2.6"/><path class="st-title" d="M9.8 4.2h12M9.8 6.8h7"/><path class="st-text" d="M3.2 11h20.6M3.2 13.6h17M3.2 16.2h12"/></g></g>`;
}
const svg = k.figureSvg({ width: W, height: H, label: "Three students on a small courtyard take turns sharing their stories; a story card rises above whoever is speaking.",
  body: [court(), ...[0, 1, 2].sort((a, b) => k.depthOf([...SP[a], 0], P) - k.depthOf([...SP[b], 0], P)).map((i) => `<g class="st-s" data-i="${i}"><g class="st-off">${student(i, false)}</g><g class="st-on">${student(i, true)}</g></g>`), ...[0, 1, 2].map(card)] });
export const CSS = `
.st-on{opacity:0;transition:opacity .4s ease}.st-s.is-on .st-on{opacity:1}
.st-card{opacity:0;transform:translateY(10px);transition:opacity .45s ease,transform .7s cubic-bezier(.22,1,.36,1)}
.st-card.is-on{opacity:1;transform:none}
.st-face{fill:#fff;stroke:var(--anatomy-mid);stroke-width:.5;stroke-linejoin:round}
.st-tail{stroke-dasharray:none}
.st-back{fill:var(--anatomy-shade-1);stroke:none}
.st-av{fill:var(--anatomy-lit)}
.st-title{fill:none;stroke:var(--anatomy-hi);stroke-width:1.2;stroke-linecap:round}
.st-text{fill:none;stroke:var(--anatomy-lo);stroke-width:.8;stroke-linecap:round}
`;
export const LIVE = `
function mount(root){
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const ss = [0, 1, 2].map((j) => root.querySelector('.st-s[data-i="' + j + '"]')), cs = [0, 1, 2].map((j) => root.querySelector('.st-card[data-i="' + j + '"]'));
  let i = 0, iv = 0;
  function show(n){ ss.forEach((s, j) => s.classList.toggle("is-on", j === n)); cs.forEach((c, j) => c.classList.toggle("is-on", j === n)); }
  show(1);
  return { start(){ if (still.matches || iv) return; i = 1; iv = setInterval(() => { i = (i + 1) % 3; show(i); }, 2600); }, stop(){ clearInterval(iv); iv = 0; } };
}
`;
export const SVG = svg;
if ((process.argv[1] || "").endsWith("stories2.mjs")) { writeFileSync(new URL("./stories2.html", import.meta.url), previewPage({ key: "stories", title: "Stories", svg, cap: "Student stories", sub: "Projects by NST students", live: LIVE, css: CSS })); console.log("wrote", svg.length); }
