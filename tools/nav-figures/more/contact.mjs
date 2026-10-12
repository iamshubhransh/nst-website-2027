/* Contact us: a phone on its dock where a conversation fills in, question and answer; beside it a map pin for campus visits. */
import { writeFileSync } from "node:fs";
import { k, G, W, H, previewPage, planeMatrix, base } from "./common.mjs";
const FLOOR = { x: -44, y: -32, w: 88, d: 64, r: 8 };
const TILT = 12 * Math.PI / 180, PW = 28, PH = 52, X0 = -24, Y0 = -2, Z0 = 3.2;
const at = (u, v) => [X0 + u, Y0 - v * Math.sin(TILT), Z0 + v * Math.cos(TILT)];
const PIN = [30, -12];
const P = k.fitProjection([...k.boxCorners(FLOOR, -4, 0), at(0, PH), at(PW, PH)], W, H, { pad: 26, azimuth: 52 });
const S = (p, s) => k.solidSvg(p, s), L = (d, s) => k.lineSvg(d, s);
function phone() {
  const out = [S(k.slabOf({ x: X0 - 3, y: Y0 - 6, w: PW + 6, d: 11, r: 2 }, 0, Z0, P, 3, 0.4), { tone: "mid" })];
  const off = (p) => [p[0], p[1] - 2 * Math.cos(TILT), p[2] - 2 * Math.sin(TILT)];
  const f = [at(0, 0), at(PW, 0), at(PW, PH), at(0, PH)], b = f.map(off);
  const q = (pts, cls) => `<path class="${cls}" d="${k.pathOf(pts.map((p) => k.iso(p, P)), true)}"/>`;
  out.push(q([b[1], b[2], f[2], f[1]], "ct-side"), q([b[3], b[2], f[2], f[3]], "ct-side"), q(f, "ct-face"));
  const m = planeMatrix(at(0, PH), [1, 0, 0], [0, Math.sin(TILT), -Math.cos(TILT)], P);
  const bub = (x, y, w, me, i) => `<g class="ct-b${me ? " is-me" : ""}" data-i="${i}"><rect x="${x}" y="${y}" width="${w}" height="5.4" rx="2.4"/></g>`;
  out.push(`<g transform="${m}"><rect class="ct-screen" x="2" y="2" width="${PW - 4}" height="${PH - 4}" rx="2.4"/><path class="ct-head" d="M2 9.4H${PW - 2}"/><circle class="ct-av" cx="6.6" cy="5.8" r="2"/><path class="ct-name" d="M10.4 5.8h8"/>` +
    bub(4, 11.4, 15, false, 0) + bub(9, 18.6, 15, true, 1) + bub(4, 25.8, 18, false, 2) + bub(11, 33, 13, true, 3) +   /* the last ends at 38.4, clear of the input at 43 */
    `<rect class="ct-input" x="4" y="${PH - 9}" width="${PW - 8}" height="5" rx="2.5"/></g>`);
  return out.join("");
}
function pin() {
  const F = G.frameAlong([PIN[0], PIN[1], 0.2], [0, 0, 1]);
  const prof = [[0, 0], [4, 1.6, 1], [8, 3.4, 1], [11, 4.6, 1], [13.5, 5, 1], [16, 4.6, 1], [18, 3.2, 1], [19.4, 0]];
  return `<g class="ct-pin">${S(G.solidOf(prof, F, P), { tone: "hi", lit: true })}${S(G.sphereOf([PIN[0], PIN[1], 14.2], 1.9, P), { tone: "mid" })}</g>`;
}
const svg = k.figureSvg({ width: W, height: H, label: "A phone on its dock where a conversation fills in; beside it a map pin for campus visits.",
  body: [base(FLOOR, 4, P), `<ellipse class="ct-shadow" rx="7" ry="3.4"/>`, phone(), pin()] });
export const CSS = `
.ct-side{fill:var(--anatomy-shade-1);stroke:var(--anatomy-mid);stroke-width:.6;stroke-linejoin:round}
.ct-face{fill:var(--anatomy-shade-2);stroke:var(--anatomy-mid);stroke-width:.6;stroke-linejoin:round}
.ct-screen{fill:#fff}
.ct-head{fill:none;stroke:var(--anatomy-faint);stroke-width:.4;vector-effect:non-scaling-stroke}
.ct-av{fill:var(--anatomy-shade-0)}
.ct-name{fill:none;stroke:var(--anatomy-mid);stroke-width:1.2;stroke-linecap:round}
.ct-b rect{fill:var(--anatomy-shade-1)}
.ct-b.is-me rect{fill:var(--anatomy-lit)}
.ct-b{transition:opacity .4s ease,transform .5s cubic-bezier(.22,1,.36,1)}
.ct-b.is-off{opacity:0;transform:translateY(-2px)}
.ct-input{fill:none;stroke:var(--anatomy-lo);stroke-width:.4;vector-effect:non-scaling-stroke}
.ct-shadow{fill:var(--anatomy-halo);opacity:.14;filter:blur(1.4px)}
`;
export const LIVE = `
function mount(root){
  const P = ${JSON.stringify(P)}, PIN = ${JSON.stringify(PIN)};
  const still = matchMedia("(prefers-reduced-motion: reduce)");
  const bubs = [...root.querySelectorAll(".ct-b")], pin = root.querySelector(".ct-pin"), shadow = root.querySelector(".ct-shadow");
  let live = false, frame = 0, t = 0, last = 0;
  function draw(){
    /* the conversation: a bubble every 1.1 s, a pause, then it clears and starts again */
    const c = t % 6.4;
    bubs.forEach((b, i) => b.classList.toggle("is-off", !(c > 0.4 + i * 1.1 && c < 6)));
    const z = 1.6 + Math.sin(t * 1.6) * 1.6, g = iso([PIN[0], PIN[1], 0], P);
    pin.setAttribute("transform", translateAlong(P, [0, 0, z]));
    shadow.setAttribute("transform", "translate(" + g[0].toFixed(2) + " " + g[1].toFixed(2) + ") scale(" + (1 - z / 12).toFixed(3) + ")");
  }
  function tick(now){ const dt = last ? Math.min((now - last) / 1000, 1 / 20) : 1 / 60; last = now; t += dt; draw(); frame = live ? requestAnimationFrame(tick) : 0; }
  t = 4.8; draw();
  return { start(){ live = true; if (still.matches || frame) return; last = 0; frame = requestAnimationFrame(tick); }, stop(){ live = false; } };
}
`;
export const SVG = svg;
if ((process.argv[1] || "").endsWith("contact.mjs")) { writeFileSync(new URL("./contact.html", import.meta.url), previewPage({ key: "contact", title: "Contact", svg, cap: "Contact us", sub: "FAQs, calls and campus visits", live: LIVE, css: CSS })); console.log("wrote", svg.length); }
